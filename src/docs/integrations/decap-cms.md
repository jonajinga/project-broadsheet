---
title: Decap CMS
subtitle: Give writers a browser-based editor with access control, role-based permissions, and an editorial approval workflow — all backed by Git and hosted inside your own repo.
order: 6
updated: 2026-04-19
---

<span class="g-term" data-term="Decap CMS">Decap CMS</span> is a self-hosted, browser-based editor for Git-backed content. Writers get a form-based interface; every save creates a pull request rather than committing directly to `main`. An editor reviews and merges the PR to publish. No database, no external CMS service.

## Why Decap CMS instead of a simpler option

Project Broadsheet is Markdown-in-Git by design. Decap CMS fits that model while adding three layers that a bare GitHub workflow cannot:

| Need | How it is solved |
|---|---|
| Only invited people reach the editor | Cloudflare Zero Trust Access gates `/admin/` by email allowlist |
| Writers cannot self-publish | `publish_mode: editorial_workflow` — all saves become draft PRs |
| Different people have different abilities | GitHub collaborator roles + branch protection on `main` |

## Architecture overview

Four components work together:

```
Writer visits /admin/
      ↓
Cloudflare Zero Trust Access
  — email OTP challenge
  — only allowlisted addresses pass
      ↓
Decap CMS UI (served from src/admin/)
  — "Login with GitHub" opens a popup to /api/auth
      ↓
Cloudflare Pages Function at /api/auth
  — redirects to GitHub OAuth
  — exchanges the code for an access token
  — posts the token back to Decap
      ↓
Save → draft branch + PR (never a direct commit to main)
      ↓
Editor reviews PR on GitHub → merges → Cloudflare Pages deploys
```

**Why a Pages Function and not PKCE?** Decap CMS's `auth_type: pkce` silently falls back to Netlify's auth server (`api.netlify.com`) in practice, which returns a 404 on Cloudflare Pages. The self-hosted OAuth proxy at `/api/auth` is the reliable alternative and requires no additional service.

## Prerequisites

- A free [GitHub account](https://github.com) and your repository
- A [Cloudflare account](https://cloudflare.com) (free tier covers everything here)
- Your site deployed to [Cloudflare Pages](/docs/deployment/cloudflare-pages/)

## Step 1: Create a GitHub OAuth App

1. Go to **github.com → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Fill in:
   - **Application name:** anything (e.g. "My Publication CMS")
   - **Homepage URL:** `https://your-domain.com`
   - **Authorization callback URL:** `https://your-domain.com/api/auth`
3. Click **Register application**
4. Note the **Client ID**
5. Click **Generate a new client secret** and note the **Client Secret**

Both values are needed in the next steps.

## Step 2: Add the OAuth proxy function

Create `functions/api/auth.js` in your repository root. This Cloudflare Pages Function handles the GitHub OAuth exchange:

```js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (code) {
    const res = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Cloudflare-Pages-CMS-Auth'
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code
      })
    });
    const data = await res.json();

    if (data.error) {
      const msg = JSON.stringify('authorization:github:error:' + (data.error_description || data.error));
      return page(`sendMsg(${msg});`);
    }

    const payload = JSON.stringify({ token: data.access_token, provider: 'github' });
    const msg = JSON.stringify('authorization:github:success:' + payload);
    return page(`sendMsg(${msg});`);
  }

  const redirectUri = `${url.origin}/api/auth`;
  const scope = url.searchParams.get('scope') || 'repo,user';
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  return page(`window.location.href = ${JSON.stringify(authUrl)};`);
}

function page(script) {
  return new Response(`<!DOCTYPE html><html><body>
<script>
function sendMsg(msg) {
  var done = false;
  window.addEventListener('message', function(e) {
    if (!done && typeof e.data === 'string' && e.data.indexOf('authorizing:github') === 0) {
      done = true;
      window.opener.postMessage(msg, e.origin || '*');
      setTimeout(function() { window.close(); }, 300);
    }
  });
  if (window.opener) window.opener.postMessage('authorizing:github', '*');
  setTimeout(function() { if (!done && window.opener) { done = true; window.opener.postMessage(msg, '*'); setTimeout(function() { window.close(); }, 300); } }, 1000);
}
${script}
<\/script></body></html>`, { headers: { 'Content-Type': 'text/html' } });
}
```

## Step 3: Add environment variables to Cloudflare Pages

In Cloudflare Pages → your project → **Settings → Environment Variables**, add two variables to the **Production** environment:

| Variable name | Value |
|---|---|
| `GITHUB_CLIENT_ID` | The Client ID from Step 1 |
| `GITHUB_CLIENT_SECRET` | The Client Secret from Step 1 |

## Step 4: Update your config.yml backend block

In `src/admin/config.yml`, set the backend to use your OAuth proxy:

```yaml
backend:
  name: github
  repo: your-github-username/your-repo-name
  branch: main
  base_url: https://your-domain.com
  auth_endpoint: api/auth
```

Replace `your-github-username/your-repo-name` with your actual repository and `your-domain.com` with your Cloudflare Pages domain (e.g. `my-pub.pages.dev` before you add a custom domain).

## Step 5: Protect the main branch

On GitHub → your repo → **Settings → Branches → Add branch ruleset** (or "Add rule"):

- Branch name pattern: `main`
- Check **Require a pull request before merging**
- Set **Required approvals** to `1`
- Leave **Allow force pushes** unchecked

Writers with "Write" collaborator access cannot merge to `main` under this rule. Repository admins can merge without approval by default. To also require approval for admins, enable **"Do not allow bypassing the above settings"** — but note that admins would then also need someone else to approve their own changes before publishing.

## Step 6: Set up Cloudflare Zero Trust Access

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Zero Trust → Access → Applications → Add an application**
2. Choose **Self-hosted and private**
3. Set the **Application domain** to `your-domain.com` with path `/admin/`
4. Under **Policies**, create a policy:
   - **Action:** Allow
   - **Selector:** Emails → add each writer's email address
5. Enable **One-time PIN** as the authentication method
6. Save

Anyone not on the allowlist hits a Cloudflare block page before they ever reach the CMS. Free Zero Trust accounts support up to 50 users at no cost.

## Step 7: Exclude /admin/ from the service worker

If your publication uses a PWA service worker (Project Broadsheet ships with one), you must exclude `/admin/` from caching. Otherwise the service worker can serve a stale `config.yml` to Decap, causing it to fall back to Netlify auth.

In your `src/sw.njk` (or `sw.js`), add this early return inside the fetch handler:

```js
self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  // Never cache the CMS admin — Decap must always get a fresh config.yml
  if (new URL(req.url).pathname.startsWith('/admin/')) return;

  // ... rest of your fetch handler
});
```

## Step 8: Invite writers

For each writer:

1. Add their email to the **Cloudflare Access allowlist**
2. Add them as a **GitHub repository collaborator** with **Write** access (repo → Settings → Collaborators)

Writers visit `https://your-domain.com/admin/`, enter an email one-time PIN, sign in with GitHub, and see the full editor.

## Using the editor

**Writer workflow:**

1. Sign in at `/admin/` (email OTP → GitHub)
2. Click a section (e.g. News) → **New News**
3. Fill in the form: title, description, author, date, body
4. Click **Save** — this creates a draft PR branch; nothing is published yet
5. Move the card to "In Review" when it is ready for an editor

**Editor workflow:**

1. Open the GitHub PR created by Decap (or use the "Ready to Publish" column)
2. Review the content; request changes via PR comments if needed
3. Approve and merge the PR
4. Cloudflare Pages rebuilds automatically — the article is live within 2–3 minutes

**Note on the "Check for Preview" button:** This button in Decap's editorial board is hardcoded for Netlify deploy preview URLs and does not work on Cloudflare Pages. Instead, use the preview URL linked directly on the GitHub PR — Cloudflare automatically builds a preview deployment for every draft PR branch and posts the URL as a status check on the PR.

## Preview deployments that show drafts

By default, draft articles (`draft: true`) are excluded from the Eleventy build. To make them visible in Cloudflare Pages preview deployments (so editors can review before merging), add `SHOW_DRAFTS=1` as an environment variable scoped to **Preview** deployments only in Cloudflare Pages settings.

In your `content.11tydata.js`, ensure drafts are respected:

```js
eleventyExcludeFromCollections: (data) => {
  if (data.draft && process.env.SHOW_DRAFTS !== "1") return true;
  // ... rest of your logic
}
```

And in your `.eleventy.js` collection filters:

```js
.filter(item => (!item.data.draft || process.env.SHOW_DRAFTS === "1") && isNotFuture(item))
```

Production builds are unaffected — `SHOW_DRAFTS` is only set in the Preview environment.

## The `src/admin/` folder

Project Broadsheet ships with:

```
src/admin/
├── index.html    # Loads the Decap CMS JavaScript bundle from CDN
└── config.yml    # All collection and field definitions
```

`config.yml` defines all content types with human-readable labels, field ordering, and descriptive hints. All optional fields must explicitly set `required: false` — Decap CMS treats every field as required by default.

## Multiple writers and roles

| Role | Setup |
|---|---|
| **Writer** | Cloudflare Access allowlist + GitHub collaborator (Write) |
| **Editor** | Cloudflare Access allowlist + GitHub collaborator (Maintain or Admin) |
| **Admin** | GitHub repo owner |

Writers create PRs. Editors merge PRs. Admins manage repo settings and Access policies.

## What to do next

- [After your first deploy](/docs/getting-started/after-first-deploy/) for the full setup checklist
- [Authors](/docs/content/authors/) to add bylines before your first article
- [Front matter reference](/docs/content/front-matter-reference/) for every field the CMS shows
- [Deployment: Cloudflare Pages](/docs/deployment/cloudflare-pages/) for deploy configuration

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

<figure class="flowchart" aria-label="Decap CMS access and authentication flow">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 580" role="img" aria-hidden="true" style="max-width:560px;width:100%;display:block;margin:0 auto">
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="var(--color-text-muted,#6b7280)"/>
    </marker>
  </defs>
  <!-- boxes -->
  <!-- 1: Writer -->
  <rect x="180" y="20" width="200" height="44" rx="4" fill="var(--color-surface-raised,#f9fafb)" stroke="var(--color-border,#d1d5db)" stroke-width="1.5"/>
  <text x="280" y="37" text-anchor="middle" font-family="inherit" font-size="13" fill="var(--color-text,#111827)" font-weight="600">Writer visits /admin/</text>
  <text x="280" y="54" text-anchor="middle" font-family="inherit" font-size="11" fill="var(--color-text-muted,#6b7280)">e.g. your-pub.pages.dev/admin/</text>
  <!-- arrow 1→2 -->
  <line x1="280" y1="64" x2="280" y2="98" stroke="var(--color-text-muted,#6b7280)" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- 2: Cloudflare Zero Trust -->
  <rect x="120" y="100" width="320" height="56" rx="4" fill="#fff7ed" stroke="#fb923c" stroke-width="1.5"/>
  <text x="280" y="120" text-anchor="middle" font-family="inherit" font-size="13" fill="#9a3412" font-weight="600">Cloudflare Zero Trust Access</text>
  <text x="280" y="138" text-anchor="middle" font-family="inherit" font-size="11" fill="#c2410c">Email OTP challenge — only allowlisted addresses pass</text>
  <!-- blocked path -->
  <line x1="440" y1="128" x2="510" y2="128" stroke="#fca5a5" stroke-width="1.5" marker-end="url(#arr)" stroke-dasharray="4 3"/>
  <rect x="512" y="110" width="36" height="36" rx="4" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="530" y="131" text-anchor="middle" font-family="inherit" font-size="10" fill="#991b1b" font-weight="600">Block</text>
  <text x="475" y="122" text-anchor="middle" font-family="inherit" font-size="9" fill="#9ca3af">not listed</text>
  <!-- arrow 2→3 -->
  <line x1="280" y1="156" x2="280" y2="190" stroke="var(--color-text-muted,#6b7280)" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- 3: Decap CMS UI -->
  <rect x="140" y="192" width="280" height="56" rx="4" fill="var(--color-surface-raised,#f9fafb)" stroke="var(--color-border,#d1d5db)" stroke-width="1.5"/>
  <text x="280" y="213" text-anchor="middle" font-family="inherit" font-size="13" fill="var(--color-text,#111827)" font-weight="600">Decap CMS UI loads</text>
  <text x="280" y="231" text-anchor="middle" font-family="inherit" font-size="11" fill="var(--color-text-muted,#6b7280)">"Login with GitHub" — opens popup to /api/auth</text>
  <!-- arrow 3→4 -->
  <line x1="280" y1="248" x2="280" y2="282" stroke="var(--color-text-muted,#6b7280)" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- 4: Pages Function -->
  <rect x="100" y="284" width="360" height="68" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="280" y="305" text-anchor="middle" font-family="inherit" font-size="13" fill="#1e3a8a" font-weight="600">Cloudflare Pages Function /api/auth</text>
  <text x="280" y="323" text-anchor="middle" font-family="inherit" font-size="11" fill="#1d4ed8">Redirects to GitHub OAuth → user approves</text>
  <text x="280" y="340" text-anchor="middle" font-family="inherit" font-size="11" fill="#1d4ed8">Exchanges code for token → posts token back to Decap</text>
  <!-- arrow 4→5 -->
  <line x1="280" y1="352" x2="280" y2="386" stroke="var(--color-text-muted,#6b7280)" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- 5: Writer in CMS -->
  <rect x="140" y="388" width="280" height="44" rx="4" fill="#f0fdf4" stroke="#4ade80" stroke-width="1.5"/>
  <text x="280" y="407" text-anchor="middle" font-family="inherit" font-size="13" fill="#14532d" font-weight="600">Writer is in — editing begins</text>
  <text x="280" y="424" text-anchor="middle" font-family="inherit" font-size="11" fill="#166534">Save creates a draft PR branch, never a direct commit</text>
  <!-- arrow 5→6 -->
  <line x1="280" y1="432" x2="280" y2="466" stroke="var(--color-text-muted,#6b7280)" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- 6: Deploy -->
  <rect x="120" y="468" width="320" height="44" rx="4" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
  <text x="280" y="488" text-anchor="middle" font-family="inherit" font-size="13" fill="#581c87" font-weight="600">Editor approves PR on GitHub → Merge</text>
  <text x="280" y="505" text-anchor="middle" font-family="inherit" font-size="11" fill="#6b21a8">Cloudflare Pages rebuilds → article is live in ~2 min</text>
  <!-- step labels -->
  <text x="108" y="44" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600">1</text>
  <text x="108" y="132" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600">2</text>
  <text x="128" y="224" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600">3</text>
  <text x="88" y="320" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600">4</text>
  <text x="128" y="412" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600">5</text>
  <text x="108" y="492" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600">6</text>
</svg>
<figcaption style="text-align:center;font-size:0.8rem;color:var(--color-text-muted,#6b7280);margin-top:0.5rem">Access and authentication flow for Decap CMS on Cloudflare Pages</figcaption>
</figure>

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

<figure class="flowchart" aria-label="Editorial workflow from draft to live article">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 300" role="img" aria-hidden="true" style="max-width:620px;width:100%;display:block;margin:0 auto">
  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="var(--color-text-muted,#6b7280)"/>
    </marker>
  </defs>
  <!-- Stage 1: Draft -->
  <rect x="20" y="100" width="110" height="80" rx="4" fill="var(--color-surface-raised,#f9fafb)" stroke="var(--color-border,#d1d5db)" stroke-width="1.5"/>
  <text x="75" y="132" text-anchor="middle" font-family="inherit" font-size="12" fill="var(--color-text,#111827)" font-weight="600">Writer saves</text>
  <text x="75" y="150" text-anchor="middle" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)">Decap creates a</text>
  <text x="75" y="163" text-anchor="middle" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)">draft PR branch</text>
  <!-- label -->
  <text x="75" y="96" text-anchor="middle" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600" letter-spacing="0.05em">DRAFT</text>
  <!-- arrow 1→2 -->
  <line x1="130" y1="140" x2="162" y2="140" stroke="var(--color-text-muted,#6b7280)" stroke-width="1.5" marker-end="url(#arr2)"/>
  <!-- Stage 2: In Review -->
  <rect x="164" y="100" width="110" height="80" rx="4" fill="#fffbeb" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="219" y="132" text-anchor="middle" font-family="inherit" font-size="12" fill="#92400e" font-weight="600">In Review</text>
  <text x="219" y="150" text-anchor="middle" font-family="inherit" font-size="10" fill="#b45309">PR open on GitHub</text>
  <text x="219" y="163" text-anchor="middle" font-family="inherit" font-size="10" fill="#b45309">Preview URL available</text>
  <text x="219" y="96" text-anchor="middle" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600" letter-spacing="0.05em">REVIEW</text>
  <!-- arrow 2→3 (approve) -->
  <line x1="274" y1="140" x2="306" y2="140" stroke="var(--color-text-muted,#6b7280)" stroke-width="1.5" marker-end="url(#arr2)"/>
  <!-- arrow 2→1 (changes) -->
  <path d="M 219 100 Q 219 68 148 68 Q 75 68 75 100" fill="none" stroke="#fca5a5" stroke-width="1.5" marker-end="url(#arr2)" stroke-dasharray="4 3"/>
  <text x="147" y="62" text-anchor="middle" font-family="inherit" font-size="9" fill="#9ca3af">changes requested</text>
  <!-- Stage 3: Approved -->
  <rect x="308" y="100" width="110" height="80" rx="4" fill="#f0fdf4" stroke="#4ade80" stroke-width="1.5"/>
  <text x="363" y="132" text-anchor="middle" font-family="inherit" font-size="12" fill="#14532d" font-weight="600">Approved</text>
  <text x="363" y="150" text-anchor="middle" font-family="inherit" font-size="10" fill="#166534">Editor merges PR</text>
  <text x="363" y="163" text-anchor="middle" font-family="inherit" font-size="10" fill="#166534">to main on GitHub</text>
  <text x="363" y="96" text-anchor="middle" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600" letter-spacing="0.05em">APPROVED</text>
  <!-- arrow 3→4 -->
  <line x1="418" y1="140" x2="450" y2="140" stroke="var(--color-text-muted,#6b7280)" stroke-width="1.5" marker-end="url(#arr2)"/>
  <!-- Stage 4: Live -->
  <rect x="452" y="100" width="148" height="80" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="526" y="132" text-anchor="middle" font-family="inherit" font-size="12" fill="#1e3a8a" font-weight="600">Live in ~2 min</text>
  <text x="526" y="150" text-anchor="middle" font-family="inherit" font-size="10" fill="#1d4ed8">Cloudflare Pages</text>
  <text x="526" y="163" text-anchor="middle" font-family="inherit" font-size="10" fill="#1d4ed8">rebuilds &amp; deploys</text>
  <text x="526" y="96" text-anchor="middle" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)" font-weight="600" letter-spacing="0.05em">LIVE</text>
  <!-- bottom note -->
  <text x="310" y="228" text-anchor="middle" font-family="inherit" font-size="10" fill="var(--color-text-muted,#6b7280)">Writers cannot merge to main — only editors and admins can. Nothing goes live until a PR is approved.</text>
</svg>
<figcaption style="text-align:center;font-size:0.8rem;color:var(--color-text-muted,#6b7280);margin-top:0.5rem">From writer save to live article — the editorial workflow</figcaption>
</figure>

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

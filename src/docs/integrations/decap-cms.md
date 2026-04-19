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

Three components work together:

```
Writer visits /admin/
      ↓
Cloudflare Zero Trust Access
  — email OTP challenge
  — only allowlisted addresses pass
      ↓
Decap CMS UI (served from src/admin/)
  — GitHub PKCE OAuth to authenticate
  — no server required
      ↓
Save → draft branch + PR (not a direct commit to main)
      ↓
Editor reviews PR on GitHub → merges → Cloudflare Pages deploys
```

## Prerequisites

You need:

- A free [GitHub account](https://github.com) and your repository
- A [Cloudflare account](https://cloudflare.com) (free tier covers everything here)
- Your site deployed to [Cloudflare Pages](/docs/deployment/cloudflare-pages/)

## Step 1: Create a GitHub OAuth App

1. Go to **github.com → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Fill in:
   - **Application name:** anything (e.g. "My Publication CMS")
   - **Homepage URL:** `https://your-domain.com`
   - **Authorization callback URL:** `https://your-domain.com/admin/`
3. Click **Register application**
4. Note the **Client ID** — you will need it in the next step

## Step 2: Add the Client ID to your config

In `src/admin/config.yml` (already included in Project Broadsheet), replace the placeholder:

```yaml
backend:
  name: github
  repo: your-github-username/your-repo-name
  branch: main
  auth_type: pkce
  app_id: YOUR_GITHUB_OAUTH_APP_CLIENT_ID  # ← replace this
```

Also update `repo:` to match your repository.

## Step 3: Protect the main branch

On GitHub → your repo → **Settings → Branches → Add branch protection rule**:

- Branch name pattern: `main`
- Check **Require a pull request before merging**
- Check **Require approvals** (set to 1)

This ensures nobody — not even admins — can bypass the editorial review pipeline by pushing directly.

## Step 4: Set up Cloudflare Zero Trust Access

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Zero Trust → Access → Applications → Add an application**
2. Choose **Self-hosted**
3. Set the **Application domain** to `your-domain.com/admin/`
4. Under **Policies**, create a policy:
   - **Action:** Allow
   - **Rule:** Emails → add each writer's email address
   - (Or use "One-time PIN" to allow any email you approve)
5. Save

Anyone not on the allowlist hits a Cloudflare block page before they ever reach your CMS.

Free Cloudflare Zero Trust accounts support up to 50 users at no cost.

## Step 5: Invite writers

For each writer:

1. Add them to the **Cloudflare Access allowlist** (their email)
2. Add them as a **GitHub repository collaborator** with **Write** access (Settings → Collaborators)

Writers will:
- Pass the Cloudflare email OTP to reach the CMS
- Authenticate with GitHub to commit
- Create drafts that become PRs — they cannot merge to `main` themselves

## Using the editor

The CMS is at `https://your-domain.com/admin/`.

The left sidebar shows all content collections (News, Opinion, Authors, Site Settings, etc.) in logical groups. The editorial board shows three columns: **Drafts → In Review → Ready to Publish**.

**Writer workflow:**

1. Sign in at `/admin/` (email OTP → GitHub)
2. Click the section (e.g. News) → **New News**
3. Fill in the form: title, description, author, date, body
4. Click **Save** — this creates a draft PR branch
5. Optionally move the card to "In Review" to signal it is ready for an editor

**Editor workflow:**

1. Open the PR on GitHub (or use the "Ready to Publish" column in Decap)
2. Review the content, request changes via PR comments if needed
3. Approve and merge the PR
4. Cloudflare Pages rebuilds automatically — the article is live within 2–3 minutes

## The `src/admin/` folder

Project Broadsheet ships with:

```
src/admin/
├── index.html    # Loads the Decap CMS JavaScript bundle from CDN
└── config.yml    # All collection and field definitions (translated from Pages CMS format)
```

`config.yml` defines all content types with human-readable labels, field ordering, and descriptive hints. You should not need to edit it unless you add custom fields.

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

---
title: Deploy to Cloudflare Pages
subtitle: The fastest, cheapest (free), most reliable way to host Project Broadsheet.
order: 1
updated: 2026-04-17
---

Cloudflare Pages is our recommended host. It's free for personal sites, globally fast, handles HTTPS automatically, and builds directly from your GitHub repo.

## Prerequisites

- A GitHub repository for your Project Broadsheet site
- A free Cloudflare account

## Connect the repo

1. Sign in to <https://dash.cloudflare.com>.
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Authorize Cloudflare to access GitHub.
4. Select your repository.

## Build settings

Set these values in the Cloudflare Pages setup:

- **Framework preset:** Eleventy
- **Build command:** `npm run build`
- **Build output directory:** `_site`
- **Environment variables (optional):**
  - `NODE_VERSION` = `20` (or `18`)

Click **Save and Deploy**. The first build takes about a minute.

## Custom domain

In your Pages project → **Custom domains** → **Set up a custom domain**. Enter your domain. If it's managed by Cloudflare DNS, the record is added automatically. Otherwise follow the CNAME instructions from your DNS provider.

## Subsequent deploys

Every push to your main branch triggers a fresh build. Preview deploys are created for pull requests.

## What's next

- [Deploy to Netlify](/docs/deployment/netlify/) if you prefer that platform.
- [Configure environment variables](/docs/deployment/env-vars/) for production secrets.

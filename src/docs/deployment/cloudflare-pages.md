---
title: Deploy to Cloudflare Pages
subtitle: Cloudflare Pages is Project Broadsheet's recommended host. It is free for personal publications, served globally, and it rebuilds directly from your GitHub repository on every push.
order: 1
updated: 2026-04-17
---

<span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span> is the recommended host for Project Broadsheet. It is free for personal sites, served from Cloudflare's global network, issues HTTPS certificates automatically, and triggers a fresh build every time you push to <span class="g-term" data-term="GitHub">GitHub</span>. There is no Cloudflare-side software to install or maintain.

## Prerequisites

- A GitHub repository containing your Project Broadsheet site.
- A free Cloudflare account.

## Connect the repository

1. Sign in to the Cloudflare dashboard at <https://dash.cloudflare.com>.
2. Navigate to **Workers & Pages**, then **Create application**, then **Pages**, then **Connect to Git**.
3. Authorize Cloudflare to read your GitHub account. You may scope access to a single repository.
4. Select the repository containing Project Broadsheet.

## Configure the build

Enter the following values on the build settings screen:

- **Framework preset:** Eleventy
- **Build command:** `npm run build`
- **Build output directory:** `_site`
- **Environment variables** (optional): `NODE_VERSION` = `20` (or `18` if you prefer the long-term support release).

Click **Save and Deploy**. The first build typically completes in under a minute.

## Attach a custom domain

From the Pages project, open **Custom domains**, then **Set up a custom domain**. Enter the domain name. If the domain is managed by Cloudflare DNS, the required record is added automatically; otherwise Cloudflare provides a `CNAME` value to add at your DNS provider.

## What happens on subsequent commits

Every push to the `main` branch triggers a fresh production build. Pull requests receive their own preview deploy at a unique `.pages.dev` URL — useful for reviewing an article with an editor before it goes live.

## What to do next

- [Deploy to Netlify](/docs/deployment/netlify/) if you prefer that platform.
- [Configure environment variables](/docs/deployment/env-vars/) for production secrets like analytics keys or form-handler credentials.

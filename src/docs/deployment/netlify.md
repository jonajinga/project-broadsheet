---
title: Deploy to Netlify
subtitle: Netlify is a well-established static host with a generous free tier and strong CI/CD features. This guide covers connecting a Project Broadsheet repo, build settings, and custom domains.
order: 2
updated: 2026-04-17
---

Netlify is a popular alternative to <span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span>. It has a slightly more mature deploy dashboard, branch deploys with per-commit preview URLs, and an extensive plugin ecosystem. The free tier is enough for most independent publications.

## Connect your repo

1. Sign in at <https://app.netlify.com>.
2. Click **Add new site**, then **Import an existing project**.
3. Choose GitHub and authorize access to the Project Broadsheet repository.

## Build settings

On the configuration screen:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `_site`
- **Node version**: set `NODE_VERSION` to `20` (or `18`) in environment variables.

Click **Deploy site**. The first build completes in about 60 seconds.

## Custom domain

Settings → **Domains** → **Add custom domain**. Netlify provides a `CNAME` value to point at from your DNS provider. HTTPS is issued automatically via Let's Encrypt.

## Deploy previews

Netlify automatically creates a preview URL for every pull request. Share the link with editors or collaborators for review before merging to `main`.

## `netlify.toml` (optional)

If you prefer configuration in the repo over the dashboard, create a `netlify.toml` at the repo root:

```toml
[build]
  command = "npm run build"
  publish = "_site"

[build.environment]
  NODE_VERSION = "20"
```

## Redirects

Migrating from another platform? Add a `_redirects` file at the repo root:

```
/old-path /new-path 301
```

Netlify picks this up on every deploy and serves the redirects for you.

## Differences from Cloudflare Pages

- **Cold starts.** Neither has meaningful cold-start time for static content.
- **Global distribution.** Both are comparable. Cloudflare's network is larger; Netlify's is sufficient.
- **Pricing.** Both offer generous free tiers. Paid plans start in similar ranges.
- **Build minutes.** Netlify's free tier includes 300 build minutes per month.

## What to do next

- [Custom domain](/docs/deployment/custom-domain/) for DNS and HTTPS setup.
- [Environment variables](/docs/deployment/env-vars/) for production secrets.
- [Cloudflare Pages](/docs/deployment/cloudflare-pages/) to compare.

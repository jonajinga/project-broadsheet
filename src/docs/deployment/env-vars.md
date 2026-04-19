---
title: Environment variables
subtitle: How Project Broadsheet reads environment variables during the build, which variables matter for production, and how to set them on each major host.
order: 5
updated: 2026-04-17
---

Project Broadsheet reads a handful of environment variables during the build. They're optional, but in production a few of them are worth setting.

## What variables the build reads

- `SITE_URL`: the canonical URL of the site. Used for `<link rel="canonical">`, <span class="g-term" data-term="Open Graph">Open Graph</span> image URLs, <span class="g-term" data-term="RSS">RSS</span> feed self-links, and the XML <span class="g-term" data-term="sitemap">sitemap</span>. Falls back to the value in `meta.js`.
- `NODE_VERSION`: tells your host which Node.js runtime to use for the build. Set to `20` (recommended) or `18` (LTS).

## Where to set them

**Cloudflare Pages**

1. Pages project → **Settings** → **Environment variables**.
2. Add `NODE_VERSION` and any others, one per environment (Production, Preview).
3. Save. The next build picks them up.

**Netlify**

1. Site settings → **Environment variables** → **Add a variable**.
2. Set scope (all deploy contexts, or per-context).
3. Save.

**Vercel**

1. Project settings → **Environment Variables**.
2. Add the key/value and select target environments (Production, Preview, Development).
3. Redeploy to apply.

## Local overrides

For local development, create a `.env` file at the repo root (it's in `.gitignore`):

```
SITE_URL=http://localhost:8080
```

Install `dotenv` or read it manually in `eleventy.config.js`. Most publishers don't need local overrides; defaults work fine.

## What's NOT an environment variable

Integration keys (`web3formsKey`, `buttondownUsername`, `umamiWebsiteId`) live in `src/_data/meta.js`, committed to the repository. These are public values and don't need protection. If you want them out of git, you can move them to env vars and read them in `meta.js`:

```js
web3formsKey: process.env.WEB3FORMS_KEY || "",
```

Then set `WEB3FORMS_KEY` in your host's environment variables. Only worth doing if you have a reason to keep these private.

## What to do next

- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) for the default host walkthrough.
- [Custom domain and HTTPS](/docs/deployment/custom-domain/) for DNS setup.
- [Integrations](/docs/integrations/) to configure the services whose keys you'll add.

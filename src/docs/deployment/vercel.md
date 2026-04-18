---
title: Deploy to Vercel
subtitle: Vercel deploys Project Broadsheet from a GitHub repository with a zero-configuration setup. Fast global CDN, preview deploys for every pull request, and a simple dashboard.
order: 3
updated: 2026-04-17
---

Vercel is a third major option for hosting Project Broadsheet, alongside <span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span> and Netlify. It's best known for Next.js but handles any static site equally well. The free tier covers hobby and personal publications.

## Connect the repo

1. Sign in at <https://vercel.com>.
2. Click **Add New**, then **Project**.
3. Import your Project Broadsheet repository from GitHub.

## Build settings

Vercel auto-detects Eleventy. If prompted:

- **Framework preset**: Eleventy
- **Build command**: `npm run build`
- **Output directory**: `_site`
- **Install command**: `npm install`

Click **Deploy**. First build takes about 60 seconds.

## Custom domain

Project settings → **Domains** → **Add**. Vercel issues HTTPS automatically. If the domain is on Cloudflare DNS, you can point a `CNAME` at Vercel's endpoint; if it's elsewhere, Vercel gives explicit DNS instructions.

## Preview deploys

Every pull request gets a unique preview URL. Push commits to a branch, and Vercel rebuilds the preview in under a minute. Share the URL with editors or reviewers.

## Environment variables

Project settings → **Environment Variables**. Define keys for production, preview, or local development independently. Common entries for Project Broadsheet:

- `SITE_URL` (for canonical URLs during build)
- Anything referenced in `meta.js` that you prefer to keep out of git.

## `vercel.json` (optional)

If you want config in the repo:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "_site"
}
```

## Redirects

Vercel's equivalent of `_redirects` lives in `vercel.json`:

```json
{
  "redirects": [
    { "source": "/old-path", "destination": "/new-path", "permanent": true }
  ]
}
```

## When to pick Vercel

Vercel's strengths are fast preview builds, a clean dashboard, and excellent Next.js support. For a pure Eleventy static site, Cloudflare Pages and Netlify are equally capable. Pick Vercel if you already use it for other projects, or if you prefer their developer experience.

## What to do next

- [Cloudflare Pages](/docs/deployment/cloudflare-pages/) for the default recommended host.
- [Netlify](/docs/deployment/netlify/) for the third option.
- [Custom domain](/docs/deployment/custom-domain/) for DNS setup.

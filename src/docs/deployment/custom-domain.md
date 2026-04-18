---
title: Custom domain and HTTPS
subtitle: Point a domain you own at your Project Broadsheet site and get an automatic TLS certificate. Works on Cloudflare Pages, Netlify, and Vercel, with the same general steps.
order: 4
updated: 2026-04-17
---

Every major static host (<span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span>, Netlify, Vercel) supports custom domains with free HTTPS certificates. The process is similar across all three: add the domain to your project, update DNS, wait a few minutes.

## Buy a domain

If you don't already own one, Cloudflare Registrar is the cheapest option (at-cost pricing, no markup). Namecheap, Porkbun, and Hover are also reasonable. Avoid GoDaddy, which overcharges and upsells aggressively.

## Connect the domain

### Cloudflare Pages

1. In the Pages project, go to **Custom domains** → **Set up a custom domain**.
2. Enter your domain.
3. If DNS is already on Cloudflare, the record is added automatically.
4. If DNS is elsewhere, add the `CNAME` they provide at your DNS provider.

### Netlify

1. Site settings → **Domain management** → **Add custom domain**.
2. Enter your domain.
3. Follow the `ALIAS` or `CNAME` instructions at your DNS provider.

### Vercel

1. Project settings → **Domains** → **Add**.
2. Enter your domain.
3. Follow the `CNAME` or `A` record instructions.

## HTTPS

All three hosts issue a free TLS certificate automatically via Let's Encrypt (or Cloudflare's own CA). You don't need to buy a certificate or configure anything. The first issuance takes 2–10 minutes.

## Apex vs. subdomain

- **Apex domain** (`example.com`): requires an `A` or `ALIAS` record.
- **Subdomain** (`www.example.com`, `publication.example.com`): requires a `CNAME` record.

Using a subdomain is simpler and widely supported. Using the apex requires your DNS provider to support `ALIAS` or `ANAME` records, or the use of a `www` redirect.

## Update your `meta.js`

Once DNS propagates and HTTPS is issued, update `src/_data/meta.js`:

```js
url: "https://example.com"
```

This URL is used for canonical tags, <span class="g-term" data-term="Open Graph">Open Graph</span> image URLs, and the <span class="g-term" data-term="RSS">RSS</span> feed's `<link>`. On the next production build, every page regenerates with the correct URL.

## What to do next

- [Cloudflare Pages](/docs/deployment/cloudflare-pages/) for the full deploy walkthrough.
- [Environment variables](/docs/deployment/env-vars/) for API keys and secrets.
- [SEO: sitemap](/docs/seo/sitemap/) to submit your new domain to search engines.

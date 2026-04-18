---
title: Performance and optimization
subtitle: How Project Broadsheet achieves high PageSpeed scores, what to watch for as your archive grows, and how to optimize images, CSS, and JavaScript for production.
order: 6
updated: 2026-04-18
---

Project Broadsheet targets 95–100 on all four Google PageSpeed Insights categories (Performance, Accessibility, Best Practices, SEO) out of the box. This page explains the techniques that make those scores possible and how to maintain them as your publication grows.

## What the framework does automatically

**Single CSS file** - All CSS partials are concatenated at build time into one `global.css`. There are no `@import` statements in the shipped stylesheet, which eliminates render-blocking waterfall requests.

**Deferred JavaScript** - All scripts use `defer` or `type="module"`, so they never block HTML parsing.

**Minified HTML** - The `@sardine/eleventy-plugin-tinyhtml` plugin strips whitespace and comments from every page at build time.

**Instant.page** - The `instant.page` library prefetches links when a reader hovers, making navigation feel instant.

**No framework overhead** - There is no React, Vue, or other component runtime. The JavaScript bundle is small by default.

**Static files at the edge** - When deployed to Cloudflare Pages or Netlify, every page is served from a CDN edge node near the reader, minimizing latency.

## The biggest performance lever: images

Images are the most common cause of PageSpeed regressions. Keep cover images under 200 KB and inline images under 150 KB. Use WebP format where possible - it produces files roughly 30% smaller than JPEG at equal quality.

Compress images before committing:

```bash
# Using ImageMagick
convert input.jpg -quality 82 -strip output.jpg

# Or use the web-based Squoosh: https://squoosh.app
```

## CSS cache busting

The CSS `<link>` tag includes a version query string:

```html
<link rel="stylesheet" href="/assets/css/global.css?v={{ meta.version }}">
```

When you update `version` in `src/_data/meta.js`, browsers fetch the new stylesheet instead of serving a stale cached version. Bump the version number with each significant CSS change.

## Build time vs. page count

Eleventy builds scale roughly linearly with page count. A typical publication with 500 articles builds in under 30 seconds. When build time becomes a concern:

- Use `npm start` (dev server with incremental rebuilds) for day-to-day writing.
- Reserve `npm run build` for deploys.
- Pagefind indexing (which runs after the Eleventy build) adds 5–15 seconds for large archives.

## Checking PageSpeed

Run PageSpeed Insights against your live URL:

1. Go to [pagespeed.web.dev](https://pagespeed.web.dev).
2. Enter your URL and click **Analyze**.
3. Check both **Mobile** and **Desktop** scores.

Run this check after major changes to CSS, JS, or image assets.

## What to watch for as your archive grows

- **Pagefind index size** - the search index grows with your archive. Monitor `_site/pagefind/` directory size; above ~10 MB it may slow initial search loads.
- **Homepage collection size** - the homepage loads the N most recent articles. If `featuredCount` is high, reduce it in `site.json`.
- **Third-party scripts** - each integration (Umami, GTranslate, Cusdis, Buttondown widget) adds network requests. Audit with the Network tab in DevTools.

## What to do next

- [Images in articles](/docs/content/images/) for image sizing and compression guidance.
- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) for CDN and caching configuration.
- [Environment variables](/docs/deployment/env-vars/) for build-time configuration.

---
title: robots.txt and crawlers
subtitle: How Project Broadsheet generates robots.txt, what the default rules allow and block, and how to customize crawler access for your publication.
order: 7
updated: 2026-04-18
---

`robots.txt` is a plain-text file at the root of your site that tells search engine crawlers which pages they are and are not allowed to index. Project Broadsheet generates this file automatically at build time from a Nunjucks template.

## Where the file lives

The template is at `src/robots.njk` and outputs to `_site/robots.txt` (i.e., it's served at `https://yourdomain.com/robots.txt`).

## The default rules

Out of the box, Project Broadsheet's `robots.txt` allows all crawlers to index all pages, and points crawlers to the XML sitemap:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

The sitemap URL is pulled from `meta.url` in `src/_data/meta.js`, so it stays correct when you move to a custom domain.

## Blocking specific pages

To stop a page from being indexed, open `src/robots.njk` and add a `Disallow` rule:

```
User-agent: *
Allow: /
Disallow: /brand-guidelines/
Disallow: /changelog/
Disallow: /thank-you/

Sitemap: {% raw %}{{ meta.url }}{% endraw %}/sitemap.xml
```

Legal and utility pages (Privacy Policy, Terms, Thank You) are often good candidates for `Disallow`, though search engines typically understand these pages and may index them anyway.

## Blocking a specific crawler

To block only one crawler (for example, AI training crawlers):

```
User-agent: GPTBot
Disallow: /

User-agent: *
Allow: /

Sitemap: {% raw %}{{ meta.url }}{% endraw %}/sitemap.xml
```

Common AI crawler user-agent strings include `GPTBot` (OpenAI), `Claude-Web` (Anthropic), `CCBot` (Common Crawl), and `Google-Extended` (Google AI training).

## Keeping a page out of search with meta tags

`robots.txt` controls *crawling* and prevents the crawler from visiting the page. To control *indexing* (whether a visited page appears in search results), use the `noindex` front-matter field instead:

```yaml
noindex: true
```

This adds `<meta name="robots" content="noindex">` to the page's `<head>`. Use `noindex` for pages that are publicly accessible but should not appear in search results (e.g., internal style guides, thank-you pages).

## Verifying your robots.txt

After deploying, visit `https://yourdomain.com/robots.txt` in a browser to confirm it renders correctly. Google Search Console also has a robots.txt tester under **Settings → robots.txt**.

## What to do next

- [XML sitemap](/docs/seo/sitemap/): the companion file that tells crawlers what to index.
- [Meta tags](/docs/seo/meta-tags/): page-level SEO controls including `noindex`.
- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) for how the static files are served.

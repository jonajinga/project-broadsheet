---
title: XML sitemap
subtitle: Project Broadsheet generates an XML sitemap of every page automatically on each build. Search engines discover new and updated content faster when the sitemap is present and current.
order: 2
updated: 2026-04-17
---

An XML <span class="g-term" data-term="sitemap">sitemap</span> is a machine-readable list of every page on your site. Search engines (Google, Bing, DuckDuckGo, Brave) read it to discover pages they may not have crawled yet and to prioritize recently updated content.

## Automatic generation

Project Broadsheet generates the sitemap automatically. The template is at `src/sitemap.njk`, and it writes to `_site/sitemap.xml` on every build. You never edit the sitemap by hand.

The template iterates over `collections.all` (every page and article in the site), filters out pages that set `eleventyExcludeFromCollections: true` or that live under `/assets/` or `/thank-you/`, and writes a `<url>` entry for each with:

- `<loc>` — full URL
- `<lastmod>` — the page's `date` front-matter value
- `<changefreq>` — `weekly` for the homepage, `monthly` otherwise
- `<priority>` — `1.0` for the homepage, `0.9` for docs/features/pricing, `0.7` for everything else

## Excluding a page

To keep a page out of the sitemap:

```yaml
eleventyExcludeFromCollections: true
```

Use this for thank-you pages, form-only pages, internal utilities, and anything you don't want search engines crawling.

## Submitting the sitemap

Search engines usually discover the sitemap via the `Sitemap:` line in `robots.txt`. Project Broadsheet's `robots.txt` includes it automatically:

```
Sitemap: https://example.com/sitemap.xml
```

You can also submit directly:

- **Google Search Console**: `https://search.google.com/search-console`, add your property, submit `/sitemap.xml`.
- **Bing Webmaster Tools**: `https://www.bing.com/webmasters`, same process.

Other engines (DuckDuckGo, Brave) pull from Bing, so one submission covers several.

## How often it updates

The sitemap is regenerated on every production build. If you push a new article at 2pm, the sitemap includes it by 2:01pm on most hosts.

## Human-readable sitemap

Project Broadsheet also generates a human-readable sitemap at `/sitemap/` (distinct from `/sitemap.xml`). This is a regular page that lists every section of the site for readers browsing the structure.

## What to do next

- [Structured data (JSON-LD)](/docs/seo/structured-data/) for richer search results.
- [Open Graph](/docs/seo/open-graph/) for social-media previews.
- [Pagefind search](/docs/seo/pagefind-search/) for on-site search.

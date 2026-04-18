---
title: RSS feeds
subtitle: How Project Broadsheet generates RSS feeds for the full publication, each editorial section, and each author — and how to customize feed titles, descriptions, and content.
order: 6
updated: 2026-04-18
---

Project Broadsheet generates <span class="g-term" data-term="RSS">RSS</span> feeds automatically at build time. No plugin configuration is required. Every feed is a valid Atom/RSS 2.0 document that any feed reader can subscribe to.

## What feeds are generated

| Feed | URL | Contents |
|------|-----|----------|
| Full publication | `/feed.xml` | All articles, newest first |
| Per section | `/{section-slug}/feed.xml` | Articles in that section only |
| Per author | `/authors/{author-slug}/feed.xml` | Articles by that author only |

For example, a site at `https://example.com` with a `news` section and an author `jon-ajinga` gets:

- `https://example.com/feed.xml`
- `https://example.com/news/feed.xml`
- `https://example.com/authors/jon-ajinga/feed.xml`

## Feed metadata

The main feed title and description come from `src/_data/site.json`:

```json
{
  "title": "My Publication",
  "description": "What my publication is about.",
  "url": "https://example.com"
}
```

Per-section feeds inherit the section's `label` and `description` from the sections array. Per-author feeds use the author's `name` and `bio` from `authors.js`.

## What each feed item includes

Each item in a feed contains:

- `title` — from the article's front matter
- `description` — from the article's `description` field, or the first 160 characters of body text if omitted
- `link` — the canonical URL of the article
- `pubDate` — the article's `date` field
- `author` — from the matching entry in `authors.js`
- Content — the full rendered HTML of the article body

## Where feed templates live

The feed templates are Nunjucks files in `src/`:

```
src/feed.njk                    ← full publication feed
src/content/{section}/feed.njk  ← generated per section
src/authors/{slug}/feed.njk     ← generated per author
```

Edit these files to change the feed structure or the amount of content included.

## Advertising your feeds

Readers who use feed readers often discover feeds via the `<link>` autodiscovery tag in `<head>`. Project Broadsheet includes this automatically:

```html
<link rel="alternate" type="application/rss+xml"
      title="My Publication" href="/feed.xml">
```

You can add more `<link>` tags in `src/_includes/layouts/base.njk` to advertise section feeds to readers on section index pages.

## Excluding articles from feeds

To exclude a specific article from all feeds, add `noindex: true` to its front matter. To exclude an article from the main feed but keep it in a section feed, edit the feed template's filter condition.

## What to do next

- [Editorial sections](/docs/content/sections/) for how per-section feeds are generated.
- [Authors](/docs/content/authors/) for per-author feed setup.
- [XML sitemap](/docs/seo/sitemap/) for the other machine-readable output file.

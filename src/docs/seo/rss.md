---
title: RSS feeds
subtitle: How Project Broadsheet generates RSS feeds for the full publication, each editorial section, each author, and each topic, plus the /feeds/ discovery page that surfaces them to readers.
order: 6
updated: 2026-04-24
---

Project Broadsheet generates <span class="g-term" data-term="RSS">RSS</span> feeds automatically at build time. No plugin configuration is required. Every feed is a valid Atom/RSS 2.0 document that any feed reader can subscribe to.

## What feeds are generated

| Feed | URL | Contents |
|------|-----|----------|
| Full publication | `/feed.xml` | All articles, newest first |
| Per section | `/feed-{section-slug}.xml` | Articles in that section only |
| Per author | `/feeds/{author-slug}.xml` | Articles by that author only |
| Per topic | `/feeds/topics/{topic-slug}.xml` | Articles tagged with that topic |

For example, a site at `https://example.com` with a `news` section, a topic `climate`, and an author `jon-ajinga` gets:

- `https://example.com/feed.xml`
- `https://example.com/feed-news.xml`
- `https://example.com/feeds/jon-ajinga.xml`
- `https://example.com/feeds/topics/climate.xml`

The per-topic feed template iterates `collections.tagList` so every tag that appears on any article automatically gets its own feed — adding a new topic to an article is enough to spin one up; no config edit.

## Feed metadata

The main feed title and description come from `src/_data/meta.js`:

```js
export default {
  title:       "My Publication",
  description: "What my publication is about.",
  url:         process.env.SITE_URL || "https://example.com"
};
```

Per-section feeds inherit the section's `label` and `description` from `sections.js`. Per-author feeds use the author's `name` and `bio` from `authors.js`.

## What each feed item includes

Each item in a feed contains:

- `title`: from the article's front matter
- `description`: from the article's `description` field, or the first 160 characters of body text if omitted
- `link`: the canonical URL of the article
- `pubDate`: the article's `date` field
- `author`: from the matching entry in `authors.js`
- Content: the full rendered HTML of the article body

## Where feed templates live

The feed templates are Nunjucks files in `src/`:

```
src/feed.njk                    ← full publication feed
src/content/{section}/feed.njk  ← generated per section
src/authors/{slug}/feed.njk     ← generated per author
```

Edit these files to change the feed structure or the amount of content included.

## Advertising your feeds

Readers who use feed readers often discover feeds via the `<link>` autodiscovery tag in `<head>`. Project Broadsheet includes this automatically for the main feed, and layered on per-surface:

```html
<!-- main feed, everywhere -->
<link rel="alternate" type="application/rss+xml"
      title="My Publication" href="/feed.xml">

<!-- per-section feed, on section index pages -->
<link rel="alternate" type="application/rss+xml"
      title="News, My Publication" href="/feed-news.xml">

<!-- per-topic feed, on topic (tag) pages -->
<link rel="alternate" type="application/rss+xml"
      title="climate, My Publication"
      href="/feeds/topics/climate.xml">

<!-- per-author feed, on author pages -->
<link rel="alternate" type="application/rss+xml"
      title="Jon Ajinga, My Publication"
      href="/feeds/jon-ajinga.xml">
```

The tag placement lives in each surface's layout (section, tag, author-hero partial) rather than in `base.njk`, so the right feed auto-discovers on the right page. Browser reader plugins surface them via the address-bar icon; dedicated readers pick them up on paste of the page URL.

## /feeds/ discovery page

Beyond `<link rel="alternate">` autodiscovery, Project Broadsheet ships a human-readable `/feeds/` page that lists every feed the site publishes in one place. Sections: **Whole site**, **By section**, **By author**, **By topic**, and **External feeds we follow** (read from `src/_data/feeds.js` if present).

Every link on the page fires an `rss-sub` Umami event with a `data-umami-event-feed` property so the dashboard shows which feed a click came from:

```html
<a href="/feeds/topics/climate.xml"
   data-umami-event="rss-sub"
   data-umami-event-feed="topic-climate">climate</a>
```

Feed-type values: `main`, `section-{slug}`, `author-{slug}`, `topic-{slug}`, `external-{slug}`. See the [Umami events](/docs/integrations/umami/) doc for the full taxonomy.

### Homepage CTA

The homepage includes a `.front-subscribe` CTA band linking to `/feeds/`. Kicker + headline + lede + two buttons ("Browse all feeds →" and "Grab the main feed"). Fires a `subscribe-cta` event on the primary button.

### Footer + site-map

The "Reader Tools" footer column links to `/feeds/` (not just `/feed.xml`) so the full surface is one click away. The human `/site-map/` page has a dedicated "RSS Feeds" card with anchor links into each discovery-page section.

## Excluding articles from feeds

To exclude a specific article from all feeds, add `noindex: true` to its front matter. To exclude an article from the main feed but keep it in a section feed, edit the feed template's filter condition.

## What to do next

- [Editorial sections](/docs/content/sections/) for how per-section feeds are generated.
- [Authors](/docs/content/authors/) for per-author feed setup.
- [XML sitemap](/docs/seo/sitemap/) for the other machine-readable output file.

---
title: Open Graph and social previews
subtitle: The little card that appears when someone pastes your URL into Slack, LinkedIn, Twitter, or iMessage. Project Broadsheet generates every Open Graph tag automatically, and you can override any of them per article.
order: 4
updated: 2026-04-17
---

<span class="g-term" data-term="Open Graph">Open Graph</span> is the metadata format every major social platform reads to build link previews. When someone pastes a URL into Slack, iMessage, LinkedIn, Twitter, Facebook, or Discord, the platform fetches the page and looks for `og:title`, `og:description`, `og:image`, and a few other tags. Project Broadsheet emits all of them automatically.

## Default tags

Every page gets these tags, populated from the page's front matter and `meta.js`:

```html
<meta property="og:title" content="{{ title }} | {{ meta.shortTitle }}">
<meta property="og:description" content="{{ description or meta.description }}">
<meta property="og:url" content="{{ meta.url }}{{ page.url }}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{{ meta.title }}">
<meta property="og:locale" content="{{ meta.locale }}">
<meta property="og:image" content="{{ meta.url }}{{ meta.ogImage }}">
```

Articles additionally emit `og:type="article"`, `og:article:published_time`, and `og:article:author`.

## The default image

`meta.ogImage` in `meta.js` points at a single fallback image used on every page that doesn't specify its own. The recommended size is 1200×630 pixels. Place it at `src/assets/img/og-default.jpg`.

## Per-article image

Override the default for a specific article with `cover_image` in front matter:

```yaml
cover_image: "/assets/img/articles/my-article-cover.jpg"
```

The image should be 1200×630 for social platforms. Anything smaller is fine but some platforms crop aggressively.

## Twitter card tags

Alongside Open Graph, Project Broadsheet emits Twitter-card equivalents:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

Twitter/X reads both `og:*` and `twitter:*`, preferring the latter when both are present.

## Testing previews

After deploy:

- **Facebook / LinkedIn**: <https://developers.facebook.com/tools/debug/> - paste your URL, click "Debug."
- **Twitter**: its card validator has been deprecated; the Facebook tool is a decent substitute.
- **Slack / Discord**: paste the link into a test channel; they display the preview in real time.
- **iMessage**: same, in a private thread.

If a platform shows the wrong preview, re-scrape from the debug tool to force a cache refresh.

## What to do next

- [Structured data](/docs/seo/structured-data/) for Google-specific enrichment.
- [XML sitemap](/docs/seo/sitemap/) for search-engine discovery.
- [Meta tags](/docs/seo/meta-tags/) for title and description overrides.

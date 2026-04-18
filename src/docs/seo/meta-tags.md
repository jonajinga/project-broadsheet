---
title: Meta tags
subtitle: The title, description, and per-page meta tags Project Broadsheet emits automatically, and how to override any of them from a page's front matter.
order: 5
updated: 2026-04-17
---

Every page in Project Broadsheet ships with a full set of meta tags: title, description, canonical URL, theme color, social previews, and structured data. Most of them are derived from the page's front matter and your site-wide `meta.js`. Overrides are one line.

## Default behavior

For every page, the `<head>` includes:

```html
<title>{{ title }} | {{ meta.shortTitle }}</title>
<meta name="description" content="{{ description or meta.description }}">
<meta name="theme-color" content="{{ meta.themeColor }}">
<link rel="canonical" href="{{ meta.url }}{{ page.url }}">
```

Plus <span class="g-term" data-term="Open Graph">Open Graph</span>, Twitter card, and <span class="g-term" data-term="JSON-LD">JSON-LD</span> blocks. See [Open Graph](/docs/seo/open-graph/) and [Structured data](/docs/seo/structured-data/) for those.

## Override per page

Every field can be overridden from front matter:

```yaml
---
title: "My article"
description: "A custom description for search snippets and social previews."
og_title: "Different title on social shares"
og_image: "/assets/img/custom-social.jpg"
twitter_card: "summary_large_image"
canonical: "https://example.com/canonical-url/"
noindex: true
theme_color: "#2C5F8A"
---
```

- `description` is the most commonly overridden field. Keep under 160 characters.
- `og_image` takes an absolute or root-relative path. Size 1200x630 for best results.
- `noindex: true` adds `<meta name="robots" content="noindex, nofollow">` so search engines skip the page.

## Title format

By default, titles are rendered as `{{ title }} | {{ meta.shortTitle }}`. To override for a specific page:

```yaml
title_override: "Alternative title without suffix"
```

The layout uses `title_override` if present, else the combined format.

## What to do next

- [Open Graph and social previews](/docs/seo/open-graph/) for the social-specific tags.
- [Structured data (JSON-LD)](/docs/seo/structured-data/) for search-engine enrichment.
- [XML sitemap](/docs/seo/sitemap/) for search-engine discovery.

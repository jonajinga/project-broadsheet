---
title: Configure site.json
subtitle: The single file that controls your publication's metadata, editorial sections, and third-party integrations. Every reader-facing identifier on the site reads from this one location.
order: 1
updated: 2026-04-17
---

`src/_data/site.json` is the central configuration file for Project Broadsheet. Everything visible to readers, the title in the header, the footer copyright, the sections in the navigation, the newsletter destination, is driven by this one JSON file. Editing it is the quickest path to making the site yours without touching templates.

## Core identity fields

```json
{
  "title": "The Example Dispatch",
  "description": "Independent journalism for the curious.",
  "url": "https://example.com",
  "email": "hello@example.com",
  "founded": "2025-01-01"
}
```

These values populate the `<title>` tag on every page, the description used in search-engine results and social previews, the canonical URL used for <span class="g-term" data-term="SEO">SEO</span>, and the mailto links that appear throughout the site.

## Editorial sections

Editorial sections are the top-level categories a reader sees in the navigation. News, Opinion, Reviews, and so on. They are defined as an array in `site.json`:

```json
"sections": [
  { "slug": "news", "label": "News", "color": "#C0392B" },
  { "slug": "opinion", "label": "Opinion", "color": "#2C5F8A" }
]
```

Each <span class="g-term" data-term="editorial section">section</span> gets its own index page (paginated), its own <span class="g-term" data-term="RSS">RSS</span> feed, an accent color applied to headlines and breadcrumbs, and a URL prefix. Adding a new section is a matter of adding one object to the array; Project Broadsheet wires up the rest.

## Third-party integrations

Populate only the services you intend to use. Any field left empty disables its integration entirely, nothing ships in the HTML.

```json
"buttondown": { "username": "your-username" },
"umami": { "websiteId": "xxx", "src": "https://cloud.umami.is/script.js" },
"cusdis": { "appId": "xxx" },
"web3forms": { "accessKey": "xxx" }
```

These correspond to the <span class="g-term" data-term="Buttondown">newsletter service</span>, the <span class="g-term" data-term="Umami">analytics platform</span>, the <span class="g-term" data-term="Cusdis">comment system</span>, and the <span class="g-term" data-term="Web3Forms">form forwarding service</span>, respectively.

## What to do next

- [Write your first article](/docs/content/write-an-article/), create a <span class="g-term" data-term="Markdown">Markdown</span> file in `src/content/news/`.
- [Add an author](/docs/content/authors/) so posts carry a byline.
- [Customize design tokens](/docs/design/tokens/) to set your brand palette.

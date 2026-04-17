---
title: Pagefind search
subtitle: Full-text site search that runs entirely in the reader's browser.
order: 1
updated: 2026-04-17
---

[Pagefind](https://pagefind.app) indexes your built site into tiny, fragment-sized chunks that the browser fetches on-demand. It's fast, free, private, and works without any backend.

## How it runs

Pagefind runs automatically after every production build via the `eleventy.after` hook in `eleventy.config.js`. The index is written to `_site/pagefind/`.

## Where it appears

- On `/docs/`, at the top of the hub page
- Anywhere you drop `<div id="pagefind-search"></div>` with the init script

## Init script

```html
<link rel="stylesheet" href="/pagefind/pagefind-ui.css">
<script src="/pagefind/pagefind-ui.js" defer></script>
<script>
window.addEventListener("DOMContentLoaded", function() {
  new PagefindUI({ element: "#pagefind-search", showSubResults: true });
});
</script>
```

## Why not `search-index.json`?

A JSON search index ships the entire corpus to every reader on every page load. Pagefind fetches fragments on demand, so it scales to thousands of pages without bloating your bundle.

## What's next

- [Add JSON-LD structured data](/docs/seo/structured-data/).
- [Set up an XML sitemap](/docs/seo/sitemap/).

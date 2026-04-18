---
title: Pagefind search
subtitle: Project Broadsheet uses Pagefind for on-site search — a client-side index that works without a backend server and scales to thousands of pages.
order: 1
updated: 2026-04-17
---

<span class="g-term" data-term="Pagefind">Pagefind</span> is the search engine bundled with Project Broadsheet. It indexes the published site into small, fragment-sized chunks, and the reader's browser fetches only the fragments it needs as they type. The result is fast, private search that requires no server-side component — no database query, no API call, no per-search cost.

## How it runs

Pagefind indexes the site automatically at the end of every production build. Project Broadsheet's `eleventy.config.js` registers an `eleventy.after` hook that invokes `pagefind` against the built output. The finished index is written to `_site/pagefind/`.

During local development (`npm start`), Pagefind does not run; search becomes available the moment you run `npm run build`.

## Where it appears

- At the top of the `/docs/` hub page as a full search modal.
- On any custom page where you drop a `<div id="pagefind-search"></div>` container plus the initialization script below.

## Initialization snippet

```html
<link rel="stylesheet" href="/pagefind/pagefind-ui.css">
<script src="/pagefind/pagefind-ui.js" defer></script>
<script>
  window.addEventListener("DOMContentLoaded", function () {
    new PagefindUI({ element: "#pagefind-search", showSubResults: true });
  });
</script>
```

## Why not a simple JSON index?

A single JSON file containing every article would work — but it would also be shipped to every reader on every page load, whether they searched or not. At even a few dozen articles that file grows into hundreds of kilobytes. Pagefind avoids the problem entirely by fetching only the fragments a given query needs, so the bundle size stays flat as the archive grows.

## What to do next

- [Add JSON-LD structured data](/docs/seo/structured-data/) so search engines understand your content type.
- [Review the XML sitemap](/docs/seo/sitemap/) Project Broadsheet generates at build time.

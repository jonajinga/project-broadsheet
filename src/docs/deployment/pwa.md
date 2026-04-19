---
title: PWA and offline support
subtitle: Project Broadsheet ships a service worker and web app manifest that enable offline reading of cached pages and an "Add to home screen" prompt on mobile.
order: 8
updated: 2026-04-18
---

Project Broadsheet includes a Progressive Web App (PWA) configuration out of the box. Two files handle this: `src/sw.njk` (the service worker) and `src/manifest.njk` (the web app manifest). No additional tooling or build step is required.

## What the PWA enables

- **Offline reading.** Pages a reader has already visited are cached by the service worker. If they lose their connection, previously visited articles and pages load from the cache.
- **Home screen installation.** On mobile browsers (iOS Safari, Chrome for Android), readers can add the publication to their home screen and launch it as a standalone app with no browser chrome.
- **Faster repeat visits.** Static assets (CSS, JS, fonts) are cached on first visit and served from the cache on return visits, reducing load time.

## Service worker

The service worker lives at `src/sw.njk` and is compiled to `/sw.js` at build time.

**Cache strategy:** Network-first with cache fallback for HTML pages. Cache-first for static assets (CSS, JS, images, fonts). This means:
- HTML pages always attempt a network request first so readers get fresh content when online.
- Static assets are served from cache without a network request, since they are versioned by the build.

**What gets cached:**
- The homepage
- All previously visited article and page URLs
- The offline fallback page at `/offline/`
- All CSS, JS, and font files

**Cache duration:** Cached pages are retained for 30 days. The service worker automatically evicts entries older than 30 days on the next activation.

To customize the cache strategy or duration, edit `src/sw.njk`. The file is a Nunjucks template so you can reference site configuration values.

## Offline fallback page

If a reader tries to visit a page they haven't cached and they are offline, they see `src/offline.njk` at `/offline/`. The default offline page:
- States that the reader is offline
- Lists recently cached articles they can read now
- Suggests they check their connection and refresh

To customize the offline page copy, edit `src/offline.njk`. It uses the same layout and design tokens as the rest of the site.

## Web app manifest

`src/manifest.njk` compiles to `/manifest.json`. It configures how the publication appears when installed:

```json
{
  "name": "The Freethinking Times",
  "short_name": "Freethinking",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F5EDD9",
  "theme_color": "#C0392B",
  "icons": [
    { "src": "/assets/img/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/assets/img/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

The `name`, `short_name`, `background_color`, and `theme_color` values come from `src/_data/meta.js`. To provide the home screen icons, add PNG files at the paths above — 192×192 and 512×512 are required by most browsers.

## Verifying the PWA

To verify the service worker and manifest are working:

1. Deploy the site (or run `npm run build` and serve the `_site` folder)
2. Open Chrome DevTools → Application → Service Workers — the worker should show as Active
3. Application → Manifest — all required fields should show without errors
4. Application → Cache Storage — cached entries should appear after navigating a few pages
5. Throttle the network to Offline in DevTools → navigate to a cached page — it should load

The Lighthouse PWA audit in Chrome DevTools will catch missing icons or manifest fields.

## What to do next

- [Cloudflare Pages](/docs/deployment/cloudflare-pages/) for the recommended host, which serves PWAs with no configuration.
- [Performance](/docs/deployment/performance/) for additional caching and loading strategies.
- [Environment variables](/docs/deployment/env-vars/) for configuring the service worker in staging vs. production.

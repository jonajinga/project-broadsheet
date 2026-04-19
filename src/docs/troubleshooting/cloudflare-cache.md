---
title: Cloudflare cache issues
subtitle: Why your changes aren't showing up after a deploy, and how to clear Cloudflare's cache to force fresh content.
order: 8
updated: 2026-04-18
---

<span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span> serves your site from a global network of edge servers. After a deploy, most visitors see the new version immediately — but occasionally a cached version persists. This page explains why that happens and how to fix it.

## The two layers of cache

**Cloudflare's edge cache** — Cloudflare caches your HTML, CSS, and assets on its edge servers worldwide. For static sites, this cache is normally invalidated automatically after each deploy. If it isn't, you can purge it manually.

**Your browser's cache** — Your browser stores copies of files locally. Even after Cloudflare serves fresh content, your browser may show the old cached version. Always check in a private/incognito window before concluding Cloudflare is the issue.

## Check whether it's a browser issue first

1. Open a private or incognito browser window.
2. Visit your site.
3. If the new content appears, the issue is your browser cache — press `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac) in your normal window to do a hard refresh.

## Purge Cloudflare's cache manually

If the issue persists in incognito:

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com).
2. Select your domain (not the Pages project — the domain under **Websites**).
3. Go to **Caching** → **Configuration** → **Purge Cache**.
4. Click **Purge Everything**.

This removes all cached files. The next request to each URL fetches a fresh copy from your Pages deployment.

> **Note:** Purge Everything affects the domain, not just Pages. If you're running other services on the same domain, they'll also be cache-purged.

## Trigger a fresh Pages deployment

If your deploy completed successfully but the content still looks wrong, try triggering a new deploy:

1. In the Cloudflare dashboard, go to **Workers & Pages**.
2. Open your Pages project.
3. Open **Deployments** and click **Retry deploy** on the most recent successful build.

A fresh build and deploy clears Pages' internal artifact cache as well.

## The build succeeded but my article is missing

This is usually not a cache issue — it's a build issue. Check:

- Is the article's `draft` field set to `true`? Drafts don't appear in indexes.
- Is the article's `date` in the future? Future-dated articles are suppressed until that date passes.
- Did the Markdown file commit to `main`? If it's on a branch, it won't deploy.

See [Common issues](/docs/troubleshooting/common-issues/) for more build-related debugging.

## CSS or JS changes not appearing

If stylesheets or scripts look stale after a deploy:

1. Hard-refresh in your browser (`Ctrl+Shift+R`).
2. Check the `?v=` cache-busting query string on the CSS `<link>` tag in `base.njk`. If the version value isn't being updated on deploy, increment it manually and push.
3. Purge Cloudflare's cache as described above.

## What to do next

- [Deploy failures](/docs/troubleshooting/deploy-failures/) — if the build itself is failing.
- [Common issues](/docs/troubleshooting/common-issues/) — content not appearing, wrong output, unexpected behavior.

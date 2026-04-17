---
title: Set up Umami analytics
subtitle: Cookieless, privacy-first analytics. Free to self-host, cheap to use Umami Cloud.
order: 2
updated: 2026-04-17
---

[Umami](https://umami.is) is a cookieless alternative to Google Analytics. It respects your readers' privacy and gives you the numbers that actually matter.

## Two options

**Option 1 — Umami Cloud.** Sign up at <https://cloud.umami.is>. $9/mo for the starter plan, free for personal sites.

**Option 2 — Self-host.** Umami is open-source. Deploy it on Railway, Fly, or your own server for free.

## Configure

Once you have a site ID and script URL, open `src/_data/site.json`:

```json
"umami": {
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "src": "https://cloud.umami.is/script.js"
}
```

The tracking script is injected into `base.njk` only when both fields are populated. Leave them empty during local development.

## What's next

- [Configure Cusdis comments](/docs/integrations/cusdis/).
- [Understand what Umami tracks](https://umami.is/docs).

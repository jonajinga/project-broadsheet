---
title: Set up Umami analytics
subtitle: Umami is a cookie-free, open-source analytics platform. Project Broadsheet integrates it through two configuration fields. Use the hosted service or run your own.
order: 2
updated: 2026-04-17
---

<span class="g-term" data-term="Umami">Umami</span> is an open-source alternative to Google Analytics that does not use cookies, does not build visitor profiles, and does not track users across sites. For a small independent publication, it offers the numbers that matter (page views, referrers, countries) without the compliance overhead or ethical cost.

## Pick a deployment model

**Umami Cloud**, the hosted option. Sign up at <https://cloud.umami.is>. Free for personal sites; starter plans begin around $9/month.

**Self-hosted**. Umami is fully open-source. Deploy it on Railway, Fly.io, or your own server. There is no ongoing software cost.

Either model gives you a website ID (a UUID) and a script URL. Those are the two values Project Broadsheet needs.

## Configure Project Broadsheet

Open `src/_data/site.json` and populate the `umami` block:

```json
"umami": {
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "src": "https://cloud.umami.is/script.js"
}
```

The tracking script is injected into `base.njk`. Project Broadsheet's base layout, only when both fields are populated. Leaving either empty during local development keeps analytics entirely out of the page.

## What to do next

- [Configure Cusdis comments](/docs/integrations/cusdis/) to let readers reply to articles.
- [Read Umami's documentation](https://umami.is/docs) to learn what each metric means and how to read the reports.

---
title: Set up Umami analytics
subtitle: Umami is a cookie-free, open-source analytics platform. Project Broadsheet integrates it through two configuration fields, plus a custom event taxonomy for engagement signals — finished-reading, share-*, rss-sub, citation-click, and more.
order: 2
updated: 2026-04-24
---

<span class="g-term" data-term="Umami">Umami</span> is an open-source alternative to Google Analytics that does not use cookies, does not build visitor profiles, and does not track users across sites. For a small independent publication, it offers the numbers that matter (page views, referrers, countries) without the compliance overhead or ethical cost.

## Pick a deployment model

**Umami Cloud**, the hosted option. Sign up at <https://cloud.umami.is>. Free for personal sites; starter plans begin around $9/month.

**Self-hosted**. Umami is fully open-source. Deploy it on Railway, Fly.io, or your own server. There is no ongoing software cost.

Either model gives you a website ID (a UUID) and a script URL. Those are the two values Project Broadsheet needs.

## Configure Project Broadsheet

Open `src/_data/meta.js` (or `site.js` depending on your setup) and populate the analytics block:

```js
analytics: {
  provider:     "umami",
  websiteId:    env.UMAMI_WEBSITE_ID || "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  scriptUrl:    env.UMAMI_SRC        || "https://cloud.umami.is/script.js",
  dashboardUrl: env.UMAMI_DASHBOARD_URL || ""
}
```

The tracking script is injected into Project Broadsheet's base layout only when `websiteId` is populated. Leaving either empty during local development keeps analytics entirely out of the page. The optional `dashboardUrl` is surfaced in the footer as a "Public Analytics" link if you want readers to see the same numbers you do.

## Custom event taxonomy

Beyond auto-tracked pageviews, Project Broadsheet threads `data-umami-event` attributes through templates to capture engagement signals. Every event follows a short kebab-case name, and several carry a qualifying property via `data-umami-event-*`:

| Event | Fires when | Extra property |
|---|---|---|
| `citation-click` | Reader clicks any external link in an article body | — |
| `archive-click` | Reader clicks the Wayback sibling icon | — |
| `share-{platform}` | Reader clicks a share button | — (`twitter`, `facebook`, `linkedin`, `reddit`, `bluesky`, `mastodon`, `email`) |
| `rss-sub` | Reader clicks any RSS link | `data-umami-event-feed` identifies which feed (see below) |
| `webmention-learn` | Reader clicks a webmention.io / indieweb "learn more" link | — |
| `finished-reading` | Reader scrolls past 90% of an article body | `url`, `title` via `umami.track()` |
| `republish-copy` | Reader copies the CC grab-code | — |
| `license-learn` | Reader clicks through to the CC licence deed or `/license/` | — |
| `license-inquiry-submit` | Reader submits the commercial-licence inquiry form | — |
| `subscribe-cta` | Reader clicks the "Browse all feeds" homepage button | — |

Attribute-based events require no JS — Umami's script binds to `data-umami-event` automatically. Add the attribute to any element and the click registers.

### Feed-type property on `rss-sub`

Every RSS link across the site carries `data-umami-event-feed` so the Umami dashboard can distinguish main-feed subscribers from section / author / topic subscribers:

```html
<a href="/feed.xml"                         data-umami-event="rss-sub" data-umami-event-feed="main">
<a href="/feed-news.xml"                    data-umami-event="rss-sub" data-umami-event-feed="section-news">
<a href="/feeds/jon-ajinga.xml"             data-umami-event="rss-sub" data-umami-event-feed="author-jon-ajinga">
<a href="/feeds/topics/climate.xml"         data-umami-event="rss-sub" data-umami-event-feed="topic-climate">
<a href="https://other-site.com/feed.xml"   data-umami-event="rss-sub" data-umami-event-feed="external-other-site">
```

The property surfaces in Umami under **Events → rss-sub** as a breakdown dimension.

### The `finished-reading` event

Auto-fired from the existing reading-progress scroll handler when `pct >= 90`. Gated per-pathname so a reader who scrolls past 90% of an article fires once, not per scroll event. Reset on `spa:contentswap` so each article in a session can fire independently.

```js
if (bar && pct >= 90) {
  if (!window.__umamiFinished) window.__umamiFinished = {};
  if (!window.__umamiFinished[location.pathname]) {
    window.__umamiFinished[location.pathname] = true;
    if (window.umami && typeof window.umami.track === 'function') {
      umami.track('finished-reading', { url: location.pathname, title: document.title });
    }
  }
}
```

Use `pct >= 90` rather than `>= 100`: the article body is measured, but the footer / webmentions / comments sit below and readers rarely scroll into them. Anchoring at 90% of the body means "they finished the piece."

## Dashboard setup (manual, one-time)

Once events are wired:

- **Pin in Events panel** — `citation-click`, `archive-click`, `share-*`, `rss-sub`, `webmention-learn`, `republish-copy`, `license-inquiry-submit`, `subscribe-cta`.
- **Create a Goal** for `finished-reading`. Compare vs pageviews on article URLs to get per-article completion rate. Target: 15–25% on long pieces, 40–60% on short.
- **Save reports** filtered by `Referrer contains <partner-domain>` per syndication partner. Replaces the defunct `<img>` tracking-pixel pattern for measuring off-site reach.
- **Check Performance** (Web Vitals) weekly. Target INP ≤ 200 ms, LCP ≤ 2.5 s, CLS ≤ 0.1, FCP ≤ 1.8 s. If the Performance tab is empty, Google PageSpeed Insights is a synthetic substitute.

## What to do next

- [RSS feeds](/docs/seo/rss/) for the subscription layer `rss-sub` tracks against.
- [Republish surface](/docs/seo/republish-syndication/) for the `republish-copy` + `license-inquiry-submit` context.
- [Webmentions](/docs/seo/webmentions/) for the `webmention-learn` context.
- [Read Umami's documentation](https://umami.is/docs) for what each built-in metric means.

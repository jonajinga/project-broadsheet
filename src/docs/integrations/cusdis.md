---
title: Cusdis comments
subtitle: An open-source, privacy-respecting comment system you can drop under any article. No cookies, no tracking, minimal JavaScript.
order: 4
updated: 2026-04-17
---

<span class="g-term" data-term="Cusdis">Cusdis</span> is a lightweight comment system aimed at independent publishers. It has no cookies, no third-party tracking, and a simple moderation dashboard. The script is about 3 KB gzipped.

## Sign up

1. Go to <https://cusdis.com>.
2. Create an account and a new "site."
3. Copy the App ID (a UUID) from the dashboard.

The free tier covers unlimited comments and sites. Paid plans add features like email notifications and a custom domain for the comment server.

## Configure Project Broadsheet

In `src/_data/site.json`:

```json
"cusdis": {
  "appId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

Leave empty to disable comments entirely.

## Where comments appear

Comments render at the bottom of every article by default. The integration is loaded in `layouts/article.njk`:

```html
{% raw %}{% if site.cusdis.appId %}
<div id="cusdis_thread"
  data-host="https://cusdis.com"
  data-app-id="{{ site.cusdis.appId }}"
  data-page-id="{{ page.url }}"
  data-page-url="{{ meta.url }}{{ page.url }}"
  data-page-title="{{ title }}">
</div>
<script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
{% endif %}{% endraw %}
```

## Moderation

New comments appear in the Cusdis dashboard. You can approve, reject, or delete each one. Approved comments appear publicly; unapproved ones don't.

Email notifications are configurable in the dashboard (paid tiers).

## Self-hosting Cusdis

Cusdis is open-source. If you prefer to run your own instance:

- Source: <https://github.com/djyde/cusdis>
- Deployment guide covers Docker, Vercel, and Railway.

Change `data-host` in the template to point at your instance.

## Disable comments on specific articles

Add `comments: false` to an article's front matter:

```yaml
comments: false
```

The template skips the Cusdis block when that flag is set.

## What to do next

- [Web3Forms](/docs/integrations/web3forms/) for contact forms and bookings.
- [Umami analytics](/docs/integrations/umami/) to see which articles get engagement.
- [Buttondown newsletter](/docs/integrations/buttondown/) to email readers who commented.

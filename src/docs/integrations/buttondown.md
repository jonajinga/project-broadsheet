---
title: Set up Buttondown newsletter
subtitle: Project Broadsheet integrates with Buttondown, a privacy-respecting newsletter service, through a single configuration field. No tracking pixels, no link surveillance.
order: 1
updated: 2026-04-17
---

<span class="g-term" data-term="Buttondown">Buttondown</span> is an independent newsletter service that does not use open-tracking pixels or click-tracking by default, and offers straightforward flat-rate pricing rather than per-subscriber tiers. Project Broadsheet treats Buttondown as the default newsletter destination; enabling it requires one field in `site.json`.

## Create an account

Sign up at <https://buttondown.email>. The free tier covers up to 100 subscribers, which is enough room to get started. Paid plans begin around $9/month for 1,000 subscribers.

## Configure Project Broadsheet

Open `src/_data/site.json` and set the Buttondown username:

```json
"buttondown": {
  "username": "your-buttondown-username"
}
```

On the next build, every newsletter signup form on the site will point at your Buttondown instance. No other changes are required.

## Where the signup form appears

- The site footer, in the Newsletter column.
- The blog index page.
- Any custom page that includes the newsletter partial: `{% raw %}{% include "partials/newsletter.njk" %}{% endraw %}`.

## What to do next

- [Set up Umami analytics](/docs/integrations/umami/) to see how readers arrive at the site.
- [Customize the newsletter form](/docs/customization/newsletter-form/) to add fields or change copy.

---
title: Setting up Buttondown with Project Broadsheet
summary: A walkthrough of connecting Buttondown as your newsletter service, including how to move an existing subscriber list over from another platform.
date: 2026-04-18
author: Jon Ajinga
tag: Tutorial
---

If you're running a publication on Project Broadsheet and want a newsletter, Buttondown is the default integration. It takes about ten minutes to set up. Here's the full walkthrough.

## Why Buttondown

Buttondown is an independent newsletter service. It doesn't use open-tracking pixels or link tracking unless you turn them on. Pricing is flat-fee (not per-subscriber). The founder, Justin Duke, is a person you can email and actually reach. I use Buttondown for The Freethinking Times and for personal mail.

Other reasonable options for a Project Broadsheet site: Kit (formerly ConvertKit), MailerLite, Substack-as-reader-only. Each has tradeoffs. Buttondown is what I recommend for most independent publishers.

## Step one: create an account

Go to buttondown.email and sign up. The free tier covers up to 100 subscribers. Paid plans start around $9/month.

You'll pick a username during signup. That username becomes part of your subscription URL, so pick something readable (your publication's name or close to it).

## Step two: point Project Broadsheet at it

Open `src/_data/site.json` or `src/_data/meta.js` (depending on where you put it) and set the Buttondown username:

```json
"buttondown": {
  "username": "your-buttondown-username"
}
```

Rebuild the site. Every newsletter signup form now posts to your Buttondown account. That includes the form in the footer, the blog index, and anywhere you've embedded the newsletter partial.

## Step three: import existing subscribers (if any)

If you're coming from Substack, Ghost, or another service, export your subscriber list as CSV. In Buttondown:

1. Settings, Subscribers, Import.
2. Upload the CSV.
3. Buttondown imports confirmed subscribers directly. If your source platform used double-opt-in, so did Buttondown.

Send a first email from your new Buttondown address explaining the move so subscribers know to expect mail from the new sender.

## Step four: customize the signup flow

Buttondown's default confirmation page is plain. You can customize:

- The welcome email (Settings, Welcome email).
- The confirmation page (Settings, Pages).
- The sender name and reply-to address.
- Whether to use double-opt-in (I recommend yes).

## Step five: write your first issue

In Buttondown's composer, write your first email. Preview it. Send.

Buttondown delivers from your own domain once you verify DNS records. That takes another 15 minutes but isn't required on day one.

## What to expect

Newsletter growth is slow unless you already have an audience. Expect tens of subscribers in month one, hundreds by month six if you publish consistently. The Freethinking Times took two years to reach a thousand subscribers; your mileage varies wildly with topic, format, and cadence.

The good news: every subscriber is yours. No platform can take them away. That matters more than growth rate over the long run.

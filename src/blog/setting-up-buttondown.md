---
title: Setting up a newsletter with Buttondown
summary: A walk-through of connecting Buttondown as your newsletter service, including moving an existing subscriber list over from somewhere else.
date: 2026-04-18
author: Jon Ajinga
tag: Tutorial
---

If you're running a publication on Project Broadsheet and want a newsletter, Buttondown is the easiest option to connect. It takes about ten minutes end to end. Here's the full walk-through.

## Why Buttondown

Buttondown is a small, independent email service. It doesn't quietly open-track your readers or put tracking into every link unless you turn those on. Pricing is a flat monthly fee rather than per-subscriber, so the bill doesn't balloon as you grow. The person who runs it is someone you can actually email. I use it for The Freethinking Times and for my own mail.

Other reasonable options for a Project Broadsheet site: Kit (formerly ConvertKit), MailerLite, or using Substack as a newsletter sender only. Each comes with its own trade-offs. Buttondown is what I'd recommend for most independent publications.

## Step one: make an account

Go to buttondown.email and sign up. The free tier covers up to 100 subscribers. Paid plans start around $9 a month.

Pick a username during sign-up. That username becomes part of your subscription address, so choose something readable — your publication's name, or close to it.

## Step two: point Project Broadsheet at it

Open `src/_data/meta.js` and set the Buttondown username:

```js
buttondownUsername: "your-buttondown-username",
```

Publish the site again. Every newsletter sign-up form on it now goes to your Buttondown account — including the one in the footer, the one on the blog index, and any custom spot you've dropped the sign-up block into.

## Step three: bring your existing subscribers across (if you have any)

Coming from Substack, Ghost, or somewhere else? Export your subscriber list as a spreadsheet file. In Buttondown:

1. Settings → Subscribers → Import.
2. Upload the file.
3. Buttondown brings confirmed subscribers across directly. If the service you're coming from used a confirmation step, so did Buttondown — no double-confirmation needed.

Send a short first email from your new Buttondown address explaining the move, so subscribers know the new sender is really you.

## Step four: tidy up the sign-up flow

Buttondown's default confirmation page is plain. You can change:

- The welcome email (Settings → Welcome email).
- The confirmation page (Settings → Pages).
- The sender name and reply-to address.
- Whether new sign-ups have to confirm via email (I'd say yes).

## Step five: send your first issue

In Buttondown's composer, write your first email. Preview it. Send.

Buttondown can also send from your own domain once you add a couple of DNS records. That takes another fifteen minutes and isn't required on day one — the default sender works fine to start.

## What to expect

Newsletter growth is slow unless you already have an audience. Expect tens of subscribers in the first month, hundreds by month six if you publish steadily. The Freethinking Times took about two years to reach a thousand; yours will depend on the topic, the format, and how often you publish.

The good news: every subscriber is yours. No service can take them away from you. Over time, that matters more than how fast the list grows.

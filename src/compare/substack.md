---
layout: layouts/page.njk
title: Project Broadsheet vs. Substack
eyebrow: Compare
subtitle: Substack is a hosted platform designed for paid email newsletters. Project Broadsheet is a self-hosted publication framework. This page compares their models honestly.
permalink: /compare/substack/
narrow: true
---
<div class="lead" style="margin-bottom: var(--space-xl);">
  Substack has been the default newsletter platform for a lot of writers since 2019. It handles email delivery, payments, reader discovery, and the web archive in a single signup. Project Broadsheet aims at a different set of tradeoffs. Neither is strictly better; they solve different problems.
</div>

## Quick summary

| | Project Broadsheet | Substack |
|---|---|---|
| Model | Self-hosted framework | SaaS only |
| Starting cost | $0 | Free to start |
| Recurring cost | Free static hosting | 10% of revenue (on paid subscriptions) |
| Content format | Markdown in Git | Proprietary, exportable as CSV |
| Discovery | You build your own | Built-in recommendation network |
| Reader tools | 27+ built-in | None |
| Platform lock-in | None | High |
| License | MIT | Proprietary |

## Pricing

Substack is free to use for free publications. The moment you charge for subscriptions, Substack takes 10% of revenue on top of Stripe's fees. On $10,000/year of subscription income, Substack takes $1,000.

Project Broadsheet has no revenue share. Paid subscriptions aren't built in, but you can run them through <span class="g-term" data-term="Buttondown">Buttondown</span> (also flat-fee, no revenue share), Memberful, or Stripe directly. Hosting is free on most static hosts.

## Ownership

Substack owns the platform, the discovery algorithm, the recommendation network, and the subscriber signup flow. You own the subscriber email list and can export it, but the recommendation graph that brings new readers doesn't travel with you.

Project Broadsheet has no central platform. Your content is in Git, your subscribers are in your own Buttondown account, and discovery is whatever organic reach and RSS bring you. That's a real cost: you give up Substack's built-in readership pool. Whether it's worth it depends on where your readers are coming from.

## Discovery

Substack's biggest operational advantage is the cross-promotion network. Publications recommend each other; readers of one find others; the algorithm amplifies momentum. If you're starting from zero, this meaningfully shortens the runway.

Project Broadsheet has no equivalent. You rely on SEO, RSS, direct links, and word-of-mouth. That's fine for an established publication and a slower climb for a new one.

## Content format and portability

Substack's export is a zip of post CSVs and an HTML file per post. Images are stored on `substackcdn.com`, which keeps working indefinitely. Converting to any other platform requires scripts.

Project Broadsheet's content is Markdown in Git. Moving it is a folder copy. The image files live in your repository.

## Reader experience

Substack's reader experience is minimal: a good article template, the option to read in-app, nothing beyond that. No text-to-speech, no annotations, no reading ruler.

Project Broadsheet's reader tools are extensive. How much this matters depends on your audience.

## When Substack is the better choice

- You want email delivery and payments handled without setup.
- Discovery via Substack's network matters more than owning the platform.
- You're okay trading 10% of paid revenue for operational simplicity.
- You're a solo writer and don't need editorial features.

## When Project Broadsheet is the better choice

- Your publication is archive-first, not email-first.
- You want to keep 100% of subscription revenue.
- You want editorial sections, a library, reviews, events, or other structured content.
- You want full control over the design and layout.
- You don't want a third-party platform between you and your readers.

## What to do next

- [Migrate from Substack](/docs/migration/from-substack/) if you're already on it.
- [Get Started](/get-started/) to try Project Broadsheet.
- [All comparisons](/compare/) for Ghost, WordPress, and Superdesk.

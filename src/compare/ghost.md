---
layout: layouts/page.njk
title: Project Broadsheet vs. Ghost
eyebrow: Compare
subtitle: A side-by-side look at an independent self-hosted framework and the publishing SaaS most writers consider first. Pricing, ownership, feature overlap, and honest tradeoffs.
permalink: /compare/ghost/
narrow: true
---
<div class="lead" style="margin-bottom: var(--space-xl);">
  Ghost is a good product. It's open-source, runs on Node.js, has a polished editor, and ships a reliable newsletter. Most independent writers who outgrow Medium or WordPress end up here. Project Broadsheet covers similar ground from a different angle: file-based, static, free to run.
</div>

## Quick summary

| | Project Broadsheet | Ghost |
|---|---|---|
| Model | Fork a Git repo, host static files | SaaS or self-hosted |
| Starting cost | $0 | $9/mo (Ghost Pro) or hosting costs |
| Recurring cost | Hosting only (free on Cloudflare Pages) | $9–$199+/mo based on audience size |
| Content format | Markdown in Git | JSON in a SQL database |
| Database | None | Yes (MySQL or SQLite) |
| Newsletter | Buttondown integration | Built in |
| Reader tools | 27+ built-in | None |
| License | MIT | MIT |

## Pricing over time

Ghost Pro's pricing scales with your audience:

- 500 members: $9/mo
- 5,000 members: $31/mo
- 50,000 members: $199/mo
- 500,000 members: $6,900/mo

Self-hosting Ghost is free in licensing but requires a Node-capable server (around $5–20/mo on DigitalOcean or similar), plus time spent on updates, security, and database maintenance.

Project Broadsheet is free to self-host on Cloudflare Pages, Netlify, or Vercel. No platform fees at any scale.

## Newsletter

Ghost's newsletter is excellent. It sends from your domain, supports paid memberships out of the box, has strong analytics, and integrates with Stripe for billing. Subscription management is the central feature of the product.

Project Broadsheet uses <span class="g-term" data-term="Buttondown">Buttondown</span> as its default newsletter integration. Buttondown is also independent, also privacy-respecting, and scales on its own pricing. Project Broadsheet doesn't build newsletter functionality into the core; it delegates.

If paid subscriptions are central to your publication, Ghost is the more complete package today. If your newsletter is secondary to your archive, Buttondown + Project Broadsheet works fine.

## Content ownership

Ghost stores posts in a SQL database. You can export to JSON and migrate to another Ghost instance, but the format is Ghost-specific. Moving to another platform means writing a conversion script.

Project Broadsheet stores each post as a <span class="g-term" data-term="Markdown">Markdown</span> file in Git. Moving to another platform is a folder copy.

## Reader experience

Ghost's article layout is clean but minimal. There are no built-in reader tools (no text-to-speech, no highlights, no annotations, no reading ruler). Third-party plugins can add some of these; most publications don't.

Project Broadsheet ships with 27+ reader-side controls. Whether you need them is a real question; a lot of publishers don't. But they're there.

## When Ghost is the better choice

- Your publication's revenue is from paid subscriptions, and you want the operational side handled.
- You prefer a browser-based editor over file editing.
- You have some budget and don't want to manage hosting yourself.
- You like Ghost's specific theme ecosystem and plugin marketplace.

## When Project Broadsheet is the better choice

- You want to own everything: files, hosting, workflow.
- You don't need paid memberships, or you'll run them through a separate service.
- You prefer Git-based content management (with an optional browser editor via Pages CMS).
- Reader experience features matter to your audience.
- You don't want recurring platform fees at any scale.

## What to do next

- [Get Started](/get-started/) to try Project Broadsheet locally.
- [Migrate from Ghost](/docs/migration/from-ghost/) if you're already using it.
- [All comparisons](/compare/) to see against Substack, WordPress, and Superdesk.

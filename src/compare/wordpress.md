---
layout: layouts/page.njk
title: Project Broadsheet next to WordPress
eyebrow: Compare
subtitle: "WordPress is the oldest name in independent publishing. Project Broadsheet takes a different route. Here's an honest look at where each one fits."
permalink: /compare/wordpress/
narrow: true
---
<div class="lead" style="margin-bottom: var(--space-xl);">
  WordPress powers a huge slice of the web. It's flexible, has plug-ins for nearly everything, and most web agencies can build for it. It's also older, more complicated, and takes more care than people expect. Project Broadsheet trades the WordPress ecosystem's breadth for something simpler — a site that's mostly files, nothing to update on a server, nothing to patch.
</div>

## The short version

| | Project Broadsheet | WordPress |
|---|---|---|
| How it runs | Plain files on a free host | A program running on a server, with a database |
| Starting cost | Nothing | Free to $25+ a month (WordPress.com) |
| Ongoing cost | Hosting only | Hosting, plus plug-ins, themes, sometimes security services |
| Where the writing lives | Plain text files on your computer | In a database |
| Plug-ins | None needed | Tens of thousands |
| Reader features | Built in | Through plug-ins |
| Licence | Open-source (MIT) | Open-source (GPLv2+) |

## The money

WordPress comes in two flavours:

- **WordPress.com** — the hosted version. Free tier with adverts; paid plans run from $4 to $45 a month.
- **WordPress.org** — the self-hosted version. Free software, but you pay for hosting (typically $5–25 a month) and often for premium themes, plug-ins, backup services, and security tools.

A real WordPress site tends to cost more over time than it looks like at first, once the plug-in licences and hosting upgrades add up.

Project Broadsheet is free on services like Cloudflare Pages, Netlify, and Vercel. No database, no program running on a server, no premium plug-ins.

## Security and looking after the site

WordPress is the most-attacked system on the web. Each plug-in adds surface for an attacker. Every outdated piece is a potential hole. Keeping a WordPress site healthy means:

- Keeping plug-ins and themes up to date
- Regular security checks
- Backups, and checking they work
- Server-level updates
- Occasional database clean-ups

A neglected WordPress site will break or get compromised within a year or two.

Project Broadsheet is mostly plain files served by a host's own network. There's no running program to attack. Keeping it healthy is running an update when you feel like it and making sure the next build works. Your host handles the rest.

## Getting your work out

WordPress keeps your writing in a database. You can export it as a file with everything in it, but turning that into something another system can read usually needs a script.

Project Broadsheet's articles are plain text files in a folder. Moving them is copying the folder.

## Plug-ins

WordPress has more plug-ins than any other system. If you need a specific feature (event tickets, a directory, a forum, an online shop), there's almost certainly a plug-in for it. Quality varies from excellent to abandoned.

Project Broadsheet has a small set of optional add-ons — a newsletter, analytics, comments, contact forms, a browser-based editor, machine translation — and no plug-in shop. If you need something beyond those, you build it or have it built.

## When WordPress is the better fit

- You need something that exists only as a mature WordPress plug-in (complex e-commerce, a directory, a discussion forum).
- You're hiring people who already know WordPress inside out.
- You want a full drag-and-drop page builder.
- You've got an existing WordPress site and would rather keep it.

## When Project Broadsheet is the better fit

- You'd rather your writing live in plain files than a database.
- You don't want to think about plug-in updates, security patches, or compatibility.
- You'd rather the site loaded fast and cost almost nothing to run.
- You're writing articles, not selling products.
- You want a publication-shaped starting point — sections, reviews, a library, authors — rather than a blog with bolts added.

## Where to next

- [Moving from WordPress](/docs/migration/from-wordpress/) for the step-by-step.
- [Getting started](/get-started/) to try Project Broadsheet.
- [All the comparisons](/compare/) for Ghost, Substack, and Superdesk.

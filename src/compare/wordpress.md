---
layout: layouts/page.njk
title: Project Broadsheet vs. WordPress
eyebrow: Compare
subtitle: "WordPress is the oldest name in indie publishing. Project Broadsheet takes a different approach: static site generation, Markdown in Git, no database. This is an honest comparison of the two."
permalink: /compare/wordpress/
narrow: true
---
<div class="lead" style="margin-bottom: var(--space-xl);">
  WordPress powers a significant fraction of the web. It's flexible, has a deep plugin ecosystem, and almost every web agency can build for it. It's also older, more complex, and carries more maintenance overhead than a publisher might expect. Project Broadsheet trades the WordPress ecosystem's breadth for the simplicity of a static site.
</div>

## Quick summary

| | Project Broadsheet | WordPress |
|---|---|---|
| Model | Static site, Markdown in Git | PHP application with MySQL |
| Starting cost | $0 | Free to $25+/mo (WordPress.com) |
| Recurring cost | Hosting only | Hosting + plugin + theme fees |
| Content format | Markdown in Git | MySQL database |
| Database | None | Yes (MySQL) |
| Runtime server | No | Yes (PHP) |
| Plugins | None needed | Tens of thousands available |
| Reader tools | 27+ built-in | Via plugins |
| License | MIT | GPLv2+ |

## Pricing

WordPress comes in two forms:

- **WordPress.com** (hosted): Free tier with ads; paid plans from $4 to $45/month.
- **WordPress.org** (self-hosted): Free software, but you pay for hosting (typically $5–25/mo on shared hosting, more for managed WordPress hosts like WP Engine or Kinsta).

Self-hosted WordPress also accumulates costs over time: premium themes ($30–100 one-time), premium plugins (monthly recurring), security services, backup services, CDN, and developer time for updates and fixes.

Project Broadsheet is free on Cloudflare Pages / Netlify / Vercel. No database, no PHP runtime, no premium plugins, no security concerns beyond pushing updates to your Git repo.

## Security and maintenance

WordPress is the most-attacked CMS on the web. Every plugin adds attack surface. Every outdated dependency is a potential exploit. Maintaining a WordPress site in 2026 requires:

- Weekly or monthly plugin/theme updates
- Regular security audits
- Backups (and backup verification)
- Server-level patches
- Occasional database optimization

A neglected WordPress site will break or get hacked within a year.

Project Broadsheet is static HTML. There's no server application to attack; the host serves files from a CDN. Maintenance is `npm update` when you feel like it, and confirming the next build succeeds. Security is whatever your host provides, which is fine because there's no dynamic surface.

## Content ownership and portability

WordPress content lives in MySQL. Export is via a WXR XML file that contains everything (posts, pages, authors, tags, comments). Importing into a different platform means writing or finding a converter.

Project Broadsheet content is Markdown in Git. Moving between static site generators or even back to WordPress is well-traveled territory.

## Plugin ecosystem

WordPress has more plugins than any other CMS. If you need a specific feature (event ticketing, directory listings, forums, or e-commerce), a plugin probably exists. Quality ranges from excellent to abandoned.

Project Broadsheet has a small set of first-party integrations (Buttondown, Umami, Cusdis, Web3Forms, GTranslate, Decap CMS) and no plugin marketplace. For features outside the core, you write them (or hire it out).

## When WordPress is the better choice

- You need a feature that only exists as a mature WordPress plugin (complex e-commerce, directory listing, membership tiers beyond what Buttondown covers).
- You're hiring an agency that specializes in WordPress.
- You want a visual editor with full drag-and-drop page building.
- You're migrating an existing WordPress site and don't want to rewrite it.

## When Project Broadsheet is the better choice

- You want to own your content as text files, not a database.
- You don't want to think about security updates, plugin conflicts, or version compatibility.
- You value fast loads and low running costs more than plugin breadth.
- You write articles, not sell products, and don't need WooCommerce.
- You want a publication-first experience (sections, reviews, library, events) out of the box.

## What to do next

- [Migrate from WordPress](/docs/migration/from-wordpress/) for the step-by-step.
- [Get Started](/get-started/) to try Project Broadsheet.
- [All comparisons](/compare/) for Ghost, Substack, and Superdesk.

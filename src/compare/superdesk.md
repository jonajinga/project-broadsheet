---
layout: layouts/page.njk
title: Project Broadsheet next to Superdesk
eyebrow: Compare
subtitle: Superdesk is newsroom software used by wire services and large news organisations. Project Broadsheet is for independent publishers. Different shapes, different scales.
permalink: /compare/superdesk/
narrow: true
---
<div class="lead" style="margin-bottom: var(--space-xl);">
  <a href="https://superdesk.org">Superdesk</a> is a full newsroom system made by Sourcefabric. It's used by news organisations and wire services that manage hundreds of writers, editors, and production steps. Project Broadsheet and Superdesk don't really compete — they're built for very different-sized operations. This page explains how they differ, so you can tell which one you actually need.
</div>

## The short version

| | Project Broadsheet | Superdesk |
|---|---|---|
| Built for | Independent writers and small teams | Large newsrooms and wire services |
| How it runs | Files you keep, hosted on a free service | A large setup of several services running together |
| Starting cost | Nothing | Just the infrastructure — but that's non-trivial |
| Where the writing lives | Plain text files on your computer | A structured news-industry format, in a database |
| Editorial workflow | Light — review, then publish | Full — desks, stages, approvals, assignments |
| Publishing to | The web | Web, print, wire, social, syndication |
| Reader features | Built in | Not the focus |
| Licence | Open-source (MIT) | Open-source (AGPLv3) |

## What Superdesk is for

Superdesk is a newsroom. It's designed around the way large organisations produce news: a story moves from reporter to editor to fact-checker to production to published, with a formal step at each point. It handles output to more than one place (a web site, a print PDF, a syndicated wire feed, social channels) from a single source. It has roles, permissions, desk assignments, scheduling, and an events module.

If your operation has more than about twenty writers and editors, Superdesk starts to make sense.

## What Project Broadsheet is for

Project Broadsheet is designed for one to a handful of writers, publishing to a single audience. The editorial process is light — write a draft, someone reviews it, it goes live — and the output is a web site with a feed. There's no multi-channel pipeline, no desk system, no formal sign-off chain.

## What it takes to run

Superdesk needs a coordinated setup of several services running together — a document database, a search service, a queue, a web back end, and a front end — usually deployed with container tools and a sysadmin who's comfortable with all of it. Sourcefabric offers managed hosting if that's easier.

Project Broadsheet is plain files served by a static host. Cloudflare Pages or Netlify handle everything. There's no always-running server to look after.

## How each keeps the writing

Superdesk stores articles as structured documents, with the kind of detail a wire service needs — metadata, associations, publishing channels, and so on. That's why syndicating the same piece to a web site, a printed paper, and a wire feed works.

Project Broadsheet stores articles as plain text files, aimed at a web site. For syndication or print, that format doesn't carry the same structure Superdesk's does.

## How work moves through the system

Superdesk has a formal editorial process. A story is "in progress", "submitted", "in review", "approved", "scheduled", "published". Different roles have different permissions — a reporter can't publish without an editor's sign-off.

Project Broadsheet's process is lighter: a writer saves a draft, an editor reviews the change, and once it's approved the change goes live. That works for a small team. It doesn't scale to the formal sign-off chains of a large newsroom.

## When Superdesk is the right fit

- You're running an actual newsroom with multiple writers, editors, and a formal review process.
- You need to publish the same story to a web site, print, a wire feed, and social from one source.
- You have the setup and budget for a multi-service deployment.
- You have compliance or audit requirements that need role-based access control.

## When Project Broadsheet is the right fit

- You're a single writer, or a small editorial team (fewer than about ten people).
- Your output is a web site, with an optional newsletter.
- You'd rather have plain files and almost nothing to keep running.
- The reader-facing features matter to your audience.
- You'd rather keep running costs close to nothing.

## Both are open-source

Neither one locks you to a company. Both can be taken and modified. Superdesk's licence (AGPLv3) has stronger copyleft requirements than Project Broadsheet's (MIT) — that matters mainly if you plan to offer a hosted version of Superdesk to other people as a paid service.

## Where to next

- [Getting started](/get-started/) with Project Broadsheet.
- [Superdesk's own site](https://superdesk.org) for their documentation.
- [All the comparisons](/compare/) for Ghost, Substack, and WordPress.

---
layout: layouts/page.njk
title: Project Broadsheet vs. Superdesk
eyebrow: Compare
subtitle: Superdesk is enterprise newsroom software used by major wire services and news organizations. Project Broadsheet is for independent publishers. Comparing them usefully requires honesty about scope.
permalink: /compare/superdesk/
narrow: true
---
<div class="lead" style="margin-bottom: var(--space-xl);">
  <a href="https://superdesk.org">Superdesk</a> is an open-source digital newsroom system made by Sourcefabric. It's used by news organizations and wire services that manage hundreds of writers, editors, and production stages. Project Broadsheet and Superdesk don't really compete; they serve different-sized operations. This page explains how they differ so you can tell which you actually need.
</div>

## Quick summary

| | Project Broadsheet | Superdesk |
|---|---|---|
| Target user | Independent publishers, small teams | Large newsrooms, wire services |
| Model | Static site generator | Multi-service enterprise system |
| Starting cost | $0 | Infrastructure only, but non-trivial |
| Content format | Markdown in Git | NewsML / MongoDB documents |
| Database | None | MongoDB + Elasticsearch + Redis |
| Editorial workflow | Basic (Git-based) | Full (desks, stages, approvals, assignments) |
| Publishing targets | Web | Web, print, syndication, social, wire |
| Reader tools | 27+ | None |
| License | MIT | AGPLv3 |

## What Superdesk is for

Superdesk is a newsroom management system. It's designed around the workflows of organizations that produce news continuously: a story moves from reporter to editor to fact-checker to production to publish, with formal states at each step. It handles multi-format output (web, print PDF, RSS, social, <span class="g-term" data-term="Atom">Atom</span>, NewsML for syndication to other outlets). It has role-based permissions, desk assignment, content scheduling, and an iCal-friendly events module.

If your operation has more than, say, 20 writers and editors, Superdesk starts to make sense.

## What Project Broadsheet is for

Project Broadsheet is designed for 1–5 writers, maybe a small editorial team, publishing to a single audience. Workflow is whatever Git-based flow you want (branches, pull requests, direct commits). Output is a static web site, plus RSS. No multi-channel publication pipeline, no desk assignments, no complex approval states.

## Infrastructure

Superdesk requires:

- **MongoDB** (document database for content)
- **Elasticsearch** (search index and query engine)
- **Redis** (queue and cache)
- **A web server** (Python backend, Node frontend)
- Realistically: Docker, a multi-container orchestration setup, and a sysadmin comfortable with all of the above.

Running Superdesk in production is a meaningful infrastructure investment. Sourcefabric offers hosted deployments if that's easier.

Project Broadsheet requires Node.js at build time and a static host at runtime. There is no runtime server. Cloudflare Pages or Netlify handle everything.

## Content format

Superdesk stores content as structured documents (rich JSON with metadata, associations to media, packaging info, publishing channels). This is how large news organizations have worked for decades; it's also why syndicating to a print paper, a website, and a wire feed from one source is possible.

Project Broadsheet stores content as Markdown files. Publishing targets the web only. If you need print or syndication, Markdown articles don't carry the structural metadata Superdesk does.

## Editorial workflow

Superdesk has a formal editorial workflow. A story can be "in progress," "submitted," "in review," "approved," "scheduled," "published." Roles (reporter, editor, production) have different permissions. A reporter can't publish; an editor has to approve.

Project Broadsheet uses Git. A writer commits a draft with `draft: true`; an editor reviews the pull request; merging to `main` and pushing triggers a deploy. This works for a small team but doesn't scale to newsroom workflows with formal accountability chains.

## When Superdesk is the right choice

- You're running an actual newsroom with multiple writers, editors, and formal review processes.
- You need to publish to multiple channels from one source (web + print + wire + social).
- You have the infrastructure and budget for a multi-service deployment.
- Your operation has compliance or audit requirements that need role-based access control.

## When Project Broadsheet is the right choice

- You're a single writer, or a small editorial team (under ~10 people).
- Your output is a website (with optional newsletter).
- You prefer flat files, Git, and minimal infrastructure.
- You want reader-experience features out of the box.
- You value low operating cost over enterprise features.

## Both are open-source

Neither is locked behind a vendor. Both can be forked and modified. The AGPLv3 license on Superdesk has stronger copyleft requirements than Project Broadsheet's MIT license; that matters if you plan to offer hosted Superdesk as a commercial service to others.

## What to do next

- [Get Started](/get-started/) with Project Broadsheet.
- [Superdesk's site](https://superdesk.org) for their documentation.
- [All comparisons](/compare/) for Ghost, Substack, and WordPress.

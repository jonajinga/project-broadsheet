---
title: Why your publication should live in Git
summary: The case for plain text, version control, and why the "export" feature on every SaaS should make you suspicious.
date: 2026-04-10
author: Jon Ajinga
tag: Editorial
---

Every publishing platform has an "Export" feature. That's not a gift, it's a confession.

It's the platform admitting, out loud, that your content is being kept somewhere you can't easily reach. The export button is an escape hatch you have to request, and the file you get back is never quite what you had. Metadata drops. Images rehosted. Custom formatting flattened.

Project Broadsheet takes the opposite stance. Your content is plain Markdown in a Git repository. There is no export, because there's nothing to export from, the files on your laptop are the files on your server.

## What this unlocks

- **Version history**, for free, forever. Every edit is a commit. Every deletion can be restored.
- **Portability as default.** Move to a different static site generator? Copy the folder.
- **Collaboration that scales.** Pull requests, code review, branch previews, all the tools software teams have used for twenty years.
- **No "export" feature needed.** You already have everything.

## The trade-off

Markdown in Git requires a small amount of technical literacy. If you've never used Git, there's a learning curve. [Pages CMS](https://pagescms.org) gives you a browser-based editor if you prefer that workflow.

But here's the thing: the learning curve is a one-time cost. The platform lock-in of a SaaS is a tax you pay every month, forever.

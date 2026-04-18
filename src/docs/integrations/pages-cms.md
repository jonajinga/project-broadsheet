---
title: Pages CMS
subtitle: Edit Project Broadsheet content in a browser-based editor backed by Git. Non-technical writers get a familiar interface; every save is a commit.
order: 6
updated: 2026-04-17
---

<span class="g-term" data-term="Pages CMS">Pages CMS</span> is a browser-based editor for Git-backed content. It gives non-technical writers a form-based interface for editing Markdown files stored in your GitHub repository. Every save they make becomes a commit; every commit triggers a deploy. No database involved.

## Why you might want it

Project Broadsheet is Markdown-in-Git by design. That's ideal for developers and people who are comfortable in a terminal. It's a barrier for writers who just want to hit a button and publish. Pages CMS solves that without giving up the Git-based model.

## Configure Pages CMS

Project Broadsheet ships with a ready-made `.pages.yml` schema at the repo root. It defines:

- Content types (articles, reviews, library chapters, editions, events).
- Front-matter fields (title, author, date, section, tags, etc.) with editor widgets.
- A media library that uploads to `src/assets/img/`.

You should not need to edit `.pages.yml` unless you add custom content types or fields.

## Connect your repo

1. Go to <https://pagescms.org> and sign in with GitHub.
2. Authorize Pages CMS to access your Project Broadsheet repository.
3. The dashboard automatically picks up `.pages.yml` and builds a tailored interface.

## Using the editor

- **Collections list.** Articles, reviews, and library chapters each have their own list view.
- **Edit form.** Clicking a collection item opens a form with every front-matter field as a proper input (text, date picker, tag chips, image picker).
- **Markdown body.** The body editor supports both a rich-text toolbar and a raw-Markdown toggle.
- **Save.** Saving commits to the main branch with an auto-generated commit message.

## Non-technical writer workflow

1. Writer logs into Pages CMS.
2. Clicks "New article" in the Articles collection.
3. Fills in the form (title, author, date, section).
4. Writes the body in the editor.
5. Clicks Save.
6. Seven seconds later the article is live.

## Multiple writers

Add writers to your GitHub repo with "write" permission. Pages CMS respects GitHub's access model, so anyone with write access can use the editor. You can also use GitHub's branch protection rules to require pull requests before merges to `main`.

## What to do next

- [Authors](/docs/content/authors/) to add bylines for writers.
- [Front matter reference](/docs/content/front-matter-reference/) for every field the CMS will show.
- [Deployment: Cloudflare Pages](/docs/deployment/cloudflare-pages/) so commits from Pages CMS deploy automatically.

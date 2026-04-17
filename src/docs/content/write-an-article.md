---
title: Write your first article
subtitle: Create a Markdown file, add front matter, hit save.
order: 2
updated: 2026-04-17
---

Articles in Project Broadsheet are plain Markdown files in the `src/content/{section}/` folder. There is no database and no admin panel (unless you want one — see [Pages CMS](/docs/integrations/pages-cms/)).

## Create the file

```bash
touch src/content/news/my-first-article.md
```

## Front matter

Every article needs front matter at the top:

```yaml
---
title: My first article
description: A short summary that appears in search results and RSS.
author: jon-ajinga
date: 2026-04-17
section: news
tags: [local, politics]
---

Your article body goes here, in regular Markdown.
```

## Markdown

Project Broadsheet supports standard Markdown, plus:

- Footnotes
- Tables
- Task lists
- Fenced code blocks

## Preview

Run `npm start` if it isn't already running. Your article appears at `http://localhost:8080/news/my-first-article/` and in the News section index.

## What's next

- [Add an author](/docs/content/authors/) so your name shows up.
- [Create a new section](/docs/content/sections/) if "news" and "opinion" don't fit.

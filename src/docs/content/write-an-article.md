---
title: Write your first article
subtitle: Create a Markdown file in the appropriate section folder, add the required front matter, save. Project Broadsheet builds the URL, RSS entry, and section index automatically.
order: 2
updated: 2026-04-17
---

Articles in Project Broadsheet are plain <span class="g-term" data-term="Markdown">Markdown</span> files stored at `src/content/{section}/`. There is no database, no content management system to log into, no publish button. An article exists because its file exists, and it goes live when you deploy. (If you prefer a browser-based editor, Project Broadsheet includes a ready-made configuration for [Decap CMS](/docs/integrations/decap-cms/).)

## Create the file

```bash
touch src/content/news/my-first-article.md
```

The folder name (`news`) determines which <span class="g-term" data-term="editorial section">editorial section</span> the article belongs to. The filename becomes part of the URL, so use hyphens instead of spaces. `my-first-article.md` becomes `/news/my-first-article/`.

## Add the front matter

Every article begins with a <span class="g-term" data-term="front matter">front matter</span> block, metadata in <span class="g-term" data-term="YAML">YAML</span>, fenced between two `---` lines:

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

The required fields are `title`, `author`, `date`, and `section`. The optional `description` is used for <span class="g-term" data-term="SEO">search engine</span> snippets and RSS summaries. The `tags` list enables cross-linking between related posts.

## Markdown features

Project Broadsheet supports the full CommonMark specification plus a handful of helpful extensions:

- Footnotes
- Tables
- Task lists
- Fenced code blocks with syntax highlighting
- Auto-linked URLs

## Preview

If `npm start` is running, the article appears at `http://localhost:8080/news/my-first-article/` as soon as you save. It also appears in the News section index and in the site-wide search index.

## What to do next

- [Add an author](/docs/content/authors/) so every byline resolves to a bio page.
- [Configure a new section](/docs/content/sections/) if the defaults don't fit your publication.

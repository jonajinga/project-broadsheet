---
title: Migrate from Ghost
subtitle: Export your Ghost archive, convert to Markdown, and land on Project Broadsheet.
order: 1
updated: 2026-04-17
---

## 1. Export from Ghost

In your Ghost admin: **Settings** → **Labs** → **Export your content**. Download the JSON file. This includes all posts, pages, tags, authors, and metadata.

## 2. Convert posts to Markdown

Ghost exports HTML. Use a tool like [turndown](https://github.com/mixmark-io/turndown) to convert each post body to Markdown, then wrap each with Project Broadsheet front matter:

```yaml
---
title: "Post title"
description: "Excerpt or summary"
author: slugged-author
date: 2024-06-15
section: news
tags: [tag1, tag2]
---
```

## 3. Place files in the right sections

```
src/content/news/my-post.md
src/content/opinion/another-post.md
```

## 4. Migrate images

Ghost stores images at `/content/images/...`. Download each referenced image, place them under `src/assets/img/migrated/`, and update the image paths in each Markdown file.

## 5. Set up redirects

Ghost URLs look like `/post-slug/`. Project Broadsheet URLs look like `/section/post-slug/`. To preserve SEO, add a redirects file. On Cloudflare Pages, create `_redirects`:

```
/post-slug /news/post-slug/ 301
```

## Don't want to do this yourself?

Our [Migration service](/services/#migration) handles this end-to-end:

- Automated HTML → Markdown conversion
- Image rehosting
- Redirect map for every old URL
- QA on 10% of the archive

[Request a migration quote](/forms/quote-migration/). Starting at $499 for up to 50 articles.

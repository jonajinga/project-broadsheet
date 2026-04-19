---
title: Migrate from Ghost
subtitle: A five-step walkthrough for moving a Ghost publication to Project Broadsheet. Covers the JSON export, HTML-to-Markdown conversion, image rehosting, and URL preservation.
order: 1
updated: 2026-04-17
---

Moving from Ghost to Project Broadsheet is a matter of converting each post's body from HTML to <span class="g-term" data-term="Markdown">Markdown</span>, wrapping it with the appropriate <span class="g-term" data-term="front matter">front matter</span>, and preserving URLs through a redirect map. The process is mechanical and scriptable, below is the path most publishers follow.

## Step 1. Export from Ghost

In the Ghost admin, open **Settings** → **Labs** → **Export your content**. Ghost downloads a single JSON file containing every post, page, tag, author, and piece of metadata in the site.

## Step 2. Convert HTML to Markdown

The JSON contains each post's body as HTML. Use a conversion tool such as [turndown](https://github.com/mixmark-io/turndown) to translate each body into Markdown, then wrap each post in Project Broadsheet's front matter format:

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

## Step 3. Place files in the correct sections

Project Broadsheet reads articles from `src/content/{section}/`. Organize the converted posts by their target section:

```
src/content/news/my-post.md
src/content/opinion/another-post.md
```

The folder name must match the `section` field in the post's front matter.

## Step 4. Rehost images

Ghost stores images at `/content/images/…`. Download each referenced image, place the files under `src/assets/img/migrated/`, and update the image paths in the Markdown. Relative paths keep the archive portable for future migrations.

## Step 5. Preserve URLs with redirects

Ghost URLs are flat: `/post-slug/`. Project Broadsheet URLs are section-scoped: `/section/post-slug/`. To preserve <span class="g-term" data-term="SEO">SEO</span> value and avoid breaking external links, add a `_redirects` file when deploying to <span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span>:

```
/post-slug /news/post-slug/ 301
```

Generate one line per old URL from the Ghost export's slug list.

## Would you rather hand this off?

I offer a [migration service](/pricing/) that handles the full process, automated conversion, image rehosting, a complete redirect map, and a quality-control pass on a sample of the archive. Tiered pricing starts at $499 for up to 50 articles.

[Book a call](/book-a-call/)

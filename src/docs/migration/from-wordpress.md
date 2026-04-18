---
title: Migrate from WordPress
subtitle: Export a WordPress archive (posts, pages, images, authors), convert to Markdown, and land on Project Broadsheet. This walkthrough covers the full pipeline and the gotchas unique to WordPress.
order: 2
updated: 2026-04-17
---

WordPress uses a SQL database, PHP, and a theming system nothing like a static site. The migration path is: export the content as XML, convert the post HTML to Markdown, rehost the images, and preserve the old URL structure with redirects.

## Step 1 - Export from WordPress

In the WordPress admin:

1. **Tools** → **Export** → **All content**.
2. Download the `.xml` file (this is the "WordPress eXtended RSS" or WXR format).

The XML contains every post, page, author, category, tag, and comment. Images are referenced by URL only; you'll fetch them separately.

## Step 2 - Parse the WXR file

The XML isn't ready-to-use Markdown. Two options for parsing:

- **wp2md** (<https://github.com/zachwhaley/wp2md>) is a command-line tool that converts a WXR file into Markdown files with front matter. It's not perfect but it's the fastest starting point.
- A custom script with `xml2js` (Node) or `ElementTree` (Python) if you need full control over the field mapping.

## Step 3 - Wrap each post with Project Broadsheet front matter

Each converted file needs front matter that Project Broadsheet understands:

```yaml
---
title: "Post title"
description: "Excerpt"
author: wp-author-slug
date: 2024-06-15
section: news
tags: [tag1, tag2]
---
```

Map WordPress categories to Project Broadsheet <span class="g-term" data-term="editorial section">editorial sections</span> with a lookup table. Tags carry over as-is (WordPress tags correspond directly to Broadsheet tags).

## Step 4 - Rehost images

WordPress hosts images at `/wp-content/uploads/YYYY/MM/filename.jpg`. Those URLs will break after migration. Either:

**Option A - Keep them on WordPress.** Leave the old site up as a media server. Simplest, but means you never fully leave WordPress.

**Option B - Rehost to Project Broadsheet.** Download the `/wp-content/uploads/` folder, move it to `src/assets/img/migrated/`, and update every image path in the Markdown files. A sed or regex-replace script handles the bulk rewrite:

```bash
grep -rl "/wp-content/uploads/" src/content/ | xargs sed -i "" \
  "s|/wp-content/uploads/|/assets/img/migrated/|g"
```

## Step 5 - Shortcodes and custom HTML

WordPress posts often contain shortcodes like `[gallery]`, `[caption]`, or theme-specific ones. These don't convert cleanly. Options:

- **Strip them** with a regex if the content is self-contained without them.
- **Convert to HTML** if the shortcode maps to a simple HTML pattern (a `<figure>` with `<figcaption>`, for example).
- **Rewrite manually** for posts that depend on the shortcode's output.

## Step 6 - Preserve URLs with redirects

WordPress URLs typically look like `/2024/06/15/post-title/` or `/post-title/`. Project Broadsheet uses `/{section}/{slug}/`. Generate a redirect map to preserve search-engine rankings:

On <span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span> or Netlify, create a `_redirects` file:

```
/2024/06/15/post-title /news/post-title 301
/author/jane-doe /authors/jane-doe 301
/category/opinion /opinion 301
/tag/politics /tags/politics 301
```

On Vercel, the equivalent goes in `vercel.json` as a `redirects` array.

## Step 7 - Comments

WordPress comments are included in the WXR export, but Project Broadsheet doesn't ingest them. Options:

- **Archive as static HTML** at the bottom of each post.
- **Start fresh** with <span class="g-term" data-term="Cusdis">Cusdis</span> for new comments.
- **Keep the old site up** as a read-only archive for the comment history.

## Would you rather hand this off?

I offer a [migration service](/services/#migration) that handles the full pipeline: WXR parsing, image rehosting, redirect map, comment archival, shortcode conversion, and a quality-control pass. Tiered pricing starts at $299 for up to 50 posts.

[Request a migration quote](/forms/quote-migration/) and I'll reply personally within a business day.

## What to do next

- [Migrate from Ghost](/docs/migration/from-ghost/) for the Ghost path.
- [Migrate from Substack](/docs/migration/from-substack/) for the Substack path.
- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) to host the migrated site.

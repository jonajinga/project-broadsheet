---
title: Migrate from Medium
subtitle: Medium's export is a zip of HTML files with sparse metadata. Converting to Project Broadsheet takes more manual work than Ghost or Substack, but it's straightforward.
order: 4
updated: 2026-04-17
---

Medium exports every post as an HTML file in a zip archive. The export doesn't include clean tags or accurate publish dates in a structured format, which means you'll do more manual work than on other platforms. The good news: Medium stores images at URLs that don't break, so image rehosting is optional.

## Step 1 - Request the export

1. In Medium, go to **Settings** → **Security and apps** → **Download .zip**.
2. Click **Download your information**.
3. Wait for the email (usually within an hour).
4. Download the zip.

## Step 2 - What the export contains

The zip includes:
- `posts/` - one HTML file per post, named like `YYYY-MM-DD_Title-abc123def.html`.
- `profile/` - your public profile metadata.
- `lists/` - any lists (bookmarks, series) you've made.
- `claps.html` - a list of posts you've clapped for.

Each post HTML file starts with your byline, title, and subtitle, then the post body.

## Step 3 - Parse and convert

A Node or Python script works well:

1. Read each `.html` file in `posts/`.
2. Parse the HTML with a library like `cheerio` (Node) or `beautifulsoup4` (Python).
3. Extract title (`<h1>`), subtitle (`<section-heading>` or meta description), and body.
4. Convert the body to <span class="g-term" data-term="Markdown">Markdown</span> with `turndown` or `markdownify`.
5. Derive the publish date from the filename prefix.

## Step 4 - Wrap with Project Broadsheet front matter

```yaml
---
title: "Post title"
description: "Subtitle or first sentence"
author: your-slug
date: 2024-06-15
section: opinion
tags: []
---
```

Medium doesn't export reliable tag metadata, so `tags` often starts empty. You can re-tag manually later if it matters.

## Step 5 - Images

Medium images live at `https://cdn-images-1.medium.com/...`. Those URLs are served globally and don't break when you leave Medium, so you can leave them as-is. If you want to fully self-host:

1. Download every referenced image (a script that scans your Markdown files for `cdn-images-1.medium.com` URLs and wgets them).
2. Save to `src/assets/img/migrated/`.
3. Rewrite paths in the Markdown.

## Step 6 - URL redirects

Medium URLs look like `https://medium.com/@username/post-title-abc123def`. Those don't redirect to your new site by default. Options:

- **Use Medium's "Custom domain"** feature to point a subdomain at Medium (if you're on Medium Partner Program, this requires sign-off).
- **Put a redirect post on Medium** that links to each migrated article. Labor-intensive.
- **Accept the loss** for a clean break and focus on ranking the new site.

For independent publications, the third option is most common. Search engines will re-discover the new URLs via your <span class="g-term" data-term="sitemap">sitemap</span> within a few weeks.

## Step 7 - Subscribers

If you had email subscribers on Medium (via the Partner Program), Medium doesn't provide an email export. You'll need to prompt subscribers to sign up for your new newsletter through a pinned Medium post before you leave, and accept that some percentage won't follow over.

## The paid alternative

I offer a [migration service](/services/#migration) covering Medium exports. Starting at $299 for up to 50 posts.

[Request a migration quote](/forms/quote-migration/).

## What to do next

- [Buttondown integration](/docs/integrations/buttondown/) for your new newsletter.
- [Migrate from Ghost](/docs/migration/from-ghost/) for Ghost-specific steps.
- [Migrate from Substack](/docs/migration/from-substack/) for Substack.

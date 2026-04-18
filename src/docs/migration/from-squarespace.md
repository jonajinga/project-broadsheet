---
title: Migrate from Squarespace
subtitle: How to export your Squarespace content, convert it to Markdown, rehost images, and move to Project Broadsheet without losing your archive or SEO.
order: 7
updated: 2026-04-18
---

Squarespace exports content as a WordPress-compatible XML file. The migration process converts that XML to Markdown files, rehouses images, and maps old URLs to new ones through a redirect file.

## Step 1. Export from Squarespace

1. In Squarespace, go to **Settings → Advanced → Import / Export**.
2. Click **Export** and choose **WordPress** format.
3. Squarespace downloads a `.xml` file containing all your posts, pages, and metadata.

Note: Squarespace does **not** include image files in the export - images are hosted on Squarespace's CDN and referenced by URL in the XML. You will need to download them separately (Step 4).

## Step 2. Parse the XML

The export is a WordPress Extended RSS (WXR) file. Use a WXR parser to extract posts:

```bash
npm install -g wordpress-export-to-markdown
wordpress-export-to-markdown --input=export.xml --output=posts/
```

This produces one Markdown file per post. Review the output - body content will be converted from HTML but may need manual cleanup for complex blocks (galleries, embedded forms, etc.).

## Step 3. Map front matter fields

The parser generates basic front matter. Review and adjust each post:

```yaml
# Generated (adjust as needed)
title: "My post title"
date: 2024-01-15
slug: my-post-title

# Add Project Broadsheet fields
section: news           # Assign to a section
author: your-slug       # Must match an entry in authors.js
tags: [tag1, tag2]
description: "A 120-character summary for SEO."
```

Remove Squarespace-specific fields like `status`, `post_id`, and `wp:post_type` - they have no meaning in Project Broadsheet.

## Step 4. Rehost images

Squarespace images are served from `sqspcdn.com` or `static.squarespace.com`. These URLs will break after you leave Squarespace (especially if you cancel your plan).

Download all referenced images:

```bash
# Extract all image URLs from your Markdown files
grep -roh 'https://[^")\s]*\.\(jpg\|png\|webp\|gif\)' posts/ | sort | uniq > image-urls.txt

# Download each one
while read url; do
  curl -O --output-dir src/assets/img/migrated/ "$url"
done < image-urls.txt
```

Then update all references in the Markdown files to point to `/assets/img/migrated/filename.jpg`.

## Step 5. Place files in sections

Move each post to its correct section folder:

```bash
cp posts/*.md src/content/news/
```

Adjust the target folder to match the section you want each post to live in. Blog posts typically go to `news` or `opinion`; you can sort by tags or category in the XML if you had multiple Squarespace blog pages.

## Step 6. Preserve URLs with redirects

Squarespace blog post URLs are typically `/blog/post-slug`. Project Broadsheet uses `/{section}/post-slug/`. Add a `_redirects` file:

```
/blog/my-post /news/my-post/ 301
/blog/another-post /opinion/another-post/ 301
```

Squarespace pages (About, Contact) map to top-level URLs that Project Broadsheet also uses at the top level - those may not need redirects at all.

To generate the redirect list from your export:

```bash
grep -o '<link>[^<]*</link>' export.xml | \
  sed 's|<link>||;s|</link>||' | \
  grep '/blog/' | \
  awk '{slug=$0; gsub(".*/blog/","",slug); gsub("/","",slug); print "/blog/" slug " /news/" slug "/ 301"}'
```

## What about Squarespace pages?

Squarespace pages (About, FAQ, etc.) do not export as blog posts - they appear as `<wp:post_type>page</wp:post_type>` entries in the XML. Recreate these as Nunjucks pages in `src/pages/` or as standalone Markdown files. For a simple About page, add `src/about.md` with the relevant front matter.

## Would you rather hand this off?

The [migration service](/services/#migration) handles the full process: XML parsing, image rehosting, redirect map, and a quality pass on a sample of the archive. [Request a quote](/forms/quote-migration/).

## What to do next

- [Write your first article](/docs/content/write-an-article/) to understand Project Broadsheet's content model.
- [Front matter reference](/docs/content/front-matter-reference/) for every supported field.
- [Images in articles](/docs/content/images/) for image sizing and storage guidelines.

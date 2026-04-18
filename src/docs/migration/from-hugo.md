---
title: Migrate from Hugo
subtitle: A step-by-step walkthrough for moving a Hugo site to Project Broadsheet. Covers front matter conversion, content organization, shortcode replacement, and URL preservation.
order: 5
updated: 2026-04-18
---

Hugo and Project Broadsheet both use Markdown files with YAML front matter, which makes migration straightforward. The main work is converting Hugo's front matter conventions, replacing Hugo shortcodes with Markdown equivalents, and mapping your old URL structure to Project Broadsheet's section-based URLs.

## Step 1. Audit your Hugo content

Find all your Markdown content:

```bash
find content/ -name "*.md" | wc -l
```

List the front matter fields your posts use:

```bash
grep -h "^[a-z]" content/**/*.md | sort | uniq -c | sort -rn | head -20
```

This tells you which fields need to be mapped and which Hugo-specific fields (like `lastmod`, `draft`, `weight`) you can drop.

## Step 2. Map front matter fields

Hugo and Project Broadsheet share many front matter conventions, but some fields differ:

| Hugo | Project Broadsheet | Notes |
|------|--------------------|-------|
| `title` | `title` | Same |
| `date` | `date` | Same format (YYYY-MM-DD) |
| `draft` | `draft` | Same - `true` excludes from production |
| `tags` | `tags` | Same |
| `description` | `description` | Same |
| `author` | `author` | Must be a slug matching `authors.js` |
| `categories` | `section` | Single value; must match a section slug |
| `slug` | `permalink` | Use `permalink: /custom-url/` |
| `lastmod` | `updated` | Optional; shown in byline |
| `weight` | `order` | Numeric sort order |

Example conversion:

```yaml
# Hugo
title: "My post"
date: 2024-01-15T09:00:00Z
categories: ["news"]
author: "Jon Ajinga"
lastmod: 2024-02-01T00:00:00Z

# Project Broadsheet
title: "My post"
date: 2024-01-15
section: news
author: jon-ajinga
updated: 2024-02-01
```

## Step 3. Organize files into sections

Project Broadsheet reads articles from `src/content/{section}/`. Move each post into the folder matching its section slug:

```
src/content/news/my-post.md
src/content/opinion/another-post.md
```

Hugo's `content/posts/` folder maps to whichever section you designate as the default (usually `news`).

## Step 4. Replace Hugo shortcodes

Hugo shortcodes have no equivalent in Project Broadsheet - the template engine is Nunjucks, not Go templates. Common shortcodes and their Markdown replacements:

| Hugo shortcode | Project Broadsheet equivalent |
|----------------|-------------------------------|
| figure shortcode | `![alt](/assets/img/...)` standard Markdown image |
| youtube shortcode | Raw `<iframe>` embed pasted into the Markdown body |
| gist shortcode | Paste the code directly in a fenced code block |
| highlight shortcode | Fenced code block with language identifier |
| ref shortcode | Plain relative link `[text](/path/)` |

Search your content for shortcodes:

```bash
grep -rl 'shortcode' content/
```

## Step 5. Move images

Hugo stores images alongside posts or in `static/`. Copy all images to `src/assets/img/migrated/` and update references in the Markdown:

```bash
# Find all image references
grep -roh '\!\[.*\]([^)]\+)' content/ | sort | uniq
```

## Step 6. Preserve URLs with redirects

Hugo's default URL is `/posts/post-slug/`. Project Broadsheet uses `/{section}/post-slug/`. Add a `_redirects` file for Cloudflare Pages:

```
/posts/my-post/ /news/my-post/ 301
```

Generate this list from your Hugo content directory:

```bash
find content/posts -name "*.md" -exec basename {} .md \; | \
  awk '{print "/posts/" $1 "/ /news/" $1 "/ 301"}'
```

## Would you rather hand this off?

The [migration service](/services/#migration) handles the full process: automated conversion, image rehosting, redirect map, and a quality pass on a sample of the archive. [Request a quote](/forms/quote-migration/).

## What to do next

- [Write your first article](/docs/content/write-an-article/) to understand the Project Broadsheet content model.
- [Front matter reference](/docs/content/front-matter-reference/) for every supported field.
- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) to go live.

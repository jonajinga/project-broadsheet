---
title: Migrate from Jekyll
subtitle: How to move a Jekyll site to Project Broadsheet, including front matter conversion, Liquid-to-Markdown rewrites, image migration, and redirect setup.
order: 6
updated: 2026-04-18
---

Jekyll and Project Broadsheet share the same core philosophy: Markdown files, YAML front matter, and a build step that generates static HTML. The migration is largely a search-and-replace exercise with a few structural differences to account for.

## Step 1. Find your content

Jekyll keeps posts in `_posts/` with filenames like `2024-01-15-my-post.md`. Count what you have:

```bash
ls _posts/ | wc -l
```

Pages and custom collections live in their own directories. Focus on `_posts/` first; migrate custom collections after posts are working.

## Step 2. Strip the date from filenames

Jekyll encodes the date in the filename (`2024-01-15-my-post.md`). Project Broadsheet uses the `date` front matter field and a plain filename (`my-post.md`).

Rename in bulk:

```bash
for f in _posts/*.md; do
  name=$(basename "$f" | sed 's/^[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}-//')
  cp "$f" "src/content/news/$name"
done
```

Adjust the target folder (`news`) to match your chosen section.

## Step 3. Map front matter fields

Most Jekyll front matter carries over directly:

| Jekyll | Project Broadsheet | Notes |
|--------|--------------------|-------|
| `title` | `title` | Same |
| `date` | `date` | Same (YYYY-MM-DD) |
| `tags` | `tags` | Same |
| `categories` | `section` | Use one value matching a section slug |
| `layout` | (not needed) | Inherited from the section folder's `.json` |
| `permalink` | `permalink` | Same syntax |
| `published: false` | `draft: true` | Rename the field |
| `author` | `author` | Must be a slug in `authors.js` |
| `excerpt` | `excerpt` | Same |

Remove Jekyll-only fields (`layout: post`, `published`, `category`) that have no Project Broadsheet equivalent.

## Step 4. Replace Liquid tags

Jekyll uses Liquid templating in Markdown body content. Project Broadsheet does not process Liquid in content files. Common replacements:

| Jekyll Liquid tag | Replacement |
|-------------------|-------------|
| highlight/endhighlight tags | Fenced code block with language identifier |
| link tag | Plain relative link: `[About](/about/)` |
| site.baseurl variable | `/assets/img/` (bare path) |
| include tag | `![alt](/assets/img/…)` standard Markdown image |
| raw/endraw tags | Remove them - Markdown body is not Liquid-processed |

Search for remaining Liquid tags after migration:

```bash
grep -rn "liquid" src/content/
```

## Step 5. Move images

Jekyll images typically live in `assets/` or `images/`. Copy them to `src/assets/img/migrated/` and update all image paths in the Markdown:

```bash
sed -i 's|/assets/images/|/assets/img/migrated/|g' src/content/news/*.md
```

## Step 6. Preserve URLs with redirects

Jekyll's default post URL is `/year/month/day/slug/`. Project Broadsheet uses `/{section}/slug/`. Add a `_redirects` file:

```
/2024/01/15/my-post/ /news/my-post/ 301
```

Generate from your `_posts/` filenames:

```bash
ls _posts/*.md | while read f; do
  slug=$(basename "$f" .md | sed 's/^[0-9-]*//')
  date=$(basename "$f" | grep -o '^[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}' | tr '-' '/')
  echo "/$date/$slug/ /news/$slug/ 301"
done
```

## Would you rather hand this off?

The [migration service](/services/#migration) handles the full process: automated conversion, image rehosting, redirect map, and a quality pass. [Request a quote](/forms/quote-migration/).

## What to do next

- [Write your first article](/docs/content/write-an-article/) to understand Project Broadsheet's content model.
- [Front matter reference](/docs/content/front-matter-reference/) for every supported field.
- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) to publish the migrated site.

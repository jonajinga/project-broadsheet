---
title: Images in articles
subtitle: How to add cover images and inline images to articles, where to store image files, recommended sizes, and how to write good alt text.
order: 7
updated: 2026-04-18
---

Images in Project Broadsheet articles come in two forms: a **cover image** declared in front matter (shown as the article hero and used in social previews) and **inline images** placed in the Markdown body wherever you need them.

## Where to store image files

Place all article images under `src/assets/img/`. Organize by content type to keep the folder manageable:

```
src/assets/img/articles/     ← article inline images
src/assets/img/covers/       ← article cover and hero images
src/assets/img/authors/      ← author avatars
src/assets/img/migrated/     ← images rehosted from a migration
```

Images in `src/assets/img/` are copied to `_site/assets/img/` unchanged at build time. Reference them by their public path: `/assets/img/covers/my-article.jpg`.

## Cover and hero images

Declare the cover image in front matter:

```yaml
---
title: "My article title"
cover_image: "/assets/img/covers/my-article.jpg"
cover_image_alt: "Describe what is in the image for screen readers."
---
```

- `cover_image`: shown at the top of the article page and used as the Open Graph image for social sharing.
- `cover_image_alt`: required for accessibility. Describe the image content, not its appearance.

If you want a separate image for social previews (e.g., a square crop), add:

```yaml
og_image: "/assets/img/covers/my-article-square.jpg"
```

### Recommended cover sizes

| Use | Recommended size |
|-----|-----------------|
| Article hero | 1200 × 630 px |
| Open Graph / social | 1200 × 630 px |
| Author avatar | 200 × 200 px |

## Inline images

In the Markdown body, use standard Markdown syntax:

```markdown
![Alt text describing the image](/assets/img/articles/chart.png)
```

Add a caption by placing italic text immediately below the image:

```markdown
![Monthly visitor graph](/assets/img/articles/visitors.png)
*Visitors grew 40% in Q1 2026.*
```

## Image formats

- **JPEG**: photographs and images with many colors
- **PNG**: screenshots, diagrams, images with transparency
- **WebP**: a modern format roughly 30% smaller than JPEG/PNG at equal quality, supported by all modern browsers
- **SVG**: logos and icons that scale perfectly at any size

Prefer WebP for photographs when you can produce it. If you need maximum compatibility, JPEG is safe.

## File size guidelines

Large images slow page loads and hurt PageSpeed scores. Aim for:

- Cover images: under 200 KB
- Inline images: under 150 KB each

Use [Squoosh](https://squoosh.app) or ImageMagick to compress before committing.

## What to do next

- [Front matter reference](/docs/content/front-matter-reference/) for the full list of image fields.
- [Open Graph and social previews](/docs/seo/open-graph/) for how cover images become share cards.
- [Performance and optimization](/docs/deployment/performance/) for build-time image strategies.

---
title: Structured data (JSON-LD)
subtitle: Project Broadsheet automatically embeds JSON-LD structured data so search engines understand each page as an Article, an Organization, or a specific content type. Better search previews follow.
order: 3
updated: 2026-04-17
---

<span class="g-term" data-term="JSON-LD">JSON-LD</span> is a machine-readable description of a page, embedded invisibly in the HTML. Search engines read it to understand what a page is - an article, an event, a review, a person - and use that to render richer search results (featured snippets, byline badges, star ratings on review cards).

## What Project Broadsheet generates automatically

Every page gets at least an `Organization` block identifying the publication:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Project Broadsheet",
  "url": "https://projectbroadsheet.com",
  "logo": "https://projectbroadsheet.com/assets/img/logo.svg",
  "email": "hello@projectbroadsheet.com"
}
```

Each article additionally emits an `Article` (or `NewsArticle`, `Review`, `Event`, etc.) block with the title, author, publish date, modified date, description, and hero image.

## Where it lives

The JSON-LD script is in `src/_includes/layouts/base.njk` and article-specific layouts. You don't usually need to edit it by hand.

## Per-article customization

To change the schema type of a specific article, override in front matter:

```yaml
schema_type: "NewsArticle"
```

Supported types in the article layout:
- `Article` (default)
- `NewsArticle`
- `BlogPosting`
- `OpinionNewsArticle`
- `Review` (for review layouts)
- `Event` (for event layouts)

## Review-specific data

Review pages emit a `Review` block with the rated subject's metadata:

```json
{
  "@type": "Review",
  "itemReviewed": {
    "@type": "Book",
    "name": "The Example Book",
    "author": "Example Author"
  },
  "reviewRating": { "@type": "Rating", "ratingValue": "4.5" }
}
```

This is what powers star-rating thumbnails in Google search results.

## Validating your structured data

After deploy:

1. Copy the URL of any article.
2. Paste into Google's [Rich Results Test](https://search.google.com/test/rich-results).
3. The tool shows which types are detected and any warnings.

A clean result means Google understands your schema correctly.

## What to do next

- [Open Graph](/docs/seo/open-graph/) for how shares appear on social media.
- [XML sitemap](/docs/seo/sitemap/) for helping search engines find pages.
- [Meta tags](/docs/seo/meta-tags/) for page titles and descriptions.

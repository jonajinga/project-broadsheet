---
title: Front matter reference
subtitle: A complete index of every front-matter field Project Broadsheet understands, grouped by article type. Pin this page, you will use it often.
order: 5
updated: 2026-04-17
---

Every Markdown file in Project Broadsheet starts with a <span class="g-term" data-term="front matter">front-matter</span> block, a YAML section between two `---` fences. The fields below are the ones Project Broadsheet knows about. Any additional fields you add are simply passed through to the template.

## Required for every article

```yaml
---
title: "Article title"
author: jon-ajinga
date: 2026-04-17
section: news
---
```

- `title`: shown in the `<h1>`, the `<title>` tag, search previews, and RSS.
- `author`: the slug of an entry in `authors.js`. See [Authors](/docs/content/authors/).
- `date`: ISO format (`YYYY-MM-DD`). Controls sort order and the visible publish date.
- `section`: the slug of a section in `sections.js`. See [Sections](/docs/content/sections/).

## Recommended

```yaml
description: "A 120-character summary for SEO and RSS previews."
tags: [politics, local, 2026-election]
excerpt: "A pull-quote or teaser rendered at the top of the article."
featured: true
```

- `description`: appears in search engine snippets and social previews. Keep under 160 characters.
- `tags`: an array of lowercase slugs. Used for related-article suggestions and future tag pages.
- `excerpt`: an optional summary paragraph rendered between the title and body.
- `featured`: set `true` to surface the article on the homepage and section index.

## Layout and template

```yaml
layout: layouts/article.njk
permalink: /custom-url/
```

- `layout`: override the default article template. See [Custom layouts](/docs/customization/custom-layouts/).
- `permalink`: override the URL. By default it's `/{section}/{filename}/`.

## Reviews

Reviews use additional fields. See [Reviews](/docs/specialty-content/reviews/).

```yaml
layout: layouts/review.njk
review_type: book
rating: 4.5
subject:
  title: "The Example Book"
  creator: "Example Author"
  year: 2025
  publisher: "Example Press"
  isbn: "978-0-0000-0000-0"
```

## Library chapters

```yaml
workSlug: on-liberty
chapterNumber: 2
title: "Of the Liberty of Thought and Discussion"
featured: false
```

The layout and shared work metadata (author, original year, source, subjects, difficulty) come from the folder-level JSON data file — they don't need to be repeated per chapter. See [Library](/docs/specialty-content/library/) for the full setup.

## Editions

```yaml
layout: layouts/edition.njk
edition_number: 42
edition_date: "2026-04-01"
cover_image: "/assets/img/editions/42-cover.jpg"
```

See [Editions](/docs/specialty-content/editions/).

## Events

```yaml
layout: layouts/event.njk
starts_at: "2026-05-15T19:00:00-06:00"
ends_at: "2026-05-15T21:00:00-06:00"
location: "Pikes Peak Library, Colorado Springs"
recurrence: "weekly"
```

See [Events](/docs/specialty-content/events/).

## Images and media

```yaml
cover_image: "/assets/img/articles/my-article-cover.jpg"
cover_image_alt: "A description of the cover image for screen readers."
hero_image: "/assets/img/articles/my-article-hero.jpg"
```

## SEO fields

Most SEO metadata is generated automatically from `title`, `description`, and `cover_image`. Override if needed:

```yaml
og_image: "/assets/img/articles/social-specific-image.jpg"
og_title: "Alternative title shown on social shares"
twitter_card: "summary_large_image"
canonical: "https://example.com/canonical-url/"
noindex: true
```

## Drafts

```yaml
draft: true
```

Articles with `draft: true` are excluded from production builds but still render locally with `npm start` (so you can preview). To ship a draft, remove the field or set it to `false`.

## What to do next

- [Markdown reference](/docs/content/markdown-reference/) for the body-text syntax.
- [Authors](/docs/content/authors/) to add writers to `authors.js`.
- [Reviews](/docs/specialty-content/reviews/) for review-specific fields.

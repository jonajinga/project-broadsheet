---
title: Reviews (books, films, podcasts, documentaries)
subtitle: Reviews are a dedicated content type in Project Broadsheet, with structured metadata, star ratings, and a filterable index. This page explains how to create and configure them.
order: 1
updated: 2026-04-17
---

Reviews are a first-class content type in Project Broadsheet, distinct from regular articles. They live at `src/content/reviews/`, appear on the shared reviews index with filtering by type and rating, and render with a review-specific layout that highlights structured metadata (author, publisher, year, ISBN, and so on).

## Create a review file

```
src/content/reviews/book-of-example.md
```

Naming the file with the reviewed subject's slug keeps the URL readable: `/reviews/book-of-example/`.

## Front matter

Reviews use a richer <span class="g-term" data-term="front matter">front matter</span> block than regular articles:

```yaml
---
layout: layouts/review.njk
title: "The Example Book"
author: jon-ajinga
date: 2026-04-17
review_type: book
rating: 4.5
subject:
  title: "The Example Book"
  creator: "Example Author"
  year: 2025
  publisher: "Example Press"
  isbn: "978-0-0000-0000-0"
---

Your review body here, in Markdown.
```

The `layout` field points at the review-specific template. `review_type` determines the filter category and the icon shown on the index. `rating` is a decimal between 0 and 5. The `subject` block holds the structured data about what's being reviewed.

## Supported review types

- `book`, book reviews
- `film`, film reviews
- `podcast`, podcast reviews
- `documentary`, documentary reviews

Each type is associated with an icon and a filter toggle on the reviews index page. Adding a new type is a template-level change; contact me if you need a custom type that isn't in the list.

## What to do next

- [Library and public-domain chapters](/docs/specialty-content/library/), long-form source material organized by work.
- [Events calendar](/docs/specialty-content/events/), time-based entries with recurrence support.

---
title: Reviews (books, films, podcasts, documentaries)
subtitle: A dedicated review content type with star ratings, metadata, and filtering.
order: 1
updated: 2026-04-17
---

Reviews are a first-class content type in Project Broadsheet. They live at `src/content/reviews/`, share the reviews index, and support filtering by type and rating.

## Create a review

```
src/content/reviews/book-of-example.md
```

## Front matter

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

## Review types

Supported out of the box:

- `book` — book reviews
- `film` — film reviews
- `podcast` — podcast reviews
- `documentary` — documentary reviews

Each type has a matching icon and filter on the reviews index page.

## What's next

- [Library and public domain chapters](/docs/specialty-content/library/).
- [Events calendar](/docs/specialty-content/events/).

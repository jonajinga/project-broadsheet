---
title: Bookshelf
subtitle: A curated reading list at /bookshelf/, one Markdown file per book, grouped by category and filterable by tag.
order: 9
updated: 2026-04-20
---

The bookshelf is a publication-curated reading list — not a library of full texts (that is the [Library](/docs/specialty-content/library/)), but a list of books the publication recommends. It lives at `/bookshelf/`, and each book is its own Markdown file under `src/bookshelf/`. A folder-level data file sets the shared layout and permalink pattern.

## Add a book

Each entry is a Markdown file at `src/bookshelf/{slug}.md`:

```yaml
---
layout: book-entry
title: "The Age of Reason"
bookAuthor: "Thomas Paine"
year: 1794
publisher: "(Originally self-published)"
category: "History of Freethought"
description: "The most widely read freethought text of the 18th century — Paine's systematic, accessible critique of revealed religion."
bestFor: "Readers who want to understand how 18th-century radicals thought about religion and reason."
difficulty: "Accessible"
tags:
  - bookshelf
  - freethought
  - thomas-paine
date: 2026-03-18
---

Optional extended notes in Markdown — read this when…
```

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Book title |
| `bookAuthor` | Yes | Author of the book (kept distinct from `author`, which is the reviewer) |
| `year` | No | Publication year (original, not the edition you're linking to) |
| `publisher` | No | Original publisher or imprint |
| `category` | Yes | Used to group entries on the index page |
| `description` | Yes | 1–3 sentence annotation explaining why you recommend it |
| `bestFor` | No | One-line audience note shown on the card |
| `difficulty` | No | Free-form label (Accessible, Intermediate, Advanced) |
| `tags` | No | For filtering. Include the `bookshelf` tag so it's picked up by the collection. |
| `date` | Yes | Used to sort recently added picks |

The folder-level `src/bookshelf/bookshelf.json` applies the `book-entry` layout and `/bookshelf/{slug}/` permalink pattern to every file in the folder, so you don't need to repeat them in each entry.

## The bookshelf index

`/bookshelf/` renders all entries grouped by category, alphabetically within each group. Readers can filter by tag using the client-side filter — no page reload required.

Each entry shows title, book author, year, description, difficulty, and an optional link button when the body contains a "buy / borrow / read free" link.

## Creating a new category

Categories are free-form strings. Add a new `category` value in any Markdown file and it automatically becomes a heading on the next build. There is no separate category registration step.

## What to do next

- [Library](/docs/specialty-content/library/) for hosting full public-domain texts with chapter navigation and reading progress.
- [Quotes](/docs/specialty-content/quotes/) for a pull-quote collection alongside your reading recommendations.
- [Data files reference](/docs/customization/data-files/) for how data files work across the framework.

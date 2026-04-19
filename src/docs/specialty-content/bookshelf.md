---
title: Bookshelf
subtitle: A curated reading list at /bookshelf/ driven by a data file. Organize recommended books by category, add ISBNs, link out to retailers, and let readers filter by topic.
order: 9
updated: 2026-04-18
---

The bookshelf is a publication-curated reading list — not a library of full texts (that is the [Library](/docs/specialty-content/library/)), but a list of books the publication recommends. It lives at `/bookshelf/` and is driven entirely by a data file. There are no Markdown files to create per book: add an entry to the data file, rebuild, and it appears.

## Add books

Books are defined in `src/_data/bookshelf.js`:

```js
export default [
  {
    title: "The Age of Reason",
    author: "Thomas Paine",
    year: 1794,
    isbn: null,
    category: "Philosophy",
    description: "Paine's argument for deism and against institutionalized religion, written in two parts during the French Revolution.",
    url: "https://www.gutenberg.org/ebooks/3743",
    tags: ["philosophy", "deism", "history"]
  },
  {
    title: "On Liberty",
    author: "John Stuart Mill",
    year: 1859,
    isbn: "978-0-14-043200-0",
    category: "Political Philosophy",
    description: "Mill's foundational essay on the nature and limits of the power that society can exercise over the individual.",
    url: "https://www.gutenberg.org/ebooks/34901",
    tags: ["philosophy", "politics", "freedom"]
  }
];
```

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Book title |
| `author` | Yes | Author name |
| `year` | No | Publication year (original, not edition) |
| `isbn` | No | ISBN-13 preferred. Use `null` for public domain works without a current edition. |
| `category` | Yes | Used to group entries on the index page |
| `description` | No | 1–3 sentence annotation explaining why you recommend it |
| `url` | No | Link to purchase, borrow, or read free — retailer, library, or Project Gutenberg |
| `tags` | No | For filtering |

## The bookshelf index

`/bookshelf/` renders all entries grouped by category, alphabetically within each group. Readers can filter by tag or category using the client-side filter — no page reload required.

Each entry shows title, author, year, description, and a link button if `url` is provided.

## Creating a new category

Categories are free-form strings. Add a new `category` value in the data file and it automatically becomes a filter option on the next build. There is no separate category registration step.

## What to do next

- [Library](/docs/specialty-content/library/) for hosting full public-domain texts with chapter navigation and reading progress.
- [Quotes](/docs/specialty-content/quotes/) for a pull-quote collection alongside your reading recommendations.
- [Data files reference](/docs/customization/data-files/) for how data files work across the framework.

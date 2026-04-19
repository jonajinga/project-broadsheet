---
title: Quotes
subtitle: A curated collection of quotations displayed on a dedicated /quotes/ page and pulled into articles with the pullquote shortcode.
order: 7
updated: 2026-04-18
---

The quotes system has two parts: a data-driven `/quotes/` index page that displays a filterable collection of quotations, and a `pullquote` shortcode for styling a standalone quotation inside an article body. They are independent — you can use either without the other.

## The quotes collection

Quotes are defined in `src/_data/quotes.js`:

```js
export default [
  {
    text: "The first step towards getting somewhere is to decide you are not going to stay where you are.",
    author: "J.P. Morgan",
    source: "Attributed",
    year: null,
    tags: ["progress", "decision", "action"]
  },
  {
    text: "An unexamined life is not worth living.",
    author: "Socrates",
    source: "Apology, Plato",
    year: -399,
    tags: ["philosophy", "self-knowledge"]
  }
];
```

| Field | Required | Notes |
|---|---|---|
| `text` | Yes | The quotation itself |
| `author` | Yes | Who said or wrote it |
| `source` | No | Book, speech, interview, or "Attributed" |
| `year` | No | Four-digit year; negative for BCE |
| `tags` | No | Array of strings used for filtering on the index page |

Add a new quote by appending to the array. Rebuild and it appears on `/quotes/`.

## The quotes index page

`/quotes/` renders all entries in a masonry-style grid. Readers can filter by tag — clicking a tag shows only matching quotes. The filter runs client-side with no page reload.

## The pullquote shortcode

Use `pullquote` inside any article body to render a styled pull quote:

```
{% raw %}{% pullquote "The press is the best instrument for enlightening the mind of man.", "Thomas Jefferson" %}{% endraw %}
```

This renders as a visually distinct blockquote with the author attribution below. Pull quotes use the publication's accent color for their left border. They float within the article flow and do not create a new section.

**Pull quote vs. Markdown blockquote:**

| | Pull quote | Markdown `>` blockquote |
|---|---|---|
| Visual weight | High — large, accented | Low — indented gray text |
| Attribution line | Built in | Manual |
| Use case | Editorial emphasis | Prose quotation or reference |

Use pull quotes sparingly — once or twice per long article at most. They are designed to break up dense text and surface a key idea, not to decorate every section.

## What to do next

- [Glossary](/docs/specialty-content/glossary/) for the hover tooltip system built on a similar data-driven model.
- [Writing articles](/docs/content/write-an-article/) for shortcode usage in article bodies.
- [Design tokens](/docs/design/tokens/) for the `--accent` color that styles pull quotes.

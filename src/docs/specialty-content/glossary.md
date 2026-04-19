---
title: Glossary
subtitle: An A-to-Z reference of terms with hover tooltips that appear anywhere across your publication. Readers never need to leave an article to look up a definition.
order: 6
updated: 2026-04-18
---

The glossary is a dedicated content type that does two things: it provides a browsable `/glossary/` index page organized alphabetically, and it injects hover tooltips into article text automatically. Any term defined in the glossary can be referenced in an article with a single HTML span — readers hover or tap to see the definition without leaving the page.

## How it works

At build time, Project Broadsheet reads every glossary entry and injects the full term list into the page as `window.__glossaryTerms`. The `glossary-tips.js` script then scans each article body for `<span class="g-term" data-term="...">` elements and attaches a Tippy.js tooltip with the matching definition. No network request is made — the definitions are baked into the page at build time.

## Create a glossary entry

Glossary entries live at `src/content/glossary/`:

```
src/content/glossary/front-matter.md
src/content/glossary/static-site-generator.md
```

Each file gets its own page at `/glossary/{slug}/` and appears in the A-to-Z index.

## Front matter

```yaml
---
title: Front matter
definition: Metadata at the top of a Markdown file, fenced between two sets of three dashes, used to configure how the page is built and displayed.
aliases:
  - frontmatter
  - yaml front matter
related:
  - markdown
  - yaml
---

Extended explanation in the body, in Markdown. This appears on the full glossary entry page but not in the tooltip (which uses `definition` only).
```

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | The canonical term name, displayed in the index and as the tooltip heading |
| `definition` | Yes | Short definition shown in the hover tooltip. Keep it under 40 words. |
| `aliases` | No | Alternate spellings or phrasings that should trigger the same tooltip |
| `related` | No | Slugs of other glossary terms to link at the bottom of the entry page |

## Use a term in an article

To attach a tooltip to a term in article body text, wrap it in a `g-term` span:

```html
Every article begins with a
<span class="g-term" data-term="front matter">front matter</span>
block.
```

The `data-term` value must match the `title` field of a glossary entry (case-insensitive). If no match is found, the span renders as plain text with no tooltip.

## The glossary index page

`/glossary/` renders all entries grouped by first letter. Each letter section links to the full entry page. Entries without a body beyond the definition are marked as stubs.

Readers can also search the glossary using the page's built-in filter — typing in the search field narrows the visible entries client-side without a page load.

## What to do next

- [Quotes](/docs/specialty-content/quotes/) for the pull-quote collection and shortcode.
- [Library](/docs/specialty-content/library/) for full public-domain works with chapter navigation.
- [Writing articles](/docs/content/write-an-article/) to learn how to use `g-term` spans in article bodies.

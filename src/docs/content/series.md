---
title: Article series
subtitle: Group multi-part articles into a named series. Project Broadsheet generates a series navigation block automatically and keeps all parts linked.
order: 10
updated: 2026-04-18
---

A series is a group of articles that belong together in a defined order — an investigation in four parts, a course in ten installments, a debate that spans multiple pieces across different authors. Project Broadsheet detects series membership from front matter and renders a navigation block above each article showing all parts, the current position, and links to adjacent parts.

## Mark an article as part of a series

Add `series` and `seriesPart` to the article's front matter:

```yaml
---
title: "The Housing Crisis, Part 1: How We Got Here"
series: housing-crisis
seriesPart: 1
seriesTitle: "The Housing Crisis"
---
```

| Field | Required | Notes |
|---|---|---|
| `series` | Yes | A slug that matches across all parts. Use hyphens, no spaces. |
| `seriesPart` | Yes | Integer. Parts are ordered and displayed by this number. |
| `seriesTitle` | No | Human-readable series name. Only needs to appear in one part — Project Broadsheet picks it up from whichever part defines it. |

Every article in the series must use the same `series` slug. The slug never appears in the URL; it is only used to group articles.

## What readers see

A series navigation block appears above the article body on every part:

```
Part 2 of 4 — The Housing Crisis
← Part 1: How We Got Here    Part 3: The Policy Failures →
```

The full list of parts is shown in a compact list with the current part highlighted. Readers can jump to any part from any other.

## Series spanning sections or authors

Series parts can live in different sections or have different authors. The `series` slug links them regardless of where they live in the content tree.

```yaml
# Part 1 — in news/, by reporter-a
series: housing-crisis
seriesPart: 1

# Part 2 — in analysis/, by reporter-b
series: housing-crisis
seriesPart: 2
```

This is intentional: an investigation might start in News, move to Analysis, and conclude with an Opinion.

## Best practices

- Keep `series` slugs stable. Changing the slug breaks the grouping.
- Number parts from 1. Parts without a `seriesPart` value are excluded from the series block.
- Write each part to stand on its own. Readers often land on Part 3 from search — the series nav helps them find context, but the article itself should not assume they read the earlier parts.
- Publish all parts before promoting the series. Readers will click through to later parts immediately.

## What to do next

- [Responses and backlinks](/docs/content/responses/) for linking articles that reply to each other without a defined order.
- [Editions](/docs/specialty-content/editions/) for grouping content into numbered issues rather than linear series.
- [Writing articles](/docs/content/write-an-article/) for the full front matter reference.

---
title: Editions
subtitle: Group a set of articles into a numbered issue, give it a cover, a publish date, and a printable layout. Ideal for newsletters, magazines, and anything that ships on a regular schedule.
order: 3
updated: 2026-04-17
---

Editions are numbered issues: Issue 42, Issue 43, and so on. Each edition collects a set of articles under one cover, on one publish date, with a single print-friendly layout. If your publication ships a "weekly" or "monthly" on a schedule, editions are how you package it.

## Define an edition

Editions are Markdown files at `src/content/editions/{number}.md`:

```yaml
---
layout: layouts/edition.njk
edition_number: 42
title: "Issue 42 — Spring 2026"
edition_date: "2026-04-01"
cover_image: "/assets/img/editions/42-cover.jpg"
articles:
  - /news/the-great-debate/
  - /opinion/what-we-owe/
  - /reviews/the-example-book/
  - /analysis/the-long-view/
---

An introductory editor's note, in Markdown.
```

Each entry in `articles` is a URL of a published article. Project Broadsheet pulls the full metadata (title, author, excerpt, publish date) automatically.

## Edition index page

Visiting `/editions/` lists every edition newest-first, each with its cover image, issue number, and publish date.

## Individual edition pages

Each edition gets its own page at `/editions/{number}/` showing:

- The cover image and editor's note.
- Every article in order, with byline and excerpt.
- A "Download this edition as PDF" link (uses browser print).

## Print styles

The edition template includes a print-friendly CSS layout that turns every article into a magazine-style spread: proper page breaks, running headers, a table of contents, and no site chrome. Readers can hit print and get a clean PDF.

## What to do next

- [Library](/docs/specialty-content/library/) for works organized by chapter rather than issue.
- [Reviews](/docs/specialty-content/reviews/) for structured reviews with ratings.
- [Custom layouts](/docs/customization/custom-layouts/) to change the edition template.

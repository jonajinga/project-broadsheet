---
title: Notes page
subtitle: /notes/ aggregates every highlight and annotation a reader has made across all articles and library chapters into a single searchable, exportable page.
order: 9
updated: 2026-04-18
---

When readers highlight text or add notes in articles or library chapters, those annotations are saved to `localStorage` on their device. The `/notes/` page reads all of that stored data and presents it in one place — a personal research dashboard scoped to what they've read on your publication.

Everything on the notes page is local to the reader's device. No annotations are sent to a server or stored anywhere outside the browser.

## What the notes page shows

- Every highlight saved across all articles, with the source article title and a link back
- Every note attached to a highlight, rendered with formatting
- Bookmarks saved in library chapters, with the work and chapter name
- Reading progress for in-progress library works (percentage complete)

## Filtering

Readers can filter the notes page by:

- **Source type** — articles only, library only, or both
- **Work or section** — narrow to a specific publication section or library work
- **Full-text search** — searches within the content of notes and highlights

Filtering runs client-side and updates instantly.

## Exporting notes

Readers can export all their notes as:

- **JSON** — structured data including source URL, selection text, note text, color, and timestamp. Suitable for importing into research tools.
- **Plain text** — a formatted document listing each annotation with its source, usable in any text editor or word processor.

The export covers all annotations visible in the current filter state. Filtering to a single article then exporting gives just that article's annotations.

## Adding /notes/ to your navigation

The notes page is built automatically. To link to it from your publication's navigation, add it to `src/_data/nav.js`:

```js
{ label: "My notes", url: "/notes/" }
```

Or add a link to the site footer in `src/_includes/partials/footer.njk`. Some publications surface it only in the reader panel rather than the main nav.

## Privacy

- All data lives in `localStorage` on the reader's device.
- Clearing browser storage removes all annotations permanently.
- There is no account, no sync, and no server-side copy.
- The [import/export feature](/docs/reader-tools/highlights-and-notes/) in the highlights panel lets readers back up and restore their data as JSON.

## What to do next

- [Highlights and notes](/docs/reader-tools/highlights-and-notes/) for how readers create annotations in the first place.
- [Reader panel](/docs/reader-tools/reader-panel/) for the Notes tab available within the article sidebar.
- [Library](/docs/specialty-content/library/) for the library chapter annotation system.

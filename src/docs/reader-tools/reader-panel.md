---
title: Reader panel
subtitle: A persistent side panel on article and library pages with tabs for highlights, bookmarks, reading progress, related articles, and citations.
order: 10
updated: 2026-04-18
---

The reader panel is a collapsible sidebar that appears alongside article and library content. It consolidates the most common reader actions — annotations, navigation, and discovery — in one place without leaving the article. Readers open it with the panel toggle button (the leftmost icon in the reader toolbar).

## Tabs

The panel has five tabs:

### Highlights & Notes

Lists every highlight and note the reader has saved in the current article or chapter. Clicking a highlight scrolls the article to the highlighted text. Notes are shown in full with their formatting.

From this tab, readers can:
- Add a note to an existing highlight
- Delete a highlight (and its attached note)
- Change the highlight color

### Bookmarks

Lists position bookmarks saved in the current article. Each bookmark stores a scroll percentage and a label (the nearest heading, or "Beginning" for the top). Clicking a bookmark jumps to that position.

Bookmarks are most useful in long articles and library chapters where resuming reading from a saved position matters.

### Reading progress

For library works, shows completion percentage for the current work and the full chapter list. Completed chapters are visually marked. A "Resume reading" button jumps to the last saved position across all chapters.

For articles, shows how far through the current article the reader has scrolled.

### Related articles

A weighted list of articles from the same publication, ranked by:
- Tag overlap (highest weight)
- Section match
- Title word overlap
- Recency

This is the same algorithm that powers the "Related" section at the bottom of articles, surfaced here for in-panel access without scrolling to the bottom.

### Citation

A pre-formatted citation for the current article in APA 7, MLA 9, and Chicago 17. One-click copy. See [Download and cite](/docs/reader-tools/download-and-cite/) for how citations are generated.

## State persistence

The panel remembers whether it was open or closed across page navigations within the same session. Opening it on one article, then navigating to another, keeps it open. Closing the browser resets the state.

The active tab is also remembered per-session, so readers who primarily use the Highlights tab are not returned to the default tab on every article load.

## Customizing which tabs appear

The visible tabs are controlled in `src/_data/site.json`:

```json
"readerPanel": {
  "highlights": true,
  "bookmarks": true,
  "progress": true,
  "related": true,
  "citation": true
}
```

Set any tab to `false` to remove it from the panel for all readers. This affects every article and library page.

## What to do next

- [Highlights and notes](/docs/reader-tools/highlights-and-notes/) for the annotation system.
- [Notes page](/docs/reader-tools/notes-page/) for the publication-wide annotation dashboard.
- [Download and cite](/docs/reader-tools/download-and-cite/) for export and citation formatting.

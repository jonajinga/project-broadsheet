---
title: Reader panel
subtitle: A persistent side panel on article and library pages with tabs for highlights, bookmarks, reading progress, related articles, and citations.
order: 10
updated: 2026-04-24
---

The reader panel is a collapsible sidebar that appears alongside article and library content. It consolidates the most common reader actions — annotations, navigation, and discovery — in one place without leaving the article. Readers open it with the panel toggle button (the leftmost icon in the reader toolbar).

## Panel width

The panel is **746 px wide** on desktop, widened iteratively from 460 → 560 → 616 → 678 → 746 through reader feedback. At 746 px, annotation excerpts, related-article headlines, and citations each fit on a single line in most cases instead of four or five, and the tab strip holds its full set of labels without truncation. On narrow viewports it falls back to a slide-over at 90 vw.

```css
.library-panel {
  width: min(746px, 90vw);
}
```

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

Bookmark section detection resolves the nearest preceding `<h2>` / `<h3>` at save time rather than at render time, so labels stay accurate even when the reader scrolls away before saving — a prior bug where bookmarks were labelled with the section *visible when the panel opened* rather than the section *under the reader's current scroll position* was fixed by resolving on the click, not the open.

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

## Mobile sticky article header

Articles render a second "reading header" that docks to the top of the viewport once the reader scrolls past the article title. On desktop it shows the section name (as a left-aligned back link) and the article title (centred, ellipsis-truncated). On mobile, the title used to be hidden to save horizontal space — but the section back-link alone doesn't tell a reader *which* piece they're in when they've scrolled deep.

The current mobile behaviour shows the title and fluidly scales its font so both the back-link and the title fit on one line:

```css
@media (max-width: 640px) {
  /* Library chapter pages: keep the work-title hidden (back link suffices) */
  .library-reading-header__title { display: none; }

  /* Article pages: show the title and scale it down */
  .article-reading-header .library-reading-header__title {
    display: block;
    font-size: clamp(0.72rem, 3vw, var(--text-sm));
    flex: 1 1 auto;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .article-reading-header .library-reading-header__back {
    flex-shrink: 0;
    max-width: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
```

The two patterns differ deliberately. Library chapter pages have the work title in the back-link already, so showing a second title on mobile is duplicate ink. Article pages have `← News` as the back-link and need the article title to communicate context.

The `clamp(0.72rem, 3vw, var(--text-sm))` scales smoothly across the 320–640 px range: short titles stay at the site's UI text size, medium titles shrink slightly, long titles clip to `text-overflow: ellipsis`. Capping the back-link at `max-width: 40%` stops long section names from pushing the title off-screen.

## Mobile tab strip with scroll arrows

On narrow viewports the five-tab strip overflows horizontally. Instead of hiding labels or switching to an icon-only strip, the panel keeps full labels and adds left/right **chevron arrows** at the edges of the tab bar. The arrows appear only when there's off-screen content in that direction — tap an arrow to scroll the tab strip half a screen that way.

```js
function updateTabScrollArrows(strip, leftBtn, rightBtn) {
  leftBtn.hidden  = strip.scrollLeft <= 2;
  rightBtn.hidden = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2;
}
```

Rebound on every `scroll`, window `resize`, and `spa:contentswap`. Prevents the "tabs exist but you'd never know" problem on phones.

## SPA-nav migration

The reader panel lives in the page as a child of `#main-content`, but if it's open when the reader clicks an internal link, [SPA-nav](/docs/design/spa-navigation/) would wipe it out along with the rest of the article body. `reader-panel-migrate.js` intercepts `spa:beforeswap`, reparents the panel up to `document.body`, then on `spa:contentswap` reparents it back into the new article's slot. The panel's open state, active tab, and scroll position all survive the navigation.

## Focus trap

When the panel is open, Tab cycles focus within it (skipping over the article body). Shift+Tab wraps the other way. Escape closes the panel and returns focus to the toggle button that opened it. This matches the focus-trap pattern used by the display-settings panel and any other modal surface on the site.

## State persistence

The panel remembers whether it was open or closed across page navigations within the same session. Opening it on one article, then navigating to another, keeps it open. Closing the browser resets the state.

The active tab is also remembered per-session, so readers who primarily use the Highlights tab are not returned to the default tab on every article load.

## Customizing which tabs appear

The visible tabs are controlled by a `readerPanel` block in `src/_data/meta.js`:

```js
readerPanel: {
  highlights: true,
  bookmarks:  true,
  progress:   true,
  related:    true,
  citation:   true
},
```

Set any tab to `false` to remove it from the panel for all readers. This affects every article and library page.

## What to do next

- [Highlights and notes](/docs/reader-tools/highlights-and-notes/) for the annotation system.
- [Notes page](/docs/reader-tools/notes-page/) for the publication-wide annotation dashboard.
- [Download and cite](/docs/reader-tools/download-and-cite/) for export and citation formatting.
- [SPA navigation](/docs/design/spa-navigation/) for how the panel survives page transitions.

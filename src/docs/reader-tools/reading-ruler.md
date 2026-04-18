---
title: Reading ruler
subtitle: How the reading ruler works, how readers enable it, and how to customize its appearance in your publication's CSS.
order: 6
updated: 2026-04-18
---

The reading ruler is a horizontal line that follows the reader's cursor across article text, acting as a visual guide that makes it easier to track which line they are on. It is especially helpful for readers with dyslexia or visual tracking difficulties.

## How readers use it

The reading ruler is off by default. Readers turn it on from the reader toolbar at the top of any article:

1. Open the reader toolbar by clicking the toolbar toggle button.
2. Click the **Ruler** icon (a horizontal line symbol).
3. The ruler appears immediately and follows the cursor as the reader moves down the page.

The ruler preference is stored in `localStorage` — it persists across articles and page refreshes until the reader turns it off.

## How it works

The ruler is implemented in `src/assets/js/reader.js`. It listens for `mousemove` events on the article body and positions a fixed `<div>` at the cursor's Y coordinate. The ruler spans the full viewport width at a configurable height.

The ruler element is injected once when the page loads:

```html
<div class="reading-ruler" aria-hidden="true" hidden></div>
```

When enabled, the `hidden` attribute is removed and a `data-ruler="true"` attribute is added to `<body>` so CSS can respond:

```css
body[data-ruler="true"] { cursor: none; }
```

## Customizing the ruler

Ruler appearance is controlled in `src/assets/css/components/reader-tools.css`:

```css
.reading-ruler {
  position: fixed;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent);
  opacity: 0.5;
  pointer-events: none;
  z-index: 9000;
  transition: top 0.05s linear;
}
```

To change the ruler color, thickness, or opacity, edit those properties. To make the ruler a full-line highlight instead of a thin line:

```css
.reading-ruler {
  height: 1.6em;
  background: rgba(var(--accent-rgb), 0.15);
  opacity: 1;
}
```

## Accessibility

The ruler element has `aria-hidden="true"` so screen readers ignore it. Readers who navigate by keyboard or screen reader do not trigger the ruler because it relies on mouse position. The feature does not interfere with keyboard or touch navigation.

## What to do next

- [Reader tools overview](/docs/reader-tools/overview/) for the full list of built-in reader features.
- [Highlights and notes](/docs/reader-tools/highlights-and-notes/) for the selection-based annotation tool.
- [Customize design tokens](/docs/design/tokens/) for the `--accent` color variable used by the ruler.

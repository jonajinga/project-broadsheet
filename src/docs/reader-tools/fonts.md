---
title: Customize the font picker
subtitle: The reader-facing font picker ships with 27 choices. This page explains how to add, remove, or reorder fonts, and how to change the default.
order: 4
updated: 2026-04-17
---

Readers can pick their preferred body font from a dropdown in the reader tools panel. The list is defined in a single data file, which makes adding or removing fonts a one-line change. All fonts are lazy-loaded, so adding an option to the list doesn't slow down the site until a reader actually selects it.

## Where the font list lives

`src/_data/readerFonts.js`:

```js
export default [
  { id: "source-serif", label: "Source Serif 4", family: "'Source Serif 4', serif", stack: "serif" },
  { id: "lora", label: "Lora", family: "Lora, serif", stack: "serif" },
  { id: "playfair", label: "Playfair Display", family: "'Playfair Display', serif", stack: "serif" },
  { id: "atkinson", label: "Atkinson Hyperlegible", family: "'Atkinson Hyperlegible', sans-serif", stack: "sans" }
];
```

- `id` is the identifier stored in the reader's `localStorage`.
- `label` is what the reader sees.
- `family` is the full CSS `font-family` value applied to the article body.
- `stack` is either `serif` or `sans` so the picker can group choices.

## Add a font from Bunny Fonts

1. Pick a font at <https://fonts.bunny.net>.
2. Add its CSS import to the reader's lazy-loaded stylesheet (`src/assets/css/reader-fonts.css`). Use the `@import` exception here, not a build-time concatenation, because the reader-side loader is separate from the site's main CSS.
3. Add an entry to `readerFonts.js`.

## Change the default font

The default is whichever font the reader last chose, or — for first-time visitors — the first entry in `readerFonts.js`. To change the first-time default, reorder the array.

## High-legibility options

Some readers benefit from fonts specifically designed for dyslexia, low vision, or reading fatigue. Consider including:

- **Atkinson Hyperlegible** (free via Bunny): designed by the Braille Institute for legibility.
- **OpenDyslexic** (free): weighted bottoms that help with letter confusion.
- **Lexend** (free via Bunny): tuned for reading speed.

Including these doesn't force them on anyone; they're just options in the picker.

## What to do next

- [Reader tools overview](/docs/reader-tools/overview/) for the full feature list.
- [Fonts and typography](/docs/design/fonts/) for site-wide font choices (distinct from the reader picker).
- [Accessibility statement](/accessibility/) for the site's a11y profile.

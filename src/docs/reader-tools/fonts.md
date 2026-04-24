---
title: Customize the font picker
subtitle: The reader-facing font picker ships with nine web fonts plus the site default. This page explains how to add, remove, or reorder fonts, and how to change the default.
order: 4
updated: 2026-04-20
---

Readers can pick their preferred body font from the reader tools panel. The list is defined as a small map inside `src/assets/js/global-settings.js`, which makes adding or removing fonts a one-line change. All fonts are lazy-loaded from [Bunny Fonts](https://fonts.bunny.net), so adding an option to the list doesn't slow down the site until a reader actually selects it.

## Where the font list lives

`src/assets/js/global-settings.js`:

```js
// On-demand web font loading via Bunny Fonts
var webFonts = {
  inter:        'inter:wght@400;600;700',
  merriweather: 'merriweather:wght@400;700',
  roboto:       'roboto:wght@400;700',
  opensans:     'open-sans:wght@400;600;700',
  baskerville:  'libre-baskerville:wght@400;700',
  crimson:      'crimson-pro:wght@400;600;700',
  ibmplex:      'ibm-plex-serif:wght@400;600;700',
  literata:     'literata:wght@400;600;700',
  atkinson:     'atkinson-hyperlegible:wght@400;700'
};
```

- The object key (e.g. `atkinson`) is the identifier stored in the reader's `localStorage` under `{prefix}-gs-font`.
- The value is the Bunny Fonts `family` query string (slug + weight list).
- A matching `[data-gs-font="{key}"]` CSS rule in `tokens.css` applies the font to the document when a reader selects it.
- `default` is reserved and means "use the site's `--font-body`".

## Add a font from Bunny Fonts

1. Pick a font at <https://fonts.bunny.net>.
2. Add an entry to the `webFonts` map in `global-settings.js` with its Bunny slug and weight list.
3. Add a matching `html[data-gs-font="{key}"] body { font-family: "{Font Name}", serif; }` rule in `tokens.css`.
4. Expose it in the reader-panel font picker UI so readers can choose it.

## Change the default font

The default is whichever font the reader last chose, or, for first-time visitors, the site's `--font-body` token (Source Serif 4 by default). To change the first-time default, edit `--font-body` in `tokens.css` or swap the `<link>` in `base.njk` that preloads it.

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

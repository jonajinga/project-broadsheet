---
title: Display settings
subtitle: Typography, theme, line width, word spacing, background presets, paragraph numbering, auto-scroll, and the reading ruler — all consolidated into a single panel. Everything persists in localStorage.
order: 3
updated: 2026-04-23
---

The display-settings panel is accessible from every article and library page via the gear icon in the reader toolbar. It consolidates **every** reader-facing display control into one surface — typography, theme, reading aids, and the ruler — so readers do not have to hunt across multiple panels for a setting.

Earlier versions of Project Broadsheet shipped two separate panels: "Reading settings" (font size, spacing) and "Display settings" (theme, ruler). These were merged into a single panel because the split was invisible to readers — they just wanted "where do I change how this looks" in one place.

Every setting persists in `localStorage` under a publication-scoped key so preferences carry across articles and page refreshes. All settings default to on or sensible values — nothing needs to be enabled first.

## Mobile full-screen

On narrow viewports the panel expands to **full-screen** instead of sitting as a side-drawer. The reader gets the entire screen to adjust settings without the underlying article competing for attention or scroll intercepting their taps. On desktop it remains a side panel.

## Font picker

Ten choices: the system default plus nine web fonts from Bunny Fonts (Inter, Merriweather, Roboto, Open Sans, Libre Baskerville, Crimson Pro, IBM Plex Serif, Literata, Atkinson Hyperlegible). Each is lazy-loaded — the font file only downloads when a reader picks it. See [Customize the font picker](/docs/reader-tools/fonts/) for adding or removing choices.

```
localStorage key: {prefix}-gs-font
```

## Font size

An integer pixel override applied to the document root. The default is `0`, meaning "use the publication's base font size" (no override). Values between 14 and 24 work well in practice. Changing font size scales article body text; headings, captions, and UI elements remain at their defined sizes because they use relative units.

```
localStorage key: {prefix}-gs-font-size
Default: 0 (inherit)
```

## Line spacing

Three presets that override the `--leading-normal` CSS token on the article body:

| Option | Value |
|---|---|
| Tight | 1.3 |
| Normal | inherit (default) |
| Relaxed | 1.8 |

When non-default values are chosen, `--leading-relaxed` and `--leading-loose` are scaled proportionally so the whole leading system stays in sync.

```
localStorage key: {prefix}-gs-spacing
```

## Word spacing

Extra space between words, helpful for readers with dyslexia tracking across a line:

| Option | Value |
|---|---|
| Normal | 0 (default) |
| Wide | 0.12em |
| Extra wide | 0.25em |

```
localStorage key: {prefix}-gs-wordspace
```

## Theme and background presets

Light and dark mode (driven by `--paper` / `--ink` tokens — see [Design tokens](/docs/design/tokens/)). Additional presets (sepia, cream, high contrast) can be declared as `[data-gs-bg="{key}"]` overrides in `tokens.css` and exposed here.

```
localStorage key: {prefix}-gs-bg
```

## Paragraph numbering

Toggles a numbered label at the start of each paragraph in the article body. Useful for referencing specific passages in discussion, citations, or annotations. Numbers appear in a muted color outside the text margin and do not affect copy-paste.

```
localStorage key: {prefix}-rs-para-nums
Default: on
```

## Auto-scroll

Automatically scrolls the article at a steady pace so readers can follow along hands-free.

- Speed control: 1 (slowest) to 10 (fastest)
- **Any user scroll or click pauses auto-scroll immediately.** Earlier versions fought the reader when they tried to scroll past a slow auto-advance; now manual input always wins. The scroller listens for `wheel`, `touchmove`, and `keydown` (arrow keys, Page Up/Down, Space) and cancels the animation on any of them.
- Reaching the end of the article stops it automatically.

```
localStorage key: {prefix}-rs-autoscroll-speed
Default: 3
```

## Reading ruler

A horizontal line that follows the cursor across article text, acting as a visual guide for readers who track line-to-line with difficulty. See [Reading ruler](/docs/reader-tools/reading-ruler/) for the full spec.

Key behavior worth flagging here: the ruler **auto-disables** when the reader scrolls with the keyboard or touch, because a mouse-follower ruler is meaningless when the cursor isn't moving. It re-enables on the next `mousemove`. This avoids the "ghost ruler stuck at top of viewport" bug that an always-on ruler produces during scroll-reading.

```
localStorage key: {prefix}-rs-ruler
Default: off
```

## Focus mode

Dims the entire interface except the article body for distraction-free reading. Toggled from the panel; bound to a keyboard shortcut (`F`) as well.

## Reset to defaults

The "Reset" button clears all display settings from `localStorage` and restores the publication's configured defaults. It does not affect highlights, notes, bookmarks, or reading-list saves.

## Closing the panel

The panel closes via:
- Its own close (X) button
- Clicking outside the panel
- Escape key
- Submitting any action that implies it

A **200 ms grace period** after opening prevents the browser's own focus-shift event (triggered by the button that opened the panel) from closing it immediately. Early versions had a race condition where the panel opened and closed in the same tick.

## Focus trap

Tab cycles within the panel; Shift+Tab wraps the other way; Escape returns focus to the opener. Same pattern as the reader panel.

## What to do next

- [Reading ruler](/docs/reader-tools/reading-ruler/) for the cursor guide's internals.
- [Customize the font picker](/docs/reader-tools/fonts/) to add or remove font choices.
- [Reader panel](/docs/reader-tools/reader-panel/) for the annotations / bookmarks / citations sidebar.

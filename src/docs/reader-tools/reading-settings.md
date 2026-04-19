---
title: Reading settings
subtitle: Font size, line spacing, text width, word spacing, background presets, paragraph numbering, and auto-scroll. All reader settings are on by default and persist in localStorage.
order: 3
updated: 2026-04-18
---

The reading settings panel is accessible from every article and library page via the settings icon in the reader toolbar. It gives readers direct control over typography, layout, and reading aids. Every setting persists in `localStorage` under a publication-scoped key so preferences carry across articles and page refreshes.

All settings are on by default at their standard values. Readers adjust them to suit their needs — nothing needs to be enabled first.

## Font size

A continuous slider from 14px to 24px. The default is the publication's base font size (typically 18px for a reading-optimized publication).

Changing font size scales the article body text. Headings, captions, and UI elements remain at their defined sizes.

```
localStorage key: {prefix}-rs-font-size
Range: 14–24 (integer, maps to px)
Default: 18
```

## Line spacing

Four preset options that set `line-height` on the article body:

| Option | Value |
|---|---|
| Tight | 1.4 |
| Normal | 1.7 (default) |
| Relaxed | 2.0 |
| Loose | 2.4 |

```
localStorage key: {prefix}-rs-line-spacing
```

## Text width

Controls the `max-width` of the article prose column:

| Option | Max width |
|---|---|
| Narrow | 34rem |
| Normal | 44rem (default) |
| Wide | 58rem |

Narrow is useful on large monitors where a wide column feels uncomfortable. Wide is useful when reading data-heavy content like tables.

```
localStorage key: {prefix}-rs-text-width
```

## Word spacing

Adds extra space between words, which can help readers with dyslexia track across a line:

| Option | Value |
|---|---|
| Normal | 0 (default) |
| Wide | 0.05em |
| Wider | 0.12em |

```
localStorage key: {prefix}-rs-word-spacing
```

## Background presets

Changes the background and text color of the article body. Options:

| Preset | Background | Text | Notes |
|---|---|---|---|
| Default | `var(--paper)` | `var(--ink)` | Publication's standard theme |
| Sepia | `#F5EDD9` | `#3B2F1E` | Warm, print-like tone |
| Cream | `#FDFAF4` | `#2A2218` | Slightly lighter warm tone |
| Dark | `#1A1815` | `#E8E3D6` | High contrast inverted |
| High contrast | `#000000` | `#FFFFFF` | Maximum contrast |

Background presets apply only to the article reading area, not to the page chrome.

```
localStorage key: {prefix}-rs-bg-preset
```

## Paragraph numbering

Toggles a numbered label at the start of each paragraph in the article body. Useful for referencing specific passages in discussion, citations, or annotations.

Numbers appear in a muted color outside the text margin and do not affect copy-paste behavior.

```
localStorage key: {prefix}-rs-para-nums
Default: on (numbers visible)
```

## Auto-scroll

Automatically scrolls the article at a steady pace so readers can follow along hands-free.

- Speed control: 1 (slowest) to 10 (fastest)
- Clicking anywhere in the article pauses auto-scroll
- Reaching the end of the article stops it automatically

Auto-scroll is designed for use alongside text-to-speech or for accessibility users who cannot scroll manually.

```
localStorage key: {prefix}-rs-autoscroll-speed
Default: 3
```

## Reset to defaults

The "Reset" button in the settings panel clears all reading settings from `localStorage` and restores the publication's configured defaults. It does not affect highlights, notes, bookmarks, or reading list saves.

## What to do next

- [Text-to-speech](/docs/reader-tools/text-to-speech/) works well alongside auto-scroll for hands-free reading.
- [Reading ruler](/docs/reader-tools/reading-ruler/) for the cursor-following line guide.
- [Highlights and notes](/docs/reader-tools/highlights-and-notes/) for the annotation system.

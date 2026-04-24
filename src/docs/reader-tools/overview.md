---
title: Reader tools overview
subtitle: A summary of the reader-experience features that ship with Project Broadsheet by default. These are the tools that accompany every article without configuration.
order: 1
updated: 2026-04-20
---

Project Broadsheet ships with a suite of reader-experience tools that most publishing platforms either charge extra for or do not offer at all. The tools are accessible from the reader panel, open by clicking the gear icon in the article toolbar. Every preference a reader sets persists in the browser's `localStorage`, so returning readers see the same customizations they last chose. No accounts or sign-ins are involved.

## Display controls

- **Font picker.** The system default plus nine web fonts from <span class="g-term" data-term="Bunny Fonts">Bunny Fonts</span> (Inter, Merriweather, Roboto, Open Sans, Libre Baskerville, Crimson Pro, IBM Plex Serif, Literata, Atkinson Hyperlegible), each loaded lazily and only when a reader selects it.
- **Font size.** A pixel override from the site default, adjustable in small steps.
- **Line spacing.** Three options: tight, normal, relaxed.
- **Word spacing.** Three options: normal, wide, extra wide.
- **Theme.** Light and <span class="g-term" data-term="dark mode">dark mode</span> (plus additional background presets configurable through design tokens).
- **Reading ruler.** A horizontal guide line that follows the cursor or keyboard focus, with adjustable thickness, color, and style, to help with line tracking.

## Annotations

- **Highlights.** Six colors, persisted per device.
- **Notes.** Rich text attached to any highlight, edited in place.
- **Reading list.** Save articles for later reading, stored locally, so the list never syncs across devices or requires a sign-in.

## Focus mode

- **Focus mode** dims the entire interface except the article body, so long-form pieces read without distraction.

## Portability

- **Import / export** of every reader preference, highlight, note, and reading-list entry as a single JSON file.
- Because data lives in `localStorage`, the reader owns it. No accounts, no sync servers, no privacy trade-offs.

## What to do next

- [Customize the font picker](/docs/reader-tools/fonts/) to add, remove, or reorder choices.
- [Highlights and notes](/docs/reader-tools/highlights-and-notes/) for the annotation system.
- [Reading ruler](/docs/reader-tools/reading-ruler/) for the cursor-following guide.

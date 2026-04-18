---
title: Reader tools overview
subtitle: A summary of the reader-experience features that ship with Project Broadsheet by default. These are the tools that accompany every article without configuration.
order: 1
updated: 2026-04-17
---

Project Broadsheet ships with a suite of reader-experience tools that most publishing platforms either charge extra for or do not offer at all. The tools are accessible from the reader panel, open by clicking the gear icon in the article toolbar. Every preference a reader sets persists in the browser's `localStorage`, so returning readers see the same customizations they last chose. No accounts or sign-ins are involved.

## Display controls

- **Font picker.** Twenty-seven choices, including system fonts (fastest) and web fonts from <span class="g-term" data-term="Bunny Fonts">Bunny Fonts</span> (loaded lazily, only when selected).
- **Font size.** Four steps: small, medium, large, extra-large.
- **Line spacing.** Three options: tight, normal, relaxed.
- **Theme.** Light, sepia, cream, and <span class="g-term" data-term="dark mode">dark mode</span>.
- **Reading ruler.** A horizontal guide line that follows the cursor or keyboard focus, with adjustable thickness, color, and style, to help with line tracking.

## Text-to-speech

- Powered by the browser's native Web Speech API, no server-side audio, no data leaves the device.
- Word-level highlight synchronized with playback, so the reader always knows which word is being spoken.
- Playback speed from 0.5× to 2.0×.
- Works in recent versions of Chrome and Edge.

## Annotations

- **Highlights.** Six colors, persisted per device.
- **Notes.** Rich text attached to any highlight, edited in place.
- **Reading list.** Save articles for later reading, stored locally, so the list never syncs across devices or requires a sign-in.

## Focus and productivity

- **Focus mode** dims the entire interface except the article body.
- **Voice search** lets the reader speak a query into the site-wide search bar.
- **Form dictation** fills any form field from the reader's voice.

## Portability

- **Import / export** of every reader preference, highlight, note, and reading-list entry as a single JSON file.
- Because data lives in `localStorage`, the reader owns it. No accounts, no sync servers, no privacy trade-offs.

## What to do next

- [Enable text-to-speech](/docs/reader-tools/text-to-speech/) and adjust the default voice.
- [Customize the font picker](/docs/reader-tools/fonts/) to add, remove, or reorder choices.

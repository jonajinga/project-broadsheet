---
title: Highlights and notes
subtitle: Six-color highlighting plus rich-text notes, stored locally in the reader's browser. No accounts, no sync servers, no data leaves the device.
order: 3
updated: 2026-04-17
---

Readers can highlight any passage in an article in one of six colors and attach a personal note to the highlight. The data lives entirely in the reader's browser via `localStorage`, so there's no sign-in, no sync service, and no privacy trade-off.

## How to highlight

1. Select text with the cursor or tap-hold on mobile.
2. A small popover appears with six color swatches and a "note" icon.
3. Click a swatch to highlight; click the note icon to add a note.

## How notes work

Notes use a minimal rich-text editor supporting bold, italic, lists, and links. Each note is attached to a specific highlight and appears as a tooltip when the reader hovers the highlighted text, or as a full card in the reader's Notes panel.

## The Notes panel

Open the reader panel and select "Notes." The panel lists every highlight and note the reader has made, grouped by article. From here they can:

- Navigate to the source paragraph.
- Edit or delete a highlight or note.
- Change a highlight's color.
- Export all notes as a single JSON file.

## Export and import

All reader data (highlights, notes, preferences, reading list) can be exported from the Notes panel as a JSON file. A second reader can import that file on a different device to carry their data over. It's the only sync mechanism Project Broadsheet provides, and it's manual by design.

## Where the data is stored

`localStorage` under the key `pb-reader-data`. The structure is documented in `src/assets/js/reader.js`. Clearing browser site data removes the highlights and notes, which is why the export option exists.

## What to do next

- [Reader tools overview](/docs/reader-tools/overview/) for the full feature list.
- [Text-to-speech](/docs/reader-tools/text-to-speech/) for audio playback.
- [Reading list](/docs/reader-tools/reading-list/) for save-for-later.

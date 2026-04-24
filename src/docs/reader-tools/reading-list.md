---
title: Reading list
subtitle: Readers can save any article for later with a single click. The list persists locally in the browser, with no account, no sync server, and no data leaving the device.
order: 5
updated: 2026-04-17
---

The reading list is one of the simpler reader tools in Project Broadsheet but quietly one of the most used. A small bookmark icon appears at the top of every article; clicking it toggles whether the article is saved. The full list lives in the reader panel.

## How readers use it

- **Save**. Click the bookmark icon in the article toolbar. The icon fills in.
- **Unsave**. Click again. The icon empties.
- **View list**. Open the reader panel, click "Reading list." Saved articles appear with title, excerpt, byline, date, and estimated reading time.
- **Remove from list**. Click the X next to any entry in the panel.
- **Clear all**. Bottom of the panel.

## Where the data lives

`localStorage` under the key `{prefix}-reading-list` (the `{prefix}` defaults to `pb` and is set via `window.__PREFIX`). The structure is a JSON array of objects, each with `url`, `title`, `section`, `date`, and an estimated reading time. The logic lives in `src/assets/js/reading-list.js`. Clearing site data removes the list, which is why the export option in the Notes panel exists.

## Sync across devices

Project Broadsheet deliberately doesn't sync. There's no cloud service, no account, no third-party dependency for reading-list data. To move the list to a different device, use the export/import feature in the Notes panel, which writes a portable JSON file.

## What to do next

- [Reader tools overview](/docs/reader-tools/overview/) for the full feature list.
- [Highlights and notes](/docs/reader-tools/highlights-and-notes/) for the annotation system.
- [Customize the font picker](/docs/reader-tools/fonts/) for the font choices.

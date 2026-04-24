---
title: Library
subtitle: Project Broadsheet's public-domain library. Host full-length works organized by chapter, with reader progress tracking, annotations, a floating table of contents, and chapter-by-chapter navigation.
order: 2
updated: 2026-04-20
---

The library is a dedicated content type for long-form works: public-domain books, serialized essays, and lengthy reports. It gives each work its own landing page, individual chapter pages, a floating table of contents, reading-progress persistence, per-chapter annotations, and chapter-to-chapter navigation that preserves the reader's place.

## Folder layout

Each work lives in its own folder under `src/library/works/{work-slug}/`. The folder holds:

- `{work-slug}.json` — work metadata (JSON data file picked up via Eleventy directory-data).
- `index.md` (optional) — the work's landing page content.
- One Markdown file per chapter (e.g. `chapter-01.md`, `introduction.md`, or `section-01.md`).

The chapter listing, subject pages, and author pages are all built from collections wired up in `.eleventy.js` — `libraryChapters`, `libraryByWork`, `libraryWorks`, and `libraryFeatured`.

## Define a work

Drop a JSON file alongside the chapters with the work's metadata. Example, `src/library/works/on-liberty/on-liberty.json`:

```json
{
  "workSlug": "on-liberty",
  "workTitle": "On Liberty",
  "author": "John Stuart Mill",
  "authorSlug": "john-stuart-mill",
  "authorDates": "1806–1873",
  "originalPublication": 1859,
  "originalLanguage": "English",
  "translator": null,
  "edition": "First edition, 1859",
  "source": "Project Gutenberg",
  "sourceUrl": "https://www.gutenberg.org/ebooks/34901",
  "type": "treatise",
  "subjects": ["Philosophy", "Politics", "Free Expression", "Ethics"],
  "difficulty": "Intermediate",
  "era": "19th Century",
  "shortWork": false
}
```

These fields flow into every chapter in the folder as shared front-matter context (that is what Eleventy directory data does), so individual chapter files stay short.

## Add chapters

Chapters are Markdown files at `src/library/works/{work-slug}/chapter-{nn}.md`:

```yaml
---
workSlug: on-liberty
chapterNumber: 2
title: "Of the Liberty of Thought and Discussion"
---

Chapter body in Markdown.
```

| Field | Required | Notes |
|---|---|---|
| `workSlug` | Yes | Matches the `workSlug` in the folder's JSON |
| `chapterNumber` | Yes | Integer used for ordering |
| `title` | Yes | Chapter title |
| `featured` | No | Promotes this chapter into the `libraryFeatured` collection |
| `parentWorkSlug` | No | Used when a work is a sub-part of a larger collection (e.g. a lecture inside a lecture series) |

The chapter template automatically adds prev/next navigation, a reading progress bar, footnote collection into the reader panel, highlights, bookmarks, and saves the reader's scroll position between visits.

## Reader features on library pages

- **Floating table of contents.** Jumps between chapters.
- **Reading progress bar.** Persists per chapter in `localStorage`.
- **Annotations.** Highlights, notes, and bookmarks per chapter, stored locally.
- **"Continue reading" button.** On the work's landing page, jumps to the last chapter the reader opened.
- **Print CSS.** Readers can print any chapter or the complete work.

## Work landing page

Each work automatically gets a landing page at `/library/{work-slug}/` with:

- The work's metadata (author, year, subjects, difficulty).
- A full chapter list.
- Total reading time and percent completed for the current reader.
- Related works by subject or author.

## What to do next

- [Editions](/docs/specialty-content/editions/) for numbered issues that group shorter articles.
- [Reviews](/docs/specialty-content/reviews/) for book, film, and podcast reviews.
- [Custom layouts](/docs/customization/custom-layouts/) if you want a different chapter template.

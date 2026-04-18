---
title: Library
subtitle: Project Broadsheet's public-domain library. Host full-length works organized by chapter, with reader progress tracking, a floating table of contents, and chapter-by-chapter navigation.
order: 2
updated: 2026-04-17
---

The library is a dedicated content type for long-form works — public-domain books, serialized essays, lengthy reports. It gives each work its own index page, individual chapter pages, a floating table of contents, reading-progress persistence, and chapter-to-chapter navigation that preserves the reader's place.

## Define a work

Works are defined in `src/_data/library.js`:

```js
export default [
  {
    slug: "great-expectations",
    title: "Great Expectations",
    creator: "Charles Dickens",
    year: 1861,
    description: "The coming-of-age of Philip 'Pip' Pirrip.",
    cover_image: "/assets/img/library/great-expectations.jpg",
    total_chapters: 59,
    estimated_hours: 14
  }
];
```

## Add chapters

Chapters are Markdown files at `src/content/library/{work-slug}/chapter-{n}.md`:

```yaml
---
layout: layouts/library-chapter.njk
work: great-expectations
chapter: 1
chapter_title: "My father's family name being Pirrip..."
---

Chapter body in Markdown.
```

The chapter template automatically adds prev/next navigation, a reading progress bar, and saves the reader's scroll position between visits.

## Reader features on library pages

- **Floating table of contents.** Jumps between chapters.
- **Reading progress bar.** Persists in `localStorage`.
- **"Continue reading" button.** On the work's index page, jumps to the last chapter the reader opened.
- **Print CSS.** Readers can print any chapter or the complete work.

## Work index page

Each work automatically gets an index page at `/library/{work-slug}/` with:

- The cover image and metadata.
- A full chapter list.
- Total reading time and percent completed for the current reader.

## What to do next

- [Editions](/docs/specialty-content/editions/) for numbered issues that group shorter articles.
- [Reviews](/docs/specialty-content/reviews/) for book, film, and podcast reviews.
- [Custom layouts](/docs/customization/custom-layouts/) if you want a different chapter template.

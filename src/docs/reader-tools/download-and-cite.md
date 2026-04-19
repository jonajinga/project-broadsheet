---
title: Download and cite
subtitle: Readers can export any article as plain text or Markdown, and generate a formatted citation in APA 7, MLA 9, or Chicago 17. Both features run entirely client-side.
order: 8
updated: 2026-04-18
---

The download and cite features live in the reader toolbar on every article. No server is involved — the export and citation are generated in the browser from the article's metadata and body content.

## Download

Readers click the download icon in the article toolbar and choose a format:

- **Plain text (.txt)** — the article body stripped of all HTML, with title and byline at the top
- **Markdown (.md)** — the article body as Markdown, with front matter (title, author, date, url) included

The file downloads immediately to the reader's device. It contains the article as it appeared at the time of export — not a live link to the source.

### What the download includes

Both formats include:

- Title
- Author name
- Publication name
- Publication date
- Canonical URL
- Article body (formatted appropriately for the chosen format)

HTML elements that do not translate to plain text (embedded media, interactive elements) are omitted from the export.

### Front matter in the exported data

The download feature reads from the article element's data attributes, which are populated at build time from the article's front matter:

```html
<article
  data-title="Article title"
  data-author="Jon Ajinga"
  data-date="2026-04-18"
  data-url="https://example.com/news/article-slug/"
  ...>
```

These are set automatically. No additional front matter is needed to enable downloads.

## Citation formatter

The cite icon opens a modal with a formatted citation in three styles. Readers copy the citation with one click.

### Supported formats

**APA 7:**
```
Ajinga, J. (2026, April 18). Article title. Publication Name. https://example.com/news/article-slug/
```

**MLA 9:**
```
Ajinga, Jon. "Article title." Publication Name, 18 Apr. 2026, example.com/news/article-slug/.
```

**Chicago 17 (Notes and Bibliography):**
```
Ajinga, Jon. "Article title." Publication Name, April 18, 2026. https://example.com/news/article-slug/.
```

### Front matter that feeds citations

Citations are generated from the article's front matter at build time. Ensure these fields are present for accurate citations:

```yaml
title: The article title
author: jon-ajinga        # must match a slug in authors.js
date: 2026-04-18
```

The author's full name is resolved from `authors.js` using the `author` slug. The publication name comes from `meta.js`. The canonical URL is constructed from the production `url` in `meta.js` and the article's `permalink`.

## What to do next

- [Writing articles](/docs/content/write-an-article/) for the full front matter field reference.
- [Authors](/docs/content/authors/) to ensure author names resolve correctly in citations.
- [Reader panel](/docs/reader-tools/reader-panel/) for the Citation tab built into the side panel.

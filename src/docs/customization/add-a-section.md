---
title: Add a new editorial section
subtitle: Editorial sections are defined in a single data file. Adding one is a three-step process that takes less than five minutes and requires no template changes.
order: 1
updated: 2026-04-17
---

Project Broadsheet ships with nine <span class="g-term" data-term="editorial section">editorial sections</span> by default: News, Opinion, Analysis, Arts & Culture, Science & Tech, History, Letters, Reviews, and Editions. You can add, remove, or rename sections without editing any templates, the entire site regenerates from a single data file.

## Step 1. Define the section

Open `src/_data/sections.js` and append a new object to the exported array:

```js
{
  slug: "science",
  label: "Science",
  color: "#2C5F8A",
  description: "Rigorous, accessible science writing."
}
```

The `slug` is the URL segment (e.g. `/science/`). The `label` is the human-readable name that appears in navigation. The `color` is the accent used for section headlines and breadcrumbs. The `description` feeds into the section's meta description and RSS feed subtitle.

## Step 2. Create the content folder

```bash
mkdir src/content/science
```

Project Broadsheet reads articles from `src/content/{slug}/`. Without the matching folder, the section index page has nothing to show.

## Step 3. Write an article

Create `src/content/science/first-article.md` with standard <span class="g-term" data-term="front matter">front matter</span>:

```yaml
---
title: My first science article
section: science
date: 2026-04-17
---
```

Everything below the closing `---` is the article body, written in <span class="g-term" data-term="Markdown">Markdown</span>.

## What Project Broadsheet generates automatically

- An index page at `/science/` with pagination across articles.
- An <span class="g-term" data-term="RSS">RSS</span> feed at `/science/feed.xml`.
- The section's accent color applied to headlines, breadcrumbs, and section badges.
- Inclusion in on-site search, the XML <span class="g-term" data-term="sitemap">sitemap</span>, and the homepage (where applicable).

## What to do next

- [Add author pages](/docs/content/authors/) so contributor bylines resolve to bio pages.
- [Customize the section layout](/docs/customization/custom-section-layouts/) if you want a section to look different from the others.

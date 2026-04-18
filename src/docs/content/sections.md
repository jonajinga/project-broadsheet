---
title: Editorial sections
subtitle: How Project Broadsheet organizes articles by top-level category, how each section gets its own index, RSS feed, and accent color, and how to customize or add new sections.
order: 4
updated: 2026-04-17
---

An <span class="g-term" data-term="editorial section">editorial section</span> is the highest level of organization in Project Broadsheet. News, Opinion, Reviews - each is a section. Every article belongs to exactly one. Each section gets:

- A top-level URL (`/news/`, `/opinion/`, etc.) with a paginated article index.
- Its own <span class="g-term" data-term="RSS">RSS</span> feed at `/{section}/feed.xml`.
- An accent color applied to section badges, breadcrumbs, and dividers.
- A dedicated entry in site navigation.

## The nine default sections

Project Broadsheet ships with these sections defined in `site.json`:

1. **News** - breaking, reporting, factual
2. **Opinion** - editorials and commentary
3. **Analysis** - deeper reads
4. **Arts & Culture** - criticism, features
5. **Science & Tech** - research, products
6. **History** - long-form historical pieces
7. **Letters** - reader correspondence
8. **Reviews** - books, films, podcasts, documentaries
9. **Editions** - numbered issues that group articles

You can delete, rename, or reorder any of them.

## Section configuration

Open `src/_data/site.json`:

```json
"sections": [
  {
    "slug": "news",
    "label": "News",
    "description": "Reporting on stories that matter.",
    "color": "#C0392B",
    "showOnHomepage": true
  }
]
```

- `slug` is the URL segment and the folder name under `src/content/`.
- `label` is what readers see in navigation.
- `description` feeds the section index meta description and the RSS feed subtitle.
- `color` is the accent used for section headlines and dividers.
- `showOnHomepage` controls whether the section appears in the homepage feed.

## Add a new section

See [Add a new editorial section](/docs/customization/add-a-section/) for the step-by-step walkthrough. It takes three files: one data entry, one folder, one Markdown file.

## Per-section RSS feeds

Every section automatically gets an RSS feed at `/{slug}/feed.xml`. Readers can subscribe to just the sections they care about rather than the whole publication. The feeds are generated from the same Eleventy collection that powers the section index page.

## Assigning an article to a section

In the article's front matter:

```yaml
section: news
```

The value must match a section `slug` from `site.json`. The article's file path should also live under `src/content/{slug}/` so Project Broadsheet can find it by collection.

## What to do next

- [Add a new section](/docs/customization/add-a-section/) for a topic that isn't in the defaults.
- [Customize the section layout](/docs/customization/custom-layouts/) to make one section look different.
- [Configure per-section colors](/docs/design/colors/).

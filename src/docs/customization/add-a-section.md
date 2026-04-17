---
title: Add a new editorial section
subtitle: Sections are defined in site.json. Adding one is a three-step process.
order: 1
updated: 2026-04-17
---

Project Broadsheet ships with nine editorial sections: News, Opinion, Analysis, Arts & Culture, Science & Tech, History, Letters, Reviews, and Editions. Adding a tenth takes about five minutes.

## Define the section

In `src/_data/site.json`, append to the `sections` array:

```json
{
  "slug": "science",
  "label": "Science",
  "color": "#2C5F8A",
  "description": "Rigorous, accessible science writing."
}
```

## Create the folder

```bash
mkdir src/content/science
```

## Write an article

Add `src/content/science/first-article.md` with appropriate front matter:

```yaml
---
title: My first science article
section: science
date: 2026-04-17
---
```

## What you get automatically

- `/science/` index page with pagination
- `/science/feed.xml` RSS feed
- Section accent color applied to headlines and breadcrumbs
- Inclusion in search, sitemap, and the homepage

## What's next

- [Add author pages](/docs/content/authors/) for contributor bios.
- [Customize the section layout](/docs/customization/custom-section-layouts/).

---
title: Custom section layouts
subtitle: Override the default section-index and article templates for a single section, so one section can look and behave differently from the others.
order: 4
updated: 2026-04-17
---

Sometimes one editorial section should look different from the rest. Reviews might want a ratings grid. Editions might want a magazine-style cover. Events might want a calendar view. Project Broadsheet supports per-section layout overrides via directory data files, so you can change one section without forking the shared templates.

## Create a custom layout

Copy the default article layout to a new file:

```bash
cp src/_includes/layouts/article.njk src/_includes/layouts/review-article.njk
```

Edit the new file to do whatever you want. Change the byline, add a ratings widget, reorder elements.

## Assign the layout to a section

Create a directory data file at `src/content/reviews/reviews.json`:

```json
{
  "layout": "layouts/review-article.njk"
}
```

Every article in `src/content/reviews/` now uses the new layout unless it overrides it in its own front matter. Articles in other sections are unaffected.

## Override the section index

The section index page (the paginated list at `/reviews/`) is generated from a template at `src/content/reviews/reviews-index.njk` (or similar). To customize its layout:

1. Open the section's index template.
2. Change the `layout` front matter or the markup inside.
3. Rebuild.

## What to do next

- [Custom layouts](/docs/customization/custom-layouts/) for the general layout system.
- [Add a new section](/docs/customization/add-a-section/) to create a new section from scratch.
- [Template filters](/docs/customization/filters/) for reusable helpers.

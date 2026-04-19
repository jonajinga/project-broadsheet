---
title: Layout reference
subtitle: Every page layout option in Project Broadsheet, when to use each one, and how to activate them in front matter.
order: 7
updated: 2026-04-18
---

Project Broadsheet ships with four page layout templates. Each controls the width, centering, and sidebar behavior of the page's content area. You select a layout in the page's <span class="g-term" data-term="front matter">front matter</span>.

## Available layouts

### `layouts/base.njk`

The full-width base layout. No content container, no page header — just the site header, a main content area that spans the full container, and the site footer. Used for the homepage, section indexes, and any page that needs complete layout control.

```yaml
---
layout: layouts/base.njk
---
```

### `layouts/page.njk`

The standard content page layout. Renders a page header (eyebrow label, title, and subtitle), followed by a centered content area. This is the default for marketing pages, docs landing pages, and any standalone content page.

```yaml
---
layout: layouts/page.njk
title: About This Project
eyebrow: About
subtitle: A one-sentence description shown beneath the title.
---
```

**Modifiers (add to front matter):**

- `narrow: true` — constrains the content area to ~36rem, suitable for form pages and text-heavy pages where long lines hurt readability.
- `centered: true` — centers all text in the page header. Often paired with `narrow: true` for confirmation and landing pages.

```yaml
---
layout: layouts/page.njk
narrow: true
centered: true
---
```

### `layouts/doc.njk`

The documentation layout. Adds a left sidebar with category navigation, a right sidebar with an on-page table of contents (generated from headings), and a breadcrumb trail at the top. Content area is constrained to a readable line length.

```yaml
---
layout: layouts/doc.njk
title: Install Project Broadsheet
subtitle: Short description of the doc.
order: 1
updated: 2026-04-17
---
```

The `order` field controls the doc's position within its category sidebar. The `updated` field appears as "Last updated" at the bottom of the page.

### `layouts/post.njk`

The article layout. Used for all editorial content — news, opinion, analysis, reviews, and so on. Renders the article header (section badge, headline, byline, metadata), article body in a constrained reading column, and the reader panel with all reader tools.

Articles don't specify this layout directly; the content folder's directory data file sets it automatically. You should not need to reference this layout in individual article front matter.

## Page header fields

The following front matter fields apply to `page.njk` and `doc.njk`:

| Field | Purpose |
|---|---|
| `title` | The `<h1>` of the page and the `<title>` tag |
| `eyebrow` | Small label above the title (e.g., "Resources", "Education") |
| `subtitle` | Subheading beneath the title, used in meta description if `description` is absent |
| `description` | Explicit SEO meta description (overrides `subtitle`) |
| `narrow` | `true` constrains content to ~36rem |
| `centered` | `true` centers the page header text |

## What to do next

- [CSS overrides](/docs/customization/css-overrides/) — adjusting layout widths and container sizes.
- [Custom layouts](/docs/customization/custom-layouts/) — creating a new layout template from scratch.
- [Design tokens](/docs/design/tokens/) — spacing and width tokens that control layout sizing.

---
title: Archive views — showcase and timeline
subtitle: Two URL-parameter-driven pages that re-surface your archive any way a reader wants it. One pair of templates serves the whole archive, per-author, per-section, per-subsection, per-topic, per-year, or per-month, filtered via query strings.
order: 16
updated: 2026-04-23
---

Your archive is usually your most under-used asset. Project Broadsheet ships two standalone views — **Showcase** and **Timeline** — that can be filtered by any combination of author, section, subsection, topic, year, and month. Buttons on the Archives page, section indexes, author pages, and topic pages all link into the same two URLs with the right filter pre-applied.

## The two views

### `/archives/showcase/`

A fullscreen slideshow. One article per slide: kicker (section › subsection), title, short description, byline, date, and a **Read article** CTA. Auto-advances every 10 seconds with a linear progress bar. Keyboard navigation (← → / space / Enter / Esc / p for pause) and click-anywhere-to-advance on mouse. Shuffled order.

The slideshow is a `position: fixed` overlay that reparents itself out of the site-wrapper on init and re-attaches on `pagehide`, so browser Back doesn't restore a half-broken document from bfcache.

### `/archives/timeline/`

A vertical chronological list. Grouped by year (with counts) and month. Each entry shows date, section kicker, title, and byline. A filter bar at top with dropdowns for author, section, subsection (dependent on section), topic, and year rewrites the URL live as selections change.

## Filter parameters

Both views accept the same URL parameters:

| Param | Example | Scope |
|---|---|---|
| `?author=<slug>` | `?author=jon-ajinga` | Just that author's articles |
| `?section=<slug>` | `?section=news` | Whole section |
| `?subsection=<slug>` | `?section=news&subsection=politics` | Subsection within a section |
| `?topic=<slug>` | `?topic=climate` | Tag / topic |
| `?year=<YYYY>` | `?year=2026` | Year |
| `?month=<1-12>` | `?year=2026&month=4` | Month within a year |

Parameters stack. `?author=jon-ajinga&section=news&year=2026` means "everything Jon Ajinga wrote in the News section during 2026." The timeline's filter bar reflects the current URL state and rewrites it as the reader changes dropdowns.

## The buttons partial

Drop the `archive-views-buttons.njk` partial anywhere to render a pair of Showcase / Timeline CTAs targeting the unified pages:

```njk
{% raw %}{% set viewFilter = "author=" + authorSlug %}
{% include "partials/archive-views-buttons.njk" %}{% endraw %}
```

`viewFilter` is a pre-built query-string fragment. Leave it blank for the unfiltered full archive.

Project Broadsheet includes these buttons out of the box on:

- **Archives page** — unfiltered (browse everything)
- **Author page** — next to the social icons, `?author=<slug>`
- **Contributor cards** on `/contributors/` — small chip variant per author
- **Section index** — `?section=<slug>`, auto-updates to include `?subsection=` when a subsection filter pill is selected
- **Topic page** — `?topic=<slug>`
- **Archive page filter bar** — buttons update their hrefs live as the reader adjusts filters

Adding the pair to a new surface (e.g. a custom saved-search page) is one include away.

## Data pipeline

Both pages emit every article as a JSON blob inside the page's own `<script id="at-data">` / `<script id="as-data">`. Client-side JS reads it, filters by URL params, sorts by date, and renders. No backend. Pagination isn't needed because articles fit comfortably in a single JSON payload for a typical publication; beyond ~5000 pieces consider splitting.

## Accessibility

The showcase slide has `aria-live="polite"` + `aria-atomic="true"`, so screen readers announce each new article as it swaps. Both views keep standard keyboard nav. The showcase provides a `<noscript>` fallback that explains the JS dependency and points to the Timeline view, which works without JS.

## Styling

Both views have their own scoped CSS in the page `<style>` blocks. The design uses the same tokens as the rest of the site — kicker, masthead-family titles, italic lede, 3 px ink-top-border section rules — so the pages feel native.

## Related

- [Archives page](/docs/content/sections/) — the unfiltered grid with its own filter bar.
- [Author pages](/docs/content/authors/) — where the chip-size Showcase/Timeline pair lives next to social links.
- [Topics and tags](/docs/content/tags/) — surface tags can link into `?topic=<slug>` showcase/timeline.

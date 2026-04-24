---
title: UI component library
subtitle: The small, reusable building blocks — page headers, buttons, dividers, empty states, breadcrumbs — that sit between design tokens and full page layouts.
order: 2
updated: 2026-04-23
---

Between the design tokens (colors, type, spacing) and the page layouts (base, article, page) sits a layer of small reusable components. These are the building blocks most pages stitch together. Each is defined once in `src/assets/css/components.css` and composed by class name anywhere in templates.

## Page header

Every content page that isn't an article uses the same header pattern: optional eyebrow label, title, subtitle, and a rule. Rather than redeclare these styles per page, the `.page-header` component handles them uniformly.

```html
{% raw %}<header class="page-header">
  {% if eyebrow %}<p class="page-header__eyebrow">{{ eyebrow }}</p>{% endif %}
  <h1 class="page-header__title">{{ title }}</h1>
  {% if subtitle %}<p class="page-header__subtitle">{{ subtitle }}</p>{% endif %}
</header>{% endraw %}
```

The component scales the title with fluid `clamp()` type, renders the eyebrow in the UI font with letter-spacing, and puts a `--color-rule-heavy` bottom border on the whole block. On article pages, the layout emits a richer header with kicker, byline, and dateline; `.page-header` is for everything else.

Modifier classes:

- `.page-header--centered` — centers text; typically for marketing / landing pages
- `.page-header--narrow` — constrains to ~36rem, suits form pages

## Button variants

Two primary button variants + two secondary / utility variants. All four are `.btn` plus a modifier; they share sizing, padding, corners, and focus ring, and differ only in color treatment.

```css
.btn--primary   { background: var(--color-ink); color: var(--color-paper); }
.btn--secondary { background: transparent;      color: var(--color-ink);    border: 1px solid var(--color-ink); }
.btn--ghost     { background: transparent;      color: var(--color-ink);    }
.btn--danger    { background: var(--vermillion);color: #fff;                }
```

Hover states darken or invert for primary/secondary; ghost gets a subtle paper-tinted background. Every variant respects `prefers-reduced-motion` — the transform-on-hover is dropped for readers who set that preference.

### Icon + label spacing

When a button contains both an icon SVG and a label, use the `.btn__icon` child class. The icon is sized to `1em` and gets `margin-right: 0.5em` in LTR locales. Without it, SVGs either overwhelm the label or stick to its edge.

## Dividers

Three divider utilities for visual separation between sections:

| Class | Use |
|---|---|
| `.divider-thin`  | 1 px `--color-rule` — inside a card or between tightly related items |
| `.divider`       | 1 px `--color-rule-heavy` — between sections on the same page |
| `.divider-accent`| 3 px `--vermillion` — masthead-style rule above a major section |

All three render as `<hr>` with the class. Avoid using them inside body text — for prose, let heading rhythm and whitespace do the work.

## Empty-state pattern

Many pages need to render "there's nothing here yet" gracefully: an author with no articles, a topic with no tags, a search with no results, a reading list the reader hasn't added to. The `.empty-state` component standardises this:

```html
<div class="empty-state">
  <p class="empty-state__icon" aria-hidden="true">📰</p>
  <h2 class="empty-state__title">No articles yet</h2>
  <p class="empty-state__body">This author's first piece will appear here.</p>
  <a class="btn btn--secondary" href="/">Browse the archive</a>
</div>
```

The pattern centers in the page with `--color-ink-muted` body text and dimmed icon. It has a `min-height` so short empty states don't look cramped, and it scales the icon down on narrow viewports.

## Breadcrumbs

Breadcrumbs render as a single line above the page header on deep pages (section › subsection › article, or docs category › article). The active / current item uses the `[aria-current="page"]` attribute selector:

```css
.breadcrumb a            { color: var(--color-ink-muted); }
.breadcrumb a:hover      { color: var(--color-ink); }
.breadcrumb [aria-current="page"] {
  color: var(--color-ink);
  font-weight: 500;
}
```

The active state no longer relies on a `.breadcrumb--active` class — `aria-current` is both semantically correct and eliminates the need to track a separate visual-state class.

## Where to define new components

New site-wide components go in `src/assets/css/components.css`, grouped by role. Page-scoped styles belong in `src/assets/css/pages/<page>.css`. Avoid adding utility classes (margin helpers, text helpers) in `components.css` — those live in `utilities.css`.

## Related

- [Design tokens](/docs/design/tokens/) — the raw color and spacing variables these components consume.
- [Layout reference](/docs/design/layout-reference/) — the page-level scaffolds that embed these components.
- [Dark mode](/docs/design/dark-mode/) — how components adapt to the theme toggle.

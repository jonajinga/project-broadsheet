---
title: Support and transparency badges
subtitle: Flat-style badges that surface tipping links and editorial transparency signals throughout your publication.
order: 6
updated: 2026-04-18
---

Project Broadsheet includes a badge component modeled on the shields.io flat badge format. These are custom CSS components — they do not make API calls to shields.io and do not depend on it being available. The visual style (two-part label/value pill) is simply borrowed as a widely-understood convention for compact status indicators.

Badges appear inline alongside article bylines, on author profile pages, on the `/support/` page, and in the site footer and navigation drawer.

## Badge variants

Three variants are available:

| Class | Color | Use |
|---|---|---|
| `.tip-badge` | Blue | Author-level tipping link (Ko-fi, BMAC, Patreon) |
| `.tip-badge--pub` | Accent (section color) | Publication-level tipping link |
| `.tip-badge--info` | Gray | Transparency signal — no link, no action |

Each badge has two parts: a gray label on the left and a colored value on the right, separated by a slight contrast change. Height is 20px with 3px border-radius. Badges that link to a tipping page are rendered as `<a>` elements. Transparency badges are `<span>` elements.

## Tooltips

Hovering a badge triggers a Tippy.js tooltip that explains what the badge means. The tooltip copy is defined in `src/assets/js/badge-tips.js`. You can edit that file to change the tooltip text for any badge type.

## Configuration

Badges are driven by the same tipping configuration used by the tipping buttons. You do not configure badges separately.

**Publication-level badges** — add tipping URLs to `src/_data/site.json`:

```json
"tipping": {
  "kofi": "https://ko-fi.com/yourpublication",
  "bmac": "https://buymeacoffee.com/yourpublication",
  "patreon": "https://www.patreon.com/yourpublication"
}
```

**Author-level badges** — add tipping URLs to the author entry in `src/_data/authors.js`:

```js
{
  slug: "jane-doe",
  name: "Jane Doe",
  kofi: "https://ko-fi.com/janedoe",
  bmac: null,
  patreon: null
}
```

Badges for unconfigured platforms are not rendered. If neither `tipping` nor author tipping URLs are set, no support badges appear anywhere.

## Where badges appear automatically

The `tip-buttons.njk` partial renders badges and is included in the following places by default:

- Article header (author badge, inline with byline)
- Author profile pages (`/authors/{slug}/`)
- `/support/` page (publication badge)
- Site footer
- Navigation drawer

You do not need to add the partial manually to use badges in these locations. If you want to include badges elsewhere — for example, in a custom sidebar — include the partial:

```
{% raw %}{% include "partials/tip-buttons.njk" %}{% endraw %}
```

## Transparency badges

Transparency badges (`.tip-badge--info`) are not tied to tipping. They display static editorial signals — for example, "No ads" or "Reader-funded." These appear alongside support badges to give readers a quick overview of the publication's editorial independence.

Transparency badge labels are defined as an array in `src/_data/site.json`:

```json
"transparency": [
  "No ads",
  "Reader-funded",
  "No affiliate links"
]
```

Each string becomes one gray info badge. Leave the array empty or omit the key to show no transparency badges.

## Customizing badge styles

Badge styles are in the components CSS file (`src/assets/css/components/badges.css` or within the consolidated stylesheet). The key properties:

```css
.tip-badge {
  display: inline-flex;
  height: 20px;
  border-radius: 3px;
  font-size: 0.7rem;
  font-family: var(--font-mono);
  text-decoration: none;
}

.tip-badge .badge-label {
  background: #555;
  color: #fff;
  padding: 0 6px;
}

.tip-badge .badge-value {
  background: #0075ca;
  color: #fff;
  padding: 0 6px;
}

.tip-badge--pub .badge-value {
  background: var(--accent);
}

.tip-badge--info .badge-value {
  background: #777;
}
```

Change `--accent` in your design tokens to affect publication badge color automatically across all badge instances.

## What to do next

- [Tipping and reader support](/docs/integrations/tipping/) for the full tipping platform configuration.
- [Design tokens](/docs/design/tokens/) for the `--accent` variable that controls publication badge color.
- [Authors](/docs/content/authors/) for the author data file where per-author tipping URLs are set.

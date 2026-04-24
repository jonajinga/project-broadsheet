---
title: Customize design tokens
subtitle: Every color, typeface, and spacing value on the site is defined once in a single CSS file. Edit a handful of variables to rebrand the entire publication.
order: 1
updated: 2026-04-23
---

Project Broadsheet's visual language is controlled by a set of <span class="g-term" data-term="design token">design tokens</span> declared in `src/assets/css/tokens.css`. Tokens are named CSS custom properties, a value like `#C0392B` is given a descriptive name like `--vermillion`, and every component that uses vermillion references the name rather than the raw hex value. Change the variable once, and every button, link, badge, and accent updates in lockstep.

## Colors

```css
:root {
  --paper: #F4F1EB;      /* primary background */
  --ink: #1A1A1A;        /* body text */
  --vermillion: #C0392B; /* primary accent */
  --slate: #2C5F8A;      /* links */

  /* Muted / faint text — used for captions, byline datelines,
     metadata labels, and the "by line" bar on cards. */
  --color-ink-muted: #3D3B39;
  --color-ink-faint: #4F4A48;

  /* Rule / divider colors — two weights for visual hierarchy. */
  --color-rule: #DDD7CB;
  --color-rule-heavy: #9A9387;
}
```

The muted / faint ink values were darkened specifically to clear **WCAG 2.2 AA 4.5:1 contrast against the paper token**. Any tint lighter than `#4F4A48` on `--paper: #F4F1EB` fails the check. Don't lighten these further when adjusting for aesthetics — if captions feel too heavy, reduce the font size or weight instead.

<span class="g-term" data-term="dark mode">Dark mode</span> values are defined inside `:root[data-theme="dark"]`. The theme toggle script flips the `data-theme` attribute on the `<html>` element and persists the choice in `localStorage`, no flash, no round trip to a server.

## Typography

Four font families handle every piece of text on the site:

```css
--font-masthead: "Playfair Display", serif; /* hero and page titles */
--font-headline: "Lora", serif;             /* article headlines and card titles */
--font-body: "Source Serif 4", serif;       /* paragraph text */
--font-ui: "DM Sans", sans-serif;           /* navigation, buttons, labels */
```

All four are served from <span class="g-term" data-term="Bunny Fonts">Bunny Fonts</span>, which is privacy-respecting and GDPR-compliant. Swap any of them for another Bunny font and the full site re-typesets without any other changes.

## Spacing

Spacing tokens use fluid `clamp()` values where appropriate, so the rhythm compresses on small screens and expands on large ones:

```css
--space-sm: 0.75rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
--space-2xl: 3rem;
```

Every layout, card, form, and section uses these tokens rather than raw values, which means a single edit to the spacing scale propagates through every component.

## What to do next

- [Pick fonts from Bunny Fonts](/docs/design/fonts/) and swap the font-family variables.
- [Add per-section accent colors](/docs/content/sections/) so each editorial vertical has its own look.

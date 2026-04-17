---
title: Customize design tokens
subtitle: Colors, typography, spacing — every design decision is a CSS variable you can edit in one place.
order: 1
updated: 2026-04-17
---

Project Broadsheet's entire visual language is defined in `src/assets/css/tokens.css`. Change these variables, and the site updates everywhere — light mode, dark mode, every page, every component.

## Colors

```css
:root {
  --paper: #F4F1EB;      /* background */
  --ink: #1A1A1A;        /* body text */
  --vermillion: #C0392B; /* primary accent */
  --slate: #2C5F8A;      /* links */
}
```

Dark mode values live in `:root[data-theme="dark"]`. The theme toggle script flips `data-theme` and persists the choice in `localStorage`.

## Typography

Four families handle everything:

```css
--font-masthead: "Playfair Display", serif; /* big display type */
--font-headline: "Lora", serif;             /* article headlines */
--font-body: "Source Serif 4", serif;       /* body copy */
--font-ui: "DM Sans", sans-serif;           /* nav, buttons, labels */
```

Swap any of these for a different Bunny Font and the whole site reflows.

## Spacing

Fluid spacing via `clamp()`:

```css
--space-sm: 0.75rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
--space-2xl: 3rem;
```

## What's next

- [Pick fonts from Bunny Fonts](/docs/design/fonts/).
- [Add per-section accent colors](/docs/content/sections/).

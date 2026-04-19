---
title: CSS overrides
subtitle: How to customize Project Broadsheet's visual design without editing framework files — so your changes survive upgrades.
order: 9
updated: 2026-04-18
---

Project Broadsheet ships with a layered <span class="g-term" data-term="CSS">CSS</span> architecture. Framework styles are in `src/assets/css/components/` and `src/assets/css/pages/`. Your customizations belong in `tokens.css` and a dedicated overrides file. Editing framework files directly works, but it creates merge conflicts every time you pull an upstream update.

## The safe customization layer

The design system is built entirely on CSS custom properties defined in `src/assets/css/tokens.css`. Changing a token changes every component that uses it. This is the right place to start.

```css
/* src/assets/css/tokens.css */
:root {
  --accent: #C9352A;         /* your brand color */
  --font-headline: 'Lora', Georgia, serif;
  --font-body: 'Source Serif 4', Georgia, serif;
}
```

Every button, heading, link, card, and badge responds to these values. Most publications only need to touch `--accent`, `--font-headline`, and `--font-body` to feel completely distinct.

See [Design tokens](/docs/design/tokens/) for the full reference.

## Adding a custom overrides file

For changes that go beyond tokens — rounding off a component, adjusting a margin, adding a new utility class — create a dedicated file rather than editing component files:

```
src/assets/css/custom.css
```

Then register it in `src/assets/css/global.css` (the CSS build entry point) by adding it to the list of files the build concatenates. Open `eleventy.config.js`, find the CSS concatenation array, and append `custom.css` after the existing entries:

```js
const cssFiles = [
  "reset.css",
  "tokens.css",
  // ... existing files ...
  "custom.css",   // add at the end
];
```

Your overrides load last, so they win the <span class="g-term" data-term="CSS">CSS</span> cascade over any framework rule.

## Targeting framework components

Framework class names are stable and documented. You can safely reference them in your overrides file:

```css
/* Round off card corners for a softer feel */
.card { border-radius: 0.5rem; }

/* Wider container on large screens */
.container { max-width: 90rem; }

/* Hide the reading ruler tool */
.reading-ruler-toggle { display: none; }
```

## What not to edit directly

Avoid editing these framework files unless the change is intentional and you're prepared to handle merge conflicts on upgrade:

- `src/assets/css/components/*.css`
- `src/assets/css/pages/*.css`
- `src/assets/css/reset.css`
- `src/assets/css/utilities.css`

If you must edit a framework file — for a fix that tokens and overrides can't reach — add a short comment so you can find the change during a future merge:

```css
/* CUSTOMIZED: increased z-index for sticky header */
.site-header { z-index: 200; }
```

## What to do next

- [Design tokens](/docs/design/tokens/) — full list of every CSS custom property.
- [Colors](/docs/design/colors/) — color system, dark mode tokens, and accessible contrast guidance.
- [Fonts](/docs/design/fonts/) — how to swap typefaces using Bunny Fonts or self-hosted files.

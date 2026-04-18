---
title: Fonts and typography
subtitle: Swap the four default fonts for any pairing from Bunny Fonts. Every font change propagates through the entire site after a single save.
order: 2
updated: 2026-04-17
---

Project Broadsheet uses four typefaces by default: Playfair Display for mastheads, Lora for headlines, Source Serif 4 for body copy, and DM Sans for UI. All four come from <span class="g-term" data-term="Bunny Fonts">Bunny Fonts</span>, a privacy-respecting alternative to Google Fonts. Changing any of them is a single-line edit.

## Where fonts are defined

Font families are CSS custom properties in `src/assets/css/tokens.css`:

```css
--font-masthead: "Playfair Display", Georgia, serif;
--font-headline: "Lora", Georgia, serif;
--font-body: "Source Serif 4", Georgia, serif;
--font-ui: "DM Sans", system-ui, sans-serif;
```

The font-family string lists the web font first, a system fallback second, and a generic fallback last. Every component on the site references these variables instead of a specific font name.

## Swap a font from Bunny Fonts

1. Visit <https://fonts.bunny.net> and pick a font.
2. Copy the CSS import URL it gives you.
3. Open `src/_includes/layouts/base.njk` and replace the `<link rel="stylesheet">` that loads fonts from bunny.net with the new URL. You can include multiple families in one URL.
4. Update the matching `--font-*` variable in `tokens.css`.

The change applies to every page on the next build.

## Add a new font variable

To introduce a fifth typeface without replacing any of the existing four:

```css
--font-display: "Fraunces", serif;
```

Then reference it where you want it:

```css
.my-special-heading {
  font-family: var(--font-display);
}
```

## What makes a good pairing

A quick heuristic:

- One serif for body, one sans-serif for UI, or vice versa.
- A display face for masthead only. Don't set long paragraphs in Playfair Display.
- Two families is the floor, five is the ceiling.

If you're unsure, keep the defaults. They were chosen deliberately for readability and a newsprint feel.

## System fallbacks

Every `--font-*` variable includes system fallbacks. If Bunny Fonts is slow or blocked (behind a corporate firewall, on a metered connection, with aggressive content-blockers), the site falls back to a comparable system font. Readers never see unstyled text.

## What to do next

- [Customize design tokens](/docs/design/tokens/) for colors and spacing.
- [Dark mode](/docs/design/dark-mode/) for the light/dark color system.
- [Custom layouts](/docs/customization/custom-layouts/) if you need a new template.

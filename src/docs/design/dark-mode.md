---
title: Dark mode
subtitle: How Project Broadsheet implements automatic dark mode via prefers-color-scheme, the manual theme toggle in the header, and the no-flash initialization script.
order: 3
updated: 2026-04-17
---

Project Broadsheet ships with full <span class="g-term" data-term="dark mode">dark mode</span> support. The site respects the reader's operating-system preference via `prefers-color-scheme`, and offers a manual toggle in the header for readers who want to override it. There's no flash of the wrong theme on page load, and every component is independently verified for contrast in both modes.

## How the theme is chosen

1. **First visit.** The theme-init script in `<head>` reads `prefers-color-scheme` from the browser and sets `data-theme="dark"` or `data-theme="light"` on the `<html>` element before any CSS loads.
2. **Repeat visit.** The same script checks `localStorage` for `pb-theme`, which overrides the system preference.
3. **Manual toggle.** Clicking the sun/moon button in the header flips `data-theme` and saves the new value to `localStorage`.

Because the theme is set before the first paint, readers never see a flash of the wrong theme.

## Where dark mode lives in the CSS

Light mode values are the default, declared on `:root`:

```css
:root {
  --paper: #F4F1EB;
  --ink: #1A1A1A;
  --vermillion: #C0392B;
}
```

Dark mode values override them when `data-theme="dark"`:

```css
:root[data-theme="dark"] {
  --paper: #12100E;
  --ink: #E8E3D6;
  --vermillion: #E05A4B;
}
```

Every component references these variables, not raw colors. That means changing light and dark values in one place updates the entire site.

## Component-level overrides

Some components need more than a token swap. For example, the site footer uses a pinned dark surface in both themes, so outline-light buttons always have correct contrast. Any time a component needs to behave differently in dark mode, the CSS uses an explicit `html[data-theme="dark"]` selector:

```css
html[data-theme="dark"] .card { background: #1A1815; }
```

Grep for `data-theme="dark"` in the CSS and you'll find every override.

## Contrast verification

Every color pair used on the site has been checked against <span class="g-term" data-term="WCAG">WCAG</span> 2.2 Level AA in both modes. The contrast table is documented in the <a href="/style-guide/#contrast">Style Guide</a>.

## The theme toggle button

The button lives in `src/_includes/partials/header.njk`. It's a plain `<button>` with an inline `onclick="toggleTheme()"` handler. The JS is in `src/assets/js/main.js`:

```js
window.toggleTheme = function () {
  var current = document.documentElement.getAttribute("data-theme");
  var next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("pb-theme", next);
};
```

That's it. Twelve lines of JS and a couple of CSS variables.

## Reduced motion

Both the manual toggle and any component transitions honor `prefers-reduced-motion`. Readers with motion sensitivity don't see the cross-fade.

## What to do next

- [Customize design tokens](/docs/design/tokens/) to change the dark palette.
- [Fonts and typography](/docs/design/fonts/) for type choices.
- [Accessibility statement](/accessibility/) for the full contrast table.

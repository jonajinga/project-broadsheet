---
title: Accessibility
subtitle: The concrete a11y patterns Project Broadsheet implements — contrast tokens that clear WCAG 2.2 AA, prefers-reduced-motion, focus traps, focus-visible rings, skip links, and the aria-hidden traps to avoid.
order: 6
updated: 2026-04-23
---

Project Broadsheet targets **WCAG 2.2 AA** as its accessibility floor. That is not the whole story — good a11y extends well past what the spec measures — but it is the floor every template, component, and interaction is checked against before it ships. This page catalogues the patterns the codebase uses to stay there.

## Contrast

Every foreground-on-background pair in `tokens.css` clears **4.5:1** (normal text) or **3:1** (large text, 18.66 px+ or 14 px+ bold). The muted / faint ink tokens were darkened specifically to pass:

```css
--color-ink:       #1A1A1A;  /* 16.2:1 on --paper — AAA */
--color-ink-muted: #3D3B39;  /* 9.1:1  on --paper — AAA */
--color-ink-faint: #4F4A48;  /* 6.4:1  on --paper — AA  */
```

If you rebrand and pick a lighter paper or a warmer ink, **re-check every combo** against the token it pairs with. Any value lighter than `#4F4A48` on `#F4F1EB` fails 4.5:1. See [Design tokens](/docs/design/tokens/).

## `prefers-reduced-motion`

Readers who set reduced-motion at the OS level should not get bounced around by transitions. Project Broadsheet honors that preference globally in `base.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration:    0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration:   0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is a **blanket** override. Any individual component that wants a particular animation to run regardless (a loading spinner, an in-progress indicator) has to opt in explicitly. The default is "no motion."

Individual components that rely on transforms for hover feedback — buttons, cards — also check the preference and drop the transform in its reduce state rather than only softening the duration.

## `:focus-visible` ring

Every focusable element gets a visible focus ring when reached by keyboard, and none when reached by mouse:

```css
:focus-visible {
  outline: 2px solid var(--vermillion);
  outline-offset: 2px;
}
:focus:not(:focus-visible) { outline: none; }
```

Don't globally remove `outline` without replacing it. That's the most common a11y regression in CSS codebases.

## Skip link

The layout emits a skip link as the first interactive element in the body. It's visually hidden until focused:

```html
<a class="skip-link" href="#main-content">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
}
.skip-link:focus {
  left: 1rem;
  top: 1rem;
  z-index: 10000;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: 0.5rem 1rem;
}
```

Every page's `<main>` has `id="main-content"` so the link always resolves. [SPA navigation](/docs/design/spa-navigation/) swaps the inner HTML of `#main-content` but keeps the element itself, so the skip target is stable across nav.

## Focus trap (modals, panels)

Modal surfaces — display settings, reader panel, reading-list export dialog — trap focus while open. Tab cycles within the surface; Shift+Tab wraps the other way; Escape closes the surface and returns focus to the element that opened it.

The pattern:

```js
function trapFocus(container, opener) {
  const focusable = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  container.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { close(); opener.focus(); return; }
    if (e.key !== 'Tab')    { return; }
    if (e.shiftKey && document.activeElement === first) { last.focus();  e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last)  { first.focus(); e.preventDefault(); }
  });
  first.focus();
}
```

Used by the [reader panel](/docs/reader-tools/reader-panel/), [display settings](/docs/reader-tools/reading-settings/), and any other modal surface.

## `aria-hidden` on focusable ancestors

`aria-hidden="true"` on an element that contains a focusable descendant produces a Lighthouse failure: sighted users can Tab to the descendant but screen readers are told it doesn't exist. This was a bug in an earlier version of the "reading floats" wrapper (which hid itself as a group while back-to-top remained tab-reachable inside).

The fix is **not** `aria-hidden` on the wrapper. Either:

1. Remove `aria-hidden` from the wrapper and instead hide the inner focusable element with `visibility: hidden` (which removes it from both the tab order and the accessibility tree);
2. Or hide the inner focusable with `tabindex="-1"` + `inert` (newer browsers);
3. Or don't hide anything and trust screen-reader users to skip it via the skip link.

The project uses option 1 for back-to-top: `visibility: hidden` on the button when below the scroll threshold, no `aria-hidden` anywhere on ancestors.

## `aria-live` regions

The archive [showcase](/docs/content/archive-views/) uses `aria-live="polite"` + `aria-atomic="true"` on the slide container, so screen readers announce each new article as slides auto-advance. `polite` (not `assertive`) lets the announcement wait for the user to finish their current reading.

## Keyboard shortcuts

Every mouse / touch interaction has a keyboard equivalent:

| Action | Keys |
|---|---|
| Open search | `/` |
| Toggle theme | `T` |
| Focus mode | `F` |
| Showcase pause | `P` or `Space` |
| Showcase next / prev | `→` / `←` |
| Close any modal | `Esc` |

Shortcuts are bound with `keydown` on document and check `!e.target.matches('input, textarea, select, [contenteditable]')` first, so typing in a form never triggers them.

## Touch targets

Interactive elements target **44 × 44 px** minimum. Icon-only buttons that look smaller visually still reserve that hit area via padding. Measured in the browser's dev tools "computed size," not by visual judgement.

## Testing in practice

- **Automated**: Lighthouse a11y audit on the homepage, an article, an author page, and the archives. Target score: 100.
- **Keyboard-only**: navigate a representative article end-to-end using only Tab, Shift+Tab, Enter, Space, and arrow keys. Every interactive element reachable; focus ring visible; modals trap and release focus correctly.
- **Screen reader**: VoiceOver (macOS) or NVDA (Windows) on the homepage, an article, and the showcase. Listen for: unlabeled buttons, duplicated announcements, skip-link reachable as first tab stop.
- **Reduced motion**: toggle the OS preference and confirm no transforms, slides, or parallax fires.
- **Zoom**: 200% page zoom — no horizontal scroll, all text readable, all controls reachable.

## Related

- [Design tokens](/docs/design/tokens/) — the color contrast source of truth.
- [Reader panel](/docs/reader-tools/reader-panel/) — focus-trap pattern in practice.
- [Display settings](/docs/reader-tools/reading-settings/) — the reader-facing a11y controls (font, spacing, word-spacing, ruler).

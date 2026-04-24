---
title: SPA-style navigation
subtitle: Page transitions swap the main content without a full reload, so background music, scroll position, global panels, and reader state survive navigation.
order: 9
updated: 2026-04-23
---

Project Broadsheet intercepts internal link clicks and swaps the contents of `#main-content` without a full page reload. The browser stays on the same page object — the masthead, footer, music player iframe, global settings panel, reader drawer, and any active state all persist across navigation.

This is not a single-page-app framework. It's a targeted enhancement layer that degrades cleanly: if JavaScript fails or the visitor is mid-download, links behave as normal anchors.

## Why it exists

The driver is **music continuity**. The background music feature uses a YouTube IFrame embed that survives DOM swaps but dies on full page reloads. Without SPA-nav, any navigation between articles would rebuffer the music — a 300–800 ms audio dropout every time. With SPA-nav, the iframe lives on `document.body`, outside of `#main-content`, and carries across swaps. The same benefit extends to any other fixed-position widget: panels stay open, scroll positions can be programmatically preserved, focus is manageable.

## How it works

`src/assets/js/spa-nav.js` intercepts every click on an internal `<a>` that matches `shouldIntercept()`. The handler:

1. Fetches the target URL's HTML via `fetch()`.
2. Parses it with `DOMParser`.
3. Extracts the new `#main-content` inner HTML plus any per-page `<script>` tags.
4. Fires a `spa:beforeswap` event (listeners like the music player detach widgets from inside the content area).
5. Swaps `#main-content` innerHTML in place, updates `document.title`, meta description, and canonical URL.
6. Re-injects or re-runs page-level scripts from a known list.
7. Fires a `spa:contentswap` event. Listeners re-bind their DOM references to the new nodes.
8. Pushes state onto history so Back / Forward work.

## Exclusions

`shouldIntercept()` lets these through as normal full loads:

- External origins
- `mailto:` / `tel:` / `download` links
- `target="_blank"`
- Links to files by extension (`.pdf`, `.xml`, `.json`, `.epub`, etc.)
- `data-no-spa` opt-out attribute — use on links whose targets do DOM-level global state manipulation (e.g. fullscreen showcases that reparent themselves out of the site-wrapper).
- Links inside a `<form>` element
- Same-page hash anchors

Everything else SPA-navs by default.

## Script re-injection

Per-page scripts (progress tracking, annotations, reading-list bookmark buttons, download generators, footnotes, cite-inline, revision history, library reader) re-execute on every content swap. Each script has a bootstrap guard so its window-level listeners register only once:

```js
var isFirstRun = !window.__scriptBootstrapped;
window.__scriptBootstrapped = true;
// ...
if (isFirstRun) window.addEventListener('scroll', handleScroll);
```

Element-level bindings (button click handlers, DOM queries) run every time. Window-level bindings run once and close over fresh state on each re-execution.

## Listening to SPA events

Any script can hook into navigation:

```js
document.addEventListener('spa:beforeswap', function () {
  // The main-content is about to be wiped. Detach anything that
  // needs to survive (e.g. reparent a widget up to document.body).
});

document.addEventListener('spa:contentswap', function () {
  // New main-content is live. Re-query the DOM.
});
```

Used by the music player, glossary tooltips (to dismiss open tips on nav), reader panel tab-scroll arrows, and library chapter progress tracking.

## Back-button behaviour

Full-screen overlays that reparent themselves out of `#main-content` need to put things back on `pagehide`, otherwise the browser's bfcache can serve a half-assembled page on Back. Project Broadsheet's showcases do this:

```js
window.addEventListener('pagehide', function () {
  if (originalParent && showcase) originalParent.appendChild(showcase);
  wrapper.style.display = '';
});
```

Without this, hitting Back after clicking "Read article" in a showcase returns the reader to a blank page.

## Performance

SPA-nav is net-positive on perceived speed:

- The full page reload cost is avoided — no re-parsing of CSS, re-downloading of fonts, re-executing of site-wide JS.
- `fetch` re-uses the existing HTTP/2 connection.
- `DOMParser` is fast; swap time is typically under 100 ms.
- The browser's bfcache handles Back / Forward for free.

Tradeoffs:

- Initial script cost is higher (the nav module itself loads and runs on every page).
- Per-page `<script src>` tags must be in a known re-inject list or they won't run on SPA-navigated arrival.
- Any code that assumes `DOMContentLoaded` fires per navigation needs to be written with `isFirstRun` guards.

## Configuration

The list of article-layout scripts that re-inject on each swap lives in `spa-nav.js`:

```js
['progress.js', 'annotations.js', 'reading-list.js', 'download.js',
 'reader-panel-migrate.js', 'keyboard-shortcuts.js', 'footnotes.js',
 'cite-inline.js', 'revision-history.js', 'library.js']
```

Add scripts you write to this list if they maintain per-page DOM bindings.

## Disabling

Remove the `<script src="/assets/js/spa-nav.js">` include from `base.njk` and every navigation becomes a normal full reload. No code changes required elsewhere; all the SPA hooks are additive.

## Related

- [Reader panel](/docs/reader-tools/reader-panel/) — uses `spa:contentswap` to re-bind the tab strip and content slots.
- [Glossary tooltips](/docs/integrations/gtranslate/) — dismissed on `spa:beforeswap` to avoid the ghost-tooltip bug on mobile.

---
title: Translation issues
subtitle: How to diagnose and fix the most common problems with the GTranslate.io language picker, including issues with the language staying stuck, the dropdown not opening, and translated text not resetting.
order: 5
updated: 2026-04-18
---

Project Broadsheet uses [GTranslate.io](https://gtranslate.io) for in-browser translation. The widget loads from GTranslate's CDN and translates page text client-side. Most issues are caused by cookies persisting from a previous session or the GTranslate script loading before the page is ready.

---

## The page stays in a previously selected language

GTranslate stores the chosen language in a browser cookie called `googtrans`. When a reader visits again, GTranslate reads that cookie and re-applies the translation automatically.

**To reset to the default language:**

Use the **Reset to English** button at the bottom of the globe-icon language picker. It clears the `googtrans` cookie and reloads the page in the original language.

If the button is not visible, a reader can clear cookies manually:

1. Open browser settings → Privacy & Security → Cookies.
2. Search for the current domain and delete all cookies.
3. Reload the page.

**As a publisher,** if you need to test the default-language experience, open a private/incognito window, which starts with no cookies.

---

## The language dropdown does not open

**Check 1: Did the GTranslate script load?**

Open DevTools → Console. Look for errors like `Failed to load resource` pointing to `cdn.gtranslate.net`. If present, it is a network or ad-blocker issue on the reader's device, not a configuration problem.

**Check 2: Is `gtranslate.enabled` set to true?**

In `src/_data/meta.js`, confirm:

```js
gtranslate: {
  enabled: true,
  ...
}
```

If `enabled` is `false`, the globe icon and all GTranslate scripts are omitted from the page.

**Check 3: Did the script load correctly?**

In DevTools → Sources, search for `gtranslate`. The file `dropdown.js` should appear under `cdn.gtranslate.net`. If it is absent, the `defer` attribute may be causing a race condition: the `gtranslateSettings` variable must be set before `dropdown.js` executes. Confirm the settings `<script>` appears before the `dropdown.js` `<script>` tag in `base.njk`.

---

## The language select shows but switching does nothing

**Symptom:** The reader picks a language from the GTranslate dropdown but the page text does not change.

**Cause:** GTranslate's `dropdown.js` script did not finish loading before the reader interacted. This typically happens on slow connections.

**Fix for readers:** Wait a moment after the page loads before using the language picker.

**Fix as publisher:** The GTranslate script already loads with `defer`. If the problem is systematic, you can move the script tag to just before `</body>` to ensure the page content is fully parsed first. This is already the case in the default Project Broadsheet layout.

---

## Translated text is garbled or incorrect

GTranslate.io uses machine translation. Quality varies by language and content type. This is a limitation of automated translation and is not something Project Broadsheet can fix.

To exclude specific words or phrases from being translated (brand names, technical terms, proper nouns), add the `notranslate` class:

```html
<span class="notranslate">Project Broadsheet</span>
```

For code blocks, the default Markdown renderer wraps code in `<code>` tags; add a global CSS rule to prevent those from being translated:

```css
code, pre { /* GTranslate respects the notranslate class */}
```

Or apply it in the template:

```html
<code class="notranslate">npm run build</code>
```

---

## The globe icon does not appear in the header

**Check 1:** Confirm `gtranslate.enabled: true` in `src/_data/meta.js` and rebuild.

**Check 2:** Confirm the `{% raw %}{% if meta.gtranslate.enabled %}{% endraw %}` block is present in `src/_includes/partials/header.njk`. If it was accidentally removed, re-add the globe button markup.

**Check 3:** Inspect the header in DevTools. If `.lang-switcher` is present but invisible, a CSS rule may be hiding it; check for `display: none` on `.lang-switcher` or `.lang-toggle`.

---

## What to do next

- [GTranslate integration](/docs/integrations/gtranslate/) for the full setup reference.
- [Common issues and fixes](/docs/troubleshooting/common-issues/) for other frequent problems.
- [Report a bug](/forms/bug-report/) if none of the above applies.

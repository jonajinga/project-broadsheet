---
title: GTranslate
subtitle: Enable translation into 80+ languages with a globe-icon picker in the site header. Readers pick their language, the browser translates the page, no API keys or back-end services required.
order: 5
updated: 2026-04-17
---

<span class="g-term" data-term="GTranslate">GTranslate</span> is a free translation widget that integrates with Project Broadsheet's header. When enabled, a small globe icon appears next to the theme toggle; clicking it opens a dropdown of 80+ languages with native-script names and flag emojis. Picking one translates the page in the reader's browser.

## Enable the integration

In `src/_data/meta.js`, set `gtranslate.enabled` to `true`:

```js
gtranslate: {
  enabled: true,
  defaultLanguage: "en",
  languages: ["en", "es", "fr", "de", /* ... */]
}
```

The `languages` array is the list of codes shown in the dropdown. The default list includes 82 languages covering every major region. You can trim it to just the languages your readers use, or expand it.

## How the language list is rendered

Project Broadsheet ships with a separate data file, `src/_data/languages.js`, that maps each code to a display name (in the native script) and a flag emoji. The header's language menu reads from this file. To add or reorder languages in the UI, edit `languages.js` and rebuild.

## What actually happens when a language is picked

- The reader clicks a language in the menu.
- The site calls GTranslate's `doGTranslate()` function with the source and target language.
- The widget translates every piece of text on the page, in place, without a full reload.
- The selection is remembered so other pages the reader visits load in the same language.

No text is sent to Google Translate servers until a reader explicitly picks a non-default language.

## Limitations to be aware of

- **SEO.** Translated text is not indexed by search engines. The canonical version is English (or whatever your `defaultLanguage` is).
- **Dynamic content.** Images, embedded videos, and iframes are not translated.
- **Custom fonts.** Some fonts lack glyphs for non-Latin scripts. Project Broadsheet's defaults (Playfair Display, Lora, etc.) fall back to system fonts for languages they don't support. See [Fonts](/docs/design/fonts/) for details.

## Disable translation on a specific element

Add the `notranslate` class to any element you don't want GTranslate to modify:

```html
<code class="notranslate">git clone</code>
```

Useful for code blocks, brand names, technical terms, and anything that shouldn't be translated.

## Remove GTranslate entirely

Set `gtranslate.enabled: false` in `meta.js`. The globe icon disappears from the header and no GTranslate scripts load on any page.

## What to do next

- [Fonts and typography](/docs/design/fonts/) to ensure your fonts cover the scripts you care about.
- [SEO & Analytics](/docs/seo/) for search-engine implications.
- [Buttondown newsletter](/docs/integrations/buttondown/) for email in languages other than English.

---
title: Voice search and input
subtitle: How Project Broadsheet's voice input feature works, which browsers support it, and how to enable or disable it for your publication.
order: 7
updated: 2026-04-18
---

Project Broadsheet includes a voice input button in the search bar. Readers can click the microphone icon, speak a query, and have the words transcribed into the search field automatically. The feature runs entirely in the browser using the Web Speech API - no audio is sent to any server.

## How readers use it

1. Open the search modal (keyboard shortcut **Ctrl+K** / **Cmd+K**, or click the search icon in the header).
2. Click the **microphone icon** on the right side of the search field.
3. Speak the search query. The browser requests microphone permission on first use.
4. The transcribed text appears in the search field and results update in real time.

The microphone button is only shown when the browser reports that the Web Speech API is available. It does not appear in unsupported browsers.

## Browser support

Voice input uses `window.SpeechRecognition` (Chrome/Edge) or `window.webkitSpeechRecognition` (Safari 14.1+). Firefox does not support the Web Speech API as of mid-2026.

| Browser | Support |
|---------|---------|
| Chrome 80+ | Full |
| Edge 80+ | Full |
| Safari 14.1+ | Full |
| Firefox | Not supported |
| Chrome on iOS | Not supported |
| Safari on iOS 14.5+ | Full |

On unsupported browsers, the microphone button is hidden and the search field behaves as a standard text input.

## Where the code lives

Voice input is implemented in `src/assets/js/search.js`. The relevant section:

```js
const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (recognition) {
  const mic = new recognition();
  mic.lang = document.documentElement.lang || "en-US";
  mic.interimResults = true;
  mic.onresult = (e) => {
    const transcript = Array.from(e.results)
      .map((r) => r[0].transcript)
      .join("");
    searchInput.value = transcript;
    searchInput.dispatchEvent(new Event("input"));
  };
}
```

The `lang` attribute is set from the `<html lang="...">` attribute, which comes from `site.language` in `src/_data/site.json`. Set this to your publication's primary language for better transcription accuracy.

## Disabling voice input

To remove the microphone button entirely, open `src/assets/js/search.js` and delete or comment out the `SpeechRecognition` block. The search field continues to work normally.

Alternatively, hide the button with CSS:

```css
.search-mic { display: none; }
```

## Privacy

The Web Speech API sends audio to the browser vendor's speech-to-text service (Google for Chrome/Edge, Apple for Safari). No audio data is handled by Project Broadsheet or your hosting provider. If your audience has strict privacy requirements, consider disabling the feature.

## What to do next

- [Pagefind search](/docs/seo/pagefind-search/) for how search indexing and results work.
- [Reader tools overview](/docs/reader-tools/overview/) for the full list of reader features.
- [Text-to-speech](/docs/reader-tools/text-to-speech/) for the complementary audio-output feature.

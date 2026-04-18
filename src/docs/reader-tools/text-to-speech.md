---
title: Text-to-speech
subtitle: Project Broadsheet's text-to-speech uses the browser's native Web Speech API. No server-side audio, no data leaves the device. Word-level highlights sync with playback so readers never lose their place.
order: 2
updated: 2026-04-17
---

Text-to-speech (TTS) is a built-in reader tool. Readers click the play button at the top of any article and the browser reads the text aloud. The word being spoken is highlighted in real time. There's no server involved: speech synthesis runs entirely on the reader's device.

## How it works

Project Broadsheet's TTS uses the **Web Speech API**, a browser-native speech-synthesis interface. The JS is in `src/assets/js/reader.js`. When a reader clicks play:

1. The article body is parsed into a stream of words.
2. Each word is handed to `SpeechSynthesis.speak()` with timing events.
3. The word currently being spoken gets a highlight class, which the CSS visually emphasizes.
4. Playback speed, pitch, and voice are configurable in the reader preferences panel.

## Browser support

- **Full support with word-level highlighting**: Chrome, Edge, Opera.
- **Partial support (speech works, highlight doesn't)**: Firefox, Safari.
- **No support**: Internet Explorer, very old mobile browsers.

The play button hides itself on unsupported browsers rather than appearing broken.

## Reader controls

From the reader panel (gear icon in the article toolbar):

- **Voice.** Pick from the browser's installed voices. Desktop browsers typically offer 10–30, mobile fewer.
- **Speed.** 0.5× to 2.0× in 0.25 steps.
- **Pitch.** Low / normal / high.
- **Auto-scroll.** Optional: the article scrolls automatically so the spoken word stays visible.

## Privacy properties

- No audio is uploaded anywhere. The synthesis happens in the browser using the device's local voices.
- No transcripts are stored. Once playback ends, nothing is retained.
- `localStorage` stores only the reader's preferred voice and speed.

## What to do next

- [Reader tools overview](/docs/reader-tools/overview/) for every other reader feature.
- [Highlights and notes](/docs/reader-tools/highlights-and-notes/) for the annotation system.
- [Accessibility statement](/accessibility/) for the full a11y profile.

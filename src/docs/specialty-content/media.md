---
title: "Media: photos, video, music"
subtitle: Project Broadsheet includes structured content types for photo galleries, embedded video, and music playlists. Each has a dedicated template and data model.
order: 5
updated: 2026-04-17
---

Beyond articles, reviews, and the library, Project Broadsheet supports three dedicated media types: photo galleries, embedded video, and music playlists. Each has its own folder, front-matter schema, and layout, so readers can browse them as first-class content rather than attachments to articles.

## Photo gallery

Photos live at `src/content/photos/{slug}.md`:

```yaml
---
layout: layouts/photo.njk
title: "Autumn in the Colorado foothills"
date: 2026-10-14
photographer: jon-ajinga
category: "Landscape"
license: "CC-BY-4.0"
source: "Own work"
images:
  - src: /assets/img/photos/autumn-1.jpg
    alt: "Aspens turning gold on a ridge"
    caption: "Near Mt. Falcon Park, late September."
  - src: /assets/img/photos/autumn-2.jpg
    alt: "A valley filled with fog under orange trees"
---

An optional description of the shoot.
```

The `/photos/` index lets readers filter by `category`, `license`, or `source`. Each gallery page shows every image in order with caption, alt text, and metadata.

## Video

Videos live at `src/content/videos/{slug}.md`:

```yaml
---
layout: layouts/video.njk
title: "An interview with the founder"
date: 2026-04-12
provider: youtube
video_id: "dQw4w9WgXcQ"
duration: "18:42"
transcript: /assets/transcripts/interview-founder.txt
---

Description in Markdown, shown below the embedded player.
```

Supported providers: `youtube`, `vimeo`, `self-hosted` (with a `video_src` field pointing to an MP4). Transcripts are optional but improve accessibility and SEO.

## Music

Music lives at `src/content/music/{slug}.md`:

```yaml
---
layout: layouts/music.njk
title: "Reading soundtrack: autumn edition"
date: 2026-10-01
tracks:
  - title: "Clair de Lune"
    composer: "Claude Debussy"
    url: "https://example.com/track-1.mp3"
    duration: "5:10"
  - title: "Gymnopédie No. 1"
    composer: "Erik Satie"
    url: "https://example.com/track-2.mp3"
    duration: "3:24"
---
```

The music layout includes a persistent mini-player in the corner; switching pages doesn't stop playback. YouTube URLs work as a fallback if you don't have self-hosted audio.

## What to do next

- [Reviews](/docs/specialty-content/reviews/) for books, films, podcasts, documentaries.
- [Library](/docs/specialty-content/library/) for long-form works organized by chapter.
- [Events calendar](/docs/specialty-content/events/) for time-based entries.

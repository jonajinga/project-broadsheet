---
title: Article profiles
subtitle: Three article profiles — standard, podcast, and dataviz — control the layout and badge shown for each piece. Podcast adds an inline audio player; dataviz embeds a full-width iframe.
order: 15
updated: 2026-04-18
---

An article profile changes how an article renders in both the full article view and in section index cards. The `profile` field in front matter selects the profile. The default is `standard`, which renders the normal article layout with no changes.

## Profiles

### standard

The default. No additional front matter required. Article renders with the normal header, body, and reader toolbar.

```yaml
profile: standard   # this is the default; you can omit it
```

### podcast

Adds an inline audio player to the article header, below the byline. The audio player shows episode number, play/pause, scrubber, and playback speed controls. The article body serves as show notes.

```yaml
profile: podcast
audio_url: https://your-podcast-host.com/episodes/episode-42.mp3
episode_number: 42
season: 2
duration: "38:15"
```

| Field | Required | Notes |
|---|---|---|
| `audio_url` | Yes | Direct link to the audio file. MP3 recommended for broadest compatibility. |
| `episode_number` | No | Displayed as "Episode 42" in the player header |
| `season` | No | Displayed as "S2 E42" when combined with `episode_number` |
| `duration` | No | Displayed as a static label. Format: `MM:SS` or `H:MM:SS` |

The audio player pauses automatically if the reader starts text-to-speech, and vice versa — only one audio source plays at a time.

Section index cards for podcast articles show a microphone badge and the episode number (if set) in place of the reading time.

### dataviz

Adds a full-width iframe embed to the article header, replacing the lead image. Designed for interactive charts, maps, and data tools hosted externally (Datawrapper, Flourish, Observable, custom tools).

```yaml
profile: dataviz
viz_url: https://datawrapper.de/charts/abc123/
viz_height: 480
viz_title: "Springfield Housing Permits by Year, 2010-2025"
```

| Field | Required | Notes |
|---|---|---|
| `viz_url` | Yes | The embed URL for the visualization |
| `viz_height` | No | Height of the iframe in pixels. Default: `480` |
| `viz_title` | No | Used as the iframe `title` attribute for accessibility |

Section index cards for dataviz articles show a chart badge. The lead image field is ignored when `profile: dataviz` is set.

## Profile badges in section indexes

Section index cards show a small badge that indicates the content type:

| Profile | Badge |
|---|---|
| standard | None (no badge) |
| podcast | Microphone icon + "Podcast" or episode number |
| dataviz | Chart icon + "Interactive" |
| review | Star icon + rating |

Badges let readers scan a section index and self-select by format before clicking through.

## What to do next

- [Writing articles](/docs/content/write-an-article/) for the full front matter field reference.
- [Reviews](/docs/specialty-content/reviews/) for the review profile, which uses a similar structured metadata pattern.
- [Media](/docs/specialty-content/media/) for audio, video, and playlist content as standalone pages rather than embedded in articles.

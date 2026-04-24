---
title: Games
subtitle: Interactive games that live alongside editorial content. Two built-in types ship with Project Broadsheet. Each game is a Markdown file that points at an optional JSON data source.
order: 8
updated: 2026-04-20
---

Games are a specialty content type designed for publications that want to offer readers something to do between articles. They live at `src/games/`, appear in the games index at `/games/`, and each gets its own URL. They are not articles — they do not appear in section feeds or the main RSS.

## Built-in game types

| Type | Description |
|---|---|
| `word-scramble` | Unscramble words drawn from a topic list |
| `fifteen` | The classic 15-tile sliding puzzle |

Each type has a dedicated layout template that handles rendering and interaction. The Markdown file provides the metadata; for `word-scramble`, a JSON data file provides the word list.

## Create a game

Create a Markdown file at `src/games/{slug}/index.njk` (each game gets its own folder so static assets can sit alongside it):

```yaml
---
title: Freethinking Word Scramble
game_type: word-scramble
data: /assets/games/freethinking-words.json
description: Unscramble words drawn from rationalism, secularism, and the history of ideas.
date: 2026-04-18
---
```

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Shown in the games index and as the page title |
| `game_type` | Yes | One of `word-scramble`, `fifteen` |
| `data` | Yes for `word-scramble` | Path to the JSON data file |
| `description` | No | Short blurb shown in the games index card |
| `date` | Yes | Used for ordering in the index |

## Data file formats

**Word scramble** (`game_type: word-scramble`):
```json
{
  "words": ["rationalism", "empiricism", "skepticism", "deism", "humanism"]
}
```

The fifteen puzzle requires no data file — it generates a random solvable board automatically.

Additional game types (trivia, crossword) are on the roadmap but are not yet shipped.

## Games index

`/games/` lists all games newest-first with title, type badge, and description. Games do not appear in any RSS feed or section index.

## What to do next

- [Bookshelf](/docs/specialty-content/bookshelf/) for a curated reading list alongside your games.
- [Media](/docs/specialty-content/media/) for audio, video, and playlist content.
- [Custom layouts](/docs/customization/custom-layouts/) if you want to create a new game type.

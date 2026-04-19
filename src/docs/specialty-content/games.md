---
title: Games
subtitle: Interactive games that live alongside editorial content. Four built-in types ship with Project Broadsheet. Each game is a Markdown file wired to a JSON data source.
order: 8
updated: 2026-04-18
---

Games are a specialty content type designed for publications that want to offer readers something to do between articles. They live at `src/content/games/`, appear in the games index at `/games/`, and each gets its own URL. They are not articles — they do not appear in section feeds or the main RSS.

## Built-in game types

| Type | Description |
|---|---|
| `trivia` | Multiple-choice questions from a JSON question bank |
| `word-scramble` | Unscramble words drawn from a topic list |
| `fifteen` | The classic 15-tile sliding puzzle |
| `crossword` | A crossword grid with clues from a data file |

Each type has a dedicated layout template that handles rendering and interaction. The Markdown file provides the metadata; the JSON data file provides the content.

## Create a game

Create a Markdown file at `src/content/games/{slug}.md`:

```yaml
---
title: Freethinking Trivia
game_type: trivia
data: /assets/games/freethinking-trivia.json
description: Test your knowledge of rationalism, secularism, and the history of ideas.
date: 2026-04-18
---
```

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Shown in the games index and as the page title |
| `game_type` | Yes | One of `trivia`, `word-scramble`, `fifteen`, `crossword` |
| `data` | Yes (for trivia, word-scramble, crossword) | Path to the JSON data file |
| `description` | No | Short blurb shown in the games index card |
| `date` | Yes | Used for ordering in the index |

## Data file formats

**Trivia** (`game_type: trivia`):
```json
{
  "questions": [
    {
      "question": "Who wrote 'The Age of Reason'?",
      "options": ["Thomas Paine", "John Locke", "Voltaire", "David Hume"],
      "answer": 0,
      "explanation": "Thomas Paine published The Age of Reason in two parts, 1794 and 1795."
    }
  ]
}
```

**Word scramble** (`game_type: word-scramble`):
```json
{
  "words": ["rationalism", "empiricism", "skepticism", "deism", "humanism"]
}
```

**Crossword** (`game_type: crossword`):
```json
{
  "grid": [[...], ...],
  "clues": {
    "across": [{ "number": 1, "clue": "Father of modern philosophy", "answer": "DESCARTES" }],
    "down": [...]
  }
}
```

The fifteen puzzle requires no data file — it generates a random solvable board automatically.

## Games index

`/games/` lists all games newest-first with title, type badge, and description. Games do not appear in any RSS feed or section index.

## What to do next

- [Bookshelf](/docs/specialty-content/bookshelf/) for a curated reading list alongside your games.
- [Media](/docs/specialty-content/media/) for audio, video, and playlist content.
- [Custom layouts](/docs/customization/custom-layouts/) if you want to create a new game type.

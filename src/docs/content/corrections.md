---
title: Corrections
subtitle: Log factual corrections directly in an article's front matter. Project Broadsheet renders a corrections block at the bottom of the article and aggregates all corrections on a /corrections/ index page.
order: 11
updated: 2026-04-18
---

Corrections are a transparency feature. When an article contains a factual error and you fix it, you record the correction in the front matter. Project Broadsheet renders a dated corrections block at the bottom of the article so readers who saw the original version understand what changed. Every corrected article also appears in the publication-wide `/corrections/` log.

## Add a correction to an article

In the article's front matter, add a `corrections` array:

```yaml
---
title: City Council Votes on Housing Bill
corrections:
  - date: 2026-04-19
    description: An earlier version of this article stated the vote was 6-3. The vote was 7-2. The body has been updated.
  - date: 2026-05-01
    description: The article originally attributed a quote to Councilmember Rivera. The quote was from Councilmember Okafor. The byline note has been corrected.
---
```

Each entry in the `corrections` array has two fields:

| Field | Required | Notes |
|---|---|---|
| `date` | Yes | ISO date (YYYY-MM-DD). Displayed in human-readable format. |
| `description` | Yes | Plain prose explaining what was wrong and what was corrected. |

Multiple corrections are supported. They render in chronological order.

## What readers see

A corrections block appears at the bottom of the article, above the related articles section:

> **Corrections**
> *April 19, 2026* — An earlier version of this article stated the vote was 6-3. The vote was 7-2. The body has been updated.

The block uses a distinct visual treatment — a left border in a muted color — to separate it from the article body. It is always visible; there is no way for readers to dismiss or collapse it.

## The /corrections/ index

All articles with at least one correction appear at `/corrections/` in reverse chronological order by most recent correction date. Each entry shows the article title, a link to the article, and all corrections for that article.

This page is optional — if your publication does not publish corrections, you can remove the link from your navigation. The corrections blocks on individual articles are always rendered when the front matter contains them.

## Journalistic practice

A correction is appropriate when:
- A fact in the published article was wrong (name, number, date, attribution)
- A direct quote was misattributed
- The article's headline was misleading in a way that contradicts the body

A correction is generally not appropriate for:
- Typos or grammatical fixes that do not affect meaning
- Style or tone changes
- Adding new information that came to light after publication (use a note or follow-up article instead)

Write corrections in plain language. State what was wrong, then what is correct. Do not be vague ("A previous version of this article contained an error" says nothing useful).

## What to do next

- [Responses and backlinks](/docs/content/responses/) for linking follow-up articles to the original.
- [Revision history](/docs/customization/revision-history/) to surface the full GitHub edit history for an article.
- [Writing articles](/docs/content/write-an-article/) for the complete front matter reference.

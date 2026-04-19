---
title: Responses and backlinks
subtitle: Link an article as a direct response to another. Project Broadsheet renders a response banner on the new article and a backlinks section on the original, connecting them automatically.
order: 12
updated: 2026-04-18
---

The response system enables discourse across articles. When a writer publishes a response, rebuttal, or follow-up to another article, they declare that relationship in the front matter. Project Broadsheet handles the linking in both directions: a banner on the responding article points readers to the original, and the original article gains a backlinks section listing all responses.

## Mark an article as a response

In the responding article's front matter:

```yaml
---
title: "In Defense of Incrementalism: A Response"
author: jane-doe
responseTo: /opinion/the-case-against-incrementalism/
---
```

The `responseTo` value is the URL path of the article being responded to. It must be an article that exists in the same publication.

## What readers see

**On the responding article**, a banner appears between the article header and the body:

> **In response to:** [The Case Against Incrementalism](/opinion/the-case-against-incrementalism/) by Jon Ajinga

**On the original article**, a backlinks section appears at the bottom:

> **Responses to this article**
> - [In Defense of Incrementalism: A Response](/opinion/in-defense-of-incrementalism/) — Jane Doe, April 19, 2026

Both sections render automatically. No template edits are needed.

## Multi-level responses

An article can respond to another response, creating a chain:

```
Article A
└── Article B (responseTo: /path/to/a/)
    └── Article C (responseTo: /path/to/b/)
```

Each article shows only its direct parent as the `responseTo` link, and only its direct children in its backlinks. Deeper threading is navigated by following the chain.

## Cross-author and cross-section responses

Responses work across sections and authors. A response from the Opinion section to an Analysis piece by a different author is fully supported. The `responseTo` path is all that matters.

## Responses vs. series

| Feature | Series | Responses |
|---|---|---|
| Order | Defined, sequential | No defined order |
| Relationship | Parts of one piece | Separate takes on one topic |
| Authors | Can mix | Can mix |
| Discovery | Series nav block | Backlinks section |

Use series for multi-part investigations with a planned structure. Use responses for open-ended debate where multiple writers weigh in independently.

## What to do next

- [Series](/docs/content/series/) for ordered multi-part articles.
- [Corrections](/docs/content/corrections/) for updating factual errors in published articles.
- [Argument maps](/docs/content/argument-maps/) for structuring the thesis of opinion and analysis pieces.

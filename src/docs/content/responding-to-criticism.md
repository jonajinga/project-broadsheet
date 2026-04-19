---
title: Responding to criticism
subtitle: How to use the Responses content type to publish editorial replies, right-of-reply pieces, and formal responses to outside criticism — transparently and on the record.
order: 18
updated: 2026-04-18
---

Project Broadsheet's Responses content type is designed for a specific editorial situation: a subject, reader, or outside party disputes, challenges, or replies to something you've published, and you want to put that reply on the record in a structured, findable way.

This is distinct from a correction (factual error) or an editor's note (additional context). A response is a first-person reply from someone outside the publication, published under their name, linked to the original article.

## When to use a response

- A public official replies to your coverage of their agency.
- An organization disputes a finding in an investigative piece.
- A subject of a profile writes a rebuttal.
- A reader writes a substantive letter that engages directly with a published article.

Responses are not for comments, social media replies, or general reader feedback. They're for formal, on-the-record replies that you've agreed to publish.

## Create a response

Responses live in `src/responses/`. Create a Markdown file:

```
src/responses/city-official-reply.md
```

With front matter:

```yaml
---
title: A Response to "City Council Approves Rezoning Plan"
respondent: Director Jane Smith, City Planning Department
respondentRole: Director, City Planning Department
relatedArticle: /news/city-council-rezoning-plan/
date: 2026-04-20
summary: Director Smith disputes the characterization of the council vote and clarifies the department's position on the proposed zoning changes.
---
```

The body of the file is the respondent's reply, written in <span class="g-term" data-term="Markdown">Markdown</span>.

## Front matter fields

| Field | Required | Purpose |
|---|---|---|
| `title` | Yes | Page title; typically "A Response to [Original Article Title]" |
| `respondent` | Yes | The person or organization replying |
| `respondentRole` | No | Their title or affiliation |
| `relatedArticle` | Yes | URL of the article being responded to |
| `date` | Yes | Publication date of the response |
| `summary` | Yes | One-sentence summary for indexes and meta description |

## Editorial principles

**Verify the respondent.** Confirm you're publishing a reply from who they claim to be. Don't publish anonymous responses in this format.

**Don't edit for substance.** Light copy-editing (spelling, punctuation) is acceptable. Removing arguments or changing meaning is not. If you can't publish the response as written, decline it — don't publish a sanitized version without disclosing the changes.

**Add an editorial note if needed.** You can prepend or append an italicized editor's note below the front matter block:

```
*Editor's note: This response was submitted by Director Smith on April 18, 2026, in reply to coverage published April 15. It has been lightly edited for spelling and formatted for the web.*
```

**Link from the original article.** After publishing the response, edit the original article to link to it. Project Broadsheet doesn't do this automatically — it requires a manual front matter addition.

In the original article's front matter:

```yaml
relatedResponses:
  - /responses/city-official-reply/
```

## Corrections vs. responses

A correction fixes a factual error made by the publication. A response gives the other side a platform. They're not interchangeable. If a response reveals a factual error, publish both: correct the original article and publish the response.

See [Corrections](/docs/content/corrections/) for the correction workflow.

## What to do next

- [Corrections](/docs/content/corrections/) — for factual errors in published articles.
- [Source documents](/docs/content/documents/) — for primary documents cited in your reporting.
- [Argument maps](/docs/content/argument-maps/) — for structured presentation of contested claims.

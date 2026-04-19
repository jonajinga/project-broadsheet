---
title: Argument maps
subtitle: Add a structured visual summary of a thesis, its premises, and conclusion to any opinion or analysis article. Argument maps render above or below the article body without replacing the prose.
order: 14
updated: 2026-04-18
---

An argument map is a structured breakdown of the logical claim an opinion or analysis piece makes. It names the thesis, lists the supporting premises, and states the conclusion. Project Broadsheet renders it as a visual component that appears alongside the article — a quick-read summary for readers who want the argument before or after the full text, or who are skimming.

Argument maps are optional. They do not replace the prose; they supplement it.

## Add an argument map to an article

In the article's front matter:

```yaml
---
title: "The Case for Universal Basic Income"
argument_map:
  thesis: Unconditional cash transfers to all citizens are a more effective anti-poverty tool than means-tested benefits.
  premises:
    - Administrative overhead in means-tested programs consumes 20-30% of their budgets.
    - Unconditional transfers eliminate the welfare trap that discourages low-income workers from taking jobs.
    - Pilot programs in Finland, Kenya, and Stockton showed no significant reduction in labor force participation.
    - Cash gives recipients agency to address their specific circumstances rather than prescribing solutions.
  conclusion: Replacing the current patchwork of means-tested programs with a universal cash transfer would reduce poverty more effectively at comparable or lower cost.
---
```

| Field | Required | Notes |
|---|---|---|
| `argument_map` | Yes (to enable) | The parent key. Omit entirely if you don't want a map. |
| `thesis` | Yes | The central claim in one or two sentences. |
| `premises` | Yes | An array of supporting points. 3–6 works best visually. |
| `conclusion` | Yes | The claim the premises support. Can restate or extend the thesis. |

## What readers see

The argument map renders as a structured block:

```
THESIS
Unconditional cash transfers to all citizens are a more effective anti-poverty
tool than means-tested benefits.

PREMISES
1. Administrative overhead in means-tested programs consumes 20–30% of budgets.
2. Unconditional transfers eliminate the welfare trap.
3. Pilots in Finland, Kenya, and Stockton showed no labor force decline.
4. Cash gives recipients agency over their circumstances.

CONCLUSION
Replacing the current patchwork with universal cash transfers would reduce
poverty more effectively at comparable or lower cost.
```

The map is visually separated from the article body with a distinct background. By default it appears before the article body. To place it after, add `argument_map_position: after` to the front matter.

## When to use argument maps

Argument maps work well for:
- Opinion columns making a specific policy claim
- Analysis pieces building a case from evidence
- Response articles where the structure of the rebuttal matters

They are less suited to:
- Reported news articles (which present facts, not arguments)
- Personal essays with a more exploratory structure
- Reviews (which have their own structured metadata)

## Transparency value

Argument maps force writers to state their thesis explicitly before hiding it in 1,500 words of prose. Readers who disagree with the conclusion can immediately identify which premise they dispute. This is useful for publications that value rigorous debate over persuasion-by-opacity.

## What to do next

- [Responses and backlinks](/docs/content/responses/) for linking rebuttal articles to the original.
- [Reviews](/docs/specialty-content/reviews/) for the structured metadata system used in review articles.
- [Writing articles](/docs/content/write-an-article/) for the full front matter reference.

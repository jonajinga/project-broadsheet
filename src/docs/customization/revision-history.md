---
title: Revision history
subtitle: Connect your publication to its GitHub repository so readers can see the full edit history of any article, linked directly to GitHub commits.
order: 8
updated: 2026-04-18
---

When a GitHub repository is configured, each article in Project Broadsheet shows a "Revision history" link in the article footer. Clicking it opens the GitHub commit history for that file, showing every change since the article was first published — who made it, when, and what the commit message said.

This is a transparency feature: it shows readers that the article has been updated, what changed, and when. It pairs naturally with the [corrections](/docs/content/corrections/) system, which logs what changed and why in human-readable prose.

## Configure the repository

In `src/_data/site.json` (or `meta.js`), add a `repo` block:

```json
"repo": {
  "owner": "jonajinga",
  "name": "the-freethinking-times",
  "branch": "main",
  "contentPath": "src/content"
}
```

| Field | Required | Notes |
|---|---|---|
| `owner` | Yes | GitHub username or organization that owns the repo |
| `name` | Yes | Repository name |
| `branch` | Yes | The branch that production content is published from (usually `main`) |
| `contentPath` | Yes | The path within the repo where article files live. Used to construct the file URL. |

On the next build, the `window.__repo` object is injected into each page, and `revision-history.js` constructs the GitHub history URL for the current article.

## What the link looks like

Each article footer shows:

> [View revision history on GitHub →](https://github.com/owner/repo/commits/main/src/content/news/article-slug.md)

The link goes directly to the GitHub commits page for that file. Readers do not need a GitHub account to view commit history on a public repository.

## Requiring a public repository

The revision history link points to `github.com`. If the repository is private, the link will return a 404 for readers who are not authenticated with GitHub and authorized on the repo. Only use this feature with a public repository.

If your repository contains drafts, editorial notes, or other content you do not want public, keep unpublished files in a separate private branch or repository and only merge to the public branch when ready to publish.

## Disabling for specific articles

To hide the revision history link on a specific article, add to its front matter:

```yaml
noRevisionHistory: true
```

This is useful for articles that were migrated from another platform and have a noisy import commit history that would be confusing to readers.

## Disabling globally

Remove the `repo` block from `site.json`. Without it, `window.__repo` is not set and no revision history links are rendered anywhere.

## What to do next

- [Corrections](/docs/content/corrections/) for the human-readable correction log that pairs with revision history.
- [Responses and backlinks](/docs/content/responses/) for connecting articles that update or respond to earlier pieces.
- [GitHub repository setup](/docs/deployment/ci-cd/) for connecting your site's build pipeline to GitHub Actions.

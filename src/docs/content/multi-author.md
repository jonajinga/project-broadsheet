---
title: Multi-author publications
subtitle: How to run a publication with multiple contributors — setting up author profiles, assigning bylines, and managing the Git workflow for a team.
order: 17
updated: 2026-04-18
---

Project Broadsheet supports multiple authors out of the box. Each author gets a profile page, a byline on every article they write, and an archive of their published work. The system is driven by a single data file and requires no database.

## Add an author

Open `src/_data/authors.js` and append an entry:

```js
export default {
  "jane-doe": {
    name: "Jane Doe",
    role: "Staff Reporter",
    bio: "Jane covers city government and housing policy.",
    email: "jane@example.com",
    avatar: "/assets/img/authors/jane-doe.jpg"
  },
  "alex-kim": {
    name: "Alex Kim",
    role: "Editor",
    bio: "Alex edits the news desk and contributes analysis.",
    email: "alex@example.com",
    avatar: "/assets/img/authors/alex-kim.jpg"
  }
};
```

The key (`jane-doe`) is the slug used in article <span class="g-term" data-term="front matter">front matter</span> and in the author's URL: `/authors/jane-doe/`.

Place avatar images in `src/assets/img/authors/`. Recommended size: 400×400px.

## Assign a byline

In any article's front matter, set the `author` field to the author's slug:

```yaml
---
title: City Council Approves Rezoning Plan
section: news
date: 2026-04-18
author: jane-doe
---
```

The author's name, role, and avatar appear in the article's byline. The byline links to the author's profile page.

## Co-bylines

For articles with multiple contributors, use the `authors` array (plural):

```yaml
---
title: Investigation: Water Quality Report
section: news
date: 2026-04-18
authors:
  - jane-doe
  - alex-kim
---
```

Both names appear in the byline, each linking to their own profile.

## Author profile pages

Each entry in `authors.js` automatically generates a profile page at `/authors/{slug}/` listing all published articles by that author. No template changes needed.

## Git roles for a team

There's no permissions system built into the framework — access control lives entirely in <span class="g-term" data-term="GitHub">GitHub</span>:

| Role | GitHub permission | What they can do |
|---|---|---|
| Reporter | Write | Push branches, open PRs |
| Editor | Write | Review and merge PRs |
| Managing editor | Admin | Manage branch protection rules |

**Recommended setup for a small team:**

1. Require pull request reviews before merging to `main` (Settings → Branches → Branch protection rules).
2. Assign at least one required reviewer (the editor or managing editor).
3. Reporters open PRs when articles are ready; editors approve and merge.

This mirrors the editorial workflow used at professional outlets and keeps a full revision history on every piece.

## Contributor accounts

Each contributor needs a GitHub account. Invite them to the repository under Settings → Collaborators with **Write** access. They fork or clone the repo, create a branch for each article, and submit pull requests.

## What to do next

- [Editorial workflow](/docs/content/editorial-workflow/) — the full Git-based draft-to-publish cycle.
- [Author front matter](/docs/content/authors/) — all available fields for author profiles.
- [Write an article](/docs/content/write-an-article/) — the per-article front matter reference.

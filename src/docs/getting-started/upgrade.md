---
title: Upgrade Project Broadsheet
subtitle: How to pull upstream improvements into your publication without overwriting your customizations.
order: 6
updated: 2026-04-18
---

Project Broadsheet is a forked repository, not an installed package. That means upgrades are a <span class="g-term" data-term="Git">Git</span> operation: you pull changes from the upstream framework repository into your own fork. Your content and customizations live alongside the framework code, so the process requires some care.

## Set up the upstream remote (one time)

If you forked the repository through GitHub's web UI, your local clone doesn't automatically know about the original. Add it once:

```bash
git remote add upstream https://github.com/jonajinga/broadsheet.git
git remote -v
```

You should see two remotes: `origin` (your fork) and `upstream` (the framework source).

## Check what has changed

Before merging anything, see what's new upstream:

```bash
git fetch upstream
git log HEAD..upstream/main --oneline
```

This lists every commit in the upstream `main` branch that isn't in your fork yet. Cross-reference with the [changelog](/changelog/) to understand what each release contains before pulling it in.

## Merge upstream changes

```bash
git checkout main
git merge upstream/main
```

Git merges the upstream commits into your branch. If the framework touched files you haven't modified, the merge completes automatically. If both you and upstream edited the same file, Git will flag a conflict.

## Resolve conflicts

Conflicts appear in the terminal output and inside the affected files as markers:

```
<<<<<<< HEAD
your version of the line
=======
upstream version of the line
>>>>>>> upstream/main
```

Open each conflicted file, decide which version (or combination) to keep, remove the markers, then stage and commit:

```bash
git add src/path/to/file.njk
git commit -m "chore: merge upstream v1.x.x"
```

## What files are safe to customize

Files you can freely edit without risking merge conflicts in the future:

- `src/_data/meta.js` — your publication's identity
- `src/_data/nav.js` — your navigation
- `src/assets/css/tokens.css` — your design tokens
- `src/content/**` — all your articles, reviews, and documents
- `src/authors/**` — your author profiles

Files the framework updates regularly (handle carefully):

- `src/_includes/layouts/*.njk` — layout templates
- `src/_includes/partials/*.njk` — shared partials
- `src/assets/css/components/*.css` — component styles
- `eleventy.config.js` — build configuration

If you need to change a layout or partial, consider wrapping your change in a comment so you can find it easily during a future merge.

## What to do next

- Read the [changelog](/changelog/) before every upgrade to understand what changed and whether it affects your customizations.
- [Undo and rollback](/docs/troubleshooting/undo-and-rollback/) if a merge goes wrong and you need to recover.

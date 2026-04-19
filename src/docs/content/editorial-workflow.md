---
title: Editorial workflow
subtitle: How to run a multi-step publish cycle using Git — from draft to editor review to live article — the same way professional newsrooms use version control.
order: 16
updated: 2026-04-18
---

Project Broadsheet is built on <span class="g-term" data-term="Git">Git</span>, which means your publishing workflow is a version-control workflow. Every article is a file, every revision is a commit, and every editorial review is a pull request. This isn't a limitation — it's the model that major newsrooms use to manage collaborative publishing at scale.

## The basic cycle

1. **Create a branch** for the article.
2. **Write the draft** as a <span class="g-term" data-term="Markdown">Markdown</span> file with `draft: true` in the front matter.
3. **Open a pull request** when the draft is ready for review.
4. **Review and revise** using GitHub's comment and suggestion tools.
5. **Merge the pull request** to publish.

The article goes live the moment the host (Cloudflare Pages, Netlify, or Vercel) finishes its automatic build — typically under a minute after merge.

## Step 1 — Create an article branch

```bash
git checkout -b article/city-council-vote
```

Name the branch something descriptive. `article/` as a prefix keeps article branches grouped and easy to identify.

## Step 2 — Write the draft

Create the file in the appropriate section folder:

```
src/content/news/city-council-vote.md
```

Set `draft: true` so the article builds but doesn't appear in section indexes or <span class="g-term" data-term="RSS">RSS</span> feeds:

```yaml
---
title: City Council Votes to Rezone Downtown District
section: news
date: 2026-04-18
author: jane-doe
draft: true
---
```

Write the body below the closing `---`.

## Step 3 — Commit and push

```bash
git add src/content/news/city-council-vote.md
git commit -m "draft: city council vote article"
git push -u origin article/city-council-vote
```

## Step 4 — Open a pull request

On <span class="g-term" data-term="GitHub">GitHub</span>, open a pull request from your article branch to `main`. The PR description is a good place to include context for the editor: story background, sources, anything that didn't make it into the article itself.

If your host is Cloudflare Pages or Netlify, the PR triggers a preview deployment at a unique URL. Share that link with editors so they can read the article as it will appear to readers.

## Step 5 — Review and revise

Editors can leave inline comments on specific lines of the Markdown file. GitHub's **Suggest a change** feature lets reviewers propose exact edits, which the writer can accept with one click.

For each round of revisions:

```bash
git add src/content/news/city-council-vote.md
git commit -m "revise: address editor notes"
git push
```

The preview URL updates automatically on each push.

## Step 6 — Publish

When the article is approved, remove `draft: true` (or delete the line) and push a final commit:

```bash
git commit -am "publish: city council vote"
git push
```

Then merge the pull request. The build runs, and the article appears on the live site.

## Scheduling a future publish date

Set a `date` in the future. The article file will exist in <span class="g-term" data-term="Git">Git</span> and build into the site, but Eleventy's date filtering will suppress it from indexes until the publish date passes — as long as `draft: true` is removed and the date is set correctly.

See [Drafts and scheduling](/docs/content/drafts-and-scheduling/) for the full details.

## Using Decap CMS for editorial workflow

If your publication uses Decap CMS, the same PR-based workflow runs entirely from the browser. Writers never touch a terminal or a Markdown file directly.

### The editorial board

Decap's editorial board (available at `/admin/#/workflow`) has three columns:

- **Drafts** — articles saved but not yet submitted for review.
- **In Review** — articles the writer has flagged as ready for an editor.
- **Ready to Publish** — articles approved and queued for merge.

Writers drag cards between columns. Editors work on GitHub. The board is a visual layer on top of pull requests; every card corresponds to a branch.

### What happens when a writer saves

When a writer clicks **Save** inside Decap, the CMS:

1. Creates a branch named `cms/{section}/{slug}` (e.g. `cms/news/city-council-vote`).
2. Commits the Markdown file to that branch.
3. Opens a draft pull request on GitHub targeting `main`.

Nothing is published. The article is a PR until an editor merges it.

### Preview deployments

Cloudflare Pages automatically builds a preview deployment for every open PR. The preview URL (e.g. `https://abc123.your-pub.pages.dev`) appears as a status check link on the GitHub PR page. Editors open that link to read the article exactly as it will appear to readers before approving.

The **Check for Preview** button inside Decap's editorial board does **not** work on Cloudflare Pages — it is Netlify-specific. Always use the preview link on the GitHub PR page instead.

### Draft visibility in preview deployments

By default, articles with `draft: true` in their front matter are excluded from all builds, including Cloudflare Pages preview deployments. To make draft articles visible in previews so editors can review them before approval, set `SHOW_DRAFTS=1` as an environment variable in Cloudflare Pages under Settings → Environment Variables, scoped to **Preview** only. Production builds are unaffected.

See [Drafts and scheduling](/docs/content/drafts-and-scheduling/) for the full details and the required code configuration.

### Writer workflow

1. Go to `/admin/` and sign in (Cloudflare Zero Trust will prompt for your email).
2. Click the section in the left sidebar (e.g. News, Opinion).
3. Click **New [Section]**.
4. Fill in the form: Title, Description, Author, Date, Body.
5. Click **Save**. Decap creates a draft branch and opens a PR on GitHub.
6. Optionally drag the card from **Drafts** to **In Review** to signal the article is ready for an editor.

### Editor workflow

1. Open the pull request on GitHub (linked from the Decap board or found directly in the repo).
2. Click the Cloudflare Pages preview URL in the PR's status checks to read the rendered article.
3. Leave inline comments or a review on GitHub if revisions are needed.
4. When satisfied, approve and merge the PR.
5. Cloudflare Pages builds the production site. The article goes live within 2–3 minutes of merge.

### Role summary

| Role | What they can do |
|---|---|
| Writer | Creates and edits articles, saves drafts, moves cards on the editorial board. Cannot merge PRs to main. |
| Editor | Reviews PRs on GitHub, leaves comments, approves, and merges. Triggers the production build. |
| Admin | Manages Cloudflare and GitHub settings. Repo owners can bypass branch protection by default; enable "Do not allow bypassing" in the GitHub ruleset to enforce reviews for everyone. |

## What to do next

- [Multi-author publications](/docs/content/multi-author/) — assigning roles and managing contributors.
- [Drafts and scheduling](/docs/content/drafts-and-scheduling/) — keeping articles hidden until a specific date.
- [Undo and rollback](/docs/troubleshooting/undo-and-rollback/) — reverting a published article or recovering a deleted file.

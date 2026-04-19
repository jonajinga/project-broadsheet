---
title: Drafts and scheduling
subtitle: How to mark articles as drafts so they stay out of production, how future-dated articles behave, and a practical publishing workflow for teams.
order: 9
updated: 2026-04-18
---

Project Broadsheet has two mechanisms for controlling when an article goes live: the `draft` flag and the `date` field. Neither requires a database or a publish button; the build itself decides what to include.

## Draft articles

Add `draft: true` to an article's front matter to exclude it from production:

```yaml
---
title: "Work in progress"
date: 2026-04-18
section: opinion
draft: true
---
```

- Draft articles **do not appear** in production builds (`npm run build`).
- Draft articles **do appear** in local development (`npm start` / `npm run dev`), so you can preview your work before publishing.
- Drafts are excluded from the sitemap, RSS feeds, section indexes, and Pagefind search index.

To publish a draft, remove the `draft: true` line (or set it to `false`) and deploy.

## Future-dated articles

Setting a future date does **not** automatically hide an article. Project Broadsheet builds a static site and has no concept of "now" at serve time, so a date of `2026-12-31` does not prevent the article from going live the moment you deploy.

To hold a piece until a specific date:

1. Keep `draft: true` while you write and edit.
2. On publish day, remove the draft flag and deploy.

If you want automatic future scheduling, consider setting up a [CI/CD pipeline](/docs/deployment/ci-cd/) that triggers a rebuild on a schedule (e.g., daily at 08:00), so you can queue articles by setting a future date and pairing it with an `if_published_after` check in your Eleventy config.

## A practical publishing workflow

Most solo publishers and small teams find this pattern works well:

1. **Create the file** under `src/content/{section}/` with `draft: true`.
2. **Write and revise** locally, previewing with `npm start`.
3. **Commit the draft** to your repository. It will deploy but stay hidden from readers.
4. **When ready**, remove `draft: true`, commit, and push. The next build publishes it.

For teams using GitHub, keep drafts on a `drafts` branch and merge to `main` when an article is ready to publish.

## Drafts in preview deployments (Decap CMS)

By default, `draft: true` articles are excluded from all builds — including Cloudflare Pages preview deployments triggered by pull requests. This means editors reviewing a PR cannot see the article in the preview URL unless the draft flag is removed first.

To make draft articles visible in preview deployments without affecting production, set `SHOW_DRAFTS=1` as an environment variable in Cloudflare Pages:

1. Go to your Cloudflare Pages project → **Settings** → **Environment Variables**.
2. Add `SHOW_DRAFTS` with a value of `1`.
3. Set the scope to **Preview** only. Do not add it to the Production environment.

Project Broadsheet's configuration already handles this in two places — no code changes are needed, just the environment variable:

- In `src/content/content.11tydata.js`, the draft exclusion check reads:
  ```js
  if (data.draft && process.env.SHOW_DRAFTS !== "1") return true;
  ```
- In `.eleventy.js`, collection filters include:
  ```js
  (!item.data.draft || process.env.SHOW_DRAFTS === "1")
  ```

With `SHOW_DRAFTS=1` set for Preview, editors can open the Cloudflare Pages preview URL on a PR and read the full draft article. Production builds remain unaffected — `SHOW_DRAFTS` is only present in the Preview environment.

## Listing drafts locally

There is no built-in "drafts dashboard." To see what is currently marked as a draft, run:

```bash
grep -rl "draft: true" src/content/
```

This lists every file with the draft flag set.

## What to do next

- [Write your first article](/docs/content/write-an-article/) for the full file-creation workflow.
- [Front matter reference](/docs/content/front-matter-reference/) for all available fields.
- [CI/CD with GitHub Actions](/docs/deployment/ci-cd/) for scheduled publishing.

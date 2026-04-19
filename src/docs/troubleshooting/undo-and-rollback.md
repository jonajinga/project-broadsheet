---
title: Undo and rollback
subtitle: How to unpublish an article, revert a mistake, restore a deleted file, and re-deploy after a problem.
order: 7
updated: 2026-04-18
---

Every change you make to a Project Broadsheet publication is a Git commit. That means every change is reversible.

## Unpublish an article

You have two options depending on whether you want to keep the file.

**Hide it with `draft: true`** — the article stays in your repository but disappears from every index, feed, and sitemap:

```yaml
---
title: My Article
draft: true
---
```

**Delete the file** — remove the Markdown file from `src/content/`. Git tracks the deletion. The article is removed from the next build. The URL returns a 404.

If readers have bookmarked the URL, consider leaving a redirect in place rather than a hard 404. Add a redirect rule in Cloudflare Pages under your project settings.

## Revert a commit

If your last commit introduced a problem, the safest way to undo it is `git revert`. This creates a new commit that reverses the previous one — it does not rewrite history.

```bash
git revert HEAD
git push
```

Cloudflare Pages detects the push and rebuilds. Your live site is back to its previous state within 2–3 minutes.

`git revert` is safe because it adds to history rather than erasing it. Prefer it over `git reset` in almost every case.

## Reset to an earlier state (destructive)

If you need to go back further than one commit, use `git reset`. **This rewrites history and cannot be undone.**

```bash
# Find the commit you want to go back to
git log --oneline

# Reset to that commit (keeps your files unchanged, unstages the commits)
git reset --soft <commit-hash>

# Or discard everything after that commit entirely
git reset --hard <commit-hash>

# Force push to update the remote
git push --force
```

Only use `git reset --hard` if you are certain you do not need the work you are discarding.

## Restore a deleted file

If you accidentally deleted a file and have already committed the deletion:

```bash
# Find the commit before the deletion
git log --oneline -- src/content/news/my-article.md

# Restore the file from that commit
git checkout <commit-hash>^ -- src/content/news/my-article.md

# Commit the restoration
git add src/content/news/my-article.md
git commit -m "restore: recover my-article.md"
git push
```

## Re-deploy after a mistake

Cloudflare Pages rebuilds automatically on every push. If a bad deploy made it to production:

1. Fix the problem locally
2. Commit and push the fix — Cloudflare builds immediately
3. If you need to roll back to a previous successful build, go to Cloudflare Pages → your project → **Deployments** → find a successful build → **Rollback to this deployment**

The Cloudflare rollback instantly serves the previous build without a new rebuild.

## What to do next

- [Build errors](/docs/troubleshooting/build-errors/) if your site is failing to build after a change.
- [Deploy failures](/docs/troubleshooting/deploy-failures/) for Cloudflare-specific deployment problems.
- [Drafts and scheduling](/docs/content/drafts-and-scheduling/) for controlling article visibility without deleting content.

---
title: CSS and images not updating
subtitle: Why CSS changes and new images sometimes don't appear after a deploy, and how to force browsers and CDNs to serve the latest version.
order: 6
updated: 2026-04-18
---

Static assets — stylesheets, images, and scripts — are aggressively cached by browsers and CDNs. When a change does not appear after a deploy, a cache is almost always the reason.

---

## CSS changes don't appear after a deploy

Project Broadsheet appends a `?v=` version query string to the stylesheet link:

```html
<link rel="stylesheet" href="/assets/css/global.css?v=1.0.0">
```

The version value comes from `meta.version` in `src/_data/meta.js`. When the version number changes, browsers treat it as a new URL and fetch the updated stylesheet.

**Fix:** Bump `version` in `meta.js` whenever you make a significant CSS change, then redeploy:

```js
version: "1.0.1",  // was "1.0.0"
```

**Quick local test:** Hard-refresh with Cmd+Shift+R (macOS) or Ctrl+Shift+R (Windows/Linux) to bypass the browser cache and confirm the change is present in the built file.

---

## CSS changes appear locally but not in production

**Check 1 — the change is in the build output:**

```bash
npm run build
grep "your-new-rule" _site/assets/css/global.css
```

If the rule is absent from `_site/`, it may be in a CSS partial that is not included in the concatenation order. Open `eleventy.config.js` and confirm your partial file is listed in the CSS build step.

**Check 2 — the deploy actually ran:**

Confirm the hosting dashboard shows a completed deploy *after* your push. If the deploy triggered before your push completed (rare), trigger a manual redeploy.

**Check 3 — Cloudflare cache:**

Cloudflare caches static assets at the edge. A new deploy purges HTML pages, but assets at stable URLs (like `/assets/css/global.css`) may be cached independently. Bumping the `?v=` version string in `meta.js` forces a new URL and bypasses the CDN cache.

---

## A new image does not appear after deploy

**Check 1 — the file is committed:**

```bash
git status src/assets/img/
```

Untracked image files will not be deployed. Add and commit the image:

```bash
git add src/assets/img/my-new-image.jpg
git commit -m "add article cover image"
git push
```

**Check 2 — the path in front matter or Markdown is correct:**

Image paths must start with `/assets/img/` (absolute from the site root). Relative paths like `../img/` do not work in Eleventy's output structure.

Correct:

```yaml
cover_image: "/assets/img/covers/my-article.jpg"
```

**Check 3 — the file is not in `.gitignore`:**

Run `git check-ignore -v src/assets/img/my-new-image.jpg`. If it is ignored, remove the rule from `.gitignore`.

---

## Images display locally but show broken in production

This almost always means the file path works on your machine (case-insensitive filesystem) but fails in Linux-based CI (case-sensitive filesystem).

**Symptom:** `/assets/img/covers/MyArticle.jpg` works on macOS but breaks in production.

**Fix:** Use all-lowercase filenames for every asset. Rename the file, update the reference, commit the rename:

```bash
git mv src/assets/img/covers/MyArticle.jpg src/assets/img/covers/myarticle.jpg
```

---

## OG / social preview images are stale

Social platforms (LinkedIn, X/Twitter, Slack) cache Open Graph images aggressively — sometimes for days.

**Force a re-fetch:**

- **LinkedIn:** Use the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and click **Inspect**.
- **X/Twitter:** Use the [Card Validator](https://cards-dev.twitter.com/validator).
- **Facebook/Meta:** Use the [Sharing Debugger](https://developers.facebook.com/tools/debug/).

Paste the article URL into the relevant tool to clear the cache.

---

## What to do next

- [Images in articles](/docs/content/images/) for sizing, format, and storage guidelines.
- [Performance and optimization](/docs/deployment/performance/) for image compression tips.
- [Deploy failures](/docs/troubleshooting/deploy-failures/) if the issue is in the build rather than the cache.

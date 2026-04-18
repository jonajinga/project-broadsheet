---
title: Deploy failures
subtitle: How to diagnose and fix the most common reasons a Cloudflare Pages or Netlify build fails, including Node version mismatches, missing environment variables, and Pagefind errors.
order: 4
updated: 2026-04-18
---

A deploy failure means the build completed on your machine but failed in CI. The cause is almost always an environment difference — Node version, missing environment variable, or a file that was not committed. Start with the build log in your hosting dashboard.

## How to read the build log

**Cloudflare Pages:** Open the Pages project → click the failing deployment → **View build log**.

**Netlify:** Open the site → **Deploys** tab → click the failing deploy → expand the log.

The last non-empty line before `Error` or `Failed` is usually the root cause.

---

## Node version mismatch

The most common cause of "works locally, fails in CI."

**Symptom:** The build log shows an error about unsupported syntax, missing `--experimental-vm-modules`, or a package that requires a newer engine.

**Fix:** Pin the Node version in your hosting dashboard.

- **Cloudflare Pages:** Settings → Environment variables → add `NODE_VERSION = 20`
- **Netlify:** Add a `.nvmrc` file at the repo root containing `20`, or set `NODE_VERSION = 20` in the environment variables panel

Confirm your local version with `node --version` and match it exactly.

---

## `npm ci` fails — missing package-lock.json

**Symptom:** `npm ci can only install packages when your package.json and package-lock.json are in sync`

**Fix:** Your `package-lock.json` was not committed. Run `npm install` locally, commit both `package.json` and `package-lock.json`, and push.

---

## Pagefind fails at the end of the build

Project Broadsheet runs Pagefind as an Eleventy `after` hook — it indexes `_site/` once the HTML is generated. If Pagefind has no files to index, the build may error.

**Symptom:** `Error: Could not find any HTML files in _site/`

**Fix:** Confirm `npm run build` (not `npm start`) is set as the build command in your dashboard. The dev server does not produce `_site/`.

**Symptom:** Pagefind exits with a permission error on Cloudflare Pages.

**Fix:** Ensure `package.json` does not invoke Pagefind with `sudo`. The `pagefind` binary must be executable; add `chmod +x node_modules/.bin/pagefind` before the Pagefind call if needed.

---

## Missing environment variable

**Symptom:** The build log shows `undefined` where a URL or key should appear, or a template throws `TypeError: Cannot read properties of undefined`.

**Fix:** Check `src/_data/meta.js` for any `process.env.VARIABLE` references. Every variable read from the environment at build time must be set in the hosting dashboard.

- **Cloudflare Pages:** Settings → Environment variables
- **Netlify:** Site configuration → Environment variables

The most common required variable is `SITE_URL` (used for canonical URLs and RSS feeds):

```
SITE_URL = https://yourdomain.com
```

---

## Build times out

Cloudflare Pages has a 20-minute build timeout; Netlify's free tier has 15 minutes.

**Symptom:** The build log ends abruptly with `Timeout` or `Build exceeded time limit`.

**Causes and fixes:**

- **Large image assets committed to the repo** — move images to a CDN or image host rather than committing them. Large binary files slow both clone and build times.
- **Pagefind indexing a very large archive** — Pagefind performance degrades above ~5,000 pages. Consider excluding low-value pages with `data-pagefind-ignore` attributes.
- **`npm install` instead of `npm ci`** — use `npm ci` for faster, reproducible installs in CI.

---

## The deploy succeeds but changes don't appear

**Symptom:** The hosting dashboard shows a successful deploy, but the live site still shows old content.

**Causes:**

1. **Cloudflare cache** — Cloudflare Pages has a global CDN cache. A new deploy automatically invalidates pages, but CDN propagation can take 30–60 seconds. Wait and hard-refresh.
2. **Browser cache** — try opening the URL in a private/incognito window.
3. **Wrong branch** — confirm the production branch in the dashboard is set to `main`, not another branch.

## What to do next

- [Environment variables](/docs/deployment/env-vars/) for the full list of build-time variables.
- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) for dashboard setup.
- [CI/CD with GitHub Actions](/docs/deployment/ci-cd/) for custom build pipelines.

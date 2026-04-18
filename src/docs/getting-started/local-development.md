---
title: Local development
subtitle: Run Project Broadsheet on your own machine with automatic browser reload. Covers the dev server, editing workflow, and the differences between development and production builds.
order: 3
updated: 2026-04-17
---

Once Project Broadsheet is installed, you write and preview everything locally before pushing anything to a live server. The dev server watches your files, rebuilds on every change, and reloads the browser for you.

## Start the dev server

```bash
npm start
```

This runs <span class="g-term" data-term="Eleventy">Eleventy</span> in serve mode. It listens on `http://localhost:8080` and triggers a rebuild every time you save a file inside `src/`.

## What the dev server watches

Project Broadsheet's config registers watch targets for CSS and JS so changes to design tokens or scripts rebuild just like content changes:

- All `.md`, `.njk`, and `.11ty.js` files in `src/`
- Every file in `src/assets/css/` and `src/assets/js/`
- Every data file in `src/_data/`

Passthrough copy files (images in `src/assets/img/`, the `robots.txt`, etc.) are copied to the output folder on change.

## What the dev server does NOT do

Two things are skipped in dev mode for speed and are only applied to the production build:

- **<span class="g-term" data-term="Pagefind">Pagefind</span> search index.** The index regenerates only on `npm run build`, not on `npm start`.
- **HTML minification.** The `@sardine/eleventy-plugin-tinyhtml` minifier runs only in production.

Both are deliberate, both save time during iteration.

## Produce a production build

```bash
npm run build
```

The production build writes to `_site/`. Every HTML file is minified, every asset is copied, and Pagefind indexes the result. This is exactly what <span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span> or any other host runs on deploy.

## Typical editing workflow

1. Start `npm start` in a terminal and leave it running.
2. Open your editor on the project folder.
3. Edit a Markdown file in `src/content/`, a data file in `src/_data/`, or a stylesheet in `src/assets/css/`.
4. Save. Your browser refreshes within half a second.
5. When the article looks right, run `git commit` and `git push`. The deploy pipeline picks it up from there.

## What to do next

- [Understand the project structure](/docs/getting-started/project-structure/) so every folder has a clear purpose.
- [Configure site.json](/docs/content/site-config/) with your publication's name and sections.
- [Write your first article](/docs/content/write-an-article/).

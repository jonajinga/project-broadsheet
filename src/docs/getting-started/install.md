---
title: Install Project Broadsheet
subtitle: Download the source, install its dependencies, and start a local preview server. The entire process takes 3–5 minutes on a modern machine.
order: 1
updated: 2026-04-17
---

Project Broadsheet is a <span class="g-term" data-term="static site">static site</span> built with <span class="g-term" data-term="Eleventy">Eleventy</span>, so the only prerequisite is Node.js, the JavaScript runtime used to run the build. If you haven't installed Node yet, download it from [nodejs.org](https://nodejs.org). Version 18 or later is required.

If you prefer not to use the terminal at all, see [Using Project Broadsheet without the terminal](/docs/getting-started/no-terminal/) for a browser-only setup path.

## Clone the repository

```bash
git clone https://github.com/jonajinga/broadsheet.git my-publication
cd my-publication
```

Cloning copies the full source code of Project Broadsheet onto your machine. Rename `my-publication` to whatever fits your project, this becomes the folder you work in.

## Install dependencies

```bash
npm install
```

`npm install` reads the `package.json` file and downloads the supporting packages Project Broadsheet needs: Eleventy, <span class="g-term" data-term="Pagefind">Pagefind</span> (the search index builder), an RSS plugin, an HTML minifier, and a handful of utilities. None of them run in production, they only build the site.

Expect about a minute on a typical home connection.

## Run the preview server

```bash
npm start
```

This starts a local preview server with automatic reloading. Open <http://localhost:8080> in your browser. When you edit a file, the browser refreshes on its own so you can see changes immediately.

## Build for production

```bash
npm run build
```

A production build writes the finished website to a folder called `_site/`. That folder contains every page as a plain HTML file, every stylesheet, every image, and the Pagefind search index. You can upload `_site/` to any static host (<span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span>, Netlify, Vercel, even a USB drive served as a web folder).

## What to do next

- [After your first deploy](/docs/getting-started/after-first-deploy/) for a 10-step checklist to get the publication ready for readers.
- [Configure site.json](/docs/content/site-config/) to set your publication name, editorial sections, and integrations.
- [Write your first article](/docs/content/write-an-article/) to create your first <span class="g-term" data-term="Markdown">Markdown</span> file.
- No terminal? [Use Pages CMS](/docs/integrations/pages-cms/) for browser-based editing.

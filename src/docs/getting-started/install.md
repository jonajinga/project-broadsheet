---
title: Install Project Broadsheet
subtitle: Clone the repo, install dependencies, run the dev server.
order: 1
updated: 2026-04-17
---

Project Broadsheet runs on Node.js 18 or later. If you haven't installed Node, download it from [nodejs.org](https://nodejs.org).

## Clone the repository

```bash
git clone https://github.com/jonajinga/broadsheet.git my-publication
cd my-publication
```

Rename the folder to whatever fits your project.

## Install dependencies

```bash
npm install
```

This pulls down Eleventy, Pagefind, the RSS plugin, the HTML minifier, and a few small utilities. The install takes about a minute on a modern connection.

## Run the dev server

```bash
npm start
```

Open <http://localhost:8080> in your browser. You should see the sample publication with hot reload — edit any file and the browser refreshes automatically.

## Build for production

```bash
npm run build
```

The full site is written to `_site/`, including the Pagefind search index. Upload that folder to any static host.

## What's next

- [Configure site.json](/docs/content/site-config/) to set your publication name, sections, and integrations.
- [Edit tokens.css](/docs/design/tokens/) to change the brand.
- [Write your first article](/docs/content/write-an-article/).

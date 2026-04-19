---
title: Project structure
subtitle: A map of every folder in a Project Broadsheet repository and what lives inside it. Skim this once and the rest of the documentation will read much more easily.
order: 4
updated: 2026-04-17
---

Project Broadsheet follows a flat, predictable layout. Every folder has one job. There are no hidden generators, no implicit imports, no framework magic. If you can read the folder list below, you can find anything.

## Top-level folders

```
project-broadsheet/
├── src/                 Everything that becomes the website
├── _site/               Generated output (gitignored)
├── node_modules/        Dependencies (gitignored)
├── package.json         Dependencies and npm scripts
├── eleventy.config.js   Eleventy configuration
└── README.md
```

## Inside `src/`

```
src/
├── _data/               Global data accessible in every template
├── _includes/           Layouts and reusable partials
├── assets/              CSS, JS, images, fonts
├── content/             Editorial content (articles, reviews, etc.)
├── docs/                This help center
├── *.njk, *.md          Top-level pages (index, about, pricing, etc.)
├── feed.njk             RSS feed template
├── sitemap.njk          XML sitemap template
└── robots.txt           Search engine instructions
```

## `src/_data/`

Global data files. Every file in this folder becomes available as a variable of the same name in every template.

- `meta.js`: site metadata (title, description, URL, contact info).
- `nav.js`: navigation structure.
- `features.js`, `services.js`, `pricing.js`, `roadmap.js`, etc.: structured data used on specific pages.

Edit any of these files, and every template that references it rebuilds on save.

## `src/_includes/`

Reusable templates. Eleventy looks here for anything referenced in `layout:` front matter or `{% raw %}{% include %}{% endraw %}` tags.

- `layouts/`: page-level wrappers (`base.njk`, `page.njk`, `doc.njk`, `post.njk`).
- `partials/`: components (`header.njk`, `footer.njk`, `sidebar-cta.njk`, etc.).

## `src/assets/`

Static assets. All of this is copied to the output at build time.

- `css/`: design tokens, utilities, components, and page styles. Concatenated at build time into a single stylesheet.
- `js/`: vanilla JavaScript modules.
- `img/`: images, the logo, and favicons.

## `src/content/`

Your articles and publication content. Organized by <span class="g-term" data-term="editorial section">section</span>:

```
src/content/
├── news/
├── opinion/
├── analysis/
├── arts-culture/
├── science-tech/
├── history/
├── letters/
├── reviews/
└── editions/
```

Each folder matches a section slug in `site.json`.

## `src/docs/`

The help center (the thing you're reading now). Each subfolder is a doc category; each Markdown file is an article.

## What to do next

- [Configure site.json](/docs/content/site-config/) to set your publication's identity.
- [Customize the design tokens](/docs/design/tokens/) to make the site look like yours.
- [Write your first article](/docs/content/write-an-article/).

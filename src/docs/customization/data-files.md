---
title: Data files reference
subtitle: A complete map of every data file in Project Broadsheet: what each one controls, its format, and where it lives.
order: 6
updated: 2026-04-18
---

Project Broadsheet stores all configuration and structured content in JavaScript data files under `src/_data/`. Eleventy reads these files at build time and makes them available to every template as named variables. This page is a reference for what each file controls.

## `src/_data/meta.js`

Site-wide metadata used in `<head>` tags, Open Graph, JSON-LD, and RSS.

```js
export default {
  title: "My Publication",          // Full name, shown in <title>
  shortTitle: "My Pub",             // Abbreviated, used in nav
  description: "...",               // Default meta description
  url: "https://example.com",       // Production URL (no trailing slash)
  email: "hello@example.com",
  language: "en",                   // BCP 47 language tag
  locale: "en_US",                  // Open Graph locale
  themeColor: "#1A1A1A",            // Browser chrome color
  ogImage: "/assets/img/og.jpg",    // Default social preview image
  version: "1.0.0",                 // Shown in docs sidebar footer
  gtranslate: { enabled: true, ... }
};
```

## `src/_data/site.json`

Publication-specific content configuration: sections, homepage settings, and feature flags.

```json
{
  "sections": [ ... ],             // Editorial sections array
  "homepage": {
    "featuredCount": 3,
    "showSections": ["news", "opinion"]
  },
  "features": {
    "highlights": true,
    "textToSpeech": true,
    "readingRuler": true,
    "readingList": true,
    "fontPicker": true,
    "search": true
  }
}
```

Toggle any feature by setting it to `false` and the corresponding UI and JS will be excluded from the build.

## `src/_data/authors.js`

An array of author objects. Each author needs a slug that matches the `author` field in article front matter.

```js
export default [
  {
    slug: "jon-ajinga",
    name: "Jon Ajinga",
    bio: "Editor and founder.",
    avatar: "/assets/img/authors/jon-ajinga.jpg",
    twitter: "jonajinga",
    email: "jon@example.com"
  }
];
```

See [Authors](/docs/content/authors/) for the full field reference.

## `src/_data/nav.js`

Primary navigation structure. Controls what appears in the site header and the hamburger menu panel.

```js
export default {
  primary: [
    { label: "News", url: "/news/" },
    { label: "Opinion", url: "/opinion/", children: [ ... ] }
  ],
  cta: { label: "Subscribe", url: "/subscribe/" }
};
```

Child items support `label`, `url`, and `description` (shown as dropdown subtitle text).

## `src/_data/docCategories.js`

The 11 documentation categories. Controls the docs hub layout and sidebar headings.

```js
export default [
  {
    slug: "getting-started",
    label: "Getting Started",
    summary: "Install, run locally, and deploy.",
    order: 1
  },
  ...
];
```

Add a new category here and create a matching folder under `src/docs/` to add a new docs section.

## `src/_data/languages.js`

The list of languages shown in the GTranslate language picker. Each entry has a `code` (BCP 47) and a `name` in the native script.

```js
export default [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  ...
];
```

## Creating a custom data file

Add any `.js` file to `src/_data/` and it becomes available in templates under its filename (without extension). For example, `src/_data/sponsors.js` is accessible as `{{ sponsors }}` in any Nunjucks template.

```js
// src/_data/sponsors.js
export default [
  { name: "Sponsor Co", url: "https://sponsor.co", logo: "/assets/img/sponsor.svg" }
];
```

Data files can export a plain value, an array, an object, or an async function that fetches remote data at build time.

## What to do next

- [Configure site.json](/docs/content/site-config/) for section and feature flag details.
- [Authors](/docs/content/authors/) for the full author object specification.
- [Template filters](/docs/customization/filters/) for the Nunjucks filters available in templates.

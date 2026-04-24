---
title: Configure meta.js
subtitle: The single file that controls your publication's metadata, URLs, and third-party integration keys. Every reader-facing identifier on the site reads from this one location.
order: 1
updated: 2026-04-20
---

`src/_data/meta.js` is the central configuration file for Project Broadsheet. Everything visible to readers — the title in the header, the footer copyright, the newsletter destination, the analytics website ID — is driven by this one ESM module. Editing it is the quickest path to making the site yours without touching templates.

## Editing via Decap CMS

If Decap CMS is set up, you can edit most site configuration from the browser without touching any files. In the CMS sidebar, open **Site Configuration → Site Settings**. Every save creates a pull request — merge it to deploy the changes. The form fields map directly to the keys documented on this page. See [Decap CMS](/docs/integrations/decap-cms/) for setup instructions.

## Bare minimum to go live

You only need four fields set before you can publish your first article:

```js
export default {
  title: "The Example Dispatch",
  description: "Independent journalism for the curious.",
  url: process.env.SITE_URL || "https://yourdomain.com",
  email: "hello@yourdomain.com"
};
```

Editorial sections ship with sensible defaults (News, Opinion, Analysis, and so on) — you only need to touch section data when you want to add, remove, or rename one. See [Editorial sections](/docs/content/sections/).

## Core identity fields

```js
export default {
  title:       "The Example Dispatch",
  shortTitle:  "Example Dispatch",
  description: "Independent journalism for the curious.",
  url:         process.env.SITE_URL || "https://example.com",
  email:       "hello@example.com",
  author:      "Example Media LLC",
  maintainer:  "Jane Publisher",
  language:    "en",
  locale:      "en_US",
  themeColor:  "#1A1A1A",
  ogImage:     "/assets/img/og-default.png",
  founded:     2025
};
```

These values populate the `<title>` tag on every page, the description used in search-engine results and social previews, the canonical URL used for <span class="g-term" data-term="SEO">SEO</span>, and the mailto links that appear throughout the site.

## Third-party integrations

Populate only the services you intend to use. Any field left empty disables its integration entirely — nothing ships in the HTML.

```js
buttondownUsername: "your-buttondown-username",
umamiWebsiteId:     "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
umamiSrc:           "https://cloud.umami.is/script.js",
cusdisAppId:        "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
web3formsKey:       "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
```

These correspond to the <span class="g-term" data-term="Buttondown">newsletter service</span>, the <span class="g-term" data-term="Umami">analytics platform</span>, the <span class="g-term" data-term="Cusdis">comment system</span>, and the <span class="g-term" data-term="Web3Forms">form forwarding service</span>, respectively. In production, these values typically come from environment variables — see [Environment variables](/docs/deployment/env-vars/).

## What to do next

- [Write your first article](/docs/content/write-an-article/), create a <span class="g-term" data-term="Markdown">Markdown</span> file in `src/content/news/`.
- [Add an author](/docs/content/authors/) so posts carry a byline.
- [Customize design tokens](/docs/design/tokens/) to set your brand palette.

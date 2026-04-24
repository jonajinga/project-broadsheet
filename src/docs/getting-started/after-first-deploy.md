---
title: After your first deploy
subtitle: Your site is live. Here are the ten things to do before you publish your first article.
order: 4
updated: 2026-04-18
---

A fresh Project Broadsheet deploy works out of the box, but it still has placeholder content and default settings. This checklist covers everything to do before the publication is ready for readers.

## 1. Set your site identity

Open `src/_data/meta.js` and fill in the fields that identify your publication:

```js
export default {
  title:       "Your Publication Name",
  description: "What your publication covers, in one sentence.",
  url:         process.env.SITE_URL || "https://yourdomain.com",
  email:       "editor@yourdomain.com"
};
```

These values appear in the site header, footer, RSS feeds, and SEO metadata. Until they are set, every page will show the placeholder defaults.

See [Site configuration](/docs/content/site-config/) for the full field reference.

## 2. Add your author entry

Open `src/_data/authors.js` and replace the sample author with your own:

```js
export default [
  {
    slug: "your-name",
    name: "Your Name",
    bio: "Editor and founder.",
    avatar: "/assets/img/authors/your-name.jpg"
  }
];
```

The `slug` becomes part of your author profile URL (`/authors/your-name/`) and must match the `author` field in your articles.

## 3. Customize your brand

Open `src/assets/css/tokens.css` and change the color and font variables to match your publication's identity. At minimum:

- `--accent` — your primary brand color, used for links, borders, and badges
- `--font-serif` — your body text font
- `--font-masthead` — your headline/display font

See [Design tokens](/docs/design/tokens/) for the full list.

## 4. Remove the sample content

The repository ships with placeholder articles in each `src/content/` section. Delete them or replace them with your own writing before you announce the publication. Search for files with `sample` or `placeholder` in the filename.

## 5. Configure your newsletter (optional)

If you are using Buttondown for email newsletters, add your username to `meta.js`:

```js
buttondownUsername: "your-buttondown-username",
```

The newsletter signup form will appear automatically in the site footer and on relevant pages.

See [Buttondown](/docs/integrations/buttondown/).

## 6. Set up analytics (optional)

Umami provides cookieless, privacy-respecting analytics. Add your Umami credentials to `meta.js` when ready:

```js
umamiWebsiteId: "your-website-id",
umamiSrc:       "https://analytics.yourdomain.com/script.js",
```

See [Umami](/docs/integrations/umami/).

## 7. Verify search works

Pagefind search only runs on a **production build** — it does not index content in dev mode. After your Cloudflare Pages deploy succeeds, visit your live site and test the search bar to confirm it is finding articles correctly.

If search is empty, check that `npm run build` completes without errors and that the `_site/pagefind/` directory was generated.

## 8. Write your first article

Create a Markdown file in the appropriate section folder:

```
src/content/news/my-first-article.md
```

Add the required front matter (`title`, `date`, `author`, `section`) and start writing. The filename becomes the URL slug.

See [Write an article](/docs/content/write-an-article/).

## 9. Set up your custom domain

In Cloudflare Pages, go to your project → Custom domains → Add a custom domain. Add a CNAME record in your DNS pointing to your Pages subdomain. HTTPS is provisioned automatically.

See [Custom domain](/docs/deployment/custom-domain/).

## 10. Submit to Google Search Console

Visit [search.google.com/search-console](https://search.google.com/search-console), add your property, and verify ownership using the HTML tag method (add the meta tag to `src/_includes/layouts/base.njk`). Then submit your sitemap URL: `https://yourdomain.com/sitemap.xml`.

Google typically begins indexing within a few days.

## What to do next

- [Write an article](/docs/content/write-an-article/) for the full article authoring workflow.
- [Sections](/docs/content/sections/) to add, remove, or rename editorial sections.
- [Using Project Broadsheet without the terminal](/docs/getting-started/no-terminal/) if you prefer a browser-based editing workflow.

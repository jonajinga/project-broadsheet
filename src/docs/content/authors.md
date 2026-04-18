---
title: Authors
subtitle: Add and manage contributor bios. Every byline in Project Broadsheet resolves to an author record stored in a single data file, so changing a bio once updates it everywhere.
order: 3
updated: 2026-04-17
---

Every article in Project Broadsheet carries an `author` field in its <span class="g-term" data-term="front matter">front matter</span>. That field is a slug, not a name. It points to an entry in `src/_data/authors.js`, which holds the writer's display name, photo, and short biography. The byline on every article, the author page, and the per-author <span class="g-term" data-term="RSS">RSS</span> feed are all generated from that single entry.

## Define an author

Open `src/_data/authors.js`:

```js
export default [
  {
    slug: "jon-ajinga",
    name: "Jon Ajinga",
    bio: "Independent journalist and web developer based in Colorado. Maintainer of Project Broadsheet.",
    photo: "/assets/img/authors/jon-ajinga.jpg",
    email: "jon@example.com",
    website: "https://thefreethinkingtimes.com"
  }
];
```

- `slug` is the identifier used in article front matter. Lowercase, hyphen-separated.
- `name` is the display name shown on the byline and author page.
- `bio` appears on the author page and (optionally) at the end of each article.
- `photo` is an optional headshot. Place images in `src/assets/img/authors/`.
- `email` and `website` are optional contact fields.

## Reference an author from an article

In the article's front matter:

```yaml
---
title: My first article
author: jon-ajinga
date: 2026-04-17
section: news
---
```

The `author` value must match a `slug` in `authors.js`. Typos produce a missing-byline warning in the build log.

## Author pages

Each author automatically gets a page at `/authors/{slug}/` listing every article they've written, along with their photo and bio. The page uses the `layouts/author.njk` template and pulls data from `authors.js`.

## Per-author RSS feed

Every author also gets an RSS feed at `/authors/{slug}/feed.xml`. Readers can follow a specific writer without subscribing to the whole publication.

## Multi-author articles

For articles with more than one byline, change `author` to an array:

```yaml
author: [jon-ajinga, jane-doe]
```

Both slugs must exist in `authors.js`. The byline shows both names separated by "and"; the article appears on both author pages.

## What to do next

- [Configure editorial sections](/docs/content/sections/) so each author's work is organized.
- [Write your first article](/docs/content/write-an-article/) with a proper byline.
- [Customize the author page layout](/docs/customization/custom-layouts/) if you want a different look.

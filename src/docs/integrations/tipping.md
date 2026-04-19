---
title: Tipping and reader support
subtitle: Let readers tip directly through Ko-fi, Buy Me a Coffee, or Patreon — per publication and per author — with no platform cut from Project Broadsheet.
order: 7
updated: 2026-04-18
---

Project Broadsheet supports direct reader tipping through Ko-fi, Buy Me a Coffee (BMAC), and Patreon. Tipping buttons appear in article support rows and on author profile pages. There is no intermediary — readers go directly to your account on whichever platform you use. Project Broadsheet takes no cut.

You can configure tipping at the publication level (a single account that supports the whole publication) and at the author level (individual accounts for each writer). Both are independent — you can have one, both, or neither.

## Publication-level tipping

Add one or more tipping URLs to `src/_data/site.json`:

```json
"tipping": {
  "kofi": "https://ko-fi.com/yourpublication",
  "bmac": "https://buymeacoffee.com/yourpublication",
  "patreon": "https://www.patreon.com/yourpublication"
}
```

Include only the platforms you use. If you only have a Ko-fi account, include only `kofi`. Buttons for unconfigured platforms do not appear.

Tipping buttons at the publication level appear:
- In the support row at the bottom of every article
- On the `/support/` page (if your publication has one)

## Author-level tipping

Add tipping URLs to individual author entries in `src/_data/authors.js`:

```js
export default [
  {
    slug: "jon-ajinga",
    name: "Jon Ajinga",
    bio: "Editor and founder.",
    avatar: "/assets/img/authors/jon-ajinga.jpg",
    kofi: "https://ko-fi.com/jonajinga",
    bmac: "https://buymeacoffee.com/jonajinga",
    patreon: null
  }
];
```

Author tipping buttons appear:
- On the author's profile page at `/authors/{slug}/`
- In the article byline area of articles by that author
- In the article support row (alongside publication tipping, if both are configured)

## Platform comparison

| Platform | Transaction fee | Subscription support | Notes |
|---|---|---|---|
| Ko-fi | 0% on one-time tips (free plan), 0% on subscriptions (paid plan) | Yes | No platform cut on tips; optional monthly memberships |
| Buy Me a Coffee | 5% | Yes | Simple setup, widely recognized |
| Patreon | 8-12% (varies by plan) | Yes | Best for recurring membership communities |

All three platforms handle payment processing, fraud protection, and payouts. Project Broadsheet only renders the links.

## What to do next

- [Support and transparency badges](/docs/design/support-badges/) for the badge component that renders tipping links as flat-style status indicators.
- [Authors](/docs/content/authors/) for the full author data file specification.
- [Buttondown](/docs/integrations/buttondown/) for newsletter subscriber management.
- [Umami](/docs/integrations/umami/) for understanding how readers find your publication.

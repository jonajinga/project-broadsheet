---
title: Customize navigation
subtitle: Add, remove, and reorder nav items, add dropdown children, and change the header CTA — all from a single data file.
order: 10
updated: 2026-04-18
---

All navigation in Project Broadsheet is driven by `src/_data/nav.js`. The header, mobile menu panel, and any nav-dependent partials all read from the same file. You never edit a template to change navigation.

## File structure

```js
// src/_data/nav.js
export default {
  primary: [
    {
      label: "Product",
      url: "/features/",
      children: [
        { label: "Features", url: "/features/", description: "..." },
        { label: "Showcase", url: "/showcase/", description: "..." }
      ]
    },
    {
      label: "About",
      url: "/about/"
      // no children → renders as a plain link, no dropdown
    }
  ],
  cta: { label: "Get Started (Free)", url: "/get-started/" }
};
```

Each object in `primary` becomes a top-level nav item. Items with a `children` array get a dropdown. Items without `children` render as a direct link.

## Add a top-level link

```js
{
  label: "Education",
  url: "/education/"
}
```

Position it in the `primary` array where you want it to appear left-to-right.

## Add a dropdown item

Append to the `children` array of an existing group. Each child needs a `label`, `url`, and `description` — the description appears in the dropdown card beneath the title.

```js
children: [
  { label: "Features", url: "/features/", description: "A tour of every capability." },
  { label: "Education", url: "/education/", description: "For journalism programs and student newspapers." }
]
```

## Convert a plain link to a dropdown group

Add a `children` array to any existing item. The `url` on the parent still works as a link — clicking the label navigates, clicking the chevron opens the dropdown.

```js
{
  label: "About",
  url: "/about/",
  children: [
    { label: "Mission", url: "/about/", description: "Why this project exists." },
    { label: "Changelog", url: "/changelog/", description: "Every release documented." }
  ]
}
```

## Remove a nav item

Delete the object from the `primary` array. The page itself is not affected — only the navigation link disappears.

## Change the header CTA

The `cta` key controls the primary action button in the header and mobile panel:

```js
cta: { label: "Book a Call", url: "/book-a-call/" }
```

## Active state

The header automatically applies `aria-current="page"` to the active nav link using a `startsWith` match. Top-level items are marked active when the current URL begins with the item's `url`. No configuration needed.

## Mobile menu

The mobile slide-in panel is generated from the same `nav.primary` data. Changes to `nav.js` appear in both the desktop header and the mobile panel automatically.

## What to do next

- [CSS overrides](/docs/customization/css-overrides/) if you want to change how the nav looks.
- [Add a new editorial section](/docs/customization/add-a-section/) if you're adding a nav item for a new content section.

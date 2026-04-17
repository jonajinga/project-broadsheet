---
title: Common issues and fixes
subtitle: The problems we see most often and how to get unstuck fast.
order: 1
updated: 2026-04-17
---

## "npm install" fails

Make sure you're on Node 18 or later: `node --version`. If you have an older version, upgrade via [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) or [fnm](https://github.com/Schniz/fnm) (Windows, macOS, Linux).

## Pagefind index is empty

Pagefind runs after a production build, not during `npm start`. Run `npm run build` and check `_site/pagefind/`. The index should contain a `pagefind.js` and several `.pf_fragment` files.

## Dark mode flashes on load

The theme-init script needs to run before CSS loads. Make sure `{% include "partials/theme-init.inline.njk" %}` is in the `<head>` of `base.njk`, before the stylesheet link.

## Buttondown signup does nothing

Check `site.json` — the `buttondown.username` field must match your Buttondown username exactly. Also check the signup form's `action` URL in the page source.

## CSS changes don't appear

Clear your browser cache (Cmd+Shift+R / Ctrl+Shift+R). Project Broadsheet adds a `?v=` cache-buster on the stylesheet link tied to the version in `meta.js` — bump the version if you're deploying frequently.

## Article doesn't show on the homepage or section page

Verify the front matter. Missing `section`, `date`, or `title` will exclude it from collections. Also confirm the file extension is `.md` (not `.markdown`).

## Still stuck?

- [Browse GitHub Discussions]({{ meta.github }}/discussions)
- [Report a bug](/forms/bug-report/)
- [Book a call](/book-a-call/) for paid support

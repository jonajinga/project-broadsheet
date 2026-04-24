---
title: Common issues and fixes
subtitle: A running list of the problems that come up most often and the diagnostic steps that resolve them. Check here before opening a bug report.
order: 1
updated: 2026-04-17
---

## `npm install` fails

The most common cause is an outdated Node.js runtime. Confirm with:

```bash
node --version
```

If the output is earlier than 18, upgrade. On macOS and Linux, [nvm](https://github.com/nvm-sh/nvm) is a common version manager; on Windows, [fnm](https://github.com/Schniz/fnm) works cross-platform.

## Pagefind search returns nothing

<span class="g-term" data-term="Pagefind">Pagefind</span> runs at the end of a **production build**, not during the live preview. When you use `npm start` (which starts the dev server), the Pagefind index is not regenerated. Run:

```bash
npm run build
```

Then confirm `_site/pagefind/` exists and contains both `pagefind.js` and several `.pf_fragment` files.

## Dark mode flashes a light theme on load

The theme-detection script must execute **before** the stylesheet loads; otherwise the browser renders the default theme briefly before switching. Confirm that `{% raw %}{% include "partials/theme-init.inline.njk" %}{% endraw %}` appears inside the `<head>` of `base.njk`, before the `<link rel="stylesheet">` tag.

## Buttondown signup does nothing

Two things to check in order:

1. **Config:** Open `src/_data/meta.js` and confirm the `buttondownUsername` field matches your Buttondown account username exactly (case-sensitive).
2. **Form action:** View the signup form's page source. The `action` attribute should read `https://buttondown.email/api/emails/embed-subscribe/YOUR-USERNAME`.

## CSS changes don't appear

Your browser is almost certainly serving a cached stylesheet. Force a reload with Cmd+Shift+R (macOS) or Ctrl+Shift+R (Windows/Linux). Project Broadsheet appends a `?v=` cache-busting query to the stylesheet link, derived from the version in `meta.js`, bumping the version forces every visitor to pull the new file.

## An article does not appear in its section or on the homepage

Verify the <span class="g-term" data-term="front matter">front matter</span>:

- `title`, `date`, and `section` are all required.
- `date` must be a valid ISO date (e.g. `2026-04-17`).
- The file extension must be `.md`. `.markdown` is not recognized.
- The containing folder's name must match the `section` value.

## Still stuck?

- [Browse GitHub Discussions]({{ meta.github }}/discussions) to see whether someone else has reported the same issue.
- [Report a bug](/forms/bug-report/) if the issue looks new.
- [Book a call](/book-a-call/) if you would like one-on-one help.

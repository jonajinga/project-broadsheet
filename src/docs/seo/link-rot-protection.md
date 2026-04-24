---
title: Link-rot protection
subtitle: Every external link in your articles gets an Internet Archive wildcard sibling automatically. When an original source dies, readers still reach the archived version in one click.
order: 11
updated: 2026-04-23
---

External links die. Studies of major newspapers have found that 20–50% of outbound links are dead within a decade. For an independent publication covering serious topics — regulation, institutional power, historical context — link rot directly undermines the evidence trail.

Project Broadsheet ships **automatic link-rot protection**: every external URL in Markdown content gets a second sibling link pointing at the Internet Archive's wildcard snapshot URL. The wildcard (`web.archive.org/web/*/URL`) auto-redirects to whatever the latest archived copy is. One click, reader reaches the cached version; zero ongoing maintenance.

## How it works

Project Broadsheet hooks into the Markdown renderer. After Markdown produces a link like:

```html
<a href="https://example.com/article">Source</a>
```

The renderer appends a sibling archive link:

```html
<a href="https://example.com/article">Source</a><a class="archive-link"
  href="https://web.archive.org/web/*/https://example.com/article"
  rel="noopener nofollow" target="_blank" aria-label="Archived version"
  title="Archived version">
  <svg>...</svg>
</a>
```

The archive icon — a tiny arrow-return SVG — renders inline at subscript scale via `.archive-link`. It doesn't interrupt reading. Readers who notice and click it get redirected to the latest available snapshot.

## What gets skipped

- Links to your own domain (no point archiving yourself).
- Links that are already `web.archive.org` or `archive.today` / `.is` / `.ph` / `.org` URLs (already archived).
- Any link marked `data-no-archive` in the source HTML.
- Non-`http(s)` URLs (mailto, tel, local anchors).

## Styling

```css
.archive-link {
  display: inline-flex;
  width: 1.05em; height: 1.05em;
  margin-left: 0.15em;
  border: 1px solid currentColor;
  color: var(--color-ink-faint);
  opacity: 0.55;
}
.archive-link:hover {
  opacity: 1;
  color: var(--color-bg);
  background: var(--color-ink);
}
```

A thin outlined icon that inverts to ink-on-background on hover. Unobtrusive in body text; visible enough to find.

## In print

The archive icons collapse to readable `[archived]` markers in printed output so paper copies still carry the reference:

```css
@media print {
  .archive-link svg { display: none; }
  .archive-link::before { content: "[archived] "; }
}
```

## Configuration

The renderer lives in `eleventy.config.js` as a `markdown-it` post-render pass. Toggle it off per-link with a `data-no-archive` attribute in raw HTML, or globally by removing the renderer pass from the config.

There's no Wayback Machine API call at build time — the wildcard URL is a pure client-side redirect handled by archive.org. This means:

- **Zero network dependency at build time**. Link-rot protection never blocks or slows a build.
- **Links work even if archive.org has never seen the target**. The wildcard URL simply resolves to archive.org's "no snapshot found" page, which offers the reader a "Save this page" button.
- **Readers get the freshest snapshot available**, because `*` is a "latest known" redirect rather than a frozen timestamp.

## Proactive archiving

Because the wildcard redirects to *whatever exists*, pieces that have never been archived send readers to a dead end. To guarantee a snapshot, manually save each source link via [web.archive.org/save](https://web.archive.org/save) when you publish — or wire a post-publish script that POSTs every outbound link for preservation. This is best practice for investigations where primary-source integrity matters most.

## Related

- [Markdown reference](/docs/content/markdown-reference/) — the renderer this plugs into.
- [Article profiles](/docs/content/article-profiles/) — citation metadata for pieces that need formal bibliographies.

---
title: Print stylesheets
subtitle: How Project Broadsheet's print styles work, what gets hidden when a reader prints an article or edition, and how to customize the printed output.
order: 5
updated: 2026-04-23
---

Project Broadsheet ships with print stylesheets for articles and <span class="g-term" data-term="edition">editions</span>. When a reader chooses **File → Print** or **Ctrl+P**, the browser switches to the print stylesheet automatically, with no reader action required.

## What print styles do

The print stylesheet hides chrome (navigation, sidebars, buttons) and formats the content for paper:

**Hidden in print:**
- Site header and footer
- Navigation menus
- Reader toolbar (highlights, font picker, reading settings)
- Back-to-top button
- Newsletter signup forms
- Social share buttons
- Related articles sidebar
- Cookie/banner notices

**Preserved in print:**
- Article title and subtitle
- Author byline and publish date
- Full article body with all headings and paragraphs
- Inline images (scaled to fit the page)
- Blockquotes and pull quotes
- Code blocks (with monospace font)
- The publication name as a print header

## Where the print styles live

Print rules are in `src/assets/css/print.css`. They use a standard `@media print` block:

```css
@media print {
  .site-header,
  .site-footer,
  .reader-toolbar,
  .social-share,
  .back-to-top { display: none !important; }

  body {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 12pt;
    color: #000;
    background: #fff;
  }

  a { color: inherit; text-decoration: none; }
  a[href]::after { content: " (" attr(href) ")"; font-size: 10pt; color: #555; }
}
```

`print.css` is concatenated into `global.css` at build time along with all other partials; it does not load as a separate stylesheet.

## Hiding an element from print

Add the utility class `no-print` to any element you want to suppress:

```html
<div class="no-print">This will not appear when printed.</div>
```

The `no-print` class is defined in `src/assets/css/utilities.css`:

```css
@media print { .no-print { display: none !important; } }
```

## Forcing an element to print only

To show an element only in print (e.g., a print-only footer with the URL):

```css
.print-only { display: none; }
@media print { .print-only { display: block; } }
```

## Typography rules for paper

The print stylesheet layers several rules on top of the screen typography to make a printed article read like a piece from a newspaper rather than a web page screenshot:

```css
@media print {
  /* Never leave a heading stranded at the bottom of a page. */
  h1, h2, h3, h4 {
    break-after: avoid;
    page-break-after: avoid;
  }

  /* Keep pull-quotes and blockquotes together. A blockquote that
     splits across a page break looks broken, not elegant. */
  blockquote,
  figure {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* Images must never overflow the printable area. Scale down
     and preserve aspect ratio. */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Orphans / widows — don't leave a single line stranded at the
     top or bottom of a page. */
  p { orphans: 3; widows: 3; }
}
```

These are additive. They only kick in when `@media print` matches, so screen reading is unaffected.

## Link-rot archive markers

The [link-rot protection](/docs/seo/link-rot-protection/) feature adds a small archive icon next to every external link. On paper, the SVG icon is meaningless. Print falls back to a readable text marker:

```css
@media print {
  .archive-link svg      { display: none; }
  .archive-link::before  { content: "[archived] "; }
}
```

So a reader with a paper copy sees `Source [archived]` next to each external reference, and can look up the archived version from the URL that `a[href]::after` already spells out.

## Editions and print

Editions have a dedicated print layout that formats multi-article issues as a single print document. When a reader prints an edition page, each included article flows sequentially with page breaks between them. The edition cover image appears at the top of the first page.

To adjust page breaks between articles in an edition:

```css
@media print {
  .edition-article { page-break-before: always; }
}
```

## What to do next

- [Editions](/docs/specialty-content/editions/) for how print-friendly edition pages are structured.
- [Customize design tokens](/docs/design/tokens/) for the type and color variables used in print.
- [Custom layouts](/docs/customization/custom-layouts/) to create a layout with a custom print view.

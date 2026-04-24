---
title: Open Graph and social previews
subtitle: The little card that appears when someone pastes your URL into Slack, LinkedIn, Twitter, or iMessage. Project Broadsheet generates every Open Graph tag automatically, plus a bespoke 1200×630 card per article.
order: 4
updated: 2026-04-23
---

<span class="g-term" data-term="Open Graph">Open Graph</span> is the metadata format every major social platform reads to build link previews. When someone pastes a URL into Slack, iMessage, LinkedIn, Twitter, Facebook, or Discord, the platform fetches the page and looks for `og:title`, `og:description`, `og:image`, and a few other tags. Project Broadsheet emits all of them automatically, and ships a per-article card generator that produces a newspaper-styled 1200×630 PNG for every piece.

## Default tags

Every page gets these tags, populated from the page's front matter and `meta.js`:

```html
{% raw %}<meta property="og:title" content="{{ title }} | {{ meta.shortTitle }}">
<meta property="og:description" content="{{ description or meta.description }}">
<meta property="og:url" content="{{ meta.url }}{{ page.url }}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{{ meta.title }}">
<meta property="og:locale" content="{{ meta.locale }}">
<meta property="og:image" content="{{ meta.url }}{{ meta.ogImage }}">{% endraw %}
```

Articles additionally emit `og:type="article"`, `og:article:published_time`, and `og:article:author`, and point `og:image` at their per-article card (below) instead of the site-wide default.

## The default image

`meta.ogImage` in `meta.js` points at a single fallback image used on every page that doesn't specify its own. The recommended size is 1200×630 pixels. Place it at `src/assets/img/og-default.jpg`.

## Per-article generated card

Project Broadsheet generates a custom 1200×630 PNG for every article at build time using an SVG template. The card looks like a miniature newspaper front page: masthead at top, section kicker in red, byline as a dateline, then the headline in a serif display face, and the deck in italic below.

### How it's built

`src/og-images.njk` paginates over `collections.allContent` and emits one SVG per article at `/og/<slug>.svg`. An `eleventy.after` hook (wired in `.eleventy.js`) runs `@resvg/resvg-js` to rasterize each SVG to a matching `.png` in `_site/og/`. Pages reference the PNG, not the SVG, via the `og:image` tag.

```js
eleventyConfig.on("eleventy.after", async () => {
  const { Resvg } = require("@resvg/resvg-js");
  for (const file of fs.readdirSync(ogDir).filter(f => f.endsWith(".svg"))) {
    const svg = fs.readFileSync(path.join(ogDir, file), "utf8");
    const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 }}).render().asPng();
    fs.writeFileSync(path.join(ogDir, file.replace(/\.svg$/, ".png")), png);
  }
});
```

### Why native SVG text, not `<foreignObject>`

The obvious way to render multi-line text in SVG is `<foreignObject>` wrapping HTML with CSS. **resvg-js does not implement `<foreignObject>`.** Whatever's inside it is silently dropped at raster time, which is why early drafts of the card produced a big blank tan space where the text should have been.

The fix is to pre-wrap text at template-render time and emit native `<text>` + `<tspan>` with explicit `x` / `dy` positioning. A custom `wrap` Nunjucks filter does the word-wrap:

```js
eleventyConfig.addFilter("wrap", (str, maxChars) => {
  // Greedy word-wrap at word boundaries; returns an array of lines.
  const words = String(str || "").split(/\s+/);
  const lines = [];
  let current = "";
  for (const w of words) {
    if ((current + " " + w).trim().length > maxChars) {
      if (current) lines.push(current);
      current = w;
    } else {
      current = (current + " " + w).trim();
    }
  }
  if (current) lines.push(current);
  return lines;
});
```

Used in the template as:

```njk
{% raw %}{%- set _titleLines = _title | wrap(30) | limit(3) -%}
{%- set _descLines  = _desc  | wrap(62) | limit(3) -%}{% endraw %}
```

### Author resolution

Articles store an author *slug* on `data.author`; the full display name lives in `src/_data/authors.js` keyed by slug. The template resolves to the human-readable name:

```njk
{% raw %}{%- set _slug = article.data.author -%}
{%- set _authorName = (authors[_slug].name if (_slug and authors[_slug])
                        else (article.data.authorName or _slug or "")) -%}{% endraw %}
```

Without this, the card falls back to the slug ("jon-ajinga") or the placeholder "Staff Reporter" — both wrong.

### X.com-safe layout

X's `summary_large_image` card displays the OG image with a **dark bottom overlay strip** (~110 px tall) showing the og:title and domain. Anything in the bottom ~110 px of the card is covered by that overlay. Early versions of the Project Broadsheet card put the author/date in a heavy black byline bar at the bottom — which X promptly hid.

The current layout moves the byline up into a dateline position, above the title, safely clear of the overlay:

| Element | y | Notes |
|---|---|---|
| Masthead (black, "The Freethinking Times" + "INDEPENDENT JOURNALISM") | 0–68 | Site header |
| Kicker (`SECTION › SUBSECTION`) + 120 px underline | 130 / 148 | Section chrome |
| **Byline (`BY AUTHOR — PUBLISHED DATE`)** | **190** | **In X-safe zone** |
| Title (serif 56 px, up to 3 lines, 68 px line-height) | 260 onwards | The headline |
| Deck (italic 24 px, up to 3 lines, 34 px line-height) | dynamic after title | Optional |
| Slim red rule + black ornament band | 597 / 600 | Decorative; X overlays it |

The bottom black band (30 px tall, starting at y=600) is intentionally inside X's overlay zone — it provides visual weight on LinkedIn, Slack, iMessage, and Facebook while never competing with X's own title/author strip.

### XML declaration whitespace

`<?xml version="1.0"?>` must be the first byte of the file. Any leading whitespace or blank line before it causes `resvg-js` to bail with `unknown token at 2:1`. Wrap all template-header Nunjucks tags in `{% raw %}{%- ... -%}{% endraw %}` so they don't leave trailing newlines:

```njk
{% raw %}{%- set _kicker = _section -%}
{%- if _subsection %}...{%- endif -%}
<?xml version="1.0" encoding="UTF-8"?>{% endraw %}
```

## Per-article image override

If you want to override the generated card with your own artwork for a specific article, set `cover_image` in front matter:

```yaml
cover_image: "/assets/img/articles/my-article-cover.jpg"
```

The template preference order is: `cover_image` → generated `/og/<slug>.png` → `meta.ogImage` default.

## Twitter card tags

Alongside Open Graph, Project Broadsheet emits Twitter-card equivalents:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

Twitter/X reads both `og:*` and `twitter:*`, preferring the latter when both are present.

## Testing previews

After deploy:

- **Facebook / LinkedIn**: <https://developers.facebook.com/tools/debug/> and paste your URL, then click "Debug."
- **Twitter / X**: pasting into the compose window shows a live preview; the standalone card validator has been deprecated.
- **Slack / Discord**: paste the link into a test channel; they display the preview in real time.
- **iMessage**: same, in a private thread.

If a platform shows the wrong preview, re-scrape from the debug tool to force a cache refresh. Platforms cache OG images aggressively — Facebook and LinkedIn for days.

## Related

- [Structured data](/docs/seo/structured-data/) — Google-specific enrichment.
- [XML sitemap](/docs/seo/sitemap/) — search-engine discovery.
- [Meta tags](/docs/seo/meta-tags/) — title and description overrides.

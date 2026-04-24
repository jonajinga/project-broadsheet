---
title: Republish surface (CC grab-code)
subtitle: Every article ships with an opt-out "Republish this story" block that hands any partner editor a paste-ready HTML snippet, licensed under CC BY-NC-ND 4.0. No syndication network, no API, no tracking pixel — just the licence and the attribution.
order: 12
updated: 2026-04-24
---

Syndication is a distribution problem most independent publications solve either by joining a centralised network (Apple News, Substack recommendations) or by writing a new licensing email every time a partner asks. Project Broadsheet ships a third option: a **republish block rendered on every article by default**, licensed CC BY-NC-ND 4.0, with a grab-code textarea that outputs a canonical-linked HTML snippet any partner CMS can paste directly. No account, no API, no ongoing maintenance.

## Why CC BY-NC-ND 4.0

The block publishes under [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/). This is the strictest of the common open-licence forms:

- **Attribution** — partner must credit the original publication with a linked name and a canonical article URL at the top of the reposted text.
- **NonCommercial** — partner cannot sell the piece, put it behind a paywall, or syndicate it into a commercial platform.
- **NoDerivatives** — partner cannot edit the piece beyond tiny relative fixes (date-relative phrasing, location-relative phrasing when their readership is elsewhere).

The four editorial rules that match the licence live on a dedicated `/license/` page. The "Republish this story" block links to that page for the full terms, plus the external CC deed for the canonical licence text.

## Markup

The partial lives at `src/_includes/partials/republish.njk` and is included near the end of the article layout:

```njk
{% raw %}{% include "partials/republish.njk" %}{% endraw %}
```

Inside the partial:

```njk
{% raw %}{% if syndicate %}
<section class="republish" aria-labelledby="republish-heading">
  <header class="republish__header">
    <p class="republish__kicker">Open license</p>
    <h2 id="republish-heading" class="republish__title">Republish this story</h2>
  </header>
  <p class="republish__lede">
    Free to republish under
    <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" rel="license" target="_blank">CC&nbsp;BY-NC-ND&nbsp;4.0</a>.
    See our <a href="/license/">full republication terms</a>.
  </p>
  <details class="republish__grab">
    <summary>Grab the HTML</summary>
    <textarea readonly rows="12">...article HTML with attribution + canonical link...</textarea>
    <button data-umami-event="republish-copy" onclick="...">Copy to clipboard</button>
  </details>
</section>
{% endif %}{% endraw %}
```

`.republish` mirrors the webmention block width (`var(--max-width-prose)`) with a muted-alt background and a vermillion left border so it reads as an editorial surface, not a CTA.

## Opt-out, not opt-in

A `syndicate: true` default lives in `src/content/content.11tydata.js`:

```js
module.exports = {
  syndicate: true,
  eleventyComputed: { /* ... */ }
};
```

The block renders on every article unless the front matter explicitly disables it:

```yaml
---
title: My article
syndicate: false
---
```

The opt-out path is what to use for pieces that:
- embed licensed photos you can't pass on (stock imagery, wire-service images),
- embed tweets or other third-party media that you have one-time permission for but no redistribution right,
- include long block quotes obtained under one-time permission,
- contain live legal exposure (an ongoing investigation where republication could complicate privileges or counter-notices).

Defaulting on matches the `/license/` page's public commitment. Defaulting off meant 95% of pieces never got a republish surface even though the licence already covered them.

## Grab-code shape

The textarea contents are built at render time:

```html
<p><em>This story was originally published by
  <a href="https://yourdomain.com/section/slug/">Your Publication</a>
  under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> license.</em></p>
<h1>Article title</h1>
<p><strong>By Author Name</strong> — <time datetime="2026-04-24">April 24, 2026</time></p>
<!-- full article HTML from {{ content | safe }} -->
<p><em>Originally: <a href="https://yourdomain.com/section/slug/">https://yourdomain.com/section/slug/</a></em></p>
```

Attribution paragraph at top, full HTML body in the middle, canonical link at the bottom. Partners paste this into their CMS' HTML view; their own typography applies on top.

A small copy-to-clipboard button below the textarea fires a `republish-copy` Umami event so you can count grab rates per article.

## No tracking pixel

The original architecture for this feature included a 1×1 tracking pixel inside the grab-code so syndication hits could be counted. **That pattern does not work with Umami** — its `/api/send` endpoint is POST-only with a JSON body, so a plain GET `<img>` never registers. Project Broadsheet drops the pixel entirely.

Instead, syndication reach is measured via **referrer filters in the Umami dashboard**: when a partner republishes and keeps the canonical link, any reader who clicks through arrives with the partner domain in the referrer header. Save a filter per partner as they come in. Lower resolution than a pixel, but requires no infrastructure and no grab-code surface area.

## JSON-LD licence

The article layout's `NewsArticle` schema emits the licence canonically:

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  ...
}
```

Search engines, aggregators, and anyone parsing the page programmatically read this alongside the `rel="license"` `<a>` in the footer and republish block.

## Footer + sitemap integration

- **Footer** — the copyright line links the CC licence URL: `© 2026 Your Publication. Articles licensed under CC BY-NC-ND 4.0.`
- **Legal column** — a "Republication License" link points at `/license/`.
- **Sitemap** — `/license/` is in the `staticPages` list so search engines index it.
- **Human site-map** — the legal card includes the licence page; the bottom bar surfaces it alongside the XML sitemap.

## Commercial licence form

Not everyone needs the CC terms. Paid products, educational anthologies for sale, broadcasts, and consulting deliverables fall outside the non-commercial clause. The `/license/` page includes a Web3Forms inquiry form for those cases:

- Honeypot `botcheck` field matching the rest of the site's form pattern.
- Fields: name, email, organization, article URL, intended use.
- Fires a `license-inquiry-submit` Umami event on submit so you can count volume.

Responses land in the same editorial inbox as the main contact form.

## Related

- [Webmentions](/docs/seo/webmentions/) — the decentralised reply / repost protocol that complements republish.
- [Open Graph](/docs/seo/open-graph/) — different metadata concept, same rendering path.
- [Structured data](/docs/seo/structured-data/) — schema.org coverage including the `license` field.

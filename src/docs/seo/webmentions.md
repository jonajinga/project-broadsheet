---
title: Webmentions
subtitle: Replies, likes, reposts, and links from other sites surface on your articles and author pages. Project Broadsheet uses webmention.io for the inbox and fetches the contents at build time — no runtime dependencies, no comment moderation overhead.
order: 9
updated: 2026-04-23
---

A <span class="g-term" data-term="Webmention">Webmention</span> is a polite HTTP POST one site sends to another when it links to it. "I mentioned you" — that's the whole protocol. When it arrives, a receiving endpoint verifies the source page actually contains the link, and the target site can then display the mention however it likes.

Project Broadsheet uses **webmention.io** as the receiving endpoint and fetches verified mentions at build time, grouped by target URL, ready for templates to render. The result: replies, likes, reposts, and bare "linked from" mentions appear beneath every article and author page with zero runtime backend.

## How it works end to end

1. Someone publishes a post on their own blog, Mastodon, or Bluesky that links to a page on your site.
2. Their site (or a bridge like brid.gy) discovers your `<link rel="webmention">` tag, POSTs a `source=&target=` pair.
3. webmention.io verifies the source actually links to the target, archives the content, and stores the mention.
4. Your next build calls the webmention.io API, receives the JSON of all verified mentions for your domain, and renders them under the matching article or author page.
5. On reader's next page view, they see "Elsewhere on the web" with the reply cards and a facepile of likes.

## Setup

### 1. Create the webmention.io account

Sign in at [webmention.io](https://webmention.io) using your full domain URL (e.g. `https://yourdomain.com`). This triggers an <span class="g-term" data-term="IndieAuth">IndieAuth</span> flow that verifies you control the domain via reciprocal `rel="me"` links (see the [IndieWeb identity](/docs/seo/indieweb-identity/) doc).

Once authenticated, webmention.io gives you:

- An **endpoint URL** — `https://webmention.io/yourdomain.com/webmention`
- An **API token** — read-only; safe to keep in public code per webmention.io's own docs.
- A **pingback URL** — optional legacy support.

### 2. Wire the endpoint into `meta.js`

```js
webmention: {
  endpoint: env.WEBMENTION_ENDPOINT || "https://webmention.io/yourdomain.com/webmention",
  pingback: env.WEBMENTION_PINGBACK || "https://webmention.io/yourdomain.com/xmlrpc",
  token:    env.WEBMENTION_TOKEN    || "paste-the-read-only-token-here",
  domain:   "yourdomain.com",
  blocklist: []
}
```

Env vars override so you can rotate the token via your host's environment settings without editing code.

### 3. Verify the `<link>` tags render

Project Broadsheet's base layout emits these in `<head>` whenever the endpoint is configured:

```html
<link rel="webmention" href="https://webmention.io/yourdomain.com/webmention">
<link rel="pingback" href="https://webmention.io/yourdomain.com/xmlrpc">
```

View the page source after build to confirm they're there. webmention.io's Sites tab will verify ownership by crawling for these tags.

### 4. Confirm the site is added to webmention.io

In webmention.io's **Sites** tab, your domain must be listed. If it's missing, add it. Ownership verification is automatic once the `<link rel="webmention">` tag is live on the site.

## Build-time fetching

The data file at `src/_data/webmentions.js` pulls everything on each build:

```js
const EleventyFetch = require('@11ty/eleventy-fetch');

const url = 'https://webmention.io/api/mentions.jf2'
  + '?domain=' + encodeURIComponent(cfg.domain)
  + '&token='  + encodeURIComponent(cfg.token)
  + '&per-page=1000';

const data = await EleventyFetch(url, {
  duration: '1d',
  type: 'json',
  directory: '.cache'
});
```

The `duration: '1d'` cache means dev builds stay fast — webmention.io is only hit once per 24 hours locally. Delete `.cache/` to force a fresh pull. Production builds on every push will always pull fresh because Cloudflare / Netlify / Vercel wipe the cache between builds.

## Data shape

`webmentions[pageUrl]` resolves to:

```js
{
  replies:  [ { author: {name, url, photo}, url, published, content }, ... ],
  likes:    [ { author, url, published }, ... ],
  reposts:  [ { author, url, published }, ... ],
  mentions: [ { author, url, published }, ... ],
  total:    N
}
```

Replies get full cards; likes + reposts render as a facepile; mentions are a plain linked list. Private mentions (`wm-private: true`) are filtered out automatically.

## Rendering

Include `partials/article-webmentions.njk` anywhere in a page template. It reads `webmentions[page.url]`, renders the block if there's anything to show, and is silent otherwise:

```njk
{% raw %}{% include "partials/article-webmentions.njk" %}{% endraw %}
```

Project Broadsheet's article and author layouts include it by default. The "silent empty" behaviour means fresh articles don't carry a dead "No mentions yet" block.

## Collapsible display

The block header renders with a small `Hide / Show` toggle in the top-right corner. Collapsing hides the reply cards, facepile, and mentions list while keeping the kicker + count header visible, so readers still see "N mentions of this piece" even in the collapsed state.

The state persists across page loads via `localStorage` under the site-prefixed key `{prefix}-wm-collapsed` (e.g. `tft-wm-collapsed`). Hydrated inline via a tiny script inside the partial:

```html
{% raw %}<script>
(function () {
  var section = document.currentScript && document.currentScript.previousElementSibling;
  if (!section || !section.matches('.wm')) return;
  var toggle = section.querySelector('[data-wm-toggle]');
  var body   = section.querySelector('.wm__body');
  var key    = (window.__PREFIX || 'tft') + '-wm-collapsed';
  function apply(collapsed) {
    section.setAttribute('data-wm-collapsed', collapsed ? 'true' : 'false');
    toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    toggle.textContent = collapsed ? 'Show' : 'Hide';
    body.hidden = collapsed;
  }
  try { apply(localStorage.getItem(key) === 'true'); } catch (e) { apply(false); }
  toggle.addEventListener('click', function () {
    var next = section.getAttribute('data-wm-collapsed') !== 'true';
    apply(next);
    try { localStorage.setItem(key, next ? 'true' : 'false'); } catch (e) {}
  });
})();</script>{% endraw %}
```

CSS hides the lede when collapsed (`.wm[data-wm-collapsed="true"] .wm__lede { display: none; }`) and zeros the header margin so the kicker + count read as a compact single line. No JS framework, no dependency on a site-wide script — the partial is self-contained.

The same pattern scales to any other "big optional surface at the bottom of an article" block. The `.wm` width is `var(--max-width-prose)` so it lines up with the article body.

## Moderation

webmention.io does its own spam filtering. Project Broadsheet adds a per-site <span class="g-term" data-term="blocklist">blocklist</span> escape hatch in `meta.js`:

```js
blocklist: [
  "bad-actor.example.com",
  "https://specific-person.example.org"
]
```

Any substring match against the author URL or source URL is filtered at build time. Leave the array empty unless you actually have a problem to filter — over-moderation is worse than under.

## Preview mode

Set `WEBMENTIONS_DEMO=1` locally and the data file injects a synthesised bundle (replies, likes, reposts, one bare mention) that the partial falls back to on any article with no real mentions. A yellow "Preview mode" banner makes it impossible to ship accidentally, and the env var is never set in production.

```bash
WEBMENTIONS_DEMO=1 npm run dev
```

## Sending outgoing webmentions

When your articles link to external sites that accept webmentions, you should send them one too — that's how reciprocal conversation works. Project Broadsheet ships `scripts/send-webmentions.mjs` which walks the RSS feed, discovers each target's endpoint, and POSTs `source/target` pairs. Safe to run repeatedly; receivers dedupe.

```bash
node scripts/send-webmentions.mjs                # send for real
WEBMENTIONS_DRY=1 node scripts/send-webmentions.mjs   # discover only
```

Wire it into a GitHub Actions cron for daily dispatch, or run it post-deploy. Most receivers handle duplicates idempotently, so over-sending is safe.

## Testing

Two reliable test routes:

- **[webmention.rocks](https://webmention.rocks)** — a test suite that sends real webmentions to any URL you give it. Start with Receiver Test #1.
- **[telegraph.p3k.io](https://telegraph.p3k.io)** — Aaron Parecki's interactive sender. Paste any source URL you control + any target URL on your site.

A successful send returns HTTP 201 with `"status": "queued"`. Verification takes ~30 seconds. The mention appears in the [webmention.io feed](https://webmention.io) and on your next build.

## Related

- [IndieWeb identity](/docs/seo/indieweb-identity/) — the `rel="me"` chain that authorises your webmention.io account.
- [Open Graph](/docs/seo/open-graph/) — different protocol, same family of metadata-driven sharing.
- [RSS](/docs/seo/rss/) — the feed the outgoing sender walks.

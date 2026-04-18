---
title: Migrate from Substack
subtitle: Export every Substack post as a CSV, convert the HTML bodies to Markdown, and move the subscriber list to Buttondown. The walkthrough covers all three pieces.
order: 3
updated: 2026-04-17
---

Substack's export is simpler than WordPress but has two pieces that need separate attention: the post archive (a CSV with an HTML body column) and the subscriber list (a separate CSV). Both export cleanly; migration is mostly a matter of converting the HTML and moving the subscribers to a newsletter service you control.

## Step 1 — Export posts from Substack

1. In Substack, visit **Settings** → **Exports** → **Create a new export**.
2. Wait for the email notification (usually within a few minutes).
3. Download the zip.

The archive contains:
- `posts.csv` — every published post with title, subtitle, publish date, HTML body, and subtitle fields.
- `posts/` — individual `.html` files for each post.
- `comments.csv` — every comment on every post.

## Step 2 — Export subscribers

1. **Settings** → **Publication** → **Subscribers** → **Export**.
2. Download the `subscribers.csv`.

This contains email addresses and signup dates. No other personal data is exported by default.

## Step 3 — Convert post HTML to Markdown

Each post's body is HTML. Use a Node script with `turndown` (<https://github.com/mixmark-io/turndown>) to convert:

```js
import TurndownService from "turndown";
const turndown = new TurndownService({ headingStyle: "atx" });
const markdown = turndown.turndown(htmlBody);
```

Substack's HTML is mostly clean paragraphs and headings. Tables convert well; embedded tweets and YouTube embeds need manual attention (they come through as Substack-specific components).

## Step 4 — Wrap posts with Project Broadsheet front matter

For each converted post, wrap with front matter:

```yaml
---
title: "Post title"
description: "Subtitle from Substack"
author: your-author-slug
date: 2024-06-15
section: news
---
```

The `description` field maps well to Substack's "subtitle." The `section` you'll assign based on your new structure.

## Step 5 — Rehost images

Substack hosts images at `https://substackcdn.com/...`. Those URLs typically keep working even after you leave Substack (they're served via CDN, independent of your publication), so you can leave image paths untouched initially. To fully de-couple:

1. Download every image referenced in your posts.
2. Place them in `src/assets/img/migrated/`.
3. Rewrite the paths in your Markdown.

## Step 6 — Move subscribers to Buttondown

<span class="g-term" data-term="Buttondown">Buttondown</span> imports Substack's subscriber CSV directly:

1. In Buttondown, go to **Settings** → **Subscribers** → **Import**.
2. Upload the `subscribers.csv` from Substack.
3. Buttondown deduplicates and confirms total count.

All subscribers are imported as "confirmed" (double-opt-in isn't required since they already opted in on Substack). You should send a first email from Buttondown explaining the move so subscribers know to expect mail from the new sender address.

## Step 7 — URL redirects

Substack URLs look like `https://yourpub.substack.com/p/post-slug`. Once you move off Substack, those URLs point to your subdomain on substack.com, which still works.

If you want to redirect from `substack.com/p/slug` to your new site, you'll need to:

1. Keep the Substack subdomain active (it's free).
2. In Substack's settings, configure a **custom redirect** if available, or add an HTML redirect in each post body pointing to the new URL.

## The paid alternative

If you'd rather have me do the whole thing, the [migration service](/services/#migration) handles post conversion, image rehosting, Buttondown import, and redirect setup. Starting at $299 for up to 50 posts.

[Request a migration quote](/forms/quote-migration/).

## What to do next

- [Buttondown integration](/docs/integrations/buttondown/) for the newsletter side.
- [Migrate from Ghost](/docs/migration/from-ghost/) for a different source.
- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) to host the migrated site.

---
title: IndieWeb identity and IndieAuth
subtitle: "rel=me links let you sign in to IndieWeb services (like webmention.io) using your own domain as your identity. Two-way verification against a trusted OAuth provider (usually GitHub) handles the auth without creating a new account."
order: 10
updated: 2026-04-23
---

The IndieWeb convention is that your website *is* your identity. A `<link rel="me">` tag points outward at a profile on another service (GitHub, Mastodon, email), and as long as that profile links back to your domain, services like webmention.io can authenticate you as the domain's owner without inventing a new account or password.

Project Broadsheet emits the tags; you supply the reciprocal links on the other side.

## The minimum setup

Two pieces, one on each side of the link.

### 1. On your site

`meta.js` lists every external identity. Each URL becomes a `<link rel="me">` tag in `<head>` via the base layout:

```js
indieweb: {
  me: [
    "https://github.com/yourusername"
  ]
}
```

Which renders as:

```html
<link rel="me" href="https://github.com/yourusername">
```

### 2. On the external profile

The profile you just linked to must link back to your domain. GitHub does this via the **Website** field on the profile (`github.com/settings/profile` → Public profile → Website). Paste your full site URL there. Other services:

- **Mastodon**: Profile → Edit profile → Profile metadata. Set one row's value to your domain.
- **Bluesky**: Profile → Edit profile → Website field.
- **Personal site / any blog**: any `<a rel="me" href="https://yoursite.com">` anywhere in the HTML.

<span class="g-term" data-term="IndieLogin">IndieLogin</span> walks both sides of the link. If the chain reciprocates, you're authenticated as your domain.

## Why GitHub works best for most people

GitHub is the easiest reciprocal provider because the "Website" field is structured data (part of the hCard parser finds automatically), it's backed by OAuth you probably already have, and most developers already have a GitHub profile. README-based links **do not work** — GitHub strips `rel` attributes from Markdown output, so only the Website field is machine-readable.

## Signing into webmention.io

1. Go to [webmention.io](https://webmention.io).
2. Paste your full site URL (e.g. `https://thefreethinkingtimes.com`) — not the GitHub URL.
3. IndieLogin follows the `rel="me"` chain: site → GitHub → back to site. If it reciprocates, a GitHub OAuth popup confirms you control the GitHub account.
4. You're signed in. webmention.io now considers you the owner of the domain.

Common failure: signing in with the GitHub URL instead of the site URL. That creates an account for *the GitHub profile*, not the domain. The symptom is `"target domain not found on this account"` when trying to receive webmentions. Fix: sign out, sign back in with the full site URL.

## Multiple identities

List as many as you want:

```js
indieweb: {
  me: [
    "https://github.com/yourusername",
    "https://mastodon.social/@yourusername",
    "https://bsky.app/profile/yourname.bsky.social"
  ]
}
```

Each becomes its own `<link rel="me">` tag. IndieLogin will let the reader pick whichever provider they already have session cookies for. For webmention.io specifically, it uses whichever one resolves first.

## Visible vs invisible rel="me"

The indieweb convention is to include a visible `<a rel="me">` link somewhere on the site (typically the footer) *in addition to* the head link. Project Broadsheet historically shipped this in the footer; it's been removed by default because the head link alone satisfies IndieLogin. If you want the visible anchor for redundancy, drop an `<a rel="me" href="...">` wherever you like.

## What it unlocks

- **webmention.io** — receiving webmentions on your domain.
- **[telegraph.p3k.io](https://telegraph.p3k.io)** — Aaron Parecki's webmention sender; uses the same IndieAuth flow.
- **[micropub.rocks](https://micropub.rocks)** and the broader Micropub ecosystem — programmatic posting to your site.
- **Most indieweb tools** in general — none of them need a separate account.

## Related

- [Webmentions](/docs/seo/webmentions/) — the primary consumer of your IndieAuth identity in Project Broadsheet.
- [Open Graph](/docs/seo/open-graph/) — different identity concept (platform-specific), same family.

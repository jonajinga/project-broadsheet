---
layout: layouts/page.njk
title: Privacy Policy
eyebrow: Legal
subtitle: Plain English on what we collect, what we don't, and how we use it.
permalink: /privacy/
---

**Last updated: 2026-04-17**

Project Broadsheet respects your privacy. This policy describes what this website (projectbroadsheet.com) collects and how it's used. If you're looking for the privacy properties of the Broadsheet framework itself, scroll to [The product vs. this website](#product-privacy).

## Who we are

- **Operator:** {{ meta.maintainer }}, doing business as {{ meta.author }}
- **Contact:** <a href="mailto:{{ meta.email }}">{{ meta.email }}</a>
- **Website:** {{ meta.url }}

## What we collect

### Contact form submissions

When you submit any form on this website — Contact, Book a Call, Quote Request, Bug Report, etc. — the information you submit is delivered to our email inbox via **[Web3Forms](https://web3forms.com)**.

Submitted data typically includes your name, email address, and the content of your message. We use it only to respond to your inquiry. We do not use it for marketing without your permission.

### Newsletter subscriptions

If you subscribe to our newsletter, your email address is stored with **[Buttondown](https://buttondown.email)**, a privacy-first newsletter service that does not use open-tracking pixels or link-tracking by default.

You can unsubscribe at any time from the footer of any email. We do not sell, trade, or share your email with third parties.

### Analytics

If analytics are enabled, we use **[Umami](https://umami.is)** — a cookieless, privacy-first alternative to Google Analytics. Umami records:

- Page URL visited
- Referrer URL (the site you came from)
- Country (derived from IP, then the IP is discarded)
- Screen size and browser (aggregated)
- Anonymous session identifier (cleared at end of session)

Umami does **not**:

- Use cookies or local storage
- Track users across sites
- Build behavioral profiles
- Identify individuals

### Local storage

We use your browser's `localStorage` (not cookies) to save preferences locally:

- `pb-theme` — your light/dark mode choice

This data never leaves your device. You can clear it from your browser's site settings.

## What we don't collect

- No third-party advertising trackers
- No social media pixels (Facebook, Twitter, TikTok, etc.)
- No Google Analytics, Adobe, or Mixpanel
- No cross-site tracking
- No behavioral profiles
- No sale or transfer of data to third parties

## Cookies

We do not set any first-party cookies. Third-party embeds (GitHub, YouTube, etc.) may set their own cookies when you interact with them. We disclose those embeds where they appear.

## Data retention

- **Form submissions:** retained in our email inbox until the inquiry is resolved, then archived for up to 2 years for business-record purposes.
- **Newsletter subscriptions:** retained in Buttondown until you unsubscribe, then fully deleted within 30 days.
- **Analytics data:** retained by Umami for up to 365 days, then aggregated and purged.

## Your rights

Depending on where you live (GDPR, CCPA, UK GDPR, etc.), you may have the right to:

- **Access** the data we hold about you
- **Correct** inaccurate data
- **Delete** your data ("right to be forgotten")
- **Export** your data in a portable format
- **Object** to processing
- **Restrict** processing

To exercise any of these, email <a href="mailto:{{ meta.email }}">{{ meta.email }}</a>. We respond within 30 days.

## Children's privacy

This website is not directed at children under 13. We do not knowingly collect data from children. If you believe a child has submitted data to us, contact us and we will delete it immediately.

## Third-party services

This website uses a small number of third-party services. Each has its own privacy policy:

- **Web3Forms** — form submissions → <a href="https://web3forms.com/privacy">web3forms.com/privacy</a>
- **Buttondown** — newsletter → <a href="https://buttondown.email/privacy">buttondown.email/privacy</a>
- **Umami** (if enabled) — analytics → <a href="https://umami.is/privacy">umami.is/privacy</a>
- **Bunny Fonts** — web fonts → <a href="https://bunny.net/privacy">bunny.net/privacy</a> (GDPR-compliant, no tracking)
- **instant.page** — link prefetching → no data collection, runs entirely client-side
- **Cloudflare Pages** — hosting → <a href="https://www.cloudflare.com/privacypolicy/">cloudflare.com/privacypolicy</a>

<h2 id="product-privacy">Product privacy</h2>

This policy covers **this website**. Project Broadsheet — the framework — is something you host yourself. Its privacy behavior is controlled entirely by your configuration:

- If you enable Buttondown, Buttondown's privacy policy applies.
- If you enable Umami, Umami's privacy policy applies.
- If you enable Cusdis comments, Cusdis's privacy policy applies.
- If you enable none of those, your Broadsheet site collects nothing at all.

Self-hosted Broadsheet sites have a minimum privacy footprint by design.

## Changes to this policy

We update this policy when our practices change. The "Last updated" date at the top reflects the most recent revision. Material changes will be announced in our newsletter or on the blog.

## Contact

Questions, requests, or complaints: <a href="mailto:{{ meta.email }}">{{ meta.email }}</a>.

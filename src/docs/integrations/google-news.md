---
title: Google News
subtitle: How to submit your Project Broadsheet publication to Google News Publisher Center and qualify for inclusion in Google News and Top Stories.
order: 8
updated: 2026-04-18
---

Google News and the Top Stories carousel in Google Search are separate surfaces from organic search results. To appear in them, your publication must be approved through <span class="g-term" data-term="Google">Google</span> News Publisher Center. Project Broadsheet ships with everything Google News requires technically — a news <span class="g-term" data-term="sitemap">sitemap</span>, structured data, and well-formed <span class="g-term" data-term="RSS">RSS</span> feeds — but you must submit and be reviewed before articles are eligible to appear.

## Technical requirements (already met)

Project Broadsheet generates all of these automatically:

- **News sitemap** at `/news-sitemap.xml` — indexes articles published within the last 48 hours with publication name, language, and publication date.
- **Article structured data** — `NewsArticle` JSON-LD on every article page, including headline, author, date published, and date modified.
- **RSS feeds** — one sitewide feed and one per editorial section.
- **HTTPS** — required. All recommended hosts (Cloudflare Pages, Netlify, Vercel) issue certificates automatically.

See [News sitemap](/docs/seo/news-sitemap/) for how the sitemap is built.

## Before you apply

Google News has editorial standards. Before submitting:

- Publish at least five to ten articles on the live site. An empty or near-empty site will be rejected.
- Ensure each article has a clear byline, a publication date, and substantive original content.
- Verify your site has an About page, a contact method, and a Privacy Policy.
- Confirm your custom domain is live (a `.pages.dev` or `.netlify.app` subdomain will not be accepted).

## Submit to Publisher Center

1. Go to [news.google.com/publisher-center](https://news.google.com/publisher-center) and sign in with a Google account.
2. Click **Add publication**.
3. Enter your publication name and URL.
4. Google will scan your site and verify ownership.

## Verify ownership

Publisher Center will ask you to verify that you own the domain. The easiest method is through <span class="g-term" data-term="Google">Google</span> Search Console — if you've already verified your site there, Publisher Center can confirm ownership instantly. If not, see [Google Search Console](/docs/seo/google-search-console/) to set that up first.

## Publication settings

Once access is granted, configure the following in Publisher Center:

- **Publication name** — must match the name on your site.
- **Language and country** — Google uses this to route your content to relevant readers.
- **Sections** — map your editorial sections to Publisher Center content categories (e.g., News, Opinion, Technology).
- **News sitemap URL** — enter `https://yourdomain.com/news-sitemap.xml`.

## Review timeline

Google's review process is manual and typically takes one to four weeks. You'll receive an email when a decision is made. Rejections include a reason; most are resolved by publishing more content or fixing a missing About or Privacy Policy page.

## What to do next

- [Google Search Console](/docs/seo/google-search-console/) — verify ownership and monitor search performance.
- [News sitemap](/docs/seo/news-sitemap/) — how the news sitemap is generated and what it includes.
- [Structured data](/docs/seo/structured-data/) — the JSON-LD schema on article pages.

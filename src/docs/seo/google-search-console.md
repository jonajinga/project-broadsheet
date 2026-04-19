---
title: Google Search Console
subtitle: How to verify your publication with Google Search Console, submit your sitemap, and use coverage and performance reports to improve search visibility.
order: 10
updated: 2026-04-18
---

<span class="g-term" data-term="Google">Google</span> Search Console is a free tool that tells you how Google sees your site — which pages are indexed, which queries send traffic, and what errors prevent pages from appearing in search results. It doesn't affect rankings directly, but it's the only authoritative way to know whether Google has found and indexed your content.

## Verify ownership

1. Go to [search.google.com/search-console](https://search.google.com/search-console) and sign in.
2. Click **Add property** and enter your publication's full URL (e.g., `https://example.com`).
3. Choose a verification method. The two most reliable options are:

**DNS record (recommended):** Add a `TXT` record to your domain's DNS settings. Cloudflare, Namecheap, and most registrars support this from their DNS management panel. The record looks like:
```
Type: TXT
Name: @
Value: google-site-verification=...
```

**HTML tag:** Google provides a `<meta>` tag to add to your `<head>`. In Project Broadsheet, open `src/_includes/layouts/base.njk` and paste it between the existing meta tags. Commit and deploy — Google can verify once the tag is live.

4. Click **Verify**. If successful, you'll see a "Verified" confirmation.

## Submit your sitemap

After verification, tell Google where to find all your pages:

1. In Search Console, open **Sitemaps** from the left sidebar.
2. Enter `sitemap.xml` in the URL field and click **Submit**.
3. If you publish news content, also submit `news-sitemap.xml`.

Google will crawl the sitemap and begin indexing pages. New publications typically see coverage within a few days; the news sitemap is checked more frequently (often within hours).

## Read the coverage report

**Indexing → Pages** shows the status of every URL Google has found:

- **Indexed** — pages appearing in search results. This is where you want your articles.
- **Not indexed** — pages Google found but chose not to index. Common reasons include thin content, duplicate pages, or `noindex` directives.
- **Excluded** — pages intentionally left out (your sitemap should exclude drafts, pagination, and utility pages; Project Broadsheet does this automatically).

Click any status to see the affected URLs and the specific reason.

## Read the performance report

**Search results → Search performance** shows:

- **Queries** — the search terms that surfaced your articles.
- **Pages** — which articles receive the most impressions and clicks.
- **Impressions** — how many times your content appeared in results.
- **Average position** — where your articles rank for a given query.

This data is delayed by a few days and represents a rolling 28-day window by default. Use it to identify articles that appear in search but have a low click-through rate — that usually means the title or description isn't compelling.

## Request indexing for a specific page

When you publish an important article and want Google to crawl it quickly:

1. Paste the article's full URL into the **Inspect any URL** bar at the top of Search Console.
2. Click **Request indexing**.

Google doesn't guarantee a timeline, but most pages are crawled within a day or two of a manual request.

## What to do next

- [Submit to Google News](/docs/integrations/google-news/) — for news publications seeking Top Stories placement.
- [Sitemap](/docs/seo/sitemap/) — how Project Broadsheet's sitemap is generated.
- [Meta tags](/docs/seo/meta-tags/) — title, description, and canonical URL configuration.

---
title: API endpoints
subtitle: Project Broadsheet generates machine-readable JSON endpoints at build time. Use them to feed third-party tools, build native apps, power custom search, or export your content.
order: 8
updated: 2026-04-18
---

Every Project Broadsheet publication generates a set of JSON API endpoints as static files during the build. They are not a live API — they are built once at deploy time and updated with each rebuild. Since the site is static, there is no server to call; the JSON files are served directly from the CDN like any other file.

## Default endpoints

| Endpoint | Contents |
|---|---|
| `/api/articles.json` | All published articles with title, author, date, section, tags, description, and URL |
| `/api/authors.json` | All authors with name, bio, avatar URL, and article count |
| `/api/sections.json` | All editorial sections with name, slug, accent color, and article count |
| `/api/glossary.json` | All glossary terms with definition and related terms |
| `/api/quotes.json` | All quotes with text, author, source, year, and tags |
| `/api/events.json` | All events with title, date, location, and description |
| `/api/timeline.json` | Timeline entries ordered by date, including BCE entries |

## Example response

`/api/articles.json`:

```json
[
  {
    "title": "City Council Votes on Housing Bill",
    "author": "Jon Ajinga",
    "date": "2026-04-18",
    "section": "news",
    "tags": ["housing", "city-council", "springfield"],
    "description": "The council voted 7-2 to approve the affordable housing mandate.",
    "url": "https://example.com/news/city-council-housing-bill/"
  }
]
```

## Use cases

- **Feed a native app.** Fetch `/api/articles.json` to display your publication's content in a mobile app without maintaining a separate backend.
- **Power a custom search tool.** Index `/api/articles.json` with Algolia, Typesense, or any other search service.
- **RSS aggregators.** Some tools prefer JSON over XML. The article endpoint gives the same data as the RSS feed in a more parseable format.
- **Content syndication.** Share your article endpoint with partner publications that want to display your headlines.
- **Analytics dashboards.** Combine the articles and authors endpoints with your Umami data to build custom reporting.

## Add a new endpoint

Each endpoint is a Nunjucks template in `src/api/`. To add a new endpoint:

1. Create `src/api/custom.njk`
2. Set the permalink and output format:

```njk
---
permalink: /api/custom.json
eleventyExcludeFromCollections: true
---
{{ collections.myCollection | dump | safe }}
```

3. Replace `myCollection` with the Eleventy collection you want to expose.

For formatted, filtered output rather than a raw dump:

```njk
---
permalink: /api/featured.json
eleventyExcludeFromCollections: true
---
[
  {% for item in collections.allContent | head(10) %}
  {
    "title": {{ item.data.title | dump | safe }},
    "url": {{ item.url | dump | safe }},
    "date": {{ item.date | isoDate | dump | safe }}
  }{% if not loop.last %},{% endif %}
  {% endfor %}
]
```

## CORS

Since the JSON files are served as static files from your CDN, CORS behavior is controlled by your host's response headers. Cloudflare Pages and Netlify serve static files without CORS headers by default. To allow cross-origin requests to your API endpoints, add a `_headers` file to your project root:

```
/api/*
  Access-Control-Allow-Origin: *
```

## What to do next

- [RSS feeds](/docs/seo/rss/) for the XML equivalent of the articles endpoint.
- [Pagefind search](/docs/seo/pagefind-search/) for client-side full-text search powered by the built index.
- [Customization: filters](/docs/customization/filters/) for the Eleventy filters used to transform collections in templates.

---
title: Configure site.json
subtitle: The single file that controls your publication's metadata, sections, and integrations.
order: 1
updated: 2026-04-17
---

`src/_data/site.json` is the central configuration file for Project Broadsheet. Everything on the site — title, description, sections, integrations — is driven by this one file.

## The core fields

```json
{
  "title": "The Example Dispatch",
  "description": "Independent journalism for the curious.",
  "url": "https://example.com",
  "email": "hello@example.com",
  "founded": "2025-01-01"
}
```

## Sections

Editorial sections are defined as an array. Each section gets a URL, a title, an RSS feed, and pagination:

```json
"sections": [
  { "slug": "news", "label": "News", "color": "#C0392B" },
  { "slug": "opinion", "label": "Opinion", "color": "#2C5F8A" }
]
```

## Integrations

Fill in only the services you want to use:

```json
"buttondown": { "username": "your-username" },
"umami": { "websiteId": "xxx", "src": "https://analytics.umami.is/script.js" },
"cusdis": { "appId": "xxx" },
"web3forms": { "accessKey": "xxx" }
```

## What's next

- [Write your first article](/docs/content/write-an-article/).
- [Add an author](/docs/content/authors/).

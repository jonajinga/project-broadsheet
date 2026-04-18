---
title: Tags and filtering
subtitle: How to add tags to articles, tag naming conventions, how tags drive related-article suggestions, and how to use tags in templates.
order: 8
updated: 2026-04-18
---

Tags are a lightweight way to describe what an article is about beyond its section. A news article about local elections might carry `tags: [local, elections, colorado]`. Tags power two things in Project Broadsheet: **related-article suggestions** on article pages, and **filtering** in search results.

## Adding tags to an article

In the article's front matter:

```yaml
---
title: "Colorado election results"
section: news
tags: [local, elections, colorado, 2026]
---
```

`tags` takes a YAML array. Use lowercase, hyphen-separated slugs - no spaces, no uppercase.

## Tag naming conventions

- **Lowercase only**: `politics` not `Politics`
- **Hyphens for spaces**: `climate-change` not `climate change`
- **Specific over vague**: `supreme-court` beats `law`; `colorado-springs` beats `local`
- **Consistent**: pick a form and stick to it - `book-review` or `books`, not both
- **No punctuation**: no apostrophes, commas, or slashes

A short list of focused tags is more useful than a long list of broad ones. Three to six tags per article is a good target.

## How tags are used

### Related articles

Project Broadsheet compares tags across articles to surface related reads at the bottom of each article page. Articles sharing the most tags are ranked first. No configuration is needed - it runs automatically at build time.

### Search filtering

Pagefind indexes tag data so readers can filter search results by tag. See [Pagefind search](/docs/seo/pagefind-search/) for search configuration.

### Templates

Tags are available in templates as `article.data.tags`. To render a tag list:

```njk
{% if tags %}
<ul class="tag-list">
  {% for tag in tags %}
  <li class="tag">{{ tag }}</li>
  {% endfor %}
</ul>
{% endif %}
```

## Tag pages

Project Broadsheet does not generate a dedicated page per tag by default - there is no `/tags/elections/` URL out of the box. Tags are used internally for relatedness scoring and search indexing. If you want per-tag archive pages, see [Add a new editorial section](/docs/customization/add-a-section/) for how to create custom collection-driven pages.

## What to do next

- [Front matter reference](/docs/content/front-matter-reference/) for the full YAML field list.
- [Pagefind search](/docs/seo/pagefind-search/) to understand how tags appear in search.
- [Write your first article](/docs/content/write-an-article/) for the full article workflow.

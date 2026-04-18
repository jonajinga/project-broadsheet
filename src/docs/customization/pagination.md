---
title: Pagination
subtitle: How Project Broadsheet paginates section indexes and archive pages, how to change the number of articles per page, and how to customize pagination UI.
order: 7
updated: 2026-04-18
---

Pagination in Project Broadsheet works through Eleventy's built-in pagination feature. Section index pages automatically split into multiple pages when the article count exceeds the configured limit. Each page gets its own URL (`/news/`, `/news/2/`, `/news/3/`, etc.) and is included in the sitemap.

## Default settings

By default, section index pages show **12 articles per page**. This is configured in the section index template at `src/content/{section}/index.njk` (or the shared section layout).

```njk
---
pagination:
  data: collections.news
  size: 12
  alias: articles
  addAllPagesToCollections: true
---
```

- `data` - the Eleventy collection to paginate (e.g., `collections.news`)
- `size` - articles per page
- `alias` - the variable name used in the template body to loop over the current page's articles
- `addAllPagesToCollections: true` - required so all paginated pages appear in the sitemap and search index; without this, only page 1 is included

## Changing articles per page

Open the section index template for the section you want to adjust and change `size`:

```njk
pagination:
  data: collections.news
  size: 20
```

The change applies to that section only. To change the default for all sections, update the shared section layout in `src/_includes/layouts/section.njk`.

## Pagination URLs

Eleventy generates URLs in this pattern:

| Page | URL |
|------|-----|
| Page 1 | `/news/` |
| Page 2 | `/news/2/` |
| Page 3 | `/news/3/` |

Page 1 is always at the bare section URL, not `/news/1/`.

## The pagination object in templates

Inside a paginated template, the `pagination` object provides metadata for building navigation controls:

```
{% raw %}{{ pagination.pageNumber }}{% endraw %}   {# 0-indexed current page #}
{% raw %}{{ pagination.pages.length }}{% endraw %} {# total number of pages #}
{% raw %}{{ pagination.href.previous }}{% endraw %} {# URL of previous page, or false #}
{% raw %}{{ pagination.href.next }}{% endraw %}     {# URL of next page, or false #}
```

The section index template renders previous/next buttons using these values:

```
{% raw %}{% if pagination.href.previous %}{% endraw %}
<a href="{% raw %}{{ pagination.href.previous }}{% endraw %}" class="pagination__prev">← Previous</a>
{% raw %}{% endif %}{% endraw %}
{% raw %}{% if pagination.href.next %}{% endraw %}
<a href="{% raw %}{{ pagination.href.next }}{% endraw %}" class="pagination__next">Next →</a>
{% raw %}{% endif %}{% endraw %}
```

## Customizing pagination UI

Pagination styles live in `src/assets/css/components/pagination.css`. The default renders simple previous/next links. To add page number buttons, use `pagination.pages` to loop over all pages:

```
{% raw %}{% for page in pagination.pages %}{% endraw %}
<a href="{% raw %}{{ pagination.hrefs[loop.index0] }}{% endraw %}"
   {% raw %}{% if loop.index0 == pagination.pageNumber %}{% endraw %}aria-current="page"{% raw %}{% endif %}{% endraw %}>
  {% raw %}{{ loop.index }}{% endraw %}
</a>
{% raw %}{% endfor %}{% endraw %}
```

## Paginating custom collections

To paginate a custom collection (e.g., a tag archive or author archive), use the same pattern:

```yaml
---
pagination:
  data: collections.byTag.elections
  size: 12
  alias: articles
  addAllPagesToCollections: true
permalink: /tags/elections/
---
```

## What to do next

- [Add a new editorial section](/docs/customization/add-a-section/) to create a new paginated archive.
- [XML sitemap](/docs/seo/sitemap/) to understand how `addAllPagesToCollections` affects the sitemap.
- [Template filters](/docs/customization/filters/) for collection-filtering utilities.

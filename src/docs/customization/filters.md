---
title: Template filters
subtitle: The helper functions Project Broadsheet registers with Eleventy. Use them inside any Nunjucks template with the pipe syntax (`{{ value | filter }}`).
order: 3
updated: 2026-04-17
---

Filters are small, reusable helper functions you call from templates with a pipe: `{% raw %}{{ my_value | my_filter }}{% endraw %}`. Project Broadsheet registers a set of filters useful for publishing. They're all defined in `eleventy.config.js` and available in every template.

## Built-in filters

| Filter | Purpose | Example |
|---|---|---|
| `year` | Current four-digit year | `{% raw %}{{ '' | year }}{% endraw %}` → `2026` |
| `readableDate` | Format a date as "April 17, 2026" | `{% raw %}{{ post.date | readableDate }}{% endraw %}` |
| `htmlDateString` | Format a date as `YYYY-MM-DD` | Used in `<time>` elements |
| `head` | First N items of an array | `{% raw %}{{ collections.posts | head(3) }}{% endraw %}` |
| `striptags` | Remove HTML tags | Useful for RSS descriptions |
| `readingTime` | Estimate minutes to read | `{% raw %}{{ content | readingTime }}{% endraw %}` |
| `rejectattr` | Filter an array by attribute | `{% raw %}{{ posts | rejectattr('draft', true) }}{% endraw %}` |
| `truncate` | Trim to N characters | `{% raw %}{{ description | truncate(120) }}{% endraw %}` |
| `slugify` | Convert text to a URL slug | `{% raw %}{{ title | slugify }}{% endraw %}` |
| `where` | Filter an array by key/value | `{% raw %}{{ docs | where('category', 'design') }}{% endraw %}` |
| `split` | Split a string into an array | `{% raw %}{{ "a,b,c" | split(",") }}{% endraw %}` |

## Adding a custom filter

Open `eleventy.config.js` and register a filter with `addFilter`:

```js
eleventyConfig.addFilter("uppercase", (str) => {
  return String(str).toUpperCase();
});
```

Use it immediately:

```njk
{% raw %}{{ "hello" | uppercase }}{% endraw %}
```

The dev server hot-reloads config changes - no restart needed.

## Chaining filters

Filters can be chained, and they pass the result left-to-right:

```njk
{% raw %}{{ content | striptags | truncate(160) }}{% endraw %}
```

That strips HTML first, then truncates to 160 characters.

## Filters with arguments

Arguments go in parentheses:

```njk
{% raw %}{{ posts | head(5) }}{% endraw %}
{% raw %}{{ title | truncate(80) }}{% endraw %}
{% raw %}{{ docs | where("category", "design") }}{% endraw %}
```

## Shortcodes vs. filters

Filters transform a value. Shortcodes render larger blocks of HTML and may take many arguments. For bigger pieces of rendering, use a shortcode (defined with `addShortcode`) or an include.

## What to do next

- [Custom layouts](/docs/customization/custom-layouts/) for wholesale template changes.
- [Add a new section](/docs/customization/add-a-section/) for section-level customization.
- [Project structure](/docs/getting-started/project-structure/) for where `eleventy.config.js` lives.

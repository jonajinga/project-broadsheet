---
title: Custom layouts
subtitle: Override the default template for a page, an article type, or a whole section. Build your own layouts without forking the framework.
order: 2
updated: 2026-04-17
---

Layouts are the templates Project Broadsheet uses to wrap content in consistent chrome (header, footer, breadcrumbs, metadata). The default layouts live in `src/_includes/layouts/`. You can override any of them per page, per section, or globally without forking the framework.

## Default layouts

- `layouts/base.njk` — the HTML skeleton, used by every page indirectly.
- `layouts/page.njk` — standard content pages with a title header.
- `layouts/post.njk` — blog posts.
- `layouts/doc.njk` — doc pages with sidebar and TOC.
- `layouts/article.njk` — editorial articles (with author byline, section accent, reader tools).
- `layouts/review.njk` — review articles with rating and metadata box.
- `layouts/library-chapter.njk` — chapters in the public-domain library.
- `layouts/edition.njk` — numbered issues.
- `layouts/event.njk` — calendar events.

## Override a layout for a specific page

In the page's front matter:

```yaml
layout: layouts/my-custom.njk
```

Project Broadsheet looks for `src/_includes/layouts/my-custom.njk` and uses it. The file must exist, and it should extend or include `layouts/base.njk` to get the header, footer, and global chrome.

## Create a new layout

Start from an existing layout. Copy `layouts/article.njk` to `layouts/article-special.njk` and edit. Any changes you make affect only pages that set `layout: layouts/article-special.njk`.

A minimal layout:

```html
{% raw %}---
layout: layouts/base.njk
---
<article class="container container-narrow">
  <h1>{{ title }}</h1>
  {{ content | safe }}
</article>{% endraw %}
```

## Scope a layout to an entire section

To make every article in one section use a custom layout, add a directory data file. Create `src/content/news/news.json`:

```json
{
  "layout": "layouts/news-article.njk"
}
```

Every `.md` file in `src/content/news/` inherits `layout` unless it overrides it in its own front matter.

## Extending partials

Most layout customization is a matter of swapping one partial, not the whole layout. For example, to change the article byline:

1. Copy `src/_includes/partials/byline.njk` to `partials/byline-custom.njk`.
2. Edit the copy.
3. In `layouts/article.njk`, change `{% raw %}{% include "partials/byline.njk" %}{% endraw %}` to `partials/byline-custom.njk`.

This isolates the change to one file and leaves the rest of the article layout untouched.

## What to do next

- [Filters](/docs/customization/filters/) for Nunjucks helpers you can call from templates.
- [Add a new section](/docs/customization/add-a-section/) for full section customization.
- [Project structure](/docs/getting-started/project-structure/) for where everything lives.

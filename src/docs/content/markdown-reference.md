---
title: Markdown reference
subtitle: The full list of Markdown features supported in Project Broadsheet, from basic headings to footnotes, task lists, and fenced code blocks with syntax highlighting.
order: 6
updated: 2026-04-17
---

Project Broadsheet uses `markdown-it` under the hood, which means your articles support standard <span class="g-term" data-term="Markdown">Markdown</span> plus a handful of extensions. If you've written Markdown anywhere else, nothing here will surprise you. Everything below goes in the body of an article, below the closing `---` of the front matter.

## Headings

```markdown
# Article title (use front-matter title instead)
## Section heading
### Subsection heading
#### Minor heading
```

Project Broadsheet already renders the article's `title` as an `<h1>`, so your first body heading should be `##` (H2).

## Emphasis

```markdown
*italic* or _italic_
**bold** or __bold__
***bold italic***
~~strikethrough~~
```

## Lists

```markdown
- Unordered
- List
  - Nested item

1. Ordered
2. List
```

## Links and images

```markdown
[Link text](https://example.com)
[Internal link](/about/)
![Alt text for the image](/assets/img/example.jpg)
```

Always include descriptive alt text on every image. It is required for accessibility and helps <span class="g-term" data-term="SEO">SEO</span>.

## Blockquotes

```markdown
> A short quotation.
>
> A second paragraph within the same quote.
>
> > Nested blockquote for conversation.
```

## Code

Inline code uses backticks: `` `npm install` ``.

Fenced code blocks use three backticks, with a language hint for syntax highlighting:

````markdown
```bash
git clone https://example.com/repo.git
cd repo
```

```js
const hello = "world";
console.log(hello);
```

```yaml
title: "My article"
date: 2026-04-17
```
````

## Tables

```markdown
| Column A | Column B | Column C |
|----------|----------|----------|
| Value 1  | Value 2  | Value 3  |
| Value 4  | Value 5  | Value 6  |
```

## Task lists

```markdown
- [x] Something done
- [ ] Something pending
- [ ] Something else
```

## Horizontal rules

```markdown
---
```

Three or more hyphens on a line by themselves. Do not confuse with the front-matter fences, which only appear at the very top of the file.

## Footnotes

```markdown
Here is a sentence with a footnote.[^1]

[^1]: This is the footnote text. It can span multiple lines if indented.
```

Footnotes render as numbered references linking to a section at the bottom of the article.

## Auto-linked URLs

```markdown
<https://example.com>
```

Angle brackets turn a bare URL into a link without needing the `[text](url)` pattern.

## What Markdown does NOT do

Markdown is limited by design. If you need any of the following, use HTML directly inside the Markdown file or create a custom shortcode:

- Multi-column layout
- Centered or right-aligned text
- Embedded video (use an iframe)
- Custom classes on specific elements

## What to do next

- [Front matter reference](/docs/content/front-matter-reference/) for the metadata above the body.
- [Write your first article](/docs/content/write-an-article/) end-to-end.
- [Customize article layouts](/docs/customization/custom-layouts/) if Markdown isn't enough.

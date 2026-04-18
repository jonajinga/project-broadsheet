---
title: Build errors
subtitle: A field guide to the most common Eleventy build failures and how to diagnose them. Covers front-matter syntax, template errors, data-file bugs, and missing dependencies.
order: 2
updated: 2026-04-17
---

Most build errors in Project Broadsheet fall into four categories: YAML syntax in front matter, Nunjucks template errors, JavaScript in data files, and missing dependencies. Each has a recognizable error message and a quick fix.

## YAML syntax errors in front matter

Symptom:

```
[11ty] Having trouble rendering front matter
[11ty] YAMLException: mapping values are not allowed here
```

The article has invalid <span class="g-term" data-term="YAML">YAML</span> between the `---` fences. Common mistakes:

- A colon inside a title that isn't quoted: `title: This is: a problem` → `title: "This is: a problem"`
- A line starts with `!` or `@` or another YAML special character: quote the value.
- Inconsistent indentation under a key like `subject:`: use spaces, not tabs, and be consistent.

Fix: quote the entire title or value in double quotes whenever it contains a colon, quote, or leading special character.

## Template syntax errors

Symptom:

```
[11ty] expected variable end
[11ty] unexpected end of template
```

A Nunjucks tag was left open. Usually a missing `{% raw %}{% endif %}{% endraw %}` or `{% raw %}{% endfor %}{% endraw %}` somewhere in a template.

Look at the line number in the error. Nunjucks counts lines inclusive of front matter.

## Undefined variable

Symptom:

```
[11ty] Cannot read properties of undefined
```

A template references a variable that doesn't exist. Common causes:

- Front-matter field missing: add a default in the template with `{% raw %}{{ value or "fallback" }}{% endraw %}`.
- Data file path typo: confirm the filename under `src/_data/` matches the variable name used in the template.
- An article is missing a required field (like `author`). See [Front matter reference](/docs/content/front-matter-reference/).

## JavaScript errors in data files

Symptom:

```
[11ty] Error loading data file
[11ty] SyntaxError: Unexpected token
```

A `.js` file in `src/_data/` has a JS error. The file must `export default` something valid.

Check:
- Is the file missing a trailing `;` or a comma in an object?
- Does it use top-level `import`? In ESM (which this project uses), that's fine, but the imported path must exist.
- Does every function called actually exist on the import?

## Missing dependency

Symptom:

```
Cannot find module '@11ty/eleventy-img'
```

The `node_modules` folder is missing or corrupted. Fix:

```bash
rm -rf node_modules package-lock.json
npm install
```

This deletes the dependency folder and reinstalls cleanly.

## Port 8080 in use

Symptom:

```
Error: listen EADDRINUSE: address already in use :::8080
```

Another process is using port 8080. Either:
- Find and kill the other process.
- Start Eleventy on a different port: `npx eleventy --serve --port 8081`.

## Pagefind error after build

Symptom:

```
Pagefind indexing failed: ...
```

Pagefind runs after the main build. If the build itself succeeded but Pagefind failed, search won't work but the rest of the site deploys fine. Check:
- Is the `_site/` folder accessible to the Pagefind binary?
- Does the host have permission to execute binaries? (Some locked-down environments block this; configure `npm run build` to skip Pagefind in those cases.)

## When all else fails

1. **Read the full error trace** — the first few lines usually name the file and line.
2. **Run `npm run build` rather than `npm start`** — production build output is often more complete.
3. **Revert the last commit** — if the build was green 10 minutes ago, the last change introduced the bug.
4. **Ask for help** — [GitHub Discussions](https://github.com/jonajinga/broadsheet/discussions) or [the bug report form](/forms/bug-report/).

## What to do next

- [Common issues and fixes](/docs/troubleshooting/common-issues/) for non-build problems.
- [Front matter reference](/docs/content/front-matter-reference/) to avoid front-matter errors.
- [Local development](/docs/getting-started/local-development/) for the dev workflow.

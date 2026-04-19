# Contributing to Project Broadsheet

Thank you for your interest in contributing. Project Broadsheet is an open-source publishing framework and welcomes contributions of all kinds: bug reports, documentation improvements, feature suggestions, and code.

## Before you start

- Check the [open issues](https://github.com/jonajinga/broadsheet/issues) to see if your idea or bug is already tracked.
- For significant changes, open an issue first to discuss the approach before writing code.
- All contributors are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## How to contribute

### Reporting bugs

Use the [bug report template](https://github.com/jonajinga/broadsheet/issues/new?template=bug_report.md). Include the Project Broadsheet version, your Node.js version, steps to reproduce, and what you expected vs. what happened.

### Suggesting features

Use the [feature request template](https://github.com/jonajinga/broadsheet/issues/new?template=feature_request.md). Describe the problem you are trying to solve, not just the solution — this helps evaluate whether it fits the project's direction.

### Improving documentation

Documentation lives in `src/docs/` as Markdown files. To test a docs change locally:

```bash
git clone https://github.com/jonajinga/project-broadsheet.git
cd project-broadsheet
npm install
npm run dev
```

The docs site runs at `http://localhost:8080/docs/`.

### Submitting a pull request

1. Fork the repository and create a branch from `main`.
2. Make your changes. If you are adding a feature, update the relevant documentation.
3. Run a production build (`npm run build`) and confirm there are no errors.
4. Submit the PR using the pull request template.

## Commit style

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — a new feature
- `fix:` — a bug fix
- `docs:` — documentation changes
- `style:` — formatting, missing semicolons, etc.
- `refactor:` — code change that is neither a fix nor a feature
- `chore:` — build process, dependency updates

## Code style

- Vanilla CSS — no frameworks, no preprocessors
- Vanilla JS — no bundler, progressive enhancement
- Nunjucks templates — keep logic minimal; move data to `src/_data/`
- No `@import` in CSS output — all partials are concatenated at build time

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

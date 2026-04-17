# Project Broadsheet — Website

Marketing site and help center for [Project Broadsheet](https://github.com/jon-ajinga/broadsheet), the free, open-source publication system for independent journalists and publishers.

## Stack

- [Eleventy v3](https://www.11ty.dev) (ESM)
- Nunjucks templates
- Vanilla CSS (build-time concatenation — no `@import` in production)
- Vanilla JS (no bundler)
- [Pagefind](https://pagefind.app) for docs search
- Deployed on Cloudflare Pages

## Develop

```bash
npm install
npm run dev
```

Runs at `http://localhost:8080`.

## Build

```bash
npm run build
```

Outputs static site to `_site/`.

## License

MIT. Website by [Pikes Peak Web Designs](https://www.pikespeakwebdesigns.com).

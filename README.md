# Project Broadsheet

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Eleventy](https://img.shields.io/badge/built%20with-Eleventy%20v3-black.svg)](https://www.11ty.dev)

**A free, open-source publishing framework for independent journalists, student newspapers, and small newsrooms.**

Project Broadsheet gives independent publishers the same editorial infrastructure that major outlets use — nine editorial sections, a reviews stack, a public-domain library, 27+ reader tools, full-text search, SEO, newsletter integration, and privacy-respecting analytics — with no subscription, no database, and no platform lock-in.

**[projectbroadsheet.com](https://projectbroadsheet.com)** · **[Live example: The Freethinking Times](https://thefreethinkingtimes.com)** · **[Documentation](https://projectbroadsheet.com/docs/)**

---

## What's included

- **Nine editorial sections** — News, Opinion, Analysis, Arts & Culture, Science & Tech, History, Letters, Reviews, each with its own index, RSS feed, and accent color
- **27+ reader tools** — Text-to-speech, font picker, highlights, notes, reading ruler, focus mode, citations (APA/MLA/Chicago), download as Markdown, and more
- **Journalism tools** — Corrections log, response tracking, primary source documents, series navigation, argument maps, article profiles (standard, podcast, dataviz)
- **Specialty content** — Reviews, public-domain library, glossary with hover tooltips, events calendar, quotes collection, interactive games, curated bookshelf
- **Search, SEO, APIs** — Pagefind full-text search, JSON-LD structured data, Open Graph, Google News sitemap, machine-readable JSON API endpoints
- **Integrations** — Buttondown, Umami, Cusdis, Web3Forms, Decap CMS, GTranslate, Ko-fi/BMAC/Patreon tipping
- **PWA** — Service worker for offline reading, web app manifest for home screen installation
- **Privacy-first** — No database, no user accounts, cookieless analytics, client-side search

## Quick start

Requires [Node.js 18+](https://nodejs.org).

```bash
git clone https://github.com/jonajinga/broadsheet.git my-publication
cd my-publication
npm install
npm start
```

Open `http://localhost:8080` in your browser. Edit `src/_data/site.json` to set your publication name and start writing.

Full setup guide: [projectbroadsheet.com/docs/getting-started/](https://projectbroadsheet.com/docs/getting-started/)

## Deploy

Push to GitHub, connect to [Cloudflare Pages](https://pages.cloudflare.com) (free), set the build command to `npm run build` and the output directory to `_site`. HTTPS and a custom domain are included at no cost.

Detailed instructions: [projectbroadsheet.com/docs/deployment/](https://projectbroadsheet.com/docs/deployment/)

## Cost

| Item | Cost |
|---|---|
| Framework | Free, MIT, forever |
| Hosting (Cloudflare Pages) | Free |
| Domain | ~$10–15/year |
| Newsletter (Buttondown, up to 100 subscribers) | Free |

## About this repository

This repository contains the **marketing and documentation website** for Project Broadsheet, built with Eleventy. The framework itself lives at [github.com/jonajinga/broadsheet](https://github.com/jonajinga/broadsheet).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Bug reports and feature requests go in [Issues](https://github.com/jonajinga/broadsheet/issues). Broader questions and discussion go in [GitHub Discussions](https://github.com/jonajinga/broadsheet/discussions).

## License

MIT — see [LICENSE](LICENSE).

---
layout: layouts/page.njk
title: About
eyebrow: About
subtitle: What Project Broadsheet is, how it works, what it costs, and what you can do with it.
permalink: /about/
toc: true
---

<div class="lead">Project Broadsheet is a free, open-source publishing framework built on <a href="https://www.11ty.dev">Eleventy</a>. It gives independent publishers the same editorial infrastructure that major outlets use, with no subscription, no database, and no platform lock-in.</div>

<hr class="gold-rule">

## Why it exists

Publishing used to require a building full of equipment and a staff of twenty. Today it requires a web browser and a recurring bill, but the options are still narrower than they should be. You can pay a SaaS platform and accept that your content, your reader list, and your entire operation live on someone else's servers. You can wrestle with WordPress and spend more time on maintenance than on writing. You can roll your own static site and rebuild every feature from scratch.

None of those matched what I wanted to use. So I built what I wanted to use.

Project Broadsheet is the result: a full publishing system with nine editorial sections, a reviews stack, a public-domain library, twenty-seven reader tools, full-text search, SEO, newsletter integration, privacy-respecting analytics, and the small handful of other things a real publication needs. All of it lives in a Git repository you control. All of it is free.

## How it works

Project Broadsheet is a static site. You write in Markdown, Eleventy builds the HTML, and you deploy the output to any static host. There is no server to manage, no database to maintain, and no runtime to keep patched.

Content is plain Markdown stored in your Git repository. You own it completely. Migration away from Project Broadsheet is as trivial as copying the Markdown files somewhere else.

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Site generator | Eleventy v3 (ESM) | Static, no server required |
| Templates | Nunjucks | `.njk` files, close to plain HTML |
| Content | Markdown + YAML front matter | Stored in Git, fully portable |
| Styling | Vanilla CSS custom properties | No frameworks, no bundler, single output file |
| JavaScript | Vanilla JS | Progressive enhancement; site works without JS |
| Search | Pagefind | Client-side, full-text, no tracking |
| Images | eleventy-img | AVIF + WebP + JPEG, lazy loaded, responsive `sizes` |
| HTML output | @sardine/eleventy-plugin-tinyhtml | Minified at build |
| Hosting | Any static host | Cloudflare Pages, Netlify, Vercel, S3, or your own server |
| Database | None | |

Build time is approximately 12 seconds for 500 pages on a mid-range laptop.

## Privacy

Project Broadsheet collects nothing by default. There is no database, no user accounts, no stored sessions, and no analytics unless you opt in.

- Content lives in your Git repository, not on a third-party server
- Pagefind search runs entirely client-side, no queries are sent anywhere
- Umami analytics is opt-in and cookieless by design
- No telemetry, no phone-home, no tracking pixels in the framework itself
- Third-party integrations (Buttondown, Cusdis, GTranslate) are opt-in; each carries its own privacy policy

See the full [Privacy Policy](/privacy/) for details on this website specifically.

## Accessibility

Project Broadsheet targets WCAG 2.2 Level AA throughout.

- Body text contrast ratio: 15.6:1 (more than three times the AA minimum)
- Semantic HTML5 elements throughout (`<nav>`, `<main>`, `<article>`, `<button>`)
- Skip link on every page, visible focus rings, `aria-current` on active nav links
- Every interactive element is at minimum 44x44 CSS pixels
- `prefers-reduced-motion` and `prefers-color-scheme` respected globally
- Tested with VoiceOver (macOS/iOS), NVDA (Windows), keyboard-only, and 200% browser zoom

See the full [Accessibility Statement](/accessibility/) for the complete list.

## What it costs

| Item | Cost |
|---|---|
| Framework | Free, MIT, forever |
| Hosting | Free on Cloudflare Pages or Netlify free tier |
| Domain | ~$10-15/year (Cloudflare Registrar, Namecheap, etc.) |
| Buttondown newsletter | Free up to 100 subscribers |
| Umami analytics | Free self-hosted; paid cloud plans available |
| My time | [$150/hour](/pricing/) |

There is no paid tier, no enterprise edition, and no plan to introduce either. The framework is free regardless of whether you ever hire me.

Optional support for the project: [Open Collective](https://opencollective.com/broadsheet) or [GitHub Sponsors](https://github.com/sponsors/{{ meta.githubOwner }}).

## Features you can enable, disable, or customize

### Reader tools

All reader tools are on by default. Readers can adjust or turn off individual tools from the reader panel on any article. Publications can disable specific tools in the site config.

| Feature | Default | Configure via |
|---|---|---|
| Text-to-speech with word highlight sync | On | `reader.tts` |
| Font picker (27 choices) | On | `reader.fontPicker` |
| Highlights and notes (six colors) | On | `reader.highlights` |
| Reading ruler | On | `reader.ruler` |
| Focus mode | On | `reader.focusMode` |
| Reading list (save for later) | On | `reader.readingList` |
| Font size, line spacing, text width, word spacing | On | `reader.typography` |
| Background presets (sepia, dark, high-contrast, etc.) | On | `reader.backgrounds` |
| Paragraph numbering and auto-scroll | On | `reader.readingAids` |
| Download as TXT or Markdown | On | `reader.download` |
| Citation formatter (APA 7, MLA 9, Chicago 17) | On | `reader.citations` |
| Reader panel (highlights, bookmarks, related, citation) | On | `reader.panel` |
| Notes page at /notes/ | On | `reader.notesPage` |
| Voice search and form dictation | On | `reader.voiceSearch` |
| Import/export reader data as JSON | On | `reader.dataPortability` |

### Integrations

All integrations are opt-in. Enable by adding the relevant key to your site config.

| Integration | Purpose | Configure via |
|---|---|---|
| Umami | Cookieless analytics | `integrations.umami` |
| Buttondown | Newsletter management | `integrations.buttondown` |
| Cusdis | Privacy-first comments | `integrations.cusdis` |
| Web3Forms | Contact form backend | `integrations.web3forms` |
| Pages CMS | Browser-based editing | `integrations.pagesCms` |
| GTranslate | Machine translation, 80+ languages | `integrations.gtranslate` |

### Editorial features

| Feature | Default | Configure via |
|---|---|---|
| Sections (9 default: News, Opinion, Analysis, etc.) | On | `src/_data/sections.js` |
| Per-section RSS feeds | On | Automatic |
| Per-section accent colors | On | Section data file |
| Author-specific RSS feeds | On | Automatic |
| Editions (numbered issues, printable as PDF) | Off | `editions: true` |
| Reviews (books, films, podcasts, docs) | Off | Add to content types |
| Library (public-domain long-form works) | Off | `library: true` |
| Events calendar | Off | `events: true` |
| Glossary (A-Z, hover tooltips, search) | Off | `glossary: true` |

### Design and branding

| Feature | Default | Customized via |
|---|---|---|
| Dark mode | On (follows system) | Manual toggle also available |
| Design tokens (colors, spacing, type) | Broadsheet defaults | `src/assets/css/tokens.css` |
| Per-section accent colors | Broadsheet defaults | Section data file |
| Typography | Four included fonts | `src/assets/css/tokens.css` |
| Custom sections | Nine defaults | Add entries to `sections.js` |

Full customization documentation is in the [Docs](/docs/).

## About the project

My name is [Jon Ajinga](/jon-ajinga/). I'm a web developer and writer based in Colorado. I run [The Freethinking Times](https://thefreethinkingtimes.com), the publication that was the first live test of Project Broadsheet. I also operate [Pikes Peak Web Designs](https://www.pikespeakwebdesigns.com), the practice that built the site you're reading.

I built Project Broadsheet for myself first. I released it because other people kept asking how I'd built things on The Freethinking Times, and writing answers turned into writing a framework.

## What's next

The [public roadmap](/roadmap/) tracks upcoming work. The [changelog](/changelog/) records what has shipped. The [blog](/blog/) is where I write about the work as it happens.

<hr class="gold-rule">

<p class="lead">Questions, ideas, or a publication to show me? <a href="/contact/">Get in touch</a>. I read every message myself.</p>

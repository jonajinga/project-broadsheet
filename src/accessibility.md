---
layout: layouts/page.njk
title: Accessibility Statement
eyebrow: Legal
subtitle: Our commitment to making Project Broadsheet, the product and this website, usable by everyone.
permalink: /accessibility/
toc: true
---

**Last reviewed: 2026-04-17**

Project Broadsheet is designed to meet **[WCAG 2.2 Level AA](https://www.w3.org/WAI/WCAG22/quickref/)**. This page describes the standards we target, the accessibility features built into this website and the framework, and how to report an issue if you hit a barrier.

## Standards we target

- **WCAG 2.2 Level AA**. Perceivable, Operable, Understandable, Robust
- **Section 508** (US federal procurement standard), met through WCAG 2.2 AA conformance
- **EN 301 549** (European accessibility directive), met through WCAG 2.2 AA conformance

## Features built into this website

### Perceivable

- **Color contrast.** Body text is 15.6:1 against the background, more than three times the AA minimum. Muted/secondary text is 7.1:1. Accent colors (vermillion, slate) are 5.2:1 and 6.8:1 respectively. See the <a href="/style-guide/#contrast">full contrast table</a>.
- **Dark mode.** Automatic detection via `prefers-color-scheme`, plus a manual toggle. Contrast ratios are independently verified in both modes.
- **Text alternatives.** All meaningful images have `alt` attributes. Decorative SVGs carry `aria-hidden="true"`.
- **Scalable text.** All sizes use `rem` and `clamp()`. Zooming to 200% doesn't break layout or clip content.
- **No flashing content.** Nothing on this site flashes more than three times per second.

### Operable

- **Keyboard.** Every interactive element is reachable by keyboard. Tab order follows visual order.
- **Skip link.** The first focusable element on every page is "Skip to content", jump past navigation with one key.
- **Focus ring.** A visible 2px vermillion outline with 3px offset appears on every focused element. `:focus-visible` means it only shows for keyboard users, not mouse clicks.
- **Touch targets.** Every interactive element is a minimum of 44×44 CSS pixels, meeting WCAG 2.5.5 at AAA.
- **No time limits.** Nothing auto-refreshes, auto-dismisses, or requires a timed interaction.
- **Pausable motion.** Any motion on this site honors `prefers-reduced-motion`.

### Understandable

- **Clear language.** We write in plain English. Technical terms are linked to definitions where available.
- **Consistent navigation.** The same header, hamburger panel, and footer appear on every page in the same location.
- **Form labels.** Every form field has a visible, associated `<label>`. Required fields are marked with a visible asterisk and `required` attribute.
- **Helpful errors.** Invalid form fields show clear, text-based error indicators (not color alone).

### Robust

- **Semantic HTML.** We use the right element for the job. `<nav>`, `<main>`, `<article>`, `<button>`, `<a>`, so assistive technology can interpret the page correctly.
- **ARIA where needed.** `aria-label` on icon-only buttons, `aria-current="page"` on active nav links, `aria-expanded` on toggles, `role` landmarks on header, main, and footer.
- **Valid HTML.** The site passes W3C validation. No closing-tag drama.

## Features built into the framework

Project Broadsheet itself ships with reader-experience features that go beyond WCAG compliance:

- **Font picker**. 27 font choices, including high-legibility options for dyslexia
- **Text-to-speech**. Web Speech API with word-level highlight sync
- **Reading ruler**, customizable thickness and color to aid line tracking
- **Focus mode**, dims everything except the article body
- **Highlights and notes**, six colors, persistent per-device
- **Adjustable spacing**, tight / normal / relaxed line-height
- **Adjustable font size**, four steps from small to x-large
- **Import/export**, take all your reader data with you as JSON

## Known issues

We maintain this list honestly. If something breaks, we say so.

- **Pagefind search UI**, the third-party Pagefind component renders its own DOM. We apply our focus styles to it, but we cannot verify every internal keyboard path.
- **Third-party embeds**, if a page includes a Buttondown form, YouTube embed, or Google Map, those iframes carry their own accessibility profile outside our control.
- **Form error messaging**, we rely on native browser constraint validation. Error messages are clear but visually unstyled in some browsers.

If you find anything else, please report it.

## How to report a problem

The fastest way:

- **<a href="/forms/bug-report/">File a bug report</a>** with "Accessibility" in the subject
- **Email** <a href="mailto:{{ meta.email }}">{{ meta.email }}</a>
- **GitHub Issues** at <a href="{{ meta.github }}/issues">{{ meta.githubOwner }}/{{ meta.githubRepo }}</a>

We aim to acknowledge accessibility reports within **one business day** and fix confirmed barriers within **30 days**. Critical barriers are fixed immediately and deployed the same day.

## Assistive technology tested

This website has been tested with:

- **VoiceOver** (macOS, iOS)
- **NVDA** (Windows)
- **Chrome DevTools Accessibility panel**
- **axe DevTools** automated scan
- **Keyboard-only navigation** (no mouse)
- **200% browser zoom**
- **macOS / iOS Increase Contrast mode**
- **Windows High Contrast mode**

## Technical specifications

This website is built on:

- **Eleventy v3** (ESM), a static site generator
- **Semantic HTML5**, rendered as static files
- **Vanilla CSS** with `prefers-color-scheme` and `prefers-reduced-motion`
- **Vanilla JavaScript**, progressive enhancement, site works without JS for read-only browsing
- **No frameworks**, no bundlers, no runtime dependencies

The full source is at <a href="https://github.com/jonajinga/project-broadsheet">github.com/jonajinga/project-broadsheet</a>, audit it yourself if you like.

## This statement

This accessibility statement was last reviewed on **April 17, 2026**. It's reviewed every six months and after any significant site change.

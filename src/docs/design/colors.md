---
title: Color system
subtitle: Every color in Project Broadsheet is a CSS custom property. Change one token and the entire site updates. This page explains the palette, the token names, and the contrast guarantees.
order: 4
updated: 2026-04-17
---

Project Broadsheet's palette is a newsprint-inspired set: warm cream paper, ink black, vermillion for accents, slate blue for links, gold for decorative dividers. Every color on the site is declared once as a <span class="g-term" data-term="design token">design token</span> in `src/assets/css/tokens.css`, and every component references the token rather than a raw hex value.

## The tokens

```css
:root {
  /* Surfaces */
  --paper: #F4F1EB;
  --paper-raised: #FBF8F2;
  --paper-sunken: #EBE6DB;

  /* Text */
  --ink: #1A1A1A;
  --ink-soft: #2C2C2C;
  --muted: #5C544A;

  /* Accents */
  --vermillion: #C0392B;
  --slate: #2C5F8A;
  --rule: #8B6F47;
  --gold: #B8862C;
}
```

## What each color is for

| Token | Role | Contrast on paper |
|---|---|---|
| `--paper` | Primary page background | - |
| `--paper-raised` | Cards, panels, alert boxes | - |
| `--paper-sunken` | Footer, alt sections, code blocks | - |
| `--ink` | Body text | 15.6 : 1 |
| `--ink-soft` | Lead paragraphs | 12.4 : 1 |
| `--muted` | Meta, captions, eyebrows | 7.1 : 1 |
| `--vermillion` | Primary accent, buttons, emphasis | 5.2 : 1 |
| `--slate` | Links | 6.8 : 1 |
| `--rule` | Decorative horizontal rules | - |
| `--gold` | Badge borders, callout accents | - |

Contrast ratios are measured against `--paper`. All body pairings meet or exceed <span class="g-term" data-term="WCAG">WCAG</span> 2.2 Level AA.

## Semantic tokens

On top of the palette, Project Broadsheet derives semantic tokens that components actually use:

```css
--surface: var(--paper);
--surface-raised: var(--paper-raised);
--text: var(--ink);
--text-soft: var(--ink-soft);
--text-muted: var(--muted);
--accent: var(--vermillion);
--link: var(--slate);
--border: rgba(26, 26, 26, 0.12);
--border-strong: rgba(26, 26, 26, 0.24);
--focus: var(--vermillion);
```

Use the semantic tokens in your own components (`var(--text)`, `var(--accent)`, etc.) rather than the raw palette values. That way if you change the palette, every component updates automatically.

## Per-section accent colors

Each <span class="g-term" data-term="editorial section">section</span> can override the accent used on its headlines and dividers. Set `color` on the section entry in `site.json`:

```json
{ "slug": "science", "label": "Science", "color": "#2C5F8A" }
```

The section-specific accent only applies inside that section's pages; site-wide accents remain vermillion.

## Dark mode palette

Dark mode has its own tokens in `:root[data-theme="dark"]`. See <a href="/docs/design/dark-mode/">Dark mode</a> for the full list. Contrast ratios are re-verified for dark-mode pairings; the muted color is brightened so meta text remains legible on the dark surface.

## What to do next

- [Customize design tokens](/docs/design/tokens/) for spacing and typography tokens.
- [Dark mode](/docs/design/dark-mode/) for the light/dark system.
- [Accessibility statement](/accessibility/) for the full contrast audit.

export default {
  highlights: [
    {
      title: "Reader experience",
      summary: "A full set of reader-side controls applied to every article: font selection, size, spacing, highlights, notes, reading ruler, focus mode, background presets, download, citations, and more. All on by default.",
      points: [
        "Font picker, size slider, line spacing, text width, word spacing",
        "Background presets: default, sepia, cream, dark, high-contrast",
        "Highlights (6 colors), notes, bookmarks, and reading list",
        "Reading ruler, focus mode, paragraph numbering, auto-scroll",
        "Download article as TXT or Markdown",
        "Citation formatter: APA 7, MLA 9, Chicago 17",
        "Aggregated notes page at /notes/",
        "Reader panel with highlights, bookmarks, progress, related, and citation tabs",
        "Import and export reader data as JSON"
      ]
    },
    {
      title: "Editorial sections",
      summary: "Nine top-level editorial categories configured by default, each with its own index page, RSS feed, and accent color. Sections are defined in a single data file and easy to add, remove, or rename.",
      points: [
        "News, Opinion, Analysis, Arts & Culture",
        "Science & Tech, History, Letters, Reviews",
        "Per-section accent colors and RSS feeds",
        "Author-specific RSS feeds",
        "Editions: numbered issues, printable as PDF"
      ]
    },
    {
      title: "Specialty content types",
      summary: "Dedicated templates for reviews, a public-domain library, glossary, events, games, quotes, bookshelf, and curated collections. Each has its own front-matter schema, layout, and index page.",
      points: [
        "Reviews: books, films, podcasts, documentaries",
        "Public-domain library with chapter navigation and reading progress",
        "A-to-Z glossary with hover tooltips in article text",
        "Events calendar with recurrence support",
        "Interactive games: word scramble and fifteen-puzzle (more on the roadmap)",
        "Quotes collection with pull-quote shortcode",
        "Curated bookshelf with categories and filtering"
      ]
    },
    {
      title: "Journalism tools",
      summary: "Features built for serious publishing: corrections log, response tracking, primary source documents, series navigation, argument maps, article profiles, revision history, and editorial workflow metadata.",
      points: [
        "Corrections log: dated, transparent, aggregated at /corrections/",
        "Response and backlink tracking between articles",
        "Primary source documents collection (FOIA, court records, filings)",
        "Multi-part series navigation with auto-generated part links",
        "Argument maps: structured thesis, premises, and conclusion",
        "Article profiles: standard, podcast (inline audio), dataviz (iframe embed)",
        "Revision history linked to GitHub commit log"
      ]
    },
    {
      title: "Search, SEO, and APIs",
      summary: "Client-side full-text search via Pagefind. Structured data, Open Graph, news sitemap, and machine-readable JSON API endpoints all generated at build time.",
      points: [
        "Pagefind full-text search, client-side, no tracking",
        "JSON-LD structured data (Article, NewsArticle, BreadcrumbList)",
        "Open Graph and Twitter Cards",
        "XML sitemap and Google News sitemap",
        "Per-section and per-author RSS feeds",
        "Machine-readable JSON API endpoints",
        "Print stylesheets for articles and editions"
      ]
    },
    {
      title: "Integrations and monetization",
      summary: "Optional third-party services enabled by a single configuration field. Reader tipping through Ko-fi, BMAC, and Patreon at both the publication and per-author level.",
      points: [
        "Buttondown newsletter (no tracking)",
        "Umami analytics (cookieless)",
        "Cusdis comments (privacy-first)",
        "Web3Forms for contact and feedback forms",
        "Decap CMS for browser-based editing with editorial review",
        "GTranslate across 80+ languages",
        "Ko-fi, Buy Me a Coffee, Patreon tipping per publication and per author"
      ]
    },
    {
      title: "Portability and infrastructure",
      summary: "Content is plain Markdown in Git. Static HTML output deploys to any host. PWA support for offline reading and home screen installation. No database, no runtime, no lock-in.",
      points: [
        "MIT licensed",
        "No database or runtime server required",
        "Static output deploys to any host",
        "Service worker for offline reading and faster repeat visits",
        "Web app manifest for home screen installation",
        "Build times around 12 seconds for 500 pages",
        "Full source available on GitHub"
      ]
    }
  ],
  stats: [
    { label: "Editorial sections", value: "9" },
    { label: "Build time (500 pages)", value: "~12s" },
    { label: "Recurring cost", value: "$0" },
    { label: "Licence", value: "MIT" }
  ]
};

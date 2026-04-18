export default {
  highlights: [
    {
      title: "Reader experience",
      summary: "A set of reader-side controls applied to every article: font selection, highlights, notes, text-to-speech, a reading ruler, focus mode, and a save-for-later reading list.",
      points: [
        "Text-to-speech with synced word highlighting",
        "27 font choices and six highlight colors",
        "Reading ruler, focus mode, and reading list",
        "Voice search and form dictation",
        "Import and export reader data as JSON"
      ]
    },
    {
      title: "Editorial sections",
      summary: "Nine top-level editorial categories configured by default, each with its own index page, RSS feed, and accent color. Sections are defined in a single data file and easy to add, remove, or rename.",
      points: [
        "News, Opinion, Analysis, Arts & Culture",
        "Science & Tech, History, Letters, Reviews",
        "Per-section accent colors",
        "Author-specific RSS feeds",
        "Editions: numbered issues, printable as PDF"
      ]
    },
    {
      title: "Specialty content types",
      summary: "Dedicated templates for reviews, long-form library works, events, media, and curated collections. Each has its own front-matter schema and layout.",
      points: [
        "Reviews: books, films, podcasts, documentaries",
        "Public-domain library with chapter navigation",
        "A-to-Z glossary with hover tooltips",
        "Events calendar with recurrence",
        "Games, quotes, and curated collections"
      ]
    },
    {
      title: "Search and SEO",
      summary: "Client-side full-text search via Pagefind. Structured data, Open Graph, and per-section RSS feeds generated automatically at build time.",
      points: [
        "Pagefind full-text search, client-side",
        "JSON-LD structured data",
        "Open Graph and Twitter Cards",
        "XML sitemap and per-author RSS",
        "Print stylesheets for articles and editions"
      ]
    },
    {
      title: "Integrations",
      summary: "A handful of optional third-party services, each enabled by a single configuration field. Nothing is wired up until you opt in.",
      points: [
        "Buttondown newsletter (no tracking)",
        "Umami analytics (cookieless)",
        "Cusdis comments (privacy-first)",
        "Web3Forms for every contact form",
        "Pages CMS for browser-based editing",
        "GTranslate across 80+ languages"
      ]
    },
    {
      title: "Portability",
      summary: "Content is plain Markdown in Git. The built site is static HTML deployable to any host. Migrating away is a folder copy.",
      points: [
        "MIT licensed",
        "No database or runtime server required",
        "Static output deploys to any host",
        "Build times around 12 seconds for 500 pages",
        "Full source available on GitHub"
      ]
    }
  ],
  stats: [
    { label: "Reader tools", value: "27+" },
    { label: "Editorial sections", value: "9" },
    { label: "Build time (500 pages)", value: "~12s" },
    { label: "Recurring cost", value: "$0" }
  ]
};

export default [
  {
    term: "11ty",
    alt: "Eleventy",
    short: "A JavaScript static site generator.",
    long: "Eleventy (written 11ty) is the build tool that turns your Markdown files and templates into a ready-to-publish website. It runs once, produces plain HTML/CSS/JS, and then goes away — nothing runs on your server at visit time."
  },
  {
    term: "AA",
    alt: "WCAG AA",
    short: "The mid-tier bar in the Web Content Accessibility Guidelines.",
    long: "WCAG 2.2 Level AA is the accessibility standard most governments and serious organizations target. It covers color contrast, keyboard navigation, screen-reader support, and more. Project Broadsheet is designed to meet AA."
  },
  {
    term: "accent color",
    short: "The one brand color used for emphasis, links, and calls to action.",
    long: "In Project Broadsheet the accent is vermillion (#C0392B by default). Changing one CSS variable swaps it everywhere — buttons, links, badges, section dividers."
  },
  {
    term: "Bunny Fonts",
    short: "A privacy-respecting, GDPR-compliant alternative to Google Fonts.",
    long: "Bunny Fonts serves web fonts without logging visitor IPs or tracking browsing behavior. Project Broadsheet uses it for Playfair Display, Lora, Source Serif 4, and DM Sans."
  },
  {
    term: "Buttondown",
    short: "A small, independent newsletter service with no tracking by default.",
    long: "Buttondown handles newsletter subscriptions, delivery, and archives. It doesn't use open-tracking pixels or link tracking unless you turn them on. Project Broadsheet integrates it via a single username field."
  },
  {
    term: "Cloudflare Pages",
    short: "A free static-site host from Cloudflare that deploys directly from a GitHub repository.",
    long: "Push your code to GitHub, connect the repo in Cloudflare's dashboard, and every push builds and deploys automatically. Custom domains and HTTPS are included. Project Broadsheet's recommended host."
  },
  {
    term: "CMS",
    alt: "content management system",
    short: "Software for creating and editing website content.",
    long: "A CMS lets non-technical people add and update articles through a browser interface. WordPress is the classic example. Project Broadsheet is file-based instead — your articles live as Markdown files in Git — but optionally supports Pages CMS for browser-based editing."
  },
  {
    term: "Cusdis",
    short: "An open-source comment system that respects reader privacy.",
    long: "Cusdis provides a lightweight comment box for articles without cookies, tracking, or third-party analytics. Project Broadsheet can drop it into any article by setting a single config value."
  },
  {
    term: "dark mode",
    short: "A display theme with light text on a dark background.",
    long: "Project Broadsheet respects the operating-system preference (`prefers-color-scheme`) and also provides a manual toggle. Every component is verified for readable contrast in both modes."
  },
  {
    term: "design token",
    short: "A named design value, like a color or spacing measurement, stored in one place.",
    long: "Design tokens live in `tokens.css` as CSS custom properties (--paper, --ink, --space-md, etc.). Change one token and every component that uses it updates automatically. Makes consistent theming trivial."
  },
  {
    term: "editorial section",
    short: "A top-level category of articles, like News, Opinion, or Reviews.",
    long: "Project Broadsheet ships with nine editorial sections by default. Each section gets its own index page, RSS feed, accent color, and URL prefix. You can add or remove sections by editing one data file."
  },
  {
    term: "Eleventy",
    short: "The JavaScript static site generator Project Broadsheet is built on.",
    long: "Eleventy (often written 11ty) reads your Markdown files, runs them through Nunjucks templates, and outputs a complete static website. It doesn't need a database or a running server — just the files it produces."
  },
  {
    term: "fork",
    short: "To copy a Git repository so you have your own editable version of it.",
    long: "Forking creates an independent copy of the source code under your own account. You can modify, publish, and distribute your fork freely — Project Broadsheet's MIT license grants this explicitly."
  },
  {
    term: "front matter",
    short: "Metadata at the top of a Markdown file, written in YAML between --- fences.",
    long: "Front matter tells Eleventy what an article is — title, author, section, date, tags, layout. Everything below the second fence is the article body. Front matter is how you assign an article to a section or mark it as featured."
  },
  {
    term: "GDPR",
    short: "Europe's General Data Protection Regulation — strict privacy rules.",
    long: "GDPR governs how personal data (including IP addresses) is collected and stored in the European Union. Project Broadsheet's default integrations (Bunny Fonts, Buttondown, Umami) are GDPR-compliant."
  },
  {
    term: "Git",
    short: "A version-control system that tracks every change to your files.",
    long: "Git keeps a full history of your publication — every article, every edit, every image. You can roll back mistakes, work on drafts in branches, and collaborate with others. Project Broadsheet treats Git as its database."
  },
  {
    term: "GitHub",
    short: "The largest hosting service for Git repositories.",
    long: "GitHub is where open-source software typically lives, including Project Broadsheet. It provides free hosting, issue tracking, pull requests, and integrations with deployment platforms like Cloudflare Pages."
  },
  {
    term: "GTranslate",
    short: "A translation widget that adds a language switcher to a website.",
    long: "GTranslate offers free, plug-in-and-go translation for nine or more languages. Project Broadsheet includes an opt-in integration controlled by a config flag — when enabled, a floating language selector appears on every page."
  },
  {
    term: "instant.page",
    short: "A tiny script that preloads a linked page when the visitor hovers its link.",
    long: "By the time a reader clicks, the next page is already starting to load — making navigation feel instant. instant.page adds about 1 KB to the site. Project Broadsheet includes it by default."
  },
  {
    term: "JSON-LD",
    short: "Machine-readable structured data that helps search engines understand a page.",
    long: "JSON-LD lets you describe pages in a vocabulary search engines speak (Article, Organization, FAQPage, etc.). It's embedded invisibly in the HTML and improves how pages appear in search results."
  },
  {
    term: "Markdown",
    short: "A plain-text format for writing that converts cleanly to HTML.",
    long: "Markdown uses simple characters (**bold**, *italic*, # Heading) to mark up text. It's readable as plain text and portable — nothing is locked inside a proprietary format. Project Broadsheet articles are all Markdown files."
  },
  {
    term: "MIT license",
    short: "A permissive open-source license that allows nearly any use of the software.",
    long: "The MIT license lets you copy, modify, distribute, and sell the software — even commercially — as long as you keep the original copyright notice. Project Broadsheet is MIT-licensed."
  },
  {
    term: "Nunjucks",
    short: "The templating language Eleventy uses to build page layouts.",
    long: "Nunjucks lets you write HTML with variables ({{ title }}), loops ({% for post in posts %}), and includes ({% include \"header.njk\" %}). It renders templates into static HTML at build time."
  },
  {
    term: "Open Graph",
    short: "The metadata that controls how a page preview looks when shared on social media.",
    long: "Open Graph tags (og:title, og:description, og:image) tell platforms like Facebook, LinkedIn, and Slack what to show when someone pastes your URL. Project Broadsheet generates these automatically from page front matter."
  },
  {
    term: "Pagefind",
    short: "A search engine that runs entirely in the reader's browser.",
    long: "Pagefind indexes your built site into tiny chunks, and the browser fetches only what's needed as the reader types. It's fast, private, and requires no backend server. Project Broadsheet uses it for on-site search."
  },
  {
    term: "Pages CMS",
    short: "A browser-based editor for Git-backed content.",
    long: "Pages CMS gives non-technical writers a friendly interface for editing Markdown files that live in a GitHub repository. Saves commit directly to Git. Project Broadsheet includes a ready-made Pages CMS schema."
  },
  {
    term: "passthrough copy",
    short: "An Eleventy mechanism that copies files from source to output without processing them.",
    long: "Images, fonts, JavaScript — anything that doesn't need templating — is declared as passthrough copy in the Eleventy config and lands in the built site unchanged."
  },
  {
    term: "permalink",
    short: "The published URL for a page.",
    long: "In Eleventy, `permalink` is a front-matter field that controls where a page ends up in the built site. Project Broadsheet uses it to generate clean URLs like `/news/my-article/` instead of `/news/my-article.html`."
  },
  {
    term: "RSS",
    alt: "feed",
    short: "A format for syndicating articles to feed readers and aggregators.",
    long: "RSS (Really Simple Syndication) lets readers subscribe to a publication in a feed reader like Feedly or NetNewsWire. Project Broadsheet generates an RSS feed automatically for the blog and for each editorial section."
  },
  {
    term: "SaaS",
    alt: "software as a service",
    short: "Software you rent by the month rather than install yourself.",
    long: "SaaS products (Ghost, Substack, Squarespace) handle hosting, updates, and support for you — in exchange for recurring fees and control over your content. Project Broadsheet is the opposite: self-hosted, one-time setup, yours forever."
  },
  {
    term: "section",
    short: "See \"editorial section\".",
    long: ""
  },
  {
    term: "SEO",
    alt: "search engine optimization",
    short: "Practices that help search engines find and rank your pages.",
    long: "SEO includes clean URLs, descriptive titles, structured data, sitemaps, fast load times, and mobile-friendliness. Project Broadsheet handles most of it automatically via built-in sitemap, RSS, Open Graph, and JSON-LD generation."
  },
  {
    term: "sitemap",
    short: "A machine-readable list of every page on a website.",
    long: "The XML sitemap at `/sitemap.xml` tells search engines which pages exist and when they were last updated. Project Broadsheet generates it automatically from the build output."
  },
  {
    term: "static site",
    short: "A website that consists only of pre-built HTML, CSS, and JavaScript files.",
    long: "A static site has no database and no application server. Every page is rendered at build time, then served as a plain file. This makes static sites fast, cheap to host, and nearly impossible to hack. Project Broadsheet is static."
  },
  {
    term: "tokens",
    short: "See \"design token\".",
    long: ""
  },
  {
    term: "Umami",
    short: "A privacy-first alternative to Google Analytics.",
    long: "Umami reports page views, referrers, and general traffic patterns without cookies, fingerprints, or visitor profiles. It's free to self-host or about $9/month on Umami Cloud. Project Broadsheet integrates it via two config fields."
  },
  {
    term: "WCAG",
    alt: "Web Content Accessibility Guidelines",
    short: "The international standard for web accessibility, published by the W3C.",
    long: "WCAG 2.2 has three levels — A, AA, and AAA. Most legal requirements target AA. Project Broadsheet is designed to meet WCAG 2.2 AA; see the Accessibility Statement for details."
  },
  {
    term: "Web3Forms",
    short: "A forwarding service that turns any HTML form into an email to your inbox.",
    long: "Web3Forms takes a form submission, validates it, and emails the contents to your address — no backend required. Project Broadsheet uses it for every contact, booking, and quote form."
  },
  {
    term: "YAML",
    short: "A human-readable data format, used in Markdown front matter.",
    long: "YAML (YAML Ain't Markup Language) represents structured data as key-value pairs with indentation. Project Broadsheet uses YAML between `---` fences at the top of every Markdown file to hold metadata."
  }
];

export default [
  {
    term: "11ty",
    alt: "Eleventy",
    short: "A JavaScript static site generator.",
    long: "Eleventy (written 11ty) is the build tool that turns your Markdown files and templates into a ready-to-publish website. It runs once, produces plain HTML/CSS/JS, and then goes away, nothing runs on your server at visit time."
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
    long: "In Project Broadsheet the accent is vermillion (#C0392B by default). Changing one CSS variable swaps it everywhere, buttons, links, badges, section dividers."
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
    long: "A CMS lets non-technical people add and update articles through a browser interface. WordPress is the classic example. Project Broadsheet is file-based instead, your articles live as Markdown files in Git, but optionally supports Pages CMS for browser-based editing."
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
    long: "Eleventy (often written 11ty) reads your Markdown files, runs them through Nunjucks templates, and outputs a complete static website. It doesn't need a database or a running server, just the files it produces."
  },
  {
    term: "fork",
    short: "To copy a Git repository so you have your own editable version of it.",
    long: "Forking creates an independent copy of the source code under your own account. You can modify, publish, and distribute your fork freely. Project Broadsheet's MIT license grants this explicitly."
  },
  {
    term: "front matter",
    short: "Metadata at the top of a Markdown file, written in YAML between --- fences.",
    long: "Front matter tells Eleventy what an article is, title, author, section, date, tags, layout. Everything below the second fence is the article body. Front matter is how you assign an article to a section or mark it as featured."
  },
  {
    term: "GDPR",
    short: "Europe's General Data Protection Regulation, strict privacy rules.",
    long: "GDPR governs how personal data (including IP addresses) is collected and stored in the European Union. Project Broadsheet's default integrations (Bunny Fonts, Buttondown, Umami) are GDPR-compliant."
  },
  {
    term: "Git",
    short: "A version-control system that tracks every change to your files.",
    long: "Git keeps a full history of your publication, every article, every edit, every image. You can roll back mistakes, work on drafts in branches, and collaborate with others. Project Broadsheet treats Git as its database."
  },
  {
    term: "GitHub",
    short: "The largest hosting service for Git repositories.",
    long: "GitHub is where open-source software typically lives, including Project Broadsheet. It provides free hosting, issue tracking, pull requests, and integrations with deployment platforms like Cloudflare Pages."
  },
  {
    term: "GTranslate",
    short: "A translation widget that adds a language switcher to a website.",
    long: "GTranslate offers free, plug-in-and-go translation for nine or more languages. Project Broadsheet includes an opt-in integration controlled by a config flag, when enabled, a floating language selector appears on every page."
  },
  {
    term: "instant.page",
    short: "A tiny script that preloads a linked page when the visitor hovers its link.",
    long: "By the time a reader clicks, the next page is already starting to load, making navigation feel instant, instant.page adds about 1 KB to the site. Project Broadsheet includes it by default."
  },
  {
    term: "JSON-LD",
    short: "Machine-readable structured data that helps search engines understand a page.",
    long: "JSON-LD lets you describe pages in a vocabulary search engines speak (Article, Organization, FAQPage, etc.). It's embedded invisibly in the HTML and improves how pages appear in search results."
  },
  {
    term: "Markdown",
    short: "A plain-text format for writing that converts cleanly to HTML.",
    long: "Markdown uses simple characters (**bold**, *italic*, # Heading) to mark up text. It's readable as plain text and portable, nothing is locked inside a proprietary format. Project Broadsheet articles are all Markdown files."
  },
  {
    term: "MIT license",
    short: "A permissive open-source license that allows nearly any use of the software.",
    long: "The MIT license lets you copy, modify, distribute, and sell the software, even commercially, as long as you keep the original copyright notice. Project Broadsheet is MIT-licensed."
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
    long: "Images, fonts, JavaScript, anything that doesn't need templating, is declared as passthrough copy in the Eleventy config and lands in the built site unchanged."
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
    long: "SaaS products (Ghost, Substack, Squarespace) handle hosting, updates, and support for you, in exchange for recurring fees and control over your content. Project Broadsheet is the opposite: self-hosted, one-time setup, yours forever."
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
    long: "WCAG 2.2 has three levels. A, AA, and AAA. Most legal requirements target AA. Project Broadsheet is designed to meet WCAG 2.2 AA; see the Accessibility Statement for details."
  },
  {
    term: "Web3Forms",
    short: "A forwarding service that turns any HTML form into an email to your inbox.",
    long: "Web3Forms takes a form submission, validates it, and emails the contents to your address, no backend required. Project Broadsheet uses it for every contact, booking, and quote form."
  },
  {
    term: "YAML",
    short: "A human-readable data format, used in Markdown front matter.",
    long: "YAML (YAML Ain't Markup Language) represents structured data as key-value pairs with indentation. Project Broadsheet uses YAML between `---` fences at the top of every Markdown file to hold metadata."
  },
  {
    term: "alt text",
    alt: "alt attribute",
    short: "A short text description of an image, used by screen readers and shown when the image fails to load.",
    long: "Alt text describes what an image shows so that readers using assistive technology can understand the page. It is required for accessibility and helps search engines index visual content. Every meaningful image in Project Broadsheet should have an alt attribute."
  },
  {
    term: "ARIA",
    short: "Accessible Rich Internet Applications, a set of HTML attributes that make custom UI understandable to assistive technology.",
    long: "ARIA attributes (role, aria-label, aria-current, aria-expanded) tell screen readers what a custom component is and what state it's in. Project Broadsheet uses them on nav links, icon buttons, disclosure toggles, and modal dialogs."
  },
  {
    term: "Atom",
    short: "A syndication format similar to RSS, used for newer feeds.",
    long: "Atom is a more modern XML feed format that addresses some of RSS's ambiguities. Most feed readers accept both. Project Broadsheet's main feed is published as Atom; per-section feeds use RSS."
  },
  {
    term: "branch",
    short: "A parallel line of edits in a Git repository.",
    long: "A Git branch lets you work on changes without affecting the main line of work. Typical publication workflow: create a branch for a new article, write it, open a pull request, get it reviewed, then merge back into main."
  },
  {
    term: "breakpoint",
    short: "A screen width at which a site changes layout.",
    long: "CSS media queries fire at breakpoints to adjust layout for phones, tablets, and desktops. Project Broadsheet's primary breakpoints are 560px, 820px, and 1160px, matching common device widths."
  },
  {
    term: "canonical URL",
    short: "The official address of a page, declared in the HTML so search engines know which version to rank.",
    long: "When the same content exists at multiple URLs (with and without a trailing slash, on multiple domains, or with tracking parameters), the canonical tag points search engines at the single version that should be indexed."
  },
  {
    term: "CDN",
    alt: "content delivery network",
    short: "A global network of servers that caches your site close to each visitor for faster load times.",
    long: "A CDN replicates your static files to data centers around the world. When a reader in Tokyo visits, they fetch from the Tokyo node instead of crossing the ocean to your origin. Cloudflare Pages, Netlify, and Vercel all include a CDN by default."
  },
  {
    term: "CNAME record",
    short: "A DNS record that aliases one domain name to another.",
    long: "When you point `blog.example.com` to `yoursite.pages.dev`, you do it with a CNAME record. Every static host provides the exact CNAME value when you add a custom domain."
  },
  {
    term: "clone",
    short: "To download a complete copy of a Git repository onto your machine.",
    long: "`git clone <url>` copies every file and the full commit history of a repository locally. Project Broadsheet starts with `git clone https://github.com/jonajinga/broadsheet.git`."
  },
  {
    term: "commit",
    short: "A saved snapshot of changes in a Git repository, with a message describing what was done.",
    long: "Commits are the unit of change in Git. Every push you make to GitHub is a bundle of commits. Each commit has a unique hash, a message, an author, and a timestamp."
  },
  {
    term: "CommonMark",
    short: "The widely-accepted standardized specification of Markdown.",
    long: "CommonMark is the reference specification Project Broadsheet's Markdown renderer targets. It defines exactly how headings, lists, emphasis, links, and code blocks should be parsed so behavior is consistent across tools."
  },
  {
    term: "CSS variable",
    alt: "custom property",
    short: "A named value in CSS you declare once and reference throughout the stylesheet.",
    long: "Custom properties (`--paper`, `--ink`, `--space-md`) are CSS's native tokenization mechanism. Project Broadsheet's entire design system is built on them, which is why changing one value in `tokens.css` updates every component."
  },
  {
    term: "dependency",
    short: "An external package your project needs in order to run or build.",
    long: "Dependencies are listed in `package.json` and installed via `npm install`. Project Broadsheet's dependencies include Eleventy, Pagefind, the RSS plugin, and an HTML minifier. They run only at build time, not in production."
  },
  {
    term: "DNS",
    alt: "Domain Name System",
    short: "The internet's phone book, which translates domain names like example.com into the server IPs that actually host the site.",
    long: "When a reader types your URL, their browser asks a DNS server for the IP address, then connects there. Pointing a custom domain at a static host means adding a DNS record that points at that host's servers."
  },
  {
    term: "draft",
    short: "An article that isn't yet ready for publication.",
    long: "Setting `draft: true` in an article's front matter excludes it from production builds. Drafts still render during `npm start` so you can preview them locally. Remove the flag or set `draft: false` to ship."
  },
  {
    term: "ESM",
    alt: "ES module",
    short: "The native JavaScript module system used in modern Node and browsers.",
    long: "ESM uses `import` and `export` syntax. Project Broadsheet's `eleventy.config.js` and every data file under `src/_data/` are written as ES modules, indicated by `\"type\": \"module\"` in `package.json`."
  },
  {
    term: "focus ring",
    short: "The visible outline around a keyboard-focused element.",
    long: "When a reader tabs through a page, each interactive element shows a focus ring so they always know where they are. Project Broadsheet uses a 2px vermillion outline with 3px offset, applied via `:focus-visible` so mouse clicks don't show the ring."
  },
  {
    term: "hex color",
    short: "A color written as a six-digit hexadecimal number, like #C0392B.",
    long: "The first two digits are red, next two green, last two blue, each 00 to FF. Every color token in Project Broadsheet's `tokens.css` is defined as a hex value."
  },
  {
    term: "HTTPS",
    short: "HTTP over an encrypted TLS connection, the default protocol for modern websites.",
    long: "HTTPS prevents eavesdropping and tampering between reader and server. Every static host Project Broadsheet supports issues TLS certificates automatically; you never configure them manually."
  },
  {
    term: "localStorage",
    short: "A browser storage mechanism for keeping small amounts of data on the reader's device.",
    long: "localStorage stores data per-domain, persists across visits, and never leaves the device. Project Broadsheet uses it for theme preferences, highlight colors, saved reader data, and the closed/open state of the docs sidebar."
  },
  {
    term: "minification",
    short: "Removing whitespace and comments from code to reduce file size.",
    long: "Project Broadsheet minifies every HTML file in production via `@sardine/eleventy-plugin-tinyhtml`. CSS is already concatenated at build time; JS is served as-is because there's not enough of it to matter."
  },
  {
    term: "Node.js",
    alt: "node",
    short: "A JavaScript runtime used to run tools like Eleventy and npm outside of a browser.",
    long: "Node.js is required only to build Project Broadsheet. The built site is plain HTML/CSS/JS and doesn't need Node at runtime. Version 18 or later is required for the build; 20 is recommended."
  },
  {
    term: "npm",
    short: "The default package manager for Node.js, used to install dependencies and run scripts.",
    long: "`npm install` pulls down every dependency listed in `package.json`. `npm start` runs the dev server. `npm run build` produces the production site. Each script's exact command is defined in the `scripts` section of `package.json`."
  },
  {
    term: "package.json",
    short: "The file at the root of a Node project that lists its dependencies and scripts.",
    long: "Project Broadsheet's `package.json` declares Eleventy, Pagefind, and a handful of plugins as dependencies, plus the `start`, `dev`, and `build` scripts. Edit it when adding or removing packages."
  },
  {
    term: "pull request",
    alt: "PR",
    short: "A proposal to merge one Git branch into another, used for review before changes go live.",
    long: "Pull requests (or 'merge requests' on GitLab) let you see a diff of proposed changes, discuss them, and approve before merging. Project Broadsheet's typical workflow uses pull requests even for one-person publications so every change gets a preview deploy."
  },
  {
    term: "redirect",
    alt: "301",
    short: "A rule that sends visitors from an old URL to a new one.",
    long: "301 redirects are permanent and preserve search-engine rankings. Project Broadsheet sites use a `_redirects` file on Cloudflare Pages / Netlify or a `vercel.json` redirects block on Vercel. Critical during platform migrations."
  },
  {
    term: "screen reader",
    short: "Software that reads a web page aloud for readers who are blind or have low vision.",
    long: "Popular screen readers include VoiceOver (macOS/iOS), NVDA (Windows), and JAWS (Windows). Project Broadsheet is tested with both VoiceOver and NVDA. ARIA attributes and semantic HTML are what make the site intelligible to them."
  },
  {
    term: "slug",
    short: "The URL-safe version of a word or phrase, typically lowercase with hyphens.",
    long: "A slug turns 'My First Article' into 'my-first-article'. Project Broadsheet uses slugs for section IDs, author identifiers, and filenames of articles. The `slugify` template filter converts any string into a slug."
  },
  {
    term: "tag",
    short: "A keyword attached to an article for cross-referencing related content.",
    long: "Tags are declared in article front matter as an array (e.g. `tags: [politics, local, 2026]`). They power related-article suggestions and future tag index pages. Unlike sections, an article can have many tags."
  },
  {
    term: "TLS certificate",
    alt: "SSL certificate",
    short: "A digital certificate that authenticates a website and enables HTTPS encryption.",
    long: "Modern static hosts issue free TLS certificates via Let's Encrypt or their own CA. You never pay for one, never install one manually. Renewal is automatic."
  },
  {
    term: "viewport",
    short: "The visible area of a web page in the reader's browser window.",
    long: "Responsive design adapts the layout to the viewport's size. The HTML `<meta name='viewport'>` tag tells mobile browsers to render the page at device width rather than simulating a desktop."
  }
];

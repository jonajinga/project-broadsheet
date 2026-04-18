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
  },
  {
    term: "API",
    alt: "application programming interface",
    short: "A defined set of endpoints or functions one program uses to talk to another.",
    long: "Web APIs let your site pull data from external services, and let external services act on your site. Project Broadsheet doesn't require any APIs at runtime because it's static, but integrations like Web3Forms and Buttondown are accessed through theirs."
  },
  {
    term: "backup",
    short: "A separate copy of your content kept in case the primary copy is lost.",
    long: "Because Project Broadsheet stores content in Git, every commit on GitHub is already a backup. For belt-and-suspenders safety, you can also push to a second Git remote or run periodic exports of your subscriber list and reader data."
  },
  {
    term: "breadcrumb",
    short: "A navigation trail showing where the current page sits in the site's hierarchy.",
    long: "Breadcrumbs help readers orient themselves. Project Broadsheet shows them on docs pages and article sections, typically as 'Home / Section / Article Title'. They also help search engines understand site structure."
  },
  {
    term: "CCPA",
    short: "California Consumer Privacy Act, a state-level privacy regulation for California residents.",
    long: "CCPA gives California residents the right to know what personal data a business collects, request deletion, and opt out of the sale of their data. If you have California readers, CCPA applies even if your publication is based elsewhere."
  },
  {
    term: "changelog",
    short: "A record of what changed in each release of a software project.",
    long: "Project Broadsheet's changelog lives at `/changelog/` and is generated from Markdown files under `src/changelog/`. Each release gets one file with its version, date, and the Added/Changed/Fixed/Removed sections readers care about."
  },
  {
    term: "color contrast",
    short: "The luminance difference between two colors, important for readability and accessibility.",
    long: "WCAG 2.2 requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Project Broadsheet's tokens are chosen to exceed both. The Style Guide page shows measured ratios for every pairing in light and dark mode."
  },
  {
    term: "cookie",
    short: "A small piece of data a website stores on the reader's device, sent back on every subsequent request.",
    long: "Cookies are how web sessions work. Project Broadsheet's core doesn't set any first-party cookies. Third-party integrations (Google Translate, embedded videos, comments) may set their own; we disclose which ones in the privacy policy."
  },
  {
    term: "data URI",
    short: "A way of embedding file contents directly into a URL using base64 or URL encoding.",
    long: "Small SVG icons, font subsets, or tiny images can be inlined as data URIs in CSS to avoid extra HTTP requests. Project Broadsheet uses them sparingly; most assets are served as separate files behind a CDN."
  },
  {
    term: "favicon",
    short: "The small icon shown in a browser tab, bookmark, or home-screen shortcut for a site.",
    long: "Project Broadsheet ships with an SVG favicon (`favicon.svg`), a 32×32 PNG fallback (`favicon-32.png`), a 180×180 apple-touch-icon, and 192/512 icons for PWA installs. All derive from the PB monogram."
  },
  {
    term: "flexbox",
    short: "A CSS layout mode for arranging items in one dimension, with control over alignment, spacing, and wrap behavior.",
    long: "Flexbox handles most simple layouts: horizontal nav rows, card groups, button bars. Project Broadsheet uses flexbox for inline component layout (button groups, form rows) and grid for page-level layout."
  },
  {
    term: "GitHub Actions",
    short: "GitHub's built-in automation platform for running CI, tests, deploys, and scheduled tasks.",
    long: "Many Project Broadsheet publishers use GitHub Actions for linting, testing, or custom deploy steps. The site doesn't require Actions because hosts like Cloudflare Pages build on their side, but Actions can extend that pipeline."
  },
  {
    term: "grid",
    alt: "CSS Grid",
    short: "A CSS layout mode for arranging items in two dimensions, with named rows, columns, and areas.",
    long: "Project Broadsheet uses CSS Grid for page-level layouts: docs sidebar + content + TOC, the compare table, pricing card grids, footer columns. Grid makes responsive column changes trivial."
  },
  {
    term: "hCaptcha",
    short: "A privacy-respecting alternative to Google reCAPTCHA for blocking spam form submissions.",
    long: "hCaptcha doesn't require user tracking and is GDPR-friendlier than reCAPTCHA. Web3Forms supports hCaptcha as an add-on. Most Project Broadsheet sites get away with the honeypot field instead."
  },
  {
    term: "hosting",
    short: "The service that actually serves your site's files to visitors.",
    long: "Project Broadsheet recommends Cloudflare Pages, Netlify, or Vercel for free static hosting. I also offer managed hosting at $25 / $39 / $79 per month on my own Cloudflare account if you'd rather not set it up yourself."
  },
  {
    term: "i18n",
    alt: "internationalization",
    short: "The practice of designing software so it can be adapted to multiple languages and regions.",
    long: "Project Broadsheet's i18n is handled by GTranslate for machine translation into 80+ languages. True hand-translated multilingual publications would require a more structured approach (per-language content folders, locale-aware routing)."
  },
  {
    term: "iframe",
    short: "An HTML element that embeds another HTML document inside the current page.",
    long: "Iframes are used for embedded YouTube videos, Buttondown signup forms, Google Maps, and similar third-party widgets. Each iframe carries its own accessibility and privacy profile; we disclose them in the Accessibility and Privacy pages."
  },
  {
    term: "image CDN",
    short: "A content delivery network specialized for serving images with on-the-fly resizing and format conversion.",
    long: "Project Broadsheet uses `@11ty/eleventy-img` at build time to produce WebP, AVIF, and JPEG variants of every image. Combined with the CDN of your static host, that's usually enough. Dedicated image CDNs (Cloudinary, Imgix) are optional for very large archives."
  },
  {
    term: "ISO 8601",
    short: "The international standard format for dates and times (YYYY-MM-DD).",
    long: "Project Broadsheet requires ISO 8601 dates in article front matter. `2026-04-17` is valid; `04/17/2026` is not. The reason: ISO sorts correctly as text, parses unambiguously, and is timezone-friendly."
  },
  {
    term: "JAMstack",
    short: "An architecture pattern: static content rendered at build time, served from a CDN, with JavaScript and APIs for interactive bits.",
    long: "Project Broadsheet is a textbook JAMstack site. Content is pre-rendered HTML, served from a CDN, with minimal client-side JS for progressive enhancement. The result: fast, cheap, secure, and simple to operate."
  },
  {
    term: "JSON",
    short: "A lightweight text format for structured data.",
    long: "JSON represents objects and arrays in a way both humans and computers can read. Project Broadsheet uses JSON for the Pagefind search index, glossary data, form submissions, and the optional site.json configuration."
  },
  {
    term: "lazy loading",
    short: "Loading something only when it's needed, not on first page load.",
    long: "Project Broadsheet lazy-loads images below the fold, lazy-loads web fonts from the reader picker, and lazy-loads Pagefind's search index the first time a reader opens the search modal. Each saves bandwidth and improves initial load times."
  },
  {
    term: "meta description",
    short: "A summary of a page's content shown in search-engine results.",
    long: "Keep descriptions under 160 characters. Project Broadsheet pulls them from the `description` field in front matter, falling back to the site-wide default in `meta.js`. Good descriptions improve click-through from search."
  },
  {
    term: "PWA",
    alt: "Progressive Web App",
    short: "A website that behaves like a native app: installable, offline-capable, full-screen.",
    long: "Project Broadsheet supports PWA features via a service worker and a web manifest. Readers can 'Add to home screen' on mobile and get offline access to any article they've already loaded."
  },
  {
    term: "preload",
    short: "A hint telling the browser to start downloading a resource early, before the parser discovers it.",
    long: "Project Broadsheet preloads its web fonts so the first paint has the correct typography. Over-preloading hurts performance; the defaults are chosen carefully."
  },
  {
    term: "progressive enhancement",
    short: "The practice of building a site that works without JavaScript first, then adding JavaScript for extra polish.",
    long: "Project Broadsheet's articles, navigation, and forms work with JavaScript disabled. Interactive bits (the theme toggle, the language switcher, the search modal, tooltips) enhance the experience for readers who have JS enabled."
  },
  {
    term: "responsive design",
    short: "A design approach where layout and typography adapt fluidly to the screen size.",
    long: "Project Broadsheet is responsive from a 320px phone to a 2560px monitor. Breakpoints at 560px, 640px, 820px, 960px, and 1160px reshape the layout for progressively more space."
  },
  {
    term: "robots.txt",
    short: "A text file at the root of a site that tells search-engine crawlers what they can and can't access.",
    long: "Project Broadsheet ships with a default `/robots.txt` that allows all crawlers and points at the XML sitemap. Disallow rules can be added for staging sites or admin areas if needed."
  },
  {
    term: "semver",
    alt: "semantic versioning",
    short: "A version-numbering convention: MAJOR.MINOR.PATCH.",
    long: "Under semver, a MAJOR bump signals a breaking change, MINOR signals new features without breaking anything, PATCH signals bug fixes. Project Broadsheet follows semver for releases. The current version is always visible in the footer."
  },
  {
    term: "service worker",
    short: "A script that runs in the background of a browser, separate from the web page, enabling offline support and push notifications.",
    long: "Project Broadsheet's service worker caches recently-visited articles so readers can revisit them offline. It also enables 'Add to home screen' PWA installation on mobile."
  },
  {
    term: "shortcode",
    short: "A template-engine construct that renders a block of HTML from a small input.",
    long: "Eleventy shortcodes are registered in `eleventy.config.js` and called from templates. They're useful for repeated patterns (a pull quote, a newsletter callout) that don't warrant a separate file."
  },
  {
    term: "SVG",
    short: "Scalable Vector Graphics: an XML-based image format that scales crisply at any size.",
    long: "Project Broadsheet uses SVG for the PB logo, every UI icon, and simple decorative graphics. SVG files are tiny, accessible (they can carry titles and descriptions), and theme-aware via `currentColor`."
  },
  {
    term: "syntax highlighting",
    short: "Colorizing code so different parts (keywords, strings, comments) are visually distinct.",
    long: "Project Broadsheet's code blocks support syntax highlighting via the Markdown renderer. Languages are specified in the fence (e.g. ` ```js ` or ` ```bash `). A small CSS file in `components/code-block.css` handles the colors."
  },
  {
    term: "UTC",
    short: "Coordinated Universal Time, the time standard used to avoid time-zone ambiguity.",
    long: "When specifying publish times in article front matter, use an ISO 8601 timestamp with a UTC offset (e.g. `2026-04-17T12:00:00-06:00`). Project Broadsheet renders the reader's local time from the stored value."
  },
  {
    term: "web manifest",
    short: "A JSON file describing a web app for 'install to home screen' and PWA features.",
    long: "The manifest declares the app's name, icons, theme color, and launch URL. Project Broadsheet's manifest is generated at build time and points at the PNG icons derived from the PB monogram."
  },
  {
    term: "webhook",
    short: "An HTTP endpoint another service calls when something happens.",
    long: "Webhooks trigger builds on Cloudflare Pages / Netlify / Vercel when you push to GitHub. They're also used to link external services (Buttondown, Web3Forms) to your publication without polling."
  },
  {
    term: "WebP",
    short: "A modern image format that compresses better than JPEG at similar quality.",
    long: "Project Broadsheet's image pipeline (via `@11ty/eleventy-img`) produces WebP alongside traditional JPEG so modern browsers get the smaller file. AVIF, an even newer format, is generated too when supported."
  }
];

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
    long: "A CMS lets non-technical people add and update articles through a browser interface. WordPress is the classic example. Project Broadsheet is file-based instead, your articles live as Markdown files in Git, but optionally supports Decap CMS for browser-based editing."
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
    long: "Pages CMS gives non-technical writers a friendly interface for editing Markdown files that live in a GitHub repository. It has no access control or user permission system. Project Broadsheet previously used Pages CMS but now ships with Decap CMS, which adds access control, role-based permissions, and an editorial approval workflow."
  },
  {
    term: "Decap CMS",
    short: "A self-hosted, browser-based editor for Git-backed publications, with access control and editorial workflow.",
    long: "Decap CMS lives inside your own repository as a static HTML page at `/admin/`. It connects to GitHub for authentication and storage. Every save creates a pull request rather than committing directly to main. Combined with Cloudflare Zero Trust Access and GitHub branch protection, it gives publications access control, role-based permissions, and a full editorial approval pipeline. Project Broadsheet ships with a ready-made Decap CMS configuration."
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
    term: "deploy",
    short: "To publish a built website so the public can visit it.",
    long: "Deploying copies the contents of `_site/` (the built site) to a web host. With Cloudflare Pages or Netlify, deployment happens automatically every time you push to the `main` branch on GitHub. The process takes 30–90 seconds end to end."
  },
  {
    term: "dependency",
    short: "An external package your project needs in order to run or build.",
    long: "Dependencies are listed in `package.json` and installed via `npm install`. Project Broadsheet's dependencies include Eleventy, Pagefind, the RSS plugin, and an HTML minifier. They run only at build time, not in production."
  },
  {
    term: "environment variable",
    alt: "env var",
    short: "A named value passed to a program from its environment, not hard-coded in source files.",
    long: "Environment variables keep sensitive values (API keys, site URLs) out of your source code. In Project Broadsheet, `SITE_URL` is the most common one - it's read in `meta.js` via `process.env.SITE_URL` and set in your hosting dashboard's environment settings. Never commit secrets to a public GitHub repository."
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
    term: "object",
    short: "A collection of named values (key-value pairs) in JavaScript or YAML.",
    long: "In JavaScript: `{ slug: 'news', label: 'News', color: '#C0392B' }`. In YAML, objects are expressed with indented key-value pairs. Project Broadsheet's data files (`authors.js`, `nav.js`, etc.) export arrays of objects, each representing one item with named properties."
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
    term: "partial",
    short: "A reusable template fragment included inside other templates.",
    long: "Partials live in `src/_includes/partials/` and contain chunks of HTML that appear on many pages - the site header, footer, newsletter signup, article card. They're included with `{% include 'partials/header.njk' %}`. Editing one partial updates every page that includes it."
  },
  {
    term: "plugin",
    short: "An npm package that extends Eleventy with additional features.",
    long: "Project Broadsheet uses plugins for RSS feed generation (`@11ty/eleventy-plugin-rss`), HTML minification (`@sardine/eleventy-plugin-tinyhtml`), and image optimization (`@11ty/eleventy-img`). Plugins are registered in `eleventy.config.js` and installed via `npm install`."
  },
  {
    term: "push",
    short: "To upload local Git commits to a remote repository like GitHub.",
    long: "`git push` sends your committed changes to GitHub. For Project Broadsheet, every push to the `main` branch automatically triggers a new build and deploy on Cloudflare Pages or Netlify. Don't push until you're ready to publish - or keep working on a separate branch."
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
    term: "render",
    short: "To process a template and produce finished HTML output.",
    long: "Eleventy renders your Markdown and Nunjucks templates into HTML files at build time. The browser renders HTML into a visual page. When docs say 'this renders as…' they mean 'the output HTML looks like…'."
  },
  {
    term: "repository",
    alt: "repo",
    short: "A Git-managed folder containing all the files and history for a project.",
    long: "Your Project Broadsheet site lives in a repository: all source files, templates, CSS, articles, and the full history of every change. You store it on GitHub and deploy from it. The main branch is `main` by convention."
  },
  {
    term: "redirect",
    alt: "301",
    short: "A rule that sends visitors from an old URL to a new one.",
    long: "301 redirects are permanent and preserve search-engine rankings. Project Broadsheet sites use a `_redirects` file on Cloudflare Pages / Netlify or a `vercel.json` redirects block on Vercel. Critical during platform migrations."
  },
  {
    term: "template",
    short: "A file that defines the structure and layout of a page, with placeholders filled in at build time.",
    long: "Project Broadsheet's templates are Nunjucks `.njk` files in `src/_includes/layouts/`. They receive data (title, content, tags) from the Markdown front matter and render it into a complete HTML page. Changing a template updates every page that uses it in the next build."
  },
  {
    term: "terminal",
    alt: "command line",
    short: "A text-based interface for running commands on your computer.",
    long: "You use the terminal to install dependencies (`npm install`), start the dev server (`npm start`), run builds (`npm run build`), and interact with Git. On macOS it's called Terminal; on Windows, PowerShell or Windows Terminal. Most commands in the Project Broadsheet docs are written for bash syntax."
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
    term: "array",
    short: "An ordered list of values in code or data.",
    long: "In YAML front matter, square brackets denote an array: `tags: [politics, local, 2026]`. In JavaScript, arrays are written the same way. Project Broadsheet uses arrays for tags, sections, authors, and language lists."
  },
  {
    term: "AVIF",
    short: "A next-generation image format that achieves smaller file sizes than WebP at equivalent quality.",
    long: "AVIF (AV1 Image File Format) is supported by Chrome, Firefox, and Safari 16+. Project Broadsheet's image pipeline (via `@11ty/eleventy-img`) generates AVIF, WebP, and JPEG variants so the browser chooses the smallest format it understands."
  },
  {
    term: "API",
    alt: "application programming interface",
    short: "A defined set of endpoints or functions one program uses to talk to another.",
    long: "Web APIs let your site pull data from external services, and let external services act on your site. Project Broadsheet doesn't require any APIs at runtime because it's static, but integrations like Web3Forms and Buttondown are accessed through theirs."
  },
  {
    term: "build",
    short: "The process of converting source files into a ready-to-serve website.",
    long: "Running `npm run build` tells Eleventy to read every Markdown file, apply templates, concatenate CSS, minify HTML, and write the result to the `_site/` folder. That folder is what gets deployed. The dev server (`npm start`) also builds but skips Pagefind indexing."
  },
  {
    term: "backup",
    short: "A separate copy of your content kept in case the primary copy is lost.",
    long: "Because Project Broadsheet stores content in Git, every commit on GitHub is already a backup. For belt-and-suspenders safety, you can also push to a second Git remote or run periodic exports of your subscriber list and reader data."
  },
  {
    term: "cache",
    short: "A stored copy of a file kept so it can be served faster on repeat visits.",
    long: "Browsers cache stylesheets, images, and scripts to avoid re-downloading them on every page load. CDNs cache pages at edge servers close to readers. The flip side: a cached file won't update until the cache expires or is purged. Project Broadsheet uses a `?v=` version string on its stylesheet to bust the cache when the CSS changes."
  },
  {
    term: "CI/CD",
    alt: "continuous integration / continuous deployment",
    short: "Automated pipelines that build, test, and deploy code whenever you push to a repository.",
    long: "CI runs checks on every commit (does the build pass? do tests pass?). CD automatically deploys a passing build to a live environment. Cloudflare Pages and Netlify handle CD for Project Broadsheet out of the box; GitHub Actions can add CI steps like build checks or scheduled rebuilds."
  },
  {
    term: "collection",
    short: "A named group of pages that Eleventy assembles at build time, used to build indexes, feeds, and related-content lists.",
    long: "Eleventy collections group pages by tag, glob pattern, or custom logic. Project Broadsheet defines collections for `posts`, `docs`, and each editorial section (e.g. `collections.news`). Templates loop over a collection to render article lists, sidebars, and RSS feeds."
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
    term: "fenced code block",
    short: "A block of code in Markdown delimited by triple backticks.",
    long: "Opening with ` ``` ` (and optionally a language name like ` ```js ` or ` ```bash `) and closing with ` ``` ` tells the Markdown renderer to display the content as preformatted code, with optional syntax highlighting. Used throughout Project Broadsheet docs and is the recommended way to show code in articles."
  },
  {
    term: "filter",
    short: "A named function in a Nunjucks template that transforms a value with a pipe character.",
    long: "Filters are called with `| filterName`. For example, `post.date | readableDate` formats a date as 'April 17, 2026'. Project Broadsheet registers filters for dates, reading time, truncation, slugifying, and array manipulation in `eleventy.config.js`."
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
    term: "hot reload",
    alt: "live reload",
    short: "Automatic browser refresh when a file changes during local development.",
    long: "When you run `npm start`, Eleventy watches your source files. Save a Markdown file or CSS change and the browser refreshes in under a second showing the updated page. Hot reload does not run Pagefind, so search won't reflect changes until a full production build."
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
    term: "HTML",
    alt: "HyperText Markup Language",
    short: "The standard language for structuring web pages.",
    long: "HTML uses tags like `<h1>`, `<p>`, `<img>`, and `<a>` to define the meaning and structure of content. Eleventy compiles your Markdown and Nunjucks templates into HTML files. The built `_site/` folder is full of HTML that browsers render into pages."
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
    long: "JSON represents objects and arrays in a way both humans and computers can read. Project Broadsheet uses JSON for the Pagefind search index, Decap CMS configuration, folder-level Eleventy data files, and form submissions."
  },
  {
    term: "lazy loading",
    short: "Loading something only when it's needed, not on first page load.",
    long: "Project Broadsheet lazy-loads images below the fold, lazy-loads web fonts from the reader picker, and lazy-loads Pagefind's search index the first time a reader opens the search modal. Each saves bandwidth and improves initial load times."
  },
  {
    term: "merge",
    short: "Combining changes from one Git branch into another.",
    long: "Merging is how a finished article or feature moves from a working branch into `main`. On GitHub you merge via a pull request. Once merged, the next push (or automatic deploy trigger) publishes the changes to your live site."
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
  },
  {
    term: "OAuth",
    short: "An open standard that lets users grant third-party apps access to their account without sharing their password.",
    long: "When you click 'Login with GitHub' in Decap CMS, you're using OAuth. GitHub confirms your identity and issues an access token. The CMS uses that token to read and write files in your repository on your behalf. You never hand your password to the CMS."
  },
  {
    term: "OAuth App",
    short: "A GitHub application registration that enables GitHub OAuth authentication for your CMS.",
    long: "A GitHub OAuth App has a Client ID and a Client Secret. The Client ID identifies your app publicly; the Client Secret is a private credential used server-side to exchange an authorization code for an access token. For Decap CMS on Cloudflare Pages, these are stored as environment variables in your Pages project settings."
  },
  {
    term: "access token",
    short: "A credential that proves identity and grants permission to perform actions on a service.",
    long: "After a user completes GitHub OAuth, GitHub returns an access token scoped to the permissions you requested (typically `repo`). Decap CMS stores this token in the browser session and attaches it to every API call to read and write your content files."
  },
  {
    term: "Cloudflare Zero Trust Access",
    short: "A service that gates a URL by identity, blocking anyone whose email is not on the allowlist.",
    long: "Zero Trust Access sits in front of your `/admin/` path and challenges every visitor with an email one-time PIN before they reach the CMS UI. Even if someone guesses your CMS URL, they're blocked at Cloudflare before any authentication with GitHub happens. The free tier supports up to 50 users."
  },
  {
    term: "OTP",
    alt: "one-time PIN",
    short: "A single-use code sent to an email address to verify identity.",
    long: "Cloudflare Zero Trust Access sends a six-digit code to the visitor's email. They enter it to pass the gate. Codes expire quickly and cannot be reused. No password to remember, no account to create — just prove you own the email address."
  },
  {
    term: "preview deployment",
    short: "A temporary live build of a site generated automatically from a pull request branch.",
    long: "When Decap CMS saves a draft, it creates a branch and a pull request. Cloudflare Pages detects the new PR and builds the full site from that branch at a unique URL (e.g. `abc123.your-pub.pages.dev`). Editors can visit that URL to review the article exactly as it will appear before approving the merge."
  },
  {
    term: "branch protection",
    short: "A GitHub setting that prevents direct pushes to a branch and requires pull requests and approvals.",
    long: "With branch protection on `main`, nobody can push commits directly to the production branch — everything goes through a pull request. If you also require one approval, every article needs a second set of eyes before it can go live. Writers can still push to their own draft branches; they just can't merge without sign-off."
  },
  {
    term: "production environment",
    short: "The live, publicly visible version of a website, built from the main branch.",
    long: "When you merge a pull request to `main`, Cloudflare Pages rebuilds the production environment. This is what the public sees. Preview deployments (from PR branches) are separate, temporary environments used for review."
  },
  {
    term: "preview environment",
    short: "A temporary build of a site generated from a pull request or feature branch for review before publishing.",
    long: "Cloudflare Pages creates a preview environment for every open pull request. Each has a unique URL and is rebuilt on every new commit to the branch. Preview environments are separate from production and are not indexed by search engines."
  },
  {
    term: "Cloudflare Pages Function",
    short: "Server-side code that runs on Cloudflare's edge network as part of a Pages project.",
    long: "Pages Functions live in the `functions/` folder of your repository and are deployed alongside your static site. They handle dynamic requests like OAuth token exchanges. The GitHub OAuth proxy used by Decap CMS in Project Broadsheet is a Pages Function at `functions/api/auth.js`."
  },
  {
    term: "base URL",
    short: "The root address of a website, used as the prefix for all relative paths.",
    long: "In Decap CMS's `config.yml`, `base_url` tells the CMS where its OAuth proxy lives. If `base_url` is `https://my-pub.pages.dev`, the CMS will open `https://my-pub.pages.dev/api/auth` for GitHub login. It must match the domain your readers actually use."
  },
  {
    term: "byline",
    short: "The line on an article that names the author.",
    long: "A byline typically reads 'By Jane Doe' or 'Jane Doe, Staff Reporter'. In Project Broadsheet, the `author` field in front matter links to an author profile, pulling the display name, bio, and photo automatically."
  },
  {
    term: "dateline",
    short: "A line at the start of an article stating where and when the reporting took place.",
    long: "Datelines originated in wire-service journalism: 'DENVER, April 19 —'. In Project Broadsheet, the `location` front matter field provides the geographic component. Datelines are most common in news and field-reporting articles."
  },
  {
    term: "lede",
    alt: "lead",
    short: "The opening sentence or paragraph of a news article, designed to hook the reader and summarize the story.",
    long: "The lede answers the key questions — who, what, when, where, why — in as few words as possible. 'Burying the lede' means hiding the most important fact deep in the story. The deliberate misspelling ('lede' not 'lead') emerged to avoid confusion with the lead type used in printing."
  },
  {
    term: "inverted pyramid",
    short: "A journalistic story structure that puts the most important information first, with background and detail later.",
    long: "The inverted pyramid is the standard structure for news writing. Most important facts in the opening sentence; supporting context in the middle; additional detail, background, and quotes at the end. Readers who stop halfway through still get the full story."
  },
  {
    term: "hed",
    alt: "headline",
    short: "The title of a news or feature article.",
    long: "In print newsrooms, 'hed' is copydesk shorthand for headline. A strong hed is specific, active, and accurate. It also carries SEO weight — it becomes the `<h1>` and typically the `<title>` on the article page. Project Broadsheet reads it from the `title` field in front matter."
  },
  {
    term: "dek",
    alt: "subheadline, standfirst",
    short: "A secondary headline or summary line beneath the main headline, giving more context.",
    long: "The dek expands on the hed without repeating it. It appears below the headline on article pages and in social media previews. In Project Broadsheet it maps to the `description` front matter field. Keep it under 160 characters for SEO."
  },
  {
    term: "masthead",
    short: "The printed or displayed statement of a publication's name, ownership, staff, and contact information.",
    long: "In print, the masthead appears on the editorial page. Online, it's typically an About or Staff page. In Project Broadsheet the site title, founding year, and editorial statement all live in `src/_data/meta.js` and render in the footer and the dedicated About page."
  },
  {
    term: "op-ed",
    short: "A newspaper article expressing the personal opinion of the author, traditionally published opposite the editorial page.",
    long: "Op-eds are distinct from unsigned editorials (which represent the publication's official view) because they carry a byline. In Project Broadsheet they live in the Opinion section. The author is identified with a full bio and disclosure statement."
  },
  {
    term: "correction",
    short: "A published acknowledgment that a previous article contained an error, with the correct information.",
    long: "Corrections are logged in the `corrections` array in an article's front matter. Project Broadsheet renders a corrections block on the article page and maintains a site-wide corrections log at `/corrections/`. Each entry records what was wrong, what is correct, and the date."
  },
  {
    term: "retraction",
    short: "A formal withdrawal of a published article because it was significantly wrong, fabricated, or plagiarized.",
    long: "A retraction is more serious than a correction — it means the entire piece should not have been published. Retractions should be published at the original URL with a clear notice at the top and the article content removed or struck through."
  },
  {
    term: "embargo",
    short: "An agreement between a journalist and a source that information will not be published before a specific date and time.",
    long: "Embargoes give journalists advance access to press releases, scientific papers, or announcements in exchange for holding the story until a set time. Breaking an embargo damages your publication's reputation with sources."
  },
  {
    term: "scoop",
    short: "Exclusive reporting that a publication breaks before any competitor.",
    long: "A scoop is often the result of cultivating sources, document analysis, or investigative work. Breaking a major story first establishes credibility and drives traffic. Project Broadsheet's metadata includes `exclusive` as a content tag convention."
  },
  {
    term: "primary source",
    short: "An original, firsthand document or account — the underlying evidence a news story is based on.",
    long: "Primary sources include official documents, original data, court filings, transcripts, and firsthand eyewitness accounts. Project Broadsheet's source documents collection lets you attach scanned or linked primary sources directly to an article, a practice that builds reader trust and transparency."
  },
  {
    term: "secondary source",
    short: "A document or report that analyzes, interprets, or summarizes primary sources.",
    long: "News coverage of a study, a legal analysis of a court ruling, a Wikipedia article — these are secondary sources. Strong journalism cites primary sources; secondary sources add context. Project Broadsheet's bibliography and argument-map features help readers trace the chain of evidence."
  },
  {
    term: "fact-checking",
    short: "Verifying that the claims in a story are accurate before publication.",
    long: "Fact-checking involves tracing every factual claim to a verifiable source: a document, a recording, a named expert. Project Broadsheet's corrections system is designed to handle post-publication corrections when fact-checking misses something."
  },
  {
    term: "paywall",
    short: "A system that restricts access to content unless the reader pays.",
    long: "Project Broadsheet has no paywall system built in. Its recommended approach for reader revenue is voluntary support via Ko-fi, Buy Me a Coffee, or Patreon — tipping rather than gating. Hard paywalls on static sites require an external service."
  },
  {
    term: "newsletter",
    short: "An article or digest sent directly to subscribers' email inboxes on a regular schedule.",
    long: "Project Broadsheet integrates with Buttondown for newsletter delivery. The subscription form is built into the site's sidebar, footer, and inline article callouts. Email addresses go straight to Buttondown — Project Broadsheet never stores subscriber data."
  },
  {
    term: "press freedom",
    short: "The right of journalists to report news and express opinions without government censorship or interference.",
    long: "Press freedom is foundational to independent journalism. Hosting your own static site (rather than publishing on a platform that can deplatform you) is one practical expression of editorial independence. Project Broadsheet is MIT-licensed so no single entity controls the software."
  },
  {
    term: "source protection",
    short: "The journalistic principle and legal practice of keeping a confidential source's identity secret.",
    long: "Source protection is a core obligation of investigative journalism. It may mean avoiding digital trails (secure messaging, Signal, SecureDrop) and scrubbing metadata from documents before publishing them. Project Broadsheet's source documents collection stores and displays sources — only attach documents whose authors have consented or are public."
  },
  {
    term: "transparency",
    short: "The practice of openly disclosing how a publication operates, who funds it, and how editorial decisions are made.",
    long: "Transparency builds trust with readers and distinguishes independent journalism from propaganda. Project Broadsheet includes an About page, a corrections log, source documents, and argument maps — all structural transparency features. Disclosing your corrections policy, funding model, and ownership is a baseline expectation."
  },
  {
    term: "media literacy",
    short: "The ability to critically analyze, evaluate, and create media messages.",
    long: "Media-literate readers can identify sources, distinguish news from opinion, recognize bias, and verify claims. Project Broadsheet's source documents, argument maps, and corrections log are tools that help readers develop media literacy directly from your reporting."
  },
  {
    term: "custom domain",
    short: "A domain name you own (like myPublication.com) pointed at your hosted site.",
    long: "Cloudflare Pages gives every project a free `.pages.dev` subdomain, but a custom domain establishes your brand and is required for a serious publication. Cloudflare handles free HTTPS for custom domains automatically. You buy the domain from a registrar (~$10–15/year) and add a DNS record pointing it at Cloudflare Pages."
  },
  {
    term: "subdomain",
    short: "A prefix added to a domain, like news.example.com or admin.example.com.",
    long: "Subdomains are created with CNAME or A records in your DNS settings. Cloudflare Pages lets you assign a subdomain of a domain already in your Cloudflare account. The `/admin/` path in Project Broadsheet is a path, not a subdomain — the CMS lives at the same domain as the publication."
  },
  {
    term: "URL",
    alt: "Uniform Resource Locator",
    short: "The full address of a resource on the web.",
    long: "A URL has several parts: protocol (`https://`), domain (`my-pub.com`), path (`/news/my-article/`), and optional query string (`?ref=newsletter`). Project Broadsheet generates clean, readable URLs from filenames and the section structure. The `permalink` field in front matter overrides the default."
  },
  {
    term: "404",
    alt: "Not Found",
    short: "The HTTP status code returned when a requested page does not exist.",
    long: "Project Broadsheet ships with a custom `404.html` page. When a reader follows a broken link, they see a helpful error page rather than a blank browser error. If you rename an article, add a redirect from the old URL so existing links don't break."
  },
  {
    term: "Core Web Vitals",
    short: "Google's set of page experience metrics: loading (LCP), interactivity (INP), and visual stability (CLS).",
    long: "Core Web Vitals affect search rankings. Project Broadsheet is designed to score 95–100 on all four PageSpeed categories. Key contributors: static HTML served from a CDN (fast LCP), no layout-shifting ads or fonts (low CLS), minimal JavaScript (fast INP)."
  },
  {
    term: "semantic HTML",
    short: "Using HTML elements that describe the meaning of content, not just its appearance.",
    long: "Semantic HTML uses `<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`, `<h1>`–`<h6>`, and similar elements to communicate structure to browsers, screen readers, and search engines. Project Broadsheet's templates are written semantically throughout."
  },
  {
    term: "skip link",
    short: "A visually hidden link that lets keyboard users jump past repeated navigation directly to the main content.",
    long: "Skip links are the first focusable element on the page. They're invisible until focused so they don't clutter the visual design. Without a skip link, keyboard users must tab through the entire navigation on every page. Project Broadsheet includes a 'Skip to main content' link in every layout."
  },
  {
    term: "keyboard navigation",
    short: "Using Tab, Enter, arrow keys, and Escape to navigate and interact with a page without a mouse.",
    long: "Screen reader users and many people with motor disabilities rely on keyboard navigation. Every interactive element in Project Broadsheet — nav menus, the search modal, accordion FAQs, the reader panel — is reachable and operable by keyboard."
  },
  {
    term: "reading time",
    short: "An estimate of how long it takes to read an article, shown as a guide to readers.",
    long: "Project Broadsheet calculates reading time from the article's word count at 225 words per minute. It's displayed in article cards and at the top of article pages. The estimate is a reader-experience courtesy, not a claim of precision."
  },
  {
    term: "table of contents",
    short: "A list of an article's section headings, usually linked for quick navigation.",
    long: "Project Broadsheet auto-generates a sticky table of contents from an article's `<h2>` headings. It appears in the sidebar on long-form articles and highlights the current section as the reader scrolls. Long investigative pieces and explainers benefit most."
  },
  {
    term: "annotation",
    short: "A note, highlight, or comment added to a specific passage in an article.",
    long: "Project Broadsheet's reader tools include highlights and notes. Readers can select any passage, mark it with a color, and attach a private note. Annotations are stored in localStorage and never sent to a server."
  },
  {
    term: "newswire",
    alt: "wire service",
    short: "A news agency that supplies stories to subscribing publications.",
    long: "Associated Press (AP), Reuters, and AFP are the major newswires. They supply breaking news, photos, and features to newspapers, broadcast stations, and websites. Independent publications that use wire stories must credit the source."
  },
  {
    term: "stringer",
    short: "A freelance journalist who contributes to a publication on a per-story basis without being on staff.",
    long: "Stringers are valuable for covering regions or beats where a publication can't afford a full-time reporter. Project Broadsheet supports multi-author publications — each author has their own profile page, bio, and byline linked throughout the site."
  },
  {
    term: "archiving",
    short: "The practice of preserving published content so it remains accessible over time.",
    long: "Git is Project Broadsheet's archive. Every version of every article is in the commit history. For broader preservation, consider also submitting your URLs to the Internet Archive (archive.org) and subscribing to Cloudflare's Always Online feature."
  },
  {
    term: "link rot",
    short: "The tendency for hyperlinks to break over time as pages are moved or deleted.",
    long: "Link rot undermines credibility. Keeping your content at stable URLs (never rename slugs after publication), adding redirects when you must change a URL, and periodically checking for broken outbound links all help. The Eleventy build catches broken internal links."
  },
  {
    term: "editorial independence",
    short: "The principle that a publication's news judgment and editorial decisions are not influenced by advertisers, funders, or owners.",
    long: "Editorial independence is what separates journalism from public relations. Disclosing your funding model and maintaining a clear separation between advertising and editorial content are the two key practices. Project Broadsheet's About page template includes sections for ownership, funding, and editorial policy."
  },
  {
    term: "open source",
    short: "Software whose source code is publicly available for anyone to inspect, modify, and distribute.",
    long: "Project Broadsheet is open-source under the MIT license. Anyone can read the code, fork it, run it, and build on it. This means no vendor lock-in, no subscription, and no risk of the software being discontinued without warning."
  },
  {
    term: "version control",
    short: "A system that tracks changes to files over time and allows you to recall specific versions.",
    long: "Git is the version-control system Project Broadsheet is built on. Every article save, every template edit, every config change is a commit with a timestamp and author. You can revert a mistake, compare versions, and understand exactly what changed and when."
  },
  {
    term: "XML",
    short: "Extensible Markup Language, a format for encoding structured data in a readable text form.",
    long: "XML is used for RSS feeds and sitemaps in Project Broadsheet. The sitemap at `/sitemap.xml` lists every public URL for search-engine crawlers. The RSS feed at `/feed.xml` delivers new articles to feed readers and aggregators."
  },
  {
    term: "noindex",
    short: "A directive that tells search engines not to include a page in their index.",
    long: "The `<meta name='robots' content='noindex'>` tag prevents a page from appearing in search results. Project Broadsheet adds it automatically to admin pages (`/admin/`), the search index JSON, and other utility pages that shouldn't appear in Google."
  },
  {
    term: "structured data",
    short: "Machine-readable metadata embedded in a page to help search engines understand what it contains.",
    long: "Project Broadsheet embeds JSON-LD structured data on every article page (using the `Article` schema), the home page (`WebSite` and `Organization`), and author pages (`Person`). Structured data can trigger rich results in Google, including article carousels and author panels."
  },
  {
    term: "staging",
    short: "A non-production environment that mirrors production, used for testing before changes go live.",
    long: "For Project Broadsheet, Cloudflare Pages preview deployments serve a similar role to a traditional staging environment. Every pull request gets its own preview URL where you can test changes before merging to `main` and deploying to production."
  },
  {
    term: "authentication",
    short: "Proving who you are — verifying your identity.",
    long: "In Decap CMS, authentication means proving to GitHub that you are who you say you are, using the OAuth flow. Authentication is distinct from authorization: authentication says who you are; authorization says what you're allowed to do."
  },
  {
    term: "authorization",
    short: "Determining what an authenticated user is allowed to do.",
    long: "In Project Broadsheet's Decap CMS setup, Cloudflare Zero Trust Access controls authorization at the gate — it decides whether your email address is allowed to reach `/admin/`. GitHub branch protection controls authorization at the publishing step — it decides whether you can merge to `main`."
  },
  {
    term: "Git remote",
    short: "A named reference to a version of the repository stored on another server.",
    long: "When you run `git clone`, Git sets up a remote named `origin` pointing at the source URL. `git push origin main` sends your commits to that remote. `git fetch` retrieves changes from the remote without merging them."
  },
  {
    term: "merge conflict",
    short: "A situation in Git where two branches have changed the same part of the same file in incompatible ways.",
    long: "Merge conflicts happen when two writers edit the same file on different branches. Git marks the conflicting lines and asks you to choose the correct version. They're rare in a well-run editorial workflow where each writer works on their own article in a separate branch."
  },
  {
    term: "rebase",
    short: "A Git operation that rewrites the commit history of a branch as if it started from a different point.",
    long: "Rebasing a feature branch onto the latest `main` replays your commits on top of the newest base, keeping history linear and avoiding unnecessary merge commits. Use with caution on branches others are working on; it rewrites history."
  },
  {
    term: "HTTP",
    alt: "HyperText Transfer Protocol",
    short: "The protocol that browsers and servers use to exchange web pages and data.",
    long: "Every time a reader visits an article, their browser sends an HTTP GET request and the server responds with HTML. HTTP status codes communicate results: 200 means OK, 301 means redirected, 404 means not found, 500 means server error. HTTPS is HTTP over an encrypted TLS connection."
  },
  {
    term: "query parameter",
    alt: "query string",
    short: "Key-value pairs appended to a URL after a `?`, used to pass data to a page.",
    long: "Query parameters look like `?ref=newsletter&utm_source=email`. They're used for tracking, pagination, filtering, and passing state. Project Broadsheet's static pages don't process query parameters server-side, but they're used in analytics tracking and newsletter link attribution."
  },
  {
    term: "Netlify",
    short: "A static-site hosting platform, one of the alternatives to Cloudflare Pages.",
    long: "Netlify popularized branch-based preview deployments and the JAMstack model. Project Broadsheet supports Netlify deployments. Unlike Cloudflare Pages, Netlify provides Netlify Identity for authentication — but Project Broadsheet recommends Cloudflare Pages for its performance, price (free), and the Zero Trust Access integration."
  },
  {
    term: "Vercel",
    short: "A static and serverless hosting platform, primarily aimed at Next.js applications.",
    long: "Vercel is another option for hosting Project Broadsheet. It supports static output and offers branch preview deployments similar to Cloudflare Pages. The main trade-off versus Cloudflare Pages is that Vercel's free tier is less generous and it doesn't pair as naturally with Cloudflare Zero Trust Access."
  },
  {
    term: "CORS",
    alt: "Cross-Origin Resource Sharing",
    short: "A browser security mechanism that controls which domains can request resources from your server.",
    long: "CORS headers tell the browser whether a script on one domain is allowed to fetch data from another. Project Broadsheet's static files are served with permissive CORS headers for assets that need to be accessed cross-origin (like the search index JSON). The GitHub OAuth proxy at `/api/auth` doesn't need special CORS headers since it's same-origin."
  },
  {
    term: "reading list",
    short: "A personal collection of articles saved for later reading.",
    long: "Project Broadsheet includes a reading list tool. Readers click a bookmark icon on any article to save it. The list is stored in localStorage and accessible from the reader panel. No account or server required."
  },
  {
    term: "focus mode",
    short: "A distraction-free reading view that hides navigation and sidebar elements.",
    long: "Project Broadsheet's focus mode strips everything except the article text from the page — no navigation, no sidebar, no related posts. Activated from the reader panel. Useful for long reads."
  },
  {
    term: "reading ruler",
    short: "An on-screen guide that highlights the current line of text as the reader scans down the page.",
    long: "The reading ruler is a horizontal band that follows the reader's position on the page. It's a cognitive accessibility tool for readers with dyslexia or attention difficulties. Available from Project Broadsheet's reader panel."
  },
  {
    term: "argument map",
    short: "A visual diagram of the logical structure of an argument, showing claims, evidence, and objections.",
    long: "Project Broadsheet supports argument maps for editorial and analytical articles. An argument map breaks down a position into its component claims, supporting evidence, and counterarguments, making the reasoning transparent and auditable by readers."
  },
  {
    term: "series",
    short: "A group of related articles published sequentially under a shared title.",
    long: "A series links related articles together — an investigation broken into parts, a multi-week explainer, a running diary. Project Broadsheet uses the `series` and `seriesPart` front matter fields to build the navigation between parts automatically."
  },
  {
    term: "edition",
    short: "A numbered issue of a publication, grouping articles published together as a cohesive whole.",
    long: "Project Broadsheet supports print-style numbered editions alongside the continuous web feed. The `edition` front matter field assigns an article to an issue. Edition index pages collect all articles from that issue and can be printed or downloaded as a PDF."
  },
  {
    term: "public domain",
    short: "Creative works whose copyright has expired or was never claimed, free for anyone to reproduce.",
    long: "Project Broadsheet includes a library collection for public-domain texts. Classic journalism, historical primary sources, and literature whose copyright has lapsed can be published here with full attribution. In the US, works published before 1928 are generally public domain."
  },
  {
    term: "PKCE",
    alt: "Proof Key for Code Exchange",
    short: "An OAuth extension that allows browser-based apps to authenticate without a client secret.",
    long: "PKCE (pronounced 'pixie') was designed to secure OAuth flows where a client secret cannot be stored safely — like a JavaScript app running in a browser. Decap CMS supports `auth_type: pkce` in its config, but in practice this silently falls back to Netlify's auth server when not on Netlify. Project Broadsheet uses a Cloudflare Pages Function OAuth proxy instead."
  },
  {
    term: "Webmention",
    short: "A web standard for one site to notify another that it has linked to it.",
    long: "A Webmention is a polite HTTP POST one site sends to another when it links to it — 'I mentioned you.' The receiving site verifies the source actually contains the link, then can display the mention however it likes (as a reply, a like, a repost, or a bare 'linked from'). Project Broadsheet uses webmention.io as the receiving endpoint and fetches verified mentions at build time."
  },
  {
    term: "webmention.io",
    short: "A free hosted endpoint that receives, verifies, and stores webmentions for your domain.",
    long: "Run by Aaron Parecki, webmention.io handles the receiving end of the Webmention protocol: it listens for incoming mentions, verifies that the source page actually links to the target, archives the content, and exposes a JSON API that build tools pull at build time. Project Broadsheet wires its endpoint and read-only API token into `meta.js` and fetches via `@11ty/eleventy-fetch`."
  },
  {
    term: "IndieWeb",
    short: "A movement and set of open standards for owning your presence on the web via your own domain.",
    long: "The IndieWeb convention is that your website is your identity. Standards like Webmention, Microformats, and IndieAuth let independent sites talk to each other without centralized intermediaries. Project Broadsheet implements the receiving side of the main IndieWeb stack so independent publications can join the conversation without inventing new accounts or depending on social platforms."
  },
  {
    term: "IndieAuth",
    short: "An open authentication protocol that treats a domain as a login identity.",
    long: "IndieAuth lets you sign in to indieweb services using your own website as the identity, verified against a trusted OAuth provider (GitHub, Mastodon) via reciprocal `rel=me` links. No new account, no new password. Project Broadsheet emits the `rel=me` tags needed to make this work; you wire up the reciprocal link on the other service's profile."
  },
  {
    term: "IndieLogin",
    short: "A web service that walks a rel=me reciprocal chain to authenticate a domain owner.",
    long: "IndieLogin is the piece that glues IndieAuth together: given a site URL, it reads the `rel=me` links in the site's head, finds a provider that reciprocates back to the site, and hands off to that provider's OAuth flow. Confirming the OAuth flow proves the user controls the site. Used by webmention.io and many other indieweb tools."
  },
  {
    term: "rel=me",
    short: "An HTML link attribute marking a URL as 'also me on another site'.",
    long: "`<link rel='me' href='https://github.com/yourusername'>` declares that the linked profile is another identity for the same person. For IndieAuth to succeed, the profile on the other side must link back to your domain (in GitHub's Website field, Mastodon's profile metadata, etc.). The reciprocal chain is what authenticates the domain."
  },
  {
    term: "Microformats",
    alt: "h-entry, h-card",
    short: "A convention for marking up HTML so machines can extract structured data (authors, posts, replies, events) from a normal web page.",
    long: "Microformats (specifically h-entry for posts, h-card for people) use class names like `h-entry`, `p-name`, `u-url` on normal HTML elements. Webmention verifiers and indieweb readers use them to extract the title, author, date, and content of a mention's source page. Project Broadsheet's article layout emits h-entry markers so its own pages become first-class indieweb citizens when someone webmentions one of them."
  },
  {
    term: "facepile",
    short: "A compact horizontal row of avatars representing people who liked, reposted, or mentioned a post.",
    long: "A facepile is how webmention sites typically display likes and reposts: a dense row of circular avatars with a count ('liked by 12'). Full replies get their own cards, bare mentions become a plain list, but likes and reposts collapse to a facepile to avoid turning the post footer into a wall of near-identical cards."
  },
  {
    term: "link rot",
    short: "The phenomenon of external links gradually going dead over time as the pages they point to are removed or relocated.",
    long: "Studies of major newspapers find 20–50% of outbound links dead within a decade. For serious publishing — especially investigative work or historical context — link rot undermines the evidence trail. Project Broadsheet mitigates it by adding a sibling Internet Archive wildcard link next to every external citation, so when a source dies, readers still reach the archived version in one click."
  },
  {
    term: "Wayback Machine",
    alt: "Internet Archive, web.archive.org",
    short: "The Internet Archive's public archive of web pages over time.",
    long: "The Wayback Machine crawls and preserves billions of web pages. Its wildcard URL form (`web.archive.org/web/*/URL`) auto-redirects to the latest available snapshot, which is what Project Broadsheet's link-rot protection uses: a single static sibling URL that resolves to whatever the freshest archived copy is, with no runtime API calls."
  },
  {
    term: "SPA navigation",
    alt: "SPA-nav, single-page nav",
    short: "A technique for swapping main content in place without a full page reload, while keeping the rest of the page alive.",
    long: "Project Broadsheet's spa-nav.js intercepts internal link clicks, fetches the target HTML, and swaps `#main-content` inner HTML instead of triggering a full navigation. The masthead, footer, music player iframe, global panels, and reader state all survive. Not a framework — a targeted enhancement layer that degrades cleanly if JS fails."
  },
  {
    term: "bfcache",
    alt: "back-forward cache",
    short: "A browser cache that snapshots the full in-memory state of a page so Back / Forward restores instantly.",
    long: "Modern browsers freeze the page state on unload and, on Back / Forward, restore the same DOM, JS heap, and scroll position rather than reloading. Project Broadsheet's full-screen showcases reparent themselves out of the site wrapper on mount; they must reverse that on `pagehide` so bfcache snapshots a well-formed DOM. Skip the pagehide handler and Back returns the reader to a half-assembled page."
  },
  {
    term: "resvg-js",
    alt: "resvg",
    short: "A Rust-based SVG rasterizer with Node bindings.",
    long: "Project Broadsheet uses @resvg/resvg-js in an `eleventy.after` hook to rasterize per-article SVG cards into OG-image PNGs. Fast and reliable — but it does **not** support SVG `<foreignObject>`, so any HTML-in-SVG layout technique is silently dropped. Use native `<text>` + `<tspan>` with pre-wrapped lines instead."
  },
  {
    term: "foreignObject",
    short: "An SVG element that lets you embed HTML/CSS layout inside a vector canvas.",
    long: "`<foreignObject>` is the obvious way to multi-line-text an SVG: wrap HTML with CSS and let the browser lay it out. But headless SVG rasterizers like resvg-js don't implement it. Project Broadsheet's OG-card template pre-wraps its title and description in Nunjucks and emits native SVG `<text>` with one `<tspan>` per line — avoiding `<foreignObject>` entirely."
  },
  {
    term: "showcase",
    short: "A fullscreen auto-advancing slideshow view of a filtered slice of the archive.",
    long: "The showcase view at `/archives/showcase/` renders one article per slide with kicker, title, description, byline, and CTA. URL parameters (`?author=`, `?section=`, `?topic=`, `?year=`, `?month=`) filter which articles are in rotation. Reparents out of the site-wrapper on init so Back-button bfcache restores a clean page."
  },
  {
    term: "timeline",
    alt: "archive timeline",
    short: "A vertical chronological archive view with a filter bar.",
    long: "The timeline view at `/archives/timeline/` lists articles grouped by year and month, with dropdown filters for author, section, subsection, topic, and year. Same URL-parameter vocabulary as showcase, so any link into one can be swapped for the other and vice versa. Works without JS via a noscript fallback."
  },
  {
    term: "Telegraph",
    alt: "telegraph.p3k.io",
    short: "An interactive webmention sender by Aaron Parecki, handy for manual testing.",
    long: "Telegraph (telegraph.p3k.io) lets you paste a source URL you control and a target URL on any site, and sends a real webmention. Useful for verifying that your webmention.io endpoint is receiving correctly, without writing code. Uses the same IndieAuth flow as other p3k.io tools."
  },
  {
    term: "brid.gy",
    alt: "Bridgy",
    short: "A service that turns social-media interactions (Mastodon replies, Bluesky mentions) into webmentions.",
    long: "Bridgy bridges the closed social silos into the open webmention protocol. Configure your Mastodon or Bluesky account, and Bridgy will POST webmentions to your site whenever someone on those platforms replies to or likes a post that links to you. This is how most independent sites surface social engagement without running their own scrapers."
  },
  {
    term: "focus trap",
    short: "A UI pattern that confines keyboard focus to a modal surface until it is dismissed.",
    long: "When a modal, drawer, or panel opens, Tab should cycle focus only within it; Shift+Tab wraps the other way; Escape closes and returns focus to the element that opened it. Project Broadsheet's reader panel, display-settings panel, and any other modal surface implement this pattern. Without it, keyboard users tab out of the modal and into the background page while the modal is still 'open' above them."
  },
  {
    term: "focus-visible",
    alt: ":focus-visible",
    short: "A CSS pseudo-class that matches focus only when the user navigated by keyboard, not mouse.",
    long: "`:focus-visible` lets you show a focus ring to keyboard users without annoying mouse users with a ring on every click. Project Broadsheet uses it globally: every focusable element gets a vermillion outline when focused via keyboard, no outline when clicked. Paired with `:focus:not(:focus-visible) { outline: none }` to suppress the mouse-focus outline."
  },
  {
    term: "prefers-reduced-motion",
    short: "A CSS media query for honoring a user's OS-level preference to minimize animation.",
    long: "Readers who set reduced-motion at the operating-system level have asked, globally, for less animation. Project Broadsheet honors this with a blanket `@media (prefers-reduced-motion: reduce)` that sets `animation-duration: 0.01ms` and `transition-duration: 0.01ms` on every element. Individual components that want a particular motion to still run in this mode must opt in explicitly."
  },
  {
    term: "skip link",
    short: "A hidden link at the top of the page that jumps keyboard users past site chrome to the main content.",
    long: "The first interactive element in the body is an `<a href='#main-content'>` styled to be invisible until focused. When a keyboard user hits Tab on page load, it appears; pressing Enter jumps their focus past the header and nav into the main content region. Essential for readers who navigate by keyboard or screen reader and don't want to Tab through the nav on every page."
  },
  {
    term: "page header",
    alt: ".page-header",
    short: "A reusable component for the eyebrow/title/subtitle block at the top of a standard content page.",
    long: "Standardizes the eyebrow label, page title, subtitle, and bottom rule across every non-article page. Modifiers `--centered` and `--narrow` handle the common layout variations. Articles use a richer byline-driven header instead; `.page-header` is for everything else."
  },
  {
    term: "empty state",
    short: "A design pattern for 'there is nothing here yet' that turns an empty page into a helpful signpost.",
    long: "Project Broadsheet's `.empty-state` component centers an icon, a title, a one-line explanation, and optionally a recovery CTA — used on empty author pages, topic pages with no articles, reading lists the reader hasn't populated, and any other surface that could otherwise render as a blank page."
  },
  {
    term: "divider utility",
    short: "A small set of `<hr>` variants at different weights for visual separation between sections.",
    long: "Three weights: `.divider-thin` (1 px `--color-rule`, inside a card), `.divider` (1 px `--color-rule-heavy`, between sections on the same page), and `.divider-accent` (3 px vermillion, newspaper-style rule above a major section). Avoid inside body text; let heading rhythm do that work."
  },
  {
    term: "wrap filter",
    short: "A custom Nunjucks filter that word-wraps a string into an array of lines at a given character count.",
    long: "`{{ str | wrap(30) }}` returns an array of lines, each no longer than ~30 characters, broken at word boundaries. Project Broadsheet uses it in the OG-card template to pre-wrap title and description at render time, because the SVG rasterizer (resvg-js) doesn't support `<foreignObject>` for HTML layout. Each resulting line becomes a `<tspan>`."
  },
  {
    term: "eleventy.after",
    short: "An Eleventy lifecycle hook that fires after the site finishes building.",
    long: "`eleventyConfig.on('eleventy.after', async () => { ... })` runs once per build after the final write. Project Broadsheet uses it to rasterize SVG OG cards into PNGs (resvg-js), run Pagefind indexing, and any other post-write step. Whatever you do here must not modify files the Eleventy build relies on — run truly post-build work only."
  },
  {
    term: "autoscroll",
    short: "A reader-tool feature that auto-scrolls an article at a chosen pace for hands-free reading.",
    long: "Speed controllable from 1 (slowest) to 10 (fastest). Any manual input — scroll wheel, touch drag, arrow key, Space, or click — cancels the animation immediately so the reader's own scroll always wins. Reaching the end stops it automatically. Preference stored in localStorage."
  },
  {
    term: "CC BY-NC-ND 4.0",
    alt: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0",
    short: "The Creative Commons licence Project Broadsheet articles ship under — attribution required, no commercial reuse, no derivative works.",
    long: "The strictest of the common Creative Commons licences. Partners can republish articles freely, as long as they credit the publication with a canonical link, don't sell the piece or put it behind a paywall, and don't edit it beyond tiny relative fixes. The licence URL (https://creativecommons.org/licenses/by-nc-nd/4.0/) appears in the article JSON-LD, in the republish block, and on the `/license/` page."
  },
  {
    term: "syndicate",
    alt: "syndicate: true, syndicate: false",
    short: "Front-matter flag that controls whether an article renders the 'Republish this story' grab-code block.",
    long: "Defaults to `true` via `content.11tydata.js` so every article ships with the republish surface. Set `syndicate: false` in front matter for pieces that embed licensed third-party material you can't redistribute (stock photos, one-time-permission quotes, embedded tweets) or that have live legal exposure. The block reads from this flag and renders nothing when it's false."
  },
  {
    term: "Slow Web",
    alt: "slow web, IndieWeb slow web",
    short: "The editorial posture that favours canonical articles, open licences, RSS, and decentralised conversation over algorithmic newsletters and closed platforms.",
    long: "Project Broadsheet's editorial framing. Characterised by: per-author / per-topic RSS feeds readers subscribe to directly, CC-licensed republication partners can grab without asking permission, webmentions for cross-site conversation, no recommendation algorithms, and no syndication networks that take editorial control in exchange for reach. The `/license/` page calls these the 'four rules' that accompany the CC BY-NC-ND grant."
  },
  {
    term: "tip line",
    short: "A dedicated form or contact method for readers to submit news tips, especially sensitive ones.",
    long: "The `/tips/` page is the standard surface. Project Broadsheet's pattern deliberately does NOT claim anonymity on the web form — Web3Forms logs IPs for spam prevention and hCaptcha fingerprints browsers. Instead the page warns sources at real risk to stop, and routes them to genuinely safer out-of-band channels: Tor + ProtonMail, Signal on a burner, or physical mail. The form is explicitly a low-risk channel for public-record tips."
  },
  {
    term: "safer channels",
    short: "Out-of-band submission routes for sources who need true anonymity — Tor + ProtonMail, Signal on a burner, physical mail, or SecureDrop.",
    long: "Any form on a standard web host leaks metadata to the form handler, the browser fingerprinter, the TLS session, and the HTTP request log. When source safety actually matters, the web form isn't the right tool. The safer-channels pattern documents: ProtonMail or Tuta accessed only over Tor Browser; Signal on a phone and number that aren't tied to the source's legal identity; physical mail with no return address; and for publications with real infrastructure, SecureDrop or Hush Line. See the `/tips/` page for the reader-facing version."
  },
  {
    term: "Tor",
    alt: "Tor Browser, The Onion Router",
    short: "A free anonymity network that routes traffic through multiple encrypted hops so the destination can't see your IP address.",
    long: "Sources who need true anonymity reach publications through Tor Browser, which is free, cross-platform, and doesn't leave identifying traces on the source's machine when used correctly. Project Broadsheet's tip-line page recommends pairing Tor with a fresh ProtonMail or Tuta account created and only ever accessed over Tor, never from the source's normal connection."
  },
  {
    term: "Signal",
    short: "An end-to-end-encrypted messenger widely used for secure source communication.",
    long: "Free, open-source, metadata-minimal. Project Broadsheet's tip-line recommends it for sensitive sources — with the critical caveat that the account must be registered on a phone number that isn't tied to the source's legal identity (prepaid SIM, or WiFi-only registration). A Signal account on the source's main number is a liability, not a protection."
  },
  {
    term: "ProtonMail",
    alt: "Proton Mail, Tuta",
    short: "End-to-end-encrypted email services commonly used for anonymous-source correspondence.",
    long: "ProtonMail and Tuta both allow account creation without a phone number and operate zero-knowledge mailbox encryption. Used correctly (account created and only ever accessed over Tor, separate from any other email the source uses), they let a source email a publication without exposing an IP or identity to the receiving server. Paired with Tor in Project Broadsheet's tip-line safer-channels list."
  },
  {
    term: "SecureDrop",
    short: "A whistleblower submission system used by major newsrooms that runs on a Tor onion service.",
    long: "A purpose-built anonymous-submission platform maintained by the Freedom of the Press Foundation. Sources connect via Tor to a newsroom's onion address, upload documents with no account, and receive a per-submission codename for follow-up. Outside Project Broadsheet's zero-infrastructure scope (it needs dedicated hardware, an airgapped viewing station, and ongoing maintenance) but the right answer for publications with real whistleblower traffic. Mentioned as the upgrade path from the safer-channels fallback."
  },
  {
    term: "finished-reading",
    short: "A custom Umami event Project Broadsheet fires when a reader scrolls past 90% of an article body.",
    long: "Gated per-pathname so a single session across multiple articles fires once per article. Reset on `spa:contentswap` so the next article can fire. Threshold is 90% (not 100%) because the footer and webmention block sit below the article body and readers rarely scroll into them; 90% of the body means 'they finished the piece.' Surfaced in Umami as a Goal event for per-article completion-rate reports."
  },
  {
    term: "rss-sub",
    short: "A custom Umami event Project Broadsheet fires on every RSS-feed link click, carrying a data-umami-event-feed property that identifies which feed.",
    long: "Every RSS link in the site — footer icon, topic-page header, author-page hero, section page, /feeds/ discovery page, homepage CTA — includes `data-umami-event=\"rss-sub\"` plus `data-umami-event-feed=\"...\"` naming the feed. Feed-property values: `main`, `section-{slug}`, `author-{slug}`, `topic-{slug}`, `external-{slug}`. The Umami dashboard breaks rss-sub down by the property so you can see which feed types readers actually subscribe to."
  },
  {
    term: "referrer filter",
    short: "A Umami dashboard filter saved against the canonical article URL, showing traffic that arrived from a specific syndication partner.",
    long: "Project Broadsheet's replacement for the (defunct) tracking-pixel approach to measuring syndication reach. When a partner republishes an article and keeps the canonical link, readers who click through arrive with the partner's domain in the HTTP Referrer header. Save a filter per partner — `Referrer contains partner-domain.com` — on the article page's report. Lower resolution than a pixel but requires no infrastructure."
  }
];

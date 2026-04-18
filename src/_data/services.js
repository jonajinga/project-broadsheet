export default [
  {
    slug: "launch",
    name: "Setup and Launch",
    summary: "I take your publication from a cloned repository to a live URL on your own domain. Suitable for writers who want to be writing by week's end, not configuring DNS.",
    includes: [
      "Repository fork, rename, and baseline configuration",
      "Brand tokens (colors, typography, logo) applied and reviewed with you",
      "Deployment to Cloudflare Pages with HTTPS",
      "Custom domain and DNS wiring",
      "Integration setup for two of: Buttondown, Umami, Web3Forms, Cusdis, GTranslate, Pages CMS",
      "One 45-minute training session, recorded for later reference"
    ],
    startingAt: "$499",
    cta: { label: "Book a launch call", url: "/book-a-call/?service=launch" }
  },
  {
    slug: "migration",
    name: "Content migration",
    summary: "Move an archive from Ghost, Substack, WordPress, or Medium into clean Markdown, with image rehosting and a complete redirect map. No content is left behind, no URL is broken.",
    includes: [
      "Extraction from the source platform",
      "HTML-to-Markdown conversion with front-matter normalization",
      "Image rehosting with alt-text preserved",
      "Redirect map covering every legacy URL",
      "Quality-control review on a spot-checked sample of the archive"
    ],
    startingAt: "$299 for up to 50 articles",
    cta: { label: "Request a migration quote", url: "/forms/quote-migration/" }
  },
  {
    slug: "custom-design",
    name: "Custom design",
    summary: "A brand beyond the defaults: color system, typography pairing, per-section layout variants, and the small visual details that make a publication feel distinct.",
    includes: [
      "Discovery call covering brand, audience, and editorial references",
      "A custom palette with light and dark variants, WCAG-AA verified",
      "A typography pairing sourced from Bunny Fonts",
      "Per-section accent colors and optional layout variants",
      "Logo integration and a favicon pack",
      "Two rounds of revisions"
    ],
    startingAt: "$1,200",
    cta: { label: "Request a design quote", url: "/forms/quote-custom/" }
  },
  {
    slug: "custom-development",
    name: "Custom development",
    summary: "New content types, integrations, layouts, or workflows specific to your publication. Every engagement begins with a written scope and a fixed-fee estimate.",
    includes: [
      "Written statement of work before any billable time begins",
      "A fixed-fee estimate, or an hourly cap if the scope is exploratory",
      "Source delivered on a feature branch in your repository",
      "Tests or validation where appropriate to the work",
      "Documentation written into your help center as part of delivery",
      "One post-launch support call"
    ],
    startingAt: "$150 per hour",
    cta: { label: "Request a custom quote", url: "/forms/quote-custom/" }
  },
  {
    slug: "training",
    name: "Training",
    summary: "Hands-on sessions covering anything from publishing your first article to setting up multi-author workflows. Sessions are tailored to what you need, not a fixed curriculum.",
    includes: [
      "45-minute Zoom session, recorded for your reference",
      "Agenda customized from a pre-session survey",
      "Written notes and follow-up links after every session",
      "Three-session pack available at a reduced rate"
    ],
    startingAt: "$125 per hour",
    cta: { label: "Request training", url: "/forms/training/" }
  },
  {
    slug: "hosting",
    name: "Monthly hosting",
    summary: "Managed hosting on my Cloudflare account. You get a domain, HTTPS, weekly backups, and updates, without opening a terminal. Three tiers, cancel any month.",
    includes: [
      "Production site hosted on Cloudflare Pages",
      "HTTPS, DNS, and weekly backups in every tier",
      "Monthly dependency and security updates (Plus and Managed)",
      "Uptime monitoring with email alerts (Plus and Managed)",
      "Minor edits and content help (Plus and Managed)",
      "Priority response within one business day (Managed)"
    ],
    startingAt: "$25 per month",
    cta: { label: "See hosting tiers", url: "/pricing/#hosting" }
  },
  {
    slug: "care",
    name: "Care plans",
    summary: "Ongoing maintenance on retainer. Security updates, dependency bumps, article publishing, and the occasional design refresh. Cancel any month with no penalty.",
    includes: [
      "Three tiers: Care, Care+, and Editorial",
      "Security patches and dependency updates applied on your schedule",
      "Article publishing (Care+ and Editorial)",
      "Monthly backup verification",
      "Uptime monitoring with alerts (Care+ and Editorial)",
      "Priority response (Editorial)"
    ],
    startingAt: "$99 per month",
    cta: { label: "Inquire about a plan", url: "/forms/care-inquiry/" }
  }
];

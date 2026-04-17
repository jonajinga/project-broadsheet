export default [
  {
    slug: "launch",
    name: "Setup and Launch",
    summary: "Go from git clone to a live publication on your own domain in under a week.",
    includes: [
      "Repo fork, rename, and baseline configuration",
      "Brand tokens (colors, typography, logo) applied",
      "Cloudflare Pages deployment with HTTPS",
      "Custom domain and DNS",
      "Integration setup (Buttondown, Umami, Web3Forms, Cusdis, GTranslate, Pages CMS)",
      "One 60-minute training session"
    ],
    startingAt: "$999",
    cta: { label: "Book a Launch Call", url: "/book-a-call/?service=launch" }
  },
  {
    slug: "migration",
    name: "Content Migration",
    summary: "Move an archive from Ghost, Substack, WordPress, or Medium to clean Markdown.",
    includes: [
      "Content extraction and Markdown conversion",
      "Front matter normalization (author, section, date, tags)",
      "Image rehosting and alt-text preservation",
      "Redirect map for every old URL",
      "Spot-check QA on 10% of the archive"
    ],
    startingAt: "$499 for up to 50 articles",
    cta: { label: "Request a Migration Quote", url: "/forms/quote-migration/" }
  },
  {
    slug: "custom-design",
    name: "Custom Design",
    summary: "Go beyond the defaults with a color system, typography pairing, and section-specific styling built for your brand.",
    includes: [
      "Discovery call (brand, audience, references)",
      "Custom palette (light and dark)",
      "Typography pairing sourced from Bunny Fonts",
      "Per-section accent colors and layout variants",
      "Logo integration and favicon pack",
      "Two rounds of revisions"
    ],
    startingAt: "$1,500",
    cta: { label: "Request a Design Quote", url: "/forms/quote-custom/" }
  },
  {
    slug: "custom-development",
    name: "Custom Feature Development",
    summary: "New content types, integrations, layouts, or workflows — scoped and estimated up front.",
    includes: [
      "Written scope and fixed-fee estimate",
      "Source pushed to your repo on a feature branch",
      "Tests or validation where appropriate",
      "Documentation written into your help center",
      "One post-launch support call"
    ],
    startingAt: "$200 per hour",
    cta: { label: "Request a Custom Quote", url: "/forms/quote-custom/" }
  },
  {
    slug: "training",
    name: "Training",
    summary: "Hands-on sessions for you or your team on anything from writing a first article to setting up multi-author workflows.",
    includes: [
      "60-minute Zoom session, recorded for you",
      "Custom agenda based on a pre-call survey",
      "Written notes and links after every session",
      "Three-session pack available at a discount"
    ],
    startingAt: "$150 per hour",
    cta: { label: "Request Training", url: "/forms/training/" }
  },
  {
    slug: "care",
    name: "Care Plans",
    summary: "Ongoing security updates, dependency bumps, content publishing, and support on retainer.",
    includes: [
      "Three tiers: Care, Care+, and Editorial",
      "Security patches and dependency updates",
      "Article publishing (Care+ and Editorial)",
      "Monthly backup verification",
      "Uptime monitoring (Care+ and Editorial)",
      "Priority response (Editorial)"
    ],
    startingAt: "$149 per month",
    cta: { label: "Inquire About a Plan", url: "/forms/care-inquiry/" }
  }
];

export default [
  {
    slug: "setup",
    name: "Setup and launch",
    summary: "Repository configuration, brand tokens, Cloudflare Pages deployment, domain wiring, and integration setup, billed at the standard hourly rate.",
    includes: [
      "Repository fork, rename, and baseline configuration",
      "Brand tokens applied (colors, typography, logo)",
      "Cloudflare Pages deployment with HTTPS",
      "Custom domain and DNS",
      "Integration setup (Buttondown, Umami, Web3Forms, GTranslate, etc.)",
      "Training session, recorded for later reference"
    ],
    startingAt: "$150 per hour",
    cta: { label: "Book a call", url: "/book-a-call/" }
  },
  {
    slug: "migration",
    name: "Content migration",
    summary: "Move an archive from Ghost, Substack, WordPress, or Medium into clean Markdown, with image preservation and a full redirect map, billed at the standard hourly rate.",
    includes: [
      "Extraction from the source platform",
      "HTML-to-Markdown conversion with front-matter normalization",
      "Image rehosting with alt-text preserved",
      "Redirect map covering every legacy URL",
      "Quality-control review on a spot-checked sample"
    ],
    startingAt: "$150 per hour",
    cta: { label: "Book a call", url: "/book-a-call/" }
  },
  {
    slug: "custom-development",
    name: "Custom development",
    summary: "New content types, integrations, layouts, or workflows specific to your publication, billed at the standard hourly rate with a written scope before any work begins.",
    includes: [
      "Written statement of work before any billable time",
      "Source delivered on a feature branch in your repository",
      "Documentation added to your help center on delivery",
      "One post-launch support call"
    ],
    startingAt: "$150 per hour",
    cta: { label: "Book a call", url: "/book-a-call/" }
  },
  {
    slug: "training",
    name: "Training and consulting",
    summary: "Hands-on sessions covering anything from publishing your first article to multi-author workflows, content strategy, or deployment. Tailored to what you need.",
    includes: [
      "45-minute video session, recorded for your reference",
      "Agenda customized from a pre-session survey",
      "Written notes and follow-up links after every session"
    ],
    startingAt: "$150 per hour",
    cta: { label: "Book a call", url: "/book-a-call/" }
  }
];

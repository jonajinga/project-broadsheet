export default {
  selfHosted: {
    name: "Self-hosted",
    price: "$0",
    cadence: "forever",
    tagline: "MIT-licensed. No account, no tracking, no limits. Take it and keep it.",
    features: [
      "Full source on GitHub",
      "Every reader tool, editorial section, and content type included",
      "Pagefind search, Buttondown newsletter, Umami analytics ready",
      "One-click deploys to Cloudflare Pages, Netlify, or Vercel",
      "Community support on GitHub Discussions"
    ],
    cta: { label: "Fork it and start", url: "/get-started/" }
  },
  hourly: {
    price: "$150",
    cadence: "per hour",
    tagline: "Any hands-on work billed at a single rate. Setup, migration, training, consulting, custom development, support. No retainer, no minimum commitment.",
    includes: [
      "Initial setup and deployment",
      "Content migration from any platform",
      "Custom development (new sections, layouts, integrations)",
      "Training and editorial workflow consulting",
      "Troubleshooting and support",
      "One-off fixes or edits"
    ],
    cta: { label: "Book a call", url: "/book-a-call/" }
  }
};

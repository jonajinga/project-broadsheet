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
  hosting: {
    price: "$150",
    cadence: "per month",
    tagline: "Managed hosting on my Cloudflare account. You write, I keep the lights on.",
    features: [
      "Production site hosted on Cloudflare Pages",
      "HTTPS certificate and renewal",
      "DNS management",
      "Weekly automated backups",
      "Dependency and security updates applied promptly",
      "Uptime monitoring with email alerts",
      "Support billed at the standard hourly rate when needed"
    ],
    cta: { label: "Inquire about hosting", url: "/forms/hosting-inquiry/" }
  },
  hourly: {
    price: "$150",
    cadence: "per hour",
    tagline: "Any hands-on work - setup, migration, training, consulting, custom development, or support. Billed only for time actually spent. No retainer, no minimum commitment.",
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

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
  packages: [
    {
      slug: "launch",
      name: "Launch",
      price: "$499",
      cadence: "one-time",
      hours: "~4 hours",
      tagline: "A working publication on your own domain by the end of the week.",
      features: [
        "Repo setup and baseline configuration",
        "Your brand applied via tokens",
        "Cloudflare Pages deployment",
        "Custom domain connected",
        "Two integrations configured (choose from Buttondown, Umami, Web3Forms, Cusdis, GTranslate, Pages CMS)",
        "One 45-minute training call"
      ],
      cta: { label: "Book a launch call", url: "/book-a-call/?package=launch" }
    },
    {
      slug: "signature",
      name: "Signature",
      price: "$1,499",
      cadence: "one-time",
      hours: "~10 hours",
      tagline: "Launch, plus a custom look and a migrated archive.",
      features: [
        "Everything in Launch",
        "Custom color system and typography pairing",
        "Section customization (colors, layouts, RSS)",
        "Up to 25 articles migrated and formatted",
        "Three 45-minute training calls",
        "30 days of email support after launch"
      ],
      cta: { label: "Book a signature call", url: "/book-a-call/?package=signature" },
      featured: true
    },
    {
      slug: "publisher",
      name: "Publisher",
      price: "$3,499",
      cadence: "one-time",
      hours: "~22 hours",
      tagline: "Hands-on for publications planning to ship regularly from day one.",
      features: [
        "Everything in Signature",
        "Custom section types or layouts (library, reviews, editions, etc.)",
        "Up to 100 articles migrated and formatted",
        "Multi-author setup with per-author RSS",
        "Five 45-minute training calls",
        "60 days of priority email support"
      ],
      cta: { label: "Book a publisher call", url: "/book-a-call/?package=publisher" }
    }
  ],
  migration: [
    { slug: "starter", name: "Starter", price: "$299", scope: "up to 50 articles" },
    { slug: "pro", name: "Pro", price: "$699", scope: "up to 200 articles" },
    { slug: "archive", name: "Archive", price: "$1,499", scope: "up to 1,000 articles" }
  ],
  hosting: [
    {
      slug: "hosting-basic",
      name: "Hosting Basic",
      price: "$25",
      cadence: "per month",
      tagline: "Managed hosting on my Cloudflare account.",
      features: [
        "Production site hosted on Cloudflare Pages",
        "HTTPS certificate and renewal",
        "DNS management",
        "Weekly automated backups to S3",
        "Email response within 2 business days"
      ]
    },
    {
      slug: "hosting-plus",
      name: "Hosting Plus",
      price: "$39",
      cadence: "per month",
      tagline: "Hosting Basic with monthly updates and uptime monitoring.",
      featured: true,
      features: [
        "Everything in Hosting Basic",
        "Monthly dependency and security updates",
        "Uptime monitoring with email alerts",
        "Up to 1 hour of minor edits per month",
        "Email response within 1 business day"
      ]
    },
    {
      slug: "hosting-managed",
      name: "Hosting Managed",
      price: "$79",
      cadence: "per month",
      tagline: "Hosting Plus with content help and a monthly report.",
      features: [
        "Everything in Hosting Plus",
        "Up to 3 hours of edits or content help per month",
        "Monthly performance and uptime report",
        "Priority response within the same business day"
      ]
    }
  ],
  care: [
    {
      slug: "care",
      name: "Care",
      price: "$99",
      cadence: "per month",
      tagline: "Security updates and small edits on retainer.",
      features: [
        "Security patches and dependency updates",
        "Monthly backup verification",
        "Minor content edits (up to 2 hours)",
        "Email response within 2 business days"
      ]
    },
    {
      slug: "care-plus",
      name: "Care+",
      price: "$249",
      cadence: "per month",
      tagline: "Care, plus article publishing and quarterly design review.",
      featured: true,
      features: [
        "Everything in Care",
        "Publish up to 8 articles per month",
        "Uptime monitoring with alerts",
        "Quarterly design review",
        "Email response within 1 business day"
      ]
    },
    {
      slug: "editorial",
      name: "Editorial",
      price: "$599",
      cadence: "per month",
      tagline: "A publishing desk on retainer, for publications that ship regularly.",
      features: [
        "Everything in Care+",
        "Publish up to 20 articles per month",
        "Image pipeline (crop, compress, alt text)",
        "Monthly performance audit",
        "Priority email and same-day turnaround"
      ]
    }
  ],
  hourly: [
    { name: "Custom development", price: "$150", cadence: "per hour", description: "New sections, custom layouts, integrations, bespoke features." },
    { name: "Training and consulting", price: "$125", cadence: "per hour", description: "Editorial workflow, deployment, content strategy. $325 for a three-session pack." }
  ]
};

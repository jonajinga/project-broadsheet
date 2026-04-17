export default {
  nearTerm: {
    title: "Near-term",
    subtitle: "In active development for the next release.",
    items: [
      { label: "Multi-author workflows", note: "Author roles, per-author drafts, contributor credits." },
      { label: "Post scheduling", note: "Schedule articles for a future publish date without CI gymnastics." },
      { label: "Series and columns", note: "Group articles into ongoing series or columnist runs." },
      { label: "Podcast support", note: "Native podcast feed with enclosure tags and transcripts." },
      { label: "Membership tiers", note: "Optional paid tiers with unlock logic and Stripe-compatible flows." }
    ]
  },
  mediumTerm: {
    title: "Medium-term",
    subtitle: "Scoped and prioritized, but not yet in build.",
    items: [
      { label: "Plugin system", note: "Drop-in extensions for sections, layouts, and integrations." },
      { label: "Documentation site", note: "A formal help center — exactly what you're reading now is the first step." },
      { label: "Visual editor", note: "Lightweight browser editor, optional alongside Pages CMS." },
      { label: "Broadsheet Cloud", note: "Optional managed hosting for publishers who want hands-off." }
    ]
  },
  longTerm: {
    title: "Long-term",
    subtitle: "Direction, not dates.",
    items: [
      { label: "Public API", note: "Read-only content API for apps, clients, and integrations." },
      { label: "Theme marketplace", note: "Shareable theme packs and section bundles." },
      { label: "Federation", note: "ActivityPub experiments for cross-publication discovery." },
      { label: "Mobile-first editor", note: "Write and publish directly from a phone." }
    ]
  }
};

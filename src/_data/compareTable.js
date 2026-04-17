export default {
  columns: [
    { name: "Project Broadsheet", note: "MIT, self-hosted" },
    { name: "Ghost", note: "SaaS or self-hosted" },
    { name: "Substack", note: "SaaS only" },
    { name: "WordPress", note: "Self-hosted or .com" }
  ],
  rows: [
    {
      label: "Starting cost",
      cells: ["$0", "$9/mo", "Free to start", "Free to $25+/mo"]
    },
    {
      label: "Recurring platform fees",
      cells: ["None", "$9–$199+/mo", "10% of revenue", "Hosting, plugin, theme fees"]
    },
    {
      label: "Own your content",
      cells: ["Yes — Markdown in Git", "Database export", "CSV export only", "Database export"]
    },
    {
      label: "Own your audience",
      cells: ["Yes — email list is yours", "Yes", "Yes, with caveats", "Yes"]
    },
    {
      label: "Database required",
      cells: ["No", "Yes", "Yes (managed)", "Yes"]
    },
    {
      label: "Hosting required",
      cells: ["Any static host (free tiers)", "Node host or Ghost Pro", "Platform only", "PHP host"]
    },
    {
      label: "Newsletter built-in",
      cells: ["Yes (Buttondown)", "Yes", "Yes", "Plugin"]
    },
    {
      label: "On-site search",
      cells: ["Yes (Pagefind)", "Paid add-on", "Limited", "Plugin"]
    },
    {
      label: "Reader tools (TTS, highlights, notes)",
      cells: ["27+ built-in", "None", "None", "Via plugins"]
    },
    {
      label: "Themes and customization",
      cells: ["Full source", "Handlebars themes", "Not customizable", "Theme marketplace"]
    },
    {
      label: "Migration out",
      cells: ["Free, trivial — Markdown", "JSON export", "CSV export", "Plugin-assisted export"]
    },
    {
      label: "Platform lock-in risk",
      cells: ["None", "Low", "High", "Medium"]
    },
    {
      label: "Analytics privacy",
      cells: ["Cookieless by default", "Depends on integration", "Substack-owned", "Depends on plugin"]
    },
    {
      label: "License",
      cells: ["MIT", "MIT", "Proprietary", "GPLv2+"]
    }
  ]
};

export default {
  columns: [
    { name: "Project Broadsheet", note: "MIT, self-hosted" },
    { name: "Ghost", note: "SaaS or self-hosted" },
    { name: "Substack", note: "SaaS only" },
    { name: "WordPress", note: "Self-hosted or .com" },
    { name: "Superdesk", note: "Open source, enterprise" }
  ],
  rows: [
    {
      label: "Starting cost",
      cells: ["$0", "$9/mo", "Free to start", "Free to $25+/mo", "Infrastructure only"]
    },
    {
      label: "Recurring platform fees",
      cells: ["None", "$9–$199+/mo", "10% of revenue", "Hosting, plugin, theme fees", "None (hosting costs apply)"]
    },
    {
      label: "Own your content",
      cells: ["Yes (Markdown in Git)", "Database export", "CSV export only", "Database export", "Yes (NewsML / database)"]
    },
    {
      label: "Own your audience",
      cells: ["Yes, email list is yours", "Yes", "Yes, with caveats", "Yes", "N/A (not a newsletter tool)"]
    },
    {
      label: "Database required",
      cells: ["No", "Yes", "Yes (managed)", "Yes", "Yes (MongoDB + Elasticsearch + Redis)"]
    },
    {
      label: "Hosting required",
      cells: ["Any static host (free tiers)", "Node host or Ghost Pro", "Platform only", "PHP host", "Docker, multi-service cluster"]
    },
    {
      label: "Newsletter built-in",
      cells: ["Yes (Buttondown)", "Yes", "Yes", "Plugin", "No (export to separate service)"]
    },
    {
      label: "On-site search",
      cells: ["Yes (Pagefind)", "Paid add-on", "Limited", "Plugin", "Yes (built on Elasticsearch)"]
    },
    {
      label: "Reader tools (TTS, highlights, notes)",
      cells: ["27+ built-in", "None", "None", "Via plugins", "None"]
    },
    {
      label: "Editorial workflow (desks, stages, approvals)",
      cells: ["Basic (Git-based)", "Basic", "None", "Plugin", "Full newsroom workflow"]
    },
    {
      label: "Themes and customization",
      cells: ["Full source", "Handlebars themes", "Not customizable", "Theme marketplace", "Custom output templates"]
    },
    {
      label: "Migration out",
      cells: ["Free, trivial (Markdown)", "JSON export", "CSV export", "Plugin-assisted export", "NewsML XML export"]
    },
    {
      label: "Platform lock-in risk",
      cells: ["None", "Low", "High", "Medium", "Low"]
    },
    {
      label: "Analytics privacy",
      cells: ["Cookieless by default", "Depends on integration", "Substack-owned", "Depends on plugin", "Depends on setup"]
    },
    {
      label: "Target audience",
      cells: ["Independent publishers, small teams", "Subscription newsletters, small orgs", "Writers on a newsletter", "Blogs, business sites", "Large newsrooms, wire services"]
    },
    {
      label: "License",
      cells: ["MIT", "MIT", "Proprietary", "GPLv2+", "AGPLv3"]
    }
  ]
};

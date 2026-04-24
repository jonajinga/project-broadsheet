export default {
  columns: [
    { name: "Project Broadsheet", note: "Free, runs on your own computer" },
    { name: "Ghost", note: "Hosted account, or you run it" },
    { name: "Substack", note: "Hosted only" },
    { name: "WordPress", note: "Hosted account, or you run it" },
    { name: "Superdesk", note: "For large newsrooms" }
  ],
  rows: [
    {
      label: "Starting cost",
      cells: ["Nothing", "$9 a month", "Free to start", "Free to $25+ a month", "Just the infrastructure"]
    },
    {
      label: "Ongoing fees",
      cells: ["None", "$9–$199+ a month", "10% of paid subscriptions", "Hosting, plus plug-ins and themes", "None (but the setup has costs)"]
    },
    {
      label: "Your writing stays yours",
      cells: ["Yes — it's just plain files", "Yes, after an export", "Only via a spreadsheet export", "Yes, after a database export", "Yes, via their news format"]
    },
    {
      label: "Your reader list stays yours",
      cells: ["Yes", "Yes", "Yes, with some caveats", "Yes", "Not a newsletter tool"]
    },
    {
      label: "Needs a database",
      cells: ["No", "Yes", "Yes (managed for you)", "Yes", "Yes, several"]
    },
    {
      label: "What it needs to run",
      cells: ["Any free static host", "A Node server or Ghost's hosted plan", "Substack only", "A PHP host", "A multi-service setup"]
    },
    {
      label: "Newsletter built in",
      cells: ["Yes (via Buttondown)", "Yes", "Yes", "Through a plug-in", "No — handled separately"]
    },
    {
      label: "Search on the site",
      cells: ["Yes", "Paid add-on", "Limited", "Through a plug-in", "Yes"]
    },
    {
      label: "Reader-side features (dark mode, save-for-later, highlights, notes)",
      cells: ["Built in", "None", "None", "Through plug-ins", "None"]
    },
    {
      label: "Editorial process (reviews, approvals)",
      cells: ["Simple", "Simple", "None", "Through a plug-in", "Full newsroom workflow"]
    },
    {
      label: "Look and layout",
      cells: ["Full source, change anything", "Themes you can write", "Not customisable", "A marketplace of themes", "Custom layouts"]
    },
    {
      label: "Moving away",
      cells: ["Copy the folder", "A file export", "A spreadsheet export", "Plug-in-assisted export", "News-format export"]
    },
    {
      label: "How easy it is to leave",
      cells: ["Very easy", "Easy", "Hard", "Medium", "Easy"]
    },
    {
      label: "Reader privacy by default",
      cells: ["No tracking, no cookies", "Depends on add-ons", "Tracked by Substack", "Depends on plug-ins", "Depends on setup"]
    },
    {
      label: "Who it's built for",
      cells: ["Independent writers and small teams", "Newsletter writers and small outlets", "Solo writers with a mailing list", "All kinds of sites", "Large newsrooms and wire services"]
    },
    {
      label: "Licence",
      cells: ["Open-source (MIT)", "Open-source (MIT)", "Substack's own", "Open-source (GPLv2+)", "Open-source (AGPLv3)"]
    }
  ]
};

export default {
  selfHosted: {
    name: "Do it yourself",
    price: "$0",
    cadence: "forever",
    tagline: "Free to use, for anything, with no account, no tracking, and no limits.",
    features: [
      "Every feature on from the start",
      "All of the docs",
      "The live example as a reference",
      "Community Q&A in GitHub Discussions"
    ],
    cta: { label: "How to start", url: "/get-started/" }
  },
  hourly: {
    price: "$150",
    cadence: "per hour",
    tagline: "A flat hourly rate for any hands-on work — setup, moving an archive, custom work, training, a fix, a second pair of eyes. No retainer, no minimum.",
    includes: [
      "Getting a new publication set up and online (usually 3–4 hours)",
      "Moving an archive over from somewhere else (usually 8–12 hours)",
      "A new section, layout, or feature built for you (usually 4–6 hours each)",
      "A walk-through or training session (usually 2 hours)",
      "Fixing something that isn't behaving",
      "A one-off tidy-up or change"
    ],
    cta: { label: "Get in touch", url: "/book-a-call/" }
  },
  education: {
    rate: 75,
    fullRate: 150,
    discount: "50%"
  }
};

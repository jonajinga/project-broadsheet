---
title: Open Collective
subtitle: Add a funding page on Open Collective so readers can contribute financially to your publication — no payment processing setup required.
order: 9
updated: 2026-04-18
---

[Open Collective](https://opencollective.com) is a platform for transparent community funding. It handles payment processing, receipts, and public financial reporting on your behalf. Project Broadsheet's support page includes Open Collective and GitHub Sponsors links by default; this doc explains how to set them up.

## Create an Open Collective account

1. Go to [opencollective.com](https://opencollective.com) and click **Create a Collective**.
2. Choose **For an open source project** or **For a community** depending on your publication type.
3. Enter your publication name, description, and website URL.
4. Choose a fiscal host. [Open Source Collective](https://opencollective.com/opensource) accepts most open-source and public-interest projects and handles legal and tax paperwork for a small fee (currently 5% of funds raised). Independent news projects may prefer a local fiscal host or their own legal entity.
5. Submit your application. Approval typically takes a few business days.

## Find your Collective URL

Once approved, your page lives at `https://opencollective.com/{your-slug}`. This is the URL readers use to contribute.

## Add it to Project Broadsheet

Open `src/_data/meta.js` and add your Collective URL:

```js
openCollective: "https://opencollective.com/your-publication-name",
```

The support page (`/support/`) already renders an Open Collective button using this value. If your `meta.js` doesn't include the `openCollective` key, add it alongside the other social/funding fields and verify the button appears at `/support/` after your next build.

## Add a funding badge (optional)

Open Collective provides embeddable widgets and badges. To add a contributor badge to your README:

```markdown
[![Open Collective backers](https://opencollective.com/your-slug/backers/badge.svg)](https://opencollective.com/your-slug)
```

## GitHub Sponsors

GitHub Sponsors is the other funding option on the support page. To enable it:

1. Go to your GitHub profile → **Sponsors** → **Set up GitHub Sponsors**.
2. Complete the payout setup (requires a bank account or PayPal).
3. Your sponsor page becomes available at `https://github.com/sponsors/{username}`.

The support page uses `{{ meta.githubOwner }}` to build the Sponsors URL automatically — no additional config needed once you've enabled Sponsors on GitHub.

## Transparency

Open Collective publishes all income and expenses publicly by default. This transparency is a feature for public-interest journalism: readers can see exactly where funding goes. If your publication can't operate transparently (for editorial independence reasons, for example), consider an alternative like Stripe or a direct Substack-style membership.

## What to do next

- [Tipping and reader support](/docs/integrations/tipping/) — per-article support badges that link to your funding pages.
- [Support page](/support/) — where the Open Collective and GitHub Sponsors buttons appear on your live site.

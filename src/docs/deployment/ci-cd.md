---
title: CI/CD with GitHub Actions
subtitle: How to set up a GitHub Actions workflow that builds and deploys Project Broadsheet automatically on every push, and how to trigger scheduled rebuilds for time-sensitive content.
order: 7
updated: 2026-04-18
---

Cloudflare Pages and Netlify already build and deploy your site automatically when you push to `main`. GitHub Actions is useful when you need more control: running tests before deploying, triggering scheduled rebuilds, or integrating with external services.

## The simplest workflow: push-to-deploy

If you are using Cloudflare Pages or Netlify, push-to-deploy is already configured through their dashboard — you do not need a GitHub Actions workflow for basic deploys. Skip ahead to scheduled rebuilds if that is all you need.

## Manual deploy with GitHub Actions (Cloudflare Pages)

If you want GitHub Actions to control the deploy step (for example, to add a linting or build-check gate), create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - run: npm ci

      - run: npm run build

      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
          command: pages deploy _site --project-name=my-publication
```

Add `CF_API_TOKEN` and `CF_ACCOUNT_ID` as repository secrets under **Settings → Secrets and variables → Actions** in your GitHub repo.

## Scheduled rebuilds

A scheduled rebuild is useful when you use `draft: true` combined with a future `date` field — the article stays hidden until you remove the draft flag, but you can queue rebuilds to check daily:

```yaml
name: Scheduled rebuild

on:
  schedule:
    - cron: "0 8 * * *"   # Every day at 08:00 UTC
  workflow_dispatch:       # Also allow manual trigger

jobs:
  rebuild:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
          command: pages deploy _site --project-name=my-publication
```

The `workflow_dispatch` trigger adds a **Run workflow** button in the GitHub Actions tab so you can trigger a rebuild manually without pushing a commit.

## Running a build check on pull requests

To verify the site builds before merging a PR:

```yaml
name: Build check

on:
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
```

This catches broken front matter, missing data references, or template errors before they reach production.

## Required secrets

| Secret | Where to find it |
|--------|-----------------|
| `CF_API_TOKEN` | Cloudflare dashboard → My Profile → API Tokens |
| `CF_ACCOUNT_ID` | Cloudflare dashboard → right-hand sidebar |

For Netlify deployments, use `NETLIFY_SITE_ID` and `NETLIFY_AUTH_TOKEN` with the `netlify/actions/cli` action instead.

## What to do next

- [Drafts and scheduling](/docs/content/drafts-and-scheduling/) for the workflow this CI/CD setup enables.
- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) for the dashboard-based deploy setup.
- [Environment variables](/docs/deployment/env-vars/) for secrets available to the build.

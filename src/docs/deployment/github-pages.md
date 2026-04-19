---
title: Deploy to GitHub Pages
subtitle: Host your Project Broadsheet publication directly from your GitHub repository — free, with HTTPS, using a GitHub Actions workflow.
order: 9
updated: 2026-04-18
---

<span class="g-term" data-term="GitHub">GitHub</span> Pages hosts static sites directly from a repository. It's free for public repositories, issues HTTPS certificates automatically, and integrates with <span class="g-term" data-term="GitHub">GitHub</span> Actions for automated builds. The trade-off compared to Cloudflare Pages or Netlify is a slightly slower global delivery network and fewer build configuration options.

## Prerequisites

- A public GitHub repository containing your Project Broadsheet site.
- A GitHub account with Actions enabled (it's on by default).

## Create the Actions workflow

Create a file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: _site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Commit and push this file to `main`.

## Enable Pages in repository settings

1. Go to your repository on GitHub.
2. Open **Settings** → **Pages**.
3. Under **Source**, select **GitHub Actions**.
4. Save.

The next push to `main` triggers the workflow. The build runs, the output is uploaded, and the site deploys to `https://{username}.github.io/{repo-name}/`.

## Set a base URL for subdirectory deploys

If your site lives at `/{repo-name}/` rather than a root domain, update the `SITE_URL` environment variable in the workflow so all internal links resolve correctly:

```yaml
      - run: npm run build
        env:
          SITE_URL: https://username.github.io/repo-name
```

## Attach a custom domain

In repository Settings → Pages, enter your custom domain. GitHub creates a `CNAME` file in the repository root automatically. At your DNS provider, create a `CNAME` record pointing to `{username}.github.io`.

Custom domains receive HTTPS certificates from Let's Encrypt. Allow up to 24 hours for the certificate to provision.

## What to do next

- [Deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/) — the recommended host for most publications.
- [Custom domain and HTTPS](/docs/deployment/custom-domain/) — DNS setup and certificate verification.
- [Environment variables](/docs/deployment/env-vars/) — setting `SITE_URL` and other build-time variables.

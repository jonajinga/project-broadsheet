---
title: Using Project Broadsheet without the terminal
subtitle: Two paths to a live publication for writers, journalists, and educators who prefer not to use the command line.
order: 5
updated: 2026-04-18
---

The standard install path requires a terminal and Node.js. If that is not your environment — you are a journalist, educator, or writer who works entirely in a browser — you have two options.

## Option 1: Fork on GitHub + Pages CMS (recommended)

This approach gives you a fully functional publication with a browser-based content editor. You never open a terminal.

### What you need

- A free [GitHub account](https://github.com)
- A free [Cloudflare Pages](https://pages.cloudflare.com) account

### Step 1: Fork the repository

1. Go to [github.com/jonajinga/broadsheet](https://github.com/jonajinga/broadsheet)
2. Click **Fork** in the top-right corner
3. Choose your GitHub account as the destination
4. Give the repository a name that fits your publication

Forking creates your own copy of Project Broadsheet under your GitHub account. You own it completely.

### Step 2: Connect to Cloudflare Pages

1. Log in to [Cloudflare Pages](https://pages.cloudflare.com)
2. Click **Create application** → **Pages** → **Connect to Git**
3. Authorize Cloudflare to access your GitHub account
4. Select the forked repository
5. Set the build command: `npm run build`
6. Set the output directory: `_site`
7. Set an environment variable: `NODE_VERSION` = `18`
8. Click **Save and Deploy**

Cloudflare builds the site automatically. The first build takes 2–3 minutes. You will receive a free `.pages.dev` subdomain immediately.

### Step 3: Connect Pages CMS

[Pages CMS](https://pagescms.org) is a free, browser-based content editor that connects to your GitHub repository. It lets you write and publish articles, upload images, and manage your site — all without touching a file or a terminal.

1. Go to [pagescms.org](https://pagescms.org) and sign in with your GitHub account
2. Select your forked repository
3. Pages CMS will detect the content structure automatically
4. Start writing

See the [Pages CMS integration guide](/docs/integrations/pages-cms/) for configuration details.

### Step 4: Edit your site settings

In Pages CMS (or directly on GitHub), open `src/_data/site.json` and set your publication name, email, and description. Every change you save triggers a new Cloudflare build. Your live site updates within 2–3 minutes.

---

## Option 2: Hire me to set it up

If you want a fully configured publication — custom domain, brand colors, sections, newsletter, analytics — without handling any of the above yourself, I can do it for you.

Setup typically takes 3–4 hours at [$150/hour](/pricing/). Educational institutions and registered nonprofits qualify for a reduced rate — mention it when you book.

[Book a call →](/book-a-call/)

---

## What "forking" means

A fork is your own independent copy of a repository. Changes you make to your fork do not affect the original Project Broadsheet source. When Project Broadsheet releases an update, you can choose to pull those changes in — or not. You are never forced to update.

## What to do next

- [After your first deploy](/docs/getting-started/after-first-deploy/) for the setup checklist once your site is live.
- [Pages CMS](/docs/integrations/pages-cms/) for the full browser-based editing configuration.
- [Education](/education/) if you are setting up a student publication or classroom project.

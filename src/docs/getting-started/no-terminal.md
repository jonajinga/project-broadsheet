---
title: Using Project Broadsheet without the terminal
subtitle: Two paths to a live publication for writers, journalists, and educators who prefer not to use the command line.
order: 5
updated: 2026-04-19
---

The standard install path requires a terminal and Node.js. If that is not your environment — you are a journalist, educator, or writer who works entirely in a browser — you have two options.

## Option 1: Fork on GitHub + Decap CMS (recommended)

This approach gives you a fully functional publication with a browser-based content editor, access control, and an editorial approval workflow. You never open a terminal.

### What you need

- A free [GitHub account](https://github.com)
- A free [Cloudflare](https://cloudflare.com) account (for both Pages hosting and Zero Trust Access)

### Step 1: Fork the repository

1. Go to [github.com/jonajinga/broadsheet](https://github.com/jonajinga/broadsheet)
2. Click **Fork** in the top-right corner
3. Choose your GitHub account as the destination
4. Give the repository a name that fits your publication

Forking creates your own copy of Project Broadsheet under your GitHub account. You own it completely.

### Step 2: Deploy to Cloudflare Pages

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Authorize Cloudflare to access your GitHub account
3. Select the forked repository
4. Set the build command: `npm run build`
5. Set the output directory: `_site`
6. Set an environment variable: `NODE_VERSION` = `18`
7. Click **Save and Deploy**

Cloudflare builds the site automatically. The first build takes 2–3 minutes. You will receive a free `.pages.dev` subdomain immediately.

### Step 3: Create a GitHub OAuth App

Decap CMS uses GitHub OAuth for authentication. This is a one-time setup.

1. In GitHub, go to **Settings → Developer settings → OAuth Apps → New OAuth App**
2. Set **Authorization callback URL** to `https://your-domain.com/admin/`
3. Click **Register application** and note the **Client ID**
4. In your forked repo, open `src/admin/config.yml` and replace `YOUR_GITHUB_OAUTH_APP_CLIENT_ID` with the Client ID you just noted. Also update `repo:` to `your-github-username/your-repo-name`.

### Step 4: Set up Cloudflare Zero Trust Access

This step controls who can reach the `/admin/` editor. Only email addresses you approve will get through.

1. In Cloudflare → **Zero Trust → Access → Applications → Add an application**
2. Choose **Self-hosted**; set domain to `your-domain.com/admin/`
3. Under **Policies**, add an email allowlist with each writer's email address
4. Save

Free Zero Trust accounts support up to 50 users at no cost.

### Step 5: Invite writers

For each person who needs CMS access:

1. Add their email to the **Cloudflare Access allowlist**
2. Add them as a **GitHub collaborator** with **Write** access (repo → Settings → Collaborators)

Writers visit `https://your-domain.com/admin/`, enter an email one-time PIN, sign in with GitHub, and see the full editor. Every save they make creates a draft pull request — nothing goes live until you review and merge it.

### Step 6: Edit your site settings

In Decap CMS, open **Site Configuration → Site Settings** to set your publication name, email, description, newsletter provider, and social links. Every change saved in the CMS creates a PR; merge it to deploy.

See the [Decap CMS integration guide](/docs/integrations/decap-cms/) for full configuration details.

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
- [Decap CMS](/docs/integrations/decap-cms/) for the full browser-based editing configuration.
- [Education](/education/) if you are setting up a student publication or classroom project.

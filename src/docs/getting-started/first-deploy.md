---
title: Deploy your first version
subtitle: From localhost to a public URL in under ten minutes.
order: 2
updated: 2026-04-17
---

The fastest way to get Project Broadsheet online is Cloudflare Pages. It's free, fast, and handles HTTPS automatically.

## Push to GitHub

If your cloned repo isn't already on GitHub, create a new repository and push:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/my-publication.git
git push -u origin main
```

## Connect Cloudflare Pages

1. Sign in at <https://dash.cloudflare.com/?to=/:account/pages>.
2. Click **Create a project** → **Connect to Git**.
3. Authorize Cloudflare to access your GitHub.
4. Select your repository.
5. Set the build command to `npm run build`.
6. Set the build output directory to `_site`.
7. Click **Save and Deploy**.

The first build takes about a minute. When it's done, Cloudflare gives you a URL like `my-publication.pages.dev`.

## Add a custom domain

In the Cloudflare Pages dashboard → **Custom domains** → **Set up a custom domain**. Enter your domain and follow the DNS instructions. HTTPS is automatic.

## What's next

- [Configure Umami analytics](/docs/integrations/umami/).
- [Set up Buttondown](/docs/integrations/buttondown/) for the newsletter.
- Customize the [brand tokens](/docs/design/tokens/).

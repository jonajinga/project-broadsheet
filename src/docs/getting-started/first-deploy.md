---
title: Deploy your first version
subtitle: Move the built site from your laptop to a public URL using Cloudflare Pages. HTTPS and a custom domain are included at no charge.
order: 2
updated: 2026-04-17
---

Once Project Broadsheet runs locally, the next step is deployment — placing the built site on a public web server so anyone can visit it. The fastest path is <span class="g-term" data-term="Cloudflare Pages">Cloudflare Pages</span>, which deploys directly from a <span class="g-term" data-term="GitHub">GitHub</span> repository every time you push a change.

## Push the repository to GitHub

If your cloned repository is not yet on GitHub, create a new repository in your account, then point the local copy at it:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/my-publication.git
git push -u origin main
```

Pushing uploads your local commits to GitHub. From here, any future change you commit and push will trigger a new deploy.

## Connect Cloudflare Pages

1. Sign in to the Cloudflare dashboard at <https://dash.cloudflare.com>.
2. Open **Workers & Pages**, then **Create application**, then **Pages**, then **Connect to Git**.
3. Authorize Cloudflare to read your GitHub account. You can limit access to a single repository if you prefer.
4. Select the repository you just pushed.
5. Enter `npm run build` as the build command.
6. Enter `_site` as the build output directory.
7. Click **Save and Deploy**.

The first build typically finishes in under a minute. When it completes, Cloudflare issues a temporary URL such as `my-publication.pages.dev`.

## Attach a custom domain

From the Pages project dashboard, open **Custom domains**, then **Set up a custom domain**. Enter your domain name. If the domain is already using Cloudflare for DNS, the required record is added automatically; otherwise Cloudflare displays a `CNAME` value to add at your existing DNS provider. HTTPS certificates are issued for free.

## What happens on each future push

Every commit pushed to the `main` branch triggers a fresh production build. Pull requests receive their own preview deploy at a unique URL — useful when you want to review an article with an editor before it goes live.

## What to do next

- [Set up Umami analytics](/docs/integrations/umami/) to see how many readers you have, without cookies.
- [Set up Buttondown](/docs/integrations/buttondown/) if you plan to run a newsletter.
- [Customize the brand tokens](/docs/design/tokens/) to make the site look like yours.

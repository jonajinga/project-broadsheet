---
layout: layouts/page.njk
title: About
eyebrow: About
subtitle: What Project Broadsheet is, who made it, and how it stays free.
permalink: /about/
toc: true
---

<div class="lead">Project Broadsheet is a free, open-source way to run your own publication online. You write in plain text; it turns that into a polished website — with a home page, sections, an archive, a newsletter, and the small touches that make a site feel like a proper publication. There's no monthly fee and nothing that locks you in.</div>

<hr class="gold-rule">

## Why it exists

Putting a publication online used to mean a room full of equipment and twenty people. Today it mostly means a web browser and a recurring bill — but the options for running one on your own are narrower than they should be.

You can sign up with a hosted service and let them keep your writing, your reader list, and your whole operation on their computers. You can wrestle with an older content system and end up spending more time on it than on writing. You can build something from scratch and rebuild every feature from zero.

None of those matched what I wanted to use, so I built what I wanted to use. Project Broadsheet is the result: a publication in a box, free to run, and easy to take somewhere else if you ever want to.

## How it works, in plain terms

Each article is a plain text file in a folder on your computer. A small program takes those files and turns them into a website. You put that website online, on a free host, and your readers see it as an ordinary site — nothing unusual for them. There's no database to keep running, no login system to maintain, and nothing that falls over because a server had a bad day.

When you want to publish something new, you save the file and push it to a service that keeps a copy of your work online. The site updates itself within a minute or so.

## What it's built out of

The building blocks are standard, well-supported, and easy to find help for. They're listed below mainly so anyone technical can see there's no surprise.

| Part | Used for |
|---|---|
| Eleventy | Turning your files into a website |
| Nunjucks | The page templates |
| Plain-text articles (Markdown) | Your writing |
| Plain CSS | The look |
| Plain JavaScript | Reader features like dark mode and highlights |
| Pagefind | The search bar on your site |
| Cloudflare Pages, Netlify, or similar | A place to host it, free |
| (no database) | |

Updates to a site with a few hundred articles finish in around twelve seconds on a modest laptop.

## Privacy

By default, nothing is collected. No accounts, no stored sessions, no analytics unless you choose to turn them on.

- Your writing is in a folder you control, not on a company's servers.
- The search bar on your site runs entirely in the reader's browser. No queries leave their computer.
- If you turn on analytics, the built-in option doesn't use cookies and doesn't follow readers around the web.
- The project itself doesn't phone home or collect anything about your site or your readers.
- A handful of optional add-ons (a newsletter, comments, machine translation) come with their own privacy policies — turn them on only if you want them.

See the full [Privacy Policy](/privacy/) for what this specific website does.

## Accessibility

The aim is for anyone to be able to read the site, on any device, in any situation.

- Text contrasts well against the background in both light and dark mode.
- Headings, links, and buttons are marked up in a way that assistive software can understand.
- Every page has a "skip to main content" link and a clearly visible focus ring for keyboard users.
- Touch targets are large enough to use with a finger.
- Readers who prefer less motion or a different color scheme get their preference automatically.
- Tested with screen readers on both Mac and Windows, with a keyboard only, and at 200% zoom.

The full [Accessibility Statement](/accessibility/) has the details.

## What it costs to run

| | Cost |
|---|---|
| Project Broadsheet | Free, forever |
| A place to put the site online | Free on Cloudflare Pages or Netlify for most publications |
| A domain name | About $10–15 a year |
| A newsletter service | Free up to 100 subscribers on Buttondown, a small flat rate after that |
| My time, if you hire me | [$150 per hour](/pricing/) |

There is no paid version of Project Broadsheet and no plan to introduce one. The project is free whether you ever hire me or not. If you'd like to help cover the cost of maintaining it, there's [Open Collective](https://opencollective.com/broadsheet) and [GitHub Sponsors](https://github.com/sponsors/{{ meta.githubOwner }}).

## A short tour of what's included

The [features page](/features/) has a full walk-through. The short version:

- A home page, with separate pages for each section of the publication.
- A searchable archive of everything you publish.
- Author pages, so each writer has a bio and a page of their own work.
- A newsletter sign-up, if you want one, through a small independent email service.
- Quiet reader tools like dark mode, save-for-later, highlights, and notes.
- Optional extras for things like comments, quiet analytics, and machine translation into eighty-odd languages.
- Everything a search engine or a social platform expects when it shares a link to your site.

## About the project

It's made and maintained by [Jon Ajinga](/jon-ajinga/), a web developer and writer based in Colorado. I run [The Freethinking Times](https://thefreethinkingtimes.com), which was the first publication built with this — you can use it as a live reference for what's possible. I also run [Pikes Peak Web Designs](https://www.pikespeakwebdesigns.com), the small practice that built this site.

I started Project Broadsheet for myself. I released it because other people kept asking how I'd built what they were seeing on The Freethinking Times, and writing answers turned into writing a project.

The project is maintained in the open and released under an open-source licence. That means anyone can read the source, use it, or take it in their own direction — you're never dependent on me to keep it going. That's the point.

## What's next

- The [roadmap](/roadmap/) shows what's in progress and what's on the horizon.
- The [changelog](/changelog/) lists what has actually shipped.
- The [blog](/blog/) is where I write about the work as it happens.

<hr class="gold-rule">

<p class="lead">Questions, or a publication to show me? <a href="/contact/">Write to me.</a> I read every message.</p>

---
title: Set up Buttondown newsletter
subtitle: Privacy-first newsletter, no tracking pixels, one field in site.json.
order: 1
updated: 2026-04-17
---

[Buttondown](https://buttondown.email) is a tiny, independent newsletter service with no tracking pixels, no open-rate surveillance, and straightforward pricing. It's Project Broadsheet's default.

## Sign up

Create an account at <https://buttondown.email>. The free tier covers up to 100 subscribers.

## Configure

In `src/_data/site.json`:

```json
"buttondown": {
  "username": "your-buttondown-username"
}
```

That's it. The signup form in the footer and on any page that uses the newsletter partial will now point at your Buttondown instance.

## Where the signup appears

- Site footer
- Blog index page
- Any page that includes the newsletter partial: `{% raw %}{% include "partials/newsletter.njk" %}{% endraw %}`

## What's next

- [Set up Umami analytics](/docs/integrations/umami/).
- [Customize the signup form](/docs/customization/newsletter-form/).

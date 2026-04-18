---
title: Customize the newsletter form
subtitle: Change the fields, placeholder text, button label, or form placement for the Buttondown newsletter signup. Also covers custom confirmation copy and hidden fields.
order: 5
updated: 2026-04-17
---

The newsletter signup renders from `src/_includes/partials/newsletter.njk`. It is intentionally small: an email input and a subscribe button. That's enough for most publications, but you can extend or restyle it without touching the core integration.

## Where the form lives

The partial is rendered in:

- The site footer (via `partials/footer.njk`).
- The blog index page (`src/blog/index.njk`).
- Any custom page that includes `{% raw %}{% include "partials/newsletter.njk" %}{% endraw %}`.

## Add fields

<span class="g-term" data-term="Buttondown">Buttondown</span> accepts optional metadata fields as hidden or visible inputs. For example, to add a "first name" field:

```html
<label for="nl-first-name">First name</label>
<input id="nl-first-name" type="text" name="metadata__first_name">
```

Anything named `metadata__foo` lands in Buttondown as a custom subscriber field.

## Change the button label or placeholder

Edit the partial directly:

```html
<input type="email" name="email" placeholder="Your email" required>
<button type="submit">Get the newsletter</button>
```

## Change where the form posts to

The form's `action` points at Buttondown. If you move newsletter providers (to Kit, MailerLite, Substack-as-reader-subscriber), update the `action` and the field names to match the new provider's embed format.

## Confirmation behavior

By default the form opens the Buttondown confirmation page in a new tab (`target="_blank"`). To stay on your site and show a custom thank-you message, remove `target="_blank"` and handle the post with JavaScript.

## What to do next

- [Buttondown integration](/docs/integrations/buttondown/) for the config basics.
- [Custom layouts](/docs/customization/custom-layouts/) for broader layout changes.
- [Template filters](/docs/customization/filters/) for helpers you can use inside partials.

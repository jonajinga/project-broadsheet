---
title: Web3Forms
subtitle: Web3Forms is the form-forwarding service Project Broadsheet uses for every contact, booking, and quote form. A single access key enables every form on the site.
order: 3
updated: 2026-04-17
---

<span class="g-term" data-term="Web3Forms">Web3Forms</span> takes a form submission, validates it, and emails the contents to your address. It has no backend you need to host, no database, and no dashboard to learn. One access key configures every form Project Broadsheet ships with.

## Sign up

Go to <https://web3forms.com> and enter your email. Web3Forms replies with an access key (a UUID). The free plan handles 250 submissions per month; paid tiers start around $6/month for 1,000 submissions.

## Configure Project Broadsheet

Open `src/_data/meta.js` and set `web3formsKey`:

```js
web3formsKey: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

Every form on the site (contact, book-a-call, quote requests, bug reports, care inquiries, hosting inquiries, docs feedback, support escalation, training requests, feature requests) automatically injects the access key as a hidden input. Submissions land in your inbox.

## How it works under the hood

Every form POSTs to `https://api.web3forms.com/submit` with:

- `access_key` (hidden input, from `meta.web3formsKey`)
- `subject` (hidden input, per-form)
- `from_name` (hidden input, your publication title)
- `redirect` (hidden input, the `/thank-you/` page on your site)
- `botcheck` (hidden honeypot input that bots fill in and humans don't)
- The actual form fields the reader completes.

On successful submission, Web3Forms sends you an email and redirects the reader to `/thank-you/`.

## Spam protection

- **Honeypot.** Every form has an invisible `botcheck` checkbox. Real users never toggle it; bots do, and Web3Forms silently drops those submissions.
- **Native browser validation.** Required fields, email format, etc. are enforced client-side.
- **hCaptcha (optional).** Web3Forms supports hCaptcha integration for higher-volume sites. See their docs.

## Customize a form

Every form is a standalone template in `src/forms/`. To add a field:

```html
<div class="form__row">
  <label class="form__label" for="budget">Budget</label>
  <input class="form__input" id="budget" name="budget" type="text">
</div>
```

Any field named anything besides the reserved names (`access_key`, `subject`, `from_name`, `redirect`, `botcheck`) is forwarded to your email.

## Test a form

During local development you can set the `web3formsKey` to your real key (submissions go to you) or to an empty string (the form silently fails, nothing emails). In either case, the form's layout and validation still work.

## What to do next

- [Buttondown newsletter](/docs/integrations/buttondown/) for a different kind of contact point.
- [Customize a form](/docs/customization/custom-layouts/) if the defaults don't cover your needs.
- [Cusdis comments](/docs/integrations/cusdis/) to add reply threads under articles.

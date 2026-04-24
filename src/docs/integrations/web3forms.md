---
title: Web3Forms
subtitle: Web3Forms is the form-forwarding service Project Broadsheet uses for every contact, booking, and quote form. A single access key enables every form on the site. Includes a pattern for honest privacy copy and a safer-channel alternative for tip lines.
order: 3
updated: 2026-04-24
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

## Honest privacy copy

The temptation on a form-footer privacy line is to write something reassuring:

> Sent directly to our editorial inbox. We do not store, share, or sell your information.

**That line is a lie in at least two places.** Web3Forms receives and retains every submission (they're visible in their dashboard). Your inbox stores every email indefinitely. What's actually true is a narrower claim — we don't *sell* it, we don't forward it to anyone we shouldn't, but it is stored.

The honest replacement Project Broadsheet uses:

> Delivered to our editorial inbox via Web3Forms. We never sell or share submissions. See our privacy policy for what Web3Forms does with form data and how long we retain messages.

Two changes: naming the third-party (so readers know there's a pipe, not a direct connection), and linking to a privacy policy section that documents what Web3Forms actually does with IP addresses, user agents, and submission retention. The `/privacy/` page's `#contact-forms` anchor covers this.

Apply this copy to: contact form, licence-inquiry form, correction-report form, feedback form, and any other surface where a reader expects their submission to go only to you.

## Tip lines: don't claim anonymity

A tip-line form is a different surface from a contact form — sources submit because they trust anonymity. **Web3Forms logs IP addresses for spam prevention**. If your tip-line copy says "we do not log IP addresses" or "submissions are anonymous", you are setting up sources to be identified.

The pattern Project Broadsheet recommends for the tip-line page:

1. **Prominent warning callout above the form** — a vermillion-accented box that names Web3Forms, describes what it sees (IP, user agent, submission timing), and tells high-risk sources to stop.

2. **"For sensitive tips" section with safer out-of-band channels** — listed before the form, so readers see them first:
    - **Tor Browser + anonymous email** (ProtonMail or Tuta, registered over Tor, used only over Tor) forwarding to your general inbox.
    - **Signal on a burner** (prepaid SIM or WiFi-only registration, separate from the source's legal identity).
    - **Physical mail** (printed, no return address, not their own mailbox) to an address listed on the masthead.

3. **Reposition the form as a low-risk channel** — explicit copy that says "fine for public-record tips, corrections, story leads. Not a whistleblower pipeline."

4. **Truthful form-footer privacy note** — `"Submitted through Web3Forms (which logs IPs for spam prevention) to our editorial inbox. We never sell or share tips. Your identity will never be published without your explicit written consent."` Anchor-link back to the safer-channels section. **Keep** the editorial commitment you can actually honor ("won't publish your identity") — **drop** the technical claims you can't enforce.

This pattern trades a short-term marketing line ("anonymous tips welcome") for long-term source trust. A single burned source — arrested, doxxed, fired — because they trusted your form is worse than any number of lower-volume tips via Signal.

If your publication needs a true whistleblower pipeline and genuinely anonymous submissions, consider [SecureDrop](https://securedrop.org) or [Hush Line](https://hushline.app). Both are outside Project Broadsheet's scope (they need server-side infrastructure or a Tor onion address); the safer-channel pattern above is the zero-infrastructure fallback.

## What to do next

- [Buttondown newsletter](/docs/integrations/buttondown/) for a different kind of contact point.
- [Customize a form](/docs/customization/custom-layouts/) if the defaults don't cover your needs.
- [Cusdis comments](/docs/integrations/cusdis/) to add reply threads under articles.

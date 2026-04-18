---
title: Events calendar
subtitle: Publish upcoming events, readings, interviews, and meetups on a dedicated calendar page. Recurrence and timezone-aware dates are handled automatically.
order: 4
updated: 2026-04-17
---

Events are time-based entries for readings, interviews, livestreams, and anything with a scheduled start. Each event is a Markdown file with a start time, optional end time, location, and optional recurrence rule.

## Create an event

Events live at `src/content/events/{slug}.md`:

```yaml
---
layout: layouts/event.njk
title: "Book reading: The Example Book"
starts_at: "2026-05-15T19:00:00-06:00"
ends_at: "2026-05-15T21:00:00-06:00"
location: "Pikes Peak Library, Colorado Springs"
virtual: false
rsvp_url: "https://example.com/rsvp"
---

Description of the event in Markdown.
```

Dates use ISO 8601 with timezone offset. The rendered calendar shows times in the reader's local timezone.

## Recurrence

Weekly, monthly, or custom-recurring events:

```yaml
recurrence: "weekly"
recurrence_days: ["monday", "wednesday"]
recurrence_end: "2026-12-31"
```

Supported values for `recurrence`:
- `daily`
- `weekly`
- `monthly`
- `custom` (with `recurrence_days`)

## Calendar index

`/events/` shows upcoming events in chronological order with a toggle for "past events." Each event card links to the full details.

## Individual event pages

Each event gets a page at `/events/{slug}/` with:

- Start and end times in the reader's local timezone.
- Location (or "Virtual" with join-link details).
- Description body.
- "Add to calendar" buttons (iCalendar download, Google Calendar, Outlook).
- RSVP link if provided.

## iCal feed

Every event is also exposed through `/events/feed.ics`, a standards-compliant iCalendar feed readers can subscribe to in their own calendar app.

## What to do next

- [Media](/docs/specialty-content/media/) for photos, videos, and music.
- [Editions](/docs/specialty-content/editions/) to group articles into numbered issues.
- [Integrations: Buttondown](/docs/integrations/buttondown/) to email subscribers about upcoming events.

---
title: Primary source documents
subtitle: A dedicated content type for FOIA records, financial filings, court documents, and other primary sources. Documents live in their own collection and index, separate from articles.
order: 13
updated: 2026-04-18
---

Primary source documents are an investigative journalism content type. They are the raw materials that reporting is built on: FOIA responses, financial disclosure filings, court dockets, government records, transcripts. Project Broadsheet gives them their own collection, their own layout, and their own index page at `/documents/` so readers can find and cite them independently of the articles that reference them.

## Create a document

Documents live at `src/content/documents/`:

```
src/content/documents/city-housing-fund-audit-2025.md
```

## Front matter

```yaml
---
title: City Housing Fund Audit — FY 2025
document_type: financial
source: City of Springfield Office of the Inspector General
date: 2025-11-14
reference: OIG-FY25-0042
obtained_via: FOIA request filed 2025-09-01
related_articles:
  - /news/housing-fund-audit-findings/
  - /analysis/where-the-money-went/
---

Full text of the document here, in Markdown. For long documents with scanned content, summarize the key findings and link to the original PDF.
```

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Descriptive title for the document |
| `document_type` | Yes | One of `financial`, `legal`, `foia`, `transcript`, `government`, `correspondence`, `other` |
| `source` | Yes | The issuing body or organization |
| `date` | Yes | Date of the document (not date of publication on your site) |
| `reference` | No | Case number, docket number, FOIA tracking number, or similar |
| `obtained_via` | No | How the document was obtained — FOIA request, court filing, leak, public record, etc. |
| `related_articles` | No | URL paths of articles that reference this document |

## The documents index

`/documents/` lists all documents by type, with the document type, source, and date visible in the card. Readers can filter by `document_type`.

Documents do not appear in section feeds, RSS, or the main sitemap. They have their own `/documents/feed.xml`.

## Linking from articles to documents

In article body text, link to the document the same way you link to any page:

```markdown
According to the [FY 2025 audit](/documents/city-housing-fund-audit-2025/), the fund...
```

If the document has `related_articles` set, a "Referenced in" section appears at the bottom of the document page linking back to those articles.

## Hosting full PDFs

For scanned or image-based documents, put the PDF in `src/assets/documents/` and link to it from the document's Markdown body:

```markdown
[Download the full document (PDF)](/assets/documents/city-housing-fund-audit-fy25.pdf)
```

The Markdown page acts as a structured index entry with searchable metadata. The PDF is the complete record. This approach keeps the document discoverable by Pagefind without depending on PDF text extraction.

## What to do next

- [Writing articles](/docs/content/write-an-article/) for how to reference documents within article prose.
- [Corrections](/docs/content/corrections/) for updating inaccuracies after publication.
- [SEO and structured data](/docs/seo/structured-data/) for how documents appear in search results.

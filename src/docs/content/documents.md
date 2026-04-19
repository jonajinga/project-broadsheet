---
title: Primary source documents
subtitle: A dedicated content type for FOIA records, financial filings, court documents, and other primary sources. Documents live in their own collection and index, separate from articles.
order: 13
updated: 2026-04-18
---

Primary source documents are an investigative journalism content type. They are the raw materials that reporting is built on: FOIA responses, financial disclosure filings, court dockets, government records, transcripts. Project Broadsheet gives them their own collection, their own layout, and their own index page at `/documents/` so readers can find and cite them independently of the articles that reference them.

## Create a document

Documents live at `src/documents/`:

```
src/documents/city-housing-fund-audit-2025.md
```

The directory data file (`src/documents/documents.json`) sets `layout: layouts/document.njk` and `section: Documents` automatically — no need to add those to individual files.

## Front matter

```yaml
---
title: City Housing Fund Audit — FY 2025
description: Inspector General audit of the Springfield housing fund for fiscal year 2025.
docType: financial
source: City of Springfield Office of the Inspector General
date: 2025-11-14
dateObtained: 2025-10-01
fileUrl: /assets/documents/city-housing-fund-audit-fy25.pdf
fileName: OIG-FY25-0042.pdf
relatedArticles:
  - /news/housing-fund-audit-findings/
  - /analysis/where-the-money-went/
---

Summary or full text of the document in Markdown. For scanned records, summarize key findings here and let `fileUrl` point to the original PDF.
```

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Descriptive title for the document |
| `description` | No | One-sentence summary shown in the document header |
| `docType` | Yes | One of `financial`, `legal`, `foia`, `transcript`, `government`, `correspondence`, `other` |
| `source` | Yes | The issuing body or organization |
| `date` | Yes | Date of publication on your site (used for sorting) |
| `dateObtained` | No | Date the document was received or became public |
| `fileUrl` | No | Path to the original PDF or file in `src/assets/documents/` |
| `fileName` | No | Display name for the download link — defaults to "Original document" |
| `relatedArticles` | No | Array of URL paths of articles that reference this document |

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

Put the PDF in `src/assets/documents/` and set `fileUrl` and `fileName` in front matter. The layout renders a "Download" row in the document header automatically.

```yaml
fileUrl: /assets/documents/city-housing-fund-audit-fy25.pdf
fileName: OIG-FY25-0042.pdf
```

The Markdown body acts as a structured, searchable index entry. The PDF is the complete record. This keeps the document discoverable by Pagefind without depending on PDF text extraction.

## What to do next

- [Writing articles](/docs/content/write-an-article/) for how to reference documents within article prose.
- [Corrections](/docs/content/corrections/) for updating inaccuracies after publication.
- [SEO and structured data](/docs/seo/structured-data/) for how documents appear in search results.

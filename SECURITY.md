# Security Policy

## Supported versions

| Version | Supported |
|---|---|
| 1.x (current) | Yes |

## Reporting a vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Send a report to **hello@projectbroadsheet.com** with:

- A description of the vulnerability
- Steps to reproduce it
- The version of Project Broadsheet affected
- Any suggested fix (optional)

You will receive an acknowledgment within two business days. If the report is confirmed, a patch will be released as quickly as possible and you will be credited in the release notes (unless you prefer anonymity).

## Scope

Project Broadsheet is a static site generator framework. It produces static HTML files and has no server-side runtime, database, or authentication layer. The primary security concerns are:

- Dependency vulnerabilities (npm packages)
- Template injection if user-supplied content is rendered unsafely
- Misconfigured environment variables exposing API keys

Third-party integrations (Buttondown, Umami, Cusdis, Web3Forms) are out of scope — report those vulnerabilities to their respective maintainers.

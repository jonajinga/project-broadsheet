---
title: Why Markdown is the right format for a publication
summary: The arguments I'd make to a colleague who asked why Project Broadsheet uses plain Markdown files instead of a proper CMS. Readability, portability, Git, and the long tail.
date: 2026-03-22
author: Jon Ajinga
tag: Editorial
---

Every time I tell another publisher I run my publication out of Markdown files in a Git repository, I get the same look. It's a look that says: "you're a developer, sure, but I'm not going to do that." I want to make the case that they should.

## The file on your laptop is the article

A Markdown article is a file on disk. You open it in a text editor. You type. You save. That's the entire writing workflow. There's no "drafts in the CMS" concept, no "submit for approval," no "stuck in revision queue." The file exists or it doesn't.

For a small publication, that simplicity is the feature. You don't have to learn a CMS's quirks, you don't have to work around bugs in the rich-text editor, and you don't have to explain to guest writers how to log in.

## Portability is a first-class property

Every other publishing platform requires an export step to get your content out. Sometimes that export is good (Ghost's JSON is fine). Sometimes it's lossy (Substack drops image metadata). In all cases, it's friction.

Markdown has no export. Your content is already in the portable format. Migrating to a different static site generator, a different CMS, or back into a database takes about an hour: copy the files, write a conversion script if needed, done.

That portability is insurance. Whatever platform I'm on today, I can leave tomorrow without losing anything.

## Git gives you version control for free

Every edit I make is a commit. Every commit is diffable. If I rewrite a paragraph and regret it two weeks later, I can find the original with one command. If I want to see when a specific sentence entered the article, `git blame` tells me.

That's a level of editorial history that most CMS systems don't provide. WordPress has revisions, but they vanish when you delete the post. Ghost has none. Git keeps everything forever, searchable and restorable.

For collaboration, Git is even better. Pull requests are a natural format for editorial review. The editor and writer see the same diff. Comments attach to specific lines. Merging the PR publishes the article.

## The long tail

Markdown is 20 years old. It's supported by every text editor, every static site generator, every note-taking app, every code review system. It will outlive the platform I built on top of it, and probably the platform I'll rebuild on top of that later.

If I write a thousand articles over the next decade, I want them in a format that will still be readable in 2050. Not in a platform's proprietary JSON. Not in a database that requires a specific version of MySQL to query. Just text, in a format I can open in vim if that's all I have.

## The limits

Markdown is not good for everything. It's bad for complex layout (multi-column, floating callouts, fancy tables). It's bad for inline multimedia. It's bad for rich interactive widgets. If your publication's style depends on those things, a CMS-backed system is probably a better fit.

For most independent publications, though, the content is the point. Typography, a readable column width, a few images, maybe a pull quote. Markdown handles all of that with no ceremony.

## In practice

On Project Broadsheet, every article starts with some YAML front matter and a body. The front matter tells the site which section the article belongs to, who wrote it, and when it was published. The body is the article. When you save, the file exists. When you push to your repo, the site rebuilds. When readers arrive, they get a static HTML page loaded from a CDN.

It's a boring pipeline, and that's the point.

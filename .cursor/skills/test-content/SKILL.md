---
name: test-content
description: Adds or updates living examples on the notes test page for notes MDX components, shortcodes, frontmatter, and note-page chrome. Use when adding or changing those notes features, and when the user asks to check, audit, or update the test page or test-content.mdx.
paths:
  - src/components/mdx/**
  - src/content/**
  - src/pages/notes/**
---

# Test content (living examples)

The notes test page (`src/content/notes/test-content.mdx`) is the living example of what a note can do. A notes feature is not done until an example is on that page.

## What counts as a feature

Must add or update an example:

- New or changed MDX component passed into notes in `src/pages/notes/[slug].astro` (BlockQuote, EmbedFrame, Emoji, Stub, Message, Link, …)
- New or changed notes frontmatter in `src/content/config.ts`
- New markdown/MDX rendering authors rely on in notes
- Note-page chrome content authors use (hero image, afterthoughts aside, related notes)

Does not count: refactors, tests, CI, skills, or pages that do not change what a note can do.

## On feature work

1. Implement the feature.
2. Add the smallest real example on `src/content/notes/test-content.mdx` under the existing heading structure (`### Expected shortcodes` / `### Frontmatter`).
3. Match how current examples are written (component usage + a one-line expected behavior).
4. Do not declare the feature done until the example is on that page.

## On `/test-content` or an explicit audit

1. Diff MDX components in `[slug].astro` against headings on the test page.
2. Diff schema keys in `config.ts` against the frontmatter table.
3. Report gaps; add missing examples unless the user only asked for a report.

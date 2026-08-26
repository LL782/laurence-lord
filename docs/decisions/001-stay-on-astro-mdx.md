# ADR-001: Stay on Astro and MDX in git

## Status

Accepted

## Date

2026-08-26

## Context

The site was a Gatsby app that could not be built locally and was failing remotely (#18, #19). Research at the time considered headless WordPress, Next.js/SvelteKit, Notion/Airtable as a CMS, and a monorepo shared with other LL782 projects.

The replatform that shipped is Astro 5 + MDX in this repo, deployed to Netlify from `main`. Phone editing works via GitHub's file editor. Content is the product; convenience is the constraint.

## Decision

Keep Astro + MDX-in-git as the stack. Do not introduce a CMS, auth layer, or monorepo unless a later ADR supersedes this one.

## Alternatives considered

### Headless WordPress + Next.js/SvelteKit

- Pros: WordPress mobile app is convenient; familiar CMS.
- Cons: Hosting and auth complexity, build webhooks, lock-in, and a second system to keep alive for a personal notes site.
- Rejected for now: the Astro repo already publishes and is editable from a phone.

### Notion / Airtable as CMS

- Pros: Laurence already organises material there.
- Cons: Extra sync, API tokens, and a weaker "this is the website" story.
- Rejected for now: git remains the source of truth.

### Stay on Gatsby

- Rejected: local and remote builds were the problem we already solved.

## Consequences

- `authoring` work should improve the GitHub/MDX path (templates, buttons, defaults), not replace it.
- Agents must not "helpfully" add WordPress or a database.
- If phone editing on GitHub becomes the blocker, write a new ADR — do not silently switch stack.

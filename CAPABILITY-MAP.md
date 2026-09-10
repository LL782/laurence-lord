# Capability Map: laurencelord.co.uk

This site is already live. The map is how we develop it properly from here: one module at a time, in dependency order.

| Module id | Responsibility | Depends on |
|---|---|---|
| foundations | Spec, Definition of Done, CI quality gates, issue hygiene, reliable local build | — |
| design-snags | Immediate improvements to the **current** layout (DC5B type and colour). Snag list harvested from redesign drafts; those PRs are not merged | foundations |
| authoring | Phone-first create and edit notes on GitHub MDX (issue #2) | design-snags |
| labs | Experiments as first-class pages, with a consistent way to add them | foundations |
| presence | Design system / later visual pass (Gus brief #20). Not the snag list | authoring |
| products | Surface DC5B / LL782 work without turning this into a shop | presence |

**Build order:** `foundations` → `design-snags` → `authoring` → `presence` → `products`

`labs` stays optional and can slot in when Laurence wants an experiment; it must not interrupt the sequence above.

## Why this order

- **foundations first.** Shared spec, one active milestone, PR build gate.
- **design-snags next.** The three redesign drafts ([#24](https://github.com/LL782/laurence-lord/pull/24), [#25](https://github.com/LL782/laurence-lord/pull/25), [#26](https://github.com/LL782/laurence-lord/pull/26)) are a critique of what is live. Fix the current site; do not pick a new skin. File the snag list as a GitHub issue, then close those PRs.
- **authoring after snags.** GitHub MDX is fine for now. Issue #2 (new note from a phone) still needs doing. Convenience pain that used to live on #19 belongs here, not in a CMS switch.
- **presence last among product work.** A nicer design system, hopefully with Gus (#20), after the site is snag-fixed and writable.
- **products** after the public surface is intentional.

## Active milestone

**Current:** `foundations` — see `SPEC-foundations.md` and `tasks/todo.md`.

Do not start another module until this one is done. New ideas become issues and wait.

## Module specs

| Module | Spec |
|---|---|
| Site (all modules) | [`SPEC.md`](./SPEC.md) |
| foundations | [`SPEC-foundations.md`](./SPEC-foundations.md) |
| design-snags | [`SPEC-design-snags.md`](./SPEC-design-snags.md) (draft until active) |
| authoring, labs, presence, products | Write when that module becomes the active milestone |

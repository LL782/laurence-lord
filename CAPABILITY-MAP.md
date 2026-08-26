# Capability Map: laurencelord.co.uk

This site is already live. The map is how we develop it properly from here: one module at a time, in dependency order.

| Module id | Responsibility | Depends on |
|---|---|---|
| foundations | Spec, Definition of Done, CI quality gates, issue hygiene, reliable local build | — |
| authoring | Phone-first create and edit notes without a CMS | foundations |
| labs | Experiments as first-class pages, with a consistent way to add them | foundations |
| presence | Homepage, notes, and labs as a coherent public surface (layout and design) | foundations |
| products | Surface DC5B / LL782 work without turning this into a shop | presence |

**Build order:** `foundations` → `authoring` → `labs` (optional, in parallel with later presence work) → `presence` → `products`

## Why this order

- **foundations first.** The Gatsby replatform is done. What is missing is a shared spec, a quality gate on every change, and a single active milestone. Without that, agents and humans keep thrashing across old issues and redesign drafts.
- **authoring next.** The site exists so Laurence can write. Issue #2 (new note from a phone) is the longest-standing real user need.
- **presence after authoring.** Three redesign drafts already exist ([#24](https://github.com/LL782/laurence-lord/pull/24), [#25](https://github.com/LL782/laurence-lord/pull/25), [#26](https://github.com/LL782/laurence-lord/pull/26)) and issue #20 (brief for Gus) is still open. Design is a decision, not a coding gap. Do not start it until a direction is chosen.
- **labs stay optional.** Old experiment issues are parking, not the current milestone.
- **products last.** Issue #14 depends on a coherent public surface.

## Active milestone

**Current:** `foundations` — see `SPEC-foundations.md` and `tasks/todo.md`.

Do not start another module until this one is done. New ideas become issues and wait.

## Module specs

| Module | Spec |
|---|---|
| Site (all modules) | [`SPEC.md`](./SPEC.md) |
| foundations | [`SPEC-foundations.md`](./SPEC-foundations.md) |
| authoring, labs, presence, products | Write when that module becomes the active milestone |

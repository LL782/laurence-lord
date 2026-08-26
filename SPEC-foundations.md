# Spec: foundations

Make this repo safe to develop in small increments: a living spec, one active milestone, a merge-quality gate, and a tidy backlog.

Depends on: nothing.
Unlocks: `authoring`, `labs`, `presence`.

## Objective

After `foundations`, a human or agent can change the site without guessing what the product is, without a broken local build, and without opening a second stream of work.

This module does **not** change homepage layout, notes UI, or labs content.

## Scope

### In

1. Product spec, capability map, and per-milestone plan in git.
2. Project Definition of Done (static-site sized).
3. Agent/human conventions: one milestone, spec first, build as the gate.
4. CI on pull requests: `npm run build` (includes `astro check`).
5. Backlog hygiene notes: which open issues are done, parked, or next.

### Out

- New note button / GitHub template (that is `authoring`).
- Redesign, design-system extraction, Gus brief (`presence`).
- New labs (`labs`).
- DC5B product listing (`products`).
- Introducing WordPress, auth, or a test framework "because proper apps have them".

## Success Criteria

- [ ] `SPEC.md`, `CAPABILITY-MAP.md`, and this file exist on `main`.
- [ ] `docs/definition-of-done.md` is the standing bar for every change.
- [ ] Future agents are pointed at the spec (Cursor project rule and `AGENTS.md`).
- [ ] Opening a PR runs `npm run build` on GitHub, independent of Netlify.
- [ ] README tells you how to run, check, and where the spec lives.
- [ ] Open issues #18 and #19 are listed as close-ready (replatform done).
- [ ] One active milestone is named; everything else is parked.

## Commands

Same as `SPEC.md`. Merge gate for this module: `npm run build`.

## Boundaries

Inherit `SPEC.md`. Extra **never** for this module: do not merge a redesign "while we are here".

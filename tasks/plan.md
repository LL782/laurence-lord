# Implementation Plan: foundations (then a sketched path)

## Overview

Put a working personal site onto a spec-driven loop. This plan implements **`foundations` only**. Later modules are listed so the path is visible; they are not scheduled and must not be started until the map says they are active.

## Architecture Decisions

- **Spec in git, not only in GitHub issues.** Issues stay for human tracking and The Overview. Agents need `SPEC.md` + `tasks/todo.md` that survive a new chat.
- **CI on GitHub, deploy on Netlify.** Netlify already builds `main`. PRs also need `npm run build` so a broken branch fails before merge, not after.
- **No new framework in this milestone.** The stack is Astro. Foundations is process + gates, not a rewrite.
- **Redesign PRs stay draft.** They are inputs to `presence`, not to `foundations`.
- **Task list target:** `tasks/todo.md` for the active milestone. Laurence's GitHub issues remain the long-term backlog; do not duplicate every task as an issue unless he asks.

## Task List

### Phase 1: Planning artifacts (this PR)

- [x] Task 1: Capability map + site spec + `foundations` spec
- [x] Task 2: Definition of Done, ADR-001, agent conventions
- [x] Task 3: Point README at the spec and commands

### Checkpoint: Spec review

- [ ] Laurence confirms assumptions in `SPEC.md` (or corrects them)
- [ ] Active milestone remains `foundations`
- [ ] No implementation of authoring/design until that confirmation

### Phase 2: Quality gate

- [ ] Task 4: GitHub Actions workflow that runs `npm run build` on pull requests
- [ ] Task 5: Confirm `npm i && npm run build` on a clean Node 20 install (document Node in README if missing)

### Checkpoint: Merge gate exists

- [ ] A PR that breaks types or the Astro build fails CI
- [ ] Netlify production deploy is unchanged

### Phase 3: Backlog hygiene

- [x] Task 6: Close-ready list for issues #18 and #19 (replatform done)
- [x] Task 7: Park list for labs (#4, #5, #8, #10, #11, #17) and design (#20, PRs #24–#26)
- [ ] Task 7b: Laurence closes or parks issues to match that list
- [ ] Task 8: Name the next milestone (`authoring`) in the capability map when foundations is done — do not specify it in full until then

### Checkpoint: foundations complete

- [ ] All `SPEC-foundations.md` success criteria met
- [ ] Ready to write `SPEC-authoring.md` (issue #2) as the next `/spec`

## Later (not this milestone)

| Next | What | Trigger |
|---|---|---|
| authoring | New-note path from a phone; MDX template | foundations done |
| labs | Consistent lab pages; optional old issues | when Laurence wants an experiment |
| presence | Layout/design; Gus brief; choose among draft PRs | after a written design direction |
| products | DC5B / LL782 on this site | after presence |

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Treat "develop properly" as a redesign | High | Map parks design until `presence`; this plan does not touch layout |
| Re-open CMS / WordPress research | Med | ADR-001; ask-first boundary in the spec |
| Two Cursor agents on two milestones | High | Active-milestone rule; project Cursor rule |
| CI that is slower than Netlify and ignored | Low | One command: `npm run build`. No extra suites yet |
| Planning docs nobody reads | Med | Always-on Cursor rule + `AGENTS.md` |

## Open Questions

Same as `SPEC.md`. Phase 2 must not start until the spec-review checkpoint is an explicit yes.

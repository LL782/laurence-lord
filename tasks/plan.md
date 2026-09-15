# Implementation Plan: foundations (then a sketched path)

## Overview

Put a working personal site onto a spec-driven loop. This plan implements **`foundations` only**. Later modules are listed so the path is visible; they are not scheduled until the map says they are active.

## Architecture Decisions

- **Spec in git, not only in GitHub issues.** Issues stay for human tracking and The Overview. Agents need `SPEC.md` + `tasks/todo.md` that survive a new chat.
- **CI on GitHub, deploy on Netlify.** Netlify already builds `main`. PRs also need `npm run build` so a broken branch fails before merge, not after.
- **No new framework in this milestone.** The stack is Astro. Foundations is process + gates, not a rewrite.
- **Redesign PRs are source material, not merge candidates.** Harvest a snag list for the current layout (`tasks/design-snag-list.md`), file it as a GitHub issue, then close #24–#26.
- **Task list target:** `tasks/todo.md` for the active milestone. Laurence's GitHub issues remain the long-term backlog.

## Task List

### Phase 1: Planning artifacts (this PR)

- [x] Task 1: Capability map + site spec + `foundations` spec
- [x] Task 2: Definition of Done, ADR-001, agent conventions
- [x] Task 3: Point README at the spec and commands
- [x] Task 3b: Corrected order (`foundations` → `design-snags` → `authoring` → `presence`) and draft snag list

### Checkpoint: Spec review

- [x] Laurence corrected the assumptions (2026-08-26): snags before authoring; MDX for now + #2 still needed; #18/#19 closed; drafts stay until the snag issue exists
- [ ] Active milestone remains `foundations` until CI exists
- [ ] Snag issue not yet filed (agent cannot open GitHub issues) — Laurence files from `tasks/design-snag-list.md`

### Phase 2: Quality gate

- [ ] Task 4: GitHub Actions workflow that runs `npm run build` on pull requests
- [ ] Task 5: Confirm `npm i && npm run build` on a clean Node 20 install (document Node in README if missing)

### Checkpoint: Merge gate exists

- [ ] A PR that breaks types or the Astro build fails CI
- [ ] Netlify production deploy is unchanged

### Phase 3: Backlog hygiene

- [x] Task 6–7: Hygiene doc; #18 and #19 closed by Laurence
- [ ] Task 7c: File snag list as a GitHub issue, then close PRs #24–#26
- [ ] Task 8: When foundations is done, activate `design-snags` (do not start authoring)

### Checkpoint: foundations complete

- [ ] All `SPEC-foundations.md` success criteria met
- [ ] Ready to implement `SPEC-design-snags.md` from the GitHub snag issue

## Later (not this milestone)

| Next | What | Trigger |
|---|---|---|
| design-snags | Current-layout punch list | foundations done + snag issue filed |
| authoring | New-note path from a phone; MDX template (#2) | design-snags done |
| labs | Consistent lab pages; optional old issues | when Laurence wants an experiment |
| presence | Design system; Gus brief #20 | after authoring |
| products | DC5B / LL782 on this site | after presence |

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Treat snags as permission to merge a redesign | High | Snag spec lists explicit Not this; close drafts after the issue exists |
| Skip snags and jump to #2 | Med | Capability map order is now snags then authoring |
| Re-open CMS because #19 mentioned WordPress | Med | ADR-001; #2 is the remaining convenience work |
| Two Cursor agents on two milestones | High | Active-milestone rule; project Cursor rule |
| CI that is slower than Netlify and ignored | Low | One command: `npm run build` |

## Open Questions

1. Laurence files the snag issue (this agent cannot create GitHub issues).
2. Lab-issue park list still needs a human pass.

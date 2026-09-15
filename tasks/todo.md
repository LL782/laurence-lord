# Todo: foundations

Active milestone: **foundations**. Next after that is **design-snags**, then **authoring**. Do not pull those tasks in here.

## Phase 1 — Planning artifacts

- [x] Task 1: Write capability map, site spec, and `SPEC-foundations.md`
- [x] Task 2: Definition of Done, ADR-001 (stay on Astro/MDX), agent conventions
- [x] Task 3: README points at spec, commands, and how deploys work
- [x] Task 3b: Correct order + draft snag list (`tasks/design-snag-list.md`, `SPEC-design-snags.md`)

## Checkpoint: Spec review

- [x] Laurence corrected SPEC assumptions (snags before authoring; MDX for now; #18/#19 closed)
- [ ] Still only `foundations` is active until Phase 2 lands
- [ ] Snag GitHub issue not filed yet (see Task 7c)

## Phase 2 — Quality gate

- [ ] Task 4: Add a GitHub Actions workflow that runs `npm run build` on pull requests
  - Acceptance: Opening or updating a PR runs install + `npm run build`; the workflow uses Node 20
  - Verify: Workflow file exists; a deliberate `astro check` failure would fail the job
  - Files: `.github/workflows/` (new CI file; do not break `action.yml` Overview automation)
  - Dependencies: Spec review checkpoint
  - Scope: S

- [ ] Task 5: Document Node 20 and the merge gate in README if Task 4 changes how we run CI
  - Acceptance: README and spec Commands section still match reality
  - Verify: `.nvmrc` is `20`; README says so
  - Files: `README.md`, `SPEC.md` only if commands changed
  - Dependencies: Task 4
  - Scope: XS

## Checkpoint: Merge gate exists

- [ ] `npm run build` is required on PRs
- [ ] Netlify deploy from `main` is unchanged
- [ ] Application still builds without errors locally

## Phase 3 — Backlog hygiene

- [x] Task 6: Close-ready notes for #18 and #19
- [x] Task 7: Park list for labs and later design
- [x] Task 7b: Laurence closed #18 and #19
- [ ] Task 7c: File `tasks/design-snag-list.md` as a GitHub issue, then close PRs #24–#26
  - Acceptance: One issue owns the current-layout snags; the three drafts are closed (or #26 reopened later as a lab only)
  - Verify: Human action on github.com (this agent cannot open issues)
  - Files: none after the issue exists
  - Dependencies: Snag list draft in this PR
  - Scope: XS

- [ ] Task 8: When Phases 2–3 are done, set the capability map active milestone to `design-snags` and stop
  - Acceptance: Next `/spec` / `/build` is the snag issue, not #2
  - Verify: `tasks/todo.md` is not filled with authoring tasks in this milestone
  - Files: `CAPABILITY-MAP.md`
  - Dependencies: Tasks 4–7c
  - Scope: XS

## Checkpoint: foundations complete

- [ ] `SPEC-foundations.md` success criteria are met
- [ ] Definition of Done applied to this milestone
- [ ] Ready to work the snag issue (`design-snags`), then `/spec` on `authoring` (#2)

# Todo: foundations

Active milestone: **foundations**. Do not pull in authoring, labs, or redesign tasks here.

## Phase 1 — Planning artifacts

- [x] Task 1: Write capability map, site spec, and `SPEC-foundations.md`
  - Acceptance: Six core spec areas covered; module ids stable; assumptions listed
  - Verify: Files exist at repo root; a human can reject the assumptions
  - Files: `CAPABILITY-MAP.md`, `SPEC.md`, `SPEC-foundations.md`
  - Dependencies: None
  - Scope: S

- [x] Task 2: Definition of Done, ADR-001 (stay on Astro/MDX), agent conventions
  - Acceptance: Standing merge bar exists; stack decision is recorded; agents are pointed at the spec
  - Verify: `AGENTS.md` and `.cursor/rules/project.mdc` reference the spec
  - Files: `docs/definition-of-done.md`, `docs/decisions/001-stay-on-astro-mdx.md`, `AGENTS.md`, `.cursor/rules/project.mdc`
  - Dependencies: Task 1
  - Scope: S

- [x] Task 3: README points at spec, commands, and how deploys work
  - Acceptance: A new machine can install, run, and find the plan from the README
  - Verify: README lists `npm run dev` / `check` / `build` and links `SPEC.md`
  - Files: `README.md`
  - Dependencies: Task 1
  - Scope: XS

## Checkpoint: Spec review

- [ ] Laurence has confirmed or corrected `SPEC.md` assumptions
- [ ] Still only `foundations` is active
- [ ] Review with human before Phase 2

## Phase 2 — Quality gate

- [ ] Task 4: Add a GitHub Actions workflow that runs `npm run build` on pull requests
  - Acceptance: Opening or updating a PR runs install + `npm run build`; the workflow uses Node 20
  - Verify: Workflow file exists; a deliberate `astro check` failure would fail the job (do not merge a red build)
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

- [x] Task 6: Write close-ready notes for issues #18 and #19 (Gatsby replatform shipped)
  - Acceptance: `tasks/backlog-hygiene.md` tells Laurence these two can be closed and why
  - Verify: Doc exists; issues are not closed by the agent
  - Files: `tasks/backlog-hygiene.md`
  - Dependencies: Task 1
  - Scope: XS

- [x] Task 7: Park list for labs and design
  - Acceptance: Same doc lists #4, #5, #8, #10, #11, #17, #20, #14 and PRs #24–#26 as parked, with the module they belong to
  - Verify: Capability map still names `foundations` as active
  - Files: `tasks/backlog-hygiene.md`
  - Dependencies: Task 6
  - Scope: XS

- [ ] Task 7b: Laurence closes #18 and #19 (and parks or leaves the rest)
  - Acceptance: GitHub matches the hygiene doc, or the doc is corrected
  - Verify: Human action on github.com
  - Files: none
  - Dependencies: Spec review checkpoint
  - Scope: XS

- [ ] Task 8: When Phases 2–3 are done, flip the capability map to `authoring` as next and stop
  - Acceptance: `CAPABILITY-MAP.md` says foundations is done only after CI + hygiene exist; next spec to write is `SPEC-authoring.md`
  - Verify: `tasks/todo.md` is not filled with authoring implementation tasks in this milestone
  - Files: `CAPABILITY-MAP.md`
  - Dependencies: Tasks 4–7
  - Scope: XS

## Checkpoint: foundations complete

- [ ] `SPEC-foundations.md` success criteria are met
- [ ] Definition of Done applied to this milestone
- [ ] Ready for `/spec` on `authoring` (GitHub issue #2)

# Definition of Done

Standing bar for every change on this site. Acceptance criteria still live on the task; this is the floor.

Tailored for a static personal Astro site. If a line does not apply (no database, no auth), skip it rather than inventing the missing system.

## Correctness

- [ ] Task acceptance criteria are met
- [ ] `npm run build` succeeds (`astro check` + production build)
- [ ] Behaviour was checked at runtime for anything user-visible (local preview or Netlify deploy preview). A screenshot is not enough
- [ ] `private` notes still do not appear on `/notes/`
- [ ] Internal page links keep trailing slashes

## Quality

- [ ] Change is scoped to the task — no unrelated cleanup
- [ ] No dead code, debug leftovers, or commented-out blocks
- [ ] Matches existing Astro / CSS-variable style

## Documentation

- [ ] User-facing behaviour that changed is reflected in the spec or README if it is standing, not a one-off
- [ ] Architectural choices worth keeping are an ADR in `docs/decisions/`

## Ship

- [ ] `main` stays deployable
- [ ] Phone edit path still works if the change touches notes or layouts
- [ ] Laurence (or the PR reviewer) has looked at it before merge

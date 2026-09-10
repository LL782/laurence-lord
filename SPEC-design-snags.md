# Spec: design-snags

Immediate improvements to the **current** layout. Keep DC5B type and colour. Do not merge the redesign drafts.

Depends on: `foundations`.
Unlocks: `authoring`.

**Not yet active.** Foundations is still the current milestone. This spec exists so the snag list has a home once foundations is done.

## Objective

Walk the live site, fix the obvious design and layout snags, leave `main` looking like the same site — just tighter.

Source of truth for the punch list: [`tasks/design-snag-list.md`](./tasks/design-snag-list.md) (to be filed as a GitHub issue, then PRs #24–#26 closed).

## Scope

### In

- Navigation between home, notes, and labs without a full redesign
- Scanability of the notes index (dates, structure, optional small thumbs / lab cue)
- Separating site sections from off-site links on home
- CSS leftovers (`overflow-x: scroll`, conflicting max-widths, accents only on hover)
- Quieter footer / Edit-on-GitHub chrome without removing those features
- Less brutal hero crops

### Out

- Merging PRs #24, #25, #26
- Sidebar, numbered 01/02 system, catalog card grid, Fast Moving strip
- Ink & Neon as the site skin (it may return later as a **lab**)
- Design-system extraction, Gus brief (#20) — that is `presence`
- New-note button (#2) — that is `authoring`

## Success Criteria

- [ ] Snag list exists as a GitHub issue; PRs #24–#26 are closed
- [ ] Each snag is a thin slice with its own PR against the current layout
- [ ] Site still uses cream/charcoal + pink/lime tokens from `global.css`
- [ ] Phone edit path still works
- [ ] `npm run build` passes

## Boundaries

Inherit `SPEC.md`. Extra **never**: treat a snag as permission to restyle the whole page.

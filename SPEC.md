# Spec: laurencelord.co.uk

Personal website of Laurence "DC5B" Lord. Notes, lab experiments, and key links. Live at [https://www.laurencelord.co.uk](https://www.laurencelord.co.uk).

This spec is the shared source of truth for humans and agents. It describes the **existing product** and the rules for changing it. Per-module specs (`SPEC-<id>.md`) add acceptance criteria for the current milestone. See [`CAPABILITY-MAP.md`](./CAPABILITY-MAP.md).

## Assumptions

Correct these if they are wrong; otherwise later work will follow them.

1. **"This app" is this site**, not a new product. The job is to develop the live Astro site properly, not to rebuild it.
2. **Stay on Astro + MDX in git for now.** #18 and #19 are closed (replatform shipped). Phone convenience is not finished: issue #2 (new note from a phone) is still open. If GitHub MDX is still painful after #2, write a new ADR — do not silently add a CMS.
3. **Order is `foundations` → `design-snags` → `authoring` → `presence`.** Immediate design work is a snag list on the **current** layout, not merging redesign drafts. A design system (and Gus #20) is later `presence`.
4. **Primary user is Laurence.** Visitors are welcome; they are not the design centre. See [I'm writing for myself](https://www.laurencelord.co.uk/notes/i-am-writing-for-myself/).
5. **GitHub Issues + [The Overview](https://github.com/users/LL782/projects/1) remain the human tracker.** `tasks/todo.md` is the agent working list for the **active milestone only**.
6. **No auth, no reader accounts, no monorepo** in this repo unless a later spec says so.
7. **Quality is proportional.** This is a static personal site. `astro check` + production build + targeted tests beat a full product-engineering stack.

## Objective

Keep a small, convenient website that Laurence can edit from a phone, run locally, and extend in thin slices — without thrashing across parallel redesigns and stale issues.

**User:** Laurence (writer, experimenter, creative developer). Secondary: anyone who follows a link.

**Success looks like:**

- A new note can be started from a phone and shipped via a commit to `main`.
- `npm i && npm run dev` works on a new machine; `npm run build` is the merge gate.
- One milestone is in progress at a time. New ideas wait.
- Notes, labs, and home stay coherent with the existing DC5B type and colour. `design-snags` tightens that layout; `presence` may introduce a design system later.

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Site | [Astro](https://astro.build/) 5 | Static. `trailingSlash: 'always'` |
| Content | MDX in `src/content/notes/` | Astro content collections + Zod schema |
| Islands | React 19 | Used only where the page needs a client island |
| Hosting | Netlify | Deploy on push to `main` (`netlify.toml`) |
| Node | 20 (`.nvmrc`) | |
| Agent workflow | `.cursor/skills/` | Addy Osmani agent-skills; `/spec` → `/plan` → `/build` → `/test` → `/review` → `/ship` |

## Commands

```bash
npm i                 # install
npm run dev           # local site at http://localhost:4321
npm run check         # astro check (types + Astro diagnostics)
npm run build         # check + production build to dist/
npm run preview       # serve the production build
```

There is no `npm test` yet. Add it in `foundations` only if a real test runner is earning its keep (see `SPEC-foundations.md`).

## Project Structure

```
src/pages/            Routes: home, notes, labs, embeds, 404
src/content/notes/    MDX notes + images (content collection)
src/content/config.ts Notes schema (Zod)
src/layouts/          BaseLayout, EmbedLayout
src/components/       Site chrome and MDX components
src/styles/global.css Tokens (pink, lime, cream, charcoal) and layout
src/site-config.ts    Author, titles, URLs
public/               Static assets (favicon, robots, embed scripts)
.cursor/skills/       Agent workflows (do not treat as app code)
tasks/                Active-milestone plan + todo
docs/decisions/       ADRs
```

## Code Style

Match what is already here: small Astro files, typed props, CSS variables, no extra abstraction until a second use appears.

```astro
---
interface Props {
  path: string;
}
const { path } = Astro.props;
---

<section>
  <hr />
  <p>
    Spotted a typo?{" "}
    <a href={`https://github.com/LL782/laurence-lord/edit/main${path}`}>
      Edit on Github
    </a>
  </p>
</section>
```

- Internal page links keep a trailing slash (`src/components/mdx/Link.astro`).
- Notes hide from public indexes with `private: true` in frontmatter; they still build as routes.
- Prefer editing `global.css` tokens over introducing a CSS framework.
- Conventional commits when the change has a type (`feat`, `fix`, `docs`, `chore`). Existing history also uses `content(notes):` / `layout:` — either is fine if the subject is specific.

## Testing Strategy

| Level | When | How |
|---|---|---|
| Type / Astro check | Every change | `npm run check` (already part of `npm run build`) |
| Production build | Every change | `npm run build` |
| Content schema | When frontmatter or collection config changes | Zod schema in `src/content/config.ts` is the check; a failing build is a failing test |
| Runtime / visual | When UI or routing changes | Exercise the changed page in a browser or Netlify preview; screenshot is not enough |
| Automated unit/e2e | Not required until a behaviour is painful to regress | Prefer one focused test over a suite that nobody runs |

Do not add Jest/Playwright/Storybook during `foundations` unless a specific behaviour has no cheaper check.

## Boundaries

**Always:**

- Read this spec and `CAPABILITY-MAP.md` before non-trivial work.
- Work only on the active milestone.
- Leave `main` deployable. Thin vertical slices. Commit when a slice works.
- Run `npm run build` before calling a change done.
- Keep phone editing working (`EditOnGitHubInvite` or an equal path).
- Preserve `private` notes as unpublished-from-indexes.

**Ask first:**

- Merging or resurrecting redesign drafts #24–#26 (they should close once the snag issue exists).
- Adding a CMS, auth, database, or new hosting platform.
- Adding dependencies, test frameworks, or CI beyond `astro check` + build.
- Changing the notes frontmatter schema in a breaking way.
- Monorepo / shared design-system extraction (`presence`, not `design-snags`).
- Closing or reopening GitHub issues and PRs (agents cannot open issues here; list them for Laurence).

**Never:**

- Start a second milestone while one is in progress.
- Commit secrets.
- Publish a `private: true` note on the notes index.
- "Clean up" unrelated files while implementing a task.
- Replace MDX-in-git with WordPress (or similar) as a drive-by.

## Success Criteria

- [x] Capability map is reviewed; module ids are stable (`foundations` → `design-snags` → `authoring` → `presence`).
- [ ] `foundations` is the active milestone until its spec is done.
- [ ] `design-snags` is a punch list on the current layout; redesign PRs close after that list is a GitHub issue.
- [x] Replatform issues #18 and #19 are closed.
- [ ] Issue #2 remains the `authoring` milestone (after snags).

## Open Questions

1. File [`tasks/design-snag-list.md`](./tasks/design-snag-list.md) as a GitHub issue, then close PRs #24–#26?
2. Which lab issues (#4, #5, #8, #10, #11, #17) stay open vs won't-do-now?
3. After snags + #2, is GitHub MDX still good enough, or is a CMS ADR needed?

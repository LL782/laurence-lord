# Design snag list (current layout)

Draft issue body for the **current** site. Harvested from redesign drafts [#24](https://github.com/LL782/laurence-lord/pull/24), [#25](https://github.com/LL782/laurence-lord/pull/25), [#26](https://github.com/LL782/laurence-lord/pull/26) — not a proposal to merge those PRs.

**Milestone:** `design-snags` (after `foundations`, before `authoring`). See [`CAPABILITY-MAP.md`](../CAPABILITY-MAP.md).

Paste into a new GitHub issue, then close PRs #24–#26.

---

## Title

Snag list: current site design (keep DC5B type and colour)

## Body

```markdown
# Why

The three redesign drafts are useful as a critique of **what is live now**, not as three competing new sites.

I want a snag list against the current layout (DC5B pink/lime/cream/charcoal, existing page structure). Fix the obvious stuff. Do not import a sidebar, a card catalog, or a terminal skin.

Later (`presence`): a proper design system, hopefully with Gus (#20).

# What

## Navigation

- [ ] Inner pages only offer a long “Laurence DC5B Lord - Creative Developer” home link. Notes, labs, and home should be reachable without going home first.
- [ ] Home has no site nav of its own; Notes / Labs sit in the same list as GitHub, LinkedIn, Instagram, DC5B.
- [ ] You cannot tell which section you are in (no current-page state).
- [ ] Note pages have “← All notes” **and** NewerOlder repeats “All notes”. One is enough.

_Inspired by #25 SiteNav, without taking the desktop sidebar._

## Home

- [ ] Site sections (Notes, Labs) and off-site links should not be one undifferentiated list.
- [ ] The hero crop (21:9) is blunt; artwork is cropped more than it is shown. Soften or give it a less aggressive ratio — do not replace the homepage with a catalog grid.

_Inspired by #25 splitting Explore vs Links; #24’s header/intro as a reminder that home currently dumps everything._

## Notes index

- [ ] Each row is an `<a>` wrapping an `<h2>` plus a tiny date. Hard to scan; awkward HTML.
- [ ] Long titles dominate; dates are easy to miss (tokens already have mono + `--detail` — use them).
- [ ] Most notes have images; the index ignores them. A small thumb or first-image cue would help without becoming a card catalog.
- [ ] Notes that are really labs (A-Frame, poster, WebGL) are not marked as such.

_Inspired by #25 numbered index and #24 type tags / thumbs — take the scanability, not the full catalog UI._

## Labs index

- [ ] Experiments are a hardcoded table, visually and structurally disconnected from notes.
- [ ] Companion notes (where they exist) are not linked from the labs list.

_Inspired by #24 mixing Note/Lab types; #26 only as “labs can look like labs” — the terminal itself is not in scope._

## Layout / CSS bugs on the current design

- [ ] `main { overflow-x: scroll }` always invites a horizontal scrollbar. Should be `auto` or not overflow at all.
- [ ] `body` is max-width 764px and `main` is max-width 60rem — leftover conflict from the layout. Pick one content width.
- [ ] Pink/lime only appear on hover. The live site barely uses the DC5B accent unless you poke it.

## Chrome and copy

- [ ] Footer legal block is heavy after short pages (home, 404, labs). Keep the words; consider quieter treatment on short pages (simple footer already exists — use it more deliberately).
- [ ] “Edit on Github” is a product feature. Keep the path; the section can be visually quieter (and “GitHub” spelling).
- [ ] Note hero images are forced 3:1 crop. Same problem as home: artwork gets sliced. Prefer a less aggressive crop or object-position that respects the image.

## Not this issue

- Do not merge PRs #24, #25, or #26.
- Do not add a persistent desktop sidebar, numbered 01/02 system, catalog card grid, Fast Moving strip, or Ink & Neon terminal as the site skin.
- Do not start a design-system extraction or the Gus brief (#20) here — that is later `presence`.
- Do not build the new-note button (#2) here — that is `authoring`, after these snags.

# When this issue exists

- [ ] Close PR #24 (Catalog of Ideas)
- [ ] Close PR #25 (Editorial Studio)
- [ ] Close PR #26 (Ink & Neon Terminal) — or reopen as a labs-only experiment later, not as a site redesign
```

import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { relatedListedNotes, relatedOffsetLabel } from "./notes.ts";

type FixtureNote = {
  slug: string;
  data: { date: Date; private?: boolean; title: string };
};

function note(
  slug: string,
  date: string,
  isPrivate = false,
): FixtureNote {
  return {
    slug,
    data: { date: new Date(date), private: isPrivate, title: slug },
  };
}

/** Oldest → private-in-the-middle → newest. Typical collection order, not newest-first. */
const fixture = [
  note("old", "2021-01-01"),
  note("secret", "2021-06-01", true),
  note("mid", "2022-01-01"),
  note("new", "2023-01-01"),
];

test("never returns a private note as a neighbour", () => {
  const related = relatedListedNotes(fixture, "mid");

  assert.equal(
    related.some(({ note }) => note.data.private),
    false,
  );
  assert.deepEqual(
    related.map(({ note }) => note.slug),
    ["new", "old"],
  );
});

test("labels +1 as newer and -1 as older even if the input is oldest-first", () => {
  const related = relatedListedNotes(fixture, "mid");
  const labels = Object.fromEntries(
    related.map(({ note, offset }) => [note.slug, relatedOffsetLabel(offset)]),
  );

  assert.equal(labels.new, "+1");
  assert.equal(labels.old, "-1");
});

test("skips private notes when walking to the next listed neighbour", () => {
  const fromOldest = relatedListedNotes(fixture, "old");
  assert.equal(fromOldest.find(({ offset }) => offset === 1)?.note.slug, "mid");
  assert.equal(
    fromOldest.some(({ note }) => note.slug === "secret"),
    false,
  );
});

test("returns no neighbours for an unlisted current note", () => {
  assert.deepEqual(relatedListedNotes(fixture, "secret"), []);
});

test("newest listed note has only -1, oldest listed note has only +1", () => {
  const newest = relatedListedNotes(fixture, "new");
  const oldest = relatedListedNotes(fixture, "old");

  assert.deepEqual(
    newest.map(({ offset, note }) => [relatedOffsetLabel(offset), note.slug]),
    [["-1", "mid"]],
  );
  assert.deepEqual(
    oldest.map(({ offset, note }) => [relatedOffsetLabel(offset), note.slug]),
    [["+1", "mid"]],
  );
});

function loadContentNotes() {
  const dir = join(dirname(fileURLToPath(import.meta.url)), "../content/notes");
  return readdirSync(dir)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => {
      const raw = readFileSync(join(dir, name), "utf8");
      const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!frontmatter) {
        throw new Error(`No frontmatter in ${name}`);
      }
      const dateLine = frontmatter[1].match(/^date:\s*(.+)$/m);
      if (!dateLine) {
        throw new Error(`No date in ${name}`);
      }
      return {
        slug: name.replace(/\.mdx$/, ""),
        data: {
          date: new Date(dateLine[1].trim()),
          private: /^private:\s*true\s*$/m.test(frontmatter[1]),
          title: name,
        },
      };
    });
}

test("real notes: neighbours are listed, +1 is newer, -1 is older", () => {
  const notes = loadContentNotes();
  const listed = notes.filter((entry) => !entry.data.private);
  assert.ok(listed.length > 2, "need a real listed collection to check");

  for (const current of notes) {
    const related = relatedListedNotes(notes, current.slug);

    if (current.data.private) {
      assert.deepEqual(related, [], current.slug);
      continue;
    }

    for (const { note: neighbour, offset } of related) {
      assert.equal(neighbour.data.private, false, neighbour.slug);
      assert.notEqual(neighbour.slug, current.slug);

      if (offset === 1) {
        assert.ok(
          neighbour.data.date.getTime() > current.data.date.getTime(),
          `${current.slug} +1 ${neighbour.slug} should be newer`,
        );
      } else {
        assert.ok(
          neighbour.data.date.getTime() < current.data.date.getTime(),
          `${current.slug} -1 ${neighbour.slug} should be older`,
        );
      }
    }
  }
});

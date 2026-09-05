import type { CollectionEntry } from "astro:content";

export type NoteEntry = CollectionEntry<"notes">;

export function listedNotes(notes: NoteEntry[]) {
  return notes.filter((note) => !note.data.private);
}

export function sortNotesNewestFirst(notes: NoteEntry[]) {
  return [...notes].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function noteIndexNumbers(notes: NoteEntry[]) {
  return new Map(
    [...notes]
      .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf())
      .map((note, index) => [note.slug, index + 1] as const),
  );
}

export function relatedOffsetLabel(offset: number) {
  return offset > 0 ? `+${offset}` : String(offset);
}

/** Adjacent listed notes, newer first then older. Empty if the current note is unlisted. */
export function relatedListedNotes(
  listedNewestFirst: NoteEntry[],
  currentSlug: string,
) {
  const index = listedNewestFirst.findIndex((note) => note.slug === currentSlug);
  if (index < 0) {
    return [];
  }

  const related: { note: NoteEntry; offset: 1 | -1 }[] = [];
  const newer = listedNewestFirst[index - 1];
  const older = listedNewestFirst[index + 1];

  if (newer) {
    related.push({ note: newer, offset: 1 });
  }
  if (older) {
    related.push({ note: older, offset: -1 });
  }

  return related;
}

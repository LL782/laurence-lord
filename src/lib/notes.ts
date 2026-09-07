import type { CollectionEntry } from "astro:content";

export type NoteEntry = CollectionEntry<"notes">;

export type NoteLike = {
  slug: string;
  data: {
    date: Date | string;
    private?: boolean;
    title?: string;
  };
};

function noteTime(note: NoteLike) {
  const { date } = note.data;
  return date instanceof Date ? date.getTime() : new Date(date).getTime();
}

function compareOldestFirst(a: NoteLike, b: NoteLike) {
  const delta = noteTime(a) - noteTime(b);
  return delta !== 0 ? delta : a.slug.localeCompare(b.slug);
}

export function listedNotes<T extends NoteLike>(notes: T[]) {
  return notes.filter((note) => !note.data.private);
}

export function sortNotesNewestFirst<T extends NoteLike>(notes: T[]) {
  return [...notes].sort((a, b) => compareOldestFirst(b, a));
}

export function noteIndexNumbers<T extends NoteLike>(notes: T[]) {
  return new Map(
    [...notes]
      .sort(compareOldestFirst)
      .map((note, index) => [note.slug, index + 1] as const),
  );
}

export function relatedOffsetLabel(offset: number) {
  return offset > 0 ? `+${offset}` : String(offset);
}

/**
 * Adjacent listed notes for a current slug.
 * Always drops private notes and orders by date, so callers cannot leak
 * unlisted notes or swap +1/−1 by passing the collection in the wrong order.
 */
export function relatedListedNotes<T extends NoteLike>(
  notes: T[],
  currentSlug: string,
) {
  const listed = listedNotes(notes).sort(compareOldestFirst);
  const index = listed.findIndex((note) => note.slug === currentSlug);
  if (index < 0) {
    return [];
  }

  const related: { note: T; offset: 1 | -1 }[] = [];
  const older = listed[index - 1];
  const newer = listed[index + 1];

  if (newer) {
    related.push({ note: newer, offset: 1 });
  }
  if (older) {
    related.push({ note: older, offset: -1 });
  }

  return related;
}

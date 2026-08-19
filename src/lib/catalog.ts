import type { CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

export type CatalogType = "Note" | "Lab";

export interface CatalogItem {
  title: string;
  date: Date;
  href: string;
  types: CatalogType[];
  image?: ImageMetadata;
  imageAlt?: string;
  description?: string;
  slug: string;
}

export const labExperiments = [
  {
    slug: "a-frame-001",
    date: "2021-10-11",
    path: "/labs/a-frame-001/",
    title: "A Frame 001",
  },
  {
    slug: "LL782-poster",
    date: "2022-11-30",
    path: "/labs/LL782-poster/",
    title: "LL782 Poster",
  },
] as const;

function noteToCatalogItem(note: CollectionEntry<"notes">): CatalogItem {
  const isLab = Boolean(note.data.imageAnchor?.startsWith("/labs/"));

  return {
    title: note.data.title,
    date: note.data.date,
    href: `/notes/${note.slug}/`,
    types: isLab ? ["Note", "Lab"] : ["Note"],
    image: note.data.image,
    imageAlt: note.data.imageAlt,
    description: note.data.description,
    slug: note.slug,
  };
}

function labToCatalogItem(
  lab: (typeof labExperiments)[number],
  notesBySlug: Map<string, CollectionEntry<"notes">>,
): CatalogItem {
  const note = notesBySlug.get(lab.slug.toLowerCase());

  return {
    title: lab.title,
    date: new Date(lab.date),
    href: lab.path,
    types: ["Lab"],
    image: note?.data.image,
    imageAlt: note?.data.imageAlt ?? lab.title,
    description: note?.data.description,
    slug: `lab-${lab.slug}`,
  };
}

export function getNoteCatalogItems(
  notes: CollectionEntry<"notes">[],
): CatalogItem[] {
  return notes
    .filter(({ data }) => !data.private)
    .map(noteToCatalogItem)
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

export function getFullCatalogItems(
  notes: CollectionEntry<"notes">[],
): CatalogItem[] {
  const publicNotes = notes.filter(({ data }) => !data.private);
  const notesBySlug = new Map(
    publicNotes.map((note) => [note.slug.toLowerCase(), note]),
  );

  const noteItems = publicNotes.map(noteToCatalogItem);
  const labItems = labExperiments.map((lab) =>
    labToCatalogItem(lab, notesBySlug),
  );

  return [...noteItems, ...labItems].sort(
    (a, b) => b.date.valueOf() - a.date.valueOf(),
  );
}

export function formatCatalogDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

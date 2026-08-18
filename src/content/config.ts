import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      imageLink: z.string().optional(),
      imageAnchor: z.string().optional(),
      afterthoughts: z.string().optional(),
      updates: z.array(z.coerce.string()).optional(),
      private: z.boolean().default(false),
    }),
});

export const collections = { notes };

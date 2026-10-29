import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One folder per project in src/content/projects/<slug>/: an index.md with the
// details below and the project's images next to it. The folder name is the URL.
const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) => {
    const media = z.union([
      z.object({ image: image(), alt: z.string() }),
      // Videos live in public/projects/<slug>/ (or any URL) and are referenced by path.
      z.object({ video: z.string(), poster: image().optional(), alt: z.string() }),
    ]);

    return z
      .object({
        title: z.string(),
        // Shown in the homepage list and on the project page.
        order: z.number(),
        badges: z.array(z.string()).min(1).max(3),
        start: z.number().int(),
        // A year, or "current" for ongoing work. Leave it out for a single-year project.
        end: z.union([z.number().int(), z.literal('current')]).optional(),
        // One sentence for search results and link previews.
        summary: z.string(),
        cover: image(),
        coverAlt: z.string(),
        // Optional link to the live product or site.
        link: z.url().optional(),
        media: z.array(media).default([]),
        // A draft has a hidden page (not linked or indexed) until it has its images.
        draft: z.boolean().default(false),
      })
      .refine((project) => project.draft || project.media.length >= 5, {
        message: 'A project needs at least 5 images or videos in `media` (or `draft: true`).',
        path: ['media'],
      });
  },
});

export const collections = { projects };

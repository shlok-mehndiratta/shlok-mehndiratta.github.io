import { defineCollection, z } from 'astro:content';

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    status: z.enum(['published', 'under-review', 'preprint', 'in-preparation']),
    abstract: z.string(),
    takeaway: z.string().optional(),
    pdfUrl: z.string().optional(),
    codeUrl: z.string().optional(),
    projectUrl: z.string().optional(),
    bibtex: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const notebookCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    type: z.enum(['deep-dive', 'heuristic', 'paper-note', 'bookshelf']).default('deep-dive'),
    readTime: z.string().default('5 min read'),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const archiveCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    imageUrl: z.string(),
    caption: z.string(),
    location: z.string().optional(),
    instrument: z.string().optional(), // e.g. "Tektronix Scope", "He-Ne Laser 632.8nm", "Stereo Microscope"
    category: z.enum(['lab', 'geometry', 'optics', 'life']).default('lab'),
    aspectRatio: z.string().default('4/3'),
    order: z.number().default(99),
  }),
});

export const collections = {
  publications: publicationsCollection,
  notebook: notebookCollection,
  archive: archiveCollection,
};

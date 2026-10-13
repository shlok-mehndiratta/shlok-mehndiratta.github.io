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
    pdfUrl: z.string().optional(),
    codeUrl: z.string().optional(),
    projectUrl: z.string().optional(),
    bibtex: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    stage: z.enum(['seedling', 'budding', 'evergreen']).default('seedling'),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const galleryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    imageUrl: z.string(),
    caption: z.string(),
    location: z.string().optional(),
    category: z.enum(['lab', 'encounters', 'geometry', 'generative']).default('encounters'),
    aspectRatio: z.string().default('4/3'),
    order: z.number().default(99),
  }),
});

export const collections = {
  publications: publicationsCollection,
  writing: writingCollection,
  gallery: galleryCollection,
};

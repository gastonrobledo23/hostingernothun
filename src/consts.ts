// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'AstroG Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
//Crea un esquema de contenido para tus posts. En src/content/config.ts:
import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    slug: z.string(),
  }),
});

const inteligenciaartificialCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    slug: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  inteligenciaartificials:inteligenciaartificialCollection
};

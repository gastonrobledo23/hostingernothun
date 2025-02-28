// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Nothun';
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
    tags: z.array(z.string()).optional(), // Si necesitas tags
  }),
});

const exploraCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    slug: z.string(),
    tags: z.array(z.string()).optional(), // Si necesitas tags
  }),
});


const tecnologiaCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    slug: z.string(),
    tags: z.array(z.string()).optional(), 
  }),
});


const viralCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    slug: z.string(),
    tags: z.array(z.string()).optional(), 
  }),
});

export const collections = {
  viral:viralCollection,
  explora: exploraCollection,
  posts: postsCollection,
  inteligenciaartificial:inteligenciaartificialCollection,
  tecnologia:tecnologiaCollection
};

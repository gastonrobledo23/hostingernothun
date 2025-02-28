import { defineCollection, z } from 'astro:content';

// Definimos las colecciones
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    slug: z.string(),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),  // 🔹 Agregar esta línea
  }),
});
const inteligenciaArtificialCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.date()), // Manteniendo la compatibilidad con cadenas y fechas
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(), // 👈 Agrega esto

  }),
});

const tecnologiaCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.date()), // Manteniendo la compatibilidad con cadenas y fechas
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(), // 👈 Agrega esto
  }),
});
const exploraCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional()
  }),
});

const viralCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional()
  }),
});


export const collections = {
  viral:viralCollection,
  explora: exploraCollection, 
  blog: blogCollection,
  inteligenciaartificial: inteligenciaArtificialCollection,
  tecnologia:tecnologiaCollection,
  posts: postsCollection,
};



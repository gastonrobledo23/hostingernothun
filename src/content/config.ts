import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.date()), // Permitir cadenas o objetos Date
  }),
});

const inteligenciaArtificialCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.date()), // Manteniendo la compatibilidad con cadenas y fechas
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  inteligenciaartificial: inteligenciaArtificialCollection,
};



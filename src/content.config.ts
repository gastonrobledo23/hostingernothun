import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});
const inteligenciaartificial = defineCollection({
	loader: glob({ base: './src/content/inteligenciaartificial', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  pubDate: z.coerce.date(), // Convierte strings a Date
	  updatedDate: z.coerce.date().optional(), // Fecha de actualización (opcional)
	  heroImage: z.string().optional(), // Imagen destacada (opcional)
	}),
  });
export const collections = { blog,inteligenciaartificial, };

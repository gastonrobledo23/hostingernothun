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
	  tags: z.array(z.string()).optional(), // Agregar esto
	}),
  });

  const tecnologia = defineCollection({
	loader: glob({ base: './src/content/tecnologia', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  pubDate: z.coerce.date(), // Convierte strings a Date
	  updatedDate: z.coerce.date().optional(), // Fecha de actualización (opcional)
	  heroImage: z.string().optional(), // Imagen destacada (opcional)
	  tags: z.array(z.string()).optional(), // Agregar esto
	}),
  });
  const explora = defineCollection({
	loader: glob({ base: './src/content/explora', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  pubDate: z.coerce.date(), // Convierte strings a Date
	  updatedDate: z.coerce.date().optional(), // Fecha de actualización (opcional)
	  heroImage: z.string().optional(), // Imagen destacada (opcional)
	  tags: z.array(z.string()).optional(), // Agregar esto
	}),
  });
  const viral = defineCollection({
	loader: glob({ base: './src/content/viral', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  pubDate: z.coerce.date(), // Convierte strings a Date
	  updatedDate: z.coerce.date().optional(), // Fecha de actualización (opcional)
	  heroImage: z.string().optional(), // Imagen destacada (opcional)
	  tags: z.array(z.string()).optional(), // Agregar esto
	}),
  });
export const collections = { blog,inteligenciaartificial,tecnologia,explora,viral };

// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import dotenv from "dotenv";


import react from '@astrojs/react';


dotenv.config();
// https://astro.build/config
export default defineConfig({
 

  site: 'https://nothun.io',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
  
});
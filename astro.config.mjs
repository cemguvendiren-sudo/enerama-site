import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://enerama.com',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
  ],
  build: {
    assets: 'assets',
  },
});

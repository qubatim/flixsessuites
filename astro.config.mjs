// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://flixsessuites.com',

  integrations: [sitemap(), icon({
    include: {
      hugeicons: ['*']
    }
  })],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});
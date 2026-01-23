// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
	plugins: [tailwindcss(), injectHTML()],
	build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        components: 'components.html',
				collections: 'collections.html',
        products: 'products.html'
      },
    },
  },
});
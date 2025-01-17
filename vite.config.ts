import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@assets': path.resolve('./src/assets'),
      '@lib': path.resolve('./src/lib'),
      '@routes': path.resolve('./src/routes'),
      '@components': path.resolve('./src/lib/components'),
    }
  }
})

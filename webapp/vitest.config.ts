import { defineConfig } from 'vitest/config';
import path from 'path';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    mainFields: ['module'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test.setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      // limit coverage collection to library code we care about
      include: ['src/lib/**'],
    },
  },
});

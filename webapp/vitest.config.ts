import { defineConfig } from 'vitest/config';
import path from 'path';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    mainFields: ['module'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      // map some heavy frontend libs to lightweight test mocks for CI
      'class-variance-authority': path.resolve(__dirname, './test-mocks/class-variance-authority.ts'),
      'tailwind-merge': path.resolve(__dirname, './test-mocks/tailwind-merge.ts'),
      '@radix-ui/react-slot': path.resolve(__dirname, './test-mocks/radix-slot.ts'),
      '@radix-ui/react-dropdown-menu': path.resolve(__dirname, './test-mocks/radix-dropdown-menu.tsx'),
      '@radix-ui/react-separator': path.resolve(__dirname, './test-mocks/radix-separator.tsx'),
      'cmdk': path.resolve(__dirname, './test-mocks/cmdk.tsx'),
      '@radix-ui/react-dialog': path.resolve(__dirname, './test-mocks/radix-dialog.tsx'),
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

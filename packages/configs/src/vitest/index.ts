import { defineConfig } from 'vitest/config';

export const vitestConfig = defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json'],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 100,
        lines: 80,
        perFile: true,
      },
      exclude: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/index.ts'],
    },
  },
});

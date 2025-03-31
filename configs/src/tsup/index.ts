import { defineConfig } from 'tsup';

export const tsupConfig = defineConfig({
  format: ['cjs', 'esm'],
  entry: ['src/index.ts'],
  splitting: false,
  minify: true,
  dts: true,
  clean: true,
  treeshake: true,
  sourcemap: true,
  esbuildOptions: (options) => {
    options.bundle = true;
    options.treeShaking = true;
    options.dropLabels = ['DEBUG'];
    options.pure = ['console.log', 'console.dir', 'console.debug', 'console.info'];
  },
  outDir: 'dist',
  platform: 'node',
  target: 'node18',
  tsconfig: 'tsconfig.json',
});

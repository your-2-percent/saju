import { defineConfig } from 'tsup';
import { tsupConfig } from './src/tsup';

export default defineConfig({
  ...tsupConfig,
  format: ['esm']
});

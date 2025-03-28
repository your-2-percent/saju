import { tsupConfig } from '@saju/configs';
import { defineConfig } from 'tsup';

export default defineConfig({
  ...tsupConfig,
  format: ['esm'],
});

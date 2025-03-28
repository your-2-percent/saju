import { vitestConfig } from '@saju/configs';
import { defineConfig } from 'vitest/config';
import packageJson from './package.json';

export default defineConfig({
  test: {
    ...vitestConfig.test,
    name: packageJson.name,
  },
});

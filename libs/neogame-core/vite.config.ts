import { defineConfig } from 'vite';
import { coverageConfigDefaults } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            exclude: ['**/index.ts', ...coverageConfigDefaults.exclude],
        },
    },
});

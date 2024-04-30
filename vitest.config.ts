import react from '@vitejs/plugin-react';
import * as path from 'path';
import * as VitestConfig from 'vitest/config';

export default VitestConfig.defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    includeSource: ['app/**/*.{ts,tsx}'],
    exclude: ['node_modules', 'e2e'],
    setupFiles: ['app/test/setup-test-env.ts'],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'),
    },
  },
  plugins: [react()],
});

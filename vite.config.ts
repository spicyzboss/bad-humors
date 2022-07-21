import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'ESNext',
    outDir: 'build',
    assetsDir: 'public'
  },
  resolve: {
    alias: {
      '@components': 'src/components',
      '@layouts': 'src/layouts',
      '@config': 'src/config',
      '@pages': 'src/pages',
    }
  }
});

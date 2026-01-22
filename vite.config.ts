import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDemoBuild = mode === 'demo';
  return {
    base: '/',
    build: {
      sourcemap: true,
      assetsDir: 'src',
      target: ['es2015'],
      cssMinify: true,
      lib: isDemoBuild ? false : {
        entry: './src/index.ts',
        name: 'BaMemorialLobbyViewer',
        fileName: (format) => `ba-memorial-lobby-viewer.${format}.js`,
        formats: ['es', 'umd', 'cjs'],
      },
    },
  }
})

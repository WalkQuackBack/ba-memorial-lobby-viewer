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
      minify: false,
      lib: isDemoBuild ? false : {
        entry: './src/index.ts',
        name: 'BaMemorialLobbyViewer',
        fileName: 'ba-memorial-lobby-viewer',
        formats: ['es'],
      },
      rollupOptions: {
        external: ['lit', '@esotericsoftware/spine-webcomponents']
      }
    },
  }
})

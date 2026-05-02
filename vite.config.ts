import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

const _monacoEditorPlugin = monacoEditorPlugin as any;

export default defineConfig({
  base: '/tophers-archipelago-web-client/',   // <-- IMPORTANT for GitHub Pages
  plugins: [
    vue(),
    _monacoEditorPlugin.default({})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});

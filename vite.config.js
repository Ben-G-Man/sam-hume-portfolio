import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/sam-hume-portfolio/',
    build: {
        outDir: 'docs'
    }
  }; deploy
});
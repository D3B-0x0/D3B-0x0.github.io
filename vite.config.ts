import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Site is served at the root of the custom domain (aboutme.debnerd.in)
  // via CNAME to d3b-0x0.github.io, so assets are root-relative.
  base: '/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

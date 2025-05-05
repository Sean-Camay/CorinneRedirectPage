import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/CorinneRedirectPage/', // ensures all asset URLs start with /CorinneRedirectPage/
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs', // write your built site into “docs/”
    emptyOutDir: true,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: './docs'
  },
  assetsInclude: ['**/*.png'],
  plugins: [react(), viteSingleFile()],
})

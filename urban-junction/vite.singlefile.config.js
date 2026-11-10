import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { defineConfig } from 'vite'

/**
 * Produces ONE self-contained index.html (JS + CSS + images inlined as data
 * URIs) that renders with no network access at all — useful for offline
 * review, sharing as a single attachment, and in-app previews.
 *
 *   npm run build:single
 */
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    outDir: 'dist-single',
    assetsInlineLimit: 100_000_000, // inline every asset, including the jpgs
    cssCodeSplit: false,
    reportCompressedSize: false,
  },
})

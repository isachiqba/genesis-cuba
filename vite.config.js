import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// La vista previa al compartir necesita URLs absolutas. En Vercel se usa el dominio de
// producción del proyecto (también el propio, si se añade); en local, el servidor de desarrollo.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:5175'

const siteUrlInHtml = () => ({
  name: 'site-url-in-html',
  transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
})

export default defineConfig({
  plugins: [vue(), tailwindcss(), siteUrlInHtml()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import pkg from './package.json' with { type: 'json' }

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Número de versión disponible en el código como __APP_VERSION__
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  server: {
    // Escuchar en IPv4 e IPv6 (en Windows, "localhost" a veces queda solo en IPv6 y el túnel da 502)
    host: true,
    // Permite compartir el servidor de desarrollo con un túnel temporal de Cloudflare
    // (npx cloudflared tunnel --url http://localhost:5173)
    allowedHosts: ['.trycloudflare.com'],
  },
})

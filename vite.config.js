import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, //comunicaçao que estamos fazendo com o front end
    host: true, //para funcionar na "internet" (network)
    open: true, //abre o navegador automaticamente
  }
})

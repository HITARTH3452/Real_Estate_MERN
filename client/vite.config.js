import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend server address
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // Disable SSL verification for development
        // rewrite: (path) => path.replace(/^\/api/, '') // Remove /api prefix when forwarding
      }
    }
  },
  plugins: [react()],
})

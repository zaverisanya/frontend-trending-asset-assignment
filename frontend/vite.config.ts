import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: 'images',
  },
  base:'/frontend-trending-asset-assignment/',
  plugins: [react()],
})

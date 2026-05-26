import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
})

import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: true,
    allowedHosts: ['portpoflio-3.onrender.com']
  }
})
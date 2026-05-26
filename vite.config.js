import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: true,
    allowedHosts: ["portpoflio-5.onrender.com"]
  }
})
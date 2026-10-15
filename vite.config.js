import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  // `npm run dev`: forward API calls to the local Laravel backend
  server: {
    proxy: {
      '^/(api|sanctum|storage)/': 'http://localhost:8000',
    },
  },
})

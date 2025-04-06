import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: ['src/main.tsx'],
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true,
    },
  },
})

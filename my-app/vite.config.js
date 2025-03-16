import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/checkmyplate/', // since you're deploying to checkmyplate.co.uk root domain
})

import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    // Option 1: Allow specific ngrok host
    // allowedHosts: ['regina-cycadlike-senatorially.ngrok-free.dev'],

    // Option 2 (Alternative): Allow ALL .ngrok-free.dev subdomains automatically
    // allowedHosts: ['.ngrok-free.dev'],

    // Option 3 (Alternative): Allow all hosts (less secure)
    allowedHosts: true,
  }
})
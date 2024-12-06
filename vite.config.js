import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Ensures service worker auto-updates
      manifest: {
        name: 'My React PWA',
        short_name: 'ReactPWA',
        description: 'A Vite + React app as a Progressive Web App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', // Displays the app in standalone mode
        orientation: 'portrait', // Locks the orientation
        icons: [
          {
            src: 'icons/icon1.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon2.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // Optional Workbox configurations
        globPatterns: ['**/*.{html,js,css,png,jpg,jpeg,svg,json}'],
      },
    }),
  ],
})

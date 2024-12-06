import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically updates service worker
      devOptions: {
        enabled: true, // Enables PWA in development mode for testing
      },
      manifest: {
        name: 'AuraLink',
        short_name: 'ReactPWA',
        description: 'A Vite + React app as a Progressive Web App',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/icons/icons1.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icons2.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // Define caching strategies here
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\//, // Example: cache API requests
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 86400, // 1 day
              },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === 'image', // Cache images
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
});

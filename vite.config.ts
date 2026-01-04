import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Safely load environment variables, with fallback to empty string
    let env = {};
    try {
      env = loadEnv(mode, '.', '');
    } catch (error) {
      // If .env file doesn't exist, continue with empty env
      console.warn('No .env file found, continuing without environment variables');
    }
    
    return {
      server: {
        port: 5173,
        host: true,
        strictPort: false,
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

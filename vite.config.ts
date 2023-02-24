import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base : './',
  plugins: [react()],
  resolve : {
    alias : {
      '@Portfolio' : path.resolve(__dirname, 'src'),
    },
  },
  server :{
    port : 5000,
    strictPort : true,
  }

})

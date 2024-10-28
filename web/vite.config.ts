import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";

// Получение текущего имени файла и директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [svgr(), react()],
  server: {
    hmr: true, // Включает Hot Module Replacement (HMR)
    watch: {
      usePolling: true, // Добавить, если работаете на WSL или в Docker
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@assets/css/responsive.scss";',
      },
    },
  },
});

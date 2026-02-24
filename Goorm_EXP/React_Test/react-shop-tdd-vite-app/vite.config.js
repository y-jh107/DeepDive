import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: true,
  },
  server: {
    port: 4000,
    strict: true,
    proxy: {
      "/products": "http://localhost:5000",
      "/options": "http://localhost:5000",
      "/order": "http://localhost:5000",
    },
  },
});

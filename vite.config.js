import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // Increased limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Keep vendor dependencies together
          if (id.includes("node_modules")) {
            if (id.includes("three")) return "vendor-three";
            if (id.includes("gsap")) return "vendor-animation";
            return "vendor";
          }
        },
      },
    },
  },
});
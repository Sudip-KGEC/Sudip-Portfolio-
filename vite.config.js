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
  optimizeDeps: {
    include: ["react", "react-dom", "gsap", "three"],
  },
  build: {
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three/")) return "three-core";
          if (id.includes("three-stdlib") || id.includes("OrbitControls")) return "three-addons";
          if (id.includes("@react-three")) return "r3f";
          if (id.includes("gsap")) return "animation";
          if (id.includes("react-dom") || id.includes("react/")) return "vendor";
          if (id.includes("ContactExperience") || id.includes("contact")) return "contact-3d";
          if (id.includes("MacbookExperience") || id.includes("hero_models")) return "hero-3d";
        },
      },
    },
  },
});
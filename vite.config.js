import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        services: resolve(__dirname, "services/index.html"),
        industries: resolve(__dirname, "industries/index.html"),
        projects: resolve(__dirname, "projects/index.html"),
        partners: resolve(__dirname, "partners/index.html"),
        brochure: resolve(__dirname, "brochure/index.html"),
        news: resolve(__dirname, "news/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("three")) {
            return "three";
          }

          if (id.includes("gsap")) {
            return "gsap";
          }

          return undefined;
        },
      },
    },
  },
});

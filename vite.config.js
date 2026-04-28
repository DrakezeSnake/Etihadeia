import { defineConfig } from "vite";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: {
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

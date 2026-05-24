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
        products: resolve(__dirname, "products/index.html"),
        industries: resolve(__dirname, "industries/index.html"),
        projects: resolve(__dirname, "projects/index.html"),
        partners: resolve(__dirname, "partners/index.html"),
        brochure: resolve(__dirname, "brochure/index.html"),
        news: resolve(__dirname, "news/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        solutions: resolve(__dirname, "solutions/index.html"),
        solution_surface_conditioning: resolve(__dirname, "solutions/surface-conditioning/index.html"),
        solution_anti_corrosion: resolve(__dirname, "solutions/anti-corrosion/index.html"),
        solution_light_metal_finishes: resolve(__dirname, "solutions/light-metal-finishes/index.html"),
        solution_decorative_coatings: resolve(__dirname, "solutions/decorative-coatings/index.html"),
        solution_plating_on_plastics: resolve(__dirname, "solutions/plating-on-plastics/index.html"),
        solution_electroless_nickel: resolve(__dirname, "solutions/electroless-nickel/index.html"),
        solution_wear_resistance: resolve(__dirname, "solutions/wear-resistance/index.html"),
        solution_precious_metals: resolve(__dirname, "solutions/precious-metals/index.html"),
        solution_plastic_recycling: resolve(__dirname, "solutions/plastic-recycling/index.html"),
        solution_watercare: resolve(__dirname, "solutions/watercare/index.html"),
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

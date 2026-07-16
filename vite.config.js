import { defineConfig } from "vite";
import { resolve } from "node:path";
import { industries } from "./src/data/industries.js";

const industryInputs = Object.fromEntries(
  industries.map((industry) => [
    `industry_${industry.slug.replace(/-/g, "_")}`,
    resolve(__dirname, `industries/${industry.slug}/index.html`),
  ]),
);

export default defineConfig({
  build: {
    // Publish linked production maps so DevTools and Lighthouse can attribute
    // optimized bundles back to their original modules.
    sourcemap: true,
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        services: resolve(__dirname, "services/index.html"),
        products: resolve(__dirname, "products/index.html"),
        industries: resolve(__dirname, "industries/index.html"),
        ...industryInputs,
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
        document_decorative_copper_nickel_chrome: resolve(__dirname, "solutions/documents/decorative-copper-nickel-chrome/index.html"),
        document_ankor_wetter_lf_1000: resolve(__dirname, "solutions/documents/ankor-wetter-lf-1000/index.html"),
        document_ankor_hydraulics: resolve(__dirname, "solutions/documents/ankor-hydraulics/index.html"),
        document_alumal_bond_703: resolve(__dirname, "solutions/documents/alumal-bond-703/index.html"),
        document_additive_tr_101: resolve(__dirname, "solutions/documents/additive-tr-101/index.html"),
        document_enova_950: resolve(__dirname, "solutions/documents/enova-950/index.html"),
        document_enova_ef_509: resolve(__dirname, "solutions/documents/enova-ef-509/index.html"),
        document_envirozin_240: resolve(__dirname, "solutions/documents/envirozin-240/index.html"),
        document_plastic_recycling_brochure: resolve(__dirname, "solutions/documents/plastic-recycling-brochure/index.html"),
        document_prelik_1700: resolve(__dirname, "solutions/documents/prelik-1700/index.html"),
        document_iridite_tcp_system: resolve(__dirname, "solutions/documents/iridite-tcp-system/index.html"),
        document_cuprostar_1600_1610: resolve(__dirname, "solutions/documents/cuprostar-1600-1610/index.html"),
        document_castelox: resolve(__dirname, "solutions/documents/castelox/index.html"),
        document_niklad_eco_mp: resolve(__dirname, "solutions/documents/niklad-eco-mp/index.html"),
        document_evolve_chrome_free_etch: resolve(__dirname, "solutions/documents/evolve-chrome-free-etch/index.html"),
        document_eplating_case_study: resolve(__dirname, "solutions/documents/eplating-case-study/index.html"),
        document_zinklad_2024: resolve(__dirname, "solutions/documents/zinklad-2024/index.html"),
        document_wear_resistant_coatings: resolve(__dirname, "solutions/documents/wear-resistant-coatings/index.html"),
        document_watercare: resolve(__dirname, "solutions/documents/watercare/index.html"),
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

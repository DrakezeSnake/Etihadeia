/**
 * @typedef {{ name: string; description: string }} SolutionProduct
 * @typedef {{ slug: string; title: string; url?: string; description?: string; products?: SolutionProduct[] }} SolutionSubcategory
 * @typedef {{
 *   slug: string;
 *   title: string;
 *   sourceUrl: string;
 *   description: string;
 *   expandedIntro?: string;
 *   image: string;
 *   imageAlt: string;
 *   icon: string;
 *   iconAlt: string;
 *   ctaLabel: string;
 *   subcategories: SolutionSubcategory[];
 *   landingOnly?: boolean;
 * }} Solution
 */

/** @type {Solution[]} */
export const solutions = [
  {
    slug: "surface-conditioning",
    title: "Surface Conditioning",
    sourceUrl: "https://www.macdermidenthone.com/solutions/surface-conditioning",
    description:
      "To deliver best-in-class adhesion, the surface must be cleaned and free of dirt and oxides. The surface conditioning portfolio delivers a perfectly pure substrate to receive a metallic finish.",
    expandedIntro:
      "Prior to the plating process, a surface must be cleaned to offer a perfectly pure substrate to receive a metallic finish with good adhesion. Extensive surface preparation experience enables customers across a range of industries and applications to use a complete line of cleaners.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-02/MacDermid_1583x717_Offering_Surface_conditioning_0.jpg?itok=kwWpyATb",
    imageAlt: "Industrial scale plating bath from above",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-12/Icon_AS_droplets.svg",
    iconAlt: "Water droplet icon",
    ctaLabel: "See featured products",
    subcategories: [
      {
        slug: "strippers",
        title: "Strippers",
        url: "https://www.macdermidenthone.com/solutions/surface-conditioning",
        description:
          "Strippers remove coatings from components and plating racks to ensure application quality. The portfolio can remove coatings such as copper, zinc, and high-phosphorous electroless nickel from many substrate types.",
        products: [
          { name: "CHROME STRIPPER EL 50", description: "Chrome stripper" },
          { name: "METEX STRIPPER NC 290", description: "Immersion stripper for electroless nickel" },
          { name: "METEX COPPER STRIPPER F", description: "Immersion copper stripper for steel" },
          { name: "ENSTRIP™ S", description: "Immersion stripper" },
          { name: "ENSTRIP™ NP", description: "Chemical stripper for removing nickel from steel and copper" },
          {
            name: "ENSTRIP™ EN 86",
            description: "Non-cyanide immersion stripper for high phosphorous electroless nickel",
          },
          {
            name: "ENSTRIP™ EN 79",
            description: "Non-cyanide immersion stripper for medium to high phosphorous electroless nickel",
          },
          { name: "RACK STRIPPER SS 10", description: "Electrolytic rack stripper" },
          { name: "ENSTRIP™ SEALANT REMOVER", description: "High alkaline stripper removing sealant residues" },
          { name: "ENSTRIP™ 848", description: "Electrolytic rack stripper" },
        ],
      },
      { slug: "multimetal-cleaners", title: "Multimetal Cleaners" },
      { slug: "activators", title: "Activators" },
      { slug: "buffing-compound-removers", title: "Buffing Compound Removers" },
      { slug: "cleaning-systems", title: "Cleaning Systems" },
      { slug: "high-alkaline-cleaners", title: "High Alkaline Cleaners" },
      { slug: "descalers", title: "Descalers" },
    ],
  },
  {
    slug: "anti-corrosion",
    title: "Anti-Corrosion",
    sourceUrl: "https://www.macdermidenthone.com/solutions/anti-corrosion-coatings",
    description:
      "When durability is the highest priority, anti-corrosion finishing solutions deliver best-in-class results, ensuring products perform in the most challenging environments.",
    expandedIntro:
      "Durable solutions provide corrosion protection while also supporting functional attributes and decorative properties for ferrous construction elements. These surface finishing solutions help components reach and sustain peak performance even when exposed to challenging environmental conditions.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-02/_MacDermid_1583x717_Offering_Anti_Corrosion_0.jpg?itok=NCBZn2Am",
    imageAlt: "Close-up of threaded fasteners",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-11/Icon_AS_Bolt%20and%20Nut.svg",
    iconAlt: "Nut and bolt icon",
    ctaLabel: "See featured products",
    subcategories: [
      {
        slug: "zinc",
        title: "Zinc",
        url: "https://www.macdermidenthone.com/solutions/anti-corrosion-coatings",
        description:
          "Zinc-based surface finishing offers a cost-efficient combination of corrosion protection, attractive decorative finishes, and flexible functional properties. OEM-approved finishing solutions use acidic or alkaline zinc plating with trivalent chromium passivate and sealer systems.",
        products: [
          { name: "Kenlevel XP", description: "High temperature acid chloride zinc plating process" },
          { name: "Kenlevel FX", description: "Environmentally friendly acid zinc plating process for brake finishing" },
          { name: "Kenlevel 019-LF", description: "Acid zinc plating process for rack and barrel applications" },
          { name: "ZETAPLUS™ 460 BF", description: "Boric acid-free zinc plating process" },
          {
            name: "ZETAPLUS™ 450",
            description: "Ammonia and OCB-free acid zinc plating process",
          },
          { name: "Kenlevel BF2", description: "Boric acid- and ammonia-free acid zinc plating process" },
          {
            name: "ENVIROZIN 240",
            description: "Alkaline non-cyanide zinc plating process",
          },
        ],
      },
      { slug: "zinc-alloys", title: "Zinc Alloys" },
      { slug: "passivates", title: "Passivates" },
      { slug: "sealers", title: "Sealers" },
      { slug: "phosphating", title: "Phosphating" },
    ],
  },
  {
    slug: "light-metal-finishes",
    title: "Light Metal Finishes",
    sourceUrl: "https://www.macdermidenthone.com/solutions/light-metal-finishes",
    description:
      "With a comprehensive light metal solution portfolio, MacDermid Enthone provides proven expertise and performance designed to exceed expectations and requirements.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-10/Light%20Metals%20Soulutons%20by%20Macdermid%20enthone.png?itok=wKpSLjGI",
    imageAlt: "Stacked aluminum profiles",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-12/Icon_AS_profile.svg",
    iconAlt: "Building aluminum profile icon",
    ctaLabel: "See featured products",
    subcategories: [
      { slug: "surface-conditioning-light-metals", title: "Surface Conditioning" },
      { slug: "anodizing-systems", title: "Anodizing Systems" },
      { slug: "anodizing-additives", title: "Anodizing Additives" },
      { slug: "sealers-light-metal", title: "Sealers" },
      { slug: "conversion-coatings", title: "Conversion Coatings" },
    ],
  },
  {
    slug: "decorative-coatings",
    title: "Decorative Coatings",
    sourceUrl: "https://www.macdermidenthone.com/solutions/decorative-coatings",
    description:
      "Decorative coating solutions deliver cost-effective and environmentally compliant processes in a range of bright, satin, white, and dark finishes.",
    expandedIntro:
      "Distinctive finishes and colors provide dynamic styling to meet demanding production and detailing requirements. These processes support world-class manufacturers and applicators with cost-effective and environmentally compliant solutions.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-02/MacDermid_1583x717_Offering_Decorative_0.jpg?itok=uw1AUBZW",
    imageAlt: "Close-up of a part treated with decorative nickel coating",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-11/Icon_AS_Shiny%20Surface.svg",
    iconAlt: "Shiny surface icon",
    ctaLabel: "See featured products",
    subcategories: [
      {
        slug: "chrome",
        title: "Chrome",
        url: "https://www.macdermidenthone.com/solutions/decorative-coatings",
        description:
          "Decorative chrome plating technology delivers corrosion protection with a strong aesthetic finish. It is used in automotive, building and hardware, plumbing, and sanitary applications, providing a durable, easy-to-clean surface in a wide range of colors and finishes.",
        products: [
          {
            name: "ANKOR WETTER LF 1000",
            description: "PFAS-free wetting agent for decorative hexavalent chromium",
          },
          { name: "ANKOR 1120", description: "Decorative chromium process" },
          {
            name: "TWILITE™",
            description: "Sulfate-based, mid-dark trivalent decorative chromium process",
          },
          {
            name: "TRILYTE™ Flash CL",
            description: "Chloride-based, white trivalent chromium plating process",
          },
          { name: "TriMac BLUE™", description: "Sulfate-based, white trivalent chromium process" },
          {
            name: "STARLITE™",
            description: "Sulfate-based, mid-dark trivalent decorative chromium process",
          },
          {
            name: "TriMac ECLIPSE™",
            description: "Sulphate-based, dark trivalent decorative chromium process",
          },
        ],
      },
      { slug: "nickel", title: "Nickel" },
      { slug: "copper", title: "Copper" },
      { slug: "post-treatment", title: "Post-Treatment" },
    ],
  },
  {
    slug: "plating-on-plastics",
    title: "Plating On Plastics",
    sourceUrl: "https://www.macdermidenthone.com/solutions/plating-on-plastics",
    description:
      "A full range of Plating on Plastic technologies for decorative applications, designed with environmental compliance and sustainability in mind.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-02/_MacDermid_1583x717_Offering_Plating.jpg?itok=0-XIzuhm",
    imageAlt: "Plastic parts on rack in a plating facility",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-11/Icon_AS_Shiny%20Surface.svg",
    iconAlt: "Shiny surface icon",
    ctaLabel: "See featured products",
    subcategories: [
      { slug: "conventional-cycle", title: "Conventional Cycle" },
      { slug: "chrome-free-etch", title: "Chrome-Free Etch" },
      { slug: "direct-metallization", title: "Direct Metallization" },
    ],
  },
  {
    slug: "electroless-nickel",
    title: "Electroless Nickel",
    sourceUrl: "https://www.macdermidenthone.com/solutions/electroless-nickel",
    description:
      "When wear resistance is the top priority, electroless nickel solutions deliver trusted performance.",
    expandedIntro:
      "Known for superior wear and corrosion resistance and the ability to uniformly coat intricate shapes, electroless nickel is a go-to coating for engineers tackling demanding applications.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-02/_MacDermid_1583x717_Offering_Wear_Resistance_coatings.jpg?itok=iL5pU6s5",
    imageAlt: "Parts treated with wear-resistance-enhancing electroless nickel",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-11/Icon_AS_Pipe%20Joints.svg",
    iconAlt: "Oil pipe with valve icon",
    ctaLabel: "See featured products",
    subcategories: [
      {
        slug: "reduced-ion-electroless-nickel",
        title: "Reduced Ion Electroless Nickel",
        url: "https://www.macdermidenthone.com/solutions/electroless-nickel",
        description:
          "Reduced Ion electroless nickel systems operate at lower metal concentrations, resulting in more dilute EN chemistry. This improves operational efficiency, solution stability, and reduces staining of deposits.",
        products: [
          {
            name: "ENOVA RI 8712",
            description: "Bright, lead- and cadmium-free medium phosphorous electroless nickel",
          },
          {
            name: "NiKlad ECO MP",
            description: "Very bright, lead and cadmium free low metal medium phosphorous electroless nickel process",
          },
          {
            name: "NiKlad ECO HP",
            description: "Semi-bright, lead-free low metal high phosphorous electroless nickel process",
          },
          {
            name: "ENOVA RI 8111",
            description: "Semi-bright, low metal high phosphorus electroless nickel process",
          },
        ],
      },
      { slug: "high-phosphorus-electroless-nickel", title: "High Phosphorus Electroless Nickel" },
      { slug: "medium-phosphorus-electroless-nickel", title: "Medium Phosphorus Electroless Nickel" },
      { slug: "low-medium-phosphorus-electroless-nickel", title: "Low/Medium Phosphorus Electroless Nickel" },
      { slug: "low-phosphorus-electroless-nickel", title: "Low Phosphorus Electroless Nickel" },
      { slug: "specialty-electroless-nickel", title: "Specialty Electroless Nickel" },
      { slug: "composite-en", title: "Composite EN" },
    ],
  },
  {
    slug: "wear-resistance",
    title: "Wear Resistance",
    sourceUrl: "https://www.macdermidenthone.com/solutions/wear-resistance",
    description:
      "When deposit hardness and wear resistance are paramount, wear resistance solutions ensure products perform in challenging environments.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-11/hard-chrome-by-macdermid-enthone%20%281%29_0.jpg?itok=yTawmL6w",
    imageAlt: "Hard chrome part",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-11/Icon_AS_Gears.svg",
    iconAlt: "Gears icon",
    ctaLabel: "See featured products",
    subcategories: [{ slug: "hard-chrome", title: "Hard Chrome" }],
  },
  {
    slug: "precious-metals",
    title: "Precious Metals",
    sourceUrl: "https://www.macdermidenthone.com/solutions/precious-metals",
    description:
      "Luxury surface finishing solutions that do not just finish luxury products — they complete them.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-01/MacDermid_1583x717_Offering_Precious_metals_0.jpg?itok=_SwztsaF",
    imageAlt: "Black necklace",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-11/Icon_AS_Fashion.svg",
    iconAlt: "Necklace stand and purse buckle icon",
    ctaLabel: "See featured products",
    subcategories: [
      { slug: "adhesion-layer", title: "Adhesion Layer" },
      { slug: "bronze", title: "Bronze" },
      { slug: "silver", title: "Silver" },
      { slug: "gold", title: "Gold" },
      { slug: "palladium", title: "Palladium" },
      { slug: "platinum", title: "Platinum" },
      { slug: "rhodium", title: "Rhodium" },
      { slug: "passivation", title: "Passivation" },
    ],
  },
  {
    slug: "plastic-recycling",
    title: "Plastic Recycling",
    sourceUrl: "https://www.macdermidenthone.com/solutions/plastic-recycling",
    description:
      "From cleaners and additives to plastic separation enhancing products and defoamers, the plastic recycling portfolio delivers process-enhancing, environmentally friendly solutions.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-02/_MacDermid_1583x717_Offering_PET_0.jpg?itok=0-AwmE9d",
    imageAlt: "Recyclable plastic bottles with white caps arranged in rows",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-11/Icon_AS_Plastic%20Recycling.svg",
    iconAlt: "Bottle ready for recycling icon",
    ctaLabel: "See featured products",
    subcategories: [
      { slug: "antifoams", title: "Antifoams" },
      { slug: "detergents", title: "Detergents" },
      { slug: "separation-additives", title: "Separation Additives" },
    ],
  },
  {
    slug: "watercare",
    title: "WaterCARE",
    sourceUrl: "https://www.macdermidenthone.com/solutions/watercare",
    description:
      "Effective water resource management is a corporate responsibility. WaterCARE provides wastewater treatment chemistries tailored to solve customers’ unique challenges.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-11/aluminum-treatment-plant-side.png?itok=qLif8LG5",
    imageAlt: "Industrial scale aluminum treatment plant",
    icon: "https://www.macdermidenthone.com/sites/default/files/2024-01/Icon_AS_Earth%20in%20Water%20Drops.svg",
    iconAlt: "Earth in water drop icon",
    ctaLabel: "See featured products",
    subcategories: [
      { slug: "antifoaming-agents", title: "Antifoaming Agents" },
      { slug: "metal-precipitants", title: "Metal Precipitants" },
      { slug: "flocculants", title: "Flocculants" },
      { slug: "coagulants", title: "Coagulants" },
    ],
  },
  {
    slug: "all-solutions",
    title: "All Solutions",
    sourceUrl: "https://www.macdermidenthone.com/solutions",
    description:
      "Delivering innovative solutions designed to meet the evolving demands of the dynamic surface finishing industry and ever-changing customer requirements.",
    image:
      "https://www.macdermidenthone.com/sites/default/files/styles/desktop_main_menu/public/2023-11/macdermid-enthone-rack-strippers%20%282%29.jpg?itok=oTbN5isz",
    imageAlt: "Empty plating rack",
    icon: "https://www.macdermidenthone.com/sites/default/files/2023-11/Icon_AS_Shiny%20Surface.svg",
    iconAlt: "Shiny surface icon",
    ctaLabel: "All Solutions",
    landingOnly: true,
    subcategories: [],
  },
];

/** Landing page hero headline (distinct from Solutions nav label). */
export const landingHeroHeadline =
  "Surface finishing solutions for demanding industries";

export const landingHeroIntro =
  "Delivering innovative solutions designed to meet the evolving demands of the dynamic surface finishing industry and ever-changing customer requirements.";

export const SITE_ORIGIN_FALLBACK =
  typeof globalThis.location !== "undefined" ? globalThis.location.origin : "https://etehadia.com";

/**
 * @param {string} slug
 * @returns {Solution | undefined}
 */
export function getSolutionBySlug(slug) {
  return solutions.find((s) => s.slug === slug);
}

/** @returns {Solution[]} */
export function getDetailSolutions() {
  return solutions.filter((s) => !s.landingOnly);
}

/**
 * @param {string} currentSlug
 * @param {number} [limit]
 * @returns {Solution[]}
 */
export function getRelatedSolutions(currentSlug, limit = 4) {
  const pool = getDetailSolutions().filter((s) => s.slug !== currentSlug);
  if (!pool.length) return [];
  const seed = [...currentSlug].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const ix = seed % pool.length;
  const rotated = pool.slice(ix).concat(pool.slice(0, ix));
  return rotated.slice(0, limit);
}

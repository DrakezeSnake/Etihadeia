/**
 * @typedef {{
 *   slug: string;
 *   title: string;
 *   category: string;
 *   badge: string;
 *   description: string;
 *   summary: string;
 *   keyFeatures: string[];
 *   applications: string[];
 *   heroImage: string;
 *   imageAlt: string;
 *   images?: string[];
 * }} ProductDocument
 */

export const productDocumentGroups = [
  "Decorative systems",
  "Surface preparation and light metals",
  "Electroless nickel",
  "Anti-corrosion zinc",
  "Plastic recycling",
  "Wear resistance",
  "Water treatment",
];

/** @type {ProductDocument[]} */
export const productDocuments = [
  {
    slug: "decorative-copper-nickel-chrome",
    title: "Decorative Copper-Nickel-Chrome Systems",
    category: "Decorative systems",
    badge: "Decorative finishing",
    description:
      "Decorative copper, nickel, and chrome systems for high-quality bright finishes across automotive, hardware, plumbing, and visible industrial components.",
    summary:
      "A decorative systems overview for manufacturers that need reliable layered copper, nickel, and chrome finishes. The document positions MacDermid Enthone decorative technology for demanding appearance, corrosion, and production consistency requirements.",
    keyFeatures: [
      "Supports copper, nickel, and chrome decorative layer systems.",
      "Designed for high visual quality and demanding industry standards.",
      "Fits automotive, building hardware, plumbing, lighting, hand tools, and similar visible parts.",
      "Connects decorative appearance with process stability and corrosion performance.",
    ],
    applications: ["Automotive trim", "Plumbing fixtures", "Building hardware", "Lighting and hand tools"],
    heroImage: "/assets/document-images/decorative-copper-nickel-chrome-1.jpg",
    imageAlt: "Decorative plated hardware and bright metal finishing samples",
  },
  {
    slug: "ankor-wetter-lf-1000",
    title: "ANKOR WETTER LF 1000",
    category: "Decorative systems",
    badge: "PFAS-free wetter",
    description:
      "PFAS-free wetter for decorative hexavalent chromium plating, acting as a mist suppressant and surface tension reducer for metal and plating-on-plastic applications.",
    summary:
      "ANKOR WETTER LF 1000 is presented as a sustainable wetter for decorative chromium lines that need surface tension control without PFAS-containing wetters. It is intended to help operations modernize while keeping existing decorative chrome workflows practical.",
    keyFeatures: [
      "PFAS-free wetting technology for decorative hexavalent chromium plating.",
      "Combines mist suppression with surface tension reduction.",
      "Supports metal and plating-on-plastic applications.",
      "Designed to reduce transition complexity for existing chrome operations.",
    ],
    applications: ["Decorative chrome plating", "Plating on plastic", "Mist suppression", "Surface tension control"],
    heroImage: "/assets/document-images/ankor-wetter-lf-1000-1.jpg",
    imageAlt: "Decorative chrome plated components with bright reflective finish",
  },
  {
    slug: "ankor-hydraulics",
    title: "ANKOR Hydraulics",
    category: "Wear resistance",
    badge: "Hard chrome process",
    description:
      "Rapid hard chrome process for hydraulic rods, combining low operating cost with corrosion-resistant deposits for demanding hydraulic applications.",
    summary:
      "ANKOR Hydraulics focuses on hard chrome deposits for hydraulic rods where corrosion resistance, productivity, and operating cost matter. The process is positioned for hydraulic industry needs and production lines that require reliable rod performance.",
    keyFeatures: [
      "Rapid hard chrome process for hydraulic rods.",
      "Supports corrosion-resistant hard chrome deposits.",
      "Designed for low operating cost and strong production throughput.",
      "Uses foamless technology to support practical line operation.",
    ],
    applications: ["Hydraulic rods", "Hard chrome plating", "Wear-resistant surfaces", "Industrial motion components"],
    heroImage: "/assets/document-images/ankor-hydraulics-1.jpg",
    imageAlt: "Hydraulic rod and hard chrome industrial component detail",
  },
  {
    slug: "alumal-bond-703",
    title: "ALUMAL BOND 703",
    category: "Surface preparation and light metals",
    badge: "Cr-free conversion coating",
    description:
      "Cr-free conversion coating for aluminum that supports adhesion and under-layer corrosion performance before powder coating, painting, or lacquering.",
    summary:
      "ALUMAL BOND 703 is an aluminum conversion coating built around a chromium-free approach. It is intended for aluminum finishing workflows where adhesion and corrosion performance are needed before organic finishing layers.",
    keyFeatures: [
      "Chromium-free conversion coating for aluminum.",
      "Improves adhesion before powder coating, painting, or lacquering.",
      "Uses a polymer and zirconium/titanium-based system.",
      "Supports under-layer corrosion performance in light-metal finishing.",
    ],
    applications: ["Aluminum finishing", "Powder coating pretreatment", "Paint pretreatment", "Lacquer adhesion"],
    heroImage: "/assets/document-images/alumal-bond-703-1.jpg",
    imageAlt: "Aluminum parts and light metal surface treatment visual",
  },
  {
    slug: "additive-tr-101",
    title: "ADDITIVE TR 101",
    category: "Plastic recycling",
    badge: "Tray-to-tray additive",
    description:
      "Water-based detergent additive for the washing step of thermoformed PET package mechanical recycling processes.",
    summary:
      "ADDITIVE TR 101 supports tray-to-tray recycling workflows by improving the wash step for thermoformed packaging. It is designed to work at lower temperature and support delamination during PET mechanical recycling.",
    keyFeatures: [
      "Water-based detergent additive for thermoformed package recycling.",
      "Supports washing during PET mechanical recycling.",
      "Low working temperature helps avoid PET crystallization.",
      "Designed to improve delamination of polyolefin layers.",
    ],
    applications: ["PET tray recycling", "Thermoformed packaging", "Hot wash systems", "Mechanical plastic recycling"],
    heroImage: "/assets/document-images/additive-tr-101-1.jpg",
    imageAlt: "Plastic recycling process and washed PET materials",
    images: ["/assets/document-images/additive-tr-101-2.jpg"],
  },
  {
    slug: "enova-950",
    title: "ENOVA 950",
    category: "Electroless nickel",
    badge: "High phosphorus EN",
    description:
      "Semi-bright, high phosphorus, low-stress electroless nickel system with high deposition rates and corrosion resistance.",
    summary:
      "ENOVA 950 is a high-phosphorus electroless nickel system for applications where corrosion resistance, low stress, and production speed are important. It is suited to customers looking for semi-bright EN performance with strong bath behavior.",
    keyFeatures: [
      "Semi-bright high phosphorus electroless nickel system.",
      "High deposition rates for productive operation.",
      "Excellent corrosion resistance.",
      "Low-stress deposit profile for demanding components.",
    ],
    applications: ["Electroless nickel plating", "Corrosion-resistant components", "Low-stress deposits", "Industrial metal finishing"],
    heroImage: "/assets/document-images/enova-950-1.jpg",
    imageAlt: "Electroless nickel plated industrial components",
  },
  {
    slug: "enova-ef-509",
    title: "ENOVA EF 509",
    category: "Electroless nickel",
    badge: "Reduced-stress EN",
    description:
      "Reduced-stress semi-bright electroless nickel process with lead- and cadmium-free chemistry, long solution life, and tank stability.",
    summary:
      "ENOVA EF 509 is aimed at electroless nickel lines that need stable semi-bright deposits with reduced stress. The document highlights chemistry stewardship, bath stability, and reliable deposit performance.",
    keyFeatures: [
      "Lead- and cadmium-free electroless nickel process.",
      "Reduced-stress semi-bright deposits.",
      "Long solution life and tank stability.",
      "Supports blister-free deposition and reliable production control.",
    ],
    applications: ["Semi-bright EN deposits", "Reduced-stress plating", "Stable EN baths", "Functional corrosion protection"],
    heroImage: "/assets/document-images/enova-ef-509-1.jpg",
    imageAlt: "Semi-bright electroless nickel surface finishing components",
  },
  {
    slug: "envirozin-240",
    title: "Envirozin 240",
    category: "Anti-corrosion zinc",
    badge: "Alkaline zinc",
    description:
      "Alkaline non-cyanide zinc process producing uniform, bright deposits over a wide range of current densities.",
    summary:
      "Envirozin 240 is a zinc plating process for bright, uniform deposits that can be paired with trivalent passivates. It supports customers who need corrosion protection and decorative consistency across zinc-based coatings.",
    keyFeatures: [
      "Uniform bright deposits across a wide current-density range.",
      "Compatible with trivalent blue, iridescent, yellow, and black zinc passivates.",
      "Excellent adhesion to base metal.",
      "Designed for zinc-based anti-corrosion coating requirements.",
    ],
    applications: ["Alkaline zinc plating", "Fasteners and hardware", "Trivalent passivate systems", "Corrosion protection"],
    heroImage: "/assets/document-images/envirozin-240-1.jpg",
    imageAlt: "Zinc plated industrial fasteners and anti-corrosion finish",
  },
  {
    slug: "plastic-recycling-brochure",
    title: "Plastic Recycling Additives",
    category: "Plastic recycling",
    badge: "PET recycling portfolio",
    description:
      "Portfolio overview for PET recycling additives, including detergents, separation additives, anti-foaming agents, and mechanical recycling support.",
    summary:
      "The Plastic Recycling brochure presents a complete additive portfolio for PET mechanical recycling. It covers detergents for hot wash, plastic separation support, anti-foaming agents, and formulations for varied recycling technologies.",
    keyFeatures: [
      "Industry-focused detergents for PET hot wash operations.",
      "Specialty additives for plastic separation.",
      "Anti-foaming agents for recycling process control.",
      "Formulations for multiple mechanical recycling technologies.",
    ],
    applications: ["PET recycling", "Hot wash systems", "Plastic separation", "Mechanical recycling operations"],
    heroImage: "/assets/plastic-recycling-card.jpeg",
    imageAlt: "Plastic bottle formed from blue and clear recycled plastic fragments",
    images: [
      "/assets/document-images/plastic-recycling-brochure-2.jpg",
      "/assets/document-images/plastic-recycling-brochure-3.jpg",
    ],
  },
  {
    slug: "prelik-1700",
    title: "PRELIK 1700",
    category: "Surface preparation and light metals",
    badge: "Lower-temperature cleaner",
    description:
      "Future-forward surface preparation product designed for lower-temperature electro-cleaners and reduced heating energy costs.",
    summary:
      "PRELIK 1700 is positioned as a modern surface preparation system for operations looking to lower cleaner temperature and energy demand. It is designed for electrolytic and soak cleaning use cases.",
    keyFeatures: [
      "Designed for lower-temperature electro-cleaning.",
      "Can help reduce heating energy costs.",
      "Works as an electrolytic and soak cleaner.",
      "Supports surface preparation before finishing operations.",
    ],
    applications: ["Electro-cleaning", "Soak cleaning", "Energy-conscious pretreatment", "Surface preparation"],
    heroImage: "/assets/document-images/prelik-1700-1.jpg",
    imageAlt: "Surface preparation line and industrial cleaning process",
  },
  {
    slug: "iridite-tcp-system",
    title: "Iridite TCP System",
    category: "Surface preparation and light metals",
    badge: "Conversion coating",
    description:
      "Iridite TCP conversion coating system with strong corrosion resistance, adhesive and paint compatibility, and flexible process options.",
    summary:
      "Iridite TCP is a light-metal finishing system for corrosion resistance and downstream coating compatibility. The document highlights single- and double-component process flexibility.",
    keyFeatures: [
      "High corrosion resistance under recognized salt-spray standards.",
      "Strong compatibility with adhesives and paint.",
      "Available in versatile single- and double-component process formats.",
      "Suited to aluminum conversion coating workflows.",
    ],
    applications: ["Aluminum conversion coating", "Paint adhesion", "Adhesive bonding", "Corrosion-resistant pretreatment"],
    heroImage: "/assets/document-images/iridite-tcp-system-1.jpg",
    imageAlt: "Light metal conversion coating and treated aluminum surface",
  },
  {
    slug: "cuprostar-1600-1610",
    title: "CUPROSTAR 1600 and 1610",
    category: "Decorative systems",
    badge: "Bright acid copper",
    description:
      "Production-proven bright acid copper plating solutions that produce ductile layers with variable leveling performance.",
    summary:
      "CUPROSTAR 1600 and 1610 are bright acid copper systems used as intermediate layers in nickel-chromium finishing sequences. They are intended for decorative systems that need bright, ductile copper deposits.",
    keyFeatures: [
      "Bright acid copper plating solutions.",
      "Produces ductile acid copper layers.",
      "Variable leveling performance for decorative finishing.",
      "Supports nickel-chromium layer systems.",
    ],
    applications: ["Bright acid copper", "Decorative nickel-chrome systems", "Intermediate copper layers", "Leveling before final finish"],
    heroImage: "/assets/document-images/cuprostar-1600-1610-1.jpg",
    imageAlt: "Bright acid copper plating and decorative metal finish",
    images: ["/assets/document-images/cuprostar-1600-1610-2.jpg"],
  },
  {
    slug: "castelox",
    title: "CASTELOX",
    category: "Surface preparation and light metals",
    badge: "Anodizing support",
    description:
      "Technology for anodizing high-silicon aluminum castings, improving aesthetics and efficiency by addressing surface imperfections.",
    summary:
      "CASTELOX is a system for anodizing high-silicon aluminum castings where aesthetics and process efficiency can be challenged by casting surface conditions. It targets surface imperfections tied to silicon-rich zones.",
    keyFeatures: [
      "Supports anodizing of high-silicon aluminum castings.",
      "Addresses surface imperfections from silicon-rich zones.",
      "Improves oxide appearance and consistency.",
      "Designed for aesthetic and process efficiency improvements.",
    ],
    applications: ["Aluminum castings", "Anodizing systems", "High-silicon components", "Aesthetic light-metal finishes"],
    heroImage: "/assets/light-metal-finishing-card.jpeg",
    imageAlt: "Vertical reflective light metal finishing panels",
  },
  {
    slug: "niklad-eco-mp",
    title: "NiKlad Eco MP",
    category: "Electroless nickel",
    badge: "Low-metal medium phosphorus EN",
    description:
      "Medium-phosphorus, low-metal electroless nickel process designed as a lead- and cadmium-free option with reduced drag-out.",
    summary:
      "NiKlad Eco MP is a low-metal medium-phosphorus electroless nickel process for customers seeking a more efficient EN bath profile. The document emphasizes chemistry stewardship and drag-out reduction.",
    keyFeatures: [
      "Medium-phosphorus low-metal electroless nickel process.",
      "Lead- and cadmium-free chemistry.",
      "Lower process solution drag-out into rinses.",
      "Supports efficient bath operation and bright EN deposits.",
    ],
    applications: ["Medium-phosphorus EN", "Low-metal bath operation", "Lead-free EN programs", "Functional nickel finishing"],
    heroImage: "/assets/electroless-nickel-card.jpeg",
    imageAlt: "Electroless nickel plated precision component on a reflective surface",
  },
  {
    slug: "evolve-chrome-free-etch",
    title: "evolve Chrome-Free Etch",
    category: "Surface preparation and light metals",
    badge: "Cr(VI)-free POP process",
    description:
      "Environmentally compliant Cr(VI)-free process for plating on plastics, designed as a PFOS/PFAS-free and adaptable alternative.",
    summary:
      "evolve and evolve BOND are presented as chrome-free process technologies for plating on plastics. The document focuses on compliance, adaptability, and a path away from hexavalent chromium and PFAS-containing chemistries.",
    keyFeatures: [
      "Cr(VI)-free process for plating on plastics.",
      "PFOS/PFAS-free approach.",
      "Versatile and adaptable process positioning.",
      "Supports environmentally compliant POP pretreatment.",
    ],
    applications: ["Plating on plastics", "Chrome-free etch", "POP pretreatment", "Decorative plastic metallization"],
    heroImage: "/assets/document-images/evolve-chrome-free-etch-1.jpg",
    imageAlt: "Plating on plastic process and chrome-free etch technology visual",
  },
  {
    slug: "eplating-case-study",
    title: "ePlating and Surface Engineering Case Study",
    category: "Anti-corrosion zinc",
    badge: "ZinKlad certification",
    description:
      "Case study on ePlating and Surface Engineering accelerating growth through ZinKlad certification and high-performance surface treatments.",
    summary:
      "This case study shows how ZinKlad certification supported ePlating and Surface Engineering in expanding high-performance surface treatment capabilities for demanding automotive and engineering customers.",
    keyFeatures: [
      "Customer story focused on ZinKlad certification.",
      "Connects certification with growth and market credibility.",
      "Highlights high-performance surface treatment capability.",
      "Relevant for applicators serving automotive and engineering markets.",
    ],
    applications: ["ZinKlad certification", "Automotive finishing", "Engineering coatings", "Applicator growth strategy"],
    heroImage: "/assets/document-images/eplating-case-study-1.jpg",
    imageAlt: "Surface engineering production facility and case study visual",
    images: [
      "/assets/document-images/eplating-case-study-2.jpg",
      "/assets/document-images/eplating-case-study-3.jpg",
    ],
  },
  {
    slug: "zinklad-2024",
    title: "ZinKlad 2024 Factsheets",
    category: "Anti-corrosion zinc",
    badge: "Zinc coating portfolio",
    description:
      "Factsheet collection for ZinKlad zinc-based coating systems, including decorative chromium-like finishes and corrosion-resistant performance.",
    summary:
      "The ZinKlad factsheets summarize a family of zinc-based sacrificial coating systems. They cover decorative chromium-like appearance, organic coating bases, passivate systems, and corrosion-performance positioning.",
    keyFeatures: [
      "Zinc-based sacrificial coating portfolio.",
      "Supports corrosion-resistant decorative and functional finishes.",
      "Includes passivate and coating system positioning.",
      "Relevant for parts requiring durable zinc performance.",
    ],
    applications: ["Zinc coatings", "Automotive hardware", "Decorative anti-corrosion finishes", "Organic coating bases"],
    heroImage: "/assets/anti-corrosion-card.jpeg",
    imageAlt: "Anti-corrosion coated bolts with silver and black finishes",
    images: [
      "/assets/document-images/zinklad-2024-2.jpg",
      "/assets/document-images/zinklad-2024-3.jpg",
    ],
  },
  {
    slug: "wear-resistant-coatings",
    title: "Wear Resistant Coatings",
    category: "Wear resistance",
    badge: "Wear technologies",
    description:
      "Wear resistance technologies, with electroless nickel positioned for challenging wear and corrosion applications.",
    summary:
      "Wear resistant coatings explain how electroless nickel and related coating technologies are used when engineers need strong wear and corrosion resistance on demanding components.",
    keyFeatures: [
      "Wear resistance technologies for demanding components.",
      "Positions electroless nickel for challenging applications.",
      "Connects wear resistance with corrosion performance.",
      "Useful for engineering-driven coating selection.",
    ],
    applications: ["Wear-resistant components", "Electroless nickel", "Engineering coatings", "Corrosion and abrasion control"],
    heroImage: "/assets/document-images/wear-resistant-coatings-1.jpg",
    imageAlt: "Wear-resistant coated industrial part and performance technology visual",
    images: [
      "/assets/document-images/wear-resistant-coatings-2.jpg",
      "/assets/document-images/wear-resistant-coatings-3.jpg",
    ],
  },
  {
    slug: "watercare",
    title: "WaterCARE",
    category: "Water treatment",
    badge: "Wastewater treatment",
    description:
      "Consultative wastewater treatment chemistry portfolio tailored to unique system and operational needs.",
    summary:
      "WaterCARE focuses on customized wastewater treatment chemistry. It is intended for facilities that need tailored treatment programs based on their system, operating conditions, and environmental responsibilities.",
    keyFeatures: [
      "Customized wastewater treatment chemistries.",
      "Consultative approach to system-specific needs.",
      "Supports operational and treatment-performance requirements.",
      "Designed for responsible water resource management.",
    ],
    applications: ["Wastewater treatment", "Metal finishing effluent", "Water resource management", "Customized treatment chemistry"],
    heroImage: "/assets/document-images/watercare-1.jpg",
    imageAlt: "Water treatment and wastewater chemistry support visual",
  },
];

export function getProductDocumentBySlug(slug) {
  return productDocuments.find((doc) => doc.slug === slug);
}

export function getProductDocumentsByCategory(category) {
  return productDocuments.filter((doc) => doc.category === category);
}

export function getProductDocumentGroups() {
  return productDocumentGroups
    .map((category) => ({
      category,
      documents: getProductDocumentsByCategory(category),
    }))
    .filter((group) => group.documents.length > 0);
}

export function getRelatedProductDocuments(slug, limit = 3) {
  const doc = getProductDocumentBySlug(slug);
  if (!doc) return [];

  const sameCategory = productDocuments.filter((item) => item.slug !== slug && item.category === doc.category);
  const fallback = productDocuments.filter((item) => item.slug !== slug && item.category !== doc.category);
  return [...sameCategory, ...fallback].slice(0, limit);
}

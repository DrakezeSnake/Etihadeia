const commonServices = [
  "process selection",
  "surface preparation",
  "plating chemistry supply",
  "laboratory analysis",
  "technical troubleshooting",
];

export const industries = [
  {
    slug: "aerospace-defense",
    pageKey: "industry-aerospace-defense",
    title: "Aerospace and Defense",
    summary:
      "Precision chemistry for high-performance components requiring extreme durability and corrosion resistance.",
    cardImage: ["/assets/engineer-inspecting-components.jpg", "Engineer inspecting plated aerospace and defense components"],
    heroImage: ["/assets/engineer-inspecting-components.jpg", "Engineer inspecting finished industrial components"],
    metrics: [
      ["Wear", "Hard chrome and nickel systems for stressed surfaces"],
      ["Control", "Bath analysis and operating-window support"],
      ["Defense", "Durable finishes for demanding components"],
    ],
    intro:
      "Electroplating supports aerospace and defense manufacturing by improving corrosion resistance, wear resistance, hardness, and dimensional performance on critical metal parts. El Etehadia offers electroplating chemistry, bath control, laboratory analysis, and technical support for manufacturers that serve demanding precision markets.",
    sections: [
      {
        type: "split",
        eyebrow: "Industry uses",
        heading: "Where electroplating supports aerospace and defense components.",
        body:
          "Aerospace work often uses nickel, electroless nickel, zinc-nickel, and hard chrome finishes where parts need stable performance on complex shapes, sliding surfaces, or exposed assemblies.",
        items: [
          ["Landing and actuator components", "Hard chrome and nickel systems help improve wear resistance, surface hardness, and corrosion protection on moving or load-bearing surfaces.", ["/assets/Hard-Chrome-2.jpg", "Hard chrome plated industrial component"]],
          ["Precision housings and brackets", "Nickel and zinc-based finishes can support corrosion resistance and coating uniformity on machined parts and complex geometries.", ["/assets/industrial-manufacturing-parts.jpg", "Industrial precision parts for plating"]],
          ["Electrical and signal hardware", "Copper, nickel, tin, and precious-metal sequences can support conductivity, solderability, and protection for selected connector and contact applications.", ["/assets/silver-electrical-contacts38216278-077f-4e99-978e-d34e24e39b03.webp", "Plated electrical contacts"]],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Finish fit",
        heading: "Typical electroplating support for this industry.",
        rows: [
          ["Hard chrome", "Wear resistance, hardness, and sliding performance", "Actuator rods, shafts, tooling, and high-wear metal surfaces"],
          ["Electroless nickel", "Uniform coverage and corrosion resistance on complex parts", "Precision machined parts, housings, and intricate components"],
          ["Zinc-nickel and nickel", "Corrosion protection and robust underlayers", "Fasteners, brackets, assemblies, and exposed metal hardware"],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "What we offer",
        heading: "Technical support for controlled plating processes.",
        body:
          `El Etehadia offers ${commonServices.join(", ")} for manufacturers that need durable aerospace and defense finishes. Our team can help review the substrate, finish target, bath condition, and production issue before recommending the right product family or corrective action.`,
        image: ["/assets/laboratory-analysis-technician.jpg", "Laboratory technician analyzing plating chemistry"],
      },
    ],
  },
  {
    slug: "appliances",
    pageKey: "industry-appliances",
    title: "Appliances",
    summary: "Decorative and functional plating for white goods, consumer electronics, and household hardware.",
    cardImage: ["/assets/electroplating-services-500x500.webp", "Electroplated hardware for appliance applications"],
    heroImage: ["/assets/electroplating-services-500x500.webp", "Electroplated hardware and appliance components"],
    metrics: [
      ["Appearance", "Bright nickel-chrome and decorative finishes"],
      ["Protection", "Zinc, nickel, and lacquer systems"],
      ["Plastics", "Metallized plastic trims and controls"],
    ],
    intro:
      "Electroplating is used in appliances to give components a durable decorative finish, improve corrosion protection, and add conductivity or wear resistance where needed. El Etehadia supports appliance manufacturers with plating chemistry, surface preparation products, lacquers, lab analysis, and line troubleshooting.",
    sections: [
      {
        type: "split",
        eyebrow: "Industry uses",
        heading: "Finishes for visible parts, hardware, and functional assemblies.",
        body:
          "Appliance components often combine appearance requirements with repeated handling, humidity exposure, and cleaning chemicals, making process control and surface preparation especially important.",
        items: [
          ["Decorative trim and controls", "Nickel-chrome and plating-on-plastic systems help create bright, durable surfaces for knobs, handles, panels, and consumer-facing trim.", ["/assets/Plating-coffee-cover-on-ABS-P2MC2.jpg", "Plated plastic decorative appliance component"]],
          ["Fasteners and brackets", "Zinc and nickel finishes help protect appliance hardware from corrosion during storage, assembly, and use.", ["/assets/optimized/zinc-plated-industrial-fasteners.webp", "Plated fasteners for appliance hardware"]],
          ["Protective post-finishing", "Lacquers and protective finishes can improve appearance retention and handling durability for decorative metal parts.", ["/assets/LHZA11508.BLK.webp", "Decorative plated hardware with protective finishing"]],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Finish fit",
        heading: "Common appliance plating requirements.",
        rows: [
          ["Nickel-chrome", "Brightness, cleanability, and wear resistance", "Handles, knobs, control trim, and visible hardware"],
          ["Zinc plating", "Economical corrosion protection", "Fasteners, brackets, clips, and internal metal hardware"],
          ["Plating on plastic", "Metallic appearance on lightweight parts", "ABS and engineered-plastic decorative trim"],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "What we offer",
        heading: "Chemistry and troubleshooting for consistent appliance finishes.",
        body:
          "El Etehadia offers nickel, chrome, zinc, copper, plating-on-plastic, surface preparation, lacquers, laboratory analysis, and technical support for appliance finishing lines that need stable appearance and repeatable quality.",
        image: ["/assets/service-plating-line-troubleshooting.jpeg", "Technical support for plating line troubleshooting"],
      },
    ],
  },
  {
    slug: "automotive",
    pageKey: "industry-automotive",
    title: "Automotive",
    summary: "OEM-grade plating solutions for interior trim, exterior brightwork, and engine components.",
    cardImage: ["/assets/aly73717b77_0.webp", "Automotive and plated industrial components"],
    heroImage: ["/assets/aly73717b77_0.webp", "Automotive and plated industrial components"],
    metrics: [
      ["Corrosion", "Zinc and zinc-alloy protection"],
      ["Decorative", "Nickel-chrome for brightwork and trim"],
      ["Functional", "Hard chrome and electroless nickel"],
    ],
    intro:
      "Automotive manufacturers use electroplating to protect components from corrosion, create high-quality decorative finishes, metallize plastic trim, and improve wear performance on selected functional parts. El Etehadia offers the plating chemistry, additives, surface preparation, and technical support needed for automotive finishing workflows.",
    sections: [
      {
        type: "split",
        eyebrow: "Industry uses",
        heading: "Automotive finishes for protection, appearance, and function.",
        body:
          "Vehicle parts face road salt, humidity, handling, vibration, and visual quality requirements. Electroplating helps balance durability and appearance across metal and plastic components.",
        items: [
          ["Interior and exterior trim", "Copper-nickel-chrome and plating-on-plastic processes can create bright, durable finishes for grilles, badges, handles, bezels, and decorative trim.", ["/assets/Plating-coffee-cover-on-ABS-P2MC2.jpg", "Chrome plated plastic trim component"]],
          ["Fasteners and brackets", "Zinc and zinc-alloy systems are widely used to protect automotive hardware from corrosion in demanding environments.", ["/assets/optimized/zinc-plated-industrial-fasteners.webp", "Zinc plated automotive fasteners"]],
          ["Functional wear surfaces", "Hard chrome and electroless nickel can support wear resistance, corrosion protection, and uniform coating needs on selected mechanical components.", ["/assets/Hard-Chrome-2.jpg", "Hard chrome plated automotive component"]],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Finish fit",
        heading: "Typical automotive electroplating systems.",
        rows: [
          ["Zinc and zinc-alloy", "Corrosion protection for steel hardware", "Fasteners, clips, brackets, housings, and underbody components"],
          ["Nickel-chrome", "Decorative brightness and surface durability", "Trim, handles, badges, grilles, bezels, and visible hardware"],
          ["Electroless nickel", "Uniform coverage and corrosion resistance", "Precision parts, complex geometries, and functional assemblies"],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "What we offer",
        heading: "Support for automotive plating consistency.",
        body:
          "El Etehadia offers plating chemistry, additives, bath analysis, surface preparation products, and troubleshooting support for manufacturers working with automotive metal and plastic finishing requirements.",
        image: ["/assets/service-process-optimization.png", "Process optimization for electroplating production"],
      },
    ],
  },
  {
    slug: "building-machinery",
    pageKey: "industry-building-machinery",
    title: "Building and Machinery",
    summary: "Robust protective finishes for architectural hardware, fasteners, and heavy industrial machinery.",
    cardImage: ["/assets/metal-fabrication-800x600-1.jpg", "Metal fabrication work for industrial machinery"],
    heroImage: ["/assets/metal-fabrication-800x600-1.jpg", "Metal fabrication work for industrial machinery"],
    metrics: [
      ["Heavy duty", "Wear-resistant hard chrome"],
      ["Outdoor", "Anti-corrosion zinc and nickel systems"],
      ["Hardware", "Decorative and protective finishing"],
    ],
    intro:
      "Building products and industrial machinery rely on plated finishes to resist corrosion, reduce wear, and improve the appearance of hardware and exposed metal parts. El Etehadia offers electroplating products and technical support for protective, functional, and decorative finishing lines.",
    sections: [
      {
        type: "split",
        eyebrow: "Industry uses",
        heading: "Protecting hardware and machinery that work in tough environments.",
        body:
          "Construction and machinery components often need practical protection against abrasion, outdoor exposure, handling, and long service intervals.",
        items: [
          ["Fasteners and structural hardware", "Zinc, zinc-alloy, nickel, and post-treatment systems help protect screws, bolts, clips, hinges, and brackets.", ["/assets/optimized/zinc-plated-industrial-fasteners.webp", "Plated fasteners for building hardware"]],
          ["Hydraulic and moving parts", "Hard chrome and electroless nickel can support wear resistance and corrosion protection on shafts, rods, rollers, and machine elements.", ["/assets/Hard-Chrome-2.jpg", "Hard chrome plated machinery part"]],
          ["Architectural hardware", "Nickel-chrome, copper, and lacquer systems can improve appearance and durability for visible handles, fittings, and access hardware.", ["/assets/LHZA11508.BLK.webp", "Decorative architectural hardware"]],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Finish fit",
        heading: "Common building and machinery finish needs.",
        rows: [
          ["Zinc plating", "Cost-effective corrosion protection", "Fasteners, brackets, frames, clips, and hardware"],
          ["Hard chrome", "Hardness and wear resistance", "Shafts, rods, rollers, molds, and high-contact surfaces"],
          ["Nickel and chrome", "Decorative and protective surface quality", "Architectural fittings, handles, and exposed components"],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "What we offer",
        heading: "Products and line support for industrial finishing.",
        body:
          "El Etehadia offers zinc, nickel, chrome, copper, electroless nickel, hard chrome, lacquers, surface preparation products, machines, accessories, laboratory analysis, and technical troubleshooting for building and machinery applications.",
        image: ["/assets/service-machines-accessories.png", "Electroplating machines and accessories"],
      },
    ],
  },
  {
    slug: "fashion-packaging",
    pageKey: "industry-fashion-packaging",
    title: "Fashion and Packaging",
    summary: "High-aesthetic plating for accessories, jewelry, cosmetics packaging, and luxury goods.",
    cardImage: ["/assets/LHZA11508.BLK.webp", "Decorative plated hardware and luxury finish"],
    heroImage: ["/assets/LHZA11508.BLK.webp", "Decorative plated hardware and luxury finish"],
    metrics: [
      ["Color", "Copper, nickel, chrome, tin, and alloy finishes"],
      ["Luxury", "High-aesthetic decorative surfaces"],
      ["Protection", "Lacquers and post-finishing support"],
    ],
    intro:
      "Fashion accessories and premium packaging use electroplating to create metallic color, reflectivity, tactile quality, and better resistance to handling wear. El Etehadia offers decorative plating chemistry, lacquers, surface preparation, and technical support for manufacturers producing high-appearance parts.",
    sections: [
      {
        type: "split",
        eyebrow: "Industry uses",
        heading: "Decorative electroplating for products people see and touch.",
        body:
          "Decorative parts need attractive color and shine, but they also need adhesion, tarnish control, and resistance to repeated handling.",
        items: [
          ["Fashion accessories", "Nickel, chrome, copper, tin, and alloy finishes can create bright, satin, antique, or premium metallic effects for buckles, trims, handles, and accessories.", ["/assets/LHZA11508.BLK.webp", "Decorative plated fashion hardware"]],
          ["Cosmetic and luxury packaging", "Decorative plating can give caps, closures, display parts, and packaging accents a premium metallic finish.", ["/assets/paper-bag-bakery.avif", "Premium packaging visual for decorative finishes"]],
          ["Protective finishing", "Lacquers and post-treatment systems help preserve appearance, reduce tarnishing, and improve handling durability.", ["/assets/img-4775-a.jpg", "Lacquers and protective finishing materials"]],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Finish fit",
        heading: "Common decorative finishing priorities.",
        rows: [
          ["Nickel and chrome", "Brightness, reflectivity, and wear resistance", "Accessories, closures, trims, and visible metal parts"],
          ["Copper and alloy finishes", "Warm metallic color and undercoat leveling", "Decorative sequences, antique effects, and base layers"],
          ["Lacquers", "Appearance protection and handling durability", "High-touch fashion and packaging components"],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "What we offer",
        heading: "Decorative chemistry with practical production support.",
        body:
          "El Etehadia offers decorative plating chemistry, colors, additives, lacquers, surface preparation, laboratory checks, and troubleshooting support to help manufacturers reach repeatable color, brightness, adhesion, and surface quality.",
        image: ["/assets/plating-chemistry-dosing-station.png", "Plating chemistry dosing station"],
      },
    ],
  },
  {
    slug: "oil-gas",
    pageKey: "industry-oil-gas",
    title: "Oil and Gas",
    summary: "Specialized anti-corrosive coatings for equipment operating in harsh subterranean environments.",
    cardImage: ["/assets/Electroplating-Surface-Finish-Supplier-In-China.jpg", "Protective electroplating for oil and gas components"],
    heroImage: ["/assets/industry-oil-gas.png", "Oil and gas industry equipment"],
    metrics: [
      ["Corrosion", "Nickel and electroless nickel protection"],
      ["Wear", "Hard chrome for sliding and abrasive surfaces"],
      ["Reliability", "Technical control for harsh service parts"],
    ],
    intro:
      "Oil and gas equipment is exposed to moisture, chemicals, abrasion, pressure, and harsh operating environments. Electroplating can improve corrosion resistance, wear resistance, hardness, and surface performance on selected components. El Etehadia offers chemistry, bath analysis, and technical support for protective and functional finishing needs.",
    sections: [
      {
        type: "split",
        eyebrow: "Industry uses",
        heading: "Protective plating for parts exposed to corrosion and wear.",
        body:
          "Functional finishes are often chosen for oil and gas components where unprotected steel or machined metal would be vulnerable to attack, abrasion, or repeated movement.",
        items: [
          ["Pump, valve, and actuator parts", "Electroless nickel and hard chrome systems can support corrosion and wear resistance on complex or sliding components.", ["/assets/Hard-Chrome-2.jpg", "Hard chrome plated functional component"]],
          ["Fasteners and fittings", "Zinc, zinc-alloy, nickel, and post-treatment systems help protect exposed hardware, couplings, and fittings.", ["/assets/optimized/zinc-plated-industrial-fasteners.webp", "Plated fasteners for harsh environments"]],
          ["Process control", "Bath analysis and technical troubleshooting help keep protective finishes consistent when parts require reliable surface performance.", ["/assets/laboratory-analysis-technician.jpg", "Laboratory analysis for plating bath control"]],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Finish fit",
        heading: "Common oil and gas plating requirements.",
        rows: [
          ["Electroless nickel", "Uniform corrosion protection on complex shapes", "Valves, housings, fittings, and precision parts"],
          ["Hard chrome", "Hardness, wear resistance, and low-friction surface support", "Rods, shafts, pumps, and sliding surfaces"],
          ["Zinc and nickel systems", "Protective finishing for hardware and assemblies", "Fasteners, brackets, couplings, and external parts"],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "What we offer",
        heading: "Surface-finishing support for harsh operating environments.",
        body:
          "El Etehadia offers anti-corrosion plating products, electroless nickel, hard chrome, zinc systems, surface preparation, laboratory analysis, and troubleshooting for manufacturers serving oil and gas applications.",
        image: ["/assets/service-process-optimization.jpeg", "Process optimization for protective plating"],
      },
    ],
  },
  {
    slug: "plastic-recycling",
    pageKey: "industry-plastic-recycling",
    title: "Plastic Recycling",
    summary: "Chemical solutions for preparation and plating on recycled substrates and industrial plastics.",
    cardImage: ["/assets/dsc04819.jpg", "Plating on plastic and decorative plastic metallization"],
    heroImage: ["/assets/dsc04819.jpg", "Plating on plastic and decorative plastic metallization"],
    metrics: [
      ["Preparation", "Cleaning, etching, activation, and adhesion support"],
      ["Plastics", "ABS and engineered-plastic metallization workflows"],
      ["Testing", "Technical checks for substrate variability"],
    ],
    intro:
      "Plating on plastic can turn selected polymers into metallic-looking, more durable, or conductive components. Recycled and variable plastic substrates require careful surface preparation, activation, and testing. El Etehadia offers plating-on-plastic chemistry, preparation products, laboratory support, and process troubleshooting.",
    sections: [
      {
        type: "split",
        eyebrow: "Industry uses",
        heading: "Preparing plastic surfaces for reliable metallization.",
        body:
          "Plastic substrates need controlled cleaning, etching, activation, and metal deposition to achieve adhesion and a consistent finish, especially when material history varies.",
        items: [
          ["Decorative metallization", "Nickel-chrome and copper-nickel-chrome systems can create metallic finishes on selected ABS and engineered-plastic parts.", ["/assets/Plating-coffee-cover-on-ABS-P2MC2.jpg", "Chrome plated ABS plastic component"]],
          ["Conductive surfaces", "Plating can add electrical conductivity to non-conductive plastic surfaces for selected electronics, shielding, and contact applications.", ["/assets/silver-electrical-contacts38216278-077f-4e99-978e-d34e24e39b03.webp", "Plated conductive contacts"]],
          ["Substrate evaluation", "Laboratory review and trial support help manufacturers understand adhesion risks, surface defects, and finish consistency on recycled or mixed-material plastics.", ["/assets/water-laboratory-testing-services.jpg", "Laboratory support for plating processes"]],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Finish fit",
        heading: "Key plating-on-plastic process needs.",
        rows: [
          ["Surface preparation", "Cleaning, etching, conditioning, and activation", "Adhesion and coverage before metal deposition"],
          ["Copper and nickel layers", "Conductivity, leveling, and corrosion-resistance foundation", "Decorative and functional plastic metallization"],
          ["Chrome and lacquers", "Final appearance and handling protection", "Visible trim, controls, accessories, and consumer goods"],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "What we offer",
        heading: "Support for plating on plastic and recycled substrates.",
        body:
          "El Etehadia offers plating-on-plastic chemistry, activation and preparation products, copper, nickel, chrome, lacquers, bath analysis, and troubleshooting to help manufacturers improve adhesion and finish consistency.",
        image: ["/assets/service-plating-line-troubleshooting.jpeg", "Plating line troubleshooting for plastic metallization"],
      },
    ],
  },
  {
    slug: "plumbing-sanitary-fittings",
    pageKey: "industry-plumbing-sanitary-fittings",
    title: "Plumbing and Sanitary Fittings",
    summary: "High-quality nickel and chrome plating for faucets, valves, and bathroom accessories.",
    cardImage: ["/assets/electroplating-on-bathroom-fittings-service.jpg", "Electroplating on bathroom fittings"],
    heroImage: ["/assets/sanitary-fittings.jpeg", "Sanitary fittings and plated bathroom hardware"],
    metrics: [
      ["Brightwork", "Decorative nickel-chrome systems"],
      ["Durability", "Corrosion and handling resistance"],
      ["Quality", "Process control for visible surfaces"],
    ],
    intro:
      "Faucets, valves, shower parts, bathroom accessories, and sanitary fittings rely on electroplating for bright appearance, cleanability, corrosion resistance, and scratch resistance. El Etehadia offers nickel, chrome, copper, surface preparation, lacquers, laboratory analysis, and technical support for sanitary finishing lines.",
    sections: [
      {
        type: "split",
        eyebrow: "Industry uses",
        heading: "Polished surfaces that must withstand water, cleaning, and daily handling.",
        body:
          "Sanitary hardware is judged by appearance and long-term performance, so polishing, cleaning, copper leveling, nickel thickness, chrome control, and post-treatment all matter.",
        items: [
          ["Faucets and mixers", "Copper-nickel-chrome sequences help create smooth, bright surfaces with corrosion resistance and everyday wear protection.", ["/assets/electroplating-on-bathroom-fittings-service.jpg", "Bathroom fitting in electroplating service"]],
          ["Valves and accessories", "Nickel and chrome finishes support cleanability, tarnish resistance, and a durable decorative surface on brass and steel parts.", ["/assets/sanitary-fittings.jpeg", "Plated sanitary fittings"]],
          ["Process troubleshooting", "Bath analysis and line support help resolve defects such as poor adhesion, pits, dullness, staining, and uneven coverage.", ["/assets/laboratory-analysis-technician.jpg", "Laboratory analysis for sanitary plating quality"]],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Finish fit",
        heading: "Common sanitary fitting finish requirements.",
        rows: [
          ["Copper undercoat", "Leveling and base preparation", "Brass fittings, faucets, handles, and trim"],
          ["Nickel plating", "Corrosion resistance and bright foundation", "Primary protective layer for decorative chrome systems"],
          ["Chrome plating", "Hard, bright, cleanable final surface", "Faucets, valves, shower parts, and bathroom accessories"],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "What we offer",
        heading: "Products and technical support for sanitary plating.",
        body:
          "El Etehadia offers copper, nickel, chrome, surface preparation products, additives, lacquers, bath analysis, and troubleshooting for sanitary fittings manufacturers that need consistent brightness and corrosion resistance.",
        image: ["/assets/plating-chemistry-dosing-station.png", "Plating chemistry support for sanitary fittings"],
      },
    ],
  },
  {
    slug: "renewable-energy",
    pageKey: "industry-renewable-energy",
    title: "Renewable Energy",
    summary: "Advanced coatings for solar panel frames, wind turbine components, and energy storage systems.",
    cardImage: ["/assets/silver-electrical-contacts38216278-077f-4e99-978e-d34e24e39b03.webp", "Plated contacts for renewable energy systems"],
    heroImage: ["/assets/silver-electrical-contacts38216278-077f-4e99-978e-d34e24e39b03.webp", "Plated electrical contacts and energy components"],
    metrics: [
      ["Conductivity", "Copper, nickel, tin, and silver finish support"],
      ["Outdoor", "Corrosion protection for exposed hardware"],
      ["Motion", "Wear-resistant coatings for moving components"],
    ],
    intro:
      "Renewable energy systems use plated finishes in electrical contacts, busbars, fasteners, brackets, storage hardware, and wear-prone mechanical parts. Electroplating can improve conductivity, solderability, corrosion resistance, and wear performance. El Etehadia offers electroplating chemistry and technical support for manufacturers serving solar, wind, and energy-storage applications.",
    sections: [
      {
        type: "split",
        eyebrow: "Industry uses",
        heading: "Electroplating support for electrical and exposed energy components.",
        body:
          "Renewable energy equipment often combines outdoor corrosion exposure with electrical performance and long service-life requirements.",
        items: [
          ["Electrical contacts and busbars", "Copper, nickel, tin, and silver finishes can support conductivity, solderability, and contact protection in power components.", ["/assets/electris-copper-busbars.jpg", "Copper busbars for electrical power distribution"]],
          ["Frames, brackets, and fasteners", "Zinc and nickel-based finishes can protect exposed hardware used in solar mounting, wind systems, and storage assemblies.", ["/assets/optimized/zinc-plated-industrial-fasteners.webp", "Plated fasteners for renewable energy assemblies"]],
          ["Wind and mechanical equipment", "Hard chrome and electroless nickel can support wear and corrosion resistance on selected shafts, hydraulic parts, and moving surfaces.", ["/assets/Hard-Chrome-2.jpg", "Wear-resistant plated mechanical component"]],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Finish fit",
        heading: "Common renewable energy plating needs.",
        rows: [
          ["Copper, tin, nickel, silver", "Conductivity, solderability, and contact protection", "Busbars, connectors, terminals, and power-distribution parts"],
          ["Zinc and zinc-alloy", "Corrosion protection for outdoor hardware", "Solar mounting fasteners, brackets, clips, and frames"],
          ["Hard chrome and electroless nickel", "Wear and corrosion resistance", "Wind, hydraulic, and moving mechanical components"],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "What we offer",
        heading: "Finishing products for durable energy infrastructure.",
        body:
          "El Etehadia offers copper, nickel, tin-related support, zinc systems, hard chrome, electroless nickel, surface preparation, laboratory analysis, and troubleshooting for renewable energy component manufacturers.",
        image: ["/assets/service-process-optimization.png", "Process optimization for renewable energy plating components"],
      },
    ],
  },
];

export const industryCards = industries.map((industry) => [
  industry.title,
  industry.summary,
  industry.cardImage,
  `/industries/${industry.slug}/`,
]);

export const industryPageEntries = Object.fromEntries(
  industries.map((industry) => [
    industry.pageKey,
    {
      title: industry.title,
      metaTitle: `${industry.title} Electroplating | El Etehadia`,
      metaDescription: industry.intro,
      eyebrow: "Industries",
      heading: `${industry.title} Electroplating Applications`,
      intro: industry.intro,
      image: industry.heroImage,
      metrics: industry.metrics,
      path: `/industries/${industry.slug}/`,
      sections: [
        ...industry.sections,
        {
          type: "related",
          eyebrow: "Related services",
          heading: "El Etehadia services for this industry.",
          items: commonServices.map((service) => service.replace(/^\w/, (letter) => letter.toUpperCase())),
        },
      ],
      cta: ["Discuss your industry requirement", "/contact/"],
    },
  ]),
);

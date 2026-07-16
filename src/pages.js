import { setupLanguageToggle } from "./i18n.js";
import { applyPageStructuredData } from "./structuredData.js";
import { productDocuments } from "./data/productDocuments.js";
import { industryCards, industryPageEntries } from "./data/industries.js";
import "../styles.css";
import "./pages.css";
import { initFooter3dLogo } from "./footerLogo3d.js";

const WHATSAPP_URL = "https://wa.me/201064439997";

import { siteNavItems, solutionDocumentMenuGroups } from "./siteNav.js";

const navItems = siteNavItems;

/** Shared by page heroes that use the wide logistics / fleet visual (About, Industries, etc.) */
const pageHeroLogisticsImage = [
  "/assets/optimized/electroplating-production-line-384.avif",
  "El Etehadia branded logistics and electroplating supply across Egypt",
  "/assets/optimized/electroplating-production-line-384.avif 384w, /assets/optimized/electroplating-production-line-512.avif 512w, /assets/optimized/electroplating-production-line-768.avif 768w, /assets/optimized/electroplating-production-line-1080.avif 1080w",
  "(max-width: 820px) calc(100vw - 48px), 50vw",
];

const pageImages = {
  hero: pageHeroLogisticsImage,
  about: pageHeroLogisticsImage,
  machinesProductionGrid: ["/assets/electris-coating-systems-4.jpg", "Electroplating coating systems and production line equipment"],
  aboutMissionSpotlight: ["/assets/optimized/el-etehadia-industrial-supply.webp", "El Etehadia supply operations and industrial technology"],
  lab: ["/assets/water-laboratory-testing-services.jpg", "Laboratory analysis and specialty chemistry for plating baths"],
  support: ["/assets/1718989245-wat.jpg", "Technical specialist supporting electroplating operations"],
  processOptimization: ["/assets/service-process-optimization.png", "Process optimization and plating line improvement support"],
  machinesService: ["/assets/service-machines-accessories.png", "Electroplating machines, accessories, and industrial supply logistics"],
  nickelProductCard: ["/assets/WhatsApp Image 2026-06-01 at 5.16.04 PM.jpeg", "Nickel plating production and industrial metal finishing"],
  electrolessNickelProductCard: ["/assets/dsc04687.jpg", "Electroless nickel plating and uniform metal finishing"],
  electrolessNickelApplication: ["/assets/silver-electrical-contacts38216278-077f-4e99-978e-d34e24e39b03.webp", "Silver-plated electrical contacts and functional electroless nickel finishes"],
  chrome: ["/assets/engineer-inspecting-components.jpg", "Engineer inspecting finished industrial components"],
  chromeProductCard: ["/assets/046A5728HCspecLc-400x267-c-default.jpg", "Chrome plating systems and decorative finishing production"],
  trivalentChromeProductCard: ["/assets/trivalent-chrome-plated-component.png", "Trivalent chrome plated components with decorative mirror finish"],
  hardChromeProductCard: ["/assets/Hard-Chrome-2.jpg", "Hard chrome plating for wear resistance and industrial durability"],
  decorativeNickelChromeApplication: ["/assets/electris-copper-busbars.jpg", "Copper busbars and decorative plated metal finishing"],
  platingSystemsRacked: ["/assets/racked parts.jpg", "Racked plated parts and production finishing racks"],
  automotive: ["/assets/aly73717b77_0.webp", "Automotive and plated industrial components"],
  sanitary: ["/assets/electroplating-on-bathroom-fittings-service.jpg", "Electroplating on bathroom fittings"],
  hardwareSector: ["/assets/electroplating-services-500x500.webp", "Hardware and electroplated metal components"],
  industrialManufacturing: [
    "/assets/industrial-manufacturing-parts.jpg",
    "Industrial manufacturing parts for plated finishing",
  ],
  plasticsIndustry: ["/assets/dsc04819.jpg", "Plating on plastic and decorative plastic metallization"],
  metalFabrication: [
    "/assets/metal-fabrication-800x600-1.jpg",
    "Metal fabrication work for industrial components",
  ],
  decorativeHardware: ["/assets/LHZA11508.BLK.webp", "Decorative hardware and finished plated surfaces"],
  copperProductCard: ["/assets/electris42.jpg", "Copper plating systems and electroplating production"],
  zinc: ["/assets/optimized/zinc-plated-industrial-fasteners.webp", "Industrial plated fasteners for corrosion protection"],
  plastic: ["/assets/WhatsApp Image 2026-06-01 at 5.16.36 PM.jpeg", "Plating on plastic and decorative plastic metallization"],
  prep: ["/assets/why-us-transformative.png", "Metal parts prepared for surface finishing"],
  prepProductCard: ["/assets/electris-powder-coating.jpg", "Powder coating and surface preparation for plating and finishing"],
  aluminumSurfaceProductCard: ["/assets/optimized/light-metal-surface-finishing.webp", "Aluminum and metal parts prepared for surface treatment and finishing"],
  surfacePrepHardware: ["/assets/optimized/surface-treatment-filter-nozzle.webp", "Stainless steel water strainer filter nozzle for surface treatment systems"],
  lacquerProductCard: ["/assets/LHZA11508.BLK.webp", "Lacquers and decorative plated hardware"],
  lacquersAboutVisual: ["/assets/img-4775-a.jpg", "Lacquers and protective finishing materials"],
  partners: ["/assets/Hc0322006e18342839b4b4d0cb307081eC.avif", "Product selection for plating chemistry, equipment, and finishes"],
  macdermidEnthonePartner: ["/assets/macdermid-enthone-industrial-solutions.png", "MacDermid Enthone Industrial Solutions — plating chemistry and surface finishing brand"],
  hawkingPartner: ["/assets/hawking-brand-wht.svg", "HAWKING England — lacquers and protective finishing brand"],
  sisecamPartner: ["/assets/sisecam_logo.svg", "Şişecam — glass and chemicals partner brand"],
  nickelhuetteAuePartner: ["/assets/nha-aue-logo.png", "Nickelhütte Aue — nickel alloys and recycling partner brand"],
  licensedProductionPartner: ["/assets/optimized/el-etehadia-egypt-production.webp", "Pyramids of Giza — El Etehadia licensed production and supply in Egypt"],
  saltsColorsProductCard: ["/assets/plating-chemistry-dosing-station.png", "Plating chemistry dosing, equipment, and bath materials"],
  contact: ["/assets/1718989245-wat.jpg", "Technical specialist reviewing electroplating documents and samples"],
  protectiveFinishing: ["/assets/Electroplating-Surface-Finish-Supplier-In-China.jpg", "Electroplating and protective surface finishing"],
};

const productCards = [
  ["Nickel Plating", "Nickel systems for decorative and functional applications, supporting brightness, leveling, corrosion resistance, and surface performance.", pageImages.nickelProductCard],
  ["Chrome Plating", "Chrome systems for durable decorative finishes, corrosion resistance, cleanability, hardness, and reflective appearance.", pageImages.chromeProductCard],
  ["Copper Plating", "Copper chemistry for undercoats, leveling, conductivity, and decorative finishing sequences.", pageImages.copperProductCard],
  ["Zinc Plating", "Zinc and zinc-alloy systems for anti-corrosion protection and industrial durability.", pageImages.zinc],
  ["Plating on Plastic", "Process chemistry and support for metallizing plastic components used in decorative and functional applications.", pageImages.plastic],
  ["Surface Preparation", "Cleaners, activation products, etching solutions, pre-treatment materials, and preparation chemistry for reliable adhesion and finish quality.", pageImages.prepProductCard],
  ["Aluminum Surface Treatment", "Products and support for aluminum preparation, treatment, and finishing workflows.", pageImages.aluminumSurfaceProductCard],
  ["Electroless Nickel", "Electroless nickel systems for uniform deposition, complex geometries, corrosion protection, and wear resistance.", pageImages.electrolessNickelProductCard],
  ["Hard Chrome", "Functional chrome systems for wear resistance, hardness, and industrial surface performance.", pageImages.hardChromeProductCard],
  ["Trivalent Chrome", "Modern chrome finishing systems for decorative applications and evolving compliance requirements.", pageImages.trivalentChromeProductCard],
  ["Lacquers", "HAWKING lacquers and protective finishing products for enhanced durability, appearance, and post-treatment performance.", pageImages.lacquerProductCard],
  ["Salts, Colors & Additives", "Industrial salts, colors, brighteners, additives, and supporting materials for plating bath performance and finish control.", pageImages.saltsColorsProductCard],
];

const hiddenProductDocumentCards = new Set(["eplating-case-study", "watercare"]);
const productDocumentCards = productDocuments
  .filter((doc) => !hiddenProductDocumentCards.has(doc.slug))
  .map((doc) => [
    doc.title,
    doc.description,
    doc.category,
    [doc.heroImage, doc.imageAlt],
    `/solutions/documents/${doc.slug}/`,
  ]);
const structuredProductDocumentItems = productDocumentCards.map(([name, description]) => [name, description]);

const serviceCards = [
  ["Laboratory Analysis", "We analyze plating baths, samples, and process conditions to help customers evaluate performance, identify imbalances, and take corrective action.", "Use for: Bath control, sample analysis, quality validation, defect investigation, process correction.", pageImages.lab],
  ["Technical Support", "Our team supports manufacturers with practical process guidance across electroplating lines, from preparation to final finish.", "Use for: Additive dosing, bath maintenance, defect troubleshooting, operating condition review, production stability.", pageImages.support],
  ["Product Selection", "We help customers choose the right chemistry, additives, lacquers, machines, and accessories based on their application, substrate, finish requirements, and production conditions.", "Use for: Nickel, chrome, copper, and zinc processes; plating on plastic; surface preparation; protective finishing; decorative finishing.", pageImages.partners],
  ["Process Optimization", "We help customers improve plating-line performance by reviewing chemical balance, workflow, operating windows, and recurring production issues.", "Use for: Reducing rejection rates, improving finish consistency, stabilizing bath performance, supporting line upgrades, increasing production reliability.", pageImages.processOptimization],
  ["Machines & Accessories", "El Etehadia supplies electroplating machines, accessories, and related equipment needed for industrial plating operations.", "Use for: New line setup, replacement parts, production accessories, equipment upgrades, ongoing operational needs.", pageImages.machinesService],
];

const applicationCards = [
  ["Decorative Nickel-Chrome Finishing", "Support for bright decorative finishes used across fixtures, accessories, appliances, and visible components.", "Decorative finishing", pageImages.decorativeNickelChromeApplication],
  ["Anti-Corrosion Zinc Systems", "Zinc and zinc-alloy processes designed to protect industrial parts from corrosion and environmental exposure.", "Corrosion protection", pageImages.zinc],
  ["Plating on Plastic", "Surface preparation and metallization support for plastic parts requiring a metallic decorative finish.", "Plastic metallization", pageImages.plastic],
  ["Electroless Nickel Applications", "Uniform nickel deposition for parts with complex shapes or surfaces requiring corrosion and wear resistance.", "Functional coating", pageImages.electrolessNickelApplication],
  ["Laboratory-Controlled Bath Performance", "Analysis and support for customers who need stable chemistry, fewer defects, and consistent finishing results.", "Bath control", pageImages.lab],
  ["Line Support & Troubleshooting", "Practical support for production issues affecting adhesion, brightness, coverage, color, roughness, or stability.", "Technical support", pageImages.support],
];

const articleCards = [
  ["How Laboratory Analysis Supports Stable Plating Baths", "A practical look at why bath testing helps reduce defects and improve line consistency.", "Technical note", pageImages.lab],
  ["Common Electroplating Defects and What They Indicate", "A guide to issues such as poor adhesion, dullness, roughness, burning, and staining.", "Troubleshooting", pageImages.support],
  ["Choosing the Right Finish: Nickel, Chrome, Copper, Zinc, or Electroless Nickel", "A simple overview of common plating systems and where they are used.", "Product guidance", pageImages.partners],
  ["Why Surface Preparation Matters Before Plating", "How cleaning, activation, and pre-treatment affect adhesion and final finish quality.", "Process control", pageImages.prep],
  ["Decorative vs Functional Coatings", "Understanding when plating is used for appearance, protection, conductivity, hardness, or wear resistance.", "Applications", pageImages.chrome],
];

const pages = {
  about: {
    title: "About El Etehadia",
    eyebrow: "About El Etehadia",
    heading: "Electroplating Supply and Technical Support Since 1997",
    intro:
      "El Etehadia Company for Import, Export & Agencies has supported manufacturers from Cairo since 1997. The company supplies electroplating chemicals, machines, accessories, lacquers, and technical services for industrial surface-finishing operations across Egypt and the Middle East.",
    image: pageImages.about,
    metrics: [
      ["1997", "Founded in Cairo"],
      ["Egypt", "Local technical support"],
      ["Regional", "Supply across Egypt and the Middle East"],
    ],
    sections: [
      {
        type: "spotlight",
        eyebrow: "Mission",
        heading: "Helping Manufacturers Achieve Consistent Finishes",
        body:
          "Our mission is to provide reliable electroplating products and practical technical support that help manufacturers improve finish quality, stabilize production, reduce downtime, and maintain efficient plating lines.",
        image: pageImages.aboutMissionSpotlight,
      },
      {
        type: "split",
        eyebrow: "What we do",
        heading: "From Chemistry to Process Control",
        body:
          "We support manufacturers across the full plating workflow: surface preparation, bath chemistry, plating systems, finishing products, equipment, accessories, analysis, and troubleshooting.",
        items: [
          ["Electroplating chemicals and additives", "Chemistry supply for daily bath control, replenishment, and finish performance.", pageImages.partners],
          ["Nickel, chrome, copper, zinc, and plating-on-plastic systems", "Core plating systems for decorative, protective, and functional applications.", pageImages.platingSystemsRacked],
          ["Surface preparation and treatment products", "Cleaners, activation, etching, and pre-treatment products for adhesion and consistent finish quality.", pageImages.surfacePrepHardware],
          ["Lacquers and protective finishing materials", "HAWKING lacquers and related protective finishes for surface appearance and durability.", pageImages.lacquersAboutVisual],
          ["Machines, accessories, and production support", "Equipment and supporting parts for new lines, upgrades, and ongoing production needs.", pageImages.machinesProductionGrid],
          ["Laboratory analysis and technical guidance", "Bath analysis, sample review, and process guidance for better production decisions.", pageImages.lab],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "Experience",
        heading: "Local Knowledge. International Standards.",
        body:
          "For decades, El Etehadia has worked closely with manufacturers who require dependable surface-finishing performance. Our role is to make advanced plating products and technical support accessible locally, with fast communication and practical production-focused guidance.",
        image: pageImages.partners,
      },
      {
        type: "spotlight",
        eyebrow: "Laboratory support",
        heading: "A Technical Partner, Not Just a Supplier",
        body:
          "Our specialized laboratory and technical team help customers understand bath conditions, identify process issues, and take corrective action. This allows production teams to make informed decisions and maintain consistent quality.",
        image: pageImages.lab,
      },
    ],
    cta: ["Request technical support", "/contact/"],
  },
  services: {
    title: "Services",
    eyebrow: "Services",
    heading: "Technical Services for Electroplating Operations",
    intro:
      "El Etehadia supports plating operations with laboratory analysis, process troubleshooting, product selection, equipment guidance, and ongoing technical support.",
    image: pageImages.support,
    sections: [
      {
        type: "services",
        eyebrow: "Service support",
        heading: "Beyond Supply: Technical Support That Keeps Lines Running",
        items: serviceCards,
      },
      {
        type: "process",
        eyebrow: "How we work",
        heading: "A practical technical support sequence.",
        items: [
          ["01", "Understand the process", "Review the substrate, finish requirement, bath condition, production issue, and available sample or analysis details."],
          ["02", "Match chemistry and action", "Recommend product options, operating-window checks, additive dosing, or corrective steps according to the customer’s line conditions."],
          ["03", "Support production follow-up", "Help the production team monitor bath stability, finish quality, and recurring defects after corrective action."],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Capability matrix",
        heading: "Service fit by plating need.",
        rows: [
          ["Bath analysis", "Nickel, chrome, copper, zinc, electroless nickel", "Quality control, defect investigation, process correction"],
          ["Troubleshooting", "Adhesion, burning, dullness, staining, roughness, low coverage", "Production support and rejection-rate reduction"],
          ["Equipment support", "Machines, tanks, line accessories, replacement needs", "New setup, line upgrades, maintenance planning"],
        ],
      },
    ],
    cta: ["Request technical support", "/contact/"],
  },
  products: {
    title: "Products",
    eyebrow: "Products",
    heading: "Product Pages",
    intro:
      "Focused product pages for industrial surface-finishing chemistry, additives, process support, and specialty applications.",
    image: pageImages.partners,
    sections: [
      {
        type: "products",
        eyebrow: "Products",
        heading: "Browse Product Pages",
        body:
          "Explore product pages built from supplied brochures, factsheets, and case studies.",
        items: productDocumentCards,
      },
    ],
    cta: ["Ask about product availability", "/contact/"],
  },
  industries: {
    title: "Industries",
    eyebrow: "Industries",
    heading: "Surface Finishing Support for Industrial Manufacturers",
    intro:
      "El Etehadia supports manufacturers that depend on consistent, durable, and high-quality plated finishes.",
    image: pageImages.hero,
    sections: [
      {
        type: "industryTiles",
        eyebrow: "Application excellence",
        heading: "Surface Finishing Support for Industrial Manufacturers",
        body:
          "El Etehadia supports manufacturers that depend on consistent, durable, and high-quality plated finishes. We provide the technical depth required for complex production environments.",
        items: industryCards,
      },
      {
        type: "related",
        eyebrow: "Related products",
        heading: "Commonly requested product families.",
        items: ["Nickel plating", "Chrome plating", "Copper plating", "Zinc plating", "Plating on plastic", "Surface preparation", "Lacquers"],
      },
    ],
    cta: ["Discuss your finishing requirement", "/contact/"],
  },
  projects: {
    title: "Applications",
    eyebrow: "Applications",
    heading: "Practical Surface Finishing Applications",
    intro:
      "Explore the types of plating-line challenges, product applications, and technical support areas where El Etehadia helps manufacturers improve performance.",
    image: pageImages.decorativeHardware,
    sections: [
      {
        type: "applications",
        eyebrow: "Application areas",
        heading: "Relevant application support without unsupported case studies.",
        items: applicationCards,
      },
    ],
    cta: ["Send a plating-line issue", "/contact/"],
  },
  partners: {
    title: "Partners & Brands",
    eyebrow: "Partners & Brands",
    heading: "Trusted Brands for Advanced Surface Finishing",
    intro:
      "El Etehadia connects manufacturers with high-quality surface-finishing products and technical standards from recognized international brands.",
    sections: [
      {
        type: "partners",
        eyebrow: "Recognized brands",
        heading: "Global standards, local support.",
        items: [
          ["MacDermid Enthone", "MacDermid Enthone is a global surface-finishing chemistry company serving industrial, decorative, anti-corrosion, engineering, aluminum treatment, electroless nickel, hard chrome, trivalent chrome, and water-treatment applications.", pageImages.macdermidEnthonePartner],
          ["HAWKING England", "HAWKING lacquers support protective and decorative finishing needs, helping manufacturers improve surface appearance and durability.", pageImages.hawkingPartner],
          [
            "Şişecam",
            "Şişecam is a global industrial group supplying glass, chemicals, and advanced materials to manufacturers worldwide. Through El Etehadia, customers gain access to trusted Şişecam products that complement electroplating and industrial surface-finishing supply chains.",
            pageImages.sisecamPartner,
            "https://www.sisecam.com/",
          ],
          [
            "Nickelhütte Aue",
            "Nickelhütte Aue is a leading European recycler and producer of nickel alloys and non-ferrous metals with deep metallurgical expertise. The company supplies high-quality alloys and recycled materials that support electroplating, engineering, and sustainable manufacturing operations.",
            pageImages.nickelhuetteAuePartner,
            "https://nha-aue.de/en",
          ],
          ["Licensed Production", "El Etehadia supports local supply of high-quality salts, colors, and related products under trusted technical standards.", pageImages.licensedProductionPartner],
        ],
      },
    ],
    cta: ["Discuss product supply", "/contact/"],
  },
  news: {
    title: "News & Insights",
    eyebrow: "News & Insights",
    heading: "Surface Finishing Insights",
    intro:
      "Technical notes, product updates, and practical guidance for manufacturers working with electroplating and industrial finishing.",
    image: pageImages.lab,
    sections: [
      {
        type: "articles",
        eyebrow: "Evergreen technical guidance",
        heading: "Useful reading for plating and production teams.",
        items: articleCards,
      },
    ],
    cta: ["Ask a technical question", "/contact/"],
  },
  contact: {
    title: "Contact",
    eyebrow: "Contact",
    heading: "Talk to El Etehadia",
    intro:
      "Contact our team for product inquiries, laboratory analysis, technical support, machines, accessories, or plating-line troubleshooting.",
    image: pageImages.contact,
    sections: [{ type: "contact", eyebrow: "Inquiry routing", heading: "Send your requirement or technical issue." }],
  },
  brochure: {
    title: "Products",
    eyebrow: "Products",
    heading: "Product Information for Electroplating Lines",
    intro:
      "For current product sheets, availability, and technical documents, contact El Etehadia with your process type, substrate, and required finish.",
    image: pageImages.partners,
    sections: [
      {
        type: "products",
        eyebrow: "Product categories",
        heading: "Surface-finishing product families.",
        items: productCards.slice(0, 8),
      },
    ],
    cta: ["Request product documents", "/contact/"],
  },
  ...industryPageEntries,
};

function isActive(href, currentPage) {
  if (currentPage.startsWith("industry-") && href === "/industries/") return true;
  if (currentPage === "products" && href === "/products/") return true;
  if (currentPage === "projects" && href === "/projects/") return true;
  if (currentPage === "news" && href === "/news/") return true;
  if (currentPage === "solutions" && href === "/solutions/") return true;
  return href.includes(`/${currentPage}/`);
}

function solutionSubmenu() {
  return `
    <div class="nav-submenu" role="menu" aria-label="Solutions product documents">
      <div class="nav-submenu__inner">
        ${solutionDocumentMenuGroups
          .map(
            (group) => `
              <div class="nav-submenu__group">
                <p>${group.category}</p>
                ${group.documents
                  .map((doc) => `<a href="/solutions/documents/${doc.slug}/" role="menuitem">${doc.title}</a>`)
                  .join("")}
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function navItem([label, href], currentPage) {
  const active = isActive(href, currentPage);
  const hasSubmenu = label === "Solutions";
  return `<li class="float-tabs__item${hasSubmenu ? " has-submenu" : ""}">
    <a href="${href}" class="float-tabs__link${active ? " is-active" : ""}"${active ? ' aria-current="page"' : ""}${hasSubmenu ? ' aria-haspopup="true"' : ""}>${label}</a>
    ${hasSubmenu ? solutionSubmenu() : ""}
  </li>`;
}

function header(currentPage) {
  const links = navItems
    .map((item) => navItem(item, currentPage))
    .join("");

  return `
    <header class="hero-bar page-bar" id="top-nav">
      <div class="hero-bar__shell">
        <a href="/" class="hero-bar__logo" aria-label="El Etehadia home">
          <img src="/images/nav-logo.svg" alt="El Etehadia" width="64" height="64" decoding="async" />
        </a>
        <div class="hero-bar__center">
          <nav class="hero-bar__nav-panel" id="float-nav-panel" aria-label="Primary">
            <ul class="float-tabs page-tabs">
              <li class="float-tabs__cursor" aria-hidden="true"></li>
              ${links}
            </ul>
          </nav>
        </div>
        <div class="hero-bar__actions">
          <a href="/contact/" class="hero-bar__contact">
            <span class="hero-bar__contact-dot" aria-hidden="true"></span>
            <span>Contact us</span>
          </a>
          <button class="language-toggle" type="button" data-language-toggle aria-label="Switch to Arabic">
            <span data-language-label>العربية</span>
          </button>
          <button type="button" class="hero-bar__menu" aria-expanded="false" aria-controls="float-nav-panel" aria-label="Open menu">
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <div class="footer__3d-logo footer__3d-logo--brand" data-footer-3d-logo role="img" aria-label="El Etehadia"></div>
          <p class="footer__tag">Electroplating chemicals, machines, accessories, lacquers, laboratory analysis, and technical support.</p>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Company</h4>
          <nav class="footer__nav">
            <a href="/">Home</a>
            <a href="/about/">About</a>
            <a href="/services/">Services</a>
            <a href="/products/">Products</a>
            <a href="/solutions/">Solutions</a>
            <a href="/projects/">Applications</a>
            <a href="/industries/">Industries</a>
            <a href="/partners/">Partners</a>
            <a href="/brochure/">Technical brochures</a>
            <a href="/news/">News and insights</a>
            <a href="/contact/">Contact</a>
          </nav>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Products</h4>
          <nav class="footer__nav">
            <a href="/products/">Nickel plating</a>
            <a href="/products/">Chrome plating</a>
            <a href="/products/">Copper plating</a>
            <a href="/products/">Zinc plating</a>
            <a href="/products/">Lacquers</a>
          </nav>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Contact</h4>
          <nav class="footer__nav">
            <a href="tel:+20226833830">+20 2 26833830</a>
            <a href="tel:+201064439997">+20 10 64439997</a>
            <a href="mailto:info@etehadia.com">info@etehadia.com</a>
            <span>Cairo, Egypt</span>
          </nav>
          <a href="/contact/" class="footer__cta">Send inquiry</a>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container footer__bottom-inner">
          <p>© <span id="year"></span> El Etehadia Company. All rights reserved.</p>
          <a href="#top-nav" class="back-top">Back to top</a>
        </div>
      </div>
    </footer>
  `;
}

function pageHero(page) {
  const metrics = page.metrics
    ? `<div class="page-metrics">${page.metrics.map(([num, label]) => `<div><strong>${num}</strong><span>${label}</span></div>`).join("")}</div>`
    : "";

  const hasMedia = Array.isArray(page.image);
  const heroClass = hasMedia ? "page-hero" : "page-hero page-hero--no-media";
  const media = hasMedia
    ? `<figure class="page-hero__media">
        <img src="${page.image[0]}"${page.image[2] ? ` srcset="${page.image[2]}" sizes="${page.image[3]}"` : ""} alt="${page.image[1]}" loading="eager" fetchpriority="high" decoding="async" />
      </figure>`
    : "";

  return `
    <section class="${heroClass}" data-reveal>
      <div class="page-hero__copy">
        <p class="section__label">${page.eyebrow}</p>
        <h1>${page.heading}</h1>
        <p>${page.intro}</p>
        ${metrics}
      </div>
      ${media}
    </section>
  `;
}

function sectionHeader(section) {
  return `
    <header class="section__header section__header--split" data-reveal>
      <div>
        <p class="section__label">${section.eyebrow}</p>
        <h2>${section.heading}</h2>
      </div>
      ${section.body ? `<p>${section.body}</p>` : ""}
    </header>
  `;
}

function cardMedia(media, href = "") {
  const image = `<img src="${media[0]}" alt="${media[1]}" loading="lazy" decoding="async" />`;
  return href
    ? `<a class="page-card__media" href="${href}" aria-label="${media[1]}">${image}</a>`
    : `<div class="page-card__media">${image}</div>`;
}

function industryIcon(title) {
  const key = title.toLowerCase();
  const iconName = (() => {
    if (key.includes("aerospace")) return "flight_takeoff";
    if (key.includes("appliances")) return "microwave_gen";
    if (key.includes("automotive")) return "directions_car";
    if (key.includes("building")) return "apartment";
    if (key.includes("fashion")) return "styler";
    if (key.includes("oil")) return "oil_barrel";
    if (key.includes("plastic")) return "recycling";
    if (key.includes("plumbing")) return "faucet";
    return "solar_power";
  })();

  return `
    <span class="material-symbols-outlined page-card__icon industry-card__icon" aria-hidden="true">${iconName}</span>
    <span class="material-symbols-outlined industry-card__ghost" aria-hidden="true">${iconName}</span>
  `;
}

function renderSection(section) {
  const head = sectionHeader(section);

  if (section.type === "split") {
    return `<section class="section page-section"><div class="section__inner">${head}<div class="technical-grid">${section.items
      .map(([title, body, media]) => `<article>${cardMedia(media)}<div class="page-card__body"><h3>${title}</h3><p>${body}</p></div></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "services") {
    return `<section class="section page-section"><div class="section__inner">${head}<div class="technical-grid">${section.items
      .map(([title, body, useFor, media]) => `<article>${cardMedia(media)}<div class="page-card__body"><h3>${title}</h3><p>${body}</p><strong>${useFor}</strong></div></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "industryTiles") {
    return `<section class="section page-section"><div class="section__inner">${head}<div class="technical-grid technical-grid--icons">${section.items
      .map(
        ([title, body, _media, href]) => {
          const titleHtml = href ? `<h3><a href="${href}">${title}</a></h3>` : `<h3>${title}</h3>`;
          return `<article class="industry-card${href ? " page-card--linked" : ""}"${href ? ` data-href="${href}" tabindex="0" role="link"` : ""} aria-label="${title}. ${body}"><div class="industry-card__content">${industryIcon(title)}<div class="page-card__body">${titleHtml}<p>${body}</p></div></div></article>`;
        }
      )
      .join("")}</div></div></section>`;
  }

  if (section.type === "products" || section.type === "applications" || section.type === "partners") {
    return `<section class="section page-section"><div class="section__inner">${head}<div class="technical-grid">${section.items
      .map((item) => {
        const [title, body, third, fourth, fifth] = item;
        const media = Array.isArray(third) ? third : fourth;
        const label = Array.isArray(third) ? "" : `<span>${third}</span>`;
        const externalUrl = section.type === "partners" && typeof fourth === "string" ? fourth : "";
        const itemUrl = externalUrl || (typeof fifth === "string" ? fifth : "");
        const titleHtml = itemUrl
          ? `<h3><a href="${itemUrl}"${externalUrl ? ' target="_blank" rel="noopener noreferrer"' : ""}>${title}</a></h3>`
          : `<h3>${title}</h3>`;
        return `<article class="${itemUrl ? "page-card--linked" : ""}"${itemUrl ? ` data-href="${itemUrl}" tabindex="0" role="link" aria-label="${title}"` : ""}>${cardMedia(media, itemUrl)}<div class="page-card__body">${label}${titleHtml}<p>${body}</p></div></article>`;
      })
      .join("")}</div></div></section>`;
  }

  if (section.type === "process") {
    return `<section class="section page-section"><div class="section__inner">${head}<div class="process-list">${section.items
      .map(([step, title, body]) => `<article><span>${step}</span><h3>${title}</h3><p>${body}</p></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "matrix") {
    return `<section class="section page-section"><div class="section__inner">${head}<div class="capability-table" role="table">${section.rows
      .map(([scope, systems, sectors]) => `<div role="row"><strong role="cell">${scope}</strong><span role="cell">${systems}</span><span role="cell">${sectors}</span></div>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "related") {
    return `<section class="section page-section"><div class="section__inner">${head}<div class="proof-strip">${section.items
      .map((item) => `<span>${item}</span>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "spotlight" || section.type === "notice") {
    return `<section class="section page-section"><div class="section__inner"><div class="spotlight-block" data-reveal><div class="spotlight-block__copy"><p class="section__label">${section.eyebrow}</p><h2>${section.heading}</h2><p>${section.body}</p></div><div class="spotlight-block__media"><img src="${section.image[0]}" alt="${section.image[1]}" loading="lazy" decoding="async" /></div></div></div></section>`;
  }

  if (section.type === "articles") {
    return `<section class="section page-section"><div class="section__inner">${head}<div class="filter-row" aria-label="Insight filters"><button type="button">All</button><button type="button">Technical notes</button><button type="button">Troubleshooting</button><button type="button">Product guidance</button></div><div class="article-list">${section.items
      .map(([title, body, category, media]) => `<article>${cardMedia(media)}<div class="page-card__body"><span>${category}</span><h3>${title}</h3><p>${body}</p></div></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "contact") return contactSection(section);
  return "";
}

function contactSection(section) {
  return `
    <section class="section page-section contact-page">
      <div class="section__inner">
        ${sectionHeader(section)}
        <div class="contact-layout">
          <aside class="contact-card">
            <h3>Contact details</h3>
            <p>For technical inquiries, please include the process type, substrate, required finish, current issue, and any available bath or sample details.</p>
            <dl>
              <dt>Phone</dt>
              <dd><a href="tel:+20226833830">+20 2 26833830</a><br /><a href="tel:+201064439997">+20 10 64439997</a></dd>
              <dt>Email</dt>
              <dd><a href="mailto:info@etehadia.com">info@etehadia.com</a></dd>
              <dt>Location</dt>
              <dd>Cairo, Egypt</dd>
            </dl>
            <a class="industrial-button" href="${WHATSAPP_URL}">WhatsApp El Etehadia</a>
            <div class="map-visual" role="img" aria-label="Cairo Egypt location visual">
              <span>Cairo, Egypt</span>
            </div>
          </aside>
          <form class="contact-form" novalidate>
            <label><span>Name</span><input name="name" autocomplete="name" required /></label>
            <label><span>Company</span><input name="company" autocomplete="organization" /></label>
            <label><span>Phone</span><input type="tel" name="phone" autocomplete="tel" required /></label>
            <label><span>Email</span><input type="email" name="email" autocomplete="email" required /></label>
            <label class="contact-form__full"><span>Inquiry Type</span><select name="inquiry" required><option value="">Select inquiry type</option><option>Product inquiry</option><option>Technical support</option><option>Laboratory analysis</option><option>Machines & accessories</option><option>Partnership</option><option>Other</option></select></label>
            <label class="contact-form__full"><span>Message</span><textarea name="message" rows="6" required></textarea></label>
            <p class="form-status" role="status" aria-live="polite">Please complete the required fields before sending.</p>
            <button class="industrial-button" type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function finalCta(page) {
  if (!page.cta) return "";
  return `
    <section class="section final-cta" data-reveal>
      <div class="section__inner">
        <p class="section__label">Next step</p>
        <h2>Need support for your plating line?</h2>
        <p>Send us your inquiry, product requirement, or technical issue. Our team can help with product selection, lab analysis, and process support.</p>
        <a class="industrial-button" href="${page.cta[1]}">${page.cta[0]}</a>
      </div>
    </section>
  `;
}

function syncPageMetadata(page) {
  const metaTitle = page.metaTitle || document.title || `${page.title} | El Etehadia`;
  const currentDescription = document.querySelector('meta[name="description"]')?.getAttribute("content");
  const metaDescription = page.metaDescription || currentDescription || page.intro;

  document.body.dataset.metaTitle = metaTitle;
  document.body.dataset.metaDescription = metaDescription;
  document.title = metaTitle;

  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement("meta");
    description.setAttribute("name", "description");
    document.head.appendChild(description);
  }
  description.setAttribute("content", metaDescription);
}

function setupReveals() {
  const items = document.querySelectorAll("[data-reveal]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    // Reveal targets are headers/spotlights/heroes — use 0 so small blocks fire on mobile.
    { threshold: 0, rootMargin: "0px 0px -8% 0px" },
  );
  items.forEach((item) => observer.observe(item));
}

function setupScrollProgress() {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  let ticking = false;
  const update = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const value = Math.min(1, Math.max(0, window.scrollY / max));
    progress.style.transform = `scaleX(${value.toFixed(4)})`;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();
}

function setupPressFeedback() {
  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("pointerdown", () => element.classList.add("is-pressing"));
    ["pointerup", "pointercancel", "pointerleave", "blur"].forEach((eventName) => {
      element.addEventListener(eventName, () => element.classList.remove("is-pressing"));
    });
  });
}

function setupMobileMenu() {
  const topNav = document.querySelector("#top-nav");
  const toggle = document.querySelector(".hero-bar__menu");
  const panel = document.querySelector("#float-nav-panel");

  if (!topNav || !toggle || !panel) return;

  const mobileMenuQuery = window.matchMedia("(max-width: 1024px)");
  const closeMobileSubmenus = () => {
    panel.querySelectorAll(".has-submenu.is-submenu-open").forEach((item) => {
      item.classList.remove("is-submenu-open");
      item.querySelector(".float-tabs__link")?.setAttribute("aria-expanded", "false");
    });
  };

  panel.querySelectorAll(".has-submenu > .float-tabs__link").forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
    trigger.addEventListener("click", (event) => {
      if (!mobileMenuQuery.matches) return;
      event.preventDefault();
      const item = trigger.closest(".has-submenu");
      const open = item?.classList.toggle("is-submenu-open") || false;
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  toggle.addEventListener("click", () => {
    const open = topNav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (!open) closeMobileSubmenus();
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenuQuery.matches && link.matches(".has-submenu > .float-tabs__link")) return;
      topNav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      closeMobileSubmenus();
    });
  });
}

function setupPageTransitions() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const veil = document.createElement("div");
  veil.className = "page-transition-veil";
  veil.setAttribute("aria-hidden", "true");
  veil.innerHTML = '<img class="page-transition-veil__logo" src="/images/transition-logo-192.webp" srcset="/images/transition-logo-192.webp 192w, /images/transition-logo-384.webp 384w" sizes="(max-width: 575px) 92px, 190px" width="190" height="190" alt="" decoding="async" fetchpriority="low" />';
  document.body.appendChild(veil);

  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 1024px)").matches && link.matches(".has-submenu > .float-tabs__link")) return;
      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      event.preventDefault();
      veil.classList.add("is-leaving");
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 360);
    });
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");
  if (!form || !status) return;

  const messages = {
    invalid: { en: "Please complete the required fields before sending.", ar: "يرجى إكمال الحقول المطلوبة قبل الإرسال." },
    sending: { en: "Sending inquiry...", ar: "جار إرسال الاستفسار..." },
    success: { en: "Thank you. Your inquiry is ready for the El Etehadia team.", ar: "شكراً لك. أصبح استفسارك جاهزاً لفريق الاتحادية." },
  };
  const message = (key) => messages[key][document.documentElement.lang === "ar" ? "ar" : "en"];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("has-errors");
      status.classList.remove("is-success");
      status.classList.add("is-error");
      status.textContent = message("invalid");
      form.reportValidity();
      window.setTimeout(() => status.classList.remove("is-error"), 420);
      return;
    }

    const button = form.querySelector("button");
    button.disabled = true;
    status.classList.remove("is-error", "is-success");
    status.textContent = message("sending");
    window.setTimeout(() => {
      status.textContent = message("success");
      status.classList.add("is-success");
      button.disabled = false;
      form.reset();
      form.classList.remove("has-errors");
    }, 650);
  });
}

function setupLinkedCards() {
  document.querySelectorAll(".page-card--linked[data-href]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      window.location.href = card.dataset.href;
    });

    card.addEventListener("keydown", (event) => {
      if (event.target.closest("a")) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      window.location.href = card.dataset.href;
    });
  });
}

function render() {
  const currentPage = document.body.dataset.page || "about";
  const page = pages[currentPage] || pages.about;
  const app = document.querySelector("#app");
  syncPageMetadata(page);

  app.innerHTML = `
    ${header(currentPage)}
    <main>
      ${pageHero(page)}
      ${page.sections.map(renderSection).join("")}
      ${finalCta(page)}
    </main>
    ${footer()}
  `;

  document.querySelector("#year").textContent = new Date().getFullYear();
  setupLanguageToggle();
  setupReveals();
  setupScrollProgress();
  setupPressFeedback();
  setupMobileMenu();
  setupPageTransitions();
  setupContactForm();
  setupLinkedCards();
  initFooter3dLogo();

  applyPageStructuredData({
    pageKey: currentPage,
    pageTitle: page.title,
    pagePath: page.path,
    productItems: currentPage === "products" ? structuredProductDocumentItems : undefined,
    serviceItems: currentPage === "services" ? serviceCards : undefined,
  });
}

render();

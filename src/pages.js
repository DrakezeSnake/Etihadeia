import { setupLanguageToggle } from "./i18n.js";
import "../styles.css";
import "./pages.css";

const WHATSAPP_URL = "https://wa.me/201067358111";

const navItems = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Services", "/services/"],
  ["Products", "/products/"],
  ["Industries", "/industries/"],
  ["Applications", "/projects/"],
  ["Partners", "/partners/"],
  ["Insights", "/news/"],
];

const pageImages = {
  hero: ["/assets/about-section.jfif", "El Etehadia industrial surface finishing facility visual"],
  about: ["/assets/about-section.jfif", "El Etehadia industrial surface finishing facility visual"],
  lab: ["/assets/why-us-innovation.png", "Laboratory technician analyzing electroplating bath solution"],
  support: ["/assets/why-us-standards.png", "Technical specialist reviewing electroplating samples"],
  nickel: ["https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80", "Industrial metal finishing production area"],
  chrome: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80", "Engineer inspecting finished industrial components"],
  copper: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80", "Electrical metal components prepared for finishing"],
  zinc: ["https://commons.wikimedia.org/wiki/Special:FilePath/ION%20PLATED%20FASTENERS%20-%20NARA%20-%2017470749.jpg", "Industrial plated fasteners for corrosion protection"],
  plastic: ["https://commons.wikimedia.org/wiki/Special:FilePath/Chrome%20plating%20coating%20on%20the%20plastic%20base%2C%20magnification%20x300.jpg", "Chrome plating coating on a plastic base"],
  prep: ["/assets/why-us-transformative.png", "Metal parts prepared for surface finishing"],
  lacquer: ["/assets/why-us-innovation.png", "Protective finishing and laboratory support visual"],
  partners: ["/assets/industry-infrastructure.png", "Surface finishing samples and industrial supply visual"],
  contact: ["/assets/why-us-standards.png", "Technical specialist reviewing electroplating documents and samples"],
};

const productCards = [
  ["Nickel Plating", "Nickel systems for decorative and functional applications, supporting brightness, leveling, corrosion resistance, and surface performance.", pageImages.nickel],
  ["Chrome Plating", "Chrome systems for durable decorative finishes, corrosion resistance, cleanability, hardness, and reflective appearance.", pageImages.chrome],
  ["Copper Plating", "Copper chemistry for undercoats, leveling, conductivity, and decorative finishing sequences.", pageImages.copper],
  ["Zinc Plating", "Zinc and zinc-alloy systems for anti-corrosion protection and industrial durability.", pageImages.zinc],
  ["Plating on Plastic", "Process chemistry and support for metallizing plastic components used in decorative and functional applications.", pageImages.plastic],
  ["Surface Preparation", "Cleaners, activation products, etching solutions, pre-treatment materials, and preparation chemistry for reliable adhesion and finish quality.", pageImages.prep],
  ["Aluminum Surface Treatment", "Products and support for aluminum preparation, treatment, and finishing workflows.", pageImages.prep],
  ["Electroless Nickel", "Electroless nickel systems for uniform deposition, complex geometries, corrosion protection, and wear resistance.", pageImages.nickel],
  ["Hard Chrome", "Functional chrome systems for wear resistance, hardness, and industrial surface performance.", pageImages.chrome],
  ["Trivalent Chrome", "Modern chrome finishing systems for decorative applications and evolving compliance requirements.", pageImages.chrome],
  ["Lacquers", "HAWKING lacquers and protective finishing products for enhanced durability, appearance, and post-treatment performance.", pageImages.lacquer],
  ["Salts, Colors & Additives", "Industrial salts, colors, brighteners, additives, and supporting materials for plating bath performance and finish control.", pageImages.partners],
];

const serviceCards = [
  ["Laboratory Analysis", "We analyze plating baths, samples, and process conditions to help customers evaluate performance, identify imbalances, and take corrective action.", "Use for: Bath control, sample analysis, quality validation, defect investigation, process correction.", pageImages.lab],
  ["Technical Support", "Our team supports manufacturers with practical process guidance across electroplating lines, from preparation to final finish.", "Use for: Additive dosing, bath maintenance, defect troubleshooting, operating condition review, production stability.", pageImages.support],
  ["Product Selection", "We help customers choose the right chemistry, additives, lacquers, machines, and accessories based on their application, substrate, finish requirements, and production conditions.", "Use for: Nickel, chrome, copper, and zinc processes; plating on plastic; surface preparation; protective finishing; decorative finishing.", pageImages.partners],
  ["Process Optimization", "We help customers improve plating-line performance by reviewing chemical balance, workflow, operating windows, and recurring production issues.", "Use for: Reducing rejection rates, improving finish consistency, stabilizing bath performance, supporting line upgrades, increasing production reliability.", pageImages.hero],
  ["Machines & Accessories", "El Etehadia supplies electroplating machines, accessories, and related equipment needed for industrial plating operations.", "Use for: New line setup, replacement parts, production accessories, equipment upgrades, ongoing operational needs.", pageImages.about],
];

const industryCards = [
  ["Automotive & Components", "Decorative and protective finishes for components requiring appearance, corrosion resistance, and production consistency.", pageImages.chrome],
  ["Sanitary Fittings & Fixtures", "Nickel, chrome, copper, and protective finishing systems for faucets, bathroom fittings, and related products.", pageImages.chrome],
  ["Home Appliances & Hardware", "Surface finishing for handles, fittings, fasteners, accessories, and visible metal or plastic components.", pageImages.zinc],
  ["Industrial Manufacturing", "Functional coatings and process support for parts requiring durability, corrosion resistance, or improved surface properties.", pageImages.hero],
  ["Plastics & Decorative Components", "Plating-on-plastic support for decorative parts that require a metallic appearance with lightweight construction.", pageImages.plastic],
  ["Metal Fabrication", "Preparation, plating, and finishing support for metal parts across industrial and commercial applications.", pageImages.prep],
  ["Furniture & Decorative Hardware", "Finishing systems for decorative hardware, accessories, and metal components where appearance and durability matter.", pageImages.copper],
];

const applicationCards = [
  ["Decorative Nickel-Chrome Finishing", "Support for bright decorative finishes used across fixtures, accessories, appliances, and visible components.", "Decorative finishing", pageImages.chrome],
  ["Anti-Corrosion Zinc Systems", "Zinc and zinc-alloy processes designed to protect industrial parts from corrosion and environmental exposure.", "Corrosion protection", pageImages.zinc],
  ["Plating on Plastic", "Surface preparation and metallization support for plastic parts requiring a metallic decorative finish.", "Plastic metallization", pageImages.plastic],
  ["Electroless Nickel Applications", "Uniform nickel deposition for parts with complex shapes or surfaces requiring corrosion and wear resistance.", "Functional coating", pageImages.nickel],
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
        image: pageImages.hero,
      },
      {
        type: "split",
        eyebrow: "What we do",
        heading: "From Chemistry to Process Control",
        body:
          "We support manufacturers across the full plating workflow: surface preparation, bath chemistry, plating systems, finishing products, equipment, accessories, analysis, and troubleshooting.",
        items: [
          ["Electroplating chemicals and additives", "Chemistry supply for daily bath control, replenishment, and finish performance.", pageImages.partners],
          ["Nickel, chrome, copper, zinc, and plating-on-plastic systems", "Core plating systems for decorative, protective, and functional applications.", pageImages.chrome],
          ["Surface preparation and treatment products", "Cleaners, activation, etching, and pre-treatment products for adhesion and consistent finish quality.", pageImages.prep],
          ["Lacquers and protective finishing materials", "HAWKING lacquers and related protective finishes for surface appearance and durability.", pageImages.lacquer],
          ["Machines, accessories, and production support", "Equipment and supporting parts for new lines, upgrades, and ongoing production needs.", pageImages.about],
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
    heading: "Electroplating Products, Chemicals, Machines & Accessories",
    intro:
      "El Etehadia supplies a wide range of products for industrial surface finishing, including chemistry, additives, lacquers, machines, accessories, and supporting materials.",
    image: pageImages.partners,
    sections: [
      {
        type: "products",
        eyebrow: "Product categories",
        heading: "Products for Every Stage of the Plating Process",
        body:
          "From surface preparation to final finish, El Etehadia provides the products and support needed to run stable electroplating operations.",
        items: productCards,
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
        eyebrow: "Industry fit",
        heading: "Manufacturing sectors that rely on dependable finishes.",
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
    image: pageImages.chrome,
    sections: [
      {
        type: "applications",
        eyebrow: "Application areas",
        heading: "Relevant application support without unsupported case studies.",
        items: applicationCards,
      },
      {
        type: "notice",
        eyebrow: "Project evidence",
        heading: "Verified project stories can be added later.",
        body:
          "This page intentionally avoids customer names, metrics, or project claims that have not been approved. When verified case studies are available, they can be added as named examples.",
        image: pageImages.support,
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
    image: pageImages.partners,
    sections: [
      {
        type: "partners",
        eyebrow: "Recognized brands",
        heading: "Global standards, local support.",
        items: [
          ["MacDermid Enthone", "MacDermid Enthone is a global surface-finishing chemistry company serving industrial, decorative, anti-corrosion, engineering, aluminum treatment, electroless nickel, hard chrome, trivalent chrome, and water-treatment applications.", pageImages.partners],
          ["HAWKING England", "HAWKING lacquers support protective and decorative finishing needs, helping manufacturers improve surface appearance and durability.", pageImages.lacquer],
          ["Licensed Production", "El Etehadia supports local supply of high-quality salts, colors, and related products under trusted technical standards.", pageImages.copper],
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
};

function isActive(href, currentPage) {
  if (currentPage === "products" && href === "/products/") return true;
  if (currentPage === "projects" && href === "/projects/") return true;
  if (currentPage === "news" && href === "/news/") return true;
  return href.includes(`/${currentPage}/`);
}

function header(currentPage) {
  const links = navItems
    .map(([label, href]) => {
      const active = isActive(href, currentPage);
      return `<li class="float-tabs__item"><a href="${href}" class="float-tabs__link${active ? " is-active" : ""}"${active ? ' aria-current="page"' : ""}>${label}</a></li>`;
    })
    .join("");

  return `
    <header class="hero-bar page-bar" id="top-nav">
      <div class="hero-bar__shell">
        <a href="/" class="hero-bar__logo" aria-label="El Etehadia home">
          <img src="https://etehadia.com/logo.png" alt="El Etehadia" width="180" height="56" decoding="async" />
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
          <img class="footer__logo" src="https://etehadia.com/logo.png" alt="El Etehadia" width="160" height="50" loading="lazy" decoding="async" />
          <p class="footer__tag">Electroplating chemicals, machines, accessories, lacquers, laboratory analysis, and technical support.</p>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Company</h4>
          <nav class="footer__nav">
            <a href="/about/">About</a>
            <a href="/products/">Products</a>
            <a href="/projects/">Applications</a>
            <a href="/partners/">Partners</a>
            <a href="/news/">Insights</a>
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
            <a href="tel:+201067358111">+20 10 67358111</a>
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

  return `
    <section class="page-hero" data-reveal>
      <div class="page-hero__copy">
        <p class="section__label">${page.eyebrow}</p>
        <h1>${page.heading}</h1>
        <p>${page.intro}</p>
        ${metrics}
      </div>
      <figure class="page-hero__media">
        <img src="${page.image[0]}" alt="${page.image[1]}" />
      </figure>
    </section>
  `;
}

function sectionHeader(section) {
  return `
    <header class="section__header section__header--split">
      <div>
        <p class="section__label">${section.eyebrow}</p>
        <h2>${section.heading}</h2>
      </div>
      ${section.body ? `<p>${section.body}</p>` : ""}
    </header>
  `;
}

function cardMedia(media) {
  return `<div class="page-card__media"><img src="${media[0]}" alt="${media[1]}" loading="lazy" /></div>`;
}

function renderSection(section) {
  const head = sectionHeader(section);

  if (section.type === "split") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="technical-grid">${section.items
      .map(([title, body, media]) => `<article>${cardMedia(media)}<div class="page-card__body"><h3>${title}</h3><p>${body}</p></div></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "services") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="technical-grid">${section.items
      .map(([title, body, useFor, media]) => `<article>${cardMedia(media)}<div class="page-card__body"><h3>${title}</h3><p>${body}</p><strong>${useFor}</strong></div></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "products" || section.type === "industryTiles" || section.type === "applications" || section.type === "partners") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="technical-grid">${section.items
      .map(([title, body, third, fourth]) => {
        const media = Array.isArray(third) ? third : fourth;
        const label = Array.isArray(third) ? "" : `<span>${third}</span>`;
        return `<article>${cardMedia(media)}<div class="page-card__body">${label}<h3>${title}</h3><p>${body}</p></div></article>`;
      })
      .join("")}</div></div></section>`;
  }

  if (section.type === "process") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="process-list">${section.items
      .map(([step, title, body]) => `<article><span>${step}</span><h3>${title}</h3><p>${body}</p></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "matrix") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="capability-table" role="table">${section.rows
      .map(([scope, systems, sectors]) => `<div role="row"><strong role="cell">${scope}</strong><span role="cell">${systems}</span><span role="cell">${sectors}</span></div>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "related") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="proof-strip">${section.items
      .map((item) => `<span>${item}</span>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "spotlight" || section.type === "notice") {
    return `<section class="section page-section" data-reveal><div class="section__inner"><div class="spotlight-block"><div class="spotlight-block__copy"><p class="section__label">${section.eyebrow}</p><h2>${section.heading}</h2><p>${section.body}</p></div><div class="spotlight-block__media"><img src="${section.image[0]}" alt="${section.image[1]}" loading="lazy" /></div></div></div></section>`;
  }

  if (section.type === "articles") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="filter-row" aria-label="Insight filters"><button type="button">All</button><button type="button">Technical notes</button><button type="button">Troubleshooting</button><button type="button">Product guidance</button></div><div class="article-list">${section.items
      .map(([title, body, category, media]) => `<article>${cardMedia(media)}<div class="page-card__body"><span>${category}</span><h3>${title}</h3><p>${body}</p></div></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "contact") return contactSection(section);
  return "";
}

function contactSection(section) {
  return `
    <section class="section page-section contact-page" data-reveal>
      <div class="section__inner">
        ${sectionHeader(section)}
        <div class="contact-layout">
          <aside class="contact-card">
            <h3>Contact details</h3>
            <p>For technical inquiries, please include the process type, substrate, required finish, current issue, and any available bath or sample details.</p>
            <dl>
              <dt>Phone</dt>
              <dd><a href="tel:+20226833830">+20 2 26833830</a><br /><a href="tel:+201067358111">+20 10 67358111</a></dd>
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
    { threshold: 0.16 },
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

  toggle.addEventListener("click", () => {
    const open = topNav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      topNav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
}

function setupPageTransitions() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const veil = document.createElement("div");
  veil.className = "page-transition-veil";
  veil.setAttribute("aria-hidden", "true");
  veil.innerHTML = '<img class="page-transition-veil__logo" src="/images/transition-logo.png" alt="" decoding="async" />';
  document.body.appendChild(veil);

  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    link.addEventListener("click", (event) => {
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

function render() {
  const currentPage = document.body.dataset.page || "about";
  const page = pages[currentPage] || pages.about;
  const app = document.querySelector("#app");

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
}

render();

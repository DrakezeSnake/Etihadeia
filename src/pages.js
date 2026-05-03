import { setupLanguageToggle } from "./i18n.js";
import "../styles.css";
import "./pages.css";

const navItems = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Services", "/services/"],
  ["Industries", "/industries/"],
  ["Projects", "/projects/"],
  ["Partners", "/partners/"],
  ["News", "/news/"],
  ["Contact", "/contact/"],
];

const pages = {
  about: {
    title: "About Etihadeia",
    eyebrow: "Company profile",
    heading: "Technical supply, service discipline, and field experience for industrial work.",
    intro:
      "Etihadeia supports manufacturers, contractors, consultants, and infrastructure operators with electrical supplies, control components, aviation systems, electroplating technologies, and coordinated service support from Egypt.",
    image: "/assets/about-section.jfif",
    imageAlt: "Etihadeia industrial supply vehicle beside Egyptian infrastructure at sunset",
    metrics: [
      ["47+", "Years of experience"],
      ["120+", "Experts"],
      ["138", "Completed projects"],
    ],
    sections: [
      {
        type: "split",
        eyebrow: "What we deliver",
        heading: "From technical requirement to delivered supply.",
        body:
          "The work starts with the site condition, the drawings, the required standards, and the procurement window. Etihadeia then coordinates compatible products, documentation, alternates, delivery readiness, and the support needed after installation.",
        items: [
          ["Technical supply", "Electrical products, control equipment, aviation lighting systems, electroplating chemicals, machines, and accessories selected around project fit."],
          ["Engineering coordination", "Support for specifications, drawings, equivalent items, commissioning requirements, and documentation packages."],
          ["Service standards", "Field-aware teams that understand lead times, site constraints, safety requirements, and the practical pressure of shutdown windows."],
        ],
      },
      {
        type: "timeline",
        eyebrow: "Operating philosophy",
        heading: "A practical sequence for critical supply decisions.",
        items: [
          ["01", "Read the requirement", "Review the application, operating environment, standards, loads, safety needs, and project schedule."],
          ["02", "Match the supply", "Select products and alternates that fit performance, compatibility, availability, documentation, and lifecycle needs."],
          ["03", "Support the handover", "Coordinate logistics, records, installation readiness, after-sales response, and future replacement planning."],
        ],
      },
      {
        type: "standards",
        eyebrow: "Standards",
        heading: "Documented standards for procurement review.",
        items: ["Quality system records", "Vendor approvals", "Safety compliance records", "Product data sheets"],
      },
    ],
    cta: ["Start a technical discussion", "/contact/"],
  },
  services: {
    title: "Services",
    eyebrow: "Service portfolio",
    heading: "Service lines built around real industrial procurement.",
    intro:
      "Etihadeia’s service portfolio connects product sourcing with technical review, site readiness, and long-term availability. The goal is simple: the right component, the right document, the right timing.",
    image: "/assets/why-us-standards.png",
    imageAlt: "Industrial technician monitoring electroplating tanks and control equipment",
    sections: [
      {
        type: "services",
        eyebrow: "Core services",
        heading: "Six service lines, one operating standard.",
        items: [
          ["Electric Supplies", "Distribution products, protection equipment, cables, wiring accessories, panels, terminals, and replacement parts for industrial and infrastructure projects."],
          ["Control & Automation", "PLC hardware, drives, sensors, HMI, instrumentation, and control components for production lines, utilities, and facility systems."],
          ["HVAC & Mechanical", "HVAC and mechanical components for industrial buildings, process areas, service rooms, and operational facilities."],
          ["Airport Lighting & Aviation", "Runway lighting, airport technologies, aviation electrical systems, and safety-critical technical supply for airside environments."],
          ["Electrical Services", "Installation support, testing coordination, maintenance response, troubleshooting, and energization assistance for electrical systems."],
          ["Digital & IoT Supplies", "Connected monitoring devices, IoT-ready components, gateways, sensors, and digital infrastructure products for smarter operations."],
        ],
      },
      {
        type: "process",
        eyebrow: "How we work",
        heading: "Clear for procurement, technical enough for engineering.",
        items: [
          ["Scope alignment", "Confirm the application, standard, site condition, quantity, installation context, and delivery target."],
          ["Product matching", "Select compatible supplies, alternates, accessories, and documentation that engineering teams can approve."],
          ["Execution support", "Coordinate delivery, site readiness, testing needs, warranty records, and future service requirements."],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Capability matrix",
        heading: "Scope, systems, and sector fit.",
        rows: [
          ["Electrical supply", "Panels, cable systems, controls, protection", "Infrastructure, industrial, commercial"],
          ["Automation", "PLC, sensors, drives, HMI, instrumentation", "Manufacturing, utilities, water, smart cities"],
          ["Aviation", "Runway lighting, airport systems, electrical safety supply", "Airports, transport, infrastructure"],
        ],
      },
      {
        type: "related",
        eyebrow: "Related industries",
        heading: "Service lines connect across sectors.",
        items: ["Oil & Gas", "Infrastructure", "Aviation", "Power & Water", "Smart Cities"],
      },
    ],
    cta: ["Discuss a service scope", "/contact/"],
  },
  industries: {
    title: "Industries",
    eyebrow: "Sectors we serve",
    heading: "Industrial technology shaped around each operating environment.",
    intro:
      "Oil and gas, airports, utilities, factories, commercial assets, and smart-city programs all ask different questions. Etihadeia structures supply and service support around safety, uptime, compliance, lifecycle, and response time.",
    image: "/assets/industry-infrastructure.png",
    imageAlt: "Modern elevated transit and urban infrastructure at dusk",
    sections: [
      {
        type: "industryTiles",
        eyebrow: "Sector map",
        heading: "Where Etihadeia’s supply model fits.",
        items: [
          ["Oil & Gas", "Shutdown-sensitive environments that need robust electrical supply, approved alternates, and fast replacement planning."],
          ["Infrastructure", "Transport, utilities, and civic assets requiring long-life components, clear documentation, and dependable availability."],
          ["Industrial", "Factories and process facilities supported with automation, controls, electroplating technologies, and maintenance supply."],
          ["Aviation", "Airport systems, runway lighting, and aviation electrical products shaped around operational safety and uptime."],
          ["Power & Water", "Utility environments where protection, continuity, instrumentation, and lifecycle coordination matter."],
          ["Commercial", "High-use buildings that need dependable electrical, HVAC, mechanical, and control components."],
          ["Smart Cities", "Connected monitoring, digital devices, sensors, and infrastructure components for city-scale programs."],
          ["Electrical Services", "Installation, testing, energization, troubleshooting, and maintenance support for modern assets."],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "Featured sector",
        heading: "Infrastructure projects need durable coordination.",
        body:
          "Transport, utilities, and urban infrastructure work depends on products that can be reviewed, delivered, installed, maintained, and replaced without ambiguity. Etihadeia’s role is to keep the supply side technically clear.",
      },
      {
        type: "related",
        eyebrow: "Related services",
        heading: "Services commonly paired with sector work.",
        items: ["Electric Supplies", "Control & Automation", "Airport Lighting & Aviation", "Digital & IoT Supplies"],
      },
    ],
    cta: ["Match services to your sector", "/services/"],
  },
  projects: {
    title: "Projects",
    eyebrow: "Project proof",
    heading: "Representative project work shaped as proof, not decoration.",
    intro:
      "These representative project stories describe the kind of technical coordination Etihadeia supports across industrial, utility, aviation, and smart infrastructure work. Final client names and figures can be added when cleared.",
    image: "/assets/why-us-transformative.png",
    imageAlt: "Technician maintaining infrastructure in a modern data center",
    sections: [
      {
        type: "featuredProject",
        eyebrow: "Featured project",
        heading: "Airport lighting modernization support.",
        body:
          "Aviation teams need components that are compatible, documented, and ready for safety-critical review. Etihadeia supports these scopes by aligning product options, technical records, accessories, delivery timing, and handover requirements before site work begins.",
      },
      {
        type: "projects",
        eyebrow: "Case study gallery",
        heading: "Project cards for future evidence.",
        items: [
          ["Automation upgrade", "Manufacturing", "Controls, drives, sensors, and field devices aligned for a staged facility upgrade.", "Reduced substitution risk"],
          ["Utility infrastructure supply", "Power & Water", "Protection, cabling, panels, and control components coordinated for resilient operating conditions.", "Improved documentation flow"],
          ["Industrial maintenance scope", "Oil & Gas", "Replacement parts and electrical service response planned around production uptime windows.", "Faster readiness checks"],
          ["Urban systems package", "Smart Cities", "Connected infrastructure components prepared for monitoring and city-scale deployment.", "Cleaner system handover"],
        ],
      },
    ],
    cta: ["Plan a similar project", "/contact/"],
  },
  partners: {
    title: "Partners",
    eyebrow: "Partner ecosystem",
    heading: "A partner network built for industrial confidence.",
    intro:
      "Etihadeia’s partner ecosystem supports dependable sourcing, technical continuity, product availability, and documentation across electrical, automation, aviation, and industrial technology scopes.",
    image: "/assets/why-us-innovation.png",
    imageAlt: "Laboratory analyst performing quality control with chemical analysis equipment",
    sections: [
      {
        type: "partnerLogos",
        eyebrow: "Partner ecosystem",
        heading: "Technology and supply relationships that support project delivery.",
        items: ["Schneider", "ABB", "Siemens", "Rockwell", "Eaton", "Honeywell", "3M", "Phoenix Contact", "Legrand", "Belden", "Panduit", "nVent"],
      },
      {
        type: "split",
        eyebrow: "Collaboration",
        heading: "Procurement support with technical discipline.",
        body:
          "Partner relationships help Etihadeia coordinate availability, alternates, technical documents, and product suitability across demanding project timelines.",
        items: [
          ["Technology partners", "Core electrical, automation, control, and infrastructure products for reviewed project requirements."],
          ["Specialist suppliers", "Niche components, electroplating products, airport systems, and replacement parts for practical site needs."],
          ["Project collaborators", "Coordination with EPCs, contractors, consultants, maintenance teams, and asset owners."],
        ],
      },
    ],
    cta: ["Explore partnership opportunities", "/contact/"],
  },
  brochure: {
    title: "Brochure",
    eyebrow: "Downloads",
    heading: "Capability documents for procurement and engineering review.",
    intro:
      "This page organizes the documents a procurement lead or engineer would expect during vendor evaluation: company overview, sector capability sheets, and service-line summaries.",
    image: "/assets/about-section.jfif",
    imageAlt: "Industrial facility corridor with technical equipment",
    sections: [
      {
        type: "downloads",
        eyebrow: "Document library",
        heading: "Document library.",
        items: [
          ["Main Brochure", "Company overview", "PDF, corporate capability profile"],
          ["Infrastructure Sheet", "Sector capability", "PDF, transport and utilities focus"],
          ["Aviation Systems Sheet", "Service capability", "PDF, airport lighting and aviation systems"],
          ["Automation Sheet", "Technical supply", "PDF, controls, sensors, drives, and instrumentation"],
        ],
      },
      {
        type: "notice",
        eyebrow: "Download note",
        heading: "Document requests can route to technical sales.",
        body:
          "For controlled documents, revision-specific files, or project-specific submittals, the download flow can route requests to technical sales before release.",
      },
    ],
    cta: ["Request the latest documents", "/contact/"],
  },
  news: {
    title: "News",
    eyebrow: "News and insights",
    heading: "Technical notes and company updates for industrial buyers.",
    intro:
      "The news area is shaped around content that would be useful to procurement leads, engineers, consultants, and infrastructure teams: technical notes, sector explainers, and company updates.",
    image: "/assets/industry-oil-gas.png",
    imageAlt: "Offshore oil and gas platform at dusk",
    sections: [
      {
        type: "featuredArticle",
        eyebrow: "Featured article",
        heading: "How industrial teams evaluate technical supply partners.",
        body:
          "A practical note on specification clarity, documentation quality, response time, product continuity, and after-sales support in industrial supply decisions.",
      },
      {
        type: "articles",
        eyebrow: "Latest insights",
        heading: "Useful reading for procurement and engineering teams.",
        items: [
          ["Airport lighting procurement", "What to confirm before selecting runway lighting components, accessories, and documentation packages.", "Aviation"],
          ["Automation replacement planning", "How maintenance teams can reduce downtime risk by mapping control components before urgent replacement.", "Technical"],
          ["Utility project documentation", "Why submittals, alternates, and lifecycle records matter for power and water infrastructure scopes.", "Infrastructure"],
        ],
      },
      {
        type: "notice",
        eyebrow: "Editorial standard",
        heading: "Company announcements should be published only after verification.",
        body: "Until final news releases are supplied, the page focuses on useful technical and sector content rather than unverified company claims.",
      },
    ],
    cta: ["Send a media inquiry", "/contact/"],
  },
  contact: {
    title: "Contact",
    eyebrow: "Contact us",
    heading: "Bring us the scope, site condition, or supply challenge.",
    intro:
      "Route your inquiry to the right team. Share the application, project stage, quantities, standards, and timeline so Etihadeia can respond with the right technical or commercial contact.",
    image: "/assets/why-us-innovation.png",
    imageAlt: "Quality control specialist working with industrial analysis equipment",
    sections: [{ type: "contact", eyebrow: "Inquiry form", heading: "Tell us what you are planning." }],
  },
};

function header(currentPage) {
  const links = navItems
    .map(
      ([label, href]) =>
        `<li class="float-tabs__item"><a href="${href}" class="float-tabs__link${href.includes(currentPage) ? " is-active" : ""}"${href.includes(currentPage) ? ' aria-current="page"' : ""}>${label}</a></li>`,
    )
    .join("");

  return `
    <header class="hero-bar page-bar" id="top-nav">
      <div class="hero-bar__shell">
        <a href="/" class="hero-bar__logo" aria-label="Etihadeia home">
          <img src="https://etehadia.com/logo.png" alt="Etihadeia" width="180" height="56" decoding="async" />
        </a>
        <div class="hero-bar__center">
          <nav class="hero-bar__nav-panel" aria-label="Primary">
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
          <img class="footer__logo" src="https://etehadia.com/logo.png" alt="Etihadeia" width="160" height="50" loading="lazy" decoding="async" />
          <p class="footer__tag">A subsidiary of Industrial Holdings Group</p>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Company</h4>
          <nav class="footer__nav">
            <a href="/about/">About</a>
            <a href="/projects/">Projects</a>
            <a href="/partners/">Partners</a>
            <a href="/news/">News</a>
          </nav>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Services</h4>
          <nav class="footer__nav">
            <a href="/services/">Electrical Supplies</a>
            <a href="/services/">Automation</a>
            <a href="/services/">Aviation Systems</a>
            <a href="/brochure/">Brochure</a>
          </nav>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Contact</h4>
          <nav class="footer__nav">
            <a href="/industries/">Industries</a>
            <a href="/contact/">Inquiry form</a>
          </nav>
          <a href="/contact/" class="footer__cta">Contact us</a>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container footer__bottom-inner">
          <p>© <span id="year"></span> Etihadeia. All rights reserved.</p>
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
        <img src="${page.image}" alt="${page.imageAlt}" />
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

const imageLibrary = {
  "Technical supply": ["/assets/why-us-standards.png", "Industrial technician reviewing equipment and control systems"],
  "Engineering coordination": ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80", "Engineer reviewing industrial equipment and technical plans"],
  "Service standards": ["/assets/why-us-transformative.png", "Technician maintaining modern infrastructure equipment"],
  "Electric Supplies": ["https://images.unsplash.com/photo-1621905251189-3b9c84bb8f8b?auto=format&fit=crop&w=900&q=80", "Electrical supplies and installation components"],
  "Control & Automation": ["https://images.unsplash.com/photo-1581092921461-7d65ca45393a?auto=format&fit=crop&w=900&q=80", "Industrial automation controls and production equipment"],
  "HVAC & Mechanical": ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80", "Mechanical and HVAC service equipment"],
  "Airport Lighting & Aviation": ["https://images.unsplash.com/photo-1556388158-158e5dd80442?auto=format&fit=crop&w=900&q=80", "Airport runway and aviation lighting environment"],
  "Electrical Services": ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80", "Electrical field service and wiring work"],
  "Digital & IoT Supplies": ["https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=900&q=80", "Connected digital infrastructure and monitoring systems"],
  "Oil & Gas": ["/assets/industry-oil-gas.png", "Offshore oil and gas platform at dusk"],
  Infrastructure: ["/assets/industry-infrastructure.png", "Modern elevated transport and urban infrastructure"],
  Industrial: ["https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80", "Industrial facility with heavy equipment"],
  Aviation: ["https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80", "Commercial aviation and airport operations"],
  "Power & Water": ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80", "Power generation and utility infrastructure"],
  Commercial: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80", "Commercial building infrastructure"],
  "Smart Cities": ["https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=900&q=80", "Connected urban technology environment"],
  "Automation upgrade": ["https://images.unsplash.com/photo-1581092921461-7d65ca45393a?auto=format&fit=crop&w=900&q=80", "Automated industrial production equipment"],
  "Utility infrastructure supply": ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80", "Power and water infrastructure"],
  "Industrial maintenance scope": ["/assets/why-us-standards.png", "Industrial technician monitoring equipment"],
  "Urban systems package": ["/assets/industry-infrastructure.png", "Urban infrastructure and transport systems"],
  "Main Brochure": ["https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80", "Technical documents and corporate brochure"],
  "Infrastructure Sheet": ["/assets/industry-infrastructure.png", "Infrastructure capability document visual"],
  "Aviation Systems Sheet": ["https://images.unsplash.com/photo-1556388158-158e5dd80442?auto=format&fit=crop&w=900&q=80", "Aviation systems capability document visual"],
  "Automation Sheet": ["https://images.unsplash.com/photo-1581092921461-7d65ca45393a?auto=format&fit=crop&w=900&q=80", "Automation capability document visual"],
  "Airport lighting procurement": ["https://images.unsplash.com/photo-1556388158-158e5dd80442?auto=format&fit=crop&w=900&q=80", "Airport runway lighting at dusk"],
  "Automation replacement planning": ["https://images.unsplash.com/photo-1581092921461-7d65ca45393a?auto=format&fit=crop&w=900&q=80", "Industrial automation replacement planning"],
  "Utility project documentation": ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80", "Utility infrastructure documentation topic"],
};

function imageFor(title, fallback = ["/assets/why-us-innovation.png", "Industrial technology visual"]) {
  return imageLibrary[title] || fallback;
}

function cardMedia(title) {
  const [src, alt] = imageFor(title);
  return `<div class="page-card__media"><img src="${src}" alt="${alt}" loading="lazy" /></div>`;
}

function renderSection(section) {
  const head = sectionHeader(section);

  if (section.type === "split") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="feature-list">${section.items
      .map(([title, body]) => `<article>${cardMedia(title)}<div class="page-card__body"><h3>${title}</h3><p>${body}</p></div></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "timeline" || section.type === "process") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="process-list">${section.items
      .map(([step, title, body]) => `<article><span>${step}</span><h3>${title}</h3><p>${body}</p></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "services" || section.type === "industryTiles") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="technical-grid">${section.items
      .map(([title, body]) => `<article>${cardMedia(title)}<div class="page-card__body"><h3>${title}</h3><p>${body}</p></div></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "matrix") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="capability-table" role="table">${section.rows
      .map(([scope, systems, sectors]) => `<div role="row"><strong role="cell">${scope}</strong><span role="cell">${systems}</span><span role="cell">${sectors}</span></div>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "standards" || section.type === "related" || section.type === "partnerLogos") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="proof-strip">${section.items
      .map((item) => `<span>${item}</span>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "featuredProject" || section.type === "spotlight" || section.type === "notice" || section.type === "featuredArticle") {
    const [src, alt] = imageFor(section.heading, section.type === "featuredProject" ? imageFor("Airport Lighting & Aviation") : imageFor("Infrastructure"));
    return `<section class="section page-section" data-reveal><div class="section__inner"><div class="spotlight-block"><div class="spotlight-block__copy"><p class="section__label">${section.eyebrow}</p><h2>${section.heading}</h2><p>${section.body}</p></div><div class="spotlight-block__media"><img src="${src}" alt="${alt}" loading="lazy" /></div></div></div></section>`;
  }

  if (section.type === "projects") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="filter-row" aria-label="Project filters"><button type="button">All</button><button type="button">Infrastructure</button><button type="button">Aviation</button><button type="button">Industrial</button></div><div class="project-gallery">${section.items
      .map(
        ([title, sector, body, result]) =>
          `<article>${cardMedia(title)}<div class="page-card__body"><span>${sector}</span><h3>${title}</h3><p>${body}</p><strong>${result}</strong></div></article>`,
      )
      .join("")}</div></div></section>`;
  }

  if (section.type === "downloads") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="download-list">${section.items
      .map(([title, kind, meta]) => `<a href="#" aria-disabled="true">${cardMedia(title)}<div class="page-card__body"><strong>${title}</strong><span>${kind}</span><small>${meta}</small></div></a>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "articles") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="filter-row" aria-label="News filters"><button type="button">All</button><button type="button">Company</button><button type="button">Insights</button><button type="button">Technical</button></div><div class="article-list">${section.items
      .map(([title, body, category]) => `<article>${cardMedia(title)}<div class="page-card__body"><span>${category}</span><h3>${title}</h3><p>${body}</p></div></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "contact") {
    return contactSection(section);
  }

  return "";
}

function contactSection(section) {
  return `
    <section class="section page-section contact-page" data-reveal>
      <div class="section__inner">
        ${sectionHeader(section)}
        <div class="contact-layout">
          <aside class="contact-card">
            <h3>Department routing</h3>
            <p>We usually respond within one business day.</p>
            <dl>
              <dt>Email</dt>
              <dd><a href="mailto:info@etihadeia.example">info@etihadeia.example</a></dd>
              <dt>Phone</dt>
              <dd><a href="tel:+15551234567">+1 (555) 123-4567</a></dd>
              <dt>Office</dt>
              <dd>Industrial District, Suite 100<br />City, Country</dd>
            </dl>
            <div class="map-visual" role="img" aria-label="Industrial district location visual">
              <span>Industrial district location visual</span>
            </div>
          </aside>
          <form class="contact-form" novalidate>
            <label><span>Name</span><input name="name" autocomplete="name" required /></label>
            <label><span>Email</span><input type="email" name="email" autocomplete="email" required /></label>
            <label><span>Company</span><input name="company" autocomplete="organization" /></label>
            <label><span>Department</span><select name="department" required><option value="">Select Subject</option><option>Technical Sales</option><option>Procurement</option><option>Service Support</option><option>Partnership</option></select></label>
            <label class="contact-form__full"><span>Message</span><textarea name="message" rows="6" required></textarea></label>
            <p class="form-status" role="status" aria-live="polite">Please complete the required fields before sending.</p>
            <button class="industrial-button" type="submit">Submit</button>
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
        <h2>Ready to turn a requirement into a reviewed supply path?</h2>
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

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
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

function setupPageTransitions() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const veil = document.createElement("div");
  veil.className = "page-transition-veil";
  veil.setAttribute("aria-hidden", "true");
  document.body.appendChild(veil);

  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      event.preventDefault();
      veil.classList.add("is-leaving");
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 220);
    });
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");
  if (!form || !status) return;
  const messages = {
    invalid: {
      en: "Please complete the required fields before sending.",
      ar: "يرجى إكمال الحقول المطلوبة قبل الإرسال.",
    },
    sending: {
      en: "Sending request...",
      ar: "جار إرسال الطلب...",
    },
    success: {
      en: "Thank you. Your inquiry is ready for the Etihadeia team.",
      ar: "شكراً لك. أصبح استفسارك جاهزاً لفريق الاتحادية.",
    },
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
  setupPageTransitions();
  setupContactForm();
}

render();

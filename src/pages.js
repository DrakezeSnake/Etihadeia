import { setupLanguageToggle } from "./i18n.js";
import "./styles.css";

const navItems = [
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
    heading: "Industrial capability with a service team behind every supply.",
    intro:
      "Etihadeia supports infrastructure, energy, aviation, and manufacturing teams with technical supply, field coordination, and solution guidance for demanding industrial environments.",
    image: "/assets/about-section.jfif",
    imageAlt: "Industrial team reviewing technical drawings beside control equipment",
    metrics: [
      ["47+", "Years of experience"],
      ["120+", "Experts"],
      ["138", "Completed projects"],
    ],
    sections: [
      {
        type: "split",
        eyebrow: "What we deliver",
        heading: "From specification to energized systems.",
        body:
          "Etihadeia helps project teams select, source, and coordinate industrial technologies across electrical, automation, aviation, and infrastructure scopes.",
        items: [
          ["Technical supply", "Specified products, compatible components, and structured procurement support."],
          ["Engineering coordination", "Review support for project requirements, drawings, site conditions, and commissioning needs."],
          ["Service standards", "Field-ready teams, documented workflows, and dependable response for critical work."],
        ],
      },
      {
        type: "timeline",
        eyebrow: "Operating philosophy",
        heading: "A practical sequence for industrial decisions.",
        items: [
          ["01", "Read the site", "Understand the environment, loads, controls, safety needs, and project constraints."],
          ["02", "Shape the supply", "Match components and systems to the required performance, lead time, and lifecycle."],
          ["03", "Support delivery", "Coordinate documentation, logistics, installation readiness, and after-sales response."],
        ],
      },
      {
        type: "standards",
        eyebrow: "Standards",
        heading: "Certification and compliance records prepared for final verification.",
        items: ["ISO quality system", "Vendor approvals", "Safety compliance records", "Quality manual"],
      },
    ],
    cta: ["Start a technical discussion", "/contact/"],
  },
  services: {
    title: "Services",
    eyebrow: "Service portfolio",
    heading: "A connected supply and service model for industrial work.",
    intro:
      "Each service line is planned around compatibility, uptime, and project clarity, giving final product and capability content a clear structure from the first review.",
    image: "/assets/why-us-standards.png",
    imageAlt: "Industrial technician monitoring electroplating tanks and control equipment",
    sections: [
      {
        type: "services",
        eyebrow: "Core services",
        heading: "Six service lines, one industrial standard.",
        items: [
          ["Electric Supplies", "Supply support for distribution, protection, cables, accessories, and compatible replacement parts."],
          ["Control & Automation", "PLC, drives, sensors, HMI, instrumentation, and control components for reliable operations."],
          ["HVAC & Mechanical", "Mechanical and HVAC supply coordination for industrial buildings and operational facilities."],
          ["Airport Lighting & Aviation", "Runway lighting, aviation systems, airport technologies, and safety-focused technical supply."],
          ["Electrical Services", "Field-ready electrical service support for installation, testing, maintenance, and energization."],
          ["Digital & IoT Supplies", "Connected devices, monitoring equipment, and IoT-ready components for smart infrastructure."],
        ],
      },
      {
        type: "process",
        eyebrow: "How we work",
        heading: "Clear enough for procurement, technical enough for engineering.",
        items: [
          ["Scope alignment", "Confirm the application, standards, constraints, and delivery target."],
          ["Product matching", "Select compatible supplies, alternates, and supporting documentation."],
          ["Execution support", "Coordinate delivery, site readiness, testing, and future service needs."],
        ],
      },
      {
        type: "matrix",
        eyebrow: "Capability matrix",
        heading: "A working matrix for scope, systems, and sector fit.",
        rows: [
          ["Electrical supply", "Panels, cable systems, controls, protection", "Infrastructure, industrial, commercial"],
          ["Automation", "PLC, sensors, drives, HMI, instrumentation", "Manufacturing, utilities, smart cities"],
          ["Aviation", "Runway lighting, airport systems, technical supply", "Airports, transport, infrastructure"],
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
      "Different sectors create different constraints. Etihadeia structures supply and service support around safety, uptime, compliance, and lifecycle expectations.",
    image: "/assets/industry-infrastructure.png",
    imageAlt: "Modern elevated transit and urban infrastructure at dusk",
    sections: [
      {
        type: "industryTiles",
        eyebrow: "Sector map",
        heading: "Capability notes by market.",
        items: [
          ["Oil & Gas", "Critical environments, shutdown windows, replacement planning, and resilient electrical supply."],
          ["Infrastructure", "Transport, utilities, and civic assets requiring durable documentation and long-term availability."],
          ["Industrial", "Manufacturing and process facilities supported with automation, control, and maintenance supply."],
          ["Aviation", "Airport systems, runway lighting, and operational technologies shaped around safety and uptime."],
          ["Power & Water", "Utility environments where protection, continuity, and lifecycle coordination matter."],
          ["Commercial", "High-use buildings that need dependable electrical, mechanical, and control components."],
          ["Smart Cities", "Connected infrastructure, monitoring devices, and digital supply for city-scale programs."],
          ["Electrical Services", "Installation, testing, energization, and maintenance support for modern assets."],
        ],
      },
      {
        type: "spotlight",
        eyebrow: "Featured sector",
        heading: "Infrastructure projects need durable coordination.",
        body:
          "Transport, utilities, and urban infrastructure work requires dependable components, clear documentation, long-term availability, and fast technical communication.",
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
    heading: "Representative project stories ready for verified case studies.",
    intro:
      "This page is structured for final project evidence. Until verified project data is supplied, each case study uses draft summaries with clear result fields.",
    image: "/assets/why-us-transformative.png",
    imageAlt: "Technician maintaining infrastructure in a modern data center",
    sections: [
      {
        type: "featuredProject",
        eyebrow: "Featured project draft",
        heading: "Airport lighting modernization support.",
        body:
          "Challenge: coordinate compatible technical supply for a safety-critical aviation environment. Solution: align documentation, product options, and delivery readiness. Result: a clean handover framework ready for verified performance data.",
      },
      {
        type: "projects",
        eyebrow: "Case study gallery",
        heading: "Project cards for future evidence.",
        items: [
          ["Automation upgrade", "Manufacturing", "Controls and field devices aligned for a staged facility upgrade.", "Measured uptime field"],
          ["Utility infrastructure supply", "Power & Water", "Electrical supplies coordinated for resilient operating conditions.", "Availability field"],
          ["Industrial maintenance scope", "Oil & Gas", "Replacement parts and service response planned around uptime windows.", "Response-time field"],
          ["Urban systems package", "Smart Cities", "Connected infrastructure components prepared for city-scale deployment.", "Coverage field"],
        ],
      },
    ],
    cta: ["Plan a similar project", "/contact/"],
  },
  partners: {
    title: "Partners",
    eyebrow: "Partner ecosystem",
    heading: "A supply network built for industrial confidence.",
    intro:
      "Etihadeia works with established technology names, specialist suppliers, and project collaborators to support dependable sourcing and technical continuity.",
    image: "/assets/why-us-innovation.png",
    imageAlt: "Laboratory analyst performing quality control with chemical analysis equipment",
    sections: [
      {
        type: "partnerLogos",
        eyebrow: "Partner ecosystem",
        heading: "Names shown until final logo permissions are supplied.",
        items: ["Schneider", "ABB", "Siemens", "Rockwell", "Eaton", "Honeywell", "3M", "Phoenix Contact", "Legrand", "Belden", "Panduit", "nVent"],
      },
      {
        type: "split",
        eyebrow: "Collaboration",
        heading: "Procurement support with technical discipline.",
        body:
          "Partner relationships help Etihadeia coordinate availability, alternates, technical documents, and product suitability across demanding project timelines.",
        items: [
          ["Technology partners", "Support for core electrical, automation, and infrastructure systems."],
          ["Specialist suppliers", "Niche products and replacement parts for practical site requirements."],
          ["Project collaborators", "Coordination with EPCs, contractors, consultants, and asset owners."],
        ],
      },
    ],
    cta: ["Explore partnership opportunities", "/contact/"],
  },
  brochure: {
    title: "Brochure",
    eyebrow: "Downloads",
    heading: "Brochures and capability sheets prepared for verified PDFs.",
    intro:
      "Use this page as the download hub for the final corporate brochure and sector-specific documents. Draft file entries stay visible until approved PDFs are supplied.",
    image: "/assets/about-section.jfif",
    imageAlt: "Industrial facility corridor with technical equipment",
    sections: [
      {
        type: "downloads",
        eyebrow: "Document library",
        heading: "Download cards with draft file metadata.",
        items: [
          ["Main Brochure", "Corporate overview", "PDF draft, final file pending"],
          ["Infrastructure Sheet", "Sector capability", "PDF draft, final file pending"],
          ["Aviation Systems Sheet", "Service capability", "PDF draft, final file pending"],
          ["Automation Sheet", "Technical supply", "PDF draft, final file pending"],
        ],
      },
      {
        type: "notice",
        eyebrow: "Download note",
        heading: "Gated-download option can be added later.",
        body:
          "If lead capture becomes required, this page can add a short request form before file access without changing the public route.",
      },
    ],
    cta: ["Request the latest documents", "/contact/"],
  },
  news: {
    title: "News",
    eyebrow: "News and insights",
    heading: "A verified-news structure without invented announcements.",
    intro:
      "The page is ready for real updates. Current articles are draft editorial entries so the site can show layout, filters, and holding states without publishing unverified claims.",
    image: "/assets/industry-oil-gas.png",
    imageAlt: "Offshore oil and gas platform at dusk",
    sections: [
      {
        type: "featuredArticle",
        eyebrow: "Featured article",
        heading: "How industrial teams evaluate technical supply partners.",
        body:
          "A draft insight summary about specification clarity, documentation, response time, and lifecycle support in industrial supply decisions.",
      },
      {
        type: "articles",
        eyebrow: "Latest draft articles",
        heading: "Content slots for future verified news.",
        items: [
          ["Company update", "Draft summary for a future verified Etihadeia announcement.", "Company"],
          ["Sector insight", "Draft summary for infrastructure and utility procurement guidance.", "Insights"],
          ["Technical note", "Draft summary for automation, electrical, or aviation systems content.", "Technical"],
        ],
      },
      {
        type: "notice",
        eyebrow: "Verification note",
        heading: "Latest news items are held until verified content is supplied.",
        body: "This holding copy prevents draft articles from reading as published company claims.",
      },
    ],
    cta: ["Send a media inquiry", "/contact/"],
  },
  contact: {
    title: "Contact",
    eyebrow: "Contact us",
    heading: "Bring us the scope, site condition, or supply challenge.",
    intro:
      "Route your inquiry to the right team with the form below. Draft contact details can be replaced with verified office data before launch.",
    image: "/assets/why-us-innovation.png",
    imageAlt: "Quality control specialist working with industrial analysis equipment",
    sections: [{ type: "contact", eyebrow: "Inquiry form", heading: "Tell us what you are planning." }],
  },
};

function header(currentPage) {
  const links = navItems
    .map(([label, href]) => `<a href="${href}"${href.includes(currentPage) ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("");

  return `
    <header class="site-header site-header--solid">
      <a class="brand" href="/" aria-label="Etihadeia home">
        <span class="brand__mark" aria-hidden="true">
          <i class="brand__hex brand__hex--silver"></i>
          <i class="brand__hex brand__hex--red"></i>
          <i class="brand__hex brand__hex--graphite"></i>
        </span>
        <span class="brand__text">
          <strong>Etihadeia</strong>
          <small>Industrial Technology</small>
        </span>
      </a>
      <div class="header-actions">
        <nav class="site-nav" aria-label="Primary">${links}</nav>
        <button class="language-toggle" type="button" data-language-toggle aria-label="Switch to Arabic">
          <span data-language-label>العربية</span>
        </button>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="footer__inner">
        <div>
          <strong>Etihadeia</strong>
          <p>A subsidiary of Industrial Holdings Group</p>
        </div>
        <nav aria-label="Footer">
          ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
          <a href="/brochure/">Brochure</a>
        </nav>
        <p>© <span id="year"></span> Etihadeia. All rights reserved.</p>
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

function renderSection(section) {
  const head = sectionHeader(section);

  if (section.type === "split") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="feature-list">${section.items
      .map(([title, body]) => `<article><h3>${title}</h3><p>${body}</p></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "timeline" || section.type === "process") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="process-list">${section.items
      .map(([step, title, body]) => `<article><span>${step}</span><h3>${title}</h3><p>${body}</p></article>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "services" || section.type === "industryTiles") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="technical-grid">${section.items
      .map(([title, body]) => `<article><h3>${title}</h3><p>${body}</p></article>`)
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
    return `<section class="section page-section" data-reveal><div class="section__inner"><div class="spotlight-block"><p class="section__label">${section.eyebrow}</p><h2>${section.heading}</h2><p>${section.body}</p></div></div></section>`;
  }

  if (section.type === "projects") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="filter-row" aria-label="Project filters"><button type="button">All</button><button type="button">Infrastructure</button><button type="button">Aviation</button><button type="button">Industrial</button></div><div class="project-gallery">${section.items
      .map(
        ([title, sector, body, result]) =>
          `<article><span>${sector}</span><h3>${title}</h3><p>${body}</p><strong>${result}</strong></article>`,
      )
      .join("")}</div></div></section>`;
  }

  if (section.type === "downloads") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="download-list">${section.items
      .map(([title, kind, meta]) => `<a href="#" aria-disabled="true"><strong>${title}</strong><span>${kind}</span><small>${meta}</small></a>`)
      .join("")}</div></div></section>`;
  }

  if (section.type === "articles") {
    return `<section class="section page-section" data-reveal><div class="section__inner">${head}<div class="filter-row" aria-label="News filters"><button type="button">All</button><button type="button">Company</button><button type="button">Insights</button><button type="button">Technical</button></div><div class="article-list">${section.items
      .map(([title, body, category]) => `<article><span>${category}</span><h3>${title}</h3><p>${body}</p></article>`)
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
        <h2>Ready to move from draft content to project detail?</h2>
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
      en: "Sending draft request...",
      ar: "جار إرسال الطلب المؤقت...",
    },
    success: {
      en: "Thank you. This draft form is ready for backend connection.",
      ar: "شكراً لك. هذا النموذج المؤقت جاهز للربط بالخادم.",
    },
  };
  const message = (key) => messages[key][document.documentElement.lang === "ar" ? "ar" : "en"];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("has-errors");
      status.textContent = message("invalid");
      form.reportValidity();
      return;
    }

    const button = form.querySelector("button");
    button.disabled = true;
    status.textContent = message("sending");
    window.setTimeout(() => {
      status.textContent = message("success");
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
  setupContactForm();
}

render();

import { SITE_ORIGIN_FALLBACK } from "./data/solutions.js";

export const SITE_NAME = "El Etehadia";
export const SITE_LEGAL_NAME = "El Etehadia Company for Import, Export & Agencies";
export const SITE_EMAIL = "info@etehadia.com";
export const SITE_PHONES = ["+20-2-26833830", "+20-10-64439997"];
export const SITE_DESCRIPTION =
  "El Etehadia supplies electroplating chemicals, plating machines, lacquers, laboratory analysis, and technical support for industrial surface finishing in Egypt and the Middle East.";

const PAGE_PATHS = {
  about: "/about/",
  services: "/services/",
  products: "/products/",
  industries: "/industries/",
  projects: "/projects/",
  partners: "/partners/",
  macdermidEnthoneEgypt: "/macdermid-enthone-egypt/",
  news: "/news/",
  contact: "/contact/",
  brochure: "/brochure/",
  solutions: "/solutions/",
};

/** @param {string} json */
export function escapeJsonScript(json) {
  return String(json).replace(/</g, "\\u003c");
}

export function getSiteOrigin() {
  if (typeof globalThis.location !== "undefined" && globalThis.location.origin) {
    return globalThis.location.origin.replace(/\/$/, "");
  }
  return SITE_ORIGIN_FALLBACK.replace(/\/$/, "");
}

function entityId(origin, fragment) {
  return `${origin}/${fragment}`;
}

function absoluteUrl(origin, href) {
  if (!href) return undefined;
  if (href.startsWith("http")) return href;
  const path = href.startsWith("/") ? href : `/${href}`;
  return `${origin}${path}`;
}

/** @param {string} origin */
export function buildOrganization(origin) {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": entityId(origin, "#organization"),
    name: SITE_LEGAL_NAME,
    alternateName: [SITE_NAME, "الاتحادية"],
    url: `${origin}/`,
    logo: `${origin}/images/nav-logo.svg`,
    image: `${origin}/images/nav-logo.svg`,
    description: SITE_DESCRIPTION,
    foundingDate: "1997",
    email: SITE_EMAIL,
    telephone: SITE_PHONES[0],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "Place", name: "Middle East" },
    ],
    knowsAbout: [
      "Electroplating",
      "Surface finishing",
      "Plating chemistry",
      "Industrial surface treatment",
      "Laboratory analysis for plating baths",
    ],
    additionalType: "https://www.productontology.org/doc/Industrial_equipment_supplier",
    contactPoint: [
      { "@id": entityId(origin, "#contact-phone") },
      { "@id": entityId(origin, "#contact-mobile") },
      { "@id": entityId(origin, "#contact-email") },
    ],
  };
}

/** @param {string} origin */
export function buildContactPoints(origin) {
  return [
    {
      "@type": "ContactPoint",
      "@id": entityId(origin, "#contact-phone"),
      contactType: "customer service",
      telephone: SITE_PHONES[0],
      areaServed: "EG",
      availableLanguage: ["en", "ar"],
    },
    {
      "@type": "ContactPoint",
      "@id": entityId(origin, "#contact-mobile"),
      contactType: "customer service",
      telephone: SITE_PHONES[1],
      areaServed: "EG",
      availableLanguage: ["en", "ar"],
    },
    {
      "@type": "ContactPoint",
      "@id": entityId(origin, "#contact-email"),
      contactType: "customer service",
      email: SITE_EMAIL,
      areaServed: "EG",
      availableLanguage: ["en", "ar"],
    },
  ];
}

/** @param {string} origin */
export function buildWebSite(origin) {
  return {
    "@type": "WebSite",
    "@id": entityId(origin, "#website"),
    url: `${origin}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": entityId(origin, "#organization") },
    inLanguage: ["en", "ar"],
  };
}

/**
 * @param {{ name: string; href?: string }[]} items
 * @param {string} origin
 */
export function buildBreadcrumbList(items, origin) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: absoluteUrl(origin, item.href) } : {}),
    })),
  };
}

/**
 * @param {import("./data/solutions.js").Solution[]} list
 * @param {string} origin
 */
export function buildSolutionsItemList(list, origin) {
  const elements = list
    .filter((s) => !s.landingOnly)
    .map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: s.title,
      url: `${origin}/solutions/${s.slug}/`,
    }));

  return {
    "@type": "ItemList",
    name: "Surface finishing solutions",
    itemListElement: elements,
  };
}

/**
 * @param {import("./data/productDocuments.js").ProductDocument[]} list
 * @param {string} origin
 */
export function buildProductDocumentsItemList(list, origin) {
  return {
    "@type": "ItemList",
    name: "Product pages",
    itemListElement: list.map((doc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: doc.title,
      url: `${origin}/solutions/documents/${doc.slug}/`,
    })),
  };
}

/**
 * @param {import("./data/solutions.js").Solution} solution
 * @param {string} origin
 */
export function buildSolutionService(solution, origin) {
  const url = `${origin}/solutions/${solution.slug}/`;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: solution.title,
    description: solution.description,
    url,
    provider: { "@id": entityId(origin, "#organization") },
    areaServed: { "@type": "Country", name: "Egypt" },
    serviceType: "Surface finishing solution",
  };
}

/**
 * @param {import("./data/productDocuments.js").ProductDocument} doc
 * @param {string} origin
 */
export function buildProductDocument(doc, origin) {
  const url = `${origin}/solutions/documents/${doc.slug}/`;
  return {
    "@type": "TechArticle",
    "@id": `${url}#document`,
    headline: doc.title,
    name: doc.title,
    description: doc.description,
    image: absoluteUrl(origin, doc.heroImage),
    url,
    mainEntityOfPage: url,
    about: doc.category,
    provider: { "@id": entityId(origin, "#organization") },
  };
}

/**
 * @param {{ name: string; description: string; url?: string }} item
 * @param {string} origin
 */
export function buildProduct(item, origin) {
  return {
    "@type": "Product",
    name: item.name,
    description: item.description,
    url: item.url || `${origin}/products/`,
    brand: { "@id": entityId(origin, "#organization") },
    manufacturer: { "@id": entityId(origin, "#organization") },
    offers: {
      "@type": "Offer",
      url: `${origin}/contact/`,
      availability: "https://schema.org/InStock",
      seller: { "@id": entityId(origin, "#organization") },
    },
  };
}

/**
 * @param {{ name: string; description: string; url?: string }} item
 * @param {string} origin
 */
export function buildService(item, origin) {
  return {
    "@type": "Service",
    name: item.name,
    description: item.description,
    url: item.url || `${origin}/services/`,
    provider: { "@id": entityId(origin, "#organization") },
    areaServed: { "@type": "Country", name: "Egypt" },
  };
}

/** @param {Record<string, unknown>[]} entities */
export function injectStructuredData(entities) {
  if (typeof document === "undefined") return;

  document.querySelectorAll('script[data-json-ld="site"]').forEach((node) => node.remove());

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-json-ld", "site");
  script.textContent = escapeJsonScript(
    JSON.stringify({
      "@context": "https://schema.org",
      "@graph": entities,
    }),
  );
  document.head.appendChild(script);
}

/** @param {string} origin */
function baseEntities(origin) {
  return [buildOrganization(origin), ...buildContactPoints(origin), buildWebSite(origin)];
}

/** Homepage */
export function applyHomeStructuredData() {
  const origin = getSiteOrigin();
  injectStructuredData([
    ...baseEntities(origin),
    buildBreadcrumbList([{ name: "Home", href: "/" }], origin),
  ]);
}

/**
 * @param {{
 *   pageKey: string;
 *   pageTitle: string;
 *   pagePath?: string;
 *   productItems?: [string, string, unknown?][];
 *   serviceItems?: [string, string, string?, unknown?][];
 * }} options
 */
export function applyPageStructuredData({ pageKey, pageTitle, pagePath, productItems, serviceItems }) {
  const origin = getSiteOrigin();
  const entities = [...baseEntities(origin)];

  const crumbs = [{ name: "Home", href: "/" }];
  const path = pagePath || PAGE_PATHS[pageKey];
  if (path) {
    crumbs.push({ name: pageTitle, href: path });
  }
  entities.push(buildBreadcrumbList(crumbs, origin));

  if (productItems?.length) {
    entities.push(
      ...productItems.map(([name, description]) =>
        buildProduct({ name, description }, origin),
      ),
    );
  }

  if (serviceItems?.length) {
    entities.push(
      ...serviceItems.map(([name, description]) =>
        buildService({ name, description }, origin),
      ),
    );
  }

  if (pageKey === "macdermidEnthoneEgypt") {
    const brandId = `${origin}/macdermid-enthone-egypt/#macdermid-enthone`;
    entities.push(
      {
        "@type": "Organization",
        "@id": brandId,
        name: "MacDermid Enthone Industrial Solutions",
        alternateName: "MacDermid Enthone",
        description: "Surface-finishing chemistry and process technology for industrial manufacturing applications.",
      },
      {
        "@type": "Service",
        "@id": `${origin}/macdermid-enthone-egypt/#distribution-service`,
        name: "MacDermid Enthone distribution and technical support in Egypt",
        serviceType: "Surface-finishing chemistry distribution",
        provider: { "@id": entityId(origin, "#organization") },
        brand: { "@id": brandId },
        areaServed: { "@type": "Country", name: "Egypt" },
        url: `${origin}/macdermid-enthone-egypt/`,
      },
    );
  }

  injectStructuredData(entities);
}

/**
 * @param {{
 *   type: "landing";
 *   solutions: import("./data/solutions.js").Solution[];
 *   documents?: import("./data/productDocuments.js").ProductDocument[];
 * } | {
 *   type: "detail";
 *   solution: import("./data/solutions.js").Solution;
 * } | {
 *   type: "document";
 *   document: import("./data/productDocuments.js").ProductDocument;
 * }} options
 */
export function applySolutionsStructuredData(options) {
  const origin = getSiteOrigin();
  const entities = [...baseEntities(origin)];

  if (options.type === "landing") {
    entities.push(
      buildBreadcrumbList(
        [
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions/" },
        ],
        origin,
      ),
      buildSolutionsItemList(options.solutions, origin),
    );
    if (options.documents?.length) {
      entities.push(buildProductDocumentsItemList(options.documents, origin));
    }
  } else if (options.type === "detail") {
    const { solution } = options;
    entities.push(
      buildBreadcrumbList(
        [
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions/" },
          { name: solution.title, href: `/solutions/${solution.slug}/` },
        ],
        origin,
      ),
      buildSolutionService(solution, origin),
    );
  } else {
    const { document: doc } = options;
    entities.push(
      buildBreadcrumbList(
        [
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions/" },
          { name: doc.title, href: `/solutions/documents/${doc.slug}/` },
        ],
        origin,
      ),
      buildProductDocument(doc, origin),
    );
  }

  injectStructuredData(entities);
}

/** @param {{ name: string; href?: string }[]} items @param {string} origin */
export function renderBreadcrumbJsonLd(items, origin) {
  const payload = buildBreadcrumbList(items, origin);
  return `<script type="application/ld+json">${escapeJsonScript(JSON.stringify({ "@context": "https://schema.org", ...payload }))}</script>`;
}

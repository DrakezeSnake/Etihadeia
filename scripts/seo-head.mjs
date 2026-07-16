export const SITE_URL = "https://eletehadia.com";
export const SITE_NAME = "El Etehadia";
export const DEFAULT_SOCIAL_IMAGE = "/images/hero-electroplating-line.jpg";

export const staticPageSeo = {
  "/": {
    title: "Electroplating Chemicals & Surface Finishing Egypt | El Etehadia",
    description:
      "El Etehadia supplies electroplating chemicals, plating equipment, lacquers, laboratory analysis, and technical support across Egypt and the Middle East.",
    image: "/images/hero-electroplating-line.jpg",
  },
  "/about/": {
    title: "About El Etehadia | Electroplating Experts Since 1997",
    description:
      "Learn about El Etehadia, a Cairo-based supplier of electroplating chemicals, equipment, laboratory analysis, and technical support since 1997.",
    image: "/assets/optimized/el-etehadia-industrial-supply.webp",
  },
  "/services/": {
    title: "Electroplating Laboratory & Technical Services | El Etehadia",
    description:
      "Improve plating-line performance with laboratory analysis, troubleshooting, product selection, process optimization, machines, and technical support.",
    image: "/assets/water-laboratory-testing-services.jpg",
  },
  "/products/": {
    title: "Electroplating Chemicals & Products in Egypt | El Etehadia",
    description:
      "Explore electroplating chemicals and products for nickel, chrome, copper, zinc, plastics, light metals, corrosion protection, and industrial finishing.",
    image: "/assets/racked parts.jpg",
  },
  "/industries/": {
    title: "Industrial Electroplating Applications in Egypt | El Etehadia",
    description:
      "Surface-finishing solutions for automotive, aerospace, appliances, sanitary fittings, machinery, energy, oil and gas, packaging, and plastics.",
    image: "/assets/industrial-manufacturing-parts.jpg",
  },
  "/projects/": {
    title: "Electroplating Applications & Process Support | El Etehadia",
    description:
      "See practical applications for nickel-chrome finishing, zinc protection, plating on plastic, bath control, electroless nickel, and troubleshooting.",
    image: "/assets/LHZA11508.BLK.webp",
  },
  "/partners/": {
    title: "Surface Finishing Technology Partners | El Etehadia",
    description:
      "Discover El Etehadia's surface-finishing partners and brands, including MacDermid Enthone, HAWKING England, Sisecam, and Nickelhütte Aue.",
    image: "/assets/macdermid-enthone-industrial-solutions.png",
  },
  "/brochure/": {
    title: "Electroplating Product Brochures & Documents | El Etehadia",
    description:
      "Browse electroplating product brochures, technical documents, factsheets, and case studies for industrial surface-finishing operations.",
    image: "/assets/plating-chemistry-dosing-station.png",
  },
  "/news/": {
    title: "Electroplating Insights & Technical Guides | El Etehadia",
    description:
      "Read practical electroplating guidance about bath control, surface preparation, coating selection, common defects, and industrial finishing.",
    image: "/assets/laboratory-analysis-technician.jpg",
  },
  "/contact/": {
    title: "Contact El Etehadia | Electroplating Support in Cairo",
    description:
      "Contact El Etehadia in Cairo for electroplating chemicals, product selection, laboratory analysis, technical support, machines, and accessories.",
    image: "/images/contact-technical-support.jpg",
  },
  "/solutions/": {
    title: "Surface Finishing & Electroplating Solutions | El Etehadia",
    description:
      "Explore solutions for surface preparation, anti-corrosion, decorative coatings, electroless nickel, light metals, wear resistance, and WaterCARE.",
    image: "/assets/racked parts.jpg",
  },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absoluteUrl(value) {
  if (/^https?:\/\//i.test(value)) return encodeURI(value);
  return encodeURI(`${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`);
}

function breadcrumbItems(pathname, title) {
  if (pathname === "/") {
    return [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }];
  }

  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }];
  const segments = pathname.split("/").filter(Boolean);
  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name:
        index === segments.length - 1
          ? title.replace(/\s*\|.*$/, "")
          : segment.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
      item: `${SITE_URL}${currentPath}/`,
    });
  });
  return items;
}

export function buildStaticStructuredData({ pathname, title, description, image }) {
  const canonical = `${SITE_URL}${pathname}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: "El Etehadia Company for Import, Export & Agencies",
        alternateName: ["El Etehadia", "الاتحادية"],
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/images/nav-logo.svg`,
        image: absoluteUrl(image || DEFAULT_SOCIAL_IMAGE),
        foundingDate: "1997",
        email: "info@etehadia.com",
        telephone: "+20-2-26833830",
        address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
        areaServed: [
          { "@type": "Country", name: "Egypt" },
          { "@type": "Place", name: "Middle East" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en", "ar"],
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(image || DEFAULT_SOCIAL_IMAGE) },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: breadcrumbItems(pathname, title),
      },
    ],
  };
}

export function renderSeoHead({ pathname, title, description, image = DEFAULT_SOCIAL_IMAGE }) {
  const canonical = `${SITE_URL}${pathname}`;
  const imageUrl = absoluteUrl(image);
  const jsonLd = JSON.stringify(buildStaticStructuredData({ pathname, title, description, image })).replace(/</g, "\\u003c");

  return `<!-- seo:start -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
    <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="ar_EG" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta property="og:image:alt" content="${escapeHtml(`${SITE_NAME} — electroplating and surface finishing in Egypt`)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
    <meta name="theme-color" content="#2a292b" />
    <script type="application/ld+json" data-json-ld="site">${jsonLd}</script>
    <!-- seo:end -->`;
}

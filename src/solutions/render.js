/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** @param {string} description */
export function truncateMetaDescription(description, maxLen = 155) {
  const t = description.trim().replace(/\s+/g, " ");
  return t.length <= maxLen ? t : `${t.slice(0, Math.max(0, maxLen - 1)).trim()}…`;
}

/**
 * @param {import("../data/solutions.js").Solution} solution
 * @param {{ href: string; label: string }} ctaHref
 */
export function renderSolutionCard(solution, ctaHref) {
  const subLinks = solution.subcategories
    .map(
      (sub) =>
        `<li><span class="solution-card__family-link">${escapeHtml(sub.title)}</span></li>`,
    )
    .join("");
  return `
    <article class="solution-card" role="listitem" data-reveal>
      <div class="solution-card__body">
        <a href="${escapeHtml(ctaHref.href.split("?")[0])}" class="solution-card__icon-link" aria-label="${escapeHtml(solution.title)}">
          ${renderSolutionIcon(solution)}
        </a>
        <h3 class="solution-card__title"><a href="${escapeHtml(ctaHref.href)}">${escapeHtml(solution.title)}</a></h3>
        <p class="solution-card__desc">${escapeHtml(solution.description)}</p>
        ${
          subLinks
            ? `<ul class="solution-card__family-list">${subLinks}</ul>`
            : '<p class="solution-card__families-muted">Portfolio overview.</p>'
        }
      </div>
    </article>
  `;
}

/**
 * @param {import("../data/solutions.js").Solution[]} list
 */
export function renderSolutionGrid(list) {
  const cards = list
    .map((s) => {
      const isAll = s.landingOnly === true;
      const href = isAll ? "/solutions/" : `/solutions/${s.slug}/`;
      const label = s.ctaLabel || (isAll ? "All Solutions" : "See featured products");
      return renderSolutionCard(s, { href, label });
    })
    .join("");
  return `<div id="solution-catalog" class="solution-grid" role="list">${cards}</div>`;
}

/**
 * @param {import("../data/solutions.js").Solution[]} list
 */
export function renderFeaturedFamiliesPreview(list) {
  const sections = list.filter((s) => s.slug !== "all-solutions")
    .map((s) => {
      const lis = s.subcategories
        .map(
          (sub) =>
            `<li><a href="/solutions/${escapeHtml(s.slug)}/#${escapeHtml(sub.slug)}">${escapeHtml(sub.title)}</a></li>`,
        )
        .join("");
      return `
        <div class="families-preview__group" role="listitem">
          <h3 class="families-preview__solution">${escapeHtml(s.title)}</h3>
          <ul class="families-preview__list">${lis}</ul>
        </div>
      `;
    })
    .join("");
  return `
    <section class="solution-section families-preview solution-section--alt" aria-labelledby="families-heading" data-reveal>
      <div class="solution-section__inner">
        <header class="solution-section-header">
          <p class="solution-eyebrow">Featured product families</p>
          <h2 id="families-heading">Browse families by solution</h2>
        </header>
        <div class="families-preview__grid" role="list">${sections}</div>
      </div>
    </section>
  `;
}

/**
 * @param {import("../data/solutions.js").SolutionSubcategory[]} subcategories
 */
export function renderFeaturedProductFamilies(subcategories) {
  const blocks = subcategories
    .map((sub) => {
      const anchor = `#${escapeHtml(sub.slug)}`;
      const portfolio = sub.products?.length ? renderProductPortfolio(sub.products) : "";
      return `
      <article class="solution-family-block" id="${escapeHtml(sub.slug)}">
        <h3 class="solution-family-block__title">
          <a href="${anchor}">${escapeHtml(sub.title)}</a>
        </h3>
        ${sub.description ? `<p class="solution-family-block__desc">${escapeHtml(sub.description)}</p>` : ""}
        ${portfolio}
      </article>`;
    })
    .join("");
  return `
    <section class="solution-section families-detail" aria-labelledby="families-detail-heading">
      <div class="solution-section__inner">
        <h2 id="families-detail-heading">Featured product families</h2>
        <div class="families-detail__stack">${blocks}</div>
      </div>
    </section>
  `;
}

/** @param {import("../data/solutions.js").SolutionProduct[]} products */
export function renderProductPortfolio(products) {
  const items = products
    .map(
      (p) =>
        `<li class="portfolio-item"><strong class="portfolio-item__name">${escapeHtml(p.name)}</strong><span class="portfolio-item__desc">${escapeHtml(p.description)}</span></li>`,
    )
    .join("");
  return `
    <div class="product-portfolio">
      <p class="product-portfolio__label">Product examples</p>
      <ul class="product-portfolio__list">${items}</ul>
    </div>
  `;
}

/**
 * @param {string} headline
 * @param {string} intro
 * @param {{ src: string; alt: string }} [media]
 */
export function renderLandingHero(headline, intro, media) {
  const heroMedia = media
    ? `<figure class="solution-hero__media">
        <img data-solution-img src="${escapeHtml(media.src)}" alt="${escapeHtml(media.alt)}" data-fallback-alt="Surface finishing solutions" loading="eager" decoding="async" />
      </figure>`
    : "";
  return `
    <section class="solution-hero solution-hero--landing" data-reveal>
      <div class="solution-hero__shell">
        <div class="solution-hero__copy">
          <p class="solution-eyebrow">Solutions</p>
          <h1>${escapeHtml(headline)}</h1>
          <p class="solution-hero__intro">${escapeHtml(intro)}</p>
        </div>
        ${heroMedia}
      </div>
    </section>
  `;
}

function renderSolutionIcon(solution, extraClass = "") {
  const symbolName = getSolutionSymbol(solution.slug);
  const iconMarkup = symbolName
    ? `<span class="material-symbols-outlined solution-card__symbol" aria-hidden="true">${escapeHtml(symbolName)}</span>`
    : `<img class="solution-card__icon-img" src="${escapeHtml(solution.icon)}" alt="" aria-hidden="true" decoding="async" loading="lazy" />`;
  return `<span class="solution-card__icon${extraClass ? ` ${escapeHtml(extraClass)}` : ""}" title="${escapeHtml(solution.iconAlt)}">${iconMarkup}</span>`;
}

function getSolutionSymbol(slug) {
  const map = {
    "surface-conditioning": "water_drop",
    "anti-corrosion": "precision_manufacturing",
    "light-metal-finishes": "architecture",
    "decorative-coatings": "diamond",
    "plating-on-plastics": "layers",
    "electroless-nickel": "biotech",
    "wear-resistance": "settings_suggest",
    "precious-metals": "auto_awesome",
    "plastic-recycling": "recycling",
    watercare: "opacity",
    "all-solutions": "grid_view",
  };
  return map[slug] || "";
}

/**
 * @param {import("../data/solutions.js").Solution} solution
 */
export function renderSolutionDetailHero(solution) {
  return `
    <section class="solution-hero solution-hero--detail" data-reveal>
      <div class="solution-hero__detail-grid">
        <div class="solution-hero__media-wrap">
          <img data-solution-img class="solution-hero__detail-img" src="${escapeHtml(solution.image)}" alt="${escapeHtml(solution.imageAlt)}" data-fallback-alt="Surface finishing" loading="eager" decoding="async" />
        </div>
        <div class="solution-hero__detail-copy">
          ${renderSolutionIcon(solution, "solution-hero__icon")}
          <nav class="solution-breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li><a href="/">Home</a></li>
              <li><a href="/solutions/">Solutions</a></li>
              <li aria-current="page">${escapeHtml(solution.title)}</li>
            </ol>
          </nav>
          <h1>${escapeHtml(solution.title)}</h1>
          <p class="solution-hero__intro">${escapeHtml(solution.description)}</p>
        </div>
      </div>
    </section>
  `;
}

/**
 * @param {import("../data/solutions.js").Solution[]} others
 */
export function renderRelatedSolutions(others, currentSlug) {
  const cards = others
    .filter((s) => s.slug !== currentSlug && !s.landingOnly)
    .slice(0, 4)
    .map((s) => {
      const icon = renderSolutionIcon(s, "related-card__icon");
      return `
        <article class="related-card" role="listitem">
          <a class="related-card__link" href="/solutions/${escapeHtml(s.slug)}/">
            ${icon}
            <h3>${escapeHtml(s.title)}</h3>
          </a>
        </article>
      `;
    })
    .join("");
  return `
    <section class="solution-section related-solutions" aria-labelledby="related-heading" data-reveal>
      <div class="solution-section__inner">
        <h2 id="related-heading">Related solutions</h2>
        <div class="related-solutions__rail" tabindex="0" role="region" aria-label="Related solutions carousel">
          <div class="related-solutions__track" role="list">${cards}</div>
        </div>
      </div>
    </section>
  `;
}

/** @param {import("../data/blogArticles.js").BlogArticle | undefined} article */
export function renderRelatedInsight(article) {
  if (!article) return "";
  const enHref = `/news/${article.slug}/`;
  const arHref = `/ar/news/${article.slug}/`;
  return `
    <section class="solution-section related-insight" aria-labelledby="related-insight-heading" data-reveal>
      <div class="solution-section__inner related-insight__inner">
        <div>
          <p class="solution-eyebrow" data-language-label-en="Related insight" data-language-label-ar="مقالة ذات صلة">Related insight</p>
          <h2 id="related-insight-heading" data-language-label-en="A practical guide for this solution" data-language-label-ar="دليل عملي لهذا الحل">A practical guide for this solution</h2>
          <p data-language-label-en="Read the production-focused technical article connected to this surface-finishing solution." data-language-label-ar="اقرأ المقال الفني العملي المرتبط بحل تشطيب الأسطح هذا.">Read the production-focused technical article connected to this surface-finishing solution.</p>
        </div>
        <a class="industrial-button" href="${escapeHtml(enHref)}" data-en-href="${escapeHtml(enHref)}" data-ar-href="${escapeHtml(arHref)}" data-language-label-en="${escapeHtml(article.en.title)}" data-language-label-ar="${escapeHtml(article.ar.title)}">${escapeHtml(article.en.title)}</a>
      </div>
    </section>
  `;
}

export function renderContactCta() {
  return `
    <section class="section final-cta" data-reveal>
      <div class="section__inner">
        <p class="section__label">Next step</p>
        <h2>Need support for your plating line?</h2>
        <p>Send us your inquiry, product requirement, or technical issue. Our team can help with product selection, lab analysis, and process support.</p>
        <a class="industrial-button" href="/contact/">Ask about product availability</a>
      </div>
    </section>
  `;
}

export function renderExpandedIntro(text) {
  return `
    <section class="solution-expanded-intro solution-section solution-section--tight">
      <div class="solution-section__inner"><p>${escapeHtml(text)}</p></div>
    </section>
  `;
}

/**
 * @param {import("../data/productDocuments.js").ProductDocument[]} docs
 */
export function renderProductDocumentGrid(docs) {
  const cards = docs
    .map(
      (doc) => `
        <article class="document-card" role="listitem" data-reveal>
          <a class="document-card__media" href="/solutions/documents/${escapeHtml(doc.slug)}/">
            <img src="${escapeHtml(doc.heroImage)}" alt="${escapeHtml(doc.imageAlt)}" loading="lazy" decoding="async" />
          </a>
          <div class="document-card__body">
            <span>${escapeHtml(doc.category)}</span>
            <h3><a href="/solutions/documents/${escapeHtml(doc.slug)}/">${escapeHtml(doc.title)}</a></h3>
            <p>${escapeHtml(doc.description)}</p>
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <section class="solution-section document-catalog solution-section--alt" aria-labelledby="document-catalog-heading" data-reveal>
      <div class="solution-section__inner">
        <header class="solution-section-header">
          <div>
            <p class="solution-eyebrow">Products</p>
            <h2 id="document-catalog-heading">Product pages</h2>
          </div>
          <p>Browse focused product pages built from the latest supplied product brochures, factsheets, and case studies.</p>
        </header>
        <div class="document-grid" role="list">${cards}</div>
      </div>
    </section>
  `;
}

/**
 * @param {import("../data/productDocuments.js").ProductDocument} doc
 * @param {import("../data/productDocuments.js").ProductDocument[]} related
 */
export function renderProductDocumentDetail(doc, related = []) {
  const secondaryImages = (doc.images || [])
    .map(
      (src) => `
        <figure class="document-gallery__item">
          <img src="${escapeHtml(src)}" alt="${escapeHtml(doc.imageAlt)}" loading="lazy" decoding="async" />
        </figure>
      `,
    )
    .join("");

  const relatedCards = related
    .map(
      (item) => `
        <article class="related-card" role="listitem">
          <a class="related-card__link" href="/solutions/documents/${escapeHtml(item.slug)}/">
            <span class="related-card__media">
              <img src="${escapeHtml(item.heroImage)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" decoding="async" />
            </span>
            <span class="related-card__category">${escapeHtml(item.category)}</span>
            <h3>${escapeHtml(item.title)}</h3>
          </a>
        </article>
      `,
    )
    .join("");

  return `
    <div class="document-detail">
      <section class="solution-hero solution-hero--detail document-hero" data-reveal>
        <div class="solution-hero__detail-grid">
          <div class="solution-hero__media-wrap">
            <img data-solution-img class="solution-hero__detail-img" src="${escapeHtml(doc.heroImage)}" alt="${escapeHtml(doc.imageAlt)}" data-fallback-alt="Product document image" loading="eager" decoding="async" />
          </div>
          <div class="solution-hero__detail-copy">
            <span class="solution-card__icon solution-hero__icon" title="${escapeHtml(doc.category)}">
              <span class="material-symbols-outlined solution-card__symbol" aria-hidden="true">description</span>
            </span>
            <nav class="solution-breadcrumbs" aria-label="Breadcrumb">
              <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/solutions/">Solutions</a></li>
                <li aria-current="page">${escapeHtml(doc.title)}</li>
              </ol>
            </nav>
            <p class="document-hero__badge">${escapeHtml(doc.badge)}</p>
            <h1>${escapeHtml(doc.title)}</h1>
            <p class="solution-hero__intro">${escapeHtml(doc.description)}</p>
          </div>
        </div>
      </section>

      <section class="solution-section document-overview">
        <div class="solution-section__inner document-overview__grid">
          <div>
            <p class="solution-eyebrow">${escapeHtml(doc.category)}</p>
            <h2>Overview</h2>
            <p>${escapeHtml(doc.summary)}</p>
          </div>
          <aside class="document-meta">
            <span>Document type</span>
            <strong>${escapeHtml(doc.badge)}</strong>
          </aside>
        </div>
      </section>

      <section class="solution-section document-detail-lists solution-section--alt">
        <div class="solution-section__inner document-detail-lists__grid">
          <div>
            <p class="solution-eyebrow">Key features</p>
            <h2>What it supports</h2>
            <ul>${doc.keyFeatures.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
          </div>
          <div>
            <p class="solution-eyebrow">Applications</p>
            <h2>Where it fits</h2>
            <ul>${doc.applications.map((application) => `<li>${escapeHtml(application)}</li>`).join("")}</ul>
          </div>
        </div>
      </section>

      ${
        secondaryImages
          ? `<section class="solution-section document-gallery" aria-label="Additional document images"><div class="solution-section__inner document-gallery__grid">${secondaryImages}</div></section>`
          : ""
      }

      <section class="solution-section related-solutions document-related-solutions" aria-labelledby="related-documents-heading" data-reveal>
        <div class="solution-section__inner">
          <h2 id="related-documents-heading">Related documents</h2>
          <div class="related-solutions__rail" tabindex="0" role="region" aria-label="Related product documents">
            <div class="related-solutions__track" role="list">${relatedCards}</div>
          </div>
        </div>
      </section>

      ${renderContactCta()}
    </div>
  `;
}

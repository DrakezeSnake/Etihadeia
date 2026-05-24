/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** @param {string} s */
function escapeJsonScript(s) {
  return String(s).replace(/</g, "\\u003c");
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
        `<li><a class="solution-card__family-link" href="${escapeHtml(ctaHref.href.split("#")[0])}#${escapeHtml(sub.slug)}">${escapeHtml(sub.title)}</a></li>`,
    )
    .join("");
  const iconImg = `
    <img class="solution-card__icon-img" src="${escapeHtml(solution.icon)}" alt="" aria-hidden="true" decoding="async" loading="lazy" />
  `;
  return `
    <article class="solution-card" role="listitem" data-reveal>
      <div class="solution-card__body">
        <a href="${escapeHtml(ctaHref.href.split("?")[0])}" class="solution-card__icon-link" aria-label="${escapeHtml(solution.title)}">
          <span class="solution-card__icon" title="${escapeHtml(solution.iconAlt)}">${iconImg}</span>
        </a>
        <h3 class="solution-card__title"><a href="${escapeHtml(ctaHref.href)}">${escapeHtml(solution.title)}</a></h3>
        <p class="solution-card__desc">${escapeHtml(solution.description)}</p>
        ${
          subLinks
            ? `<ul class="solution-card__family-list">${subLinks}</ul>`
            : '<p class="solution-card__families-muted">Portfolio overview.</p>'
        }
        <a class="solution-card__cta" href="${escapeHtml(ctaHref.href)}">${escapeHtml(ctaHref.label)}
          <span class="solution-card__cta-arrow" aria-hidden="true">&rarr;</span>
        </a>
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
          <a class="solution-hero__primary-btn" href="#solution-catalog">Explore Solutions</a>
        </div>
        ${heroMedia}
      </div>
    </section>
  `;
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
          <div class="solution-card__icon solution-hero__icon" title="${escapeHtml(solution.iconAlt)}">
            <img src="${escapeHtml(solution.icon)}" alt="" aria-hidden="true" decoding="async" loading="eager" />
          </div>
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
      const icon = `
        <span class="solution-card__icon related-card__icon" title="${escapeHtml(s.iconAlt)}">
          <img class="solution-card__icon-img" src="${escapeHtml(s.icon)}" alt="" aria-hidden="true" decoding="async" loading="lazy" />
        </span>`;
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

export function renderContactCta() {
  return `
    <section class="solution-section solution-contact-cta" data-reveal>
      <div class="solution-section__inner solution-contact-cta__inner">
        <h2>Need help selecting the right surface finishing solution?</h2>
        <p>Connect with our team to identify the right chemistry, process, and finish for your application.</p>
        <a class="solution-contact-cta__btn" href="/contact/">Contact Us</a>
      </div>
    </section>
  `;
}

/** @param {string} canonicalBase site origin without trailing slash */
export function renderBreadcrumbJsonLd(items, canonicalBase) {
  const list = items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.href ? `${canonicalBase}${it.href}` : undefined,
  }));
  return `<script type="application/ld+json">${escapeJsonScript(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list,
  }))}</script>`;
}

/**
 * @param {import("../data/solutions.js").Solution[]} list
 */
export function renderItemListJsonLd(list, canonicalBase) {
  const elements = list
    .filter((s) => !s.landingOnly)
    .map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${canonicalBase}/solutions/${s.slug}/`,
      name: s.title,
    }));
  const payload = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Surface finishing solutions",
    itemListElement: elements,
  };
  return `<script type="application/ld+json">${escapeJsonScript(JSON.stringify(payload))}</script>`;
}

export function renderExpandedIntro(text) {
  return `
    <section class="solution-expanded-intro solution-section solution-section--tight">
      <div class="solution-section__inner"><p>${escapeHtml(text)}</p></div>
    </section>
  `;
}

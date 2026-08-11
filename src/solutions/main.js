import { setupLanguageToggle } from "../i18n.js";
import "../../styles.css";
import "../pages.css";
import "./solutions.css";
import { siteNavItems, solutionDocumentMenuGroups } from "../siteNav.js";
import { initFooter3dLogo } from "../footerLogo3d.js";
import { solutions, getSolutionBySlug, getRelatedSolutions, landingHeroHeadline, landingHeroIntro } from "../data/solutions.js";
import { getProductDocumentBySlug, getRelatedProductDocuments, productDocuments } from "../data/productDocuments.js";
import { getArabicProductDocumentMeta } from "../data/productDocumentArabic.js";
import { getBlogArticleForSolution } from "../data/blogArticles.js";
import { initSolutionImageFallback } from "./imageFallback.js";
import { applySolutionsStructuredData } from "../structuredData.js";
import {
  renderLandingHero,
  renderSolutionGrid,
  renderContactCta,
  renderSolutionDetailHero,
  renderExpandedIntro,
  renderFeaturedProductFamilies,
  renderProductDocumentDetail,
  renderProductDocumentGrid,
  renderRelatedSolutions,
  renderRelatedInsight,
  truncateMetaDescription,
} from "./render.js";

function isLinkActive(href, pathname) {
  const raw = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  if (href === "/") return raw === "" || raw === "/";

  const base = href.endsWith("/") ? href.slice(0, -1) : href;
  if (raw === base || pathname === href) return true;
  return pathname.startsWith(`${base}/`);
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

function navItem([label, href], pathname) {
  const active = isLinkActive(href, pathname);
  const hasSubmenu = label === "Solutions";
  return `<li class="float-tabs__item${hasSubmenu ? " has-submenu" : ""}">
    <a href="${href}" class="float-tabs__link${active ? " is-active" : ""}"${active ? ' aria-current="page"' : ""}${hasSubmenu ? ' aria-haspopup="true"' : ""}>${label}</a>
    ${hasSubmenu ? solutionSubmenu() : ""}
  </li>`;
}

function header(pathname) {
  const links = siteNavItems
    .map((item) => navItem(item, pathname))
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
            <a href="/news/">Blog &amp; Insights</a>
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
    { threshold: 0.12 },
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

function renderLanding() {
  return `
    <div class="solutions-page">
      ${renderLandingHero(landingHeroHeadline, landingHeroIntro, {
        src: "/assets/electris-powder-coating.jpg",
        alt: "Powder coating and surface preparation equipment for industrial finishing",
      })}
      <section class="solution-section solution-catalog-intro" aria-labelledby="catalog-heading" data-reveal>
        <div class="solution-section__inner">
          <h2 id="catalog-heading">Surface finishing portfolio</h2>
          <div class="solution-catalog-intro__copy">
            <p class="solution-eyebrow">All Solutions</p>
            <p class="solution-catalog-lead">${landingHeroIntro}</p>
          </div>
        </div>
      </section>
      ${renderSolutionGrid(solutions)}
      ${renderProductDocumentGrid(productDocuments)}
      ${renderContactCta()}
    </div>
  `;
}

function renderDetail(slug) {
  const solution = getSolutionBySlug(slug);
  if (!solution || solution.landingOnly) {
    return { html: "", notFound: true };
  }
  const related = getRelatedSolutions(slug, 4);

  const body = `
    <div class="solution-detail">
      ${renderSolutionDetailHero(solution)}
      ${solution.expandedIntro ? renderExpandedIntro(solution.expandedIntro) : ""}
      ${renderFeaturedProductFamilies(solution.subcategories)}
      ${renderRelatedInsight(getBlogArticleForSolution(slug))}
      ${renderRelatedSolutions(related, slug)}
      ${renderContactCta()}
    </div>
  `;
  return { html: body, notFound: false, solution };
}

function renderDocumentDetail(slug) {
  const doc = getProductDocumentBySlug(slug);
  if (!doc) {
    return { html: "", notFound: true };
  }

  return {
    html: renderProductDocumentDetail(doc, getRelatedProductDocuments(slug, 4)),
    notFound: false,
    document: doc,
  };
}

function applyDetailPageSeo(slugMeta) {
  document.title = `${slugMeta.title} | Surface Finishing Solutions | El Etehadia`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", truncateMetaDescription(slugMeta.description));
  const ar = document.documentElement.lang === "ar";
  if (ar) {
    document.title = `الاتحادية | ${slugMeta.title} | حلول تشطيب الأسطح`;
  }
}

function applyDocumentPageSeo(doc) {
  const ar = document.documentElement.lang === "ar";
  const arMeta = ar ? getArabicProductDocumentMeta(doc.slug) : null;
  document.title = ar
    ? `${arMeta?.title || doc.title} | وثائق المنتجات | الاتحادية`
    : `${doc.title} | El Etehadia`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", truncateMetaDescription(ar ? arMeta?.description || doc.description : doc.description));
  }
}

function render() {
  const page = document.body.dataset.page;
  const pathname = window.location.pathname;
  const app = document.querySelector("#app");
  if (!app) return;

  let mainHtml = "";

  if (page === "solutions") {
    mainHtml = renderLanding();
  } else if (page === "solution-detail") {
    const slug = document.body.dataset.slug || "";
    const out = renderDetail(slug);
    if (out.notFound) {
      mainHtml = `<div class="solution-section"><div class="solution-section__inner"><p>Solution not found.</p><p><a href="/solutions/">Back to Solutions</a></p></div></div>`;
    } else if (out.solution) {
      mainHtml = out.html;
    }
  } else if (page === "product-document") {
    const slug = document.body.dataset.slug || "";
    const out = renderDocumentDetail(slug);
    if (out.notFound) {
      mainHtml = `<div class="solution-section"><div class="solution-section__inner"><p>Document not found.</p><p><a href="/solutions/">Back to Solutions</a></p></div></div>`;
    } else if (out.document) {
      mainHtml = out.html;
    }
  }

  app.innerHTML = `
    ${header(pathname)}
    <main class="solutions-main">${mainHtml}</main>
    ${footer()}
  `;

  const y = document.querySelector("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  setupLanguageToggle();

  const slugMeta = document.body.dataset.slug ? getSolutionBySlug(document.body.dataset.slug) : null;
  const docMeta = document.body.dataset.slug ? getProductDocumentBySlug(document.body.dataset.slug) : null;
  if (document.body.dataset.page === "solution-detail" && slugMeta && !slugMeta.landingOnly) {
    applyDetailPageSeo(slugMeta);
    applySolutionsStructuredData({ type: "detail", solution: slugMeta });
  } else if (document.body.dataset.page === "product-document" && docMeta) {
    applyDocumentPageSeo(docMeta);
    applySolutionsStructuredData({ type: "document", document: docMeta });
  } else if (document.body.dataset.page === "solutions") {
    applySolutionsStructuredData({ type: "landing", solutions, documents: productDocuments });
  }

  setupReveals();
  setupScrollProgress();
  setupPressFeedback();
  setupMobileMenu();
  setupPageTransitions();
  initFooter3dLogo();
  initSolutionImageFallback();
}

render();

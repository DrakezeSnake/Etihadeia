import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import heroLogoUrl from "./etihadia 3D logo.obj?url";

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var LANGUAGE_STORAGE_KEY = "etihadeia-language";
  var currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) === "ar" ? "ar" : "en";

  function setupScrollProgress() {
    var progress = document.querySelector(".scroll-progress");
    if (!progress) {
      progress = document.createElement("div");
      progress.className = "scroll-progress";
      progress.setAttribute("aria-hidden", "true");
      document.body.appendChild(progress);
    }

    var ticking = false;
    function update() {
      var doc = document.documentElement;
      var max = Math.max(1, doc.scrollHeight - window.innerHeight);
      var value = Math.min(1, Math.max(0, window.scrollY / max));
      progress.style.transform = "scaleX(" + value.toFixed(4) + ")";
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      },
      { passive: true }
    );
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  function setupPressFeedback() {
    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("pointerdown", function () {
        el.classList.add("is-pressing");
      });
      ["pointerup", "pointercancel", "pointerleave", "blur"].forEach(function (eventName) {
        el.addEventListener(eventName, function () {
          el.classList.remove("is-pressing");
        });
      });
    });
  }

  function setupPageTransitions() {
    if (prefersReducedMotion) return;

    var veil = document.createElement("div");
    veil.className = "page-transition-veil";
    veil.setAttribute("aria-hidden", "true");
    veil.innerHTML = '<img class="page-transition-veil__logo" src="/images/transition-logo.png" alt="" decoding="async" />';
    document.body.appendChild(veil);

    document.querySelectorAll('a[href^="/"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var url = new URL(link.href, window.location.origin);
        if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
        event.preventDefault();
        veil.classList.add("is-leaving");
        window.setTimeout(function () {
          window.location.href = url.href;
        }, 360);
      });
    });
  }

  setupScrollProgress();
  setupPressFeedback();
  setupPageTransitions();
  var pageCopy = {
    en: {
      title: "El Etehadia | Electroplating & Surface Finishing Solutions",
      languageLabel: "العربية",
      languageAria: "Switch to Arabic",
      nav: ["Home", "About", "Services", "Products", "Industries", "Applications", "Partners", "Insights"],
      contact: "Contact us",
      heroEyebrow: "Since 1997 · Electroplating & Surface Finishing Solutions",
      heroTitle: ["Trusted Electroplating", "Solutions for Industrial Finishing"],
      heroIntro:
        "El Etehadia supplies electroplating chemicals, machines, accessories, lacquers, laboratory analysis, and technical support for manufacturers across Egypt and the Middle East.",
      heroCtas: ["Explore Products", "Request Technical Support"],
      stats: ["Established in Cairo", "Years of support", "Recognized brands", "Support areas"],
      aboutLabel: "About us",
      aboutTitle: "About El Etehadia",
      aboutCta: "About us",
      aboutLine: "El Etehadia Company for Import, Export & Agencies has supported manufacturers from Cairo since 1997. The company supplies electroplating chemicals, machines, accessories, lacquers, and technical services for industrial surface-finishing operations across Egypt and the Middle East.",
      whyLabel: "Why Us",
      whyTitle: "Surface Finishing Expertise Built for Production",
      whyIntro: "Electroplating is not only about supply. It depends on chemistry control, process stability, defect troubleshooting, and fast technical decisions.",
      whyCards: [
        ["Reliable Chemistry Supply", "Nickel, chrome, copper, zinc, plating on plastic, surface preparation, additives, salts, colors, and supporting chemicals for industrial finishing lines."],
        ["Technical Support", "Guidance for bath control, additive dosing, defect correction, process improvement, and production troubleshooting."],
        ["Laboratory Analysis", "Dedicated analysis support for plating baths, samples, and process conditions to help manufacturers maintain quality and reduce downtime."],
        ["Machines & Accessories", "Electroplating machines, equipment, components, and accessories for new lines, upgrades, and ongoing operations."],
      ],
      industriesLabel: "Our Industries",
      industriesTitle: "Surface Finishing Support for Industrial Manufacturers",
      industriesIntro: "El Etehadia supports manufacturers that depend on consistent, durable, and high-quality plated finishes.",
      learnMore: "Learn more",
      industryCards: ["Automotive & Components", "Sanitary Fittings", "Hardware", "Industrial Manufacturing", "Plastics & Decorative Components", "Metal Fabrication", "Decorative Hardware", "Protective Finishing"],
      servicesLabel: "Our Services",
      servicesTitle: "Beyond Supply — Technical Support That Keeps Lines Running",
      servicesIntro: "El Etehadia supports plating operations with laboratory analysis, process troubleshooting, product selection, equipment guidance, and ongoing technical support.",
      serviceCards: [
        ["Laboratory Analysis", "Bath and sample analysis to support quality control, process correction, and production consistency."],
        ["Plating Line Troubleshooting", "Support for poor adhesion, burning, roughness, dullness, staining, low coverage, and unstable bath performance."],
        ["Product Selection", "Guidance for chemistry, additives, lacquers, machines, and accessories based on the required finish and substrate."],
        ["Process Optimization", "Guidance on chemical balance, additive dosing, operating windows, and workflow improvements."],
        ["Machines & Accessories", "Supply and guidance for machines, tanks, accessories, line upgrades, and ongoing operational needs."],
      ],
      readMore: "Read more",
      partnersLabel: "Our Partners",
      partnersTitle: "Global Standards, Local Support",
      partnersIntro: "El Etehadia works with internationally recognized surface-finishing brands and supports local manufacturers with accessible supply, technical guidance, and laboratory services.",
      bePartner: "Partner details",
      brochureLabel: "Products",
      brochureTitle: "Products for Every Stage of the Plating Process",
      brochureText: "From surface preparation to final finish, El Etehadia provides the products and support needed to run stable electroplating operations.",
      brochureButton: "Explore Products",
      newsLabel: "News & Insights",
      newsTitle: "Surface Finishing Insights",
      latestNews: "Read insights",
      newsItems: [
        ["Technical note", "Evergreen", "How Laboratory Analysis Supports Stable Plating Baths"],
        ["Troubleshooting", "Evergreen", "Common Electroplating Defects and What They Indicate"],
        ["Product guidance", "Evergreen", "Choosing the Right Finish: Nickel, Chrome, Copper, Zinc, or Electroless Nickel"],
        ["Process control", "Evergreen", "Why Surface Preparation Matters Before Plating"],
        ["Applications", "Evergreen", "Decorative vs Functional Coatings"],
      ],
      customersLabel: "Product Families",
      customersTitle: "Chemistry, Finishes, Machines & Accessories",
      customersIntro: "Core products for nickel, chrome, copper, zinc, plating on plastic, preparation, lacquers, salts, colors, and additives.",
      customerCta: "Explore Products",
      customerLogos: ["Nickel plating", "Chrome plating", "Copper plating", "Zinc plating", "Plating on plastic", "Surface preparation", "Electroless nickel", "Hard chrome", "Trivalent chrome", "Lacquers", "Salts & colors", "Machines & accessories"],
      contactLabel: "Contact",
      contactTitle: "Talk to El Etehadia",
      contactIntro: "Contact our team for product inquiries, laboratory analysis, technical support, machines, accessories, or plating-line troubleshooting.",
      contactInfo: "Contact details",
      email: "Email",
      phone: "Phone",
      office: "Office note",
      location: "Location",
      locationValue: "Cairo, Egypt",
      hours: "Technical inquiries",
      hoursValue: "Please include the process type, substrate, required finish, current issue, and any available bath or sample details.",
      fields: ["Name", "Email", "Phone", "Company", "Inquiry Type", "Message"],
      placeholders: ["Your name", "Your email", "Your phone", "Company", "Message"],
      options: ["Select inquiry type", "Product inquiry", "Technical support", "Laboratory analysis", "Machines & accessories", "Partnership", "Other"],
      submit: "Send Inquiry",
      footerTag: "Electroplating chemicals, machines, accessories, lacquers, laboratory analysis, and technical support.",
      footerHeadings: ["Company", "Products", "Contact"],
      footerCompany: ["About", "Products", "Applications", "News & Insights", "Industries", "Partners", "Contact"],
      footerServices: ["Nickel plating", "Chrome plating", "Copper plating", "Zinc plating", "Lacquers"],
      footerLegal: ["+20 2 26833830", "+20 10 67358111"],
      footerCta: "Send inquiry",
      rights: "El Etehadia Company. All rights reserved.",
      backTop: "Back to top",
    },
    ar: {
      title: "الاتحادية | حلول الطلاء الكهربائي ومعالجة الأسطح",
      languageLabel: "English",
      languageAria: "Switch to English",
      nav: ["الرئيسية", "عن الشركة", "الخدمات", "المنتجات", "القطاعات", "التطبيقات", "الشركاء", "الرؤى"],
      contact: "تواصل معنا",
      heroEyebrow: "منذ 1997 · معالجة الأسطح",
      heroTitle: ["طلاء كهربائي موثوق", "للتشطيب الصناعي"],
      heroIntro:
        "كيماويات وماكينات ولاكيهات للطلاء، مع تحليل معملي ودعم فني.",
      heroCtas: ["استكشف المنتجات", "اطلب دعماً فنياً"],
      stats: ["تأسست في القاهرة", "سنوات دعم", "علامات معروفة", "مجالات دعم"],
      aboutLabel: "من نحن",
      aboutTitle: "عن الاتحادية",
      aboutCta: "من نحن",
      aboutLine: "تدعم شركة الاتحادية للاستيراد والتصدير والتوكيلات المصنعين من القاهرة منذ عام 1997 بكيماويات وماكينات وإكسسوارات ولاكيهات الطلاء الكهربائي وخدمات فنية لعمليات معالجة الأسطح الصناعية في مصر والشرق الأوسط.",
      whyLabel: "لماذا نحن",
      whyTitle: "خبرة معالجة أسطح مبنية للإنتاج",
      whyIntro: "الطلاء الكهربائي ليس توريداً فقط. يعتمد على ضبط الكيمياء واستقرار العملية وحل العيوب وسرعة القرار الفني.",
      whyCards: [
        ["توريد كيمياء موثوق", "نيكل وكروم ونحاس وزنك وطلاء على البلاستيك وتجهيز أسطح وإضافات وأملاح وألوان وكيماويات مساعدة لخطوط التشطيب الصناعي."],
        ["دعم فني", "إرشاد للتحكم في الأحواض وجرعات الإضافات وتصحيح العيوب وتحسين العمليات وحل مشكلات الإنتاج."],
        ["تحليل معملي", "دعم تحليل لأحواض الطلاء والعينات وظروف العملية لمساعدة المصنعين على الحفاظ على الجودة وتقليل التوقف."],
        ["ماكينات وإكسسوارات", "ماكينات ومعدات ومكونات وإكسسوارات للطلاء الكهربائي للخطوط الجديدة والتحديثات والتشغيل المستمر."],
      ],
      industriesLabel: "قطاعاتنا",
      industriesTitle: "دعم معالجة الأسطح للمصنعين",
      industriesIntro: "تدعم الاتحادية المصنعين الذين يعتمدون على تشطيبات مطلية ثابتة ومتينة وعالية الجودة.",
      learnMore: "اعرف المزيد",
      industryCards: ["السيارات والمكونات", "الأدوات الصحية", "الهاردوير", "التصنيع الصناعي", "البلاستيك والديكور", "التشكيل المعدني", "الهاردوير الديكوري", "التشطيبات الواقية"],
      servicesLabel: "خدماتنا",
      servicesTitle: "أكثر من التوريد، دعم فني يحافظ على تشغيل الخطوط",
      servicesIntro: "تدعم الاتحادية عمليات الطلاء بالتحليل المعملي وحل مشكلات العملية واختيار المنتجات وإرشاد المعدات والدعم الفني المستمر.",
      serviceCards: [
        ["التحليل المعملي", "تحليل الأحواض والعينات لدعم ضبط الجودة وتصحيح العملية وثبات الإنتاج."],
        ["حل مشكلات خطوط الطلاء", "دعم عيوب الالتصاق والحرق والخشونة والبهتان والبقع وضعف التغطية وعدم استقرار الحوض."],
        ["اختيار المنتجات", "إرشاد لاختيار الكيمياء والإضافات واللاكيهات والماكينات والإكسسوارات حسب التشطيب والخامة."],
        ["تحسين العملية", "إرشاد لتوازن الكيمياء وجرعات الإضافات ونوافذ التشغيل وتحسين سير العمل."],
        ["ماكينات وإكسسوارات", "توريد وإرشاد للماكينات والأحواض والإكسسوارات وتحديثات الخط واحتياجات التشغيل."],
      ],
      readMore: "اقرأ المزيد",
      partnersLabel: "شركاؤنا",
      partnersTitle: "معايير عالمية ودعم محلي",
      partnersIntro: "تعمل الاتحادية مع علامات معروفة عالمياً في معالجة الأسطح وتدعم المصنعين محلياً بالتوريد والإرشاد الفني والخدمات المعملية.",
      bePartner: "تفاصيل الشركاء",
      brochureLabel: "المنتجات",
      brochureTitle: "منتجات لكل مرحلة من مراحل الطلاء",
      brochureText: "من تجهيز السطح إلى التشطيب النهائي، توفر الاتحادية المنتجات والدعم اللازم لتشغيل عمليات طلاء مستقرة.",
      brochureButton: "استكشف المنتجات",
      newsLabel: "الأخبار والرؤى",
      newsTitle: "رؤى معالجة الأسطح",
      latestNews: "اقرأ الرؤى",
      newsItems: [["ملاحظة فنية", "دائم", "كيف يدعم التحليل المعملي استقرار أحواض الطلاء"], ["حل مشكلات", "دائم", "عيوب الطلاء الكهربائي الشائعة وما تشير إليه"], ["إرشاد منتجات", "دائم", "اختيار التشطيب المناسب: نيكل أو كروم أو نحاس أو زنك"], ["تحكم في العملية", "دائم", "لماذا يهم تجهيز السطح قبل الطلاء"], ["تطبيقات", "دائم", "الطلاءات الديكورية مقابل الطلاءات الوظيفية"]],
      customersLabel: "عائلات المنتجات",
      customersTitle: "كيمياء وتشطيبات وماكينات وإكسسوارات",
      customersIntro: "منتجات أساسية للنيكل والكروم والنحاس والزنك والطلاء على البلاستيك والتجهيز واللاكيهات والأملاح والألوان والإضافات.",
      customerCta: "استكشف المنتجات",
      customerLogos: ["طلاء نيكل", "طلاء كروم", "طلاء نحاس", "طلاء زنك", "طلاء على البلاستيك", "تجهيز أسطح", "نيكل كيميائي", "كروم صلب", "كروم ثلاثي", "لاكيهات", "أملاح وألوان", "ماكينات وإكسسوارات"],
      contactLabel: "تواصل",
      contactTitle: "تحدث إلى الاتحادية",
      contactIntro: "تواصل معنا لاستفسارات المنتجات أو التحليل المعملي أو الدعم الفني أو الماكينات والإكسسوارات أو حل مشكلات خطوط الطلاء.",
      contactInfo: "بيانات التواصل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      office: "ملاحظة فنية",
      location: "الموقع",
      locationValue: "القاهرة، مصر",
      hours: "للاستفسارات الفنية",
      hoursValue: "يرجى ذكر نوع العملية والخامة والتشطيب المطلوب والمشكلة الحالية وأي تفاصيل متاحة عن الحوض أو العينة.",
      fields: ["الاسم", "البريد الإلكتروني", "الهاتف", "الشركة", "نوع الاستفسار", "الرسالة"],
      placeholders: ["اسمك", "بريدك الإلكتروني", "هاتفك", "الشركة", "الرسالة"],
      options: ["اختر نوع الاستفسار", "استفسار عن منتج", "دعم فني", "تحليل معملي", "ماكينات وإكسسوارات", "شراكة", "أخرى"],
      submit: "إرسال الاستفسار",
      footerTag: "كيماويات وماكينات وإكسسوارات ولاكيهات الطلاء الكهربائي، مع تحليل معملي ودعم فني.",
      footerHeadings: ["الشركة", "المنتجات", "تواصل"],
      footerCompany: ["عن الشركة", "المنتجات", "التطبيقات", "الأخبار والرؤى", "القطاعات", "الشركاء", "تواصل"],
      footerServices: ["طلاء نيكل", "طلاء كروم", "طلاء نحاس", "طلاء زنك", "لاكيهات"],
      footerLegal: ["+20 2 26833830", "+20 10 67358111"],
      footerCta: "إرسال استفسار",
      rights: "شركة الاتحادية. جميع الحقوق محفوظة.",
      backTop: "العودة للأعلى",
    },
  };

  function setText(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.textContent = value;
  }

  function setHtml(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.innerHTML = value;
  }

  function setTextList(selector, values) {
    document.querySelectorAll(selector).forEach(function (el, i) {
      if (values[i] != null) el.textContent = values[i];
    });
  }

  function setTextListWithin(root, selector, values) {
    if (!root) return;
    root.querySelectorAll(selector).forEach(function (el, i) {
      if (values[i] != null) el.textContent = values[i];
    });
  }

  function setCardText(selector, values, titleSelector, bodySelector) {
    document.querySelectorAll(selector).forEach(function (card, i) {
      if (!values[i]) return;
      var title = card.querySelector(titleSelector);
      var body = card.querySelector(bodySelector);
      if (title) title.textContent = values[i][0];
      if (body) body.textContent = values[i][1];
    });
  }

  function setLanguage(language, options) {
    currentLanguage = language === "ar" ? "ar" : "en";
    var copy = pageCopy[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.body.dataset.lang = currentLanguage;
    document.title = copy.title;

    setText("[data-language-label]", copy.languageLabel);
    var languageToggle = document.querySelector("[data-language-toggle]");
    if (languageToggle) {
      languageToggle.setAttribute("aria-label", copy.languageAria);
      languageToggle.setAttribute("aria-pressed", String(currentLanguage === "ar"));
    }

    setTextList(".float-tabs__link", copy.nav);
    setText("[data-contact-label]", copy.contact);
    setText(".hero__eyebrow", copy.heroEyebrow);
    setTextList(".hero__title-line", copy.heroTitle);
    setText(".hero__intro", copy.heroIntro);
    setTextList(".hero__cta .btn", copy.heroCtas);
    setTextList(".hero .stat__label", copy.stats);
    setText("#about .section__label", copy.aboutLabel);
    setText("#about .section__title", copy.aboutTitle);
    setText(".about__reveal-cta", copy.aboutCta);
    setText(".why__label", copy.whyLabel);
    setText(".why__title", copy.whyTitle);
    setText(".why__intro", copy.whyIntro);
    setCardText(".why-us__card", copy.whyCards, ".why-us__title", ".why-us__body");
    setText("#industries .section__label", copy.industriesLabel);
    setText("#industries .section__title", copy.industriesTitle);
    setText("#industries .section__intro", copy.industriesIntro);
    setText("#industries .link-arrow", copy.learnMore);
    setTextList(".industry-card__label", copy.industryCards);
    setText("#services .section__label", copy.servicesLabel);
    setText("#services .section__title", copy.servicesTitle);
    setText("#services .section__intro", copy.servicesIntro);
    setCardText(".service-card", copy.serviceCards, ".service-card__title", "p");
    setTextList(".service-card__link", Array.from({ length: 5 }, function () { return copy.readMore; }));
    setText("#partners .section__label", copy.partnersLabel);
    setText("#partners .section__title", copy.partnersTitle);
    setText("#partners .section__intro", copy.partnersIntro);
    setText("#partners .link-arrow", copy.bePartner);
    setText("#brochure .section__label", copy.brochureLabel);
    setText(".brochure__title", copy.brochureTitle);
    setText(".brochure__text", copy.brochureText);
    setText("#brochure .btn", copy.brochureButton);
    setText("#news .section__label", copy.newsLabel);
    setText("#news .section__title", copy.newsTitle);
    setText("#news .link-arrow", copy.latestNews);
    document.querySelectorAll(".news-item").forEach(function (item, i) {
      if (!copy.newsItems[i]) return;
      setTextOn(item, ".news-item__cat", copy.newsItems[i][0]);
      setTextOn(item, "time", copy.newsItems[i][1]);
      setTextOn(item, ".news-item__title", copy.newsItems[i][2]);
    });
    setText("#products .section__label", copy.customersLabel);
    setText("#products .section__title", copy.customersTitle);
    setText("#products .section__intro", copy.customersIntro);
    setText("#products .link-arrow", copy.customerCta);
    setTextList(".customer-logo", copy.customerLogos);
    setText("#contact .section__label", copy.contactLabel);
    setText("#contact .section__title", copy.contactTitle);
    setText("#contact .section__intro", copy.contactIntro);
    setTextList(".contact__sub", [copy.contactInfo, copy.office]);
    setTextList(".contact__dl dt", [copy.email, copy.phone, copy.location, copy.hours]);
    setHtml(".contact__dl:nth-of-type(2) dd:nth-of-type(1)", copy.locationValue);
    setText(".contact__dl:nth-of-type(2) dd:nth-of-type(2)", copy.hoursValue);
    setTextList(".field__label", copy.fields);
    setPlaceholders(copy.placeholders);
    setTextList(".field select option", copy.options);
    setText(".contact__form .btn", copy.submit);
    setText(".footer__tag", copy.footerTag);
    setTextList(".footer__heading", copy.footerHeadings);
    var footerCols = document.querySelectorAll(".footer__col");
    setTextListWithin(footerCols[0], ".footer__nav a", copy.footerCompany);
    setTextListWithin(footerCols[1], ".footer__nav a", copy.footerServices);
    setTextListWithin(footerCols[2], ".footer__nav a", copy.footerLegal);
    setText(".footer__cta", copy.footerCta);
    setText(".footer__bottom-inner p", "© " + new Date().getFullYear() + " " + copy.rights);
    setText(".back-top", copy.backTop);

    if (options && options.rebuildAbout && typeof aboutRebuildWords === "function") {
      aboutRebuildWords();
    }

    localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
    requestAnimationFrame(function () {
      window.dispatchEvent(new Event("resize"));
    });
  }

  function setTextOn(root, selector, value) {
    var el = root.querySelector(selector);
    if (el) el.textContent = value;
  }

  function setPlaceholders(values) {
    var inputs = document.querySelectorAll('.contact__form input[name="name"], .contact__form input[name="email"], .contact__form input[name="phone"], .contact__form input[name="company"], .contact__form textarea[name="message"]');
    inputs.forEach(function (el, i) {
      if (values[i] != null) el.setAttribute("placeholder", values[i]);
    });
  }

  function initLanguageToggle() {
    var toggle = document.querySelector("[data-language-toggle]");
    setLanguage(currentLanguage, { rebuildAbout: false });
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      setLanguage(currentLanguage === "ar" ? "en" : "ar", { rebuildAbout: true });
    });
  }

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function getHeaderOffset() {
    var raw = getComputedStyle(document.documentElement).getPropertyValue("--header-h").trim();
    var n = parseInt(raw, 10);
    return isNaN(n) ? 88 : n;
  }

  var topNav = document.getElementById("top-nav");
  var floatToggle = document.querySelector(".hero-bar__menu");
  var floatPanel = document.getElementById("float-nav-panel");
  if (topNav && floatToggle && floatPanel) {
    floatToggle.addEventListener("click", function () {
      var open = topNav.classList.toggle("is-open");
      floatToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    floatPanel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        topNav.classList.remove("is-open");
        floatToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  initLanguageToggle();

  /* Scroll reveal */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else if (revealEls.length) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Hero: staggered fade via CSS transition-delay on .hero-reveal */
  var heroReveals = document.querySelectorAll(".hero-reveal");
  function showHeroReveals() {
    window.requestAnimationFrame(function () {
      heroReveals.forEach(function (el) {
        el.classList.add("is-visible");
      });
    });
  }
  if (heroReveals.length) {
    if (prefersReducedMotion) {
      heroReveals.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showHeroReveals);
    } else {
      showHeroReveals();
    }
  }

  var heroVideo = document.querySelector(".hero__video");
  if (heroVideo && heroVideo.play) {
    heroVideo.play().catch(function () {});
  }

  /* Hero 3D logo */
  function initHeroHexLogo() {
    var stage = document.querySelector("[data-hero-hex]");
    if (!stage) return;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0.2, 8);

    var renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    stage.appendChild(renderer.domElement);

    var logoRoot = new THREE.Group();
    logoRoot.position.set(1.85, 0.2, 0);
    logoRoot.rotation.set(-0.12, -0.5, 0.08);
    scene.add(logoRoot);

    var keyLight = new THREE.DirectionalLight(0xffffff, 4.2);
    keyLight.position.set(3.8, 4.5, 5.5);
    scene.add(keyLight);

    var rimLight = new THREE.DirectionalLight(0xe32219, 2.3);
    rimLight.position.set(-4.5, 1.8, 3);
    scene.add(rimLight);

    var fillLight = new THREE.HemisphereLight(0xffffff, 0x201d1f, 1.8);
    scene.add(fillLight);

    var accentLight = new THREE.PointLight(0xe32219, 12, 9);
    accentLight.position.set(2.8, -1.8, 2.6);
    scene.add(accentLight);

    var loader = new OBJLoader();
    var startTime = performance.now();
    var loadedObject = null;
    var pointerX = 0;
    var pointerY = 0;
    var layoutX = 1.75;
    var layoutY = 0.64;
    var layoutScale = 1;
    var revealAmount = prefersReducedMotion ? 1 : 0.01;

    function resize() {
      var rect = stage.getBoundingClientRect();
      var width = Math.max(1, rect.width);
      var height = Math.max(1, rect.height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      var direction = currentLanguage === "ar" ? -1 : 1;
      layoutX = direction * (width < 760 ? 0.02 : width < 1040 ? 0.95 : 1.55);
      layoutY = width < 760 ? 0.9 : 0.64;
      layoutScale = width < 760 ? 0.48 : width < 1040 ? 0.76 : 1;
    }

    function frame() {
      var t = (performance.now() - startTime) / 1000;
      if (loadedObject && !prefersReducedMotion) {
        logoRoot.scale.setScalar(revealAmount * layoutScale);
        logoRoot.position.x = layoutX + Math.sin(t * 0.48) * 0.32 + pointerX * 0.35;
        logoRoot.position.y = layoutY + Math.sin(t * 0.7) * 0.16 + pointerY * 0.14;
        logoRoot.rotation.x = -0.16 + Math.sin(t * 0.52) * 0.1 + pointerY * 0.08;
        logoRoot.rotation.y = -0.5 + Math.sin(t * 0.38) * 0.28 + pointerX * 0.16;
        logoRoot.rotation.z = 0.08 + Math.sin(t * 0.44) * 0.08;
        accentLight.position.x = 2.8 + Math.sin(t * 0.85) * 1.2;
      } else if (loadedObject) {
        logoRoot.scale.setScalar(layoutScale);
        logoRoot.position.x = layoutX;
        logoRoot.position.y = layoutY;
      }
      renderer.render(scene, camera);
      if (!prefersReducedMotion) requestAnimationFrame(frame);
    }

    loader.load(
      heroLogoUrl,
      function (object) {
        loadedObject = object;
        var silverMaterial = new THREE.MeshPhysicalMaterial({
          color: 0x8c8f8d,
          metalness: 0.78,
          roughness: 0.34,
          clearcoat: 0.35,
          clearcoatRoughness: 0.24,
        });
        var redMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xa90008,
          metalness: 0.72,
          roughness: 0.28,
          clearcoat: 0.58,
          clearcoatRoughness: 0.2,
        });
        var graphiteMaterial = new THREE.MeshPhysicalMaterial({
          color: 0x111315,
          metalness: 0.76,
          roughness: 0.32,
          clearcoat: 0.32,
          clearcoatRoughness: 0.24,
        });

        object.traverse(function (child) {
          if (!child.isMesh) return;
          child.geometry.computeVertexNormals();
          var materialName = child.material && child.material.name;
          if (/001/.test(materialName)) child.material = redMaterial;
          else if (/002/.test(materialName)) child.material = silverMaterial;
          else child.material = graphiteMaterial;
        });

        var box = new THREE.Box3().setFromObject(object);
        var size = new THREE.Vector3();
        var center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);
        object.position.sub(center);
        var maxAxis = Math.max(size.x, size.y, size.z) || 1;
        object.scale.setScalar(2.28 / maxAxis);
        logoRoot.add(object);
        logoRoot.scale.setScalar(revealAmount * layoutScale);

        if (prefersReducedMotion) {
          logoRoot.scale.setScalar(layoutScale);
          renderer.render(scene, camera);
          return;
        }

        var start = performance.now();
        function reveal(now) {
          var p = Math.min(1, (now - start) / 900);
          var eased = 1 - Math.pow(1 - p, 4);
          revealAmount = eased;
          logoRoot.scale.setScalar(revealAmount * layoutScale);
          renderer.render(scene, camera);
          if (p < 1) requestAnimationFrame(reveal);
        }
        requestAnimationFrame(reveal);
      },
      undefined,
      function () {
        stage.classList.add("is-empty");
      }
    );

    window.addEventListener(
      "pointermove",
      function (event) {
        var x = event.clientX / Math.max(1, window.innerWidth);
        var y = event.clientY / Math.max(1, window.innerHeight);
        pointerX = (x - 0.5) * 2;
        pointerY = (0.5 - y) * 2;
      },
      { passive: true }
    );

    window.addEventListener("resize", resize, { passive: true });
    resize();
    frame();
  }

  initHeroHexLogo();

  /* Count-up */
  function animateCount(el, target, suffix, duration) {
    var start = performance.now();
    function frame(now) {
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      var value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var statNums = document.querySelectorAll(".stat__num[data-count]");
  if (statNums.length && !prefersReducedMotion) {
    var counted = false;
    var statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || counted) return;
          counted = true;
          statNums.forEach(function (el) {
            var target = parseInt(el.getAttribute("data-count"), 10);
            var suffix = el.getAttribute("data-suffix") || "";
            animateCount(el, target, suffix, 1600);
          });
          statsObserver.disconnect();
        });
      },
      { threshold: 0.35 }
    );
    var heroStats = document.querySelector(".hero__stats");
    if (heroStats) statsObserver.observe(heroStats);
  } else if (statNums.length) {
    statNums.forEach(function (el) {
      var target = el.getAttribute("data-count");
      var suffix = el.getAttribute("data-suffix") || "";
      el.textContent = target + suffix;
    });
  }

  /* Hero parallax */
  var parallaxLayer = document.querySelector("[data-parallax]");
  if (parallaxLayer && !prefersReducedMotion) {
    var ticking = false;
    function updateParallax() {
      var scrollY = window.scrollY;
      var max = window.innerHeight;
      var p = Math.min(1, scrollY / max);
      var y = p * 12;
      var scale = 1.08 + p * 0.02;
      parallaxLayer.style.transform = "translate3d(0, " + y + "%, 0) scale(" + scale + ")";
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateParallax);
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  /* Contact form (front-end demo) */
  var form = document.querySelector(".contact__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }

  /* Smooth anchor offset for fixed header */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset() - 10;
      window.scrollTo({ top: top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });

  /* Floating slide-tabs nav (Framer-style cursor, vanilla) */
  var floatTabsRoot = document.getElementById("float-tabs");
  if (floatTabsRoot) {
    var floatCursor = floatTabsRoot.querySelector(".float-tabs__cursor");
    var floatItems = floatTabsRoot.querySelectorAll(".float-tabs__item");
    var floatLinks = floatTabsRoot.querySelectorAll(".float-tabs__link");
    /* One entry per top-level navigation route for homepage section awareness. */
    var sectionGroups = [
      ["hero"],
      ["about"],
      ["services"],
      ["products"],
      ["industries"],
      ["products"],
      ["partners"],
      ["news"],
    ];
    var floatSelected = 0;

    function floatMoveCursorToIndex(idx) {
      if (!floatCursor || !floatItems.length) return;
      var item = floatItems[idx];
      if (!item) return;
      var ul = floatTabsRoot;
      var ulR = ul.getBoundingClientRect();
      var itemR = item.getBoundingClientRect();
      var cs = getComputedStyle(ul);
      var bl = parseFloat(cs.borderLeftWidth) || 0;
      var br = parseFloat(cs.borderRightWidth) || 0;
      var padEdgeLeftV = ulR.left + bl;
      var padEdgeRightV = ulR.right - br;
      var isRtl = document.documentElement.dir === "rtl";
      var lastIdx = floatItems.length - 1;
      var isFirst = idx === 0;
      var isLast = idx === lastIdx;
      /* Edge tabs: extend into ul padding so red meets the grey pill’s rounded ends (lis sit inset). */
      var leftPx;
      var widthPx;
      if (isFirst && isLast) {
        leftPx = 0;
        widthPx = ul.clientWidth;
      } else if (isFirst && !isRtl) {
        leftPx = 0;
        widthPx = itemR.right - padEdgeLeftV;
      } else if (isFirst && isRtl) {
        leftPx = itemR.left - padEdgeLeftV;
        widthPx = padEdgeRightV - itemR.left;
      } else if (isLast && !isRtl) {
        leftPx = itemR.left - padEdgeLeftV;
        widthPx = padEdgeRightV - itemR.left;
      } else if (isLast && isRtl) {
        leftPx = 0;
        widthPx = itemR.right - padEdgeLeftV;
      } else {
        leftPx = itemR.left - padEdgeLeftV;
        widthPx = itemR.width;
      }
      /* Match full inner pill height (padding included); li height only covers the label band. */
      floatCursor.style.transform = "none";
      floatCursor.style.top = "0";
      floatCursor.style.left = leftPx + "px";
      floatCursor.style.width = widthPx + "px";
      floatCursor.style.height = ul.clientHeight + "px";
      floatCursor.style.opacity = "1";
    }

    function floatUpdateActiveClasses() {
      floatLinks.forEach(function (link, i) {
        link.classList.toggle("is-active", i === floatSelected);
        if (i === floatSelected) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    function floatSetSelected(idx, moveCursor) {
      floatSelected = Math.max(0, Math.min(floatItems.length - 1, idx));
      floatUpdateActiveClasses();
      if (moveCursor !== false) floatMoveCursorToIndex(floatSelected);
    }

    function floatSyncFromScroll() {
      /* Prefer the section under a probe point (stable while scrolling). Visibility-only scoring
         often defaults to tab 0 when no block passes the threshold, or hero wins briefly — cursor jumps to Home. */
      var headerH = getHeaderOffset();
      var probeY = headerH + (window.innerHeight - headerH) * 0.3;
      var probeX = window.innerWidth * 0.5;
      var node = document.elementFromPoint(probeX, probeY);
      var walk = node;
      while (walk && walk !== document.documentElement) {
        if (walk.nodeType === 1 && walk.id) {
          for (var ti = 0; ti < sectionGroups.length; ti++) {
            if (sectionGroups[ti].indexOf(walk.id) >= 0) {
              if (ti !== floatSelected) {
                floatSelected = ti;
                floatUpdateActiveClasses();
                floatMoveCursorToIndex(floatSelected);
              }
              return;
            }
          }
        }
        walk = walk.parentElement;
      }

      var mid = window.innerHeight * 0.22;
      var best = floatSelected;
      var bestScore = -Infinity;
      sectionGroups.forEach(function (ids, tabIdx) {
        var tabBest = -Infinity;
        ids.forEach(function (id) {
          var el = document.getElementById(id);
          if (!el) return;
          var r = el.getBoundingClientRect();
          var visible = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
          if (visible <= 40) return;
          var score = visible - Math.abs(r.top - mid) * 0.2;
          if (score > tabBest) tabBest = score;
        });
        if (tabBest > bestScore) {
          bestScore = tabBest;
          best = tabIdx;
        }
      });
      if (bestScore === -Infinity) return;
      if (best !== floatSelected) {
        floatSelected = best;
        floatUpdateActiveClasses();
        floatMoveCursorToIndex(floatSelected);
      }
    }

    floatLinks.forEach(function (link, i) {
      link.addEventListener("click", function () {
        floatSetSelected(i, true);
      });
    });

    window.addEventListener("resize", function () {
      floatMoveCursorToIndex(floatSelected);
    });

    function floatInitPosition() {
      floatUpdateActiveClasses();
      floatMoveCursorToIndex(floatSelected);
    }

    if (document.readyState === "complete") {
      requestAnimationFrame(floatInitPosition);
    } else {
      window.addEventListener("load", function () {
        requestAnimationFrame(floatInitPosition);
      });
      requestAnimationFrame(floatInitPosition);
    }
  }

  /* About — word reveal driven by the pinned section scroll range */
  var aboutRevealTrack = document.getElementById("about-reveal-track");
  var aboutRevealCopy = document.getElementById("about-reveal-copy");
  var aboutSection = document.getElementById("about");
  var fgSpans = [];
  var nWords = 0;

  function aboutSplitWords(text) {
    return text.trim().split(/\s+/).filter(Boolean);
  }

  function aboutBuildWordSpans() {
    if (!aboutRevealCopy) return [];
    var paras = aboutRevealCopy.querySelectorAll("[data-about-line]");
    var allFg = [];

    paras.forEach(function (p, pi) {
      p.textContent = "";
      var line = pi === 0 ? pageCopy[currentLanguage].aboutLine : "";
      if (!line) return;
      var words = aboutSplitWords(line);
      words.forEach(function (w) {
        var wrap = document.createElement("span");
        wrap.className = "about__word";
        var ghost = document.createElement("span");
        ghost.className = "about__word-ghost";
        ghost.setAttribute("aria-hidden", "true");
        ghost.textContent = w;
        var fg = document.createElement("span");
        fg.className = "about__word-fg";
        fg.textContent = w;
        wrap.appendChild(ghost);
        wrap.appendChild(fg);
        p.appendChild(wrap);
        allFg.push(fg);
      });
    });

    return allFg;
  }

  function aboutRebuildWords() {
    fgSpans = aboutBuildWordSpans();
    nWords = fgSpans.length;
    if (aboutRevealCopy) aboutRevealCopy.classList.remove("is-static");
    if (prefersReducedMotion) {
      if (aboutRevealCopy) aboutRevealCopy.classList.add("is-static");
      return;
    }
    aboutApplyOpacities(aboutScrollProgress(aboutRevealTrack));
  }

  function aboutWordOpacity(progress, wordIndex, totalWords) {
    if (totalWords <= 0) return 1;
    var start = wordIndex / totalWords;
    var end = start + 1 / totalWords;
    if (progress <= start) return 0;
    if (progress >= end) return 1;
    return (progress - start) / (end - start);
  }

  function aboutApplyOpacities(p) {
    for (var i = 0; i < nWords; i++) {
      fgSpans[i].style.opacity = String(aboutWordOpacity(p, i, nWords));
    }
  }

  function aboutScrollProgress(track) {
    var isDesktop = window.matchMedia("(min-width: 901px)").matches;
    var scrollRegion = isDesktop && aboutSection ? aboutSection : track;
    if (!scrollRegion) return 0;
    var range = scrollRegion.offsetHeight - window.innerHeight;
    if (range <= 0) return 1;
    var rect = scrollRegion.getBoundingClientRect();
    var t = -rect.top / range;
    return Math.min(1, Math.max(0, t));
  }

  if (aboutRevealTrack && aboutRevealCopy) {
    aboutRebuildWords();

    if (prefersReducedMotion) {
      aboutRevealCopy.classList.add("is-static");
    } else if (nWords > 0) {
      var aboutRevealTicking = false;

      function aboutRevealOnScroll() {
        if (aboutRevealTicking) return;
        aboutRevealTicking = true;
        requestAnimationFrame(function () {
          aboutRevealTicking = false;
          var p = aboutScrollProgress(aboutRevealTrack);
          aboutApplyOpacities(p);
          var aboutMedia = document.querySelector(".about__media");
          if (aboutMedia) {
            var mediaShift = (p - 0.5) * -54;
            aboutMedia.style.transform = "translate3d(0, " + mediaShift.toFixed(2) + "px, 0)";
          }
          aboutRevealCopy.classList.toggle("is-static", p >= 0.999);
        });
      }

      aboutRevealOnScroll();
      window.addEventListener("scroll", aboutRevealOnScroll, { passive: true });
      window.addEventListener("resize", aboutRevealOnScroll, { passive: true });
    }
  }
})();

import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import heroLogoUrl from "./etihadia 3D logo.obj?url";

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var LANGUAGE_STORAGE_KEY = "etihadeia-language";
  var currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) === "ar" ? "ar" : "en";
  var pageCopy = {
    en: {
      title: "Etihadeia | Industrial Technology & Infrastructure Solutions",
      languageLabel: "العربية",
      languageAria: "Switch to Arabic",
      nav: ["Home", "About us", "Why us", "Services", "News", "Customers"],
      contact: "Contact us",
      heroEyebrow: "Electroplating & industrial technology",
      heroTitle: ["Experience", "Delivers Solutions"],
      stats: ["Years of experience", "Experts", "Completed projects"],
      aboutLabel: "About us",
      aboutTitle: "About El Etehadia",
      aboutCta: "About us",
      aboutLine:
        "El Etehadia Company for Import, Export & Agencies has served manufacturers since 1997 from Cairo, Egypt. We offer all types of reliable electroplating chemicals, machines, and related accessories — with licensed production under MacDermid Enthone standards.",
      whyLabel: "Why Us",
      whyTitle: "Powering Progress Across Industries",
      whyIntro:
        "Etihadeia delivers cutting-edge technologies, tailored solutions, and expert services that drive industrial excellence, innovation, and reliability across sectors.",
      whyCards: [
        [
          "Where Innovation Ignites Industry",
          "Welcome to Etihadeia, a leading provider with expertise in electrical, control, automation, aviation, runway lighting systems, airport technologies, digital, and IoT supplies for various industries.",
        ],
        ["Transformative Technology for Industry Leaders", "At Etihadeia, we are committed to providing customized supplies that meet the market’s unique needs."],
        [
          "Setting New Standards",
          "Our service teams are expert and equipped with the latest tools and technologies to design, engineer, test, and energize electrical solutions that serve the industries.",
        ],
      ],
      industriesLabel: "Our Industries",
      industriesTitle: "Sectors We Serve",
      industriesIntro: "Aviation, transportation, manufacturing, and more—tailored solutions that drive efficiency and innovation.",
      learnMore: "Learn more",
      industryCards: ["Oil & Gas", "Industrial", "Aviation", "Power & Water", "Commercial", "Infrastructure", "Electrical Services", "Smart Cities"],
      servicesLabel: "Our Services",
      servicesTitle: "Solutions That Scale",
      servicesIntro: "Automation, control, aviation, and IoT—enhancing efficiency and safety across industries.",
      serviceCards: [
        ["Electric Supplies", "High-quality electric supplies for industrial, commercial, and infrastructure projects."],
        ["Control & Automation", "Smarter operations through a full suite of control and automation products."],
        ["HVAC & Mechanical", "Essential HVAC and mechanical components for efficient building and industrial systems."],
        ["Airport Lighting & Aviation", "Reliable airport lighting systems and advanced aviation technologies."],
        ["Electrical Services", "End-to-end electrical services for modern infrastructure and hi-tech industrial projects."],
      ],
      readMore: "Read more",
      partnersLabel: "Our Partners",
      partnersTitle: "Trusted by Top Partners & Supporters",
      partnersIntro: "Ready to collaborate? Explore partnership opportunities with our team.",
      bePartner: "Be a partner",
      brochureLabel: "Our Full Brochure",
      brochureTitle: "Main Brochure",
      brochureText: "Electrical, lighting, and automation solutions for infrastructure, energy, manufacturing, aviation, and more.",
      brochureButton: "Download Brochure",
      newsLabel: "News",
      newsTitle: "Our News",
      latestNews: "Latest news",
      newsItems: [
        ["Events", "November 14, 2024", "Etihadeia Showcases Innovation at the Global Airports Forum 2024"],
        ["News", "January 30, 2025", "Municipal Collaboration to Plant 1,000 Trees in Support of Net-Zero Goals"],
        ["Articles", "January 30, 2025", "Success in Automation and Leak Detection — Industry Interview"],
        ["News", "February 27, 2025", "New Recruitment Platform Connects Engineering Talent with the Future"],
        ["Events", "January 20, 2026", "Strategic Workshop to Align Goals for 2026"],
      ],
      customersLabel: "Our Customers",
      customersTitle: "Trusted Across Energy & Infrastructure",
      customersIntro: "Partners across energy, infrastructure, aviation, and technology—impact at scale.",
      customerCta: "Our Customers",
      customerLogos: ["Heavy Industries", "Light Industry", "Oil & Gas", "Water & Power", "Aviation", "Smart Mobility", "Data Centers", "Manufacturing", "Utilities", "EPC", "Ports", "Rail"],
      contactLabel: "Contact us",
      contactTitle: "Do you have any questions?",
      contactIntro: "Fill out the form or reach us using the contact details below.",
      contactInfo: "Contact information",
      email: "Email",
      phone: "Phone",
      office: "Main Office",
      location: "Location",
      locationValue: "Industrial District, Suite 100<br />City, Country",
      hours: "Office Hours",
      hoursValue: "Monday – Friday, 8:00 AM – 6:00 PM",
      fields: ["Name", "Email", "Phone", "Company", "Subject", "Message"],
      placeholders: ["Your name", "Your email", "Your phone", "Company", "Message"],
      options: ["Select Subject", "Partnership", "Services", "Industries", "Collaborate", "Other"],
      submit: "Submit",
      footerTag: "A subsidiary of Industrial Holdings Group",
      footerHeadings: ["Company", "Industries & Services", "Legal"],
      footerCompany: ["About", "Success Stories", "News & Events", "Career", "The Experience", "Partners", "Customers"],
      footerServices: ["Electrical Supplies", "Control & Automation", "HVAC & Mechanical", "Airport & Aviation", "Electrical Services"],
      footerLegal: ["DSR", "Privacy Policy"],
      footerCta: "Contact us",
      rights: "Etihadeia. All rights reserved.",
      backTop: "Back to top",
    },
    ar: {
      title: "الاتحادية | حلول التكنولوجيا الصناعية والبنية التحتية",
      languageLabel: "English",
      languageAria: "Switch to English",
      nav: ["الرئيسية", "من نحن", "لماذا نحن", "الخدمات", "الأخبار", "العملاء"],
      contact: "تواصل معنا",
      heroEyebrow: "الطلاء الكهربائي والتكنولوجيا الصناعية",
      heroTitle: ["الخبرة", "تصنع الحلول"],
      stats: ["سنوات من الخبرة", "خبراء", "مشاريع مكتملة"],
      aboutLabel: "من نحن",
      aboutTitle: "عن الاتحادية",
      aboutCta: "من نحن",
      aboutLine:
        "تخدم شركة الاتحادية للاستيراد والتصدير والتوكيلات المصنعين منذ عام 1997 من القاهرة، مصر. نوفر جميع أنواع كيماويات الطلاء الكهربائي والماكينات والإكسسوارات المرتبطة بها بجودة موثوقة، مع إنتاج مرخص وفق معايير MacDermid Enthone.",
      whyLabel: "لماذا نحن",
      whyTitle: "ندفع التقدم عبر القطاعات الصناعية",
      whyIntro: "تقدم الاتحادية تقنيات متقدمة وحلولاً مخصصة وخدمات خبيرة تدعم التميز الصناعي والابتكار والاعتمادية عبر القطاعات.",
      whyCards: [
        [
          "حيث يشعل الابتكار الصناعة",
          "مرحباً بكم في الاتحادية، مزود رائد بخبرة في الأنظمة الكهربائية والتحكم والأتمتة والطيران وأنظمة إضاءة المدارج وتقنيات المطارات والحلول الرقمية ومستلزمات إنترنت الأشياء لمختلف الصناعات.",
        ],
        ["تكنولوجيا تحول قادة الصناعة", "نلتزم في الاتحادية بتوفير مستلزمات مخصصة تلبي الاحتياجات الفريدة للسوق."],
        [
          "نضع معايير جديدة",
          "تضم فرق خدماتنا خبراء مجهزين بأحدث الأدوات والتقنيات لتصميم وهندسة واختبار وتشغيل الحلول الكهربائية التي تخدم الصناعات.",
        ],
      ],
      industriesLabel: "قطاعاتنا",
      industriesTitle: "قطاعات نخدمها",
      industriesIntro: "الطيران والنقل والتصنيع والمزيد، حلول مخصصة تعزز الكفاءة والابتكار.",
      learnMore: "اعرف المزيد",
      industryCards: ["النفط والغاز", "الصناعة", "الطيران", "الطاقة والمياه", "التجاري", "البنية التحتية", "الخدمات الكهربائية", "المدن الذكية"],
      servicesLabel: "خدماتنا",
      servicesTitle: "حلول قابلة للتوسع",
      servicesIntro: "الأتمتة والتحكم والطيران وإنترنت الأشياء، لتعزيز الكفاءة والسلامة عبر الصناعات.",
      serviceCards: [
        ["المستلزمات الكهربائية", "مستلزمات كهربائية عالية الجودة للمشاريع الصناعية والتجارية ومشاريع البنية التحتية."],
        ["التحكم والأتمتة", "عمليات أكثر ذكاءً عبر مجموعة متكاملة من منتجات التحكم والأتمتة."],
        ["التكييف والميكانيكا", "مكونات أساسية للتكييف والأنظمة الميكانيكية للمباني والمنشآت الصناعية الفعالة."],
        ["إضاءة المطارات والطيران", "أنظمة إضاءة مطارات موثوقة وتقنيات طيران متقدمة."],
        ["الخدمات الكهربائية", "خدمات كهربائية متكاملة للبنية التحتية الحديثة والمشاريع الصناعية عالية التقنية."],
      ],
      readMore: "اقرأ المزيد",
      partnersLabel: "شركاؤنا",
      partnersTitle: "موثوقون من شركاء وداعمين رائدين",
      partnersIntro: "هل أنتم مستعدون للتعاون؟ استكشفوا فرص الشراكة مع فريقنا.",
      bePartner: "كن شريكاً",
      brochureLabel: "الكتيب الكامل",
      brochureTitle: "الكتيب الرئيسي",
      brochureText: "حلول الكهرباء والإضاءة والأتمتة للبنية التحتية والطاقة والتصنيع والطيران والمزيد.",
      brochureButton: "تحميل الكتيب",
      newsLabel: "الأخبار",
      newsTitle: "أخبارنا",
      latestNews: "آخر الأخبار",
      newsItems: [
        ["فعاليات", "14 نوفمبر 2024", "الاتحادية تعرض الابتكار في المنتدى العالمي للمطارات 2024"],
        ["أخبار", "30 يناير 2025", "تعاون بلدي لزراعة 1000 شجرة دعماً لأهداف الحياد الكربوني"],
        ["مقالات", "30 يناير 2025", "نجاح في الأتمتة وكشف التسربات ضمن مقابلة صناعية"],
        ["أخبار", "27 فبراير 2025", "منصة توظيف جديدة تربط المواهب الهندسية بالمستقبل"],
        ["فعاليات", "20 يناير 2026", "ورشة استراتيجية لمواءمة أهداف عام 2026"],
      ],
      customersLabel: "عملاؤنا",
      customersTitle: "موثوقون في الطاقة والبنية التحتية",
      customersIntro: "شركاء في الطاقة والبنية التحتية والطيران والتكنولوجيا، تأثير واسع النطاق.",
      customerCta: "عملاؤنا",
      customerLogos: ["الصناعات الثقيلة", "الصناعات الخفيفة", "النفط والغاز", "المياه والطاقة", "الطيران", "النقل الذكي", "مراكز البيانات", "التصنيع", "المرافق", "EPC", "الموانئ", "السكك الحديدية"],
      contactLabel: "تواصل معنا",
      contactTitle: "هل لديك أي أسئلة؟",
      contactIntro: "املأ النموذج أو تواصل معنا عبر بيانات الاتصال أدناه.",
      contactInfo: "معلومات التواصل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      office: "المكتب الرئيسي",
      location: "الموقع",
      locationValue: "المنطقة الصناعية، جناح 100<br />المدينة، الدولة",
      hours: "ساعات العمل",
      hoursValue: "الإثنين – الجمعة، 8:00 صباحاً – 6:00 مساءً",
      fields: ["الاسم", "البريد الإلكتروني", "الهاتف", "الشركة", "الموضوع", "الرسالة"],
      placeholders: ["اسمك", "بريدك الإلكتروني", "هاتفك", "الشركة", "الرسالة"],
      options: ["اختر الموضوع", "الشراكة", "الخدمات", "القطاعات", "التعاون", "أخرى"],
      submit: "إرسال",
      footerTag: "شركة تابعة لمجموعة القابضة الصناعية",
      footerHeadings: ["الشركة", "القطاعات والخدمات", "قانوني"],
      footerCompany: ["من نحن", "قصص النجاح", "الأخبار والفعاليات", "الوظائف", "الخبرة", "الشركاء", "العملاء"],
      footerServices: ["المستلزمات الكهربائية", "التحكم والأتمتة", "التكييف والميكانيكا", "المطارات والطيران", "الخدمات الكهربائية"],
      footerLegal: ["DSR", "سياسة الخصوصية"],
      footerCta: "تواصل معنا",
      rights: "الاتحادية. جميع الحقوق محفوظة.",
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
    setText("#customers .section__label", copy.customersLabel);
    setText("#customers .section__title", copy.customersTitle);
    setText("#customers .section__intro", copy.customersIntro);
    setText("#customers .link-arrow", copy.customerCta);
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
    /* One entry per nav tab; merged "Services" tracks industries + services + partners */
    var sectionGroups = [
      ["hero"],
      ["about"],
      ["why-us"],
      ["industries", "services", "partners"],
      ["news"],
      ["customers"],
    ];
    var floatSelected = 0;
    var floatHover = false;

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
      if (moveCursor !== false && !floatHover) floatMoveCursorToIndex(floatSelected);
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
                if (!floatHover) floatMoveCursorToIndex(floatSelected);
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
        if (!floatHover) floatMoveCursorToIndex(floatSelected);
      }
    }

    floatItems.forEach(function (item, i) {
      item.addEventListener("mouseenter", function () {
        floatHover = true;
        floatMoveCursorToIndex(i);
      });
    });

    floatTabsRoot.addEventListener("mouseleave", function () {
      floatHover = false;
      floatMoveCursorToIndex(floatSelected);
    });

    floatLinks.forEach(function (link, i) {
      link.addEventListener("click", function () {
        floatHover = false;
        floatSetSelected(i, true);
      });
    });

    var floatScrollBusy = false;
    window.addEventListener(
      "scroll",
      function () {
        if (floatScrollBusy) return;
        floatScrollBusy = true;
        requestAnimationFrame(function () {
          floatScrollBusy = false;
          floatSyncFromScroll();
        });
      },
      { passive: true }
    );

    window.addEventListener("resize", function () {
      if (floatHover) {
        var hovered = floatTabsRoot.querySelector(".float-tabs__item:hover");
        var hi = hovered ? Array.prototype.indexOf.call(floatItems, hovered) : floatSelected;
        if (hi >= 0) floatMoveCursorToIndex(hi);
      } else {
        floatMoveCursorToIndex(floatSelected);
      }
    });

    function floatInitPosition() {
      floatUpdateActiveClasses();
      floatMoveCursorToIndex(floatSelected);
      floatSyncFromScroll();
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

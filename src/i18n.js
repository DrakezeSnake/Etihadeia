const STORAGE_KEY = "etihadeia-language";

const SEO_DESCRIPTION =
  "Electroplating chemicals, machines, accessories, lacquers, laboratory analysis, and technical support for manufacturers in Egypt and the Middle East.";

const pageMeta = {
  en: {
    title: "El Etehadia | Electroplating & Surface Finishing Solutions",
    description: SEO_DESCRIPTION,
    pages: {
      about: ["El Etehadia | About", "El Etehadia has supplied electroplating products and technical support from Cairo since 1997."],
      services: ["El Etehadia | Services", "Laboratory analysis, troubleshooting, product selection, process optimization, machines, and accessories for electroplating operations."],
      products: ["El Etehadia | Products", "Electroplating chemicals, additives, lacquers, machines, accessories, and supporting materials for industrial surface finishing."],
      industries: ["El Etehadia | Industries", "Surface-finishing support for automotive components, sanitary fittings, appliances, hardware, plastics, metal fabrication, and decorative products."],
      projects: ["El Etehadia | Applications", "Practical electroplating applications across nickel-chrome finishing, zinc protection, plating on plastic, bath control, and troubleshooting."],
      partners: ["El Etehadia | Partners & Brands", "MacDermid Enthone, HAWKING England, and licensed production support for surface-finishing salts, colors, and related products."],
      brochure: ["El Etehadia | Products", "Product information and technical document requests for electroplating and surface-finishing operations."],
      news: ["El Etehadia | News & Insights", "Technical notes and practical guidance for electroplating, plating-bath control, surface preparation, and industrial finishing."],
      contact: ["El Etehadia | Contact", "Contact El Etehadia in Cairo for electroplating products, laboratory analysis, technical support, machines, and accessories."],
    },
  },
  ar: {
    title: "الاتحادية | حلول الطلاء الكهربائي ومعالجة الأسطح",
    description: "كيماويات وماكينات وإكسسوارات ولاكيهات الطلاء الكهربائي، مع تحليل معملي ودعم فني للمصنعين في مصر والشرق الأوسط.",
    pages: {
      about: ["الاتحادية | عن الشركة", "تدعم الاتحادية المصنعين من القاهرة بمنتجات الطلاء الكهربائي والدعم الفني منذ عام 1997."],
      services: ["الاتحادية | الخدمات", "تحليل معملي، دعم فني، اختيار منتجات، تحسين عمليات، وماكينات وإكسسوارات لخطوط الطلاء الكهربائي."],
      products: ["الاتحادية | المنتجات", "كيماويات وإضافات ولاكيهات وماكينات وإكسسوارات ومواد مساعدة لعمليات معالجة الأسطح الصناعية."],
      industries: ["الاتحادية | القطاعات", "دعم معالجة الأسطح لمكونات السيارات، الأدوات الصحية، الأجهزة، الهاردوير، البلاستيك، والتشكيل المعدني."],
      projects: ["الاتحادية | التطبيقات", "تطبيقات عملية للطلاء الكهربائي تشمل النيكل والكروم والزنك والطلاء على البلاستيك والتحكم في الأحواض."],
      partners: ["الاتحادية | الشركاء والعلامات", "MacDermid Enthone وHAWKING England ودعم إنتاج محلي للأملاح والألوان والمنتجات المرتبطة بمعالجة الأسطح."],
      brochure: ["الاتحادية | المنتجات", "معلومات المنتجات وطلبات الوثائق الفنية لعمليات الطلاء الكهربائي ومعالجة الأسطح."],
      news: ["الاتحادية | الرؤى", "ملاحظات فنية وإرشادات عملية للطلاء الكهربائي والتحكم في الأحواض وتجهيز الأسطح والتشطيب الصناعي."],
      contact: ["الاتحادية | تواصل", "تواصل مع الاتحادية في القاهرة لمنتجات الطلاء الكهربائي والتحليل المعملي والدعم الفني والماكينات والإكسسوارات."],
    },
  },
};

const arText = {
  "El Etehadia": "الاتحادية",
  "Home": "الرئيسية",
  "About": "عن الشركة",
  "Services": "الخدمات",
  "Products": "المنتجات",
  "Industries": "القطاعات",
  "Applications": "التطبيقات",
  "Partners": "الشركاء",
  "Insights": "الرؤى",
  "Contact": "تواصل",
  "WhatsApp": "واتساب",
  "Send inquiry": "إرسال استفسار",
  "Back to top": "العودة للأعلى",
  "Contact details": "بيانات التواصل",
  "Phone": "الهاتف",
  "Email": "البريد الإلكتروني",
  "Location": "الموقع",
  "Cairo, Egypt": "القاهرة، مصر",
  "Name": "الاسم",
  "Company": "الشركة",
  "Inquiry Type": "نوع الاستفسار",
  "Select inquiry type": "اختر نوع الاستفسار",
  "Product inquiry": "استفسار عن منتج",
  "Technical support": "دعم فني",
  "Laboratory analysis": "تحليل معملي",
  "Machines & accessories": "ماكينات وإكسسوارات",
  "Partnership": "شراكة",
  "Other": "أخرى",
  "Message": "الرسالة",
  "Send Inquiry": "إرسال الاستفسار",
  "Next step": "الخطوة التالية",
  "Need support for your plating line?": "هل تحتاج دعماً لخط الطلاء؟",
  "Send us your inquiry, product requirement, or technical issue. Our team can help with product selection, lab analysis, and process support.":
    "أرسل لنا استفسارك أو متطلبات المنتج أو المشكلة الفنية. يمكن لفريقنا المساعدة في اختيار المنتج والتحليل المعملي ودعم العملية.",
  "Please complete the required fields before sending.": "يرجى إكمال الحقول المطلوبة قبل الإرسال.",
  "Sending inquiry...": "جار إرسال الاستفسار...",
  "Thank you. Your inquiry is ready for the El Etehadia team.": "شكراً لك. أصبح استفسارك جاهزاً لفريق الاتحادية.",
  "El Etehadia Company. All rights reserved.": "شركة الاتحادية. جميع الحقوق محفوظة.",
};

const arAttributes = {
  "El Etehadia home": "الصفحة الرئيسية للاتحادية",
  "Switch to Arabic": "التبديل إلى العربية",
  "Switch to English": "التبديل إلى الإنجليزية",
  "Primary": "رئيسي",
  "Modern electroplating production line with clean plating tanks": "خط إنتاج طلاء كهربائي حديث بأحواض نظيفة",
  "Electroplating facility with technicians reviewing production samples": "منشأة طلاء كهربائي مع فنيين يراجعون عينات إنتاج",
  "Laboratory technician analyzing electroplating bath solution": "فني مختبر يحلل محلول حوض الطلاء الكهربائي",
  "Technical specialist reviewing electroplating samples": "متخصص فني يراجع عينات الطلاء الكهربائي",
  "Freshly nickel plated metal components on a rack": "مكونات معدنية مطلية بالنيكل على حامل",
  "Chrome plated industrial parts with reflective finish": "أجزاء صناعية مطلية بالكروم بسطح عاكس",
  "Copper plated components on a production rack": "مكونات مطلية بالنحاس على حامل إنتاج",
  "Zinc coated fasteners for corrosion protection": "مثبتات مطلية بالزنك للحماية من التآكل",
  "Plastic component with metallic plated finish": "مكون بلاستيكي بتشطيب معدني مطلي",
  "Metal parts being prepared before electroplating": "أجزاء معدنية يتم تجهيزها قبل الطلاء الكهربائي",
  "Protective lacquer finish on polished metal samples": "تشطيب لاكيه واق على عينات معدنية مصقولة",
  "Chrome nickel copper and gold metal samples": "عينات معدنية كروم ونيكل ونحاس وذهبية",
  "Technical specialist reviewing electroplating documents and samples": "متخصص فني يراجع وثائق وعينات الطلاء الكهربائي",
  "Cairo Egypt location visual": "تصور لموقع القاهرة مصر",
};

const originalText = new WeakMap();
const originalAttrs = new WeakMap();

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function collectTextNodes(root) {
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, [data-language-toggle]")) {
        return NodeFilter.FILTER_REJECT;
      }

      return normalizeText(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  let node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }

  return nodes;
}

function translateText(root, lang) {
  collectTextNodes(root).forEach((node) => {
    if (!originalText.has(node)) {
      originalText.set(node, normalizeText(node.nodeValue));
    }

    const source = originalText.get(node);
    node.nodeValue = lang === "ar" && arText[source] ? arText[source] : source;
  });
}

function translateAttributes(root, lang) {
  root.querySelectorAll("[aria-label], img[alt]").forEach((element) => {
    ["aria-label", "alt"].forEach((attr) => {
      if (!element.hasAttribute(attr)) return;

      if (!originalAttrs.has(element)) {
        originalAttrs.set(element, {});
      }

      const store = originalAttrs.get(element);
      if (!store[attr]) {
        store[attr] = element.getAttribute(attr);
      }

      const source = store[attr];
      element.setAttribute(attr, lang === "ar" && arAttributes[source] ? arAttributes[source] : source);
    });
  });
}

function applyLanguage(lang) {
  const safeLang = lang === "ar" ? "ar" : "en";
  const root = document.documentElement;
  const metaDescription = document.querySelector('meta[name="description"]');
  const toggle = document.querySelector("[data-language-toggle]");
  const label = document.querySelector("[data-language-label]");
  const pageKey = document.body.dataset.page;
  const pageSpecificMeta = pageKey && pageMeta[safeLang].pages?.[pageKey];

  root.lang = safeLang;
  root.dir = safeLang === "ar" ? "rtl" : "ltr";
  document.body.dataset.lang = safeLang;
  document.title = pageSpecificMeta ? pageSpecificMeta[0] : pageMeta[safeLang].title;

  if (metaDescription) {
    metaDescription.setAttribute("content", pageSpecificMeta ? pageSpecificMeta[1] : pageMeta[safeLang].description);
  }

  translateText(document.body, safeLang);
  translateAttributes(document.body, safeLang);

  if (toggle && label) {
    toggle.setAttribute("aria-pressed", String(safeLang === "ar"));
    toggle.setAttribute("aria-label", safeLang === "ar" ? "Switch to English" : "Switch to Arabic");
    label.textContent = safeLang === "ar" ? "English" : "العربية";
  }

  localStorage.setItem(STORAGE_KEY, safeLang);
  requestAnimationFrame(() => {
    window.dispatchEvent(new Event("resize"));
  });
}

export function setupLanguageToggle() {
  const initialLanguage = localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
  const toggle = document.querySelector("[data-language-toggle]");

  applyLanguage(initialLanguage);
  toggle?.addEventListener("click", () => {
    applyLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
  });
}

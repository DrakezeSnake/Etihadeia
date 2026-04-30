const STORAGE_KEY = "etihadeia-language";

const pageMeta = {
  en: {
    title: "Etihadeia | Industrial Technology & Infrastructure Solutions",
    description:
      "Etihadeia delivers industrial technology, electroplating, automation, aviation, and infrastructure solutions through a cinematic liquid-metal experience.",
  },
  ar: {
    title: "الاتحادية | حلول التكنولوجيا الصناعية والبنية التحتية",
    description:
      "تقدم الاتحادية حلول التكنولوجيا الصناعية والطلاء الكهربائي والأتمتة والطيران والبنية التحتية ضمن تجربة سينمائية من المعدن السائل.",
  },
};

const arText = {
  Etihadeia: "الاتحادية",
  "Industrial Technology": "التكنولوجيا الصناعية",
  Story: "القصة",
  Industries: "القطاعات",
  Services: "الخدمات",
  Contact: "تواصل",
  "00 - Identity": "00 - الهوية",
  "A precise industrial mark separates into motion, turning brand geometry into the material language of the page.":
    "تنفصل العلامة الصناعية الدقيقة لتدخل في حركة، محولة هندسة الهوية إلى لغة مادية للموقع.",
  "Logo vector to metal body": "من شعار متجهي إلى جسم معدني",
  "Electroplating & industrial technology": "الطلاء الكهربائي والتكنولوجيا الصناعية",
  Experience: "الخبرة",
  "Delivers Solutions": "تصنع الحلول",
  "Years of experience": "سنوات من الخبرة",
  Experts: "خبراء",
  "Completed projects": "مشاريع مكتملة",
  "About us": "من نحن",
  "About Etihadeia": "عن الاتحادية",
  "Etihadeia delivers cutting-edge technologies, tailored solutions, and expert services that drive industrial excellence, innovation, and reliability across sectors.":
    "تقدم الاتحادية تقنيات متقدمة وحلولاً مخصصة وخدمات متخصصة تدعم التميز الصناعي والابتكار والموثوقية عبر القطاعات.",
  "Why us": "لماذا نحن",
  "Where Innovation Ignites Industry": "حيث يشعل الابتكار الصناعة",
  "Welcome to Etihadeia, a leading provider with expertise in electrical, control, automation, aviation, runway lighting systems, airport technologies, digital, and IoT supplies for various industries.":
    "مرحباً بكم في الاتحادية، مزود رائد بخبرة في الأنظمة الكهربائية والتحكم والأتمتة والطيران وأنظمة إضاءة المدارج وتقنيات المطارات والحلول الرقمية ومستلزمات إنترنت الأشياء لمختلف الصناعات.",
  Technology: "التكنولوجيا",
  "Transformative Technology for Industry Leaders": "تكنولوجيا تحول قادة الصناعة",
  "At Etihadeia, we are committed to providing customized supplies that meet the market's unique needs.":
    "نلتزم في الاتحادية بتوفير مستلزمات مخصصة تلبي احتياجات السوق الفريدة.",
  Standards: "المعايير",
  "Setting New Standards": "نضع معايير جديدة",
  "Our service teams are expert and equipped with the latest tools and technologies to design, engineer, test, and energize electrical solutions that serve the industries.":
    "تضم فرق خدماتنا خبراء مجهزين بأحدث الأدوات والتقنيات لتصميم وهندسة واختبار وتشغيل الحلول الكهربائية التي تخدم الصناعات.",
  "Our Industries": "قطاعاتنا",
  "Sectors We Serve": "قطاعات نخدمها",
  "Aviation, transportation, manufacturing, and more - tailored solutions that drive efficiency and innovation.":
    "الطيران والنقل والتصنيع والمزيد - حلول مخصصة تعزز الكفاءة والابتكار.",
  "Oil & Gas": "النفط والغاز",
  Infrastructure: "البنية التحتية",
  Industrial: "الصناعة",
  Aviation: "الطيران",
  "Power & Water": "الطاقة والمياه",
  Commercial: "التجاري",
  "Electrical Services": "الخدمات الكهربائية",
  "Smart Cities": "المدن الذكية",
  "Our Services": "خدماتنا",
  "Solutions That Scale": "حلول قابلة للتوسع",
  "Automation, control, aviation, and IoT - enhancing efficiency and safety across industries.":
    "الأتمتة والتحكم والطيران وإنترنت الأشياء - لتعزيز الكفاءة والسلامة عبر الصناعات.",
  "Electric Supplies": "المستلزمات الكهربائية",
  "High-quality electric supplies for industrial, commercial, and infrastructure projects.":
    "مستلزمات كهربائية عالية الجودة للمشاريع الصناعية والتجارية ومشاريع البنية التحتية.",
  "Control & Automation": "التحكم والأتمتة",
  "Smarter operations through a full suite of control and automation products.":
    "عمليات أكثر ذكاءً عبر مجموعة متكاملة من منتجات التحكم والأتمتة.",
  "HVAC & Mechanical": "التكييف والميكانيكا",
  "Essential HVAC and mechanical components for efficient building and industrial systems.":
    "مكونات أساسية للتكييف والأنظمة الميكانيكية للمباني والمنشآت الصناعية الفعالة.",
  "Airport Lighting & Aviation": "إضاءة المطارات والطيران",
  "Reliable airport lighting systems and advanced aviation technologies.":
    "أنظمة إضاءة مطارات موثوقة وتقنيات طيران متقدمة.",
  "End-to-end electrical services for modern infrastructure and hi-tech industrial projects.":
    "خدمات كهربائية متكاملة للبنية التحتية الحديثة والمشاريع الصناعية عالية التقنية.",
  "Our Partners": "شركاؤنا",
  "Trusted by Top Partners & Supporters": "موثوقون من شركاء وداعمين رائدين",
  "Ready to collaborate? Explore partnership opportunities with our team.":
    "هل أنتم مستعدون للتعاون؟ استكشفوا فرص الشراكة مع فريقنا.",
  "Our Full Brochure": "الكتيب الكامل",
  "Main Brochure": "الكتيب الرئيسي",
  "Electrical, lighting, and automation solutions for infrastructure, energy, manufacturing, aviation, and more.":
    "حلول الكهرباء والإضاءة والأتمتة للبنية التحتية والطاقة والتصنيع والطيران والمزيد.",
  "Download Brochure": "تحميل الكتيب",
  News: "الأخبار",
  "Our News": "أخبارنا",
  "Latest news items are deferred until verified content is supplied.":
    "سيتم إضافة آخر الأخبار بعد تزويدنا بمحتوى موثق.",
  "Our Customers": "عملاؤنا",
  "Trusted Across Energy & Infrastructure": "موثوقون في الطاقة والبنية التحتية",
  "Partners across energy, infrastructure, aviation, and technology - impact at scale.":
    "شركاء في الطاقة والبنية التحتية والطيران والتكنولوجيا - تأثير واسع النطاق.",
  "Heavy Industries": "الصناعات الثقيلة",
  "Light Industry": "الصناعات الخفيفة",
  "Smart Mobility": "النقل الذكي",
  "Data Centers": "مراكز البيانات",
  Manufacturing: "التصنيع",
  Utilities: "المرافق",
  Ports: "الموانئ",
  Rail: "السكك الحديدية",
  "Contact us": "تواصل معنا",
  "Do you have any questions?": "هل لديك أي أسئلة؟",
  "Fill out the form or reach us using the contact details below.":
    "املأ النموذج أو تواصل معنا عبر بيانات الاتصال أدناه.",
  "Contact information": "معلومات التواصل",
  Email: "البريد الإلكتروني",
  Phone: "الهاتف",
  "Main Office": "المكتب الرئيسي",
  Location: "الموقع",
  "Office Hours": "ساعات العمل",
  Name: "الاسم",
  Company: "الشركة",
  Subject: "الموضوع",
  "Select Subject": "اختر الموضوع",
  Partnership: "الشراكة",
  Collaborate: "التعاون",
  Other: "أخرى",
  Message: "الرسالة",
  Submit: "إرسال",
  "A subsidiary of Industrial Holdings Group": "شركة تابعة لمجموعة القابضة الصناعية",
  About: "عن الشركة",
  "Industries & Services": "القطاعات والخدمات",
  Partners: "الشركاء",
  Customers: "العملاء",
  "Etihadeia. All rights reserved.": "الاتحادية. جميع الحقوق محفوظة.",
};

const arAttributes = {
  "Etihadeia home": "الصفحة الرئيسية للاتحادية",
  Primary: "رئيسي",
  "Etihadeia liquid metal story": "قصة الاتحادية بالمعدن السائل",
  "Laboratory analyst performing quality control with chemical analysis equipment":
    "محلل مختبر يجري مراقبة الجودة باستخدام معدات التحليل الكيميائي",
  "Technician maintaining infrastructure in a modern data center":
    "فني يصون البنية التحتية في مركز بيانات حديث",
  "Industrial technician monitoring electroplating process tanks and controls":
    "فني صناعي يراقب أحواض الطلاء الكهربائي ولوحات التحكم",
  "Offshore oil and gas platform at dusk": "منصة نفط وغاز بحرية عند الغسق",
  "Modern elevated transit and urban infrastructure": "نقل علوي حديث وبنية تحتية حضرية",
  "Partner names": "أسماء الشركاء",
  Footer: "التذييل",
  "Switch to Arabic": "التبديل إلى العربية",
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
      if (!element.hasAttribute(attr)) {
        return;
      }

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

  root.lang = safeLang;
  root.dir = safeLang === "ar" ? "rtl" : "ltr";
  document.body.dataset.lang = safeLang;
  document.title = pageMeta[safeLang].title;

  if (metaDescription) {
    metaDescription.setAttribute("content", pageMeta[safeLang].description);
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

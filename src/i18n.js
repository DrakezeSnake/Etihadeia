import { getProductDocumentBySlug } from "./data/productDocuments.js";
import {
  getArabicProductDocumentMeta,
  productDocumentArabicAttributes,
  productDocumentArabicText,
} from "./data/productDocumentArabic.js";

const STORAGE_KEY = "etihadeia-language";

const SEO_DESCRIPTION =
  "El Etehadia supplies electroplating chemicals, plating equipment, lacquers, laboratory analysis, and technical support across Egypt and the Middle East.";

const pageMeta = {
  en: {
    title: "Electroplating Chemicals & Surface Finishing Egypt | El Etehadia",
    description: SEO_DESCRIPTION,
    pages: {
      about: ["About El Etehadia | Electroplating Experts Since 1997", "Learn about El Etehadia, a Cairo-based supplier of electroplating chemicals, equipment, laboratory analysis, and technical support since 1997."],
      services: ["Electroplating Laboratory & Technical Services | El Etehadia", "Improve plating-line performance with laboratory analysis, troubleshooting, product selection, process optimization, machines, and technical support."],
      products: ["Electroplating Chemicals & Products in Egypt | El Etehadia", "Explore electroplating chemicals and products for nickel, chrome, copper, zinc, plastics, light metals, corrosion protection, and industrial finishing."],
      industries: ["Industrial Electroplating Applications in Egypt | El Etehadia", "Surface-finishing solutions for automotive, aerospace, appliances, sanitary fittings, machinery, energy, oil and gas, packaging, and plastics."],
      projects: ["Electroplating Applications & Process Support | El Etehadia", "See practical applications for nickel-chrome finishing, zinc protection, plating on plastic, bath control, electroless nickel, and troubleshooting."],
      partners: ["Surface Finishing Technology Partners | El Etehadia", "Discover El Etehadia's surface-finishing partners and brands, including MacDermid Enthone, HAWKING England, Sisecam, and Nickelhütte Aue."],
      brochure: ["Electroplating Product Brochures & Documents | El Etehadia", "Browse electroplating product brochures, technical documents, factsheets, and case studies for industrial surface-finishing operations."],
      news: ["Electroplating Insights & Technical Guides | El Etehadia", "Read practical electroplating guidance about bath control, surface preparation, coating selection, common defects, and industrial finishing."],
      contact: ["Contact El Etehadia | Electroplating Support in Cairo", "Contact El Etehadia in Cairo for electroplating chemicals, product selection, laboratory analysis, technical support, machines, and accessories."],
      solutions: [
        "Solutions | Surface Finishing Technologies | El Etehadia",
        "Explore surface finishing solutions including surface conditioning, anti-corrosion, light metal finishes, decorative coatings, plating on plastics, electroless nickel, wear resistance, precious metals, plastic recycling, and WaterCARE.",
      ],
    },
  },
  ar: {
    title: "الاتحادية | كيماويات الطلاء الكهربائي وحلول تشطيب الأسطح في مصر",
    description:
      "تورد الاتحادية كيماويات الطلاء الكهربائي وماكينات الطلاء وورنيش كهربي والتحليل المعملي والدعم الفني.",
    pages: {
      about: ["الاتحادية | عن الشركة", "تدعم الاتحادية المصنعين من القاهرة بمنتجات الطلاء الكهربائي والدعم الفني منذ عام 1997."],
      services: ["الاتحادية | الخدمات", "تحليل معملي، دعم فني، اختيار منتجات، تحسين عمليات، وماكينات وإكسسوارات لخطوط الطلاء الكهربائي."],
      products: ["الاتحادية | المنتجات", "كيماويات وإضافات وورنيش كهربي وماكينات وإكسسوارات ومواد مساعدة لعمليات معالجة الأسطح الصناعية."],
      industries: ["الاتحادية | القطاعات", "دعم معالجة الأسطح لمكونات السيارات، الأدوات الصحية، الأجهزة، الهاردوير، البلاستيك، والتشكيل المعدني."],
      projects: ["الاتحادية | التطبيقات", "تطبيقات عملية للطلاء الكهربائي تشمل النيكل والكروم والزنك والطلاء على البلاستيك والتحكم في الأحواض."],
      partners: ["الاتحادية | الشركاء والعلامات", "MacDermid Enthone وHAWKING England وŞişecam وNickelhütte Aue ودعم إنتاج محلي للأملاح والألوان والمنتجات المرتبطة بمعالجة الأسطح."],
      brochure: ["الاتحادية | المنتجات", "معلومات المنتجات وطلبات الوثائق الفنية لعمليات الطلاء الكهربائي ومعالجة الأسطح."],
      news: ["الاتحادية | الرؤى", "ملاحظات فنية وإرشادات عملية للطلاء الكهربائي والتحكم في الأحواض وتجهيز الأسطح والتشطيب الصناعي."],
      contact: ["الاتحادية | تواصل", "تواصل مع الاتحادية في القاهرة لمنتجات الطلاء الكهربائي والتحليل المعملي والدعم الفني والماكينات والإكسسوارات."],
      solutions: [
        "الحلول | تقنيات تشطيب الأسطح | الاتحادية",
        "استعرض حلول تشطيب الأسطح، بما في ذلك تجهيز الأسطح، والحماية من التآكل، وتشطيبات المعادن الخفيفة، والطلاءات الديكورية، والطلاء على البلاستيك، والنيكل الكيميائي، ومقاومة التآكل الميكانيكي، والمعادن النفيسة، وإعادة تدوير البلاستيك، وحلول معالجة المياه WaterCARE.",
      ],
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
  "Solutions": "الحلول",
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
  "Thank you. Your inquiry is ready for the El Etehadia team.": "شكراً لك. تم تجهيز استفسارك لفريق الاتحادية.",
  "El Etehadia Company. All rights reserved.": "الشركة الاتحادية. جميع الحقوق محفوظة.",
};

Object.assign(arText, {
  "About El Etehadia": "عن الاتحادية",
  "Electroplating Supply and Technical Support Since 1997": "توريد حلول الطلاء الكهربائي والدعم الفني منذ عام 1997",
  "El Etehadia Company for Import, Export & Agencies has supported manufacturers from Cairo since 1997. The company supplies electroplating chemicals, machines, accessories, lacquers, and technical services for industrial surface-finishing operations across Egypt and the Middle East.":
    "تدعم الشركة الاتحادية للاستيراد والتصدير والتوكيلات المصنّعين منذ عام 1997 من خلال توفير كيماويات الطلاء الكهربائي، والماكينات، والإكسسوارات، وورنيش كهربي، والخدمات الفنية لعمليات معالجة وتشطيب الأسطح الصناعية في مصر والشرق الأوسط.",
  "Founded in Cairo": "تأسست في القاهرة",
  "Local technical support": "دعم فني محلي",
  "Supply across Egypt and the Middle East": "توريد في مصر والشرق الأوسط",
  "Mission": "المهمة",
  "Helping Manufacturers Achieve Consistent Finishes": "مساعدة المصنّعين على الوصول إلى تشطيبات ثابتة",
  "Our mission is to provide reliable electroplating products and practical technical support that help manufacturers improve finish quality, stabilize production, reduce downtime, and maintain efficient plating lines.":
    "مهمتنا هي توفير منتجات طلاء كهربائي موثوقة ودعم فني عملي يساعد المصنعين على تحسين جودة التشطيب، وتثبيت الإنتاج، وتقليل التوقف، والحفاظ على كفاءة خطوط الطلاء.",
  "What we do": "ما نقدمه",
  "From Chemistry to Process Control": "من كيماويات الطلاء إلى ضبط التشغيل",
  "We support manufacturers across the full plating workflow: surface preparation, bath chemistry, plating systems, finishing products, equipment, accessories, analysis, and troubleshooting.":
    "ندعم المصنعين عبر دورة الطلاء الكاملة: تجهيز الأسطح، كيمياء الأحواض، أنظمة الطلاء، منتجات التشطيب، المعدات، الإكسسوارات، التحليل، وحل المشكلات.",
  "Electroplating chemicals and additives": "كيماويات وإضافات الطلاء الكهربائي",
  "Chemistry supply for daily bath control, replenishment, and finish performance.": "توريد كيماويات الطلاء لضبط الأحواض يومياً، والتعويض، وأداء التشطيب.",
  "Nickel, chrome, copper, zinc, and plating-on-plastic systems": "أنظمة النيكل والكروم والنحاس والزنك والطلاء على البلاستيك",
  "Core plating systems for decorative, protective, and functional applications.": "أنظمة طلاء أساسية للتطبيقات الديكورية والوقائية والوظيفية.",
  "Surface preparation and treatment products": "منتجات تجهيز ومعالجة الأسطح",
  "Cleaners, activation, etching, and pre-treatment products for adhesion and consistent finish quality.": "منظفات ومنتجات تنشيط وحفر ومعالجة أولية لتحسين الالتصاق وثبات جودة التشطيب.",
  "Lacquers and protective finishing materials": "ورنيش كهربي ومواد تشطيب واقية",
  "HAWKING lacquers and related protective finishes for surface appearance and durability.": "ورنيش كهربي HAWKING وتشطيبات واقية مرتبطة لتحسين مظهر السطح ومتانته.",
  "Machines, accessories, and production support": "ماكينات وإكسسوارات ودعم إنتاج",
  "Equipment and supporting parts for new lines, upgrades, and ongoing production needs.": "معدات وقطع مساعدة للخطوط الجديدة والتحديثات واحتياجات الإنتاج المستمرة.",
  "Laboratory analysis and technical guidance": "تحليل معملي ودعم فني",
  "Bath analysis, sample review, and process guidance for better production decisions.": "تحليل الأحواض ومراجعة العينات وإرشاد العملية لاتخاذ قرارات إنتاج أفضل.",
  "Experience": "الخبرة",
  "Local Knowledge. International Standards.": "معرفة محلية. معايير دولية.",
  "For decades, El Etehadia has worked closely with manufacturers who require dependable surface-finishing performance. Our role is to make advanced plating products and technical support accessible locally, with fast communication and practical production-focused guidance.":
    "على مدار عقود، عملت الاتحادية عن قرب مع مصنعين يحتاجون إلى أداء موثوق في معالجة الأسطح. دورنا هو إتاحة منتجات طلاء متقدمة ودعم فني محلياً، مع تواصل سريع وإرشاد عملي موجه للإنتاج.",
  "Laboratory support": "الدعم المعملي",
  "A Technical Partner, Not Just a Supplier": "شريك فني، وليس مجرد مورد",
  "Our specialized laboratory and technical team help customers understand bath conditions, identify process issues, and take corrective action. This allows production teams to make informed decisions and maintain consistent quality.":
    "يساعد مختبرنا المتخصص وفريقنا الفني العملاء على فهم ظروف الأحواض، وتحديد مشكلات العملية، واتخاذ إجراءات تصحيحية. يتيح ذلك لفرق الإنتاج اتخاذ قرارات واعية والحفاظ على جودة ثابتة.",
  "Request technical support": "اطلب دعماً فنياً",
  "Technical Services for Electroplating Operations": "خدمات فنية لعمليات الطلاء الكهربائي",
  "El Etehadia supports plating operations with laboratory analysis, process troubleshooting, product selection, equipment guidance, and ongoing technical support.":
    "تدعم الاتحادية عمليات الطلاء بالتحليل المعملي، وحل مشكلات العملية، واختيار المنتجات، وإرشاد المعدات، والدعم الفني المستمر.",
  "Service support": "دعم الخدمات",
  "Beyond Supply: Technical Support That Keeps Lines Running": "ما بعد التوريد: دعم فني يحافظ على استقرار خطوط الإنتاج",
  "Laboratory Analysis": "التحليل المعملي",
  "We analyze plating baths, samples, and process conditions to help customers evaluate performance, identify imbalances, and take corrective action.":
    "نحلل أحواض الطلاء والعينات وظروف العملية لمساعدة العملاء على تقييم الأداء، وتحديد الاختلالات، واتخاذ إجراءات تصحيحية.",
  "Use for: Bath control, sample analysis, quality validation, defect investigation, process correction.": "يستخدم في: ضبط الأحواض، تحليل العينات، التحقق من الجودة، فحص العيوب، وتصحيح العملية.",
  "Technical Support": "الدعم الفني",
  "Our team supports manufacturers with practical process guidance across electroplating lines, from preparation to final finish.": "يدعم فريقنا المصنعين بإرشاد عملي عبر خطوط الطلاء الكهربائي، من التجهيز حتى التشطيب النهائي.",
  "Use for: Additive dosing, bath maintenance, defect troubleshooting, operating condition review, production stability.": "يستخدم في: جرعات الإضافات، صيانة الأحواض، حل العيوب، مراجعة ظروف التشغيل، وثبات الإنتاج.",
  "Product Selection": "اختيار المنتجات",
  "We help customers choose the right chemistry, additives, lacquers, machines, and accessories based on their application, substrate, finish requirements, and production conditions.":
    "نساعد العملاء على اختيار كيماويات الطلاء والإضافات وورنيش كهربي والماكينات والإكسسوارات المناسبة حسب التطبيق ونوع الخامة ومتطلبات التشطيب وظروف الإنتاج.",
  "Use for: Nickel, chrome, copper, and zinc processes; plating on plastic; surface preparation; protective finishing; decorative finishing.": "يستخدم في: عمليات النيكل والكروم والنحاس والزنك؛ الطلاء على البلاستيك؛ تجهيز الأسطح؛ التشطيبات الواقية؛ التشطيبات الديكورية.",
  "Process Optimization": "تحسين العملية",
  "We help customers improve plating-line performance by reviewing chemical balance, workflow, operating windows, and recurring production issues.":
    "نساعد العملاء على تحسين أداء خطوط الطلاء من خلال مراجعة توازن الأحواض وسير العمل وظروف التشغيل ومشكلات الإنتاج المتكررة.",
  "Use for: Reducing rejection rates, improving finish consistency, stabilizing bath performance, supporting line upgrades, increasing production reliability.": "يستخدم في: تقليل الرفض، تحسين ثبات التشطيب، تثبيت أداء الأحواض، دعم تحديث الخطوط، وزيادة موثوقية الإنتاج.",
  "Machines & Accessories": "ماكينات وإكسسوارات",
  "El Etehadia supplies electroplating machines, accessories, and related equipment needed for industrial plating operations.": "توفر الاتحادية ماكينات وإكسسوارات ومعدات مرتبطة بالطلاء الكهربائي لعمليات الطلاء الصناعية.",
  "Use for: New line setup, replacement parts, production accessories, equipment upgrades, ongoing operational needs.": "يستخدم في: إنشاء خطوط جديدة، قطع غيار، إكسسوارات الإنتاج، تحديث المعدات، واحتياجات التشغيل المستمرة.",
  "How we work": "كيف نعمل",
  "A practical technical support sequence.": "منهج عملي للدعم الفني.",
  "Understand the process": "فهم ظروف التشغيل",
  "Review the substrate, finish requirement, bath condition, production issue, and available sample or analysis details.": "مراجعة الخامة ومتطلبات التشطيب وحالة الحوض ومشكلة الإنتاج وتفاصيل العينة أو التحليل المتاحة.",
  "Match chemistry and action": "تحديد المنتج والإجراء المناسب",
  "Recommend product options, operating-window checks, additive dosing, or corrective steps according to the customer’s line conditions.": "اقتراح خيارات المنتجات وفحوصات ظروف التشغيل وجرعات الإضافات أو خطوات التصحيح وفق ظروف خط العميل.",
  "Support production follow-up": "دعم متابعة الإنتاج",
  "Help the production team monitor bath stability, finish quality, and recurring defects after corrective action.": "مساعدة فريق الإنتاج على متابعة ثبات الحوض وجودة التشطيب والعيوب المتكررة بعد الإجراء التصحيحي.",
  "Capability matrix": "مجالات الدعم الفني",
  "Service fit by plating need.": "الخدمة المناسبة حسب احتياج خط الطلاء.",
  "Bath analysis": "تحليل الأحواض",
  "Nickel, chrome, copper, zinc, electroless nickel": "نيكل، كروم، نحاس، زنك، نيكل كيميائي",
  "Quality control, defect investigation, process correction": "ضبط الجودة، فحص العيوب، تصحيح العملية",
  "Troubleshooting": "حل المشكلات",
  "Adhesion, burning, dullness, staining, roughness, low coverage": "الالتصاق، الحرق، البهتان، البقع، الخشونة، ضعف التغطية",
  "Production support and rejection-rate reduction": "دعم الإنتاج وتقليل معدلات الرفض",
  "Equipment support": "دعم المعدات",
  "Machines, tanks, line accessories, replacement needs": "ماكينات، أحواض، إكسسوارات خطوط، احتياجات استبدال",
  "New setup, line upgrades, maintenance planning": "إنشاء جديد، تحديث خطوط، تخطيط صيانة",
  "Electroplating Products, Chemicals, Machines & Accessories": "منتجات وكيماويات وماكينات وإكسسوارات الطلاء الكهربائي",
  "El Etehadia supplies a wide range of products for industrial surface finishing, including chemistry, additives, lacquers, machines, accessories, and supporting materials.": "توفر الاتحادية مجموعة واسعة من منتجات معالجة وتشطيب الأسطح الصناعية، تشمل كيماويات الطلاء والإضافات وورنيش كهربي والماكينات والإكسسوارات والمواد المساعدة.",
  "Product categories": "فئات المنتجات",
  "Products for Every Stage of the Plating Process": "منتجات لكل مرحلة من مراحل عملية الطلاء الكهربائي",
  "From surface preparation to final finish, El Etehadia provides the products and support needed to run stable electroplating operations.": "من تجهيز السطح حتى التشطيب النهائي، توفر الاتحادية المنتجات والدعم اللازم لتشغيل عمليات طلاء كهربائي مستقرة.",
  "Nickel Plating": "طلاء النيكل",
  "Nickel systems for decorative and functional applications, supporting brightness, leveling, corrosion resistance, and surface performance.": "أنظمة طلاء نيكل للتطبيقات الديكورية والوظيفية، تدعم اللمعان، والتسوية، ومقاومة التآكل، وتحسين أداء السطح.",
  "Chrome Plating": "طلاء الكروم",
  "Chrome systems for durable decorative finishes, corrosion resistance, cleanability, hardness, and reflective appearance.": "أنظمة طلاء كروم لتشطيبات ديكورية متينة، مع مقاومة للتآكل، وسهولة في التنظيف، وصلادة، ومظهر عاكس.",
  "Copper Plating": "طلاء النحاس",
  "Copper chemistry for undercoats, leveling, conductivity, and decorative finishing sequences.": "كيمياء نحاس للطبقات التحتية والتسوية والتوصيل وتسلسلات التشطيب الديكوري.",
  "Zinc Plating": "طلاء الزنك",
  "Zinc and zinc-alloy systems for anti-corrosion protection and industrial durability.": "أنظمة زنك وسبائك زنك للحماية من التآكل والمتانة الصناعية.",
  "Plating on Plastic": "الطلاء على البلاستيك",
  "Process chemistry and support for metallizing plastic components used in decorative and functional applications.": "كيمياء عملية ودعم لمعدنة المكونات البلاستيكية المستخدمة في التطبيقات الديكورية والوظيفية.",
  "Surface Preparation": "تجهيز الأسطح",
  "Cleaners, activation products, etching solutions, pre-treatment materials, and preparation chemistry for reliable adhesion and finish quality.": "منظفات ومنتجات تنشيط ومحاليل حفر ومواد معالجة أولية وكيمياء تجهيز لالتصاق موثوق وجودة تشطيب ثابتة.",
  "Aluminum Surface Treatment": "معالجة أسطح الألومنيوم",
  "Products and support for aluminum preparation, treatment, and finishing workflows.": "منتجات ودعم لمسارات تجهيز ومعالجة وتشطيب الألومنيوم.",
  "Electroless Nickel": "النيكل الكيميائي",
  "Electroless nickel systems for uniform deposition, complex geometries, corrosion protection, and wear resistance.": "أنظمة نيكل كيميائي لترسيب متجانس على الأشكال المعقدة، مع حماية من التآكل ومقاومة للتآكل الميكانيكي.",
  "Hard Chrome": "الكروم الصلب",
  "Functional chrome systems for wear resistance, hardness, and industrial surface performance.": "أنظمة كروم وظيفية لمقاومة التآكل الميكانيكي والصلادة وأداء الأسطح الصناعية.",
  "Trivalent Chrome": "الكروم الثلاثي",
  "Modern chrome finishing systems for decorative applications and evolving compliance requirements.": "أنظمة تشطيب كروم حديثة للتطبيقات الديكورية ومتطلبات الامتثال المتطورة.",
  "Lacquers": "ورنيش كهربي",
  "HAWKING lacquers and protective finishing products for enhanced durability, appearance, and post-treatment performance.": "ورنيش كهربي HAWKING ومنتجات تشطيب واقية لتحسين المتانة والمظهر وأداء ما بعد المعالجة.",
  "Salts, Colors & Additives": "أملاح وألوان وإضافات",
  "Industrial salts, colors, brighteners, additives, and supporting materials for plating bath performance and finish control.": "أملاح وألوان ومُلمعات وإضافات ومواد مساعدة صناعية لأداء أحواض الطلاء وضبط التشطيب.",
  "Ask about product availability": "اسأل عن توافر المنتجات",
  "Surface Finishing Support for Industrial Manufacturers": "دعم تشطيب الأسطح للمصنّعين الصناعيين",
  "El Etehadia supports manufacturers that depend on consistent, durable, and high-quality plated finishes.": "تدعم الاتحادية المصنعين الذين يعتمدون على تشطيبات مطلية ثابتة ومتينة وعالية الجودة.",
  "Industry fit": "القطاعات المناسبة",
  "Manufacturing sectors that rely on dependable finishes.": "قطاعات صناعية تعتمد على تشطيبات موثوقة وثابتة.",
  "Aerospace and defense": "الطيران والدفاع",
  "High-reliability finishing, corrosion control, and process support for aerospace, defense, and critical hardware where conformance matters.":
    "تشطيبات عالية الموثوقية، وحماية من التآكل، ودعم فني للعمليات في قطاعات الطيران والدفاع والمكونات الحساسة التي تتطلب التزاماً دقيقاً بالمواصفات.",
  "Appliances": "الأجهزة المنزلية",
  "Decorative and protective plating for visible components, trims, handles, and internal parts in household appliances.":
    "طلاء ديكوري ووقائي للمكونات الظاهرة والحواف والمقابض والأجزاء الداخلية في الأجهزة المنزلية.",
  "Automotive": "السيارات",
  "Decorative and protective finishes for components that require appearance consistency, corrosion resistance, and stable production quality.":
    "تشطيبات ديكورية ووقائية لمكونات تتطلب ثبات المظهر ومقاومة التآكل وجودة إنتاج مستقرة.",
  "Building and machinery": "البناء والمعدات",
  "Functional and protective finishes for structural metalwork, machinery parts, fittings, and equipment exposed to demanding environments.":
    "تشطيبات وظيفية ووقائية للأعمال المعدنية الهيكلية وقطع الآلات والتركيبات والمعدات المعرضة لبيئات صعبة.",
  "Fashion and packaging": "الأزياء والتغليف",
  "Decorative metallization and finishing for trims, closures, hardware accents, and metallic packaging details.":
    "معدنة وتشطيب ديكوري للحليات، والإغلاقات، والإكسسوارات المعدنية، وتفاصيل التغليف ذات المظهر المعدني.",
  "Oil and gas": "النفط والغاز",
  "Corrosion-resistant plating for valves, fasteners, connectors, and hardware used in harsh chemical exposure and demanding field service.":
    "طلاء مقاوم للتآكل للصمامات والمثبتات والوصلات والإكسسوارات المعدنية المستخدمة في التعرّض الكيميائي الشديد وبيئات التشغيل الصعبة.",
  "Plastic recycling": "إعادة تدوير البلاستيك",
  "Metallization and plating support for engineered plastic components, including applications that use recycled or reprocessed molding feedstock.":
    "دعم معدنة وطلاء المكونات البلاستيكية الهندسية، بما في ذلك التطبيقات التي تستخدم خامات معاد تدويرها أو معاد تشغيلها.",
  "Plumbing and sanitary fittings": "الأدوات الصحية وتركيبات السباكة",
  "Nickel, chrome, copper, and protective finishing systems for faucets, mixers, fittings, and sanitary hardware.":
    "أنظمة نيكل وكروم ونحاس وتشطيب واقٍ للحنفيات والخلاطات والتركيبات والعتاد الصحي.",
  "Renewable energy": "الطاقة المتجددة",
  "Protective finishes and corrosion control for fasteners, busbars, enclosures, and hardware used across solar, wind, and broader energy infrastructure.":
    "تشطيبات واقية ومكافحة تآكل للمثبتات والقواطع الكهربائية والمحاويات والإكسسوارات المعدنية المستخدمة في الطاقة الشمسية والرياح وبنية الطاقة بشكل أوسع.",
  "Related products": "منتجات مرتبطة",
  "Commonly requested product families.": "عائلات منتجات مطلوبة بشكل شائع.",
  "Nickel plating": "طلاء النيكل",
  "Chrome plating": "طلاء الكروم",
  "Copper plating": "طلاء النحاس",
  "Zinc plating": "طلاء الزنك",
  "Plating on plastic": "الطلاء على البلاستيك",
  "Surface preparation": "تجهيز الأسطح",
  "Discuss your finishing requirement": "ناقش متطلبات التشطيب الخاصة بك",
  "Practical Surface Finishing Applications": "تطبيقات عملية لمعالجة الأسطح",
  "Explore the types of plating-line challenges, product applications, and technical support areas where El Etehadia helps manufacturers improve performance.": "اطّلع على أنواع تحديات خطوط الطلاء وتطبيقات المنتجات ومجالات الدعم الفني التي تساعد فيها الاتحادية المصنّعين على تحسين الأداء.",
  "Application areas": "مجالات التطبيق",
  "Relevant application support without unsupported case studies.": "دعم تطبيقي واضح دون ادعاءات أو دراسات حالة غير موثقة.",
  "Decorative Nickel-Chrome Finishing": "تشطيب نيكل كروم ديكوري",
  "Support for bright decorative finishes used across fixtures, accessories, appliances, and visible components.": "دعم للتشطيبات الديكورية اللامعة المستخدمة في التركيبات والإكسسوارات والأجهزة والمكونات الظاهرة.",
  "Anti-Corrosion Zinc Systems": "أنظمة زنك مقاومة للتآكل",
  "Zinc and zinc-alloy processes designed to protect industrial parts from corrosion and environmental exposure.": "عمليات زنك وسبائك زنك مصممة لحماية الأجزاء الصناعية من التآكل والتعرض البيئي.",
  "Plastic metallization": "معدنة البلاستيك",
  "Functional coating": "طلاء وظيفي",
  "Laboratory-Controlled Bath Performance": "أداء أحواض مضبوط بالتحليل المعملي",
  "Analysis and support for customers who need stable chemistry, fewer defects, and consistent finishing results.": "تحليل ودعم للعملاء الذين يحتاجون إلى كيمياء مستقرة وعيوب أقل ونتائج تشطيب ثابتة.",
  "Bath control": "ضبط الأحواض",
  "Line Support & Troubleshooting": "دعم خطوط الطلاء وتشخيص المشكلات",
  "Practical support for production issues affecting adhesion, brightness, coverage, color, roughness, or stability.": "دعم عملي لمشكلات الإنتاج التي تؤثر على الالتصاق واللمعان والتغطية واللون والخشونة أو الثبات.",
  "Project evidence": "إثباتات المشاريع",
  "Verified project stories can be added later.": "يمكن إضافة قصص مشاريع موثقة لاحقاً.",
  "This page intentionally avoids customer names, metrics, or project claims that have not been approved. When verified case studies are available, they can be added as named examples.": "تتجنب هذه الصفحة عمداً أسماء العملاء أو الأرقام أو ادعاءات المشاريع غير المعتمدة. عند توفر دراسات حالة موثقة، يمكن إضافتها كأمثلة مسماة.",
  "Send a plating-line issue": "أرسل مشكلة خط الطلاء",
  "Partners & Brands": "الشركاء والعلامات",
  "Trusted Brands for Advanced Surface Finishing": "علامات موثوقة لحلول متقدمة في تشطيب الأسطح",
  "El Etehadia connects manufacturers with high-quality surface-finishing products and technical standards from recognized international brands.": "تربط الاتحادية المصنّعين بمنتجات تشطيب أسطح عالية الجودة ومعايير فنية من علامات عالمية موثوقة.",
  "Recognized brands": "علامات موثوقة",
  "Global standards, local support.": "معايير عالمية بدعم محلي.",
  "MacDermid Enthone is a global surface-finishing chemistry company serving industrial, decorative, anti-corrosion, engineering, aluminum treatment, electroless nickel, hard chrome, trivalent chrome, and water-treatment applications.": "MacDermid Enthone شركة عالمية في كيمياء معالجة الأسطح تخدم تطبيقات صناعية وديكورية ومقاومة للتآكل وهندسية ومعالجة الألومنيوم والنيكل الكيميائي والكروم الصلب والكروم الثلاثي ومعالجة المياه.",
  "HAWKING England": "HAWKING England",
  "HAWKING lacquers support protective and decorative finishing needs, helping manufacturers improve surface appearance and durability.": "يدعم ورنيش كهربي HAWKING احتياجات التشطيب الوقائي والديكوري، ويساعد المصنعين على تحسين مظهر السطح ومتانته.",
  "Şişecam": "Şişecam",
  "Şişecam is a global industrial group supplying glass, chemicals, and advanced materials to manufacturers worldwide. Through El Etehadia, customers gain access to trusted Şişecam products that complement electroplating and industrial surface-finishing supply chains.": "Şişecam مجموعة صناعية عالمية تورّد الزجاج والكيماويات والمواد المتقدمة للمصنعين حول العالم. عبر الاتحادية، يحصل العملاء على منتجات Şişecam الموثوقة التي تكمل سلاسل توريد الطلاء الكهربائي ومعالجة الأسطح الصناعية.",
  "Nickelhütte Aue": "Nickelhütte Aue",
  "Nickelhütte Aue is a leading European recycler and producer of nickel alloys and non-ferrous metals with deep metallurgical expertise. The company supplies high-quality alloys and recycled materials that support electroplating, engineering, and sustainable manufacturing operations.": "Nickelhütte Aue شركة أوروبية رائدة في إعادة تدوير وإنتاج سبائك النيكل والمعادن غير الحديدية بخبرة معدنية عميقة. تورّد الشركة سبائك ومواد معاد تدويرها عالية الجودة تدعم الطلاء الكهربائي والهندسة وعمليات التصنيع المستدامة.",
  "Licensed Production": "إنتاج مرخص",
  "El Etehadia supports local supply of high-quality salts, colors, and related products under trusted technical standards.": "تدعم الاتحادية التوريد المحلي لأملاح وألوان ومنتجات مرتبطة عالية الجودة وفق معايير فنية موثوقة.",
  "Discuss product supply": "ناقش توريد المنتجات",
  "News & Insights": "مقالات ورؤى فنية",
  "Surface Finishing Insights": "رؤى فنية في معالجة وتشطيب الأسطح",
  "Technical notes, product updates, and practical guidance for manufacturers working with electroplating and industrial finishing.": "ملاحظات فنية وتحديثات منتجات وإرشادات عملية للمصنعين العاملين في الطلاء الكهربائي والتشطيب الصناعي.",
  "Evergreen technical guidance": "إرشادات فنية دائمة",
  "Useful reading for plating and production teams.": "محتوى مفيد لفرق الطلاء والإنتاج.",
  "All": "الكل",
  "Technical notes": "ملاحظات فنية",
  "Product guidance": "دليل اختيار المنتجات",
  "Evergreen": "محتوى فني دائم",
  "How Laboratory Analysis Supports Stable Plating Baths": "كيف يدعم التحليل المعملي استقرار أحواض الطلاء",
  "A practical look at why bath testing helps reduce defects and improve line consistency.": "نظرة عملية على أهمية اختبار الأحواض في تقليل العيوب وتحسين ثبات الخط.",
  "Technical note": "ملاحظة فنية",
  "Common Electroplating Defects and What They Indicate": "عيوب الطلاء الكهربائي الشائعة وما تشير إليه",
  "A guide to issues such as poor adhesion, dullness, roughness, burning, and staining.": "دليل لمشكلات مثل ضعف الالتصاق والبهتان والخشونة والحرق والبقع.",
  "Choosing the Right Finish: Nickel, Chrome, Copper, Zinc, or Electroless Nickel": "اختيار التشطيب المناسب: نيكل أو كروم أو نحاس أو زنك أو نيكل كيميائي",
  "A simple overview of common plating systems and where they are used.": "نظرة مبسطة على أنظمة الطلاء الشائعة واستخداماتها.",
  "Why Surface Preparation Matters Before Plating": "لماذا يهم تجهيز السطح قبل الطلاء",
  "How cleaning, activation, and pre-treatment affect adhesion and final finish quality.": "كيف يؤثر التنظيف والتنشيط والمعالجة الأولية على الالتصاق وجودة التشطيب النهائي.",
  "Process control": "ضبط التشغيل",
  "Decorative vs Functional Coatings": "الطلاءات الديكورية مقابل الطلاءات الوظيفية",
  "Understanding when plating is used for appearance, protection, conductivity, hardness, or wear resistance.": "فهم متى يستخدم الطلاء للمظهر أو الحماية أو التوصيل أو الصلادة أو مقاومة التآكل الميكانيكي.",
  "Explore Solutions": "تصفّح الحلول",
  "See featured products": "اطّلع على المنتجات البارزة",
  "All Solutions": "جميع الحلول",
  "Featured product families": "فئات المنتجات البارزة",
  "Browse families by solution": "تصفّح الفئات حسب نوع الحل",
  "Surface finishing portfolio": "مجموعة حلول تشطيب الأسطح",
  "Surface finishing solutions for demanding industries": "حلول تشطيب أسطح للصناعات المتقدمة",
  "Related solutions": "حلول ذات صلة",
  "Product examples": "أمثلة على المنتجات",
  "Portfolio overview.": "نظرة عامة على مجموعة الحلول.",
  "Need help selecting the right surface finishing solution?": "هل تحتاج إلى مساعدة في اختيار حل تشطيب الأسطح المناسب؟",
  "Connect with our team to identify the right chemistry, process, and finish for your application.": "تواصل مع فريقنا لتحديد كيماويات الطلاء والعملية والتشطيب المناسبين لتطبيقك.",
  "Contact Us": "تواصل معنا",
  "Solution not found.": "الحل غير موجود.",
  "Back to Solutions": "العودة إلى الحلول",
  "Delivering innovative solutions designed to meet the evolving demands of the dynamic surface finishing industry and ever-changing customer requirements.": "نقدم حلولاً مبتكرة مصممة لتلبية المتطلبات المتطورة لصناعة تشطيب الأسطح واحتياجات العملاء المتغيرة.",
  "Ask a technical question": "اسأل سؤالاً فنياً",
  "Talk to El Etehadia": "تواصل مع الاتحادية",
  "Contact our team for product inquiries, laboratory analysis, technical support, machines, accessories, or plating-line troubleshooting.": "تواصل مع فريقنا لاستفسارات المنتجات أو التحليل المعملي أو الدعم الفني أو الماكينات والإكسسوارات أو حل مشكلات خطوط الطلاء.",
  "Inquiry routing": "توجيه الاستفسار",
  "Send your requirement or technical issue.": "أرسل متطلباتك أو المشكلة الفنية.",
  "For technical inquiries, please include the process type, substrate, required finish, current issue, and any available bath or sample details.": "للاستفسارات الفنية، يرجى ذكر نوع العملية والخامة والتشطيب المطلوب والمشكلة الحالية وأي تفاصيل متاحة عن الحوض أو العينة.",
  "WhatsApp El Etehadia": "واتساب الاتحادية",
  "Product Information for Electroplating Lines": "معلومات المنتجات لخطوط الطلاء الكهربائي",
  "For current product sheets, availability, and technical documents, contact El Etehadia with your process type, substrate, and required finish.": "للحصول على نشرات المنتجات الحالية والتوافر والوثائق الفنية، تواصل مع الاتحادية مع ذكر نوع العملية والخامة والتشطيب المطلوب.",
  "Surface-finishing product families.": "عائلات منتجات معالجة الأسطح.",
  "Request product documents": "اطلب وثائق المنتجات",
  "Decorative finishing": "تشطيب ديكوري",
  "Corrosion protection": "حماية من التآكل",
  "Technical support": "دعم فني",
  "Electroplating chemicals, machines, accessories, lacquers, laboratory analysis, and technical support.": "كيماويات الطلاء الكهربائي، والماكينات، والإكسسوارات، وورنيش كهربي، وخدمات التحليل المعملي والدعم الفني.",
  "Contact us": "تواصل معنا",
  "MacDermid Enthone": "MacDermid Enthone",
  "Plating Line Troubleshooting": "تشخيص مشكلات خطوط الطلاء",
  "Process Optimization": "تحسين ظروف التشغيل",
  "Surface preparation and metallization support for plastic parts requiring a metallic decorative finish.": "تجهيز الأسطح ودعم المعدنة للمكونات البلاستيكية التي تتطلب تشطيباً ديكورياً معدنياً.",
  "Electroless Nickel Applications": "تطبيقات النيكل الكيميائي",
  "Uniform nickel deposition for parts with complex shapes or surfaces requiring corrosion and wear resistance.": "ترسيب نيكل متجانس للأجزاء ذات الأشكال المعقدة أو الأسطح التي تتطلب مقاومة للتآكل والتآكل الميكانيكي.",
  "Plastic metallization": "معدنة البلاستيك",
  "Precision chemistry for high-performance components requiring extreme durability and corrosion resistance.": "كيماويات متخصصة لمكونات عالية الأداء تتطلب متانة فائقة ومقاومة للتآكل.",
  "Decorative and functional plating for white goods, consumer electronics, and household hardware.": "طلاء ديكوري ووظيفي للأجهزة المنزلية والإلكترونيات الاستهلاكية والإكسسوارات المنزلية.",
  "OEM-grade plating solutions for interior trim, exterior brightwork, and engine components.": "حلول طلاء بمعايير مصنعي المعدات الأصلية للحواف الداخلية والأجزاء الخارجية اللامعة ومكونات المحرك.",
  "Robust protective finishes for architectural hardware, fasteners, and heavy industrial machinery.": "تشطيبات واقية متينة للإكسسوارات المعمارية والمثبتات والمعدات الصناعية الثقيلة.",
  "High-aesthetic plating for accessories, jewelry, cosmetics packaging, and luxury goods.": "طلاء عالي الجمالية للإكسسوارات والمجوهرات وتغليف مستحضرات التجميل والسلع الفاخرة.",
  "Specialized anti-corrosive coatings for equipment operating in harsh subterranean environments.": "طلاءات متخصصة مقاومة للتآكل للمعدات العاملة في البيئات تحت الأرضية القاسية.",
  "Chemical solutions for preparation and plating on recycled substrates and industrial plastics.": "حلول كيميائية لتجهيز الأسطح والطلاء على خامات معاد تدويرها وبلاستيك صناعي.",
  "High-quality nickel and chrome plating for faucets, valves, and bathroom accessories.": "طلاء نيكل وكروم عالي الجودة للحنفيات والصمامات وإكسسوارات الحمام.",
  "Advanced coatings for solar panel frames, wind turbine components, and energy storage systems.": "طلاءات متقدمة لإطارات الألواح الشمسية ومكونات توربينات الرياح وأنظمة تخزين الطاقة.",
  "Surface Conditioning": "تجهيز الأسطح",
  "Anti-Corrosion": "الحماية من التآكل",
  "Light Metal Finishes": "تشطيبات المعادن الخفيفة",
  "Decorative Coatings": "الطلاءات الديكورية",
  "Plating On Plastics": "الطلاء على البلاستيك",
  "Electroless Nickel": "النيكل الكيميائي",
  "Precious Metals": "المعادن النفيسة",
  "Plastic Recycling": "إعادة تدوير البلاستيك",
  "WaterCARE": "WaterCARE",
  "Wear Resistance": "مقاومة التآكل الميكانيكي",
  "To deliver best-in-class adhesion, the surface must be cleaned and free of dirt and oxides. The surface conditioning portfolio delivers a perfectly pure substrate to receive a metallic finish.": "لتحقيق التصاق مثالي، يجب أن يكون السطح نظيفاً وخالياً من الأتربة والأكسيدات. توفر مجموعة تجهيز الأسطح خامة نقية تماماً لاستقبال التشطيب المعدني.",
  "When durability is the highest priority, anti-corrosion finishing solutions deliver best-in-class results, ensuring products perform in the most challenging environments.": "عندما تكون المتانة أولوية قصوى، تقدم حلول التشطيب المقاوم للتآكل نتائج متميزة تضمن أداء المنتجات في أصعب البيئات.",
  "With a comprehensive light metal solution portfolio, MacDermid Enthone provides proven expertise and performance designed to exceed expectations and requirements.": "من خلال مجموعة شاملة لحلول المعادن الخفيفة، توفر MacDermid Enthone خبرة وأداءً مثبتين يلبيان المتطلبات الفنية المتقدمة.",
  "Decorative coating solutions deliver cost-effective and environmentally compliant processes in a range of bright, satin, white, and dark finishes.": "تقدم حلول الطلاءات الديكورية عمليات فعالة ومتوافقة بيئياً في تشطيبات لامعة وساتان وبيضاء وداكنة.",
  "A full range of Plating on Plastic technologies for decorative applications, designed with environmental compliance and sustainability in mind.": "مجموعة كاملة من تقنيات الطلاء على البلاستيك للتطبيقات الديكورية، مع مراعاة الامتثال البيئي والاستدامة.",
  "When wear resistance is the top priority, electroless nickel solutions deliver trusted performance.": "عندما تكون مقاومة التآكل الميكانيكي أولوية قصوى، تقدم حلول النيكل الكيميائي أداءً موثوقاً.",
  "Luxury surface finishing solutions that do not just finish luxury products — they complete them.": "حلول تشطيب أسطح فاخرة لا تكتمل المنتجات الفاخرة إلا بها.",
  "From cleaners and additives to plastic separation enhancing products and defoamers, the plastic recycling portfolio delivers process-enhancing, environmentally friendly solutions.": "من المنظفات والإضافات إلى منتجات تحسين فصل البلاستيك ومزيلات الرغوة، تقدم مجموعة إعادة تدوير البلاستيك حلولاً محسّنة للعملية وصديقة للبيئة.",
  "Effective water resource management is a corporate responsibility. WaterCARE provides wastewater treatment chemistries tailored to solve customers’ unique challenges.": "إدارة الموارد المائية بفعالية مسؤولية مؤسسية. يوفر WaterCARE كيماويات معالجة مياه صرف مصممة لمواجهة تحديات العملاء.",
  "When deposit hardness and wear resistance are paramount, wear resistance solutions ensure products perform in challenging environments.": "عندما تكون صلادة الطبقة ومقاومة التآكل الميكانيكي في مقدمة الأولويات، تضمن حلول مقاومة التآكل أداء المنتجات في البيئات الصعبة.",
  "Prior to the plating process, a surface must be cleaned to offer a perfectly pure substrate to receive a metallic finish with good adhesion. Extensive surface preparation experience enables customers across a range of industries and applications to use a complete line of cleaners.": "قبل عملية الطلاء، يجب تنظيف السطح لتوفير خامة نقية تستقبل تشطيباً معدنياً بالتصاق جيد. تتيح خبرة واسعة في تجهيز الأسطح للعملاء في قطاعات وتطبيقات متعددة استخدام خط كامل من المنظفات.",
  "Durable solutions provide corrosion protection while also supporting functional attributes and decorative properties for ferrous construction elements. These surface finishing solutions help components reach and sustain peak performance even when exposed to challenging environmental conditions.": "توفر الحلول المتينة حماية من التآكل مع دعم الخصائص الوظيفية والديكورية للعناصر الحديدية. تساعد هذه الحلول المكونات على الوصول إلى أداء ذروة والحفاظ عليه حتى في الظروف البيئية الصعبة.",
  "Known for superior wear and corrosion resistance and the ability to uniformly coat intricate shapes, electroless nickel is a go-to coating for engineers tackling demanding applications.": "يُعرف النيكل الكيميائي بمقاومته الفائقة للتآكل والتآكل الميكانيكي وقدرته على طلاء الأشكال المعقدة بشكل متجانس، وهو خيار مفضل للمهندسين في التطبيقات الصعبة.",
  "Distinctive finishes and colors provide dynamic styling to meet demanding production and detailing requirements. These processes support world-class manufacturers and applicators with cost-effective and environmentally compliant solutions.": "توفر التشطيبات والألوان المميزة مرونة في التصميم لتلبية متطلبات الإنتاج والتفاصيل. تدعم هذه العمليات المصنعين والمطبقين بمعايير عالمية بحلول فعالة ومتوافقة بيئياً.",
  "Strippers": "مزيلات الطلاء",
  "Multimetal Cleaners": "منظفات متعددة المعادن",
  "Activators": "منشطات",
  "Buffing Compound Removers": "مزيلات مركبات التلميع",
  "Cleaning Systems": "أنظمة التنظيف",
  "High Alkaline Cleaners": "منظفات قلوية عالية",
  "Descalers": "مزيلات الترسبات",
  "Zinc": "الزنك",
  "Zinc Alloys": "سبائك الزنك",
  "Passivates": "المعالجات السلبية",
  "Sealers": "المواد الختامية",
  "Phosphating": "الفوسفاتة",
  "Anodizing Systems": "أنظمة الأنودة",
  "Anodizing Additives": "إضافات الأنودة",
  "Conversion Coatings": "طلاءات التحويل",
  "Chrome": "الكروم",
  "Nickel": "النيكل",
  "Copper": "النحاس",
  "Post-Treatment": "المعالجة اللاحقة",
  "Conventional Cycle": "الدورة التقليدية",
  "Chrome-Free Etch": "حفر بدون كروم",
  "Direct Metallization": "المعدنة المباشرة",
  "Reduced Ion Electroless Nickel": "نيكل كيميائي منخفض الأيونات",
  "High Phosphorus Electroless Nickel": "نيكل كيميائي عالي الفوسفور",
  "Medium Phosphorus Electroless Nickel": "نيكل كيميائي متوسط الفوسفور",
  "Low/Medium Phosphorus Electroless Nickel": "نيكل كيميائي منخفض/متوسط الفوسفور",
  "Low Phosphorus Electroless Nickel": "نيكل كيميائي منخفض الفوسفور",
  "Specialty Electroless Nickel": "نيكل كيميائي متخصص",
  "Composite EN": "نيكل كيميائي مركب",
  "Adhesion Layer": "طبقة الالتصاق",
  "Bronze": "البرونز",
  "Silver": "الفضة",
  "Gold": "الذهب",
  "Palladium": "البلاديوم",
  "Platinum": "البلاتين",
  "Rhodium": "الروديوم",
  "Passivation": "التمرير",
  "Antifoams": "مضادات الرغوة",
  "Detergents": "منظفات",
  "Separation Additives": "إضافات الفصل",
  "Antifoaming Agents": "مضادات الرغوة",
  "Metal Precipitants": "مواد ترسيب المعادن",
  "Flocculants": "مواد التلبيد",
  "Coagulants": "مواد التخثير",
  "Hard Chrome": "الكروم الصلب",
  "Industrial scale plating bath from above": "حوض طلاء صناعي من الأعلى",
  "Close-up of threaded fasteners": "لقطة مقربة لمثبتات ملولبة",
  "Stacked aluminum profiles": "مقاطع ألومنيوم مكدسة",
  "Close-up of a part treated with decorative nickel coating": "لقطة مقربة لجزء معالج بطلاء نيكل ديكوري",
  "Plastic parts on rack in a plating facility": "مكونات بلاستيكية على حامل في منشأة طلاء",
  "Parts treated with wear-resistance-enhancing electroless nickel": "أجزاء معالجة بنيكل كيميائي لتحسين مقاومة التآكل الميكانيكي",
  "Black necklace": "عقد أسود",
  "Recyclable plastic bottles with white caps arranged in rows": "زجاجات بلاستيكية قابلة لإعادة التدوير بأغطية بيضاء مرتبة في صفوف",
  "Industrial scale aluminum treatment plant": "منشأة صناعية لمعالجة الألومنيوم",
  "Hard chrome part": "جزء مطلي بالكروم الصلب",
  "Empty plating rack": "حامل طلاء فارغ",
  "Surface finishing": "تشطيب الأسطح",
  "Surface finishing solutions": "حلول تشطيب الأسطح",
  "Breadcrumb": "مسار التنقل",
  "Related solutions carousel": "عرض الحلول ذات الصلة",
  "Request technical support": "اطلب الدعم الفني",
  "Strippers remove coatings from components and plating racks to ensure application quality. The portfolio can remove coatings such as copper, zinc, and high-phosphorous electroless nickel from many substrate types.": "تزيل مزيلات الطلاء الطبقات من المكونات وحوامل الطلاء لضمان جودة التطبيق. يمكن للمجموعة إزالة طلاءات مثل النحاس والزنك والنيكل الكيميائي عالي الفوسفور من أنواع خامات متعددة.",
  "Zinc-based surface finishing offers a cost-efficient combination of corrosion protection, attractive decorative finishes, and flexible functional properties. OEM-approved finishing solutions use acidic or alkaline zinc plating with trivalent chromium passivate and sealer systems.": "يوفر تشطيب الزنك مزيجاً فعالاً من حيث التكلفة بين الحماية من التآكل والتشطيبات الديكورية الجذابة والخصائص الوظيفية المرنة. تستخدم حلول التشطيب المعتمدة من مصنعي المعدات الأصلية طلاء زنك حمضياً أو قلوياً مع أنظمة تمرير وختم كروم ثلاثي.",
  "Decorative chrome plating technology delivers corrosion protection with a strong aesthetic finish. It is used in automotive, building and hardware, plumbing, and sanitary applications, providing a durable, easy-to-clean surface in a wide range of colors and finishes.": "تقدم تقنية طلاء الكروم الديكوري حماية من التآكل مع تشطيب جمالي قوي. تُستخدم في السيارات والبناء والإكسسوارات المعدنية والأدوات الصحية، مع سطح متين سهل التنظيف بألوان وتشطيبات متنوعة.",
  "Reduced Ion electroless nickel systems operate at lower metal concentrations, resulting in more dilute EN chemistry. This improves operational efficiency, solution stability, and reduces staining of deposits.": "تعمل أنظمة النيكل الكيميائي منخفض الأيونات بتركيزات معدنية أقل، ما يؤدي إلى كيمياء EN أكثر تخفيفاً. يحسّن ذلك كفاءة التشغيل واستقرار المحلول ويقلل تلطيخ الترسيبات.",
  "Chrome stripper": "مزيل كروم",
  "Immersion stripper for electroless nickel": "مزيل غمر للنيكل الكيميائي",
  "Immersion copper stripper for steel": "مزيل غمر نحاس للفولاذ",
  "Immersion stripper": "مزيل غمر",
  "Chemical stripper for removing nickel from steel and copper": "مزيل كيميائي لإزالة النيكل من الفولاذ والنحاس",
  "Non-cyanide immersion stripper for high phosphorous electroless nickel": "مزيل غمر خالٍ من السيانيد للنيكل الكيميائي عالي الفوسفور",
  "Non-cyanide immersion stripper for medium to high phosphorous electroless nickel": "مزيل غمر خالٍ من السيانيد للنيكل الكيميائي متوسط إلى عالي الفوسفور",
  "Electrolytic rack stripper": "مزيل حوامل بالتحليل الكهربائي",
  "High alkaline stripper removing sealant residues": "مزيل قلوي عالي لإزالة بقايا المواد الختامية",
  "High temperature acid chloride zinc plating process": "عملية طلاء زنك كلوريد حمضي عالي الحرارة",
  "Environmentally friendly acid zinc plating process for brake finishing": "عملية طلاء زنك حمضي صديقة للبيئة لتشطيب المكابح",
  "Acid zinc plating process for rack and barrel applications": "عملية طلاء زنك حمضي للحوامل والبراميل",
  "Boric acid-free zinc plating process": "عملية طلاء زنك خالية من حمض البوريك",
  "Ammonia and OCB-free acid zinc plating process": "عملية طلاء زنك حمضي خالية من الأمونيا وOCB",
  "Boric acid- and ammonia-free acid zinc plating process": "عملية طلاء زنك حمضي خالية من حمض البوريك والأمونيا",
  "Alkaline non-cyanide zinc plating process": "عملية طلاء زنك قلوي خالية من السيانيد",
  "Bright, lead- and cadmium-free medium phosphorous electroless nickel": "نيكل كيميائي متوسط الفوسفور لامع خالٍ من الرصاص والكادميوم",
  "Very bright, lead and cadmium free low metal medium phosphorous electroless nickel process": "عملية نيكل كيميائي متوسط الفوسفور لامع جداً منخفض المعادن خالٍ من الرصاص والكادميوم",
  "Semi-bright, lead-free low metal high phosphorous electroless nickel process": "عملية نيكل كيميائي عالي الفوسفور شبه لامع منخفض المعادن خالٍ من الرصاص",
  "Semi-bright, low metal high phosphorus electroless nickel process": "عملية نيكل كيميائي عالي الفوسفور شبه لامع منخفض المعادن",
  "PFAS-free wetting agent for decorative hexavalent chromium": "عامل ترطيب خالٍ من PFAS للكروم سداسي التكافؤ الديكوري",
  "Decorative chromium process": "عملية كروم ديكورية",
  "Sulfate-based, mid-dark trivalent decorative chromium process": "عملية كروم ثلاثي ديكوري متوسط إلى داكن قائم على الكبريتات",
  "Chloride-based, white trivalent chromium plating process": "عملية طلاء كروم ثلاثي أبيض قائمة على الكلوريد",
  "Sulfate-based, white trivalent chromium process": "عملية كروم ثلاثي أبيض قائمة على الكبريتات",
  "Sulphate-based, dark trivalent decorative chromium process": "عملية كروم ثلاثي ديكوري داكن قائمة على الكبريتات",
});

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
  "Industrial electroplating tank in a production facility": "حوض طلاء كهربائي صناعي داخل منشأة إنتاج",
  "El Etehadia industrial surface finishing facility visual": "صورة منشأة الاتحادية لمعالجة الأسطح الصناعية",
  "El Etehadia branded logistics and electroplating supply across Egypt": "خدمات الاتحادية في توريد حلول الطلاء الكهربائي داخل مصر",
  "Industrial metal finishing production area": "منطقة إنتاج صناعية لتشطيب المعادن",
  "Engineer inspecting finished industrial components": "مهندس يفحص مكونات صناعية مكتملة التشطيب",
  "Copper busbars and decorative plated metal finishing": "قضبان نحاسية وتشطيب معدني ديكوري مطلي",
  "Silver-plated electrical contacts and functional electroless nickel finishes": "جهات اتصال كهربائية مطلية بالفضة وتشطيبات نيكل كيميائي وظيفية",
  "MacDermid Enthone Industrial Solutions — plating chemistry and surface finishing brand": "MacDermid Enthone — علامة كيمياء الطلاء وتشطيب الأسطح",
  "HAWKING England — lacquers and protective finishing brand": "ورنيش كهربي وتشطيبات واقية من HAWKING England",
  "Şişecam — glass and chemicals partner brand": "Şişecam — علامة شريك في الزجاج والكيماويات",
  "Nickelhütte Aue — nickel alloys and recycling partner brand": "Nickelhütte Aue — علامة شريك في سبائك النيكل وإعادة التدوير",
  "Pyramids of Giza — El Etehadia licensed production and supply in Egypt": "أهرامات الجيزة — إنتاج مرخّص وتوريد من الاتحادية في مصر",
  "Electrical metal components prepared for finishing": "مكونات معدنية جاهزة للتشطيب",
  "Industrial components and production equipment": "مكونات ومعدات إنتاج صناعية",
  "Polished manufactured components in an industrial environment": "مكونات مصنعة مصقولة داخل بيئة صناعية",
  "Industrial plated fasteners for corrosion protection": "مثبتات صناعية مطلية للحماية من التآكل",
  "Surface finishing samples and industrial supply visual": "عينات تشطيب أسطح وصورة توريد صناعي",
  "Industrial components and metal surface finishing visual": "مكونات صناعية وصورة لتشطيب أسطح معدنية",
  "Barrel plating equipment for small metal parts": "معدات طلاء بالبرميل للأجزاء المعدنية الصغيرة",
  "Hard chrome plated surface finish": "تشطيب سطح مطلي بالكروم الصلب",
  "Metal plated electrical connectors": "موصلات كهربائية مطلية بالمعدن",
  "Bright zinc plated metal bolts": "مسامير معدنية مطلية بالزنك اللامع",
  "Chrome plating coating on a plastic base": "طبقة طلاء كروم على قاعدة بلاستيكية",
  "Plating on plastic and decorative plastic metallization": "الطلاء على البلاستيك والمعدنة البلاستيكية الديكورية",
  "Metal parts prepared for surface finishing": "أجزاء معدنية مجهزة لمعالجة الأسطح",
  "Protective finishing and laboratory support visual": "صورة تشطيب وقائي ودعم معملي",
};

Object.assign(arText, productDocumentArabicText);
Object.assign(arAttributes, productDocumentArabicAttributes);

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
  const documentSlug = document.body.dataset.slug || "";
  const productDocument = pageKey === "product-document" ? getProductDocumentBySlug(documentSlug) : null;
  const arProductDocument = productDocument ? getArabicProductDocumentMeta(documentSlug) : null;
  const rendererMeta = document.body.dataset.metaTitle
    ? [document.body.dataset.metaTitle, document.body.dataset.metaDescription || SEO_DESCRIPTION]
    : null;
  const pageSpecificMeta = (pageKey && pageMeta[safeLang].pages?.[pageKey]) || rendererMeta;

  root.lang = safeLang;
  root.dir = safeLang === "ar" ? "rtl" : "ltr";
  document.body.dataset.lang = safeLang;
  if (productDocument) {
    document.title =
      safeLang === "ar"
        ? `${arProductDocument?.title || productDocument.title} | وثائق المنتجات | الاتحادية`
        : `${productDocument.title} | El Etehadia`;
  } else {
    document.title = pageSpecificMeta ? pageSpecificMeta[0] : pageMeta[safeLang].title;
  }

  if (metaDescription) {
    if (productDocument) {
      metaDescription.setAttribute(
        "content",
        safeLang === "ar" ? arProductDocument?.description || productDocument.description : productDocument.description,
      );
    } else {
      metaDescription.setAttribute("content", pageSpecificMeta ? pageSpecificMeta[1] : pageMeta[safeLang].description);
    }
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

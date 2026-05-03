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

Object.assign(arText, {
  "About El Etehadia": "عن الاتحادية",
  "Electroplating Supply and Technical Support Since 1997": "توريد الطلاء الكهربائي والدعم الفني منذ عام 1997",
  "El Etehadia Company for Import, Export & Agencies has supported manufacturers from Cairo since 1997. The company supplies electroplating chemicals, machines, accessories, lacquers, and technical services for industrial surface-finishing operations across Egypt and the Middle East.":
    "تدعم شركة الاتحادية للاستيراد والتصدير والتوكيلات المصنعين من القاهرة منذ عام 1997. توفر الشركة كيماويات وماكينات وإكسسوارات ولاكيهات الطلاء الكهربائي وخدمات فنية لعمليات معالجة الأسطح الصناعية في مصر والشرق الأوسط.",
  "Founded in Cairo": "تأسست في القاهرة",
  "Local technical support": "دعم فني محلي",
  "Supply across Egypt and the Middle East": "توريد في مصر والشرق الأوسط",
  "Mission": "المهمة",
  "Helping Manufacturers Achieve Consistent Finishes": "مساعدة المصنعين على تحقيق تشطيبات ثابتة",
  "Our mission is to provide reliable electroplating products and practical technical support that help manufacturers improve finish quality, stabilize production, reduce downtime, and maintain efficient plating lines.":
    "مهمتنا هي توفير منتجات طلاء كهربائي موثوقة ودعم فني عملي يساعد المصنعين على تحسين جودة التشطيب، وتثبيت الإنتاج، وتقليل التوقف، والحفاظ على كفاءة خطوط الطلاء.",
  "What we do": "ما نقدمه",
  "From Chemistry to Process Control": "من الكيمياء إلى التحكم في العملية",
  "We support manufacturers across the full plating workflow: surface preparation, bath chemistry, plating systems, finishing products, equipment, accessories, analysis, and troubleshooting.":
    "ندعم المصنعين عبر دورة الطلاء الكاملة: تجهيز الأسطح، كيمياء الأحواض، أنظمة الطلاء، منتجات التشطيب، المعدات، الإكسسوارات، التحليل، وحل المشكلات.",
  "Electroplating chemicals and additives": "كيماويات وإضافات الطلاء الكهربائي",
  "Chemistry supply for daily bath control, replenishment, and finish performance.": "توريد كيمياء لضبط الأحواض يومياً، والتعويض، وأداء التشطيب.",
  "Nickel, chrome, copper, zinc, and plating-on-plastic systems": "أنظمة النيكل والكروم والنحاس والزنك والطلاء على البلاستيك",
  "Core plating systems for decorative, protective, and functional applications.": "أنظمة طلاء أساسية للتطبيقات الديكورية والوقائية والوظيفية.",
  "Surface preparation and treatment products": "منتجات تجهيز ومعالجة الأسطح",
  "Cleaners, activation, etching, and pre-treatment products for adhesion and consistent finish quality.": "منظفات ومنتجات تنشيط وحفر ومعالجة أولية لتحسين الالتصاق وثبات جودة التشطيب.",
  "Lacquers and protective finishing materials": "لاكيهات ومواد تشطيب واقية",
  "HAWKING lacquers and related protective finishes for surface appearance and durability.": "لاكيهات HAWKING وتشطيبات واقية مرتبطة لتحسين مظهر السطح ومتانته.",
  "Machines, accessories, and production support": "ماكينات وإكسسوارات ودعم إنتاج",
  "Equipment and supporting parts for new lines, upgrades, and ongoing production needs.": "معدات وقطع مساعدة للخطوط الجديدة والتحديثات واحتياجات الإنتاج المستمرة.",
  "Laboratory analysis and technical guidance": "تحليل معملي وإرشاد فني",
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
  "Beyond Supply: Technical Support That Keeps Lines Running": "ما بعد التوريد: دعم فني يحافظ على تشغيل الخطوط",
  "Laboratory Analysis": "التحليل المعملي",
  "We analyze plating baths, samples, and process conditions to help customers evaluate performance, identify imbalances, and take corrective action.":
    "نحلل أحواض الطلاء والعينات وظروف العملية لمساعدة العملاء على تقييم الأداء، وتحديد الاختلالات، واتخاذ إجراءات تصحيحية.",
  "Use for: Bath control, sample analysis, quality validation, defect investigation, process correction.": "يستخدم في: ضبط الأحواض، تحليل العينات، التحقق من الجودة، فحص العيوب، وتصحيح العملية.",
  "Technical Support": "الدعم الفني",
  "Our team supports manufacturers with practical process guidance across electroplating lines, from preparation to final finish.": "يدعم فريقنا المصنعين بإرشاد عملي عبر خطوط الطلاء الكهربائي، من التجهيز حتى التشطيب النهائي.",
  "Use for: Additive dosing, bath maintenance, defect troubleshooting, operating condition review, production stability.": "يستخدم في: جرعات الإضافات، صيانة الأحواض، حل العيوب، مراجعة ظروف التشغيل، وثبات الإنتاج.",
  "Product Selection": "اختيار المنتجات",
  "We help customers choose the right chemistry, additives, lacquers, machines, and accessories based on their application, substrate, finish requirements, and production conditions.":
    "نساعد العملاء على اختيار الكيمياء والإضافات واللاكيهات والماكينات والإكسسوارات المناسبة حسب التطبيق والخامة ومتطلبات التشطيب وظروف الإنتاج.",
  "Use for: Nickel, chrome, copper, and zinc processes; plating on plastic; surface preparation; protective finishing; decorative finishing.": "يستخدم في: عمليات النيكل والكروم والنحاس والزنك؛ الطلاء على البلاستيك؛ تجهيز الأسطح؛ التشطيبات الواقية؛ التشطيبات الديكورية.",
  "Process Optimization": "تحسين العملية",
  "We help customers improve plating-line performance by reviewing chemical balance, workflow, operating windows, and recurring production issues.":
    "نساعد العملاء على تحسين أداء خطوط الطلاء من خلال مراجعة توازن الكيمياء وسير العمل ونوافذ التشغيل ومشكلات الإنتاج المتكررة.",
  "Use for: Reducing rejection rates, improving finish consistency, stabilizing bath performance, supporting line upgrades, increasing production reliability.": "يستخدم في: تقليل الرفض، تحسين ثبات التشطيب، تثبيت أداء الأحواض، دعم تحديث الخطوط، وزيادة موثوقية الإنتاج.",
  "Machines & Accessories": "ماكينات وإكسسوارات",
  "El Etehadia supplies electroplating machines, accessories, and related equipment needed for industrial plating operations.": "توفر الاتحادية ماكينات وإكسسوارات ومعدات مرتبطة بالطلاء الكهربائي لعمليات الطلاء الصناعية.",
  "Use for: New line setup, replacement parts, production accessories, equipment upgrades, ongoing operational needs.": "يستخدم في: إنشاء خطوط جديدة، قطع غيار، إكسسوارات الإنتاج، تحديث المعدات، واحتياجات التشغيل المستمرة.",
  "How we work": "كيف نعمل",
  "A practical technical support sequence.": "تسلسل عملي للدعم الفني.",
  "Understand the process": "فهم العملية",
  "Review the substrate, finish requirement, bath condition, production issue, and available sample or analysis details.": "مراجعة الخامة ومتطلبات التشطيب وحالة الحوض ومشكلة الإنتاج وتفاصيل العينة أو التحليل المتاحة.",
  "Match chemistry and action": "مطابقة الكيمياء والإجراء",
  "Recommend product options, operating-window checks, additive dosing, or corrective steps according to the customer’s line conditions.": "اقتراح خيارات المنتجات وفحوصات نافذة التشغيل وجرعات الإضافات أو خطوات التصحيح وفق ظروف خط العميل.",
  "Support production follow-up": "دعم متابعة الإنتاج",
  "Help the production team monitor bath stability, finish quality, and recurring defects after corrective action.": "مساعدة فريق الإنتاج على متابعة ثبات الحوض وجودة التشطيب والعيوب المتكررة بعد الإجراء التصحيحي.",
  "Capability matrix": "مصفوفة القدرات",
  "Service fit by plating need.": "ملاءمة الخدمة حسب احتياج الطلاء.",
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
  "El Etehadia supplies a wide range of products for industrial surface finishing, including chemistry, additives, lacquers, machines, accessories, and supporting materials.": "توفر الاتحادية مجموعة واسعة من منتجات معالجة الأسطح الصناعية، تشمل الكيمياء والإضافات واللاكيهات والماكينات والإكسسوارات والمواد المساعدة.",
  "Product categories": "فئات المنتجات",
  "Products for Every Stage of the Plating Process": "منتجات لكل مرحلة من مراحل عملية الطلاء",
  "From surface preparation to final finish, El Etehadia provides the products and support needed to run stable electroplating operations.": "من تجهيز السطح حتى التشطيب النهائي، توفر الاتحادية المنتجات والدعم اللازم لتشغيل عمليات طلاء كهربائي مستقرة.",
  "Nickel Plating": "طلاء النيكل",
  "Nickel systems for decorative and functional applications, supporting brightness, leveling, corrosion resistance, and surface performance.": "أنظمة نيكل للتطبيقات الديكورية والوظيفية، تدعم اللمعان والتسوية ومقاومة التآكل وأداء السطح.",
  "Chrome Plating": "طلاء الكروم",
  "Chrome systems for durable decorative finishes, corrosion resistance, cleanability, hardness, and reflective appearance.": "أنظمة كروم لتشطيبات ديكورية متينة، ومقاومة تآكل، وسهولة تنظيف، وصلادة، ومظهر عاكس.",
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
  "Electroless nickel systems for uniform deposition, complex geometries, corrosion protection, and wear resistance.": "أنظمة نيكل كيميائي للترسيب المتجانس والأشكال المعقدة والحماية من التآكل ومقاومة التآكل الميكانيكي.",
  "Hard Chrome": "الكروم الصلب",
  "Functional chrome systems for wear resistance, hardness, and industrial surface performance.": "أنظمة كروم وظيفية لمقاومة التآكل الميكانيكي والصلادة وأداء الأسطح الصناعية.",
  "Trivalent Chrome": "الكروم الثلاثي",
  "Modern chrome finishing systems for decorative applications and evolving compliance requirements.": "أنظمة تشطيب كروم حديثة للتطبيقات الديكورية ومتطلبات الامتثال المتطورة.",
  "Lacquers": "اللاكيهات",
  "HAWKING lacquers and protective finishing products for enhanced durability, appearance, and post-treatment performance.": "لاكيهات HAWKING ومنتجات تشطيب واقية لتحسين المتانة والمظهر وأداء ما بعد المعالجة.",
  "Salts, Colors & Additives": "أملاح وألوان وإضافات",
  "Industrial salts, colors, brighteners, additives, and supporting materials for plating bath performance and finish control.": "أملاح وألوان ومُلمعات وإضافات ومواد مساعدة صناعية لأداء أحواض الطلاء وضبط التشطيب.",
  "Ask about product availability": "اسأل عن توافر المنتجات",
  "Surface Finishing Support for Industrial Manufacturers": "دعم معالجة الأسطح للمصنعين الصناعيين",
  "El Etehadia supports manufacturers that depend on consistent, durable, and high-quality plated finishes.": "تدعم الاتحادية المصنعين الذين يعتمدون على تشطيبات مطلية ثابتة ومتينة وعالية الجودة.",
  "Industry fit": "ملاءمة القطاعات",
  "Manufacturing sectors that rely on dependable finishes.": "قطاعات تصنيع تعتمد على تشطيبات موثوقة.",
  "Automotive & Components": "السيارات والمكونات",
  "Decorative and protective finishes for components requiring appearance, corrosion resistance, and production consistency.": "تشطيبات ديكورية ووقائية لمكونات تتطلب المظهر ومقاومة التآكل وثبات الإنتاج.",
  "Sanitary Fittings & Fixtures": "الأدوات الصحية والتركيبات",
  "Nickel, chrome, copper, and protective finishing systems for faucets, bathroom fittings, and related products.": "أنظمة نيكل وكروم ونحاس وتشطيبات واقية للحنفيات وتركيبات الحمامات والمنتجات المرتبطة.",
  "Home Appliances & Hardware": "الأجهزة المنزلية والهاردوير",
  "Surface finishing for handles, fittings, fasteners, accessories, and visible metal or plastic components.": "معالجة أسطح للمقابض والتركيبات والمثبتات والإكسسوارات والمكونات المعدنية أو البلاستيكية الظاهرة.",
  "Industrial Manufacturing": "التصنيع الصناعي",
  "Functional coatings and process support for parts requiring durability, corrosion resistance, or improved surface properties.": "طلاءات وظيفية ودعم عملية للأجزاء التي تتطلب المتانة أو مقاومة التآكل أو تحسين خصائص السطح.",
  "Plastics & Decorative Components": "البلاستيك والمكونات الديكورية",
  "Plating-on-plastic support for decorative parts that require a metallic appearance with lightweight construction.": "دعم الطلاء على البلاستيك للأجزاء الديكورية التي تتطلب مظهراً معدنياً مع وزن خفيف.",
  "Metal Fabrication": "تشكيل المعادن",
  "Preparation, plating, and finishing support for metal parts across industrial and commercial applications.": "دعم التجهيز والطلاء والتشطيب للأجزاء المعدنية عبر تطبيقات صناعية وتجارية.",
  "Furniture & Decorative Hardware": "الأثاث والهاردوير الديكوري",
  "Finishing systems for decorative hardware, accessories, and metal components where appearance and durability matter.": "أنظمة تشطيب للهاردوير الديكوري والإكسسوارات والمكونات المعدنية التي يهم فيها المظهر والمتانة.",
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
  "Explore the types of plating-line challenges, product applications, and technical support areas where El Etehadia helps manufacturers improve performance.": "استكشف أنواع تحديات خطوط الطلاء وتطبيقات المنتجات ومجالات الدعم الفني التي تساعد فيها الاتحادية المصنعين على تحسين الأداء.",
  "Application areas": "مجالات التطبيق",
  "Relevant application support without unsupported case studies.": "دعم تطبيقات مناسب دون دراسات حالة غير موثقة.",
  "Decorative Nickel-Chrome Finishing": "تشطيب نيكل كروم ديكوري",
  "Support for bright decorative finishes used across fixtures, accessories, appliances, and visible components.": "دعم للتشطيبات الديكورية اللامعة المستخدمة في التركيبات والإكسسوارات والأجهزة والمكونات الظاهرة.",
  "Anti-Corrosion Zinc Systems": "أنظمة زنك مقاومة للتآكل",
  "Zinc and zinc-alloy processes designed to protect industrial parts from corrosion and environmental exposure.": "عمليات زنك وسبائك زنك مصممة لحماية الأجزاء الصناعية من التآكل والتعرض البيئي.",
  "Plastic metallization": "معدنة البلاستيك",
  "Functional coating": "طلاء وظيفي",
  "Laboratory-Controlled Bath Performance": "أداء أحواض مضبوط بالتحليل المعملي",
  "Analysis and support for customers who need stable chemistry, fewer defects, and consistent finishing results.": "تحليل ودعم للعملاء الذين يحتاجون إلى كيمياء مستقرة وعيوب أقل ونتائج تشطيب ثابتة.",
  "Bath control": "ضبط الأحواض",
  "Line Support & Troubleshooting": "دعم الخطوط وحل المشكلات",
  "Practical support for production issues affecting adhesion, brightness, coverage, color, roughness, or stability.": "دعم عملي لمشكلات الإنتاج التي تؤثر على الالتصاق واللمعان والتغطية واللون والخشونة أو الثبات.",
  "Project evidence": "إثباتات المشاريع",
  "Verified project stories can be added later.": "يمكن إضافة قصص مشاريع موثقة لاحقاً.",
  "This page intentionally avoids customer names, metrics, or project claims that have not been approved. When verified case studies are available, they can be added as named examples.": "تتجنب هذه الصفحة عمداً أسماء العملاء أو الأرقام أو ادعاءات المشاريع غير المعتمدة. عند توفر دراسات حالة موثقة، يمكن إضافتها كأمثلة مسماة.",
  "Send a plating-line issue": "أرسل مشكلة خط الطلاء",
  "Partners & Brands": "الشركاء والعلامات",
  "Trusted Brands for Advanced Surface Finishing": "علامات موثوقة لمعالجة أسطح متقدمة",
  "El Etehadia connects manufacturers with high-quality surface-finishing products and technical standards from recognized international brands.": "تربط الاتحادية المصنعين بمنتجات معالجة أسطح عالية الجودة ومعايير فنية من علامات دولية معروفة.",
  "Recognized brands": "علامات معروفة",
  "Global standards, local support.": "معايير عالمية، دعم محلي.",
  "MacDermid Enthone is a global surface-finishing chemistry company serving industrial, decorative, anti-corrosion, engineering, aluminum treatment, electroless nickel, hard chrome, trivalent chrome, and water-treatment applications.": "MacDermid Enthone شركة عالمية في كيمياء معالجة الأسطح تخدم تطبيقات صناعية وديكورية ومقاومة للتآكل وهندسية ومعالجة الألومنيوم والنيكل الكيميائي والكروم الصلب والكروم الثلاثي ومعالجة المياه.",
  "HAWKING England": "HAWKING England",
  "HAWKING lacquers support protective and decorative finishing needs, helping manufacturers improve surface appearance and durability.": "تدعم لاكيهات HAWKING احتياجات التشطيب الوقائي والديكوري، وتساعد المصنعين على تحسين مظهر السطح ومتانته.",
  "Licensed Production": "إنتاج مرخص",
  "El Etehadia supports local supply of high-quality salts, colors, and related products under trusted technical standards.": "تدعم الاتحادية التوريد المحلي لأملاح وألوان ومنتجات مرتبطة عالية الجودة وفق معايير فنية موثوقة.",
  "Discuss product supply": "ناقش توريد المنتجات",
  "News & Insights": "الأخبار والرؤى",
  "Surface Finishing Insights": "رؤى معالجة الأسطح",
  "Technical notes, product updates, and practical guidance for manufacturers working with electroplating and industrial finishing.": "ملاحظات فنية وتحديثات منتجات وإرشادات عملية للمصنعين العاملين في الطلاء الكهربائي والتشطيب الصناعي.",
  "Evergreen technical guidance": "إرشادات فنية دائمة",
  "Useful reading for plating and production teams.": "قراءات مفيدة لفرق الطلاء والإنتاج.",
  "All": "الكل",
  "Technical notes": "ملاحظات فنية",
  "Product guidance": "إرشاد منتجات",
  "How Laboratory Analysis Supports Stable Plating Baths": "كيف يدعم التحليل المعملي استقرار أحواض الطلاء",
  "A practical look at why bath testing helps reduce defects and improve line consistency.": "نظرة عملية على أهمية اختبار الأحواض في تقليل العيوب وتحسين ثبات الخط.",
  "Technical note": "ملاحظة فنية",
  "Common Electroplating Defects and What They Indicate": "عيوب الطلاء الكهربائي الشائعة وما تشير إليه",
  "A guide to issues such as poor adhesion, dullness, roughness, burning, and staining.": "دليل لمشكلات مثل ضعف الالتصاق والبهتان والخشونة والحرق والبقع.",
  "Choosing the Right Finish: Nickel, Chrome, Copper, Zinc, or Electroless Nickel": "اختيار التشطيب المناسب: نيكل أو كروم أو نحاس أو زنك أو نيكل كيميائي",
  "A simple overview of common plating systems and where they are used.": "نظرة مبسطة على أنظمة الطلاء الشائعة واستخداماتها.",
  "Why Surface Preparation Matters Before Plating": "لماذا يهم تجهيز السطح قبل الطلاء",
  "How cleaning, activation, and pre-treatment affect adhesion and final finish quality.": "كيف يؤثر التنظيف والتنشيط والمعالجة الأولية على الالتصاق وجودة التشطيب النهائي.",
  "Process control": "التحكم في العملية",
  "Decorative vs Functional Coatings": "الطلاءات الديكورية مقابل الطلاءات الوظيفية",
  "Understanding when plating is used for appearance, protection, conductivity, hardness, or wear resistance.": "فهم متى يستخدم الطلاء للمظهر أو الحماية أو التوصيل أو الصلادة أو مقاومة التآكل الميكانيكي.",
  "Ask a technical question": "اسأل سؤالاً فنياً",
  "Talk to El Etehadia": "تحدث إلى الاتحادية",
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
  "Applications": "التطبيقات",
  "Technical support": "دعم فني",
  "MacDermid Enthone": "MacDermid Enthone",
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
  "Industrial metal finishing production area": "منطقة إنتاج صناعية لتشطيب المعادن",
  "Engineer inspecting finished industrial components": "مهندس يفحص مكونات صناعية مكتملة التشطيب",
  "Electrical metal components prepared for finishing": "مكونات معدنية كهربائية جاهزة للتشطيب",
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
  "Metal parts prepared for surface finishing": "أجزاء معدنية مجهزة لمعالجة الأسطح",
  "Protective finishing and laboratory support visual": "صورة تشطيب وقائي ودعم معملي",
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

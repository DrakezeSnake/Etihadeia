const STORAGE_KEY = "etihadeia-language";

const pageMeta = {
  en: {
    title: "Etihadeia | Industrial Technology & Infrastructure Solutions",
    description:
      "Etihadeia delivers industrial technology, electroplating, automation, aviation, and infrastructure solutions through a cinematic liquid-metal experience.",
    pages: {
      about: ["Etihadeia | About", "Learn how Etihadeia supports industrial technology, infrastructure, aviation, and electrical service projects."],
      services: ["Etihadeia | Services", "Explore Etihadeia services across electrical supplies, automation, HVAC, aviation lighting, electrical services, and digital IoT supply."],
      industries: ["Etihadeia | Industries", "See the sectors Etihadeia serves, including oil and gas, infrastructure, aviation, power and water, commercial, smart cities, and electrical services."],
      projects: ["Etihadeia | Projects", "Review Etihadeia project Drafts for industrial supply, infrastructure, aviation, automation, and electrical service scopes."],
      partners: ["Etihadeia | Partners", "Explore Etihadeia partner ecosystem Drafts for suppliers, technology partners, distributors, and project collaborators."],
      brochure: ["Etihadeia | Brochure", "Download Etihadeia brochure Drafts, sector sheets, and service capability documents."],
      news: ["Etihadeia | News", "Read Etihadeia news and insights Drafts for company updates, sector notes, and technical articles."],
      contact: ["Etihadeia | Contact", "Contact Etihadeia for industrial technology, infrastructure, aviation, automation, and electrical service inquiries."],
    },
  },
  ar: {
    title: "الاتحادية | حلول التكنولوجيا الصناعية والبنية التحتية",
    description:
      "تقدم الاتحادية حلول التكنولوجيا الصناعية والطلاء الكهربائي والأتمتة والطيران والبنية التحتية ضمن تجربة سينمائية من المعدن السائل.",
    pages: {
      about: ["الاتحادية | عن الشركة", "تعرف على دعم الاتحادية لمشاريع التكنولوجيا الصناعية والبنية التحتية والطيران والخدمات الكهربائية."],
      services: ["الاتحادية | الخدمات", "استكشف خدمات الاتحادية في المستلزمات الكهربائية والأتمتة والتكييف وإضاءة المطارات والخدمات الكهربائية والحلول الرقمية."],
      industries: ["الاتحادية | القطاعات", "تعرف على القطاعات التي تخدمها الاتحادية، بما في ذلك النفط والغاز والبنية التحتية والطيران والطاقة والمياه والمدن الذكية."],
      projects: ["الاتحادية | المشاريع", "استعرض نماذج مشاريع الاتحادية في التوريد الصناعي والبنية التحتية والطيران والأتمتة والخدمات الكهربائية."],
      partners: ["الاتحادية | الشركاء", "استكشف منظومة شركاء الاتحادية من الموردين وشركاء التكنولوجيا والموزعين والمتعاونين في المشاريع."],
      brochure: ["الاتحادية | الكتيب", "قم بتنزيل نماذج كتيبات الاتحادية وملفات القطاعات ووثائق قدرات الخدمات."],
      news: ["الاتحادية | الأخبار", "اقرأ نماذج أخبار ورؤى الاتحادية لتحديثات الشركة وملاحظات القطاعات والمقالات الفنية."],
      contact: ["الاتحادية | تواصل", "تواصل مع الاتحادية لاستفسارات التكنولوجيا الصناعية والبنية التحتية والطيران والأتمتة والخدمات الكهربائية."],
    },
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
  "Latest news items are Holding until verified content is supplied.":
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
  Projects: "المشاريع",
  Brochure: "الكتيب",
  "Company profile": "ملف الشركة",
  "Service portfolio": "محفظة الخدمات",
  "Sectors we serve": "القطاعات التي نخدمها",
  "Project proof": "نماذج المشاريع",
  "Partner ecosystem": "منظومة الشركاء",
  Downloads: "التنزيلات",
  "News and insights": "الأخبار والرؤى",
  "Industrial capability with a service team behind every supply.": "قدرات صناعية وفريق خدمة خلف كل عملية توريد.",
  "A connected supply and service model for industrial work.": "نموذج مترابط للتوريد والخدمة في الأعمال الصناعية.",
  "Industrial technology shaped around each operating environment.": "تكنولوجيا صناعية مصممة حول كل بيئة تشغيل.",
  "Representative project stories ready for verified case studies.": "نماذج قصص مشاريع جاهزة لدراسات حالة موثقة.",
  "A supply network built for industrial confidence.": "شبكة توريد مبنية للثقة الصناعية.",
  "Brochures and capability sheets prepared for verified PDFs.": "كتيبات وملفات قدرات جاهزة لملفات PDF موثقة.",
  "A verified-news structure without invented announcements.": "هيكل أخبار موثق دون إعلانات غير مؤكدة.",
  "Bring us the scope, site condition, or supply challenge.": "شاركنا نطاق العمل أو ظروف الموقع أو تحدي التوريد.",
  "Etihadeia supports infrastructure, energy, aviation, and manufacturing teams with technical supply, field coordination, and solution guidance for demanding industrial environments.":
    "تدعم الاتحادية فرق البنية التحتية والطاقة والطيران والتصنيع بالتوريد الفني وتنسيق الموقع وإرشاد الحلول للبيئات الصناعية الصعبة.",
  "Each service line is planned around compatibility, uptime, and project clarity. The Drafts below define the structure for final product and capability content.":
    "يتم تخطيط كل خط خدمة حول التوافق واستمرارية التشغيل ووضوح المشروع. تحدد النصوص المؤقتة أدناه بنية المحتوى النهائي للمنتجات والقدرات.",
  "Different sectors create different constraints. Etihadeia structures supply and service support around safety, uptime, compliance, and lifecycle expectations.":
    "تخلق القطاعات المختلفة قيوداً مختلفة. تبني الاتحادية دعم التوريد والخدمة حول السلامة واستمرارية التشغيل والامتثال وتوقعات دورة الحياة.",
  "This page is structured for final project evidence. Until verified project data is supplied, each case study uses polished Draft content and clear result fields.":
    "تم تنظيم هذه الصفحة لاستيعاب أدلة المشاريع النهائية. وإلى أن يتم توفير بيانات موثقة، تستخدم كل دراسة حالة محتوى مؤقتاً مصقولاً وحقول نتائج واضحة.",
  "Etihadeia works with established technology names, specialist suppliers, and project collaborators to support dependable sourcing and technical continuity.":
    "تعمل الاتحادية مع أسماء تقنية معروفة وموردين متخصصين ومتعاونين في المشاريع لدعم التوريد الموثوق والاستمرارية الفنية.",
  "Use this page as the download hub for the final corporate brochure and sector-specific documents. Draft files are clearly marked until approved PDFs are supplied.":
    "استخدم هذه الصفحة كمركز تنزيل للكتيب المؤسسي النهائي ووثائق القطاعات. يتم تمييز الملفات المؤقتة بوضوح حتى يتم توفير ملفات PDF المعتمدة.",
  "The page is ready for real updates. Current articles are Drafts so the site can show layout, filters, and empty states without publishing unverified claims.":
    "الصفحة جاهزة للتحديثات الحقيقية. المقالات الحالية مؤقتة لعرض التخطيط والفلاتر والحالات الفارغة دون نشر ادعاءات غير موثقة.",
  "Route your inquiry to the right team with the form below. Draft contact details can be replaced with verified office data before launch.":
    "وجّه استفسارك إلى الفريق المناسب باستخدام النموذج أدناه. يمكن استبدال بيانات التواصل المؤقتة ببيانات مكتب موثقة قبل الإطلاق.",
  "What we deliver": "ما نقدمه",
  "From specification to energized systems.": "من المواصفات إلى الأنظمة المشغلة.",
  "Draft content: Etihadeia helps project teams select, source, and coordinate industrial technologies across electrical, automation, aviation, and infrastructure scopes.":
    "محتوى مؤقت: تساعد الاتحادية فرق المشاريع على اختيار وتوريد وتنسيق التقنيات الصناعية ضمن نطاقات الكهرباء والأتمتة والطيران والبنية التحتية.",
  "Technical supply": "التوريد الفني",
  "Specified products, compatible components, and structured procurement support.": "منتجات محددة ومكونات متوافقة ودعم منظم للمشتريات.",
  "Engineering coordination": "التنسيق الهندسي",
  "Review support for project requirements, drawings, site conditions, and commissioning needs.": "دعم مراجعة متطلبات المشروع والرسومات وظروف الموقع واحتياجات التشغيل.",
  "Service standards": "معايير الخدمة",
  "Field-ready teams, documented workflows, and dependable response for critical work.": "فرق جاهزة للموقع وسير عمل موثق واستجابة موثوقة للأعمال الحرجة.",
  "Operating philosophy": "فلسفة التشغيل",
  "A practical sequence for industrial decisions.": "تسلسل عملي للقرارات الصناعية.",
  "Read the site": "قراءة الموقع",
  "Understand the environment, loads, controls, safety needs, and project constraints.": "فهم البيئة والأحمال وأنظمة التحكم واحتياجات السلامة وقيود المشروع.",
  "Shape the supply": "تشكيل التوريد",
  "Match components and systems to the required performance, lead time, and lifecycle.": "مطابقة المكونات والأنظمة مع الأداء المطلوب ومدة التوريد ودورة الحياة.",
  "Support delivery": "دعم التسليم",
  "Coordinate documentation, logistics, installation readiness, and after-sales response.": "تنسيق الوثائق واللوجستيات وجاهزية التركيب وخدمة ما بعد البيع.",
  "Certification Drafts for verified documents.": "نماذج شهادات لوثائق موثقة.",
  "ISO Draft": "نموذج ISO",
  "Vendor approval Draft": "نموذج اعتماد مورد",
  "Safety compliance Draft": "نموذج امتثال السلامة",
  "Quality manual Draft": "نموذج دليل الجودة",
  "Start a technical discussion": "ابدأ نقاشاً فنياً",
  "Core services": "الخدمات الأساسية",
  "Six service lines, one industrial standard.": "ستة خطوط خدمة ومعيار صناعي واحد.",
  "Supply support for distribution, protection, cables, accessories, and compatible replacement parts.": "دعم توريد للتوزيع والحماية والكابلات والملحقات وقطع الغيار المتوافقة.",
  "PLC, drives, sensors, HMI, instrumentation, and control components for reliable operations.": "وحدات PLC ومحركات وحساسات وواجهات تشغيل وأجهزة قياس ومكونات تحكم لعمليات موثوقة.",
  "Mechanical and HVAC supply coordination for industrial buildings and operational facilities.": "تنسيق توريد ميكانيكي وتكييف للمباني الصناعية والمنشآت التشغيلية.",
  "Runway lighting, aviation systems, airport technologies, and safety-focused technical supply.": "إضاءة مدارج وأنظمة طيران وتقنيات مطارات وتوريد فني يركز على السلامة.",
  "Field-ready electrical service support for installation, testing, maintenance, and energization.": "دعم خدمات كهربائية جاهز للموقع للتركيب والاختبار والصيانة والتشغيل.",
  "Digital & IoT Supplies": "المستلزمات الرقمية وإنترنت الأشياء",
  "Connected devices, monitoring equipment, and IoT-ready components for smart infrastructure.": "أجهزة متصلة ومعدات مراقبة ومكونات جاهزة لإنترنت الأشياء للبنية التحتية الذكية.",
  "How we work": "كيف نعمل",
  "Clear enough for procurement, technical enough for engineering.": "واضح للمشتريات وفني بما يكفي للهندسة.",
  "Scope alignment": "مواءمة النطاق",
  "Confirm the application, standards, constraints, and delivery target.": "تأكيد التطبيق والمعايير والقيود وهدف التسليم.",
  "Product matching": "مطابقة المنتجات",
  "Select compatible supplies, alternates, and supporting documentation.": "اختيار المستلزمات والبدائل والوثائق الداعمة المتوافقة.",
  "Execution support": "دعم التنفيذ",
  "Coordinate delivery, site readiness, testing, and future service needs.": "تنسيق التسليم وجاهزية الموقع والاختبار واحتياجات الخدمة المستقبلية.",
  "Capability matrix": "مصفوفة القدرات",
  "Draft matrix for future detail.": "مصفوفة مؤقتة للتفاصيل المستقبلية.",
  "Related industries": "قطاعات ذات صلة",
  "Service lines connect across sectors.": "ترتبط خطوط الخدمة عبر القطاعات.",
  "Discuss a service scope": "ناقش نطاق خدمة",
  "Sector map": "خريطة القطاعات",
  "Capability Drafts by market.": "نماذج قدرات حسب السوق.",
  "Featured sector": "قطاع مميز",
  "Infrastructure projects need durable coordination.": "تحتاج مشاريع البنية التحتية إلى تنسيق طويل الأمد.",
  "Related services": "خدمات ذات صلة",
  "Services commonly paired with sector work.": "خدمات ترتبط عادة بأعمال القطاعات.",
  "Match services to your sector": "طابق الخدمات مع قطاعك",
  "Featured Draft": "نموذج مميز",
  "Airport lighting modernization support.": "دعم تحديث إضاءة المطارات.",
  "Case study gallery": "معرض دراسات الحالة",
  "Project cards for future evidence.": "بطاقات مشاريع للأدلة المستقبلية.",
  "Result metric Draft": "نموذج مؤشر نتيجة",
  "Availability Draft": "نموذج توافر",
  "Response-time Draft": "نموذج زمن استجابة",
  "Coverage Draft": "نموذج تغطية",
  "Plan a similar project": "خطط لمشروع مشابه",
  "Partner Drafts": "نماذج الشركاء",
  "Names shown until final logo permissions are supplied.": "تعرض الأسماء حتى يتم توفير أذونات الشعارات النهائية.",
  Collaboration: "التعاون",
  "Procurement support with technical discipline.": "دعم المشتريات بانضباط فني.",
  "Explore partnership opportunities": "استكشف فرص الشراكة",
  "Document library": "مكتبة الوثائق",
  "Draft download cards.": "بطاقات تنزيل مؤقتة.",
  "PDF Draft": "نموذج PDF",
  "Download note": "ملاحظة التنزيل",
  "Gated-download option can be added later.": "يمكن إضافة خيار تنزيل مشروط لاحقاً.",
  "Request the latest documents": "اطلب أحدث الوثائق",
  "Featured article": "مقال مميز",
  "How industrial teams evaluate technical supply partners.": "كيف تقيم الفرق الصناعية شركاء التوريد الفني.",
  "Latest Drafts": "أحدث النماذج",
  "Content slots for future verified news.": "مساحات محتوى للأخبار الموثقة المستقبلية.",
  "Holding state": "حالة مؤجلة",
  "This holding-state copy prevents Draft articles from reading as published company claims.": "تمنع هذه الصياغة أن تبدو المقالات المؤقتة كأنها ادعاءات منشورة من الشركة.",
  "Send a media inquiry": "أرسل استفساراً إعلامياً",
  "Inquiry form": "نموذج الاستفسار",
  "Tell us what you are planning.": "أخبرنا بما تخطط له.",
  "Department routing": "توجيه القسم",
  Department: "القسم",
  Office: "المكتب",
  "Technical Sales": "المبيعات الفنية",
  Procurement: "المشتريات",
  "Service Support": "دعم الخدمة",
  "We usually respond within one business day.": "نرد عادة خلال يوم عمل واحد.",
  "Please complete the required fields before sending.": "يرجى إكمال الحقول المطلوبة قبل الإرسال.",
  "Sending Draft request...": "جار إرسال الطلب المؤقت...",
  "Thank you. This Draft form is ready for backend connection.": "شكراً لك. هذا النموذج المؤقت جاهز للربط بالخادم.",
  "Industrial district location visual": "نموذج خريطة",
  "Next step": "الخطوة التالية",
  "Ready to move from Draft to project detail?": "هل أنت جاهز للانتقال من النماذج إلى تفاصيل المشروع؟",
  "Etihadeia helps project teams select, source, and coordinate industrial technologies across electrical, automation, aviation, and infrastructure scopes.":
    "تساعد الاتحادية فرق المشاريع على اختيار وتوريد وتنسيق التقنيات الصناعية ضمن نطاقات الكهرباء والأتمتة والطيران والبنية التحتية.",
  "Certification and compliance records prepared for final verification.": "سجلات الشهادات والامتثال جاهزة للتحقق النهائي.",
  "ISO quality system": "نظام جودة ISO",
  "Vendor approvals": "اعتمادات الموردين",
  "Safety compliance records": "سجلات امتثال السلامة",
  "Quality manual": "دليل الجودة",
  "Each service line is planned around compatibility, uptime, and project clarity, giving final product and capability content a clear structure from the first review.":
    "يتم تخطيط كل خط خدمة حول التوافق واستمرارية التشغيل ووضوح المشروع، مما يمنح محتوى المنتجات والقدرات النهائي بنية واضحة منذ المراجعة الأولى.",
  "A working matrix for scope, systems, and sector fit.": "مصفوفة عمل للنطاق والأنظمة وملاءمة القطاعات.",
  "Capability notes by market.": "ملاحظات قدرات حسب السوق.",
  "Transport, utilities, and urban infrastructure work requires dependable components, clear documentation, long-term availability, and fast technical communication.":
    "تتطلب أعمال النقل والمرافق والبنية التحتية الحضرية مكونات موثوقة ووثائق واضحة وتوافراً طويل الأمد وتواصلاً فنياً سريعاً.",
  "This page is structured for final project evidence. Until verified project data is supplied, each case study uses draft summaries with clear result fields.":
    "تم تنظيم هذه الصفحة لاستيعاب أدلة المشاريع النهائية. وإلى أن يتم توفير بيانات موثقة، تستخدم كل دراسة حالة ملخصات أولية مع حقول نتائج واضحة.",
  "Featured project draft": "مسودة مشروع مميز",
  "Challenge: coordinate compatible technical supply for a safety-critical aviation environment. Solution: align documentation, product options, and delivery readiness. Result: a clean handover framework ready for verified performance data.":
    "التحدي: تنسيق توريد فني متوافق لبيئة طيران حساسة للسلامة. الحل: مواءمة الوثائق وخيارات المنتجات وجاهزية التسليم. النتيجة: إطار تسليم واضح جاهز لبيانات أداء موثقة.",
  "Measured uptime field": "حقل قياس الجاهزية",
  "Availability field": "حقل التوافر",
  "Response-time field": "حقل زمن الاستجابة",
  "Coverage field": "حقل التغطية",
  "Partner relationships help Etihadeia coordinate availability, alternates, technical documents, and product suitability across demanding project timelines.":
    "تساعد علاقات الشراكة الاتحادية على تنسيق التوافر والبدائل والوثائق الفنية وملاءمة المنتجات عبر جداول مشاريع demanding.",
  "Draft file entries stay visible until approved PDFs are supplied.": "تبقى بيانات الملفات الأولية ظاهرة حتى يتم توفير ملفات PDF المعتمدة.",
  "Download cards with draft file metadata.": "بطاقات تنزيل ببيانات ملفات أولية.",
  "PDF draft, final file pending": "مسودة PDF، الملف النهائي قيد الاعتماد",
  "If lead capture becomes required, this page can add a short request form before file access without changing the public route.":
    "إذا أصبح جمع بيانات العملاء المحتملين مطلوباً، يمكن إضافة نموذج طلب قصير قبل الوصول إلى الملفات دون تغيير المسار العام.",
  "The page is ready for real updates. Current articles are draft editorial entries so the site can show layout, filters, and holding states without publishing unverified claims.":
    "الصفحة جاهزة للتحديثات الحقيقية. المقالات الحالية مسودات تحريرية تعرض التخطيط والفلاتر وحالات الانتظار دون نشر ادعاءات غير موثقة.",
  "A draft insight summary about specification clarity, documentation, response time, and lifecycle support in industrial supply decisions.":
    "ملخص أولي لرؤية حول وضوح المواصفات والوثائق وزمن الاستجابة ودعم دورة الحياة في قرارات التوريد الصناعي.",
  "Latest draft articles": "أحدث مسودات المقالات",
  "Draft summary for a future verified Etihadeia announcement.": "ملخص أولي لإعلان اتحادية موثق مستقبلاً.",
  "Draft summary for infrastructure and utility procurement guidance.": "ملخص أولي لإرشادات مشتريات البنية التحتية والمرافق.",
  "Draft summary for automation, electrical, or aviation systems content.": "ملخص أولي لمحتوى أنظمة الأتمتة أو الكهرباء أو الطيران.",
  "Verification note": "ملاحظة التحقق",
  "Latest news items are held until verified content is supplied.": "يتم تعليق أحدث الأخبار حتى يتم توفير محتوى موثق.",
  "This holding copy prevents draft articles from reading as published company claims.": "تمنع هذه الصياغة المقالات الأولية من الظهور كادعاءات منشورة من الشركة.",
  "Draft contact details can be replaced with verified office data before launch.": "يمكن استبدال بيانات التواصل الأولية ببيانات مكتب موثقة قبل الإطلاق.",
  "Industrial district location visual": "تصور موقع المنطقة الصناعية",
  "Ready to move from draft content to project detail?": "هل أنت جاهز للانتقال من المحتوى الأولي إلى تفاصيل المشروع؟",
  "Sending draft request...": "جار إرسال الطلب الأولي...",
  "Thank you. This draft form is ready for backend connection.": "شكراً لك. هذا النموذج الأولي جاهز للربط بالخادم.",
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
  "Switch to English": "التبديل إلى الإنجليزية",
  "Industrial team reviewing technical drawings beside control equipment": "فريق صناعي يراجع رسومات فنية بجانب معدات تحكم",
  "Industrial technician monitoring electroplating tanks and control equipment": "فني صناعي يراقب أحواض الطلاء الكهربائي ومعدات التحكم",
  "Industrial facility corridor with technical equipment": "ممر منشأة صناعية يحتوي على معدات فنية",
  "Quality control specialist working with industrial analysis equipment": "أخصائي جودة يعمل على معدات تحليل صناعية",
  "Industrial district location visual": "نموذج خريطة",
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
  const pageKey = document.body.dataset.page;
  const pageSpecificMeta = pageKey && pageMeta[safeLang].pages?.[pageKey];
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


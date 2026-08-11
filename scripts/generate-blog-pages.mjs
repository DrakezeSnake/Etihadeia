#!/usr/bin/env node
/** Generate semantic, crawlable Blog & Insights pages in English and Arabic. */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SITE_URL, SITE_NAME } from "./seo-head.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const { blogArticles, blogIndexMeta } = await import(pathToFileURL(path.join(root, "src/data/blogArticles.js")).href);
const solutionsMod = await import(pathToFileURL(path.join(root, "src/data/solutions.js")).href);
const documentsMod = await import(pathToFileURL(path.join(root, "src/data/productDocuments.js")).href);

const localeMeta = {
  en: { lang: "en", dir: "ltr", label: "العربية", indexPath: "/news/", otherIndexPath: "/ar/news/", blog: "Blog & Insights", home: "Home", solutions: "Solutions", services: "Services", products: "Products", partners: "Partners", contact: "Contact", published: "Published", updated: "Updated", author: "By", related: "Related resources", faq: "Frequently asked questions", proof: "Why El Etehadia", technical: "Technical explanation", operations: "Production considerations", egypt: "Egyptian-market context", more: "Explore the full Blog & Insights archive", ctaTitle: "Talk to a surface-finishing specialist", ctaButton: "Contact El Etehadia", languageLabel: "Arabic version" },
  ar: { lang: "ar", dir: "rtl", label: "English", indexPath: "/ar/news/", otherIndexPath: "/news/", blog: "المدونة والرؤى", home: "الرئيسية", solutions: "الحلول", services: "الخدمات", products: "المنتجات", partners: "الشركاء", contact: "تواصل", published: "تاريخ النشر", updated: "آخر تحديث", author: "بواسطة", related: "موارد ذات صلة", faq: "أسئلة شائعة", proof: "لماذا الاتحادية", technical: "الشرح الفني", operations: "اعتبارات الإنتاج", egypt: "سياق السوق المصري", more: "استكشف أرشيف المدونة والرؤى", ctaTitle: "تحدث إلى مختص في تشطيب الأسطح", ctaButton: "تواصل مع الاتحادية", languageLabel: "English version" },
};

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
}

function json(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function absolute(value) {
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function routeFor(article, locale) {
  return locale === "ar" ? `/ar/news/${article.slug}/` : `/news/${article.slug}/`;
}

function localizedSolution(article, locale) {
  const solution = article.solutionSlug ? solutionsMod.getSolutionBySlug(article.solutionSlug) : null;
  if (!solution) return locale === "ar" ? "حلول تشطيب الأسطح" : "surface finishing solutions";
  const arabicNames = {
    "surface-conditioning": "تجهيز الأسطح", "anti-corrosion": "الحماية من التآكل", "light-metal-finishes": "تشطيبات المعادن الخفيفة", "decorative-coatings": "الطلاءات الديكورية", "plating-on-plastics": "الطلاء على البلاستيك", "electroless-nickel": "النيكل الكيميائي", "precious-metals": "المعادن النفيسة", "plastic-recycling": "إعادة تدوير البلاستيك", watercare: "WaterCARE", "wear-resistance": "مقاومة البري",
  };
  return locale === "ar" ? arabicNames[solution.slug] || solution.title : solution.title;
}

function relatedDocumentName(article) {
  const slug = article.related.document.match(/\/solutions\/documents\/([^/]+)/)?.[1];
  return slug ? documentsMod.getProductDocumentBySlug(slug)?.title : null;
}

function htmlHead({ locale, title, description, pathname, image, type = "article", schema }) {
  const m = localeMeta[locale];
  const canonical = absolute(pathname);
  const alternate = absolute(locale === "ar" ? pathname.replace(/^\/ar/, "") : `/ar${pathname}`);
  return `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <link rel="canonical" href="${escapeHtml(canonical)}" />
  <link rel="alternate" hreflang="${m.lang}" href="${escapeHtml(canonical)}" />
  <link rel="alternate" hreflang="${locale === "ar" ? "en" : "ar"}" href="${escapeHtml(alternate)}" />
  <link rel="alternate" hreflang="x-default" href="${escapeHtml(locale === "ar" ? alternate : canonical)}" />
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta property="og:type" content="${type}" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta property="og:locale" content="${locale === "ar" ? "ar_EG" : "en_US"}" />
  <meta property="og:locale:alternate" content="${locale === "ar" ? "en_US" : "ar_EG"}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${escapeHtml(canonical)}" />
  <meta property="og:image" content="${escapeHtml(absolute(image))}" />
  <meta property="og:image:alt" content="${escapeHtml(locale === "ar" ? "الاتحادية — حلول تشطيب الأسطح في مصر" : "El Etehadia — surface-finishing solutions in Egypt")}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(absolute(image))}" />
  <meta name="theme-color" content="#087f9f" />
  <link rel="stylesheet" href="/src/blog.css" />
  <script type="application/ld+json">${json(schema)}</script>
</head>`;
}

function header(locale, current = false) {
  const m = localeMeta[locale];
  return `<header class="blog-site-header"><div class="blog-shell blog-site-header__inner">
    <a class="blog-brand" href="${m.lang === "ar" ? "/ar/news/" : "/"}" aria-label="${locale === "ar" ? "الصفحة الرئيسية للاتحادية" : "El Etehadia home"}"><img src="/images/nav-logo.svg" alt="${locale === "ar" ? "الاتحادية" : "El Etehadia"}" width="52" height="52" /><span>El Etehadia</span></a>
    <nav aria-label="${locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}"><a href="/">${m.home}</a><a href="/solutions/">${m.solutions}</a><a href="/products/">${m.products}</a><a href="/services/">${m.services}</a><a href="/partners/">${m.partners}</a><a${current ? ' aria-current="page"' : ""} href="${m.indexPath}">${m.blog}</a></nav>
    <a class="blog-language" href="${m.otherIndexPath}">${m.label}</a>
  </div></header>`;
}

function footer(locale) {
  const m = localeMeta[locale];
  return `<footer class="blog-site-footer"><div class="blog-shell"><strong>El Etehadia</strong><p>${locale === "ar" ? "كيماويات الطلاء الكهربائي والدعم الفني في مصر." : "Electroplating chemistry and technical support in Egypt."}</p><nav><a href="/solutions/">${m.solutions}</a><a href="/partners/">${m.partners}</a><a href="${m.indexPath}">${m.blog}</a><a href="/contact/">${m.contact}</a></nav></div></footer>`;
}

function organization() {
  return { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "El Etehadia Company for Import, Export & Agencies", url: `${SITE_URL}/`, logo: `${SITE_URL}/images/nav-logo.svg` };
}

function articleSchema(article, locale) {
  const copy = article[locale];
  const pathname = routeFor(article, locale);
  const canonical = absolute(pathname);
  const solutionName = localizedSolution(article, locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      { "@type": "Blog", "@id": `${SITE_URL}${locale === "ar" ? "/ar/news/" : "/news/"}#blog`, name: locale === "ar" ? "مدونة ورؤى الاتحادية" : "El Etehadia Blog & Insights", url: absolute(locale === "ar" ? "/ar/news/" : "/news/"), inLanguage: locale },
      { "@type": "BlogPosting", "@id": `${canonical}#article`, mainEntityOfPage: { "@id": canonical }, headline: copy.title, description: copy.description, image: { "@type": "ImageObject", url: absolute(article.image.src), caption: article.image.alt[locale] }, datePublished: article.date, dateModified: article.modified, author: { "@type": "Organization", name: article.author, url: `${SITE_URL}/about/` }, publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: locale, isPartOf: { "@id": `${SITE_URL}${locale === "ar" ? "/ar/news/" : "/news/"}#blog` }, about: { "@type": "Thing", name: solutionName, url: absolute(article.related.solution) }, keywords: copy.intent },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: locale === "ar" ? "الرئيسية" : "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: locale === "ar" ? "المدونة والرؤى" : "Blog & Insights", item: absolute(locale === "ar" ? "/ar/news/" : "/news/") }, { "@type": "ListItem", position: 3, name: copy.title, item: canonical }] },
    ],
  };
}

function indexSchema(locale) {
  const pathname = locale === "ar" ? "/ar/news/" : "/news/";
  return { "@context": "https://schema.org", "@graph": [organization(), { "@type": "Blog", "@id": `${absolute(pathname)}#blog`, name: locale === "ar" ? "مدونة ورؤى الاتحادية" : "El Etehadia Blog & Insights", url: absolute(pathname), inLanguage: locale, publisher: { "@id": `${SITE_URL}/#organization` } }, { "@type": "ItemList", name: locale === "ar" ? "مقالات المدونة" : "Blog articles", itemListElement: blogArticles.map((article, index) => ({ "@type": "ListItem", position: index + 1, url: absolute(routeFor(article, locale)), name: article[locale].title, image: absolute(article.image.src) })) }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: locale === "ar" ? "الرئيسية" : "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: locale === "ar" ? "المدونة والرؤى" : "Blog & Insights", item: absolute(pathname) }] }] };
}

function genericParagraphs(article, locale) {
  const copy = article[locale];
  const solution = localizedSolution(article, locale);
  if (locale === "ar") return [
    `لا يبدأ الحل الصحيح من اسم مادة كيميائية فقط. يبدأ من وصف واضح للجزء والخامة ومتطلبات العميل ومرحلة العملية التي تحتاج إلى قرار. وبالنسبة إلى ${solution}، فإن ربط هذه المعطيات بالمواصفة وظروف الخط يمنح الفريق أساساً عملياً للمقارنة قبل تغيير الجرعات أو الأحواض أو خطوات التشغيل.`,
    `تساعد المراجعة المنتظمة على فصل العرض عن السبب. فالعرض قد يكون اختلافاً في المظهر أو المعدل أو التغطية أو استقرار التشغيل، أما السبب فقد يكون في التجهيز أو الحمل أو حالة الحوض أو الشطف أو المعدات أو تداول الجزء. لذلك تجمع الاتحادية بين معرفة المنتجات والملاحظة والتحليل المعملي ودعم العملية عند الحاجة.`,
    `قبل اعتماد تغيير على الإنتاج، من الأفضل تحديد نقطة مرجعية وقياس ما يمكن قياسه وتسجيل ظروف التشغيل ومقارنة أجزاء سليمة وغير سليمة. هذا الأسلوب يقلل الهدر ويحافظ على التعلم داخل المصنع ويجعل الإجراء التصحيحي قابلاً للمتابعة بدلاً من أن يكون حلاً مؤقتاً.`,
    `تعبير «رقم 1 في مصر» هنا هو تموضع تسويقي معتمد للاتحادية، ويعني التزامنا بأن يكون التوريد والدعم الفني مرتبطين بنتيجة عملية للمصنع. لا يغني هذا عن تقييم تطبيقك الفعلي، لكنه يحدد مستوى الاهتمام المطلوب عند اختيار مسار التشطيب أو دعمه.`,
    `من منظور الجودة، من المفيد تحويل المتطلبات العامة مثل «مظهر أفضل» أو «طبقة أكثر ثباتاً» إلى نقاط قبول قابلة للمراجعة. قد تشمل هذه النقاط نوع الخام والحالة السطحية والسمك واللون أو اللمعان والالتصاق ونتيجة الاختبار وظروف التعبئة أو التخزين. كلما كان معيار القبول أوضح، أصبح تقييم العملية والمنتج أكثر فائدة للفريق.`,
    `خبرة المشغل مهمة في هذه المراجعة. فالمشغل يرى تغير سلوك الحوض وحالة الرغوة وزمن التجفيف وطريقة تحميل الجزء قبل أن تظهر المشكلة في تقرير الجودة. وعندما تسجل هذه الملاحظات مع التحليل والبيانات التشغيلية، تتحول إلى معرفة يمكن نقلها بين الورديات وليس إلى خبرة فردية غير موثقة.`,
    `تحتاج خطة التوريد أيضاً إلى أن تعكس نمط الإنتاج. فمعدل الاستهلاك وحجم الحوض ودورة الصيانة والمنتجات المساندة ومتطلبات التخزين تؤثر في استمرارية العملية. وتساعد مناقشة هذه العناصر مبكراً في مطابقة التوريد مع التشغيل بدلاً من انتظار وصول مشكلة مفاجئة في الوقت الحرج.`,
    `لا يقتصر التحسين على تصحيح العيوب. فقد يكشف تحليل منظم فرصة لتقليل السحب أو تحسين الشطف أو زيادة ثبات المظهر أو توضيح تعليمات العمل. لذلك يكون التحسين الأقوى هو الذي يضع تجربة محددة وقياساً للنتيجة وخطوة متابعة، مع الحفاظ على السلامة ومتطلبات المواصفة.`,
    `عند طلب الدعم، جهز وصفاً موجزاً لما تغير وما الذي ظل ثابتاً، مع صور أو عينات إن كانت متاحة. يتيح ذلك بدء حوار فني مركز ويزيد احتمال أن يكون الإجراء المقترح قابلاً للتطبيق على خطك بدلاً من نصيحة عامة.`,
    `ينبغي أن تراعي المراجعة أيضاً السلامة والتدريب وإدارة المواد. فالاستخدام السليم لمعدات الوقاية وإجراءات الإضافة والشطف والتخزين والتعامل مع المخلفات جزء من عملية مستقرة، وليس موضوعاً منفصلاً عنها. تساعد التعليمات الواضحة والمراجعة الدورية في تقليل التباين وحماية الأفراد وجودة المنتج في الوقت نفسه.`,
    `عند إدخال جزء أو مواصفة جديدة، يفضل الانتقال من تجربة مخططة إلى تشغيل محدود ثم إلى اعتماد كامل، مع نقاط مراجعة محددة. يمنح هذا التسلسل المصنع فرصة لرصد الاستجابة قبل تعميمها ويحمي المواعيد ورضا العميل من آثار تغيير غير مقاس.`,
    `تعمل الاتحادية مع فرق التصنيع لتوفير المنتج المناسب وربط هذا التوريد بسياق العملية. ابدأ بالحوار حول التطبيق ولا تتردد في طلب دعم فني عندما تحتاج الملاحظة أو التحليل أو بيانات الخط إلى تفسير عملي واضح.`,
    `في النهاية، القرار الفني الجيد هو قرار يمكن شرحه وتنفيذه والتحقق من أثره. حدّد المسؤول عن كل خطوة، وراجع المصادر المتاحة من بيانات الأحواض والعينات والمواصفة وسجل الإنتاج، ثم اتفق على موعد للمتابعة. بهذه الطريقة تصبح النتيجة جزءاً من نظام تشغيلي مستمر، لا استجابة منفصلة لشكوى أو طلب توريد. وهذا المنهج يمنح فريق الجودة والإنتاج والمشتريات لغة مشتركة لاتخاذ قرارات أوضح وأكثر سرعة، مع الاحتفاظ بسجل مفيد عند تكرار الجزء أو تغير ظروفه أو طلب العميل دليلاً على ثبات العملية.`,
  ];
  return [
    `The right response does not start with a chemical name alone. It starts with a clear description of the part, substrate, customer requirement, and process stage that needs a decision. For ${solution}, connecting those inputs to the specification and the operating line gives the team a practical baseline before changing dosage, baths, or work instructions.`,
    `A regular review separates the symptom from the cause. The symptom may be a shift in appearance, rate, coverage, or stability; the cause may sit in preparation, loading, bath condition, rinsing, equipment, or part handling. That is why El Etehadia combines product knowledge with observation, laboratory analysis, and process support when needed.`,
    `Before adopting a production change, establish a reference, measure what can be measured, record operating conditions, and compare conforming and non-conforming parts. This method reduces waste, preserves learning inside the plant, and makes the corrective action traceable rather than a temporary response.`,
    `“Egypt’s #1” is El Etehadia’s approved marketing positioning. It reflects our commitment to connect supply and technical support to a practical manufacturing outcome. It does not replace an assessment of the real application; it sets the level of care expected when selecting or supporting a finishing route.`,
    `From a quality perspective, broad requests such as “better appearance” or “a more stable coating” are most useful when translated into reviewable acceptance points. These may include substrate type and condition, thickness, shade or brightness, adhesion, test outcome, and packing or storage conditions. A clearer acceptance standard makes a process and product evaluation more useful to the whole team.`,
    `Operator experience belongs in that review. Operators notice a shift in bath behaviour, foam, drying time, or part loading before the effect reaches a quality report. When those observations are recorded alongside analysis and operating data, they become knowledge that can move between shifts instead of remaining undocumented individual experience.`,
    `The supply plan should also reflect the production pattern. Consumption rate, bath volume, maintenance cycle, supporting products, and storage requirements all affect process continuity. Discussing those elements early helps align supply with operations instead of waiting for an unexpected issue at a critical moment.`,
    `Improvement is not limited to correcting defects. A structured review can identify a way to reduce drag-out, improve rinsing, make appearance more stable, or clarify work instructions. The strongest improvement therefore sets a defined trial, measures the outcome, and schedules follow-up while keeping safety and specification requirements in view.`,
    `When requesting support, prepare a short description of what changed and what remained constant, together with photographs or samples where available. That creates a focused technical conversation and increases the chance that the proposed action will be applicable to the actual line rather than a generic recommendation.`,
    `The review should also account for safety, training, and material management. Correct use of protective equipment, addition procedures, rinsing, storage, and residue handling is part of a stable process rather than a separate topic. Clear instructions and regular review help reduce variation while protecting people and product quality at the same time.`,
    `When introducing a new part or specification, it is usually better to move from a planned trial to limited production and then to full approval with defined review points. That sequence gives the factory time to observe the response before scaling it and protects schedules and customer confidence from an unmeasured change.`,
    `El Etehadia works with manufacturing teams to provide the appropriate product and connect that supply to process context. Start with the application conversation, and ask for technical support whenever observation, analysis, or line data need a clear practical interpretation.`,
    `Ultimately, a sound technical decision is one that can be explained, implemented, and checked for effect. Assign ownership for each step, review the available bath data, samples, specification, and production record, then set a follow-up date. This makes the outcome part of a continuing operating system rather than an isolated reaction to a complaint or supply request. It also gives quality, production, and purchasing teams a shared language for faster, clearer decisions while retaining useful evidence when the part repeats, conditions change, or a customer asks for proof of process consistency.`,
  ];
}

function relatedLinks(article, locale) {
  const m = localeMeta[locale];
  const solutionName = localizedSolution(article, locale);
  const docName = relatedDocumentName(article);
  const labels = locale === "ar" ? [
    `استعرض حلول ${solutionName} من الاتحادية`,
    docName ? `اطّلع على معلومات المنتج: ${docName}` : "استعرض منتجات وكيميائيات الطلاء الكهربائي",
    "رتّب التحليل المعملي والخدمات الفنية", "تعرّف إلى شركاء تكنولوجيا تشطيب الأسطح", "تواصل مع فريق الاتحادية",
  ] : [
    `Explore El Etehadia’s ${solutionName} solutions`,
    docName ? `Consult product information for ${docName}` : "Explore electroplating products and chemistry",
    "Arrange laboratory analysis and technical services", "See El Etehadia’s surface-finishing technology partners", "Contact the El Etehadia team",
  ];
  return `<section class="blog-related" aria-labelledby="related-resources"><h2 id="related-resources">${m.related}</h2><ul>
    <li><a href="${article.related.solution}">${escapeHtml(labels[0])}</a></li>
    <li><a href="${article.related.document}">${escapeHtml(labels[1])}</a></li>
    <li><a href="${article.related.services}">${escapeHtml(labels[2])}</a></li>
    <li><a href="${article.related.partners}">${escapeHtml(labels[3])}</a></li>
    <li><a href="${article.related.contact}">${escapeHtml(labels[4])}</a></li>
  </ul></section>`;
}

function articlePage(article, locale) {
  const copy = article[locale];
  const m = localeMeta[locale];
  const pathname = routeFor(article, locale);
  const alternateHref = routeFor(article, locale === "ar" ? "en" : "ar");
  const paragraphs = genericParagraphs(article, locale);
  const proof = copy.proof.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const faq = copy.faq.map((item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join("");
  return `<!doctype html>
<html lang="${m.lang}" dir="${m.dir}">
${htmlHead({ locale, title: copy.title, description: copy.description, pathname, image: article.image.src, schema: articleSchema(article, locale) })}
<body class="blog-page">
${header(locale, true)}
<main>
  <article class="blog-article blog-shell">
    <nav class="blog-breadcrumbs" aria-label="${locale === "ar" ? "مسار التنقل" : "Breadcrumb"}"><a href="/">${m.home}</a><span aria-hidden="true">/</span><a href="${m.indexPath}">${m.blog}</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(copy.title)}</span></nav>
    <header class="blog-article__hero"><p class="blog-kicker">${escapeHtml(article.category)}</p><h1>${escapeHtml(copy.title)}</h1><p class="blog-article__deck">${escapeHtml(copy.excerpt)}</p><div class="blog-byline"><span>${m.published} <time datetime="${article.date}">${article.date}</time></span><span>${m.updated} <time datetime="${article.modified}">${article.modified}</time></span><span>${m.author} ${escapeHtml(article.author)}</span><a class="blog-language" href="${alternateHref}">${m.languageLabel}</a></div><figure><img src="${article.image.src}" alt="${escapeHtml(article.image.alt[locale])}" width="1200" height="675" fetchpriority="high" /><figcaption>${escapeHtml(article.image.alt[locale])}</figcaption></figure></header>
    <div class="blog-article__content">
      <p class="blog-article__lead">${escapeHtml(copy.introduction)}</p>
      <p>${escapeHtml(paragraphs[0])}</p>
      <section><h2>${m.technical}</h2><p>${escapeHtml(copy.technical)}</p><p>${escapeHtml(paragraphs[1])}</p></section>
      <section><h2>${m.operations}</h2><p>${escapeHtml(copy.operations)}</p><p>${escapeHtml(paragraphs[2])}</p></section>
      <section><h2>${m.egypt}</h2><p>${escapeHtml(copy.egypt)}</p><p>${escapeHtml(paragraphs[3])}</p></section>
      <section><h2>${locale === "ar" ? "الاختيار والتحقق والمتابعة" : "Selection, validation, and follow-up"}</h2><p>${escapeHtml(paragraphs[4])}</p><p>${escapeHtml(paragraphs[5])}</p><p>${escapeHtml(paragraphs[6])}</p><p>${escapeHtml(paragraphs[7])}</p><p>${escapeHtml(paragraphs[8])}</p><p>${escapeHtml(paragraphs[9])}</p><p>${escapeHtml(paragraphs[10])}</p><p>${escapeHtml(paragraphs[11])}</p><p>${escapeHtml(paragraphs[12])}</p></section>
      <section class="blog-proof"><h2>${m.proof}</h2><ul>${proof}</ul></section>
      ${relatedLinks(article, locale)}
      <section class="blog-faq"><h2>${m.faq}</h2>${faq}</section>
      <aside class="blog-cta"><p class="blog-kicker">${m.ctaTitle}</p><p>${escapeHtml(copy.cta)}</p><a class="blog-button" href="/contact/">${m.ctaButton}</a></aside>
    </div>
  </article>
</main>
${footer(locale)}
</body></html>`;
}

function indexPage(locale) {
  const m = localeMeta[locale];
  const meta = blogIndexMeta[locale];
  const pathname = m.indexPath;
  const cards = blogArticles.map((article) => {
    const copy = article[locale];
    return `<article class="blog-card"><a class="blog-card__image" href="${routeFor(article, locale)}"><img src="${article.image.src}" alt="${escapeHtml(article.image.alt[locale])}" loading="lazy" /></a><div><p class="blog-kicker">${escapeHtml(article.category)}</p><h2><a href="${routeFor(article, locale)}">${escapeHtml(copy.title)}</a></h2><p>${escapeHtml(copy.excerpt)}</p><a class="blog-card__link" href="${routeFor(article, locale)}">${locale === "ar" ? `اقرأ: ${copy.title}` : `Explore: ${copy.title}`}</a></div></article>`;
  }).join("\n");
  return `<!doctype html><html lang="${m.lang}" dir="${m.dir}">${htmlHead({ locale, title: meta.title, description: meta.description, pathname, image: "/assets/laboratory-analysis-technician.jpg", type: "website", schema: indexSchema(locale) })}<body class="blog-page">
${header(locale, true)}
<main class="blog-shell blog-index"><header class="blog-index__hero"><p class="blog-kicker">${m.blog}</p><h1>${locale === "ar" ? "خبرة عملية لفرق الإنتاج والتشطيب" : "Practical expertise for finishing and production teams"}</h1><p>${escapeHtml(meta.description)}</p><a class="blog-language" href="${m.otherIndexPath}">${m.label}</a></header><section aria-label="${m.blog}" class="blog-card-grid">${cards}</section></main>
${footer(locale)}</body></html>`;
}

function write(route, html) {
  const dir = route === "/" ? root : path.join(root, route.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), `${html}\n`, "utf8");
}

write("/news/", indexPage("en"));
write("/ar/news/", indexPage("ar"));
for (const article of blogArticles) {
  write(routeFor(article, "en"), articlePage(article, "en"));
  write(routeFor(article, "ar"), articlePage(article, "ar"));
}

console.log(`Wrote Blog & Insights indexes and ${blogArticles.length * 2} bilingual article pages.`);

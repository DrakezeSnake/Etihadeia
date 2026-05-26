/**
 * SEO- and a11y-safe stat counters: final values in static HTML, count-up on aria-hidden anim layer only.
 */

/** @typedef {{ value: number; suffix?: string; label: string; ariaLabel: { en: string; ar: string } }} HeroStat */

/** @type {HeroStat[]} */
export const HERO_STATS = [
  {
    value: 1997,
    suffix: "",
    label: "Established in Cairo",
    ariaLabel: {
      en: "Established in Cairo in 1997",
      ar: "تأسست في القاهرة عام 1997",
    },
  },
  {
    value: 25,
    suffix: "+",
    label: "Years of support",
    ariaLabel: {
      en: "25 plus years of support",
      ar: "أكثر من 25 سنة من الدعم",
    },
  },
  {
    value: 10,
    suffix: "+",
    label: "Recognized brands",
    ariaLabel: {
      en: "10 plus recognized brands",
      ar: "أكثر من 10 علامات تجارية معتمدة",
    },
  },
  {
    value: 4,
    suffix: "",
    label: "Support areas",
    ariaLabel: {
      en: "4 support areas",
      ar: "4 مجالات دعم فني",
    },
  },
];

/** @param {number} value @param {string} [suffix] */
export function formatStatValue(value, suffix = "") {
  return `${Math.round(value)}${suffix}`;
}

/** Visual layer updated by the count-up animation (hidden from assistive tech). */
/** @param {HTMLElement} statNum */
export function getStatAnimElement(statNum) {
  return (
    statNum.querySelector(".stat__num-anim") ??
    statNum.querySelector(".stat__num-value") ??
    null
  );
}

/** Crawler- and no-JS-visible final value; never modified by animation. */
/** @param {HTMLElement} statNum */
export function getStatStaticElement(statNum) {
  return statNum.querySelector(".stat__num-static");
}

/** @param {HTMLElement} statNum */
export function getStatPlaceholderElement(statNum) {
  return statNum.querySelector(".stat__num-placeholder");
}

/** @deprecated Use getStatAnimElement */
export function getStatDisplayElement(statNum) {
  return getStatAnimElement(statNum) ?? statNum;
}

/** @param {HTMLElement} statNum */
export function getFinalStatText(statNum) {
  const staticEl = getStatStaticElement(statNum);
  const fromStatic = staticEl?.textContent.trim();
  if (fromStatic) return fromStatic;

  const placeholder = getStatPlaceholderElement(statNum);
  const fromPlaceholder = placeholder?.textContent.trim();
  if (fromPlaceholder) return fromPlaceholder;

  const anim = getStatAnimElement(statNum);
  const fromAnim = anim?.textContent.trim();
  if (fromAnim) return fromAnim;

  const suffix = statNum.getAttribute("data-suffix") || "";
  const count = Number(statNum.getAttribute("data-count"));
  if (Number.isNaN(count)) return "";
  return formatStatValue(count, suffix);
}

/**
 * @param {HTMLElement} stat
 * @param {HTMLElement} statNum
 * @param {"en" | "ar"} [lang]
 */
export function applyStatAriaLabel(stat, statNum, lang = "en") {
  const key = lang === "ar" ? "data-aria-label-ar" : "data-aria-label-en";
  const ariaLabel =
    statNum.getAttribute(key) ||
    statNum.getAttribute("data-aria-label-en") ||
    statNum.getAttribute("data-aria-label");
  if (ariaLabel) {
    stat.setAttribute("aria-label", ariaLabel);
  }
}

/**
 * @param {ParentNode} [root]
 * @param {"en" | "ar"} [lang]
 */
export function syncHeroStatAriaLabels(root = document, lang = "en") {
  const stats = root.querySelectorAll(".hero .stat");
  stats.forEach((stat) => {
    const statNum = stat.querySelector(".stat__num[data-count]");
    if (statNum) applyStatAriaLabel(stat, statNum, lang);
  });
}

/**
 * @param {HTMLElement} statNum
 * @param {{ duration?: number }} [options]
 */
export function animateStatCount(statNum, options = {}) {
  const duration = options.duration ?? 1600;
  const anim = getStatAnimElement(statNum);
  const target = parseInt(statNum.getAttribute("data-count"), 10);
  const suffix = statNum.getAttribute("data-suffix") || "";
  const finalText = getFinalStatText(statNum) || formatStatValue(target, suffix);
  if (Number.isNaN(target) || !anim) return;

  statNum.classList.add("is-animating");
  anim.textContent = formatStatValue(0, suffix);
  const start = performance.now();

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - (1 - t) ** 3;
    anim.textContent = t >= 1 ? finalText : formatStatValue(eased * target, suffix);
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      statNum.classList.remove("is-animating");
      statNum.classList.add("is-animated");
    }
  }

  requestAnimationFrame(frame);
}

/**
 * @param {{
 *   root?: ParentNode;
 *   reducedMotion?: boolean;
 *   threshold?: number;
 *   duration?: number;
 * }} [options]
 */
export function setupStatCounters(options = {}) {
  const root = options.root ?? document;
  const reducedMotion = options.reducedMotion ?? false;
  const threshold = options.threshold ?? 0.35;
  const duration = options.duration ?? 1600;

  const statNums = root.querySelectorAll(".stat__num[data-count]");
  if (!statNums.length) return;

  const lang = document.documentElement.lang === "ar" ? "ar" : "en";
  syncHeroStatAriaLabels(root, lang);

  statNums.forEach((statNum) => {
    const stat = statNum.closest(".stat");
    if (stat && !statNum.getAttribute("data-aria-label-en")) {
      const label = stat.querySelector(".stat__label")?.textContent.trim() || "";
      const finalText = getFinalStatText(statNum);
      if (!stat.getAttribute("aria-label")) {
        stat.setAttribute("aria-label", label ? `${finalText}, ${label}` : finalText);
      }
    }
  });

  if (reducedMotion) return;

  let counted = false;
  const run = () => {
    if (counted) return;
    counted = true;
    statNums.forEach((el) => animateStatCount(el, { duration }));
  };

  const heroStats = root.querySelector(".hero__stats");
  if (heroStats && typeof IntersectionObserver !== "undefined") {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(heroStats);
    return;
  }

  run();
}

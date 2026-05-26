/**
 * SEO- and a11y-safe stat counters: final values in HTML, optional count-up on the visual layer only.
 */

/** @param {number} value @param {string} [suffix] */
export function formatStatValue(value, suffix = "") {
  return `${Math.round(value)}${suffix}`;
}

/** @param {HTMLElement} statNum */
export function getStatDisplayElement(statNum) {
  return statNum.querySelector(".stat__num-value") ?? statNum;
}

/** @param {HTMLElement} statNum */
export function getFinalStatText(statNum) {
  const display = getStatDisplayElement(statNum);
  const existing = display.textContent.trim();
  if (existing) return existing;
  const suffix = statNum.getAttribute("data-suffix") || "";
  const count = statNum.getAttribute("data-count") || "";
  return `${count}${suffix}`;
}

/**
 * @param {HTMLElement} statNum
 * @param {{ duration?: number }} [options]
 */
export function animateStatCount(statNum, options = {}) {
  const duration = options.duration ?? 1600;
  const display = getStatDisplayElement(statNum);
  const target = parseInt(statNum.getAttribute("data-count"), 10);
  const suffix = statNum.getAttribute("data-suffix") || "";
  if (Number.isNaN(target)) return;

  display.textContent = formatStatValue(0, suffix);
  const start = performance.now();

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - (1 - t) ** 3;
    display.textContent = formatStatValue(eased * target, suffix);
    if (t < 1) requestAnimationFrame(frame);
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

  statNums.forEach((statNum) => {
    const stat = statNum.closest(".stat");
    if (stat && !stat.getAttribute("aria-label")) {
      const label = stat.querySelector(".stat__label")?.textContent.trim() || "";
      const finalText = getFinalStatText(statNum);
      stat.setAttribute("aria-label", label ? `${finalText}, ${label}` : finalText);
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

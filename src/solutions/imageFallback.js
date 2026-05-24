const PLACEHOLDER = "/assets/solutions/placeholder-card.svg";

/** @param {HTMLImageElement} img */
function applyFallback(img) {
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "true";
  img.src = PLACEHOLDER;
  const altFallback = img.getAttribute("data-fallback-alt");
  if (altFallback && !img.getAttribute("data-alt-kept")) {
    img.alt = altFallback;
    img.setAttribute("data-alt-kept", "true");
  }
}

/**
 * After DOM ready, attaches error handlers to imgs with data-solution-img.
 */
export function initSolutionImageFallback() {
  document.querySelectorAll("img[data-solution-img]").forEach((img) => {
    if (img.dataset.fallbackApplied) return;
    img.addEventListener("error", () => applyFallback(img), { once: true });
    if (img.complete && img.naturalWidth === 0) applyFallback(img);
  });
}

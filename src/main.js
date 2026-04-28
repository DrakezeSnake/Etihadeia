import { setupScrollStory } from "./animation.js";
import { createIngotScene } from "./scene.js";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const canvas = document.querySelector("#webgl");

if (!canvas) {
  throw new Error("#webgl canvas not found");
}

let scene = createIngotScene({
  canvas,
  reducedMotion: prefersReducedMotion.matches,
});

let story = setupScrollStory({
  scene,
  reducedMotion: prefersReducedMotion.matches,
});

prefersReducedMotion.addEventListener("change", () => {
  story.destroy();
  scene.destroy();

  scene = createIngotScene({
    canvas,
    reducedMotion: prefersReducedMotion.matches,
  });

  story = setupScrollStory({
    scene,
    reducedMotion: prefersReducedMotion.matches,
  });
});

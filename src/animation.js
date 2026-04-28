import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MATERIAL_STATES, applyMaterialState, applyMaterialTextureState, stateTweenVars } from "./materials.js";

gsap.registerPlugin(ScrollTrigger);

const MATERIAL_SEQUENCE = ["rough", "silver", "brass", "platinum", "gold", "gold"];
const GATE_COUNT = 6;

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const numeric = Number.parseInt(value, 16);
  return {
    r: ((numeric >> 16) & 255) / 255,
    g: ((numeric >> 8) & 255) / 255,
    b: (numeric & 255) / 255,
  };
}

function rotationForViewport(quality) {
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  const rotationScale = mobile || quality.lowEnd ? 0.66 : 1;

  return {
    x: Math.PI * 0.28 * rotationScale,
    y: Math.PI * 0.2 * rotationScale,
    z: Math.PI * 0.1 * rotationScale,
  };
}

function logoRotationZ() {
  return 0;
}

function setStoryActive(isActive) {
  document.body.classList.toggle("is-story-active", isActive);
}

function setActivePanel(panels, index) {
  panels.forEach((panel, panelIndex) => {
    panel.classList.toggle("is-active", panelIndex === index);
  });
}

function setLogoOpacity(scene, opacity) {
  scene.originLogoMaterials.forEach((material) => {
    material.opacity = opacity;
    material.transparent = true;
  });
}

function tweenMaterial(timeline, material, stateName, quality, at, duration = 0.54) {
  const color = material.color;
  const target = MATERIAL_STATES[stateName];
  const targetColor = hexToRgb(target.color);

  timeline
    .call(() => {
      applyMaterialTextureState(material, stateName, quality);
    }, null, at + 0.08)
    .to(
      color,
      {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration,
        ease: "power2.out",
      },
      at,
    )
    .to(material, { ...stateTweenVars(material, stateName, quality), duration, ease: "power2.out" }, at)
    .call(() => {
      material.userData.state = stateName;
    }, null, at + duration);
}

function addGatePulse(timeline, scene, gates, gateIndex, at) {
  const gate = gates[gateIndex];
  const burst = scene.particles[gateIndex];
  const materialState = MATERIAL_SEQUENCE[gateIndex] || "silver";
  const tint = MATERIAL_STATES[materialState]?.color || "#d9dde3";

  timeline
    .call(() => {
      const rect = gate?.getBoundingClientRect();
      if (rect) scene.setLiquidScreenY(gateIndex, rect.top + rect.height * 0.28);
    }, null, at - 0.01)
    .set(burst, { visible: true }, at)
    .set(burst.material, { opacity: 0 }, at)
    .set(burst.scale, { x: 0.38, y: 0.38, z: 0.38 }, at)
    .call(() => gate?.classList.add("is-impact"), null, at)
    .call(() => scene.setWaterActive(gateIndex, 0.22), null, at)
    .call(
      () =>
        scene.triggerWaterImpact(gateIndex, {
          tint,
          radius: gateIndex === GATE_COUNT - 1 ? 1.38 : 1.08,
          depth: gateIndex === GATE_COUNT - 1 ? 0.98 : 0.72,
        }),
      null,
      at,
    )
    .call(() => scene.setWaterActive(gateIndex, scene.quality.lowEnd ? 0.72 : 1), null, at + 0.04)
    .call(() => scene.setWaterActive(gateIndex, scene.quality.lowEnd ? 0.4 : 0.58), null, at + 0.92)
    .call(() => scene.setWaterActive(gateIndex, 0), null, at + 1.72)
    .to(burst.material, { opacity: scene.quality.lowEnd ? 0.44 : 0.85, duration: 0.06, ease: "power1.out" }, at)
    .to(burst.material, { opacity: 0, duration: 0.95, ease: "power2.out" }, at + 0.18)
    .to(burst.scale, { x: 1.75, y: 1.75, z: 1.75, duration: 1.05, ease: "power3.out" }, at)
    .call(() => gate?.classList.remove("is-impact"), null, at + 1.84)
    .set(burst, { visible: false }, at + 1.3);
}

function createMasterTimeline(scene, panels, gates) {
  const { fallingHex, material, liquidY, quality } = scene;
  const rotation = rotationForViewport(quality);
  const timeline = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onUpdate: () => {
      const activeIndex = Math.min(panels.length - 1, Math.floor(timeline.progress() * panels.length));
      setActivePanel(panels, activeIndex);
      scene.render();
    },
  });

  timeline
    .set(fallingHex.position, { x: -0.16, y: 0.72, z: 0.08 }, 0)
    .set(fallingHex.rotation, { x: 0, y: 0, z: logoRotationZ() }, 0)
    .set(fallingHex.material, { opacity: 1 }, 0)
    .call(() => setLogoOpacity(scene, 1), null, 0)
    .to(fallingHex.position, { x: 0, y: 0.56, duration: 0.72, ease: "power2.out" }, 0)
    .to(fallingHex.rotation, { x: rotation.x * 0.1, y: rotation.y * 0.12, z: logoRotationZ(), duration: 0.72 }, 0)
    .call(() => setLogoOpacity(scene, 0.18), null, 0.34)
    .call(() => setLogoOpacity(scene, 0), null, 0.72);

  for (let index = 0; index < GATE_COUNT; index += 1) {
    const base = 0.9 + index * 1.55;
    const nextState = MATERIAL_SEQUENCE[index];
    const tumble = quality.lowEnd ? 0.52 : 1;

    timeline
      .to(
        fallingHex.position,
        {
          y: liquidY + 0.1,
          z: 0.03,
          duration: 0.58,
          ease: "power2.in",
        },
        base,
      )
      .to(
        fallingHex.rotation,
        {
          x: rotation.x * (0.6 + index * 0.18) + Math.PI * 0.64 * tumble * (index + 1),
          y: rotation.y * (0.42 + index * 0.16) + Math.PI * 0.38 * tumble * (index + 1),
          z: logoRotationZ() + Math.PI * 2 * tumble * (index + 0.18),
          duration: 0.86,
          ease: "power1.in",
        },
        base,
      );

    addGatePulse(timeline, scene, gates, index, base + 0.58);
    tweenMaterial(timeline, material, nextState, quality, base + 0.6, index === 0 ? 0.45 : 0.56);

    if (index < GATE_COUNT - 1) {
      timeline
        .to(fallingHex.position, { y: liquidY - 0.34, duration: 0.32, ease: "power2.in" }, base + 0.6)
        .to(fallingHex.position, { y: 0.36, z: 0.04, duration: 0.68, ease: "power1.inOut" }, base + 0.94)
        .to(fallingHex.position, { y: 0.3, duration: 0.36, ease: "power2.out" }, base + 1.34)
        .to(
          fallingHex.rotation,
          {
            x: rotation.x * (0.46 + index * 0.14) + Math.PI * 0.88 * tumble * (index + 1),
            y: rotation.y * (0.52 + index * 0.13) + Math.PI * 0.54 * tumble * (index + 1),
            z: logoRotationZ() + Math.PI * 2 * tumble * (index + 0.38),
            duration: 0.96,
            ease: "power2.out",
          },
          base + 0.78,
        );
    } else {
      timeline
        .to(fallingHex.position, { y: liquidY - 0.38, duration: 0.38, ease: "power2.in" }, base + 0.6)
        .to(fallingHex.material, { opacity: 0, duration: 0.36, ease: "power2.out" }, base + 0.68)
        .to(fallingHex.scale, { x: 0.05, y: 0.05, z: 0.05, duration: 0.42, ease: "power3.in" }, base + 0.64);
    }
  }

  return timeline;
}

function setupCounters() {
  const counters = gsap.utils.toArray(".stat__num");
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count || 0);
    const suffix = counter.dataset.suffix || "";
    const state = { value: 0 };

    gsap.to(state, {
      value: target,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 82%",
        once: true,
      },
      onUpdate: () => {
        counter.textContent = `${Math.round(state.value)}${suffix}`;
      },
    });
  });
}

function setupSectionReveals() {
  const items = gsap.utils.toArray(".section");
  const animatedChildren = gsap.utils.toArray(
    ".industry-grid > *, .service-grid > *, .partner-strip span, .customer-grid span, .brochure__plate, .contact-card, .contact-form",
  );

  const sectionTweens = items.map((item) =>
    gsap.fromTo(
      item,
      { opacity: 0, y: 46 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: item,
          start: "top 86%",
          once: true,
        },
      },
    ),
  );

  const childTweens = animatedChildren.map((item, index) =>
    gsap.fromTo(
      item,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.72,
        delay: (index % 8) * 0.035,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: item,
          start: "top 88%",
          once: true,
        },
      },
    ),
  );

  return [...sectionTweens, ...childTweens];
}

export function setupScrollStory({ scene, reducedMotion }) {
  const panels = gsap.utils.toArray("[data-story-panel]");
  const gates = gsap.utils.toArray(".liquid-gate");
  const story = document.querySelector(".liquid-story");
  const year = document.querySelector("#year");
  let storyTrigger = null;
  let mainTimeline = null;
  let revealTweens = [];

  if (year) year.textContent = new Date().getFullYear();
  setActivePanel(panels, 0);
  setupCounters();

  if (!reducedMotion) {
    mainTimeline = createMasterTimeline(scene, panels, gates);
    storyTrigger = ScrollTrigger.create({
      trigger: story,
      start: "top 18%",
      end: "bottom 82%",
      scrub: 0.85,
      fastScrollEnd: false,
      animation: mainTimeline,
      onEnter: () => setStoryActive(true),
      onEnterBack: () => setStoryActive(true),
      onLeave: () => setStoryActive(false),
      onLeaveBack: () => setStoryActive(false),
      onUpdate: () => scene.render(),
    });
  } else {
    applyMaterialState(scene.material, "gold", scene.quality);
    gsap.set(scene.fallingHex.position, { x: 0, y: 0.32, z: 0.04 });
    gsap.set(scene.fallingHex.rotation, rotationForViewport(scene.quality));
    gsap.set(scene.fallingHex.material, { opacity: 0.88 });
    scene.rippleUniforms.forEach((uniforms) => {
      uniforms.alpha.value = 0;
    });
    setLogoOpacity(scene, 0);
    setActivePanel(panels, panels.length - 1);
    scene.render();
  }

  revealTweens = setupSectionReveals();

  return {
    destroy() {
      storyTrigger?.kill();
      mainTimeline?.kill();
      revealTweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      setStoryActive(false);
    },
  };
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MATERIAL_STATES, applyMaterialState, applyMaterialTextureState, stateTweenVars } from "./materials.js";

gsap.registerPlugin(ScrollTrigger);

const MATERIAL_SEQUENCE = ["rough", "silver", "brass", "platinum", "gold", "gold"];
const GATE_COUNT = 6;
const HEX_RADIUS = 0.4;
const TIMELINE_DURATION = 4.5;

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

function faceForwardZ(_index, offset = 0) {
  return logoRotationZ() + offset;
}

function setStoryActive(isActive) {
  document.body.classList.toggle("is-story-active", isActive);
}

function setActivePanel(panels, index) {
  if (setActivePanel.current === index) return;
  setActivePanel.current = index;

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

function setMediumIntensity(value) {
  document.documentElement.style.setProperty("--medium-intensity", value.toFixed(3));
}

function alignGateToLiquid(scene, gates, gateIndex) {
  const gate = gates[gateIndex];
  const line = gate?.querySelector("span");
  const rect = line?.getBoundingClientRect() || gate?.getBoundingClientRect();
  if (!rect) return scene.getLiquidWorldY(gateIndex);

  return scene.setLiquidScreenY(gateIndex, rect.top + rect.height * 0.5);
}

function tweenMaterial(timeline, material, stateName, quality, at, duration = 0.54) {
  const color = material.color;
  const target = MATERIAL_STATES[stateName];
  const targetColor = hexToRgb(target.color);
  const textureSwapAt = at + Math.min(0.006, duration * 0.2);

  timeline
    .call(() => {
      applyMaterialTextureState(material, stateName, quality);
    }, null, textureSwapAt)
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

function getHexWorldRadius(scene) {
  return HEX_RADIUS * (scene.fallingHex.scale.y || 1);
}

function contactCenterY(scene, gateIndex) {
  return scene.getLiquidWorldY(gateIndex) + getHexWorldRadius(scene);
}

function exitCenterY(scene, gateIndex, depth = 1.12) {
  return scene.getLiquidWorldY(gateIndex) - getHexWorldRadius(scene) * depth;
}

function submergedCenterY(scene, gateIndex, depth = 0.28) {
  return scene.getLiquidWorldY(gateIndex) - getHexWorldRadius(scene) * depth;
}

function getGateDocumentY(gate) {
  const line = gate?.querySelector("span");
  const rect = line?.getBoundingClientRect() || gate?.getBoundingClientRect();
  if (!rect) return 0;
  return rect.top + window.scrollY + rect.height * 0.5;
}

function buildGateSchedule(story, gates) {
  const viewportH = window.innerHeight || document.documentElement.clientHeight || 1;
  const storyRect = story.getBoundingClientRect();
  const storyTop = storyRect.top + window.scrollY;
  const storyBottom = storyRect.bottom + window.scrollY;
  const startScroll = storyTop - viewportH * 0.18;
  const endScroll = storyBottom - viewportH * 0.82;
  const scrollRange = Math.max(1, endScroll - startScroll);
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  const contactBands = mobile ? [0.46, 0.54, 0.62, 0.7, 0.78, 0.84] : [0.5, 0.55, 0.6, 0.65, 0.7, 0.76];
  const minGap = mobile ? 0.105 : 0.115;
  let last = -minGap;

  return gates.slice(0, GATE_COUNT).map((gate, index) => {
    const desiredScreenY = viewportH * contactBands[index];
    const contactScroll = getGateDocumentY(gate) - desiredScreenY;
    const raw = (contactScroll - startScroll) / scrollRange;
    const latest = index === GATE_COUNT - 1 ? 0.985 : 0.93;
    const earliest = index === 0 ? 0.045 : last + minGap;
    const contact = Math.min(latest, Math.max(earliest, raw));
    last = contact;
    return contact;
  });
}

function addGatePulse(timeline, scene, gates, gateIndex, at) {
  const gate = gates[gateIndex];
  const burst = scene.particles[gateIndex];
  const materialState = MATERIAL_SEQUENCE[gateIndex] || "silver";
  const tint = MATERIAL_STATES[materialState]?.color || "#d9dde3";
  const isFinal = gateIndex === GATE_COUNT - 1;
  const crestAt = isFinal ? 0.055 : 0.045;
  const fadeAt = isFinal ? 0.22 : 0.18;
  const tailAt = isFinal ? 0.48 : 0.38;
  const particleTail = isFinal ? 0.44 : 0.34;

  timeline
    .call(() => alignGateToLiquid(scene, gates, gateIndex), null, at - 0.012)
    .call(() => alignGateToLiquid(scene, gates, gateIndex), null, at)
    .set(scene.fallingHex.position, { y: () => contactCenterY(scene, gateIndex), z: 0.03 }, at)
    .set(burst, { visible: true }, at)
    .set(burst.material, { opacity: 0 }, at)
    .set(burst.scale, { x: isFinal ? 0.52 : 0.38, y: isFinal ? 0.52 : 0.38, z: isFinal ? 0.52 : 0.38 }, at)
    .call(() => gate?.classList.add("is-impact"), null, at)
    .call(() => scene.setWaterActive(gateIndex, isFinal ? 0.72 : 0.48), null, at)
    .call(
      () =>
        scene.triggerWaterImpact(gateIndex, {
          tint,
          radius: isFinal ? 2.62 : 1.86,
          depth: isFinal ? 1.72 : 1.08,
          viscosity: isFinal ? 0.958 : 0.964,
          damping: isFinal ? 0.983 : 0.986,
          waveBoost: isFinal ? 1.18 : 1.02,
        }),
      null,
      at,
    )
    .call(() => scene.setWaterActive(gateIndex, isFinal ? 1 : 0.9), null, at + crestAt)
    .call(() => scene.setWaterActive(gateIndex, isFinal ? 0.6 : 0.52), null, at + fadeAt)
    .call(() => scene.setWaterActive(gateIndex, 0), null, at + tailAt)
    .to(burst.material, { opacity: scene.quality.lowEnd ? 0.48 : isFinal ? 1 : 0.86, duration: crestAt, ease: "power2.out" }, at)
    .to(burst.material, { opacity: 0, duration: particleTail, ease: "power2.out" }, at + fadeAt)
    .to(burst.scale, { x: isFinal ? 3.35 : 2.28, y: isFinal ? 3.35 : 2.28, z: isFinal ? 3.35 : 2.28, duration: particleTail, ease: "power3.out" }, at)
    .call(() => gate?.classList.remove("is-impact"), null, at + tailAt)
    .set(burst, { visible: false }, at + particleTail + fadeAt);
}

function createMasterTimeline(scene, panels, gates, story) {
  const { fallingHex, material, quality } = scene;
  const rotation = rotationForViewport(quality);
  const baseScale = fallingHex.scale.x || 1;
  const medium = { value: 0 };
  const gateSchedule = buildGateSchedule(story, gates).map((time) => time * TIMELINE_DURATION);
  const timeline = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onUpdate: () => {
      const activeIndex = Math.min(panels.length - 1, Math.floor(timeline.progress() * panels.length));
      setActivePanel(panels, activeIndex);
    },
  });

  const firstContact = gateSchedule[0] ?? 0.14;
  const detachEnd = Math.max(0.025, firstContact - 0.08);

  timeline
    .set(fallingHex.position, { x: -0.16, y: 0.72, z: 0.08 }, 0)
    .set(fallingHex.rotation, { x: 0, y: 0, z: logoRotationZ() }, 0)
    .set(fallingHex.material, { opacity: 1 }, 0)
    .call(() => setLogoOpacity(scene, 1), null, 0)
    .to(fallingHex.position, { x: -0.07, y: 0.65, z: 0.07, duration: detachEnd, ease: "power2.out" }, 0)
    .to(fallingHex.rotation, { x: rotation.x * 0.06, y: rotation.y * 0.08, z: logoRotationZ(), duration: detachEnd }, 0)
    .call(() => setLogoOpacity(scene, 0.72), null, detachEnd * 0.44)
    .call(() => setLogoOpacity(scene, 0.38), null, detachEnd * 0.72)
    .call(() => setLogoOpacity(scene, 0), null, detachEnd);

  for (let index = 0; index < GATE_COUNT; index += 1) {
    const contactAt = gateSchedule[index];
    const previousContact = index === 0 ? 0 : gateSchedule[index - 1];
    const nextContact = gateSchedule[index + 1] ?? 1;
    const approachLead = Math.min(0.11, Math.max(0.055, (contactAt - previousContact) * 0.42));
    const alignLead = Math.min(0.035, approachLead * 0.44);
    const approachStart = Math.max(index === 0 ? 0 : previousContact + 0.026, contactAt - approachLead);
    const alignStart = Math.max(approachStart, contactAt - alignLead);
    const nextState = MATERIAL_SEQUENCE[index];
    const tumble = quality.lowEnd ? 0.52 : 1;
    const isFinal = index === GATE_COUNT - 1;
    const crossDuration = Math.min(isFinal ? 0.38 : 0.44, Math.max(isFinal ? 0.3 : 0.34, (nextContact - contactAt) * 0.52));
    const cameraRest = window.matchMedia("(max-width: 768px)").matches ? { y: 0.08, z: 5 } : { y: 0.16, z: 4.28 };
    const gentleSpin = {
      x: rotation.x * (0.1 + index * 0.015) + Math.PI * 0.018 * tumble,
      y: rotation.y * (0.08 + index * 0.014) + Math.PI * 0.014 * tumble,
      z: faceForwardZ(index, (index % 2 === 0 ? 1 : -1) * 0.045),
    };

    timeline
      .call(() => alignGateToLiquid(scene, gates, index), null, approachStart)
      .to(
        fallingHex.position,
        {
          y: () => contactCenterY(scene, index),
          z: 0.03,
          duration: contactAt - approachStart,
          ease: "power1.in",
        },
        approachStart,
      )
      .to(
        fallingHex.rotation,
        {
          ...gentleSpin,
          duration: Math.max(0.001, alignStart - approachStart),
          ease: "power1.inOut",
        },
        approachStart,
      )
      .to(
        fallingHex.rotation,
        {
          x: 0,
          y: 0,
          z: faceForwardZ(index, 0),
          duration: contactAt - alignStart,
          ease: "power2.inOut",
        },
        alignStart,
      );

    addGatePulse(timeline, scene, gates, index, contactAt);
    timeline
      .to(
        medium,
        {
          value: isFinal ? 0.88 : 0.66,
          duration: crossDuration * 0.32,
          ease: "power2.out",
          onUpdate: () => setMediumIntensity(medium.value),
        },
        contactAt,
      )
      .to(
        medium,
        {
          value: 0,
          duration: crossDuration * 0.82,
          ease: "power3.out",
          onUpdate: () => setMediumIntensity(medium.value),
        },
        contactAt + crossDuration * 0.46,
      )
      .to(scene.camera.position, { z: cameraRest.z - (isFinal ? 0.3 : 0.18), y: cameraRest.y - 0.045, duration: crossDuration * 0.58, ease: "power2.out" }, contactAt)
      .to(scene.camera.position, { z: cameraRest.z, y: cameraRest.y, duration: crossDuration * 0.9, ease: "power3.out" }, contactAt + crossDuration * 0.46)
      .to(fallingHex.scale, { x: baseScale * 1.025, y: baseScale * 0.86, z: baseScale * 1.035, duration: crossDuration * 0.42, ease: "power3.out" }, contactAt);

    if (!isFinal) {
      tweenMaterial(timeline, material, nextState, quality, contactAt + crossDuration * 0.32, crossDuration * 0.54);
      timeline
        .to(fallingHex.position, { y: () => submergedCenterY(scene, index, 0.18), z: -0.015, duration: crossDuration * 0.3, ease: "power3.out" }, contactAt)
        .to(fallingHex.position, { y: () => submergedCenterY(scene, index, 0.48), z: -0.055, duration: crossDuration * 0.3, ease: "sine.inOut" }, contactAt + crossDuration * 0.3)
        .to(fallingHex.position, { y: () => exitCenterY(scene, index, 1.24), z: 0.04, duration: crossDuration * 0.4, ease: "power2.in" }, contactAt + crossDuration * 0.6)
        .to(fallingHex.rotation, { x: rotation.x * 0.035, y: rotation.y * 0.03, z: faceForwardZ(index, 0.012), duration: crossDuration * 0.62, ease: "sine.inOut" }, contactAt)
        .to(fallingHex.scale, { x: baseScale * 0.985, y: baseScale * 1.025, z: baseScale, duration: crossDuration * 0.26, ease: "power2.out" }, contactAt + crossDuration * 0.46)
        .to(fallingHex.scale, { x: baseScale, y: baseScale, z: baseScale, duration: crossDuration * 0.34, ease: "power3.out" }, contactAt + crossDuration * 0.66)
        .to(fallingHex.rotation, { ...gentleSpin, duration: Math.max(0.001, nextContact - contactAt - crossDuration), ease: "power1.inOut" }, contactAt + crossDuration);
    } else {
      timeline
        .to(fallingHex.position, { y: () => submergedCenterY(scene, index, 0.16), z: -0.02, duration: crossDuration * 0.34, ease: "power3.out" }, contactAt)
        .to(fallingHex.position, { y: () => submergedCenterY(scene, index, 0.58), z: -0.07, duration: crossDuration * 0.34, ease: "sine.inOut" }, contactAt + crossDuration * 0.34)
        .to(fallingHex.position, { y: () => exitCenterY(scene, index, 1.02), z: -0.02, duration: crossDuration * 0.38, ease: "power2.in" }, contactAt + crossDuration * 0.62)
        .to(fallingHex.rotation, { x: rotation.x * 0.025, y: rotation.y * 0.025, z: faceForwardZ(index, 0.01), duration: crossDuration * 1.05, ease: "sine.inOut" }, contactAt)
        .to(fallingHex.material, { opacity: 0, duration: crossDuration * 0.82, ease: "power2.out" }, contactAt + crossDuration * 0.36)
        .to(fallingHex.scale, { x: baseScale * 0.13, y: baseScale * 0.13, z: baseScale * 0.13, duration: crossDuration * 0.9, ease: "power3.in" }, contactAt + crossDuration * 0.26);
    }
  }

  timeline.call(() => setMediumIntensity(0), null, TIMELINE_DURATION);
  timeline.set({}, {}, TIMELINE_DURATION);
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
  setActivePanel.current = undefined;
  setActivePanel(panels, 0);
  setupCounters();

  if (!reducedMotion) {
    mainTimeline = createMasterTimeline(scene, panels, gates, story);
    storyTrigger = ScrollTrigger.create({
      trigger: story,
      start: "top 18%",
      end: "bottom 82%",
      scrub: 1.2,
      fastScrollEnd: false,
      animation: mainTimeline,
      onEnter: () => setStoryActive(true),
      onEnterBack: () => setStoryActive(true),
      onLeave: () => setStoryActive(false),
      onLeaveBack: () => setStoryActive(false),
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
    setMediumIntensity(0);
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
      setMediumIntensity(0);
    },
  };
}

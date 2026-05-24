import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { HDRLoader } from "three/examples/jsm/loaders/HDRLoader.js";
import { PARTICLE_COLORS, applyMaterialState, createHexMaterial, loadHexTextures } from "./materials.js";
import { createWaterSimulation } from "./waterSimulation.js";

const HDRI_URL = "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_03_1k.hdr";
const LIQUID_COUNT = 6;
const LIQUID_Y = -0.08;

function getQualityProfile(reducedMotion) {
  const memory = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 8;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.matchMedia("(max-width: 768px)").matches;
  const lowEnd = reducedMotion || memory <= 4 || cores <= 4 || (coarsePointer && narrow);

  return {
    lowEnd,
    useHDR: !lowEnd,
    pixelRatio: Math.min(window.devicePixelRatio || 1, lowEnd || narrow ? 1.2 : 1.85),
    liquidSegments: lowEnd ? 4 : 18,
    particleCount: lowEnd ? 36 : 110,
    antialias: !lowEnd,
    lightScale: lowEnd ? 0.74 : 1,
  };
}

function createRenderer(canvas, quality) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: quality.antialias,
    alpha: false,
    powerPreference: "high-performance",
  });

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = quality.lowEnd ? 1.04 : 1.18;
  return renderer;
}

function addStudioLighting(scene, quality) {
  const scale = quality.lightScale;

  const key = new THREE.DirectionalLight(0xfff3de, 2.45 * scale);
  key.position.set(3.5, 4.1, 4.2);

  const coolFill = new THREE.DirectionalLight(0x8da8c1, 0.68 * scale);
  coolFill.position.set(-3.2, 1.15, 2.4);

  const frontFill = new THREE.DirectionalLight(0xdde8f3, 0.54 * scale);
  frontFill.position.set(0, 0.35, 4.8);

  const redEdge = new THREE.PointLight(0xe3352e, 4.5 * scale, 8.5, 2);
  redEdge.position.set(-2.3, 0.2, 1.7);

  const warmRim = new THREE.PointLight(0xffca73, 9.5 * scale, 11, 2);
  warmRim.position.set(1.8, -0.32, 2.4);

  const ambient = new THREE.AmbientLight(0xffffff, 0.19 * scale);
  scene.add(key, coolFill, frontFill, redEdge, warmRim, ambient);
  return [key, coolFill, frontFill, redEdge, warmRim, ambient];
}

function createFallbackLogo(hexGeometry) {
  const group = new THREE.Group();
  group.name = "fallback-logo";

  const logoMaterials = [
    new THREE.MeshBasicMaterial({ color: 0xf0473f, transparent: true, opacity: 1 }),
    new THREE.MeshBasicMaterial({ color: 0x31404d, transparent: true, opacity: 0.98 }),
  ];

  const offsets = [
    [0.34, 0.34, -0.06],
    [0.34, -0.34, -0.08],
  ];

  offsets.forEach((offset, index) => {
    const mesh = new THREE.Mesh(hexGeometry, logoMaterials[index]);
    mesh.position.set(offset[0], offset[1], offset[2]);
    group.add(mesh);
  });

  group.position.set(0.04, 0.72, 0);
  group.scale.setScalar(0.72);
  return { group, materials: logoMaterials };
}

function createParticleBurst(index, quality) {
  const count = quality.particleCount;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color(PARTICLE_COLORS[index] || PARTICLE_COLORS[0]);
  const accent = new THREE.Color(index === 5 ? "#fff1bd" : "#f4f0e7");

  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.04 + Math.random() * 1.42;
    const lift = (Math.random() - 0.45) * 0.28;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = LIQUID_Y + lift;
    positions[i * 3 + 2] = Math.sin(angle) * radius * 0.08 + (Math.random() - 0.5) * 0.08;

    const mixed = color.clone().lerp(accent, Math.random() * 0.42);
    colors[i * 3] = mixed.r;
    colors[i * 3 + 1] = mixed.g;
    colors[i * 3 + 2] = mixed.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: quality.lowEnd ? 0.018 : 0.025,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geometry, material);
  points.position.set(0, 0, 0.12);
  points.scale.setScalar(0.55);
  points.renderOrder = 3;
  return points;
}

function createEnvironment(renderer, scene, quality, render) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  let environmentTarget = null;
  let disposed = false;

  const applyRoomEnvironment = () => {
    if (disposed) return;
    environmentTarget = pmremGenerator.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = environmentTarget.texture;
    pmremGenerator.dispose();
    render();
  };

  if (!quality.useHDR) {
    applyRoomEnvironment();
  } else {
    new HDRLoader().load(
      HDRI_URL,
      (texture) => {
        if (disposed) {
          texture.dispose();
          return;
        }

        environmentTarget = pmremGenerator.fromEquirectangular(texture);
        texture.dispose();
        pmremGenerator.dispose();
        scene.environment = environmentTarget.texture;
        render();
      },
      undefined,
      applyRoomEnvironment,
    );
  }

  return {
    dispose() {
      disposed = true;
      environmentTarget?.dispose();
      pmremGenerator.dispose();
    },
  };
}

export function createIngotScene({ canvas, reducedMotion }) {
  const quality = getQualityProfile(reducedMotion);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#040404");
  scene.fog = new THREE.Fog("#040404", 6.5, 18);

  const renderer = createRenderer(canvas, quality);
  const clock = new THREE.Clock();
  const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
  camera.position.set(0, 0.18, 4.3);
  camera.lookAt(0, -0.08, 0);

  const renderTarget = new THREE.WebGLRenderTarget(1, 1, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    samples: quality.lowEnd ? 0 : 2,
  });
  renderTarget.texture.colorSpace = THREE.SRGBColorSpace;

  const lights = addStudioLighting(scene, quality);
  const material = createHexMaterial(quality);

  const hexGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.16, 6, 1, false);
  hexGeometry.rotateX(Math.PI / 2);
  hexGeometry.rotateZ(Math.PI / 6);
  hexGeometry.setAttribute("uv2", new THREE.BufferAttribute(hexGeometry.attributes.uv.array, 2));

  const fallingHex = new THREE.Mesh(hexGeometry.clone(), material);
  fallingHex.position.set(-0.16, 0.72, 0.08);
  fallingHex.rotation.z = 0;
  fallingHex.renderOrder = 4;
  scene.add(fallingHex);

  const originLogo = createFallbackLogo(hexGeometry);
  scene.add(originLogo.group);

  const waters = Array.from({ length: LIQUID_COUNT }, (_, index) =>
    createWaterSimulation({
      renderer,
      scene,
      sceneTexture: renderTarget.texture,
      quality,
      tint: PARTICLE_COLORS[index],
    }),
  );

  const particles = Array.from({ length: LIQUID_COUNT }, (_, index) => {
    const burst = createParticleBurst(index, quality);
    burst.visible = false;
    scene.add(burst);
    return burst;
  });

  const bufferSize = new THREE.Vector2();
  const liquidWorldYs = Array.from({ length: LIQUID_COUNT }, () => LIQUID_Y);
  const timeOrigin = performance.now();
  let environment = null;
  let disposed = false;
  let renderQueued = false;

  function syncRenderTargetSize() {
    renderer.getDrawingBufferSize(bufferSize);
    renderTarget.setSize(Math.max(1, bufferSize.x), Math.max(1, bufferSize.y));
  }

  function render() {
    if (disposed) return;

    renderQueued = false;
    const delta = Math.min(clock.getDelta(), 0.05);
    const time = (performance.now() - timeOrigin) * 0.001;

    if (!reducedMotion) {
      waters.forEach((water) => water.update(time, delta));
    }

    const waterVisibility = waters.map((water) => water.mesh.visible);
    waters.forEach((water) => {
      water.mesh.visible = false;
    });
    renderer.setRenderTarget(renderTarget);
    renderer.render(scene, camera);

    waters.forEach((water, index) => {
      water.mesh.visible = waterVisibility[index];
    });
    renderer.setRenderTarget(null);
    renderer.render(scene, camera);
  }

  function requestRender() {
    if (renderQueued || disposed) return;
    renderQueued = true;
    requestAnimationFrame(render);
  }

  function screenYToWorldY(screenY, targetZ = 0.03) {
    const height = canvas.clientHeight || window.innerHeight || 1;
    const ndcY = 1 - (screenY / height) * 2;
    const point = new THREE.Vector3(0, ndcY, 0.5).unproject(camera);
    const direction = point.sub(camera.position).normalize();
    const distance = (targetZ - camera.position.z) / direction.z;
    return camera.position.clone().add(direction.multiplyScalar(distance)).y;
  }

  function setLiquidScreenY(index, screenY) {
    const water = waters[index];
    const burst = particles[index];
    if (!water || !burst) return;

    const worldY = screenYToWorldY(screenY, water.mesh.position.z);
    liquidWorldYs[index] = worldY;

    water.setWorldY(worldY);
    burst.position.y = worldY - LIQUID_Y;
    return worldY;
  }

  function getLiquidWorldY(index) {
    return liquidWorldYs[index] ?? LIQUID_Y;
  }

  function triggerWaterImpact(index, options = {}) {
    const water = waters[index];
    const burst = particles[index];
    if (!water || reducedMotion) return;

    const tint = options.tint || PARTICLE_COLORS[index] || PARTICLE_COLORS[0];
    water.triggerImpact({
      x: options.x ?? fallingHex.position.x,
      z: options.z ?? 0,
      radius: options.radius ?? (index === LIQUID_COUNT - 1 ? 1.35 : 1.05),
      depth: options.depth ?? (index === LIQUID_COUNT - 1 ? 0.68 : 0.48),
      materialTint: tint,
    });

    if (burst) {
      burst.visible = true;
      burst.position.x = options.x ?? fallingHex.position.x;
      burst.position.z = 0.12;
    }

    requestRender();
  }

  function setWaterActive(index, alphaTarget) {
    waters[index]?.setActive(alphaTarget);
    requestRender();
  }

  function updateWater(delta) {
    if (reducedMotion) return;
    const time = (performance.now() - timeOrigin) * 0.001;
    waters.forEach((water) => water.update(time, delta));
    requestRender();
  }

  function resize() {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    const mobile = window.innerWidth < 768;

    renderer.setPixelRatio(quality.pixelRatio);
    renderer.setSize(width, height, false);
    syncRenderTargetSize();
    waters.forEach((water) => water.setViewport(bufferSize.x, bufferSize.y));

    camera.aspect = width / Math.max(height, 1);
    camera.position.set(0, mobile ? 0.08 : 0.16, mobile ? 5.0 : 4.28);
    camera.lookAt(0, mobile ? -0.12 : -0.08, 0);
    camera.updateProjectionMatrix();

    const scale = mobile ? 0.72 : 0.9;
    fallingHex.scale.setScalar(scale);
    originLogo.group.scale.multiplyScalar(1);
    requestRender();
  }

  applyMaterialState(material, "logo", quality);
  loadHexTextures(material, renderer, quality, render);
  environment = createEnvironment(renderer, scene, quality, render);
  resize();
  window.addEventListener("resize", resize, { passive: true });
  if (!reducedMotion) {
    renderer.setAnimationLoop(render);
  }

  return {
    scene,
    camera,
    renderer,
    fallingHex,
    ingot: fallingHex,
    material,
    quality,
    liquidY: LIQUID_Y,
    originLogo,
    get originLogoMaterials() {
      return originLogo.materials;
    },
    rippleUniforms: waters.map((water) => water.uniforms),
    waters,
    liquids: waters.map((water) => water.mesh),
    particles,
    setLiquidScreenY,
    getLiquidWorldY,
    triggerWaterImpact,
    setWaterActive,
    updateWater,
    render,
    resize,
    destroy() {
      disposed = true;
      renderer.setAnimationLoop(null);
      window.removeEventListener("resize", resize);
      environment?.dispose();
      renderTarget.dispose();
      hexGeometry.dispose();
      fallingHex.geometry.dispose();
      material.dispose();
      originLogo.materials.forEach((logoMaterial) => logoMaterial.dispose());
      waters.forEach((water) => water.dispose());
      renderer.dispose();
      particles.forEach((burst) => {
        burst.geometry.dispose();
        burst.material.dispose();
      });
      lights.forEach((light) => light.dispose?.());
    },
  };
}

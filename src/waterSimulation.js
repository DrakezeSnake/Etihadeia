import * as THREE from "three";
import { GPUComputationRenderer } from "three/examples/jsm/misc/GPUComputationRenderer.js";
import {
  WATER_BOUNDS,
  WATER_RESOLUTION,
  createWaterUniforms,
  waterFragmentShader,
  waterHeightFragmentShader,
  waterVertexShader,
} from "./waterShaders.js";

function fillHeightTexture(texture) {
  const data = texture.image.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 0;
    data[i + 1] = 0;
    data[i + 2] = 0;
    data[i + 3] = 1;
  }
}

export function createWaterSimulation({ renderer, scene, sceneTexture, quality, tint = "#d9dde3" }) {
  const gpuCompute = new GPUComputationRenderer(WATER_RESOLUTION, WATER_RESOLUTION, renderer);
  const heightTexture = gpuCompute.createTexture();
  fillHeightTexture(heightTexture);

  const heightVariable = gpuCompute.addVariable("textureHeight", waterHeightFragmentShader, heightTexture);
  gpuCompute.setVariableDependencies(heightVariable, [heightVariable]);
  heightVariable.material.uniforms.impactPoint = { value: new THREE.Vector2(10000, 10000) };
  heightVariable.material.uniforms.impactRadius = { value: 0.001 };
  heightVariable.material.uniforms.impactDepth = { value: 0 };
  heightVariable.material.uniforms.viscosity = { value: 0.982 };
  heightVariable.material.uniforms.damping = { value: 0.994 };
  heightVariable.material.uniforms.boundsX = { value: WATER_BOUNDS.x };
  heightVariable.material.uniforms.boundsZ = { value: WATER_BOUNDS.y };
  heightVariable.wrapS = THREE.ClampToEdgeWrapping;
  heightVariable.wrapT = THREE.ClampToEdgeWrapping;

  const error = gpuCompute.init();
  if (error) {
    console.warn(error);
  }

  const uniforms = createWaterUniforms(sceneTexture, quality, tint);
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    vertexShader: waterVertexShader,
    fragmentShader: waterFragmentShader,
    side: THREE.DoubleSide,
  });

  const geometry = new THREE.PlaneGeometry(WATER_BOUNDS.x, WATER_BOUNDS.y, 160, 34);
  geometry.rotateX(-Math.PI / 2);
  geometry.rotateZ(0.035);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, -0.08, 0.03);
  mesh.renderOrder = 2;
  mesh.visible = false;
  scene.add(mesh);

  const targetAlpha = { value: 0 };
  let impactFrames = 0;
  let computeAccumulator = 0;
  let disposed = false;

  function update(time, delta) {
    if (disposed) return;
    uniforms.time.value = time;
    uniforms.impactAge.value += delta;
    uniforms.waveBoost.value += (0 - uniforms.waveBoost.value) * Math.min(1, delta * 0.42);

    if (mesh.visible || targetAlpha.value > 0.001 || impactFrames > 0) {
      computeAccumulator += delta;
      if (computeAccumulator >= 1 / 28) {
        gpuCompute.compute();
        gpuCompute.compute();
        computeAccumulator = 0;
      }
      uniforms.heightmap.value = gpuCompute.getCurrentRenderTarget(heightVariable).texture;
      impactFrames = Math.max(0, impactFrames - 1);
    }

    const blend = Math.min(1, delta * 8);
    uniforms.alpha.value += (targetAlpha.value - uniforms.alpha.value) * blend;
    if (uniforms.alpha.value < 0.004 && targetAlpha.value === 0) {
      uniforms.alpha.value = 0;
      mesh.visible = false;
    }

    heightVariable.material.uniforms.impactPoint.value.set(10000, 10000);
    heightVariable.material.uniforms.impactDepth.value = 0;
    heightVariable.material.uniforms.impactRadius.value = 0.001;
  }

  function alignToScreenY(screenY, camera, canvas) {
    const height = canvas.clientHeight || window.innerHeight || 1;
    const ndcY = 1 - (screenY / height) * 2;
    const point = new THREE.Vector3(0, ndcY, 0.5).unproject(camera);
    const direction = point.sub(camera.position).normalize();
    const targetZ = mesh.position.z;
    const distance = (targetZ - camera.position.z) / direction.z;
    const worldPoint = camera.position.clone().add(direction.multiplyScalar(distance));
    mesh.position.y = worldPoint.y;
    return worldPoint.y;
  }

  function setWorldY(worldY) {
    mesh.position.y = worldY;
  }

  function triggerImpact({ x = 0, z = 0, radius = 1.0, depth = 0.42, materialTint, viscosity, damping, waveBoost } = {}) {
    mesh.visible = true;
    impactFrames = 180;
    targetAlpha.value = Math.max(targetAlpha.value, 1);
    heightVariable.material.uniforms.viscosity.value = viscosity ?? 0.972;
    heightVariable.material.uniforms.damping.value = damping ?? 0.988;
    heightVariable.material.uniforms.impactPoint.value.set(
      THREE.MathUtils.clamp(x, WATER_BOUNDS.x * -0.45, WATER_BOUNDS.x * 0.45),
      THREE.MathUtils.clamp(z, WATER_BOUNDS.y * -0.38, WATER_BOUNDS.y * 0.38),
    );
    heightVariable.material.uniforms.impactRadius.value = radius;
    heightVariable.material.uniforms.impactDepth.value = depth;
    uniforms.impactUv.value.set(
      THREE.MathUtils.clamp(x / WATER_BOUNDS.x + 0.5, 0.04, 0.96),
      THREE.MathUtils.clamp(z / WATER_BOUNDS.y + 0.5, 0.08, 0.92),
    );
    uniforms.impactAge.value = 0;
    uniforms.waveBoost.value = waveBoost ?? 0.92;
    if (materialTint) uniforms.tint.value.set(materialTint);
  }

  function setActive(alphaTarget) {
    targetAlpha.value = alphaTarget;
    if (alphaTarget > 0) mesh.visible = true;
  }

  function setViewport(width, height) {
    uniforms.viewport.value.set(Math.max(1, width), Math.max(1, height));
  }

  function dispose() {
    disposed = true;
    scene.remove(mesh);
    geometry.dispose();
    material.dispose();
    gpuCompute.dispose();
  }

  return {
    mesh,
    uniforms,
    update,
    alignToScreenY,
    setWorldY,
    triggerImpact,
    setActive,
    setViewport,
    dispose,
  };
}

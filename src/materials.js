import * as THREE from "three";

const TEXTURE_URLS = {
  rough: {
    map: new URL("../New 3d website/worn-metal/worn-medieval-armor_albedo.png", import.meta.url).href,
    normalMap: new URL("../New 3d website/worn-metal/worn-medieval-armor_normal-ogl.png", import.meta.url).href,
    roughnessMap: new URL("../New 3d website/worn-metal/worn-medieval-armor_roughness.png", import.meta.url).href,
    metalnessMap: new URL("../New 3d website/worn-metal/worn-medieval-armor_metallic.png", import.meta.url).href,
    aoMap: new URL("../New 3d website/worn-metal/worn-medieval-armor_ao.png", import.meta.url).href,
  },
  silver: {
    map: new URL("../New 3d website/silver-bl/silver-bl/silver_albedo.png", import.meta.url).href,
    normalMap: new URL("../New 3d website/silver-bl/silver-bl/silver_normal-ogl.png", import.meta.url).href,
    roughnessMap: new URL("../New 3d website/silver-bl/silver-bl/silver_roughness.png", import.meta.url).href,
    metalnessMap: new URL("../New 3d website/silver-bl/silver-bl/silver_metallic.png", import.meta.url).href,
    aoMap: new URL("../New 3d website/silver-bl/silver-bl/silver_ao.png", import.meta.url).href,
  },
  brass: {
    map: new URL("../New 3d website/dull-brass-bl/dull-brass_albedo.png", import.meta.url).href,
    normalMap: new URL("../New 3d website/dull-brass-bl/dull-brass_normal-ogl.png", import.meta.url).href,
    roughnessMap: new URL("../New 3d website/dull-brass-bl/dull-brass_roughness.png", import.meta.url).href,
    metalnessMap: new URL("../New 3d website/dull-brass-bl/dull-brass_metallic.png", import.meta.url).href,
    aoMap: new URL("../New 3d website/dull-brass-bl/dull-brass_ao.png", import.meta.url).href,
  },
  platinum: {
    map: new URL("../New 3d website/silver-bl/silver-bl/silver_albedo.png", import.meta.url).href,
    normalMap: new URL("../New 3d website/silver-bl/silver-bl/silver_normal-ogl.png", import.meta.url).href,
    roughnessMap: new URL("../New 3d website/silver-bl/silver-bl/silver_roughness.png", import.meta.url).href,
    metalnessMap: new URL("../New 3d website/silver-bl/silver-bl/silver_metallic.png", import.meta.url).href,
    aoMap: new URL("../New 3d website/silver-bl/silver-bl/silver_ao.png", import.meta.url).href,
  },
  gold: {
    map: new URL("../New 3d website/light-gold-bl/light-gold-bl/lightgold_albedo.png", import.meta.url).href,
    normalMap: new URL("../New 3d website/light-gold-bl/light-gold-bl/lightgold_normal-ogl.png", import.meta.url).href,
    roughnessMap: new URL("../New 3d website/light-gold-bl/light-gold-bl/lightgold_roughness.png", import.meta.url).href,
    metalnessMap: new URL("../New 3d website/light-gold-bl/light-gold-bl/lightgold_metallic.png", import.meta.url).href,
  },
};

const TEXTURE_STATES = {
  logo: "silver",
  rough: "rough",
  silver: "silver",
  brass: "brass",
  platinum: "platinum",
  gold: "gold",
};

export const MATERIAL_STATES = {
  logo: {
    color: "#d8d9dc",
    roughness: 0.42,
    metalness: 0.55,
    clearcoat: 0.18,
    clearcoatRoughness: 0.32,
    envMapIntensity: 1.3,
  },
  rough: {
    color: "#767a80",
    roughness: 0.68,
    metalness: 1,
    clearcoat: 0.16,
    clearcoatRoughness: 0.48,
    envMapIntensity: 1.5,
  },
  silver: {
    color: "#d9dde3",
    roughness: 0.13,
    metalness: 1,
    clearcoat: 0.72,
    clearcoatRoughness: 0.055,
    envMapIntensity: 2.35,
  },
  brass: {
    color: "#c99b58",
    roughness: 0.1,
    metalness: 1,
    clearcoat: 0.78,
    clearcoatRoughness: 0.045,
    envMapIntensity: 2.42,
  },
  platinum: {
    color: "#e6e2d9",
    roughness: 0.075,
    metalness: 1,
    clearcoat: 0.86,
    clearcoatRoughness: 0.035,
    envMapIntensity: 2.55,
  },
  gold: {
    color: "#f2c45e",
    roughness: 0.065,
    metalness: 1,
    clearcoat: 0.82,
    clearcoatRoughness: 0.032,
    envMapIntensity: 2.6,
  },
};

export const PARTICLE_COLORS = ["#9a9da3", "#d9dde3", "#c99b58", "#e6e2d9", "#f2c45e", "#f2c45e"];

export function createHexMaterial(quality) {
  const material = new THREE.MeshPhysicalMaterial({
    transparent: true,
    opacity: 1,
    color: MATERIAL_STATES.logo.color,
    metalness: MATERIAL_STATES.logo.metalness,
    roughness: MATERIAL_STATES.logo.roughness,
    clearcoat: quality.lowEnd ? 0.08 : MATERIAL_STATES.logo.clearcoat,
    clearcoatRoughness: MATERIAL_STATES.logo.clearcoatRoughness,
    envMapIntensity: quality.lowEnd ? 1.2 : MATERIAL_STATES.logo.envMapIntensity,
    sheen: quality.lowEnd ? 0 : 0.12,
    sheenColor: new THREE.Color("#fff1ca"),
    sheenRoughness: 0.5,
  });

  material.userData.textureSets = {};
  material.userData.state = "logo";
  return material;
}

function prepareTexture(texture, key, renderer) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2.4, 2.4);
  texture.offset.set(0.08, 0.17);
  texture.rotation = Math.PI * 0.08;
  texture.center.set(0.5, 0.5);
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy?.() || 8, 12);

  if (key === "map") {
    texture.colorSpace = THREE.SRGBColorSpace;
  } else {
    texture.colorSpace = THREE.NoColorSpace;
  }

  texture.needsUpdate = true;
  return texture;
}

export function loadHexTextures(material, renderer, quality, onLoad) {
  const loader = new THREE.TextureLoader();
  const states = Object.entries(TEXTURE_URLS);
  let pending = states.reduce((total, [, maps]) => total + Object.keys(maps).length, 0);

  states.forEach(([state, maps]) => {
    material.userData.textureSets[state] = {};
    Object.entries(maps).forEach(([key, url]) => {
      loader.load(
        url,
        (texture) => {
          material.userData.textureSets[state][key] = prepareTexture(texture, key, renderer);
          pending -= 1;
          if (pending === 0) {
            applyMaterialState(material, material.userData.state || "logo", quality);
            onLoad?.();
          }
        },
        undefined,
        () => {
          pending -= 1;
          if (pending === 0) onLoad?.();
        },
      );
    });
  });
}

export function applyMaterialTextureState(material, stateName, quality) {
  const textureState = TEXTURE_STATES[stateName] || stateName;
  const maps = material.userData.textureSets?.[textureState];
  const useMaps = maps && !quality?.lowEnd;

  material.map = useMaps ? maps.map || null : null;
  material.normalMap = useMaps ? maps.normalMap || null : null;
  material.roughnessMap = useMaps ? maps.roughnessMap || null : null;
  material.metalnessMap = useMaps ? maps.metalnessMap || null : null;
  material.aoMap = useMaps ? maps.aoMap || null : null;
  material.normalScale.set(stateName === "rough" ? 0.15 : 0.09, stateName === "rough" ? 0.15 : 0.09);
}

export function applyMaterialState(material, stateName, quality) {
  const state = MATERIAL_STATES[stateName] || MATERIAL_STATES.rough;
  applyMaterialTextureState(material, stateName, quality);
  material.color.set(state.color);
  material.roughness = state.roughness;
  material.metalness = state.metalness;
  material.clearcoat = state.clearcoat;
  material.clearcoatRoughness = state.clearcoatRoughness;
  material.envMapIntensity = state.envMapIntensity;
  material.opacity = 1;
  material.userData.state = stateName;
  material.needsUpdate = true;
}

export function stateTweenVars(material, stateName, quality) {
  const state = MATERIAL_STATES[stateName] || MATERIAL_STATES.rough;
  return {
    roughness: Math.max(state.roughness, quality.lowEnd ? 0.11 : 0),
    metalness: state.metalness,
    clearcoat: quality.lowEnd ? Math.min(state.clearcoat, 0.58) : state.clearcoat,
    clearcoatRoughness: state.clearcoatRoughness,
    envMapIntensity: quality.lowEnd ? Math.min(state.envMapIntensity, 1.85) : state.envMapIntensity,
  };
}

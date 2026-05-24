import * as THREE from "three";

export const WATER_BOUNDS = new THREE.Vector2(13.5, 1.8);
export const WATER_RESOLUTION = 128;

export const waterHeightFragmentShader = /* glsl */ `
  uniform vec2 impactPoint;
  uniform float impactRadius;
  uniform float impactDepth;
  uniform float viscosity;
  uniform float damping;
  uniform float boundsX;
  uniform float boundsZ;

  void main() {
    vec2 cellSize = 1.0 / resolution.xy;
    vec2 uv = gl_FragCoord.xy * cellSize;
    vec4 heightmapValue = texture2D(textureHeight, uv);

    vec4 north = texture2D(textureHeight, uv + vec2(0.0, cellSize.y));
    vec4 south = texture2D(textureHeight, uv + vec2(0.0, -cellSize.y));
    vec4 east = texture2D(textureHeight, uv + vec2(cellSize.x, 0.0));
    vec4 west = texture2D(textureHeight, uv + vec2(-cellSize.x, 0.0));

    float newHeight = ((north.x + south.x + east.x + west.x) * 0.5 - heightmapValue.y) * viscosity;
    newHeight *= damping;

    vec2 planePoint = (uv - 0.5) * vec2(boundsX, boundsZ);
    vec2 delta = planePoint - impactPoint;
    float distanceToImpact = length(delta);
    float depression = 1.0 - smoothstep(0.0, impactRadius * 0.46, distanceToImpact);
    float crest = exp(-pow((distanceToImpact - impactRadius * 0.62) / max(impactRadius * 0.16, 0.001), 2.0));
    float outerWake = exp(-pow((distanceToImpact - impactRadius * 1.02) / max(impactRadius * 0.24, 0.001), 2.0));
    newHeight += (crest * 1.35 + outerWake * 0.62 - depression * 1.18) * impactDepth;

    heightmapValue.y = heightmapValue.x;
    heightmapValue.x = newHeight;
    gl_FragColor = heightmapValue;
  }
`;

export const waterVertexShader = /* glsl */ `
  uniform sampler2D heightmap;
  uniform float amplitude;
  uniform float normalStrength;
  uniform vec2 bounds;
  uniform float resolutionSize;
  uniform vec2 impactUv;
  uniform float impactAge;
  uniform float waveBoost;

  varying vec2 vUv;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying float vHeight;
  varying float vCrest;
  varying float vVisibleWave;

  void main() {
    vUv = uv;
    vec2 cell = vec2(1.0 / resolutionSize);
    float h = texture2D(heightmap, uv).x;
    float left = texture2D(heightmap, uv - vec2(cell.x, 0.0)).x;
    float right = texture2D(heightmap, uv + vec2(cell.x, 0.0)).x;
    float down = texture2D(heightmap, uv - vec2(0.0, cell.y)).x;
    float up = texture2D(heightmap, uv + vec2(0.0, cell.y)).x;
    float left2 = texture2D(heightmap, uv - vec2(cell.x * 2.0, 0.0)).x;
    float right2 = texture2D(heightmap, uv + vec2(cell.x * 2.0, 0.0)).x;
    float down2 = texture2D(heightmap, uv - vec2(0.0, cell.y * 2.0)).x;
    float up2 = texture2D(heightmap, uv + vec2(0.0, cell.y * 2.0)).x;

    vec3 objectNormal = normalize(vec3(
      (left - right) * normalStrength,
      1.0,
      (down - up) * normalStrength
    ));

    vec3 transformed = position;
    vec2 waveDelta = (uv - impactUv) * vec2(2.05, 1.0);
    float waveDist = length(waveDelta);
    float travelingWave =
      sin(waveDist * 24.0 - impactAge * 2.45) *
      exp(-waveDist * 1.12) *
      smoothstep(0.0, 0.12, waveDist) *
      waveBoost * 0.88;
    float secondaryWave =
      sin((uv.x - impactUv.x) * 28.0 + (uv.y - 0.5) * 9.0 - impactAge * 1.72) *
      exp(-abs(uv.y - impactUv.y) * 3.2) *
      waveBoost * 0.22;
    float meniscus =
      exp(-pow(waveDist / 0.18, 2.0)) *
      sin(impactAge * 4.4) *
      waveBoost * 0.12;

    transformed.y += h * amplitude + travelingWave * 0.46 + secondaryWave * 0.2 - meniscus;
    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);

    vWorldPosition = worldPosition.xyz;
    vNormal = normalize(mat3(modelMatrix) * objectNormal);
    vHeight = h;
    vCrest = abs(h) * 0.72 + abs(left - right) * 2.8 + abs(down - up) * 2.8 + abs(left2 - right2) * 1.45 + abs(down2 - up2) * 1.45;
    vVisibleWave = abs(travelingWave) + abs(secondaryWave) * 0.75 + abs(meniscus) * 1.6;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

export const waterFragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D sceneTexture;
  uniform vec3 tint;
  uniform float alpha;
  uniform float time;
  uniform float refraction;
  uniform vec2 viewport;

  varying vec2 vUv;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying float vHeight;
  varying float vCrest;
  varying float vVisibleWave;

  void main() {
    vec2 screenUv = gl_FragCoord.xy / viewport;
    vec2 refractOffset = vNormal.xz * refraction * (0.45 + abs(vHeight) * 1.7);
    vec3 sceneColor = texture2D(sceneTexture, screenUv + refractOffset).rgb;

    float sideFade = 1.0 - smoothstep(0.42, 0.5, abs(vUv.x - 0.5));
    float bandFade = 1.0 - smoothstep(0.38, 0.5, abs(vUv.y - 0.5));
    float wake = smoothstep(0.006, 0.07, abs(vHeight));
    float visibleWave = smoothstep(0.018, 0.22, vVisibleWave);
    float crest = max(smoothstep(0.015, 0.22, vCrest), visibleWave);
    float slope = smoothstep(0.025, 0.22, length(vNormal.xz));
    float broadWave = smoothstep(0.52, 1.0, sin(vCrest * 26.0 + vUv.x * 7.0 - time * 0.72) * 0.5 + 0.5) * crest;
    float waveThread = smoothstep(0.62, 1.0, sin((vUv.x * 22.0 + vUv.y * 18.0) + time * 0.62) * 0.5 + 0.5);
    waveThread *= max(crest, max(wake, slope));

    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float fresnel = pow(1.0 - max(dot(normalize(vNormal), viewDir), 0.0), 3.0);
    vec3 glint = vec3(0.72, 0.82, 0.9) * (fresnel * 0.36 + crest * 0.18 + visibleWave * 0.24 + slope * 0.18 + waveThread * 0.18 + broadWave * 0.16);
    vec3 caustic = tint * (wake * 0.32 + crest * 0.24 + visibleWave * 0.22 + slope * 0.16 + waveThread * 0.15 + broadWave * 0.13);
    vec3 liquid = mix(sceneColor, tint * 0.28, 0.16 + fresnel * 0.14) + glint + caustic;

    float body = smoothstep(0.0, 0.14, abs(vHeight));
    float surfaceAlpha = alpha * sideFade * max(body * 0.12 + wake * 0.24, max(visibleWave * 0.34, max(crest * 0.32 + broadWave * 0.18, max(slope * 0.2, waveThread * 0.18)))) * bandFade;
    surfaceAlpha *= 0.56;
    gl_FragColor = vec4(liquid, surfaceAlpha);
  }
`;

export function createWaterUniforms(sceneTexture, quality, tint = "#d9dde3") {
  return {
    heightmap: { value: null },
    sceneTexture: { value: sceneTexture },
    tint: { value: new THREE.Color(tint) },
    alpha: { value: 0 },
    time: { value: 0 },
    refraction: { value: quality.lowEnd ? 0.024 : 0.042 },
    viewport: { value: new THREE.Vector2(1, 1) },
    amplitude: { value: quality.lowEnd ? 0.62 : 0.96 },
    normalStrength: { value: quality.lowEnd ? 34 : 58 },
    bounds: { value: WATER_BOUNDS.clone() },
    resolutionSize: { value: WATER_RESOLUTION },
    impactUv: { value: new THREE.Vector2(0.5, 0.5) },
    impactAge: { value: 100 },
    waveBoost: { value: 0 },
  };
}

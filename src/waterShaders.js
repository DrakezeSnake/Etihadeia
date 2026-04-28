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
    float phase = clamp(length(delta) * 3.14159265 / max(impactRadius, 0.001), 0.0, 3.14159265);
    float impact = (cos(phase) + 1.0) * 0.5;
    impact *= 1.0 - smoothstep(0.0, impactRadius, length(delta));
    newHeight -= impact * impactDepth;

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

  varying vec2 vUv;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying float vHeight;

  void main() {
    vUv = uv;
    vec2 cell = vec2(1.0 / resolutionSize);
    float h = texture2D(heightmap, uv).x;
    float left = texture2D(heightmap, uv - vec2(cell.x, 0.0)).x;
    float right = texture2D(heightmap, uv + vec2(cell.x, 0.0)).x;
    float down = texture2D(heightmap, uv - vec2(0.0, cell.y)).x;
    float up = texture2D(heightmap, uv + vec2(0.0, cell.y)).x;

    vec3 objectNormal = normalize(vec3(
      (left - right) * normalStrength,
      1.0,
      (down - up) * normalStrength
    ));

    vec3 transformed = position;
    transformed.y += h * amplitude;
    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);

    vWorldPosition = worldPosition.xyz;
    vNormal = normalize(mat3(modelMatrix) * objectNormal);
    vHeight = h;
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

  void main() {
    vec2 screenUv = gl_FragCoord.xy / viewport;
    vec2 refractOffset = vNormal.xz * refraction * (0.45 + abs(vHeight) * 1.7);
    vec3 sceneColor = texture2D(sceneTexture, screenUv + refractOffset).rgb;

    float sideFade = 1.0 - smoothstep(0.42, 0.5, abs(vUv.x - 0.5));
    float bandFade = 1.0 - smoothstep(0.38, 0.5, abs(vUv.y - 0.5));
    float wake = smoothstep(0.018, 0.18, abs(vHeight));
    float horizon = 1.0 - smoothstep(0.0, 0.028, abs(vUv.y - 0.5));
    float waveThread = smoothstep(0.82, 1.0, sin((vUv.x * 44.0 + vUv.y * 9.0) + time * 1.4) * 0.5 + 0.5);
    waveThread *= smoothstep(0.0, 0.34, abs(vHeight));

    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float fresnel = pow(1.0 - max(dot(normalize(vNormal), viewDir), 0.0), 3.0);
    vec3 glint = vec3(0.82, 0.9, 0.96) * (fresnel * 0.72 + horizon * 0.52 + waveThread * 0.46);
    vec3 caustic = tint * (wake * 0.86 + waveThread * 0.38);
    vec3 liquid = mix(sceneColor, tint * 0.48, 0.3 + fresnel * 0.24) + glint + caustic;

    float body = smoothstep(0.0, 0.42, abs(vHeight));
    float surfaceAlpha = alpha * sideFade * max(horizon * 0.56, max(body * 0.36 + wake * 1.2, waveThread * 0.72)) * bandFade;
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
    refraction: { value: quality.lowEnd ? 0.012 : 0.02 },
    viewport: { value: new THREE.Vector2(1, 1) },
    amplitude: { value: quality.lowEnd ? 0.44 : 0.72 },
    normalStrength: { value: quality.lowEnd ? 26 : 46 },
    bounds: { value: WATER_BOUNDS.clone() },
    resolutionSize: { value: WATER_RESOLUTION },
  };
}

import * as THREE from "three";

export const LIQUID_PLANE_SIZE = new THREE.Vector2(13.5, 1.8);

export const refractionVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

export const refractionFragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uSceneTexture;
  uniform float uTime;
  uniform float uStrength;
  uniform vec2 uPlaneSize;
  uniform float uFrequency;
  uniform float uSpeed;
  uniform float uRefraction;
  uniform float uTint;
  uniform float uAlpha;
  uniform vec3 uTintColor;

  varying vec2 vUv;
  varying vec3 vWorldPosition;

  void main() {
    vec2 uv = vUv;
    vec2 plane = (uv - 0.5) * uPlaneSize;
    float dist = length(plane);
    float horizontalFalloff = 1.0 - smoothstep(uPlaneSize.x * 0.36, uPlaneSize.x * 0.5, abs(plane.x));

    float waveA = sin(dist * uFrequency - uTime * uSpeed);
    float waveB = sin((abs(plane.x) * 2.3 + abs(plane.y) * 7.0) * uFrequency * 0.42 - uTime * uSpeed * 1.7);
    float travelA = sin(plane.x * uFrequency * 0.55 + plane.y * 7.0 - uTime * uSpeed * 1.35);
    float travelB = sin(plane.x * uFrequency * -0.37 + plane.y * 10.5 - uTime * uSpeed * 1.85);
    float travelC = sin((plane.x + plane.y * 0.42) * uFrequency * 0.82 - uTime * uSpeed * 0.92);
    float contact = exp(-dist * 1.85);
    float longWake = sin(abs(plane.x) * uFrequency * 0.22 - uTime * uSpeed * 0.8) * exp(-abs(plane.y) * 3.2);
    float traveling = (travelA * 0.34 + travelB * 0.26 + travelC * 0.18) * exp(-abs(plane.y) * 2.25);
    float energy = (waveA * 0.52 + waveB * 0.28 + traveling * 1.15 + contact * 1.1 + longWake * 0.55) * horizontalFalloff * uStrength;

    vec2 direction = normalize(plane + vec2(0.0001));
    vec2 tangent = vec2(1.0, 0.0);
    vec2 waveFlow = normalize(direction * 0.55 + tangent * (travelA + travelB) * 0.45);
    vec2 distortedUV = uv + waveFlow * energy * uRefraction / uPlaneSize;
    vec4 refracted = texture2D(uSceneTexture, distortedUV);

    float line = 1.0 - smoothstep(0.0, 0.018, abs(plane.y));
    float rippleInk = smoothstep(0.008, 0.18, abs(energy));
    float waveLines = smoothstep(0.88, 1.0, abs(travelA * 0.54 + travelB * 0.46)) * exp(-abs(plane.y) * 1.45) * horizontalFalloff;
    vec3 liquidTint = mix(vec3(0.012, 0.014, 0.014), uTintColor, uTint);
    vec3 glint = vec3(0.82, 0.9, 0.94) * (line * 0.4 + waveLines * 0.28);
    vec3 chroma = uTintColor * (abs(energy) * 0.58 + waveLines * 0.18);

    float alpha = uAlpha * max(max(line * 0.42, rippleInk), waveLines * 0.72);
    gl_FragColor = vec4(mix(refracted.rgb, liquidTint, uTint * 0.45) + glint + chroma, alpha);
  }
`;

export function createRippleUniforms(sceneTexture, quality, tintColor = "#d9dde3") {
  return {
    uTime: { value: 0 },
    uStrength: { value: 0 },
    uSceneTexture: { value: sceneTexture },
    uPlaneSize: { value: LIQUID_PLANE_SIZE.clone() },
    uFrequency: { value: quality.lowEnd ? 8.0 : 11.5 },
    uSpeed: { value: quality.lowEnd ? 2.0 : 2.95 },
    uRefraction: { value: quality.lowEnd ? 0.34 : 0.52 },
    uTint: { value: quality.lowEnd ? 0.24 : 0.38 },
    uTintColor: { value: new THREE.Color(tintColor) },
    uAlpha: { value: 0 },
  };
}

export function createRefractionMaterial(uniforms) {
  return new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    vertexShader: refractionVertexShader,
    fragmentShader: refractionFragmentShader,
    side: THREE.DoubleSide,
  });
}

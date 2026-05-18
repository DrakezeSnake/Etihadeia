import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import heroLogoUrl from "../etihadia 3D logo.obj?url";

/**
 * 3D logo in the footer (brand column). Lazy-init when scrolled into view.
 */
export function initFooter3dLogo() {
  const stage = document.querySelector("[data-footer-3d-logo]");
  if (!stage) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let started = false;

  function build() {
    if (started) return;
    started = true;

    const px = stage.classList.contains("footer__3d-logo--brand") ? 176 : 140;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    // On-axis camera; slightly closer z + higher mesh scale so the logo fills the square canvas (0.72 left too much empty margin).
    camera.position.set(0, 0, 4.35);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    stage.appendChild(renderer.domElement);

    const logoRoot = new THREE.Group();
    logoRoot.rotation.set(-0.1, -0.42, 0.06);
    scene.add(logoRoot);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(3.2, 3.8, 4.8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xe32219, 2.1);
    rimLight.position.set(-3.8, 1.6, 2.8);
    scene.add(rimLight);

    const fillLight = new THREE.HemisphereLight(0xffffff, 0x201d1f, 1.5);
    scene.add(fillLight);

    function resize() {
      const w = px;
      const h = px;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }

    function applyMaterials(object) {
      const silverMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x8c8f8d,
        metalness: 0.78,
        roughness: 0.34,
        clearcoat: 0.35,
        clearcoatRoughness: 0.24,
      });
      const redMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xa90008,
        metalness: 0.72,
        roughness: 0.28,
        clearcoat: 0.58,
        clearcoatRoughness: 0.2,
      });
      const graphiteMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x111315,
        metalness: 0.76,
        roughness: 0.32,
        clearcoat: 0.32,
        clearcoatRoughness: 0.24,
      });

      object.traverse(function (child) {
        if (!child.isMesh) return;
        child.geometry.computeVertexNormals();
        const materialName = child.material && child.material.name;
        if (/001/.test(materialName)) child.material = redMaterial;
        else if (/002/.test(materialName)) child.material = silverMaterial;
        else child.material = graphiteMaterial;
      });

      const box = new THREE.Box3().setFromObject(object);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);
      object.position.sub(center);
      const maxAxis = Math.max(size.x, size.y, size.z) || 1;
      object.scale.setScalar((2.0 / maxAxis) * 1.02);
    }

    const loader = new OBJLoader();
    loader.load(
      heroLogoUrl,
      function (object) {
        applyMaterials(object);
        logoRoot.add(object);

        const frameBox = new THREE.Box3().setFromObject(logoRoot);
        const frameCenter = new THREE.Vector3();
        frameBox.getCenter(frameCenter);
        logoRoot.position.sub(frameCenter);

        resize();

        const start = performance.now();
        function tick() {
          if (!prefersReducedMotion) {
            const t = (performance.now() - start) / 1000;
            logoRoot.rotation.y = -0.42 + Math.sin(t * 0.55) * 0.18;
            logoRoot.rotation.x = -0.1 + Math.sin(t * 0.41) * 0.06;
          }
          renderer.render(scene, camera);
          if (!prefersReducedMotion) requestAnimationFrame(tick);
        }
        tick();
      },
      undefined,
      function () {
        stage.classList.add("is-empty");
      }
    );

    window.addEventListener("resize", resize, { passive: true });
  }

  if (prefersReducedMotion) {
    build();
    return;
  }

  const io = new IntersectionObserver(
    function (entries) {
      if (entries.some((e) => e.isIntersecting)) {
        build();
        io.disconnect();
      }
    },
    { rootMargin: "160px", threshold: 0.01 }
  );
  io.observe(stage);
}

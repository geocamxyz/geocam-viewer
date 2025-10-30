import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AmbientLight,
  PointLight,
  BackSide,
  TextureLoader,
  Mesh,
  Group,
  Cache,
  SphereGeometry,
  MeshBasicMaterial,
  Matrix4,
  Color,
  CanvasTexture
} from "./three.module.js";
import { AjaxTextureLoader } from "./ajax-texture-loader.js";
import { OBJLoader2 } from "./OBJLoader2.js";
import { PromiseManager } from "./PromiseManager.js";
import { node, injectStyle } from "./utilities.js";
import { store } from "./store.js";
import { enhanceImage } from "./image-enhancer.js";

const DEFAULT_EXPOSURE_US = 600;
const DEFAULT_GAIN_BOOST = 8;
const DEFAULT_LINEAR_GAIN = Math.pow(10, DEFAULT_GAIN_BOOST / 20);
const BRIGHTNESS_GAMMA = 2.0;
const DEFAULT_SHOT_INFO = {
  exposure_us: [
    DEFAULT_EXPOSURE_US,
    DEFAULT_EXPOSURE_US,
    DEFAULT_EXPOSURE_US
  ],
  gain_boost: [DEFAULT_GAIN_BOOST, DEFAULT_GAIN_BOOST, DEFAULT_GAIN_BOOST]
};

const dbToLinearGain = (value) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return DEFAULT_LINEAR_GAIN;
  }
  // Gain is provided in dB; convert to a linear multiplier.
  return Math.pow(10, numeric / 20);
};

const normalizeShotTriplet = (value, fallback) => {
  if (Array.isArray(value)) {
    return [0, 1, 2].map((idx) => {
      const numeric = Number(value[idx]);
      return Number.isFinite(numeric) && numeric > 0 ? numeric : fallback;
    });
  }

  if (typeof value === "number") {
    const numeric = Number(value);
    if (Number.isFinite(numeric) && numeric > 0) {
      return [numeric, numeric, numeric];
    }
  }

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return normalizeShotTriplet(parsed, fallback);
    } catch (err) {
      // ignore parse errors and fall through to default
    }
  }

  return [
    fallback,
    fallback,
    fallback
  ];
};

const normalizeShotInfo = (info) => {
  if (!info || typeof info !== "object") {
    return {
      exposure_us: DEFAULT_SHOT_INFO.exposure_us.slice(),
      gain_boost: DEFAULT_SHOT_INFO.gain_boost.slice()
    };
  }

  return Object.assign({}, info, {
    exposure_us: normalizeShotTriplet(info.exposure_us, DEFAULT_EXPOSURE_US),
    gain_boost: normalizeShotTriplet(info.gain_boost, DEFAULT_GAIN_BOOST)
  });
};

const computeShotBrightnessFactors = (info) => {
  const exposures = (info && info.exposure_us) || DEFAULT_SHOT_INFO.exposure_us;
  const gains = (info && info.gain_boost) || DEFAULT_SHOT_INFO.gain_boost;
  const target = DEFAULT_EXPOSURE_US * DEFAULT_LINEAR_GAIN;

  return [0, 1, 2].map((idx) => {
    const exposure = Number(exposures[idx]);
    const gain = Number(gains[idx]);
    const safeExposure =
      Number.isFinite(exposure) && exposure > 0 ? exposure : DEFAULT_EXPOSURE_US;
    const safeGainDb =
      Number.isFinite(gain) && gain >= DEFAULT_GAIN_BOOST
        ? gain
        : DEFAULT_GAIN_BOOST;
    const linearGain = dbToLinearGain(safeGainDb);
    const denom = safeExposure * linearGain;
    const factor = denom > 0 ? target / denom : 1;
    return factor > 0 ? factor : 1;
  });
};

const combineBrightnessWithShot = (
  baseBrightness,
  shotInfo,
  physicalFactors = computeShotBrightnessFactors(shotInfo)
) => {
  const baseArray = Array.isArray(baseBrightness)
    ? baseBrightness.slice(0, 3)
    : [baseBrightness, baseBrightness, baseBrightness];

  while (baseArray.length < 3) {
    baseArray.push(baseArray[0] ?? 1);
  }

  return baseArray.map((value, idx) => {
    const numeric = Number(value);
    const safeValue =
      Number.isFinite(numeric) && numeric > 0 ? numeric : 1;
    const physicalFactor = Math.max(physicalFactors[idx], 0);
    const gammaAdjusted =
      physicalFactor > 0
        ? Math.pow(physicalFactor, 1 / BRIGHTNESS_GAMMA)
        : 0;
    return safeValue * gammaAdjusted;
  });
};

export const viewer = function (el, options = {}) {
  const STYLES = `
    .geocam-viewer {
      position: relative;
      z-index: 1;
    }

    .geocam-viewer-hidden {
      display: none;
    }

    .geocam-viewer-control {
      pointer-events: auto;
    }

    .geocam-viewer-control-button {
      background-color: rgba(255,255,255,0.5);
      border-radius: 4px;
      border: 1px solid #666;
      color: rgba(0,0,0,0);
      width: 32px;
      height: 32px;
      display: block;
      background-size: cover;
      background-position: center;
      cursor: pointer;
    }

    .geocam-viewer-controls {
        position: absolute;
        pointer-events: none;
        display: flex;
        left: 16px;
        top: 16px;
        right: 16px;
        bottom: 16px;
        --gap: 16px;
    }

    .geocam-viewer-controls-left, .geocam-viewer-controls-right {
      display: flex;
      flex-justify: space-between;
      flex-direction: column;
    }

    .geocam-viewer-controls-left-top, .geocam-viewer-controls-right-top {
      display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--gap);
        row-gap: 8px;
    }

    .geocam-viewer-controls-left-bottom,   .geocam-viewer-controls-right-bottom {
      display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: var(--gap);
        row-gap: 8px;
    }

    .geocam-viewer-controls-center {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .geocam-viewer-controls-top,  .geocam-viewer-controls-bottom {
      display: flex;
      justify-content: center;
      gap: var(--gap);
    } 

    .geocam-viewer-controls-mid {
      flex: 1;
    }

    .geocam-enhancement-controls {
      background-color: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      padding: 10px;
      color: #fff;
      font-size: 12px;
      min-width: 180px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(6px);
    }

    .geocam-enhancement-controls.is-disabled {
      opacity: 0.55;
    }

    .geocam-enhancement-controls h4 {
      margin: 0 0 8px 0;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    .geocam-enhancement-controls label {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 8px;
    }

    .geocam-enhancement-controls label:last-child {
      margin-bottom: 0;
    }

    .geocam-enhancement-controls span.value-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .geocam-enhancement-controls .value {
      font-variant-numeric: tabular-nums;
      font-weight: 600;
    }

    .geocam-enhancement-controls input[type="range"] {
      width: 100%;
      accent-color: #4da3ff;
    }

    .geocam-enhancement-controls .toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .geocam-enhancement-controls .toggle-row label {
      margin: 0;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }

    .geocam-enhancement-controls input[type="checkbox"] {
      accent-color: #4da3ff;
    }

    .geocam-enhancement-toggle {
      background-color: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      color: #fff;
      padding: 6px 10px;
      cursor: pointer;
      font-size: 12px;
      margin-bottom: 8px;
      transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    }

    .geocam-enhancement-toggle:hover,
    .geocam-enhancement-toggle.is-active {
      background-color: rgba(77, 163, 255, 0.8);
      border-color: rgba(77, 163, 255, 0.9);
      color: #0b0b0b;
    }

    .geocam-enhancement-toggle:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(77, 163, 255, 0.4);
    }

    .geocam-enhancement-controls input[type="range"]:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  `;

  injectStyle("geocam-viewer", STYLES);

  const loadingOpacity =  0.5;

  const DEFAULTS = {
    aspect: 2, // standard defaults if not overridden by rigConfig
    near: 0.1,
    fov: 35,
    far: 100,
    scale: 1,
    xOffset: 0,
    yOffset: 0,
    rotationOffsets: [0, 0, 0],
    hemispheres: [
      () => sphereMesh(0),
      () => sphereMesh(1),
      () => sphereMesh(2),
    ],
  };

  const PLUGINS = options.plugins,
    promiseManager = new PromiseManager();

  const enhancementDefaults = {
    enabled: true,
    sharpenAmount: 0.5,
    saturationBoost: 0.5,
    vignetteAmount: 5,
    vignettePower: 5,
    forceCpu: false
  };

  const enhancement =
    options.enhancement === false
      ? { enabled: false }
      : Object.assign({}, enhancementDefaults, options.enhancement || {});

  const STORES = {
    shot: store(),
    capture: store(),
    fov: store(),
    yaw: store(0),
    rotation: store([]),
    brightness: store([]),
    facing: store(0),
    horizon: store(0),
    urls: store([]),
    visible: store(false),
    hemispheres: store([]),
    shotInfo: store(normalizeShotInfo())
  };

  const progressors = [store(1), store(1), store(1)]; // progress not in STORES as we wont be updating URLs - essentially it's readonly
  const newStoreAdded = store(window.performance.now()); // also not in stores as we don't want this part of urls either

  let initialized = false,
    controls,
    camera,
    rigConfig,
    wrapper,
    top = 0,
    left = 0,
    width = 0,
    height = 0,
    meshes = [null, null, null],
    meshGroup = null,
    requiresProjectMatrixUpdate = false,
    animId,
    abortContoller,
    useZUp = true,
    unsubs = [],
    unsubUrls,
    unsubVisible,
    unsubHemispheres,
    lastHemispheresString = JSON.stringify([]),
    lastUrlString = JSON.stringify([]), // match what empty url store will be stringified
    enhancementControlElements = null,
    enhancementUpdateTimer = null,
    enhancementPanelVisible = true;

  const degreesToEuler = function (deg) {
    //degrees clockwise from north
    //euler angles anti-clockwise from east in radias
    // add 90 to deg, turn into radians then change sign
    return (270 - deg) * (Math.PI / 180);
  };

  const sphereMesh = function (index) {
    const geometry = new SphereGeometry(
      12,
      32,
      32,
      0,
      2 * Math.PI,
      (Math.PI / 3) * index,
      Math.PI / 3
    );
    const material = new MeshBasicMaterial({});
    const mesh = new Mesh(geometry, material);
    mesh.material.side = BackSide;
    return mesh;
  };

  const setWrapperSize = function () {
    wrapper.style.top = top + "px";
    wrapper.style.left = left + "px";
    wrapper.style.width = width + "px";
    wrapper.style.height = height + "px";
  };

  const resizeRendererToDisplaySize = function (renderer, forceResize = false) {
    const canvas = renderer.domElement;
    const displayWidth = wrapper.parentNode.clientWidth;
    const displayHeight = wrapper.parentNode.clientHeight;
    
    // Use clientWidth/clientHeight for comparison to avoid pixel ratio confusion
    const needResize = forceResize || 
      Math.abs(canvas.clientWidth - displayWidth) > 1 ||
      Math.abs(canvas.clientHeight - displayHeight) > 1;
      
    if (needResize) {
      // console.log('Resizing canvas:', { displayWidth, displayHeight });
      
      // Set the wrapper size to match the display size
      wrapper.style.width = displayWidth + "px";
      wrapper.style.height = displayHeight + "px";
      
      // Let Three.js handle EVERYTHING including pixel ratio and CSS styles
      // This is crucial for raycasting to work correctly
      renderer.setSize(displayWidth, displayHeight, true);
      
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      requiresProjectMatrixUpdate = true;

      // console.log('Canvas after resize:', {
      //   clientWidth: canvas.clientWidth,
      //   clientHeight: canvas.clientHeight,
      //   width: canvas.width,
      //   height: canvas.height
      // });
    }
    return needResize;
  };

  const render = (timestamp) => {
    if (!rendering) return

    resizeRendererToDisplaySize(renderer)

    const lat = STORES.horizon();
    const lon = STORES.facing();
    //const yaw = STORES.yaw();
    //const rotation = STORES.rotation();
    //console.log('rotation=', rotation);
    STORES.facing((360 + lon) % 360); //convert any negatives into postive values
    STORES.horizon(Math.max(-85, Math.min(85, lat)));
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = lon * (Math.PI / 180);
    const radius = 10;
    if (useZUp) {
      const x = radius * Math.sin(phi) * Math.sin(theta);
      const z = -radius * Math.cos(phi);
      const y = radius * Math.sin(phi) * Math.cos(theta);
      camera.up.set(0, 0, 1);
      camera.lookAt(x, y, z);
      //camera.lookAt(0, 10, 0);
    } else {
      //const x = radius * Math.sin(phi) * Math.cos(theta);
      //const y = -radius * Math.cos(phi);
      //const z = radius * Math.sin(phi) * Math.sin(theta);
      const x = radius * Math.sin(phi) * Math.sin(theta);
      const y = -radius * Math.cos(phi);
      const z = -radius * Math.sin(phi) * Math.cos(theta);
      camera.up.set(0, 1, 0);
      camera.lookAt(x, y, z);
    }

    if (requiresProjectMatrixUpdate) {
      camera.updateProjectionMatrix();
      requiresProjectMatrixUpdate = false;
    }
    renderer.render(scene, camera);
    animId = requestAnimationFrame((ts) => render(ts));
  };

  const loadMesh = function (h) {
    return new Promise((resolve, reject) => {
      if (typeof h === "function") {
        resolve(h());
      } else {
        const objLoader = new OBJLoader2();
        objLoader.load(h, (root) => {
          // var texture = new TextureLoader().load('./0.jpg');
          //scene.add(root);
          root.traverse(function (child) {
            // aka setTexture
            if (child instanceof Mesh) {
              // child.material.map = texture;
              child.material.side = 2;
              child.material.flatShading = true;
              child.material.transparent = true;
              child.rotation.set(0, 0, 0);
              resolve(child);
            }
          });
        });
      }
    });
  };

  const loadMeshes = function (hemispheres) {
    console.log("loadMeshes")
    return promiseManager.add(
      new Promise((resolve, reject) => {
        let incomplete = meshes.length;
        hemispheres.forEach((h, i) => {
          loadMesh(h).then((m) => {
            meshes[i] = m;
            incomplete -= 1;
            if (incomplete <= 0) resolve();
          });
        });
      })
    );
  };

  const clearScene = function () {
    meshes.forEach((m, i) => (m ? meshGroup.remove(m) : null));
    scene.remove(meshGroup);
    renderer.renderLists.dispose();
    meshes = [null, null, null];
    meshGroup = null;
  };

  const unsubscribeUrls = function () {
    if (unsubUrls) {
      unsubUrls();
      unsubUrls = null;
    }
  };

  const unsubscribeHemispheres = function () {
    if (unsubHemispheres) {
      unsubHemispheres();
      unsubHemispheres = null;
    }
  };

  const merge = function (base, ...rest) {
    return Object.assign(base, ...rest);
  };

  const disposeTexture = function (texture) {
    if (texture && typeof texture.dispose === "function") {
      texture.dispose();
    }
  };

  const copyTextureSettings = function (source, target) {
    if (!source || !target) return;
    target.wrapS = source.wrapS;
    target.wrapT = source.wrapT;
    target.magFilter = source.magFilter;
    target.minFilter = source.minFilter;
    target.anisotropy = source.anisotropy;
    target.flipY = source.flipY;
    target.rotation = source.rotation;
    target.repeat.copy(source.repeat);
    target.offset.copy(source.offset);
    if (target.center && source.center) target.center.copy(source.center);
    if ("encoding" in source) target.encoding = source.encoding;
    target.generateMipmaps = source.generateMipmaps;
  };

  let enhancementJobCounter = 0;

  const enhanceTextureForMesh = function (mesh, texture, url, baseImage) {
    if (!enhancement.enabled || !mesh || !mesh.material) return;

    const sourceTexture =
      texture ||
      (mesh.userData ? mesh.userData.rawTexture : null) ||
      mesh.material.map;

    const image =
      baseImage ||
      (sourceTexture && sourceTexture.image) ||
      (texture && texture.image);

    if (!image || !image.width || !image.height) return;

    const jobId = ++enhancementJobCounter;
    mesh.userData.enhancementJob = jobId;
    mesh.userData.enhancementUrl = url;
    mesh.userData.enhancementOptions = {
      sharpenAmount: enhancement.sharpenAmount,
      saturationBoost: enhancement.saturationBoost,
      vignetteAmount: enhancement.vignetteAmount
    };

    enhanceImage(image, Object.assign({}, enhancement))
      .then((canvas) => {
        if (
          mesh.userData.enhancementJob !== jobId ||
          mesh.userData.currentUrl !== url
        ) {
          return;
        }

        const enhancedTexture = new CanvasTexture(canvas);
        const baseTexture =
          sourceTexture ||
          (mesh.userData ? mesh.userData.rawTexture : null) ||
          mesh.material.map;

        if (baseTexture) {
          copyTextureSettings(baseTexture, enhancedTexture);
        }
        enhancedTexture.needsUpdate = true;

        const previousMap = mesh.material.map;
        const previousEnhanced = mesh.userData.enhancedTexture;

        mesh.userData.enhancedTexture = enhancedTexture;
        mesh.material.map = enhancedTexture;
        mesh.material.needsUpdate = true;

        if (
          previousMap &&
          previousMap !== enhancedTexture &&
          previousMap !== mesh.userData.rawTexture
        ) {
          disposeTexture(previousMap);
        }

        if (
          previousEnhanced &&
          previousEnhanced !== previousMap &&
          previousEnhanced !== enhancedTexture &&
          previousEnhanced !== mesh.userData.rawTexture
        ) {
          disposeTexture(previousEnhanced);
        }
      })
      .catch((err) => {
        console.warn("Image enhancement failed", { url, err });
      });
  };

  const reprocessAllMeshes = function () {
    if (!enhancement.enabled) return;
    meshes.forEach((mesh) => {
      if (
        mesh &&
        mesh.material &&
        mesh.material.map &&
        mesh.userData &&
        mesh.userData.originalImage &&
        mesh.userData.currentUrl
      ) {
        enhanceTextureForMesh(
          mesh,
          mesh.userData.rawTexture || mesh.material.map,
          mesh.userData.currentUrl,
          mesh.userData.originalImage
        );
      }
    });
  };

  const revertAllMeshesToOriginal = function () {
    meshes.forEach((mesh) => {
      if (!mesh || !mesh.material || !mesh.userData) return;

      const rawTexture = mesh.userData.rawTexture;
      const currentMap = mesh.material.map;

      if (rawTexture && currentMap !== rawTexture) {
        mesh.material.map = rawTexture;
        mesh.material.needsUpdate = true;
        if (
          currentMap &&
          currentMap !== rawTexture &&
          currentMap !== mesh.userData.enhancedTexture
        ) {
          disposeTexture(currentMap);
        }
      }

      if (
        mesh.userData.enhancedTexture &&
        mesh.userData.enhancedTexture !== rawTexture
      ) {
        disposeTexture(mesh.userData.enhancedTexture);
      }

      mesh.userData.enhancedTexture = null;
      mesh.userData.enhancementJob = null;
    });
  };

  const scheduleEnhancementUpdate = function () {
    if (!enhancement.enabled) return;
    if (enhancementUpdateTimer) {
      clearTimeout(enhancementUpdateTimer);
    }
    enhancementUpdateTimer = setTimeout(() => {
      enhancementUpdateTimer = null;
      reprocessAllMeshes();
    }, 180);
  };

  const formatValue = (value) => (Math.round(value * 100) / 100).toFixed(2);

  const updateEnhancementControlsEnabledState = function () {
    if (!enhancementControlElements) return;
    const {
      enableInput,
      forceInput,
      vignettePowerInput,
      setSlidersDisabled,
      updateLabels,
      panel
    } = enhancementControlElements;

    if (enableInput) {
      enableInput.checked = !!enhancement.enabled;
    }

    if (forceInput) {
      forceInput.checked = !!enhancement.forceCpu;
      forceInput.disabled = !enhancement.enabled;
    }

    if (vignettePowerInput) {
      vignettePowerInput.disabled = !enhancement.enabled;
    }

    if (setSlidersDisabled) {
      setSlidersDisabled(!enhancement.enabled);
    }

    if (panel) {
      panel.classList.toggle("is-disabled", !enhancement.enabled);
    }

    if (updateLabels) {
      updateLabels();
    }
  };

  const updateEnhancementPanelVisibility = function () {
    if (!enhancementControlElements) return;
    const { panel, toggleButton } = enhancementControlElements;
    if (panel) {
      panel.style.display = enhancementPanelVisible ? "" : "none";
    }
    if (toggleButton) {
      toggleButton.classList.toggle("is-active", enhancementPanelVisible);
      toggleButton.setAttribute(
        "aria-expanded",
        enhancementPanelVisible ? "true" : "false"
      );
      toggleButton.textContent = enhancementPanelVisible ? "Enhance ▲" : "Enhance ▼";
    }
  };

  const setEnhancementEnabled = function (enabled, { reprocess = true } = {}) {
    const normalized = !!enabled;
    const changed = enhancement.enabled !== normalized;
    enhancement.enabled = normalized;

    if (enhancementUpdateTimer) {
      clearTimeout(enhancementUpdateTimer);
      enhancementUpdateTimer = null;
    }

    updateEnhancementControlsEnabledState();

    if (!normalized) {
      meshes.forEach((mesh) => {
        if (mesh && mesh.userData) {
          mesh.userData.enhancementJob = null;
        }
      });

      if (changed || reprocess) {
        revertAllMeshesToOriginal();
      }
    } else if (changed || reprocess) {
      reprocessAllMeshes();
    }
  };

  const createEnhancementControls = function () {
    const target = controls.querySelector(".geocam-viewer-controls-right-top");
    if (!target) return;

    const toggleButton = node(
      "BUTTON",
      {
        class: "geocam-viewer-control geocam-enhancement-toggle",
        type: "button"
      },
      "Enhance"
    );

    toggleButton.addEventListener("click", () => {
      enhancementPanelVisible = !enhancementPanelVisible;
      updateEnhancementPanelVisibility();
    });

    target.appendChild(toggleButton);

    const panel = node("DIV", { class: "geocam-viewer-control geocam-enhancement-controls" });
    panel.innerHTML = `
      <h4>Image Enhance</h4>
      <div class="toggle-row">
        <label>
          <input type="checkbox" data-role="enabled">
          <span>Enabled</span>
        </label>
        <label>
          <input type="checkbox" data-role="force-cpu">
          <span>Force CPU</span>
        </label>
      </div>
      <label>
        <span class="value-row">
          <span>Sharpen</span>
          <span class="value" data-role="sharpen-value"></span>
        </span>
        <input type="range" min="0" max="1" step="0.05" data-role="sharpen">
      </label>
      <label>
        <span class="value-row">
          <span>Saturation</span>
          <span class="value" data-role="saturation-value"></span>
        </span>
        <input type="range" min="-0.3" max="0.6" step="0.02" data-role="saturation">
      </label>
      <label>
        <span class="value-row">
          <span>Vignette</span>
          <span class="value" data-role="vignette-value"></span>
        </span>
        <input type="range" min="0" max="20" step="0.05" data-role="vignette">
      </label>
      <label>
        <span class="value-row">
          <span>Vignette Power</span>
          <span class="value" data-role="vignette-power-value"></span>
        </span>
        <input type="range" min="1" max="6" step="0.1" data-role="vignette-power">
      </label>
    `;

    const enableInput = panel.querySelector('[data-role="enabled"]');
    const forceInput = panel.querySelector('[data-role="force-cpu"]');
    const sharpenInput = panel.querySelector('[data-role="sharpen"]');
    const saturationInput = panel.querySelector('[data-role="saturation"]');
    const vignetteInput = panel.querySelector('[data-role="vignette"]');
    const vignettePowerInput = panel.querySelector('[data-role="vignette-power"]');
    const sharpenValue = panel.querySelector('[data-role="sharpen-value"]');
    const saturationValue = panel.querySelector('[data-role="saturation-value"]');
    const vignetteValue = panel.querySelector('[data-role="vignette-value"]');
    const vignettePowerValue = panel.querySelector('[data-role="vignette-power-value"]');

    const updateLabels = () => {
      sharpenValue.textContent = formatValue(enhancement.sharpenAmount);
      saturationValue.textContent = formatValue(enhancement.saturationBoost);
      vignetteValue.textContent = formatValue(enhancement.vignetteAmount);
      vignettePowerValue.textContent = formatValue(enhancement.vignettePower);
    };

    const sliders = [sharpenInput, saturationInput, vignetteInput, vignettePowerInput];
    const setSlidersDisabled = (disabled) => {
      sliders.forEach((input) => {
        if (input) input.disabled = disabled;
      });
      panel.classList.toggle("is-disabled", disabled);
    };

    enableInput.checked = enhancement.enabled;
    forceInput.checked = enhancement.forceCpu;
    sharpenInput.value = enhancement.sharpenAmount;
    saturationInput.value = enhancement.saturationBoost;
    vignetteInput.value = enhancement.vignetteAmount;
    vignettePowerInput.value = enhancement.vignettePower;
    updateLabels();

    enableInput.addEventListener("change", (event) => {
      setEnhancementEnabled(event.target.checked);
    });

    forceInput.addEventListener("change", (event) => {
      enhancement.forceCpu = !!event.target.checked;
      if (enhancement.enabled) {
        reprocessAllMeshes();
      }
    });

    sharpenInput.addEventListener("input", (event) => {
      enhancement.sharpenAmount = parseFloat(event.target.value);
      updateLabels();
      scheduleEnhancementUpdate();
    });

    saturationInput.addEventListener("input", (event) => {
      enhancement.saturationBoost = parseFloat(event.target.value);
      updateLabels();
      scheduleEnhancementUpdate();
    });

    vignetteInput.addEventListener("input", (event) => {
      enhancement.vignetteAmount = parseFloat(event.target.value);
      updateLabels();
      scheduleEnhancementUpdate();
    });

    vignettePowerInput.addEventListener("input", (event) => {
      enhancement.vignettePower = parseFloat(event.target.value);
      updateLabels();
      scheduleEnhancementUpdate();
    });

    target.appendChild(panel);
    enhancementControlElements = {
      panel,
      toggleButton,
      enableInput,
      forceInput,
      vignettePowerInput,
      sharpenInput,
      saturationInput,
      vignetteInput,
      setSlidersDisabled,
      updateLabels
    };

    updateEnhancementControlsEnabledState();
    updateEnhancementPanelVisibility();
  };

  const loadHemispheres = async function (hemispheres) {
    let hs;
    if (
      hemispheres &&
      hemispheres.length > 0 &&
      lastHemispheresString !== (hs = JSON.stringify(hemispheres))
    ) {
      lastHemispheresString = hs;
      unsubscribeUrls();
      if (meshGroup) clearScene();
      await loadMeshes(hemispheres);
      meshGroup = new Group();
      meshes.forEach((m, i) => {
        meshGroup.add(m);
        m.name = `${i}`;
      });
      scene.add(meshGroup);
      unsubUrls = STORES.urls((urls) => {
        const urlString = JSON.stringify(urls);
        if (urlString !== lastUrlString && urls.length > 0) {
          lastUrlString = urlString;
          display(urls, STORES.brightness());
        }
      });
    }
  };

  const setup = async function (config = {}) {
    // reset default for each rig load - they'll be overridden by rigConfig if necessary
    unsubscribeHemispheres();
    clearScene();
    rigConfig = merge(DEFAULTS, config);
    const fov = STORES.fov() || rigConfig.fov;
    STORES.fov(fov);
    camera = new PerspectiveCamera(
      fov,
      rigConfig.aspect,
      rigConfig.near,
      rigConfig.far
    );
    unsubHemispheres = STORES.hemispheres(loadHemispheres); //will call immediately to set up hemispheres
    resizeRendererToDisplaySize(renderer, true)
    return this;
  };

  const resetProgress = function() {
    meshes.forEach((mesh, i) => {
     if (mesh && mesh.material) mesh.material.opacity = loadingOpacity;
    });
    progressors.forEach((p) => p(0));
  }

  const loadImageToMesh = function (mesh, url, complete, progress, error, brightness) {
    mesh.material.opacity = loadingOpacity;
    const i = parseInt(mesh.name);
    progressors[i](0);
    mesh.userData = mesh.userData || {};
    const previousMap = mesh.material.map;
    const previousRawTexture = mesh.userData.rawTexture;
    const previousEnhancedTexture = mesh.userData.enhancedTexture;
    mesh.userData.currentUrl = url;
    mesh.userData.originalImage = null;
    mesh.userData.enhancementJob = null;
    new AjaxTextureLoader(abortContoller).load(
      url,
      (texture) => {
        window.tex = texture;
        mesh.material.map = texture;
        window.mat = mesh.material;
        mesh.material.opacity = 1;
        texture.repeat.set(rigConfig.scale, rigConfig.scale);
        texture.offset.set(rigConfig.yOffset, rigConfig.xOffset);
        texture.rotation = rigConfig.rotationOffsets[i];
        mesh.material.needsUpdate = true;
        mesh.userData.originalImage = texture.image;
        mesh.userData.rawTexture = texture;
        mesh.userData.enhancedTexture = null;
        progressors[i](1);
        if (previousMap && previousMap !== texture) {
          disposeTexture(previousMap);
        }
        if (
          previousRawTexture &&
          previousRawTexture !== texture &&
          previousRawTexture !== previousMap
        ) {
          disposeTexture(previousRawTexture);
        }
        if (
          previousEnhancedTexture &&
          previousEnhancedTexture !== texture &&
          previousEnhancedTexture !== previousMap
        ) {
          disposeTexture(previousEnhancedTexture);
        }

        enhanceTextureForMesh(mesh, texture, url, mesh.userData.originalImage);
        if (complete) complete(mesh, url);
      },
      (e) => {
        const proportion = e.loaded / e.total;
        if (progress) progress(mesh, url, proportion);
        // progressors[i](proportion);
      },
      (err) => {
        if (error) {
          error(mesh, url, err);
        } else {
          console.error("error loading image", err, i, url);
        }
      },
      brightness
    );
  };

  const loadImageOrImagesToMesh = function (
    mesh,
    images,
    allComplete,
    firstImageComplete,
    brightness
  ) {
    const ensureBrightness = (value) => {
      const numeric = Number(value);
      return Number.isFinite(numeric) && numeric > 0 ? numeric : 1;
    };

    const nextImage = function (mesh, images, j, meshBrightness) {
      const i = parseInt(mesh.name);
      let incomplete = images.length - j;
      const url = images[j];
      loadImageToMesh(
        mesh,
        url,
        () => {
          progressors[i]((j + 1) / images.length);
          // STORES.images[i](url);
          if (firstImageComplete && incomplete == images.length)
            firstImageComplete(mesh, url);
          // incomplete -= 1;
          if (allComplete && incomplete <= 1) allComplete(mesh, url);
          j += 1;
          if (j < images.length) {
            nextImage(mesh, images, j, meshBrightness);
          }
        },
        (mesh, url, proportion) => {
          progressors[i]((j + proportion) / images.length);
        },
        null, // nothing to do on error
        meshBrightness
      );
    };

    const i = parseInt(mesh.name);
    const meshBrightness = ensureBrightness(brightness);
    if (Array.isArray(images)) {
      nextImage(mesh, images, 0, meshBrightness);
    } else {
      const url = images; // just a single url
      loadImageToMesh(
        mesh,
        url,
        () => {
          progressors[i](1);
          if (firstImageComplete) firstImageComplete(mesh, url);
          if (allComplete) allComplete(mesh, images);
        },
        (mesh, url, proportion) => {
          progressors[i](proportion);
        },
        null, // nothing to do on error
        meshBrightness // assume a single brightness value too.
      );
    }
  };

  const plugin = function (plugIn) {
    PLUGINS.push(plugIn);
    if (initialized) {
      plugIn.init.apply(plugIn, [this]);
    }
  };

  const setRotation = function () {
    const r = STORES.rotation();
    var rotMat = new Matrix4();
    if (r.length == 9) {
      rotMat.set(
        r[0],
        r[1],
        r[2],
        0,
        r[3],
        r[4],
        r[5],
        0,
        r[6],
        r[7],
        r[8],
        0,
        0,
        0,
        0,
        1
      );
    } else {
      rotMat.makeRotationY(degreesToEuler(STORES.yaw() - 90));
    }

    if (useZUp) {
      var rotX90 = new Matrix4();
      rotX90.makeRotationX(Math.PI / 2);
      rotMat.premultiply(rotX90);
    }

    meshGroup.setRotationFromMatrix(rotMat);
  };

  const display = async function (images, brightness = [1, 1, 1]) {
    if (abortContoller) abortContoller.abort();
    abortContoller = new AbortController();
    let incomplete = meshes.length;
    let firstIncomplete = meshes.length;
    setRotation();
    const currentShotInfo = normalizeShotInfo(
      STORES.shotInfo ? STORES.shotInfo() : null
    );
    let baseBrightness;
    if (Array.isArray(brightness)) {
      baseBrightness = brightness;
    } else if (typeof brightness === "number") {
      baseBrightness = [brightness, brightness, brightness];
    } else {
      baseBrightness = [1, 1, 1];
    }
    const physicalFactors = computeShotBrightnessFactors(currentShotInfo);
    const effectiveBrightness = combineBrightnessWithShot(
      baseBrightness,
      currentShotInfo,
      physicalFactors
    );

    console.log("Viewer: applying shot brightness", {
      shotId: currentShotInfo.id ?? null,
      exposure_us: currentShotInfo.exposure_us,
      gain_db: currentShotInfo.gain_boost,
      gain_linear: currentShotInfo.gain_boost.map(dbToLinearGain),
      physicalFactors,
      baseBrightness,
      effectiveBrightness
    });
    meshes.forEach((mesh, i) => {
      const imgs = images[i];
      loadImageOrImagesToMesh(
        mesh,
        imgs,
        (mesh, url) => {
          incomplete -= 1;
          if (incomplete <= 0) {
            return true;
          }
        },
        (mesh, url) => {
          firstIncomplete -= 1;
        },
        effectiveBrightness[i]
      );
    });
    render();
  };

  const show = function (
    urls,
    yaw,
    hemispheres,
    rotation,
    brightStr,
    shotInfo = null
  ) {
    const brightness =
      brightStr && typeof brightStr === "string"
        ? JSON.parse(brightStr)
        : brightStr || [1, 1, 1];
    const normalizedShotInfo = normalizeShotInfo(shotInfo);
    STORES.shotInfo(normalizedShotInfo);
    //convenience method to update images and yaw at the same time.
    if (hemispheres && hemispheres.length > 0) STORES.hemispheres(hemispheres);
    const rot = typeof rotation === "string" ? JSON.parse(rotation) : rotation;
    STORES.rotation(rot || []);
    const normalizedBrightness = Array.isArray(brightness)
      ? brightness.slice(0, 3)
      : [brightness, brightness, brightness];
    while (normalizedBrightness.length < 3) {
      normalizedBrightness.push(
        normalizedBrightness[0] !== undefined ? normalizedBrightness[0] : 1
      );
    }
    STORES.brightness(normalizedBrightness);
    STORES.yaw(parseFloat(yaw || 0)); //NB no subscription on YAW so this will only be updated when new images have loaded.
    STORES.urls(urls);
    STORES.visible(true);
    resizeRendererToDisplaySize(renderer, true)
  };

  const reload = function(brightness) {
    const urls = STORES.urls();
    if (urls && (urls.length >= meshes.length)) {
    if (brightness) {
      const parsed = JSON.parse(brightness);
      STORES.brightness(Array.isArray(parsed) ? parsed : [parsed, parsed, parsed]);
    }
     display(urls, STORES.brightness());
    }
    resizeRendererToDisplaySize(renderer, true)
  }

  const hide = function () {
    STORES.visible(false);
    STORES.shot(null);
  };

  let rendering = false
  let renderer = new WebGLRenderer({preserveDrawingBuffer:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  let scene = new Scene();
  //let light = new PointLight();
  let light = new AmbientLight(0xffffff, 1.0);
  scene.add(light);
  const rect = el.getBoundingClientRect();
  wrapper = node("DIV", { class: "geocam-viewer" });
  controls = node("DIV", { class: "geocam-viewer-controls" });

  controls.append(
    node(
      "DIV",
      { class: "geocam-viewer-controls-left" },
      `<div class="geocam-viewer-controls-left-top"></div><div class="geocam-viewer-controls-left-bottom"></div>`
    )
  );
  const mid = node(
    "DIV",
    { class: "geocam-viewer-controls-center" },
    `<div class="geocam-viewer-controls-top"></div><div class="geocam-viewer-controls-mid"></div><div class="geocam-viewer-controls-bottom"></div>`
  );
  mid.append(node("DIV"));
  mid.append(node("DIV"));
  mid.append(node("DIV"));
  controls.append(mid);
  controls.append(
    node(
      "DIV",
      { class: "geocam-viewer-controls-right" },
      `<div class="geocam-viewer-controls-right-top"></div><div class="geocam-viewer-controls-right-bottom"></div>`
    )
  );

  createEnhancementControls();

  wrapper.appendChild(controls);
  width = rect.width;
  height = rect.height;
  setWrapperSize();
  wrapper.appendChild(renderer.domElement);
  unsubVisible = STORES.visible((v) => {
    // immediate return for this store registration will add the hidden class to wrapper before it's inserted in dom
    v
      ? wrapper.classList.remove("geocam-viewer-hidden")
      : wrapper.classList.add("geocam-viewer-hidden");
    rendering = v
  });
  el.appendChild(wrapper);

  unsubs.push(
    STORES.fov((v) => {
      if (camera && v !== null) {
        camera.fov = v;
        requiresProjectMatrixUpdate = true;
      }
    })
  );

  const destroy = function () {
    // Cancel animation frame
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
    
    // Stop rendering
    rendering = false;
    
    // Abort any ongoing requests
    if (abortContoller) {
      abortContoller.abort();
      abortContoller = null;
    }
    
    // Unsubscribe from all stores
    unsubs.forEach((u) => u());
    unsubs = [];
    
    if (unsubVisible) {
      unsubVisible();
      unsubVisible = null;
    }
    
    unsubscribeUrls();
    unsubscribeHemispheres();
    
    // Clean up plugins
    PLUGINS.forEach((p) => {
      if ("destroy" in p) {
        p.destroy.apply(p);
      }
    });
    
    // Dispose of Three.js resources
    if (meshes) {
      meshes.forEach((mesh) => {
        if (mesh) {
          // Dispose of geometry
          if (mesh.geometry) {
            mesh.geometry.dispose();
          }
          
          // Dispose of material and texture
          if (mesh.material) {
            if (mesh.material.map) {
              mesh.material.map.dispose();
            }
            mesh.material.dispose();
          }
          
          if (mesh.userData) {
            if (
              mesh.userData.rawTexture &&
              mesh.userData.rawTexture !== mesh.material.map
            ) {
              disposeTexture(mesh.userData.rawTexture);
            }
            if (
              mesh.userData.enhancedTexture &&
              mesh.userData.enhancedTexture !== mesh.material.map
            ) {
              disposeTexture(mesh.userData.enhancedTexture);
            }
            mesh.userData.rawTexture = null;
            mesh.userData.enhancedTexture = null;
          }
          
          // Remove from scene
          if (meshGroup) {
            meshGroup.remove(mesh);
          }
        }
      });
      meshes = [null, null, null];
    }
    
    // Clean up mesh group
    if (meshGroup) {
      scene.remove(meshGroup);
      meshGroup = null;
    }
    
    // Dispose of lights
    if (light) {
      scene.remove(light);
      light = null;
    }
    
    // Clean up scene
    if (scene) {
      // Dispose of all remaining objects in scene
      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => {
              if (material.map) material.map.dispose();
              material.dispose();
            });
          } else {
            if (object.material.map) object.material.map.dispose();
            object.material.dispose();
          }
        }
      });
      
      // Remove all children from scene
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
      scene = null;
    }
    
    // Dispose of renderer and clear WebGL context
    if (renderer) {
      renderer.renderLists.dispose();
      renderer.dispose();
      
      // Force lose WebGL context to free GPU memory
      const gl = renderer.getContext();
      if (gl && gl.getExtension) {
        const loseContext = gl.getExtension('WEBGL_lose_context');
        if (loseContext) {
          loseContext.loseContext();
        }
      }
      
      // Remove canvas from DOM
      if (renderer.domElement && wrapper) {
        wrapper.removeChild(renderer.domElement);
      }
      renderer = null;
    }
    
    // Clear Three.js cache
    Cache.clear();
    
    // Clean up DOM
    if (wrapper && el) {
      el.removeChild(wrapper);
      wrapper = null;
    }
    
    // Clear references
    camera = null;
    controls = null;
    rigConfig = null;
    
    // Clear stores - call each store with null to clear subscriptions
    Object.keys(STORES).forEach(key => {
      if (STORES[key] && typeof STORES[key] === 'function') {
        try {
          STORES[key](null);
        } catch (e) {
          // ignore errors
        }
      }
    });
  };

  const addStore = function (name, val = null) {
    if (STORES[name] || this[name]) {
      console.info(
        `geocam viewer attempt to add store that already exists`,
        name
      );
      if (STORES[name]() === null && val !== null) STORES[name](val);
    } else {
      STORES[name] = store(val);
      this[name] = STORES[name];
      newStoreAdded(window.performance.now());
    }
    return STORES[name];
  };

  const addControl = function (el, location, options = {}) {
    // adds a control to the controls panel.  Must be a standard dom element and location is top, bottom, left-top, left-bottom, right-top, right-bottom
    const parent = document.getElementsByClassName(
      `geocam-viewer-controls-${location}`
    )[0];
    if (parent) {
      el.classList.add("geocam-viewer-control");
      if (options.after) {
options.after.parentNode.insertBefore(el, options.after.nextSibling);
      } else {
      options.prepend ? parent.prepend(el) : parent.appendChild(el);
      }
    } else {
      console.error(
        "geocam viewer unable to add control no matching location",
        el,
        location
      );
    }
  };

  /* interface */
  this.setup = setup;
  this.show = show;
  this.reload = reload;
  this.hide = hide;
  this.resetProgress = resetProgress;
  this.plugin = plugin;
  this.destroy = destroy;
  Object.defineProperty(this, 'camera', {
    get: function() { return camera; },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(this, 'meshGroup', { 
    get: function() { return meshGroup; },
    enumerable: true,
    configurable: true
  });
  this.renderer = renderer;
  this.element = el;
  this.wrapper = wrapper;
  this.done = promiseManager.done;
  this.progress = progressors;
  this.newstoreadded = newStoreAdded;
  this.stores = STORES;
  for (let s in STORES) {
    this[s] = STORES[s];
  }
  this.store = addStore;
  this.addControl = addControl;
  /* end of interface */

  PLUGINS.forEach((p) => {
    if ("init" in p) {
      p.init.apply(p, [this]);
    }
  });

  setup(options.config); // set up after plugins have done their configs

  render(); // resize to fit

  initialized = true;
};

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
} from "./three.module.js";
import { AjaxTextureLoader } from "./ajax-texture-loader.js";
import { OBJLoader2 } from "./OBJLoader2.js";
import { PromiseManager } from "./PromiseManager.js";
import { node, injectStyle } from "./utilities.js";
import { store } from "./store.js";

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
    lastUrlString = JSON.stringify([]); // match what empty url store will be stringified

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
    const width = wrapper.parentNode.clientWidth;
    const height = wrapper.parentNode.clientHeight;
    const needResize =
      forceResize || canvas.width !== width || canvas.height !== height;
    if (needResize) {
      wrapper.style.width = width + "px";
      wrapper.style.height = height + "px";
      renderer.setSize(width, height, false);
    }
    return needResize;
  };

  const render = (forceResize = false) => {
    if (resizeRendererToDisplaySize(renderer, forceResize)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      requiresProjectMatrixUpdate = true;
    }

    const lat = STORES.horizon();
    const lon = STORES.facing();
    //const yaw = STORES.yaw();
    //const rotation = STORES.rotation();
    //console.log('rotation=', rotation);

    STORES.facing((360 + lon) % 360); //convert any negatives into postive values
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
    animId = requestAnimationFrame(render);
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
        progressors[i](1);
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
    const nextImage = function (mesh, images, j, brightness) {
      const i = parseInt(mesh.name);
      let incomplete = images.length - j;
      const url = images[j];
      const bright = 1;
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
            nextImage(mesh, images, j);
          }
        },
        (mesh, url, proportion) => {
          progressors[i]((j + proportion) / images.length);
        },
        null, // nothing to do on error
        bright
      );
    };

    const i = parseInt(mesh.name);
    if (Array.isArray(images)) {
      nextImage(mesh, images, 0);
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
        brightness // assume a single brightness value too.
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

  const display = async function (images, brightness = [1,1,1]) {
    if (abortContoller) abortContoller.abort();
    abortContoller = new AbortController();
    let incomplete = meshes.length;
    let firstIncomplete = meshes.length;
    setRotation();
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
        brightness[i]
      );
    });
    render();
  };

  const show = function (urls, yaw, hemispheres, rotation, brightStr) {
    const brightness = brightStr ? JSON.parse(brightStr) : [1, 1, 1];
    //convenience method to update images and yaw at the same time.
    if (hemispheres && hemispheres.length > 0) STORES.hemispheres(hemispheres);
    const rot = typeof rotation === "string" ? JSON.parse(rotation) : rotation;
    STORES.rotation(rot || []);
    STORES.brightness(brightness);
    STORES.yaw(parseFloat(yaw || 0)); //NB no subscription on YAW so this will only be updated when new images have loaded.
    STORES.urls(urls);
    STORES.visible(true);
  };

  const reload = function(brightness) {
    const urls = STORES.urls();
    if (urls && (urls.length >= meshes.length)) {
    if (brightness) {
      STORES.brightness(JSON.parse(brightness));
    }
     display(urls, STORES.brightness());
    }
  }

  const hide = function () {
    STORES.visible(false);
    STORES.shot(null);
  };

  let renderer = new WebGLRenderer({preserveDrawingBuffer:true});
  renderer.setPixelRatio(window.devicePixelRatio);
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
    cancelAnimationFrame(animId);
    unsubs.forEach((u) => u());
    unsubVisible();
    unsubscribeUrls();
    PLUGINS.forEach((p) => {
      if ("destroy" in p) {
        p.destroy.apply(p);
      }
    });
    clearScene();
    scene = null;
    light = null;
    camera = null;
    wrapper.removeChild(renderer.domElement);
    el.removeChild(wrapper);
    renderer = null;
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
      options.prepend ? parent.prepend(el) : parent.appendChild(el);
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

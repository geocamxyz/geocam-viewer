import {
  enhanceImageData,
  normalizeEnhancementOptions
} from "./image-enhancement-core.js";

import { runWebGLPass } from "./image-enhancement-gl.js";

function ensureImageCanvas(image) {
  const width = image.width || image.videoWidth;
  const height = image.height || image.videoHeight;

  if (!width || !height) {
    throw new Error("Invalid image dimensions for enhancement");
  }

  if (image instanceof HTMLCanvasElement) {
    return { canvas: image, width, height };
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, width, height);
  return { canvas, width, height };
}

function runWebGLEnhancement(sourceCanvas, width, height, options) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const gl =
    canvas.getContext("webgl", { preserveDrawingBuffer: true }) ||
    canvas.getContext("experimental-webgl", { preserveDrawingBuffer: true });

  if (!gl) return null;

  try {
    runWebGLPass(gl, sourceCanvas, width, height, options, { flipTexture: true, readPixels: false });
    return canvas;
  } catch (err) {
    console.warn("WebGL enhancement failed, falling back to CPU", err);
    return null;
  }
}

function runCpuEnhancement(sourceCanvas, width, height, options) {
  const sourceCtx = sourceCanvas.getContext("2d");
  const sourceData = sourceCtx.getImageData(0, 0, width, height);
  const { data } = enhanceImageData(sourceData, width, height, options);

  const outputCanvas = document.createElement("canvas");
  outputCanvas.width = width;
  outputCanvas.height = height;
  const outCtx = outputCanvas.getContext("2d");
  const outImage = new ImageData(data, width, height);
  outCtx.putImageData(outImage, 0, 0);
  return outputCanvas;
}

function scheduleTask(callback) {
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(callback, { timeout: 50 });
  } else {
    setTimeout(() => callback({ didTimeout: false, timeRemaining: () => 0 }), 0);
  }
}

export function enhanceImage(image, providedOptions = {}) {
  const options = normalizeEnhancementOptions(providedOptions);

  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Image enhancement requires a browser environment"));
      return;
    }

    const { canvas: sourceCanvas, width, height } = ensureImageCanvas(image);

    scheduleTask(() => {
      try {
        let gpuCanvas = null;
        if (!options.forceCpu) {
          gpuCanvas = runWebGLEnhancement(sourceCanvas, width, height, options);
        }
        if (gpuCanvas) {
          resolve(gpuCanvas);
          return;
        }
        const cpuCanvas = runCpuEnhancement(sourceCanvas, width, height, options);
        resolve(cpuCanvas);
      } catch (err) {
        reject(err);
      }
    });
  });
}

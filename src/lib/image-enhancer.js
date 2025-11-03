const WebGLPrograms = {
  vertex: `
    attribute vec2 a_position;
    attribute vec2 a_texCoord;
    varying vec2 v_texCoord;

    void main() {
      v_texCoord = a_texCoord;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,
  fragment: `
    precision mediump float;

    uniform sampler2D u_image;
    uniform vec2 u_texelSize;
    uniform float u_sharpen;
    uniform float u_saturation;
    uniform float u_vignette;
    uniform float u_vignettePower;
    uniform vec2 u_vignetteOffset;
    uniform float u_toneMapAmount;
    uniform vec3 u_whiteBalance;
    uniform float u_shadowBoost;
    uniform float u_xRay;

    varying vec2 v_texCoord;

    vec3 sample(vec2 offset) {
      return texture2D(u_image, v_texCoord + offset * u_texelSize).rgb;
    }

    void main() {
      vec4 centerSample = texture2D(u_image, v_texCoord);
      vec3 center = centerSample.rgb;

      vec3 left = sample(vec2(-1.0, 0.0));
      vec3 right = sample(vec2(1.0, 0.0));
      vec3 up = sample(vec2(0.0, -1.0));
      vec3 down = sample(vec2(0.0, 1.0));
      vec3 upLeft = sample(vec2(-1.0, -1.0));
      vec3 upRight = sample(vec2(1.0, -1.0));
      vec3 downLeft = sample(vec2(-1.0, 1.0));
      vec3 downRight = sample(vec2(1.0, 1.0));

      float sharpen = max(u_sharpen, 0.0);
      float diagSharpen = sharpen * 0.25;

      vec3 color = center * (1.0 + 4.0 * sharpen + 4.0 * diagSharpen);
      color -= sharpen * (left + right + up + down);
      color -= diagSharpen * (upLeft + upRight + downLeft + downRight);

      float saturation = clamp(u_saturation, -0.95, 5.0);
      if (saturation != 0.0) {
        float avg = (color.r + color.g + color.b) / 3.0;
        color = vec3(avg) + (color - vec3(avg)) * (1.0 + saturation);
      }

      color *= u_whiteBalance;

      float shadowBoost = clamp(u_shadowBoost, 0.0, 1.0);
      float xRayStrength = clamp(u_xRay, 0.0, 1.0);
      if (xRayStrength > 0.0) {
        shadowBoost = max(shadowBoost, 0.85);
      }
      if (shadowBoost > 0.0) {
        float luminance = dot(color, vec3(0.299, 0.587, 0.114));
        float shadowWeight = pow(clamp(1.0 - luminance, 0.0, 1.0), 1.4);
        vec3 lifted = pow(max(color, vec3(0.0)), vec3(0.75));
        color = mix(color, lifted, shadowWeight * shadowBoost);
      }

      if (xRayStrength > 0.0) {
        float logFactor = 1.0 + 2.0 * xRayStrength;
        color = log2(1.0 + color * logFactor) / log2(1.0 + logFactor);
      }

      if (u_vignette != 0.0) {
        vec2 offsetCoord = vec2(0.5) + u_vignetteOffset;
        float dist = distance(v_texCoord, offsetCoord);
        float normalized = dist / 0.707106;
        float power = max(u_vignettePower, 0.0);
        float correction = 1.0 + u_vignette * pow(normalized, power);
        color *= max(correction, 0.0);
      }

      float toneAmount = clamp(u_toneMapAmount, 0.0, 1.0);
      if (toneAmount > 0.0) {
        float maxChannel = max(color.r, max(color.g, color.b));
        float highlight = max(maxChannel - 1.0, 0.0);
        if (highlight > 0.0) {
          float compression = 1.0 + toneAmount * highlight * 2.0;
          color /= compression;
          float luminance = dot(color, vec3(0.299, 0.587, 0.114));
          float desat = clamp(toneAmount * highlight, 0.0, 1.0);
          color = mix(color, vec3(luminance), desat * 0.5);
        }
      }

      color = clamp(color, 0.0, 1.0);

      gl_FragColor = vec4(color, centerSample.a);
    }
  `
};

const DEFAULT_OPTIONS = {
  sharpenAmount: 0.7,
  saturationBoost: 0.6,
  vignetteAmount: 3.0,
  vignettePower: 5.0,
  toneMapAmount: 0.3,
  forceCpu: false,
  autoWhiteBalanceEnabled: false,
  whiteBalanceGains: [1, 1, 1],
  shadowBoostAmount: 0,
  xRayEnabled: false
};

const WHITE_BALANCE_MIN_GAIN = 0.25;
const WHITE_BALANCE_MAX_GAIN = 4;

function sanitizeWhiteBalanceGains(options) {
  const source = Array.isArray(options.whiteBalanceGains)
    ? options.whiteBalanceGains
    : [1, 1, 1];

  const sanitized = [0, 1, 2].map((idx) => {
    const value = Number(source[idx]);
    if (!Number.isFinite(value) || value <= 0) return 1;
    return Math.min(WHITE_BALANCE_MAX_GAIN, Math.max(WHITE_BALANCE_MIN_GAIN, value));
  });

  if (!options.autoWhiteBalanceEnabled) {
    return [1, 1, 1];
  }

  return sanitized;
}

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

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Shader compile failed: ${info}`);
  }
  return shader;
}

function buildProgram(gl) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, WebGLPrograms.vertex);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, WebGLPrograms.fragment);

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    throw new Error(`Program link failed: ${info}`);
  }

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  return program;
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
    const program = buildProgram(gl);
    gl.viewport(0, 0, width, height);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
    gl.enableVertexAttribArray(texCoordLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sourceCanvas);

    const texelSizeLocation = gl.getUniformLocation(program, "u_texelSize");
    const sharpenLocation = gl.getUniformLocation(program, "u_sharpen");
    const saturationLocation = gl.getUniformLocation(program, "u_saturation");
    const vignetteLocation = gl.getUniformLocation(program, "u_vignette");
    const vignettePowerLocation = gl.getUniformLocation(program, "u_vignettePower");
    const vignetteOffsetLocation = gl.getUniformLocation(program, "u_vignetteOffset");
    const toneMapLocation = gl.getUniformLocation(program, "u_toneMapAmount");
    const whiteBalanceLocation = gl.getUniformLocation(program, "u_whiteBalance");
    const shadowBoostLocation = gl.getUniformLocation(program, "u_shadowBoost");
    const xRayLocation = gl.getUniformLocation(program, "u_xRay");

    gl.uniform2f(texelSizeLocation, 1 / width, 1 / height);
    const offsetX = Math.max(-0.5, Math.min(0.5, Number(options.vignetteOffsetX) || 0));
    const offsetY = Math.max(-0.5, Math.min(0.5, Number(options.vignetteOffsetY) || 0));
    const toneAmount = Math.max(0, Math.min(1, Number(options.toneMapAmount) || 0));
    gl.uniform1f(sharpenLocation, options.sharpenAmount);
    gl.uniform1f(saturationLocation, options.saturationBoost);
    gl.uniform1f(vignetteLocation, options.vignetteAmount);
    gl.uniform1f(vignettePowerLocation, Math.max(options.vignettePower || 0, 0));
    gl.uniform2f(
      vignetteOffsetLocation,
      offsetX,
      offsetY
    );
    gl.uniform1f(toneMapLocation, toneAmount);
    const whiteBalance = sanitizeWhiteBalanceGains(options);
    gl.uniform3f(whiteBalanceLocation, whiteBalance[0], whiteBalance[1], whiteBalance[2]);
    const shadowBoost = Math.max(0, Math.min(1, Number(options.shadowBoostAmount) || 0));
    gl.uniform1f(shadowBoostLocation, shadowBoost);
    const xRayStrength = options.xRayEnabled ? 1 : 0;
    gl.uniform1f(xRayLocation, xRayStrength);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.finish();

    gl.deleteTexture(texture);
    gl.deleteBuffer(positionBuffer);
    gl.deleteBuffer(texCoordBuffer);
    gl.deleteProgram(program);

    return canvas;
  } catch (err) {
    console.warn("WebGL enhancement failed, falling back to CPU", err);
    return null;
  }
}

function runCpuEnhancement(sourceCanvas, width, height, options) {
  const sourceCtx = sourceCanvas.getContext("2d");
  const sourceData = sourceCtx.getImageData(0, 0, width, height);
  const src = sourceData.data;
  const out = new Uint8ClampedArray(src.length);

  const sharpen = Math.max(options.sharpenAmount, 0);
  const diagSharpen = sharpen * 0.25;
  const satFactor = 1 + options.saturationBoost;
  const vignette = options.vignetteAmount;
  const vignettePower = Math.max(options.vignettePower || 0, 0);
  const offsetX = Math.max(-0.5, Math.min(0.5, Number(options.vignetteOffsetX) || 0));
  const offsetY = Math.max(-0.5, Math.min(0.5, Number(options.vignetteOffsetY) || 0));
  const toneMapAmount = Math.max(0, Math.min(1, Number(options.toneMapAmount) || 0));
  const whiteBalance = sanitizeWhiteBalanceGains(options);
  const wbR = whiteBalance[0];
  const wbG = whiteBalance[1];
  const wbB = whiteBalance[2];
  const xRayStrength = options.xRayEnabled ? 1 : 0;
  const shadowBoost = Math.max(0, Math.min(1, Number(options.shadowBoostAmount) || 0));
  const effectiveShadowBoost = Math.max(shadowBoost, xRayStrength > 0 ? 0.85 : 0);
  const halfW = width / 2;
  const halfH = height / 2;
  const denom = Math.sqrt(halfW * halfW + halfH * halfH);
  const invEdge = denom > 0 ? 1 / denom : 0;

  const getIndex = (x, y) => (y * width + x) * 4;

  for (let y = 0; y < height; y++) {
    const yMin = y === 0 ? 0 : y - 1;
    const yMax = y === height - 1 ? height - 1 : y + 1;
    for (let x = 0; x < width; x++) {
      const xMin = x === 0 ? 0 : x - 1;
      const xMax = x === width - 1 ? width - 1 : x + 1;

      const centerIndex = getIndex(x, y);
      const centerR = src[centerIndex];
      const centerG = src[centerIndex + 1];
      const centerB = src[centerIndex + 2];

      const leftIndex = getIndex(xMin, y);
      const rightIndex = getIndex(xMax, y);
      const upIndex = getIndex(x, yMin);
      const downIndex = getIndex(x, yMax);

      const upLeftIndex = getIndex(xMin, yMin);
      const upRightIndex = getIndex(xMax, yMin);
      const downLeftIndex = getIndex(xMin, yMax);
      const downRightIndex = getIndex(xMax, yMax);

      let r =
        centerR * (1 + 4 * sharpen + 4 * diagSharpen) -
        sharpen * (src[leftIndex] + src[rightIndex] + src[upIndex] + src[downIndex]) -
        diagSharpen *
          (src[upLeftIndex] + src[upRightIndex] + src[downLeftIndex] + src[downRightIndex]);
      let g =
        centerG * (1 + 4 * sharpen + 4 * diagSharpen) -
        sharpen * (src[leftIndex + 1] + src[rightIndex + 1] + src[upIndex + 1] + src[downIndex + 1]) -
        diagSharpen *
          (src[upLeftIndex + 1] + src[upRightIndex + 1] + src[downLeftIndex + 1] + src[downRightIndex + 1]);
      let b =
        centerB * (1 + 4 * sharpen + 4 * diagSharpen) -
        sharpen * (src[leftIndex + 2] + src[rightIndex + 2] + src[upIndex + 2] + src[downIndex + 2]) -
        diagSharpen *
          (src[upLeftIndex + 2] + src[upRightIndex + 2] + src[downLeftIndex + 2] + src[downRightIndex + 2]);

      if (options.saturationBoost !== 0) {
        const avg = (r + g + b) / 3;
        r = avg + (r - avg) * satFactor;
        g = avg + (g - avg) * satFactor;
        b = avg + (b - avg) * satFactor;
      }

      if (options.autoWhiteBalanceEnabled) {
        r *= wbR;
        g *= wbG;
        b *= wbB;
      }

      if (effectiveShadowBoost > 0) {
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        const shadowWeight = Math.pow(Math.max(0, Math.min(1, 1 - luminance / 255)), 1.4);
        const weight = shadowWeight * effectiveShadowBoost;
        if (weight > 0) {
          const liftR = Math.pow(Math.max(r / 255, 0), 0.75) * 255;
          const liftG = Math.pow(Math.max(g / 255, 0), 0.75) * 255;
          const liftB = Math.pow(Math.max(b / 255, 0), 0.75) * 255;
          r = r + (liftR - r) * weight;
          g = g + (liftG - g) * weight;
          b = b + (liftB - b) * weight;
        }
      }

      if (xRayStrength > 0) {
        const logFactor = 1 + 2.2 * (0.5 + effectiveShadowBoost * 0.5);
        const denom = Math.log1p(logFactor);
        if (denom > 0) {
          r = Math.log1p((r / 255) * logFactor) / denom * 255;
          g = Math.log1p((g / 255) * logFactor) / denom * 255;
          b = Math.log1p((b / 255) * logFactor) / denom * 255;
        }
      }

      if (vignette !== 0 && vignettePower > 0) {
        const dx = x - halfW + 0.5 - offsetX * halfW * 2;
        const dy = y - halfH + 0.5 - offsetY * halfH * 2;
        const dist = Math.sqrt(dx * dx + dy * dy) * invEdge;
        const correction = 1 + vignette * Math.pow(dist, vignettePower);
        r *= Math.max(correction, 0);
        g *= Math.max(correction, 0);
        b *= Math.max(correction, 0);
      }

      if (toneMapAmount > 0) {
        const maxChannel = Math.max(r, Math.max(g, b));
        const highlight = Math.max(maxChannel - 255, 0);
        if (highlight > 0) {
          const highlightNorm = highlight / 255;
          const compression = 1 + toneMapAmount * highlightNorm * 2;
          r /= compression;
          g /= compression;
          b /= compression;
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
          const desat = Math.min(1, toneMapAmount * highlightNorm);
          r += (luminance - r) * desat * 0.5;
          g += (luminance - g) * desat * 0.5;
          b += (luminance - b) * desat * 0.5;
        }
      }

      out[centerIndex] = Math.max(0, Math.min(255, r));
      out[centerIndex + 1] = Math.max(0, Math.min(255, g));
      out[centerIndex + 2] = Math.max(0, Math.min(255, b));
      out[centerIndex + 3] = src[centerIndex + 3];
    }
  }

  const outputCanvas = document.createElement("canvas");
  outputCanvas.width = width;
  outputCanvas.height = height;
  const outCtx = outputCanvas.getContext("2d");
  const outImage = new ImageData(out, width, height);
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
  const options = Object.assign({}, DEFAULT_OPTIONS, providedOptions);
  options.forceCpu = !!options.forceCpu;

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

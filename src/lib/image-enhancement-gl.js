import {
  sanitizeWhiteBalanceGains,
  sanitizeXRayEdgeStrength,
  normalizeEnhancementOptions
} from "./image-enhancement-core.js";

export const WebGLPrograms = {
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
    uniform float u_xRayEdgeStrength;
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

      const vec3 LUMA = vec3(0.299, 0.587, 0.114);
      float lLeft = dot(left, LUMA);
      float lRight = dot(right, LUMA);
      float lUp = dot(up, LUMA);
      float lDown = dot(down, LUMA);
      float lUpLeft = dot(upLeft, LUMA);
      float lUpRight = dot(upRight, LUMA);
      float lDownLeft = dot(downLeft, LUMA);
      float lDownRight = dot(downRight, LUMA);

      float gradX = (lRight - lLeft) * 0.5 + (lUpRight - lUpLeft + lDownRight - lDownLeft) * 0.25;
      float gradY = (lDown - lUp) * 0.5 + (lDownRight - lUpRight + lDownLeft - lUpLeft) * 0.25;
      float edgeMag = sqrt(gradX * gradX + gradY * gradY);
      float edgeWeight = smoothstep(0.02, 0.18, edgeMag);
      float edgeStrength = clamp(u_xRayEdgeStrength, 0.0, 1.0);
      float edgeBoost = edgeWeight * edgeStrength;

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

      if (edgeBoost > 0.0) {
        float overlayScale = mix(0.15, 0.45, xRayStrength);
        color = clamp(color + vec3(edgeBoost * overlayScale), 0.0, 1.0);
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

const QUAD_POSITIONS = new Float32Array([
  -1, -1,
  1, -1,
  -1, 1,
  -1, 1,
  1, -1,
  1, 1
]);

const QUAD_TEX_COORDS = new Float32Array([
  0, 0,
  1, 0,
  0, 1,
  0, 1,
  1, 0,
  1, 1
]);

const isTypedArray = (value) =>
  value &&
  typeof value === "object" &&
  typeof value.length === "number" &&
  typeof value.BYTES_PER_ELEMENT === "number" &&
  value.buffer instanceof ArrayBuffer;

const isImageData = (value) =>
  typeof ImageData !== "undefined" && value instanceof ImageData;

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

function uploadTexture(gl, source, width, height, flipTexture = true) {
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipTexture ? 1 : 0);

  if (isTypedArray(source)) {
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      width,
      height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      source
    );
  } else if (isImageData(source)) {
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
  } else if (source && typeof source === "object" && source.data && isTypedArray(source.data)) {
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      width,
      height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      source.data
    );
  } else {
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
  }
}

export function runWebGLPass(
  gl,
  source,
  width,
  height,
  providedOptions = {},
  { flipTexture = true, readPixels = false } = {}
) {
  if (!gl) {
    throw new Error("Invalid WebGL context");
  }
  if (!width || !height) {
    throw new Error("Invalid image dimensions for WebGL enhancement");
  }

  const options = normalizeEnhancementOptions(providedOptions);

  const program = buildProgram(gl);
  gl.viewport(0, 0, width, height);
  gl.useProgram(program);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, QUAD_POSITIONS, gl.STATIC_DRAW);
  const positionLocation = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  const texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, QUAD_TEX_COORDS, gl.STATIC_DRAW);
  const texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
  gl.enableVertexAttribArray(texCoordLocation);
  gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  uploadTexture(gl, source, width, height, flipTexture);

  const texelSizeLocation = gl.getUniformLocation(program, "u_texelSize");
  const sharpenLocation = gl.getUniformLocation(program, "u_sharpen");
  const saturationLocation = gl.getUniformLocation(program, "u_saturation");
  const vignetteLocation = gl.getUniformLocation(program, "u_vignette");
  const vignettePowerLocation = gl.getUniformLocation(program, "u_vignettePower");
  const vignetteOffsetLocation = gl.getUniformLocation(program, "u_vignetteOffset");
  const toneMapLocation = gl.getUniformLocation(program, "u_toneMapAmount");
  const whiteBalanceLocation = gl.getUniformLocation(program, "u_whiteBalance");
  const shadowBoostLocation = gl.getUniformLocation(program, "u_shadowBoost");
  const xRayEdgeLocation = gl.getUniformLocation(program, "u_xRayEdgeStrength");
  const xRayLocation = gl.getUniformLocation(program, "u_xRay");

  gl.uniform2f(texelSizeLocation, 1 / width, 1 / height);
  const offsetX = Math.max(-0.5, Math.min(0.5, Number(options.vignetteOffsetX) || 0));
  const offsetY = Math.max(-0.5, Math.min(0.5, Number(options.vignetteOffsetY) || 0));
  const toneAmount = Math.max(0, Math.min(1, Number(options.toneMapAmount) || 0));

  gl.uniform1f(sharpenLocation, options.sharpenAmount);
  gl.uniform1f(saturationLocation, options.saturationBoost);
  gl.uniform1f(vignetteLocation, options.vignetteAmount);
  gl.uniform1f(vignettePowerLocation, Math.max(options.vignettePower || 0, 0));
  gl.uniform2f(vignetteOffsetLocation, offsetX, offsetY);
  gl.uniform1f(toneMapLocation, toneAmount);

  const whiteBalance = sanitizeWhiteBalanceGains(options);
  gl.uniform3f(whiteBalanceLocation, whiteBalance[0], whiteBalance[1], whiteBalance[2]);

  const shadowBoost = Math.max(0, Math.min(1, Number(options.shadowBoostAmount) || 0));
  gl.uniform1f(shadowBoostLocation, shadowBoost);

  const edgeStrength = options.xRayEnabled
    ? sanitizeXRayEdgeStrength(options)
    : 0;
  gl.uniform1f(xRayEdgeLocation, edgeStrength);

  const xRayStrength = options.xRayEnabled ? 1 : 0;
  gl.uniform1f(xRayLocation, xRayStrength);

  gl.drawArrays(gl.TRIANGLES, 0, 6);
  gl.finish();

  let pixels = null;
  if (readPixels) {
    pixels = new Uint8Array(width * height * 4);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  }

  gl.deleteTexture(texture);
  gl.deleteBuffer(positionBuffer);
  gl.deleteBuffer(texCoordBuffer);
  gl.deleteProgram(program);

  return { pixels, width, height };
}

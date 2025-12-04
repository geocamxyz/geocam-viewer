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
  xRayEnabled: false,
  xRayEdgeStrength: 0.25
};

const WHITE_BALANCE_MIN_GAIN = 0.25;
const WHITE_BALANCE_MAX_GAIN = 4;
const LUMA_R = 0.299;
const LUMA_G = 0.587;
const LUMA_B = 0.114;

const clamp = (value, min, max) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const extractDimensions = (source, width, height) => {
  const resolvedWidth = Number.isFinite(width) ? width : source?.width;
  const resolvedHeight = Number.isFinite(height) ? height : source?.height;
  if (!resolvedWidth || !resolvedHeight) {
    throw new Error("Image enhancement requires explicit width and height");
  }
  return { width: resolvedWidth, height: resolvedHeight };
};

const toClampedArray = (source) => {
  if (!source) {
    throw new Error("Image enhancement requires source pixel data");
  }
  if (source instanceof Uint8ClampedArray) {
    return source;
  }
  if (ArrayBuffer.isView(source)) {
    return new Uint8ClampedArray(source.buffer, source.byteOffset, source.byteLength);
  }
  if (source.data) {
    return toClampedArray(source.data);
  }
  throw new Error("Unsupported image data type; expected ImageData or Uint8Array");
};

export function sanitizeWhiteBalanceGains(options = {}) {
  const source = Array.isArray(options.whiteBalanceGains)
    ? options.whiteBalanceGains
    : [1, 1, 1];

  const gains = [0, 1, 2].map((idx) => {
    const value = Number(source[idx]);
    if (!Number.isFinite(value) || value <= 0) {
      return 1;
    }
    return clamp(value, WHITE_BALANCE_MIN_GAIN, WHITE_BALANCE_MAX_GAIN);
  });

  if (!options.autoWhiteBalanceEnabled) {
    return [1, 1, 1];
  }

  return gains;
}

export function sanitizeXRayEdgeStrength(options) {
  const value =
    options && typeof options.xRayEdgeStrength !== "undefined"
      ? options.xRayEdgeStrength
      : options;
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 0;
  return clamp(numeric, 0, 1);
}

export function normalizeEnhancementOptions(overrides = {}) {
  const merged = Object.assign({}, DEFAULT_OPTIONS, overrides);
  merged.forceCpu = !!merged.forceCpu;
  return merged;
}

export function enhanceImageData(source, width, height, providedOptions = {}) {
  const { width: imgWidth, height: imgHeight } = extractDimensions(source, width, height);
  const src = toClampedArray(source);
  if (src.length < imgWidth * imgHeight * 4) {
    throw new Error("Image data does not match expected dimensions");
  }

  const options = normalizeEnhancementOptions(providedOptions);
  const out = new Uint8ClampedArray(imgWidth * imgHeight * 4);

  const sharpen = Math.max(options.sharpenAmount, 0);
  const diagSharpen = sharpen * 0.25;
  const satFactor = 1 + options.saturationBoost;
  const vignette = options.vignetteAmount;
  const vignettePower = Math.max(options.vignettePower || 0, 0);
  const offsetX = clamp(Number(options.vignetteOffsetX) || 0, -0.5, 0.5);
  const offsetY = clamp(Number(options.vignetteOffsetY) || 0, -0.5, 0.5);
  const toneMapAmount = clamp(Number(options.toneMapAmount) || 0, 0, 1);
  const whiteBalance = sanitizeWhiteBalanceGains(options);
  const wbR = whiteBalance[0];
  const wbG = whiteBalance[1];
  const wbB = whiteBalance[2];
  const xRayStrength = options.xRayEnabled ? 1 : 0;
  const shadowBoost = clamp(Number(options.shadowBoostAmount) || 0, 0, 1);
  const effectiveShadowBoost = Math.max(shadowBoost, xRayStrength > 0 ? 0.85 : 0);
  const rawEdgeStrength = sanitizeXRayEdgeStrength(options);
  const xRayEdgeStrength = options.xRayEnabled ? rawEdgeStrength : 0;
  const overlayScale = 0.15 + 0.30 * xRayStrength;
  const halfW = imgWidth / 2;
  const halfH = imgHeight / 2;
  const edgeRadius = Math.sqrt(halfW * halfW + halfH * halfH);
  const invEdge = edgeRadius > 0 ? 1 / edgeRadius : 0;

  const getIndex = (x, y) => (y * imgWidth + x) * 4;

  for (let y = 0; y < imgHeight; y++) {
    const yMin = y === 0 ? 0 : y - 1;
    const yMax = y === imgHeight - 1 ? imgHeight - 1 : y + 1;
    for (let x = 0; x < imgWidth; x++) {
      const xMin = x === 0 ? 0 : x - 1;
      const xMax = x === imgWidth - 1 ? imgWidth - 1 : x + 1;

      const centerIndex = getIndex(x, y);
      const leftIndex = getIndex(xMin, y);
      const rightIndex = getIndex(xMax, y);
      const upIndex = getIndex(x, yMin);
      const downIndex = getIndex(x, yMax);
      const upLeftIndex = getIndex(xMin, yMin);
      const upRightIndex = getIndex(xMax, yMin);
      const downLeftIndex = getIndex(xMin, yMax);
      const downRightIndex = getIndex(xMax, yMax);

      const centerR = src[centerIndex];
      const centerG = src[centerIndex + 1];
      const centerB = src[centerIndex + 2];

      let r =
        centerR * (1 + 4 * sharpen + 4 * diagSharpen) -
        sharpen * (src[leftIndex] + src[rightIndex] + src[upIndex] + src[downIndex]) -
        diagSharpen *
          (src[upLeftIndex] + src[upRightIndex] + src[downLeftIndex] + src[downRightIndex]);
      let g =
        centerG * (1 + 4 * sharpen + 4 * diagSharpen) -
        sharpen *
          (src[leftIndex + 1] + src[rightIndex + 1] + src[upIndex + 1] + src[downIndex + 1]) -
        diagSharpen *
          (src[upLeftIndex + 1] +
            src[upRightIndex + 1] +
            src[downLeftIndex + 1] +
            src[downRightIndex + 1]);
      let b =
        centerB * (1 + 4 * sharpen + 4 * diagSharpen) -
        sharpen *
          (src[leftIndex + 2] + src[rightIndex + 2] + src[upIndex + 2] + src[downIndex + 2]) -
        diagSharpen *
          (src[upLeftIndex + 2] +
            src[upRightIndex + 2] +
            src[downLeftIndex + 2] +
            src[downRightIndex + 2]);

      if (options.saturationBoost !== 0) {
        const avg = (r + g + b) / 3;
        r = avg + (r - avg) * satFactor;
        g = avg + (g - avg) * satFactor;
        b = avg + (b - avg) * satFactor;
      }

      const lLeft =
        src[leftIndex] * LUMA_R +
        src[leftIndex + 1] * LUMA_G +
        src[leftIndex + 2] * LUMA_B;
      const lRight =
        src[rightIndex] * LUMA_R +
        src[rightIndex + 1] * LUMA_G +
        src[rightIndex + 2] * LUMA_B;
      const lUp =
        src[upIndex] * LUMA_R +
        src[upIndex + 1] * LUMA_G +
        src[upIndex + 2] * LUMA_B;
      const lDown =
        src[downIndex] * LUMA_R +
        src[downIndex + 1] * LUMA_G +
        src[downIndex + 2] * LUMA_B;
      const lUpLeft =
        src[upLeftIndex] * LUMA_R +
        src[upLeftIndex + 1] * LUMA_G +
        src[upLeftIndex + 2] * LUMA_B;
      const lUpRight =
        src[upRightIndex] * LUMA_R +
        src[upRightIndex + 1] * LUMA_G +
        src[upRightIndex + 2] * LUMA_B;
      const lDownLeft =
        src[downLeftIndex] * LUMA_R +
        src[downLeftIndex + 1] * LUMA_G +
        src[downLeftIndex + 2] * LUMA_B;
      const lDownRight =
        src[downRightIndex] * LUMA_R +
        src[downRightIndex + 1] * LUMA_G +
        src[downRightIndex + 2] * LUMA_B;

      let edgeBoost = 0;
      if (xRayEdgeStrength > 0) {
        const gradX =
          (lRight - lLeft) * 0.5 +
          (lUpRight - lUpLeft + lDownRight - lDownLeft) * 0.25;
        const gradY =
          (lDown - lUp) * 0.5 +
          (lDownRight - lUpRight + lDownLeft - lUpLeft) * 0.25;
        const edgeMag = Math.sqrt(gradX * gradX + gradY * gradY) / 255;
        if (edgeMag > 0) {
          const t = clamp((edgeMag - 0.02) / (0.18 - 0.02), 0, 1);
          const smooth = t * t * (3 - 2 * t);
          edgeBoost = smooth * xRayEdgeStrength;
        }
      }

      if (options.autoWhiteBalanceEnabled) {
        r *= wbR;
        g *= wbG;
        b *= wbB;
      }

      if (effectiveShadowBoost > 0) {
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        const shadowWeight = Math.pow(clamp(1 - luminance / 255, 0, 1), 1.4);
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

      if (edgeBoost > 0) {
        const edgeGain = edgeBoost * overlayScale * 255;
        r += edgeGain;
        g += edgeGain;
        b += edgeGain;
      }

      if (vignette !== 0 && vignettePower > 0) {
        const dx = x - halfW + 0.5 - offsetX * halfW * 2;
        const dy = y - halfH + 0.5 - offsetY * halfH * 2;
        const dist = Math.sqrt(dx * dx + dy * dy) * invEdge;
        const correction = 1 + vignette * Math.pow(dist, vignettePower);
        const safeCorrection = Math.max(correction, 0);
        r *= safeCorrection;
        g *= safeCorrection;
        b *= safeCorrection;
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

      out[centerIndex] = clamp(r, 0, 255);
      out[centerIndex + 1] = clamp(g, 0, 255);
      out[centerIndex + 2] = clamp(b, 0, 255);
      out[centerIndex + 3] = src[centerIndex + 3];
    }
  }

  return {
    data: out,
    width: imgWidth,
    height: imgHeight
  };
}

export { DEFAULT_OPTIONS };

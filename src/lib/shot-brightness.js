export const DEFAULT_EXPOSURE_US = 600;
export const DEFAULT_GAIN_BOOST = 8;
export const DEFAULT_LINEAR_GAIN = Math.pow(10, DEFAULT_GAIN_BOOST / 20);
export const BRIGHTNESS_GAMMA = 2.0;

export const DEFAULT_SHOT_INFO = {
  exposure_us: [
    DEFAULT_EXPOSURE_US,
    DEFAULT_EXPOSURE_US,
    DEFAULT_EXPOSURE_US
  ],
  gain_boost: [DEFAULT_GAIN_BOOST, DEFAULT_GAIN_BOOST, DEFAULT_GAIN_BOOST]
};

export const dbToLinearGain = (value) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return DEFAULT_LINEAR_GAIN;
  }
  return Math.pow(10, numeric / 20);
};

export const normalizeShotTriplet = (value, fallback) => {
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
      // Ignore parse errors.
    }
  }

  return [fallback, fallback, fallback];
};

export const normalizeShotInfo = (info) => {
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

export const computeShotBrightnessFactors = (info) => {
  const exposures = (info && info.exposure_us) || DEFAULT_SHOT_INFO.exposure_us;
  const gains = (info && info.gain_boost) || DEFAULT_SHOT_INFO.gain_boost;
  const target = DEFAULT_EXPOSURE_US * DEFAULT_LINEAR_GAIN;

  return [0, 1, 2].map((idx) => {
    const exposure = Number(exposures[idx]);
    const gain = Number(gains[idx]);
    const safeExposure =
      Number.isFinite(exposure) && exposure > 0 ? exposure : DEFAULT_EXPOSURE_US;
    const safeGainDb =
      Number.isFinite(gain) && gain >= DEFAULT_GAIN_BOOST ? gain : DEFAULT_GAIN_BOOST;
    const linearGain = dbToLinearGain(safeGainDb);
    const denom = safeExposure * linearGain;
    const factor = denom > 0 ? target / denom : 1;
    return factor > 0 ? factor : 1;
  });
};

export const combineBrightnessWithShot = (
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

  const safePhysicalFactors = physicalFactors.map((factor) => {
    const numeric = Number(factor);
    return Number.isFinite(numeric) && numeric > 0 ? numeric : 1;
  });

  let normalization = 1;
  const positiveFactors = safePhysicalFactors.filter((factor) => factor > 0);
  if (positiveFactors.length > 0) {
    const logSum = positiveFactors.reduce((sum, factor) => sum + Math.log(factor), 0);
    const geoMean = Math.exp(logSum / positiveFactors.length);
    if (Number.isFinite(geoMean) && geoMean > 0) {
      normalization = geoMean;
    }
  }

  return baseArray.map((value, idx) => {
    const numeric = Number(value);
    const safeValue = Number.isFinite(numeric) && numeric > 0 ? numeric : 1;
    const normalizedFactor =
      normalization > 0 ? safePhysicalFactors[idx] / normalization : 1;
    const clampedFactor = Math.max(normalizedFactor, 0);
    const gammaAdjusted =
      clampedFactor > 0
        ? Math.pow(clampedFactor, 1 / BRIGHTNESS_GAMMA)
        : 0;
    return safeValue * gammaAdjusted;
  });
};

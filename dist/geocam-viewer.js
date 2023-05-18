Number.EPSILON === void 0 && (Number.EPSILON = Math.pow(2, -52));
Number.isInteger === void 0 && (Number.isInteger = function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
});
Math.sign === void 0 && (Math.sign = function(e) {
  return e < 0 ? -1 : e > 0 ? 1 : +e;
});
"name" in Function.prototype || Object.defineProperty(Function.prototype, "name", {
  get: function() {
    return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
  }
});
Object.assign === void 0 && (Object.assign = function(e) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const t = Object(e);
  for (let n = 1; n < arguments.length; n++) {
    const i = arguments[n];
    if (i != null)
      for (const r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }
  return t;
});
const vh = "119", _h = 0, Hc = 1, bh = 2, Su = 1, wh = 2, yr = 3, as = 0, rt = 1, Wo = 2, Tu = 1, In = 0, vr = 1, Vc = 2, Wc = 3, jc = 4, Mh = 5, Ti = 100, Sh = 101, Th = 102, qc = 103, Xc = 104, Eh = 200, Ah = 201, Lh = 202, Ch = 203, Eu = 204, Au = 205, Rh = 206, Ph = 207, Ih = 208, Oh = 209, Dh = 210, Nh = 0, Bh = 1, Fh = 2, Oa = 3, Uh = 4, Gh = 5, zh = 6, kh = 7, jo = 0, Hh = 1, Vh = 2, Ii = 0, Wh = 1, jh = 2, qh = 3, Xh = 4, Yh = 5, Ac = 300, Lc = 301, Cc = 302, Lu = 303, Rc = 304, cs = 306, qo = 307, ro = 1e3, xt = 1001, so = 1002, ot = 1003, Da = 1004, Na = 1005, dt = 1006, Cu = 1007, Xo = 1008, ls = 1009, Jh = 1010, Zh = 1011, oo = 1012, $h = 1013, no = 1014, Cn = 1015, ao = 1016, Qh = 1017, Kh = 1018, ef = 1019, _r = 1020, tf = 1021, Zn = 1022, Lt = 1023, nf = 1024, rf = 1025, sf = Lt, Oi = 1026, Tr = 1027, of = 1028, af = 1029, cf = 1030, lf = 1031, uf = 1032, hf = 1033, Yc = 33776, Jc = 33777, Zc = 33778, $c = 33779, Qc = 35840, Kc = 35841, el = 35842, tl = 35843, ff = 36196, nl = 37492, il = 37496, df = 37808, pf = 37809, mf = 37810, gf = 37811, yf = 37812, xf = 37813, vf = 37814, _f = 37815, bf = 37816, wf = 37817, Mf = 37818, Sf = 37819, Tf = 37820, Ef = 37821, Af = 36492, Lf = 37840, Cf = 37841, Rf = 37842, Pf = 37843, If = 37844, Of = 37845, Df = 37846, Nf = 37847, Bf = 37848, Ff = 37849, Uf = 37850, Gf = 37851, zf = 37852, kf = 37853, Hf = 2200, Vf = 2201, Wf = 2202, co = 2300, io = 2301, ta = 2302, Ni = 2400, Ai = 2401, lo = 2402, Pc = 2500, Ru = 2501, jf = 0, vt = 3e3, Yo = 3001, Ic = 3007, Oc = 3002, qf = 3003, Pu = 3004, Iu = 3005, Ou = 3006, Xf = 3200, Yf = 3201, er = 0, Jf = 1, na = 7680, Zf = 519, Jo = 35044, Er = 35048;
function xn() {
}
Object.assign(xn.prototype, {
  addEventListener: function(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  },
  hasEventListener: function(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  },
  removeEventListener: function(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  },
  dispatchEvent: function(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, s = i.length; r < s; r++)
        i[r].call(this, e);
    }
  }
});
const ct = [];
for (let e = 0; e < 256; e++)
  ct[e] = (e < 16 ? "0" : "") + e.toString(16);
let gs = 1234567;
const Ae = {
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  generateUUID: function() {
    const e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
    return (ct[e & 255] + ct[e >> 8 & 255] + ct[e >> 16 & 255] + ct[e >> 24 & 255] + "-" + ct[t & 255] + ct[t >> 8 & 255] + "-" + ct[t >> 16 & 15 | 64] + ct[t >> 24 & 255] + "-" + ct[n & 63 | 128] + ct[n >> 8 & 255] + "-" + ct[n >> 16 & 255] + ct[n >> 24 & 255] + ct[i & 255] + ct[i >> 8 & 255] + ct[i >> 16 & 255] + ct[i >> 24 & 255]).toUpperCase();
  },
  clamp: function(e, t, n) {
    return Math.max(t, Math.min(n, e));
  },
  // compute euclidian modulo of m % n
  // https://en.wikipedia.org/wiki/Modulo_operation
  euclideanModulo: function(e, t) {
    return (e % t + t) % t;
  },
  // Linear mapping from range <a1, a2> to range <b1, b2>
  mapLinear: function(e, t, n, i, r) {
    return i + (e - t) * (r - i) / (n - t);
  },
  // https://en.wikipedia.org/wiki/Linear_interpolation
  lerp: function(e, t, n) {
    return (1 - n) * e + n * t;
  },
  // http://en.wikipedia.org/wiki/Smoothstep
  smoothstep: function(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
  },
  smootherstep: function(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
  },
  // Random integer from <low, high> interval
  randInt: function(e, t) {
    return e + Math.floor(Math.random() * (t - e + 1));
  },
  // Random float from <low, high> interval
  randFloat: function(e, t) {
    return e + Math.random() * (t - e);
  },
  // Random float from <-range/2, range/2> interval
  randFloatSpread: function(e) {
    return e * (0.5 - Math.random());
  },
  // Deterministic pseudo-random float in the interval [ 0, 1 ]
  seededRandom: function(e) {
    return e !== void 0 && (gs = e % 2147483647), gs = gs * 16807 % 2147483647, (gs - 1) / 2147483646;
  },
  degToRad: function(e) {
    return e * Ae.DEG2RAD;
  },
  radToDeg: function(e) {
    return e * Ae.RAD2DEG;
  },
  isPowerOfTwo: function(e) {
    return (e & e - 1) === 0 && e !== 0;
  },
  ceilPowerOfTwo: function(e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
  },
  floorPowerOfTwo: function(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
  },
  setQuaternionFromProperEuler: function(e, t, n, i, r) {
    const s = Math.cos, o = Math.sin, a = s(n / 2), c = o(n / 2), l = s((t + i) / 2), h = o((t + i) / 2), u = s((t - i) / 2), f = o((t - i) / 2), d = s((i - t) / 2), p = o((i - t) / 2);
    switch (r) {
      case "XYX":
        e.set(a * h, c * u, c * f, a * l);
        break;
      case "YZY":
        e.set(c * f, a * h, c * u, a * l);
        break;
      case "ZXZ":
        e.set(c * u, c * f, a * h, a * l);
        break;
      case "XZX":
        e.set(a * h, c * p, c * d, a * l);
        break;
      case "YXY":
        e.set(c * d, a * h, c * p, a * l);
        break;
      case "ZYZ":
        e.set(c * p, c * d, a * h, a * l);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
    }
  }
};
function H(e = 0, t = 0) {
  this.x = e, this.y = t;
}
Object.defineProperties(H.prototype, {
  width: {
    get: function() {
      return this.x;
    },
    set: function(e) {
      this.x = e;
    }
  },
  height: {
    get: function() {
      return this.y;
    },
    set: function(e) {
      this.y = e;
    }
  }
});
Object.assign(H.prototype, {
  isVector2: !0,
  set: function(e, t) {
    return this.x = e, this.y = t, this;
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this;
  },
  setX: function(e) {
    return this.x = e, this;
  },
  setY: function(e) {
    return this.y = e, this;
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y);
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this;
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this);
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this;
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this);
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this;
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  },
  multiply: function(e) {
    return this.x *= e.x, this.y *= e.y, this;
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this;
  },
  divide: function(e) {
    return this.x /= e.x, this.y /= e.y, this;
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e);
  },
  applyMatrix3: function(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  },
  clampLength: function(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this;
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y;
  },
  cross: function(e) {
    return this.x * e.y - this.y * e.x;
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y);
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1);
  },
  angle: function() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e));
  },
  distanceToSquared: function(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  },
  manhattanDistanceTo: function(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e);
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  },
  lerpVectors: function(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e;
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this;
  },
  rotateAround: function(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, s = this.y - e.y;
    return this.x = r * n - s * i + e.x, this.y = r * i + s * n + e.y, this;
  },
  random: function() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
});
function gt() {
  this.elements = [
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1
  ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
}
Object.assign(gt.prototype, {
  isMatrix3: !0,
  set: function(e, t, n, i, r, s, o, a, c) {
    const l = this.elements;
    return l[0] = e, l[1] = i, l[2] = o, l[3] = t, l[4] = r, l[5] = a, l[6] = n, l[7] = s, l[8] = c, this;
  },
  identity: function() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  },
  clone: function() {
    return new this.constructor().fromArray(this.elements);
  },
  copy: function(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  },
  extractBasis: function(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  },
  setFromMatrix4: function(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  },
  multiply: function(e) {
    return this.multiplyMatrices(this, e);
  },
  premultiply: function(e) {
    return this.multiplyMatrices(e, this);
  },
  multiplyMatrices: function(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, s = n[0], o = n[3], a = n[6], c = n[1], l = n[4], h = n[7], u = n[2], f = n[5], d = n[8], p = i[0], x = i[3], y = i[6], g = i[1], m = i[4], _ = i[7], v = i[2], w = i[5], A = i[8];
    return r[0] = s * p + o * g + a * v, r[3] = s * x + o * m + a * w, r[6] = s * y + o * _ + a * A, r[1] = c * p + l * g + h * v, r[4] = c * x + l * m + h * w, r[7] = c * y + l * _ + h * A, r[2] = u * p + f * g + d * v, r[5] = u * x + f * m + d * w, r[8] = u * y + f * _ + d * A, this;
  },
  multiplyScalar: function(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  },
  determinant: function() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], c = e[7], l = e[8];
    return t * s * l - t * o * c - n * r * l + n * o * a + i * r * c - i * s * a;
  },
  getInverse: function(e, t) {
    t !== void 0 && console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
    const n = e.elements, i = this.elements, r = n[0], s = n[1], o = n[2], a = n[3], c = n[4], l = n[5], h = n[6], u = n[7], f = n[8], d = f * c - l * u, p = l * h - f * a, x = u * a - c * h, y = r * d + s * p + o * x;
    if (y === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / y;
    return i[0] = d * g, i[1] = (o * u - f * s) * g, i[2] = (l * s - o * c) * g, i[3] = p * g, i[4] = (f * r - o * h) * g, i[5] = (o * a - l * r) * g, i[6] = x * g, i[7] = (s * h - u * r) * g, i[8] = (c * r - s * a) * g, this;
  },
  transpose: function() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  },
  getNormalMatrix: function(e) {
    return this.setFromMatrix4(e).getInverse(this).transpose();
  },
  transposeIntoArray: function(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  },
  setUvTransform: function(e, t, n, i, r, s, o) {
    const a = Math.cos(r), c = Math.sin(r);
    this.set(
      n * a,
      n * c,
      -n * (a * s + c * o) + s + e,
      -i * c,
      i * a,
      -i * (-c * s + a * o) + o + t,
      0,
      0,
      1
    );
  },
  scale: function(e, t) {
    const n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
  },
  rotate: function(e) {
    const t = Math.cos(e), n = Math.sin(e), i = this.elements, r = i[0], s = i[3], o = i[6], a = i[1], c = i[4], l = i[7];
    return i[0] = t * r + n * a, i[3] = t * s + n * c, i[6] = t * o + n * l, i[1] = -n * r + t * a, i[4] = -n * s + t * c, i[7] = -n * o + t * l, this;
  },
  translate: function(e, t) {
    const n = this.elements;
    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
  },
  equals: function(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
});
let ci;
const Qn = {
  getDataURL: function(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      ci === void 0 && (ci = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), ci.width = e.width, ci.height = e.height;
      const n = ci.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ci;
    }
    return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", 0.6) : t.toDataURL("image/png");
  }
};
let $f = 0;
function Ge(e, t, n, i, r, s, o, a, c, l) {
  Object.defineProperty(this, "id", { value: $f++ }), this.uuid = Ae.generateUUID(), this.name = "", this.image = e !== void 0 ? e : Ge.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = t !== void 0 ? t : Ge.DEFAULT_MAPPING, this.wrapS = n !== void 0 ? n : xt, this.wrapT = i !== void 0 ? i : xt, this.magFilter = r !== void 0 ? r : dt, this.minFilter = s !== void 0 ? s : Xo, this.anisotropy = c !== void 0 ? c : 1, this.format = o !== void 0 ? o : Lt, this.internalFormat = null, this.type = a !== void 0 ? a : ls, this.offset = new H(0, 0), this.repeat = new H(1, 1), this.center = new H(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new gt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = l !== void 0 ? l : vt, this.version = 0, this.onUpdate = null;
}
Ge.DEFAULT_IMAGE = void 0;
Ge.DEFAULT_MAPPING = Ac;
Ge.prototype = Object.assign(Object.create(xn.prototype), {
  constructor: Ge,
  isTexture: !0,
  updateMatrix: function() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this;
  },
  toJSON: function(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (this.image !== void 0) {
      const i = this.image;
      if (i.uuid === void 0 && (i.uuid = Ae.generateUUID()), !t && e.images[i.uuid] === void 0) {
        let r;
        if (Array.isArray(i)) {
          r = [];
          for (let s = 0, o = i.length; s < o; s++)
            r.push(Qn.getDataURL(i[s]));
        } else
          r = Qn.getDataURL(i);
        e.images[i.uuid] = {
          uuid: i.uuid,
          url: r
        };
      }
      n.image = i.uuid;
    }
    return t || (e.textures[this.uuid] = n), n;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  },
  transformUv: function(e) {
    if (this.mapping !== Ac)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case ro:
          e.x = e.x - Math.floor(e.x);
          break;
        case xt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case so:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ro:
          e.y = e.y - Math.floor(e.y);
          break;
        case xt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case so:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
});
Object.defineProperty(Ge.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
function Be(e = 0, t = 0, n = 0, i = 1) {
  this.x = e, this.y = t, this.z = n, this.w = i;
}
Object.defineProperties(Be.prototype, {
  width: {
    get: function() {
      return this.z;
    },
    set: function(e) {
      this.z = e;
    }
  },
  height: {
    get: function() {
      return this.w;
    },
    set: function(e) {
      this.w = e;
    }
  }
});
Object.assign(Be.prototype, {
  isVector4: !0,
  set: function(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  },
  setX: function(e) {
    return this.x = e, this;
  },
  setY: function(e) {
    return this.y = e, this;
  },
  setZ: function(e) {
    return this.z = e, this;
  },
  setW: function(e) {
    return this.w = e, this;
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this);
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this);
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  },
  applyMatrix4: function(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * t + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * t + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * t + s[7] * n + s[11] * i + s[15] * r, this;
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e);
  },
  setAxisAngleFromQuaternion: function(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  },
  setAxisAngleFromRotationMatrix: function(e) {
    let t, n, i, r;
    const a = e.elements, c = a[0], l = a[4], h = a[8], u = a[1], f = a[5], d = a[9], p = a[2], x = a[6], y = a[10];
    if (Math.abs(l - u) < 0.01 && Math.abs(h - p) < 0.01 && Math.abs(d - x) < 0.01) {
      if (Math.abs(l + u) < 0.1 && Math.abs(h + p) < 0.1 && Math.abs(d + x) < 0.1 && Math.abs(c + f + y - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const m = (c + 1) / 2, _ = (f + 1) / 2, v = (y + 1) / 2, w = (l + u) / 4, A = (h + p) / 4, E = (d + x) / 4;
      return m > _ && m > v ? m < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(m), i = w / n, r = A / n) : _ > v ? _ < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(_), n = w / i, r = E / i) : v < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(v), n = A / r, i = E / r), this.set(n, i, r, t), this;
    }
    let g = Math.sqrt((x - d) * (x - d) + (h - p) * (h - p) + (u - l) * (u - l));
    return Math.abs(g) < 1e-3 && (g = 1), this.x = (x - d) / g, this.y = (h - p) / g, this.z = (u - l) / g, this.w = Math.acos((c + f + y - 1) / 2), this;
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  },
  clampLength: function(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1);
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e);
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  },
  lerpVectors: function(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  },
  random: function() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
});
function Ct(e, t, n) {
  this.width = e, this.height = t, this.scissor = new Be(0, 0, e, t), this.scissorTest = !1, this.viewport = new Be(0, 0, e, t), n = n || {}, this.texture = new Ge(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = t, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : dt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !0, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null;
}
Ct.prototype = Object.assign(Object.create(xn.prototype), {
  constructor: Ct,
  isWebGLRenderTarget: !0,
  setSize: function(e, t) {
    (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.texture.image.width = e, this.texture.image.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
function rl(e, t, n) {
  Ct.call(this, e, t, n), this.samples = 4;
}
rl.prototype = Object.assign(Object.create(Ct.prototype), {
  constructor: rl,
  isWebGLMultisampleRenderTarget: !0,
  copy: function(e) {
    return Ct.prototype.copy.call(this, e), this.samples = e.samples, this;
  }
});
function at(e = 0, t = 0, n = 0, i = 1) {
  this._x = e, this._y = t, this._z = n, this._w = i;
}
Object.assign(at, {
  slerp: function(e, t, n, i) {
    return n.copy(e).slerp(t, i);
  },
  slerpFlat: function(e, t, n, i, r, s, o) {
    let a = n[i + 0], c = n[i + 1], l = n[i + 2], h = n[i + 3];
    const u = r[s + 0], f = r[s + 1], d = r[s + 2], p = r[s + 3];
    if (h !== p || a !== u || c !== f || l !== d) {
      let x = 1 - o, y = a * u + c * f + l * d + h * p, g = y >= 0 ? 1 : -1, m = 1 - y * y;
      if (m > Number.EPSILON) {
        const v = Math.sqrt(m), w = Math.atan2(v, y * g);
        x = Math.sin(x * w) / v, o = Math.sin(o * w) / v;
      }
      const _ = o * g;
      if (a = a * x + u * _, c = c * x + f * _, l = l * x + d * _, h = h * x + p * _, x === 1 - o) {
        const v = 1 / Math.sqrt(a * a + c * c + l * l + h * h);
        a *= v, c *= v, l *= v, h *= v;
      }
    }
    e[t] = a, e[t + 1] = c, e[t + 2] = l, e[t + 3] = h;
  },
  multiplyQuaternionsFlat: function(e, t, n, i, r, s) {
    const o = n[i], a = n[i + 1], c = n[i + 2], l = n[i + 3], h = r[s], u = r[s + 1], f = r[s + 2], d = r[s + 3];
    return e[t] = o * d + l * h + a * f - c * u, e[t + 1] = a * d + l * u + c * h - o * f, e[t + 2] = c * d + l * f + o * u - a * h, e[t + 3] = l * d - o * h - a * u - c * f, e;
  }
});
Object.defineProperties(at.prototype, {
  x: {
    get: function() {
      return this._x;
    },
    set: function(e) {
      this._x = e, this._onChangeCallback();
    }
  },
  y: {
    get: function() {
      return this._y;
    },
    set: function(e) {
      this._y = e, this._onChangeCallback();
    }
  },
  z: {
    get: function() {
      return this._z;
    },
    set: function(e) {
      this._z = e, this._onChangeCallback();
    }
  },
  w: {
    get: function() {
      return this._w;
    },
    set: function(e) {
      this._w = e, this._onChangeCallback();
    }
  }
});
Object.assign(at.prototype, {
  isQuaternion: !0,
  set: function(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  },
  clone: function() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  },
  copy: function(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  },
  setFromEuler: function(e, t) {
    if (!(e && e.isEuler))
      throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    const n = e._x, i = e._y, r = e._z, s = e.order, o = Math.cos, a = Math.sin, c = o(n / 2), l = o(i / 2), h = o(r / 2), u = a(n / 2), f = a(i / 2), d = a(r / 2);
    switch (s) {
      case "XYZ":
        this._x = u * l * h + c * f * d, this._y = c * f * h - u * l * d, this._z = c * l * d + u * f * h, this._w = c * l * h - u * f * d;
        break;
      case "YXZ":
        this._x = u * l * h + c * f * d, this._y = c * f * h - u * l * d, this._z = c * l * d - u * f * h, this._w = c * l * h + u * f * d;
        break;
      case "ZXY":
        this._x = u * l * h - c * f * d, this._y = c * f * h + u * l * d, this._z = c * l * d + u * f * h, this._w = c * l * h - u * f * d;
        break;
      case "ZYX":
        this._x = u * l * h - c * f * d, this._y = c * f * h + u * l * d, this._z = c * l * d - u * f * h, this._w = c * l * h + u * f * d;
        break;
      case "YZX":
        this._x = u * l * h + c * f * d, this._y = c * f * h + u * l * d, this._z = c * l * d - u * f * h, this._w = c * l * h - u * f * d;
        break;
      case "XZY":
        this._x = u * l * h - c * f * d, this._y = c * f * h - u * l * d, this._z = c * l * d + u * f * h, this._w = c * l * h + u * f * d;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t !== !1 && this._onChangeCallback(), this;
  },
  setFromAxisAngle: function(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  },
  setFromRotationMatrix: function(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], s = t[1], o = t[5], a = t[9], c = t[2], l = t[6], h = t[10], u = n + o + h;
    if (u > 0) {
      const f = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / f, this._x = (l - a) * f, this._y = (r - c) * f, this._z = (s - i) * f;
    } else if (n > o && n > h) {
      const f = 2 * Math.sqrt(1 + n - o - h);
      this._w = (l - a) / f, this._x = 0.25 * f, this._y = (i + s) / f, this._z = (r + c) / f;
    } else if (o > h) {
      const f = 2 * Math.sqrt(1 + o - n - h);
      this._w = (r - c) / f, this._x = (i + s) / f, this._y = 0.25 * f, this._z = (a + l) / f;
    } else {
      const f = 2 * Math.sqrt(1 + h - n - o);
      this._w = (s - i) / f, this._x = (r + c) / f, this._y = (a + l) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  },
  setFromUnitVectors: function(e, t) {
    let i = e.dot(t) + 1;
    return i < 1e-6 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  },
  angleTo: function(e) {
    return 2 * Math.acos(Math.abs(Ae.clamp(this.dot(e), -1, 1)));
  },
  rotateTowards: function(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  },
  identity: function() {
    return this.set(0, 0, 0, 1);
  },
  inverse: function() {
    return this.conjugate();
  },
  conjugate: function() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  },
  dot: function(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  },
  lengthSq: function() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  },
  length: function() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  },
  normalize: function() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e);
  },
  premultiply: function(e) {
    return this.multiplyQuaternions(e, this);
  },
  multiplyQuaternions: function(e, t) {
    const n = e._x, i = e._y, r = e._z, s = e._w, o = t._x, a = t._y, c = t._z, l = t._w;
    return this._x = n * l + s * o + i * c - r * a, this._y = i * l + s * a + r * o - n * c, this._z = r * l + s * c + n * a - i * o, this._w = s * l - n * o - i * a - r * c, this._onChangeCallback(), this;
  },
  slerp: function(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, r = this._z, s = this._w;
    let o = s * e._w + n * e._x + i * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = s, this._x = n, this._y = i, this._z = r, this;
    const a = 1 - o * o;
    if (a <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * s + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(a), l = Math.atan2(c, o), h = Math.sin((1 - t) * l) / c, u = Math.sin(t * l) / c;
    return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
  },
  equals: function(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  },
  fromBufferAttribute: function(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  },
  _onChange: function(e) {
    return this._onChangeCallback = e, this;
  },
  _onChangeCallback: function() {
  }
});
const ia = new b(), sl = new at();
function b(e = 0, t = 0, n = 0) {
  this.x = e, this.y = t, this.z = n;
}
Object.assign(b.prototype, {
  isVector3: !0,
  set: function(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this.z = e, this;
  },
  setX: function(e) {
    return this.x = e, this;
  },
  setY: function(e) {
    return this.y = e, this;
  },
  setZ: function(e) {
    return this.z = e, this;
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y, this.z);
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this);
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this.z += e, this;
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this);
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this);
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  },
  multiplyVectors: function(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  },
  applyEuler: function(e) {
    return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(sl.setFromEuler(e));
  },
  applyAxisAngle: function(e, t) {
    return this.applyQuaternion(sl.setFromAxisAngle(e, t));
  },
  applyMatrix3: function(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  },
  applyNormalMatrix: function(e) {
    return this.applyMatrix3(e).normalize();
  },
  applyMatrix4: function(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, s = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * s, this;
  },
  applyQuaternion: function(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, s = e.y, o = e.z, a = e.w, c = a * t + s * i - o * n, l = a * n + o * t - r * i, h = a * i + r * n - s * t, u = -r * t - s * n - o * i;
    return this.x = c * a + u * -r + l * -o - h * -s, this.y = l * a + u * -s + h * -r - c * -o, this.z = h * a + u * -o + c * -s - l * -r, this;
  },
  project: function(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  },
  unproject: function(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  },
  transformDirection: function(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  },
  divide: function(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e);
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  },
  clampLength: function(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  },
  // TODO lengthSquared?
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1);
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e);
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  },
  lerpVectors: function(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  },
  cross: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e);
  },
  crossVectors: function(e, t) {
    const n = e.x, i = e.y, r = e.z, s = t.x, o = t.y, a = t.z;
    return this.x = i * a - r * o, this.y = r * s - n * a, this.z = n * o - i * s, this;
  },
  projectOnVector: function(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  },
  projectOnPlane: function(e) {
    return ia.copy(this).projectOnVector(e), this.sub(ia);
  },
  reflect: function(e) {
    return this.sub(ia.copy(e).multiplyScalar(2 * this.dot(e)));
  },
  angleTo: function(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ae.clamp(n, -1, 1));
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e));
  },
  distanceToSquared: function(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  },
  manhattanDistanceTo: function(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  },
  setFromSpherical: function(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  },
  setFromSphericalCoords: function(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  },
  setFromCylindrical: function(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  },
  setFromCylindricalCoords: function(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  },
  setFromMatrixPosition: function(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  },
  setFromMatrixScale: function(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  },
  setFromMatrixColumn: function(e, t) {
    return this.fromArray(e.elements, t * 4);
  },
  setFromMatrix3Column: function(e, t) {
    return this.fromArray(e.elements, t * 3);
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  },
  random: function() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
});
const li = new b(), Bt = new Ce(), Qf = new b(0, 0, 0), Kf = new b(1, 1, 1), bn = new b(), ys = new b(), bt = new b();
function Ce() {
  this.elements = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
}
Object.assign(Ce.prototype, {
  isMatrix4: !0,
  set: function(e, t, n, i, r, s, o, a, c, l, h, u, f, d, p, x) {
    const y = this.elements;
    return y[0] = e, y[4] = t, y[8] = n, y[12] = i, y[1] = r, y[5] = s, y[9] = o, y[13] = a, y[2] = c, y[6] = l, y[10] = h, y[14] = u, y[3] = f, y[7] = d, y[11] = p, y[15] = x, this;
  },
  identity: function() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  clone: function() {
    return new Ce().fromArray(this.elements);
  },
  copy: function(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  },
  copyPosition: function(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  },
  extractBasis: function(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  },
  makeBasis: function(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  extractRotation: function(e) {
    const t = this.elements, n = e.elements, i = 1 / li.setFromMatrixColumn(e, 0).length(), r = 1 / li.setFromMatrixColumn(e, 1).length(), s = 1 / li.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * s, t[9] = n[9] * s, t[10] = n[10] * s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  },
  makeRotationFromEuler: function(e) {
    e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    const t = this.elements, n = e.x, i = e.y, r = e.z, s = Math.cos(n), o = Math.sin(n), a = Math.cos(i), c = Math.sin(i), l = Math.cos(r), h = Math.sin(r);
    if (e.order === "XYZ") {
      const u = s * l, f = s * h, d = o * l, p = o * h;
      t[0] = a * l, t[4] = -a * h, t[8] = c, t[1] = f + d * c, t[5] = u - p * c, t[9] = -o * a, t[2] = p - u * c, t[6] = d + f * c, t[10] = s * a;
    } else if (e.order === "YXZ") {
      const u = a * l, f = a * h, d = c * l, p = c * h;
      t[0] = u + p * o, t[4] = d * o - f, t[8] = s * c, t[1] = s * h, t[5] = s * l, t[9] = -o, t[2] = f * o - d, t[6] = p + u * o, t[10] = s * a;
    } else if (e.order === "ZXY") {
      const u = a * l, f = a * h, d = c * l, p = c * h;
      t[0] = u - p * o, t[4] = -s * h, t[8] = d + f * o, t[1] = f + d * o, t[5] = s * l, t[9] = p - u * o, t[2] = -s * c, t[6] = o, t[10] = s * a;
    } else if (e.order === "ZYX") {
      const u = s * l, f = s * h, d = o * l, p = o * h;
      t[0] = a * l, t[4] = d * c - f, t[8] = u * c + p, t[1] = a * h, t[5] = p * c + u, t[9] = f * c - d, t[2] = -c, t[6] = o * a, t[10] = s * a;
    } else if (e.order === "YZX") {
      const u = s * a, f = s * c, d = o * a, p = o * c;
      t[0] = a * l, t[4] = p - u * h, t[8] = d * h + f, t[1] = h, t[5] = s * l, t[9] = -o * l, t[2] = -c * l, t[6] = f * h + d, t[10] = u - p * h;
    } else if (e.order === "XZY") {
      const u = s * a, f = s * c, d = o * a, p = o * c;
      t[0] = a * l, t[4] = -h, t[8] = c * l, t[1] = u * h + p, t[5] = s * l, t[9] = f * h - d, t[2] = d * h - f, t[6] = o * l, t[10] = p * h + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  },
  makeRotationFromQuaternion: function(e) {
    return this.compose(Qf, e, Kf);
  },
  lookAt: function(e, t, n) {
    const i = this.elements;
    return bt.subVectors(e, t), bt.lengthSq() === 0 && (bt.z = 1), bt.normalize(), bn.crossVectors(n, bt), bn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? bt.x += 1e-4 : bt.z += 1e-4, bt.normalize(), bn.crossVectors(n, bt)), bn.normalize(), ys.crossVectors(bt, bn), i[0] = bn.x, i[4] = ys.x, i[8] = bt.x, i[1] = bn.y, i[5] = ys.y, i[9] = bt.y, i[2] = bn.z, i[6] = ys.z, i[10] = bt.z, this;
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e);
  },
  premultiply: function(e) {
    return this.multiplyMatrices(e, this);
  },
  multiplyMatrices: function(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, s = n[0], o = n[4], a = n[8], c = n[12], l = n[1], h = n[5], u = n[9], f = n[13], d = n[2], p = n[6], x = n[10], y = n[14], g = n[3], m = n[7], _ = n[11], v = n[15], w = i[0], A = i[4], E = i[8], U = i[12], L = i[1], q = i[5], O = i[9], N = i[13], D = i[2], R = i[6], C = i[10], z = i[14], J = i[3], $ = i[7], re = i[11], de = i[15];
    return r[0] = s * w + o * L + a * D + c * J, r[4] = s * A + o * q + a * R + c * $, r[8] = s * E + o * O + a * C + c * re, r[12] = s * U + o * N + a * z + c * de, r[1] = l * w + h * L + u * D + f * J, r[5] = l * A + h * q + u * R + f * $, r[9] = l * E + h * O + u * C + f * re, r[13] = l * U + h * N + u * z + f * de, r[2] = d * w + p * L + x * D + y * J, r[6] = d * A + p * q + x * R + y * $, r[10] = d * E + p * O + x * C + y * re, r[14] = d * U + p * N + x * z + y * de, r[3] = g * w + m * L + _ * D + v * J, r[7] = g * A + m * q + _ * R + v * $, r[11] = g * E + m * O + _ * C + v * re, r[15] = g * U + m * N + _ * z + v * de, this;
  },
  multiplyScalar: function(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  },
  determinant: function() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], s = e[1], o = e[5], a = e[9], c = e[13], l = e[2], h = e[6], u = e[10], f = e[14], d = e[3], p = e[7], x = e[11], y = e[15];
    return d * (+r * a * h - i * c * h - r * o * u + n * c * u + i * o * f - n * a * f) + p * (+t * a * f - t * c * u + r * s * u - i * s * f + i * c * l - r * a * l) + x * (+t * c * h - t * o * f - r * s * h + n * s * f + r * o * l - n * c * l) + y * (-i * o * l - t * a * h + t * o * u + i * s * h - n * s * u + n * a * l);
  },
  transpose: function() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  },
  setPosition: function(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  },
  getInverse: function(e, t) {
    t !== void 0 && console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
    const n = this.elements, i = e.elements, r = i[0], s = i[1], o = i[2], a = i[3], c = i[4], l = i[5], h = i[6], u = i[7], f = i[8], d = i[9], p = i[10], x = i[11], y = i[12], g = i[13], m = i[14], _ = i[15], v = d * m * u - g * p * u + g * h * x - l * m * x - d * h * _ + l * p * _, w = y * p * u - f * m * u - y * h * x + c * m * x + f * h * _ - c * p * _, A = f * g * u - y * d * u + y * l * x - c * g * x - f * l * _ + c * d * _, E = y * d * h - f * g * h - y * l * p + c * g * p + f * l * m - c * d * m, U = r * v + s * w + o * A + a * E;
    if (U === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const L = 1 / U;
    return n[0] = v * L, n[1] = (g * p * a - d * m * a - g * o * x + s * m * x + d * o * _ - s * p * _) * L, n[2] = (l * m * a - g * h * a + g * o * u - s * m * u - l * o * _ + s * h * _) * L, n[3] = (d * h * a - l * p * a - d * o * u + s * p * u + l * o * x - s * h * x) * L, n[4] = w * L, n[5] = (f * m * a - y * p * a + y * o * x - r * m * x - f * o * _ + r * p * _) * L, n[6] = (y * h * a - c * m * a - y * o * u + r * m * u + c * o * _ - r * h * _) * L, n[7] = (c * p * a - f * h * a + f * o * u - r * p * u - c * o * x + r * h * x) * L, n[8] = A * L, n[9] = (y * d * a - f * g * a - y * s * x + r * g * x + f * s * _ - r * d * _) * L, n[10] = (c * g * a - y * l * a + y * s * u - r * g * u - c * s * _ + r * l * _) * L, n[11] = (f * l * a - c * d * a - f * s * u + r * d * u + c * s * x - r * l * x) * L, n[12] = E * L, n[13] = (f * g * o - y * d * o + y * s * p - r * g * p - f * s * m + r * d * m) * L, n[14] = (y * l * o - c * g * o - y * s * h + r * g * h + c * s * m - r * l * m) * L, n[15] = (c * d * o - f * l * o + f * s * h - r * d * h - c * s * p + r * l * p) * L, this;
  },
  scale: function(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  },
  getMaxScaleOnAxis: function() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  },
  makeTranslation: function(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationX: function(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationY: function(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationZ: function(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationAxis: function(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, s = e.x, o = e.y, a = e.z, c = r * s, l = r * o;
    return this.set(
      c * s + n,
      c * o - i * a,
      c * a + i * o,
      0,
      c * o + i * a,
      l * o + n,
      l * a - i * s,
      0,
      c * a - i * o,
      l * a + i * s,
      r * a * a + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeScale: function(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeShear: function(e, t, n) {
    return this.set(
      1,
      t,
      n,
      0,
      e,
      1,
      n,
      0,
      e,
      t,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  compose: function(e, t, n) {
    const i = this.elements, r = t._x, s = t._y, o = t._z, a = t._w, c = r + r, l = s + s, h = o + o, u = r * c, f = r * l, d = r * h, p = s * l, x = s * h, y = o * h, g = a * c, m = a * l, _ = a * h, v = n.x, w = n.y, A = n.z;
    return i[0] = (1 - (p + y)) * v, i[1] = (f + _) * v, i[2] = (d - m) * v, i[3] = 0, i[4] = (f - _) * w, i[5] = (1 - (u + y)) * w, i[6] = (x + g) * w, i[7] = 0, i[8] = (d + m) * A, i[9] = (x - g) * A, i[10] = (1 - (u + p)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  },
  decompose: function(e, t, n) {
    const i = this.elements;
    let r = li.set(i[0], i[1], i[2]).length(), s = li.set(i[4], i[5], i[6]).length(), o = li.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Bt.copy(this);
    const c = 1 / r, l = 1 / s, h = 1 / o;
    return Bt.elements[0] *= c, Bt.elements[1] *= c, Bt.elements[2] *= c, Bt.elements[4] *= l, Bt.elements[5] *= l, Bt.elements[6] *= l, Bt.elements[8] *= h, Bt.elements[9] *= h, Bt.elements[10] *= h, t.setFromRotationMatrix(Bt), n.x = r, n.y = s, n.z = o, this;
  },
  makePerspective: function(e, t, n, i, r, s) {
    s === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    const o = this.elements, a = 2 * r / (t - e), c = 2 * r / (n - i), l = (t + e) / (t - e), h = (n + i) / (n - i), u = -(s + r) / (s - r), f = -2 * s * r / (s - r);
    return o[0] = a, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = f, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  },
  makeOrthographic: function(e, t, n, i, r, s) {
    const o = this.elements, a = 1 / (t - e), c = 1 / (n - i), l = 1 / (s - r), h = (t + e) * a, u = (n + i) * c, f = (s + r) * l;
    return o[0] = 2 * a, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * l, o[14] = -f, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
  },
  equals: function(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
});
const ol = new Ce(), al = new at();
function tr(e = 0, t = 0, n = 0, i = tr.DefaultOrder) {
  this._x = e, this._y = t, this._z = n, this._order = i;
}
tr.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
tr.DefaultOrder = "XYZ";
Object.defineProperties(tr.prototype, {
  x: {
    get: function() {
      return this._x;
    },
    set: function(e) {
      this._x = e, this._onChangeCallback();
    }
  },
  y: {
    get: function() {
      return this._y;
    },
    set: function(e) {
      this._y = e, this._onChangeCallback();
    }
  },
  z: {
    get: function() {
      return this._z;
    },
    set: function(e) {
      this._z = e, this._onChangeCallback();
    }
  },
  order: {
    get: function() {
      return this._order;
    },
    set: function(e) {
      this._order = e, this._onChangeCallback();
    }
  }
});
Object.assign(tr.prototype, {
  isEuler: !0,
  set: function(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._order = i || this._order, this._onChangeCallback(), this;
  },
  clone: function() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  },
  copy: function(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  },
  setFromRotationMatrix: function(e, t, n) {
    const i = Ae.clamp, r = e.elements, s = r[0], o = r[4], a = r[8], c = r[1], l = r[5], h = r[9], u = r[2], f = r[6], d = r[10];
    switch (t = t || this._order, t) {
      case "XYZ":
        this._y = Math.asin(i(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-i(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(i(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-i(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, d));
        break;
      case "XZY":
        this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n !== !1 && this._onChangeCallback(), this;
  },
  setFromQuaternion: function(e, t, n) {
    return ol.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ol, t, n);
  },
  setFromVector3: function(e, t) {
    return this.set(e.x, e.y, e.z, t || this._order);
  },
  reorder: function(e) {
    return al.setFromEuler(this), this.setFromQuaternion(al, e);
  },
  equals: function(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  },
  fromArray: function(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  },
  toVector3: function(e) {
    return e ? e.set(this._x, this._y, this._z) : new b(this._x, this._y, this._z);
  },
  _onChange: function(e) {
    return this._onChangeCallback = e, this;
  },
  _onChangeCallback: function() {
  }
});
function Dc() {
  this.mask = 1;
}
Object.assign(Dc.prototype, {
  set: function(e) {
    this.mask = 1 << e | 0;
  },
  enable: function(e) {
    this.mask |= 1 << e | 0;
  },
  enableAll: function() {
    this.mask = -1;
  },
  toggle: function(e) {
    this.mask ^= 1 << e | 0;
  },
  disable: function(e) {
    this.mask &= ~(1 << e | 0);
  },
  disableAll: function() {
    this.mask = 0;
  },
  test: function(e) {
    return (this.mask & e.mask) !== 0;
  }
});
let ed = 0;
const cl = new b(), ui = new at(), sn = new Ce(), xs = new b(), ar = new b(), td = new b(), nd = new at(), ll = new b(1, 0, 0), ul = new b(0, 1, 0), hl = new b(0, 0, 1), id = { type: "added" }, rd = { type: "removed" };
function ie() {
  Object.defineProperty(this, "id", { value: ed++ }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ie.DefaultUp.clone();
  const e = new b(), t = new tr(), n = new at(), i = new b(1, 1, 1);
  function r() {
    n.setFromEuler(t, !1);
  }
  function s() {
    t.setFromQuaternion(n, void 0, !1);
  }
  t._onChange(r), n._onChange(s), Object.defineProperties(this, {
    position: {
      configurable: !0,
      enumerable: !0,
      value: e
    },
    rotation: {
      configurable: !0,
      enumerable: !0,
      value: t
    },
    quaternion: {
      configurable: !0,
      enumerable: !0,
      value: n
    },
    scale: {
      configurable: !0,
      enumerable: !0,
      value: i
    },
    modelViewMatrix: {
      value: new Ce()
    },
    normalMatrix: {
      value: new gt()
    }
  }), this.matrix = new Ce(), this.matrixWorld = new Ce(), this.matrixAutoUpdate = ie.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Dc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {};
}
ie.DefaultUp = new b(0, 1, 0);
ie.DefaultMatrixAutoUpdate = !0;
ie.prototype = Object.assign(Object.create(xn.prototype), {
  constructor: ie,
  isObject3D: !0,
  onBeforeRender: function() {
  },
  onAfterRender: function() {
  },
  applyMatrix4: function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  },
  applyQuaternion: function(e) {
    return this.quaternion.premultiply(e), this;
  },
  setRotationFromAxisAngle: function(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  },
  setRotationFromEuler: function(e) {
    this.quaternion.setFromEuler(e, !0);
  },
  setRotationFromMatrix: function(e) {
    this.quaternion.setFromRotationMatrix(e);
  },
  setRotationFromQuaternion: function(e) {
    this.quaternion.copy(e);
  },
  rotateOnAxis: function(e, t) {
    return ui.setFromAxisAngle(e, t), this.quaternion.multiply(ui), this;
  },
  rotateOnWorldAxis: function(e, t) {
    return ui.setFromAxisAngle(e, t), this.quaternion.premultiply(ui), this;
  },
  rotateX: function(e) {
    return this.rotateOnAxis(ll, e);
  },
  rotateY: function(e) {
    return this.rotateOnAxis(ul, e);
  },
  rotateZ: function(e) {
    return this.rotateOnAxis(hl, e);
  },
  translateOnAxis: function(e, t) {
    return cl.copy(e).applyQuaternion(this.quaternion), this.position.add(cl.multiplyScalar(t)), this;
  },
  translateX: function(e) {
    return this.translateOnAxis(ll, e);
  },
  translateY: function(e) {
    return this.translateOnAxis(ul, e);
  },
  translateZ: function(e) {
    return this.translateOnAxis(hl, e);
  },
  localToWorld: function(e) {
    return e.applyMatrix4(this.matrixWorld);
  },
  worldToLocal: function(e) {
    return e.applyMatrix4(sn.getInverse(this.matrixWorld));
  },
  lookAt: function(e, t, n) {
    e.isVector3 ? xs.copy(e) : xs.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), ar.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? sn.lookAt(ar, xs, this.up) : sn.lookAt(xs, ar, this.up), this.quaternion.setFromRotationMatrix(sn), i && (sn.extractRotation(i.matrixWorld), ui.setFromRotationMatrix(sn), this.quaternion.premultiply(ui.inverse()));
  },
  add: function(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(id)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  },
  remove: function(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(rd)), this;
  },
  attach: function(e) {
    return this.updateWorldMatrix(!0, !1), sn.getInverse(this.matrixWorld), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), sn.multiply(e.parent.matrixWorld)), e.applyMatrix4(sn), e.updateWorldMatrix(!1, !1), this.add(e), this;
  },
  getObjectById: function(e) {
    return this.getObjectByProperty("id", e);
  },
  getObjectByName: function(e) {
    return this.getObjectByProperty("name", e);
  },
  getObjectByProperty: function(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const s = this.children[n].getObjectByProperty(e, t);
      if (s !== void 0)
        return s;
    }
  },
  getWorldPosition: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new b()), this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld);
  },
  getWorldQuaternion: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new at()), this.updateMatrixWorld(!0), this.matrixWorld.decompose(ar, e, td), e;
  },
  getWorldScale: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new b()), this.updateMatrixWorld(!0), this.matrixWorld.decompose(ar, nd, e), e;
  },
  getWorldDirection: function(e) {
    e === void 0 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new b()), this.updateMatrixWorld(!0);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  },
  raycast: function() {
  },
  traverse: function(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  },
  traverseVisible: function(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  },
  traverseAncestors: function(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  },
  updateMatrix: function() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  },
  updateMatrixWorld: function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  },
  updateWorldMatrix: function(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let r = 0, s = i.length; r < s; r++)
        i[r].updateWorldMatrix(!1, !0);
    }
  },
  toJSON: function(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON());
    function r(o, a) {
      return o[a.uuid] === void 0 && (o[a.uuid] = a.toJSON(e)), a.uuid;
    }
    if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const a = o.shapes;
        if (Array.isArray(a))
          for (let c = 0, l = a.length; c < l; c++) {
            const h = a[c];
            r(e.shapes, h);
          }
        else
          r(e.shapes, a);
      }
    }
    if (this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let a = 0, c = this.material.length; a < c; a++)
          o.push(r(e.materials, this.material[a]));
        i.material = o;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (t) {
      const o = s(e.geometries), a = s(e.materials), c = s(e.textures), l = s(e.images), h = s(e.shapes);
      o.length > 0 && (n.geometries = o), a.length > 0 && (n.materials = a), c.length > 0 && (n.textures = c), l.length > 0 && (n.images = l), h.length > 0 && (n.shapes = h);
    }
    return n.object = i, n;
    function s(o) {
      const a = [];
      for (const c in o) {
        const l = o[c];
        delete l.metadata, a.push(l);
      }
      return a;
    }
  },
  clone: function(e) {
    return new this.constructor().copy(this, e);
  },
  copy: function(e, t) {
    if (t === void 0 && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
});
function Ar() {
  ie.call(this), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
Ar.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: Ar,
  isScene: !0,
  copy: function(e, t) {
    return ie.prototype.copy.call(this, e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  },
  toJSON: function(e) {
    const t = ie.prototype.toJSON.call(this, e);
    return this.background !== null && (t.object.background = this.background.toJSON(e)), this.environment !== null && (t.object.environment = this.environment.toJSON(e)), this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
const on = [
  new b(),
  new b(),
  new b(),
  new b(),
  new b(),
  new b(),
  new b(),
  new b()
], cr = new b(), ra = new nn(), hi = new b(), fi = new b(), di = new b(), wn = new b(), Mn = new b(), kn = new b(), lr = new b(), vs = new b(), _s = new b(), Hn = new b();
function nn(e, t) {
  this.min = e !== void 0 ? e : new b(1 / 0, 1 / 0, 1 / 0), this.max = t !== void 0 ? t : new b(-1 / 0, -1 / 0, -1 / 0);
}
Object.assign(nn.prototype, {
  isBox3: !0,
  set: function(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  },
  setFromArray: function(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, o = -1 / 0;
    for (let a = 0, c = e.length; a < c; a += 3) {
      const l = e[a], h = e[a + 1], u = e[a + 2];
      l < t && (t = l), h < n && (n = h), u < i && (i = u), l > r && (r = l), h > s && (s = h), u > o && (o = u);
    }
    return this.min.set(t, n, i), this.max.set(r, s, o), this;
  },
  setFromBufferAttribute: function(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, o = -1 / 0;
    for (let a = 0, c = e.count; a < c; a++) {
      const l = e.getX(a), h = e.getY(a), u = e.getZ(a);
      l < t && (t = l), h < n && (n = h), u < i && (i = u), l > r && (r = l), h > s && (s = h), u > o && (o = u);
    }
    return this.min.set(t, n, i), this.max.set(r, s, o), this;
  },
  setFromPoints: function(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  },
  setFromCenterAndSize: function(e, t) {
    const n = cr.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  },
  setFromObject: function(e) {
    return this.makeEmpty(), this.expandByObject(e);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  },
  makeEmpty: function() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  },
  isEmpty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new b()), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  },
  getSize: function(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getSize() target is now required"), e = new b()), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  },
  expandByPoint: function(e) {
    return this.min.min(e), this.max.max(e), this;
  },
  expandByVector: function(e) {
    return this.min.sub(e), this.max.add(e), this;
  },
  expandByScalar: function(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  },
  expandByObject: function(e) {
    e.updateWorldMatrix(!1, !1);
    const t = e.geometry;
    t !== void 0 && (t.boundingBox === null && t.computeBoundingBox(), ra.copy(t.boundingBox), ra.applyMatrix4(e.matrixWorld), this.union(ra));
    const n = e.children;
    for (let i = 0, r = n.length; i < r; i++)
      this.expandByObject(n[i]);
    return this;
  },
  containsPoint: function(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  },
  getParameter: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new b()), t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  },
  intersectsBox: function(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  },
  intersectsSphere: function(e) {
    return this.clampPoint(e.center, cr), cr.distanceToSquared(e.center) <= e.radius * e.radius;
  },
  intersectsPlane: function(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  },
  intersectsTriangle: function(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(lr), vs.subVectors(this.max, lr), hi.subVectors(e.a, lr), fi.subVectors(e.b, lr), di.subVectors(e.c, lr), wn.subVectors(fi, hi), Mn.subVectors(di, fi), kn.subVectors(hi, di);
    let t = [
      0,
      -wn.z,
      wn.y,
      0,
      -Mn.z,
      Mn.y,
      0,
      -kn.z,
      kn.y,
      wn.z,
      0,
      -wn.x,
      Mn.z,
      0,
      -Mn.x,
      kn.z,
      0,
      -kn.x,
      -wn.y,
      wn.x,
      0,
      -Mn.y,
      Mn.x,
      0,
      -kn.y,
      kn.x,
      0
    ];
    return !sa(t, hi, fi, di, vs) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !sa(t, hi, fi, di, vs)) ? !1 : (_s.crossVectors(wn, Mn), t = [_s.x, _s.y, _s.z], sa(t, hi, fi, di, vs));
  },
  clampPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new b()), t.copy(e).clamp(this.min, this.max);
  },
  distanceToPoint: function(e) {
    return cr.copy(e).clamp(this.min, this.max).sub(e).length();
  },
  getBoundingSphere: function(e) {
    return e === void 0 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = this.getSize(cr).length() * 0.5, e;
  },
  intersect: function(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  },
  union: function(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  },
  applyMatrix4: function(e) {
    return this.isEmpty() ? this : (on[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), on[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), on[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), on[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), on[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), on[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), on[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), on[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(on), this);
  },
  translate: function(e) {
    return this.min.add(e), this.max.add(e), this;
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
});
function sa(e, t, n, i, r) {
  for (let s = 0, o = e.length - 3; s <= o; s += 3) {
    Hn.fromArray(e, s);
    const a = r.x * Math.abs(Hn.x) + r.y * Math.abs(Hn.y) + r.z * Math.abs(Hn.z), c = t.dot(Hn), l = n.dot(Hn), h = i.dot(Hn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const sd = new nn();
function vn(e, t) {
  this.center = e !== void 0 ? e : new b(), this.radius = t !== void 0 ? t : -1;
}
Object.assign(vn.prototype, {
  set: function(e, t) {
    return this.center.copy(e), this.radius = t, this;
  },
  setFromPoints: function(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : sd.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, s = e.length; r < s; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  },
  isEmpty: function() {
    return this.radius < 0;
  },
  makeEmpty: function() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  },
  containsPoint: function(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  },
  distanceToPoint: function(e) {
    return e.distanceTo(this.center) - this.radius;
  },
  intersectsSphere: function(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  },
  intersectsBox: function(e) {
    return e.intersectsSphere(this);
  },
  intersectsPlane: function(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  },
  clampPoint: function(e, t) {
    const n = this.center.distanceToSquared(e);
    return t === void 0 && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new b()), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  },
  getBoundingBox: function(e) {
    return e === void 0 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new nn()), this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  },
  applyMatrix4: function(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  },
  translate: function(e) {
    return this.center.add(e), this;
  },
  equals: function(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
});
const an = new b(), oa = new b(), bs = new b(), Sn = new b(), aa = new b(), ws = new b(), ca = new b();
function nr(e, t) {
  this.origin = e !== void 0 ? e : new b(), this.direction = t !== void 0 ? t : new b(0, 0, -1);
}
Object.assign(nr.prototype, {
  set: function(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  },
  at: function(e, t) {
    return t === void 0 && (console.warn("THREE.Ray: .at() target is now required"), t = new b()), t.copy(this.direction).multiplyScalar(e).add(this.origin);
  },
  lookAt: function(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  },
  recast: function(e) {
    return this.origin.copy(this.at(e, an)), this;
  },
  closestPointToPoint: function(e, t) {
    t === void 0 && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new b()), t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  },
  distanceToPoint: function(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  },
  distanceSqToPoint: function(e) {
    const t = an.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (an.copy(this.direction).multiplyScalar(t).add(this.origin), an.distanceToSquared(e));
  },
  distanceSqToSegment: function(e, t, n, i) {
    oa.copy(e).add(t).multiplyScalar(0.5), bs.copy(t).sub(e).normalize(), Sn.copy(this.origin).sub(oa);
    const r = e.distanceTo(t) * 0.5, s = -this.direction.dot(bs), o = Sn.dot(this.direction), a = -Sn.dot(bs), c = Sn.lengthSq(), l = Math.abs(1 - s * s);
    let h, u, f, d;
    if (l > 0)
      if (h = s * a - o, u = s * o - a, d = r * l, h >= 0)
        if (u >= -d)
          if (u <= d) {
            const p = 1 / l;
            h *= p, u *= p, f = h * (h + s * u + 2 * o) + u * (s * h + u + 2 * a) + c;
          } else
            u = r, h = Math.max(0, -(s * u + o)), f = -h * h + u * (u + 2 * a) + c;
        else
          u = -r, h = Math.max(0, -(s * u + o)), f = -h * h + u * (u + 2 * a) + c;
      else
        u <= -d ? (h = Math.max(0, -(-s * r + o)), u = h > 0 ? -r : Math.min(Math.max(-r, -a), r), f = -h * h + u * (u + 2 * a) + c) : u <= d ? (h = 0, u = Math.min(Math.max(-r, -a), r), f = u * (u + 2 * a) + c) : (h = Math.max(0, -(s * r + o)), u = h > 0 ? r : Math.min(Math.max(-r, -a), r), f = -h * h + u * (u + 2 * a) + c);
    else
      u = s > 0 ? -r : r, h = Math.max(0, -(s * u + o)), f = -h * h + u * (u + 2 * a) + c;
    return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(bs).multiplyScalar(u).add(oa), f;
  },
  intersectSphere: function(e, t) {
    an.subVectors(e.center, this.origin);
    const n = an.dot(this.direction), i = an.dot(an) - n * n, r = e.radius * e.radius;
    if (i > r)
      return null;
    const s = Math.sqrt(r - i), o = n - s, a = n + s;
    return o < 0 && a < 0 ? null : o < 0 ? this.at(a, t) : this.at(o, t);
  },
  intersectsSphere: function(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  },
  distanceToPlane: function(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  },
  intersectPlane: function(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  },
  intersectsPlane: function(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  },
  intersectBox: function(e, t) {
    let n, i, r, s, o, a;
    const c = 1 / this.direction.x, l = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (e.min.x - u.x) * c, i = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, i = (e.min.x - u.x) * c), l >= 0 ? (r = (e.min.y - u.y) * l, s = (e.max.y - u.y) * l) : (r = (e.max.y - u.y) * l, s = (e.min.y - u.y) * l), n > s || r > i || ((r > n || n !== n) && (n = r), (s < i || i !== i) && (i = s), h >= 0 ? (o = (e.min.z - u.z) * h, a = (e.max.z - u.z) * h) : (o = (e.max.z - u.z) * h, a = (e.min.z - u.z) * h), n > a || o > i) || ((o > n || n !== n) && (n = o), (a < i || i !== i) && (i = a), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  },
  intersectsBox: function(e) {
    return this.intersectBox(e, an) !== null;
  },
  intersectTriangle: function(e, t, n, i, r) {
    aa.subVectors(t, e), ws.subVectors(n, e), ca.crossVectors(aa, ws);
    let s = this.direction.dot(ca), o;
    if (s > 0) {
      if (i)
        return null;
      o = 1;
    } else if (s < 0)
      o = -1, s = -s;
    else
      return null;
    Sn.subVectors(this.origin, e);
    const a = o * this.direction.dot(ws.crossVectors(Sn, ws));
    if (a < 0)
      return null;
    const c = o * this.direction.dot(aa.cross(Sn));
    if (c < 0 || a + c > s)
      return null;
    const l = -o * Sn.dot(ca);
    return l < 0 ? null : this.at(l / s, r);
  },
  applyMatrix4: function(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  },
  equals: function(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
});
const la = new b(), od = new b(), ad = new gt();
function Yt(e, t) {
  this.normal = e !== void 0 ? e : new b(1, 0, 0), this.constant = t !== void 0 ? t : 0;
}
Object.assign(Yt.prototype, {
  isPlane: !0,
  set: function(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  },
  setComponents: function(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  },
  setFromNormalAndCoplanarPoint: function(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  },
  setFromCoplanarPoints: function(e, t, n) {
    const i = la.subVectors(n, t).cross(od.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  },
  normalize: function() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  },
  negate: function() {
    return this.constant *= -1, this.normal.negate(), this;
  },
  distanceToPoint: function(e) {
    return this.normal.dot(e) + this.constant;
  },
  distanceToSphere: function(e) {
    return this.distanceToPoint(e.center) - e.radius;
  },
  projectPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new b()), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  },
  intersectLine: function(e, t) {
    t === void 0 && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new b());
    const n = e.delta(la), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : void 0;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    if (!(r < 0 || r > 1))
      return t.copy(n).multiplyScalar(r).add(e.start);
  },
  intersectsLine: function(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  },
  intersectsBox: function(e) {
    return e.intersectsPlane(this);
  },
  intersectsSphere: function(e) {
    return e.intersectsPlane(this);
  },
  coplanarPoint: function(e) {
    return e === void 0 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new b()), e.copy(this.normal).multiplyScalar(-this.constant);
  },
  applyMatrix4: function(e, t) {
    const n = t || ad.getNormalMatrix(e), i = this.coplanarPoint(la).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  },
  translate: function(e) {
    return this.constant -= e.dot(this.normal), this;
  },
  equals: function(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
});
const Gt = new b(), hn = new b(), ua = new b(), cn = new b(), pi = new b(), mi = new b(), fl = new b(), ha = new b(), fa = new b(), da = new b();
function lt(e, t, n) {
  this.a = e !== void 0 ? e : new b(), this.b = t !== void 0 ? t : new b(), this.c = n !== void 0 ? n : new b();
}
Object.assign(lt, {
  getNormal: function(e, t, n, i) {
    i === void 0 && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new b()), i.subVectors(n, t), Gt.subVectors(e, t), i.cross(Gt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  },
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  getBarycoord: function(e, t, n, i, r) {
    Gt.subVectors(i, t), hn.subVectors(n, t), ua.subVectors(e, t);
    const s = Gt.dot(Gt), o = Gt.dot(hn), a = Gt.dot(ua), c = hn.dot(hn), l = hn.dot(ua), h = s * c - o * o;
    if (r === void 0 && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new b()), h === 0)
      return r.set(-2, -1, -1);
    const u = 1 / h, f = (c * a - o * l) * u, d = (s * l - o * a) * u;
    return r.set(1 - f - d, d, f);
  },
  containsPoint: function(e, t, n, i) {
    return lt.getBarycoord(e, t, n, i, cn), cn.x >= 0 && cn.y >= 0 && cn.x + cn.y <= 1;
  },
  getUV: function(e, t, n, i, r, s, o, a) {
    return this.getBarycoord(e, t, n, i, cn), a.set(0, 0), a.addScaledVector(r, cn.x), a.addScaledVector(s, cn.y), a.addScaledVector(o, cn.z), a;
  },
  isFrontFacing: function(e, t, n, i) {
    return Gt.subVectors(n, t), hn.subVectors(e, t), Gt.cross(hn).dot(i) < 0;
  }
});
Object.assign(lt.prototype, {
  set: function(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  },
  setFromPointsAndIndices: function(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  },
  getArea: function() {
    return Gt.subVectors(this.c, this.b), hn.subVectors(this.a, this.b), Gt.cross(hn).length() * 0.5;
  },
  getMidpoint: function(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new b()), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  },
  getNormal: function(e) {
    return lt.getNormal(this.a, this.b, this.c, e);
  },
  getPlane: function(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new Yt()), e.setFromCoplanarPoints(this.a, this.b, this.c);
  },
  getBarycoord: function(e, t) {
    return lt.getBarycoord(e, this.a, this.b, this.c, t);
  },
  getUV: function(e, t, n, i, r) {
    return lt.getUV(e, this.a, this.b, this.c, t, n, i, r);
  },
  containsPoint: function(e) {
    return lt.containsPoint(e, this.a, this.b, this.c);
  },
  isFrontFacing: function(e) {
    return lt.isFrontFacing(this.a, this.b, this.c, e);
  },
  intersectsBox: function(e) {
    return e.intersectsTriangle(this);
  },
  closestPointToPoint: function(e, t) {
    t === void 0 && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new b());
    const n = this.a, i = this.b, r = this.c;
    let s, o;
    pi.subVectors(i, n), mi.subVectors(r, n), ha.subVectors(e, n);
    const a = pi.dot(ha), c = mi.dot(ha);
    if (a <= 0 && c <= 0)
      return t.copy(n);
    fa.subVectors(e, i);
    const l = pi.dot(fa), h = mi.dot(fa);
    if (l >= 0 && h <= l)
      return t.copy(i);
    const u = a * h - l * c;
    if (u <= 0 && a >= 0 && l <= 0)
      return s = a / (a - l), t.copy(n).addScaledVector(pi, s);
    da.subVectors(e, r);
    const f = pi.dot(da), d = mi.dot(da);
    if (d >= 0 && f <= d)
      return t.copy(r);
    const p = f * c - a * d;
    if (p <= 0 && c >= 0 && d <= 0)
      return o = c / (c - d), t.copy(n).addScaledVector(mi, o);
    const x = l * d - f * h;
    if (x <= 0 && h - l >= 0 && f - d >= 0)
      return fl.subVectors(r, i), o = (h - l) / (h - l + (f - d)), t.copy(i).addScaledVector(fl, o);
    const y = 1 / (x + p + u);
    return s = p * y, o = u * y, t.copy(n).addScaledVector(pi, s).addScaledVector(mi, o);
  },
  equals: function(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
});
const Du = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Ft = { h: 0, s: 0, l: 0 }, Ms = { h: 0, s: 0, l: 0 };
function fe(e, t, n) {
  return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
}
function pa(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
function ma(e) {
  return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function ga(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
Object.assign(fe.prototype, {
  isColor: !0,
  r: 1,
  g: 1,
  b: 1,
  set: function(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  },
  setScalar: function(e) {
    return this.r = e, this.g = e, this.b = e, this;
  },
  setHex: function(e) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this;
  },
  setRGB: function(e, t, n) {
    return this.r = e, this.g = t, this.b = n, this;
  },
  setHSL: function(e, t, n) {
    if (e = Ae.euclideanModulo(e, 1), t = Ae.clamp(t, 0, 1), n = Ae.clamp(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const i = n <= 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - i;
      this.r = pa(r, i, e + 1 / 3), this.g = pa(r, i, e), this.b = pa(r, i, e - 1 / 3);
    }
    return this;
  },
  setStyle: function(e) {
    function t(i) {
      i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let n;
    if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
      let i;
      const r = n[1], s = n[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))
            return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[5]), this;
          if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))
            return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[5]), this;
          break;
        case "hsl":
        case "hsla":
          if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)) {
            const o = parseFloat(i[1]) / 360, a = parseInt(i[2], 10) / 100, c = parseInt(i[3], 10) / 100;
            return t(i[5]), this.setHSL(o, a, c);
          }
          break;
      }
    } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
      const i = n[1], r = i.length;
      if (r === 3)
        return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this;
      if (r === 6)
        return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this;
    }
    return e && e.length > 0 ? this.setColorName(e) : this;
  },
  setColorName: function(e) {
    const t = Du[e];
    return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this;
  },
  clone: function() {
    return new this.constructor(this.r, this.g, this.b);
  },
  copy: function(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  },
  copyGammaToLinear: function(e, t) {
    return t === void 0 && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this;
  },
  copyLinearToGamma: function(e, t) {
    t === void 0 && (t = 2);
    const n = t > 0 ? 1 / t : 1;
    return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this;
  },
  convertGammaToLinear: function(e) {
    return this.copyGammaToLinear(this, e), this;
  },
  convertLinearToGamma: function(e) {
    return this.copyLinearToGamma(this, e), this;
  },
  copySRGBToLinear: function(e) {
    return this.r = ma(e.r), this.g = ma(e.g), this.b = ma(e.b), this;
  },
  copyLinearToSRGB: function(e) {
    return this.r = ga(e.r), this.g = ga(e.g), this.b = ga(e.b), this;
  },
  convertSRGBToLinear: function() {
    return this.copySRGBToLinear(this), this;
  },
  convertLinearToSRGB: function() {
    return this.copyLinearToSRGB(this), this;
  },
  getHex: function() {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
  },
  getHexString: function() {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  },
  getHSL: function(e) {
    e === void 0 && (console.warn("THREE.Color: .getHSL() target is now required"), e = { h: 0, s: 0, l: 0 });
    const t = this.r, n = this.g, i = this.b, r = Math.max(t, n, i), s = Math.min(t, n, i);
    let o, a;
    const c = (s + r) / 2;
    if (s === r)
      o = 0, a = 0;
    else {
      const l = r - s;
      switch (a = c <= 0.5 ? l / (r + s) : l / (2 - r - s), r) {
        case t:
          o = (n - i) / l + (n < i ? 6 : 0);
          break;
        case n:
          o = (i - t) / l + 2;
          break;
        case i:
          o = (t - n) / l + 4;
          break;
      }
      o /= 6;
    }
    return e.h = o, e.s = a, e.l = c, e;
  },
  getStyle: function() {
    return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
  },
  offsetHSL: function(e, t, n) {
    return this.getHSL(Ft), Ft.h += e, Ft.s += t, Ft.l += n, this.setHSL(Ft.h, Ft.s, Ft.l), this;
  },
  add: function(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  },
  addColors: function(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  },
  addScalar: function(e) {
    return this.r += e, this.g += e, this.b += e, this;
  },
  sub: function(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  },
  multiply: function(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  },
  multiplyScalar: function(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  },
  lerp: function(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  },
  lerpHSL: function(e, t) {
    this.getHSL(Ft), e.getHSL(Ms);
    const n = Ae.lerp(Ft.h, Ms.h, t), i = Ae.lerp(Ft.s, Ms.s, t), r = Ae.lerp(Ft.l, Ms.l, t);
    return this.setHSL(n, i, r), this;
  },
  equals: function(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  },
  fromBufferAttribute: function(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this;
  },
  toJSON: function() {
    return this.getHex();
  }
});
fe.NAMES = Du;
function uo(e, t, n, i, r, s) {
  this.a = e, this.b = t, this.c = n, this.normal = i && i.isVector3 ? i : new b(), this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new fe(), this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = s !== void 0 ? s : 0;
}
Object.assign(uo.prototype, {
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
    for (let t = 0, n = e.vertexNormals.length; t < n; t++)
      this.vertexNormals[t] = e.vertexNormals[t].clone();
    for (let t = 0, n = e.vertexColors.length; t < n; t++)
      this.vertexColors[t] = e.vertexColors[t].clone();
    return this;
  }
});
let cd = 0;
function _e() {
  Object.defineProperty(this, "id", { value: cd++ }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = vr, this.side = as, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Eu, this.blendDst = Au, this.blendEquation = Ti, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Oa, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Zf, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = na, this.stencilZFail = na, this.stencilZPass = na, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
}
_e.prototype = Object.assign(Object.create(xn.prototype), {
  constructor: _e,
  isMaterial: !0,
  onBeforeCompile: function() {
  },
  customProgramCacheKey: function() {
    return this.onBeforeCompile.toString();
  },
  setValues: function(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if (t === "shading") {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === Tu;
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  },
  toJSON: function(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, this.combine !== void 0 && (n.combine = this.combine), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== vr && (n.blending = this.blending), this.flatShading === !0 && (n.flatShading = this.flatShading), this.side !== as && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (n.morphTargets = !0), this.morphNormals === !0 && (n.morphNormals = !0), this.skinning === !0 && (n.skinning = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(r) {
      const s = [];
      for (const o in r) {
        const a = r[o];
        delete a.metadata, s.push(a);
      }
      return s;
    }
    if (t) {
      const r = i(e.textures), s = i(e.images);
      r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s);
    }
    return n;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
Object.defineProperty(_e.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
function Pt(e) {
  _e.call(this), this.type = "MeshBasicMaterial", this.color = new fe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = jo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e);
}
Pt.prototype = Object.create(_e.prototype);
Pt.prototype.constructor = Pt;
Pt.prototype.isMeshBasicMaterial = !0;
Pt.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this;
};
const ze = new b(), Ss = new H();
function ge(e, t, n) {
  if (Array.isArray(e))
    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
  this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Jo, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
}
Object.defineProperty(ge.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
Object.assign(ge.prototype, {
  isBufferAttribute: !0,
  onUploadCallback: function() {
  },
  setUsage: function(e) {
    return this.usage = e, this;
  },
  copy: function(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  },
  copyAt: function(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  },
  copyArray: function(e) {
    return this.array.set(e), this;
  },
  copyColorsArray: function(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let s = e[i];
      s === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), s = new fe()), t[n++] = s.r, t[n++] = s.g, t[n++] = s.b;
    }
    return this;
  },
  copyVector2sArray: function(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let s = e[i];
      s === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), s = new H()), t[n++] = s.x, t[n++] = s.y;
    }
    return this;
  },
  copyVector3sArray: function(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let s = e[i];
      s === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), s = new b()), t[n++] = s.x, t[n++] = s.y, t[n++] = s.z;
    }
    return this;
  },
  copyVector4sArray: function(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let s = e[i];
      s === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), s = new Be()), t[n++] = s.x, t[n++] = s.y, t[n++] = s.z, t[n++] = s.w;
    }
    return this;
  },
  applyMatrix3: function(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ss.fromBufferAttribute(this, t), Ss.applyMatrix3(e), this.setXY(t, Ss.x, Ss.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ze.fromBufferAttribute(this, t), ze.applyMatrix3(e), this.setXYZ(t, ze.x, ze.y, ze.z);
    return this;
  },
  applyMatrix4: function(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ze.x = this.getX(t), ze.y = this.getY(t), ze.z = this.getZ(t), ze.applyMatrix4(e), this.setXYZ(t, ze.x, ze.y, ze.z);
    return this;
  },
  applyNormalMatrix: function(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ze.x = this.getX(t), ze.y = this.getY(t), ze.z = this.getZ(t), ze.applyNormalMatrix(e), this.setXYZ(t, ze.x, ze.y, ze.z);
    return this;
  },
  transformDirection: function(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ze.x = this.getX(t), ze.y = this.getY(t), ze.z = this.getZ(t), ze.transformDirection(e), this.setXYZ(t, ze.x, ze.y, ze.z);
    return this;
  },
  set: function(e, t) {
    return t === void 0 && (t = 0), this.array.set(e, t), this;
  },
  getX: function(e) {
    return this.array[e * this.itemSize];
  },
  setX: function(e, t) {
    return this.array[e * this.itemSize] = t, this;
  },
  getY: function(e) {
    return this.array[e * this.itemSize + 1];
  },
  setY: function(e, t) {
    return this.array[e * this.itemSize + 1] = t, this;
  },
  getZ: function(e) {
    return this.array[e * this.itemSize + 2];
  },
  setZ: function(e, t) {
    return this.array[e * this.itemSize + 2] = t, this;
  },
  getW: function(e) {
    return this.array[e * this.itemSize + 3];
  },
  setW: function(e, t) {
    return this.array[e * this.itemSize + 3] = t, this;
  },
  setXY: function(e, t, n) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this;
  },
  setXYZ: function(e, t, n, i) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  },
  setXYZW: function(e, t, n, i, r) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  },
  onUpload: function(e) {
    return this.onUploadCallback = e, this;
  },
  clone: function() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  },
  toJSON: function() {
    return {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    };
  }
});
function Ba(e, t, n) {
  ge.call(this, new Int8Array(e), t, n);
}
Ba.prototype = Object.create(ge.prototype);
Ba.prototype.constructor = Ba;
function Fa(e, t, n) {
  ge.call(this, new Uint8Array(e), t, n);
}
Fa.prototype = Object.create(ge.prototype);
Fa.prototype.constructor = Fa;
function Ua(e, t, n) {
  ge.call(this, new Uint8ClampedArray(e), t, n);
}
Ua.prototype = Object.create(ge.prototype);
Ua.prototype.constructor = Ua;
function Ga(e, t, n) {
  ge.call(this, new Int16Array(e), t, n);
}
Ga.prototype = Object.create(ge.prototype);
Ga.prototype.constructor = Ga;
function Lr(e, t, n) {
  ge.call(this, new Uint16Array(e), t, n);
}
Lr.prototype = Object.create(ge.prototype);
Lr.prototype.constructor = Lr;
function za(e, t, n) {
  ge.call(this, new Int32Array(e), t, n);
}
za.prototype = Object.create(ge.prototype);
za.prototype.constructor = za;
function Cr(e, t, n) {
  ge.call(this, new Uint32Array(e), t, n);
}
Cr.prototype = Object.create(ge.prototype);
Cr.prototype.constructor = Cr;
function oe(e, t, n) {
  ge.call(this, new Float32Array(e), t, n);
}
oe.prototype = Object.create(ge.prototype);
oe.prototype.constructor = oe;
function ka(e, t, n) {
  ge.call(this, new Float64Array(e), t, n);
}
ka.prototype = Object.create(ge.prototype);
ka.prototype.constructor = ka;
function Nu() {
  this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1;
}
Object.assign(Nu.prototype, {
  computeGroups: function(e) {
    const t = [];
    let n, i, r;
    const s = e.faces;
    for (i = 0; i < s.length; i++) {
      const o = s[i];
      o.materialIndex !== r && (r = o.materialIndex, n !== void 0 && (n.count = i * 3 - n.start, t.push(n)), n = {
        start: i * 3,
        materialIndex: r
      });
    }
    n !== void 0 && (n.count = i * 3 - n.start, t.push(n)), this.groups = t;
  },
  fromGeometry: function(e) {
    const t = e.faces, n = e.vertices, i = e.faceVertexUvs, r = i[0] && i[0].length > 0, s = i[1] && i[1].length > 0, o = e.morphTargets, a = o.length;
    let c;
    if (a > 0) {
      c = [];
      for (let y = 0; y < a; y++)
        c[y] = {
          name: o[y].name,
          data: []
        };
      this.morphTargets.position = c;
    }
    const l = e.morphNormals, h = l.length;
    let u;
    if (h > 0) {
      u = [];
      for (let y = 0; y < h; y++)
        u[y] = {
          name: l[y].name,
          data: []
        };
      this.morphTargets.normal = u;
    }
    const f = e.skinIndices, d = e.skinWeights, p = f.length === n.length, x = d.length === n.length;
    n.length > 0 && t.length === 0 && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
    for (let y = 0; y < t.length; y++) {
      const g = t[y];
      this.vertices.push(n[g.a], n[g.b], n[g.c]);
      const m = g.vertexNormals;
      if (m.length === 3)
        this.normals.push(m[0], m[1], m[2]);
      else {
        const v = g.normal;
        this.normals.push(v, v, v);
      }
      const _ = g.vertexColors;
      if (_.length === 3)
        this.colors.push(_[0], _[1], _[2]);
      else {
        const v = g.color;
        this.colors.push(v, v, v);
      }
      if (r === !0) {
        const v = i[0][y];
        v !== void 0 ? this.uvs.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", y), this.uvs.push(new H(), new H(), new H()));
      }
      if (s === !0) {
        const v = i[1][y];
        v !== void 0 ? this.uvs2.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", y), this.uvs2.push(new H(), new H(), new H()));
      }
      for (let v = 0; v < a; v++) {
        const w = o[v].vertices;
        c[v].data.push(w[g.a], w[g.b], w[g.c]);
      }
      for (let v = 0; v < h; v++) {
        const w = l[v].vertexNormals[y];
        u[v].data.push(w.a, w.b, w.c);
      }
      p && this.skinIndices.push(f[g.a], f[g.b], f[g.c]), x && this.skinWeights.push(d[g.a], d[g.b], d[g.c]);
    }
    return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this;
  }
});
function Bu(e) {
  if (e.length === 0)
    return -1 / 0;
  let t = e[0];
  for (let n = 1, i = e.length; n < i; ++n)
    e[n] > t && (t = e[n]);
  return t;
}
let ld = 1;
const jt = new Ce(), ya = new ie(), gi = new b(), wt = new nn(), ur = new nn(), st = new b();
function he() {
  Object.defineProperty(this, "id", { value: ld += 2 }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
}
he.prototype = Object.assign(Object.create(xn.prototype), {
  constructor: he,
  isBufferGeometry: !0,
  getIndex: function() {
    return this.index;
  },
  setIndex: function(e) {
    Array.isArray(e) ? this.index = new (Bu(e) > 65535 ? Cr : Lr)(e, 1) : this.index = e;
  },
  getAttribute: function(e) {
    return this.attributes[e];
  },
  setAttribute: function(e, t) {
    return this.attributes[e] = t, this;
  },
  deleteAttribute: function(e) {
    return delete this.attributes[e], this;
  },
  addGroup: function(e, t, n) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n !== void 0 ? n : 0
    });
  },
  clearGroups: function() {
    this.groups = [];
  },
  setDrawRange: function(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  },
  applyMatrix4: function(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new gt().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  },
  rotateX: function(e) {
    return jt.makeRotationX(e), this.applyMatrix4(jt), this;
  },
  rotateY: function(e) {
    return jt.makeRotationY(e), this.applyMatrix4(jt), this;
  },
  rotateZ: function(e) {
    return jt.makeRotationZ(e), this.applyMatrix4(jt), this;
  },
  translate: function(e, t, n) {
    return jt.makeTranslation(e, t, n), this.applyMatrix4(jt), this;
  },
  scale: function(e, t, n) {
    return jt.makeScale(e, t, n), this.applyMatrix4(jt), this;
  },
  lookAt: function(e) {
    return ya.lookAt(e), ya.updateMatrix(), this.applyMatrix4(ya.matrix), this;
  },
  center: function() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(gi).negate(), this.translate(gi.x, gi.y, gi.z), this;
  },
  setFromObject: function(e) {
    const t = e.geometry;
    if (e.isPoints || e.isLine) {
      const n = new oe(t.vertices.length * 3, 3), i = new oe(t.colors.length * 3, 3);
      if (this.setAttribute("position", n.copyVector3sArray(t.vertices)), this.setAttribute("color", i.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
        const r = new oe(t.lineDistances.length, 1);
        this.setAttribute("lineDistance", r.copyArray(t.lineDistances));
      }
      t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone());
    } else
      e.isMesh && t && t.isGeometry && this.fromGeometry(t);
    return this;
  },
  setFromPoints: function(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new oe(t, 3)), this;
  },
  updateFromObject: function(e) {
    let t = e.geometry;
    if (e.isMesh) {
      let n = t.__directGeometry;
      if (t.elementsNeedUpdate === !0 && (n = void 0, t.elementsNeedUpdate = !1), n === void 0)
        return this.fromGeometry(t);
      n.verticesNeedUpdate = t.verticesNeedUpdate, n.normalsNeedUpdate = t.normalsNeedUpdate, n.colorsNeedUpdate = t.colorsNeedUpdate, n.uvsNeedUpdate = t.uvsNeedUpdate, n.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = n;
    }
    if (t.verticesNeedUpdate === !0) {
      const n = this.attributes.position;
      n !== void 0 && (n.copyVector3sArray(t.vertices), n.needsUpdate = !0), t.verticesNeedUpdate = !1;
    }
    if (t.normalsNeedUpdate === !0) {
      const n = this.attributes.normal;
      n !== void 0 && (n.copyVector3sArray(t.normals), n.needsUpdate = !0), t.normalsNeedUpdate = !1;
    }
    if (t.colorsNeedUpdate === !0) {
      const n = this.attributes.color;
      n !== void 0 && (n.copyColorsArray(t.colors), n.needsUpdate = !0), t.colorsNeedUpdate = !1;
    }
    if (t.uvsNeedUpdate) {
      const n = this.attributes.uv;
      n !== void 0 && (n.copyVector2sArray(t.uvs), n.needsUpdate = !0), t.uvsNeedUpdate = !1;
    }
    if (t.lineDistancesNeedUpdate) {
      const n = this.attributes.lineDistance;
      n !== void 0 && (n.copyArray(t.lineDistances), n.needsUpdate = !0), t.lineDistancesNeedUpdate = !1;
    }
    return t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this;
  },
  fromGeometry: function(e) {
    return e.__directGeometry = new Nu().fromGeometry(e), this.fromDirectGeometry(e.__directGeometry);
  },
  fromDirectGeometry: function(e) {
    const t = new Float32Array(e.vertices.length * 3);
    if (this.setAttribute("position", new ge(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
      const n = new Float32Array(e.normals.length * 3);
      this.setAttribute("normal", new ge(n, 3).copyVector3sArray(e.normals));
    }
    if (e.colors.length > 0) {
      const n = new Float32Array(e.colors.length * 3);
      this.setAttribute("color", new ge(n, 3).copyColorsArray(e.colors));
    }
    if (e.uvs.length > 0) {
      const n = new Float32Array(e.uvs.length * 2);
      this.setAttribute("uv", new ge(n, 2).copyVector2sArray(e.uvs));
    }
    if (e.uvs2.length > 0) {
      const n = new Float32Array(e.uvs2.length * 2);
      this.setAttribute("uv2", new ge(n, 2).copyVector2sArray(e.uvs2));
    }
    this.groups = e.groups;
    for (const n in e.morphTargets) {
      const i = [], r = e.morphTargets[n];
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s], c = new oe(a.data.length * 3, 3);
        c.name = a.name, i.push(c.copyVector3sArray(a.data));
      }
      this.morphAttributes[n] = i;
    }
    if (e.skinIndices.length > 0) {
      const n = new oe(e.skinIndices.length * 4, 4);
      this.setAttribute("skinIndex", n.copyVector4sArray(e.skinIndices));
    }
    if (e.skinWeights.length > 0) {
      const n = new oe(e.skinWeights.length * 4, 4);
      this.setAttribute("skinWeight", n.copyVector4sArray(e.skinWeights));
    }
    return e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this;
  },
  computeBoundingBox: function() {
    this.boundingBox === null && (this.boundingBox = new nn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          wt.setFromBufferAttribute(r), this.morphTargetsRelative ? (st.addVectors(this.boundingBox.min, wt.min), this.boundingBox.expandByPoint(st), st.addVectors(this.boundingBox.max, wt.max), this.boundingBox.expandByPoint(st)) : (this.boundingBox.expandByPoint(wt.min), this.boundingBox.expandByPoint(wt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  },
  computeBoundingSphere: function() {
    this.boundingSphere === null && (this.boundingSphere = new vn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e) {
      const n = this.boundingSphere.center;
      if (wt.setFromBufferAttribute(e), t)
        for (let r = 0, s = t.length; r < s; r++) {
          const o = t[r];
          ur.setFromBufferAttribute(o), this.morphTargetsRelative ? (st.addVectors(wt.min, ur.min), wt.expandByPoint(st), st.addVectors(wt.max, ur.max), wt.expandByPoint(st)) : (wt.expandByPoint(ur.min), wt.expandByPoint(ur.max));
        }
      wt.getCenter(n);
      let i = 0;
      for (let r = 0, s = e.count; r < s; r++)
        st.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(st));
      if (t)
        for (let r = 0, s = t.length; r < s; r++) {
          const o = t[r], a = this.morphTargetsRelative;
          for (let c = 0, l = o.count; c < l; c++)
            st.fromBufferAttribute(o, c), a && (gi.fromBufferAttribute(e, c), st.add(gi)), i = Math.max(i, n.distanceToSquared(st));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  },
  computeFaceNormals: function() {
  },
  computeVertexNormals: function() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new ge(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, f = n.count; u < f; u++)
          n.setXYZ(u, 0, 0, 0);
      const i = new b(), r = new b(), s = new b(), o = new b(), a = new b(), c = new b(), l = new b(), h = new b();
      if (e)
        for (let u = 0, f = e.count; u < f; u += 3) {
          const d = e.getX(u + 0), p = e.getX(u + 1), x = e.getX(u + 2);
          i.fromBufferAttribute(t, d), r.fromBufferAttribute(t, p), s.fromBufferAttribute(t, x), l.subVectors(s, r), h.subVectors(i, r), l.cross(h), o.fromBufferAttribute(n, d), a.fromBufferAttribute(n, p), c.fromBufferAttribute(n, x), o.add(l), a.add(l), c.add(l), n.setXYZ(d, o.x, o.y, o.z), n.setXYZ(p, a.x, a.y, a.z), n.setXYZ(x, c.x, c.y, c.z);
        }
      else
        for (let u = 0, f = t.count; u < f; u += 3)
          i.fromBufferAttribute(t, u + 0), r.fromBufferAttribute(t, u + 1), s.fromBufferAttribute(t, u + 2), l.subVectors(s, r), h.subVectors(i, r), l.cross(h), n.setXYZ(u + 0, l.x, l.y, l.z), n.setXYZ(u + 1, l.x, l.y, l.z), n.setXYZ(u + 2, l.x, l.y, l.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  },
  merge: function(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
      return;
    }
    t === void 0 && (t = 0, console.warn(
      "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
    ));
    const n = this.attributes;
    for (const i in n) {
      if (e.attributes[i] === void 0)
        continue;
      const s = n[i].array, o = e.attributes[i], a = o.array, c = o.itemSize * t, l = Math.min(a.length, s.length - c);
      for (let h = 0, u = c; h < l; h++, u++)
        s[u] = a[h];
    }
    return this;
  },
  normalizeNormals: function() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      st.fromBufferAttribute(e, t), st.normalize(), e.setXYZ(t, st.x, st.y, st.z);
  },
  toNonIndexed: function() {
    function e(o, a) {
      const c = o.array, l = o.itemSize, h = o.normalized, u = new c.constructor(a.length * l);
      let f = 0, d = 0;
      for (let p = 0, x = a.length; p < x; p++) {
        f = a[p] * l;
        for (let y = 0; y < l; y++)
          u[d++] = c[f++];
      }
      return new ge(u, l, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
    const t = new he(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const a = i[o], c = e(a, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const a = [], c = r[o];
      for (let l = 0, h = c.length; l < h; l++) {
        const u = c[l], f = e(u, n);
        a.push(f);
      }
      t.morphAttributes[o] = a;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let o = 0, a = s.length; o < a; o++) {
      const c = s[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  },
  toJSON: function() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const a = this.parameters;
      for (const c in a)
        a[c] !== void 0 && (e[c] = a[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const a in n) {
      const c = n[a], l = c.toJSON(e.data);
      c.name !== "" && (l.name = c.name), e.data.attributes[a] = l;
    }
    const i = {};
    let r = !1;
    for (const a in this.morphAttributes) {
      const c = this.morphAttributes[a], l = [];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h], d = f.toJSON(e.data);
        f.name !== "" && (d.name = f.name), l.push(d);
      }
      l.length > 0 && (i[a] = l, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const s = this.groups;
    s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  },
  clone: function() {
    return new he().copy(this);
  },
  copy: function(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const l = i[c];
      this.setAttribute(c, l.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const l = [], h = r[c];
      for (let u = 0, f = h.length; u < f; u++)
        l.push(h[u].clone(t));
      this.morphAttributes[c] = l;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let c = 0, l = s.length; c < l; c++) {
      const h = s[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const a = e.boundingSphere;
    return a !== null && (this.boundingSphere = a.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
const dl = new Ce(), Vn = new nr(), xa = new vn(), Tn = new b(), En = new b(), An = new b(), va = new b(), _a = new b(), ba = new b(), Ts = new b(), Es = new b(), As = new b(), Li = new H(), Ci = new H(), Ri = new H(), br = new b(), Ls = new b();
function Fe(e, t) {
  ie.call(this), this.type = "Mesh", this.geometry = e !== void 0 ? e : new he(), this.material = t !== void 0 ? t : new Pt(), this.updateMorphTargets();
}
Fe.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: Fe,
  isMesh: !0,
  copy: function(e) {
    return ie.prototype.copy.call(this, e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  },
  updateMorphTargets: function() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r = 0, s = i.length; r < s; r++) {
            const o = i[r].name || String(r);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  },
  raycast: function(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), xa.copy(n.boundingSphere), xa.applyMatrix4(r), e.ray.intersectsSphere(xa) === !1) || (dl.getInverse(r), Vn.copy(e.ray).applyMatrix4(dl), n.boundingBox !== null && Vn.intersectsBox(n.boundingBox) === !1))
      return;
    let s;
    if (n.isBufferGeometry) {
      const o = n.index, a = n.attributes.position, c = n.morphAttributes.position, l = n.morphTargetsRelative, h = n.attributes.uv, u = n.attributes.uv2, f = n.groups, d = n.drawRange;
      if (o !== null)
        if (Array.isArray(i))
          for (let p = 0, x = f.length; p < x; p++) {
            const y = f[p], g = i[y.materialIndex], m = Math.max(y.start, d.start), _ = Math.min(y.start + y.count, d.start + d.count);
            for (let v = m, w = _; v < w; v += 3) {
              const A = o.getX(v), E = o.getX(v + 1), U = o.getX(v + 2);
              s = Cs(this, g, e, Vn, a, c, l, h, u, A, E, U), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = y.materialIndex, t.push(s));
            }
          }
        else {
          const p = Math.max(0, d.start), x = Math.min(o.count, d.start + d.count);
          for (let y = p, g = x; y < g; y += 3) {
            const m = o.getX(y), _ = o.getX(y + 1), v = o.getX(y + 2);
            s = Cs(this, i, e, Vn, a, c, l, h, u, m, _, v), s && (s.faceIndex = Math.floor(y / 3), t.push(s));
          }
        }
      else if (a !== void 0)
        if (Array.isArray(i))
          for (let p = 0, x = f.length; p < x; p++) {
            const y = f[p], g = i[y.materialIndex], m = Math.max(y.start, d.start), _ = Math.min(y.start + y.count, d.start + d.count);
            for (let v = m, w = _; v < w; v += 3) {
              const A = v, E = v + 1, U = v + 2;
              s = Cs(this, g, e, Vn, a, c, l, h, u, A, E, U), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = y.materialIndex, t.push(s));
            }
          }
        else {
          const p = Math.max(0, d.start), x = Math.min(a.count, d.start + d.count);
          for (let y = p, g = x; y < g; y += 3) {
            const m = y, _ = y + 1, v = y + 2;
            s = Cs(this, i, e, Vn, a, c, l, h, u, m, _, v), s && (s.faceIndex = Math.floor(y / 3), t.push(s));
          }
        }
    } else if (n.isGeometry) {
      const o = Array.isArray(i), a = n.vertices, c = n.faces;
      let l;
      const h = n.faceVertexUvs[0];
      h.length > 0 && (l = h);
      for (let u = 0, f = c.length; u < f; u++) {
        const d = c[u], p = o ? i[d.materialIndex] : i;
        if (p === void 0)
          continue;
        const x = a[d.a], y = a[d.b], g = a[d.c];
        if (s = Fu(this, p, e, Vn, x, y, g, br), s) {
          if (l && l[u]) {
            const m = l[u];
            Li.copy(m[0]), Ci.copy(m[1]), Ri.copy(m[2]), s.uv = lt.getUV(br, x, y, g, Li, Ci, Ri, new H());
          }
          s.face = d, s.faceIndex = u, t.push(s);
        }
      }
    }
  }
});
function Fu(e, t, n, i, r, s, o, a) {
  let c;
  if (t.side === rt ? c = i.intersectTriangle(o, s, r, !0, a) : c = i.intersectTriangle(r, s, o, t.side !== Wo, a), c === null)
    return null;
  Ls.copy(a), Ls.applyMatrix4(e.matrixWorld);
  const l = n.ray.origin.distanceTo(Ls);
  return l < n.near || l > n.far ? null : {
    distance: l,
    point: Ls.clone(),
    object: e
  };
}
function Cs(e, t, n, i, r, s, o, a, c, l, h, u) {
  Tn.fromBufferAttribute(r, l), En.fromBufferAttribute(r, h), An.fromBufferAttribute(r, u);
  const f = e.morphTargetInfluences;
  if (t.morphTargets && s && f) {
    Ts.set(0, 0, 0), Es.set(0, 0, 0), As.set(0, 0, 0);
    for (let p = 0, x = s.length; p < x; p++) {
      const y = f[p], g = s[p];
      y !== 0 && (va.fromBufferAttribute(g, l), _a.fromBufferAttribute(g, h), ba.fromBufferAttribute(g, u), o ? (Ts.addScaledVector(va, y), Es.addScaledVector(_a, y), As.addScaledVector(ba, y)) : (Ts.addScaledVector(va.sub(Tn), y), Es.addScaledVector(_a.sub(En), y), As.addScaledVector(ba.sub(An), y)));
    }
    Tn.add(Ts), En.add(Es), An.add(As);
  }
  e.isSkinnedMesh && (e.boneTransform(l, Tn), e.boneTransform(h, En), e.boneTransform(u, An));
  const d = Fu(e, t, n, i, Tn, En, An, br);
  if (d) {
    a && (Li.fromBufferAttribute(a, l), Ci.fromBufferAttribute(a, h), Ri.fromBufferAttribute(a, u), d.uv = lt.getUV(br, Tn, En, An, Li, Ci, Ri, new H())), c && (Li.fromBufferAttribute(c, l), Ci.fromBufferAttribute(c, h), Ri.fromBufferAttribute(c, u), d.uv2 = lt.getUV(br, Tn, En, An, Li, Ci, Ri, new H()));
    const p = new uo(l, h, u);
    lt.getNormal(Tn, En, An, p.normal), d.face = p;
  }
  return d;
}
let ud = 0;
const qt = new Ce(), wa = new ie(), Rs = new b();
function be() {
  Object.defineProperty(this, "id", { value: ud += 2 }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1;
}
be.prototype = Object.assign(Object.create(xn.prototype), {
  constructor: be,
  isGeometry: !0,
  applyMatrix4: function(e) {
    const t = new gt().getNormalMatrix(e);
    for (let n = 0, i = this.vertices.length; n < i; n++)
      this.vertices[n].applyMatrix4(e);
    for (let n = 0, i = this.faces.length; n < i; n++) {
      const r = this.faces[n];
      r.normal.applyMatrix3(t).normalize();
      for (let s = 0, o = r.vertexNormals.length; s < o; s++)
        r.vertexNormals[s].applyMatrix3(t).normalize();
    }
    return this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this;
  },
  rotateX: function(e) {
    return qt.makeRotationX(e), this.applyMatrix4(qt), this;
  },
  rotateY: function(e) {
    return qt.makeRotationY(e), this.applyMatrix4(qt), this;
  },
  rotateZ: function(e) {
    return qt.makeRotationZ(e), this.applyMatrix4(qt), this;
  },
  translate: function(e, t, n) {
    return qt.makeTranslation(e, t, n), this.applyMatrix4(qt), this;
  },
  scale: function(e, t, n) {
    return qt.makeScale(e, t, n), this.applyMatrix4(qt), this;
  },
  lookAt: function(e) {
    return wa.lookAt(e), wa.updateMatrix(), this.applyMatrix4(wa.matrix), this;
  },
  fromBufferGeometry: function(e) {
    const t = this, n = e.index !== null ? e.index : void 0, i = e.attributes;
    if (i.position === void 0)
      return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
    const r = i.position, s = i.normal, o = i.color, a = i.uv, c = i.uv2;
    c !== void 0 && (this.faceVertexUvs[1] = []);
    for (let u = 0; u < r.count; u++)
      t.vertices.push(new b().fromBufferAttribute(r, u)), o !== void 0 && t.colors.push(new fe().fromBufferAttribute(o, u));
    function l(u, f, d, p) {
      const x = o === void 0 ? [] : [
        t.colors[u].clone(),
        t.colors[f].clone(),
        t.colors[d].clone()
      ], y = s === void 0 ? [] : [
        new b().fromBufferAttribute(s, u),
        new b().fromBufferAttribute(s, f),
        new b().fromBufferAttribute(s, d)
      ], g = new uo(u, f, d, y, x, p);
      t.faces.push(g), a !== void 0 && t.faceVertexUvs[0].push([
        new H().fromBufferAttribute(a, u),
        new H().fromBufferAttribute(a, f),
        new H().fromBufferAttribute(a, d)
      ]), c !== void 0 && t.faceVertexUvs[1].push([
        new H().fromBufferAttribute(c, u),
        new H().fromBufferAttribute(c, f),
        new H().fromBufferAttribute(c, d)
      ]);
    }
    const h = e.groups;
    if (h.length > 0)
      for (let u = 0; u < h.length; u++) {
        const f = h[u], d = f.start, p = f.count;
        for (let x = d, y = d + p; x < y; x += 3)
          n !== void 0 ? l(n.getX(x), n.getX(x + 1), n.getX(x + 2), f.materialIndex) : l(x, x + 1, x + 2, f.materialIndex);
      }
    else if (n !== void 0)
      for (let u = 0; u < n.count; u += 3)
        l(n.getX(u), n.getX(u + 1), n.getX(u + 2));
    else
      for (let u = 0; u < r.count; u += 3)
        l(u, u + 1, u + 2);
    return this.computeFaceNormals(), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  },
  center: function() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Rs).negate(), this.translate(Rs.x, Rs.y, Rs.z), this;
  },
  normalize: function() {
    this.computeBoundingSphere();
    const e = this.boundingSphere.center, t = this.boundingSphere.radius, n = t === 0 ? 1 : 1 / t, i = new Ce();
    return i.set(
      n,
      0,
      0,
      -n * e.x,
      0,
      n,
      0,
      -n * e.y,
      0,
      0,
      n,
      -n * e.z,
      0,
      0,
      0,
      1
    ), this.applyMatrix4(i), this;
  },
  computeFaceNormals: function() {
    const e = new b(), t = new b();
    for (let n = 0, i = this.faces.length; n < i; n++) {
      const r = this.faces[n], s = this.vertices[r.a], o = this.vertices[r.b], a = this.vertices[r.c];
      e.subVectors(a, o), t.subVectors(s, o), e.cross(t), e.normalize(), r.normal.copy(e);
    }
  },
  computeVertexNormals: function(e) {
    e === void 0 && (e = !0);
    const t = new Array(this.vertices.length);
    for (let n = 0, i = this.vertices.length; n < i; n++)
      t[n] = new b();
    if (e) {
      const n = new b(), i = new b();
      for (let r = 0, s = this.faces.length; r < s; r++) {
        const o = this.faces[r], a = this.vertices[o.a], c = this.vertices[o.b], l = this.vertices[o.c];
        n.subVectors(l, c), i.subVectors(a, c), n.cross(i), t[o.a].add(n), t[o.b].add(n), t[o.c].add(n);
      }
    } else {
      this.computeFaceNormals();
      for (let n = 0, i = this.faces.length; n < i; n++) {
        const r = this.faces[n];
        t[r.a].add(r.normal), t[r.b].add(r.normal), t[r.c].add(r.normal);
      }
    }
    for (let n = 0, i = this.vertices.length; n < i; n++)
      t[n].normalize();
    for (let n = 0, i = this.faces.length; n < i; n++) {
      const r = this.faces[n], s = r.vertexNormals;
      s.length === 3 ? (s[0].copy(t[r.a]), s[1].copy(t[r.b]), s[2].copy(t[r.c])) : (s[0] = t[r.a].clone(), s[1] = t[r.b].clone(), s[2] = t[r.c].clone());
    }
    this.faces.length > 0 && (this.normalsNeedUpdate = !0);
  },
  computeFlatVertexNormals: function() {
    this.computeFaceNormals();
    for (let e = 0, t = this.faces.length; e < t; e++) {
      const n = this.faces[e], i = n.vertexNormals;
      i.length === 3 ? (i[0].copy(n.normal), i[1].copy(n.normal), i[2].copy(n.normal)) : (i[0] = n.normal.clone(), i[1] = n.normal.clone(), i[2] = n.normal.clone());
    }
    this.faces.length > 0 && (this.normalsNeedUpdate = !0);
  },
  computeMorphNormals: function() {
    for (let t = 0, n = this.faces.length; t < n; t++) {
      const i = this.faces[t];
      i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []);
      for (let r = 0, s = i.vertexNormals.length; r < s; r++)
        i.__originalVertexNormals[r] ? i.__originalVertexNormals[r].copy(i.vertexNormals[r]) : i.__originalVertexNormals[r] = i.vertexNormals[r].clone();
    }
    const e = new be();
    e.faces = this.faces;
    for (let t = 0, n = this.morphTargets.length; t < n; t++) {
      if (!this.morphNormals[t]) {
        this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
        const r = this.morphNormals[t].faceNormals, s = this.morphNormals[t].vertexNormals;
        for (let o = 0, a = this.faces.length; o < a; o++) {
          const c = new b(), l = { a: new b(), b: new b(), c: new b() };
          r.push(c), s.push(l);
        }
      }
      const i = this.morphNormals[t];
      e.vertices = this.morphTargets[t].vertices, e.computeFaceNormals(), e.computeVertexNormals();
      for (let r = 0, s = this.faces.length; r < s; r++) {
        const o = this.faces[r], a = i.faceNormals[r], c = i.vertexNormals[r];
        a.copy(o.normal), c.a.copy(o.vertexNormals[0]), c.b.copy(o.vertexNormals[1]), c.c.copy(o.vertexNormals[2]);
      }
    }
    for (let t = 0, n = this.faces.length; t < n; t++) {
      const i = this.faces[t];
      i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals;
    }
  },
  computeBoundingBox: function() {
    this.boundingBox === null && (this.boundingBox = new nn()), this.boundingBox.setFromPoints(this.vertices);
  },
  computeBoundingSphere: function() {
    this.boundingSphere === null && (this.boundingSphere = new vn()), this.boundingSphere.setFromPoints(this.vertices);
  },
  merge: function(e, t, n) {
    if (!(e && e.isGeometry)) {
      console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
      return;
    }
    let i, r = this.vertices.length, s = this.vertices, o = e.vertices, a = this.faces, c = e.faces, l = this.colors, h = e.colors;
    n === void 0 && (n = 0), t !== void 0 && (i = new gt().getNormalMatrix(t));
    for (let u = 0, f = o.length; u < f; u++) {
      const p = o[u].clone();
      t !== void 0 && p.applyMatrix4(t), s.push(p);
    }
    for (let u = 0, f = h.length; u < f; u++)
      l.push(h[u].clone());
    for (let u = 0, f = c.length; u < f; u++) {
      let d = c[u], p, x, y, g = d.vertexNormals, m = d.vertexColors;
      p = new uo(d.a + r, d.b + r, d.c + r), p.normal.copy(d.normal), i !== void 0 && p.normal.applyMatrix3(i).normalize();
      for (let _ = 0, v = g.length; _ < v; _++)
        x = g[_].clone(), i !== void 0 && x.applyMatrix3(i).normalize(), p.vertexNormals.push(x);
      p.color.copy(d.color);
      for (let _ = 0, v = m.length; _ < v; _++)
        y = m[_], p.vertexColors.push(y.clone());
      p.materialIndex = d.materialIndex + n, a.push(p);
    }
    for (let u = 0, f = e.faceVertexUvs.length; u < f; u++) {
      const d = e.faceVertexUvs[u];
      this.faceVertexUvs[u] === void 0 && (this.faceVertexUvs[u] = []);
      for (let p = 0, x = d.length; p < x; p++) {
        const y = d[p], g = [];
        for (let m = 0, _ = y.length; m < _; m++)
          g.push(y[m].clone());
        this.faceVertexUvs[u].push(g);
      }
    }
  },
  mergeMesh: function(e) {
    if (!(e && e.isMesh)) {
      console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e);
      return;
    }
    e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix);
  },
  /*
   * Checks for duplicate vertices with hashmap.
   * Duplicated vertices are removed
   * and faces' vertices are updated.
   */
  mergeVertices: function() {
    const e = {}, t = [], n = [], r = Math.pow(10, 4);
    for (let a = 0, c = this.vertices.length; a < c; a++) {
      const l = this.vertices[a], h = Math.round(l.x * r) + "_" + Math.round(l.y * r) + "_" + Math.round(l.z * r);
      e[h] === void 0 ? (e[h] = a, t.push(this.vertices[a]), n[a] = t.length - 1) : n[a] = n[e[h]];
    }
    const s = [];
    for (let a = 0, c = this.faces.length; a < c; a++) {
      const l = this.faces[a];
      l.a = n[l.a], l.b = n[l.b], l.c = n[l.c];
      const h = [l.a, l.b, l.c];
      for (let u = 0; u < 3; u++)
        if (h[u] === h[(u + 1) % 3]) {
          s.push(a);
          break;
        }
    }
    for (let a = s.length - 1; a >= 0; a--) {
      const c = s[a];
      this.faces.splice(c, 1);
      for (let l = 0, h = this.faceVertexUvs.length; l < h; l++)
        this.faceVertexUvs[l].splice(c, 1);
    }
    const o = this.vertices.length - t.length;
    return this.vertices = t, o;
  },
  setFromPoints: function(e) {
    this.vertices = [];
    for (let t = 0, n = e.length; t < n; t++) {
      const i = e[t];
      this.vertices.push(new b(i.x, i.y, i.z || 0));
    }
    return this;
  },
  sortFacesByMaterialIndex: function() {
    const e = this.faces, t = e.length;
    for (let a = 0; a < t; a++)
      e[a]._id = a;
    function n(a, c) {
      return a.materialIndex - c.materialIndex;
    }
    e.sort(n);
    const i = this.faceVertexUvs[0], r = this.faceVertexUvs[1];
    let s, o;
    i && i.length === t && (s = []), r && r.length === t && (o = []);
    for (let a = 0; a < t; a++) {
      const c = e[a]._id;
      s && s.push(i[c]), o && o.push(r[c]);
    }
    s && (this.faceVertexUvs[0] = s), o && (this.faceVertexUvs[1] = o);
  },
  toJSON: function() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Geometry",
        generator: "Geometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), this.parameters !== void 0) {
      const d = this.parameters;
      for (const p in d)
        d[p] !== void 0 && (e[p] = d[p]);
      return e;
    }
    const t = [];
    for (let d = 0; d < this.vertices.length; d++) {
      const p = this.vertices[d];
      t.push(p.x, p.y, p.z);
    }
    const n = [], i = [], r = {}, s = [], o = {}, a = [], c = {};
    for (let d = 0; d < this.faces.length; d++) {
      const p = this.faces[d], x = !0, y = !1, g = this.faceVertexUvs[0][d] !== void 0, m = p.normal.length() > 0, _ = p.vertexNormals.length > 0, v = p.color.r !== 1 || p.color.g !== 1 || p.color.b !== 1, w = p.vertexColors.length > 0;
      let A = 0;
      if (A = l(A, 0, 0), A = l(A, 1, x), A = l(A, 2, y), A = l(A, 3, g), A = l(A, 4, m), A = l(A, 5, _), A = l(A, 6, v), A = l(A, 7, w), n.push(A), n.push(p.a, p.b, p.c), n.push(p.materialIndex), g) {
        const E = this.faceVertexUvs[0][d];
        n.push(
          f(E[0]),
          f(E[1]),
          f(E[2])
        );
      }
      if (m && n.push(h(p.normal)), _) {
        const E = p.vertexNormals;
        n.push(
          h(E[0]),
          h(E[1]),
          h(E[2])
        );
      }
      if (v && n.push(u(p.color)), w) {
        const E = p.vertexColors;
        n.push(
          u(E[0]),
          u(E[1]),
          u(E[2])
        );
      }
    }
    function l(d, p, x) {
      return x ? d | 1 << p : d & ~(1 << p);
    }
    function h(d) {
      const p = d.x.toString() + d.y.toString() + d.z.toString();
      return r[p] !== void 0 || (r[p] = i.length / 3, i.push(d.x, d.y, d.z)), r[p];
    }
    function u(d) {
      const p = d.r.toString() + d.g.toString() + d.b.toString();
      return o[p] !== void 0 || (o[p] = s.length, s.push(d.getHex())), o[p];
    }
    function f(d) {
      const p = d.x.toString() + d.y.toString();
      return c[p] !== void 0 || (c[p] = a.length / 2, a.push(d.x, d.y)), c[p];
    }
    return e.data = {}, e.data.vertices = t, e.data.normals = i, s.length > 0 && (e.data.colors = s), a.length > 0 && (e.data.uvs = [a]), e.data.faces = n, e;
  },
  clone: function() {
    return new be().copy(this);
  },
  copy: function(e) {
    this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
    const t = e.vertices;
    for (let u = 0, f = t.length; u < f; u++)
      this.vertices.push(t[u].clone());
    const n = e.colors;
    for (let u = 0, f = n.length; u < f; u++)
      this.colors.push(n[u].clone());
    const i = e.faces;
    for (let u = 0, f = i.length; u < f; u++)
      this.faces.push(i[u].clone());
    for (let u = 0, f = e.faceVertexUvs.length; u < f; u++) {
      const d = e.faceVertexUvs[u];
      this.faceVertexUvs[u] === void 0 && (this.faceVertexUvs[u] = []);
      for (let p = 0, x = d.length; p < x; p++) {
        const y = d[p], g = [];
        for (let m = 0, _ = y.length; m < _; m++) {
          const v = y[m];
          g.push(v.clone());
        }
        this.faceVertexUvs[u].push(g);
      }
    }
    const r = e.morphTargets;
    for (let u = 0, f = r.length; u < f; u++) {
      const d = {};
      if (d.name = r[u].name, r[u].vertices !== void 0) {
        d.vertices = [];
        for (let p = 0, x = r[u].vertices.length; p < x; p++)
          d.vertices.push(r[u].vertices[p].clone());
      }
      if (r[u].normals !== void 0) {
        d.normals = [];
        for (let p = 0, x = r[u].normals.length; p < x; p++)
          d.normals.push(r[u].normals[p].clone());
      }
      this.morphTargets.push(d);
    }
    const s = e.morphNormals;
    for (let u = 0, f = s.length; u < f; u++) {
      const d = {};
      if (s[u].vertexNormals !== void 0) {
        d.vertexNormals = [];
        for (let p = 0, x = s[u].vertexNormals.length; p < x; p++) {
          const y = s[u].vertexNormals[p], g = {};
          g.a = y.a.clone(), g.b = y.b.clone(), g.c = y.c.clone(), d.vertexNormals.push(g);
        }
      }
      if (s[u].faceNormals !== void 0) {
        d.faceNormals = [];
        for (let p = 0, x = s[u].faceNormals.length; p < x; p++)
          d.faceNormals.push(s[u].faceNormals[p].clone());
      }
      this.morphNormals.push(d);
    }
    const o = e.skinWeights;
    for (let u = 0, f = o.length; u < f; u++)
      this.skinWeights.push(o[u].clone());
    const a = e.skinIndices;
    for (let u = 0, f = a.length; u < f; u++)
      this.skinIndices.push(a[u].clone());
    const c = e.lineDistances;
    for (let u = 0, f = c.length; u < f; u++)
      this.lineDistances.push(c[u]);
    const l = e.boundingBox;
    l !== null && (this.boundingBox = l.clone());
    const h = e.boundingSphere;
    return h !== null && (this.boundingSphere = h.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
class hd extends be {
  constructor(t, n, i, r, s, o) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: n,
      depth: i,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    }, this.fromBufferGeometry(new Zo(t, n, i, r, s, o)), this.mergeVertices();
  }
}
class Zo extends he {
  constructor(t = 1, n = 1, i = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxBufferGeometry", this.parameters = {
      width: t,
      height: n,
      depth: i,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const c = [], l = [], h = [], u = [];
    let f = 0, d = 0;
    p("z", "y", "x", -1, -1, i, n, t, o, s, 0), p("z", "y", "x", 1, -1, i, n, -t, o, s, 1), p("x", "z", "y", 1, 1, t, i, n, r, o, 2), p("x", "z", "y", 1, -1, t, i, -n, r, o, 3), p("x", "y", "z", 1, -1, t, n, i, r, s, 4), p("x", "y", "z", -1, -1, t, n, -i, r, s, 5), this.setIndex(c), this.setAttribute("position", new oe(l, 3)), this.setAttribute("normal", new oe(h, 3)), this.setAttribute("uv", new oe(u, 2));
    function p(x, y, g, m, _, v, w, A, E, U, L) {
      const q = v / E, O = w / U, N = v / 2, D = w / 2, R = A / 2, C = E + 1, z = U + 1;
      let J = 0, $ = 0;
      const re = new b();
      for (let de = 0; de < z; de++) {
        const pe = de * O - D;
        for (let Pe = 0; Pe < C; Pe++) {
          const Se = Pe * q - N;
          re[x] = Se * m, re[y] = pe * _, re[g] = R, l.push(re.x, re.y, re.z), re[x] = 0, re[y] = 0, re[g] = A > 0 ? 1 : -1, h.push(re.x, re.y, re.z), u.push(Pe / E), u.push(1 - de / U), J += 1;
        }
      }
      for (let de = 0; de < U; de++)
        for (let pe = 0; pe < E; pe++) {
          const Pe = f + pe + C * de, Se = f + pe + C * (de + 1), Ve = f + (pe + 1) + C * (de + 1), De = f + (pe + 1) + C * de;
          c.push(Pe, Se, De), c.push(Se, Ve, De), $ += 6;
        }
      a.addGroup(d, $, L), d += $, f += J;
    }
  }
}
function Bi(e) {
  const t = {};
  for (const n in e) {
    t[n] = {};
    for (const i in e[n]) {
      const r = e[n][i];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r;
    }
  }
  return t;
}
function ft(e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = Bi(e[n]);
    for (const r in i)
      t[r] = i[r];
  }
  return t;
}
const fd = { clone: Bi, merge: ft };
var dd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, pd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
function _t(e) {
  _e.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = dd, this.fragmentShader = pd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
    derivatives: !1,
    // set to use derivatives
    fragDepth: !1,
    // set to use fragment depth values
    drawBuffers: !1,
    // set to use draw buffers
    shaderTextureLOD: !1
    // set to use shader texture LOD
  }, this.defaultAttributeValues = {
    color: [1, 1, 1],
    uv: [0, 0],
    uv2: [0, 0]
  }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e));
}
_t.prototype = Object.create(_e.prototype);
_t.prototype.constructor = _t;
_t.prototype.isShaderMaterial = !0;
_t.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Bi(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = Object.assign({}, e.extensions), this;
};
_t.prototype.toJSON = function(e) {
  const t = _e.prototype.toJSON.call(this, e);
  t.uniforms = {};
  for (const i in this.uniforms) {
    const s = this.uniforms[i].value;
    s && s.isTexture ? t.uniforms[i] = {
      type: "t",
      value: s.toJSON(e).uuid
    } : s && s.isColor ? t.uniforms[i] = {
      type: "c",
      value: s.getHex()
    } : s && s.isVector2 ? t.uniforms[i] = {
      type: "v2",
      value: s.toArray()
    } : s && s.isVector3 ? t.uniforms[i] = {
      type: "v3",
      value: s.toArray()
    } : s && s.isVector4 ? t.uniforms[i] = {
      type: "v4",
      value: s.toArray()
    } : s && s.isMatrix3 ? t.uniforms[i] = {
      type: "m3",
      value: s.toArray()
    } : s && s.isMatrix4 ? t.uniforms[i] = {
      type: "m4",
      value: s.toArray()
    } : t.uniforms[i] = {
      value: s
    };
  }
  Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
  const n = {};
  for (const i in this.extensions)
    this.extensions[i] === !0 && (n[i] = !0);
  return Object.keys(n).length > 0 && (t.extensions = n), t;
};
function fn() {
  ie.call(this), this.type = "Camera", this.matrixWorldInverse = new Ce(), this.projectionMatrix = new Ce(), this.projectionMatrixInverse = new Ce();
}
fn.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: fn,
  isCamera: !0,
  copy: function(e, t) {
    return ie.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  },
  getWorldDirection: function(e) {
    e === void 0 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new b()), this.updateMatrixWorld(!0);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  },
  updateMatrixWorld: function(e) {
    ie.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld);
  },
  updateWorldMatrix: function(e, t) {
    ie.prototype.updateWorldMatrix.call(this, e, t), this.matrixWorldInverse.getInverse(this.matrixWorld);
  },
  clone: function() {
    return new this.constructor().copy(this);
  }
});
function tt(e, t, n, i) {
  fn.call(this), this.type = "PerspectiveCamera", this.fov = e !== void 0 ? e : 50, this.zoom = 1, this.near = n !== void 0 ? n : 0.1, this.far = i !== void 0 ? i : 2e3, this.focus = 10, this.aspect = t !== void 0 ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
}
tt.prototype = Object.assign(Object.create(fn.prototype), {
  constructor: tt,
  isPerspectiveCamera: !0,
  copy: function(e, t) {
    return fn.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  },
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength: function(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ae.RAD2DEG * 2 * Math.atan(t), this.updateProjectionMatrix();
  },
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength: function() {
    const e = Math.tan(Ae.DEG2RAD * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  },
  getEffectiveFOV: function() {
    return Ae.RAD2DEG * 2 * Math.atan(
      Math.tan(Ae.DEG2RAD * 0.5 * this.fov) / this.zoom
    );
  },
  getFilmWidth: function() {
    return this.filmGauge * Math.min(this.aspect, 1);
  },
  getFilmHeight: function() {
    return this.filmGauge / Math.max(this.aspect, 1);
  },
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset: function(e, t, n, i, r, s) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  },
  clearViewOffset: function() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function() {
    let e = this.near, t = e * Math.tan(Ae.DEG2RAD * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i, s = this.view;
    if (this.view !== null && this.view.enabled) {
      const a = s.fullWidth, c = s.fullHeight;
      r += s.offsetX * i / a, t -= s.offsetY * n / c, i *= s.width / a, n *= s.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function(e) {
    const t = ie.prototype.toJSON.call(this, e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
});
const yi = 90, xi = 1;
function Rr(e, t, n) {
  if (ie.call(this), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
    console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
    return;
  }
  this.renderTarget = n;
  const i = new tt(yi, xi, e, t);
  i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new b(1, 0, 0)), this.add(i);
  const r = new tt(yi, xi, e, t);
  r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new b(-1, 0, 0)), this.add(r);
  const s = new tt(yi, xi, e, t);
  s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new b(0, 1, 0)), this.add(s);
  const o = new tt(yi, xi, e, t);
  o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new b(0, -1, 0)), this.add(o);
  const a = new tt(yi, xi, e, t);
  a.layers = this.layers, a.up.set(0, -1, 0), a.lookAt(new b(0, 0, 1)), this.add(a);
  const c = new tt(yi, xi, e, t);
  c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new b(0, 0, -1)), this.add(c), this.update = function(l, h) {
    this.parent === null && this.updateMatrixWorld();
    const u = l.xr.enabled, f = l.getRenderTarget();
    l.xr.enabled = !1;
    const d = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, l.setRenderTarget(n, 0), l.render(h, i), l.setRenderTarget(n, 1), l.render(h, r), l.setRenderTarget(n, 2), l.render(h, s), l.setRenderTarget(n, 3), l.render(h, o), l.setRenderTarget(n, 4), l.render(h, a), n.texture.generateMipmaps = d, l.setRenderTarget(n, 5), l.render(h, c), l.setRenderTarget(f), l.xr.enabled = u;
  }, this.clear = function(l, h, u, f) {
    const d = l.getRenderTarget();
    for (let p = 0; p < 6; p++)
      l.setRenderTarget(n, p), l.clear(h, u, f);
    l.setRenderTarget(d);
  };
}
Rr.prototype = Object.create(ie.prototype);
Rr.prototype.constructor = Rr;
function Pr(e, t, n) {
  Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), Ct.call(this, e, e, t);
}
Pr.prototype = Object.create(Ct.prototype);
Pr.prototype.constructor = Pr;
Pr.prototype.isWebGLCubeRenderTarget = !0;
Pr.prototype.fromEquirectangularTexture = function(e, t) {
  this.texture.type = t.type, this.texture.format = Lt, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
  const n = new Ar(), i = {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: (
      /* glsl */
      `

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`
    ),
    fragmentShader: (
      /* glsl */
      `

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`
    )
  }, r = new _t({
    name: "CubemapFromEquirect",
    uniforms: Bi(i.uniforms),
    vertexShader: i.vertexShader,
    fragmentShader: i.fragmentShader,
    side: rt,
    blending: In
  });
  r.uniforms.tEquirect.value = t;
  const s = new Fe(new Zo(5, 5, 5), r);
  return n.add(s), new Rr(1, 10, this).update(e, n), s.geometry.dispose(), s.material.dispose(), this;
};
function Fi(e, t, n, i, r, s, o, a, c, l, h, u) {
  Ge.call(this, null, s, o, a, c, l, i, r, h, u), this.image = { data: e || null, width: t || 1, height: n || 1 }, this.magFilter = c !== void 0 ? c : ot, this.minFilter = l !== void 0 ? l : ot, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
}
Fi.prototype = Object.create(Ge.prototype);
Fi.prototype.constructor = Fi;
Fi.prototype.isDataTexture = !0;
const vi = new vn(), Ps = new b();
function us(e, t, n, i, r, s) {
  this.planes = [
    e !== void 0 ? e : new Yt(),
    t !== void 0 ? t : new Yt(),
    n !== void 0 ? n : new Yt(),
    i !== void 0 ? i : new Yt(),
    r !== void 0 ? r : new Yt(),
    s !== void 0 ? s : new Yt()
  ];
}
Object.assign(us.prototype, {
  set: function(e, t, n, i, r, s) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(s), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  },
  setFromProjectionMatrix: function(e) {
    const t = this.planes, n = e.elements, i = n[0], r = n[1], s = n[2], o = n[3], a = n[4], c = n[5], l = n[6], h = n[7], u = n[8], f = n[9], d = n[10], p = n[11], x = n[12], y = n[13], g = n[14], m = n[15];
    return t[0].setComponents(o - i, h - a, p - u, m - x).normalize(), t[1].setComponents(o + i, h + a, p + u, m + x).normalize(), t[2].setComponents(o + r, h + c, p + f, m + y).normalize(), t[3].setComponents(o - r, h - c, p - f, m - y).normalize(), t[4].setComponents(o - s, h - l, p - d, m - g).normalize(), t[5].setComponents(o + s, h + l, p + d, m + g).normalize(), this;
  },
  intersectsObject: function(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(vi);
  },
  intersectsSprite: function(e) {
    return vi.center.set(0, 0, 0), vi.radius = 0.7071067811865476, vi.applyMatrix4(e.matrixWorld), this.intersectsSphere(vi);
  },
  intersectsSphere: function(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  },
  intersectsBox: function(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Ps.x = i.normal.x > 0 ? e.max.x : e.min.x, Ps.y = i.normal.y > 0 ? e.max.y : e.min.y, Ps.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Ps) < 0)
        return !1;
    }
    return !0;
  },
  containsPoint: function(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
});
const se = {
  common: {
    diffuse: { value: new fe(15658734) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: new gt() },
    uv2Transform: { value: new gt() },
    alphaMap: { value: null }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    refractionRatio: { value: 0.98 },
    maxMipLevel: { value: 0 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: new H(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: new fe(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotShadowMap: { value: [] },
    spotShadowMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } }
  },
  points: {
    diffuse: { value: new fe(15658734) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new gt() }
  },
  sprite: {
    diffuse: { value: new fe(15658734) },
    opacity: { value: 1 },
    center: { value: new H(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new gt() }
  }
};
function Uu() {
  let e = null, t = !1, n = null, i = null;
  function r(s, o) {
    n(s, o), i = e.requestAnimationFrame(r);
  }
  return {
    start: function() {
      t !== !0 && n !== null && (i = e.requestAnimationFrame(r), t = !0);
    },
    stop: function() {
      e.cancelAnimationFrame(i), t = !1;
    },
    setAnimationLoop: function(s) {
      n = s;
    },
    setContext: function(s) {
      e = s;
    }
  };
}
function md(e, t) {
  const n = t.isWebGL2, i = /* @__PURE__ */ new WeakMap();
  function r(l, h) {
    const u = l.array, f = l.usage, d = e.createBuffer();
    e.bindBuffer(h, d), e.bufferData(h, u, f), l.onUploadCallback();
    let p = 5126;
    return u instanceof Float32Array ? p = 5126 : u instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : u instanceof Uint16Array ? p = 5123 : u instanceof Int16Array ? p = 5122 : u instanceof Uint32Array ? p = 5125 : u instanceof Int32Array ? p = 5124 : u instanceof Int8Array ? p = 5120 : u instanceof Uint8Array && (p = 5121), {
      buffer: d,
      type: p,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, h, u) {
    const f = h.array, d = h.updateRange;
    e.bindBuffer(u, l), d.count === -1 ? e.bufferSubData(u, 0, f) : (n ? e.bufferSubData(
      u,
      d.offset * f.BYTES_PER_ELEMENT,
      f,
      d.offset,
      d.count
    ) : e.bufferSubData(
      u,
      d.offset * f.BYTES_PER_ELEMENT,
      f.subarray(d.offset, d.offset + d.count)
    ), d.count = -1);
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), i.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = i.get(l);
    h && (e.deleteBuffer(h.buffer), i.delete(l));
  }
  function c(l, h) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = i.get(l);
    u === void 0 ? i.set(l, r(l, h)) : u.version < l.version && (s(u.buffer, l, h), u.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
function ho(e, t, n, i) {
  be.call(this), this.type = "PlaneGeometry", this.parameters = {
    width: e,
    height: t,
    widthSegments: n,
    heightSegments: i
  }, this.fromBufferGeometry(new Ui(e, t, n, i)), this.mergeVertices();
}
ho.prototype = Object.create(be.prototype);
ho.prototype.constructor = ho;
function Ui(e, t, n, i) {
  he.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
    width: e,
    height: t,
    widthSegments: n,
    heightSegments: i
  }, e = e || 1, t = t || 1;
  const r = e / 2, s = t / 2, o = Math.floor(n) || 1, a = Math.floor(i) || 1, c = o + 1, l = a + 1, h = e / o, u = t / a, f = [], d = [], p = [], x = [];
  for (let y = 0; y < l; y++) {
    const g = y * u - s;
    for (let m = 0; m < c; m++) {
      const _ = m * h - r;
      d.push(_, -g, 0), p.push(0, 0, 1), x.push(m / o), x.push(1 - y / a);
    }
  }
  for (let y = 0; y < a; y++)
    for (let g = 0; g < o; g++) {
      const m = g + c * y, _ = g + c * (y + 1), v = g + 1 + c * (y + 1), w = g + 1 + c * y;
      f.push(m, _, w), f.push(_, v, w);
    }
  this.setIndex(f), this.setAttribute("position", new oe(d, 3)), this.setAttribute("normal", new oe(p, 3)), this.setAttribute("uv", new oe(x, 2));
}
Ui.prototype = Object.create(he.prototype);
Ui.prototype.constructor = Ui;
var gd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, yd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, xd = `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`, vd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`, _d = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, bd = "vec3 transformed = vec3( position );", wd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Md = `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`, Sd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Td = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Ed = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Ad = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ld = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Cd = `#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`, Rd = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`, Pd = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`, Id = `#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`, Od = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Dd = `#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_maxMipLevel 8.0
#define cubeUV_minMipLevel 4.0
#define cubeUV_maxTileSize 256.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if (absDirection.x > absDirection.z) {
      if (absDirection.x > absDirection.y)
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if (absDirection.z > absDirection.y)
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}
vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if (face == 0.0) {
      uv = vec2(direction.z, direction.y) / abs(direction.x);    } else if (face == 1.0) {
      uv = vec2(-direction.x, -direction.z) / abs(direction.y);    } else if (face == 2.0) {
      uv = vec2(-direction.x, direction.y) / abs(direction.z);    } else if (face == 3.0) {
      uv = vec2(-direction.z, direction.y) / abs(direction.x);    } else if (face == 4.0) {
      uv = vec2(-direction.x, direction.z) / abs(direction.y);    } else {
      uv = vec2(direction.x, direction.y) / abs(direction.z);    }
    return 0.5 * (uv + 1.0);
}
vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
  float face = getFace(direction);
  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
  mipInt = max(mipInt, cubeUV_minMipLevel);
  float faceSize = exp2(mipInt);
  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
  vec2 uv = getUV(direction, face) * (faceSize - 1.0);
  vec2 f = fract(uv);
  uv += 0.5 - f;
  if (face > 2.0) {
    uv.y += faceSize;
    face -= 3.0;
  }
  uv.x += face * faceSize;
  if(mipInt < cubeUV_maxMipLevel){
    uv.y += 2.0 * cubeUV_maxTileSize;
  }
  uv.y += filterInt * 2.0 * cubeUV_minTileSize;
  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
  uv *= texelSize;
  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x += texelSize;
  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.y += texelSize;
  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x -= texelSize;
  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  vec3 tm = mix(tl, tr, f.x);
  vec3 bm = mix(bl, br, f.x);
  return mix(tm, bm, f.y);
}
#define r0 1.0
#define v0 0.339
#define m0 -2.0
#define r1 0.8
#define v1 0.276
#define m1 -1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0
float roughnessToMip(float roughness) {
  float mip = 0.0;
  if (roughness >= r1) {
    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
  } else if (roughness >= r4) {
    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
  } else if (roughness >= r5) {
    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
  } else if (roughness >= r6) {
    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
  } else {
    mip = -2.0 * log2(1.16 * roughness);  }
  return mip;
}
vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);
  float mipF = fract(mip);
  float mipInt = floor(mip);
  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
  if (mipF == 0.0) {
    return vec4(color0, 1.0);
  } else {
    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
    return vec4(mix(color0, color1, mipF), 1.0);
  }
}
#endif`, Nd = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Bd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Fd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Ud = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Gd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, zd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", kd = `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`, Hd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		}  else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		reflectVec = normalize( reflectVec );
		vec2 sampleUV = equirectUv( reflectVec );
		vec4 envColor = texture2D( envMap, sampleUV );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Vd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Wd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, jd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, qd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Xd = `#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`, Yd = `#ifdef USE_FOG
	varying float fogDepth;
#endif`, Jd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Zd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, $d = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`, Qd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`, Kd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ep = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`, tp = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`, np = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
		  vec3 reflectVec = reflect( -viewDir, normal );
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV = equirectUv( reflectVec );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`, ip = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, rp = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, sp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, op = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, ap = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`, cp = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, lp = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, up = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`, hp = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, fp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, dp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, pp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, mp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, gp = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`, yp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, xp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, vp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _p = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, bp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, wp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`, Mp = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`, Sp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`, Tp = `#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Ep = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`, Ap = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`, Lp = `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Cp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`, Rp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Pp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Ip = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Op = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Dp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Np = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Bp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Fp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Up = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Gp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, zp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, kp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Hp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Vp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`, Wp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, jp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, qp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Xp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Yp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Jp = `#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Zp = `#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`, $p = `#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`, Qp = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Kp = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, em = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, tm = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, nm = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, im = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, rm = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, sm = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, om = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, am = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, cm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, lm = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, um = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, hm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, fm = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, dm = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, pm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, mm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, gm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ym = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xm = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, vm = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _m = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bm = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wm = `#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Mm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Sm = `#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Tm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Em = `#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Am = `#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lm = `#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Cm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`, Rm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Pm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Im = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Om = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Dm = `#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Bm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
const Ie = {
  alphamap_fragment: gd,
  alphamap_pars_fragment: yd,
  alphatest_fragment: xd,
  aomap_fragment: vd,
  aomap_pars_fragment: _d,
  begin_vertex: bd,
  beginnormal_vertex: wd,
  bsdfs: Md,
  bumpmap_pars_fragment: Sd,
  clipping_planes_fragment: Td,
  clipping_planes_pars_fragment: Ed,
  clipping_planes_pars_vertex: Ad,
  clipping_planes_vertex: Ld,
  color_fragment: Cd,
  color_pars_fragment: Rd,
  color_pars_vertex: Pd,
  color_vertex: Id,
  common: Od,
  cube_uv_reflection_fragment: Dd,
  defaultnormal_vertex: Nd,
  displacementmap_pars_vertex: Bd,
  displacementmap_vertex: Fd,
  emissivemap_fragment: Ud,
  emissivemap_pars_fragment: Gd,
  encodings_fragment: zd,
  encodings_pars_fragment: kd,
  envmap_fragment: Hd,
  envmap_common_pars_fragment: Vd,
  envmap_pars_fragment: Wd,
  envmap_pars_vertex: jd,
  envmap_physical_pars_fragment: np,
  envmap_vertex: qd,
  fog_vertex: Xd,
  fog_pars_vertex: Yd,
  fog_fragment: Jd,
  fog_pars_fragment: Zd,
  gradientmap_pars_fragment: $d,
  lightmap_fragment: Qd,
  lightmap_pars_fragment: Kd,
  lights_lambert_vertex: ep,
  lights_pars_begin: tp,
  lights_toon_fragment: ip,
  lights_toon_pars_fragment: rp,
  lights_phong_fragment: sp,
  lights_phong_pars_fragment: op,
  lights_physical_fragment: ap,
  lights_physical_pars_fragment: cp,
  lights_fragment_begin: lp,
  lights_fragment_maps: up,
  lights_fragment_end: hp,
  logdepthbuf_fragment: fp,
  logdepthbuf_pars_fragment: dp,
  logdepthbuf_pars_vertex: pp,
  logdepthbuf_vertex: mp,
  map_fragment: gp,
  map_pars_fragment: yp,
  map_particle_fragment: xp,
  map_particle_pars_fragment: vp,
  metalnessmap_fragment: _p,
  metalnessmap_pars_fragment: bp,
  morphnormal_vertex: wp,
  morphtarget_pars_vertex: Mp,
  morphtarget_vertex: Sp,
  normal_fragment_begin: Tp,
  normal_fragment_maps: Ep,
  normalmap_pars_fragment: Ap,
  clearcoat_normal_fragment_begin: Lp,
  clearcoat_normal_fragment_maps: Cp,
  clearcoat_pars_fragment: Rp,
  packing: Pp,
  premultiplied_alpha_fragment: Ip,
  project_vertex: Op,
  dithering_fragment: Dp,
  dithering_pars_fragment: Np,
  roughnessmap_fragment: Bp,
  roughnessmap_pars_fragment: Fp,
  shadowmap_pars_fragment: Up,
  shadowmap_pars_vertex: Gp,
  shadowmap_vertex: zp,
  shadowmask_pars_fragment: kp,
  skinbase_vertex: Hp,
  skinning_pars_vertex: Vp,
  skinning_vertex: Wp,
  skinnormal_vertex: jp,
  specularmap_fragment: qp,
  specularmap_pars_fragment: Xp,
  tonemapping_fragment: Yp,
  tonemapping_pars_fragment: Jp,
  transmissionmap_fragment: Zp,
  transmissionmap_pars_fragment: $p,
  uv_pars_fragment: Qp,
  uv_pars_vertex: Kp,
  uv_vertex: em,
  uv2_pars_fragment: tm,
  uv2_pars_vertex: nm,
  uv2_vertex: im,
  worldpos_vertex: rm,
  background_frag: sm,
  background_vert: om,
  cube_frag: am,
  cube_vert: cm,
  depth_frag: lm,
  depth_vert: um,
  distanceRGBA_frag: hm,
  distanceRGBA_vert: fm,
  equirect_frag: dm,
  equirect_vert: pm,
  linedashed_frag: mm,
  linedashed_vert: gm,
  meshbasic_frag: ym,
  meshbasic_vert: xm,
  meshlambert_frag: vm,
  meshlambert_vert: _m,
  meshmatcap_frag: bm,
  meshmatcap_vert: wm,
  meshtoon_frag: Mm,
  meshtoon_vert: Sm,
  meshphong_frag: Tm,
  meshphong_vert: Em,
  meshphysical_frag: Am,
  meshphysical_vert: Lm,
  normal_frag: Cm,
  normal_vert: Rm,
  points_frag: Pm,
  points_vert: Im,
  shadow_frag: Om,
  shadow_vert: Dm,
  sprite_frag: Nm,
  sprite_vert: Bm
}, Jt = {
  basic: {
    uniforms: ft([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.fog
    ]),
    vertexShader: Ie.meshbasic_vert,
    fragmentShader: Ie.meshbasic_frag
  },
  lambert: {
    uniforms: ft([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.fog,
      se.lights,
      {
        emissive: { value: new fe(0) }
      }
    ]),
    vertexShader: Ie.meshlambert_vert,
    fragmentShader: Ie.meshlambert_frag
  },
  phong: {
    uniforms: ft([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      se.lights,
      {
        emissive: { value: new fe(0) },
        specular: { value: new fe(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ie.meshphong_vert,
    fragmentShader: Ie.meshphong_frag
  },
  standard: {
    uniforms: ft([
      se.common,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.roughnessmap,
      se.metalnessmap,
      se.fog,
      se.lights,
      {
        emissive: { value: new fe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Ie.meshphysical_vert,
    fragmentShader: Ie.meshphysical_frag
  },
  toon: {
    uniforms: ft([
      se.common,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.gradientmap,
      se.fog,
      se.lights,
      {
        emissive: { value: new fe(0) }
      }
    ]),
    vertexShader: Ie.meshtoon_vert,
    fragmentShader: Ie.meshtoon_frag
  },
  matcap: {
    uniforms: ft([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ie.meshmatcap_vert,
    fragmentShader: Ie.meshmatcap_frag
  },
  points: {
    uniforms: ft([
      se.points,
      se.fog
    ]),
    vertexShader: Ie.points_vert,
    fragmentShader: Ie.points_frag
  },
  dashed: {
    uniforms: ft([
      se.common,
      se.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ie.linedashed_vert,
    fragmentShader: Ie.linedashed_frag
  },
  depth: {
    uniforms: ft([
      se.common,
      se.displacementmap
    ]),
    vertexShader: Ie.depth_vert,
    fragmentShader: Ie.depth_frag
  },
  normal: {
    uniforms: ft([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.normal_vert,
    fragmentShader: Ie.normal_frag
  },
  sprite: {
    uniforms: ft([
      se.sprite,
      se.fog
    ]),
    vertexShader: Ie.sprite_vert,
    fragmentShader: Ie.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: new gt() },
      t2D: { value: null }
    },
    vertexShader: Ie.background_vert,
    fragmentShader: Ie.background_frag
  },
  /* -------------------------------------------------------------------------
  //	Cube map shader
   ------------------------------------------------------------------------- */
  cube: {
    uniforms: ft([
      se.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.cube_vert,
    fragmentShader: Ie.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ie.equirect_vert,
    fragmentShader: Ie.equirect_frag
  },
  distanceRGBA: {
    uniforms: ft([
      se.common,
      se.displacementmap,
      {
        referencePosition: { value: new b() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ie.distanceRGBA_vert,
    fragmentShader: Ie.distanceRGBA_frag
  },
  shadow: {
    uniforms: ft([
      se.lights,
      se.fog,
      {
        color: { value: new fe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.shadow_vert,
    fragmentShader: Ie.shadow_frag
  }
};
Jt.physical = {
  uniforms: ft([
    Jt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new H(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: new fe(0) },
      transmission: { value: 0 },
      transmissionMap: { value: null }
    }
  ]),
  vertexShader: Ie.meshphysical_vert,
  fragmentShader: Ie.meshphysical_frag
};
function Fm(e, t, n, i) {
  const r = new fe(0);
  let s = 0, o, a, c = null, l = 0, h = null;
  function u(d, p, x, y) {
    let g = p.isScene === !0 ? p.background : null;
    const m = e.xr, _ = m.getSession && m.getSession();
    if (_ && _.environmentBlendMode === "additive" && (g = null), g === null ? f(r, s) : g && g.isColor && (f(g, 1), y = !0), (e.autoClear || y) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), g && (g.isCubeTexture || g.isWebGLCubeRenderTarget || g.mapping === cs)) {
      a === void 0 && (a = new Fe(
        new Zo(1, 1, 1),
        new _t({
          name: "BackgroundCubeMaterial",
          uniforms: Bi(Jt.cube.uniforms),
          vertexShader: Jt.cube.vertexShader,
          fragmentShader: Jt.cube.fragmentShader,
          side: rt,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })
      ), a.geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function(w, A, E) {
        this.matrixWorld.copyPosition(E.matrixWorld);
      }, Object.defineProperty(a.material, "envMap", {
        get: function() {
          return this.uniforms.envMap.value;
        }
      }), n.update(a));
      const v = g.isWebGLCubeRenderTarget ? g.texture : g;
      a.material.uniforms.envMap.value = v, a.material.uniforms.flipEnvMap.value = v.isCubeTexture ? -1 : 1, (c !== g || l !== v.version || h !== e.toneMapping) && (a.material.needsUpdate = !0, c = g, l = v.version, h = e.toneMapping), d.unshift(a, a.geometry, a.material, 0, 0, null);
    } else
      g && g.isTexture && (o === void 0 && (o = new Fe(
        new Ui(2, 2),
        new _t({
          name: "BackgroundMaterial",
          uniforms: Bi(Jt.background.uniforms),
          vertexShader: Jt.background.vertexShader,
          fragmentShader: Jt.background.fragmentShader,
          side: as,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })
      ), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
        get: function() {
          return this.uniforms.t2D.value;
        }
      }), n.update(o)), o.material.uniforms.t2D.value = g, g.matrixAutoUpdate === !0 && g.updateMatrix(), o.material.uniforms.uvTransform.value.copy(g.matrix), (c !== g || l !== g.version || h !== e.toneMapping) && (o.material.needsUpdate = !0, c = g, l = g.version, h = e.toneMapping), d.unshift(o, o.geometry, o.material, 0, 0, null));
  }
  function f(d, p) {
    t.buffers.color.setClear(d.r, d.g, d.b, p, i);
  }
  return {
    getClearColor: function() {
      return r;
    },
    setClearColor: function(d, p) {
      r.set(d), s = p !== void 0 ? p : 1, f(r, s);
    },
    getClearAlpha: function() {
      return s;
    },
    setClearAlpha: function(d) {
      s = d, f(r, s);
    },
    render: u
  };
}
function Um(e, t, n, i) {
  const r = e.getParameter(34921), s = i.isWebGL2 ? null : t.get("OES_vertex_array_object"), o = i.isWebGL2 || s !== null, a = {}, c = x(null);
  let l = c;
  function h(D, R, C, z, J) {
    let $ = !1;
    if (o) {
      const re = p(z, C, R);
      l !== re && (l = re, f(l.object)), $ = y(z), $ && g(z);
    } else {
      const re = R.wireframe === !0;
      (l.geometry !== z.id || l.program !== C.id || l.wireframe !== re) && (l.geometry = z.id, l.program = C.id, l.wireframe = re, $ = !0);
    }
    D.isInstancedMesh === !0 && ($ = !0), J !== null && n.update(J, 34963), $ && (E(D, R, C, z), J !== null && e.bindBuffer(34963, n.get(J).buffer));
  }
  function u() {
    return i.isWebGL2 ? e.createVertexArray() : s.createVertexArrayOES();
  }
  function f(D) {
    return i.isWebGL2 ? e.bindVertexArray(D) : s.bindVertexArrayOES(D);
  }
  function d(D) {
    return i.isWebGL2 ? e.deleteVertexArray(D) : s.deleteVertexArrayOES(D);
  }
  function p(D, R, C) {
    const z = C.wireframe === !0;
    let J = a[D.id];
    J === void 0 && (J = {}, a[D.id] = J);
    let $ = J[R.id];
    $ === void 0 && ($ = {}, J[R.id] = $);
    let re = $[z];
    return re === void 0 && (re = x(u()), $[z] = re), re;
  }
  function x(D) {
    const R = [], C = [], z = [];
    for (let J = 0; J < r; J++)
      R[J] = 0, C[J] = 0, z[J] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: R,
      enabledAttributes: C,
      attributeDivisors: z,
      object: D,
      attributes: {}
    };
  }
  function y(D) {
    const R = l.attributes, C = D.attributes;
    if (Object.keys(R).length !== Object.keys(C).length)
      return !0;
    for (const z in C) {
      const J = R[z], $ = C[z];
      if (J.attribute !== $ || J.data !== $.data)
        return !0;
    }
    return !1;
  }
  function g(D) {
    const R = {}, C = D.attributes;
    for (const z in C) {
      const J = C[z], $ = {};
      $.attribute = J, J.data && ($.data = J.data), R[z] = $;
    }
    l.attributes = R;
  }
  function m() {
    const D = l.newAttributes;
    for (let R = 0, C = D.length; R < C; R++)
      D[R] = 0;
  }
  function _(D) {
    v(D, 0);
  }
  function v(D, R) {
    const C = l.newAttributes, z = l.enabledAttributes, J = l.attributeDivisors;
    C[D] = 1, z[D] === 0 && (e.enableVertexAttribArray(D), z[D] = 1), J[D] !== R && ((i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, R), J[D] = R);
  }
  function w() {
    const D = l.newAttributes, R = l.enabledAttributes;
    for (let C = 0, z = R.length; C < z; C++)
      R[C] !== D[C] && (e.disableVertexAttribArray(C), R[C] = 0);
  }
  function A(D, R, C, z, J, $) {
    i.isWebGL2 === !0 && (C === 5124 || C === 5125) ? e.vertexAttribIPointer(D, R, C, J, $) : e.vertexAttribPointer(D, R, C, z, J, $);
  }
  function E(D, R, C, z) {
    if (i.isWebGL2 === !1 && (D.isInstancedMesh || z.isInstancedBufferGeometry) && t.get("ANGLE_instanced_arrays") === null)
      return;
    m();
    const J = z.attributes, $ = C.getAttributes(), re = R.defaultAttributeValues;
    for (const de in $) {
      const pe = $[de];
      if (pe >= 0) {
        const Pe = J[de];
        if (Pe !== void 0) {
          const Se = Pe.normalized, Ve = Pe.itemSize, De = n.get(Pe);
          if (De === void 0)
            continue;
          const j = De.buffer, Xe = De.type, Ee = De.bytesPerElement;
          if (Pe.isInterleavedBufferAttribute) {
            const Le = Pe.data, we = Le.stride, X = Pe.offset;
            Le && Le.isInstancedInterleavedBuffer ? (v(pe, Le.meshPerAttribute), z._maxInstanceCount === void 0 && (z._maxInstanceCount = Le.meshPerAttribute * Le.count)) : _(pe), e.bindBuffer(34962, j), A(pe, Ve, Xe, Se, we * Ee, X * Ee);
          } else
            Pe.isInstancedBufferAttribute ? (v(pe, Pe.meshPerAttribute), z._maxInstanceCount === void 0 && (z._maxInstanceCount = Pe.meshPerAttribute * Pe.count)) : _(pe), e.bindBuffer(34962, j), A(pe, Ve, Xe, Se, 0, 0);
        } else if (de === "instanceMatrix") {
          const Se = n.get(D.instanceMatrix);
          if (Se === void 0)
            continue;
          const Ve = Se.buffer, De = Se.type;
          v(pe + 0, 1), v(pe + 1, 1), v(pe + 2, 1), v(pe + 3, 1), e.bindBuffer(34962, Ve), e.vertexAttribPointer(pe + 0, 4, De, !1, 64, 0), e.vertexAttribPointer(pe + 1, 4, De, !1, 64, 16), e.vertexAttribPointer(pe + 2, 4, De, !1, 64, 32), e.vertexAttribPointer(pe + 3, 4, De, !1, 64, 48);
        } else if (re !== void 0) {
          const Se = re[de];
          if (Se !== void 0)
            switch (Se.length) {
              case 2:
                e.vertexAttrib2fv(pe, Se);
                break;
              case 3:
                e.vertexAttrib3fv(pe, Se);
                break;
              case 4:
                e.vertexAttrib4fv(pe, Se);
                break;
              default:
                e.vertexAttrib1fv(pe, Se);
            }
        }
      }
    }
    w();
  }
  function U() {
    O();
    for (const D in a) {
      const R = a[D];
      for (const C in R) {
        const z = R[C];
        for (const J in z)
          d(z[J].object), delete z[J];
        delete R[C];
      }
      delete a[D];
    }
  }
  function L(D) {
    if (a[D.id] === void 0)
      return;
    const R = a[D.id];
    for (const C in R) {
      const z = R[C];
      for (const J in z)
        d(z[J].object), delete z[J];
      delete R[C];
    }
    delete a[D.id];
  }
  function q(D) {
    for (const R in a) {
      const C = a[R];
      if (C[D.id] === void 0)
        continue;
      const z = C[D.id];
      for (const J in z)
        d(z[J].object), delete z[J];
      delete C[D.id];
    }
  }
  function O() {
    N(), l !== c && (l = c, f(l.object));
  }
  function N() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: h,
    reset: O,
    resetDefaultState: N,
    dispose: U,
    releaseStatesOfGeometry: L,
    releaseStatesOfProgram: q,
    initAttributes: m,
    enableAttribute: _,
    disableUnusedAttributes: w
  };
}
function Gm(e, t, n, i) {
  const r = i.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function a(l, h) {
    e.drawArrays(s, l, h), n.update(h, s, 1);
  }
  function c(l, h, u) {
    if (u === 0)
      return;
    let f, d;
    if (r)
      f = e, d = "drawArraysInstanced";
    else if (f = t.get("ANGLE_instanced_arrays"), d = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[d](s, l, h, u), n.update(h, s, u);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function zm(e, t, n) {
  let i;
  function r() {
    if (i !== void 0)
      return i;
    const A = t.get("EXT_texture_filter_anisotropic");
    return A !== null ? i = e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : i = 0, i;
  }
  function s(A) {
    if (A === "highp") {
      if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && e instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && e instanceof WebGL2ComputeRenderingContext;
  let a = n.precision !== void 0 ? n.precision : "highp";
  const c = s(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = n.logarithmicDepthBuffer === !0, h = e.getParameter(34930), u = e.getParameter(35660), f = e.getParameter(3379), d = e.getParameter(34076), p = e.getParameter(34921), x = e.getParameter(36347), y = e.getParameter(36348), g = e.getParameter(36349), m = u > 0, _ = o || !!t.get("OES_texture_float"), v = m && _, w = o ? e.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: l,
    maxTextures: h,
    maxVertexTextures: u,
    maxTextureSize: f,
    maxCubemapSize: d,
    maxAttributes: p,
    maxVertexUniforms: x,
    maxVaryings: y,
    maxFragmentUniforms: g,
    vertexTextures: m,
    floatFragmentTextures: _,
    floatVertexTextures: v,
    maxSamples: w
  };
}
function km() {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const s = new Yt(), o = new gt(), a = { value: null, needsUpdate: !1 };
  this.uniform = a, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, u, f) {
    const d = h.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = u, t = l(h, f, 0), n = h.length, d;
  }, this.beginShadows = function() {
    r = !0, l(null);
  }, this.endShadows = function() {
    r = !1, c();
  }, this.setState = function(h, u, f, d, p, x) {
    if (!i || h === null || h.length === 0 || r && !f)
      r ? l(null) : c();
    else {
      const y = r ? 0 : n, g = y * 4;
      let m = p.clippingState || null;
      a.value = m, m = l(h, d, g, x);
      for (let _ = 0; _ !== g; ++_)
        m[_] = t[_];
      p.clippingState = m, this.numIntersection = u ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function c() {
    a.value !== t && (a.value = t, a.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function l(h, u, f, d) {
    let p = h !== null ? h.length : 0, x = null;
    if (p !== 0) {
      if (x = a.value, d !== !0 || x === null) {
        const y = f + p * 4, g = u.matrixWorldInverse;
        o.getNormalMatrix(g), (x === null || x.length < y) && (x = new Float32Array(y));
        for (let m = 0, _ = f; m !== p; ++m, _ += 4)
          s.copy(h[m]).applyMatrix4(g, o), s.normal.toArray(x, _), x[_ + 3] = s.constant;
      }
      a.value = x, a.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, x;
  }
}
function Hm(e) {
  const t = {};
  return {
    has: function(n) {
      if (t[n] !== void 0)
        return t[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = e.getExtension(n);
      }
      return t[n] = i, !!i;
    },
    get: function(n) {
      return this.has(n) || console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n];
    }
  };
}
function Vm(e, t, n, i) {
  const r = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const f = u.target, d = r.get(f);
    d.index !== null && t.remove(d.index);
    for (const x in d.attributes)
      t.remove(d.attributes[x]);
    f.removeEventListener("dispose", o), r.delete(f);
    const p = s.get(d);
    p && (t.remove(p), s.delete(d)), i.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, n.memory.geometries--;
  }
  function a(u, f) {
    let d = r.get(f);
    return d || (f.addEventListener("dispose", o), f.isBufferGeometry ? d = f : f.isGeometry && (f._bufferGeometry === void 0 && (f._bufferGeometry = new he().setFromObject(u)), d = f._bufferGeometry), r.set(f, d), n.memory.geometries++, d);
  }
  function c(u) {
    const f = u.attributes;
    for (const p in f)
      t.update(f[p], 34962);
    const d = u.morphAttributes;
    for (const p in d) {
      const x = d[p];
      for (let y = 0, g = x.length; y < g; y++)
        t.update(x[y], 34962);
    }
  }
  function l(u) {
    const f = [], d = u.index, p = u.attributes.position;
    let x = 0;
    if (d !== null) {
      const m = d.array;
      x = d.version;
      for (let _ = 0, v = m.length; _ < v; _ += 3) {
        const w = m[_ + 0], A = m[_ + 1], E = m[_ + 2];
        f.push(w, A, A, E, E, w);
      }
    } else {
      const m = p.array;
      x = p.version;
      for (let _ = 0, v = m.length / 3 - 1; _ < v; _ += 3) {
        const w = _ + 0, A = _ + 1, E = _ + 2;
        f.push(w, A, A, E, E, w);
      }
    }
    const y = new (Bu(f) > 65535 ? Cr : Lr)(f, 1);
    y.version = x;
    const g = s.get(u);
    g && t.remove(g), s.set(u, y);
  }
  function h(u) {
    const f = s.get(u);
    if (f) {
      const d = u.index;
      d !== null && f.version < d.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function Wm(e, t, n, i) {
  const r = i.isWebGL2;
  let s;
  function o(f) {
    s = f;
  }
  let a, c;
  function l(f) {
    a = f.type, c = f.bytesPerElement;
  }
  function h(f, d) {
    e.drawElements(s, d, a, f * c), n.update(d, s, 1);
  }
  function u(f, d, p) {
    if (p === 0)
      return;
    let x, y;
    if (r)
      x = e, y = "drawElementsInstanced";
    else if (x = t.get("ANGLE_instanced_arrays"), y = "drawElementsInstancedANGLE", x === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    x[y](s, d, a, f * c, p), n.update(d, s, p);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function jm(e) {
  const t = {
    geometries: 0,
    textures: 0
  }, n = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function i(s, o, a) {
    switch (n.calls++, o) {
      case 4:
        n.triangles += a * (s / 3);
        break;
      case 1:
        n.lines += a * (s / 2);
        break;
      case 3:
        n.lines += a * (s - 1);
        break;
      case 2:
        n.lines += a * s;
        break;
      case 0:
        n.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    n.frame++, n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
  }
  return {
    memory: t,
    render: n,
    programs: null,
    autoReset: !0,
    reset: r,
    update: i
  };
}
function qm(e, t) {
  return e[0] - t[0];
}
function Xm(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1]);
}
function Ym(e) {
  const t = {}, n = new Float32Array(8), i = [];
  for (let s = 0; s < 8; s++)
    i[s] = [s, 0];
  function r(s, o, a, c) {
    const l = s.morphTargetInfluences, h = l === void 0 ? 0 : l.length;
    let u = t[o.id];
    if (u === void 0) {
      u = [];
      for (let y = 0; y < h; y++)
        u[y] = [y, 0];
      t[o.id] = u;
    }
    for (let y = 0; y < h; y++) {
      const g = u[y];
      g[0] = y, g[1] = l[y];
    }
    u.sort(Xm);
    for (let y = 0; y < 8; y++)
      y < h && u[y][1] ? (i[y][0] = u[y][0], i[y][1] = u[y][1]) : (i[y][0] = Number.MAX_SAFE_INTEGER, i[y][1] = 0);
    i.sort(qm);
    const f = a.morphTargets && o.morphAttributes.position, d = a.morphNormals && o.morphAttributes.normal;
    let p = 0;
    for (let y = 0; y < 8; y++) {
      const g = i[y], m = g[0], _ = g[1];
      m !== Number.MAX_SAFE_INTEGER && _ ? (f && o.getAttribute("morphTarget" + y) !== f[m] && o.setAttribute("morphTarget" + y, f[m]), d && o.getAttribute("morphNormal" + y) !== d[m] && o.setAttribute("morphNormal" + y, d[m]), n[y] = _, p += _) : (f && o.getAttribute("morphTarget" + y) !== void 0 && o.deleteAttribute("morphTarget" + y), d && o.getAttribute("morphNormal" + y) !== void 0 && o.deleteAttribute("morphNormal" + y), n[y] = 0);
    }
    const x = o.morphTargetsRelative ? 1 : 1 - p;
    c.getUniforms().setValue(e, "morphTargetBaseInfluence", x), c.getUniforms().setValue(e, "morphTargetInfluences", n);
  }
  return {
    update: r
  };
}
function Jm(e, t, n, i) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(a) {
    const c = i.render.frame, l = a.geometry, h = t.get(a, l);
    return r.get(h) !== c && (l.isGeometry && h.updateFromObject(a), t.update(h), r.set(h, c)), a.isInstancedMesh && n.update(a.instanceMatrix, 34962), h;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    update: s,
    dispose: o
  };
}
function Bn(e, t, n, i, r, s, o, a, c, l) {
  e = e !== void 0 ? e : [], t = t !== void 0 ? t : Lc, o = o !== void 0 ? o : Zn, Ge.call(this, e, t, n, i, r, s, o, a, c, l), this.flipY = !1;
}
Bn.prototype = Object.create(Ge.prototype);
Bn.prototype.constructor = Bn;
Bn.prototype.isCubeTexture = !0;
Object.defineProperty(Bn.prototype, "images", {
  get: function() {
    return this.image;
  },
  set: function(e) {
    this.image = e;
  }
});
function Ir(e, t, n, i) {
  Ge.call(this, null), this.image = { data: e || null, width: t || 1, height: n || 1, depth: i || 1 }, this.magFilter = ot, this.minFilter = ot, this.wrapR = xt, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
}
Ir.prototype = Object.create(Ge.prototype);
Ir.prototype.constructor = Ir;
Ir.prototype.isDataTexture2DArray = !0;
function Or(e, t, n, i) {
  Ge.call(this, null), this.image = { data: e || null, width: t || 1, height: n || 1, depth: i || 1 }, this.magFilter = ot, this.minFilter = ot, this.wrapR = xt, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
}
Or.prototype = Object.create(Ge.prototype);
Or.prototype.constructor = Or;
Or.prototype.isDataTexture3D = !0;
const Gu = new Ge(), Zm = new Ir(), $m = new Or(), zu = new Bn(), pl = [], ml = [], gl = new Float32Array(16), yl = new Float32Array(9), xl = new Float32Array(4);
function ir(e, t, n) {
  const i = e[0];
  if (i <= 0 || i > 0)
    return e;
  let r = t * n, s = pl[r];
  if (s === void 0 && (s = new Float32Array(r), pl[r] = s), t !== 0) {
    i.toArray(s, 0);
    for (let o = 1, a = 0; o !== t; ++o)
      a += n, e[o].toArray(s, a);
  }
  return s;
}
function It(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0, i = e.length; n < i; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Mt(e, t) {
  for (let n = 0, i = t.length; n < i; n++)
    e[n] = t[n];
}
function ku(e, t) {
  let n = ml[t];
  n === void 0 && (n = new Int32Array(t), ml[t] = n);
  for (let i = 0; i !== t; ++i)
    n[i] = e.allocateTextureUnit();
  return n;
}
function Qm(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function Km(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (It(n, t))
      return;
    e.uniform2fv(this.addr, t), Mt(n, t);
  }
}
function eg(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else if (t.r !== void 0)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
  else {
    if (It(n, t))
      return;
    e.uniform3fv(this.addr, t), Mt(n, t);
  }
}
function tg(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (It(n, t))
      return;
    e.uniform4fv(this.addr, t), Mt(n, t);
  }
}
function ng(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (It(n, t))
      return;
    e.uniformMatrix2fv(this.addr, !1, t), Mt(n, t);
  } else {
    if (It(n, i))
      return;
    xl.set(i), e.uniformMatrix2fv(this.addr, !1, xl), Mt(n, i);
  }
}
function ig(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (It(n, t))
      return;
    e.uniformMatrix3fv(this.addr, !1, t), Mt(n, t);
  } else {
    if (It(n, i))
      return;
    yl.set(i), e.uniformMatrix3fv(this.addr, !1, yl), Mt(n, i);
  }
}
function rg(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (It(n, t))
      return;
    e.uniformMatrix4fv(this.addr, !1, t), Mt(n, t);
  } else {
    if (It(n, i))
      return;
    gl.set(i), e.uniformMatrix4fv(this.addr, !1, gl), Mt(n, i);
  }
}
function sg(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(t || Gu, r);
}
function og(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || Zm, r);
}
function ag(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || $m, r);
}
function cg(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(t || zu, r);
}
function lg(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function ug(e, t) {
  const n = this.cache;
  It(n, t) || (e.uniform2iv(this.addr, t), Mt(n, t));
}
function hg(e, t) {
  const n = this.cache;
  It(n, t) || (e.uniform3iv(this.addr, t), Mt(n, t));
}
function fg(e, t) {
  const n = this.cache;
  It(n, t) || (e.uniform4iv(this.addr, t), Mt(n, t));
}
function dg(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function pg(e) {
  switch (e) {
    case 5126:
      return Qm;
    case 35664:
      return Km;
    case 35665:
      return eg;
    case 35666:
      return tg;
    case 35674:
      return ng;
    case 35675:
      return ig;
    case 35676:
      return rg;
    case 5124:
    case 35670:
      return lg;
    case 35667:
    case 35671:
      return ug;
    case 35668:
    case 35672:
      return hg;
    case 35669:
    case 35673:
      return fg;
    case 5125:
      return dg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return sg;
    case 35679:
    case 36299:
    case 36307:
      return ag;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return cg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return og;
  }
}
function mg(e, t) {
  e.uniform1fv(this.addr, t);
}
function gg(e, t) {
  e.uniform1iv(this.addr, t);
}
function yg(e, t) {
  e.uniform2iv(this.addr, t);
}
function xg(e, t) {
  e.uniform3iv(this.addr, t);
}
function vg(e, t) {
  e.uniform4iv(this.addr, t);
}
function _g(e, t) {
  const n = ir(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function bg(e, t) {
  const n = ir(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function wg(e, t) {
  const n = ir(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function Mg(e, t) {
  const n = ir(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function Sg(e, t) {
  const n = ir(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function Tg(e, t) {
  const n = ir(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function Eg(e, t, n) {
  const i = t.length, r = ku(n, i);
  e.uniform1iv(this.addr, r);
  for (let s = 0; s !== i; ++s)
    n.safeSetTexture2D(t[s] || Gu, r[s]);
}
function Ag(e, t, n) {
  const i = t.length, r = ku(n, i);
  e.uniform1iv(this.addr, r);
  for (let s = 0; s !== i; ++s)
    n.safeSetTextureCube(t[s] || zu, r[s]);
}
function Lg(e) {
  switch (e) {
    case 5126:
      return mg;
    case 35664:
      return _g;
    case 35665:
      return bg;
    case 35666:
      return wg;
    case 35674:
      return Mg;
    case 35675:
      return Sg;
    case 35676:
      return Tg;
    case 5124:
    case 35670:
      return gg;
    case 35667:
    case 35671:
      return yg;
    case 35668:
    case 35672:
      return xg;
    case 35669:
    case 35673:
      return vg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Eg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ag;
  }
}
function Cg(e, t, n) {
  this.id = e, this.addr = n, this.cache = [], this.setValue = pg(t.type);
}
function Hu(e, t, n) {
  this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Lg(t.type);
}
Hu.prototype.updateCache = function(e) {
  let t = this.cache;
  e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), Mt(t, e);
};
function Vu(e) {
  this.id = e, this.seq = [], this.map = {};
}
Vu.prototype.setValue = function(e, t, n) {
  const i = this.seq;
  for (let r = 0, s = i.length; r !== s; ++r) {
    const o = i[r];
    o.setValue(e, t[o.id], n);
  }
};
const Ma = /([\w\d_]+)(\])?(\[|\.)?/g;
function vl(e, t) {
  e.seq.push(t), e.map[t.id] = t;
}
function Rg(e, t, n) {
  const i = e.name, r = i.length;
  for (Ma.lastIndex = 0; ; ) {
    const s = Ma.exec(i), o = Ma.lastIndex;
    let a = s[1], c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === r) {
      vl(n, l === void 0 ? new Cg(a, e, t) : new Hu(a, e, t));
      break;
    } else {
      let u = n.map[a];
      u === void 0 && (u = new Vu(a), vl(n, u)), n = u;
    }
  }
}
function On(e, t) {
  this.seq = [], this.map = {};
  const n = e.getProgramParameter(t, 35718);
  for (let i = 0; i < n; ++i) {
    const r = e.getActiveUniform(t, i), s = e.getUniformLocation(t, r.name);
    Rg(r, s, this);
  }
}
On.prototype.setValue = function(e, t, n, i) {
  const r = this.map[t];
  r !== void 0 && r.setValue(e, n, i);
};
On.prototype.setOptional = function(e, t, n) {
  const i = t[n];
  i !== void 0 && this.setValue(e, n, i);
};
On.upload = function(e, t, n, i) {
  for (let r = 0, s = t.length; r !== s; ++r) {
    const o = t[r], a = n[o.id];
    a.needsUpdate !== !1 && o.setValue(e, a.value, i);
  }
};
On.seqWithValue = function(e, t) {
  const n = [];
  for (let i = 0, r = e.length; i !== r; ++i) {
    const s = e[i];
    s.id in t && n.push(s);
  }
  return n;
};
function _l(e, t, n) {
  const i = e.createShader(t);
  return e.shaderSource(i, n), e.compileShader(i), i;
}
let Pg = 0;
function Ig(e) {
  const t = e.split(`
`);
  for (let n = 0; n < t.length; n++)
    t[n] = n + 1 + ": " + t[n];
  return t.join(`
`);
}
function Wu(e) {
  switch (e) {
    case vt:
      return ["Linear", "( value )"];
    case Yo:
      return ["sRGB", "( value )"];
    case Oc:
      return ["RGBE", "( value )"];
    case Pu:
      return ["RGBM", "( value, 7.0 )"];
    case Iu:
      return ["RGBM", "( value, 16.0 )"];
    case Ou:
      return ["RGBD", "( value, 256.0 )"];
    case Ic:
      return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case qf:
      return ["LogLuv", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", e), ["Linear", "( value )"];
  }
}
function bl(e, t, n) {
  const i = e.getShaderParameter(t, 35713), r = e.getShaderInfoLog(t).trim();
  if (i && r === "")
    return "";
  const s = e.getShaderSource(t);
  return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + `
` + r + Ig(s);
}
function hr(e, t) {
  const n = Wu(t);
  return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
}
function Og(e, t) {
  const n = Wu(t);
  return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
}
function Dg(e, t) {
  let n;
  switch (t) {
    case Wh:
      n = "Linear";
      break;
    case jh:
      n = "Reinhard";
      break;
    case qh:
      n = "OptimizedCineon";
      break;
    case Xh:
      n = "ACESFilmic";
      break;
    case Yh:
      n = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), n = "Linear";
  }
  return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
function Ng(e) {
  return [
    e.extensionDerivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || e.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (e.extensionShaderTextureLOD || e.envMap) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(xr).join(`
`);
}
function Bg(e) {
  const t = [];
  for (const n in e) {
    const i = e[n];
    i !== !1 && t.push("#define " + n + " " + i);
  }
  return t.join(`
`);
}
function Fg(e, t) {
  const n = {}, i = e.getProgramParameter(t, 35721);
  for (let r = 0; r < i; r++) {
    const o = e.getActiveAttrib(t, r).name;
    n[o] = e.getAttribLocation(t, o);
  }
  return n;
}
function xr(e) {
  return e !== "";
}
function wl(e, t) {
  return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ml(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Ug = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ha(e) {
  return e.replace(Ug, Gg);
}
function Gg(e, t) {
  const n = Ie[t];
  if (n === void 0)
    throw new Error("Can not resolve #include <" + t + ">");
  return Ha(n);
}
const zg = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, kg = /#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;
function Sl(e) {
  return e.replace(kg, ju).replace(zg, Hg);
}
function Hg(e, t, n, i) {
  return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), ju(e, t, n, i);
}
function ju(e, t, n, i) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(n); s++)
    r += i.replace(/\[ i \]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Tl(e) {
  let t = "precision " + e.precision + ` float;
precision ` + e.precision + " int;";
  return e.precision === "highp" ? t += `
#define HIGH_PRECISION` : e.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : e.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function Vg(e) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return e.shadowMapType === Su ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === wh ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === yr && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Wg(e) {
  let t = "ENVMAP_TYPE_CUBE";
  if (e.envMap)
    switch (e.envMapMode) {
      case Lc:
      case Cc:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case cs:
      case qo:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
      case Lu:
      case Rc:
        t = "ENVMAP_TYPE_EQUIREC";
        break;
    }
  return t;
}
function jg(e) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (e.envMap)
    switch (e.envMapMode) {
      case Cc:
      case Rc:
      case qo:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function qg(e) {
  let t = "ENVMAP_BLENDING_NONE";
  if (e.envMap)
    switch (e.combine) {
      case jo:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Hh:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case Vh:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function Xg(e, t, n, i) {
  const r = e.getContext(), s = n.defines;
  let o = n.vertexShader, a = n.fragmentShader;
  const c = Vg(n), l = Wg(n), h = jg(n), u = qg(n), f = e.gammaFactor > 0 ? e.gammaFactor : 1, d = n.isWebGL2 ? "" : Ng(n), p = Bg(s), x = r.createProgram();
  let y, g;
  n.isRawShaderMaterial ? (y = [
    p
  ].filter(xr).join(`
`), y.length > 0 && (y += `
`), g = [
    d,
    p
  ].filter(xr).join(`
`), g.length > 0 && (g += `
`)) : (y = [
    Tl(n),
    "#define SHADER_NAME " + n.shaderName,
    p,
    n.instancing ? "#define USE_INSTANCING" : "",
    n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    "#define GAMMA_FACTOR " + f,
    "#define MAX_BONES " + n.maxBones,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.map ? "#define USE_MAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + h : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    n.vertexTangents ? "#define USE_TANGENT" : "",
    n.vertexColors ? "#define USE_COLOR" : "",
    n.vertexUvs ? "#define USE_UV" : "",
    n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.skinning ? "#define USE_SKINNING" : "",
    n.useVertexTexture ? "#define BONE_TEXTURE" : "",
    n.morphTargets ? "#define USE_MORPHTARGETS" : "",
    n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + c : "",
    n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    " attribute mat4 instanceMatrix;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#ifdef USE_COLOR",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_MORPHTARGETS",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(xr).join(`
`), g = [
    d,
    Tl(n),
    "#define SHADER_NAME " + n.shaderName,
    p,
    n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "",
    // add '.0' if integer
    "#define GAMMA_FACTOR " + f,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.map ? "#define USE_MAP" : "",
    n.matcap ? "#define USE_MATCAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + l : "",
    n.envMap ? "#define " + h : "",
    n.envMap ? "#define " + u : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.sheen ? "#define USE_SHEEN" : "",
    n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    n.vertexTangents ? "#define USE_TANGENT" : "",
    n.vertexColors ? "#define USE_COLOR" : "",
    n.vertexUvs ? "#define USE_UV" : "",
    n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    n.gradientMap ? "#define USE_GRADIENTMAP" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + c : "",
    n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    n.toneMapping !== Ii ? "#define TONE_MAPPING" : "",
    n.toneMapping !== Ii ? Ie.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    n.toneMapping !== Ii ? Dg("toneMapping", n.toneMapping) : "",
    n.dithering ? "#define DITHERING" : "",
    Ie.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    n.map ? hr("mapTexelToLinear", n.mapEncoding) : "",
    n.matcap ? hr("matcapTexelToLinear", n.matcapEncoding) : "",
    n.envMap ? hr("envMapTexelToLinear", n.envMapEncoding) : "",
    n.emissiveMap ? hr("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "",
    n.lightMap ? hr("lightMapTexelToLinear", n.lightMapEncoding) : "",
    Og("linearToOutputTexel", n.outputEncoding),
    n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
    `
`
  ].filter(xr).join(`
`)), o = Ha(o), o = wl(o, n), o = Ml(o, n), a = Ha(a), a = wl(a, n), a = Ml(a, n), o = Sl(o), a = Sl(a), n.isWebGL2 && !n.isRawShaderMaterial && (y = [
    `#version 300 es
`,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + y, g = [
    `#version 300 es
`,
    "#define varying in",
    "out highp vec4 pc_fragColor;",
    "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + g);
  const m = y + o, _ = g + a, v = _l(r, 35633, m), w = _l(r, 35632, _);
  if (r.attachShader(x, v), r.attachShader(x, w), n.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, n.index0AttributeName) : n.morphTargets === !0 && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x), e.debug.checkShaderErrors) {
    const U = r.getProgramInfoLog(x).trim(), L = r.getShaderInfoLog(v).trim(), q = r.getShaderInfoLog(w).trim();
    let O = !0, N = !0;
    if (r.getProgramParameter(x, 35714) === !1) {
      O = !1;
      const D = bl(r, v, "vertex"), R = bl(r, w, "fragment");
      console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(x, 35715), "gl.getProgramInfoLog", U, D, R);
    } else
      U !== "" ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", U) : (L === "" || q === "") && (N = !1);
    N && (this.diagnostics = {
      runnable: O,
      programLog: U,
      vertexShader: {
        log: L,
        prefix: y
      },
      fragmentShader: {
        log: q,
        prefix: g
      }
    });
  }
  r.deleteShader(v), r.deleteShader(w);
  let A;
  this.getUniforms = function() {
    return A === void 0 && (A = new On(r, x)), A;
  };
  let E;
  return this.getAttributes = function() {
    return E === void 0 && (E = Fg(r, x)), E;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.name = n.shaderName, this.id = Pg++, this.cacheKey = t, this.usedTimes = 1, this.program = x, this.vertexShader = v, this.fragmentShader = w, this;
}
function Yg(e, t, n, i) {
  const r = [], s = n.isWebGL2, o = n.logarithmicDepthBuffer, a = n.floatVertexTextures, c = n.maxVertexUniforms, l = n.vertexTextures;
  let h = n.precision;
  const u = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  }, f = [
    "precision",
    "isWebGL2",
    "supportsVertexTextures",
    "outputEncoding",
    "instancing",
    "map",
    "mapEncoding",
    "matcap",
    "matcapEncoding",
    "envMap",
    "envMapMode",
    "envMapEncoding",
    "envMapCubeUV",
    "lightMap",
    "lightMapEncoding",
    "aoMap",
    "emissiveMap",
    "emissiveMapEncoding",
    "bumpMap",
    "normalMap",
    "objectSpaceNormalMap",
    "tangentSpaceNormalMap",
    "clearcoatMap",
    "clearcoatRoughnessMap",
    "clearcoatNormalMap",
    "displacementMap",
    "specularMap",
    "roughnessMap",
    "metalnessMap",
    "gradientMap",
    "alphaMap",
    "combine",
    "vertexColors",
    "vertexTangents",
    "vertexUvs",
    "uvsVertexOnly",
    "fog",
    "useFog",
    "fogExp2",
    "flatShading",
    "sizeAttenuation",
    "logarithmicDepthBuffer",
    "skinning",
    "maxBones",
    "useVertexTexture",
    "morphTargets",
    "morphNormals",
    "maxMorphTargets",
    "maxMorphNormals",
    "premultipliedAlpha",
    "numDirLights",
    "numPointLights",
    "numSpotLights",
    "numHemiLights",
    "numRectAreaLights",
    "numDirLightShadows",
    "numPointLightShadows",
    "numSpotLightShadows",
    "shadowMapEnabled",
    "shadowMapType",
    "toneMapping",
    "physicallyCorrectLights",
    "alphaTest",
    "doubleSided",
    "flipSided",
    "numClippingPlanes",
    "numClipIntersection",
    "depthPacking",
    "dithering",
    "sheen",
    "transmissionMap"
  ];
  function d(v) {
    const A = v.skeleton.bones;
    if (a)
      return 1024;
    {
      const U = Math.floor((c - 20) / 4), L = Math.min(U, A.length);
      return L < A.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + A.length + " bones. This GPU supports " + L + "."), 0) : L;
    }
  }
  function p(v) {
    let w;
    return v ? v.isTexture ? w = v.encoding : v.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), w = v.texture.encoding) : w = vt, w;
  }
  function x(v, w, A, E, U, L, q) {
    const O = E.fog, N = v.isMeshStandardMaterial ? E.environment : null, D = v.envMap || N, R = u[v.type], C = q.isSkinnedMesh ? d(q) : 0;
    v.precision !== null && (h = n.getMaxPrecision(v.precision), h !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", h, "instead."));
    let z, J;
    if (R) {
      const de = Jt[R];
      z = de.vertexShader, J = de.fragmentShader;
    } else
      z = v.vertexShader, J = v.fragmentShader;
    const $ = e.getRenderTarget();
    return {
      isWebGL2: s,
      shaderID: R,
      shaderName: v.type,
      vertexShader: z,
      fragmentShader: J,
      defines: v.defines,
      isRawShaderMaterial: v.isRawShaderMaterial,
      isShaderMaterial: v.isShaderMaterial,
      precision: h,
      instancing: q.isInstancedMesh === !0,
      supportsVertexTextures: l,
      outputEncoding: $ !== null ? p($.texture) : e.outputEncoding,
      map: !!v.map,
      mapEncoding: p(v.map),
      matcap: !!v.matcap,
      matcapEncoding: p(v.matcap),
      envMap: !!D,
      envMapMode: D && D.mapping,
      envMapEncoding: p(D),
      envMapCubeUV: !!D && (D.mapping === cs || D.mapping === qo),
      lightMap: !!v.lightMap,
      lightMapEncoding: p(v.lightMap),
      aoMap: !!v.aoMap,
      emissiveMap: !!v.emissiveMap,
      emissiveMapEncoding: p(v.emissiveMap),
      bumpMap: !!v.bumpMap,
      normalMap: !!v.normalMap,
      objectSpaceNormalMap: v.normalMapType === Jf,
      tangentSpaceNormalMap: v.normalMapType === er,
      clearcoatMap: !!v.clearcoatMap,
      clearcoatRoughnessMap: !!v.clearcoatRoughnessMap,
      clearcoatNormalMap: !!v.clearcoatNormalMap,
      displacementMap: !!v.displacementMap,
      roughnessMap: !!v.roughnessMap,
      metalnessMap: !!v.metalnessMap,
      specularMap: !!v.specularMap,
      alphaMap: !!v.alphaMap,
      gradientMap: !!v.gradientMap,
      sheen: !!v.sheen,
      transmissionMap: !!v.transmissionMap,
      combine: v.combine,
      vertexTangents: v.normalMap && v.vertexTangents,
      vertexColors: v.vertexColors,
      vertexUvs: !!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatMap || !!v.clearcoatRoughnessMap || !!v.clearcoatNormalMap || !!v.displacementMap || !!v.transmissionMap,
      uvsVertexOnly: !(v.map || v.bumpMap || v.normalMap || v.specularMap || v.alphaMap || v.emissiveMap || v.roughnessMap || v.metalnessMap || v.clearcoatNormalMap || v.transmissionMap) && !!v.displacementMap,
      fog: !!O,
      useFog: v.fog,
      fogExp2: O && O.isFogExp2,
      flatShading: v.flatShading,
      sizeAttenuation: v.sizeAttenuation,
      logarithmicDepthBuffer: o,
      skinning: v.skinning && C > 0,
      maxBones: C,
      useVertexTexture: a,
      morphTargets: v.morphTargets,
      morphNormals: v.morphNormals,
      maxMorphTargets: e.maxMorphTargets,
      maxMorphNormals: e.maxMorphNormals,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numClippingPlanes: U,
      numClipIntersection: L,
      dithering: v.dithering,
      shadowMapEnabled: e.shadowMap.enabled && A.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: v.toneMapped ? e.toneMapping : Ii,
      physicallyCorrectLights: e.physicallyCorrectLights,
      premultipliedAlpha: v.premultipliedAlpha,
      alphaTest: v.alphaTest,
      doubleSided: v.side === Wo,
      flipSided: v.side === rt,
      depthPacking: v.depthPacking !== void 0 ? v.depthPacking : !1,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: v.extensions && v.extensions.derivatives,
      extensionFragDepth: v.extensions && v.extensions.fragDepth,
      extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
      extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: s || t.get("EXT_frag_depth") !== null,
      rendererExtensionDrawBuffers: s || t.get("WEBGL_draw_buffers") !== null,
      rendererExtensionShaderTextureLod: s || t.get("EXT_shader_texture_lod") !== null,
      customProgramCacheKey: v.customProgramCacheKey()
    };
  }
  function y(v) {
    const w = [];
    if (v.shaderID ? w.push(v.shaderID) : (w.push(v.fragmentShader), w.push(v.vertexShader)), v.defines !== void 0)
      for (const A in v.defines)
        w.push(A), w.push(v.defines[A]);
    if (v.isRawShaderMaterial === void 0) {
      for (let A = 0; A < f.length; A++)
        w.push(v[f[A]]);
      w.push(e.outputEncoding), w.push(e.gammaFactor);
    }
    return w.push(v.customProgramCacheKey), w.join();
  }
  function g(v) {
    const w = u[v.type];
    let A;
    if (w) {
      const E = Jt[w];
      A = fd.clone(E.uniforms);
    } else
      A = v.uniforms;
    return A;
  }
  function m(v, w) {
    let A;
    for (let E = 0, U = r.length; E < U; E++) {
      const L = r[E];
      if (L.cacheKey === w) {
        A = L, ++A.usedTimes;
        break;
      }
    }
    return A === void 0 && (A = new Xg(e, w, v, i), r.push(A)), A;
  }
  function _(v) {
    if (--v.usedTimes === 0) {
      const w = r.indexOf(v);
      r[w] = r[r.length - 1], r.pop(), v.destroy();
    }
  }
  return {
    getParameters: x,
    getProgramCacheKey: y,
    getUniforms: g,
    acquireProgram: m,
    releaseProgram: _,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: r
  };
}
function Jg() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s) {
    let o = e.get(s);
    return o === void 0 && (o = {}, e.set(s, o)), o;
  }
  function n(s) {
    e.delete(s);
  }
  function i(s, o, a) {
    e.get(s)[o] = a;
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    remove: n,
    update: i,
    dispose: r
  };
}
function Zg(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id;
}
function $g(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
}
function El(e) {
  const t = [];
  let n = 0;
  const i = [], r = [], s = { id: -1 };
  function o() {
    n = 0, i.length = 0, r.length = 0;
  }
  function a(f, d, p, x, y, g) {
    let m = t[n];
    const _ = e.get(p);
    return m === void 0 ? (m = {
      id: f.id,
      object: f,
      geometry: d,
      material: p,
      program: _.program || s,
      groupOrder: x,
      renderOrder: f.renderOrder,
      z: y,
      group: g
    }, t[n] = m) : (m.id = f.id, m.object = f, m.geometry = d, m.material = p, m.program = _.program || s, m.groupOrder = x, m.renderOrder = f.renderOrder, m.z = y, m.group = g), n++, m;
  }
  function c(f, d, p, x, y, g) {
    const m = a(f, d, p, x, y, g);
    (p.transparent === !0 ? r : i).push(m);
  }
  function l(f, d, p, x, y, g) {
    const m = a(f, d, p, x, y, g);
    (p.transparent === !0 ? r : i).unshift(m);
  }
  function h(f, d) {
    i.length > 1 && i.sort(f || Zg), r.length > 1 && r.sort(d || $g);
  }
  function u() {
    for (let f = n, d = t.length; f < d; f++) {
      const p = t[f];
      if (p.id === null)
        break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.program = null, p.group = null;
    }
  }
  return {
    opaque: i,
    transparent: r,
    init: o,
    push: c,
    unshift: l,
    finish: u,
    sort: h
  };
}
function Qg(e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s) {
    const o = s.target;
    o.removeEventListener("dispose", n), t.delete(o);
  }
  function i(s, o) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new El(e), t.set(s, /* @__PURE__ */ new WeakMap()), t.get(s).set(o, c), s.addEventListener("dispose", n)) : (c = a.get(o), c === void 0 && (c = new El(e), a.set(o, c))), c;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: r
  };
}
function Kg() {
  const e = {};
  return {
    get: function(t) {
      if (e[t.id] !== void 0)
        return e[t.id];
      let n;
      switch (t.type) {
        case "DirectionalLight":
          n = {
            direction: new b(),
            color: new fe()
          };
          break;
        case "SpotLight":
          n = {
            position: new b(),
            direction: new b(),
            color: new fe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          n = {
            position: new b(),
            color: new fe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          n = {
            direction: new b(),
            skyColor: new fe(),
            groundColor: new fe()
          };
          break;
        case "RectAreaLight":
          n = {
            color: new fe(),
            position: new b(),
            halfWidth: new b(),
            halfHeight: new b()
          };
          break;
      }
      return e[t.id] = n, n;
    }
  };
}
function ey() {
  const e = {};
  return {
    get: function(t) {
      if (e[t.id] !== void 0)
        return e[t.id];
      let n;
      switch (t.type) {
        case "DirectionalLight":
          n = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H()
          };
          break;
        case "SpotLight":
          n = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H()
          };
          break;
        case "PointLight":
          n = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return e[t.id] = n, n;
    }
  };
}
let ty = 0;
function ny(e, t) {
  return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
}
function iy() {
  const e = new Kg(), t = ey(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotShadow: [],
    spotShadowMap: [],
    spotShadowMatrix: [],
    rectArea: [],
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: []
  };
  for (let a = 0; a < 9; a++)
    n.probe.push(new b());
  const i = new b(), r = new Ce(), s = new Ce();
  function o(a, c, l) {
    let h = 0, u = 0, f = 0;
    for (let E = 0; E < 9; E++)
      n.probe[E].set(0, 0, 0);
    let d = 0, p = 0, x = 0, y = 0, g = 0, m = 0, _ = 0, v = 0;
    const w = l.matrixWorldInverse;
    a.sort(ny);
    for (let E = 0, U = a.length; E < U; E++) {
      const L = a[E], q = L.color, O = L.intensity, N = L.distance, D = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        h += q.r * O, u += q.g * O, f += q.b * O;
      else if (L.isLightProbe)
        for (let R = 0; R < 9; R++)
          n.probe[R].addScaledVector(L.sh.coefficients[R], O);
      else if (L.isDirectionalLight) {
        const R = e.get(L);
        if (R.color.copy(L.color).multiplyScalar(L.intensity), R.direction.setFromMatrixPosition(L.matrixWorld), i.setFromMatrixPosition(L.target.matrixWorld), R.direction.sub(i), R.direction.transformDirection(w), L.castShadow) {
          const C = L.shadow, z = t.get(L);
          z.shadowBias = C.bias, z.shadowNormalBias = C.normalBias, z.shadowRadius = C.radius, z.shadowMapSize = C.mapSize, n.directionalShadow[d] = z, n.directionalShadowMap[d] = D, n.directionalShadowMatrix[d] = L.shadow.matrix, m++;
        }
        n.directional[d] = R, d++;
      } else if (L.isSpotLight) {
        const R = e.get(L);
        if (R.position.setFromMatrixPosition(L.matrixWorld), R.position.applyMatrix4(w), R.color.copy(q).multiplyScalar(O), R.distance = N, R.direction.setFromMatrixPosition(L.matrixWorld), i.setFromMatrixPosition(L.target.matrixWorld), R.direction.sub(i), R.direction.transformDirection(w), R.coneCos = Math.cos(L.angle), R.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), R.decay = L.decay, L.castShadow) {
          const C = L.shadow, z = t.get(L);
          z.shadowBias = C.bias, z.shadowNormalBias = C.normalBias, z.shadowRadius = C.radius, z.shadowMapSize = C.mapSize, n.spotShadow[x] = z, n.spotShadowMap[x] = D, n.spotShadowMatrix[x] = L.shadow.matrix, v++;
        }
        n.spot[x] = R, x++;
      } else if (L.isRectAreaLight) {
        const R = e.get(L);
        R.color.copy(q).multiplyScalar(O), R.position.setFromMatrixPosition(L.matrixWorld), R.position.applyMatrix4(w), s.identity(), r.copy(L.matrixWorld), r.premultiply(w), s.extractRotation(r), R.halfWidth.set(L.width * 0.5, 0, 0), R.halfHeight.set(0, L.height * 0.5, 0), R.halfWidth.applyMatrix4(s), R.halfHeight.applyMatrix4(s), n.rectArea[y] = R, y++;
      } else if (L.isPointLight) {
        const R = e.get(L);
        if (R.position.setFromMatrixPosition(L.matrixWorld), R.position.applyMatrix4(w), R.color.copy(L.color).multiplyScalar(L.intensity), R.distance = L.distance, R.decay = L.decay, L.castShadow) {
          const C = L.shadow, z = t.get(L);
          z.shadowBias = C.bias, z.shadowNormalBias = C.normalBias, z.shadowRadius = C.radius, z.shadowMapSize = C.mapSize, z.shadowCameraNear = C.camera.near, z.shadowCameraFar = C.camera.far, n.pointShadow[p] = z, n.pointShadowMap[p] = D, n.pointShadowMatrix[p] = L.shadow.matrix, _++;
        }
        n.point[p] = R, p++;
      } else if (L.isHemisphereLight) {
        const R = e.get(L);
        R.direction.setFromMatrixPosition(L.matrixWorld), R.direction.transformDirection(w), R.direction.normalize(), R.skyColor.copy(L.color).multiplyScalar(O), R.groundColor.copy(L.groundColor).multiplyScalar(O), n.hemi[g] = R, g++;
      }
    }
    n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = f;
    const A = n.hash;
    (A.directionalLength !== d || A.pointLength !== p || A.spotLength !== x || A.rectAreaLength !== y || A.hemiLength !== g || A.numDirectionalShadows !== m || A.numPointShadows !== _ || A.numSpotShadows !== v) && (n.directional.length = d, n.spot.length = x, n.rectArea.length = y, n.point.length = p, n.hemi.length = g, n.directionalShadow.length = m, n.directionalShadowMap.length = m, n.pointShadow.length = _, n.pointShadowMap.length = _, n.spotShadow.length = v, n.spotShadowMap.length = v, n.directionalShadowMatrix.length = m, n.pointShadowMatrix.length = _, n.spotShadowMatrix.length = v, A.directionalLength = d, A.pointLength = p, A.spotLength = x, A.rectAreaLength = y, A.hemiLength = g, A.numDirectionalShadows = m, A.numPointShadows = _, A.numSpotShadows = v, n.version = ty++);
  }
  return {
    setup: o,
    state: n
  };
}
function Al() {
  const e = new iy(), t = [], n = [];
  function i() {
    t.length = 0, n.length = 0;
  }
  function r(c) {
    t.push(c);
  }
  function s(c) {
    n.push(c);
  }
  function o(c) {
    e.setup(t, n, c);
  }
  return {
    init: i,
    state: {
      lightsArray: t,
      shadowsArray: n,
      lights: e
    },
    setupLights: o,
    pushLight: r,
    pushShadow: s
  };
}
function ry() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r) {
    const s = r.target;
    s.removeEventListener("dispose", t), e.delete(s);
  }
  function n(r, s) {
    let o;
    return e.has(r) === !1 ? (o = new Al(), e.set(r, /* @__PURE__ */ new WeakMap()), e.get(r).set(s, o), r.addEventListener("dispose", t)) : e.get(r).has(s) === !1 ? (o = new Al(), e.get(r).set(s, o)) : o = e.get(r).get(s), o;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
function Kn(e) {
  _e.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Xf, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e);
}
Kn.prototype = Object.create(_e.prototype);
Kn.prototype.constructor = Kn;
Kn.prototype.isMeshDepthMaterial = !0;
Kn.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
};
function ei(e) {
  _e.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new b(), this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e);
}
ei.prototype = Object.create(_e.prototype);
ei.prototype.constructor = ei;
ei.prototype.isMeshDistanceMaterial = !0;
ei.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
};
var sy = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  float mean = 0.0;
  float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );
  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
    #ifdef HORIZONAL_PASS
      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;
  float std_dev = sqrt( squared_mean - mean * mean );
  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`, oy = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
function qu(e, t, n) {
  let i = new us();
  const r = new H(), s = new H(), o = new Be(), a = [], c = [], l = {}, h = { 0: rt, 1: as, 2: Wo }, u = new _t({
    defines: {
      SAMPLE_RATE: 2 / 8,
      HALF_SAMPLE_RATE: 1 / 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new H() },
      radius: { value: 4 }
    },
    vertexShader: oy,
    fragmentShader: sy
  }), f = u.clone();
  f.defines.HORIZONAL_PASS = 1;
  const d = new he();
  d.setAttribute(
    "position",
    new ge(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new Fe(d, u), x = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Su, this.render = function(w, A, E) {
    if (x.enabled === !1 || x.autoUpdate === !1 && x.needsUpdate === !1 || w.length === 0)
      return;
    const U = e.getRenderTarget(), L = e.getActiveCubeFace(), q = e.getActiveMipmapLevel(), O = e.state;
    O.setBlending(In), O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    for (let N = 0, D = w.length; N < D; N++) {
      const R = w[N], C = R.shadow;
      if (C.autoUpdate === !1 && C.needsUpdate === !1)
        continue;
      if (C === void 0) {
        console.warn("THREE.WebGLShadowMap:", R, "has no shadow.");
        continue;
      }
      r.copy(C.mapSize);
      const z = C.getFrameExtents();
      if (r.multiply(z), s.copy(C.mapSize), (r.x > n || r.y > n) && (r.x > n && (s.x = Math.floor(n / z.x), r.x = s.x * z.x, C.mapSize.x = s.x), r.y > n && (s.y = Math.floor(n / z.y), r.y = s.y * z.y, C.mapSize.y = s.y)), C.map === null && !C.isPointLightShadow && this.type === yr) {
        const $ = { minFilter: dt, magFilter: dt, format: Lt, stencilBuffer: !1 };
        C.map = new Ct(r.x, r.y, $), C.map.texture.name = R.name + ".shadowMap", C.mapPass = new Ct(r.x, r.y, $), C.camera.updateProjectionMatrix();
      }
      if (C.map === null) {
        const $ = { minFilter: ot, magFilter: ot, format: Lt, stencilBuffer: !1 };
        C.map = new Ct(r.x, r.y, $), C.map.texture.name = R.name + ".shadowMap", C.camera.updateProjectionMatrix();
      }
      e.setRenderTarget(C.map), e.clear();
      const J = C.getViewportCount();
      for (let $ = 0; $ < J; $++) {
        const re = C.getViewport($);
        o.set(
          s.x * re.x,
          s.y * re.y,
          s.x * re.z,
          s.y * re.w
        ), O.viewport(o), C.updateMatrices(R, $), i = C.getFrustum(), v(A, E, C.camera, R, this.type);
      }
      !C.isPointLightShadow && this.type === yr && y(C, E), C.needsUpdate = !1;
    }
    x.needsUpdate = !1, e.setRenderTarget(U, L, q);
  };
  function y(w, A) {
    const E = t.update(p);
    u.uniforms.shadow_pass.value = w.map.texture, u.uniforms.resolution.value = w.mapSize, u.uniforms.radius.value = w.radius, e.setRenderTarget(w.mapPass), e.clear(), e.renderBufferDirect(A, null, E, u, p, null), f.uniforms.shadow_pass.value = w.mapPass.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, e.setRenderTarget(w.map), e.clear(), e.renderBufferDirect(A, null, E, f, p, null);
  }
  function g(w, A, E) {
    const U = w << 0 | A << 1 | E << 2;
    let L = a[U];
    return L === void 0 && (L = new Kn({
      depthPacking: Yf,
      morphTargets: w,
      skinning: A
    }), a[U] = L), L;
  }
  function m(w, A, E) {
    const U = w << 0 | A << 1 | E << 2;
    let L = c[U];
    return L === void 0 && (L = new ei({
      morphTargets: w,
      skinning: A
    }), c[U] = L), L;
  }
  function _(w, A, E, U, L, q, O) {
    let N = null, D = g, R = w.customDepthMaterial;
    if (U.isPointLight === !0 && (D = m, R = w.customDistanceMaterial), R === void 0) {
      let C = !1;
      E.morphTargets === !0 && (C = A.morphAttributes && A.morphAttributes.position && A.morphAttributes.position.length > 0);
      let z = !1;
      w.isSkinnedMesh === !0 && (E.skinning === !0 ? z = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", w));
      const J = w.isInstancedMesh === !0;
      N = D(C, z, J);
    } else
      N = R;
    if (e.localClippingEnabled && E.clipShadows === !0 && E.clippingPlanes.length !== 0) {
      const C = N.uuid, z = E.uuid;
      let J = l[C];
      J === void 0 && (J = {}, l[C] = J);
      let $ = J[z];
      $ === void 0 && ($ = N.clone(), J[z] = $), N = $;
    }
    return N.visible = E.visible, N.wireframe = E.wireframe, O === yr ? N.side = E.shadowSide !== null ? E.shadowSide : E.side : N.side = E.shadowSide !== null ? E.shadowSide : h[E.side], N.clipShadows = E.clipShadows, N.clippingPlanes = E.clippingPlanes, N.clipIntersection = E.clipIntersection, N.wireframeLinewidth = E.wireframeLinewidth, N.linewidth = E.linewidth, U.isPointLight === !0 && N.isMeshDistanceMaterial === !0 && (N.referencePosition.setFromMatrixPosition(U.matrixWorld), N.nearDistance = L, N.farDistance = q), N;
  }
  function v(w, A, E, U, L) {
    if (w.visible === !1)
      return;
    if (w.layers.test(A.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && L === yr) && (!w.frustumCulled || i.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, w.matrixWorld);
      const N = t.update(w), D = w.material;
      if (Array.isArray(D)) {
        const R = N.groups;
        for (let C = 0, z = R.length; C < z; C++) {
          const J = R[C], $ = D[J.materialIndex];
          if ($ && $.visible) {
            const re = _(w, N, $, U, E.near, E.far, L);
            e.renderBufferDirect(E, null, N, re, w, J);
          }
        }
      } else if (D.visible) {
        const R = _(w, N, D, U, E.near, E.far, L);
        e.renderBufferDirect(E, null, N, R, w, null);
      }
    }
    const O = w.children;
    for (let N = 0, D = O.length; N < D; N++)
      v(O[N], A, E, U, L);
  }
}
function ay(e, t, n) {
  const i = n.isWebGL2;
  function r() {
    let P = !1;
    const K = new Be();
    let ee = null;
    const I = new Be(0, 0, 0, 0);
    return {
      setMask: function(F) {
        ee !== F && !P && (e.colorMask(F, F, F, F), ee = F);
      },
      setLocked: function(F) {
        P = F;
      },
      setClear: function(F, W, ne, ce, te) {
        te === !0 && (F *= ce, W *= ce, ne *= ce), K.set(F, W, ne, ce), I.equals(K) === !1 && (e.clearColor(F, W, ne, ce), I.copy(K));
      },
      reset: function() {
        P = !1, ee = null, I.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let P = !1, K = null, ee = null, I = null;
    return {
      setTest: function(F) {
        F ? de(2929) : pe(2929);
      },
      setMask: function(F) {
        K !== F && !P && (e.depthMask(F), K = F);
      },
      setFunc: function(F) {
        if (ee !== F) {
          if (F)
            switch (F) {
              case Nh:
                e.depthFunc(512);
                break;
              case Bh:
                e.depthFunc(519);
                break;
              case Fh:
                e.depthFunc(513);
                break;
              case Oa:
                e.depthFunc(515);
                break;
              case Uh:
                e.depthFunc(514);
                break;
              case Gh:
                e.depthFunc(518);
                break;
              case zh:
                e.depthFunc(516);
                break;
              case kh:
                e.depthFunc(517);
                break;
              default:
                e.depthFunc(515);
            }
          else
            e.depthFunc(515);
          ee = F;
        }
      },
      setLocked: function(F) {
        P = F;
      },
      setClear: function(F) {
        I !== F && (e.clearDepth(F), I = F);
      },
      reset: function() {
        P = !1, K = null, ee = null, I = null;
      }
    };
  }
  function o() {
    let P = !1, K = null, ee = null, I = null, F = null, W = null, ne = null, ce = null, te = null;
    return {
      setTest: function(ue) {
        P || (ue ? de(2960) : pe(2960));
      },
      setMask: function(ue) {
        K !== ue && !P && (e.stencilMask(ue), K = ue);
      },
      setFunc: function(ue, Me, Ue) {
        (ee !== ue || I !== Me || F !== Ue) && (e.stencilFunc(ue, Me, Ue), ee = ue, I = Me, F = Ue);
      },
      setOp: function(ue, Me, Ue) {
        (W !== ue || ne !== Me || ce !== Ue) && (e.stencilOp(ue, Me, Ue), W = ue, ne = Me, ce = Ue);
      },
      setLocked: function(ue) {
        P = ue;
      },
      setClear: function(ue) {
        te !== ue && (e.clearStencil(ue), te = ue);
      },
      reset: function() {
        P = !1, K = null, ee = null, I = null, F = null, W = null, ne = null, ce = null, te = null;
      }
    };
  }
  const a = new r(), c = new s(), l = new o();
  let h = {}, u = null, f = null, d = null, p = null, x = null, y = null, g = null, m = null, _ = null, v = !1, w = null, A = null, E = null, U = null, L = null;
  const q = e.getParameter(35661);
  let O = !1, N = 0;
  const D = e.getParameter(7938);
  D.indexOf("WebGL") !== -1 ? (N = parseFloat(/^WebGL\ ([0-9])/.exec(D)[1]), O = N >= 1) : D.indexOf("OpenGL ES") !== -1 && (N = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(D)[1]), O = N >= 2);
  let R = null, C = {};
  const z = new Be(), J = new Be();
  function $(P, K, ee) {
    const I = new Uint8Array(4), F = e.createTexture();
    e.bindTexture(P, F), e.texParameteri(P, 10241, 9728), e.texParameteri(P, 10240, 9728);
    for (let W = 0; W < ee; W++)
      e.texImage2D(K + W, 0, 6408, 1, 1, 0, 6408, 5121, I);
    return F;
  }
  const re = {};
  re[3553] = $(3553, 3553, 1), re[34067] = $(34067, 34069, 6), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), de(2929), c.setFunc(Oa), Xe(!1), Ee(Hc), de(2884), De(In);
  function de(P) {
    h[P] !== !0 && (e.enable(P), h[P] = !0);
  }
  function pe(P) {
    h[P] !== !1 && (e.disable(P), h[P] = !1);
  }
  function Pe(P) {
    return u !== P ? (e.useProgram(P), u = P, !0) : !1;
  }
  const Se = {
    [Ti]: 32774,
    [Sh]: 32778,
    [Th]: 32779
  };
  if (i)
    Se[qc] = 32775, Se[Xc] = 32776;
  else {
    const P = t.get("EXT_blend_minmax");
    P !== null && (Se[qc] = P.MIN_EXT, Se[Xc] = P.MAX_EXT);
  }
  const Ve = {
    [Eh]: 0,
    [Ah]: 1,
    [Lh]: 768,
    [Eu]: 770,
    [Dh]: 776,
    [Ih]: 774,
    [Rh]: 772,
    [Ch]: 769,
    [Au]: 771,
    [Oh]: 775,
    [Ph]: 773
  };
  function De(P, K, ee, I, F, W, ne, ce) {
    if (P === In) {
      f && (pe(3042), f = !1);
      return;
    }
    if (f || (de(3042), f = !0), P !== Mh) {
      if (P !== d || ce !== v) {
        if ((p !== Ti || g !== Ti) && (e.blendEquation(32774), p = Ti, g = Ti), ce)
          switch (P) {
            case vr:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Vc:
              e.blendFunc(1, 1);
              break;
            case Wc:
              e.blendFuncSeparate(0, 0, 769, 771);
              break;
            case jc:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case vr:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Vc:
              e.blendFunc(770, 1);
              break;
            case Wc:
              e.blendFunc(0, 769);
              break;
            case jc:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        x = null, y = null, m = null, _ = null, d = P, v = ce;
      }
      return;
    }
    F = F || K, W = W || ee, ne = ne || I, (K !== p || F !== g) && (e.blendEquationSeparate(Se[K], Se[F]), p = K, g = F), (ee !== x || I !== y || W !== m || ne !== _) && (e.blendFuncSeparate(Ve[ee], Ve[I], Ve[W], Ve[ne]), x = ee, y = I, m = W, _ = ne), d = P, v = null;
  }
  function j(P, K) {
    P.side === Wo ? pe(2884) : de(2884);
    let ee = P.side === rt;
    K && (ee = !ee), Xe(ee), P.blending === vr && P.transparent === !1 ? De(In) : De(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.premultipliedAlpha), c.setFunc(P.depthFunc), c.setTest(P.depthTest), c.setMask(P.depthWrite), a.setMask(P.colorWrite);
    const I = P.stencilWrite;
    l.setTest(I), I && (l.setMask(P.stencilWriteMask), l.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), l.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), we(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits);
  }
  function Xe(P) {
    w !== P && (P ? e.frontFace(2304) : e.frontFace(2305), w = P);
  }
  function Ee(P) {
    P !== _h ? (de(2884), P !== A && (P === Hc ? e.cullFace(1029) : P === bh ? e.cullFace(1028) : e.cullFace(1032))) : pe(2884), A = P;
  }
  function Le(P) {
    P !== E && (O && e.lineWidth(P), E = P);
  }
  function we(P, K, ee) {
    P ? (de(32823), (U !== K || L !== ee) && (e.polygonOffset(K, ee), U = K, L = ee)) : pe(32823);
  }
  function X(P) {
    P ? de(3089) : pe(3089);
  }
  function Y(P) {
    P === void 0 && (P = 33984 + q - 1), R !== P && (e.activeTexture(P), R = P);
  }
  function Q(P, K) {
    R === null && Y();
    let ee = C[R];
    ee === void 0 && (ee = { type: void 0, texture: void 0 }, C[R] = ee), (ee.type !== P || ee.texture !== K) && (e.bindTexture(P, K || re[P]), ee.type = P, ee.texture = K);
  }
  function me() {
    const P = C[R];
    P !== void 0 && P.type !== void 0 && (e.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function le() {
    try {
      e.compressedTexImage2D.apply(e, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ve() {
    try {
      e.texImage2D.apply(e, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function M() {
    try {
      e.texImage3D.apply(e, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function T(P) {
    z.equals(P) === !1 && (e.scissor(P.x, P.y, P.z, P.w), z.copy(P));
  }
  function Z(P) {
    J.equals(P) === !1 && (e.viewport(P.x, P.y, P.z, P.w), J.copy(P));
  }
  function V() {
    h = {}, R = null, C = {}, u = null, d = null, w = null, A = null, a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: de,
    disable: pe,
    useProgram: Pe,
    setBlending: De,
    setMaterial: j,
    setFlipSided: Xe,
    setCullFace: Ee,
    setLineWidth: Le,
    setPolygonOffset: we,
    setScissorTest: X,
    activeTexture: Y,
    bindTexture: Q,
    unbindTexture: me,
    compressedTexImage2D: le,
    texImage2D: ve,
    texImage3D: M,
    scissor: T,
    viewport: Z,
    reset: V
  };
}
function cy(e, t, n, i, r, s, o) {
  const a = r.isWebGL2, c = r.maxTextures, l = r.maxCubemapSize, h = r.maxTextureSize, u = r.maxSamples, f = /* @__PURE__ */ new WeakMap();
  let d, p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function x(M, T) {
    return p ? new OffscreenCanvas(M, T) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  }
  function y(M, T, Z, V) {
    let P = 1;
    if ((M.width > V || M.height > V) && (P = V / Math.max(M.width, M.height)), P < 1 || T === !0)
      if (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && M instanceof ImageBitmap) {
        const K = T ? Ae.floorPowerOfTwo : Math.floor, ee = K(P * M.width), I = K(P * M.height);
        d === void 0 && (d = x(ee, I));
        const F = Z ? x(ee, I) : d;
        return F.width = ee, F.height = I, F.getContext("2d").drawImage(M, 0, 0, ee, I), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + M.width + "x" + M.height + ") to (" + ee + "x" + I + ")."), F;
      } else
        return "data" in M && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + M.width + "x" + M.height + ")."), M;
    return M;
  }
  function g(M) {
    return Ae.isPowerOfTwo(M.width) && Ae.isPowerOfTwo(M.height);
  }
  function m(M) {
    return a ? !1 : M.wrapS !== xt || M.wrapT !== xt || M.minFilter !== ot && M.minFilter !== dt;
  }
  function _(M, T) {
    return M.generateMipmaps && T && M.minFilter !== ot && M.minFilter !== dt;
  }
  function v(M, T, Z, V) {
    e.generateMipmap(M);
    const P = i.get(T);
    P.__maxMipLevel = Math.log(Math.max(Z, V)) * Math.LOG2E;
  }
  function w(M, T, Z) {
    if (a === !1)
      return T;
    if (M !== null) {
      if (e[M] !== void 0)
        return e[M];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + M + "'");
    }
    let V = T;
    return T === 6403 && (Z === 5126 && (V = 33326), Z === 5131 && (V = 33325), Z === 5121 && (V = 33321)), T === 6407 && (Z === 5126 && (V = 34837), Z === 5131 && (V = 34843), Z === 5121 && (V = 32849)), T === 6408 && (Z === 5126 && (V = 34836), Z === 5131 && (V = 34842), Z === 5121 && (V = 32856)), (V === 33325 || V === 33326 || V === 34842 || V === 34836) && t.get("EXT_color_buffer_float"), V;
  }
  function A(M) {
    return M === ot || M === Da || M === Na ? 9728 : 9729;
  }
  function E(M) {
    const T = M.target;
    T.removeEventListener("dispose", E), L(T), T.isVideoTexture && f.delete(T), o.memory.textures--;
  }
  function U(M) {
    const T = M.target;
    T.removeEventListener("dispose", U), q(T), o.memory.textures--;
  }
  function L(M) {
    const T = i.get(M);
    T.__webglInit !== void 0 && (e.deleteTexture(T.__webglTexture), i.remove(M));
  }
  function q(M) {
    const T = i.get(M), Z = i.get(M.texture);
    if (M) {
      if (Z.__webglTexture !== void 0 && e.deleteTexture(Z.__webglTexture), M.depthTexture && M.depthTexture.dispose(), M.isWebGLCubeRenderTarget)
        for (let V = 0; V < 6; V++)
          e.deleteFramebuffer(T.__webglFramebuffer[V]), T.__webglDepthbuffer && e.deleteRenderbuffer(T.__webglDepthbuffer[V]);
      else
        e.deleteFramebuffer(T.__webglFramebuffer), T.__webglDepthbuffer && e.deleteRenderbuffer(T.__webglDepthbuffer), T.__webglMultisampledFramebuffer && e.deleteFramebuffer(T.__webglMultisampledFramebuffer), T.__webglColorRenderbuffer && e.deleteRenderbuffer(T.__webglColorRenderbuffer), T.__webglDepthRenderbuffer && e.deleteRenderbuffer(T.__webglDepthRenderbuffer);
      i.remove(M.texture), i.remove(M);
    }
  }
  let O = 0;
  function N() {
    O = 0;
  }
  function D() {
    const M = O;
    return M >= c && console.warn("THREE.WebGLTextures: Trying to use " + M + " texture units while this GPU supports only " + c), O += 1, M;
  }
  function R(M, T) {
    const Z = i.get(M);
    if (M.isVideoTexture && Y(M), M.version > 0 && Z.__version !== M.version) {
      const V = M.image;
      if (V === void 0)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
      else if (V.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Se(Z, M, T);
        return;
      }
    }
    n.activeTexture(33984 + T), n.bindTexture(3553, Z.__webglTexture);
  }
  function C(M, T) {
    const Z = i.get(M);
    if (M.version > 0 && Z.__version !== M.version) {
      Se(Z, M, T);
      return;
    }
    n.activeTexture(33984 + T), n.bindTexture(35866, Z.__webglTexture);
  }
  function z(M, T) {
    const Z = i.get(M);
    if (M.version > 0 && Z.__version !== M.version) {
      Se(Z, M, T);
      return;
    }
    n.activeTexture(33984 + T), n.bindTexture(32879, Z.__webglTexture);
  }
  function J(M, T) {
    if (M.image.length !== 6)
      return;
    const Z = i.get(M);
    if (M.version > 0 && Z.__version !== M.version) {
      Pe(Z, M), n.activeTexture(33984 + T), n.bindTexture(34067, Z.__webglTexture), e.pixelStorei(37440, M.flipY);
      const V = M && (M.isCompressedTexture || M.image[0].isCompressedTexture), P = M.image[0] && M.image[0].isDataTexture, K = [];
      for (let te = 0; te < 6; te++)
        !V && !P ? K[te] = y(M.image[te], !1, !0, l) : K[te] = P ? M.image[te].image : M.image[te];
      const ee = K[0], I = g(ee) || a, F = s.convert(M.format), W = s.convert(M.type), ne = w(M.internalFormat, F, W);
      pe(34067, M, I);
      let ce;
      if (V) {
        for (let te = 0; te < 6; te++) {
          ce = K[te].mipmaps;
          for (let ue = 0; ue < ce.length; ue++) {
            const Me = ce[ue];
            M.format !== Lt && M.format !== Zn ? F !== null ? n.compressedTexImage2D(34069 + te, ue, ne, Me.width, Me.height, 0, Me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + te, ue, ne, Me.width, Me.height, 0, F, W, Me.data);
          }
        }
        Z.__maxMipLevel = ce.length - 1;
      } else {
        ce = M.mipmaps;
        for (let te = 0; te < 6; te++)
          if (P) {
            n.texImage2D(34069 + te, 0, ne, K[te].width, K[te].height, 0, F, W, K[te].data);
            for (let ue = 0; ue < ce.length; ue++) {
              const Ue = ce[ue].image[te].image;
              n.texImage2D(34069 + te, ue + 1, ne, Ue.width, Ue.height, 0, F, W, Ue.data);
            }
          } else {
            n.texImage2D(34069 + te, 0, ne, F, W, K[te]);
            for (let ue = 0; ue < ce.length; ue++) {
              const Me = ce[ue];
              n.texImage2D(34069 + te, ue + 1, ne, F, W, Me.image[te]);
            }
          }
        Z.__maxMipLevel = ce.length;
      }
      _(M, I) && v(34067, M, ee.width, ee.height), Z.__version = M.version, M.onUpdate && M.onUpdate(M);
    } else
      n.activeTexture(33984 + T), n.bindTexture(34067, Z.__webglTexture);
  }
  function $(M, T) {
    n.activeTexture(33984 + T), n.bindTexture(34067, i.get(M).__webglTexture);
  }
  const re = {
    [ro]: 10497,
    [xt]: 33071,
    [so]: 33648
  }, de = {
    [ot]: 9728,
    [Da]: 9984,
    [Na]: 9986,
    [dt]: 9729,
    [Cu]: 9985,
    [Xo]: 9987
  };
  function pe(M, T, Z) {
    Z ? (e.texParameteri(M, 10242, re[T.wrapS]), e.texParameteri(M, 10243, re[T.wrapT]), (M === 32879 || M === 35866) && e.texParameteri(M, 32882, re[T.wrapR]), e.texParameteri(M, 10240, de[T.magFilter]), e.texParameteri(M, 10241, de[T.minFilter])) : (e.texParameteri(M, 10242, 33071), e.texParameteri(M, 10243, 33071), (M === 32879 || M === 35866) && e.texParameteri(M, 32882, 33071), (T.wrapS !== xt || T.wrapT !== xt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(M, 10240, A(T.magFilter)), e.texParameteri(M, 10241, A(T.minFilter)), T.minFilter !== ot && T.minFilter !== dt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
    const V = t.get("EXT_texture_filter_anisotropic");
    if (V) {
      if (T.type === Cn && t.get("OES_texture_float_linear") === null || T.type === ao && (a || t.get("OES_texture_half_float_linear")) === null)
        return;
      (T.anisotropy > 1 || i.get(T).__currentAnisotropy) && (e.texParameterf(M, V.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(T.anisotropy, r.getMaxAnisotropy())), i.get(T).__currentAnisotropy = T.anisotropy);
    }
  }
  function Pe(M, T) {
    M.__webglInit === void 0 && (M.__webglInit = !0, T.addEventListener("dispose", E), M.__webglTexture = e.createTexture(), o.memory.textures++);
  }
  function Se(M, T, Z) {
    let V = 3553;
    T.isDataTexture2DArray && (V = 35866), T.isDataTexture3D && (V = 32879), Pe(M, T), n.activeTexture(33984 + Z), n.bindTexture(V, M.__webglTexture), e.pixelStorei(37440, T.flipY), e.pixelStorei(37441, T.premultiplyAlpha), e.pixelStorei(3317, T.unpackAlignment);
    const P = m(T) && g(T.image) === !1, K = y(T.image, P, !1, h), ee = g(K) || a, I = s.convert(T.format);
    let F = s.convert(T.type), W = w(T.internalFormat, I, F);
    pe(V, T, ee);
    let ne;
    const ce = T.mipmaps;
    if (T.isDepthTexture)
      W = 6402, a ? T.type === Cn ? W = 36012 : T.type === no ? W = 33190 : T.type === _r ? W = 35056 : W = 33189 : T.type === Cn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), T.format === Oi && W === 6402 && T.type !== oo && T.type !== no && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), T.type = oo, F = s.convert(T.type)), T.format === Tr && W === 6402 && (W = 34041, T.type !== _r && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), T.type = _r, F = s.convert(T.type))), n.texImage2D(3553, 0, W, K.width, K.height, 0, I, F, null);
    else if (T.isDataTexture)
      if (ce.length > 0 && ee) {
        for (let te = 0, ue = ce.length; te < ue; te++)
          ne = ce[te], n.texImage2D(3553, te, W, ne.width, ne.height, 0, I, F, ne.data);
        T.generateMipmaps = !1, M.__maxMipLevel = ce.length - 1;
      } else
        n.texImage2D(3553, 0, W, K.width, K.height, 0, I, F, K.data), M.__maxMipLevel = 0;
    else if (T.isCompressedTexture) {
      for (let te = 0, ue = ce.length; te < ue; te++)
        ne = ce[te], T.format !== Lt && T.format !== Zn ? I !== null ? n.compressedTexImage2D(3553, te, W, ne.width, ne.height, 0, ne.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, te, W, ne.width, ne.height, 0, I, F, ne.data);
      M.__maxMipLevel = ce.length - 1;
    } else if (T.isDataTexture2DArray)
      n.texImage3D(35866, 0, W, K.width, K.height, K.depth, 0, I, F, K.data), M.__maxMipLevel = 0;
    else if (T.isDataTexture3D)
      n.texImage3D(32879, 0, W, K.width, K.height, K.depth, 0, I, F, K.data), M.__maxMipLevel = 0;
    else if (ce.length > 0 && ee) {
      for (let te = 0, ue = ce.length; te < ue; te++)
        ne = ce[te], n.texImage2D(3553, te, W, I, F, ne);
      T.generateMipmaps = !1, M.__maxMipLevel = ce.length - 1;
    } else
      n.texImage2D(3553, 0, W, I, F, K), M.__maxMipLevel = 0;
    _(T, ee) && v(V, T, K.width, K.height), M.__version = T.version, T.onUpdate && T.onUpdate(T);
  }
  function Ve(M, T, Z, V) {
    const P = s.convert(T.texture.format), K = s.convert(T.texture.type), ee = w(T.texture.internalFormat, P, K);
    n.texImage2D(V, 0, ee, T.width, T.height, 0, P, K, null), e.bindFramebuffer(36160, M), e.framebufferTexture2D(36160, Z, V, i.get(T.texture).__webglTexture, 0), e.bindFramebuffer(36160, null);
  }
  function De(M, T, Z) {
    if (e.bindRenderbuffer(36161, M), T.depthBuffer && !T.stencilBuffer) {
      let V = 33189;
      if (Z) {
        const P = T.depthTexture;
        P && P.isDepthTexture && (P.type === Cn ? V = 36012 : P.type === no && (V = 33190));
        const K = X(T);
        e.renderbufferStorageMultisample(36161, K, V, T.width, T.height);
      } else
        e.renderbufferStorage(36161, V, T.width, T.height);
      e.framebufferRenderbuffer(36160, 36096, 36161, M);
    } else if (T.depthBuffer && T.stencilBuffer) {
      if (Z) {
        const V = X(T);
        e.renderbufferStorageMultisample(36161, V, 35056, T.width, T.height);
      } else
        e.renderbufferStorage(36161, 34041, T.width, T.height);
      e.framebufferRenderbuffer(36160, 33306, 36161, M);
    } else {
      const V = s.convert(T.texture.format), P = s.convert(T.texture.type), K = w(T.texture.internalFormat, V, P);
      if (Z) {
        const ee = X(T);
        e.renderbufferStorageMultisample(36161, ee, K, T.width, T.height);
      } else
        e.renderbufferStorage(36161, K, T.width, T.height);
    }
    e.bindRenderbuffer(36161, null);
  }
  function j(M, T) {
    if (T && T.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(36160, M), !(T.depthTexture && T.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!i.get(T.depthTexture).__webglTexture || T.depthTexture.image.width !== T.width || T.depthTexture.image.height !== T.height) && (T.depthTexture.image.width = T.width, T.depthTexture.image.height = T.height, T.depthTexture.needsUpdate = !0), R(T.depthTexture, 0);
    const V = i.get(T.depthTexture).__webglTexture;
    if (T.depthTexture.format === Oi)
      e.framebufferTexture2D(36160, 36096, 3553, V, 0);
    else if (T.depthTexture.format === Tr)
      e.framebufferTexture2D(36160, 33306, 3553, V, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Xe(M) {
    const T = i.get(M), Z = M.isWebGLCubeRenderTarget === !0;
    if (M.depthTexture) {
      if (Z)
        throw new Error("target.depthTexture not supported in Cube render targets");
      j(T.__webglFramebuffer, M);
    } else if (Z) {
      T.__webglDepthbuffer = [];
      for (let V = 0; V < 6; V++)
        e.bindFramebuffer(36160, T.__webglFramebuffer[V]), T.__webglDepthbuffer[V] = e.createRenderbuffer(), De(T.__webglDepthbuffer[V], M, !1);
    } else
      e.bindFramebuffer(36160, T.__webglFramebuffer), T.__webglDepthbuffer = e.createRenderbuffer(), De(T.__webglDepthbuffer, M, !1);
    e.bindFramebuffer(36160, null);
  }
  function Ee(M) {
    const T = i.get(M), Z = i.get(M.texture);
    M.addEventListener("dispose", U), Z.__webglTexture = e.createTexture(), o.memory.textures++;
    const V = M.isWebGLCubeRenderTarget === !0, P = M.isWebGLMultisampleRenderTarget === !0, K = g(M) || a;
    if (a && M.texture.format === Zn && (M.texture.type === Cn || M.texture.type === ao) && (M.texture.format = Lt, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), V) {
      T.__webglFramebuffer = [];
      for (let ee = 0; ee < 6; ee++)
        T.__webglFramebuffer[ee] = e.createFramebuffer();
    } else if (T.__webglFramebuffer = e.createFramebuffer(), P)
      if (a) {
        T.__webglMultisampledFramebuffer = e.createFramebuffer(), T.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, T.__webglColorRenderbuffer);
        const ee = s.convert(M.texture.format), I = s.convert(M.texture.type), F = w(M.texture.internalFormat, ee, I), W = X(M);
        e.renderbufferStorageMultisample(36161, W, F, M.width, M.height), e.bindFramebuffer(36160, T.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, T.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), M.depthBuffer && (T.__webglDepthRenderbuffer = e.createRenderbuffer(), De(T.__webglDepthRenderbuffer, M, !0)), e.bindFramebuffer(36160, null);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    if (V) {
      n.bindTexture(34067, Z.__webglTexture), pe(34067, M.texture, K);
      for (let ee = 0; ee < 6; ee++)
        Ve(T.__webglFramebuffer[ee], M, 36064, 34069 + ee);
      _(M.texture, K) && v(34067, M.texture, M.width, M.height), n.bindTexture(34067, null);
    } else
      n.bindTexture(3553, Z.__webglTexture), pe(3553, M.texture, K), Ve(T.__webglFramebuffer, M, 36064, 3553), _(M.texture, K) && v(3553, M.texture, M.width, M.height), n.bindTexture(3553, null);
    M.depthBuffer && Xe(M);
  }
  function Le(M) {
    const T = M.texture, Z = g(M) || a;
    if (_(T, Z)) {
      const V = M.isWebGLCubeRenderTarget ? 34067 : 3553, P = i.get(T).__webglTexture;
      n.bindTexture(V, P), v(V, T, M.width, M.height), n.bindTexture(V, null);
    }
  }
  function we(M) {
    if (M.isWebGLMultisampleRenderTarget)
      if (a) {
        const T = i.get(M);
        e.bindFramebuffer(36008, T.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, T.__webglFramebuffer);
        const Z = M.width, V = M.height;
        let P = 16384;
        M.depthBuffer && (P |= 256), M.stencilBuffer && (P |= 1024), e.blitFramebuffer(0, 0, Z, V, 0, 0, Z, V, P, 9728), e.bindFramebuffer(36160, T.__webglMultisampledFramebuffer);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
  }
  function X(M) {
    return a && M.isWebGLMultisampleRenderTarget ? Math.min(u, M.samples) : 0;
  }
  function Y(M) {
    const T = o.render.frame;
    f.get(M) !== T && (f.set(M, T), M.update());
  }
  let Q = !1, me = !1;
  function le(M, T) {
    M && M.isWebGLRenderTarget && (Q === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Q = !0), M = M.texture), R(M, T);
  }
  function ve(M, T) {
    M && M.isWebGLCubeRenderTarget && (me === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), me = !0), M = M.texture), M && M.isCubeTexture || Array.isArray(M.image) && M.image.length === 6 ? J(M, T) : $(M, T);
  }
  this.allocateTextureUnit = D, this.resetTextureUnits = N, this.setTexture2D = R, this.setTexture2DArray = C, this.setTexture3D = z, this.setTextureCube = J, this.setTextureCubeDynamic = $, this.setupRenderTarget = Ee, this.updateRenderTargetMipmap = Le, this.updateMultisampleRenderTarget = we, this.safeSetTexture2D = le, this.safeSetTextureCube = ve;
}
function ly(e, t, n) {
  const i = n.isWebGL2;
  function r(s) {
    let o;
    if (s === ls)
      return 5121;
    if (s === Qh)
      return 32819;
    if (s === Kh)
      return 32820;
    if (s === ef)
      return 33635;
    if (s === Jh)
      return 5120;
    if (s === Zh)
      return 5122;
    if (s === oo)
      return 5123;
    if (s === $h)
      return 5124;
    if (s === no)
      return 5125;
    if (s === Cn)
      return 5126;
    if (s === ao)
      return i ? 5131 : (o = t.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === tf)
      return 6406;
    if (s === Zn)
      return 6407;
    if (s === Lt)
      return 6408;
    if (s === nf)
      return 6409;
    if (s === rf)
      return 6410;
    if (s === Oi)
      return 6402;
    if (s === Tr)
      return 34041;
    if (s === of)
      return 6403;
    if (s === af)
      return 36244;
    if (s === cf)
      return 33319;
    if (s === lf)
      return 33320;
    if (s === uf)
      return 36248;
    if (s === hf)
      return 36249;
    if (s === Yc || s === Jc || s === Zc || s === $c)
      if (o = t.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === Yc)
          return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Jc)
          return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Zc)
          return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === $c)
          return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Qc || s === Kc || s === el || s === tl)
      if (o = t.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === Qc)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Kc)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === el)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === tl)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === ff)
      return o = t.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if ((s === nl || s === il) && (o = t.get("WEBGL_compressed_texture_etc"), o !== null)) {
      if (s === nl)
        return o.COMPRESSED_RGB8_ETC2;
      if (s === il)
        return o.COMPRESSED_RGBA8_ETC2_EAC;
    }
    if (s === df || s === pf || s === mf || s === gf || s === yf || s === xf || s === vf || s === _f || s === bf || s === wf || s === Mf || s === Sf || s === Tf || s === Ef || s === Lf || s === Cf || s === Rf || s === Pf || s === If || s === Of || s === Df || s === Nf || s === Bf || s === Ff || s === Uf || s === Gf || s === zf || s === kf)
      return o = t.get("WEBGL_compressed_texture_astc"), o !== null ? s : null;
    if (s === Af)
      return o = t.get("EXT_texture_compression_bptc"), o !== null ? s : null;
    if (s === _r)
      return i ? 34042 : (o = t.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null);
  }
  return { convert: r };
}
function Va(e) {
  tt.call(this), this.cameras = e || [];
}
Va.prototype = Object.assign(Object.create(tt.prototype), {
  constructor: Va,
  isArrayCamera: !0
});
function Rn() {
  ie.call(this), this.type = "Group";
}
Rn.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: Rn,
  isGroup: !0
});
function wr() {
  this._targetRay = null, this._grip = null, this._hand = null;
}
Object.assign(wr.prototype, {
  constructor: wr,
  getHandSpace: function() {
    if (this._hand === null && (this._hand = new Rn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = [], this._hand.inputState = { pinching: !1 }, window.XRHand))
      for (let e = 0; e <= window.XRHand.LITTLE_PHALANX_TIP; e++) {
        let t = new Rn();
        t.matrixAutoUpdate = !1, t.visible = !1, this._hand.joints.push(t), this._hand.add(t);
      }
    return this._hand;
  },
  getTargetRaySpace: function() {
    return this._targetRay === null && (this._targetRay = new Rn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay;
  },
  getGripSpace: function() {
    return this._grip === null && (this._grip = new Rn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip;
  },
  dispatchEvent: function(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  },
  disconnect: function(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  },
  update: function(e, t, n) {
    let i = null, r = null, s = null;
    const o = this._targetRay, a = this._grip, c = this._hand;
    if (e)
      if (e.hand) {
        s = !0;
        for (let l = 0; l <= window.XRHand.LITTLE_PHALANX_TIP; l++)
          if (e.hand[l]) {
            let h = t.getJointPose(e.hand[l], n);
            const u = c.joints[l];
            h !== null && (u.matrix.fromArray(h.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.jointRadius = h.radius), u.visible = h !== null;
            const f = c.joints[window.XRHand.INDEX_PHALANX_TIP], d = c.joints[window.XRHand.THUMB_PHALANX_TIP], p = f.position.distanceTo(d.position), x = 0.02, y = 5e-3;
            c.inputState.pinching && p > x + y ? (c.inputState.pinching = !1, this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this
            })) : !c.inputState.pinching && p <= x - y && (c.inputState.pinching = !0, this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this
            }));
          }
      } else
        o !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale))), a !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale)));
    return o !== null && (o.visible = i !== null), a !== null && (a.visible = r !== null), c !== null && (c.visible = s !== null), this;
  }
});
function Xu(e, t) {
  const n = this;
  let i = null, r = 1, s = null, o = "local-floor", a = null;
  const c = [], l = /* @__PURE__ */ new Map(), h = new tt();
  h.layers.enable(1), h.viewport = new Be();
  const u = new tt();
  u.layers.enable(2), u.viewport = new Be();
  const f = [h, u], d = new Va();
  d.layers.enable(1), d.layers.enable(2);
  let p = null, x = null;
  this.enabled = !1, this.isPresenting = !1, this.getController = function(O) {
    let N = c[O];
    return N === void 0 && (N = new wr(), c[O] = N), N.getTargetRaySpace();
  }, this.getControllerGrip = function(O) {
    let N = c[O];
    return N === void 0 && (N = new wr(), c[O] = N), N.getGripSpace();
  }, this.getHand = function(O) {
    let N = c[O];
    return N === void 0 && (N = new wr(), c[O] = N), N.getHandSpace();
  };
  function y(O) {
    const N = l.get(O.inputSource);
    N && N.dispatchEvent({ type: O.type });
  }
  function g() {
    l.forEach(function(O, N) {
      O.disconnect(N);
    }), l.clear(), e.setFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), q.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
  }
  function m(O) {
    s = O, q.setContext(i), q.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
  }
  this.setFramebufferScaleFactor = function(O) {
    r = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
  }, this.setReferenceSpaceType = function(O) {
    o = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
  }, this.getReferenceSpace = function() {
    return s;
  }, this.getSession = function() {
    return i;
  }, this.setSession = function(O) {
    if (i = O, i !== null) {
      i.addEventListener("select", y), i.addEventListener("selectstart", y), i.addEventListener("selectend", y), i.addEventListener("squeeze", y), i.addEventListener("squeezestart", y), i.addEventListener("squeezeend", y), i.addEventListener("end", g);
      const N = t.getContextAttributes();
      N.xrCompatible !== !0 && t.makeXRCompatible();
      const D = {
        antialias: N.antialias,
        alpha: N.alpha,
        depth: N.depth,
        stencil: N.stencil,
        framebufferScaleFactor: r
      }, R = new XRWebGLLayer(i, t, D);
      i.updateRenderState({ baseLayer: R }), i.requestReferenceSpace(o).then(m), i.addEventListener("inputsourceschange", _);
    }
  };
  function _(O) {
    const N = i.inputSources;
    for (let D = 0; D < c.length; D++)
      l.set(N[D], c[D]);
    for (let D = 0; D < O.removed.length; D++) {
      const R = O.removed[D], C = l.get(R);
      C && (C.dispatchEvent({ type: "disconnected", data: R }), l.delete(R));
    }
    for (let D = 0; D < O.added.length; D++) {
      const R = O.added[D], C = l.get(R);
      C && C.dispatchEvent({ type: "connected", data: R });
    }
  }
  const v = new b(), w = new b();
  function A(O, N, D) {
    v.setFromMatrixPosition(N.matrixWorld), w.setFromMatrixPosition(D.matrixWorld);
    const R = v.distanceTo(w), C = N.projectionMatrix.elements, z = D.projectionMatrix.elements, J = C[14] / (C[10] - 1), $ = C[14] / (C[10] + 1), re = (C[9] + 1) / C[5], de = (C[9] - 1) / C[5], pe = (C[8] - 1) / C[0], Pe = (z[8] + 1) / z[0], Se = J * pe, Ve = J * Pe, De = R / (-pe + Pe), j = De * -pe;
    N.matrixWorld.decompose(O.position, O.quaternion, O.scale), O.translateX(j), O.translateZ(De), O.matrixWorld.compose(O.position, O.quaternion, O.scale), O.matrixWorldInverse.getInverse(O.matrixWorld);
    const Xe = J + De, Ee = $ + De, Le = Se - j, we = Ve + (R - j), X = re * $ / Ee * Xe, Y = de * $ / Ee * Xe;
    O.projectionMatrix.makePerspective(Le, we, X, Y, Xe, Ee);
  }
  function E(O, N) {
    N === null ? O.matrixWorld.copy(O.matrix) : O.matrixWorld.multiplyMatrices(N.matrixWorld, O.matrix), O.matrixWorldInverse.getInverse(O.matrixWorld);
  }
  this.getCamera = function(O) {
    d.near = u.near = h.near = O.near, d.far = u.far = h.far = O.far, (p !== d.near || x !== d.far) && (i.updateRenderState({
      depthNear: d.near,
      depthFar: d.far
    }), p = d.near, x = d.far);
    const N = O.parent, D = d.cameras;
    E(d, N);
    for (let C = 0; C < D.length; C++)
      E(D[C], N);
    O.matrixWorld.copy(d.matrixWorld);
    const R = O.children;
    for (let C = 0, z = R.length; C < z; C++)
      R[C].updateMatrixWorld(!0);
    return D.length === 2 ? A(d, h, u) : d.projectionMatrix.copy(h.projectionMatrix), d;
  };
  let U = null;
  function L(O, N) {
    if (a = N.getViewerPose(s), a !== null) {
      const R = a.views, C = i.renderState.baseLayer;
      e.setFramebuffer(C.framebuffer);
      let z = !1;
      R.length !== d.cameras.length && (d.cameras.length = 0, z = !0);
      for (let J = 0; J < R.length; J++) {
        const $ = R[J], re = C.getViewport($), de = f[J];
        de.matrix.fromArray($.transform.matrix), de.projectionMatrix.fromArray($.projectionMatrix), de.viewport.set(re.x, re.y, re.width, re.height), J === 0 && d.matrix.copy(de.matrix), z === !0 && d.cameras.push(de);
      }
    }
    const D = i.inputSources;
    for (let R = 0; R < c.length; R++) {
      const C = c[R], z = D[R];
      C.update(z, N, s);
    }
    U && U(O, N);
  }
  const q = new Uu();
  q.setAnimationLoop(L), this.setAnimationLoop = function(O) {
    U = O;
  }, this.dispose = function() {
  };
}
Object.assign(Xu.prototype, xn.prototype);
function uy(e) {
  function t(g, m) {
    g.fogColor.value.copy(m.color), m.isFog ? (g.fogNear.value = m.near, g.fogFar.value = m.far) : m.isFogExp2 && (g.fogDensity.value = m.density);
  }
  function n(g, m, _, v, w) {
    m.isMeshBasicMaterial ? i(g, m) : m.isMeshLambertMaterial ? (i(g, m), c(g, m)) : m.isMeshToonMaterial ? (i(g, m), h(g, m)) : m.isMeshPhongMaterial ? (i(g, m), l(g, m)) : m.isMeshStandardMaterial ? (i(g, m, _), m.isMeshPhysicalMaterial ? f(g, m, _) : u(g, m, _)) : m.isMeshMatcapMaterial ? (i(g, m), d(g, m)) : m.isMeshDepthMaterial ? (i(g, m), p(g, m)) : m.isMeshDistanceMaterial ? (i(g, m), x(g, m)) : m.isMeshNormalMaterial ? (i(g, m), y(g, m)) : m.isLineBasicMaterial ? (r(g, m), m.isLineDashedMaterial && s(g, m)) : m.isPointsMaterial ? o(g, m, v, w) : m.isSpriteMaterial ? a(g, m) : m.isShadowMaterial ? (g.color.value.copy(m.color), g.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function i(g, m, _) {
    g.opacity.value = m.opacity, m.color && g.diffuse.value.copy(m.color), m.emissive && g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (g.map.value = m.map), m.alphaMap && (g.alphaMap.value = m.alphaMap), m.specularMap && (g.specularMap.value = m.specularMap);
    const v = m.envMap || _;
    if (v) {
      g.envMap.value = v, g.flipEnvMap.value = v.isCubeTexture ? -1 : 1, g.reflectivity.value = m.reflectivity, g.refractionRatio.value = m.refractionRatio;
      var w = e.get(v).__maxMipLevel;
      w !== void 0 && (g.maxMipLevel.value = w);
    }
    m.lightMap && (g.lightMap.value = m.lightMap, g.lightMapIntensity.value = m.lightMapIntensity), m.aoMap && (g.aoMap.value = m.aoMap, g.aoMapIntensity.value = m.aoMapIntensity);
    let A;
    m.map ? A = m.map : m.specularMap ? A = m.specularMap : m.displacementMap ? A = m.displacementMap : m.normalMap ? A = m.normalMap : m.bumpMap ? A = m.bumpMap : m.roughnessMap ? A = m.roughnessMap : m.metalnessMap ? A = m.metalnessMap : m.alphaMap ? A = m.alphaMap : m.emissiveMap && (A = m.emissiveMap), A !== void 0 && (A.isWebGLRenderTarget && (A = A.texture), A.matrixAutoUpdate === !0 && A.updateMatrix(), g.uvTransform.value.copy(A.matrix));
    let E;
    m.aoMap ? E = m.aoMap : m.lightMap && (E = m.lightMap), E !== void 0 && (E.isWebGLRenderTarget && (E = E.texture), E.matrixAutoUpdate === !0 && E.updateMatrix(), g.uv2Transform.value.copy(E.matrix));
  }
  function r(g, m) {
    g.diffuse.value.copy(m.color), g.opacity.value = m.opacity;
  }
  function s(g, m) {
    g.dashSize.value = m.dashSize, g.totalSize.value = m.dashSize + m.gapSize, g.scale.value = m.scale;
  }
  function o(g, m, _, v) {
    g.diffuse.value.copy(m.color), g.opacity.value = m.opacity, g.size.value = m.size * _, g.scale.value = v * 0.5, m.map && (g.map.value = m.map), m.alphaMap && (g.alphaMap.value = m.alphaMap);
    let w;
    m.map ? w = m.map : m.alphaMap && (w = m.alphaMap), w !== void 0 && (w.matrixAutoUpdate === !0 && w.updateMatrix(), g.uvTransform.value.copy(w.matrix));
  }
  function a(g, m) {
    g.diffuse.value.copy(m.color), g.opacity.value = m.opacity, g.rotation.value = m.rotation, m.map && (g.map.value = m.map), m.alphaMap && (g.alphaMap.value = m.alphaMap);
    let _;
    m.map ? _ = m.map : m.alphaMap && (_ = m.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), g.uvTransform.value.copy(_.matrix));
  }
  function c(g, m) {
    m.emissiveMap && (g.emissiveMap.value = m.emissiveMap);
  }
  function l(g, m) {
    g.specular.value.copy(m.specular), g.shininess.value = Math.max(m.shininess, 1e-4), m.emissiveMap && (g.emissiveMap.value = m.emissiveMap), m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === rt && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === rt && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  function h(g, m) {
    m.gradientMap && (g.gradientMap.value = m.gradientMap), m.emissiveMap && (g.emissiveMap.value = m.emissiveMap), m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === rt && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === rt && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  function u(g, m, _) {
    g.roughness.value = m.roughness, g.metalness.value = m.metalness, m.roughnessMap && (g.roughnessMap.value = m.roughnessMap), m.metalnessMap && (g.metalnessMap.value = m.metalnessMap), m.emissiveMap && (g.emissiveMap.value = m.emissiveMap), m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === rt && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === rt && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias), (m.envMap || _) && (g.envMapIntensity.value = m.envMapIntensity);
  }
  function f(g, m, _) {
    u(g, m, _), g.reflectivity.value = m.reflectivity, g.clearcoat.value = m.clearcoat, g.clearcoatRoughness.value = m.clearcoatRoughness, m.sheen && g.sheen.value.copy(m.sheen), m.clearcoatMap && (g.clearcoatMap.value = m.clearcoatMap), m.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap), m.clearcoatNormalMap && (g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), g.clearcoatNormalMap.value = m.clearcoatNormalMap, m.side === rt && g.clearcoatNormalScale.value.negate()), g.transmission.value = m.transmission, m.transmissionMap && (g.transmissionMap.value = m.transmissionMap);
  }
  function d(g, m) {
    m.matcap && (g.matcap.value = m.matcap), m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === rt && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === rt && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  function p(g, m) {
    m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  function x(g, m) {
    m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias), g.referencePosition.value.copy(m.referencePosition), g.nearDistance.value = m.nearDistance, g.farDistance.value = m.farDistance;
  }
  function y(g, m) {
    m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === rt && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === rt && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function hs(e) {
  e = e || {};
  const t = e.canvas !== void 0 ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), n = e.context !== void 0 ? e.context : null, i = e.alpha !== void 0 ? e.alpha : !1, r = e.depth !== void 0 ? e.depth : !0, s = e.stencil !== void 0 ? e.stencil : !0, o = e.antialias !== void 0 ? e.antialias : !1, a = e.premultipliedAlpha !== void 0 ? e.premultipliedAlpha : !0, c = e.preserveDrawingBuffer !== void 0 ? e.preserveDrawingBuffer : !1, l = e.powerPreference !== void 0 ? e.powerPreference : "default", h = e.failIfMajorPerformanceCaveat !== void 0 ? e.failIfMajorPerformanceCaveat : !1;
  let u = null, f = null;
  this.domElement = t, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = vt, this.physicallyCorrectLights = !1, this.toneMapping = Ii, this.toneMappingExposure = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
  const d = this;
  let p = !1, x = null, y = 0, g = 0, m = null, _ = null, v = -1, w = null, A = null;
  const E = new Be(), U = new Be();
  let L = null, q = t.width, O = t.height, N = 1, D = null, R = null;
  const C = new Be(0, 0, q, O), z = new Be(0, 0, q, O);
  let J = !1;
  const $ = new us(), re = new km();
  let de = !1, pe = !1;
  const Pe = new Ce(), Se = new b(), Ve = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function De() {
    return m === null ? N : 1;
  }
  let j = n;
  function Xe(S, G) {
    for (let B = 0; B < S.length; B++) {
      const k = S[B], ae = t.getContext(k, G);
      if (ae !== null)
        return ae;
    }
    return null;
  }
  try {
    const S = {
      alpha: i,
      depth: r,
      stencil: s,
      antialias: o,
      premultipliedAlpha: a,
      preserveDrawingBuffer: c,
      powerPreference: l,
      failIfMajorPerformanceCaveat: h
    };
    if (t.addEventListener("webglcontextlost", ue, !1), t.addEventListener("webglcontextrestored", Me, !1), j === null) {
      const G = ["webgl2", "webgl", "experimental-webgl"];
      if (d.isWebGL1Renderer === !0 && G.shift(), j = Xe(G, S), j === null)
        throw Xe(G) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    j.getShaderPrecisionFormat === void 0 && (j.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (S) {
    throw console.error("THREE.WebGLRenderer: " + S.message), S;
  }
  let Ee, Le, we, X, Y, Q, me, le, ve, M, T, Z, V, P, K, ee, I, F, W;
  function ne() {
    Ee = new Hm(j), Le = new zm(j, Ee, e), Le.isWebGL2 === !1 && (Ee.get("WEBGL_depth_texture"), Ee.get("OES_texture_float"), Ee.get("OES_texture_half_float"), Ee.get("OES_texture_half_float_linear"), Ee.get("OES_standard_derivatives"), Ee.get("OES_element_index_uint"), Ee.get("OES_vertex_array_object"), Ee.get("ANGLE_instanced_arrays")), Ee.get("OES_texture_float_linear"), F = new ly(j, Ee, Le), we = new ay(j, Ee, Le), we.scissor(U.copy(z).multiplyScalar(N).floor()), we.viewport(E.copy(C).multiplyScalar(N).floor()), X = new jm(), Y = new Jg(), Q = new cy(j, Ee, we, Y, Le, F, X), me = new md(j, Le), W = new Um(j, Ee, me, Le), le = new Vm(j, me, X, W), ve = new Jm(j, le, me, X), K = new Ym(j), M = new Yg(d, Ee, Le, W), T = new uy(Y), Z = new Qg(Y), V = new ry(), P = new Fm(d, we, ve, a), ee = new Gm(j, Ee, X, Le), I = new Wm(j, Ee, X, Le), X.programs = M.programs, d.capabilities = Le, d.extensions = Ee, d.properties = Y, d.renderLists = Z, d.state = we, d.info = X;
  }
  ne();
  const ce = new Xu(d, j);
  this.xr = ce;
  const te = new qu(d, ve, Le.maxTextureSize);
  this.shadowMap = te, this.getContext = function() {
    return j;
  }, this.getContextAttributes = function() {
    return j.getContextAttributes();
  }, this.forceContextLoss = function() {
    const S = Ee.get("WEBGL_lose_context");
    S && S.loseContext();
  }, this.forceContextRestore = function() {
    const S = Ee.get("WEBGL_lose_context");
    S && S.restoreContext();
  }, this.getPixelRatio = function() {
    return N;
  }, this.setPixelRatio = function(S) {
    S !== void 0 && (N = S, this.setSize(q, O, !1));
  }, this.getSize = function(S) {
    return S === void 0 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), S = new H()), S.set(q, O);
  }, this.setSize = function(S, G, B) {
    if (ce.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    q = S, O = G, t.width = Math.floor(S * N), t.height = Math.floor(G * N), B !== !1 && (t.style.width = S + "px", t.style.height = G + "px"), this.setViewport(0, 0, S, G);
  }, this.getDrawingBufferSize = function(S) {
    return S === void 0 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), S = new H()), S.set(q * N, O * N).floor();
  }, this.setDrawingBufferSize = function(S, G, B) {
    q = S, O = G, N = B, t.width = Math.floor(S * B), t.height = Math.floor(G * B), this.setViewport(0, 0, S, G);
  }, this.getCurrentViewport = function(S) {
    return S === void 0 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), S = new Be()), S.copy(E);
  }, this.getViewport = function(S) {
    return S.copy(C);
  }, this.setViewport = function(S, G, B, k) {
    S.isVector4 ? C.set(S.x, S.y, S.z, S.w) : C.set(S, G, B, k), we.viewport(E.copy(C).multiplyScalar(N).floor());
  }, this.getScissor = function(S) {
    return S.copy(z);
  }, this.setScissor = function(S, G, B, k) {
    S.isVector4 ? z.set(S.x, S.y, S.z, S.w) : z.set(S, G, B, k), we.scissor(U.copy(z).multiplyScalar(N).floor());
  }, this.getScissorTest = function() {
    return J;
  }, this.setScissorTest = function(S) {
    we.setScissorTest(J = S);
  }, this.setOpaqueSort = function(S) {
    D = S;
  }, this.setTransparentSort = function(S) {
    R = S;
  }, this.getClearColor = function() {
    return P.getClearColor();
  }, this.setClearColor = function() {
    P.setClearColor.apply(P, arguments);
  }, this.getClearAlpha = function() {
    return P.getClearAlpha();
  }, this.setClearAlpha = function() {
    P.setClearAlpha.apply(P, arguments);
  }, this.clear = function(S, G, B) {
    let k = 0;
    (S === void 0 || S) && (k |= 16384), (G === void 0 || G) && (k |= 256), (B === void 0 || B) && (k |= 1024), j.clear(k);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    t.removeEventListener("webglcontextlost", ue, !1), t.removeEventListener("webglcontextrestored", Me, !1), Z.dispose(), V.dispose(), Y.dispose(), ve.dispose(), W.dispose(), ce.dispose(), ai.stop();
  };
  function ue(S) {
    S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), p = !0;
  }
  function Me() {
    console.log("THREE.WebGLRenderer: Context Restored."), p = !1, ne();
  }
  function Ue(S) {
    const G = S.target;
    G.removeEventListener("dispose", Ue), Wt(G);
  }
  function Wt(S) {
    rr(S), Y.remove(S);
  }
  function rr(S) {
    const G = Y.get(S).program;
    G !== void 0 && M.releaseProgram(G);
  }
  function fs(S, G) {
    S.render(function(B) {
      d.renderBufferImmediate(B, G);
    });
  }
  this.renderBufferImmediate = function(S, G) {
    W.initAttributes();
    const B = Y.get(S);
    S.hasPositions && !B.position && (B.position = j.createBuffer()), S.hasNormals && !B.normal && (B.normal = j.createBuffer()), S.hasUvs && !B.uv && (B.uv = j.createBuffer()), S.hasColors && !B.color && (B.color = j.createBuffer());
    const k = G.getAttributes();
    S.hasPositions && (j.bindBuffer(34962, B.position), j.bufferData(34962, S.positionArray, 35048), W.enableAttribute(k.position), j.vertexAttribPointer(k.position, 3, 5126, !1, 0, 0)), S.hasNormals && (j.bindBuffer(34962, B.normal), j.bufferData(34962, S.normalArray, 35048), W.enableAttribute(k.normal), j.vertexAttribPointer(k.normal, 3, 5126, !1, 0, 0)), S.hasUvs && (j.bindBuffer(34962, B.uv), j.bufferData(34962, S.uvArray, 35048), W.enableAttribute(k.uv), j.vertexAttribPointer(k.uv, 2, 5126, !1, 0, 0)), S.hasColors && (j.bindBuffer(34962, B.color), j.bufferData(34962, S.colorArray, 35048), W.enableAttribute(k.color), j.vertexAttribPointer(k.color, 3, 5126, !1, 0, 0)), W.disableUnusedAttributes(), j.drawArrays(4, 0, S.count), S.count = 0;
  }, this.renderBufferDirect = function(S, G, B, k, ae, Oe) {
    G === null && (G = Ve);
    const Re = ae.isMesh && ae.matrixWorld.determinant() < 0, ye = kc(S, G, k, ae);
    we.setMaterial(k, Re);
    let Ye = B.index;
    const Je = B.attributes.position;
    if (Ye === null) {
      if (Je === void 0 || Je.count === 0)
        return;
    } else if (Ye.count === 0)
      return;
    let We = 1;
    k.wireframe === !0 && (Ye = le.getWireframeAttribute(B), We = 2), (k.morphTargets || k.morphNormals) && K.update(ae, B, k, ye), W.setup(ae, k, ye, B, Ye);
    let Ke, Te = ee;
    Ye !== null && (Ke = me.get(Ye), Te = I, Te.setIndex(Ke));
    const Ze = Ye !== null ? Ye.count : Je.count, it = B.drawRange.start * We, ke = B.drawRange.count * We, ps = Oe !== null ? Oe.start * We : 0, Nt = Oe !== null ? Oe.count * We : 1 / 0, _n = Math.max(it, ps), ea = Math.min(Ze, it + ke, ps + Nt) - 1, ms = Math.max(0, ea - _n + 1);
    if (ms !== 0) {
      if (ae.isMesh)
        k.wireframe === !0 ? (we.setLineWidth(k.wireframeLinewidth * De()), Te.setMode(1)) : Te.setMode(4);
      else if (ae.isLine) {
        let or = k.linewidth;
        or === void 0 && (or = 1), we.setLineWidth(or * De()), ae.isLineSegments ? Te.setMode(1) : ae.isLineLoop ? Te.setMode(2) : Te.setMode(3);
      } else
        ae.isPoints ? Te.setMode(0) : ae.isSprite && Te.setMode(4);
      if (ae.isInstancedMesh)
        Te.renderInstances(_n, ms, ae.count);
      else if (B.isInstancedBufferGeometry) {
        const or = Math.min(B.instanceCount, B._maxInstanceCount);
        Te.renderInstances(_n, ms, or);
      } else
        Te.render(_n, ms);
    }
  }, this.compile = function(S, G) {
    f = V.get(S, G), f.init(), S.traverse(function(k) {
      k.isLight && (f.pushLight(k), k.castShadow && f.pushShadow(k));
    }), f.setupLights(G);
    const B = /* @__PURE__ */ new WeakMap();
    S.traverse(function(k) {
      let ae = k.material;
      if (ae)
        if (Array.isArray(ae))
          for (let Oe = 0; Oe < ae.length; Oe++) {
            let Re = ae[Oe];
            B.has(Re) === !1 && (rn(Re, S, k), B.set(Re));
          }
        else
          B.has(ae) === !1 && (rn(ae, S, k), B.set(ae));
    });
  };
  let oi = null;
  function sr(S) {
    ce.isPresenting || oi && oi(S);
  }
  const ai = new Uu();
  ai.setAnimationLoop(sr), typeof window < "u" && ai.setContext(window), this.setAnimationLoop = function(S) {
    oi = S, ce.setAnimationLoop(S), S === null ? ai.stop() : ai.start();
  }, this.render = function(S, G) {
    let B, k;
    if (arguments[2] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), B = arguments[2]), arguments[3] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), k = arguments[3]), G !== void 0 && G.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (p === !0)
      return;
    W.resetDefaultState(), v = -1, w = null, S.autoUpdate === !0 && S.updateMatrixWorld(), G.parent === null && G.updateMatrixWorld(), ce.enabled === !0 && ce.isPresenting === !0 && (G = ce.getCamera(G)), S.isScene === !0 && S.onBeforeRender(d, S, G, B || m), f = V.get(S, G), f.init(), Pe.multiplyMatrices(G.projectionMatrix, G.matrixWorldInverse), $.setFromProjectionMatrix(Pe), pe = this.localClippingEnabled, de = re.init(this.clippingPlanes, pe, G), u = Z.get(S, G), u.init(), Qo(S, G, 0, d.sortObjects), u.finish(), d.sortObjects === !0 && u.sort(D, R), de === !0 && re.beginShadows();
    const ae = f.state.shadowsArray;
    te.render(ae, S, G), f.setupLights(G), de === !0 && re.endShadows(), this.info.autoReset === !0 && this.info.reset(), B !== void 0 && this.setRenderTarget(B), P.render(u, S, G, k);
    const Oe = u.opaque, Re = u.transparent;
    Oe.length > 0 && Ko(Oe, S, G), Re.length > 0 && Ko(Re, S, G), S.isScene === !0 && S.onAfterRender(d, S, G), m !== null && (Q.updateRenderTargetMipmap(m), Q.updateMultisampleRenderTarget(m)), we.buffers.depth.setTest(!0), we.buffers.depth.setMask(!0), we.buffers.color.setMask(!0), we.setPolygonOffset(!1), u = null, f = null;
  };
  function Qo(S, G, B, k) {
    if (S.visible === !1)
      return;
    if (S.layers.test(G.layers)) {
      if (S.isGroup)
        B = S.renderOrder;
      else if (S.isLOD)
        S.autoUpdate === !0 && S.update(G);
      else if (S.isLight)
        f.pushLight(S), S.castShadow && f.pushShadow(S);
      else if (S.isSprite) {
        if (!S.frustumCulled || $.intersectsSprite(S)) {
          k && Se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pe);
          const Re = ve.update(S), ye = S.material;
          ye.visible && u.push(S, Re, ye, B, Se.z, null);
        }
      } else if (S.isImmediateRenderObject)
        k && Se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pe), u.push(S, null, S.material, B, Se.z, null);
      else if ((S.isMesh || S.isLine || S.isPoints) && (S.isSkinnedMesh && S.skeleton.frame !== X.render.frame && (S.skeleton.update(), S.skeleton.frame = X.render.frame), !S.frustumCulled || $.intersectsObject(S))) {
        k && Se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pe);
        const Re = ve.update(S), ye = S.material;
        if (Array.isArray(ye)) {
          const Ye = Re.groups;
          for (let Je = 0, We = Ye.length; Je < We; Je++) {
            const Ke = Ye[Je], Te = ye[Ke.materialIndex];
            Te && Te.visible && u.push(S, Re, Te, B, Se.z, Ke);
          }
        } else
          ye.visible && u.push(S, Re, ye, B, Se.z, null);
      }
    }
    const Oe = S.children;
    for (let Re = 0, ye = Oe.length; Re < ye; Re++)
      Qo(Oe[Re], G, B, k);
  }
  function Ko(S, G, B) {
    const k = G.isScene === !0 ? G.overrideMaterial : null;
    for (let ae = 0, Oe = S.length; ae < Oe; ae++) {
      const Re = S[ae], ye = Re.object, Ye = Re.geometry, Je = k === null ? Re.material : k, We = Re.group;
      if (B.isArrayCamera) {
        A = B;
        const Ke = B.cameras;
        for (let Te = 0, Ze = Ke.length; Te < Ze; Te++) {
          const it = Ke[Te];
          ye.layers.test(it.layers) && (we.viewport(E.copy(it.viewport)), f.setupLights(it), ds(ye, G, it, Ye, Je, We));
        }
      } else
        A = null, ds(ye, G, B, Ye, Je, We);
    }
  }
  function ds(S, G, B, k, ae, Oe) {
    if (S.onBeforeRender(d, G, B, k, ae, Oe), f = V.get(G, A || B), S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), S.isImmediateRenderObject) {
      const Re = kc(B, G, ae, S);
      we.setMaterial(ae), W.reset(), fs(S, Re);
    } else
      d.renderBufferDirect(B, G, k, ae, S, Oe);
    S.onAfterRender(d, G, B, k, ae, Oe), f = V.get(G, A || B);
  }
  function rn(S, G, B) {
    G.isScene !== !0 && (G = Ve);
    const k = Y.get(S), ae = f.state.lights, Oe = f.state.shadowsArray, Re = ae.state.version, ye = M.getParameters(S, ae.state, Oe, G, re.numPlanes, re.numIntersection, B), Ye = M.getProgramCacheKey(ye);
    let Je = k.program, We = !0;
    if (Je === void 0)
      S.addEventListener("dispose", Ue);
    else if (Je.cacheKey !== Ye)
      rr(S);
    else if (k.lightsStateVersion !== Re)
      k.lightsStateVersion = Re, We = !1;
    else {
      if (ye.shaderID !== void 0)
        return;
      We = !1;
    }
    We && (ye.uniforms = M.getUniforms(S, ye), S.onBeforeCompile(ye, d), Je = M.acquireProgram(ye, Ye), k.program = Je, k.uniforms = ye.uniforms, k.outputEncoding = ye.outputEncoding);
    const Ke = Je.getAttributes();
    if (S.morphTargets) {
      S.numSupportedMorphTargets = 0;
      for (let ke = 0; ke < d.maxMorphTargets; ke++)
        Ke["morphTarget" + ke] >= 0 && S.numSupportedMorphTargets++;
    }
    if (S.morphNormals) {
      S.numSupportedMorphNormals = 0;
      for (let ke = 0; ke < d.maxMorphNormals; ke++)
        Ke["morphNormal" + ke] >= 0 && S.numSupportedMorphNormals++;
    }
    const Te = k.uniforms;
    (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (k.numClippingPlanes = re.numPlanes, k.numIntersection = re.numIntersection, Te.clippingPlanes = re.uniform), k.environment = S.isMeshStandardMaterial ? G.environment : null, k.fog = G.fog, k.needsLights = xh(S), k.lightsStateVersion = Re, k.needsLights && (Te.ambientLightColor.value = ae.state.ambient, Te.lightProbe.value = ae.state.probe, Te.directionalLights.value = ae.state.directional, Te.directionalLightShadows.value = ae.state.directionalShadow, Te.spotLights.value = ae.state.spot, Te.spotLightShadows.value = ae.state.spotShadow, Te.rectAreaLights.value = ae.state.rectArea, Te.pointLights.value = ae.state.point, Te.pointLightShadows.value = ae.state.pointShadow, Te.hemisphereLights.value = ae.state.hemi, Te.directionalShadowMap.value = ae.state.directionalShadowMap, Te.directionalShadowMatrix.value = ae.state.directionalShadowMatrix, Te.spotShadowMap.value = ae.state.spotShadowMap, Te.spotShadowMatrix.value = ae.state.spotShadowMatrix, Te.pointShadowMap.value = ae.state.pointShadowMap, Te.pointShadowMatrix.value = ae.state.pointShadowMatrix);
    const Ze = k.program.getUniforms(), it = On.seqWithValue(Ze.seq, Te);
    k.uniformsList = it;
  }
  function kc(S, G, B, k) {
    G.isScene !== !0 && (G = Ve), Q.resetTextureUnits();
    const ae = G.fog, Oe = B.isMeshStandardMaterial ? G.environment : null, Re = m === null ? d.outputEncoding : m.texture.encoding, ye = Y.get(B), Ye = f.state.lights;
    if (de === !0 && (pe === !0 || S !== w)) {
      const ke = S === w && B.id === v;
      re.setState(
        B.clippingPlanes,
        B.clipIntersection,
        B.clipShadows,
        S,
        ye,
        ke
      );
    }
    B.version === ye.__version ? (ye.program === void 0 || B.fog && ye.fog !== ae || ye.environment !== Oe || ye.needsLights && ye.lightsStateVersion !== Ye.state.version || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== re.numPlanes || ye.numIntersection !== re.numIntersection) || ye.outputEncoding !== Re) && rn(B, G, k) : (rn(B, G, k), ye.__version = B.version);
    let Je = !1, We = !1, Ke = !1;
    const Te = ye.program, Ze = Te.getUniforms(), it = ye.uniforms;
    if (we.useProgram(Te.program) && (Je = !0, We = !0, Ke = !0), B.id !== v && (v = B.id, We = !0), Je || w !== S) {
      if (Ze.setValue(j, "projectionMatrix", S.projectionMatrix), Le.logarithmicDepthBuffer && Ze.setValue(
        j,
        "logDepthBufFC",
        2 / (Math.log(S.far + 1) / Math.LN2)
      ), w !== S && (w = S, We = !0, Ke = !0), B.isShaderMaterial || B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshStandardMaterial || B.envMap) {
        const ke = Ze.map.cameraPosition;
        ke !== void 0 && ke.setValue(
          j,
          Se.setFromMatrixPosition(S.matrixWorld)
        );
      }
      (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && Ze.setValue(j, "isOrthographic", S.isOrthographicCamera === !0), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial || B.isShadowMaterial || B.skinning) && Ze.setValue(j, "viewMatrix", S.matrixWorldInverse);
    }
    if (B.skinning) {
      Ze.setOptional(j, k, "bindMatrix"), Ze.setOptional(j, k, "bindMatrixInverse");
      const ke = k.skeleton;
      if (ke) {
        const ps = ke.bones;
        if (Le.floatVertexTextures) {
          if (ke.boneTexture === void 0) {
            let Nt = Math.sqrt(ps.length * 4);
            Nt = Ae.ceilPowerOfTwo(Nt), Nt = Math.max(Nt, 4);
            const _n = new Float32Array(Nt * Nt * 4);
            _n.set(ke.boneMatrices);
            const ea = new Fi(_n, Nt, Nt, Lt, Cn);
            ke.boneMatrices = _n, ke.boneTexture = ea, ke.boneTextureSize = Nt;
          }
          Ze.setValue(j, "boneTexture", ke.boneTexture, Q), Ze.setValue(j, "boneTextureSize", ke.boneTextureSize);
        } else
          Ze.setOptional(j, ke, "boneMatrices");
      }
    }
    return (We || ye.receiveShadow !== k.receiveShadow) && (ye.receiveShadow = k.receiveShadow, Ze.setValue(j, "receiveShadow", k.receiveShadow)), We && (Ze.setValue(j, "toneMappingExposure", d.toneMappingExposure), ye.needsLights && yh(it, Ke), ae && B.fog && T.refreshFogUniforms(it, ae), T.refreshMaterialUniforms(it, B, Oe, N, O), it.ltc_1 !== void 0 && (it.ltc_1.value = se.LTC_1), it.ltc_2 !== void 0 && (it.ltc_2.value = se.LTC_2), On.upload(j, ye.uniformsList, it, Q)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (On.upload(j, ye.uniformsList, it, Q), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && Ze.setValue(j, "center", k.center), Ze.setValue(j, "modelViewMatrix", k.modelViewMatrix), Ze.setValue(j, "normalMatrix", k.normalMatrix), Ze.setValue(j, "modelMatrix", k.matrixWorld), Te;
  }
  function yh(S, G) {
    S.ambientLightColor.needsUpdate = G, S.lightProbe.needsUpdate = G, S.directionalLights.needsUpdate = G, S.directionalLightShadows.needsUpdate = G, S.pointLights.needsUpdate = G, S.pointLightShadows.needsUpdate = G, S.spotLights.needsUpdate = G, S.spotLightShadows.needsUpdate = G, S.rectAreaLights.needsUpdate = G, S.hemisphereLights.needsUpdate = G;
  }
  function xh(S) {
    return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
  }
  this.setFramebuffer = function(S) {
    x !== S && m === null && j.bindFramebuffer(36160, S), x = S;
  }, this.getActiveCubeFace = function() {
    return y;
  }, this.getActiveMipmapLevel = function() {
    return g;
  }, this.getRenderTarget = function() {
    return m;
  }, this.setRenderTarget = function(S, G, B) {
    m = S, y = G, g = B, S && Y.get(S).__webglFramebuffer === void 0 && Q.setupRenderTarget(S);
    let k = x, ae = !1;
    if (S) {
      const Oe = Y.get(S).__webglFramebuffer;
      S.isWebGLCubeRenderTarget ? (k = Oe[G || 0], ae = !0) : S.isWebGLMultisampleRenderTarget ? k = Y.get(S).__webglMultisampledFramebuffer : k = Oe, E.copy(S.viewport), U.copy(S.scissor), L = S.scissorTest;
    } else
      E.copy(C).multiplyScalar(N).floor(), U.copy(z).multiplyScalar(N).floor(), L = J;
    if (_ !== k && (j.bindFramebuffer(36160, k), _ = k), we.viewport(E), we.scissor(U), we.setScissorTest(L), ae) {
      const Oe = Y.get(S.texture);
      j.framebufferTexture2D(36160, 36064, 34069 + (G || 0), Oe.__webglTexture, B || 0);
    }
  }, this.readRenderTargetPixels = function(S, G, B, k, ae, Oe, Re) {
    if (!(S && S.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let ye = Y.get(S).__webglFramebuffer;
    if (S.isWebGLCubeRenderTarget && Re !== void 0 && (ye = ye[Re]), ye) {
      let Ye = !1;
      ye !== _ && (j.bindFramebuffer(36160, ye), Ye = !0);
      try {
        const Je = S.texture, We = Je.format, Ke = Je.type;
        if (We !== Lt && F.convert(We) !== j.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        if (Ke !== ls && F.convert(Ke) !== j.getParameter(35738) && // IE11, Edge and Chrome Mac < 52 (#9513)
        !(Ke === Cn && (Le.isWebGL2 || Ee.get("OES_texture_float") || Ee.get("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !(Ke === ao && (Le.isWebGL2 ? Ee.get("EXT_color_buffer_float") : Ee.get("EXT_color_buffer_half_float")))) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        j.checkFramebufferStatus(36160) === 36053 ? G >= 0 && G <= S.width - k && B >= 0 && B <= S.height - ae && j.readPixels(G, B, k, ae, F.convert(We), F.convert(Ke), Oe) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
      } finally {
        Ye && j.bindFramebuffer(36160, _);
      }
    }
  }, this.copyFramebufferToTexture = function(S, G, B) {
    B === void 0 && (B = 0);
    const k = Math.pow(2, -B), ae = Math.floor(G.image.width * k), Oe = Math.floor(G.image.height * k), Re = F.convert(G.format);
    Q.setTexture2D(G, 0), j.copyTexImage2D(3553, B, Re, S.x, S.y, ae, Oe, 0), we.unbindTexture();
  }, this.copyTextureToTexture = function(S, G, B, k) {
    k === void 0 && (k = 0);
    const ae = G.image.width, Oe = G.image.height, Re = F.convert(B.format), ye = F.convert(B.type);
    Q.setTexture2D(B, 0), j.pixelStorei(37440, B.flipY), j.pixelStorei(37441, B.premultiplyAlpha), j.pixelStorei(3317, B.unpackAlignment), G.isDataTexture ? j.texSubImage2D(3553, k, S.x, S.y, ae, Oe, Re, ye, G.image.data) : G.isCompressedTexture ? j.compressedTexSubImage2D(3553, k, S.x, S.y, G.mipmaps[0].width, G.mipmaps[0].height, Re, G.mipmaps[0].data) : j.texSubImage2D(3553, k, S.x, S.y, Re, ye, G.image), k === 0 && B.generateMipmaps && j.generateMipmap(3553), we.unbindTexture();
  }, this.initTexture = function(S) {
    Q.setTexture2D(S, 0), we.unbindTexture();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
function Ll(e) {
  hs.call(this, e);
}
Ll.prototype = Object.assign(Object.create(hs.prototype), {
  constructor: Ll,
  isWebGL1Renderer: !0
});
function Wa(e, t) {
  this.name = "", this.color = new fe(e), this.density = t !== void 0 ? t : 25e-5;
}
Object.assign(Wa.prototype, {
  isFogExp2: !0,
  clone: function() {
    return new Wa(this.color, this.density);
  },
  toJSON: function() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
});
function ja(e, t, n) {
  this.name = "", this.color = new fe(e), this.near = t !== void 0 ? t : 1, this.far = n !== void 0 ? n : 1e3;
}
Object.assign(ja.prototype, {
  isFog: !0,
  clone: function() {
    return new ja(this.color, this.near, this.far);
  },
  toJSON: function() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
});
function At(e, t) {
  this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Jo, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Ae.generateUUID();
}
Object.defineProperty(At.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
Object.assign(At.prototype, {
  isInterleavedBuffer: !0,
  onUploadCallback: function() {
  },
  setUsage: function(e) {
    return this.usage = e, this;
  },
  copy: function(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  },
  copyAt: function(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  },
  set: function(e, t) {
    return t === void 0 && (t = 0), this.array.set(e, t), this;
  },
  clone: function(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ae.generateUUID()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new At(t, this.stride);
    return n.setUsage(this.usage), n;
  },
  onUpload: function(e) {
    return this.onUploadCallback = e, this;
  },
  toJSON: function(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ae.generateUUID()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
});
const Wn = new b();
function ti(e, t, n, i) {
  this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0;
}
Object.defineProperties(ti.prototype, {
  count: {
    get: function() {
      return this.data.count;
    }
  },
  array: {
    get: function() {
      return this.data.array;
    }
  },
  needsUpdate: {
    set: function(e) {
      this.data.needsUpdate = e;
    }
  }
});
Object.assign(ti.prototype, {
  isInterleavedBufferAttribute: !0,
  applyMatrix4: function(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Wn.x = this.getX(t), Wn.y = this.getY(t), Wn.z = this.getZ(t), Wn.applyMatrix4(e), this.setXYZ(t, Wn.x, Wn.y, Wn.z);
    return this;
  },
  setX: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset] = t, this;
  },
  setY: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  },
  setZ: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  },
  setW: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  },
  getX: function(e) {
    return this.data.array[e * this.data.stride + this.offset];
  },
  getY: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  },
  getZ: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  },
  getW: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  },
  setXY: function(e, t, n) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  },
  setXYZ: function(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  },
  setXYZW: function(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  },
  clone: function(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return new ge(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ti(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  },
  toJSON: function(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
});
function ni(e) {
  _e.call(this), this.type = "SpriteMaterial", this.color = new fe(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e);
}
ni.prototype = Object.create(_e.prototype);
ni.prototype.constructor = ni;
ni.prototype.isSpriteMaterial = !0;
ni.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this;
};
let _i;
const fr = new b(), bi = new b(), wi = new b(), Mi = new H(), dr = new H(), Yu = new Ce(), Is = new b(), pr = new b(), Os = new b(), Cl = new H(), Sa = new H(), Rl = new H();
function qa(e) {
  if (ie.call(this), this.type = "Sprite", _i === void 0) {
    _i = new he();
    const t = new Float32Array([
      -0.5,
      -0.5,
      0,
      0,
      0,
      0.5,
      -0.5,
      0,
      1,
      0,
      0.5,
      0.5,
      0,
      1,
      1,
      -0.5,
      0.5,
      0,
      0,
      1
    ]), n = new At(t, 5);
    _i.setIndex([0, 1, 2, 0, 2, 3]), _i.setAttribute("position", new ti(n, 3, 0, !1)), _i.setAttribute("uv", new ti(n, 2, 3, !1));
  }
  this.geometry = _i, this.material = e !== void 0 ? e : new ni(), this.center = new H(0.5, 0.5);
}
qa.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: qa,
  isSprite: !0,
  raycast: function(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), bi.setFromMatrixScale(this.matrixWorld), Yu.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), wi.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && bi.multiplyScalar(-wi.z);
    const n = this.material.rotation;
    let i, r;
    n !== 0 && (r = Math.cos(n), i = Math.sin(n));
    const s = this.center;
    Ds(Is.set(-0.5, -0.5, 0), wi, s, bi, i, r), Ds(pr.set(0.5, -0.5, 0), wi, s, bi, i, r), Ds(Os.set(0.5, 0.5, 0), wi, s, bi, i, r), Cl.set(0, 0), Sa.set(1, 0), Rl.set(1, 1);
    let o = e.ray.intersectTriangle(Is, pr, Os, !1, fr);
    if (o === null && (Ds(pr.set(-0.5, 0.5, 0), wi, s, bi, i, r), Sa.set(0, 1), o = e.ray.intersectTriangle(Is, Os, pr, !1, fr), o === null))
      return;
    const a = e.ray.origin.distanceTo(fr);
    a < e.near || a > e.far || t.push({
      distance: a,
      point: fr.clone(),
      uv: lt.getUV(fr, Is, pr, Os, Cl, Sa, Rl, new H()),
      face: null,
      object: this
    });
  },
  copy: function(e) {
    return ie.prototype.copy.call(this, e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
});
function Ds(e, t, n, i, r, s) {
  Mi.subVectors(e, n).addScalar(0.5).multiply(i), r !== void 0 ? (dr.x = s * Mi.x - r * Mi.y, dr.y = r * Mi.x + s * Mi.y) : dr.copy(Mi), e.copy(t), e.x += dr.x, e.y += dr.y, e.applyMatrix4(Yu);
}
const Ns = new b(), Pl = new b();
function fo() {
  ie.call(this), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
    levels: {
      enumerable: !0,
      value: []
    }
  }), this.autoUpdate = !0;
}
fo.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: fo,
  isLOD: !0,
  copy: function(e) {
    ie.prototype.copy.call(this, e, !1);
    const t = e.levels;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      this.addLevel(r.object.clone(), r.distance);
    }
    return this.autoUpdate = e.autoUpdate, this;
  },
  addLevel: function(e, t) {
    t === void 0 && (t = 0), t = Math.abs(t);
    const n = this.levels;
    let i;
    for (i = 0; i < n.length && !(t < n[i].distance); i++)
      ;
    return n.splice(i, 0, { distance: t, object: e }), this.add(e), this;
  },
  getCurrentLevel: function() {
    return this._currentLevel;
  },
  getObjectForDistance: function(e) {
    const t = this.levels;
    if (t.length > 0) {
      let n, i;
      for (n = 1, i = t.length; n < i && !(e < t[n].distance); n++)
        ;
      return t[n - 1].object;
    }
    return null;
  },
  raycast: function(e, t) {
    if (this.levels.length > 0) {
      Ns.setFromMatrixPosition(this.matrixWorld);
      const i = e.ray.origin.distanceTo(Ns);
      this.getObjectForDistance(i).raycast(e, t);
    }
  },
  update: function(e) {
    const t = this.levels;
    if (t.length > 1) {
      Ns.setFromMatrixPosition(e.matrixWorld), Pl.setFromMatrixPosition(this.matrixWorld);
      const n = Ns.distanceTo(Pl) / e.zoom;
      t[0].object.visible = !0;
      let i, r;
      for (i = 1, r = t.length; i < r && n >= t[i].distance; i++)
        t[i - 1].object.visible = !1, t[i].object.visible = !0;
      for (this._currentLevel = i - 1; i < r; i++)
        t[i].object.visible = !1;
    }
  },
  toJSON: function(e) {
    const t = ie.prototype.toJSON.call(this, e);
    this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
    const n = this.levels;
    for (let i = 0, r = n.length; i < r; i++) {
      const s = n[i];
      t.object.levels.push({
        object: s.object.uuid,
        distance: s.distance
      });
    }
    return t;
  }
});
function Xa(e, t) {
  e && e.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), Fe.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ce(), this.bindMatrixInverse = new Ce();
}
Xa.prototype = Object.assign(Object.create(Fe.prototype), {
  constructor: Xa,
  isSkinnedMesh: !0,
  copy: function(e) {
    return Fe.prototype.copy.call(this, e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
  },
  bind: function(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t);
  },
  pose: function() {
    this.skeleton.pose();
  },
  normalizeSkinWeights: function() {
    const e = new Be(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  },
  updateMatrixWorld: function(e) {
    Fe.prototype.updateMatrixWorld.call(this, e), this.bindMode === "attached" ? this.bindMatrixInverse.getInverse(this.matrixWorld) : this.bindMode === "detached" ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  },
  boneTransform: function() {
    const e = new b(), t = new Be(), n = new Be(), i = new b(), r = new Ce();
    return function(s, o) {
      const a = this.skeleton, c = this.geometry;
      t.fromBufferAttribute(c.attributes.skinIndex, s), n.fromBufferAttribute(c.attributes.skinWeight, s), e.fromBufferAttribute(c.attributes.position, s).applyMatrix4(this.bindMatrix), o.set(0, 0, 0);
      for (let l = 0; l < 4; l++) {
        const h = n.getComponent(l);
        if (h !== 0) {
          const u = t.getComponent(l);
          r.multiplyMatrices(a.bones[u].matrixWorld, a.boneInverses[u]), o.addScaledVector(i.copy(e).applyMatrix4(r), h);
        }
      }
      return o.applyMatrix4(this.bindMatrixInverse);
    };
  }()
});
const Il = new Ce(), hy = new Ce();
function Ya(e, t) {
  if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(this.bones.length * 16), this.frame = -1, t === void 0)
    this.calculateInverses();
  else if (this.bones.length === t.length)
    this.boneInverses = t.slice(0);
  else {
    console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
    for (let n = 0, i = this.bones.length; n < i; n++)
      this.boneInverses.push(new Ce());
  }
}
Object.assign(Ya.prototype, {
  calculateInverses: function() {
    this.boneInverses = [];
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ce();
      this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n);
    }
  },
  pose: function() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.getInverse(this.boneInverses[e]);
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.getInverse(n.parent.matrixWorld), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  },
  update: function() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r] ? e[r].matrixWorld : hy;
      Il.multiplyMatrices(o, t[r]), Il.toArray(n, r * 16);
    }
    i !== void 0 && (i.needsUpdate = !0);
  },
  clone: function() {
    return new Ya(this.bones, this.boneInverses);
  },
  getBoneByName: function(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  },
  dispose: function() {
    this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = void 0);
  }
});
function Ol() {
  ie.call(this), this.type = "Bone";
}
Ol.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: Ol,
  isBone: !0
});
const Dl = new Ce(), Nl = new Ce(), Bs = [], mr = new Fe();
function Ja(e, t, n) {
  Fe.call(this, e, t), this.instanceMatrix = new ge(new Float32Array(n * 16), 16), this.count = n, this.frustumCulled = !1;
}
Ja.prototype = Object.assign(Object.create(Fe.prototype), {
  constructor: Ja,
  isInstancedMesh: !0,
  copy: function(e) {
    return Fe.prototype.copy.call(this, e), this.instanceMatrix.copy(e.instanceMatrix), this.count = e.count, this;
  },
  getMatrixAt: function(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  },
  raycast: function(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (mr.geometry = this.geometry, mr.material = this.material, mr.material !== void 0)
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Dl), Nl.multiplyMatrices(n, Dl), mr.matrixWorld = Nl, mr.raycast(e, Bs);
        for (let s = 0, o = Bs.length; s < o; s++) {
          const a = Bs[s];
          a.instanceId = r, a.object = this, t.push(a);
        }
        Bs.length = 0;
      }
  },
  setMatrixAt: function(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  },
  updateMorphTargets: function() {
  }
});
function Qe(e) {
  _e.call(this), this.type = "LineBasicMaterial", this.color = new fe(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(e);
}
Qe.prototype = Object.create(_e.prototype);
Qe.prototype.constructor = Qe;
Qe.prototype.isLineBasicMaterial = !0;
Qe.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.morphTargets = e.morphTargets, this;
};
const Bl = new b(), Fl = new b(), Ul = new Ce(), Fs = new nr(), Us = new vn();
function Ot(e, t, n) {
  n === 1 && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), ie.call(this), this.type = "Line", this.geometry = e !== void 0 ? e : new he(), this.material = t !== void 0 ? t : new Qe(), this.updateMorphTargets();
}
Ot.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: Ot,
  isLine: !0,
  copy: function(e) {
    return ie.prototype.copy.call(this, e), this.material = e.material, this.geometry = e.geometry, this;
  },
  computeLineDistances: function() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        const t = e.attributes.position, n = [0];
        for (let i = 1, r = t.count; i < r; i++)
          Bl.fromBufferAttribute(t, i - 1), Fl.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Bl.distanceTo(Fl);
        e.setAttribute("lineDistance", new oe(n, 1));
      } else
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry) {
      const t = e.vertices, n = e.lineDistances;
      n[0] = 0;
      for (let i = 1, r = t.length; i < r; i++)
        n[i] = n[i - 1], n[i] += t[i - 1].distanceTo(t[i]);
    }
    return this;
  },
  raycast: function(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Us.copy(n.boundingSphere), Us.applyMatrix4(i), Us.radius += r, e.ray.intersectsSphere(Us) === !1)
      return;
    Ul.getInverse(i), Fs.copy(e.ray).applyMatrix4(Ul);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = s * s, a = new b(), c = new b(), l = new b(), h = new b(), u = this && this.isLineSegments ? 2 : 1;
    if (n.isBufferGeometry) {
      const f = n.index, p = n.attributes.position.array;
      if (f !== null) {
        const x = f.array;
        for (let y = 0, g = x.length - 1; y < g; y += u) {
          const m = x[y], _ = x[y + 1];
          if (a.fromArray(p, m * 3), c.fromArray(p, _ * 3), Fs.distanceSqToSegment(a, c, h, l) > o)
            continue;
          h.applyMatrix4(this.matrixWorld);
          const w = e.ray.origin.distanceTo(h);
          w < e.near || w > e.far || t.push({
            distance: w,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: l.clone().applyMatrix4(this.matrixWorld),
            index: y,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      } else
        for (let x = 0, y = p.length / 3 - 1; x < y; x += u) {
          if (a.fromArray(p, 3 * x), c.fromArray(p, 3 * x + 3), Fs.distanceSqToSegment(a, c, h, l) > o)
            continue;
          h.applyMatrix4(this.matrixWorld);
          const m = e.ray.origin.distanceTo(h);
          m < e.near || m > e.far || t.push({
            distance: m,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: l.clone().applyMatrix4(this.matrixWorld),
            index: x,
            face: null,
            faceIndex: null,
            object: this
          });
        }
    } else if (n.isGeometry) {
      const f = n.vertices, d = f.length;
      for (let p = 0; p < d - 1; p += u) {
        if (Fs.distanceSqToSegment(f[p], f[p + 1], h, l) > o)
          continue;
        h.applyMatrix4(this.matrixWorld);
        const y = e.ray.origin.distanceTo(h);
        y < e.near || y > e.far || t.push({
          distance: y,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: l.clone().applyMatrix4(this.matrixWorld),
          index: p,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  },
  updateMorphTargets: function() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r = 0, s = i.length; r < s; r++) {
            const o = i[r].name || String(r);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
});
const Gs = new b(), zs = new b();
function nt(e, t) {
  Ot.call(this, e, t), this.type = "LineSegments";
}
nt.prototype = Object.assign(Object.create(Ot.prototype), {
  constructor: nt,
  isLineSegments: !0,
  computeLineDistances: function() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        const t = e.attributes.position, n = [];
        for (let i = 0, r = t.count; i < r; i += 2)
          Gs.fromBufferAttribute(t, i), zs.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Gs.distanceTo(zs);
        e.setAttribute("lineDistance", new oe(n, 1));
      } else
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry) {
      const t = e.vertices, n = e.lineDistances;
      for (let i = 0, r = t.length; i < r; i += 2)
        Gs.copy(t[i]), zs.copy(t[i + 1]), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Gs.distanceTo(zs);
    }
    return this;
  }
});
function Za(e, t) {
  Ot.call(this, e, t), this.type = "LineLoop";
}
Za.prototype = Object.assign(Object.create(Ot.prototype), {
  constructor: Za,
  isLineLoop: !0
});
function Fn(e) {
  _e.call(this), this.type = "PointsMaterial", this.color = new fe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e);
}
Fn.prototype = Object.create(_e.prototype);
Fn.prototype.constructor = Fn;
Fn.prototype.isPointsMaterial = !0;
Fn.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this;
};
const Gl = new Ce(), $a = new nr(), ks = new vn(), Hs = new b();
function po(e, t) {
  ie.call(this), this.type = "Points", this.geometry = e !== void 0 ? e : new he(), this.material = t !== void 0 ? t : new Fn(), this.updateMorphTargets();
}
po.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: po,
  isPoints: !0,
  copy: function(e) {
    return ie.prototype.copy.call(this, e), this.material = e.material, this.geometry = e.geometry, this;
  },
  raycast: function(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ks.copy(n.boundingSphere), ks.applyMatrix4(i), ks.radius += r, e.ray.intersectsSphere(ks) === !1)
      return;
    Gl.getInverse(i), $a.copy(e.ray).applyMatrix4(Gl);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = s * s;
    if (n.isBufferGeometry) {
      const a = n.index, l = n.attributes.position.array;
      if (a !== null) {
        const h = a.array;
        for (let u = 0, f = h.length; u < f; u++) {
          const d = h[u];
          Hs.fromArray(l, d * 3), Ta(Hs, d, o, i, e, t, this);
        }
      } else
        for (let h = 0, u = l.length / 3; h < u; h++)
          Hs.fromArray(l, h * 3), Ta(Hs, h, o, i, e, t, this);
    } else {
      const a = n.vertices;
      for (let c = 0, l = a.length; c < l; c++)
        Ta(a[c], c, o, i, e, t, this);
    }
  },
  updateMorphTargets: function() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r = 0, s = i.length; r < s; r++) {
            const o = i[r].name || String(r);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
});
function Ta(e, t, n, i, r, s, o) {
  const a = $a.distanceSqToPoint(e);
  if (a < n) {
    const c = new b();
    $a.closestPointToPoint(e, c), c.applyMatrix4(i);
    const l = r.ray.origin.distanceTo(c);
    if (l < r.near || l > r.far)
      return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(a),
      point: c,
      index: t,
      face: null,
      object: o
    });
  }
}
function zl(e, t, n, i, r, s, o, a, c) {
  Ge.call(this, e, t, n, i, r, s, o, a, c), this.format = o !== void 0 ? o : Zn, this.minFilter = s !== void 0 ? s : dt, this.magFilter = r !== void 0 ? r : dt, this.generateMipmaps = !1;
  const l = this;
  function h() {
    l.needsUpdate = !0, e.requestVideoFrameCallback(h);
  }
  "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(h);
}
zl.prototype = Object.assign(Object.create(Ge.prototype), {
  constructor: zl,
  isVideoTexture: !0,
  update: function() {
    const e = this.image;
    "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
});
function Dr(e, t, n, i, r, s, o, a, c, l, h, u) {
  Ge.call(this, null, s, o, a, c, l, i, r, h, u), this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
}
Dr.prototype = Object.create(Ge.prototype);
Dr.prototype.constructor = Dr;
Dr.prototype.isCompressedTexture = !0;
function Nr(e, t, n, i, r, s, o, a, c) {
  Ge.call(this, e, t, n, i, r, s, o, a, c), this.needsUpdate = !0;
}
Nr.prototype = Object.create(Ge.prototype);
Nr.prototype.constructor = Nr;
Nr.prototype.isCanvasTexture = !0;
function mo(e, t, n, i, r, s, o, a, c, l) {
  if (l = l !== void 0 ? l : Oi, l !== Oi && l !== Tr)
    throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
  n === void 0 && l === Oi && (n = oo), n === void 0 && l === Tr && (n = _r), Ge.call(this, null, i, r, s, o, a, l, n, c), this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : ot, this.minFilter = a !== void 0 ? a : ot, this.flipY = !1, this.generateMipmaps = !1;
}
mo.prototype = Object.create(Ge.prototype);
mo.prototype.constructor = mo;
mo.prototype.isDepthTexture = !0;
function go(e) {
  he.call(this), this.type = "WireframeGeometry";
  const t = [], n = [0, 0], i = {}, r = ["a", "b", "c"];
  if (e && e.isGeometry) {
    const s = e.faces;
    for (let o = 0, a = s.length; o < a; o++) {
      const c = s[o];
      for (let l = 0; l < 3; l++) {
        const h = c[r[l]], u = c[r[(l + 1) % 3]];
        n[0] = Math.min(h, u), n[1] = Math.max(h, u);
        const f = n[0] + "," + n[1];
        i[f] === void 0 && (i[f] = { index1: n[0], index2: n[1] });
      }
    }
    for (const o in i) {
      const a = i[o];
      let c = e.vertices[a.index1];
      t.push(c.x, c.y, c.z), c = e.vertices[a.index2], t.push(c.x, c.y, c.z);
    }
  } else if (e && e.isBufferGeometry) {
    let s = new b();
    if (e.index !== null) {
      const o = e.attributes.position, a = e.index;
      let c = e.groups;
      c.length === 0 && (c = [{ start: 0, count: a.count, materialIndex: 0 }]);
      for (let l = 0, h = c.length; l < h; ++l) {
        const u = c[l], f = u.start, d = u.count;
        for (let p = f, x = f + d; p < x; p += 3)
          for (let y = 0; y < 3; y++) {
            const g = a.getX(p + y), m = a.getX(p + (y + 1) % 3);
            n[0] = Math.min(g, m), n[1] = Math.max(g, m);
            const _ = n[0] + "," + n[1];
            i[_] === void 0 && (i[_] = { index1: n[0], index2: n[1] });
          }
      }
      for (const l in i) {
        const h = i[l];
        s.fromBufferAttribute(o, h.index1), t.push(s.x, s.y, s.z), s.fromBufferAttribute(o, h.index2), t.push(s.x, s.y, s.z);
      }
    } else {
      const o = e.attributes.position;
      for (let a = 0, c = o.count / 3; a < c; a++)
        for (let l = 0; l < 3; l++) {
          const h = 3 * a + l;
          s.fromBufferAttribute(o, h), t.push(s.x, s.y, s.z);
          const u = 3 * a + (l + 1) % 3;
          s.fromBufferAttribute(o, u), t.push(s.x, s.y, s.z);
        }
    }
  }
  this.setAttribute("position", new oe(t, 3));
}
go.prototype = Object.create(he.prototype);
go.prototype.constructor = go;
function yo(e, t, n) {
  be.call(this), this.type = "ParametricGeometry", this.parameters = {
    func: e,
    slices: t,
    stacks: n
  }, this.fromBufferGeometry(new Br(e, t, n)), this.mergeVertices();
}
yo.prototype = Object.create(be.prototype);
yo.prototype.constructor = yo;
function Br(e, t, n) {
  he.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
    func: e,
    slices: t,
    stacks: n
  };
  const i = [], r = [], s = [], o = [], a = 1e-5, c = new b(), l = new b(), h = new b(), u = new b(), f = new b();
  e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
  const d = t + 1;
  for (let p = 0; p <= n; p++) {
    const x = p / n;
    for (let y = 0; y <= t; y++) {
      const g = y / t;
      e(g, x, l), r.push(l.x, l.y, l.z), g - a >= 0 ? (e(g - a, x, h), u.subVectors(l, h)) : (e(g + a, x, h), u.subVectors(h, l)), x - a >= 0 ? (e(g, x - a, h), f.subVectors(l, h)) : (e(g, x + a, h), f.subVectors(h, l)), c.crossVectors(u, f).normalize(), s.push(c.x, c.y, c.z), o.push(g, x);
    }
  }
  for (let p = 0; p < n; p++)
    for (let x = 0; x < t; x++) {
      const y = p * d + x, g = p * d + x + 1, m = (p + 1) * d + x + 1, _ = (p + 1) * d + x;
      i.push(y, g, _), i.push(g, m, _);
    }
  this.setIndex(i), this.setAttribute("position", new oe(r, 3)), this.setAttribute("normal", new oe(s, 3)), this.setAttribute("uv", new oe(o, 2));
}
Br.prototype = Object.create(he.prototype);
Br.prototype.constructor = Br;
function xo(e, t, n, i) {
  be.call(this), this.type = "PolyhedronGeometry", this.parameters = {
    vertices: e,
    indices: t,
    radius: n,
    detail: i
  }, this.fromBufferGeometry(new St(e, t, n, i)), this.mergeVertices();
}
xo.prototype = Object.create(be.prototype);
xo.prototype.constructor = xo;
function St(e, t, n, i) {
  he.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
    vertices: e,
    indices: t,
    radius: n,
    detail: i
  }, n = n || 1, i = i || 0;
  const r = [], s = [];
  o(i), c(n), l(), this.setAttribute("position", new oe(r, 3)), this.setAttribute("normal", new oe(r.slice(), 3)), this.setAttribute("uv", new oe(s, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
  function o(g) {
    const m = new b(), _ = new b(), v = new b();
    for (let w = 0; w < t.length; w += 3)
      f(t[w + 0], m), f(t[w + 1], _), f(t[w + 2], v), a(m, _, v, g);
  }
  function a(g, m, _, v) {
    const w = Math.pow(2, v), A = [];
    for (let E = 0; E <= w; E++) {
      A[E] = [];
      const U = g.clone().lerp(_, E / w), L = m.clone().lerp(_, E / w), q = w - E;
      for (let O = 0; O <= q; O++)
        O === 0 && E === w ? A[E][O] = U : A[E][O] = U.clone().lerp(L, O / q);
    }
    for (let E = 0; E < w; E++)
      for (let U = 0; U < 2 * (w - E) - 1; U++) {
        const L = Math.floor(U / 2);
        U % 2 === 0 ? (u(A[E][L + 1]), u(A[E + 1][L]), u(A[E][L])) : (u(A[E][L + 1]), u(A[E + 1][L + 1]), u(A[E + 1][L]));
      }
  }
  function c(g) {
    const m = new b();
    for (let _ = 0; _ < r.length; _ += 3)
      m.x = r[_ + 0], m.y = r[_ + 1], m.z = r[_ + 2], m.normalize().multiplyScalar(g), r[_ + 0] = m.x, r[_ + 1] = m.y, r[_ + 2] = m.z;
  }
  function l() {
    const g = new b();
    for (let m = 0; m < r.length; m += 3) {
      g.x = r[m + 0], g.y = r[m + 1], g.z = r[m + 2];
      const _ = x(g) / 2 / Math.PI + 0.5, v = y(g) / Math.PI + 0.5;
      s.push(_, 1 - v);
    }
    d(), h();
  }
  function h() {
    for (let g = 0; g < s.length; g += 6) {
      const m = s[g + 0], _ = s[g + 2], v = s[g + 4], w = Math.max(m, _, v), A = Math.min(m, _, v);
      w > 0.9 && A < 0.1 && (m < 0.2 && (s[g + 0] += 1), _ < 0.2 && (s[g + 2] += 1), v < 0.2 && (s[g + 4] += 1));
    }
  }
  function u(g) {
    r.push(g.x, g.y, g.z);
  }
  function f(g, m) {
    const _ = g * 3;
    m.x = e[_ + 0], m.y = e[_ + 1], m.z = e[_ + 2];
  }
  function d() {
    const g = new b(), m = new b(), _ = new b(), v = new b(), w = new H(), A = new H(), E = new H();
    for (let U = 0, L = 0; U < r.length; U += 9, L += 6) {
      g.set(r[U + 0], r[U + 1], r[U + 2]), m.set(r[U + 3], r[U + 4], r[U + 5]), _.set(r[U + 6], r[U + 7], r[U + 8]), w.set(s[L + 0], s[L + 1]), A.set(s[L + 2], s[L + 3]), E.set(s[L + 4], s[L + 5]), v.copy(g).add(m).add(_).divideScalar(3);
      const q = x(v);
      p(w, L + 0, g, q), p(A, L + 2, m, q), p(E, L + 4, _, q);
    }
  }
  function p(g, m, _, v) {
    v < 0 && g.x === 1 && (s[m] = g.x - 1), _.x === 0 && _.z === 0 && (s[m] = v / 2 / Math.PI + 0.5);
  }
  function x(g) {
    return Math.atan2(g.z, -g.x);
  }
  function y(g) {
    return Math.atan2(-g.y, Math.sqrt(g.x * g.x + g.z * g.z));
  }
}
St.prototype = Object.create(he.prototype);
St.prototype.constructor = St;
function vo(e, t) {
  be.call(this), this.type = "TetrahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Fr(e, t)), this.mergeVertices();
}
vo.prototype = Object.create(be.prototype);
vo.prototype.constructor = vo;
function Fr(e, t) {
  const n = [
    1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    1,
    -1,
    1,
    -1,
    -1
  ], i = [
    2,
    1,
    0,
    0,
    3,
    2,
    1,
    3,
    0,
    2,
    3,
    1
  ];
  St.call(this, n, i, e, t), this.type = "TetrahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Fr.prototype = Object.create(St.prototype);
Fr.prototype.constructor = Fr;
function _o(e, t) {
  be.call(this), this.type = "OctahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Gi(e, t)), this.mergeVertices();
}
_o.prototype = Object.create(be.prototype);
_o.prototype.constructor = _o;
function Gi(e, t) {
  const n = [
    1,
    0,
    0,
    -1,
    0,
    0,
    0,
    1,
    0,
    0,
    -1,
    0,
    0,
    0,
    1,
    0,
    0,
    -1
  ], i = [
    0,
    2,
    4,
    0,
    4,
    3,
    0,
    3,
    5,
    0,
    5,
    2,
    1,
    2,
    5,
    1,
    5,
    3,
    1,
    3,
    4,
    1,
    4,
    2
  ];
  St.call(this, n, i, e, t), this.type = "OctahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Gi.prototype = Object.create(St.prototype);
Gi.prototype.constructor = Gi;
function bo(e, t) {
  be.call(this), this.type = "IcosahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Ur(e, t)), this.mergeVertices();
}
bo.prototype = Object.create(be.prototype);
bo.prototype.constructor = bo;
function Ur(e, t) {
  const n = (1 + Math.sqrt(5)) / 2, i = [
    -1,
    n,
    0,
    1,
    n,
    0,
    -1,
    -n,
    0,
    1,
    -n,
    0,
    0,
    -1,
    n,
    0,
    1,
    n,
    0,
    -1,
    -n,
    0,
    1,
    -n,
    n,
    0,
    -1,
    n,
    0,
    1,
    -n,
    0,
    -1,
    -n,
    0,
    1
  ], r = [
    0,
    11,
    5,
    0,
    5,
    1,
    0,
    1,
    7,
    0,
    7,
    10,
    0,
    10,
    11,
    1,
    5,
    9,
    5,
    11,
    4,
    11,
    10,
    2,
    10,
    7,
    6,
    7,
    1,
    8,
    3,
    9,
    4,
    3,
    4,
    2,
    3,
    2,
    6,
    3,
    6,
    8,
    3,
    8,
    9,
    4,
    9,
    5,
    2,
    4,
    11,
    6,
    2,
    10,
    8,
    6,
    7,
    9,
    8,
    1
  ];
  St.call(this, i, r, e, t), this.type = "IcosahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Ur.prototype = Object.create(St.prototype);
Ur.prototype.constructor = Ur;
function wo(e, t) {
  be.call(this), this.type = "DodecahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Gr(e, t)), this.mergeVertices();
}
wo.prototype = Object.create(be.prototype);
wo.prototype.constructor = wo;
function Gr(e, t) {
  const n = (1 + Math.sqrt(5)) / 2, i = 1 / n, r = [
    // (±1, ±1, ±1)
    -1,
    -1,
    -1,
    -1,
    -1,
    1,
    -1,
    1,
    -1,
    -1,
    1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    // (0, ±1/φ, ±φ)
    0,
    -i,
    -n,
    0,
    -i,
    n,
    0,
    i,
    -n,
    0,
    i,
    n,
    // (±1/φ, ±φ, 0)
    -i,
    -n,
    0,
    -i,
    n,
    0,
    i,
    -n,
    0,
    i,
    n,
    0,
    // (±φ, 0, ±1/φ)
    -n,
    0,
    -i,
    n,
    0,
    -i,
    -n,
    0,
    i,
    n,
    0,
    i
  ], s = [
    3,
    11,
    7,
    3,
    7,
    15,
    3,
    15,
    13,
    7,
    19,
    17,
    7,
    17,
    6,
    7,
    6,
    15,
    17,
    4,
    8,
    17,
    8,
    10,
    17,
    10,
    6,
    8,
    0,
    16,
    8,
    16,
    2,
    8,
    2,
    10,
    0,
    12,
    1,
    0,
    1,
    18,
    0,
    18,
    16,
    6,
    10,
    2,
    6,
    2,
    13,
    6,
    13,
    15,
    2,
    16,
    18,
    2,
    18,
    3,
    2,
    3,
    13,
    18,
    1,
    9,
    18,
    9,
    11,
    18,
    11,
    3,
    4,
    14,
    12,
    4,
    12,
    0,
    4,
    0,
    8,
    11,
    9,
    5,
    11,
    5,
    19,
    11,
    19,
    7,
    19,
    5,
    14,
    19,
    14,
    4,
    19,
    4,
    17,
    1,
    12,
    14,
    1,
    14,
    5,
    1,
    5,
    9
  ];
  St.call(this, r, s, e, t), this.type = "DodecahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Gr.prototype = Object.create(St.prototype);
Gr.prototype.constructor = Gr;
function Mo(e, t, n, i, r, s) {
  be.call(this), this.type = "TubeGeometry", this.parameters = {
    path: e,
    tubularSegments: t,
    radius: n,
    radialSegments: i,
    closed: r
  }, s !== void 0 && console.warn("THREE.TubeGeometry: taper has been removed.");
  const o = new zi(e, t, n, i, r);
  this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices();
}
Mo.prototype = Object.create(be.prototype);
Mo.prototype.constructor = Mo;
function zi(e, t, n, i, r) {
  he.call(this), this.type = "TubeBufferGeometry", this.parameters = {
    path: e,
    tubularSegments: t,
    radius: n,
    radialSegments: i,
    closed: r
  }, t = t || 64, n = n || 1, i = i || 8, r = r || !1;
  const s = e.computeFrenetFrames(t, r);
  this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
  const o = new b(), a = new b(), c = new H();
  let l = new b();
  const h = [], u = [], f = [], d = [];
  p(), this.setIndex(d), this.setAttribute("position", new oe(h, 3)), this.setAttribute("normal", new oe(u, 3)), this.setAttribute("uv", new oe(f, 2));
  function p() {
    for (let m = 0; m < t; m++)
      x(m);
    x(r === !1 ? t : 0), g(), y();
  }
  function x(m) {
    l = e.getPointAt(m / t, l);
    const _ = s.normals[m], v = s.binormals[m];
    for (let w = 0; w <= i; w++) {
      const A = w / i * Math.PI * 2, E = Math.sin(A), U = -Math.cos(A);
      a.x = U * _.x + E * v.x, a.y = U * _.y + E * v.y, a.z = U * _.z + E * v.z, a.normalize(), u.push(a.x, a.y, a.z), o.x = l.x + n * a.x, o.y = l.y + n * a.y, o.z = l.z + n * a.z, h.push(o.x, o.y, o.z);
    }
  }
  function y() {
    for (let m = 1; m <= t; m++)
      for (let _ = 1; _ <= i; _++) {
        const v = (i + 1) * (m - 1) + (_ - 1), w = (i + 1) * m + (_ - 1), A = (i + 1) * m + _, E = (i + 1) * (m - 1) + _;
        d.push(v, w, E), d.push(w, A, E);
      }
  }
  function g() {
    for (let m = 0; m <= t; m++)
      for (let _ = 0; _ <= i; _++)
        c.x = m / t, c.y = _ / i, f.push(c.x, c.y);
  }
}
zi.prototype = Object.create(he.prototype);
zi.prototype.constructor = zi;
zi.prototype.toJSON = function() {
  const e = he.prototype.toJSON.call(this);
  return e.path = this.parameters.path.toJSON(), e;
};
function So(e, t, n, i, r, s, o) {
  be.call(this), this.type = "TorusKnotGeometry", this.parameters = {
    radius: e,
    tube: t,
    tubularSegments: n,
    radialSegments: i,
    p: r,
    q: s
  }, o !== void 0 && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new zr(e, t, n, i, r, s)), this.mergeVertices();
}
So.prototype = Object.create(be.prototype);
So.prototype.constructor = So;
function zr(e, t, n, i, r, s) {
  he.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
    radius: e,
    tube: t,
    tubularSegments: n,
    radialSegments: i,
    p: r,
    q: s
  }, e = e || 1, t = t || 0.4, n = Math.floor(n) || 64, i = Math.floor(i) || 8, r = r || 2, s = s || 3;
  const o = [], a = [], c = [], l = [], h = new b(), u = new b(), f = new b(), d = new b(), p = new b(), x = new b(), y = new b();
  for (let m = 0; m <= n; ++m) {
    const _ = m / n * r * Math.PI * 2;
    g(_, r, s, e, f), g(_ + 0.01, r, s, e, d), x.subVectors(d, f), y.addVectors(d, f), p.crossVectors(x, y), y.crossVectors(p, x), p.normalize(), y.normalize();
    for (let v = 0; v <= i; ++v) {
      const w = v / i * Math.PI * 2, A = -t * Math.cos(w), E = t * Math.sin(w);
      h.x = f.x + (A * y.x + E * p.x), h.y = f.y + (A * y.y + E * p.y), h.z = f.z + (A * y.z + E * p.z), a.push(h.x, h.y, h.z), u.subVectors(h, f).normalize(), c.push(u.x, u.y, u.z), l.push(m / n), l.push(v / i);
    }
  }
  for (let m = 1; m <= n; m++)
    for (let _ = 1; _ <= i; _++) {
      const v = (i + 1) * (m - 1) + (_ - 1), w = (i + 1) * m + (_ - 1), A = (i + 1) * m + _, E = (i + 1) * (m - 1) + _;
      o.push(v, w, E), o.push(w, A, E);
    }
  this.setIndex(o), this.setAttribute("position", new oe(a, 3)), this.setAttribute("normal", new oe(c, 3)), this.setAttribute("uv", new oe(l, 2));
  function g(m, _, v, w, A) {
    const E = Math.cos(m), U = Math.sin(m), L = v / _ * m, q = Math.cos(L);
    A.x = w * (2 + q) * 0.5 * E, A.y = w * (2 + q) * U * 0.5, A.z = w * Math.sin(L) * 0.5;
  }
}
zr.prototype = Object.create(he.prototype);
zr.prototype.constructor = zr;
function To(e, t, n, i, r) {
  be.call(this), this.type = "TorusGeometry", this.parameters = {
    radius: e,
    tube: t,
    radialSegments: n,
    tubularSegments: i,
    arc: r
  }, this.fromBufferGeometry(new kr(e, t, n, i, r)), this.mergeVertices();
}
To.prototype = Object.create(be.prototype);
To.prototype.constructor = To;
function kr(e, t, n, i, r) {
  he.call(this), this.type = "TorusBufferGeometry", this.parameters = {
    radius: e,
    tube: t,
    radialSegments: n,
    tubularSegments: i,
    arc: r
  }, e = e || 1, t = t || 0.4, n = Math.floor(n) || 8, i = Math.floor(i) || 6, r = r || Math.PI * 2;
  const s = [], o = [], a = [], c = [], l = new b(), h = new b(), u = new b();
  for (let f = 0; f <= n; f++)
    for (let d = 0; d <= i; d++) {
      const p = d / i * r, x = f / n * Math.PI * 2;
      h.x = (e + t * Math.cos(x)) * Math.cos(p), h.y = (e + t * Math.cos(x)) * Math.sin(p), h.z = t * Math.sin(x), o.push(h.x, h.y, h.z), l.x = e * Math.cos(p), l.y = e * Math.sin(p), u.subVectors(h, l).normalize(), a.push(u.x, u.y, u.z), c.push(d / i), c.push(f / n);
    }
  for (let f = 1; f <= n; f++)
    for (let d = 1; d <= i; d++) {
      const p = (i + 1) * f + d - 1, x = (i + 1) * (f - 1) + d - 1, y = (i + 1) * (f - 1) + d, g = (i + 1) * f + d;
      s.push(p, x, g), s.push(x, y, g);
    }
  this.setIndex(s), this.setAttribute("position", new oe(o, 3)), this.setAttribute("normal", new oe(a, 3)), this.setAttribute("uv", new oe(c, 2));
}
kr.prototype = Object.create(he.prototype);
kr.prototype.constructor = kr;
const fy = {
  triangulate: function(e, t, n) {
    n = n || 2;
    let i = t && t.length, r = i ? t[0] * n : e.length, s = Ju(e, 0, r, n, !0), o = [];
    if (!s || s.next === s.prev)
      return o;
    let a, c, l, h, u, f, d;
    if (i && (s = yy(e, t, s, n)), e.length > 80 * n) {
      a = l = e[0], c = h = e[1];
      for (let p = n; p < r; p += n)
        u = e[p], f = e[p + 1], u < a && (a = u), f < c && (c = f), u > l && (l = u), f > h && (h = f);
      d = Math.max(l - a, h - c), d = d !== 0 ? 1 / d : 0;
    }
    return Hr(s, o, n, a, c, d), o;
  }
};
function Ju(e, t, n, i, r) {
  let s, o;
  if (r === Ly(e, t, n, i) > 0)
    for (s = t; s < n; s += i)
      o = kl(s, e[s], e[s + 1], o);
  else
    for (s = n - i; s >= t; s -= i)
      o = kl(s, e[s], e[s + 1], o);
  return o && $o(o, o.next) && (Wr(o), o = o.next), o;
}
function Un(e, t) {
  if (!e)
    return e;
  t || (t = e);
  let n = e, i;
  do
    if (i = !1, !n.steiner && ($o(n, n.next) || qe(n.prev, n, n.next) === 0)) {
      if (Wr(n), n = t = n.prev, n === n.next)
        break;
      i = !0;
    } else
      n = n.next;
  while (i || n !== t);
  return t;
}
function Hr(e, t, n, i, r, s, o) {
  if (!e)
    return;
  !o && s && wy(e, i, r, s);
  let a = e, c, l;
  for (; e.prev !== e.next; ) {
    if (c = e.prev, l = e.next, s ? py(e, i, r, s) : dy(e)) {
      t.push(c.i / n), t.push(e.i / n), t.push(l.i / n), Wr(e), e = l.next, a = l.next;
      continue;
    }
    if (e = l, e === a) {
      o ? o === 1 ? (e = my(Un(e), t, n), Hr(e, t, n, i, r, s, 2)) : o === 2 && gy(e, t, n, i, r, s) : Hr(Un(e), t, n, i, r, s, 1);
      break;
    }
  }
}
function dy(e) {
  let t = e.prev, n = e, i = e.next;
  if (qe(t, n, i) >= 0)
    return !1;
  let r = e.next.next;
  for (; r !== e.prev; ) {
    if (Pi(t.x, t.y, n.x, n.y, i.x, i.y, r.x, r.y) && qe(r.prev, r, r.next) >= 0)
      return !1;
    r = r.next;
  }
  return !0;
}
function py(e, t, n, i) {
  let r = e.prev, s = e, o = e.next;
  if (qe(r, s, o) >= 0)
    return !1;
  let a = r.x < s.x ? r.x < o.x ? r.x : o.x : s.x < o.x ? s.x : o.x, c = r.y < s.y ? r.y < o.y ? r.y : o.y : s.y < o.y ? s.y : o.y, l = r.x > s.x ? r.x > o.x ? r.x : o.x : s.x > o.x ? s.x : o.x, h = r.y > s.y ? r.y > o.y ? r.y : o.y : s.y > o.y ? s.y : o.y, u = Qa(a, c, t, n, i), f = Qa(l, h, t, n, i), d = e.prevZ, p = e.nextZ;
  for (; d && d.z >= u && p && p.z <= f; ) {
    if (d !== e.prev && d !== e.next && Pi(r.x, r.y, s.x, s.y, o.x, o.y, d.x, d.y) && qe(d.prev, d, d.next) >= 0 || (d = d.prevZ, p !== e.prev && p !== e.next && Pi(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && qe(p.prev, p, p.next) >= 0))
      return !1;
    p = p.nextZ;
  }
  for (; d && d.z >= u; ) {
    if (d !== e.prev && d !== e.next && Pi(r.x, r.y, s.x, s.y, o.x, o.y, d.x, d.y) && qe(d.prev, d, d.next) >= 0)
      return !1;
    d = d.prevZ;
  }
  for (; p && p.z <= f; ) {
    if (p !== e.prev && p !== e.next && Pi(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && qe(p.prev, p, p.next) >= 0)
      return !1;
    p = p.nextZ;
  }
  return !0;
}
function my(e, t, n) {
  let i = e;
  do {
    let r = i.prev, s = i.next.next;
    !$o(r, s) && Zu(r, i, i.next, s) && Vr(r, s) && Vr(s, r) && (t.push(r.i / n), t.push(i.i / n), t.push(s.i / n), Wr(i), Wr(i.next), i = e = s), i = i.next;
  } while (i !== e);
  return Un(i);
}
function gy(e, t, n, i, r, s) {
  let o = e;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Ty(o, a)) {
        let c = $u(o, a);
        o = Un(o, o.next), c = Un(c, c.next), Hr(o, t, n, i, r, s), Hr(c, t, n, i, r, s);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== e);
}
function yy(e, t, n, i) {
  let r = [], s, o, a, c, l;
  for (s = 0, o = t.length; s < o; s++)
    a = t[s] * i, c = s < o - 1 ? t[s + 1] * i : e.length, l = Ju(e, a, c, i, !1), l === l.next && (l.steiner = !0), r.push(Sy(l));
  for (r.sort(xy), s = 0; s < r.length; s++)
    vy(r[s], n), n = Un(n, n.next);
  return n;
}
function xy(e, t) {
  return e.x - t.x;
}
function vy(e, t) {
  if (t = _y(e, t), t) {
    const n = $u(t, e);
    Un(t, t.next), Un(n, n.next);
  }
}
function _y(e, t) {
  let n = t, i = e.x, r = e.y, s = -1 / 0, o;
  do {
    if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
      let f = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
      if (f <= i && f > s) {
        if (s = f, f === i) {
          if (r === n.y)
            return n;
          if (r === n.next.y)
            return n.next;
        }
        o = n.x < n.next.x ? n : n.next;
      }
    }
    n = n.next;
  } while (n !== t);
  if (!o)
    return null;
  if (i === s)
    return o;
  let a = o, c = o.x, l = o.y, h = 1 / 0, u;
  n = o;
  do
    i >= n.x && n.x >= c && i !== n.x && Pi(r < l ? i : s, r, c, l, r < l ? s : i, r, n.x, n.y) && (u = Math.abs(r - n.y) / (i - n.x), Vr(n, e) && (u < h || u === h && (n.x > o.x || n.x === o.x && by(o, n))) && (o = n, h = u)), n = n.next;
  while (n !== a);
  return o;
}
function by(e, t) {
  return qe(e.prev, e, t.prev) < 0 && qe(t.next, e, e.next) < 0;
}
function wy(e, t, n, i) {
  let r = e;
  do
    r.z === null && (r.z = Qa(r.x, r.y, t, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== e);
  r.prevZ.nextZ = null, r.prevZ = null, My(r);
}
function My(e) {
  let t, n, i, r, s, o, a, c, l = 1;
  do {
    for (n = e, e = null, s = null, o = 0; n; ) {
      for (o++, i = n, a = 0, t = 0; t < l && (a++, i = i.nextZ, !!i); t++)
        ;
      for (c = l; a > 0 || c > 0 && i; )
        a !== 0 && (c === 0 || !i || n.z <= i.z) ? (r = n, n = n.nextZ, a--) : (r = i, i = i.nextZ, c--), s ? s.nextZ = r : e = r, r.prevZ = s, s = r;
      n = i;
    }
    s.nextZ = null, l *= 2;
  } while (o > 1);
  return e;
}
function Qa(e, t, n, i, r) {
  return e = 32767 * (e - n) * r, t = 32767 * (t - i) * r, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function Sy(e) {
  let t = e, n = e;
  do
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
  while (t !== e);
  return n;
}
function Pi(e, t, n, i, r, s, o, a) {
  return (r - o) * (t - a) - (e - o) * (s - a) >= 0 && (e - o) * (i - a) - (n - o) * (t - a) >= 0 && (n - o) * (s - a) - (r - o) * (i - a) >= 0;
}
function Ty(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !Ey(e, t) && // dones't intersect other edges
  (Vr(e, t) && Vr(t, e) && Ay(e, t) && // locally visible
  (qe(e.prev, e, t.prev) || qe(e, t.prev, t)) || // does not create opposite-facing sectors
  $o(e, t) && qe(e.prev, e, e.next) > 0 && qe(t.prev, t, t.next) > 0);
}
function qe(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function $o(e, t) {
  return e.x === t.x && e.y === t.y;
}
function Zu(e, t, n, i) {
  const r = Ws(qe(e, t, n)), s = Ws(qe(e, t, i)), o = Ws(qe(n, i, e)), a = Ws(qe(n, i, t));
  return !!(r !== s && o !== a || r === 0 && Vs(e, n, t) || s === 0 && Vs(e, i, t) || o === 0 && Vs(n, e, i) || a === 0 && Vs(n, t, i));
}
function Vs(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function Ws(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Ey(e, t) {
  let n = e;
  do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Zu(n, n.next, e, t))
      return !0;
    n = n.next;
  } while (n !== e);
  return !1;
}
function Vr(e, t) {
  return qe(e.prev, e, e.next) < 0 ? qe(e, t, e.next) >= 0 && qe(e, e.prev, t) >= 0 : qe(e, t, e.prev) < 0 || qe(e, e.next, t) < 0;
}
function Ay(e, t) {
  let n = e, i = !1, r = (e.x + t.x) / 2, s = (e.y + t.y) / 2;
  do
    n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
  while (n !== e);
  return i;
}
function $u(e, t) {
  let n = new Ka(e.i, e.x, e.y), i = new Ka(t.i, t.x, t.y), r = e.next, s = t.prev;
  return e.next = t, t.prev = e, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
}
function kl(e, t, n, i) {
  const r = new Ka(e, t, n);
  return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
}
function Wr(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Ka(e, t, n) {
  this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Ly(e, t, n, i) {
  let r = 0;
  for (let s = t, o = n - i; s < n; s += i)
    r += (e[o] - e[s]) * (e[s + 1] + e[o + 1]), o = s;
  return r;
}
const Dn = {
  // calculate area of the contour polygon
  area: function(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, r = 0; r < t; i = r++)
      n += e[i].x * e[r].y - e[r].x * e[i].y;
    return n * 0.5;
  },
  isClockWise: function(e) {
    return Dn.area(e) < 0;
  },
  triangulateShape: function(e, t) {
    const n = [], i = [], r = [];
    Hl(e), Vl(n, e);
    let s = e.length;
    t.forEach(Hl);
    for (let a = 0; a < t.length; a++)
      i.push(s), s += t[a].length, Vl(n, t[a]);
    const o = fy.triangulate(n, i);
    for (let a = 0; a < o.length; a += 3)
      r.push(o.slice(a, a + 3));
    return r;
  }
};
function Hl(e) {
  const t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function Vl(e, t) {
  for (let n = 0; n < t.length; n++)
    e.push(t[n].x), e.push(t[n].y);
}
function ki(e, t) {
  be.call(this), this.type = "ExtrudeGeometry", this.parameters = {
    shapes: e,
    options: t
  }, this.fromBufferGeometry(new dn(e, t)), this.mergeVertices();
}
ki.prototype = Object.create(be.prototype);
ki.prototype.constructor = ki;
ki.prototype.toJSON = function() {
  const e = be.prototype.toJSON.call(this), t = this.parameters.shapes, n = this.parameters.options;
  return Qu(t, n, e);
};
function dn(e, t) {
  he.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
    shapes: e,
    options: t
  }, e = Array.isArray(e) ? e : [e];
  const n = this, i = [], r = [];
  for (let o = 0, a = e.length; o < a; o++) {
    const c = e[o];
    s(c);
  }
  this.setAttribute("position", new oe(i, 3)), this.setAttribute("uv", new oe(r, 2)), this.computeVertexNormals();
  function s(o) {
    const a = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, l = t.steps !== void 0 ? t.steps : 1;
    let h = t.depth !== void 0 ? t.depth : 100, u = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : 6, d = t.bevelSize !== void 0 ? t.bevelSize : f - 2, p = t.bevelOffset !== void 0 ? t.bevelOffset : 0, x = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
    const y = t.extrudePath, g = t.UVGenerator !== void 0 ? t.UVGenerator : Cy;
    t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), h = t.amount);
    let m, _ = !1, v, w, A, E;
    y && (m = y.getSpacedPoints(l), _ = !0, u = !1, v = y.computeFrenetFrames(l, !1), w = new b(), A = new b(), E = new b()), u || (x = 0, f = 0, d = 0, p = 0);
    const U = o.extractPoints(c);
    let L = U.shape;
    const q = U.holes;
    if (!Dn.isClockWise(L)) {
      L = L.reverse();
      for (let X = 0, Y = q.length; X < Y; X++) {
        const Q = q[X];
        Dn.isClockWise(Q) && (q[X] = Q.reverse());
      }
    }
    const N = Dn.triangulateShape(L, q), D = L;
    for (let X = 0, Y = q.length; X < Y; X++) {
      const Q = q[X];
      L = L.concat(Q);
    }
    function R(X, Y, Q) {
      return Y || console.error("THREE.ExtrudeGeometry: vec does not exist"), Y.clone().multiplyScalar(Q).add(X);
    }
    const C = L.length, z = N.length;
    function J(X, Y, Q) {
      let me, le, ve;
      const M = X.x - Y.x, T = X.y - Y.y, Z = Q.x - X.x, V = Q.y - X.y, P = M * M + T * T, K = M * V - T * Z;
      if (Math.abs(K) > Number.EPSILON) {
        const ee = Math.sqrt(P), I = Math.sqrt(Z * Z + V * V), F = Y.x - T / ee, W = Y.y + M / ee, ne = Q.x - V / I, ce = Q.y + Z / I, te = ((ne - F) * V - (ce - W) * Z) / (M * V - T * Z);
        me = F + M * te - X.x, le = W + T * te - X.y;
        const ue = me * me + le * le;
        if (ue <= 2)
          return new H(me, le);
        ve = Math.sqrt(ue / 2);
      } else {
        let ee = !1;
        M > Number.EPSILON ? Z > Number.EPSILON && (ee = !0) : M < -Number.EPSILON ? Z < -Number.EPSILON && (ee = !0) : Math.sign(T) === Math.sign(V) && (ee = !0), ee ? (me = -T, le = M, ve = Math.sqrt(P)) : (me = M, le = T, ve = Math.sqrt(P / 2));
      }
      return new H(me / ve, le / ve);
    }
    const $ = [];
    for (let X = 0, Y = D.length, Q = Y - 1, me = X + 1; X < Y; X++, Q++, me++)
      Q === Y && (Q = 0), me === Y && (me = 0), $[X] = J(D[X], D[Q], D[me]);
    const re = [];
    let de, pe = $.concat();
    for (let X = 0, Y = q.length; X < Y; X++) {
      const Q = q[X];
      de = [];
      for (let me = 0, le = Q.length, ve = le - 1, M = me + 1; me < le; me++, ve++, M++)
        ve === le && (ve = 0), M === le && (M = 0), de[me] = J(Q[me], Q[ve], Q[M]);
      re.push(de), pe = pe.concat(de);
    }
    for (let X = 0; X < x; X++) {
      const Y = X / x, Q = f * Math.cos(Y * Math.PI / 2), me = d * Math.sin(Y * Math.PI / 2) + p;
      for (let le = 0, ve = D.length; le < ve; le++) {
        const M = R(D[le], $[le], me);
        j(M.x, M.y, -Q);
      }
      for (let le = 0, ve = q.length; le < ve; le++) {
        const M = q[le];
        de = re[le];
        for (let T = 0, Z = M.length; T < Z; T++) {
          const V = R(M[T], de[T], me);
          j(V.x, V.y, -Q);
        }
      }
    }
    const Pe = d + p;
    for (let X = 0; X < C; X++) {
      const Y = u ? R(L[X], pe[X], Pe) : L[X];
      _ ? (A.copy(v.normals[0]).multiplyScalar(Y.x), w.copy(v.binormals[0]).multiplyScalar(Y.y), E.copy(m[0]).add(A).add(w), j(E.x, E.y, E.z)) : j(Y.x, Y.y, 0);
    }
    for (let X = 1; X <= l; X++)
      for (let Y = 0; Y < C; Y++) {
        const Q = u ? R(L[Y], pe[Y], Pe) : L[Y];
        _ ? (A.copy(v.normals[X]).multiplyScalar(Q.x), w.copy(v.binormals[X]).multiplyScalar(Q.y), E.copy(m[X]).add(A).add(w), j(E.x, E.y, E.z)) : j(Q.x, Q.y, h / l * X);
      }
    for (let X = x - 1; X >= 0; X--) {
      const Y = X / x, Q = f * Math.cos(Y * Math.PI / 2), me = d * Math.sin(Y * Math.PI / 2) + p;
      for (let le = 0, ve = D.length; le < ve; le++) {
        const M = R(D[le], $[le], me);
        j(M.x, M.y, h + Q);
      }
      for (let le = 0, ve = q.length; le < ve; le++) {
        const M = q[le];
        de = re[le];
        for (let T = 0, Z = M.length; T < Z; T++) {
          const V = R(M[T], de[T], me);
          _ ? j(V.x, V.y + m[l - 1].y, m[l - 1].x + Q) : j(V.x, V.y, h + Q);
        }
      }
    }
    Se(), Ve();
    function Se() {
      const X = i.length / 3;
      if (u) {
        let Y = 0, Q = C * Y;
        for (let me = 0; me < z; me++) {
          const le = N[me];
          Xe(le[2] + Q, le[1] + Q, le[0] + Q);
        }
        Y = l + x * 2, Q = C * Y;
        for (let me = 0; me < z; me++) {
          const le = N[me];
          Xe(le[0] + Q, le[1] + Q, le[2] + Q);
        }
      } else {
        for (let Y = 0; Y < z; Y++) {
          const Q = N[Y];
          Xe(Q[2], Q[1], Q[0]);
        }
        for (let Y = 0; Y < z; Y++) {
          const Q = N[Y];
          Xe(Q[0] + C * l, Q[1] + C * l, Q[2] + C * l);
        }
      }
      n.addGroup(X, i.length / 3 - X, 0);
    }
    function Ve() {
      const X = i.length / 3;
      let Y = 0;
      De(D, Y), Y += D.length;
      for (let Q = 0, me = q.length; Q < me; Q++) {
        const le = q[Q];
        De(le, Y), Y += le.length;
      }
      n.addGroup(X, i.length / 3 - X, 1);
    }
    function De(X, Y) {
      let Q = X.length;
      for (; --Q >= 0; ) {
        const me = Q;
        let le = Q - 1;
        le < 0 && (le = X.length - 1);
        for (let ve = 0, M = l + x * 2; ve < M; ve++) {
          const T = C * ve, Z = C * (ve + 1), V = Y + me + T, P = Y + le + T, K = Y + le + Z, ee = Y + me + Z;
          Ee(V, P, K, ee);
        }
      }
    }
    function j(X, Y, Q) {
      a.push(X), a.push(Y), a.push(Q);
    }
    function Xe(X, Y, Q) {
      Le(X), Le(Y), Le(Q);
      const me = i.length / 3, le = g.generateTopUV(n, i, me - 3, me - 2, me - 1);
      we(le[0]), we(le[1]), we(le[2]);
    }
    function Ee(X, Y, Q, me) {
      Le(X), Le(Y), Le(me), Le(Y), Le(Q), Le(me);
      const le = i.length / 3, ve = g.generateSideWallUV(n, i, le - 6, le - 3, le - 2, le - 1);
      we(ve[0]), we(ve[1]), we(ve[3]), we(ve[1]), we(ve[2]), we(ve[3]);
    }
    function Le(X) {
      i.push(a[X * 3 + 0]), i.push(a[X * 3 + 1]), i.push(a[X * 3 + 2]);
    }
    function we(X) {
      r.push(X.x), r.push(X.y);
    }
  }
}
dn.prototype = Object.create(he.prototype);
dn.prototype.constructor = dn;
dn.prototype.toJSON = function() {
  const e = he.prototype.toJSON.call(this), t = this.parameters.shapes, n = this.parameters.options;
  return Qu(t, n, e);
};
const Cy = {
  generateTopUV: function(e, t, n, i, r) {
    const s = t[n * 3], o = t[n * 3 + 1], a = t[i * 3], c = t[i * 3 + 1], l = t[r * 3], h = t[r * 3 + 1];
    return [
      new H(s, o),
      new H(a, c),
      new H(l, h)
    ];
  },
  generateSideWallUV: function(e, t, n, i, r, s) {
    const o = t[n * 3], a = t[n * 3 + 1], c = t[n * 3 + 2], l = t[i * 3], h = t[i * 3 + 1], u = t[i * 3 + 2], f = t[r * 3], d = t[r * 3 + 1], p = t[r * 3 + 2], x = t[s * 3], y = t[s * 3 + 1], g = t[s * 3 + 2];
    return Math.abs(a - h) < 0.01 ? [
      new H(o, 1 - c),
      new H(l, 1 - u),
      new H(f, 1 - p),
      new H(x, 1 - g)
    ] : [
      new H(a, 1 - c),
      new H(h, 1 - u),
      new H(d, 1 - p),
      new H(y, 1 - g)
    ];
  }
};
function Qu(e, t, n) {
  if (n.shapes = [], Array.isArray(e))
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      n.shapes.push(s.uuid);
    }
  else
    n.shapes.push(e.uuid);
  return t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
}
function Eo(e, t) {
  be.call(this), this.type = "TextGeometry", this.parameters = {
    text: e,
    parameters: t
  }, this.fromBufferGeometry(new jr(e, t)), this.mergeVertices();
}
Eo.prototype = Object.create(be.prototype);
Eo.prototype.constructor = Eo;
function jr(e, t) {
  t = t || {};
  const n = t.font;
  if (!(n && n.isFont))
    return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new be();
  const i = n.generateShapes(e, t.size);
  t.depth = t.height !== void 0 ? t.height : 50, t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1), dn.call(this, i, t), this.type = "TextBufferGeometry";
}
jr.prototype = Object.create(dn.prototype);
jr.prototype.constructor = jr;
function qr(e, t, n, i, r, s, o) {
  be.call(this), this.type = "SphereGeometry", this.parameters = {
    radius: e,
    widthSegments: t,
    heightSegments: n,
    phiStart: i,
    phiLength: r,
    thetaStart: s,
    thetaLength: o
  }, this.fromBufferGeometry(new Hi(e, t, n, i, r, s, o)), this.mergeVertices();
}
qr.prototype = Object.create(be.prototype);
qr.prototype.constructor = qr;
function Hi(e, t, n, i, r, s, o) {
  he.call(this), this.type = "SphereBufferGeometry", this.parameters = {
    radius: e,
    widthSegments: t,
    heightSegments: n,
    phiStart: i,
    phiLength: r,
    thetaStart: s,
    thetaLength: o
  }, e = e || 1, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), i = i !== void 0 ? i : 0, r = r !== void 0 ? r : Math.PI * 2, s = s !== void 0 ? s : 0, o = o !== void 0 ? o : Math.PI;
  const a = Math.min(s + o, Math.PI);
  let c = 0;
  const l = [], h = new b(), u = new b(), f = [], d = [], p = [], x = [];
  for (let y = 0; y <= n; y++) {
    const g = [], m = y / n;
    let _ = 0;
    y == 0 && s == 0 ? _ = 0.5 / t : y == n && a == Math.PI && (_ = -0.5 / t);
    for (let v = 0; v <= t; v++) {
      const w = v / t;
      h.x = -e * Math.cos(i + w * r) * Math.sin(s + m * o), h.y = e * Math.cos(s + m * o), h.z = e * Math.sin(i + w * r) * Math.sin(s + m * o), d.push(h.x, h.y, h.z), u.copy(h).normalize(), p.push(u.x, u.y, u.z), x.push(w + _, 1 - m), g.push(c++);
    }
    l.push(g);
  }
  for (let y = 0; y < n; y++)
    for (let g = 0; g < t; g++) {
      const m = l[y][g + 1], _ = l[y][g], v = l[y + 1][g], w = l[y + 1][g + 1];
      (y !== 0 || s > 0) && f.push(m, _, w), (y !== n - 1 || a < Math.PI) && f.push(_, v, w);
    }
  this.setIndex(f), this.setAttribute("position", new oe(d, 3)), this.setAttribute("normal", new oe(p, 3)), this.setAttribute("uv", new oe(x, 2));
}
Hi.prototype = Object.create(he.prototype);
Hi.prototype.constructor = Hi;
function Ao(e, t, n, i, r, s) {
  be.call(this), this.type = "RingGeometry", this.parameters = {
    innerRadius: e,
    outerRadius: t,
    thetaSegments: n,
    phiSegments: i,
    thetaStart: r,
    thetaLength: s
  }, this.fromBufferGeometry(new Xr(e, t, n, i, r, s)), this.mergeVertices();
}
Ao.prototype = Object.create(be.prototype);
Ao.prototype.constructor = Ao;
function Xr(e, t, n, i, r, s) {
  he.call(this), this.type = "RingBufferGeometry", this.parameters = {
    innerRadius: e,
    outerRadius: t,
    thetaSegments: n,
    phiSegments: i,
    thetaStart: r,
    thetaLength: s
  }, e = e || 0.5, t = t || 1, r = r !== void 0 ? r : 0, s = s !== void 0 ? s : Math.PI * 2, n = n !== void 0 ? Math.max(3, n) : 8, i = i !== void 0 ? Math.max(1, i) : 1;
  const o = [], a = [], c = [], l = [];
  let h = e;
  const u = (t - e) / i, f = new b(), d = new H();
  for (let p = 0; p <= i; p++) {
    for (let x = 0; x <= n; x++) {
      const y = r + x / n * s;
      f.x = h * Math.cos(y), f.y = h * Math.sin(y), a.push(f.x, f.y, f.z), c.push(0, 0, 1), d.x = (f.x / t + 1) / 2, d.y = (f.y / t + 1) / 2, l.push(d.x, d.y);
    }
    h += u;
  }
  for (let p = 0; p < i; p++) {
    const x = p * (n + 1);
    for (let y = 0; y < n; y++) {
      const g = y + x, m = g, _ = g + n + 1, v = g + n + 2, w = g + 1;
      o.push(m, _, w), o.push(_, v, w);
    }
  }
  this.setIndex(o), this.setAttribute("position", new oe(a, 3)), this.setAttribute("normal", new oe(c, 3)), this.setAttribute("uv", new oe(l, 2));
}
Xr.prototype = Object.create(he.prototype);
Xr.prototype.constructor = Xr;
function Lo(e, t, n, i) {
  be.call(this), this.type = "LatheGeometry", this.parameters = {
    points: e,
    segments: t,
    phiStart: n,
    phiLength: i
  }, this.fromBufferGeometry(new Yr(e, t, n, i)), this.mergeVertices();
}
Lo.prototype = Object.create(be.prototype);
Lo.prototype.constructor = Lo;
function Yr(e, t, n, i) {
  he.call(this), this.type = "LatheBufferGeometry", this.parameters = {
    points: e,
    segments: t,
    phiStart: n,
    phiLength: i
  }, t = Math.floor(t) || 12, n = n || 0, i = i || Math.PI * 2, i = Ae.clamp(i, 0, Math.PI * 2);
  const r = [], s = [], o = [], a = 1 / t, c = new b(), l = new H();
  for (let h = 0; h <= t; h++) {
    const u = n + h * a * i, f = Math.sin(u), d = Math.cos(u);
    for (let p = 0; p <= e.length - 1; p++)
      c.x = e[p].x * f, c.y = e[p].y, c.z = e[p].x * d, s.push(c.x, c.y, c.z), l.x = h / t, l.y = p / (e.length - 1), o.push(l.x, l.y);
  }
  for (let h = 0; h < t; h++)
    for (let u = 0; u < e.length - 1; u++) {
      const f = u + h * e.length, d = f, p = f + e.length, x = f + e.length + 1, y = f + 1;
      r.push(d, p, y), r.push(p, x, y);
    }
  if (this.setIndex(r), this.setAttribute("position", new oe(s, 3)), this.setAttribute("uv", new oe(o, 2)), this.computeVertexNormals(), i === Math.PI * 2) {
    const h = this.attributes.normal.array, u = new b(), f = new b(), d = new b(), p = t * e.length * 3;
    for (let x = 0, y = 0; x < e.length; x++, y += 3)
      u.x = h[y + 0], u.y = h[y + 1], u.z = h[y + 2], f.x = h[p + y + 0], f.y = h[p + y + 1], f.z = h[p + y + 2], d.addVectors(u, f).normalize(), h[y + 0] = h[p + y + 0] = d.x, h[y + 1] = h[p + y + 1] = d.y, h[y + 2] = h[p + y + 2] = d.z;
  }
}
Yr.prototype = Object.create(he.prototype);
Yr.prototype.constructor = Yr;
function Vi(e, t) {
  be.call(this), this.type = "ShapeGeometry", typeof t == "object" && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = {
    shapes: e,
    curveSegments: t
  }, this.fromBufferGeometry(new Wi(e, t)), this.mergeVertices();
}
Vi.prototype = Object.create(be.prototype);
Vi.prototype.constructor = Vi;
Vi.prototype.toJSON = function() {
  const e = be.prototype.toJSON.call(this), t = this.parameters.shapes;
  return Ku(t, e);
};
function Wi(e, t) {
  he.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
    shapes: e,
    curveSegments: t
  }, t = t || 12;
  const n = [], i = [], r = [], s = [];
  let o = 0, a = 0;
  if (Array.isArray(e) === !1)
    c(e);
  else
    for (let l = 0; l < e.length; l++)
      c(e[l]), this.addGroup(o, a, l), o += a, a = 0;
  this.setIndex(n), this.setAttribute("position", new oe(i, 3)), this.setAttribute("normal", new oe(r, 3)), this.setAttribute("uv", new oe(s, 2));
  function c(l) {
    const h = i.length / 3, u = l.extractPoints(t);
    let f = u.shape;
    const d = u.holes;
    Dn.isClockWise(f) === !1 && (f = f.reverse());
    for (let x = 0, y = d.length; x < y; x++) {
      const g = d[x];
      Dn.isClockWise(g) === !0 && (d[x] = g.reverse());
    }
    const p = Dn.triangulateShape(f, d);
    for (let x = 0, y = d.length; x < y; x++) {
      const g = d[x];
      f = f.concat(g);
    }
    for (let x = 0, y = f.length; x < y; x++) {
      const g = f[x];
      i.push(g.x, g.y, 0), r.push(0, 0, 1), s.push(g.x, g.y);
    }
    for (let x = 0, y = p.length; x < y; x++) {
      const g = p[x], m = g[0] + h, _ = g[1] + h, v = g[2] + h;
      n.push(m, _, v), a += 3;
    }
  }
}
Wi.prototype = Object.create(he.prototype);
Wi.prototype.constructor = Wi;
Wi.prototype.toJSON = function() {
  const e = he.prototype.toJSON.call(this), t = this.parameters.shapes;
  return Ku(t, e);
};
function Ku(e, t) {
  if (t.shapes = [], Array.isArray(e))
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.shapes.push(r.uuid);
    }
  else
    t.shapes.push(e.uuid);
  return t;
}
function Co(e, t) {
  he.call(this), this.type = "EdgesGeometry", this.parameters = {
    thresholdAngle: t
  }, t = t !== void 0 ? t : 1;
  const n = [], i = Math.cos(Ae.DEG2RAD * t), r = [0, 0], s = {};
  let o, a, c;
  const l = ["a", "b", "c"];
  let h;
  e.isBufferGeometry ? (h = new be(), h.fromBufferGeometry(e)) : h = e.clone(), h.mergeVertices(), h.computeFaceNormals();
  const u = h.vertices, f = h.faces;
  for (let d = 0, p = f.length; d < p; d++) {
    const x = f[d];
    for (let y = 0; y < 3; y++)
      o = x[l[y]], a = x[l[(y + 1) % 3]], r[0] = Math.min(o, a), r[1] = Math.max(o, a), c = r[0] + "," + r[1], s[c] === void 0 ? s[c] = { index1: r[0], index2: r[1], face1: d, face2: void 0 } : s[c].face2 = d;
  }
  for (c in s) {
    const d = s[c];
    if (d.face2 === void 0 || f[d.face1].normal.dot(f[d.face2].normal) <= i) {
      let p = u[d.index1];
      n.push(p.x, p.y, p.z), p = u[d.index2], n.push(p.x, p.y, p.z);
    }
  }
  this.setAttribute("position", new oe(n, 3));
}
Co.prototype = Object.create(he.prototype);
Co.prototype.constructor = Co;
function ji(e, t, n, i, r, s, o, a) {
  be.call(this), this.type = "CylinderGeometry", this.parameters = {
    radiusTop: e,
    radiusBottom: t,
    height: n,
    radialSegments: i,
    heightSegments: r,
    openEnded: s,
    thetaStart: o,
    thetaLength: a
  }, this.fromBufferGeometry(new Gn(e, t, n, i, r, s, o, a)), this.mergeVertices();
}
ji.prototype = Object.create(be.prototype);
ji.prototype.constructor = ji;
function Gn(e, t, n, i, r, s, o, a) {
  he.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
    radiusTop: e,
    radiusBottom: t,
    height: n,
    radialSegments: i,
    heightSegments: r,
    openEnded: s,
    thetaStart: o,
    thetaLength: a
  };
  const c = this;
  e = e !== void 0 ? e : 1, t = t !== void 0 ? t : 1, n = n || 1, i = Math.floor(i) || 8, r = Math.floor(r) || 1, s = s !== void 0 ? s : !1, o = o !== void 0 ? o : 0, a = a !== void 0 ? a : Math.PI * 2;
  const l = [], h = [], u = [], f = [];
  let d = 0;
  const p = [], x = n / 2;
  let y = 0;
  g(), s === !1 && (e > 0 && m(!0), t > 0 && m(!1)), this.setIndex(l), this.setAttribute("position", new oe(h, 3)), this.setAttribute("normal", new oe(u, 3)), this.setAttribute("uv", new oe(f, 2));
  function g() {
    const _ = new b(), v = new b();
    let w = 0;
    const A = (t - e) / n;
    for (let E = 0; E <= r; E++) {
      const U = [], L = E / r, q = L * (t - e) + e;
      for (let O = 0; O <= i; O++) {
        const N = O / i, D = N * a + o, R = Math.sin(D), C = Math.cos(D);
        v.x = q * R, v.y = -L * n + x, v.z = q * C, h.push(v.x, v.y, v.z), _.set(R, A, C).normalize(), u.push(_.x, _.y, _.z), f.push(N, 1 - L), U.push(d++);
      }
      p.push(U);
    }
    for (let E = 0; E < i; E++)
      for (let U = 0; U < r; U++) {
        const L = p[U][E], q = p[U + 1][E], O = p[U + 1][E + 1], N = p[U][E + 1];
        l.push(L, q, N), l.push(q, O, N), w += 6;
      }
    c.addGroup(y, w, 0), y += w;
  }
  function m(_) {
    let v, w;
    const A = new H(), E = new b();
    let U = 0;
    const L = _ === !0 ? e : t, q = _ === !0 ? 1 : -1;
    v = d;
    for (let O = 1; O <= i; O++)
      h.push(0, x * q, 0), u.push(0, q, 0), f.push(0.5, 0.5), d++;
    w = d;
    for (let O = 0; O <= i; O++) {
      const D = O / i * a + o, R = Math.cos(D), C = Math.sin(D);
      E.x = L * C, E.y = x * q, E.z = L * R, h.push(E.x, E.y, E.z), u.push(0, q, 0), A.x = R * 0.5 + 0.5, A.y = C * 0.5 * q + 0.5, f.push(A.x, A.y), d++;
    }
    for (let O = 0; O < i; O++) {
      const N = v + O, D = w + O;
      _ === !0 ? l.push(D, D + 1, N) : l.push(D + 1, D, N), U += 3;
    }
    c.addGroup(y, U, _ === !0 ? 1 : 2), y += U;
  }
}
Gn.prototype = Object.create(he.prototype);
Gn.prototype.constructor = Gn;
function Ro(e, t, n, i, r, s, o) {
  ji.call(this, 0, e, t, n, i, r, s, o), this.type = "ConeGeometry", this.parameters = {
    radius: e,
    height: t,
    radialSegments: n,
    heightSegments: i,
    openEnded: r,
    thetaStart: s,
    thetaLength: o
  };
}
Ro.prototype = Object.create(ji.prototype);
Ro.prototype.constructor = Ro;
function Po(e, t, n, i, r, s, o) {
  Gn.call(this, 0, e, t, n, i, r, s, o), this.type = "ConeBufferGeometry", this.parameters = {
    radius: e,
    height: t,
    radialSegments: n,
    heightSegments: i,
    openEnded: r,
    thetaStart: s,
    thetaLength: o
  };
}
Po.prototype = Object.create(Gn.prototype);
Po.prototype.constructor = Po;
function Io(e, t, n, i) {
  be.call(this), this.type = "CircleGeometry", this.parameters = {
    radius: e,
    segments: t,
    thetaStart: n,
    thetaLength: i
  }, this.fromBufferGeometry(new Jr(e, t, n, i)), this.mergeVertices();
}
Io.prototype = Object.create(be.prototype);
Io.prototype.constructor = Io;
function Jr(e, t, n, i) {
  he.call(this), this.type = "CircleBufferGeometry", this.parameters = {
    radius: e,
    segments: t,
    thetaStart: n,
    thetaLength: i
  }, e = e || 1, t = t !== void 0 ? Math.max(3, t) : 8, n = n !== void 0 ? n : 0, i = i !== void 0 ? i : Math.PI * 2;
  const r = [], s = [], o = [], a = [], c = new b(), l = new H();
  s.push(0, 0, 0), o.push(0, 0, 1), a.push(0.5, 0.5);
  for (let h = 0, u = 3; h <= t; h++, u += 3) {
    const f = n + h / t * i;
    c.x = e * Math.cos(f), c.y = e * Math.sin(f), s.push(c.x, c.y, c.z), o.push(0, 0, 1), l.x = (s[u] / e + 1) / 2, l.y = (s[u + 1] / e + 1) / 2, a.push(l.x, l.y);
  }
  for (let h = 1; h <= t; h++)
    r.push(h, h + 1, 0);
  this.setIndex(r), this.setAttribute("position", new oe(s, 3)), this.setAttribute("normal", new oe(o, 3)), this.setAttribute("uv", new oe(a, 2));
}
Jr.prototype = Object.create(he.prototype);
Jr.prototype.constructor = Jr;
var mt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WireframeGeometry: go,
  ParametricGeometry: yo,
  ParametricBufferGeometry: Br,
  TetrahedronGeometry: vo,
  TetrahedronBufferGeometry: Fr,
  OctahedronGeometry: _o,
  OctahedronBufferGeometry: Gi,
  IcosahedronGeometry: bo,
  IcosahedronBufferGeometry: Ur,
  DodecahedronGeometry: wo,
  DodecahedronBufferGeometry: Gr,
  PolyhedronGeometry: xo,
  PolyhedronBufferGeometry: St,
  TubeGeometry: Mo,
  TubeBufferGeometry: zi,
  TorusKnotGeometry: So,
  TorusKnotBufferGeometry: zr,
  TorusGeometry: To,
  TorusBufferGeometry: kr,
  TextGeometry: Eo,
  TextBufferGeometry: jr,
  SphereGeometry: qr,
  SphereBufferGeometry: Hi,
  RingGeometry: Ao,
  RingBufferGeometry: Xr,
  PlaneGeometry: ho,
  PlaneBufferGeometry: Ui,
  LatheGeometry: Lo,
  LatheBufferGeometry: Yr,
  ShapeGeometry: Vi,
  ShapeBufferGeometry: Wi,
  ExtrudeGeometry: ki,
  ExtrudeBufferGeometry: dn,
  EdgesGeometry: Co,
  ConeGeometry: Ro,
  ConeBufferGeometry: Po,
  CylinderGeometry: ji,
  CylinderBufferGeometry: Gn,
  CircleGeometry: Io,
  CircleBufferGeometry: Jr,
  BoxGeometry: hd,
  BoxBufferGeometry: Zo
});
function qi(e) {
  _e.call(this), this.type = "ShadowMaterial", this.color = new fe(0), this.transparent = !0, this.setValues(e);
}
qi.prototype = Object.create(_e.prototype);
qi.prototype.constructor = qi;
qi.prototype.isShadowMaterial = !0;
qi.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.color.copy(e.color), this;
};
function zn(e) {
  _t.call(this, e), this.type = "RawShaderMaterial";
}
zn.prototype = Object.create(_t.prototype);
zn.prototype.constructor = zn;
zn.prototype.isRawShaderMaterial = !0;
function Ht(e) {
  _e.call(this), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new fe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new fe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = er, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.vertexTangents = !1, this.setValues(e);
}
Ht.prototype = Object.create(_e.prototype);
Ht.prototype.constructor = Ht;
Ht.prototype.isMeshStandardMaterial = !0;
Ht.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.vertexTangents = e.vertexTangents, this;
};
function ii(e) {
  Ht.call(this), this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new H(1, 1), this.clearcoatNormalMap = null, this.reflectivity = 0.5, this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(e);
}
ii.prototype = Object.create(Ht.prototype);
ii.prototype.constructor = ii;
ii.prototype.isMeshPhysicalMaterial = !0;
ii.prototype.copy = function(e) {
  return Ht.prototype.copy.call(this, e), this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.reflectivity = e.reflectivity, e.sheen ? this.sheen = (this.sheen || new fe()).copy(e.sheen) : this.sheen = null, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this;
};
function ri(e) {
  _e.call(this), this.type = "MeshPhongMaterial", this.color = new fe(16777215), this.specular = new fe(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new fe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = er, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = jo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
ri.prototype = Object.create(_e.prototype);
ri.prototype.constructor = ri;
ri.prototype.isMeshPhongMaterial = !0;
ri.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function Xi(e) {
  _e.call(this), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new fe(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new fe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = er, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
Xi.prototype = Object.create(_e.prototype);
Xi.prototype.constructor = Xi;
Xi.prototype.isMeshToonMaterial = !0;
Xi.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function Yi(e) {
  _e.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = er, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
Yi.prototype = Object.create(_e.prototype);
Yi.prototype.constructor = Yi;
Yi.prototype.isMeshNormalMaterial = !0;
Yi.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function Ji(e) {
  _e.call(this), this.type = "MeshLambertMaterial", this.color = new fe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new fe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = jo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
Ji.prototype = Object.create(_e.prototype);
Ji.prototype.constructor = Ji;
Ji.prototype.isMeshLambertMaterial = !0;
Ji.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function Zi(e) {
  _e.call(this), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new fe(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = er, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
Zi.prototype = Object.create(_e.prototype);
Zi.prototype.constructor = Zi;
Zi.prototype.isMeshMatcapMaterial = !0;
Zi.prototype.copy = function(e) {
  return _e.prototype.copy.call(this, e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function $i(e) {
  Qe.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
}
$i.prototype = Object.create(Qe.prototype);
$i.prototype.constructor = $i;
$i.prototype.isLineDashedMaterial = !0;
$i.prototype.copy = function(e) {
  return Qe.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
};
var Ry = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ShadowMaterial: qi,
  SpriteMaterial: ni,
  RawShaderMaterial: zn,
  ShaderMaterial: _t,
  PointsMaterial: Fn,
  MeshPhysicalMaterial: ii,
  MeshStandardMaterial: Ht,
  MeshPhongMaterial: ri,
  MeshToonMaterial: Xi,
  MeshNormalMaterial: Yi,
  MeshLambertMaterial: Ji,
  MeshDepthMaterial: Kn,
  MeshDistanceMaterial: ei,
  MeshBasicMaterial: Pt,
  MeshMatcapMaterial: Zi,
  LineDashedMaterial: $i,
  LineBasicMaterial: Qe,
  Material: _e
});
const je = {
  // same as Array.prototype.slice, but also works on typed arrays
  arraySlice: function(e, t, n) {
    return je.isTypedArray(e) ? new e.constructor(e.subarray(t, n !== void 0 ? n : e.length)) : e.slice(t, n);
  },
  // converts an array to a specific type
  convertArray: function(e, t, n) {
    return !e || // let 'undefined' and 'null' pass
    !n && e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
  },
  isTypedArray: function(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  },
  // returns an array by which times and values can be sorted
  getKeyframeOrder: function(e) {
    function t(r, s) {
      return e[r] - e[s];
    }
    const n = e.length, i = new Array(n);
    for (let r = 0; r !== n; ++r)
      i[r] = r;
    return i.sort(t), i;
  },
  // uses the array previously returned by 'getKeyframeOrder' to sort data
  sortedArray: function(e, t, n) {
    const i = e.length, r = new e.constructor(i);
    for (let s = 0, o = 0; o !== i; ++s) {
      const a = n[s] * t;
      for (let c = 0; c !== t; ++c)
        r[o++] = e[a + c];
    }
    return r;
  },
  // function for parsing AOS keyframe formats
  flattenJSON: function(e, t, n, i) {
    let r = 1, s = e[0];
    for (; s !== void 0 && s[i] === void 0; )
      s = e[r++];
    if (s === void 0)
      return;
    let o = s[i];
    if (o !== void 0)
      if (Array.isArray(o))
        do
          o = s[i], o !== void 0 && (t.push(s.time), n.push.apply(n, o)), s = e[r++];
        while (s !== void 0);
      else if (o.toArray !== void 0)
        do
          o = s[i], o !== void 0 && (t.push(s.time), o.toArray(n, n.length)), s = e[r++];
        while (s !== void 0);
      else
        do
          o = s[i], o !== void 0 && (t.push(s.time), n.push(o)), s = e[r++];
        while (s !== void 0);
  },
  subclip: function(e, t, n, i, r) {
    r = r || 30;
    const s = e.clone();
    s.name = t;
    const o = [];
    for (let c = 0; c < s.tracks.length; ++c) {
      const l = s.tracks[c], h = l.getValueSize(), u = [], f = [];
      for (let d = 0; d < l.times.length; ++d) {
        const p = l.times[d] * r;
        if (!(p < n || p >= i)) {
          u.push(l.times[d]);
          for (let x = 0; x < h; ++x)
            f.push(l.values[d * h + x]);
        }
      }
      u.length !== 0 && (l.times = je.convertArray(u, l.times.constructor), l.values = je.convertArray(f, l.values.constructor), o.push(l));
    }
    s.tracks = o;
    let a = 1 / 0;
    for (let c = 0; c < s.tracks.length; ++c)
      a > s.tracks[c].times[0] && (a = s.tracks[c].times[0]);
    for (let c = 0; c < s.tracks.length; ++c)
      s.tracks[c].shift(-1 * a);
    return s.resetDuration(), s;
  },
  makeClipAdditive: function(e, t, n, i) {
    t === void 0 && (t = 0), n === void 0 && (n = e), (i === void 0 || i <= 0) && (i = 30);
    const r = e.tracks.length, s = t / i;
    for (let o = 0; o < r; ++o) {
      const a = n.tracks[o], c = a.ValueTypeName;
      if (c === "bool" || c === "string")
        continue;
      const l = e.tracks.find(function(p) {
        return p.name === a.name && p.ValueTypeName === c;
      });
      if (l === void 0)
        continue;
      const h = a.getValueSize(), u = a.times.length - 1;
      let f;
      if (s <= a.times[0])
        f = je.arraySlice(a.values, 0, a.valueSize);
      else if (s >= a.times[u]) {
        const p = u * h;
        f = je.arraySlice(a.values, p);
      } else {
        const p = a.createInterpolant();
        p.evaluate(s), f = p.resultBuffer;
      }
      c === "quaternion" && new at(
        f[0],
        f[1],
        f[2],
        f[3]
      ).normalize().conjugate().toArray(f);
      const d = l.times.length;
      for (let p = 0; p < d; ++p) {
        const x = p * h;
        if (c === "quaternion")
          at.multiplyQuaternionsFlat(
            l.values,
            x,
            f,
            0,
            l.values,
            x
          );
        else
          for (let y = 0; y < h; ++y)
            l.values[x + y] -= f[y];
      }
    }
    return e.blendMode = Ru, e;
  }
};
function Rt(e, t, n, i) {
  this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n;
}
Object.assign(Rt.prototype, {
  evaluate: function(e) {
    let t = this.parameterPositions, n = this._cachedIndex, i = t[n], r = t[n - 1];
    e: {
      t: {
        let s;
        n: {
          i:
            if (!(e < i)) {
              for (let o = n + 2; ; ) {
                if (i === void 0) {
                  if (e < r)
                    break i;
                  return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, r);
                }
                if (n === o)
                  break;
                if (r = i, i = t[++n], e < i)
                  break t;
              }
              s = t.length;
              break n;
            }
          if (!(e >= r)) {
            const o = t[1];
            e < o && (n = 2, r = o);
            for (let a = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.beforeStart_(0, e, i);
              if (n === a)
                break;
              if (i = r, r = t[--n - 1], e >= r)
                break t;
            }
            s = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < s; ) {
          const o = n + s >>> 1;
          e < t[o] ? s = o : n = o + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.beforeStart_(0, e, i);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, e);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  },
  settings: null,
  // optional, subclass-specific settings structure
  // Note: The indirection allows central control of many interpolants.
  // --- Protected interface
  DefaultSettings_: {},
  getSettings_: function() {
    return this.settings || this.DefaultSettings_;
  },
  copySampleValue_: function(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let s = 0; s !== i; ++s)
      t[s] = n[r + s];
    return t;
  },
  // Template methods for derived classes:
  interpolate_: function() {
    throw new Error("call to abstract method");
  },
  intervalChanged_: function() {
  }
});
Object.assign(Rt.prototype, {
  //( 0, t, t0 ), returns this.resultBuffer
  beforeStart_: Rt.prototype.copySampleValue_,
  //( N-1, tN-1, t ), returns this.resultBuffer
  afterEnd_: Rt.prototype.copySampleValue_
});
function ec(e, t, n, i) {
  Rt.call(this, e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0;
}
ec.prototype = Object.assign(Object.create(Rt.prototype), {
  constructor: ec,
  DefaultSettings_: {
    endingStart: Ni,
    endingEnd: Ni
  },
  intervalChanged_: function(e, t, n) {
    let i = this.parameterPositions, r = e - 2, s = e + 1, o = i[r], a = i[s];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Ai:
          r = e, o = 2 * t - n;
          break;
        case lo:
          r = i.length - 2, o = t + i[r] - i[r + 1];
          break;
        default:
          r = e, o = n;
      }
    if (a === void 0)
      switch (this.getSettings_().endingEnd) {
        case Ai:
          s = e, a = 2 * n - t;
          break;
        case lo:
          s = 1, a = n + i[1] - i[0];
          break;
        default:
          s = e - 1, a = t;
      }
    const c = (n - t) * 0.5, l = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (a - n), this._offsetPrev = r * l, this._offsetNext = s * l;
  },
  interpolate_: function(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, o = this.valueSize, a = e * o, c = a - o, l = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, f = this._weightNext, d = (n - t) / (i - t), p = d * d, x = p * d, y = -u * x + 2 * u * p - u * d, g = (1 + u) * x + (-1.5 - 2 * u) * p + (-0.5 + u) * d + 1, m = (-1 - f) * x + (1.5 + f) * p + 0.5 * d, _ = f * x - f * p;
    for (let v = 0; v !== o; ++v)
      r[v] = y * s[l + v] + g * s[c + v] + m * s[a + v] + _ * s[h + v];
    return r;
  }
});
function Oo(e, t, n, i) {
  Rt.call(this, e, t, n, i);
}
Oo.prototype = Object.assign(Object.create(Rt.prototype), {
  constructor: Oo,
  interpolate_: function(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, o = this.valueSize, a = e * o, c = a - o, l = (n - t) / (i - t), h = 1 - l;
    for (let u = 0; u !== o; ++u)
      r[u] = s[c + u] * h + s[a + u] * l;
    return r;
  }
});
function tc(e, t, n, i) {
  Rt.call(this, e, t, n, i);
}
tc.prototype = Object.assign(Object.create(Rt.prototype), {
  constructor: tc,
  interpolate_: function(e) {
    return this.copySampleValue_(e - 1);
  }
});
function pt(e, t, n, i) {
  if (e === void 0)
    throw new Error("THREE.KeyframeTrack: track name is undefined");
  if (t === void 0 || t.length === 0)
    throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
  this.name = e, this.times = je.convertArray(t, this.TimeBufferType), this.values = je.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
}
Object.assign(pt, {
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  toJSON: function(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== void 0)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: je.convertArray(e.times, Array),
        values: je.convertArray(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
});
Object.assign(pt.prototype, {
  constructor: pt,
  TimeBufferType: Float32Array,
  ValueBufferType: Float32Array,
  DefaultInterpolation: io,
  InterpolantFactoryMethodDiscrete: function(e) {
    return new tc(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodLinear: function(e) {
    return new Oo(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodSmooth: function(e) {
    return new ec(this.times, this.values, this.getValueSize(), e);
  },
  setInterpolation: function(e) {
    let t;
    switch (e) {
      case co:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case io:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case ta:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  },
  getInterpolation: function() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return co;
      case this.InterpolantFactoryMethodLinear:
        return io;
      case this.InterpolantFactoryMethodSmooth:
        return ta;
    }
  },
  getValueSize: function() {
    return this.values.length / this.times.length;
  },
  // move all keyframes either forwards or backwards in time
  shift: function(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  },
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale: function(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  },
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim: function(e, t) {
    const n = this.times, i = n.length;
    let r = 0, s = i - 1;
    for (; r !== i && n[r] < e; )
      ++r;
    for (; s !== -1 && n[s] > t; )
      --s;
    if (++s, r !== 0 || s !== i) {
      r >= s && (s = Math.max(s, 1), r = s - 1);
      const o = this.getValueSize();
      this.times = je.arraySlice(n, r, s), this.values = je.arraySlice(this.values, r * o, s * o);
    }
    return this;
  },
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate: function() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let s = null;
    for (let o = 0; o !== r; o++) {
      const a = n[o];
      if (typeof a == "number" && isNaN(a)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, a), e = !1;
        break;
      }
      if (s !== null && s > a) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, a, s), e = !1;
        break;
      }
      s = a;
    }
    if (i !== void 0 && je.isTypedArray(i))
      for (let o = 0, a = i.length; o !== a; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  },
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize: function() {
    const e = je.arraySlice(this.times), t = je.arraySlice(this.values), n = this.getValueSize(), i = this.getInterpolation() === ta, r = e.length - 1;
    let s = 1;
    for (let o = 1; o < r; ++o) {
      let a = !1;
      const c = e[o], l = e[o + 1];
      if (c !== l && (o !== 1 || c !== c[0]))
        if (i)
          a = !0;
        else {
          const h = o * n, u = h - n, f = h + n;
          for (let d = 0; d !== n; ++d) {
            const p = t[h + d];
            if (p !== t[u + d] || p !== t[f + d]) {
              a = !0;
              break;
            }
          }
        }
      if (a) {
        if (o !== s) {
          e[s] = e[o];
          const h = o * n, u = s * n;
          for (let f = 0; f !== n; ++f)
            t[u + f] = t[h + f];
        }
        ++s;
      }
    }
    if (r > 0) {
      e[s] = e[r];
      for (let o = r * n, a = s * n, c = 0; c !== n; ++c)
        t[a + c] = t[o + c];
      ++s;
    }
    return s !== e.length ? (this.times = je.arraySlice(e, 0, s), this.values = je.arraySlice(t, 0, s * n)) : (this.times = e, this.values = t), this;
  },
  clone: function() {
    const e = je.arraySlice(this.times, 0), t = je.arraySlice(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
});
function nc(e, t, n) {
  pt.call(this, e, t, n);
}
nc.prototype = Object.assign(Object.create(pt.prototype), {
  constructor: nc,
  ValueTypeName: "bool",
  ValueBufferType: Array,
  DefaultInterpolation: co,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
  // Note: Actually this track could have a optimized / compressed
  // representation of a single value and a custom interpolant that
  // computes "firstValue ^ isOdd( index )".
});
function ic(e, t, n, i) {
  pt.call(this, e, t, n, i);
}
ic.prototype = Object.assign(Object.create(pt.prototype), {
  constructor: ic,
  ValueTypeName: "color"
  // ValueBufferType is inherited
  // DefaultInterpolation is inherited
  // Note: Very basic implementation and nothing special yet.
  // However, this is the place for color space parameterization.
});
function Zr(e, t, n, i) {
  pt.call(this, e, t, n, i);
}
Zr.prototype = Object.assign(Object.create(pt.prototype), {
  constructor: Zr,
  ValueTypeName: "number"
  // ValueBufferType is inherited
  // DefaultInterpolation is inherited
});
function rc(e, t, n, i) {
  Rt.call(this, e, t, n, i);
}
rc.prototype = Object.assign(Object.create(Rt.prototype), {
  constructor: rc,
  interpolate_: function(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, o = this.valueSize, a = (n - t) / (i - t);
    let c = e * o;
    for (let l = c + o; c !== l; c += 4)
      at.slerpFlat(r, 0, s, c - o, s, c, a);
    return r;
  }
});
function Do(e, t, n, i) {
  pt.call(this, e, t, n, i);
}
Do.prototype = Object.assign(Object.create(pt.prototype), {
  constructor: Do,
  ValueTypeName: "quaternion",
  // ValueBufferType is inherited
  DefaultInterpolation: io,
  InterpolantFactoryMethodLinear: function(e) {
    return new rc(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodSmooth: void 0
  // not yet implemented
});
function sc(e, t, n, i) {
  pt.call(this, e, t, n, i);
}
sc.prototype = Object.assign(Object.create(pt.prototype), {
  constructor: sc,
  ValueTypeName: "string",
  ValueBufferType: Array,
  DefaultInterpolation: co,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
});
function $r(e, t, n, i) {
  pt.call(this, e, t, n, i);
}
$r.prototype = Object.assign(Object.create(pt.prototype), {
  constructor: $r,
  ValueTypeName: "vector"
  // ValueBufferType is inherited
  // DefaultInterpolation is inherited
});
function zt(e, t, n, i) {
  this.name = e, this.tracks = n, this.duration = t !== void 0 ? t : -1, this.blendMode = i !== void 0 ? i : Pc, this.uuid = Ae.generateUUID(), this.duration < 0 && this.resetDuration();
}
function Py(e) {
  switch (e.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Zr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return $r;
    case "color":
      return ic;
    case "quaternion":
      return Do;
    case "bool":
    case "boolean":
      return nc;
    case "string":
      return sc;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
}
function Iy(e) {
  if (e.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = Py(e.type);
  if (e.times === void 0) {
    const n = [], i = [];
    je.flattenJSON(e.keys, n, i, "value"), e.times = n, e.values = i;
  }
  return t.parse !== void 0 ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation);
}
Object.assign(zt, {
  parse: function(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let r = 0, s = n.length; r !== s; ++r)
      t.push(Iy(n[r]).scale(i));
    return new zt(e.name, e.duration, t, e.blendMode);
  },
  toJSON: function(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, s = n.length; r !== s; ++r)
      t.push(pt.toJSON(n[r]));
    return i;
  },
  CreateFromMorphTargetSequence: function(e, t, n, i) {
    const r = t.length, s = [];
    for (let o = 0; o < r; o++) {
      let a = [], c = [];
      a.push(
        (o + r - 1) % r,
        o,
        (o + 1) % r
      ), c.push(0, 1, 0);
      const l = je.getKeyframeOrder(a);
      a = je.sortedArray(a, 1, l), c = je.sortedArray(c, 1, l), !i && a[0] === 0 && (a.push(r), c.push(c[0])), s.push(
        new Zr(
          ".morphTargetInfluences[" + t[o].name + "]",
          a,
          c
        ).scale(1 / n)
      );
    }
    return new zt(e, -1, s);
  },
  findByName: function(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  },
  CreateClipsFromMorphTargetSequences: function(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, a = e.length; o < a; o++) {
      const c = e[o], l = c.name.match(r);
      if (l && l.length > 1) {
        const h = l[1];
        let u = i[h];
        u || (i[h] = u = []), u.push(c);
      }
    }
    const s = [];
    for (const o in i)
      s.push(zt.CreateFromMorphTargetSequence(o, i[o], t, n));
    return s;
  },
  // parse the animation.hierarchy format
  parseAnimation: function(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, u, f, d, p) {
      if (f.length !== 0) {
        const x = [], y = [];
        je.flattenJSON(f, x, y, d), x.length !== 0 && p.push(new h(u, x, y));
      }
    }, i = [], r = e.name || "default", s = e.fps || 30, o = e.blendMode;
    let a = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const u = c[h].keys;
      if (!(!u || u.length === 0))
        if (u[0].morphTargets) {
          const f = {};
          let d;
          for (d = 0; d < u.length; d++)
            if (u[d].morphTargets)
              for (let p = 0; p < u[d].morphTargets.length; p++)
                f[u[d].morphTargets[p]] = -1;
          for (const p in f) {
            const x = [], y = [];
            for (let g = 0; g !== u[d].morphTargets.length; ++g) {
              const m = u[d];
              x.push(m.time), y.push(m.morphTarget === p ? 1 : 0);
            }
            i.push(new Zr(".morphTargetInfluence[" + p + "]", x, y));
          }
          a = f.length * (s || 1);
        } else {
          const f = ".bones[" + t[h].name + "]";
          n(
            $r,
            f + ".position",
            u,
            "pos",
            i
          ), n(
            Do,
            f + ".quaternion",
            u,
            "rot",
            i
          ), n(
            $r,
            f + ".scale",
            u,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new zt(r, a, i, o);
  }
});
Object.assign(zt.prototype, {
  resetDuration: function() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  },
  trim: function() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  },
  validate: function() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  },
  optimize: function() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  },
  clone: function() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new zt(this.name, this.duration, e, this.blendMode);
  }
});
const pn = {
  enabled: !1,
  files: {},
  add: function(e, t) {
    this.enabled !== !1 && (this.files[e] = t);
  },
  get: function(e) {
    if (this.enabled !== !1)
      return this.files[e];
  },
  remove: function(e) {
    delete this.files[e];
  },
  clear: function() {
    this.files = {};
  }
};
function eh(e, t, n) {
  const i = this;
  let r = !1, s = 0, o = 0, a;
  const c = [];
  this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(l) {
    o++, r === !1 && i.onStart !== void 0 && i.onStart(l, s, o), r = !0;
  }, this.itemEnd = function(l) {
    s++, i.onProgress !== void 0 && i.onProgress(l, s, o), s === o && (r = !1, i.onLoad !== void 0 && i.onLoad());
  }, this.itemError = function(l) {
    i.onError !== void 0 && i.onError(l);
  }, this.resolveURL = function(l) {
    return a ? a(l) : l;
  }, this.setURLModifier = function(l) {
    return a = l, this;
  }, this.addHandler = function(l, h) {
    return c.push(l, h), this;
  }, this.removeHandler = function(l) {
    const h = c.indexOf(l);
    return h !== -1 && c.splice(h, 2), this;
  }, this.getHandler = function(l) {
    for (let h = 0, u = c.length; h < u; h += 2) {
      const f = c[h], d = c[h + 1];
      if (f.global && (f.lastIndex = 0), f.test(l))
        return d;
    }
    return null;
  };
}
const Oy = new eh();
function Ne(e) {
  this.manager = e !== void 0 ? e : Oy, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = "", this.requestHeader = {};
}
Object.assign(Ne.prototype, {
  load: function() {
  },
  loadAsync: function(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  },
  parse: function() {
  },
  setCrossOrigin: function(e) {
    return this.crossOrigin = e, this;
  },
  setPath: function(e) {
    return this.path = e, this;
  },
  setResourcePath: function(e) {
    return this.resourcePath = e, this;
  },
  setRequestHeader: function(e) {
    return this.requestHeader = e, this;
  }
});
const Ut = {};
function Vt(e) {
  Ne.call(this, e);
}
Vt.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: Vt,
  load: function(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = pn.get(e);
    if (s !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(s), r.manager.itemEnd(e);
      }, 0), s;
    if (Ut[e] !== void 0) {
      Ut[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    const o = /^data:(.*?)(;base64)?,(.*)$/, a = e.match(o);
    let c;
    if (a) {
      const l = a[1], h = !!a[2];
      let u = a[3];
      u = decodeURIComponent(u), h && (u = atob(u));
      try {
        let f;
        const d = (this.responseType || "").toLowerCase();
        switch (d) {
          case "arraybuffer":
          case "blob":
            const p = new Uint8Array(u.length);
            for (let y = 0; y < u.length; y++)
              p[y] = u.charCodeAt(y);
            d === "blob" ? f = new Blob([p.buffer], { type: l }) : f = p.buffer;
            break;
          case "document":
            f = new DOMParser().parseFromString(u, l);
            break;
          case "json":
            f = JSON.parse(u);
            break;
          default:
            f = u;
            break;
        }
        setTimeout(function() {
          t && t(f), r.manager.itemEnd(e);
        }, 0);
      } catch (f) {
        setTimeout(function() {
          i && i(f), r.manager.itemError(e), r.manager.itemEnd(e);
        }, 0);
      }
    } else {
      Ut[e] = [], Ut[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      }), c = new XMLHttpRequest(), c.open("GET", e, !0), c.addEventListener("load", function(l) {
        const h = this.response, u = Ut[e];
        if (delete Ut[e], this.status === 200 || this.status === 0) {
          this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), pn.add(e, h);
          for (let f = 0, d = u.length; f < d; f++) {
            const p = u[f];
            p.onLoad && p.onLoad(h);
          }
          r.manager.itemEnd(e);
        } else {
          for (let f = 0, d = u.length; f < d; f++) {
            const p = u[f];
            p.onError && p.onError(l);
          }
          r.manager.itemError(e), r.manager.itemEnd(e);
        }
      }, !1), c.addEventListener("progress", function(l) {
        const h = Ut[e];
        for (let u = 0, f = h.length; u < f; u++) {
          const d = h[u];
          d.onProgress && d.onProgress(l);
        }
      }, !1), c.addEventListener("error", function(l) {
        const h = Ut[e];
        delete Ut[e];
        for (let u = 0, f = h.length; u < f; u++) {
          const d = h[u];
          d.onError && d.onError(l);
        }
        r.manager.itemError(e), r.manager.itemEnd(e);
      }, !1), c.addEventListener("abort", function(l) {
        const h = Ut[e];
        delete Ut[e];
        for (let u = 0, f = h.length; u < f; u++) {
          const d = h[u];
          d.onError && d.onError(l);
        }
        r.manager.itemError(e), r.manager.itemEnd(e);
      }, !1), this.responseType !== void 0 && (c.responseType = this.responseType), this.withCredentials !== void 0 && (c.withCredentials = this.withCredentials), c.overrideMimeType && c.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
      for (const l in this.requestHeader)
        c.setRequestHeader(l, this.requestHeader[l]);
      c.send(null);
    }
    return r.manager.itemStart(e), c;
  },
  setResponseType: function(e) {
    return this.responseType = e, this;
  },
  setWithCredentials: function(e) {
    return this.withCredentials = e, this;
  },
  setMimeType: function(e) {
    return this.mimeType = e, this;
  }
});
function Wl(e) {
  Ne.call(this, e);
}
Wl.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: Wl,
  load: function(e, t, n, i) {
    const r = this, s = new Vt(r.manager);
    s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.load(e, function(o) {
      try {
        t(r.parse(JSON.parse(o)));
      } catch (a) {
        i ? i(a) : console.error(a), r.manager.itemError(e);
      }
    }, n, i);
  },
  parse: function(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const i = zt.parse(e[n]);
      t.push(i);
    }
    return t;
  }
});
function jl(e) {
  Ne.call(this, e);
}
jl.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: jl,
  load: function(e, t, n, i) {
    const r = this, s = [], o = new Dr();
    o.image = s;
    const a = new Vt(this.manager);
    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader);
    let c = 0;
    function l(h) {
      a.load(e[h], function(u) {
        const f = r.parse(u, !0);
        s[h] = {
          width: f.width,
          height: f.height,
          format: f.format,
          mipmaps: f.mipmaps
        }, c += 1, c === 6 && (f.mipmapCount === 1 && (o.minFilter = dt), o.format = f.format, o.needsUpdate = !0, t && t(o));
      }, n, i);
    }
    if (Array.isArray(e))
      for (let h = 0, u = e.length; h < u; ++h)
        l(h);
    else
      a.load(e, function(h) {
        const u = r.parse(h, !0);
        if (u.isCubemap) {
          const f = u.mipmaps.length / u.mipmapCount;
          for (let d = 0; d < f; d++) {
            s[d] = { mipmaps: [] };
            for (let p = 0; p < u.mipmapCount; p++)
              s[d].mipmaps.push(u.mipmaps[d * u.mipmapCount + p]), s[d].format = u.format, s[d].width = u.width, s[d].height = u.height;
          }
        } else
          o.image.width = u.width, o.image.height = u.height, o.mipmaps = u.mipmaps;
        u.mipmapCount === 1 && (o.minFilter = dt), o.format = u.format, o.needsUpdate = !0, t && t(o);
      }, n, i);
    return o;
  }
});
function ql(e) {
  Ne.call(this, e);
}
ql.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: ql,
  load: function(e, t, n, i) {
    const r = this, s = new Fi(), o = new Vt(this.manager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.load(e, function(a) {
      const c = r.parse(a);
      c && (c.image !== void 0 ? s.image = c.image : c.data !== void 0 && (s.image.width = c.width, s.image.height = c.height, s.image.data = c.data), s.wrapS = c.wrapS !== void 0 ? c.wrapS : xt, s.wrapT = c.wrapT !== void 0 ? c.wrapT : xt, s.magFilter = c.magFilter !== void 0 ? c.magFilter : dt, s.minFilter = c.minFilter !== void 0 ? c.minFilter : dt, s.anisotropy = c.anisotropy !== void 0 ? c.anisotropy : 1, c.format !== void 0 && (s.format = c.format), c.type !== void 0 && (s.type = c.type), c.mipmaps !== void 0 && (s.mipmaps = c.mipmaps, s.minFilter = Xo), c.mipmapCount === 1 && (s.minFilter = dt), s.needsUpdate = !0, t && t(s, c));
    }, n, i), s;
  }
});
function Qr(e) {
  Ne.call(this, e);
}
Qr.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: Qr,
  load: function(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = pn.get(e);
    if (s !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(s), r.manager.itemEnd(e);
      }, 0), s;
    const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
    function a() {
      o.removeEventListener("load", a, !1), o.removeEventListener("error", c, !1), pn.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(l) {
      o.removeEventListener("load", a, !1), o.removeEventListener("error", c, !1), i && i(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    return o.addEventListener("load", a, !1), o.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
});
function oc(e) {
  Ne.call(this, e);
}
oc.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: oc,
  load: function(e, t, n, i) {
    const r = new Bn(), s = new Qr(this.manager);
    s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
    let o = 0;
    function a(c) {
      s.load(e[c], function(l) {
        r.images[c] = l, o++, o === 6 && (r.needsUpdate = !0, t && t(r));
      }, void 0, i);
    }
    for (let c = 0; c < e.length; ++c)
      a(c);
    return r;
  }
});
function No(e) {
  Ne.call(this, e);
}
No.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: No,
  load: function(e, t, n, i) {
    const r = new Ge(), s = new Qr(this.manager);
    return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(o) {
      r.image = o;
      const a = e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0;
      r.format = a ? Zn : Lt, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
});
function xe() {
  this.type = "Curve", this.arcLengthDivisions = 200;
}
Object.assign(xe.prototype, {
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint: function() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  },
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt: function(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  },
  // Get sequence of points using getPoint( t )
  getPoints: function(e) {
    e === void 0 && (e = 5);
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  },
  // Get sequence of points using getPointAt( u )
  getSpacedPoints: function(e) {
    e === void 0 && (e = 5);
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  },
  // Get total curve arc length
  getLength: function() {
    const e = this.getLengths();
    return e[e.length - 1];
  },
  // Get list of cumulative segment lengths
  getLengths: function(e) {
    if (e === void 0 && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), r = 0;
    t.push(0);
    for (let s = 1; s <= e; s++)
      n = this.getPoint(s / e), r += n.distanceTo(i), t.push(r), i = n;
    return this.cacheArcLengths = t, t;
  },
  updateArcLengths: function() {
    this.needsUpdate = !0, this.getLengths();
  },
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping: function(e, t) {
    const n = this.getLengths();
    let i = 0, r = n.length, s;
    t ? s = t : s = e * n[r - 1];
    let o = 0, a = r - 1, c;
    for (; o <= a; )
      if (i = Math.floor(o + (a - o) / 2), c = n[i] - s, c < 0)
        o = i + 1;
      else if (c > 0)
        a = i - 1;
      else {
        a = i;
        break;
      }
    if (i = a, n[i] === s)
      return i / (r - 1);
    const l = n[i], u = n[i + 1] - l, f = (s - l) / u;
    return (i + f) / (r - 1);
  },
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent: function(e, t) {
    let i = e - 1e-4, r = e + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const s = this.getPoint(i), o = this.getPoint(r), a = t || (s.isVector2 ? new H() : new b());
    return a.copy(o).sub(s).normalize(), a;
  },
  getTangentAt: function(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  },
  computeFrenetFrames: function(e, t) {
    const n = new b(), i = [], r = [], s = [], o = new b(), a = new Ce();
    for (let f = 0; f <= e; f++) {
      const d = f / e;
      i[f] = this.getTangentAt(d, new b()), i[f].normalize();
    }
    r[0] = new b(), s[0] = new b();
    let c = Number.MAX_VALUE;
    const l = Math.abs(i[0].x), h = Math.abs(i[0].y), u = Math.abs(i[0].z);
    l <= c && (c = l, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), u <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], o), s[0].crossVectors(i[0], r[0]);
    for (let f = 1; f <= e; f++) {
      if (r[f] = r[f - 1].clone(), s[f] = s[f - 1].clone(), o.crossVectors(i[f - 1], i[f]), o.length() > Number.EPSILON) {
        o.normalize();
        const d = Math.acos(Ae.clamp(i[f - 1].dot(i[f]), -1, 1));
        r[f].applyMatrix4(a.makeRotationAxis(o, d));
      }
      s[f].crossVectors(i[f], r[f]);
    }
    if (t === !0) {
      let f = Math.acos(Ae.clamp(r[0].dot(r[e]), -1, 1));
      f /= e, i[0].dot(o.crossVectors(r[0], r[e])) > 0 && (f = -f);
      for (let d = 1; d <= e; d++)
        r[d].applyMatrix4(a.makeRotationAxis(i[d], f * d)), s[d].crossVectors(i[d], r[d]);
    }
    return {
      tangents: i,
      normals: r,
      binormals: s
    };
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  },
  toJSON: function() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  },
  fromJSON: function(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
});
function Dt(e, t, n, i, r, s, o, a) {
  xe.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = s || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = a || 0;
}
Dt.prototype = Object.create(xe.prototype);
Dt.prototype.constructor = Dt;
Dt.prototype.isEllipseCurve = !0;
Dt.prototype.getPoint = function(e, t) {
  const n = t || new H(), i = Math.PI * 2;
  let r = this.aEndAngle - this.aStartAngle;
  const s = Math.abs(r) < Number.EPSILON;
  for (; r < 0; )
    r += i;
  for (; r > i; )
    r -= i;
  r < Number.EPSILON && (s ? r = 0 : r = i), this.aClockwise === !0 && !s && (r === i ? r = -i : r = r - i);
  const o = this.aStartAngle + e * r;
  let a = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
  if (this.aRotation !== 0) {
    const l = Math.cos(this.aRotation), h = Math.sin(this.aRotation), u = a - this.aX, f = c - this.aY;
    a = u * l - f * h + this.aX, c = u * h + f * l + this.aY;
  }
  return n.set(a, c);
};
Dt.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
};
Dt.prototype.toJSON = function() {
  const e = xe.prototype.toJSON.call(this);
  return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
};
Dt.prototype.fromJSON = function(e) {
  return xe.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
};
function Kr(e, t, n, i, r, s) {
  Dt.call(this, e, t, n, n, i, r, s), this.type = "ArcCurve";
}
Kr.prototype = Object.create(Dt.prototype);
Kr.prototype.constructor = Kr;
Kr.prototype.isArcCurve = !0;
function Nc() {
  let e = 0, t = 0, n = 0, i = 0;
  function r(s, o, a, c) {
    e = s, t = a, n = -3 * s + 3 * o - 2 * a - c, i = 2 * s - 2 * o + a + c;
  }
  return {
    initCatmullRom: function(s, o, a, c, l) {
      r(o, a, l * (a - s), l * (c - o));
    },
    initNonuniformCatmullRom: function(s, o, a, c, l, h, u) {
      let f = (o - s) / l - (a - s) / (l + h) + (a - o) / h, d = (a - o) / h - (c - o) / (h + u) + (c - a) / u;
      f *= h, d *= h, r(o, a, f, d);
    },
    calc: function(s) {
      const o = s * s, a = o * s;
      return e + t * s + n * o + i * a;
    }
  };
}
const js = new b(), Ea = new Nc(), Aa = new Nc(), La = new Nc();
function Tt(e, t, n, i) {
  xe.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = n || "centripetal", this.tension = i !== void 0 ? i : 0.5;
}
Tt.prototype = Object.create(xe.prototype);
Tt.prototype.constructor = Tt;
Tt.prototype.isCatmullRomCurve3 = !0;
Tt.prototype.getPoint = function(e, t) {
  const n = t || new b(), i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * e;
  let o = Math.floor(s), a = s - o;
  this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : a === 0 && o === r - 1 && (o = r - 2, a = 1);
  let c, l, h, u;
  if (this.closed || o > 0 ? c = i[(o - 1) % r] : (js.subVectors(i[0], i[1]).add(i[0]), c = js), l = i[o % r], h = i[(o + 1) % r], this.closed || o + 2 < r ? u = i[(o + 2) % r] : (js.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), u = js), this.curveType === "centripetal" || this.curveType === "chordal") {
    const f = this.curveType === "chordal" ? 0.5 : 0.25;
    let d = Math.pow(c.distanceToSquared(l), f), p = Math.pow(l.distanceToSquared(h), f), x = Math.pow(h.distanceToSquared(u), f);
    p < 1e-4 && (p = 1), d < 1e-4 && (d = p), x < 1e-4 && (x = p), Ea.initNonuniformCatmullRom(c.x, l.x, h.x, u.x, d, p, x), Aa.initNonuniformCatmullRom(c.y, l.y, h.y, u.y, d, p, x), La.initNonuniformCatmullRom(c.z, l.z, h.z, u.z, d, p, x);
  } else
    this.curveType === "catmullrom" && (Ea.initCatmullRom(c.x, l.x, h.x, u.x, this.tension), Aa.initCatmullRom(c.y, l.y, h.y, u.y, this.tension), La.initCatmullRom(c.z, l.z, h.z, u.z, this.tension));
  return n.set(
    Ea.calc(a),
    Aa.calc(a),
    La.calc(a)
  ), n;
};
Tt.prototype.copy = function(e) {
  xe.prototype.copy.call(this, e), this.points = [];
  for (let t = 0, n = e.points.length; t < n; t++) {
    const i = e.points[t];
    this.points.push(i.clone());
  }
  return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
};
Tt.prototype.toJSON = function() {
  const e = xe.prototype.toJSON.call(this);
  e.points = [];
  for (let t = 0, n = this.points.length; t < n; t++) {
    const i = this.points[t];
    e.points.push(i.toArray());
  }
  return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
};
Tt.prototype.fromJSON = function(e) {
  xe.prototype.fromJSON.call(this, e), this.points = [];
  for (let t = 0, n = e.points.length; t < n; t++) {
    const i = e.points[t];
    this.points.push(new b().fromArray(i));
  }
  return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
};
function Xl(e, t, n, i, r) {
  const s = (i - t) * 0.5, o = (r - n) * 0.5, a = e * e, c = e * a;
  return (2 * n - 2 * i + s + o) * c + (-3 * n + 3 * i - 2 * s - o) * a + s * e + n;
}
function Dy(e, t) {
  const n = 1 - e;
  return n * n * t;
}
function Ny(e, t) {
  return 2 * (1 - e) * e * t;
}
function By(e, t) {
  return e * e * t;
}
function Mr(e, t, n, i) {
  return Dy(e, t) + Ny(e, n) + By(e, i);
}
function Fy(e, t) {
  const n = 1 - e;
  return n * n * n * t;
}
function Uy(e, t) {
  const n = 1 - e;
  return 3 * n * n * e * t;
}
function Gy(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function zy(e, t) {
  return e * e * e * t;
}
function Sr(e, t, n, i, r) {
  return Fy(e, t) + Uy(e, n) + Gy(e, i) + zy(e, r);
}
function Qt(e, t, n, i) {
  xe.call(this), this.type = "CubicBezierCurve", this.v0 = e || new H(), this.v1 = t || new H(), this.v2 = n || new H(), this.v3 = i || new H();
}
Qt.prototype = Object.create(xe.prototype);
Qt.prototype.constructor = Qt;
Qt.prototype.isCubicBezierCurve = !0;
Qt.prototype.getPoint = function(e, t) {
  const n = t || new H(), i = this.v0, r = this.v1, s = this.v2, o = this.v3;
  return n.set(
    Sr(e, i.x, r.x, s.x, o.x),
    Sr(e, i.y, r.y, s.y, o.y)
  ), n;
};
Qt.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
};
Qt.prototype.toJSON = function() {
  const e = xe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
};
Qt.prototype.fromJSON = function(e) {
  return xe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
};
function mn(e, t, n, i) {
  xe.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new b(), this.v1 = t || new b(), this.v2 = n || new b(), this.v3 = i || new b();
}
mn.prototype = Object.create(xe.prototype);
mn.prototype.constructor = mn;
mn.prototype.isCubicBezierCurve3 = !0;
mn.prototype.getPoint = function(e, t) {
  const n = t || new b(), i = this.v0, r = this.v1, s = this.v2, o = this.v3;
  return n.set(
    Sr(e, i.x, r.x, s.x, o.x),
    Sr(e, i.y, r.y, s.y, o.y),
    Sr(e, i.z, r.z, s.z, o.z)
  ), n;
};
mn.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
};
mn.prototype.toJSON = function() {
  const e = xe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
};
mn.prototype.fromJSON = function(e) {
  return xe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
};
function Et(e, t) {
  xe.call(this), this.type = "LineCurve", this.v1 = e || new H(), this.v2 = t || new H();
}
Et.prototype = Object.create(xe.prototype);
Et.prototype.constructor = Et;
Et.prototype.isLineCurve = !0;
Et.prototype.getPoint = function(e, t) {
  const n = t || new H();
  return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
};
Et.prototype.getPointAt = function(e, t) {
  return this.getPoint(e, t);
};
Et.prototype.getTangent = function(e, t) {
  const n = t || new H();
  return n.copy(this.v2).sub(this.v1).normalize(), n;
};
Et.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
Et.prototype.toJSON = function() {
  const e = xe.prototype.toJSON.call(this);
  return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
Et.prototype.fromJSON = function(e) {
  return xe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function Kt(e, t) {
  xe.call(this), this.type = "LineCurve3", this.v1 = e || new b(), this.v2 = t || new b();
}
Kt.prototype = Object.create(xe.prototype);
Kt.prototype.constructor = Kt;
Kt.prototype.isLineCurve3 = !0;
Kt.prototype.getPoint = function(e, t) {
  const n = t || new b();
  return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
};
Kt.prototype.getPointAt = function(e, t) {
  return this.getPoint(e, t);
};
Kt.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
Kt.prototype.toJSON = function() {
  const e = xe.prototype.toJSON.call(this);
  return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
Kt.prototype.fromJSON = function(e) {
  return xe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function en(e, t, n) {
  xe.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new H(), this.v1 = t || new H(), this.v2 = n || new H();
}
en.prototype = Object.create(xe.prototype);
en.prototype.constructor = en;
en.prototype.isQuadraticBezierCurve = !0;
en.prototype.getPoint = function(e, t) {
  const n = t || new H(), i = this.v0, r = this.v1, s = this.v2;
  return n.set(
    Mr(e, i.x, r.x, s.x),
    Mr(e, i.y, r.y, s.y)
  ), n;
};
en.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
en.prototype.toJSON = function() {
  const e = xe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
en.prototype.fromJSON = function(e) {
  return xe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function gn(e, t, n) {
  xe.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new b(), this.v1 = t || new b(), this.v2 = n || new b();
}
gn.prototype = Object.create(xe.prototype);
gn.prototype.constructor = gn;
gn.prototype.isQuadraticBezierCurve3 = !0;
gn.prototype.getPoint = function(e, t) {
  const n = t || new b(), i = this.v0, r = this.v1, s = this.v2;
  return n.set(
    Mr(e, i.x, r.x, s.x),
    Mr(e, i.y, r.y, s.y),
    Mr(e, i.z, r.z, s.z)
  ), n;
};
gn.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
gn.prototype.toJSON = function() {
  const e = xe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
gn.prototype.fromJSON = function(e) {
  return xe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function tn(e) {
  xe.call(this), this.type = "SplineCurve", this.points = e || [];
}
tn.prototype = Object.create(xe.prototype);
tn.prototype.constructor = tn;
tn.prototype.isSplineCurve = !0;
tn.prototype.getPoint = function(e, t) {
  const n = t || new H(), i = this.points, r = (i.length - 1) * e, s = Math.floor(r), o = r - s, a = i[s === 0 ? s : s - 1], c = i[s], l = i[s > i.length - 2 ? i.length - 1 : s + 1], h = i[s > i.length - 3 ? i.length - 1 : s + 2];
  return n.set(
    Xl(o, a.x, c.x, l.x, h.x),
    Xl(o, a.y, c.y, l.y, h.y)
  ), n;
};
tn.prototype.copy = function(e) {
  xe.prototype.copy.call(this, e), this.points = [];
  for (let t = 0, n = e.points.length; t < n; t++) {
    const i = e.points[t];
    this.points.push(i.clone());
  }
  return this;
};
tn.prototype.toJSON = function() {
  const e = xe.prototype.toJSON.call(this);
  e.points = [];
  for (let t = 0, n = this.points.length; t < n; t++) {
    const i = this.points[t];
    e.points.push(i.toArray());
  }
  return e;
};
tn.prototype.fromJSON = function(e) {
  xe.prototype.fromJSON.call(this, e), this.points = [];
  for (let t = 0, n = e.points.length; t < n; t++) {
    const i = e.points[t];
    this.points.push(new H().fromArray(i));
  }
  return this;
};
var ac = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Kr,
  CatmullRomCurve3: Tt,
  CubicBezierCurve: Qt,
  CubicBezierCurve3: mn,
  EllipseCurve: Dt,
  LineCurve: Et,
  LineCurve3: Kt,
  QuadraticBezierCurve: en,
  QuadraticBezierCurve3: gn,
  SplineCurve: tn
});
function Pn() {
  xe.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
}
Pn.prototype = Object.assign(Object.create(xe.prototype), {
  constructor: Pn,
  add: function(e) {
    this.curves.push(e);
  },
  closePath: function() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Et(t, e));
  },
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint: function(e) {
    const t = e * this.getLength(), n = this.getCurveLengths();
    let i = 0;
    for (; i < n.length; ) {
      if (n[i] >= t) {
        const r = n[i] - t, s = this.curves[i], o = s.getLength(), a = o === 0 ? 0 : 1 - r / o;
        return s.getPointAt(a);
      }
      i++;
    }
    return null;
  },
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength: function() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  },
  // cacheLengths must be recalculated.
  updateArcLengths: function() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  },
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths: function() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  },
  getSpacedPoints: function(e) {
    e === void 0 && (e = 40);
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  },
  getPoints: function(e) {
    e = e || 12;
    const t = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const s = r[i], o = s && s.isEllipseCurve ? e * 2 : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? e * s.points.length : e, a = s.getPoints(o);
      for (let c = 0; c < a.length; c++) {
        const l = a[c];
        n && n.equals(l) || (t.push(l), n = l);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  },
  copy: function(e) {
    xe.prototype.copy.call(this, e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return this.autoClose = e.autoClose, this;
  },
  toJSON: function() {
    const e = xe.prototype.toJSON.call(this);
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  },
  fromJSON: function(e) {
    xe.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new ac[i.type]().fromJSON(i));
    }
    return this;
  }
});
function Zt(e) {
  Pn.call(this), this.type = "Path", this.currentPoint = new H(), e && this.setFromPoints(e);
}
Zt.prototype = Object.assign(Object.create(Pn.prototype), {
  constructor: Zt,
  setFromPoints: function(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  },
  moveTo: function(e, t) {
    return this.currentPoint.set(e, t), this;
  },
  lineTo: function(e, t) {
    const n = new Et(this.currentPoint.clone(), new H(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  },
  quadraticCurveTo: function(e, t, n, i) {
    const r = new en(
      this.currentPoint.clone(),
      new H(e, t),
      new H(n, i)
    );
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  },
  bezierCurveTo: function(e, t, n, i, r, s) {
    const o = new Qt(
      this.currentPoint.clone(),
      new H(e, t),
      new H(n, i),
      new H(r, s)
    );
    return this.curves.push(o), this.currentPoint.set(r, s), this;
  },
  splineThru: function(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new tn(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  },
  arc: function(e, t, n, i, r, s) {
    const o = this.currentPoint.x, a = this.currentPoint.y;
    return this.absarc(
      e + o,
      t + a,
      n,
      i,
      r,
      s
    ), this;
  },
  absarc: function(e, t, n, i, r, s) {
    return this.absellipse(e, t, n, n, i, r, s), this;
  },
  ellipse: function(e, t, n, i, r, s, o, a) {
    const c = this.currentPoint.x, l = this.currentPoint.y;
    return this.absellipse(e + c, t + l, n, i, r, s, o, a), this;
  },
  absellipse: function(e, t, n, i, r, s, o, a) {
    const c = new Dt(e, t, n, i, r, s, o, a);
    if (this.curves.length > 0) {
      const h = c.getPoint(0);
      h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
    }
    this.curves.push(c);
    const l = c.getPoint(1);
    return this.currentPoint.copy(l), this;
  },
  copy: function(e) {
    return Pn.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this;
  },
  toJSON: function() {
    const e = Pn.prototype.toJSON.call(this);
    return e.currentPoint = this.currentPoint.toArray(), e;
  },
  fromJSON: function(e) {
    return Pn.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this;
  }
});
function $n(e) {
  Zt.call(this, e), this.uuid = Ae.generateUUID(), this.type = "Shape", this.holes = [];
}
$n.prototype = Object.assign(Object.create(Zt.prototype), {
  constructor: $n,
  getPointsHoles: function(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  },
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints: function(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  },
  copy: function(e) {
    Zt.prototype.copy.call(this, e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  },
  toJSON: function() {
    const e = Zt.prototype.toJSON.call(this);
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  },
  fromJSON: function(e) {
    Zt.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new Zt().fromJSON(i));
    }
    return this;
  }
});
function He(e, t) {
  ie.call(this), this.type = "Light", this.color = new fe(e), this.intensity = t !== void 0 ? t : 1, this.receiveShadow = void 0;
}
He.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: He,
  isLight: !0,
  copy: function(e) {
    return ie.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this;
  },
  toJSON: function(e) {
    const t = ie.prototype.toJSON.call(this, e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
});
function cc(e, t, n) {
  He.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(ie.DefaultUp), this.updateMatrix(), this.groundColor = new fe(t);
}
cc.prototype = Object.assign(Object.create(He.prototype), {
  constructor: cc,
  isHemisphereLight: !0,
  copy: function(e) {
    return He.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this;
  }
});
function yn(e) {
  this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new H(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ce(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new us(), this._frameExtents = new H(1, 1), this._viewportCount = 1, this._viewports = [
    new Be(0, 0, 1, 1)
  ];
}
Object.assign(yn.prototype, {
  _projScreenMatrix: new Ce(),
  _lightPositionWorld: new b(),
  _lookTarget: new b(),
  getViewportCount: function() {
    return this._viewportCount;
  },
  getFrustum: function() {
    return this._frustum;
  },
  updateMatrices: function(e) {
    const t = this.camera, n = this.matrix, i = this._projScreenMatrix, r = this._lookTarget, s = this._lightPositionWorld;
    s.setFromMatrixPosition(e.matrixWorld), t.position.copy(s), r.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(r), t.updateMatrixWorld(), i.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(i), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse);
  },
  getViewport: function(e) {
    return this._viewports[e];
  },
  getFrameExtents: function() {
    return this._frameExtents;
  },
  copy: function(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  toJSON: function() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
});
function lc() {
  yn.call(this, new tt(50, 1, 0.5, 500));
}
lc.prototype = Object.assign(Object.create(yn.prototype), {
  constructor: lc,
  isSpotLightShadow: !0,
  updateMatrices: function(e) {
    const t = this.camera, n = Ae.RAD2DEG * 2 * e.angle, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), yn.prototype.updateMatrices.call(this, e);
  }
});
function uc(e, t, n, i, r, s) {
  He.call(this, e, t), this.type = "SpotLight", this.position.copy(ie.DefaultUp), this.updateMatrix(), this.target = new ie(), Object.defineProperty(this, "power", {
    get: function() {
      return this.intensity * Math.PI;
    },
    set: function(o) {
      this.intensity = o / Math.PI;
    }
  }), this.distance = n !== void 0 ? n : 0, this.angle = i !== void 0 ? i : Math.PI / 3, this.penumbra = r !== void 0 ? r : 0, this.decay = s !== void 0 ? s : 1, this.shadow = new lc();
}
uc.prototype = Object.assign(Object.create(He.prototype), {
  constructor: uc,
  isSpotLight: !0,
  copy: function(e) {
    return He.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
});
function hc() {
  yn.call(this, new tt(90, 1, 0.5, 500)), this._frameExtents = new H(4, 2), this._viewportCount = 6, this._viewports = [
    // These viewports map a cube-map onto a 2D texture with the
    // following orientation:
    //
    //  xzXZ
    //   y Y
    //
    // X - Positive x direction
    // x - Negative x direction
    // Y - Positive y direction
    // y - Negative y direction
    // Z - Positive z direction
    // z - Negative z direction
    // positive X
    new Be(2, 1, 1, 1),
    // negative X
    new Be(0, 1, 1, 1),
    // positive Z
    new Be(3, 1, 1, 1),
    // negative Z
    new Be(1, 1, 1, 1),
    // positive Y
    new Be(3, 0, 1, 1),
    // negative Y
    new Be(1, 0, 1, 1)
  ], this._cubeDirections = [
    new b(1, 0, 0),
    new b(-1, 0, 0),
    new b(0, 0, 1),
    new b(0, 0, -1),
    new b(0, 1, 0),
    new b(0, -1, 0)
  ], this._cubeUps = [
    new b(0, 1, 0),
    new b(0, 1, 0),
    new b(0, 1, 0),
    new b(0, 1, 0),
    new b(0, 0, 1),
    new b(0, 0, -1)
  ];
}
hc.prototype = Object.assign(Object.create(yn.prototype), {
  constructor: hc,
  isPointLightShadow: !0,
  updateMatrices: function(e, t) {
    t === void 0 && (t = 0);
    const n = this.camera, i = this.matrix, r = this._lightPositionWorld, s = this._lookTarget, o = this._projScreenMatrix;
    r.setFromMatrixPosition(e.matrixWorld), n.position.copy(r), s.copy(n.position), s.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(s), n.updateMatrixWorld(), i.makeTranslation(-r.x, -r.y, -r.z), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(o);
  }
});
function fc(e, t, n, i) {
  He.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
    get: function() {
      return this.intensity * 4 * Math.PI;
    },
    set: function(r) {
      this.intensity = r / (4 * Math.PI);
    }
  }), this.distance = n !== void 0 ? n : 0, this.decay = i !== void 0 ? i : 1, this.shadow = new hc();
}
fc.prototype = Object.assign(Object.create(He.prototype), {
  constructor: fc,
  isPointLight: !0,
  copy: function(e) {
    return He.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
});
function es(e, t, n, i, r, s) {
  fn.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e !== void 0 ? e : -1, this.right = t !== void 0 ? t : 1, this.top = n !== void 0 ? n : 1, this.bottom = i !== void 0 ? i : -1, this.near = r !== void 0 ? r : 0.1, this.far = s !== void 0 ? s : 2e3, this.updateProjectionMatrix();
}
es.prototype = Object.assign(Object.create(fn.prototype), {
  constructor: es,
  isOrthographicCamera: !0,
  copy: function(e, t) {
    return fn.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  },
  setViewOffset: function(e, t, n, i, r, s) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  },
  clearViewOffset: function() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, s = n + e, o = i + t, a = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, l = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, s = r + c * this.view.width, o -= l * this.view.offsetY, a = o - l * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, s, o, a, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function(e) {
    const t = ie.prototype.toJSON.call(this, e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
});
function dc() {
  yn.call(this, new es(-5, 5, 5, -5, 0.5, 500));
}
dc.prototype = Object.assign(Object.create(yn.prototype), {
  constructor: dc,
  isDirectionalLightShadow: !0,
  updateMatrices: function(e) {
    yn.prototype.updateMatrices.call(this, e);
  }
});
function pc(e, t) {
  He.call(this, e, t), this.type = "DirectionalLight", this.position.copy(ie.DefaultUp), this.updateMatrix(), this.target = new ie(), this.shadow = new dc();
}
pc.prototype = Object.assign(Object.create(He.prototype), {
  constructor: pc,
  isDirectionalLight: !0,
  copy: function(e) {
    return He.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
});
function Bo(e, t) {
  He.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0;
}
Bo.prototype = Object.assign(Object.create(He.prototype), {
  constructor: Bo,
  isAmbientLight: !0
});
function mc(e, t, n, i) {
  He.call(this, e, t), this.type = "RectAreaLight", this.width = n !== void 0 ? n : 10, this.height = i !== void 0 ? i : 10;
}
mc.prototype = Object.assign(Object.create(He.prototype), {
  constructor: mc,
  isRectAreaLight: !0,
  copy: function(e) {
    return He.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this;
  },
  toJSON: function(e) {
    const t = He.prototype.toJSON.call(this, e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
});
function Bc() {
  this.coefficients = [];
  for (let e = 0; e < 9; e++)
    this.coefficients.push(new b());
}
Object.assign(Bc.prototype, {
  isSphericalHarmonics3: !0,
  set: function(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].copy(e[t]);
    return this;
  },
  zero: function() {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].set(0, 0, 0);
    return this;
  },
  // get the radiance in the direction of the normal
  // target is a Vector3
  getAt: function(e, t) {
    const n = e.x, i = e.y, r = e.z, s = this.coefficients;
    return t.copy(s[0]).multiplyScalar(0.282095), t.addScaledVector(s[1], 0.488603 * i), t.addScaledVector(s[2], 0.488603 * r), t.addScaledVector(s[3], 0.488603 * n), t.addScaledVector(s[4], 1.092548 * (n * i)), t.addScaledVector(s[5], 1.092548 * (i * r)), t.addScaledVector(s[6], 0.315392 * (3 * r * r - 1)), t.addScaledVector(s[7], 1.092548 * (n * r)), t.addScaledVector(s[8], 0.546274 * (n * n - i * i)), t;
  },
  // get the irradiance (radiance convolved with cosine lobe) in the direction of the normal
  // target is a Vector3
  // https://graphics.stanford.edu/papers/envmap/envmap.pdf
  getIrradianceAt: function(e, t) {
    const n = e.x, i = e.y, r = e.z, s = this.coefficients;
    return t.copy(s[0]).multiplyScalar(0.886227), t.addScaledVector(s[1], 2 * 0.511664 * i), t.addScaledVector(s[2], 2 * 0.511664 * r), t.addScaledVector(s[3], 2 * 0.511664 * n), t.addScaledVector(s[4], 2 * 0.429043 * n * i), t.addScaledVector(s[5], 2 * 0.429043 * i * r), t.addScaledVector(s[6], 0.743125 * r * r - 0.247708), t.addScaledVector(s[7], 2 * 0.429043 * n * r), t.addScaledVector(s[8], 0.429043 * (n * n - i * i)), t;
  },
  add: function(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].add(e.coefficients[t]);
    return this;
  },
  addScaledSH: function(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  },
  scale: function(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].multiplyScalar(e);
    return this;
  },
  lerp: function(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  },
  equals: function(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t]))
        return !1;
    return !0;
  },
  copy: function(e) {
    return this.set(e.coefficients);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].fromArray(e, t + i * 3);
    return this;
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].toArray(e, t + i * 3);
    return e;
  }
});
Object.assign(Bc, {
  // evaluate the basis functions
  // shBasis is an Array[ 9 ]
  getBasisAt: function(e, t) {
    const n = e.x, i = e.y, r = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * i, t[2] = 0.488603 * r, t[3] = 0.488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * r, t[6] = 0.315392 * (3 * r * r - 1), t[7] = 1.092548 * n * r, t[8] = 0.546274 * (n * n - i * i);
  }
});
function kt(e, t) {
  He.call(this, void 0, t), this.type = "LightProbe", this.sh = e !== void 0 ? e : new Bc();
}
kt.prototype = Object.assign(Object.create(He.prototype), {
  constructor: kt,
  isLightProbe: !0,
  copy: function(e) {
    return He.prototype.copy.call(this, e), this.sh.copy(e.sh), this;
  },
  fromJSON: function(e) {
    return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
  },
  toJSON: function(e) {
    const t = He.prototype.toJSON.call(this, e);
    return t.object.sh = this.sh.toArray(), t;
  }
});
function Fo(e) {
  Ne.call(this, e), this.textures = {};
}
Fo.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: Fo,
  load: function(e, t, n, i) {
    const r = this, s = new Vt(r.manager);
    s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.load(e, function(o) {
      try {
        t(r.parse(JSON.parse(o)));
      } catch (a) {
        i ? i(a) : console.error(a), r.manager.itemError(e);
      }
    }, n, i);
  },
  parse: function(e) {
    const t = this.textures;
    function n(r) {
      return t[r] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", r), t[r];
    }
    const i = new Ry[e.type]();
    if (e.uuid !== void 0 && (i.uuid = e.uuid), e.name !== void 0 && (i.name = e.name), e.color !== void 0 && i.color.setHex(e.color), e.roughness !== void 0 && (i.roughness = e.roughness), e.metalness !== void 0 && (i.metalness = e.metalness), e.sheen !== void 0 && (i.sheen = new fe().setHex(e.sheen)), e.emissive !== void 0 && i.emissive.setHex(e.emissive), e.specular !== void 0 && i.specular.setHex(e.specular), e.shininess !== void 0 && (i.shininess = e.shininess), e.clearcoat !== void 0 && (i.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = e.clearcoatRoughness), e.fog !== void 0 && (i.fog = e.fog), e.flatShading !== void 0 && (i.flatShading = e.flatShading), e.blending !== void 0 && (i.blending = e.blending), e.combine !== void 0 && (i.combine = e.combine), e.side !== void 0 && (i.side = e.side), e.opacity !== void 0 && (i.opacity = e.opacity), e.transparent !== void 0 && (i.transparent = e.transparent), e.alphaTest !== void 0 && (i.alphaTest = e.alphaTest), e.depthTest !== void 0 && (i.depthTest = e.depthTest), e.depthWrite !== void 0 && (i.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (i.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (i.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (i.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (i.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (i.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (i.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (i.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (i.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (i.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (i.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (i.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (i.rotation = e.rotation), e.linewidth !== 1 && (i.linewidth = e.linewidth), e.dashSize !== void 0 && (i.dashSize = e.dashSize), e.gapSize !== void 0 && (i.gapSize = e.gapSize), e.scale !== void 0 && (i.scale = e.scale), e.polygonOffset !== void 0 && (i.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = e.polygonOffsetUnits), e.skinning !== void 0 && (i.skinning = e.skinning), e.morphTargets !== void 0 && (i.morphTargets = e.morphTargets), e.morphNormals !== void 0 && (i.morphNormals = e.morphNormals), e.dithering !== void 0 && (i.dithering = e.dithering), e.vertexTangents !== void 0 && (i.vertexTangents = e.vertexTangents), e.visible !== void 0 && (i.visible = e.visible), e.toneMapped !== void 0 && (i.toneMapped = e.toneMapped), e.userData !== void 0 && (i.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? i.vertexColors = e.vertexColors > 0 : i.vertexColors = e.vertexColors), e.uniforms !== void 0)
      for (const r in e.uniforms) {
        const s = e.uniforms[r];
        switch (i.uniforms[r] = {}, s.type) {
          case "t":
            i.uniforms[r].value = n(s.value);
            break;
          case "c":
            i.uniforms[r].value = new fe().setHex(s.value);
            break;
          case "v2":
            i.uniforms[r].value = new H().fromArray(s.value);
            break;
          case "v3":
            i.uniforms[r].value = new b().fromArray(s.value);
            break;
          case "v4":
            i.uniforms[r].value = new Be().fromArray(s.value);
            break;
          case "m3":
            i.uniforms[r].value = new gt().fromArray(s.value);
          case "m4":
            i.uniforms[r].value = new Ce().fromArray(s.value);
            break;
          default:
            i.uniforms[r].value = s.value;
        }
      }
    if (e.defines !== void 0 && (i.defines = e.defines), e.vertexShader !== void 0 && (i.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (i.fragmentShader = e.fragmentShader), e.extensions !== void 0)
      for (const r in e.extensions)
        i.extensions[r] = e.extensions[r];
    if (e.shading !== void 0 && (i.flatShading = e.shading === 1), e.size !== void 0 && (i.size = e.size), e.sizeAttenuation !== void 0 && (i.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (i.map = n(e.map)), e.matcap !== void 0 && (i.matcap = n(e.matcap)), e.alphaMap !== void 0 && (i.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (i.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (i.bumpScale = e.bumpScale), e.normalMap !== void 0 && (i.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (i.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let r = e.normalScale;
      Array.isArray(r) === !1 && (r = [r, r]), i.normalScale = new H().fromArray(r);
    }
    return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new H().fromArray(e.clearcoatNormalScale)), e.transmission !== void 0 && (i.transmission = e.transmission), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), i;
  },
  setTextures: function(e) {
    return this.textures = e, this;
  }
});
const th = {
  decodeText: function(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  },
  extractUrlBase: function(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.substr(0, t + 1);
  }
};
function Uo() {
  he.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
}
Uo.prototype = Object.assign(Object.create(he.prototype), {
  constructor: Uo,
  isInstancedBufferGeometry: !0,
  copy: function(e) {
    return he.prototype.copy.call(this, e), this.instanceCount = e.instanceCount, this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  toJSON: function() {
    const e = he.prototype.toJSON.call(this);
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
});
function gc(e, t, n, i) {
  typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), ge.call(this, e, t, n), this.meshPerAttribute = i || 1;
}
gc.prototype = Object.assign(Object.create(ge.prototype), {
  constructor: gc,
  isInstancedBufferAttribute: !0,
  copy: function(e) {
    return ge.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this;
  },
  toJSON: function() {
    const e = ge.prototype.toJSON.call(this);
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
});
function yc(e) {
  Ne.call(this, e);
}
yc.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: yc,
  load: function(e, t, n, i) {
    const r = this, s = new Vt(r.manager);
    s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.load(e, function(o) {
      try {
        t(r.parse(JSON.parse(o)));
      } catch (a) {
        i ? i(a) : console.error(a), r.manager.itemError(e);
      }
    }, n, i);
  },
  parse: function(e) {
    const t = {}, n = {};
    function i(f, d) {
      if (t[d] !== void 0)
        return t[d];
      const x = f.interleavedBuffers[d], y = r(f, x.buffer), g = new qs[x.type](y), m = new At(g, x.stride);
      return m.uuid = x.uuid, t[d] = m, m;
    }
    function r(f, d) {
      if (n[d] !== void 0)
        return n[d];
      const x = f.arrayBuffers[d], y = new Uint32Array(x).buffer;
      return n[d] = y, y;
    }
    const s = e.isInstancedBufferGeometry ? new Uo() : new he(), o = e.data.index;
    if (o !== void 0) {
      const f = new qs[o.type](o.array);
      s.setIndex(new ge(f, 1));
    }
    const a = e.data.attributes;
    for (const f in a) {
      const d = a[f];
      let p;
      if (d.isInterleavedBufferAttribute) {
        const x = i(e.data, d.data);
        p = new ti(x, d.itemSize, d.offset, d.normalized);
      } else {
        const x = new qs[d.type](d.array), y = d.isInstancedBufferAttribute ? gc : ge;
        p = new y(x, d.itemSize, d.normalized);
      }
      d.name !== void 0 && (p.name = d.name), s.setAttribute(f, p);
    }
    const c = e.data.morphAttributes;
    if (c)
      for (const f in c) {
        const d = c[f], p = [];
        for (let x = 0, y = d.length; x < y; x++) {
          const g = d[x];
          let m;
          if (g.isInterleavedBufferAttribute) {
            const _ = i(e.data, g.data);
            m = new ti(_, g.itemSize, g.offset, g.normalized);
          } else {
            const _ = new qs[g.type](g.array);
            m = new ge(_, g.itemSize, g.normalized);
          }
          g.name !== void 0 && (m.name = g.name), p.push(m);
        }
        s.morphAttributes[f] = p;
      }
    e.data.morphTargetsRelative && (s.morphTargetsRelative = !0);
    const h = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (h !== void 0)
      for (let f = 0, d = h.length; f !== d; ++f) {
        const p = h[f];
        s.addGroup(p.start, p.count, p.materialIndex);
      }
    const u = e.data.boundingSphere;
    if (u !== void 0) {
      const f = new b();
      u.center !== void 0 && f.fromArray(u.center), s.boundingSphere = new vn(f, u.radius);
    }
    return e.name && (s.name = e.name), e.userData && (s.userData = e.userData), s;
  }
});
const qs = {
  Int8Array,
  Uint8Array,
  // Workaround for IE11 pre KB2929437. See #11440
  Uint8ClampedArray: typeof Uint8ClampedArray < "u" ? Uint8ClampedArray : Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};
function xc(e) {
  Ne.call(this, e);
}
xc.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: xc,
  load: function(e, t, n, i) {
    const r = this, s = this.path === "" ? th.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || s;
    const o = new Vt(r.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.load(e, function(a) {
      let c = null;
      try {
        c = JSON.parse(a);
      } catch (h) {
        i !== void 0 && i(h), console.error("THREE:ObjectLoader: Can't parse " + e + ".", h.message);
        return;
      }
      const l = c.metadata;
      if (l === void 0 || l.type === void 0 || l.type.toLowerCase() === "geometry") {
        console.error("THREE.ObjectLoader: Can't load " + e);
        return;
      }
      r.parse(c, t);
    }, n, i);
  },
  parse: function(e, t) {
    const n = this.parseShape(e.shapes), i = this.parseGeometries(e.geometries, n), r = this.parseImages(e.images, function() {
      t !== void 0 && t(a);
    }), s = this.parseTextures(e.textures, r), o = this.parseMaterials(e.materials, s), a = this.parseObject(e.object, i, o);
    return e.animations && (a.animations = this.parseAnimations(e.animations)), (e.images === void 0 || e.images.length === 0) && t !== void 0 && t(a), a;
  },
  parseShape: function(e) {
    const t = {};
    if (e !== void 0)
      for (let n = 0, i = e.length; n < i; n++) {
        const r = new $n().fromJSON(e[n]);
        t[r.uuid] = r;
      }
    return t;
  },
  parseGeometries: function(e, t) {
    const n = {};
    let i;
    if (e !== void 0) {
      const r = new yc();
      for (let s = 0, o = e.length; s < o; s++) {
        let a;
        const c = e[s];
        switch (c.type) {
          case "PlaneGeometry":
          case "PlaneBufferGeometry":
            a = new mt[c.type](
              c.width,
              c.height,
              c.widthSegments,
              c.heightSegments
            );
            break;
          case "BoxGeometry":
          case "BoxBufferGeometry":
          case "CubeGeometry":
            a = new mt[c.type](
              c.width,
              c.height,
              c.depth,
              c.widthSegments,
              c.heightSegments,
              c.depthSegments
            );
            break;
          case "CircleGeometry":
          case "CircleBufferGeometry":
            a = new mt[c.type](
              c.radius,
              c.segments,
              c.thetaStart,
              c.thetaLength
            );
            break;
          case "CylinderGeometry":
          case "CylinderBufferGeometry":
            a = new mt[c.type](
              c.radiusTop,
              c.radiusBottom,
              c.height,
              c.radialSegments,
              c.heightSegments,
              c.openEnded,
              c.thetaStart,
              c.thetaLength
            );
            break;
          case "ConeGeometry":
          case "ConeBufferGeometry":
            a = new mt[c.type](
              c.radius,
              c.height,
              c.radialSegments,
              c.heightSegments,
              c.openEnded,
              c.thetaStart,
              c.thetaLength
            );
            break;
          case "SphereGeometry":
          case "SphereBufferGeometry":
            a = new mt[c.type](
              c.radius,
              c.widthSegments,
              c.heightSegments,
              c.phiStart,
              c.phiLength,
              c.thetaStart,
              c.thetaLength
            );
            break;
          case "DodecahedronGeometry":
          case "DodecahedronBufferGeometry":
          case "IcosahedronGeometry":
          case "IcosahedronBufferGeometry":
          case "OctahedronGeometry":
          case "OctahedronBufferGeometry":
          case "TetrahedronGeometry":
          case "TetrahedronBufferGeometry":
            a = new mt[c.type](
              c.radius,
              c.detail
            );
            break;
          case "RingGeometry":
          case "RingBufferGeometry":
            a = new mt[c.type](
              c.innerRadius,
              c.outerRadius,
              c.thetaSegments,
              c.phiSegments,
              c.thetaStart,
              c.thetaLength
            );
            break;
          case "TorusGeometry":
          case "TorusBufferGeometry":
            a = new mt[c.type](
              c.radius,
              c.tube,
              c.radialSegments,
              c.tubularSegments,
              c.arc
            );
            break;
          case "TorusKnotGeometry":
          case "TorusKnotBufferGeometry":
            a = new mt[c.type](
              c.radius,
              c.tube,
              c.tubularSegments,
              c.radialSegments,
              c.p,
              c.q
            );
            break;
          case "TubeGeometry":
          case "TubeBufferGeometry":
            a = new mt[c.type](
              new ac[c.path.type]().fromJSON(c.path),
              c.tubularSegments,
              c.radius,
              c.radialSegments,
              c.closed
            );
            break;
          case "LatheGeometry":
          case "LatheBufferGeometry":
            a = new mt[c.type](
              c.points,
              c.segments,
              c.phiStart,
              c.phiLength
            );
            break;
          case "PolyhedronGeometry":
          case "PolyhedronBufferGeometry":
            a = new mt[c.type](
              c.vertices,
              c.indices,
              c.radius,
              c.details
            );
            break;
          case "ShapeGeometry":
          case "ShapeBufferGeometry":
            i = [];
            for (let h = 0, u = c.shapes.length; h < u; h++) {
              const f = t[c.shapes[h]];
              i.push(f);
            }
            a = new mt[c.type](
              i,
              c.curveSegments
            );
            break;
          case "ExtrudeGeometry":
          case "ExtrudeBufferGeometry":
            i = [];
            for (let h = 0, u = c.shapes.length; h < u; h++) {
              const f = t[c.shapes[h]];
              i.push(f);
            }
            const l = c.options.extrudePath;
            l !== void 0 && (c.options.extrudePath = new ac[l.type]().fromJSON(l)), a = new mt[c.type](
              i,
              c.options
            );
            break;
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            a = r.parse(c);
            break;
          case "Geometry":
            console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
            break;
          default:
            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"');
            continue;
        }
        a.uuid = c.uuid, c.name !== void 0 && (a.name = c.name), a.isBufferGeometry === !0 && c.userData !== void 0 && (a.userData = c.userData), n[c.uuid] = a;
      }
    }
    return n;
  },
  parseMaterials: function(e, t) {
    const n = {}, i = {};
    if (e !== void 0) {
      const r = new Fo();
      r.setTextures(t);
      for (let s = 0, o = e.length; s < o; s++) {
        const a = e[s];
        if (a.type === "MultiMaterial") {
          const c = [];
          for (let l = 0; l < a.materials.length; l++) {
            const h = a.materials[l];
            n[h.uuid] === void 0 && (n[h.uuid] = r.parse(h)), c.push(n[h.uuid]);
          }
          i[a.uuid] = c;
        } else
          n[a.uuid] === void 0 && (n[a.uuid] = r.parse(a)), i[a.uuid] = n[a.uuid];
      }
    }
    return i;
  },
  parseAnimations: function(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = zt.parse(i);
      i.uuid !== void 0 && (r.uuid = i.uuid), t.push(r);
    }
    return t;
  },
  parseImages: function(e, t) {
    const n = this, i = {};
    let r;
    function s(o) {
      return n.manager.itemStart(o), r.load(o, function() {
        n.manager.itemEnd(o);
      }, void 0, function() {
        n.manager.itemError(o), n.manager.itemEnd(o);
      });
    }
    if (e !== void 0 && e.length > 0) {
      const o = new eh(t);
      r = new Qr(o), r.setCrossOrigin(this.crossOrigin);
      for (let a = 0, c = e.length; a < c; a++) {
        const l = e[a], h = l.url;
        if (Array.isArray(h)) {
          i[l.uuid] = [];
          for (let u = 0, f = h.length; u < f; u++) {
            const d = h[u], p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : n.resourcePath + d;
            i[l.uuid].push(s(p));
          }
        } else {
          const u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : n.resourcePath + l.url;
          i[l.uuid] = s(u);
        }
      }
    }
    return i;
  },
  parseTextures: function(e, t) {
    function n(r, s) {
      return typeof r == "number" ? r : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", r), s[r]);
    }
    const i = {};
    if (e !== void 0)
      for (let r = 0, s = e.length; r < s; r++) {
        const o = e[r];
        o.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), t[o.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", o.image);
        let a;
        Array.isArray(t[o.image]) ? a = new Bn(t[o.image]) : a = new Ge(t[o.image]), a.needsUpdate = !0, a.uuid = o.uuid, o.name !== void 0 && (a.name = o.name), o.mapping !== void 0 && (a.mapping = n(o.mapping, ky)), o.offset !== void 0 && a.offset.fromArray(o.offset), o.repeat !== void 0 && a.repeat.fromArray(o.repeat), o.center !== void 0 && a.center.fromArray(o.center), o.rotation !== void 0 && (a.rotation = o.rotation), o.wrap !== void 0 && (a.wrapS = n(o.wrap[0], Yl), a.wrapT = n(o.wrap[1], Yl)), o.format !== void 0 && (a.format = o.format), o.type !== void 0 && (a.type = o.type), o.encoding !== void 0 && (a.encoding = o.encoding), o.minFilter !== void 0 && (a.minFilter = n(o.minFilter, Jl)), o.magFilter !== void 0 && (a.magFilter = n(o.magFilter, Jl)), o.anisotropy !== void 0 && (a.anisotropy = o.anisotropy), o.flipY !== void 0 && (a.flipY = o.flipY), o.premultiplyAlpha !== void 0 && (a.premultiplyAlpha = o.premultiplyAlpha), o.unpackAlignment !== void 0 && (a.unpackAlignment = o.unpackAlignment), i[o.uuid] = a;
      }
    return i;
  },
  parseObject: function(e, t, n) {
    let i;
    function r(c) {
      return t[c] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", c), t[c];
    }
    function s(c) {
      if (c !== void 0) {
        if (Array.isArray(c)) {
          const l = [];
          for (let h = 0, u = c.length; h < u; h++) {
            const f = c[h];
            n[f] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", f), l.push(n[f]);
          }
          return l;
        }
        return n[c] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", c), n[c];
      }
    }
    let o, a;
    switch (e.type) {
      case "Scene":
        i = new Ar(), e.background !== void 0 && Number.isInteger(e.background) && (i.background = new fe(e.background)), e.fog !== void 0 && (e.fog.type === "Fog" ? i.fog = new ja(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (i.fog = new Wa(e.fog.color, e.fog.density)));
        break;
      case "PerspectiveCamera":
        i = new tt(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (i.focus = e.focus), e.zoom !== void 0 && (i.zoom = e.zoom), e.filmGauge !== void 0 && (i.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (i.filmOffset = e.filmOffset), e.view !== void 0 && (i.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        i = new es(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (i.zoom = e.zoom), e.view !== void 0 && (i.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        i = new Bo(e.color, e.intensity);
        break;
      case "DirectionalLight":
        i = new pc(e.color, e.intensity);
        break;
      case "PointLight":
        i = new fc(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        i = new mc(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        i = new uc(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
        break;
      case "HemisphereLight":
        i = new cc(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        i = new kt().fromJSON(e);
        break;
      case "SkinnedMesh":
        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
      case "Mesh":
        o = r(e.geometry), a = s(e.material), i = new Fe(o, a);
        break;
      case "InstancedMesh":
        o = r(e.geometry), a = s(e.material);
        const c = e.count, l = e.instanceMatrix;
        i = new Ja(o, a, c), i.instanceMatrix = new ge(new Float32Array(l.array), 16);
        break;
      case "LOD":
        i = new fo();
        break;
      case "Line":
        i = new Ot(r(e.geometry), s(e.material), e.mode);
        break;
      case "LineLoop":
        i = new Za(r(e.geometry), s(e.material));
        break;
      case "LineSegments":
        i = new nt(r(e.geometry), s(e.material));
        break;
      case "PointCloud":
      case "Points":
        i = new po(r(e.geometry), s(e.material));
        break;
      case "Sprite":
        i = new qa(s(e.material));
        break;
      case "Group":
        i = new Rn();
        break;
      default:
        i = new ie();
    }
    if (i.uuid = e.uuid, e.name !== void 0 && (i.name = e.name), e.matrix !== void 0 ? (i.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (i.matrixAutoUpdate = e.matrixAutoUpdate), i.matrixAutoUpdate && i.matrix.decompose(i.position, i.quaternion, i.scale)) : (e.position !== void 0 && i.position.fromArray(e.position), e.rotation !== void 0 && i.rotation.fromArray(e.rotation), e.quaternion !== void 0 && i.quaternion.fromArray(e.quaternion), e.scale !== void 0 && i.scale.fromArray(e.scale)), e.castShadow !== void 0 && (i.castShadow = e.castShadow), e.receiveShadow !== void 0 && (i.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (i.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (i.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (i.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && i.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (i.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (i.visible = e.visible), e.frustumCulled !== void 0 && (i.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (i.renderOrder = e.renderOrder), e.userData !== void 0 && (i.userData = e.userData), e.layers !== void 0 && (i.layers.mask = e.layers), e.children !== void 0) {
      const c = e.children;
      for (let l = 0; l < c.length; l++)
        i.add(this.parseObject(c[l], t, n));
    }
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (i.autoUpdate = e.autoUpdate);
      const c = e.levels;
      for (let l = 0; l < c.length; l++) {
        const h = c[l], u = i.getObjectByProperty("uuid", h.object);
        u !== void 0 && i.addLevel(u, h.distance);
      }
    }
    return i;
  }
});
const ky = {
  UVMapping: Ac,
  CubeReflectionMapping: Lc,
  CubeRefractionMapping: Cc,
  EquirectangularReflectionMapping: Lu,
  EquirectangularRefractionMapping: Rc,
  CubeUVReflectionMapping: cs,
  CubeUVRefractionMapping: qo
}, Yl = {
  RepeatWrapping: ro,
  ClampToEdgeWrapping: xt,
  MirroredRepeatWrapping: so
}, Jl = {
  NearestFilter: ot,
  NearestMipmapNearestFilter: Da,
  NearestMipmapLinearFilter: Na,
  LinearFilter: dt,
  LinearMipmapNearestFilter: Cu,
  LinearMipmapLinearFilter: Xo
};
function Zl(e) {
  typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), Ne.call(this, e), this.options = { premultiplyAlpha: "none" };
}
Zl.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: Zl,
  isImageBitmapLoader: !0,
  setOptions: function(t) {
    return this.options = t, this;
  },
  load: function(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = pn.get(e);
    if (s !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(s), r.manager.itemEnd(e);
      }, 0), s;
    fetch(e).then(function(o) {
      return o.blob();
    }).then(function(o) {
      return createImageBitmap(o, r.options);
    }).then(function(o) {
      pn.add(e, o), t && t(o), r.manager.itemEnd(e);
    }).catch(function(o) {
      i && i(o), r.manager.itemError(e), r.manager.itemEnd(e);
    }), r.manager.itemStart(e);
  }
});
function nh() {
  this.type = "ShapePath", this.color = new fe(), this.subPaths = [], this.currentPath = null;
}
Object.assign(nh.prototype, {
  moveTo: function(e, t) {
    return this.currentPath = new Zt(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  },
  lineTo: function(e, t) {
    return this.currentPath.lineTo(e, t), this;
  },
  quadraticCurveTo: function(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  },
  bezierCurveTo: function(e, t, n, i, r, s) {
    return this.currentPath.bezierCurveTo(e, t, n, i, r, s), this;
  },
  splineThru: function(e) {
    return this.currentPath.splineThru(e), this;
  },
  toShapes: function(e, t) {
    function n(g) {
      const m = [];
      for (let _ = 0, v = g.length; _ < v; _++) {
        const w = g[_], A = new $n();
        A.curves = w.curves, m.push(A);
      }
      return m;
    }
    function i(g, m) {
      const _ = m.length;
      let v = !1;
      for (let w = _ - 1, A = 0; A < _; w = A++) {
        let E = m[w], U = m[A], L = U.x - E.x, q = U.y - E.y;
        if (Math.abs(q) > Number.EPSILON) {
          if (q < 0 && (E = m[A], L = -L, U = m[w], q = -q), g.y < E.y || g.y > U.y)
            continue;
          if (g.y === E.y) {
            if (g.x === E.x)
              return !0;
          } else {
            const O = q * (g.x - E.x) - L * (g.y - E.y);
            if (O === 0)
              return !0;
            if (O < 0)
              continue;
            v = !v;
          }
        } else {
          if (g.y !== E.y)
            continue;
          if (U.x <= g.x && g.x <= E.x || E.x <= g.x && g.x <= U.x)
            return !0;
        }
      }
      return v;
    }
    const r = Dn.isClockWise, s = this.subPaths;
    if (s.length === 0)
      return [];
    if (t === !0)
      return n(s);
    let o, a, c, l = [];
    if (s.length === 1)
      return a = s[0], c = new $n(), c.curves = a.curves, l.push(c), l;
    let h = !r(s[0].getPoints());
    h = e ? !h : h;
    const u = [], f = [];
    let d = [], p = 0, x;
    f[p] = void 0, d[p] = [];
    for (let g = 0, m = s.length; g < m; g++)
      a = s[g], x = a.getPoints(), o = r(x), o = e ? !o : o, o ? (!h && f[p] && p++, f[p] = { s: new $n(), p: x }, f[p].s.curves = a.curves, h && p++, d[p] = []) : d[p].push({ h: a, p: x[0] });
    if (!f[0])
      return n(s);
    if (f.length > 1) {
      let g = !1;
      const m = [];
      for (let _ = 0, v = f.length; _ < v; _++)
        u[_] = [];
      for (let _ = 0, v = f.length; _ < v; _++) {
        const w = d[_];
        for (let A = 0; A < w.length; A++) {
          const E = w[A];
          let U = !0;
          for (let L = 0; L < f.length; L++)
            i(E.p, f[L].p) && (_ !== L && m.push({ froms: _, tos: L, hole: A }), U ? (U = !1, u[L].push(E)) : g = !0);
          U && u[_].push(E);
        }
      }
      m.length > 0 && (g || (d = u));
    }
    let y;
    for (let g = 0, m = f.length; g < m; g++) {
      c = f[g].s, l.push(c), y = d[g];
      for (let _ = 0, v = y.length; _ < v; _++)
        c.holes.push(y[_].h);
    }
    return l;
  }
});
function ih(e) {
  this.type = "Font", this.data = e;
}
Object.assign(ih.prototype, {
  isFont: !0,
  generateShapes: function(e, t) {
    t === void 0 && (t = 100);
    const n = [], i = Hy(e, t, this.data);
    for (let r = 0, s = i.length; r < s; r++)
      Array.prototype.push.apply(n, i[r].toShapes());
    return n;
  }
});
function Hy(e, t, n) {
  const i = Array.from ? Array.from(e) : String(e).split(""), r = t / n.resolution, s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r, o = [];
  let a = 0, c = 0;
  for (let l = 0; l < i.length; l++) {
    const h = i[l];
    if (h === `
`)
      a = 0, c -= s;
    else {
      const u = Vy(h, r, a, c, n);
      a += u.offsetX, o.push(u.path);
    }
  }
  return o;
}
function Vy(e, t, n, i, r) {
  const s = r.glyphs[e] || r.glyphs["?"];
  if (!s) {
    console.error('THREE.Font: character "' + e + '" does not exists in font family ' + r.familyName + ".");
    return;
  }
  const o = new nh();
  let a, c, l, h, u, f, d, p;
  if (s.o) {
    const x = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
    for (let y = 0, g = x.length; y < g; )
      switch (x[y++]) {
        case "m":
          a = x[y++] * t + n, c = x[y++] * t + i, o.moveTo(a, c);
          break;
        case "l":
          a = x[y++] * t + n, c = x[y++] * t + i, o.lineTo(a, c);
          break;
        case "q":
          l = x[y++] * t + n, h = x[y++] * t + i, u = x[y++] * t + n, f = x[y++] * t + i, o.quadraticCurveTo(u, f, l, h);
          break;
        case "b":
          l = x[y++] * t + n, h = x[y++] * t + i, u = x[y++] * t + n, f = x[y++] * t + i, d = x[y++] * t + n, p = x[y++] * t + i, o.bezierCurveTo(u, f, d, p, l, h);
          break;
      }
  }
  return { offsetX: s.ha * t, path: o };
}
function $l(e) {
  Ne.call(this, e);
}
$l.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: $l,
  load: function(e, t, n, i) {
    const r = this, s = new Vt(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.load(e, function(o) {
      let a;
      try {
        a = JSON.parse(o);
      } catch {
        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), a = JSON.parse(o.substring(65, o.length - 2));
      }
      const c = r.parse(a);
      t && t(c);
    }, n, i);
  },
  parse: function(e) {
    return new ih(e);
  }
});
let Xs;
const rh = {
  getContext: function() {
    return Xs === void 0 && (Xs = new (window.AudioContext || window.webkitAudioContext)()), Xs;
  },
  setContext: function(e) {
    Xs = e;
  }
};
function vc(e) {
  Ne.call(this, e);
}
vc.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: vc,
  load: function(e, t, n, i) {
    const r = this, s = new Vt(r.manager);
    s.setResponseType("arraybuffer"), s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.load(e, function(o) {
      try {
        const a = o.slice(0);
        rh.getContext().decodeAudioData(a, function(l) {
          t(l);
        });
      } catch (a) {
        i ? i(a) : console.error(a), r.manager.itemError(e);
      }
    }, n, i);
  }
});
function Ql(e, t, n) {
  kt.call(this, void 0, n);
  const i = new fe().set(e), r = new fe().set(t), s = new b(i.r, i.g, i.b), o = new b(r.r, r.g, r.b), a = Math.sqrt(Math.PI), c = a * Math.sqrt(0.75);
  this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a), this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c);
}
Ql.prototype = Object.assign(Object.create(kt.prototype), {
  constructor: Ql,
  isHemisphereLightProbe: !0,
  copy: function(e) {
    return kt.prototype.copy.call(this, e), this;
  },
  toJSON: function(e) {
    return kt.prototype.toJSON.call(this, e);
  }
});
function Kl(e, t) {
  kt.call(this, void 0, t);
  const n = new fe().set(e);
  this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
}
Kl.prototype = Object.assign(Object.create(kt.prototype), {
  constructor: Kl,
  isAmbientLightProbe: !0,
  copy: function(e) {
    return kt.prototype.copy.call(this, e), this;
  },
  toJSON: function(e) {
    return kt.prototype.toJSON.call(this, e);
  }
});
const eu = new Ce(), tu = new Ce();
function Wy() {
  this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new tt(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new tt(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
    focus: null,
    fov: null,
    aspect: null,
    near: null,
    far: null,
    zoom: null,
    eyeSep: null
  };
}
Object.assign(Wy.prototype, {
  update: function(e) {
    const t = this._cache;
    if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep;
      const i = e.projectionMatrix.clone(), r = t.eyeSep / 2, s = r * t.near / t.focus, o = t.near * Math.tan(Ae.DEG2RAD * t.fov * 0.5) / t.zoom;
      let a, c;
      tu.elements[12] = -r, eu.elements[12] = r, a = -o * t.aspect + s, c = o * t.aspect + s, i.elements[0] = 2 * t.near / (c - a), i.elements[8] = (c + a) / (c - a), this.cameraL.projectionMatrix.copy(i), a = -o * t.aspect - s, c = o * t.aspect - s, i.elements[0] = 2 * t.near / (c - a), i.elements[8] = (c + a) / (c - a), this.cameraR.projectionMatrix.copy(i);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(tu), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(eu);
  }
});
function sh(e) {
  this.autoStart = e !== void 0 ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
}
Object.assign(sh.prototype, {
  start: function() {
    this.startTime = (typeof performance > "u" ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  },
  stop: function() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  },
  getElapsedTime: function() {
    return this.getDelta(), this.elapsedTime;
  },
  getDelta: function() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = (typeof performance > "u" ? Date : performance).now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
});
const jn = new b(), nu = new at(), jy = new b(), qn = new b();
function iu() {
  ie.call(this), this.type = "AudioListener", this.context = rh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new sh();
}
iu.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: iu,
  getInput: function() {
    return this.gain;
  },
  removeFilter: function() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  },
  getFilter: function() {
    return this.filter;
  },
  setFilter: function(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  },
  getMasterVolume: function() {
    return this.gain.gain.value;
  },
  setMasterVolume: function(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  },
  updateMatrixWorld: function(e) {
    ie.prototype.updateMatrixWorld.call(this, e);
    const t = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(jn, nu, jy), qn.set(0, 0, -1).applyQuaternion(nu), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(jn.x, i), t.positionY.linearRampToValueAtTime(jn.y, i), t.positionZ.linearRampToValueAtTime(jn.z, i), t.forwardX.linearRampToValueAtTime(qn.x, i), t.forwardY.linearRampToValueAtTime(qn.y, i), t.forwardZ.linearRampToValueAtTime(qn.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
    } else
      t.setPosition(jn.x, jn.y, jn.z), t.setOrientation(qn.x, qn.y, qn.z, n.x, n.y, n.z);
  }
});
function ts(e) {
  ie.call(this), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this.filters = [];
}
ts.prototype = Object.assign(Object.create(ie.prototype), {
  constructor: ts,
  getOutput: function() {
    return this.gain;
  },
  setNodeSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  },
  setMediaElementSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  },
  setMediaStreamSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  },
  setBuffer: function(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  },
  play: function(e) {
    if (e === void 0 && (e = 0), this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  },
  pause: function() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  },
  stop: function() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
  },
  connect: function() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this;
  },
  disconnect: function() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else
      this.source.disconnect(this.getOutput());
    return this;
  },
  getFilters: function() {
    return this.filters;
  },
  setFilters: function(e) {
    return e || (e = []), this.isPlaying === !0 ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this;
  },
  setDetune: function(e) {
    if (this.detune = e, this.source.detune !== void 0)
      return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  },
  getDetune: function() {
    return this.detune;
  },
  getFilter: function() {
    return this.getFilters()[0];
  },
  setFilter: function(e) {
    return this.setFilters(e ? [e] : []);
  },
  setPlaybackRate: function(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  },
  getPlaybackRate: function() {
    return this.playbackRate;
  },
  onEnded: function() {
    this.isPlaying = !1;
  },
  getLoop: function() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  },
  setLoop: function(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  },
  setLoopStart: function(e) {
    return this.loopStart = e, this;
  },
  setLoopEnd: function(e) {
    return this.loopEnd = e, this;
  },
  getVolume: function() {
    return this.gain.gain.value;
  },
  setVolume: function(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
});
const Xn = new b(), ru = new at(), qy = new b(), Yn = new b();
function su(e) {
  ts.call(this, e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
}
su.prototype = Object.assign(Object.create(ts.prototype), {
  constructor: su,
  getOutput: function() {
    return this.panner;
  },
  getRefDistance: function() {
    return this.panner.refDistance;
  },
  setRefDistance: function(e) {
    return this.panner.refDistance = e, this;
  },
  getRolloffFactor: function() {
    return this.panner.rolloffFactor;
  },
  setRolloffFactor: function(e) {
    return this.panner.rolloffFactor = e, this;
  },
  getDistanceModel: function() {
    return this.panner.distanceModel;
  },
  setDistanceModel: function(e) {
    return this.panner.distanceModel = e, this;
  },
  getMaxDistance: function() {
    return this.panner.maxDistance;
  },
  setMaxDistance: function(e) {
    return this.panner.maxDistance = e, this;
  },
  setDirectionalCone: function(e, t, n) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
  },
  updateMatrixWorld: function(e) {
    if (ie.prototype.updateMatrixWorld.call(this, e), this.hasPlaybackControl === !0 && this.isPlaying === !1)
      return;
    this.matrixWorld.decompose(Xn, ru, qy), Yn.set(0, 0, 1).applyQuaternion(ru);
    const t = this.panner;
    if (t.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(Xn.x, n), t.positionY.linearRampToValueAtTime(Xn.y, n), t.positionZ.linearRampToValueAtTime(Xn.z, n), t.orientationX.linearRampToValueAtTime(Yn.x, n), t.orientationY.linearRampToValueAtTime(Yn.y, n), t.orientationZ.linearRampToValueAtTime(Yn.z, n);
    } else
      t.setPosition(Xn.x, Xn.y, Xn.z), t.setOrientation(Yn.x, Yn.y, Yn.z);
  }
});
function oh(e, t) {
  this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t !== void 0 ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
}
Object.assign(oh.prototype, {
  getFrequencyData: function() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  },
  getAverageFrequency: function() {
    let e = 0;
    const t = this.getFrequencyData();
    for (let n = 0; n < t.length; n++)
      e += t[n];
    return e / t.length;
  }
});
function ah(e, t, n) {
  this.binding = e, this.valueSize = n;
  let i, r, s;
  switch (t) {
    case "quaternion":
      i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
      break;
    case "string":
    case "bool":
      i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
      break;
    default:
      i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
  }
  this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
}
Object.assign(ah.prototype, {
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate: function(e, t) {
    const n = this.buffer, i = this.valueSize, r = e * i + i;
    let s = this.cumulativeWeight;
    if (s === 0) {
      for (let o = 0; o !== i; ++o)
        n[r + o] = n[o];
      s = t;
    } else {
      s += t;
      const o = t / s;
      this._mixBufferRegion(n, r, 0, o, i);
    }
    this.cumulativeWeight = s;
  },
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive: function(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  },
  // apply the state of 'accu<i>' to the binding when accus differ
  apply: function(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, r = this.cumulativeWeight, s = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const a = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        a,
        1 - r,
        t
      );
    }
    s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let a = t, c = t + t; a !== c; ++a)
      if (n[a] !== n[a + t]) {
        o.setValue(n, i);
        break;
      }
  },
  // remember the state of the bound property and copy it to both accus
  saveOriginalState: function() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let r = n, s = i; r !== s; ++r)
      t[r] = t[i + r % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  },
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState: function() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  },
  _setAdditiveIdentityNumeric: function() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  },
  _setAdditiveIdentityQuaternion: function() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * 4 + 3] = 1;
  },
  _setAdditiveIdentityOther: function() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  },
  // mix functions
  _select: function(e, t, n, i, r) {
    if (i >= 0.5)
      for (let s = 0; s !== r; ++s)
        e[t + s] = e[n + s];
  },
  _slerp: function(e, t, n, i) {
    at.slerpFlat(e, t, e, t, e, n, i);
  },
  _slerpAdditive: function(e, t, n, i, r) {
    const s = this._workIndex * r;
    at.multiplyQuaternionsFlat(e, s, e, t, e, n), at.slerpFlat(e, t, e, t, e, s, i);
  },
  _lerp: function(e, t, n, i, r) {
    const s = 1 - i;
    for (let o = 0; o !== r; ++o) {
      const a = t + o;
      e[a] = e[a] * s + e[n + o] * i;
    }
  },
  _lerpAdditive: function(e, t, n, i, r) {
    for (let s = 0; s !== r; ++s) {
      const o = t + s;
      e[o] = e[o] + e[n + s] * i;
    }
  }
});
const Fc = "\\[\\]\\.:\\/", Xy = new RegExp("[" + Fc + "]", "g"), Uc = "[^" + Fc + "]", Yy = "[^" + Fc.replace("\\.", "") + "]", Jy = /((?:WC+[\/:])*)/.source.replace("WC", Uc), Zy = /(WCOD+)?/.source.replace("WCOD", Yy), $y = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Uc), Qy = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Uc), Ky = new RegExp(
  "^" + Jy + Zy + $y + Qy + "$"
), ex = ["material", "materials", "bones"];
function ch(e, t, n) {
  const i = n || yt.parseTrackName(t);
  this._targetGroup = e, this._bindings = e.subscribe_(t, i);
}
Object.assign(ch.prototype, {
  getValue: function(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  },
  setValue: function(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  },
  bind: function() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  },
  unbind: function() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
});
function yt(e, t, n) {
  this.path = t, this.parsedPath = n || yt.parseTrackName(t), this.node = yt.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e;
}
Object.assign(yt, {
  Composite: ch,
  create: function(e, t, n) {
    return e && e.isAnimationObjectGroup ? new yt.Composite(e, t, n) : new yt(e, t, n);
  },
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  sanitizeNodeName: function(e) {
    return e.replace(/\s/g, "_").replace(Xy, "");
  },
  parseTrackName: function(e) {
    const t = Ky.exec(e);
    if (!t)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      ex.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  },
  findNode: function(e, t) {
    if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let s = 0; s < r.length; s++) {
          const o = r[s];
          if (o.name === t || o.uuid === t)
            return o;
          const a = n(o.children);
          if (a)
            return a;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
});
Object.assign(yt.prototype, {
  // prototype, continued
  // these are used to "bind" a nonexistent property
  _getValue_unavailable: function() {
  },
  _setValue_unavailable: function() {
  },
  BindingType: {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  },
  Versioning: {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  },
  GetterByBindingType: [
    function(t, n) {
      t[n] = this.node[this.propertyName];
    },
    function(t, n) {
      const i = this.resolvedProperty;
      for (let r = 0, s = i.length; r !== s; ++r)
        t[n++] = i[r];
    },
    function(t, n) {
      t[n] = this.resolvedProperty[this.propertyIndex];
    },
    function(t, n) {
      this.resolvedProperty.toArray(t, n);
    }
  ],
  SetterByBindingTypeAndVersioning: [
    [
      // Direct
      function(t, n) {
        this.targetObject[this.propertyName] = t[n];
      },
      function(t, n) {
        this.targetObject[this.propertyName] = t[n], this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        this.targetObject[this.propertyName] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ],
    [
      // EntireArray
      function(t, n) {
        const i = this.resolvedProperty;
        for (let r = 0, s = i.length; r !== s; ++r)
          i[r] = t[n++];
      },
      function(t, n) {
        const i = this.resolvedProperty;
        for (let r = 0, s = i.length; r !== s; ++r)
          i[r] = t[n++];
        this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        const i = this.resolvedProperty;
        for (let r = 0, s = i.length; r !== s; ++r)
          i[r] = t[n++];
        this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ],
    [
      // ArrayElement
      function(t, n) {
        this.resolvedProperty[this.propertyIndex] = t[n];
      },
      function(t, n) {
        this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ],
    [
      // HasToFromArray
      function(t, n) {
        this.resolvedProperty.fromArray(t, n);
      },
      function(t, n) {
        this.resolvedProperty.fromArray(t, n), this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        this.resolvedProperty.fromArray(t, n), this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ]
  ],
  getValue: function(t, n) {
    this.bind(), this.getValue(t, n);
  },
  setValue: function(t, n) {
    this.bind(), this.setValue(t, n);
  },
  // create getter / setter pair for a property in the scene graph
  bind: function() {
    let e = this.node, t = this.parsedPath, n = t.objectName, i = t.propertyName, r = t.propertyIndex;
    if (e || (e = yt.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let l = 0; l < e.length; l++)
            if (e[l].name === c) {
              c = l;
              break;
            }
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const s = e[i];
    if (s === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let a = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (e.geometry.isBufferGeometry) {
          if (!e.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
        } else {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
          return;
        }
      }
      a = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
    } else
      s.fromArray !== void 0 && s.toArray !== void 0 ? (a = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (a = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[a], this.setValue = this.SetterByBindingTypeAndVersioning[a][o];
  },
  unbind: function() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
});
Object.assign(yt.prototype, {
  // initial state of these methods that calls 'bind'
  _getValue_unbound: yt.prototype.getValue,
  _setValue_unbound: yt.prototype.setValue
});
function tx() {
  this.uuid = Ae.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
  const e = {};
  this._indicesByUUID = e;
  for (let n = 0, i = arguments.length; n !== i; ++n)
    e[arguments[n].uuid] = n;
  this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
  const t = this;
  this.stats = {
    objects: {
      get total() {
        return t._objects.length;
      },
      get inUse() {
        return this.total - t.nCachedObjects_;
      }
    },
    get bindingsPerObject() {
      return t._bindings.length;
    }
  };
}
Object.assign(tx.prototype, {
  isAnimationObjectGroup: !0,
  add: function() {
    const e = this._objects, t = this._indicesByUUID, n = this._paths, i = this._parsedPaths, r = this._bindings, s = r.length;
    let o, a = e.length, c = this.nCachedObjects_;
    for (let l = 0, h = arguments.length; l !== h; ++l) {
      const u = arguments[l], f = u.uuid;
      let d = t[f];
      if (d === void 0) {
        d = a++, t[f] = d, e.push(u);
        for (let p = 0, x = s; p !== x; ++p)
          r[p].push(new yt(u, n[p], i[p]));
      } else if (d < c) {
        o = e[d];
        const p = --c, x = e[p];
        t[x.uuid] = d, e[d] = x, t[f] = p, e[p] = u;
        for (let y = 0, g = s; y !== g; ++y) {
          const m = r[y], _ = m[p];
          let v = m[d];
          m[d] = _, v === void 0 && (v = new yt(u, n[y], i[y])), m[p] = v;
        }
      } else
        e[d] !== o && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = c;
  },
  remove: function() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let r = this.nCachedObjects_;
    for (let s = 0, o = arguments.length; s !== o; ++s) {
      const a = arguments[s], c = a.uuid, l = t[c];
      if (l !== void 0 && l >= r) {
        const h = r++, u = e[h];
        t[u.uuid] = l, e[l] = u, t[c] = h, e[h] = a;
        for (let f = 0, d = i; f !== d; ++f) {
          const p = n[f], x = p[h], y = p[l];
          p[l] = x, p[h] = y;
        }
      }
    }
    this.nCachedObjects_ = r;
  },
  // remove & forget
  uncache: function() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let r = this.nCachedObjects_, s = e.length;
    for (let o = 0, a = arguments.length; o !== a; ++o) {
      const c = arguments[o], l = c.uuid, h = t[l];
      if (h !== void 0)
        if (delete t[l], h < r) {
          const u = --r, f = e[u], d = --s, p = e[d];
          t[f.uuid] = h, e[h] = f, t[p.uuid] = u, e[u] = p, e.pop();
          for (let x = 0, y = i; x !== y; ++x) {
            const g = n[x], m = g[u], _ = g[d];
            g[h] = m, g[u] = _, g.pop();
          }
        } else {
          const u = --s, f = e[u];
          t[f.uuid] = h, e[h] = f, e.pop();
          for (let d = 0, p = i; d !== p; ++d) {
            const x = n[d];
            x[h] = x[u], x.pop();
          }
        }
    }
    this.nCachedObjects_ = r;
  },
  // Internal interface used by befriended PropertyBinding.Composite:
  subscribe_: function(e, t) {
    let n = this._bindingsIndicesByPath, i = n[e], r = this._bindings;
    if (i !== void 0)
      return r[i];
    const s = this._paths, o = this._parsedPaths, a = this._objects, c = a.length, l = this.nCachedObjects_, h = new Array(c);
    i = r.length, n[e] = i, s.push(e), o.push(t), r.push(h);
    for (let u = l, f = a.length; u !== f; ++u) {
      const d = a[u];
      h[u] = new yt(d, e, t);
    }
    return h;
  },
  unsubscribe_: function(e) {
    const t = this._bindingsIndicesByPath, n = t[e];
    if (n !== void 0) {
      const i = this._paths, r = this._parsedPaths, s = this._bindings, o = s.length - 1, a = s[o], c = e[o];
      t[c] = n, s[n] = a, s.pop(), r[n] = r[o], r.pop(), i[n] = i[o], i.pop();
    }
  }
});
function lh(e, t, n, i) {
  this._mixer = e, this._clip = t, this._localRoot = n || null, this.blendMode = i || t.blendMode;
  const r = t.tracks, s = r.length, o = new Array(s), a = {
    endingStart: Ni,
    endingEnd: Ni
  };
  for (let c = 0; c !== s; ++c) {
    const l = r[c].createInterpolant(null);
    o[c] = l, l.settings = a;
  }
  this._interpolantSettings = a, this._interpolants = o, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Vf, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
}
Object.assign(lh.prototype, {
  // State & Scheduling
  play: function() {
    return this._mixer._activateAction(this), this;
  },
  stop: function() {
    return this._mixer._deactivateAction(this), this.reset();
  },
  reset: function() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  },
  isRunning: function() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  },
  // return true when play has been called
  isScheduled: function() {
    return this._mixer._isActiveAction(this);
  },
  startAt: function(e) {
    return this._startTime = e, this;
  },
  setLoop: function(e, t) {
    return this.loop = e, this.repetitions = t, this;
  },
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight: function(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  },
  // return the weight considering fading and .enabled
  getEffectiveWeight: function() {
    return this._effectiveWeight;
  },
  fadeIn: function(e) {
    return this._scheduleFading(e, 0, 1);
  },
  fadeOut: function(e) {
    return this._scheduleFading(e, 1, 0);
  },
  crossFadeFrom: function(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, r = e._clip.duration, s = r / i, o = i / r;
      e.warp(1, s, t), this.warp(o, 1, t);
    }
    return this;
  },
  crossFadeTo: function(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  },
  stopFading: function() {
    let e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  },
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale: function(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  },
  // return the time scale considering warping and .paused
  getEffectiveTimeScale: function() {
    return this._effectiveTimeScale;
  },
  setDuration: function(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  },
  syncWith: function(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  },
  halt: function(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  },
  warp: function(e, t, n) {
    const i = this._mixer, r = i.time, s = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const a = o.parameterPositions, c = o.sampleValues;
    return a[0] = r, a[1] = r + n, c[0] = e / s, c[1] = t / s, this;
  },
  stopWarping: function() {
    let e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  },
  // Object Accessors
  getMixer: function() {
    return this._mixer;
  },
  getClip: function() {
    return this._clip;
  },
  getRoot: function() {
    return this._localRoot || this._mixer._root;
  },
  // Interna
  _update: function(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const a = (e - r) * n;
      if (a < 0 || n === 0)
        return;
      this._startTime = null, t = n * a;
    }
    t *= this._updateTimeScale(e);
    const s = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0) {
      const a = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case Ru:
          for (let l = 0, h = a.length; l !== h; ++l)
            a[l].evaluate(s), c[l].accumulateAdditive(o);
          break;
        case Pc:
        default:
          for (let l = 0, h = a.length; l !== h; ++l)
            a[l].evaluate(s), c[l].accumulate(i, o);
      }
    }
  },
  _updateWeight: function(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  },
  _updateTimeScale: function(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  },
  _updateTime: function(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, r = this._loopCount;
    const s = n === Wf;
    if (e === 0)
      return r === -1 ? i : s && (r & 1) === 1 ? t - i : i;
    if (n === Hf) {
      r === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(!0, this.repetitions === 0, s)) : this._setEndings(this.repetitions === 0, !0, s)), i >= t || i < 0) {
        const o = Math.floor(i / t);
        i -= t * o, r += Math.abs(o);
        const a = this.repetitions - r;
        if (a <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (a === 1) {
            const c = e < 0;
            this._setEndings(c, !c, s);
          } else
            this._setEndings(!1, !1, s);
          this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = i;
      if (s && (r & 1) === 1)
        return t - i;
    }
    return i;
  },
  _setEndings: function(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = Ai, i.endingEnd = Ai) : (e ? i.endingStart = this.zeroSlopeAtStart ? Ai : Ni : i.endingStart = lo, t ? i.endingEnd = this.zeroSlopeAtEnd ? Ai : Ni : i.endingEnd = lo);
  },
  _scheduleFading: function(e, t, n) {
    const i = this._mixer, r = i.time;
    let s = this._weightInterpolant;
    s === null && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
    const o = s.parameterPositions, a = s.sampleValues;
    return o[0] = r, a[0] = t, o[1] = r + e, a[1] = n, this;
  }
});
function ou(e) {
  this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
}
ou.prototype = Object.assign(Object.create(xn.prototype), {
  constructor: ou,
  _bindAction: function(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, r = i.length, s = e._propertyBindings, o = e._interpolants, a = n.uuid, c = this._bindingsByRootAndName;
    let l = c[a];
    l === void 0 && (l = {}, c[a] = l);
    for (let h = 0; h !== r; ++h) {
      const u = i[h], f = u.name;
      let d = l[f];
      if (d !== void 0)
        s[h] = d;
      else {
        if (d = s[h], d !== void 0) {
          d._cacheIndex === null && (++d.referenceCount, this._addInactiveBinding(d, a, f));
          continue;
        }
        const p = t && t._propertyBindings[h].binding.parsedPath;
        d = new ah(
          yt.create(n, f, p),
          u.ValueTypeName,
          u.getValueSize()
        ), ++d.referenceCount, this._addInactiveBinding(d, a, f), s[h] = d;
      }
      o[h].resultBuffer = d.buffer;
    }
  },
  _activateAction: function(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, r = this._actionsByClip[i];
        this._bindAction(
          e,
          r && r.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  },
  _deactivateAction: function(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(e);
    }
  },
  // Memory manager
  _initMemoryManager: function() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  },
  // Memory management for AnimationAction objects
  _isActiveAction: function(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  },
  _addInactiveAction: function(e, t, n) {
    const i = this._actions, r = this._actionsByClip;
    let s = r[t];
    if (s === void 0)
      s = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, r[t] = s;
    else {
      const o = s.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = i.length, i.push(e), s.actionByRoot[n] = e;
  },
  _removeInactiveAction: function(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const r = e._clip.uuid, s = this._actionsByClip, o = s[r], a = o.knownActions, c = a[a.length - 1], l = e._byClipCacheIndex;
    c._byClipCacheIndex = l, a[l] = c, a.pop(), e._byClipCacheIndex = null;
    const h = o.actionByRoot, u = (e._localRoot || this._root).uuid;
    delete h[u], a.length === 0 && delete s[r], this._removeInactiveBindingsForAction(e);
  },
  _removeInactiveBindingsForAction: function(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const r = t[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  },
  _lendAction: function(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  },
  _takeBackAction: function(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  },
  // Memory management for PropertyMixer objects
  _addInactiveBinding: function(e, t, n) {
    const i = this._bindingsByRootAndName, r = this._bindings;
    let s = i[t];
    s === void 0 && (s = {}, i[t] = s), s[n] = e, e._cacheIndex = r.length, r.push(e);
  },
  _removeInactiveBinding: function(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, r = n.path, s = this._bindingsByRootAndName, o = s[i], a = t[t.length - 1], c = e._cacheIndex;
    a._cacheIndex = c, t[c] = a, t.pop(), delete o[r], Object.keys(o).length === 0 && delete s[i];
  },
  _lendBinding: function(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  },
  _takeBackBinding: function(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  },
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant: function() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new Oo(
      new Float32Array(2),
      new Float32Array(2),
      1,
      this._controlInterpolantsResultBuffer
    ), n.__cacheIndex = t, e[t] = n), n;
  },
  _takeBackControlInterpolant: function(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, r = t[i];
    e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r;
  },
  _controlInterpolantsResultBuffer: new Float32Array(1),
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction: function(e, t, n) {
    const i = t || this._root, r = i.uuid;
    let s = typeof e == "string" ? zt.findByName(i, e) : e;
    const o = s !== null ? s.uuid : e;
    let a = this._actionsByClip[o], c = null;
    if (n === void 0 && (s !== null ? n = s.blendMode : n = Pc), a !== void 0) {
      const h = a.actionByRoot[r];
      if (h !== void 0 && h.blendMode === n)
        return h;
      c = a.knownActions[0], s === null && (s = c._clip);
    }
    if (s === null)
      return null;
    const l = new lh(this, s, t, n);
    return this._bindAction(l, c), this._addInactiveAction(l, o, r), l;
  },
  // get an existing action
  existingAction: function(e, t) {
    const n = t || this._root, i = n.uuid, r = typeof e == "string" ? zt.findByName(n, e) : e, s = r ? r.uuid : e, o = this._actionsByClip[s];
    return o !== void 0 && o.actionByRoot[i] || null;
  },
  // deactivates all previously scheduled actions
  stopAllAction: function() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  },
  // advance the time and update apply the animation
  update: function(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), s = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c)
      t[c]._update(i, e, r, s);
    const o = this._bindings, a = this._nActiveBindings;
    for (let c = 0; c !== a; ++c)
      o[c].apply(s);
    return this;
  },
  // Allows you to seek to a specific time in an animation.
  setTime: function(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  },
  // return this mixer's root target object
  getRoot: function() {
    return this._root;
  },
  // free all resources specific to a particular clip
  uncacheClip: function(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, r = i[n];
    if (r !== void 0) {
      const s = r.knownActions;
      for (let o = 0, a = s.length; o !== a; ++o) {
        const c = s[o];
        this._deactivateAction(c);
        const l = c._cacheIndex, h = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = l, t[l] = h, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  },
  // free all resources specific to a particular root target object
  uncacheRoot: function(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const s in n) {
      const o = n[s].actionByRoot, a = o[t];
      a !== void 0 && (this._deactivateAction(a), this._removeInactiveAction(a));
    }
    const i = this._bindingsByRootAndName, r = i[t];
    if (r !== void 0)
      for (const s in r) {
        const o = r[s];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  },
  // remove a targeted clip from the cache
  uncacheAction: function(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
});
function _c(e) {
  typeof e == "string" && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e;
}
_c.prototype.clone = function() {
  return new _c(this.value.clone === void 0 ? this.value : this.value.clone());
};
function au(e, t, n) {
  At.call(this, e, t), this.meshPerAttribute = n || 1;
}
au.prototype = Object.assign(Object.create(At.prototype), {
  constructor: au,
  isInstancedInterleavedBuffer: !0,
  copy: function(e) {
    return At.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this;
  },
  clone: function(e) {
    const t = At.prototype.clone.call(this, e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  },
  toJSON: function(e) {
    const t = At.prototype.toJSON.call(this, e);
    return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
  }
});
function uh(e, t, n, i) {
  this.ray = new nr(e, t), this.near = n || 0, this.far = i || 1 / 0, this.camera = null, this.layers = new Dc(), this.params = {
    Mesh: {},
    Line: { threshold: 1 },
    LOD: {},
    Points: { threshold: 1 },
    Sprite: {}
  }, Object.defineProperties(this.params, {
    PointCloud: {
      get: function() {
        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points;
      }
    }
  });
}
function cu(e, t) {
  return e.distance - t.distance;
}
function bc(e, t, n, i) {
  if (e.layers.test(t.layers) && e.raycast(t, n), i === !0) {
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++)
      bc(r[s], t, n, !0);
  }
}
Object.assign(uh.prototype, {
  set: function(e, t) {
    this.ray.set(e, t);
  },
  setFromCamera: function(e, t) {
    t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type.");
  },
  intersectObject: function(e, t, n) {
    const i = n || [];
    return bc(e, this, i, t), i.sort(cu), i;
  },
  intersectObjects: function(e, t, n) {
    const i = n || [];
    if (Array.isArray(e) === !1)
      return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
    for (let r = 0, s = e.length; r < s; r++)
      bc(e[r], this, i, t);
    return i.sort(cu), i;
  }
});
function nx(e, t, n) {
  return this.radius = e !== void 0 ? e : 1, this.theta = t !== void 0 ? t : 0, this.y = n !== void 0 ? n : 0, this;
}
Object.assign(nx.prototype, {
  set: function(e, t, n) {
    return this.radius = e, this.theta = t, this.y = n, this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
  },
  setFromVector3: function(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  },
  setFromCartesianCoords: function(e, t, n) {
    return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
  }
});
const lu = new H();
function hh(e, t) {
  this.min = e !== void 0 ? e : new H(1 / 0, 1 / 0), this.max = t !== void 0 ? t : new H(-1 / 0, -1 / 0);
}
Object.assign(hh.prototype, {
  set: function(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  },
  setFromPoints: function(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  },
  setFromCenterAndSize: function(e, t) {
    const n = lu.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  },
  makeEmpty: function() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  },
  isEmpty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new H()), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  },
  getSize: function(e) {
    return e === void 0 && (console.warn("THREE.Box2: .getSize() target is now required"), e = new H()), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  },
  expandByPoint: function(e) {
    return this.min.min(e), this.max.max(e), this;
  },
  expandByVector: function(e) {
    return this.min.sub(e), this.max.add(e), this;
  },
  expandByScalar: function(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  },
  containsPoint: function(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  },
  getParameter: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new H()), t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  },
  intersectsBox: function(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
  },
  clampPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new H()), t.copy(e).clamp(this.min, this.max);
  },
  distanceToPoint: function(e) {
    return lu.copy(e).clamp(this.min, this.max).sub(e).length();
  },
  intersect: function(e) {
    return this.min.max(e.min), this.max.min(e.max), this;
  },
  union: function(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  },
  translate: function(e) {
    return this.min.add(e), this.max.add(e), this;
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
});
const uu = new b(), Ys = new b();
function fh(e, t) {
  this.start = e !== void 0 ? e : new b(), this.end = t !== void 0 ? t : new b();
}
Object.assign(fh.prototype, {
  set: function(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new b()), e.addVectors(this.start, this.end).multiplyScalar(0.5);
  },
  delta: function(e) {
    return e === void 0 && (console.warn("THREE.Line3: .delta() target is now required"), e = new b()), e.subVectors(this.end, this.start);
  },
  distanceSq: function() {
    return this.start.distanceToSquared(this.end);
  },
  distance: function() {
    return this.start.distanceTo(this.end);
  },
  at: function(e, t) {
    return t === void 0 && (console.warn("THREE.Line3: .at() target is now required"), t = new b()), this.delta(t).multiplyScalar(e).add(this.start);
  },
  closestPointToPointParameter: function(e, t) {
    uu.subVectors(e, this.start), Ys.subVectors(this.end, this.start);
    const n = Ys.dot(Ys);
    let r = Ys.dot(uu) / n;
    return t && (r = Ae.clamp(r, 0, 1)), r;
  },
  closestPointToPoint: function(e, t, n) {
    const i = this.closestPointToPointParameter(e, t);
    return n === void 0 && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new b()), this.delta(n).multiplyScalar(i).add(this.start);
  },
  applyMatrix4: function(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  },
  equals: function(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
});
function Go(e) {
  ie.call(this), this.material = e, this.render = function() {
  }, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0;
}
Go.prototype = Object.create(ie.prototype);
Go.prototype.constructor = Go;
Go.prototype.isImmediateRenderObject = !0;
const hu = new b();
function ns(e, t) {
  ie.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
  const n = new he(), i = [
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    -1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    -1,
    1
  ];
  for (let s = 0, o = 1, a = 32; s < a; s++, o++) {
    const c = s / a * Math.PI * 2, l = o / a * Math.PI * 2;
    i.push(
      Math.cos(c),
      Math.sin(c),
      1,
      Math.cos(l),
      Math.sin(l),
      1
    );
  }
  n.setAttribute("position", new oe(i, 3));
  const r = new Qe({ fog: !1, toneMapped: !1 });
  this.cone = new nt(n, r), this.add(this.cone), this.update();
}
ns.prototype = Object.create(ie.prototype);
ns.prototype.constructor = ns;
ns.prototype.dispose = function() {
  this.cone.geometry.dispose(), this.cone.material.dispose();
};
ns.prototype.update = function() {
  this.light.updateMatrixWorld();
  const e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
  this.cone.scale.set(t, t, e), hu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(hu), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
};
const Ln = new b(), Js = new Ce(), Ca = new Ce();
function dh(e) {
  const t = [];
  e && e.isBone && t.push(e);
  for (let n = 0; n < e.children.length; n++)
    t.push.apply(t, dh(e.children[n]));
  return t;
}
function Qi(e) {
  const t = dh(e), n = new he(), i = [], r = [], s = new fe(0, 0, 1), o = new fe(0, 1, 0);
  for (let c = 0; c < t.length; c++) {
    const l = t[c];
    l.parent && l.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(o.r, o.g, o.b));
  }
  n.setAttribute("position", new oe(i, 3)), n.setAttribute("color", new oe(r, 3));
  const a = new Qe({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
  nt.call(this, n, a), this.type = "SkeletonHelper", this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
}
Qi.prototype = Object.create(nt.prototype);
Qi.prototype.constructor = Qi;
Qi.prototype.isSkeletonHelper = !0;
Qi.prototype.updateMatrixWorld = function(e) {
  const t = this.bones, n = this.geometry, i = n.getAttribute("position");
  Ca.getInverse(this.root.matrixWorld);
  for (let r = 0, s = 0; r < t.length; r++) {
    const o = t[r];
    o.parent && o.parent.isBone && (Js.multiplyMatrices(Ca, o.matrixWorld), Ln.setFromMatrixPosition(Js), i.setXYZ(s, Ln.x, Ln.y, Ln.z), Js.multiplyMatrices(Ca, o.parent.matrixWorld), Ln.setFromMatrixPosition(Js), i.setXYZ(s + 1, Ln.x, Ln.y, Ln.z), s += 2);
  }
  n.getAttribute("position").needsUpdate = !0, ie.prototype.updateMatrixWorld.call(this, e);
};
function is(e, t, n) {
  this.light = e, this.light.updateMatrixWorld(), this.color = n;
  const i = new Hi(t, 4, 2), r = new Pt({ wireframe: !0, fog: !1, toneMapped: !1 });
  Fe.call(this, i, r), this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
}
is.prototype = Object.create(Fe.prototype);
is.prototype.constructor = is;
is.prototype.dispose = function() {
  this.geometry.dispose(), this.material.dispose();
};
is.prototype.update = function() {
  this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
};
const ix = new b(), fu = new fe(), du = new fe();
function rs(e, t, n) {
  ie.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
  const i = new Gi(t);
  i.rotateY(Math.PI * 0.5), this.material = new Pt({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
  const r = i.getAttribute("position"), s = new Float32Array(r.count * 3);
  i.setAttribute("color", new ge(s, 3)), this.add(new Fe(i, this.material)), this.update();
}
rs.prototype = Object.create(ie.prototype);
rs.prototype.constructor = rs;
rs.prototype.dispose = function() {
  this.children[0].geometry.dispose(), this.children[0].material.dispose();
};
rs.prototype.update = function() {
  const e = this.children[0];
  if (this.color !== void 0)
    this.material.color.set(this.color);
  else {
    const t = e.geometry.getAttribute("color");
    fu.copy(this.light.color), du.copy(this.light.groundColor);
    for (let n = 0, i = t.count; n < i; n++) {
      const r = n < i / 2 ? fu : du;
      t.setXYZ(n, r.r, r.g, r.b);
    }
    t.needsUpdate = !0;
  }
  e.lookAt(ix.setFromMatrixPosition(this.light.matrixWorld).negate());
};
function zo(e, t, n, i) {
  e = e || 10, t = t || 10, n = new fe(n !== void 0 ? n : 4473924), i = new fe(i !== void 0 ? i : 8947848);
  const r = t / 2, s = e / t, o = e / 2, a = [], c = [];
  for (let u = 0, f = 0, d = -o; u <= t; u++, d += s) {
    a.push(-o, 0, d, o, 0, d), a.push(d, 0, -o, d, 0, o);
    const p = u === r ? n : i;
    p.toArray(c, f), f += 3, p.toArray(c, f), f += 3, p.toArray(c, f), f += 3, p.toArray(c, f), f += 3;
  }
  const l = new he();
  l.setAttribute("position", new oe(a, 3)), l.setAttribute("color", new oe(c, 3));
  const h = new Qe({ vertexColors: !0, toneMapped: !1 });
  nt.call(this, l, h), this.type = "GridHelper";
}
zo.prototype = Object.create(nt.prototype);
zo.prototype.constructor = zo;
function wc(e, t, n, i, r, s) {
  e = e || 10, t = t || 16, n = n || 8, i = i || 64, r = new fe(r !== void 0 ? r : 4473924), s = new fe(s !== void 0 ? s : 8947848);
  const o = [], a = [];
  for (let h = 0; h <= t; h++) {
    const u = h / t * (Math.PI * 2), f = Math.sin(u) * e, d = Math.cos(u) * e;
    o.push(0, 0, 0), o.push(f, 0, d);
    const p = h & 1 ? r : s;
    a.push(p.r, p.g, p.b), a.push(p.r, p.g, p.b);
  }
  for (let h = 0; h <= n; h++) {
    const u = h & 1 ? r : s, f = e - e / n * h;
    for (let d = 0; d < i; d++) {
      let p = d / i * (Math.PI * 2), x = Math.sin(p) * f, y = Math.cos(p) * f;
      o.push(x, 0, y), a.push(u.r, u.g, u.b), p = (d + 1) / i * (Math.PI * 2), x = Math.sin(p) * f, y = Math.cos(p) * f, o.push(x, 0, y), a.push(u.r, u.g, u.b);
    }
  }
  const c = new he();
  c.setAttribute("position", new oe(o, 3)), c.setAttribute("color", new oe(a, 3));
  const l = new Qe({ vertexColors: !0, toneMapped: !1 });
  nt.call(this, c, l), this.type = "PolarGridHelper";
}
wc.prototype = Object.create(nt.prototype);
wc.prototype.constructor = wc;
const pu = new b(), Zs = new b(), mu = new b();
function ss(e, t, n) {
  ie.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, t === void 0 && (t = 1);
  let i = new he();
  i.setAttribute("position", new oe([
    -t,
    t,
    0,
    t,
    t,
    0,
    t,
    -t,
    0,
    -t,
    -t,
    0,
    -t,
    t,
    0
  ], 3));
  const r = new Qe({ fog: !1, toneMapped: !1 });
  this.lightPlane = new Ot(i, r), this.add(this.lightPlane), i = new he(), i.setAttribute("position", new oe([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ot(i, r), this.add(this.targetLine), this.update();
}
ss.prototype = Object.create(ie.prototype);
ss.prototype.constructor = ss;
ss.prototype.dispose = function() {
  this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
};
ss.prototype.update = function() {
  pu.setFromMatrixPosition(this.light.matrixWorld), Zs.setFromMatrixPosition(this.light.target.matrixWorld), mu.subVectors(Zs, pu), this.lightPlane.lookAt(Zs), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Zs), this.targetLine.scale.z = mu.length();
};
const $s = new b(), $e = new fn();
function ko(e) {
  const t = new he(), n = new Qe({ color: 16777215, vertexColors: !0, toneMapped: !1 }), i = [], r = [], s = {}, o = new fe(16755200), a = new fe(16711680), c = new fe(43775), l = new fe(16777215), h = new fe(3355443);
  u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", a), u("p", "n2", a), u("p", "n3", a), u("p", "n4", a), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", l), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h);
  function u(d, p, x) {
    f(d, x), f(p, x);
  }
  function f(d, p) {
    i.push(0, 0, 0), r.push(p.r, p.g, p.b), s[d] === void 0 && (s[d] = []), s[d].push(i.length / 3 - 1);
  }
  t.setAttribute("position", new oe(i, 3)), t.setAttribute("color", new oe(r, 3)), nt.call(this, t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update();
}
ko.prototype = Object.create(nt.prototype);
ko.prototype.constructor = ko;
ko.prototype.update = function() {
  const e = this.geometry, t = this.pointMap, n = 1, i = 1;
  $e.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), et("c", t, e, $e, 0, 0, -1), et("t", t, e, $e, 0, 0, 1), et("n1", t, e, $e, -n, -i, -1), et("n2", t, e, $e, n, -i, -1), et("n3", t, e, $e, -n, i, -1), et("n4", t, e, $e, n, i, -1), et("f1", t, e, $e, -n, -i, 1), et("f2", t, e, $e, n, -i, 1), et("f3", t, e, $e, -n, i, 1), et("f4", t, e, $e, n, i, 1), et("u1", t, e, $e, n * 0.7, i * 1.1, -1), et("u2", t, e, $e, -n * 0.7, i * 1.1, -1), et("u3", t, e, $e, 0, i * 2, -1), et("cf1", t, e, $e, -n, 0, 1), et("cf2", t, e, $e, n, 0, 1), et("cf3", t, e, $e, 0, -i, 1), et("cf4", t, e, $e, 0, i, 1), et("cn1", t, e, $e, -n, 0, -1), et("cn2", t, e, $e, n, 0, -1), et("cn3", t, e, $e, 0, -i, -1), et("cn4", t, e, $e, 0, i, -1), e.getAttribute("position").needsUpdate = !0;
};
function et(e, t, n, i, r, s, o) {
  $s.set(r, s, o).unproject(i);
  const a = t[e];
  if (a !== void 0) {
    const c = n.getAttribute("position");
    for (let l = 0, h = a.length; l < h; l++)
      c.setXYZ(a[l], $s.x, $s.y, $s.z);
  }
}
const Qs = new nn();
function Ki(e, t) {
  this.object = e, t === void 0 && (t = 16776960);
  const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = new Float32Array(8 * 3), r = new he();
  r.setIndex(new ge(n, 1)), r.setAttribute("position", new ge(i, 3)), nt.call(this, r, new Qe({ color: t, toneMapped: !1 })), this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
}
Ki.prototype = Object.create(nt.prototype);
Ki.prototype.constructor = Ki;
Ki.prototype.update = function(e) {
  if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && Qs.setFromObject(this.object), Qs.isEmpty())
    return;
  const t = Qs.min, n = Qs.max, i = this.geometry.attributes.position, r = i.array;
  r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = t.x, r[4] = n.y, r[5] = n.z, r[6] = t.x, r[7] = t.y, r[8] = n.z, r[9] = n.x, r[10] = t.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = t.z, r[15] = t.x, r[16] = n.y, r[17] = t.z, r[18] = t.x, r[19] = t.y, r[20] = t.z, r[21] = n.x, r[22] = t.y, r[23] = t.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
};
Ki.prototype.setFromObject = function(e) {
  return this.object = e, this.update(), this;
};
Ki.prototype.copy = function(e) {
  return nt.prototype.copy.call(this, e), this.object = e.object, this;
};
function Ho(e, t) {
  this.type = "Box3Helper", this.box = e, t === void 0 && (t = 16776960);
  const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], r = new he();
  r.setIndex(new ge(n, 1)), r.setAttribute("position", new oe(i, 3)), nt.call(this, r, new Qe({ color: t, toneMapped: !1 })), this.type = "Box3Helper", this.geometry.computeBoundingSphere();
}
Ho.prototype = Object.create(nt.prototype);
Ho.prototype.constructor = Ho;
Ho.prototype.updateMatrixWorld = function(e) {
  const t = this.box;
  t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), ie.prototype.updateMatrixWorld.call(this, e));
};
function Vo(e, t, n) {
  this.plane = e, this.size = t === void 0 ? 1 : t;
  const i = n !== void 0 ? n : 16776960, r = [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], s = new he();
  s.setAttribute("position", new oe(r, 3)), s.computeBoundingSphere(), Ot.call(this, s, new Qe({ color: i, toneMapped: !1 })), this.type = "PlaneHelper";
  const o = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], a = new he();
  a.setAttribute("position", new oe(o, 3)), a.computeBoundingSphere(), this.add(new Fe(a, new Pt({ color: i, opacity: 0.2, transparent: !0, depthWrite: !1, toneMapped: !1 })));
}
Vo.prototype = Object.create(Ot.prototype);
Vo.prototype.constructor = Vo;
Vo.prototype.updateMatrixWorld = function(e) {
  let t = -this.plane.constant;
  Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(0.5 * this.size, 0.5 * this.size, t), this.children[0].material.side = t < 0 ? rt : as, this.lookAt(this.plane.normal), ie.prototype.updateMatrixWorld.call(this, e);
};
const gu = new b();
let Ks, Ra;
function si(e, t, n, i, r, s) {
  ie.call(this), this.type = "ArrowHelper", e === void 0 && (e = new b(0, 0, 1)), t === void 0 && (t = new b(0, 0, 0)), n === void 0 && (n = 1), i === void 0 && (i = 16776960), r === void 0 && (r = 0.2 * n), s === void 0 && (s = 0.2 * r), Ks === void 0 && (Ks = new he(), Ks.setAttribute("position", new oe([0, 0, 0, 0, 1, 0], 3)), Ra = new Gn(0, 0.5, 1, 5, 1), Ra.translate(0, -0.5, 0)), this.position.copy(t), this.line = new Ot(Ks, new Qe({ color: i, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Fe(Ra, new Pt({ color: i, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, r, s);
}
si.prototype = Object.create(ie.prototype);
si.prototype.constructor = si;
si.prototype.setDirection = function(e) {
  if (e.y > 0.99999)
    this.quaternion.set(0, 0, 0, 1);
  else if (e.y < -0.99999)
    this.quaternion.set(1, 0, 0, 0);
  else {
    gu.set(e.z, 0, -e.x).normalize();
    const t = Math.acos(e.y);
    this.quaternion.setFromAxisAngle(gu, t);
  }
};
si.prototype.setLength = function(e, t, n) {
  t === void 0 && (t = 0.2 * e), n === void 0 && (n = 0.2 * t), this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
};
si.prototype.setColor = function(e) {
  this.line.material.color.set(e), this.cone.material.color.set(e);
};
si.prototype.copy = function(e) {
  return ie.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
};
function Mc(e) {
  e = e || 1;
  const t = [
    0,
    0,
    0,
    e,
    0,
    0,
    0,
    0,
    0,
    0,
    e,
    0,
    0,
    0,
    0,
    0,
    0,
    e
  ], n = [
    1,
    0,
    0,
    1,
    0.6,
    0,
    0,
    1,
    0,
    0.6,
    1,
    0,
    0,
    0,
    1,
    0,
    0.6,
    1
  ], i = new he();
  i.setAttribute("position", new oe(t, 3)), i.setAttribute("color", new oe(n, 3));
  const r = new Qe({ vertexColors: !0, toneMapped: !1 });
  nt.call(this, i, r), this.type = "AxesHelper";
}
Mc.prototype = Object.create(nt.prototype);
Mc.prototype.constructor = Mc;
const Di = 4, Nn = 8, Xt = Math.pow(2, Nn), ph = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], mh = Nn - Di + 1 + ph.length, Ei = 20, $t = {
  [vt]: 0,
  [Yo]: 1,
  [Oc]: 2,
  [Pu]: 3,
  [Iu]: 4,
  [Ou]: 5,
  [Ic]: 6
}, Pa = new es(), { _lodPlanes: gr, _sizeLods: yu, _sigmas: eo } = sx();
let Ia = null;
const Jn = (1 + Math.sqrt(5)) / 2, Si = 1 / Jn, xu = [
  new b(1, 1, 1),
  new b(-1, 1, 1),
  new b(1, 1, -1),
  new b(-1, 1, -1),
  new b(0, Jn, Si),
  new b(0, Jn, -Si),
  new b(Si, 0, Jn),
  new b(-Si, 0, Jn),
  new b(Jn, Si, 0),
  new b(-Jn, Si, 0)
];
function vu(e) {
  this._renderer = e, this._pingPongRenderTarget = null, this._blurMaterial = ox(Ei), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
}
vu.prototype = {
  constructor: vu,
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene: function(e, t = 0, n = 0.1, i = 100) {
    Ia = this._renderer.getRenderTarget();
    const r = this._allocateTargets();
    return this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  },
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * (RGBFormat) or HDR (RGBEFormat). The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular: function(e) {
    return this._fromTexture(e);
  },
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * (RGBFormat) or HDR (RGBEFormat). The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap: function(e) {
    return this._fromTexture(e);
  },
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader: function() {
    this._cubemapShader === null && (this._cubemapShader = wu(), this._compileMaterial(this._cubemapShader));
  },
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader: function() {
    this._equirectShader === null && (this._equirectShader = bu(), this._compileMaterial(this._equirectShader));
  },
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose: function() {
    this._blurMaterial.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose();
    for (let e = 0; e < gr.length; e++)
      gr[e].dispose();
  },
  // private interface
  _cleanup: function(e) {
    this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(Ia), e.scissorTest = !1, to(e, 0, 0, e.width, e.height);
  },
  _fromTexture: function(e) {
    Ia = this._renderer.getRenderTarget();
    const t = this._allocateTargets(e);
    return this._textureToCubeUV(e, t), this._applyPMREM(t), this._cleanup(t), t;
  },
  _allocateTargets: function(e) {
    const t = {
      magFilter: ot,
      minFilter: ot,
      generateMipmaps: !1,
      type: ls,
      format: sf,
      encoding: rx(e) ? e.encoding : Oc,
      depthBuffer: !1,
      stencilBuffer: !1
    }, n = _u(t);
    return n.depthBuffer = !e, this._pingPongRenderTarget = _u(t), n;
  },
  _compileMaterial: function(e) {
    const t = new Fe(gr[0], e);
    this._renderer.compile(t, Pa);
  },
  _sceneToCubeUV: function(e, t, n, i) {
    const o = new tt(90, 1, t, n), a = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], l = this._renderer, h = l.outputEncoding, u = l.toneMapping, f = l.getClearColor(), d = l.getClearAlpha();
    l.toneMapping = Ii, l.outputEncoding = vt;
    let p = e.background;
    if (p && p.isColor) {
      p.convertSRGBToLinear();
      const x = Math.max(p.r, p.g, p.b), y = Math.min(Math.max(Math.ceil(Math.log2(x)), -128), 127);
      p = p.multiplyScalar(Math.pow(2, -y));
      const g = (y + 128) / 255;
      l.setClearColor(p, g), e.background = null;
    }
    for (let x = 0; x < 6; x++) {
      const y = x % 3;
      y == 0 ? (o.up.set(0, a[x], 0), o.lookAt(c[x], 0, 0)) : y == 1 ? (o.up.set(0, 0, a[x]), o.lookAt(0, c[x], 0)) : (o.up.set(0, a[x], 0), o.lookAt(0, 0, c[x])), to(
        i,
        y * Xt,
        x > 2 ? Xt : 0,
        Xt,
        Xt
      ), l.setRenderTarget(i), l.render(e, o);
    }
    l.toneMapping = u, l.outputEncoding = h, l.setClearColor(f, d);
  },
  _textureToCubeUV: function(e, t) {
    const n = this._renderer;
    e.isCubeTexture ? this._cubemapShader == null && (this._cubemapShader = wu()) : this._equirectShader == null && (this._equirectShader = bu());
    const i = e.isCubeTexture ? this._cubemapShader : this._equirectShader, r = new Fe(gr[0], i), s = i.uniforms;
    s.envMap.value = e, e.isCubeTexture || s.texelSize.value.set(1 / e.image.width, 1 / e.image.height), s.inputEncoding.value = $t[e.encoding], s.outputEncoding.value = $t[t.texture.encoding], to(t, 0, 0, 3 * Xt, 2 * Xt), n.setRenderTarget(t), n.render(r, Pa);
  },
  _applyPMREM: function(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < mh; i++) {
      const r = Math.sqrt(eo[i] * eo[i] - eo[i - 1] * eo[i - 1]), s = xu[(i - 1) % xu.length];
      this._blur(e, i - 1, i, r, s);
    }
    t.autoClear = n;
  },
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur: function(e, t, n, i, r) {
    const s = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      s,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      s,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  },
  _halfBlur: function(e, t, n, i, r, s, o) {
    const a = this._renderer, c = this._blurMaterial;
    s !== "latitudinal" && s !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const l = 3, h = new Fe(gr[i], c), u = c.uniforms, f = yu[n] - 1, d = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Ei - 1), p = r / d, x = isFinite(r) ? 1 + Math.floor(l * p) : Ei;
    x > Ei && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ei}`);
    const y = [];
    let g = 0;
    for (let w = 0; w < Ei; ++w) {
      const A = w / p, E = Math.exp(-A * A / 2);
      y.push(E), w == 0 ? g += E : w < x && (g += 2 * E);
    }
    for (let w = 0; w < y.length; w++)
      y[w] = y[w] / g;
    u.envMap.value = e.texture, u.samples.value = x, u.weights.value = y, u.latitudinal.value = s === "latitudinal", o && (u.poleAxis.value = o), u.dTheta.value = d, u.mipInt.value = Nn - n, u.inputEncoding.value = $t[e.texture.encoding], u.outputEncoding.value = $t[e.texture.encoding];
    const m = yu[i], _ = 3 * Math.max(0, Xt - 2 * m), v = (i === 0 ? 0 : 2 * Xt) + 2 * m * (i > Nn - Di ? i - Nn + Di : 0);
    to(t, _, v, 3 * m, 2 * m), a.setRenderTarget(t), a.render(h, Pa);
  }
};
function rx(e) {
  return e === void 0 || e.type !== ls ? !1 : e.encoding === vt || e.encoding === Yo || e.encoding === Ic;
}
function sx() {
  const e = [], t = [], n = [];
  let i = Nn;
  for (let r = 0; r < mh; r++) {
    const s = Math.pow(2, i);
    t.push(s);
    let o = 1 / s;
    r > Nn - Di ? o = ph[r - Nn + Di - 1] : r == 0 && (o = 0), n.push(o);
    const a = 1 / (s - 1), c = -a / 2, l = 1 + a / 2, h = [c, c, l, c, l, l, c, c, l, l, c, l], u = 6, f = 6, d = 3, p = 2, x = 1, y = new Float32Array(d * f * u), g = new Float32Array(p * f * u), m = new Float32Array(x * f * u);
    for (let v = 0; v < u; v++) {
      const w = v % 3 * 2 / 3 - 1, A = v > 2 ? 0 : -1, E = [
        w,
        A,
        0,
        w + 2 / 3,
        A,
        0,
        w + 2 / 3,
        A + 1,
        0,
        w,
        A,
        0,
        w + 2 / 3,
        A + 1,
        0,
        w,
        A + 1,
        0
      ];
      y.set(E, d * f * v), g.set(h, p * f * v);
      const U = [v, v, v, v, v, v];
      m.set(U, x * f * v);
    }
    const _ = new he();
    _.setAttribute("position", new ge(y, d)), _.setAttribute("uv", new ge(g, p)), _.setAttribute("faceIndex", new ge(m, x)), e.push(_), i > Di && i--;
  }
  return { _lodPlanes: e, _sizeLods: t, _sigmas: n };
}
function _u(e) {
  const t = new Ct(3 * Xt, 3 * Xt, e);
  return t.texture.mapping = cs, t.texture.name = "PMREM.cubeUv", t.scissorTest = !0, t;
}
function to(e, t, n, i, r) {
  e.viewport.set(t, n, i, r), e.scissor.set(t, n, i, r);
}
function ox(e) {
  const t = new Float32Array(e), n = new b(0, 1, 0);
  return new zn({
    name: "SphericalGaussianBlur",
    defines: { n: e },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: t },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: n },
      inputEncoding: { value: $t[vt] },
      outputEncoding: { value: $t[vt] }
    },
    vertexShader: Gc(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${zc()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`
    ),
    blending: In,
    depthTest: !1,
    depthWrite: !1
  });
}
function bu() {
  const e = new H(1, 1);
  return new zn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null },
      texelSize: { value: e },
      inputEncoding: { value: $t[vt] },
      outputEncoding: { value: $t[vt] }
    },
    vertexShader: Gc(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${zc()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`
    ),
    blending: In,
    depthTest: !1,
    depthWrite: !1
  });
}
function wu() {
  return new zn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      inputEncoding: { value: $t[vt] },
      outputEncoding: { value: $t[vt] }
    },
    vertexShader: Gc(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${zc()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`
    ),
    blending: In,
    depthTest: !1,
    depthWrite: !1
  });
}
function Gc() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function zc() {
  return (
    /* glsl */
    `

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`
  );
}
xe.create = function(e, t) {
  return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(xe.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e;
};
Object.assign(Pn.prototype, {
  createPointsGeometry: function(e) {
    console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    const t = this.getPoints(e);
    return this.createGeometry(t);
  },
  createSpacedPointsGeometry: function(e) {
    console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    const t = this.getSpacedPoints(e);
    return this.createGeometry(t);
  },
  createGeometry: function(e) {
    console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    const t = new be();
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.vertices.push(new b(r.x, r.y, r.z || 0));
    }
    return t;
  }
});
Object.assign(Zt.prototype, {
  fromPoints: function(e) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e);
  }
});
Object.create(Tt.prototype);
Object.create(Tt.prototype);
function gh(e) {
  console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Tt.call(this, e), this.type = "catmullrom";
}
gh.prototype = Object.create(Tt.prototype);
Object.assign(gh.prototype, {
  initFromArray: function() {
    console.error("THREE.Spline: .initFromArray() has been removed.");
  },
  getControlPointsArray: function() {
    console.error("THREE.Spline: .getControlPointsArray() has been removed.");
  },
  reparametrizeByArcLength: function() {
    console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");
  }
});
zo.prototype.setColors = function() {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
Qi.prototype.update = function() {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
Object.assign(Ne.prototype, {
  extractUrlBase: function(e) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), th.extractUrlBase(e);
  }
});
Ne.Handlers = {
  add: function() {
    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
  },
  get: function() {
    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
  }
};
Object.assign(xc.prototype, {
  setTexturePath: function(e) {
    return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e);
  }
});
Object.assign(hh.prototype, {
  center: function(e) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e);
  },
  empty: function() {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  },
  isIntersectionBox: function(e) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e);
  },
  size: function(e) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e);
  }
});
Object.assign(nn.prototype, {
  center: function(e) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e);
  },
  empty: function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  },
  isIntersectionBox: function(e) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e);
  },
  isIntersectionSphere: function(e) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e);
  },
  size: function(e) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e);
  }
});
Object.assign(vn.prototype, {
  empty: function() {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  }
});
us.prototype.setFromMatrix = function(e) {
  return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(e);
};
fh.prototype.center = function(e) {
  return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e);
};
Object.assign(Ae, {
  random16: function() {
    return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random();
  },
  nearestPowerOfTwo: function(e) {
    return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Ae.floorPowerOfTwo(e);
  },
  nextPowerOfTwo: function(e) {
    return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Ae.ceilPowerOfTwo(e);
  }
});
Object.assign(gt.prototype, {
  flattenToArrayOffset: function(e, t) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t);
  },
  multiplyVector3: function(e) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this);
  },
  multiplyVector3Array: function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
  },
  applyToBufferAttribute: function(e) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), e.applyMatrix3(this);
  },
  applyToVector3Array: function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
  }
});
Object.assign(Ce.prototype, {
  extractPosition: function(e) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e);
  },
  flattenToArrayOffset: function(e, t) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t);
  },
  getPosition: function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new b().setFromMatrixColumn(this, 3);
  },
  setRotationFromQuaternion: function(e) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e);
  },
  multiplyToArray: function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
  },
  multiplyVector3: function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  multiplyVector4: function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  multiplyVector3Array: function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
  },
  rotateAxis: function(e) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this);
  },
  crossVector: function(e) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  translate: function() {
    console.error("THREE.Matrix4: .translate() has been removed.");
  },
  rotateX: function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.");
  },
  rotateY: function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.");
  },
  rotateZ: function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.");
  },
  rotateByAxis: function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
  },
  applyToBufferAttribute: function(e) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  applyToVector3Array: function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
  },
  makeFrustum: function(e, t, n, i, r, s) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, i, n, r, s);
  }
});
Yt.prototype.isIntersectionLine = function(e) {
  return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e);
};
at.prototype.multiplyVector3 = function(e) {
  return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this);
};
Object.assign(nr.prototype, {
  isIntersectionBox: function(e) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e);
  },
  isIntersectionPlane: function(e) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e);
  },
  isIntersectionSphere: function(e) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e);
  }
});
Object.assign(lt.prototype, {
  area: function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
  },
  barycoordFromPoint: function(e, t) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t);
  },
  midpoint: function(e) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e);
  },
  normal: function(e) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e);
  },
  plane: function(e) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e);
  }
});
Object.assign(lt, {
  barycoordFromPoint: function(e, t, n, i, r) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), lt.getBarycoord(e, t, n, i, r);
  },
  normal: function(e, t, n, i) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), lt.getNormal(e, t, n, i);
  }
});
Object.assign($n.prototype, {
  extractAllPoints: function(e) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e);
  },
  extrude: function(e) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new ki(this, e);
  },
  makeGeometry: function(e) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Vi(this, e);
  }
});
Object.assign(H.prototype, {
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n);
  },
  distanceToManhattan: function(e) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e);
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }
});
Object.assign(b.prototype, {
  setEulerFromRotationMatrix: function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
  },
  setEulerFromQuaternion: function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
  },
  getPositionFromMatrix: function(e) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e);
  },
  getScaleFromMatrix: function(e) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e);
  },
  getColumnFromMatrix: function(e, t) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e);
  },
  applyProjection: function(e) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e);
  },
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n);
  },
  distanceToManhattan: function(e) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e);
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }
});
Object.assign(Be.prototype, {
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n);
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }
});
Object.assign(be.prototype, {
  computeTangents: function() {
    console.error("THREE.Geometry: .computeTangents() has been removed.");
  },
  computeLineDistances: function() {
    console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");
  },
  applyMatrix: function(e) {
    return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e);
  }
});
Object.assign(ie.prototype, {
  getChildByName: function(e) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e);
  },
  renderDepth: function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
  },
  translate: function(e, t) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e);
  },
  getWorldRotation: function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
  },
  applyMatrix: function(e) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e);
  }
});
Object.defineProperties(ie.prototype, {
  eulerOrder: {
    get: function() {
      return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
    },
    set: function(e) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e;
    }
  },
  useQuaternion: {
    get: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    }
  }
});
Object.assign(Fe.prototype, {
  setDrawMode: function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
  }
});
Object.defineProperties(Fe.prototype, {
  drawMode: {
    get: function() {
      return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), jf;
    },
    set: function() {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  }
});
Object.defineProperties(fo.prototype, {
  objects: {
    get: function() {
      return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels;
    }
  }
});
Object.defineProperty(Ya.prototype, "useVertexTexture", {
  get: function() {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  },
  set: function() {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  }
});
Xa.prototype.initBones = function() {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
Object.defineProperty(xe.prototype, "__arcLengthDivisions", {
  get: function() {
    return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions;
  },
  set: function(e) {
    console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e;
  }
});
tt.prototype.setLens = function(e, t) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), t !== void 0 && (this.filmGauge = t), this.setFocalLength(e);
};
Object.defineProperties(He.prototype, {
  onlyShadow: {
    set: function() {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    }
  },
  shadowCameraFov: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e;
    }
  },
  shadowCameraLeft: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e;
    }
  },
  shadowCameraRight: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e;
    }
  },
  shadowCameraTop: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e;
    }
  },
  shadowCameraBottom: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e;
    }
  },
  shadowCameraNear: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e;
    }
  },
  shadowCameraFar: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e;
    }
  },
  shadowCameraVisible: {
    set: function() {
      console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
    }
  },
  shadowBias: {
    set: function(e) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e;
    }
  },
  shadowDarkness: {
    set: function() {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    }
  },
  shadowMapWidth: {
    set: function(e) {
      console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e;
    }
  },
  shadowMapHeight: {
    set: function(e) {
      console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e;
    }
  }
});
Object.defineProperties(ge.prototype, {
  length: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
    }
  },
  dynamic: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === Er;
    },
    set: function() {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(Er);
    }
  }
});
Object.assign(ge.prototype, {
  setDynamic: function(e) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Er : Jo), this;
  },
  copyIndicesArray: function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
  },
  setArray: function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }
});
Object.assign(he.prototype, {
  addIndex: function(e) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e);
  },
  addAttribute: function(e, t) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new ge(arguments[1], arguments[2]))) : e === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t);
  },
  addDrawCall: function(e, t, n) {
    n !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t);
  },
  clearDrawCalls: function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
  },
  computeTangents: function() {
    console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
  },
  computeOffsets: function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
  },
  removeAttribute: function(e) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e);
  },
  applyMatrix: function(e) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e);
  }
});
Object.defineProperties(he.prototype, {
  drawcalls: {
    get: function() {
      return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
    }
  },
  offsets: {
    get: function() {
      return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
    }
  }
});
Object.defineProperties(Uo.prototype, {
  maxInstancedCount: {
    get: function() {
      return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount;
    },
    set: function(e) {
      console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount = e;
    }
  }
});
Object.defineProperties(uh.prototype, {
  linePrecision: {
    get: function() {
      return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold;
    },
    set: function(e) {
      console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = e;
    }
  }
});
Object.defineProperties(At.prototype, {
  dynamic: {
    get: function() {
      return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === Er;
    },
    set: function(e) {
      console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(e);
    }
  }
});
Object.assign(At.prototype, {
  setDynamic: function(e) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Er : Jo), this;
  },
  setArray: function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }
});
Object.assign(dn.prototype, {
  getArrays: function() {
    console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");
  },
  addShapeList: function() {
    console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");
  },
  addShape: function() {
    console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");
  }
});
Object.defineProperties(_c.prototype, {
  dynamic: {
    set: function() {
      console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");
    }
  },
  onUpdate: {
    value: function() {
      return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
    }
  }
});
Object.defineProperties(_e.prototype, {
  wrapAround: {
    get: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    }
  },
  overdraw: {
    get: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    }
  },
  wrapRGB: {
    get: function() {
      return console.warn("THREE.Material: .wrapRGB has been removed."), new fe();
    }
  },
  shading: {
    get: function() {
      console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
    },
    set: function(e) {
      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = e === Tu;
    }
  },
  stencilMask: {
    get: function() {
      return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
    },
    set: function(e) {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e;
    }
  }
});
Object.defineProperties(ri.prototype, {
  metal: {
    get: function() {
      return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1;
    },
    set: function() {
      console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
    }
  }
});
Object.defineProperties(ii.prototype, {
  transparency: {
    get: function() {
      return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission;
    },
    set: function(e) {
      console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission = e;
    }
  }
});
Object.defineProperties(_t.prototype, {
  derivatives: {
    get: function() {
      return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
    },
    set: function(e) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e;
    }
  }
});
Object.assign(hs.prototype, {
  clearTarget: function(e, t, n, i) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, n, i);
  },
  animate: function(e) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e);
  },
  getCurrentRenderTarget: function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
  },
  getMaxAnisotropy: function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
  },
  getPrecision: function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
  },
  resetGLState: function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
  },
  supportsFloatTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
  },
  supportsHalfFloatTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
  },
  supportsStandardDerivatives: function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
  },
  supportsCompressedTextureS3TC: function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
  },
  supportsCompressedTexturePVRTC: function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
  },
  supportsBlendMinMax: function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
  },
  supportsVertexTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
  },
  supportsInstancedArrays: function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
  },
  enableScissorTest: function(e) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e);
  },
  initMaterial: function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
  },
  addPrePlugin: function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
  },
  addPostPlugin: function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
  },
  updateShadowMap: function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
  },
  setFaceCulling: function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
  },
  allocTextureUnit: function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
  },
  setTexture: function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
  },
  setTexture2D: function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
  },
  setTextureCube: function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
  },
  getActiveMipMapLevel: function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
  }
});
Object.defineProperties(hs.prototype, {
  shadowMapEnabled: {
    get: function() {
      return this.shadowMap.enabled;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e;
    }
  },
  shadowMapType: {
    get: function() {
      return this.shadowMap.type;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e;
    }
  },
  shadowMapCullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  context: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
    }
  },
  vr: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
    }
  },
  gammaInput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
    }
  },
  gammaOutput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = e === !0 ? Yo : vt;
    }
  },
  toneMappingWhitePoint: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
    }
  }
});
Object.defineProperties(qu.prototype, {
  cullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  renderReverseSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    }
  },
  renderSingleSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    }
  }
});
Object.defineProperties(Ct.prototype, {
  wrapS: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e;
    }
  },
  wrapT: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e;
    }
  },
  magFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e;
    }
  },
  minFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e;
    }
  },
  anisotropy: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e;
    }
  },
  offset: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e;
    }
  },
  repeat: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e;
    }
  },
  format: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e;
    }
  },
  type: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e;
    }
  },
  generateMipmaps: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e;
    }
  }
});
Object.defineProperties(ts.prototype, {
  load: {
    value: function(e) {
      console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
      const t = this;
      return new vc().load(e, function(i) {
        t.setBuffer(i);
      }), this;
    }
  },
  startTime: {
    set: function() {
      console.warn("THREE.Audio: .startTime is now .play( delay ).");
    }
  }
});
oh.prototype.getData = function() {
  return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
};
Rr.prototype.updateCubeMap = function(e, t) {
  return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t);
};
Qn.crossOrigin = void 0;
Qn.loadTexture = function(e, t, n, i) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  const r = new No();
  r.setCrossOrigin(this.crossOrigin);
  const s = r.load(e, n, void 0, i);
  return t && (s.mapping = t), s;
};
Qn.loadTextureCube = function(e, t, n, i) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  const r = new oc();
  r.setCrossOrigin(this.crossOrigin);
  const s = r.load(e, n, void 0, i);
  return t && (s.mapping = t), s;
};
Qn.loadCompressedTexture = function() {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
Qn.loadCompressedTextureCube = function() {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: vh
} }));
const ln = function() {
  const [e, t] = arguments;
  /\/1\/601-tinified/.test(t) && console.log(...arguments);
}, ut = {};
class ax extends Ne {
  constructor(t) {
    super(t);
  }
  load(t, n, i, r, s) {
    ln("load", t), t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const o = pn.get(t);
    if (o !== void 0)
      return ln("cached", t), this.manager.itemStart(t), setTimeout(() => {
        n && n(o), this.manager.itemEnd(t);
      }, 0), o;
    if (ut[t] !== void 0) {
      ut[t].push({
        onLoad: n,
        onProgress: i,
        onError: r
      }), ln("return", t, ut[t]);
      return;
    }
    ut[t] = [], ut[t].push({
      onLoad: n,
      onProgress: i,
      onError: r
    }), ln("push", t, ut[t]);
    const a = new Request(t, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), c = this.mimeType, l = this.responseType;
    ln("started fetch", t), fetch(a, s).then((h) => {
      if (h.status === 200 || h.status === 0) {
        if (h.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || h.body === void 0 || h.body.getReader === void 0)
          return h;
        const u = ut[t], f = h.body.getReader(), d = h.headers.get("Content-Length"), p = d ? parseInt(d) : 0, x = p !== 0;
        let y = 0;
        const g = new ReadableStream({
          start(m) {
            _();
            function _() {
              f.read().then(({ done: v, value: w }) => {
                if (v)
                  m.close();
                else {
                  y += w.byteLength;
                  const A = new ProgressEvent("progress", {
                    lengthComputable: x,
                    loaded: y,
                    total: p
                  });
                  for (let E = 0, U = u.length; E < U; E++) {
                    const L = u[E];
                    L.onProgress && L.onProgress(A);
                  }
                  m.enqueue(w), _();
                }
              }).catch((v) => {
                delete ut[t];
              });
            }
          }
        });
        return new Response(g);
      } else
        throw Error(
          `fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`
        );
    }).then((h) => {
      switch (l) {
        case "arraybuffer":
          return h.arrayBuffer();
        case "blob":
          return h.blob();
        case "document":
          return h.text().then((u) => new DOMParser().parseFromString(u, c));
        case "json":
          return h.json();
        default:
          if (c === void 0)
            return h.text();
          {
            const f = /charset="?([^;"\s]*)"?/i.exec(c), d = f && f[1] ? f[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return h.arrayBuffer().then((x) => p.decode(x));
          }
      }
    }).then((h) => {
      pn.add(t, h);
      const u = ut[t];
      ln("then delete", t, ut[t]), delete ut[t];
      for (let f = 0, d = u.length; f < d; f++) {
        const p = u[f];
        p.onLoad && p.onLoad(h);
      }
    }).catch((h) => {
      const u = ut[t];
      if (ln("err delete", t, ut[t]), delete ut[t], u === void 0)
        throw this.manager.itemError(t), h;
      for (let f = 0, d = u.length; f < d; f++) {
        const p = u[f];
        p.onError && p.onError(h);
      }
      this.manager.itemError(t);
    }).finally(() => {
      ln("finally delete", t, ut[t]), delete ut[t], this.manager.itemEnd(t);
    }), this.manager.itemStart(t);
  }
  setResponseType(t) {
    return this.responseType = t, this;
  }
  setMimeType(t) {
    return this.mimeType = t, this;
  }
}
const cx = function(e) {
  const t = pn, { signal: n } = e;
  t.enabled = !0;
  const i = new No(), r = new ax();
  r.setResponseType("blob");
  function s(o, a, c, l, h = 1) {
    r.load(
      o,
      u,
      c,
      (p) => {
        console.error("loader err", p), l();
      },
      { signal: n }
    );
    function u(p) {
      if (ln("cache image called", o, p), p.tagName != "IMG") {
        const x = URL.createObjectURL(p), y = document.createElementNS(
          "http://www.w3.org/1999/xhtml",
          "img"
        );
        y.onload = () => {
          t.add(o, y), URL.revokeObjectURL(x), document.body.removeChild(y), h == 1 ? f() : d(y);
        }, y.src = x, y.style.visibility = "hidden", document.body.appendChild(y);
      } else
        h == 1 ? f() : d(p);
    }
    function f() {
      i.load(o, a, () => {
      }, l);
    }
    function d(p) {
      const x = document.createElement("canvas"), y = x.getContext("2d");
      x.width = p.width, x.height = p.height, y.filter = `brightness(${h})`, y.drawImage(p, 0, 0, p.width, p.height);
      const g = new Nr(x);
      a(g), x.remove();
    }
  }
  return Object.assign({}, i, { load: s });
}, Sc = function() {
  this.logging = {
    enabled: !1,
    debug: !1
  };
  let e = this;
  this.callbacks = {
    onProgress: function(t) {
      e._onProgress(t);
    },
    onAssetAvailable: function(t) {
      e._onAssetAvailable(t);
    },
    onError: function(t) {
      e._onError(t);
    },
    onLoad: function(t, n) {
      e._onLoad(t, n);
    }
  }, this.contentRef = null, this.legacyMode = !1, this.materials = {}, this.materialPerSmoothingGroup = !1, this.useOAsMesh = !1, this.useIndices = !1, this.disregardNormals = !1, this.vertices = [], this.colors = [], this.normals = [], this.uvs = [], this.rawMesh = {
    objectName: "",
    groupName: "",
    activeMtlName: "",
    mtllibName: "",
    // reset with new mesh
    faceType: -1,
    subGroups: [],
    subGroupInUse: null,
    smoothingGroup: {
      splitMaterials: !1,
      normalized: -1,
      real: -1
    },
    counts: {
      doubleIndicesCount: 0,
      faceCount: 0,
      mtlCount: 0,
      smoothingGroupCount: 0
    }
  }, this.inputObjectCount = 1, this.outputObjectCount = 1, this.globalCounts = {
    vertices: 0,
    faces: 0,
    doubleIndicesCount: 0,
    lineByte: 0,
    currentByte: 0,
    totalBytes: 0
  };
};
Sc.prototype = {
  constructor: Sc,
  _resetRawMesh: function() {
    this.rawMesh.subGroups = [], this.rawMesh.subGroupInUse = null, this.rawMesh.smoothingGroup.normalized = -1, this.rawMesh.smoothingGroup.real = -1, this._pushSmoothingGroup(1), this.rawMesh.counts.doubleIndicesCount = 0, this.rawMesh.counts.faceCount = 0, this.rawMesh.counts.mtlCount = 0, this.rawMesh.counts.smoothingGroupCount = 0;
  },
  /**
   * Tells whether a material shall be created per smoothing group.
   *
   * @param {boolean} materialPerSmoothingGroup=false
   * @return {OBJLoader2Parser}
   */
  setMaterialPerSmoothingGroup: function(e) {
    return this.materialPerSmoothingGroup = e === !0, this;
  },
  /**
   * Usually 'o' is meta-information and does not result in creation of new meshes, but mesh creation on occurrence of "o" can be enforced.
   *
   * @param {boolean} useOAsMesh=false
   * @return {OBJLoader2Parser}
   */
  setUseOAsMesh: function(e) {
    return this.useOAsMesh = e === !0, this;
  },
  /**
   * Instructs loaders to create indexed {@link BufferGeometry}.
   *
   * @param {boolean} useIndices=false
   * @return {OBJLoader2Parser}
   */
  setUseIndices: function(e) {
    return this.useIndices = e === !0, this;
  },
  /**
   * Tells whether normals should be completely disregarded and regenerated.
   *
   * @param {boolean} disregardNormals=false
   * @return {OBJLoader2Parser}
   */
  setDisregardNormals: function(e) {
    return this.disregardNormals = e === !0, this;
  },
  /**
   * Clears materials object and sets the new ones.
   *
   * @param {Object} materials Object with named materials
   */
  setMaterials: function(e) {
    this.materials = Object.assign({}, e);
  },
  /**
   * Register a function that is called once an asset (mesh/material) becomes available.
   *
   * @param onAssetAvailable
   * @return {OBJLoader2Parser}
   */
  setCallbackOnAssetAvailable: function(e) {
    return e != null && e instanceof Function && (this.callbacks.onAssetAvailable = e), this;
  },
  /**
   * Register a function that is used to report overall processing progress.
   *
   * @param {Function} onProgress
   * @return {OBJLoader2Parser}
   */
  setCallbackOnProgress: function(e) {
    return e != null && e instanceof Function && (this.callbacks.onProgress = e), this;
  },
  /**
   * Register an error handler function that is called if errors occur. It can decide to just log or to throw an exception.
   *
   * @param {Function} onError
   * @return {OBJLoader2Parser}
   */
  setCallbackOnError: function(e) {
    return e != null && e instanceof Function && (this.callbacks.onError = e), this;
  },
  /**
   * Register a function that is called when parsing was completed.
   *
   * @param {Function} onLoad
   * @return {OBJLoader2Parser}
   */
  setCallbackOnLoad: function(e) {
    return e != null && e instanceof Function && (this.callbacks.onLoad = e), this;
  },
  /**
   * Announce parse progress feedback which is logged to the console.
   * @private
   *
   * @param {string} text Textual description of the event
   */
  _onProgress: function(e) {
    let t = e || "";
    this.logging.enabled && this.logging.debug && console.log(t);
  },
  /**
   * Announce error feedback which is logged as error message.
   * @private
   *
   * @param {String} errorMessage The event containing the error
   */
  _onError: function(e) {
    this.logging.enabled && this.logging.debug && console.error(e);
  },
  _onAssetAvailable: function(e) {
    let t = "OBJLoader2Parser does not provide implementation for onAssetAvailable. Aborting...";
    throw this.callbacks.onError(t), t;
  },
  _onLoad: function(e, t) {
    console.log("You reached parser default onLoad callback: " + t);
  },
  /**
   * Enable or disable logging in general (except warn and error), plus enable or disable debug logging.
   *
   * @param {boolean} enabled True or false.
   * @param {boolean} debug True or false.
   *
   * @return {OBJLoader2Parser}
   */
  setLogging: function(e, t) {
    return this.logging.enabled = e === !0, this.logging.debug = t === !0, this;
  },
  _configure: function() {
    if (this._pushSmoothingGroup(1), this.logging.enabled) {
      let e = Object.keys(this.materials), n = "OBJLoader.Parser configuration:" + (e.length > 0 ? `
	materialNames:
		- ` + e.join(`
		- `) : `
	materialNames: None`) + `
	materialPerSmoothingGroup: ` + this.materialPerSmoothingGroup + `
	useOAsMesh: ` + this.useOAsMesh + `
	useIndices: ` + this.useIndices + `
	disregardNormals: ` + this.disregardNormals;
      n += `
	callbacks.onProgress: ` + this.callbacks.onProgress.name, n += `
	callbacks.onAssetAvailable: ` + this.callbacks.onAssetAvailable.name, n += `
	callbacks.onError: ` + this.callbacks.onError.name, console.info(n);
    }
  },
  /**
   * Parse the provided arraybuffer
   *
   * @param {Uint8Array} arrayBuffer OBJ data as Uint8Array
   */
  execute: function(e) {
    this.logging.enabled && console.time("OBJLoader2Parser.execute"), this._configure();
    let t = new Uint8Array(e);
    this.contentRef = t;
    let n = t.byteLength;
    this.globalCounts.totalBytes = n;
    let i = new Array(128), r = 0, s = 0, o = "", a = 0;
    for (let c, l = 0; l < n; l++)
      switch (c = t[l], c) {
        case 32:
          o.length > 0 && (i[r++] = o), o = "";
          break;
        case 47:
          o.length > 0 && (i[r++] = o), s++, o = "";
          break;
        case 10:
          this._processLine(i, r, s, o, l), o = "", r = 0, s = 0;
          break;
        case 13:
          break;
        default:
          o += String.fromCharCode(c);
          break;
      }
    this._processLine(i, r, s, o, a), this._finalizeParsing(), this.logging.enabled && console.timeEnd("OBJLoader2Parser.execute");
  },
  /**
   * Parse the provided text
   *
   * @param {string} text OBJ data as string
   */
  executeLegacy: function(e) {
    this.logging.enabled && console.time("OBJLoader2Parser.executeLegacy"), this._configure(), this.legacyMode = !0, this.contentRef = e;
    let t = e.length;
    this.globalCounts.totalBytes = t;
    let n = new Array(128), i = 0, r = 0, s = "", o = 0;
    for (let a; o < t; o++)
      switch (a = e[o], a) {
        case " ":
          s.length > 0 && (n[i++] = s), s = "";
          break;
        case "/":
          s.length > 0 && (n[i++] = s), r++, s = "";
          break;
        case `
`:
          this._processLine(n, i, r, s, o), s = "", i = 0, r = 0;
          break;
        case "\r":
          break;
        default:
          s += a;
      }
    this._processLine(n, i, s, r), this._finalizeParsing(), this.logging.enabled && console.timeEnd("OBJLoader2Parser.executeLegacy");
  },
  _processLine: function(e, t, n, i, r) {
    if (this.globalCounts.lineByte = this.globalCounts.currentByte, this.globalCounts.currentByte = r, t < 1)
      return;
    i.length > 0 && (e[t++] = i);
    let s = function(h, u, f, d) {
      let p = "";
      if (d > f) {
        let x;
        if (u)
          for (x = f; x < d; x++)
            p += h[x];
        else
          for (x = f; x < d; x++)
            p += String.fromCharCode(h[x]);
        p = p.trim();
      }
      return p;
    }, o, a, c, l;
    switch (l = e[0], l) {
      case "v":
        this.vertices.push(parseFloat(e[1])), this.vertices.push(parseFloat(e[2])), this.vertices.push(parseFloat(e[3])), t > 4 && (this.colors.push(parseFloat(e[4])), this.colors.push(parseFloat(e[5])), this.colors.push(parseFloat(e[6])));
        break;
      case "vt":
        this.uvs.push(parseFloat(e[1])), this.uvs.push(parseFloat(e[2]));
        break;
      case "vn":
        this.normals.push(parseFloat(e[1])), this.normals.push(parseFloat(e[2])), this.normals.push(parseFloat(e[3]));
        break;
      case "f":
        if (o = t - 1, n === 0)
          for (this._checkFaceType(0), c = 2, a = o; c < a; c++)
            this._buildFace(e[1]), this._buildFace(e[c]), this._buildFace(e[c + 1]);
        else if (o === n * 2)
          for (this._checkFaceType(1), c = 3, a = o - 2; c < a; c += 2)
            this._buildFace(e[1], e[2]), this._buildFace(e[c], e[c + 1]), this._buildFace(e[c + 2], e[c + 3]);
        else if (o * 2 === n * 3)
          for (this._checkFaceType(2), c = 4, a = o - 3; c < a; c += 3)
            this._buildFace(e[1], e[2], e[3]), this._buildFace(e[c], e[c + 1], e[c + 2]), this._buildFace(e[c + 3], e[c + 4], e[c + 5]);
        else
          for (this._checkFaceType(3), c = 3, a = o - 2; c < a; c += 2)
            this._buildFace(e[1], void 0, e[2]), this._buildFace(e[c], void 0, e[c + 1]), this._buildFace(e[c + 2], void 0, e[c + 3]);
        break;
      case "l":
      case "p":
        if (o = t - 1, o === n * 2)
          for (this._checkFaceType(4), c = 1, a = o + 1; c < a; c += 2)
            this._buildFace(e[c], e[c + 1]);
        else
          for (this._checkFaceType(l === "l" ? 5 : 6), c = 1, a = o + 1; c < a; c++)
            this._buildFace(e[c]);
        break;
      case "s":
        this._pushSmoothingGroup(e[1]);
        break;
      case "g":
        this._processCompletedMesh(), this.rawMesh.groupName = s(this.contentRef, this.legacyMode, this.globalCounts.lineByte + 2, this.globalCounts.currentByte);
        break;
      case "o":
        this.useOAsMesh && this._processCompletedMesh(), this.rawMesh.objectName = s(this.contentRef, this.legacyMode, this.globalCounts.lineByte + 2, this.globalCounts.currentByte);
        break;
      case "mtllib":
        this.rawMesh.mtllibName = s(this.contentRef, this.legacyMode, this.globalCounts.lineByte + 7, this.globalCounts.currentByte);
        break;
      case "usemtl":
        let h = s(this.contentRef, this.legacyMode, this.globalCounts.lineByte + 7, this.globalCounts.currentByte);
        h !== "" && this.rawMesh.activeMtlName !== h && (this.rawMesh.activeMtlName = h, this.rawMesh.counts.mtlCount++, this._checkSubGroup());
        break;
    }
  },
  _pushSmoothingGroup: function(e) {
    let t = parseInt(e);
    isNaN(t) && (t = e === "off" ? 0 : 1);
    let n = this.rawMesh.smoothingGroup.normalized;
    this.rawMesh.smoothingGroup.normalized = this.rawMesh.smoothingGroup.splitMaterials ? t : t === 0 ? 0 : 1, this.rawMesh.smoothingGroup.real = t, n !== t && (this.rawMesh.counts.smoothingGroupCount++, this._checkSubGroup());
  },
  /**
   * Expanded faceTypes include all four face types, both line types and the point type
   * faceType = 0: "f vertex ..."
   * faceType = 1: "f vertex/uv ..."
   * faceType = 2: "f vertex/uv/normal ..."
   * faceType = 3: "f vertex//normal ..."
   * faceType = 4: "l vertex/uv ..." or "l vertex ..."
   * faceType = 5: "l vertex ..."
   * faceType = 6: "p vertex ..."
   */
  _checkFaceType: function(e) {
    this.rawMesh.faceType !== e && (this._processCompletedMesh(), this.rawMesh.faceType = e, this._checkSubGroup());
  },
  _checkSubGroup: function() {
    let e = this.rawMesh.activeMtlName + "|" + this.rawMesh.smoothingGroup.normalized;
    this.rawMesh.subGroupInUse = this.rawMesh.subGroups[e], (this.rawMesh.subGroupInUse === void 0 || this.rawMesh.subGroupInUse === null) && (this.rawMesh.subGroupInUse = {
      index: e,
      objectName: this.rawMesh.objectName,
      groupName: this.rawMesh.groupName,
      materialName: this.rawMesh.activeMtlName,
      smoothingGroup: this.rawMesh.smoothingGroup.normalized,
      vertices: [],
      indexMappingsCount: 0,
      indexMappings: [],
      indices: [],
      colors: [],
      uvs: [],
      normals: []
    }, this.rawMesh.subGroups[e] = this.rawMesh.subGroupInUse);
  },
  _buildFace: function(e, t, n) {
    let i = this.rawMesh.subGroupInUse, r = this, s = function() {
      let o = parseInt(e), a = 3 * (o > 0 ? o - 1 : o + r.vertices.length / 3), c = r.colors.length > 0 ? a : null, l = i.vertices;
      if (l.push(r.vertices[a++]), l.push(r.vertices[a++]), l.push(r.vertices[a]), c !== null) {
        let h = i.colors;
        h.push(r.colors[c++]), h.push(r.colors[c++]), h.push(r.colors[c]);
      }
      if (t) {
        let h = parseInt(t), u = 2 * (h > 0 ? h - 1 : h + r.uvs.length / 2), f = i.uvs;
        f.push(r.uvs[u++]), f.push(r.uvs[u]);
      }
      if (n && !r.disregardNormals) {
        let h = parseInt(n), u = 3 * (h > 0 ? h - 1 : h + r.normals.length / 3), f = i.normals;
        f.push(r.normals[u++]), f.push(r.normals[u++]), f.push(r.normals[u]);
      }
    };
    if (this.useIndices) {
      this.disregardNormals && (n = void 0);
      let o = e + (t ? "_" + t : "_n") + (n ? "_" + n : "_n"), a = i.indexMappings[o];
      a == null ? (a = this.rawMesh.subGroupInUse.vertices.length / 3, s(), i.indexMappings[o] = a, i.indexMappingsCount++) : this.rawMesh.counts.doubleIndicesCount++, i.indices.push(a);
    } else
      s();
    this.rawMesh.counts.faceCount++;
  },
  _createRawMeshReport: function(e) {
    return "Input Object number: " + e + `
	Object name: ` + this.rawMesh.objectName + `
	Group name: ` + this.rawMesh.groupName + `
	Mtllib name: ` + this.rawMesh.mtllibName + `
	Vertex count: ` + this.vertices.length / 3 + `
	Normal count: ` + this.normals.length / 3 + `
	UV count: ` + this.uvs.length / 2 + `
	SmoothingGroup count: ` + this.rawMesh.counts.smoothingGroupCount + `
	Material count: ` + this.rawMesh.counts.mtlCount + `
	Real MeshOutputGroup count: ` + this.rawMesh.subGroups.length;
  },
  /**
   * Clear any empty subGroup and calculate absolute vertex, normal and uv counts
   */
  _finalizeRawMesh: function() {
    let e = [], t, n = 0, i = 0, r = 0, s = 0, o = 0, a = 0, c;
    for (let h in this.rawMesh.subGroups)
      if (t = this.rawMesh.subGroups[h], t.vertices.length > 0) {
        if (c = t.indices, c.length > 0 && i > 0)
          for (let u = 0; u < c.length; u++)
            c[u] = c[u] + i;
        e.push(t), n += t.vertices.length, i += t.indexMappingsCount, r += t.indices.length, s += t.colors.length, a += t.uvs.length, o += t.normals.length;
      }
    let l = null;
    return e.length > 0 && (l = {
      name: this.rawMesh.groupName !== "" ? this.rawMesh.groupName : this.rawMesh.objectName,
      subGroups: e,
      absoluteVertexCount: n,
      absoluteIndexCount: r,
      absoluteColorCount: s,
      absoluteNormalCount: o,
      absoluteUvCount: a,
      faceCount: this.rawMesh.counts.faceCount,
      doubleIndicesCount: this.rawMesh.counts.doubleIndicesCount
    }), l;
  },
  _processCompletedMesh: function() {
    let e = this._finalizeRawMesh(), t = e !== null;
    if (t) {
      this.colors.length > 0 && this.colors.length !== this.vertices.length && this.callbacks.onError("Vertex Colors were detected, but vertex count and color count do not match!"), this.logging.enabled && this.logging.debug && console.debug(this._createRawMeshReport(this.inputObjectCount)), this.inputObjectCount++, this._buildMesh(e);
      let n = this.globalCounts.currentByte / this.globalCounts.totalBytes;
      this._onProgress("Completed [o: " + this.rawMesh.objectName + " g:" + this.rawMesh.groupName + "] Total progress: " + (n * 100).toFixed(2) + "%"), this._resetRawMesh();
    }
    return t;
  },
  /**
   * SubGroups are transformed to too intermediate format that is forwarded to the MeshReceiver.
   * It is ensured that SubGroups only contain objects with vertices (no need to check).
   *
   * @param result
   */
  _buildMesh: function(e) {
    let t = e.subGroups, n = new Float32Array(e.absoluteVertexCount);
    this.globalCounts.vertices += e.absoluteVertexCount / 3, this.globalCounts.faces += e.faceCount, this.globalCounts.doubleIndicesCount += e.doubleIndicesCount;
    let i = e.absoluteIndexCount > 0 ? new Uint32Array(e.absoluteIndexCount) : null, r = e.absoluteColorCount > 0 ? new Float32Array(e.absoluteColorCount) : null, s = e.absoluteNormalCount > 0 ? new Float32Array(e.absoluteNormalCount) : null, o = e.absoluteUvCount > 0 ? new Float32Array(e.absoluteUvCount) : null, a = r !== null, c, l = [], h = t.length > 1, u = 0, f = [], d, p, x = [], y = 0, g = 0, m = 0, _ = 0, v = 0, w = 0, A = 0, E, U, L, q;
    for (let O in t)
      if (t.hasOwnProperty(O)) {
        if (c = t[O], q = c.materialName, this.rawMesh.faceType < 4 ? L = q + (a ? "_vertexColor" : "") + (c.smoothingGroup === 0 ? "_flat" : "") : L = this.rawMesh.faceType === 6 ? "defaultPointMaterial" : "defaultLineMaterial", E = this.materials[q], U = this.materials[L], E == null && U == null && (L = a ? "defaultVertexColorMaterial" : "defaultMaterial", U = this.materials[L], this.logging.enabled && console.info('object_group "' + c.objectName + "_" + c.groupName + '" was defined with unresolvable material "' + q + '"! Assigning "' + L + '".')), U == null) {
          let N = {
            materialNameOrg: q,
            materialName: L,
            materialProperties: {
              vertexColors: a ? 2 : 0,
              flatShading: c.smoothingGroup === 0
            }
          }, D = {
            cmd: "assetAvailable",
            type: "material",
            materials: {
              materialCloneInstructions: N
            }
          };
          this.callbacks.onAssetAvailable(D);
          let R = this.materials[L];
          R == null && (this.materials[L] = N);
        }
        if (h ? (d = f[L], d || (d = u, f[L] = u, l.push(L), u++), A = this.useIndices ? c.indices.length : c.vertices.length / 3, p = {
          start: w,
          count: A,
          index: d
        }, x.push(p), w += A) : l.push(L), n.set(c.vertices, y), y += c.vertices.length, i && (i.set(c.indices, g), g += c.indices.length), r && (r.set(c.colors, m), m += c.colors.length), s && (s.set(c.normals, _), _ += c.normals.length), o && (o.set(c.uvs, v), v += c.uvs.length), this.logging.enabled && this.logging.debug) {
          let N = "";
          d && (N = `
		materialIndex: ` + d);
          let D = "	Output Object no.: " + this.outputObjectCount + `
		groupName: ` + c.groupName + `
		Index: ` + c.index + `
		faceType: ` + this.rawMesh.faceType + `
		materialName: ` + c.materialName + `
		smoothingGroup: ` + c.smoothingGroup + N + `
		objectName: ` + c.objectName + `
		#vertices: ` + c.vertices.length / 3 + `
		#indices: ` + c.indices.length + `
		#colors: ` + c.colors.length / 3 + `
		#uvs: ` + c.uvs.length / 2 + `
		#normals: ` + c.normals.length / 3;
          console.debug(D);
        }
      }
    this.outputObjectCount++, this.callbacks.onAssetAvailable(
      {
        cmd: "assetAvailable",
        type: "mesh",
        progress: {
          numericalValue: this.globalCounts.currentByte / this.globalCounts.totalBytes
        },
        params: {
          meshName: e.name
        },
        materials: {
          multiMaterial: h,
          materialNames: l,
          materialGroups: x
        },
        buffers: {
          vertices: n,
          indices: i,
          colors: r,
          normals: s,
          uvs: o
        },
        // 0: mesh, 1: line, 2: point
        geometryType: this.rawMesh.faceType < 4 ? 0 : this.rawMesh.faceType === 6 ? 2 : 1
      },
      [n.buffer],
      i !== null ? [i.buffer] : null,
      r !== null ? [r.buffer] : null,
      s !== null ? [s.buffer] : null,
      o !== null ? [o.buffer] : null
    );
  },
  _finalizeParsing: function() {
    if (this.logging.enabled && console.info("Global output object count: " + this.outputObjectCount), this._processCompletedMesh() && this.logging.enabled) {
      let e = `Overall counts: 
	Vertices: ` + this.globalCounts.vertices + `
	Faces: ` + this.globalCounts.faces + `
	Multiple definitions: ` + this.globalCounts.doubleIndicesCount;
      console.info(e);
    }
  }
};
const Tc = function(e) {
  this.logging = {
    enabled: !1,
    debug: !1
  }, this.callbacks = {
    onProgress: null,
    onMeshAlter: null
  }, this.materialHandler = e;
};
Tc.prototype = {
  constructor: Tc,
  /**
   * Enable or disable logging in general (except warn and error), plus enable or disable debug logging.
   *
   * @param {boolean} enabled True or false.
   * @param {boolean} debug True or false.
   */
  setLogging: function(e, t) {
    this.logging.enabled = e === !0, this.logging.debug = t === !0;
  },
  /**
   *
   * @param {Function} onProgress
   * @param {Function} onMeshAlter
   * @private
   */
  _setCallbacks: function(e, t) {
    e != null && e instanceof Function && (this.callbacks.onProgress = e), t != null && t instanceof Function && (this.callbacks.onMeshAlter = t);
  },
  /**
   * Builds one or multiple meshes from the data described in the payload (buffers, params, material info).
   *
   * @param {Object} meshPayload Raw mesh description (buffers, params, materials) used to build one to many meshes.
   * @returns {Mesh[]} mesh Array of {@link Mesh}
   */
  buildMeshes: function(e) {
    let t = e.params.meshName, n = e.buffers, i = new he();
    n.vertices !== void 0 && n.vertices !== null && i.setAttribute("position", new ge(new Float32Array(n.vertices), 3)), n.indices !== void 0 && n.indices !== null && i.setIndex(new ge(new Uint32Array(n.indices), 1)), n.colors !== void 0 && n.colors !== null && i.setAttribute("color", new ge(new Float32Array(n.colors), 3)), n.normals !== void 0 && n.normals !== null ? i.setAttribute("normal", new ge(new Float32Array(n.normals), 3)) : i.computeVertexNormals(), n.uvs !== void 0 && n.uvs !== null && i.setAttribute("uv", new ge(new Float32Array(n.uvs), 2)), n.skinIndex !== void 0 && n.skinIndex !== null && i.setAttribute("skinIndex", new ge(new Uint16Array(n.skinIndex), 4)), n.skinWeight !== void 0 && n.skinWeight !== null && i.setAttribute("skinWeight", new ge(new Float32Array(n.skinWeight), 4));
    let r, s, o, a = e.materials.materialNames, c = e.materials.multiMaterial, l = [];
    for (o in a)
      s = a[o], r = this.materialHandler.getMaterial(s), c && l.push(r);
    if (c) {
      r = l;
      let y = e.materials.materialGroups, g;
      for (o in y)
        g = y[o], i.addGroup(g.start, g.count, g.index);
    }
    let h = [], u, f, d = !0, p = e.geometryType === null ? 0 : e.geometryType;
    if (this.callbacks.onMeshAlter && (f = this.callbacks.onMeshAlter(
      {
        detail: {
          meshName: t,
          bufferGeometry: i,
          material: r,
          geometryType: p
        }
      }
    )), f) {
      if (f.isDisregardMesh())
        d = !1;
      else if (f.providesAlteredMeshes()) {
        for (let y in f.meshes)
          h.push(f.meshes[y]);
        d = !1;
      }
    }
    d && (e.computeBoundingSphere && i.computeBoundingSphere(), p === 0 ? u = new Fe(i, r) : p === 1 ? u = new nt(i, r) : u = new po(i, r), u.name = t, h.push(u));
    let x = e.params.meshName;
    if (h.length > 0) {
      let y = [];
      for (let g in h)
        u = h[g], y[g] = u.name;
      x += ": Adding mesh(es) (" + y.length + ": " + y + ") from input mesh: " + t, x += " (" + (e.progress.numericalValue * 100).toFixed(2) + "%)";
    } else
      x += ": Not adding mesh: " + t, x += " (" + (e.progress.numericalValue * 100).toFixed(2) + "%)";
    return this.callbacks.onProgress && this.callbacks.onProgress("progress", x, e.progress.numericalValue), h;
  }
};
const Mu = function(e, t) {
  this.disregardMesh = e === !0, this.alteredMesh = t === !0, this.meshes = [];
};
Mu.prototype = {
  constructor: Mu,
  /**
   * Add a mesh created within callback.
   *
   * @param {Mesh} mesh
   */
  addMesh: function(e) {
    this.meshes.push(e), this.alteredMesh = !0;
  },
  /**
   * Answers if mesh shall be disregarded completely.
   *
   * @returns {boolean}
   */
  isDisregardMesh: function() {
    return this.disregardMesh;
  },
  /**
   * Answers if new mesh(es) were created.
   *
   * @returns {boolean}
   */
  providesAlteredMeshes: function() {
    return this.alteredMesh;
  }
};
const Ec = function() {
  this.logging = {
    enabled: !1,
    debug: !1
  }, this.callbacks = {
    onLoadMaterials: null
  }, this.materials = {};
};
Ec.prototype = {
  constructor: Ec,
  /**
   * Enable or disable logging in general (except warn and error), plus enable or disable debug logging.
   *
   * @param {boolean} enabled True or false.
   * @param {boolean} debug True or false.
   */
  setLogging: function(e, t) {
    this.logging.enabled = e === !0, this.logging.debug = t === !0;
  },
  _setCallbacks: function(e) {
    e != null && e instanceof Function && (this.callbacks.onLoadMaterials = e);
  },
  /**
   * Creates default materials and adds them to the materials object.
   *
   * @param overrideExisting boolean Override existing material
   */
  createDefaultMaterials: function(e) {
    let t = new Ht({ color: 14479871 });
    t.name = "defaultMaterial";
    let n = new Ht({ color: 14479871 });
    n.name = "defaultVertexColorMaterial", n.vertexColors = !0;
    let i = new Qe();
    i.name = "defaultLineMaterial";
    let r = new Fn({ size: 0.1 });
    r.name = "defaultPointMaterial";
    let s = {};
    s[t.name] = t, s[n.name] = n, s[i.name] = i, s[r.name] = r, this.addMaterials(s, e);
  },
  /**
   * Updates the materials with contained material objects (sync) or from alteration instructions (async).
   *
   * @param {Object} materialPayload Material update instructions
   * @returns {Object} Map of {@link Material}
   */
  addPayloadMaterials: function(e) {
    let t, n, i = e.materials.materialCloneInstructions, r = {};
    if (i != null) {
      let o = i.materialNameOrg;
      o = o ?? "";
      let a = this.materials[o];
      a ? (t = a.clone(), n = i.materialName, t.name = n, Object.assign(t, i.materialProperties), this.materials[n] = t, r[n] = t) : this.logging.enabled && console.info('Requested material "' + o + '" is not available!');
    }
    let s = e.materials.serializedMaterials;
    if (s != null && Object.keys(s).length > 0) {
      let o = new Fo(), a;
      for (n in s)
        a = s[n], a != null && (t = o.parse(a), this.logging.enabled && console.info('De-serialized material with name "' + n + '" will be added.'), this.materials[n] = t, r[n] = t);
    }
    return s = e.materials.runtimeMaterials, r = this.addMaterials(s, !0, r), r;
  },
  /**
   * Set materials loaded by any supplier of an Array of {@link Material}.
   *
   * @param materials Object with named {@link Material}
   * @param overrideExisting boolean Override existing material
   * @param newMaterials [Object] with named {@link Material}
   */
  addMaterials: function(e, t, n) {
    if (n == null && (n = {}), e != null && Object.keys(e).length > 0) {
      let i, r, s;
      for (let o in e)
        i = e[o], s = t === !0, s || (r = this.materials[o], s = r == null), s && (this.materials[o] = i, n[o] = i), this.logging.enabled && this.logging.debug && console.info('Material with name "' + o + '" was added.');
    }
    return this.callbacks.onLoadMaterials && this.callbacks.onLoadMaterials(n), n;
  },
  /**
   * Returns the mapping object of material name and corresponding material.
   *
   * @returns {Object} Map of {@link Material}
   */
  getMaterials: function() {
    return this.materials;
  },
  /**
   *
   * @param {String} materialName
   * @returns {Material}
   */
  getMaterial: function(e) {
    return this.materials[e];
  },
  /**
   * Returns the mapping object of material name and corresponding jsonified material.
   *
   * @returns {Object} Map of Materials in JSON representation
   */
  getMaterialsJSON: function() {
    let e = {}, t;
    for (let n in this.materials)
      t = this.materials[n], e[n] = t.toJSON();
    return e;
  },
  /**
   * Removes all materials
   */
  clearMaterials: function() {
    this.materials = {};
  }
};
const os = function(e) {
  Ne.call(this, e), this.parser = new Sc(), this.modelName = "", this.instanceNo = 0, this.baseObject3d = new ie(), this.materialHandler = new Ec(), this.meshReceiver = new Tc(this.materialHandler);
  let t = this, n = function(i) {
    t._onAssetAvailable(i);
  };
  this.parser.setCallbackOnAssetAvailable(n);
};
os.OBJLOADER2_VERSION = "3.2.0";
console.info("Using OBJLoader2 version: " + os.OBJLOADER2_VERSION);
os.prototype = Object.assign(Object.create(Ne.prototype), {
  constructor: os,
  /**
   * See {@link OBJLoader2Parser.setLogging}
   * @return {OBJLoader2}
   */
  setLogging: function(e, t) {
    return this.parser.setLogging(e, t), this;
  },
  /**
   * See {@link OBJLoader2Parser.setMaterialPerSmoothingGroup}
   * @return {OBJLoader2}
   */
  setMaterialPerSmoothingGroup: function(e) {
    return this.parser.setMaterialPerSmoothingGroup(e), this;
  },
  /**
   * See {@link OBJLoader2Parser.setUseOAsMesh}
   * @return {OBJLoader2}
   */
  setUseOAsMesh: function(e) {
    return this.parser.setUseOAsMesh(e), this;
  },
  /**
   * See {@link OBJLoader2Parser.setUseIndices}
   * @return {OBJLoader2}
   */
  setUseIndices: function(e) {
    return this.parser.setUseIndices(e), this;
  },
  /**
   * See {@link OBJLoader2Parser.setDisregardNormals}
   * @return {OBJLoader2}
   */
  setDisregardNormals: function(e) {
    return this.parser.setDisregardNormals(e), this;
  },
  /**
   * Set the name of the model.
   *
   * @param {string} modelName
   * @return {OBJLoader2}
   */
  setModelName: function(e) {
    return this.modelName = e || this.modelName, this;
  },
  /**
   * Set the node where the loaded objects will be attached directly.
   *
   * @param {Object3D} baseObject3d Object already attached to scenegraph where new meshes will be attached to
   * @return {OBJLoader2}
   */
  setBaseObject3d: function(e) {
    return this.baseObject3d = e ?? this.baseObject3d, this;
  },
  /**
   * Add materials as associated array.
   *
   * @param {Object} materials Object with named {@link Material}
   * @param overrideExisting boolean Override existing material
   * @return {OBJLoader2}
   */
  addMaterials: function(e, t) {
    return this.materialHandler.addMaterials(e, t), this;
  },
  /**
   * See {@link OBJLoader2Parser.setCallbackOnAssetAvailable}
   * @return {OBJLoader2}
   */
  setCallbackOnAssetAvailable: function(e) {
    return this.parser.setCallbackOnAssetAvailable(e), this;
  },
  /**
   * See {@link OBJLoader2Parser.setCallbackOnProgress}
   * @return {OBJLoader2}
   */
  setCallbackOnProgress: function(e) {
    return this.parser.setCallbackOnProgress(e), this;
  },
  /**
   * See {@link OBJLoader2Parser.setCallbackOnError}
   * @return {OBJLoader2}
   */
  setCallbackOnError: function(e) {
    return this.parser.setCallbackOnError(e), this;
  },
  /**
   * See {@link OBJLoader2Parser.setCallbackOnLoad}
   * @return {OBJLoader2}
   */
  setCallbackOnLoad: function(e) {
    return this.parser.setCallbackOnLoad(e), this;
  },
  /**
   * Register a function that is called once a single mesh is available and it could be altered by the supplied function.
   *
   * @param {Function} [onMeshAlter]
   * @return {OBJLoader2}
   */
  setCallbackOnMeshAlter: function(e) {
    return this.meshReceiver._setCallbacks(this.parser.callbacks.onProgress, e), this;
  },
  /**
   * Register a function that is called once all materials have been loaded and they could be altered by the supplied function.
   *
   * @param {Function} [onLoadMaterials]
   * @return {OBJLoader2}
   */
  setCallbackOnLoadMaterials: function(e) {
    return this.materialHandler._setCallbacks(e), this;
  },
  /**
   * Use this convenient method to load a file at the given URL. By default the fileLoader uses an ArrayBuffer.
   *
   * @param {string}  url A string containing the path/URL of the file to be loaded.
   * @param {function} onLoad A function to be called after loading is successfully completed. The function receives loaded Object3D as an argument.
   * @param {function} [onFileLoadProgress] A function to be called while the loading is in progress. The argument will be the XMLHttpRequest instance, which contains total and Integer bytes.
   * @param {function} [onError] A function to be called if an error occurs during loading. The function receives the error as an argument.
   * @param {function} [onMeshAlter] Called after every single mesh is made available by the parser
   */
  load: function(e, t, n, i, r) {
    let s = this;
    if (t == null || !(t instanceof Function)) {
      let u = "onLoad is not a function! Aborting...";
      throw s.parser.callbacks.onError(u), u;
    } else
      this.parser.setCallbackOnLoad(t);
    (i == null || !(i instanceof Function)) && (i = function(u) {
      let f = u;
      u.currentTarget && u.currentTarget.statusText !== null && (f = `Error occurred while downloading!
url: ` + u.currentTarget.responseURL + `
status: ` + u.currentTarget.statusText), s.parser.callbacks.onError(f);
    }), e || i("An invalid url was provided. Unable to continue!");
    let o = new URL(e, window.location.href).href, a = o, c = o.split("/");
    if (c.length > 2 && (a = c[c.length - 1], this.path = c.slice(0, c.length - 1).join("/") + "/"), n == null || !(n instanceof Function)) {
      let u = 0, f = 0;
      n = function(d) {
        if (d.lengthComputable && (f = d.loaded / d.total, f > u)) {
          u = f;
          let p = 'Download of "' + e + '": ' + (f * 100).toFixed(2) + "%";
          s.parser.callbacks.onProgress("progressLoad", p, f);
        }
      };
    }
    this.setCallbackOnMeshAlter(r);
    let l = function(u) {
      s.parser.callbacks.onLoad(s.parse(u), "OBJLoader2#load: Parsing completed");
    }, h = new Vt(this.manager);
    h.setPath(this.path || this.resourcePath), h.setResponseType("arraybuffer"), h.load(a, l, n, i);
  },
  /**
   * Parses OBJ data synchronously from arraybuffer or string and returns the {@link Object3D}.
   *
   * @param {arraybuffer|string} content OBJ data as Uint8Array or String
   * @return {Object3D}
   */
  parse: function(e) {
    if (e == null)
      throw "Provided content is not a valid ArrayBuffer or String. Unable to continue parsing";
    return this.parser.logging.enabled && console.time("OBJLoader parse: " + this.modelName), this.materialHandler.createDefaultMaterials(!1), this.parser.setMaterials(this.materialHandler.getMaterials()), e instanceof ArrayBuffer || e instanceof Uint8Array ? (this.parser.logging.enabled && console.info("Parsing arrayBuffer..."), this.parser.execute(e)) : typeof e == "string" || e instanceof String ? (this.parser.logging.enabled && console.info("Parsing text..."), this.parser.executeLegacy(e)) : this.parser.callbacks.onError("Provided content was neither of type String nor Uint8Array! Aborting..."), this.parser.logging.enabled && console.timeEnd("OBJLoader parse: " + this.modelName), this.baseObject3d;
  },
  _onAssetAvailable: function(e) {
    if (e.cmd === "assetAvailable")
      if (e.type === "mesh") {
        let t = this.meshReceiver.buildMeshes(e);
        for (let n of t)
          this.baseObject3d.add(n);
      } else
        e.type === "material" && this.materialHandler.addPayloadMaterials(e);
  }
});
const lx = function() {
  let e = {};
  const t = function(n) {
    delete e[n];
  };
  this.add = function(n) {
    const i = performance.now() + "";
    return e[i] = n, n.then(() => t(i)), n;
  }, this.done = function(n) {
    Promise.all(Object.values(e)).then(() => {
      n();
    });
  };
}, un = (e, t = {}, n = "") => {
  const i = document.createElement(e);
  for (let r in t)
    i.setAttribute(r, t[r]);
  return i.innerHTML = n, i;
}, ux = (e, t) => (document.getElementById(e) || document.getElementsByTagName("head")[0].prepend(un("STYLE", { type: "text/css" }, t)), !0), ht = function(e) {
  let t = e, n = [];
  return function(r, s = {}) {
    return arguments.length > 0 ? typeof r == "function" ? (s.prepend ? n.unshift(r) : n.push(r), s.dontCallOnRegistration || r(t), () => {
      const o = n.indexOf(r);
      o !== -1 && n.splice(o, 1);
    }) : (t !== r && JSON.stringify(t) !== JSON.stringify(r) && (t = r, n.forEach((o) => o(t))), t) : t;
  };
}, hx = function(e, t = {}) {
  ux("geocam-viewer", `
    .geocam-viewer {
      position: relative;
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
  `);
  const i = 0.5, r = {
    aspect: 2,
    // standard defaults if not overridden by rigConfig
    near: 0.1,
    fov: 35,
    far: 100,
    scale: 1,
    xOffset: 0,
    yOffset: 0,
    rotationOffsets: [0, 0, 0],
    hemispheres: [
      () => C(0),
      () => C(1),
      () => C(2)
    ]
  }, s = t.plugins, o = new lx(), a = {
    shot: ht(),
    capture: ht(),
    fov: ht(),
    yaw: ht(0),
    rotation: ht([]),
    brightness: ht([]),
    facing: ht(0),
    horizon: ht(0),
    urls: ht([]),
    visible: ht(!1),
    hemispheres: ht([])
  }, c = [ht(1), ht(1), ht(1)], l = ht(window.performance.now());
  let h = !1, u, f, d, p, x = 0, y = 0, g = 0, m = 0, _ = [null, null, null], v = null, w = !1, A, E, U = [], L, q, O, N = JSON.stringify([]), D = JSON.stringify([]);
  const R = function(I) {
    return (270 - I) * (Math.PI / 180);
  }, C = function(I) {
    const F = new qr(
      12,
      32,
      32,
      0,
      2 * Math.PI,
      Math.PI / 3 * I,
      Math.PI / 3
    ), W = new Pt({}), ne = new Fe(F, W);
    return ne.material.side = rt, ne;
  }, z = function() {
    p.style.top = x + "px", p.style.left = y + "px", p.style.width = g + "px", p.style.height = m + "px";
  }, J = function(I, F = !1) {
    const W = I.domElement, ne = p.parentNode.clientWidth, ce = p.parentNode.clientHeight, te = F || W.width !== ne || W.height !== ce;
    return te && (p.style.width = ne + "px", p.style.height = ce + "px", I.setSize(ne, ce, !1)), te;
  }, $ = (I = !1) => {
    if (J(ve, I)) {
      const ue = ve.domElement;
      f.aspect = ue.clientWidth / ue.clientHeight, w = !0;
    }
    const F = a.horizon(), W = a.facing();
    a.facing((360 + W) % 360);
    const ne = (90 - F) * (Math.PI / 180), ce = W * (Math.PI / 180), te = 10;
    {
      const ue = te * Math.sin(ne) * Math.sin(ce), Me = -te * Math.cos(ne), Ue = te * Math.sin(ne) * Math.cos(ce);
      f.up.set(0, 0, 1), f.lookAt(ue, Ue, Me);
    }
    w && (f.updateProjectionMatrix(), w = !1), ve.render(M, f), A = requestAnimationFrame($);
  }, re = function(I) {
    return new Promise((F, W) => {
      typeof I == "function" ? F(I()) : new os().load(I, (ce) => {
        ce.traverse(function(te) {
          te instanceof Fe && (te.material.side = 2, te.material.flatShading = !0, te.material.transparent = !0, te.rotation.set(0, 0, 0), F(te));
        });
      });
    });
  }, de = function(I) {
    return console.log("loadMeshes"), o.add(
      new Promise((F, W) => {
        let ne = _.length;
        I.forEach((ce, te) => {
          re(ce).then((ue) => {
            _[te] = ue, ne -= 1, ne <= 0 && F();
          });
        });
      })
    );
  }, pe = function() {
    _.forEach((I, F) => I ? v.remove(I) : null), M.remove(v), ve.renderLists.dispose(), _ = [null, null, null], v = null;
  }, Pe = function() {
    L && (L(), L = null);
  }, Se = function() {
    O && (O(), O = null);
  }, Ve = function(I, ...F) {
    return Object.assign(I, ...F);
  }, De = async function(I) {
    let F;
    I && I.length > 0 && N !== (F = JSON.stringify(I)) && (N = F, Pe(), v && pe(), await de(I), v = new Rn(), _.forEach((W, ne) => {
      v.add(W), W.name = `${ne}`;
    }), M.add(v), L = a.urls((W) => {
      const ne = JSON.stringify(W);
      ne !== D && W.length > 0 && (D = ne, Y(W, a.brightness()));
    }));
  }, j = async function(I = {}) {
    Se(), pe(), d = Ve(r, I);
    const F = a.fov() || d.fov;
    return a.fov(F), f = new tt(
      F,
      d.aspect,
      d.near,
      d.far
    ), O = a.hemispheres(De), this;
  }, Xe = function() {
    _.forEach((I, F) => {
      I && I.material && (I.material.opacity = i);
    }), c.forEach((I) => I(0));
  }, Ee = function(I, F, W, ne, ce, te) {
    I.material.opacity = i;
    const ue = parseInt(I.name);
    c[ue](0), new cx(E).load(
      F,
      (Me) => {
        window.tex = Me, I.material.map = Me, window.mat = I.material, I.material.opacity = 1, Me.repeat.set(d.scale, d.scale), Me.offset.set(d.yOffset, d.xOffset), Me.rotation = d.rotationOffsets[ue], I.material.needsUpdate = !0, c[ue](1), W && W(I, F);
      },
      (Me) => {
        const Ue = Me.loaded / Me.total;
        ne && ne(I, F, Ue);
      },
      (Me) => {
        ce ? ce(I, F, Me) : console.error("error loading image", Me, ue, F);
      },
      te
    );
  }, Le = function(I, F, W, ne, ce) {
    const te = function(Me, Ue, Wt, rr) {
      const fs = parseInt(Me.name);
      let oi = Ue.length - Wt;
      const sr = Ue[Wt];
      Ee(
        Me,
        sr,
        () => {
          c[fs]((Wt + 1) / Ue.length), ne && oi == Ue.length && ne(Me, sr), W && oi <= 1 && W(Me, sr), Wt += 1, Wt < Ue.length && te(Me, Ue, Wt);
        },
        (Qo, Ko, ds) => {
          c[fs]((Wt + ds) / Ue.length);
        },
        null,
        1
      );
    }, ue = parseInt(I.name);
    if (Array.isArray(F))
      te(I, F, 0);
    else {
      const Me = F;
      Ee(
        I,
        Me,
        () => {
          c[ue](1), ne && ne(I, Me), W && W(I, F);
        },
        (Ue, Wt, rr) => {
          c[ue](rr);
        },
        null,
        // nothing to do on error
        ce
        // assume a single brightness value too.
      );
    }
  }, we = function(I) {
    s.push(I), h && I.init.apply(I, [this]);
  }, X = function() {
    const I = a.rotation();
    var F = new Ce();
    I.length == 9 ? F.set(
      I[0],
      I[1],
      I[2],
      0,
      I[3],
      I[4],
      I[5],
      0,
      I[6],
      I[7],
      I[8],
      0,
      0,
      0,
      0,
      1
    ) : F.makeRotationY(R(a.yaw() - 90));
    {
      var W = new Ce();
      W.makeRotationX(Math.PI / 2), F.premultiply(W);
    }
    v.setRotationFromMatrix(F);
  }, Y = async function(I, F = [1, 1, 1]) {
    E && E.abort(), E = new AbortController();
    let W = _.length;
    _.length, X(), _.forEach((ne, ce) => {
      const te = I[ce];
      Le(
        ne,
        te,
        (ue, Me) => {
          if (W -= 1, W <= 0)
            return !0;
        },
        (ue, Me) => {
        },
        F[ce]
      );
    }), $();
  }, Q = function(I, F, W, ne, ce) {
    const te = ce ? JSON.parse(ce) : [1, 1, 1];
    W && W.length > 0 && a.hemispheres(W);
    const ue = typeof ne == "string" ? JSON.parse(ne) : ne;
    a.rotation(ue || []), a.brightness(te), a.yaw(parseFloat(F || 0)), a.urls(I), a.visible(!0);
  }, me = function(I) {
    const F = a.urls();
    F && F.length >= _.length && (I && a.brightness(JSON.parse(I)), Y(F, a.brightness()));
  }, le = function() {
    a.visible(!1), a.shot(null);
  };
  let ve = new hs();
  ve.setPixelRatio(window.devicePixelRatio);
  let M = new Ar(), T = new Bo(16777215, 1);
  M.add(T);
  const Z = e.getBoundingClientRect();
  p = un("DIV", { class: "geocam-viewer" }), u = un("DIV", { class: "geocam-viewer-controls" }), u.append(
    un(
      "DIV",
      { class: "geocam-viewer-controls-left" },
      '<div class="geocam-viewer-controls-left-top"></div><div class="geocam-viewer-controls-left-bottom"></div>'
    )
  );
  const V = un(
    "DIV",
    { class: "geocam-viewer-controls-center" },
    '<div class="geocam-viewer-controls-top"></div><div class="geocam-viewer-controls-mid"></div><div class="geocam-viewer-controls-bottom"></div>'
  );
  V.append(un("DIV")), V.append(un("DIV")), V.append(un("DIV")), u.append(V), u.append(
    un(
      "DIV",
      { class: "geocam-viewer-controls-right" },
      '<div class="geocam-viewer-controls-right-top"></div><div class="geocam-viewer-controls-right-bottom"></div>'
    )
  ), p.appendChild(u), g = Z.width, m = Z.height, z(), p.appendChild(ve.domElement), q = a.visible((I) => {
    I ? p.classList.remove("geocam-viewer-hidden") : p.classList.add("geocam-viewer-hidden");
  }), e.appendChild(p), U.push(
    a.fov((I) => {
      f && I !== null && (f.fov = I, w = !0);
    })
  );
  const P = function() {
    cancelAnimationFrame(A), U.forEach((I) => I()), q(), Pe(), s.forEach((I) => {
      "destroy" in I && I.destroy.apply(I);
    }), pe(), M = null, T = null, f = null, p.removeChild(ve.domElement), e.removeChild(p), ve = null;
  }, K = function(I, F = null) {
    return a[I] || this[I] ? (console.info(
      "geocam viewer attempt to add store that already exists",
      I
    ), a[I]() === null && F !== null && a[I](F)) : (a[I] = ht(F), this[I] = a[I], l(window.performance.now())), a[I];
  }, ee = function(I, F, W = {}) {
    const ne = document.getElementsByClassName(
      `geocam-viewer-controls-${F}`
    )[0];
    ne ? (I.classList.add("geocam-viewer-control"), W.prepend ? ne.prepend(I) : ne.appendChild(I)) : console.error(
      "geocam viewer unable to add control no matching location",
      I,
      F
    );
  };
  this.setup = j, this.show = Q, this.reload = me, this.hide = le, this.resetProgress = Xe, this.plugin = we, this.destroy = P, this.renderer = ve, this.element = e, this.wrapper = p, this.done = o.done, this.progress = c, this.newstoreadded = l, this.stores = a;
  for (let I in a)
    this[I] = a[I];
  this.store = K, this.addControl = ee, s.forEach((I) => {
    "init" in I && I.init.apply(I, [this]);
  }), j(t.config), $(), h = !0;
};
export {
  hx as viewer
};

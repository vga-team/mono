const je = globalThis, Fi = je.ShadowRoot && (je.ShadyCSS === void 0 || je.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, qi = /* @__PURE__ */ Symbol(), po = /* @__PURE__ */ new WeakMap();
let Co = class {
  constructor(r, a, u) {
    if (this._$cssResult$ = !0, u !== qi) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = r, this.t = a;
  }
  get styleSheet() {
    let r = this.o;
    const a = this.t;
    if (Fi && r === void 0) {
      const u = a !== void 0 && a.length === 1;
      u && (r = po.get(a)), r === void 0 && ((this.o = r = new CSSStyleSheet()).replaceSync(this.cssText), u && po.set(a, r));
    }
    return r;
  }
  toString() {
    return this.cssText;
  }
};
const ls = (l) => new Co(typeof l == "string" ? l : l + "", void 0, qi), At = (l, ...r) => {
  const a = l.length === 1 ? l[0] : r.reduce((u, c, _) => u + ((p) => {
    if (p._$cssResult$ === !0) return p.cssText;
    if (typeof p == "number") return p;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(c) + l[_ + 1], l[0]);
  return new Co(a, l, qi);
}, hs = (l, r) => {
  if (Fi) l.adoptedStyleSheets = r.map((a) => a instanceof CSSStyleSheet ? a : a.styleSheet);
  else for (const a of r) {
    const u = document.createElement("style"), c = je.litNonce;
    c !== void 0 && u.setAttribute("nonce", c), u.textContent = a.cssText, l.appendChild(u);
  }
}, _o = Fi ? (l) => l : (l) => l instanceof CSSStyleSheet ? ((r) => {
  let a = "";
  for (const u of r.cssRules) a += u.cssText;
  return ls(a);
})(l) : l;
const { is: us, defineProperty: cs, getOwnPropertyDescriptor: ds, getOwnPropertyNames: fs, getOwnPropertySymbols: ps, getPrototypeOf: _s } = Object, Xe = globalThis, mo = Xe.trustedTypes, ms = mo ? mo.emptyScript : "", gs = Xe.reactiveElementPolyfillSupport, we = (l, r) => l, Ge = { toAttribute(l, r) {
  switch (r) {
    case Boolean:
      l = l ? ms : null;
      break;
    case Object:
    case Array:
      l = l == null ? l : JSON.stringify(l);
  }
  return l;
}, fromAttribute(l, r) {
  let a = l;
  switch (r) {
    case Boolean:
      a = l !== null;
      break;
    case Number:
      a = l === null ? null : Number(l);
      break;
    case Object:
    case Array:
      try {
        a = JSON.parse(l);
      } catch {
        a = null;
      }
  }
  return a;
} }, Vi = (l, r) => !us(l, r), go = { attribute: !0, type: String, converter: Ge, reflect: !1, useDefault: !1, hasChanged: Vi };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Xe.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let Yt = class extends HTMLElement {
  static addInitializer(r) {
    this._$Ei(), (this.l ??= []).push(r);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(r, a = go) {
    if (a.state && (a.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(r) && ((a = Object.create(a)).wrapped = !0), this.elementProperties.set(r, a), !a.noAccessor) {
      const u = /* @__PURE__ */ Symbol(), c = this.getPropertyDescriptor(r, u, a);
      c !== void 0 && cs(this.prototype, r, c);
    }
  }
  static getPropertyDescriptor(r, a, u) {
    const { get: c, set: _ } = ds(this.prototype, r) ?? { get() {
      return this[a];
    }, set(p) {
      this[a] = p;
    } };
    return { get: c, set(p) {
      const M = c?.call(this);
      _?.call(this, p), this.requestUpdate(r, M, u);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(r) {
    return this.elementProperties.get(r) ?? go;
  }
  static _$Ei() {
    if (this.hasOwnProperty(we("elementProperties"))) return;
    const r = _s(this);
    r.finalize(), r.l !== void 0 && (this.l = [...r.l]), this.elementProperties = new Map(r.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(we("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(we("properties"))) {
      const a = this.properties, u = [...fs(a), ...ps(a)];
      for (const c of u) this.createProperty(c, a[c]);
    }
    const r = this[Symbol.metadata];
    if (r !== null) {
      const a = litPropertyMetadata.get(r);
      if (a !== void 0) for (const [u, c] of a) this.elementProperties.set(u, c);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [a, u] of this.elementProperties) {
      const c = this._$Eu(a, u);
      c !== void 0 && this._$Eh.set(c, a);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(r) {
    const a = [];
    if (Array.isArray(r)) {
      const u = new Set(r.flat(1 / 0).reverse());
      for (const c of u) a.unshift(_o(c));
    } else r !== void 0 && a.push(_o(r));
    return a;
  }
  static _$Eu(r, a) {
    const u = a.attribute;
    return u === !1 ? void 0 : typeof u == "string" ? u : typeof r == "string" ? r.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((r) => r(this));
  }
  addController(r) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(r), this.renderRoot !== void 0 && this.isConnected && r.hostConnected?.();
  }
  removeController(r) {
    this._$EO?.delete(r);
  }
  _$E_() {
    const r = /* @__PURE__ */ new Map(), a = this.constructor.elementProperties;
    for (const u of a.keys()) this.hasOwnProperty(u) && (r.set(u, this[u]), delete this[u]);
    r.size > 0 && (this._$Ep = r);
  }
  createRenderRoot() {
    const r = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return hs(r, this.constructor.elementStyles), r;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((r) => r.hostConnected?.());
  }
  enableUpdating(r) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((r) => r.hostDisconnected?.());
  }
  attributeChangedCallback(r, a, u) {
    this._$AK(r, u);
  }
  _$ET(r, a) {
    const u = this.constructor.elementProperties.get(r), c = this.constructor._$Eu(r, u);
    if (c !== void 0 && u.reflect === !0) {
      const _ = (u.converter?.toAttribute !== void 0 ? u.converter : Ge).toAttribute(a, u.type);
      this._$Em = r, _ == null ? this.removeAttribute(c) : this.setAttribute(c, _), this._$Em = null;
    }
  }
  _$AK(r, a) {
    const u = this.constructor, c = u._$Eh.get(r);
    if (c !== void 0 && this._$Em !== c) {
      const _ = u.getPropertyOptions(c), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : _.converter?.fromAttribute !== void 0 ? _.converter : Ge;
      this._$Em = c;
      const M = p.fromAttribute(a, _.type);
      this[c] = M ?? this._$Ej?.get(c) ?? M, this._$Em = null;
    }
  }
  requestUpdate(r, a, u, c = !1, _) {
    if (r !== void 0) {
      const p = this.constructor;
      if (c === !1 && (_ = this[r]), u ??= p.getPropertyOptions(r), !((u.hasChanged ?? Vi)(_, a) || u.useDefault && u.reflect && _ === this._$Ej?.get(r) && !this.hasAttribute(p._$Eu(r, u)))) return;
      this.C(r, a, u);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(r, a, { useDefault: u, reflect: c, wrapped: _ }, p) {
    u && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(r) && (this._$Ej.set(r, p ?? a ?? this[r]), _ !== !0 || p !== void 0) || (this._$AL.has(r) || (this.hasUpdated || u || (a = void 0), this._$AL.set(r, a)), c === !0 && this._$Em !== r && (this._$Eq ??= /* @__PURE__ */ new Set()).add(r));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (a) {
      Promise.reject(a);
    }
    const r = this.scheduleUpdate();
    return r != null && await r, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [c, _] of this._$Ep) this[c] = _;
        this._$Ep = void 0;
      }
      const u = this.constructor.elementProperties;
      if (u.size > 0) for (const [c, _] of u) {
        const { wrapped: p } = _, M = this[c];
        p !== !0 || this._$AL.has(c) || M === void 0 || this.C(c, void 0, _, M);
      }
    }
    let r = !1;
    const a = this._$AL;
    try {
      r = this.shouldUpdate(a), r ? (this.willUpdate(a), this._$EO?.forEach((u) => u.hostUpdate?.()), this.update(a)) : this._$EM();
    } catch (u) {
      throw r = !1, this._$EM(), u;
    }
    r && this._$AE(a);
  }
  willUpdate(r) {
  }
  _$AE(r) {
    this._$EO?.forEach((a) => a.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(r)), this.updated(r);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(r) {
    return !0;
  }
  update(r) {
    this._$Eq &&= this._$Eq.forEach((a) => this._$ET(a, this[a])), this._$EM();
  }
  updated(r) {
  }
  firstUpdated(r) {
  }
};
Yt.elementStyles = [], Yt.shadowRootOptions = { mode: "open" }, Yt[we("elementProperties")] = /* @__PURE__ */ new Map(), Yt[we("finalized")] = /* @__PURE__ */ new Map(), gs?.({ ReactiveElement: Yt }), (Xe.reactiveElementVersions ??= []).push("2.1.2");
const ji = globalThis, vo = (l) => l, Ye = ji.trustedTypes, yo = Ye ? Ye.createPolicy("lit-html", { createHTML: (l) => l }) : void 0, Ao = "$lit$", Ct = `lit$${Math.random().toFixed(9).slice(2)}$`, So = "?" + Ct, vs = `<${So}>`, Zt = document, Pe = () => Zt.createComment(""), Le = (l) => l === null || typeof l != "object" && typeof l != "function", Gi = Array.isArray, ys = (l) => Gi(l) || typeof l?.[Symbol.iterator] == "function", $i = `[ 	
\f\r]`, me = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, bo = /-->/g, wo = />/g, Ot = RegExp(`>|${$i}(?:([^\\s"'>=/]+)(${$i}*=${$i}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), xo = /'/g, Po = /"/g, Eo = /^(?:script|style|textarea|title)$/i, bs = (l) => (r, ...a) => ({ _$litType$: l, strings: r, values: a }), pt = bs(1), Kt = /* @__PURE__ */ Symbol.for("lit-noChange"), $ = /* @__PURE__ */ Symbol.for("lit-nothing"), Lo = /* @__PURE__ */ new WeakMap(), It = Zt.createTreeWalker(Zt, 129);
function Mo(l, r) {
  if (!Gi(l) || !l.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return yo !== void 0 ? yo.createHTML(r) : r;
}
const ws = (l, r) => {
  const a = l.length - 1, u = [];
  let c, _ = r === 2 ? "<svg>" : r === 3 ? "<math>" : "", p = me;
  for (let M = 0; M < a; M++) {
    const g = l[M];
    let N, D, w = -1, W = 0;
    for (; W < g.length && (p.lastIndex = W, D = p.exec(g), D !== null); ) W = p.lastIndex, p === me ? D[1] === "!--" ? p = bo : D[1] !== void 0 ? p = wo : D[2] !== void 0 ? (Eo.test(D[2]) && (c = RegExp("</" + D[2], "g")), p = Ot) : D[3] !== void 0 && (p = Ot) : p === Ot ? D[0] === ">" ? (p = c ?? me, w = -1) : D[1] === void 0 ? w = -2 : (w = p.lastIndex - D[2].length, N = D[1], p = D[3] === void 0 ? Ot : D[3] === '"' ? Po : xo) : p === Po || p === xo ? p = Ot : p === bo || p === wo ? p = me : (p = Ot, c = void 0);
    const tt = p === Ot && l[M + 1].startsWith("/>") ? " " : "";
    _ += p === me ? g + vs : w >= 0 ? (u.push(N), g.slice(0, w) + Ao + g.slice(w) + Ct + tt) : g + Ct + (w === -2 ? M : tt);
  }
  return [Mo(l, _ + (l[a] || "<?>") + (r === 2 ? "</svg>" : r === 3 ? "</math>" : "")), u];
};
class Te {
  constructor({ strings: r, _$litType$: a }, u) {
    let c;
    this.parts = [];
    let _ = 0, p = 0;
    const M = r.length - 1, g = this.parts, [N, D] = ws(r, a);
    if (this.el = Te.createElement(N, u), It.currentNode = this.el.content, a === 2 || a === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (c = It.nextNode()) !== null && g.length < M; ) {
      if (c.nodeType === 1) {
        if (c.hasAttributes()) for (const w of c.getAttributeNames()) if (w.endsWith(Ao)) {
          const W = D[p++], tt = c.getAttribute(w).split(Ct), et = /([.?@])?(.*)/.exec(W);
          g.push({ type: 1, index: _, name: et[2], strings: tt, ctor: et[1] === "." ? Ps : et[1] === "?" ? Ls : et[1] === "@" ? Ts : ti }), c.removeAttribute(w);
        } else w.startsWith(Ct) && (g.push({ type: 6, index: _ }), c.removeAttribute(w));
        if (Eo.test(c.tagName)) {
          const w = c.textContent.split(Ct), W = w.length - 1;
          if (W > 0) {
            c.textContent = Ye ? Ye.emptyScript : "";
            for (let tt = 0; tt < W; tt++) c.append(w[tt], Pe()), It.nextNode(), g.push({ type: 2, index: ++_ });
            c.append(w[W], Pe());
          }
        }
      } else if (c.nodeType === 8) if (c.data === So) g.push({ type: 2, index: _ });
      else {
        let w = -1;
        for (; (w = c.data.indexOf(Ct, w + 1)) !== -1; ) g.push({ type: 7, index: _ }), w += Ct.length - 1;
      }
      _++;
    }
  }
  static createElement(r, a) {
    const u = Zt.createElement("template");
    return u.innerHTML = r, u;
  }
}
function Jt(l, r, a = l, u) {
  if (r === Kt) return r;
  let c = u !== void 0 ? a._$Co?.[u] : a._$Cl;
  const _ = Le(r) ? void 0 : r._$litDirective$;
  return c?.constructor !== _ && (c?._$AO?.(!1), _ === void 0 ? c = void 0 : (c = new _(l), c._$AT(l, a, u)), u !== void 0 ? (a._$Co ??= [])[u] = c : a._$Cl = c), c !== void 0 && (r = Jt(l, c._$AS(l, r.values), c, u)), r;
}
class xs {
  constructor(r, a) {
    this._$AV = [], this._$AN = void 0, this._$AD = r, this._$AM = a;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(r) {
    const { el: { content: a }, parts: u } = this._$AD, c = (r?.creationScope ?? Zt).importNode(a, !0);
    It.currentNode = c;
    let _ = It.nextNode(), p = 0, M = 0, g = u[0];
    for (; g !== void 0; ) {
      if (p === g.index) {
        let N;
        g.type === 2 ? N = new Ce(_, _.nextSibling, this, r) : g.type === 1 ? N = new g.ctor(_, g.name, g.strings, this, r) : g.type === 6 && (N = new Cs(_, this, r)), this._$AV.push(N), g = u[++M];
      }
      p !== g?.index && (_ = It.nextNode(), p++);
    }
    return It.currentNode = Zt, c;
  }
  p(r) {
    let a = 0;
    for (const u of this._$AV) u !== void 0 && (u.strings !== void 0 ? (u._$AI(r, u, a), a += u.strings.length - 2) : u._$AI(r[a])), a++;
  }
}
class Ce {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(r, a, u, c) {
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = r, this._$AB = a, this._$AM = u, this.options = c, this._$Cv = c?.isConnected ?? !0;
  }
  get parentNode() {
    let r = this._$AA.parentNode;
    const a = this._$AM;
    return a !== void 0 && r?.nodeType === 11 && (r = a.parentNode), r;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(r, a = this) {
    r = Jt(this, r, a), Le(r) ? r === $ || r == null || r === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : r !== this._$AH && r !== Kt && this._(r) : r._$litType$ !== void 0 ? this.$(r) : r.nodeType !== void 0 ? this.T(r) : ys(r) ? this.k(r) : this._(r);
  }
  O(r) {
    return this._$AA.parentNode.insertBefore(r, this._$AB);
  }
  T(r) {
    this._$AH !== r && (this._$AR(), this._$AH = this.O(r));
  }
  _(r) {
    this._$AH !== $ && Le(this._$AH) ? this._$AA.nextSibling.data = r : this.T(Zt.createTextNode(r)), this._$AH = r;
  }
  $(r) {
    const { values: a, _$litType$: u } = r, c = typeof u == "number" ? this._$AC(r) : (u.el === void 0 && (u.el = Te.createElement(Mo(u.h, u.h[0]), this.options)), u);
    if (this._$AH?._$AD === c) this._$AH.p(a);
    else {
      const _ = new xs(c, this), p = _.u(this.options);
      _.p(a), this.T(p), this._$AH = _;
    }
  }
  _$AC(r) {
    let a = Lo.get(r.strings);
    return a === void 0 && Lo.set(r.strings, a = new Te(r)), a;
  }
  k(r) {
    Gi(this._$AH) || (this._$AH = [], this._$AR());
    const a = this._$AH;
    let u, c = 0;
    for (const _ of r) c === a.length ? a.push(u = new Ce(this.O(Pe()), this.O(Pe()), this, this.options)) : u = a[c], u._$AI(_), c++;
    c < a.length && (this._$AR(u && u._$AB.nextSibling, c), a.length = c);
  }
  _$AR(r = this._$AA.nextSibling, a) {
    for (this._$AP?.(!1, !0, a); r !== this._$AB; ) {
      const u = vo(r).nextSibling;
      vo(r).remove(), r = u;
    }
  }
  setConnected(r) {
    this._$AM === void 0 && (this._$Cv = r, this._$AP?.(r));
  }
}
class ti {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(r, a, u, c, _) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = r, this.name = a, this._$AM = c, this.options = _, u.length > 2 || u[0] !== "" || u[1] !== "" ? (this._$AH = Array(u.length - 1).fill(new String()), this.strings = u) : this._$AH = $;
  }
  _$AI(r, a = this, u, c) {
    const _ = this.strings;
    let p = !1;
    if (_ === void 0) r = Jt(this, r, a, 0), p = !Le(r) || r !== this._$AH && r !== Kt, p && (this._$AH = r);
    else {
      const M = r;
      let g, N;
      for (r = _[0], g = 0; g < _.length - 1; g++) N = Jt(this, M[u + g], a, g), N === Kt && (N = this._$AH[g]), p ||= !Le(N) || N !== this._$AH[g], N === $ ? r = $ : r !== $ && (r += (N ?? "") + _[g + 1]), this._$AH[g] = N;
    }
    p && !c && this.j(r);
  }
  j(r) {
    r === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, r ?? "");
  }
}
class Ps extends ti {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(r) {
    this.element[this.name] = r === $ ? void 0 : r;
  }
}
let Ls = class extends ti {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(r) {
    this.element.toggleAttribute(this.name, !!r && r !== $);
  }
};
class Ts extends ti {
  constructor(r, a, u, c, _) {
    super(r, a, u, c, _), this.type = 5;
  }
  _$AI(r, a = this) {
    if ((r = Jt(this, r, a, 0) ?? $) === Kt) return;
    const u = this._$AH, c = r === $ && u !== $ || r.capture !== u.capture || r.once !== u.once || r.passive !== u.passive, _ = r !== $ && (u === $ || c);
    c && this.element.removeEventListener(this.name, this, u), _ && this.element.addEventListener(this.name, this, r), this._$AH = r;
  }
  handleEvent(r) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, r) : this._$AH.handleEvent(r);
  }
}
class Cs {
  constructor(r, a, u) {
    this.element = r, this.type = 6, this._$AN = void 0, this._$AM = a, this.options = u;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(r) {
    Jt(this, r);
  }
}
const As = ji.litHtmlPolyfillSupport;
As?.(Te, Ce), (ji.litHtmlVersions ??= []).push("3.3.2");
const Ss = (l, r, a) => {
  const u = a?.renderBefore ?? r;
  let c = u._$litPart$;
  if (c === void 0) {
    const _ = a?.renderBefore ?? null;
    u._$litPart$ = c = new Ce(r.insertBefore(Pe(), _), _, void 0, a ?? {});
  }
  return c._$AI(l), c;
};
const Yi = globalThis;
let ht = class extends Yt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const r = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= r.firstChild, r;
  }
  update(r) {
    const a = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(r), this._$Do = Ss(a, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return Kt;
  }
};
ht._$litElement$ = !0, ht.finalized = !0, Yi.litElementHydrateSupport?.({ LitElement: ht });
const Es = Yi.litElementPolyfillSupport;
Es?.({ LitElement: ht });
(Yi.litElementVersions ??= []).push("4.2.2");
const Bt = (l) => (r, a) => {
  a !== void 0 ? a.addInitializer(() => {
    customElements.define(l, r);
  }) : customElements.define(l, r);
};
const Ms = { attribute: !0, type: String, converter: Ge, reflect: !1, hasChanged: Vi }, ks = (l = Ms, r, a) => {
  const { kind: u, metadata: c } = a;
  let _ = globalThis.litPropertyMetadata.get(c);
  if (_ === void 0 && globalThis.litPropertyMetadata.set(c, _ = /* @__PURE__ */ new Map()), u === "setter" && ((l = Object.create(l)).wrapped = !0), _.set(a.name, l), u === "accessor") {
    const { name: p } = a;
    return { set(M) {
      const g = r.get.call(this);
      r.set.call(this, M), this.requestUpdate(p, g, l, !0, M);
    }, init(M) {
      return M !== void 0 && this.C(p, void 0, l, M), M;
    } };
  }
  if (u === "setter") {
    const { name: p } = a;
    return function(M) {
      const g = this[p];
      r.call(this, M), this.requestUpdate(p, g, l, !0, M);
    };
  }
  throw Error("Unsupported decorator location: " + u);
};
function I(l) {
  return (r, a) => typeof a == "object" ? ks(l, r, a) : ((u, c, _) => {
    const p = c.hasOwnProperty(_);
    return c.constructor.createProperty(_, u), p ? Object.getOwnPropertyDescriptor(c, _) : void 0;
  })(l, r, a);
}
function zs(l) {
  return I({ ...l, state: !0, attribute: !1 });
}
const Os = (l) => l.strings === void 0;
const Is = { CHILD: 2 }, Zs = (l) => (...r) => ({ _$litDirective$: l, values: r });
class Bs {
  constructor(r) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(r, a, u) {
    this._$Ct = r, this._$AM = a, this._$Ci = u;
  }
  _$AS(r, a) {
    return this.update(r, a);
  }
  update(r, a) {
    return this.render(...a);
  }
}
const xe = (l, r) => {
  const a = l._$AN;
  if (a === void 0) return !1;
  for (const u of a) u._$AO?.(r, !1), xe(u, r);
  return !0;
}, Ke = (l) => {
  let r, a;
  do {
    if ((r = l._$AM) === void 0) break;
    a = r._$AN, a.delete(l), l = r;
  } while (a?.size === 0);
}, ko = (l) => {
  for (let r; r = l._$AM; l = r) {
    let a = r._$AN;
    if (a === void 0) r._$AN = a = /* @__PURE__ */ new Set();
    else if (a.has(l)) break;
    a.add(l), Ns(r);
  }
};
function Rs(l) {
  this._$AN !== void 0 ? (Ke(this), this._$AM = l, ko(this)) : this._$AM = l;
}
function Ds(l, r = !1, a = 0) {
  const u = this._$AH, c = this._$AN;
  if (c !== void 0 && c.size !== 0) if (r) if (Array.isArray(u)) for (let _ = a; _ < u.length; _++) xe(u[_], !1), Ke(u[_]);
  else u != null && (xe(u, !1), Ke(u));
  else xe(this, l);
}
const Ns = (l) => {
  l.type == Is.CHILD && (l._$AP ??= Ds, l._$AQ ??= Rs);
};
class Hs extends Bs {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(r, a, u) {
    super._$AT(r, a, u), ko(this), this.isConnected = r._$AU;
  }
  _$AO(r, a = !0) {
    r !== this.isConnected && (this.isConnected = r, r ? this.reconnected?.() : this.disconnected?.()), a && (xe(this, r), Ke(this));
  }
  setValue(r) {
    if (Os(this._$Ct)) this._$Ct._$AI(r, this);
    else {
      const a = [...this._$Ct._$AH];
      a[this._$Ci] = r, this._$Ct._$AI(a, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const ge = () => new $s();
class $s {
}
const Wi = /* @__PURE__ */ new WeakMap(), ve = Zs(class extends Hs {
  render(l) {
    return $;
  }
  update(l, [r]) {
    const a = r !== this.G;
    return a && this.G !== void 0 && this.rt(void 0), (a || this.lt !== this.ct) && (this.G = r, this.ht = l.options?.host, this.rt(this.ct = l.element)), $;
  }
  rt(l) {
    if (this.isConnected || (l = void 0), typeof this.G == "function") {
      const r = this.ht ?? globalThis;
      let a = Wi.get(r);
      a === void 0 && (a = /* @__PURE__ */ new WeakMap(), Wi.set(r, a)), a.get(this.G) !== void 0 && this.G.call(this.ht, void 0), a.set(this.G, l), l !== void 0 && this.G.call(this.ht, l);
    } else this.G.value = l;
  }
  get lt() {
    return typeof this.G == "function" ? Wi.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
function zo(l, r, a) {
  return l ? r(l) : a?.(l);
}
function Ws(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var ye = { exports: {} };
var Us = ye.exports, To;
function Fs() {
  return To || (To = 1, (function(l, r) {
    (function(a, u) {
      u(r);
    })(Us, (function(a) {
      var u = "1.9.4";
      function c(t) {
        var e, i, n, o;
        for (i = 1, n = arguments.length; i < n; i++) {
          o = arguments[i];
          for (e in o)
            t[e] = o[e];
        }
        return t;
      }
      var _ = Object.create || /* @__PURE__ */ (function() {
        function t() {
        }
        return function(e) {
          return t.prototype = e, new t();
        };
      })();
      function p(t, e) {
        var i = Array.prototype.slice;
        if (t.bind)
          return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
          return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
        };
      }
      var M = 0;
      function g(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++M), t._leaflet_id;
      }
      function N(t, e, i) {
        var n, o, s, h;
        return h = function() {
          n = !1, o && (s.apply(i, o), o = !1);
        }, s = function() {
          n ? o = arguments : (t.apply(i, arguments), setTimeout(h, e), n = !0);
        }, s;
      }
      function D(t, e, i) {
        var n = e[1], o = e[0], s = n - o;
        return t === n && i ? t : ((t - o) % s + s) % s + o;
      }
      function w() {
        return !1;
      }
      function W(t, e) {
        if (e === !1)
          return t;
        var i = Math.pow(10, e === void 0 ? 6 : e);
        return Math.round(t * i) / i;
      }
      function tt(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function et(t) {
        return tt(t).split(/\s+/);
      }
      function Z(t, e) {
        Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? _(t.options) : {});
        for (var i in e)
          t.options[i] = e[i];
        return t.options;
      }
      function Ki(t, e, i) {
        var n = [];
        for (var o in t)
          n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
      }
      var Zo = /\{ *([\w_ -]+) *\}/g;
      function Ji(t, e) {
        return t.replace(Zo, function(i, n) {
          var o = e[n];
          if (o === void 0)
            throw new Error("No value provided for variable " + i);
          return typeof o == "function" && (o = o(e)), o;
        });
      }
      var st = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
      function oi(t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i] === e)
            return i;
        return -1;
      }
      var Ae = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function ri(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      var Qi = 0;
      function Xi(t) {
        var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - Qi));
        return Qi = e + i, window.setTimeout(t, i);
      }
      var si = window.requestAnimationFrame || ri("RequestAnimationFrame") || Xi, tn = window.cancelAnimationFrame || ri("CancelAnimationFrame") || ri("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t);
      };
      function Y(t, e, i) {
        if (i && si === Xi)
          t.call(e);
        else
          return si.call(window, p(t, e));
      }
      function it(t) {
        t && tn.call(window, t);
      }
      var Bo = {
        __proto__: null,
        extend: c,
        create: _,
        bind: p,
        get lastId() {
          return M;
        },
        stamp: g,
        throttle: N,
        wrapNum: D,
        falseFn: w,
        formatNum: W,
        trim: tt,
        splitWords: et,
        setOptions: Z,
        getParamString: Ki,
        template: Ji,
        isArray: st,
        indexOf: oi,
        emptyImageUrl: Ae,
        requestFn: si,
        cancelFn: tn,
        requestAnimFrame: Y,
        cancelAnimFrame: it
      };
      function _t() {
      }
      _t.extend = function(t) {
        var e = function() {
          Z(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, i = e.__super__ = this.prototype, n = _(i);
        n.constructor = e, e.prototype = n;
        for (var o in this)
          Object.prototype.hasOwnProperty.call(this, o) && o !== "prototype" && o !== "__super__" && (e[o] = this[o]);
        return t.statics && c(e, t.statics), t.includes && (Ro(t.includes), c.apply(null, [n].concat(t.includes))), c(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? _(i.options) : {}, c(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
          if (!this._initHooksCalled) {
            i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var s = 0, h = n._initHooks.length; s < h; s++)
              n._initHooks[s].call(this);
          }
        }, e;
      }, _t.include = function(t) {
        var e = this.prototype.options;
        return c(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
      }, _t.mergeOptions = function(t) {
        return c(this.prototype.options, t), this;
      }, _t.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
          this[t].apply(this, e);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
      };
      function Ro(t) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          t = st(t) ? t : [t];
          for (var e = 0; e < t.length; e++)
            t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var X = {
        /* @method on(type: String, fn: Function, context?: Object): this
         * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
         *
         * @alternative
         * @method on(eventMap: Object): this
         * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
         */
        on: function(t, e, i) {
          if (typeof t == "object")
            for (var n in t)
              this._on(n, t[n], e);
          else {
            t = et(t);
            for (var o = 0, s = t.length; o < s; o++)
              this._on(t[o], e, i);
          }
          return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
         * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
         *
         * @alternative
         * @method off(eventMap: Object): this
         * Removes a set of type/listener pairs.
         *
         * @alternative
         * @method off: this
         * Removes all listeners to all events on the object. This includes implicitly attached events.
         */
        off: function(t, e, i) {
          if (!arguments.length)
            delete this._events;
          else if (typeof t == "object")
            for (var n in t)
              this._off(n, t[n], e);
          else {
            t = et(t);
            for (var o = arguments.length === 1, s = 0, h = t.length; s < h; s++)
              o ? this._off(t[s]) : this._off(t[s], e, i);
          }
          return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(t, e, i, n) {
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          if (this._listens(t, e, i) === !1) {
            i === this && (i = void 0);
            var o = { fn: e, ctx: i };
            n && (o.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(o);
          }
        },
        _off: function(t, e, i) {
          var n, o, s;
          if (this._events && (n = this._events[t], !!n)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (o = 0, s = n.length; o < s; o++)
                  n[o].fn = w;
              delete this._events[t];
              return;
            }
            if (typeof e != "function") {
              console.warn("wrong listener type: " + typeof e);
              return;
            }
            var h = this._listens(t, e, i);
            if (h !== !1) {
              var d = n[h];
              this._firingCount && (d.fn = w, this._events[t] = n = n.slice()), n.splice(h, 1);
            }
          }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(t, e, i) {
          if (!this.listens(t, i))
            return this;
          var n = c({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });
          if (this._events) {
            var o = this._events[t];
            if (o) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var s = 0, h = o.length; s < h; s++) {
                var d = o[s], f = d.fn;
                d.once && this.off(t, f, d.ctx), f.call(d.ctx || this, n);
              }
              this._firingCount--;
            }
          }
          return i && this._propagateEvent(n), this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(t, e, i, n) {
          typeof t != "string" && console.warn('"string" type argument expected');
          var o = e;
          typeof e != "function" && (n = !!e, o = void 0, i = void 0);
          var s = this._events && this._events[t];
          if (s && s.length && this._listens(t, o, i) !== !1)
            return !0;
          if (n) {
            for (var h in this._eventParents)
              if (this._eventParents[h].listens(t, e, i, n))
                return !0;
          }
          return !1;
        },
        // returns the index (number) or false
        _listens: function(t, e, i) {
          if (!this._events)
            return !1;
          var n = this._events[t] || [];
          if (!e)
            return !!n.length;
          i === this && (i = void 0);
          for (var o = 0, s = n.length; o < s; o++)
            if (n[o].fn === e && n[o].ctx === i)
              return o;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(t, e, i) {
          if (typeof t == "object")
            for (var n in t)
              this._on(n, t[n], e, !0);
          else {
            t = et(t);
            for (var o = 0, s = t.length; o < s; o++)
              this._on(t[o], e, i, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(t) {
          return this._eventParents = this._eventParents || {}, this._eventParents[g(t)] = t, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(t) {
          return this._eventParents && delete this._eventParents[g(t)], this;
        },
        _propagateEvent: function(t) {
          for (var e in this._eventParents)
            this._eventParents[e].fire(t.type, c({
              layer: t.target,
              propagatedFrom: t.target
            }, t), !0);
        }
      };
      X.addEventListener = X.on, X.removeEventListener = X.clearAllEventListeners = X.off, X.addOneTimeEventListener = X.once, X.fireEvent = X.fire, X.hasEventListeners = X.listens;
      var ee = _t.extend(X);
      function P(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
      }
      var en = Math.trunc || function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
      P.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new P(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(t) {
          return this.clone()._add(x(t));
        },
        _add: function(t) {
          return this.x += t.x, this.y += t.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(t) {
          return this.clone()._subtract(x(t));
        },
        _subtract: function(t) {
          return this.x -= t.x, this.y -= t.y, this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(t) {
          return this.clone()._divideBy(t);
        },
        _divideBy: function(t) {
          return this.x /= t, this.y /= t, this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(t) {
          return this.clone()._multiplyBy(t);
        },
        _multiplyBy: function(t) {
          return this.x *= t, this.y *= t, this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(t) {
          return new P(this.x * t.x, this.y * t.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(t) {
          return new P(this.x / t.x, this.y / t.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
          return this.clone()._round();
        },
        _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
          return this.clone()._floor();
        },
        _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
          return this.clone()._ceil();
        },
        _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
          return this.clone()._trunc();
        },
        _trunc: function() {
          return this.x = en(this.x), this.y = en(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(t) {
          t = x(t);
          var e = t.x - this.x, i = t.y - this.y;
          return Math.sqrt(e * e + i * i);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(t) {
          return t = x(t), t.x === this.x && t.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(t) {
          return t = x(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + W(this.x) + ", " + W(this.y) + ")";
        }
      };
      function x(t, e, i) {
        return t instanceof P ? t : st(t) ? new P(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new P(t.x, t.y) : new P(t, e, i);
      }
      function B(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
            this.extend(i[n]);
      }
      B.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e, i;
          if (!t)
            return this;
          if (t instanceof P || typeof t[0] == "number" || "x" in t)
            e = i = x(t);
          else if (t = K(t), e = t.min, i = t.max, !e || !i)
            return this;
          return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(t) {
          return x(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            t
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return x(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return x(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
          return this.min;
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
          return this.max;
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
          return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(t) {
          var e, i;
          return typeof t[0] == "number" || t instanceof P ? t = x(t) : t = K(t), t instanceof B ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(t) {
          t = K(t);
          var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x >= e.x && n.x <= i.x, h = o.y >= e.y && n.y <= i.y;
          return s && h;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(t) {
          t = K(t);
          var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x > e.x && n.x < i.x, h = o.y > e.y && n.y < i.y;
          return s && h;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t, o = Math.abs(e.y - i.y) * t;
          return K(
            x(e.x - n, e.y - o),
            x(i.x + n, i.y + o)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(t) {
          return t ? (t = K(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
        }
      };
      function K(t, e) {
        return !t || t instanceof B ? t : new B(t, e);
      }
      function J(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
            this.extend(i[n]);
      }
      J.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e = this._southWest, i = this._northEast, n, o;
          if (t instanceof z)
            n = t, o = t;
          else if (t instanceof J) {
            if (n = t._southWest, o = t._northEast, !n || !o)
              return this;
          } else
            return t ? this.extend(S(t) || U(t)) : this;
          return !e && !i ? (this._southWest = new z(n.lat, n.lng), this._northEast = new z(o.lat, o.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(o.lat, i.lat), i.lng = Math.max(o.lng, i.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, o = Math.abs(e.lng - i.lng) * t;
          return new J(
            new z(e.lat - n, e.lng - o),
            new z(i.lat + n, i.lng + o)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new z(
            (this._southWest.lat + this._northEast.lat) / 2,
            (this._southWest.lng + this._northEast.lng) / 2
          );
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
          return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
          return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
          return new z(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new z(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
          return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
          return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
          return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
          return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(t) {
          typeof t[0] == "number" || t instanceof z || "lat" in t ? t = S(t) : t = U(t);
          var e = this._southWest, i = this._northEast, n, o;
          return t instanceof J ? (n = t.getSouthWest(), o = t.getNorthEast()) : n = o = t, n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(t) {
          t = U(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat >= e.lat && n.lat <= i.lat, h = o.lng >= e.lng && n.lng <= i.lng;
          return s && h;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(t) {
          t = U(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat > e.lat && n.lat < i.lat, h = o.lng > e.lng && n.lng < i.lng;
          return s && h;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, e) {
          return t ? (t = U(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function U(t, e) {
        return t instanceof J ? t : new J(t, e);
      }
      function z(t, e, i) {
        if (isNaN(t) || isNaN(e))
          throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
      }
      z.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, e) {
          if (!t)
            return !1;
          t = S(t);
          var i = Math.max(
            Math.abs(this.lat - t.lat),
            Math.abs(this.lng - t.lng)
          );
          return i <= (e === void 0 ? 1e-9 : e);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(t) {
          return "LatLng(" + W(this.lat, t) + ", " + W(this.lng, t) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(t) {
          return Pt.distance(this, S(t));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Pt.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(t) {
          var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
          return U(
            [this.lat - e, this.lng - i],
            [this.lat + e, this.lng + i]
          );
        },
        clone: function() {
          return new z(this.lat, this.lng, this.alt);
        }
      };
      function S(t, e, i) {
        return t instanceof z ? t : st(t) && typeof t[0] != "object" ? t.length === 3 ? new z(t[0], t[1], t[2]) : t.length === 2 ? new z(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new z(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new z(t, e, i);
      }
      var mt = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(t, e) {
          var i = this.projection.project(t), n = this.scale(e);
          return this.transformation._transform(i, n);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(t, e) {
          var i = this.scale(e), n = this.transformation.untransform(t, i);
          return this.projection.unproject(n);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(t) {
          return this.projection.project(t);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(t) {
          return this.projection.unproject(t);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(t) {
          return 256 * Math.pow(2, t);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(t) {
          return Math.log(t / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(t) {
          if (this.infinite)
            return null;
          var e = this.projection.bounds, i = this.scale(t), n = this.transformation.transform(e.min, i), o = this.transformation.transform(e.max, i);
          return new B(n, o);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: !1,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(t) {
          var e = this.wrapLng ? D(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? D(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
          return new z(i, e, n);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(t) {
          var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, o = e.lng - i.lng;
          if (n === 0 && o === 0)
            return t;
          var s = t.getSouthWest(), h = t.getNorthEast(), d = new z(s.lat - n, s.lng - o), f = new z(h.lat - n, h.lng - o);
          return new J(d, f);
        }
      }, Pt = c({}, mt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(t, e) {
          var i = Math.PI / 180, n = t.lat * i, o = e.lat * i, s = Math.sin((e.lat - t.lat) * i / 2), h = Math.sin((e.lng - t.lng) * i / 2), d = s * s + Math.cos(n) * Math.cos(o) * h * h, f = 2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d));
          return this.R * f;
        }
      }), nn = 6378137, ai = {
        R: nn,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
          var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), o = Math.sin(n * e);
          return new P(
            this.R * t.lng * e,
            this.R * Math.log((1 + o) / (1 - o)) / 2
          );
        },
        unproject: function(t) {
          var e = 180 / Math.PI;
          return new z(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
            t.x * e / this.R
          );
        },
        bounds: (function() {
          var t = nn * Math.PI;
          return new B([-t, -t], [t, t]);
        })()
      };
      function li(t, e, i, n) {
        if (st(t)) {
          this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
          return;
        }
        this._a = t, this._b = e, this._c = i, this._d = n;
      }
      li.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(t, e) {
          return this._transform(t.clone(), e);
        },
        // destructive transform (faster)
        _transform: function(t, e) {
          return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(t, e) {
          return e = e || 1, new P(
            (t.x / e - this._b) / this._a,
            (t.y / e - this._d) / this._c
          );
        }
      };
      function ie(t, e, i, n) {
        return new li(t, e, i, n);
      }
      var hi = c({}, Pt, {
        code: "EPSG:3857",
        projection: ai,
        transformation: (function() {
          var t = 0.5 / (Math.PI * ai.R);
          return ie(t, 0.5, -t, 0.5);
        })()
      }), Do = c({}, hi, {
        code: "EPSG:900913"
      });
      function on(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function rn(t, e) {
        var i = "", n, o, s, h, d, f;
        for (n = 0, s = t.length; n < s; n++) {
          for (d = t[n], o = 0, h = d.length; o < h; o++)
            f = d[o], i += (o ? "L" : "M") + f.x + " " + f.y;
          i += e ? y.svg ? "z" : "x" : "";
        }
        return i || "M0 0";
      }
      var ui = document.documentElement.style, Se = "ActiveXObject" in window, No = Se && !document.addEventListener, sn = "msLaunchUri" in navigator && !("documentMode" in document), ci = ut("webkit"), an = ut("android"), ln = ut("android 2") || ut("android 3"), Ho = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), $o = an && ut("Google") && Ho < 537 && !("AudioNode" in window), di = !!window.opera, hn = !sn && ut("chrome"), un = ut("gecko") && !ci && !di && !Se, Wo = !hn && ut("safari"), cn = ut("phantom"), dn = "OTransition" in ui, Uo = navigator.platform.indexOf("Win") === 0, fn = Se && "transition" in ui, fi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !ln, pn = "MozPerspective" in ui, Fo = !window.L_DISABLE_3D && (fn || fi || pn) && !dn && !cn, ne = typeof orientation < "u" || ut("mobile"), qo = ne && ci, Vo = ne && fi, _n = !window.PointerEvent && window.MSPointerEvent, mn = !!(window.PointerEvent || _n), gn = "ontouchstart" in window || !!window.TouchEvent, jo = !window.L_NO_TOUCH && (gn || mn), Go = ne && di, Yo = ne && un, Ko = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Jo = (function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", w, e), window.removeEventListener("testPassiveEventSupport", w, e);
        } catch {
        }
        return t;
      })(), Qo = (function() {
        return !!document.createElement("canvas").getContext;
      })(), pi = !!(document.createElementNS && on("svg").createSVGRect), Xo = !!pi && (function() {
        var t = document.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), tr = !pi && (function() {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
        } catch {
          return !1;
        }
      })(), er = navigator.platform.indexOf("Mac") === 0, ir = navigator.platform.indexOf("Linux") === 0;
      function ut(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }
      var y = {
        ie: Se,
        ielt9: No,
        edge: sn,
        webkit: ci,
        android: an,
        android23: ln,
        androidStock: $o,
        opera: di,
        chrome: hn,
        gecko: un,
        safari: Wo,
        phantom: cn,
        opera12: dn,
        win: Uo,
        ie3d: fn,
        webkit3d: fi,
        gecko3d: pn,
        any3d: Fo,
        mobile: ne,
        mobileWebkit: qo,
        mobileWebkit3d: Vo,
        msPointer: _n,
        pointer: mn,
        touch: jo,
        touchNative: gn,
        mobileOpera: Go,
        mobileGecko: Yo,
        retina: Ko,
        passiveEvents: Jo,
        canvas: Qo,
        svg: pi,
        vml: tr,
        inlineSvg: Xo,
        mac: er,
        linux: ir
      }, vn = y.msPointer ? "MSPointerDown" : "pointerdown", yn = y.msPointer ? "MSPointerMove" : "pointermove", bn = y.msPointer ? "MSPointerUp" : "pointerup", wn = y.msPointer ? "MSPointerCancel" : "pointercancel", _i = {
        touchstart: vn,
        touchmove: yn,
        touchend: bn,
        touchcancel: wn
      }, xn = {
        touchstart: lr,
        touchmove: Ee,
        touchend: Ee,
        touchcancel: Ee
      }, Nt = {}, Pn = !1;
      function nr(t, e, i) {
        return e === "touchstart" && ar(), xn[e] ? (i = xn[e].bind(this, i), t.addEventListener(_i[e], i, !1), i) : (console.warn("wrong event specified:", e), w);
      }
      function or(t, e, i) {
        if (!_i[e]) {
          console.warn("wrong event specified:", e);
          return;
        }
        t.removeEventListener(_i[e], i, !1);
      }
      function rr(t) {
        Nt[t.pointerId] = t;
      }
      function sr(t) {
        Nt[t.pointerId] && (Nt[t.pointerId] = t);
      }
      function Ln(t) {
        delete Nt[t.pointerId];
      }
      function ar() {
        Pn || (document.addEventListener(vn, rr, !0), document.addEventListener(yn, sr, !0), document.addEventListener(bn, Ln, !0), document.addEventListener(wn, Ln, !0), Pn = !0);
      }
      function Ee(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
          e.touches = [];
          for (var i in Nt)
            e.touches.push(Nt[i]);
          e.changedTouches = [e], t(e);
        }
      }
      function lr(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && j(e), Ee(t, e);
      }
      function hr(t) {
        var e = {}, i, n;
        for (n in t)
          i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
        return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
      }
      var ur = 200;
      function cr(t, e) {
        t.addEventListener("dblclick", e);
        var i = 0, n;
        function o(s) {
          if (s.detail !== 1) {
            n = s.detail;
            return;
          }
          if (!(s.pointerType === "mouse" || s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents)) {
            var h = En(s);
            if (!(h.some(function(f) {
              return f instanceof HTMLLabelElement && f.attributes.for;
            }) && !h.some(function(f) {
              return f instanceof HTMLInputElement || f instanceof HTMLSelectElement;
            }))) {
              var d = Date.now();
              d - i <= ur ? (n++, n === 2 && e(hr(s))) : n = 1, i = d;
            }
          }
        }
        return t.addEventListener("click", o), {
          dblclick: e,
          simDblclick: o
        };
      }
      function dr(t, e) {
        t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
      }
      var mi = ze(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), oe = ze(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), Tn = oe === "webkitTransition" || oe === "OTransition" ? oe + "End" : "transitionend";
      function Cn(t) {
        return typeof t == "string" ? document.getElementById(t) : t;
      }
      function re(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || i === "auto") && document.defaultView) {
          var n = document.defaultView.getComputedStyle(t, null);
          i = n ? n[e] : null;
        }
        return i === "auto" ? null : i;
      }
      function k(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n;
      }
      function R(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function Me(t) {
        for (; t.firstChild; )
          t.removeChild(t.firstChild);
      }
      function Ht(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }
      function $t(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }
      function gi(t, e) {
        if (t.classList !== void 0)
          return t.classList.contains(e);
        var i = ke(t);
        return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
      }
      function C(t, e) {
        if (t.classList !== void 0)
          for (var i = et(e), n = 0, o = i.length; n < o; n++)
            t.classList.add(i[n]);
        else if (!gi(t, e)) {
          var s = ke(t);
          vi(t, (s ? s + " " : "") + e);
        }
      }
      function H(t, e) {
        t.classList !== void 0 ? t.classList.remove(e) : vi(t, tt((" " + ke(t) + " ").replace(" " + e + " ", " ")));
      }
      function vi(t, e) {
        t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
      }
      function ke(t) {
        return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
      }
      function nt(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && fr(t, e);
      }
      function fr(t, e) {
        var i = !1, n = "DXImageTransform.Microsoft.Alpha";
        try {
          i = t.filters.item(n);
        } catch {
          if (e === 1)
            return;
        }
        e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
      }
      function ze(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
          if (t[i] in e)
            return t[i];
        return !1;
      }
      function St(t, e, i) {
        var n = e || new P(0, 0);
        t.style[mi] = (y.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
      }
      function F(t, e) {
        t._leaflet_pos = e, y.any3d ? St(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      }
      function Et(t) {
        return t._leaflet_pos || new P(0, 0);
      }
      var se, ae, yi;
      if ("onselectstart" in document)
        se = function() {
          T(window, "selectstart", j);
        }, ae = function() {
          O(window, "selectstart", j);
        };
      else {
        var le = ze(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        se = function() {
          if (le) {
            var t = document.documentElement.style;
            yi = t[le], t[le] = "none";
          }
        }, ae = function() {
          le && (document.documentElement.style[le] = yi, yi = void 0);
        };
      }
      function bi() {
        T(window, "dragstart", j);
      }
      function wi() {
        O(window, "dragstart", j);
      }
      var Oe, xi;
      function Pi(t) {
        for (; t.tabIndex === -1; )
          t = t.parentNode;
        t.style && (Ie(), Oe = t, xi = t.style.outlineStyle, t.style.outlineStyle = "none", T(window, "keydown", Ie));
      }
      function Ie() {
        Oe && (Oe.style.outlineStyle = xi, Oe = void 0, xi = void 0, O(window, "keydown", Ie));
      }
      function An(t) {
        do
          t = t.parentNode;
        while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
        return t;
      }
      function Li(t) {
        var e = t.getBoundingClientRect();
        return {
          x: e.width / t.offsetWidth || 1,
          y: e.height / t.offsetHeight || 1,
          boundingClientRect: e
        };
      }
      var pr = {
        __proto__: null,
        TRANSFORM: mi,
        TRANSITION: oe,
        TRANSITION_END: Tn,
        get: Cn,
        getStyle: re,
        create: k,
        remove: R,
        empty: Me,
        toFront: Ht,
        toBack: $t,
        hasClass: gi,
        addClass: C,
        removeClass: H,
        setClass: vi,
        getClass: ke,
        setOpacity: nt,
        testProp: ze,
        setTransform: St,
        setPosition: F,
        getPosition: Et,
        get disableTextSelection() {
          return se;
        },
        get enableTextSelection() {
          return ae;
        },
        disableImageDrag: bi,
        enableImageDrag: wi,
        preventOutline: Pi,
        restoreOutline: Ie,
        getSizedParentNode: An,
        getScale: Li
      };
      function T(t, e, i, n) {
        if (e && typeof e == "object")
          for (var o in e)
            Ci(t, o, e[o], i);
        else {
          e = et(e);
          for (var s = 0, h = e.length; s < h; s++)
            Ci(t, e[s], i, n);
        }
        return this;
      }
      var ct = "_leaflet_events";
      function O(t, e, i, n) {
        if (arguments.length === 1)
          Sn(t), delete t[ct];
        else if (e && typeof e == "object")
          for (var o in e)
            Ai(t, o, e[o], i);
        else if (e = et(e), arguments.length === 2)
          Sn(t, function(d) {
            return oi(e, d) !== -1;
          });
        else
          for (var s = 0, h = e.length; s < h; s++)
            Ai(t, e[s], i, n);
        return this;
      }
      function Sn(t, e) {
        for (var i in t[ct]) {
          var n = i.split(/\d/)[0];
          (!e || e(n)) && Ai(t, n, null, null, i);
        }
      }
      var Ti = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function Ci(t, e, i, n) {
        var o = e + g(i) + (n ? "_" + g(n) : "");
        if (t[ct] && t[ct][o])
          return this;
        var s = function(d) {
          return i.call(n || t, d || window.event);
        }, h = s;
        !y.touchNative && y.pointer && e.indexOf("touch") === 0 ? s = nr(t, e, s) : y.touch && e === "dblclick" ? s = cr(t, s) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(Ti[e] || e, s, y.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (s = function(d) {
          d = d || window.event, Ei(t, d) && h(d);
        }, t.addEventListener(Ti[e], s, !1)) : t.addEventListener(e, h, !1) : t.attachEvent("on" + e, s), t[ct] = t[ct] || {}, t[ct][o] = s;
      }
      function Ai(t, e, i, n, o) {
        o = o || e + g(i) + (n ? "_" + g(n) : "");
        var s = t[ct] && t[ct][o];
        if (!s)
          return this;
        !y.touchNative && y.pointer && e.indexOf("touch") === 0 ? or(t, e, s) : y.touch && e === "dblclick" ? dr(t, s) : "removeEventListener" in t ? t.removeEventListener(Ti[e] || e, s, !1) : t.detachEvent("on" + e, s), t[ct][o] = null;
      }
      function Mt(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
      }
      function Si(t) {
        return Ci(t, "wheel", Mt), this;
      }
      function he(t) {
        return T(t, "mousedown touchstart dblclick contextmenu", Mt), t._leaflet_disable_click = !0, this;
      }
      function j(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      }
      function kt(t) {
        return j(t), Mt(t), this;
      }
      function En(t) {
        if (t.composedPath)
          return t.composedPath();
        for (var e = [], i = t.target; i; )
          e.push(i), i = i.parentNode;
        return e;
      }
      function Mn(t, e) {
        if (!e)
          return new P(t.clientX, t.clientY);
        var i = Li(e), n = i.boundingClientRect;
        return new P(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (t.clientX - n.left) / i.x - e.clientLeft,
          (t.clientY - n.top) / i.y - e.clientTop
        );
      }
      var _r = y.linux && y.chrome ? window.devicePixelRatio : y.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function kn(t) {
        return y.edge ? t.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          t.deltaY && t.deltaMode === 0 ? -t.deltaY / _r : (
            // Pixels
            t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
              // Lines
              t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
                // Pages
                t.deltaX || t.deltaZ ? 0 : (
                  // Skip horizontal/depth wheel events
                  t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                    // Legacy IE pixels
                    t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                      // Legacy Moz lines
                      t.detail ? t.detail / -32765 * 60 : (
                        // Legacy Moz pages
                        0
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      function Ei(t, e) {
        var i = e.relatedTarget;
        if (!i)
          return !0;
        try {
          for (; i && i !== t; )
            i = i.parentNode;
        } catch {
          return !1;
        }
        return i !== t;
      }
      var mr = {
        __proto__: null,
        on: T,
        off: O,
        stopPropagation: Mt,
        disableScrollPropagation: Si,
        disableClickPropagation: he,
        preventDefault: j,
        stop: kt,
        getPropagationPath: En,
        getMousePosition: Mn,
        getWheelDelta: kn,
        isExternalTarget: Ei,
        addListener: T,
        removeListener: O
      }, zn = ee.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(t, e, i, n) {
          this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = Et(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = Y(this._animate, this), this._step();
        },
        _step: function(t) {
          var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
          e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(t, e) {
          var i = this._startPos.add(this._offset.multiplyBy(t));
          e && i._round(), F(this._el, i), this.fire("step");
        },
        _complete: function() {
          it(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        }
      }), E = ee.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: hi,
          // @option center: LatLng = undefined
          // Initial geographic center of the map
          center: void 0,
          // @option zoom: Number = undefined
          // Initial map zoom level
          zoom: void 0,
          // @option minZoom: Number = *
          // Minimum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the lowest of their `minZoom` options will be used instead.
          minZoom: void 0,
          // @option maxZoom: Number = *
          // Maximum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the highest of their `maxZoom` options will be used instead.
          maxZoom: void 0,
          // @option layers: Layer[] = []
          // Array of layers that will be added to the map initially
          layers: [],
          // @option maxBounds: LatLngBounds = null
          // When this option is set, the map restricts the view to the given
          // geographical bounds, bouncing the user back if the user tries to pan
          // outside the view. To set the restriction dynamically, use
          // [`setMaxBounds`](#map-setmaxbounds) method.
          maxBounds: void 0,
          // @option renderer: Renderer = *
          // The default method for drawing vector layers on the map. `L.SVG`
          // or `L.Canvas` by default depending on browser support.
          renderer: void 0,
          // @section Animation Options
          // @option zoomAnimation: Boolean = true
          // Whether the map zoom animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          zoomAnimation: !0,
          // @option zoomAnimationThreshold: Number = 4
          // Won't animate zoom if the zoom difference exceeds this value.
          zoomAnimationThreshold: 4,
          // @option fadeAnimation: Boolean = true
          // Whether the tile fade animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          fadeAnimation: !0,
          // @option markerZoomAnimation: Boolean = true
          // Whether markers animate their zoom with the zoom animation, if disabled
          // they will disappear for the length of the animation. By default it's
          // enabled in all browsers that support CSS3 Transitions except Android.
          markerZoomAnimation: !0,
          // @option transform3DLimit: Number = 2^23
          // Defines the maximum size of a CSS translation transform. The default
          // value should not be changed unless a web browser positions layers in
          // the wrong place after doing a large `panBy`.
          transform3DLimit: 8388608,
          // Precision limit of a 32-bit float
          // @section Interaction Options
          // @option zoomSnap: Number = 1
          // Forces the map's zoom level to always be a multiple of this, particularly
          // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
          // By default, the zoom level snaps to the nearest integer; lower values
          // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
          // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
          zoomSnap: 1,
          // @option zoomDelta: Number = 1
          // Controls how much the map's zoom level will change after a
          // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
          // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
          // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
          zoomDelta: 1,
          // @option trackResize: Boolean = true
          // Whether the map automatically handles browser window resize to update itself.
          trackResize: !0
        },
        initialize: function(t, e) {
          e = Z(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = p(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(S(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = oe && y.any3d && !y.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), T(this._proxy, Tn, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(t, e, i) {
          if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(S(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
            i.animate !== void 0 && (i.zoom = c({ animate: i.animate }, i.zoom), i.pan = c({ animate: i.animate, duration: i.duration }, i.pan));
            var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
            if (n)
              return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(t, e) {
          return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(t, e) {
          return t = t || (y.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(t, e) {
          return t = t || (y.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(t, e, i) {
          var n = this.getZoomScale(e), o = this.getSize().divideBy(2), s = t instanceof P ? t : this.latLngToContainerPoint(t), h = s.subtract(o).multiplyBy(1 - 1 / n), d = this.containerPointToLatLng(o.add(h));
          return this.setView(d, e, { zoom: i });
        },
        _getBoundsCenterZoom: function(t, e) {
          e = e || {}, t = t.getBounds ? t.getBounds() : U(t);
          var i = x(e.paddingTopLeft || e.padding || [0, 0]), n = x(e.paddingBottomRight || e.padding || [0, 0]), o = this.getBoundsZoom(t, !1, i.add(n));
          if (o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o, o === 1 / 0)
            return {
              center: t.getCenter(),
              zoom: o
            };
          var s = n.subtract(i).divideBy(2), h = this.project(t.getSouthWest(), o), d = this.project(t.getNorthEast(), o), f = this.unproject(h.add(d).divideBy(2).add(s), o);
          return {
            center: f,
            zoom: o
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(t, e) {
          if (t = U(t), !t.isValid())
            throw new Error("Bounds are not valid.");
          var i = this._getBoundsCenterZoom(t, e);
          return this.setView(i.center, i.zoom, e);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(t) {
          return this.fitBounds([[-90, -180], [90, 180]], t);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(t, e) {
          return this.setView(t, this._zoom, { pan: e });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(t, e) {
          if (t = x(t).round(), e = e || {}, !t.x && !t.y)
            return this.fire("moveend");
          if (e.animate !== !0 && !this.getSize().contains(t))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new zn(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
            C(this._mapPane, "leaflet-pan-anim");
            var i = this._getMapPanePos().subtract(t).round();
            this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
          } else
            this._rawPanBy(t), this.fire("move").fire("moveend");
          return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(t, e, i) {
          if (i = i || {}, i.animate === !1 || !y.any3d)
            return this.setView(t, e, i);
          this._stop();
          var n = this.project(this.getCenter()), o = this.project(t), s = this.getSize(), h = this._zoom;
          t = S(t), e = e === void 0 ? h : e;
          var d = Math.max(s.x, s.y), f = d * this.getZoomScale(h, e), m = o.distanceTo(n) || 1, v = 1.42, b = v * v;
          function A(q) {
            var Ve = q ? -1 : 1, os = q ? f : d, rs = f * f - d * d + Ve * b * b * m * m, ss = 2 * os * b * m, Hi = rs / ss, fo = Math.sqrt(Hi * Hi + 1) - Hi, as = fo < 1e-9 ? -18 : Math.log(fo);
            return as;
          }
          function G(q) {
            return (Math.exp(q) - Math.exp(-q)) / 2;
          }
          function V(q) {
            return (Math.exp(q) + Math.exp(-q)) / 2;
          }
          function rt(q) {
            return G(q) / V(q);
          }
          var Q = A(0);
          function jt(q) {
            return d * (V(Q) / V(Q + v * q));
          }
          function ts(q) {
            return d * (V(Q) * rt(Q + v * q) - G(Q)) / b;
          }
          function es(q) {
            return 1 - Math.pow(1 - q, 1.5);
          }
          var is = Date.now(), uo = (A(1) - Q) / v, ns = i.duration ? 1e3 * i.duration : 1e3 * uo * 0.8;
          function co() {
            var q = (Date.now() - is) / ns, Ve = es(q) * uo;
            q <= 1 ? (this._flyToFrame = Y(co, this), this._move(
              this.unproject(n.add(o.subtract(n).multiplyBy(ts(Ve) / m)), h),
              this.getScaleZoom(d / jt(Ve), h),
              { flyTo: !0 }
            )) : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, i.noMoveStart), co.call(this), this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(t, e) {
          var i = this._getBoundsCenterZoom(t, e);
          return this.flyTo(i.center, i.zoom, e);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(t) {
          return t = U(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(t) {
          var e = this.options.minZoom;
          return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(t) {
          var e = this.options.maxZoom;
          return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(t, e) {
          this._enforcingBounds = !0;
          var i = this.getCenter(), n = this._limitCenter(i, this._zoom, U(t));
          return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(t, e) {
          e = e || {};
          var i = x(e.paddingTopLeft || e.padding || [0, 0]), n = x(e.paddingBottomRight || e.padding || [0, 0]), o = this.project(this.getCenter()), s = this.project(t), h = this.getPixelBounds(), d = K([h.min.add(i), h.max.subtract(n)]), f = d.getSize();
          if (!d.contains(s)) {
            this._enforcingBounds = !0;
            var m = s.subtract(d.getCenter()), v = d.extend(s).getSize().subtract(f);
            o.x += m.x < 0 ? -v.x : v.x, o.y += m.y < 0 ? -v.y : v.y, this.panTo(this.unproject(o), e), this._enforcingBounds = !1;
          }
          return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(t) {
          if (!this._loaded)
            return this;
          t = c({
            animate: !1,
            pan: !0
          }, t === !0 ? { animate: !0 } : t);
          var e = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var i = this.getSize(), n = e.divideBy(2).round(), o = i.divideBy(2).round(), s = n.subtract(o);
          return !s.x && !s.y ? this : (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(p(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: e,
            newSize: i
          }));
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(t) {
          if (t = this._locateOptions = c({
            timeout: 1e4,
            watch: !1
            // setView: false
            // maxZoom: <Number>
            // maximumAge: 0
            // enableHighAccuracy: false
          }, t), !("geolocation" in navigator))
            return this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }), this;
          var e = p(this._handleGeolocationResponse, this), i = p(this._handleGeolocationError, this);
          return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        },
        _handleGeolocationError: function(t) {
          if (this._container._leaflet_id) {
            var e = t.code, i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: e,
              message: "Geolocation error: " + i + "."
            });
          }
        },
        _handleGeolocationResponse: function(t) {
          if (this._container._leaflet_id) {
            var e = t.coords.latitude, i = t.coords.longitude, n = new z(e, i), o = n.toBounds(t.coords.accuracy * 2), s = this._locateOptions;
            if (s.setView) {
              var h = this.getBoundsZoom(o);
              this.setView(n, s.maxZoom ? Math.min(h, s.maxZoom) : h);
            }
            var d = {
              latlng: n,
              bounds: o,
              timestamp: t.timestamp
            };
            for (var f in t.coords)
              typeof t.coords[f] == "number" && (d[f] = t.coords[f]);
            this.fire("locationfound", d);
          }
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(t, e) {
          if (!e)
            return this;
          var i = this[t] = new e(this);
          return this._handlers.push(i), this.options[t] && i.enable(), this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
          if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
            throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), R(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (it(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var t;
          for (t in this._layers)
            this._layers[t].remove();
          for (t in this._panes)
            R(this._panes[t]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(t, e) {
          var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = k("div", i, e || this._mapPane);
          return t && (this._panes[t] = n), n;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
          return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
          var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
          return new J(e, i);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
          return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(t, e, i) {
          t = U(t), i = x(i || [0, 0]);
          var n = this.getZoom() || 0, o = this.getMinZoom(), s = this.getMaxZoom(), h = t.getNorthWest(), d = t.getSouthEast(), f = this.getSize().subtract(i), m = K(this.project(d, n), this.project(h, n)).getSize(), v = y.any3d ? this.options.zoomSnap : 1, b = f.x / m.x, A = f.y / m.y, G = e ? Math.max(b, A) : Math.min(b, A);
          return n = this.getScaleZoom(G, n), v && (n = Math.round(n / (v / 100)) * (v / 100), n = e ? Math.ceil(n / v) * v : Math.floor(n / v) * v), Math.max(o, Math.min(s, n));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new P(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(t, e) {
          var i = this._getTopLeftPoint(t, e);
          return new B(i, i.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(t) {
          return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(t) {
          return typeof t == "string" ? this._panes[t] : t;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
          return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
          return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(t, e) {
          var i = this.options.crs;
          return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(t, e) {
          var i = this.options.crs;
          e = e === void 0 ? this._zoom : e;
          var n = i.zoom(t * i.scale(e));
          return isNaN(n) ? 1 / 0 : n;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(t, e) {
          return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(S(t), e);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(t, e) {
          return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(x(t), e);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(t) {
          var e = x(t).add(this.getPixelOrigin());
          return this.unproject(e);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(t) {
          var e = this.project(S(t))._round();
          return e._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(t) {
          return this.options.crs.wrapLatLng(S(t));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(t) {
          return this.options.crs.wrapLatLngBounds(U(t));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(t, e) {
          return this.options.crs.distance(S(t), S(e));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(t) {
          return x(t).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(t) {
          return x(t).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(t) {
          var e = this.containerPointToLayerPoint(x(t));
          return this.layerPointToLatLng(e);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(S(t)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(t) {
          return Mn(t, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(t) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        // map initialization methods
        _initContainer: function(t) {
          var e = this._container = Cn(t);
          if (e) {
            if (e._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          T(e, "scroll", this._onScroll, this), this._containerId = g(e);
        },
        _initLayout: function() {
          var t = this._container;
          this._fadeAnimated = this.options.fadeAnimation && y.any3d, C(t, "leaflet-container" + (y.touch ? " leaflet-touch" : "") + (y.retina ? " leaflet-retina" : "") + (y.ielt9 ? " leaflet-oldie" : "") + (y.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var e = re(t, "position");
          e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var t = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), F(this._mapPane, new P(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (C(t.markerPane, "leaflet-zoom-hide"), C(t.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(t, e, i) {
          F(this._mapPane, new P(0, 0));
          var n = !this._loaded;
          this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
          var o = this._zoom !== e;
          this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
        },
        _moveStart: function(t, e) {
          return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
        },
        _move: function(t, e, i, n) {
          e === void 0 && (e = this._zoom);
          var o = this._zoom !== e;
          return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
        },
        _moveEnd: function(t) {
          return t && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return it(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(t) {
          F(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
          if (!this._loaded)
            throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(t) {
          this._targets = {}, this._targets[g(this._container)] = this;
          var e = t ? O : T;
          e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), y.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          it(this._resizeRequest), this._resizeRequest = Y(
            function() {
              this.invalidateSize({ debounceMoveend: !0 });
            },
            this
          );
        },
        _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
          var t = this._getMapPanePos();
          Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(t, e) {
          for (var i = [], n, o = e === "mouseout" || e === "mouseover", s = t.target || t.srcElement, h = !1; s; ) {
            if (n = this._targets[g(s)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
              h = !0;
              break;
            }
            if (n && n.listens(e, !0) && (o && !Ei(s, t) || (i.push(n), o)) || s === this._container)
              break;
            s = s.parentNode;
          }
          return !i.length && !h && !o && this.listens(e, !0) && (i = [this]), i;
        },
        _isClickDisabled: function(t) {
          for (; t && t !== this._container; ) {
            if (t._leaflet_disable_click)
              return !0;
            t = t.parentNode;
          }
        },
        _handleDOMEvent: function(t) {
          var e = t.target || t.srcElement;
          if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
            var i = t.type;
            i === "mousedown" && Pi(e), this._fireDOMEvent(t, i);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
          if (t.type === "click") {
            var n = c({}, t);
            n.type = "preclick", this._fireDOMEvent(n, n.type, i);
          }
          var o = this._findEventTargets(t, e);
          if (i) {
            for (var s = [], h = 0; h < i.length; h++)
              i[h].listens(e, !0) && s.push(i[h]);
            o = s.concat(o);
          }
          if (o.length) {
            e === "contextmenu" && j(t);
            var d = o[0], f = {
              originalEvent: t
            };
            if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
              var m = d.getLatLng && (!d._radius || d._radius <= 10);
              f.containerPoint = m ? this.latLngToContainerPoint(d.getLatLng()) : this.mouseEventToContainerPoint(t), f.layerPoint = this.containerPointToLayerPoint(f.containerPoint), f.latlng = m ? d.getLatLng() : this.layerPointToLatLng(f.layerPoint);
            }
            for (h = 0; h < o.length; h++)
              if (o[h].fire(e, f, !0), f.originalEvent._stopped || o[h].options.bubblingMouseEvents === !1 && oi(this._mouseEvents, e) !== -1)
                return;
          }
        },
        _draggableMoved: function(t) {
          return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
          for (var t = 0, e = this._handlers.length; t < e; t++)
            this._handlers[t].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(t, e) {
          return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
          return Et(this._mapPane) || new P(0, 0);
        },
        _moved: function() {
          var t = this._getMapPanePos();
          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function(t, e) {
          var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
          return i.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(t, e) {
          var i = this.getSize()._divideBy(2);
          return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return this.project(t, e)._subtract(n);
        },
        _latLngBoundsToNewLayerBounds: function(t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return K([
            this.project(t.getSouthWest(), e)._subtract(n),
            this.project(t.getNorthWest(), e)._subtract(n),
            this.project(t.getSouthEast(), e)._subtract(n),
            this.project(t.getNorthEast(), e)._subtract(n)
          ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(t) {
          return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(t, e, i) {
          if (!i)
            return t;
          var n = this.project(t, e), o = this.getSize().divideBy(2), s = new B(n.subtract(o), n.add(o)), h = this._getBoundsOffset(s, i, e);
          return Math.abs(h.x) <= 1 && Math.abs(h.y) <= 1 ? t : this.unproject(n.add(h), e);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(t, e) {
          if (!e)
            return t;
          var i = this.getPixelBounds(), n = new B(i.min.add(t), i.max.add(t));
          return t.add(this._getBoundsOffset(n, e));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(t, e, i) {
          var n = K(
            this.project(e.getNorthEast(), i),
            this.project(e.getSouthWest(), i)
          ), o = n.min.subtract(t.min), s = n.max.subtract(t.max), h = this._rebound(o.x, -s.x), d = this._rebound(o.y, -s.y);
          return new P(h, d);
        },
        _rebound: function(t, e) {
          return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function(t) {
          var e = this.getMinZoom(), i = this.getMaxZoom(), n = y.any3d ? this.options.zoomSnap : 1;
          return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          H(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(t, e) {
          var i = this._getCenterOffset(t)._trunc();
          return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
        },
        _createAnimProxy: function() {
          var t = this._proxy = k("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
            var i = mi, n = this._proxy.style[i];
            St(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          R(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var t = this.getCenter(), e = this.getZoom();
          St(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
        },
        _catchTransitionEnd: function(t) {
          this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(t, e, i) {
          if (this._animatingZoom)
            return !0;
          if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
            return !1;
          var n = this.getZoomScale(e), o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          return i.animate !== !0 && !this.getSize().contains(o) ? !1 : (Y(function() {
            this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
          }, this), !0);
        },
        _animateZoom: function(t, e, i, n) {
          this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, C(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: t,
            zoom: e,
            noUpdate: n
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(p(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && H(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function gr(t, e) {
        return new E(t, e);
      }
      var at = _t.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(t) {
          Z(this, t);
        },
        /* @section
         * Classes extending L.Control will inherit the following methods:
         *
         * @method getPosition: string
         * Returns the position of the control.
         */
        getPosition: function() {
          return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(t) {
          var e = this._map;
          return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
          return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(t) {
          this.remove(), this._map = t;
          var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
          return C(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (R(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(t) {
          this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        }
      }), ue = function(t) {
        return new at(t);
      };
      E.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(t) {
          return t.addTo(this), this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(t) {
          return t.remove(), this;
        },
        _initControlPos: function() {
          var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = k("div", e + "control-container", this._container);
          function n(o, s) {
            var h = e + o + " " + e + s;
            t[o + s] = k("div", h, i);
          }
          n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
        },
        _clearControlPos: function() {
          for (var t in this._controlCorners)
            R(this._controlCorners[t]);
          R(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var On = at.extend({
        // @section
        // @aka Control.Layers options
        options: {
          // @option collapsed: Boolean = true
          // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
          collapsed: !0,
          position: "topright",
          // @option autoZIndex: Boolean = true
          // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
          autoZIndex: !0,
          // @option hideSingleBase: Boolean = false
          // If `true`, the base layers in the control will be hidden when there is only one.
          hideSingleBase: !1,
          // @option sortLayers: Boolean = false
          // Whether to sort the layers. When `false`, layers will keep the order
          // in which they were added to the control.
          sortLayers: !1,
          // @option sortFunction: Function = *
          // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
          // that will be used for sorting the layers, when `sortLayers` is `true`.
          // The function receives both the `L.Layer` instances and their names, as in
          // `sortFunction(layerA, layerB, nameA, nameB)`.
          // By default, it sorts layers alphabetically by their name.
          sortFunction: function(t, e, i, n) {
            return i < n ? -1 : n < i ? 1 : 0;
          }
        },
        initialize: function(t, e, i) {
          Z(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
          for (var n in t)
            this._addLayer(t[n], n);
          for (n in e)
            this._addLayer(e[n], n, !0);
        },
        onAdd: function(t) {
          this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
          for (var e = 0; e < this._layers.length; e++)
            this._layers[e].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function(t) {
          return at.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var t = 0; t < this._layers.length; t++)
            this._layers[t].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(t, e) {
          return this._addLayer(t, e), this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(t, e) {
          return this._addLayer(t, e, !0), this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(t) {
          t.off("add remove", this._onLayerChange, this);
          var e = this._getLayer(g(t));
          return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          C(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return t < this._section.clientHeight ? (C(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : H(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return H(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var t = "leaflet-control-layers", e = this._container = k("div", t), i = this.options.collapsed;
          e.setAttribute("aria-haspopup", !0), he(e), Si(e);
          var n = this._section = k("section", t + "-list");
          i && (this._map.on("click", this.collapse, this), T(e, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var o = this._layersLink = k("a", t + "-toggle", e);
          o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), T(o, {
            keydown: function(s) {
              s.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(s) {
              j(s), this._expandSafely();
            }
          }, this), i || this.expand(), this._baseLayersList = k("div", t + "-base", n), this._separator = k("div", t + "-separator", n), this._overlaysList = k("div", t + "-overlays", n), e.appendChild(n);
        },
        _getLayer: function(t) {
          for (var e = 0; e < this._layers.length; e++)
            if (this._layers[e] && g(this._layers[e].layer) === t)
              return this._layers[e];
        },
        _addLayer: function(t, e, i) {
          this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: t,
            name: e,
            overlay: i
          }), this.options.sortLayers && this._layers.sort(p(function(n, o) {
            return this.options.sortFunction(n.layer, o.layer, n.name, o.name);
          }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          Me(this._baseLayersList), Me(this._overlaysList), this._layerControlInputs = [];
          var t, e, i, n, o = 0;
          for (i = 0; i < this._layers.length; i++)
            n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
          return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
        },
        _onLayerChange: function(t) {
          this._handlingClick || this._update();
          var e = this._getLayer(g(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
          i && this._map.fire(i, e);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(t, e) {
          var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
          return n.innerHTML = i, n.firstChild;
        },
        _addItem: function(t) {
          var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
          t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + g(this), i), this._layerControlInputs.push(n), n.layerId = g(t.layer), T(n, "click", this._onInputClick, this);
          var o = document.createElement("span");
          o.innerHTML = " " + t.name;
          var s = document.createElement("span");
          e.appendChild(s), s.appendChild(n), s.appendChild(o);
          var h = t.overlay ? this._overlaysList : this._baseLayersList;
          return h.appendChild(e), this._checkDisabledLayers(), e;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var t = this._layerControlInputs, e, i, n = [], o = [];
            this._handlingClick = !0;
            for (var s = t.length - 1; s >= 0; s--)
              e = t[s], i = this._getLayer(e.layerId).layer, e.checked ? n.push(i) : e.checked || o.push(i);
            for (s = 0; s < o.length; s++)
              this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
            for (s = 0; s < n.length; s++)
              this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var t = this._layerControlInputs, e, i, n = this._map.getZoom(), o = t.length - 1; o >= 0; o--)
            e = t[o], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && n < i.options.minZoom || i.options.maxZoom !== void 0 && n > i.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var t = this._section;
          this._preventClick = !0, T(t, "click", j), this.expand();
          var e = this;
          setTimeout(function() {
            O(t, "click", j), e._preventClick = !1;
          });
        }
      }), vr = function(t, e, i) {
        return new On(t, e, i);
      }, Mi = at.extend({
        // @section
        // @aka Control.Zoom options
        options: {
          position: "topleft",
          // @option zoomInText: String = '<span aria-hidden="true">+</span>'
          // The text set on the 'zoom in' button.
          zoomInText: '<span aria-hidden="true">+</span>',
          // @option zoomInTitle: String = 'Zoom in'
          // The title set on the 'zoom in' button.
          zoomInTitle: "Zoom in",
          // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
          // The text set on the 'zoom out' button.
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          // @option zoomOutTitle: String = 'Zoom out'
          // The title set on the 'zoom out' button.
          zoomOutTitle: "Zoom out"
        },
        onAdd: function(t) {
          var e = "leaflet-control-zoom", i = k("div", e + " leaflet-bar"), n = this.options;
          return this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            e + "-in",
            i,
            this._zoomIn
          ), this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            e + "-out",
            i,
            this._zoomOut
          ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
        },
        onRemove: function(t) {
          t.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
          return this._disabled = !0, this._updateDisabled(), this;
        },
        enable: function() {
          return this._disabled = !1, this._updateDisabled(), this;
        },
        _zoomIn: function(t) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _zoomOut: function(t) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _createButton: function(t, e, i, n, o) {
          var s = k("a", i, n);
          return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), he(s), T(s, "click", kt), T(s, "click", o, this), T(s, "click", this._refocusOnMap, this), s;
        },
        _updateDisabled: function() {
          var t = this._map, e = "leaflet-disabled";
          H(this._zoomInButton, e), H(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (C(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (C(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      E.mergeOptions({
        zoomControl: !0
      }), E.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new Mi(), this.addControl(this.zoomControl));
      });
      var yr = function(t) {
        return new Mi(t);
      }, In = at.extend({
        // @section
        // @aka Control.Scale options
        options: {
          position: "bottomleft",
          // @option maxWidth: Number = 100
          // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
          maxWidth: 100,
          // @option metric: Boolean = True
          // Whether to show the metric scale line (m/km).
          metric: !0,
          // @option imperial: Boolean = True
          // Whether to show the imperial scale line (mi/ft).
          imperial: !0
          // @option updateWhenIdle: Boolean = false
          // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
        },
        onAdd: function(t) {
          var e = "leaflet-control-scale", i = k("div", e), n = this.options;
          return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
        },
        onRemove: function(t) {
          t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(t, e, i) {
          t.metric && (this._mScale = k("div", e, i)), t.imperial && (this._iScale = k("div", e, i));
        },
        _update: function() {
          var t = this._map, e = t.getSize().y / 2, i = t.distance(
            t.containerPointToLatLng([0, e]),
            t.containerPointToLatLng([this.options.maxWidth, e])
          );
          this._updateScales(i);
        },
        _updateScales: function(t) {
          this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function(t) {
          var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
          this._updateScale(this._mScale, i, e / t);
        },
        _updateImperial: function(t) {
          var e = t * 3.2808399, i, n, o;
          e > 5280 ? (i = e / 5280, n = this._getRoundNum(i), this._updateScale(this._iScale, n + " mi", n / i)) : (o = this._getRoundNum(e), this._updateScale(this._iScale, o + " ft", o / e));
        },
        _updateScale: function(t, e, i) {
          t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
        },
        _getRoundNum: function(t) {
          var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
          return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
        }
      }), br = function(t) {
        return new In(t);
      }, wr = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', ki = at.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (y.inlineSvg ? wr + " " : "") + "Leaflet</a>"
        },
        initialize: function(t) {
          Z(this, t), this._attributions = {};
        },
        onAdd: function(t) {
          t.attributionControl = this, this._container = k("div", "leaflet-control-attribution"), he(this._container);
          for (var e in t._layers)
            t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
          return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
        },
        onRemove: function(t) {
          t.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(t) {
          t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
            this.removeAttribution(t.layer.getAttribution());
          }, this));
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(t) {
          return this.options.prefix = t, this._update(), this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(t) {
          return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(t) {
          return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
        },
        _update: function() {
          if (this._map) {
            var t = [];
            for (var e in this._attributions)
              this._attributions[e] && t.push(e);
            var i = [];
            this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
          }
        }
      });
      E.mergeOptions({
        attributionControl: !0
      }), E.addInitHook(function() {
        this.options.attributionControl && new ki().addTo(this);
      });
      var xr = function(t) {
        return new ki(t);
      };
      at.Layers = On, at.Zoom = Mi, at.Scale = In, at.Attribution = ki, ue.layers = vr, ue.zoom = yr, ue.scale = br, ue.attribution = xr;
      var dt = _t.extend({
        initialize: function(t) {
          this._map = t;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
          return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
          return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
          return !!this._enabled;
        }
        // @section Extension methods
        // Classes inheriting from `Handler` must implement the two following methods:
        // @method addHooks()
        // Called when the handler is enabled, should add event hooks.
        // @method removeHooks()
        // Called when the handler is disabled, should remove the event hooks added previously.
      });
      dt.addTo = function(t, e) {
        return t.addHandler(e, this), this;
      };
      var Pr = { Events: X }, Zn = y.touch ? "touchstart mousedown" : "mousedown", Lt = ee.extend({
        options: {
          // @section
          // @aka Draggable options
          // @option clickTolerance: Number = 3
          // The max number of pixels a user can shift the mouse pointer during a click
          // for it to be considered a valid click (as opposed to a mouse drag).
          clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(t, e, i, n) {
          Z(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (T(this._dragStartTarget, Zn, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (Lt._dragging === this && this.finishDrag(!0), O(this._dragStartTarget, Zn, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(t) {
          if (this._enabled && (this._moved = !1, !gi(this._element, "leaflet-zoom-anim"))) {
            if (t.touches && t.touches.length !== 1) {
              Lt._dragging === this && this.finishDrag();
              return;
            }
            if (!(Lt._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (Lt._dragging = this, this._preventOutline && Pi(this._element), bi(), se(), !this._moving)) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t, i = An(this._element);
              this._startPoint = new P(e.clientX, e.clientY), this._startPos = Et(this._element), this._parentScale = Li(i);
              var n = t.type === "mousedown";
              T(document, n ? "mousemove" : "touchmove", this._onMove, this), T(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(t) {
          if (this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new P(e.clientX, e.clientY)._subtract(this._startPoint);
            !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, j(t), this._moved || (this.fire("dragstart"), this._moved = !0, C(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), C(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var t = { originalEvent: this._lastEvent };
          this.fire("predrag", t), F(this._element, this._newPos), this.fire("drag", t);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(t) {
          H(document.body, "leaflet-dragging"), this._lastTarget && (H(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), O(document, "mousemove touchmove", this._onMove, this), O(document, "mouseup touchend touchcancel", this._onUp, this), wi(), ae();
          var e = this._moved && this._moving;
          this._moving = !1, Lt._dragging = !1, e && this.fire("dragend", {
            noInertia: t,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function Bn(t, e, i) {
        var n, o = [1, 4, 2, 8], s, h, d, f, m, v, b, A;
        for (s = 0, v = t.length; s < v; s++)
          t[s]._code = zt(t[s], e);
        for (d = 0; d < 4; d++) {
          for (b = o[d], n = [], s = 0, v = t.length, h = v - 1; s < v; h = s++)
            f = t[s], m = t[h], f._code & b ? m._code & b || (A = Ze(m, f, b, e, i), A._code = zt(A, e), n.push(A)) : (m._code & b && (A = Ze(m, f, b, e, i), A._code = zt(A, e), n.push(A)), n.push(f));
          t = n;
        }
        return t;
      }
      function Rn(t, e) {
        var i, n, o, s, h, d, f, m, v;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ot(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var b = S([0, 0]), A = U(t), G = A.getNorthWest().distanceTo(A.getSouthWest()) * A.getNorthEast().distanceTo(A.getNorthWest());
        G < 1700 && (b = zi(t));
        var V = t.length, rt = [];
        for (i = 0; i < V; i++) {
          var Q = S(t[i]);
          rt.push(e.project(S([Q.lat - b.lat, Q.lng - b.lng])));
        }
        for (d = f = m = 0, i = 0, n = V - 1; i < V; n = i++)
          o = rt[i], s = rt[n], h = o.y * s.x - s.y * o.x, f += (o.x + s.x) * h, m += (o.y + s.y) * h, d += h * 3;
        d === 0 ? v = rt[0] : v = [f / d, m / d];
        var jt = e.unproject(x(v));
        return S([jt.lat + b.lat, jt.lng + b.lng]);
      }
      function zi(t) {
        for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
          var s = S(t[o]);
          e += s.lat, i += s.lng, n++;
        }
        return S([e / n, i / n]);
      }
      var Lr = {
        __proto__: null,
        clipPolygon: Bn,
        polygonCenter: Rn,
        centroid: zi
      };
      function Dn(t, e) {
        if (!e || !t.length)
          return t.slice();
        var i = e * e;
        return t = Ar(t, i), t = Cr(t, i), t;
      }
      function Nn(t, e, i) {
        return Math.sqrt(ce(t, e, i, !0));
      }
      function Tr(t, e, i) {
        return ce(t, e, i);
      }
      function Cr(t, e) {
        var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, o = new n(i);
        o[0] = o[i - 1] = 1, Oi(t, o, e, 0, i - 1);
        var s, h = [];
        for (s = 0; s < i; s++)
          o[s] && h.push(t[s]);
        return h;
      }
      function Oi(t, e, i, n, o) {
        var s = 0, h, d, f;
        for (d = n + 1; d <= o - 1; d++)
          f = ce(t[d], t[n], t[o], !0), f > s && (h = d, s = f);
        s > i && (e[h] = 1, Oi(t, e, i, n, h), Oi(t, e, i, h, o));
      }
      function Ar(t, e) {
        for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
          Sr(t[n], t[o]) > e && (i.push(t[n]), o = n);
        return o < s - 1 && i.push(t[s - 1]), i;
      }
      var Hn;
      function $n(t, e, i, n, o) {
        var s = n ? Hn : zt(t, i), h = zt(e, i), d, f, m;
        for (Hn = h; ; ) {
          if (!(s | h))
            return [t, e];
          if (s & h)
            return !1;
          d = s || h, f = Ze(t, e, d, i, o), m = zt(f, i), d === s ? (t = f, s = m) : (e = f, h = m);
        }
      }
      function Ze(t, e, i, n, o) {
        var s = e.x - t.x, h = e.y - t.y, d = n.min, f = n.max, m, v;
        return i & 8 ? (m = t.x + s * (f.y - t.y) / h, v = f.y) : i & 4 ? (m = t.x + s * (d.y - t.y) / h, v = d.y) : i & 2 ? (m = f.x, v = t.y + h * (f.x - t.x) / s) : i & 1 && (m = d.x, v = t.y + h * (d.x - t.x) / s), new P(m, v, o);
      }
      function zt(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
      }
      function Sr(t, e) {
        var i = e.x - t.x, n = e.y - t.y;
        return i * i + n * n;
      }
      function ce(t, e, i, n) {
        var o = e.x, s = e.y, h = i.x - o, d = i.y - s, f = h * h + d * d, m;
        return f > 0 && (m = ((t.x - o) * h + (t.y - s) * d) / f, m > 1 ? (o = i.x, s = i.y) : m > 0 && (o += h * m, s += d * m)), h = t.x - o, d = t.y - s, n ? h * h + d * d : new P(o, s);
      }
      function ot(t) {
        return !st(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
      }
      function Wn(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ot(t);
      }
      function Un(t, e) {
        var i, n, o, s, h, d, f, m;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ot(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var v = S([0, 0]), b = U(t), A = b.getNorthWest().distanceTo(b.getSouthWest()) * b.getNorthEast().distanceTo(b.getNorthWest());
        A < 1700 && (v = zi(t));
        var G = t.length, V = [];
        for (i = 0; i < G; i++) {
          var rt = S(t[i]);
          V.push(e.project(S([rt.lat - v.lat, rt.lng - v.lng])));
        }
        for (i = 0, n = 0; i < G - 1; i++)
          n += V[i].distanceTo(V[i + 1]) / 2;
        if (n === 0)
          m = V[0];
        else
          for (i = 0, s = 0; i < G - 1; i++)
            if (h = V[i], d = V[i + 1], o = h.distanceTo(d), s += o, s > n) {
              f = (s - n) / o, m = [
                d.x - f * (d.x - h.x),
                d.y - f * (d.y - h.y)
              ];
              break;
            }
        var Q = e.unproject(x(m));
        return S([Q.lat + v.lat, Q.lng + v.lng]);
      }
      var Er = {
        __proto__: null,
        simplify: Dn,
        pointToSegmentDistance: Nn,
        closestPointOnSegment: Tr,
        clipSegment: $n,
        _getEdgeIntersection: Ze,
        _getBitCode: zt,
        _sqClosestPointOnSegment: ce,
        isFlat: ot,
        _flat: Wn,
        polylineCenter: Un
      }, Ii = {
        project: function(t) {
          return new P(t.lng, t.lat);
        },
        unproject: function(t) {
          return new z(t.y, t.x);
        },
        bounds: new B([-180, -90], [180, 90])
      }, Zi = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new B([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(t) {
          var e = Math.PI / 180, i = this.R, n = t.lat * e, o = this.R_MINOR / i, s = Math.sqrt(1 - o * o), h = s * Math.sin(n), d = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - h) / (1 + h), s / 2);
          return n = -i * Math.log(Math.max(d, 1e-10)), new P(t.lng * e * i, n);
        },
        unproject: function(t) {
          for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, o = Math.sqrt(1 - n * n), s = Math.exp(-t.y / i), h = Math.PI / 2 - 2 * Math.atan(s), d = 0, f = 0.1, m; d < 15 && Math.abs(f) > 1e-7; d++)
            m = o * Math.sin(h), m = Math.pow((1 - m) / (1 + m), o / 2), f = Math.PI / 2 - 2 * Math.atan(s * m) - h, h += f;
          return new z(h * e, t.x * e / i);
        }
      }, Mr = {
        __proto__: null,
        LonLat: Ii,
        Mercator: Zi,
        SphericalMercator: ai
      }, kr = c({}, Pt, {
        code: "EPSG:3395",
        projection: Zi,
        transformation: (function() {
          var t = 0.5 / (Math.PI * Zi.R);
          return ie(t, 0.5, -t, 0.5);
        })()
      }), Fn = c({}, Pt, {
        code: "EPSG:4326",
        projection: Ii,
        transformation: ie(1 / 180, 1, -1 / 180, 0.5)
      }), zr = c({}, mt, {
        projection: Ii,
        transformation: ie(1, 0, -1, 0),
        scale: function(t) {
          return Math.pow(2, t);
        },
        zoom: function(t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function(t, e) {
          var i = e.lng - t.lng, n = e.lat - t.lat;
          return Math.sqrt(i * i + n * n);
        },
        infinite: !0
      });
      mt.Earth = Pt, mt.EPSG3395 = kr, mt.EPSG3857 = hi, mt.EPSG900913 = Do, mt.EPSG4326 = Fn, mt.Simple = zr;
      var lt = ee.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
          // @option pane: String = 'overlayPane'
          // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
          pane: "overlayPane",
          // @option attribution: String = null
          // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
          attribution: null,
          bubblingMouseEvents: !0
        },
        /* @section
         * Classes extending `L.Layer` will inherit the following methods:
         *
         * @method addTo(map: Map|LayerGroup): this
         * Adds the layer to the given map or layer group.
         */
        addTo: function(t) {
          return t.addLayer(this), this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(t) {
          return t && t.removeLayer(this), this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(t) {
          return this._map.getPane(t ? this.options[t] || t : this.options.pane);
        },
        addInteractiveTarget: function(t) {
          return this._map._targets[g(t)] = this, this;
        },
        removeInteractiveTarget: function(t) {
          return delete this._map._targets[g(t)], this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(t) {
          var e = t.target;
          if (e.hasLayer(this)) {
            if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
              var i = this.getEvents();
              e.on(i, this), this.once("remove", function() {
                e.off(i, this);
              }, this);
            }
            this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
          }
        }
      });
      E.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(t) {
          if (!t._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var e = g(t);
          return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(t) {
          var e = g(t);
          return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(t) {
          return g(t) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
         * Iterates over the layers of the map, optionally specifying context of the iterator function.
         * ```
         * map.eachLayer(function(layer){
         *     layer.bindPopup('Hello');
         * });
         * ```
         */
        eachLayer: function(t, e) {
          for (var i in this._layers)
            t.call(e, this._layers[i]);
          return this;
        },
        _addLayers: function(t) {
          t = t ? st(t) ? t : [t] : [];
          for (var e = 0, i = t.length; e < i; e++)
            this.addLayer(t[e]);
        },
        _addZoomLimit: function(t) {
          (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[g(t)] = t, this._updateZoomLevels());
        },
        _removeZoomLimit: function(t) {
          var e = g(t);
          this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
          for (var n in this._zoomBoundLayers) {
            var o = this._zoomBoundLayers[n].options;
            t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom), e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom);
          }
          this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Wt = lt.extend({
        initialize: function(t, e) {
          Z(this, e), this._layers = {};
          var i, n;
          if (t)
            for (i = 0, n = t.length; i < n; i++)
              this.addLayer(t[i]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(t) {
          var e = this.getLayerId(t);
          return this._layers[e] = t, this._map && this._map.addLayer(t), this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(t) {
          var e = t in this._layers ? t : this.getLayerId(t);
          return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(t) {
          var e = typeof t == "number" ? t : this.getLayerId(t);
          return e in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(t) {
          var e = Array.prototype.slice.call(arguments, 1), i, n;
          for (i in this._layers)
            n = this._layers[i], n[t] && n[t].apply(n, e);
          return this;
        },
        onAdd: function(t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function(t) {
          this.eachLayer(t.removeLayer, t);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(t, e) {
          for (var i in this._layers)
            t.call(e, this._layers[i]);
          return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(t) {
          return this._layers[t];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(t) {
          return this.invoke("setZIndex", t);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(t) {
          return g(t);
        }
      }), Or = function(t, e) {
        return new Wt(t, e);
      }, gt = Wt.extend({
        addLayer: function(t) {
          return this.hasLayer(t) ? this : (t.addEventParent(this), Wt.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
        },
        removeLayer: function(t) {
          return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Wt.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(t) {
          return this.invoke("setStyle", t);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
          return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
          return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
          var t = new J();
          for (var e in this._layers) {
            var i = this._layers[e];
            t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
          }
          return t;
        }
      }), Ir = function(t, e) {
        return new gt(t, e);
      }, Ut = _t.extend({
        /* @section
         * @aka Icon options
         *
         * @option iconUrl: String = null
         * **(required)** The URL to the icon image (absolute or relative to your script path).
         *
         * @option iconRetinaUrl: String = null
         * The URL to a retina sized version of the icon image (absolute or relative to your
         * script path). Used for Retina screen devices.
         *
         * @option iconSize: Point = null
         * Size of the icon image in pixels.
         *
         * @option iconAnchor: Point = null
         * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
         * will be aligned so that this point is at the marker's geographical location. Centered
         * by default if size is specified, also can be set in CSS with negative margins.
         *
         * @option popupAnchor: Point = [0, 0]
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         *
         * @option tooltipAnchor: Point = [0, 0]
         * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
         *
         * @option shadowUrl: String = null
         * The URL to the icon shadow image. If not specified, no shadow image will be created.
         *
         * @option shadowRetinaUrl: String = null
         *
         * @option shadowSize: Point = null
         * Size of the shadow image in pixels.
         *
         * @option shadowAnchor: Point = null
         * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
         * as iconAnchor if not specified).
         *
         * @option className: String = ''
         * A custom class name to assign to both icon and shadow images. Empty by default.
         */
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1
        },
        initialize: function(t) {
          Z(this, t);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(t) {
          return this._createIcon("icon", t);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(t) {
          return this._createIcon("shadow", t);
        },
        _createIcon: function(t, e) {
          var i = this._getIconUrl(t);
          if (!i) {
            if (t === "icon")
              throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }
          var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
          return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n;
        },
        _setIconStyles: function(t, e) {
          var i = this.options, n = i[e + "Size"];
          typeof n == "number" && (n = [n, n]);
          var o = x(n), s = x(e === "shadow" && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
          t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
        },
        _createImg: function(t, e) {
          return e = e || document.createElement("img"), e.src = t, e;
        },
        _getIconUrl: function(t) {
          return y.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
        }
      });
      function Zr(t) {
        return new Ut(t);
      }
      var de = Ut.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
          return typeof de.imagePath != "string" && (de.imagePath = this._detectIconPath()), (this.options.imagePath || de.imagePath) + Ut.prototype._getIconUrl.call(this, t);
        },
        _stripUrl: function(t) {
          var e = function(i, n, o) {
            var s = n.exec(i);
            return s && s[o];
          };
          return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var t = k("div", "leaflet-default-icon-path", document.body), e = re(t, "background-image") || re(t, "backgroundImage");
          if (document.body.removeChild(t), e = this._stripUrl(e), e)
            return e;
          var i = document.querySelector('link[href$="leaflet.css"]');
          return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
        }
      }), qn = dt.extend({
        initialize: function(t) {
          this._marker = t;
        },
        addHooks: function() {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new Lt(t, t, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), C(t, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && H(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(t) {
          var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, s = Et(e._icon), h = i.getPixelBounds(), d = i.getPixelOrigin(), f = K(
            h.min._subtract(d).add(o),
            h.max._subtract(d).subtract(o)
          );
          if (!f.contains(s)) {
            var m = x(
              (Math.max(f.max.x, s.x) - f.max.x) / (h.max.x - f.max.x) - (Math.min(f.min.x, s.x) - f.min.x) / (h.min.x - f.min.x),
              (Math.max(f.max.y, s.y) - f.max.y) / (h.max.y - f.max.y) - (Math.min(f.min.y, s.y) - f.min.y) / (h.min.y - f.min.y)
            ).multiplyBy(n);
            i.panBy(m, { animate: !1 }), this._draggable._newPos._add(m), this._draggable._startPos._add(m), F(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = Y(this._adjustPan.bind(this, t));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(t) {
          this._marker.options.autoPan && (it(this._panRequest), this._panRequest = Y(this._adjustPan.bind(this, t)));
        },
        _onDrag: function(t) {
          var e = this._marker, i = e._shadow, n = Et(e._icon), o = e._map.layerPointToLatLng(n);
          i && F(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function(t) {
          it(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
        }
      }), Be = lt.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new de(),
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option keyboard: Boolean = true
          // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
          keyboard: !0,
          // @option title: String = ''
          // Text for the browser tooltip that appear on marker hover (no tooltip by default).
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          title: "",
          // @option alt: String = 'Marker'
          // Text for the `alt` attribute of the icon image.
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          alt: "Marker",
          // @option zIndexOffset: Number = 0
          // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
          zIndexOffset: 0,
          // @option opacity: Number = 1.0
          // The opacity of the marker.
          opacity: 1,
          // @option riseOnHover: Boolean = false
          // If `true`, the marker will get on top of others when you hover the mouse over it.
          riseOnHover: !1,
          // @option riseOffset: Number = 250
          // The z-index offset used for the `riseOnHover` feature.
          riseOffset: 250,
          // @option pane: String = 'markerPane'
          // `Map pane` where the markers icon will be added.
          pane: "markerPane",
          // @option shadowPane: String = 'shadowPane'
          // `Map pane` where the markers shadow will be added.
          shadowPane: "shadowPane",
          // @option bubblingMouseEvents: Boolean = false
          // When `true`, a mouse event on this marker will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !1,
          // @option autoPanOnFocus: Boolean = true
          // When `true`, the map will pan whenever the marker is focused (via
          // e.g. pressing `tab` on the keyboard) to ensure the marker is
          // visible within the map's bounds
          autoPanOnFocus: !0,
          // @section Draggable marker options
          // @option draggable: Boolean = false
          // Whether the marker is draggable with mouse/touch or not.
          draggable: !1,
          // @option autoPan: Boolean = false
          // Whether to pan the map when dragging this marker near its edge or not.
          autoPan: !1,
          // @option autoPanPadding: Point = Point(50, 50)
          // Distance (in pixels to the left/right and to the top/bottom) of the
          // map edge to start panning the map.
          autoPanPadding: [50, 50],
          // @option autoPanSpeed: Number = 10
          // Number of pixels the map should pan by.
          autoPanSpeed: 10
        },
        /* @section
         *
         * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
         */
        initialize: function(t, e) {
          Z(this, e), this._latlng = S(t);
        },
        onAdd: function(t) {
          this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function(t) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function() {
          return {
            zoom: this.update,
            viewreset: this.update
          };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(t) {
          var e = this._latlng;
          return this._latlng = S(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(t) {
          return this.options.zIndexOffset = t, this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
          return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(t) {
          return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function() {
          return this._icon;
        },
        update: function() {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(t);
          }
          return this;
        },
        _initIcon: function() {
          var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = !1;
          i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), C(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && T(i, "focus", this._panOnFocus, this);
          var o = t.icon.createShadow(this._shadow), s = !1;
          o !== this._shadow && (this._removeShadow(), s = !0), o && (C(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && O(this._icon, "focus", this._panOnFocus, this), R(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && R(this._shadow), this._shadow = null;
        },
        _setPos: function(t) {
          this._icon && F(this._icon, t), this._shadow && F(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
          this._setPos(e);
        },
        _initInteraction: function() {
          if (this.options.interactive && (C(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), qn)) {
            var t = this.options.draggable;
            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new qn(this), t && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(t) {
          return this.options.opacity = t, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var t = this.options.opacity;
          this._icon && nt(this._icon, t), this._shadow && nt(this._shadow, t);
        },
        _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
          this._updateZIndex(0);
        },
        _panOnFocus: function() {
          var t = this._map;
          if (t) {
            var e = this.options.icon.options, i = e.iconSize ? x(e.iconSize) : x(0, 0), n = e.iconAnchor ? x(e.iconAnchor) : x(0, 0);
            t.panInside(this._latlng, {
              paddingTopLeft: n,
              paddingBottomRight: i.subtract(n)
            });
          }
        },
        _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        }
      });
      function Br(t, e) {
        return new Be(t, e);
      }
      var Tt = lt.extend({
        // @section
        // @aka Path options
        options: {
          // @option stroke: Boolean = true
          // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
          stroke: !0,
          // @option color: String = '#3388ff'
          // Stroke color
          color: "#3388ff",
          // @option weight: Number = 3
          // Stroke width in pixels
          weight: 3,
          // @option opacity: Number = 1.0
          // Stroke opacity
          opacity: 1,
          // @option lineCap: String= 'round'
          // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
          lineCap: "round",
          // @option lineJoin: String = 'round'
          // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
          lineJoin: "round",
          // @option dashArray: String = null
          // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashArray: null,
          // @option dashOffset: String = null
          // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashOffset: null,
          // @option fill: Boolean = depends
          // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
          fill: !1,
          // @option fillColor: String = *
          // Fill color. Defaults to the value of the [`color`](#path-color) option
          fillColor: null,
          // @option fillOpacity: Number = 0.2
          // Fill opacity.
          fillOpacity: 0.2,
          // @option fillRule: String = 'evenodd'
          // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
          fillRule: "evenodd",
          // className: '',
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option bubblingMouseEvents: Boolean = true
          // When `true`, a mouse event on this path will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !0
        },
        beforeAdd: function(t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function() {
          this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(t) {
          return Z(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function() {
          return this._path;
        },
        _reset: function() {
          this._project(), this._update();
        },
        _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
      }), Re = Tt.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(t, e) {
          Z(this, e), this._latlng = S(t), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(t) {
          var e = this._latlng;
          return this._latlng = S(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
          return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(t) {
          return this.options.radius = this._radius = t, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
          return this._radius;
        },
        setStyle: function(t) {
          var e = t && t.radius || this._radius;
          return Tt.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
          this._pxBounds = new B(this._point.subtract(n), this._point.add(n));
        },
        _update: function() {
          this._map && this._updatePath();
        },
        _updatePath: function() {
          this._renderer._updateCircle(this);
        },
        _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      });
      function Rr(t, e) {
        return new Re(t, e);
      }
      var Bi = Re.extend({
        initialize: function(t, e, i) {
          if (typeof e == "number" && (e = c({}, i, { radius: e })), Z(this, e), this._latlng = S(t), isNaN(this.options.radius))
            throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(t) {
          return this._mRadius = t, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
          return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          var t = [this._radius, this._radiusY || this._radius];
          return new J(
            this._map.layerPointToLatLng(this._point.subtract(t)),
            this._map.layerPointToLatLng(this._point.add(t))
          );
        },
        setStyle: Tt.prototype.setStyle,
        _project: function() {
          var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
          if (n.distance === Pt.distance) {
            var o = Math.PI / 180, s = this._mRadius / Pt.R / o, h = i.project([e + s, t]), d = i.project([e - s, t]), f = h.add(d).divideBy(2), m = i.unproject(f).lat, v = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(m * o)) / (Math.cos(e * o) * Math.cos(m * o))) / o;
            (isNaN(v) || v === 0) && (v = s / Math.cos(Math.PI / 180 * e)), this._point = f.subtract(i.getPixelOrigin()), this._radius = isNaN(v) ? 0 : f.x - i.project([m, t - v]).x, this._radiusY = f.y - h.y;
          } else {
            var b = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(b).x;
          }
          this._updateBounds();
        }
      });
      function Dr(t, e, i) {
        return new Bi(t, e, i);
      }
      var vt = Tt.extend({
        // @section
        // @aka Polyline options
        options: {
          // @option smoothFactor: Number = 1.0
          // How much to simplify the polyline on each zoom level. More means
          // better performance and smoother look, and less means more accurate representation.
          smoothFactor: 1,
          // @option noClip: Boolean = false
          // Disable polyline clipping.
          noClip: !1
        },
        initialize: function(t, e) {
          Z(this, e), this._setLatLngs(t);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
          return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(t) {
          return this._setLatLngs(t), this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
          return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(t) {
          for (var e = 1 / 0, i = null, n = ce, o, s, h = 0, d = this._parts.length; h < d; h++)
            for (var f = this._parts[h], m = 1, v = f.length; m < v; m++) {
              o = f[m - 1], s = f[m];
              var b = n(t, o, s, !0);
              b < e && (e = b, i = n(t, o, s));
            }
          return i && (i.distance = Math.sqrt(e)), i;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Un(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(t, e) {
          return e = e || this._defaultShape(), t = S(t), e.push(t), this._bounds.extend(t), this.redraw();
        },
        _setLatLngs: function(t) {
          this._bounds = new J(), this._latlngs = this._convertLatLngs(t);
        },
        _defaultShape: function() {
          return ot(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(t) {
          for (var e = [], i = ot(t), n = 0, o = t.length; n < o; n++)
            i ? (e[n] = S(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
          return e;
        },
        _project: function() {
          var t = new B();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
        },
        _updateBounds: function() {
          var t = this._clickTolerance(), e = new P(t, t);
          this._rawPxBounds && (this._pxBounds = new B([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(t, e, i) {
          var n = t[0] instanceof z, o = t.length, s, h;
          if (n) {
            for (h = [], s = 0; s < o; s++)
              h[s] = this._map.latLngToLayerPoint(t[s]), i.extend(h[s]);
            e.push(h);
          } else
            for (s = 0; s < o; s++)
              this._projectLatlngs(t[s], e, i);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var t = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var e = this._parts, i, n, o, s, h, d, f;
            for (i = 0, o = 0, s = this._rings.length; i < s; i++)
              for (f = this._rings[i], n = 0, h = f.length; n < h - 1; n++)
                d = $n(f[n], f[n + 1], t, n, !0), d && (e[o] = e[o] || [], e[o].push(d[0]), (d[1] !== f[n + 1] || n === h - 2) && (e[o].push(d[1]), o++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
            t[i] = Dn(t[i], e);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t, e) {
          var i, n, o, s, h, d, f = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (i = 0, s = this._parts.length; i < s; i++)
            for (d = this._parts[i], n = 0, h = d.length, o = h - 1; n < h; o = n++)
              if (!(!e && n === 0) && Nn(t, d[o], d[n]) <= f)
                return !0;
          return !1;
        }
      });
      function Nr(t, e) {
        return new vt(t, e);
      }
      vt._flat = Wn;
      var Ft = vt.extend({
        options: {
          fill: !0
        },
        isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Rn(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(t) {
          var e = vt.prototype._convertLatLngs.call(this, t), i = e.length;
          return i >= 2 && e[0] instanceof z && e[0].equals(e[i - 1]) && e.pop(), e;
        },
        _setLatLngs: function(t) {
          vt.prototype._setLatLngs.call(this, t), ot(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return ot(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var t = this._renderer._bounds, e = this.options.weight, i = new P(e, e);
          if (t = new B(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var n = 0, o = this._rings.length, s; n < o; n++)
              s = Bn(this._rings[n], t, !0), s.length && this._parts.push(s);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          var e = !1, i, n, o, s, h, d, f, m;
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (s = 0, f = this._parts.length; s < f; s++)
            for (i = this._parts[s], h = 0, m = i.length, d = m - 1; h < m; d = h++)
              n = i[h], o = i[d], n.y > t.y != o.y > t.y && t.x < (o.x - n.x) * (t.y - n.y) / (o.y - n.y) + n.x && (e = !e);
          return e || vt.prototype._containsPoint.call(this, t, !0);
        }
      });
      function Hr(t, e) {
        return new Ft(t, e);
      }
      var yt = gt.extend({
        /* @section
         * @aka GeoJSON options
         *
         * @option pointToLayer: Function = *
         * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
         * called when data is added, passing the GeoJSON point feature and its `LatLng`.
         * The default is to spawn a default `Marker`:
         * ```js
         * function(geoJsonPoint, latlng) {
         * 	return L.marker(latlng);
         * }
         * ```
         *
         * @option style: Function = *
         * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
         * called internally when data is added.
         * The default value is to not override any defaults:
         * ```js
         * function (geoJsonFeature) {
         * 	return {}
         * }
         * ```
         *
         * @option onEachFeature: Function = *
         * A `Function` that will be called once for each created `Feature`, after it has
         * been created and styled. Useful for attaching events and popups to features.
         * The default is to do nothing with the newly created layers:
         * ```js
         * function (feature, layer) {}
         * ```
         *
         * @option filter: Function = *
         * A `Function` that will be used to decide whether to include a feature or not.
         * The default is to include all features:
         * ```js
         * function (geoJsonFeature) {
         * 	return true;
         * }
         * ```
         * Note: dynamically changing the `filter` option will have effect only on newly
         * added data. It will _not_ re-evaluate already included features.
         *
         * @option coordsToLatLng: Function = *
         * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
         * The default is the `coordsToLatLng` static method.
         *
         * @option markersInheritOptions: Boolean = false
         * Whether default Markers for "Point" type Features inherit from group options.
         */
        initialize: function(t, e) {
          Z(this, e), this._layers = {}, t && this.addData(t);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(t) {
          var e = st(t) ? t : t.features, i, n, o;
          if (e) {
            for (i = 0, n = e.length; i < n; i++)
              o = e[i], (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
            return this;
          }
          var s = this.options;
          if (s.filter && !s.filter(t))
            return this;
          var h = De(t, s);
          return h ? (h.feature = $e(t), h.defaultOptions = h.options, this.resetStyle(h), s.onEachFeature && s.onEachFeature(t, h), this.addLayer(h)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(t) {
          return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = c({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(t) {
          return this.eachLayer(function(e) {
            this._setLayerStyle(e, t);
          }, this);
        },
        _setLayerStyle: function(t, e) {
          t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
        }
      });
      function De(t, e) {
        var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, o = [], s = e && e.pointToLayer, h = e && e.coordsToLatLng || Ri, d, f, m, v;
        if (!n && !i)
          return null;
        switch (i.type) {
          case "Point":
            return d = h(n), Vn(s, t, d, e);
          case "MultiPoint":
            for (m = 0, v = n.length; m < v; m++)
              d = h(n[m]), o.push(Vn(s, t, d, e));
            return new gt(o);
          case "LineString":
          case "MultiLineString":
            return f = Ne(n, i.type === "LineString" ? 0 : 1, h), new vt(f, e);
          case "Polygon":
          case "MultiPolygon":
            return f = Ne(n, i.type === "Polygon" ? 1 : 2, h), new Ft(f, e);
          case "GeometryCollection":
            for (m = 0, v = i.geometries.length; m < v; m++) {
              var b = De({
                geometry: i.geometries[m],
                type: "Feature",
                properties: t.properties
              }, e);
              b && o.push(b);
            }
            return new gt(o);
          case "FeatureCollection":
            for (m = 0, v = i.features.length; m < v; m++) {
              var A = De(i.features[m], e);
              A && o.push(A);
            }
            return new gt(o);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function Vn(t, e, i, n) {
        return t ? t(e, i) : new Be(i, n && n.markersInheritOptions && n);
      }
      function Ri(t) {
        return new z(t[1], t[0], t[2]);
      }
      function Ne(t, e, i) {
        for (var n = [], o = 0, s = t.length, h; o < s; o++)
          h = e ? Ne(t[o], e - 1, i) : (i || Ri)(t[o]), n.push(h);
        return n;
      }
      function Di(t, e) {
        return t = S(t), t.alt !== void 0 ? [W(t.lng, e), W(t.lat, e), W(t.alt, e)] : [W(t.lng, e), W(t.lat, e)];
      }
      function He(t, e, i, n) {
        for (var o = [], s = 0, h = t.length; s < h; s++)
          o.push(e ? He(t[s], ot(t[s]) ? 0 : e - 1, i, n) : Di(t[s], n));
        return !e && i && o.length > 0 && o.push(o[0].slice()), o;
      }
      function qt(t, e) {
        return t.feature ? c({}, t.feature, { geometry: e }) : $e(e);
      }
      function $e(t) {
        return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        };
      }
      var Ni = {
        toGeoJSON: function(t) {
          return qt(this, {
            type: "Point",
            coordinates: Di(this.getLatLng(), t)
          });
        }
      };
      Be.include(Ni), Bi.include(Ni), Re.include(Ni), vt.include({
        toGeoJSON: function(t) {
          var e = !ot(this._latlngs), i = He(this._latlngs, e ? 1 : 0, !1, t);
          return qt(this, {
            type: (e ? "Multi" : "") + "LineString",
            coordinates: i
          });
        }
      }), Ft.include({
        toGeoJSON: function(t) {
          var e = !ot(this._latlngs), i = e && !ot(this._latlngs[0]), n = He(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
          return e || (n = [n]), qt(this, {
            type: (i ? "Multi" : "") + "Polygon",
            coordinates: n
          });
        }
      }), Wt.include({
        toMultiPoint: function(t) {
          var e = [];
          return this.eachLayer(function(i) {
            e.push(i.toGeoJSON(t).geometry.coordinates);
          }), qt(this, {
            type: "MultiPoint",
            coordinates: e
          });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(t) {
          var e = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (e === "MultiPoint")
            return this.toMultiPoint(t);
          var i = e === "GeometryCollection", n = [];
          return this.eachLayer(function(o) {
            if (o.toGeoJSON) {
              var s = o.toGeoJSON(t);
              if (i)
                n.push(s.geometry);
              else {
                var h = $e(s);
                h.type === "FeatureCollection" ? n.push.apply(n, h.features) : n.push(h);
              }
            }
          }), i ? qt(this, {
            geometries: n,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: n
          };
        }
      });
      function jn(t, e) {
        return new yt(t, e);
      }
      var $r = jn, We = lt.extend({
        // @section
        // @aka ImageOverlay options
        options: {
          // @option opacity: Number = 1.0
          // The opacity of the image overlay.
          opacity: 1,
          // @option alt: String = ''
          // Text for the `alt` attribute of the image (useful for accessibility).
          alt: "",
          // @option interactive: Boolean = false
          // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
          interactive: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the image.
          // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option errorOverlayUrl: String = ''
          // URL to the overlay image to show in place of the overlay that failed to load.
          errorOverlayUrl: "",
          // @option zIndex: Number = 1
          // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
          zIndex: 1,
          // @option className: String = ''
          // A custom class name to assign to the image. Empty by default.
          className: ""
        },
        initialize: function(t, e, i) {
          this._url = t, this._bounds = U(e), Z(this, i);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (C(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          R(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(t) {
          return this.options.opacity = t, this._image && this._updateOpacity(), this;
        },
        setStyle: function(t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
          return this._map && Ht(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && $t(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(t) {
          return this._url = t, this._image && (this._image.src = t), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(t) {
          return this._bounds = U(t), this._map && this._reset(), this;
        },
        getEvents: function() {
          var t = {
            zoom: this._reset,
            viewreset: this._reset
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
          return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
          return this._image;
        },
        _initImage: function() {
          var t = this._url.tagName === "IMG", e = this._image = t ? this._url : k("img");
          if (C(e, "leaflet-image-layer"), this._zoomAnimated && C(e, "leaflet-zoom-animated"), this.options.className && C(e, this.options.className), e.onselectstart = w, e.onmousemove = w, e.onload = p(this.fire, this, "load"), e.onerror = p(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
            this._url = e.src;
            return;
          }
          e.src = this._url, e.alt = this.options.alt;
        },
        _animateZoom: function(t) {
          var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
          St(this._image, i, e);
        },
        _reset: function() {
          var t = this._image, e = new B(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), i = e.getSize();
          F(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
        },
        _updateOpacity: function() {
          nt(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
          this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function() {
          this.fire("error");
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && (this._url = t, this._image.src = t);
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
          return this._bounds.getCenter();
        }
      }), Wr = function(t, e, i) {
        return new We(t, e, i);
      }, Gn = We.extend({
        // @section
        // @aka VideoOverlay options
        options: {
          // @option autoplay: Boolean = true
          // Whether the video starts playing automatically when loaded.
          // On some browsers autoplay will only work with `muted: true`
          autoplay: !0,
          // @option loop: Boolean = true
          // Whether the video will loop back to the beginning when played.
          loop: !0,
          // @option keepAspectRatio: Boolean = true
          // Whether the video will save aspect ratio after the projection.
          // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
          keepAspectRatio: !0,
          // @option muted: Boolean = false
          // Whether the video starts on mute when loaded.
          muted: !1,
          // @option playsInline: Boolean = true
          // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
          playsInline: !0
        },
        _initImage: function() {
          var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : k("video");
          if (C(e, "leaflet-image-layer"), this._zoomAnimated && C(e, "leaflet-zoom-animated"), this.options.className && C(e, this.options.className), e.onselectstart = w, e.onmousemove = w, e.onloadeddata = p(this.fire, this, "load"), t) {
            for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++)
              n.push(i[o].src);
            this._url = i.length > 0 ? n : [e.src];
            return;
          }
          st(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
          for (var s = 0; s < this._url.length; s++) {
            var h = k("source");
            h.src = this._url[s], e.appendChild(h);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function Ur(t, e, i) {
        return new Gn(t, e, i);
      }
      var Yn = We.extend({
        _initImage: function() {
          var t = this._image = this._url;
          C(t, "leaflet-image-layer"), this._zoomAnimated && C(t, "leaflet-zoom-animated"), this.options.className && C(t, this.options.className), t.onselectstart = w, t.onmousemove = w;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Fr(t, e, i) {
        return new Yn(t, e, i);
      }
      var ft = lt.extend({
        // @section
        // @aka DivOverlay options
        options: {
          // @option interactive: Boolean = false
          // If true, the popup/tooltip will listen to the mouse events.
          interactive: !1,
          // @option offset: Point = Point(0, 0)
          // The offset of the overlay position.
          offset: [0, 0],
          // @option className: String = ''
          // A custom CSS class name to assign to the overlay.
          className: "",
          // @option pane: String = undefined
          // `Map pane` where the overlay will be added.
          pane: void 0,
          // @option content: String|HTMLElement|Function = ''
          // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
          // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
          content: ""
        },
        initialize: function(t, e) {
          t && (t instanceof z || st(t)) ? (this._latlng = S(t), Z(this, e)) : (Z(this, t), this._source = e), this.options.content && (this._content = this.options.content);
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(t) {
          return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
          return this._map && this._map.removeLayer(this), this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(t) {
          return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
        },
        onAdd: function(t) {
          this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && nt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && nt(this._container, 1), this.bringToFront(), this.options.interactive && (C(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(t) {
          t._fadeAnimated ? (nt(this._container, 0), this._removeTimeout = setTimeout(p(R, void 0, this._container), 200)) : R(this._container), this.options.interactive && (H(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(t) {
          return this._latlng = S(t), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
          return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(t) {
          return this._content = t, this.update(), this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
          return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function() {
          var t = {
            zoom: this._updatePosition,
            viewreset: this._updatePosition
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
          return this._map && Ht(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && $t(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(t) {
          var e = this._source;
          if (!e._map)
            return !1;
          if (e instanceof gt) {
            e = null;
            var i = this._source._layers;
            for (var n in i)
              if (i[n]._map) {
                e = i[n];
                break;
              }
            if (!e)
              return !1;
            this._source = e;
          }
          if (!t)
            if (e.getCenter)
              t = e.getCenter();
            else if (e.getLatLng)
              t = e.getLatLng();
            else if (e.getBounds)
              t = e.getBounds().getCenter();
            else
              throw new Error("Unable to get source layer LatLng.");
          return this.setLatLng(t), this._map && this.update(), !0;
        },
        _updateContent: function() {
          if (this._content) {
            var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
            if (typeof e == "string")
              t.innerHTML = e;
            else {
              for (; t.hasChildNodes(); )
                t.removeChild(t.firstChild);
              t.appendChild(e);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function() {
          if (this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng), e = x(this.options.offset), i = this._getAnchor();
            this._zoomAnimated ? F(this._container, t.add(i)) : e = e.add(t).add(i);
            var n = this._containerBottom = -e.y, o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
            this._container.style.bottom = n + "px", this._container.style.left = o + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      E.include({
        _initOverlay: function(t, e, i, n) {
          var o = e;
          return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
        }
      }), lt.include({
        _initOverlay: function(t, e, i, n) {
          var o = i;
          return o instanceof t ? (Z(o, n), o._source = this) : (o = e && !n ? e : new t(n, this), o.setContent(i)), o;
        }
      });
      var Ue = ft.extend({
        // @section
        // @aka Popup options
        options: {
          // @option pane: String = 'popupPane'
          // `Map pane` where the popup will be added.
          pane: "popupPane",
          // @option offset: Point = Point(0, 7)
          // The offset of the popup position.
          offset: [0, 7],
          // @option maxWidth: Number = 300
          // Max width of the popup, in pixels.
          maxWidth: 300,
          // @option minWidth: Number = 50
          // Min width of the popup, in pixels.
          minWidth: 50,
          // @option maxHeight: Number = null
          // If set, creates a scrollable container of the given height
          // inside a popup if its content exceeds it.
          // The scrollable container can be styled using the
          // `leaflet-popup-scrolled` CSS class selector.
          maxHeight: null,
          // @option autoPan: Boolean = true
          // Set it to `false` if you don't want the map to do panning animation
          // to fit the opened popup.
          autoPan: !0,
          // @option autoPanPaddingTopLeft: Point = null
          // The margin between the popup and the top left corner of the map
          // view after autopanning was performed.
          autoPanPaddingTopLeft: null,
          // @option autoPanPaddingBottomRight: Point = null
          // The margin between the popup and the bottom right corner of the map
          // view after autopanning was performed.
          autoPanPaddingBottomRight: null,
          // @option autoPanPadding: Point = Point(5, 5)
          // Equivalent of setting both top left and bottom right autopan padding to the same value.
          autoPanPadding: [5, 5],
          // @option keepInView: Boolean = false
          // Set it to `true` if you want to prevent users from panning the popup
          // off of the screen while it is open.
          keepInView: !1,
          // @option closeButton: Boolean = true
          // Controls the presence of a close button in the popup.
          closeButton: !0,
          // @option autoClose: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the popup closing when another popup is opened.
          autoClose: !0,
          // @option closeOnEscapeKey: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the ESC key for closing of the popup.
          closeOnEscapeKey: !0,
          // @option closeOnClick: Boolean = *
          // Set it if you want to override the default behavior of the popup closing when user clicks
          // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
          // @option className: String = ''
          // A custom CSS class name to assign to the popup.
          className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(t) {
          return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, ft.prototype.openOn.call(this, t);
        },
        onAdd: function(t) {
          ft.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Tt || this._source.on("preclick", Mt));
        },
        onRemove: function(t) {
          ft.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Tt || this._source.off("preclick", Mt));
        },
        getEvents: function() {
          var t = ft.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
        },
        _initLayout: function() {
          var t = "leaflet-popup", e = this._container = k(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), i = this._wrapper = k("div", t + "-content-wrapper", e);
          if (this._contentNode = k("div", t + "-content", i), he(e), Si(this._contentNode), T(e, "contextmenu", Mt), this._tipContainer = k("div", t + "-tip-container", e), this._tip = k("div", t + "-tip", this._tipContainer), this.options.closeButton) {
            var n = this._closeButton = k("a", t + "-close-button", e);
            n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', T(n, "click", function(o) {
              j(o), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var t = this._contentNode, e = t.style;
          e.width = "", e.whiteSpace = "nowrap";
          var i = t.offsetWidth;
          i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
          var n = t.offsetHeight, o = this.options.maxHeight, s = "leaflet-popup-scrolled";
          o && n > o ? (e.height = o + "px", C(t, s)) : H(t, s), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
          F(this._container, e.add(i));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var t = this._map, e = parseInt(re(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, o = new P(this._containerLeft, -i - this._containerBottom);
            o._add(Et(this._container));
            var s = t.layerPointToContainerPoint(o), h = x(this.options.autoPanPadding), d = x(this.options.autoPanPaddingTopLeft || h), f = x(this.options.autoPanPaddingBottomRight || h), m = t.getSize(), v = 0, b = 0;
            s.x + n + f.x > m.x && (v = s.x + n - m.x + f.x), s.x - v - d.x < 0 && (v = s.x - d.x), s.y + i + f.y > m.y && (b = s.y + i - m.y + f.y), s.y - b - d.y < 0 && (b = s.y - d.y), (v || b) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([v, b]));
          }
        },
        _getAnchor: function() {
          return x(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), qr = function(t, e) {
        return new Ue(t, e);
      };
      E.mergeOptions({
        closePopupOnClick: !0
      }), E.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(t, e, i) {
          return this._initOverlay(Ue, t, e, i).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(t) {
          return t = arguments.length ? t : this._popup, t && t.close(), this;
        }
      }), lt.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(t, e) {
          return this._popup = this._initOverlay(Ue, this._popup, t, e), this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !0), this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
          return this._popup && (this.off({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !1, this._popup = null), this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(t) {
          return this._popup && (this instanceof gt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
          return this._popup && this._popup.close(), this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
          return this._popup ? this._popup.isOpen() : !1;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(t) {
          return this._popup && this._popup.setContent(t), this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
          return this._popup;
        },
        _openPopup: function(t) {
          if (!(!this._popup || !this._map)) {
            kt(t);
            var e = t.layer || t.target;
            if (this._popup._source === e && !(e instanceof Tt)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
              return;
            }
            this._popup._source = e, this.openPopup(t.latlng);
          }
        },
        _movePopup: function(t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function(t) {
          t.originalEvent.keyCode === 13 && this._openPopup(t);
        }
      });
      var Fe = ft.extend({
        // @section
        // @aka Tooltip options
        options: {
          // @option pane: String = 'tooltipPane'
          // `Map pane` where the tooltip will be added.
          pane: "tooltipPane",
          // @option offset: Point = Point(0, 0)
          // Optional offset of the tooltip position.
          offset: [0, 0],
          // @option direction: String = 'auto'
          // Direction where to open the tooltip. Possible values are: `right`, `left`,
          // `top`, `bottom`, `center`, `auto`.
          // `auto` will dynamically switch between `right` and `left` according to the tooltip
          // position on the map.
          direction: "auto",
          // @option permanent: Boolean = false
          // Whether to open the tooltip permanently or only on mouseover.
          permanent: !1,
          // @option sticky: Boolean = false
          // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
          sticky: !1,
          // @option opacity: Number = 0.9
          // Tooltip container opacity.
          opacity: 0.9
        },
        onAdd: function(t) {
          ft.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(t) {
          ft.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var t = ft.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function() {
          var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = k("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + g(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(t) {
          var e, i, n = this._map, o = this._container, s = n.latLngToContainerPoint(n.getCenter()), h = n.layerPointToContainerPoint(t), d = this.options.direction, f = o.offsetWidth, m = o.offsetHeight, v = x(this.options.offset), b = this._getAnchor();
          d === "top" ? (e = f / 2, i = m) : d === "bottom" ? (e = f / 2, i = 0) : d === "center" ? (e = f / 2, i = m / 2) : d === "right" ? (e = 0, i = m / 2) : d === "left" ? (e = f, i = m / 2) : h.x < s.x ? (d = "right", e = 0, i = m / 2) : (d = "left", e = f + (v.x + b.x) * 2, i = m / 2), t = t.subtract(x(e, i, !0)).add(v).add(b), H(o, "leaflet-tooltip-right"), H(o, "leaflet-tooltip-left"), H(o, "leaflet-tooltip-top"), H(o, "leaflet-tooltip-bottom"), C(o, "leaflet-tooltip-" + d), F(o, t);
        },
        _updatePosition: function() {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function(t) {
          this.options.opacity = t, this._container && nt(this._container, t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(e);
        },
        _getAnchor: function() {
          return x(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Vr = function(t, e) {
        return new Fe(t, e);
      };
      E.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(t, e, i) {
          return this._initOverlay(Fe, t, e, i).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(t) {
          return t.close(), this;
        }
      }), lt.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(t, e) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Fe, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(t) {
          if (!(!t && this._tooltipHandlersAdded)) {
            var e = t ? "off" : "on", i = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t;
          }
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(t) {
          return this._tooltip && (this instanceof gt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
          if (this._tooltip)
            return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
          return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
          return this._tooltip;
        },
        _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(t) {
          var e = typeof t.getElement == "function" && t.getElement();
          e && (T(e, "focus", function() {
            this._tooltip._source = t, this.openTooltip();
          }, this), T(e, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function(t) {
          var e = typeof t.getElement == "function" && t.getElement();
          e && e.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(t) {
          if (!(!this._tooltip || !this._map)) {
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = !0;
              var e = this;
              this._map.once("moveend", function() {
                e._openOnceFlag = !1, e._openTooltip(t);
              });
              return;
            }
            this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
          }
        },
        _moveTooltip: function(t) {
          var e = t.latlng, i, n;
          this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(e);
        }
      });
      var Kn = Ut.extend({
        options: {
          // @section
          // @aka DivIcon options
          iconSize: [12, 12],
          // also can be set through CSS
          // iconAnchor: (Point),
          // popupAnchor: (Point),
          // @option html: String|HTMLElement = ''
          // Custom HTML code to put inside the div element, empty by default. Alternatively,
          // an instance of `HTMLElement`.
          html: !1,
          // @option bgPos: Point = [0, 0]
          // Optional relative position of the background, in pixels
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function(t) {
          var e = t && t.tagName === "DIV" ? t : document.createElement("div"), i = this.options;
          if (i.html instanceof Element ? (Me(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
            var n = x(i.bgPos);
            e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
          }
          return this._setIconStyles(e, "icon"), e;
        },
        createShadow: function() {
          return null;
        }
      });
      function jr(t) {
        return new Kn(t);
      }
      Ut.Default = de;
      var fe = lt.extend({
        // @section
        // @aka GridLayer options
        options: {
          // @option tileSize: Number|Point = 256
          // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
          tileSize: 256,
          // @option opacity: Number = 1.0
          // Opacity of the tiles. Can be used in the `createTile()` function.
          opacity: 1,
          // @option updateWhenIdle: Boolean = (depends)
          // Load new tiles only when panning ends.
          // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
          // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
          // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
          updateWhenIdle: y.mobile,
          // @option updateWhenZooming: Boolean = true
          // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
          updateWhenZooming: !0,
          // @option updateInterval: Number = 200
          // Tiles will not update more than once every `updateInterval` milliseconds when panning.
          updateInterval: 200,
          // @option zIndex: Number = 1
          // The explicit zIndex of the tile layer.
          zIndex: 1,
          // @option bounds: LatLngBounds = undefined
          // If set, tiles will only be loaded inside the set `LatLngBounds`.
          bounds: null,
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = undefined
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: void 0,
          // @option maxNativeZoom: Number = undefined
          // Maximum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
          // from `maxNativeZoom` level and auto-scaled.
          maxNativeZoom: void 0,
          // @option minNativeZoom: Number = undefined
          // Minimum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
          // from `minNativeZoom` level and auto-scaled.
          minNativeZoom: void 0,
          // @option noWrap: Boolean = false
          // Whether the layer is wrapped around the antimeridian. If `true`, the
          // GridLayer will only be displayed once at low zoom levels. Has no
          // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
          // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
          // tiles outside the CRS limits.
          noWrap: !1,
          // @option pane: String = 'tilePane'
          // `Map pane` where the grid layer will be added.
          pane: "tilePane",
          // @option className: String = ''
          // A custom class name to assign to the tile layer. Empty by default.
          className: "",
          // @option keepBuffer: Number = 2
          // When panning the map, keep this many rows and columns of tiles before unloading them.
          keepBuffer: 2
        },
        initialize: function(t) {
          Z(this, t);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(t) {
          t._addZoomLimit(this);
        },
        onRemove: function(t) {
          this._removeAllTiles(), R(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (Ht(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && ($t(this._container), this._setAutoZIndex(Math.min)), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
          return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(t) {
          return this.options.opacity = t, this._updateOpacity(), this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
          return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
          if (this._map) {
            this._removeAllTiles();
            var t = this._clampZoom(this._map.getZoom());
            t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
          }
          return this;
        },
        getEvents: function() {
          var t = {
            viewprereset: this._invalidateAll,
            viewreset: this._resetView,
            zoom: this._resetView,
            moveend: this._onMoveEnd
          };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = N(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
          return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
          var t = this.options.tileSize;
          return t instanceof P ? t : new P(t, t);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(t) {
          for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), n = 0, o = e.length, s; n < o; n++)
            s = e[n].style.zIndex, e[n] !== this._container && s && (i = t(i, +s));
          isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !y.ielt9) {
            nt(this._container, this.options.opacity);
            var t = +/* @__PURE__ */ new Date(), e = !1, i = !1;
            for (var n in this._tiles) {
              var o = this._tiles[n];
              if (!(!o.current || !o.loaded)) {
                var s = Math.min(1, (t - o.loaded) / 200);
                nt(o.el, s), s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0);
              }
            }
            i && !this._noPrune && this._pruneTiles(), e && (it(this._fadeFrame), this._fadeFrame = Y(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: w,
        _initContainer: function() {
          this._container || (this._container = k("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var t = this._tileZoom, e = this.options.maxZoom;
          if (t !== void 0) {
            for (var i in this._levels)
              i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (R(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
            var n = this._levels[t], o = this._map;
            return n || (n = this._levels[t] = {}, n.el = k("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), w(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
          }
        },
        _onUpdateLevel: w,
        _onRemoveLevel: w,
        _onCreateLevel: w,
        _pruneTiles: function() {
          if (this._map) {
            var t, e, i = this._map.getZoom();
            if (i > this.options.maxZoom || i < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (t in this._tiles)
              e = this._tiles[t], e.retain = e.current;
            for (t in this._tiles)
              if (e = this._tiles[t], e.current && !e.active) {
                var n = e.coords;
                this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
              }
            for (t in this._tiles)
              this._tiles[t].retain || this._removeTile(t);
          }
        },
        _removeTilesAtZoom: function(t) {
          for (var e in this._tiles)
            this._tiles[e].coords.z === t && this._removeTile(e);
        },
        _removeAllTiles: function() {
          for (var t in this._tiles)
            this._removeTile(t);
        },
        _invalidateAll: function() {
          for (var t in this._levels)
            R(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(t, e, i, n) {
          var o = Math.floor(t / 2), s = Math.floor(e / 2), h = i - 1, d = new P(+o, +s);
          d.z = +h;
          var f = this._tileCoordsToKey(d), m = this._tiles[f];
          return m && m.active ? (m.retain = !0, !0) : (m && m.loaded && (m.retain = !0), h > n ? this._retainParent(o, s, h, n) : !1);
        },
        _retainChildren: function(t, e, i, n) {
          for (var o = 2 * t; o < 2 * t + 2; o++)
            for (var s = 2 * e; s < 2 * e + 2; s++) {
              var h = new P(o, s);
              h.z = i + 1;
              var d = this._tileCoordsToKey(h), f = this._tiles[d];
              if (f && f.active) {
                f.retain = !0;
                continue;
              } else f && f.loaded && (f.retain = !0);
              i + 1 < n && this._retainChildren(o, s, i + 1, n);
            }
        },
        _resetView: function(t) {
          var e = t && (t.pinch || t.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
        },
        _animateZoom: function(t) {
          this._setView(t.center, t.zoom, !0, t.noUpdate);
        },
        _clampZoom: function(t) {
          var e = this.options;
          return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
        },
        _setView: function(t, e, i, n) {
          var o = Math.round(e);
          this.options.maxZoom !== void 0 && o > this.options.maxZoom || this.options.minZoom !== void 0 && o < this.options.minZoom ? o = void 0 : o = this._clampZoom(o);
          var s = this.options.updateWhenZooming && o !== this._tileZoom;
          (!n || s) && (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), o !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
        },
        _setZoomTransforms: function(t, e) {
          for (var i in this._levels)
            this._setZoomTransform(this._levels[i], t, e);
        },
        _setZoomTransform: function(t, e, i) {
          var n = this._map.getZoomScale(i, t.zoom), o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
          y.any3d ? St(t.el, o, n) : F(t.el, o);
        },
        _resetGrid: function() {
          var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, o = this._map.getPixelWorldBounds(this._tileZoom);
          o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [
            Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
            Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
          ], this._wrapY = e.wrapLat && !this.options.noWrap && [
            Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
            Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
          ];
        },
        _onMoveEnd: function() {
          !this._map || this._map._animatingZoom || this._update();
        },
        _getTiledPixelBounds: function(t) {
          var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), n = e.getZoomScale(i, this._tileZoom), o = e.project(t, this._tileZoom).floor(), s = e.getSize().divideBy(n * 2);
          return new B(o.subtract(s), o.add(s));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(t) {
          var e = this._map;
          if (e) {
            var i = this._clampZoom(e.getZoom());
            if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
              var n = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(n), s = o.getCenter(), h = [], d = this.options.keepBuffer, f = new B(
                o.getBottomLeft().subtract([d, -d]),
                o.getTopRight().add([d, -d])
              );
              if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var m in this._tiles) {
                var v = this._tiles[m].coords;
                (v.z !== this._tileZoom || !f.contains(new P(v.x, v.y))) && (this._tiles[m].current = !1);
              }
              if (Math.abs(i - this._tileZoom) > 1) {
                this._setView(t, i);
                return;
              }
              for (var b = o.min.y; b <= o.max.y; b++)
                for (var A = o.min.x; A <= o.max.x; A++) {
                  var G = new P(A, b);
                  if (G.z = this._tileZoom, !!this._isValidTile(G)) {
                    var V = this._tiles[this._tileCoordsToKey(G)];
                    V ? V.current = !0 : h.push(G);
                  }
                }
              if (h.sort(function(Q, jt) {
                return Q.distanceTo(s) - jt.distanceTo(s);
              }), h.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var rt = document.createDocumentFragment();
                for (A = 0; A < h.length; A++)
                  this._addTile(h[A], rt);
                this._level.el.appendChild(rt);
              }
            }
          }
        },
        _isValidTile: function(t) {
          var e = this._map.options.crs;
          if (!e.infinite) {
            var i = this._globalTileRange;
            if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
              return !1;
          }
          if (!this.options.bounds)
            return !0;
          var n = this._tileCoordsToBounds(t);
          return U(this.options.bounds).overlaps(n);
        },
        _keyToBounds: function(t) {
          return this._tileCoordsToBounds(this._keyToTileCoords(t));
        },
        _tileCoordsToNwSe: function(t) {
          var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), o = n.add(i), s = e.unproject(n, t.z), h = e.unproject(o, t.z);
          return [s, h];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(t) {
          var e = this._tileCoordsToNwSe(t), i = new J(e[0], e[1]);
          return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(t) {
          return t.x + ":" + t.y + ":" + t.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(t) {
          var e = t.split(":"), i = new P(+e[0], +e[1]);
          return i.z = +e[2], i;
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          e && (R(e.el), delete this._tiles[t], this.fire("tileunload", {
            tile: e.el,
            coords: this._keyToTileCoords(t)
          }));
        },
        _initTile: function(t) {
          C(t, "leaflet-tile");
          var e = this.getTileSize();
          t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = w, t.onmousemove = w, y.ielt9 && this.options.opacity < 1 && nt(t, this.options.opacity);
        },
        _addTile: function(t, e) {
          var i = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), p(this._tileReady, this, t));
          this._initTile(o), this.createTile.length < 2 && Y(p(this._tileReady, this, t, null, o)), F(o, i), this._tiles[n] = {
            el: o,
            coords: t,
            current: !0
          }, e.appendChild(o), this.fire("tileloadstart", {
            tile: o,
            coords: t
          });
        },
        _tileReady: function(t, e, i) {
          e && this.fire("tileerror", {
            error: e,
            tile: i,
            coords: t
          });
          var n = this._tileCoordsToKey(t);
          i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (nt(i.el, 0), it(this._fadeFrame), this._fadeFrame = Y(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (C(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: i.el,
            coords: t
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), y.ielt9 || !this._map._fadeAnimated ? Y(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(t) {
          return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(t) {
          var e = new P(
            this._wrapX ? D(t.x, this._wrapX) : t.x,
            this._wrapY ? D(t.y, this._wrapY) : t.y
          );
          return e.z = t.z, e;
        },
        _pxBoundsToTileRange: function(t) {
          var e = this.getTileSize();
          return new B(
            t.min.unscaleBy(e).floor(),
            t.max.unscaleBy(e).ceil().subtract([1, 1])
          );
        },
        _noTilesToLoad: function() {
          for (var t in this._tiles)
            if (!this._tiles[t].loaded)
              return !1;
          return !0;
        }
      });
      function Gr(t) {
        return new fe(t);
      }
      var Vt = fe.extend({
        // @section
        // @aka TileLayer options
        options: {
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = 18
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: 18,
          // @option subdomains: String|String[] = 'abc'
          // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
          subdomains: "abc",
          // @option errorTileUrl: String = ''
          // URL to the tile image to show in place of the tile that failed to load.
          errorTileUrl: "",
          // @option zoomOffset: Number = 0
          // The zoom number used in tile URLs will be offset with this value.
          zoomOffset: 0,
          // @option tms: Boolean = false
          // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
          tms: !1,
          // @option zoomReverse: Boolean = false
          // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
          zoomReverse: !1,
          // @option detectRetina: Boolean = false
          // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
          detectRetina: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option referrerPolicy: Boolean|String = false
          // Whether the referrerPolicy attribute will be added to the tiles.
          // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
          // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
          // (e.g. to validate an API token).
          // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
          referrerPolicy: !1
        },
        initialize: function(t, e) {
          this._url = t, e = Z(this, e), e.detectRetina && y.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(t, e) {
          return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(t, e) {
          var i = document.createElement("img");
          return T(i, "load", p(this._tileOnLoad, this, e, i)), T(i, "error", p(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(t) {
          var e = {
            r: y.retina ? "@2x" : "",
            s: this._getSubdomain(t),
            x: t.x,
            y: t.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var i = this._globalTileRange.max.y - t.y;
            this.options.tms && (e.y = i), e["-y"] = i;
          }
          return Ji(this._url, c(e, this.options));
        },
        _tileOnLoad: function(t, e) {
          y.ielt9 ? setTimeout(p(t, this, null, e), 0) : t(null, e);
        },
        _tileOnError: function(t, e, i) {
          var n = this.options.errorTileUrl;
          n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
        },
        _onTileRemove: function(t) {
          t.tile.onload = null;
        },
        _getZoomForUrl: function() {
          var t = this._tileZoom, e = this.options.maxZoom, i = this.options.zoomReverse, n = this.options.zoomOffset;
          return i && (t = e - t), t + n;
        },
        _getSubdomain: function(t) {
          var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
          return this.options.subdomains[e];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
          var t, e;
          for (t in this._tiles)
            if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = w, e.onerror = w, !e.complete)) {
              e.src = Ae;
              var i = this._tiles[t].coords;
              R(e), delete this._tiles[t], this.fire("tileabort", {
                tile: e,
                coords: i
              });
            }
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          if (e)
            return e.el.setAttribute("src", Ae), fe.prototype._removeTile.call(this, t);
        },
        _tileReady: function(t, e, i) {
          if (!(!this._map || i && i.getAttribute("src") === Ae))
            return fe.prototype._tileReady.call(this, t, e, i);
        }
      });
      function Jn(t, e) {
        return new Vt(t, e);
      }
      var Qn = Vt.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
          service: "WMS",
          request: "GetMap",
          // @option layers: String = ''
          // **(required)** Comma-separated list of WMS layers to show.
          layers: "",
          // @option styles: String = ''
          // Comma-separated list of WMS styles.
          styles: "",
          // @option format: String = 'image/jpeg'
          // WMS image format (use `'image/png'` for layers with transparency).
          format: "image/jpeg",
          // @option transparent: Boolean = false
          // If `true`, the WMS service will return images with transparency.
          transparent: !1,
          // @option version: String = '1.1.1'
          // Version of the WMS service to use
          version: "1.1.1"
        },
        options: {
          // @option crs: CRS = null
          // Coordinate Reference System to use for the WMS requests, defaults to
          // map CRS. Don't change this if you're not sure what it means.
          crs: null,
          // @option uppercase: Boolean = false
          // If `true`, WMS request parameter keys will be uppercase.
          uppercase: !1
        },
        initialize: function(t, e) {
          this._url = t;
          var i = c({}, this.defaultWmsParams);
          for (var n in e)
            n in this.options || (i[n] = e[n]);
          e = Z(this, e);
          var o = e.detectRetina && y.retina ? 2 : 1, s = this.getTileSize();
          i.width = s.x * o, i.height = s.y * o, this.wmsParams = i;
        },
        onAdd: function(t) {
          this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[e] = this._crs.code, Vt.prototype.onAdd.call(this, t);
        },
        getTileUrl: function(t) {
          var e = this._tileCoordsToNwSe(t), i = this._crs, n = K(i.project(e[0]), i.project(e[1])), o = n.min, s = n.max, h = (this._wmsVersion >= 1.3 && this._crs === Fn ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","), d = Vt.prototype.getTileUrl.call(this, t);
          return d + Ki(this.wmsParams, d, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + h;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(t, e) {
          return c(this.wmsParams, t), e || this.redraw(), this;
        }
      });
      function Yr(t, e) {
        return new Qn(t, e);
      }
      Vt.WMS = Qn, Jn.wms = Yr;
      var bt = lt.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(t) {
          Z(this, t), g(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), C(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function() {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function(t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(t, e) {
          var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), o = this._map.project(this._center, e), s = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
          y.any3d ? St(this._container, s, i) : F(this._container, s);
        },
        _reset: function() {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var t in this._layers)
            this._layers[t]._reset();
        },
        _onZoomEnd: function() {
          for (var t in this._layers)
            this._layers[t]._project();
        },
        _updatePaths: function() {
          for (var t in this._layers)
            this._layers[t]._update();
        },
        _update: function() {
          var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
          this._bounds = new B(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), Xn = bt.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var t = bt.prototype.getEvents.call(this);
          return t.viewprereset = this._onViewPreReset, t;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          bt.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var t = this._container = document.createElement("canvas");
          T(t, "mousemove", this._onMouseMove, this), T(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), T(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
        },
        _destroyContainer: function() {
          it(this._redrawRequest), delete this._ctx, R(this._container), O(this._container), delete this._container;
        },
        _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            var t;
            this._redrawBounds = null;
            for (var e in this._layers)
              t = this._layers[e], t._update();
            this._redraw();
          }
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            bt.prototype._update.call(this);
            var t = this._bounds, e = this._container, i = t.getSize(), n = y.retina ? 2 : 1;
            F(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", y.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
          }
        },
        _reset: function() {
          bt.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(t) {
          this._updateDashArray(t), this._layers[g(t)] = t;
          var e = t._order = {
            layer: t,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(t) {
          this._requestRedraw(t);
        },
        _removePath: function(t) {
          var e = t._order, i = e.next, n = e.prev;
          i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[g(t)], this._requestRedraw(t);
        },
        _updatePath: function(t) {
          this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
        },
        _updateStyle: function(t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function(t) {
          if (typeof t.options.dashArray == "string") {
            var e = t.options.dashArray.split(/[, ]+/), i = [], n, o;
            for (o = 0; o < e.length; o++) {
              if (n = Number(e[o]), isNaN(n))
                return;
              i.push(n);
            }
            t.options._dashArray = i;
          } else
            t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function(t) {
          this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || Y(this._redraw, this));
        },
        _extendRedrawBounds: function(t) {
          if (t._pxBounds) {
            var e = (t.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new B(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
          }
        },
        _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
          var t = this._redrawBounds;
          if (t) {
            var e = t.getSize();
            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
          } else
            this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
        },
        _draw: function() {
          var t, e = this._redrawBounds;
          if (this._ctx.save(), e) {
            var i = e.getSize();
            this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var n = this._drawFirst; n; n = n.next)
            t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function(t, e) {
          if (this._drawing) {
            var i, n, o, s, h = t._parts, d = h.length, f = this._ctx;
            if (d) {
              for (f.beginPath(), i = 0; i < d; i++) {
                for (n = 0, o = h[i].length; n < o; n++)
                  s = h[i][n], f[n ? "lineTo" : "moveTo"](s.x, s.y);
                e && f.closePath();
              }
              this._fillStroke(f, t);
            }
          }
        },
        _updateCircle: function(t) {
          if (!(!this._drawing || t._empty())) {
            var e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
            o !== 1 && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, Math.PI * 2, !1), o !== 1 && i.restore(), this._fillStroke(i, t);
          }
        },
        _fillStroke: function(t, e) {
          var i = e.options;
          i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(t) {
          for (var e = this._map.mouseEventToLayerPoint(t), i, n, o = this._drawFirst; o; o = o.next)
            i = o.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (n = i);
          this._fireEvent(n ? [n] : !1, t);
        },
        _onMouseMove: function(t) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var e = this._map.mouseEventToLayerPoint(t);
            this._handleMouseHover(t, e);
          }
        },
        _handleMouseOut: function(t) {
          var e = this._hoveredLayer;
          e && (H(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(t, e) {
          if (!this._mouseHoverThrottled) {
            for (var i, n, o = this._drawFirst; o; o = o.next)
              i = o.layer, i.options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (C(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(p(function() {
              this._mouseHoverThrottled = !1;
            }, this), 32);
          }
        },
        _fireEvent: function(t, e, i) {
          this._map._fireDOMEvent(e, i || e.type, t);
        },
        _bringToFront: function(t) {
          var e = t._order;
          if (e) {
            var i = e.next, n = e.prev;
            if (i)
              i.prev = n;
            else
              return;
            n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
          }
        },
        _bringToBack: function(t) {
          var e = t._order;
          if (e) {
            var i = e.next, n = e.prev;
            if (n)
              n.next = i;
            else
              return;
            i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
          }
        }
      });
      function to(t) {
        return y.canvas ? new Xn(t) : null;
      }
      var pe = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch {
        }
        return function(t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), Kr = {
        _initContainer: function() {
          this._container = k("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (bt.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(t) {
          var e = t._container = pe("shape");
          C(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = pe("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[g(t)] = t;
        },
        _addPath: function(t) {
          var e = t._container;
          this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function(t) {
          var e = t._container;
          R(e), t.removeInteractiveTarget(e), delete this._layers[g(t)];
        },
        _updateStyle: function(t) {
          var e = t._stroke, i = t._fill, n = t.options, o = t._container;
          o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = pe("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = st(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = pe("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
        },
        _updateCircle: function(t) {
          var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
          this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
        },
        _setPath: function(t, e) {
          t._path.v = e;
        },
        _bringToFront: function(t) {
          Ht(t._container);
        },
        _bringToBack: function(t) {
          $t(t._container);
        }
      }, qe = y.vml ? pe : on, _e = bt.extend({
        _initContainer: function() {
          this._container = qe("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = qe("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          R(this._container), O(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            bt.prototype._update.call(this);
            var t = this._bounds, e = t.getSize(), i = this._container;
            (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), F(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(t) {
          var e = t._path = qe("path");
          t.options.className && C(e, t.options.className), t.options.interactive && C(e, "leaflet-interactive"), this._updateStyle(t), this._layers[g(t)] = t;
        },
        _addPath: function(t) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
        },
        _removePath: function(t) {
          R(t._path), t.removeInteractiveTarget(t._path), delete this._layers[g(t)];
        },
        _updatePath: function(t) {
          t._project(), t._update();
        },
        _updateStyle: function(t) {
          var e = t._path, i = t.options;
          e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
        },
        _updatePoly: function(t, e) {
          this._setPath(t, rn(t._parts, e));
        },
        _updateCircle: function(t) {
          var e = t._point, i = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || i, o = "a" + i + "," + n + " 0 1,0 ", s = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + i * 2 + ",0 " + o + -i * 2 + ",0 ";
          this._setPath(t, s);
        },
        _setPath: function(t, e) {
          t._path.setAttribute("d", e);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(t) {
          Ht(t._path);
        },
        _bringToBack: function(t) {
          $t(t._path);
        }
      });
      y.vml && _e.include(Kr);
      function eo(t) {
        return y.svg || y.vml ? new _e(t) : null;
      }
      E.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(t) {
          var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
          return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
        },
        _getPaneRenderer: function(t) {
          if (t === "overlayPane" || t === void 0)
            return !1;
          var e = this._paneRenderers[t];
          return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
        },
        _createRenderer: function(t) {
          return this.options.preferCanvas && to(t) || eo(t);
        }
      });
      var io = Ft.extend({
        initialize: function(t, e) {
          Ft.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(t) {
          return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs: function(t) {
          return t = U(t), [
            t.getSouthWest(),
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast()
          ];
        }
      });
      function Jr(t, e) {
        return new io(t, e);
      }
      _e.create = qe, _e.pointsToPath = rn, yt.geometryToLayer = De, yt.coordsToLatLng = Ri, yt.coordsToLatLngs = Ne, yt.latLngToCoords = Di, yt.latLngsToCoords = He, yt.getFeature = qt, yt.asFeature = $e, E.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var no = dt.extend({
        initialize: function(t) {
          this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
        },
        addHooks: function() {
          T(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          O(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          R(this._pane), delete this._pane;
        },
        _resetState: function() {
          this._resetStateTimeout = 0, this._moved = !1;
        },
        _clearDeferredResetState: function() {
          this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function(t) {
          if (!t.shiftKey || t.which !== 1 && t.button !== 1)
            return !1;
          this._clearDeferredResetState(), this._resetState(), se(), bi(), this._startPoint = this._map.mouseEventToContainerPoint(t), T(document, {
            contextmenu: kt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(t) {
          this._moved || (this._moved = !0, this._box = k("div", "leaflet-zoom-box", this._container), C(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
          var e = new B(this._point, this._startPoint), i = e.getSize();
          F(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
        },
        _finish: function() {
          this._moved && (R(this._box), H(this._container, "leaflet-crosshair")), ae(), wi(), O(document, {
            contextmenu: kt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(t) {
          if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(p(this._resetState, this), 0);
            var e = new J(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
          }
        },
        _onKeyDown: function(t) {
          t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
        }
      });
      E.addInitHook("addHandler", "boxZoom", no), E.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var oo = dt.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(t) {
          var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, o = t.originalEvent.shiftKey ? i - n : i + n;
          e.options.doubleClickZoom === "center" ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
        }
      });
      E.addInitHook("addHandler", "doubleClickZoom", oo), E.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: !0,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: !0,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // px/s^2
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: 1 / 0,
        // px/s
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: !1,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0
      });
      var ro = dt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var t = this._map;
            this._draggable = new Lt(t._mapPane, t._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
          }
          C(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          H(this._map._container, "leaflet-grab"), H(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        moving: function() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
          var t = this._map;
          if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var e = U(this._map.options.maxBounds);
            this._offsetLimit = K(
              this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
              this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
            ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else
            this._offsetLimit = null;
          t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(t) {
          if (this._map.options.inertia) {
            var e = this._lastTime = +/* @__PURE__ */ new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(i), this._times.push(e), this._prunePositions(e);
          }
          this._map.fire("move", t).fire("drag", t);
        },
        _prunePositions: function(t) {
          for (; this._positions.length > 1 && t - this._times[0] > 50; )
            this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(t, e) {
          return t - (t - e) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (!(!this._viscosity || !this._offsetLimit)) {
            var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
          }
        },
        _onPreDragWrap: function() {
          var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, s = (n + e + i) % t - e - i, h = Math.abs(o + i) < Math.abs(s + i) ? o : s;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = h;
        },
        _onDragEnd: function(t) {
          var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
          if (e.fire("dragend", t), n)
            e.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var o = this._lastPos.subtract(this._positions[0]), s = (this._lastTime - this._times[0]) / 1e3, h = i.easeLinearity, d = o.multiplyBy(h / s), f = d.distanceTo([0, 0]), m = Math.min(i.inertiaMaxSpeed, f), v = d.multiplyBy(m / f), b = m / (i.inertiaDeceleration * h), A = v.multiplyBy(-b / 2).round();
            !A.x && !A.y ? e.fire("moveend") : (A = e._limitOffset(A, e.options.maxBounds), Y(function() {
              e.panBy(A, {
                duration: b,
                easeLinearity: h,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      E.addInitHook("addHandler", "dragging", ro), E.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var so = dt.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
          this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
        },
        addHooks: function() {
          var t = this._map._container;
          t.tabIndex <= 0 && (t.tabIndex = "0"), T(t, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), O(this._map._container, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.off({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        _onMouseDown: function() {
          if (!this._focused) {
            var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft;
            this._map._container.focus(), window.scrollTo(n, i);
          }
        },
        _onFocus: function() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function(t) {
          var e = this._panKeys = {}, i = this.keyCodes, n, o;
          for (n = 0, o = i.left.length; n < o; n++)
            e[i.left[n]] = [-1 * t, 0];
          for (n = 0, o = i.right.length; n < o; n++)
            e[i.right[n]] = [t, 0];
          for (n = 0, o = i.down.length; n < o; n++)
            e[i.down[n]] = [0, t];
          for (n = 0, o = i.up.length; n < o; n++)
            e[i.up[n]] = [0, -1 * t];
        },
        _setZoomDelta: function(t) {
          var e = this._zoomKeys = {}, i = this.keyCodes, n, o;
          for (n = 0, o = i.zoomIn.length; n < o; n++)
            e[i.zoomIn[n]] = t;
          for (n = 0, o = i.zoomOut.length; n < o; n++)
            e[i.zoomOut[n]] = -t;
        },
        _addHooks: function() {
          T(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          O(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var e = t.keyCode, i = this._map, n;
            if (e in this._panKeys) {
              if (!i._panAnim || !i._panAnim._inProgress)
                if (n = this._panKeys[e], t.shiftKey && (n = x(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(x(n), i.options.maxBounds)), i.options.worldCopyJump) {
                  var o = i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));
                  i.panTo(o);
                } else
                  i.panBy(n);
            } else if (e in this._zoomKeys)
              i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
            else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
              i.closePopup();
            else
              return;
            kt(t);
          }
        }
      });
      E.addInitHook("addHandler", "keyboard", so), E.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: !0,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
      });
      var ao = dt.extend({
        addHooks: function() {
          T(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          O(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(t) {
          var e = kn(t), i = this._map.options.wheelDebounceTime;
          this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(p(this._performZoom, this), n), kt(t);
        },
        _performZoom: function() {
          var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
          t._stop();
          var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, s = i ? Math.ceil(o / i) * i : o, h = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
          this._delta = 0, this._startTime = null, h && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + h) : t.setZoomAround(this._lastMousePos, e + h));
        }
      });
      E.addInitHook("addHandler", "scrollWheelZoom", ao);
      var Qr = 600;
      E.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: y.touchNative && y.safari && y.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var lo = dt.extend({
        addHooks: function() {
          T(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          O(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(t) {
          if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
            var e = t.touches[0];
            this._startPos = this._newPos = new P(e.clientX, e.clientY), this._holdTimeout = setTimeout(p(function() {
              this._cancel(), this._isTapValid() && (T(document, "touchend", j), T(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
            }, this), Qr), T(document, "touchend touchcancel contextmenu", this._cancel, this), T(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function t() {
          O(document, "touchend", j), O(document, "touchend touchcancel", t);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), O(document, "touchend touchcancel contextmenu", this._cancel, this), O(document, "touchmove", this._onMove, this);
        },
        _onMove: function(t) {
          var e = t.touches[0];
          this._newPos = new P(e.clientX, e.clientY);
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(t, e) {
          var i = new MouseEvent(t, {
            bubbles: !0,
            cancelable: !0,
            view: window,
            // detail: 1,
            screenX: e.screenX,
            screenY: e.screenY,
            clientX: e.clientX,
            clientY: e.clientY
            // button: 2,
            // buttons: 2
          });
          i._simulated = !0, e.target.dispatchEvent(i);
        }
      });
      E.addInitHook("addHandler", "tapHold", lo), E.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: y.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var ho = dt.extend({
        addHooks: function() {
          C(this._map._container, "leaflet-touch-zoom"), T(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          H(this._map._container, "leaflet-touch-zoom"), O(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(t) {
          var e = this._map;
          if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
            var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), T(document, "touchmove", this._onTouchMove, this), T(document, "touchend touchcancel", this._onTouchEnd, this), j(t);
          }
        },
        _onTouchMove: function(t) {
          if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
            var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), o = i.distanceTo(n) / this._startDist;
            if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && o > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
              if (this._center = this._startLatLng, o === 1)
                return;
            } else {
              var s = i._add(n)._divideBy(2)._subtract(this._centerPoint);
              if (o === 1 && s.x === 0 && s.y === 0)
                return;
              this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
            }
            this._moved || (e._moveStart(!0, !1), this._moved = !0), it(this._animRequest);
            var h = p(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = Y(h, this, !0), j(t);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, it(this._animRequest), O(document, "touchmove", this._onTouchMove, this), O(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      E.addInitHook("addHandler", "touchZoom", ho), E.BoxZoom = no, E.DoubleClickZoom = oo, E.Drag = ro, E.Keyboard = so, E.ScrollWheelZoom = ao, E.TapHold = lo, E.TouchZoom = ho, a.Bounds = B, a.Browser = y, a.CRS = mt, a.Canvas = Xn, a.Circle = Bi, a.CircleMarker = Re, a.Class = _t, a.Control = at, a.DivIcon = Kn, a.DivOverlay = ft, a.DomEvent = mr, a.DomUtil = pr, a.Draggable = Lt, a.Evented = ee, a.FeatureGroup = gt, a.GeoJSON = yt, a.GridLayer = fe, a.Handler = dt, a.Icon = Ut, a.ImageOverlay = We, a.LatLng = z, a.LatLngBounds = J, a.Layer = lt, a.LayerGroup = Wt, a.LineUtil = Er, a.Map = E, a.Marker = Be, a.Mixin = Pr, a.Path = Tt, a.Point = P, a.PolyUtil = Lr, a.Polygon = Ft, a.Polyline = vt, a.Popup = Ue, a.PosAnimation = zn, a.Projection = Mr, a.Rectangle = io, a.Renderer = bt, a.SVG = _e, a.SVGOverlay = Yn, a.TileLayer = Vt, a.Tooltip = Fe, a.Transformation = li, a.Util = Bo, a.VideoOverlay = Gn, a.bind = p, a.bounds = K, a.canvas = to, a.circle = Dr, a.circleMarker = Rr, a.control = ue, a.divIcon = jr, a.extend = c, a.featureGroup = Ir, a.geoJSON = jn, a.geoJson = $r, a.gridLayer = Gr, a.icon = Zr, a.imageOverlay = Wr, a.latLng = S, a.latLngBounds = U, a.layerGroup = Or, a.map = gr, a.marker = Br, a.point = x, a.polygon = Hr, a.polyline = Nr, a.popup = qr, a.rectangle = Jr, a.setOptions = Z, a.stamp = g, a.svg = eo, a.svgOverlay = Fr, a.tileLayer = Jn, a.tooltip = Vr, a.transformation = ie, a.version = u, a.videoOverlay = Ur;
      var Xr = window.L;
      a.noConflict = function() {
        return window.L = Xr, this;
      }, window.L = a;
    }));
  })(ye, ye.exports)), ye.exports;
}
var qs = Fs();
const Gt = /* @__PURE__ */ Ws(qs), Ui = /* @__PURE__ */ new Map();
async function Vs(l, r) {
  const u = (await import(
    /* @vite-ignore */
    r
  ))?.default, c = Ui.size, _ = `vga-plugin-${js(l)}-${c}`;
  Gs(_, u) && Ui.set(l, _);
}
function js(l = "") {
  return l.split(/-|\W|_/).filter(Boolean).join("-").toLowerCase();
}
function Gs(l, r) {
  if (!customElements.get(l) && (customElements.define(l, r), customElements.get(l)))
    return !0;
  throw new Error("Fail to register the plugin.");
}
const Ys = ":host{--leaflet-control-layer-toggle-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);--leaflet-control-margin: 10px;--leaflet-control-padding: 8px;--leaflet-control-border-radius: 5px;--leaflet-control-border: none;--leaflet-control-background: hsl(0, 0%, 100%, .9);--leaflet-control-inner-background: hsl(0, 0%, 100%);--leaflet-control-backdrop-filter: blur(20px);--leaflet-control-box-shadow: 0 2px 5px 0 hsl(0, 0%, 0%, .35);--leaflet-control-box-shadow-far: 0 2px 10px 0 hsl(0, 0%, 0%, .35);--leaflet-control-box-shadow-very-far: 0 2px 20px 0 hsl(0, 0%, 0%, .35);--sidebar-width: 30rem;display:block;position:absolute;inset:0;font-family:Arial,Helvetica,sans-serif}#map{height:100%;width:100%;z-index:0}#map :focus{outline:initial}dialog{position:fixed;margin:auto;outline:none}dialog:focus{outline:none}dialog::backdrop{background:#00000059}dialog.leaflet-control{position:fixed;margin:auto}#large-plugin-presenter{border:none;padding:0;margin:50px;height:auto;width:auto;opacity:0;transition:opacity .3s}#large-plugin-presenter[open]{opacity:1}#large-plugin-presenter .inner-container{display:flex;flex-direction:column;position:absolute;inset:0;margin:0;overflow:hidden;box-shadow:var(--leaflet-control-box-shadow-very-far)}#large-plugin-presenter .header{flex:0 0 auto;padding:0 var(--leaflet-control-padding);min-height:1.2rem;font-size:1.2rem;font-weight:700;-webkit-user-select:none;user-select:none}#large-plugin-presenter .close-button{font-size:1.2rem;appearance:none;border:none;outline:none;background:none;float:right;cursor:pointer}#large-plugin-presenter .close-button:hover{transform:scale(1.2)}#large-plugin-presenter .close-button:active{transform:scale(.9)}#large-plugin-presenter .content{flex:1;background:var(--leaflet-control-inner-background);padding:var(--leaflet-control-padding);overflow:hidden}#large-plugin-presenter .content>*{display:block}#loading{padding:1rem}#loading .spinner{border:4px solid hsl(0,0%,95%);border-top:4px solid hsl(204,70%,53%);border-radius:50%;width:30px;height:30px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.leaflet-control{border-radius:var(--leaflet-control-border-radius);background:var(--leaflet-control-background);-webkit-backdrop-filter:var(--leaflet-control-backdrop-filter);backdrop-filter:var(--leaflet-control-backdrop-filter);margin:var(--leaflet-control-margin)}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:var(--leaflet-control-border);box-shadow:var(--leaflet-control-box-shadow)}", Ks = '.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';
var Js = Object.defineProperty, Qs = Object.getOwnPropertyDescriptor, Rt = (l, r, a, u) => {
  for (var c = u > 1 ? void 0 : u ? Qs(r, a) : r, _ = l.length - 1, p; _ >= 0; _--)
    (p = l[_]) && (c = (u ? p(r, a, c) : p(c)) || c);
  return u && c && Js(r, a, c), c;
};
let wt = class extends ht {
  constructor() {
    super(...arguments), this.initialized = !1, this.mapElementRef = ge(), this.loadingDialogRef = ge(), this.directoryPermissionDialogRef = ge(), this.largePresenterDialogRef = ge(), this.hiddenPluginContainerRef = ge(), this.pluginDefinitionAndInstanceMap = /* @__PURE__ */ new Map(), this.dataIdentifierAndProviderMap = /* @__PURE__ */ new Map(), this.pluginLoadingPool = [], this.pluginSharedStates = {}, this.viewTransitionStyleSheet = new CSSStyleSheet(), this.allowModifyingPageInfo = !1, this.useViewTransitions = !1, this.viewTransitionSelector = "::part(vga-plugin-container)", this.notifyPluginLoadingHandler = () => {
      let l = this.pluginLoadingPool.findIndex(
        (r) => typeof r > "u"
      );
      return l < 0 && (l = this.pluginLoadingPool.length), this.pluginLoadingPool[l] = !0, this.updateLoadingStatus(), () => {
        delete this.pluginLoadingPool[l], this.updateLoadingStatus();
      };
    }, this.updatePluginSharedStatesHandler = (l) => {
      this.pluginSharedStates = l, this.applyToPlugins(
        (r) => r.sharedStates = this.pluginSharedStates
      );
    }, this.addMapLayerHandler = (l, r, a, u = !1) => {
      if (this.layerControl)
        switch (a) {
          case "base-layer":
            this.layerControl.addBaseLayer(l, r);
            break;
          case "overlay":
            this.layerControl.addOverlay(l, r);
            break;
        }
      u && this.map?.addLayer(l);
    }, this.removeMapLayerHandler = (l) => {
      l && (this.layerControl?.removeLayer(l), l.remove());
    }, this.checkIfDataProviderRegisteredHandler = (l) => this.dataIdentifierAndProviderMap.has(l), this.queryDataHandler = (l, r) => {
      let [a, u] = l.split(/:(.+)/);
      return this.dataIdentifierAndProviderMap.get(a)?.queryDataCallback(a, u, r);
    };
  }
  get pluginLargePresenterContentInfo() {
    return this._pluginLargePresenterContentInfo;
  }
  set pluginLargePresenterContentInfo(l) {
    const r = this._pluginLargePresenterContentInfo;
    this._pluginLargePresenterContentInfo = l, l ? this.largePresenterDialogRef.value?.showModal() : this.largePresenterDialogRef.value?.close(), this.requestUpdate("pluginLargePresenterContentInfo", r);
  }
  updated() {
    !this.initialized && this.config && (this.initialized = !0, this.initializeVis());
  }
  connectedCallback() {
    if (super.connectedCallback(), this.useViewTransitions) {
      const l = (
        /* css */
        `
      ${this.viewTransitionSelector} {
        view-transition-name: vga-plugin-container;
      }
      `
      );
      this.viewTransitionStyleSheet.replaceSync(l), document.adoptedStyleSheets = [
        ...document.adoptedStyleSheets,
        this.viewTransitionStyleSheet
      ];
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
      (l) => l !== this.viewTransitionStyleSheet
    );
  }
  render() {
    return zo(
      this.config,
      () => pt`
        <div id="map" ${ve(this.mapElementRef)}></div>
        <div
          id="invisible-plugin-container"
          hidden
          ${ve(this.hiddenPluginContainerRef)}
        ></div>
        <dialog
          id="large-plugin-presenter"
          class="leaflet-control"
          ${ve(this.largePresenterDialogRef)}
        >
          <div class="inner-container">
            <div class="header">
              ${this.pluginLargePresenterContentInfo?.header}
              <button
                class="close-button"
                @click=${this.dismissPluginLargePresenter}
              >
                🗙
              </button>
            </div>
            <div class="content">
              ${this.pluginLargePresenterContentInfo?.pluginInstance}
            </div>
          </div>
        </dialog>
        <dialog
          id="loading"
          class="leaflet-control"
          ${ve(this.loadingDialogRef)}
        >
          <div>
            <div class="spinner"></div>
          </div>
        </dialog>
        <dialog
          id="directory-permission-dialog"
          class="leaflet-control"
          ${ve(this.directoryPermissionDialogRef)}
        >
          <div>
            The permission to access local files is needed. Please select a root
            directory by click the button below.
          </div>
          <hr />
          <vga-ui-button
            @click=${async () => {
        try {
          if (this.rootDirectoryHandle = await window.showDirectoryPicker(), this.rootDirectoryHandle) {
            this.directoryPermissionDialogRef.value?.close(), this.askForFileAccessResolver?.();
            return;
          }
          alert(
            "Fail to get the directory permission, please try again."
          );
        } catch {
          alert(
            "Fail to get the directory permission, please try again."
          );
        }
      }}
            >Select Root Directory</vga-ui-button
          >
        </dialog>
      `,
      () => pt`<div
          style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"
        >
          Waiting for config to be set...
        </div>`
    );
  }
  async initializeVis() {
    this.allowModifyingPageInfo && (this.config?.pageTitle && (document.title = this.config.pageTitle), this.config?.favicon && document.head.querySelector('link[rel~="icon"]')?.setAttribute("href", this.config.favicon)), !this.map && this.mapElementRef.value && (this.initializeMap(this.mapElementRef.value), this.initializeSidebar(), await this.importPlugins(), this.config?.accessLocalFiles && (this.directoryPermissionDialogRef.value?.showModal(), await new Promise(
      (l) => this.askForFileAccessResolver = l
    )), this.loadPlugins(), this.updateLoadingStatus(), this.applyToPlugins(
      (l) => l.hostFirstLoadedCallback?.()
    ));
  }
  initializeMap(l) {
    this.map = Gt.map(l, {
      preferCanvas: this.config?.preferCanvas
    }), this.updateView(this.config?.view), this.initializeLayerControl(), this.map.zoomControl.setPosition("topright");
  }
  initializeSidebar() {
    this.sidebar?.remove();
    const l = Gt.Control.extend({
      onAdd: () => (this.sidebarElement = Gt.DomUtil.create(
        "vga-core-sidebar"
      ), this.sidebarElement.classList.add("leaflet-control-layers"), this.stopEventPropagationToTheMapElement(this.sidebarElement), this.sidebarElement)
    });
    this.sidebar = new l({ position: "topleft" }), this.map?.addControl(this.sidebar);
  }
  initializeMainContainerControl(l) {
    const r = Gt.Control.extend({
      onAdd: () => (l.classList.add("leaflet-control-layers"), this.stopEventPropagationToTheMapElement(l), l)
    }), a = new r({
      position: "bottomright"
    });
    this.map?.addControl(a);
  }
  initializeLayerControl() {
    this.layerControl?.remove(), this.layerControl = Gt.control.layers(), this.map?.addControl(this.layerControl);
  }
  loadPlugins() {
    try {
      for (const l of this.config?.plugins ?? [])
        this.loadPlugin(l);
    } catch (l) {
      throw alert(l?.message ?? "Fail to load the plugins."), l;
    }
  }
  loadPlugin(l) {
    const r = this.createPluginInstance(l);
    r && (this.assignPluginInstanceIntoContainer(l, r), this.pluginDefinitionAndInstanceMap.set(l, r));
  }
  assignPluginInstanceIntoContainer(l, r) {
    switch (l.container) {
      case "hidden": {
        this.hiddenPluginContainerRef.value?.append(r);
        break;
      }
      case "main": {
        const a = document.createElement(
          "vga-core-main-item-container"
        );
        a.showContentInlargeViewCallback = (u) => this.presentPluginInLargeView(u), a.header = r.obtainHeaderCallback(), a.containerProps = l.containerProps, a.append(r), this.initializeMainContainerControl(a);
        break;
      }
      case "sidebar": {
        const a = document.createElement(
          "vga-core-sidebar-item-container"
        );
        a.showContentInlargeViewCallback = (u) => this.presentPluginInLargeView(u), a.header = r.obtainHeaderCallback(), a.containerProps = l.containerProps, a.append(r), this.sidebarElement?.append(a);
        break;
      }
    }
  }
  createPluginInstance(l) {
    const r = Ui.get(l.import);
    if (r) {
      const a = document.createElement(r), u = {
        notifyLoadingDelegate: this.notifyPluginLoadingHandler,
        checkIfPluginIsInTheLargePresenterDelegate: () => this.checkIfPluginInLargePresenter(a),
        sharedStates: this.pluginSharedStates,
        updateSharedStatesDelegate: this.updatePluginSharedStatesHandler,
        leaflet: Gt,
        mapInstance: this.map,
        addMapLayerDelegate: this.addMapLayerHandler,
        removeMapLayerDelegate: this.removeMapLayerHandler,
        checkIfDataProviderRegisteredDelegate: this.checkIfDataProviderRegisteredHandler,
        queryDataDelegate: this.queryDataHandler,
        rootDirectoryHandle: this.rootDirectoryHandle,
        configBaseUrl: this.configBaseUrl,
        ...l.props
      };
      return Object.assign(a, u), this.registerPluginAsDataProviderIfValid(a), a;
    }
  }
  async importPlugins() {
    try {
      for (const [l, r] of Object.entries(this.config?.imports ?? {})) {
        const a = new URL(r, this.configBaseUrl ?? document.baseURI).href;
        await Vs(l, a);
      }
    } catch (l) {
      throw alert(l?.message ?? "Fail to import the plugins."), l;
    }
  }
  updateView(l) {
    this.map?.setView(l?.center || [0, 0], l?.zoom || 0, l?.options);
  }
  stopEventPropagationToTheMapElement(l) {
    l.addEventListener("mouseover", () => {
      document.body.classList.contains("leaflet-dragging") || this.map?.dragging.disable(), this.map?.scrollWheelZoom.disable(), this.map?.doubleClickZoom.disable();
    }), l.addEventListener("mouseup", () => {
      this.map?.dragging.enabled() && this.map?.dragging.disable();
    }), l.addEventListener("mouseout", () => {
      this.map?.dragging.enable(), this.map?.scrollWheelZoom.enable(), this.map?.doubleClickZoom.enable();
    });
  }
  updateLoadingStatus() {
    this.pluginLoadingPool.some((l) => l) ? this.loadingDialogRef.value?.showModal() : this.loadingDialogRef.value?.close();
  }
  applyToPlugins(l) {
    for (let r of this.pluginDefinitionAndInstanceMap.values() ?? [])
      l(r);
  }
  registerPluginAsDataProviderIfValid(l) {
    l.obtainDataProviderIdentifiersCallback && l.obtainDataProviderIdentifiersCallback()?.forEach((a) => {
      if (this.dataIdentifierAndProviderMap.has(a)) {
        const u = `You cannot register multiple data providers for data identifier "${a}".`;
        throw alert(u), Error(u);
      }
      if (!a) {
        const u = "The data identifier for the data provider is not valid.";
        throw alert(u), Error(u);
      }
      this.dataIdentifierAndProviderMap.set(
        a,
        l
      );
    });
  }
  presentPluginInLargeView(l) {
    if (this.pluginLargePresenterContentInfo)
      return;
    const r = () => {
      this.pluginLargePresenterContentInfo = {
        header: l?.obtainHeaderCallback(),
        pluginInstance: l,
        originalContainer: l?.parentElement
      };
    };
    if ("startViewTransition" in document) {
      l?.parentElement?.part.add("vga-plugin-container"), document.startViewTransition(() => {
        l?.parentElement?.part.remove("vga-plugin-container"), this.largePresenterDialogRef.value?.part.add("vga-plugin-container"), r();
      }).finished.then(() => {
        this.largePresenterDialogRef.value?.part.remove(
          "vga-plugin-container"
        );
      });
      return;
    }
    r();
  }
  dismissPluginLargePresenter() {
    const { originalContainer: l, pluginInstance: r } = this.pluginLargePresenterContentInfo ?? {}, a = () => {
      this.pluginLargePresenterContentInfo = void 0, l?.replaceChildren(r ?? "");
    };
    if ("startViewTransition" in document) {
      this.largePresenterDialogRef.value?.part.add("vga-plugin-container"), document.startViewTransition(() => {
        this.largePresenterDialogRef.value?.part.remove(
          "vga-plugin-container"
        ), l?.part.add("vga-plugin-container"), a();
      }).finished.then(() => {
        l?.part.remove("vga-plugin-container");
      });
      return;
    }
    a();
  }
  checkIfPluginInLargePresenter(l) {
    return this.pluginLargePresenterContentInfo?.pluginInstance === l;
  }
};
wt.styles = [At([Ks]), At([Ys])];
Rt([
  zs()
], wt.prototype, "pluginLargePresenterContentInfo", 1);
Rt([
  I({ type: Object })
], wt.prototype, "config", 2);
Rt([
  I({
    type: Boolean,
    attribute: "allow-modifying-page-info",
    reflect: !0
  })
], wt.prototype, "allowModifyingPageInfo", 2);
Rt([
  I({
    type: Boolean,
    attribute: "use-view-transitions",
    reflect: !0
  })
], wt.prototype, "useViewTransitions", 2);
Rt([
  I({
    type: String,
    attribute: "view-transition-selector",
    reflect: !0
  }),
  I()
], wt.prototype, "viewTransitionSelector", 2);
Rt([
  I({
    type: String,
    attribute: "config-base-url",
    reflect: !0
  }),
  I()
], wt.prototype, "configBaseUrl", 2);
wt = Rt([
  Bt("vga-core")
], wt);
const Xs = ':host{display:block;margin:var(--leaflet-control-margin);height:calc(100vh - var(--leaflet-control-margin) * 2)}[part=container]{overflow:hidden;height:100%;width:var(--sidebar-width);transition:width .3s;border-radius:inherit}[part=inner-container]{display:flex;flex-direction:column;height:100%;overflow:hidden;width:var(--sidebar-width)}[part=toggle]{display:block;position:absolute;appearance:none;top:50%;left:calc(100% + var(--leaflet-control-margin));height:2rem;width:1rem;border:var(--leaflet-control-border);border-radius:var(--leaflet-control-border-radius);box-shadow:var(--leaflet-control-box-shadow);cursor:pointer;background-color:#fff;transition-property:box-shadow,transform;transition-duration:.3s}[part=toggle]:hover{transform:scale(1.5);box-shadow:var(--leaflet-control-box-shadow-far)}[part=toggle]:active{box-shadow:inset var(--leaflet-control-box-shadow-far)}#toggle:not(:checked)~[part=container]{width:0}[part=toggle]:after{content:"<";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:700}#toggle:not(:checked)~[part=toggle]:after{content:">"}';
var ta = Object.defineProperty, ea = Object.getOwnPropertyDescriptor, Oo = (l, r, a, u) => {
  for (var c = u > 1 ? void 0 : u ? ea(r, a) : r, _ = l.length - 1, p; _ >= 0; _--)
    (p = l[_]) && (c = (u ? p(r, a, c) : p(c)) || c);
  return u && c && ta(r, a, c), c;
};
let Je = class extends ht {
  constructor() {
    super(...arguments), this.active = !0;
  }
  render() {
    return pt`
      <input
        id="toggle"
        hidden
        type="checkbox"
        .checked=${this.active}
        title=${this.active ? "Hide Sidebar" : "Show Sidebar"}
        @change=${({ currentTarget: l }) => this.active = l.checked}
      />
      <label
        part="toggle"
        for="toggle"
        title=${this.active ? "Hide Sidebar" : "Show Sidebar"}
      ></label>
      <div part="container">
        <div part="inner-container">
          <div style="overflow: auto; flex: 0 0 auto; maxHeight: 50%;">
            <slot name="top"></slot>
          </div>
          <div style="overflow-y: auto; ">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
Je.styles = [At([Xs])];
Oo([
  I({ type: Boolean, reflect: !0 })
], Je.prototype, "active", 2);
Je = Oo([
  Bt("vga-core-sidebar")
], Je);
const ia = ':host{display:block}:host([slot="top"]){margin:var(--leaflet-control-margin)}[part=header]{font-size:1.2rem;font-weight:700;-webkit-user-select:none;user-select:none}[part=content]{background:var(--leaflet-control-inner-background);border:var(--leaflet-control-border);border-radius:var(--leaflet-control-border-radius);box-shadow:var(--leaflet-control-box-shadow);max-width:100%;overflow:hidden;padding:var(--leaflet-control-padding)}::slotted(*){display:block}vga-ui-collapse::part(header){margin:0 var(--leaflet-control-margin)}vga-ui-collapse::part(content){margin:var(--leaflet-control-margin)}#show-in-large-view-button{font-size:1.2rem;appearance:none;border:none;outline:none;background:none;cursor:pointer}#show-in-large-view-button:hover{transform:scale(1.2)}#show-in-large-view-button:active{transform:scale(.9)}';
var na = Object.defineProperty, oa = Object.getOwnPropertyDescriptor, ei = (l, r, a, u) => {
  for (var c = u > 1 ? void 0 : u ? oa(r, a) : r, _ = l.length - 1, p; _ >= 0; _--)
    (p = l[_]) && (c = (u ? p(r, a, c) : p(c)) || c);
  return u && c && na(r, a, c), c;
};
let Qt = class extends ht {
  updated() {
    this.setAttribute("slot", this.containerProps?.slot ?? "");
  }
  render() {
    return this.containerProps?.slot === "top" ? this.renderContent() : pt`
          <vga-ui-collapse>${this.renderContent()}</vga-ui-collapse>
        `;
  }
  renderContent() {
    return pt`
      <div
        part="header"
        slot=${this.containerProps?.slot === "top" ? "" : "header"}
      >
        <span>${this.header}</span>
        <button
          id="show-in-large-view-button"
          @click=${(l) => {
      l.preventDefault(), this.showContentInlargeViewCallback?.(this.firstChild);
    }}
        >
          ⛶
        </button>
      </div>
      <div part="content">
        <slot></slot>
      </div>
    `;
  }
};
Qt.styles = [At([ia])];
ei([
  I({ reflect: !0 })
], Qt.prototype, "header", 2);
ei([
  I()
], Qt.prototype, "containerProps", 2);
ei([
  I()
], Qt.prototype, "showContentInlargeViewCallback", 2);
Qt = ei([
  Bt("vga-core-sidebar-item-container")
], Qt);
const ra = ":host{display:block;max-height:50vh;max-width:calc(100vw - var(--sidebar-width) - var(--leaflet-control-margin) * 3 - 1.5rem);overflow:hidden}[part=header]{font-size:1.2rem;font-weight:700;-webkit-user-select:none;user-select:none}[part=content]{background:var(--leaflet-control-inner-background);border:var(--leaflet-control-border);box-shadow:var(--leaflet-control-box-shadow);max-width:100%;padding:var(--leaflet-control-padding);overflow:hidden}::slotted(*){display:block}vga-ui-collapse::part(header){margin:0 var(--leaflet-control-margin)}#show-in-large-view-button{font-size:1.2rem;appearance:none;border:none;outline:none;background:none;cursor:pointer}#show-in-large-view-button:hover{transform:scale(1.2)}#show-in-large-view-button:active{transform:scale(.9)}";
var sa = Object.defineProperty, aa = Object.getOwnPropertyDescriptor, ii = (l, r, a, u) => {
  for (var c = u > 1 ? void 0 : u ? aa(r, a) : r, _ = l.length - 1, p; _ >= 0; _--)
    (p = l[_]) && (c = (u ? p(r, a, c) : p(c)) || c);
  return u && c && sa(r, a, c), c;
};
let Xt = class extends ht {
  render() {
    return pt`
      <style>
        :host {
          width: ${this.containerProps?.width ?? "auto"};
        }
      </style>
      <vga-ui-collapse>
        <div part="header" slot="header">
          <span>${this.header}</span>
          <button
            id="show-in-large-view-button"
            @click=${(l) => {
      l.preventDefault(), this.showContentInlargeViewCallback?.(
        this.firstChild
      );
    }}
          >
            ⛶
          </button>
        </div>
        <div part="content">
          <slot></slot>
        </div>
      </vga-ui-collapse>
    `;
  }
};
Xt.styles = [At([ra])];
ii([
  I({ reflect: !0 })
], Xt.prototype, "header", 2);
ii([
  I()
], Xt.prototype, "containerProps", 2);
ii([
  I()
], Xt.prototype, "showContentInlargeViewCallback", 2);
Xt = ii([
  Bt("vga-core-main-item-container")
], Xt);
const be = (l) => l ?? $, la = ':host{--box-shadow-shape: 0 1px 2px 0;--box-shadow-shape-hover: 0 1px 5px 0;--primary-color: hsl(218, 100%, 61%);--shadow-color: hsl(0, 0%, 0%, .5);--main-color: hsl(0, 0%, 0%);--contrast-color: hsl(0, 0%, 100%);-webkit-tap-highlight-color:transparent;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;user-select:none;padding:5px;border-radius:5px;overflow:hidden;transition:box-shadow .3s}:host([disabled]){pointer-events:none;filter:contrast(.6)}:host([variant="round"]){border-radius:50%}:host([variant="solid"]),:host([variant="round"]){color:var(--contrast-color);background:var(--primary-color);box-shadow:var(--box-shadow-shape) var(--shadow-color)}:host([variant="solid"]:hover),:host([variant="round"]:hover){background:var(--primary-color);box-shadow:var(--box-shadow-shape-hover) var(--shadow-color)}:host([variant="solid"]:hover:active),:host([variant="round"]:hover:active){background:var(--primary-color);box-shadow:inset var(--box-shadow-shape) var(--shadow-color)}:host([variant="hollow"]){color:var(--primary-color);box-shadow:var(--box-shadow-shape) var(--primary-color)}:host([variant="hollow"]:hover){box-shadow:var(--box-shadow-shape-hover) var(--primary-color)}:host([variant="hollow"]:active){box-shadow:inset var(--box-shadow-shape) var(--primary-color)}:host([variant="clear"]){color:var(--primary-color)}:host([variant="clear"]:hover){box-shadow:inset 0 0 20px -10px var(--primary-color)}:host([variant="clear"]:active){box-shadow:inset 0 0 20px 0 var(--primary-color)}:host([variant="link"]){color:var(--main-color)}:host([variant="link"]:hover){color:var(--primary-color)}:host([variant="link"]:active){color:var(--primary-color);filter:brightness(.8)}#href-handler{display:block;position:absolute;inset:0}#container{display:grid;position:relative;grid-template-columns:1fr auto 1fr;grid-template-rows:1fr auto 1fr;pointer-events:none}#container>slot{display:block;grid-column:2;grid-row:2}';
var ha = Object.defineProperty, ua = Object.getOwnPropertyDescriptor, ni = (l, r, a, u) => {
  for (var c = u > 1 ? void 0 : u ? ua(r, a) : r, _ = l.length - 1, p; _ >= 0; _--)
    (p = l[_]) && (c = (u ? p(r, a, c) : p(c)) || c);
  return u && c && ha(r, a, c), c;
};
let te = class extends ht {
  constructor() {
    super(...arguments), this.variant = "solid", this.disabled = !1;
  }
  render() {
    return pt`
      ${zo(this.href, () => this.renderHrefHandler())}
      <div id="container">
        <slot></slot>
      </div>
    `;
  }
  renderHrefHandler() {
    return pt` <a id="href-handler" href=${be(this.href)}></a> `;
  }
};
te.styles = [At([la])];
ni([
  I({ reflect: !0 })
], te.prototype, "variant", 2);
ni([
  I({ reflect: !0 })
], te.prototype, "href", 2);
ni([
  I({ reflect: !0, type: Boolean })
], te.prototype, "disabled", 2);
te = ni([
  Bt("vga-ui-button")
], te);
const ca = ':host{display:block}[part=content-container]{position:relative;box-sizing:border-box;overflow:hidden;max-height:100vh;transition:max-height .3s}#collapse-toggle:checked~[part=content-container]{max-height:0}[part=header-container]{position:relative;display:block;cursor:pointer;transition:transform .3s}[part=header-container]:hover{-webkit-backdrop-filter:contrast(.7);backdrop-filter:contrast(.7)}[part=header-container]:active{-webkit-backdrop-filter:contrast(.5);backdrop-filter:contrast(.5)}[part=header]:before{content:"";display:inline-block;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid currentColor;vertical-align:middle;margin:0 .7rem 0 .25rem;transform:translateY(-50%) rotate(90deg);transition:transform .3s}#collapse-toggle:checked~[part=header-container]>[part=header]:before{transform:translateY(-50%)}::slotted([slot="header"]){display:inline-block}::slotted(:not([slot])){display:block}';
var da = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, Io = (l, r, a, u) => {
  for (var c = u > 1 ? void 0 : u ? fa(r, a) : r, _ = l.length - 1, p; _ >= 0; _--)
    (p = l[_]) && (c = (u ? p(r, a, c) : p(c)) || c);
  return u && c && da(r, a, c), c;
};
let Qe = class extends ht {
  constructor() {
    super(...arguments), this.collapsed = !1;
  }
  render() {
    return pt`
      <input
        id="collapse-toggle"
        type="checkbox"
        hidden
        .checked=${this.collapsed}
        @change=${({ currentTarget: l }) => this.collapsed = l.checked}
      />
      <label part="header-container" for="collapse-toggle">
        <div part="header">
          <slot name="header"></slot>
        </div>
      </label>
      <div part="content-container">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
Qe.styles = [At([ca])];
Io([
  I({ type: Boolean, reflect: !0 })
], Qe.prototype, "collapsed", 2);
Qe = Io([
  Bt("vga-ui-collapse")
], Qe);
const pa = ":host{--box-shadow-shape: 0 1px 2px 0;--box-shadow-shape-hover: 0 1px 5px 0;--primary-color: hsl(218, 100%, 61%);--shadow-color: hsl(0, 0%, 0%, .5);--main-color: hsl(0, 0%, 0%);--contrast-color: hsl(0, 0%, 100%);--background-color: hsl(0, 0%, 100%);-webkit-tap-highlight-color:transparent;display:inline-block;position:relative;cursor:default;padding:5px;border-radius:5px;background:var(--background-color);box-shadow:inset var(--box-shadow-shape) var(--shadow-color);transition:box-shadow .3s}:host(:hover){box-shadow:inset var(--box-shadow-shape-hover) var(--shadow-color)}:host(:focus-within){box-shadow:inset var(--box-shadow-shape-hover) var(--shadow-color),inset 0 -1px 5px 0 var(--primary-color)}:host([disabled]){pointer-events:none;filter:contrast(.6)}[part=native]{width:100%;outline:none;border:none;font-size:1em;background:none;padding:0 5px;caret-color:var(--primary-color)}";
var _a = Object.defineProperty, ma = Object.getOwnPropertyDescriptor, Dt = (l, r, a, u) => {
  for (var c = u > 1 ? void 0 : u ? ma(r, a) : r, _ = l.length - 1, p; _ >= 0; _--)
    (p = l[_]) && (c = (u ? p(r, a, c) : p(c)) || c);
  return u && c && _a(r, a, c), c;
};
let xt = class extends ht {
  constructor() {
    super(...arguments), this.type = "text", this.disabled = !1, this.handleOnChangeEvent = (l) => {
      l.preventDefault(), l.stopPropagation(), this.value = l.currentTarget.value, this.dispatchEvent(
        new CustomEvent("change", {
          detail: { value: this.value, innerEvent: l },
          bubbles: !0,
          composed: !0,
          cancelable: !0
        })
      );
    }, this.handleOnInputEvent = (l) => {
      l.preventDefault(), l.stopPropagation(), this.dispatchEvent(
        new CustomEvent("input", {
          detail: { innerEvent: l },
          bubbles: !0,
          composed: !0,
          cancelable: !0
        })
      );
    };
  }
  render() {
    return pt`
      <div>
        <slot name="before"></slot>
        <input
          part="native"
          type=${this.type}
          min=${be(this.min)}
          max=${be(this.min)}
          value=${be(this.value)}
          ?disabled=${this.disabled}
          placeholder=${be(this.placeholder)}
          @change=${this.handleOnChangeEvent}
          @input=${this.handleOnInputEvent}
        />
        <slot name="after"></slot>
      </div>
    `;
  }
};
xt.styles = [At([pa])];
Dt([
  I({ reflect: !0 })
], xt.prototype, "type", 2);
Dt([
  I({ reflect: !0 })
], xt.prototype, "value", 2);
Dt([
  I({ reflect: !0, type: Number })
], xt.prototype, "min", 2);
Dt([
  I({ reflect: !0, type: Number })
], xt.prototype, "max", 2);
Dt([
  I({ reflect: !0 })
], xt.prototype, "placeholder", 2);
Dt([
  I({ reflect: !0, type: Boolean })
], xt.prototype, "disabled", 2);
xt = Dt([
  Bt("vga-ui-input")
], xt);
export {
  wt as VGACore,
  Xt as VGACoreMainItemContainer,
  Je as VGACoreSidebar,
  Qt as VGACoreSidebarItemContainer,
  te as VGAUIButton,
  Qe as VGAUICollapse,
  xt as VGAUIInput
};

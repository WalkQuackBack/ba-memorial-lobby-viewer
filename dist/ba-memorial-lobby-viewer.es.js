/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t$3 = globalThis, e$5 = t$3.ShadowRoot && (t$3.ShadyCSS === void 0 || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$5 = /* @__PURE__ */ new WeakMap(), n$2 = class {
	constructor(b, w, O) {
		if (this._$cssResult$ = !0, O !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = b, this.t = w;
	}
	get styleSheet() {
		let b = this.o, D = this.t;
		if (e$5 && b === void 0) {
			let w = D !== void 0 && D.length === 1;
			w && (b = o$5.get(D)), b === void 0 && ((this.o = b = new CSSStyleSheet()).replaceSync(this.cssText), w && o$5.set(D, b));
		}
		return b;
	}
	toString() {
		return this.cssText;
	}
}, r$3 = (b) => new n$2(typeof b == "string" ? b : b + "", void 0, s$2), i$1 = (b, ...w) => new n$2(b.length === 1 ? b[0] : w.reduce(((w, D, O) => w + ((b) => {
	if (!0 === b._$cssResult$) return b.cssText;
	if (typeof b == "number") return b;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + b + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(D) + b[O + 1]), b[0]), b, s$2), S$1 = (D, O) => {
	if (e$5) D.adoptedStyleSheets = O.map(((b) => b instanceof CSSStyleSheet ? b : b.styleSheet));
	else for (let w of O) {
		let O = document.createElement("style"), F = t$3.litNonce;
		F !== void 0 && O.setAttribute("nonce", F), O.textContent = w.cssText, D.appendChild(O);
	}
}, c$1 = e$5 ? (b) => b : (b) => b instanceof CSSStyleSheet ? ((b) => {
	let w = "";
	for (let D of b.cssRules) w += D.cssText;
	return r$3(w);
})(b) : b;
function asyncGeneratorStep(b, w, D, O, F, U, W) {
	try {
		var G = b[U](W), K = G.value;
	} catch (b) {
		D(b);
		return;
	}
	G.done ? w(K) : Promise.resolve(K).then(O, F);
}
function _asyncToGenerator(b) {
	return function() {
		var w = this, D = arguments;
		return new Promise(function(O, F) {
			var U = b.apply(w, D);
			function W(b) {
				asyncGeneratorStep(U, O, F, W, G, "next", b);
			}
			function G(b) {
				asyncGeneratorStep(U, O, F, W, G, "throw", b);
			}
			W(void 0);
		});
	};
}
var _Symbol, _a$reactiveElementVer, { is: i$4, defineProperty: e$6, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$4, getOwnPropertySymbols: o$4, getPrototypeOf: n$3 } = Object, a$1 = globalThis, c$2 = a$1.trustedTypes, l$1 = c$2 ? c$2.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (b, w) => b, u = {
	toAttribute(b, w) {
		switch (w) {
			case Boolean:
				b = b ? l$1 : null;
				break;
			case Object:
			case Array: b = b == null ? b : JSON.stringify(b);
		}
		return b;
	},
	fromAttribute(b, w) {
		let D = b;
		switch (w) {
			case Boolean:
				D = b !== null;
				break;
			case Number:
				D = b === null ? null : Number(b);
				break;
			case Object:
			case Array: try {
				D = JSON.parse(b);
			} catch (b) {
				D = null;
			}
		}
		return D;
	}
}, f = (b, w) => !i$4(b, w), b$1 = {
	attribute: !0,
	type: String,
	converter: u,
	reflect: !1,
	useDefault: !1,
	hasChanged: f
};
(_Symbol = Symbol).metadata != null || (_Symbol.metadata = Symbol("metadata")), a$1.litPropertyMetadata != null || (a$1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var y = class extends HTMLElement {
	static addInitializer(b) {
		var w;
		this._$Ei(), ((w = this.l) == null ? this.l = [] : w).push(b);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(b, w = b$1) {
		if (w.state && (w.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(b) && ((w = Object.create(w)).wrapped = !0), this.elementProperties.set(b, w), !w.noAccessor) {
			let D = Symbol(), O = this.getPropertyDescriptor(b, D, w);
			O !== void 0 && e$6(this.prototype, b, O);
		}
	}
	static getPropertyDescriptor(b, w, D) {
		var O;
		let { get: F, set: U } = (O = h$1(this.prototype, b)) == null ? {
			get() {
				return this[w];
			},
			set(b) {
				this[w] = b;
			}
		} : O;
		return {
			get: F,
			set(w) {
				let O = F == null ? void 0 : F.call(this);
				U == null || U.call(this, w), this.requestUpdate(b, O, D);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(b) {
		var w;
		return (w = this.elementProperties.get(b)) == null ? b$1 : w;
	}
	static _$Ei() {
		if (this.hasOwnProperty(d$1("elementProperties"))) return;
		let b = n$3(this);
		b.finalize(), b.l !== void 0 && (this.l = [...b.l]), this.elementProperties = new Map(b.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(d$1("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
			let b = this.properties, w = [...r$4(b), ...o$4(b)];
			for (let D of w) this.createProperty(D, b[D]);
		}
		let b = this[Symbol.metadata];
		if (b !== null) {
			let w = litPropertyMetadata.get(b);
			if (w !== void 0) for (let [b, D] of w) this.elementProperties.set(b, D);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [b, w] of this.elementProperties) {
			let D = this._$Eu(b, w);
			D !== void 0 && this._$Eh.set(D, b);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(b) {
		let w = [];
		if (Array.isArray(b)) {
			let D = new Set(b.flat(Infinity).reverse());
			for (let b of D) w.unshift(c$1(b));
		} else b !== void 0 && w.push(c$1(b));
		return w;
	}
	static _$Eu(b, w) {
		let D = w.attribute;
		return !1 === D ? void 0 : typeof D == "string" ? D : typeof b == "string" ? b.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		var b;
		this._$ES = new Promise(((b) => this.enableUpdating = b)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (b = this.constructor.l) == null || b.forEach(((b) => b(this)));
	}
	addController(b) {
		var w, D;
		((w = this._$EO) == null ? this._$EO = /* @__PURE__ */ new Set() : w).add(b), this.renderRoot !== void 0 && this.isConnected && ((D = b.hostConnected) == null || D.call(b));
	}
	removeController(b) {
		var w;
		(w = this._$EO) == null || w.delete(b);
	}
	_$E_() {
		let b = /* @__PURE__ */ new Map(), w = this.constructor.elementProperties;
		for (let D of w.keys()) this.hasOwnProperty(D) && (b.set(D, this[D]), delete this[D]);
		b.size > 0 && (this._$Ep = b);
	}
	createRenderRoot() {
		var b;
		let w = (b = this.shadowRoot) == null ? this.attachShadow(this.constructor.shadowRootOptions) : b;
		return S$1(w, this.constructor.elementStyles), w;
	}
	connectedCallback() {
		var b;
		this.renderRoot != null || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (b = this._$EO) == null || b.forEach(((b) => {
			var w;
			return (w = b.hostConnected) == null ? void 0 : w.call(b);
		}));
	}
	enableUpdating(b) {}
	disconnectedCallback() {
		var b;
		(b = this._$EO) == null || b.forEach(((b) => {
			var w;
			return (w = b.hostDisconnected) == null ? void 0 : w.call(b);
		}));
	}
	attributeChangedCallback(b, w, D) {
		this._$AK(b, D);
	}
	_$ET(b, w) {
		let D = this.constructor.elementProperties.get(b), O = this.constructor._$Eu(b, D);
		if (O !== void 0 && !0 === D.reflect) {
			var F;
			let U = (((F = D.converter) == null ? void 0 : F.toAttribute) === void 0 ? u : D.converter).toAttribute(w, D.type);
			this._$Em = b, U == null ? this.removeAttribute(O) : this.setAttribute(O, U), this._$Em = null;
		}
	}
	_$AK(b, w) {
		let D = this.constructor, O = D._$Eh.get(b);
		if (O !== void 0 && this._$Em !== O) {
			var F, U, W;
			let b = D.getPropertyOptions(O), G = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((F = b.converter) == null ? void 0 : F.fromAttribute) === void 0 ? u : b.converter;
			this._$Em = O;
			let K = G.fromAttribute(w, b.type);
			this[O] = (U = K == null ? (W = this._$Ej) == null ? void 0 : W.get(O) : K) == null ? K : U, this._$Em = null;
		}
	}
	requestUpdate(b, w, D) {
		if (b !== void 0) {
			var O, F;
			let U = this.constructor, W = this[b];
			if (D != null || (D = U.getPropertyOptions(b)), !(((O = D.hasChanged) == null ? f : O)(W, w) || D.useDefault && D.reflect && W === ((F = this._$Ej) == null ? void 0 : F.get(b)) && !this.hasAttribute(U._$Eu(b, D)))) return;
			this.C(b, w, D);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(b, w, { useDefault: D, reflect: O, wrapped: F }, U) {
		var W, G, K;
		D && !((W = this._$Ej) == null ? this._$Ej = /* @__PURE__ */ new Map() : W).has(b) && (this._$Ej.set(b, (G = U == null ? w : U) == null ? this[b] : G), !0 !== F || U !== void 0) || (this._$AL.has(b) || (this.hasUpdated || D || (w = void 0), this._$AL.set(b, w)), !0 === O && this._$Em !== b && ((K = this._$Eq) == null ? this._$Eq = /* @__PURE__ */ new Set() : K).add(b));
	}
	_$EP() {
		var b = this;
		return _asyncToGenerator(function* () {
			b.isUpdatePending = !0;
			try {
				yield b._$ES;
			} catch (b) {
				Promise.reject(b);
			}
			let w = b.scheduleUpdate();
			return w != null && (yield w), !b.isUpdatePending;
		})();
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot != null || (this.renderRoot = this.createRenderRoot()), this._$Ep) {
				for (let [b, w] of this._$Ep) this[b] = w;
				this._$Ep = void 0;
			}
			let b = this.constructor.elementProperties;
			if (b.size > 0) for (let [w, D] of b) {
				let { wrapped: b } = D, O = this[w];
				!0 !== b || this._$AL.has(w) || O === void 0 || this.C(w, void 0, D, O);
			}
		}
		let b = !1, w = this._$AL;
		try {
			var D;
			b = this.shouldUpdate(w), b ? (this.willUpdate(w), (D = this._$EO) == null || D.forEach(((b) => {
				var w;
				return (w = b.hostUpdate) == null ? void 0 : w.call(b);
			})), this.update(w)) : this._$EM();
		} catch (w) {
			throw b = !1, this._$EM(), w;
		}
		b && this._$AE(w);
	}
	willUpdate(b) {}
	_$AE(b) {
		var w;
		(w = this._$EO) == null || w.forEach(((b) => {
			var w;
			return (w = b.hostUpdated) == null ? void 0 : w.call(b);
		})), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(b)), this.updated(b);
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
	shouldUpdate(b) {
		return !0;
	}
	update(b) {
		this._$Eq && (this._$Eq = this._$Eq.forEach(((b) => this._$ET(b, this[b])))), this._$EM();
	}
	updated(b) {}
	firstUpdated(b) {}
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null || p$1({ ReactiveElement: y }), ((_a$reactiveElementVer = a$1.reactiveElementVersions) == null ? a$1.reactiveElementVersions = [] : _a$reactiveElementVer).push("2.1.1");
var _t$litHtmlVersions, t$2 = globalThis, i$3 = t$2.trustedTypes, s$1 = i$3 ? i$3.createPolicy("lit-html", { createHTML: (b) => b }) : void 0, e$4 = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o$3 = "?" + h, n$1 = `<${o$3}>`, r$2 = document, l = () => r$2.createComment(""), c = (b) => b === null || typeof b != "object" && typeof b != "function", a = Array.isArray, u$1 = (b) => a(b) || typeof (b == null ? void 0 : b[Symbol.iterator]) == "function", d = "[ 	\n\f\r]", f$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, x = ((b) => (w, ...D) => ({
	_$litType$: b,
	strings: w,
	values: D
}))(1), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), C = r$2.createTreeWalker(r$2, 129);
function P(b, w) {
	if (!a(b) || !b.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return s$1 === void 0 ? w : s$1.createHTML(w);
}
var V = (b, w) => {
	let D = b.length - 1, O = [], F, U = w === 2 ? "<svg>" : w === 3 ? "<math>" : "", W = f$1;
	for (let w = 0; w < D; w++) {
		var G;
		let D = b[w], K, q, J = -1, Y = 0;
		for (; Y < D.length && (W.lastIndex = Y, q = W.exec(D), q !== null);) Y = W.lastIndex, W === f$1 ? q[1] === "!--" ? W = v : q[1] === void 0 ? q[2] === void 0 ? q[3] !== void 0 && (W = m) : ($.test(q[2]) && (F = RegExp("</" + q[2], "g")), W = m) : W = _ : W === m ? q[0] === ">" ? (W = (G = F) == null ? f$1 : G, J = -1) : q[1] === void 0 ? J = -2 : (J = W.lastIndex - q[2].length, K = q[1], W = q[3] === void 0 ? m : q[3] === "\"" ? g : p) : W === g || W === p ? W = m : W === v || W === _ ? W = f$1 : (W = m, F = void 0);
		let X = W === m && b[w + 1].startsWith("/>") ? " " : "";
		U += W === f$1 ? D + n$1 : J >= 0 ? (O.push(K), D.slice(0, J) + e$4 + D.slice(J) + h + X) : D + h + (J === -2 ? w : X);
	}
	return [P(b, U + (b[D] || "<?>") + (w === 2 ? "</svg>" : w === 3 ? "</math>" : "")), O];
}, N = class b {
	constructor({ strings: w, _$litType$: D }, O) {
		let F;
		this.parts = [];
		let U = 0, W = 0, G = w.length - 1, K = this.parts, [q, J] = V(w, D);
		if (this.el = b.createElement(q, O), C.currentNode = this.el.content, D === 2 || D === 3) {
			let b = this.el.content.firstChild;
			b.replaceWith(...b.childNodes);
		}
		for (; (F = C.nextNode()) !== null && K.length < G;) {
			if (F.nodeType === 1) {
				if (F.hasAttributes()) for (let b of F.getAttributeNames()) if (b.endsWith(e$4)) {
					let w = J[W++], D = F.getAttribute(b).split(h), O = /([.?@])?(.*)/.exec(w);
					K.push({
						type: 1,
						index: U,
						name: O[2],
						strings: D,
						ctor: O[1] === "." ? H : O[1] === "?" ? I : O[1] === "@" ? L : k
					}), F.removeAttribute(b);
				} else b.startsWith(h) && (K.push({
					type: 6,
					index: U
				}), F.removeAttribute(b));
				if ($.test(F.tagName)) {
					let b = F.textContent.split(h), w = b.length - 1;
					if (w > 0) {
						F.textContent = i$3 ? i$3.emptyScript : "";
						for (let D = 0; D < w; D++) F.append(b[D], l()), C.nextNode(), K.push({
							type: 2,
							index: ++U
						});
						F.append(b[w], l());
					}
				}
			} else if (F.nodeType === 8) if (F.data === o$3) K.push({
				type: 2,
				index: U
			});
			else {
				let b = -1;
				for (; (b = F.data.indexOf(h, b + 1)) !== -1;) K.push({
					type: 7,
					index: U
				}), b += h.length - 1;
			}
			U++;
		}
	}
	static createElement(b, w) {
		let D = r$2.createElement("template");
		return D.innerHTML = b, D;
	}
};
function S(b, w, D = b, O) {
	var F, U, W;
	if (w === T) return w;
	let G = O === void 0 ? D._$Cl : (F = D._$Co) == null ? void 0 : F[O], K = c(w) ? void 0 : w._$litDirective$;
	return (G == null ? void 0 : G.constructor) !== K && (G == null || (U = G._$AO) == null || U.call(G, !1), K === void 0 ? G = void 0 : (G = new K(b), G._$AT(b, D, O)), O === void 0 ? D._$Cl = G : ((W = D._$Co) == null ? D._$Co = [] : W)[O] = G), G !== void 0 && (w = S(b, G._$AS(b, w.values), G, O)), w;
}
var M = class {
	constructor(b, w) {
		this._$AV = [], this._$AN = void 0, this._$AD = b, this._$AM = w;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(b) {
		var w;
		let { el: { content: D }, parts: O } = this._$AD, F = ((w = b == null ? void 0 : b.creationScope) == null ? r$2 : w).importNode(D, !0);
		C.currentNode = F;
		let U = C.nextNode(), W = 0, G = 0, K = O[0];
		for (; K !== void 0;) {
			if (W === K.index) {
				let w;
				K.type === 2 ? w = new R(U, U.nextSibling, this, b) : K.type === 1 ? w = new K.ctor(U, K.name, K.strings, this, b) : K.type === 6 && (w = new z(U, this, b)), this._$AV.push(w), K = O[++G];
			}
			W !== (K == null ? void 0 : K.index) && (U = C.nextNode(), W++);
		}
		return C.currentNode = r$2, F;
	}
	p(b) {
		let w = 0;
		for (let D of this._$AV) D !== void 0 && (D.strings === void 0 ? D._$AI(b[w]) : (D._$AI(b, D, w), w += D.strings.length - 2)), w++;
	}
}, R = class b {
	get _$AU() {
		var b, w;
		return (b = (w = this._$AM) == null ? void 0 : w._$AU) == null ? this._$Cv : b;
	}
	constructor(b, w, D, O) {
		var F;
		this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = b, this._$AB = w, this._$AM = D, this.options = O, this._$Cv = (F = O == null ? void 0 : O.isConnected) == null ? !0 : F;
	}
	get parentNode() {
		let b = this._$AA.parentNode, w = this._$AM;
		return w !== void 0 && (b == null ? void 0 : b.nodeType) === 11 && (b = w.parentNode), b;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(b, w = this) {
		b = S(this, b, w), c(b) ? b === E || b == null || b === "" ? (this._$AH !== E && this._$AR(), this._$AH = E) : b !== this._$AH && b !== T && this._(b) : b._$litType$ === void 0 ? b.nodeType === void 0 ? u$1(b) ? this.k(b) : this._(b) : this.T(b) : this.$(b);
	}
	O(b) {
		return this._$AA.parentNode.insertBefore(b, this._$AB);
	}
	T(b) {
		this._$AH !== b && (this._$AR(), this._$AH = this.O(b));
	}
	_(b) {
		this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = b : this.T(r$2.createTextNode(b)), this._$AH = b;
	}
	$(b) {
		var w;
		let { values: D, _$litType$: O } = b, F = typeof O == "number" ? this._$AC(b) : (O.el === void 0 && (O.el = N.createElement(P(O.h, O.h[0]), this.options)), O);
		if (((w = this._$AH) == null ? void 0 : w._$AD) === F) this._$AH.p(D);
		else {
			let b = new M(F, this), w = b.u(this.options);
			b.p(D), this.T(w), this._$AH = b;
		}
	}
	_$AC(b) {
		let w = A.get(b.strings);
		return w === void 0 && A.set(b.strings, w = new N(b)), w;
	}
	k(w) {
		a(this._$AH) || (this._$AH = [], this._$AR());
		let D = this._$AH, O, F = 0;
		for (let U of w) F === D.length ? D.push(O = new b(this.O(l()), this.O(l()), this, this.options)) : O = D[F], O._$AI(U), F++;
		F < D.length && (this._$AR(O && O._$AB.nextSibling, F), D.length = F);
	}
	_$AR(b = this._$AA.nextSibling, w) {
		var D;
		for ((D = this._$AP) == null || D.call(this, !1, !0, w); b !== this._$AB;) {
			let w = b.nextSibling;
			b.remove(), b = w;
		}
	}
	setConnected(b) {
		var w;
		this._$AM === void 0 && (this._$Cv = b, (w = this._$AP) == null || w.call(this, b));
	}
}, k = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(b, w, D, O, F) {
		this.type = 1, this._$AH = E, this._$AN = void 0, this.element = b, this.name = w, this._$AM = O, this.options = F, D.length > 2 || D[0] !== "" || D[1] !== "" ? (this._$AH = Array(D.length - 1).fill(/* @__PURE__ */ new String()), this.strings = D) : this._$AH = E;
	}
	_$AI(b, w = this, D, O) {
		let F = this.strings, U = !1;
		if (F === void 0) b = S(this, b, w, 0), U = !c(b) || b !== this._$AH && b !== T, U && (this._$AH = b);
		else {
			var W;
			let O = b, G, K;
			for (b = F[0], G = 0; G < F.length - 1; G++) K = S(this, O[D + G], w, G), K === T && (K = this._$AH[G]), U || (U = !c(K) || K !== this._$AH[G]), K === E ? b = E : b !== E && (b += ((W = K) == null ? "" : W) + F[G + 1]), this._$AH[G] = K;
		}
		U && !O && this.j(b);
	}
	j(b) {
		b === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, b == null ? "" : b);
	}
}, H = class extends k {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(b) {
		this.element[this.name] = b === E ? void 0 : b;
	}
}, I = class extends k {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(b) {
		this.element.toggleAttribute(this.name, !!b && b !== E);
	}
}, L = class extends k {
	constructor(b, w, D, O, F) {
		super(b, w, D, O, F), this.type = 5;
	}
	_$AI(b, w = this) {
		var D;
		if ((b = (D = S(this, b, w, 0)) == null ? E : D) === T) return;
		let O = this._$AH, F = b === E && O !== E || b.capture !== O.capture || b.once !== O.once || b.passive !== O.passive, U = b !== E && (O === E || F);
		F && this.element.removeEventListener(this.name, this, O), U && this.element.addEventListener(this.name, this, b), this._$AH = b;
	}
	handleEvent(b) {
		var w, D;
		typeof this._$AH == "function" ? this._$AH.call((w = (D = this.options) == null ? void 0 : D.host) == null ? this.element : w, b) : this._$AH.handleEvent(b);
	}
}, z = class {
	constructor(b, w, D) {
		this.element = b, this.type = 6, this._$AN = void 0, this._$AM = w, this.options = D;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(b) {
		S(this, b);
	}
}, j = t$2.litHtmlPolyfillSupport;
j == null || j(N, R), ((_t$litHtmlVersions = t$2.litHtmlVersions) == null ? t$2.litHtmlVersions = [] : _t$litHtmlVersions).push("3.3.1");
var B = (b, w, D) => {
	var O;
	let F = (O = D == null ? void 0 : D.renderBefore) == null ? w : O, U = F._$litPart$;
	if (U === void 0) {
		var W;
		let b = (W = D == null ? void 0 : D.renderBefore) == null ? null : W;
		F._$litPart$ = U = new R(w.insertBefore(l(), b), b, void 0, D == null ? {} : D);
	}
	return U._$AI(b), U;
}, _s$litElementHydrateS, _s$litElementVersions, s = globalThis, i = class extends y {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		var b;
		let w = super.createRenderRoot();
		return (b = this.renderOptions).renderBefore != null || (b.renderBefore = w.firstChild), w;
	}
	update(b) {
		let w = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(b), this._$Do = B(w, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		var b;
		super.connectedCallback(), (b = this._$Do) == null || b.setConnected(!0);
	}
	disconnectedCallback() {
		var b;
		super.disconnectedCallback(), (b = this._$Do) == null || b.setConnected(!1);
	}
	render() {
		return T;
	}
};
i._$litElement$ = !0, i.finalized = !0, (_s$litElementHydrateS = s.litElementHydrateSupport) == null || _s$litElementHydrateS.call(s, { LitElement: i });
var o$2 = s.litElementPolyfillSupport;
o$2 == null || o$2({ LitElement: i }), ((_s$litElementVersions = s.litElementVersions) == null ? s.litElementVersions = [] : _s$litElementVersions).push("4.2.1");
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t = (b) => (w, D) => {
	D === void 0 ? customElements.define(b, w) : D.addInitializer((() => {
		customElements.define(b, w);
	}));
}, o$1 = {
	attribute: !0,
	type: String,
	converter: u,
	reflect: !1,
	hasChanged: f
}, r$1 = (b = o$1, w, D) => {
	let { kind: O, metadata: F } = D, U = globalThis.litPropertyMetadata.get(F);
	if (U === void 0 && globalThis.litPropertyMetadata.set(F, U = /* @__PURE__ */ new Map()), O === "setter" && ((b = Object.create(b)).wrapped = !0), U.set(D.name, b), O === "accessor") {
		let { name: O } = D;
		return {
			set(D) {
				let F = w.get.call(this);
				w.set.call(this, D), this.requestUpdate(O, F, b);
			},
			init(w) {
				return w !== void 0 && this.C(O, void 0, b, w), w;
			}
		};
	}
	if (O === "setter") {
		let { name: O } = D;
		return function(D) {
			let F = this[O];
			w.call(this, D), this.requestUpdate(O, F, b);
		};
	}
	throw Error("Unsupported decorator location: " + O);
};
function n(b) {
	return (w, D) => typeof D == "object" ? r$1(b, w, D) : ((b, w, D) => {
		let O = w.hasOwnProperty(D);
		return w.constructor.createProperty(D, b), O ? Object.getOwnPropertyDescriptor(w, D) : void 0;
	})(b, w, D);
}
function _typeof(b) {
	"@babel/helpers - typeof";
	return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
		return typeof b;
	} : function(b) {
		return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
	}, _typeof(b);
}
function toPrimitive(b, w) {
	if (_typeof(b) != "object" || !b) return b;
	var D = b[Symbol.toPrimitive];
	if (D !== void 0) {
		var O = D.call(b, w || "default");
		if (_typeof(O) != "object") return O;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (w === "string" ? String : Number)(b);
}
function toPropertyKey(b) {
	var w = toPrimitive(b, "string");
	return _typeof(w) == "symbol" ? w : w + "";
}
function _defineProperty(b, w, D) {
	return (w = toPropertyKey(w)) in b ? Object.defineProperty(b, w, {
		value: D,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : b[w] = D, b;
}
function ownKeys(b, w) {
	var D = Object.keys(b);
	if (Object.getOwnPropertySymbols) {
		var O = Object.getOwnPropertySymbols(b);
		w && (O = O.filter(function(w) {
			return Object.getOwnPropertyDescriptor(b, w).enumerable;
		})), D.push.apply(D, O);
	}
	return D;
}
function _objectSpread2(b) {
	for (var w = 1; w < arguments.length; w++) {
		var D = arguments[w] == null ? {} : arguments[w];
		w % 2 ? ownKeys(Object(D), !0).forEach(function(w) {
			_defineProperty(b, w, D[w]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(D)) : ownKeys(Object(D)).forEach(function(w) {
			Object.defineProperty(b, w, Object.getOwnPropertyDescriptor(D, w));
		});
	}
	return b;
}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ function r(b) {
	return n(_objectSpread2(_objectSpread2({}, b), {}, {
		state: !0,
		attribute: !1
	}));
}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var e$3 = (b, w, D) => (D.configurable = !0, D.enumerable = !0, Reflect.decorate && typeof w != "object" && Object.defineProperty(b, w, D), D);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ function e(b, w) {
	return (D, O, F) => {
		let U = (w) => {
			var D, O;
			return (D = (O = w.renderRoot) == null ? void 0 : O.querySelector(b)) == null ? null : D;
		};
		if (w) {
			let { get: b, set: w } = typeof O == "object" ? D : F == null ? (() => {
				let b = Symbol();
				return {
					get() {
						return this[b];
					},
					set(w) {
						this[b] = w;
					}
				};
			})() : F;
			return e$3(D, O, { get() {
				let D = b.call(this);
				return D === void 0 && (D = U(this), (D !== null || this.hasUpdated) && w.call(this, D)), D;
			} });
		}
		return e$3(D, O, { get() {
			return U(this);
		} });
	};
}
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function* o(b, w) {
	if (b !== void 0) {
		let D = 0;
		for (let O of b) yield w(O, D++);
	}
}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t$1 = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, e$2 = (b) => (...w) => ({
	_$litDirective$: b,
	values: w
}), i$2 = class {
	constructor(b) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(b, w, D) {
		this._$Ct = b, this._$AM = w, this._$Ci = D;
	}
	_$AS(b, w) {
		return this.update(b, w);
	}
	update(b, w) {
		return this.render(...w);
	}
}, e$1 = e$2(class extends i$2 {
	constructor(b) {
		var w;
		if (super(b), b.type !== t$1.ATTRIBUTE || b.name !== "class" || ((w = b.strings) == null ? void 0 : w.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(b) {
		return " " + Object.keys(b).filter(((w) => b[w])).join(" ") + " ";
	}
	update(b, [w]) {
		if (this.st === void 0) {
			var D;
			for (let O in this.st = /* @__PURE__ */ new Set(), b.strings !== void 0 && (this.nt = new Set(b.strings.join(" ").split(/\s/).filter(((b) => b !== "")))), w) w[O] && !((D = this.nt) != null && D.has(O)) && this.st.add(O);
			return this.render(w);
		}
		let O = b.element.classList;
		for (let b of this.st) b in w || (O.remove(b), this.st.delete(b));
		for (let b in w) {
			var F;
			let D = !!w[b];
			D === this.st.has(b) || (F = this.nt) != null && F.has(b) || (D ? (O.add(b), this.st.add(b)) : (O.remove(b), this.st.delete(b)));
		}
		return T;
	}
}), _Color, _MathUtils, StringSet = class {
	constructor() {
		_defineProperty(this, "entries", {}), _defineProperty(this, "size", 0);
	}
	add(b) {
		let w = this.entries[b];
		return this.entries[b] = !0, w ? !1 : (this.size++, !0);
	}
	addAll(b) {
		let w = this.size;
		for (var D = 0, O = b.length; D < O; D++) this.add(b[D]);
		return w != this.size;
	}
	contains(b) {
		return this.entries[b];
	}
	clear() {
		this.entries = {}, this.size = 0;
	}
}, Color = class b {
	constructor(b = 0, w = 0, D = 0, O = 0) {
		_defineProperty(this, "r", void 0), _defineProperty(this, "g", void 0), _defineProperty(this, "b", void 0), _defineProperty(this, "a", void 0), this.r = b, this.g = w, this.b = D, this.a = O;
	}
	set(b, w, D, O) {
		return this.r = b, this.g = w, this.b = D, this.a = O, this.clamp();
	}
	setFromColor(b) {
		return this.r = b.r, this.g = b.g, this.b = b.b, this.a = b.a, this;
	}
	setFromString(b) {
		return b = b.charAt(0) == "#" ? b.substr(1) : b, this.r = parseInt(b.substr(0, 2), 16) / 255, this.g = parseInt(b.substr(2, 2), 16) / 255, this.b = parseInt(b.substr(4, 2), 16) / 255, this.a = b.length == 8 ? parseInt(b.substr(6, 2), 16) / 255 : 1, this;
	}
	add(b, w, D, O) {
		return this.r += b, this.g += w, this.b += D, this.a += O, this.clamp();
	}
	clamp() {
		return this.r < 0 ? this.r = 0 : this.r > 1 && (this.r = 1), this.g < 0 ? this.g = 0 : this.g > 1 && (this.g = 1), this.b < 0 ? this.b = 0 : this.b > 1 && (this.b = 1), this.a < 0 ? this.a = 0 : this.a > 1 && (this.a = 1), this;
	}
	static rgba8888ToColor(b, w) {
		b.r = ((w & 4278190080) >>> 24) / 255, b.g = ((w & 16711680) >>> 16) / 255, b.b = ((w & 65280) >>> 8) / 255, b.a = (w & 255) / 255;
	}
	static rgb888ToColor(b, w) {
		b.r = ((w & 16711680) >>> 16) / 255, b.g = ((w & 65280) >>> 8) / 255, b.b = (w & 255) / 255;
	}
	toRgb888() {
		let b = (b) => ("0" + (b * 255).toString(16)).slice(-2);
		return Number("0x" + b(this.r) + b(this.g) + b(this.b));
	}
	static fromString(w, D = new b()) {
		return D.setFromString(w);
	}
};
_Color = Color, _defineProperty(Color, "WHITE", new _Color(1, 1, 1, 1)), _defineProperty(Color, "RED", new _Color(1, 0, 0, 1)), _defineProperty(Color, "GREEN", new _Color(0, 1, 0, 1)), _defineProperty(Color, "BLUE", new _Color(0, 0, 1, 1)), _defineProperty(Color, "MAGENTA", new _Color(1, 0, 1, 1));
var MathUtils = class b {
	static clamp(b, w, D) {
		return b < w ? w : b > D ? D : b;
	}
	static cosDeg(w) {
		return Math.cos(w * b.degRad);
	}
	static sinDeg(w) {
		return Math.sin(w * b.degRad);
	}
	static atan2Deg(w, D) {
		return Math.atan2(w, D) * b.degRad;
	}
	static signum(b) {
		return b > 0 ? 1 : b < 0 ? -1 : 0;
	}
	static toInt(b) {
		return b > 0 ? Math.floor(b) : Math.ceil(b);
	}
	static cbrt(b) {
		let w = Math.pow(Math.abs(b), 1 / 3);
		return b < 0 ? -w : w;
	}
	static randomTriangular(w, D) {
		return b.randomTriangularWith(w, D, (w + D) * .5);
	}
	static randomTriangularWith(b, w, D) {
		let O = Math.random(), F = w - b;
		return O <= (D - b) / F ? b + Math.sqrt(O * F * (D - b)) : w - Math.sqrt((1 - O) * F * (w - D));
	}
	static isPowerOfTwo(b) {
		return b && (b & b - 1) == 0;
	}
};
_MathUtils = MathUtils, _defineProperty(MathUtils, "PI", 3.1415927), _defineProperty(MathUtils, "PI2", _MathUtils.PI * 2), _defineProperty(MathUtils, "invPI2", 1 / _MathUtils.PI2), _defineProperty(MathUtils, "radiansToDegrees", 180 / _MathUtils.PI), _defineProperty(MathUtils, "radDeg", _MathUtils.radiansToDegrees), _defineProperty(MathUtils, "degreesToRadians", _MathUtils.PI / 180), _defineProperty(MathUtils, "degRad", _MathUtils.degreesToRadians);
var Utils = class b {
	static arrayCopy(b, w, D, O, F) {
		for (let U = w, W = O; U < w + F; U++, W++) D[W] = b[U];
	}
	static arrayFill(b, w, D, O) {
		for (let F = w; F < D; F++) b[F] = O;
	}
	static setArraySize(b, w, D = 0) {
		let O = b.length;
		if (O == w) return b;
		if (b.length = w, O < w) for (let F = O; F < w; F++) b[F] = D;
		return b;
	}
	static ensureArrayCapacity(w, D, O = 0) {
		return w.length >= D ? w : b.setArraySize(w, D, O);
	}
	static newArray(b, w) {
		let D = Array(b);
		for (let O = 0; O < b; O++) D[O] = w;
		return D;
	}
	static newFloatArray(w) {
		if (b.SUPPORTS_TYPED_ARRAYS) return new Float32Array(w);
		{
			let b = Array(w);
			for (let w = 0; w < b.length; w++) b[w] = 0;
			return b;
		}
	}
	static newShortArray(w) {
		if (b.SUPPORTS_TYPED_ARRAYS) return new Int16Array(w);
		{
			let b = Array(w);
			for (let w = 0; w < b.length; w++) b[w] = 0;
			return b;
		}
	}
	static toFloatArray(w) {
		return b.SUPPORTS_TYPED_ARRAYS ? new Float32Array(w) : w;
	}
	static toSinglePrecision(w) {
		return b.SUPPORTS_TYPED_ARRAYS ? Math.fround(w) : w;
	}
	static webkit602BugfixHelper(b, w) {}
	static contains(b, w, D = !0) {
		for (var O = 0; O < b.length; O++) if (b[O] == w) return !0;
		return !1;
	}
	static enumValue(b, w) {
		return b[w[0].toUpperCase() + w.slice(1)];
	}
};
_defineProperty(Utils, "SUPPORTS_TYPED_ARRAYS", typeof Float32Array < "u");
var Pool = class {
	constructor(b) {
		_defineProperty(this, "items", []), _defineProperty(this, "instantiator", void 0), this.instantiator = b;
	}
	obtain() {
		return this.items.length > 0 ? this.items.pop() : this.instantiator();
	}
	free(b) {
		b.reset && b.reset(), this.items.push(b);
	}
	freeAll(b) {
		for (let w = 0; w < b.length; w++) this.free(b[w]);
	}
	clear() {
		this.items.length = 0;
	}
}, Vector2 = class {
	constructor(b = 0, w = 0) {
		_defineProperty(this, "x", void 0), _defineProperty(this, "y", void 0), this.x = b, this.y = w;
	}
	set(b, w) {
		return this.x = b, this.y = w, this;
	}
	length() {
		let b = this.x, w = this.y;
		return Math.sqrt(b * b + w * w);
	}
	normalize() {
		let b = this.length();
		return b != 0 && (this.x /= b, this.y /= b), this;
	}
}, TimeKeeper = class {
	constructor() {
		_defineProperty(this, "maxDelta", .064), _defineProperty(this, "framesPerSecond", 0), _defineProperty(this, "delta", 0), _defineProperty(this, "totalTime", 0), _defineProperty(this, "lastTime", Date.now() / 1e3), _defineProperty(this, "frameCount", 0), _defineProperty(this, "frameTime", 0);
	}
	update() {
		let b = Date.now() / 1e3;
		this.delta = b - this.lastTime, this.frameTime += this.delta, this.totalTime += this.delta, this.delta > this.maxDelta && (this.delta = this.maxDelta), this.lastTime = b, this.frameCount++, this.frameTime > 1 && (this.framesPerSecond = this.frameCount / this.frameTime, this.frameTime = 0, this.frameCount = 0);
	}
}, Attachment = class {
	constructor(b) {
		if (_defineProperty(this, "name", void 0), !b) throw Error("name cannot be null.");
		this.name = b;
	}
}, VertexAttachment = class b extends Attachment {
	constructor(w) {
		super(w), _defineProperty(this, "id", b.nextID++), _defineProperty(this, "bones", null), _defineProperty(this, "vertices", []), _defineProperty(this, "worldVerticesLength", 0), _defineProperty(this, "timelineAttachment", this);
	}
	computeWorldVertices(b, w, D, O, F, U) {
		D = F + (D >> 1) * U;
		let W = b.bone.skeleton, G = b.deform, K = this.vertices, q = this.bones;
		if (!q) {
			G.length > 0 && (K = G);
			let W = b.bone, q = W.worldX, J = W.worldY, Y = W.a, X = W.b, Z = W.c, Ji = W.d;
			for (let b = w, W = F; W < D; b += 2, W += U) {
				let w = K[b], D = K[b + 1];
				O[W] = w * Y + D * X + q, O[W + 1] = w * Z + D * Ji + J;
			}
			return;
		}
		let J = 0, Y = 0;
		for (let b = 0; b < w; b += 2) {
			let b = q[J];
			J += b + 1, Y += b;
		}
		let X = W.bones;
		if (G.length == 0) for (let b = F, w = Y * 3; b < D; b += U) {
			let D = 0, F = 0, U = q[J++];
			for (U += J; J < U; J++, w += 3) {
				let b = X[q[J]], O = K[w], U = K[w + 1], W = K[w + 2];
				D += (O * b.a + U * b.b + b.worldX) * W, F += (O * b.c + U * b.d + b.worldY) * W;
			}
			O[b] = D, O[b + 1] = F;
		}
		else {
			let b = G;
			for (let w = F, W = Y * 3, G = Y << 1; w < D; w += U) {
				let D = 0, F = 0, U = q[J++];
				for (U += J; J < U; J++, W += 3, G += 2) {
					let w = X[q[J]], O = K[W] + b[G], U = K[W + 1] + b[G + 1], Y = K[W + 2];
					D += (O * w.a + U * w.b + w.worldX) * Y, F += (O * w.c + U * w.d + w.worldY) * Y;
				}
				O[w] = D, O[w + 1] = F;
			}
		}
	}
	copyTo(b) {
		this.bones ? (b.bones = Array(this.bones.length), Utils.arrayCopy(this.bones, 0, b.bones, 0, this.bones.length)) : b.bones = null, this.vertices && (b.vertices = Utils.newFloatArray(this.vertices.length), Utils.arrayCopy(this.vertices, 0, b.vertices, 0, this.vertices.length)), b.worldVerticesLength = this.worldVerticesLength, b.timelineAttachment = this.timelineAttachment;
	}
};
_defineProperty(VertexAttachment, "nextID", 0);
var Sequence = class b {
	constructor(w) {
		_defineProperty(this, "id", b.nextID()), _defineProperty(this, "regions", void 0), _defineProperty(this, "start", 0), _defineProperty(this, "digits", 0), _defineProperty(this, "setupIndex", 0), this.regions = Array(w);
	}
	copy() {
		let w = new b(this.regions.length);
		return Utils.arrayCopy(this.regions, 0, w.regions, 0, this.regions.length), w.start = this.start, w.digits = this.digits, w.setupIndex = this.setupIndex, w;
	}
	apply(b, w) {
		let D = b.sequenceIndex;
		D == -1 && (D = this.setupIndex), D >= this.regions.length && (D = this.regions.length - 1);
		let O = this.regions[D];
		w.region != O && (w.region = O, w.updateRegion());
	}
	getPath(b, w) {
		let D = b, O = (this.start + w).toString();
		for (let b = this.digits - O.length; b > 0; b--) D += "0";
		return D += O, D;
	}
	static nextID() {
		return b._nextID++;
	}
};
_defineProperty(Sequence, "_nextID", 0);
var SequenceMode;
(function(b) {
	b[b.hold = 0] = "hold", b[b.once = 1] = "once", b[b.loop = 2] = "loop", b[b.pingpong = 3] = "pingpong", b[b.onceReverse = 4] = "onceReverse", b[b.loopReverse = 5] = "loopReverse", b[b.pingpongReverse = 6] = "pingpongReverse";
})(SequenceMode || (SequenceMode = {}));
const SequenceModeValues = [
	SequenceMode.hold,
	SequenceMode.once,
	SequenceMode.loop,
	SequenceMode.pingpong,
	SequenceMode.onceReverse,
	SequenceMode.loopReverse,
	SequenceMode.pingpongReverse
];
var Animation = class {
	constructor(b, w, D) {
		if (_defineProperty(this, "name", void 0), _defineProperty(this, "timelines", []), _defineProperty(this, "timelineIds", new StringSet()), _defineProperty(this, "duration", void 0), !b) throw Error("name cannot be null.");
		this.name = b, this.setTimelines(w), this.duration = D;
	}
	setTimelines(b) {
		if (!b) throw Error("timelines cannot be null.");
		this.timelines = b, this.timelineIds.clear();
		for (var w = 0; w < b.length; w++) this.timelineIds.addAll(b[w].getPropertyIds());
	}
	hasTimeline(b) {
		for (let w = 0; w < b.length; w++) if (this.timelineIds.contains(b[w])) return !0;
		return !1;
	}
	apply(b, w, D, O, F, U, W, G) {
		if (!b) throw Error("skeleton cannot be null.");
		O && this.duration != 0 && (D %= this.duration, w > 0 && (w %= this.duration));
		let K = this.timelines;
		for (let O = 0, q = K.length; O < q; O++) K[O].apply(b, w, D, F, U, W, G);
	}
}, MixBlend;
(function(b) {
	b[b.setup = 0] = "setup", b[b.first = 1] = "first", b[b.replace = 2] = "replace", b[b.add = 3] = "add";
})(MixBlend || (MixBlend = {}));
var MixDirection;
(function(b) {
	b[b.mixIn = 0] = "mixIn", b[b.mixOut = 1] = "mixOut";
})(MixDirection || (MixDirection = {}));
var Property = {
	rotate: 0,
	x: 1,
	y: 2,
	scaleX: 3,
	scaleY: 4,
	shearX: 5,
	shearY: 6,
	inherit: 7,
	rgb: 8,
	alpha: 9,
	rgb2: 10,
	attachment: 11,
	deform: 12,
	event: 13,
	drawOrder: 14,
	ikConstraint: 15,
	transformConstraint: 16,
	pathConstraintPosition: 17,
	pathConstraintSpacing: 18,
	pathConstraintMix: 19,
	physicsConstraintInertia: 20,
	physicsConstraintStrength: 21,
	physicsConstraintDamping: 22,
	physicsConstraintMass: 23,
	physicsConstraintWind: 24,
	physicsConstraintGravity: 25,
	physicsConstraintMix: 26,
	physicsConstraintReset: 27,
	sequence: 28
}, Timeline = class {
	constructor(b, w) {
		_defineProperty(this, "propertyIds", void 0), _defineProperty(this, "frames", void 0), this.propertyIds = w, this.frames = Utils.newFloatArray(b * this.getFrameEntries());
	}
	getPropertyIds() {
		return this.propertyIds;
	}
	getFrameEntries() {
		return 1;
	}
	getFrameCount() {
		return this.frames.length / this.getFrameEntries();
	}
	getDuration() {
		return this.frames[this.frames.length - this.getFrameEntries()];
	}
	static search1(b, w) {
		let D = b.length;
		for (let O = 1; O < D; O++) if (b[O] > w) return O - 1;
		return D - 1;
	}
	static search(b, w, D) {
		let O = b.length;
		for (let F = D; F < O; F += D) if (b[F] > w) return F - D;
		return O - D;
	}
}, CurveTimeline = class extends Timeline {
	constructor(b, w, D) {
		super(b, D), _defineProperty(this, "curves", void 0), this.curves = Utils.newFloatArray(b + w * 18), this.curves[b - 1] = 1;
	}
	setLinear(b) {
		this.curves[b] = 0;
	}
	setStepped(b) {
		this.curves[b] = 1;
	}
	shrink(b) {
		let w = this.getFrameCount() + b * 18;
		if (this.curves.length > w) {
			let b = Utils.newFloatArray(w);
			Utils.arrayCopy(this.curves, 0, b, 0, w), this.curves = b;
		}
	}
	setBezier(b, w, D, O, F, U, W, G, K, q, J) {
		let Y = this.curves, X = this.getFrameCount() + b * 18;
		D == 0 && (Y[w] = 2 + X);
		let Z = (O - U * 2 + G) * .03, Ji = (F - W * 2 + K) * .03, Yi = ((U - G) * 3 - O + q) * .006, Q = ((W - K) * 3 - F + J) * .006, Xi = Z * 2 + Yi, Zi = Ji * 2 + Q, Qi = (U - O) * .3 + Z + Yi * .16666667, $i = (W - F) * .3 + Ji + Q * .16666667, ea = O + Qi, ta = F + $i;
		for (let b = X + 18; X < b; X += 2) Y[X] = ea, Y[X + 1] = ta, Qi += Xi, $i += Zi, Xi += Yi, Zi += Q, ea += Qi, ta += $i;
	}
	getBezierValue(b, w, D, O) {
		let F = this.curves;
		if (F[O] > b) {
			let U = this.frames[w], W = this.frames[w + D];
			return W + (b - U) / (F[O] - U) * (F[O + 1] - W);
		}
		let U = O + 18;
		for (O += 2; O < U; O += 2) if (F[O] >= b) {
			let w = F[O - 2], D = F[O - 1];
			return D + (b - w) / (F[O] - w) * (F[O + 1] - D);
		}
		w += this.getFrameEntries();
		let W = F[U - 2], G = F[U - 1];
		return G + (b - W) / (this.frames[w] - W) * (this.frames[w + D] - G);
	}
}, CurveTimeline1 = class extends CurveTimeline {
	constructor(b, w, D) {
		super(b, w, [D]);
	}
	getFrameEntries() {
		return 2;
	}
	setFrame(b, w, D) {
		b <<= 1, this.frames[b] = w, this.frames[b + 1] = D;
	}
	getCurveValue(b) {
		let w = this.frames, D = w.length - 2;
		for (let O = 2; O <= D; O += 2) if (w[O] > b) {
			D = O - 2;
			break;
		}
		let O = this.curves[D >> 1];
		switch (O) {
			case 0:
				let O = w[D], F = w[D + 1];
				return F + (b - O) / (w[D + 2] - O) * (w[D + 2 + 1] - F);
			case 1: return w[D + 1];
		}
		return this.getBezierValue(b, D, 1, O - 2);
	}
	getRelativeValue(b, w, D, O, F) {
		if (b < this.frames[0]) {
			switch (D) {
				case MixBlend.setup: return F;
				case MixBlend.first: return O + (F - O) * w;
			}
			return O;
		}
		let U = this.getCurveValue(b);
		switch (D) {
			case MixBlend.setup: return F + U * w;
			case MixBlend.first:
			case MixBlend.replace: U += F - O;
		}
		return O + U * w;
	}
	getAbsoluteValue(b, w, D, O, F) {
		if (b < this.frames[0]) {
			switch (D) {
				case MixBlend.setup: return F;
				case MixBlend.first: return O + (F - O) * w;
			}
			return O;
		}
		let U = this.getCurveValue(b);
		return D == MixBlend.setup ? F + (U - F) * w : O + (U - O) * w;
	}
	getAbsoluteValue2(b, w, D, O, F, U) {
		if (b < this.frames[0]) {
			switch (D) {
				case MixBlend.setup: return F;
				case MixBlend.first: return O + (F - O) * w;
			}
			return O;
		}
		return D == MixBlend.setup ? F + (U - F) * w : O + (U - O) * w;
	}
	getScaleValue(b, w, D, O, F, U) {
		if (b < this.frames[0]) {
			switch (D) {
				case MixBlend.setup: return U;
				case MixBlend.first: return F + (U - F) * w;
			}
			return F;
		}
		let W = this.getCurveValue(b) * U;
		if (w == 1) return D == MixBlend.add ? F + W - U : W;
		if (O == MixDirection.mixOut) switch (D) {
			case MixBlend.setup: return U + (Math.abs(W) * MathUtils.signum(U) - U) * w;
			case MixBlend.first:
			case MixBlend.replace: return F + (Math.abs(W) * MathUtils.signum(F) - F) * w;
		}
		else {
			let b = 0;
			switch (D) {
				case MixBlend.setup: return b = Math.abs(U) * MathUtils.signum(W), b + (W - b) * w;
				case MixBlend.first:
				case MixBlend.replace: return b = Math.abs(F) * MathUtils.signum(W), b + (W - b) * w;
			}
		}
		return F + (W - U) * w;
	}
}, CurveTimeline2 = class extends CurveTimeline {
	constructor(b, w, D, O) {
		super(b, w, [D, O]);
	}
	getFrameEntries() {
		return 3;
	}
	setFrame(b, w, D, O) {
		b *= 3, this.frames[b] = w, this.frames[b + 1] = D, this.frames[b + 2] = O;
	}
}, RotateTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.rotate + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		G.active && (G.rotation = this.getRelativeValue(D, F, U, G.rotation, G.data.rotation));
	}
}, TranslateTimeline = class extends CurveTimeline2 {
	constructor(b, w, D) {
		super(b, w, Property.x + "|" + D, Property.y + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		if (!G.active) return;
		let K = this.frames;
		if (D < K[0]) {
			switch (U) {
				case MixBlend.setup:
					G.x = G.data.x, G.y = G.data.y;
					return;
				case MixBlend.first: G.x += (G.data.x - G.x) * F, G.y += (G.data.y - G.y) * F;
			}
			return;
		}
		let q = 0, J = 0, Y = Timeline.search(K, D, 3), X = this.curves[Y / 3];
		switch (X) {
			case 0:
				let b = K[Y];
				q = K[Y + 1], J = K[Y + 2];
				let w = (D - b) / (K[Y + 3] - b);
				q += (K[Y + 3 + 1] - q) * w, J += (K[Y + 3 + 2] - J) * w;
				break;
			case 1:
				q = K[Y + 1], J = K[Y + 2];
				break;
			default: q = this.getBezierValue(D, Y, 1, X - 2), J = this.getBezierValue(D, Y, 2, X + 18 - 2);
		}
		switch (U) {
			case MixBlend.setup:
				G.x = G.data.x + q * F, G.y = G.data.y + J * F;
				break;
			case MixBlend.first:
			case MixBlend.replace:
				G.x += (G.data.x + q - G.x) * F, G.y += (G.data.y + J - G.y) * F;
				break;
			case MixBlend.add: G.x += q * F, G.y += J * F;
		}
	}
}, TranslateXTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.x + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		G.active && (G.x = this.getRelativeValue(D, F, U, G.x, G.data.x));
	}
}, TranslateYTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.y + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		G.active && (G.y = this.getRelativeValue(D, F, U, G.y, G.data.y));
	}
}, ScaleTimeline = class extends CurveTimeline2 {
	constructor(b, w, D) {
		super(b, w, Property.scaleX + "|" + D, Property.scaleY + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		if (!G.active) return;
		let K = this.frames;
		if (D < K[0]) {
			switch (U) {
				case MixBlend.setup:
					G.scaleX = G.data.scaleX, G.scaleY = G.data.scaleY;
					return;
				case MixBlend.first: G.scaleX += (G.data.scaleX - G.scaleX) * F, G.scaleY += (G.data.scaleY - G.scaleY) * F;
			}
			return;
		}
		let q, J, Y = Timeline.search(K, D, 3), X = this.curves[Y / 3];
		switch (X) {
			case 0:
				let b = K[Y];
				q = K[Y + 1], J = K[Y + 2];
				let w = (D - b) / (K[Y + 3] - b);
				q += (K[Y + 3 + 1] - q) * w, J += (K[Y + 3 + 2] - J) * w;
				break;
			case 1:
				q = K[Y + 1], J = K[Y + 2];
				break;
			default: q = this.getBezierValue(D, Y, 1, X - 2), J = this.getBezierValue(D, Y, 2, X + 18 - 2);
		}
		if (q *= G.data.scaleX, J *= G.data.scaleY, F == 1) U == MixBlend.add ? (G.scaleX += q - G.data.scaleX, G.scaleY += J - G.data.scaleY) : (G.scaleX = q, G.scaleY = J);
		else {
			let b = 0, w = 0;
			if (W == MixDirection.mixOut) switch (U) {
				case MixBlend.setup:
					b = G.data.scaleX, w = G.data.scaleY, G.scaleX = b + (Math.abs(q) * MathUtils.signum(b) - b) * F, G.scaleY = w + (Math.abs(J) * MathUtils.signum(w) - w) * F;
					break;
				case MixBlend.first:
				case MixBlend.replace:
					b = G.scaleX, w = G.scaleY, G.scaleX = b + (Math.abs(q) * MathUtils.signum(b) - b) * F, G.scaleY = w + (Math.abs(J) * MathUtils.signum(w) - w) * F;
					break;
				case MixBlend.add: G.scaleX += (q - G.data.scaleX) * F, G.scaleY += (J - G.data.scaleY) * F;
			}
			else switch (U) {
				case MixBlend.setup:
					b = Math.abs(G.data.scaleX) * MathUtils.signum(q), w = Math.abs(G.data.scaleY) * MathUtils.signum(J), G.scaleX = b + (q - b) * F, G.scaleY = w + (J - w) * F;
					break;
				case MixBlend.first:
				case MixBlend.replace:
					b = Math.abs(G.scaleX) * MathUtils.signum(q), w = Math.abs(G.scaleY) * MathUtils.signum(J), G.scaleX = b + (q - b) * F, G.scaleY = w + (J - w) * F;
					break;
				case MixBlend.add: G.scaleX += (q - G.data.scaleX) * F, G.scaleY += (J - G.data.scaleY) * F;
			}
		}
	}
}, ScaleXTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.scaleX + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		G.active && (G.scaleX = this.getScaleValue(D, F, U, W, G.scaleX, G.data.scaleX));
	}
}, ScaleYTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.scaleY + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		G.active && (G.scaleY = this.getScaleValue(D, F, U, W, G.scaleY, G.data.scaleY));
	}
}, ShearTimeline = class extends CurveTimeline2 {
	constructor(b, w, D) {
		super(b, w, Property.shearX + "|" + D, Property.shearY + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		if (!G.active) return;
		let K = this.frames;
		if (D < K[0]) {
			switch (U) {
				case MixBlend.setup:
					G.shearX = G.data.shearX, G.shearY = G.data.shearY;
					return;
				case MixBlend.first: G.shearX += (G.data.shearX - G.shearX) * F, G.shearY += (G.data.shearY - G.shearY) * F;
			}
			return;
		}
		let q = 0, J = 0, Y = Timeline.search(K, D, 3), X = this.curves[Y / 3];
		switch (X) {
			case 0:
				let b = K[Y];
				q = K[Y + 1], J = K[Y + 2];
				let w = (D - b) / (K[Y + 3] - b);
				q += (K[Y + 3 + 1] - q) * w, J += (K[Y + 3 + 2] - J) * w;
				break;
			case 1:
				q = K[Y + 1], J = K[Y + 2];
				break;
			default: q = this.getBezierValue(D, Y, 1, X - 2), J = this.getBezierValue(D, Y, 2, X + 18 - 2);
		}
		switch (U) {
			case MixBlend.setup:
				G.shearX = G.data.shearX + q * F, G.shearY = G.data.shearY + J * F;
				break;
			case MixBlend.first:
			case MixBlend.replace:
				G.shearX += (G.data.shearX + q - G.shearX) * F, G.shearY += (G.data.shearY + J - G.shearY) * F;
				break;
			case MixBlend.add: G.shearX += q * F, G.shearY += J * F;
		}
	}
}, ShearXTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.shearX + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		G.active && (G.shearX = this.getRelativeValue(D, F, U, G.shearX, G.data.shearX));
	}
}, ShearYTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.shearY + "|" + D), _defineProperty(this, "boneIndex", 0), this.boneIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		G.active && (G.shearY = this.getRelativeValue(D, F, U, G.shearY, G.data.shearY));
	}
}, InheritTimeline = class extends Timeline {
	constructor(b, w) {
		super(b, [Property.inherit + "|" + w]), _defineProperty(this, "boneIndex", 0), this.boneIndex = w;
	}
	getFrameEntries() {
		return 2;
	}
	setFrame(b, w, D) {
		b *= 2, this.frames[b] = w, this.frames[b + 1] = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.bones[this.boneIndex];
		if (!G.active) return;
		if (W == MixDirection.mixOut) {
			U == MixBlend.setup && (G.inherit = G.data.inherit);
			return;
		}
		let K = this.frames;
		if (D < K[0]) {
			(U == MixBlend.setup || U == MixBlend.first) && (G.inherit = G.data.inherit);
			return;
		}
		G.inherit = this.frames[Timeline.search(K, D, 2) + 1];
	}
}, RGBATimeline = class extends CurveTimeline {
	constructor(b, w, D) {
		super(b, w, [Property.rgb + "|" + D, Property.alpha + "|" + D]), _defineProperty(this, "slotIndex", 0), this.slotIndex = D;
	}
	getFrameEntries() {
		return 5;
	}
	setFrame(b, w, D, O, F, U) {
		b *= 5, this.frames[b] = w, this.frames[b + 1] = D, this.frames[b + 2] = O, this.frames[b + 3] = F, this.frames[b + 4] = U;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.slots[this.slotIndex];
		if (!G.bone.active) return;
		let K = this.frames, q = G.color;
		if (D < K[0]) {
			let b = G.data.color;
			switch (U) {
				case MixBlend.setup:
					q.setFromColor(b);
					return;
				case MixBlend.first: q.add((b.r - q.r) * F, (b.g - q.g) * F, (b.b - q.b) * F, (b.a - q.a) * F);
			}
			return;
		}
		let J = 0, Y = 0, X = 0, Z = 0, Ji = Timeline.search(K, D, 5), Yi = this.curves[Ji / 5];
		switch (Yi) {
			case 0:
				let b = K[Ji];
				J = K[Ji + 1], Y = K[Ji + 2], X = K[Ji + 3], Z = K[Ji + 4];
				let w = (D - b) / (K[Ji + 5] - b);
				J += (K[Ji + 5 + 1] - J) * w, Y += (K[Ji + 5 + 2] - Y) * w, X += (K[Ji + 5 + 3] - X) * w, Z += (K[Ji + 5 + 4] - Z) * w;
				break;
			case 1:
				J = K[Ji + 1], Y = K[Ji + 2], X = K[Ji + 3], Z = K[Ji + 4];
				break;
			default: J = this.getBezierValue(D, Ji, 1, Yi - 2), Y = this.getBezierValue(D, Ji, 2, Yi + 18 - 2), X = this.getBezierValue(D, Ji, 3, Yi + 36 - 2), Z = this.getBezierValue(D, Ji, 4, Yi + 54 - 2);
		}
		F == 1 ? q.set(J, Y, X, Z) : (U == MixBlend.setup && q.setFromColor(G.data.color), q.add((J - q.r) * F, (Y - q.g) * F, (X - q.b) * F, (Z - q.a) * F));
	}
}, RGBTimeline = class extends CurveTimeline {
	constructor(b, w, D) {
		super(b, w, [Property.rgb + "|" + D]), _defineProperty(this, "slotIndex", 0), this.slotIndex = D;
	}
	getFrameEntries() {
		return 4;
	}
	setFrame(b, w, D, O, F) {
		b <<= 2, this.frames[b] = w, this.frames[b + 1] = D, this.frames[b + 2] = O, this.frames[b + 3] = F;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.slots[this.slotIndex];
		if (!G.bone.active) return;
		let K = this.frames, q = G.color;
		if (D < K[0]) {
			let b = G.data.color;
			switch (U) {
				case MixBlend.setup:
					q.r = b.r, q.g = b.g, q.b = b.b;
					return;
				case MixBlend.first: q.r += (b.r - q.r) * F, q.g += (b.g - q.g) * F, q.b += (b.b - q.b) * F;
			}
			return;
		}
		let J = 0, Y = 0, X = 0, Z = Timeline.search(K, D, 4), Ji = this.curves[Z >> 2];
		switch (Ji) {
			case 0:
				let b = K[Z];
				J = K[Z + 1], Y = K[Z + 2], X = K[Z + 3];
				let w = (D - b) / (K[Z + 4] - b);
				J += (K[Z + 4 + 1] - J) * w, Y += (K[Z + 4 + 2] - Y) * w, X += (K[Z + 4 + 3] - X) * w;
				break;
			case 1:
				J = K[Z + 1], Y = K[Z + 2], X = K[Z + 3];
				break;
			default: J = this.getBezierValue(D, Z, 1, Ji - 2), Y = this.getBezierValue(D, Z, 2, Ji + 18 - 2), X = this.getBezierValue(D, Z, 3, Ji + 36 - 2);
		}
		if (F == 1) q.r = J, q.g = Y, q.b = X;
		else {
			if (U == MixBlend.setup) {
				let b = G.data.color;
				q.r = b.r, q.g = b.g, q.b = b.b;
			}
			q.r += (J - q.r) * F, q.g += (Y - q.g) * F, q.b += (X - q.b) * F;
		}
	}
}, AlphaTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.alpha + "|" + D), _defineProperty(this, "slotIndex", 0), this.slotIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.slots[this.slotIndex];
		if (!G.bone.active) return;
		let K = G.color;
		if (D < this.frames[0]) {
			let b = G.data.color;
			switch (U) {
				case MixBlend.setup:
					K.a = b.a;
					return;
				case MixBlend.first: K.a += (b.a - K.a) * F;
			}
			return;
		}
		let q = this.getCurveValue(D);
		F == 1 ? K.a = q : (U == MixBlend.setup && (K.a = G.data.color.a), K.a += (q - K.a) * F);
	}
}, RGBA2Timeline = class extends CurveTimeline {
	constructor(b, w, D) {
		super(b, w, [
			Property.rgb + "|" + D,
			Property.alpha + "|" + D,
			Property.rgb2 + "|" + D
		]), _defineProperty(this, "slotIndex", 0), this.slotIndex = D;
	}
	getFrameEntries() {
		return 8;
	}
	setFrame(b, w, D, O, F, U, W, G, K) {
		b <<= 3, this.frames[b] = w, this.frames[b + 1] = D, this.frames[b + 2] = O, this.frames[b + 3] = F, this.frames[b + 4] = U, this.frames[b + 5] = W, this.frames[b + 6] = G, this.frames[b + 7] = K;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.slots[this.slotIndex];
		if (!G.bone.active) return;
		let K = this.frames, q = G.color, J = G.darkColor;
		if (D < K[0]) {
			let b = G.data.color, w = G.data.darkColor;
			switch (U) {
				case MixBlend.setup:
					q.setFromColor(b), J.r = w.r, J.g = w.g, J.b = w.b;
					return;
				case MixBlend.first: q.add((b.r - q.r) * F, (b.g - q.g) * F, (b.b - q.b) * F, (b.a - q.a) * F), J.r += (w.r - J.r) * F, J.g += (w.g - J.g) * F, J.b += (w.b - J.b) * F;
			}
			return;
		}
		let Y = 0, X = 0, Z = 0, Ji = 0, Yi = 0, Q = 0, Xi = 0, Zi = Timeline.search(K, D, 8), Qi = this.curves[Zi >> 3];
		switch (Qi) {
			case 0:
				let b = K[Zi];
				Y = K[Zi + 1], X = K[Zi + 2], Z = K[Zi + 3], Ji = K[Zi + 4], Yi = K[Zi + 5], Q = K[Zi + 6], Xi = K[Zi + 7];
				let w = (D - b) / (K[Zi + 8] - b);
				Y += (K[Zi + 8 + 1] - Y) * w, X += (K[Zi + 8 + 2] - X) * w, Z += (K[Zi + 8 + 3] - Z) * w, Ji += (K[Zi + 8 + 4] - Ji) * w, Yi += (K[Zi + 8 + 5] - Yi) * w, Q += (K[Zi + 8 + 6] - Q) * w, Xi += (K[Zi + 8 + 7] - Xi) * w;
				break;
			case 1:
				Y = K[Zi + 1], X = K[Zi + 2], Z = K[Zi + 3], Ji = K[Zi + 4], Yi = K[Zi + 5], Q = K[Zi + 6], Xi = K[Zi + 7];
				break;
			default: Y = this.getBezierValue(D, Zi, 1, Qi - 2), X = this.getBezierValue(D, Zi, 2, Qi + 18 - 2), Z = this.getBezierValue(D, Zi, 3, Qi + 36 - 2), Ji = this.getBezierValue(D, Zi, 4, Qi + 54 - 2), Yi = this.getBezierValue(D, Zi, 5, Qi + 72 - 2), Q = this.getBezierValue(D, Zi, 6, Qi + 90 - 2), Xi = this.getBezierValue(D, Zi, 7, Qi + 108 - 2);
		}
		if (F == 1) q.set(Y, X, Z, Ji), J.r = Yi, J.g = Q, J.b = Xi;
		else {
			if (U == MixBlend.setup) {
				q.setFromColor(G.data.color);
				let b = G.data.darkColor;
				J.r = b.r, J.g = b.g, J.b = b.b;
			}
			q.add((Y - q.r) * F, (X - q.g) * F, (Z - q.b) * F, (Ji - q.a) * F), J.r += (Yi - J.r) * F, J.g += (Q - J.g) * F, J.b += (Xi - J.b) * F;
		}
	}
}, RGB2Timeline = class extends CurveTimeline {
	constructor(b, w, D) {
		super(b, w, [Property.rgb + "|" + D, Property.rgb2 + "|" + D]), _defineProperty(this, "slotIndex", 0), this.slotIndex = D;
	}
	getFrameEntries() {
		return 7;
	}
	setFrame(b, w, D, O, F, U, W, G) {
		b *= 7, this.frames[b] = w, this.frames[b + 1] = D, this.frames[b + 2] = O, this.frames[b + 3] = F, this.frames[b + 4] = U, this.frames[b + 5] = W, this.frames[b + 6] = G;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.slots[this.slotIndex];
		if (!G.bone.active) return;
		let K = this.frames, q = G.color, J = G.darkColor;
		if (D < K[0]) {
			let b = G.data.color, w = G.data.darkColor;
			switch (U) {
				case MixBlend.setup:
					q.r = b.r, q.g = b.g, q.b = b.b, J.r = w.r, J.g = w.g, J.b = w.b;
					return;
				case MixBlend.first: q.r += (b.r - q.r) * F, q.g += (b.g - q.g) * F, q.b += (b.b - q.b) * F, J.r += (w.r - J.r) * F, J.g += (w.g - J.g) * F, J.b += (w.b - J.b) * F;
			}
			return;
		}
		let Y = 0, X = 0, Z = 0, Ji = 0, Yi = 0, Q = 0, Xi = Timeline.search(K, D, 7), Zi = this.curves[Xi / 7];
		switch (Zi) {
			case 0:
				let b = K[Xi];
				Y = K[Xi + 1], X = K[Xi + 2], Z = K[Xi + 3], Ji = K[Xi + 4], Yi = K[Xi + 5], Q = K[Xi + 6];
				let w = (D - b) / (K[Xi + 7] - b);
				Y += (K[Xi + 7 + 1] - Y) * w, X += (K[Xi + 7 + 2] - X) * w, Z += (K[Xi + 7 + 3] - Z) * w, Ji += (K[Xi + 7 + 4] - Ji) * w, Yi += (K[Xi + 7 + 5] - Yi) * w, Q += (K[Xi + 7 + 6] - Q) * w;
				break;
			case 1:
				Y = K[Xi + 1], X = K[Xi + 2], Z = K[Xi + 3], Ji = K[Xi + 4], Yi = K[Xi + 5], Q = K[Xi + 6];
				break;
			default: Y = this.getBezierValue(D, Xi, 1, Zi - 2), X = this.getBezierValue(D, Xi, 2, Zi + 18 - 2), Z = this.getBezierValue(D, Xi, 3, Zi + 36 - 2), Ji = this.getBezierValue(D, Xi, 4, Zi + 54 - 2), Yi = this.getBezierValue(D, Xi, 5, Zi + 72 - 2), Q = this.getBezierValue(D, Xi, 6, Zi + 90 - 2);
		}
		if (F == 1) q.r = Y, q.g = X, q.b = Z, J.r = Ji, J.g = Yi, J.b = Q;
		else {
			if (U == MixBlend.setup) {
				let b = G.data.color, w = G.data.darkColor;
				q.r = b.r, q.g = b.g, q.b = b.b, J.r = w.r, J.g = w.g, J.b = w.b;
			}
			q.r += (Y - q.r) * F, q.g += (X - q.g) * F, q.b += (Z - q.b) * F, J.r += (Ji - J.r) * F, J.g += (Yi - J.g) * F, J.b += (Q - J.b) * F;
		}
	}
}, AttachmentTimeline = class extends Timeline {
	constructor(b, w) {
		super(b, [Property.attachment + "|" + w]), _defineProperty(this, "slotIndex", 0), _defineProperty(this, "attachmentNames", void 0), this.slotIndex = w, this.attachmentNames = Array(b);
	}
	getFrameCount() {
		return this.frames.length;
	}
	setFrame(b, w, D) {
		this.frames[b] = w, this.attachmentNames[b] = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.slots[this.slotIndex];
		if (G.bone.active) {
			if (W == MixDirection.mixOut) {
				U == MixBlend.setup && this.setAttachment(b, G, G.data.attachmentName);
				return;
			}
			if (D < this.frames[0]) {
				(U == MixBlend.setup || U == MixBlend.first) && this.setAttachment(b, G, G.data.attachmentName);
				return;
			}
			this.setAttachment(b, G, this.attachmentNames[Timeline.search1(this.frames, D)]);
		}
	}
	setAttachment(b, w, D) {
		w.setAttachment(D ? b.getAttachment(this.slotIndex, D) : null);
	}
}, DeformTimeline = class extends CurveTimeline {
	constructor(b, w, D, O) {
		super(b, w, [Property.deform + "|" + D + "|" + O.id]), _defineProperty(this, "slotIndex", 0), _defineProperty(this, "attachment", void 0), _defineProperty(this, "vertices", void 0), this.slotIndex = D, this.attachment = O, this.vertices = Array(b);
	}
	getFrameCount() {
		return this.frames.length;
	}
	setFrame(b, w, D) {
		this.frames[b] = w, this.vertices[b] = D;
	}
	setBezier(b, w, D, O, F, U, W, G, K, q, J) {
		let Y = this.curves, X = this.getFrameCount() + b * 18;
		D == 0 && (Y[w] = 2 + X);
		let Z = (O - U * 2 + G) * .03, Ji = K * .03 - W * .06, Yi = ((U - G) * 3 - O + q) * .006, Q = (W - K + .33333333) * .018, Xi = Z * 2 + Yi, Zi = Ji * 2 + Q, Qi = (U - O) * .3 + Z + Yi * .16666667, $i = W * .3 + Ji + Q * .16666667, ea = O + Qi, ta = $i;
		for (let b = X + 18; X < b; X += 2) Y[X] = ea, Y[X + 1] = ta, Qi += Xi, $i += Zi, Xi += Yi, Zi += Q, ea += Qi, ta += $i;
	}
	getCurvePercent(b, w) {
		let D = this.curves, O = D[w];
		switch (O) {
			case 0:
				let D = this.frames[w];
				return (b - D) / (this.frames[w + this.getFrameEntries()] - D);
			case 1: return 0;
		}
		if (O -= 2, D[O] > b) {
			let F = this.frames[w];
			return D[O + 1] * (b - F) / (D[O] - F);
		}
		let F = O + 18;
		for (O += 2; O < F; O += 2) if (D[O] >= b) {
			let w = D[O - 2], F = D[O - 1];
			return F + (b - w) / (D[O] - w) * (D[O + 1] - F);
		}
		let U = D[F - 2], W = D[F - 1];
		return W + (1 - W) * (b - U) / (this.frames[w + this.getFrameEntries()] - U);
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.slots[this.slotIndex];
		if (!G.bone.active) return;
		let K = G.getAttachment();
		if (!K || !(K instanceof VertexAttachment) || K.timelineAttachment != this.attachment) return;
		let q = G.deform;
		q.length == 0 && (U = MixBlend.setup);
		let J = this.vertices, Y = J[0].length, X = this.frames;
		if (D < X[0]) {
			switch (U) {
				case MixBlend.setup:
					q.length = 0;
					return;
				case MixBlend.first:
					if (F == 1) {
						q.length = 0;
						return;
					}
					q.length = Y;
					let b = K;
					if (b.bones) {
						F = 1 - F;
						for (var Z = 0; Z < Y; Z++) q[Z] *= F;
					} else {
						let w = b.vertices;
						for (var Z = 0; Z < Y; Z++) q[Z] += (w[Z] - q[Z]) * F;
					}
			}
			return;
		}
		if (q.length = Y, D >= X[X.length - 1]) {
			let b = J[X.length - 1];
			if (F == 1) if (U == MixBlend.add) {
				let w = K;
				if (w.bones) for (let w = 0; w < Y; w++) q[w] += b[w];
				else {
					let D = w.vertices;
					for (let w = 0; w < Y; w++) q[w] += b[w] - D[w];
				}
			} else Utils.arrayCopy(b, 0, q, 0, Y);
			else switch (U) {
				case MixBlend.setup: {
					let w = K;
					if (w.bones) for (let w = 0; w < Y; w++) q[w] = b[w] * F;
					else {
						let D = w.vertices;
						for (let w = 0; w < Y; w++) {
							let O = D[w];
							q[w] = O + (b[w] - O) * F;
						}
					}
					break;
				}
				case MixBlend.first:
				case MixBlend.replace:
					for (let w = 0; w < Y; w++) q[w] += (b[w] - q[w]) * F;
					break;
				case MixBlend.add:
					let w = K;
					if (w.bones) for (let w = 0; w < Y; w++) q[w] += b[w] * F;
					else {
						let D = w.vertices;
						for (let w = 0; w < Y; w++) q[w] += (b[w] - D[w]) * F;
					}
			}
			return;
		}
		let Ji = Timeline.search1(X, D), Yi = this.getCurvePercent(D, Ji), Q = J[Ji], Xi = J[Ji + 1];
		if (F == 1) if (U == MixBlend.add) {
			let b = K;
			if (b.bones) for (let b = 0; b < Y; b++) {
				let w = Q[b];
				q[b] += w + (Xi[b] - w) * Yi;
			}
			else {
				let w = b.vertices;
				for (let b = 0; b < Y; b++) {
					let D = Q[b];
					q[b] += D + (Xi[b] - D) * Yi - w[b];
				}
			}
		} else for (let b = 0; b < Y; b++) {
			let w = Q[b];
			q[b] = w + (Xi[b] - w) * Yi;
		}
		else switch (U) {
			case MixBlend.setup: {
				let b = K;
				if (b.bones) for (let b = 0; b < Y; b++) {
					let w = Q[b];
					q[b] = (w + (Xi[b] - w) * Yi) * F;
				}
				else {
					let w = b.vertices;
					for (let b = 0; b < Y; b++) {
						let D = Q[b], O = w[b];
						q[b] = O + (D + (Xi[b] - D) * Yi - O) * F;
					}
				}
				break;
			}
			case MixBlend.first:
			case MixBlend.replace:
				for (let b = 0; b < Y; b++) {
					let w = Q[b];
					q[b] += (w + (Xi[b] - w) * Yi - q[b]) * F;
				}
				break;
			case MixBlend.add:
				let b = K;
				if (b.bones) for (let b = 0; b < Y; b++) {
					let w = Q[b];
					q[b] += (w + (Xi[b] - w) * Yi) * F;
				}
				else {
					let w = b.vertices;
					for (let b = 0; b < Y; b++) {
						let D = Q[b];
						q[b] += (D + (Xi[b] - D) * Yi - w[b]) * F;
					}
				}
		}
	}
}, EventTimeline = class b extends Timeline {
	constructor(w) {
		super(w, b.propertyIds), _defineProperty(this, "events", void 0), this.events = Array(w);
	}
	getFrameCount() {
		return this.frames.length;
	}
	setFrame(b, w) {
		this.frames[b] = w.time, this.events[b] = w;
	}
	apply(b, w, D, O, F, U, W) {
		if (!O) return;
		let G = this.frames, K = this.frames.length;
		if (w > D) this.apply(b, w, Number.MAX_VALUE, O, F, U, W), w = -1;
		else if (w >= G[K - 1]) return;
		if (D < G[0]) return;
		let q = 0;
		if (w < G[0]) q = 0;
		else {
			q = Timeline.search1(G, w) + 1;
			let b = G[q];
			for (; q > 0 && G[q - 1] == b;) q--;
		}
		for (; q < K && D >= G[q]; q++) O.push(this.events[q]);
	}
};
_defineProperty(EventTimeline, "propertyIds", ["" + Property.event]);
var DrawOrderTimeline = class b extends Timeline {
	constructor(w) {
		super(w, b.propertyIds), _defineProperty(this, "drawOrders", void 0), this.drawOrders = Array(w);
	}
	getFrameCount() {
		return this.frames.length;
	}
	setFrame(b, w, D) {
		this.frames[b] = w, this.drawOrders[b] = D;
	}
	apply(b, w, D, O, F, U, W) {
		if (W == MixDirection.mixOut) {
			U == MixBlend.setup && Utils.arrayCopy(b.slots, 0, b.drawOrder, 0, b.slots.length);
			return;
		}
		if (D < this.frames[0]) {
			(U == MixBlend.setup || U == MixBlend.first) && Utils.arrayCopy(b.slots, 0, b.drawOrder, 0, b.slots.length);
			return;
		}
		let G = Timeline.search1(this.frames, D), K = this.drawOrders[G];
		if (!K) Utils.arrayCopy(b.slots, 0, b.drawOrder, 0, b.slots.length);
		else {
			let w = b.drawOrder, D = b.slots;
			for (let b = 0, O = K.length; b < O; b++) w[b] = D[K[b]];
		}
	}
};
_defineProperty(DrawOrderTimeline, "propertyIds", ["" + Property.drawOrder]);
var IkConstraintTimeline = class extends CurveTimeline {
	constructor(b, w, D) {
		super(b, w, [Property.ikConstraint + "|" + D]), _defineProperty(this, "constraintIndex", 0), this.constraintIndex = D;
	}
	getFrameEntries() {
		return 6;
	}
	setFrame(b, w, D, O, F, U, W) {
		b *= 6, this.frames[b] = w, this.frames[b + 1] = D, this.frames[b + 2] = O, this.frames[b + 3] = F, this.frames[b + 4] = U ? 1 : 0, this.frames[b + 5] = W ? 1 : 0;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.ikConstraints[this.constraintIndex];
		if (!G.active) return;
		let K = this.frames;
		if (D < K[0]) {
			switch (U) {
				case MixBlend.setup:
					G.mix = G.data.mix, G.softness = G.data.softness, G.bendDirection = G.data.bendDirection, G.compress = G.data.compress, G.stretch = G.data.stretch;
					return;
				case MixBlend.first: G.mix += (G.data.mix - G.mix) * F, G.softness += (G.data.softness - G.softness) * F, G.bendDirection = G.data.bendDirection, G.compress = G.data.compress, G.stretch = G.data.stretch;
			}
			return;
		}
		let q = 0, J = 0, Y = Timeline.search(K, D, 6), X = this.curves[Y / 6];
		switch (X) {
			case 0:
				let b = K[Y];
				q = K[Y + 1], J = K[Y + 2];
				let w = (D - b) / (K[Y + 6] - b);
				q += (K[Y + 6 + 1] - q) * w, J += (K[Y + 6 + 2] - J) * w;
				break;
			case 1:
				q = K[Y + 1], J = K[Y + 2];
				break;
			default: q = this.getBezierValue(D, Y, 1, X - 2), J = this.getBezierValue(D, Y, 2, X + 18 - 2);
		}
		U == MixBlend.setup ? (G.mix = G.data.mix + (q - G.data.mix) * F, G.softness = G.data.softness + (J - G.data.softness) * F, W == MixDirection.mixOut ? (G.bendDirection = G.data.bendDirection, G.compress = G.data.compress, G.stretch = G.data.stretch) : (G.bendDirection = K[Y + 3], G.compress = K[Y + 4] != 0, G.stretch = K[Y + 5] != 0)) : (G.mix += (q - G.mix) * F, G.softness += (J - G.softness) * F, W == MixDirection.mixIn && (G.bendDirection = K[Y + 3], G.compress = K[Y + 4] != 0, G.stretch = K[Y + 5] != 0));
	}
}, TransformConstraintTimeline = class extends CurveTimeline {
	constructor(b, w, D) {
		super(b, w, [Property.transformConstraint + "|" + D]), _defineProperty(this, "constraintIndex", 0), this.constraintIndex = D;
	}
	getFrameEntries() {
		return 7;
	}
	setFrame(b, w, D, O, F, U, W, G) {
		let K = this.frames;
		b *= 7, K[b] = w, K[b + 1] = D, K[b + 2] = O, K[b + 3] = F, K[b + 4] = U, K[b + 5] = W, K[b + 6] = G;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.transformConstraints[this.constraintIndex];
		if (!G.active) return;
		let K = this.frames;
		if (D < K[0]) {
			let b = G.data;
			switch (U) {
				case MixBlend.setup:
					G.mixRotate = b.mixRotate, G.mixX = b.mixX, G.mixY = b.mixY, G.mixScaleX = b.mixScaleX, G.mixScaleY = b.mixScaleY, G.mixShearY = b.mixShearY;
					return;
				case MixBlend.first: G.mixRotate += (b.mixRotate - G.mixRotate) * F, G.mixX += (b.mixX - G.mixX) * F, G.mixY += (b.mixY - G.mixY) * F, G.mixScaleX += (b.mixScaleX - G.mixScaleX) * F, G.mixScaleY += (b.mixScaleY - G.mixScaleY) * F, G.mixShearY += (b.mixShearY - G.mixShearY) * F;
			}
			return;
		}
		let q, J, Y, X, Z, Ji, Yi = Timeline.search(K, D, 7), Q = this.curves[Yi / 7];
		switch (Q) {
			case 0:
				let b = K[Yi];
				q = K[Yi + 1], J = K[Yi + 2], Y = K[Yi + 3], X = K[Yi + 4], Z = K[Yi + 5], Ji = K[Yi + 6];
				let w = (D - b) / (K[Yi + 7] - b);
				q += (K[Yi + 7 + 1] - q) * w, J += (K[Yi + 7 + 2] - J) * w, Y += (K[Yi + 7 + 3] - Y) * w, X += (K[Yi + 7 + 4] - X) * w, Z += (K[Yi + 7 + 5] - Z) * w, Ji += (K[Yi + 7 + 6] - Ji) * w;
				break;
			case 1:
				q = K[Yi + 1], J = K[Yi + 2], Y = K[Yi + 3], X = K[Yi + 4], Z = K[Yi + 5], Ji = K[Yi + 6];
				break;
			default: q = this.getBezierValue(D, Yi, 1, Q - 2), J = this.getBezierValue(D, Yi, 2, Q + 18 - 2), Y = this.getBezierValue(D, Yi, 3, Q + 36 - 2), X = this.getBezierValue(D, Yi, 4, Q + 54 - 2), Z = this.getBezierValue(D, Yi, 5, Q + 72 - 2), Ji = this.getBezierValue(D, Yi, 6, Q + 90 - 2);
		}
		if (U == MixBlend.setup) {
			let b = G.data;
			G.mixRotate = b.mixRotate + (q - b.mixRotate) * F, G.mixX = b.mixX + (J - b.mixX) * F, G.mixY = b.mixY + (Y - b.mixY) * F, G.mixScaleX = b.mixScaleX + (X - b.mixScaleX) * F, G.mixScaleY = b.mixScaleY + (Z - b.mixScaleY) * F, G.mixShearY = b.mixShearY + (Ji - b.mixShearY) * F;
		} else G.mixRotate += (q - G.mixRotate) * F, G.mixX += (J - G.mixX) * F, G.mixY += (Y - G.mixY) * F, G.mixScaleX += (X - G.mixScaleX) * F, G.mixScaleY += (Z - G.mixScaleY) * F, G.mixShearY += (Ji - G.mixShearY) * F;
	}
}, PathConstraintPositionTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.pathConstraintPosition + "|" + D), _defineProperty(this, "constraintIndex", 0), this.constraintIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.pathConstraints[this.constraintIndex];
		G.active && (G.position = this.getAbsoluteValue(D, F, U, G.position, G.data.position));
	}
}, PathConstraintSpacingTimeline = class extends CurveTimeline1 {
	constructor(b, w, D) {
		super(b, w, Property.pathConstraintSpacing + "|" + D), _defineProperty(this, "constraintIndex", 0), this.constraintIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.pathConstraints[this.constraintIndex];
		G.active && (G.spacing = this.getAbsoluteValue(D, F, U, G.spacing, G.data.spacing));
	}
}, PathConstraintMixTimeline = class extends CurveTimeline {
	constructor(b, w, D) {
		super(b, w, [Property.pathConstraintMix + "|" + D]), _defineProperty(this, "constraintIndex", 0), this.constraintIndex = D;
	}
	getFrameEntries() {
		return 4;
	}
	setFrame(b, w, D, O, F) {
		let U = this.frames;
		b <<= 2, U[b] = w, U[b + 1] = D, U[b + 2] = O, U[b + 3] = F;
	}
	apply(b, w, D, O, F, U, W) {
		let G = b.pathConstraints[this.constraintIndex];
		if (!G.active) return;
		let K = this.frames;
		if (D < K[0]) {
			switch (U) {
				case MixBlend.setup:
					G.mixRotate = G.data.mixRotate, G.mixX = G.data.mixX, G.mixY = G.data.mixY;
					return;
				case MixBlend.first: G.mixRotate += (G.data.mixRotate - G.mixRotate) * F, G.mixX += (G.data.mixX - G.mixX) * F, G.mixY += (G.data.mixY - G.mixY) * F;
			}
			return;
		}
		let q, J, Y, X = Timeline.search(K, D, 4), Z = this.curves[X >> 2];
		switch (Z) {
			case 0:
				let b = K[X];
				q = K[X + 1], J = K[X + 2], Y = K[X + 3];
				let w = (D - b) / (K[X + 4] - b);
				q += (K[X + 4 + 1] - q) * w, J += (K[X + 4 + 2] - J) * w, Y += (K[X + 4 + 3] - Y) * w;
				break;
			case 1:
				q = K[X + 1], J = K[X + 2], Y = K[X + 3];
				break;
			default: q = this.getBezierValue(D, X, 1, Z - 2), J = this.getBezierValue(D, X, 2, Z + 18 - 2), Y = this.getBezierValue(D, X, 3, Z + 36 - 2);
		}
		if (U == MixBlend.setup) {
			let b = G.data;
			G.mixRotate = b.mixRotate + (q - b.mixRotate) * F, G.mixX = b.mixX + (J - b.mixX) * F, G.mixY = b.mixY + (Y - b.mixY) * F;
		} else G.mixRotate += (q - G.mixRotate) * F, G.mixX += (J - G.mixX) * F, G.mixY += (Y - G.mixY) * F;
	}
}, PhysicsConstraintTimeline = class extends CurveTimeline1 {
	constructor(b, w, D, O) {
		super(b, w, O + "|" + D), _defineProperty(this, "constraintIndex", 0), this.constraintIndex = D;
	}
	apply(b, w, D, O, F, U, W) {
		let G;
		if (this.constraintIndex == -1) {
			let w = D >= this.frames[0] ? this.getCurveValue(D) : 0;
			for (let O of b.physicsConstraints) O.active && this.global(O.data) && this.set(O, this.getAbsoluteValue2(D, F, U, this.get(O), this.setup(O), w));
		} else G = b.physicsConstraints[this.constraintIndex], G.active && this.set(G, this.getAbsoluteValue(D, F, U, this.get(G), this.setup(G)));
	}
}, PhysicsConstraintInertiaTimeline = class extends PhysicsConstraintTimeline {
	constructor(b, w, D) {
		super(b, w, D, Property.physicsConstraintInertia);
	}
	setup(b) {
		return b.data.inertia;
	}
	get(b) {
		return b.inertia;
	}
	set(b, w) {
		b.inertia = w;
	}
	global(b) {
		return b.inertiaGlobal;
	}
}, PhysicsConstraintStrengthTimeline = class extends PhysicsConstraintTimeline {
	constructor(b, w, D) {
		super(b, w, D, Property.physicsConstraintStrength);
	}
	setup(b) {
		return b.data.strength;
	}
	get(b) {
		return b.strength;
	}
	set(b, w) {
		b.strength = w;
	}
	global(b) {
		return b.strengthGlobal;
	}
}, PhysicsConstraintDampingTimeline = class extends PhysicsConstraintTimeline {
	constructor(b, w, D) {
		super(b, w, D, Property.physicsConstraintDamping);
	}
	setup(b) {
		return b.data.damping;
	}
	get(b) {
		return b.damping;
	}
	set(b, w) {
		b.damping = w;
	}
	global(b) {
		return b.dampingGlobal;
	}
}, PhysicsConstraintMassTimeline = class extends PhysicsConstraintTimeline {
	constructor(b, w, D) {
		super(b, w, D, Property.physicsConstraintMass);
	}
	setup(b) {
		return 1 / b.data.massInverse;
	}
	get(b) {
		return 1 / b.massInverse;
	}
	set(b, w) {
		b.massInverse = 1 / w;
	}
	global(b) {
		return b.massGlobal;
	}
}, PhysicsConstraintWindTimeline = class extends PhysicsConstraintTimeline {
	constructor(b, w, D) {
		super(b, w, D, Property.physicsConstraintWind);
	}
	setup(b) {
		return b.data.wind;
	}
	get(b) {
		return b.wind;
	}
	set(b, w) {
		b.wind = w;
	}
	global(b) {
		return b.windGlobal;
	}
}, PhysicsConstraintGravityTimeline = class extends PhysicsConstraintTimeline {
	constructor(b, w, D) {
		super(b, w, D, Property.physicsConstraintGravity);
	}
	setup(b) {
		return b.data.gravity;
	}
	get(b) {
		return b.gravity;
	}
	set(b, w) {
		b.gravity = w;
	}
	global(b) {
		return b.gravityGlobal;
	}
}, PhysicsConstraintMixTimeline = class extends PhysicsConstraintTimeline {
	constructor(b, w, D) {
		super(b, w, D, Property.physicsConstraintMix);
	}
	setup(b) {
		return b.data.mix;
	}
	get(b) {
		return b.mix;
	}
	set(b, w) {
		b.mix = w;
	}
	global(b) {
		return b.mixGlobal;
	}
}, PhysicsConstraintResetTimeline = class b extends Timeline {
	constructor(w, D) {
		super(w, b.propertyIds), _defineProperty(this, "constraintIndex", void 0), this.constraintIndex = D;
	}
	getFrameCount() {
		return this.frames.length;
	}
	setFrame(b, w) {
		this.frames[b] = w;
	}
	apply(b, w, D, O, F, U, W) {
		let G;
		if (this.constraintIndex != -1 && (G = b.physicsConstraints[this.constraintIndex], !G.active)) return;
		let K = this.frames;
		if (w > D) this.apply(b, w, Number.MAX_VALUE, [], F, U, W), w = -1;
		else if (w >= K[K.length - 1]) return;
		if (!(D < K[0]) && (w < K[0] || D >= K[Timeline.search1(K, w) + 1])) if (G != null) G.reset();
		else for (let w of b.physicsConstraints) w.active && w.reset();
	}
};
_defineProperty(PhysicsConstraintResetTimeline, "propertyIds", [Property.physicsConstraintReset.toString()]);
var SequenceTimeline = class b extends Timeline {
	constructor(b, w, D) {
		super(b, [Property.sequence + "|" + w + "|" + D.sequence.id]), _defineProperty(this, "slotIndex", void 0), _defineProperty(this, "attachment", void 0), this.slotIndex = w, this.attachment = D;
	}
	getFrameEntries() {
		return b.ENTRIES;
	}
	getSlotIndex() {
		return this.slotIndex;
	}
	getAttachment() {
		return this.attachment;
	}
	setFrame(w, D, O, F, U) {
		let W = this.frames;
		w *= b.ENTRIES, W[w] = D, W[w + b.MODE] = O | F << 4, W[w + b.DELAY] = U;
	}
	apply(w, D, O, F, U, W, G) {
		let K = w.slots[this.slotIndex];
		if (!K.bone.active) return;
		let q = K.attachment, J = this.attachment;
		if (q != J && (!(q instanceof VertexAttachment) || q.timelineAttachment != J)) return;
		if (G == MixDirection.mixOut) {
			W == MixBlend.setup && (K.sequenceIndex = -1);
			return;
		}
		let Y = this.frames;
		if (O < Y[0]) {
			(W == MixBlend.setup || W == MixBlend.first) && (K.sequenceIndex = -1);
			return;
		}
		let X = Timeline.search(Y, O, b.ENTRIES), Z = Y[X], Ji = Y[X + b.MODE], Yi = Y[X + b.DELAY];
		if (!this.attachment.sequence) return;
		let Q = Ji >> 4, Xi = this.attachment.sequence.regions.length, Zi = SequenceModeValues[Ji & 15];
		if (Zi != SequenceMode.hold) switch (Q += (O - Z) / Yi + 1e-5 | 0, Zi) {
			case SequenceMode.once:
				Q = Math.min(Xi - 1, Q);
				break;
			case SequenceMode.loop:
				Q %= Xi;
				break;
			case SequenceMode.pingpong: {
				let b = (Xi << 1) - 2;
				Q = b == 0 ? 0 : Q % b, Q >= Xi && (Q = b - Q);
				break;
			}
			case SequenceMode.onceReverse:
				Q = Math.max(Xi - 1 - Q, 0);
				break;
			case SequenceMode.loopReverse:
				Q = Xi - 1 - Q % Xi;
				break;
			case SequenceMode.pingpongReverse: {
				let b = (Xi << 1) - 2;
				Q = b == 0 ? 0 : (Q + Xi - 1) % b, Q >= Xi && (Q = b - Q);
			}
		}
		K.sequenceIndex = Q;
	}
};
_defineProperty(SequenceTimeline, "ENTRIES", 3), _defineProperty(SequenceTimeline, "MODE", 1), _defineProperty(SequenceTimeline, "DELAY", 2);
var AnimationState = class b {
	static emptyAnimation() {
		return b._emptyAnimation;
	}
	constructor(b) {
		_defineProperty(this, "data", void 0), _defineProperty(this, "tracks", []), _defineProperty(this, "timeScale", 1), _defineProperty(this, "unkeyedState", 0), _defineProperty(this, "events", []), _defineProperty(this, "listeners", []), _defineProperty(this, "queue", new EventQueue(this)), _defineProperty(this, "propertyIDs", new StringSet()), _defineProperty(this, "animationsChanged", !1), _defineProperty(this, "trackEntryPool", new Pool(() => new TrackEntry())), this.data = b;
	}
	update(b) {
		b *= this.timeScale;
		let w = this.tracks;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (!O) continue;
			O.animationLast = O.nextAnimationLast, O.trackLast = O.nextTrackLast;
			let F = b * O.timeScale;
			if (O.delay > 0) {
				if (O.delay -= F, O.delay > 0) continue;
				F = -O.delay, O.delay = 0;
			}
			let U = O.next;
			if (U) {
				let w = O.trackLast - U.delay;
				if (w >= 0) {
					for (U.delay = 0, U.trackTime += O.timeScale == 0 ? 0 : (w / O.timeScale + b) * U.timeScale, O.trackTime += F, this.setCurrent(D, U, !0); U.mixingFrom;) U.mixTime += b, U = U.mixingFrom;
					continue;
				}
			} else if (O.trackLast >= O.trackEnd && !O.mixingFrom) {
				w[D] = null, this.queue.end(O), this.clearNext(O);
				continue;
			}
			if (O.mixingFrom && this.updateMixingFrom(O, b)) {
				let b = O.mixingFrom;
				for (O.mixingFrom = null, b && (b.mixingTo = null); b;) this.queue.end(b), b = b.mixingFrom;
			}
			O.trackTime += F;
		}
		this.queue.drain();
	}
	updateMixingFrom(b, w) {
		let D = b.mixingFrom;
		if (!D) return !0;
		let O = this.updateMixingFrom(D, w);
		return D.animationLast = D.nextAnimationLast, D.trackLast = D.nextTrackLast, b.nextTrackLast != -1 && b.mixTime >= b.mixDuration ? ((D.totalAlpha == 0 || b.mixDuration == 0) && (b.mixingFrom = D.mixingFrom, D.mixingFrom != null && (D.mixingFrom.mixingTo = b), b.interruptAlpha = D.interruptAlpha, this.queue.end(D)), O) : (D.trackTime += w * D.timeScale, b.mixTime += w, !1);
	}
	apply(b) {
		if (!b) throw Error("skeleton cannot be null.");
		this.animationsChanged && this._animationsChanged();
		let w = this.events, D = this.tracks, O = !1;
		for (let U = 0, W = D.length; U < W; U++) {
			let W = D[U];
			if (!W || W.delay > 0) continue;
			O = !0;
			let G = U == 0 ? MixBlend.first : W.mixBlend, K = W.alpha;
			W.mixingFrom ? K *= this.applyMixingFrom(W, b, G) : W.trackTime >= W.trackEnd && !W.next && (K = 0);
			let q = K >= W.alphaAttachmentThreshold, J = W.animationLast, Y = W.getAnimationTime(), X = Y, Z = w;
			W.reverse && (X = W.animation.duration - X, Z = null);
			let Ji = W.animation.timelines, Yi = Ji.length;
			if (U == 0 && K == 1 || G == MixBlend.add) {
				U == 0 && (q = !0);
				for (let w = 0; w < Yi; w++) {
					Utils.webkit602BugfixHelper(K, G);
					var F = Ji[w];
					F instanceof AttachmentTimeline ? this.applyAttachmentTimeline(F, b, X, G, q) : F.apply(b, J, X, Z, K, G, MixDirection.mixIn);
				}
			} else {
				let w = W.timelineMode, D = W.shortestRotation, O = !D && W.timelinesRotation.length != Yi << 1;
				O && (W.timelinesRotation.length = Yi << 1);
				for (let F = 0; F < Yi; F++) {
					let U = Ji[F], Y = w[F] == 0 ? G : MixBlend.setup;
					!D && U instanceof RotateTimeline ? this.applyRotateTimeline(U, b, X, K, Y, W.timelinesRotation, F << 1, O) : U instanceof AttachmentTimeline ? this.applyAttachmentTimeline(U, b, X, G, q) : (Utils.webkit602BugfixHelper(K, G), U.apply(b, J, X, Z, K, Y, MixDirection.mixIn));
				}
			}
			this.queueEvents(W, Y), w.length = 0, W.nextAnimationLast = Y, W.nextTrackLast = W.trackTime;
		}
		for (var U = this.unkeyedState + 1, W = b.slots, G = 0, K = b.slots.length; G < K; G++) {
			var q = W[G];
			if (q.attachmentState == U) {
				var J = q.data.attachmentName;
				q.setAttachment(J ? b.getAttachment(q.data.index, J) : null);
			}
		}
		return this.unkeyedState += 2, this.queue.drain(), O;
	}
	applyMixingFrom(b, w, D) {
		let O = b.mixingFrom;
		O.mixingFrom && this.applyMixingFrom(O, w, D);
		let F = 0;
		b.mixDuration == 0 ? (F = 1, D == MixBlend.first && (D = MixBlend.setup)) : (F = b.mixTime / b.mixDuration, F > 1 && (F = 1), D != MixBlend.first && (D = O.mixBlend));
		let U = F < O.mixAttachmentThreshold, W = F < O.mixDrawOrderThreshold, G = O.animation.timelines, K = G.length, q = O.alpha * b.interruptAlpha, J = q * (1 - F), Y = O.animationLast, X = O.getAnimationTime(), Z = X, Ji = null;
		if (O.reverse ? Z = O.animation.duration - Z : F < O.eventThreshold && (Ji = this.events), D == MixBlend.add) for (let b = 0; b < K; b++) G[b].apply(w, Y, Z, Ji, J, D, MixDirection.mixOut);
		else {
			let b = O.timelineMode, F = O.timelineHoldMix, X = O.shortestRotation, Yi = !X && O.timelinesRotation.length != K << 1;
			Yi && (O.timelinesRotation.length = K << 1), O.totalAlpha = 0;
			for (let Q = 0; Q < K; Q++) {
				let K = G[Q], Xi = MixDirection.mixOut, Zi, Qi = 0;
				switch (b[Q]) {
					case 0:
						if (!W && K instanceof DrawOrderTimeline) continue;
						Zi = D, Qi = J;
						break;
					case 1:
						Zi = MixBlend.setup, Qi = J;
						break;
					case 2:
						Zi = D, Qi = q;
						break;
					case 3:
						Zi = MixBlend.setup, Qi = q;
						break;
					default:
						Zi = MixBlend.setup;
						let b = F[Q];
						Qi = q * Math.max(0, 1 - b.mixTime / b.mixDuration);
						break;
				}
				O.totalAlpha += Qi, !X && K instanceof RotateTimeline ? this.applyRotateTimeline(K, w, Z, Qi, Zi, O.timelinesRotation, Q << 1, Yi) : K instanceof AttachmentTimeline ? this.applyAttachmentTimeline(K, w, Z, Zi, U && Qi >= O.alphaAttachmentThreshold) : (Utils.webkit602BugfixHelper(Qi, D), W && K instanceof DrawOrderTimeline && Zi == MixBlend.setup && (Xi = MixDirection.mixIn), K.apply(w, Y, Z, Ji, Qi, Zi, Xi));
			}
		}
		return b.mixDuration > 0 && this.queueEvents(O, X), this.events.length = 0, O.nextAnimationLast = X, O.nextTrackLast = O.trackTime, F;
	}
	applyAttachmentTimeline(b, w, D, O, F) {
		var U = w.slots[b.slotIndex];
		U.bone.active && (D < b.frames[0] ? (O == MixBlend.setup || O == MixBlend.first) && this.setAttachment(w, U, U.data.attachmentName, F) : this.setAttachment(w, U, b.attachmentNames[Timeline.search1(b.frames, D)], F), U.attachmentState <= this.unkeyedState && (U.attachmentState = this.unkeyedState + 1));
	}
	setAttachment(b, w, D, O) {
		w.setAttachment(D ? b.getAttachment(w.data.index, D) : null), O && (w.attachmentState = this.unkeyedState + 2);
	}
	applyRotateTimeline(b, w, D, O, F, U, W, G) {
		if (G && (U[W] = 0), O == 1) {
			b.apply(w, 0, D, null, 1, F, MixDirection.mixIn);
			return;
		}
		let K = w.bones[b.boneIndex];
		if (!K.active) return;
		let q = b.frames, J = 0, Y = 0;
		if (D < q[0]) switch (F) {
			case MixBlend.setup: K.rotation = K.data.rotation;
			default: return;
			case MixBlend.first: J = K.rotation, Y = K.data.rotation;
		}
		else J = F == MixBlend.setup ? K.data.rotation : K.rotation, Y = K.data.rotation + b.getCurveValue(D);
		let X = 0, Z = Y - J;
		if (Z -= Math.ceil(Z / 360 - .5) * 360, Z == 0) X = U[W];
		else {
			let b = 0, w = 0;
			G ? (b = 0, w = Z) : (b = U[W], w = U[W + 1]);
			let D = b - b % 360;
			X = Z + D;
			let O = Z >= 0, F = b >= 0;
			Math.abs(w) <= 90 && MathUtils.signum(w) != MathUtils.signum(Z) && (Math.abs(b - D) > 180 ? (X += 360 * MathUtils.signum(b), F = O) : D == 0 ? F = O : X -= 360 * MathUtils.signum(b)), F != O && (X += 360 * MathUtils.signum(b)), U[W] = X;
		}
		U[W + 1] = Z, K.rotation = J + X * O;
	}
	queueEvents(b, w) {
		let D = b.animationStart, O = b.animationEnd, F = O - D, U = b.trackLast % F, W = this.events, G = 0, K = W.length;
		for (; G < K; G++) {
			let w = W[G];
			if (w.time < U) break;
			w.time > O || this.queue.event(b, w);
		}
		let q = !1;
		if (b.loop) if (F == 0) q = !0;
		else {
			let w = Math.floor(b.trackTime / F);
			q = w > 0 && w > Math.floor(b.trackLast / F);
		}
		else q = w >= O && b.animationLast < O;
		for (q && this.queue.complete(b); G < K; G++) {
			let w = W[G];
			w.time < D || this.queue.event(b, w);
		}
	}
	clearTracks() {
		let b = this.queue.drainDisabled;
		this.queue.drainDisabled = !0;
		for (let b = 0, w = this.tracks.length; b < w; b++) this.clearTrack(b);
		this.tracks.length = 0, this.queue.drainDisabled = b, this.queue.drain();
	}
	clearTrack(b) {
		if (b >= this.tracks.length) return;
		let w = this.tracks[b];
		if (!w) return;
		this.queue.end(w), this.clearNext(w);
		let D = w;
		for (;;) {
			let b = D.mixingFrom;
			if (!b) break;
			this.queue.end(b), D.mixingFrom = null, D.mixingTo = null, D = b;
		}
		this.tracks[w.trackIndex] = null, this.queue.drain();
	}
	setCurrent(b, w, D) {
		let O = this.expandToIndex(b);
		this.tracks[b] = w, w.previous = null, O && (D && this.queue.interrupt(O), w.mixingFrom = O, O.mixingTo = w, w.mixTime = 0, O.mixingFrom && O.mixDuration > 0 && (w.interruptAlpha *= Math.min(1, O.mixTime / O.mixDuration)), O.timelinesRotation.length = 0), this.queue.start(w);
	}
	setAnimation(b, w, D = !1) {
		let O = this.data.skeletonData.findAnimation(w);
		if (!O) throw Error("Animation not found: " + w);
		return this.setAnimationWith(b, O, D);
	}
	setAnimationWith(b, w, D = !1) {
		if (!w) throw Error("animation cannot be null.");
		let O = !0, F = this.expandToIndex(b);
		F && (F.nextTrackLast == -1 ? (this.tracks[b] = F.mixingFrom, this.queue.interrupt(F), this.queue.end(F), this.clearNext(F), F = F.mixingFrom, O = !1) : this.clearNext(F));
		let U = this.trackEntry(b, w, D, F);
		return this.setCurrent(b, U, O), this.queue.drain(), U;
	}
	addAnimation(b, w, D = !1, O = 0) {
		let F = this.data.skeletonData.findAnimation(w);
		if (!F) throw Error("Animation not found: " + w);
		return this.addAnimationWith(b, F, D, O);
	}
	addAnimationWith(b, w, D = !1, O = 0) {
		if (!w) throw Error("animation cannot be null.");
		let F = this.expandToIndex(b);
		if (F) for (; F.next;) F = F.next;
		let U = this.trackEntry(b, w, D, F);
		return F ? (F.next = U, U.previous = F, O <= 0 && (O = Math.max(O + F.getTrackComplete() - U.mixDuration, 0))) : (this.setCurrent(b, U, !0), this.queue.drain(), O < 0 && (O = 0)), U.delay = O, U;
	}
	setEmptyAnimation(w, D = 0) {
		let O = this.setAnimationWith(w, b.emptyAnimation(), !1);
		return O.mixDuration = D, O.trackEnd = D, O;
	}
	addEmptyAnimation(w, D = 0, O = 0) {
		let F = this.addAnimationWith(w, b.emptyAnimation(), !1, O);
		return O <= 0 && (F.delay = Math.max(F.delay + F.mixDuration - D, 0)), F.mixDuration = D, F.trackEnd = D, F;
	}
	setEmptyAnimations(b = 0) {
		let w = this.queue.drainDisabled;
		this.queue.drainDisabled = !0;
		for (let w = 0, D = this.tracks.length; w < D; w++) {
			let D = this.tracks[w];
			D && this.setEmptyAnimation(D.trackIndex, b);
		}
		this.queue.drainDisabled = w, this.queue.drain();
	}
	expandToIndex(b) {
		return b < this.tracks.length ? this.tracks[b] : (Utils.ensureArrayCapacity(this.tracks, b + 1, null), this.tracks.length = b + 1, null);
	}
	trackEntry(b, w, D, O) {
		let F = this.trackEntryPool.obtain();
		return F.reset(), F.trackIndex = b, F.animation = w, F.loop = D, F.holdPrevious = !1, F.reverse = !1, F.shortestRotation = !1, F.eventThreshold = 0, F.alphaAttachmentThreshold = 0, F.mixAttachmentThreshold = 0, F.mixDrawOrderThreshold = 0, F.animationStart = 0, F.animationEnd = w.duration, F.animationLast = -1, F.nextAnimationLast = -1, F.delay = 0, F.trackTime = 0, F.trackLast = -1, F.nextTrackLast = -1, F.trackEnd = Number.MAX_VALUE, F.timeScale = 1, F.alpha = 1, F.mixTime = 0, F.mixDuration = O ? this.data.getMix(O.animation, w) : 0, F.interruptAlpha = 1, F.totalAlpha = 0, F.mixBlend = MixBlend.replace, F;
	}
	clearNext(b) {
		let w = b.next;
		for (; w;) this.queue.dispose(w), w = w.next;
		b.next = null;
	}
	_animationsChanged() {
		this.animationsChanged = !1, this.propertyIDs.clear();
		let b = this.tracks;
		for (let w = 0, D = b.length; w < D; w++) {
			let D = b[w];
			if (D) {
				for (; D.mixingFrom;) D = D.mixingFrom;
				do
					(!D.mixingTo || D.mixBlend != MixBlend.add) && this.computeHold(D), D = D.mixingTo;
				while (D);
			}
		}
	}
	computeHold(b) {
		let w = b.mixingTo, D = b.animation.timelines, O = b.animation.timelines.length, F = b.timelineMode;
		F.length = O;
		let U = b.timelineHoldMix;
		U.length = 0;
		let W = this.propertyIDs;
		if (w && w.holdPrevious) {
			for (let b = 0; b < O; b++) F[b] = W.addAll(D[b].getPropertyIds()) ? 3 : 2;
			return;
		}
		outer: for (let G = 0; G < O; G++) {
			let O = D[G], K = O.getPropertyIds();
			if (!W.addAll(K)) F[G] = 0;
			else if (!w || O instanceof AttachmentTimeline || O instanceof DrawOrderTimeline || O instanceof EventTimeline || !w.animation.hasTimeline(K)) F[G] = 1;
			else {
				for (let D = w.mixingTo; D; D = D.mixingTo) if (!D.animation.hasTimeline(K)) {
					if (b.mixDuration > 0) {
						F[G] = 4, U[G] = D;
						continue outer;
					}
					break;
				}
				F[G] = 3;
			}
		}
	}
	getCurrent(b) {
		return b >= this.tracks.length ? null : this.tracks[b];
	}
	addListener(b) {
		if (!b) throw Error("listener cannot be null.");
		this.listeners.push(b);
	}
	removeListener(b) {
		let w = this.listeners.indexOf(b);
		w >= 0 && this.listeners.splice(w, 1);
	}
	clearListeners() {
		this.listeners.length = 0;
	}
	clearListenerNotifications() {
		this.queue.clear();
	}
};
_defineProperty(AnimationState, "_emptyAnimation", new Animation("<empty>", [], 0));
var TrackEntry = class {
	constructor() {
		_defineProperty(this, "animation", null), _defineProperty(this, "previous", null), _defineProperty(this, "next", null), _defineProperty(this, "mixingFrom", null), _defineProperty(this, "mixingTo", null), _defineProperty(this, "listener", null), _defineProperty(this, "trackIndex", 0), _defineProperty(this, "loop", !1), _defineProperty(this, "holdPrevious", !1), _defineProperty(this, "reverse", !1), _defineProperty(this, "shortestRotation", !1), _defineProperty(this, "eventThreshold", 0), _defineProperty(this, "mixAttachmentThreshold", 0), _defineProperty(this, "alphaAttachmentThreshold", 0), _defineProperty(this, "mixDrawOrderThreshold", 0), _defineProperty(this, "animationStart", 0), _defineProperty(this, "animationEnd", 0), _defineProperty(this, "animationLast", 0), _defineProperty(this, "nextAnimationLast", 0), _defineProperty(this, "delay", 0), _defineProperty(this, "trackTime", 0), _defineProperty(this, "trackLast", 0), _defineProperty(this, "nextTrackLast", 0), _defineProperty(this, "trackEnd", 0), _defineProperty(this, "timeScale", 0), _defineProperty(this, "alpha", 0), _defineProperty(this, "mixTime", 0), _defineProperty(this, "_mixDuration", 0), _defineProperty(this, "interruptAlpha", 0), _defineProperty(this, "totalAlpha", 0), _defineProperty(this, "mixBlend", MixBlend.replace), _defineProperty(this, "timelineMode", []), _defineProperty(this, "timelineHoldMix", []), _defineProperty(this, "timelinesRotation", []);
	}
	get mixDuration() {
		return this._mixDuration;
	}
	set mixDuration(b) {
		this._mixDuration = b;
	}
	setMixDurationWithDelay(b, w) {
		this._mixDuration = b, w <= 0 && (w = this.previous == null ? 0 : Math.max(w + this.previous.getTrackComplete() - b, 0)), this.delay = w;
	}
	reset() {
		this.next = null, this.previous = null, this.mixingFrom = null, this.mixingTo = null, this.animation = null, this.listener = null, this.timelineMode.length = 0, this.timelineHoldMix.length = 0, this.timelinesRotation.length = 0;
	}
	getAnimationTime() {
		if (this.loop) {
			let b = this.animationEnd - this.animationStart;
			return b == 0 ? this.animationStart : this.trackTime % b + this.animationStart;
		}
		return Math.min(this.trackTime + this.animationStart, this.animationEnd);
	}
	setAnimationLast(b) {
		this.animationLast = b, this.nextAnimationLast = b;
	}
	isComplete() {
		return this.trackTime >= this.animationEnd - this.animationStart;
	}
	resetRotationDirections() {
		this.timelinesRotation.length = 0;
	}
	getTrackComplete() {
		let b = this.animationEnd - this.animationStart;
		if (b != 0) {
			if (this.loop) return b * (1 + (this.trackTime / b | 0));
			if (this.trackTime < b) return b;
		}
		return this.trackTime;
	}
	wasApplied() {
		return this.nextTrackLast != -1;
	}
	isNextReady() {
		return this.next != null && this.nextTrackLast - this.next.delay >= 0;
	}
}, EventQueue = class {
	constructor(b) {
		_defineProperty(this, "objects", []), _defineProperty(this, "drainDisabled", !1), _defineProperty(this, "animState", void 0), this.animState = b;
	}
	start(b) {
		this.objects.push(EventType.start), this.objects.push(b), this.animState.animationsChanged = !0;
	}
	interrupt(b) {
		this.objects.push(EventType.interrupt), this.objects.push(b);
	}
	end(b) {
		this.objects.push(EventType.end), this.objects.push(b), this.animState.animationsChanged = !0;
	}
	dispose(b) {
		this.objects.push(EventType.dispose), this.objects.push(b);
	}
	complete(b) {
		this.objects.push(EventType.complete), this.objects.push(b);
	}
	event(b, w) {
		this.objects.push(EventType.event), this.objects.push(b), this.objects.push(w);
	}
	drain() {
		if (this.drainDisabled) return;
		this.drainDisabled = !0;
		let b = this.objects, w = this.animState.listeners;
		for (let D = 0; D < b.length; D += 2) {
			let O = b[D], F = b[D + 1];
			switch (O) {
				case EventType.start:
					F.listener && F.listener.start && F.listener.start(F);
					for (let b = 0; b < w.length; b++) {
						let D = w[b];
						D.start && D.start(F);
					}
					break;
				case EventType.interrupt:
					F.listener && F.listener.interrupt && F.listener.interrupt(F);
					for (let b = 0; b < w.length; b++) {
						let D = w[b];
						D.interrupt && D.interrupt(F);
					}
					break;
				case EventType.end:
					F.listener && F.listener.end && F.listener.end(F);
					for (let b = 0; b < w.length; b++) {
						let D = w[b];
						D.end && D.end(F);
					}
				case EventType.dispose:
					F.listener && F.listener.dispose && F.listener.dispose(F);
					for (let b = 0; b < w.length; b++) {
						let D = w[b];
						D.dispose && D.dispose(F);
					}
					this.animState.trackEntryPool.free(F);
					break;
				case EventType.complete:
					F.listener && F.listener.complete && F.listener.complete(F);
					for (let b = 0; b < w.length; b++) {
						let D = w[b];
						D.complete && D.complete(F);
					}
					break;
				case EventType.event:
					let O = b[D++ + 2];
					F.listener && F.listener.event && F.listener.event(F, O);
					for (let b = 0; b < w.length; b++) {
						let D = w[b];
						D.event && D.event(F, O);
					}
					break;
			}
		}
		this.clear(), this.drainDisabled = !1;
	}
	clear() {
		this.objects.length = 0;
	}
}, EventType;
(function(b) {
	b[b.start = 0] = "start", b[b.interrupt = 1] = "interrupt", b[b.end = 2] = "end", b[b.dispose = 3] = "dispose", b[b.complete = 4] = "complete", b[b.event = 5] = "event";
})(EventType || (EventType = {}));
var AnimationStateData = class {
	constructor(b) {
		if (_defineProperty(this, "skeletonData", void 0), _defineProperty(this, "animationToMixTime", {}), _defineProperty(this, "defaultMix", 0), !b) throw Error("skeletonData cannot be null.");
		this.skeletonData = b;
	}
	setMix(b, w, D) {
		let O = this.skeletonData.findAnimation(b);
		if (!O) throw Error("Animation not found: " + b);
		let F = this.skeletonData.findAnimation(w);
		if (!F) throw Error("Animation not found: " + w);
		this.setMixWith(O, F, D);
	}
	setMixWith(b, w, D) {
		if (!b) throw Error("from cannot be null.");
		if (!w) throw Error("to cannot be null.");
		let O = b.name + "." + w.name;
		this.animationToMixTime[O] = D;
	}
	getMix(b, w) {
		let D = b.name + "." + w.name, O = this.animationToMixTime[D];
		return O === void 0 ? this.defaultMix : O;
	}
}, BoundingBoxAttachment = class b extends VertexAttachment {
	constructor(b) {
		super(b), _defineProperty(this, "color", new Color(1, 1, 1, 1));
	}
	copy() {
		let w = new b(this.name);
		return this.copyTo(w), w.color.setFromColor(this.color), w;
	}
}, ClippingAttachment = class b extends VertexAttachment {
	constructor(b) {
		super(b), _defineProperty(this, "endSlot", null), _defineProperty(this, "color", new Color(.2275, .2275, .8078, 1));
	}
	copy() {
		let w = new b(this.name);
		return this.copyTo(w), w.endSlot = this.endSlot, w.color.setFromColor(this.color), w;
	}
}, Texture = class {
	constructor(b) {
		_defineProperty(this, "_image", void 0), this._image = b;
	}
	getImage() {
		return this._image;
	}
}, TextureFilter;
(function(b) {
	b[b.Nearest = 9728] = "Nearest", b[b.Linear = 9729] = "Linear", b[b.MipMap = 9987] = "MipMap", b[b.MipMapNearestNearest = 9984] = "MipMapNearestNearest", b[b.MipMapLinearNearest = 9985] = "MipMapLinearNearest", b[b.MipMapNearestLinear = 9986] = "MipMapNearestLinear", b[b.MipMapLinearLinear = 9987] = "MipMapLinearLinear";
})(TextureFilter || (TextureFilter = {}));
var TextureWrap;
(function(b) {
	b[b.MirroredRepeat = 33648] = "MirroredRepeat", b[b.ClampToEdge = 33071] = "ClampToEdge", b[b.Repeat = 10497] = "Repeat";
})(TextureWrap || (TextureWrap = {}));
var TextureRegion = class {
	constructor() {
		_defineProperty(this, "texture", void 0), _defineProperty(this, "u", 0), _defineProperty(this, "v", 0), _defineProperty(this, "u2", 0), _defineProperty(this, "v2", 0), _defineProperty(this, "width", 0), _defineProperty(this, "height", 0), _defineProperty(this, "degrees", 0), _defineProperty(this, "offsetX", 0), _defineProperty(this, "offsetY", 0), _defineProperty(this, "originalWidth", 0), _defineProperty(this, "originalHeight", 0);
	}
}, TextureAtlas = class {
	constructor(b) {
		_defineProperty(this, "pages", []), _defineProperty(this, "regions", []);
		let w = new TextureAtlasReader(b), D = [
			,
			,
			,
			,
		], O = {};
		O.size = (b) => {
			b.width = parseInt(D[1]), b.height = parseInt(D[2]);
		}, O.format = () => {}, O.filter = (b) => {
			b.minFilter = Utils.enumValue(TextureFilter, D[1]), b.magFilter = Utils.enumValue(TextureFilter, D[2]);
		}, O.repeat = (b) => {
			D[1].indexOf("x") != -1 && (b.uWrap = TextureWrap.Repeat), D[1].indexOf("y") != -1 && (b.vWrap = TextureWrap.Repeat);
		}, O.pma = (b) => {
			b.pma = D[1] == "true";
		};
		var F = {};
		F.xy = (b) => {
			b.x = parseInt(D[1]), b.y = parseInt(D[2]);
		}, F.size = (b) => {
			b.width = parseInt(D[1]), b.height = parseInt(D[2]);
		}, F.bounds = (b) => {
			b.x = parseInt(D[1]), b.y = parseInt(D[2]), b.width = parseInt(D[3]), b.height = parseInt(D[4]);
		}, F.offset = (b) => {
			b.offsetX = parseInt(D[1]), b.offsetY = parseInt(D[2]);
		}, F.orig = (b) => {
			b.originalWidth = parseInt(D[1]), b.originalHeight = parseInt(D[2]);
		}, F.offsets = (b) => {
			b.offsetX = parseInt(D[1]), b.offsetY = parseInt(D[2]), b.originalWidth = parseInt(D[3]), b.originalHeight = parseInt(D[4]);
		}, F.rotate = (b) => {
			let w = D[1];
			w == "true" ? b.degrees = 90 : w != "false" && (b.degrees = parseInt(w));
		}, F.index = (b) => {
			b.index = parseInt(D[1]);
		};
		let U = w.readLine();
		for (; U && U.trim().length == 0;) U = w.readLine();
		for (; !(!U || U.trim().length == 0 || w.readEntry(D, U) == 0);) U = w.readLine();
		let W = null, G = null, K = null;
		for (; U !== null;) if (U.trim().length == 0) W = null, U = w.readLine();
		else if (W) {
			let b = new TextureAtlasRegion(W, U);
			for (;;) {
				let O = w.readEntry(D, U = w.readLine());
				if (O == 0) break;
				let W = F[D[0]];
				if (W) W(b);
				else {
					G || (G = []), K || (K = []), G.push(D[0]);
					let b = [];
					for (let w = 0; w < O; w++) b.push(parseInt(D[w + 1]));
					K.push(b);
				}
			}
			b.originalWidth == 0 && b.originalHeight == 0 && (b.originalWidth = b.width, b.originalHeight = b.height), G && G.length > 0 && K && K.length > 0 && (b.names = G, b.values = K, G = null, K = null), b.u = b.x / W.width, b.v = b.y / W.height, b.degrees == 90 ? (b.u2 = (b.x + b.height) / W.width, b.v2 = (b.y + b.width) / W.height) : (b.u2 = (b.x + b.width) / W.width, b.v2 = (b.y + b.height) / W.height), this.regions.push(b);
		} else {
			for (W = new TextureAtlasPage(U.trim()); w.readEntry(D, U = w.readLine()) != 0;) {
				let b = O[D[0]];
				b && b(W);
			}
			this.pages.push(W);
		}
	}
	findRegion(b) {
		for (let w = 0; w < this.regions.length; w++) if (this.regions[w].name == b) return this.regions[w];
		return null;
	}
	setTextures(b, w = "") {
		for (let D of this.pages) D.setTexture(b.get(w + D.name));
	}
	dispose() {
		for (let w = 0; w < this.pages.length; w++) {
			var b;
			(b = this.pages[w].texture) == null || b.dispose();
		}
	}
}, TextureAtlasReader = class {
	constructor(b) {
		_defineProperty(this, "lines", void 0), _defineProperty(this, "index", 0), this.lines = b.split(/\r\n|\r|\n/);
	}
	readLine() {
		return this.index >= this.lines.length ? null : this.lines[this.index++];
	}
	readEntry(b, w) {
		if (!w || (w = w.trim(), w.length == 0)) return 0;
		let D = w.indexOf(":");
		if (D == -1) return 0;
		b[0] = w.substr(0, D).trim();
		for (let O = 1, F = D + 1;; O++) {
			let D = w.indexOf(",", F);
			if (D == -1) return b[O] = w.substr(F).trim(), O;
			if (b[O] = w.substr(F, D - F).trim(), F = D + 1, O == 4) return 4;
		}
	}
}, TextureAtlasPage = class {
	constructor(b) {
		_defineProperty(this, "name", void 0), _defineProperty(this, "minFilter", TextureFilter.Nearest), _defineProperty(this, "magFilter", TextureFilter.Nearest), _defineProperty(this, "uWrap", TextureWrap.ClampToEdge), _defineProperty(this, "vWrap", TextureWrap.ClampToEdge), _defineProperty(this, "texture", null), _defineProperty(this, "width", 0), _defineProperty(this, "height", 0), _defineProperty(this, "pma", !1), _defineProperty(this, "regions", []), this.name = b;
	}
	setTexture(b) {
		this.texture = b, b.setFilters(this.minFilter, this.magFilter), b.setWraps(this.uWrap, this.vWrap);
		for (let w of this.regions) w.texture = b;
	}
}, TextureAtlasRegion = class extends TextureRegion {
	constructor(b, w) {
		super(), _defineProperty(this, "page", void 0), _defineProperty(this, "name", void 0), _defineProperty(this, "x", 0), _defineProperty(this, "y", 0), _defineProperty(this, "offsetX", 0), _defineProperty(this, "offsetY", 0), _defineProperty(this, "originalWidth", 0), _defineProperty(this, "originalHeight", 0), _defineProperty(this, "index", 0), _defineProperty(this, "degrees", 0), _defineProperty(this, "names", null), _defineProperty(this, "values", null), this.page = b, this.name = w, b.regions.push(this);
	}
}, MeshAttachment = class b extends VertexAttachment {
	constructor(b, w) {
		super(b), _defineProperty(this, "region", null), _defineProperty(this, "path", void 0), _defineProperty(this, "regionUVs", []), _defineProperty(this, "uvs", []), _defineProperty(this, "triangles", []), _defineProperty(this, "color", new Color(1, 1, 1, 1)), _defineProperty(this, "width", 0), _defineProperty(this, "height", 0), _defineProperty(this, "hullLength", 0), _defineProperty(this, "edges", []), _defineProperty(this, "parentMesh", null), _defineProperty(this, "sequence", null), _defineProperty(this, "tempColor", new Color(0, 0, 0, 0)), this.path = w;
	}
	updateRegion() {
		if (!this.region) throw Error("Region not set.");
		let b = this.regionUVs;
		(!this.uvs || this.uvs.length != b.length) && (this.uvs = Utils.newFloatArray(b.length));
		let w = this.uvs, D = this.uvs.length, O = this.region.u, F = this.region.v, U = 0, W = 0;
		if (this.region instanceof TextureAtlasRegion) {
			let G = this.region, K = G.page, q = K.width, J = K.height;
			switch (G.degrees) {
				case 90:
					O -= (G.originalHeight - G.offsetY - G.height) / q, F -= (G.originalWidth - G.offsetX - G.width) / J, U = G.originalHeight / q, W = G.originalWidth / J;
					for (let G = 0; G < D; G += 2) w[G] = O + b[G + 1] * U, w[G + 1] = F + (1 - b[G]) * W;
					return;
				case 180:
					O -= (G.originalWidth - G.offsetX - G.width) / q, F -= G.offsetY / J, U = G.originalWidth / q, W = G.originalHeight / J;
					for (let G = 0; G < D; G += 2) w[G] = O + (1 - b[G]) * U, w[G + 1] = F + (1 - b[G + 1]) * W;
					return;
				case 270:
					O -= G.offsetY / q, F -= G.offsetX / J, U = G.originalHeight / q, W = G.originalWidth / J;
					for (let G = 0; G < D; G += 2) w[G] = O + (1 - b[G + 1]) * U, w[G + 1] = F + b[G] * W;
					return;
			}
			O -= G.offsetX / q, F -= (G.originalHeight - G.offsetY - G.height) / J, U = G.originalWidth / q, W = G.originalHeight / J;
		} else this.region ? (U = this.region.u2 - O, W = this.region.v2 - F) : (O = F = 0, U = W = 1);
		for (let G = 0; G < D; G += 2) w[G] = O + b[G] * U, w[G + 1] = F + b[G + 1] * W;
	}
	getParentMesh() {
		return this.parentMesh;
	}
	setParentMesh(b) {
		this.parentMesh = b, b && (this.bones = b.bones, this.vertices = b.vertices, this.worldVerticesLength = b.worldVerticesLength, this.regionUVs = b.regionUVs, this.triangles = b.triangles, this.hullLength = b.hullLength, this.worldVerticesLength = b.worldVerticesLength);
	}
	copy() {
		if (this.parentMesh) return this.newLinkedMesh();
		let w = new b(this.name, this.path);
		return w.region = this.region, w.color.setFromColor(this.color), this.copyTo(w), w.regionUVs = Array(this.regionUVs.length), Utils.arrayCopy(this.regionUVs, 0, w.regionUVs, 0, this.regionUVs.length), w.uvs = this.uvs instanceof Float32Array ? Utils.newFloatArray(this.uvs.length) : Array(this.uvs.length), Utils.arrayCopy(this.uvs, 0, w.uvs, 0, this.uvs.length), w.triangles = Array(this.triangles.length), Utils.arrayCopy(this.triangles, 0, w.triangles, 0, this.triangles.length), w.hullLength = this.hullLength, w.sequence = this.sequence == null ? null : this.sequence.copy(), this.edges && (w.edges = Array(this.edges.length), Utils.arrayCopy(this.edges, 0, w.edges, 0, this.edges.length)), w.width = this.width, w.height = this.height, w;
	}
	computeWorldVertices(b, w, D, O, F, U) {
		this.sequence != null && this.sequence.apply(b, this), super.computeWorldVertices(b, w, D, O, F, U);
	}
	newLinkedMesh() {
		let w = new b(this.name, this.path);
		return w.region = this.region, w.color.setFromColor(this.color), w.timelineAttachment = this.timelineAttachment, w.setParentMesh(this.parentMesh ? this.parentMesh : this), w.region != null && w.updateRegion(), w;
	}
}, PathAttachment = class b extends VertexAttachment {
	constructor(b) {
		super(b), _defineProperty(this, "lengths", []), _defineProperty(this, "closed", !1), _defineProperty(this, "constantSpeed", !1), _defineProperty(this, "color", new Color(1, 1, 1, 1));
	}
	copy() {
		let w = new b(this.name);
		return this.copyTo(w), w.lengths = Array(this.lengths.length), Utils.arrayCopy(this.lengths, 0, w.lengths, 0, this.lengths.length), w.closed = closed, w.constantSpeed = this.constantSpeed, w.color.setFromColor(this.color), w;
	}
}, PointAttachment = class b extends VertexAttachment {
	constructor(b) {
		super(b), _defineProperty(this, "x", 0), _defineProperty(this, "y", 0), _defineProperty(this, "rotation", 0), _defineProperty(this, "color", new Color(.38, .94, 0, 1));
	}
	computeWorldPosition(b, w) {
		return w.x = this.x * b.a + this.y * b.b + b.worldX, w.y = this.x * b.c + this.y * b.d + b.worldY, w;
	}
	computeWorldRotation(b) {
		let w = this.rotation * MathUtils.degRad, D = Math.cos(w), O = Math.sin(w), F = D * b.a + O * b.b, U = D * b.c + O * b.d;
		return MathUtils.atan2Deg(U, F);
	}
	copy() {
		let w = new b(this.name);
		return w.x = this.x, w.y = this.y, w.rotation = this.rotation, w.color.setFromColor(this.color), w;
	}
}, RegionAttachment = class b extends Attachment {
	constructor(b, w) {
		super(b), _defineProperty(this, "x", 0), _defineProperty(this, "y", 0), _defineProperty(this, "scaleX", 1), _defineProperty(this, "scaleY", 1), _defineProperty(this, "rotation", 0), _defineProperty(this, "width", 0), _defineProperty(this, "height", 0), _defineProperty(this, "color", new Color(1, 1, 1, 1)), _defineProperty(this, "path", void 0), _defineProperty(this, "region", null), _defineProperty(this, "sequence", null), _defineProperty(this, "offset", Utils.newFloatArray(8)), _defineProperty(this, "uvs", Utils.newFloatArray(8)), _defineProperty(this, "tempColor", new Color(1, 1, 1, 1)), this.path = w;
	}
	updateRegion() {
		if (!this.region) throw Error("Region not set.");
		let b = this.region, w = this.uvs;
		if (b == null) {
			w[0] = 0, w[1] = 0, w[2] = 0, w[3] = 1, w[4] = 1, w[5] = 1, w[6] = 1, w[7] = 0;
			return;
		}
		let D = this.width / this.region.originalWidth * this.scaleX, O = this.height / this.region.originalHeight * this.scaleY, F = -this.width / 2 * this.scaleX + this.region.offsetX * D, U = -this.height / 2 * this.scaleY + this.region.offsetY * O, W = F + this.region.width * D, G = U + this.region.height * O, K = this.rotation * MathUtils.degRad, q = Math.cos(K), J = Math.sin(K), Y = this.x, X = this.y, Z = F * q + Y, Ji = F * J, Yi = U * q + X, Q = U * J, Xi = W * q + Y, Zi = W * J, Qi = G * q + X, $i = G * J, ea = this.offset;
		ea[0] = Z - Q, ea[1] = Yi + Ji, ea[2] = Z - $i, ea[3] = Qi + Ji, ea[4] = Xi - $i, ea[5] = Qi + Zi, ea[6] = Xi - Q, ea[7] = Yi + Zi, b.degrees == 90 ? (w[0] = b.u2, w[1] = b.v2, w[2] = b.u, w[3] = b.v2, w[4] = b.u, w[5] = b.v, w[6] = b.u2, w[7] = b.v) : (w[0] = b.u, w[1] = b.v2, w[2] = b.u, w[3] = b.v, w[4] = b.u2, w[5] = b.v, w[6] = b.u2, w[7] = b.v2);
	}
	computeWorldVertices(b, w, D, O) {
		this.sequence != null && this.sequence.apply(b, this);
		let F = b.bone, U = this.offset, W = F.worldX, G = F.worldY, K = F.a, q = F.b, J = F.c, Y = F.d, X = 0, Z = 0;
		X = U[0], Z = U[1], w[D] = X * K + Z * q + W, w[D + 1] = X * J + Z * Y + G, D += O, X = U[2], Z = U[3], w[D] = X * K + Z * q + W, w[D + 1] = X * J + Z * Y + G, D += O, X = U[4], Z = U[5], w[D] = X * K + Z * q + W, w[D + 1] = X * J + Z * Y + G, D += O, X = U[6], Z = U[7], w[D] = X * K + Z * q + W, w[D + 1] = X * J + Z * Y + G;
	}
	copy() {
		let w = new b(this.name, this.path);
		return w.region = this.region, w.x = this.x, w.y = this.y, w.scaleX = this.scaleX, w.scaleY = this.scaleY, w.rotation = this.rotation, w.width = this.width, w.height = this.height, Utils.arrayCopy(this.uvs, 0, w.uvs, 0, 8), Utils.arrayCopy(this.offset, 0, w.offset, 0, 8), w.color.setFromColor(this.color), w.sequence = this.sequence == null ? null : this.sequence.copy(), w;
	}
};
_defineProperty(RegionAttachment, "X1", 0), _defineProperty(RegionAttachment, "Y1", 1), _defineProperty(RegionAttachment, "C1R", 2), _defineProperty(RegionAttachment, "C1G", 3), _defineProperty(RegionAttachment, "C1B", 4), _defineProperty(RegionAttachment, "C1A", 5), _defineProperty(RegionAttachment, "U1", 6), _defineProperty(RegionAttachment, "V1", 7), _defineProperty(RegionAttachment, "X2", 8), _defineProperty(RegionAttachment, "Y2", 9), _defineProperty(RegionAttachment, "C2R", 10), _defineProperty(RegionAttachment, "C2G", 11), _defineProperty(RegionAttachment, "C2B", 12), _defineProperty(RegionAttachment, "C2A", 13), _defineProperty(RegionAttachment, "U2", 14), _defineProperty(RegionAttachment, "V2", 15), _defineProperty(RegionAttachment, "X3", 16), _defineProperty(RegionAttachment, "Y3", 17), _defineProperty(RegionAttachment, "C3R", 18), _defineProperty(RegionAttachment, "C3G", 19), _defineProperty(RegionAttachment, "C3B", 20), _defineProperty(RegionAttachment, "C3A", 21), _defineProperty(RegionAttachment, "U3", 22), _defineProperty(RegionAttachment, "V3", 23), _defineProperty(RegionAttachment, "X4", 24), _defineProperty(RegionAttachment, "Y4", 25), _defineProperty(RegionAttachment, "C4R", 26), _defineProperty(RegionAttachment, "C4G", 27), _defineProperty(RegionAttachment, "C4B", 28), _defineProperty(RegionAttachment, "C4A", 29), _defineProperty(RegionAttachment, "U4", 30), _defineProperty(RegionAttachment, "V4", 31);
var AtlasAttachmentLoader = class {
	constructor(b) {
		_defineProperty(this, "atlas", void 0), this.atlas = b;
	}
	loadSequence(b, w, D) {
		let O = D.regions;
		for (let F = 0, U = O.length; F < U; F++) {
			let U = D.getPath(w, F), W = this.atlas.findRegion(U);
			if (W == null) throw Error("Region not found in atlas: " + U + " (sequence: " + b + ")");
			O[F] = W;
		}
	}
	newRegionAttachment(b, w, D, O) {
		let F = new RegionAttachment(w, D);
		if (O != null) this.loadSequence(w, D, O);
		else {
			let b = this.atlas.findRegion(D);
			if (!b) throw Error("Region not found in atlas: " + D + " (region attachment: " + w + ")");
			F.region = b;
		}
		return F;
	}
	newMeshAttachment(b, w, D, O) {
		let F = new MeshAttachment(w, D);
		if (O != null) this.loadSequence(w, D, O);
		else {
			let b = this.atlas.findRegion(D);
			if (!b) throw Error("Region not found in atlas: " + D + " (mesh attachment: " + w + ")");
			F.region = b;
		}
		return F;
	}
	newBoundingBoxAttachment(b, w) {
		return new BoundingBoxAttachment(w);
	}
	newPathAttachment(b, w) {
		return new PathAttachment(w);
	}
	newPointAttachment(b, w) {
		return new PointAttachment(w);
	}
	newClippingAttachment(b, w) {
		return new ClippingAttachment(w);
	}
}, BoneData = class {
	constructor(b, w, D) {
		if (_defineProperty(this, "index", 0), _defineProperty(this, "name", void 0), _defineProperty(this, "parent", null), _defineProperty(this, "length", 0), _defineProperty(this, "x", 0), _defineProperty(this, "y", 0), _defineProperty(this, "rotation", 0), _defineProperty(this, "scaleX", 1), _defineProperty(this, "scaleY", 1), _defineProperty(this, "shearX", 0), _defineProperty(this, "shearY", 0), _defineProperty(this, "inherit", Inherit.Normal), _defineProperty(this, "skinRequired", !1), _defineProperty(this, "color", new Color()), _defineProperty(this, "icon", void 0), _defineProperty(this, "visible", !1), b < 0) throw Error("index must be >= 0.");
		if (!w) throw Error("name cannot be null.");
		this.index = b, this.name = w, this.parent = D;
	}
}, Inherit;
(function(b) {
	b[b.Normal = 0] = "Normal", b[b.OnlyTranslation = 1] = "OnlyTranslation", b[b.NoRotationOrReflection = 2] = "NoRotationOrReflection", b[b.NoScale = 3] = "NoScale", b[b.NoScaleOrReflection = 4] = "NoScaleOrReflection";
})(Inherit || (Inherit = {}));
var Bone = class {
	constructor(b, w, D) {
		if (_defineProperty(this, "data", void 0), _defineProperty(this, "skeleton", void 0), _defineProperty(this, "parent", null), _defineProperty(this, "children", []), _defineProperty(this, "x", 0), _defineProperty(this, "y", 0), _defineProperty(this, "rotation", 0), _defineProperty(this, "scaleX", 0), _defineProperty(this, "scaleY", 0), _defineProperty(this, "shearX", 0), _defineProperty(this, "shearY", 0), _defineProperty(this, "ax", 0), _defineProperty(this, "ay", 0), _defineProperty(this, "arotation", 0), _defineProperty(this, "ascaleX", 0), _defineProperty(this, "ascaleY", 0), _defineProperty(this, "ashearX", 0), _defineProperty(this, "ashearY", 0), _defineProperty(this, "a", 0), _defineProperty(this, "b", 0), _defineProperty(this, "c", 0), _defineProperty(this, "d", 0), _defineProperty(this, "worldY", 0), _defineProperty(this, "worldX", 0), _defineProperty(this, "inherit", Inherit.Normal), _defineProperty(this, "sorted", !1), _defineProperty(this, "active", !1), !b) throw Error("data cannot be null.");
		if (!w) throw Error("skeleton cannot be null.");
		this.data = b, this.skeleton = w, this.parent = D, this.setToSetupPose();
	}
	isActive() {
		return this.active;
	}
	update(b) {
		this.updateWorldTransformWith(this.ax, this.ay, this.arotation, this.ascaleX, this.ascaleY, this.ashearX, this.ashearY);
	}
	updateWorldTransform() {
		this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
	}
	updateWorldTransformWith(b, w, D, O, F, U, W) {
		this.ax = b, this.ay = w, this.arotation = D, this.ascaleX = O, this.ascaleY = F, this.ashearX = U, this.ashearY = W;
		let G = this.parent;
		if (!G) {
			let G = this.skeleton, K = G.scaleX, q = G.scaleY, J = (D + U) * MathUtils.degRad, Y = (D + 90 + W) * MathUtils.degRad;
			this.a = Math.cos(J) * O * K, this.b = Math.cos(Y) * F * K, this.c = Math.sin(J) * O * q, this.d = Math.sin(Y) * F * q, this.worldX = b * K + G.x, this.worldY = w * q + G.y;
			return;
		}
		let K = G.a, q = G.b, J = G.c, Y = G.d;
		switch (this.worldX = K * b + q * w + G.worldX, this.worldY = J * b + Y * w + G.worldY, this.inherit) {
			case Inherit.Normal: {
				let b = (D + U) * MathUtils.degRad, w = (D + 90 + W) * MathUtils.degRad, G = Math.cos(b) * O, X = Math.cos(w) * F, Z = Math.sin(b) * O, Ji = Math.sin(w) * F;
				this.a = K * G + q * Z, this.b = K * X + q * Ji, this.c = J * G + Y * Z, this.d = J * X + Y * Ji;
				return;
			}
			case Inherit.OnlyTranslation: {
				let b = (D + U) * MathUtils.degRad, w = (D + 90 + W) * MathUtils.degRad;
				this.a = Math.cos(b) * O, this.b = Math.cos(w) * F, this.c = Math.sin(b) * O, this.d = Math.sin(w) * F;
				break;
			}
			case Inherit.NoRotationOrReflection: {
				let b = 1 / this.skeleton.scaleX, w = 1 / this.skeleton.scaleY;
				K *= b, J *= w;
				let G = K * K + J * J, X = 0;
				G > 1e-4 ? (G = Math.abs(K * Y * w - q * b * J) / G, q = J * G, Y = K * G, X = Math.atan2(J, K) * MathUtils.radDeg) : (K = 0, J = 0, X = 90 - Math.atan2(Y, q) * MathUtils.radDeg);
				let Z = (D + U - X) * MathUtils.degRad, Ji = (D + W - X + 90) * MathUtils.degRad, Yi = Math.cos(Z) * O, Q = Math.cos(Ji) * F, Xi = Math.sin(Z) * O, Zi = Math.sin(Ji) * F;
				this.a = K * Yi - q * Xi, this.b = K * Q - q * Zi, this.c = J * Yi + Y * Xi, this.d = J * Q + Y * Zi;
				break;
			}
			case Inherit.NoScale:
			case Inherit.NoScaleOrReflection: {
				D *= MathUtils.degRad;
				let b = Math.cos(D), w = Math.sin(D), G = (K * b + q * w) / this.skeleton.scaleX, X = (J * b + Y * w) / this.skeleton.scaleY, Z = Math.sqrt(G * G + X * X);
				Z > 1e-5 && (Z = 1 / Z), G *= Z, X *= Z, Z = Math.sqrt(G * G + X * X), this.inherit == Inherit.NoScale && K * Y - q * J < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0) && (Z = -Z), D = Math.PI / 2 + Math.atan2(X, G);
				let Ji = Math.cos(D) * Z, Yi = Math.sin(D) * Z;
				U *= MathUtils.degRad, W = (90 + W) * MathUtils.degRad;
				let Q = Math.cos(U) * O, Xi = Math.cos(W) * F, Zi = Math.sin(U) * O, Qi = Math.sin(W) * F;
				this.a = G * Q + Ji * Zi, this.b = G * Xi + Ji * Qi, this.c = X * Q + Yi * Zi, this.d = X * Xi + Yi * Qi;
				break;
			}
		}
		this.a *= this.skeleton.scaleX, this.b *= this.skeleton.scaleX, this.c *= this.skeleton.scaleY, this.d *= this.skeleton.scaleY;
	}
	setToSetupPose() {
		let b = this.data;
		this.x = b.x, this.y = b.y, this.rotation = b.rotation, this.scaleX = b.scaleX, this.scaleY = b.scaleY, this.shearX = b.shearX, this.shearY = b.shearY, this.inherit = b.inherit;
	}
	updateAppliedTransform() {
		let b = this.parent;
		if (!b) {
			this.ax = this.worldX - this.skeleton.x, this.ay = this.worldY - this.skeleton.y, this.arotation = Math.atan2(this.c, this.a) * MathUtils.radDeg, this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c), this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d), this.ashearX = 0, this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * MathUtils.radDeg;
			return;
		}
		let w = b.a, D = b.b, O = b.c, F = b.d, U = 1 / (w * F - D * O), W = F * U, G = D * U, K = O * U, q = w * U, J = this.worldX - b.worldX, Y = this.worldY - b.worldY;
		this.ax = J * W - Y * G, this.ay = Y * q - J * K;
		let X, Z, Ji, Yi;
		if (this.inherit == Inherit.OnlyTranslation) X = this.a, Z = this.b, Ji = this.c, Yi = this.d;
		else {
			switch (this.inherit) {
				case Inherit.NoRotationOrReflection: {
					let b = Math.abs(w * F - D * O) / (w * w + O * O);
					D = -O * this.skeleton.scaleX * b / this.skeleton.scaleY, F = w * this.skeleton.scaleY * b / this.skeleton.scaleX, U = 1 / (w * F - D * O), W = F * U, G = D * U;
					break;
				}
				case Inherit.NoScale:
				case Inherit.NoScaleOrReflection:
					let b = MathUtils.cosDeg(this.rotation), J = MathUtils.sinDeg(this.rotation);
					w = (w * b + D * J) / this.skeleton.scaleX, O = (O * b + F * J) / this.skeleton.scaleY;
					let Y = Math.sqrt(w * w + O * O);
					Y > 1e-5 && (Y = 1 / Y), w *= Y, O *= Y, Y = Math.sqrt(w * w + O * O), this.inherit == Inherit.NoScale && U < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0) && (Y = -Y);
					let X = MathUtils.PI / 2 + Math.atan2(O, w);
					D = Math.cos(X) * Y, F = Math.sin(X) * Y, U = 1 / (w * F - D * O), W = F * U, G = D * U, K = O * U, q = w * U;
			}
			X = W * this.a - G * this.c, Z = W * this.b - G * this.d, Ji = q * this.c - K * this.a, Yi = q * this.d - K * this.b;
		}
		if (this.ashearX = 0, this.ascaleX = Math.sqrt(X * X + Ji * Ji), this.ascaleX > 1e-4) {
			let b = X * Yi - Z * Ji;
			this.ascaleY = b / this.ascaleX, this.ashearY = -Math.atan2(X * Z + Ji * Yi, b) * MathUtils.radDeg, this.arotation = Math.atan2(Ji, X) * MathUtils.radDeg;
		} else this.ascaleX = 0, this.ascaleY = Math.sqrt(Z * Z + Yi * Yi), this.ashearY = 0, this.arotation = 90 - Math.atan2(Yi, Z) * MathUtils.radDeg;
	}
	getWorldRotationX() {
		return Math.atan2(this.c, this.a) * MathUtils.radDeg;
	}
	getWorldRotationY() {
		return Math.atan2(this.d, this.b) * MathUtils.radDeg;
	}
	getWorldScaleX() {
		return Math.sqrt(this.a * this.a + this.c * this.c);
	}
	getWorldScaleY() {
		return Math.sqrt(this.b * this.b + this.d * this.d);
	}
	worldToLocal(b) {
		let w = 1 / (this.a * this.d - this.b * this.c), D = b.x - this.worldX, O = b.y - this.worldY;
		return b.x = D * this.d * w - O * this.b * w, b.y = O * this.a * w - D * this.c * w, b;
	}
	localToWorld(b) {
		let w = b.x, D = b.y;
		return b.x = w * this.a + D * this.b + this.worldX, b.y = w * this.c + D * this.d + this.worldY, b;
	}
	worldToParent(b) {
		if (b == null) throw Error("world cannot be null.");
		return this.parent == null ? b : this.parent.worldToLocal(b);
	}
	parentToWorld(b) {
		if (b == null) throw Error("world cannot be null.");
		return this.parent == null ? b : this.parent.localToWorld(b);
	}
	worldToLocalRotation(b) {
		let w = MathUtils.sinDeg(b), D = MathUtils.cosDeg(b);
		return Math.atan2(this.a * w - this.c * D, this.d * D - this.b * w) * MathUtils.radDeg + this.rotation - this.shearX;
	}
	localToWorldRotation(b) {
		b -= this.rotation - this.shearX;
		let w = MathUtils.sinDeg(b), D = MathUtils.cosDeg(b);
		return Math.atan2(D * this.c + w * this.d, D * this.a + w * this.b) * MathUtils.radDeg;
	}
	rotateWorld(b) {
		b *= MathUtils.degRad;
		let w = Math.sin(b), D = Math.cos(b), O = this.a, F = this.b;
		this.a = D * O - w * this.c, this.b = D * F - w * this.d, this.c = w * O + D * this.c, this.d = w * F + D * this.d;
	}
}, ConstraintData = class {
	constructor(b, w, D) {
		_defineProperty(this, "name", void 0), _defineProperty(this, "order", void 0), _defineProperty(this, "skinRequired", void 0), this.name = b, this.order = w, this.skinRequired = D;
	}
}, AssetManagerBase = class {
	constructor(b, w = "", D = new Downloader(), O = new AssetCache()) {
		_defineProperty(this, "pathPrefix", ""), _defineProperty(this, "textureLoader", void 0), _defineProperty(this, "downloader", void 0), _defineProperty(this, "cache", void 0), _defineProperty(this, "errors", {}), _defineProperty(this, "toLoad", 0), _defineProperty(this, "loaded", 0), this.textureLoader = b, this.pathPrefix = w, this.downloader = D, this.cache = O;
	}
	start(b) {
		return this.toLoad++, this.pathPrefix + b;
	}
	success(b, w, D) {
		this.toLoad--, this.loaded++, this.cache.assets[w] = D, this.cache.assetsRefCount[w] = (this.cache.assetsRefCount[w] || 0) + 1, b && b(w, D);
	}
	error(b, w, D) {
		this.toLoad--, this.loaded++, this.errors[w] = D, b && b(w, D);
	}
	loadAll() {
		return new Promise((b, w) => {
			let D = () => {
				if (this.isLoadingComplete()) {
					this.hasErrors() ? w(this.errors) : b(this);
					return;
				}
				requestAnimationFrame(D);
			};
			requestAnimationFrame(D);
		});
	}
	setRawDataURI(b, w) {
		this.downloader.rawDataUris[this.pathPrefix + b] = w;
	}
	loadBinary(b, w = () => {}, D = () => {}) {
		b = this.start(b), !this.reuseAssets(b, w, D) && (this.cache.assetsLoaded[b] = new Promise((O, F) => {
			this.downloader.downloadBinary(b, (D) => {
				this.success(w, b, D), O(D);
			}, (w, O) => {
				let U = `Couldn't load binary ${b}: status ${w}, ${O}`;
				this.error(D, b, U), F(U);
			});
		}));
	}
	loadText(b, w = () => {}, D = () => {}) {
		b = this.start(b), this.downloader.downloadText(b, (D) => {
			this.success(w, b, D);
		}, (w, O) => {
			this.error(D, b, `Couldn't load text ${b}: status ${w}, ${O}`);
		});
	}
	loadJson(b, w = () => {}, D = () => {}) {
		b = this.start(b), !this.reuseAssets(b, w, D) && (this.cache.assetsLoaded[b] = new Promise((O, F) => {
			this.downloader.downloadJson(b, (D) => {
				this.success(w, b, D), O(D);
			}, (w, O) => {
				let U = `Couldn't load JSON ${b}: status ${w}, ${O}`;
				this.error(D, b, U), F(U);
			});
		}));
	}
	reuseAssets(b, w = () => {}, D = () => {}) {
		let O = this.cache.assetsLoaded[b], F = O !== void 0;
		return F && (this.cache.assetsLoaded[b] = O.then((D) => (D = D instanceof Image || D instanceof ImageBitmap ? this.textureLoader(D) : D, this.success(w, b, D), D)).catch((w) => this.error(D, b, w))), F;
	}
	loadTexture(b, w = () => {}, D = () => {}) {
		b = this.start(b), !this.reuseAssets(b, w, D) && (this.cache.assetsLoaded[b] = new Promise((O, F) => {
			if (!(typeof window < "u" && typeof navigator < "u" && window.document)) fetch(b, { mode: "cors" }).then((w) => {
				if (w.ok) return w.blob();
				let O = `Couldn't load image: ${b}`;
				this.error(D, b, `Couldn't load image: ${b}`), F(O);
			}).then((b) => b ? createImageBitmap(b, {
				premultiplyAlpha: "none",
				colorSpaceConversion: "none"
			}) : null).then((D) => {
				if (D) {
					let F = this.createTexture(b, D);
					this.success(w, b, F), O(F);
				}
			});
			else {
				let U = new Image();
				U.crossOrigin = "anonymous", U.onload = () => {
					let D = this.createTexture(b, U);
					this.success(w, b, D), O(D);
				}, U.onerror = () => {
					let w = `Couldn't load image: ${b}`;
					this.error(D, b, w), F(w);
				}, this.downloader.rawDataUris[b] && (b = this.downloader.rawDataUris[b]), U.src = b;
			}
		}));
	}
	loadTextureAtlas(b, w = () => {}, D = () => {}, O) {
		let F = b.lastIndexOf("/"), U = F >= 0 ? b.substring(0, F + 1) : "";
		b = this.start(b), !this.reuseAssets(b, w, D) && (this.cache.assetsLoaded[b] = new Promise((F, W) => {
			this.downloader.downloadText(b, (G) => {
				try {
					let K = this.createTextureAtlas(b, G), q = K.pages.length, J = !1;
					for (let G of K.pages) this.loadTexture(O ? O[G.name] : U + G.name, (D, O) => {
						J || (G.setTexture(O), --q == 0 && (this.success(w, b, K), F(K)));
					}, (w, O) => {
						if (!J) {
							let O = `Couldn't load texture ${b} page image: ${w}`;
							this.error(D, b, O), W(O);
						}
						J = !0;
					});
				} catch (w) {
					let O = `Couldn't parse texture atlas ${b}: ${w.message}`;
					this.error(D, b, O), W(O);
				}
			}, (w, O) => {
				let F = `Couldn't load texture atlas ${b}: status ${w}, ${O}`;
				this.error(D, b, F), W(F);
			});
		}));
	}
	loadTextureAtlasButNoTextures(b, w = () => {}, D = () => {}, O) {
		b = this.start(b), !this.reuseAssets(b, w, D) && (this.cache.assetsLoaded[b] = new Promise((O, F) => {
			this.downloader.downloadText(b, (U) => {
				try {
					let D = this.createTextureAtlas(b, U);
					this.success(w, b, D), O(D);
				} catch (w) {
					let O = `Couldn't parse texture atlas ${b}: ${w.message}`;
					this.error(D, b, O), F(O);
				}
			}, (w, O) => {
				let U = `Couldn't load texture atlas ${b}: status ${w}, ${O}`;
				this.error(D, b, U), F(U);
			});
		}));
	}
	loadBinaryAsync(b) {
		var w = this;
		return _asyncToGenerator(function* () {
			return new Promise((D, O) => {
				w.loadBinary(b, (b, w) => D(w), (b, w) => O(w));
			});
		})();
	}
	loadJsonAsync(b) {
		var w = this;
		return _asyncToGenerator(function* () {
			return new Promise((D, O) => {
				w.loadJson(b, (b, w) => D(w), (b, w) => O(w));
			});
		})();
	}
	loadTextureAsync(b) {
		var w = this;
		return _asyncToGenerator(function* () {
			return new Promise((D, O) => {
				w.loadTexture(b, (b, w) => D(w), (b, w) => O(w));
			});
		})();
	}
	loadTextureAtlasAsync(b) {
		var w = this;
		return _asyncToGenerator(function* () {
			return new Promise((D, O) => {
				w.loadTextureAtlas(b, (b, w) => D(w), (b, w) => O(w));
			});
		})();
	}
	loadTextureAtlasButNoTexturesAsync(b) {
		var w = this;
		return _asyncToGenerator(function* () {
			return new Promise((D, O) => {
				w.loadTextureAtlasButNoTextures(b, (b, w) => D(w), (b, w) => O(w));
			});
		})();
	}
	setCache(b) {
		this.cache = b;
	}
	get(b) {
		return this.cache.assets[this.pathPrefix + b];
	}
	require(b) {
		b = this.pathPrefix + b;
		let w = this.cache.assets[b];
		if (w) return w;
		let D = this.errors[b];
		throw Error("Asset not found: " + b + (D ? "\n" + D : ""));
	}
	remove(b) {
		b = this.pathPrefix + b;
		let w = this.cache.assets[b];
		return w.dispose && w.dispose(), delete this.cache.assets[b], delete this.cache.assetsRefCount[b], delete this.cache.assetsLoaded[b], w;
	}
	removeAll() {
		for (let b in this.cache.assets) {
			let w = this.cache.assets[b];
			w.dispose && w.dispose();
		}
		this.cache.assets = {}, this.cache.assetsLoaded = {}, this.cache.assetsRefCount = {};
	}
	isLoadingComplete() {
		return this.toLoad == 0;
	}
	getToLoad() {
		return this.toLoad;
	}
	getLoaded() {
		return this.loaded;
	}
	dispose() {
		this.removeAll();
	}
	disposeAsset(b) {
		let w = this.cache.assets[b];
		if (w instanceof TextureAtlas) {
			w.dispose();
			return;
		}
		this.disposeAssetInternal(b);
	}
	hasErrors() {
		return Object.keys(this.errors).length > 0;
	}
	getErrors() {
		return this.errors;
	}
	disposeAssetInternal(b) {
		if (this.cache.assetsRefCount[b] > 0 && --this.cache.assetsRefCount[b] === 0) return this.remove(b);
	}
	createTextureAtlas(b, w) {
		let D = new TextureAtlas(w);
		return D.dispose = () => {
			if (!(this.cache.assetsRefCount[b] <= 0)) {
				this.disposeAssetInternal(b);
				for (let b of D.pages) {
					var w;
					(w = b.texture) == null || w.dispose();
				}
			}
		}, D;
	}
	createTexture(b, w) {
		let D = this.textureLoader(w), O = D.dispose.bind(D);
		return D.dispose = () => {
			this.disposeAssetInternal(b) && O();
		}, D;
	}
}, AssetCache = class b {
	constructor() {
		_defineProperty(this, "assets", {}), _defineProperty(this, "assetsRefCount", {}), _defineProperty(this, "assetsLoaded", {});
	}
	static getCache(w) {
		let D = b.AVAILABLE_CACHES.get(w);
		if (D) return D;
		let O = new b();
		return b.AVAILABLE_CACHES.set(w, O), O;
	}
	addAsset(b, w) {
		var D = this;
		return _asyncToGenerator(function* () {
			D.assetsLoaded[b] = Promise.resolve(w), D.assets[b] = yield w;
		})();
	}
};
_defineProperty(AssetCache, "AVAILABLE_CACHES", /* @__PURE__ */ new Map());
var Downloader = class {
	constructor() {
		_defineProperty(this, "callbacks", {}), _defineProperty(this, "rawDataUris", {});
	}
	dataUriToString(b) {
		if (!b.startsWith("data:")) throw Error("Not a data URI.");
		let w = b.indexOf("base64,");
		return w == -1 ? b.substr(b.indexOf(",") + 1) : (w += 7, atob(b.substr(w)));
	}
	base64ToUint8Array(b) {
		for (var w = window.atob(b), D = w.length, O = new Uint8Array(D), F = 0; F < D; F++) O[F] = w.charCodeAt(F);
		return O;
	}
	dataUriToUint8Array(b) {
		if (!b.startsWith("data:")) throw Error("Not a data URI.");
		let w = b.indexOf("base64,");
		if (w == -1) throw Error("Not a binary data URI.");
		return w += 7, this.base64ToUint8Array(b.substr(w));
	}
	downloadText(b, w, D) {
		if (this.start(b, w, D)) return;
		let O = this.rawDataUris[b];
		if (O && !O.includes(".")) {
			try {
				this.finish(b, 200, this.dataUriToString(O));
			} catch (w) {
				this.finish(b, 400, JSON.stringify(w));
			}
			return;
		}
		let F = new XMLHttpRequest();
		F.overrideMimeType("text/html"), F.open("GET", O || b, !0);
		let U = () => {
			this.finish(b, F.status, F.responseText);
		};
		F.onload = U, F.onerror = U, F.send();
	}
	downloadJson(b, w, D) {
		this.downloadText(b, (b) => {
			w(JSON.parse(b));
		}, D);
	}
	downloadBinary(b, w, D) {
		if (this.start(b, w, D)) return;
		let O = this.rawDataUris[b];
		if (O && !O.includes(".")) {
			try {
				this.finish(b, 200, this.dataUriToUint8Array(O));
			} catch (w) {
				this.finish(b, 400, JSON.stringify(w));
			}
			return;
		}
		let F = new XMLHttpRequest();
		F.open("GET", O || b, !0), F.responseType = "arraybuffer";
		let U = () => {
			this.finish(b, F.status, F.response);
		};
		F.onload = () => {
			F.status == 200 || F.status == 0 ? this.finish(b, 200, new Uint8Array(F.response)) : U();
		}, F.onerror = U, F.send();
	}
	start(b, w, D) {
		let O = this.callbacks[b];
		try {
			if (O) return !0;
			this.callbacks[b] = O = [];
		} finally {
			O.push(w, D);
		}
	}
	finish(b, w, D) {
		let O = this.callbacks[b];
		delete this.callbacks[b];
		let F = w == 200 || w == 0 ? [D] : [w, D];
		for (let b = F.length - 1, w = O.length; b < w; b += 2) O[b].apply(null, F);
	}
}, Event = class {
	constructor(b, w) {
		if (_defineProperty(this, "data", void 0), _defineProperty(this, "intValue", 0), _defineProperty(this, "floatValue", 0), _defineProperty(this, "stringValue", null), _defineProperty(this, "time", 0), _defineProperty(this, "volume", 0), _defineProperty(this, "balance", 0), !w) throw Error("data cannot be null.");
		this.time = b, this.data = w;
	}
}, EventData = class {
	constructor(b) {
		_defineProperty(this, "name", void 0), _defineProperty(this, "intValue", 0), _defineProperty(this, "floatValue", 0), _defineProperty(this, "stringValue", null), _defineProperty(this, "audioPath", null), _defineProperty(this, "volume", 0), _defineProperty(this, "balance", 0), this.name = b;
	}
}, IkConstraint = class {
	constructor(b, w) {
		if (_defineProperty(this, "data", void 0), _defineProperty(this, "bones", void 0), _defineProperty(this, "target", void 0), _defineProperty(this, "bendDirection", 0), _defineProperty(this, "compress", !1), _defineProperty(this, "stretch", !1), _defineProperty(this, "mix", 1), _defineProperty(this, "softness", 0), _defineProperty(this, "active", !1), !b) throw Error("data cannot be null.");
		if (!w) throw Error("skeleton cannot be null.");
		this.data = b, this.bones = [];
		for (let D = 0; D < b.bones.length; D++) {
			let O = w.findBone(b.bones[D].name);
			if (!O) throw Error(`Couldn't find bone ${b.bones[D].name}`);
			this.bones.push(O);
		}
		let D = w.findBone(b.target.name);
		if (!D) throw Error(`Couldn't find bone ${b.target.name}`);
		this.target = D, this.mix = b.mix, this.softness = b.softness, this.bendDirection = b.bendDirection, this.compress = b.compress, this.stretch = b.stretch;
	}
	isActive() {
		return this.active;
	}
	setToSetupPose() {
		let b = this.data;
		this.mix = b.mix, this.softness = b.softness, this.bendDirection = b.bendDirection, this.compress = b.compress, this.stretch = b.stretch;
	}
	update(b) {
		if (this.mix == 0) return;
		let w = this.target, D = this.bones;
		switch (D.length) {
			case 1:
				this.apply1(D[0], w.worldX, w.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
				break;
			case 2:
				this.apply2(D[0], D[1], w.worldX, w.worldY, this.bendDirection, this.stretch, this.data.uniform, this.softness, this.mix);
				break;
		}
	}
	apply1(b, w, D, O, F, U, W) {
		let G = b.parent;
		if (!G) throw Error("IK bone must have parent.");
		let K = G.a, q = G.b, J = G.c, Y = G.d, X = -b.ashearX - b.arotation, Z = 0, Ji = 0;
		switch (b.inherit) {
			case Inherit.OnlyTranslation:
				Z = (w - b.worldX) * MathUtils.signum(b.skeleton.scaleX), Ji = (D - b.worldY) * MathUtils.signum(b.skeleton.scaleY);
				break;
			case Inherit.NoRotationOrReflection:
				let O = Math.abs(K * Y - q * J) / Math.max(1e-4, K * K + J * J), F = K / b.skeleton.scaleX, U = J / b.skeleton.scaleY;
				q = -U * O * b.skeleton.scaleX, Y = F * O * b.skeleton.scaleY, X += Math.atan2(U, F) * MathUtils.radDeg;
			default:
				let W = w - G.worldX, Yi = D - G.worldY, Q = K * Y - q * J;
				Math.abs(Q) <= 1e-4 ? (Z = 0, Ji = 0) : (Z = (W * Y - Yi * q) / Q - b.ax, Ji = (Yi * K - W * J) / Q - b.ay);
		}
		X += Math.atan2(Ji, Z) * MathUtils.radDeg, b.ascaleX < 0 && (X += 180), X > 180 ? X -= 360 : X < -180 && (X += 360);
		let Yi = b.ascaleX, Q = b.ascaleY;
		if (O || F) {
			switch (b.inherit) {
				case Inherit.NoScale:
				case Inherit.NoScaleOrReflection: Z = w - b.worldX, Ji = D - b.worldY;
			}
			let G = b.data.length * Yi;
			if (G > 1e-4) {
				let b = Z * Z + Ji * Ji;
				if (O && b < G * G || F && b > G * G) {
					let w = (Math.sqrt(b) / G - 1) * W + 1;
					Yi *= w, U && (Q *= w);
				}
			}
		}
		b.updateWorldTransformWith(b.ax, b.ay, b.arotation + X * W, Yi, Q, b.ashearX, b.ashearY);
	}
	apply2(b, w, D, O, F, U, W, G, K) {
		if (b.inherit != Inherit.Normal || w.inherit != Inherit.Normal) return;
		let q = b.ax, J = b.ay, Y = b.ascaleX, X = b.ascaleY, Z = Y, Ji = X, Yi = w.ascaleX, Q = 0, Xi = 0, Zi = 0;
		Y < 0 ? (Y = -Y, Q = 180, Zi = -1) : (Q = 0, Zi = 1), X < 0 && (X = -X, Zi = -Zi), Yi < 0 ? (Yi = -Yi, Xi = 180) : Xi = 0;
		let Qi = w.ax, $i = 0, ea = 0, ta = 0, na = b.a, ra = b.b, ia = b.c, aa = b.d, oa = Math.abs(Y - X) <= 1e-4;
		!oa || U ? ($i = 0, ea = na * Qi + b.worldX, ta = ia * Qi + b.worldY) : ($i = w.ay, ea = na * Qi + ra * $i + b.worldX, ta = ia * Qi + aa * $i + b.worldY);
		let sa = b.parent;
		if (!sa) throw Error("IK parent must itself have a parent.");
		na = sa.a, ra = sa.b, ia = sa.c, aa = sa.d;
		let ca = na * aa - ra * ia, la = ea - sa.worldX, ua = ta - sa.worldY;
		ca = Math.abs(ca) <= 1e-4 ? 0 : 1 / ca;
		let da = (la * aa - ua * ra) * ca - q, fa = (ua * na - la * ia) * ca - J, pa = Math.sqrt(da * da + fa * fa), ma = w.data.length * Yi, ha, ga;
		if (pa < 1e-4) {
			this.apply1(b, D, O, !1, U, !1, K), w.updateWorldTransformWith(Qi, $i, 0, w.ascaleX, w.ascaleY, w.ashearX, w.ashearY);
			return;
		}
		la = D - sa.worldX, ua = O - sa.worldY;
		let _a = (la * aa - ua * ra) * ca - q, va = (ua * na - la * ia) * ca - J, ya = _a * _a + va * va;
		if (G != 0) {
			G *= Y * (Yi + 1) * .5;
			let b = Math.sqrt(ya), w = b - pa - ma * Y + G;
			if (w > 0) {
				let D = Math.min(1, w / (G * 2)) - 1;
				D = (w - G * (1 - D * D)) / b, _a -= D * _a, va -= D * va, ya = _a * _a + va * va;
			}
		}
		outer: if (oa) {
			ma *= Y;
			let b = (ya - pa * pa - ma * ma) / (2 * pa * ma);
			b < -1 ? (b = -1, ga = Math.PI * F) : b > 1 ? (b = 1, ga = 0, U && (na = (Math.sqrt(ya) / (pa + ma) - 1) * K + 1, Z *= na, W && (Ji *= na))) : ga = Math.acos(b) * F, na = pa + ma * b, ra = ma * Math.sin(ga), ha = Math.atan2(va * na - _a * ra, _a * na + va * ra);
		} else {
			na = Y * ma, ra = X * ma;
			let b = na * na, w = ra * ra, D = Math.atan2(va, _a);
			ia = w * pa * pa + b * ya - b * w;
			let O = -2 * w * pa, U = w - b;
			if (aa = O * O - 4 * U * ia, aa >= 0) {
				let b = Math.sqrt(aa);
				O < 0 && (b = -b), b = -(O + b) * .5;
				let w = b / U, W = ia / b, G = Math.abs(w) < Math.abs(W) ? w : W;
				if (w = ya - G * G, w >= 0) {
					ua = Math.sqrt(w) * F, ha = D - Math.atan2(ua, G), ga = Math.atan2(ua / X, (G - pa) / Y);
					break outer;
				}
			}
			let W = MathUtils.PI, G = pa - na, K = G * G, q = 0, J = 0, Z = pa + na, Ji = Z * Z, Yi = 0;
			ia = -na * pa / (b - w), ia >= -1 && ia <= 1 && (ia = Math.acos(ia), la = na * Math.cos(ia) + pa, ua = ra * Math.sin(ia), aa = la * la + ua * ua, aa < K && (W = ia, K = aa, G = la, q = ua), aa > Ji && (J = ia, Ji = aa, Z = la, Yi = ua)), ya <= (K + Ji) * .5 ? (ha = D - Math.atan2(q * F, G), ga = W * F) : (ha = D - Math.atan2(Yi * F, Z), ga = J * F);
		}
		let ba = Math.atan2($i, Qi) * Zi, xa = b.arotation;
		ha = (ha - ba) * MathUtils.radDeg + Q - xa, ha > 180 ? ha -= 360 : ha < -180 && (ha += 360), b.updateWorldTransformWith(q, J, xa + ha * K, Z, Ji, 0, 0), xa = w.arotation, ga = ((ga + ba) * MathUtils.radDeg - w.ashearX) * Zi + Xi - xa, ga > 180 ? ga -= 360 : ga < -180 && (ga += 360), w.updateWorldTransformWith(Qi, $i, xa + ga * K, w.ascaleX, w.ascaleY, w.ashearX, w.ashearY);
	}
}, IkConstraintData = class extends ConstraintData {
	set target(b) {
		this._target = b;
	}
	get target() {
		if (this._target) return this._target;
		throw Error("BoneData not set.");
	}
	constructor(b) {
		super(b, 0, !1), _defineProperty(this, "bones", []), _defineProperty(this, "_target", null), _defineProperty(this, "bendDirection", 0), _defineProperty(this, "compress", !1), _defineProperty(this, "stretch", !1), _defineProperty(this, "uniform", !1), _defineProperty(this, "mix", 0), _defineProperty(this, "softness", 0);
	}
}, PathConstraintData = class extends ConstraintData {
	set target(b) {
		this._target = b;
	}
	get target() {
		if (this._target) return this._target;
		throw Error("SlotData not set.");
	}
	constructor(b) {
		super(b, 0, !1), _defineProperty(this, "bones", []), _defineProperty(this, "_target", null), _defineProperty(this, "positionMode", PositionMode.Fixed), _defineProperty(this, "spacingMode", SpacingMode.Fixed), _defineProperty(this, "rotateMode", RotateMode.Chain), _defineProperty(this, "offsetRotation", 0), _defineProperty(this, "position", 0), _defineProperty(this, "spacing", 0), _defineProperty(this, "mixRotate", 0), _defineProperty(this, "mixX", 0), _defineProperty(this, "mixY", 0);
	}
}, PositionMode;
(function(b) {
	b[b.Fixed = 0] = "Fixed", b[b.Percent = 1] = "Percent";
})(PositionMode || (PositionMode = {}));
var SpacingMode;
(function(b) {
	b[b.Length = 0] = "Length", b[b.Fixed = 1] = "Fixed", b[b.Percent = 2] = "Percent", b[b.Proportional = 3] = "Proportional";
})(SpacingMode || (SpacingMode = {}));
var RotateMode;
(function(b) {
	b[b.Tangent = 0] = "Tangent", b[b.Chain = 1] = "Chain", b[b.ChainScale = 2] = "ChainScale";
})(RotateMode || (RotateMode = {}));
var PathConstraint = class b {
	constructor(b, w) {
		if (_defineProperty(this, "data", void 0), _defineProperty(this, "bones", void 0), _defineProperty(this, "target", void 0), _defineProperty(this, "position", 0), _defineProperty(this, "spacing", 0), _defineProperty(this, "mixRotate", 0), _defineProperty(this, "mixX", 0), _defineProperty(this, "mixY", 0), _defineProperty(this, "spaces", []), _defineProperty(this, "positions", []), _defineProperty(this, "world", []), _defineProperty(this, "curves", []), _defineProperty(this, "lengths", []), _defineProperty(this, "segments", []), _defineProperty(this, "active", !1), !b) throw Error("data cannot be null.");
		if (!w) throw Error("skeleton cannot be null.");
		this.data = b, this.bones = [];
		for (let D = 0, O = b.bones.length; D < O; D++) {
			let O = w.findBone(b.bones[D].name);
			if (!O) throw Error(`Couldn't find bone ${b.bones[D].name}.`);
			this.bones.push(O);
		}
		let D = w.findSlot(b.target.name);
		if (!D) throw Error(`Couldn't find target bone ${b.target.name}`);
		this.target = D, this.position = b.position, this.spacing = b.spacing, this.mixRotate = b.mixRotate, this.mixX = b.mixX, this.mixY = b.mixY;
	}
	isActive() {
		return this.active;
	}
	setToSetupPose() {
		let b = this.data;
		this.position = b.position, this.spacing = b.spacing, this.mixRotate = b.mixRotate, this.mixX = b.mixX, this.mixY = b.mixY;
	}
	update(w) {
		let D = this.target.getAttachment();
		if (!(D instanceof PathAttachment)) return;
		let O = this.mixRotate, F = this.mixX, U = this.mixY;
		if (O == 0 && F == 0 && U == 0) return;
		let W = this.data, G = W.rotateMode == RotateMode.Tangent, K = W.rotateMode == RotateMode.ChainScale, q = this.bones, J = q.length, Y = G ? J : J + 1, X = Utils.setArraySize(this.spaces, Y), Z = K ? this.lengths = Utils.setArraySize(this.lengths, J) : [], Ji = this.spacing;
		switch (W.spacingMode) {
			case SpacingMode.Percent:
				if (K) for (let b = 0, w = Y - 1; b < w; b++) {
					let w = q[b], D = w.data.length, O = D * w.a, F = D * w.c;
					Z[b] = Math.sqrt(O * O + F * F);
				}
				Utils.arrayFill(X, 1, Y, Ji);
				break;
			case SpacingMode.Proportional:
				let w = 0;
				for (let D = 0, O = Y - 1; D < O;) {
					let O = q[D], F = O.data.length;
					if (F < b.epsilon) K && (Z[D] = 0), X[++D] = Ji;
					else {
						let b = F * O.a, U = F * O.c, W = Math.sqrt(b * b + U * U);
						K && (Z[D] = W), X[++D] = W, w += W;
					}
				}
				if (w > 0) {
					w = Y / w * Ji;
					for (let b = 1; b < Y; b++) X[b] *= w;
				}
				break;
			default:
				let D = W.spacingMode == SpacingMode.Length;
				for (let w = 0, O = Y - 1; w < O;) {
					let O = q[w], F = O.data.length;
					if (F < b.epsilon) K && (Z[w] = 0), X[++w] = Ji;
					else {
						let b = F * O.a, U = F * O.c, W = Math.sqrt(b * b + U * U);
						K && (Z[w] = W), X[++w] = (D ? F + Ji : Ji) * W / F;
					}
				}
		}
		let Yi = this.computeWorldPositions(D, Y, G), Q = Yi[0], Xi = Yi[1], Zi = W.offsetRotation, Qi = !1;
		if (Zi == 0) Qi = W.rotateMode == RotateMode.Chain;
		else {
			Qi = !1;
			let b = this.target.bone;
			Zi *= b.a * b.d - b.b * b.c > 0 ? MathUtils.degRad : -MathUtils.degRad;
		}
		for (let b = 0, w = 3; b < J; b++, w += 3) {
			let D = q[b];
			D.worldX += (Q - D.worldX) * F, D.worldY += (Xi - D.worldY) * U;
			let W = Yi[w], J = Yi[w + 1], Y = W - Q, Ji = J - Xi;
			if (K) {
				let w = Z[b];
				if (w != 0) {
					let b = (Math.sqrt(Y * Y + Ji * Ji) / w - 1) * O + 1;
					D.a *= b, D.c *= b;
				}
			}
			if (Q = W, Xi = J, O > 0) {
				let F = D.a, U = D.b, W = D.c, K = D.d, q = 0, J = 0, Z = 0;
				if (q = G ? Yi[w - 1] : X[b + 1] == 0 ? Yi[w + 2] : Math.atan2(Ji, Y), q -= Math.atan2(W, F), Qi) {
					J = Math.cos(q), Z = Math.sin(q);
					let b = D.data.length;
					Q += (b * (J * F - Z * W) - Y) * O, Xi += (b * (Z * F + J * W) - Ji) * O;
				} else q += Zi;
				q > MathUtils.PI ? q -= MathUtils.PI2 : q < -MathUtils.PI && (q += MathUtils.PI2), q *= O, J = Math.cos(q), Z = Math.sin(q), D.a = J * F - Z * W, D.b = J * U - Z * K, D.c = Z * F + J * W, D.d = Z * U + J * K;
			}
			D.updateAppliedTransform();
		}
	}
	computeWorldPositions(w, D, O) {
		let F = this.target, U = this.position, W = this.spaces, G = Utils.setArraySize(this.positions, D * 3 + 2), K = this.world, q = w.closed, J = w.worldVerticesLength, Y = J / 6, X = b.NONE;
		if (!w.constantSpeed) {
			let Z = w.lengths;
			Y -= q ? 1 : 2;
			let Ji = Z[Y];
			this.data.positionMode == PositionMode.Percent && (U *= Ji);
			let Yi;
			switch (this.data.spacingMode) {
				case SpacingMode.Percent:
					Yi = Ji;
					break;
				case SpacingMode.Proportional:
					Yi = Ji / D;
					break;
				default: Yi = 1;
			}
			K = Utils.setArraySize(this.world, 8);
			for (let Q = 0, Xi = 0, Zi = 0; Q < D; Q++, Xi += 3) {
				let D = W[Q] * Yi;
				U += D;
				let Qi = U;
				if (q) Qi %= Ji, Qi < 0 && (Qi += Ji), Zi = 0;
				else if (Qi < 0) {
					X != b.BEFORE && (X = b.BEFORE, w.computeWorldVertices(F, 2, 4, K, 0, 2)), this.addBeforePosition(Qi, K, 0, G, Xi);
					continue;
				} else if (Qi > Ji) {
					X != b.AFTER && (X = b.AFTER, w.computeWorldVertices(F, J - 6, 4, K, 0, 2)), this.addAfterPosition(Qi - Ji, K, 0, G, Xi);
					continue;
				}
				for (;; Zi++) {
					let b = Z[Zi];
					if (!(Qi > b)) {
						if (Zi == 0) Qi /= b;
						else {
							let w = Z[Zi - 1];
							Qi = (Qi - w) / (b - w);
						}
						break;
					}
				}
				Zi != X && (X = Zi, q && Zi == Y ? (w.computeWorldVertices(F, J - 4, 4, K, 0, 2), w.computeWorldVertices(F, 0, 4, K, 4, 2)) : w.computeWorldVertices(F, Zi * 6 + 2, 8, K, 0, 2)), this.addCurvePosition(Qi, K[0], K[1], K[2], K[3], K[4], K[5], K[6], K[7], G, Xi, O || Q > 0 && D == 0);
			}
			return G;
		}
		q ? (J += 2, K = Utils.setArraySize(this.world, J), w.computeWorldVertices(F, 2, J - 4, K, 0, 2), w.computeWorldVertices(F, 0, 2, K, J - 4, 2), K[J - 2] = K[0], K[J - 1] = K[1]) : (Y--, J -= 4, K = Utils.setArraySize(this.world, J), w.computeWorldVertices(F, 2, J, K, 0, 2));
		let Z = Utils.setArraySize(this.curves, Y), Ji = 0, Yi = K[0], Q = K[1], Xi = 0, Zi = 0, Qi = 0, $i = 0, ea = 0, ta = 0, na = 0, ra = 0, ia = 0, aa = 0, oa = 0, sa = 0, ca = 0, la = 0;
		for (let b = 0, w = 2; b < Y; b++, w += 6) Xi = K[w], Zi = K[w + 1], Qi = K[w + 2], $i = K[w + 3], ea = K[w + 4], ta = K[w + 5], na = (Yi - Xi * 2 + Qi) * .1875, ra = (Q - Zi * 2 + $i) * .1875, ia = ((Xi - Qi) * 3 - Yi + ea) * .09375, aa = ((Zi - $i) * 3 - Q + ta) * .09375, oa = na * 2 + ia, sa = ra * 2 + aa, ca = (Xi - Yi) * .75 + na + ia * .16666667, la = (Zi - Q) * .75 + ra + aa * .16666667, Ji += Math.sqrt(ca * ca + la * la), ca += oa, la += sa, oa += ia, sa += aa, Ji += Math.sqrt(ca * ca + la * la), ca += oa, la += sa, Ji += Math.sqrt(ca * ca + la * la), ca += oa + ia, la += sa + aa, Ji += Math.sqrt(ca * ca + la * la), Z[b] = Ji, Yi = ea, Q = ta;
		this.data.positionMode == PositionMode.Percent && (U *= Ji);
		let ua;
		switch (this.data.spacingMode) {
			case SpacingMode.Percent:
				ua = Ji;
				break;
			case SpacingMode.Proportional:
				ua = Ji / D;
				break;
			default: ua = 1;
		}
		let da = this.segments, fa = 0;
		for (let b = 0, w = 0, F = 0, Y = 0; b < D; b++, w += 3) {
			let D = W[b] * ua;
			U += D;
			let pa = U;
			if (q) pa %= Ji, pa < 0 && (pa += Ji), F = 0;
			else if (pa < 0) {
				this.addBeforePosition(pa, K, 0, G, w);
				continue;
			} else if (pa > Ji) {
				this.addAfterPosition(pa - Ji, K, J - 4, G, w);
				continue;
			}
			for (;; F++) {
				let b = Z[F];
				if (!(pa > b)) {
					if (F == 0) pa /= b;
					else {
						let w = Z[F - 1];
						pa = (pa - w) / (b - w);
					}
					break;
				}
			}
			if (F != X) {
				X = F;
				let b = F * 6;
				for (Yi = K[b], Q = K[b + 1], Xi = K[b + 2], Zi = K[b + 3], Qi = K[b + 4], $i = K[b + 5], ea = K[b + 6], ta = K[b + 7], na = (Yi - Xi * 2 + Qi) * .03, ra = (Q - Zi * 2 + $i) * .03, ia = ((Xi - Qi) * 3 - Yi + ea) * .006, aa = ((Zi - $i) * 3 - Q + ta) * .006, oa = na * 2 + ia, sa = ra * 2 + aa, ca = (Xi - Yi) * .3 + na + ia * .16666667, la = (Zi - Q) * .3 + ra + aa * .16666667, fa = Math.sqrt(ca * ca + la * la), da[0] = fa, b = 1; b < 8; b++) ca += oa, la += sa, oa += ia, sa += aa, fa += Math.sqrt(ca * ca + la * la), da[b] = fa;
				ca += oa, la += sa, fa += Math.sqrt(ca * ca + la * la), da[8] = fa, ca += oa + ia, la += sa + aa, fa += Math.sqrt(ca * ca + la * la), da[9] = fa, Y = 0;
			}
			for (pa *= fa;; Y++) {
				let b = da[Y];
				if (!(pa > b)) {
					if (Y == 0) pa /= b;
					else {
						let w = da[Y - 1];
						pa = Y + (pa - w) / (b - w);
					}
					break;
				}
			}
			this.addCurvePosition(pa * .1, Yi, Q, Xi, Zi, Qi, $i, ea, ta, G, w, O || b > 0 && D == 0);
		}
		return G;
	}
	addBeforePosition(b, w, D, O, F) {
		let U = w[D], W = w[D + 1], G = w[D + 2] - U, K = w[D + 3] - W, q = Math.atan2(K, G);
		O[F] = U + b * Math.cos(q), O[F + 1] = W + b * Math.sin(q), O[F + 2] = q;
	}
	addAfterPosition(b, w, D, O, F) {
		let U = w[D + 2], W = w[D + 3], G = U - w[D], K = W - w[D + 1], q = Math.atan2(K, G);
		O[F] = U + b * Math.cos(q), O[F + 1] = W + b * Math.sin(q), O[F + 2] = q;
	}
	addCurvePosition(b, w, D, O, F, U, W, G, K, q, J, Y) {
		if (b == 0 || isNaN(b)) {
			q[J] = w, q[J + 1] = D, q[J + 2] = Math.atan2(F - D, O - w);
			return;
		}
		let X = b * b, Z = X * b, Ji = 1 - b, Yi = Ji * Ji, Q = Yi * Ji, Xi = Ji * b, Zi = Xi * 3, Qi = Ji * Zi, $i = Zi * b, ea = w * Q + O * Qi + U * $i + G * Z, ta = D * Q + F * Qi + W * $i + K * Z;
		q[J] = ea, q[J + 1] = ta, Y && (b < .001 ? q[J + 2] = Math.atan2(F - D, O - w) : q[J + 2] = Math.atan2(ta - (D * Yi + F * Xi * 2 + W * X), ea - (w * Yi + O * Xi * 2 + U * X)));
	}
};
_defineProperty(PathConstraint, "NONE", -1), _defineProperty(PathConstraint, "BEFORE", -2), _defineProperty(PathConstraint, "AFTER", -3), _defineProperty(PathConstraint, "epsilon", 1e-5);
var PhysicsConstraint = class {
	set bone(b) {
		this._bone = b;
	}
	get bone() {
		if (this._bone) return this._bone;
		throw Error("Bone not set.");
	}
	constructor(b, w) {
		_defineProperty(this, "data", void 0), _defineProperty(this, "_bone", null), _defineProperty(this, "inertia", 0), _defineProperty(this, "strength", 0), _defineProperty(this, "damping", 0), _defineProperty(this, "massInverse", 0), _defineProperty(this, "wind", 0), _defineProperty(this, "gravity", 0), _defineProperty(this, "mix", 0), _defineProperty(this, "_reset", !0), _defineProperty(this, "ux", 0), _defineProperty(this, "uy", 0), _defineProperty(this, "cx", 0), _defineProperty(this, "cy", 0), _defineProperty(this, "tx", 0), _defineProperty(this, "ty", 0), _defineProperty(this, "xOffset", 0), _defineProperty(this, "xVelocity", 0), _defineProperty(this, "yOffset", 0), _defineProperty(this, "yVelocity", 0), _defineProperty(this, "rotateOffset", 0), _defineProperty(this, "rotateVelocity", 0), _defineProperty(this, "scaleOffset", 0), _defineProperty(this, "scaleVelocity", 0), _defineProperty(this, "active", !1), _defineProperty(this, "skeleton", void 0), _defineProperty(this, "remaining", 0), _defineProperty(this, "lastTime", 0), this.data = b, this.skeleton = w, this.bone = w.bones[b.bone.index], this.inertia = b.inertia, this.strength = b.strength, this.damping = b.damping, this.massInverse = b.massInverse, this.wind = b.wind, this.gravity = b.gravity, this.mix = b.mix;
	}
	reset() {
		this.remaining = 0, this.lastTime = this.skeleton.time, this._reset = !0, this.xOffset = 0, this.xVelocity = 0, this.yOffset = 0, this.yVelocity = 0, this.rotateOffset = 0, this.rotateVelocity = 0, this.scaleOffset = 0, this.scaleVelocity = 0;
	}
	setToSetupPose() {
		let b = this.data;
		this.inertia = b.inertia, this.strength = b.strength, this.damping = b.damping, this.massInverse = b.massInverse, this.wind = b.wind, this.gravity = b.gravity, this.mix = b.mix;
	}
	isActive() {
		return this.active;
	}
	update(b) {
		let w = this.mix;
		if (w == 0) return;
		let D = this.data.x > 0, O = this.data.y > 0, F = this.data.rotate > 0 || this.data.shearX > 0, U = this.data.scaleX > 0, W = this.bone, G = W.data.length;
		switch (b) {
			case Physics.none: return;
			case Physics.reset: this.reset();
			case Physics.update:
				let b = this.skeleton, K = Math.max(this.skeleton.time - this.lastTime, 0);
				this.remaining += K, this.lastTime = b.time;
				let q = W.worldX, J = W.worldY;
				if (this._reset) this._reset = !1, this.ux = q, this.uy = J;
				else {
					let Y = this.remaining, X = this.inertia, Z = this.data.step, Ji = this.skeleton.data.referenceScale, Yi = -1, Q = this.data.limit * K, Xi = Q * Math.abs(b.scaleY);
					if (Q *= Math.abs(b.scaleX), D || O) {
						if (D) {
							let b = (this.ux - q) * X;
							this.xOffset += b > Q ? Q : b < -Q ? -Q : b, this.ux = q;
						}
						if (O) {
							let b = (this.uy - J) * X;
							this.yOffset += b > Xi ? Xi : b < -Xi ? -Xi : b, this.uy = J;
						}
						if (Y >= Z) {
							Yi = Math.pow(this.damping, 60 * Z);
							let w = this.massInverse * Z, F = this.strength, U = this.wind * Ji * b.scaleX, W = this.gravity * Ji * b.scaleY;
							do
								D && (this.xVelocity += (U - this.xOffset * F) * w, this.xOffset += this.xVelocity * Z, this.xVelocity *= Yi), O && (this.yVelocity -= (W + this.yOffset * F) * w, this.yOffset += this.yVelocity * Z, this.yVelocity *= Yi), Y -= Z;
							while (Y >= Z);
						}
						D && (W.worldX += this.xOffset * w * this.data.x), O && (W.worldY += this.yOffset * w * this.data.y);
					}
					if (F || U) {
						let b = Math.atan2(W.c, W.a), D = 0, O = 0, K = 0, q = this.cx - W.worldX, J = this.cy - W.worldY;
						if (q > Q ? q = Q : q < -Q && (q = -Q), J > Xi ? J = Xi : J < -Xi && (J = -Xi), F) {
							K = (this.data.rotate + this.data.shearX) * w;
							let F = Math.atan2(J + this.ty, q + this.tx) - b - this.rotateOffset * K;
							this.rotateOffset += (F - Math.ceil(F * MathUtils.invPI2 - .5) * MathUtils.PI2) * X, F = this.rotateOffset * K + b, D = Math.cos(F), O = Math.sin(F), U && (F = G * W.getWorldScaleX(), F > 0 && (this.scaleOffset += (q * D + J * O) * X / F));
						} else {
							D = Math.cos(b), O = Math.sin(b);
							let w = G * W.getWorldScaleX();
							w > 0 && (this.scaleOffset += (q * D + J * O) * X / w);
						}
						if (Y = this.remaining, Y >= Z) {
							Yi == -1 && (Yi = Math.pow(this.damping, 60 * Z));
							let w = this.massInverse * Z, W = this.strength, q = this.wind, J = Skeleton.yDown ? -this.gravity : this.gravity, X = G / Ji;
							for (;;) if (Y -= Z, U && (this.scaleVelocity += (q * D - J * O - this.scaleOffset * W) * w, this.scaleOffset += this.scaleVelocity * Z, this.scaleVelocity *= Yi), F) {
								if (this.rotateVelocity -= ((q * O + J * D) * X + this.rotateOffset * W) * w, this.rotateOffset += this.rotateVelocity * Z, this.rotateVelocity *= Yi, Y < Z) break;
								let F = this.rotateOffset * K + b;
								D = Math.cos(F), O = Math.sin(F);
							} else if (Y < Z) break;
						}
					}
					this.remaining = Y;
				}
				this.cx = W.worldX, this.cy = W.worldY;
				break;
			case Physics.pose: D && (W.worldX += this.xOffset * w * this.data.x), O && (W.worldY += this.yOffset * w * this.data.y);
		}
		if (F) {
			let b = this.rotateOffset * w, D = 0, O = 0, F = 0;
			if (this.data.shearX > 0) {
				let w = 0;
				this.data.rotate > 0 && (w = b * this.data.rotate, D = Math.sin(w), O = Math.cos(w), F = W.b, W.b = O * F - D * W.d, W.d = D * F + O * W.d), w += b * this.data.shearX, D = Math.sin(w), O = Math.cos(w), F = W.a, W.a = O * F - D * W.c, W.c = D * F + O * W.c;
			} else b *= this.data.rotate, D = Math.sin(b), O = Math.cos(b), F = W.a, W.a = O * F - D * W.c, W.c = D * F + O * W.c, F = W.b, W.b = O * F - D * W.d, W.d = D * F + O * W.d;
		}
		if (U) {
			let b = 1 + this.scaleOffset * w * this.data.scaleX;
			W.a *= b, W.c *= b;
		}
		b != Physics.pose && (this.tx = G * W.a, this.ty = G * W.c), W.updateAppliedTransform();
	}
	translate(b, w) {
		this.ux -= b, this.uy -= w, this.cx -= b, this.cy -= w;
	}
	rotate(b, w, D) {
		let O = D * MathUtils.degRad, F = Math.cos(O), U = Math.sin(O), W = this.cx - b, G = this.cy - w;
		this.translate(W * F - G * U - W, W * U + G * F - G);
	}
}, Slot = class {
	constructor(b, w) {
		if (_defineProperty(this, "data", void 0), _defineProperty(this, "bone", void 0), _defineProperty(this, "color", void 0), _defineProperty(this, "darkColor", null), _defineProperty(this, "attachment", null), _defineProperty(this, "attachmentState", 0), _defineProperty(this, "sequenceIndex", -1), _defineProperty(this, "deform", []), !b) throw Error("data cannot be null.");
		if (!w) throw Error("bone cannot be null.");
		this.data = b, this.bone = w, this.color = new Color(), this.darkColor = b.darkColor ? new Color() : null, this.setToSetupPose();
	}
	getSkeleton() {
		return this.bone.skeleton;
	}
	getAttachment() {
		return this.attachment;
	}
	setAttachment(b) {
		this.attachment != b && ((!(b instanceof VertexAttachment) || !(this.attachment instanceof VertexAttachment) || b.timelineAttachment != this.attachment.timelineAttachment) && (this.deform.length = 0), this.attachment = b, this.sequenceIndex = -1);
	}
	setToSetupPose() {
		this.color.setFromColor(this.data.color), this.darkColor && this.darkColor.setFromColor(this.data.darkColor), this.data.attachmentName ? (this.attachment = null, this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName))) : this.attachment = null;
	}
}, TransformConstraint = class {
	constructor(b, w) {
		if (_defineProperty(this, "data", void 0), _defineProperty(this, "bones", void 0), _defineProperty(this, "target", void 0), _defineProperty(this, "mixRotate", 0), _defineProperty(this, "mixX", 0), _defineProperty(this, "mixY", 0), _defineProperty(this, "mixScaleX", 0), _defineProperty(this, "mixScaleY", 0), _defineProperty(this, "mixShearY", 0), _defineProperty(this, "temp", new Vector2()), _defineProperty(this, "active", !1), !b) throw Error("data cannot be null.");
		if (!w) throw Error("skeleton cannot be null.");
		this.data = b, this.bones = [];
		for (let D = 0; D < b.bones.length; D++) {
			let O = w.findBone(b.bones[D].name);
			if (!O) throw Error(`Couldn't find bone ${b.bones[D].name}.`);
			this.bones.push(O);
		}
		let D = w.findBone(b.target.name);
		if (!D) throw Error(`Couldn't find target bone ${b.target.name}.`);
		this.target = D, this.mixRotate = b.mixRotate, this.mixX = b.mixX, this.mixY = b.mixY, this.mixScaleX = b.mixScaleX, this.mixScaleY = b.mixScaleY, this.mixShearY = b.mixShearY;
	}
	isActive() {
		return this.active;
	}
	setToSetupPose() {
		let b = this.data;
		this.mixRotate = b.mixRotate, this.mixX = b.mixX, this.mixY = b.mixY, this.mixScaleX = b.mixScaleX, this.mixScaleY = b.mixScaleY, this.mixShearY = b.mixShearY;
	}
	update(b) {
		this.mixRotate == 0 && this.mixX == 0 && this.mixY == 0 && this.mixScaleX == 0 && this.mixScaleY == 0 && this.mixShearY == 0 || (this.data.local ? this.data.relative ? this.applyRelativeLocal() : this.applyAbsoluteLocal() : this.data.relative ? this.applyRelativeWorld() : this.applyAbsoluteWorld());
	}
	applyAbsoluteWorld() {
		let b = this.mixRotate, w = this.mixX, D = this.mixY, O = this.mixScaleX, F = this.mixScaleY, U = this.mixShearY, W = w != 0 || D != 0, G = this.target, K = G.a, q = G.b, J = G.c, Y = G.d, X = K * Y - q * J > 0 ? MathUtils.degRad : -MathUtils.degRad, Z = this.data.offsetRotation * X, Ji = this.data.offsetShearY * X, Yi = this.bones;
		for (let X = 0, Q = Yi.length; X < Q; X++) {
			let Q = Yi[X];
			if (b != 0) {
				let w = Q.a, D = Q.b, O = Q.c, F = Q.d, U = Math.atan2(J, K) - Math.atan2(O, w) + Z;
				U > MathUtils.PI ? U -= MathUtils.PI2 : U < -MathUtils.PI && (U += MathUtils.PI2), U *= b;
				let W = Math.cos(U), G = Math.sin(U);
				Q.a = W * w - G * O, Q.b = W * D - G * F, Q.c = G * w + W * O, Q.d = G * D + W * F;
			}
			if (W) {
				let b = this.temp;
				G.localToWorld(b.set(this.data.offsetX, this.data.offsetY)), Q.worldX += (b.x - Q.worldX) * w, Q.worldY += (b.y - Q.worldY) * D;
			}
			if (O != 0) {
				let b = Math.sqrt(Q.a * Q.a + Q.c * Q.c);
				b != 0 && (b = (b + (Math.sqrt(K * K + J * J) - b + this.data.offsetScaleX) * O) / b), Q.a *= b, Q.c *= b;
			}
			if (F != 0) {
				let b = Math.sqrt(Q.b * Q.b + Q.d * Q.d);
				b != 0 && (b = (b + (Math.sqrt(q * q + Y * Y) - b + this.data.offsetScaleY) * F) / b), Q.b *= b, Q.d *= b;
			}
			if (U > 0) {
				let b = Q.b, w = Q.d, D = Math.atan2(w, b), O = Math.atan2(Y, q) - Math.atan2(J, K) - (D - Math.atan2(Q.c, Q.a));
				O > MathUtils.PI ? O -= MathUtils.PI2 : O < -MathUtils.PI && (O += MathUtils.PI2), O = D + (O + Ji) * U;
				let F = Math.sqrt(b * b + w * w);
				Q.b = Math.cos(O) * F, Q.d = Math.sin(O) * F;
			}
			Q.updateAppliedTransform();
		}
	}
	applyRelativeWorld() {
		let b = this.mixRotate, w = this.mixX, D = this.mixY, O = this.mixScaleX, F = this.mixScaleY, U = this.mixShearY, W = w != 0 || D != 0, G = this.target, K = G.a, q = G.b, J = G.c, Y = G.d, X = K * Y - q * J > 0 ? MathUtils.degRad : -MathUtils.degRad, Z = this.data.offsetRotation * X, Ji = this.data.offsetShearY * X, Yi = this.bones;
		for (let X = 0, Q = Yi.length; X < Q; X++) {
			let Q = Yi[X];
			if (b != 0) {
				let w = Q.a, D = Q.b, O = Q.c, F = Q.d, U = Math.atan2(J, K) + Z;
				U > MathUtils.PI ? U -= MathUtils.PI2 : U < -MathUtils.PI && (U += MathUtils.PI2), U *= b;
				let W = Math.cos(U), G = Math.sin(U);
				Q.a = W * w - G * O, Q.b = W * D - G * F, Q.c = G * w + W * O, Q.d = G * D + W * F;
			}
			if (W) {
				let b = this.temp;
				G.localToWorld(b.set(this.data.offsetX, this.data.offsetY)), Q.worldX += b.x * w, Q.worldY += b.y * D;
			}
			if (O != 0) {
				let b = (Math.sqrt(K * K + J * J) - 1 + this.data.offsetScaleX) * O + 1;
				Q.a *= b, Q.c *= b;
			}
			if (F != 0) {
				let b = (Math.sqrt(q * q + Y * Y) - 1 + this.data.offsetScaleY) * F + 1;
				Q.b *= b, Q.d *= b;
			}
			if (U > 0) {
				let b = Math.atan2(Y, q) - Math.atan2(J, K);
				b > MathUtils.PI ? b -= MathUtils.PI2 : b < -MathUtils.PI && (b += MathUtils.PI2);
				let w = Q.b, D = Q.d;
				b = Math.atan2(D, w) + (b - MathUtils.PI / 2 + Ji) * U;
				let O = Math.sqrt(w * w + D * D);
				Q.b = Math.cos(b) * O, Q.d = Math.sin(b) * O;
			}
			Q.updateAppliedTransform();
		}
	}
	applyAbsoluteLocal() {
		let b = this.mixRotate, w = this.mixX, D = this.mixY, O = this.mixScaleX, F = this.mixScaleY, U = this.mixShearY, W = this.target, G = this.bones;
		for (let K = 0, q = G.length; K < q; K++) {
			let q = G[K], J = q.arotation;
			b != 0 && (J += (W.arotation - J + this.data.offsetRotation) * b);
			let Y = q.ax, X = q.ay;
			Y += (W.ax - Y + this.data.offsetX) * w, X += (W.ay - X + this.data.offsetY) * D;
			let Z = q.ascaleX, Ji = q.ascaleY;
			O != 0 && Z != 0 && (Z = (Z + (W.ascaleX - Z + this.data.offsetScaleX) * O) / Z), F != 0 && Ji != 0 && (Ji = (Ji + (W.ascaleY - Ji + this.data.offsetScaleY) * F) / Ji);
			let Yi = q.ashearY;
			U != 0 && (Yi += (W.ashearY - Yi + this.data.offsetShearY) * U), q.updateWorldTransformWith(Y, X, J, Z, Ji, q.ashearX, Yi);
		}
	}
	applyRelativeLocal() {
		let b = this.mixRotate, w = this.mixX, D = this.mixY, O = this.mixScaleX, F = this.mixScaleY, U = this.mixShearY, W = this.target, G = this.bones;
		for (let K = 0, q = G.length; K < q; K++) {
			let q = G[K], J = q.arotation + (W.arotation + this.data.offsetRotation) * b, Y = q.ax + (W.ax + this.data.offsetX) * w, X = q.ay + (W.ay + this.data.offsetY) * D, Z = q.ascaleX * ((W.ascaleX - 1 + this.data.offsetScaleX) * O + 1), Ji = q.ascaleY * ((W.ascaleY - 1 + this.data.offsetScaleY) * F + 1), Yi = q.ashearY + (W.ashearY + this.data.offsetShearY) * U;
			q.updateWorldTransformWith(Y, X, J, Z, Ji, q.ashearX, Yi);
		}
	}
}, Skeleton = class b {
	get scaleY() {
		return b.yDown ? -this._scaleY : this._scaleY;
	}
	set scaleY(b) {
		this._scaleY = b;
	}
	constructor(b) {
		if (_defineProperty(this, "data", void 0), _defineProperty(this, "bones", void 0), _defineProperty(this, "slots", void 0), _defineProperty(this, "drawOrder", void 0), _defineProperty(this, "ikConstraints", void 0), _defineProperty(this, "transformConstraints", void 0), _defineProperty(this, "pathConstraints", void 0), _defineProperty(this, "physicsConstraints", void 0), _defineProperty(this, "_updateCache", []), _defineProperty(this, "skin", null), _defineProperty(this, "color", void 0), _defineProperty(this, "scaleX", 1), _defineProperty(this, "_scaleY", 1), _defineProperty(this, "x", 0), _defineProperty(this, "y", 0), _defineProperty(this, "time", 0), !b) throw Error("data cannot be null.");
		this.data = b, this.bones = [];
		for (let w = 0; w < b.bones.length; w++) {
			let D = b.bones[w], O;
			if (!D.parent) O = new Bone(D, this, null);
			else {
				let b = this.bones[D.parent.index];
				O = new Bone(D, this, b), b.children.push(O);
			}
			this.bones.push(O);
		}
		this.slots = [], this.drawOrder = [];
		for (let w = 0; w < b.slots.length; w++) {
			let D = b.slots[w], O = this.bones[D.boneData.index], F = new Slot(D, O);
			this.slots.push(F), this.drawOrder.push(F);
		}
		this.ikConstraints = [];
		for (let w = 0; w < b.ikConstraints.length; w++) {
			let D = b.ikConstraints[w];
			this.ikConstraints.push(new IkConstraint(D, this));
		}
		this.transformConstraints = [];
		for (let w = 0; w < b.transformConstraints.length; w++) {
			let D = b.transformConstraints[w];
			this.transformConstraints.push(new TransformConstraint(D, this));
		}
		this.pathConstraints = [];
		for (let w = 0; w < b.pathConstraints.length; w++) {
			let D = b.pathConstraints[w];
			this.pathConstraints.push(new PathConstraint(D, this));
		}
		this.physicsConstraints = [];
		for (let w = 0; w < b.physicsConstraints.length; w++) {
			let D = b.physicsConstraints[w];
			this.physicsConstraints.push(new PhysicsConstraint(D, this));
		}
		this.color = new Color(1, 1, 1, 1), this.updateCache();
	}
	updateCache() {
		let b = this._updateCache;
		b.length = 0;
		let w = this.bones;
		for (let b = 0, D = w.length; b < D; b++) {
			let D = w[b];
			D.sorted = D.data.skinRequired, D.active = !D.sorted;
		}
		if (this.skin) {
			let b = this.skin.bones;
			for (let w = 0, D = this.skin.bones.length; w < D; w++) {
				let D = this.bones[b[w].index];
				do
					D.sorted = !1, D.active = !0, D = D.parent;
				while (D);
			}
		}
		let D = this.ikConstraints, O = this.transformConstraints, F = this.pathConstraints, U = this.physicsConstraints, W = D.length, G = O.length, K = F.length, q = this.physicsConstraints.length, J = W + G + K + q;
		outer: for (let b = 0; b < J; b++) {
			for (let w = 0; w < W; w++) {
				let O = D[w];
				if (O.data.order == b) {
					this.sortIkConstraint(O);
					continue outer;
				}
			}
			for (let w = 0; w < G; w++) {
				let D = O[w];
				if (D.data.order == b) {
					this.sortTransformConstraint(D);
					continue outer;
				}
			}
			for (let w = 0; w < K; w++) {
				let D = F[w];
				if (D.data.order == b) {
					this.sortPathConstraint(D);
					continue outer;
				}
			}
			for (let w = 0; w < q; w++) {
				let D = U[w];
				if (D.data.order == b) {
					this.sortPhysicsConstraint(D);
					continue outer;
				}
			}
		}
		for (let b = 0, D = w.length; b < D; b++) this.sortBone(w[b]);
	}
	sortIkConstraint(b) {
		if (b.active = b.target.isActive() && (!b.data.skinRequired || this.skin && Utils.contains(this.skin.constraints, b.data, !0)), !b.active) return;
		let w = b.target;
		this.sortBone(w);
		let D = b.bones, O = D[0];
		if (this.sortBone(O), D.length == 1) this._updateCache.push(b), this.sortReset(O.children);
		else {
			let w = D[D.length - 1];
			this.sortBone(w), this._updateCache.push(b), this.sortReset(O.children), w.sorted = !0;
		}
	}
	sortPathConstraint(b) {
		if (b.active = b.target.bone.isActive() && (!b.data.skinRequired || this.skin && Utils.contains(this.skin.constraints, b.data, !0)), !b.active) return;
		let w = b.target, D = w.data.index, O = w.bone;
		this.skin && this.sortPathConstraintAttachment(this.skin, D, O), this.data.defaultSkin && this.data.defaultSkin != this.skin && this.sortPathConstraintAttachment(this.data.defaultSkin, D, O);
		for (let b = 0, w = this.data.skins.length; b < w; b++) this.sortPathConstraintAttachment(this.data.skins[b], D, O);
		let F = w.getAttachment();
		F instanceof PathAttachment && this.sortPathConstraintAttachmentWith(F, O);
		let U = b.bones, W = U.length;
		for (let b = 0; b < W; b++) this.sortBone(U[b]);
		this._updateCache.push(b);
		for (let b = 0; b < W; b++) this.sortReset(U[b].children);
		for (let b = 0; b < W; b++) U[b].sorted = !0;
	}
	sortTransformConstraint(b) {
		if (b.active = b.target.isActive() && (!b.data.skinRequired || this.skin && Utils.contains(this.skin.constraints, b.data, !0)), !b.active) return;
		this.sortBone(b.target);
		let w = b.bones, D = w.length;
		if (b.data.local) for (let b = 0; b < D; b++) {
			let D = w[b];
			this.sortBone(D.parent), this.sortBone(D);
		}
		else for (let b = 0; b < D; b++) this.sortBone(w[b]);
		this._updateCache.push(b);
		for (let b = 0; b < D; b++) this.sortReset(w[b].children);
		for (let b = 0; b < D; b++) w[b].sorted = !0;
	}
	sortPathConstraintAttachment(b, w, D) {
		let O = b.attachments[w];
		if (O) for (let b in O) this.sortPathConstraintAttachmentWith(O[b], D);
	}
	sortPathConstraintAttachmentWith(b, w) {
		if (!(b instanceof PathAttachment)) return;
		let D = b.bones;
		if (!D) this.sortBone(w);
		else {
			let b = this.bones;
			for (let w = 0, O = D.length; w < O;) {
				let O = D[w++];
				for (O += w; w < O;) this.sortBone(b[D[w++]]);
			}
		}
	}
	sortPhysicsConstraint(b) {
		let w = b.bone;
		b.active = w.active && (!b.data.skinRequired || this.skin != null && Utils.contains(this.skin.constraints, b.data, !0)), b.active && (this.sortBone(w), this._updateCache.push(b), this.sortReset(w.children), w.sorted = !0);
	}
	sortBone(b) {
		if (!b || b.sorted) return;
		let w = b.parent;
		w && this.sortBone(w), b.sorted = !0, this._updateCache.push(b);
	}
	sortReset(b) {
		for (let w = 0, D = b.length; w < D; w++) {
			let D = b[w];
			D.active && (D.sorted && this.sortReset(D.children), D.sorted = !1);
		}
	}
	updateWorldTransform(b) {
		if (b == null) throw Error("physics is undefined");
		let w = this.bones;
		for (let b = 0, D = w.length; b < D; b++) {
			let D = w[b];
			D.ax = D.x, D.ay = D.y, D.arotation = D.rotation, D.ascaleX = D.scaleX, D.ascaleY = D.scaleY, D.ashearX = D.shearX, D.ashearY = D.shearY;
		}
		let D = this._updateCache;
		for (let w = 0, O = D.length; w < O; w++) D[w].update(b);
	}
	updateWorldTransformWith(b, w) {
		if (!w) throw Error("parent cannot be null.");
		let D = this.bones;
		for (let b = 1, w = D.length; b < w; b++) {
			let w = D[b];
			w.ax = w.x, w.ay = w.y, w.arotation = w.rotation, w.ascaleX = w.scaleX, w.ascaleY = w.scaleY, w.ashearX = w.shearX, w.ashearY = w.shearY;
		}
		let O = this.getRootBone();
		if (!O) throw Error("Root bone must not be null.");
		let F = w.a, U = w.b, W = w.c, G = w.d;
		O.worldX = F * this.x + U * this.y + w.worldX, O.worldY = W * this.x + G * this.y + w.worldY;
		let K = (O.rotation + O.shearX) * MathUtils.degRad, q = (O.rotation + 90 + O.shearY) * MathUtils.degRad, J = Math.cos(K) * O.scaleX, Y = Math.cos(q) * O.scaleY, X = Math.sin(K) * O.scaleX, Z = Math.sin(q) * O.scaleY;
		O.a = (F * J + U * X) * this.scaleX, O.b = (F * Y + U * Z) * this.scaleX, O.c = (W * J + G * X) * this.scaleY, O.d = (W * Y + G * Z) * this.scaleY;
		let Ji = this._updateCache;
		for (let w = 0, D = Ji.length; w < D; w++) {
			let D = Ji[w];
			D != O && D.update(b);
		}
	}
	setToSetupPose() {
		this.setBonesToSetupPose(), this.setSlotsToSetupPose();
	}
	setBonesToSetupPose() {
		for (let b of this.bones) b.setToSetupPose();
		for (let b of this.ikConstraints) b.setToSetupPose();
		for (let b of this.transformConstraints) b.setToSetupPose();
		for (let b of this.pathConstraints) b.setToSetupPose();
		for (let b of this.physicsConstraints) b.setToSetupPose();
	}
	setSlotsToSetupPose() {
		let b = this.slots;
		Utils.arrayCopy(b, 0, this.drawOrder, 0, b.length);
		for (let w = 0, D = b.length; w < D; w++) b[w].setToSetupPose();
	}
	getRootBone() {
		return this.bones.length == 0 ? null : this.bones[0];
	}
	findBone(b) {
		if (!b) throw Error("boneName cannot be null.");
		let w = this.bones;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.data.name == b) return O;
		}
		return null;
	}
	findSlot(b) {
		if (!b) throw Error("slotName cannot be null.");
		let w = this.slots;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.data.name == b) return O;
		}
		return null;
	}
	setSkinByName(b) {
		let w = this.data.findSkin(b);
		if (!w) throw Error("Skin not found: " + b);
		this.setSkin(w);
	}
	setSkin(b) {
		if (b != this.skin) {
			if (b) if (this.skin) b.attachAll(this, this.skin);
			else {
				let w = this.slots;
				for (let D = 0, O = w.length; D < O; D++) {
					let O = w[D], F = O.data.attachmentName;
					if (F) {
						let w = b.getAttachment(D, F);
						w && O.setAttachment(w);
					}
				}
			}
			this.skin = b, this.updateCache();
		}
	}
	getAttachmentByName(b, w) {
		let D = this.data.findSlot(b);
		if (!D) throw Error(`Can't find slot with name ${b}`);
		return this.getAttachment(D.index, w);
	}
	getAttachment(b, w) {
		if (!w) throw Error("attachmentName cannot be null.");
		if (this.skin) {
			let D = this.skin.getAttachment(b, w);
			if (D) return D;
		}
		return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(b, w) : null;
	}
	setAttachment(b, w) {
		if (!b) throw Error("slotName cannot be null.");
		let D = this.slots;
		for (let O = 0, F = D.length; O < F; O++) {
			let F = D[O];
			if (F.data.name == b) {
				let D = null;
				if (w && (D = this.getAttachment(O, w), !D)) throw Error("Attachment not found: " + w + ", for slot: " + b);
				F.setAttachment(D);
				return;
			}
		}
		throw Error("Slot not found: " + b);
	}
	findIkConstraint(b) {
		var w;
		if (!b) throw Error("constraintName cannot be null.");
		return (w = this.ikConstraints.find((w) => w.data.name == b)) == null ? null : w;
	}
	findTransformConstraint(b) {
		var w;
		if (!b) throw Error("constraintName cannot be null.");
		return (w = this.transformConstraints.find((w) => w.data.name == b)) == null ? null : w;
	}
	findPathConstraint(b) {
		var w;
		if (!b) throw Error("constraintName cannot be null.");
		return (w = this.pathConstraints.find((w) => w.data.name == b)) == null ? null : w;
	}
	findPhysicsConstraint(b) {
		var w;
		if (b == null) throw Error("constraintName cannot be null.");
		return (w = this.physicsConstraints.find((w) => w.data.name == b)) == null ? null : w;
	}
	getBoundsRect(b) {
		let w = new Vector2(), D = new Vector2();
		return this.getBounds(w, D, void 0, b), {
			x: w.x,
			y: w.y,
			width: D.x,
			height: D.y
		};
	}
	getBounds(w, D, O = [, ,], F = null) {
		if (!w) throw Error("offset cannot be null.");
		if (!D) throw Error("size cannot be null.");
		let U = this.drawOrder, W = Infinity, G = Infinity, K = -Infinity, q = -Infinity;
		for (let w = 0, D = U.length; w < D; w++) {
			let D = U[w];
			if (!D.bone.active) continue;
			let J = 0, Y = null, X = null, Z = D.getAttachment();
			if (Z instanceof RegionAttachment) J = 8, Y = Utils.setArraySize(O, J, 0), Z.computeWorldVertices(D, Y, 0, 2), X = b.quadTriangles;
			else if (Z instanceof MeshAttachment) {
				let b = Z;
				J = b.worldVerticesLength, Y = Utils.setArraySize(O, J, 0), b.computeWorldVertices(D, 0, J, Y, 0, 2), X = b.triangles;
			} else if (Z instanceof ClippingAttachment && F != null) {
				F.clipStart(D, Z);
				continue;
			}
			if (Y && X) {
				F != null && F.isClipping() && (F.clipTriangles(Y, X, X.length), Y = F.clippedVertices, J = F.clippedVertices.length);
				for (let b = 0, w = Y.length; b < w; b += 2) {
					let w = Y[b], D = Y[b + 1];
					W = Math.min(W, w), G = Math.min(G, D), K = Math.max(K, w), q = Math.max(q, D);
				}
			}
			F != null && F.clipEndWithSlot(D);
		}
		F != null && F.clipEnd(), w.set(W, G), D.set(K - W, q - G);
	}
	update(b) {
		this.time += b;
	}
	physicsTranslate(b, w) {
		let D = this.physicsConstraints;
		for (let O = 0, F = D.length; O < F; O++) D[O].translate(b, w);
	}
	physicsRotate(b, w, D) {
		let O = this.physicsConstraints;
		for (let F = 0, U = O.length; F < U; F++) O[F].rotate(b, w, D);
	}
};
_defineProperty(Skeleton, "quadTriangles", [
	0,
	1,
	2,
	2,
	3,
	0
]), _defineProperty(Skeleton, "yDown", !1);
var Physics;
(function(b) {
	b[b.none = 0] = "none", b[b.reset = 1] = "reset", b[b.update = 2] = "update", b[b.pose = 3] = "pose";
})(Physics || (Physics = {}));
var PhysicsConstraintData = class extends ConstraintData {
	set bone(b) {
		this._bone = b;
	}
	get bone() {
		if (this._bone) return this._bone;
		throw Error("BoneData not set.");
	}
	constructor(b) {
		super(b, 0, !1), _defineProperty(this, "_bone", null), _defineProperty(this, "x", 0), _defineProperty(this, "y", 0), _defineProperty(this, "rotate", 0), _defineProperty(this, "scaleX", 0), _defineProperty(this, "shearX", 0), _defineProperty(this, "limit", 0), _defineProperty(this, "step", 0), _defineProperty(this, "inertia", 0), _defineProperty(this, "strength", 0), _defineProperty(this, "damping", 0), _defineProperty(this, "massInverse", 0), _defineProperty(this, "wind", 0), _defineProperty(this, "gravity", 0), _defineProperty(this, "mix", 0), _defineProperty(this, "inertiaGlobal", !1), _defineProperty(this, "strengthGlobal", !1), _defineProperty(this, "dampingGlobal", !1), _defineProperty(this, "massGlobal", !1), _defineProperty(this, "windGlobal", !1), _defineProperty(this, "gravityGlobal", !1), _defineProperty(this, "mixGlobal", !1);
	}
}, SkeletonData = class {
	constructor() {
		_defineProperty(this, "name", null), _defineProperty(this, "bones", []), _defineProperty(this, "slots", []), _defineProperty(this, "skins", []), _defineProperty(this, "defaultSkin", null), _defineProperty(this, "events", []), _defineProperty(this, "animations", []), _defineProperty(this, "ikConstraints", []), _defineProperty(this, "transformConstraints", []), _defineProperty(this, "pathConstraints", []), _defineProperty(this, "physicsConstraints", []), _defineProperty(this, "x", 0), _defineProperty(this, "y", 0), _defineProperty(this, "width", 0), _defineProperty(this, "height", 0), _defineProperty(this, "referenceScale", 100), _defineProperty(this, "version", null), _defineProperty(this, "hash", null), _defineProperty(this, "fps", 0), _defineProperty(this, "imagesPath", null), _defineProperty(this, "audioPath", null);
	}
	findBone(b) {
		if (!b) throw Error("boneName cannot be null.");
		let w = this.bones;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.name == b) return O;
		}
		return null;
	}
	findSlot(b) {
		if (!b) throw Error("slotName cannot be null.");
		let w = this.slots;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.name == b) return O;
		}
		return null;
	}
	findSkin(b) {
		if (!b) throw Error("skinName cannot be null.");
		let w = this.skins;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.name == b) return O;
		}
		return null;
	}
	findEvent(b) {
		if (!b) throw Error("eventDataName cannot be null.");
		let w = this.events;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.name == b) return O;
		}
		return null;
	}
	findAnimation(b) {
		if (!b) throw Error("animationName cannot be null.");
		let w = this.animations;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.name == b) return O;
		}
		return null;
	}
	findIkConstraint(b) {
		if (!b) throw Error("constraintName cannot be null.");
		let w = this.ikConstraints;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.name == b) return O;
		}
		return null;
	}
	findTransformConstraint(b) {
		if (!b) throw Error("constraintName cannot be null.");
		let w = this.transformConstraints;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.name == b) return O;
		}
		return null;
	}
	findPathConstraint(b) {
		if (!b) throw Error("constraintName cannot be null.");
		let w = this.pathConstraints;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.name == b) return O;
		}
		return null;
	}
	findPhysicsConstraint(b) {
		if (!b) throw Error("constraintName cannot be null.");
		let w = this.physicsConstraints;
		for (let D = 0, O = w.length; D < O; D++) {
			let O = w[D];
			if (O.name == b) return O;
		}
		return null;
	}
}, SkinEntry = class {
	constructor(b = 0, w, D) {
		_defineProperty(this, "slotIndex", void 0), _defineProperty(this, "name", void 0), _defineProperty(this, "attachment", void 0), this.slotIndex = b, this.name = w, this.attachment = D;
	}
}, Skin = class {
	constructor(b) {
		if (_defineProperty(this, "name", void 0), _defineProperty(this, "attachments", []), _defineProperty(this, "bones", []), _defineProperty(this, "constraints", []), _defineProperty(this, "color", new Color(.99607843, .61960787, .30980393, 1)), !b) throw Error("name cannot be null.");
		this.name = b;
	}
	setAttachment(b, w, D) {
		if (!D) throw Error("attachment cannot be null.");
		let O = this.attachments;
		b >= O.length && (O.length = b + 1), O[b] || (O[b] = {}), O[b][w] = D;
	}
	addSkin(b) {
		for (let w = 0; w < b.bones.length; w++) {
			let D = b.bones[w], O = !1;
			for (let b = 0; b < this.bones.length; b++) if (this.bones[b] == D) {
				O = !0;
				break;
			}
			O || this.bones.push(D);
		}
		for (let w = 0; w < b.constraints.length; w++) {
			let D = b.constraints[w], O = !1;
			for (let b = 0; b < this.constraints.length; b++) if (this.constraints[b] == D) {
				O = !0;
				break;
			}
			O || this.constraints.push(D);
		}
		let w = b.getAttachments();
		for (let b = 0; b < w.length; b++) {
			var D = w[b];
			this.setAttachment(D.slotIndex, D.name, D.attachment);
		}
	}
	copySkin(b) {
		for (let w = 0; w < b.bones.length; w++) {
			let D = b.bones[w], O = !1;
			for (let b = 0; b < this.bones.length; b++) if (this.bones[b] == D) {
				O = !0;
				break;
			}
			O || this.bones.push(D);
		}
		for (let w = 0; w < b.constraints.length; w++) {
			let D = b.constraints[w], O = !1;
			for (let b = 0; b < this.constraints.length; b++) if (this.constraints[b] == D) {
				O = !0;
				break;
			}
			O || this.constraints.push(D);
		}
		let w = b.getAttachments();
		for (let b = 0; b < w.length; b++) {
			var D = w[b];
			D.attachment && (D.attachment instanceof MeshAttachment ? (D.attachment = D.attachment.newLinkedMesh(), this.setAttachment(D.slotIndex, D.name, D.attachment)) : (D.attachment = D.attachment.copy(), this.setAttachment(D.slotIndex, D.name, D.attachment)));
		}
	}
	getAttachment(b, w) {
		let D = this.attachments[b];
		return D ? D[w] : null;
	}
	removeAttachment(b, w) {
		let D = this.attachments[b];
		D && delete D[w];
	}
	getAttachments() {
		let b = [];
		for (var w = 0; w < this.attachments.length; w++) {
			let D = this.attachments[w];
			if (D) for (let O in D) {
				let F = D[O];
				F && b.push(new SkinEntry(w, O, F));
			}
		}
		return b;
	}
	getAttachmentsForSlot(b, w) {
		let D = this.attachments[b];
		if (D) for (let O in D) {
			let F = D[O];
			F && w.push(new SkinEntry(b, O, F));
		}
	}
	clear() {
		this.attachments.length = 0, this.bones.length = 0, this.constraints.length = 0;
	}
	attachAll(b, w) {
		let D = 0;
		for (let O = 0; O < b.slots.length; O++) {
			let F = b.slots[O], U = F.getAttachment();
			if (U && D < w.attachments.length) {
				let b = w.attachments[D];
				for (let w in b) if (U == b[w]) {
					let b = this.getAttachment(D, w);
					b && F.setAttachment(b);
					break;
				}
			}
			D++;
		}
	}
}, SlotData = class {
	constructor(b, w, D) {
		if (_defineProperty(this, "index", 0), _defineProperty(this, "name", void 0), _defineProperty(this, "boneData", void 0), _defineProperty(this, "color", new Color(1, 1, 1, 1)), _defineProperty(this, "darkColor", null), _defineProperty(this, "attachmentName", null), _defineProperty(this, "blendMode", BlendMode.Normal), _defineProperty(this, "visible", !0), b < 0) throw Error("index must be >= 0.");
		if (!w) throw Error("name cannot be null.");
		if (!D) throw Error("boneData cannot be null.");
		this.index = b, this.name = w, this.boneData = D;
	}
}, BlendMode;
(function(b) {
	b[b.Normal = 0] = "Normal", b[b.Additive = 1] = "Additive", b[b.Multiply = 2] = "Multiply", b[b.Screen = 3] = "Screen";
})(BlendMode || (BlendMode = {}));
var TransformConstraintData = class extends ConstraintData {
	set target(b) {
		this._target = b;
	}
	get target() {
		if (this._target) return this._target;
		throw Error("BoneData not set.");
	}
	constructor(b) {
		super(b, 0, !1), _defineProperty(this, "bones", []), _defineProperty(this, "_target", null), _defineProperty(this, "mixRotate", 0), _defineProperty(this, "mixX", 0), _defineProperty(this, "mixY", 0), _defineProperty(this, "mixScaleX", 0), _defineProperty(this, "mixScaleY", 0), _defineProperty(this, "mixShearY", 0), _defineProperty(this, "offsetRotation", 0), _defineProperty(this, "offsetX", 0), _defineProperty(this, "offsetY", 0), _defineProperty(this, "offsetScaleX", 0), _defineProperty(this, "offsetScaleY", 0), _defineProperty(this, "offsetShearY", 0), _defineProperty(this, "relative", !1), _defineProperty(this, "local", !1);
	}
}, SkeletonBinary = class {
	constructor(b) {
		_defineProperty(this, "scale", 1), _defineProperty(this, "attachmentLoader", void 0), _defineProperty(this, "linkedMeshes", []), this.attachmentLoader = b;
	}
	readSkeletonData(b) {
		let w = this.scale, D = new SkeletonData();
		D.name = "";
		let O = new BinaryInput(b), F = O.readInt32(), U = O.readInt32();
		D.hash = U == 0 && F == 0 ? null : U.toString(16) + F.toString(16), D.version = O.readString(), D.x = O.readFloat(), D.y = O.readFloat(), D.width = O.readFloat(), D.height = O.readFloat(), D.referenceScale = O.readFloat() * w;
		let W = O.readBoolean();
		W && (D.fps = O.readFloat(), D.imagesPath = O.readString(), D.audioPath = O.readString());
		let G = 0;
		G = O.readInt(!0);
		for (let b = 0; b < G; b++) {
			let b = O.readString();
			if (!b) throw Error("String in string table must not be null.");
			O.strings.push(b);
		}
		G = O.readInt(!0);
		for (let b = 0; b < G; b++) {
			let F = O.readString();
			if (!F) throw Error("Bone name must not be null.");
			let U = b == 0 ? null : D.bones[O.readInt(!0)], G = new BoneData(b, F, U);
			if (G.rotation = O.readFloat(), G.x = O.readFloat() * w, G.y = O.readFloat() * w, G.scaleX = O.readFloat(), G.scaleY = O.readFloat(), G.shearX = O.readFloat(), G.shearY = O.readFloat(), G.length = O.readFloat() * w, G.inherit = O.readByte(), G.skinRequired = O.readBoolean(), W) {
				var K;
				Color.rgba8888ToColor(G.color, O.readInt32()), G.icon = (K = O.readString()) == null ? void 0 : K, G.visible = O.readBoolean();
			}
			D.bones.push(G);
		}
		G = O.readInt(!0);
		for (let b = 0; b < G; b++) {
			let w = O.readString();
			if (!w) throw Error("Slot name must not be null.");
			let F = D.bones[O.readInt(!0)], U = new SlotData(b, w, F);
			Color.rgba8888ToColor(U.color, O.readInt32());
			let G = O.readInt32();
			G != -1 && Color.rgb888ToColor(U.darkColor = new Color(), G), U.attachmentName = O.readStringRef(), U.blendMode = O.readInt(!0), W && (U.visible = O.readBoolean()), D.slots.push(U);
		}
		G = O.readInt(!0);
		for (let b = 0, F; b < G; b++) {
			let b = O.readString();
			if (!b) throw Error("IK constraint data name must not be null.");
			let U = new IkConstraintData(b);
			U.order = O.readInt(!0), F = O.readInt(!0);
			for (let b = 0; b < F; b++) U.bones.push(D.bones[O.readInt(!0)]);
			U.target = D.bones[O.readInt(!0)];
			let W = O.readByte();
			U.skinRequired = (W & 1) != 0, U.bendDirection = W & 2 ? 1 : -1, U.compress = (W & 4) != 0, U.stretch = (W & 8) != 0, U.uniform = (W & 16) != 0, W & 32 && (U.mix = W & 64 ? O.readFloat() : 1), W & 128 && (U.softness = O.readFloat() * w), D.ikConstraints.push(U);
		}
		G = O.readInt(!0);
		for (let b = 0, F; b < G; b++) {
			let b = O.readString();
			if (!b) throw Error("Transform constraint data name must not be null.");
			let U = new TransformConstraintData(b);
			U.order = O.readInt(!0), F = O.readInt(!0);
			for (let b = 0; b < F; b++) U.bones.push(D.bones[O.readInt(!0)]);
			U.target = D.bones[O.readInt(!0)];
			let W = O.readByte();
			U.skinRequired = (W & 1) != 0, U.local = (W & 2) != 0, U.relative = (W & 4) != 0, W & 8 && (U.offsetRotation = O.readFloat()), W & 16 && (U.offsetX = O.readFloat() * w), W & 32 && (U.offsetY = O.readFloat() * w), W & 64 && (U.offsetScaleX = O.readFloat()), W & 128 && (U.offsetScaleY = O.readFloat()), W = O.readByte(), W & 1 && (U.offsetShearY = O.readFloat()), W & 2 && (U.mixRotate = O.readFloat()), W & 4 && (U.mixX = O.readFloat()), W & 8 && (U.mixY = O.readFloat()), W & 16 && (U.mixScaleX = O.readFloat()), W & 32 && (U.mixScaleY = O.readFloat()), W & 64 && (U.mixShearY = O.readFloat()), D.transformConstraints.push(U);
		}
		G = O.readInt(!0);
		for (let b = 0, F; b < G; b++) {
			let b = O.readString();
			if (!b) throw Error("Path constraint data name must not be null.");
			let U = new PathConstraintData(b);
			U.order = O.readInt(!0), U.skinRequired = O.readBoolean(), F = O.readInt(!0);
			for (let b = 0; b < F; b++) U.bones.push(D.bones[O.readInt(!0)]);
			U.target = D.slots[O.readInt(!0)];
			let W = O.readByte();
			U.positionMode = W & 1, U.spacingMode = W >> 1 & 3, U.rotateMode = W >> 3 & 3, W & 128 && (U.offsetRotation = O.readFloat()), U.position = O.readFloat(), U.positionMode == PositionMode.Fixed && (U.position *= w), U.spacing = O.readFloat(), (U.spacingMode == SpacingMode.Length || U.spacingMode == SpacingMode.Fixed) && (U.spacing *= w), U.mixRotate = O.readFloat(), U.mixX = O.readFloat(), U.mixY = O.readFloat(), D.pathConstraints.push(U);
		}
		G = O.readInt(!0);
		for (let b = 0; b < G; b++) {
			let b = O.readString();
			if (!b) throw Error("Physics constraint data name must not be null.");
			let F = new PhysicsConstraintData(b);
			F.order = O.readInt(!0), F.bone = D.bones[O.readInt(!0)];
			let U = O.readByte();
			F.skinRequired = (U & 1) != 0, U & 2 && (F.x = O.readFloat()), U & 4 && (F.y = O.readFloat()), U & 8 && (F.rotate = O.readFloat()), U & 16 && (F.scaleX = O.readFloat()), U & 32 && (F.shearX = O.readFloat()), F.limit = (U & 64 ? O.readFloat() : 5e3) * w, F.step = 1 / O.readUnsignedByte(), F.inertia = O.readFloat(), F.strength = O.readFloat(), F.damping = O.readFloat(), F.massInverse = U & 128 ? O.readFloat() : 1, F.wind = O.readFloat(), F.gravity = O.readFloat(), U = O.readByte(), U & 1 && (F.inertiaGlobal = !0), U & 2 && (F.strengthGlobal = !0), U & 4 && (F.dampingGlobal = !0), U & 8 && (F.massGlobal = !0), U & 16 && (F.windGlobal = !0), U & 32 && (F.gravityGlobal = !0), U & 64 && (F.mixGlobal = !0), F.mix = U & 128 ? O.readFloat() : 1, D.physicsConstraints.push(F);
		}
		let q = this.readSkin(O, D, !0, W);
		q && (D.defaultSkin = q, D.skins.push(q));
		{
			let b = D.skins.length;
			for (Utils.setArraySize(D.skins, G = b + O.readInt(!0)); b < G; b++) {
				let w = this.readSkin(O, D, !1, W);
				if (!w) throw Error("readSkin() should not have returned null.");
				D.skins[b] = w;
			}
		}
		G = this.linkedMeshes.length;
		for (let b = 0; b < G; b++) {
			let w = this.linkedMeshes[b], O = D.skins[w.skinIndex];
			if (!w.parent) throw Error("Linked mesh parent must not be null");
			let F = O.getAttachment(w.slotIndex, w.parent);
			if (!F) throw Error(`Parent mesh not found: ${w.parent}`);
			w.mesh.timelineAttachment = w.inheritTimeline ? F : w.mesh, w.mesh.setParentMesh(F), w.mesh.region != null && w.mesh.updateRegion();
		}
		this.linkedMeshes.length = 0, G = O.readInt(!0);
		for (let b = 0; b < G; b++) {
			let b = O.readString();
			if (!b) throw Error("Event data name must not be null");
			let w = new EventData(b);
			w.intValue = O.readInt(!1), w.floatValue = O.readFloat(), w.stringValue = O.readString(), w.audioPath = O.readString(), w.audioPath && (w.volume = O.readFloat(), w.balance = O.readFloat()), D.events.push(w);
		}
		G = O.readInt(!0);
		for (let b = 0; b < G; b++) {
			let b = O.readString();
			if (!b) throw Error("Animatio name must not be null.");
			D.animations.push(this.readAnimation(O, b, D));
		}
		return D;
	}
	readSkin(b, w, D, O) {
		let F = null, U = 0;
		if (D) {
			if (U = b.readInt(!0), U == 0) return null;
			F = new Skin("default");
		} else {
			let D = b.readString();
			if (!D) throw Error("Skin name must not be null.");
			F = new Skin(D), O && Color.rgba8888ToColor(F.color, b.readInt32()), F.bones.length = b.readInt(!0);
			for (let D = 0, O = F.bones.length; D < O; D++) F.bones[D] = w.bones[b.readInt(!0)];
			for (let D = 0, O = b.readInt(!0); D < O; D++) F.constraints.push(w.ikConstraints[b.readInt(!0)]);
			for (let D = 0, O = b.readInt(!0); D < O; D++) F.constraints.push(w.transformConstraints[b.readInt(!0)]);
			for (let D = 0, O = b.readInt(!0); D < O; D++) F.constraints.push(w.pathConstraints[b.readInt(!0)]);
			for (let D = 0, O = b.readInt(!0); D < O; D++) F.constraints.push(w.physicsConstraints[b.readInt(!0)]);
			U = b.readInt(!0);
		}
		for (let D = 0; D < U; D++) {
			let D = b.readInt(!0);
			for (let U = 0, W = b.readInt(!0); U < W; U++) {
				let U = b.readStringRef();
				if (!U) throw Error("Attachment name must not be null");
				let W = this.readAttachment(b, w, F, D, U, O);
				W && F.setAttachment(D, U, W);
			}
		}
		return F;
	}
	readAttachment(b, w, D, O, F, U) {
		let W = this.scale, G = b.readByte(), K = G & 8 ? b.readStringRef() : F;
		if (!K) throw Error("Attachment name must not be null");
		switch (G & 7) {
			case AttachmentType.Region: {
				let w = G & 16 ? b.readStringRef() : null, O = G & 32 ? b.readInt32() : 4294967295, F = G & 64 ? this.readSequence(b) : null, U = G & 128 ? b.readFloat() : 0, q = b.readFloat(), J = b.readFloat(), Y = b.readFloat(), X = b.readFloat(), Z = b.readFloat(), Ji = b.readFloat();
				w || (w = K);
				let Yi = this.attachmentLoader.newRegionAttachment(D, K, w, F);
				return Yi ? (Yi.path = w, Yi.x = q * W, Yi.y = J * W, Yi.scaleX = Y, Yi.scaleY = X, Yi.rotation = U, Yi.width = Z * W, Yi.height = Ji * W, Color.rgba8888ToColor(Yi.color, O), Yi.sequence = F, F == null && Yi.updateRegion(), Yi) : null;
			}
			case AttachmentType.BoundingBox: {
				let w = this.readVertices(b, (G & 16) != 0), O = U ? b.readInt32() : 0, F = this.attachmentLoader.newBoundingBoxAttachment(D, K);
				return F ? (F.worldVerticesLength = w.length, F.vertices = w.vertices, F.bones = w.bones, U && Color.rgba8888ToColor(F.color, O), F) : null;
			}
			case AttachmentType.Mesh: {
				let w = G & 16 ? b.readStringRef() : K, O = G & 32 ? b.readInt32() : 4294967295, F = G & 64 ? this.readSequence(b) : null, q = b.readInt(!0), J = this.readVertices(b, (G & 128) != 0), Y = this.readFloatArray(b, J.length, 1), X = this.readShortArray(b, (J.length - q - 2) * 3), Z = [], Ji = 0, Yi = 0;
				U && (Z = this.readShortArray(b, b.readInt(!0)), Ji = b.readFloat(), Yi = b.readFloat()), w || (w = K);
				let Q = this.attachmentLoader.newMeshAttachment(D, K, w, F);
				return Q ? (Q.path = w, Color.rgba8888ToColor(Q.color, O), Q.bones = J.bones, Q.vertices = J.vertices, Q.worldVerticesLength = J.length, Q.triangles = X, Q.regionUVs = Y, F == null && Q.updateRegion(), Q.hullLength = q << 1, Q.sequence = F, U && (Q.edges = Z, Q.width = Ji * W, Q.height = Yi * W), Q) : null;
			}
			case AttachmentType.LinkedMesh: {
				let w = G & 16 ? b.readStringRef() : K;
				if (w == null) throw Error("Path of linked mesh must not be null");
				let F = G & 32 ? b.readInt32() : 4294967295, q = G & 64 ? this.readSequence(b) : null, J = (G & 128) != 0, Y = b.readInt(!0), X = b.readStringRef(), Z = 0, Ji = 0;
				U && (Z = b.readFloat(), Ji = b.readFloat());
				let Yi = this.attachmentLoader.newMeshAttachment(D, K, w, q);
				return Yi ? (Yi.path = w, Color.rgba8888ToColor(Yi.color, F), Yi.sequence = q, U && (Yi.width = Z * W, Yi.height = Ji * W), this.linkedMeshes.push(new LinkedMesh$1(Yi, Y, O, X, J)), Yi) : null;
			}
			case AttachmentType.Path: {
				let w = (G & 16) != 0, O = (G & 32) != 0, F = this.readVertices(b, (G & 64) != 0), q = Utils.newArray(F.length / 6, 0);
				for (let w = 0, D = q.length; w < D; w++) q[w] = b.readFloat() * W;
				let J = U ? b.readInt32() : 0, Y = this.attachmentLoader.newPathAttachment(D, K);
				return Y ? (Y.closed = w, Y.constantSpeed = O, Y.worldVerticesLength = F.length, Y.vertices = F.vertices, Y.bones = F.bones, Y.lengths = q, U && Color.rgba8888ToColor(Y.color, J), Y) : null;
			}
			case AttachmentType.Point: {
				let w = b.readFloat(), O = b.readFloat(), F = b.readFloat(), G = U ? b.readInt32() : 0, q = this.attachmentLoader.newPointAttachment(D, K);
				return q ? (q.x = O * W, q.y = F * W, q.rotation = w, U && Color.rgba8888ToColor(q.color, G), q) : null;
			}
			case AttachmentType.Clipping: {
				let O = b.readInt(!0), F = this.readVertices(b, (G & 16) != 0), W = U ? b.readInt32() : 0, q = this.attachmentLoader.newClippingAttachment(D, K);
				return q ? (q.endSlot = w.slots[O], q.worldVerticesLength = F.length, q.vertices = F.vertices, q.bones = F.bones, U && Color.rgba8888ToColor(q.color, W), q) : null;
			}
		}
		return null;
	}
	readSequence(b) {
		let w = new Sequence(b.readInt(!0));
		return w.start = b.readInt(!0), w.digits = b.readInt(!0), w.setupIndex = b.readInt(!0), w;
	}
	readVertices(b, w) {
		let D = this.scale, O = b.readInt(!0), F = new Vertices();
		if (F.length = O << 1, !w) return F.vertices = this.readFloatArray(b, F.length, D), F;
		let U = [], W = [];
		for (let w = 0; w < O; w++) {
			let w = b.readInt(!0);
			W.push(w);
			for (let O = 0; O < w; O++) W.push(b.readInt(!0)), U.push(b.readFloat() * D), U.push(b.readFloat() * D), U.push(b.readFloat());
		}
		return F.vertices = Utils.toFloatArray(U), F.bones = W, F;
	}
	readFloatArray(b, w, D) {
		let O = Array(w);
		if (D == 1) for (let D = 0; D < w; D++) O[D] = b.readFloat();
		else for (let F = 0; F < w; F++) O[F] = b.readFloat() * D;
		return O;
	}
	readShortArray(b, w) {
		let D = Array(w);
		for (let O = 0; O < w; O++) D[O] = b.readInt(!0);
		return D;
	}
	readAnimation(b, w, D) {
		b.readInt(!0);
		let O = [], F = this.scale;
		for (let w = 0, D = b.readInt(!0); w < D; w++) {
			let w = b.readInt(!0);
			for (let D = 0, F = b.readInt(!0); D < F; D++) {
				let D = b.readByte(), F = b.readInt(!0), U = F - 1;
				switch (D) {
					case SLOT_ATTACHMENT: {
						let D = new AttachmentTimeline(F, w);
						for (let w = 0; w < F; w++) D.setFrame(w, b.readFloat(), b.readStringRef());
						O.push(D);
						break;
					}
					case SLOT_RGBA: {
						let D = new RGBATimeline(F, b.readInt(!0), w), W = b.readFloat(), G = b.readUnsignedByte() / 255, K = b.readUnsignedByte() / 255, q = b.readUnsignedByte() / 255, J = b.readUnsignedByte() / 255;
						for (let w = 0, O = 0; D.setFrame(w, W, G, K, q, J), w != U; w++) {
							let F = b.readFloat(), U = b.readUnsignedByte() / 255, Y = b.readUnsignedByte() / 255, X = b.readUnsignedByte() / 255, Z = b.readUnsignedByte() / 255;
							switch (b.readByte()) {
								case CURVE_STEPPED:
									D.setStepped(w);
									break;
								case CURVE_BEZIER: setBezier(b, D, O++, w, 0, W, F, G, U, 1), setBezier(b, D, O++, w, 1, W, F, K, Y, 1), setBezier(b, D, O++, w, 2, W, F, q, X, 1), setBezier(b, D, O++, w, 3, W, F, J, Z, 1);
							}
							W = F, G = U, K = Y, q = X, J = Z;
						}
						O.push(D);
						break;
					}
					case SLOT_RGB: {
						let D = new RGBTimeline(F, b.readInt(!0), w), W = b.readFloat(), G = b.readUnsignedByte() / 255, K = b.readUnsignedByte() / 255, q = b.readUnsignedByte() / 255;
						for (let w = 0, O = 0; D.setFrame(w, W, G, K, q), w != U; w++) {
							let F = b.readFloat(), U = b.readUnsignedByte() / 255, J = b.readUnsignedByte() / 255, Y = b.readUnsignedByte() / 255;
							switch (b.readByte()) {
								case CURVE_STEPPED:
									D.setStepped(w);
									break;
								case CURVE_BEZIER: setBezier(b, D, O++, w, 0, W, F, G, U, 1), setBezier(b, D, O++, w, 1, W, F, K, J, 1), setBezier(b, D, O++, w, 2, W, F, q, Y, 1);
							}
							W = F, G = U, K = J, q = Y;
						}
						O.push(D);
						break;
					}
					case SLOT_RGBA2: {
						let D = new RGBA2Timeline(F, b.readInt(!0), w), W = b.readFloat(), G = b.readUnsignedByte() / 255, K = b.readUnsignedByte() / 255, q = b.readUnsignedByte() / 255, J = b.readUnsignedByte() / 255, Y = b.readUnsignedByte() / 255, X = b.readUnsignedByte() / 255, Z = b.readUnsignedByte() / 255;
						for (let w = 0, O = 0; D.setFrame(w, W, G, K, q, J, Y, X, Z), w != U; w++) {
							let F = b.readFloat(), U = b.readUnsignedByte() / 255, Ji = b.readUnsignedByte() / 255, Yi = b.readUnsignedByte() / 255, Q = b.readUnsignedByte() / 255, Xi = b.readUnsignedByte() / 255, Zi = b.readUnsignedByte() / 255, Qi = b.readUnsignedByte() / 255;
							switch (b.readByte()) {
								case CURVE_STEPPED:
									D.setStepped(w);
									break;
								case CURVE_BEZIER: setBezier(b, D, O++, w, 0, W, F, G, U, 1), setBezier(b, D, O++, w, 1, W, F, K, Ji, 1), setBezier(b, D, O++, w, 2, W, F, q, Yi, 1), setBezier(b, D, O++, w, 3, W, F, J, Q, 1), setBezier(b, D, O++, w, 4, W, F, Y, Xi, 1), setBezier(b, D, O++, w, 5, W, F, X, Zi, 1), setBezier(b, D, O++, w, 6, W, F, Z, Qi, 1);
							}
							W = F, G = U, K = Ji, q = Yi, J = Q, Y = Xi, X = Zi, Z = Qi;
						}
						O.push(D);
						break;
					}
					case SLOT_RGB2: {
						let D = new RGB2Timeline(F, b.readInt(!0), w), W = b.readFloat(), G = b.readUnsignedByte() / 255, K = b.readUnsignedByte() / 255, q = b.readUnsignedByte() / 255, J = b.readUnsignedByte() / 255, Y = b.readUnsignedByte() / 255, X = b.readUnsignedByte() / 255;
						for (let w = 0, O = 0; D.setFrame(w, W, G, K, q, J, Y, X), w != U; w++) {
							let F = b.readFloat(), U = b.readUnsignedByte() / 255, Z = b.readUnsignedByte() / 255, Ji = b.readUnsignedByte() / 255, Yi = b.readUnsignedByte() / 255, Q = b.readUnsignedByte() / 255, Xi = b.readUnsignedByte() / 255;
							switch (b.readByte()) {
								case CURVE_STEPPED:
									D.setStepped(w);
									break;
								case CURVE_BEZIER: setBezier(b, D, O++, w, 0, W, F, G, U, 1), setBezier(b, D, O++, w, 1, W, F, K, Z, 1), setBezier(b, D, O++, w, 2, W, F, q, Ji, 1), setBezier(b, D, O++, w, 3, W, F, J, Yi, 1), setBezier(b, D, O++, w, 4, W, F, Y, Q, 1), setBezier(b, D, O++, w, 5, W, F, X, Xi, 1);
							}
							W = F, G = U, K = Z, q = Ji, J = Yi, Y = Q, X = Xi;
						}
						O.push(D);
						break;
					}
					case SLOT_ALPHA: {
						let D = new AlphaTimeline(F, b.readInt(!0), w), W = b.readFloat(), G = b.readUnsignedByte() / 255;
						for (let w = 0, O = 0; D.setFrame(w, W, G), w != U; w++) {
							let F = b.readFloat(), U = b.readUnsignedByte() / 255;
							switch (b.readByte()) {
								case CURVE_STEPPED:
									D.setStepped(w);
									break;
								case CURVE_BEZIER: setBezier(b, D, O++, w, 0, W, F, G, U, 1);
							}
							W = F, G = U;
						}
						O.push(D);
					}
				}
			}
		}
		for (let w = 0, D = b.readInt(!0); w < D; w++) {
			let w = b.readInt(!0);
			for (let D = 0, U = b.readInt(!0); D < U; D++) {
				let D = b.readByte(), U = b.readInt(!0);
				if (D == BONE_INHERIT) {
					let D = new InheritTimeline(U, w);
					for (let w = 0; w < U; w++) D.setFrame(w, b.readFloat(), b.readByte());
					O.push(D);
					continue;
				}
				let W = b.readInt(!0);
				switch (D) {
					case BONE_ROTATE:
						O.push(readTimeline1$1(b, new RotateTimeline(U, W, w), 1));
						break;
					case BONE_TRANSLATE:
						O.push(readTimeline2$1(b, new TranslateTimeline(U, W, w), F));
						break;
					case BONE_TRANSLATEX:
						O.push(readTimeline1$1(b, new TranslateXTimeline(U, W, w), F));
						break;
					case BONE_TRANSLATEY:
						O.push(readTimeline1$1(b, new TranslateYTimeline(U, W, w), F));
						break;
					case BONE_SCALE:
						O.push(readTimeline2$1(b, new ScaleTimeline(U, W, w), 1));
						break;
					case BONE_SCALEX:
						O.push(readTimeline1$1(b, new ScaleXTimeline(U, W, w), 1));
						break;
					case BONE_SCALEY:
						O.push(readTimeline1$1(b, new ScaleYTimeline(U, W, w), 1));
						break;
					case BONE_SHEAR:
						O.push(readTimeline2$1(b, new ShearTimeline(U, W, w), 1));
						break;
					case BONE_SHEARX:
						O.push(readTimeline1$1(b, new ShearXTimeline(U, W, w), 1));
						break;
					case BONE_SHEARY: O.push(readTimeline1$1(b, new ShearYTimeline(U, W, w), 1));
				}
			}
		}
		for (let w = 0, D = b.readInt(!0); w < D; w++) {
			let w = b.readInt(!0), D = b.readInt(!0), U = D - 1, W = new IkConstraintTimeline(D, b.readInt(!0), w), G = b.readByte(), K = b.readFloat(), q = G & 1 ? G & 2 ? b.readFloat() : 1 : 0, J = G & 4 ? b.readFloat() * F : 0;
			for (let w = 0, D = 0; W.setFrame(w, K, q, J, G & 8 ? 1 : -1, (G & 16) != 0, (G & 32) != 0), w != U; w++) {
				G = b.readByte();
				let O = b.readFloat(), U = G & 1 ? G & 2 ? b.readFloat() : 1 : 0, Y = G & 4 ? b.readFloat() * F : 0;
				G & 64 ? W.setStepped(w) : G & 128 && (setBezier(b, W, D++, w, 0, K, O, q, U, 1), setBezier(b, W, D++, w, 1, K, O, J, Y, F)), K = O, q = U, J = Y;
			}
			O.push(W);
		}
		for (let w = 0, D = b.readInt(!0); w < D; w++) {
			let w = b.readInt(!0), D = b.readInt(!0), F = D - 1, U = new TransformConstraintTimeline(D, b.readInt(!0), w), W = b.readFloat(), G = b.readFloat(), K = b.readFloat(), q = b.readFloat(), J = b.readFloat(), Y = b.readFloat(), X = b.readFloat();
			for (let w = 0, D = 0; U.setFrame(w, W, G, K, q, J, Y, X), w != F; w++) {
				let O = b.readFloat(), F = b.readFloat(), Z = b.readFloat(), Ji = b.readFloat(), Yi = b.readFloat(), Q = b.readFloat(), Xi = b.readFloat();
				switch (b.readByte()) {
					case CURVE_STEPPED:
						U.setStepped(w);
						break;
					case CURVE_BEZIER: setBezier(b, U, D++, w, 0, W, O, G, F, 1), setBezier(b, U, D++, w, 1, W, O, K, Z, 1), setBezier(b, U, D++, w, 2, W, O, q, Ji, 1), setBezier(b, U, D++, w, 3, W, O, J, Yi, 1), setBezier(b, U, D++, w, 4, W, O, Y, Q, 1), setBezier(b, U, D++, w, 5, W, O, X, Xi, 1);
				}
				W = O, G = F, K = Z, q = Ji, J = Yi, Y = Q, X = Xi;
			}
			O.push(U);
		}
		for (let w = 0, U = b.readInt(!0); w < U; w++) {
			let w = b.readInt(!0), U = D.pathConstraints[w];
			for (let D = 0, W = b.readInt(!0); D < W; D++) {
				let D = b.readByte(), W = b.readInt(!0), G = b.readInt(!0);
				switch (D) {
					case PATH_POSITION:
						O.push(readTimeline1$1(b, new PathConstraintPositionTimeline(W, G, w), U.positionMode == PositionMode.Fixed ? F : 1));
						break;
					case PATH_SPACING:
						O.push(readTimeline1$1(b, new PathConstraintSpacingTimeline(W, G, w), U.spacingMode == SpacingMode.Length || U.spacingMode == SpacingMode.Fixed ? F : 1));
						break;
					case PATH_MIX:
						let D = new PathConstraintMixTimeline(W, G, w), K = b.readFloat(), q = b.readFloat(), J = b.readFloat(), Y = b.readFloat();
						for (let w = 0, O = 0, F = D.getFrameCount() - 1; D.setFrame(w, K, q, J, Y), w != F; w++) {
							let F = b.readFloat(), U = b.readFloat(), W = b.readFloat(), G = b.readFloat();
							switch (b.readByte()) {
								case CURVE_STEPPED:
									D.setStepped(w);
									break;
								case CURVE_BEZIER: setBezier(b, D, O++, w, 0, K, F, q, U, 1), setBezier(b, D, O++, w, 1, K, F, J, W, 1), setBezier(b, D, O++, w, 2, K, F, Y, G, 1);
							}
							K = F, q = U, J = W, Y = G;
						}
						O.push(D);
				}
			}
		}
		for (let w = 0, D = b.readInt(!0); w < D; w++) {
			let w = b.readInt(!0) - 1;
			for (let D = 0, F = b.readInt(!0); D < F; D++) {
				let D = b.readByte(), F = b.readInt(!0);
				if (D == PHYSICS_RESET) {
					let D = new PhysicsConstraintResetTimeline(F, w);
					for (let w = 0; w < F; w++) D.setFrame(w, b.readFloat());
					O.push(D);
					continue;
				}
				let U = b.readInt(!0);
				switch (D) {
					case PHYSICS_INERTIA:
						O.push(readTimeline1$1(b, new PhysicsConstraintInertiaTimeline(F, U, w), 1));
						break;
					case PHYSICS_STRENGTH:
						O.push(readTimeline1$1(b, new PhysicsConstraintStrengthTimeline(F, U, w), 1));
						break;
					case PHYSICS_DAMPING:
						O.push(readTimeline1$1(b, new PhysicsConstraintDampingTimeline(F, U, w), 1));
						break;
					case PHYSICS_MASS:
						O.push(readTimeline1$1(b, new PhysicsConstraintMassTimeline(F, U, w), 1));
						break;
					case PHYSICS_WIND:
						O.push(readTimeline1$1(b, new PhysicsConstraintWindTimeline(F, U, w), 1));
						break;
					case PHYSICS_GRAVITY:
						O.push(readTimeline1$1(b, new PhysicsConstraintGravityTimeline(F, U, w), 1));
						break;
					case PHYSICS_MIX: O.push(readTimeline1$1(b, new PhysicsConstraintMixTimeline(F, U, w), 1));
				}
			}
		}
		for (let w = 0, U = b.readInt(!0); w < U; w++) {
			let w = D.skins[b.readInt(!0)];
			for (let D = 0, U = b.readInt(!0); D < U; D++) {
				let D = b.readInt(!0);
				for (let U = 0, W = b.readInt(!0); U < W; U++) {
					let U = b.readStringRef();
					if (!U) throw Error("attachmentName must not be null.");
					let W = w.getAttachment(D, U), G = b.readByte(), K = b.readInt(!0), q = K - 1;
					switch (G) {
						case ATTACHMENT_DEFORM: {
							let w = W, U = w.bones, G = w.vertices, J = U ? G.length / 3 * 2 : G.length, Y = new DeformTimeline(K, b.readInt(!0), D, w), X = b.readFloat();
							for (let w = 0, D = 0;; w++) {
								let O, W = b.readInt(!0);
								if (W == 0) O = U ? Utils.newFloatArray(J) : G;
								else {
									O = Utils.newFloatArray(J);
									let w = b.readInt(!0);
									if (W += w, F == 1) for (let D = w; D < W; D++) O[D] = b.readFloat();
									else for (let D = w; D < W; D++) O[D] = b.readFloat() * F;
									if (!U) for (let b = 0, w = O.length; b < w; b++) O[b] += G[b];
								}
								if (Y.setFrame(w, X, O), w == q) break;
								let K = b.readFloat();
								switch (b.readByte()) {
									case CURVE_STEPPED:
										Y.setStepped(w);
										break;
									case CURVE_BEZIER: setBezier(b, Y, D++, w, 0, X, K, 0, 1, 1);
								}
								X = K;
							}
							O.push(Y);
							break;
						}
						case ATTACHMENT_SEQUENCE: {
							let w = new SequenceTimeline(K, D, W);
							for (let D = 0; D < K; D++) {
								let O = b.readFloat(), F = b.readInt32();
								w.setFrame(D, O, SequenceModeValues[F & 15], F >> 4, b.readFloat());
							}
							O.push(w);
							break;
						}
					}
				}
			}
		}
		let U = b.readInt(!0);
		if (U > 0) {
			let w = new DrawOrderTimeline(U), F = D.slots.length;
			for (let D = 0; D < U; D++) {
				let O = b.readFloat(), U = b.readInt(!0), W = Utils.newArray(F, 0);
				for (let b = F - 1; b >= 0; b--) W[b] = -1;
				let G = Utils.newArray(F - U, 0), K = 0, q = 0;
				for (let w = 0; w < U; w++) {
					let w = b.readInt(!0);
					for (; K != w;) G[q++] = K++;
					W[K + b.readInt(!0)] = K++;
				}
				for (; K < F;) G[q++] = K++;
				for (let b = F - 1; b >= 0; b--) W[b] == -1 && (W[b] = G[--q]);
				w.setFrame(D, O, W);
			}
			O.push(w);
		}
		let W = b.readInt(!0);
		if (W > 0) {
			let w = new EventTimeline(W);
			for (let O = 0; O < W; O++) {
				let F = b.readFloat(), U = D.events[b.readInt(!0)], W = new Event(F, U);
				W.intValue = b.readInt(!1), W.floatValue = b.readFloat(), W.stringValue = b.readString(), W.stringValue == null && (W.stringValue = U.stringValue), W.data.audioPath && (W.volume = b.readFloat(), W.balance = b.readFloat()), w.setFrame(O, W);
			}
			O.push(w);
		}
		let G = 0;
		for (let b = 0, w = O.length; b < w; b++) G = Math.max(G, O[b].getDuration());
		return new Animation(w, O, G);
	}
}, BinaryInput = class {
	constructor(b, w = [], D = 0, O = new DataView(b instanceof ArrayBuffer ? b : b.buffer)) {
		_defineProperty(this, "strings", void 0), _defineProperty(this, "index", void 0), _defineProperty(this, "buffer", void 0), this.strings = w, this.index = D, this.buffer = O;
	}
	readByte() {
		return this.buffer.getInt8(this.index++);
	}
	readUnsignedByte() {
		return this.buffer.getUint8(this.index++);
	}
	readShort() {
		let b = this.buffer.getInt16(this.index);
		return this.index += 2, b;
	}
	readInt32() {
		let b = this.buffer.getInt32(this.index);
		return this.index += 4, b;
	}
	readInt(b) {
		let w = this.readByte(), D = w & 127;
		return w & 128 && (w = this.readByte(), D |= (w & 127) << 7, w & 128 && (w = this.readByte(), D |= (w & 127) << 14, w & 128 && (w = this.readByte(), D |= (w & 127) << 21, w & 128 && (w = this.readByte(), D |= (w & 127) << 28)))), b ? D : D >>> 1 ^ -(D & 1);
	}
	readStringRef() {
		let b = this.readInt(!0);
		return b == 0 ? null : this.strings[b - 1];
	}
	readString() {
		let b = this.readInt(!0);
		switch (b) {
			case 0: return null;
			case 1: return "";
		}
		b--;
		let w = "";
		for (let D = 0; D < b;) {
			let b = this.readUnsignedByte();
			switch (b >> 4) {
				case 12:
				case 13:
					w += String.fromCharCode((b & 31) << 6 | this.readByte() & 63), D += 2;
					break;
				case 14:
					w += String.fromCharCode((b & 15) << 12 | (this.readByte() & 63) << 6 | this.readByte() & 63), D += 3;
					break;
				default: w += String.fromCharCode(b), D++;
			}
		}
		return w;
	}
	readFloat() {
		let b = this.buffer.getFloat32(this.index);
		return this.index += 4, b;
	}
	readBoolean() {
		return this.readByte() != 0;
	}
}, LinkedMesh$1 = class {
	constructor(b, w, D, O, F) {
		_defineProperty(this, "parent", void 0), _defineProperty(this, "skinIndex", void 0), _defineProperty(this, "slotIndex", void 0), _defineProperty(this, "mesh", void 0), _defineProperty(this, "inheritTimeline", void 0), this.mesh = b, this.skinIndex = w, this.slotIndex = D, this.parent = O, this.inheritTimeline = F;
	}
}, Vertices = class {
	constructor(b = null, w = null, D = 0) {
		_defineProperty(this, "bones", void 0), _defineProperty(this, "vertices", void 0), _defineProperty(this, "length", void 0), this.bones = b, this.vertices = w, this.length = D;
	}
}, AttachmentType;
(function(b) {
	b[b.Region = 0] = "Region", b[b.BoundingBox = 1] = "BoundingBox", b[b.Mesh = 2] = "Mesh", b[b.LinkedMesh = 3] = "LinkedMesh", b[b.Path = 4] = "Path", b[b.Point = 5] = "Point", b[b.Clipping = 6] = "Clipping";
})(AttachmentType || (AttachmentType = {}));
function readTimeline1$1(b, w, D) {
	let O = b.readFloat(), F = b.readFloat() * D;
	for (let U = 0, W = 0, G = w.getFrameCount() - 1; w.setFrame(U, O, F), U != G; U++) {
		let G = b.readFloat(), K = b.readFloat() * D;
		switch (b.readByte()) {
			case CURVE_STEPPED:
				w.setStepped(U);
				break;
			case CURVE_BEZIER: setBezier(b, w, W++, U, 0, O, G, F, K, D);
		}
		O = G, F = K;
	}
	return w;
}
function readTimeline2$1(b, w, D) {
	let O = b.readFloat(), F = b.readFloat() * D, U = b.readFloat() * D;
	for (let W = 0, G = 0, K = w.getFrameCount() - 1; w.setFrame(W, O, F, U), W != K; W++) {
		let K = b.readFloat(), q = b.readFloat() * D, J = b.readFloat() * D;
		switch (b.readByte()) {
			case CURVE_STEPPED:
				w.setStepped(W);
				break;
			case CURVE_BEZIER: setBezier(b, w, G++, W, 0, O, K, F, q, D), setBezier(b, w, G++, W, 1, O, K, U, J, D);
		}
		O = K, F = q, U = J;
	}
	return w;
}
function setBezier(b, w, D, O, F, U, W, G, K, q) {
	w.setBezier(D, O, F, U, G, b.readFloat(), b.readFloat() * q, b.readFloat(), b.readFloat() * q, W, K);
}
var BONE_ROTATE = 0, BONE_TRANSLATE = 1, BONE_TRANSLATEX = 2, BONE_TRANSLATEY = 3, BONE_SCALE = 4, BONE_SCALEX = 5, BONE_SCALEY = 6, BONE_SHEAR = 7, BONE_SHEARX = 8, BONE_SHEARY = 9, BONE_INHERIT = 10, SLOT_ATTACHMENT = 0, SLOT_RGBA = 1, SLOT_RGB = 2, SLOT_RGBA2 = 3, SLOT_RGB2 = 4, SLOT_ALPHA = 5, ATTACHMENT_DEFORM = 0, ATTACHMENT_SEQUENCE = 1, PATH_POSITION = 0, PATH_SPACING = 1, PATH_MIX = 2, PHYSICS_INERTIA = 0, PHYSICS_STRENGTH = 1, PHYSICS_DAMPING = 2, PHYSICS_MASS = 4, PHYSICS_WIND = 5, PHYSICS_GRAVITY = 6, PHYSICS_MIX = 7, PHYSICS_RESET = 8, CURVE_STEPPED = 1, CURVE_BEZIER = 2, SkeletonBounds = class {
	constructor() {
		_defineProperty(this, "minX", 0), _defineProperty(this, "minY", 0), _defineProperty(this, "maxX", 0), _defineProperty(this, "maxY", 0), _defineProperty(this, "boundingBoxes", []), _defineProperty(this, "polygons", []), _defineProperty(this, "polygonPool", new Pool(() => Utils.newFloatArray(16)));
	}
	update(b, w) {
		if (!b) throw Error("skeleton cannot be null.");
		let D = this.boundingBoxes, O = this.polygons, F = this.polygonPool, U = b.slots, W = U.length;
		D.length = 0, F.freeAll(O), O.length = 0;
		for (let b = 0; b < W; b++) {
			let w = U[b];
			if (!w.bone.active) continue;
			let W = w.getAttachment();
			if (W instanceof BoundingBoxAttachment) {
				let b = W;
				D.push(b);
				let U = F.obtain();
				U.length != b.worldVerticesLength && (U = Utils.newFloatArray(b.worldVerticesLength)), O.push(U), b.computeWorldVertices(w, 0, b.worldVerticesLength, U, 0, 2);
			}
		}
		w ? this.aabbCompute() : (this.minX = Infinity, this.minY = Infinity, this.maxX = -Infinity, this.maxY = -Infinity);
	}
	aabbCompute() {
		let b = Infinity, w = Infinity, D = -Infinity, O = -Infinity, F = this.polygons;
		for (let U = 0, W = F.length; U < W; U++) {
			let W = F[U], G = W;
			for (let F = 0, U = W.length; F < U; F += 2) {
				let U = G[F], W = G[F + 1];
				b = Math.min(b, U), w = Math.min(w, W), D = Math.max(D, U), O = Math.max(O, W);
			}
		}
		this.minX = b, this.minY = w, this.maxX = D, this.maxY = O;
	}
	aabbContainsPoint(b, w) {
		return b >= this.minX && b <= this.maxX && w >= this.minY && w <= this.maxY;
	}
	aabbIntersectsSegment(b, w, D, O) {
		let F = this.minX, U = this.minY, W = this.maxX, G = this.maxY;
		if (b <= F && D <= F || w <= U && O <= U || b >= W && D >= W || w >= G && O >= G) return !1;
		let K = (O - w) / (D - b), q = K * (F - b) + w;
		if (q > U && q < G || (q = K * (W - b) + w, q > U && q < G)) return !0;
		let J = (U - w) / K + b;
		return J > F && J < W || (J = (G - w) / K + b, J > F && J < W);
	}
	aabbIntersectsSkeleton(b) {
		return this.minX < b.maxX && this.maxX > b.minX && this.minY < b.maxY && this.maxY > b.minY;
	}
	containsPoint(b, w) {
		let D = this.polygons;
		for (let O = 0, F = D.length; O < F; O++) if (this.containsPointPolygon(D[O], b, w)) return this.boundingBoxes[O];
		return null;
	}
	containsPointPolygon(b, w, D) {
		let O = b, F = b.length, U = F - 2, W = !1;
		for (let b = 0; b < F; b += 2) {
			let F = O[b + 1], G = O[U + 1];
			if (F < D && G >= D || G < D && F >= D) {
				let K = O[b];
				K + (D - F) / (G - F) * (O[U] - K) < w && (W = !W);
			}
			U = b;
		}
		return W;
	}
	intersectsSegment(b, w, D, O) {
		let F = this.polygons;
		for (let U = 0, W = F.length; U < W; U++) if (this.intersectsSegmentPolygon(F[U], b, w, D, O)) return this.boundingBoxes[U];
		return null;
	}
	intersectsSegmentPolygon(b, w, D, O, F) {
		let U = b, W = b.length, G = w - O, K = D - F, q = w * F - D * O, J = U[W - 2], Y = U[W - 1];
		for (let b = 0; b < W; b += 2) {
			let W = U[b], X = U[b + 1], Z = J * X - Y * W, Ji = J - W, Yi = Y - X, Q = G * Yi - K * Ji, Xi = (q * Ji - G * Z) / Q;
			if ((Xi >= J && Xi <= W || Xi >= W && Xi <= J) && (Xi >= w && Xi <= O || Xi >= O && Xi <= w)) {
				let b = (q * Yi - K * Z) / Q;
				if ((b >= Y && b <= X || b >= X && b <= Y) && (b >= D && b <= F || b >= F && b <= D)) return !0;
			}
			J = W, Y = X;
		}
		return !1;
	}
	getPolygon(b) {
		if (!b) throw Error("boundingBox cannot be null.");
		let w = this.boundingBoxes.indexOf(b);
		return w == -1 ? null : this.polygons[w];
	}
	getWidth() {
		return this.maxX - this.minX;
	}
	getHeight() {
		return this.maxY - this.minY;
	}
}, Triangulator = class b {
	constructor() {
		_defineProperty(this, "convexPolygons", []), _defineProperty(this, "convexPolygonsIndices", []), _defineProperty(this, "indicesArray", []), _defineProperty(this, "isConcaveArray", []), _defineProperty(this, "triangles", []), _defineProperty(this, "polygonPool", new Pool(() => [])), _defineProperty(this, "polygonIndicesPool", new Pool(() => []));
	}
	triangulate(w) {
		let D = w, O = w.length >> 1, F = this.indicesArray;
		F.length = 0;
		for (let b = 0; b < O; b++) F[b] = b;
		let U = this.isConcaveArray;
		U.length = 0;
		for (let w = 0, W = O; w < W; ++w) U[w] = b.isConcave(w, O, D, F);
		let W = this.triangles;
		for (W.length = 0; O > 3;) {
			let w = O - 1, G = 0, K = 1;
			for (;;) {
				outer: if (!U[G]) {
					let W = F[w] << 1, q = F[G] << 1, J = F[K] << 1, Y = D[W], X = D[W + 1], Z = D[q], Ji = D[q + 1], Yi = D[J], Q = D[J + 1];
					for (let W = (K + 1) % O; W != w; W = (W + 1) % O) {
						if (!U[W]) continue;
						let w = F[W] << 1, O = D[w], G = D[w + 1];
						if (b.positiveArea(Yi, Q, Y, X, O, G) && b.positiveArea(Y, X, Z, Ji, O, G) && b.positiveArea(Z, Ji, Yi, Q, O, G)) break outer;
					}
					break;
				}
				if (K == 0) {
					do {
						if (!U[G]) break;
						G--;
					} while (G > 0);
					break;
				}
				w = G, G = K, K = (K + 1) % O;
			}
			W.push(F[(O + G - 1) % O]), W.push(F[G]), W.push(F[(G + 1) % O]), F.splice(G, 1), U.splice(G, 1), O--;
			let q = (O + G - 1) % O, J = G == O ? 0 : G;
			U[q] = b.isConcave(q, O, D, F), U[J] = b.isConcave(J, O, D, F);
		}
		return O == 3 && (W.push(F[2]), W.push(F[0]), W.push(F[1])), W;
	}
	decompose(w, D) {
		let O = w, F = this.convexPolygons;
		this.polygonPool.freeAll(F), F.length = 0;
		let U = this.convexPolygonsIndices;
		this.polygonIndicesPool.freeAll(U), U.length = 0;
		let W = this.polygonIndicesPool.obtain();
		W.length = 0;
		let G = this.polygonPool.obtain();
		G.length = 0;
		let K = -1, q = 0;
		for (let w = 0, J = D.length; w < J; w += 3) {
			let J = D[w] << 1, Y = D[w + 1] << 1, X = D[w + 2] << 1, Z = O[J], Ji = O[J + 1], Yi = O[Y], Q = O[Y + 1], Xi = O[X], Zi = O[X + 1], Qi = !1;
			if (K == J) {
				let w = G.length - 4, D = b.winding(G[w], G[w + 1], G[w + 2], G[w + 3], Xi, Zi), O = b.winding(Xi, Zi, G[0], G[1], G[2], G[3]);
				D == q && O == q && (G.push(Xi), G.push(Zi), W.push(X), Qi = !0);
			}
			Qi || (G.length > 0 ? (F.push(G), U.push(W)) : (this.polygonPool.free(G), this.polygonIndicesPool.free(W)), G = this.polygonPool.obtain(), G.length = 0, G.push(Z), G.push(Ji), G.push(Yi), G.push(Q), G.push(Xi), G.push(Zi), W = this.polygonIndicesPool.obtain(), W.length = 0, W.push(J), W.push(Y), W.push(X), q = b.winding(Z, Ji, Yi, Q, Xi, Zi), K = J);
		}
		G.length > 0 && (F.push(G), U.push(W));
		for (let w = 0, D = F.length; w < D; w++) {
			if (W = U[w], W.length == 0) continue;
			let O = W[0], K = W[W.length - 1];
			G = F[w];
			let q = G.length - 4, J = G[q], Y = G[q + 1], X = G[q + 2], Z = G[q + 3], Ji = G[0], Yi = G[1], Q = G[2], Xi = G[3], Zi = b.winding(J, Y, X, Z, Ji, Yi);
			for (let q = 0; q < D; q++) {
				if (q == w) continue;
				let D = U[q];
				if (D.length != 3) continue;
				let Qi = D[0], $i = D[1], ea = D[2], ta = F[q], na = ta[ta.length - 2], ra = ta[ta.length - 1];
				if (Qi != O || $i != K) continue;
				let ia = b.winding(J, Y, X, Z, na, ra), aa = b.winding(na, ra, Ji, Yi, Q, Xi);
				ia == Zi && aa == Zi && (ta.length = 0, D.length = 0, G.push(na), G.push(ra), W.push(ea), J = X, Y = Z, X = na, Z = ra, q = 0);
			}
		}
		for (let b = F.length - 1; b >= 0; b--) G = F[b], G.length == 0 && (F.splice(b, 1), this.polygonPool.free(G), W = U[b], U.splice(b, 1), this.polygonIndicesPool.free(W));
		return F;
	}
	static isConcave(b, w, D, O) {
		let F = O[(w + b - 1) % w] << 1, U = O[b] << 1, W = O[(b + 1) % w] << 1;
		return !this.positiveArea(D[F], D[F + 1], D[U], D[U + 1], D[W], D[W + 1]);
	}
	static positiveArea(b, w, D, O, F, U) {
		return b * (U - O) + D * (w - U) + F * (O - w) >= 0;
	}
	static winding(b, w, D, O, F, U) {
		let W = D - b, G = O - w;
		return F * G - U * W + W * w - b * G >= 0 ? 1 : -1;
	}
}, SkeletonClipping = class b {
	constructor() {
		_defineProperty(this, "triangulator", new Triangulator()), _defineProperty(this, "clippingPolygon", []), _defineProperty(this, "clipOutput", []), _defineProperty(this, "clippedVertices", []), _defineProperty(this, "clippedUVs", []), _defineProperty(this, "clippedTriangles", []), _defineProperty(this, "scratch", []), _defineProperty(this, "clipAttachment", null), _defineProperty(this, "clippingPolygons", null);
	}
	clipStart(w, D) {
		if (this.clipAttachment) return 0;
		this.clipAttachment = D;
		let O = D.worldVerticesLength, F = Utils.setArraySize(this.clippingPolygon, O);
		D.computeWorldVertices(w, 0, O, F, 0, 2);
		let U = this.clippingPolygon;
		b.makeClockwise(U);
		let W = this.clippingPolygons = this.triangulator.decompose(U, this.triangulator.triangulate(U));
		for (let w = 0, D = W.length; w < D; w++) {
			let D = W[w];
			b.makeClockwise(D), D.push(D[0]), D.push(D[1]);
		}
		return W.length;
	}
	clipEndWithSlot(b) {
		this.clipAttachment && this.clipAttachment.endSlot == b.data && this.clipEnd();
	}
	clipEnd() {
		this.clipAttachment && (this.clipAttachment = null, this.clippingPolygons = null, this.clippedVertices.length = 0, this.clippedTriangles.length = 0, this.clippingPolygon.length = 0);
	}
	isClipping() {
		return this.clipAttachment != null;
	}
	clipTriangles(b, w, D, O, F, U, W, G) {
		let K, q, J, Y, X, Z;
		typeof w == "number" ? (K = D, q = O, J = F, Y = U, X = W, Z = G) : (K = w, q = D, J = O, Y = F, X = U, Z = W), J && Y && X && typeof Z == "boolean" ? this.clipTrianglesRender(b, K, q, J, Y, X, Z) : this.clipTrianglesNoRender(b, K, q);
	}
	clipTrianglesNoRender(b, w, D) {
		let O = this.clipOutput, F = this.clippedVertices, U = this.clippedTriangles, W = this.clippingPolygons, G = W.length, K = 0;
		F.length = 0, U.length = 0;
		for (let q = 0; q < D; q += 3) {
			let D = w[q] << 1, J = b[D], Y = b[D + 1];
			D = w[q + 1] << 1;
			let X = b[D], Z = b[D + 1];
			D = w[q + 2] << 1;
			let Ji = b[D], Yi = b[D + 1];
			for (let b = 0; b < G; b++) {
				let w = F.length;
				if (this.clip(J, Y, X, Z, Ji, Yi, W[b], O)) {
					let b = O.length;
					if (b == 0) continue;
					let D = b >> 1, W = this.clipOutput, G = Utils.setArraySize(F, w + D * 2);
					for (let D = 0; D < b; D += 2, w += 2) {
						let b = W[D], O = W[D + 1];
						G[w] = b, G[w + 1] = O;
					}
					w = U.length;
					let q = Utils.setArraySize(U, w + 3 * (D - 2));
					D--;
					for (let b = 1; b < D; b++, w += 3) q[w] = K, q[w + 1] = K + b, q[w + 2] = K + b + 1;
					K += D + 1;
				} else {
					let b = Utils.setArraySize(F, w + 6);
					b[w] = J, b[w + 1] = Y, b[w + 2] = X, b[w + 3] = Z, b[w + 4] = Ji, b[w + 5] = Yi, w = U.length;
					let D = Utils.setArraySize(U, w + 3);
					D[w] = K, D[w + 1] = K + 1, D[w + 2] = K + 2, K += 3;
					break;
				}
			}
		}
	}
	clipTrianglesRender(b, w, D, O, F, U, W) {
		let G = this.clipOutput, K = this.clippedVertices, q = this.clippedTriangles, J = this.clippingPolygons, Y = J.length, X = W ? 12 : 8, Z = 0;
		K.length = 0, q.length = 0;
		for (let Ji = 0; Ji < D; Ji += 3) {
			let D = w[Ji] << 1, Yi = b[D], Q = b[D + 1], Xi = O[D], Zi = O[D + 1];
			D = w[Ji + 1] << 1;
			let Qi = b[D], $i = b[D + 1], ea = O[D], ta = O[D + 1];
			D = w[Ji + 2] << 1;
			let na = b[D], ra = b[D + 1], ia = O[D], aa = O[D + 1];
			for (let b = 0; b < Y; b++) {
				let w = K.length;
				if (this.clip(Yi, Q, Qi, $i, na, ra, J[b], G)) {
					let b = G.length;
					if (b == 0) continue;
					let D = $i - ra, O = na - Qi, J = Yi - na, Y = ra - Q, Ji = 1 / (D * J + O * (Q - ra)), oa = b >> 1, sa = this.clipOutput, ca = Utils.setArraySize(K, w + oa * X);
					for (let G = 0; G < b; G += 2, w += X) {
						let b = sa[G], K = sa[G + 1];
						ca[w] = b, ca[w + 1] = K, ca[w + 2] = F.r, ca[w + 3] = F.g, ca[w + 4] = F.b, ca[w + 5] = F.a;
						let q = b - na, X = K - ra, Z = (D * q + O * X) * Ji, Yi = (Y * q + J * X) * Ji, Q = 1 - Z - Yi;
						ca[w + 6] = Xi * Z + ea * Yi + ia * Q, ca[w + 7] = Zi * Z + ta * Yi + aa * Q, W && (ca[w + 8] = U.r, ca[w + 9] = U.g, ca[w + 10] = U.b, ca[w + 11] = U.a);
					}
					w = q.length;
					let la = Utils.setArraySize(q, w + 3 * (oa - 2));
					oa--;
					for (let b = 1; b < oa; b++, w += 3) la[w] = Z, la[w + 1] = Z + b, la[w + 2] = Z + b + 1;
					Z += oa + 1;
				} else {
					let b = Utils.setArraySize(K, w + 3 * X);
					b[w] = Yi, b[w + 1] = Q, b[w + 2] = F.r, b[w + 3] = F.g, b[w + 4] = F.b, b[w + 5] = F.a, W ? (b[w + 6] = Xi, b[w + 7] = Zi, b[w + 8] = U.r, b[w + 9] = U.g, b[w + 10] = U.b, b[w + 11] = U.a, b[w + 12] = Qi, b[w + 13] = $i, b[w + 14] = F.r, b[w + 15] = F.g, b[w + 16] = F.b, b[w + 17] = F.a, b[w + 18] = ea, b[w + 19] = ta, b[w + 20] = U.r, b[w + 21] = U.g, b[w + 22] = U.b, b[w + 23] = U.a, b[w + 24] = na, b[w + 25] = ra, b[w + 26] = F.r, b[w + 27] = F.g, b[w + 28] = F.b, b[w + 29] = F.a, b[w + 30] = ia, b[w + 31] = aa, b[w + 32] = U.r, b[w + 33] = U.g, b[w + 34] = U.b, b[w + 35] = U.a) : (b[w + 6] = Xi, b[w + 7] = Zi, b[w + 8] = Qi, b[w + 9] = $i, b[w + 10] = F.r, b[w + 11] = F.g, b[w + 12] = F.b, b[w + 13] = F.a, b[w + 14] = ea, b[w + 15] = ta, b[w + 16] = na, b[w + 17] = ra, b[w + 18] = F.r, b[w + 19] = F.g, b[w + 20] = F.b, b[w + 21] = F.a, b[w + 22] = ia, b[w + 23] = aa), w = q.length;
					let D = Utils.setArraySize(q, w + 3);
					D[w] = Z, D[w + 1] = Z + 1, D[w + 2] = Z + 2, Z += 3;
					break;
				}
			}
		}
	}
	clipTrianglesUnpacked(b, w, D, O) {
		let F = this.clipOutput, U = this.clippedVertices, W = this.clippedUVs, G = this.clippedTriangles, K = this.clippingPolygons, q = K.length, J = 0;
		U.length = 0, W.length = 0, G.length = 0;
		for (let Y = 0; Y < D; Y += 3) {
			let D = w[Y] << 1, X = b[D], Z = b[D + 1], Ji = O[D], Yi = O[D + 1];
			D = w[Y + 1] << 1;
			let Q = b[D], Xi = b[D + 1], Zi = O[D], Qi = O[D + 1];
			D = w[Y + 2] << 1;
			let $i = b[D], ea = b[D + 1], ta = O[D], na = O[D + 1];
			for (let b = 0; b < q; b++) {
				let w = U.length;
				if (this.clip(X, Z, Q, Xi, $i, ea, K[b], F)) {
					let b = F.length;
					if (b == 0) continue;
					let D = Xi - ea, O = $i - Q, K = X - $i, q = ea - Z, Y = 1 / (D * K + O * (Z - ea)), ra = b >> 1, ia = this.clipOutput, aa = Utils.setArraySize(U, w + ra * 2), oa = Utils.setArraySize(W, w + ra * 2);
					for (let F = 0; F < b; F += 2, w += 2) {
						let b = ia[F], U = ia[F + 1];
						aa[w] = b, aa[w + 1] = U;
						let W = b - $i, G = U - ea, J = (D * W + O * G) * Y, X = (q * W + K * G) * Y, Z = 1 - J - X;
						oa[w] = Ji * J + Zi * X + ta * Z, oa[w + 1] = Yi * J + Qi * X + na * Z;
					}
					w = G.length;
					let sa = Utils.setArraySize(G, w + 3 * (ra - 2));
					ra--;
					for (let b = 1; b < ra; b++, w += 3) sa[w] = J, sa[w + 1] = J + b, sa[w + 2] = J + b + 1;
					J += ra + 1;
				} else {
					let b = Utils.setArraySize(U, w + 6);
					b[w] = X, b[w + 1] = Z, b[w + 2] = Q, b[w + 3] = Xi, b[w + 4] = $i, b[w + 5] = ea;
					let D = Utils.setArraySize(W, w + 6);
					D[w] = Ji, D[w + 1] = Yi, D[w + 2] = Zi, D[w + 3] = Qi, D[w + 4] = ta, D[w + 5] = na, w = G.length;
					let O = Utils.setArraySize(G, w + 3);
					O[w] = J, O[w + 1] = J + 1, O[w + 2] = J + 2, J += 3;
					break;
				}
			}
		}
	}
	clip(b, w, D, O, F, U, W, G) {
		let K = G, q = !1, J;
		W.length % 4 >= 2 ? (J = G, G = this.scratch) : J = this.scratch, J.length = 0, J.push(b), J.push(w), J.push(D), J.push(O), J.push(F), J.push(U), J.push(b), J.push(w), G.length = 0;
		let Y = W.length - 4, X = W;
		for (let b = 0;; b += 2) {
			let w = X[b], D = X[b + 1], O = w - X[b + 2], F = D - X[b + 3], U = G.length, W = J;
			for (let b = 0, U = J.length - 2; b < U;) {
				let U = W[b], K = W[b + 1];
				b += 2;
				let J = W[b], Y = W[b + 1], X = F * (w - J) > O * (D - Y), Z = F * (w - U) - O * (D - K);
				if (Z > 0) {
					if (X) {
						G.push(J), G.push(Y);
						continue;
					}
					let b = J - U, w = Y - K, D = Z / (b * F - w * O);
					if (D >= 0 && D <= 1) G.push(U + b * D), G.push(K + w * D);
					else {
						G.push(J), G.push(Y);
						continue;
					}
				} else if (X) {
					let b = J - U, w = Y - K, D = Z / (b * F - w * O);
					if (D >= 0 && D <= 1) G.push(U + b * D), G.push(K + w * D), G.push(J), G.push(Y);
					else {
						G.push(J), G.push(Y);
						continue;
					}
				}
				q = !0;
			}
			if (U == G.length) return K.length = 0, !0;
			if (G.push(G[0]), G.push(G[1]), b == Y) break;
			let Z = G;
			G = J, G.length = 0, J = Z;
		}
		if (K != G) {
			K.length = 0;
			for (let b = 0, w = G.length - 2; b < w; b++) K[b] = G[b];
		} else K.length -= 2;
		return q;
	}
	static makeClockwise(b) {
		let w = b, D = b.length, O = w[D - 2] * w[1] - w[0] * w[D - 1], F = 0, U = 0, W = 0, G = 0;
		for (let b = 0, K = D - 3; b < K; b += 2) F = w[b], U = w[b + 1], W = w[b + 2], G = w[b + 3], O += F * G - W * U;
		if (!(O < 0)) for (let b = 0, O = D - 2, F = D >> 1; b < F; b += 2) {
			let D = w[b], F = w[b + 1], U = O - b;
			w[b] = w[U], w[b + 1] = w[U + 1], w[U] = D, w[U + 1] = F;
		}
	}
}, SkeletonJson = class {
	constructor(b) {
		_defineProperty(this, "attachmentLoader", void 0), _defineProperty(this, "scale", 1), _defineProperty(this, "linkedMeshes", []), this.attachmentLoader = b;
	}
	readSkeletonData(b) {
		let w = this.scale, D = new SkeletonData(), O = typeof b == "string" ? JSON.parse(b) : b, F = O.skeleton;
		if (F) {
			var U, W;
			D.hash = F.hash, D.version = F.spine, D.x = F.x, D.y = F.y, D.width = F.width, D.height = F.height, D.referenceScale = getValue(F, "referenceScale", 100) * w, D.fps = F.fps, D.imagesPath = (U = F.images) == null ? null : U, D.audioPath = (W = F.audio) == null ? null : W;
		}
		if (O.bones) for (let b = 0; b < O.bones.length; b++) {
			let F = O.bones[b], U = null, W = getValue(F, "parent", null);
			W && (U = D.findBone(W));
			let G = new BoneData(D.bones.length, F.name, U);
			G.length = getValue(F, "length", 0) * w, G.x = getValue(F, "x", 0) * w, G.y = getValue(F, "y", 0) * w, G.rotation = getValue(F, "rotation", 0), G.scaleX = getValue(F, "scaleX", 1), G.scaleY = getValue(F, "scaleY", 1), G.shearX = getValue(F, "shearX", 0), G.shearY = getValue(F, "shearY", 0), G.inherit = Utils.enumValue(Inherit, getValue(F, "inherit", "Normal")), G.skinRequired = getValue(F, "skin", !1);
			let K = getValue(F, "color", null);
			K && G.color.setFromString(K), D.bones.push(G);
		}
		if (O.slots) for (let b = 0; b < O.slots.length; b++) {
			let w = O.slots[b], F = w.name, U = D.findBone(w.bone);
			if (!U) throw Error(`Couldn't find bone ${w.bone} for slot ${F}`);
			let W = new SlotData(D.slots.length, F, U), G = getValue(w, "color", null);
			G && W.color.setFromString(G);
			let K = getValue(w, "dark", null);
			K && (W.darkColor = Color.fromString(K)), W.attachmentName = getValue(w, "attachment", null), W.blendMode = Utils.enumValue(BlendMode, getValue(w, "blend", "normal")), W.visible = getValue(w, "visible", !0), D.slots.push(W);
		}
		if (O.ik) for (let b = 0; b < O.ik.length; b++) {
			let F = O.ik[b], U = new IkConstraintData(F.name);
			U.order = getValue(F, "order", 0), U.skinRequired = getValue(F, "skin", !1);
			for (let b = 0; b < F.bones.length; b++) {
				let w = D.findBone(F.bones[b]);
				if (!w) throw Error(`Couldn't find bone ${F.bones[b]} for IK constraint ${F.name}.`);
				U.bones.push(w);
			}
			let W = D.findBone(F.target);
			if (!W) throw Error(`Couldn't find target bone ${F.target} for IK constraint ${F.name}.`);
			U.target = W, U.mix = getValue(F, "mix", 1), U.softness = getValue(F, "softness", 0) * w, U.bendDirection = getValue(F, "bendPositive", !0) ? 1 : -1, U.compress = getValue(F, "compress", !1), U.stretch = getValue(F, "stretch", !1), U.uniform = getValue(F, "uniform", !1), D.ikConstraints.push(U);
		}
		if (O.transform) for (let b = 0; b < O.transform.length; b++) {
			let F = O.transform[b], U = new TransformConstraintData(F.name);
			U.order = getValue(F, "order", 0), U.skinRequired = getValue(F, "skin", !1);
			for (let b = 0; b < F.bones.length; b++) {
				let w = F.bones[b], O = D.findBone(w);
				if (!O) throw Error(`Couldn't find bone ${w} for transform constraint ${F.name}.`);
				U.bones.push(O);
			}
			let W = F.target, G = D.findBone(W);
			if (!G) throw Error(`Couldn't find target bone ${W} for transform constraint ${F.name}.`);
			U.target = G, U.local = getValue(F, "local", !1), U.relative = getValue(F, "relative", !1), U.offsetRotation = getValue(F, "rotation", 0), U.offsetX = getValue(F, "x", 0) * w, U.offsetY = getValue(F, "y", 0) * w, U.offsetScaleX = getValue(F, "scaleX", 0), U.offsetScaleY = getValue(F, "scaleY", 0), U.offsetShearY = getValue(F, "shearY", 0), U.mixRotate = getValue(F, "mixRotate", 1), U.mixX = getValue(F, "mixX", 1), U.mixY = getValue(F, "mixY", U.mixX), U.mixScaleX = getValue(F, "mixScaleX", 1), U.mixScaleY = getValue(F, "mixScaleY", U.mixScaleX), U.mixShearY = getValue(F, "mixShearY", 1), D.transformConstraints.push(U);
		}
		if (O.path) for (let b = 0; b < O.path.length; b++) {
			let F = O.path[b], U = new PathConstraintData(F.name);
			U.order = getValue(F, "order", 0), U.skinRequired = getValue(F, "skin", !1);
			for (let b = 0; b < F.bones.length; b++) {
				let w = F.bones[b], O = D.findBone(w);
				if (!O) throw Error(`Couldn't find bone ${w} for path constraint ${F.name}.`);
				U.bones.push(O);
			}
			let W = F.target, G = D.findSlot(W);
			if (!G) throw Error(`Couldn't find target slot ${W} for path constraint ${F.name}.`);
			U.target = G, U.positionMode = Utils.enumValue(PositionMode, getValue(F, "positionMode", "Percent")), U.spacingMode = Utils.enumValue(SpacingMode, getValue(F, "spacingMode", "Length")), U.rotateMode = Utils.enumValue(RotateMode, getValue(F, "rotateMode", "Tangent")), U.offsetRotation = getValue(F, "rotation", 0), U.position = getValue(F, "position", 0), U.positionMode == PositionMode.Fixed && (U.position *= w), U.spacing = getValue(F, "spacing", 0), (U.spacingMode == SpacingMode.Length || U.spacingMode == SpacingMode.Fixed) && (U.spacing *= w), U.mixRotate = getValue(F, "mixRotate", 1), U.mixX = getValue(F, "mixX", 1), U.mixY = getValue(F, "mixY", U.mixX), D.pathConstraints.push(U);
		}
		if (O.physics) for (let b = 0; b < O.physics.length; b++) {
			let F = O.physics[b], U = new PhysicsConstraintData(F.name);
			U.order = getValue(F, "order", 0), U.skinRequired = getValue(F, "skin", !1);
			let W = F.bone, G = D.findBone(W);
			if (G == null) throw Error("Physics bone not found: " + W);
			U.bone = G, U.x = getValue(F, "x", 0), U.y = getValue(F, "y", 0), U.rotate = getValue(F, "rotate", 0), U.scaleX = getValue(F, "scaleX", 0), U.shearX = getValue(F, "shearX", 0), U.limit = getValue(F, "limit", 5e3) * w, U.step = 1 / getValue(F, "fps", 60), U.inertia = getValue(F, "inertia", 1), U.strength = getValue(F, "strength", 100), U.damping = getValue(F, "damping", 1), U.massInverse = 1 / getValue(F, "mass", 1), U.wind = getValue(F, "wind", 0), U.gravity = getValue(F, "gravity", 0), U.mix = getValue(F, "mix", 1), U.inertiaGlobal = getValue(F, "inertiaGlobal", !1), U.strengthGlobal = getValue(F, "strengthGlobal", !1), U.dampingGlobal = getValue(F, "dampingGlobal", !1), U.massGlobal = getValue(F, "massGlobal", !1), U.windGlobal = getValue(F, "windGlobal", !1), U.gravityGlobal = getValue(F, "gravityGlobal", !1), U.mixGlobal = getValue(F, "mixGlobal", !1), D.physicsConstraints.push(U);
		}
		if (O.skins) for (let b = 0; b < O.skins.length; b++) {
			let w = O.skins[b], F = new Skin(w.name);
			if (w.bones) for (let b = 0; b < w.bones.length; b++) {
				let O = w.bones[b], U = D.findBone(O);
				if (!U) throw Error(`Couldn't find bone ${O} for skin ${w.name}.`);
				F.bones.push(U);
			}
			if (w.ik) for (let b = 0; b < w.ik.length; b++) {
				let O = w.ik[b], U = D.findIkConstraint(O);
				if (!U) throw Error(`Couldn't find IK constraint ${O} for skin ${w.name}.`);
				F.constraints.push(U);
			}
			if (w.transform) for (let b = 0; b < w.transform.length; b++) {
				let O = w.transform[b], U = D.findTransformConstraint(O);
				if (!U) throw Error(`Couldn't find transform constraint ${O} for skin ${w.name}.`);
				F.constraints.push(U);
			}
			if (w.path) for (let b = 0; b < w.path.length; b++) {
				let O = w.path[b], U = D.findPathConstraint(O);
				if (!U) throw Error(`Couldn't find path constraint ${O} for skin ${w.name}.`);
				F.constraints.push(U);
			}
			if (w.physics) for (let b = 0; b < w.physics.length; b++) {
				let O = w.physics[b], U = D.findPhysicsConstraint(O);
				if (!U) throw Error(`Couldn't find physics constraint ${O} for skin ${w.name}.`);
				F.constraints.push(U);
			}
			for (let b in w.attachments) {
				let O = D.findSlot(b);
				if (!O) throw Error(`Couldn't find slot ${b} for skin ${w.name}.`);
				let U = w.attachments[b];
				for (let b in U) {
					let w = this.readAttachment(U[b], F, O.index, b, D);
					w && F.setAttachment(O.index, b, w);
				}
			}
			D.skins.push(F), F.name == "default" && (D.defaultSkin = F);
		}
		for (let b = 0, w = this.linkedMeshes.length; b < w; b++) {
			let w = this.linkedMeshes[b], O = w.skin ? D.findSkin(w.skin) : D.defaultSkin;
			if (!O) throw Error(`Skin not found: ${w.skin}`);
			let F = O.getAttachment(w.slotIndex, w.parent);
			if (!F) throw Error(`Parent mesh not found: ${w.parent}`);
			w.mesh.timelineAttachment = w.inheritTimeline ? F : w.mesh, w.mesh.setParentMesh(F), w.mesh.region != null && w.mesh.updateRegion();
		}
		if (this.linkedMeshes.length = 0, O.events) for (let b in O.events) {
			let w = O.events[b], F = new EventData(b);
			F.intValue = getValue(w, "int", 0), F.floatValue = getValue(w, "float", 0), F.stringValue = getValue(w, "string", ""), F.audioPath = getValue(w, "audio", null), F.audioPath && (F.volume = getValue(w, "volume", 1), F.balance = getValue(w, "balance", 0)), D.events.push(F);
		}
		if (O.animations) for (let b in O.animations) {
			let w = O.animations[b];
			this.readAnimation(w, b, D);
		}
		return D;
	}
	readAttachment(b, w, D, O, F) {
		let U = this.scale;
		switch (O = getValue(b, "name", O), getValue(b, "type", "region")) {
			case "region": {
				let D = getValue(b, "path", O), F = this.readSequence(getValue(b, "sequence", null)), W = this.attachmentLoader.newRegionAttachment(w, O, D, F);
				if (!W) return null;
				W.path = D, W.x = getValue(b, "x", 0) * U, W.y = getValue(b, "y", 0) * U, W.scaleX = getValue(b, "scaleX", 1), W.scaleY = getValue(b, "scaleY", 1), W.rotation = getValue(b, "rotation", 0), W.width = b.width * U, W.height = b.height * U, W.sequence = F;
				let G = getValue(b, "color", null);
				return G && W.color.setFromString(G), W.region != null && W.updateRegion(), W;
			}
			case "boundingbox": {
				let D = this.attachmentLoader.newBoundingBoxAttachment(w, O);
				if (!D) return null;
				this.readVertices(b, D, b.vertexCount << 1);
				let F = getValue(b, "color", null);
				return F && D.color.setFromString(F), D;
			}
			case "mesh":
			case "linkedmesh": {
				let F = getValue(b, "path", O), W = this.readSequence(getValue(b, "sequence", null)), G = this.attachmentLoader.newMeshAttachment(w, O, F, W);
				if (!G) return null;
				G.path = F;
				let K = getValue(b, "color", null);
				K && G.color.setFromString(K), G.width = getValue(b, "width", 0) * U, G.height = getValue(b, "height", 0) * U, G.sequence = W;
				let q = getValue(b, "parent", null);
				if (q) return this.linkedMeshes.push(new LinkedMesh(G, getValue(b, "skin", null), D, q, getValue(b, "timelines", !0))), G;
				let J = b.uvs;
				return this.readVertices(b, G, J.length), G.triangles = b.triangles, G.regionUVs = J, G.region != null && G.updateRegion(), G.edges = getValue(b, "edges", null), G.hullLength = getValue(b, "hull", 0) * 2, G;
			}
			case "path": {
				let D = this.attachmentLoader.newPathAttachment(w, O);
				if (!D) return null;
				D.closed = getValue(b, "closed", !1), D.constantSpeed = getValue(b, "constantSpeed", !0);
				let F = b.vertexCount;
				this.readVertices(b, D, F << 1);
				let W = Utils.newArray(F / 3, 0);
				for (let w = 0; w < b.lengths.length; w++) W[w] = b.lengths[w] * U;
				D.lengths = W;
				let G = getValue(b, "color", null);
				return G && D.color.setFromString(G), D;
			}
			case "point": {
				let D = this.attachmentLoader.newPointAttachment(w, O);
				if (!D) return null;
				D.x = getValue(b, "x", 0) * U, D.y = getValue(b, "y", 0) * U, D.rotation = getValue(b, "rotation", 0);
				let F = getValue(b, "color", null);
				return F && D.color.setFromString(F), D;
			}
			case "clipping": {
				let D = this.attachmentLoader.newClippingAttachment(w, O);
				if (!D) return null;
				let U = getValue(b, "end", null);
				U && (D.endSlot = F.findSlot(U));
				let W = b.vertexCount;
				this.readVertices(b, D, W << 1);
				let G = getValue(b, "color", null);
				return G && D.color.setFromString(G), D;
			}
		}
		return null;
	}
	readSequence(b) {
		if (b == null) return null;
		let w = new Sequence(getValue(b, "count", 0));
		return w.start = getValue(b, "start", 1), w.digits = getValue(b, "digits", 0), w.setupIndex = getValue(b, "setup", 0), w;
	}
	readVertices(b, w, D) {
		let O = this.scale;
		w.worldVerticesLength = D;
		let F = b.vertices;
		if (D == F.length) {
			let b = Utils.toFloatArray(F);
			if (O != 1) for (let w = 0, D = F.length; w < D; w++) b[w] *= O;
			w.vertices = b;
			return;
		}
		let U = [], W = [];
		for (let b = 0, w = F.length; b < w;) {
			let w = F[b++];
			W.push(w);
			for (let D = b + w * 4; b < D; b += 4) W.push(F[b]), U.push(F[b + 1] * O), U.push(F[b + 2] * O), U.push(F[b + 3]);
		}
		w.bones = W, w.vertices = Utils.toFloatArray(U);
	}
	readAnimation(b, w, D) {
		let O = this.scale, F = [];
		if (b.slots) for (let w in b.slots) {
			let O = b.slots[w], U = D.findSlot(w);
			if (!U) throw Error("Slot not found: " + w);
			let W = U.index;
			for (let b in O) {
				let w = O[b];
				if (!w) continue;
				let D = w.length;
				if (b == "attachment") {
					let b = new AttachmentTimeline(D, W);
					for (let O = 0; O < D; O++) {
						let D = w[O];
						b.setFrame(O, getValue(D, "time", 0), getValue(D, "name", null));
					}
					F.push(b);
				} else if (b == "rgba") {
					let b = new RGBATimeline(D, D << 2, W), O = w[0], U = getValue(O, "time", 0), G = Color.fromString(O.color);
					for (let D = 0, F = 0;; D++) {
						b.setFrame(D, U, G.r, G.g, G.b, G.a);
						let W = w[D + 1];
						if (!W) {
							b.shrink(F);
							break;
						}
						let K = getValue(W, "time", 0), q = Color.fromString(W.color), J = O.curve;
						J && (F = readCurve(J, b, F, D, 0, U, K, G.r, q.r, 1), F = readCurve(J, b, F, D, 1, U, K, G.g, q.g, 1), F = readCurve(J, b, F, D, 2, U, K, G.b, q.b, 1), F = readCurve(J, b, F, D, 3, U, K, G.a, q.a, 1)), U = K, G = q, O = W;
					}
					F.push(b);
				} else if (b == "rgb") {
					let b = new RGBTimeline(D, D * 3, W), O = w[0], U = getValue(O, "time", 0), G = Color.fromString(O.color);
					for (let D = 0, F = 0;; D++) {
						b.setFrame(D, U, G.r, G.g, G.b);
						let W = w[D + 1];
						if (!W) {
							b.shrink(F);
							break;
						}
						let K = getValue(W, "time", 0), q = Color.fromString(W.color), J = O.curve;
						J && (F = readCurve(J, b, F, D, 0, U, K, G.r, q.r, 1), F = readCurve(J, b, F, D, 1, U, K, G.g, q.g, 1), F = readCurve(J, b, F, D, 2, U, K, G.b, q.b, 1)), U = K, G = q, O = W;
					}
					F.push(b);
				} else if (b == "alpha") F.push(readTimeline1(w, new AlphaTimeline(D, D, W), 0, 1));
				else if (b == "rgba2") {
					let b = new RGBA2Timeline(D, D * 7, W), O = w[0], U = getValue(O, "time", 0), G = Color.fromString(O.light), K = Color.fromString(O.dark);
					for (let D = 0, F = 0;; D++) {
						b.setFrame(D, U, G.r, G.g, G.b, G.a, K.r, K.g, K.b);
						let W = w[D + 1];
						if (!W) {
							b.shrink(F);
							break;
						}
						let q = getValue(W, "time", 0), J = Color.fromString(W.light), Y = Color.fromString(W.dark), X = O.curve;
						X && (F = readCurve(X, b, F, D, 0, U, q, G.r, J.r, 1), F = readCurve(X, b, F, D, 1, U, q, G.g, J.g, 1), F = readCurve(X, b, F, D, 2, U, q, G.b, J.b, 1), F = readCurve(X, b, F, D, 3, U, q, G.a, J.a, 1), F = readCurve(X, b, F, D, 4, U, q, K.r, Y.r, 1), F = readCurve(X, b, F, D, 5, U, q, K.g, Y.g, 1), F = readCurve(X, b, F, D, 6, U, q, K.b, Y.b, 1)), U = q, G = J, K = Y, O = W;
					}
					F.push(b);
				} else if (b == "rgb2") {
					let b = new RGB2Timeline(D, D * 6, W), O = w[0], U = getValue(O, "time", 0), G = Color.fromString(O.light), K = Color.fromString(O.dark);
					for (let D = 0, F = 0;; D++) {
						b.setFrame(D, U, G.r, G.g, G.b, K.r, K.g, K.b);
						let W = w[D + 1];
						if (!W) {
							b.shrink(F);
							break;
						}
						let q = getValue(W, "time", 0), J = Color.fromString(W.light), Y = Color.fromString(W.dark), X = O.curve;
						X && (F = readCurve(X, b, F, D, 0, U, q, G.r, J.r, 1), F = readCurve(X, b, F, D, 1, U, q, G.g, J.g, 1), F = readCurve(X, b, F, D, 2, U, q, G.b, J.b, 1), F = readCurve(X, b, F, D, 3, U, q, K.r, Y.r, 1), F = readCurve(X, b, F, D, 4, U, q, K.g, Y.g, 1), F = readCurve(X, b, F, D, 5, U, q, K.b, Y.b, 1)), U = q, G = J, K = Y, O = W;
					}
					F.push(b);
				}
			}
		}
		if (b.bones) for (let w in b.bones) {
			let U = b.bones[w], W = D.findBone(w);
			if (!W) throw Error("Bone not found: " + w);
			let G = W.index;
			for (let b in U) {
				let w = U[b], D = w.length;
				if (D != 0) {
					if (b === "rotate") F.push(readTimeline1(w, new RotateTimeline(D, D, G), 0, 1));
					else if (b === "translate") {
						let b = new TranslateTimeline(D, D << 1, G);
						F.push(readTimeline2(w, b, "x", "y", 0, O));
					} else if (b === "translatex") {
						let b = new TranslateXTimeline(D, D, G);
						F.push(readTimeline1(w, b, 0, O));
					} else if (b === "translatey") {
						let b = new TranslateYTimeline(D, D, G);
						F.push(readTimeline1(w, b, 0, O));
					} else if (b === "scale") {
						let b = new ScaleTimeline(D, D << 1, G);
						F.push(readTimeline2(w, b, "x", "y", 1, 1));
					} else if (b === "scalex") {
						let b = new ScaleXTimeline(D, D, G);
						F.push(readTimeline1(w, b, 1, 1));
					} else if (b === "scaley") {
						let b = new ScaleYTimeline(D, D, G);
						F.push(readTimeline1(w, b, 1, 1));
					} else if (b === "shear") {
						let b = new ShearTimeline(D, D << 1, G);
						F.push(readTimeline2(w, b, "x", "y", 0, 1));
					} else if (b === "shearx") {
						let b = new ShearXTimeline(D, D, G);
						F.push(readTimeline1(w, b, 0, 1));
					} else if (b === "sheary") {
						let b = new ShearYTimeline(D, D, G);
						F.push(readTimeline1(w, b, 0, 1));
					} else if (b === "inherit") {
						let b = new InheritTimeline(D, W.index);
						for (let D = 0; D < w.length; D++) {
							let O = w[D];
							b.setFrame(D, getValue(O, "time", 0), Utils.enumValue(Inherit, getValue(O, "inherit", "Normal")));
						}
						F.push(b);
					}
				}
			}
		}
		if (b.ik) for (let w in b.ik) {
			let U = b.ik[w], W = U[0];
			if (!W) continue;
			let G = D.findIkConstraint(w);
			if (!G) throw Error("IK Constraint not found: " + w);
			let K = D.ikConstraints.indexOf(G), q = new IkConstraintTimeline(U.length, U.length << 1, K), J = getValue(W, "time", 0), Y = getValue(W, "mix", 1), X = getValue(W, "softness", 0) * O;
			for (let b = 0, w = 0;; b++) {
				q.setFrame(b, J, Y, X, getValue(W, "bendPositive", !0) ? 1 : -1, getValue(W, "compress", !1), getValue(W, "stretch", !1));
				let D = U[b + 1];
				if (!D) {
					q.shrink(w);
					break;
				}
				let F = getValue(D, "time", 0), G = getValue(D, "mix", 1), K = getValue(D, "softness", 0) * O, Z = W.curve;
				Z && (w = readCurve(Z, q, w, b, 0, J, F, Y, G, 1), w = readCurve(Z, q, w, b, 1, J, F, X, K, O)), J = F, Y = G, X = K, W = D;
			}
			F.push(q);
		}
		if (b.transform) for (let w in b.transform) {
			let O = b.transform[w], U = O[0];
			if (!U) continue;
			let W = D.findTransformConstraint(w);
			if (!W) throw Error("Transform constraint not found: " + w);
			let G = D.transformConstraints.indexOf(W), K = new TransformConstraintTimeline(O.length, O.length * 6, G), q = getValue(U, "time", 0), J = getValue(U, "mixRotate", 1), Y = getValue(U, "mixX", 1), X = getValue(U, "mixY", Y), Z = getValue(U, "mixScaleX", 1), Ji = getValue(U, "mixScaleY", Z), Yi = getValue(U, "mixShearY", 1);
			for (let b = 0, w = 0;; b++) {
				K.setFrame(b, q, J, Y, X, Z, Ji, Yi);
				let D = O[b + 1];
				if (!D) {
					K.shrink(w);
					break;
				}
				let F = getValue(D, "time", 0), W = getValue(D, "mixRotate", 1), G = getValue(D, "mixX", 1), Q = getValue(D, "mixY", G), Xi = getValue(D, "mixScaleX", 1), Zi = getValue(D, "mixScaleY", Xi), Qi = getValue(D, "mixShearY", 1), $i = U.curve;
				$i && (w = readCurve($i, K, w, b, 0, q, F, J, W, 1), w = readCurve($i, K, w, b, 1, q, F, Y, G, 1), w = readCurve($i, K, w, b, 2, q, F, X, Q, 1), w = readCurve($i, K, w, b, 3, q, F, Z, Xi, 1), w = readCurve($i, K, w, b, 4, q, F, Ji, Zi, 1), w = readCurve($i, K, w, b, 5, q, F, Yi, Qi, 1)), q = F, J = W, Y = G, X = Q, Z = Xi, Ji = Zi, Z = Xi, U = D;
			}
			F.push(K);
		}
		if (b.path) for (let w in b.path) {
			let U = b.path[w], W = D.findPathConstraint(w);
			if (!W) throw Error("Path constraint not found: " + w);
			let G = D.pathConstraints.indexOf(W);
			for (let b in U) {
				let w = U[b], D = w[0];
				if (!D) continue;
				let K = w.length;
				if (b === "position") {
					let b = new PathConstraintPositionTimeline(K, K, G);
					F.push(readTimeline1(w, b, 0, W.positionMode == PositionMode.Fixed ? O : 1));
				} else if (b === "spacing") {
					let b = new PathConstraintSpacingTimeline(K, K, G);
					F.push(readTimeline1(w, b, 0, W.spacingMode == SpacingMode.Length || W.spacingMode == SpacingMode.Fixed ? O : 1));
				} else if (b === "mix") {
					let b = new PathConstraintMixTimeline(K, K * 3, G), O = getValue(D, "time", 0), U = getValue(D, "mixRotate", 1), W = getValue(D, "mixX", 1), q = getValue(D, "mixY", W);
					for (let F = 0, G = 0;; F++) {
						b.setFrame(F, O, U, W, q);
						let K = w[F + 1];
						if (!K) {
							b.shrink(G);
							break;
						}
						let J = getValue(K, "time", 0), Y = getValue(K, "mixRotate", 1), X = getValue(K, "mixX", 1), Z = getValue(K, "mixY", X), Ji = D.curve;
						Ji && (G = readCurve(Ji, b, G, F, 0, O, J, U, Y, 1), G = readCurve(Ji, b, G, F, 1, O, J, W, X, 1), G = readCurve(Ji, b, G, F, 2, O, J, q, Z, 1)), O = J, U = Y, W = X, q = Z, D = K;
					}
					F.push(b);
				}
			}
		}
		if (b.physics) for (let w in b.physics) {
			let O = b.physics[w], U = -1;
			if (w.length > 0) {
				let b = D.findPhysicsConstraint(w);
				if (!b) throw Error("Physics constraint not found: " + w);
				U = D.physicsConstraints.indexOf(b);
			}
			for (let b in O) {
				let w = O[b], D = w[0];
				if (!D) continue;
				let W = w.length;
				if (b == "reset") {
					let b = new PhysicsConstraintResetTimeline(W, U);
					for (let O = 0; D != null; D = w[O + 1], O++) b.setFrame(O, getValue(D, "time", 0));
					F.push(b);
					continue;
				}
				let G;
				if (b == "inertia") G = new PhysicsConstraintInertiaTimeline(W, W, U);
				else if (b == "strength") G = new PhysicsConstraintStrengthTimeline(W, W, U);
				else if (b == "damping") G = new PhysicsConstraintDampingTimeline(W, W, U);
				else if (b == "mass") G = new PhysicsConstraintMassTimeline(W, W, U);
				else if (b == "wind") G = new PhysicsConstraintWindTimeline(W, W, U);
				else if (b == "gravity") G = new PhysicsConstraintGravityTimeline(W, W, U);
				else if (b == "mix") G = new PhysicsConstraintMixTimeline(W, W, U);
				else continue;
				F.push(readTimeline1(w, G, 0, 1));
			}
		}
		if (b.attachments) for (let w in b.attachments) {
			let U = b.attachments[w], W = D.findSkin(w);
			if (!W) throw Error("Skin not found: " + w);
			for (let b in U) {
				let w = U[b], G = D.findSlot(b);
				if (!G) throw Error("Slot not found: " + b);
				let K = G.index;
				for (let b in w) {
					let D = w[b], U = W.getAttachment(K, b);
					for (let b in D) {
						let w = D[b], W = w[0];
						if (W) {
							if (b == "deform") {
								let b = U.bones, D = U.vertices, G = b ? D.length / 3 * 2 : D.length, q = new DeformTimeline(w.length, w.length, K, U), J = getValue(W, "time", 0);
								for (let F = 0, U = 0;; F++) {
									let K, Y = getValue(W, "vertices", null);
									if (!Y) K = b ? Utils.newFloatArray(G) : D;
									else {
										K = Utils.newFloatArray(G);
										let w = getValue(W, "offset", 0);
										if (Utils.arrayCopy(Y, 0, K, w, Y.length), O != 1) for (let b = w, D = b + Y.length; b < D; b++) K[b] *= O;
										if (!b) for (let b = 0; b < G; b++) K[b] += D[b];
									}
									q.setFrame(F, J, K);
									let X = w[F + 1];
									if (!X) {
										q.shrink(U);
										break;
									}
									let Z = getValue(X, "time", 0), Ji = W.curve;
									Ji && (U = readCurve(Ji, q, U, F, 0, J, Z, 0, 1, 1)), J = Z, W = X;
								}
								F.push(q);
							} else if (b == "sequence") {
								let b = new SequenceTimeline(w.length, K, U), D = 0;
								for (let O = 0; O < w.length; O++) {
									let F = getValue(W, "delay", D), U = getValue(W, "time", 0), G = SequenceMode[getValue(W, "mode", "hold")], K = getValue(W, "index", 0);
									b.setFrame(O, U, G, K, F), D = F, W = w[O + 1];
								}
								F.push(b);
							}
						}
					}
				}
			}
		}
		if (b.drawOrder) {
			let w = new DrawOrderTimeline(b.drawOrder.length), O = D.slots.length, U = 0;
			for (let F = 0; F < b.drawOrder.length; F++, U++) {
				let W = b.drawOrder[F], G = null, K = getValue(W, "offsets", null);
				if (K) {
					G = Utils.newArray(O, -1);
					let b = Utils.newArray(O - K.length, 0), w = 0, F = 0;
					for (let O = 0; O < K.length; O++) {
						let U = K[O], W = D.findSlot(U.slot);
						if (!W) throw Error("Slot not found: " + W);
						let q = W.index;
						for (; w != q;) b[F++] = w++;
						G[w + U.offset] = w++;
					}
					for (; w < O;) b[F++] = w++;
					for (let w = O - 1; w >= 0; w--) G[w] == -1 && (G[w] = b[--F]);
				}
				w.setFrame(U, getValue(W, "time", 0), G);
			}
			F.push(w);
		}
		if (b.events) {
			let w = new EventTimeline(b.events.length), O = 0;
			for (let F = 0; F < b.events.length; F++, O++) {
				let U = b.events[F], W = D.findEvent(U.name);
				if (!W) throw Error("Event not found: " + U.name);
				let G = new Event(Utils.toSinglePrecision(getValue(U, "time", 0)), W);
				G.intValue = getValue(U, "int", W.intValue), G.floatValue = getValue(U, "float", W.floatValue), G.stringValue = getValue(U, "string", W.stringValue), G.data.audioPath && (G.volume = getValue(U, "volume", 1), G.balance = getValue(U, "balance", 0)), w.setFrame(O, G);
			}
			F.push(w);
		}
		let U = 0;
		for (let b = 0, w = F.length; b < w; b++) U = Math.max(U, F[b].getDuration());
		D.animations.push(new Animation(w, F, U));
	}
}, LinkedMesh = class {
	constructor(b, w, D, O, F) {
		_defineProperty(this, "parent", void 0), _defineProperty(this, "skin", void 0), _defineProperty(this, "slotIndex", void 0), _defineProperty(this, "mesh", void 0), _defineProperty(this, "inheritTimeline", void 0), this.mesh = b, this.skin = w, this.slotIndex = D, this.parent = O, this.inheritTimeline = F;
	}
};
function readTimeline1(b, w, D, O) {
	let F = b[0], U = getValue(F, "time", 0), W = getValue(F, "value", D) * O, G = 0;
	for (let K = 0;; K++) {
		w.setFrame(K, U, W);
		let q = b[K + 1];
		if (!q) return w.shrink(G), w;
		let J = getValue(q, "time", 0), Y = getValue(q, "value", D) * O;
		F.curve && (G = readCurve(F.curve, w, G, K, 0, U, J, W, Y, O)), U = J, W = Y, F = q;
	}
}
function readTimeline2(b, w, D, O, F, U) {
	let W = b[0], G = getValue(W, "time", 0), K = getValue(W, D, F) * U, q = getValue(W, O, F) * U, J = 0;
	for (let Y = 0;; Y++) {
		w.setFrame(Y, G, K, q);
		let X = b[Y + 1];
		if (!X) return w.shrink(J), w;
		let Z = getValue(X, "time", 0), Ji = getValue(X, D, F) * U, Yi = getValue(X, O, F) * U, Q = W.curve;
		Q && (J = readCurve(Q, w, J, Y, 0, G, Z, K, Ji, U), J = readCurve(Q, w, J, Y, 1, G, Z, q, Yi, U)), G = Z, K = Ji, q = Yi, W = X;
	}
}
function readCurve(b, w, D, O, F, U, W, G, K, q) {
	if (b == "stepped") return w.setStepped(O), D;
	let J = F << 2, Y = b[J], X = b[J + 1] * q, Z = b[J + 2], Ji = b[J + 3] * q;
	return w.setBezier(D, O, F, U, G, Y, X, Z, Ji, W, K), D + 1;
}
function getValue(b, w, D) {
	return b[w] === void 0 ? D : b[w];
}
Math.fround === void 0 && (Math.fround = (function(b) {
	return function(w) {
		return b[0] = w, b[0];
	};
})(new Float32Array(1)));
var ManagedWebGLRenderingContext = class {
	constructor(b, w = { alpha: !0 }) {
		if (_defineProperty(this, "canvas", void 0), _defineProperty(this, "gl", void 0), _defineProperty(this, "restorables", []), _defineProperty(this, "contextLostHandler", (b) => {
			b && b.preventDefault();
		}), _defineProperty(this, "contextRestoredHandler", () => {
			for (let b = 0, w = this.restorables.length; b < w; b++) this.restorables[b].restore();
		}), b instanceof WebGLRenderingContext || typeof WebGL2RenderingContext < "u" && b instanceof WebGL2RenderingContext) this.gl = b, this.canvas = this.gl.canvas;
		else {
			let D = b;
			this.gl = D.getContext("webgl2", w) || D.getContext("webgl", w), this.canvas = D, D.addEventListener("webglcontextlost", this.contextLostHandler), D.addEventListener("webglcontextrestored", this.contextRestoredHandler);
		}
	}
	dispose() {
		this.canvas.removeEventListener("webglcontextlost", this.contextLostHandler), this.canvas.removeEventListener("webglcontextrestored", this.contextRestoredHandler);
	}
	addRestorable(b) {
		this.restorables.push(b);
	}
	removeRestorable(b) {
		let w = this.restorables.indexOf(b);
		w > -1 && this.restorables.splice(w, 1);
	}
}, GLTexture = class b extends Texture {
	constructor(b, w, D = !1) {
		super(w), _defineProperty(this, "context", void 0), _defineProperty(this, "texture", null), _defineProperty(this, "boundUnit", 0), _defineProperty(this, "useMipMaps", !1), this.context = b instanceof ManagedWebGLRenderingContext ? b : new ManagedWebGLRenderingContext(b), this.useMipMaps = D, this.restore(), this.context.addRestorable(this);
	}
	setFilters(w, D) {
		let O = this.context.gl;
		this.bind(), O.texParameteri(O.TEXTURE_2D, O.TEXTURE_MIN_FILTER, w), O.texParameteri(O.TEXTURE_2D, O.TEXTURE_MAG_FILTER, b.validateMagFilter(D)), this.useMipMaps = b.usesMipMaps(w), this.useMipMaps && O.generateMipmap(O.TEXTURE_2D);
	}
	static validateMagFilter(b) {
		switch (b) {
			case TextureFilter.MipMapLinearLinear:
			case TextureFilter.MipMapLinearNearest:
			case TextureFilter.MipMapNearestLinear:
			case TextureFilter.MipMapNearestNearest: return TextureFilter.Linear;
			default: return b;
		}
	}
	static usesMipMaps(b) {
		switch (b) {
			case TextureFilter.MipMapLinearLinear:
			case TextureFilter.MipMapLinearNearest:
			case TextureFilter.MipMapNearestLinear:
			case TextureFilter.MipMapNearestNearest: return !0;
			default: return !1;
		}
	}
	setWraps(b, w) {
		let D = this.context.gl;
		this.bind(), D.texParameteri(D.TEXTURE_2D, D.TEXTURE_WRAP_S, b), D.texParameteri(D.TEXTURE_2D, D.TEXTURE_WRAP_T, w);
	}
	update(w) {
		let D = this.context.gl;
		this.texture || (this.texture = this.context.gl.createTexture()), this.bind(), b.DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL && D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), D.texImage2D(D.TEXTURE_2D, 0, D.RGBA, D.RGBA, D.UNSIGNED_BYTE, this._image), D.texParameteri(D.TEXTURE_2D, D.TEXTURE_MAG_FILTER, D.LINEAR), D.texParameteri(D.TEXTURE_2D, D.TEXTURE_MIN_FILTER, w ? D.LINEAR_MIPMAP_LINEAR : D.LINEAR), D.texParameteri(D.TEXTURE_2D, D.TEXTURE_WRAP_S, D.CLAMP_TO_EDGE), D.texParameteri(D.TEXTURE_2D, D.TEXTURE_WRAP_T, D.CLAMP_TO_EDGE), w && D.generateMipmap(D.TEXTURE_2D);
	}
	restore() {
		this.texture = null, this.update(this.useMipMaps);
	}
	bind(b = 0) {
		let w = this.context.gl;
		this.boundUnit = b, w.activeTexture(w.TEXTURE0 + b), w.bindTexture(w.TEXTURE_2D, this.texture);
	}
	unbind() {
		let b = this.context.gl;
		b.activeTexture(b.TEXTURE0 + this.boundUnit), b.bindTexture(b.TEXTURE_2D, null);
	}
	dispose() {
		this.context.removeRestorable(this), this.context.gl.deleteTexture(this.texture);
	}
};
_defineProperty(GLTexture, "DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL", !1);
var AssetManager = class extends AssetManagerBase {
	constructor(b, w = "", D = new Downloader()) {
		super((w) => new GLTexture(b, w), w, D);
	}
}, Vector3 = class {
	constructor(b = 0, w = 0, D = 0) {
		_defineProperty(this, "x", 0), _defineProperty(this, "y", 0), _defineProperty(this, "z", 0), this.x = b, this.y = w, this.z = D;
	}
	setFrom(b) {
		return this.x = b.x, this.y = b.y, this.z = b.z, this;
	}
	set(b, w, D) {
		return this.x = b, this.y = w, this.z = D, this;
	}
	add(b) {
		return this.x += b.x, this.y += b.y, this.z += b.z, this;
	}
	sub(b) {
		return this.x -= b.x, this.y -= b.y, this.z -= b.z, this;
	}
	scale(b) {
		return this.x *= b, this.y *= b, this.z *= b, this;
	}
	normalize() {
		let b = this.length();
		return b == 0 ? this : (b = 1 / b, this.x *= b, this.y *= b, this.z *= b, this);
	}
	cross(b) {
		return this.set(this.y * b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x * b.y - this.y * b.x);
	}
	multiply(b) {
		let w = b.values;
		return this.set(this.x * w[0] + this.y * w[4] + this.z * w[8] + w[12], this.x * w[1] + this.y * w[5] + this.z * w[9] + w[13], this.x * w[2] + this.y * w[6] + this.z * w[10] + w[14]);
	}
	project(b) {
		let w = b.values, D = 1 / (this.x * w[3] + this.y * w[7] + this.z * w[11] + w[15]);
		return this.set((this.x * w[0] + this.y * w[4] + this.z * w[8] + w[12]) * D, (this.x * w[1] + this.y * w[5] + this.z * w[9] + w[13]) * D, (this.x * w[2] + this.y * w[6] + this.z * w[10] + w[14]) * D);
	}
	dot(b) {
		return this.x * b.x + this.y * b.y + this.z * b.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	distance(b) {
		let w = b.x - this.x, D = b.y - this.y, O = b.z - this.z;
		return Math.sqrt(w * w + D * D + O * O);
	}
}, _Matrix, Matrix4 = class b {
	constructor() {
		_defineProperty(this, "temp", new Float32Array(16)), _defineProperty(this, "values", new Float32Array(16));
		let b = this.values;
		b[0] = 1, b[5] = 1, b[10] = 1, b[15] = 1;
	}
	set(b) {
		return this.values.set(b), this;
	}
	transpose() {
		let b = this.temp, w = this.values;
		return b[0] = w[0], b[4] = w[1], b[8] = w[2], b[12] = w[3], b[1] = w[4], b[5] = w[5], b[9] = w[6], b[13] = w[7], b[2] = w[8], b[6] = w[9], b[10] = w[10], b[14] = w[11], b[3] = w[12], b[7] = w[13], b[11] = w[14], b[15] = w[15], this.set(b);
	}
	identity() {
		let b = this.values;
		return b[0] = 1, b[4] = 0, b[8] = 0, b[12] = 0, b[1] = 0, b[5] = 1, b[9] = 0, b[13] = 0, b[2] = 0, b[6] = 0, b[10] = 1, b[14] = 0, b[3] = 0, b[7] = 0, b[11] = 0, b[15] = 1, this;
	}
	invert() {
		let b = this.values, w = this.temp, D = b[3] * b[6] * b[9] * b[12] - b[2] * b[7] * b[9] * b[12] - b[3] * b[5] * b[10] * b[12] + b[1] * b[7] * b[10] * b[12] + b[2] * b[5] * b[11] * b[12] - b[1] * b[6] * b[11] * b[12] - b[3] * b[6] * b[8] * b[13] + b[2] * b[7] * b[8] * b[13] + b[3] * b[4] * b[10] * b[13] - b[0] * b[7] * b[10] * b[13] - b[2] * b[4] * b[11] * b[13] + b[0] * b[6] * b[11] * b[13] + b[3] * b[5] * b[8] * b[14] - b[1] * b[7] * b[8] * b[14] - b[3] * b[4] * b[9] * b[14] + b[0] * b[7] * b[9] * b[14] + b[1] * b[4] * b[11] * b[14] - b[0] * b[5] * b[11] * b[14] - b[2] * b[5] * b[8] * b[15] + b[1] * b[6] * b[8] * b[15] + b[2] * b[4] * b[9] * b[15] - b[0] * b[6] * b[9] * b[15] - b[1] * b[4] * b[10] * b[15] + b[0] * b[5] * b[10] * b[15];
		if (D == 0) throw Error("non-invertible matrix");
		let O = 1 / D;
		return w[0] = b[9] * b[14] * b[7] - b[13] * b[10] * b[7] + b[13] * b[6] * b[11] - b[5] * b[14] * b[11] - b[9] * b[6] * b[15] + b[5] * b[10] * b[15], w[4] = b[12] * b[10] * b[7] - b[8] * b[14] * b[7] - b[12] * b[6] * b[11] + b[4] * b[14] * b[11] + b[8] * b[6] * b[15] - b[4] * b[10] * b[15], w[8] = b[8] * b[13] * b[7] - b[12] * b[9] * b[7] + b[12] * b[5] * b[11] - b[4] * b[13] * b[11] - b[8] * b[5] * b[15] + b[4] * b[9] * b[15], w[12] = b[12] * b[9] * b[6] - b[8] * b[13] * b[6] - b[12] * b[5] * b[10] + b[4] * b[13] * b[10] + b[8] * b[5] * b[14] - b[4] * b[9] * b[14], w[1] = b[13] * b[10] * b[3] - b[9] * b[14] * b[3] - b[13] * b[2] * b[11] + b[1] * b[14] * b[11] + b[9] * b[2] * b[15] - b[1] * b[10] * b[15], w[5] = b[8] * b[14] * b[3] - b[12] * b[10] * b[3] + b[12] * b[2] * b[11] - b[0] * b[14] * b[11] - b[8] * b[2] * b[15] + b[0] * b[10] * b[15], w[9] = b[12] * b[9] * b[3] - b[8] * b[13] * b[3] - b[12] * b[1] * b[11] + b[0] * b[13] * b[11] + b[8] * b[1] * b[15] - b[0] * b[9] * b[15], w[13] = b[8] * b[13] * b[2] - b[12] * b[9] * b[2] + b[12] * b[1] * b[10] - b[0] * b[13] * b[10] - b[8] * b[1] * b[14] + b[0] * b[9] * b[14], w[2] = b[5] * b[14] * b[3] - b[13] * b[6] * b[3] + b[13] * b[2] * b[7] - b[1] * b[14] * b[7] - b[5] * b[2] * b[15] + b[1] * b[6] * b[15], w[6] = b[12] * b[6] * b[3] - b[4] * b[14] * b[3] - b[12] * b[2] * b[7] + b[0] * b[14] * b[7] + b[4] * b[2] * b[15] - b[0] * b[6] * b[15], w[10] = b[4] * b[13] * b[3] - b[12] * b[5] * b[3] + b[12] * b[1] * b[7] - b[0] * b[13] * b[7] - b[4] * b[1] * b[15] + b[0] * b[5] * b[15], w[14] = b[12] * b[5] * b[2] - b[4] * b[13] * b[2] - b[12] * b[1] * b[6] + b[0] * b[13] * b[6] + b[4] * b[1] * b[14] - b[0] * b[5] * b[14], w[3] = b[9] * b[6] * b[3] - b[5] * b[10] * b[3] - b[9] * b[2] * b[7] + b[1] * b[10] * b[7] + b[5] * b[2] * b[11] - b[1] * b[6] * b[11], w[7] = b[4] * b[10] * b[3] - b[8] * b[6] * b[3] + b[8] * b[2] * b[7] - b[0] * b[10] * b[7] - b[4] * b[2] * b[11] + b[0] * b[6] * b[11], w[11] = b[8] * b[5] * b[3] - b[4] * b[9] * b[3] - b[8] * b[1] * b[7] + b[0] * b[9] * b[7] + b[4] * b[1] * b[11] - b[0] * b[5] * b[11], w[15] = b[4] * b[9] * b[2] - b[8] * b[5] * b[2] + b[8] * b[1] * b[6] - b[0] * b[9] * b[6] - b[4] * b[1] * b[10] + b[0] * b[5] * b[10], b[0] = w[0] * O, b[4] = w[4] * O, b[8] = w[8] * O, b[12] = w[12] * O, b[1] = w[1] * O, b[5] = w[5] * O, b[9] = w[9] * O, b[13] = w[13] * O, b[2] = w[2] * O, b[6] = w[6] * O, b[10] = w[10] * O, b[14] = w[14] * O, b[3] = w[3] * O, b[7] = w[7] * O, b[11] = w[11] * O, b[15] = w[15] * O, this;
	}
	determinant() {
		let b = this.values;
		return b[3] * b[6] * b[9] * b[12] - b[2] * b[7] * b[9] * b[12] - b[3] * b[5] * b[10] * b[12] + b[1] * b[7] * b[10] * b[12] + b[2] * b[5] * b[11] * b[12] - b[1] * b[6] * b[11] * b[12] - b[3] * b[6] * b[8] * b[13] + b[2] * b[7] * b[8] * b[13] + b[3] * b[4] * b[10] * b[13] - b[0] * b[7] * b[10] * b[13] - b[2] * b[4] * b[11] * b[13] + b[0] * b[6] * b[11] * b[13] + b[3] * b[5] * b[8] * b[14] - b[1] * b[7] * b[8] * b[14] - b[3] * b[4] * b[9] * b[14] + b[0] * b[7] * b[9] * b[14] + b[1] * b[4] * b[11] * b[14] - b[0] * b[5] * b[11] * b[14] - b[2] * b[5] * b[8] * b[15] + b[1] * b[6] * b[8] * b[15] + b[2] * b[4] * b[9] * b[15] - b[0] * b[6] * b[9] * b[15] - b[1] * b[4] * b[10] * b[15] + b[0] * b[5] * b[10] * b[15];
	}
	translate(b, w, D) {
		let O = this.values;
		return O[12] += b, O[13] += w, O[14] += D, this;
	}
	copy() {
		return new b().set(this.values);
	}
	projection(b, w, D, O) {
		this.identity();
		let F = 1 / Math.tan(D * (Math.PI / 180) / 2), U = (w + b) / (b - w), W = 2 * w * b / (b - w), G = this.values;
		return G[0] = F / O, G[1] = 0, G[2] = 0, G[3] = 0, G[4] = 0, G[5] = F, G[6] = 0, G[7] = 0, G[8] = 0, G[9] = 0, G[10] = U, G[11] = -1, G[12] = 0, G[13] = 0, G[14] = W, G[15] = 0, this;
	}
	ortho2d(b, w, D, O) {
		return this.ortho(b, b + D, w, w + O, 0, 1);
	}
	ortho(b, w, D, O, F, U) {
		this.identity();
		let W = 2 / (w - b), G = 2 / (O - D), K = -2 / (U - F), q = -(w + b) / (w - b), J = -(O + D) / (O - D), Y = -(U + F) / (U - F), X = this.values;
		return X[0] = W, X[1] = 0, X[2] = 0, X[3] = 0, X[4] = 0, X[5] = G, X[6] = 0, X[7] = 0, X[8] = 0, X[9] = 0, X[10] = K, X[11] = 0, X[12] = q, X[13] = J, X[14] = Y, X[15] = 1, this;
	}
	multiply(b) {
		let w = this.temp, D = this.values, O = b.values;
		return w[0] = D[0] * O[0] + D[4] * O[1] + D[8] * O[2] + D[12] * O[3], w[4] = D[0] * O[4] + D[4] * O[5] + D[8] * O[6] + D[12] * O[7], w[8] = D[0] * O[8] + D[4] * O[9] + D[8] * O[10] + D[12] * O[11], w[12] = D[0] * O[12] + D[4] * O[13] + D[8] * O[14] + D[12] * O[15], w[1] = D[1] * O[0] + D[5] * O[1] + D[9] * O[2] + D[13] * O[3], w[5] = D[1] * O[4] + D[5] * O[5] + D[9] * O[6] + D[13] * O[7], w[9] = D[1] * O[8] + D[5] * O[9] + D[9] * O[10] + D[13] * O[11], w[13] = D[1] * O[12] + D[5] * O[13] + D[9] * O[14] + D[13] * O[15], w[2] = D[2] * O[0] + D[6] * O[1] + D[10] * O[2] + D[14] * O[3], w[6] = D[2] * O[4] + D[6] * O[5] + D[10] * O[6] + D[14] * O[7], w[10] = D[2] * O[8] + D[6] * O[9] + D[10] * O[10] + D[14] * O[11], w[14] = D[2] * O[12] + D[6] * O[13] + D[10] * O[14] + D[14] * O[15], w[3] = D[3] * O[0] + D[7] * O[1] + D[11] * O[2] + D[15] * O[3], w[7] = D[3] * O[4] + D[7] * O[5] + D[11] * O[6] + D[15] * O[7], w[11] = D[3] * O[8] + D[7] * O[9] + D[11] * O[10] + D[15] * O[11], w[15] = D[3] * O[12] + D[7] * O[13] + D[11] * O[14] + D[15] * O[15], this.set(this.temp);
	}
	multiplyLeft(b) {
		let w = this.temp, D = this.values, O = b.values;
		return w[0] = O[0] * D[0] + O[4] * D[1] + O[8] * D[2] + O[12] * D[3], w[4] = O[0] * D[4] + O[4] * D[5] + O[8] * D[6] + O[12] * D[7], w[8] = O[0] * D[8] + O[4] * D[9] + O[8] * D[10] + O[12] * D[11], w[12] = O[0] * D[12] + O[4] * D[13] + O[8] * D[14] + O[12] * D[15], w[1] = O[1] * D[0] + O[5] * D[1] + O[9] * D[2] + O[13] * D[3], w[5] = O[1] * D[4] + O[5] * D[5] + O[9] * D[6] + O[13] * D[7], w[9] = O[1] * D[8] + O[5] * D[9] + O[9] * D[10] + O[13] * D[11], w[13] = O[1] * D[12] + O[5] * D[13] + O[9] * D[14] + O[13] * D[15], w[2] = O[2] * D[0] + O[6] * D[1] + O[10] * D[2] + O[14] * D[3], w[6] = O[2] * D[4] + O[6] * D[5] + O[10] * D[6] + O[14] * D[7], w[10] = O[2] * D[8] + O[6] * D[9] + O[10] * D[10] + O[14] * D[11], w[14] = O[2] * D[12] + O[6] * D[13] + O[10] * D[14] + O[14] * D[15], w[3] = O[3] * D[0] + O[7] * D[1] + O[11] * D[2] + O[15] * D[3], w[7] = O[3] * D[4] + O[7] * D[5] + O[11] * D[6] + O[15] * D[7], w[11] = O[3] * D[8] + O[7] * D[9] + O[11] * D[10] + O[15] * D[11], w[15] = O[3] * D[12] + O[7] * D[13] + O[11] * D[14] + O[15] * D[15], this.set(this.temp);
	}
	lookAt(w, D, O) {
		let F = b.xAxis, U = b.yAxis, W = b.zAxis;
		W.setFrom(D).normalize(), F.setFrom(D).normalize(), F.cross(O).normalize(), U.setFrom(F).cross(W).normalize(), this.identity();
		let G = this.values;
		return G[0] = F.x, G[4] = F.y, G[8] = F.z, G[1] = U.x, G[5] = U.y, G[9] = U.z, G[2] = -W.x, G[6] = -W.y, G[10] = -W.z, b.tmpMatrix.identity(), b.tmpMatrix.values[12] = -w.x, b.tmpMatrix.values[13] = -w.y, b.tmpMatrix.values[14] = -w.z, this.multiply(b.tmpMatrix), this;
	}
};
_Matrix = Matrix4, _defineProperty(Matrix4, "xAxis", new Vector3()), _defineProperty(Matrix4, "yAxis", new Vector3()), _defineProperty(Matrix4, "zAxis", new Vector3()), _defineProperty(Matrix4, "tmpMatrix", new _Matrix());
var OrthoCamera = class {
	constructor(b, w) {
		_defineProperty(this, "position", new Vector3(0, 0, 0)), _defineProperty(this, "direction", new Vector3(0, 0, -1)), _defineProperty(this, "up", new Vector3(0, 1, 0)), _defineProperty(this, "near", 0), _defineProperty(this, "far", 100), _defineProperty(this, "zoom", 1), _defineProperty(this, "viewportWidth", 0), _defineProperty(this, "viewportHeight", 0), _defineProperty(this, "projectionView", new Matrix4()), _defineProperty(this, "inverseProjectionView", new Matrix4()), _defineProperty(this, "projection", new Matrix4()), _defineProperty(this, "view", new Matrix4()), this.viewportWidth = b, this.viewportHeight = w, this.update();
	}
	update() {
		let b = this.projection, w = this.view, D = this.projectionView, O = this.inverseProjectionView, F = this.zoom, U = this.viewportWidth, W = this.viewportHeight;
		b.ortho(F * (-U / 2), F * (U / 2), F * (-W / 2), F * (W / 2), this.near, this.far), w.lookAt(this.position, this.direction, this.up), D.set(b.values), D.multiply(w), O.set(D.values).invert();
	}
	screenToWorld(b, w, D) {
		let O = b.x, F = D - b.y - 1;
		return b.x = 2 * O / w - 1, b.y = 2 * F / D - 1, b.z = 2 * b.z - 1, b.project(this.inverseProjectionView), b;
	}
	worldToScreen(b, w, D) {
		return b.project(this.projectionView), b.x = w * (b.x + 1) / 2, b.y = D * (b.y + 1) / 2, b.z = (b.z + 1) / 2, b;
	}
	setViewport(b, w) {
		this.viewportWidth = b, this.viewportHeight = w;
	}
}, Input = class {
	constructor(b, w = !0) {
		_defineProperty(this, "element", void 0), _defineProperty(this, "mouseX", 0), _defineProperty(this, "mouseY", 0), _defineProperty(this, "buttonDown", !1), _defineProperty(this, "touch0", null), _defineProperty(this, "touch1", null), _defineProperty(this, "initialPinchDistance", 0), _defineProperty(this, "listeners", []), _defineProperty(this, "autoPreventDefault", void 0), _defineProperty(this, "isTouch", !1), _defineProperty(this, "callbacks", void 0), this.element = b, this.autoPreventDefault = w, this.callbacks = this.setupCallbacks(b);
	}
	setupCallbacks(b) {
		let w = (w) => {
			if (w instanceof MouseEvent && !this.isTouch) {
				let D = b.getBoundingClientRect();
				this.mouseX = w.clientX - D.left, this.mouseY = w.clientY - D.top, this.buttonDown = !0, this.listeners.map((b) => {
					b.down && b.down(this.mouseX, this.mouseY, w);
				});
			}
		}, D = (w) => {
			if (w instanceof MouseEvent && !this.isTouch) {
				let D = b.getBoundingClientRect();
				this.mouseX = w.clientX - D.left, this.mouseY = w.clientY - D.top, this.listeners.map((b) => {
					this.buttonDown ? b.dragged && b.dragged(this.mouseX, this.mouseY, w) : b.moved && b.moved(this.mouseX, this.mouseY, w);
				});
			}
		}, O = (w) => {
			if (w instanceof MouseEvent && !this.isTouch) {
				let D = b.getBoundingClientRect();
				this.mouseX = w.clientX - D.left, this.mouseY = w.clientY - D.top, this.buttonDown = !1, this.listeners.map((b) => {
					b.up && b.up(this.mouseX, this.mouseY, w);
				});
			}
		}, F = (b) => {
			this.autoPreventDefault && b.preventDefault();
			let w = b.deltaY;
			b.deltaMode == WheelEvent.DOM_DELTA_LINE && (w *= 8), b.deltaMode == WheelEvent.DOM_DELTA_PAGE && (w *= 24), this.listeners.map((w) => {
				w.wheel && w.wheel(b.deltaY, b);
			});
		}, U = (w) => {
			if (this.isTouch = !0, !this.touch0 || !this.touch1) {
				let D = w.changedTouches.item(0);
				if (!D) return;
				let O = b.getBoundingClientRect(), F = D.clientX - O.left, U = D.clientY - O.top, W = new Touch(D.identifier, F, U);
				if (this.mouseX = F, this.mouseY = U, this.buttonDown = !0, !this.touch0) this.touch0 = W, this.listeners.map((b) => {
					b.down && b.down(W.x, W.y, w);
				});
				else if (!this.touch1) {
					this.touch1 = W;
					let b = this.touch1.x - this.touch0.x, D = this.touch1.x - this.touch0.x;
					this.initialPinchDistance = Math.sqrt(b * b + D * D), this.listeners.map((b) => {
						b.zoom && b.zoom(this.initialPinchDistance, this.initialPinchDistance, w);
					});
				}
			}
			this.autoPreventDefault && w.preventDefault();
		}, W = (w) => {
			if (this.isTouch = !0, this.touch0) {
				var D = w.changedTouches;
				let U = b.getBoundingClientRect();
				for (var O = 0; O < D.length; O++) {
					var F = D[O];
					let b = F.clientX - U.left, W = F.clientY - U.top;
					this.touch0.identifier === F.identifier && (this.touch0.x = this.mouseX = b, this.touch0.y = this.mouseY = W, this.listeners.map((D) => {
						D.dragged && D.dragged(b, W, w);
					})), this.touch1 && this.touch1.identifier === F.identifier && (this.touch1.x = this.mouseX = b, this.touch1.y = this.mouseY = W);
				}
				if (this.touch0 && this.touch1) {
					let b = this.touch1.x - this.touch0.x, D = this.touch1.x - this.touch0.x, O = Math.sqrt(b * b + D * D);
					this.listeners.map((b) => {
						b.zoom && b.zoom(this.initialPinchDistance, O, w);
					});
				}
			}
			this.autoPreventDefault && w.preventDefault();
		}, G = (w) => {
			if (this.isTouch = !0, this.touch0) {
				var D = w.changedTouches;
				let U = b.getBoundingClientRect();
				for (var O = 0; O < D.length; O++) {
					var F = D[O];
					let b = F.clientX - U.left, W = F.clientY - U.top;
					if (this.touch0.identifier === F.identifier) if (this.touch0 = null, this.mouseX = b, this.mouseY = W, this.listeners.map((D) => {
						D.up && D.up(b, W, w);
					}), this.touch1) this.touch0 = this.touch1, this.touch1 = null, this.mouseX = this.touch0.x, this.mouseX = this.touch0.x, this.buttonDown = !0, this.listeners.map((b) => {
						b.down && b.down(this.touch0.x, this.touch0.y, w);
					});
					else {
						this.buttonDown = !1;
						break;
					}
					this.touch1 && this.touch1.identifier && (this.touch1 = null);
				}
			}
			this.autoPreventDefault && w.preventDefault();
		};
		return b.addEventListener("mousedown", w, !0), b.addEventListener("mousemove", D, !0), b.addEventListener("mouseup", O, !0), b.addEventListener("wheel", F, !0), b.addEventListener("touchstart", U, {
			passive: !1,
			capture: !1
		}), b.addEventListener("touchmove", W, {
			passive: !1,
			capture: !1
		}), b.addEventListener("touchend", G, {
			passive: !1,
			capture: !1
		}), b.addEventListener("touchcancel", G), {
			mouseDown: w,
			mouseMove: D,
			mouseUp: O,
			mouseWheel: F,
			touchStart: U,
			touchMove: W,
			touchEnd: G
		};
	}
	dispose() {
		let b = this.element;
		b.removeEventListener("mousedown", this.callbacks.mouseDown, !0), b.removeEventListener("mousemove", this.callbacks.mouseMove, !0), b.removeEventListener("mouseup", this.callbacks.mouseUp, !0), b.removeEventListener("wheel", this.callbacks.mouseWheel, !0), b.removeEventListener("touchstart", this.callbacks.touchStart, { capture: !1 }), b.removeEventListener("touchmove", this.callbacks.touchMove, { capture: !1 }), b.removeEventListener("touchend", this.callbacks.touchEnd, { capture: !1 }), b.removeEventListener("touchcancel", this.callbacks.touchEnd), this.listeners.length = 0;
	}
	addListener(b) {
		this.listeners.push(b);
	}
	removeListener(b) {
		let w = this.listeners.indexOf(b);
		w > -1 && this.listeners.splice(w, 1);
	}
}, Touch = class {
	constructor(b, w, D) {
		_defineProperty(this, "identifier", void 0), _defineProperty(this, "x", void 0), _defineProperty(this, "y", void 0), this.identifier = b, this.x = w, this.y = D;
	}
}, Shader = class b {
	getProgram() {
		return this.program;
	}
	getVertexShader() {
		return this.vertexShader;
	}
	getFragmentShader() {
		return this.fragmentShader;
	}
	getVertexShaderSource() {
		return this.vsSource;
	}
	getFragmentSource() {
		return this.fsSource;
	}
	constructor(b, w, D) {
		_defineProperty(this, "vertexShader", void 0), _defineProperty(this, "fragmentShader", void 0), _defineProperty(this, "context", void 0), _defineProperty(this, "vs", null), _defineProperty(this, "vsSource", void 0), _defineProperty(this, "fs", null), _defineProperty(this, "fsSource", void 0), _defineProperty(this, "program", null), _defineProperty(this, "tmp2x2", new Float32Array(4)), _defineProperty(this, "tmp3x3", new Float32Array(9)), _defineProperty(this, "tmp4x4", new Float32Array(16)), this.vertexShader = w, this.fragmentShader = D, this.vsSource = w, this.fsSource = D, this.context = b instanceof ManagedWebGLRenderingContext ? b : new ManagedWebGLRenderingContext(b), this.context.addRestorable(this), this.compile();
	}
	compile() {
		let b = this.context.gl;
		try {
			if (this.vs = this.compileShader(b.VERTEX_SHADER, this.vertexShader), !this.vs) throw Error("Couldn't compile vertex shader.");
			if (this.fs = this.compileShader(b.FRAGMENT_SHADER, this.fragmentShader), !this.fs) throw Error("Couldn#t compile fragment shader.");
			this.program = this.compileProgram(this.vs, this.fs);
		} catch (b) {
			throw this.dispose(), b;
		}
	}
	compileShader(b, w) {
		let D = this.context.gl, O = D.createShader(b);
		if (!O) throw Error("Couldn't create shader.");
		if (D.shaderSource(O, w), D.compileShader(O), !D.getShaderParameter(O, D.COMPILE_STATUS)) {
			let b = "Couldn't compile shader: " + D.getShaderInfoLog(O);
			if (D.deleteShader(O), !D.isContextLost()) throw Error(b);
		}
		return O;
	}
	compileProgram(b, w) {
		let D = this.context.gl, O = D.createProgram();
		if (!O) throw Error("Couldn't compile program.");
		if (D.attachShader(O, b), D.attachShader(O, w), D.linkProgram(O), !D.getProgramParameter(O, D.LINK_STATUS)) {
			let b = "Couldn't compile shader program: " + D.getProgramInfoLog(O);
			if (D.deleteProgram(O), !D.isContextLost()) throw Error(b);
		}
		return O;
	}
	restore() {
		this.compile();
	}
	bind() {
		this.context.gl.useProgram(this.program);
	}
	unbind() {
		this.context.gl.useProgram(null);
	}
	setUniformi(b, w) {
		this.context.gl.uniform1i(this.getUniformLocation(b), w);
	}
	setUniformf(b, w) {
		this.context.gl.uniform1f(this.getUniformLocation(b), w);
	}
	setUniform2f(b, w, D) {
		this.context.gl.uniform2f(this.getUniformLocation(b), w, D);
	}
	setUniform3f(b, w, D, O) {
		this.context.gl.uniform3f(this.getUniformLocation(b), w, D, O);
	}
	setUniform4f(b, w, D, O, F) {
		this.context.gl.uniform4f(this.getUniformLocation(b), w, D, O, F);
	}
	setUniform2x2f(b, w) {
		let D = this.context.gl;
		this.tmp2x2.set(w), D.uniformMatrix2fv(this.getUniformLocation(b), !1, this.tmp2x2);
	}
	setUniform3x3f(b, w) {
		let D = this.context.gl;
		this.tmp3x3.set(w), D.uniformMatrix3fv(this.getUniformLocation(b), !1, this.tmp3x3);
	}
	setUniform4x4f(b, w) {
		let D = this.context.gl;
		this.tmp4x4.set(w), D.uniformMatrix4fv(this.getUniformLocation(b), !1, this.tmp4x4);
	}
	getUniformLocation(b) {
		let w = this.context.gl;
		if (!this.program) throw Error("Shader not compiled.");
		let D = w.getUniformLocation(this.program, b);
		if (!D && !w.isContextLost()) throw Error(`Couldn't find location for uniform ${b}`);
		return D;
	}
	getAttributeLocation(b) {
		let w = this.context.gl;
		if (!this.program) throw Error("Shader not compiled.");
		let D = w.getAttribLocation(this.program, b);
		if (D == -1 && !w.isContextLost()) throw Error(`Couldn't find location for attribute ${b}`);
		return D;
	}
	dispose() {
		this.context.removeRestorable(this);
		let b = this.context.gl;
		this.vs && (b.deleteShader(this.vs), this.vs = null), this.fs && (b.deleteShader(this.fs), this.fs = null), this.program && (b.deleteProgram(this.program), this.program = null);
	}
	static newColoredTextured(w) {
		return new b(w, `
attribute vec4 ${b.POSITION};
attribute vec4 ${b.COLOR};
attribute vec2 ${b.TEXCOORDS};
uniform mat4 ${b.MVP_MATRIX};
varying vec4 v_color;
varying vec2 v_texCoords;

void main () {
	v_color = ${b.COLOR};
	v_texCoords = ${b.TEXCOORDS};
	gl_Position = ${b.MVP_MATRIX} * ${b.POSITION};
}
`, "\n#ifdef GL_ES\n	#define LOWP lowp\n	precision mediump float;\n#else\n	#define LOWP\n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\n\nvoid main () {\n	gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}\n");
	}
	static newTwoColoredTextured(w) {
		return new b(w, `
attribute vec4 ${b.POSITION};
attribute vec4 ${b.COLOR};
attribute vec4 ${b.COLOR2};
attribute vec2 ${b.TEXCOORDS};
uniform mat4 ${b.MVP_MATRIX};
varying vec4 v_light;
varying vec4 v_dark;
varying vec2 v_texCoords;

void main () {
	v_light = ${b.COLOR};
	v_dark = ${b.COLOR2};
	v_texCoords = ${b.TEXCOORDS};
	gl_Position = ${b.MVP_MATRIX} * ${b.POSITION};
}
`, "\n#ifdef GL_ES\n	#define LOWP lowp\n	precision mediump float;\n#else\n	#define LOWP\n#endif\nvarying LOWP vec4 v_light;\nvarying LOWP vec4 v_dark;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\n\nvoid main () {\n	vec4 texColor = texture2D(u_texture, v_texCoords);\n	gl_FragColor.a = texColor.a * v_light.a;\n	gl_FragColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n}\n");
	}
	static newColored(w) {
		return new b(w, `
attribute vec4 ${b.POSITION};
attribute vec4 ${b.COLOR};
uniform mat4 ${b.MVP_MATRIX};
varying vec4 v_color;

void main () {
	v_color = ${b.COLOR};
	gl_Position = ${b.MVP_MATRIX} * ${b.POSITION};
}
`, "\n#ifdef GL_ES\n	#define LOWP lowp\n	precision mediump float;\n#else\n	#define LOWP\n#endif\nvarying LOWP vec4 v_color;\n\nvoid main () {\n	gl_FragColor = v_color;\n}\n");
	}
};
_defineProperty(Shader, "MVP_MATRIX", "u_projTrans"), _defineProperty(Shader, "POSITION", "a_position"), _defineProperty(Shader, "COLOR", "a_color"), _defineProperty(Shader, "COLOR2", "a_color2"), _defineProperty(Shader, "TEXCOORDS", "a_texCoords"), _defineProperty(Shader, "SAMPLER", "u_texture");
var Mesh = class {
	getAttributes() {
		return this.attributes;
	}
	maxVertices() {
		return this.vertices.length / this.elementsPerVertex;
	}
	numVertices() {
		return this.verticesLength / this.elementsPerVertex;
	}
	setVerticesLength(b) {
		this.dirtyVertices = !0, this.verticesLength = b;
	}
	getVertices() {
		return this.vertices;
	}
	maxIndices() {
		return this.indices.length;
	}
	numIndices() {
		return this.indicesLength;
	}
	setIndicesLength(b) {
		this.dirtyIndices = !0, this.indicesLength = b;
	}
	getIndices() {
		return this.indices;
	}
	getVertexSizeInFloats() {
		let b = 0;
		for (var w = 0; w < this.attributes.length; w++) {
			let D = this.attributes[w];
			b += D.numElements;
		}
		return b;
	}
	constructor(b, w, D, O) {
		_defineProperty(this, "attributes", void 0), _defineProperty(this, "context", void 0), _defineProperty(this, "vertices", void 0), _defineProperty(this, "verticesBuffer", null), _defineProperty(this, "verticesLength", 0), _defineProperty(this, "dirtyVertices", !1), _defineProperty(this, "indices", void 0), _defineProperty(this, "indicesBuffer", null), _defineProperty(this, "indicesLength", 0), _defineProperty(this, "dirtyIndices", !1), _defineProperty(this, "elementsPerVertex", 0), this.attributes = w, this.context = b instanceof ManagedWebGLRenderingContext ? b : new ManagedWebGLRenderingContext(b), this.elementsPerVertex = 0;
		for (let b = 0; b < w.length; b++) this.elementsPerVertex += w[b].numElements;
		this.vertices = new Float32Array(D * this.elementsPerVertex), this.indices = new Uint16Array(O), this.context.addRestorable(this);
	}
	setVertices(b) {
		if (this.dirtyVertices = !0, b.length > this.vertices.length) throw Error("Mesh can't store more than " + this.maxVertices() + " vertices");
		this.vertices.set(b, 0), this.verticesLength = b.length;
	}
	setIndices(b) {
		if (this.dirtyIndices = !0, b.length > this.indices.length) throw Error("Mesh can't store more than " + this.maxIndices() + " indices");
		this.indices.set(b, 0), this.indicesLength = b.length;
	}
	draw(b, w) {
		this.drawWithOffset(b, w, 0, this.indicesLength > 0 ? this.indicesLength : this.verticesLength / this.elementsPerVertex);
	}
	drawWithOffset(b, w, D, O) {
		let F = this.context.gl;
		(this.dirtyVertices || this.dirtyIndices) && this.update(), this.bind(b), this.indicesLength > 0 ? F.drawElements(w, O, F.UNSIGNED_SHORT, D * 2) : F.drawArrays(w, D, O), this.unbind(b);
	}
	bind(b) {
		let w = this.context.gl;
		w.bindBuffer(w.ARRAY_BUFFER, this.verticesBuffer);
		let D = 0;
		for (let O = 0; O < this.attributes.length; O++) {
			let F = this.attributes[O], U = b.getAttributeLocation(F.name);
			w.enableVertexAttribArray(U), w.vertexAttribPointer(U, F.numElements, w.FLOAT, !1, this.elementsPerVertex * 4, D * 4), D += F.numElements;
		}
		this.indicesLength > 0 && w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
	}
	unbind(b) {
		let w = this.context.gl;
		for (let D = 0; D < this.attributes.length; D++) {
			let O = this.attributes[D], F = b.getAttributeLocation(O.name);
			w.disableVertexAttribArray(F);
		}
		w.bindBuffer(w.ARRAY_BUFFER, null), this.indicesLength > 0 && w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, null);
	}
	update() {
		let b = this.context.gl;
		this.dirtyVertices && (this.verticesBuffer || (this.verticesBuffer = b.createBuffer()), b.bindBuffer(b.ARRAY_BUFFER, this.verticesBuffer), b.bufferData(b.ARRAY_BUFFER, this.vertices.subarray(0, this.verticesLength), b.DYNAMIC_DRAW), this.dirtyVertices = !1), this.dirtyIndices && (this.indicesBuffer || (this.indicesBuffer = b.createBuffer()), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indicesBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.indices.subarray(0, this.indicesLength), b.DYNAMIC_DRAW), this.dirtyIndices = !1);
	}
	restore() {
		this.verticesBuffer = null, this.indicesBuffer = null, this.update();
	}
	dispose() {
		this.context.removeRestorable(this);
		let b = this.context.gl;
		b.deleteBuffer(this.verticesBuffer), b.deleteBuffer(this.indicesBuffer);
	}
}, VertexAttribute = class {
	constructor(b, w, D) {
		_defineProperty(this, "name", void 0), _defineProperty(this, "type", void 0), _defineProperty(this, "numElements", void 0), this.name = b, this.type = w, this.numElements = D;
	}
}, Position2Attribute = class extends VertexAttribute {
	constructor() {
		super(Shader.POSITION, VertexAttributeType.Float, 2);
	}
}, TexCoordAttribute = class extends VertexAttribute {
	constructor(b = 0) {
		super(Shader.TEXCOORDS + (b == 0 ? "" : b), VertexAttributeType.Float, 2);
	}
}, ColorAttribute = class extends VertexAttribute {
	constructor() {
		super(Shader.COLOR, VertexAttributeType.Float, 4);
	}
}, Color2Attribute = class extends VertexAttribute {
	constructor() {
		super(Shader.COLOR2, VertexAttributeType.Float, 4);
	}
}, VertexAttributeType;
(function(b) {
	b[b.Float = 0] = "Float";
})(VertexAttributeType || (VertexAttributeType = {}));
var GL_ONE = 1, GL_ONE_MINUS_SRC_COLOR = 769, GL_SRC_ALPHA = 770, GL_ONE_MINUS_SRC_ALPHA = 771, GL_DST_COLOR = 774, PolygonBatcher = class b {
	constructor(b, w = !0, D = 10920) {
		if (_defineProperty(this, "context", void 0), _defineProperty(this, "drawCalls", 0), _defineProperty(this, "isDrawing", !1), _defineProperty(this, "mesh", void 0), _defineProperty(this, "shader", null), _defineProperty(this, "lastTexture", null), _defineProperty(this, "verticesLength", 0), _defineProperty(this, "indicesLength", 0), _defineProperty(this, "srcColorBlend", void 0), _defineProperty(this, "srcAlphaBlend", void 0), _defineProperty(this, "dstBlend", void 0), _defineProperty(this, "cullWasEnabled", !1), D > 10920) throw Error("Can't have more than 10920 triangles per batch: " + D);
		this.context = b instanceof ManagedWebGLRenderingContext ? b : new ManagedWebGLRenderingContext(b), this.mesh = new Mesh(b, w ? [
			new Position2Attribute(),
			new ColorAttribute(),
			new TexCoordAttribute(),
			new Color2Attribute()
		] : [
			new Position2Attribute(),
			new ColorAttribute(),
			new TexCoordAttribute()
		], D, D * 3);
		let O = this.context.gl;
		this.srcColorBlend = O.SRC_ALPHA, this.srcAlphaBlend = O.ONE, this.dstBlend = O.ONE_MINUS_SRC_ALPHA;
	}
	begin(w) {
		if (this.isDrawing) throw Error("PolygonBatch is already drawing. Call PolygonBatch.end() before calling PolygonBatch.begin()");
		this.drawCalls = 0, this.shader = w, this.lastTexture = null, this.isDrawing = !0;
		let D = this.context.gl;
		D.enable(D.BLEND), D.blendFuncSeparate(this.srcColorBlend, this.dstBlend, this.srcAlphaBlend, this.dstBlend), b.disableCulling && (this.cullWasEnabled = D.isEnabled(D.CULL_FACE), this.cullWasEnabled && D.disable(D.CULL_FACE));
	}
	setBlendMode(w, D) {
		let O = b.blendModesGL[w], F = D ? O.srcRgbPma : O.srcRgb, U = O.srcAlpha, W = O.dstRgb;
		this.srcColorBlend == F && this.srcAlphaBlend == U && this.dstBlend == W || (this.srcColorBlend = F, this.srcAlphaBlend = U, this.dstBlend = W, this.isDrawing && this.flush(), this.context.gl.blendFuncSeparate(F, W, U, W));
	}
	draw(b, w, D) {
		b == this.lastTexture ? (this.verticesLength + w.length > this.mesh.getVertices().length || this.indicesLength + D.length > this.mesh.getIndices().length) && this.flush() : (this.flush(), this.lastTexture = b);
		let O = this.mesh.numVertices();
		this.mesh.getVertices().set(w, this.verticesLength), this.verticesLength += w.length, this.mesh.setVerticesLength(this.verticesLength);
		let F = this.mesh.getIndices();
		for (let b = this.indicesLength, w = 0; w < D.length; b++, w++) F[b] = D[w] + O;
		this.indicesLength += D.length, this.mesh.setIndicesLength(this.indicesLength);
	}
	flush() {
		if (this.verticesLength != 0) {
			if (!this.lastTexture) throw Error("No texture set.");
			if (!this.shader) throw Error("No shader set.");
			this.lastTexture.bind(), this.mesh.draw(this.shader, this.context.gl.TRIANGLES), this.verticesLength = 0, this.indicesLength = 0, this.mesh.setVerticesLength(0), this.mesh.setIndicesLength(0), this.drawCalls++, b.globalDrawCalls++;
		}
	}
	end() {
		if (!this.isDrawing) throw Error("PolygonBatch is not drawing. Call PolygonBatch.begin() before calling PolygonBatch.end()");
		(this.verticesLength > 0 || this.indicesLength > 0) && this.flush(), this.shader = null, this.lastTexture = null, this.isDrawing = !1;
		let w = this.context.gl;
		w.disable(w.BLEND), b.disableCulling && this.cullWasEnabled && w.enable(w.CULL_FACE);
	}
	getDrawCalls() {
		return this.drawCalls;
	}
	static getAndResetGlobalDrawCalls() {
		let w = b.globalDrawCalls;
		return b.globalDrawCalls = 0, w;
	}
	dispose() {
		this.mesh.dispose();
	}
};
_defineProperty(PolygonBatcher, "disableCulling", !1), _defineProperty(PolygonBatcher, "globalDrawCalls", 0), _defineProperty(PolygonBatcher, "blendModesGL", [
	{
		srcRgb: GL_SRC_ALPHA,
		srcRgbPma: GL_ONE,
		dstRgb: GL_ONE_MINUS_SRC_ALPHA,
		srcAlpha: GL_ONE
	},
	{
		srcRgb: GL_SRC_ALPHA,
		srcRgbPma: GL_ONE,
		dstRgb: GL_ONE,
		srcAlpha: GL_ONE
	},
	{
		srcRgb: GL_DST_COLOR,
		srcRgbPma: GL_DST_COLOR,
		dstRgb: GL_ONE_MINUS_SRC_ALPHA,
		srcAlpha: GL_ONE
	},
	{
		srcRgb: GL_ONE,
		srcRgbPma: GL_ONE,
		dstRgb: GL_ONE_MINUS_SRC_COLOR,
		srcAlpha: GL_ONE
	}
]);
var ShapeRenderer = class {
	constructor(b, w = 10920) {
		if (_defineProperty(this, "context", void 0), _defineProperty(this, "isDrawing", !1), _defineProperty(this, "mesh", void 0), _defineProperty(this, "shapeType", ShapeType.Filled), _defineProperty(this, "color", new Color(1, 1, 1, 1)), _defineProperty(this, "shader", null), _defineProperty(this, "vertexIndex", 0), _defineProperty(this, "tmp", new Vector2()), _defineProperty(this, "srcColorBlend", void 0), _defineProperty(this, "srcAlphaBlend", void 0), _defineProperty(this, "dstBlend", void 0), w > 10920) throw Error("Can't have more than 10920 triangles per batch: " + w);
		this.context = b instanceof ManagedWebGLRenderingContext ? b : new ManagedWebGLRenderingContext(b), this.mesh = new Mesh(b, [new Position2Attribute(), new ColorAttribute()], w, 0);
		let D = this.context.gl;
		this.srcColorBlend = D.SRC_ALPHA, this.srcAlphaBlend = D.ONE, this.dstBlend = D.ONE_MINUS_SRC_ALPHA;
	}
	begin(b) {
		if (this.isDrawing) throw Error("ShapeRenderer.begin() has already been called");
		this.shader = b, this.vertexIndex = 0, this.isDrawing = !0;
		let w = this.context.gl;
		w.enable(w.BLEND), w.blendFuncSeparate(this.srcColorBlend, this.dstBlend, this.srcAlphaBlend, this.dstBlend);
	}
	setBlendMode(b, w, D) {
		this.srcColorBlend = b, this.srcAlphaBlend = w, this.dstBlend = D, this.isDrawing && (this.flush(), this.context.gl.blendFuncSeparate(b, D, w, D));
	}
	setColor(b) {
		this.color.setFromColor(b);
	}
	setColorWith(b, w, D, O) {
		this.color.set(b, w, D, O);
	}
	point(b, w, D) {
		this.check(ShapeType.Point, 1), D || (D = this.color), this.vertex(b, w, D);
	}
	line(b, w, D, O, F) {
		this.check(ShapeType.Line, 2), this.mesh.getVertices(), this.vertexIndex, F || (F = this.color), this.vertex(b, w, F), this.vertex(D, O, F);
	}
	triangle(b, w, D, O, F, U, W, G, K, q) {
		this.check(b ? ShapeType.Filled : ShapeType.Line, 3), this.mesh.getVertices(), this.vertexIndex, G || (G = this.color), K || (K = this.color), q || (q = this.color), b ? (this.vertex(w, D, G), this.vertex(O, F, K), this.vertex(U, W, q)) : (this.vertex(w, D, G), this.vertex(O, F, K), this.vertex(O, F, G), this.vertex(U, W, K), this.vertex(U, W, G), this.vertex(w, D, K));
	}
	quad(b, w, D, O, F, U, W, G, K, q, J, Y, X) {
		this.check(b ? ShapeType.Filled : ShapeType.Line, 3), this.mesh.getVertices(), this.vertexIndex, q || (q = this.color), J || (J = this.color), Y || (Y = this.color), X || (X = this.color), b ? (this.vertex(w, D, q), this.vertex(O, F, J), this.vertex(U, W, Y), this.vertex(U, W, Y), this.vertex(G, K, X), this.vertex(w, D, q)) : (this.vertex(w, D, q), this.vertex(O, F, J), this.vertex(O, F, J), this.vertex(U, W, Y), this.vertex(U, W, Y), this.vertex(G, K, X), this.vertex(G, K, X), this.vertex(w, D, q));
	}
	rect(b, w, D, O, F, U) {
		this.quad(b, w, D, w + O, D, w + O, D + F, w, D + F, U, U, U, U);
	}
	rectLine(b, w, D, O, F, U, W) {
		this.check(b ? ShapeType.Filled : ShapeType.Line, 8), W || (W = this.color);
		let G = this.tmp.set(F - D, w - O);
		G.normalize(), U *= .5;
		let K = G.x * U, q = G.y * U;
		b ? (this.vertex(w + K, D + q, W), this.vertex(w - K, D - q, W), this.vertex(O + K, F + q, W), this.vertex(O - K, F - q, W), this.vertex(O + K, F + q, W), this.vertex(w - K, D - q, W)) : (this.vertex(w + K, D + q, W), this.vertex(w - K, D - q, W), this.vertex(O + K, F + q, W), this.vertex(O - K, F - q, W), this.vertex(O + K, F + q, W), this.vertex(w + K, D + q, W), this.vertex(O - K, F - q, W), this.vertex(w - K, D - q, W));
	}
	x(b, w, D) {
		this.line(b - D, w - D, b + D, w + D), this.line(b - D, w + D, b + D, w - D);
	}
	polygon(b, w, D, O) {
		if (D < 3) throw Error("Polygon must contain at least 3 vertices");
		this.check(ShapeType.Line, D * 2), O || (O = this.color), this.mesh.getVertices(), this.vertexIndex, w <<= 1, D <<= 1;
		let F = b[w], U = b[w + 1], W = w + D;
		for (let G = w, K = w + D - 2; G < K; G += 2) {
			let w = b[G], D = b[G + 1], K = 0, q = 0;
			G + 2 >= W ? (K = F, q = U) : (K = b[G + 2], q = b[G + 3]), this.vertex(w, D, O), this.vertex(K, q, O);
		}
	}
	circle(b, w, D, O, F, U = 0) {
		if (U == 0 && (U = Math.max(1, 6 * MathUtils.cbrt(O) | 0)), U <= 0) throw Error("segments must be > 0.");
		F || (F = this.color);
		let W = 2 * MathUtils.PI / U, G = Math.cos(W), K = Math.sin(W), q = O, J = 0;
		if (b) {
			this.check(ShapeType.Filled, U * 3 + 3), U--;
			for (let b = 0; b < U; b++) {
				this.vertex(w, D, F), this.vertex(w + q, D + J, F);
				let b = q;
				q = G * q - K * J, J = K * b + G * J, this.vertex(w + q, D + J, F);
			}
			this.vertex(w, D, F), this.vertex(w + q, D + J, F);
		} else {
			this.check(ShapeType.Line, U * 2 + 2);
			for (let b = 0; b < U; b++) {
				this.vertex(w + q, D + J, F);
				let b = q;
				q = G * q - K * J, J = K * b + G * J, this.vertex(w + q, D + J, F);
			}
			this.vertex(w + q, D + J, F);
		}
		q = O, J = 0, this.vertex(w + q, D + J, F);
	}
	curve(b, w, D, O, F, U, W, G, K, q) {
		this.check(ShapeType.Line, K * 2 + 2), q || (q = this.color);
		let J = 1 / K, Y = J * J, X = J * J * J, Z = 3 * J, Ji = 3 * Y, Yi = 6 * Y, Q = 6 * X, Xi = b - D * 2 + F, Zi = w - O * 2 + U, Qi = (D - F) * 3 - b + W, $i = (O - U) * 3 - w + G, ea = b, ta = w, na = (D - b) * Z + Xi * Ji + Qi * X, ra = (O - w) * Z + Zi * Ji + $i * X, ia = Xi * Yi + Qi * Q, aa = Zi * Yi + $i * Q, oa = Qi * Q, sa = $i * Q;
		for (; K-- > 0;) this.vertex(ea, ta, q), ea += na, ta += ra, na += ia, ra += aa, ia += oa, aa += sa, this.vertex(ea, ta, q);
		this.vertex(ea, ta, q), this.vertex(W, G, q);
	}
	vertex(b, w, D) {
		let O = this.vertexIndex, F = this.mesh.getVertices();
		F[O++] = b, F[O++] = w, F[O++] = D.r, F[O++] = D.g, F[O++] = D.b, F[O++] = D.a, this.vertexIndex = O;
	}
	end() {
		if (!this.isDrawing) throw Error("ShapeRenderer.begin() has not been called");
		this.flush();
		let b = this.context.gl;
		b.disable(b.BLEND), this.isDrawing = !1;
	}
	flush() {
		if (this.vertexIndex != 0) {
			if (!this.shader) throw Error("No shader set.");
			this.mesh.setVerticesLength(this.vertexIndex), this.mesh.draw(this.shader, this.shapeType), this.vertexIndex = 0;
		}
	}
	check(b, w) {
		if (!this.isDrawing) throw Error("ShapeRenderer.begin() has not been called");
		if (this.shapeType == b) if (this.mesh.maxVertices() - this.mesh.numVertices() < w) this.flush();
		else return;
		else this.flush(), this.shapeType = b;
	}
	dispose() {
		this.mesh.dispose();
	}
}, ShapeType;
(function(b) {
	b[b.Point = 0] = "Point", b[b.Line = 1] = "Line", b[b.Filled = 4] = "Filled";
})(ShapeType || (ShapeType = {}));
var SkeletonDebugRenderer = class b {
	constructor(b) {
		_defineProperty(this, "boneLineColor", new Color(1, 0, 0, 1)), _defineProperty(this, "boneOriginColor", new Color(0, 1, 0, 1)), _defineProperty(this, "attachmentLineColor", new Color(0, 0, 1, .5)), _defineProperty(this, "triangleLineColor", new Color(1, .64, 0, .5)), _defineProperty(this, "pathColor", new Color().setFromString("FF7F00")), _defineProperty(this, "clipColor", new Color(.8, 0, 0, 2)), _defineProperty(this, "aabbColor", new Color(0, 1, 0, .5)), _defineProperty(this, "drawBones", !0), _defineProperty(this, "drawRegionAttachments", !0), _defineProperty(this, "drawBoundingBoxes", !0), _defineProperty(this, "drawMeshHull", !0), _defineProperty(this, "drawMeshTriangles", !0), _defineProperty(this, "drawPaths", !0), _defineProperty(this, "drawSkeletonXY", !1), _defineProperty(this, "drawClipping", !0), _defineProperty(this, "premultipliedAlpha", !1), _defineProperty(this, "scale", 1), _defineProperty(this, "boneWidth", 2), _defineProperty(this, "context", void 0), _defineProperty(this, "bounds", new SkeletonBounds()), _defineProperty(this, "temp", []), _defineProperty(this, "vertices", Utils.newFloatArray(2 * 1024)), this.context = b instanceof ManagedWebGLRenderingContext ? b : new ManagedWebGLRenderingContext(b);
	}
	draw(w, D, O) {
		let F = D.x, U = D.y, W = this.context.gl, G = this.premultipliedAlpha ? W.ONE : W.SRC_ALPHA;
		w.setBlendMode(G, W.ONE, W.ONE_MINUS_SRC_ALPHA);
		let K = D.bones;
		if (this.drawBones) {
			w.setColor(this.boneLineColor);
			for (let b = 0, D = K.length; b < D; b++) {
				let D = K[b];
				if (O && O.indexOf(D.data.name) > -1 || !D.parent) continue;
				let F = D.data.length * D.a + D.worldX, U = D.data.length * D.c + D.worldY;
				w.rectLine(!0, D.worldX, D.worldY, F, U, this.boneWidth * this.scale);
			}
			this.drawSkeletonXY && w.x(F, U, 4 * this.scale);
		}
		if (this.drawRegionAttachments) {
			w.setColor(this.attachmentLineColor);
			let b = D.slots;
			for (let D = 0, O = b.length; D < O; D++) {
				let O = b[D], F = O.getAttachment();
				if (F instanceof RegionAttachment) {
					let b = F, D = this.vertices;
					b.computeWorldVertices(O, D, 0, 2), w.line(D[0], D[1], D[2], D[3]), w.line(D[2], D[3], D[4], D[5]), w.line(D[4], D[5], D[6], D[7]), w.line(D[6], D[7], D[0], D[1]);
				}
			}
		}
		if (this.drawMeshHull || this.drawMeshTriangles) {
			let b = D.slots;
			for (let D = 0, O = b.length; D < O; D++) {
				let O = b[D];
				if (!O.bone.active) continue;
				let F = O.getAttachment();
				if (!(F instanceof MeshAttachment)) continue;
				let U = F, W = this.vertices;
				U.computeWorldVertices(O, 0, U.worldVerticesLength, W, 0, 2);
				let G = U.triangles, K = U.hullLength;
				if (this.drawMeshTriangles) {
					w.setColor(this.triangleLineColor);
					for (let b = 0, D = G.length; b < D; b += 3) {
						let D = G[b] * 2, O = G[b + 1] * 2, F = G[b + 2] * 2;
						w.triangle(!1, W[D], W[D + 1], W[O], W[O + 1], W[F], W[F + 1]);
					}
				}
				if (this.drawMeshHull && K > 0) {
					w.setColor(this.attachmentLineColor), K = (K >> 1) * 2;
					let b = W[K - 2], D = W[K - 1];
					for (let O = 0, F = K; O < F; O += 2) {
						let F = W[O], U = W[O + 1];
						w.line(F, U, b, D), b = F, D = U;
					}
				}
			}
		}
		if (this.drawBoundingBoxes) {
			let b = this.bounds;
			b.update(D, !0), w.setColor(this.aabbColor), w.rect(!1, b.minX, b.minY, b.getWidth(), b.getHeight());
			let O = b.polygons, F = b.boundingBoxes;
			for (let b = 0, D = O.length; b < D; b++) {
				let D = O[b];
				w.setColor(F[b].color), w.polygon(D, 0, D.length);
			}
		}
		if (this.drawPaths) {
			let O = D.slots;
			for (let D = 0, F = O.length; D < F; D++) {
				let F = O[D];
				if (!F.bone.active) continue;
				let U = F.getAttachment();
				if (!(U instanceof PathAttachment)) continue;
				let W = U, G = W.worldVerticesLength, K = this.temp = Utils.setArraySize(this.temp, G, 0);
				W.computeWorldVertices(F, 0, G, K, 0, 2);
				let q = this.pathColor, J = K[2], Y = K[3], X = 0, Z = 0;
				if (W.closed) {
					w.setColor(q);
					let D = K[0], O = K[1], F = K[G - 2], U = K[G - 1];
					X = K[G - 4], Z = K[G - 3], w.curve(J, Y, D, O, F, U, X, Z, 32), w.setColor(b.LIGHT_GRAY), w.line(J, Y, D, O), w.line(X, Z, F, U);
				}
				G -= 4;
				for (let D = 4; D < G; D += 6) {
					let O = K[D], F = K[D + 1], U = K[D + 2], W = K[D + 3];
					X = K[D + 4], Z = K[D + 5], w.setColor(q), w.curve(J, Y, O, F, U, W, X, Z, 32), w.setColor(b.LIGHT_GRAY), w.line(J, Y, O, F), w.line(X, Z, U, W), J = X, Y = Z;
				}
			}
		}
		if (this.drawBones) {
			w.setColor(this.boneOriginColor);
			for (let b = 0, D = K.length; b < D; b++) {
				let D = K[b];
				O && O.indexOf(D.data.name) > -1 || w.circle(!0, D.worldX, D.worldY, 3 * this.scale, this.boneOriginColor, 8);
			}
		}
		if (this.drawClipping) {
			let b = D.slots;
			w.setColor(this.clipColor);
			for (let D = 0, O = b.length; D < O; D++) {
				let O = b[D];
				if (!O.bone.active) continue;
				let F = O.getAttachment();
				if (!(F instanceof ClippingAttachment)) continue;
				let U = F, W = U.worldVerticesLength, G = this.temp = Utils.setArraySize(this.temp, W, 0);
				U.computeWorldVertices(O, 0, W, G, 0, 2);
				for (let b = 0, D = G.length; b < D; b += 2) {
					let D = G[b], O = G[b + 1], F = G[(b + 2) % G.length], U = G[(b + 3) % G.length];
					w.line(D, O, F, U);
				}
			}
		}
	}
	dispose() {}
};
_defineProperty(SkeletonDebugRenderer, "LIGHT_GRAY", new Color(192 / 255, 192 / 255, 192 / 255, 1)), _defineProperty(SkeletonDebugRenderer, "GREEN", new Color(0, 1, 0, 1));
var Renderable = class {
	constructor(b, w, D) {
		_defineProperty(this, "vertices", void 0), _defineProperty(this, "numVertices", void 0), _defineProperty(this, "numFloats", void 0), this.vertices = b, this.numVertices = w, this.numFloats = D;
	}
}, SkeletonRenderer = class b {
	constructor(b, w = !0) {
		_defineProperty(this, "premultipliedAlpha", !1), _defineProperty(this, "tempColor", new Color()), _defineProperty(this, "tempColor2", new Color()), _defineProperty(this, "vertices", void 0), _defineProperty(this, "vertexSize", 8), _defineProperty(this, "twoColorTint", !1), _defineProperty(this, "renderable", new Renderable([], 0, 0)), _defineProperty(this, "clipper", new SkeletonClipping()), _defineProperty(this, "temp", new Vector2()), _defineProperty(this, "temp2", new Vector2()), _defineProperty(this, "temp3", new Color()), _defineProperty(this, "temp4", new Color()), this.twoColorTint = w, w && (this.vertexSize += 4), this.vertices = Utils.newFloatArray(this.vertexSize * 1024);
	}
	draw(w, D, O = -1, F = -1, U = null) {
		let W = this.clipper, G = this.premultipliedAlpha, K = this.twoColorTint, q = null, J = this.renderable, Y, X, Z = D.drawOrder, Ji, Yi = D.color, Q = K ? 12 : 8, Xi = !1;
		O == -1 && (Xi = !0);
		for (let D = 0, Zi = Z.length; D < Zi; D++) {
			let Zi = W.isClipping() ? 2 : Q, Qi = Z[D];
			if (!Qi.bone.active) {
				W.clipEndWithSlot(Qi);
				continue;
			}
			if (O >= 0 && O == Qi.data.index && (Xi = !0), !Xi) {
				W.clipEndWithSlot(Qi);
				continue;
			}
			F >= 0 && F == Qi.data.index && (Xi = !1);
			let $i = Qi.getAttachment(), ea;
			if ($i instanceof RegionAttachment) {
				let w = $i;
				J.vertices = this.vertices, J.numVertices = 4, J.numFloats = Zi << 2, w.computeWorldVertices(Qi, J.vertices, 0, Zi), X = b.QUAD_TRIANGLES, Y = w.uvs, ea = w.region.texture, Ji = w.color;
			} else if ($i instanceof MeshAttachment) {
				let b = $i;
				J.vertices = this.vertices, J.numVertices = b.worldVerticesLength >> 1, J.numFloats = J.numVertices * Zi, J.numFloats > J.vertices.length && (J.vertices = this.vertices = Utils.newFloatArray(J.numFloats)), b.computeWorldVertices(Qi, 0, b.worldVerticesLength, J.vertices, 0, Zi), X = b.triangles, ea = b.region.texture, Y = b.uvs, Ji = b.color;
			} else if ($i instanceof ClippingAttachment) {
				let b = $i;
				W.clipStart(Qi, b);
				continue;
			} else {
				W.clipEndWithSlot(Qi);
				continue;
			}
			if (ea) {
				let b = Qi.color, D = this.tempColor;
				D.r = Yi.r * b.r * Ji.r, D.g = Yi.g * b.g * Ji.g, D.b = Yi.b * b.b * Ji.b, D.a = Yi.a * b.a * Ji.a, G && (D.r *= D.a, D.g *= D.a, D.b *= D.a);
				let O = this.tempColor2;
				Qi.darkColor ? (G ? (O.r = Qi.darkColor.r * D.a, O.g = Qi.darkColor.g * D.a, O.b = Qi.darkColor.b * D.a) : O.setFromColor(Qi.darkColor), O.a = G ? 1 : 0) : O.set(0, 0, 0, 1);
				let F = Qi.data.blendMode;
				if (F != q && (q = F, w.setBlendMode(q, G)), W.isClipping()) {
					W.clipTriangles(J.vertices, X, X.length, Y, D, O, K);
					let b = new Float32Array(W.clippedVertices), F = W.clippedTriangles;
					U && U(b, b.length, Q), w.draw(ea, b, F);
				} else {
					let b = J.vertices;
					if (K) for (let w = 2, F = 0, U = J.numFloats; w < U; w += Q, F += 2) b[w] = D.r, b[w + 1] = D.g, b[w + 2] = D.b, b[w + 3] = D.a, b[w + 4] = Y[F], b[w + 5] = Y[F + 1], b[w + 6] = O.r, b[w + 7] = O.g, b[w + 8] = O.b, b[w + 9] = O.a;
					else for (let w = 2, O = 0, F = J.numFloats; w < F; w += Q, O += 2) b[w] = D.r, b[w + 1] = D.g, b[w + 2] = D.b, b[w + 3] = D.a, b[w + 4] = Y[O], b[w + 5] = Y[O + 1];
					let F = J.vertices.subarray(0, J.numFloats);
					U && U(J.vertices, J.numFloats, Q), w.draw(ea, F, X);
				}
			}
			W.clipEndWithSlot(Qi);
		}
		W.clipEnd();
	}
	getSkeletonClipping() {
		return this.clipper;
	}
};
_defineProperty(SkeletonRenderer, "QUAD_TRIANGLES", [
	0,
	1,
	2,
	2,
	3,
	0
]);
var quad = [
	0,
	0,
	1,
	1,
	1,
	1,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	0,
	0
], QUAD_TRIANGLES = [
	0,
	1,
	2,
	2,
	3,
	0
], WHITE = new Color(1, 1, 1, 1), SceneRenderer = class {
	constructor(b, w, D = !0) {
		_defineProperty(this, "context", void 0), _defineProperty(this, "canvas", void 0), _defineProperty(this, "camera", void 0), _defineProperty(this, "batcher", void 0), _defineProperty(this, "twoColorTint", !1), _defineProperty(this, "batcherShader", void 0), _defineProperty(this, "shapes", void 0), _defineProperty(this, "shapesShader", void 0), _defineProperty(this, "activeRenderer", null), _defineProperty(this, "skeletonRenderer", void 0), _defineProperty(this, "skeletonDebugRenderer", void 0), this.canvas = b, this.context = w instanceof ManagedWebGLRenderingContext ? w : new ManagedWebGLRenderingContext(w), this.twoColorTint = D, this.camera = new OrthoCamera(b.width, b.height), this.batcherShader = D ? Shader.newTwoColoredTextured(this.context) : Shader.newColoredTextured(this.context), this.batcher = new PolygonBatcher(this.context, D), this.shapesShader = Shader.newColored(this.context), this.shapes = new ShapeRenderer(this.context), this.skeletonRenderer = new SkeletonRenderer(this.context, D), this.skeletonDebugRenderer = new SkeletonDebugRenderer(this.context);
	}
	dispose() {
		this.batcher.dispose(), this.batcherShader.dispose(), this.shapes.dispose(), this.shapesShader.dispose(), this.skeletonDebugRenderer.dispose();
	}
	begin() {
		this.camera.update(), this.enableRenderer(this.batcher);
	}
	drawSkeleton(b, w = !1, D = -1, O = -1, F = null) {
		this.enableRenderer(this.batcher), this.skeletonRenderer.premultipliedAlpha = w, this.skeletonRenderer.draw(this.batcher, b, D, O, F);
	}
	drawSkeletonDebug(b, w = !1, D) {
		this.enableRenderer(this.shapes), this.skeletonDebugRenderer.premultipliedAlpha = w, this.skeletonDebugRenderer.draw(this.shapes, b, D);
	}
	drawTexture(b, w, D, O, F, U) {
		this.enableRenderer(this.batcher), U || (U = WHITE);
		var W = 0;
		quad[W++] = w, quad[W++] = D, quad[W++] = U.r, quad[W++] = U.g, quad[W++] = U.b, quad[W++] = U.a, quad[W++] = 0, quad[W++] = 1, this.twoColorTint && (quad[W++] = 0, quad[W++] = 0, quad[W++] = 0, quad[W++] = 0), quad[W++] = w + O, quad[W++] = D, quad[W++] = U.r, quad[W++] = U.g, quad[W++] = U.b, quad[W++] = U.a, quad[W++] = 1, quad[W++] = 1, this.twoColorTint && (quad[W++] = 0, quad[W++] = 0, quad[W++] = 0, quad[W++] = 0), quad[W++] = w + O, quad[W++] = D + F, quad[W++] = U.r, quad[W++] = U.g, quad[W++] = U.b, quad[W++] = U.a, quad[W++] = 1, quad[W++] = 0, this.twoColorTint && (quad[W++] = 0, quad[W++] = 0, quad[W++] = 0, quad[W++] = 0), quad[W++] = w, quad[W++] = D + F, quad[W++] = U.r, quad[W++] = U.g, quad[W++] = U.b, quad[W++] = U.a, quad[W++] = 0, quad[W++] = 0, this.twoColorTint && (quad[W++] = 0, quad[W++] = 0, quad[W++] = 0, quad[W] = 0), this.batcher.draw(b, quad, QUAD_TRIANGLES);
	}
	drawTextureUV(b, w, D, O, F, U, W, G, K, q) {
		this.enableRenderer(this.batcher), q || (q = WHITE);
		var J = 0;
		quad[J++] = w, quad[J++] = D, quad[J++] = q.r, quad[J++] = q.g, quad[J++] = q.b, quad[J++] = q.a, quad[J++] = U, quad[J++] = W, this.twoColorTint && (quad[J++] = 0, quad[J++] = 0, quad[J++] = 0, quad[J++] = 0), quad[J++] = w + O, quad[J++] = D, quad[J++] = q.r, quad[J++] = q.g, quad[J++] = q.b, quad[J++] = q.a, quad[J++] = G, quad[J++] = W, this.twoColorTint && (quad[J++] = 0, quad[J++] = 0, quad[J++] = 0, quad[J++] = 0), quad[J++] = w + O, quad[J++] = D + F, quad[J++] = q.r, quad[J++] = q.g, quad[J++] = q.b, quad[J++] = q.a, quad[J++] = G, quad[J++] = K, this.twoColorTint && (quad[J++] = 0, quad[J++] = 0, quad[J++] = 0, quad[J++] = 0), quad[J++] = w, quad[J++] = D + F, quad[J++] = q.r, quad[J++] = q.g, quad[J++] = q.b, quad[J++] = q.a, quad[J++] = U, quad[J++] = K, this.twoColorTint && (quad[J++] = 0, quad[J++] = 0, quad[J++] = 0, quad[J] = 0), this.batcher.draw(b, quad, QUAD_TRIANGLES);
	}
	drawTextureRotated(b, w, D, O, F, U, W, G, K) {
		this.enableRenderer(this.batcher), K || (K = WHITE);
		let q = w + U, J = D + W, Y = -U, X = -W, Z = O - U, Ji = F - W, Yi = Y, Q = X, Xi = Y, Zi = Ji, Qi = Z, $i = Ji, ea = Z, ta = X, na = 0, ra = 0, ia = 0, aa = 0, oa = 0, sa = 0, ca = 0, la = 0;
		if (G != 0) {
			let b = MathUtils.cosDeg(G), w = MathUtils.sinDeg(G);
			na = b * Yi - w * Q, ra = w * Yi + b * Q, ca = b * Xi - w * Zi, la = w * Xi + b * Zi, oa = b * Qi - w * $i, sa = w * Qi + b * $i, ia = oa + (na - ca), aa = sa + (ra - la);
		} else na = Yi, ra = Q, ca = Xi, la = Zi, oa = Qi, sa = $i, ia = ea, aa = ta;
		na += q, ra += J, ia += q, aa += J, oa += q, sa += J, ca += q, la += J;
		var ua = 0;
		quad[ua++] = na, quad[ua++] = ra, quad[ua++] = K.r, quad[ua++] = K.g, quad[ua++] = K.b, quad[ua++] = K.a, quad[ua++] = 0, quad[ua++] = 1, this.twoColorTint && (quad[ua++] = 0, quad[ua++] = 0, quad[ua++] = 0, quad[ua++] = 0), quad[ua++] = ia, quad[ua++] = aa, quad[ua++] = K.r, quad[ua++] = K.g, quad[ua++] = K.b, quad[ua++] = K.a, quad[ua++] = 1, quad[ua++] = 1, this.twoColorTint && (quad[ua++] = 0, quad[ua++] = 0, quad[ua++] = 0, quad[ua++] = 0), quad[ua++] = oa, quad[ua++] = sa, quad[ua++] = K.r, quad[ua++] = K.g, quad[ua++] = K.b, quad[ua++] = K.a, quad[ua++] = 1, quad[ua++] = 0, this.twoColorTint && (quad[ua++] = 0, quad[ua++] = 0, quad[ua++] = 0, quad[ua++] = 0), quad[ua++] = ca, quad[ua++] = la, quad[ua++] = K.r, quad[ua++] = K.g, quad[ua++] = K.b, quad[ua++] = K.a, quad[ua++] = 0, quad[ua++] = 0, this.twoColorTint && (quad[ua++] = 0, quad[ua++] = 0, quad[ua++] = 0, quad[ua] = 0), this.batcher.draw(b, quad, QUAD_TRIANGLES);
	}
	drawRegion(b, w, D, O, F, U) {
		this.enableRenderer(this.batcher), U || (U = WHITE);
		var W = 0;
		quad[W++] = w, quad[W++] = D, quad[W++] = U.r, quad[W++] = U.g, quad[W++] = U.b, quad[W++] = U.a, quad[W++] = b.u, quad[W++] = b.v2, this.twoColorTint && (quad[W++] = 0, quad[W++] = 0, quad[W++] = 0, quad[W++] = 0), quad[W++] = w + O, quad[W++] = D, quad[W++] = U.r, quad[W++] = U.g, quad[W++] = U.b, quad[W++] = U.a, quad[W++] = b.u2, quad[W++] = b.v2, this.twoColorTint && (quad[W++] = 0, quad[W++] = 0, quad[W++] = 0, quad[W++] = 0), quad[W++] = w + O, quad[W++] = D + F, quad[W++] = U.r, quad[W++] = U.g, quad[W++] = U.b, quad[W++] = U.a, quad[W++] = b.u2, quad[W++] = b.v, this.twoColorTint && (quad[W++] = 0, quad[W++] = 0, quad[W++] = 0, quad[W++] = 0), quad[W++] = w, quad[W++] = D + F, quad[W++] = U.r, quad[W++] = U.g, quad[W++] = U.b, quad[W++] = U.a, quad[W++] = b.u, quad[W++] = b.v, this.twoColorTint && (quad[W++] = 0, quad[W++] = 0, quad[W++] = 0, quad[W] = 0), this.batcher.draw(b.page.texture, quad, QUAD_TRIANGLES);
	}
	line(b, w, D, O, F, U) {
		this.enableRenderer(this.shapes), this.shapes.line(b, w, D, O, F);
	}
	triangle(b, w, D, O, F, U, W, G, K, q) {
		this.enableRenderer(this.shapes), this.shapes.triangle(b, w, D, O, F, U, W, G, K, q);
	}
	quad(b, w, D, O, F, U, W, G, K, q, J, Y, X) {
		this.enableRenderer(this.shapes), this.shapes.quad(b, w, D, O, F, U, W, G, K, q, J, Y, X);
	}
	rect(b, w, D, O, F, U) {
		this.enableRenderer(this.shapes), this.shapes.rect(b, w, D, O, F, U);
	}
	rectLine(b, w, D, O, F, U, W) {
		this.enableRenderer(this.shapes), this.shapes.rectLine(b, w, D, O, F, U, W);
	}
	polygon(b, w, D, O) {
		this.enableRenderer(this.shapes), this.shapes.polygon(b, w, D, O);
	}
	circle(b, w, D, O, F, U = 0) {
		this.enableRenderer(this.shapes), this.shapes.circle(b, w, D, O, F, U);
	}
	curve(b, w, D, O, F, U, W, G, K, q) {
		this.enableRenderer(this.shapes), this.shapes.curve(b, w, D, O, F, U, W, G, K, q);
	}
	end() {
		this.activeRenderer === this.batcher ? this.batcher.end() : this.activeRenderer === this.shapes && this.shapes.end(), this.activeRenderer = null;
	}
	resize(b) {
		let w = this.canvas;
		var D = window.devicePixelRatio || 1, O = Math.round(w.clientWidth * D), F = Math.round(w.clientHeight * D);
		if ((w.width != O || w.height != F) && (w.width = O, w.height = F), this.context.gl.viewport(0, 0, w.width, w.height), b === ResizeMode.Expand) this.camera.setViewport(O, F);
		else if (b === ResizeMode.Fit) {
			let b = w.width, D = w.height, O = this.camera.viewportWidth, F = this.camera.viewportHeight, U = F / O < D / b ? O / b : F / D;
			this.camera.setViewport(b * U, D * U);
		}
		this.camera.update();
	}
	enableRenderer(b) {
		this.activeRenderer !== b && (this.end(), b instanceof PolygonBatcher ? (this.batcherShader.bind(), this.batcherShader.setUniform4x4f(Shader.MVP_MATRIX, this.camera.projectionView.values), this.batcherShader.setUniformi("u_texture", 0), this.batcher.begin(this.batcherShader), this.activeRenderer = this.batcher) : b instanceof ShapeRenderer ? (this.shapesShader.bind(), this.shapesShader.setUniform4x4f(Shader.MVP_MATRIX, this.camera.projectionView.values), this.shapes.begin(this.shapesShader), this.activeRenderer = this.shapes) : this.activeRenderer = this.skeletonDebugRenderer);
	}
}, ResizeMode;
(function(b) {
	b[b.Stretch = 0] = "Stretch", b[b.Expand = 1] = "Expand", b[b.Fit = 2] = "Fit";
})(ResizeMode || (ResizeMode = {}));
var spinnerImage, logoImage, loaded = 0, FADE_IN = 1, FADE_OUT = 1, logoWidth = 165, logoHeight = 108, spinnerSize = 163, LoadingScreen = class {
	constructor(b) {
		if (_defineProperty(this, "renderer", void 0), _defineProperty(this, "logo", null), _defineProperty(this, "spinner", null), _defineProperty(this, "angle", 0), _defineProperty(this, "fadeOut", 0), _defineProperty(this, "fadeIn", 0), _defineProperty(this, "timeKeeper", new TimeKeeper()), _defineProperty(this, "backgroundColor", new Color(.135, .135, .135, 1)), _defineProperty(this, "tempColor", new Color()), this.renderer = b, this.timeKeeper.maxDelta = 9, !logoImage) {
			let b = navigator.userAgent.indexOf("Safari") > -1, w = () => loaded++;
			logoImage = new Image(), logoImage.src = SPINE_LOGO_DATA, b || (logoImage.crossOrigin = "anonymous"), logoImage.onload = w, spinnerImage = new Image(), spinnerImage.src = SPINNER_DATA, b || (spinnerImage.crossOrigin = "anonymous"), spinnerImage.onload = w;
		}
	}
	dispose() {
		var b, w;
		(b = this.logo) == null || b.dispose(), (w = this.spinner) == null || w.dispose();
	}
	draw(b = !1) {
		if (loaded < 2 || b && this.fadeOut > FADE_OUT) return;
		this.timeKeeper.update();
		let w = Math.abs(Math.sin(this.timeKeeper.totalTime + .25));
		this.angle -= this.timeKeeper.delta * 200 * (1 + 1.5 * Math.pow(w, 5));
		let D = this.tempColor, O = this.renderer, F = O.canvas, U = O.context.gl;
		if (O.resize(ResizeMode.Expand), O.camera.position.set(F.width / 2, F.height / 2, 0), O.batcher.setBlendMode(BlendMode.Normal, !0), b) {
			if (this.fadeOut += this.timeKeeper.delta * (this.timeKeeper.totalTime < 1 ? 2 : 1), this.fadeOut > FADE_OUT) return;
			D.setFromColor(this.backgroundColor), w = 1 - this.fadeOut / FADE_OUT, w = 1 - (w - 1) * (w - 1), D.a *= w, D.a > 0 && (O.camera.zoom = 1, O.begin(), O.quad(!0, 0, 0, F.width, 0, F.width, F.height, 0, F.height, D, D, D, D), O.end());
		} else this.fadeIn += this.timeKeeper.delta, this.backgroundColor.a > 0 && (U.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a), U.clear(U.COLOR_BUFFER_BIT)), w = 1;
		w *= Math.min(this.fadeIn / FADE_IN, 1), D.set(w, w, w, w), this.logo || (this.logo = new GLTexture(O.context, logoImage), this.spinner = new GLTexture(O.context, spinnerImage)), O.camera.zoom = Math.max(1, spinnerSize / F.height), O.begin(), O.drawTexture(this.logo, (F.width - logoWidth) / 2, (F.height - logoHeight) / 2, logoWidth, logoHeight, D), this.spinner && O.drawTextureRotated(this.spinner, (F.width - spinnerSize) / 2, (F.height - spinnerSize) / 2, spinnerSize, spinnerSize, spinnerSize / 2, spinnerSize / 2, this.angle, D), O.end();
	}
	drawInCoordinates(b, w) {
		if (loaded < 2) return;
		this.timeKeeper.update();
		let D = this.renderer;
		D.batcher.setBlendMode(BlendMode.Normal, !0), this.logo || (this.logo = new GLTexture(D.context, logoImage), this.spinner = new GLTexture(D.context, spinnerImage));
		let O = b - logoWidth / 2, F = w - logoHeight / 2;
		D.drawTexture(this.logo, O, F, logoWidth, logoHeight), this.angle -= this.timeKeeper.delta * 500, this.spinner && D.drawTextureRotated(this.spinner, O, F - 25, spinnerSize, spinnerSize, spinnerSize / 2, spinnerSize / 2, this.angle);
	}
}, SPINNER_DATA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAALKElEQVR42u2de2iW5R/GPzuqcwfnnKfNmafl5tTNHWzqNi3DEMQykcAoJSsySkspjSIk0iD/07Kf4R+FnVBDUTshZGpWUEJaaiWFgZlUFmXmIe3HNXthyebeZ77P9H13ffBG8Y8H7ut7vff93N/7fu4vGGPiFZiez/Qtw9lytJajfzfw9z/j+efPOv7cV8W+lUNY2a8T/ayTCRsWFLJA5rtUO1LLkV5p9LJeJizQiHeqnlOtmVFtdTGrrZkJCxYXsTgaI6r9MY4/UpNItW4mFDaXsTlaM6qVZlBq3UwofFrJp0HMWJ9DvXUzobCznJ1BzFjWlTLrZkJh/TDWBzFjTgo51s2EgnKI0Rrx+FiOWzNzVaym91Syx5qZsGBWb2ZFa0ZN6dbMhAWTcpkUrRmXD2K5NTNhgVbH0Zpxbl/mWjMTFvRIo0e0ZpzcncnWzISKtvmiMWNRJ4qslwmVXRXsas2Ix8ZwzFqZsGFREYtaM+Oaa1ljrUzYkJ9G/ok6TlzKjJWZVFor0y7c1Zu7WjLiqiGsskamXdHopyT4vALmzS9k/t19uHtKHlOSIMn6xAtARjIZ1sFcUSZ0Y4La+G6M18hS2IlCn4a+WoC0JNL0d/dUupdnUj40g6EJ2VEdMnhrOG/p5f/jUXz8SgmvaGU6KpNRNsLVQV0OdXf24s63h/P2gWoOrBjMCr2GJFQnnxnIM3q5P1PPmaYv+4ev4/C6UtbpV2gzXCkgL5W8Bwt48OIc6ul6Tp+s4+SyASxLiI4+PYCn1bHzDZxvaQW6vZzto7MYnQIpNkf7kp5EuozYUroqEjcNKHHd0Tl9mBPN1pk+hFeieGBnBtog7UXjsj9pWg+m6duecw2cay1OC/uxMC47KmP9OIYfoz1YoC20J/rzRG4quTZK2EAyJGs20qwUbYw0aNRmUxtvfUW/uEtNzc1NB1/X8LVyd15hh82F43AvD+VlXcsSJEZa1CQ3ejleAO7oxR3RDP0XN91X4+NXYb8nkv7UNTwV7e0YTdu7I3g33t7tuaEbNwSZpps2fSyvs4M2Tjhot+jb0Xzbltj8r5j/xVt/6Z1Ob93U1ZYO691EhhzchcHeXosVjcNZysyezLw4xRZt05R+fTeuj8vOj+zKyG0j2aZcVVs6v+QalnjrMFZASQYl2nBoSyz06e3j/Xk8rgWYmMvEICu2pm1HOTuc7okV8FgRj0XukwzanhvCc/F+72TjoQjdObN1OFuDLmh0xP+WHtxiI10ukJlCprb4guiv1fP+avZrS1C7NAkliHZjDtZwMMgqbukAltpMlwuMy2FcEBPqvfLLar5Uqi0hBdEwryy+Mv5n6zkbjTBa+dlMlwvUZFETZKGiFM7tvbhdJ3gSVRO0wzIjnxmvl/J6a6JsGMYGrahtpssFeqbR841S3mhN80OjOaSDEdqd6SjaMKgzgzRK7q1ib3PT9sYyNo7JZoyNFNvRcVMZmy7WOvIuryv/Zvdmdt90+nY0bRp3AvROohFwdwW7dTG7RFlbwlqdrbOBYg005NAQmZU0HWt1rXMBH1Xw0dQ8pmqzoaPmdhun7bHZjNVe9qP9eFQfO1VkUmHjhAVUZ1GtnKFSbjrkrPfy4i4UW5t/6ZxM54J0CqxFe81KpGsQyE4h23oYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjLna+bdOy+IiFquIpGq16Pb79cNYv3IIK/X/ugx+Ui6TVKvYVU9Nc8gX8od8Ir/IN/KPfCQ/yVfyl/6/pfJvLChkQdD6wyqntquCXYuKWJSfRr6D0dEAxV3xlw/khyD+kd/ku/88cHo+09tS3LBpO1HHCVUqcIA6CqB4K+6X6x35L/JM2loXurlWmUmlA5XogOIcK8/If5HncrSWo7F6cKIWPjT/RXGOlWfkv8hzaWsN4uaaysE6WIkOKM6x8oz8F3kusXqo2vxC5jtYiQ4ozrH0TeS5qIZcrB7qkrwdA8U5Vp6R/yLPZV8V+2L14Cl5THGwEh1QnGPlGfkv8lyUlIzFQ1cNYVVHrcjZ0VCcFe9Y+Eb+izy3ceclUl43aFN52DXXssYpnY6a4qFS8ZcP2uIf+e7inRh6pdFrdTGrm8uiHx/L8T2V7NGWzvJBLJ/bl7mTuzO5qBNFDoiJID/IF/KHfCK/yDfyT3O7d/KbfNfS80hNIrU0g9L6HOq1x5iTQo6FNpeLfCQ/yVfyl3xmXYwxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHNk9z4JwJ0SqKTdQkbyEwhU393T6V7zzR6pieR3tE1ITeVXImhe6BXDGZFdRbVeank2TBhcaEMr0rwbixj49IBLL2/L/ffmMuNHfqO9tFZjJYBd1ewO3Lx+IcVfKhqna5nHZYR6XFPH+5R3eeI5t9fx/fvjeC9Jdew5OKZKqFR/RDVKL6vL/f9PJafmyvHsL+a/ff24V6NmjZQbGchVbY6UM2BluqHv1rCqzVZ1KQlkZboepCdQvacPsz5bjTfXao+yMEaDt7Wk9tSIMVGig3TejCtJSM2bSpkPjWPqd1S6Zao+lORSYWmgkOjORRNwZqd5ezMSiHLRooNr5XwWjS6/1XHX9vL2T67N7M1iyXa9JCrYjVrS1gbpJyw6hBfsmiNCYT0P9/A+Wj1/6qGr5YNYFlJBiWJogEzezLz/ZG8/9s4fgtSyuvNYbyp1IONFBtu7sHNv4/j9yAxUHWrdaWsG9+N8XHd+YxkMpSy+aySz841cC5oXbmHCnnI74yxAgZ3YbDeB4PEQCOpBpFNZWwa2ZWRcdnxLsl00crtRB0n2lLg8JNRfDKoM4NsolgBSmw/UMADba1+qpmqfyf6x1u/0a/og3I+aEunP6/i86osqmygcGarF4p54dex/Bo0LqfqOfVwIQ/HW5/RSkwV1oN2WLlHTc82TljAwM4M1O5LWwYKZTjibYXNS0N5KcjKTe10PadfLObFuJwK4ozp+UzXDBTUjL+M5ZcBnRkQV53dMIwNQTu6bSTbVEzbi5awuVByd2E/FgaN0Tc1fKOzBHHV2aAdVSdv6s5NNkp7cSH/++xAng2yyHx+CM/H21YhfdPp+0U1X0TbSZnXx8faG9Aop0MS0cToh1p+iLcpOkLj9t/JOk5eqoPHxnDsyf486an5yqCDK7XZ1O4oZ4dWyy3FSXHUAYq47uyYbMZoGmhpG3DlEFb6uNiVBhpyaHhnBO8oJmfqOROJjzIiP43hJ8UxITqqX56S2Hur2KsOnq3nrE6PPNKPRwrSKbAZrjTQNZmuE7oxYXMZmxWbw9dxWFu4W4ezVedOE6qzI7oyYkY+M7TPeWsPbk2UX1qioSN+E3OZqOR2cReKE+qQRFN0Pi7y73g/UawU1KzezJpXwLz5hczX1ueUPKYkNb6GJQZ+j7/aAfRZREsv+quGsMoamXZBW2Gt5eU0alorEzYsKmJRa/m4NdeyxlqZsCGa84DKnVorEzboC7podis69DfIJmwufHMc7famvvmxZiYsKOtKWbRm1OcW1syEBboSJFozLh/EcmtmwgIluaM14/phrLdmJixYXMTiaM24p5I91syEBTphFOR7Y2tmwgJNvUFOr+tov3UzoaAv44KYUatv62ZCoemdhtG0+hzqrZsJBR08DWLG0gxKrZu50qvpxos3U5NItW4mFPp1ot+lPlpq2lYXs9qamVBZUMiC1ox4pJYjvlfStAu6GmTLcLboMtPIV4/6im5fFfuUi9QIap2MiWP+D96R1vPmsD/fAAAAAElFTkSuQmCC", SPINE_LOGO_DATA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABsCAYAAAALzHKmAAAQ7klEQVR42u3da4xdVRUA4D0zd2Y6nZY59DVtZ1puS9+lzC0YAi2UQ8AAQczFpPgA9VIeIQbirRqJ0cBUBVGjDr/QCKSNRSMmpuODxAdxqhgwxkhFjf6Sxh/+UUNVNGJCzR7uTvas7LXX2q9zzp3em6y0gTN3Zu75utZe5+yztxC9V+/Ve5X9En1Vjd7J6SFbLNF7naPw+l2jh7YHMBWssqMHtlsRdim4qsLtIawaPiHEQOLoNrA9iIkQDnRrVA1qD2LZ8ISoxYqKo13sQAtBWBayQWZUAXGRQM9JjCngDVY0UqJNDbQrMcaGmArdUKpIjbYiQLsCZCyIMQBy8QwnilR4Q5AuCpxFYvRFmBLbEiwKwpsSaWycVQGZBKMrwBjA9BhxDe57u2L2hOoKNCbOrgAZitEVYUxoKSMErQvSxYIzCkguRg5EF4AUhqUlhy/YUKSxcRaKsioYOQhD4I0yYxkR3PcJBcuFysmgsXAWBTMJyBCMIQh9kGGxXIXvexCQXbHGAMrBWTbM2CCpMSMLIxehC77lSJwXGth7M0FzoVJIXXDWQnGmhOkL0ic7YhhtWdGGkAuPAjUWGoF4faCmwBkbZmyUqUCyMqMLRA4+E6IsdTjidUHKBYrh9CnpRcH0ypKxsyOGEYNIIeTCOz91OIJ1QYoB5eAMyZo+MFNnyVTZ0YiRC9EGEMOyAgshxErHsL2XK1gOUgwohtM1a5YNM7Rsu4K0ZkcbRm4mpPBRwFZ5hg9eCqkrUB+csWGGogzNkqEgrdnRhpGLkINudaLgwvVB6oqzCjCTZElb2Y4B0gUjBtEG0ARnDRLjjoG9DwcshtQGlIPTljVjwUySLWNkyRCQVHa0ZUUTRAwgF91a33BEy0VKAcVwwqwZC2bqbOlUurllOxQkJzNyINoAYqjWhYYjWg5SCiiG05Q1U8FMjTIoS8YE6YORi1BHtJ4KIcQEEtTXUWAxpK44YVlPBdO1jCdFWTZIE8bVGEYMIRPcZGBw4HKQcoBiOE1ZMzbMgVQwU6JMAdKEEcuIJogUvg1YCCE2gsCO42DlIIVAKZwpYJaSLVNnSU6XjYHUmxhTmXaFaMO3EYkLqMC+FsLlIoVAKZzMrEnBhJeLfLNlKMrYWRIDCbOkFSSVHbHM6AKRC6/ODUewNqQ+OLlZkxpjUmV8MBbMUJSxyzY3Q1IgTRgxiBRCHdem0KDAUkBh9sRwwjEnAXMMgTnKhFlUtiwkS5rGka4g9SaGgxFmRC7AzTCEEBcyA36dDSsXqAtOLkysjGMwY5XxVChjZ0kuSCo7YlkRQsQQYtDEFsegsLoCxUp7Kpgps2UslFGzJGccSYHUmxhOZqwzEZqAbfUMCisHKIZzgsCpl3MTzMwTpi1bYp2477gyFKUxS7qWbdjY2EBS2dGE0QQRA7gNCyHEdhjE8RhUDlBT9tzgmjWZMFNlSy+Urk1OzCyJlW0XkK4YOQh1cDtcgwBrQmoDWkdgboBZE8mYsJSHlnFbJ+5bwmOPJ7lZkirbC8aRsMvmgtTHjBhGE0QbwJ2egUE1ITVlUC5OmDVdYNrKuN70xM6WoShjlW4464dbtiFIWK6x7GjESEHUUe0iYncnbMdQSE0Z1ITTNOb0hRmjjLtmS9dmJ2rp1jtuKktyyrb6YLEMCUHq2dGG0QQRQ7f72kzc+cJecerne8Wvv7JNPHPvenEkz8Sh3UtFc92QyGt9Yko/HgOLAIUZlItTz5ouMF3KuE+2jFLCQ1D6lm6fLMkBacuOJowYRBUXyfjuHjF3NhdnsfjvAfH6E9vFt9XxKgikEKgJZyyYalzOLeMu2bLbULI6bh+QGwmQ+rgRlumdGEQAao+K56bEL2woVUwOiev0r8OAUjiJrMmFCbvykGxZRAmPitK1dHM7bohyMsuyi/I8f0+e57fJYIKEZXpXo9E4mOf5XTKyLLvCBLETF8uY2SKepkC+dpX4T02Ivepr4HvZcOZ5fmee54fyPL+DmTUhzAs6n4n8bN5dr9f3YdkSg8nsxG0lPBVKVpNjG0/aGhzfLDmRZdnumZmZp8+c+cdZPV555fSr7Xb7s0jJ3i5Pcue4MxKkPPkvvXTqz/B92u32l0wYOzG1fkhcd/py8Rcbyq/vFM/KY1WA95h/3zzP71bfU6JsNpsfgj+P/FlbrdaDGExYyuXvLz8H+DudODH700ajcSM3W6Yu4alQ1spCOTd38jcKocTZbh9+9NixY99XJ8AEUkcpo9W64yH197m5k7+bnZ19QT+J09NHntQhwji/Jg58qi6++ofLxJ8gSFneVw2Ka4QQDfh1Ok4dZavVmtZ/nrm5k7/Vf55O1tRhboUw5+ZOvqyOl5+R/FyOHj32PYVU/tloNG5IXcKrhJIzngwp3fNjomazea/64BuNxts646f50lWv169utw9/DmtqdJQyZFaSJVuV6nq9fqMEof5/vV6/CYBqgJDlee+yAbF/+4i4ZWqZeNfaIfHWzn+Hx0KcEuU9+s8jv3ej0bhVlXOZydX/k0iRMeb8P0D5e6tj8zy/Xb9UJIc56h/yqVOnXul8lmuZ2bJslKmbHG7XrbpCmCXFRLvdfqQD6jTS3Jiy5I4OykM6ADV+1Eu1DmV6evopBORexzDi1L+X/HnGxsb2w3Hm9PSRJ9QxWPOTZdmlKht2hi+w6dkox5bqffI8fye3hDteGqKaHVsHXihKl0tB+h0cY+lute54AGRKDCW89LNTRynHb7ChUWVVjetOnJh9EYBUyPZeNCoOtsbFQwdXi4/esELcd+tq8cCHJ8UXp+viy9efLz7AgamjlKXc1AA1m83DoIRDlFubzeb96hhZLVTlgJ24gttutx+ONa50bHZKRenaeTs1OfpAfnr6yOOdE7EZdNwmlKocntXLNkA5JTGq47Ds+Lf94lWsyfnXleLfnIwJUN4DOnNYwuUxh2A3Ln9XULrfK8t3J27Tu3BVwiOjXJqoAy8UZej1yclGo3GTLN+gu3w+z/P3YaWbQqk3Ne12e4ZC+c8rxWsYytcPiP9RpZxCqWDKnxOiBNlyAUpOnGsoh4tA2Rm8X9xqtT6md5wyZmYe+0YRKL+1S/wYQ3n8zctBl5SBUv5djivfjMOPduIzcizeiYfr9foVvUwZG+XCuzibZKnSceZ5/v4QlKp8y7ElhnJlTeTP7BI/kllRYfzrfvHqFy4UX1vaL/aVlSmROzwbwdS29T2UcEwZF+V8ozM2lu1VY812u/15akypGh3TmFJesJbHHD167IdUxz3YJy5bNySuX1mbvy55CbMLtzU6tjGlsdFptVqfUMc0Go23F4wy1l2dSnbfvpMwVPe9WWVLDsrOJaF9MFu2Wq1PqmNkGce67xiXhTjdNwdlvV6/BgxfbPfBfVCetxi6b9/rlCup65QzM48dl2OjLMv26CibzeZ96sTIzEFdpwQXz9U1yrtVlpR/Zll2Fec65Y6l4pbbx8XHH9kknvzJlPjlHy8Tp29eKT5ou0aJoIT3w3dBlLDzVpfAJEZ1XOdaJZxnOSlvPMjPzxFljIvng914RwebsjYO7uhMyHu46sOfnf3Oz2TXDW6vvYxdFoIXz3Wc8J5zs9n8iOn2IrxTc2BM3Glqdp7dI553uaOjxrhwcob+MyuUpjs6WZZdon8OcigjPx8V+u+GTWFTSWEx3WYcdJ225jNDSE4q0GHCzlueHOyujn6bUWYgeb9ZZUaQPe+GzQ+Gc8+oOGhC+c1d4gfI16n3XDAhQ7+9qE9l01E2Go132GYKyXE1NiFDTcpoNpv3LOYJGWXNErJNW9sEp63p2RKiVPMn1bS1DgxsyhoGdGpmizj+xtXiDYnx7/vFmce3iWdW1cTVGEY4hQ2ZW0nNq8Qm/M6XbXm3S100lwGedFybuvNOibLI+ZS2ceU4eAxiEuvCkfmU8ycToDxETe6FgCBQHeqyAbFvfEhcO7BwDuXFCEbTZF840XeHK0jYcbs2OIGle0mVJ/mmnClEPQqxyTY5I8/zFhif7fSZee4bnrPOU4AssnRXHaVTCTd14dRDY3UbTIiSeFhsN/aMjgnqthFx880rxX3yATL5p3y4LPXzOaBkUyBjZMlYpbtQlIOBD475ZEusjMNSvkXe6VEoJVDkeZ2dzIfIFsRzU+JF2OyM9M9fTC/6SUYOyFQPjQ2nWiUjxnPfw5EeHqMWIqAeIFsAU847lJM2JM6xsewt1OIDLs99P7ZFHNdB/upS8XtPiD7PfLuCXJNolYyyFiNI/Zit65ItrOVafFbHcFohY7hPTN21Tjz4uc3iqfsnxKdX1MTl1OoYRFaMsToGB6Trw2JFP/OdZC2hJZ7ZkrMoAbbSGmelDJ91hFKuJeS7jlBMkJnrAqqJlgMUZS/dArPlGHNdSg5M3xXXtvquuEatvIYtDRhpxbUJuIgqsU5lGWtUploK0KuEU9mSW8YpmFQ556xNuYW7NiW13B+FkMiKHIy+C6eGgBxJvMR0oSv5hi6+z4HJyZoU0M2RVvDlrOQbcxVfX5AhZbuqy0v7ZstYMLHlAVlLTF9ALLbvu9Y5Zylpn/XOsd0ibIvxr2KCLHpp6SCUIdnSZSF+WzfOhem6GD+1KwR3Z4jNjrtDpNoZwmWd8yrupZN6Hx3fbMmFSe0Swdq2ZIPjxk1112Duo8OBGLrBkw/IoncdK2XHsdC9dHz204m50xh3tzFq1zFqtzHXrfCw7OgDsqyNnZLszVijsmXgrmNcmGtS78lIoMX2aJz03fKO2sDJddPQSCDPiQ1DfWBycY6XtXstc2PQKuxgG2McmXTPb9/9vmuJYXKyJrWjbeg+3xPM4O73nWqvbyw7xgZZSJbEUBa157cNJjdr2vb+5iA1YV3HxYscj30PDCEHIgcjtfm8K8hSsmRotkwFk5s1TTghUAopB6xrjHMBBkI0YYTZ0dZlxwLpkiWDULpmy5gwqayZgZNkA7oKQQCxctByYg0XIIEQQuRitGVHblMTA2ShKGPDpC6wu+DEgJqg2rDGDBtAF4Q6RAojp1xXGmSMbImVcR+YWNY04eQCtUG1ofUJ2/uvcETIgUhhdAE5GAlkKShjwHTNmhhODKgJqQ2sC14uOgyfD0IbRF+MlQaZAiZWyn2yJsTJATqGnHQO2Jhh+xlsACFCG0QbRtdyzQFZCZSxYPpmTS7Q5cjJHYNBYIkZpu99HoUQ/o4QIYSIZUZfjJ4ZMjZI32wZBDMU5yhy8pZTULl4XYP5fagMyEVoy4oupTpGduwnkloSlKEwY+AcQU4MhRTD6ovXBRwFzwWgCSEF0QVjJUGmgEllTS5OLlCIlIN1mS9mx/cZ5eLDALpCTI2RAhkTZQqYoTgpoCPECbaBHQ2ETL3PUl98ECAXYijG0OyYAmQoTG7W5ODkAF1CnVgm2JQx4okPA+gCMTbGskBGgRmaOblAh5GTORIrfKFx4VH4EIAxIXIxlg2SBbMvECY3e7oApbDaIgQu5/2HmeEKEINYiwSRi7EQkLFgumZOCuggctKGI4ULZN/vMeSLj0AYMytWEqMLzFg4fYDaoKaC6wvOFR4FkIPQFaILxrJAOsHsc/zlfYDWXE8qF22s8Pz5KHxcgEVALBtjJXBSSEOwFhk1Zgy4hitCT4hVw+gFs8/zwxqIBbUgyK7fcyA0PD9XX4iVxhiC0xdof6STWCsoBmKF7+cVCWFXQYyBMxRpf+STX1b0x45AhN0OMSrOGEirhrY/dfQAdjvS7oy+WCF6r1RIFxXWvlTRg1YVqFWBmxZbD99ig9pt0YPQw9rD1nstVri9V+/Ve3XrS/wfim4P5fIFxLoAAAAASUVORK5CYII=", animatonTypeRegExp = /\[([^\]]+)\]/g;
function castValue(b, w, D) {
	switch (b) {
		case "string": return castString(w, D);
		case "number": return castNumber(w, D);
		case "boolean": return castBoolean(w, D);
		case "array-number": return castArrayNumber(w, D);
		case "array-string": return castArrayString(w, D);
		case "object": return castObject(w, D);
		case "fitType": return isFitType(w) ? w : D;
		case "offScreenUpdateBehaviourType": return isOffScreenUpdateBehaviourType(w) ? w : D;
		case "animationsInfo": return castToAnimationsInfo(w) || D;
		default: break;
	}
}
function castBoolean(b, w = "") {
	return b === "true" || b === "";
}
function castString(b, w = "") {
	return b === null ? w : b;
}
function castNumber(b, w = 0) {
	if (b === null) return w;
	let D = parseFloat(b);
	return Number.isNaN(D) ? w : D;
}
function castArrayNumber(b, w = void 0) {
	return b === null ? w : b.split(",").reduce((b, w) => {
		let D = parseInt(w);
		return isNaN(D) || b.push(D), b;
	}, []);
}
function castArrayString(b, w = void 0) {
	return b === null ? w : b.split(",");
}
function castObject(b, w = void 0) {
	return b === null ? null : JSON.parse(b);
}
function castToAnimationsInfo(b) {
	if (b === null) return;
	let w = b.match(animatonTypeRegExp);
	if (w) return w.reduce((w, D) => {
		let [O, F, U, W, G] = D.slice(1, -1).split(",").map((b) => b.trim());
		if (O === "loop") {
			if (!Number.isInteger(Number(F))) throw Error(`Track index of cycle in ${D} must be a positive integer number, instead it is ${F}. Original value: ${b}`);
			let O = w[F] || (w[F] = { animations: [] });
			if (O.cycle = !0, U !== void 0) {
				let w = Number(U);
				if (Number.isNaN(w)) throw Error(`If present, duration of last animation of cycle in ${D} must be a positive integer number, instead it is ${U}. Original value: ${b}`);
				O.repeatDelay = w;
			}
			return w;
		}
		let K = Number(O);
		if (!Number.isInteger(K)) throw Error(`Track index in ${D} must be a positive integer number, instead it is ${O}. Original value: ${b}`);
		let q;
		if (W !== void 0 && (q = parseFloat(W), isNaN(q))) throw Error(`Delay in ${D} must be a positive number, instead it is ${W}. Original value: ${b}`);
		let J;
		if (G !== void 0 && (J = parseFloat(G), isNaN(J))) throw Error(`mixDuration in ${D} must be a positive number, instead it is ${G}. Original value: ${b}`);
		return (w[O] || (w[O] = { animations: [] })).animations.push({
			animationName: F,
			loop: (U || "").trim().toLowerCase() === "true",
			delay: q,
			mixDuration: J
		}), w;
	}, {});
}
function isFitType(b) {
	return b === "fill" || b === "width" || b === "height" || b === "contain" || b === "cover" || b === "none" || b === "scaleDown" || b === "origin";
}
function isOffScreenUpdateBehaviourType(b) {
	return b === "pause" || b === "update" || b === "pose";
}
var base64RegExp = /^(([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==))$/;
function isBase64(b) {
	return base64RegExp.test(b);
}
var SpineWebComponentOverlay = class b extends HTMLElement {
	static getOrCreateOverlay(w) {
		let D = w || b.OVERLAY_ID, O = b.OVERLAY_LIST.get(D);
		return O || (O = document.createElement("spine-overlay"), O.setAttribute("overlay-id", D), document.body.appendChild(O)), O;
	}
	constructor() {
		super(), _defineProperty(this, "widgets", []), _defineProperty(this, "renderer", void 0), _defineProperty(this, "assetManager", void 0), _defineProperty(this, "overlayId", void 0), _defineProperty(this, "noAutoParentTransform", !1), _defineProperty(this, "overflowTop", .2), _defineProperty(this, "overflowBottom", 0), _defineProperty(this, "overflowLeft", 0), _defineProperty(this, "overflowRight", 0), _defineProperty(this, "root", void 0), _defineProperty(this, "div", void 0), _defineProperty(this, "boneFollowersParent", void 0), _defineProperty(this, "canvas", void 0), _defineProperty(this, "fps", void 0), _defineProperty(this, "fpsAppended", !1), _defineProperty(this, "intersectionObserver", void 0), _defineProperty(this, "resizeObserver", void 0), _defineProperty(this, "input", void 0), _defineProperty(this, "overflowLeftSize", 0), _defineProperty(this, "overflowTopSize", 0), _defineProperty(this, "lastCanvasBaseWidth", 0), _defineProperty(this, "lastCanvasBaseHeight", 0), _defineProperty(this, "zIndex", void 0), _defineProperty(this, "disposed", !1), _defineProperty(this, "loaded", !1), _defineProperty(this, "running", !1), _defineProperty(this, "visible", !0), _defineProperty(this, "appendedToBody", !0), _defineProperty(this, "hasParentTransform", !0), _defineProperty(this, "time", new TimeKeeper()), _defineProperty(this, "visibilityChangeCallback", () => {
			document.hidden ? this.visible = !1 : (this.visible = !0, this.startRenderingLoop());
		}), _defineProperty(this, "windowResizeCallback", () => this.resizedCallback(!0)), _defineProperty(this, "resizedCallback", (b = !1) => {
			this.updateCanvasSize(b);
		}), _defineProperty(this, "orientationChangedCallback", () => {
			this.updateCanvasSize(), this.scrolledCallback();
		}), _defineProperty(this, "scrolledCallback", () => {}), _defineProperty(this, "loadedCallback", () => {
			this.updateCanvasSize(), this.scrolledCallback(), this.loaded || (this.loaded = !0, this.parentElement.appendChild(this));
		}), _defineProperty(this, "tempFollowBoneVector", new Vector3()), _defineProperty(this, "pointerCanvasX", 1), _defineProperty(this, "pointerCanvasY", 1), _defineProperty(this, "pointerWorldX", 1), _defineProperty(this, "pointerWorldY", 1), _defineProperty(this, "tempVector", new Vector3()), _defineProperty(this, "lastViewportWidth", 0), _defineProperty(this, "lastViewportHeight", 0), _defineProperty(this, "lastDPR", 0), _defineProperty(this, "dprScale", 1), this.root = this.attachShadow({ mode: "open" }), this.div = document.createElement("div"), this.div.style.position = "absolute", this.div.style.top = "0", this.div.style.left = "0", this.div.style.setProperty("pointer-events", "none"), this.div.style.overflow = "hidden", this.root.appendChild(this.div), this.canvas = document.createElement("canvas"), this.boneFollowersParent = document.createElement("div"), this.div.appendChild(this.canvas), this.canvas.style.position = "absolute", this.canvas.style.top = "0", this.canvas.style.left = "0", this.div.appendChild(this.boneFollowersParent), this.boneFollowersParent.style.position = "absolute", this.boneFollowersParent.style.top = "0", this.boneFollowersParent.style.left = "0", this.boneFollowersParent.style.whiteSpace = "nowrap", this.boneFollowersParent.style.setProperty("pointer-events", "none"), this.boneFollowersParent.style.transform = "translate(0px,0px)", this.canvas.style.setProperty("pointer-events", "none"), this.canvas.style.transform = "translate(0px,0px)", this.fps = document.createElement("span"), this.fps.style.position = "fixed", this.fps.style.top = "0", this.fps.style.left = "0";
		let b = new ManagedWebGLRenderingContext(this.canvas, { alpha: !0 });
		this.renderer = new SceneRenderer(this.canvas, b), this.assetManager = new AssetManager(b);
	}
	connectedCallback() {
		this.appendedToBody = this.parentElement === document.body;
		let w = this.getAttribute("overlay-id");
		w || (w = b.OVERLAY_ID, this.setAttribute("overlay-id", w)), this.assetManager.setCache(AssetCache.getCache(w));
		let D = b.OVERLAY_LIST.get(w);
		if (D && D !== this) throw Error(`"SpineWebComponentOverlay - You cannot have two spine-overlay with the same overlay-id: ${w}"`);
		b.OVERLAY_LIST.set(w, this), document.readyState === "complete" ? this.loadedCallback() : window.addEventListener("load", this.loadedCallback), window.screen.orientation.addEventListener("change", this.orientationChangedCallback), this.intersectionObserver = new IntersectionObserver((b) => {
			for (let w of b) {
				let { target: b, intersectionRatio: D } = w, { isIntersecting: O } = w;
				for (let w of this.widgets) w.getHostElement() == b && (O === void 0 && (O = D > 0), w.onScreen = O, O && (w.onScreenFunction(w), w.onScreenAtLeastOnce = !0));
			}
		}, { rootMargin: "30px 20px 30px 20px" }), this.appendedToBody ? window.addEventListener("resize", this.windowResizeCallback) : this.hasCssTweakOff() ? this.hasParentTransform = !1 : this.parentElement.style.transform = "translateZ(0)", this.resizeObserver = new ResizeObserver(() => this.resizedCallback()), this.resizeObserver.observe(this.parentElement);
		for (let b of this.widgets) {
			var O;
			(O = this.intersectionObserver) == null || O.observe(b.getHostElement());
		}
		this.input = this.setupDragUtility(), document.addEventListener("visibilitychange", this.visibilityChangeCallback), this.startRenderingLoop();
	}
	disconnectedCallback() {
		var w, D, O;
		let F = this.getAttribute("overlay-id");
		F && b.OVERLAY_LIST.delete(F), window.removeEventListener("load", this.loadedCallback), window.removeEventListener("resize", this.windowResizeCallback), document.removeEventListener("visibilitychange", this.visibilityChangeCallback), window.screen.orientation.removeEventListener("change", this.orientationChangedCallback), (w = this.intersectionObserver) == null || w.disconnect(), (D = this.resizeObserver) == null || D.disconnect(), (O = this.input) == null || O.dispose();
	}
	static get observedAttributes() {
		return Object.keys(b.attributesDescription);
	}
	attributeChangedCallback(w, D, O) {
		let { type: F, propertyName: U, defaultValue: W } = b.attributesDescription[w];
		this[U] = castValue(F, O, W);
	}
	hasCssTweakOff() {
		return this.noAutoParentTransform && getComputedStyle(this.parentElement).transform === "none";
	}
	dispose() {
		for (let b of [...this.widgets]) b.dispose();
		this.remove(), this.widgets.length = 0, this.renderer.dispose(), this.disposed = !0, this.assetManager.dispose();
	}
	addWidget(b) {
		var w;
		if (this.widgets.push(b), (w = this.intersectionObserver) == null || w.observe(b.getHostElement()), this.loaded) {
			let w = this.compareDocumentPosition(b);
			w & Node.DOCUMENT_POSITION_FOLLOWING && !(w & Node.DOCUMENT_POSITION_DISCONNECTED) && this.parentElement.appendChild(this);
		}
		this.updateZIndexIfNecessary(b);
	}
	removeWidget(b) {
		var w;
		let D = this.widgets.findIndex((w) => w === b);
		return D === -1 ? !1 : (this.widgets.splice(D, 1), (w = this.intersectionObserver) == null || w.unobserve(b.getHostElement()), !0);
	}
	addSlotFollowerElement(b) {
		this.boneFollowersParent.appendChild(b), this.resizedCallback();
	}
	startRenderingLoop() {
		if (this.running) return;
		let w = () => {
			let w = this.time.delta;
			for (let { skeleton: b, state: D, update: O, onScreen: F, offScreenUpdateBehaviour: U, beforeUpdateWorldTransforms: W, afterUpdateWorldTransforms: G } of this.widgets) !b || !D || !F && U === "pause" || (O ? O(w, b, D) : (D.update(w), b.update(w), (F || !F && U === "pose") && (D.apply(b), W(w, b, D), b.updateWorldTransform(Physics.update), G(w, b, D))));
			b.SHOW_FPS ? (this.fpsAppended || (this.div.appendChild(this.fps), this.fpsAppended = !0), this.fps.innerText = this.time.framesPerSecond.toFixed(2) + " fps") : this.fpsAppended && (this.div.removeChild(this.fps), this.fpsAppended = !1);
		}, D = (b, w, D, O) => {
			this.renderer.context.gl.clearColor(b, w, D, O), this.renderer.context.gl.clear(this.renderer.context.gl.COLOR_BUFFER_BIT);
		}, O = (b) => {
			this.renderer.end(), this.renderer.begin(), this.renderer.context.gl.enable(this.renderer.context.gl.SCISSOR_TEST), this.renderer.context.gl.scissor(this.screenToWorldLength(b.x), this.canvas.height - this.screenToWorldLength(b.y + b.height), this.screenToWorldLength(b.width), this.screenToWorldLength(b.height));
		}, F = () => {
			this.renderer.end(), this.renderer.context.gl.disable(this.renderer.context.gl.SCISSOR_TEST), this.renderer.begin();
		}, U = () => {
			D(0, 0, 0, 0);
			let b = this.renderer;
			b.begin();
			let w, U = 0, W = 0;
			if (!this.appendedToBody) {
				w = this.parentElement.getBoundingClientRect();
				let b = getComputedStyle(this.parentElement);
				U = w.left + parseFloat(b.borderLeftWidth), W = w.top + parseFloat(b.borderTopWidth);
			}
			let G = new Vector3();
			for (let w of this.widgets) {
				let { skeleton: D, pma: X, bounds: Z, debug: Ji, offsetX: Yi, offsetY: Q, dragX: Xi, dragY: Zi, fit: Qi, spinner: $i, loading: ea, clip: ta, drag: na } = w;
				if (w.isOffScreenAndWasMoved()) continue;
				let ra = w.getHostElement().getBoundingClientRect();
				ra.x = ra.left + this.overflowLeftSize, ra.y = ra.top + this.overflowTopSize, this.appendedToBody || (ra.x -= U, ra.y -= W);
				let { padLeft: ia, padRight: aa, padTop: oa, padBottom: sa, xAxis: ca, yAxis: la } = w, ua = (ia - aa) / 2, da = (oa - sa) / 2, fa = ra.x + ra.width * (ca + .5 + ua), pa = ra.y + ra.height * (-la + .5 + da) - 1;
				this.screenToWorld(G, fa, pa);
				let ma = G.x, ha = G.y, ga = 1 - (ia + aa), _a = 1 - (oa + sa), va = this.screenToWorldLength(ra.width * ga), ya = this.screenToWorldLength(ra.height * _a);
				if (ta && O(ra), ea) {
					$i && (w.loadingScreen || (w.loadingScreen = new LoadingScreen(b)), w.loadingScreen.drawInCoordinates(ma, ha)), ta && F();
					continue;
				}
				if (D) {
					if (Qi !== "origin") {
						let { x: b, y: w, width: O, height: F } = Z;
						if (O <= 0 || F <= 0) continue;
						let U = va / O, W = ya / F, G = D.scaleX, K = D.scaleY;
						Qi === "fill" ? (G = U, K = W) : Qi === "width" ? (G = U, K = U) : Qi === "height" ? (G = W, K = W) : Qi === "contain" ? F * U > ya ? (G = W, K = W) : (G = U, K = U) : Qi === "cover" ? F * U < ya ? (G = W, K = W) : (G = U, K = U) : Qi === "scaleDown" && (O > va || F > ya) && (F * U > ya ? (G = W, K = W) : (G = U, K = U));
						let q = (b + O / 2) * G, J = (w + F / 2) * K;
						ma -= q, ha -= J, Qi !== "none" && (D.scaleX !== G || D.scaleY !== K) && (D.scaleX = G, D.scaleY = K, D.updateWorldTransform(Physics.update));
					}
					let O = ma + Yi * window.devicePixelRatio + Xi, U = ha + Q * window.devicePixelRatio + Zi;
					if (w.worldX = O, w.worldY = U, b.drawSkeleton(D, X, -1, -1, (b, w, D) => {
						for (let F = 0; F < w; F += D) b[F] = b[F] + O, b[F + 1] = b[F + 1] + U;
					}), Ji) {
						let { x: w, y: F, width: W, height: G } = Z;
						na && b.rect(!0, w * D.scaleX + O, F * D.scaleY + U, W * D.scaleX, G * D.scaleY, Y), b.rect(!1, w * D.scaleX + O, F * D.scaleY + U, W * D.scaleX, G * D.scaleY, J);
						let X = (w + W / 2) * D.scaleX + O, Ji = (F + G / 2) * D.scaleY + U;
						b.circle(!0, X, Ji, 10, J);
						let Yi = D.getRootBone();
						b.circle(!0, Yi.x + O, Yi.y + U, 10, K), b.circle(!0, ma, ha, 10, q), b.line(ma, ha, X, Ji, q);
					}
					ta && F();
				}
			}
			b.end();
		}, W = () => {
			for (let b of this.widgets) if (!(b.isOffScreenAndWasMoved() || !b.skeleton)) for (let w of b.boneFollowerList) {
				let { slot: D, bone: O, element: F, followVisibility: U, followRotation: W, followOpacity: G, followScale: K } = w, { worldX: q, worldY: J } = b;
				if (this.worldToScreen(this.tempFollowBoneVector, O.worldX + q, O.worldY + J), Number.isNaN(this.tempFollowBoneVector.x)) continue;
				let Y = this.tempFollowBoneVector.x - this.overflowLeftSize, X = this.tempFollowBoneVector.y - this.overflowTopSize;
				this.appendedToBody && (Y += window.scrollX, X += window.scrollY), F.style.transform = `translate(calc(-50% + ${Y.toFixed(2)}px),calc(-50% + ${X.toFixed(2)}px))` + (W ? ` rotate(${-O.getWorldRotationX()}deg)` : "") + (K ? ` scale(${O.getWorldScaleX()}, ${O.getWorldScaleY()})` : ""), F.style.display = "", U && !D.attachment ? F.style.opacity = "0" : G && (F.style.opacity = `${D.color.a}`);
			}
		}, G = () => {
			if (this.disposed || !this.isConnected || !this.visible) {
				this.running = !1;
				return;
			}
			requestAnimationFrame(G), this.loaded && (this.time.update(), this.translateCanvas(), w(), U(), W());
		};
		requestAnimationFrame(G), this.running = !0;
		let K = new Color(1, 0, 0, 1), q = new Color(0, 1, 0, 1), J = new Color(0, 0, 1, 1);
		new Color(1, 1, 1, .3);
		let Y = new Color(1, 0, 0, .3);
	}
	updatePointer(b) {
		if (this.pointerCanvasX = b.x - window.scrollX, this.pointerCanvasY = b.y - window.scrollY, !this.appendedToBody) {
			let b = this.parentElement.getBoundingClientRect();
			this.pointerCanvasX -= b.left, this.pointerCanvasY -= b.top;
		}
		let w = this.tempVector;
		w.set(this.pointerCanvasX, this.pointerCanvasY, 0), this.renderer.camera.screenToWorld(w, this.canvas.clientWidth, this.canvas.clientHeight), !(Number.isNaN(w.x) || Number.isNaN(w.y)) && (this.pointerWorldX = w.x, this.pointerWorldY = w.y);
	}
	updateWidgetPointer(b) {
		return b.worldX === Infinity ? !1 : (b.pointerWorldX = this.pointerWorldX - b.worldX, b.pointerWorldY = this.pointerWorldY - b.worldY, !0);
	}
	setupDragUtility() {
		let b = new Input(document.body, !1), w = new Vector2(), D = (b) => {
			let D = b instanceof MouseEvent ? b : b.changedTouches[0];
			return w.x = D.pageX + this.overflowLeftSize, w.y = D.pageY + this.overflowTopSize, w;
		}, O = 0, F = 0;
		return b.addListener({
			moved: (b, w, O) => {
				let F = D(O);
				this.updatePointer(F);
				for (let b of this.widgets) !this.updateWidgetPointer(b) || !b.onScreen || b.pointerEventUpdate("move", O);
			},
			down: (b, w, U) => {
				let W = D(U);
				this.updatePointer(W);
				for (let b of this.widgets) if (!(!this.updateWidgetPointer(b) || b.isOffScreenAndWasMoved()) && (b.pointerEventUpdate("down", U), b.interactive && b.pointerInsideBounds || !b.interactive && b.isPointerInsideBounds())) {
					if (!b.drag) continue;
					b.dragging = !0, U == null || U.preventDefault();
				}
				O = W.x, F = W.y;
			},
			dragged: (b, w, U) => {
				let W = D(U), G = W.x - O, K = W.y - F;
				this.updatePointer(W);
				for (let b of this.widgets) {
					if (!this.updateWidgetPointer(b) || b.isOffScreenAndWasMoved() || (b.pointerEventUpdate("drag", U), !b.dragging)) continue;
					let w = b.skeleton;
					b.dragX += this.screenToWorldLength(G), b.dragY -= this.screenToWorldLength(K), w.physicsTranslate(G, -K), U == null || U.preventDefault(), U == null || U.stopPropagation();
				}
				O = W.x, F = W.y;
			},
			up: (b, w, D) => {
				for (let b of this.widgets) b.dragging = !1, b.pointerInsideBounds && b.pointerEventUpdate("up", D);
			}
		}), b;
	}
	updateCanvasSize(b = !1) {
		let { width: w, height: D } = this.getViewportSize();
		if (!b && this.lastCanvasBaseWidth !== w || this.lastCanvasBaseHeight !== D) {
			this.lastCanvasBaseWidth = w, this.lastCanvasBaseHeight = D, this.overflowLeftSize = this.overflowLeft * w, this.overflowTopSize = this.overflowTop * D;
			let b = w * (1 + (this.overflowLeft + this.overflowRight)), O = D * (1 + (this.overflowTop + this.overflowBottom));
			this.canvas.style.width = b + "px", this.canvas.style.height = O + "px", this.resize(b, O);
		}
		if (this.div.style.display = "none", this.appendedToBody) {
			let { width: b, height: w } = this.getPageSize();
			this.div.style.width = b + "px", this.div.style.height = w + "px";
		} else this.hasCssTweakOff() ? (this.div.style.width = this.parentElement.clientWidth + "px", this.div.style.height = this.parentElement.clientHeight + "px", this.canvas.style.transform = `translate(${-this.overflowLeftSize}px,${-this.overflowTopSize}px)`) : (this.div.style.width = this.parentElement.scrollWidth + "px", this.div.style.height = this.parentElement.scrollHeight + "px");
		this.div.style.display = "";
	}
	resize(b, w) {
		let D = this.canvas;
		D.width = Math.round(this.screenToWorldLength(b)), D.height = Math.round(this.screenToWorldLength(w)), this.renderer.context.gl.viewport(0, 0, D.width, D.height), this.renderer.camera.setViewport(D.width, D.height), this.renderer.camera.update();
	}
	getPageSize() {
		return document.documentElement.getBoundingClientRect();
	}
	getViewportSize() {
		if (!this.appendedToBody) return {
			width: this.parentElement.clientWidth,
			height: this.parentElement.clientHeight
		};
		let w = window.innerWidth, D = window.innerHeight, O = this.getDevicePixelRatio();
		return O === this.lastDPR ? (w > this.lastViewportWidth && (this.lastViewportWidth = w * b.WIDTH_INCREMENT), D > this.lastViewportHeight && (this.lastViewportHeight = D * b.HEIGHT_INCREMENT)) : (this.lastDPR = O, this.lastViewportWidth = this.lastViewportWidth === 0 ? w : w * b.WIDTH_INCREMENT, this.lastViewportHeight = D * b.HEIGHT_INCREMENT, this.updateWidgetScales()), this.lastViewportHeight * (1 + this.overflowTop + this.overflowBottom) * O > b.MAX_CANVAS_HEIGHT || this.lastViewportWidth * (1 + this.overflowLeft + this.overflowRight) * O > b.MAX_CANVAS_WIDTH ? (this.dprScale += .5, this.getViewportSize()) : {
			width: this.lastViewportWidth,
			height: this.lastViewportHeight
		};
	}
	getDevicePixelRatio() {
		return window.devicePixelRatio / this.dprScale;
	}
	updateWidgetScales() {
		for (let b of this.widgets) {
			if (b.fit !== "origin" && b.fit !== "none") continue;
			let w = b.skeleton;
			if (!w) continue;
			let D = this.getDevicePixelRatio();
			w.scaleX = w.scaleX / b.dprScale * D, w.scaleY = w.scaleY / b.dprScale * D, b.dprScale = D;
		}
	}
	translateCanvas() {
		let b = -this.overflowLeftSize, w = -this.overflowTopSize;
		if (this.appendedToBody) b += window.scrollX, w += window.scrollY;
		else if (this.hasParentTransform) b += this.parentElement.scrollLeft, w += this.parentElement.scrollTop;
		else {
			let { left: D, top: O } = this.parentElement.getBoundingClientRect();
			b += D + window.scrollX, w += O + window.scrollY;
			let F = this.offsetParent;
			do {
				if (F === null || F === document.body) break;
				let b = F;
				if (b.style.position === "fixed" || b.style.position === "sticky" || b.style.position === "absolute") {
					let w = b.getBoundingClientRect();
					this.div.style.transform = `translate(${D - w.left}px,${O - w.top}px)`;
					return;
				}
				F = b.offsetParent;
			} while (F);
			this.div.style.transform = `translate(${b + this.overflowLeftSize}px,${w + this.overflowTopSize}px)`;
			return;
		}
		this.canvas.style.transform = `translate(${b}px,${w}px)`;
	}
	updateZIndexIfNecessary(b) {
		let w = b, D;
		do {
			let b = parseInt(getComputedStyle(w).zIndex);
			isNaN(b) || (D = b), w = w.parentElement;
		} while (w && w !== document.body);
		D && (!this.zIndex || this.zIndex < D) && (this.zIndex = D, this.div.style.zIndex = `${this.zIndex}`);
	}
	screenToWorld(b, w, D) {
		b.set(w, D, 0), this.renderer.camera.screenToWorld(b, this.canvas.clientWidth, this.canvas.clientHeight);
	}
	worldToScreen(b, w, D) {
		b.set(w, -D, 0), this.renderer.camera.worldToScreen(b, this.worldToScreenLength(this.renderer.camera.viewportWidth), this.worldToScreenLength(this.renderer.camera.viewportHeight));
	}
	screenToWorldLength(b) {
		return b * this.getDevicePixelRatio();
	}
	worldToScreenLength(b) {
		return b / this.getDevicePixelRatio();
	}
};
_defineProperty(SpineWebComponentOverlay, "OVERLAY_ID", "spine-overlay-default-identifier"), _defineProperty(SpineWebComponentOverlay, "OVERLAY_LIST", /* @__PURE__ */ new Map()), _defineProperty(SpineWebComponentOverlay, "SHOW_FPS", !1), _defineProperty(SpineWebComponentOverlay, "attributesDescription", {
	"overlay-id": {
		propertyName: "overlayId",
		type: "string"
	},
	"no-auto-parent-transform": {
		propertyName: "noAutoParentTransform",
		type: "boolean"
	},
	"overflow-top": {
		propertyName: "overflowTop",
		type: "number"
	},
	"overflow-bottom": {
		propertyName: "overflowBottom",
		type: "number"
	},
	"overflow-left": {
		propertyName: "overflowLeft",
		type: "number"
	},
	"overflow-right": {
		propertyName: "overflowRight",
		type: "number"
	}
}), _defineProperty(SpineWebComponentOverlay, "WIDTH_INCREMENT", 1.15), _defineProperty(SpineWebComponentOverlay, "HEIGHT_INCREMENT", 1.2), _defineProperty(SpineWebComponentOverlay, "MAX_CANVAS_WIDTH", 7e3), _defineProperty(SpineWebComponentOverlay, "MAX_CANVAS_HEIGHT", 7e3), customElements.define("spine-overlay", SpineWebComponentOverlay);
var SpineWebComponentSkeleton = class b extends HTMLElement {
	get animation() {
		return this._animation;
	}
	set animation(b) {
		b === "" && (b = void 0), this._animation = b, this.initWidget();
	}
	get animations() {
		return this._animations;
	}
	set animations(b) {
		b === void 0 && (b = void 0), this._animations = b, this.initWidget();
	}
	get defaultMix() {
		return this._defaultMix;
	}
	set defaultMix(b) {
		b === void 0 && (b = 0), this._defaultMix = b;
	}
	get skin() {
		return this._skin;
	}
	set skin(b) {
		this._skin = b, this.initWidget();
	}
	get boundsX() {
		return this.bounds.x;
	}
	set boundsX(b) {
		this.bounds.x = b;
	}
	get boundsY() {
		return this.bounds.y;
	}
	set boundsY(b) {
		this.bounds.y = b;
	}
	get boundsWidth() {
		return this.bounds.width;
	}
	set boundsWidth(b) {
		this.bounds.width = b, b <= 0 && this.initWidget(!0);
	}
	get boundsHeight() {
		return this.bounds.height;
	}
	set boundsHeight(b) {
		this.bounds.height = b, b <= 0 && this.initWidget(!0);
	}
	get width() {
		return this._width;
	}
	set width(b) {
		this._width = b, this.render();
	}
	get height() {
		return this._height;
	}
	set height(b) {
		this._height = b, this.render();
	}
	addPointerSlotEventCallback(b, w) {
		this.pointerSlotEventCallbacks.set(this.getSlotFromRef(b), {
			slotFunction: w,
			inside: !1
		});
	}
	removePointerSlotEventCallbacks(b) {
		this.pointerSlotEventCallbacks.delete(this.getSlotFromRef(b));
	}
	getSlotFromRef(b) {
		let w;
		if (w = typeof b == "number" ? this.skeleton.slots[b] : typeof b == "string" ? this.skeleton.findSlot(b) : b, !w) throw Error(`No slot found with the given slot reference: ${b}`);
		return w;
	}
	set startWhenVisible(b) {
		this.manualStart = !0, this._startWhenVisible = b;
	}
	get startWhenVisible() {
		return this._startWhenVisible;
	}
	get whenReady() {
		return this._whenReady;
	}
	static get observedAttributes() {
		return Object.keys(b.attributesDescription);
	}
	constructor() {
		var b;
		super(), b = this, _defineProperty(this, "atlasPath", void 0), _defineProperty(this, "skeletonPath", void 0), _defineProperty(this, "rawData", void 0), _defineProperty(this, "jsonSkeletonKey", void 0), _defineProperty(this, "scale", 1), _defineProperty(this, "_animation", void 0), _defineProperty(this, "_animations", void 0), _defineProperty(this, "_defaultMix", 0), _defineProperty(this, "_skin", void 0), _defineProperty(this, "fit", "contain"), _defineProperty(this, "xAxis", 0), _defineProperty(this, "yAxis", 0), _defineProperty(this, "offsetX", 0), _defineProperty(this, "offsetY", 0), _defineProperty(this, "padLeft", 0), _defineProperty(this, "padRight", 0), _defineProperty(this, "padTop", 0), _defineProperty(this, "padBottom", 0), _defineProperty(this, "bounds", {
			x: 0,
			y: 0,
			width: -1,
			height: -1
		}), _defineProperty(this, "animationsBound", void 0), _defineProperty(this, "autoCalculateBounds", !1), _defineProperty(this, "_width", -1), _defineProperty(this, "_height", -1), _defineProperty(this, "drag", !1), _defineProperty(this, "worldX", Infinity), _defineProperty(this, "worldY", Infinity), _defineProperty(this, "pointerWorldX", 1), _defineProperty(this, "pointerWorldY", 1), _defineProperty(this, "interactive", !1), _defineProperty(this, "pointerEventCallback", (b, w) => {}), _defineProperty(this, "debug", !1), _defineProperty(this, "identifier", ""), _defineProperty(this, "manualStart", !1), _defineProperty(this, "_startWhenVisible", !1), _defineProperty(this, "pages", void 0), _defineProperty(this, "clip", !1), _defineProperty(this, "offScreenUpdateBehaviour", "pause"), _defineProperty(this, "spinner", !1), _defineProperty(this, "update", void 0), _defineProperty(this, "beforeUpdateWorldTransforms", () => {}), _defineProperty(this, "afterUpdateWorldTransforms", () => {}), _defineProperty(this, "onScreenFunction", function() {
			var b = _asyncToGenerator(function* (b) {
				b.loading && !b.onScreenAtLeastOnce && b.manualStart && b.startWhenVisible && b.start();
			});
			return function(w) {
				return b.apply(this, arguments);
			};
		}()), _defineProperty(this, "skeleton", void 0), _defineProperty(this, "state", void 0), _defineProperty(this, "textureAtlas", void 0), _defineProperty(this, "_whenReady", void 0), _defineProperty(this, "loading", !0), _defineProperty(this, "loadingScreen", null), _defineProperty(this, "started", !1), _defineProperty(this, "onScreen", !1), _defineProperty(this, "onScreenAtLeastOnce", !1), _defineProperty(this, "dprScale", 1), _defineProperty(this, "dragX", 0), _defineProperty(this, "dragY", 0), _defineProperty(this, "dragging", !1), _defineProperty(this, "pma", !1), _defineProperty(this, "disposed", !1), _defineProperty(this, "skeletonData", void 0), _defineProperty(this, "root", void 0), _defineProperty(this, "overlay", void 0), _defineProperty(this, "resolveLoadingPromise", void 0), _defineProperty(this, "resolveOverlayAssignedPromise", void 0), _defineProperty(this, "overlayAssignedPromise", void 0), _defineProperty(this, "DOMContentLoadedCallback", () => {
			customElements.whenDefined("spine-overlay").then(_asyncToGenerator(function* () {
				b.overlay = SpineWebComponentOverlay.getOrCreateOverlay(b.getAttribute("overlay-id")), b.resolveOverlayAssignedPromise(), b.initAfterConnect();
			}));
		}), _defineProperty(this, "lastSkelPath", ""), _defineProperty(this, "lastAtlasPath", ""), _defineProperty(this, "lastTexturePaths", []), _defineProperty(this, "pointerInsideBounds", !1), _defineProperty(this, "verticesTemp", Utils.newFloatArray(2 * 1024)), _defineProperty(this, "pointerSlotEventCallbacks", /* @__PURE__ */ new Map()), _defineProperty(this, "boneFollowerList", []), this.root = this.attachShadow({ mode: "closed" }), this._whenReady = new Promise((b) => {
			this.resolveLoadingPromise = b;
		}), this.overlayAssignedPromise = new Promise((b) => {
			this.resolveOverlayAssignedPromise = b;
		});
	}
	connectedCallback() {
		if (this.disposed) throw Error("You cannot attach a disposed widget");
		this.overlay ? this.initAfterConnect() : document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", this.DOMContentLoadedCallback) : this.DOMContentLoadedCallback(), this.render();
	}
	initAfterConnect() {
		this.overlay.addWidget(this), !this.manualStart && !this.started && this.start();
	}
	disconnectedCallback() {
		var b;
		window.removeEventListener("DOMContentLoaded", this.DOMContentLoadedCallback);
		let w = (b = this.overlay) == null ? void 0 : b.widgets.indexOf(this);
		w > 0 && this.overlay.widgets.splice(w, 1);
	}
	dispose() {
		var b;
		this.disposed = !0, this.disposeGLResources(), (b = this.loadingScreen) == null || b.dispose(), this.overlay.removeWidget(this), this.remove(), this.skeletonData = void 0, this.skeleton = void 0, this.state = void 0;
	}
	attributeChangedCallback(w, D, O) {
		let { type: F, propertyName: U, defaultValue: W } = b.attributesDescription[w];
		this[U] = castValue(F, O, W);
	}
	start() {
		this.started && (this.skeleton = void 0, this.state = void 0, this._whenReady = new Promise((b) => {
			this.resolveLoadingPromise = b;
		})), this.started = !0, customElements.whenDefined("spine-overlay").then(() => {
			this.resolveLoadingPromise(this.loadSkeleton());
		});
	}
	loadTexturesInPagesAttribute() {
		var b = this;
		return _asyncToGenerator(function* () {
			var w, D;
			let O = b.overlay.assetManager.require(b.atlasPath), F = (w = b.pages) == null ? O.pages.map((b, w) => w) : w, U = (D = b.atlasPath) != null && D.includes("/") ? b.atlasPath.substring(0, b.atlasPath.lastIndexOf("/") + 1) : "", W = [], G = [];
			for (let w of F) {
				let D = O.pages[w], F = `${U}${D.name}`;
				G.push(F);
				let K = b.lastTexturePaths.includes(F) ? Promise.resolve(F) : b.overlay.assetManager.loadTextureAsync(F).then((w) => (b.lastTexturePaths.push(F), D.setTexture(w), F));
				W.push(K);
			}
			for (let w of b.lastTexturePaths) G.includes(w) || b.overlay.assetManager.disposeAsset(w);
			return Promise.all(W);
		})();
	}
	getHostElement() {
		return (this.width <= 0 || this.width <= 0) && !this.getAttribute("style") && !this.getAttribute("class") ? this.parentElement : this;
	}
	appendTo(b) {
		var w = this;
		return _asyncToGenerator(function* () {
			b.appendChild(w), yield w.overlayAssignedPromise;
		})();
	}
	calculateBounds(b = !1) {
		let { skeleton: w, state: D } = this;
		if (!w || !D) return;
		let O;
		if (this.animationsBound && b) {
			let b = Infinity, w = -Infinity, D = Infinity, U = -Infinity;
			for (let O of this.animationsBound) {
				var F;
				let W = (F = this.skeleton) == null ? void 0 : F.data.animations.find(({ name: b }) => O === b), { x: G, y: K, width: q, height: J } = this.calculateAnimationViewport(W);
				b = Math.min(b, G), D = Math.min(D, K), w = Math.max(w, G + q), U = Math.max(U, K + J);
			}
			O = {
				x: b,
				y: D,
				width: w - b,
				height: U - D
			};
		} else {
			var U;
			O = this.calculateAnimationViewport((U = D.getCurrent(0)) == null ? void 0 : U.animation);
		}
		O.x /= w.scaleX, O.y /= w.scaleY, O.width /= w.scaleX, O.height /= w.scaleY, this.bounds = O;
	}
	loadSkeleton() {
		var b = this;
		return _asyncToGenerator(function* () {
			var w, D, O;
			b.loading = !0;
			let { atlasPath: F, skeletonPath: U, scale: W, skeletonData: G, rawData: K } = b;
			if (!F || !U) throw Error(`Missing atlas path or skeleton path. Assets cannot be loaded: atlas: ${F}, skeleton: ${U}`);
			let q = U.endsWith(".skel");
			if (K) for (let [w, D] of Object.entries(K)) b.overlay.assetManager.setRawDataURI(w, isBase64(D) ? `data:application/octet-stream;base64,${D}` : D);
			yield b.overlayAssignedPromise, b.lastSkelPath && b.lastSkelPath !== U && (b.overlay.assetManager.disposeAsset(b.lastSkelPath), b.lastSkelPath = ""), b.lastAtlasPath && b.lastAtlasPath !== F && (b.overlay.assetManager.disposeAsset(b.lastAtlasPath), b.lastAtlasPath = ""), yield Promise.all([b.lastSkelPath ? Promise.resolve() : (q ? b.overlay.assetManager.loadBinaryAsync(U) : b.overlay.assetManager.loadJsonAsync(U)).then(() => b.lastSkelPath = U), b.lastAtlasPath ? Promise.resolve() : b.overlay.assetManager.loadTextureAtlasButNoTexturesAsync(F).then(() => (b.lastAtlasPath = F, b.loadTexturesInPagesAttribute()))]);
			let J = b.overlay.assetManager.require(F);
			b.pma = (w = J.pages[0]) == null ? void 0 : w.pma;
			let Y = new AtlasAttachmentLoader(J), X = q ? new SkeletonBinary(Y) : new SkeletonJson(Y);
			X.scale = W;
			let Z = b.overlay.assetManager.require(U), Ji = b.jsonSkeletonKey ? Z[b.jsonSkeletonKey] : Z, Yi = (D = G || ((O = b.skeleton) == null ? void 0 : O.data)) == null ? X.readSkeletonData(Ji) : D, Q = new Skeleton(Yi), Xi = new AnimationState(new AnimationStateData(Yi));
			return b.skeleton = Q, b.state = Xi, b.textureAtlas = J, b.dprScale = b.overlay.getDevicePixelRatio(), b.loading = !1, b.initWidget(b.bounds.width <= 0 || b.bounds.height <= 0), b;
		})();
	}
	initWidget(b = !1) {
		if (this.loading) return;
		let { skeleton: w, state: D, animation: O, animations: F, skin: U, defaultMix: W } = this;
		if (U) {
			if (U.length === 1) w == null || w.setSkinByName(U[0]);
			else {
				let b = new Skin("custom");
				for (let D of U) b.addSkin(w == null ? void 0 : w.data.findSkin(D));
				w == null || w.setSkin(b);
			}
			w == null || w.setSlotsToSetupPose();
		}
		if (D) if (D.data.defaultMix = W, F) for (let [b, { cycle: w, animations: O, repeatDelay: U }] of Object.entries(F)) {
			let F = () => {
				let W = Number(b);
				for (let [b, { animationName: G, delay: K, loop: q, mixDuration: J }] of O.entries()) {
					let Y;
					Y = b === 0 ? G === "#EMPTY#" ? D.setEmptyAnimation(W, J) : D.setAnimation(W, G, q) : G === "#EMPTY#" ? D.addEmptyAnimation(W, J, K) : D.addAnimation(W, G, q, K), J && (Y.mixDuration = J), w && b === O.length - 1 && (Y.listener = { complete: () => {
						var b;
						U ? setTimeout(() => F(), 1e3 * U) : F(), (b = Y.listener) == null || delete b.complete;
					} });
				}
			};
			F();
		}
		else O ? D.setAnimation(0, O, !0) : D.setEmptyAnimation(0);
		(b || this.autoCalculateBounds) && this.calculateBounds(b);
	}
	render() {
		let b = !this.getAttribute("style") && !this.getAttribute("class");
		this.root.innerHTML = `
        <style>
            :host {
                position: relative;
                display: inline-block;
				${b ? "width: 0; height: 0;" : ""}
            }
        </style>
        `;
	}
	pointerEventUpdate(b, w) {
		this.interactive && (this.checkBoundsInteraction(b, w), this.checkSlotInteraction(b, w));
	}
	checkBoundsInteraction(b, w) {
		this.isPointerInsideBounds() ? (this.pointerInsideBounds || this.pointerEventCallback("enter", w), this.pointerInsideBounds = !0, this.pointerEventCallback(b, w)) : (this.pointerInsideBounds && this.pointerEventCallback("leave", w), this.pointerInsideBounds = !1);
	}
	isPointerInsideBounds() {
		if (this.isOffScreenAndWasMoved() || !this.skeleton) return !1;
		let b = this.pointerWorldX / this.skeleton.scaleX, w = this.pointerWorldY / this.skeleton.scaleY;
		return b >= this.bounds.x && b <= this.bounds.x + this.bounds.width && w >= this.bounds.y && w <= this.bounds.y + this.bounds.height;
	}
	checkSlotInteraction(b, w) {
		for (let [D, O] of this.pointerSlotEventCallbacks) {
			if (!D.bone.active) continue;
			let F = D.getAttachment();
			if (!(F instanceof RegionAttachment || F instanceof MeshAttachment)) continue;
			let { slotFunction: U, inside: W } = O, G = this.verticesTemp, K = 8;
			if (F instanceof RegionAttachment) F.computeWorldVertices(D, G, 0, 2);
			else if (F instanceof MeshAttachment) {
				let b = F;
				b.computeWorldVertices(D, 0, b.worldVerticesLength, G, 0, 2), K = b.hullLength;
			}
			if (this.isPointInPolygon(G, K, [this.pointerWorldX, this.pointerWorldY])) {
				if (W || (O.inside = !0, U(D, "enter", w)), b === "down" || b === "up") {
					O.inside && U(D, b, w);
					continue;
				}
				U(D, b, w);
			} else W && (O.inside = !1, U(D, "leave", w));
		}
	}
	isPointInPolygon(b, w, D) {
		let [O, F] = D;
		if (w < 6) throw Error("A polygon must have at least 3 vertices (6 numbers in the array). ");
		let U = !1;
		for (let D = 0, W = w - 2; D < w; D += 2) {
			let w = b[D], G = b[D + 1], K = b[W], q = b[W + 1];
			G > F != q > F && O < (K - w) * (F - G) / (q - G) + w && (U = !U), W = D;
		}
		return U;
	}
	followSlot(b, w, D = {}) {
		var O;
		let { followVisibility: F = !1, followRotation: U = !0, followOpacity: W = !0, followScale: G = !0, hideAttachment: K = !1 } = D, q = typeof b == "string" ? (O = this.skeleton) == null ? void 0 : O.findSlot(b) : b;
		q && (K && q.setAttachment(null), w.style.position = "absolute", w.style.top = "0px", w.style.left = "0px", w.style.display = "none", this.boneFollowerList.push({
			slot: q,
			bone: q.bone,
			element: w,
			followVisibility: F,
			followRotation: U,
			followOpacity: W,
			followScale: G,
			hideAttachment: K
		}), this.overlay.addSlotFollowerElement(w));
	}
	unfollowSlot(b) {
		let w = this.boneFollowerList.findIndex((w) => w.element === b);
		if (w > -1) return this.boneFollowerList.splice(w, 1)[0].element;
	}
	isOffScreenAndWasMoved() {
		return !this.onScreen && this.dragX === 0 && this.dragY === 0;
	}
	calculateAnimationViewport(b) {
		let w = this.overlay.renderer, { skeleton: D } = this;
		if (!D) return {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
		D.setToSetupPose();
		let O = new Vector2(), F = new Vector2(), U = [, ,];
		if (!b) return D.updateWorldTransform(Physics.update), D.getBounds(O, F, U, w.skeletonRenderer.getSkeletonClipping()), {
			x: O.x,
			y: O.y,
			width: F.x,
			height: F.y
		};
		let W = b.duration ? b.duration / 100 : 0, G = 0, K = 1e8, q = -1e8, J = 1e8, Y = -1e8;
		for (let X = 0; X < 100; X++, G += W) if (b.apply(D, G, G, !1, [], 1, MixBlend.setup, MixDirection.mixIn), D.updateWorldTransform(Physics.update), D.getBounds(O, F, U, w.skeletonRenderer.getSkeletonClipping()), !isNaN(O.x) && !isNaN(O.y) && !isNaN(F.x) && !isNaN(F.y) && !isNaN(K) && !isNaN(J) && !isNaN(q) && !isNaN(Y)) K = Math.min(O.x, K), q = Math.max(O.x + F.x, q), J = Math.min(O.y, J), Y = Math.max(O.y + F.y, Y);
		else return {
			x: 0,
			y: 0,
			width: -1,
			height: -1
		};
		return D.setToSetupPose(), {
			x: K,
			y: J,
			width: q - K,
			height: Y - J
		};
	}
	disposeGLResources() {
		let { assetManager: b } = this.overlay;
		this.lastAtlasPath && b.disposeAsset(this.lastAtlasPath), this.lastSkelPath && b.disposeAsset(this.lastSkelPath);
	}
};
_defineProperty(SpineWebComponentSkeleton, "attributesDescription", {
	atlas: {
		propertyName: "atlasPath",
		type: "string"
	},
	skeleton: {
		propertyName: "skeletonPath",
		type: "string"
	},
	"raw-data": {
		propertyName: "rawData",
		type: "object"
	},
	"json-skeleton-key": {
		propertyName: "jsonSkeletonKey",
		type: "string"
	},
	scale: {
		propertyName: "scale",
		type: "number"
	},
	animation: {
		propertyName: "animation",
		type: "string",
		defaultValue: void 0
	},
	animations: {
		propertyName: "animations",
		type: "animationsInfo",
		defaultValue: void 0
	},
	"animation-bounds": {
		propertyName: "animationsBound",
		type: "array-string",
		defaultValue: void 0
	},
	"default-mix": {
		propertyName: "defaultMix",
		type: "number",
		defaultValue: 0
	},
	skin: {
		propertyName: "skin",
		type: "array-string"
	},
	width: {
		propertyName: "width",
		type: "number",
		defaultValue: -1
	},
	height: {
		propertyName: "height",
		type: "number",
		defaultValue: -1
	},
	drag: {
		propertyName: "drag",
		type: "boolean"
	},
	interactive: {
		propertyName: "interactive",
		type: "boolean"
	},
	"x-axis": {
		propertyName: "xAxis",
		type: "number"
	},
	"y-axis": {
		propertyName: "yAxis",
		type: "number"
	},
	"offset-x": {
		propertyName: "offsetX",
		type: "number"
	},
	"offset-y": {
		propertyName: "offsetY",
		type: "number"
	},
	"pad-left": {
		propertyName: "padLeft",
		type: "number"
	},
	"pad-right": {
		propertyName: "padRight",
		type: "number"
	},
	"pad-top": {
		propertyName: "padTop",
		type: "number"
	},
	"pad-bottom": {
		propertyName: "padBottom",
		type: "number"
	},
	"bounds-x": {
		propertyName: "boundsX",
		type: "number"
	},
	"bounds-y": {
		propertyName: "boundsY",
		type: "number"
	},
	"bounds-width": {
		propertyName: "boundsWidth",
		type: "number",
		defaultValue: -1
	},
	"bounds-height": {
		propertyName: "boundsHeight",
		type: "number",
		defaultValue: -1
	},
	"auto-calculate-bounds": {
		propertyName: "autoCalculateBounds",
		type: "boolean"
	},
	identifier: {
		propertyName: "identifier",
		type: "string"
	},
	debug: {
		propertyName: "debug",
		type: "boolean"
	},
	"manual-start": {
		propertyName: "manualStart",
		type: "boolean"
	},
	"start-when-visible": {
		propertyName: "startWhenVisible",
		type: "boolean"
	},
	spinner: {
		propertyName: "spinner",
		type: "boolean"
	},
	clip: {
		propertyName: "clip",
		type: "boolean"
	},
	pages: {
		propertyName: "pages",
		type: "array-number"
	},
	fit: {
		propertyName: "fit",
		type: "fitType",
		defaultValue: "contain"
	},
	offscreen: {
		propertyName: "offScreenUpdateBehaviour",
		type: "offScreenUpdateBehaviourType",
		defaultValue: "pause"
	}
}), customElements.define("spine-skeleton", SpineWebComponentSkeleton);
function __decorate(b, w, D, O) {
	var F = arguments.length, U = F < 3 ? w : O === null ? O = Object.getOwnPropertyDescriptor(w, D) : O, W;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") U = Reflect.decorate(b, w, D, O);
	else for (var G = b.length - 1; G >= 0; G--) (W = b[G]) && (U = (F < 3 ? W(U) : F > 3 ? W(w, D, U) : W(w, D)) || U);
	return F > 3 && U && Object.defineProperty(w, D, U), U;
}
var _MemorialLobbyViewer, MemorialLobbyViewer = (_MemorialLobbyViewer = class extends i {
	constructor(...b) {
		super(...b), this.animation = "Start_Idle_01", this.aspectRatioW = 16, this.aspectRatioH = 9, this.basePath = "assets/spines/lobbies/", this.separateBg = !1, this.character = "", this.atlasName = null, this.skelName = null, this.bgAtlasName = null, this.bgSkelName = null, this._uniqueId = crypto.randomUUID(), this._animationList = [], this._identifier = "", this._loading = !0, this._menuOpen = !1, this._uiHidden = !1, this._atlasPath = "", this._skelPath = "", this._bgAtlasPath = "", this._bgSkelPath = "", this.updateViewerAspectRatio = () => {
			this.style.setProperty("--ba-memorial-lobby-viewer-aspect-ratio", `${this.aspectRatioW}/${this.aspectRatioH}`);
		}, this.toggleFullscreen = () => {}, this.showUiOnInteract = () => {
			this._uiHidden = !1, this.spineContainer.removeEventListener("click", this.showUiOnInteract), this.spineContainer.removeEventListener("keydown", this.showUiOnInteract), this.updateComplete.then(() => {
				var b;
				(b = this.renderRoot) == null || (b = b.querySelector("#hide-ui-btn")) == null || b.focus();
			});
		};
	}
	connectedCallback() {
		super.connectedCallback(), this._identifier = `${this.character}-memorial-lobby`;
		let b = this.transformCharacterNameToFileName(this.character);
		this.atlasName != null || (this.atlasName = `${b}_home.atlas`), this.skelName != null || (this.skelName = `${b}_home.skel`), this.bgAtlasName != null || (this.bgAtlasName = `${b}BG_home.atlas`), this.bgSkelName != null || (this.bgSkelName = `${b}BG_home.skel`), this._atlasPath = `${this.basePath}${this.character}/${this.atlasName}`, this._skelPath = `${this.basePath}${this.character}/${this.skelName}`, this._bgAtlasPath = `${this.basePath}${this.character}/${this.bgAtlasName}`, this._bgSkelPath = `${this.basePath}${this.character}/${this.bgSkelName}`, this.updateViewerAspectRatio();
	}
	disconnectedCallback() {
		var b, w;
		(b = this.spineRenderer) == null || b.dispose(), this.separateBg && ((w = this.spineRendererBg) == null || w.dispose()), super.disconnectedCallback();
	}
	firstUpdated() {
		var b = this;
		return _asyncToGenerator(function* () {
			var w, D;
			yield b.spineRenderer.whenReady, b.separateBg && (yield (w = b.spineRendererBg) == null ? void 0 : w.whenReady), b._loading = !1, !((D = b.spineRenderer.skeleton) == null || (D = D.data) == null) && D.animations && (b._animationList = b.spineRenderer.skeleton.data.animations.map((b) => b.name)), b.updateAnimations();
		})();
	}
	updated(b) {
		b.has("animation") && !this._loading && this.updateAnimations(), b.has("_uiHidden") && this._uiHidden && (this.spineContainer.addEventListener("click", this.showUiOnInteract), this.spineContainer.addEventListener("keydown", this.showUiOnInteract), this.spineContainer.focus());
	}
	updateAnimations() {
		if (!this.animation || !this.spineRenderer.state || (this.spineRenderer.state.setAnimation(0, this.animation, !1), this.spineRenderer.state.tracks[1] === null && this.spineRenderer.state.setAnimation(1, "Idle_01", !0), (this.animation.startsWith("Start_Idle") || this.animation === "Dummy") && this.spineRenderer.state.setEmptyAnimation(1), !this.separateBg || !this.spineRendererBg) || !this.spineRendererBg.state) return;
		let b = this.animation.startsWith("Start_Idle") ? "Start_Idle_01" : "Idle_01";
		b !== this.spineRendererBg.state.tracks[0].animation.name && this.spineRendererBg.state.setAnimation(0, b, !1);
	}
	restartAnimations() {
		if (!this.animation || !this.spineRenderer.state || (this.spineRenderer.state.setAnimation(0, this.animation, !1), this.animation.startsWith("Start_Idle") || this.animation === "Dummy" ? this.spineRenderer.state.setEmptyAnimation(1) : this.spineRenderer.state.setAnimation(1, "Idle_01", !0), !this.separateBg || !this.spineRendererBg) || !this.spineRendererBg.state) return;
		let b = this.animation.startsWith("Start_Idle") ? "Start_Idle_01" : "Idle_01";
		this.spineRendererBg.state.setAnimation(0, b, !1);
	}
	transformCharacterNameToFileName(b) {
		let w = b.replace("ch", "CH");
		return w = w.charAt(0).toUpperCase() + w.slice(1), w;
	}
	render() {
		var b;
		return x`
      <div id="spine-container" class=${e$1({ "ui-hidden": this._uiHidden })} tabindex="0">
        ${this.separateBg ? x`<spine-skeleton
              id="spine-skeleton-bg"
              identifier="${this._identifier}-bg"
              atlas=${this._bgAtlasPath}
              skeleton=${this._bgSkelPath}
              bounds-x="-1920"
              bounds-y="390"
              bounds-width="3840"
              bounds-height="1908"
              scale="1.4"
              overlay-id="ba-memorial-lobby-viewer-${this._identifier}"
              clip
            ></spine-skeleton>` : ""}
        <spine-skeleton
          id="spine-skeleton-main"
          identifier=${this._identifier}
          atlas=${this._atlasPath}
          skeleton=${this._skelPath}
          bounds-x="-1920"
          bounds-y="0"
          bounds-width="3840"
          bounds-height="2160"
          scale="1.2"
          overlay-id="${this._uniqueId}"
          clip
        ></spine-skeleton>
        <spine-overlay overlay-id="${this._uniqueId}"></spine-overlay>
      </div>
      <div id="ui" ?hidden=${this._uiHidden}>
        <button
          id="menu-button"
          title="Toggle animation controls"
          aria-pressed=${this._menuOpen}
          aria-controls="menu"
          @click=${() => {
			this._menuOpen = !this._menuOpen;
		}}
        >
          Menu
        </button>
        <div
          id="menu"
          role="group"
          aria-label="Animation controls"
          ?hidden=${!this._menuOpen}
        >
          <select
            ?disabled=${this._loading}
            id="animation"
            .value=${(b = this.animation) == null ? "" : b}
            @change=${(b) => this.animation = b.target.value}
            aria-label="Select an animation"
          >
            ${o(this._animationList, (b) => x`<option value=${b} ?selected=${b === this.animation}>
                  ${b}
                </option>`)}
          </select>
          <hr />
          <input
            ?disabled=${this._loading}
            class="aspect-ratio-input"
            title="Aspect ratio width"
            type="number"
            min="1"
            .value=${this.aspectRatioW}
            @change=${(b) => this.aspectRatioW = Number(b.target.value)}
          />
          <input
            ?disabled=${this._loading}
            class="aspect-ratio-input"
            title="Aspect ratio height"
            type="number"
            min="1"
            .value=${this.aspectRatioH}
            @change=${(b) => this.aspectRatioH = Number(b.target.value)}
          />
          <button
            title="Update aspect ratio"
            id="update-aspect-btn"
            @click=${this.updateViewerAspectRatio}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-save-icon lucide-save"
            >
              <path
                d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
              />
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
              <path d="M7 3v4a1 1 0 0 0 1 1h7" />
            </svg>
          </button>
          <hr />
          <button
            title="Restart animation"
            class="primary-btn"
            id="restart-animation-btn"
            ?disabled=${this._loading}
            @click=${this.restartAnimations}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
          </button>
          <button
            title="Hide UI"
            class="primary-btn"
            id="hide-ui-btn"
            @click=${() => {
			this._uiHidden = !this._uiHidden;
		}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-eye-off-icon lucide-eye-off"
            >
              <path
                d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
              />
              <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
              <path
                d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
              />
              <path d="m2 2 20 20" />
            </svg>
          </button>
          <!-- <button
            title="Toggle fullscreen"
            class="primary-btn"
            id="fullscreen-btn"
            @click=${this.toggleFullscreen}
            disabled
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fullscreen-icon lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>
          </button> -->
        </div>
      </div>
      ${this._loading ? x`<div
            aria-label="Content is loading..."
            aria-live="polite"
            role="progressbar"
            class="loader"
          ></div>` : ""}
    `;
	}
}, _MemorialLobbyViewer.styles = i$1`
    :host {
      display: block;
      position: relative;
      aspect-ratio: var(--ba-memorial-lobby-viewer-aspect-ratio);
      background: var(--ba-memorial-lobby-viewer-background, #ecf5f9);
      box-sizing: border-box;

      max-height: 90vh;
      max-height: 90lvh;

      contain: strict;

      font-family: "Noto Sans", sans-serif, meiryo, meiryo ui, Yu Gothic,
        YuGothic;
    }

    #spine-container {
      position: absolute;
      inset: 0;
    }

    .ui-hidden {
      cursor: pointer;
    }

    button,
    select,
    input[type="number"] {
      block-size: 44px;
      padding: 0 12px;
      border-radius: 4px;
      border: 0;
      font: inherit;

      background-color: var(
        --ba-memorial-lobby-viewer-base-color,
        hsl(214 36% 100% / 100%)
      );
      color: var(
        --ba-memorial-lobby-viewer-inverted-color,
        hsl(214 36% 30% / 100%)
      );
      box-shadow: 0 2px 4px hsl(0 0 0 / 20%);

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 120ms scale cubic-bezier(0.25, 0.1, 0.39, 1.2);

      &:disabled {
        opacity: 0.38;
      }
    }

    input.aspect-ratio-input {
      text-align: center;
      font: inherit;
      width: calc(2ch + 0.25rem);
    }

    @media (pointer: fine) {
      input.aspect-ratio-input {
        width: calc(2ch + 1rem);
        padding-inline-end: 0;
      }
    }

    button {
      font-size: 1.25em;
      font-weight: 700;
      padding: 0 20px;
      &:not(:disabled) {
        cursor: pointer;
      }
      &:not(:disabled):active {
        scale: 0.925;
      }
    }

    select {
      inline-size: auto;
    }

    #menu-button {
      position: absolute;
      top: 12px;
      right: 20px;
      transform: skew(-10deg);

      z-index: 20;

      &[aria-pressed="true"] {
        background-color: var(
          --ba-memorial-lobby-viewer-inverted-color,
          hsl(214 36% 30% / 100%)
        );
        color: var(
          --ba-memorial-lobby-viewer-base-color,
          hsl(214 36% 100% / 100%)
        );
      }
    }

    #menu {
      position: absolute;
      top: calc(44px + 12px + 8px);
      right: 20px;
      padding: 10px;
      background-color: var(
        --ba-memorial-lobby-viewer-menu-color,
        hsl(0 0 100 / 70%)
      );
      border-radius: 8px;

      flex-wrap: wrap;

      display: flex;
      justify-content: flex-end;
      gap: 6px;
      z-index: 20;
    }

    #menu > button {
      inline-size: 48px;
      padding: 0;
    }

    .primary-btn {
      background-color: var(
        --ba-memorial-lobby-viewer-inverted-color,
        hsl(214 36% 30% / 100%)
      );
      color: var(
        --ba-memorial-lobby-viewer-base-color,
        hsl(214 36% 100% / 100%)
      );
    }

    hr {
      border-color: var(
        --ba-memorial-lobby-viewer-subtle-color,
        hsl(214 10% 50% / 20%)
      );
      margin-inline-start: 0;
      margin-inline-end: 0;
    }

    .loader {
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      margin-top: -16px;
      margin-left: -16px;
      height: 32px;
      width: 32px;
      border-width: 3px;
      border-style: solid;
      border-color: hsl(189 100 50 / 0.25);
      border-top-color: hsl(189 100 50 / 1);
      animation: loader 1s linear infinite;
      z-index: 99;
    }

    @keyframes loader {
      to {
        transform: rotate(360deg);
      }
    }

    [hidden] {
      display: none !important;
    }
  `, _MemorialLobbyViewer.shadowRootOptions = {
	mode: "open",
	delegatesFocus: !0
}, _MemorialLobbyViewer);
__decorate([n({ type: String })], MemorialLobbyViewer.prototype, "animation", void 0), __decorate([n({ type: Number })], MemorialLobbyViewer.prototype, "aspectRatioW", void 0), __decorate([n({ type: Number })], MemorialLobbyViewer.prototype, "aspectRatioH", void 0), __decorate([n({ type: String })], MemorialLobbyViewer.prototype, "basePath", void 0), __decorate([n({ type: Boolean })], MemorialLobbyViewer.prototype, "separateBg", void 0), __decorate([n({ type: String })], MemorialLobbyViewer.prototype, "character", void 0), __decorate([n({ type: String })], MemorialLobbyViewer.prototype, "atlasName", void 0), __decorate([n({ type: String })], MemorialLobbyViewer.prototype, "skelName", void 0), __decorate([n({ type: String })], MemorialLobbyViewer.prototype, "bgAtlasName", void 0), __decorate([n({ type: String })], MemorialLobbyViewer.prototype, "bgSkelName", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_uniqueId", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_animationList", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_identifier", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_loading", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_menuOpen", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_uiHidden", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_atlasPath", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_skelPath", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_bgAtlasPath", void 0), __decorate([r()], MemorialLobbyViewer.prototype, "_bgSkelPath", void 0), __decorate([e("#spine-container")], MemorialLobbyViewer.prototype, "spineContainer", void 0), __decorate([e("#spine-skeleton-main")], MemorialLobbyViewer.prototype, "spineRenderer", void 0), __decorate([e("#spine-skeleton-bg")], MemorialLobbyViewer.prototype, "spineRendererBg", void 0), MemorialLobbyViewer = __decorate([t("ba-memorial-lobby-viewer")], MemorialLobbyViewer);
export { MemorialLobbyViewer };

//# sourceMappingURL=ba-memorial-lobby-viewer.es.js.map
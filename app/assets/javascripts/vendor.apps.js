! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  function c(a) {
    var b = "length" in a && a.length,
      c = _.type(a);
    return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }

  function d(a, b, c) {
    if (_.isFunction(b)) return _.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return _.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (ha.test(b)) return _.filter(b, a, c);
      b = _.filter(b, a)
    }
    return _.grep(a, function(a) {
      return U.call(b, a) >= 0 !== c
    })
  }

  function e(a, b) {
    for (;
      (a = a[b]) && 1 !== a.nodeType;);
    return a
  }

  function f(a) {
    var b = oa[a] = {};
    return _.each(a.match(na) || [], function(a, c) {
      b[c] = !0
    }), b
  }

  function g() {
    Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
  }

  function h() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function() {
        return {}
      }
    }), this.expando = _.expando + h.uid++
  }

  function i(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
        } catch (e) {}
        sa.set(a, b, c)
      } else c = void 0;
    return c
  }

  function j() {
    return !0
  }

  function k() {
    return !1
  }

  function l() {
    try {
      return Z.activeElement
    } catch (a) {}
  }

  function m(a, b) {
    return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function n(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function o(a) {
    var b = Ka.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function p(a, b) {
    for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
  }

  function q(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
      }
      sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
    }
  }

  function r(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
  }

  function s(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
  }

  function t(b, c) {
    var d, e = _(c.createElement(b)).appendTo(c.body),
      f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
    return e.detach(), f
  }

  function u(a) {
    var b = Z,
      c = Oa[a];
    return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
  }

  function v(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function w(a, b) {
    return {
      get: function() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }

  function x(a, b) {
    if (b in a) return b;
    for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
      if (b = Xa[e] + c, b in a) return b;
    return d
  }

  function y(a, b, c) {
    var d = Ta.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function z(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
    return g
  }

  function A(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = "border-box" === _.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
      d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function B(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function C(a, b, c, d, e) {
    return new C.prototype.init(a, b, c, d, e)
  }

  function D() {
    return setTimeout(function() {
      Ya = void 0
    }), Ya = _.now()
  }

  function E(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function F(a, b, c) {
    for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function G(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this,
      m = {},
      n = a.style,
      o = a.nodeType && xa(a),
      p = ra.get(a, "fxshow");
    c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, l.always(function() {
      l.always(function() {
        h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
      n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], $a.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
          if ("show" !== e || !p || void 0 === p[d]) continue;
          o = !0
        }
        m[d] = p && p[d] || _.style(a, d)
      } else j = void 0;
    if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
    else {
      p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
        _(a).hide()
      }), l.done(function() {
        var b;
        ra.remove(a, "fxshow");
        for (b in m) _.style(a, b, m[b])
      });
      for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function H(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function I(a, b, c) {
    var d, e, f = 0,
      g = bb.length,
      h = _.Deferred().always(function() {
        delete i.elem
      }),
      i = function() {
        if (e) return !1;
        for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: _.extend({}, b),
        opts: _.extend(!0, {
          specialEasing: {}
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Ya || D(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (H(k, j.opts.specialEasing); g > f; f++)
      if (d = bb[f].call(j, a, k, j.opts)) return d;
    return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  function J(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(na) || [];
      if (_.isFunction(c))
        for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function K(a, b, c, d) {
    function e(h) {
      var i;
      return f[h] = !0, _.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
      }), i
    }
    var f = {},
      g = a === tb;
    return e(b.dataTypes[0]) || !f["*"] && e("*")
  }

  function L(a, b) {
    var c, d, e = _.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && _.extend(!0, a, d), a
  }

  function M(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes;
      "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function N(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f;)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          }
      if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }

  function O(a, b, c, d) {
    var e;
    if (_.isArray(b)) _.each(b, function(b, e) {
      c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== _.type(b)) d(a, b);
    else
      for (e in b) O(a + "[" + e + "]", b[e], c, d)
  }

  function P(a) {
    return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }
  var Q = [],
    R = Q.slice,
    S = Q.concat,
    T = Q.push,
    U = Q.indexOf,
    V = {},
    W = V.toString,
    X = V.hasOwnProperty,
    Y = {},
    Z = a.document,
    $ = "2.1.4",
    _ = function(a, b) {
      return new _.fn.init(a, b)
    },
    aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ba = /^-ms-/,
    ca = /-([\da-z])/gi,
    da = function(a, b) {
      return b.toUpperCase()
    };
  _.fn = _.prototype = {
    jquery: $,
    constructor: _,
    selector: "",
    length: 0,
    toArray: function() {
      return R.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
    },
    pushStack: function(a) {
      var b = _.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a, b) {
      return _.each(this, a, b)
    },
    map: function(a) {
      return this.pushStack(_.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(R.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: T,
    sort: Q.sort,
    splice: Q.splice
  }, _.extend = _.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, _.extend({
    expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === _.type(a)
    },
    isArray: Array.isArray,
    isWindow: function(a) {
      return null != a && a === a.window
    },
    isNumeric: function(a) {
      return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
    },
    isPlainObject: function(a) {
      return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
    },
    globalEval: function(a) {
      var b, c = eval;
      a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    },
    camelCase: function(a) {
      return a.replace(ba, "ms-").replace(ca, da)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b, d) {
      var e, f = 0,
        g = a.length,
        h = c(a);
      if (d) {
        if (h)
          for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
        else
          for (f in a)
            if (e = b.apply(a[f], d), e === !1) break
      } else if (h)
        for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
      else
        for (f in a)
          if (e = b.call(a[f], f, a[f]), e === !1) break; return a
    },
    trim: function(a) {
      return null == a ? "" : (a + "").replace(aa, "")
    },
    makeArray: function(a, b) {
      var d = b || [];
      return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
    },
    inArray: function(a, b, c) {
      return null == b ? -1 : U.call(b, a, c)
    },
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, d) {
      var e, f = 0,
        g = a.length,
        h = c(a),
        i = [];
      if (h)
        for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
      else
        for (f in a) e = b(a[f], f, d), null != e && i.push(e);
      return S.apply([], i)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, d, e;
      return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
        return a.apply(b || this, d.concat(R.call(arguments)))
      }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
    },
    now: Date.now,
    support: Y
  }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    V["[object " + b + "]"] = b.toLowerCase()
  });
  var ea = function(a) {
    function b(a, b, c, d) {
      var e, f, g, h, i, j, l, n, o, p;
      if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
      if (!d && I) {
        if (11 !== h && (e = sa.exec(a)))
          if (g = e[1]) {
            if (9 === h) {
              if (f = b.getElementById(g), !f || !f.parentNode) return c;
              if (f.id === g) return c.push(f), c
            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
          } else {
            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
          }
        if (v.qsa && (!J || !J.test(a))) {
          if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
          }
          if (p) try {
            return $.apply(c, o.querySelectorAll(p)), c
          } catch (q) {} finally {
            l || b.removeAttribute("id")
          }
        }
      }
      return B(a.replace(ia, "$1"), b, c, d)
    }

    function c() {
      function a(c, d) {
        return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
      }
      var b = [];
      return a
    }

    function d(a) {
      return a[N] = !0, a
    }

    function e(a) {
      var b = G.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function f(a, b) {
      for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
    }

    function g(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
      if (d) return d;
      if (c)
        for (; c = c.nextSibling;)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function h(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function i(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function j(a) {
      return d(function(b) {
        return b = +b, d(function(c, d) {
          for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function k(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }

    function l() {}

    function m(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function n(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = Q++;
      return b.first ? function(b, c, f) {
        for (; b = b[d];)
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j = [P, f];
        if (g) {
          for (; b = b[d];)
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          for (; b = b[d];)
            if (1 === b.nodeType || e) {
              if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g)) return !0
            }
      }
    }

    function o(a) {
      return a.length > 1 ? function(b, c, d) {
        for (var e = a.length; e--;)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function p(a, c, d) {
      for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
      return d
    }

    function q(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function r(a, b, c, e, f, g) {
      return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          r = d || p(b || "*", h.nodeType ? [h] : h, []),
          s = !a || !d && b ? r : q(r, m, a, h, i),
          t = c ? f || (d ? a : o || e) ? [] : g : s;
        if (c && c(s, t, h, i), e)
          for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
        if (d) {
          if (f || a) {
            if (f) {
              for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
              f(null, t = [], j, i)
            }
            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
          }
        } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
      })
    }

    function s(a) {
      for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
          return a === b
        }, g, !0), j = n(function(a) {
          return aa(b, a) > -1
        }, g, !0), k = [function(a, c, d) {
          var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
          return b = null, e
        }]; e > h; h++)
        if (c = w.relative[a[h].type]) k = [n(o(k), c)];
        else {
          if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
              value: " " === a[h - 2].type ? "*" : ""
            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
          }
          k.push(c)
        }
      return o(k)
    }

    function t(a, c) {
      var e = c.length > 0,
        f = a.length > 0,
        g = function(d, g, h, i, j) {
          var k, l, m, n = 0,
            o = "0",
            p = d && [],
            r = [],
            s = C,
            t = d || f && w.find.TAG("*", j),
            u = P += null == s ? 1 : Math.random() || .1,
            v = t.length;
          for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
            if (f && k) {
              for (l = 0; m = a[l++];)
                if (m(k, g, h)) {
                  i.push(k);
                  break
                }
              j && (P = u)
            }
            e && ((k = !m && k) && n--, d && p.push(k))
          }
          if (n += o, e && o !== n) {
            for (l = 0; m = c[l++];) m(p, r, g, h);
            if (d) {
              if (n > 0)
                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
              r = q(r)
            }
            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
          }
          return j && (P = u, C = s), p
        };
      return e ? d(g) : g
    }
    var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
      O = a.document,
      P = 0,
      Q = 0,
      R = c(),
      S = c(),
      T = c(),
      U = function(a, b) {
        return a === b && (E = !0), 0
      },
      V = 1 << 31,
      W = {}.hasOwnProperty,
      X = [],
      Y = X.pop,
      Z = X.push,
      $ = X.push,
      _ = X.slice,
      aa = function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      },
      ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ca = "[\\x20\\t\\r\\n\\f]",
      da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ea = da.replace("w", "w#"),
      fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
      ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
      ha = new RegExp(ca + "+", "g"),
      ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
      ja = new RegExp("^" + ca + "*," + ca + "*"),
      ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
      la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
      ma = new RegExp(ga),
      na = new RegExp("^" + ea + "$"),
      oa = {
        ID: new RegExp("^#(" + da + ")"),
        CLASS: new RegExp("^\\.(" + da + ")"),
        TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + fa),
        PSEUDO: new RegExp("^" + ga),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + ba + ")$", "i"),
        needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
      },
      pa = /^(?:input|select|textarea|button)$/i,
      qa = /^h\d$/i,
      ra = /^[^{]+\{\s*\[native \w/,
      sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ta = /[+~]/,
      ua = /'|\\/g,
      va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
      wa = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      xa = function() {
        F()
      };
    try {
      $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
    } catch (ya) {
      $ = {
        apply: X.length ? function(a, b) {
          Z.apply(a, _.call(b))
        } : function(a, b) {
          for (var c = a.length, d = 0; a[c++] = b[d++];);
          a.length = c - 1
        }
      }
    }
    v = b.support = {}, y = b.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, F = b.setDocument = function(a) {
      var b, c, d = a ? a.ownerDocument || a : O;
      return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), v.getElementsByTagName = e(function(a) {
        return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
      }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
        return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
      }), v.getById ? (w.find.ID = function(a, b) {
        if ("undefined" != typeof b.getElementById && I) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, w.filter.ID = function(a) {
        var b = a.replace(va, wa);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete w.find.ID, w.filter.ID = function(a) {
        var b = a.replace(va, wa);
        return function(a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
      } : function(a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          for (; c = f[e++];) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
        return I ? b.getElementsByClassName(a) : void 0
      }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
        H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
      }), e(function(a) {
        var b = d.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
      })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
        v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
      }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {
        if (b)
          for (; b = b.parentNode;)
            if (b === a) return !0;
        return !1
      }, U = b ? function(a, b) {
        if (a === b) return E = !0, 0;
        var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
      } : function(a, b) {
        if (a === b) return E = !0, 0;
        var c, e = 0,
          f = a.parentNode,
          h = b.parentNode,
          i = [a],
          j = [b];
        if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
        if (f === h) return g(a, b);
        for (c = a; c = c.parentNode;) i.unshift(c);
        for (c = b; c = c.parentNode;) j.unshift(c);
        for (; i[e] === j[e];) e++;
        return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
      }, d) : G
    }, b.matches = function(a, c) {
      return b(a, null, null, c)
    }, b.matchesSelector = function(a, c) {
      if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) try {
        var d = L.call(a, c);
        if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return b(c, G, null, [a]).length > 0
    }, b.contains = function(a, b) {
      return (a.ownerDocument || a) !== G && F(a), M(a, b)
    }, b.attr = function(a, b) {
      (a.ownerDocument || a) !== G && F(a);
      var c = w.attrHandle[b.toLowerCase()],
        d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
      return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }, b.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, b.uniqueSort = function(a) {
      var b, c = [],
        d = 0,
        e = 0;
      if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
        for (; b = a[e++];) b === a[e] && (d = c.push(e));
        for (; d--;) a.splice(c[d], 1)
      }
      return D = null, a
    }, x = b.getText = function(a) {
      var b, c = "",
        d = 0,
        e = a.nodeType;
      if (e) {
        if (1 === e || 9 === e || 11 === e) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
        } else if (3 === e || 4 === e) return a.nodeValue
      } else
        for (; b = a[d++];) c += x(b);
      return c
    }, w = b.selectors = {
      cacheLength: 50,
      createPseudo: d,
      match: oa,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
        },
        PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(va, wa).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = R[a + " "];
          return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, c, d) {
          return function(e) {
            var f = b.attr(e, a);
            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h;
            if (q) {
              if (f) {
                for (; p;) {
                  for (l = b; l = l[p];)
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [P, n, m];
                    break
                  }
              } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
              else
                for (;
                  (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function(a, c) {
          var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
          return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
          }) : function(a) {
            return f(a, 0, e)
          }) : f
        }
      },
      pseudos: {
        not: d(function(a) {
          var b = [],
            c = [],
            e = A(a.replace(ia, "$1"));
          return e[N] ? d(function(a, b, c, d) {
            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, d, f) {
            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: d(function(a) {
          return function(c) {
            return b(a, c).length > 0
          }
        }),
        contains: d(function(a) {
          return a = a.replace(va, wa),
            function(b) {
              return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
            }
        }),
        lang: d(function(a) {
          return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
            function(b) {
              var c;
              do
                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
              while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === H
        },
        focus: function(a) {
          return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function(a) {
          return !w.pseudos.empty(a)
        },
        header: function(a) {
          return qa.test(a.nodeName)
        },
        input: function(a) {
          return pa.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: j(function() {
          return [0]
        }),
        last: j(function(a, b) {
          return [b - 1]
        }),
        eq: j(function(a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: j(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: j(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: j(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: j(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, w.pseudos.nth = w.pseudos.eq;
    for (u in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) w.pseudos[u] = h(u);
    for (u in {
        submit: !0,
        reset: !0
      }) w.pseudos[u] = i(u);
    return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
      var d, e, f, g, h, i, j, k = S[a + " "];
      if (k) return c ? 0 : k.slice(0);
      for (h = a, i = [], j = w.preFilter; h;) {
        (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
          value: d,
          type: e[0].replace(ia, " ")
        }), h = h.slice(d.length));
        for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
          value: d,
          type: g,
          matches: e
        }), h = h.slice(d.length));
        if (!d) break
      }
      return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
    }, A = b.compile = function(a, b) {
      var c, d = [],
        e = [],
        f = T[a + " "];
      if (!f) {
        for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
        f = T(a, t(e, d)), f.selector = a
      }
      return f
    }, B = b.select = function(a, b, c, d) {
      var e, f, g, h, i, j = "function" == typeof a && a,
        l = !d && z(a = j.selector || a);
      if (c = c || [], 1 === l.length) {
        if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
          if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
          j && (b = b.parentNode), a = a.slice(f.shift().value.length)
        }
        for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
          if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
            break
          }
      }
      return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
    }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
      return 1 & a.compareDocumentPosition(G.createElement("div"))
    }), e(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || f("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), v.attributes && e(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || f("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), e(function(a) {
      return null == a.getAttribute("disabled")
    }) || f(ba, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), b
  }(a);
  _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
  var fa = _.expr.match.needsContext,
    ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ha = /^.[^:#\[\.,]*$/;
  _.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, _.fn.extend({
    find: function(a) {
      var b, c = this.length,
        d = [],
        e = this;
      if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
        for (b = 0; c > b; b++)
          if (_.contains(e[b], this)) return !0
      }));
      for (b = 0; c > b; b++) _.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    },
    filter: function(a) {
      return this.pushStack(d(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(d(this, a || [], !0))
    },
    is: function(a) {
      return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
    }
  });
  var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ka = _.fn.init = function(a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
            for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this
        }
        return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
  ka.prototype = _.fn, ia = _(Z);
  var la = /^(?:parents|prev(?:Until|All))/,
    ma = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  _.extend({
    dir: function(a, b, c) {
      for (var d = [], e = void 0 !== c;
        (a = a[b]) && 9 !== a.nodeType;)
        if (1 === a.nodeType) {
          if (e && _(a).is(c)) break;
          d.push(a)
        }
      return d
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), _.fn.extend({
    has: function(a) {
      var b = _(a, this),
        c = b.length;
      return this.filter(function() {
        for (var a = 0; c > a; a++)
          if (_.contains(this, b[a])) return !0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
      return this.pushStack(f.length > 1 ? _.unique(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  }), _.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return _.dir(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return _.dir(a, "parentNode", c)
    },
    next: function(a) {
      return e(a, "nextSibling")
    },
    prev: function(a) {
      return e(a, "previousSibling")
    },
    nextAll: function(a) {
      return _.dir(a, "nextSibling")
    },
    prevAll: function(a) {
      return _.dir(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return _.dir(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return _.dir(a, "previousSibling", c)
    },
    siblings: function(a) {
      return _.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return _.sibling(a.firstChild)
    },
    contents: function(a) {
      return a.contentDocument || _.merge([], a.childNodes)
    }
  }, function(a, b) {
    _.fn[a] = function(c, d) {
      var e = _.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var na = /\S+/g,
    oa = {};
  _.Callbacks = function(a) {
    a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
    var b, c, d, e, g, h, i = [],
      j = !a.once && [],
      k = function(f) {
        for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
          if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break
          }
        d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
      },
      l = {
        add: function() {
          if (i) {
            var c = i.length;
            ! function f(b) {
              _.each(b, function(b, c) {
                var d = _.type(c);
                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
              })
            }(arguments), d ? g = i.length : b && (e = c, k(b))
          }
          return this
        },
        remove: function() {
          return i && _.each(arguments, function(a, b) {
            for (var c;
              (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
          }), this
        },
        has: function(a) {
          return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
        },
        empty: function() {
          return i = [], g = 0, this
        },
        disable: function() {
          return i = j = b = void 0, this
        },
        disabled: function() {
          return !i
        },
        lock: function() {
          return j = void 0, b || l.disable(), this
        },
        locked: function() {
          return !j
        },
        fireWith: function(a, b) {
          return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
        },
        fire: function() {
          return l.fireWith(this, arguments), this
        },
        fired: function() {
          return !!c
        }
      };
    return l
  }, _.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", _.Callbacks("once memory"), "resolved"],
          ["reject", "fail", _.Callbacks("once memory"), "rejected"],
          ["notify", "progress", _.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {
            return c
          },
          always: function() {
            return e.done(arguments).fail(arguments), this
          },
          then: function() {
            var a = arguments;
            return _.Deferred(function(c) {
              _.each(b, function(b, f) {
                var g = _.isFunction(a[b]) && a[b];
                e[f[1]](function() {
                  var a = g && g.apply(this, arguments);
                  a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function(a) {
            return null != a ? _.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, _.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var b, c, d, e = 0,
        f = R.call(arguments),
        g = f.length,
        h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
        i = 1 === h ? a : _.Deferred(),
        j = function(a, c, d) {
          return function(e) {
            c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
          }
        };
      if (g > 1)
        for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
      return h || i.resolveWith(d, f), i.promise()
    }
  });
  var pa;
  _.fn.ready = function(a) {
    return _.ready.promise().done(a), this
  }, _.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? _.readyWait++ : _.ready(!0)
    },
    ready: function(a) {
      (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
    }
  }), _.ready.promise = function(b) {
    return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
  }, _.ready.promise();
  var qa = _.access = function(a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === _.type(c)) {
      e = !0;
      for (h in c) _.access(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
        return j.call(_(a), c)
      })), b))
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  };
  _.acceptData = function(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
    key: function(a) {
      if (!h.accepts(a)) return 0;
      var b = {},
        c = a[this.expando];
      if (!c) {
        c = h.uid++;
        try {
          b[this.expando] = {
            value: c
          }, Object.defineProperties(a, b)
        } catch (d) {
          b[this.expando] = c, _.extend(a, b)
        }
      }
      return this.cache[c] || (this.cache[c] = {}), c
    },
    set: function(a, b, c) {
      var d, e = this.key(a),
        f = this.cache[e];
      if ("string" == typeof b) f[b] = c;
      else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
      else
        for (d in b) f[d] = b[d];
      return f
    },
    get: function(a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b]
    },
    access: function(a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    },
    remove: function(a, b) {
      var c, d, e, f = this.key(a),
        g = this.cache[f];
      if (void 0 === b) this.cache[f] = {};
      else {
        _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
        for (; c--;) delete g[d[c]]
      }
    },
    hasData: function(a) {
      return !_.isEmptyObject(this.cache[a[this.expando]] || {})
    },
    discard: function(a) {
      a[this.expando] && delete this.cache[a[this.expando]]
    }
  };
  var ra = new h,
    sa = new h,
    ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ua = /([A-Z])/g;
  _.extend({
    hasData: function(a) {
      return sa.hasData(a) || ra.hasData(a)
    },
    data: function(a, b, c) {
      return sa.access(a, b, c)
    },
    removeData: function(a, b) {
      sa.remove(a, b)
    },
    _data: function(a, b, c) {
      return ra.access(a, b, c)
    },
    _removeData: function(a, b) {
      ra.remove(a, b)
    }
  }), _.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
          for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
          ra.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        sa.set(this, a)
      }) : qa(this, function(b) {
        var c, d = _.camelCase(a);
        if (f && void 0 === b) {
          if (c = sa.get(f, a), void 0 !== c) return c;
          if (c = sa.get(f, d), void 0 !== c) return c;
          if (c = i(f, d, void 0), void 0 !== c) return c
        } else this.each(function() {
          var c = sa.get(this, d);
          sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    },
    removeData: function(a) {
      return this.each(function() {
        sa.remove(this, a)
      })
    }
  }), _.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = _.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = _._queueHooks(a, b),
        g = function() {
          _.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return ra.get(a, c) || ra.access(a, c, {
        empty: _.Callbacks("once memory").add(function() {
          ra.remove(a, [b + "queue", c])
        })
      })
    }
  }), _.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var c = _.queue(this, a, b);
        _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        _.dequeue(this, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    },
    promise: function(a, b) {
      var c, d = 1,
        e = _.Deferred(),
        f = this,
        g = this.length,
        h = function() {
          --d || e.resolveWith(f, [f])
        };
      for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    wa = ["Top", "Right", "Bottom", "Left"],
    xa = function(a, b) {
      return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    },
    ya = /^(?:checkbox|radio)$/i;
  ! function() {
    var a = Z.createDocumentFragment(),
      b = a.appendChild(Z.createElement("div")),
      c = Z.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var za = "undefined";
  Y.focusinBubbles = "onfocusin" in a;
  var Aa = /^key/,
    Ba = /^(?:mouse|pointer|contextmenu)|click/,
    Ca = /^(?:focusinfocus|focusoutblur)$/,
    Da = /^([^.]*)(?:\.(.+)|)$/;
  _.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
      if (q)
        for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
            return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
          }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
          type: n,
          origType: p,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && _.expr.match.needsContext.test(e),
          namespace: o.join(".")
        }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
      if (q && (i = q.events)) {
        for (b = (b || "").match(na) || [""], j = b.length; j--;)
          if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
          } else
            for (n in i) _.event.remove(a, n + b[j], c, d, !0);
        _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, j, k, l, m = [d || Z],
        n = X.call(b, "type") ? b.type : b,
        o = X.call(b, "namespace") ? b.namespace.split(".") : [];
      if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
        if (!e && !l.noBubble && !_.isWindow(d)) {
          for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
          h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
        }
        for (f = 0;
          (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
        return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
      }
    },
    dispatch: function(a) {
      a = _.event.fix(a);
      var b, c, d, e, f, g = [],
        h = R.call(arguments),
        i = (ra.get(this, "events") || {})[a.type] || [],
        j = _.event.special[a.type] || {};
      if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
        for (g = _.event.handlers.call(this, a, i), b = 0;
          (e = g[b++]) && !a.isPropagationStopped();)
          for (a.currentTarget = e.elem, c = 0;
            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
        return j.postDispatch && j.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            })
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    fix: function(a) {
      if (a[_.expando]) return a;
      var b, c, d, e = a.type,
        f = a,
        g = this.fixHooks[e];
      for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
      return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          return this !== l() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === l() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return _.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = _.extend(new _.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, _.removeEvent = function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  }, _.Event = function(a, b) {
    return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
  }, _.Event.prototype = {
    isDefaultPrevented: k,
    isPropagationStopped: k,
    isImmediatePropagationStopped: k,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, _.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    _.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), Y.focusinBubbles || _.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      _.event.simulate(b, a.target, _.event.fix(a), !0)
    };
    _.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
          e = ra.access(d, b);
        e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
          e = ra.access(d, b) - 1;
        e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
      }
    }
  }), _.fn.extend({
    on: function(a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (g in a) this.on(g, b, c, a[g], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
      else if (!d) return this;
      return 1 === e && (f = d, d = function(a) {
        return _().off(a), f.apply(this, arguments)
      }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
        _.event.add(this, a, d, c, b)
      })
    },
    one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
        _.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {
      return this.each(function() {
        _.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? _.event.trigger(a, b, c, !0) : void 0
    }
  });
  var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Fa = /<([\w:]+)/,
    Ga = /<|&#?\w+;/,
    Ha = /<(?:script|style|link)/i,
    Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ja = /^$|\/(?:java|ecma)script/i,
    Ka = /^true\/(.*)/,
    La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
    clone: function(a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0),
        i = _.contains(a.ownerDocument, a);
      if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
        for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
        else q(a, h);
      return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
    },
    buildFragment: function(a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
        if (e = a[m], e || 0 === e)
          if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
          else if (Ga.test(e)) {
        for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
        _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
      } else l.push(b.createTextNode(e));
      for (k.textContent = "", m = 0; e = l[m++];)
        if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
          for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
      return k
    },
    cleanData: function(a) {
      for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
          if (b.events)
            for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
          ra.cache[e] && delete ra.cache[e]
        }
        delete sa.cache[c[sa.expando]]
      }
    }
  }), _.fn.extend({
    text: function(a) {
      return qa(this, function(a) {
        return void 0 === a ? _.text(this) : this.empty().each(function() {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
        })
      }, null, a, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = m(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = m(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function(a, b) {
      for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
      return this
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
      return this
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return _.clone(this, a, b)
      })
    },
    html: function(a) {
      return qa(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(Ea, "<$1></$2>");
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments, function(b) {
        a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    },
    detach: function(a) {
      return this.remove(a, !0)
    },
    domManip: function(a, b) {
      a = S.apply([], a);
      var c, d, e, f, g, h, i = 0,
        j = this.length,
        k = this,
        l = j - 1,
        m = a[0],
        p = _.isFunction(m);
      if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
        var d = k.eq(c);
        p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
      });
      if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
        if (f)
          for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
      }
      return this
    }
  }), _.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    _.fn[a] = function(a) {
      for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var Na, Oa = {},
    Pa = /^margin/,
    Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
    Ra = function(b) {
      return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
  ! function() {
    function b() {
      g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
      var b = a.getComputedStyle(g, null);
      c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
    }
    var c, d, e = Z.documentElement,
      f = Z.createElement("div"),
      g = Z.createElement("div");
    g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
      pixelPosition: function() {
        return b(), c
      },
      boxSizingReliable: function() {
        return null == d && b(), d
      },
      reliableMarginRight: function() {
        var b, c = g.appendChild(Z.createElement("div"));
        return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
      }
    }))
  }(), _.swap = function(a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e
  };
  var Sa = /^(none|table(?!-c[ea]).+)/,
    Ta = new RegExp("^(" + va + ")(.*)$", "i"),
    Ua = new RegExp("^([+-])=(" + va + ")", "i"),
    Va = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Wa = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Xa = ["Webkit", "O", "Moz", "ms"];
  _.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = v(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = _.camelCase(b),
          i = a.style;
        return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = _.camelCase(b);
      return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
    }
  }), _.each(["height", "width"], function(a, b) {
    _.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
          return A(a, b, d)
        }) : A(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e = d && Ra(a);
        return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
    return b ? _.swap(a, {
      display: "inline-block"
    }, v, [a, "marginRight"]) : void 0
  }), _.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    _.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Pa.test(a) || (_.cssHooks[a + b].set = y)
  }), _.fn.extend({
    css: function(a, b) {
      return qa(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (_.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function() {
      return B(this, !0)
    },
    hide: function() {
      return B(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        xa(this) ? _(this).show() : _(this).hide()
      })
    }
  }), _.Tween = C, C.prototype = {
    constructor: C,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
    },
    cur: function() {
      var a = C.propHooks[this.prop];
      return a && a.get ? a.get(this) : C.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = C.propHooks[this.prop];
      return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
    }
  }, C.prototype.init.prototype = C.prototype, C.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      },
      set: function(a) {
        _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, _.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, _.fx = C.prototype.init, _.fx.step = {};
  var Ya, Za, $a = /^(?:toggle|show|hide)$/,
    _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
    ab = /queueHooks$/,
    bb = [G],
    cb = {
      "*": [function(a, b) {
        var c = this.createTween(a, b),
          d = c.cur(),
          e = _a.exec(b),
          f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
          g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
          h = 1,
          i = 20;
        if (g && g[3] !== f) {
          f = f || g[3], e = e || [], g = +d || 1;
          do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
      }]
    };
  _.Animation = _.extend(I, {
      tweener: function(a, b) {
        _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
      },
      prefilter: function(a, b) {
        b ? bb.unshift(a) : bb.push(a)
      }
    }), _.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? _.extend({}, a) : {
        complete: c || !c && b || _.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !_.isFunction(b) && b
      };
      return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
      }, d
    }, _.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(xa).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = _.isEmptyObject(a),
          f = _.speed(b, c, d),
          g = function() {
            var b = I(this, _.extend({}, a), f);
            (e || ra.get(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = _.timers,
            g = ra.get(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && _.dequeue(this, a)
        })
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = ra.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = _.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, _.queue(this, a, []),
            e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), _.each(["toggle", "show", "hide"], function(a, b) {
      var c = _.fn[b];
      _.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
      }
    }), _.each({
      slideDown: E("show"),
      slideUp: E("hide"),
      slideToggle: E("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      _.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), _.timers = [], _.fx.tick = function() {
      var a, b = 0,
        c = _.timers;
      for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function(a) {
      _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
      Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
      clearInterval(Za), Za = null
    }, _.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, _.fn.delay = function(a, b) {
      return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d)
        }
      })
    },
    function() {
      var a = Z.createElement("input"),
        b = Z.createElement("select"),
        c = b.appendChild(Z.createElement("option"));
      a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
  var db, eb, fb = _.expr.attrHandle;
  _.fn.extend({
    attr: function(a, b) {
      return qa(this, _.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        _.removeAttr(this, a)
      })
    }
  }), _.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
        f = b && b.match(na);
      if (f && 1 === a.nodeType)
        for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), eb = {
    set: function(a, b, c) {
      return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = fb[b] || _.find.attr;
    fb[b] = function(a, b, d) {
      var e, f;
      return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
    }
  });
  var gb = /^(?:input|select|textarea|button)$/i;
  _.fn.extend({
    prop: function(a, b) {
      return qa(this, _.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return this.each(function() {
        delete this[_.propFix[a] || a]
      })
    }
  }), _.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
        }
      }
    }
  }), Y.optSelected || (_.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    }
  }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    _.propFix[this.toLowerCase()] = this
  });
  var hb = /[\t\r\n\f]/g;
  _.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (_.isFunction(a)) return this.each(function(b) {
        _(this).addClass(a.call(this, b, this.className))
      });
      if (h)
        for (b = (a || "").match(na) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = _.trim(d), c.className !== g && (c.className = g)
          }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (_.isFunction(a)) return this.each(function(b) {
        _(this).removeClass(a.call(this, b, this.className))
      });
      if (h)
        for (b = (a || "").match(na) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
            for (f = 0; e = b[f++];)
              for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
            g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
          }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function(c) {
        _(this).toggleClass(a.call(this, c, this.className, b), b)
      }) : this.each(function() {
        if ("string" === c)
          for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
      })
    },
    hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
      return !1
    }
  });
  var ib = /\r/g;
  _.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
            return null == a ? "" : a + ""
          })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
      }
    }
  }), _.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = _.find.attr(a, "value");
          return null != b ? b : _.trim(_.text(a))
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
              if (b = _(c).val(), f) return b;
              g.push(b)
            }
          return g
        },
        set: function(a, b) {
          for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), _.each(["radio", "checkbox"], function() {
    _.valHooks[this] = {
      set: function(a, b) {
        return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
      }
    }, Y.checkOn || (_.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    _.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), _.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var jb = _.now(),
    kb = /\?/;
  _.parseJSON = function(a) {
    return JSON.parse(a + "")
  }, _.parseXML = function(a) {
    var b, c;
    if (!a || "string" != typeof a) return null;
    try {
      c = new DOMParser, b = c.parseFromString(a, "text/xml")
    } catch (d) {
      b = void 0
    }
    return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
  };
  var lb = /#.*$/,
    mb = /([?&])_=[^&]*/,
    nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    pb = /^(?:GET|HEAD)$/,
    qb = /^\/\//,
    rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    sb = {},
    tb = {},
    ub = "*/".concat("*"),
    vb = a.location.href,
    wb = rb.exec(vb.toLowerCase()) || [];
  _.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: vb,
      type: "GET",
      isLocal: ob.test(wb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": _.parseJSON,
        "text xml": _.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
    },
    ajaxPrefilter: J(sb),
    ajaxTransport: J(tb),
    ajax: function(a, b) {
      function c(a, b, c, g) {
        var i, k, r, s, u, w = b;
        2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
      }
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
        m = l.context || l,
        n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
        o = _.Deferred(),
        p = _.Callbacks("once memory"),
        q = l.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === t) {
              if (!g)
                for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
              b = g[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {
            return 2 === t ? f : null
          },
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
          },
          overrideMimeType: function(a) {
            return t || (l.mimeType = a), this
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > t)
                for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this
          },
          abort: function(a) {
            var b = a || u;
            return d && d.abort(b), c(0, b), this
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
      j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
      for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
      if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
      u = "abort";
      for (k in {
          success: 1,
          error: 1,
          complete: 1
        }) v[k](l[k]);
      if (d = K(tb, l, b, v)) {
        v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
          v.abort("timeout")
        }, l.timeout));
        try {
          t = 1, d.send(r, c)
        } catch (w) {
          if (!(2 > t)) throw w;
          c(-1, w)
        }
      } else c(-1, "No Transport");
      return v
    },
    getJSON: function(a, b, c) {
      return _.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return _.get(a, void 0, b, "script")
    }
  }), _.each(["get", "post"], function(a, b) {
    _[b] = function(a, c, d, e) {
      return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }), _._evalUrl = function(a) {
    return _.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, _.fn.extend({
    wrapAll: function(a) {
      var b;
      return _.isFunction(a) ? this.each(function(b) {
        _(this).wrapAll(a.call(this, b))
      }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
        for (var a = this; a.firstElementChild;) a = a.firstElementChild;
        return a
      }).append(this)), this)
    },
    wrapInner: function(a) {
      return _.isFunction(a) ? this.each(function(b) {
        _(this).wrapInner(a.call(this, b))
      }) : this.each(function() {
        var b = _(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = _.isFunction(a);
      return this.each(function(c) {
        _(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
      }).end()
    }
  }), _.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0
  }, _.expr.filters.visible = function(a) {
    return !_.expr.filters.hidden(a)
  };
  var xb = /%20/g,
    yb = /\[\]$/,
    zb = /\r?\n/g,
    Ab = /^(?:submit|button|image|reset|file)$/i,
    Bb = /^(?:input|select|textarea|keygen)/i;
  _.param = function(a, b) {
    var c, d = [],
      e = function(a, b) {
        b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
      e(this.name, this.value)
    });
    else
      for (c in a) O(c, a[c], b, e);
    return d.join("&").replace(xb, "+")
  }, _.fn.extend({
    serialize: function() {
      return _.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = _.prop(this, "elements");
        return a ? _.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
      }).map(function(a, b) {
        var c = _(this).val();
        return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(zb, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(zb, "\r\n")
        }
      }).get()
    }
  }), _.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest
    } catch (a) {}
  };
  var Cb = 0,
    Db = {},
    Eb = {
      0: 200,
      1223: 204
    },
    Fb = _.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function() {
    for (var a in Db) Db[a]()
  }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
    var b;
    return Y.cors || Fb && !a.crossDomain ? {
      send: function(c, d) {
        var e, f = a.xhr(),
          g = ++Cb;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
          for (e in a.xhrFields) f[e] = a.xhrFields[e];
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
        for (e in c) f.setRequestHeader(e, c[e]);
        b = function(a) {
          return function() {
            b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
              text: f.responseText
            } : void 0, f.getAllResponseHeaders()))
          }
        }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
        try {
          f.send(a.hasContent && a.data || null)
        } catch (h) {
          if (b) throw h
        }
      },
      abort: function() {
        b && b()
      }
    } : void 0
  }), _.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(a) {
        return _.globalEval(a), a
      }
    }
  }), _.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), _.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function(d, e) {
          b = _("<script>").prop({
            async: !0,
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", c = function(a) {
            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
          }), Z.head.appendChild(b[0])
        },
        abort: function() {
          c && c()
        }
      }
    }
  });
  var Gb = [],
    Hb = /(=)\?(?=&|$)|\?\?/;
  _.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = Gb.pop() || _.expando + "_" + jb++;
      return this[a] = !0, a
    }
  }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || _.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    }, d.always(function() {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), _.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || Z;
    var d = ga.exec(a),
      e = !c && [];
    return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
  };
  var Ib = _.fn.load;
  _.fn.load = function(a, b, c) {
    if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
      url: a,
      type: e,
      dataType: "html",
      data: b
    }).done(function(a) {
      f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
    }).complete(c && function(a, b) {
      g.each(c, f || [a.responseText, b, a])
    }), this
  }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    _.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), _.expr.filters.animated = function(a) {
    return _.grep(_.timers, function(b) {
      return a === b.elem
    }).length
  };
  var Jb = a.document.documentElement;
  _.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = _.css(a, "position"),
        l = _(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, _.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {
        _.offset.setOffset(this, a, b)
      });
      var b, c, d = this[0],
        e = {
          top: 0,
          left: 0
        },
        f = d && d.ownerDocument;
      if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e
    },
    position: function() {
      if (this[0]) {
        var a, b, c = this[0],
          d = {
            top: 0,
            left: 0
          };
        return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - _.css(c, "marginTop", !0),
          left: b.left - d.left - _.css(c, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
        return a || Jb
      })
    }
  }), _.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(b, c) {
    var d = "pageYOffset" === c;
    _.fn[b] = function(e) {
      return qa(this, function(b, e, f) {
        var g = P(b);
        return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
      }, b, e, arguments.length, null)
    }
  }), _.each(["top", "left"], function(a, b) {
    _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
      return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
    })
  }), _.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    _.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      _.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return qa(this, function(b, c, d) {
          var e;
          return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), _.fn.size = function() {
    return this.length
  }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return _
  });
  var Kb = a.jQuery,
    Lb = a.$;
  return _.noConflict = function(b) {
    return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
  }, typeof b === za && (a.jQuery = a.$ = _), _
}),
function(a, b, c) {
  "use strict";

  function d(a, b) {
    return b = b || Error,
      function() {
        var c, d, e = 2,
          f = arguments,
          g = f[0],
          h = "[" + (a ? a + ":" : "") + g + "] ",
          i = f[1];
        for (h += i.replace(/\{\d+\}/g, function(a) {
            var b = +a.slice(1, -1),
              c = b + e;
            return c < f.length ? ta(f[c]) : a
          }), h += "\nhttp://errors.angularjs.org/1.4.7/" + (a ? a + "/" : "") + g, d = e, c = "?"; d < f.length; d++, c = "&") h += c + "p" + (d - e) + "=" + encodeURIComponent(ta(f[d]));
        return new b(h)
      }
  }

  function e(a) {
    if (null == a || C(a)) return !1;
    var b = "length" in Object(a) && a.length;
    return a.nodeType === Ud && b ? !0 : x(a) || Ld(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }

  function f(a, b, c) {
    var d, g;
    if (a)
      if (A(a))
        for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
      else if (Ld(a) || e(a)) {
      var h = "object" != typeof a;
      for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
    } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
    else if (w(a))
      for (d in a) b.call(c, a[d], d, a);
    else if ("function" == typeof a.hasOwnProperty)
      for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
    else
      for (d in a) ud.call(a, d) && b.call(c, a[d], d, a);
    return a
  }

  function g(a, b, c) {
    for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
    return d
  }

  function h(a) {
    return function(b, c) {
      a(c, b)
    }
  }

  function i() {
    return ++Jd
  }

  function j(a, b) {
    b ? a.$$hashKey = b : delete a.$$hashKey
  }

  function k(a, b, c) {
    for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
      var g = b[e];
      if (v(g) || A(g))
        for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
          var m = h[i],
            n = g[m];
          c && v(n) ? z(n) ? a[m] = new Date(n.valueOf()) : B(n) ? a[m] = new RegExp(n) : (v(a[m]) || (a[m] = Ld(n) ? [] : {}), k(a[m], [n], !0)) : a[m] = n
        }
    }
    return j(a, d), a
  }

  function l(a) {
    return k(a, Cd.call(arguments, 1), !1)
  }

  function m(a) {
    return k(a, Cd.call(arguments, 1), !0)
  }

  function n(a) {
    return parseInt(a, 10)
  }

  function o(a, b) {
    return l(Object.create(a), b)
  }

  function p() {}

  function q(a) {
    return a
  }

  function r(a) {
    return function() {
      return a
    }
  }

  function s(a) {
    return A(a.toString) && a.toString !== Object.prototype.toString
  }

  function t(a) {
    return "undefined" == typeof a
  }

  function u(a) {
    return "undefined" != typeof a
  }

  function v(a) {
    return null !== a && "object" == typeof a
  }

  function w(a) {
    return null !== a && "object" == typeof a && !Gd(a)
  }

  function x(a) {
    return "string" == typeof a
  }

  function y(a) {
    return "number" == typeof a
  }

  function z(a) {
    return "[object Date]" === Fd.call(a)
  }

  function A(a) {
    return "function" == typeof a
  }

  function B(a) {
    return "[object RegExp]" === Fd.call(a)
  }

  function C(a) {
    return a && a.window === a
  }

  function D(a) {
    return a && a.$evalAsync && a.$watch
  }

  function E(a) {
    return "[object File]" === Fd.call(a)
  }

  function F(a) {
    return "[object FormData]" === Fd.call(a)
  }

  function G(a) {
    return "[object Blob]" === Fd.call(a)
  }

  function H(a) {
    return "boolean" == typeof a
  }

  function I(a) {
    return a && A(a.then)
  }

  function J(a) {
    return Md.test(Fd.call(a))
  }

  function K(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
  }

  function L(a) {
    var b, c = {},
      d = a.split(",");
    for (b = 0; b < d.length; b++) c[d[b]] = !0;
    return c
  }

  function M(a) {
    return td(a.nodeName || a[0] && a[0].nodeName)
  }

  function N(a, b) {
    var c = a.indexOf(b);
    return c >= 0 && a.splice(c, 1), c
  }

  function O(a, b, c, d) {
    if (C(a) || D(a)) throw Hd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
    if (J(b)) throw Hd("cpta", "Can't copy! TypedArray destination cannot be mutated.");
    if (b) {
      if (a === b) throw Hd("cpi", "Can't copy! Source and destination are identical.");
      c = c || [], d = d || [], v(a) && (c.push(a), d.push(b));
      var e;
      if (Ld(a)) {
        b.length = 0;
        for (var g = 0; g < a.length; g++) b.push(O(a[g], null, c, d))
      } else {
        var h = b.$$hashKey;
        if (Ld(b) ? b.length = 0 : f(b, function(a, c) {
            delete b[c]
          }), w(a))
          for (e in a) b[e] = O(a[e], null, c, d);
        else if (a && "function" == typeof a.hasOwnProperty)
          for (e in a) a.hasOwnProperty(e) && (b[e] = O(a[e], null, c, d));
        else
          for (e in a) ud.call(a, e) && (b[e] = O(a[e], null, c, d));
        j(b, h)
      }
    } else if (b = a, v(a)) {
      var i;
      if (c && -1 !== (i = c.indexOf(a))) return d[i];
      if (Ld(a)) return O(a, [], c, d);
      if (J(a)) b = new a.constructor(a);
      else if (z(a)) b = new Date(a.getTime());
      else if (B(a)) b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex;
      else {
        if (!A(a.cloneNode)) {
          var k = Object.create(Gd(a));
          return O(a, k, c, d)
        }
        b = a.cloneNode(!0)
      }
      d && (c.push(a), d.push(b))
    }
    return b
  }

  function P(a, b) {
    if (Ld(a)) {
      b = b || [];
      for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
    } else if (v(a)) {
      b = b || {};
      for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
    }
    return b || a
  }

  function Q(a, b) {
    if (a === b) return !0;
    if (null === a || null === b) return !1;
    if (a !== a && b !== b) return !0;
    var c, d, e, f = typeof a,
      g = typeof b;
    if (f == g && "object" == f) {
      if (!Ld(a)) {
        if (z(a)) return z(b) ? Q(a.getTime(), b.getTime()) : !1;
        if (B(a)) return B(b) ? a.toString() == b.toString() : !1;
        if (D(a) || D(b) || C(a) || C(b) || Ld(b) || z(b) || B(b)) return !1;
        e = qa();
        for (d in a)
          if ("$" !== d.charAt(0) && !A(a[d])) {
            if (!Q(a[d], b[d])) return !1;
            e[d] = !0
          }
        for (d in b)
          if (!(d in e) && "$" !== d.charAt(0) && u(b[d]) && !A(b[d])) return !1;
        return !0
      }
      if (!Ld(b)) return !1;
      if ((c = a.length) == b.length) {
        for (d = 0; c > d; d++)
          if (!Q(a[d], b[d])) return !1;
        return !0
      }
    }
    return !1
  }

  function R(a, b, c) {
    return a.concat(Cd.call(b, c))
  }

  function S(a, b) {
    return Cd.call(a, b || 0)
  }

  function T(a, b) {
    var c = arguments.length > 2 ? S(arguments, 2) : [];
    return !A(b) || b instanceof RegExp ? b : c.length ? function() {
      return arguments.length ? b.apply(a, R(c, arguments, 0)) : b.apply(a, c)
    } : function() {
      return arguments.length ? b.apply(a, arguments) : b.call(a)
    }
  }

  function U(a, d) {
    var e = d;
    return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : C(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : D(d) && (e = "$SCOPE"), e
  }

  function V(a, b) {
    return "undefined" == typeof a ? c : (y(b) || (b = b ? 2 : null), JSON.stringify(a, U, b))
  }

  function W(a) {
    return x(a) ? JSON.parse(a) : a
  }

  function X(a, b) {
    var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
    return isNaN(c) ? b : c
  }

  function Y(a, b) {
    return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a
  }

  function Z(a, b, c) {
    c = c ? -1 : 1;
    var d = X(b, a.getTimezoneOffset());
    return Y(a, c * (d - a.getTimezoneOffset()))
  }

  function $(a) {
    a = zd(a).clone();
    try {
      a.empty()
    } catch (b) {}
    var c = zd("<div>").append(a).html();
    try {
      return a[0].nodeType === Wd ? td(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
        return "<" + td(b)
      })
    } catch (b) {
      return td(c)
    }
  }

  function _(a) {
    try {
      return decodeURIComponent(a)
    } catch (b) {}
  }

  function aa(a) {
    var b = {};
    return f((a || "").split("&"), function(a) {
      var c, d, e;
      a && (d = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (d = a.substring(0, c), e = a.substring(c + 1)), d = _(d), u(d) && (e = u(e) ? _(e) : !0, ud.call(b, d) ? Ld(b[d]) ? b[d].push(e) : b[d] = [b[d], e] : b[d] = e))
    }), b
  }

  function ba(a) {
    var b = [];
    return f(a, function(a, c) {
      Ld(a) ? f(a, function(a) {
        b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
      }) : b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
    }), b.length ? b.join("&") : ""
  }

  function ca(a) {
    return da(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
  }

  function da(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
  }

  function ea(a, b) {
    var c, d, e = Rd.length;
    for (d = 0; e > d; ++d)
      if (c = Rd[d] + b, x(c = a.getAttribute(c))) return c;
    return null
  }

  function fa(a, b) {
    var c, d, e = {};
    f(Rd, function(b) {
      var e = b + "app";
      !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
    }), f(Rd, function(b) {
      var e, f = b + "app";
      !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
    }), c && (e.strictDi = null !== ea(c, "strict-di"), b(c, d ? [d] : [], e))
  }

  function ga(c, d, e) {
    v(e) || (e = {});
    var g = {
      strictDi: !1
    };
    e = l(g, e);
    var h = function() {
        if (c = zd(c), c.injector()) {
          var a = c[0] === b ? "document" : $(c);
          throw Hd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
        }
        d = d || [], d.unshift(["$provide", function(a) {
          a.value("$rootElement", c)
        }]), e.debugInfoEnabled && d.push(["$compileProvider", function(a) {
          a.debugInfoEnabled(!0)
        }]), d.unshift("ng");
        var f = $a(d, e.strictDi);
        return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
          a.$apply(function() {
            b.data("$injector", d), c(b)(a)
          })
        }]), f
      },
      i = /^NG_ENABLE_DEBUG_INFO!/,
      j = /^NG_DEFER_BOOTSTRAP!/;
    return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), Id.resumeBootstrap = function(a) {
      return f(a, function(a) {
        d.push(a)
      }), h()
    }, void(A(Id.resumeDeferredBootstrap) && Id.resumeDeferredBootstrap()))
  }

  function ha() {
    a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
  }

  function ia(a) {
    var b = Id.element(a).injector();
    if (!b) throw Hd("test", "no injector found for element argument to getTestability");
    return b.get("$$testability")
  }

  function ja(a, b) {
    return b = b || "_", a.replace(Sd, function(a, c) {
      return (c ? b : "") + a.toLowerCase()
    })
  }

  function ka() {
    var b;
    if (!Td) {
      var d = Qd();
      Ad = t(d) ? a.jQuery : d ? a[d] : c, Ad && Ad.fn.on ? (zd = Ad, l(Ad.fn, {
        scope: me.scope,
        isolateScope: me.isolateScope,
        controller: me.controller,
        injector: me.injector,
        inheritedData: me.inheritedData
      }), b = Ad.cleanData, Ad.cleanData = function(a) {
        var c;
        if (Kd) Kd = !1;
        else
          for (var d, e = 0; null != (d = a[e]); e++) c = Ad._data(d, "events"), c && c.$destroy && Ad(d).triggerHandler("$destroy");
        b(a)
      }) : zd = Ca, Id.element = zd, Td = !0
    }
  }

  function la(a, b, c) {
    if (!a) throw Hd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
    return a
  }

  function ma(a, b, c) {
    return c && Ld(a) && (a = a[a.length - 1]), la(A(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
  }

  function na(a, b) {
    if ("hasOwnProperty" === a) throw Hd("badname", "hasOwnProperty is not a valid {0} name", b)
  }

  function oa(a, b, c) {
    if (!b) return a;
    for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
    return !c && A(a) ? T(f, a) : a
  }

  function pa(a) {
    for (var b, c = a[0], d = a[a.length - 1], e = 1; c !== d && (c = c.nextSibling); e++)(b || a[e] !== c) && (b || (b = zd(Cd.call(a, 0, e))), b.push(c));
    return b || a
  }

  function qa() {
    return Object.create(null)
  }

  function ra(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c())
    }
    var c = d("$injector"),
      e = d("ng"),
      f = b(a, "angular", Object);
    return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
      var a = {};
      return function(d, f, g) {
        var h = function(a, b) {
          if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
        };
        return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
          function a(a, b, c, d) {
            return d || (d = e),
              function() {
                return d[c || "push"]([a, b, arguments]), k
              }
          }

          function b(a, b) {
            return function(c, f) {
              return f && A(f) && (f.$$moduleName = d), e.push([a, b, arguments]), k
            }
          }
          if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
          var e = [],
            h = [],
            i = [],
            j = a("$injector", "invoke", "push", h),
            k = {
              _invokeQueue: e,
              _configBlocks: h,
              _runBlocks: i,
              requires: f,
              name: d,
              provider: b("$provide", "provider"),
              factory: b("$provide", "factory"),
              service: b("$provide", "service"),
              value: a("$provide", "value"),
              constant: a("$provide", "constant", "unshift"),
              decorator: b("$provide", "decorator"),
              animation: b("$animateProvider", "register"),
              filter: b("$filterProvider", "register"),
              controller: b("$controllerProvider", "register"),
              directive: b("$compileProvider", "directive"),
              config: j,
              run: function(a) {
                return i.push(a), this
              }
            };
          return g && j(g), k
        })
      }
    })
  }

  function sa(a) {
    var b = [];
    return JSON.stringify(a, function(a, c) {
      if (c = U(a, c), v(c)) {
        if (b.indexOf(c) >= 0) return "...";
        b.push(c)
      }
      return c
    })
  }

  function ta(a) {
    return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : t(a) ? "undefined" : "string" != typeof a ? sa(a) : a
  }

  function ua(b) {
    l(b, {
      bootstrap: ga,
      copy: O,
      extend: l,
      merge: m,
      equals: Q,
      element: zd,
      forEach: f,
      injector: $a,
      noop: p,
      bind: T,
      toJson: V,
      fromJson: W,
      identity: q,
      isUndefined: t,
      isDefined: u,
      isString: x,
      isFunction: A,
      isObject: v,
      isNumber: y,
      isElement: K,
      isArray: Ld,
      version: $d,
      isDate: z,
      lowercase: td,
      uppercase: vd,
      callbacks: {
        counter: 0
      },
      getTestability: ia,
      $$minErr: d,
      $$csp: Pd,
      reloadWithDebugInfo: ha
    }), (Bd = ra(a))("ng", ["ngLocale"], ["$provide", function(a) {
      a.provider({
        $$sanitizeUri: qc
      }), a.provider("$compile", ib).directive({
        a: nf,
        input: Ef,
        textarea: Ef,
        form: sf,
        script: wg,
        select: zg,
        style: Bg,
        option: Ag,
        ngBind: Hf,
        ngBindHtml: Jf,
        ngBindTemplate: If,
        ngClass: Lf,
        ngClassEven: Nf,
        ngClassOdd: Mf,
        ngCloak: Of,
        ngController: Pf,
        ngForm: tf,
        ngHide: qg,
        ngIf: Sf,
        ngInclude: Tf,
        ngInit: Vf,
        ngNonBindable: hg,
        ngPluralize: lg,
        ngRepeat: mg,
        ngShow: pg,
        ngStyle: rg,
        ngSwitch: sg,
        ngSwitchWhen: tg,
        ngSwitchDefault: ug,
        ngOptions: kg,
        ngTransclude: vg,
        ngModel: eg,
        ngList: Wf,
        ngChange: Kf,
        pattern: Dg,
        ngPattern: Dg,
        required: Cg,
        ngRequired: Cg,
        minlength: Fg,
        ngMinlength: Fg,
        maxlength: Eg,
        ngMaxlength: Eg,
        ngValue: Gf,
        ngModelOptions: gg
      }).directive({
        ngInclude: Uf
      }).directive(of).directive(Qf), a.provider({
        $anchorScroll: _a,
        $animate: Be,
        $animateCss: Ce,
        $$animateQueue: Ae,
        $$AnimateRunner: ze,
        $browser: fb,
        $cacheFactory: gb,
        $controller: nb,
        $document: ob,
        $exceptionHandler: pb,
        $filter: Ec,
        $$forceReflow: He,
        $interpolate: Db,
        $interval: Eb,
        $http: zb,
        $httpParamSerializer: rb,
        $httpParamSerializerJQLike: sb,
        $httpBackend: Bb,
        $xhrFactory: Ab,
        $location: Sb,
        $log: Tb,
        $parse: kc,
        $rootScope: pc,
        $q: lc,
        $$q: mc,
        $sce: uc,
        $sceDelegate: tc,
        $sniffer: vc,
        $templateCache: hb,
        $templateRequest: wc,
        $$testability: xc,
        $timeout: yc,
        $window: Bc,
        $$rAF: oc,
        $$jqLite: Va,
        $$HashMap: qe,
        $$cookieReader: Dc
      })
    }])
  }

  function va() {
    return ++ae
  }

  function wa(a) {
    return a.replace(de, function(a, b, c, d) {
      return d ? c.toUpperCase() : c
    }).replace(ee, "Moz$1")
  }

  function xa(a) {
    return !ie.test(a)
  }

  function ya(a) {
    var b = a.nodeType;
    return b === Ud || !b || b === Yd
  }

  function za(a) {
    for (var b in _d[a.ng339]) return !0;
    return !1
  }

  function Aa(a, b) {
    var c, d, e, g, h = b.createDocumentFragment(),
      i = [];
    if (xa(a)) i.push(b.createTextNode(a));
    else {
      for (c = c || h.appendChild(b.createElement("div")), d = (je.exec(a) || ["", ""])[1].toLowerCase(), e = le[d] || le._default, c.innerHTML = e[1] + a.replace(ke, "<$1></$2>") + e[2], g = e[0]; g--;) c = c.lastChild;
      i = R(i, c.childNodes), c = h.firstChild, c.textContent = ""
    }
    return h.textContent = "", h.innerHTML = "", f(i, function(a) {
      h.appendChild(a)
    }), h
  }

  function Ba(a, c) {
    c = c || b;
    var d;
    return (d = he.exec(a)) ? [c.createElement(d[1])] : (d = Aa(a, c)) ? d.childNodes : []
  }

  function Ca(a) {
    if (a instanceof Ca) return a;
    var b;
    if (x(a) && (a = Nd(a), b = !0), !(this instanceof Ca)) {
      if (b && "<" != a.charAt(0)) throw ge("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
      return new Ca(a)
    }
    b ? Ma(this, Ba(a)) : Ma(this, a)
  }

  function Da(a) {
    return a.cloneNode(!0)
  }

  function Ea(a, b) {
    if (b || Ga(a), a.querySelectorAll)
      for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) Ga(c[d])
  }

  function Fa(a, b, c, d) {
    if (u(d)) throw ge("offargs", "jqLite#off() does not support the `selector` argument");
    var e = Ha(a),
      g = e && e.events,
      h = e && e.handle;
    if (h)
      if (b) f(b.split(" "), function(b) {
        if (u(c)) {
          var d = g[b];
          if (N(d || [], c), d && d.length > 0) return
        }
        ce(a, b, h), delete g[b]
      });
      else
        for (b in g) "$destroy" !== b && ce(a, b, h), delete g[b]
  }

  function Ga(a, b) {
    var d = a.ng339,
      e = d && _d[d];
    if (e) {
      if (b) return void delete e.data[b];
      e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Fa(a)), delete _d[d], a.ng339 = c
    }
  }

  function Ha(a, b) {
    var d = a.ng339,
      e = d && _d[d];
    return b && !e && (a.ng339 = d = va(), e = _d[d] = {
      events: {},
      data: {},
      handle: c
    }), e
  }

  function Ia(a, b, c) {
    if (ya(a)) {
      var d = u(c),
        e = !d && b && !v(b),
        f = !b,
        g = Ha(a, !e),
        h = g && g.data;
      if (d) h[b] = c;
      else {
        if (f) return h;
        if (e) return h && h[b];
        l(h, b)
      }
    }
  }

  function Ja(a, b) {
    return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
  }

  function Ka(a, b) {
    b && a.setAttribute && f(b.split(" "), function(b) {
      a.setAttribute("class", Nd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Nd(b) + " ", " ")))
    })
  }

  function La(a, b) {
    if (b && a.setAttribute) {
      var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      f(b.split(" "), function(a) {
        a = Nd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
      }), a.setAttribute("class", Nd(c))
    }
  }

  function Ma(a, b) {
    if (b)
      if (b.nodeType) a[a.length++] = b;
      else {
        var c = b.length;
        if ("number" == typeof c && b.window !== b) {
          if (c)
            for (var d = 0; c > d; d++) a[a.length++] = b[d]
        } else a[a.length++] = b
      }
  }

  function Na(a, b) {
    return Oa(a, "$" + (b || "ngController") + "Controller")
  }

  function Oa(a, b, c) {
    a.nodeType == Yd && (a = a.documentElement);
    for (var d = Ld(b) ? b : [b]; a;) {
      for (var e = 0, f = d.length; f > e; e++)
        if (u(c = zd.data(a, d[e]))) return c;
      a = a.parentNode || a.nodeType === Zd && a.host
    }
  }

  function Pa(a) {
    for (Ea(a, !0); a.firstChild;) a.removeChild(a.firstChild)
  }

  function Qa(a, b) {
    b || Ea(a);
    var c = a.parentNode;
    c && c.removeChild(a)
  }

  function Ra(b, c) {
    c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : zd(c).on("load", b)
  }

  function Sa(a, b) {
    var c = ne[b.toLowerCase()];
    return c && oe[M(a)] && c
  }

  function Ta(a) {
    return pe[a]
  }

  function Ua(a, b) {
    var c = function(c, d) {
      c.isDefaultPrevented = function() {
        return c.defaultPrevented
      };
      var e = b[d || c.type],
        f = e ? e.length : 0;
      if (f) {
        if (t(c.immediatePropagationStopped)) {
          var g = c.stopImmediatePropagation;
          c.stopImmediatePropagation = function() {
            c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
          }
        }
        c.isImmediatePropagationStopped = function() {
          return c.immediatePropagationStopped === !0
        }, f > 1 && (e = P(e));
        for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c)
      }
    };
    return c.elem = a, c
  }

  function Va() {
    this.$get = function() {
      return l(Ca, {
        hasClass: function(a, b) {
          return a.attr && (a = a[0]), Ja(a, b)
        },
        addClass: function(a, b) {
          return a.attr && (a = a[0]), La(a, b)
        },
        removeClass: function(a, b) {
          return a.attr && (a = a[0]), Ka(a, b)
        }
      })
    }
  }

  function Wa(a, b) {
    var c = a && a.$$hashKey;
    if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
    var d = typeof a;
    return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || i)() : d + ":" + a
  }

  function Xa(a, b) {
    if (b) {
      var c = 0;
      this.nextUid = function() {
        return ++c
      }
    }
    f(a, this.put, this)
  }

  function Ya(a) {
    var b = a.toString().replace(ue, ""),
      c = b.match(re);
    return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
  }

  function Za(a, b, c) {
    var d, e, g, h;
    if ("function" == typeof a) {
      if (!(d = a.$inject)) {
        if (d = [], a.length) {
          if (b) throw x(c) && c || (c = a.name || Ya(a)), ve("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
          e = a.toString().replace(ue, ""), g = e.match(re), f(g[1].split(se), function(a) {
            a.replace(te, function(a, b, c) {
              d.push(c)
            })
          })
        }
        a.$inject = d
      }
    } else Ld(a) ? (h = a.length - 1, ma(a[h], "fn"), d = a.slice(0, h)) : ma(a, "fn", !0);
    return d
  }

  function $a(a, b) {
    function d(a) {
      return function(b, c) {
        return v(b) ? void f(b, h(a)) : a(b, c)
      }
    }

    function e(a, b) {
      if (na(a, "service"), (A(b) || Ld(b)) && (b = y.instantiate(b)), !b.$get) throw ve("pget", "Provider '{0}' must define $get factory method.", a);
      return w[a + q] = b
    }

    function g(a, b) {
      return function() {
        var c = B.invoke(b, this);
        if (t(c)) throw ve("undef", "Provider '{0}' must return a value from $get factory method.", a);
        return c
      }
    }

    function i(a, b, c) {
      return e(a, {
        $get: c !== !1 ? g(a, b) : b
      })
    }

    function j(a, b) {
      return i(a, ["$injector", function(a) {
        return a.instantiate(b)
      }])
    }

    function k(a, b) {
      return i(a, r(b), !1)
    }

    function l(a, b) {
      na(a, "constant"), w[a] = b, z[a] = b
    }

    function m(a, b) {
      var c = y.get(a + q),
        d = c.$get;
      c.$get = function() {
        var a = B.invoke(d, c);
        return B.invoke(b, null, {
          $delegate: a
        })
      }
    }

    function n(a) {
      la(t(a) || Ld(a), "modulesToLoad", "not an array");
      var b, c = [];
      return f(a, function(a) {
        function d(a) {
          var b, c;
          for (b = 0, c = a.length; c > b; b++) {
            var d = a[b],
              e = y.get(d[0]);
            e[d[1]].apply(e, d[2])
          }
        }
        if (!u.get(a)) {
          u.put(a, !0);
          try {
            x(a) ? (b = Bd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : A(a) ? c.push(y.invoke(a)) : Ld(a) ? c.push(y.invoke(a)) : ma(a, "module")
          } catch (e) {
            throw Ld(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), ve("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
          }
        }
      }), c
    }

    function o(a, c) {
      function d(b, d) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === p) throw ve("cdep", "Circular dependency found: {0}", b + " <- " + s.join(" <- "));
          return a[b]
        }
        try {
          return s.unshift(b), a[b] = p, a[b] = c(b, d)
        } catch (e) {
          throw a[b] === p && delete a[b], e
        } finally {
          s.shift()
        }
      }

      function e(a, c, e, f) {
        "string" == typeof e && (f = e, e = null);
        var g, h, i, j = [],
          k = $a.$$annotate(a, b, f);
        for (h = 0, g = k.length; g > h; h++) {
          if (i = k[h], "string" != typeof i) throw ve("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
          j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
        }
        return Ld(a) && (a = a[g]), a.apply(c, j)
      }

      function f(a, b, c) {
        var d = Object.create((Ld(a) ? a[a.length - 1] : a).prototype || null),
          f = e(a, d, b, c);
        return v(f) || A(f) ? f : d
      }
      return {
        invoke: e,
        instantiate: f,
        get: d,
        annotate: $a.$$annotate,
        has: function(b) {
          return w.hasOwnProperty(b + q) || a.hasOwnProperty(b)
        }
      }
    }
    b = b === !0;
    var p = {},
      q = "Provider",
      s = [],
      u = new Xa([], !0),
      w = {
        $provide: {
          provider: d(e),
          factory: d(i),
          service: d(j),
          value: d(k),
          constant: d(l),
          decorator: m
        }
      },
      y = w.$injector = o(w, function(a, b) {
        throw Id.isString(b) && s.push(b), ve("unpr", "Unknown provider: {0}", s.join(" <- "))
      }),
      z = {},
      B = z.$injector = o(z, function(a, b) {
        var d = y.get(a + q, b);
        return B.invoke(d.$get, d, c, a)
      });
    return f(n(a), function(a) {
      a && B.invoke(a)
    }), B
  }

  function _a() {
    var a = !0;
    this.disableAutoScrolling = function() {
      a = !1
    }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
      function e(a) {
        var b = null;
        return Array.prototype.some.call(a, function(a) {
          return "a" === M(a) ? (b = a, !0) : void 0
        }), b
      }

      function f() {
        var a = h.yOffset;
        if (A(a)) a = a();
        else if (K(a)) {
          var c = a[0],
            d = b.getComputedStyle(c);
          a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
        } else y(a) || (a = 0);
        return a
      }

      function g(a) {
        if (a) {
          a.scrollIntoView();
          var c = f();
          if (c) {
            var d = a.getBoundingClientRect().top;
            b.scrollBy(0, d - c)
          }
        } else b.scrollTo(0, 0)
      }

      function h(a) {
        a = x(a) ? a : c.hash();
        var b;
        a ? (b = i.getElementById(a)) ? g(b) : (b = e(i.getElementsByName(a))) ? g(b) : "top" === a && g(null) : g(null)
      }
      var i = b.document;
      return a && d.$watch(function() {
        return c.hash()
      }, function(a, b) {
        (a !== b || "" !== a) && Ra(function() {
          d.$evalAsync(h)
        })
      }), h
    }]
  }

  function ab(a, b) {
    return a || b ? a ? b ? (Ld(a) && (a = a.join(" ")), Ld(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
  }

  function bb(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (c.nodeType === xe) return c
    }
  }

  function cb(a) {
    x(a) && (a = a.split(" "));
    var b = qa();
    return f(a, function(a) {
      a.length && (b[a] = !0)
    }), b
  }

  function db(a) {
    return v(a) ? a : {}
  }

  function eb(a, b, c, d) {
    function e(a) {
      try {
        a.apply(null, S(arguments, 1))
      } finally {
        if (s--, 0 === s)
          for (; u.length;) try {
            u.pop()()
          } catch (b) {
            c.error(b)
          }
      }
    }

    function g(a) {
      var b = a.indexOf("#");
      return -1 === b ? "" : a.substr(b)
    }

    function h() {
      z = null, j(), k()
    }

    function i() {
      try {
        return n.state
      } catch (a) {}
    }

    function j() {
      v = i(), v = t(v) ? null : v, Q(v, C) && (v = C), C = v
    }

    function k() {
      (x !== l.url() || w !== v) && (x = l.url(), w = v, f(A, function(a) {
        a(l.url(), v)
      }))
    }
    var l = this,
      m = (b[0], a.location),
      n = a.history,
      o = a.setTimeout,
      q = a.clearTimeout,
      r = {};
    l.isMock = !1;
    var s = 0,
      u = [];
    l.$$completeOutstandingRequest = e, l.$$incOutstandingRequestCount = function() {
      s++
    }, l.notifyWhenNoOutstandingRequests = function(a) {
      0 === s ? a() : u.push(a)
    };
    var v, w, x = m.href,
      y = b.find("base"),
      z = null;
    j(), w = v, l.url = function(b, c, e) {
      if (t(e) && (e = null), m !== a.location && (m = a.location), n !== a.history && (n = a.history), b) {
        var f = w === e;
        if (x === b && (!d.history || f)) return l;
        var h = x && Jb(x) === Jb(b);
        return x = b, w = e, !d.history || h && f ? ((!h || z) && (z = b), c ? m.replace(b) : h ? m.hash = g(b) : m.href = b, m.href !== b && (z = b)) : (n[c ? "replaceState" : "pushState"](e, "", b), j(), w = v), l
      }
      return z || m.href.replace(/%27/g, "'")
    }, l.state = function() {
      return v
    };
    var A = [],
      B = !1,
      C = null;
    l.onUrlChange = function(b) {
      return B || (d.history && zd(a).on("popstate", h), zd(a).on("hashchange", h), B = !0), A.push(b), b
    }, l.$$applicationDestroyed = function() {
      zd(a).off("hashchange popstate", h)
    }, l.$$checkUrlChange = k, l.baseHref = function() {
      var a = y.attr("href");
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
    }, l.defer = function(a, b) {
      var c;
      return s++, c = o(function() {
        delete r[c], e(a)
      }, b || 0), r[c] = !0, c
    }, l.defer.cancel = function(a) {
      return r[a] ? (delete r[a], q(a), e(p), !0) : !1
    }
  }

  function fb() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
      return new eb(a, d, b, c)
    }]
  }

  function gb() {
    this.$get = function() {
      function a(a, c) {
        function e(a) {
          a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
        }

        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a))
        }
        if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
        var g = 0,
          h = l({}, c, {
            id: a
          }),
          i = {},
          j = c && c.capacity || Number.MAX_VALUE,
          k = {},
          m = null,
          n = null;
        return b[a] = {
          put: function(a, b) {
            if (!t(b)) {
              if (j < Number.MAX_VALUE) {
                var c = k[a] || (k[a] = {
                  key: a
                });
                e(c)
              }
              return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
            }
          },
          get: function(a) {
            if (j < Number.MAX_VALUE) {
              var b = k[a];
              if (!b) return;
              e(b)
            }
            return i[a]
          },
          remove: function(a) {
            if (j < Number.MAX_VALUE) {
              var b = k[a];
              if (!b) return;
              b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
            }
            delete i[a], g--
          },
          removeAll: function() {
            i = {}, g = 0, k = {}, m = n = null
          },
          destroy: function() {
            i = null, h = null, k = null, delete b[a]
          },
          info: function() {
            return l({}, h, {
              size: g
            })
          }
        }
      }
      var b = {};
      return a.info = function() {
        var a = {};
        return f(b, function(b, c) {
          a[c] = b.info()
        }), a
      }, a.get = function(a) {
        return b[a]
      }, a
    }
  }

  function hb() {
    this.$get = ["$cacheFactory", function(a) {
      return a("templates")
    }]
  }

  function ib(a, d) {
    function e(a, b, c) {
      var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
        e = {};
      return f(a, function(a, f) {
        var g = a.match(d);
        if (!g) throw De("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
        e[f] = {
          mode: g[1][0],
          collection: "*" === g[2],
          optional: "?" === g[3],
          attrName: g[4] || f
        }
      }), e
    }

    function g(a, b) {
      var c = {
        isolateScope: null,
        bindToController: null
      };
      if (v(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), c.isolateScope = {}) : c.isolateScope = e(a.scope, b, !1)), v(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), v(c.bindToController)) {
        var d = a.controller,
          f = a.controllerAs;
        if (!d) throw De("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
        if (!mb(d, f)) throw De("noident", "Cannot bind to controller without identifier for directive '{0}'.", b)
      }
      return c
    }

    function i(a) {
      var b = a.charAt(0);
      if (!b || b !== td(b)) throw De("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", a);
      if (a !== a.trim()) throw De("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a)
    }
    var j = {},
      k = "Directive",
      m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
      n = /(([\w\-]+)(?:\:([^;]+))?;?)/,
      s = L("ngSrc,ngSrcset,src,srcset"),
      w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
      y = /^(on[a-z]+|formaction)$/;
    this.directive = function B(b, c) {
      return na(b, "directive"), x(b) ? (i(b), la(c, "directiveFactory"), j.hasOwnProperty(b) || (j[b] = [], a.factory(b + k, ["$injector", "$exceptionHandler", function(a, c) {
        var d = [];
        return f(j[b], function(e, f) {
          try {
            var h = a.invoke(e);
            A(h) ? h = {
              compile: r(h)
            } : !h.compile && h.link && (h.compile = r(h.link)), h.priority = h.priority || 0, h.index = f, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA";
            var i = h.$$bindings = g(h, h.name);
            v(i.isolateScope) && (h.$$isolateBindings = i.isolateScope), h.$$moduleName = e.$$moduleName, d.push(h)
          } catch (j) {
            c(j)
          }
        }), d
      }])), j[b].push(c)) : f(b, h(B)), this
    }, this.aHrefSanitizationWhitelist = function(a) {
      return u(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
    }, this.imgSrcSanitizationWhitelist = function(a) {
      return u(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
    };
    var z = !0;
    this.debugInfoEnabled = function(a) {
      return u(a) ? (z = a, this) : z
    }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, g, h, i, r, u, B, C, E) {
      function F(a, b) {
        try {
          a.addClass(b)
        } catch (c) {}
      }

      function G(a, b, c, d, e) {
        a instanceof zd || (a = zd(a)), f(a, function(b, c) {
          b.nodeType == Wd && b.nodeValue.match(/\S+/) && (a[c] = zd(b).wrap("<span></span>").parent()[0])
        });
        var g = I(a, b, a, c, d, e);
        G.$$addScopeClass(a);
        var h = null;
        return function(b, c, d) {
          la(b, "scope"), d = d || {};
          var e = d.parentBoundTranscludeFn,
            f = d.transcludeControllers,
            i = d.futureParentElement;
          e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = H(i));
          var j;
          if (j = "html" !== h ? zd(_(h, zd("<div>").append(a).html())) : c ? me.clone.call(a) : a, f)
            for (var k in f) j.data("$" + k + "Controller", f[k].instance);
          return G.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j
        }
      }

      function H(a) {
        var b = a && a[0];
        return b && "foreignobject" !== M(b) && b.toString().match(/SVG/) ? "svg" : "html"
      }

      function I(a, b, d, e, f, g) {
        function h(a, d, e, f) {
          var g, h, i, j, k, l, m, n, q;
          if (o) {
            var r = d.length;
            for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m]
          } else q = d;
          for (k = 0, l = p.length; l > k;)
            if (i = q[p[k++]], g = p[k++], h = p[k++], g) {
              if (g.scope) {
                j = a.$new(), G.$$addScopeInfo(zd(i), j);
                var s = g.$$destroyBindings;
                s && (g.$$destroyBindings = null, j.$on("$destroyed", s))
              } else j = a;
              n = g.transcludeOnThisElement ? J(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? J(a, b) : null, g(h, j, i, e, n, g)
            } else h && h(a, i.childNodes, c, f)
        }
        for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new ga, j = K(a[q], [], i, 0 === q ? e : c, f), k = j.length ? P(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && G.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : I(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
        return n ? h : null
      }

      function J(a, b, c) {
        var d = function(d, e, f, g, h) {
          return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
            parentBoundTranscludeFn: c,
            transcludeControllers: f,
            futureParentElement: g
          })
        };
        return d
      }

      function K(a, b, c, d, e) {
        var f, g, h = a.nodeType,
          i = c.$attr;
        switch (h) {
          case Ud:
            T(b, jb(M(a)), "E", d, e);
            for (var j, k, l, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
              var u = !1,
                w = !1;
              j = r[s], k = j.name, p = Nd(j.value), o = jb(k), (q = ma.test(o)) && (k = k.replace(Ee, "").substr(8).replace(/_(.)/g, function(a, b) {
                return b.toUpperCase()
              }));
              var y = o.replace(/(Start|End)$/, "");
              U(y) && o === y + "Start" && (u = k, w = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), l = jb(k.toLowerCase()), i[l] = k, (q || !c.hasOwnProperty(l)) && (c[l] = p, Sa(a, l) && (c[l] = !0)), ba(a, b, p, l, q), T(b, l, "A", d, e, u, w)
            }
            if (g = a.className, v(g) && (g = g.animVal), x(g) && "" !== g)
              for (; f = n.exec(g);) l = jb(f[2]), T(b, l, "C", d, e) && (c[l] = Nd(f[3])), g = g.substr(f.index + f[0].length);
            break;
          case Wd:
            if (11 === yd)
              for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Wd;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
            Z(b, a.nodeValue);
            break;
          case Xd:
            try {
              f = m.exec(a.nodeValue), f && (l = jb(f[1]), T(b, l, "M", d, e) && (c[l] = Nd(f[2])))
            } catch (z) {}
        }
        return b.sort(X), b
      }

      function L(a, b, c) {
        var d = [],
          e = 0;
        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw De("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
            a.nodeType == Ud && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
          } while (e > 0)
        } else d.push(a);
        return zd(d)
      }

      function O(a, b, c) {
        return function(d, e, f, g, h) {
          return e = L(e[0], b, c), a(d, e, f, g, h)
        }
      }

      function P(a, d, f, g, h, j, k, l, m) {
        function n(a, b, c, d) {
          a && (c && (a = O(a, c, d)), a.require = r.require, a.directiveName = s, (E === r || r.$$isolateScope) && (a = da(a, {
            isolateScope: !0
          })), k.push(a)), b && (c && (b = O(b, c, d)), b.require = r.require, b.directiveName = s, (E === r || r.$$isolateScope) && (b = da(b, {
            isolateScope: !0
          })), l.push(b))
        }

        function o(a, b, c, d) {
          var e;
          if (x(b)) {
            var f = b.match(w),
              g = b.substring(f[0].length),
              h = f[1] || f[3],
              i = "?" === f[2];
            if ("^^" === h ? c = c.parent() : (e = d && d[g], e = e && e.instance), !e) {
              var j = "$" + g + "Controller";
              e = h ? c.inheritedData(j) : c.data(j)
            }
            if (!e && !i) throw De("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", g, a)
          } else if (Ld(b)) {
            e = [];
            for (var k = 0, l = b.length; l > k; k++) e[k] = o(a, b[k], c, d)
          }
          return e || null
        }

        function p(a, b, c, d, e, f) {
          var g = qa();
          for (var h in d) {
            var j = d[h],
              k = {
                $scope: j === E || j.$$isolateScope ? e : f,
                $element: a,
                $attrs: b,
                $transclude: c
              },
              l = j.controller;
            "@" == l && (l = b[j.name]);
            var m = i(l, k, !0, j.controllerAs);
            g[j.name] = m, M || a.data("$" + j.name + "Controller", m.instance)
          }
          return g
        }

        function q(a, b, e, g, h, i) {
          function j(a, b, d) {
            var e;
            return D(a) || (d = b, b = a, a = c), M && (e = t), d || (d = M ? v.parent() : v), h(a, b, e, d, H)
          }
          var m, n, q, r, s, t, u, v, w;
          if (d === e ? (w = f, v = f.$$element) : (v = zd(e), w = new ga(v, f)), E && (s = b.$new(!0)), h && (u = j, u.$$boundTransclude = h), C && (t = p(v, w, u, C, s, b)), E && (G.$$addScopeInfo(v, s, !0, !(F && (F === E || F === E.$$originalDirective))), G.$$addScopeClass(v, !0), s.$$isolateBindings = E.$$isolateBindings, fa(b, w, s, s.$$isolateBindings, E, s)), t) {
            var x, y, z = E || B;
            z && t[z.name] && (x = z.$$bindings.bindToController, r = t[z.name], r && r.identifier && x && (y = r, i.$$destroyBindings = fa(b, w, r.instance, x, z)));
            for (m in t) {
              r = t[m];
              var A = r();
              A !== r.instance && (r.instance = A, v.data("$" + m + "Controller", A), r === y && (i.$$destroyBindings(), i.$$destroyBindings = fa(b, w, A, x, z)))
            }
          }
          for (m = 0, n = k.length; n > m; m++) q = k[m], ea(q, q.isolateScope ? s : b, v, w, q.require && o(q.directiveName, q.require, v, t), u);
          var H = b;
          for (E && (E.template || null === E.templateUrl) && (H = s), a && a(H, e.childNodes, c, h), m = l.length - 1; m >= 0; m--) q = l[m], ea(q, q.isolateScope ? s : b, v, w, q.require && o(q.directiveName, q.require, v, t), u)
        }
        m = m || {};
        for (var r, s, t, u, y, z = -Number.MAX_VALUE, B = m.newScopeDirective, C = m.controllerDirectives, E = m.newIsolateScopeDirective, F = m.templateDirective, H = m.nonTlbTranscludeDirective, I = !1, J = !1, M = m.hasElementTranscludeDirective, N = f.$$element = zd(d), P = j, Q = g, T = 0, U = a.length; U > T; T++) {
          r = a[T];
          var X = r.$$start,
            Z = r.$$end;
          if (X && (N = L(d, X, Z)), t = c, z > r.priority) break;
          if ((y = r.scope) && (r.templateUrl || (v(y) ? (Y("new/isolated scope", E || B, r, N), E = r) : Y("new/isolated scope", E, r, N)), B = B || r), s = r.name, !r.templateUrl && r.controller && (y = r.controller, C = C || qa(), Y("'" + s + "' controller", C[s], r, N), C[s] = r), (y = r.transclude) && (I = !0, r.$$tlb || (Y("transclusion", H, r, N), H = r), "element" == y ? (M = !0, z = r.priority, t = N, N = f.$$element = zd(b.createComment(" " + s + ": " + f[s] + " ")), d = N[0], ca(h, S(t), d), Q = G(t, g, z, P && P.name, {
              nonTlbTranscludeDirective: H
            })) : (t = zd(Da(d)).contents(), N.empty(), Q = G(t, g))), r.template)
            if (J = !0, Y("template", F, r, N), F = r, y = A(r.template) ? r.template(N, f) : r.template, y = ka(y), r.replace) {
              if (P = r, t = xa(y) ? [] : lb(_(r.templateNamespace, Nd(y))), d = t[0], 1 != t.length || d.nodeType !== Ud) throw De("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", s, "");
              ca(h, N, d);
              var aa = {
                  $attr: {}
                },
                ba = K(d, [], aa),
                ha = a.splice(T + 1, a.length - (T + 1));
              E && R(ba), a = a.concat(ba).concat(ha), V(f, aa), U = a.length
            } else N.html(y);
          if (r.templateUrl) J = !0, Y("template", F, r, N), F = r, r.replace && (P = r), q = W(a.splice(T, a.length - T), N, f, h, I && Q, k, l, {
            controllerDirectives: C,
            newScopeDirective: B !== r && B,
            newIsolateScopeDirective: E,
            templateDirective: F,
            nonTlbTranscludeDirective: H
          }), U = a.length;
          else if (r.compile) try {
            u = r.compile(N, f, Q), A(u) ? n(null, u, X, Z) : u && n(u.pre, u.post, X, Z)
          } catch (ia) {
            e(ia, $(N))
          }
          r.terminal && (q.terminal = !0, z = Math.max(z, r.priority))
        }
        return q.scope = B && B.scope === !0, q.transcludeOnThisElement = I, q.templateOnThisElement = J, q.transclude = Q, m.hasElementTranscludeDirective = M, q
      }

      function R(a) {
        for (var b = 0, c = a.length; c > b; b++) a[b] = o(a[b], {
          $$isolateScope: !0
        })
      }

      function T(b, c, d, f, g, h, i) {
        if (c === g) return null;
        var l = null;
        if (j.hasOwnProperty(c))
          for (var m, n = a.get(c + k), p = 0, q = n.length; q > p; p++) try {
            m = n[p], (t(f) || f > m.priority) && -1 != m.restrict.indexOf(d) && (h && (m = o(m, {
              $$start: h,
              $$end: i
            })), b.push(m), l = m)
          } catch (r) {
            e(r)
          }
        return l
      }

      function U(b) {
        if (j.hasOwnProperty(b))
          for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++)
            if (c = d[e], c.multiElement) return !0;
        return !1
      }

      function V(a, b) {
        var c = b.$attr,
          d = a.$attr,
          e = a.$$element;
        f(a, function(d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
        }), f(b, function(b, f) {
          "class" == f ? (F(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
        })
      }

      function W(a, b, c, d, e, h, i, j) {
        var k, l, m = [],
          n = b[0],
          p = a.shift(),
          q = o(p, {
            templateUrl: null,
            transclude: null,
            replace: null,
            $$originalDirective: p
          }),
          r = A(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
          s = p.templateNamespace;
        return b.empty(), g(r).then(function(g) {
            var o, t, u, w;
            if (g = ka(g), p.replace) {
              if (u = xa(g) ? [] : lb(_(s, Nd(g))), o = u[0], 1 != u.length || o.nodeType !== Ud) throw De("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
              t = {
                $attr: {}
              }, ca(d, b, o);
              var x = K(o, [], t);
              v(p.scope) && R(x), a = x.concat(a), V(c, t)
            } else o = n, b.html(g);
            for (a.unshift(q), k = P(a, o, c, e, b, p, h, i, j), f(d, function(a, c) {
                a == o && (d[c] = b[0])
              }), l = I(b[0].childNodes, e); m.length;) {
              var y = m.shift(),
                z = m.shift(),
                A = m.shift(),
                B = m.shift(),
                C = b[0];
              if (!y.$$destroyed) {
                if (z !== n) {
                  var D = z.className;
                  j.hasElementTranscludeDirective && p.replace || (C = Da(o)), ca(A, zd(z), C), F(zd(C), D)
                }
                w = k.transcludeOnThisElement ? J(y, k.transclude, B) : B, k(l, y, C, d, w, k)
              }
            }
            m = null
          }),
          function(a, b, c, d, e) {
            var f = e;
            b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = J(b, k.transclude, e)), k(l, b, c, d, f, k)))
          }
      }

      function X(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
      }

      function Y(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : ""
        }
        if (b) throw De("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, $(d))
      }

      function Z(a, b) {
        var c = d(b, !0);
        c && a.push({
          priority: 0,
          compile: function(a) {
            var b = a.parent(),
              d = !!b.length;
            return d && G.$$addBindingClass(b),
              function(a, b) {
                var e = b.parent();
                d || G.$$addBindingClass(e), G.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                  b[0].nodeValue = a
                })
              }
          }
        })
      }

      function _(a, c) {
        switch (a = td(a || "html")) {
          case "svg":
          case "math":
            var d = b.createElement("div");
            return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
          default:
            return c
        }
      }

      function aa(a, b) {
        if ("srcdoc" == b) return B.HTML;
        var c = M(a);
        return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0
      }

      function ba(a, b, c, e, f) {
        var g = aa(a, e);
        f = s[e] || f;
        var h = d(c, !0, g, f);
        if (h) {
          if ("multiple" === e && "select" === M(a)) throw De("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", $(a));
          b.push({
            priority: 100,
            compile: function() {
              return {
                pre: function(a, b, i) {
                  var j = i.$$observers || (i.$$observers = qa());
                  if (y.test(e)) throw De("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                  var k = i[e];
                  k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                    "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                  }))
                }
              }
            }
          })
        }
      }

      function ca(a, c, d) {
        var e, f, g = c[0],
          h = c.length,
          i = g.parentNode;
        if (a)
          for (e = 0, f = a.length; f > e; e++)
            if (a[e] == g) {
              a[e++] = d;
              for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
              a.length -= h - 1, a.context === g && (a.context = d);
              break
            }
        i && i.replaceChild(d, g);
        var m = b.createDocumentFragment();
        m.appendChild(g), zd.hasData(g) && (zd(d).data(zd(g).data()), Ad ? (Kd = !0, Ad.cleanData([g])) : delete zd.cache[g[zd.expando]]);
        for (var n = 1, o = c.length; o > n; n++) {
          var p = c[n];
          zd(p).remove(), m.appendChild(p), delete c[n]
        }
        c[0] = d, c.length = 1
      }

      function da(a, b) {
        return l(function() {
          return a.apply(null, arguments)
        }, a, b)
      }

      function ea(a, b, c, d, f, g) {
        try {
          a(b, c, d, f, g)
        } catch (h) {
          e(h, $(c))
        }
      }

      function fa(a, b, c, e, g, i) {
        var j;
        f(e, function(e, f) {
          var i, k, l, m, n = e.attrName,
            o = e.optional,
            q = e.mode;
          switch (q) {
            case "@":
              o || ud.call(b, n) || (c[f] = b[n] = void 0), b.$observe(n, function(a) {
                x(a) && (c[f] = a)
              }), b.$$observers[n].$$scope = a, x(b[n]) && (c[f] = d(b[n])(a));
              break;
            case "=":
              if (!ud.call(b, n)) {
                if (o) break;
                b[n] = void 0
              }
              if (o && !b[n]) break;
              k = h(b[n]), m = k.literal ? Q : function(a, b) {
                return a === b || a !== a && b !== b
              }, l = k.assign || function() {
                throw i = c[f] = k(a), De("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", b[n], g.name)
              }, i = c[f] = k(a);
              var r = function(b) {
                return m(b, c[f]) || (m(b, i) ? l(a, b = c[f]) : c[f] = b), i = b
              };
              r.$stateful = !0;
              var s;
              s = e.collection ? a.$watchCollection(b[n], r) : a.$watch(h(b[n], r), null, k.literal), j = j || [], j.push(s);
              break;
            case "&":
              if (k = b.hasOwnProperty(n) ? h(b[n]) : p, k === p && o) break;
              c[f] = function(b) {
                return k(a, b)
              }
          }
        });
        var k = j ? function() {
          for (var a = 0, b = j.length; b > a; ++a) j[a]()
        } : p;
        return i && k !== p ? (i.$on("$destroy", k), p) : k
      }
      var ga = function(a, b) {
        if (b) {
          var c, d, e, f = Object.keys(b);
          for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
        } else this.$attr = {};
        this.$$element = a
      };
      ga.prototype = {
        $normalize: jb,
        $addClass: function(a) {
          a && a.length > 0 && C.addClass(this.$$element, a)
        },
        $removeClass: function(a) {
          a && a.length > 0 && C.removeClass(this.$$element, a)
        },
        $updateClass: function(a, b) {
          var c = kb(a, b);
          c && c.length && C.addClass(this.$$element, c);
          var d = kb(b, a);
          d && d.length && C.removeClass(this.$$element, d)
        },
        $set: function(a, b, c, d) {
          var g, h = this.$$element[0],
            i = Sa(h, a),
            j = Ta(a),
            k = a;
          if (i ? (this.$$element.prop(a, b), d = i) : j && (this[j] = b, k = j), this[a] = b, d ? this.$attr[a] = d : (d = this.$attr[a], d || (this.$attr[a] = d = ja(a, "-"))), g = M(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = E(b, "src" === a);
          else if ("img" === g && "srcset" === a) {
            for (var l = "", m = Nd(b), n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, o = /\s/.test(m) ? n : /(,)/, p = m.split(o), q = Math.floor(p.length / 2), r = 0; q > r; r++) {
              var s = 2 * r;
              l += E(Nd(p[s]), !0), l += " " + Nd(p[s + 1])
            }
            var u = Nd(p[2 * r]).split(/\s/);
            l += E(Nd(u[0]), !0), 2 === u.length && (l += " " + Nd(u[1])), this[a] = b = l
          }
          c !== !1 && (null === b || t(b) ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
          var v = this.$$observers;
          v && f(v[k], function(a) {
            try {
              a(b)
            } catch (c) {
              e(c)
            }
          })
        },
        $observe: function(a, b) {
          var c = this,
            d = c.$$observers || (c.$$observers = qa()),
            e = d[a] || (d[a] = []);
          return e.push(b), r.$evalAsync(function() {
              e.$$inter || !c.hasOwnProperty(a) || t(c[a]) || b(c[a])
            }),
            function() {
              N(e, b)
            }
        }
      };
      var ha = d.startSymbol(),
        ia = d.endSymbol(),
        ka = "{{" == ha || "}}" == ia ? q : function(a) {
          return a.replace(/\{\{/g, ha).replace(/}}/g, ia)
        },
        ma = /^ngAttr[A-Z]/;
      return G.$$addBindingInfo = z ? function(a, b) {
        var c = a.data("$binding") || [];
        Ld(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
      } : p, G.$$addBindingClass = z ? function(a) {
        F(a, "ng-binding")
      } : p, G.$$addScopeInfo = z ? function(a, b, c, d) {
        var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
        a.data(e, b)
      } : p, G.$$addScopeClass = z ? function(a, b) {
        F(a, b ? "ng-isolate-scope" : "ng-scope")
      } : p, G
    }]
  }

  function jb(a) {
    return wa(a.replace(Ee, ""))
  }

  function kb(a, b) {
    var c = "",
      d = a.split(/\s+/),
      e = b.split(/\s+/);
    a: for (var f = 0; f < d.length; f++) {
      for (var g = d[f], h = 0; h < e.length; h++)
        if (g == e[h]) continue a;
      c += (c.length > 0 ? " " : "") + g
    }
    return c
  }

  function lb(a) {
    a = zd(a);
    var b = a.length;
    if (1 >= b) return a;
    for (; b--;) {
      var c = a[b];
      c.nodeType === Xd && Dd.call(a, b, 1)
    }
    return a
  }

  function mb(a, b) {
    if (b && x(b)) return b;
    if (x(a)) {
      var c = Ge.exec(a);
      if (c) return c[3]
    }
  }

  function nb() {
    var a = {},
      b = !1;
    this.register = function(b, c) {
      na(b, "controller"), v(b) ? l(a, b) : a[b] = c
    }, this.allowGlobals = function() {
      b = !0
    }, this.$get = ["$injector", "$window", function(e, f) {
      function g(a, b, c, e) {
        if (!a || !v(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
        a.$scope[b] = c
      }
      return function(d, h, i, j) {
        var k, m, n, o;
        if (i = i === !0, j && x(j) && (o = j), x(d)) {
          if (m = d.match(Ge), !m) throw Fe("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
          n = m[1], o = o || m[3], d = a.hasOwnProperty(n) ? a[n] : oa(h.$scope, n, !0) || (b ? oa(f, n, !0) : c), ma(d, n, !0)
        }
        if (i) {
          var p = (Ld(d) ? d[d.length - 1] : d).prototype;
          k = Object.create(p || null), o && g(h, o, k, n || d.name);
          var q;
          return q = l(function() {
            var a = e.invoke(d, k, h, n);
            return a !== k && (v(a) || A(a)) && (k = a, o && g(h, o, k, n || d.name)), k
          }, {
            instance: k,
            identifier: o
          })
        }
        return k = e.instantiate(d, h, n), o && g(h, o, k, n || d.name), k
      }
    }]
  }

  function ob() {
    this.$get = ["$window", function(a) {
      return zd(a.document)
    }]
  }

  function pb() {
    this.$get = ["$log", function(a) {
      return function(b, c) {
        a.error.apply(a, arguments)
      }
    }]
  }

  function qb(a) {
    return v(a) ? z(a) ? a.toISOString() : V(a) : a
  }

  function rb() {
    this.$get = function() {
      return function(a) {
        if (!a) return "";
        var b = [];
        return g(a, function(a, c) {
          null === a || t(a) || (Ld(a) ? f(a, function(a, d) {
            b.push(da(c) + "=" + da(qb(a)))
          }) : b.push(da(c) + "=" + da(qb(a))))
        }), b.join("&")
      }
    }
  }

  function sb() {
    this.$get = function() {
      return function(a) {
        function b(a, d, e) {
          null === a || t(a) || (Ld(a) ? f(a, function(a, c) {
            b(a, d + "[" + (v(a) ? c : "") + "]")
          }) : v(a) && !z(a) ? g(a, function(a, c) {
            b(a, d + (e ? "" : "[") + c + (e ? "" : "]"))
          }) : c.push(da(d) + "=" + da(qb(a))))
        }
        if (!a) return "";
        var c = [];
        return b(a, "", !0), c.join("&")
      }
    }
  }

  function tb(a, b) {
    if (x(a)) {
      var c = a.replace(Me, "").trim();
      if (c) {
        var d = b("Content-Type");
        (d && 0 === d.indexOf(Ie) || ub(c)) && (a = W(c))
      }
    }
    return a
  }

  function ub(a) {
    var b = a.match(Ke);
    return b && Le[b[0]].test(a)
  }

  function vb(a) {
    function b(a, b) {
      a && (d[a] = d[a] ? d[a] + ", " + b : b)
    }
    var c, d = qa();
    return x(a) ? f(a.split("\n"), function(a) {
      c = a.indexOf(":"), b(td(Nd(a.substr(0, c))), Nd(a.substr(c + 1)))
    }) : v(a) && f(a, function(a, c) {
      b(td(c), Nd(a))
    }), d
  }

  function wb(a) {
    var b;
    return function(c) {
      if (b || (b = vb(a)), c) {
        var d = b[td(c)];
        return void 0 === d && (d = null), d
      }
      return b
    }
  }

  function xb(a, b, c, d) {
    return A(d) ? d(a, b, c) : (f(d, function(d) {
      a = d(a, b, c)
    }), a)
  }

  function yb(a) {
    return a >= 200 && 300 > a
  }

  function zb() {
    var a = this.defaults = {
        transformResponse: [tb],
        transformRequest: [function(a) {
          return !v(a) || E(a) || G(a) || F(a) ? a : V(a)
        }],
        headers: {
          common: {
            Accept: "application/json, text/plain, */*"
          },
          post: P(Je),
          put: P(Je),
          patch: P(Je)
        },
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        paramSerializer: "$httpParamSerializer"
      },
      b = !1;
    this.useApplyAsync = function(a) {
      return u(a) ? (b = !!a, this) : b
    };
    var e = !0;
    this.useLegacyPromiseExtensions = function(a) {
      return u(a) ? (e = !!a, this) : e
    };
    var g = this.interceptors = [];
    this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(h, i, j, k, m, n) {
      function o(b) {
        function g(a) {
          var b = l({}, a);
          return a.data ? b.data = xb(a.data, a.headers, a.status, j.transformResponse) : b.data = a.data, yb(a.status) ? b : m.reject(b)
        }

        function h(a, b) {
          var c, d = {};
          return f(a, function(a, e) {
            A(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
          }), d
        }

        function i(b) {
          var c, d, e, f = a.headers,
            g = l({}, b.headers);
          f = l({}, f.common, f[td(b.method)]);
          a: for (c in f) {
            d = td(c);
            for (e in g)
              if (td(e) === d) continue a;
            g[c] = f[c]
          }
          return h(g, P(b))
        }
        if (!Id.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
        var j = l({
          method: "get",
          transformRequest: a.transformRequest,
          transformResponse: a.transformResponse,
          paramSerializer: a.paramSerializer
        }, b);
        j.headers = i(b), j.method = vd(j.method), j.paramSerializer = x(j.paramSerializer) ? n.get(j.paramSerializer) : j.paramSerializer;
        var k = function(b) {
            var d = b.headers,
              e = xb(b.data, wb(d), c, b.transformRequest);
            return t(e) && f(d, function(a, b) {
              "content-type" === td(b) && delete d[b]
            }), t(b.withCredentials) && !t(a.withCredentials) && (b.withCredentials = a.withCredentials), r(b, e).then(g, g)
          },
          o = [k, c],
          p = m.when(j);
        for (f(y, function(a) {
            (a.request || a.requestError) && o.unshift(a.request, a.requestError), (a.response || a.responseError) && o.push(a.response, a.responseError)
          }); o.length;) {
          var q = o.shift(),
            s = o.shift();
          p = p.then(q, s)
        }
        return e ? (p.success = function(a) {
          return ma(a, "fn"), p.then(function(b) {
            a(b.data, b.status, b.headers, j)
          }), p
        }, p.error = function(a) {
          return ma(a, "fn"), p.then(null, function(b) {
            a(b.data, b.status, b.headers, j)
          }), p
        }) : (p.success = Oe("success"), p.error = Oe("error")), p
      }

      function p(a) {
        f(arguments, function(a) {
          o[a] = function(b, c) {
            return o(l({}, c || {}, {
              method: a,
              url: b
            }))
          }
        })
      }

      function q(a) {
        f(arguments, function(a) {
          o[a] = function(b, c, d) {
            return o(l({}, d || {}, {
              method: a,
              url: b,
              data: c
            }))
          }
        })
      }

      function r(d, e) {
        function f(a, c, d, e) {
          function f() {
            g(c, a, d, e)
          }
          n && (yb(a) ? n.put(y, [a, c, vb(d), e]) : n.remove(y)), b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
        }

        function g(a, b, c, e) {
          b = b >= -1 ? b : 0, (yb(b) ? q.resolve : q.reject)({
            data: a,
            status: b,
            headers: wb(c),
            config: d,
            statusText: e
          })
        }

        function j(a) {
          g(a.data, a.status, P(a.headers()), a.statusText)
        }

        function l() {
          var a = o.pendingRequests.indexOf(d); - 1 !== a && o.pendingRequests.splice(a, 1)
        }
        var n, p, q = m.defer(),
          r = q.promise,
          x = d.headers,
          y = s(d.url, d.paramSerializer(d.params));
        if (o.pendingRequests.push(d), r.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = v(d.cache) ? d.cache : v(a.cache) ? a.cache : w), n && (p = n.get(y), u(p) ? I(p) ? p.then(j, j) : Ld(p) ? g(p[1], p[0], P(p[2]), p[3]) : g(p, 200, {}, "OK") : n.put(y, r)), t(p)) {
          var z = Ac(d.url) ? i()[d.xsrfCookieName || a.xsrfCookieName] : c;
          z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z), h(d.method, y, e, f, x, d.timeout, d.withCredentials, d.responseType)
        }
        return r
      }

      function s(a, b) {
        return b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
      }
      var w = j("$http");
      a.paramSerializer = x(a.paramSerializer) ? n.get(a.paramSerializer) : a.paramSerializer;
      var y = [];
      return f(g, function(a) {
        y.unshift(x(a) ? n.get(a) : n.invoke(a))
      }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), o.defaults = a, o
    }]
  }

  function Ab() {
    this.$get = function() {
      return function() {
        return new a.XMLHttpRequest
      }
    }
  }

  function Bb() {
    this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(a, b, c, d) {
      return Cb(a, d, a.defer, b.angular.callbacks, c[0])
    }]
  }

  function Cb(a, b, c, d, e) {
    function g(a, b, c) {
      var f = e.createElement("script"),
        g = null;
      return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) {
        ce(f, "load", g), ce(f, "error", g), e.body.removeChild(f), f = null;
        var h = -1,
          i = "unknown";
        a && ("load" !== a.type || d[b].called || (a = {
          type: "error"
        }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
      }, be(f, "load", g), be(f, "error", g), e.body.appendChild(f), g
    }
    return function(e, h, i, j, k, l, m, n) {
      function o() {
        s && s(), v && v.abort()
      }

      function q(b, d, e, f, g) {
        u(y) && c.cancel(y), s = v = null, b(d, e, f, g), a.$$completeOutstandingRequest(p)
      }
      if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" == td(e)) {
        var r = "_" + (d.counter++).toString(36);
        d[r] = function(a) {
          d[r].data = a, d[r].called = !0
        };
        var s = g(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function(a, b) {
          q(j, a, d[r].data, "", b), d[r] = p
        })
      } else {
        var v = b(e, h);
        v.open(e, h, !0), f(k, function(a, b) {
          u(a) && v.setRequestHeader(b, a)
        }), v.onload = function() {
          var a = v.statusText || "",
            b = "response" in v ? v.response : v.responseText,
            c = 1223 === v.status ? 204 : v.status;
          0 === c && (c = b ? 200 : "file" == zc(h).protocol ? 404 : 0), q(j, c, b, v.getAllResponseHeaders(), a)
        };
        var w = function() {
          q(j, -1, null, null, "")
        };
        if (v.onerror = w, v.onabort = w, m && (v.withCredentials = !0), n) try {
          v.responseType = n
        } catch (x) {
          if ("json" !== n) throw x
        }
        v.send(t(i) ? null : i)
      }
      if (l > 0) var y = c(o, l);
      else I(l) && l.then(o)
    }
  }

  function Db() {
    var a = "{{",
      b = "}}";
    this.startSymbol = function(b) {
      return b ? (a = b, this) : a
    }, this.endSymbol = function(a) {
      return a ? (b = a, this) : b
    }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
      function f(a) {
        return "\\\\\\" + a
      }

      function g(c) {
        return c.replace(m, a).replace(n, b)
      }

      function h(a) {
        if (null == a) return "";
        switch (typeof a) {
          case "string":
            break;
          case "number":
            a = "" + a;
            break;
          default:
            a = V(a)
        }
        return a
      }

      function i(f, i, m, n) {
        function o(a) {
          try {
            return a = C(a), n && !u(a) ? a : h(a)
          } catch (b) {
            d(Pe.interr(f, b))
          }
        }
        n = !!n;
        for (var p, q, r, s = 0, v = [], w = [], x = f.length, y = [], z = []; x > s;) {
          if (-1 == (p = f.indexOf(a, s)) || -1 == (q = f.indexOf(b, p + j))) {
            s !== x && y.push(g(f.substring(s)));
            break
          }
          s !== p && y.push(g(f.substring(s, p))), r = f.substring(p + j, q), v.push(r), w.push(c(r, o)), s = q + k, z.push(y.length), y.push("")
        }
        if (m && y.length > 1 && Pe.throwNoconcat(f), !i || v.length) {
          var B = function(a) {
              for (var b = 0, c = v.length; c > b; b++) {
                if (n && t(a[b])) return;
                y[z[b]] = a[b]
              }
              return y.join("")
            },
            C = function(a) {
              return m ? e.getTrusted(m, a) : e.valueOf(a)
            };
          return l(function(a) {
            var b = 0,
              c = v.length,
              e = new Array(c);
            try {
              for (; c > b; b++) e[b] = w[b](a);
              return B(e)
            } catch (g) {
              d(Pe.interr(f, g))
            }
          }, {
            exp: f,
            expressions: v,
            $$watchDelegate: function(a, b) {
              var c;
              return a.$watchGroup(w, function(d, e) {
                var f = B(d);
                A(b) && b.call(this, f, d !== e ? c : f, a), c = f
              })
            }
          })
        }
      }
      var j = a.length,
        k = b.length,
        m = new RegExp(a.replace(/./g, f), "g"),
        n = new RegExp(b.replace(/./g, f), "g");
      return i.startSymbol = function() {
        return a
      }, i.endSymbol = function() {
        return b
      }, i
    }]
  }

  function Eb() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
      function e(e, g, h, i) {
        var j = arguments.length > 4,
          k = j ? S(arguments, 4) : [],
          l = b.setInterval,
          m = b.clearInterval,
          n = 0,
          o = u(i) && !i,
          p = (o ? d : c).defer(),
          q = p.promise;
        return h = u(h) ? h : 0, q.then(null, null, j ? function() {
          e.apply(null, k)
        } : e), q.$$intervalId = l(function() {
          p.notify(n++), h > 0 && n >= h && (p.resolve(n), m(q.$$intervalId), delete f[q.$$intervalId]), o || a.$apply()
        }, g), f[q.$$intervalId] = p, q
      }
      var f = {};
      return e.cancel = function(a) {
        return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
      }, e
    }]
  }

  function Fb(a) {
    for (var b = a.split("/"), c = b.length; c--;) b[c] = ca(b[c]);
    return b.join("/")
  }

  function Gb(a, b) {
    var c = zc(a);
    b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = n(c.port) || Re[c.protocol] || null
  }

  function Hb(a, b) {
    var c = "/" !== a.charAt(0);
    c && (a = "/" + a);
    var d = zc(a);
    b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = aa(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
  }

  function Ib(a, b) {
    return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
  }

  function Jb(a) {
    var b = a.indexOf("#");
    return -1 == b ? a : a.substr(0, b)
  }

  function Kb(a) {
    return a.replace(/(#.+)|#$/, "$1")
  }

  function Lb(a) {
    return a.substr(0, Jb(a).lastIndexOf("/") + 1)
  }

  function Mb(a) {
    return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
  }

  function Nb(a, b, c) {
    this.$$html5 = !0, c = c || "", Gb(a, this), this.$$parse = function(a) {
      var c = Ib(b, a);
      if (!x(c)) throw Se("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, b);
      Hb(c, this), this.$$path || (this.$$path = "/"), this.$$compose()
    }, this.$$compose = function() {
      var a = ba(this.$$search),
        c = this.$$hash ? "#" + ca(this.$$hash) : "";
      this.$$url = Fb(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = b + this.$$url.substr(1)
    }, this.$$parseLinkUrl = function(d, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
      var f, g, h;
      return u(f = Ib(a, d)) ? (g = f, h = u(f = Ib(c, f)) ? b + (Ib("/", f) || f) : a + g) : u(f = Ib(b, d)) ? h = b + f : b == d + "/" && (h = b), h && this.$$parse(h), !!h
    }
  }

  function Ob(a, b, c) {
    Gb(a, this), this.$$parse = function(d) {
      function e(a, b, c) {
        var d, e = /^\/[A-Z]:(\/.*)/;
        return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
      }
      var f, g = Ib(a, d) || Ib(b, d);
      t(g) || "#" !== g.charAt(0) ? this.$$html5 ? f = g : (f = "", t(g) && (a = d, this.replace())) : (f = Ib(c, g), t(f) && (f = g)), Hb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
    }, this.$$compose = function() {
      var b = ba(this.$$search),
        d = this.$$hash ? "#" + ca(this.$$hash) : "";
      this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + (this.$$url ? c + this.$$url : "")
    }, this.$$parseLinkUrl = function(b, c) {
      return Jb(a) == Jb(b) ? (this.$$parse(b), !0) : !1
    }
  }

  function Pb(a, b, c) {
    this.$$html5 = !0, Ob.apply(this, arguments), this.$$parseLinkUrl = function(d, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
      var f, g;
      return a == Jb(d) ? f = d : (g = Ib(b, d)) ? f = a + c + g : b === d + "/" && (f = b), f && this.$$parse(f), !!f
    }, this.$$compose = function() {
      var b = ba(this.$$search),
        d = this.$$hash ? "#" + ca(this.$$hash) : "";
      this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + c + this.$$url
    }
  }

  function Qb(a) {
    return function() {
      return this[a]
    }
  }

  function Rb(a, b) {
    return function(c) {
      return t(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
    }
  }

  function Sb() {
    var a = "",
      b = {
        enabled: !1,
        requireBase: !0,
        rewriteLinks: !0
      };
    this.hashPrefix = function(b) {
      return u(b) ? (a = b, this) : a
    }, this.html5Mode = function(a) {
      return H(a) ? (b.enabled = a, this) : v(a) ? (H(a.enabled) && (b.enabled = a.enabled), H(a.requireBase) && (b.requireBase = a.requireBase), H(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
    }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
      function h(a, b, c) {
        var e = j.url(),
          f = j.$$state;
        try {
          d.url(a, b, c), j.$$state = d.state()
        } catch (g) {
          throw j.url(e), j.$$state = f, g
        }
      }

      function i(a, b) {
        c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
      }
      var j, k, l, m = d.baseHref(),
        n = d.url();
      if (b.enabled) {
        if (!m && b.requireBase) throw Se("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
        l = Mb(n) + (m || "/"), k = e.history ? Nb : Pb
      } else l = Jb(n), k = Ob;
      var o = Lb(l);
      j = new k(l, o, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
      var p = /^\s*(javascript|mailto):/i;
      f.on("click", function(a) {
        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
          for (var e = zd(a.target);
            "a" !== M(e[0]);)
            if (e[0] === f[0] || !(e = e.parent())[0]) return;
          var h = e.prop("href"),
            i = e.attr("href") || e.attr("xlink:href");
          v(h) && "[object SVGAnimatedString]" === h.toString() && (h = zc(h.animVal).href), p.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
        }
      }), Kb(j.absUrl()) != Kb(n) && d.url(j.absUrl(), !0);
      var q = !0;
      return d.onUrlChange(function(a, b) {
        return t(Ib(o, a)) ? void(g.location.href = a) : (c.$evalAsync(function() {
          var d, e = j.absUrl(),
            f = j.$$state;
          j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (q = !1, i(e, f)))
        }), void(c.$$phase || c.$digest()))
      }), c.$watch(function() {
        var a = Kb(d.url()),
          b = Kb(j.absUrl()),
          f = d.state(),
          g = j.$$replace,
          k = a !== b || j.$$html5 && e.history && f !== j.$$state;
        (q || k) && (q = !1, c.$evalAsync(function() {
          var b = j.absUrl(),
            d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
          j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
        })), j.$$replace = !1
      }), j
    }]
  }

  function Tb() {
    var a = !0,
      b = this;
    this.debugEnabled = function(b) {
      return u(b) ? (a = b, this) : a
    }, this.$get = ["$window", function(c) {
      function d(a) {
        return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
      }

      function e(a) {
        var b = c.console || {},
          e = b[a] || b.log || p,
          g = !1;
        try {
          g = !!e.apply
        } catch (h) {}
        return g ? function() {
          var a = [];
          return f(arguments, function(b) {
            a.push(d(b))
          }), e.apply(b, a)
        } : function(a, b) {
          e(a, null == b ? "" : b)
        }
      }
      return {
        log: e("log"),
        info: e("info"),
        warn: e("warn"),
        error: e("error"),
        debug: function() {
          var c = e("debug");
          return function() {
            a && c.apply(b, arguments)
          }
        }()
      }
    }]
  }

  function Ub(a, b) {
    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw Ue("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
    return a
  }

  function Vb(a, b) {
    if (a += "", !x(a)) throw Ue("iseccst", "Cannot convert object to primitive value! Expression: {0}", b);
    return a
  }

  function Wb(a, b) {
    if (a) {
      if (a.constructor === a) throw Ue("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
      if (a.window === a) throw Ue("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
      if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw Ue("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
      if (a === Object) throw Ue("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
    }
    return a
  }

  function Xb(a, b) {
    if (a) {
      if (a.constructor === a) throw Ue("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
      if (a === Ve || a === We || a === Xe) throw Ue("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
    }
  }

  function Yb(a, b) {
    if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw Ue("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", b)
  }

  function Zb(a, b) {
    return "undefined" != typeof a ? a : b
  }

  function $b(a, b) {
    return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b
  }

  function _b(a, b) {
    var c = a(b);
    return !c.$stateful
  }

  function ac(a, b) {
    var c, d;
    switch (a.type) {
      case _e.Program:
        c = !0, f(a.body, function(a) {
          ac(a.expression, b), c = c && a.expression.constant
        }), a.constant = c;
        break;
      case _e.Literal:
        a.constant = !0, a.toWatch = [];
        break;
      case _e.UnaryExpression:
        ac(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
        break;
      case _e.BinaryExpression:
        ac(a.left, b), ac(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
        break;
      case _e.LogicalExpression:
        ac(a.left, b), ac(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
        break;
      case _e.ConditionalExpression:
        ac(a.test, b), ac(a.alternate, b), ac(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
        break;
      case _e.Identifier:
        a.constant = !1, a.toWatch = [a];
        break;
      case _e.MemberExpression:
        ac(a.object, b), a.computed && ac(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
        break;
      case _e.CallExpression:
        c = a.filter ? _b(b, a.callee.name) : !1, d = [], f(a.arguments, function(a) {
          ac(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
        }), a.constant = c, a.toWatch = a.filter && _b(b, a.callee.name) ? d : [a];
        break;
      case _e.AssignmentExpression:
        ac(a.left, b), ac(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
        break;
      case _e.ArrayExpression:
        c = !0, d = [], f(a.elements, function(a) {
          ac(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
        }), a.constant = c, a.toWatch = d;
        break;
      case _e.ObjectExpression:
        c = !0, d = [], f(a.properties, function(a) {
          ac(a.value, b), c = c && a.value.constant, a.value.constant || d.push.apply(d, a.value.toWatch)
        }), a.constant = c, a.toWatch = d;
        break;
      case _e.ThisExpression:
        a.constant = !1, a.toWatch = []
    }
  }

  function bc(a) {
    if (1 == a.length) {
      var b = a[0].expression,
        d = b.toWatch;
      return 1 !== d.length ? d : d[0] !== b ? d : c
    }
  }

  function cc(a) {
    return a.type === _e.Identifier || a.type === _e.MemberExpression
  }

  function dc(a) {
    return 1 === a.body.length && cc(a.body[0].expression) ? {
      type: _e.AssignmentExpression,
      left: a.body[0].expression,
      right: {
        type: _e.NGValueParameter
      },
      operator: "="
    } : void 0
  }

  function ec(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === _e.Literal || a.body[0].expression.type === _e.ArrayExpression || a.body[0].expression.type === _e.ObjectExpression)
  }

  function fc(a) {
    return a.constant
  }

  function gc(a, b) {
    this.astBuilder = a, this.$filter = b
  }

  function hc(a, b) {
    this.astBuilder = a, this.$filter = b
  }

  function ic(a) {
    return "constructor" == a
  }

  function jc(a) {
    return A(a.valueOf) ? a.valueOf() : bf.call(a)
  }

  function kc() {
    var a = qa(),
      b = qa();
    this.$get = ["$filter", function(d) {
      function e(a, b) {
        return null == a || null == b ? a === b : "object" == typeof a && (a = jc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
      }

      function g(a, b, d, f, g) {
        var h, i = f.inputs;
        if (1 === i.length) {
          var j = e;
          return i = i[0], a.$watch(function(a) {
            var b = i(a);
            return e(b, j) || (h = f(a, c, c, [b]), j = b && jc(b)), h
          }, b, d, g)
        }
        for (var k = [], l = [], m = 0, n = i.length; n > m; m++) k[m] = e, l[m] = null;
        return a.$watch(function(a) {
          for (var b = !1, d = 0, g = i.length; g > d; d++) {
            var j = i[d](a);
            (b || (b = !e(j, k[d]))) && (l[d] = j, k[d] = j && jc(j))
          }
          return b && (h = f(a, c, c, l)), h
        }, b, d, g)
      }

      function h(a, b, c, d) {
        var e, f;
        return e = a.$watch(function(a) {
          return d(a)
        }, function(a, c, d) {
          f = a, A(b) && b.apply(this, arguments), u(a) && d.$$postDigest(function() {
            u(f) && e()
          })
        }, c)
      }

      function i(a, b, c, d) {
        function e(a) {
          var b = !0;
          return f(a, function(a) {
            u(a) || (b = !1)
          }), b
        }
        var g, h;
        return g = a.$watch(function(a) {
          return d(a)
        }, function(a, c, d) {
          h = a, A(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
            e(h) && g()
          })
        }, c)
      }

      function j(a, b, c, d) {
        var e;
        return e = a.$watch(function(a) {
          return d(a)
        }, function(a, c, d) {
          A(b) && b.apply(this, arguments), e()
        }, c)
      }

      function k(a, b) {
        if (!b) return a;
        var c = a.$$watchDelegate,
          d = c !== i && c !== h,
          e = d ? function(c, d, e, f) {
            var g = a(c, d, e, f);
            return b(g, c, d)
          } : function(c, d, e, f) {
            var g = a(c, d, e, f),
              h = b(g, c, d);
            return u(g) ? h : g
          };
        return a.$$watchDelegate && a.$$watchDelegate !== g ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = g, e.inputs = a.inputs ? a.inputs : [a]), e
      }
      var l = Pd().noUnsafeEval,
        m = {
          csp: l,
          expensiveChecks: !1
        },
        n = {
          csp: l,
          expensiveChecks: !0
        };
      return function(c, e, f) {
        var l, o, q;
        switch (typeof c) {
          case "string":
            c = c.trim(), q = c;
            var r = f ? b : a;
            if (l = r[q], !l) {
              ":" === c.charAt(0) && ":" === c.charAt(1) && (o = !0, c = c.substring(2));
              var s = f ? n : m,
                t = new $e(s),
                u = new af(t, d, s);
              l = u.parse(c), l.constant ? l.$$watchDelegate = j : o ? l.$$watchDelegate = l.literal ? i : h : l.inputs && (l.$$watchDelegate = g), r[q] = l
            }
            return k(l, e);
          case "function":
            return k(c, e);
          default:
            return p
        }
      }
    }]
  }

  function lc() {
    this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
      return nc(function(b) {
        a.$evalAsync(b)
      }, b)
    }]
  }

  function mc() {
    this.$get = ["$browser", "$exceptionHandler", function(a, b) {
      return nc(function(b) {
        a.defer(b)
      }, b)
    }]
  }

  function nc(a, b) {
    function e(a, b, c) {
      function d(b) {
        return function(c) {
          e || (e = !0, b.call(a, c))
        }
      }
      var e = !1;
      return [d(b), d(c)]
    }

    function g() {
      this.$$state = {
        status: 0
      }
    }

    function h(a, b) {
      return function(c) {
        b.call(a, c)
      }
    }

    function i(a) {
      var d, e, f;
      f = a.pending, a.processScheduled = !1, a.pending = c;
      for (var g = 0, h = f.length; h > g; ++g) {
        e = f[g][0], d = f[g][a.status];
        try {
          A(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
        } catch (i) {
          e.reject(i), b(i)
        }
      }
    }

    function j(b) {
      !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
        i(b)
      }))
    }

    function k() {
      this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
    }

    function m(a) {
      var b = new k,
        c = 0,
        d = Ld(a) ? [] : {};
      return f(a, function(a, e) {
        c++, s(a).then(function(a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
        }, function(a) {
          d.hasOwnProperty(e) || b.reject(a)
        })
      }), 0 === c && b.resolve(d), b.promise
    }
    var n = d("$q", TypeError),
      o = function() {
        return new k
      };
    l(g.prototype, {
      then: function(a, b, c) {
        if (t(a) && t(b) && t(c)) return this;
        var d = new k;
        return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
      },
      "catch": function(a) {
        return this.then(null, a)
      },
      "finally": function(a, b) {
        return this.then(function(b) {
          return r(b, !0, a)
        }, function(b) {
          return r(b, !1, a)
        }, b)
      }
    }), l(k.prototype, {
      resolve: function(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(n("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
      },
      $$resolve: function(a) {
        var c, d;
        d = e(this, this.$$resolve, this.$$reject);
        try {
          (v(a) || A(a)) && (c = a && a.then), A(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
        } catch (f) {
          d[1](f), b(f)
        }
      },
      reject: function(a) {
        this.promise.$$state.status || this.$$reject(a)
      },
      $$reject: function(a) {
        this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
      },
      notify: function(c) {
        var d = this.promise.$$state.pending;
        this.promise.$$state.status <= 0 && d && d.length && a(function() {
          for (var a, e, f = 0, g = d.length; g > f; f++) {
            e = d[f][0], a = d[f][3];
            try {
              e.notify(A(a) ? a(c) : c)
            } catch (h) {
              b(h)
            }
          }
        })
      }
    });
    var p = function(a) {
        var b = new k;
        return b.reject(a), b.promise
      },
      q = function(a, b) {
        var c = new k;
        return b ? c.resolve(a) : c.reject(a), c.promise
      },
      r = function(a, b, c) {
        var d = null;
        try {
          A(c) && (d = c())
        } catch (e) {
          return q(e, !1)
        }
        return I(d) ? d.then(function() {
          return q(a, b)
        }, function(a) {
          return q(a, !1)
        }) : q(a, b)
      },
      s = function(a, b, c, d) {
        var e = new k;
        return e.resolve(a), e.promise.then(b, c, d)
      },
      u = s,
      w = function x(a) {
        function b(a) {
          d.resolve(a)
        }

        function c(a) {
          d.reject(a)
        }
        if (!A(a)) throw n("norslvr", "Expected resolverFn, got '{0}'", a);
        if (!(this instanceof x)) return new x(a);
        var d = new k;
        return a(b, c), d.promise
      };
    return w.defer = o, w.reject = p, w.when = s, w.resolve = u, w.all = m, w
  }

  function oc() {
    this.$get = ["$window", "$timeout", function(a, b) {
      var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
        d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
        e = !!c,
        f = e ? function(a) {
          var b = c(a);
          return function() {
            d(b)
          }
        } : function(a) {
          var c = b(a, 16.66, !1);
          return function() {
            b.cancel(c)
          }
        };
      return f.supported = e, f
    }]
  }

  function pc() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = i(), this.$$ChildScope = null
      }
      return b.prototype = a, b
    }
    var b = 10,
      c = d("$rootScope"),
      g = null,
      h = null;
    this.digestTtl = function(a) {
      return arguments.length && (b = a), b
    }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, j, k, l) {
      function m(a) {
        a.currentScope.$$destroyed = !0
      }

      function n() {
        this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
      }

      function o(a) {
        if (y.$$phase) throw c("inprog", "{0} already in progress", y.$$phase);
        y.$$phase = a
      }

      function q() {
        y.$$phase = null
      }

      function r(a, b) {
        do a.$$watchersCount += b; while (a = a.$parent)
      }

      function s(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
      }

      function u() {}

      function w() {
        for (; C.length;) try {
          C.shift()()
        } catch (a) {
          j(a)
        }
        h = null
      }

      function x() {
        null === h && (h = l.defer(function() {
          y.$apply(w)
        }))
      }
      n.prototype = {
        constructor: n,
        $new: function(b, c) {
          var d;
          return c = c || this, b ? (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", m), d
        },
        $watch: function(a, b, c, d) {
          var e = k(a);
          if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e, a);
          var f = this,
            h = f.$$watchers,
            i = {
              fn: b,
              last: u,
              get: e,
              exp: d || a,
              eq: !!c
            };
          return g = null, A(b) || (i.fn = p), h || (h = f.$$watchers = []), h.unshift(i), r(this, 1),
            function() {
              N(h, i) >= 0 && r(f, -1), g = null
            }
        },
        $watchGroup: function(a, b) {
          function c() {
            i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
          }
          var d = new Array(a.length),
            e = new Array(a.length),
            g = [],
            h = this,
            i = !1,
            j = !0;
          if (!a.length) {
            var k = !0;
            return h.$evalAsync(function() {
                k && b(e, e, h)
              }),
              function() {
                k = !1
              }
          }
          return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
            e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
          }) : (f(a, function(a, b) {
            var f = h.$watch(a, function(a, f) {
              e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
            });
            g.push(f)
          }), function() {
            for (; g.length;) g.shift()()
          })
        },
        $watchCollection: function(a, b) {
          function c(a) {
            f = a;
            var b, c, d, h, i;
            if (!t(f)) {
              if (v(f))
                if (e(f)) {
                  g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                  for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
                } else {
                  g !== o && (g = o = {}, q = 0, l++), b = 0;
                  for (c in f) ud.call(f, c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                  if (q > b) {
                    l++;
                    for (c in g) ud.call(f, c) || (q--, delete g[c])
                  }
                }
              else g !== f && (g = f, l++);
              return l
            }
          }

          function d() {
            if (p ? (p = !1, b(f, f, i)) : b(f, h, i), j)
              if (v(f))
                if (e(f)) {
                  h = new Array(f.length);
                  for (var a = 0; a < f.length; a++) h[a] = f[a]
                } else {
                  h = {};
                  for (var c in f) ud.call(f, c) && (h[c] = f[c])
                }
            else h = f
          }
          c.$stateful = !0;
          var f, g, h, i = this,
            j = b.length > 1,
            l = 0,
            m = k(a, c),
            n = [],
            o = {},
            p = !0,
            q = 0;
          return this.$watch(m, d)
        },
        $digest: function() {
          var a, d, e, f, i, k, m, n, p, r, s = b,
            t = this,
            v = [];
          o("$digest"), l.$$checkUrlChange(), this === y && null !== h && (l.defer.cancel(h), w()), g = null;
          do {
            for (k = !1, n = t; z.length;) {
              try {
                r = z.shift(), r.scope.$eval(r.expression, r.locals)
              } catch (x) {
                j(x)
              }
              g = null
            }
            a: do {
              if (f = n.$$watchers)
                for (i = f.length; i--;) try {
                  if (a = f[i])
                    if ((d = a.get(n)) === (e = a.last) || (a.eq ? Q(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                      if (a === g) {
                        k = !1;
                        break a
                      }
                    } else k = !0, g = a, a.last = a.eq ? O(d, null) : d, a.fn(d, e === u ? d : e, n), 5 > s && (p = 4 - s, v[p] || (v[p] = []), v[p].push({
                      msg: A(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                      newVal: d,
                      oldVal: e
                    }))
                } catch (x) {
                  j(x)
                }
              if (!(m = n.$$watchersCount && n.$$childHead || n !== t && n.$$nextSibling))
                for (; n !== t && !(m = n.$$nextSibling);) n = n.$parent
            } while (n = m);
            if ((k || z.length) && !s--) throw q(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, v)
          } while (k || z.length);
          for (q(); B.length;) try {
            B.shift()()
          } catch (x) {
            j(x)
          }
        },
        $destroy: function() {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast("$destroy"), this.$$destroyed = !0, this === y && l.$$applicationDestroyed(), r(this, -this.$$watchersCount);
            for (var b in this.$$listenerCount) s(this, this.$$listenerCount[b], b);
            a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
              return p
            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
          }
        },
        $eval: function(a, b) {
          return k(a)(this, b)
        },
        $evalAsync: function(a, b) {
          y.$$phase || z.length || l.defer(function() {
            z.length && y.$digest()
          }), z.push({
            scope: this,
            expression: a,
            locals: b
          })
        },
        $$postDigest: function(a) {
          B.push(a)
        },
        $apply: function(a) {
          try {
            o("$apply");
            try {
              return this.$eval(a)
            } finally {
              q()
            }
          } catch (b) {
            j(b)
          } finally {
            try {
              y.$digest()
            } catch (b) {
              throw j(b), b
            }
          }
        },
        $applyAsync: function(a) {
          function b() {
            c.$eval(a)
          }
          var c = this;
          a && C.push(b), x()
        },
        $on: function(a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] = c = []), c.push(b);
          var d = this;
          do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
          var e = this;
          return function() {
            var d = c.indexOf(b); - 1 !== d && (c[d] = null, s(e, 1, a))
          }
        },
        $emit: function(a, b) {
          var c, d, e, f = [],
            g = this,
            h = !1,
            i = {
              name: a,
              targetScope: g,
              stopPropagation: function() {
                h = !0
              },
              preventDefault: function() {
                i.defaultPrevented = !0
              },
              defaultPrevented: !1
            },
            k = R([i], arguments, 1);
          do {
            for (c = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = c.length; e > d; d++)
              if (c[d]) try {
                c[d].apply(null, k)
              } catch (l) {
                j(l)
              } else c.splice(d, 1), d--, e--;
            if (h) return i.currentScope = null, i;
            g = g.$parent
          } while (g);
          return i.currentScope = null, i
        },
        $broadcast: function(a, b) {
          var c = this,
            d = c,
            e = c,
            f = {
              name: a,
              targetScope: c,
              preventDefault: function() {
                f.defaultPrevented = !0
              },
              defaultPrevented: !1
            };
          if (!c.$$listenerCount[a]) return f;
          for (var g, h, i, k = R([f], arguments, 1); d = e;) {
            for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, i = g.length; i > h; h++)
              if (g[h]) try {
                g[h].apply(null, k)
              } catch (l) {
                j(l)
              } else g.splice(h, 1), h--, i--;
            if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling))
              for (; d !== c && !(e = d.$$nextSibling);) d = d.$parent
          }
          return f.currentScope = null, f
        }
      };
      var y = new n,
        z = y.$$asyncQueue = [],
        B = y.$$postDigestQueue = [],
        C = y.$$applyAsyncQueue = [];
      return y
    }]
  }

  function qc() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
      b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function(b) {
      return u(b) ? (a = b, this) : a
    }, this.imgSrcSanitizationWhitelist = function(a) {
      return u(a) ? (b = a, this) : b
    }, this.$get = function() {
      return function(c, d) {
        var e, f = d ? b : a;
        return e = zc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
      }
    }
  }

  function rc(a) {
    if ("self" === a) return a;
    if (x(a)) {
      if (a.indexOf("***") > -1) throw cf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
      return a = Od(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
    }
    if (B(a)) return new RegExp("^" + a.source + "$");
    throw cf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
  }

  function sc(a) {
    var b = [];
    return u(a) && f(a, function(a) {
      b.push(rc(a))
    }), b
  }

  function tc() {
    this.SCE_CONTEXTS = df;
    var a = ["self"],
      b = [];
    this.resourceUrlWhitelist = function(b) {
      return arguments.length && (a = sc(b)), a
    }, this.resourceUrlBlacklist = function(a) {
      return arguments.length && (b = sc(a)), b
    }, this.$get = ["$injector", function(c) {
      function d(a, b) {
        return "self" === a ? Ac(b) : !!a.exec(b.href)
      }

      function e(c) {
        var e, f, g = zc(c.toString()),
          h = !1;
        for (e = 0, f = a.length; f > e; e++)
          if (d(a[e], g)) {
            h = !0;
            break
          }
        if (h)
          for (e = 0, f = b.length; f > e; e++)
            if (d(b[e], g)) {
              h = !1;
              break
            }
        return h
      }

      function f(a) {
        var b = function(a) {
          this.$$unwrapTrustedValue = function() {
            return a
          }
        };
        return a && (b.prototype = new a), b.prototype.valueOf = function() {
          return this.$$unwrapTrustedValue()
        }, b.prototype.toString = function() {
          return this.$$unwrapTrustedValue().toString()
        }, b
      }

      function g(a, b) {
        var c = l.hasOwnProperty(a) ? l[a] : null;
        if (!c) throw cf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
        if (null === b || t(b) || "" === b) return b;
        if ("string" != typeof b) throw cf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
        return new c(b)
      }

      function h(a) {
        return a instanceof k ? a.$$unwrapTrustedValue() : a
      }

      function i(a, b) {
        if (null === b || t(b) || "" === b) return b;
        var c = l.hasOwnProperty(a) ? l[a] : null;
        if (c && b instanceof c) return b.$$unwrapTrustedValue();
        if (a === df.RESOURCE_URL) {
          if (e(b)) return b;
          throw cf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
        }
        if (a === df.HTML) return j(b);
        throw cf("unsafe", "Attempting to use an unsafe value in a safe context.")
      }
      var j = function(a) {
        throw cf("unsafe", "Attempting to use an unsafe value in a safe context.")
      };
      c.has("$sanitize") && (j = c.get("$sanitize"));
      var k = f(),
        l = {};
      return l[df.HTML] = f(k), l[df.CSS] = f(k), l[df.URL] = f(k), l[df.JS] = f(k), l[df.RESOURCE_URL] = f(l[df.URL]), {
        trustAs: g,
        getTrusted: i,
        valueOf: h
      }
    }]
  }

  function uc() {
    var a = !0;
    this.enabled = function(b) {
      return arguments.length && (a = !!b), a
    }, this.$get = ["$parse", "$sceDelegate", function(b, c) {
      if (a && 8 > yd) throw cf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
      var d = P(df);
      d.isEnabled = function() {
        return a
      }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
        return b
      }, d.valueOf = q), d.parseAs = function(a, c) {
        var e = b(c);
        return e.literal && e.constant ? e : b(c, function(b) {
          return d.getTrusted(a, b)
        })
      };
      var e = d.parseAs,
        g = d.getTrusted,
        h = d.trustAs;
      return f(df, function(a, b) {
        var c = td(b);
        d[wa("parse_as_" + c)] = function(b) {
          return e(a, b)
        }, d[wa("get_trusted_" + c)] = function(b) {
          return g(a, b)
        }, d[wa("trust_as_" + c)] = function(b) {
          return h(a, b)
        }
      }), d
    }]
  }

  function vc() {
    this.$get = ["$window", "$document", function(a, b) {
      var c, d, e = {},
        f = n((/android (\d+)/.exec(td((a.navigator || {}).userAgent)) || [])[1]),
        g = /Boxee/i.test((a.navigator || {}).userAgent),
        h = b[0] || {},
        i = /^(Moz|webkit|ms)(?=[A-Z])/,
        j = h.body && h.body.style,
        k = !1,
        l = !1;
      if (j) {
        for (var m in j)
          if (d = i.exec(m)) {
            c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
            break
          }
        c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = x(j.webkitTransition), l = x(j.webkitAnimation))
      }
      return {
        history: !(!a.history || !a.history.pushState || 4 > f || g),
        hasEvent: function(a) {
          if ("input" === a && 11 >= yd) return !1;
          if (t(e[a])) {
            var b = h.createElement("div");
            e[a] = "on" + a in b
          }
          return e[a]
        },
        csp: Pd(),
        vendorPrefix: c,
        transitions: k,
        animations: l,
        android: f
      }
    }]
  }

  function wc() {
    this.$get = ["$templateCache", "$http", "$q", "$sce", function(a, b, c, d) {
      function e(f, g) {
        function h(a) {
          if (!g) throw De("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", f, a.status, a.statusText);
          return c.reject(a)
        }
        e.totalPendingRequests++, x(f) && a.get(f) || (f = d.getTrustedResourceUrl(f));
        var i = b.defaults && b.defaults.transformResponse;
        Ld(i) ? i = i.filter(function(a) {
          return a !== tb
        }) : i === tb && (i = null);
        var j = {
          cache: a,
          transformResponse: i
        };
        return b.get(f, j)["finally"](function() {
          e.totalPendingRequests--
        }).then(function(b) {
          return a.put(f, b.data), b.data
        }, h)
      }
      return e.totalPendingRequests = 0, e
    }]
  }

  function xc() {
    this.$get = ["$rootScope", "$browser", "$location", function(a, b, c) {
      var d = {};
      return d.findBindings = function(a, b, c) {
        var d = a.getElementsByClassName("ng-binding"),
          e = [];
        return f(d, function(a) {
          var d = Id.element(a).data("$binding");
          d && f(d, function(d) {
            if (c) {
              var f = new RegExp("(^|\\s)" + Od(b) + "(\\s|\\||$)");
              f.test(d) && e.push(a)
            } else -1 != d.indexOf(b) && e.push(a)
          })
        }), e
      }, d.findModels = function(a, b, c) {
        for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
          var f = c ? "=" : "*=",
            g = "[" + d[e] + "model" + f + '"' + b + '"]',
            h = a.querySelectorAll(g);
          if (h.length) return h
        }
      }, d.getLocation = function() {
        return c.url()
      }, d.setLocation = function(b) {
        b !== c.url() && (c.url(b), a.$digest())
      }, d.whenStable = function(a) {
        b.notifyWhenNoOutstandingRequests(a)
      }, d
    }]
  }

  function yc() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
      function f(f, h, i) {
        A(f) || (i = h, h = f, f = p);
        var j, k = S(arguments, 3),
          l = u(i) && !i,
          m = (l ? d : c).defer(),
          n = m.promise;
        return j = b.defer(function() {
          try {
            m.resolve(f.apply(null, k))
          } catch (b) {
            m.reject(b), e(b)
          } finally {
            delete g[n.$$timeoutId]
          }
          l || a.$apply()
        }, h), n.$$timeoutId = j, g[j] = m, n
      }
      var g = {};
      return f.cancel = function(a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
      }, f
    }]
  }

  function zc(a) {
    var b = a;
    return yd && (ef.setAttribute("href", b), b = ef.href), ef.setAttribute("href", b), {
      href: ef.href,
      protocol: ef.protocol ? ef.protocol.replace(/:$/, "") : "",
      host: ef.host,
      search: ef.search ? ef.search.replace(/^\?/, "") : "",
      hash: ef.hash ? ef.hash.replace(/^#/, "") : "",
      hostname: ef.hostname,
      port: ef.port,
      pathname: "/" === ef.pathname.charAt(0) ? ef.pathname : "/" + ef.pathname
    }
  }

  function Ac(a) {
    var b = x(a) ? zc(a) : a;
    return b.protocol === ff.protocol && b.host === ff.host
  }

  function Bc() {
    this.$get = r(a)
  }

  function Cc(a) {
    function b(a) {
      try {
        return decodeURIComponent(a)
      } catch (b) {
        return a
      }
    }
    var c = a[0] || {},
      d = {},
      e = "";
    return function() {
      var a, f, g, h, i, j = c.cookie || "";
      if (j !== e)
        for (e = j, a = e.split("; "), d = {}, g = 0; g < a.length; g++) f = a[g], h = f.indexOf("="), h > 0 && (i = b(f.substring(0, h)), t(d[i]) && (d[i] = b(f.substring(h + 1))));
      return d
    }
  }

  function Dc() {
    this.$get = Cc
  }

  function Ec(a) {
    function b(d, e) {
      if (v(d)) {
        var g = {};
        return f(d, function(a, c) {
          g[c] = b(c, a)
        }), g
      }
      return a.factory(d + c, e)
    }
    var c = "Filter";
    this.register = b, this.$get = ["$injector", function(a) {
      return function(b) {
        return a.get(b + c)
      }
    }], b("currency", Jc), b("date", Wc), b("filter", Fc), b("json", Xc), b("limitTo", Yc), b("lowercase", lf), b("number", Kc), b("orderBy", Zc), b("uppercase", mf)
  }

  function Fc() {
    return function(a, b, c) {
      if (!e(a)) {
        if (null == a) return a;
        throw d("filter")("notarray", "Expected array but received: {0}", a)
      }
      var f, g, h = Ic(b);
      switch (h) {
        case "function":
          f = b;
          break;
        case "boolean":
        case "null":
        case "number":
        case "string":
          g = !0;
        case "object":
          f = Gc(b, c, g);
          break;
        default:
          return a
      }
      return Array.prototype.filter.call(a, f)
    }
  }

  function Gc(a, b, c) {
    var d, e = v(a) && "$" in a;
    return b === !0 ? b = Q : A(b) || (b = function(a, b) {
      return t(a) ? !1 : null === a || null === b ? a === b : v(b) || v(a) && !s(a) ? !1 : (a = td("" + a), b = td("" + b), -1 !== a.indexOf(b))
    }), d = function(d) {
      return e && !v(d) ? Hc(d, a.$, b, !1) : Hc(d, a, b, c)
    }
  }

  function Hc(a, b, c, d, e) {
    var f = Ic(a),
      g = Ic(b);
    if ("string" === g && "!" === b.charAt(0)) return !Hc(a, b.substring(1), c, d);
    if (Ld(a)) return a.some(function(a) {
      return Hc(a, b, c, d)
    });
    switch (f) {
      case "object":
        var h;
        if (d) {
          for (h in a)
            if ("$" !== h.charAt(0) && Hc(a[h], b, c, !0)) return !0;
          return e ? !1 : Hc(a, b, c, !1)
        }
        if ("object" === g) {
          for (h in b) {
            var i = b[h];
            if (!A(i) && !t(i)) {
              var j = "$" === h,
                k = j ? a : a[h];
              if (!Hc(k, i, c, j, j)) return !1
            }
          }
          return !0
        }
        return c(a, b);
      case "function":
        return !1;
      default:
        return c(a, b)
    }
  }

  function Ic(a) {
    return null === a ? "null" : typeof a
  }

  function Jc(a) {
    var b = a.NUMBER_FORMATS;
    return function(a, c, d) {
      return t(c) && (c = b.CURRENCY_SYM), t(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Lc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
    }
  }

  function Kc(a) {
    var b = a.NUMBER_FORMATS;
    return function(a, c) {
      return null == a ? a : Lc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
    }
  }

  function Lc(a, b, c, d, e) {
    if (v(a)) return "";
    var f = 0 > a;
    a = Math.abs(a);
    var g = a === 1 / 0;
    if (!g && !isFinite(a)) return "";
    var h = a + "",
      i = "",
      j = !1,
      k = [];
    if (g && (i = "âˆž"), !g && -1 !== h.indexOf("e")) {
      var l = h.match(/([\d\.]+)e(-?)(\d+)/);
      l && "-" == l[2] && l[3] > e + 1 ? a = 0 : (i = h, j = !0)
    }
    if (g || j) e > 0 && 1 > a && (i = a.toFixed(e), a = parseFloat(i), i = i.replace(gf, d));
    else {
      var m = (h.split(gf)[1] || "").length;
      t(e) && (e = Math.min(Math.max(b.minFrac, m), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
      var n = ("" + a).split(gf),
        o = n[0];
      n = n[1] || "";
      var p, q = 0,
        r = b.lgSize,
        s = b.gSize;
      if (o.length >= r + s)
        for (q = o.length - r, p = 0; q > p; p++)(q - p) % s === 0 && 0 !== p && (i += c), i += o.charAt(p);
      for (p = q; p < o.length; p++)(o.length - p) % r === 0 && 0 !== p && (i += c), i += o.charAt(p);
      for (; n.length < e;) n += "0";
      e && "0" !== e && (i += d + n.substr(0, e))
    }
    return 0 === a && (f = !1), k.push(f ? b.negPre : b.posPre, i, f ? b.negSuf : b.posSuf), k.join("")
  }

  function Mc(a, b, c) {
    var d = "";
    for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
    return c && (a = a.substr(a.length - b)), d + a
  }

  function Nc(a, b, c, d) {
    return c = c || 0,
      function(e) {
        var f = e["get" + a]();
        return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Mc(f, b, d)
      }
  }

  function Oc(a, b) {
    return function(c, d) {
      var e = c["get" + a](),
        f = vd(b ? "SHORT" + a : a);
      return d[f][e]
    }
  }

  function Pc(a, b, c) {
    var d = -1 * c,
      e = d >= 0 ? "+" : "";
    return e += Mc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Mc(Math.abs(d % 60), 2)
  }

  function Qc(a) {
    var b = new Date(a, 0, 1).getDay();
    return new Date(a, 0, (4 >= b ? 5 : 12) - b)
  }

  function Rc(a) {
    return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
  }

  function Sc(a) {
    return function(b) {
      var c = Qc(b.getFullYear()),
        d = Rc(b),
        e = +d - +c,
        f = 1 + Math.round(e / 6048e5);
      return Mc(f, a)
    }
  }

  function Tc(a, b) {
    return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
  }

  function Uc(a, b) {
    return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
  }

  function Vc(a, b) {
    return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
  }

  function Wc(a) {
    function b(a) {
      var b;
      if (b = a.match(c)) {
        var d = new Date(0),
          e = 0,
          f = 0,
          g = b[8] ? d.setUTCFullYear : d.setFullYear,
          h = b[8] ? d.setUTCHours : d.setHours;
        b[9] && (e = n(b[9] + b[10]), f = n(b[9] + b[11])), g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
        var i = n(b[4] || 0) - e,
          j = n(b[5] || 0) - f,
          k = n(b[6] || 0),
          l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
        return h.call(d, i, j, k, l), d
      }
      return a
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function(c, d, e) {
      var g, h, i = "",
        j = [];
      if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, x(c) && (c = kf.test(c) ? n(c) : b(c)), y(c) && (c = new Date(c)), !z(c) || !isFinite(c.getTime())) return c;
      for (; d;) h = jf.exec(d), h ? (j = R(j, h, 1), d = j.pop()) : (j.push(d), d = null);
      var k = c.getTimezoneOffset();
      return e && (k = X(e, c.getTimezoneOffset()), c = Z(c, e, !0)), f(j, function(b) {
        g = hf[b], i += g ? g(c, a.DATETIME_FORMATS, k) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      }), i
    }
  }

  function Xc() {
    return function(a, b) {
      return t(b) && (b = 2), V(a, b)
    }
  }

  function Yc() {
    return function(a, b, c) {
      return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b), isNaN(b) ? a : (y(a) && (a = a.toString()), Ld(a) || x(a) ? (c = !c || isNaN(c) ? 0 : n(c), c = 0 > c && c >= -a.length ? a.length + c : c, b >= 0 ? a.slice(c, c + b) : 0 === c ? a.slice(b, a.length) : a.slice(Math.max(0, c + b), c)) : a)
    }
  }

  function Zc(a) {
    function b(b, c) {
      return c = c ? -1 : 1, b.map(function(b) {
        var d = 1,
          e = q;
        if (A(b)) e = b;
        else if (x(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (d = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1)), "" !== b && (e = a(b), e.constant))) {
          var f = e();
          e = function(a) {
            return a[f]
          }
        }
        return {
          get: e,
          descending: d * c
        }
      })
    }

    function c(a) {
      switch (typeof a) {
        case "number":
        case "boolean":
        case "string":
          return !0;
        default:
          return !1
      }
    }

    function d(a, b) {
      return "function" == typeof a.valueOf && (a = a.valueOf(), c(a)) ? a : s(a) && (a = a.toString(), c(a)) ? a : b
    }

    function f(a, b) {
      var c = typeof a;
      return null === a ? (c = "string", a = "null") : "string" === c ? a = a.toLowerCase() : "object" === c && (a = d(a, b)), {
        value: a,
        type: c
      }
    }

    function g(a, b) {
      var c = 0;
      return a.type === b.type ? a.value !== b.value && (c = a.value < b.value ? -1 : 1) : c = a.type < b.type ? -1 : 1, c
    }
    return function(a, c, d) {
      function h(a, b) {
        return {
          value: a,
          predicateValues: j.map(function(c) {
            return f(c.get(a), b)
          })
        }
      }

      function i(a, b) {
        for (var c = 0, d = 0, e = j.length; e > d && !(c = g(a.predicateValues[d], b.predicateValues[d]) * j[d].descending); ++d);
        return c
      }
      if (!e(a)) return a;
      Ld(c) || (c = [c]), 0 === c.length && (c = ["+"]);
      var j = b(c, d);
      j.push({
        get: function() {
          return {}
        },
        descending: d ? -1 : 1
      });
      var k = Array.prototype.map.call(a, h);
      return k.sort(i), a = k.map(function(a) {
        return a.value
      })
    }
  }

  function $c(a) {
    return A(a) && (a = {
      link: a
    }), a.restrict = a.restrict || "AC", r(a)
  }

  function _c(a, b) {
    a.$name = b
  }

  function ad(a, b, d, e, g) {
    var h = this,
      i = [];
    h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, h.$$parentForm = pf, h.$rollbackViewValue = function() {
      f(i, function(a) {
        a.$rollbackViewValue()
      })
    }, h.$commitViewValue = function() {
      f(i, function(a) {
        a.$commitViewValue()
      })
    }, h.$addControl = function(a) {
      na(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a), a.$$parentForm = h
    }, h.$$renameControl = function(a, b) {
      var c = a.$name;
      h[c] === a && delete h[c], h[b] = a, a.$name = b
    }, h.$removeControl = function(a) {
      a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
        h.$setValidity(c, null, a)
      }), f(h.$error, function(b, c) {
        h.$setValidity(c, null, a)
      }), f(h.$$success, function(b, c) {
        h.$setValidity(c, null, a)
      }), N(i, a), a.$$parentForm = pf
    }, pd({
      ctrl: this,
      $element: a,
      set: function(a, b, c) {
        var d = a[b];
        if (d) {
          var e = d.indexOf(c); - 1 === e && d.push(c)
        } else a[b] = [c]
      },
      unset: function(a, b, c) {
        var d = a[b];
        d && (N(d, c), 0 === d.length && delete a[b])
      },
      $animate: e
    }), h.$setDirty = function() {
      e.removeClass(a, Zf), e.addClass(a, $f), h.$dirty = !0, h.$pristine = !1, h.$$parentForm.$setDirty()
    }, h.$setPristine = function() {
      e.setClass(a, Zf, $f + " " + qf), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function(a) {
        a.$setPristine()
      })
    }, h.$setUntouched = function() {
      f(i, function(a) {
        a.$setUntouched()
      })
    }, h.$setSubmitted = function() {
      e.addClass(a, qf), h.$submitted = !0, h.$$parentForm.$setSubmitted()
    }
  }

  function bd(a) {
    a.$formatters.push(function(b) {
      return a.$isEmpty(b) ? b : b.toString()
    })
  }

  function cd(a, b, c, d, e, f) {
    dd(a, b, c, d, e, f), bd(d)
  }

  function dd(a, b, c, d, e, f) {
    var g = td(b[0].type);
    if (!e.android) {
      var h = !1;
      b.on("compositionstart", function(a) {
        h = !0
      }), b.on("compositionend", function() {
        h = !1, i()
      })
    }
    var i = function(a) {
      if (j && (f.defer.cancel(j), j = null), !h) {
        var e = b.val(),
          i = a && a.type;
        "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Nd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
      }
    };
    if (e.hasEvent("input")) b.on("input", i);
    else {
      var j, k = function(a, b, c) {
        j || (j = f.defer(function() {
          j = null, b && b.value === c || i(a)
        }))
      };
      b.on("keydown", function(a) {
        var b = a.keyCode;
        91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
      }), e.hasEvent("paste") && b.on("paste cut", k)
    }
    b.on("change", i), d.$render = function() {
      var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
      b.val() !== a && b.val(a)
    }
  }

  function ed(a, b) {
    if (z(a)) return a;
    if (x(a)) {
      Af.lastIndex = 0;
      var c = Af.exec(a);
      if (c) {
        var d = +c[1],
          e = +c[2],
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = Qc(d),
          k = 7 * (e - 1);
        return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
      }
    }
    return NaN
  }

  function fd(a, b) {
    return function(c, d) {
      var e, g;
      if (z(c)) return c;
      if (x(c)) {
        if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), uf.test(c)) return new Date(c);
        if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
          yyyy: d.getFullYear(),
          MM: d.getMonth() + 1,
          dd: d.getDate(),
          HH: d.getHours(),
          mm: d.getMinutes(),
          ss: d.getSeconds(),
          sss: d.getMilliseconds() / 1e3
        } : {
          yyyy: 1970,
          MM: 1,
          dd: 1,
          HH: 0,
          mm: 0,
          ss: 0,
          sss: 0
        }, f(e, function(a, c) {
          c < b.length && (g[b[c]] = +a)
        }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
      }
      return NaN
    }
  }

  function gd(a, b, d, e) {
    return function(f, g, h, i, j, k, l) {
      function m(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime())
      }

      function n(a) {
        return u(a) && !z(a) ? d(a) || c : a
      }
      hd(f, g, h, i), dd(f, g, h, i, j, k);
      var o, p = i && i.$options && i.$options.timezone;
      if (i.$$parserName = a, i.$parsers.push(function(a) {
          if (i.$isEmpty(a)) return null;
          if (b.test(a)) {
            var e = d(a, o);
            return p && (e = Z(e, p)), e
          }
          return c
        }), i.$formatters.push(function(a) {
          if (a && !z(a)) throw cg("datefmt", "Expected `{0}` to be a date", a);
          return m(a) ? (o = a, o && p && (o = Z(o, p, !0)), l("date")(a, e, p)) : (o = null, "")
        }), u(h.min) || h.ngMin) {
        var q;
        i.$validators.min = function(a) {
          return !m(a) || t(q) || d(a) >= q
        }, h.$observe("min", function(a) {
          q = n(a), i.$validate()
        })
      }
      if (u(h.max) || h.ngMax) {
        var r;
        i.$validators.max = function(a) {
          return !m(a) || t(r) || d(a) <= r
        }, h.$observe("max", function(a) {
          r = n(a), i.$validate()
        })
      }
    }
  }

  function hd(a, b, d, e) {
    var f = b[0],
      g = e.$$hasNativeValidators = v(f.validity);
    g && e.$parsers.push(function(a) {
      var d = b.prop(sd) || {};
      return d.badInput && !d.typeMismatch ? c : a
    })
  }

  function id(a, b, d, e, f, g) {
    if (hd(a, b, d, e), dd(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
        return e.$isEmpty(a) ? null : xf.test(a) ? parseFloat(a) : c
      }), e.$formatters.push(function(a) {
        if (!e.$isEmpty(a)) {
          if (!y(a)) throw cg("numfmt", "Expected `{0}` to be a number", a);
          a = a.toString()
        }
        return a
      }), u(d.min) || d.ngMin) {
      var h;
      e.$validators.min = function(a) {
        return e.$isEmpty(a) || t(h) || a >= h
      }, d.$observe("min", function(a) {
        u(a) && !y(a) && (a = parseFloat(a, 10)), h = y(a) && !isNaN(a) ? a : c, e.$validate()
      })
    }
    if (u(d.max) || d.ngMax) {
      var i;
      e.$validators.max = function(a) {
        return e.$isEmpty(a) || t(i) || i >= a
      }, d.$observe("max", function(a) {
        u(a) && !y(a) && (a = parseFloat(a, 10)), i = y(a) && !isNaN(a) ? a : c, e.$validate()
      })
    }
  }

  function jd(a, b, c, d, e, f) {
    dd(a, b, c, d, e, f), bd(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
      var c = a || b;
      return d.$isEmpty(c) || vf.test(c)
    }
  }

  function kd(a, b, c, d, e, f) {
    dd(a, b, c, d, e, f), bd(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
      var c = a || b;
      return d.$isEmpty(c) || wf.test(c)
    }
  }

  function ld(a, b, c, d) {
    t(c.name) && b.attr("name", i());
    var e = function(a) {
      b[0].checked && d.$setViewValue(c.value, a && a.type)
    };
    b.on("click", e), d.$render = function() {
      var a = c.value;
      b[0].checked = a == d.$viewValue
    }, c.$observe("value", d.$render)
  }

  function md(a, b, c, d, e) {
    var f;
    if (u(d)) {
      if (f = a(d), !f.constant) throw cg("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, d);
      return f(b)
    }
    return e
  }

  function nd(a, b, c, d, e, f, g, h) {
    var i = md(h, a, "ngTrueValue", c.ngTrueValue, !0),
      j = md(h, a, "ngFalseValue", c.ngFalseValue, !1),
      k = function(a) {
        d.$setViewValue(b[0].checked, a && a.type)
      };
    b.on("click", k), d.$render = function() {
      b[0].checked = d.$viewValue
    }, d.$isEmpty = function(a) {
      return a === !1
    }, d.$formatters.push(function(a) {
      return Q(a, i)
    }), d.$parsers.push(function(a) {
      return a ? i : j
    })
  }

  function od(a, b) {
    return a = "ngClass" + a, ["$animate", function(c) {
      function d(a, b) {
        var c = [];
        a: for (var d = 0; d < a.length; d++) {
          for (var e = a[d], f = 0; f < b.length; f++)
            if (e == b[f]) continue a;
          c.push(e)
        }
        return c
      }

      function e(a) {
        var b = [];
        return Ld(a) ? (f(a, function(a) {
          b = b.concat(e(a))
        }), b) : x(a) ? a.split(" ") : v(a) ? (f(a, function(a, c) {
          a && (b = b.concat(c.split(" ")))
        }), b) : a
      }
      return {
        restrict: "AC",
        link: function(g, h, i) {
          function j(a) {
            var b = l(a, 1);
            i.$addClass(b)
          }

          function k(a) {
            var b = l(a, -1);
            i.$removeClass(b)
          }

          function l(a, b) {
            var c = h.data("$classCounts") || qa(),
              d = [];
            return f(a, function(a) {
              (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
            }), h.data("$classCounts", c), d.join(" ")
          }

          function m(a, b) {
            var e = d(b, a),
              f = d(a, b);
            e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
          }

          function n(a) {
            if (b === !0 || g.$index % 2 === b) {
              var c = e(a || []);
              if (o) {
                if (!Q(a, o)) {
                  var d = e(o);
                  m(d, c)
                }
              } else j(c)
            }
            o = P(a)
          }
          var o;
          g.$watch(i[a], n, !0), i.$observe("class", function(b) {
            n(g.$eval(i[a]))
          }), "ngClass" !== a && g.$watch("$index", function(c, d) {
            var f = 1 & c;
            if (f !== (1 & d)) {
              var h = e(g.$eval(i[a]));
              f === b ? j(h) : k(h)
            }
          })
        }
      }
    }]
  }

  function pd(a) {
    function b(a, b, i) {
      t(b) ? d("$pending", a, i) : e("$pending", a, i), H(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(bg, !0), h.$valid = h.$invalid = c, g("", null)) : (f(bg, !1), h.$valid = qd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
      var j;
      j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), h.$$parentForm.$setValidity(a, j, h)
    }

    function d(a, b, c) {
      h[a] || (h[a] = {}), k(h[a], b, c)
    }

    function e(a, b, d) {
      h[a] && l(h[a], b, d), qd(h[a]) && (h[a] = c)
    }

    function f(a, b) {
      b && !j[a] ? (m.addClass(i, a), j[a] = !0) : !b && j[a] && (m.removeClass(i, a), j[a] = !1)
    }

    function g(a, b) {
      a = a ? "-" + ja(a, "-") : "", f(Xf + a, b === !0), f(Yf + a, b === !1)
    }
    var h = a.ctrl,
      i = a.$element,
      j = {},
      k = a.set,
      l = a.unset,
      m = a.$animate;
    j[Yf] = !(j[Xf] = i.hasClass(Xf)), h.$setValidity = b
  }

  function qd(a) {
    if (a)
      for (var b in a)
        if (a.hasOwnProperty(b)) return !1;
    return !0
  }
  var rd = /^\/(.+)\/([a-z]*)$/,
    sd = "validity",
    td = function(a) {
      return x(a) ? a.toLowerCase() : a
    },
    ud = Object.prototype.hasOwnProperty,
    vd = function(a) {
      return x(a) ? a.toUpperCase() : a
    },
    wd = function(a) {
      return x(a) ? a.replace(/[A-Z]/g, function(a) {
        return String.fromCharCode(32 | a.charCodeAt(0))
      }) : a
    },
    xd = function(a) {
      return x(a) ? a.replace(/[a-z]/g, function(a) {
        return String.fromCharCode(-33 & a.charCodeAt(0))
      }) : a
    };
  "i" !== "I".toLowerCase() && (td = wd, vd = xd);
  var yd, zd, Ad, Bd, Cd = [].slice,
    Dd = [].splice,
    Ed = [].push,
    Fd = Object.prototype.toString,
    Gd = Object.getPrototypeOf,
    Hd = d("ng"),
    Id = a.angular || (a.angular = {}),
    Jd = 0;
  yd = b.documentMode, p.$inject = [], q.$inject = [];
  var Kd, Ld = Array.isArray,
    Md = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
    Nd = function(a) {
      return x(a) ? a.trim() : a
    },
    Od = function(a) {
      return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    },
    Pd = function() {
      function a() {
        try {
          return new Function(""), !1
        } catch (a) {
          return !0
        }
      }
      if (!u(Pd.rules)) {
        var c = b.querySelector("[ng-csp]") || b.querySelector("[data-ng-csp]");
        if (c) {
          var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
          Pd.rules = {
            noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
            noInlineStyle: !d || -1 !== d.indexOf("no-inline-style")
          }
        } else Pd.rules = {
          noUnsafeEval: a(),
          noInlineStyle: !1
        }
      }
      return Pd.rules
    },
    Qd = function() {
      if (u(Qd.name_)) return Qd.name_;
      var a, c, d, e, f = Rd.length;
      for (c = 0; f > c; ++c)
        if (d = Rd[c], a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
          e = a.getAttribute(d + "jq");
          break
        }
      return Qd.name_ = e
    },
    Rd = ["ng-", "data-ng-", "ng:", "x-ng-"],
    Sd = /[A-Z]/g,
    Td = !1,
    Ud = 1,
    Vd = 2,
    Wd = 3,
    Xd = 8,
    Yd = 9,
    Zd = 11,
    $d = {
      full: "1.4.7",
      major: 1,
      minor: 4,
      dot: 7,
      codeName: "dark-luminescence"
    };
  Ca.expando = "ng339";
  var _d = Ca.cache = {},
    ae = 1,
    be = function(a, b, c) {
      a.addEventListener(b, c, !1)
    },
    ce = function(a, b, c) {
      a.removeEventListener(b, c, !1)
    };
  Ca._data = function(a) {
    return this.cache[a[this.expando]] || {}
  };
  var de = /([\:\-\_]+(.))/g,
    ee = /^moz([A-Z])/,
    fe = {
      mouseleave: "mouseout",
      mouseenter: "mouseover"
    },
    ge = d("jqLite"),
    he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    ie = /<|&#?\w+;/,
    je = /<([\w:-]+)/,
    ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    le = {
      option: [1, '<select multiple="multiple">', "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
  var me = Ca.prototype = {
      ready: function(c) {
        function d() {
          e || (e = !0, c())
        }
        var e = !1;
        "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), Ca(a).on("load", d))
      },
      toString: function() {
        var a = [];
        return f(this, function(b) {
          a.push("" + b)
        }), "[" + a.join(", ") + "]"
      },
      eq: function(a) {
        return zd(a >= 0 ? this[a] : this[this.length + a])
      },
      length: 0,
      push: Ed,
      sort: [].sort,
      splice: [].splice
    },
    ne = {};
  f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
    ne[td(a)] = a
  });
  var oe = {};
  f("input,select,option,textarea,button,form,details".split(","), function(a) {
    oe[a] = !0
  });
  var pe = {
    ngMinlength: "minlength",
    ngMaxlength: "maxlength",
    ngMin: "min",
    ngMax: "max",
    ngPattern: "pattern"
  };
  f({
    data: Ia,
    removeData: Ga,
    hasData: za
  }, function(a, b) {
    Ca[b] = a
  }), f({
    data: Ia,
    inheritedData: Oa,
    scope: function(a) {
      return zd.data(a, "$scope") || Oa(a.parentNode || a, ["$isolateScope", "$scope"])
    },
    isolateScope: function(a) {
      return zd.data(a, "$isolateScope") || zd.data(a, "$isolateScopeNoTemplate")
    },
    controller: Na,
    injector: function(a) {
      return Oa(a, "$injector")
    },
    removeAttr: function(a, b) {
      a.removeAttribute(b)
    },
    hasClass: Ja,
    css: function(a, b, c) {
      return b = wa(b), u(c) ? void(a.style[b] = c) : a.style[b]
    },
    attr: function(a, b, d) {
      var e = a.nodeType;
      if (e !== Wd && e !== Vd && e !== Xd) {
        var f = td(b);
        if (ne[f]) {
          if (!u(d)) return a[b] || (a.attributes.getNamedItem(b) || p).specified ? f : c;
          d ? (a[b] = !0, a.setAttribute(b, f)) : (a[b] = !1, a.removeAttribute(f))
        } else if (u(d)) a.setAttribute(b, d);
        else if (a.getAttribute) {
          var g = a.getAttribute(b, 2);
          return null === g ? c : g
        }
      }
    },
    prop: function(a, b, c) {
      return u(c) ? void(a[b] = c) : a[b]
    },
    text: function() {
      function a(a, b) {
        if (t(b)) {
          var c = a.nodeType;
          return c === Ud || c === Wd ? a.textContent : ""
        }
        a.textContent = b
      }
      return a.$dv = "", a
    }(),
    val: function(a, b) {
      if (t(b)) {
        if (a.multiple && "select" === M(a)) {
          var c = [];
          return f(a.options, function(a) {
            a.selected && c.push(a.value || a.text)
          }), 0 === c.length ? null : c
        }
        return a.value
      }
      a.value = b
    },
    html: function(a, b) {
      return t(b) ? a.innerHTML : (Ea(a, !0), void(a.innerHTML = b))
    },
    empty: Pa
  }, function(a, b) {
    Ca.prototype[b] = function(b, c) {
      var d, e, f = this.length;
      if (a !== Pa && t(2 == a.length && a !== Ja && a !== Na ? b : c)) {
        if (v(b)) {
          for (d = 0; f > d; d++)
            if (a === Ia) a(this[d], b);
            else
              for (e in b) a(this[d], e, b[e]);
          return this
        }
        for (var g = a.$dv, h = t(g) ? Math.min(f, 1) : f, i = 0; h > i; i++) {
          var j = a(this[i], b, c);
          g = g ? g + j : j
        }
        return g
      }
      for (d = 0; f > d; d++) a(this[d], b, c);
      return this
    }
  }), f({
    removeData: Ga,
    on: function Gg(a, b, c, d) {
      if (u(d)) throw ge("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
      if (ya(a)) {
        var e = Ha(a, !0),
          f = e.events,
          g = e.handle;
        g || (g = e.handle = Ua(a, f));
        for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length; i--;) {
          b = h[i];
          var j = f[b];
          j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Gg(a, fe[b], function(a) {
            var c = this,
              d = a.relatedTarget;
            (!d || d !== c && !c.contains(d)) && g(a, b)
          }) : "$destroy" !== b && be(a, b, g), j = f[b]), j.push(c)
        }
      }
    },
    off: Fa,
    one: function(a, b, c) {
      a = zd(a), a.on(b, function d() {
        a.off(b, c), a.off(b, d)
      }), a.on(b, c)
    },
    replaceWith: function(a, b) {
      var c, d = a.parentNode;
      Ea(a), f(new Ca(b), function(b) {
        c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
      })
    },
    children: function(a) {
      var b = [];
      return f(a.childNodes, function(a) {
        a.nodeType === Ud && b.push(a)
      }), b
    },
    contents: function(a) {
      return a.contentDocument || a.childNodes || []
    },
    append: function(a, b) {
      var c = a.nodeType;
      if (c === Ud || c === Zd) {
        b = new Ca(b);
        for (var d = 0, e = b.length; e > d; d++) {
          var f = b[d];
          a.appendChild(f)
        }
      }
    },
    prepend: function(a, b) {
      if (a.nodeType === Ud) {
        var c = a.firstChild;
        f(new Ca(b), function(b) {
          a.insertBefore(b, c)
        })
      }
    },
    wrap: function(a, b) {
      b = zd(b).eq(0).clone()[0];
      var c = a.parentNode;
      c && c.replaceChild(b, a), b.appendChild(a)
    },
    remove: Qa,
    detach: function(a) {
      Qa(a, !0)
    },
    after: function(a, b) {
      var c = a,
        d = a.parentNode;
      b = new Ca(b);
      for (var e = 0, f = b.length; f > e; e++) {
        var g = b[e];
        d.insertBefore(g, c.nextSibling), c = g
      }
    },
    addClass: La,
    removeClass: Ka,
    toggleClass: function(a, b, c) {
      b && f(b.split(" "), function(b) {
        var d = c;
        t(d) && (d = !Ja(a, b)), (d ? La : Ka)(a, b)
      })
    },
    parent: function(a) {
      var b = a.parentNode;
      return b && b.nodeType !== Zd ? b : null
    },
    next: function(a) {
      return a.nextElementSibling
    },
    find: function(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : []
    },
    clone: Da,
    triggerHandler: function(a, b, c) {
      var d, e, g, h = b.type || b,
        i = Ha(a),
        j = i && i.events,
        k = j && j[h];
      k && (d = {
        preventDefault: function() {
          this.defaultPrevented = !0
        },
        isDefaultPrevented: function() {
          return this.defaultPrevented === !0
        },
        stopImmediatePropagation: function() {
          this.immediatePropagationStopped = !0
        },
        isImmediatePropagationStopped: function() {
          return this.immediatePropagationStopped === !0
        },
        stopPropagation: p,
        type: h,
        target: a
      }, b.type && (d = l(d, b)), e = P(k), g = c ? [d].concat(c) : [d], f(e, function(b) {
        d.isImmediatePropagationStopped() || b.apply(a, g)
      }))
    }
  }, function(a, b) {
    Ca.prototype[b] = function(b, c, d) {
      for (var e, f = 0, g = this.length; g > f; f++) t(e) ? (e = a(this[f], b, c, d), u(e) && (e = zd(e))) : Ma(e, a(this[f], b, c, d));
      return u(e) ? e : this
    }, Ca.prototype.bind = Ca.prototype.on, Ca.prototype.unbind = Ca.prototype.off
  }), Xa.prototype = {
    put: function(a, b) {
      this[Wa(a, this.nextUid)] = b
    },
    get: function(a) {
      return this[Wa(a, this.nextUid)]
    },
    remove: function(a) {
      var b = this[a = Wa(a, this.nextUid)];
      return delete this[a], b
    }
  };
  var qe = [function() {
      this.$get = [function() {
        return Xa
      }]
    }],
    re = /^[^\(]*\(\s*([^\)]*)\)/m,
    se = /,/,
    te = /^\s*(_?)(\S+?)\1\s*$/,
    ue = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
    ve = d("$injector");
  $a.$$annotate = Za;
  var we = d("$animate"),
    xe = 1,
    ye = "ng-animate",
    ze = function() {
      this.$get = ["$q", "$$rAF", function(a, b) {
        function c() {}
        return c.all = p, c.chain = p, c.prototype = {
          end: p,
          cancel: p,
          resume: p,
          pause: p,
          complete: p,
          then: function(c, d) {
            return a(function(a) {
              b(function() {
                a()
              })
            }).then(c, d)
          }
        }, c
      }]
    },
    Ae = function() {
      var a = new Xa,
        b = [];
      this.$get = ["$$AnimateRunner", "$rootScope", function(c, d) {
        function e(a, b, c) {
          var d = !1;
          return b && (b = x(b) ? b.split(" ") : Ld(b) ? b : [], f(b, function(b) {
            b && (d = !0, a[b] = c)
          })), d
        }

        function g() {
          f(b, function(b) {
            var c = a.get(b);
            if (c) {
              var d = cb(b.attr("class")),
                e = "",
                g = "";
              f(c, function(a, b) {
                var c = !!d[b];
                a !== c && (a ? e += (e.length ? " " : "") + b : g += (g.length ? " " : "") + b)
              }), f(b, function(a) {
                e && La(a, e), g && Ka(a, g)
              }), a.remove(b)
            }
          }), b.length = 0
        }

        function h(c, f, h) {
          var i = a.get(c) || {},
            j = e(i, f, !0),
            k = e(i, h, !1);
          (j || k) && (a.put(c, i), b.push(c), 1 === b.length && d.$$postDigest(g))
        }
        return {
          enabled: p,
          on: p,
          off: p,
          pin: p,
          push: function(a, b, d, e) {
            return e && e(), d = d || {}, d.from && a.css(d.from), d.to && a.css(d.to), (d.addClass || d.removeClass) && h(a, d.addClass, d.removeClass), new c
          }
        }
      }]
    },
    Be = ["$provide", function(a) {
      var b = this;
      this.$$registeredAnimations = Object.create(null), this.register = function(c, d) {
        if (c && "." !== c.charAt(0)) throw we("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
        var e = c + "-animation";
        b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d)
      }, this.classNameFilter = function(a) {
        if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, this.$$classNameFilter)) {
          var b = new RegExp("(\\s+|\\/)" + ye + "(\\s+|\\/)");
          if (b.test(this.$$classNameFilter.toString())) throw we("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', ye)
        }
        return this.$$classNameFilter
      }, this.$get = ["$$animateQueue", function(a) {
        function b(a, b, c) {
          if (c) {
            var d = bb(c);
            !d || d.parentNode || d.previousElementSibling || (c = null)
          }
          c ? c.after(a) : b.prepend(a)
        }
        return {
          on: a.on,
          off: a.off,
          pin: a.pin,
          enabled: a.enabled,
          cancel: function(a) {
            a.end && a.end()
          },
          enter: function(c, d, e, f) {
            return d = d && zd(d), e = e && zd(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", db(f))
          },
          move: function(c, d, e, f) {
            return d = d && zd(d), e = e && zd(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", db(f))
          },
          leave: function(b, c) {
            return a.push(b, "leave", db(c), function() {
              b.remove()
            })
          },
          addClass: function(b, c, d) {
            return d = db(d), d.addClass = ab(d.addclass, c), a.push(b, "addClass", d)
          },
          removeClass: function(b, c, d) {
            return d = db(d), d.removeClass = ab(d.removeClass, c), a.push(b, "removeClass", d)
          },
          setClass: function(b, c, d, e) {
            return e = db(e), e.addClass = ab(e.addClass, c), e.removeClass = ab(e.removeClass, d), a.push(b, "setClass", e)
          },
          animate: function(b, c, d, e, f) {
            return f = db(f), f.from = f.from ? l(f.from, c) : c, f.to = f.to ? l(f.to, d) : d, e = e || "ng-inline-animate", f.tempClasses = ab(f.tempClasses, e), a.push(b, "animate", f)
          }
        }
      }]
    }],
    Ce = function() {
      this.$get = ["$$rAF", "$q", function(a, b) {
        var c = function() {};
        return c.prototype = {
            done: function(a) {
              this.defer && this.defer[a === !0 ? "reject" : "resolve"]()
            },
            end: function() {
              this.done()
            },
            cancel: function() {
              this.done(!0)
            },
            getPromise: function() {
              return this.defer || (this.defer = b.defer()), this.defer.promise
            },
            then: function(a, b) {
              return this.getPromise().then(a, b)
            },
            "catch": function(a) {
              return this.getPromise()["catch"](a)
            },
            "finally": function(a) {
              return this.getPromise()["finally"](a)
            }
          },
          function(b, d) {
            function e() {
              return a(function() {
                f(), g || h.done(), g = !0
              }), h
            }

            function f() {
              d.addClass && (b.addClass(d.addClass), d.addClass = null), d.removeClass && (b.removeClass(d.removeClass), d.removeClass = null), d.to && (b.css(d.to), d.to = null)
            }
            d.cleanupStyles && (d.from = d.to = null), d.from && (b.css(d.from), d.from = null);
            var g, h = new c;
            return {
              start: e,
              end: e
            }
          }
      }]
    },
    De = d("$compile");
  ib.$inject = ["$provide", "$$sanitizeUriProvider"];
  var Ee = /^((?:x|data)[\:\-_])/i,
    Fe = d("$controller"),
    Ge = /^(\S+)(\s+as\s+(\w+))?$/,
    He = function() {
      this.$get = ["$document", function(a) {
        return function(b) {
          return b ? !b.nodeType && b instanceof zd && (b = b[0]) : b = a[0].body, b.offsetWidth + 1
        }
      }]
    },
    Ie = "application/json",
    Je = {
      "Content-Type": Ie + ";charset=utf-8"
    },
    Ke = /^\[|^\{(?!\{)/,
    Le = {
      "[": /]$/,
      "{": /}$/
    },
    Me = /^\)\]\}',?\n/,
    Ne = d("$http"),
    Oe = function(a) {
      return function() {
        throw Ne("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", a)
      }
    },
    Pe = Id.$interpolateMinErr = d("$interpolate");
  Pe.throwNoconcat = function(a) {
    throw Pe("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a)
  }, Pe.interr = function(a, b) {
    return Pe("interr", "Can't interpolate: {0}\n{1}", a, b.toString())
  };
  var Qe = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    Re = {
      http: 80,
      https: 443,
      ftp: 21
    },
    Se = d("$location"),
    Te = {
      $$html5: !1,
      $$replace: !1,
      absUrl: Qb("$$absUrl"),
      url: function(a) {
        if (t(a)) return this.$$url;
        var b = Qe.exec(a);
        return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
      },
      protocol: Qb("$$protocol"),
      host: Qb("$$host"),
      port: Qb("$$port"),
      path: Rb("$$path", function(a) {
        return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
      }),
      search: function(a, b) {
        switch (arguments.length) {
          case 0:
            return this.$$search;
          case 1:
            if (x(a) || y(a)) a = a.toString(), this.$$search = aa(a);
            else {
              if (!v(a)) throw Se("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
              a = O(a, {}), f(a, function(b, c) {
                null == b && delete a[c]
              }), this.$$search = a
            }
            break;
          default:
            t(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
        }
        return this.$$compose(), this
      },
      hash: Rb("$$hash", function(a) {
        return null !== a ? a.toString() : ""
      }),
      replace: function() {
        return this.$$replace = !0, this
      }
    };
  f([Pb, Ob, Nb], function(a) {
    a.prototype = Object.create(Te), a.prototype.state = function(b) {
      if (!arguments.length) return this.$$state;
      if (a !== Nb || !this.$$html5) throw Se("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
      return this.$$state = t(b) ? null : b, this
    }
  });
  var Ue = d("$parse"),
    Ve = Function.prototype.call,
    We = Function.prototype.apply,
    Xe = Function.prototype.bind,
    Ye = qa();
  f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
    Ye[a] = !0
  });
  var Ze = {
      n: "\n",
      f: "\f",
      r: "\r",
      t: "	",
      v: "",
      "'": "'",
      '"': '"'
    },
    $e = function(a) {
      this.options = a
    };
  $e.prototype = {
    constructor: $e,
    lex: function(a) {
      for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
        var b = this.text.charAt(this.index);
        if ('"' === b || "'" === b) this.readString(b);
        else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber();
        else if (this.isIdent(b)) this.readIdent();
        else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
          index: this.index,
          text: b
        }), this.index++;
        else if (this.isWhitespace(b)) this.index++;
        else {
          var c = b + this.peek(),
            d = c + this.peek(2),
            e = Ye[b],
            f = Ye[c],
            g = Ye[d];
          if (e || f || g) {
            var h = g ? d : f ? c : b;
            this.tokens.push({
              index: this.index,
              text: h,
              operator: !0
            }), this.index += h.length
          } else this.throwError("Unexpected next character ", this.index, this.index + 1)
        }
      }
      return this.tokens
    },
    is: function(a, b) {
      return -1 !== b.indexOf(a)
    },
    peek: function(a) {
      var b = a || 1;
      return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
    },
    isNumber: function(a) {
      return a >= "0" && "9" >= a && "string" == typeof a
    },
    isWhitespace: function(a) {
      return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || "Â " === a
    },
    isIdent: function(a) {
      return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
    },
    isExpOperator: function(a) {
      return "-" === a || "+" === a || this.isNumber(a)
    },
    throwError: function(a, b, c) {
      c = c || this.index;
      var d = u(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
      throw Ue("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
    },
    readNumber: function() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var c = td(this.text.charAt(this.index));
        if ("." == c || this.isNumber(c)) a += c;
        else {
          var d = this.peek();
          if ("e" == c && this.isExpOperator(d)) a += c;
          else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
          else {
            if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
            this.throwError("Invalid exponent")
          }
        }
        this.index++
      }
      this.tokens.push({
        index: b,
        text: a,
        constant: !0,
        value: Number(a)
      })
    },
    readIdent: function() {
      for (var a = this.index; this.index < this.text.length;) {
        var b = this.text.charAt(this.index);
        if (!this.isIdent(b) && !this.isNumber(b)) break;
        this.index++
      }
      this.tokens.push({
        index: a,
        text: this.text.slice(a, this.index),
        identifier: !0
      })
    },
    readString: function(a) {
      var b = this.index;
      this.index++;
      for (var c = "", d = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index);
        if (d += f, e) {
          if ("u" === f) {
            var g = this.text.substring(this.index + 1, this.index + 5);
            g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
          } else {
            var h = Ze[f];
            c += h || f
          }
          e = !1
        } else if ("\\" === f) e = !0;
        else {
          if (f === a) return this.index++, void this.tokens.push({
            index: b,
            text: d,
            constant: !0,
            value: c
          });
          c += f
        }
        this.index++
      }
      this.throwError("Unterminated quote", b)
    }
  };
  var _e = function(a, b) {
    this.lexer = a, this.options = b
  };
  _e.Program = "Program", _e.ExpressionStatement = "ExpressionStatement", _e.AssignmentExpression = "AssignmentExpression", _e.ConditionalExpression = "ConditionalExpression", _e.LogicalExpression = "LogicalExpression", _e.BinaryExpression = "BinaryExpression", _e.UnaryExpression = "UnaryExpression", _e.CallExpression = "CallExpression", _e.MemberExpression = "MemberExpression", _e.Identifier = "Identifier", _e.Literal = "Literal", _e.ArrayExpression = "ArrayExpression", _e.Property = "Property", _e.ObjectExpression = "ObjectExpression", _e.ThisExpression = "ThisExpression", _e.NGValueParameter = "NGValueParameter", _e.prototype = {
    ast: function(a) {
      this.text = a, this.tokens = this.lexer.lex(a);
      var b = this.program();
      return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b
    },
    program: function() {
      for (var a = [];;)
        if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
          type: _e.Program,
          body: a
        }
    },
    expressionStatement: function() {
      return {
        type: _e.ExpressionStatement,
        expression: this.filterChain()
      }
    },
    filterChain: function() {
      for (var a, b = this.expression(); a = this.expect("|");) b = this.filter(b);
      return b
    },
    expression: function() {
      return this.assignment()
    },
    assignment: function() {
      var a = this.ternary();
      return this.expect("=") && (a = {
        type: _e.AssignmentExpression,
        left: a,
        right: this.assignment(),
        operator: "="
      }), a
    },
    ternary: function() {
      var a, b, c = this.logicalOR();
      return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), {
        type: _e.ConditionalExpression,
        test: c,
        alternate: a,
        consequent: b
      }) : c
    },
    logicalOR: function() {
      for (var a = this.logicalAND(); this.expect("||");) a = {
        type: _e.LogicalExpression,
        operator: "||",
        left: a,
        right: this.logicalAND()
      };
      return a
    },
    logicalAND: function() {
      for (var a = this.equality(); this.expect("&&");) a = {
        type: _e.LogicalExpression,
        operator: "&&",
        left: a,
        right: this.equality()
      };
      return a
    },
    equality: function() {
      for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = {
        type: _e.BinaryExpression,
        operator: a.text,
        left: b,
        right: this.relational()
      };
      return b
    },
    relational: function() {
      for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = {
        type: _e.BinaryExpression,
        operator: a.text,
        left: b,
        right: this.additive()
      };
      return b
    },
    additive: function() {
      for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = {
        type: _e.BinaryExpression,
        operator: a.text,
        left: b,
        right: this.multiplicative()
      };
      return b
    },
    multiplicative: function() {
      for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = {
        type: _e.BinaryExpression,
        operator: a.text,
        left: b,
        right: this.unary()
      };
      return b
    },
    unary: function() {
      var a;
      return (a = this.expect("+", "-", "!")) ? {
        type: _e.UnaryExpression,
        operator: a.text,
        prefix: !0,
        argument: this.unary()
      } : this.primary()
    },
    primary: function() {
      var a;
      this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = O(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
      for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
        type: _e.CallExpression,
        callee: a,
        arguments: this.parseArguments()
      }, this.consume(")")) : "[" === b.text ? (a = {
        type: _e.MemberExpression,
        object: a,
        property: this.expression(),
        computed: !0
      }, this.consume("]")) : "." === b.text ? a = {
        type: _e.MemberExpression,
        object: a,
        property: this.identifier(),
        computed: !1
      } : this.throwError("IMPOSSIBLE");
      return a
    },
    filter: function(a) {
      for (var b = [a], c = {
          type: _e.CallExpression,
          callee: this.identifier(),
          arguments: b,
          filter: !0
        }; this.expect(":");) b.push(this.expression());
      return c
    },
    parseArguments: function() {
      var a = [];
      if (")" !== this.peekToken().text)
        do a.push(this.expression()); while (this.expect(","));
      return a
    },
    identifier: function() {
      var a = this.consume();
      return a.identifier || this.throwError("is not a valid identifier", a), {
        type: _e.Identifier,
        name: a.text
      }
    },
    constant: function() {
      return {
        type: _e.Literal,
        value: this.consume().value
      }
    },
    arrayDeclaration: function() {
      var a = [];
      if ("]" !== this.peekToken().text)
        do {
          if (this.peek("]")) break;
          a.push(this.expression())
        } while (this.expect(","));
      return this.consume("]"), {
        type: _e.ArrayExpression,
        elements: a
      }
    },
    object: function() {
      var a, b = [];
      if ("}" !== this.peekToken().text)
        do {
          if (this.peek("}")) break;
          a = {
            type: _e.Property,
            kind: "init"
          }, this.peek().constant ? a.key = this.constant() : this.peek().identifier ? a.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), a.value = this.expression(), b.push(a)
        } while (this.expect(","));
      return this.consume("}"), {
        type: _e.ObjectExpression,
        properties: b
      }
    },
    throwError: function(a, b) {
      throw Ue("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
    },
    consume: function(a) {
      if (0 === this.tokens.length) throw Ue("ueoe", "Unexpected end of expression: {0}", this.text);
      var b = this.expect(a);
      return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
    },
    peekToken: function() {
      if (0 === this.tokens.length) throw Ue("ueoe", "Unexpected end of expression: {0}", this.text);
      return this.tokens[0]
    },
    peek: function(a, b, c, d) {
      return this.peekAhead(0, a, b, c, d)
    },
    peekAhead: function(a, b, c, d, e) {
      if (this.tokens.length > a) {
        var f = this.tokens[a],
          g = f.text;
        if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f
      }
      return !1
    },
    expect: function(a, b, c, d) {
      var e = this.peek(a, b, c, d);
      return e ? (this.tokens.shift(), e) : !1
    },
    constants: {
      "true": {
        type: _e.Literal,
        value: !0
      },
      "false": {
        type: _e.Literal,
        value: !1
      },
      "null": {
        type: _e.Literal,
        value: null
      },
      undefined: {
        type: _e.Literal,
        value: c
      },
      "this": {
        type: _e.ThisExpression
      }
    }
  }, gc.prototype = {
    compile: function(a, b) {
      var d = this,
        e = this.astBuilder.ast(a);
      this.state = {
        nextId: 0,
        filters: {},
        expensiveChecks: b,
        fn: {
          vars: [],
          body: [],
          own: {}
        },
        assign: {
          vars: [],
          body: [],
          own: {}
        },
        inputs: []
      }, ac(e, d.$filter);
      var g, h = "";
      if (this.stage = "assign", g = dc(e)) {
        this.state.computing = "assign";
        var i = this.nextId();
        this.recurse(g, i), this.return_(i), h = "fn.assign=" + this.generateFunction("assign", "s,v,l")
      }
      var j = bc(e.body);
      d.stage = "inputs", f(j, function(a, b) {
        var c = "fn" + b;
        d.state[c] = {
          vars: [],
          body: [],
          own: {}
        }, d.state.computing = c;
        var e = d.nextId();
        d.recurse(a, e), d.return_(e), d.state.inputs.push(c), a.watchId = b
      }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
      var k = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + h + this.watchFns() + "return fn;",
        l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", k)(this.$filter, Ub, Wb, Xb, Vb, Yb, Zb, $b, a);
      return this.state = this.stage = c, l.literal = ec(e), l.constant = fc(e), l
    },
    USE: "use",
    STRICT: "strict",
    watchFns: function() {
      var a = [],
        b = this.state.inputs,
        c = this;
      return f(b, function(b) {
        a.push("var " + b + "=" + c.generateFunction(b, "s"))
      }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
    },
    generateFunction: function(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
    },
    filterPrefix: function() {
      var a = [],
        b = this;
      return f(this.state.filters, function(c, d) {
        a.push(c + "=$filter(" + b.escape(d) + ")")
      }), a.length ? "var " + a.join(",") + ";" : ""
    },
    varsPrefix: function(a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
    },
    body: function(a) {
      return this.state[a].body.join("")
    },
    recurse: function(a, b, d, e, g, h) {
      var i, j, k, l, m = this;
      if (e = e || p, !h && u(a.watchId)) return b = b || this.nextId(), void this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, e, g, !0));
      switch (a.type) {
        case _e.Program:
          f(a.body, function(b, d) {
            m.recurse(b.expression, c, c, function(a) {
              j = a
            }), d !== a.body.length - 1 ? m.current().body.push(j, ";") : m.return_(j)
          });
          break;
        case _e.Literal:
          l = this.escape(a.value), this.assign(b, l), e(l);
          break;
        case _e.UnaryExpression:
          this.recurse(a.argument, c, c, function(a) {
            j = a
          }), l = a.operator + "(" + this.ifDefined(j, 0) + ")", this.assign(b, l), e(l);
          break;
        case _e.BinaryExpression:
          this.recurse(a.left, c, c, function(a) {
            i = a
          }), this.recurse(a.right, c, c, function(a) {
            j = a
          }), l = "+" === a.operator ? this.plus(i, j) : "-" === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0) : "(" + i + ")" + a.operator + "(" + j + ")", this.assign(b, l), e(l);
          break;
        case _e.LogicalExpression:
          b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), e(b);
          break;
        case _e.ConditionalExpression:
          b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), e(b);
          break;
        case _e.Identifier:
          b = b || this.nextId(), d && (d.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name), Ub(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function() {
            m.if_("inputs" === m.stage || "s", function() {
              g && 1 !== g && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), m.assign(b, m.nonComputedMember("s", a.name))
            })
          }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || ic(a.name)) && m.addEnsureSafeObject(b), e(b);
          break;
        case _e.MemberExpression:
          i = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, i, c, function() {
            m.if_(m.notNull(i), function() {
              a.computed ? (j = m.nextId(), m.recurse(a.property, j), m.getStringValue(j), m.addEnsureSafeMemberName(j), g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), "{}")), l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, d.name = j)) : (Ub(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), "{}")), l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || ic(a.property.name)) && (l = m.ensureSafeObject(l)), m.assign(b, l), d && (d.computed = !1, d.name = a.property.name))
            }, function() {
              m.assign(b, "undefined")
            }), e(b)
          }, !!g);
          break;
        case _e.CallExpression:
          b = b || this.nextId(), a.filter ? (j = m.filter(a.callee.name), k = [], f(a.arguments, function(a) {
            var b = m.nextId();
            m.recurse(a, b), k.push(b)
          }), l = j + "(" + k.join(",") + ")", m.assign(b, l), e(b)) : (j = m.nextId(), i = {}, k = [], m.recurse(a.callee, j, i, function() {
            m.if_(m.notNull(j), function() {
              m.addEnsureSafeFunction(j), f(a.arguments, function(a) {
                m.recurse(a, m.nextId(), c, function(a) {
                  k.push(m.ensureSafeObject(a))
                })
              }), i.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(i.context), l = m.member(i.context, i.name, i.computed) + "(" + k.join(",") + ")") : l = j + "(" + k.join(",") + ")", l = m.ensureSafeObject(l), m.assign(b, l)
            }, function() {
              m.assign(b, "undefined")
            }), e(b)
          }));
          break;
        case _e.AssignmentExpression:
          if (j = this.nextId(), i = {}, !cc(a.left)) throw Ue("lval", "Trying to assing a value to a non l-value");
          this.recurse(a.left, c, i, function() {
            m.if_(m.notNull(i.context), function() {
              m.recurse(a.right, j), m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)), m.addEnsureSafeAssignContext(i.context), l = m.member(i.context, i.name, i.computed) + a.operator + j, m.assign(b, l), e(b || l)
            })
          }, 1);
          break;
        case _e.ArrayExpression:
          k = [], f(a.elements, function(a) {
            m.recurse(a, m.nextId(), c, function(a) {
              k.push(a)
            })
          }), l = "[" + k.join(",") + "]", this.assign(b, l), e(l);
          break;
        case _e.ObjectExpression:
          k = [], f(a.properties, function(a) {
            m.recurse(a.value, m.nextId(), c, function(b) {
              k.push(m.escape(a.key.type === _e.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
            })
          }), l = "{" + k.join(",") + "}", this.assign(b, l), e(l);
          break;
        case _e.ThisExpression:
          this.assign(b, "s"), e("s");
          break;
        case _e.NGValueParameter:
          this.assign(b, "v"), e("v")
      }
    },
    getHasOwnProperty: function(a, b) {
      var c = a + "." + b,
        d = this.current().own;
      return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), d[c]
    },
    assign: function(a, b) {
      return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0
    },
    filter: function(a) {
      return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
    },
    ifDefined: function(a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")"
    },
    plus: function(a, b) {
      return "plus(" + a + "," + b + ")"
    },
    return_: function(a) {
      this.current().body.push("return ", a, ";")
    },
    if_: function(a, b, c) {
      if (a === !0) b();
      else {
        var d = this.current().body;
        d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"))
      }
    },
    not: function(a) {
      return "!(" + a + ")"
    },
    notNull: function(a) {
      return a + "!=null"
    },
    nonComputedMember: function(a, b) {
      return a + "." + b
    },
    computedMember: function(a, b) {
      return a + "[" + b + "]"
    },
    member: function(a, b, c) {
      return c ? this.computedMember(a, b) : this.nonComputedMember(a, b)
    },
    addEnsureSafeObject: function(a) {
      this.current().body.push(this.ensureSafeObject(a), ";")
    },
    addEnsureSafeMemberName: function(a) {
      this.current().body.push(this.ensureSafeMemberName(a), ";")
    },
    addEnsureSafeFunction: function(a) {
      this.current().body.push(this.ensureSafeFunction(a), ";")
    },
    addEnsureSafeAssignContext: function(a) {
      this.current().body.push(this.ensureSafeAssignContext(a), ";")
    },
    ensureSafeObject: function(a) {
      return "ensureSafeObject(" + a + ",text)"
    },
    ensureSafeMemberName: function(a) {
      return "ensureSafeMemberName(" + a + ",text)"
    },
    ensureSafeFunction: function(a) {
      return "ensureSafeFunction(" + a + ",text)"
    },
    getStringValue: function(a) {
      this.assign(a, "getStringValue(" + a + ",text)")
    },
    ensureSafeAssignContext: function(a) {
      return "ensureSafeAssignContext(" + a + ",text)"
    },
    lazyRecurse: function(a, b, c, d, e, f) {
      var g = this;
      return function() {
        g.recurse(a, b, c, d, e, f)
      }
    },
    lazyAssign: function(a, b) {
      var c = this;
      return function() {
        c.assign(a, b)
      }
    },
    stringEscapeRegex: /[^ a-zA-Z0-9]/g,
    stringEscapeFn: function(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    },
    escape: function(a) {
      if (x(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
      if (y(a)) return a.toString();
      if (a === !0) return "true";
      if (a === !1) return "false";
      if (null === a) return "null";
      if ("undefined" == typeof a) return "undefined";
      throw Ue("esc", "IMPOSSIBLE")
    },
    nextId: function(a, b) {
      var c = "v" + this.state.nextId++;
      return a || this.current().vars.push(c + (b ? "=" + b : "")), c
    },
    current: function() {
      return this.state[this.state.computing]
    }
  }, hc.prototype = {
    compile: function(a, b) {
      var c = this,
        d = this.astBuilder.ast(a);
      this.expression = a, this.expensiveChecks = b, ac(d, c.$filter);
      var e, g;
      (e = dc(d)) && (g = this.recurse(e));
      var h, i = bc(d.body);
      i && (h = [], f(i, function(a, b) {
        var d = c.recurse(a);
        a.input = d, h.push(d), a.watchId = b
      }));
      var j = [];
      f(d.body, function(a) {
        j.push(c.recurse(a.expression))
      });
      var k = 0 === d.body.length ? function() {} : 1 === d.body.length ? j[0] : function(a, b) {
        var c;
        return f(j, function(d) {
          c = d(a, b)
        }), c
      };
      return g && (k.assign = function(a, b, c) {
        return g(a, c, b)
      }), h && (k.inputs = h), k.literal = ec(d), k.constant = fc(d), k
    },
    recurse: function(a, b, d) {
      var e, g, h, i = this;
      if (a.input) return this.inputs(a.input, a.watchId);
      switch (a.type) {
        case _e.Literal:
          return this.value(a.value, b);
        case _e.UnaryExpression:
          return g = this.recurse(a.argument), this["unary" + a.operator](g, b);
        case _e.BinaryExpression:
          return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
        case _e.LogicalExpression:
          return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
        case _e.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
        case _e.Identifier:
          return Ub(a.name, i.expression), i.identifier(a.name, i.expensiveChecks || ic(a.name), b, d, i.expression);
        case _e.MemberExpression:
          return e = this.recurse(a.object, !1, !!d), a.computed || (Ub(a.property.name, i.expression), g = a.property.name), a.computed && (g = this.recurse(a.property)), a.computed ? this.computedMember(e, g, b, d, i.expression) : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);
        case _e.CallExpression:
          return h = [], f(a.arguments, function(a) {
            h.push(i.recurse(a))
          }), a.filter && (g = this.$filter(a.callee.name)), a.filter || (g = this.recurse(a.callee, !0)), a.filter ? function(a, d, e, f) {
            for (var i = [], j = 0; j < h.length; ++j) i.push(h[j](a, d, e, f));
            var k = g.apply(c, i, f);
            return b ? {
              context: c,
              name: c,
              value: k
            } : k
          } : function(a, c, d, e) {
            var f, j = g(a, c, d, e);
            if (null != j.value) {
              Wb(j.context, i.expression), Xb(j.value, i.expression);
              for (var k = [], l = 0; l < h.length; ++l) k.push(Wb(h[l](a, c, d, e), i.expression));
              f = Wb(j.value.apply(j.context, k), i.expression)
            }
            return b ? {
              value: f
            } : f
          };
        case _e.AssignmentExpression:
          return e = this.recurse(a.left, !0, 1), g = this.recurse(a.right),
            function(a, c, d, f) {
              var h = e(a, c, d, f),
                j = g(a, c, d, f);
              return Wb(h.value, i.expression), Yb(h.context), h.context[h.name] = j, b ? {
                value: j
              } : j
            };
        case _e.ArrayExpression:
          return h = [], f(a.elements, function(a) {
              h.push(i.recurse(a))
            }),
            function(a, c, d, e) {
              for (var f = [], g = 0; g < h.length; ++g) f.push(h[g](a, c, d, e));
              return b ? {
                value: f
              } : f
            };
        case _e.ObjectExpression:
          return h = [], f(a.properties, function(a) {
              h.push({
                key: a.key.type === _e.Identifier ? a.key.name : "" + a.key.value,
                value: i.recurse(a.value)
              })
            }),
            function(a, c, d, e) {
              for (var f = {}, g = 0; g < h.length; ++g) f[h[g].key] = h[g].value(a, c, d, e);
              return b ? {
                value: f
              } : f
            };
        case _e.ThisExpression:
          return function(a) {
            return b ? {
              value: a
            } : a
          };
        case _e.NGValueParameter:
          return function(a, c, d, e) {
            return b ? {
              value: d
            } : d
          }
      }
    },
    "unary+": function(a, b) {
      return function(c, d, e, f) {
        var g = a(c, d, e, f);
        return g = u(g) ? +g : 0, b ? {
          value: g
        } : g
      }
    },
    "unary-": function(a, b) {
      return function(c, d, e, f) {
        var g = a(c, d, e, f);
        return g = u(g) ? -g : 0, b ? {
          value: g
        } : g
      }
    },
    "unary!": function(a, b) {
      return function(c, d, e, f) {
        var g = !a(c, d, e, f);
        return b ? {
          value: g
        } : g
      }
    },
    "binary+": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g),
          i = b(d, e, f, g),
          j = $b(h, i);
        return c ? {
          value: j
        } : j
      }
    },
    "binary-": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g),
          i = b(d, e, f, g),
          j = (u(h) ? h : 0) - (u(i) ? i : 0);
        return c ? {
          value: j
        } : j
      }
    },
    "binary*": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) * b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary/": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) / b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary%": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) % b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary===": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) === b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary!==": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) !== b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary==": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) == b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary!=": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) != b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary<": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) < b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary>": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) > b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary<=": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) <= b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary>=": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) >= b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary&&": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) && b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "binary||": function(a, b, c) {
      return function(d, e, f, g) {
        var h = a(d, e, f, g) || b(d, e, f, g);
        return c ? {
          value: h
        } : h
      }
    },
    "ternary?:": function(a, b, c, d) {
      return function(e, f, g, h) {
        var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
        return d ? {
          value: i
        } : i
      }
    },
    value: function(a, b) {
      return function() {
        return b ? {
          context: c,
          name: c,
          value: a
        } : a
      }
    },
    identifier: function(a, b, d, e, f) {
      return function(g, h, i, j) {
        var k = h && a in h ? h : g;
        e && 1 !== e && k && !k[a] && (k[a] = {});
        var l = k ? k[a] : c;
        return b && Wb(l, f), d ? {
          context: k,
          name: a,
          value: l
        } : l
      }
    },
    computedMember: function(a, b, c, d, e) {
      return function(f, g, h, i) {
        var j, k, l = a(f, g, h, i);
        return null != l && (j = b(f, g, h, i), j = Vb(j), Ub(j, e), d && 1 !== d && l && !l[j] && (l[j] = {}), k = l[j], Wb(k, e)), c ? {
          context: l,
          name: j,
          value: k
        } : k
      }
    },
    nonComputedMember: function(a, b, d, e, f, g) {
      return function(h, i, j, k) {
        var l = a(h, i, j, k);
        f && 1 !== f && l && !l[b] && (l[b] = {});
        var m = null != l ? l[b] : c;
        return (d || ic(b)) && Wb(m, g), e ? {
          context: l,
          name: b,
          value: m
        } : m
      }
    },
    inputs: function(a, b) {
      return function(c, d, e, f) {
        return f ? f[b] : a(c, d, e)
      }
    }
  };
  var af = function(a, b, c) {
    this.lexer = a, this.$filter = b, this.options = c, this.ast = new _e(this.lexer), this.astCompiler = c.csp ? new hc(this.ast, b) : new gc(this.ast, b)
  };
  af.prototype = {
    constructor: af,
    parse: function(a) {
      return this.astCompiler.compile(a, this.options.expensiveChecks)
    }
  };
  var bf = (qa(), qa(), Object.prototype.valueOf),
    cf = d("$sce"),
    df = {
      HTML: "html",
      CSS: "css",
      URL: "url",
      RESOURCE_URL: "resourceUrl",
      JS: "js"
    },
    De = d("$compile"),
    ef = b.createElement("a"),
    ff = zc(a.location.href);
  Cc.$inject = ["$document"], Ec.$inject = ["$provide"], Jc.$inject = ["$locale"], Kc.$inject = ["$locale"];
  var gf = ".",
    hf = {
      yyyy: Nc("FullYear", 4),
      yy: Nc("FullYear", 2, 0, !0),
      y: Nc("FullYear", 1),
      MMMM: Oc("Month"),
      MMM: Oc("Month", !0),
      MM: Nc("Month", 2, 1),
      M: Nc("Month", 1, 1),
      dd: Nc("Date", 2),
      d: Nc("Date", 1),
      HH: Nc("Hours", 2),
      H: Nc("Hours", 1),
      hh: Nc("Hours", 2, -12),
      h: Nc("Hours", 1, -12),
      mm: Nc("Minutes", 2),
      m: Nc("Minutes", 1),
      ss: Nc("Seconds", 2),
      s: Nc("Seconds", 1),
      sss: Nc("Milliseconds", 3),
      EEEE: Oc("Day"),
      EEE: Oc("Day", !0),
      a: Tc,
      Z: Pc,
      ww: Sc(2),
      w: Sc(1),
      G: Uc,
      GG: Uc,
      GGG: Uc,
      GGGG: Vc
    },
    jf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
    kf = /^\-?\d+$/;
  Wc.$inject = ["$locale"];
  var lf = r(td),
    mf = r(vd);
  Zc.$inject = ["$parse"];
  var nf = r({
      restrict: "E",
      compile: function(a, b) {
        return b.href || b.xlinkHref ? void 0 : function(a, b) {
          if ("a" === b[0].nodeName.toLowerCase()) {
            var c = "[object SVGAnimatedString]" === Fd.call(b.prop("href")) ? "xlink:href" : "href";
            b.on("click", function(a) {
              b.attr(c) || a.preventDefault()
            })
          }
        }
      }
    }),
    of = {};
  f(ne, function(a, b) {
    function c(a, c, e) {
      a.$watch(e[d], function(a) {
        e.$set(b, !!a)
      })
    }
    if ("multiple" != a) {
      var d = jb("ng-" + b),
        e = c;
      "checked" === a && (e = function(a, b, e) {
        e.ngModel !== e[d] && c(a, b, e)
      }), of[d] = function() {
        return {
          restrict: "A",
          priority: 100,
          link: e
        }
      }
    }
  }), f(pe, function(a, b) {
    of[b] = function() {
      return {
        priority: 100,
        link: function(a, c, d) {
          if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
            var e = d.ngPattern.match(rd);
            if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]))
          }
          a.$watch(d[b], function(a) {
            d.$set(b, a)
          })
        }
      }
    }
  }), f(["src", "srcset", "href"], function(a) {
    var b = jb("ng-" + a);
    of[b] = function() {
      return {
        priority: 99,
        link: function(c, d, e) {
          var f = a,
            g = a;
          "href" === a && "[object SVGAnimatedString]" === Fd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
            return b ? (e.$set(g, b), void(yd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
          })
        }
      }
    }
  });
  var pf = {
      $addControl: p,
      $$renameControl: _c,
      $removeControl: p,
      $setValidity: p,
      $setDirty: p,
      $setPristine: p,
      $setSubmitted: p
    },
    qf = "ng-submitted";
  ad.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  var rf = function(a) {
      return ["$timeout", "$parse", function(b, d) {
        function e(a) {
          return "" === a ? d('this[""]').assign : d(a).assign || p
        }
        var f = {
          name: "form",
          restrict: a ? "EAC" : "E",
          require: ["form", "^^?form"],
          controller: ad,
          compile: function(d, f) {
            d.addClass(Zf).addClass(Xf);
            var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
            return {
              pre: function(a, d, f, h) {
                var i = h[0];
                if (!("action" in f)) {
                  var j = function(b) {
                    a.$apply(function() {
                      i.$commitViewValue(), i.$setSubmitted()
                    }), b.preventDefault()
                  };
                  be(d[0], "submit", j), d.on("$destroy", function() {
                    b(function() {
                      ce(d[0], "submit", j)
                    }, 0, !1)
                  })
                }
                var k = h[1] || i.$$parentForm;
                k.$addControl(i);
                var m = g ? e(i.$name) : p;
                g && (m(a, i), f.$observe(g, function(b) {
                  i.$name !== b && (m(a, c), i.$$parentForm.$$renameControl(i, b), (m = e(i.$name))(a, i))
                })), d.on("$destroy", function() {
                  i.$$parentForm.$removeControl(i), m(a, c), l(i, pf)
                })
              }
            }
          }
        };
        return f
      }]
    },
    sf = rf(),
    tf = rf(!0),
    uf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
    vf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    wf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    xf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
    yf = /^(\d{4})-(\d{2})-(\d{2})$/,
    zf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
    Af = /^(\d{4})-W(\d\d)$/,
    Bf = /^(\d{4})-(\d\d)$/,
    Cf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
    Df = {
      text: cd,
      date: gd("date", yf, fd(yf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
      "datetime-local": gd("datetimelocal", zf, fd(zf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
      time: gd("time", Cf, fd(Cf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
      week: gd("week", Af, ed, "yyyy-Www"),
      month: gd("month", Bf, fd(Bf, ["yyyy", "MM"]), "yyyy-MM"),
      number: id,
      url: jd,
      email: kd,
      radio: ld,
      checkbox: nd,
      hidden: p,
      button: p,
      submit: p,
      reset: p,
      file: p
    },
    Ef = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
      return {
        restrict: "E",
        require: ["?ngModel"],
        link: {
          pre: function(e, f, g, h) {
            h[0] && (Df[td(g.type)] || Df.text)(e, f, g, h[0], b, a, c, d)
          }
        }
      }
    }],
    Ff = /^(true|false|\d+)$/,
    Gf = function() {
      return {
        restrict: "A",
        priority: 100,
        compile: function(a, b) {
          return Ff.test(b.ngValue) ? function(a, b, c) {
            c.$set("value", a.$eval(c.ngValue))
          } : function(a, b, c) {
            a.$watch(c.ngValue, function(a) {
              c.$set("value", a)
            })
          }
        }
      }
    },
    Hf = ["$compile", function(a) {
      return {
        restrict: "AC",
        compile: function(b) {
          return a.$$addBindingClass(b),
            function(b, c, d) {
              a.$$addBindingInfo(c, d.ngBind), c = c[0], b.$watch(d.ngBind, function(a) {
                c.textContent = t(a) ? "" : a
              })
            }
        }
      }
    }],
    If = ["$interpolate", "$compile", function(a, b) {
      return {
        compile: function(c) {
          return b.$$addBindingClass(c),
            function(c, d, e) {
              var f = a(d.attr(e.$attr.ngBindTemplate));
              b.$$addBindingInfo(d, f.expressions), d = d[0], e.$observe("ngBindTemplate", function(a) {
                d.textContent = t(a) ? "" : a
              })
            }
        }
      }
    }],
    Jf = ["$sce", "$parse", "$compile", function(a, b, c) {
      return {
        restrict: "A",
        compile: function(d, e) {
          var f = b(e.ngBindHtml),
            g = b(e.ngBindHtml, function(a) {
              return (a || "").toString()
            });
          return c.$$addBindingClass(d),
            function(b, d, e) {
              c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                d.html(a.getTrustedHtml(f(b)) || "")
              })
            }
        }
      }
    }],
    Kf = r({
      restrict: "A",
      require: "ngModel",
      link: function(a, b, c, d) {
        d.$viewChangeListeners.push(function() {
          a.$eval(c.ngChange)
        })
      }
    }),
    Lf = od("", !0),
    Mf = od("Odd", 0),
    Nf = od("Even", 1),
    Of = $c({
      compile: function(a, b) {
        b.$set("ngCloak", c), a.removeClass("ng-cloak")
      }
    }),
    Pf = [function() {
      return {
        restrict: "A",
        scope: !0,
        controller: "@",
        priority: 500
      }
    }],
    Qf = {},
    Rf = {
      blur: !0,
      focus: !0
    };
  f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
    var b = jb("ng-" + a);
    Qf[b] = ["$parse", "$rootScope", function(c, d) {
      return {
        restrict: "A",
        compile: function(e, f) {
          var g = c(f[b], null, !0);
          return function(b, c) {
            c.on(a, function(c) {
              var e = function() {
                g(b, {
                  $event: c
                })
              };
              Rf[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
            })
          }
        }
      }
    }]
  });
  var Sf = ["$animate", function(a) {
      return {
        multiElement: !0,
        transclude: "element",
        priority: 600,
        terminal: !0,
        restrict: "A",
        $$tlb: !0,
        link: function(c, d, e, f, g) {
          var h, i, j;
          c.$watch(e.ngIf, function(c) {
            c ? i || g(function(c, f) {
              i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                clone: c
              }, a.enter(c, d.parent(), d)
            }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = pa(h.clone), a.leave(j).then(function() {
              j = null
            }), h = null))
          })
        }
      }
    }],
    Tf = ["$templateRequest", "$anchorScroll", "$animate", function(a, b, c) {
      return {
        restrict: "ECA",
        priority: 400,
        terminal: !0,
        transclude: "element",
        controller: Id.noop,
        compile: function(d, e) {
          var f = e.ngInclude || e.src,
            g = e.onload || "",
            h = e.autoscroll;
          return function(d, e, i, j, k) {
            var l, m, n, o = 0,
              p = function() {
                m && (m.remove(), m = null), l && (l.$destroy(), l = null), n && (c.leave(n).then(function() {
                  m = null
                }), m = n, n = null)
              };
            d.$watch(f, function(f) {
              var i = function() {
                  !u(h) || h && !d.$eval(h) || b()
                },
                m = ++o;
              f ? (a(f, !0).then(function(a) {
                if (m === o) {
                  var b = d.$new();
                  j.template = a;
                  var h = k(b, function(a) {
                    p(), c.enter(a, null, e).then(i)
                  });
                  l = b, n = h, l.$emit("$includeContentLoaded", f), d.$eval(g)
                }
              }, function() {
                m === o && (p(), d.$emit("$includeContentError", f))
              }), d.$emit("$includeContentRequested", f)) : (p(), j.template = null)
            })
          }
        }
      }
    }],
    Uf = ["$compile", function(a) {
      return {
        restrict: "ECA",
        priority: -400,
        require: "ngInclude",
        link: function(c, d, e, f) {
          return /SVG/.test(d[0].toString()) ? (d.empty(), void a(Aa(f.template, b).childNodes)(c, function(a) {
            d.append(a)
          }, {
            futureParentElement: d
          })) : (d.html(f.template), void a(d.contents())(c))
        }
      }
    }],
    Vf = $c({
      priority: 450,
      compile: function() {
        return {
          pre: function(a, b, c) {
            a.$eval(c.ngInit)
          }
        }
      }
    }),
    Wf = function() {
      return {
        restrict: "A",
        priority: 100,
        require: "ngModel",
        link: function(a, b, d, e) {
          var g = b.attr(d.$attr.ngList) || ", ",
            h = "false" !== d.ngTrim,
            i = h ? Nd(g) : g,
            j = function(a) {
              if (!t(a)) {
                var b = [];
                return a && f(a.split(i), function(a) {
                  a && b.push(h ? Nd(a) : a)
                }), b
              }
            };
          e.$parsers.push(j), e.$formatters.push(function(a) {
            return Ld(a) ? a.join(g) : c
          }), e.$isEmpty = function(a) {
            return !a || !a.length
          }
        }
      }
    },
    Xf = "ng-valid",
    Yf = "ng-invalid",
    Zf = "ng-pristine",
    $f = "ng-dirty",
    _f = "ng-untouched",
    ag = "ng-touched",
    bg = "ng-pending",
    cg = d("ngModel"),
    dg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
      this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a), this.$$parentForm = pf;
      var m, n = g(d.ngModel),
        o = n.assign,
        q = n,
        r = o,
        s = null,
        v = this;
      this.$$setOptions = function(a) {
        if (v.$options = a, a && a.getterSetter) {
          var b = g(d.ngModel + "()"),
            c = g(d.ngModel + "($$$p)");
          q = function(a) {
            var c = n(a);
            return A(c) && (c = b(a)), c
          }, r = function(a, b) {
            A(n(a)) ? c(a, {
              $$$p: v.$modelValue
            }) : o(a, v.$modelValue)
          }
        } else if (!n.assign) throw cg("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, $(e))
      }, this.$render = p, this.$isEmpty = function(a) {
        return t(a) || "" === a || null === a || a !== a
      };
      var w = 0;
      pd({
        ctrl: this,
        $element: e,
        set: function(a, b) {
          a[b] = !0
        },
        unset: function(a, b) {
          delete a[b]
        },
        $animate: h
      }), this.$setPristine = function() {
        v.$dirty = !1, v.$pristine = !0, h.removeClass(e, $f), h.addClass(e, Zf)
      }, this.$setDirty = function() {
        v.$dirty = !0, v.$pristine = !1, h.removeClass(e, Zf), h.addClass(e, $f), v.$$parentForm.$setDirty()
      }, this.$setUntouched = function() {
        v.$touched = !1, v.$untouched = !0, h.setClass(e, _f, ag)
      }, this.$setTouched = function() {
        v.$touched = !0, v.$untouched = !1, h.setClass(e, ag, _f)
      }, this.$rollbackViewValue = function() {
        i.cancel(s), v.$viewValue = v.$$lastCommittedViewValue, v.$render()
      }, this.$validate = function() {
        if (!y(v.$modelValue) || !isNaN(v.$modelValue)) {
          var a = v.$$lastCommittedViewValue,
            b = v.$$rawModelValue,
            d = v.$valid,
            e = v.$modelValue,
            f = v.$options && v.$options.allowInvalid;
          v.$$runValidators(b, a, function(a) {
            f || d === a || (v.$modelValue = a ? b : c, v.$modelValue !== e && v.$$writeModelToScope())
          })
        }
      }, this.$$runValidators = function(a, b, d) {
        function e() {
          var a = v.$$parserName || "parse";
          return t(m) ? (i(a, null), !0) : (m || (f(v.$validators, function(a, b) {
            i(b, null)
          }), f(v.$asyncValidators, function(a, b) {
            i(b, null)
          })), i(a, m), m)
        }

        function g() {
          var c = !0;
          return f(v.$validators, function(d, e) {
            var f = d(a, b);
            c = c && f, i(e, f)
          }), c ? !0 : (f(v.$asyncValidators, function(a, b) {
            i(b, null)
          }), !1)
        }

        function h() {
          var d = [],
            e = !0;
          f(v.$asyncValidators, function(f, g) {
            var h = f(a, b);
            if (!I(h)) throw cg("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
            i(g, c), d.push(h.then(function() {
              i(g, !0)
            }, function(a) {
              e = !1, i(g, !1)
            }))
          }), d.length ? k.all(d).then(function() {
            j(e)
          }, p) : j(!0)
        }

        function i(a, b) {
          l === w && v.$setValidity(a, b)
        }

        function j(a) {
          l === w && d(a)
        }
        w++;
        var l = w;
        return e() && g() ? void h() : void j(!1)
      }, this.$commitViewValue = function() {
        var a = v.$viewValue;
        i.cancel(s), (v.$$lastCommittedViewValue !== a || "" === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
      }, this.$$parseAndValidate = function() {
        function b() {
          v.$modelValue !== g && v.$$writeModelToScope()
        }
        var d = v.$$lastCommittedViewValue,
          e = d;
        if (m = t(e) ? c : !0)
          for (var f = 0; f < v.$parsers.length; f++)
            if (e = v.$parsers[f](e), t(e)) {
              m = !1;
              break
            }
        y(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = q(a));
        var g = v.$modelValue,
          h = v.$options && v.$options.allowInvalid;
        v.$$rawModelValue = e, h && (v.$modelValue = e, b()), v.$$runValidators(e, v.$$lastCommittedViewValue, function(a) {
          h || (v.$modelValue = a ? e : c, b())
        })
      }, this.$$writeModelToScope = function() {
        r(a, v.$modelValue), f(v.$viewChangeListeners, function(a) {
          try {
            a()
          } catch (c) {
            b(c)
          }
        })
      }, this.$setViewValue = function(a, b) {
        v.$viewValue = a, (!v.$options || v.$options.updateOnDefault) && v.$$debounceViewValueCommit(b)
      }, this.$$debounceViewValueCommit = function(b) {
        var c, d = 0,
          e = v.$options;
        e && u(e.debounce) && (c = e.debounce, y(c) ? d = c : y(c[b]) ? d = c[b] : y(c["default"]) && (d = c["default"])),
          i.cancel(s), d ? s = i(function() {
            v.$commitViewValue()
          }, d) : j.$$phase ? v.$commitViewValue() : a.$apply(function() {
            v.$commitViewValue()
          })
      }, a.$watch(function() {
        var b = q(a);
        if (b !== v.$modelValue && (v.$modelValue === v.$modelValue || b === b)) {
          v.$modelValue = v.$$rawModelValue = b, m = c;
          for (var d = v.$formatters, e = d.length, f = b; e--;) f = d[e](f);
          v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), v.$$runValidators(b, f, p))
        }
        return b
      })
    }],
    eg = ["$rootScope", function(a) {
      return {
        restrict: "A",
        require: ["ngModel", "^?form", "^?ngModelOptions"],
        controller: dg,
        priority: 1,
        compile: function(b) {
          return b.addClass(Zf).addClass(_f).addClass(Xf), {
            pre: function(a, b, c, d) {
              var e = d[0],
                f = d[1] || e.$$parentForm;
              e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                e.$name !== a && e.$$parentForm.$$renameControl(e, a)
              }), a.$on("$destroy", function() {
                e.$$parentForm.$removeControl(e)
              })
            },
            post: function(b, c, d, e) {
              var f = e[0];
              f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                f.$$debounceViewValueCommit(a && a.type)
              }), c.on("blur", function(c) {
                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
              })
            }
          }
        }
      }
    }],
    fg = /(\s+|^)default(\s+|$)/,
    gg = function() {
      return {
        restrict: "A",
        controller: ["$scope", "$attrs", function(a, b) {
          var c = this;
          this.$options = O(a.$eval(b.ngModelOptions)), u(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Nd(this.$options.updateOn.replace(fg, function() {
            return c.$options.updateOnDefault = !0, " "
          }))) : this.$options.updateOnDefault = !0
        }]
      }
    },
    hg = $c({
      terminal: !0,
      priority: 1e3
    }),
    ig = d("ngOptions"),
    jg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
    kg = ["$compile", "$parse", function(a, c) {
      function d(a, b, d) {
        function f(a, b, c, d, e) {
          this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e
        }

        function g(a) {
          var b;
          if (!j && e(a)) b = a;
          else {
            b = [];
            for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
          }
          return b
        }
        var h = a.match(jg);
        if (!h) throw ig("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, $(b));
        var i = h[5] || h[7],
          j = h[6],
          k = / as /.test(h[0]) && h[1],
          l = h[9],
          m = c(h[2] ? h[1] : i),
          n = k && c(k),
          o = n || m,
          p = l && c(l),
          q = l ? function(a, b) {
            return p(d, b)
          } : function(a) {
            return Wa(a)
          },
          r = function(a, b) {
            return q(a, x(a, b))
          },
          s = c(h[2] || h[1]),
          t = c(h[3] || ""),
          u = c(h[4] || ""),
          v = c(h[8]),
          w = {},
          x = j ? function(a, b) {
            return w[j] = b, w[i] = a, w
          } : function(a) {
            return w[i] = a, w
          };
        return {
          trackBy: l,
          getTrackByValue: r,
          getWatchables: c(v, function(a) {
            var b = [];
            a = a || [];
            for (var c = g(a), e = c.length, f = 0; e > f; f++) {
              var i = a === c ? f : c[f],
                j = (a[i], x(a[i], i)),
                k = q(a[i], j);
              if (b.push(k), h[2] || h[1]) {
                var l = s(d, j);
                b.push(l)
              }
              if (h[4]) {
                var m = u(d, j);
                b.push(m)
              }
            }
            return b
          }),
          getOptions: function() {
            for (var a = [], b = {}, c = v(d) || [], e = g(c), h = e.length, i = 0; h > i; i++) {
              var j = c === e ? i : e[i],
                k = c[j],
                m = x(k, j),
                n = o(d, m),
                p = q(n, m),
                w = s(d, m),
                y = t(d, m),
                z = u(d, m),
                A = new f(p, n, w, y, z);
              a.push(A), b[p] = A
            }
            return {
              items: a,
              selectValueMap: b,
              getOptionFromViewValue: function(a) {
                return b[r(a)]
              },
              getViewValueFromOption: function(a) {
                return l ? Id.copy(a.viewValue) : a.viewValue
              }
            }
          }
        }
      }
      var g = b.createElement("option"),
        h = b.createElement("optgroup");
      return {
        restrict: "A",
        terminal: !0,
        require: ["select", "?ngModel"],
        link: function(b, c, e, i) {
          function j(a, b) {
            a.element = b, b.disabled = a.disabled, a.label !== b.label && (b.label = a.label, b.textContent = a.label), a.value !== b.value && (b.value = a.selectValue)
          }

          function k(a, b, c, d) {
            var e;
            return b && td(b.nodeName) === c ? e = b : (e = d.cloneNode(!1), b ? a.insertBefore(e, b) : a.appendChild(e)), e
          }

          function l(a) {
            for (var b; a;) b = a.nextSibling, Qa(a), a = b
          }

          function m(a) {
            var b = p && p[0],
              c = w && w[0];
            if (b || c)
              for (; a && (a === b || a === c || b && b.nodeType === Xd);) a = a.nextSibling;
            return a
          }

          function n() {
            var a = x && q.readValue();
            x = y.getOptions();
            var b = {},
              d = c[0].firstChild;
            if (v && c.prepend(p), d = m(d), x.items.forEach(function(a) {
                var e, f, i;
                a.group ? (e = b[a.group], e || (f = k(c[0], d, "optgroup", h), d = f.nextSibling, f.label = a.group, e = b[a.group] = {
                  groupElement: f,
                  currentOptionElement: f.firstChild
                }), i = k(e.groupElement, e.currentOptionElement, "option", g), j(a, i), e.currentOptionElement = i.nextSibling) : (i = k(c[0], d, "option", g), j(a, i), d = i.nextSibling)
              }), Object.keys(b).forEach(function(a) {
                l(b[a].currentOptionElement)
              }), l(d), o.$render(), !o.$isEmpty(a)) {
              var e = q.readValue();
              (y.trackBy ? Q(a, e) : a === e) || (o.$setViewValue(e), o.$render())
            }
          }
          var o = i[1];
          if (o) {
            for (var p, q = i[0], r = e.multiple, s = 0, t = c.children(), u = t.length; u > s; s++)
              if ("" === t[s].value) {
                p = t.eq(s);
                break
              }
            var v = !!p,
              w = zd(g.cloneNode(!1));
            w.val("?");
            var x, y = d(e.ngOptions, c, b),
              z = function() {
                v || c.prepend(p), c.val(""), p.prop("selected", !0), p.attr("selected", !0)
              },
              A = function() {
                v || p.remove()
              },
              B = function() {
                c.prepend(w), c.val("?"), w.prop("selected", !0), w.attr("selected", !0)
              },
              C = function() {
                w.remove()
              };
            r ? (o.$isEmpty = function(a) {
              return !a || 0 === a.length
            }, q.writeValue = function(a) {
              x.items.forEach(function(a) {
                a.element.selected = !1
              }), a && a.forEach(function(a) {
                var b = x.getOptionFromViewValue(a);
                b && !b.disabled && (b.element.selected = !0)
              })
            }, q.readValue = function() {
              var a = c.val() || [],
                b = [];
              return f(a, function(a) {
                var c = x.selectValueMap[a];
                c && !c.disabled && b.push(x.getViewValueFromOption(c))
              }), b
            }, y.trackBy && b.$watchCollection(function() {
              return Ld(o.$viewValue) ? o.$viewValue.map(function(a) {
                return y.getTrackByValue(a)
              }) : void 0
            }, function() {
              o.$render()
            })) : (q.writeValue = function(a) {
              var b = x.getOptionFromViewValue(a);
              b && !b.disabled ? c[0].value !== b.selectValue && (C(), A(), c[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || v ? (C(), z()) : (A(), B())
            }, q.readValue = function() {
              var a = x.selectValueMap[c.val()];
              return a && !a.disabled ? (A(), C(), x.getViewValueFromOption(a)) : null
            }, y.trackBy && b.$watch(function() {
              return y.getTrackByValue(o.$viewValue)
            }, function() {
              o.$render()
            })), v ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = zd(g.cloneNode(!1)), n(), b.$watchCollection(y.getWatchables, n)
          }
        }
      }
    }],
    lg = ["$locale", "$interpolate", "$log", function(a, b, c) {
      var d = /{}/g,
        e = /^when(Minus)?(.+)$/;
      return {
        link: function(g, h, i) {
          function j(a) {
            h.text(a || "")
          }
          var k, l = i.count,
            m = i.$attr.when && h.attr(i.$attr.when),
            n = i.offset || 0,
            o = g.$eval(m) || {},
            q = {},
            r = b.startSymbol(),
            s = b.endSymbol(),
            u = r + l + "-" + n + s,
            v = Id.noop;
          f(i, function(a, b) {
            var c = e.exec(b);
            if (c) {
              var d = (c[1] ? "-" : "") + td(c[2]);
              o[d] = h.attr(i.$attr[b])
            }
          }), f(o, function(a, c) {
            q[c] = b(a.replace(d, u))
          }), g.$watch(l, function(b) {
            var d = parseFloat(b),
              e = isNaN(d);
            if (e || d in o || (d = a.pluralCat(d - n)), d !== k && !(e && y(k) && isNaN(k))) {
              v();
              var f = q[d];
              t(f) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), v = p, j()) : v = g.$watch(f, j), k = d
            }
          })
        }
      }
    }],
    mg = ["$parse", "$animate", function(a, g) {
      var h = "$$NG_REMOVED",
        i = d("ngRepeat"),
        j = function(a, b, c, d, e, f, g) {
          a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
        },
        k = function(a) {
          return a.clone[0]
        },
        l = function(a) {
          return a.clone[a.clone.length - 1]
        };
      return {
        restrict: "A",
        multiElement: !0,
        transclude: "element",
        priority: 1e3,
        terminal: !0,
        $$tlb: !0,
        compile: function(d, m) {
          var n = m.ngRepeat,
            o = b.createComment(" end ngRepeat: " + n + " "),
            p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
          if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
          var q = p[1],
            r = p[2],
            s = p[3],
            t = p[4];
          if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
          var u = p[3] || p[1],
            v = p[2];
          if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
          var w, x, y, z, A = {
            $id: Wa
          };
          return t ? w = a(t) : (y = function(a, b) {
              return Wa(b)
            }, z = function(a) {
              return a
            }),
            function(a, b, d, m, p) {
              w && (x = function(b, c, d) {
                return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
              });
              var q = qa();
              a.$watchCollection(r, function(d) {
                var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0],
                  J = qa();
                if (s && (a[s] = d), e(d)) E = d, D = x || y;
                else {
                  D = x || z, E = [];
                  for (var K in d) ud.call(d, K) && "$" !== K.charAt(0) && E.push(K)
                }
                for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                  if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F;
                  else {
                    if (J[C]) throw f(G, function(a) {
                      a && a.scope && (q[a.id] = a)
                    }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                    G[m] = {
                      id: C,
                      scope: c,
                      clone: c
                    }, J[C] = !0
                  }
                for (var L in q) {
                  if (F = q[L], H = pa(F.clone), g.leave(H), H[0].parentNode)
                    for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                  F.scope.$destroy()
                }
                for (m = 0; w > m; m++)
                  if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                    t = I;
                    do t = t.nextSibling; while (t && t[h]);
                    k(F) != t && g.move(pa(F.clone), null, zd(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                  } else p(function(a, b) {
                    F.scope = b;
                    var c = o.cloneNode(!1);
                    a[a.length++] = c, g.enter(a, null, zd(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                  });
                q = J
              })
            }
        }
      }
    }],
    ng = "ng-hide",
    og = "ng-hide-animate",
    pg = ["$animate", function(a) {
      return {
        restrict: "A",
        multiElement: !0,
        link: function(b, c, d) {
          b.$watch(d.ngShow, function(b) {
            a[b ? "removeClass" : "addClass"](c, ng, {
              tempClasses: og
            })
          })
        }
      }
    }],
    qg = ["$animate", function(a) {
      return {
        restrict: "A",
        multiElement: !0,
        link: function(b, c, d) {
          b.$watch(d.ngHide, function(b) {
            a[b ? "addClass" : "removeClass"](c, ng, {
              tempClasses: og
            })
          })
        }
      }
    }],
    rg = $c(function(a, b, c) {
      a.$watch(c.ngStyle, function(a, c) {
        c && a !== c && f(c, function(a, c) {
          b.css(c, "")
        }), a && b.css(a)
      }, !0)
    }),
    sg = ["$animate", function(a) {
      return {
        require: "ngSwitch",
        controller: ["$scope", function() {
          this.cases = {}
        }],
        link: function(c, d, e, g) {
          var h = e.ngSwitch || e.on,
            i = [],
            j = [],
            k = [],
            l = [],
            m = function(a, b) {
              return function() {
                a.splice(b, 1)
              }
            };
          c.$watch(h, function(c) {
            var d, e;
            for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
            for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
              var h = pa(j[d].clone);
              l[d].$destroy();
              var n = k[d] = a.leave(h);
              n.then(m(k, d))
            }
            j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
              c.transclude(function(d, e) {
                l.push(e);
                var f = c.element;
                d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                var g = {
                  clone: d
                };
                j.push(g), a.enter(d, f.parent(), f)
              })
            })
          })
        }
      }
    }],
    tg = $c({
      transclude: "element",
      priority: 1200,
      require: "^ngSwitch",
      multiElement: !0,
      link: function(a, b, c, d, e) {
        d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
          transclude: e,
          element: b
        })
      }
    }),
    ug = $c({
      transclude: "element",
      priority: 1200,
      require: "^ngSwitch",
      multiElement: !0,
      link: function(a, b, c, d, e) {
        d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
          transclude: e,
          element: b
        })
      }
    }),
    vg = $c({
      restrict: "EAC",
      link: function(a, b, c, e, f) {
        if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", $(b));
        f(function(a) {
          b.empty(), b.append(a)
        })
      }
    }),
    wg = ["$templateCache", function(a) {
      return {
        restrict: "E",
        terminal: !0,
        compile: function(b, c) {
          if ("text/ng-template" == c.type) {
            var d = c.id,
              e = b[0].text;
            a.put(d, e)
          }
        }
      }
    }],
    xg = {
      $setViewValue: p,
      $render: p
    },
    yg = ["$element", "$scope", "$attrs", function(a, d, e) {
      var f = this,
        g = new Xa;
      f.ngModelCtrl = xg, f.unknownOption = zd(b.createElement("option")), f.renderUnknownOption = function(b) {
        var c = "? " + Wa(b) + " ?";
        f.unknownOption.val(c), a.prepend(f.unknownOption), a.val(c)
      }, d.$on("$destroy", function() {
        f.renderUnknownOption = p
      }), f.removeUnknownOption = function() {
        f.unknownOption.parent() && f.unknownOption.remove()
      }, f.readValue = function() {
        return f.removeUnknownOption(), a.val()
      }, f.writeValue = function(b) {
        f.hasOption(b) ? (f.removeUnknownOption(), a.val(b), "" === b && f.emptyOption.prop("selected", !0)) : null == b && f.emptyOption ? (f.removeUnknownOption(), a.val("")) : f.renderUnknownOption(b)
      }, f.addOption = function(a, b) {
        na(a, '"option value"'), "" === a && (f.emptyOption = b);
        var c = g.get(a) || 0;
        g.put(a, c + 1)
      }, f.removeOption = function(a) {
        var b = g.get(a);
        b && (1 === b ? (g.remove(a), "" === a && (f.emptyOption = c)) : g.put(a, b - 1))
      }, f.hasOption = function(a) {
        return !!g.get(a)
      }
    }],
    zg = function() {
      return {
        restrict: "E",
        require: ["select", "?ngModel"],
        controller: yg,
        link: function(a, b, c, d) {
          var e = d[1];
          if (e) {
            var g = d[0];
            if (g.ngModelCtrl = e, e.$render = function() {
                g.writeValue(e.$viewValue)
              }, b.on("change", function() {
                a.$apply(function() {
                  e.$setViewValue(g.readValue())
                })
              }), c.multiple) {
              g.readValue = function() {
                var a = [];
                return f(b.find("option"), function(b) {
                  b.selected && a.push(b.value)
                }), a
              }, g.writeValue = function(a) {
                var c = new Xa(a);
                f(b.find("option"), function(a) {
                  a.selected = u(c.get(a.value))
                })
              };
              var h, i = NaN;
              a.$watch(function() {
                i !== e.$viewValue || Q(h, e.$viewValue) || (h = P(e.$viewValue), e.$render()), i = e.$viewValue
              }), e.$isEmpty = function(a) {
                return !a || 0 === a.length
              }
            }
          }
        }
      }
    },
    Ag = ["$interpolate", function(a) {
      function b(a) {
        a[0].hasAttribute("selected") && (a[0].selected = !0)
      }
      return {
        restrict: "E",
        priority: 100,
        compile: function(c, d) {
          if (u(d.value)) var e = a(d.value, !0);
          else {
            var f = a(c.text(), !0);
            f || d.$set("value", c.text())
          }
          return function(a, c, d) {
            function g(a) {
              j.addOption(a, c), j.ngModelCtrl.$render(), b(c)
            }
            var h = "$selectController",
              i = c.parent(),
              j = i.data(h) || i.parent().data(h);
            if (j && j.ngModelCtrl) {
              if (e) {
                var k;
                d.$observe("value", function(a) {
                  u(k) && j.removeOption(k), k = a, g(a)
                })
              } else f ? a.$watch(f, function(a, b) {
                d.$set("value", a), b !== a && j.removeOption(b), g(a)
              }) : g(d.value);
              c.on("$destroy", function() {
                j.removeOption(d.value), j.ngModelCtrl.$render()
              })
            }
          }
        }
      }
    }],
    Bg = r({
      restrict: "E",
      terminal: !1
    }),
    Cg = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(a, b, c, d) {
          d && (c.required = !0, d.$validators.required = function(a, b) {
            return !c.required || !d.$isEmpty(b)
          }, c.$observe("required", function() {
            d.$validate()
          }))
        }
      }
    },
    Dg = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(a, b, e, f) {
          if (f) {
            var g, h = e.ngPattern || e.pattern;
            e.$observe("pattern", function(a) {
              if (x(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, $(b));
              g = a || c, f.$validate()
            }), f.$validators.pattern = function(a, b) {
              return f.$isEmpty(b) || t(g) || g.test(b)
            }
          }
        }
      }
    },
    Eg = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(a, b, c, d) {
          if (d) {
            var e = -1;
            c.$observe("maxlength", function(a) {
              var b = n(a);
              e = isNaN(b) ? -1 : b, d.$validate()
            }), d.$validators.maxlength = function(a, b) {
              return 0 > e || d.$isEmpty(b) || b.length <= e
            }
          }
        }
      }
    },
    Fg = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(a, b, c, d) {
          if (d) {
            var e = 0;
            c.$observe("minlength", function(a) {
              e = n(a) || 0, d.$validate()
            }), d.$validators.minlength = function(a, b) {
              return d.$isEmpty(b) || b.length >= e
            }
          }
        }
      }
    };
  return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ka(), ua(Id), Id.module("ngLocale", [], ["$provide", function(a) {
    function b(a) {
      a += "";
      var b = a.indexOf(".");
      return -1 == b ? 0 : a.length - b - 1
    }

    function d(a, d) {
      var e = d;
      c === e && (e = Math.min(b(a), 3));
      var f = Math.pow(10, e),
        g = (a * f | 0) % f;
      return {
        v: e,
        f: g
      }
    }
    var e = {
      ZERO: "zero",
      ONE: "one",
      TWO: "two",
      FEW: "few",
      MANY: "many",
      OTHER: "other"
    };
    a.value("$locale", {
      DATETIME_FORMATS: {
        AMPMS: ["AM", "PM"],
        DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        ERANAMES: ["Before Christ", "Anno Domini"],
        ERAS: ["BC", "AD"],
        FIRSTDAYOFWEEK: 6,
        MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        WEEKENDRANGE: [5, 6],
        fullDate: "EEEE, MMMM d, y",
        longDate: "MMMM d, y",
        medium: "MMM d, y h:mm:ss a",
        mediumDate: "MMM d, y",
        mediumTime: "h:mm:ss a",
        "short": "M/d/yy h:mm a",
        shortDate: "M/d/yy",
        shortTime: "h:mm a"
      },
      NUMBER_FORMATS: {
        CURRENCY_SYM: "$",
        DECIMAL_SEP: ".",
        GROUP_SEP: ",",
        PATTERNS: [{
          gSize: 3,
          lgSize: 3,
          maxFrac: 3,
          minFrac: 0,
          minInt: 1,
          negPre: "-",
          negSuf: "",
          posPre: "",
          posSuf: ""
        }, {
          gSize: 3,
          lgSize: 3,
          maxFrac: 2,
          minFrac: 2,
          minInt: 1,
          negPre: "-Â¤",
          negSuf: "",
          posPre: "Â¤",
          posSuf: ""
        }]
      },
      id: "en-us",
      pluralCat: function(a, b) {
        var c = 0 | a,
          f = d(a, b);
        return 1 == c && 0 == f.v ? e.ONE : e.OTHER
      }
    })
  }]), void zd(b).ready(function() {
    fa(b, ga)
  }))
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
  function(a, b, c) {
    "use strict";

    function d(a) {
      return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
    }

    function e(a, e) {
      if (!d(e)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', e);
      for (var f = e.split("."), h = 0, i = f.length; i > h && b.isDefined(a); h++) {
        var j = f[h];
        a = null !== a ? a[j] : c
      }
      return a
    }

    function f(a, c) {
      c = c || {}, b.forEach(c, function(a, b) {
        delete c[b]
      });
      for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
      return c
    }
    var g = b.$$minErr("$resource"),
      h = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
    b.module("ngResource", ["ng"]).provider("$resource", function() {
      var a = /^https?:\/\/[^\/]*/,
        d = this;
      this.defaults = {
        stripTrailingSlashes: !0,
        actions: {
          get: {
            method: "GET"
          },
          save: {
            method: "POST"
          },
          query: {
            method: "GET",
            isArray: !0
          },
          remove: {
            method: "DELETE"
          },
          "delete": {
            method: "DELETE"
          }
        }
      }, this.$get = ["$http", "$q", function(h, i) {
        function j(a) {
          return k(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function k(a, b) {
          return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
        }

        function l(a, b) {
          this.template = a, this.defaults = p({}, d.defaults, b), this.urlParams = {}
        }

        function m(a, j, k, s) {
          function t(a, b) {
            var c = {};
            return b = p({}, j, b), o(b, function(b, d) {
              r(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
            }), c
          }

          function u(a) {
            return a.resource
          }

          function v(a) {
            f(a || {}, this)
          }
          var w = new l(a, s);
          return k = p({}, d.defaults.actions, k), v.prototype.toJSON = function() {
            var a = p({}, this);
            return delete a.$promise, delete a.$resolved, a
          }, o(k, function(a, d) {
            var e = /^(POST|PUT|PATCH)$/i.test(a.method);
            v[d] = function(j, k, l, m) {
              var s, x, y, z = {};
              switch (arguments.length) {
                case 4:
                  y = m, x = l;
                case 3:
                case 2:
                  if (!r(k)) {
                    z = j, s = k, x = l;
                    break
                  }
                  if (r(j)) {
                    x = j, y = k;
                    break
                  }
                  x = k, y = l;
                case 1:
                  r(j) ? x = j : e ? s = j : z = j;
                  break;
                case 0:
                  break;
                default:
                  throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
              }
              var A = this instanceof v,
                B = A ? s : a.isArray ? [] : new v(s),
                C = {},
                D = a.interceptor && a.interceptor.response || u,
                E = a.interceptor && a.interceptor.responseError || c;
              o(a, function(a, b) {
                "params" != b && "isArray" != b && "interceptor" != b && (C[b] = q(a))
              }), e && (C.data = s), w.setUrlParams(C, p({}, t(s, a.params || {}), z), a.url);
              var F = h(C).then(function(c) {
                var e = c.data,
                  h = B.$promise;
                if (e) {
                  if (b.isArray(e) !== !!a.isArray) throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", d, a.isArray ? "array" : "object", b.isArray(e) ? "array" : "object", C.method, C.url);
                  a.isArray ? (B.length = 0, o(e, function(a) {
                    "object" == typeof a ? B.push(new v(a)) : B.push(a)
                  })) : (f(e, B), B.$promise = h)
                }
                return B.$resolved = !0, c.resource = B, c
              }, function(a) {
                return B.$resolved = !0, (y || n)(a), i.reject(a)
              });
              return F = F.then(function(a) {
                var b = D(a);
                return (x || n)(b, a.headers), b
              }, E), A ? F : (B.$promise = F, B.$resolved = !1, B)
            }, v.prototype["$" + d] = function(a, b, c) {
              r(a) && (c = b, b = a, a = {});
              var e = v[d].call(this, a, this, b, c);
              return e.$promise || e
            }
          }), v.bind = function(b) {
            return m(a, p({}, j, b), k)
          }, v
        }
        var n = b.noop,
          o = b.forEach,
          p = b.extend,
          q = b.copy,
          r = b.isFunction;
        return l.prototype = {
          setUrlParams: function(c, d, e) {
            var f, h, i = this,
              k = e || i.template,
              l = "",
              m = i.urlParams = {};
            o(k.split(/\W/), function(a) {
              if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
              !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(k) && (m[a] = !0)
            }), k = k.replace(/\\:/g, ":"), k = k.replace(a, function(a) {
              return l = a, ""
            }), d = d || {}, o(i.urlParams, function(a, c) {
              f = d.hasOwnProperty(c) ? d[c] : i.defaults[c], b.isDefined(f) && null !== f ? (h = j(f), k = k.replace(new RegExp(":" + c + "(\\W|$)", "g"), function(a, b) {
                return h + b
              })) : k = k.replace(new RegExp("(/?):" + c + "(\\W|$)", "g"), function(a, b, c) {
                return "/" == c.charAt(0) ? c : b + c
              })
            }), i.defaults.stripTrailingSlashes && (k = k.replace(/\/+$/, "") || "/"), k = k.replace(/\/\.(?=\w+($|\?))/, "."), c.url = l + k.replace(/\/\\\./, "/."), o(d, function(a, b) {
              i.urlParams[b] || (c.params = c.params || {}, c.params[b] = a)
            })
          }
        }, m
      }]
    })
  }(window, window.angular),
  function(a, b, c) {
    "use strict";

    function d(a, c, d) {
      function e(a, d, e) {
        var g, h;
        e = e || {}, h = e.expires, g = b.isDefined(e.path) ? e.path : f, b.isUndefined(d) && (h = "Thu, 01 Jan 1970 00:00:00 GMT", d = ""), b.isString(h) && (h = new Date(h));
        var i = encodeURIComponent(a) + "=" + encodeURIComponent(d);
        i += g ? ";path=" + g : "", i += e.domain ? ";domain=" + e.domain : "", i += h ? ";expires=" + h.toUTCString() : "", i += e.secure ? ";secure" : "";
        var j = i.length + 1;
        return j > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + j + " > 4096 bytes)!"), i
      }
      var f = d.baseHref(),
        g = a[0];
      return function(a, b, c) {
        g.cookie = e(a, b, c)
      }
    }
    b.module("ngCookies", ["ng"]).provider("$cookies", [function() {
      function a(a) {
        return a ? b.extend({}, d, a) : d
      }
      var d = this.defaults = {};
      this.$get = ["$$cookieReader", "$$cookieWriter", function(d, e) {
        return {
          get: function(a) {
            return d()[a]
          },
          getObject: function(a) {
            var c = this.get(a);
            return c ? b.fromJson(c) : c
          },
          getAll: function() {
            return d()
          },
          put: function(b, c, d) {
            e(b, c, a(d))
          },
          putObject: function(a, c, d) {
            this.put(a, b.toJson(c), d)
          },
          remove: function(b, d) {
            e(b, c, a(d))
          }
        }
      }]
    }]), b.module("ngCookies").factory("$cookieStore", ["$cookies", function(a) {
      return {
        get: function(b) {
          return a.getObject(b)
        },
        put: function(b, c) {
          a.putObject(b, c)
        },
        remove: function(b) {
          a.remove(b)
        }
      }
    }]), d.$inject = ["$document", "$log", "$browser"], b.module("ngCookies").provider("$$cookieWriter", function() {
      this.$get = d
    })
  }(window, window.angular),
  function(a, b, c) {
    "use strict";

    function d() {
      this.$get = ["$$sanitizeUri", function(a) {
        return function(b) {
          var c = [];
          return g(b, j(c, function(b, c) {
            return !/^unsafe/.test(a(b, c))
          })), c.join("")
        }
      }]
    }

    function e(a) {
      var c = [],
        d = j(c, b.noop);
      return d.chars(a), c.join("")
    }

    function f(a, c) {
      var d, e = {},
        f = a.split(",");
      for (d = 0; d < f.length; d++) e[c ? b.lowercase(f[d]) : f[d]] = !0;
      return e
    }

    function g(a, c) {
      function d(a, d, f, g) {
        if (d = b.lowercase(d), z[d])
          for (; t.last() && A[t.last()];) e("", t.last());
        y[d] && t.last() == d && e("", d), g = v[d] || !!g, g || t.push(d);
        var i = {};
        f.replace(n, function(a, b, c, d, e) {
          var f = c || d || e || "";
          i[b] = h(f)
        }), c.start && c.start(d, i, g)
      }

      function e(a, d) {
        var e, f = 0;
        if (d = b.lowercase(d))
          for (f = t.length - 1; f >= 0 && t[f] != d; f--);
        if (f >= 0) {
          for (e = t.length - 1; e >= f; e--) c.end && c.end(t[e]);
          t.length = f
        }
      }
      "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a);
      var f, g, i, j, t = [],
        u = a;
      for (t.last = function() {
          return t[t.length - 1]
        }; a;) {
        if (j = "", g = !0, t.last() && C[t.last()] ? (a = a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function(a, b) {
            return b = b.replace(q, "$1").replace(s, "$1"), c.chars && c.chars(h(b)), ""
          }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g = !1)) : r.test(a) ? (i = a.match(r), i && (a = a.replace(i[0], ""), g = !1)) : p.test(a) ? (i = a.match(m), i && (a = a.substring(i[0].length), i[0].replace(m, e), g = !1)) : o.test(a) && (i = a.match(l), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(l, d)), g = !1) : (j += "<", a = a.substring(1))), g && (f = a.indexOf("<"), j += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(h(j)))), a == u) throw k("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
        u = a
      }
      e()
    }

    function h(a) {
      return a ? (I.innerHTML = a.replace(/</g, "&lt;"), I.textContent) : ""
    }

    function i(a) {
      return a.replace(/&/g, "&amp;").replace(t, function(a) {
        var b = a.charCodeAt(0),
          c = a.charCodeAt(1);
        return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
      }).replace(u, function(a) {
        return "&#" + a.charCodeAt(0) + ";"
      }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function j(a, c) {
      var d = !1,
        e = b.bind(a, a.push);
      return {
        start: function(a, f, g) {
          a = b.lowercase(a), !d && C[a] && (d = a), d || D[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) {
            var g = b.lowercase(f),
              h = "img" === a && "src" === g || "background" === g;
            H[g] !== !0 || E[g] === !0 && !c(d, h) || (e(" "), e(f), e('="'), e(i(d)), e('"'))
          }), e(g ? "/>" : ">"))
        },
        end: function(a) {
          a = b.lowercase(a), d || D[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
        },
        chars: function(a) {
          d || e(i(a))
        }
      }
    }
    var k = b.$$minErr("$sanitize"),
      l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
      m = /^<\/\s*([\w:-]+)[^>]*>/,
      n = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
      o = /^</,
      p = /^<\//,
      q = /<!--(.*?)-->/g,
      r = /<!DOCTYPE([^>]*?)>/i,
      s = /<!\[CDATA\[(.*?)]]>/g,
      t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      u = /([^\#-~| |!])/g,
      v = f("area,br,col,hr,img,wbr"),
      w = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      x = f("rp,rt"),
      y = b.extend({}, x, w),
      z = b.extend({}, w, f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
      A = b.extend({}, x, f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
      B = f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),
      C = f("script,style"),
      D = b.extend({}, v, z, A, y, B),
      E = f("background,cite,href,longdesc,src,usemap,xlink:href"),
      F = f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
      G = f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
      H = b.extend({}, E, G, F),
      I = document.createElement("pre");
    b.module("ngSanitize", []).provider("$sanitize", d), b.module("ngSanitize").filter("linky", ["$sanitize", function(a) {
      var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
        d = /^mailto:/i;
      return function(f, g) {
        function h(a) {
          a && n.push(e(a))
        }

        function i(a, c) {
          n.push("<a "), b.isDefined(g) && n.push('target="', g, '" '), n.push('href="', a.replace(/"/g, "&quot;"), '">'), h(c), n.push("</a>")
        }
        if (!f) return f;
        for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] || j[4] || (k = (j[3] ? "http://" : "mailto:") + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(d, "")), m = m.substring(l + j[0].length);
        return h(m), a(n.join(""))
      }
    }])
  }(window, window.angular),
  function(a, b, c) {
    "use strict";

    function d() {
      function a(a, c) {
        return b.extend(Object.create(a), c)
      }

      function c(a, b) {
        var c = b.caseInsensitiveMatch,
          d = {
            originalPath: a,
            regexp: a
          },
          e = d.keys = [];
        return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
          var f = "?" === d ? d : null,
            g = "*" === d ? d : null;
          return e.push({
            name: c,
            optional: !!f
          }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
        }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
      }
      var d = {};
      this.when = function(a, e) {
        var f = b.copy(e);
        if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
          var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
          d[g] = b.extend({
            redirectTo: a
          }, c(g, f))
        }
        return this
      }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
        return "string" == typeof a && (a = {
          redirectTo: a
        }), this.when(null, a), this
      }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(c, e, f, g, h, j, k) {
        function l(a, b) {
          var c = b.keys,
            d = {};
          if (!b.regexp) return null;
          var e = b.regexp.exec(a);
          if (!e) return null;
          for (var f = 1, g = e.length; g > f; ++f) {
            var h = c[f - 1],
              i = e[f];
            h && i && (d[h.name] = i)
          }
          return d
        }

        function m(a) {
          var d = t.current;
          q = o(), r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s, r || !d && !q || c.$broadcast("$routeChangeStart", q, d).defaultPrevented && a && a.preventDefault()
        }

        function n() {
          var a = t.current,
            d = q;
          r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (d || a) && (s = !1, t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), g.when(d).then(function() {
            if (d) {
              var a, c, e = b.extend({}, d.resolve);
              return b.forEach(e, function(a, c) {
                e[c] = b.isString(a) ? h.get(a) : h.invoke(a, null, null, c)
              }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), b.isDefined(c) && (d.loadedTemplateUrl = k.valueOf(c), a = j(c))), b.isDefined(a) && (e.$template = a), g.all(e)
            }
          }).then(function(e) {
            d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast("$routeChangeSuccess", d, a))
          }, function(b) {
            d == t.current && c.$broadcast("$routeChangeError", d, a, b)
          }))
        }

        function o() {
          var c, f;
          return b.forEach(d, function(d, g) {
            !f && (c = l(e.path(), d)) && (f = a(d, {
              params: b.extend({}, e.search(), c),
              pathParams: c
            }), f.$$route = d)
          }), f || d[null] && a(d[null], {
            params: {},
            pathParams: {}
          })
        }

        function p(a, c) {
          var d = [];
          return b.forEach((a || "").split(":"), function(a, b) {
            if (0 === b) d.push(a);
            else {
              var e = a.match(/(\w+)(?:[?*])?(.*)/),
                f = e[1];
              d.push(c[f]), d.push(e[2] || ""), delete c[f]
            }
          }), d.join("")
        }
        var q, r, s = !1,
          t = {
            routes: d,
            reload: function() {
              s = !0, c.$evalAsync(function() {
                m(), n()
              })
            },
            updateParams: function(a) {
              if (!this.current || !this.current.$$route) throw i("norout", "Tried updating route when with no current route");
              a = b.extend({}, this.current.params, a), e.path(p(this.current.$$route.originalPath, a)), e.search(a)
            }
          };
        return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), t
      }]
    }

    function e() {
      this.$get = function() {
        return {}
      }
    }

    function f(a, c, d) {
      return {
        restrict: "ECA",
        terminal: !0,
        priority: 400,
        transclude: "element",
        link: function(e, f, g, h, i) {
          function j() {
            n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function() {
              n = null
            }), m = null)
          }

          function k() {
            var g = a.current && a.current.locals,
              h = g && g.$template;
            if (b.isDefined(h)) {
              var k = e.$new(),
                n = a.current,
                q = i(k, function(a) {
                  d.enter(a, null, m || f).then(function() {
                    !b.isDefined(o) || o && !e.$eval(o) || c()
                  }), j()
                });
              m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
            } else j()
          }
          var l, m, n, o = g.autoscroll,
            p = g.onload || "";
          e.$on("$routeChangeSuccess", k), k()
        }
      }
    }

    function g(a, b, c) {
      return {
        restrict: "ECA",
        priority: -400,
        link: function(d, e) {
          var f = c.current,
            g = f.locals;
          e.html(g.$template);
          var h = a(e.contents());
          if (f.controller) {
            g.$scope = d;
            var i = b(f.controller, g);
            f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
          }
          h(d)
        }
      }
    }
    var h = b.module("ngRoute", ["ng"]).provider("$route", d),
      i = b.$$minErr("ngRoute");
    h.provider("$routeParams", e), h.directive("ngView", f), h.directive("ngView", g), f.$inject = ["$route", "$anchorScroll", "$animate"], g.$inject = ["$compile", "$controller", "$route"]
  }(window, window.angular), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]),
  angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(a, b, c) {
    function d(a) {
      for (var b in a)
        if (void 0 !== f.style[b]) return a[b]
    }
    var e = function(d, f, g) {
        g = g || {};
        var h = a.defer(),
          i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
          j = function(a) {
            c.$apply(function() {
              d.unbind(i, j), h.resolve(d)
            })
          };
        return i && d.bind(i, j), b(function() {
          angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
        }), h.promise.cancel = function() {
          i && d.unbind(i, j), h.reject("Transition cancelled")
        }, h.promise
      },
      f = document.createElement("trans"),
      g = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      },
      h = {
        WebkitTransition: "webkitAnimationEnd",
        MozTransition: "animationend",
        OTransition: "oAnimationEnd",
        transition: "animationend"
      };
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
  }]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(a) {
    return {
      link: function(b, c, d) {
        function e(b) {
          function d() {
            j === e && (j = void 0)
          }
          var e = a(c, b);
          return j && j.cancel(), j = e, e.then(d, d), e
        }

        function f() {
          k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
            height: c[0].scrollHeight + "px"
          }).then(g))
        }

        function g() {
          c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
            height: "auto"
          })
        }

        function h() {
          if (k) k = !1, i(), c.css({
            height: 0
          });
          else {
            c.css({
              height: c[0].scrollHeight + "px"
            });
            c[0].offsetWidth;
            c.removeClass("collapse in").addClass("collapsing"), e({
              height: 0
            }).then(i)
          }
        }

        function i() {
          c.removeClass("collapsing"), c.addClass("collapse")
        }
        var j, k = !0;
        b.$watch(d.collapse, function(a) {
          a ? h() : f()
        })
      }
    }
  }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
  }).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
    this.groups = [], this.closeOthers = function(d) {
      var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
      e && angular.forEach(this.groups, function(a) {
        a !== d && (a.isOpen = !1)
      })
    }, this.addGroup = function(a) {
      var b = this;
      this.groups.push(a), a.$on("$destroy", function(c) {
        b.removeGroup(a)
      })
    }, this.removeGroup = function(a) {
      var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
    }
  }]).directive("accordion", function() {
    return {
      restrict: "EA",
      controller: "AccordionController",
      transclude: !0,
      replace: !1,
      templateUrl: "template/accordion/accordion.html"
    }
  }).directive("accordionGroup", function() {
    return {
      require: "^accordion",
      restrict: "EA",
      transclude: !0,
      replace: !0,
      templateUrl: "template/accordion/accordion-group.html",
      scope: {
        heading: "@",
        isOpen: "=?",
        isDisabled: "=?"
      },
      controller: function() {
        this.setHeading = function(a) {
          this.heading = a
        }
      },
      link: function(a, b, c, d) {
        d.addGroup(a), a.$watch("isOpen", function(b) {
          b && d.closeOthers(a)
        }), a.toggleOpen = function() {
          a.isDisabled || (a.isOpen = !a.isOpen)
        }
      }
    }
  }).directive("accordionHeading", function() {
    return {
      restrict: "EA",
      transclude: !0,
      template: "",
      replace: !0,
      require: "^accordionGroup",
      link: function(a, b, c, d, e) {
        d.setHeading(e(a, function() {}))
      }
    }
  }).directive("accordionTransclude", function() {
    return {
      require: "^accordionGroup",
      link: function(a, b, c, d) {
        a.$watch(function() {
          return d[c.accordionTransclude]
        }, function(a) {
          a && (b.html(""), b.append(a))
        })
      }
    }
  }), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(a, b) {
    a.closeable = "close" in b
  }]).directive("alert", function() {
    return {
      restrict: "EA",
      controller: "AlertController",
      templateUrl: "template/alert/alert.html",
      transclude: !0,
      replace: !0,
      scope: {
        type: "@",
        close: "&"
      }
    }
  }), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
      b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
        b.html(a || "")
      })
    }
  }), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
  }).controller("ButtonsController", ["buttonConfig", function(a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
  }]).directive("btnRadio", function() {
    return {
      require: ["btnRadio", "ngModel"],
      controller: "ButtonsController",
      link: function(a, b, c, d) {
        var e = d[0],
          f = d[1];
        f.$render = function() {
          b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
        }, b.bind(e.toggleEvent, function() {
          var d = b.hasClass(e.activeClass);
          (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
            f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
          })
        })
      }
    }
  }).directive("btnCheckbox", function() {
    return {
      require: ["btnCheckbox", "ngModel"],
      controller: "ButtonsController",
      link: function(a, b, c, d) {
        function e() {
          return g(c.btnCheckboxTrue, !0)
        }

        function f() {
          return g(c.btnCheckboxFalse, !1)
        }

        function g(b, c) {
          var d = a.$eval(b);
          return angular.isDefined(d) ? d : c
        }
        var h = d[0],
          i = d[1];
        i.$render = function() {
          b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
        }, b.bind(h.toggleEvent, function() {
          a.$apply(function() {
            i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
          })
        })
      }
    }
  }), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", function(a, b, c) {
    function d() {
      e();
      var c = +a.interval;
      !isNaN(c) && c >= 0 && (g = b(f, c))
    }

    function e() {
      g && (b.cancel(g), g = null)
    }

    function f() {
      h ? (a.next(), d()) : a.pause()
    }
    var g, h, i = this,
      j = i.slides = a.slides = [],
      k = -1;
    i.currentSlide = null;
    var l = !1;
    i.select = a.select = function(e, f) {
      function g() {
        if (!l) {
          if (i.currentSlide && angular.isString(f) && !a.noTransition && e.$element) {
            e.$element.addClass(f);
            e.$element[0].offsetWidth;
            angular.forEach(j, function(a) {
                angular.extend(a, {
                  direction: "",
                  entering: !1,
                  leaving: !1,
                  active: !1
                })
              }), angular.extend(e, {
                direction: f,
                active: !0,
                entering: !0
              }), angular.extend(i.currentSlide || {}, {
                direction: f,
                leaving: !0
              }), a.$currentTransition = c(e.$element, {}),
              function(b, c) {
                a.$currentTransition.then(function() {
                  h(b, c)
                }, function() {
                  h(b, c)
                })
              }(e, i.currentSlide)
          } else h(e, i.currentSlide);
          i.currentSlide = e, k = m, d()
        }
      }

      function h(b, c) {
        angular.extend(b, {
          direction: "",
          active: !0,
          leaving: !1,
          entering: !1
        }), angular.extend(c || {}, {
          direction: "",
          active: !1,
          leaving: !1,
          entering: !1
        }), a.$currentTransition = null
      }
      var m = j.indexOf(e);
      void 0 === f && (f = m > k ? "next" : "prev"), e && e !== i.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
    }, a.$on("$destroy", function() {
      l = !0
    }), i.indexOfSlide = function(a) {
      return j.indexOf(a)
    }, a.next = function() {
      var b = (k + 1) % j.length;
      return a.$currentTransition ? void 0 : i.select(j[b], "next")
    }, a.prev = function() {
      var b = 0 > k - 1 ? j.length - 1 : k - 1;
      return a.$currentTransition ? void 0 : i.select(j[b], "prev")
    }, a.isActive = function(a) {
      return i.currentSlide === a
    }, a.$watch("interval", d), a.$on("$destroy", e), a.play = function() {
      h || (h = !0, d())
    }, a.pause = function() {
      a.noPause || (h = !1, e())
    }, i.addSlide = function(b, c) {
      b.$element = c, j.push(b), 1 === j.length || b.active ? (i.select(j[j.length - 1]), 1 == j.length && a.play()) : b.active = !1
    }, i.removeSlide = function(a) {
      var b = j.indexOf(a);
      j.splice(b, 1), j.length > 0 && a.active ? b >= j.length ? i.select(j[b - 1]) : i.select(j[b]) : k > b && k--
    }
  }]).directive("carousel", [function() {
    return {
      restrict: "EA",
      transclude: !0,
      replace: !0,
      controller: "CarouselController",
      require: "carousel",
      templateUrl: "template/carousel/carousel.html",
      scope: {
        interval: "=",
        noTransition: "=",
        noPause: "="
      }
    }
  }]).directive("slide", function() {
    return {
      require: "^carousel",
      restrict: "EA",
      transclude: !0,
      replace: !0,
      templateUrl: "template/carousel/slide.html",
      scope: {
        active: "=?"
      },
      link: function(a, b, c, d) {
        d.addSlide(a, b), a.$on("$destroy", function() {
          d.removeSlide(a)
        }), a.$watch("active", function(b) {
          b && d.select(a)
        })
      }
    }
  }), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(a, b) {
    function c(a) {
      var c = [],
        d = a.split("");
      return angular.forEach(e, function(b, e) {
        var f = a.indexOf(e);
        if (f > -1) {
          a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
          for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
          a = a.join(""), c.push({
            index: f,
            apply: b.apply
          })
        }
      }), {
        regex: new RegExp("^" + d.join("") + "$"),
        map: b(c, "index")
      }
    }

    function d(a, b, c) {
      return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
    }
    this.parsers = {};
    var e = {
      yyyy: {
        regex: "\\d{4}",
        apply: function(a) {
          this.year = +a
        }
      },
      yy: {
        regex: "\\d{2}",
        apply: function(a) {
          this.year = +a + 2e3
        }
      },
      y: {
        regex: "\\d{1,4}",
        apply: function(a) {
          this.year = +a
        }
      },
      MMMM: {
        regex: a.DATETIME_FORMATS.MONTH.join("|"),
        apply: function(b) {
          this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
        }
      },
      MMM: {
        regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
        apply: function(b) {
          this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
        }
      },
      MM: {
        regex: "0[1-9]|1[0-2]",
        apply: function(a) {
          this.month = a - 1
        }
      },
      M: {
        regex: "[1-9]|1[0-2]",
        apply: function(a) {
          this.month = a - 1
        }
      },
      dd: {
        regex: "[0-2][0-9]{1}|3[0-1]{1}",
        apply: function(a) {
          this.date = +a
        }
      },
      d: {
        regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
        apply: function(a) {
          this.date = +a
        }
      },
      EEEE: {
        regex: a.DATETIME_FORMATS.DAY.join("|")
      },
      EEE: {
        regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
      }
    };
    this.parse = function(b, e) {
      if (!angular.isString(b) || !e) return b;
      e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
      var f = this.parsers[e],
        g = f.regex,
        h = f.map,
        i = b.match(g);
      if (i && i.length) {
        for (var j, k = {
            year: 1900,
            month: 0,
            date: 1,
            hours: 0
          }, l = 1, m = i.length; m > l; l++) {
          var n = h[l - 1];
          n.apply && n.apply.call(k, i[l])
        }
        return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
      }
    }
  }]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
    function c(a, c) {
      return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
    }

    function d(a) {
      return "static" === (c(a, "position") || "static")
    }
    var e = function(b) {
      for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
      return e || c
    };
    return {
      position: function(b) {
        var c = this.offset(b),
          d = {
            top: 0,
            left: 0
          },
          f = e(b[0]);
        f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
        var g = b[0].getBoundingClientRect();
        return {
          width: g.width || b.prop("offsetWidth"),
          height: g.height || b.prop("offsetHeight"),
          top: c.top - d.top,
          left: c.left - d.left
        }
      },
      offset: function(c) {
        var d = c[0].getBoundingClientRect();
        return {
          width: d.width || c.prop("offsetWidth"),
          height: d.height || c.prop("offsetHeight"),
          top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
          left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
        }
      },
      positionElements: function(a, b, c, d) {
        var e, f, g, h, i = c.split("-"),
          j = i[0],
          k = i[1] || "center";
        e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
        var l = {
            center: function() {
              return e.left + e.width / 2 - f / 2
            },
            left: function() {
              return e.left
            },
            right: function() {
              return e.left + e.width
            }
          },
          m = {
            center: function() {
              return e.top + e.height / 2 - g / 2
            },
            top: function() {
              return e.top
            },
            bottom: function() {
              return e.top + e.height
            }
          };
        switch (j) {
          case "right":
            h = {
              top: m[k](),
              left: l[j]()
            };
            break;
          case "left":
            h = {
              top: m[k](),
              left: e.left - f
            };
            break;
          case "bottom":
            h = {
              top: m[j](),
              left: l[k]()
            };
            break;
          default:
            h = {
              top: e.top - g,
              left: l[k]()
            }
        }
        return h
      }
    }
  }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
  }).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(a, b, c, d, e, f, g, h) {
    var i = this,
      j = {
        $setViewValue: angular.noop
      };
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function(c, e) {
      i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
    }), angular.forEach(["minDate", "maxDate"], function(d) {
      b[d] ? a.$parent.$watch(c(b[d]), function(a) {
        i[d] = a ? new Date(a) : null, i.refreshView()
      }) : i[d] = h[d] ? new Date(h[d]) : null
    }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function(b) {
      return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
    }, this.init = function(a) {
      j = a, j.$render = function() {
        i.render()
      }
    }, this.render = function() {
      if (j.$modelValue) {
        var a = new Date(j.$modelValue),
          b = !isNaN(a);
        b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
      }
      this.refreshView()
    }, this.refreshView = function() {
      if (this.element) {
        this._refreshView();
        var a = j.$modelValue ? new Date(j.$modelValue) : null;
        j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
      }
    }, this.createDateObject = function(a, b) {
      var c = j.$modelValue ? new Date(j.$modelValue) : null;
      return {
        date: a,
        label: g(a, b),
        selected: c && 0 === this.compare(a, c),
        disabled: this.isDisabled(a),
        current: 0 === this.compare(a, new Date)
      }
    }, this.isDisabled = function(c) {
      return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
        date: c,
        mode: a.datepickerMode
      })
    }, this.split = function(a, b) {
      for (var c = []; a.length > 0;) c.push(a.splice(0, b));
      return c
    }, a.select = function(b) {
      if (a.datepickerMode === i.minMode) {
        var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
        c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
      } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
    }, a.move = function(a) {
      var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
        c = i.activeDate.getMonth() + a * (i.step.months || 0);
      i.activeDate.setFullYear(b, c, 1), i.refreshView()
    }, a.toggleMode = function(b) {
      b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
    }, a.keys = {
      13: "enter",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down"
    };
    var k = function() {
      e(function() {
        i.element[0].focus()
      }, 0, !1)
    };
    a.$on("datepicker.focus", k), a.keydown = function(b) {
      var c = a.keys[b.which];
      if (c && !b.shiftKey && !b.altKey)
        if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
          if (i.isDisabled(i.activeDate)) return;
          a.select(i.activeDate), k()
        } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
    }
  }]).directive("datepicker", function() {
    return {
      restrict: "EA",
      replace: !0,
      templateUrl: "template/datepicker/datepicker.html",
      scope: {
        datepickerMode: "=?",
        dateDisabled: "&"
      },
      require: ["datepicker", "?^ngModel"],
      controller: "DatepickerController",
      link: function(a, b, c, d) {
        var e = d[0],
          f = d[1];
        f && e.init(f)
      }
    }
  }).directive("daypicker", ["dateFilter", function(a) {
    return {
      restrict: "EA",
      replace: !0,
      templateUrl: "template/datepicker/day.html",
      require: "^datepicker",
      link: function(b, c, d, e) {
        function f(a, b) {
          return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
        }

        function g(a, b) {
          var c = new Array(b),
            d = new Date(a),
            e = 0;
          for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
          return c
        }

        function h(a) {
          var b = new Date(a);
          b.setDate(b.getDate() + 4 - (b.getDay() || 7));
          var c = b.getTime();
          return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
        }
        b.showWeeks = e.showWeeks, e.step = {
          months: 1
        }, e.element = c;
        var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        e._refreshView = function() {
          var c = e.activeDate.getFullYear(),
            d = e.activeDate.getMonth(),
            f = new Date(c, d, 1),
            i = e.startingDay - f.getDay(),
            j = i > 0 ? 7 - i : -i,
            k = new Date(f);
          j > 0 && k.setDate(-j + 1);
          for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
            secondary: l[m].getMonth() !== d,
            uid: b.uniqueId + "-" + m
          });
          b.labels = new Array(7);
          for (var n = 0; 7 > n; n++) b.labels[n] = {
            abbr: a(l[n].date, e.formatDayHeader),
            full: a(l[n].date, "EEEE")
          };
          if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
            b.weekNumbers = [];
            for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
          }
        }, e.compare = function(a, b) {
          return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
        }, e.handleKeyDown = function(a, b) {
          var c = e.activeDate.getDate();
          if ("left" === a) c -= 1;
          else if ("up" === a) c -= 7;
          else if ("right" === a) c += 1;
          else if ("down" === a) c += 7;
          else if ("pageup" === a || "pagedown" === a) {
            var d = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
            e.activeDate.setMonth(d, 1), c = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), c)
          } else "home" === a ? c = 1 : "end" === a && (c = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
          e.activeDate.setDate(c)
        }, e.refreshView()
      }
    }
  }]).directive("monthpicker", ["dateFilter", function(a) {
    return {
      restrict: "EA",
      replace: !0,
      templateUrl: "template/datepicker/month.html",
      require: "^datepicker",
      link: function(b, c, d, e) {
        e.step = {
          years: 1
        }, e.element = c, e._refreshView = function() {
          for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
            uid: b.uniqueId + "-" + f
          });
          b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
        }, e.compare = function(a, b) {
          return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
        }, e.handleKeyDown = function(a, b) {
          var c = e.activeDate.getMonth();
          if ("left" === a) c -= 1;
          else if ("up" === a) c -= 3;
          else if ("right" === a) c += 1;
          else if ("down" === a) c += 3;
          else if ("pageup" === a || "pagedown" === a) {
            var d = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
            e.activeDate.setFullYear(d)
          } else "home" === a ? c = 0 : "end" === a && (c = 11);
          e.activeDate.setMonth(c)
        }, e.refreshView()
      }
    }
  }]).directive("yearpicker", ["dateFilter", function(a) {
    return {
      restrict: "EA",
      replace: !0,
      templateUrl: "template/datepicker/year.html",
      require: "^datepicker",
      link: function(a, b, c, d) {
        function e(a) {
          return parseInt((a - 1) / f, 10) * f + 1
        }
        var f = d.yearRange;
        d.step = {
          years: f
        }, d.element = b, d._refreshView = function() {
          for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
            uid: a.uniqueId + "-" + c
          });
          a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
        }, d.compare = function(a, b) {
          return a.getFullYear() - b.getFullYear()
        }, d.handleKeyDown = function(a, b) {
          var c = d.activeDate.getFullYear();
          "left" === a ? c -= 1 : "up" === a ? c -= 5 : "right" === a ? c += 1 : "down" === a ? c += 5 : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? c = e(d.activeDate.getFullYear()) : "end" === a && (c = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(c)
        }, d.refreshView()
      }
    }
  }]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
  }).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(a, b, c, d, e, f, g) {
    return {
      restrict: "EA",
      require: "ngModel",
      scope: {
        isOpen: "=?",
        currentText: "@",
        clearText: "@",
        closeText: "@",
        dateDisabled: "&"
      },
      link: function(h, i, j, k) {
        function l(a) {
          return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
          })
        }

        function m(a) {
          if (a) {
            if (angular.isDate(a) && !isNaN(a)) return k.$setValidity("date", !0), a;
            if (angular.isString(a)) {
              var b = f.parse(a, n) || new Date(a);
              return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
            }
            return void k.$setValidity("date", !1)
          }
          return k.$setValidity("date", !0), null
        }
        var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
          p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
        h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
          return h[a + "Text"] || g[a + "Text"]
        }, j.$observe("datepickerPopup", function(a) {
          n = a || g.datepickerPopup, k.$render()
        });
        var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
        q.attr({
          "ng-model": "date",
          "ng-change": "dateSelection()"
        });
        var r = angular.element(q.children()[0]);
        j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function(a, b) {
          r.attr(l(b), a)
        }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function(a) {
          if (j[a]) {
            var c = b(j[a]);
            if (h.$parent.$watch(c, function(b) {
                h.watchData[a] = b
              }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
              var d = c.assign;
              h.$watch("watchData." + a, function(a, b) {
                a !== b && d(h.$parent, a)
              })
            }
          }
        }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function(a) {
          angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
        }, i.bind("input change keyup", function() {
          h.$apply(function() {
            h.date = k.$modelValue
          })
        }), k.$render = function() {
          var a = k.$viewValue ? e(k.$viewValue, n) : "";
          i.val(a), h.date = m(k.$modelValue)
        };
        var s = function(a) {
            h.isOpen && a.target !== i[0] && h.$apply(function() {
              h.isOpen = !1
            })
          },
          t = function(a, b) {
            h.keydown(a)
          };
        i.bind("keydown", t), h.keydown = function(a) {
          27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
        }, h.$watch("isOpen", function(a) {
          a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
        }), h.select = function(a) {
          if ("today" === a) {
            var b = new Date;
            angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
          }
          h.dateSelection(a)
        }, h.close = function() {
          h.isOpen = !1, i[0].focus()
        };
        var u = a(q)(h);
        q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function() {
          u.remove(), i.unbind("keydown", t), c.unbind("click", s)
        })
      }
    }
  }]).directive("datepickerPopupWrap", function() {
    return {
      restrict: "EA",
      replace: !0,
      transclude: !0,
      templateUrl: "template/datepicker/popup.html",
      link: function(a, b, c) {
        b.bind("click", function(a) {
          a.preventDefault(), a.stopPropagation()
        })
      }
    }
  }), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
    openClass: "open"
  }).service("dropdownService", ["$document", function(a) {
    var b = null;
    this.open = function(e) {
      b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
    }, this.close = function(e) {
      b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
    };
    var c = function(a) {
        var c = b.getToggleElement();
        a && c && c[0].contains(a.target) || b.$apply(function() {
          b.isOpen = !1
        })
      },
      d = function(a) {
        27 === a.which && (b.focusToggleElement(), c())
      }
  }]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function(a, b, c, d, e, f) {
    var g, h = this,
      i = a.$new(),
      j = d.openClass,
      k = angular.noop,
      l = b.onToggle ? c(b.onToggle) : angular.noop;
    this.init = function(d) {
      h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function(a) {
        i.isOpen = !!a
      }))
    }, this.toggle = function(a) {
      return i.isOpen = arguments.length ? !!a : !i.isOpen
    }, this.isOpen = function() {
      return i.isOpen
    }, i.getToggleElement = function() {
      return h.toggleElement
    }, i.focusToggleElement = function() {
      h.toggleElement && h.toggleElement[0].focus()
    }, i.$watch("isOpen", function(b, c) {
      f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {
        open: !!b
      })
    }), a.$on("$locationChangeSuccess", function() {
      i.isOpen = !1
    }), a.$on("$destroy", function() {
      i.$destroy()
    })
  }]).directive("dropdown", function() {
    return {
      restrict: "CA",
      controller: "DropdownController",
      link: function(a, b, c, d) {
        d.init(b)
      }
    }
  }).directive("dropdownToggle", function() {
    return {
      restrict: "CA",
      require: "?^dropdown",
      link: function(a, b, c, d) {
        if (d) {
          d.toggleElement = b;
          var e = function(e) {
            e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
              d.toggle()
            })
          };
          b.bind("click", e), b.attr({
            "aria-haspopup": !0,
            "aria-expanded": !1
          }), a.$watch(d.isOpen, function(a) {
            b.attr("aria-expanded", !!a)
          }), a.$on("$destroy", function() {
            b.unbind("click", e)
          })
        }
      }
    }
  }), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
    return {
      createNew: function() {
        var a = [];
        return {
          add: function(b, c) {
            a.push({
              key: b,
              value: c
            })
          },
          get: function(b) {
            for (var c = 0; c < a.length; c++)
              if (b == a[c].key) return a[c]
          },
          keys: function() {
            for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
            return b
          },
          top: function() {
            return a[a.length - 1]
          },
          remove: function(b) {
            for (var c = -1, d = 0; d < a.length; d++)
              if (b == a[d].key) {
                c = d;
                break
              }
            return a.splice(c, 1)[0]
          },
          removeTop: function() {
            return a.splice(a.length - 1, 1)[0]
          },
          length: function() {
            return a.length
          }
        }
      }
    }
  }).directive("modalBackdrop", ["$timeout", function(a) {
    return {
      restrict: "EA",
      replace: !0,
      templateUrl: "template/modal/backdrop.html",
      link: function(b, c, d) {
        b.backdropClass = d.backdropClass || "", b.animate = !1, a(function() {
          b.animate = !0
        })
      }
    }
  }]).directive("modalWindow", ["$modalStack", "$timeout", function(a, b) {
    return {
      restrict: "EA",
      scope: {
        index: "@",
        animate: "="
      },
      replace: !0,
      transclude: !0,
      templateUrl: function(a, b) {
        return b.templateUrl || "template/modal/window.html"
      },
      link: function(c, d, e) {
        d.addClass(e.windowClass || ""), c.size = e.size, b(function() {
          c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
        }), c.close = function(b) {
          var c = a.getTop();
          c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
        }
      }
    }
  }]).directive("modalTransclude", function() {
    return {
      link: function(a, b, c, d, e) {
        e(a.$parent, function(a) {
          b.empty(), b.append(a)
        })
      }
    }
  }).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f) {
    function g() {
      for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
      return a
    }

    function h(a) {
      var b = c.find("body").eq(0),
        d = n.get(a).value;
      n.remove(a), j(d.modalDomEl, d.modalScope, 300, function() {
        d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
      })
    }

    function i() {
      if (k && -1 == g()) {
        var a = l;
        j(k, l, 150, function() {
          a.$destroy(), a = null
        }), k = void 0, l = void 0
      }
    }

    function j(c, d, e, f) {
      function g() {
        g.done || (g.done = !0, c.remove(), f && f())
      }
      d.animate = !1;
      var h = a.transitionEndEventName;
      if (h) {
        var i = b(g, e);
        c.bind(h, function() {
          b.cancel(i), g(), d.$apply()
        })
      } else b(g)
    }
    var k, l, m = "modal-open",
      n = f.createNew(),
      o = {};
    return e.$watch(g, function(a) {
      l && (l.index = a)
    }), c.bind("keydown", function(a) {
      var b;
      27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
        o.dismiss(b.key, "escape key press")
      })))
    }), o.open = function(a, b) {
      n.add(a, {
        deferred: b.deferred,
        modalScope: b.scope,
        backdrop: b.backdrop,
        keyboard: b.keyboard
      });
      var f = c.find("body").eq(0),
        h = g();
      if (h >= 0 && !k) {
        l = e.$new(!0), l.index = h;
        var i = angular.element("<div modal-backdrop></div>");
        i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
      }
      var j = angular.element("<div modal-window></div>");
      j.attr({
        "template-url": b.windowTemplateUrl,
        "window-class": b.windowClass,
        size: b.size,
        index: n.length() - 1,
        animate: "animate"
      }).html(b.content);
      var o = d(j)(b.scope);
      n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
    }, o.close = function(a, b) {
      var c = n.get(a);
      c && (c.value.deferred.resolve(b), h(a))
    }, o.dismiss = function(a, b) {
      var c = n.get(a);
      c && (c.value.deferred.reject(b), h(a))
    }, o.dismissAll = function(a) {
      for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
    }, o.getTop = function() {
      return n.top()
    }, o
  }]).provider("$modal", function() {
    var a = {
      options: {
        backdrop: !0,
        keyboard: !0
      },
      $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(b, c, d, e, f, g, h) {
        function i(a) {
          return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {
            cache: f
          }).then(function(a) {
            return a.data
          })
        }

        function j(a) {
          var c = [];
          return angular.forEach(a, function(a) {
            (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
          }), c
        }
        var k = {};
        return k.open = function(b) {
          var e = d.defer(),
            f = d.defer(),
            k = {
              result: e.promise,
              opened: f.promise,
              close: function(a) {
                h.close(k, a)
              },
              dismiss: function(a) {
                h.dismiss(k, a)
              }
            };
          if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
          var l = d.all([i(b)].concat(j(b.resolve)));
          return l.then(function(a) {
            var d = (b.scope || c).$new();
            d.$close = k.close, d.$dismiss = k.dismiss;
            var f, i = {},
              j = 1;
            b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
              i[c] = a[j++]
            }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
              scope: d,
              deferred: e,
              content: a[0],
              backdrop: b.backdrop,
              keyboard: b.keyboard,
              backdropClass: b.backdropClass,
              windowClass: b.windowClass,
              windowTemplateUrl: b.windowTemplateUrl,
              size: b.size
            })
          }, function(a) {
            e.reject(a)
          }), l.then(function() {
            f.resolve(!0)
          }, function() {
            f.reject(!1)
          }), k
        }, k
      }]
    };
    return a
  }), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
    var d = this,
      e = {
        $setViewValue: angular.noop
      },
      f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(f, g) {
      e = f, this.config = g, e.$render = function() {
        d.render()
      }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
        d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
      }) : this.itemsPerPage = g.itemsPerPage
    }, this.calculateTotalPages = function() {
      var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
      return Math.max(b || 0, 1)
    }, this.render = function() {
      a.page = parseInt(e.$viewValue, 10) || 1
    }, a.selectPage = function(b) {
      a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
    }, a.getText = function(b) {
      return a[b + "Text"] || d.config[b + "Text"]
    }, a.noPrevious = function() {
      return 1 === a.page
    }, a.noNext = function() {
      return a.page === a.totalPages
    }, a.$watch("totalItems", function() {
      a.totalPages = d.calculateTotalPages()
    }), a.$watch("totalPages", function(b) {
      f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
    })
  }]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
  }).directive("pagination", ["$parse", "paginationConfig", function(a, b) {
    return {
      restrict: "EA",
      scope: {
        totalItems: "=",
        firstText: "@",
        previousText: "@",
        nextText: "@",
        lastText: "@"
      },
      require: ["pagination", "?ngModel"],
      controller: "PaginationController",
      templateUrl: "template/pagination/pagination.html",
      replace: !0,
      link: function(c, d, e, f) {
        function g(a, b, c) {
          return {
            number: a,
            text: b,
            active: c
          }
        }

        function h(a, b) {
          var c = [],
            d = 1,
            e = b,
            f = angular.isDefined(k) && b > k;
          f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
          for (var h = d; e >= h; h++) {
            var i = g(h, h, h === a);
            c.push(i)
          }
          if (f && !l) {
            if (d > 1) {
              var j = g(d - 1, "...", !1);
              c.unshift(j)
            }
            if (b > e) {
              var m = g(e + 1, "...", !1);
              c.push(m)
            }
          }
          return c
        }
        var i = f[0],
          j = f[1];
        if (j) {
          var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
            l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
          c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
            k = parseInt(a, 10), i.render()
          });
          var m = i.render;
          i.render = function() {
            m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
          }
        }
      }
    }
  }]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "Â« Previous",
    nextText: "Next Â»",
    align: !0
  }).directive("pager", ["pagerConfig", function(a) {
    return {
      restrict: "EA",
      scope: {
        totalItems: "=",
        previousText: "@",
        nextText: "@"
      },
      require: ["pager", "?ngModel"],
      controller: "PaginationController",
      templateUrl: "template/pagination/pager.html",
      replace: !0,
      link: function(b, c, d, e) {
        var f = e[0],
          g = e[1];
        g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align,
          f.init(g, a))
      }
    }
  }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
    function a(a) {
      var b = /[A-Z]/g,
        c = "-";
      return a.replace(b, function(a, b) {
        return (b ? c : "") + a.toLowerCase()
      })
    }
    var b = {
        placement: "top",
        animation: !0,
        popupDelay: 0
      },
      c = {
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur"
      },
      d = {};
    this.options = function(a) {
      angular.extend(d, a)
    }, this.setTriggers = function(a) {
      angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function(e, f, g, h, i, j, k) {
      return function(e, l, m) {
        function n(a) {
          var b = a || o.trigger || m,
            d = c[b] || b;
          return {
            show: b,
            hide: d
          }
        }
        var o = angular.extend({}, b, d),
          p = a(e),
          q = k.startSymbol(),
          r = k.endSymbol(),
          s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>';
        return {
          restrict: "EA",
          scope: !0,
          compile: function(a, b) {
            var c = f(s);
            return function(a, b, d) {
              function f() {
                a.tt_isOpen ? m() : k()
              }

              function k() {
                (!y || a.$eval(d[l + "Enable"])) && (a.tt_popupDelay ? v || (v = g(p, a.tt_popupDelay, !1), v.then(function(a) {
                  a()
                })) : p()())
              }

              function m() {
                a.$apply(function() {
                  q()
                })
              }

              function p() {
                return v = null, u && (g.cancel(u), u = null), a.tt_content ? (r(), t.css({
                  top: 0,
                  left: 0,
                  display: "block"
                }), w ? i.find("body").append(t) : b.after(t), z(), a.tt_isOpen = !0, a.$digest(), z) : angular.noop
              }

              function q() {
                a.tt_isOpen = !1, g.cancel(v), v = null, a.tt_animation ? u || (u = g(s, 500)) : s()
              }

              function r() {
                t && s(), t = c(a, function() {}), a.$digest()
              }

              function s() {
                u = null, t && (t.remove(), t = null)
              }
              var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1,
                x = n(void 0),
                y = angular.isDefined(d[l + "Enable"]),
                z = function() {
                  var c = j.positionElements(b, t, a.tt_placement, w);
                  c.top += "px", c.left += "px", t.css(c)
                };
              a.tt_isOpen = !1, d.$observe(e, function(b) {
                a.tt_content = b, !b && a.tt_isOpen && q()
              }), d.$observe(l + "Title", function(b) {
                a.tt_title = b
              }), d.$observe(l + "Placement", function(b) {
                a.tt_placement = angular.isDefined(b) ? b : o.placement
              }), d.$observe(l + "PopupDelay", function(b) {
                var c = parseInt(b, 10);
                a.tt_popupDelay = isNaN(c) ? o.popupDelay : c
              });
              var A = function() {
                b.unbind(x.show, k), b.unbind(x.hide, m)
              };
              d.$observe(l + "Trigger", function(a) {
                A(), x = n(a), x.show === x.hide ? b.bind(x.show, f) : (b.bind(x.show, k), b.bind(x.hide, m))
              });
              var B = a.$eval(d[l + "Animation"]);
              a.tt_animation = angular.isDefined(B) ? !!B : o.animation, d.$observe(l + "AppendToBody", function(b) {
                w = angular.isDefined(b) ? h(b)(a) : w
              }), w && a.$on("$locationChangeSuccess", function() {
                a.tt_isOpen && q()
              }), a.$on("$destroy", function() {
                g.cancel(u), g.cancel(v), A(), s()
              })
            }
          }
        }
      }
    }]
  }).directive("tooltipPopup", function() {
    return {
      restrict: "EA",
      replace: !0,
      scope: {
        content: "@",
        placement: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/tooltip/tooltip-popup.html"
    }
  }).directive("tooltip", ["$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter")
  }]).directive("tooltipHtmlUnsafePopup", function() {
    return {
      restrict: "EA",
      replace: !0,
      scope: {
        content: "@",
        placement: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
  }).directive("tooltipHtmlUnsafe", ["$tooltip", function(a) {
    return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
  }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
    return {
      restrict: "EA",
      replace: !0,
      scope: {
        title: "@",
        content: "@",
        placement: "@",
        animation: "&",
        isOpen: "&"
      },
      templateUrl: "template/popover/popover.html"
    }
  }).directive("popover", ["$tooltip", function(a) {
    return a("popover", "popover", "click")
  }]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
  }).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
    var d = this,
      e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function(b, c) {
      e || c.css({
        transition: "none"
      }), this.bars.push(b), b.$watch("value", function(c) {
        b.percent = +(100 * c / a.max).toFixed(2)
      }), b.$on("$destroy", function() {
        c = null, d.removeBar(b)
      })
    }, this.removeBar = function(a) {
      this.bars.splice(this.bars.indexOf(a), 1)
    }
  }]).directive("progress", function() {
    return {
      restrict: "EA",
      replace: !0,
      transclude: !0,
      controller: "ProgressController",
      require: "progress",
      scope: {},
      templateUrl: "template/progressbar/progress.html"
    }
  }).directive("bar", function() {
    return {
      restrict: "EA",
      replace: !0,
      transclude: !0,
      require: "^progress",
      scope: {
        value: "=",
        type: "@"
      },
      templateUrl: "template/progressbar/bar.html",
      link: function(a, b, c, d) {
        d.addBar(a, b)
      }
    }
  }).directive("progressbar", function() {
    return {
      restrict: "EA",
      replace: !0,
      transclude: !0,
      controller: "ProgressController",
      scope: {
        value: "=",
        type: "@"
      },
      templateUrl: "template/progressbar/progressbar.html",
      link: function(a, b, c, d) {
        d.addBar(a, angular.element(b.children()[0]))
      }
    }
  }), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
  }).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(a, b, c) {
    var d = {
      $setViewValue: angular.noop
    };
    this.init = function(e) {
      d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
      var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
      a.range = this.buildTemplateObjects(f)
    }, this.buildTemplateObjects = function(a) {
      for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
        index: b
      }, {
        stateOn: this.stateOn,
        stateOff: this.stateOff
      }, a[b]);
      return a
    }, a.rate = function(b) {
      !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
    }, a.enter = function(b) {
      a.readonly || (a.value = b), a.onHover({
        value: b
      })
    }, a.reset = function() {
      a.value = d.$viewValue, a.onLeave()
    }, a.onKeydown = function(b) {
      /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
    }, this.render = function() {
      a.value = d.$viewValue
    }
  }]).directive("rating", function() {
    return {
      restrict: "EA",
      require: ["rating", "ngModel"],
      scope: {
        readonly: "=?",
        onHover: "&",
        onLeave: "&"
      },
      controller: "RatingController",
      templateUrl: "template/rating/rating.html",
      replace: !0,
      link: function(a, b, c, d) {
        var e = d[0],
          f = d[1];
        f && e.init(f)
      }
    }
  }), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(a) {
    var b = this,
      c = b.tabs = a.tabs = [];
    b.select = function(a) {
      angular.forEach(c, function(b) {
        b.active && b !== a && (b.active = !1, b.onDeselect())
      }), a.active = !0, a.onSelect()
    }, b.addTab = function(a) {
      c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
    }, b.removeTab = function(a) {
      var d = c.indexOf(a);
      if (a.active && c.length > 1) {
        var e = d == c.length - 1 ? d - 1 : d + 1;
        b.select(c[e])
      }
      c.splice(d, 1)
    }
  }]).directive("tabset", function() {
    return {
      restrict: "EA",
      transclude: !0,
      replace: !0,
      scope: {
        type: "@"
      },
      controller: "TabsetController",
      templateUrl: "template/tabs/tabset.html",
      link: function(a, b, c) {
        a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
      }
    }
  }).directive("tab", ["$parse", function(a) {
    return {
      require: "^tabset",
      restrict: "EA",
      replace: !0,
      templateUrl: "template/tabs/tab.html",
      transclude: !0,
      scope: {
        active: "=?",
        heading: "@",
        onSelect: "&select",
        onDeselect: "&deselect"
      },
      controller: function() {},
      compile: function(b, c, d) {
        return function(b, c, e, f) {
          b.$watch("active", function(a) {
            a && f.select(b)
          }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
            b.disabled = !!a
          }), b.select = function() {
            b.disabled || (b.active = !0)
          }, f.addTab(b), b.$on("$destroy", function() {
            f.removeTab(b)
          }), b.$transcludeFn = d
        }
      }
    }
  }]).directive("tabHeadingTransclude", [function() {
    return {
      restrict: "A",
      require: "^tab",
      link: function(a, b, c, d) {
        a.$watch("headingElement", function(a) {
          a && (b.html(""), b.append(a))
        })
      }
    }
  }]).directive("tabContentTransclude", function() {
    function a(a) {
      return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }
    return {
      restrict: "A",
      require: "^tabset",
      link: function(b, c, d) {
        var e = b.$eval(d.tabContentTransclude);
        e.$transcludeFn(e.$parent, function(b) {
          angular.forEach(b, function(b) {
            a(b) ? e.headingElement = b : c.append(b)
          })
        })
      }
    }
  }), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0
  }).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(a, b, c, d, e, f) {
    function g() {
      var b = parseInt(a.hours, 10),
        c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
      return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
    }

    function h() {
      var b = parseInt(a.minutes, 10);
      return b >= 0 && 60 > b ? b : void 0
    }

    function i(a) {
      return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
    }

    function j(a) {
      k(), o.$setViewValue(new Date(n)), l(a)
    }

    function k() {
      o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
    }

    function l(b) {
      var c = n.getHours(),
        d = n.getMinutes();
      a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
    }

    function m(a) {
      var b = new Date(n.getTime() + 6e4 * a);
      n.setHours(b.getHours(), b.getMinutes()), j()
    }
    var n = new Date,
      o = {
        $setViewValue: angular.noop
      },
      p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
    this.init = function(c, d) {
      o = c, o.$render = this.render;
      var e = d.eq(0),
        g = d.eq(1),
        h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
      h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
    };
    var q = f.hourStep;
    b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
      q = parseInt(a, 10)
    });
    var r = f.minuteStep;
    b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
      r = parseInt(a, 10)
    }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
      if (a.showMeridian = !!b, o.$error.time) {
        var c = g(),
          d = h();
        angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
      } else l()
    }), this.setupMousewheelEvents = function(b, c) {
      var d = function(a) {
        a.originalEvent && (a = a.originalEvent);
        var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
        return a.detail || b > 0
      };
      b.bind("mousewheel wheel", function(b) {
        a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
      }), c.bind("mousewheel wheel", function(b) {
        a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
      })
    }, this.setupInputEvents = function(b, c) {
      if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
      var d = function(b, c) {
        o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
      };
      a.updateHours = function() {
        var a = g();
        angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
      }, b.bind("blur", function(b) {
        !a.invalidHours && a.hours < 10 && a.$apply(function() {
          a.hours = i(a.hours)
        })
      }), a.updateMinutes = function() {
        var a = h();
        angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
      }, c.bind("blur", function(b) {
        !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
          a.minutes = i(a.minutes)
        })
      })
    }, this.render = function() {
      var a = o.$modelValue ? new Date(o.$modelValue) : null;
      isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
    }, a.incrementHours = function() {
      m(60 * q)
    }, a.decrementHours = function() {
      m(60 * -q)
    }, a.incrementMinutes = function() {
      m(r)
    }, a.decrementMinutes = function() {
      m(-r)
    }, a.toggleMeridian = function() {
      m(720 * (n.getHours() < 12 ? 1 : -1))
    }
  }]).directive("timepicker", function() {
    return {
      restrict: "EA",
      require: ["timepicker", "?^ngModel"],
      controller: "TimepickerController",
      replace: !0,
      scope: {},
      templateUrl: "template/timepicker/timepicker.html",
      link: function(a, b, c, d) {
        var e = d[0],
          f = d[1];
        f && e.init(f, b.find("input"))
      }
    }
  }), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(a) {
    var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function(c) {
        var d = c.match(b);
        if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
        return {
          itemName: d[3],
          source: a(d[4]),
          viewMapper: a(d[2] || d[1]),
          modelMapper: a(d[1])
        }
      }
    }
  }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
    var h = [9, 13, 27, 38, 40];
    return {
      require: "ngModel",
      link: function(i, j, k, l) {
        var m, n = i.$eval(k.typeaheadMinLength) || 1,
          o = i.$eval(k.typeaheadWaitMs) || 0,
          p = i.$eval(k.typeaheadEditable) !== !1,
          q = b(k.typeaheadLoading).assign || angular.noop,
          r = b(k.typeaheadOnSelect),
          s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
          t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
          u = b(k.ngModel).assign,
          v = g.parse(k.typeahead),
          w = i.$new();
        i.$on("$destroy", function() {
          w.$destroy()
        });
        var x = "typeahead-" + w.$id + "-" + Math.floor(1e4 * Math.random());
        j.attr({
          "aria-autocomplete": "list",
          "aria-expanded": !1,
          "aria-owns": x
        });
        var y = angular.element("<div typeahead-popup></div>");
        y.attr({
          id: x,
          matches: "matches",
          active: "activeIdx",
          select: "select(activeIdx)",
          query: "query",
          position: "position"
        }), angular.isDefined(k.typeaheadTemplateUrl) && y.attr("template-url", k.typeaheadTemplateUrl);
        var z = function() {
            w.matches = [], w.activeIdx = -1, j.attr("aria-expanded", !1)
          },
          A = function(a) {
            return x + "-option-" + a
          };
        w.$watch("activeIdx", function(a) {
          0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", A(a))
        });
        var B = function(a) {
          var b = {
            $viewValue: a
          };
          q(i, !0), c.when(v.source(i, b)).then(function(c) {
            var d = a === l.$viewValue;
            if (d && m)
              if (c.length > 0) {
                w.activeIdx = 0, w.matches.length = 0;
                for (var e = 0; e < c.length; e++) b[v.itemName] = c[e], w.matches.push({
                  id: A(e),
                  label: v.viewMapper(w, b),
                  model: c[e]
                });
                w.query = a, w.position = t ? f.offset(j) : f.position(j), w.position.top = w.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
              } else z();
            d && q(i, !1)
          }, function() {
            z(), q(i, !1)
          })
        };
        z(), w.query = void 0;
        var C, D = function(a) {
            C = d(function() {
              B(a)
            }, o)
          },
          E = function() {
            C && d.cancel(C)
          };
        l.$parsers.unshift(function(a) {
          return m = !0, a && a.length >= n ? o > 0 ? (E(), D(a)) : B(a) : (q(i, !1), E(), z()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
        }), l.$formatters.push(function(a) {
          var b, c, d = {};
          return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a)
        }), w.select = function(a) {
          var b, c, e = {};
          e[v.itemName] = c = w.matches[a].model, b = v.modelMapper(i, e), u(i, b), l.$setValidity("editable", !0), r(i, {
            $item: c,
            $model: b,
            $label: v.viewMapper(i, e)
          }), z(), d(function() {
            j[0].focus()
          }, 0, !1)
        }, j.bind("keydown", function(a) {
          0 !== w.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (w.activeIdx = (w.activeIdx + 1) % w.matches.length, w.$digest()) : 38 === a.which ? (w.activeIdx = (w.activeIdx ? w.activeIdx : w.matches.length) - 1, w.$digest()) : 13 === a.which || 9 === a.which ? w.$apply(function() {
            w.select(w.activeIdx)
          }) : 27 === a.which && (a.stopPropagation(), z(), w.$digest()))
        }), j.bind("blur", function(a) {
          m = !1
        });
        var F = function(a) {
          j[0] !== a.target && (z(), w.$digest())
        };
        e.bind("click", F), i.$on("$destroy", function() {
          e.unbind("click", F)
        });
        var G = a(y)(w);
        t ? e.find("body").append(G) : j.after(G)
      }
    }
  }]).directive("typeaheadPopup", function() {
    return {
      restrict: "EA",
      scope: {
        matches: "=",
        query: "=",
        active: "=",
        position: "=",
        select: "&"
      },
      replace: !0,
      templateUrl: "template/typeahead/typeahead-popup.html",
      link: function(a, b, c) {
        a.templateUrl = c.templateUrl, a.isOpen = function() {
          return a.matches.length > 0
        }, a.isActive = function(b) {
          return a.active == b
        }, a.selectActive = function(b) {
          a.active = b
        }, a.selectMatch = function(b) {
          a.select({
            activeIdx: b
          })
        }
      }
    }
  }).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(a, b, c, d) {
    return {
      restrict: "EA",
      scope: {
        index: "=",
        match: "=",
        query: "="
      },
      link: function(e, f, g) {
        var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
        a.get(h, {
          cache: b
        }).success(function(a) {
          f.replaceWith(c(a.trim())(e))
        })
      }
    }
  }]).filter("typeaheadHighlight", function() {
    function a(a) {
      return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
      return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
  }), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')
  }]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
  }]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
    a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
  }]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
  }]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
  }]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
  }]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
  }]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
  }]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
  }]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
  }]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
  }]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
  }]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
  }]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
  }]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
  }]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
  }]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
  }]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
  }]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
  }]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
  }]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
  }]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
  }]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
  }]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
  }]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
  }]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n');
  }]),
  function() {
    function a(a, b, c) {
      for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e;)
        if (a[d] === b) return d;
      return -1
    }

    function b(b, c) {
      var d = typeof c;
      if (b = b.cache, "boolean" == d || null == c) return b[c] ? 0 : -1;
      "number" != d && "string" != d && (d = "object");
      var e = "number" == d ? c : u + c;
      return b = (b = b[d]) && b[e], "object" == d ? b && a(b, c) > -1 ? 0 : -1 : b ? 0 : -1
    }

    function c(a) {
      var b = this.cache,
        c = typeof a;
      if ("boolean" == c || null == a) b[a] = !0;
      else {
        "number" != c && "string" != c && (c = "object");
        var d = "number" == c ? a : u + a,
          e = b[c] || (b[c] = {});
        "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
      }
    }

    function d(a) {
      return a.charCodeAt(0)
    }

    function e(a, b) {
      for (var c = a.criteria, d = b.criteria, e = -1, f = c.length; ++e < f;) {
        var g = c[e],
          h = d[e];
        if (g !== h) {
          if (g > h || "undefined" == typeof g) return 1;
          if (h > g || "undefined" == typeof h) return -1
        }
      }
      return a.index - b.index
    }

    function f(a) {
      var b = -1,
        d = a.length,
        e = a[0],
        f = a[d / 2 | 0],
        g = a[d - 1];
      if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g) return !1;
      var h = i();
      h["false"] = h["null"] = h["true"] = h.undefined = !1;
      var j = i();
      for (j.array = a, j.cache = h, j.push = c; ++b < d;) j.push(a[b]);
      return j
    }

    function g(a) {
      return "\\" + _[a]
    }

    function h() {
      return q.pop() || []
    }

    function i() {
      return r.pop() || {
        array: null,
        cache: null,
        criteria: null,
        "false": !1,
        index: 0,
        "null": !1,
        number: null,
        object: null,
        push: null,
        string: null,
        "true": !1,
        undefined: !1,
        value: null
      }
    }

    function j(a) {
      return "function" != typeof a.toString && "string" == typeof(a + "")
    }

    function l(a) {
      a.length = 0, q.length < w && q.push(a)
    }

    function m(a) {
      var b = a.cache;
      b && m(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, r.length < w && r.push(a)
    }

    function n(a, b, c) {
      b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
      for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;) f[d] = a[b + d];
      return f
    }

    function o(c) {
      function q(a) {
        return a && "object" == typeof a && !kd(a) && Rc.call(a, "__wrapped__") ? a : new r(a)
      }

      function r(a, b) {
        this.__chain__ = !!b, this.__wrapped__ = a
      }

      function w(a) {
        function b() {
          if (d) {
            var a = n(d);
            Sc.apply(a, arguments)
          }
          if (this instanceof b) {
            var f = ba(c.prototype),
              g = c.apply(f, a || arguments);
            return La(g) ? g : f
          }
          return c.apply(e, a || arguments)
        }
        var c = a[0],
          d = a[2],
          e = a[4];
        return jd(b, a), b
      }

      function _(a, b, c, d, e) {
        if (c) {
          var f = c(a);
          if ("undefined" != typeof f) return f
        }
        var g = La(a);
        if (!g) return a;
        var i = Kc.call(a);
        if (!W[i] || !hd.nodeClass && j(a)) return a;
        var k = fd[i];
        switch (i) {
          case O:
          case P:
            return new k(+a);
          case S:
          case V:
            return new k(a);
          case U:
            return f = k(a.source, C.exec(a)), f.lastIndex = a.lastIndex, f
        }
        var m = kd(a);
        if (b) {
          var o = !d;
          d || (d = h()), e || (e = h());
          for (var p = d.length; p--;)
            if (d[p] == a) return e[p];
          f = m ? k(a.length) : {}
        } else f = m ? n(a) : vd({}, a);
        return m && (Rc.call(a, "index") && (f.index = a.index), Rc.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (m ? ud : yd)(a, function(a, g) {
          f[g] = _(a, b, c, d, e)
        }), o && (l(d), l(e)), f) : f
      }

      function ba(a, b) {
        return La(a) ? Yc(a) : {}
      }

      function ca(a, b, c) {
        if ("function" != typeof a) return ec;
        if ("undefined" == typeof b || !("prototype" in a)) return a;
        var d = a.__bindData__;
        if ("undefined" == typeof d && (hd.funcNames && (d = !a.name), d = d || !hd.funcDecomp, !d)) {
          var e = Pc.call(a);
          hd.funcNames || (d = !D.test(e)), d || (d = H.test(e), jd(a, d))
        }
        if (d === !1 || d !== !0 && 1 & d[1]) return a;
        switch (c) {
          case 1:
            return function(c) {
              return a.call(b, c)
            };
          case 2:
            return function(c, d) {
              return a.call(b, c, d)
            };
          case 3:
            return function(c, d, e) {
              return a.call(b, c, d, e)
            };
          case 4:
            return function(c, d, e, f) {
              return a.call(b, c, d, e, f)
            }
        }
        return Pb(a, b)
      }

      function da(a) {
        function b() {
          var a = i ? g : this;
          if (e) {
            var o = n(e);
            Sc.apply(o, arguments)
          }
          if ((f || k) && (o || (o = n(arguments)), f && Sc.apply(o, f), k && o.length < h)) return d |= 16, da([c, l ? d : -4 & d, o, null, g, h]);
          if (o || (o = arguments), j && (c = a[m]), this instanceof b) {
            a = ba(c.prototype);
            var p = c.apply(a, o);
            return La(p) ? p : a
          }
          return c.apply(a, o)
        }
        var c = a[0],
          d = a[1],
          e = a[2],
          f = a[3],
          g = a[4],
          h = a[5],
          i = 1 & d,
          j = 2 & d,
          k = 4 & d,
          l = 8 & d,
          m = c;
        return jd(b, a), b
      }

      function ea(c, d) {
        var e = -1,
          g = pa(),
          h = c ? c.length : 0,
          i = h >= v && g === a,
          j = [];
        if (i) {
          var k = f(d);
          k ? (g = b, d = k) : i = !1
        }
        for (; ++e < h;) {
          var l = c[e];
          g(d, l) < 0 && j.push(l)
        }
        return i && m(d), j
      }

      function ga(a, b, c, d) {
        for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f;) {
          var h = a[e];
          if (h && "object" == typeof h && "number" == typeof h.length && (kd(h) || ta(h))) {
            b || (h = ga(h, b, c));
            var i = -1,
              j = h.length,
              k = g.length;
            for (g.length += j; ++i < j;) g[k++] = h[i]
          } else c || g.push(h)
        }
        return g
      }

      function ha(a, b, c, d, e, f) {
        if (c) {
          var g = c(a, b);
          if ("undefined" != typeof g) return !!g
        }
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        var i = typeof a,
          k = typeof b;
        if (!(a !== a || a && $[i] || b && $[k])) return !1;
        if (null == a || null == b) return a === b;
        var m = Kc.call(a),
          n = Kc.call(b);
        if (m == M && (m = T), n == M && (n = T), m != n) return !1;
        switch (m) {
          case O:
          case P:
            return +a == +b;
          case S:
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
          case U:
          case V:
            return a == Dc(b)
        }
        var o = m == N;
        if (!o) {
          var p = Rc.call(a, "__wrapped__"),
            q = Rc.call(b, "__wrapped__");
          if (p || q) return ha(p ? a.__wrapped__ : a, q ? b.__wrapped__ : b, c, d, e, f);
          if (m != T || !hd.nodeClass && (j(a) || j(b))) return !1;
          var r = !hd.argsObject && ta(a) ? Bc : a.constructor,
            s = !hd.argsObject && ta(b) ? Bc : b.constructor;
          if (r != s && !(Ka(r) && r instanceof r && Ka(s) && s instanceof s) && "constructor" in a && "constructor" in b) return !1
        }
        var t = !e;
        e || (e = h()), f || (f = h());
        for (var u = e.length; u--;)
          if (e[u] == a) return f[u] == b;
        var v = 0;
        if (g = !0, e.push(a), f.push(b), o) {
          if (u = a.length, v = b.length, g = v == u, g || d)
            for (; v--;) {
              var w = u,
                x = b[v];
              if (d)
                for (; w-- && !(g = ha(a[w], x, c, d, e, f)););
              else if (!(g = ha(a[v], x, c, d, e, f))) break
            }
        } else xd(b, function(b, h, i) {
          return Rc.call(i, h) ? (v++, g = Rc.call(a, h) && ha(a[h], b, c, d, e, f)) : void 0
        }), g && !d && xd(a, function(a, b, c) {
          return Rc.call(c, b) ? g = --v > -1 : void 0
        });
        return e.pop(), f.pop(), t && (l(e), l(f)), g
      }

      function ia(a, b, c, d, e) {
        (kd(b) ? db : yd)(b, function(b, f) {
          var g, h, i = b,
            j = a[f];
          if (b && ((h = kd(b)) || zd(b))) {
            for (var k = d.length; k--;)
              if (g = d[k] == b) {
                j = e[k];
                break
              }
            if (!g) {
              var l;
              c && (i = c(j, b), (l = "undefined" != typeof i) && (j = i)), l || (j = h ? kd(j) ? j : [] : zd(j) ? j : {}), d.push(b), e.push(j), l || ia(j, b, c, d, e)
            }
          } else c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
          a[f] = j
        })
      }

      function ja(a, b) {
        return a + Oc(ed() * (b - a + 1))
      }

      function ka(c, d, e) {
        var g = -1,
          i = pa(),
          j = c ? c.length : 0,
          k = [],
          n = !d && j >= v && i === a,
          o = e || n ? h() : k;
        if (n) {
          var p = f(o);
          i = b, o = p
        }
        for (; ++g < j;) {
          var q = c[g],
            r = e ? e(q, g, c) : q;
          (d ? !g || o[o.length - 1] !== r : i(o, r) < 0) && ((e || n) && o.push(r), k.push(q))
        }
        return n ? (l(o.array), m(o)) : e && l(o), k
      }

      function la(a) {
        return function(b, c, d) {
          var e = {};
          if (c = q.createCallback(c, d, 3), kd(b))
            for (var f = -1, g = b.length; ++f < g;) {
              var h = b[f];
              a(e, h, c(h, f, b), b)
            } else ud(b, function(b, d, f) {
              a(e, b, c(b, d, f), f)
            });
          return e
        }
      }

      function ma(a, b, c, d, e, f) {
        var g = 1 & b,
          h = 2 & b,
          i = 4 & b,
          j = 16 & b,
          k = 32 & b;
        if (!h && !Ka(a)) throw new Ec;
        j && !c.length && (b &= -17, j = c = !1), k && !d.length && (b &= -33, k = d = !1);
        var l = a && a.__bindData__;
        if (l && l !== !0) return l = n(l), l[2] && (l[2] = n(l[2])), l[3] && (l[3] = n(l[3])), !g || 1 & l[1] || (l[4] = e), !g && 1 & l[1] && (b |= 8), !i || 4 & l[1] || (l[5] = f), j && Sc.apply(l[2] || (l[2] = []), c), k && Wc.apply(l[3] || (l[3] = []), d), l[1] |= b, ma.apply(null, l);
        var m = 1 == b || 17 === b ? w : da;
        return m([a, b, c, d, e, f])
      }

      function na() {
        Z.shadowedProps = K, Z.array = Z.bottom = Z.loop = Z.top = "", Z.init = "iterable", Z.useHas = !0;
        for (var a, b = 0; a = arguments[b]; b++)
          for (var c in a) Z[c] = a[c];
        var d = Z.args;
        Z.firstArg = /^[^,]+/.exec(d)[0];
        var e = yc("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + d + ") {\n" + id(Z) + "\n}");
        return e(ca, Q, Gc, Rc, t, ta, kd, Qa, Z.keys, Hc, $, gd, V, Ic, Kc)
      }

      function oa(a) {
        return qd[a]
      }

      function pa() {
        var b = (b = q.indexOf) === yb ? a : b;
        return b
      }

      function qa(a) {
        return "function" == typeof a && Lc.test(a)
      }

      function ra(a) {
        var b, c;
        return !a || Kc.call(a) != T || (b = a.constructor, Ka(b) && !(b instanceof b)) || !hd.argsClass && ta(a) || !hd.nodeClass && j(a) ? !1 : hd.ownLast ? (xd(a, function(a, b, d) {
          return c = Rc.call(d, b), !1
        }), c !== !1) : (xd(a, function(a, b) {
          c = b
        }), "undefined" == typeof c || Rc.call(a, c))
      }

      function sa(a) {
        return rd[a]
      }

      function ta(a) {
        return a && "object" == typeof a && "number" == typeof a.length && Kc.call(a) == M || !1
      }

      function ua(a, b, c, d) {
        return "boolean" != typeof b && null != b && (d = c, c = b, b = !1), _(a, b, "function" == typeof c && ca(c, d, 1))
      }

      function va(a, b, c) {
        return _(a, !0, "function" == typeof b && ca(b, c, 1))
      }

      function wa(a, b) {
        var c = ba(a);
        return b ? vd(c, b) : c
      }

      function xa(a, b, c) {
        var d;
        return b = q.createCallback(b, c, 3), yd(a, function(a, c, e) {
          return b(a, c, e) ? (d = c, !1) : void 0
        }), d
      }

      function ya(a, b, c) {
        var d;
        return b = q.createCallback(b, c, 3), Aa(a, function(a, c, e) {
          return b(a, c, e) ? (d = c, !1) : void 0
        }), d
      }

      function za(a, b, c) {
        var d = [];
        xd(a, function(a, b) {
          d.push(b, a)
        });
        var e = d.length;
        for (b = ca(b, c, 3); e-- && b(d[e--], d[e], a) !== !1;);
        return a
      }

      function Aa(a, b, c) {
        var d = md(a),
          e = d.length;
        for (b = ca(b, c, 3); e--;) {
          var f = d[e];
          if (b(a[f], f, a) === !1) break
        }
        return a
      }

      function Ba(a) {
        var b = [];
        return xd(a, function(a, c) {
          Ka(a) && b.push(c)
        }), b.sort()
      }

      function Ca(a, b) {
        return a ? Rc.call(a, b) : !1
      }

      function Da(a) {
        for (var b = -1, c = md(a), d = c.length, e = {}; ++b < d;) {
          var f = c[b];
          e[a[f]] = f
        }
        return e
      }

      function Ea(a) {
        return a === !0 || a === !1 || a && "object" == typeof a && Kc.call(a) == O || !1
      }

      function Fa(a) {
        return a && "object" == typeof a && Kc.call(a) == P || !1
      }

      function Ga(a) {
        return a && 1 === a.nodeType || !1
      }

      function Ha(a) {
        var b = !0;
        if (!a) return b;
        var c = Kc.call(a),
          d = a.length;
        return c == N || c == V || (hd.argsClass ? c == M : ta(a)) || c == T && "number" == typeof d && Ka(a.splice) ? !d : (yd(a, function() {
          return b = !1
        }), b)
      }

      function Ia(a, b, c, d) {
        return ha(a, b, "function" == typeof c && ca(c, d, 2))
      }

      function Ja(a) {
        return $c(a) && !_c(parseFloat(a))
      }

      function Ka(a) {
        return "function" == typeof a
      }

      function La(a) {
        return !(!a || !$[typeof a])
      }

      function Ma(a) {
        return Oa(a) && a != +a
      }

      function Na(a) {
        return null === a
      }

      function Oa(a) {
        return "number" == typeof a || a && "object" == typeof a && Kc.call(a) == S || !1
      }

      function Pa(a) {
        return a && $[typeof a] && Kc.call(a) == U || !1
      }

      function Qa(a) {
        return "string" == typeof a || a && "object" == typeof a && Kc.call(a) == V || !1
      }

      function Ra(a) {
        return "undefined" == typeof a
      }

      function Sa(a, b, c) {
        var d = {};
        return b = q.createCallback(b, c, 3), yd(a, function(a, c, e) {
          d[c] = b(a, c, e)
        }), d
      }

      function Ta(a) {
        var b = arguments,
          c = 2;
        if (!La(a)) return a;
        if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2]) var d = ca(b[--c - 1], b[c--], 2);
        else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
        for (var e = n(arguments, 1, c), f = -1, g = h(), i = h(); ++f < c;) ia(a, e[f], d, g, i);
        return l(g), l(i), a
      }

      function Ua(a, b, c) {
        var d = {};
        if ("function" != typeof b) {
          var e = [];
          xd(a, function(a, b) {
            e.push(b)
          }), e = ea(e, ga(arguments, !0, !1, 1));
          for (var f = -1, g = e.length; ++f < g;) {
            var h = e[f];
            d[h] = a[h]
          }
        } else b = q.createCallback(b, c, 3), xd(a, function(a, c, e) {
          b(a, c, e) || (d[c] = a)
        });
        return d
      }

      function Va(a) {
        for (var b = -1, c = md(a), d = c.length, e = uc(d); ++b < d;) {
          var f = c[b];
          e[b] = [f, a[f]]
        }
        return e
      }

      function Wa(a, b, c) {
        var d = {};
        if ("function" != typeof b)
          for (var e = -1, f = ga(arguments, !0, !1, 1), g = La(a) ? f.length : 0; ++e < g;) {
            var h = f[e];
            h in a && (d[h] = a[h])
          } else b = q.createCallback(b, c, 3), xd(a, function(a, c, e) {
            b(a, c, e) && (d[c] = a)
          });
        return d
      }

      function Xa(a, b, c, d) {
        var e = kd(a);
        if (null == c)
          if (e) c = [];
          else {
            var f = a && a.constructor,
              g = f && f.prototype;
            c = ba(g)
          }
        return b && (b = q.createCallback(b, d, 4), (e ? ud : yd)(a, function(a, d, e) {
          return b(c, a, d, e)
        })), c
      }

      function Ya(a) {
        for (var b = -1, c = md(a), d = c.length, e = uc(d); ++b < d;) e[b] = a[c[b]];
        return e
      }

      function Za(a) {
        var b = arguments,
          c = -1,
          d = ga(b, !0, !1, 1),
          e = b[2] && b[2][b[1]] === a ? 1 : d.length,
          f = uc(e);
        for (hd.unindexedChars && Qa(a) && (a = a.split("")); ++c < e;) f[c] = a[d[c]];
        return f
      }

      function $a(a, b, c) {
        var d = -1,
          e = pa(),
          f = a ? a.length : 0,
          g = !1;
        return c = (0 > c ? bd(0, f + c) : c) || 0, kd(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Qa(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : ud(a, function(a) {
          return ++d >= c ? !(g = a === b) : void 0
        }), g
      }

      function _a(a, b, c) {
        var d = !0;
        if (b = q.createCallback(b, c, 3), kd(a))
          for (var e = -1, f = a.length; ++e < f && (d = !!b(a[e], e, a)););
        else ud(a, function(a, c, e) {
          return d = !!b(a, c, e)
        });
        return d
      }

      function ab(a, b, c) {
        var d = [];
        if (b = q.createCallback(b, c, 3), kd(a))
          for (var e = -1, f = a.length; ++e < f;) {
            var g = a[e];
            b(g, e, a) && d.push(g)
          } else ud(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
          });
        return d
      }

      function bb(a, b, c) {
        if (b = q.createCallback(b, c, 3), !kd(a)) {
          var d;
          return ud(a, function(a, c, e) {
            return b(a, c, e) ? (d = a, !1) : void 0
          }), d
        }
        for (var e = -1, f = a.length; ++e < f;) {
          var g = a[e];
          if (b(g, e, a)) return g
        }
      }

      function cb(a, b, c) {
        var d;
        return b = q.createCallback(b, c, 3), eb(a, function(a, c, e) {
          return b(a, c, e) ? (d = a, !1) : void 0
        }), d
      }

      function db(a, b, c) {
        if (b && "undefined" == typeof c && kd(a))
          for (var d = -1, e = a.length; ++d < e && b(a[d], d, a) !== !1;);
        else ud(a, b, c);
        return a
      }

      function eb(a, b, c) {
        var d = a,
          e = a ? a.length : 0;
        if (b = b && "undefined" == typeof c ? b : ca(b, c, 3), kd(a))
          for (; e-- && b(a[e], e, a) !== !1;);
        else {
          if ("number" != typeof e) {
            var f = md(a);
            e = f.length
          } else hd.unindexedChars && Qa(a) && (d = a.split(""));
          ud(a, function(a, c, g) {
            return c = f ? f[--e] : --e, b(d[c], c, g)
          })
        }
        return a
      }

      function fb(a, b) {
        var c = n(arguments, 2),
          d = -1,
          e = "function" == typeof b,
          f = a ? a.length : 0,
          g = uc("number" == typeof f ? f : 0);
        return db(a, function(a) {
          g[++d] = (e ? b : a[b]).apply(a, c)
        }), g
      }

      function gb(a, b, c) {
        var d = -1,
          e = a ? a.length : 0,
          f = uc("number" == typeof e ? e : 0);
        if (b = q.createCallback(b, c, 3), kd(a))
          for (; ++d < e;) f[d] = b(a[d], d, a);
        else ud(a, function(a, c, e) {
          f[++d] = b(a, c, e)
        });
        return f
      }

      function hb(a, b, c) {
        var e = -(1 / 0),
          f = e;
        if ("function" != typeof b && c && c[b] === a && (b = null), null == b && kd(a))
          for (var g = -1, h = a.length; ++g < h;) {
            var i = a[g];
            i > f && (f = i)
          } else b = null == b && Qa(a) ? d : q.createCallback(b, c, 3), ud(a, function(a, c, d) {
            var g = b(a, c, d);
            g > e && (e = g, f = a)
          });
        return f
      }

      function ib(a, b, c) {
        var e = 1 / 0,
          f = e;
        if ("function" != typeof b && c && c[b] === a && (b = null), null == b && kd(a))
          for (var g = -1, h = a.length; ++g < h;) {
            var i = a[g];
            f > i && (f = i)
          } else b = null == b && Qa(a) ? d : q.createCallback(b, c, 3), ud(a, function(a, c, d) {
            var g = b(a, c, d);
            e > g && (e = g, f = a)
          });
        return f
      }

      function jb(a, b, c, d) {
        var e = arguments.length < 3;
        if (b = q.createCallback(b, d, 4), kd(a)) {
          var f = -1,
            g = a.length;
          for (e && (c = a[++f]); ++f < g;) c = b(c, a[f], f, a)
        } else ud(a, function(a, d, f) {
          c = e ? (e = !1, a) : b(c, a, d, f)
        });
        return c
      }

      function kb(a, b, c, d) {
        var e = arguments.length < 3;
        return b = q.createCallback(b, d, 4), eb(a, function(a, d, f) {
          c = e ? (e = !1, a) : b(c, a, d, f)
        }), c
      }

      function lb(a, b, c) {
        return b = q.createCallback(b, c, 3), ab(a, function(a, c, d) {
          return !b(a, c, d)
        })
      }

      function mb(a, b, c) {
        if (a && "number" != typeof a.length ? a = Ya(a) : hd.unindexedChars && Qa(a) && (a = a.split("")), null == b || c) return a ? a[ja(0, a.length - 1)] : p;
        var d = nb(a);
        return d.length = cd(bd(0, b), d.length), d
      }

      function nb(a) {
        var b = -1,
          c = a ? a.length : 0,
          d = uc("number" == typeof c ? c : 0);
        return db(a, function(a) {
          var c = ja(0, ++b);
          d[b] = d[c], d[c] = a
        }), d
      }

      function ob(a) {
        var b = a ? a.length : 0;
        return "number" == typeof b ? b : md(a).length
      }

      function pb(a, b, c) {
        var d;
        if (b = q.createCallback(b, c, 3), kd(a))
          for (var e = -1, f = a.length; ++e < f && !(d = b(a[e], e, a)););
        else ud(a, function(a, c, e) {
          return !(d = b(a, c, e))
        });
        return !!d
      }

      function qb(a, b, c) {
        var d = -1,
          f = kd(b),
          g = a ? a.length : 0,
          j = uc("number" == typeof g ? g : 0);
        for (f || (b = q.createCallback(b, c, 3)), db(a, function(a, c, e) {
            var g = j[++d] = i();
            f ? g.criteria = gb(b, function(b) {
              return a[b]
            }) : (g.criteria = h())[0] = b(a, c, e), g.index = d, g.value = a
          }), g = j.length, j.sort(e); g--;) {
          var k = j[g];
          j[g] = k.value, f || l(k.criteria), m(k)
        }
        return j
      }

      function rb(a) {
        return a && "number" == typeof a.length ? hd.unindexedChars && Qa(a) ? a.split("") : n(a) : Ya(a)
      }

      function sb(a) {
        for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
          var e = a[b];
          e && d.push(e)
        }
        return d
      }

      function tb(a) {
        return ea(a, ga(arguments, !0, !0, 1))
      }

      function ub(a, b, c) {
        var d = -1,
          e = a ? a.length : 0;
        for (b = q.createCallback(b, c, 3); ++d < e;)
          if (b(a[d], d, a)) return d;
        return -1
      }

      function vb(a, b, c) {
        var d = a ? a.length : 0;
        for (b = q.createCallback(b, c, 3); d--;)
          if (b(a[d], d, a)) return d;
        return -1
      }

      function wb(a, b, c) {
        var d = 0,
          e = a ? a.length : 0;
        if ("number" != typeof b && null != b) {
          var f = -1;
          for (b = q.createCallback(b, c, 3); ++f < e && b(a[f], f, a);) d++
        } else if (d = b, null == d || c) return a ? a[0] : p;
        return n(a, 0, cd(bd(0, d), e))
      }

      function xb(a, b, c, d) {
        return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (a = gb(a, c, d)), ga(a, b)
      }

      function yb(b, c, d) {
        if ("number" == typeof d) {
          var e = b ? b.length : 0;
          d = 0 > d ? bd(0, e + d) : d || 0
        } else if (d) {
          var f = Hb(b, c);
          return b[f] === c ? f : -1
        }
        return a(b, c, d)
      }

      function zb(a, b, c) {
        var d = 0,
          e = a ? a.length : 0;
        if ("number" != typeof b && null != b) {
          var f = e;
          for (b = q.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++
        } else d = null == b || c ? 1 : b || d;
        return n(a, 0, cd(bd(0, e - d), e))
      }

      function Ab() {
        for (var c = [], d = -1, e = arguments.length, g = h(), i = pa(), j = i === a, k = h(); ++d < e;) {
          var n = arguments[d];
          (kd(n) || ta(n)) && (c.push(n), g.push(j && n.length >= v && f(d ? c[d] : k)))
        }
        var o = c[0],
          p = -1,
          q = o ? o.length : 0,
          r = [];
        a: for (; ++p < q;) {
          var s = g[0];
          if (n = o[p], (s ? b(s, n) : i(k, n)) < 0) {
            for (d = e, (s || k).push(n); --d;)
              if (s = g[d], (s ? b(s, n) : i(c[d], n)) < 0) continue a;
            r.push(n)
          }
        }
        for (; e--;) s = g[e], s && m(s);
        return l(g), l(k), r
      }

      function Bb(a, b, c) {
        var d = 0,
          e = a ? a.length : 0;
        if ("number" != typeof b && null != b) {
          var f = e;
          for (b = q.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++
        } else if (d = b, null == d || c) return a ? a[e - 1] : p;
        return n(a, bd(0, e - d))
      }

      function Cb(a, b, c) {
        var d = a ? a.length : 0;
        for ("number" == typeof c && (d = (0 > c ? bd(0, d + c) : cd(c, d - 1)) + 1); d--;)
          if (a[d] === b) return d;
        return -1
      }

      function Db(a) {
        for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)
          for (var f = -1, g = b[c]; ++f < e;) a[f] === g && (Vc.call(a, f--, 1), e--);
        return a
      }

      function Eb(a, b, c) {
        a = +a || 0, c = "number" == typeof c ? c : +c || 1, null == b && (b = a, a = 0);
        for (var d = -1, e = bd(0, Mc((b - a) / (c || 1))), f = uc(e); ++d < e;) f[d] = a, a += c;
        return f
      }

      function Fb(a, b, c) {
        var d = -1,
          e = a ? a.length : 0,
          f = [];
        for (b = q.createCallback(b, c, 3); ++d < e;) {
          var g = a[d];
          b(g, d, a) && (f.push(g), Vc.call(a, d--, 1), e--)
        }
        return f
      }

      function Gb(a, b, c) {
        if ("number" != typeof b && null != b) {
          var d = 0,
            e = -1,
            f = a ? a.length : 0;
          for (b = q.createCallback(b, c, 3); ++e < f && b(a[e], e, a);) d++
        } else d = null == b || c ? 1 : bd(0, b);
        return n(a, d)
      }

      function Hb(a, b, c, d) {
        var e = 0,
          f = a ? a.length : e;
        for (c = c ? q.createCallback(c, d, 1) : ec, b = c(b); f > e;) {
          var g = e + f >>> 1;
          c(a[g]) < b ? e = g + 1 : f = g
        }
        return e
      }

      function Ib() {
        return ka(ga(arguments, !0, !0))
      }

      function Jb(a, b, c, d) {
        return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (c = q.createCallback(c, d, 3)), ka(a, b, c)
      }

      function Kb(a) {
        return ea(a, n(arguments, 1))
      }

      function Lb() {
        for (var a = -1, b = arguments.length; ++a < b;) {
          var c = arguments[a];
          if (kd(c) || ta(c)) var d = d ? ka(ea(d, c).concat(ea(c, d))) : c
        }
        return d || []
      }

      function Mb() {
        for (var a = arguments.length > 1 ? arguments : arguments[0], b = -1, c = a ? hb(Dd(a, "length")) : 0, d = uc(0 > c ? 0 : c); ++b < c;) d[b] = Dd(a, b);
        return d
      }

      function Nb(a, b) {
        var c = -1,
          d = a ? a.length : 0,
          e = {};
        for (b || !d || kd(a[0]) || (b = []); ++c < d;) {
          var f = a[c];
          b ? e[f] = b[c] : f && (e[f[0]] = f[1])
        }
        return e
      }

      function Ob(a, b) {
        if (!Ka(b)) throw new Ec;
        return function() {
          return --a < 1 ? b.apply(this, arguments) : void 0
        }
      }

      function Pb(a, b) {
        return arguments.length > 2 ? ma(a, 17, n(arguments, 2), null, b) : ma(a, 1, null, null, b)
      }

      function Qb(a) {
        for (var b = arguments.length > 1 ? ga(arguments, !0, !1, 1) : Ba(a), c = -1, d = b.length; ++c < d;) {
          var e = b[c];
          a[e] = ma(a[e], 1, null, null, a)
        }
        return a
      }

      function Rb(a, b) {
        return arguments.length > 2 ? ma(b, 19, n(arguments, 2), null, a) : ma(b, 3, null, null, a)
      }

      function Sb() {
        for (var a = arguments, b = a.length; b--;)
          if (!Ka(a[b])) throw new Ec;
        return function() {
          for (var b = arguments, c = a.length; c--;) b = [a[c].apply(this, b)];
          return b[0]
        }
      }

      function Tb(a, b) {
        return b = "number" == typeof b ? b : +b || a.length, ma(a, 4, null, null, null, b)
      }

      function Ub(a, b, c) {
        var d, e, f, g, h, i, j, k = 0,
          l = !1,
          m = !0;
        if (!Ka(a)) throw new Ec;
        if (b = bd(0, b) || 0, c === !0) {
          var n = !0;
          m = !1
        } else La(c) && (n = c.leading, l = "maxWait" in c && (bd(b, c.maxWait) || 0), m = "trailing" in c ? c.trailing : m);
        var o = function() {
            var c = b - (Fd() - g);
            if (0 >= c) {
              e && Nc(e);
              var l = j;
              e = i = j = p, l && (k = Fd(), f = a.apply(h, d), i || e || (d = h = null))
            } else i = Uc(o, c)
          },
          q = function() {
            i && Nc(i), e = i = j = p, (m || l !== b) && (k = Fd(), f = a.apply(h, d), i || e || (d = h = null))
          };
        return function() {
          if (d = arguments, g = Fd(), h = this, j = m && (i || !n), l === !1) var c = n && !i;
          else {
            e || n || (k = g);
            var p = l - (g - k),
              r = 0 >= p;
            r ? (e && (e = Nc(e)), k = g, f = a.apply(h, d)) : e || (e = Uc(q, p))
          }
          return r && i ? i = Nc(i) : i || b === l || (i = Uc(o, b)), c && (r = !0, f = a.apply(h, d)), !r || i || e || (d = h = null), f
        }
      }

      function Vb(a) {
        if (!Ka(a)) throw new Ec;
        var b = n(arguments, 1);
        return Uc(function() {
          a.apply(p, b)
        }, 1)
      }

      function Wb(a, b) {
        if (!Ka(a)) throw new Ec;
        var c = n(arguments, 2);
        return Uc(function() {
          a.apply(p, c)
        }, b)
      }

      function Xb(a, b) {
        if (!Ka(a)) throw new Ec;
        var c = function() {
          var d = c.cache,
            e = b ? b.apply(this, arguments) : u + arguments[0];
          return Rc.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
        };
        return c.cache = {}, c
      }

      function Yb(a) {
        var b, c;
        if (!Ka(a)) throw new Ec;
        return function() {
          return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
        }
      }

      function Zb(a) {
        return ma(a, 16, n(arguments, 1))
      }

      function $b(a) {
        return ma(a, 32, null, n(arguments, 1))
      }

      function _b(a, b, c) {
        var d = !0,
          e = !0;
        if (!Ka(a)) throw new Ec;
        return c === !1 ? d = !1 : La(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), X.leading = d, X.maxWait = b, X.trailing = e, Ub(a, b, X)
      }

      function ac(a, b) {
        return ma(b, 16, [a])
      }

      function bc(a) {
        return function() {
          return a
        }
      }

      function cc(a, b, c) {
        var d = typeof a;
        if (null == a || "function" == d) return ca(a, b, c);
        if ("object" != d) return ic(a);
        var e = md(a),
          f = e[0],
          g = a[f];
        return 1 != e.length || g !== g || La(g) ? function(b) {
          for (var c = e.length, d = !1; c-- && (d = ha(b[e[c]], a[e[c]], null, !0)););
          return d
        } : function(a) {
          var b = a[f];
          return g === b && (0 !== g || 1 / g == 1 / b)
        }
      }

      function dc(a) {
        return null == a ? "" : Dc(a).replace(td, oa)
      }

      function ec(a) {
        return a
      }

      function fc(a, b, c) {
        var d = !0,
          e = b && Ba(b);
        b && (c || e.length) || (null == c && (c = b), f = r, b = a, a = q, e = Ba(b)), c === !1 ? d = !1 : La(c) && "chain" in c && (d = c.chain);
        var f = a,
          g = Ka(f);
        db(e, function(c) {
          var e = a[c] = b[c];
          g && (f.prototype[c] = function() {
            var b = this.__chain__,
              c = this.__wrapped__,
              g = [c];
            Sc.apply(g, arguments);
            var h = e.apply(a, g);
            if (d || b) {
              if (c === h && La(h)) return this;
              h = new f(h), h.__chain__ = b
            }
            return h
          })
        })
      }

      function gc() {
        return c._ = Jc, this
      }

      function hc() {}

      function ic(a) {
        return function(b) {
          return b[a]
        }
      }

      function jc(a, b, c) {
        var d = null == a,
          e = null == b;
        if (null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1) {
          var f = ed();
          return cd(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b)
        }
        return ja(a, b)
      }

      function kc(a, b) {
        if (a) {
          var c = a[b];
          return Ka(c) ? a[b]() : c
        }
      }

      function lc(a, b, c) {
        var d = q.templateSettings;
        a = Dc(a || ""), c = wd({}, c, d);
        var e, f = wd({}, c.imports, d.imports),
          h = md(f),
          i = Ya(f),
          j = 0,
          k = c.interpolate || G,
          l = "__p += '",
          m = Cc((c.escape || G).source + "|" + k.source + "|" + (k === E ? B : G).source + "|" + (c.evaluate || G).source + "|$", "g");
        a.replace(m, function(b, c, d, f, h, i) {
          return d || (d = f), l += a.slice(j, i).replace(I, g), c && (l += "' +\n__e(" + c + ") +\n'"), h && (e = !0, l += "';\n" + h + ";\n__p += '"), d && (l += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), j = i + b.length, b
        }), l += "';\n";
        var n = c.variable,
          o = n;
        o || (n = "obj", l = "with (" + n + ") {\n" + l + "\n}\n"), l = (e ? l.replace(y, "") : l).replace(z, "$1").replace(A, "$1;"), l = "function(" + n + ") {\n" + (o ? "" : n + " || (" + n + " = {});\n") + "var __t, __p = '', __e = _.escape" + (e ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}";
        var r = "\n/*\n//# sourceURL=" + (c.sourceURL || "/lodash/template/source[" + L++ + "]") + "\n*/";
        try {
          var s = yc(h, "return " + l + r).apply(p, i)
        } catch (t) {
          throw t.source = l, t
        }
        return b ? s(b) : (s.source = l, s)
      }

      function mc(a, b, c) {
        a = (a = +a) > -1 ? a : 0;
        var d = -1,
          e = uc(a);
        for (b = ca(b, c, 1); ++d < a;) e[d] = b(d);
        return e
      }

      function nc(a) {
        return null == a ? "" : Dc(a).replace(sd, sa)
      }

      function oc(a) {
        var b = ++s;
        return Dc(null == a ? "" : a) + b
      }

      function pc(a) {
        return a = new r(a), a.__chain__ = !0, a
      }

      function qc(a, b) {
        return b(a), a
      }

      function rc() {
        return this.__chain__ = !0, this
      }

      function sc() {
        return Dc(this.__wrapped__)
      }

      function tc() {
        return this.__wrapped__
      }
      c = c ? fa.defaults(aa.Object(), c, fa.pick(aa, J)) : aa;
      var uc = c.Array,
        vc = c.Boolean,
        wc = c.Date,
        xc = c.Error,
        yc = c.Function,
        zc = c.Math,
        Ac = c.Number,
        Bc = c.Object,
        Cc = c.RegExp,
        Dc = c.String,
        Ec = c.TypeError,
        Fc = [],
        Gc = xc.prototype,
        Hc = Bc.prototype,
        Ic = Dc.prototype,
        Jc = c._,
        Kc = Hc.toString,
        Lc = Cc("^" + Dc(Kc).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
        Mc = zc.ceil,
        Nc = c.clearTimeout,
        Oc = zc.floor,
        Pc = yc.prototype.toString,
        Qc = qa(Qc = Bc.getPrototypeOf) && Qc,
        Rc = Hc.hasOwnProperty,
        Sc = Fc.push,
        Tc = Hc.propertyIsEnumerable,
        Uc = c.setTimeout,
        Vc = Fc.splice,
        Wc = Fc.unshift,
        Xc = function() {
          try {
            var a = {},
              b = qa(b = Bc.defineProperty) && b,
              c = b(a, a, a) && b
          } catch (d) {}
          return c
        }(),
        Yc = qa(Yc = Bc.create) && Yc,
        Zc = qa(Zc = uc.isArray) && Zc,
        $c = c.isFinite,
        _c = c.isNaN,
        ad = qa(ad = Bc.keys) && ad,
        bd = zc.max,
        cd = zc.min,
        dd = c.parseInt,
        ed = zc.random,
        fd = {};
      fd[N] = uc, fd[O] = vc, fd[P] = wc, fd[R] = yc, fd[T] = Bc, fd[S] = Ac, fd[U] = Cc, fd[V] = Dc;
      var gd = {};
      gd[N] = gd[P] = gd[S] = {
          constructor: !0,
          toLocaleString: !0,
          toString: !0,
          valueOf: !0
        }, gd[O] = gd[V] = {
          constructor: !0,
          toString: !0,
          valueOf: !0
        }, gd[Q] = gd[R] = gd[U] = {
          constructor: !0,
          toString: !0
        }, gd[T] = {
          constructor: !0
        },
        function() {
          for (var a = K.length; a--;) {
            var b = K[a];
            for (var c in gd) Rc.call(gd, c) && !Rc.call(gd[c], b) && (gd[c][b] = !1)
          }
        }(), r.prototype = q.prototype;
      var hd = q.support = {};
      ! function() {
        var a = function() {
            this.x = 1
          },
          b = {
            0: 1,
            length: 1
          },
          d = [];
        a.prototype = {
          valueOf: 1,
          y: 1
        };
        for (var e in new a) d.push(e);
        for (e in arguments);
        hd.argsClass = Kc.call(arguments) == M, hd.argsObject = arguments.constructor == Bc && !(arguments instanceof uc), hd.enumErrorProps = Tc.call(Gc, "message") || Tc.call(Gc, "name"), hd.enumPrototypes = Tc.call(a, "prototype"), hd.funcDecomp = !qa(c.WinRTError) && H.test(o), hd.funcNames = "string" == typeof yc.name, hd.nonEnumArgs = 0 != e, hd.nonEnumShadows = !/valueOf/.test(d), hd.ownLast = "x" != d[0], hd.spliceObjects = (Fc.splice.call(b, 0, 1), !b[0]), hd.unindexedChars = "x" [0] + Bc("x")[0] != "xx";
        try {
          hd.nodeClass = !(Kc.call(document) == T && !({
            toString: 0
          } + ""))
        } catch (f) {
          hd.nodeClass = !0
        }
      }(1), q.templateSettings = {
        escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: E,
        variable: "",
        imports: {
          _: q
        }
      };
      var id = function(a) {
        var b = "var index, iterable = " + a.firstArg + ", result = " + a.init + ";\nif (!iterable) return result;\n" + a.top + ";";
        a.array ? (b += "\nvar length = iterable.length; index = -1;\nif (" + a.array + ") {  ", hd.unindexedChars && (b += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), b += "\n  while (++index < length) {\n    " + a.loop + ";\n  }\n}\nelse {  ") : hd.nonEnumArgs && (b += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + a.loop + ";\n    }\n  } else {  "), hd.enumPrototypes && (b += "\n  var skipProto = typeof iterable == 'function';\n  "), hd.enumErrorProps && (b += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
        var c = [];
        if (hd.enumPrototypes && c.push('!(skipProto && index == "prototype")'), hd.enumErrorProps && c.push('!(skipErrorProps && (index == "message" || index == "name"))'), a.useHas && a.keys) b += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }  ";
        else if (b += "\n  for (index in iterable) {\n", a.useHas && c.push("hasOwnProperty.call(iterable, index)"), c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }    ", hd.nonEnumShadows) {
          for (b += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; k < 7; k++) b += "\n    index = '" + a.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", a.useHas || (b += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), b += ") {\n      " + a.loop + ";\n    }      ";
          b += "\n  }    "
        }
        return (a.array || hd.nonEnumArgs) && (b += "\n}"), b += a.bottom + ";\nreturn result"
      };
      Yc || (ba = function() {
        function a() {}
        return function(b) {
          if (La(b)) {
            a.prototype = b;
            var d = new a;
            a.prototype = null
          }
          return d || c.Object()
        }
      }());
      var jd = Xc ? function(a, b) {
        Y.value = b, Xc(a, "__bindData__", Y), Y.value = null
      } : hc;
      hd.argsClass || (ta = function(a) {
        return a && "object" == typeof a && "number" == typeof a.length && Rc.call(a, "callee") && !Tc.call(a, "callee") || !1
      });
      var kd = Zc || function(a) {
          return a && "object" == typeof a && "number" == typeof a.length && Kc.call(a) == N || !1
        },
        ld = na({
          args: "object",
          init: "[]",
          top: "if (!(objectTypes[typeof object])) return result",
          loop: "result.push(index)"
        }),
        md = ad ? function(a) {
          return La(a) ? hd.enumPrototypes && "function" == typeof a || hd.nonEnumArgs && a.length && ta(a) ? ld(a) : ad(a) : []
        } : ld,
        nd = {
          args: "collection, callback, thisArg",
          top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
          array: "typeof length == 'number'",
          keys: md,
          loop: "if (callback(iterable[index], index, collection) === false) return result"
        },
        od = {
          args: "object, source, guard",
          top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
          keys: md,
          loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
          bottom: "  }\n}"
        },
        pd = {
          top: "if (!objectTypes[typeof iterable]) return result;\n" + nd.top,
          array: !1
        },
        qd = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        },
        rd = Da(qd),
        sd = Cc("(" + md(rd).join("|") + ")", "g"),
        td = Cc("[" + md(qd).join("") + "]", "g"),
        ud = na(nd),
        vd = na(od, {
          top: od.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
          loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
        }),
        wd = na(od),
        xd = na(nd, pd, {
          useHas: !1
        }),
        yd = na(nd, pd);
      Ka(/x/) && (Ka = function(a) {
        return "function" == typeof a && Kc.call(a) == R
      });
      var zd = Qc ? function(a) {
          if (!a || Kc.call(a) != T || !hd.argsClass && ta(a)) return !1;
          var b = a.valueOf,
            c = qa(b) && (c = Qc(b)) && Qc(c);
          return c ? a == c || Qc(a) == c : ra(a)
        } : ra,
        Ad = la(function(a, b, c) {
          Rc.call(a, c) ? a[c]++ : a[c] = 1
        }),
        Bd = la(function(a, b, c) {
          (Rc.call(a, c) ? a[c] : a[c] = []).push(b)
        }),
        Cd = la(function(a, b, c) {
          a[c] = b
        }),
        Dd = gb,
        Ed = ab,
        Fd = qa(Fd = wc.now) && Fd || function() {
          return (new wc).getTime()
        },
        Gd = 8 == dd(x + "08") ? dd : function(a, b) {
          return dd(Qa(a) ? a.replace(F, "") : a, b || 0)
        };
      return q.after = Ob, q.assign = vd, q.at = Za, q.bind = Pb, q.bindAll = Qb, q.bindKey = Rb, q.chain = pc, q.compact = sb, q.compose = Sb, q.constant = bc, q.countBy = Ad, q.create = wa, q.createCallback = cc, q.curry = Tb, q.debounce = Ub, q.defaults = wd, q.defer = Vb, q.delay = Wb, q.difference = tb, q.filter = ab, q.flatten = xb, q.forEach = db, q.forEachRight = eb, q.forIn = xd, q.forInRight = za, q.forOwn = yd, q.forOwnRight = Aa, q.functions = Ba, q.groupBy = Bd, q.indexBy = Cd, q.initial = zb, q.intersection = Ab, q.invert = Da, q.invoke = fb, q.keys = md, q.map = gb, q.mapValues = Sa, q.max = hb, q.memoize = Xb, q.merge = Ta, q.min = ib, q.omit = Ua, q.once = Yb, q.pairs = Va, q.partial = Zb, q.partialRight = $b, q.pick = Wa, q.pluck = Dd, q.property = ic, q.pull = Db, q.range = Eb, q.reject = lb, q.remove = Fb, q.rest = Gb, q.shuffle = nb, q.sortBy = qb, q.tap = qc, q.throttle = _b, q.times = mc, q.toArray = rb, q.transform = Xa, q.union = Ib, q.uniq = Jb, q.values = Ya, q.where = Ed, q.without = Kb, q.wrap = ac, q.xor = Lb, q.zip = Mb, q.zipObject = Nb, q.collect = gb, q.drop = Gb, q.each = db, q.eachRight = eb, q.extend = vd, q.methods = Ba, q.object = Nb, q.select = ab, q.tail = Gb, q.unique = Jb, q.unzip = Mb, fc(q), q.clone = ua, q.cloneDeep = va, q.contains = $a, q.escape = dc, q.every = _a, q.find = bb, q.findIndex = ub, q.findKey = xa, q.findLast = cb, q.findLastIndex = vb, q.findLastKey = ya, q.has = Ca, q.identity = ec, q.indexOf = yb, q.isArguments = ta, q.isArray = kd, q.isBoolean = Ea, q.isDate = Fa, q.isElement = Ga, q.isEmpty = Ha, q.isEqual = Ia, q.isFinite = Ja, q.isFunction = Ka, q.isNaN = Ma, q.isNull = Na, q.isNumber = Oa, q.isObject = La, q.isPlainObject = zd, q.isRegExp = Pa, q.isString = Qa, q.isUndefined = Ra, q.lastIndexOf = Cb, q.mixin = fc, q.noConflict = gc, q.noop = hc, q.now = Fd, q.parseInt = Gd, q.random = jc, q.reduce = jb, q.reduceRight = kb, q.result = kc, q.runInContext = o, q.size = ob, q.some = pb, q.sortedIndex = Hb, q.template = lc, q.unescape = nc, q.uniqueId = oc, q.all = _a, q.any = pb, q.detect = bb, q.findWhere = bb, q.foldl = jb, q.foldr = kb, q.include = $a, q.inject = jb, fc(function() {
        var a = {};
        return yd(q, function(b, c) {
          q.prototype[c] || (a[c] = b)
        }), a
      }(), !1), q.first = wb, q.last = Bb, q.sample = mb, q.take = wb, q.head = wb, yd(q, function(a, b) {
        var c = "sample" !== b;
        q.prototype[b] || (q.prototype[b] = function(b, d) {
          var e = this.__chain__,
            f = a(this.__wrapped__, b, d);
          return e || null != b && (!d || c && "function" == typeof b) ? new r(f, e) : f
        })
      }), q.VERSION = "2.4.2", q.prototype.chain = rc, q.prototype.toString = sc, q.prototype.value = tc, q.prototype.valueOf = tc, ud(["join", "pop", "shift"], function(a) {
        var b = Fc[a];
        q.prototype[a] = function() {
          var a = this.__chain__,
            c = b.apply(this.__wrapped__, arguments);
          return a ? new r(c, a) : c
        }
      }), ud(["push", "reverse", "sort", "unshift"], function(a) {
        var b = Fc[a];
        q.prototype[a] = function() {
          return b.apply(this.__wrapped__, arguments), this
        }
      }), ud(["concat", "slice", "splice"], function(a) {
        var b = Fc[a];
        q.prototype[a] = function() {
          return new r(b.apply(this.__wrapped__, arguments), this.__chain__)
        }
      }), hd.spliceObjects || ud(["pop", "shift", "splice"], function(a) {
        var b = Fc[a],
          c = "splice" == a;
        q.prototype[a] = function() {
          var a = this.__chain__,
            d = this.__wrapped__,
            e = b.apply(d, arguments);
          return 0 === d.length && delete d[0], a || c ? new r(e, a) : e
        }
      }), q
    }
    var p, q = [],
      r = [],
      s = 0,
      t = {},
      u = +new Date + "",
      v = 75,
      w = 40,
      x = " 	\fÂ \ufeff\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€",
      y = /\b__p \+= '';/g,
      z = /\b(__p \+=) '' \+/g,
      A = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      B = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      C = /\w*$/,
      D = /^\s*function[ \n\r\t]+\w/,
      E = /<%=([\s\S]+?)%>/g,
      F = RegExp("^[" + x + "]*0+(?=.$)"),
      G = /($^)/,
      H = /\bthis\b/,
      I = /['\n\r\t\u2028\u2029\\]/g,
      J = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
      K = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      L = 0,
      M = "[object Arguments]",
      N = "[object Array]",
      O = "[object Boolean]",
      P = "[object Date]",
      Q = "[object Error]",
      R = "[object Function]",
      S = "[object Number]",
      T = "[object Object]",
      U = "[object RegExp]",
      V = "[object String]",
      W = {};
    W[R] = !1, W[M] = W[N] = W[O] = W[P] = W[S] = W[T] = W[U] = W[V] = !0;
    var X = {
        leading: !1,
        maxWait: 0,
        trailing: !1
      },
      Y = {
        configurable: !1,
        enumerable: !1,
        value: null,
        writable: !1
      },
      Z = {
        args: "",
        array: null,
        bottom: "",
        firstArg: "",
        init: "",
        keys: null,
        loop: "",
        shadowedProps: null,
        support: null,
        top: "",
        useHas: !1
      },
      $ = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
      },
      _ = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      aa = $[typeof window] && window || this,
      ba = $[typeof exports] && exports && !exports.nodeType && exports,
      ca = $[typeof module] && module && !module.nodeType && module,
      da = ca && ca.exports === ba && ba,
      ea = $[typeof global] && global;
    !ea || ea.global !== ea && ea.window !== ea || (aa = ea);
    var fa = o();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (aa._ = fa, define(function() {
      return fa
    })) : ba && ca ? da ? (ca.exports = fa)._ = fa : ba._ = fa : aa._ = fa
  }.call(this),
  function() {
    function a(a, b, c) {
      function d(d, k) {
        var l = k.dirPaginate,
          m = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
          n = /\|\s*itemsPerPage\s*:\s*(.*\(\s*\w*\)|([^\)]*?(?=\s+as\s+))|[^\)]*)/;
        if (null === m[2].match(n)) throw "pagination directive: the 'itemsPerPage' filter must be set.";
        var o = m[2].replace(n, ""),
          p = b(o);
        g(d);
        var q = k.paginationId || j;
        return c.registerInstance(q),
          function(d, g, k) {
            var m = b(k.paginationId)(d) || k.paginationId || j;
            c.registerInstance(m);
            var n = e(l, m);
            f(g, k, n), h(g);
            var o = a(g),
              q = i(d, k, m);
            c.setCurrentPageParser(m, q, d), "undefined" != typeof k.totalItems ? (c.setAsyncModeTrue(m), d.$watch(function() {
              return b(k.totalItems)(d)
            }, function(a) {
              a >= 0 && c.setCollectionLength(m, a)
            })) : d.$watchCollection(function() {
              return p(d)
            }, function(a) {
              a && c.setCollectionLength(m, a.length)
            }), o(d)
          }
      }

      function e(a, b) {
        var c, d = !!a.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);
        return c = b === j || d ? a : a.replace(/(\|\s*itemsPerPage\s*:\s*[^|\s]*)/, "$1 : '" + b + "'")
      }

      function f(a, b, c) {
        a[0].hasAttribute("dir-paginate-start") || a[0].hasAttribute("data-dir-paginate-start") ? (b.$set("ngRepeatStart", c), a.eq(a.length - 1).attr("ng-repeat-end", !0)) : b.$set("ngRepeat", c)
      }

      function g(a) {
        angular.forEach(a, function(a) {
          1 === a.nodeType && angular.element(a).attr("dir-paginate-no-compile", !0)
        })
      }

      function h(a) {
        angular.forEach(a, function(a) {
          1 === a.nodeType && angular.element(a).removeAttr("dir-paginate-no-compile")
        }), a.eq(0).removeAttr("dir-paginate-start").removeAttr("dir-paginate").removeAttr("data-dir-paginate-start").removeAttr("data-dir-paginate"), a.eq(a.length - 1).removeAttr("dir-paginate-end").removeAttr("data-dir-paginate-end")
      }

      function i(a, c, d) {
        var e;
        if (c.currentPage) e = b(c.currentPage);
        else {
          var f = (d + "__currentPage").replace(/\W/g, "_");
          a[f] = 1, e = b(f)
        }
        return e
      }
      return {
        terminal: !0,
        multiElement: !0,
        priority: 100,
        compile: d
      }
    }

    function b() {
      return {
        priority: 5e3,
        terminal: !0
      }
    }

    function c(a) {
      a.put("angularUtils.directives.dirPagination.template", '<ul class="pagination" ng-if="1 < pages.length || !autoHide"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' || ( ! autoHide && pages.length === 1 ) }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>')
    }

    function d(a, b) {
      function c(b, c, e) {
        function g(c) {
          a.isRegistered(m) && k(c) && (b.pages = d(c, a.getCollectionLength(m), a.getItemsPerPage(m), o), b.pagination.current = c, i(), b.onPageChange && b.onPageChange({
            newPageNumber: c
          }))
        }

        function h() {
          if (a.isRegistered(m)) {
            var c = parseInt(a.getCurrentPage(m)) || 1;
            b.pages = d(c, a.getCollectionLength(m), a.getItemsPerPage(m), o), b.pagination.current = c, b.pagination.last = b.pages[b.pages.length - 1], b.pagination.last < b.pagination.current ? b.setCurrent(b.pagination.last) : i()
          }
        }

        function i() {
          if (a.isRegistered(m)) {
            var c = a.getCurrentPage(m),
              d = a.getItemsPerPage(m),
              e = a.getCollectionLength(m);
            b.range.lower = (c - 1) * d + 1, b.range.upper = Math.min(c * d, e), b.range.total = e
          }
        }

        function k(a) {
          return f.test(a) && a > 0 && a <= b.pagination.last
        }
        var l = e.paginationId || j,
          m = b.paginationId || e.paginationId || j;
        if (!a.isRegistered(m) && !a.isRegistered(l)) {
          var n = m !== j ? " (id: " + m + ") " : " ";
          console.warn("Pagination directive: the pagination controls" + n + "cannot be used without the corresponding pagination directive, which was not found at link time.")
        }
        b.maxSize || (b.maxSize = 9), b.autoHide = void 0 === b.autoHide ? !0 : b.autoHide, b.directionLinks = angular.isDefined(e.directionLinks) ? b.$parent.$eval(e.directionLinks) : !0, b.boundaryLinks = angular.isDefined(e.boundaryLinks) ? b.$parent.$eval(e.boundaryLinks) : !1;
        var o = Math.max(b.maxSize, 5);
        b.pages = [], b.pagination = {
          last: 1,
          current: 1
        }, b.range = {
          lower: 1,
          upper: 1,
          total: 1
        }, b.$watch(function() {
          return a.isRegistered(m) ? (a.getCollectionLength(m) + 1) * a.getItemsPerPage(m) : void 0
        }, function(a) {
          a > 0 && h()
        }), b.$watch(function() {
          return a.isRegistered(m) ? a.getItemsPerPage(m) : void 0
        }, function(a, c) {
          a != c && "undefined" != typeof c && g(b.pagination.current)
        }), b.$watch(function() {
          return a.isRegistered(m) ? a.getCurrentPage(m) : void 0
        }, function(a, b) {
          a != b && g(a)
        }), b.setCurrent = function(b) {
          a.isRegistered(m) && k(b) && (b = parseInt(b, 10), a.setCurrentPage(m, b))
        }, b.tracker = function(a, b) {
          return a + "_" + b
        }
      }

      function d(a, b, c, d) {
        var f, g = [],
          h = Math.ceil(b / c),
          i = Math.ceil(d / 2);
        f = i >= a ? "start" : a > h - i ? "end" : "middle";
        for (var j = h > d, k = 1; h >= k && d >= k;) {
          var l = e(k, a, d, h),
            m = 2 === k && ("middle" === f || "end" === f),
            n = k === d - 1 && ("middle" === f || "start" === f);
          j && (m || n) ? g.push("...") : g.push(l), k++
        }
        return g
      }

      function e(a, b, c, d) {
        var e = Math.ceil(c / 2);
        return a === c ? d : 1 === a ? a : d > c ? b > d - e ? d - c + a : b > e ? b - e + a : a : a
      }
      var f = /^\d+$/;
      return {
        restrict: "AE",
        templateUrl: function(a, c) {
          return c.templateUrl || b.getPath()
        },
        scope: {
          maxSize: "=?",
          onPageChange: "&?",
          paginationId: "=?",
          autoHide: "=?"
        },
        link: c
      }
    }

    function e(a) {
      return function(b, c, d) {
        if ("undefined" == typeof d && (d = j), !a.isRegistered(d)) throw "pagination directive: the itemsPerPage id argument (id: " + d + ") does not match a registered pagination-id.";
        var e, g;
        if (angular.isObject(b)) {
          if (c = parseInt(c) || 9999999999, g = a.isAsyncMode(d) ? 0 : (a.getCurrentPage(d) - 1) * c, e = g + c, a.setItemsPerPage(d, c), b instanceof Array) return b.slice(g, e);
          var h = {};
          return angular.forEach(f(b).slice(g, e), function(a) {
            h[a] = b[a]
          }), h
        }
        return b
      }
    }

    function f(a) {
      if (Object.keys) return Object.keys(a);
      var b = [];
      for (var c in a) a.hasOwnProperty(c) && b.push(c);
      return b
    }

    function g() {
      var a, b = {};
      this.registerInstance = function(c) {
        "undefined" == typeof b[c] && (b[c] = {
          asyncMode: !1
        }, a = c)
      }, this.isRegistered = function(a) {
        return "undefined" != typeof b[a]
      }, this.getLastInstanceId = function() {
        return a
      }, this.setCurrentPageParser = function(a, c, d) {
        b[a].currentPageParser = c, b[a].context = d
      }, this.setCurrentPage = function(a, c) {
        b[a].currentPageParser.assign(b[a].context, c)
      }, this.getCurrentPage = function(a) {
        var c = b[a].currentPageParser;
        return c ? c(b[a].context) : 1
      }, this.setItemsPerPage = function(a, c) {
        b[a].itemsPerPage = c
      }, this.getItemsPerPage = function(a) {
        return b[a].itemsPerPage
      }, this.setCollectionLength = function(a, c) {
        b[a].collectionLength = c
      }, this.getCollectionLength = function(a) {
        return b[a].collectionLength
      }, this.setAsyncModeTrue = function(a) {
        b[a].asyncMode = !0
      }, this.isAsyncMode = function(a) {
        return b[a].asyncMode
      }
    }

    function h() {
      var a = "angularUtils.directives.dirPagination.template";
      this.setPath = function(b) {
        a = b
      }, this.$get = function() {
        return {
          getPath: function() {
            return a
          }
        }
      }
    }
    var i = "angularUtils.directives.dirPagination",
      j = "__default";
    angular.module(i, []).directive("dirPaginate", ["$compile", "$parse", "paginationService", a]).directive("dirPaginateNoCompile", b).directive("dirPaginationControls", ["paginationService", "paginationTemplate", d]).filter("itemsPerPage", ["paginationService", e]).service("paginationService", g).provider("paginationTemplate", h).run(["$templateCache", c])
  }();
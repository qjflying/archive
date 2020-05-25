!function (e) {
    function n(n) {
        for (var t, o, i = n[0], a = n[1], u = 0, c = []; u < i.length; u++) o = i[u], r[o] && c.push(r[o][0]), r[o] = 0;
        for (t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
        for (s && s(n); c.length;) c.shift()()
    }

    var t = {}, r = {5: 0};

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }

    o.e = function (e) {
        var n = [], t = r[e];
        if (0 !== t) if (t) n.push(t[2]); else {
            var i = new Promise(function (n, o) {
                t = r[e] = [n, o]
            });
            n.push(t[2] = i);
            var a, u = document.getElementsByTagName("head")[0], s = document.createElement("script");
            s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.src = function (e) {
                return o.p + "javascripts/" + ({
                    42: "en.account",
                    43: "en.buy",
                    44: "en.common",
                    45: "en.contact",
                    46: "en.download",
                    47: "en.error",
                    48: "en.faq",
                    49: "en.footer",
                    50: "en.haeder",
                    51: "en.header",
                    52: "en.home",
                    53: "en.home_old",
                    54: "en.join_team",
                    55: "en.mobile",
                    56: "en.newsletter",
                    57: "en.page_error",
                    58: "en.pricing",
                    59: "en.redeem",
                    60: "en.share",
                    61: "en.signin",
                    62: "en.sitemap",
                    63: "en.thankyou",
                    64: "en.xmind8",
                    65: "en.xmind_cxm",
                    66: "en.zen",
                    67: "en.zen_old",
                    68: "cn.account",
                    69: "cn.buy",
                    70: "cn.common",
                    71: "cn.contact",
                    72: "cn.download",
                    73: "cn.error",
                    74: "cn.faq",
                    75: "cn.footer",
                    76: "cn.haeder",
                    77: "cn.header",
                    78: "cn.home",
                    79: "cn.home_old",
                    80: "cn.join_team",
                    81: "cn.mobile",
                    82: "cn.newsletter",
                    83: "cn.page_error",
                    84: "cn.pricing",
                    85: "cn.redeem",
                    86: "cn.share",
                    87: "cn.signin",
                    88: "cn.sitemap",
                    89: "cn.thankyou",
                    90: "cn.xmind8",
                    91: "cn.xmind_cxm",
                    92: "cn.zen",
                    93: "cn.zen_old",
                    94: "fr.account",
                    95: "fr.buy",
                    96: "fr.common",
                    97: "fr.contact",
                    98: "fr.download",
                    99: "fr.error",
                    100: "fr.faq",
                    101: "fr.footer",
                    102: "fr.haeder",
                    103: "fr.header",
                    104: "fr.home",
                    105: "fr.home_old",
                    106: "fr.join_team",
                    107: "fr.mobile",
                    108: "fr.newsletter",
                    109: "fr.page_error",
                    110: "fr.pricing",
                    111: "fr.redeem",
                    112: "fr.share",
                    113: "fr.signin",
                    114: "fr.sitemap",
                    115: "fr.thankyou",
                    116: "fr.xmind8",
                    117: "fr.xmind_cxm",
                    118: "fr.zen",
                    119: "fr.zen_old",
                    120: "de.account",
                    121: "de.buy",
                    122: "de.common",
                    123: "de.contact",
                    124: "de.download",
                    125: "de.error",
                    126: "de.faq",
                    127: "de.footer",
                    128: "de.haeder",
                    129: "de.header",
                    130: "de.home",
                    131: "de.home_old",
                    132: "de.join_team",
                    133: "de.mobile",
                    134: "de.newsletter",
                    135: "de.page_error",
                    136: "de.pricing",
                    137: "de.redeem",
                    138: "de.share",
                    139: "de.signin",
                    140: "de.sitemap",
                    141: "de.thankyou",
                    142: "de.xmind8",
                    143: "de.xmind_cxm",
                    144: "de.zen",
                    145: "de.zen_old"
                }[e] || e) + "." + {
                    42: "c12f7e2a7d",
                    43: "3120d2d029",
                    44: "963f94281c",
                    45: "91bd132c75",
                    46: "706715a77f",
                    47: "e3604f743b",
                    48: "b28e59861a",
                    49: "321d57a638",
                    50: "f47b51e2dd",
                    51: "9cf3969f17",
                    52: "8803a9d35b",
                    53: "fb11c0ecab",
                    54: "46cf802554",
                    55: "d39ef24340",
                    56: "357bdf06af",
                    57: "5b6a201ab9",
                    58: "81d3b0b5e0",
                    59: "fc16a03540",
                    60: "7931c2e1ba",
                    61: "87da0c9fff",
                    62: "9635fb0656",
                    63: "2be46fc206",
                    64: "c9ddeb612e",
                    65: "756ecbe340",
                    66: "65afe16528",
                    67: "4c4b6ae6e9",
                    68: "78d61a7ed3",
                    69: "e6dfaf3c21",
                    70: "8cbc1b13c4",
                    71: "5e4288804d",
                    72: "6d7ab952ba",
                    73: "bd9303b946",
                    74: "19c14334f9",
                    75: "2000e02193",
                    76: "5c64d194af",
                    77: "57a078a56f",
                    78: "40560464d1",
                    79: "5cd88e1323",
                    80: "f515d7cbd2",
                    81: "3caf5357ac",
                    82: "fa66ecb929",
                    83: "5227e93b06",
                    84: "fbf14718f4",
                    85: "8073fe6605",
                    86: "c040a51d23",
                    87: "35777424f1",
                    88: "b2b9f3b628",
                    89: "2424c51ae0",
                    90: "6fb0c879d4",
                    91: "719d2ff5ea",
                    92: "c51acd5cea",
                    93: "f761118998",
                    94: "c7667bde52",
                    95: "15c7d23285",
                    96: "1cfec8b9e3",
                    97: "cff674e2ce",
                    98: "793f061662",
                    99: "2856afb10a",
                    100: "ae2bdf453d",
                    101: "ea541a5b2a",
                    102: "94bce62e47",
                    103: "0b131be675",
                    104: "0e6a82ecac",
                    105: "2ee802b7bd",
                    106: "74dfc4b458",
                    107: "782aa6ebf7",
                    108: "8b3eae9f12",
                    109: "f8c9028790",
                    110: "98e4891a38",
                    111: "2deac86975",
                    112: "7969a62b87",
                    113: "fd5347ece9",
                    114: "0abd4b7b01",
                    115: "b5c4a76ab0",
                    116: "56173cea6c",
                    117: "3771130943",
                    118: "374d385ea2",
                    119: "450501ee7b",
                    120: "ebf46982b5",
                    121: "08d2821cc2",
                    122: "e34c70320d",
                    123: "1e4fb86234",
                    124: "886967fade",
                    125: "5a45960658",
                    126: "824f590ade",
                    127: "078feb2587",
                    128: "aed727b587",
                    129: "6e5c825cba",
                    130: "cf5d870a68",
                    131: "e954282330",
                    132: "5165a7c69e",
                    133: "ca2374ebac",
                    134: "6f9ad2b59a",
                    135: "e500b3c8d2",
                    136: "7470d123f0",
                    137: "f22f559b45",
                    138: "e4ba150724",
                    139: "b986bbbcae",
                    140: "84dc6baf28",
                    141: "b580d1a8dd",
                    142: "0dc81bc49d",
                    143: "c7949545c5",
                    144: "6350ed2b0c",
                    145: "5cfdbcc3ee"
                }[e] + ".js"
            }(e), a = function (n) {
                s.onerror = s.onload = null, clearTimeout(c);
                var t = r[e];
                if (0 !== t) {
                    if (t) {
                        var o = n && ("load" === n.type ? "missing" : n.type), i = n && n.target && n.target.src,
                            a = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
                        a.type = o, a.request = i, t[1](a)
                    }
                    r[e] = void 0
                }
            };
            var c = setTimeout(function () {
                a({type: "timeout", target: s})
            }, 12e4);
            s.onerror = s.onload = a, u.appendChild(s)
        }
        return Promise.all(n)
    }, o.m = e, o.c = t, o.d = function (e, n, t) {
        o.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: t})
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (e, n) {
        if (1 & n && (e = o(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (o.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var r in e) o.d(t, r, function (n) {
            return e[n]
        }.bind(null, r));
        return t
    }, o.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(n, "a", n), n
    }, o.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, o.p = "https://assets.xmind.net/www/", o.oe = function (e) {
        throw console.error(e), e
    };
    var i = window.wepbackJsonp1576120280698 = window.wepbackJsonp1576120280698 || [], a = i.push.bind(i);
    i.push = n, i = i.slice();
    for (var u = 0; u < i.length; u++) n(i[u]);
    var s = a;
    o(o.s = 138)
}({
    138: function (e, n, t) {
        "use strict";
        t(139), t(141), t(142), t(143), t(144), t(145), window.mode = $("html").attr("mode")
    }, 139: function (e, n, t) {
        "use strict";

        function r(e) {
            return function () {
                var n = e.apply(this, arguments);
                return new Promise(function (e, t) {
                    return function r(o, i) {
                        try {
                            var a = n[o](i), u = a.value
                        } catch (e) {
                            return void t(e)
                        }
                        if (!a.done) return Promise.resolve(u).then(function (e) {
                            r("next", e)
                        }, function (e) {
                            r("throw", e)
                        });
                        e(u)
                    }("next")
                })
            }
        }

        Object.defineProperty(n, "__esModule", {value: !0}), window.siteMode = $("html").attr("site-mode"), window.lang = $("html").attr("lang");
        var o, i, a = window.lang || window.siteMode, u = t(190).default, s = t(140),
            c = (o = r(regeneratorRuntime.mark(function e(n, t) {
                var r, o, i;
                return regeneratorRuntime.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, s[n][t]();
                        case 2:
                            return r = e.sent, o = r.default, (i = {})[t] = o, e.abrupt("return", i);
                        case 7:
                        case"end":
                            return e.stop()
                    }
                }, e, void 0)
            })), function (e, n) {
                return o.apply(this, arguments)
            }), p = (i = r(regeneratorRuntime.mark(function e(n) {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, u.init({lng: a, fallbackLng: "en"});
                        case 2:
                            return t = n.map(function () {
                                var e = r(regeneratorRuntime.mark(function e(n) {
                                    var t, r;
                                    return regeneratorRuntime.wrap(function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, c(a, n);
                                            case 2:
                                                if (t = e.sent, "cn" === a || "en" === a) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.next = 6, c("en", n);
                                            case 6:
                                                r = e.sent, u.addResourceBundle("en", "translation", r);
                                            case 8:
                                                return e.abrupt("return", u.addResourceBundle(a, "translation", t));
                                            case 9:
                                            case"end":
                                                return e.stop()
                                        }
                                    }, e, void 0)
                                }));
                                return function (n) {
                                    return e.apply(this, arguments)
                                }
                            }()), e.next = 5, Promise.all(t);
                        case 5:
                            return e.abrupt("return", u);
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }, e, void 0)
            })), function (e) {
                return i.apply(this, arguments)
            });
        window.loadI18nextAsync = p, n.default = {loadI18nextAsync: p}
    }, 140: function (e, n, t) {
        "use strict";

        function r(e) {
            return function () {
                var n = e.apply(this, arguments);
                return new Promise(function (e, t) {
                    return function r(o, i) {
                        try {
                            var a = n[o](i), u = a.value
                        } catch (e) {
                            return void t(e)
                        }
                        if (!a.done) return Promise.resolve(u).then(function (e) {
                            r("next", e)
                        }, function (e) {
                            r("throw", e)
                        });
                        e(u)
                    }("next")
                })
            }
        }

        e.exports = {
            en: {
                account: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(42).then(t.t.bind(null, 191, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), buy: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(43).then(t.t.bind(null, 192, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), common: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(44).then(t.t.bind(null, 193, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), contact: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(45).then(t.t.bind(null, 194, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), download: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(46).then(t.t.bind(null, 195, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), error: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(47).then(t.t.bind(null, 196, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), faq: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(48).then(t.t.bind(null, 197, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), footer: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(49).then(t.t.bind(null, 198, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), haeder: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(50).then(t.t.bind(null, 199, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), header: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(51).then(t.t.bind(null, 200, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), home: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(52).then(t.t.bind(null, 201, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), home_old: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(53).then(t.t.bind(null, 202, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), join_team: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(54).then(t.t.bind(null, 203, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), mobile: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(55).then(t.t.bind(null, 204, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), newsletter: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(56).then(t.t.bind(null, 205, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), page_error: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(57).then(t.t.bind(null, 206, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), pricing: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(58).then(t.t.bind(null, 207, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), redeem: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(59).then(t.t.bind(null, 208, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), share: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(60).then(t.t.bind(null, 209, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), signin: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(61).then(t.t.bind(null, 210, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), sitemap: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(62).then(t.t.bind(null, 211, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), thankyou: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(63).then(t.t.bind(null, 212, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), xmind8: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(64).then(t.t.bind(null, 213, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), xmind_cxm: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(65).then(t.t.bind(null, 214, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), zen: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(66).then(t.t.bind(null, 215, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), zen_old: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(67).then(t.t.bind(null, 216, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, cn: {
                account: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(68).then(t.t.bind(null, 217, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), buy: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(69).then(t.t.bind(null, 218, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), common: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(70).then(t.t.bind(null, 219, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), contact: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(71).then(t.t.bind(null, 220, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), download: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(72).then(t.t.bind(null, 221, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), error: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(73).then(t.t.bind(null, 222, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), faq: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(74).then(t.t.bind(null, 223, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), footer: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(75).then(t.t.bind(null, 224, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), haeder: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(76).then(t.t.bind(null, 225, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), header: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(77).then(t.t.bind(null, 226, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), home: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(78).then(t.t.bind(null, 227, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), home_old: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(79).then(t.t.bind(null, 228, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), join_team: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(80).then(t.t.bind(null, 229, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), mobile: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(81).then(t.t.bind(null, 230, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), newsletter: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(82).then(t.t.bind(null, 231, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), page_error: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(83).then(t.t.bind(null, 232, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), pricing: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(84).then(t.t.bind(null, 233, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), redeem: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(85).then(t.t.bind(null, 234, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), share: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(86).then(t.t.bind(null, 235, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), signin: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(87).then(t.t.bind(null, 236, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), sitemap: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(88).then(t.t.bind(null, 237, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), thankyou: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(89).then(t.t.bind(null, 238, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), xmind8: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(90).then(t.t.bind(null, 239, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), xmind_cxm: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(91).then(t.t.bind(null, 240, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), zen: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(92).then(t.t.bind(null, 241, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), zen_old: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(93).then(t.t.bind(null, 242, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, fr: {
                account: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(94).then(t.t.bind(null, 243, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), buy: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(95).then(t.t.bind(null, 244, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), common: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(96).then(t.t.bind(null, 245, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), contact: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(97).then(t.t.bind(null, 246, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), download: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(98).then(t.t.bind(null, 247, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), error: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(99).then(t.t.bind(null, 248, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), faq: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(100).then(t.t.bind(null, 249, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), footer: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(101).then(t.t.bind(null, 250, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), haeder: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(102).then(t.t.bind(null, 251, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), header: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(103).then(t.t.bind(null, 252, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), home: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(104).then(t.t.bind(null, 253, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), home_old: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(105).then(t.t.bind(null, 254, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), join_team: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(106).then(t.t.bind(null, 255, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), mobile: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(107).then(t.t.bind(null, 256, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), newsletter: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(108).then(t.t.bind(null, 257, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), page_error: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(109).then(t.t.bind(null, 258, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), pricing: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(110).then(t.t.bind(null, 259, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), redeem: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(111).then(t.t.bind(null, 260, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), share: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(112).then(t.t.bind(null, 261, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), signin: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(113).then(t.t.bind(null, 262, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), sitemap: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(114).then(t.t.bind(null, 263, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), thankyou: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(115).then(t.t.bind(null, 264, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), xmind8: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(116).then(t.t.bind(null, 265, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), xmind_cxm: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(117).then(t.t.bind(null, 266, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), zen: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(118).then(t.t.bind(null, 267, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), zen_old: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(119).then(t.t.bind(null, 268, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, de: {
                account: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(120).then(t.t.bind(null, 269, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), buy: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(121).then(t.t.bind(null, 270, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), common: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(122).then(t.t.bind(null, 271, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), contact: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(123).then(t.t.bind(null, 272, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), download: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(124).then(t.t.bind(null, 273, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), error: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(125).then(t.t.bind(null, 274, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), faq: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(126).then(t.t.bind(null, 275, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), footer: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(127).then(t.t.bind(null, 276, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), haeder: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(128).then(t.t.bind(null, 277, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), header: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(129).then(t.t.bind(null, 278, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), home: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(130).then(t.t.bind(null, 279, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), home_old: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(131).then(t.t.bind(null, 280, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), join_team: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(132).then(t.t.bind(null, 281, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), mobile: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(133).then(t.t.bind(null, 282, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), newsletter: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(134).then(t.t.bind(null, 283, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), page_error: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(135).then(t.t.bind(null, 284, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), pricing: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(136).then(t.t.bind(null, 285, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), redeem: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(137).then(t.t.bind(null, 286, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), share: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(138).then(t.t.bind(null, 287, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), signin: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(139).then(t.t.bind(null, 288, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), sitemap: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(140).then(t.t.bind(null, 289, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), thankyou: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(141).then(t.t.bind(null, 290, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), xmind8: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(142).then(t.t.bind(null, 291, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), xmind_cxm: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(143).then(t.t.bind(null, 292, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), zen: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(144).then(t.t.bind(null, 293, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), zen_old: function () {
                    var e = r(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.e(145).then(t.t.bind(null, 294, 3));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }
        }
    }, 141: function (e, n, t) {
        "use strict";
        var r = function () {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (n, t, r) {
                return t && e(n.prototype, t), r && e(n, r), n
            }
        }();

        function o(e) {
            return function () {
                var n = e.apply(this, arguments);
                return new Promise(function (e, t) {
                    return function r(o, i) {
                        try {
                            var a = n[o](i), u = a.value
                        } catch (e) {
                            return void t(e)
                        }
                        if (!a.done) return Promise.resolve(u).then(function (e) {
                            r("next", e)
                        }, function (e) {
                            r("throw", e)
                        });
                        e(u)
                    }("next")
                })
            }
        }

        var i = loadI18nextAsync(["common", "error"]), a = function () {
            var e, n = /\+/g, t = /([^&=]+)=?([^&]*)/g, r = function (e) {
                return decodeURIComponent(e.replace(n, " "))
            }, o = window.location.search.substring(1);
            for (window.urlParams = {}; e = t.exec(o);) window.urlParams[r(e[1])] = r(e[2])
        };
        a(), $(window).on("popstate", a), $(function () {
            var e = urlParams.ref;
            e && Cookies.set("ref", e, {expires: 30, path: "/", domain: "en" === siteMode ? ".xmind.net" : ".xmind.cn"})
        });
        var u, s, c = (u = o(regeneratorRuntime.mark(function e(n) {
            var t, r;
            return regeneratorRuntime.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (!(t = window.urlParams).token || t.token === window.$acc.token) {
                            e.next = 6;
                            break
                        }
                        return window.$acc.isSignin() && window.$acc.signOut(!0), r = location.href.replace(/token=[^&]+(&|\b)/, ""), location.href = "/signin/?next=" + encodeURIComponent(r), e.abrupt("return");
                    case 6:
                        if (window.$acc.isSignin()) {
                            e.next = 13;
                            break
                        }
                        return e.t0 = window.utils.Toast, e.next = 10, i;
                    case 10:
                        e.t1 = e.sent.t("common._going_2_signin"), e.t0.show.call(e.t0, e.t1), window.$xm.redirect();
                    case 13:
                        n && n();
                    case 14:
                    case"end":
                        return e.stop()
                }
            }, e, this)
        })), function (e) {
            return u.apply(this, arguments)
        }), p = window.request = function (e) {
            var n = e.url, t = e.method, r = void 0 === t ? "GET" : t, o = e.body, i = void 0 === o ? null : o,
                a = e.callback;
            return i && !e.method && (r = "POST"), new Promise(function (e, t) {
                $.ajax({
                    url: n,
                    method: r,
                    contentType: "application/json",
                    data: i ? JSON.stringify(i) : null
                }).done(function (n) {
                    a && a(null, n), e(n)
                }).fail(function (e, n, r) {
                    dev.log("Request Failed"), a && a(r, null), t(r)
                })
            })
        }, f = {
            en: {years: "years", year: "year", months: "months", month: "month"},
            de: {years: "Jahre", year: "Jahr", months: "Monate", month: "Monat"},
            cn: {year: "年", month: "个月"}
        };

        function l(e) {
            this.setting = e, this.$container = $("<div></div>").addClass("xm-dialog"), this.$title = $("<h5></h5>").addClass("xm-dialog__title").appendTo(this.$container), this.$paragraphs = $("<div></div>").addClass("xm-dialog__paragraphs").appendTo(this.$container), this.$footer = $("<div></div>").addClass("xm-dialog__footer").appendTo(this.$container), this.$closeBtn = $("<i></i>").addClass("xm-dialog__close-btn icon-cross").appendTo(this.$container), this.$confirm = $("<div></div>").addClass("xm-dialog__confirm btn btn-sm btn-primary").appendTo(this.$footer), this.$cancel = $("<div></div>").addClass("xm-dialog__cancel btn btn-sm btn-outline-primary").appendTo(this.$footer), this.update(e)
        }

        $.setPageMinHeight = function (e) {
            var n = $(e || "#global_footer"), t = $("<div>"), r = 0;

            function o() {
                var e = $(window).height(), o = n.offset().top + n.outerHeight();
                o != e && (r = e - o + r, t.css("height", r + "px"))
            }

            return t.css({
                width: "100%",
                "background-color": n.prev().css("background-color")
            }), t.insertBefore(n), $(window).on("resize load", o), $(o), o
        }, l.prototype.update = (s = o(regeneratorRuntime.mark(function e(n) {
            var t, r, o, a, u, s, c, p, f, l;
            return regeneratorRuntime.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        for (n = Object.assign(this.setting, n), t = this, this.$title.html(n.title), this.$paragraphs.empty(), r = !0, o = !1, a = void 0, e.prev = 7, u = (n.contents || [])[Symbol.iterator](); !(r = (s = u.next()).done); r = !0) c = s.value, $("<p></p>").appendTo(this.$paragraphs).html(c);
                        e.next = 15;
                        break;
                    case 11:
                        e.prev = 11, e.t0 = e.catch(7), o = !0, a = e.t0;
                    case 15:
                        e.prev = 15, e.prev = 16, !r && u.return && u.return();
                    case 18:
                        if (e.prev = 18, !o) {
                            e.next = 21;
                            break
                        }
                        throw a;
                    case 21:
                        return e.finish(18);
                    case 22:
                        return e.finish(15);
                    case 23:
                        if (e.t1 = this.$cancel, e.t2 = n.cancelText, e.t2) {
                            e.next = 29;
                            break
                        }
                        return e.next = 28, i;
                    case 28:
                        e.t2 = e.sent.t("common.Cancel");
                    case 29:
                        if (e.t3 = e.t2, e.t1.text.call(e.t1, e.t3), e.t4 = this.$confirm, e.t5 = n.confirmText, e.t5) {
                            e.next = 37;
                            break
                        }
                        return e.next = 36, i;
                    case 36:
                        e.t5 = e.sent.t("common.Confirm");
                    case 37:
                        e.t6 = e.t5, e.t4.text.call(e.t4, e.t6), n.hideCancel ? this.$cancel.addClass("d-none") : this.$cancel.removeClass("d-none"), n.hideConfirm ? this.$confirm.addClass("d-none") : this.$confirm.removeClass("d-none"), n.hideClose ? this.$closeBtn.addClass("d-none") : this.$closeBtn.removeClass("d-none"), this.$cancel.off("click"), this.$confirm.off("click"), p = n.cancelAction || this.hide.bind(this), f = n.confirmAction || this.hide.bind(this), l = n.closeAction || this.hide.bind(this), this.$closeBtn.click(function () {
                            return l(t)
                        }), this.$cancel.click(function () {
                            return p(t)
                        }), this.$confirm.click(function () {
                            return f(t)
                        });
                    case 50:
                    case"end":
                        return e.stop()
                }
            }, e, this, [[7, 11, 15, 23], [16, , 18, 22]])
        })), function (e) {
            return s.apply(this, arguments)
        }), l.prototype.show = function () {
            l.$background ? l.$background.removeClass("hidden") : (l.$background = $("<div></div>").addClass("xm-dialog-background"), $("body").append(l.$background)), l.$background.empty(), l.$background.append(this.$container)
        }, l.prototype.hide = function () {
            l.$background && (l.$background.addClass("hidden"), l.$background.empty())
        }, l.prototype.showLoading = function () {
            var e = this.$confirm.outerWidth();
            this._confirmTextCache = this.$confirm.text(), this.$confirm.empty(), this.setting.isLoadingAnimated ? this.$confirm.html('<div class="loading"><div></div><div></div><div></div><div></div></div>').css({"min-width": e + "px"}) : this.$confirm.text("Loading"), this.$confirm.addClass("disabled"), this.$confirm.off("click")
        }, l.prototype.loading = function () {
            this.showLoading()
        }, l.prototype.hideLoading = function () {
            this.$confirm.text(this._confirmTextCache), this.$confirm.click(this.setting.confirmAction || this.hide.bind(this)), this.$confirm.removeClass("disabled")
        }, l.alert = function (e, n) {
            var t = new l({contents: [e], confirmAction: n, hideCancel: !0});
            return t.show(), t
        }, l.confirm = function (e, n, t) {
            var r = new l({contents: [e], confirmAction: n, cancelAction: t, hideCancel: !1});
            return r.show(), r
        }, l.alertServerError = o(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.t0 = l, e.next = 3, i;
                    case 3:
                        return e.t1 = e.sent.t("error._server_error_try_again_later"), e.abrupt("return", e.t0.alert.call(e.t0, e.t1));
                    case 5:
                    case"end":
                        return e.stop()
                }
            }, e, void 0)
        }));
        var d = function () {
            function e() {
                !function (e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.lastTimerID = void 0, this.entity = $('<div class="toast"><span></span></div>'), $("body").append(this.entity)
            }

            return r(e, [{
                key: "show", value: function () {
                    var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                    return new Promise(function (r) {
                        e.resetTimer(), e.entity.addClass("active"), e.entity.find("span").text(n), e.lastTimerID = setTimeout(function () {
                            e.hide(), r(e)
                        }, t)
                    })
                }
            }, {
                key: "hide", value: function () {
                    this.resetTimer(), this.entity.removeClass("active")
                }
            }, {
                key: "destroy", value: function () {
                    this.entity.remove()
                }
            }, {
                key: "resetTimer", value: function () {
                    "number" == typeof this.lastTimerID && (window.clearTimeout(this.lastTimerID), this.lastTimerID = void 0)
                }
            }], [{
                key: "show", value: (n = o(regeneratorRuntime.mark(function n(t, r) {
                    var o;
                    return regeneratorRuntime.wrap(function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return o = new e, n.next = 3, o.show(t, r);
                            case 3:
                                window.setTimeout(o.destroy.bind(o), 500);
                            case 4:
                            case"end":
                                return n.stop()
                        }
                    }, n, this)
                })), function (e, t) {
                    return n.apply(this, arguments)
                })
            }]), e;
            var n
        }();
        window.utils = {
            goSigninIfNot: c,
            getParameterByName: function (e, n) {
                n || (n = window.location.href), e = e.replace(/[[\]]/g, "\\$&");
                var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
                return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
            },
            switchSiteArea: function (e, n, t) {
                e = e || window.siteMode, n = n || {}, t = t || location.pathname;
                var r = Object.assign({}, window.urlParams, n), o = "", i = void 0, a = "";
                for (var u in r) a += "" !== a || /\?/.test(t) ? "&" : "?", a += u + "=" + encodeURIComponent(r[u]);
                return e === window.siteMode ? (window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), console.log("area === window.siteMode", location.origin + t + a + location.hash), void(window.location.href = location.origin + t + a + location.hash)) : ("cn" === e ? (i = (o = location.origin.replace(/xmind\.net$/, "xmind.cn") + t + a + location.hash).match(/next=[^?&]+\.xmind\.net[^\w]/)) && (i = i[0], o = o.replace(i, i.replace(".net", ".cn"))) : "en" === e && (i = (o = location.origin.replace(/xmind\.cn$/, "xmind.net") + t + a + location.hash).match(/next=[^?&]+\.xmind\.cn[^\w]/)) && (i = i[0], o = o.replace(i, i.replace(".cn", ".net"))), window.location.href !== o && (window.location.href = o, !0))
            },
            request: p,
            formatTime: function (e) {
                if (!e) return null;
                var n = new Date(e), t = "" + n.getMinutes();
                return t = 1 === t.length ? "0" + t : t, n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate() + " " + n.getHours() + ":" + t
            },
            makeProductPeriodText: function (e) {
                if (!e) return "";
                var n = void 0, t = void 0, r = void 0;
                return e % 12 == 0 ? (n = e / 12, "en" === siteMode ? (r = n > 1 ? "years" : "year", r = " " + (f[window.lang][r] || f.en[r])) : r = " " + f.cn.year, n += r) : (t = e, "en" === siteMode ? (r = t > 1 ? "months" : "month", r = " " + (f[window.lang][r] || f.en[r])) : r = " " + f.cn.month, t += r), n || t
            },
            checkIfInWechatBrowser: function () {
                return /MicroMessenger/i.test(navigator.userAgent)
            },
            getOS: function () {
                var e = window.navigator.userAgent, n = window.navigator.platform, t = null;
                return -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(n) ? t = "macOS" : [/iPhone/, /iPad/, /iPod/].some(function (n) {
                    return n.test(e)
                }) ? t = "iOS" : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(n) ? t = "Windows" : /Android/.test(e) ? t = "Android" : !t && /Linux/.test(n) && (t = "Linux"), t
            },
            regex: {
                phone: /^1[3456789]\d{9}$/,
                email: /([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/im,
                password: /^[A-Za-z0-9!()-.?\[\]_`~#$^&*+= ]{6,32}$/,
                url: /((file|gopher|news|nntp|telnet|http|ftp|https|ftps|sftp)\:\/\/((\[?(\d{1,3}\.){3}\d{1,3}\]?)|(([\-a-zA-Z0-9]+\.)+[a-zA-Z]{2,4}))(\:\d+)?(\/[^\s<>]+)*\/?)/gim
            },
            Dialog: l,
            simpleHash: function (e) {
                for (var n = 0, t = 0; t < e.length; t++) n += e.charCodeAt(t);
                return n
            },
            Toast: d,
            toast: new d
        }
    }, 142: function (e, n, t) {
        "use strict";
        "development" === window.mode && (window.fakeCookie = function () {
            "en" === window.siteMode ? (Cookies.set("T", "a7d2b23995a94ae997dc84646792254aFTBwGvJk"), Cookies.set("U", "Michaeldongyuxi"), Cookies.set("F", "Michaeldongyuxi")) : "cn" === window.siteMode && (Cookies.set("T", "7446ae9416d44be69879b7ab604b8368FIuePipt"), Cookies.set("U", "michaeldong21"), Cookies.set("F", "michaeldong21"))
        });
        var r = {};
        window.dev = r, r.log = function () {
            "development" === window.mode && console.log.apply(null, arguments)
        }
    }, 143: function (e, n, t) {
        "use strict";
        window.$acc = {
            _token: Cookies.get("T"),
            _fullname: Cookies.get("F"),
            _account: Cookies.get("U"),
            _email: "",
            isSignin: function () {
                return !!$acc._token
            },
            signinCookie: function (e, n, t, r, o, i) {
                var a = "cn" === window.siteMode ? ".xmind.cn" : ".xmind.net";
                "development" !== window.mode && "test" !== window.mode || (a = ""), o ? (Cookies.set("T", e, {
                    expires: 3650,
                    path: "/",
                    domain: a
                }), Cookies.set("U", n, {expires: 3650, path: "/", domain: a}), Cookies.set("F", t, {
                    expires: 3650,
                    path: "/",
                    domain: a
                }), Cookies.set("ID", n, {
                    expires: 3650,
                    path: "/",
                    domain: a
                }), Cookies.set("fullname", t, {
                    expires: 3650,
                    path: "/",
                    domain: a
                }), Cookies.set("email", r, {expires: 3650, path: "/", domain: a})) : (Cookies.set("T", e, {
                    domain: a,
                    path: "/"
                }), Cookies.set("U", n, {domain: a, path: "/"}), Cookies.set("F", t, {
                    domain: a,
                    path: "/"
                }), Cookies.set("ID", n, {domain: a, path: "/"}), Cookies.set("fullname", t, {
                    domain: a,
                    path: "/"
                }), Cookies.set("email", r, {
                    domain: a,
                    path: "/"
                })), $acc._token = e, $acc._fullname = t, $acc._account = n, $acc._email = i
            },
            signOut: function () {
                console.log("Signing Out"), $.ajax({
                    url: "/_res/token/" + $acc._account + "/" + $acc._token,
                    method: "DELETE",
                    headers: {AuthToken: $acc._token}
                }).done(function () {
                    dev.log("Logged out")
                }).fail(function () {
                    dev.log("Error")
                }), Cookies.remove("T"), Cookies.remove("U"), Cookies.remove("F"), Cookies.remove("cn_trans"), Cookies.remove("T", {domain: ".xmind.net"}), Cookies.remove("U", {domain: ".xmind.net"}), Cookies.remove("F", {domain: ".xmind.net"}), Cookies.remove("T", {domain: ".xmind.cn"}), Cookies.remove("U", {domain: ".xmind.cn"}), Cookies.remove("F", {domain: ".xmind.cn"}), $acc._token = null, $acc._fullname = null, $acc._account = null
            },
            setHeaderUsername: function (e) {
                !$acc._fullname || $acc._fullname.indexOf("_xmind_") >= 0 ? $acc.setHeaderEmail(e) : $(e).text($acc._fullname)
            },
            setHeaderEmail: function (e) {
                api.getUserInfo().then(function (n) {
                    $(e).text(n.primary_email || "My XMind ID")
                })
            }
        }, window.$xm = {
            refreshXMind: function (e) {
                window.status = "xmind_cmd=refresh;xmind_json=" + $.toJSON({expireDate: e.expire, expired: e.expired})
            }, isXMindEnv: function () {
                var e = Cookies.get("_env"), n = Cookies.get("ENV");
                return e && "xmind_" == e.substr(0, 6) || n && "XMIND" == n
            }, signinXMind: function (e, n) {
                e.remember = !!n, window.status = "xmind_status=200;xmind_json=" + $.toJSON(e)
            }, redirect: function (e) {
                location.href = e || "/signin/?next=" + encodeURIComponent(location.href)
            }, go_next: function (e) {
                var n = location.href.match(/(?:\?|&)next=([^&]+)/);
                n = n ? decodeURIComponent(n[1]) : null;
                var t = "development" === mode && n || function (e) {
                    if (e) return e.match(/^((https?:)?\/\/([^\/]+\.)?xmind\.(net|cn))?\//) ? e : void 0
                }(n) || e || "/account/";
                location.href = t
            }
        }, $(function () {
            Object.assign($xm, {
                versions: {
                    plus: {price: "79", updates: "39", actual: "79", updates5: "79"},
                    pro: {price: "129", updates: "49", actual: "99", updates5: "99"},
                    subscription: {price: "79"}
                },
                prices: {
                    1: {usd: 1, eur: 1, gbp: 1, aud: 1, cad: 1, rub: 1, cny: 1},
                    29: {usd: 29, eur: 25, gbp: 23, aud: 39, cad: 39, rub: 1919, cny: 199},
                    39: {usd: 39, eur: 35, gbp: 32, aud: 49, cad: 49, rub: 2579, cny: 279},
                    49: {usd: 49, eur: 45, gbp: 39, aud: 69, cad: 69, rub: 3339, cny: 349},
                    59: {usd: 59, eur: 55, gbp: 49, aud: 85, cad: 79, rub: 4029, cny: 419},
                    645: {usd: 64.5, eur: 57.5, gbp: 51.5, aud: 89.5, cad: 84.5, rub: 4269, cny: 449.5},
                    69: {usd: 69, eur: 59, gbp: 56, aud: 95, cad: 89, rub: 4659, cny: 489},
                    79: {usd: 79, eur: 69, gbp: 64, aud: 109, cad: 99, rub: 5229, cny: 559},
                    89: {usd: 89, eur: 79, gbp: 72, aud: 125, cad: 119, rub: 5999, cny: 629},
                    99: {usd: 99, eur: 89, gbp: 79, aud: 139, cad: 129, rub: 6549, cny: 699},
                    109: {usd: 109, eur: 99, gbp: 83, aud: 149, cad: 149, rub: 7369, cny: 759},
                    119: {usd: 119, eur: 109, gbp: 93, aud: 169, cad: 159, rub: 7999, cny: 829},
                    129: {usd: 129, eur: 115, gbp: 103, aud: 179, cad: 169, rub: 8529, cny: 899}
                },
                zenLicensePrices: {
                    1: {usd: 1, eur: 1, gbp: 1, aud: 1, cad: 1, rub: 1, cny: 1},
                    129.99: {usd: 129.99, cny: 699}
                },
                simbols: {usd: "$", eur: "&euro;", gbp: "&pound;", aud: "$", cad: "$", rub: "&#x20bd;", cny: "¥"},
                packages: {
                    5: {discount: .95},
                    10: {discount: .93},
                    20: {discount: .9},
                    50: {discount: .85},
                    100: {discount: .8}
                },
                orderType: {
                    indi: {plus: "79", pro: "99", sub: "79"},
                    edu: {plus: "1", pro: "59"},
                    npo: {pro: "645"},
                    team: {plus: "79", pro: "99"},
                    upgr: {plus: "39", pro: "49"}
                },
                toPrice: function (e) {
                    "string" == typeof e && (e = $.parseFloat(e));
                    for (var n = (e.toFixed(2) + "").split("."), t = n[0], r = n.length > 1 ? "." + n[1] : "", o = /(\d+)(\d{3})/; o.test(t);) t = t.replace(o, "$1,$2");
                    return t + r
                },
                cPrice: function (e, n) {
                    return $xm.prices[e][n]
                },
                _pkgOrigPrice: function (e, n, t) {
                    return ($xm.cPrice($xm.versions[e].price, t) + $xm.cPrice($.parseFloat($xm.versions[e].updates), t)) * n
                },
                _pkgActPrice: function (e, n, t) {
                    return ($xm.cPrice($xm.versions[e].actual, t) + $xm.cPrice($.parseFloat($xm.versions[e].updates), t)) * n
                },
                pkgOrigPrice: function (e, n, t) {
                    return $xm.toPrice($xm._pkgOrigPrice(e, n, t))
                },
                pkgDiscPrice: function (e, n, t) {
                    return $xm.toPrice($xm["pro" == e ? "_pkgActPrice" : "_pkgOrigPrice"](e, n, t) * $xm.packages[n].discount)
                },
                specialOrigPrice: {usd: 484, eur: 330, gbp: 288},
                specialDisPrice: {usd: 199, eur: 179, gbp: 139}
            })
        })
    }, 144: function (e, n, t) {
        "use strict";

        function r(e) {
            return function () {
                var n = e.apply(this, arguments);
                return new Promise(function (e, t) {
                    return function r(o, i) {
                        try {
                            var a = n[o](i), u = a.value
                        } catch (e) {
                            return void t(e)
                        }
                        if (!a.done) return Promise.resolve(u).then(function (e) {
                            r("next", e)
                        }, function (e) {
                            r("throw", e)
                        });
                        e(u)
                    }("next")
                })
            }
        }

        window.api = {};
        var o = function (e, n) {
            return function () {
                return this["_" + e + "Promise"] || (this["_" + e + "Promise"] = n()), this["_" + e + "Promise"]
            }
        };
        "en" === window.siteMode ? api = {
            getSession: function () {
                var e = r(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/session"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), getUserInfo: o("getUserInfo", r(regeneratorRuntime.mark(function e() {
                var n, t;
                return regeneratorRuntime.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, api.getSession();
                        case 2:
                            if (401 !== (n = e.sent)._code) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", {_code: 401});
                        case 5:
                            return e.next = 7, utils.request({url: "/_res/profile/" + encodeURIComponent(n.user) + "/all"});
                        case 7:
                            return t = e.sent, e.abrupt("return", Object.assign({}, n, t));
                        case 9:
                        case"end":
                            return e.stop()
                    }
                }, e, void 0)
            }))), getDevicesInfo: function () {
                var e = r(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/devices"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), getSubscriptionInfo: function () {
                var e = r(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/user_sub_status?from=website"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), cancelSubscription: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/unsub/" + n + "/" + encodeURIComponent(t),
                                    method: "POST",
                                    body: {}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), deactivateDevice: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/devices",
                                    method: "POST",
                                    body: {unbind_device_list: [n]}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), saveProfile: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/profile/" + encodeURIComponent(n),
                                    method: "PUT",
                                    body: t
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), changePassword: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t, r) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/password/" + encodeURIComponent(n),
                                    method: "PUT",
                                    body: {old_pwd: t, pwd: r}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t, r) {
                    return e.apply(this, arguments)
                }
            }(), verifyEmail: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/email/" + encodeURIComponent(n) + "/resend-verification-email",
                                    body: {email: t}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), saveEmailChanges: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t, r) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/profile/" + encodeURIComponent(n),
                                    method: "PUT",
                                    body: {primary_email: t, emails: r}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t, r) {
                    return e.apply(this, arguments)
                }
            }(), redeem: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/redeem-sub?code=" + encodeURIComponent(n)});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), confirmRedeem: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/redeem-sub?code=" + encodeURIComponent(n),
                                    method: "POST",
                                    body: {}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), cn_transferable: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/translate_user_to_cn?email=" + encodeURIComponent(n)});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), cn_transfer: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/translate_user_to_cn",
                                    method: "POST",
                                    body: n
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), getShareMaps: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t, r) {
                    var o;
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = "/_api/share/maps?start=" + encodeURIComponent(n) + "&end=" + encodeURIComponent(t), r && (o = o + "&lang=" + r), e.next = 4, utils.request({url: o});
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t, r) {
                    return e.apply(this, arguments)
                }
            }(), getShareMapDownloadUrl: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_api/share/maps/" + encodeURIComponent(n) + "/downloadUrl"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), getShareMapContentUrl: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                console.log('content.json 2222');

                                return e.next = 2, Promise.resolve({
                                    "downloadUrl": window.xmindurl,
                                    "_code": 200
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), deleteAccount: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/user/delete", body: {pwd: n}});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), saveAvatar: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, $.ajax({
                                    url: "/_res/upload_head_img",
                                    data: n,
                                    processData: !1,
                                    contentType: !1,
                                    type: "POST"
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), switchTeamSubscriptionAutoRenew: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                utils.request({
                                    url: "/_res/team_autorenew",
                                    method: "POST",
                                    body: {team_id: n, action: t}
                                });
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }()
        } : "cn" === window.siteMode && (api = {
            getSession: function () {
                var e = r(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/session"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), getUserInfo: o("getUserInfo", r(regeneratorRuntime.mark(function e() {
                var n, t;
                return regeneratorRuntime.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, api.getSession();
                        case 2:
                            if (401 !== (n = e.sent)._code) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", {_code: 401});
                        case 5:
                            return e.next = 7, utils.request({url: "/_api/profile/" + encodeURIComponent(n.user) + "/"});
                        case 7:
                            return t = e.sent, e.abrupt("return", Object.assign({}, n, t));
                        case 9:
                        case"end":
                            return e.stop()
                    }
                }, e, void 0)
            }))), getDevicesInfo: function () {
                var e = r(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/devices"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), getSubscriptionInfo: function () {
                var e = r(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/user_sub_status?from=website"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), cancelSubscription: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/unsub/" + n + "/" + encodeURIComponent(t),
                                    method: "POST",
                                    body: {}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), deactivateDevice: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/devices",
                                    body: {unbind_device_list: [n]}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), saveProfile: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t.birth_day = "" + t.birth_day, t.birth_month = "" + t.birth_month, t.birth_year = "" + t.birth_year, e.next = 5, utils.request({
                                    url: "/_api/profile/" + encodeURIComponent(n) + "/",
                                    method: "PUT",
                                    body: t
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), verifyPhone: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/phone/" + encodeURIComponent(n) + "/verify?send_method=phone"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), verifyNewPhone: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/phone/" + encodeURIComponent(n) + "/verify?new_phone=" + encodeURIComponent(t)});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), verifyCode: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/phone/" + encodeURIComponent(n) + "/verify",
                                    body: {v_code: t}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), verifyNewPhoneCode: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t, r) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/phone/" + encodeURIComponent(n) + "/verify",
                                    body: {new_phone: t, v_code: r}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t, r) {
                    return e.apply(this, arguments)
                }
            }(), sendNewPhoneCode: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/phone/" + encodeURIComponent(n) + "/reset?new_phone=" + encodeURIComponent(t)});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), resetPhone: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t, r, o) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/phone/" + encodeURIComponent(n) + "/reset",
                                    body: {v_code1: t, v_code2: r, new_phone: o}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t, r, o) {
                    return e.apply(this, arguments)
                }
            }(), changePassword: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t, r) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/password/" + encodeURIComponent(n),
                                    method: "PUT",
                                    body: {old_pwd: t, pwd: r}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t, r) {
                    return e.apply(this, arguments)
                }
            }(), verifyEmail: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_api/resend_verification_email",
                                    body: {email: t}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), saveEmailChanges: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t, r) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_api/profile/" + encodeURIComponent(n) + "/",
                                    method: "PUT",
                                    body: {primary_email: t, emails: r}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t, r) {
                    return e.apply(this, arguments)
                }
            }(), redeem: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/redeem-sub?code=" + encodeURIComponent(n)});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), confirmRedeem: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/redeem-sub?code=" + encodeURIComponent(n),
                                    method: "POST",
                                    body: {}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), getShareMaps: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t, r) {
                    var o;
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = "/_api/share/maps?limit=" + encodeURIComponent(n), r && (o += "&offset=" + encodeURIComponent(r)), t && (o = o + "&lang=" + t), e.next = 5, utils.request({url: o});
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t, r) {
                    return e.apply(this, arguments)
                }
            }(), getShareMapDownloadUrl: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_api/share/map/" + encodeURIComponent(n) + "/downloadUrl"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), getShareMapContentUrl: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                console.log('content.json 1111');
                                return e.next = 2, utils.request({url: "content.json"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), deleteAccount: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/user/delete", body: {pwd: n}});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), saveAvatar: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, $.ajax({
                                    url: "/_res/upload_head_img",
                                    data: n,
                                    processData: !1,
                                    contentType: !1,
                                    type: "POST"
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }()
        }), api = Object.assign(api, {
            getTeamInfo: function () {
                var e = r(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/user_team_info"});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), inviteTeamMember: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/invite_team_member",
                                    method: "POST",
                                    body: {user_email: n}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), removeTeamMember: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/remove_team_member",
                                    method: "POST",
                                    body: {member_user_id: n}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), inviteTeamLeader: function () {
                var e = r(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/invite_team_leader",
                                    method: "POST",
                                    body: {}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), cancelTeamMemberInvite: function () {
                var e = r(regeneratorRuntime.mark(function e(n, t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/cancel_team_invite",
                                    method: "POST",
                                    body: {hash: n, user_email: t}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }(), rejectTeamInvite: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/reject_team_invite",
                                    method: "POST",
                                    body: {accept_token: n}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), acceptTeamInvite: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/accept_team_invite",
                                    method: "POST",
                                    body: {accept_token: n}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), getTeamInviteDetail: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({url: "/_res/get_team_invite_detail?accept_token=" + encodeURIComponent(n)});
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }(), leaveTeam: function () {
                var e = r(regeneratorRuntime.mark(function e(n) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, utils.request({
                                    url: "/_res/leave_team",
                                    method: "POST",
                                    body: {team_id: n}
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (n) {
                    return e.apply(this, arguments)
                }
            }()
        })
    }, 145: function (e, n, t) {
        "use strict";
        var r;
        "function" == typeof Symbol && Symbol.iterator, function (o) {
            function i(e, n) {
                var t = (65535 & e) + (65535 & n);
                return (e >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
            }

            function a(e, n, t, r, o, a) {
                return i((u = i(i(n, e), i(r, a))) << (s = o) | u >>> 32 - s, t);
                var u, s
            }

            function u(e, n, t, r, o, i, u) {
                return a(n & t | ~n & r, e, n, o, i, u)
            }

            function s(e, n, t, r, o, i, u) {
                return a(n & r | t & ~r, e, n, o, i, u)
            }

            function c(e, n, t, r, o, i, u) {
                return a(n ^ t ^ r, e, n, o, i, u)
            }

            function p(e, n, t, r, o, i, u) {
                return a(t ^ (n | ~r), e, n, o, i, u)
            }

            function f(e, n) {
                var t, r, o, a, f;
                e[n >> 5] |= 128 << n % 32, e[14 + (n + 64 >>> 9 << 4)] = n;
                var l = 1732584193, d = -271733879, h = -1732584194, m = 271733878;
                for (t = 0; t < e.length; t += 16) r = l, o = d, a = h, f = m, d = p(d = p(d = p(d = p(d = c(d = c(d = c(d = c(d = s(d = s(d = s(d = s(d = u(d = u(d = u(d = u(d, h = u(h, m = u(m, l = u(l, d, h, m, e[t], 7, -680876936), d, h, e[t + 1], 12, -389564586), l, d, e[t + 2], 17, 606105819), m, l, e[t + 3], 22, -1044525330), h = u(h, m = u(m, l = u(l, d, h, m, e[t + 4], 7, -176418897), d, h, e[t + 5], 12, 1200080426), l, d, e[t + 6], 17, -1473231341), m, l, e[t + 7], 22, -45705983), h = u(h, m = u(m, l = u(l, d, h, m, e[t + 8], 7, 1770035416), d, h, e[t + 9], 12, -1958414417), l, d, e[t + 10], 17, -42063), m, l, e[t + 11], 22, -1990404162), h = u(h, m = u(m, l = u(l, d, h, m, e[t + 12], 7, 1804603682), d, h, e[t + 13], 12, -40341101), l, d, e[t + 14], 17, -1502002290), m, l, e[t + 15], 22, 1236535329), h = s(h, m = s(m, l = s(l, d, h, m, e[t + 1], 5, -165796510), d, h, e[t + 6], 9, -1069501632), l, d, e[t + 11], 14, 643717713), m, l, e[t], 20, -373897302), h = s(h, m = s(m, l = s(l, d, h, m, e[t + 5], 5, -701558691), d, h, e[t + 10], 9, 38016083), l, d, e[t + 15], 14, -660478335), m, l, e[t + 4], 20, -405537848), h = s(h, m = s(m, l = s(l, d, h, m, e[t + 9], 5, 568446438), d, h, e[t + 14], 9, -1019803690), l, d, e[t + 3], 14, -187363961), m, l, e[t + 8], 20, 1163531501), h = s(h, m = s(m, l = s(l, d, h, m, e[t + 13], 5, -1444681467), d, h, e[t + 2], 9, -51403784), l, d, e[t + 7], 14, 1735328473), m, l, e[t + 12], 20, -1926607734), h = c(h, m = c(m, l = c(l, d, h, m, e[t + 5], 4, -378558), d, h, e[t + 8], 11, -2022574463), l, d, e[t + 11], 16, 1839030562), m, l, e[t + 14], 23, -35309556), h = c(h, m = c(m, l = c(l, d, h, m, e[t + 1], 4, -1530992060), d, h, e[t + 4], 11, 1272893353), l, d, e[t + 7], 16, -155497632), m, l, e[t + 10], 23, -1094730640), h = c(h, m = c(m, l = c(l, d, h, m, e[t + 13], 4, 681279174), d, h, e[t], 11, -358537222), l, d, e[t + 3], 16, -722521979), m, l, e[t + 6], 23, 76029189), h = c(h, m = c(m, l = c(l, d, h, m, e[t + 9], 4, -640364487), d, h, e[t + 12], 11, -421815835), l, d, e[t + 15], 16, 530742520), m, l, e[t + 2], 23, -995338651), h = p(h, m = p(m, l = p(l, d, h, m, e[t], 6, -198630844), d, h, e[t + 7], 10, 1126891415), l, d, e[t + 14], 15, -1416354905), m, l, e[t + 5], 21, -57434055), h = p(h, m = p(m, l = p(l, d, h, m, e[t + 12], 6, 1700485571), d, h, e[t + 3], 10, -1894986606), l, d, e[t + 10], 15, -1051523), m, l, e[t + 1], 21, -2054922799), h = p(h, m = p(m, l = p(l, d, h, m, e[t + 8], 6, 1873313359), d, h, e[t + 15], 10, -30611744), l, d, e[t + 6], 15, -1560198380), m, l, e[t + 13], 21, 1309151649), h = p(h, m = p(m, l = p(l, d, h, m, e[t + 4], 6, -145523070), d, h, e[t + 11], 10, -1120210379), l, d, e[t + 2], 15, 718787259), m, l, e[t + 9], 21, -343485551), l = i(l, r), d = i(d, o), h = i(h, a), m = i(m, f);
                return [l, d, h, m]
            }

            function l(e) {
                var n, t = "", r = 32 * e.length;
                for (n = 0; n < r; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
                return t
            }

            function d(e) {
                var n, t = [];
                for (t[(e.length >> 2) - 1] = void 0, n = 0; n < t.length; n += 1) t[n] = 0;
                var r = 8 * e.length;
                for (n = 0; n < r; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
                return t
            }

            function h(e) {
                var n, t, r = "";
                for (t = 0; t < e.length; t += 1) n = e.charCodeAt(t), r += "0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n);
                return r
            }

            function m(e) {
                return unescape(encodeURIComponent(e))
            }

            function g(e) {
                return function (e) {
                    return l(f(d(e), 8 * e.length))
                }(m(e))
            }

            function v(e, n) {
                return function (e, n) {
                    var t, r, o = d(e), i = [], a = [];
                    for (i[15] = a[15] = void 0, o.length > 16 && (o = f(o, 8 * e.length)), t = 0; t < 16; t += 1) i[t] = 909522486 ^ o[t], a[t] = 1549556828 ^ o[t];
                    return r = f(i.concat(d(n)), 512 + 8 * n.length), l(f(a.concat(r), 640))
                }(m(e), m(n))
            }

            function b(e, n, t) {
                return n ? t ? v(n, e) : h(v(n, e)) : t ? g(e) : h(g(e))
            }

            void 0 === (r = function () {
                return b
            }.call(n, t, n, e)) || (e.exports = r), window.md5 = b
        }()
    }, 190: function (e, n, t) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (e) {
                return r(e)
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
            })(e)
        }

        function i(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }

        function a(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), r.forEach(function (n) {
                    i(e, n, t[n])
                })
            }
            return e
        }

        function u(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, n, t) {
            return n && s(e.prototype, n), t && s(e, t), e
        }

        function p(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function f(e, n) {
            return !n || "object" !== o(n) && "function" != typeof n ? p(e) : n
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function d(e, n) {
            return (d = Object.setPrototypeOf || function (e, n) {
                return e.__proto__ = n, e
            })(e, n)
        }

        function h(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), n && d(e, n)
        }

        function m(e, n) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, n) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                    var t = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0) ;
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return t
                }
            }(e, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        t.r(n);
        var g = {
            type: "logger", log: function (e) {
                this.output("log", e)
            }, warn: function (e) {
                this.output("warn", e)
            }, error: function (e) {
                this.output("error", e)
            }, output: function (e, n) {
                var t;
                console && console[e] && (t = console)[e].apply(t, function (e) {
                    return function (e) {
                        if (Array.isArray(e)) {
                            for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                            return t
                        }
                    }(e) || function (e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }(n))
            }
        }, v = new (function () {
            function e(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                u(this, e), this.init(n, t)
            }

            return c(e, [{
                key: "init", value: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = n.prefix || "i18next:", this.logger = e || g, this.options = n, this.debug = n.debug
                }
            }, {
                key: "setDebug", value: function (e) {
                    this.debug = e
                }
            }, {
                key: "log", value: function () {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    return this.forward(n, "log", "", !0)
                }
            }, {
                key: "warn", value: function () {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    return this.forward(n, "warn", "", !0)
                }
            }, {
                key: "error", value: function () {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    return this.forward(n, "error", "")
                }
            }, {
                key: "deprecate", value: function () {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward", value: function (e, n, t, r) {
                    return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(t).concat(this.prefix, " ").concat(e[0])), this.logger[n](e))
                }
            }, {
                key: "create", value: function (n) {
                    return new e(this.logger, a({}, {prefix: "".concat(this.prefix, ":").concat(n, ":")}, this.options))
                }
            }]), e
        }()), b = function () {
            function e() {
                u(this, e), this.observers = {}
            }

            return c(e, [{
                key: "on", value: function (e, n) {
                    var t = this;
                    return e.split(" ").forEach(function (e) {
                        t.observers[e] = t.observers[e] || [], t.observers[e].push(n)
                    }), this
                }
            }, {
                key: "off", value: function (e, n) {
                    this.observers[e] && (n ? this.observers[e] = this.observers[e].filter(function (e) {
                        return e !== n
                    }) : delete this.observers[e])
                }
            }, {
                key: "emit", value: function (e) {
                    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                    this.observers[e] && [].concat(this.observers[e]).forEach(function (e) {
                        e.apply(void 0, t)
                    }), this.observers["*"] && [].concat(this.observers["*"]).forEach(function (n) {
                        n.apply(n, [e].concat(t))
                    })
                }
            }]), e
        }();

        function y() {
            var e, n, t = new Promise(function (t, r) {
                e = t, n = r
            });
            return t.resolve = e, t.reject = n, t
        }

        function w(e) {
            return null == e ? "" : "" + e
        }

        function x(e, n, t) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }

            function o() {
                return !e || "string" == typeof e
            }

            for (var i = "string" != typeof n ? [].concat(n) : n.split("."); i.length > 1;) {
                if (o()) return {};
                var a = r(i.shift());
                !e[a] && t && (e[a] = new t), e = e[a]
            }
            return o() ? {} : {obj: e, k: r(i.shift())}
        }

        function k(e, n, t) {
            var r = x(e, n, Object);
            r.obj[r.k] = t
        }

        function R(e, n) {
            var t = x(e, n), r = t.obj, o = t.k;
            if (r) return r[o]
        }

        function _(e, n, t) {
            var r = R(e, t);
            return void 0 !== r ? r : R(n, t)
        }

        function C(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }

        var S = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;"};

        function P(e) {
            return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function (e) {
                return S[e]
            }) : e
        }

        var O = function (e) {
            function n(e) {
                var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return u(this, n), t = f(this, l(n).call(this)), b.call(p(t)), t.data = e || {}, t.options = r, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t
            }

            return h(n, b), c(n, [{
                key: "addNamespaces", value: function (e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
            }, {
                key: "removeNamespaces", value: function (e) {
                    var n = this.options.ns.indexOf(e);
                    n > -1 && this.options.ns.splice(n, 1)
                }
            }, {
                key: "getResource", value: function (e, n, t) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator, i = [e, n];
                    return t && "string" != typeof t && (i = i.concat(t)), t && "string" == typeof t && (i = i.concat(o ? t.split(o) : t)), e.indexOf(".") > -1 && (i = e.split(".")), R(this.data, i)
                }
            }, {
                key: "addResource", value: function (e, n, t, r) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {silent: !1},
                        i = this.options.keySeparator;
                    void 0 === i && (i = ".");
                    var a = [e, n];
                    t && (a = a.concat(i ? t.split(i) : t)), e.indexOf(".") > -1 && (r = n, n = (a = e.split("."))[1]), this.addNamespaces(n), k(this.data, a, r), o.silent || this.emit("added", e, n, t, r)
                }
            }, {
                key: "addResources", value: function (e, n, t) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {silent: !1};
                    for (var o in t) "string" != typeof t[o] && "[object Array]" !== Object.prototype.toString.apply(t[o]) || this.addResource(e, n, o, t[o], {silent: !0});
                    r.silent || this.emit("added", e, n, t)
                }
            }, {
                key: "addResourceBundle", value: function (e, n, t, r, o) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {silent: !1}, u = [e, n];
                    e.indexOf(".") > -1 && (r = t, t = n, n = (u = e.split("."))[1]), this.addNamespaces(n);
                    var s = R(this.data, u) || {};
                    r ? function e(n, t, r) {
                        for (var o in t) o in n ? "string" == typeof n[o] || n[o] instanceof String || "string" == typeof t[o] || t[o] instanceof String ? r && (n[o] = t[o]) : e(n[o], t[o], r) : n[o] = t[o];
                        return n
                    }(s, t, o) : s = a({}, s, t), k(this.data, u, s), i.silent || this.emit("added", e, n, t)
                }
            }, {
                key: "removeResourceBundle", value: function (e, n) {
                    this.hasResourceBundle(e, n) && delete this.data[e][n], this.removeNamespaces(n), this.emit("removed", e, n)
                }
            }, {
                key: "hasResourceBundle", value: function (e, n) {
                    return void 0 !== this.getResource(e, n)
                }
            }, {
                key: "getResourceBundle", value: function (e, n) {
                    return n || (n = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? a({}, {}, this.getResource(e, n)) : this.getResource(e, n)
                }
            }, {
                key: "getDataByLanguage", value: function (e) {
                    return this.data[e]
                }
            }, {
                key: "toJSON", value: function () {
                    return this.data
                }
            }]), n
        }(), $ = {
            processors: {}, addPostProcessor: function (e) {
                this.processors[e.name] = e
            }, handle: function (e, n, t, r, o) {
                var i = this;
                return e.forEach(function (e) {
                    i.processors[e] && (n = i.processors[e].process(n, t, r, o))
                }), n
            }
        }, T = function (e) {
            function n(e) {
                var t, r, o, i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return u(this, n), t = f(this, l(n).call(this)), b.call(p(t)), r = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], o = e, i = p(t), r.forEach(function (e) {
                    o[e] && (i[e] = o[e])
                }), t.options = a, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t.logger = v.create("translator"), t
            }

            return h(n, b), c(n, [{
                key: "changeLanguage", value: function (e) {
                    e && (this.language = e)
                }
            }, {
                key: "exists", value: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {interpolation: {}},
                        t = this.resolve(e, n);
                    return t && void 0 !== t.res
                }
            }, {
                key: "extractFromKey", value: function (e, n) {
                    var t = n.nsSeparator || this.options.nsSeparator;
                    void 0 === t && (t = ":");
                    var r = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                        o = n.ns || this.options.defaultNS;
                    if (t && e.indexOf(t) > -1) {
                        var i = e.split(t);
                        (t !== r || t === r && this.options.ns.indexOf(i[0]) > -1) && (o = i.shift()), e = i.join(r)
                    }
                    return "string" == typeof o && (o = [o]), {key: e, namespaces: o}
                }
            }, {
                key: "translate", value: function (e, n) {
                    var t = this;
                    if ("object" !== o(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), void 0 === e || null === e) return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var r = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                        i = this.extractFromKey(e[e.length - 1], n), u = i.key, s = i.namespaces, c = s[s.length - 1],
                        p = n.lng || this.language,
                        f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (p && "cimode" === p.toLowerCase()) {
                        if (f) {
                            var l = n.nsSeparator || this.options.nsSeparator;
                            return c + l + u
                        }
                        return u
                    }
                    var d = this.resolve(e, n), h = d && d.res, m = d && d.usedKey || u, g = d && d.exactUsedKey || u,
                        v = Object.prototype.toString.apply(h),
                        b = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                        y = !this.i18nFormat || this.i18nFormat.handleAsObject;
                    if (y && h && "string" != typeof h && "boolean" != typeof h && "number" != typeof h && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(v) < 0 && ("string" != typeof b || "[object Array]" !== v)) {
                        if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, h, n) : "key '".concat(u, " (").concat(this.language, ")' returned an object instead of string.");
                        if (r) {
                            var w = "[object Array]" === v, x = w ? [] : {}, k = w ? g : m;
                            for (var R in h) if (Object.prototype.hasOwnProperty.call(h, R)) {
                                var _ = "".concat(k).concat(r).concat(R);
                                x[R] = this.translate(_, a({}, n, {joinArrays: !1, ns: s})), x[R] === _ && (x[R] = h[R])
                            }
                            h = x
                        }
                    } else if (y && "string" == typeof b && "[object Array]" === v) (h = h.join(b)) && (h = this.extendTranslation(h, e, n)); else {
                        var C = !1, S = !1;
                        if (!this.isValidLookup(h) && void 0 !== n.defaultValue) {
                            if (C = !0, void 0 !== n.count) {
                                var P = this.pluralResolver.getSuffix(p, n.count);
                                h = n["defaultValue".concat(P)]
                            }
                            h || (h = n.defaultValue)
                        }
                        this.isValidLookup(h) || (S = !0, h = u);
                        var O = n.defaultValue && n.defaultValue !== h && this.options.updateMissing;
                        if (S || C || O) {
                            this.logger.log(O ? "updateKey" : "missingKey", p, c, u, O ? n.defaultValue : h);
                            var $ = [],
                                T = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && T && T[0]) for (var j = 0; j < T.length; j++) $.push(T[j]); else "all" === this.options.saveMissingTo ? $ = this.languageUtils.toResolveHierarchy(n.lng || this.language) : $.push(n.lng || this.language);
                            var I = function (e, r) {
                                t.options.missingKeyHandler ? t.options.missingKeyHandler(e, c, r, O ? n.defaultValue : h, O, n) : t.backendConnector && t.backendConnector.saveMissing && t.backendConnector.saveMissing(e, c, r, O ? n.defaultValue : h, O, n), t.emit("missingKey", e, c, r, h)
                            };
                            if (this.options.saveMissing) {
                                var L = void 0 !== n.count && "string" != typeof n.count;
                                this.options.saveMissingPlurals && L ? $.forEach(function (e) {
                                    t.pluralResolver.getPluralFormsOfKey(e, u).forEach(function (n) {
                                        return I([e], n)
                                    })
                                }) : I($, u)
                            }
                        }
                        h = this.extendTranslation(h, e, n, d), S && h === u && this.options.appendNamespaceToMissingKey && (h = "".concat(c, ":").concat(u)), S && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h))
                    }
                    return h
                }
            }, {
                key: "extendTranslation", value: function (e, n, t, r) {
                    var o = this;
                    if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, t, r.usedLng, r.usedNS, r.usedKey, {resolved: r}); else if (!t.skipInterpolation) {
                        t.interpolation && this.interpolator.init(a({}, t, {interpolation: a({}, this.options.interpolation, t.interpolation)}));
                        var i = t.replace && "string" != typeof t.replace ? t.replace : t;
                        this.options.interpolation.defaultVariables && (i = a({}, this.options.interpolation.defaultVariables, i)), e = this.interpolator.interpolate(e, i, t.lng || this.language, t), !1 !== t.nest && (e = this.interpolator.nest(e, function () {
                            return o.translate.apply(o, arguments)
                        }, t)), t.interpolation && this.interpolator.reset()
                    }
                    var u = t.postProcess || this.options.postProcess, s = "string" == typeof u ? [u] : u;
                    return void 0 !== e && null !== e && s && s.length && !1 !== t.applyPostProcessor && (e = $.handle(s, e, n, t, this)), e
                }
            }, {
                key: "resolve", value: function (e) {
                    var n, t, r, o, i, a = this,
                        u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof e && (e = [e]), e.forEach(function (e) {
                        if (!a.isValidLookup(n)) {
                            var s = a.extractFromKey(e, u), c = s.key;
                            t = c;
                            var p = s.namespaces;
                            a.options.fallbackNS && (p = p.concat(a.options.fallbackNS));
                            var f = void 0 !== u.count && "string" != typeof u.count,
                                l = void 0 !== u.context && "string" == typeof u.context && "" !== u.context,
                                d = u.lngs ? u.lngs : a.languageUtils.toResolveHierarchy(u.lng || a.language, u.fallbackLng);
                            p.forEach(function (e) {
                                a.isValidLookup(n) || (i = e, a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && a.logger.warn('key "'.concat(t, '" for namespace "').concat(i, "\" won't get resolved as namespace was not yet loaded"), "This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"), d.forEach(function (t) {
                                    if (!a.isValidLookup(n)) {
                                        o = t;
                                        var i, s, p = c, d = [p];
                                        for (a.i18nFormat && a.i18nFormat.addLookupKeys ? a.i18nFormat.addLookupKeys(d, c, t, e, u) : (f && (i = a.pluralResolver.getSuffix(t, u.count)), f && l && d.push(p + i), l && d.push(p += "".concat(a.options.contextSeparator).concat(u.context)), f && d.push(p += i)); s = d.pop();) a.isValidLookup(n) || (r = s, n = a.getResource(t, e, s, u))
                                    }
                                }))
                            })
                        }
                    }), {res: n, usedKey: t, exactUsedKey: r, usedLng: o, usedNS: i}
                }
            }, {
                key: "isValidLookup", value: function (e) {
                    return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                }
            }, {
                key: "getResource", value: function (e, n, t) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, n, t, r) : this.resourceStore.getResource(e, n, t, r)
                }
            }]), n
        }();

        function j(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        var I = function () {
            function e(n) {
                u(this, e), this.options = n, this.whitelist = this.options.whitelist || !1, this.logger = v.create("languageUtils")
            }

            return c(e, [{
                key: "getScriptPartFromCode", value: function (e) {
                    if (!e || e.indexOf("-") < 0) return null;
                    var n = e.split("-");
                    return 2 === n.length ? null : (n.pop(), this.formatLanguageCode(n.join("-")))
                }
            }, {
                key: "getLanguagePartFromCode", value: function (e) {
                    if (!e || e.indexOf("-") < 0) return e;
                    var n = e.split("-");
                    return this.formatLanguageCode(n[0])
                }
            }, {
                key: "formatLanguageCode", value: function (e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        var n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], t = e.split("-");
                        return this.options.lowerCaseLng ? t = t.map(function (e) {
                            return e.toLowerCase()
                        }) : 2 === t.length ? (t[0] = t[0].toLowerCase(), t[1] = t[1].toUpperCase(), n.indexOf(t[1].toLowerCase()) > -1 && (t[1] = j(t[1].toLowerCase()))) : 3 === t.length && (t[0] = t[0].toLowerCase(), 2 === t[1].length && (t[1] = t[1].toUpperCase()), "sgn" !== t[0] && 2 === t[2].length && (t[2] = t[2].toUpperCase()), n.indexOf(t[1].toLowerCase()) > -1 && (t[1] = j(t[1].toLowerCase())), n.indexOf(t[2].toLowerCase()) > -1 && (t[2] = j(t[2].toLowerCase()))), t.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
            }, {
                key: "isWhitelisted", value: function (e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1
                }
            }, {
                key: "getFallbackCodes", value: function (e, n) {
                    if (!e) return [];
                    if ("string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                    if (!n) return e.default || [];
                    var t = e[n];
                    return t || (t = e[this.getScriptPartFromCode(n)]), t || (t = e[this.formatLanguageCode(n)]), t || (t = e.default), t || []
                }
            }, {
                key: "toResolveHierarchy", value: function (e, n) {
                    var t = this, r = this.getFallbackCodes(n || this.options.fallbackLng || [], e), o = [],
                        i = function (e) {
                            e && (t.isWhitelisted(e) ? o.push(e) : t.logger.warn("rejecting non-whitelisted language code: ".concat(e)))
                        };
                    return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)), r.forEach(function (e) {
                        o.indexOf(e) < 0 && i(t.formatLanguageCode(e))
                    }), o
                }
            }]), e
        }(), L = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4}, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6}, {lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7}, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {lngs: ["fr"], nr: [1, 2], fc: 9}, {lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10}, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {lngs: ["is"], nr: [1, 2], fc: 12}, {lngs: ["jv"], nr: [0, 1], fc: 13}, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {lngs: ["lt"], nr: [1, 2, 10], fc: 15}, {lngs: ["lv"], nr: [1, 2, 0], fc: 16}, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {lngs: ["mnk"], nr: [0, 1, 2], fc: 18}, {lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19}, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {lngs: ["ro"], nr: [1, 2, 20], fc: 20}, {lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21}, {
            lngs: ["he"],
            nr: [1, 2, 20, 21],
            fc: 22
        }], U = {
            1: function (e) {
                return Number(e > 1)
            }, 2: function (e) {
                return Number(1 != e)
            }, 3: function (e) {
                return 0
            }, 4: function (e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            }, 5: function (e) {
                return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            }, 6: function (e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            }, 7: function (e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            }, 8: function (e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            }, 9: function (e) {
                return Number(e >= 2)
            }, 10: function (e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            }, 11: function (e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            }, 12: function (e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            }, 13: function (e) {
                return Number(0 !== e)
            }, 14: function (e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            }, 15: function (e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            }, 16: function (e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            }, 17: function (e) {
                return Number(1 == e || e % 10 == 1 ? 0 : 1)
            }, 18: function (e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            }, 19: function (e) {
                return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            }, 20: function (e) {
                return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            }, 21: function (e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            }, 22: function (e) {
                return Number(1 === e ? 0 : 2 === e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        }, N = function () {
            function e(n) {
                var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                u(this, e), this.languageUtils = n, this.options = r, this.logger = v.create("pluralResolver"), this.rules = (t = {}, L.forEach(function (e) {
                    e.lngs.forEach(function (n) {
                        t[n] = {numbers: e.nr, plurals: U[e.fc]}
                    })
                }), t)
            }

            return c(e, [{
                key: "addRule", value: function (e, n) {
                    this.rules[e] = n
                }
            }, {
                key: "getRule", value: function (e) {
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
            }, {
                key: "needsPlural", value: function (e) {
                    var n = this.getRule(e);
                    return n && n.numbers.length > 1
                }
            }, {
                key: "getPluralFormsOfKey", value: function (e, n) {
                    var t = this, r = [], o = this.getRule(e);
                    return o ? (o.numbers.forEach(function (o) {
                        var i = t.getSuffix(e, o);
                        r.push("".concat(n).concat(i))
                    }), r) : r
                }
            }, {
                key: "getSuffix", value: function (e, n) {
                    var t = this, r = this.getRule(e);
                    if (r) {
                        var o = r.noAbs ? r.plurals(n) : r.plurals(Math.abs(n)), i = r.numbers[o];
                        this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                        var a = function () {
                            return t.options.prepend && i.toString() ? t.options.prepend + i.toString() : i.toString()
                        };
                        return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" == typeof i ? "_plural_".concat(i.toString()) : a() : "v2" === this.options.compatibilityJSON ? a() : this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                    }
                    return this.logger.warn("no plural rule found for: ".concat(e)), ""
                }
            }]), e
        }(), E = function () {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, e), this.logger = v.create("interpolator"), this.options = n, this.format = n.interpolation && n.interpolation.format || function (e) {
                    return e
                }, this.init(n)
            }

            return c(e, [{
                key: "init", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {escapeValue: !0});
                    var n = e.interpolation;
                    this.escape = void 0 !== n.escape ? n.escape : P, this.escapeValue = void 0 === n.escapeValue || n.escapeValue, this.useRawValueToEscape = void 0 !== n.useRawValueToEscape && n.useRawValueToEscape, this.prefix = n.prefix ? C(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? C(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? C(n.nestingPrefix) : n.nestingPrefixEscaped || C("$t("), this.nestingSuffix = n.nestingSuffix ? C(n.nestingSuffix) : n.nestingSuffixEscaped || C(")"), this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.resetRegExp()
                }
            }, {
                key: "reset", value: function () {
                    this.options && this.init(this.options)
                }
            }, {
                key: "resetRegExp", value: function () {
                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                    this.regexp = new RegExp(e, "g");
                    var n = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                    this.regexpUnescape = new RegExp(n, "g");
                    var t = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                    this.nestingRegexp = new RegExp(t, "g")
                }
            }, {
                key: "interpolate", value: function (e, n, t, r) {
                    var o, i, a, u = this,
                        s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                    function c(e) {
                        return e.replace(/\$/g, "$$$$")
                    }

                    var p = function (e) {
                        if (e.indexOf(u.formatSeparator) < 0) return _(n, s, e);
                        var r = e.split(u.formatSeparator), o = r.shift().trim(), i = r.join(u.formatSeparator).trim();
                        return u.format(_(n, s, o), i, t)
                    };
                    this.resetRegExp();
                    var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler;
                    for (a = 0; o = this.regexpUnescape.exec(e);) {
                        if (void 0 === (i = p(o[1].trim()))) if ("function" == typeof f) {
                            var l = f(e, o, r);
                            i = "string" == typeof l ? l : ""
                        } else this.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), i = ""; else "string" == typeof i || this.useRawValueToEscape || (i = w(i));
                        if (e = e.replace(o[0], c(i)), this.regexpUnescape.lastIndex = 0, ++a >= this.maxReplaces) break
                    }
                    for (a = 0; o = this.regexp.exec(e);) {
                        if (void 0 === (i = p(o[1].trim()))) if ("function" == typeof f) {
                            var d = f(e, o, r);
                            i = "string" == typeof d ? d : ""
                        } else this.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), i = ""; else "string" == typeof i || this.useRawValueToEscape || (i = w(i));
                        if (i = this.escapeValue ? c(this.escape(i)) : c(i), e = e.replace(o[0], i), this.regexp.lastIndex = 0, ++a >= this.maxReplaces) break
                    }
                    return e
                }
            }, {
                key: "nest", value: function (e, n) {
                    var t, r, o = a({}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});

                    function i(e, n) {
                        if (e.indexOf(",") < 0) return e;
                        var t = e.split(",");
                        e = t.shift();
                        var r = t.join(",");
                        r = (r = this.interpolate(r, o)).replace(/'/g, '"');
                        try {
                            o = JSON.parse(r), n && (o = a({}, n, o))
                        } catch (n) {
                            this.logger.error("failed parsing options string in nesting for key ".concat(e), n)
                        }
                        return delete o.defaultValue, e
                    }

                    for (o.applyPostProcessor = !1, delete o.defaultValue; t = this.nestingRegexp.exec(e);) {
                        if ((r = n(i.call(this, t[1].trim(), o), o)) && t[0] === e && "string" != typeof r) return r;
                        "string" != typeof r && (r = w(r)), r || (this.logger.warn("missed to resolve ".concat(t[1], " for nesting ").concat(e)), r = ""), e = e.replace(t[0], r), this.regexp.lastIndex = 0
                    }
                    return e
                }
            }]), e
        }(), q = function (e) {
            function n(e, t, r) {
                var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return u(this, n), o = f(this, l(n).call(this)), b.call(p(o)), o.backend = e, o.store = t, o.services = r, o.languageUtils = r.languageUtils, o.options = i, o.logger = v.create("backendConnector"), o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(r, i.backend, i), o
            }

            return h(n, b), c(n, [{
                key: "queueLoad", value: function (e, n, t, r) {
                    var o = this, i = [], a = [], u = [], s = [];
                    return e.forEach(function (e) {
                        var r = !0;
                        n.forEach(function (n) {
                            var u = "".concat(e, "|").concat(n);
                            !t.reload && o.store.hasResourceBundle(e, n) ? o.state[u] = 2 : o.state[u] < 0 || (1 === o.state[u] ? a.indexOf(u) < 0 && a.push(u) : (o.state[u] = 1, r = !1, a.indexOf(u) < 0 && a.push(u), i.indexOf(u) < 0 && i.push(u), s.indexOf(n) < 0 && s.push(n)))
                        }), r || u.push(e)
                    }), (i.length || a.length) && this.queue.push({
                        pending: a,
                        loaded: {},
                        errors: [],
                        callback: r
                    }), {toLoad: i, pending: a, toLoadLanguages: u, toLoadNamespaces: s}
                }
            }, {
                key: "loaded", value: function (e, n, t) {
                    var r = m(e.split("|"), 2), o = r[0], i = r[1];
                    n && this.emit("failedLoading", o, i, n), t && this.store.addResourceBundle(o, i, t), this.state[e] = n ? -1 : 2;
                    var a = {};
                    this.queue.forEach(function (t) {
                        var r, u, s, c, p;
                        r = t.loaded, u = i, (c = (s = x(r, [o], Object)).obj)[p = s.k] = c[p] || [], c[p].push(u), function (e, n) {
                            for (var t = e.indexOf(n); -1 !== t;) e.splice(t, 1), t = e.indexOf(n)
                        }(t.pending, e), n && t.errors.push(n), 0 !== t.pending.length || t.done || (Object.keys(t.loaded).forEach(function (e) {
                            a[e] || (a[e] = []), t.loaded[e].length && t.loaded[e].forEach(function (n) {
                                a[e].indexOf(n) < 0 && a[e].push(n)
                            })
                        }), t.done = !0, t.errors.length ? t.callback(t.errors) : t.callback())
                    }), this.emit("loaded", a), this.queue = this.queue.filter(function (e) {
                        return !e.done
                    })
                }
            }, {
                key: "read", value: function (e, n, t) {
                    var r = this, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
                        a = arguments.length > 5 ? arguments[5] : void 0;
                    return e.length ? this.backend[t](e, n, function (u, s) {
                        u && s && o < 5 ? setTimeout(function () {
                            r.read.call(r, e, n, t, o + 1, 2 * i, a)
                        }, i) : a(u, s)
                    }) : a(null, {})
                }
            }, {
                key: "prepareLoading", value: function (e, n) {
                    var t = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                    "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof n && (n = [n]);
                    var i = this.queueLoad(e, n, r, o);
                    if (!i.toLoad.length) return i.pending.length || o(), null;
                    i.toLoad.forEach(function (e) {
                        t.loadOne(e)
                    })
                }
            }, {
                key: "load", value: function (e, n, t) {
                    this.prepareLoading(e, n, {}, t)
                }
            }, {
                key: "reload", value: function (e, n, t) {
                    this.prepareLoading(e, n, {reload: !0}, t)
                }
            }, {
                key: "loadOne", value: function (e) {
                    var n = this, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = m(e.split("|"), 2), o = r[0], i = r[1];
                    this.read(o, i, "read", null, null, function (r, a) {
                        r && n.logger.warn("".concat(t, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r), !r && a && n.logger.log("".concat(t, "loaded namespace ").concat(i, " for language ").concat(o), a), n.loaded(e, r, a)
                    })
                }
            }, {
                key: "saveMissing", value: function (e, n, t, r, o) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n) ? this.logger.warn('did not save key "'.concat(t, '" for namespace "').concat(n, '" as the namespace was not yet loaded'), "This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : (this.backend && this.backend.create && this.backend.create(e, n, t, r, null, a({}, i, {isUpdate: o})), e && e[0] && this.store.addResource(e[0], n, t, r))
                }
            }]), n
        }();

        function A(e) {
            return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e
        }

        function M() {
        }

        var F = new (function (e) {
            function n() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 ? arguments[1] : void 0;
                if (u(this, n), e = f(this, l(n).call(this)), b.call(p(e)), e.options = A(t), e.services = {}, e.logger = v, e.modules = {external: []}, r && !e.isInitialized && !t.isClone) {
                    if (!e.options.initImmediate) return e.init(t, r), f(e, p(e));
                    setTimeout(function () {
                        e.init(t, r)
                    }, 0)
                }
                return e
            }

            return h(n, b), c(n, [{
                key: "init", value: function () {
                    var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;

                    function r(e) {
                        return e ? "function" == typeof e ? new e : e : null
                    }

                    if ("function" == typeof n && (t = n, n = {}), this.options = a({}, {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        whitelist: !1,
                        nonExplicitWhitelist: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        partialBundledLanguages: !1,
                        saveMissing: !1,
                        updateMissing: !1,
                        saveMissingTo: "fallback",
                        saveMissingPlurals: !0,
                        missingKeyHandler: !1,
                        missingInterpolationHandler: !1,
                        postProcess: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: !1,
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function (e) {
                            var n = {};
                            if ("object" === o(e[1]) && (n = e[1]), "string" == typeof e[1] && (n.defaultValue = e[1]), "string" == typeof e[2] && (n.tDescription = e[2]), "object" === o(e[2]) || "object" === o(e[3])) {
                                var t = e[3] || e[2];
                                Object.keys(t).forEach(function (e) {
                                    n[e] = t[e]
                                })
                            }
                            return n
                        },
                        interpolation: {
                            escapeValue: !0,
                            format: function (e, n, t) {
                                return e
                            },
                            prefix: "{{",
                            suffix: "}}",
                            formatSeparator: ",",
                            unescapePrefix: "-",
                            nestingPrefix: "$t(",
                            nestingSuffix: ")",
                            maxReplaces: 1e3
                        }
                    }, this.options, A(n)), this.format = this.options.interpolation.format, t || (t = M), !this.options.isClone) {
                        this.modules.logger ? v.init(r(this.modules.logger), this.options) : v.init(null, this.options);
                        var i = new I(this.options);
                        this.store = new O(this.options.resources, this.options);
                        var u = this.services;
                        u.logger = v, u.resourceStore = this.store, u.languageUtils = i, u.pluralResolver = new N(i, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), u.interpolator = new E(this.options), u.utils = {hasLoadedNamespace: this.hasLoadedNamespace.bind(this)}, u.backendConnector = new q(r(this.modules.backend), u.resourceStore, u, this.options), u.backendConnector.on("*", function (n) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                            e.emit.apply(e, [n].concat(r))
                        }), this.modules.languageDetector && (u.languageDetector = r(this.modules.languageDetector), u.languageDetector.init(u, this.options.detection, this.options)), this.modules.i18nFormat && (u.i18nFormat = r(this.modules.i18nFormat), u.i18nFormat.init && u.i18nFormat.init(this)), this.translator = new T(this.services, this.options), this.translator.on("*", function (n) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                            e.emit.apply(e, [n].concat(r))
                        }), this.modules.external.forEach(function (n) {
                            n.init && n.init(e)
                        })
                    }
                    ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function (n) {
                        e[n] = function () {
                            var t;
                            return (t = e.store)[n].apply(t, arguments)
                        }
                    });
                    var s = y(), c = function () {
                        e.changeLanguage(e.options.lng, function (n, r) {
                            e.isInitialized = !0, e.logger.log("initialized", e.options), e.emit("initialized", e.options), s.resolve(r), t(n, r)
                        })
                    };
                    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), s
                }
            }, {
                key: "loadResources", value: function () {
                    var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M;
                    if (!this.options.resources || this.options.partialBundledLanguages) {
                        if (this.language && "cimode" === this.language.toLowerCase()) return n();
                        var t = [], r = function (n) {
                            n && e.services.languageUtils.toResolveHierarchy(n).forEach(function (e) {
                                t.indexOf(e) < 0 && t.push(e)
                            })
                        };
                        this.language ? r(this.language) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function (e) {
                            return r(e)
                        }), this.options.preload && this.options.preload.forEach(function (e) {
                            return r(e)
                        }), this.services.backendConnector.load(t, this.options.ns, n)
                    } else n(null)
                }
            }, {
                key: "reloadResources", value: function (e, n, t) {
                    var r = y();
                    return e || (e = this.languages), n || (n = this.options.ns), t || (t = M), this.services.backendConnector.reload(e, n, function (e) {
                        r.resolve(), t(e)
                    }), r
                }
            }, {
                key: "use", value: function (e) {
                    return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && $.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                }
            }, {
                key: "changeLanguage", value: function (e, n) {
                    var t = this, r = y();
                    this.emit("languageChanging", e);
                    var o = function (e) {
                        e && (t.language = e, t.languages = t.services.languageUtils.toResolveHierarchy(e), t.translator.language || t.translator.changeLanguage(e), t.services.languageDetector && t.services.languageDetector.cacheUserLanguage(e)), t.loadResources(function (o) {
                            !function (e, o) {
                                t.translator.changeLanguage(o), o && (t.emit("languageChanged", o), t.logger.log("languageChanged", o)), r.resolve(function () {
                                    return t.t.apply(t, arguments)
                                }), n && n(e, function () {
                                    return t.t.apply(t, arguments)
                                })
                            }(o, e)
                        })
                    };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), r
                }
            }, {
                key: "getFixedT", value: function (e, n) {
                    var t = this, r = function e(n, r) {
                        var i;
                        if ("object" !== o(r)) {
                            for (var u = arguments.length, s = new Array(u > 2 ? u - 2 : 0), c = 2; c < u; c++) s[c - 2] = arguments[c];
                            i = t.options.overloadTranslationOptionHandler([n, r].concat(s))
                        } else i = a({}, r);
                        return i.lng = i.lng || e.lng, i.lngs = i.lngs || e.lngs, i.ns = i.ns || e.ns, t.t(n, i)
                    };
                    return "string" == typeof e ? r.lng = e : r.lngs = e, r.ns = n, r
                }
            }, {
                key: "t", value: function () {
                    var e;
                    return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists", value: function () {
                    var e;
                    return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace", value: function (e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "hasLoadedNamespace", value: function (e) {
                    var n = this;
                    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                    var t = this.languages[0], r = !!this.options && this.options.fallbackLng,
                        o = this.languages[this.languages.length - 1];
                    if ("cimode" === t.toLowerCase()) return !0;
                    var i = function (e, t) {
                        var r = n.services.backendConnector.state["".concat(e, "|").concat(t)];
                        return -1 === r || 2 === r
                    };
                    return !!this.hasResourceBundle(t, e) || !this.services.backendConnector.backend || !(!i(t, e) || r && !i(o, e))
                }
            }, {
                key: "loadNamespaces", value: function (e, n) {
                    var t = this, r = y();
                    return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(function (e) {
                        t.options.ns.indexOf(e) < 0 && t.options.ns.push(e)
                    }), this.loadResources(function (e) {
                        r.resolve(), n && n(e)
                    }), r) : (n && n(), Promise.resolve())
                }
            }, {
                key: "loadLanguages", value: function (e, n) {
                    var t = y();
                    "string" == typeof e && (e = [e]);
                    var r = this.options.preload || [], o = e.filter(function (e) {
                        return r.indexOf(e) < 0
                    });
                    return o.length ? (this.options.preload = r.concat(o), this.loadResources(function (e) {
                        t.resolve(), n && n(e)
                    }), t) : (n && n(), Promise.resolve())
                }
            }, {
                key: "dir", value: function (e) {
                    return e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" : "rtl"
                }
            }, {
                key: "createInstance", value: function () {
                    return new n(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0)
                }
            }, {
                key: "cloneInstance", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
                        o = a({}, this.options, t, {isClone: !0}), i = new n(o);
                    return ["store", "services", "language"].forEach(function (n) {
                        i[n] = e[n]
                    }), i.translator = new T(i.services, i.options), i.translator.on("*", function (e) {
                        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                        i.emit.apply(i, [e].concat(t))
                    }), i.init(o, r), i.translator.options = i.options, i
                }
            }]), n
        }());
        n.default = F
    }
});
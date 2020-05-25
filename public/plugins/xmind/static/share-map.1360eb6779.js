!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "https://assets.xmind.net/www/", n(n.s = 176)
}({
    176: function (e, t, n) {
        "use strict";
        var r, o = n(72), i = n(33);
        var a = '6jQ3';

        function s() {
            new i.DotAnimation(".dot-animate", 3, ".");
            var e = /(micromessenger|webbrowser)/.test(navigator.userAgent.toLocaleLowerCase()),
                t = $(".share-map__loading").removeClass("invisible");
            if (e) {
                t.find("video").addClass("d-none");
                var n = t.find("img");
                n.attr("src", n.attr("data-src")), n.removeClass("d-none")
            }
        }

        $((r = regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        s(), new o.ShareMapCore({}, {hash: a});
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, e, this)
        }), function () {
            var e = r.apply(this, arguments);
            return new Promise(function (t, n) {
                return function r(o, i) {
                    try {
                        var a = e[o](i), s = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!a.done) return Promise.resolve(s).then(function (e) {
                        r("next", e)
                    }, function (e) {
                        r("throw", e)
                    });
                    t(s)
                }("next")
            })
        }))
    }, 33: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, o, i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.reformatDate = function (e) {
            var t = new Date((e || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
                n = ((new Date).getTime() - t.getTime()) / 1e3, r = Math.floor(n / 86400);
            if (!(isNaN(r) || r < 0 || r >= 31)) return 0 === r && ((n < 60 ? "just now" : n < 120 && "1 minute ago") || n < 3600 && Math.floor(n / 60) + " minutes ago" || n < 7200 && "1 hour ago" || n < 86400 && Math.floor(n / 3600) + " hours ago") || 1 === r && "Yesterday" || r < 7 && r + " days ago" || e
        }, t.reformatAmount = function (e) {
            var t = Number(e);
            return t > 1e3 ? (t / 1e3).toFixed(1) + "k" : t
        }, t.execForElement = function (e, t) {
            (e = $(e)).text(t(e.text()))
        }, t.DotAnimation = function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            a(this, e), this.el = $(t), this.count = n, this.char = r, this._chars = "", this.id = setInterval(function () {
                this._chars.length < this.count ? this._chars += this.char : this._chars = "", this.el.text(this._chars)
            }.bind(this), 500)
        }, t.downloadMap = (r = regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, api.getShareMapDownloadUrl(t);
                    case 2:
                        r = e.sent, (o = document.createElement("a")).setAttribute("download", n), o.href = r.downloadUrl, document.body.appendChild(o), o.click(), document.body.removeChild(o);
                    case 9:
                    case"end":
                        return e.stop()
                }
            }, e, this)
        }), o = function () {
            var e = r.apply(this, arguments);
            return new Promise(function (t, n) {
                return function r(o, i) {
                    try {
                        var a = e[o](i), s = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!a.done) return Promise.resolve(s).then(function (e) {
                        r("next", e)
                    }, function (e) {
                        r("throw", e)
                    });
                    t(s)
                }("next")
            })
        }, function (e, t) {
            return o.apply(this, arguments)
        }), t.WatchFunction = function () {
            function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;
                a(this, e), this.old = void 0, this.form = t, "function" == typeof this.form && (this.old = this.form()), this.callback = n, this.checker = setInterval(this.check.bind(this), r)
            }

            return i(e, [{
                key: "check", value: function () {
                    var e = this.form;
                    "function" == typeof e && (e = this.form()), e !== this.old && (this.old = e, this.callback(e))
                }
            }]), e
        }()
    }, 35: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), o = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function (e, t) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };

        function i(e, t, n) {
            var r = o(e.getContext("2d").getImageData(t, n, 1, 1).data, 4);
            return "rgba(" + r[0] + "," + r[1] + "," + r[2] + "," + r[3] + ")"
        }

        t.ImageColorPicker = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.canvas = document.createElement("canvas")
            }

            return r(e, [{
                key: "pickBackground", value: function (e) {
                    this.canvas.width = e.width, this.canvas.height = e.height;
                    var t = void 0, n = void 0;
                    e.hasAttribute("crossorigin") || e.setAttribute("crossorigin", "anonymous");
                    try {
                        return this.canvas.getContext("2d").drawImage(e, 0, 0, e.width, e.height), t = i(this.canvas, 1, 1), n = i(this.canvas, 1, parseInt(e.width)), function (e) {
                            var t = "", n = {}, r = !0, o = !1, i = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                                    var c = a.value;
                                    n[c] ? n[c]++ : n[c] = 0
                                }
                            } catch (e) {
                                o = !0, i = e
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            var u = !0, l = !1, h = void 0;
                            try {
                                for (var f, d = Object.keys(n)[Symbol.iterator](); !(u = (f = d.next()).done); u = !0) {
                                    var p = f.value;
                                    n[p] >= 0 && (t = p)
                                }
                            } catch (e) {
                                l = !0, h = e
                            } finally {
                                try {
                                    !u && d.return && d.return()
                                } finally {
                                    if (l) throw h
                                }
                            }
                            return t
                        }([i(this.canvas, 1, parseInt(e.height)), t, i(this.canvas, parseInt(e.width), parseInt(e.height)), n])
                    } catch (t) {
                        console.log(t, e)
                    }
                }
            }], [{
                key: "listenImage", value: function (e, t) {
                    $(e).on("load", function () {
                        t(this)
                    }).each(function (e, n) {
                        n.complete && t(this)
                    })
                }
            }]), e
        }()
    }, 72: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ShareMapCoreForGoogle = t.ShareMapCore = void 0;
        var r, o, i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, s = (r = m(regeneratorRuntime.mark(function e() {
            var t, n = this;
            return regeneratorRuntime.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, api.getShareMapContentUrl(this.options.hash);
                    case 2:
                        return t = e.sent, e.prev = 3, e.next = 6, (0, f.openXMindFile)(t.downloadUrl, "#content", this.options.hash);
                    case 6:
                        this.instance = e.sent, e.next = 13;
                        break;
                    case 9:
                        e.prev = 9, e.t0 = e.catch(3), utils.toast.show("Error"), console.log(e.t0.error);
                    case 13:
                        this.zoomer = new u.ZoomSlider({
                            appendTo: ".share-map__zoom-control",
                            vertical: "horizontal" !== this.options.zoomSliderDirection,
                            initVal: 100,
                            max: 200,
                            min: 50,
                            callback: function (e, t) {
                                var n = e.value;
                                e.percentage, t.text(Math.ceil(n) + "%"), window._we_.zoom(n)
                            }
                        }), new h.WatchFunction(this.instance.getZoomPencentage.bind(this), function (e) {
                            n.zoomer && n.zoomer.updateByValue(e, !1)
                        });
                    case 15:
                    case"end":
                        return e.stop()
                }
            }, e, this, [[3, 9]])
        })), function () {
            return r.apply(this, arguments)
        }), c = (o = m(regeneratorRuntime.mark(function e() {
            var t = this;
            return regeneratorRuntime.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, (0, f.openXMindFile)(this.options.downloadUrl, "#content", this.options.hash, this.options.accessToken);
                    case 3:
                        this.instance = e.sent, e.next = 11;
                        break;
                    case 6:
                        return e.prev = 6, e.t0 = e.catch(0), utils.toast.show("This file is encrypted.", 5e3), this.els.loading.hide(), e.abrupt("return");
                    case 11:
                        this.zoomer = new u.ZoomSlider({
                            appendTo: ".share-map__zoom-control",
                            vertical: "horizontal" !== this.options.zoomSliderDirection,
                            initVal: 100,
                            max: 200,
                            min: 50,
                            callback: function (e, t) {
                                var n = e.value;
                                e.percentage, t.text(Math.ceil(n) + "%"), window._we_.zoom(n)
                            }
                        }), new h.WatchFunction(this.instance.getZoomPencentage.bind(this), function (e) {
                            t.zoomer && t.zoomer.updateByValue(e, !1)
                        });
                    case 13:
                    case"end":
                        return e.stop()
                }
            }, e, this, [[0, 6]])
        })), function () {
            return o.apply(this, arguments)
        }), u = n(73), l = n(35), h = n(33), f = n(74), d = n(79);

        function p(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function m(e) {
            return function () {
                var t = e.apply(this, arguments);
                return new Promise(function (e, n) {
                    return function r(o, i) {
                        try {
                            var a = t[o](i), s = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(s).then(function (e) {
                            r("next", e)
                        }, function (e) {
                            r("throw", e)
                        });
                        e(s)
                    }("next")
                })
            }
        }

        var v = {
            self: ".share-map",
            content: "#content",
            download: ".share-map__downloads, .share-map__btn-downloads",
            share: ".share-map__share-control",
            embedShare: {
                control: "#embed-share",
                textarea: ".share-map__embed textarea",
                self: ".share-map__embed",
                mask: ".share-map__menu-mask",
                close: ".share-map__embed-head span",
                copy: ".share-map__embed-copy"
            },
            menu: {self: ".share-map__menu", control: ".share-map__menu-control", mask: ".share-map__menu-mask"},
            outline: {
                wrapper: ".share-map__outline-wrapper",
                control: ".share-map__menu-outline-switcher",
                mask: ".share-map__outline-mask"
            },
            fb: "#facebook-share",
            tw: "#twitter-share",
            lk: "#linkedin-share",
            loading: ".share-map__loading",
            zoom: ".share-map__zoom-control"
        };

        function w(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = !0, r = !1, o = void 0;
            try {
                for (var i, s = Object.keys(e)[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                    var c = i.value;
                    "string" == typeof e[c] ? e[c] = $((t ? t + " " : "") + e[c]) : e[c] && "object" === a(e[c]) && w(e[c], t)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && s.return && s.return()
                } finally {
                    if (r) throw o
                }
            }
        }

        function g(e) {
            var t = this;
            this.els.download.on("click", function () {
                return (0, h.downloadMap)(t.options.hash)
            });
            var n = encodeURI(window.location.href), r = encodeURIComponent($("title").text()),
                o = "width=600, height=400";
            this.els.fb.on("click", function () {
                return window.open("https://www.facebook.com/sharer/sharer.php?u=" + n, "Share to Facebook", o)
            }), this.els.tw.on("click", function () {
                return window.open("http://twitter.com/share?text=" + r + "&url=" + n + "&hashtags=XMind", "Share to Twitter", o)
            }), this.els.lk.on("click", function () {
                return window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + n + "&title=" + r, "Share to Linkedin", o)
            }), this.els.embedShare.control.on("click", function () {
                return t.els.embedShare.self.show()
            }), this.els.embedShare.textarea.val("<iframe src='https://www.xmind.net/embed/" + this.options.hash + "/' width='750' height='540' frameborder='0' scrolling='no' allowfullscreen=\"true\"></iframe>"), this.els.embedShare.textarea.on("keydown", function (e) {
                return e.preventDefault()
            }), this.els.embedShare.textarea.on("click", function (e) {
                return e.preventDefault() & t.els.embedShare.textarea.select()
            }), this.els.embedShare.close.on("click", function (e) {
                return t.els.embedShare.self.hide()
            }), this.els.embedShare.copy.on("click", function () {
                t.els.embedShare.textarea.select(), document.execCommand("Copy"), utils.toast.show("Code Copied.")
            }), this.els.outline.mask.on("touchstart", function () {
                return t.els.self.removeClass("menu-active outline-sm-active")
            }).on("click", function () {
                return t.els.self.removeClass("menu-active outline-sm-active")
            }), this.els.menu.mask.on("touchstart", function () {
                return t.els.self.removeClass("outline-sm-active menu-active")
            }).on("click", function () {
                return t.els.self.removeClass("outline-sm-active menu-active")
            }), this.els.menu.control.on("click", function () {
                return t.els.self.toggleClass("menu-active")
            }), this.els.outline.control.on("click", function (e) {
                return t.els.self.toggleClass("outline-sm-active") & e.stopPropagation()
            }), new d.ElementGesture(this.els.content).on("zoom", function (e) {
                var n = e.current, r = e.start;
                e.last, e.direction, e.startEvent, e.moveEvent, t.zoomer && t.zoomer.update(t.zoomer.percentage + .03 * (n - r))
            }), new d.ElementGesture(this.els.menu.self).on("swipe", function (e) {
                var n = e.verticalDirection, r = e.verticalMoved;
                "up" === n && Math.abs(r) > 150 && (t.els.self.addClass("outline-sm-active"), t.isEmbed && t.els.self.addClass("menu-active"))
            }), new d.ElementGesture(this.els.outline.wrapper).on("swipe", function (e) {
                var n = e.verticalDirection, r = e.verticalMoved;
                "down" === n && Math.abs(r) > 150 && 0 === $(".share-map__outline-wrapper").scrollTop() && (t.els.self.removeClass("outline-sm-active"), t.isEmbed && t.els.self.removeClass("menu-active"))
            })
        }

        function y() {
            "iOS" === utils.getOS() && document.addEventListener("gesturestart", function (e) {
                e.preventDefault()
            })
        }

        function b() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = new l.ImageColorPicker;
            l.ImageColorPicker.listenImage($(e + " .share-map__more-cell img:not(.corrected)"), function (e) {
                var n = $(e);
                n.addClass("corrected"), n.parent().css({"background-color": t.pickBackground(n[0])})
            })
        }

        function k(e, t) {
            switch (e) {
                case"menu":
                    this.els.self[t]("menu-active");
                    break;
                case"outline":
                    this.els.self[t]("outline-sm-active");
                    break;
                default:
                    this.els.self[t]("menu-active")
            }
        }

        t.ShareMapCore = function () {
            function e() {
                var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                p(this, e), this.options = r, this.els = Object.assign({}, v, n), (0, h.execForElement)(".share-map__publish-data", h.reformatDate), (0, h.execForElement)(".share-map__views span.text", h.reformatAmount), (0, h.execForElement)(".share-map__downloads span.text", h.reformatAmount), y(), b(this.els.self), w.call(this, this.els, this.options.prefix), this.isEmbed = this.els.self.hasClass("embed"), g.call(this), s.call(this).then(function () {
                    return t.els.loading.hide()
                })
            }

            return i(e, [{
                key: "open", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "menu";
                    k.call(this, e, "addClass")
                }
            }, {
                key: "close", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "menu";
                    k.call(this, e, "removeClass")
                }
            }, {
                key: "toggle", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "menu";
                    k.call(this, e, "toggleClass")
                }
            }]), e
        }(), t.ShareMapCoreForGoogle = function () {
            function e() {
                var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                p(this, e), this.options = r, this.els = Object.assign({}, v, n), (0, h.execForElement)(".share-map__publish-data", h.reformatDate), (0, h.execForElement)(".share-map__views span.text", h.reformatAmount), (0, h.execForElement)(".share-map__downloads span.text", h.reformatAmount), y(), b(this.els.self), w.call(this, this.els, this.options.prefix), this.isEmbed = this.els.self.hasClass("embed"), g.call(this), c.call(this).then(function () {
                    return t.els.loading.hide()
                })
            }

            return i(e, [{
                key: "open", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "menu";
                    k.call(this, e, "addClass")
                }
            }, {
                key: "close", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "menu";
                    k.call(this, e, "removeClass")
                }
            }, {
                key: "toggle", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "menu";
                    k.call(this, e, "toggleClass")
                }
            }]), e
        }()
    }, 73: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

        function o(e, t, n) {
            return e > n ? e = n : e < t && (e = t), e
        }

        var i = '\n<div class="zoom-slider">\n    <div class="zoom-head">\n        <span class="icon-plus"></span>\n    </div>\n    <div class="zoom-body">\n        <div class="zoom-body-indicate"></div>\n        <div class="zoom-slider">\n            <div class="zoom-progress-tips"></div>\n        </div>\n    </div>\n    <div class="zoom-footer">\n        <span class="icon-minus"></span>\n    </div>\n</div>\n';
        t.ZoomSlider = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.vertical,
                    r = void 0 !== n && n, o = t.initVal, a = void 0 === o ? 0 : o, s = t.max,
                    c = void 0 === s ? 100 : s, u = t.min, l = void 0 === u ? 0 : u, h = t.callback, f = t.appendTo,
                    d = void 0 === f ? "body" : f;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.entity = $(i), this.middle = this.entity.find(".zoom-body"), this.bottom = this.entity.find(".zoom-footer"), this.slider = this.entity.find(".zoom-body > .zoom-slider"), this.tip = this.entity.find(".zoom-progress-tips"), $(d).append(this.entity), this.percentage = 0, this.px = 0, this.isVertical = r, this.max = c, this.min = l, this.isVertical ? this.sliderLength = this.middle.height() - this.slider.height() : (this.entity.addClass("horizontal"), this.sliderLength = this.middle.width() - this.slider.width()), this.percentageFactor = 1 / this.sliderLength * 100, this.key = {
                    screenOffset: this.isVertical ? "screenY" : "screenX",
                    originalOffset: this.isVertical ? "bottom" : "left",
                    offset: this.isVertical ? "offsetY" : "offsetX"
                }, this.callback = h, function () {
                    var e = this;
                    this.middle.on("click", function (t) {
                        return e.updateByPx(e.sliderLength - t[[e.key.offset]])
                    });
                    var t = this;
                    this.slider.on("touchstart", function (n) {
                        n.preventDefault();
                        var r = n.touches[0][t.key.screenOffset], o = parseInt(e.slider.css(e.key.originalOffset));

                        function i(e) {
                            e.preventDefault();
                            var n = r - e.touches[0][t.key.screenOffset];
                            t.isVertical ? t.updateByPx(o + n) : t.updateByPx(o - n)
                        }

                        e.entity.addClass("moving"), $(window).on("touchmove", i), $(window).on("touchend", function e() {
                            $(window).off("touchmove", i), $(window).off("touchstart", e), t.entity.removeClass("moving")
                        })
                    }), this.slider.on("mousedown", function (n) {
                        var r = n[t.key.screenOffset], o = parseInt(e.slider.css(e.key.originalOffset));

                        function i(e) {
                            var n = r - e[t.key.screenOffset];
                            t.isVertical ? t.updateByPx(o + n) : t.updateByPx(o - n)
                        }

                        $(window).on("mousemove", i), $(window).on("mouseup", function e() {
                            $(window).off("mousemove", i), $(window).off("mouseup", e), t.entity.removeClass("moving"), setTimeout(function () {
                                return t.middle.on("click", function (e) {
                                    return t.updateByPx(t.sliderLength - e[t.key.offset])
                                }, 0)
                            })
                        }), e.middle.off("click"), e.entity.addClass("moving")
                    })
                }.call(this), this.updateByValue(a, !0)
            }

            return r(e, [{
                key: "update", value: function (e) {
                    var t, n, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    e = o(e, 0, 100), this.percentage = e, this.updateByPx((t = e, n = this.percentageFactor, (t = o(t = parseFloat(t), 0, 100)) / n), r)
                }
            }, {
                key: "updateByValue", value: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.update(100 * (1 - (this.max - e) / (this.max - this.min)), t)
                }
            }, {
                key: "updateByPx", value: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (e = o(e, 0, this.sliderLength), this.slider.css(function (e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }({}, this.key.originalOffset, e + "px")), t && this.callback) {
                        var n = function (e, t) {
                            return t * parseInt(e)
                        }(e, this.percentageFactor), r = (this.max - this.min) * n / 100 + this.min;
                        this.callback({value: r, percentage: n}, this.tip)
                    }
                }
            }]), e
        }()
    }, 74: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.openXMindFile = void 0;
        var r, o, i, a = (r = l(regeneratorRuntime.mark(function e(t, n) {
            var r, o, i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return regeneratorRuntime.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return r = window._SB_, window._we_ && (window._we_.close(), window._we_ = null), a = "cn" === window.lang ? Object.assign({
                            languageCode: "zh-CN",
                            resourceUrlPrefix: "https://assets.xmind.cn/www/assets/",
                            type: "xmind"
                        }, a) : Object.assign({
                            languageCode: "zh-CN",
                            resourceUrlPrefix: "https://assets.xmind.net/www/assets/",
                            type: "xmind"
                        }, a), o = $('<div class="editor-content"></div>'), e.next = 6, r.createWorkbookEditor(n, o[0], a);
                    case 6:
                        return i = window._we_ = e.sent, $(t).append(o), i.switchSheetTo(0), e.abrupt("return", i);
                    case 10:
                    case"end":
                        return e.stop()
                }
            }, e, this)
        })), function (e, t) {
            return r.apply(this, arguments)
        }), s = t.openXMindFile = (o = l(regeneratorRuntime.mark(function e(t, n, r) {
            var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return regeneratorRuntime.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (h) {
                            e.next = 4;
                            break
                        }
                        return e.next = 3, (0, u.default)();
                    case 3:
                        h = !0;
                    case 4:
                        // 不要从缓存中取数据
                        //if (!(o = c.shareMapStorage.get(r))) {
                            e.next = 21;
                            break
                        //}
                        return e.prev = 6, console.log("load form cache"), e.next = 10, a(n, o);
                    case 10:
                        return e.abrupt("return", e.sent);
                    case 13:
                        return e.prev = 13, e.t0 = e.catch(6), c.shareMapStorage.clear(r), e.next = 18, s(t, n, r);
                    case 18:
                        return e.abrupt("return", e.sent);
                    case 19:
                        e.next = 23;
                        break;
                    case 21:
                        return console.log("load form server"), e.abrupt("return", new Promise(function (e, o) {
                            var s = new XMLHttpRequest;
                            s.addEventListener("load", function (t) {
                                a(n, s.response).then(function (t) {
                                    c.shareMapStorage.save(r, s.response), e(t)
                                }).catch(function (e) {
                                    "PasswordError" === e && o()
                                })
                            }), s.addEventListener("error", function (e) {
                                return console.log(e)
                            }), s.addEventListener("abort", function (e) {
                                return console.log(e)
                            }), s.open("GET", t), s.setRequestHeader("Cache-Control", "no-cache"), i && s.setRequestHeader("Authorization", "Bearer " + i), s.responseType = "arraybuffer", s.send()
                        }));
                    case 23:
                    case"end":
                        return e.stop()
                }
            }, e, this, [[6, 13]])
        })), function (e, t, n) {
            return o.apply(this, arguments)
        }), c = n(75), u = (i = n(78)) && i.__esModule ? i : {default: i};

        function l(e) {
            return function () {
                var t = e.apply(this, arguments);
                return new Promise(function (e, n) {
                    return function r(o, i) {
                        try {
                            var a = t[o](i), s = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(s).then(function (e) {
                            r("next", e)
                        }, function (e) {
                            r("throw", e)
                        });
                        e(s)
                    }("next")
                })
            }
        }

        var h = !1
    }, 75: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.shareMapStorage = void 0;
        var r, o = n(76), i = (r = n(77)) && r.__esModule ? r : {default: r}, a = "share-map", s = a + ".index",
            c = a + ".version", u = void 0;
        try {
            u = window.localStorage
        } catch (e) {
            console.log(e)
        }

        function l() {
            return u.getItem(s).split(".").filter(function (e) {
                return e && u.hasOwnProperty(a + "." + e)
            })
        }

        function h() {
            var e = l(), t = e.shift();
            console.log("removing, ", t), u.removeItem(a + "." + t), u.setItem(s, e.join("."))
        }

        function f() {
            return l().reduce(function (e, t) {
                return e + u.getItem(a + "." + t).length
            }, 0)
        }

        u || (u = {
            setItem: function () {
                return ""
            }, getItem: function () {
                return ""
            }, removeItem: function () {
                return ""
            }, clear: function () {
                return ""
            }
        }), u.hasOwnProperty(s) || u.setItem(s, "");
        var d = t.shareMapStorage = {
            save: function (e, t) {
                try {
                    var n = l();
                    if (n.includes(e)) return;
                    if (t.byteLength > 2621440) return void console.log("this map will not cached due to map size over storage limitation.");
                    for (var r = i.default.compress((0, o.encode)(t)); f() + r.length >= 2621440;) console.log("reach storage limit, clean up old map ..."), h();
                    n.push(e), u.setItem(a + "." + e, r), u.setItem(s, n.join("."))
                } catch (e) {
                    return console.log(e), null
                }
            }, get: function (e) {
                try {
                    d.isCurrentVersion() || (d.updateVersion(), console.log("share-map storage version updated."));
                    var t = u.getItem(a + "." + e);
                    return t ? (0, o.decode)(i.default.decompress(t)) : null
                } catch (e) {
                    return console.log(e), null
                }
            }, clear: function (e) {
                var t = l();
                e ? (t = t.filter(function (t) {
                    return e !== t
                }), u.removeItem(a + "." + e), u.setItem(s, t.join("."))) : (t.forEach(function (e) {
                    return u.removeItem(a + "." + e)
                }), u.setItem(s, ""))
            }, clearAll: function () {
                l().forEach(function (e) {
                    return d.clear(e)
                })
            }, isCurrentVersion: function () {
                return "lz-compression-1.0" === u.getItem(c)
            }, updateVersion: function () {
                d.clearAll(), u.setItem(c, "lz-compression-1.0")
            }, getStorageSize: f, getIndexes: l, cleanFirst: h
        };
        window.shareMapStorage = d
    }, 76: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.encode = function (e) {
            var t, n = new Uint8Array(e), o = n.length, i = "";
            for (t = 0; t < o; t += 3) i += r[n[t] >> 2], i += r[(3 & n[t]) << 4 | n[t + 1] >> 4], i += r[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], i += r[63 & n[t + 2]];
            return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
        }, t.decode = function (e) {
            var t, n, r, i, a, s = .75 * e.length, c = e.length, u = 0;
            "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
            var l = new ArrayBuffer(s), h = new Uint8Array(l);
            for (t = 0; t < c; t += 4) n = o[e.charCodeAt(t)], r = o[e.charCodeAt(t + 1)], i = o[e.charCodeAt(t + 2)], a = o[e.charCodeAt(t + 3)], h[u++] = n << 2 | r >> 4, h[u++] = (15 & r) << 4 | i >> 2, h[u++] = (3 & i) << 6 | 63 & a;
            return l
        };
        for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = new Uint8Array(256), i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i
    }, 77: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
            var e = String.fromCharCode, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", r = {};

            function o(e, t) {
                if (!r[e]) {
                    r[e] = {};
                    for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n
                }
                return r[e][t]
            }

            var i = {
                compressToBase64: function (e) {
                    if (null == e) return "";
                    var n = i._compress(e, 6, function (e) {
                        return t.charAt(e)
                    });
                    switch (n.length % 4) {
                        default:
                        case 0:
                            return n;
                        case 1:
                            return n + "===";
                        case 2:
                            return n + "==";
                        case 3:
                            return n + "="
                    }
                }, decompressFromBase64: function (e) {
                    return null == e ? "" : "" == e ? null : i._decompress(e.length, 32, function (n) {
                        return o(t, e.charAt(n))
                    })
                }, compressToUTF16: function (t) {
                    return null == t ? "" : i._compress(t, 15, function (t) {
                        return e(t + 32)
                    }) + " "
                }, decompressFromUTF16: function (e) {
                    return null == e ? "" : "" == e ? null : i._decompress(e.length, 16384, function (t) {
                        return e.charCodeAt(t) - 32
                    })
                }, compressToUint8Array: function (e) {
                    for (var t = i.compress(e), n = new Uint8Array(2 * t.length), r = 0, o = t.length; r < o; r++) {
                        var a = t.charCodeAt(r);
                        n[2 * r] = a >>> 8, n[2 * r + 1] = a % 256
                    }
                    return n
                }, decompressFromUint8Array: function (t) {
                    if (null === t || void 0 === t) return i.decompress(t);
                    for (var n = new Array(t.length / 2), r = 0, o = n.length; r < o; r++) n[r] = 256 * t[2 * r] + t[2 * r + 1];
                    var a = [];
                    return n.forEach(function (t) {
                        a.push(e(t))
                    }), i.decompress(a.join(""))
                }, compressToEncodedURIComponent: function (e) {
                    return null == e ? "" : i._compress(e, 6, function (e) {
                        return n.charAt(e)
                    })
                }, decompressFromEncodedURIComponent: function (e) {
                    return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), i._decompress(e.length, 32, function (t) {
                        return o(n, e.charAt(t))
                    }))
                }, compress: function (t) {
                    return i._compress(t, 16, function (t) {
                        return e(t)
                    })
                }, _compress: function (e, t, n) {
                    if (null == e) return "";
                    var r, o, i, a = {}, s = {}, c = "", u = "", l = "", h = 2, f = 3, d = 2, p = [], m = 0, v = 0;
                    for (i = 0; i < e.length; i += 1) if (c = e.charAt(i), Object.prototype.hasOwnProperty.call(a, c) || (a[c] = f++, s[c] = !0), u = l + c, Object.prototype.hasOwnProperty.call(a, u)) l = u; else {
                        if (Object.prototype.hasOwnProperty.call(s, l)) {
                            if (l.charCodeAt(0) < 256) {
                                for (r = 0; r < d; r++) m <<= 1, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++;
                                for (o = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, o >>= 1
                            } else {
                                for (o = 1, r = 0; r < d; r++) m = m << 1 | o, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, o = 0;
                                for (o = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, o >>= 1
                            }
                            0 == --h && (h = Math.pow(2, d), d++), delete s[l]
                        } else for (o = a[l], r = 0; r < d; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, o >>= 1;
                        0 == --h && (h = Math.pow(2, d), d++), a[u] = f++, l = String(c)
                    }
                    if ("" !== l) {
                        if (Object.prototype.hasOwnProperty.call(s, l)) {
                            if (l.charCodeAt(0) < 256) {
                                for (r = 0; r < d; r++) m <<= 1, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++;
                                for (o = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, o >>= 1
                            } else {
                                for (o = 1, r = 0; r < d; r++) m = m << 1 | o, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, o = 0;
                                for (o = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, o >>= 1
                            }
                            0 == --h && (h = Math.pow(2, d), d++), delete s[l]
                        } else for (o = a[l], r = 0; r < d; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, o >>= 1;
                        0 == --h && (h = Math.pow(2, d), d++)
                    }
                    for (o = 2, r = 0; r < d; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, o >>= 1;
                    for (; ;) {
                        if (m <<= 1, v == t - 1) {
                            p.push(n(m));
                            break
                        }
                        v++
                    }
                    return p.join("")
                }, decompress: function (e) {
                    return null == e ? "" : "" == e ? null : i._decompress(e.length, 32768, function (t) {
                        return e.charCodeAt(t)
                    })
                }, _decompress: function (t, n, r) {
                    var o, i, a, s, c, u, l, h = [], f = 4, d = 4, p = 3, m = "", v = [],
                        w = {val: r(0), position: n, index: 1};
                    for (o = 0; o < 3; o += 1) h[o] = o;
                    for (a = 0, c = Math.pow(2, 2), u = 1; u != c;) s = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = n, w.val = r(w.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
                    switch (a) {
                        case 0:
                            for (a = 0, c = Math.pow(2, 8), u = 1; u != c;) s = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = n, w.val = r(w.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
                            l = e(a);
                            break;
                        case 1:
                            for (a = 0, c = Math.pow(2, 16), u = 1; u != c;) s = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = n, w.val = r(w.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
                            l = e(a);
                            break;
                        case 2:
                            return ""
                    }
                    for (h[3] = l, i = l, v.push(l); ;) {
                        if (w.index > t) return "";
                        for (a = 0, c = Math.pow(2, p), u = 1; u != c;) s = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = n, w.val = r(w.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
                        switch (l = a) {
                            case 0:
                                for (a = 0, c = Math.pow(2, 8), u = 1; u != c;) s = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = n, w.val = r(w.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
                                h[d++] = e(a), l = d - 1, f--;
                                break;
                            case 1:
                                for (a = 0, c = Math.pow(2, 16), u = 1; u != c;) s = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = n, w.val = r(w.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
                                h[d++] = e(a), l = d - 1, f--;
                                break;
                            case 2:
                                return v.join("")
                        }
                        if (0 == f && (f = Math.pow(2, p), p++), h[l]) m = h[l]; else {
                            if (l !== d) return null;
                            m = i + i.charAt(0)
                        }
                        v.push(m), h[d++] = i + m.charAt(0), i = m, 0 == --f && (f = Math.pow(2, p), p++)
                    }
                }
            };
            return i
        }()
    }, 78: function (e, t, n) {
        "use strict";

        function r(e) {
            return new Promise(function (t) {
                var n = document.createElement("script");
                n.src = e, n.onload = t, document.body.appendChild(n)
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
            var e, t = (e = regeneratorRuntime.mark(function e() {
                var t, n, o, i, a, s, c, u;
                return regeneratorRuntime.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            n = [
                                './static/snowbrush-f94399cf91.js',
                            ], o = !0, i = !1, a = void 0, e.prev = 5, s = n[Symbol.iterator]();
                        case 7:
                            if (o = (c = s.next()).done) {
                                e.next = 14;
                                break
                            }
                            return u = c.value, e.next = 11, r(u);
                        case 11:
                            o = !0, e.next = 7;
                            break;
                        case 14:
                            e.next = 20;
                            break;
                        case 16:
                            e.prev = 16, e.t0 = e.catch(5), i = !0, a = e.t0;
                        case 20:
                            e.prev = 20, e.prev = 21, !o && s.return && s.return();
                        case 23:
                            if (e.prev = 23, !i) {
                                e.next = 26;
                                break
                            }
                            throw a;
                        case 26:
                            return e.finish(23);
                        case 27:
                            return e.finish(20);
                        case 28:
                        case"end":
                            return e.stop()
                    }
                }, e, this, [[5, 16, 20, 28], [21, , 23, 27]])
            }), function () {
                var t = e.apply(this, arguments);
                return new Promise(function (e, n) {
                    return function r(o, i) {
                        try {
                            var a = t[o](i), s = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(s).then(function (e) {
                            r("next", e)
                        }, function (e) {
                            r("throw", e)
                        });
                        e(s)
                    }("next")
                })
            });
            return function () {
                return t.apply(this, arguments)
            }
        }()
    }, 79: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), o = function (e, t) {
            var n = e.screenY, r = e.screenX, o = t.screenY, i = t.screenX;
            return Math.sqrt((n - o) * (n - o) + (r - i) * (r - i))
        }, i = {zoom: {last: 0, direction: void 0}, swipe: {last: 0, direction: void 0}}, a = {
            zoom: function (e, t, n) {
                if (t && !(e.touches.length < 2)) {
                    var r = o(e.touches[0], e.touches[1]), i = o(t.touches[0], t.touches[1]),
                        a = this._store.zoom.last.current, s = {
                            direction: a - i > 0 ? "zoom-out" : "zoom-in",
                            start: r,
                            current: i,
                            last: a,
                            startEvent: e,
                            moveEvent: t
                        };
                    delete s.last, this._store.zoom.last = s, this.callbacks.zoom.forEach(function (e) {
                        return e(s)
                    })
                }
            }, swipe: function (e, t, n) {
                if (!(e.touches.length > 1)) {
                    if (t && !n) return this._store.swipe.lastTouch = t;
                    if (this._store.swipe.lastTouch) {
                        n = this._store.swipe.lastTouch;
                        var r = o(e.touches[0], n.touches[0]), i = e.touches[0].screenX - n.touches[0].screenX,
                            a = i > 0 ? "left" : "right", s = e.touches[0].screenY - n.touches[0].screenY, c = {
                                distance: r,
                                horizonMoved: i,
                                verticalDirection: s > 0 ? "up" : "down",
                                verticalMoved: s,
                                horizonDirection: a
                            };
                        this.callbacks.swipe.forEach(function (e) {
                            return e(c)
                        }), this._store.swipe.lastTouch = void 0
                    }
                }
            }
        };
        t.ElementGesture = function () {
            function e(t) {
                var n = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.callbacks = {}, Object.keys(a).forEach(function (e) {
                    return n.callbacks[e] = []
                }), this._store = Object.assign({}, i), this.setElement(t)
            }

            return r(e, [{
                key: "on", value: function (e, t) {
                    return a.hasOwnProperty(e) && this.callbacks[e].push(t), this
                }
            }, {
                key: "off", value: function (e, t) {
                    var n = this;
                    if (Object.keys(a).includes(e)) if (e) if (t) {
                        var r = this.callbacks[e].indexOf(t);
                        ~r && this.callbacks[e].splice(r, 1)
                    } else this.callbacks[e] = []; else this.callbacks = {}, Object.keys(a).forEach(function (e) {
                        return n.callbacks[e] = {}
                    })
                }
            }, {
                key: "setElement", value: function (e) {
                    this._element && this._element.off("touchstart"), this._element = e;
                    var t = this;
                    $(e).on("touchstart", function (e) {
                        function n(n) {
                            Object.values(a).forEach(function (r) {
                                return r.call(t, e, n, null)
                            })
                        }

                        $(window).on("touchmove", n), $(window).on("touchend", function r(o) {
                            $(window).off("touchmove", n), $(window).off("touchstart", r), $(window).off("touchend", r), Object.values(a).forEach(function (n) {
                                return n.call(t, e, null, o)
                            })
                        })
                    })
                }
            }]), e
        }()
    }
});
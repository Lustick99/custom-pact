(function(e) {
    function t(t) {
        for (var a, o, r = t[0], l = t[1], c = t[2], m = 0, d = []; m < r.length; m++)
            o = r[m],
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && d.push(i[o][0]),
            i[o] = 0;
        for (a in l)
            Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        u && u(t);
        while (d.length)
            d.shift()();
        return s.push.apply(s, c || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], a = !0, r = 1; r < n.length; r++) {
                var l = n[r];
                0 !== i[l] && (a = !1)
            }
            a && (s.splice(t--, 1),
            e = o(o.s = n[0]))
        }
        return e
    }
    var a = {}
      , i = {
        app: 0
    }
      , s = [];
    function o(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.m = e,
    o.c = a,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                o.d(n, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = r.push.bind(r);
    r.push = t,
    r = r.slice();
    for (var c = 0; c < r.length; c++)
        t(r[c]);
    var u = l;
    s.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    1: function(e, t) {},
    2: function(e, t) {},
    "20c9": function(e, t, n) {},
    "446a": function(e, t, n) {},
    4678: function(e, t, n) {
        var a = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function i(e) {
            var t = s(e);
            return n(t)
        }
        function s(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        i.keys = function() {
            return Object.keys(a)
        }
        ,
        i.resolve = s,
        e.exports = i,
        i.id = "4678"
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = {};
        n.r(a),
        n.d(a, "SvgIcon", (function() {
            return Q
        }
        )),
        n.d(a, "ScrollBox", (function() {
            return te
        }
        )),
        n.d(a, "DropDown", (function() {
            return re
        }
        )),
        n.d(a, "NavigationFooter", (function() {
            return pe
        }
        )),
        n.d(a, "NavigationTop", (function() {
            return Ce
        }
        )),
        n.d(a, "NavigationSide", (function() {
            return Pe
        }
        )),
        n.d(a, "ActionButton", (function() {
            return Le
        }
        )),
        n.d(a, "ActionSlide", (function() {
            return Ue
        }
        )),
        n.d(a, "ActionModal", (function() {
            return He
        }
        )),
        n.d(a, "ActionModalThanks", (function() {
            return Ke
        }
        )),
        n.d(a, "ActionAlert", (function() {
            return at
        }
        )),
        n.d(a, "ScheduleWeek", (function() {
            return ct
        }
        )),
        n.d(a, "NavigationHeader", (function() {
            return ht
        }
        )),
        n.d(a, "NavigationBreadcrumb", (function() {
            return Ct
        }
        )),
        n.d(a, "DynamicElement", (function() {
            return wt
        }
        )),
        n.d(a, "LocaleLink", (function() {
            return jt
        }
        )),
        n.d(a, "BrandGraphic", (function() {
            return St
        }
        )),
        n.d(a, "OverlayModal", (function() {
            return Rt
        }
        )),
        n.d(a, "Newsletter", (function() {
            return T
        }
        ));
        var i = {};
        n.r(i),
        n.d(i, "HomeHeader", (function() {
            return H
        }
        )),
        n.d(i, "HomeBullets", (function() {
            return Ht
        }
        )),
        n.d(i, "HomeEvents", (function() {
            return sn
        }
        )),
        n.d(i, "HomeGallery", (function() {
            return en
        }
        )),
        n.d(i, "HomeTestimonies", (function() {
            return mn
        }
        )),
        n.d(i, "HomeAbout", (function() {
            return vn
        }
        )),
        n.d(i, "HomeContact", (function() {
            return Fn
        }
        )),
        n.d(i, "HomeContactForm", (function() {
            return An
        }
        )),
        n.d(i, "HomeSponsor", (function() {
            return Sn
        }
        )),
        n.d(i, "HomeService", (function() {
            return Rn
        }
        )),
        n.d(i, "HomeTopics", (function() {
            return Wn
        }
        )),
        n.d(i, "HomeLogos", (function() {
            return Zn
        }
        )),
        n.d(i, "HomeNewsletter", (function() {
            return sa
        }
        ));
        var s = {};
        n.r(s),
        n.d(s, "EventsHeader", (function() {
            return va
        }
        )),
        n.d(s, "EventsIndex", (function() {
            return Aa
        }
        ));
        var o = {};
        n.r(o),
        n.d(o, "EventsAnnualHeader", (function() {
            return Ma
        }
        )),
        n.d(o, "EventsAnnualIndex", (function() {
            return Ga
        }
        ));
        var r = {};
        n.r(r),
        n.d(r, "TeamHeader", (function() {
            return ti
        }
        )),
        n.d(r, "TeamIndex", (function() {
            return ri
        }
        )),
        n.d(r, "TeamCta", (function() {
            return pi
        }
        ));
        var l = {};
        n.r(l),
        n.d(l, "AboutHeader", (function() {
            return Mi
        }
        )),
        n.d(l, "AboutMission", (function() {
            return Gi
        }
        )),
        n.d(l, "AboutTeam", (function() {
            return Qi
        }
        ));
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d"),
        n("20c9"),
        n("d3b7");
        var c = n("343c")
          , u = n.n(c);
        u.a.once("hide", (function() {
            window.prerenderReady = !0
        }
        )),
        fetch("/icons.svg").then((function(e) {
            return e.text()
        }
        )).then((function(e) {
            return document.body.insertAdjacentHTML("afterbegin", e)
        }
        ));
        var m = n("2b0e")
          , d = n("58ca")
          , p = n("b9ad")
          , g = n.n(p)
          , h = n("5530")
          , f = n("8c4f")
          , v = (n("99af"),
        new m["a"]({
            name: "EventBusVm",
            data: function() {
                return {
                    contentLoaded: !1
                }
            }
        }))
          , b = {
            on: function(e, t) {
                v.$on(e, t)
            },
            once: function(e, t) {
                v.$once(e, t)
            },
            off: function(e, t) {
                v.$off(e, t)
            },
            emit: function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                v.$emit.apply(v, [e].concat(n))
            },
            get contentLoaded() {
                return v.contentLoaded
            }
        }
          , y = function() {
            m["a"].prototype.$bus = b
        }
          , _ = (n("d81d"),
        n("b0c0"),
        n("ac1f"),
        n("5319"),
        n("15fd"))
          , C = n("2909")
          , w = n("3835")
          , E = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return e.$bus.contentLoaded ? n("div", {
                staticClass: "layout"
            }, [n("NavigationHeader"), n("Transition", {
                attrs: {
                    name: "layout__view",
                    mode: "out-in",
                    appear: ""
                },
                on: {
                    enter: e.onRouteEntered
                }
            }, [n("RouterView", {
                key: e.routeKey,
                staticClass: "layout__view"
            })], 1), n("Newsletter"), n("NavigationFooter"), n("NavigationTop", {
                attrs: {
                    "has-live-event": e.hasLiveEvent
                },
                on: {
                    "toggle-sidenav": function(t) {
                        e.isSideNavOpen = !e.isSideNavOpen
                    }
                }
            }), n("NavigationSide", {
                attrs: {
                    "is-open": e.isSideNavOpen
                },
                on: {
                    close: function(t) {
                        e.isSideNavOpen = !1
                    }
                }
            })], 1) : e._e()
        }
          , x = []
          , A = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }],
                staticClass: "layout-section -top home-newsletter",
                attrs: {
                    id: "contact"
                }
            }, [n("p", {
                staticClass: "layout-section__toptitle"
            }, [e._v(e._s(e.$t("home.newsletter")))]), n("form", {
                staticClass: "home-newsletter__form"
            }, [n("input", {
                staticClass: "input",
                attrs: {
                    type: "text"
                }
            }), n("button", {
                staticClass: "button"
            }, [e._v("Subscribe")]), n("iframe", {
                staticClass: "home-newsletter__frame",
                attrs: {
                    src: "/newsletter-form-" + e.$i18n.locale + ".html",
                    frameborder: "0"
                }
            })])])
        }
          , I = []
          , P = {
            name: "HomeNewsletter"
        }
          , j = P
          , F = n("2877")
          , q = Object(F["a"])(j, A, I, !1, null, null, null)
          , T = q.exports
          , k = function(e, t) {
            var n = t.name
              , a = t.params
              , i = t.query
              , s = t.hash
              , o = n.replace(/-\w\w$/, "");
            return {
                name: "".concat(o, "-").concat(e),
                params: a,
                query: i,
                hash: s
            }
        }
          , L = {
            name: "App",
            components: {
                Newsletter: T
            },
            metaInfo: function() {
                return {
                    titleTemplate: this.$t("common.meta.titleTemplate")
                }
            },
            data: function() {
                return {
                    isSideNavOpen: !1,
                    popScrollPosition: null,
                    zohoScript: null,
                    hasLiveEvent: !1
                }
            },
            computed: {
                routeKey: function() {
                    return this.$route.name.replace(/-\w\w$/, "")
                }
            },
            watch: {
                "$i18n.locale": function(e) {
                    localStorage.setItem("feia-lang", e),
                    window.$zoho && window.$zoho.salesiq && window.$zoho.salesiq.reset()
                },
                $route: {
                    immediate: !0,
                    handler: function(e, t) {
                        var n = this
                          , a = e.name
                          , i = e.hash;
                        t && a !== t.name || (i ? setTimeout((function() {
                            return n.$scroll.toTarget(i)
                        }
                        ), 100) : this.$scroll.to(0))
                    }
                }
            },
            created: function() {
                var e = this;
                this.$bus.on("pop-scroll", (function(t) {
                    e.popScrollPosition = t
                }
                )),
                this.$route.meta.lang !== this.$i18n.locale && this.$router.replace(k(this.$i18n.locale, this.$route)),
                this.$watch("$route.meta.lang", (function(t, n) {
                    t && t !== n && t !== e.$i18n.locale && (e.$i18n.locale = t)
                }
                ))
            },
            mounted: function() {
                var e = this;
                if (!document.getElementById("zsiqscript")) {
                    window.$zoho = {
                        salesiq: {
                            widgetcode: "81d5ea3dea9cd0ec90a94c9bcfe215a7096771db847181a3d41fe8eaad9d2b0f",
                            values: {},
                            ready: function() {
                                return window.$zoho.salesiq.language(e.$i18n.locale)
                            }
                        }
                    };
                    var t = document.createElement("script");
                    t.type = "text/javascript",
                    t.id = "zsiqscript",
                    t.defer = !0,
                    t.src = "https://salesiq.zoho.com/widget",
                    this.zohoScript = document.body.appendChild(t)
                }
            },
            methods: {
                onRouteEntered: function() {
                    this.popScrollPosition ? (this.$scroll.to(this.popScrollPosition),
                    this.popScrollPosition = null) : this.$route.hash ? this.$scroll.toTarget(this.$route.hash) : this.$scroll.to(0)
                }
            }
        }
          , N = L
          , S = Object(F["a"])(N, E, x, !1, null, null, null)
          , O = S.exports
          , M = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = n.catchAll
              , i = Object(w["a"])(e, 1)
              , s = i[0]
              , o = function e(t, n) {
                var i = a && t !== s ? [].concat(Object(C["a"])(n), [a]) : n;
                return i.map((function(n) {
                    var a = n.path
                      , i = n.name
                      , o = n.redirect
                      , r = n.children
                      , l = void 0 === r ? [] : r
                      , c = Object(_["a"])(n, ["path", "name", "redirect", "children"])
                      , u = "string" === typeof a ? a : a[t] || a[s];
                    return Object(h["a"])(Object(h["a"])({}, c), {}, {
                        path: u.replace(/^\//, ""),
                        name: i ? "".concat(i, "-").concat(t) : void 0,
                        redirect: o && o.name ? {
                            name: "".concat(o.name, "-").concat(t)
                        } : void 0,
                        children: l && l.length ? e(l) : void 0,
                        meta: {
                            lang: t
                        }
                    })
                }
                ))
            }
              , r = Object(C["a"])(e.map((function(e, n) {
                return {
                    path: n ? "/".concat(e) : "/",
                    component: O,
                    children: o(e, t)
                }
            }
            )));
            if (a) {
                var l = a.redirect && a.redirect.name ? {
                    name: "".concat(a.redirect.name, "-").concat(s)
                } : void 0;
                return [].concat(Object(C["a"])(r), [Object(h["a"])(Object(h["a"])({}, a), {}, {
                    redirect: l
                })])
            }
            return r
        }
          , $ = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", [n("HomeHeader"), n("HomeBullets"), n("HomeEvents"), n("HomeTestimonies"), n("HomeAbout"), n("HomeService"), n("HomeSponsor"), n("HomeContact")], 1)
        }
          , U = []
          , D = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("header", {
                staticClass: "home-header"
            }, [n("section", {
                staticClass: "home-header__content"
            }, [n("div", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    value: {
                        delay: [e.$scroll, 750],
                        threshold: 0
                    },
                    expression: "{ delay: [$scroll, 750], threshold: 0 }",
                    arg: "left"
                }],
                staticClass: "home-header__figure"
            }, [n("video", {
                staticClass: "home-header__video",
                attrs: {
                    autoplay: "",
                    muted: "",
                    loop: "",
                    src: "https://forum.medioze.com/video/FEIA-intro.mp4"
                },
                domProps: {
                    muted: !0
                }
            })]), n("h1", {
                staticClass: "home-header__banner"
            }, [n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:down",
                    value: {
                        delay: [e.$scroll, 825, 125]
                    },
                    expression: "{ delay: [$scroll, 825, 125] }",
                    arg: "down"
                }]
            }, [e._v(e._s(e.$t("home.header.message")))]), n("br"), n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: [e.$scroll, 900, 200]
                    },
                    expression: "{ delay: [$scroll, 900, 200] }"
                }],
                staticClass: "home-header__cursive"
            }, [e._v(e._s(e.$t("home.header.span")))])])])])
        }
          , R = []
          , B = {
            name: "HomeHeader"
        }
          , G = B
          , z = Object(F["a"])(G, D, R, !1, null, null, null)
          , H = z.exports
          , V = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                ref: "graphic",
                staticClass: "number-counter"
            }, [n("BrandGraphic", {
                staticClass: "number-counter__image"
            })], 1)
        }
          , W = []
          , J = n("a6f9")
          , Q = {
            name: "SvgIcon",
            functional: !0,
            props: {
                id: {
                    type: String,
                    required: !0
                }
            },
            render: function(e, t) {
                var n = t.props
                  , a = t.data;
                return e("svg", {
                    class: ["icon", a.staticClass],
                    domProps: {
                        innerHTML: '<use xlink:href="#'.concat(n.id, '"/>')
                    }
                })
            }
        }
          , Y = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "scrollbox",
                staticClass: "scrollbox"
            }, [n(e.contentTag, {
                tag: "DynamicTag",
                class: e.contentClass
            }, [e._t("default")], 2)], 1)
        }
          , K = []
          , X = {
            name: "ScrollBox",
            props: {
                config: {
                    type: Object,
                    default: Object
                },
                contentTag: {
                    type: String,
                    default: "div"
                },
                contentClass: {
                    type: [String, Array, Object],
                    default: Array
                }
            },
            data: function() {
                return {
                    simplebar: null
                }
            },
            mounted: function() {
                var e = this;
                this.$nextTick((function() {
                    e.simplebar = new J["a"](e.$refs.scrollbox,e.config)
                }
                ))
            }
        }
          , Z = X
          , ee = Object(F["a"])(Z, Y, K, !1, null, null, null)
          , te = ee.exports
          , ne = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n(e.tag, {
                tag: "DynamicElement",
                staticClass: "layout-dropdown",
                style: e.style,
                on: {
                    transitionend: e.onTransitionEnd
                }
            }, [n(e.contentTag, {
                ref: "content",
                tag: "DynamicElement",
                class: e.className
            }, [e._t("default")], 2)], 1)
        }
          , ae = []
          , ie = (n("a9e3"),
        {
            name: "DropDown",
            props: {
                isOpen: {
                    type: Boolean,
                    required: !0
                },
                tag: {
                    type: String,
                    default: "div"
                },
                contentTag: {
                    type: String,
                    default: "div"
                },
                contentClass: {
                    type: [String, Array, Object],
                    default: Array
                }
            },
            data: function() {
                return {
                    height: this.isOpen ? "auto" : 0
                }
            },
            computed: {
                className: function() {
                    return ["dropdown__content", {
                        "-open": this.isOpen
                    }, this.contentClass]
                },
                style: function() {
                    return {
                        "--height": Number(this.height) ? "".concat(this.height, "px") : this.height
                    }
                }
            },
            watch: {
                isOpen: function(e, t) {
                    var n = this;
                    e !== t && (t ? this.height = this.$refs.content.clientHeight : this.resetAfterTransition(),
                    this.$nextTick((function() {
                        setTimeout((function() {
                            n.height = n.isOpen ? n.$refs.content.clientHeight : 0
                        }
                        ), 10)
                    }
                    )))
                }
            },
            methods: {
                resetAfterTransition: function() {
                    var e = this;
                    this.$once("transition-end", (function() {
                        e.isOpen && (e.height = "auto")
                    }
                    ))
                },
                onTransitionEnd: function() {
                    this.$emit("transition-end")
                }
            }
        })
          , se = ie
          , oe = (n("983a"),
        Object(F["a"])(se, ne, ae, !1, null, null, null))
          , re = oe.exports
          , le = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("footer", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        threshold: 0
                    },
                    expression: "{ threshold: 0 }"
                }],
                staticClass: "navigation-footer"
            }, [n("section", {
                staticClass: "navigation-footer__container"
            }, [n("figure", {
                staticClass: "navigation-footer__shape"
            }, [n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "348",
                    height: "226.232",
                    viewBox: "0 0 348 226.232"
                }
            }, [n("path", {
                attrs: {
                    d: "M13.494,179.507l1.493-41.137,135.2,74.922L176,75.342l104.3,128.85L327.025,45.537",
                    transform: "translate(-0.927 -0.765)",
                    "stroke-linejoin": "round",
                    "stroke-width": "27"
                }
            })])]), n("article", {
                staticClass: "navigation-footer__content"
            }, [n("ul", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }],
                staticClass: "navigation-footer__list"
            }, [n("li", {
                staticClass: "navigation-footer__item"
            }, [n("span", {
                staticClass: "navigation-footer__label"
            }, [e._v(e._s(e.$t("common.form.email")) + " :")]), n("span", {
                staticClass: "navigation-footer__link"
            }, [e._v("info@forum-americas.org")])]), n("li", {
                staticClass: "navigation-footer__item"
            }, [n("span", {
                staticClass: "navigation-footer__label"
            }, [e._v(e._s(e.$t("common.form.phone")) + " :")]), n("span", {
                staticClass: "navigation-footer__link"
            }, [e._v("+1 514 871-2225")])]), n("li", {
                staticClass: "navigation-footer__item"
            }, [n("span", {
                staticClass: "navigation-footer__label"
            }, [e._v(e._s(e.$t("common.form.tollFree")) + " :")]), n("span", {
                staticClass: "navigation-footer__link"
            }, [e._v("+1 866 865-2225")])])]), n("ul", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 250
                    },
                    expression: "{ delay: 250 }"
                }],
                staticClass: "navigation-footer__list"
            }, [n("LocaleLink", {
                staticClass: "navigation-footer__item -link",
                attrs: {
                    to: {
                        name: "home",
                        hash: "#events"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.events")) + " ")]), n("LocaleLink", {
                staticClass: "navigation-footer__item -link",
                attrs: {
                    to: {
                        name: "home",
                        hash: "#about"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.aboutUs")) + " ")]), n("LocaleLink", {
                staticClass: "navigation-footer__item -link",
                attrs: {
                    to: {
                        name: "home",
                        hash: "#services"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.services")) + " ")])], 1), n("ul", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }"
                }],
                staticClass: "navigation-footer__list"
            }, [n("LocaleLink", {
                staticClass: "navigation-footer__item -link",
                attrs: {
                    to: {
                        name: "home",
                        hash: "#contact"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.cta.contact")) + " ")]), n("a", {
                staticClass: "navigation-footer__item -link",
                attrs: {
                    href: "https://iefa-plus.com/",
                    target: "_blank"
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.consulting")) + " ")])], 1), n("ul", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }"
                }],
                staticClass: "navigation-footer__list"
            }, [n("LocaleLink", {
                staticClass: "navigation-footer__item -link",
                attrs: {
                    to: {
                        name: "terms"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.terms")) + " ")]), n("LocaleLink", {
                staticClass: "navigation-footer__item -link",
                attrs: {
                    to: {
                        name: "privacy"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.privacy")) + " ")])], 1)]), n("article", {
                staticClass: "navigation-footer__copyright"
            }, [n("div", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 350,
                        offset: "0px",
                        threshold: 0
                    },
                    expression: "{ delay: 350, offset: '0px', threshold: 0 }"
                }],
                staticClass: "navigation-footer__copyright-flex"
            }, [n("p", [e._v("Copyright © " + e._s(e.$t("common.copyright")) + " " + e._s(e.currentYear))]), n("span", [e._v("|")]), n("p", [e._v(" " + e._s(e.$t("common.cretedBy")) + " "), n("a", {
                attrs: {
                    href: "https://medioze.com/",
                    target: "_blank"
                }
            }, [e._v("Medioze")])])]), n("div", {
                staticClass: "navigation-footer__socials"
            }, [n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 400,
                        offset: "0px",
                        threshold: 0
                    },
                    expression: "{ delay: 400, offset: '0px', threshold: 0 }"
                }],
                staticClass: "navigation-footer__icon",
                attrs: {
                    href: "https://www.facebook.com/Forum.Americas/",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [n("svg-icon", {
                attrs: {
                    id: "social-facebook"
                }
            })], 1), n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 425,
                        offset: "0px",
                        threshold: 0
                    },
                    expression: "{ delay: 425, offset: '0px', threshold: 0 }"
                }],
                staticClass: "navigation-footer__icon",
                attrs: {
                    href: "https://twitter.com/AmericasForum",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [n("svg-icon", {
                attrs: {
                    id: "social-twitter"
                }
            })], 1), n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 475,
                        offset: "0px",
                        threshold: 0
                    },
                    expression: "{ delay: 475, offset: '0px', threshold: 0 }"
                }],
                staticClass: "navigation-footer__icon",
                attrs: {
                    href: "https://www.linkedin.com/company/1162497/",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [n("svg-icon", {
                attrs: {
                    id: "social-linkedin"
                }
            })], 1), n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 500,
                        offset: "0px",
                        threshold: 0
                    },
                    expression: "{ delay: 500, offset: '0px', threshold: 0 }"
                }],
                staticClass: "navigation-footer__icon",
                attrs: {
                    href: "https://www.youtube.com/channel/UCquT5NzE7P8_wP7m2tnbRjQ",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [n("svg-icon", {
                attrs: {
                    id: "social-youtube"
                }
            })], 1), n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 525,
                        offset: "0px",
                        threshold: 0
                    },
                    expression: "{ delay: 525, offset: '0px', threshold: 0 }"
                }],
                staticClass: "navigation-footer__icon",
                attrs: {
                    href: "https://www.instagram.com/forumamericas/?ref=badge",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [n("svg-icon", {
                attrs: {
                    id: "social-instagram"
                }
            })], 1)])])])])
        }
          , ce = []
          , ue = {
            name: "NavigationFooter",
            data: function() {
                return {
                    currentYear: (new Date).getFullYear(),
                    links: [{
                        to: {
                            name: "home",
                            hash: "#events"
                        },
                        label: "Events"
                    }, {
                        to: {
                            name: "home",
                            hash: "#about"
                        },
                        label: "About us"
                    }, {
                        to: {
                            name: "home",
                            hash: "#services"
                        },
                        label: "Services"
                    }]
                }
            }
        }
          , me = ue
          , de = Object(F["a"])(me, le, ce, !1, null, null, null)
          , pe = de.exports
          , ge = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("Transition", {
                attrs: {
                    name: "peekaboo"
                }
            }, [e.isVisible ? n("nav", {
                staticClass: "navigation-top",
                class: {
                    "-has-announcement": e.hasLiveEvent && !e.$device.laptop,
                    "-offset-top": e.showAnnouncement
                }
            }, [n("section", {
                staticClass: "navigation-top__container"
            }, [n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "navigation-top__logo -small",
                attrs: {
                    to: {
                        name: "home"
                    }
                }
            }, [n("img", {
                attrs: {
                    src: e.$t("common.logoSmall"),
                    alt: "Logo"
                }
            })]), n("nav", {
                staticClass: "navigation-top__list"
            }, [n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }"
                }],
                staticClass: "navigation-top__item",
                attrs: {
                    to: {
                        name: "home"
                    },
                    exact: ""
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClickPage("home")
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.home")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 150
                    },
                    expression: "{ delay: 150 }"
                }],
                staticClass: "navigation-top__item",
                class: {
                    "-active": e.isEventPage
                },
                attrs: {
                    to: {
                        name: "events-annual"
                    }
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClickPage("events-annual")
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.eventsAnnual")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }],
                staticClass: "navigation-top__item",
                attrs: {
                    to: {
                        name: "events"
                    }
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClickPage("events")
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.allEvents")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 250
                    },
                    expression: "{ delay: 250 }"
                }],
                staticClass: "navigation-top__item",
                attrs: {
                    to: {
                        name: "team"
                    }
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClickPage("team")
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.teamShort")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }"
                }],
                staticClass: "button navigation-top__item",
                attrs: {
                    to: {
                        name: "home",
                        hash: "#contact"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.cta.contact")) + " ")]), e._l(e.langLinks, (function(t) {
                return [n("RouterLink", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            delay: 300
                        },
                        expression: "{ delay: 300 }"
                    }],
                    key: t,
                    staticClass: "navigation-top__lang",
                    attrs: {
                        to: e.getLangLink(t)
                    }
                }, [n("span", {
                    staticClass: "navigation-top__item -link -alt"
                }, [e._v(e._s(t.toUpperCase()))])])]
            }
            ))], 2), n("div", {
                staticClass: "navigation-top__burger",
                on: {
                    click: function(t) {
                        return e.$emit("toggle-sidenav")
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    id: "menu"
                }
            })], 1)], 1), e.isEventPage ? n("section", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:down",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "down"
                }],
                staticClass: "navigation-top__sub"
            }, [n("section", {
                staticClass: "navigation-top__container"
            }, [n("LocaleLink", {
                staticClass: "navigation-top__subtile",
                attrs: {
                    to: {
                        name: "conference",
                        params: {
                            slug: e.slug
                        }
                    }
                }
            }, [e._v(" " + e._s(e.conference.name) + " ")]), e.siteLink ? n("a", {
                staticClass: "link -bold -icon",
                attrs: {
                    href: e.siteLink,
                    target: "_blank"
                }
            }, [n("p", [e._v(e._s(e.$t("common.cta.registerNow")))]), n("svg-icon", {
                attrs: {
                    id: "arrow"
                }
            })], 1) : e._e()], 1)]) : e._e()]) : e._e()])
        }
          , he = []
          , fe = (n("4de4"),
        n("7db0"),
        n("caad"),
        n("2532"),
        n("c1df"))
          , ve = n.n(fe)
          , be = {
            name: "NavigationTop",
            props: {
                hasLiveEvent: Boolean
            },
            data: function() {
                return {
                    isVisible: !1,
                    eventRouteNames: ["toronto", "miami", "paris", "buenos-aires", "phoenix", "montreal"]
                }
            },
            computed: {
                langLinks: function() {
                    var e = this;
                    return ["en", "fr"].filter((function(t) {
                        return t !== e.$i18n.locale
                    }
                    ))
                },
                isEventPage: function() {
                    return this.conference
                },
                slug: function() {
                    return this.$route.params.slug
                },
                conference: function() {
                    return this.$i18n.messages[this.$i18n.locale].conferences[this.slug]
                },
                siteLink: function() {
                    var e = this.conference.events.find((function(e) {
                        var t = e.startDate;
                        return ve()(t).isAfter(ve()())
                    }
                    ));
                    return e && (e.registerLink || e.siteLink)
                },
                showAnnouncement: function() {
                    return this.hasLiveEvent && !this.$device.laptop && this.$scroll.position < 2 && !this.isEventPage
                }
            },
            watch: {
                "$route.name": {
                    immediate: !0,
                    handler: function() {
                        this.isEventPage ? this.isVisible = !0 : this.updateVisibility(this.$scroll.position)
                    }
                },
                "$device.laptop": {
                    immediate: !0,
                    handler: function(e) {
                        e ? this.updateVisibility(this.$scroll.position) : this.isVisible = !0
                    }
                }
            },
            mounted: function() {
                var e = this;
                this.$nextTick((function() {
                    e.$scroll.on(e.updateVisibility)
                }
                ))
            },
            methods: {
                updateVisibility: function(e) {
                    this.$device.laptop && !this.isEventPage && (this.isVisible = e > 72)
                },
                getLangLink: function(e) {
                    var t = k(e, this.$route);
                    return t
                },
                onClickPage: function(e) {
                    this.$route.name.includes(e) && this.$scroll.toTop()
                }
            }
        }
          , ye = be
          , _e = (n("82bf"),
        Object(F["a"])(ye, ge, he, !1, null, null, null))
          , Ce = _e.exports
          , we = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("menu", {
                class: e.className
            }, [n("div", {
                staticClass: "navigation-side__content"
            }, [n("header", {
                staticClass: "navigation-side__header"
            }, [n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "navigation-top__logo -small",
                attrs: {
                    to: {
                        name: "home"
                    }
                }
            }, [n("img", {
                attrs: {
                    src: "/images/brand/logo-small-white.png",
                    alt: "Logo"
                }
            })]), n("figure", {
                staticClass: "navigation-side__close",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    id: "close"
                }
            })], 1)], 1), n("nav", {
                staticClass: "navigation-side__list"
            }, [e._l(e.links, (function(t, a) {
                var i = t.label
                  , s = t.link;
                return n("LocaleLink", {
                    key: i,
                    staticClass: "navigation-side__item navigation-side__cascade-item",
                    style: {
                        transitionDelay: 200 + 50 * a + "ms"
                    },
                    attrs: {
                        to: s,
                        exact: !a
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.$emit("close")
                        }
                    }
                }, [e._v(" " + e._s(i) + " ")])
            }
            )), e._l(e.langLinks, (function(t) {
                return [n("RouterLink", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            delay: 250
                        },
                        expression: "{ delay: 250 }"
                    }],
                    key: t,
                    staticClass: "navigation-side__item",
                    attrs: {
                        to: e.getLangLink(t)
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.$emit("close")
                        }
                    }
                }, [n("span", [e._v(e._s(t.toUpperCase()))])])]
            }
            ))], 2)])])
        }
          , Ee = []
          , xe = {
            name: "NavigationSide",
            props: {
                isOpen: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                links: function() {
                    return [{
                        link: {
                            name: "home"
                        },
                        label: this.$t("common.navigation.home")
                    }, {
                        link: {
                            name: "events-annual"
                        },
                        label: this.$t("common.navigation.eventsAnnual")
                    }, {
                        link: {
                            name: "events"
                        },
                        label: this.$t("common.navigation.allEvents")
                    }, {
                        link: {
                            name: "team"
                        },
                        label: this.$t("common.navigation.team")
                    }, {
                        link: {
                            name: "home",
                            hash: "#contact"
                        },
                        label: "Contact"
                    }]
                },
                className: function() {
                    return ["navigation-side", {
                        "-open": this.isOpen
                    }]
                },
                langLinks: function() {
                    var e = this;
                    return ["en", "fr"].filter((function(t) {
                        return t !== e.$i18n.locale
                    }
                    ))
                }
            },
            methods: {
                getLangLink: function(e) {
                    var t = k(e, this.$route);
                    return t
                }
            }
        }
          , Ae = xe
          , Ie = Object(F["a"])(Ae, we, Ee, !1, null, null, null)
          , Pe = Ie.exports
          , je = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("button", {
                staticClass: "button"
            }, [e._t("default"), e._v(" " + e._s(e.label) + " ")], 2)
        }
          , Fe = []
          , qe = {
            name: "ActionButton",
            props: {
                label: {
                    type: String,
                    default: ""
                }
            }
        }
          , Te = qe
          , ke = Object(F["a"])(Te, je, Fe, !1, null, null, null)
          , Le = ke.exports
          , Ne = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "button -controls"
            }, [n("button", {
                staticClass: "button__control -disabled -left"
            }, [n("svg-icon", {
                attrs: {
                    id: "arrow-medium"
                }
            })], 1), n("button", {
                staticClass: "button__control"
            }, [n("svg-icon", {
                attrs: {
                    id: "arrow-medium"
                }
            })], 1)])
        }
          , Se = []
          , Oe = {
            name: "ActionSlide"
        }
          , Me = Oe
          , $e = Object(F["a"])(Me, Ne, Se, !1, null, null, null)
          , Ue = $e.exports
          , De = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", {
                staticClass: "modal"
            }, [n("article", {
                staticClass: "modal__box"
            }, [n("header", {
                staticClass: "modal__header"
            }, [n("h2", {
                staticClass: "modal__title"
            }, [e._v(e._s(e.title))]), n("p", [e._v(e._s(e.subtitle))])]), n("section", {
                staticClass: "modal__content"
            }, [e._t("default")], 2), n("button", {
                staticClass: "button -big"
            }, [e._v(e._s(e.button))])])])
        }
          , Re = []
          , Be = {
            name: "ActionModal",
            props: {
                title: {
                    type: String,
                    required: !0
                },
                subtitle: {
                    type: String
                },
                button: {
                    type: String,
                    required: !0
                }
            }
        }
          , Ge = Be
          , ze = Object(F["a"])(Ge, De, Re, !1, null, null, null)
          , He = ze.exports
          , Ve = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("ActionModal", {
                attrs: {
                    title: "Message envoyé avec succès !",
                    subtitle: "Sociis diam et aliqua? Nonummy sint consequat sunt, elit pretium libero vestibulum! Do nesciunt nisi.",
                    button: "Terminé"
                }
            })
        }
          , We = []
          , Je = {
            name: "ActionModalFreebies"
        }
          , Qe = Je
          , Ye = Object(F["a"])(Qe, Ve, We, !1, null, null, null)
          , Ke = Ye.exports
          , Xe = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "alert"
            }, [n("figure", {
                staticClass: "alert__figure"
            }, [n("svg-icon", {
                attrs: {
                    id: "action-info"
                }
            })], 1), n("p", [e._v(e._s(e.label))])])
        }
          , Ze = []
          , et = {
            name: "ActionAlert",
            props: {
                label: {
                    type: String,
                    required: !0
                }
            }
        }
          , tt = et
          , nt = Object(F["a"])(tt, Xe, Ze, !1, null, null, null)
          , at = nt.exports
          , it = function() {
            var e = this
              , t = e.$createElement;
            e._self._c;
            return e._m(0)
        }
          , st = [function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", {
                staticClass: "schedule-week"
            }, [n("p", [e._v("Coming Soonw")])])
        }
        ]
          , ot = {
            name: "ScheduleWeek"
        }
          , rt = ot
          , lt = Object(F["a"])(rt, it, st, !1, null, null, null)
          , ct = lt.exports
          , ut = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return e.isEventPage ? e._e() : n("header", {
                staticClass: "home-header__menu"
            }, [n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }",
                    arg: "right"
                }],
                staticClass: "navigation-top__logo",
                attrs: {
                    to: {
                        name: "home"
                    }
                }
            }, [n("img", {
                attrs: {
                    src: e.$t("common.logo"),
                    alt: "FEIA"
                }
            })]), n("nav", {
                staticClass: "navigation-top__list"
            }, [n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 400
                    },
                    expression: "{ delay: 400 }"
                }],
                staticClass: "navigation-top__item -link",
                attrs: {
                    to: {
                        name: "home"
                    },
                    exact: ""
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.home")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 450
                    },
                    expression: "{ delay: 450 }"
                }],
                staticClass: "navigation-top__item -link",
                attrs: {
                    to: {
                        name: "events-annual"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.eventsAnnual")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 500
                    },
                    expression: "{ delay: 500 }"
                }],
                staticClass: "navigation-top__item -link",
                attrs: {
                    to: {
                        name: "events"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.allEvents")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 550
                    },
                    expression: "{ delay: 550 }"
                }],
                staticClass: "navigation-top__item -link",
                attrs: {
                    to: {
                        name: "team"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.teamShort")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 600
                    },
                    expression: "{ delay: 600 }"
                }],
                staticClass: "navigation-top__item button",
                attrs: {
                    to: {
                        name: "home",
                        hash: "#contact"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.cta.contact")) + " ")]), n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 600
                    },
                    expression: "{ delay: 600 }"
                }]
            }, [e._l(e.langLinks, (function(t) {
                return [n("RouterLink", {
                    key: t,
                    staticClass: "navigation-top__lang",
                    attrs: {
                        to: e.getLangLink(t)
                    }
                }, [n("span", {
                    staticClass: "navigation-top__item -link -alt"
                }, [e._v(e._s(t.toUpperCase()))])])]
            }
            ))], 2)], 1)], 1)
        }
          , mt = []
          , dt = {
            name: "NavigationHeader",
            computed: {
                langLinks: function() {
                    var e = this;
                    return ["en", "fr"].filter((function(t) {
                        return t !== e.$i18n.locale
                    }
                    ))
                },
                isEventPage: function() {
                    return this.$route.name.includes("conference")
                }
            },
            methods: {
                getLangLink: function(e) {
                    var t = k(e, this.$route);
                    return t
                }
            }
        }
          , pt = dt
          , gt = Object(F["a"])(pt, ut, mt, !1, null, null, null)
          , ht = gt.exports
          , ft = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("menu", {
                staticClass: "navigation-breadcrumb page-header__menu"
            }, [e.hash ? n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 525
                    },
                    expression: "{ delay: 525 }",
                    arg: "right"
                }],
                staticClass: "navigation-breadcrumb__item",
                attrs: {
                    to: {
                        name: "home",
                        hash: e.hash
                    },
                    exact: ""
                }
            }, [n("p", [e._v(e._s(e.back))])]) : e._e(), e._l(e.pages, (function(t, a) {
                var i = t.link
                  , s = t.label;
                return n("div", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear:right",
                        value: {
                            delay: 550 + 25 * a
                        },
                        expression: "{ delay: 550 + index * 25 }",
                        arg: "right"
                    }],
                    key: i,
                    staticClass: "navigation-breadcrumb__item",
                    class: {
                        "-active": a === e.pages.length - 1
                    }
                }, [n("span", {
                    staticClass: "navigation-breadcrumb__separator"
                }, [e._v("/")]), i ? n("LocaleLink", {
                    attrs: {
                        to: {
                            name: i
                        }
                    }
                }, [e._v(e._s(s))]) : n("p", [e._v(e._s(s))])], 1)
            }
            ))], 2)
        }
          , vt = []
          , bt = {
            name: "NavigationBreadcrumb",
            props: {
                back: {
                    type: String,
                    default: ""
                },
                hash: {
                    type: String,
                    default: null
                },
                page: {
                    type: [String, Array],
                    default: ""
                }
            },
            computed: {
                pages: function() {
                    return Array.isArray(this.page) ? this.page : [{
                        label: this.page
                    }]
                }
            }
        }
          , yt = bt
          , _t = Object(F["a"])(yt, ft, vt, !1, null, null, null)
          , Ct = _t.exports
          , wt = {
            name: "DynamicElement",
            props: {
                tag: {
                    type: String,
                    default: "div"
                }
            },
            render: function(e, t) {
                var n = t.props
                  , a = t.slots;
                return e(n.tag, a.default ? a.default() : void 0)
            }
        }
          , Et = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("RouterLink", e._b({
                staticClass: "navigation-top__logo"
            }, "RouterLink", e.routerLinkProps, !1), [e._t("default")], 2)
        }
          , xt = []
          , At = {
            name: "LocaleLink",
            props: {
                to: {
                    type: Object,
                    required: !0
                },
                tag: {
                    type: String,
                    default: null
                },
                exact: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                routerLinkProps: function() {
                    var e = k(this.$i18n.locale, this.to);
                    return this.tag ? {
                        to: e,
                        exact: this.exact,
                        tag: this.tag
                    } : {
                        to: e,
                        exact: this.exact
                    }
                }
            }
        }
          , It = At
          , Pt = Object(F["a"])(It, Et, xt, !1, null, null, null)
          , jt = Pt.exports;
        function Ft(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && -1 === t.indexOf(a) && (n[a] = e[a]);
            return n
        }
        var qt = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        threshold: e.threshold,
                        handler: e.onVisible
                    },
                    expression: "{ threshold, handler: onVisible }"
                }],
                staticClass: "brand-graphic"
            }, [n("svg", {
                staticClass: "brand-graphic__vector",
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1919 1016.8"
                }
            }, e._l(e.strokes, (function(t) {
                var a = t.totalTime
                  , i = Ft(t, ["totalTime"])
                  , s = i;
                return n("path", e._b({
                    key: a,
                    ref: "stroke",
                    refInFor: !0,
                    staticClass: "brand-graphic__path",
                    attrs: {
                        fill: "none",
                        "stroke-width": "50",
                        stroke: "rgb(26,69,169)",
                        "stroke-linejoin": "round",
                        "stroke-linecap": "round",
                        "stroke-miterlimit": "4"
                    }
                }, "path", s, !1))
            }
            )), 0), e._l(e.bullets, (function(t) {
                var a = t.number
                  , i = t.text
                  , s = Ft(t, ["number", "text"])
                  , o = s;
                return n("div", e._b({
                    key: a,
                    staticClass: "brand-graphic__bullet"
                }, "div", o, !1), [n("div", {
                    staticClass: "brand-graphic__content"
                }, [n("p", {
                    staticClass: "brand-graphic__number"
                }, [e._v(e._s(a))]), n("p", {
                    staticClass: "brand-graphic__text"
                }, [e._v(e._s(i))])])])
            }
            ))], 2)
        }
          , Tt = []
          , kt = (n("4160"),
        n("13d5"),
        n("159b"),
        {
            name: "BrandGraphic",
            data: function() {
                return {
                    totalDuration: 2e3,
                    isVisible: !1,
                    totalLength: 1,
                    strokeAttributes: [{
                        d: "M 39 410 Q 181 266 181 266 L 308.263 465.739",
                        length: 0
                    }, {
                        d: "M 309.048 466.971 L 476 729 L 578 236 L 728.211 551.855",
                        length: 0
                    }, {
                        d: "M 736.208 568.671 L 870 850 L 1164.895 460.283",
                        length: 0
                    }, {
                        d: "M 1181 439 L 1492 28 L 1591.26 551.722",
                        length: 0
                    }, {
                        d: "M 1594.927 571.068 L 1673 983 L 1882 696",
                        length: 0
                    }],
                    bulletAttributes: [{
                        coordinates: {
                            "--x": "16%",
                            "--y": "45%"
                        }
                    }, {
                        coordinates: {
                            "--x": "38%",
                            "--y": "54%"
                        }
                    }, {
                        coordinates: {
                            "--x": "60%",
                            "--y": "45%"
                        }
                    }, {
                        coordinates: {
                            "--x": "82%",
                            "--y": "54%"
                        }
                    }]
                }
            },
            computed: {
                strokes: function() {
                    var e = this
                      , t = 0;
                    return this.strokeAttributes.map((function(n, a) {
                        var i = n.d
                          , s = n.length
                          , o = Math.round(s / e.totalLength * 100) / 100
                          , r = e.totalDuration * o
                          , l = t;
                        return t += r,
                        {
                            d: i,
                            totalTime: r + l || a,
                            class: {
                                "-play": e.isVisible
                            },
                            style: {
                                "--array": s,
                                "--duration": "".concat(r, "ms"),
                                "--delay": "".concat(l, "ms")
                            }
                        }
                    }
                    ))
                },
                bullets: function() {
                    var e = this;
                    return this.bulletAttributes.map((function(t, n) {
                        var a = t.coordinates
                          , i = e.strokes[n].totalTime - 150;
                        return {
                            number: e.formatNumber(e.$t("home.bullets")[n].number),
                            text: e.$t("home.bullets")[n].label,
                            class: {
                                "-play": e.isVisible
                            },
                            style: Object(h["a"])(Object(h["a"])({}, a), {}, {
                                "--delay-outer": "".concat(i, "ms"),
                                "--delay-inner": "".concat(i + 50, "ms"),
                                "--delay-number": "".concat(i + 425, "ms"),
                                "--delay-text": "".concat(i + 475, "ms")
                            })
                        }
                    }
                    ))
                },
                threshold: function() {
                    return this.$device.tablet ? .5 : .25
                }
            },
            mounted: function() {
                var e = this;
                this.$nextTick((function() {
                    e.$refs.stroke && e.$refs.stroke.length && (e.$refs.stroke.forEach((function(t, n) {
                        e.strokeAttributes[n].length = t.getTotalLength() + 1
                    }
                    )),
                    e.totalLength = e.strokeAttributes.reduce((function(e, t) {
                        var n = t.length;
                        return e + n
                    }
                    ), 0))
                }
                ))
            },
            methods: {
                onVisible: function() {
                    this.isVisible = !0
                },
                formatNumber: function(e) {
                    return e.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                }
            }
        })
          , Lt = kt
          , Nt = Object(F["a"])(Lt, qt, Tt, !1, null, null, null)
          , St = Nt.exports
          , Ot = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("Transition", {
                attrs: {
                    name: "modal"
                }
            }, [e.isOpen ? n("section", {
                staticClass: "modal",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [n("article", {
                staticClass: "modal__box -bigger",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [n("button", {
                staticClass: "modal__close",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    id: "close"
                }
            })], 1), n("header", {
                staticClass: "modal__header"
            }, [e.title ? n("h4", {
                staticClass: "layout-grid__title"
            }, [e._v(e._s(e.title))]) : e._e(), e.subtitle ? n("h6", {
                staticClass: "layout-grid__subtitle -accent"
            }, [e._v(e._s(e.subtitle))]) : e._e()]), e.content ? n("div", {
                staticClass: "modal__content"
            }, [e._v(e._s(e.content))]) : e._e(), n("div", {
                staticClass: "modal__button"
            }, [n("button", {
                staticClass: "button -secondary -darker",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [e._v(e._s(e.$t("common.navigation.close")))])])])]) : e._e()])
        }
          , Mt = []
          , $t = {
            name: "OverlayModal",
            props: {
                isOpen: {
                    type: Boolean,
                    default: !1
                },
                title: {
                    type: String,
                    default: null
                },
                subtitle: {
                    type: String,
                    default: null
                },
                content: {
                    type: String,
                    default: null
                }
            }
        }
          , Ut = $t
          , Dt = Object(F["a"])(Ut, Ot, Mt, !1, null, null, null)
          , Rt = Dt.exports
          , Bt = {
            name: "HomeEvents",
            components: {
                BrandGraphic: St
            },
            data: function() {
                return {
                    simplebarInstance: null
                }
            },
            mounted: function() {
                var e = this;
                this.$nextTick((function() {
                    e.$refs.graphic && !e.$device.tablet && (e.simplebarInstance = new J["a"](e.$refs.graphic))
                }
                ))
            }
        }
          , Gt = Bt
          , zt = Object(F["a"])(Gt, V, W, !1, null, null, null)
          , Ht = zt.exports
          , Vt = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section",
                attrs: {
                    id: "events"
                }
            }, [n("section", {
                staticClass: "layout-section__hgroup -flex -events"
            }, [n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 75
                    },
                    expression: "{ delay: 75 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(" " + e._s(e.$t("common.navigation.events")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    value: {
                        delay: 125
                    },
                    expression: "{ delay: 125 }",
                    arg: "left"
                }],
                staticClass: "button",
                attrs: {
                    to: {
                        name: "events"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.allEvents")) + " ")])], 1), n("section", {
                staticClass: "layout-section__flex -top -alt"
            }, [n("div", {
                ref: "links",
                staticClass: "layout-section__split -small layout-links"
            }, [n("div", {
                staticClass: "layout-links__content"
            }, e._l(e.slugs, (function(t, a, i) {
                return n("h5", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear:right",
                        value: {
                            delay: 25 * i
                        },
                        expression: "{ delay: index * 25 }",
                        arg: "right"
                    }],
                    key: a,
                    staticClass: "layout-links__item",
                    class: {
                        "-active": a === e.currentConferenceSlug
                    },
                    on: {
                        click: function(t) {
                            e.currentConferenceSlug = a
                        }
                    }
                }, [e._v(" " + e._s(t) + " ")])
            }
            )), 0)]), n("transition", {
                attrs: {
                    name: "fade-out",
                    mode: "out-in"
                }
            }, [n("div", {
                key: e.currentConferenceSlug,
                staticClass: "layout-section__split -large"
            }, [n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear"
                }],
                staticClass: "layout-section__toptitle"
            }, [e._v(e._s(e.currentConference.name))]), n("h5", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 50
                    },
                    expression: "{ delay: 50 }"
                }],
                staticClass: "layout-section__subtitle"
            }, [e._v(" " + e._s(e.nextEvent.title || e.currentConference.shortName) + " ")]), e.nextEvent.homeContent ? n("div", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 125
                    },
                    expression: "{ delay: 125 }"
                }],
                domProps: {
                    innerHTML: e._s(e.nextEvent.homeContent)
                }
            }) : n("div", [n("p", [e._v(e._s(e.currentConference.about))])]), n("div", {
                staticClass: "layout-section__cta"
            }, [n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }"
                }],
                staticClass: "button -secondary",
                attrs: {
                    to: {
                        name: "conference",
                        params: {
                            slug: e.currentConferenceSlug
                        }
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.cta.learnMore")) + " ")]), e.nextEvent.registerLink ? n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 325
                    },
                    expression: "{ delay: 325 }"
                }],
                staticClass: "button",
                attrs: {
                    href: e.nextEvent.registerLink,
                    target: "_blank"
                }
            }, [e._v(" " + e._s(e.$t("common.cta.tickets")) + " ")]) : e._e()], 1)])])], 1), n("transition", {
                attrs: {
                    name: "fade-out",
                    mode: "out-in"
                }
            }, [e.hasGallery ? n("HomeEventsGallery", {
                key: e.currentConferenceSlug,
                attrs: {
                    images: e.gallery
                }
            }) : e._e()], 1), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    value: {
                        delay: 125
                    },
                    expression: "{ delay: 125 }",
                    arg: "left"
                }],
                staticClass: "button -mobile",
                attrs: {
                    to: {
                        name: "events"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.allEvents")) + " ")])], 1)
        }
          , Wt = []
          , Jt = (n("4fad"),
        n("b64b"),
        n("ade3"))
          , Qt = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-grid -half -space-top"
            }, e._l(e.images, (function(e, t) {
                return n("div", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            delay: 100 + 50 * t,
                            threshold: 0
                        },
                        expression: "{ delay: 100 + index * 50, threshold: 0 }"
                    }],
                    key: e,
                    staticClass: "layout-grid__item"
                }, [n("figure", {
                    staticClass: "layout-grid__figure",
                    style: {
                        "--image": "url('" + e + "')"
                    }
                })])
            }
            )), 0)
        }
          , Yt = []
          , Kt = {
            name: "HomeEventsGallery",
            props: {
                images: {
                    type: Array,
                    default: Array
                }
            }
        }
          , Xt = Kt
          , Zt = Object(F["a"])(Xt, Qt, Yt, !1, null, null, null)
          , en = Zt.exports
          , tn = {
            name: "HomeEvents",
            components: {
                HomeEventsGallery: en
            },
            data: function() {
                return {
                    simplebarInstance: null,
                    currentConferenceSlug: null
                }
            },
            computed: {
                conferences: function() {
                    var e = this;
                    return this.$i18n.messages[this.$i18n.locale].home.conferences.reduce((function(t, n) {
                        var a = Object.entries(e.$i18n.messages[e.$i18n.locale].conferences).find((function(e) {
                            return e[1].id === n
                        }
                        ))
                          , i = Object(w["a"])(a, 2)
                          , s = i[0]
                          , o = i[1];
                        return o ? Object(h["a"])(Object(h["a"])({}, t), {}, Object(Jt["a"])({}, s, o)) : t
                    }
                    ), {})
                },
                slugs: function() {
                    return Object.entries(this.conferences).reduce((function(e, t) {
                        var n = Object(w["a"])(t, 2)
                          , a = n[0]
                          , i = n[1].shortName;
                        return Object.assign(e, Object(Jt["a"])({}, a, i))
                    }
                    ), {})
                },
                currentConference: function() {
                    return this.conferences[this.currentConferenceSlug]
                },
                hasGallery: function() {
                    return "true" === this.currentConference.hasGallery && Array.isArray(this.currentConference.gallery)
                },
                gallery: function() {
                    return this.currentConference.galleryPreview || []
                },
                nextEvent: function() {
                    return Array.isArray(this.currentConference.events) && this.currentConference.events.find((function(e) {
                        var t = e.startDate;
                        return ve()(t).isAfter(ve()())
                    }
                    )) || {}
                },
                hasTicketsButton: function() {
                    return /^http/.test(this.$t("events.home.".concat(this.currentCity, ".buyTickets")))
                }
            },
            beforeMount: function() {
                var e = Object.keys(this.slugs)
                  , t = Object(w["a"])(e, 1)
                  , n = t[0];
                this.currentConferenceSlug = n
            },
            mounted: function() {
                var e = this;
                this.$nextTick((function() {
                    e.$refs.links && !e.$device.tabletH && (e.simplebarInstance = new J["a"](e.$refs.links))
                }
                ))
            },
            methods: {
                getInternalLink: function(e) {
                    return {
                        name: e.replace("page:", "")
                    }
                }
            }
        }
          , nn = tn
          , an = Object(F["a"])(nn, Vt, Wt, !1, null, null, null)
          , sn = an.exports
          , on = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section"
            }, [n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    value: {
                        delay: 150
                    },
                    expression: "{ delay: 150 }",
                    arg: "left"
                }],
                staticClass: "layout-section__title -mobile"
            }, [e._v(e._s(e.$t("home.testimonies.title")))]), n("section", {
                staticClass: "layout-section__flex -center"
            }, [n("div", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    value: {
                        delay: 150,
                        threshold: .25
                    },
                    expression: "{ delay: 150, threshold: 0.25 }",
                    arg: "left"
                }],
                staticClass: "layout-section__split -half"
            }, [n("transition", {
                attrs: {
                    name: "fade-in-out",
                    mode: "out-in"
                }
            }, [n("figure", {
                key: e.currentImage,
                staticClass: "layout-section__figure -large",
                style: {
                    "--image": e.currentImage
                }
            })]), n("h2", {
                staticClass: "layout-section__title -alt"
            }, [e._v(e._s(e.$t("home.testimonies.title")))])], 1), n("div", {
                staticClass: "layout-section__split"
            }, [n("blockquote", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 175
                    },
                    expression: "{ delay: 175 }"
                }],
                staticClass: "section-box",
                style: e.boxHeight
            }, [n("div", {
                ref: "box",
                staticClass: "section-box__content"
            }, [n("transition", {
                attrs: {
                    name: "fade-down",
                    mode: "out-in"
                },
                on: {
                    enter: e.updateHeight
                }
            }, [n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:down",
                    value: {
                        delay: 225
                    },
                    expression: "{ delay: 225 }",
                    arg: "down"
                }],
                key: e.currentContent
            }, [e._v("“" + e._s(e.currentContent) + "”")])]), n("transition", {
                attrs: {
                    name: "fade-up",
                    mode: "out-in"
                }
            }, [n("div", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:down",
                    value: {
                        delay: 350
                    },
                    expression: "{ delay: 350 }",
                    arg: "down"
                }],
                key: e.currentName
            }, [n("p", {
                staticClass: "section-box__bottom"
            }, [e._v(e._s(e.currentName))])])])], 1)])])]), n("div", {
                staticClass: "image-loader"
            }, e._l(e.testimonies, (function(e) {
                return n("img", {
                    key: e.image,
                    attrs: {
                        src: e.image
                    }
                })
            }
            )), 0)])
        }
          , rn = []
          , ln = {
            name: "HomeTestimonies",
            data: function() {
                return {
                    currentIndex: 0,
                    interval: null,
                    height: 0
                }
            },
            computed: {
                boxHeight: function() {
                    return this.height ? {
                        "--content-height": "".concat(this.height, "px")
                    } : "auto"
                },
                testimonies: function() {
                    return this.$t("home.testimonies.slides")
                },
                currentContent: function() {
                    return this.testimonies[this.currentIndex].content
                },
                currentName: function() {
                    return this.testimonies[this.currentIndex].name
                },
                currentImage: function() {
                    return "url('".concat(this.testimonies[this.currentIndex].image, "')")
                }
            },
            created: function() {
                this.interval = setInterval(this.nextSlide, 6500)
            },
            mounted: function() {
                this.updateHeight()
            },
            beforeDestroy: function() {
                clearInterval(this.interval)
            },
            methods: {
                nextSlide: function() {
                    this.currentIndex = (this.currentIndex + 1) % this.testimonies.length
                },
                updateHeight: function() {
                    var e = this;
                    setTimeout((function() {
                        e.$refs.box && (e.height = e.$refs.box.clientHeight)
                    }
                    ), 50)
                }
            }
        }
          , cn = ln
          , un = Object(F["a"])(cn, on, rn, !1, null, null, null)
          , mn = un.exports
          , dn = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section -split -reverse",
                attrs: {
                    id: "about"
                }
            }, [n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    arg: "left"
                }],
                staticClass: "layout-section__figure -reverse",
                style: {
                    "--image": "url('/images/about-mission.jpg')"
                }
            }), n("section", {
                staticClass: "layout-section__content"
            }, [n("div", {
                staticClass: "layout-section__hgroup"
            }, [n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "layout-section__toptitle"
            }, [e._v(e._s(e.$t("common.navigation.aboutUs")))]), n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(e._s(e.$t("home.about.title")))])]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }]
            }, [e._v(e._s(e.$t("home.about.content")))]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }"
                }],
                staticClass: "button layout-section__cta",
                attrs: {
                    to: {
                        name: "team"
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.team")) + " ")])], 1)])
        }
          , pn = []
          , gn = {
            name: "HomeAbout"
        }
          , hn = gn
          , fn = Object(F["a"])(hn, dn, pn, !1, null, null, null)
          , vn = fn.exports
          , bn = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }],
                staticClass: "layout-section -split -top -relative",
                attrs: {
                    id: "contact"
                }
            }, [n("section", {
                staticClass: "layout-section__split -small"
            }, [n("h2", {
                staticClass: "layout-section__title"
            }, [e._v(e._s(e.$t("home.contact.title")))]), n("p", [e._v(e._s(e.$t("home.contact.content")))])]), n("section", {
                staticClass: "layout-section__split -large"
            }, [n("HomeContactForm")], 1)])
        }
          , yn = []
          , _n = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "home-form"
            }, [n("div", {
                staticClass: "home-form__content"
            }, [e._m(0), e._m(1), n("fieldset", {
                staticClass: "home-form__fieldset"
            }, [n("div", {
                staticClass: "input"
            }, [n("select", {
                staticClass: "input__select",
                attrs: {
                    name: "cars",
                    required: ""
                }
            }, [n("option", {
                attrs: {
                    value: "",
                    disabled: "",
                    selected: ""
                }
            }, [e._v(e._s(e.$t("common.form.subject")))]), n("option", {
                attrs: {
                    value: "contact"
                }
            }, [e._v(e._s(e.$t("common.form.getTouch")))]), n("option", {
                attrs: {
                    value: "partner"
                }
            }, [e._v(e._s(e.$t("common.form.partner")))])])]), n("div", {
                staticClass: "input"
            }, [n("select", {
                staticClass: "input__select",
                attrs: {
                    name: "cars",
                    required: ""
                }
            }, [n("option", {
                attrs: {
                    value: "",
                    disabled: "",
                    selected: ""
                }
            }, [e._v(e._s(e.$t("common.languages.title")))]), n("option", {
                attrs: {
                    value: "contact"
                }
            }, [e._v(e._s(e.$t("common.languages.english")))]), n("option", {
                attrs: {
                    value: "partner"
                }
            }, [e._v(e._s(e.$t("common.languages.french")))]), n("option", {
                attrs: {
                    value: "partner"
                }
            }, [e._v(e._s(e.$t("common.languages.spanish")))])])])]), e._m(2), n("ActionButton", [e._v(e._s(e.$t("common.form.button")))])], 1), n("iframe", {
                staticClass: "home-form__frame",
                attrs: {
                    src: "/contact-form-" + e.$i18n.locale + ".html",
                    frameborder: "0"
                }
            })])
        }
          , Cn = [function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("fieldset", {
                staticClass: "home-form__fieldset"
            }, [n("input", {
                staticClass: "input",
                attrs: {
                    type: "text",
                    placeholder: "Name"
                }
            }), n("input", {
                staticClass: "input",
                attrs: {
                    type: "email",
                    placeholder: "Email"
                }
            })])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("fieldset", {
                staticClass: "home-form__fieldset"
            }, [n("input", {
                staticClass: "input",
                attrs: {
                    type: "email",
                    placeholder: "Company"
                }
            }), n("input", {
                staticClass: "input",
                attrs: {
                    type: "email",
                    placeholder: "Phone number"
                }
            })])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("fieldset", {
                staticClass: "home-form__fieldset"
            }, [n("textarea", {
                staticClass: "input -textarea",
                attrs: {
                    placeholder: "Message*"
                }
            })])
        }
        ]
          , wn = {
            name: "HomeContactForm"
        }
          , En = wn
          , xn = Object(F["a"])(En, _n, Cn, !1, null, null, null)
          , An = xn.exports
          , In = {
            name: "HomeContact",
            components: {
                HomeContactForm: An
            }
        }
          , Pn = In
          , jn = Object(F["a"])(Pn, bn, yn, !1, null, null, null)
          , Fn = jn.exports
          , qn = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section -split"
            }, [n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "layout-section__figure",
                style: {
                    "--image": "url('/images/about-partner.png')"
                }
            }), n("section", {
                staticClass: "layout-section__content"
            }, [n("div", {
                staticClass: "layout-section__hgroup"
            }, [n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "layout-section__toptitle"
            }, [e._v(e._s(e.$t("home.partner.title")))]), n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(" " + e._s(e.$t("common.navigation.partner")) + " ")])]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }]
            }, [e._v(e._s(e.$t("home.partner.content")))]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 225
                    },
                    expression: "{ delay: 225 }"
                }]
            }, [e._v(e._s(e.$t("home.partner.content2")))]), n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 250
                    },
                    expression: "{ delay: 250 }"
                }],
                staticClass: "button layout-section__cta",
                attrs: {
                    href: "#contact"
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.becomePartner")) + " ")])])])
        }
          , Tn = []
          , kn = {
            name: "HomeSponsor"
        }
          , Ln = kn
          , Nn = Object(F["a"])(Ln, qn, Tn, !1, null, null, null)
          , Sn = Nn.exports
          , On = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section",
                attrs: {
                    id: "services"
                }
            }, [n("section", {
                staticClass: "layout-section__hgroup -flex -button -dropdown"
            }, [n("div", {
                staticClass: "layout-section__hgroup-container"
            }, [n("div", {
                staticClass: "layout-section__hgroup"
            }, [n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "layout-section__toptitle"
            }, [e._v(e._s(e.$t("home.services.title")))]), n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(" " + e._s(e.$t("common.navigation.services")) + " ")])]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 125
                    },
                    expression: "{ delay: 125 }",
                    arg: "right"
                }]
            }, [e._v(e._s(e.$t("home.services.content")))])]), n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    value: {
                        delay: 175
                    },
                    expression: "{ delay: 175 }",
                    arg: "left"
                }],
                staticClass: "button",
                attrs: {
                    href: "https://iefa-plus.com/",
                    target: "_blank"
                }
            }, [e._v(" " + e._s(e.$t("common.cta.learnMore")) + " ")])]), n("section", {
                staticClass: "layout-dropdown"
            }, [e._l(e.entriesWithKeys, (function(t) {
                var a = t.key
                  , i = t.title
                  , s = t.content;
                return [n("article", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear"
                    }],
                    key: a + "-header",
                    staticClass: "layout-dropdown__item"
                }, [n("header", {
                    staticClass: "layout-dropdown__title",
                    on: {
                        click: function(t) {
                            return e.toggleSection(a)
                        }
                    }
                }, [e._v(" " + e._s(i) + " "), n("figure", {
                    staticClass: "layout-dropdown__icon",
                    class: {
                        "-active": a === e.expandedSection
                    }
                }, [e._v("+")])]), n("DropDown", {
                    key: a,
                    attrs: {
                        "is-open": a === e.expandedSection,
                        "content-class": "layout-dropdown__content"
                    }
                }, [n("div", {
                    domProps: {
                        innerHTML: e._s(s)
                    }
                })])], 1)]
            }
            ))], 2), n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    value: {
                        delay: 175
                    },
                    expression: "{ delay: 175 }",
                    arg: "left"
                }],
                staticClass: "button -mobile",
                attrs: {
                    href: "https://iefa-plus.com/",
                    target: "_blank"
                }
            }, [e._v(" " + e._s(e.$t("common.cta.learnMore")) + " ")])])
        }
          , Mn = []
          , $n = {
            name: "HomeService",
            data: function() {
                return {
                    expandedSection: null
                }
            },
            computed: {
                entriesWithKeys: function() {
                    return this.$t("home.services.entries").map((function(e, t) {
                        return Object(h["a"])(Object(h["a"])({}, e), {}, {
                            key: t
                        })
                    }
                    ))
                }
            },
            methods: {
                toggleSection: function(e) {
                    this.expandedSection = e === this.expandedSection ? null : e
                }
            }
        }
          , Un = $n
          , Dn = Object(F["a"])(Un, On, Mn, !1, null, null, null)
          , Rn = Dn.exports
          , Bn = function() {
            var e = this
              , t = e.$createElement;
            e._self._c;
            return e._m(0)
        }
          , Gn = [function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section"
            }, [n("h2", {
                staticClass: "layout-section__title"
            }, [e._v("Main topics")]), n("section", {
                staticClass: "layout-grid"
            }, [n("div", {
                staticClass: "grid-pannel__box"
            }, [n("h3", {
                staticClass: "grid-pannel__title"
            }, [e._v("Technologie")])]), n("div", {
                staticClass: "grid-pannel__box"
            }, [n("h3", {
                staticClass: "grid-pannel__title"
            }, [e._v("Science")])]), n("div", {
                staticClass: "grid-pannel__box"
            }, [n("h3", {
                staticClass: "grid-pannel__title"
            }, [e._v("Energy")])]), n("div", {
                staticClass: "grid-pannel__box"
            }, [n("h3", {
                staticClass: "grid-pannel__title"
            }, [e._v("Economic Progress")])])])])
        }
        ]
          , zn = {
            name: "HomeTopics"
        }
          , Hn = zn
          , Vn = Object(F["a"])(Hn, Bn, Gn, !1, null, null, null)
          , Wn = Vn.exports
          , Jn = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "slider-logo__container"
            }, [n("transition-group", {
                staticClass: "slider-logo",
                attrs: {
                    tag: "div",
                    name: "slider-logo"
                }
            }, e._l(e.activeLogos, (function(e) {
                return n("img", {
                    key: e.key,
                    class: ["slider-logo__item", e.modifier],
                    attrs: {
                        src: e.src
                    }
                })
            }
            )), 0)], 1)
        }
          , Qn = []
          , Yn = (n("fb6a"),
        {
            name: "HomeLogos",
            data: function() {
                return {
                    logos: [{
                        src: "/images/logo.png",
                        key: "a"
                    }, {
                        src: "/images/logo-medium.svg",
                        key: "b"
                    }, {
                        src: "/images/logo.png",
                        key: "c"
                    }, {
                        src: "/images/logo-medium.svg",
                        key: "d"
                    }, {
                        src: "/images/logo.png",
                        key: "e"
                    }, {
                        src: "/images/logo-medium.svg",
                        key: "f"
                    }, {
                        src: "/images/logo.png",
                        key: "g"
                    }, {
                        src: "/images/logo-medium.svg",
                        key: "h"
                    }, {
                        src: "/images/logo.png",
                        key: "i"
                    }, {
                        src: "/images/logo-medium.svg",
                        key: "j"
                    }],
                    activeLogos: [],
                    standbyLogos: [],
                    interval: null
                }
            },
            computed: {
                sliderSize: function() {
                    return this.$device.desktop ? 7 : this.$device.laptop ? 6 : this.$device.tabletH ? 5 : this.$device.tablet ? 4 : 3
                }
            },
            watch: {
                sliderSize: {
                    immediate: !0,
                    handler: function() {
                        this.clearSlider(),
                        this.setupSlides(),
                        this.startSlider()
                    }
                }
            },
            beforeDestroy: function() {
                this.clearSlider()
            },
            methods: {
                setupSlides: function() {
                    var e = this.logos.length <= this.sliderSize ? [].concat(Object(C["a"])(this.logos), Object(C["a"])(this.logos)) : this.logos;
                    this.activeLogos = e.slice(0, this.sliderSize),
                    this.standbyLogos = e.slice(this.sliderSize)
                },
                startSlider: function() {
                    this.interval = setInterval(this.shiftLogos, 3e3)
                },
                clearSlider: function() {
                    this.interval && (clearInterval(this.interval),
                    this.interval = null)
                },
                shiftLogos: function() {
                    this.standbyLogos.push(this.activeLogos.shift()),
                    this.activeLogos.push(this.standbyLogos.shift())
                }
            }
        })
          , Kn = Yn
          , Xn = Object(F["a"])(Kn, Jn, Qn, !1, null, null, null)
          , Zn = Xn.exports
          , ea = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }],
                staticClass: "layout-section -top home-newsletter",
                attrs: {
                    id: "contact"
                }
            }, [n("p", {
                staticClass: "layout-section__toptitle"
            }, [e._v(e._s(e.$t("home.newsletter")))]), n("form", {
                staticClass: "home-newsletter__form"
            }, [n("input", {
                staticClass: "input",
                attrs: {
                    type: "text"
                }
            }), n("button", {
                staticClass: "button"
            }, [e._v("Subscribe")]), n("iframe", {
                staticClass: "home-newsletter__frame",
                attrs: {
                    src: "/newsletter-form-" + e.$i18n.locale + ".html",
                    frameborder: "0"
                }
            })])])
        }
          , ta = []
          , na = {
            name: "HomeNewsletter"
        }
          , aa = na
          , ia = Object(F["a"])(aa, ea, ta, !1, null, null, null)
          , sa = ia.exports
          , oa = {
            name: "Home",
            components: Object(h["a"])({}, i),
            metaInfo: function() {
                return this.$t("home.meta")
            }
        }
          , ra = oa
          , la = Object(F["a"])(ra, $, U, !1, null, null, null)
          , ca = la.exports
          , ua = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", [n("EventsHeader"), n("EventsIndex")], 1)
        }
          , ma = []
          , da = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("header", {
                staticClass: "page-header"
            }, [n("section", {
                staticClass: "page-header__hgroup -no-bread"
            }, [n("h1", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 750]
                    },
                    expression: "{ delay: [$scroll, 750] }",
                    arg: "right"
                }],
                staticClass: "page-header__title"
            }, [e._v(" " + e._s(e.$t("common.navigation.allEvents")) + " ")])])])
        }
          , pa = []
          , ga = {
            name: "EventsHeader"
        }
          , ha = ga
          , fa = Object(F["a"])(ha, da, pa, !1, null, null, null)
          , va = fa.exports
          , ba = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", {
                staticClass: "layout-section"
            }, [n("article", {
                staticClass: "layout-section__content"
            }, [n("section", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 800, 50]
                    },
                    expression: "{ delay: [$scroll, 800, 50] }",
                    arg: "right"
                }],
                staticClass: "layout-section__hgroup -flex -spacing"
            }, [n("h2", {
                staticClass: "layout-section__heading -bigger"
            }, [e._v(e._s(e.$t("common.navigation.eventsNext")))])]), n("section", {
                staticClass: "layout-grid -bigger"
            }, e._l(e.nextEvents, (function(t, a) {
                var i = t.title
                  , s = t.conference
                  , o = t.date
                  , r = t.siteLink
                  , l = t.overrideConference
                  , c = t.thumbnail
                  , u = t.slug;
                return n("div", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            threshold: 0,
                            offset: 0,
                            delay: e.getDelay(a)
                        },
                        expression: "{ threshold: 0, offset: 0, delay: getDelay(index) }"
                    }],
                    key: o + "-" + a,
                    staticClass: "layout-grid__item"
                }, [r ? n("a", {
                    staticClass: "layout-grid__figure -small",
                    style: {
                        "--image": "url('" + e.eventThumbFallback(u, c) + "')"
                    },
                    attrs: {
                        href: r,
                        target: "_blank",
                        rel: "noopener"
                    }
                }) : n("span", {
                    staticClass: "layout-grid__figure -small",
                    style: {
                        "--image": "url('" + e.eventThumbFallback(u, c) + "')"
                    }
                }), n("div", {
                    staticClass: "layout-grid__content"
                }, [n("h4", {
                    staticClass: "layout-grid__title"
                }, [e._v(e._s(i))]), n("h6", {
                    staticClass: "layout-grid__subtitle"
                }, [e._v(e._s(l || s))]), n("h6", {
                    staticClass: "layout-grid__label"
                }, [e._v(e._s(o))])])])
            }
            )), 0)]), n("article", {
                staticClass: "layout-section__content"
            }, [n("section", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "layout-section__hgroup -flex -spacing"
            }, [n("h2", {
                staticClass: "layout-section__heading -bigger"
            }, [e._v(e._s(e.$t("events.pastEvents.title")))])]), n("section", {
                staticClass: "layout-grid -bigger"
            }, e._l(e.pastEvents, (function(t, a) {
                var i = t.title
                  , s = t.thumbnail
                  , o = t.date
                  , r = t.siteLink
                  , l = t.overrideConference
                  , c = t.conference
                  , u = t.slug;
                return n("div", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            delay: 25 * a
                        },
                        expression: "{ delay: index * 25 }"
                    }],
                    key: o + "-" + a,
                    staticClass: "layout-grid__item"
                }, [r ? n("a", {
                    staticClass: "layout-grid__figure -small",
                    style: {
                        "--image": "url('" + e.eventThumbFallback(u, s) + "')"
                    },
                    attrs: {
                        href: r,
                        target: "_blank"
                    }
                }) : n("span", {
                    staticClass: "layout-grid__figure -small",
                    style: {
                        "--image": "url('" + e.eventThumbFallback(u, s) + "')"
                    }
                }), n("div", {
                    staticClass: "layout-grid__content"
                }, [n("h4", {
                    staticClass: "layout-grid__title"
                }, [e._v(e._s(i))]), n("h6", {
                    staticClass: "layout-grid__subtitle"
                }, [e._v(e._s(l || c))]), n("h6", {
                    staticClass: "layout-grid__label"
                }, [e._v(e._s(o))])])])
            }
            )), 0)])])
        }
          , ya = []
          , _a = n("9b22")
          , Ca = n.n(_a)
          , wa = {
            name: "EventsIndex",
            computed: {
                nextEvents: function() {
                    var e = Object.entries(this.$i18n.messages[this.$i18n.locale].conferences).reduce((function(e, t) {
                        var n = Object(w["a"])(t, 2)
                          , a = n[0]
                          , i = n[1]
                          , s = i.events.find((function(e) {
                            return ve()(e.startDate).isAfter(ve()())
                        }
                        ));
                        return s ? [].concat(Object(C["a"])(e), [Object(h["a"])(Object(h["a"])({}, s), {}, {
                            conference: i.name,
                            slug: a
                        })]) : e
                    }
                    ), []);
                    return Ca()(e, ["startDate"])
                },
                pastEvents: function() {
                    var e = Object.entries(this.$i18n.messages[this.$i18n.locale].conferences).reduce((function(e, t) {
                        var n = Object(w["a"])(t, 2)
                          , a = n[0]
                          , i = n[1]
                          , s = i.events.filter((function(e) {
                            return ve()(e.startDate).isBefore(ve()())
                        }
                        ));
                        return [].concat(Object(C["a"])(e), Object(C["a"])(s.map((function(e) {
                            return Object(h["a"])(Object(h["a"])({}, e), {}, {
                                conference: i.name,
                                slug: a
                            })
                        }
                        ))))
                    }
                    ), []);
                    return Ca()(e, ["startDate"]).reverse()
                }
            },
            methods: {
                getDelay: function(e) {
                    var t = 25 * e % 200;
                    return e < 3 ? [this.$scroll, 900 + t, t] : t
                }
            }
        }
          , Ea = wa
          , xa = Object(F["a"])(Ea, ba, ya, !1, null, null, null)
          , Aa = xa.exports
          , Ia = {
            name: "Events",
            components: Object(h["a"])({}, s),
            metaInfo: function() {
                return {
                    title: "".concat(this.$t("common.navigation.allEvents"))
                }
            }
        }
          , Pa = Ia
          , ja = Object(F["a"])(Pa, ua, ma, !1, null, null, null)
          , Fa = ja.exports
          , qa = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", [n("EventsAnnualHeader"), n("EventsAnnualIndex")], 1)
        }
          , Ta = []
          , ka = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("header", {
                staticClass: "page-header"
            }, [n("section", {
                staticClass: "page-header__hgroup -no-bread"
            }, [n("h1", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 750]
                    },
                    expression: "{ delay: [$scroll, 750] }",
                    arg: "right"
                }],
                staticClass: "page-header__title"
            }, [e._v(" " + e._s(e.$t("common.navigation.eventsAnnual")) + " ")]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: [e.$scroll, 825, 125]
                    },
                    expression: "{ delay: [$scroll, 825, 125] }"
                }]
            }, [e._v(e._s(e.$t("events.header")))])])])
        }
          , La = []
          , Na = {
            name: "EventsHeader"
        }
          , Sa = Na
          , Oa = Object(F["a"])(Sa, ka, La, !1, null, null, null)
          , Ma = Oa.exports
          , $a = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", {
                staticClass: "layout-section"
            }, e._l(e.conferences, (function(t, a, i) {
                var s = t.thumbnail
                  , o = t.name
                  , r = t.description
                  , l = t.siteLink;
                return n("article", {
                    key: a,
                    staticClass: "layout-section__flex"
                }, [n("figure", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            delay: i ? 0 : [e.$scroll, 900],
                            threshold: 0,
                            offset: 0
                        },
                        expression: "{ delay: index ? 0 : [$scroll, 900], threshold: 0, offset: 0 }"
                    }],
                    staticClass: "layout-section__figure -small -overlay",
                    style: {
                        "--image": "url('" + s + "')"
                    }
                }, [n("img", {
                    staticClass: "layout-section__logo",
                    attrs: {
                        src: "/images/events/" + e.slugToKey(a) + "/logo-overlay-" + e.$i18n.locale + ".png",
                        alt: o
                    }
                })]), n("section", {
                    staticClass: "layout-section__content"
                }, [n("h4", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear:left",
                        value: {
                            delay: i ? 0 : [e.$scroll, 950, 50]
                        },
                        expression: "{ delay: index ? 0 : [$scroll, 950, 50] }",
                        arg: "left"
                    }],
                    staticClass: "layout-section__subtitle"
                }, [e._v(e._s(o))]), n("p", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            delay: i ? 0 : [e.$scroll, 1e3, 100]
                        },
                        expression: "{ delay: index ? 0 : [$scroll, 1000, 100] }"
                    }]
                }, [e._v(e._s(r))]), n("div", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            delay: i ? 0 : [e.$scroll, 1050, 150]
                        },
                        expression: "{ delay: index ? 0 : [$scroll, 1050, 150] }"
                    }],
                    staticClass: "layout-section__cta"
                }, [n("LocaleLink", {
                    staticClass: "button -secondary",
                    attrs: {
                        to: {
                            name: "conference",
                            params: {
                                slug: a
                            }
                        }
                    }
                }, [e._v(" " + e._s(e.$t("common.cta.learnMore")) + " ")]), l ? n("a", {
                    staticClass: "button",
                    attrs: {
                        href: l,
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("common.navigation.eventNext")))]) : e._e()], 1)])])
            }
            )), 0)
        }
          , Ua = []
          , Da = {
            name: "EventsIndex",
            computed: {
                conferences: function() {
                    var e = this;
                    return this.$i18n.messages[this.$i18n.locale].events.conferences.reduce((function(t, n) {
                        var a = Object.entries(e.$i18n.messages[e.$i18n.locale].conferences).find((function(e) {
                            return e[1].id === n
                        }
                        ))
                          , i = Object(w["a"])(a, 2)
                          , s = i[0]
                          , o = i[1];
                        if (!o)
                            return t;
                        var r = Array.isArray(o.events) && o.events.find((function(e) {
                            var t = e.startDate;
                            return ve()(t).isAfter(ve()())
                        }
                        )) || {}
                          , l = r.siteLink
                          , c = void 0 === l ? null : l;
                        return Object(h["a"])(Object(h["a"])({}, t), {}, Object(Jt["a"])({}, s, Object(h["a"])(Object(h["a"])({}, o), {}, {
                            siteLink: c
                        })))
                    }
                    ), {})
                }
            },
            methods: {
                slugToKey: function(e) {
                    return e.replace(/-(.)/g, (function(e, t) {
                        return t.toUpperCase()
                    }
                    ))
                }
            }
        }
          , Ra = Da
          , Ba = Object(F["a"])(Ra, $a, Ua, !1, null, null, null)
          , Ga = Ba.exports
          , za = {
            name: "Events",
            components: Object(h["a"])({}, o),
            metaInfo: function() {
                return {
                    title: "".concat(this.$t("common.navigation.eventsAnnual"))
                }
            }
        }
          , Ha = za
          , Va = Object(F["a"])(Ha, qa, Ta, !1, null, null, null)
          , Wa = Va.exports
          , Ja = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", [n("TeamHeader"), n("TeamIndex"), n("TeamCta")], 1)
        }
          , Qa = []
          , Ya = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("header", {
                staticClass: "page-header"
            }, [n("section", {
                staticClass: "page-header__hgroup -no-bread"
            }, [n("h1", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 750]
                    },
                    expression: "{ delay: [$scroll, 750] }",
                    arg: "right"
                }],
                staticClass: "page-header__title"
            }, [e._v(e._s(e.$t("team.header.title")))]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 825]
                    },
                    expression: "{ delay: [$scroll, 825] }",
                    arg: "right"
                }]
            }, [e._v(e._s(e.$t("team.header.content")))])])])
        }
          , Ka = []
          , Xa = {
            name: "TeamHeader"
        }
          , Za = Xa
          , ei = Object(F["a"])(Za, Ya, Ka, !1, null, null, null)
          , ti = ei.exports
          , ni = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section layout-grid -smaller"
            }, [e._l(e.$t("team.members"), (function(t, a) {
                var i = t.name
                  , s = t.title
                  , o = t.info
                  , r = t.image;
                return n("section", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            threshold: 0,
                            offset: 0,
                            delay: e.getDelay(a)
                        },
                        expression: "{ threshold: 0, offset: 0, delay: getDelay(index) }"
                    }],
                    key: i,
                    staticClass: "layout-grid__item"
                }, [n("figure", {
                    staticClass: "layout-grid__figure -profile",
                    style: {
                        "--image": "url('" + (r || "/images/team/thumbnail.png") + "')"
                    },
                    on: {
                        click: function(t) {
                            e.currentIndex = a
                        }
                    }
                }), n("div", {
                    staticClass: "layout-grid__content"
                }, [n("h4", {
                    staticClass: "layout-grid__title"
                }, [e._v(e._s(i))]), n("h6", {
                    staticClass: "layout-grid__subtitle -accent"
                }, [e._v(e._s(s))]), n("p", [e._v(e._s(o))])])])
            }
            )), n("OverlayModal", e._b({
                attrs: {
                    "is-open": !!e.currentMember
                },
                on: {
                    close: function(t) {
                        e.currentIndex = null
                    }
                }
            }, "OverlayModal", e.currentMember, !1))], 2)
        }
          , ai = []
          , ii = (n("a4d3"),
        n("e01a"),
        {
            name: "TeamIndex",
            data: function() {
                return {
                    currentIndex: null
                }
            },
            computed: {
                currentMember: function() {
                    if (null === this.currentIndex)
                        return null;
                    var e = this.$t("team.members")[this.currentIndex]
                      , t = e.name
                      , n = e.title
                      , a = e.info
                      , i = e.description;
                    return {
                        title: t,
                        subtitle: "".concat(n, " - ").concat(a),
                        content: i
                    }
                }
            },
            methods: {
                getDelay: function(e) {
                    var t = 50 * e % 200;
                    return e < 4 ? [this.$scroll, 900 + t, t] : t
                }
            }
        })
          , si = ii
          , oi = Object(F["a"])(si, ni, ai, !1, null, null, null)
          , ri = oi.exports
          , li = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section -split"
            }, [n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "layout-section__figure",
                style: {
                    "--image": "url('/images/team/iefa-team.jpg')"
                }
            }), n("section", {
                staticClass: "layout-section__content"
            }, [n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__hgroup layout-section__title"
            }, [e._v(" " + e._s(e.$t("team.cta.title")) + " ")]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }]
            }, [e._v(e._s(e.$t("team.cta.content")))]), n("div", {
                staticClass: "layout-section__cta"
            }, [n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 125,
                        threshold: 0
                    },
                    expression: "{ delay: 125, threshold: 0 }"
                }],
                staticClass: "button",
                attrs: {
                    href: "mailto:rh@forum-americas.org"
                }
            }, [e._v(" " + e._s(e.$t("team.cta.button")) + " ")])])])])
        }
          , ci = []
          , ui = {
            name: "TeamCta"
        }
          , mi = ui
          , di = Object(F["a"])(mi, li, ci, !1, null, null, null)
          , pi = di.exports
          , gi = {
            name: "Team",
            components: Object(h["a"])({}, r),
            metaInfo: function() {
                return {
                    title: "".concat(this.$t("common.navigation.team"))
                }
            }
        }
          , hi = gi
          , fi = Object(F["a"])(hi, Ja, Qa, !1, null, null, null)
          , vi = fi.exports
          , bi = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section"
            }, [n("hgroup", {
                staticClass: "page-header__hgroup"
            }, [n("h1", {
                staticClass: "page-header__title"
            }, [e._v(e._s(e.$t("terms.title")))])]), n("section", {
                staticClass: "article-content"
            }, ["true" === e.$t("terms.wp") ? [n("div", {
                domProps: {
                    innerHTML: e._s(e.$t("terms.content"))
                }
            })] : [e._l(e.$t("terms.content_static"), (function(t, a) {
                return ["string" === typeof t ? n("p", {
                    key: t,
                    domProps: {
                        innerHTML: e._s(t)
                    }
                }) : "title" === t.type ? n("h2", {
                    key: t.text
                }, [e._v(e._s(t.text))]) : "subtitle" === t.type ? n("h3", {
                    key: t.text
                }, [e._v(e._s(t.text))]) : "list" === t.type ? n("ul", {
                    key: a
                }, e._l(t.items, (function(t) {
                    return n("li", {
                        key: t,
                        domProps: {
                            innerHTML: e._s(t)
                        }
                    })
                }
                )), 0) : e._e()]
            }
            ))]], 2), n("p", {
                staticClass: "article-content__note"
            }, [e._v(e._s(e.$t("terms.update")))])])
        }
          , yi = []
          , _i = {
            name: "Terms",
            metaInfo: function() {
                return this.$t("terms.meta")
            }
        }
          , Ci = _i
          , wi = Object(F["a"])(Ci, bi, yi, !1, null, null, null)
          , Ei = wi.exports
          , xi = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section"
            }, [n("hgroup", {
                staticClass: "page-header__hgroup"
            }, [n("h1", {
                staticClass: "page-header__title"
            }, [e._v(e._s(e.$t("privacy.title")))])]), n("section", {
                staticClass: "article-content"
            }, [e.$t("privacy.wp") ? [n("div", {
                domProps: {
                    innerHTML: e._s(e.$t("privacy.content"))
                }
            })] : [e._l(e.$t("privacy.content_static"), (function(t, a) {
                return ["string" === typeof t ? n("p", {
                    key: t,
                    domProps: {
                        innerHTML: e._s(t)
                    }
                }) : "title" === t.type ? n("h2", {
                    key: t.text
                }, [e._v(e._s(t.text))]) : "subtitle" === t.type ? n("h3", {
                    key: t.text
                }, [e._v(e._s(t.text))]) : "list" === t.type ? n("ul", {
                    key: a
                }, e._l(t.items, (function(t) {
                    return n("li", {
                        key: t,
                        domProps: {
                            innerHTML: e._s(t)
                        }
                    })
                }
                )), 0) : e._e()]
            }
            ))]], 2), n("p", {
                staticClass: "article-content__note"
            }, [e._v(e._s(e.$t("privacy.update")))])])
        }
          , Ai = []
          , Ii = {
            name: "Terms",
            metaInfo: function() {
                return this.$t("privacy.meta")
            }
        }
          , Pi = Ii
          , ji = Object(F["a"])(Pi, xi, Ai, !1, null, null, null)
          , Fi = ji.exports
          , qi = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", [n("AboutHeader"), n("AboutMission"), n("AboutTeam")], 1)
        }
          , Ti = []
          , ki = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("header", {
                staticClass: "page-header"
            }, [n("section", {
                staticClass: "page-header__hgroup"
            }, [n("NavigationBreadcrumb", {
                attrs: {
                    back: e.$t("common.navigation.aboutUs"),
                    hash: "#about",
                    page: e.$t("common.navigation.team")
                }
            }), n("h1", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 750
                    },
                    expression: "{ delay: 750 }",
                    arg: "right"
                }],
                staticClass: "page-header__title"
            }, [e._v(e._s(e.$t("team.header.title")))]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 825
                    },
                    expression: "{ delay: 825 }",
                    arg: "right"
                }]
            }, [e._v(e._s(e.$t("team.header.content")))])], 1)])
        }
          , Li = []
          , Ni = {
            name: "AboutHeader"
        }
          , Si = Ni
          , Oi = Object(F["a"])(Si, ki, Li, !1, null, null, null)
          , Mi = Oi.exports
          , $i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section -split -reverse",
                attrs: {
                    id: "about"
                }
            }, [n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    arg: "left"
                }],
                staticClass: "layout-section__figure -reverse",
                style: {
                    "--image": "url('/images/about-mission.jpg')"
                }
            }), n("section", {
                staticClass: "layout-section__content"
            }, [n("div", {
                staticClass: "layout-section__hgroup"
            }, [n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(" " + e._s(e.$t("common.navigation.aboutUs")) + " ")])]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }]
            }, [e._v(e._s(e.$t("home.about.content")))])])])
        }
          , Ui = []
          , Di = {
            name: "AboutMission"
        }
          , Ri = Di
          , Bi = Object(F["a"])(Ri, $i, Ui, !1, null, null, null)
          , Gi = Bi.exports
          , zi = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                staticClass: "layout-section -split -reverse",
                attrs: {
                    id: "about"
                }
            }, [n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    arg: "left"
                }],
                staticClass: "layout-section__figure -reverse",
                style: {
                    "--image": "url('/images/about-mission.jpg')"
                }
            }), n("section", {
                staticClass: "layout-section__content"
            }, [n("div", {
                staticClass: "layout-section__hgroup"
            }, [n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(" " + e._s(e.$t("common.navigation.aboutUs")) + " ")])]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }]
            }, [e._v(e._s(e.$t("home.about.content")))])])])
        }
          , Hi = []
          , Vi = {
            name: "AboutTeam"
        }
          , Wi = Vi
          , Ji = Object(F["a"])(Wi, zi, Hi, !1, null, null, null)
          , Qi = Ji.exports
          , Yi = {
            name: "About",
            components: Object(h["a"])({}, l)
        }
          , Ki = Yi
          , Xi = Object(F["a"])(Ki, qi, Ti, !1, null, null, null)
          , Zi = (Xi.exports,
        function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return e.conference ? n("div", [n("header", {
                staticClass: "page-header -bottom-spacing -sub-page"
            }, [n("section", {
                staticClass: "page-header__hgroup"
            }, [n("h1", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 750]
                    },
                    expression: "{ delay: [$scroll, 750] }",
                    arg: "right"
                }],
                staticClass: "page-header__title"
            }, [e._v(e._s(e.conference.name))]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: [e.$scroll, 825, 75]
                    },
                    expression: "{ delay: [$scroll, 825, 75] }"
                }]
            }, [e._v(e._s(e.conference.description))])])]), e.hasBullets ? n("article", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: [e.$scroll, 750]
                    },
                    expression: "{ delay: [$scroll, 750] }"
                }],
                staticClass: "bg-wrap"
            }, [n("section", {
                staticClass: "layout-section grid-numbers"
            }, [n("div", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: [e.$scroll, 825, 75]
                    },
                    expression: "{ delay: [$scroll, 825, 75] }"
                }],
                staticClass: "grid-numbers__item"
            }, [n("h3", {
                staticClass: "grid-numbers__count"
            }, [e._v(e._s(e.conference.bullets.bullet1.info))]), n("h2", {
                staticClass: "grid-numbers__label"
            }, [e._v(e._s(e.conference.bullets.bullet1.label))])]), n("div", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: [e.$scroll, 900, 150]
                    },
                    expression: "{ delay: [$scroll, 900, 150] }"
                }],
                staticClass: "grid-numbers__item"
            }, [n("h3", {
                staticClass: "grid-numbers__count"
            }, [e._v(e._s(e.conference.bullets.bullet2.info))]), n("h2", {
                staticClass: "grid-numbers__label"
            }, [e._v(e._s(e.conference.bullets.bullet2.label))])]), n("div", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: [e.$scroll, 975, 225]
                    },
                    expression: "{ delay: [$scroll, 975, 225] }"
                }],
                staticClass: "grid-numbers__item"
            }, [n("h3", {
                staticClass: "grid-numbers__count"
            }, [e._v(e._s(e.conference.bullets.bullet3.info))]), n("h2", {
                staticClass: "grid-numbers__label"
            }, [e._v(e._s(e.conference.bullets.bullet3.label))])]), n("div", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: [e.$scroll, 1025, 350]
                    },
                    expression: "{ delay: [$scroll, 1025, 350] }"
                }],
                staticClass: "grid-numbers__item"
            }, [n("h3", {
                staticClass: "grid-numbers__count"
            }, [e._v(e._s(e.conference.bullets.bullet4.info))]), n("h2", {
                staticClass: "grid-numbers__label"
            }, [e._v(e._s(e.conference.bullets.bullet4.label))])])])]) : e._e(), n("article", {
                staticClass: "layout-section -split -reverse"
            }, [n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    value: {
                        delay: [e.$scroll, 975, 25],
                        threshold: 0
                    },
                    expression: "{ delay: [$scroll, 975, 25], threshold: 0 }",
                    arg: "left"
                }],
                staticClass: "layout-section__figure -reverse",
                style: {
                    "--image": "url('" + e.conference.thumbnail + "')"
                }
            }), n("section", {
                staticClass: "layout-section__content"
            }, [n("div", {
                staticClass: "layout-section__hgroup"
            }, [n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 950],
                        threshold: .25
                    },
                    expression: "{ delay: [$scroll, 950], threshold: 0.25 }",
                    arg: "right"
                }],
                staticClass: "layout-section__toptitle"
            }, [e._v(" " + e._s(e.conference.name) + " ")]), n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 1e3, 50],
                        threshold: 0
                    },
                    expression: "{ delay: [$scroll, 1000, 50], threshold: 0 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(" " + e._s(e.$t("common.ourPurpose")) + " ")])]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }]
            }, [e._v(e._s(e.conference.about))]), e.nextEvent && e.nextEvent.siteLink ? n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }"
                }],
                staticClass: "button layout-section__cta",
                attrs: {
                    target: "_blank",
                    href: e.nextEvent.siteLink
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.eventNext")) + " ")]) : e._e()])]), e.nextEvent ? n("div", {
                staticClass: "bg-wrap",
                attrs: {
                    id: "next-event-" + e.slug
                }
            }, [n("article", {
                staticClass: "layout-section -split"
            }, [n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "layout-section__figure",
                style: {
                    "--image": "url('" + e.eventThumbFallback(e.slug, e.nextEvent.thumbnail) + "')"
                }
            }), n("section", {
                staticClass: "layout-section__content"
            }, [n("div", {
                staticClass: "layout-section__hgroup"
            }, [n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    arg: "left"
                }],
                staticClass: "layout-section__toptitle"
            }, [e._v(e._s(e.$t("common.nextEvent")))]), n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "left"
                }],
                staticClass: "layout-section__title -smaller -no-bottom"
            }, [e._v(" " + e._s(e.nextEvent.title) + " ")])]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }]
            }, [e._v(e._s(e.limitChars(e.nextEvent.description, 800)))]), e.nextEvent.registerLink ? n("a", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }"
                }],
                staticClass: "button layout-section__cta",
                attrs: {
                    target: "_blank",
                    href: e.nextEvent.registerLink
                }
            }, [e._v(" " + e._s(e.$t("common.cta.registerNow")) + " ")]) : e._e()])])]) : e._e(), e.hasGallery ? n("section", {
                staticClass: "layout-section"
            }, [n("div", {
                staticClass: "layout-section__hgroup -flex -events"
            }, [n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(" " + e._s(e.$t("common.navigation.gallery")) + " ")]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 125
                    },
                    expression: "{ delay: 125 }"
                }],
                staticClass: "button",
                attrs: {
                    to: {
                        name: "conference-gallery",
                        params: {
                            slug: e.slug
                        }
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.navigation.seeMore")) + " ")])], 1), n("article", {
                staticClass: "layout-grid -half -space-top"
            }, e._l(e.galleryPreview, (function(e, t) {
                return n("div", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            delay: 50 * t + 100,
                            threshold: 0
                        },
                        expression: "{ delay: i * 50 + 100, threshold: 0 }"
                    }],
                    key: e,
                    staticClass: "layout-grid__item"
                }, [n("figure", {
                    staticClass: "layout-grid__figure",
                    style: {
                        "--image": "url('" + e + "')"
                    }
                })])
            }
            )), 0)]) : e._e(), e.hasBoards ? n("article", {
                staticClass: "layout-section -split -reverse"
            }, [n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:left",
                    arg: "left"
                }],
                staticClass: "layout-section__figure -reverse",
                style: {
                    "--image": "url('" + e.conference.board.image + "')"
                }
            }), n("section", {
                staticClass: "layout-section__content"
            }, [n("div", {
                staticClass: "layout-section__hgroup"
            }, [n("span", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "layout-section__toptitle"
            }, [e._v(e._s(e.$t("common.navigation.about")))]), n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(e._s(e.conference.board.title))])]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }"
                }]
            }, [e._v(e._s(e.conference.board.content))]), n("div", {
                staticClass: "layout-section__cta"
            }, ["true" === e.conference.hasGovernors ? n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }"
                }],
                staticClass: "button",
                attrs: {
                    to: {
                        name: "conference-board",
                        params: {
                            slug: e.slug
                        }
                    }
                }
            }, [e._v(" " + e._s(e.getBoardLabel("boardOfGovernors")) + " ")]) : e._e(), "true" === e.conference.hasAdvisory ? n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear",
                    value: {
                        delay: 350
                    },
                    expression: "{ delay: 350 }"
                }],
                staticClass: "button",
                attrs: {
                    to: {
                        name: "conference-advisory",
                        params: {
                            slug: e.slug
                        }
                    }
                }
            }, [e._v(" " + e._s(e.getBoardLabel("advisoryBoard")) + " ")]) : e._e()], 1)])]) : e._e(), e.archiveEvents.length ? n("article", {
                staticClass: "layout-section"
            }, [n("div", {
                staticClass: "layout-section__hgroup -flex -events"
            }, [n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(e._s(e.$t("common.archives")))])]), n("section", {
                staticClass: "layout-grid -bigger"
            }, e._l(e.archiveEvents, (function(t, a) {
                var i = t.title
                  , s = t.thumbnail
                  , o = t.siteLink
                  , r = t.overrideConference;
                return n("div", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear",
                        value: {
                            delay: 25 * a
                        },
                        expression: "{ delay: index * 25 }"
                    }],
                    key: i,
                    staticClass: "layout-grid__item"
                }, [o ? n("a", {
                    staticClass: "layout-grid__figure -small",
                    style: {
                        "--image": "url('" + e.eventThumbFallback(e.slug, s) + "')"
                    },
                    attrs: {
                        href: o,
                        target: "_blank"
                    }
                }) : e._e(), n("div", {
                    staticClass: "layout-grid__content"
                }, [n("h6", {
                    staticClass: "layout-grid__subtitle"
                }, [e._v(e._s(r || e.conference.name))]), n("h4", {
                    staticClass: "layout-grid__title"
                }, [e._v(e._s(i))])])])
            }
            )), 0)]) : e._e()]) : e._e()
        }
        )
          , es = []
          , ts = (n("5db7"),
        n("73d9"),
        {
            name: "Conference",
            props: {
                slug: {
                    type: String,
                    required: !0
                }
            },
            metaInfo: function() {
                return {
                    title: this.conference ? this.conference.name : ""
                }
            },
            computed: {
                conference: function() {
                    return this.$i18n.messages[this.$i18n.locale].conferences[this.slug]
                },
                nextEvent: function() {
                    return Array.isArray(this.conference.events) ? this.conference.events.find((function(e) {
                        var t = e.startDate;
                        return ve()(t).isAfter(ve()())
                    }
                    )) : null
                },
                archiveEvents: function() {
                    return Array.isArray(this.conference.events) ? this.conference.events.filter((function(e) {
                        var t = e.startDate
                          , n = e.overrideConference;
                        return !n && ve()(t).isBefore(ve()())
                    }
                    )) : []
                },
                hasBullets: function() {
                    return "true" === this.conference.hasBullets
                },
                hasGallery: function() {
                    return "true" === this.conference.hasGallery && Array.isArray(this.conference.gallery)
                },
                hasFullGallery: function() {
                    return this.hasGallery && this.conference.gallery.flatMap((function(e) {
                        var t = e.images;
                        return t
                    }
                    )).length > 4
                },
                galleryPreview: function() {
                    return this.conference.galleryPreview || []
                },
                hasBoards: function() {
                    return "true" === this.conference.hasGovernors || "true" === this.conference.hasAdvisory
                }
            },
            created: function() {
                this.conference || this.$router.replace({
                    name: "home-".concat(this.$i18n.locale)
                })
            },
            methods: {
                getBoardLabel: function(e) {
                    return "false" === this.conference.hasGovernors || "false" === this.conference.hasAdvisory ? this.$t("common.navigation.seeMore") : this.$t("common.".concat(e))
                },
                limitChars: function(e, t) {
                    return e.length > t ? "".concat(e.substring(0, t), "(...)") : e
                }
            }
        })
          , ns = ts
          , as = Object(F["a"])(ns, Zi, es, !1, null, null, null)
          , is = as.exports
          , ss = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", [n("header", {
                staticClass: "page-header -sub-page"
            }, [n("section", {
                staticClass: "page-header__hgroup"
            }, [n("h1", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 650]
                    },
                    expression: "{ delay: [$scroll, 650] }",
                    arg: "right"
                }],
                staticClass: "page-header__title"
            }, [e._v(e._s(e.conference.name))]), n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 700, 50]
                    },
                    expression: "{ delay: [$scroll, 700, 50] }",
                    arg: "right"
                }],
                staticClass: "layout-section__subtitle -accent"
            }, [e._v(" " + e._s(e.$t("common.navigation.gallery")) + " ")])])]), n("section", {
                staticClass: "layout-section"
            }, [e._l(e.galleries, (function(t, a) {
                var i = t.title
                  , s = t.images;
                return [n("article", {
                    key: i,
                    staticClass: "layout-section__content"
                }, [n("section", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear:right",
                        value: {
                            delay: [e.$scroll, 750, 100]
                        },
                        expression: "{ delay: [$scroll, 750, 100] }",
                        arg: "right"
                    }],
                    staticClass: "layout-section__hgroup -flex -spacing"
                }, [n("h2", {
                    staticClass: "layout-section__heading -bigger"
                }, [e._v(e._s(i))])]), n("section", {
                    key: i + "-images",
                    staticClass: "layout-grid -bigger"
                }, e._l(s, (function(t, i) {
                    return n("div", {
                        directives: [{
                            name: "appear",
                            rawName: "v-appear",
                            value: {
                                threshold: 0,
                                offset: 0,
                                delay: e.getImgDelay(a, i)
                            },
                            expression: "{ threshold: 0, offset: 0, delay: getImgDelay(galleryIndex, imageIndex) }"
                        }],
                        key: t,
                        staticClass: "layout-grid__item"
                    }, [n("figure", {
                        staticClass: "layout-gallery__item",
                        style: {
                            "--image": "url('" + t + "')"
                        }
                    })])
                }
                )), 0)])]
            }
            ))], 2)])
        }
          , os = []
          , rs = {
            name: "ConferenceGallery",
            props: {
                slug: {
                    type: String,
                    required: !0
                }
            },
            metaInfo: function() {
                return {
                    title: "".concat(this.$t("common.navigation.galleryShort"), " | ").concat(this.conference.name)
                }
            },
            computed: {
                conference: function() {
                    return this.$i18n.messages[this.$i18n.locale].conferences[this.slug]
                },
                galleries: function() {
                    return "true" === this.conference.hasGallery ? this.conference.gallery : []
                }
            },
            methods: {
                getImgDelay: function(e, t) {
                    var n = 0 === e && t < 3
                      , a = 50 * t % 150;
                    return n ? [this.$scroll, 800 + a, a] : a
                }
            }
        }
          , ls = rs
          , cs = Object(F["a"])(ls, ss, os, !1, null, null, null)
          , us = cs.exports
          , ms = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", [n("header", {
                staticClass: "page-header -sub-page"
            }, [n("section", {
                staticClass: "page-header__hgroup"
            }, [n("h1", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 650]
                    },
                    expression: "{ delay: [$scroll, 650] }",
                    arg: "right"
                }],
                staticClass: "page-header__title"
            }, [e._v(e._s(e.conference.name))]), n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: [e.$scroll, 700, 50]
                    },
                    expression: "{ delay: [$scroll, 700, 50] }",
                    arg: "right"
                }],
                staticClass: "layout-section__subtitle -accent"
            }, [e._v(" " + e._s(e.title) + " ")])])]), n("section", {
                staticClass: "layout-section"
            }, e._l(e.board, (function(t, a) {
                return n("div", {
                    key: a,
                    staticClass: "layout-section__content"
                }, [n("section", {
                    directives: [{
                        name: "appear",
                        rawName: "v-appear:right",
                        value: {
                            delay: a ? 0 : [e.$scroll, 750, 100]
                        },
                        expression: "{ delay: !groupIndex ? [$scroll, 750, 100] : 0 }",
                        arg: "right"
                    }],
                    staticClass: "layout-section__hgroup -flex -spacing"
                }, [n("h2", {
                    staticClass: "layout-section__heading -bigger"
                }, [e._v(e._s(t.title))])]), n("article", {
                    staticClass: "layout-grid -smaller"
                }, e._l(t.members, (function(t, i) {
                    var s = t.name
                      , o = t.info
                      , r = t.image;
                    return n("section", {
                        directives: [{
                            name: "appear",
                            rawName: "v-appear",
                            value: {
                                threshold: 0,
                                offset: 0,
                                delay: e.getDelay(a, i)
                            },
                            expression: "{ threshold: 0, offset: 0, delay: getDelay(groupIndex, memberIndex) }"
                        }],
                        key: s,
                        staticClass: "layout-grid__item"
                    }, [n("figure", {
                        staticClass: "layout-grid__figure -profile",
                        style: {
                            "--image": "url('" + r + "')"
                        },
                        on: {
                            click: function(t) {
                                return e.setModalMember(a, i)
                            }
                        }
                    }), n("div", {
                        staticClass: "layout-grid__content"
                    }, [n("h6", {
                        staticClass: "layout-grid__title -spacing"
                    }, [e._v(e._s(s))]), n("p", [e._v(e._s(o))])])])
                }
                )), 0)])
            }
            )), 0), n("article", {
                staticClass: "layout-section -split",
                attrs: {
                    id: "about"
                }
            }, [n("figure", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    arg: "right"
                }],
                staticClass: "layout-section__figure",
                style: {
                    "--image": "url('" + e.conference.thumbnail + "')"
                }
            }), n("section", {
                staticClass: "layout-section__content"
            }, [n("div", {
                staticClass: "layout-section__hgroup"
            }, [n("h2", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 100
                    },
                    expression: "{ delay: 100 }",
                    arg: "right"
                }],
                staticClass: "layout-section__title -no-bottom"
            }, [e._v(e._s(e.conference.name))])]), n("p", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 200
                    },
                    expression: "{ delay: 200 }",
                    arg: "right"
                }]
            }, [e._v(e._s(e.conference.description))]), n("LocaleLink", {
                directives: [{
                    name: "appear",
                    rawName: "v-appear:right",
                    value: {
                        delay: 300
                    },
                    expression: "{ delay: 300 }",
                    arg: "right"
                }],
                staticClass: "button layout-section__cta",
                attrs: {
                    to: {
                        name: "conference",
                        params: {
                            slug: e.slug
                        }
                    }
                }
            }, [e._v(" " + e._s(e.$t("common.cta.learnMore")) + " ")])], 1)]), n("OverlayModal", e._b({
                attrs: {
                    "is-open": !!e.modalMember
                },
                on: {
                    close: function(t) {
                        e.modalMember = null
                    }
                }
            }, "OverlayModal", e.modalMember, !1))], 1)
        }
          , ds = []
          , ps = {
            name: "ConferenceBoard",
            props: {
                slug: {
                    type: String,
                    required: !0
                },
                isAdvisory: {
                    type: Boolean,
                    default: !1
                }
            },
            metaInfo: function() {
                return {
                    title: "".concat(this.title, " | ").concat(this.conference.name)
                }
            },
            data: function() {
                return {
                    modalMember: null
                }
            },
            computed: {
                conference: function() {
                    return this.$i18n.messages[this.$i18n.locale].conferences[this.slug]
                },
                board: function() {
                    return this.isAdvisory ? this.conference.advisory : this.conference.governors
                },
                title: function() {
                    return this.isAdvisory ? this.$t("common.advisoryBoard") : this.$t("common.boardOfGovernors")
                },
                hasPage: function() {
                    return this.isAdvisory ? "true" === this.conference.hasAdvisory : "true" === this.conference.hasGovernors
                }
            },
            methods: {
                getDelay: function(e, t) {
                    var n = !e && t < 4
                      , a = 50 * t % 200;
                    return n ? [this.$scroll, 800 + a, a] : a
                },
                setModalMember: function(e, t) {
                    var n = this.board[e].members[t]
                      , a = n.name
                      , i = n.info
                      , s = n.description;
                    this.modalMember = {
                        title: a,
                        subtitle: i,
                        content: s
                    }
                }
            }
        }
          , gs = ps
          , hs = Object(F["a"])(gs, ms, ds, !1, null, null, null)
          , fs = hs.exports
          , vs = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div")
        }
          , bs = []
          , ys = {
            name: "ConferenceRedirect",
            props: {
                slug: {
                    type: String,
                    required: !0
                }
            },
            created: function() {
                this.$router.replace({
                    name: "conference-".concat(this.$i18n.locale),
                    params: {
                        slug: this.slug
                    }
                })
            }
        }
          , _s = ys
          , Cs = Object(F["a"])(_s, vs, bs, !1, null, null, null)
          , ws = Cs.exports;
        m["a"].use(f["a"]);
        var Es = M(["en", "fr"], [{
            path: "",
            name: "home",
            component: ca
        }, {
            path: {
                en: "team",
                fr: "equipe"
            },
            name: "team",
            component: vi
        }, {
            path: {
                en: "terms-of-use",
                fr: "conditions-utilisation"
            },
            name: "terms",
            component: Ei
        }, {
            path: {
                en: "privacy-policy",
                fr: "politique-confidentialite"
            },
            name: "privacy",
            component: Fi
        }, {
            path: {
                en: "all-events",
                fr: "tous-les-evenements"
            },
            name: "events",
            component: Fa
        }, {
            path: "conferences",
            name: "events-annual",
            component: Wa
        }, {
            path: "conferences/:slug",
            name: "conference",
            props: !0,
            component: is
        }, {
            path: {
                en: "conferences/:slug/gallery",
                fr: "conferences/:slug/galerie"
            },
            name: "conference-gallery",
            props: !0,
            component: us
        }, {
            path: {
                en: "conferences/:slug/board",
                fr: "conferences/:slug/bureau-gouverneurs"
            },
            name: "conference-board",
            props: !0,
            component: fs
        }, {
            path: {
                en: "conferences/:slug/advisory-board",
                fr: "conferences/:slug/comite-aviseur"
            },
            name: "conference-advisory",
            props: function(e) {
                return Object(h["a"])(Object(h["a"])({}, e.params), {}, {
                    isAdvisory: !0
                })
            },
            component: fs
        }, {
            path: "conferences/:slug/*",
            name: "conference-redirect",
            props: !0,
            component: ws
        }], {
            catchAll: {
                path: "*",
                redirect: {
                    name: "home"
                }
            }
        })
          , xs = new f["a"]({
            routes: Es,
            mode: "history",
            base: "/",
            linkActiveClass: "-active",
            scrollBehavior: function(e, t, n) {
                if (n)
                    return b.emit("pop-scroll", n.y)
            }
        })
          , As = xs
          , Is = n("ec26")
          , Ps = {
            base: "transition-appear",
            active: "-appear-active",
            from: "-appear-from",
            to: "-appear-to",
            directions: {
                up: "-up",
                right: "-right",
                down: "-down",
                left: "-left"
            }
        }
          , js = {}
          , Fs = function(e, t, n) {
            return function(a) {
                a.forEach((function(a) {
                    var i = a.target
                      , s = a.isIntersecting;
                    if (s) {
                        if (js[e].unobserve(i),
                        t)
                            return t(i);
                        if (n) {
                            var o = Object(w["a"])(n, 3)
                              , r = o[0]
                              , l = o[1]
                              , c = o[2]
                              , u = void 0 === c ? 0 : c;
                            i.style.setProperty("--transition-delay", "".concat(r.position < 150 ? l : u, "ms"))
                        }
                        i.classList.add(Ps.active),
                        setTimeout((function() {
                            return i.classList.replace(Ps.from, Ps.to)
                        }
                        ), 100)
                    }
                }
                ))
            }
        }
          , qs = function(e) {
            var t = e.offset
              , n = void 0 === t ? "-5%" : t
              , a = e.threshold
              , i = void 0 === a ? .5 : a
              , s = e.customHandler
              , o = e.scrollDelay
              , r = "number" === typeof n ? "".concat(n, "px") : n
              , l = "0px 0px ".concat(r)
              , c = {
                rootMargin: l,
                threshold: i
            }
              , u = s || o ? Object(Is["a"])() : JSON.stringify(c);
            if (js[u])
                return js[u];
            var m = new IntersectionObserver(Fs(u, s, o),c);
            return js[u] = m,
            m
        };
        qs({});
        var Ts = function(e) {
            e.directive("appear", {
                bind: function(e, t) {
                    var n = t.arg
                      , a = void 0 === n ? "up" : n
                      , i = t.value
                      , s = void 0 === i ? {} : i;
                    if (!s.handler) {
                        var o = s.delay
                          , r = s.distance;
                        if (e.classList.add(Ps.base, Ps.from, Ps.directions[a]),
                        o && !Array.isArray(o) && e.style.setProperty("--transition-delay", "".concat(o, "ms")),
                        r) {
                            var l = "right" === a || "down" === a ? "-".concat(r) : r;
                            e.style.setProperty("--translate-by", l)
                        }
                    }
                },
                inserted: function(e, t) {
                    var n = t.arg
                      , a = void 0 === n ? "up" : n
                      , i = t.value
                      , s = void 0 === i ? {} : i
                      , o = s.offsetTop
                      , r = s.offsetBottom
                      , l = s.threshold
                      , c = s.delay
                      , u = s.handler
                      , m = c && Array.isArray(c) ? c : null
                      , d = qs({
                        offsetTop: o,
                        offsetBottom: r,
                        threshold: l,
                        customHandler: u,
                        scrollDelay: m
                    });
                    d.observe(e),
                    s.handler || e.addEventListener("transitionend", (function() {
                        e.classList.remove(Ps.base, Ps.active, Ps.to, Ps.directions[a]),
                        e.style.removeProperty("--transition-delay"),
                        e.style.removeProperty("--translate-by")
                    }
                    ), {
                        once: !0
                    })
                }
            })
        }
          , ks = n("cc42")
          , Ls = n.n(ks)
          , Ns = null
          , Ss = document
          , Os = Ss.body
          , Ms = window
          , $s = Ms.requestAnimationFrame
          , Us = document.scrollingElement || document.documentElement
          , Ds = {
            get global() {
                return Ns
            },
            install: function(e, t) {
                var n = t.scrollingElement
                  , a = void 0 === n ? Us : n
                  , i = t.scrollEventTarget;
                Ns = new e({
                    name: "ScrollVM",
                    data: function() {
                        return {
                            el: a,
                            position: 0,
                            mute: !0
                        }
                    },
                    created: function() {
                        var e = this
                          , t = i || this.el
                          , n = !0
                          , a = function() {
                            e.freeze || (e.position = e.el.scrollTop),
                            e.mute || e.$emit("scroll", e.position),
                            n = !1
                        }
                          , s = function() {
                            n || ($s(a),
                            n = !0)
                        };
                        a(),
                        this.mute = !1,
                        t.addEventListener("scroll", s)
                    },
                    methods: {
                        prevent: function() {
                            var e = this
                              , t = this.position;
                            return this.mute = !0,
                            Os.style.position = "fixed",
                            Os.style.top = "-".concat(t, "px"),
                            function() {
                                e.mute = !1,
                                Os.style.position = "",
                                Os.style.top = "",
                                e.to(t)
                            }
                        },
                        on: function(e) {
                            return this.$on("scroll", e)
                        },
                        off: function(e) {
                            return this.$off("scroll", e)
                        },
                        to: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                              , n = arguments.length > 2 ? arguments[2] : void 0;
                            n ? Ls.a.top(this.el, e - t, {
                                duration: n
                            }) : this.el.scrollTop = e - t
                        },
                        toTop: function(e, t) {
                            this.to(0, e, t)
                        },
                        toBottom: function(e, t) {
                            var n = this.el.scrollHeight
                              , a = void 0 === n ? 0 : n;
                            this.to(a, e, t)
                        },
                        toTarget: function(e, t, n) {
                            var a = "string" === typeof e ? this.el.querySelector(e) : e;
                            if (a) {
                                var i = this.el.scrollTop
                                  , s = a.getBoundingClientRect().top;
                                this.to(i + s, t, n)
                            }
                        }
                    }
                }),
                e.prototype.$scroll = Ns
            }
        }
          , Rs = function(e) {
            e.mixin({
                methods: {
                    eventThumbFallback: function(e, t) {
                        if (t && "false" !== t)
                            return t;
                        var n = e.replace(/-(.)/g, (function(e, t) {
                            return t.toUpperCase()
                        }
                        ));
                        return "/images/events/".concat(n, "/event-thumbnail.png")
                    }
                }
            })
        }
          , Bs = function(e) {
            return Object.entries(a).forEach((function(t) {
                var n = Object(w["a"])(t, 2)
                  , a = n[0]
                  , i = n[1];
                return e.component(a, i)
            }
            ))
        }
          , Gs = (n("07ac"),
        n("3ca3"),
        n("1276"),
        n("ddb0"),
        n("a925"))
          , zs = n("a9df")
          , Hs = n.n(zs)
          , Vs = {
            meta: {
                titleTemplate: "%s | IEFA"
            },
            brand: "The International Economic Forum of the Americas",
            brandSmall: "IEFA",
            nextEvent: "Next event",
            banner: "Watch the Toronto Global Forum Live Now",
            navigation: {
                home: "Home",
                events: "Events",
                eventNext: "View next event",
                eventsNext: "Next events",
                allEvents: "All Events",
                eventsAnnual: "Conferences",
                about: "About",
                aboutUs: "About us",
                services: "Services",
                team: "Our team",
                teamShort: "Team",
                partner: "Partner",
                becomePartner: "Become a Partner",
                terms: "Terms of use",
                privacy: "Privacy policy",
                consulting: "IEFA Consulting",
                seeMore: "See more",
                gallery: "Photo gallery",
                galleryShort: "Gallery",
                close: "Close"
            },
            cta: {
                learnMore: "Learn more",
                contact: "Contact us",
                tickets: "Registration",
                registerNow: "Register now"
            },
            city: {
                montreal: "Montreal",
                toronto: "Toronto",
                paris: "Paris",
                miami: "Miami",
                buenosAires: "Buenos Aires",
                phoenix: "Phoenix"
            },
            form: {
                name: "Name",
                email: "Email",
                company: "Company",
                phone: "Phone number",
                subject: "Subject",
                getTouch: "Get in touch",
                partner: "Become a partner",
                message: "Message",
                button: "Submit",
                tollFree: "Toll free"
            },
            copyright: "The International Economic Forum of the Americas",
            cretedBy: "Website created by",
            languages: {
                title: "Languages",
                french: "French",
                english: "English",
                spanish: "Spanish"
            },
            logo: "/images/brand/logo-en-white.png",
            logoSmall: "/images/brand/logo-small-en-white.png",
            boardOfGovernors: "Board of Governors",
            advisoryBoard: "Advisory Board",
            archives: "Archives",
            ourPurpose: "Our Purpose",
            pastEvents: "Past Events"
        }
          , Ws = {
            meta: {
                title: "International Economic Forum of the Americas",
                description: "The International Economic Forum of the Americas (IEFA) encourages collaboration and innovation to address major global challenges."
            },
            header: {
                message: "Connecting global business leaders to address the world's",
                span: "major challenges"
            },
            graphic: "/images/brand/graphic-en.png",
            bullets: [{
                number: "23 200",
                label: "Participants"
            }, {
                number: "563",
                label: "Speakers"
            }, {
                number: "105",
                label: "Reprensented\ncountries"
            }, {
                number: "2 602",
                label: "Bilateral\nmeetings"
            }],
            testimonies: {
                title: "Moments from our conferences",
                slides: [{
                    content: "The war, which is absolutely dramatic, has really put at the forefront the notion of energy security.",
                    name: "Odile Renaud-Basso - President, European Bank for Reconstruction and Development (EBRD)",
                    image: "/images/testimonials/OdileRenaud-Basso.jpg"
                }, {
                    content: "I look at the next 10-20 years in Québec, I think that there are two catalysts for the creation of value and wealth in Québec: the first is innovation, and the second is how we use our renewable energy resources.",
                    name: "Pierre Fitzgibbon - Minister of Economy, Innovation and Energy, National Assembly of Québec",
                    image: "/images/testimonials/PierreFitzgibbon.jpg"
                }, {
                    content: "We are at the hinge moment of history in economics and geopolitical history.",
                    name: "Mark Carney - Vice Chair and Head of Transition Investing, Brookfield Asset Management; and United Nations Special Envoy for Climate Action and Finance",
                    image: "/images/testimonials/MarkCarney.jpg"
                }, {
                    content: "The crisis and the challenge of the energy transition are very clear: it will take government, industry, and consumers al working together to achieve this change, but we cannot wait on each other.",
                    name: "Ivan Vella - Chief Executive, Aluminium, Rio Tinto",
                    image: "/images/testimonials/IvanVella.jpg"
                }, {
                    content: "When we think about social engagement, when we think about social media, the ability to understand issues and to collectively organize around them, is accelerating.",
                    name: "Jean-Pierre Clamadieu - Chairman, ENGIE",
                    image: "/images/testimonials/Jean-PierreClamadieu.jpg"
                }]
            },
            about: {
                title: "Our mission",
                content: "The International Economic Forum of the Americas (IEFA) was created in 1994 to encourage connection, collaboration and innovation in order to address the world’s major challenges. The organization leverages its extensive network to convene a series of annual events across the globe where heads of state and government, members of the business community and civil society, trade union leaders and academics – all of them experts in their respective fields – can meet and discuss their common objectives and ways to achieve them."
            },
            boards: {
                upTitle: "Annual Events",
                title: "The boards",
                content: "Since its foundation in 1994, the IEFA has been surrounded by business leaders, international organizations, and other influential figures who continue to support its mission through various committees and councils. Please refer to the different committees to learn more about the individuals who support our mission."
            },
            partner: {
                title: "Become a",
                content: "The IEFA has spent the past three decades building a world-class, global network of thought leaders across government, business and academia. The organization’s unrivaled ability to foster connection and collaboration makes the IEFA a unique platform for its partners.",
                content2: "Partners and sponsors play a key role in the development and continued success of the IEFA. By becoming an official sponsor, partners are able to join a strategic network where decision makers can exchange and connect, enabling productive dialogues and long-term working relationships. The IEFA is committed to providing a rewarding and unparalleled experience for its stakeholders – an aim which has resulted in the return of multiple partners year on year."
            },
            services: {
                title: "IEFA Consulting",
                content: "In addition to its flagship conferences, the International Economic Forum of the Americas offers a variety of services for clients wishing to expand their strategic network or produce their own events.",
                entries: [{
                    title: "Event production",
                    content: "<p>The Forum has evolved and grown over the past three decades to bring together more than 23,000 participants and 560 speakers annually across five conferences: the Conference of Montreal, the Toronto Global Forum, the World Strategic Forum, the Conference of Paris and the IEFA LatAm Forum.</p><p>Leveraging this expertise and the organization’s extensive network, the IEFA regularly organizes and manages external conferences and events worldwide. The IEFA can cost-effectively manage, coordinate and deliver a world-class events package specifically tailored to the client’s needs. From the development of speakers and content through to conference design, production and strategy, the IEFA aims to deliver a seamless, market-leading service which creates a significant impact for its clients.</p>"
                }, {
                    title: "Roundtable Production",
                    content: "<p>The IEFA produces a program of private Business Roundtable Meetings, whether in-person, virtual or hybrid, which run year-round and are independent of the annual conferences.</p><p>These meetings usually consist of around 25 individuals, primarily C-suite executives or government leaders from around the world. The exact format of the roundtable, from location, production, content and attendees, is tailored to each.</p>"
                }, {
                    title: "Executive Networking Consulting",
                    content: "<p>The IEFA has spent the past three decades building an extensive network of thought leaders including world leaders, C-suite executives and academics across a wide array of fields. The organization is known for its ability to foster connections and collaboration in order to address the world’s most pressing challenges, specifically tailoring its audiences to achieve this goal. Depending on a client’s objectives, the IEFA can facilitate a series of private one-on-one meetings and introductions designed to create maximum impact.</p>"
                }]
            },
            contact: {
                title: "Contact us",
                content: "To contact the IEFA, please complete the form. Someone will get back to you as soon as possible.",
                content2: "For media enquiries, please contact Rebecca Durnin, Director of Communications & Marketing, on r.durnin@forum-americas.org."
            },
            newsletter: "Subscribe to our newsletter"
        }
          , Js = {
            header: "The Forum has evolved and grown over time to bring together more than 23,000 participants and 600 speakers across six annual conferences: the Conference of Montreal, the Toronto Global Forum, the World Strategic Forum, the Conference of Paris and the IEFA LatAm Forum, all hosted in association with Integra Capital, and the Phoenix Global Forum, which is hosted in association with Phoenix Sister Cities.",
            home: {
                toronto: {
                    title: "Fostering economic resilience",
                    date: "October 11 - 13 2023",
                    content: "<p>The Toronto Global Forum (TGF) is organized by the International Economic Forum of the Americas (IEFA). The conference welcomes over 170 speakers and several thousand attendees annually from all over the world.</p>\n        <p>Launched in 2006, the TGF brings together international thought leaders to foster dialogue and find solutions to national and global issues. In less than a decade, the Toronto Global Forum has emerged as one of North America’s key platforms for heads of state, central bank governors, ministers, entrepreneurs and global economic decision makers.</p>\n        <p>The 17th edition of the Toronto Global Forum will be held at the Fairmont Royal York Hotel on October 11 - 13, 2023.</p>",
                    links: {
                        learnMore: "page:toronto",
                        tickets: "https://www.torontoglobalforum.com/#/tickets?affl=MAINWEBSITETGF2023BUYTICKET"
                    }
                },
                miami: {
                    title: "Mastering the new economy",
                    date: "November 6 - 7 2023",
                    content: "<p>The World Strategic Forum (WSF) is a global conference held annually in Miami, which is organized by the International Economic Forum of the Americas (IEFA). Launched in 2011, the WSF welcomes over 100 speakers and more than 3,000 attendees annually from all over the world.</p>\n        <p>The central themes of the World Strategic Forum revolve around the Global Economy, Finance, Trade, Energy, and Infrastructure, with the central objective of addressing the opportunities and challenges at stake for the Americas in the global economic market.</p>\n        <p>The 12th edition of the World Strategic Forum will be held at the Miami Biltmore Hotel on November 6-7, 2023.</p>",
                    links: {
                        learnMore: "page:miami",
                        tickets: "https://www.worldstrategicforum.com/WORLDSTRATEGICFORUM2023-MIAMI-MASTERINGDISRUPTION#/tickets?lang=en"
                    }
                },
                paris: {
                    title: "Conference of Paris",
                    date: "November 28 - 29 2023",
                    content: "<p>The Conference of Paris (CDP) is a global conference organized by the International Economic Forum of the Americas (IEFA). The annual event acts as a platform to gather high level stakeholders in order to discuss Europe’s role in the global economy as we aim for a more inclusive, balanced and responsible society.</p>\n        <p>The 7th edition of the Conference of Paris will be held in Paris at the OECD on November 28 - 29, 2023.</p>",
                    links: {
                        learnMore: "page:paris"
                    }
                },
                buenosAires: {
                    title: "The IEFA LatAm Forum",
                    date: "March 26th - 27th 2024",
                    content: "<p>The IEFA LatAm Forum is an annual global conference organized by the International Economic Forum of the Americas (IEFA) in collaboration with Integra Capital.</p>\n        <p>The IEFA LatAm Forum was launched in 2022, with a special focus on the role that Latin America is increasingly playing in today’s global economy as the world seeks a more sustainable and resilient future.</p>\n        <p>This year’s forum will be held in Buenos Aires at the Four Seasons Hotel from March 26th-27th, 2024.</p>",
                    links: {
                        learnMore: "page:buenos-aires"
                    }
                },
                phoenix: {
                    title: "Forging the Future",
                    date: "May 2, 2024",
                    content: "<p>The Phoenix Global Forum is hosted by the IEFA and Phoenix Sister Cities, and will launch in Spring 2024. As the fastest growing city in the US for the past five years, the region is quickly emerging as a hub for organizations within the biosciences, technology, sustainability and defense sectors. As a result, the outside investment being directed to Phoenix is helping to create a burgeoning ecosystem of business leaders, entrepreneurs, investors and academics.</p>\n        <p>The Phoenix Global Forum will act as a platform where decision makers, thought leaders and experts in their respective fields convene to discuss society’s evolving needs amidst ongoing global challenges. The forum will examine solutions already in development, both in Phoenix and worldwide, while also fostering future innovation through connection and collaboration.</p>",
                    links: {
                        learnMore: "page:phoenix"
                    }
                },
                montreal: {
                    title: "Conference of Montreal",
                    date: "June 10 - 12 2024",
                    content: "<p>The Conference of Montreal (CDM) is an international conference organised by the International Economic Forum of the Americas (IEFA). It welcomes over 150 speakers and several thousand attendees from all over the world.</p>\n        <p>Launched in 1994, the CDM brings together decision makers from all spheres of society to address the most pressing issues of our time. Over time, the Conference of Montreal has evolved to become an internationally recognized multi-day event attended by world leaders and decision makers from the worlds of government, business and academia, who convene to discuss topics ranging from the economy and global leadership to sustainability, energy and innovation. The event’s geographic location in the heart of French Canada offers audiences a rare sociopolitical economic insight which spans both a North American and European perspective, while also examining best practice worldwide.</p>\n        <p>The 30th edition of the Conference of Montreal will be held in Montreal on June 10-12th 2024.</p>",
                    links: {
                        learnMore: "https://www.laconferencedemontreal.com/#/?affl=MAINWEBSITECDM2023&lang=en"
                    }
                }
            },
            nextEvents: {
                index: [{
                    title: "Fostering economic resilience",
                    conference: "Toronto Global Forum",
                    date: "October 11-13, 2023",
                    link: "https://events.forum-americas.org/TORONTOGLOBALFORUM2023-FOSTERINGECONOMICRESILIENCE",
                    image: "/images/events/toronto/toronto-17th-en.png"
                }, {
                    title: "Mastering the new economy",
                    conference: "World Strategic Forum | Miami",
                    date: "November 6-7, 2023",
                    link: "https://events.forum-americas.org/WORLDSTRATEGICFORUM2023-MIAMI-MASTERINGDISRUPTION",
                    image: "/images/events/miami/miami-12th-en.png"
                }, {
                    title: "Bridging the divide",
                    conference: "Conference of Paris",
                    date: "November 28-29, 2023",
                    link: "https://events.forum-americas.org/LACONFERENCEDEPARIS2023",
                    image: "/images/events/paris/paris-13th-en.png"
                }, {
                    title: "2th edition",
                    conference: "IEFA LatAm forum | Buenos Aires",
                    date: "March 2024",
                    link: "https://events.forum-americas.org/LATAMFORUM2023-BUENOSAIRES",
                    image: "/images/events/buenosAires/thumbnail-buenosaires.jpg"
                }, {
                    title: "1st edition",
                    conference: "Phoenix Global Forum",
                    date: "May 2, 2024",
                    link: "https://www.phoenixglobalforum.com/",
                    image: "/images/events/phoenix/thumbnail-phoenix.jpg"
                }, {
                    title: "30th edition",
                    conference: "Conference of Montreal",
                    date: "June 10-12, 2024",
                    image: "/images/events/montreal/thumbnail-montreal.jpg"
                }]
            },
            specialEvents: {
                title: "Special Events"
            },
            pastEvents: {
                title: "Past Events",
                index: [{
                    title: "Thriving in a world in transition",
                    conference: "The Conference of Montreal",
                    date: "June 12-14 2023",
                    link: "https://events.forum-americas.org/TheConferenceofMontreal2023-ThrivinginaWorldinTransition-Development",
                    image: "/images/events/montreal/montreal-29th-en.png"
                }, {
                    title: "Corporate citizenship for gender equality",
                    conference: "IEFA & The Canadian Women's Foundation",
                    image: "/images/events/Corporate citizenship for gender equality.png",
                    link: "https://events.forum-americas.org/CorporateCitizenshipforGenderEquality",
                    date: "March 08, 2023"
                }, {
                    title: "Tackling Growing Disruption",
                    conference: "Conference of Paris",
                    image: "/images/events/paris/Tackling Growing Disruption.png",
                    link: "https://events.forum-americas.org/TheConferenceofParis2022-MasteringanewworldRedefiningdialogue",
                    date: "December 15–16, 2022"
                }, {
                    title: "MasterClass ENGIE 2.0",
                    conference: "Conference of Paris",
                    image: "/images/events/paris/master-class=2022.png",
                    link: "https://events.forum-americas.org/LaConfrencedeParis2022-MasterClassENGIE-20",
                    date: "December 15–16, 2022"
                }, {
                    title: "Cooperation for a sustainable world",
                    conference: "IEFA LatAm Forum | Buenos Aires",
                    image: "/images/events/buenosAires/thumbnail-buenosaires.jpg",
                    link: "https://events.forum-americas.org/LATAMFORUMofBuenosAires2022",
                    date: "November 14–15, 2022"
                }, {
                    title: "Investing in trust",
                    conference: "World Strategic Forum | Miami",
                    image: "/images/events/miami/Investing in trust.png",
                    link: "https://events.forum-americas.org/WORLDSTRATEGICFORUM2022-MIAMI",
                    date: "October 31 – November 01, 2022"
                }, {
                    title: "Charting a new economy",
                    conference: "Toronto Global Forum",
                    image: "/images/events/toronto/Charting a new economy.png",
                    link: "https://events.forum-americas.org/TorontoGlobalForum2022",
                    date: "October 17–19, 2022"
                }]
            }
        }
          , Qs = {
            meta: {
                title: "Our team",
                description: "The IEFA has focused on building a global, experienced team from across the worlds of business, government and academia."
            },
            header: {
                title: "Our team",
                content: "The IEFA has focused on building a global, experienced team from across the worlds of business, government and academia."
            },
            cta: {
                title: "Be a part of the team",
                content: "The organization is growing at pace and welcomes interested applicants to share their resume.",
                button: "Send my Resume"
            },
            members: [{
                name: "Nicholas Rémillard",
                title: "Chief Executive Officer",
                info: "International Economic Forum of the Americas",
                image: "/images/team/Nicholas_Remillard-2636_HR.jpg"
            }, {
                name: "Gil Rémillard",
                title: "Founding Chairman",
                info: "International Economic Forum of the Americas",
                image: "/images/team/Gil_Remillard-2292_HR.jpg"
            }, {
                name: "Marie DuPont",
                title: "Senior Financial Advisor",
                info: "International Economic Forum of the Americas",
                image: "/images/person-thumbnail.png"
            }, {
                name: "Thaïs Pinto",
                title: "President and Chief Legal Officer",
                info: "International Economic Forum of the Americas",
                image: "/images/team/ThaisPinto.png"
            }, {
                name: "Mathieu Rondeau",
                title: "Chief Financial Officer",
                info: "International Economic Forum of the Americas",
                image: "/images/team/MathieuRondeau.png"
            }, {
                name: "Alain Dufour",
                title: "Vice President, Production and Experience",
                info: "International Economic Forum of the Americas",
                image: "/images/team/AlainDufour.jpg"
            }, {
                name: "Francisca Insulza",
                title: "Vice President, Partner Relations and Strategic Growth",
                info: "International Economic Forum of the Americas",
                image: "/images/team/FranciscaInsulza.jpg"
            }, {
                name: "Cédric Muller",
                title: "Vice President, Content and External Affairs",
                info: "International Economic Forum of the Americas",
                image: "/images/team/CedrickMuller.jpg"
            }, {
                name: "Francesco Biondi-Morra di Belforte",
                title: "Director, Program and Content",
                info: "International Economic Forum of the Americas",
                image: "/images/team/Francesco Biondi-Morra di Belforte.png"
            }, {
                name: "Éric Buchlin",
                title: "Director of Security and Protocol",
                info: "International Economic Forum of the Americas",
                image: "/images/team/ericBuchlin.jpg"
            }, {
                name: "Rebecca Durnin",
                title: "Director of Communications and Marketing",
                info: "International Economic Forum of the Americas",
                image: "/images/team/RebeccaDurnin.jpg"
            }, {
                name: "Rafael Moya Herrero",
                title: "Senior Advisor, Program and Content",
                info: "International Economic Forum of the Americas",
                image: "/images/team/rafael-moya-herrero.jpg"
            }, {
                name: "Benjamin Booth",
                title: "Executive Advisor",
                info: "International Economic Forum of the Americas",
                image: "/images/team/benjamin-booth.JPG"
            }, {
                name: "Laure Duque",
                title: "Project Manager, Participation and Community of Interest Development Projects",
                info: "International Economic Forum of the Americas",
                image: "/images/team/LaureDuque.jpg"
            }, {
                name: "Myriam Tannous",
                title: "Project Manager, Communications and Marketing",
                info: "International Economic Forum of the Americas",
                image: "/images/team/myriam-tannous.jpg"
            }, {
                name: "Noémie Baillarguet",
                title: "Advisor, Marketing and Communication",
                info: "International Economic Forum of the Americas",
                image: "/images/team/Noémie Baillarguet.jpg"
            }, {
                name: "Lyonel Millien",
                title: "Controller Assistant",
                info: "International Economic Forum of the Americas",
                image: "/images/team/lyonel-millien.jpg"
            }, {
                name: "Aurore Saccagi",
                title: "Advisor, Program and Content",
                info: "International Economic Forum of the Americas",
                image: "/images/team/aurore-saccagi.jpg"
            }, {
                name: "Virgile Sylvain",
                title: "Advisor, Partner Relations",
                info: "International Economic Forum of the Americas",
                image: "/images/team/Virgile Sylvain.png"
            }, {
                name: "Joseph Clark",
                title: "President",
                info: "Toronto Global Forum",
                image: "/images/team/JosephClark.jpg"
            }, {
                name: "Ali Ponte",
                title: "Executive Director",
                info: "Toronto Global Forum",
                image: "/images/team/AliPonte.jpg"
            }, {
                name: "Bill Johnson",
                title: "President",
                info: "World Strategic Forum",
                image: "/images/team/BillJohnson.png"
            }, {
                name: "Julia Bernstein",
                title: "Executive Director",
                info: "World Strategic Forum",
                image: "/images/team/julia-bernstein.jpeg"
            }, {
                name: "Céline Boyard",
                title: "Executive Director",
                info: "The Conference of Paris",
                image: "/images/team/CelineBoyard.png"
            }, {
                name: "Dorothée Pineau",
                title: "Corporate Advisor",
                info: "The Conference of Paris",
                image: "/images/team/DorothéePineau.jpg"
            }]
        }
          , Ys = {
            title: "Terms of use",
            update: "Last update on May 15, 2023.",
            meta: {
                title: "Terms of use"
            },
            wp: "false",
            content_static: ['Please read carefully the following terms of use carefully (hereinafter the “Terms of Use”) of International Economic Forum of the Americas Inc., a company having its head office at 620-606 Cathcart Street (H3B1K9), in the city of Montreal, province of Quebec, Canada (hereinafter "IEFA").', 'IEFA operates this website (hereinafter the “Platform”), and the social media pages, account, website, network or any application contained therein designed and maintained by IEFA (hereinafter the "Social Media").', "By choosing to use the Platform and the IEFA services, the user, understood as the end user or the organization you represent or you work for (hereinafter the “User” or “Users”) agrees to all the Terms of set forth below that govern the content and use of the Platform, as well as the privacy policy set forth following the IEFA Terms of Use.", 'These Terms of Use are legally binding on the User and IEFA (hereinafter the "Parties"). The Parties shall be entitled to invoke these Terms of Use and to take all useful and necessary measures to enforce them.', "If the User does not agree to these Terms of Use or, as the case may be, the Terms of Use as amended from time to time, the User shall not, or shall no longer, use the Platform.", 'Terms defined in these Terms of Use are used in IEFA\'s privacy policy and general terms of sale. We recommend that you read all of IEFA policies (the Terms of Use, Privacy Policy, and General Terms of Sale are hereinafter referred to jointly as "<strong>Legal Notice</strong>").', {
                type: "title",
                text: "ACCESS AND USE OF THE PLATFORM"
            }, "Browsing the Platform means that you have read, understood and accepted the Terms of Use. ", "The Platform is accessible from any computer (computer, smart phone, tablet, etc.) and on any browser.", "For optimal use, we recommend the use of the following browsers: Google Chrome, Firefox, Safari, Microsoft Edge.", "The Platform is intended for a professional audience. The Platform is not intended for a consumer audience. By accepting the Terms of Use, you represent and warrant that you are doing so in a professional or business capacity. By using the Platform, you warrant that you are doing so in a professional or commercial capacity rather than as a consumer or for personal use.", {
                type: "title",
                text: "THE SERVICE"
            }, "The Platform is always accessible. However, the Platform may be temporarily unavailable due to updates or technical problems. IEFA is not responsible for any interruption in service or updates. IEFA attempts to make updates when traffic on the Platform is at its lowest.", "IEFA does not warrant that the Platform, or any portion thereof, will operate on any particular computer hardware or device. Furthermore, the Platform may be subject to malfunctions and delays inherent in the use of the Internet and electronic communications.", "IEFA reserves the right to add, remove and edit all or part of the content on the Platform, except for User-specific content. IEFA cannot be held responsible for any mistakes, typographical errors or bugs. Each User created in the system is the owner of the content of his account. IEFA does not delete anything unless a User requests it.", "The User agrees, non-restrictively, to not: ", {
                type: "list",
                items: ["Use the Platform in any manner that could damage, disable, overburden or impair the Platform;", "Disrupt the security of, or otherwise abuse, the Platform or any services, resources, systems, servers or networks connected to the Platform or affiliated sites or connected to or accessible through them;", "Disrupt or interfere with the use or enjoyment of the Platform by other services or affiliated or linked sites;", "Upload, post or otherwise transmit on the Platform a virus or other harmful, disruptive or destructive computer file or program; ", "Use any robot, spider or other automatic device or manual process to monitor or copy the Platform pages or content; ", "Transmit through the Platform unsolicited bulk e-mail, chain letters, junk mail or other types of e-mail; ", "Attempt to gain unauthorized access to the Platform or portions thereof to which access is restricted. In addition, User agrees that it is solely responsible for all actions and communications undertaken or transmitted to or on behalf of User and agrees to comply with all applicable laws with respect to its use or activities on the Platform."]
            }, {
                type: "title",
                text: "INTELLECTUAL PROPERTY"
            }, 'Unless otherwise noted, all intellectual property rights (trademark, copyright, etc.) (hereinafter the "Intellectual Property") related to the Platform are the exclusive property of IEFA. You may not copy or use any of the materials, structure, menu, appearance or characters that appear on the Platform without the express consent of IEFA.', 'Certain names, words, titles, phrases, logos, icons, graphics, designs, domain names and the like contained on the Platform or Social Media may be, among other things, registered or unregistered trademarks or trade names (all of which are referred to in these Terms of Use as "Trademarks"). These Trademarks are protected by Canadian and foreign trademark laws and are the exclusive property of IEFA.', "Without limiting the scope thereof, the Intellectual Property owned by IEFA includes, but is not limited to, the following:", {
                type: "list",
                items: ["All logos, designs, graphics, photos, videos, trademarks (whether registered or not), symbols, text, phrases, words and all general content on the Platform or Social Media not already subject to intellectual property rights ;", "All content offered by the Platform or Social Media for free download."]
            }, "Unless otherwise noted, all information provided on the Platform or Social Media is the property of IEFA, and is protected by applicable laws. In addition, the information may not otherwise be copied, displayed, distributed, downloaded, unlicensed, modified, published, reproduced, reused, sold, transmitted or used for derivative works, public or commercial purposes without the express written permission of IEFA. The information is protected under the copyright and trademark laws of Canada and the countries that host the Platform or Social Media.", "You may use the information solely for your own personal use without modification, subject to your referencing on any copies the respective copyright notices and trademark attributions. These Terms of Use grant you permission to view and display the information on your computer solely for non-commercial, personal and educational purposes. This authorization is yours alone and may not be assigned, sublicensed or transferred to any other person.", "You are not authorized to download, copy, record or print the content of the Platform or Social Media. For further information regarding permission to use, reproduce or republish any information presented on the Platform or Social Media, please contact us at admin@forum-americas.org. Images or text contained in the Platform or Social Media which are downloaded, copied, recorded or printed remain subject to the Terms of Use. User must ensure that all trademark or copyright notices continue to appear in any content contained in the Platform or Social Media.", "Any unauthorized downloading, retransmission, copying or modification of the Intellectual Property or data contained on the Platform or Social Media may violate laws including trademark or copyright laws and could subject User to legal action.", "The content of the Platform or Social Media may be changed at any time without notice. For further information regarding permission to use, reproduce or republish any information presented on the Platform or Social Media, please contact us at admin@forum-americas.org", "Nothing contained herein shall be construed as conferring any license or right upon User under copyright or trademark laws.", "Subject to applicable laws, the importation, creation, submission or storage of content by the User grants IEFA a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license. This license permits IEFA to host, use, modify, reproduce, publish, publicly perform, create derivative works from, or distribute your content. Under this license, IEFA may use your content only in connection with the operation, promotion or improvement of its services. If you wish to terminate this license, simply delete your account. The content you have shared will still be visible to other Users: you can request its deletion, under certain conditions, from the contact person, whom you can contact at admin@forum-americas.org.", {
                type: "title",
                text: "EXTERNAL LINKS "
            }, 'It is possible that by using a hyperlink, the User leaves the Platform or Social Media to access external content (hereinafter "External Websites"). IEFA makes available to Users, in addition to its own content, links to External Websites solely for the User\'s convenience and information. IEFA has no control over the content of these External Websites and assumes no responsibility for their accuracy, precision, completeness, authenticity, timeliness or suitability. Any liability of IEFA is excluded, in particular for direct or indirect damages or consequences related to the use of the contents of these External Websites. IEFA has no influence on the contents of the linked external websites and is not responsible for their careful selection, the contents of the external links, in particular those which have been changed after the link was set. IEFA does not require the transmission of information, does not select the recipients of the transmitted information nor the information itself, and does not modify it. Furthermore, no automatic short-term intermediate storage of these external links is performed by IEFA under the current link creation and viewing method. Therefore, the responsibility for the content of External Websites accessible via external links lies solely with their operators.', "In addition, IEFA does not warrant that such External Web Sites or their contents do not violate any laws, including copyright, trademark or other third-party rights, or are free of viruses or other harmful components.", "No warranty is given as to the authenticity of the materials available on the Internet.", {
                type: "title",
                text: "SOCIAL MEDIA"
            }, "The following terms apply when you access a Social Media page.", {
                type: "subtitle",
                text: "Déclaration générale"
            }, "By using the Social Media pages and submitting a comment, photo, video or other material, you (and your parent/legal guardian if you are under the age of majority in the province or territory in which you reside) agree to be bound by and comply with the IEFA Legal Notice and the Terms of Use of third-party Social Media providers. You also consent to IEFA copying, editing, publishing, translating and distributing your comment, photo, video or other material posted on a Social Media without compensation.", {
                type: "subtitle",
                text: "Social Media Terms of Use"
            }, "Some of the comments and other materials posted on the Social Media pages may not represent the views of IEFA. Therefore, you agree not to post or submit any information, posts, links or other materials of any kind to the Social Media pages that fall into any of the categories described below with respect to IEFA:", {
                type: "list",
                items: ["Tout contenu diffamatoire, injurieux, contrefait, obscène, trompeur, illégal ;", "Tout contenu qui viole de toute autre façon les droits (y compris ceux liés à la protection des renseignements personnels) d’autrui ;", "Tout contenu comportant de la publicité ;", "Des documents promotionnels ou toute forme de sollicitations indésirables ;", "Tout contenu dont l’origine ou la source est falsifiée ;", "Tout renseignement financier ou personnel, à propos de vous ou d’une autre personne ; et", "Toute information que FEIA jugerait en contravention avec les Mentions légales."]
            }, "Any information, postings, links or materials that IEFA deems to fall into any of the above categories will be removed immediately without liability to IEFA.", "Furthermore, IEFA does not assume responsibility for screening messages posted on Social Media.", "IEFA disclaims all liability to entities that own or operate Social Media, including for any direct or indirect loss or damage resulting from any action or decision made by you or any other person in connection with the use of Social Media websites.", {
                type: "title",
                text: "DISCLAIMER, WARRANTY EXCLUSION AND INDEMNIFICATION"
            }, 'IEFA does not warrant the accuracy, completeness, quality, adequacy or content of the information on its Platform. This information is provided "as is" without warranty or condition of any kind, either express or implied, including, but not limited to, the implied conditions and warranties of merchantability and fitness for a particular purpose, except in jurisdictions that do not allow the exclusion of warranties.', "IEFA is not responsible for the content posted on the Platform by Users and for any damages that may result. Each User is responsible for the content he exchanges on the Platform and may not use the Platform for purposes contrary to the laws applicable in Quebec and Canada.", "Subject to applicable laws, IEFA shall not be liable for any direct, indirect, special, incidental or consequential damages, or any other damages whatsoever, including but not limited to loss of revenue, profit or anticipated economic benefits arising out of the use of or inability to use the Platform, the information, materials and software contained therein, even if IEFA has been advised of the possibility of such damages or even if such damages can be reasonably foreseen.", "You, as a User, will indemnify IEFA, and where applicable, its directors, officers, shareholders, partners, employees, agents, consultants and others involved with IEFA, and hold them harmless from and against any and all claims, liabilities, losses and expenses (including legal fees) arising out of your use of the Platform and/or your breach of these Terms of Use, whether such breach is by you or by any third party user of your account.", "You may not use or export the Information or any copy or adaptation of the Information in violation of any applicable laws or regulations.", {
                type: "title",
                text: "CHANGES TO THESE TERMS"
            }, "We will occasionally update these Terms of Use. Continued use of the Platform constitutes the User's agreement to these Terms of Use and any updates.", {
                type: "title",
                text: "INTERPRETATION"
            }, "The headings of the foregoing sections are inserted for convenience of reference only and shall not affect the construction or interpretation of the provisions of these Terms of Use.", "Wherever the context requires, words importing the singular number shall include the plural and vice versa; words importing the masculine gender shall include the feminine gender and vice versa.", {
                type: "title",
                text: "CONTACT PERSON"
            }, "If you have any questions or comments regarding any content on the Platform or Social Media, please contact us at admin@forum-americas.org."]
        }
          , Ks = {
            title: "PRIVACY POLICY",
            update: "Last update on May 15, 2023.",
            meta: {
                title: "Privacy policy"
            },
            wp: "false",
            content_static: [{
                type: "title",
                text: "INTRODUCTION "
            }, 'In the face of new challenges and dangers in maintaining the security of personal information arising from online business, it is necessary to pay particular attention to privacy. That is why we the International Economic Forum of the Americas Inc. (hereinafter the "<strong>IEFA</strong>") is seriously concerned about the privacy of your personal information and is committed to respecting the confidentiality of the information we collect.', 'IEFA is committed to respecting, in accordance with this Policy (hereinafter the "Policy") and applicable laws in Canada and Quebec, the obligations regarding the collection and processing of your personal and confidential information, obtained in the course of operating its business, so that everyone can benefit from the respect of their privacy.', "In this context, IEFA wishes to ensure the accuracy, security and confidentiality of your personal information, and not to collect, use or disclose your personal information other than in accordance with this Policy and such applicable laws.", "The Policy describes the information IEFA may collect in the course of its business from its Users.", "The Policy also describes, among other things, how IEFA collects, processes, maintains and uses your information and the circumstances under which it may be transferred to third parties. The Policy explains your rights regarding the collection, use and disclosure of your personal information.", {
                type: "title",
                text: "SCOPE OF THE POLICY "
            }, "We collect your personal information as part of our mission to organize events during which heads of state and government, members of the private sector and civil society, trade union and academic leaders discuss major international economic issues. Information and content relating to these events is available on our Platform.", "By browsing the Platform or subscribing to our publications by email, the User agrees to the terms and conditions of this Policy. ", 'You agree that your personal information collected when filling out any online form for the purpose of, among other things, making contact, uploading content to the Platform, or rendering other product-related services, will be transmitted to appropriate and authorized IEFA personnel. IEFA will only disclose to third parties whose involvement is strictly necessary to deliver the Tickets, Events and/or to maintain our business relationship with you, if any, the information necessary for these purposes (the aforementioned third parties may hereinafter be collectively referred to as "Third-Party Providers").', "By providing IEFA with your personal information, you authorize IEFA to use and disclose such information to Third Party Providers, if any, in connection with the delivery of products, the administration of our contractual relationship, our business relationship with you, and in accordance with this Policy and as permitted or required by law, as well as implicitly, if the circumstances so indicate.", "In addition, IEFA will seek your permission before using your personal information for purposes other than those for which you originally consented under the Policy.", "Finally, you may withdraw your consent at any time, subject to legal and contractual restrictions and reasonable notice. Please be aware, however, that without your consent, IEFA may not be able to provide or continue to provide you with some of the services or information that may be useful to you.", "If you provide IEFA or its Third-Party Providers with personal information about another individual or entity, you agree that you have the necessary authorization to do so and/or that you have obtained all necessary consents from that third party to allow us to collect, use and disclose their personal information for the purposes set out in this Policy.", "To withdraw your consent or to stop receiving electronic communications from us, please write to the following email address: admin@forum-americas.org.", {
                type: "title",
                text: "COLLECTION OF PERSONAL INFORMATION"
            }, "Personal information is information that is specifically associated with an individual and can be used to identify that individual, either on its own or in combination with other information that IEFA may have access to. Information that has been anonymized or that has been arranged so that it can no longer be used to identify a specific individual is not personal information. For example, an individual's office mailing address is not personal information, except when it is listed with other information about the individual, or when its mere listing would reveal personal information about the individual.", "IEFA may obtain personal information from the User when the User saves personal information on the Platform or, where applicable, by otherwise providing personal information, including by creating a User account and choosing a password, by logging in as a registered User to the Platform, conducting a product search, requesting a service, providing account information, contacting us by phone, email or otherwise, or filling out a form to participate in an event, contest, inventory request, promotion or survey. By filling out such a form, you are giving us permission to collect your personal information.", "We collect the following information from the User upon registration: ", {
                type: "list",
                items: ["Full name;", "Telephone number;", "Personal address;", "Email address;", "Company name; and", "Title within the company."]
            }, "In general, we may also collect your location, IP address and data about your use of the Platform and any other information that will enable us to provide you with our products in the most appropriate way.", "User information is also collected through the interaction that may take place between the User and the Platform and may be used for the following purposes:", {
                type: "list",
                items: ["To understand how the Platform is used by the User;", "To improve the Platform;", "To provide services to the User;", "To manage customer accounts;", "To manage customer and business relationships; and", "To provide personal information to business partners;", "To comply with compliance laws and regulations;", "To send newsletters and;", "To send promotions tailored to User's needs."]
            }, "The User's personal information will not be retained beyond the purposes for which it was collected. IEFA respects the retention period established by this Policy, which is in compliance with the Privacy Act. Data deletion occurs when the User deletes his/her account. The User will then have thirty (30) days to retrieve his/her data, failing which IEFA will permanently delete it.", "IEFA may also compile lists of your names and mailing addresses for philanthropic, anonymized statistical or market research purposes. If you do not wish to have your names and mailing addresses compiled for these purposes, please contact us at admin@forum-americas.org.", "The deletion of personal information occurs upon written request by the User to the above address. IEFA reserves the right to refuse a User's request where the User's continued use of IEFA services in any way complies with the retention period established by this Policy, which is consistent with the Private Sector Privacy Act. Accordingly, and except as otherwise provided by the regulatory framework, deletion of data will be effective thirty (30) days after the Privacy Officer has processed the request for deletion of personal information.", "The Platform is designed for use by adults only as understood in the province of Quebec. IEFA does not knowingly collect personal information from persons under the age of eighteen (18). The Platform is not designed for persons under the age of eighteen (18).", "For more information on the protection of your personal information and your rights, you may contact the Office of the Privacy Commissioner of Canada or the Commission d'accès à l'information du Québec.", {
                type: "list",
                items: ["Office of the Privacy Commissioner of Canada www.privcom.gc.ca", "Commission d'accès à l'information du Québec www.cai.gouv.qc.ca"]
            }, {
                type: "title",
                text: "FORMS AND INTERACTIONS"
            }, "IEFA collects your personal information in accordance with legal requirements. Wherever possible and appropriate, we collect your personal information directly from you or from the individuals you have chosen to provide your personal information to us.", "User’s personal information may be collected through forms, namely:", {
                type: "list",
                items: ["Platform registration form ;", "Order form ;", "User profile update form ;", "User access authorization to their information ;", "Contact form ;", "Support form ;"]
            }, "Your basic personal information, such as your email, last name, first name, and phone number, may also be collected on our Platform, including via email.", {
                type: "title",
                text: "ADVERTISING INFORMATION"
            }, "IEFA will only contact you if you choose to be contacted.", "If the User does not subscribe to our newsletter, does not have a business relationship with IEFA or has never attended one of our events, he will not receive any emails from IEFA without prior consent.", 'If you prefer not to receive marketing information from us or if you do not want us to use your personal information to enhance your User experience, please let us know by contacting us at the contact information listed in the "Right of objection and withdrawal" section below.', "Please remember to include your full name and email address that you used when you registered or made a purchase from us. There may be a delay in processing an email or postal mail request and you may continue to receive communications from IEFA in the interim.", {
                type: "title",
                text: "ADVERTISING INFORMATION"
            }, "ANTI-SPAM LAWS", "IEFA complies with the requirements of the Canadian Anti-Spam Act (CASL).", "The User understands that he may expressly or impliedly consent to receive messages from IEFA.", "Express consent is consent sought from the User, which consent shall be stated in plain language, and shall include the purpose for which consent is sought, prescribed information identifying the person seeking consent and, if sought on behalf of another person, prescribed information identifying that person; and any other information specified by regulations made under this Act.", "The User understands that he or she is giving implied consent in the case of ongoing business or private relationships; when the User publishes his or her e-mail address without indicating that he or she does not wish to receive unsolicited commercial e-mail messages; or when the message is sent in other circumstances specified by regulations made under this Act.", {
                type: "list",
                items: ["For the purposes of this Policy, a current business relationship refers to a business relationship between two persons such as a purchase or a participation in one of the events organized by IEFA within two years prior to the date the message is sent; an investment or service; the bartering of a thing; any contract in effect or expired during that period; or an application within the six months prior to the date the message is sent.", "For the purposes of this Policy, a current private relationship means a relationship between two persons other than a business relationship, such as a gift or donation, volunteer work; and a membership, as defined in the bylaws; all within the two months preceding the date the message is sent."]
            }, "To unsubscribe from our electronic communications mailing list, simply contact us at admin@forum-americas.org.", {
                type: "title",
                text: "PROTECTION AGAINST FRAUD AND THEFT OF YOUR PERSONAL INFORMATION"
            }, "IEFA is committed at all times to complying with the laws and regulations applicable to its business and to taking all useful and necessary measures to detect and prevent negligence, fraud and theft of your personal information. However, while IEFA takes precautions, IEFA cannot guarantee that no instances of fraud or theft of your personal information will occur.", "IEFA maintains an up-to-date privacy incident log and will contact any User whose personal information is the subject of such an incident and presents a risk of serious harm.", {
                type: "title",
                text: "THIRD PARTY ADVERTISING DISPLAYED ON OUR PLATFORM"
            }, "You may find third-party advertising displayed on our Platform. We do not allow third parties to collect your personal information on our Platform without your consent.", "IEFA prohibits and is not responsible for the resale or use by third parties of opt-ins obtained through the Platform by such third parties. If you have agreed to share your contact information with partner organizations, then we will share it with them.", "We do not sell or rent your personal information without your consent.", {
                type: "title",
                text: "THIRD-PARTY SERVICES"
            }, "IEFA may use, as part of its service delivery and/or management of its business and Platform, third party services. In no event shall IEFA be liable for any damages arising from such third-party services.", "To know the conditions of use of these services, we invite the User to consult their respective websites.", {
                type: "title",
                text: "DATA EXCHANGED AUTOMATICALLY"
            }, "Through the use of cookies, we collect certain information during exchanges between your computer and our server. Cookies are files created by a website that record information about your computer's navigation of the site. They are stored automatically on your electronic devices, allow you to log in to the Platform at a later time and allow IEFA to personalize the Platform.", "This information includes, but is not limited to, the following:", {
                type: "list",
                items: ["Domain name ;", "IP address ;", "Browsing history ;", "User’s location ; and", "User's language."]
            }, "Most of the information automatically transmitted does not identify the User. It is collected only as a result of technological requirements inherent in Internet browsing. Most browsers automatically accept cookies, but it is usually possible to change this behavior. However, if the User chooses to decline cookies, he or she may not be able to log in or use certain features of the Platform.", "The use of such information allows us to improve the service, personalize the User experience, and better track your past usage.", "In addition to the methods described above, we may also collect information through the use of Cookies or similar technologies, particularly during your visits to our Platform. These methods allow us to collect various types of information, including the pages you visit, the emails you read, and other information.", "This information is also used to:", {
                type: "list",
                items: ["To identify the User;", "To register the User, in particular for an event;", "To process the User's requests and orders and answer their questions;", "To keep in touch with the User and provide them with a personalized service at all times;", "To communicate with the User (by email, mail or otherwise) and send advertising materials or additional information about products, services, surveys, contests, promotions and special offers ;", "For analytical and statistical purposes;", "To learn more about the User's purchasing preferences;", "To develop new products and services; and", "To conduct market research and performance research to evaluate customer service, measure performance, enhance the User experience and improve products."]
            }, "These Cookies are multiple, some of them expire when the User closes his browser and have no more effect while others can be kept. At any time, the User may deactivate the Cookies. In this case, IEFA does not guarantee an optimal functioning of the Platform.", "It is also possible to prevent the storage of Cookies by configuring your Internet browser. However, if you choose the latter option, you may not be able to take advantage of the entire Platform.", {
                type: "title",
                text: "INTERNATIONAL COMMUNICATIONS"
            }, "In some situations, User data may be transmitted to servers outside of Canada. IEFA may also share your personal information with third parties outside of Quebec, notably in the European Union, and held by companies located in the above-mentioned territories and subject to their legislation.", "The User acknowledges and releases IEFA from any liability for the consequences of such a transfer.", "IEFA will not share your personal information with third parties located in jurisdictions that do not provide a similar level of privacy protection as Quebec.", {
                type: "title",
                text: "SHARING OF PERSONAL INFORMATION"
            }, "IEFA may share personal information collected from the User in certain circumstances. The situations in which personal information may be shared are: sharing with company partners, sharing with sponsors and/or advertisers and the application of the law or legal requests.", "The User understands that IEFA may at any time share personal information in the event of a partial or total transfer of the business to a third party. In such a case, the information transferred as an asset of IEFA will be subject to the same safeguards as this Policy.", "IEFA may also publicly re-post or re-share personally identifiable information when you post content related to IEFA on Social Media. In addition, by clicking on an external link located on the Platform, you may be accessing external websites that have their own privacy policies. You are advised to consult them, as you will be subject to them.", 'If the User does not wish to have his/her personal information shared with third parties or partners, he can object at any time, as mentioned in the following "Right to object and withdraw" section.', "IEFA may, on an exceptional basis, disclose the User's personal information without the User's consent in the following circumstances:", {
                type: "list",
                items: ["When legally required to do so, such as when a court order requires IEFA to disclose the User's personal information.", "When consent cannot be obtained and privacy laws permit IEFA to disclose the User's personal information. This is particularly the case when the protection of the public interest so requires."]
            }, {
                type: "title",
                text: "RIGHT OF OBJECTION AND WITHDRAWAL"
            }, "We are committed to providing the User with the right to object to and withdraw their personal information.", "The right to object is understood to be the possibility offered to Internet users to refuse that their personal information be used for certain purposes mentioned at the time of collection.", "The right to opt-out is defined as the possibility for Internet users to request that their personal information no longer appears, for example, on a mailing list.", 'In accordance with the following section, the User also has the right to request access to and correction of the personal information we have collected about him or her, and to exercise his or her right to object or opt-out, by contacting the Privacy Officer, whose contact information can be found in the "Contact Us" section below.', {
                type: "title",
                text: "ACCESS TO YOUR PERSONAL INFORMATION"
            }, "Other than as set forth in this Policy, your personal information collected by IEFA hereunder will be accessible only by authorized and appropriate employees of IEFA.", "IEFA, subject to certain exceptions, may inform you of your personal information, how it is used and whether it has been shared with third party service providers. You will also be able to access this information for any amendment or deletion.", 'Your request for access must be made in writing and sent in accordance with the procedures set forth in this section and in the "Contact Us" section below.', "IEFA will acknowledge your request in writing and may ask you to confirm your identity before providing you with this information. Access to this information will normally be provided free of charge, but if you request a copy or transmission of your information, we may charge a reasonable fee. IEFA will inform you of the amount in advance and give you the opportunity to withdraw your request. IEFA will provide you with access to your information within thirty (30) days of receiving your request or will provide you with written notice that additional time is required to fulfill your request.", "In some cases, we may be unable to provide you with access to all or part of your information. If we are unable to do so, or if the law does not permit us to do so, we will provide you with an explanation and indicate what other steps are available to you.", {
                type: "title",
                text: "SECURITY "
            }, "The personal information IEFA collects is kept in a secure environment. IEFA has adopted appropriate measures to maintain the confidentiality of personal information and to protect it from loss or theft, as well as from unauthorized access, disclosure, copying, use or modification, taking into account, among other things, the sensitivity of the information and the purposes for which it is used. In addition, IEFA requires that each employee, agent or representative of IEFA comply with this Policy.", "To ensure the security of the User's personal information, IEFA uses, among others, the following measures:", {
                type: "list",
                items: ["Secure Sockets Layers (SSL);", "Secure access to premises;", "Secure access to servers and computers;", "Firewalls;", "Use of password protected data networks;", "Confidentiality agreements with employees;", "Internal privacy policies;", "Privacy procedures;", "Routine updating of security measures; and", "Encrypted and secure electronic communications."]
            }, "IEFA is committed to maintaining a high level of security by incorporating the latest technological innovations to ensure the confidentiality of the User's transactions in order to ensure that their personal data is protected from unauthorized access, use or disclosure. IEFA is committed to keeping a record of privacy incidents.", "However, since no mechanism offers maximum security, there is always some degree of risk involved in using the Internet to transmit personal information. If a password is used to protect the User's account and personal information, it is the User's responsibility to ensure that it is kept confidential.", "In the event of a privacy incident involving a User's personal information held by IEFA, IEFA will notify the affected User and the Commission d'accès à l'information du Québec of any privacy incident that presents a risk of serious harm.", {
                type: "title",
                text: "FRENCH AND ENGLISH LANGUAGE "
            }, "If a problem of definition or interpretation arises between the English and French versions of this Policy, the French version shall prevail.", {
                type: "title",
                text: "APPLICABLE LAW AND JURISDICTION"
            }, "The Platform and its content are operated by IEFA from its offices located in the province of Quebec, Canada. The Platform, the Social Media and its content, this Legal Notice and the User's use of it are all governed by the laws of Quebec and Canada which are applicable, without giving effect to any principles of conflicts of law.", "You agree that all questions and disputes regarding the Platform and Social Media and the use thereof shall be first mediated and, in the absence of compromise, decided by the courts of Montreal.", {
                type: "title",
                text: "CONTACT"
            }, "If you have any questions about the processing or updating of your personal information or if you have any concerns in this regard, please contact Nicholas Rémillard, the Privacy Officer, at the following e-mail address: admin@forum-americas.org. The Privacy Officer will contact you within thirty (30) days of receiving your email.", {
                type: "title",
                text: "INTERPRETATION"
            }, "This Policy is governed by the applicable laws of Quebec and Canada, including the Private Sector Privacy Act of Quebec. These laws apply without giving effect to any principles of conflict of laws.", "Wherever the context requires, words importing the singular number shall include the plural and vice versa; words importing the masculine gender shall include the feminine gender and vice versa.", {
                type: "title",
                text: "DIVISIBILITY"
            }, "Each provision of this Policy forms a separate and distinct whole so that any determination by a court that any provision of this Policy is void or unenforceable shall not affect the validity or enforceability of any other provision of this Policy.", {
                type: "title",
                text: "CHANGES TO THIS POLICY "
            }, "We will occasionally update this Policy. Continued use of the Platform constitutes User's agreement to this Policy and any updates.", "Wherever possible, we will attempt to inform Users of any changes to the Policy. However, it is the User's responsibility to review the Policy regularly to be aware of any changes."]
        }
          , Xs = {
            name: "Toronto Global Forum",
            shortName: "Toronto",
            description: "The Toronto Global Forum was launched in 2006 and gathers international thought leaders across business, government and civil society to discuss the major challenges, and subsequent opportunities, the world economy is facing today.",
            thumbnail: "/images/events/toronto/thumbnail-toronto.jpg",
            link: "https://www.torontoglobalforum.com/",
            header: {
                content: "The Toronto Global Forum was launched in 2006 and gathers international thought leaders across business, government and civil society to discuss the major challenges, and subsequent opportunities, the world economy is facing today."
            },
            bullets: {
                bullet1: {
                    number: "17th",
                    label: "Edition"
                },
                bullet2: {
                    number: "2 500+",
                    label: "In-Person Participants"
                },
                bullet3: {
                    number: "140+",
                    label: "Speakers"
                },
                bullet4: {
                    number: "65+",
                    label: "Represented Countries"
                }
            },
            about: {
                title: "Our Purpose",
                content: "The Toronto Global Forum acts as a platform where organisations and institutions can connect with a focus on potential partnerships, investment opportunities and future collaboration. As countries and industries seek ways to enhance environmental and economic resilience and foster societal development, the conference aims to explore these topics through an international lens."
            },
            next: {
                title: "Fostering Economic Resilience",
                content: "At a time of great uncertainty worldwide, the conference will examine how we can adapt in order to encourage innovation and resilience in light of world events and the current economic climate. Join world leaders and decision makers at the Fairmont Royal York Hotel on October 11-13th 2023 for three days of dynamic discussion and debate surrounding the key topics of our time, while enjoying a variety of networking opportunities including luncheons and cocktail receptions."
            },
            gallery: {
                title: "Photo gallery",
                index: [{
                    title: "16th edition — Charting a new economy",
                    images: ["/images/events/toronto/gallery/16th-toronto-001.jpg", "/images/events/toronto/gallery/16th-toronto-002.jpg", "/images/events/toronto/gallery/16th-toronto-003.jpg", "/images/events/toronto/gallery/16th-toronto-004.jpg", "/images/events/toronto/gallery/16th-toronto-005.jpg", "/images/events/toronto/gallery/16th-toronto-006.jpg", "/images/events/toronto/gallery/16th-toronto-007.jpg", "/images/events/toronto/gallery/16th-toronto-008.jpg", "/images/events/toronto/gallery/16th-toronto-009.jpg"]
                }]
            },
            board: {
                uptitle: "About",
                title: "Advisory Board",
                content: "The Toronto Global Forum leadership team works closely with a select group of individuals who form our Advisory Board. All members of the Toronto Global Forum Advisory Board have been carefully selected for their in-depth knowledge and experience within their respective fields. "
            },
            boardIndex: {
                chairmens: {
                    title: "Chairman",
                    index: [{
                        name: "John M. Beck",
                        title: "",
                        info: "Founder and Chairman at Aecon & and Chairman of the Advisory Board at the Toronto Global Forum",
                        image: "/images/boards/toronto/John-M-Beck.png"
                    }]
                },
                members: {
                    title: "Members",
                    index: [{
                        name: "Bertrand Badré",
                        info: "Chief Executive Officer and Founder, Blue Orange Capital",
                        image: "/images/boards/toronto/Bertrand-Badre.jpg"
                    }, {
                        name: "Dan Barclay",
                        info: "Chief Executive Officer & Group Head, BMO Capital Markets",
                        image: "/images/boards/toronto/Barclay-Dan.png"
                    }, {
                        name: "Christiane Bergevin",
                        info: "President, Bergevin Capital and Past Chair of the Board, Canadian Chamber of Commerce",
                        image: "/images/boards/toronto/Christiane-Bergevin.png"
                    }, {
                        name: "Stefanie Crosby",
                        info: "President and Chief Visionary Officer, Triumspear International",
                        image: "/images/boards/toronto/Crosby-Stefanie.png"
                    }, {
                        name: "Janet De Silva",
                        info: "President and Chief Executive Officer, Toronto Region Board of Trade",
                        image: "/images/boards/toronto/Janet-De-Silva.jpg"
                    }, {
                        name: "Craig D'Souza",
                        info: "Vice President of Global Security, Intelligence, Protective Intelligence, Investigations & Protective Services, Facebook",
                        image: "/images/boards/toronto/Craig-DSouza.png"
                    }, {
                        name: "Mairead Lavery",
                        info: "President and Chief Executive Officer, Export Development Canada (EDC)",
                        image: "/images/boards/toronto/Lavery-Mairead.png"
                    }, {
                        name: "Joseph S. Mancinelli",
                        info: "International Vice President and Regional Manager of Central and Eastern Canada, Labourers International Union of North America (LiUNA)",
                        image: "/images/boards/toronto/Joseph-S-Mancinelli.jpg"
                    }, {
                        name: "Allan O'Dette",
                        info: "Canadian Business Leader and former Chief Executive Officer, Ontario Medical Association",
                        image: "/images/boards/toronto/odette-allan-2016.png"
                    }, {
                        name: "Benoit Parent",
                        info: "Vice-President, Power Generation Business and Nuclear Operations, Cummins Sales and Service",
                        image: "/images/boards/toronto/benoit-parent.jpg"
                    }, {
                        name: "Neil Pakey",
                        info: "President & CEO, Nieuport Aviation",
                        image: "/images/boards/toronto/Neil_Packey.jpg"
                    }, {
                        name: "Lisa Raitt",
                        info: "Vice-Chair, Global Investment Banking, CIBC Capital Markets",
                        image: "/images/boards/toronto/Raitt-Lisa.jpg"
                    }, {
                        name: "Nicholas Rémillard",
                        info: "Chief Executive Officer, International Economic Forum of the Americas (IEFA)",
                        image: "/images/boards/toronto/Nicholas-Rémillard.jpg"
                    }, {
                        name: "Dimitri Soudas",
                        info: "Chairman, Letho Resources; Vice-President, Groupe Selection, Co-Founder Kids Inc",
                        image: "/images/boards/toronto/Dimitri-Soudas.png"
                    }, {
                        name: "Jeffrey Steiner",
                        info: "Founder and Owner, New Franchise Media",
                        image: "/images/boards/toronto/Jeffrey-Steiner.jpg"
                    }, {
                        name: "Kenneth Tanenbaum",
                        info: "Chairman, Kilmer Developments; and Vice-Chairman, Kilmer Van Nostrand (KVN)",
                        image: "/images/boards/toronto/tanenbaum-ken.jpg"
                    }, {
                        name: "Douglas E. Turnbull",
                        info: "Vice-Chairman and Country Head, Canada",
                        image: "/images/boards/toronto/turnbull-douglas-2016.jpg"
                    }, {
                        name: "Sonja Volpe",
                        info: "President and Chief Executive Officer, BNP Paribas Canada",
                        image: "/images/boards/toronto/Volpe-Sonja.png"
                    }, {
                        name: "Geoffrey A. Wilson",
                        info: "Canadian Business Leader and former President and Chief Executive Officer, PortsToronto",
                        image: "/images/boards/toronto/wilson-geoff.jpg"
                    }, {
                        name: "Paul Zed",
                        info: "National Counsel, McCarthy Tetrault",
                        image: "/images/boards/toronto/zed-paul.png"
                    }]
                }
            }
        }
          , Zs = {
            name: "World Strategic Forum",
            shortName: "Miami",
            description: "The World Strategic Forum was created in 2011 and is held annually in Miami, Florida, where it welcomes attendees from all over the world. The WSF brings together decision makers from all spheres of society to tackle the most pressing issues of our time.",
            thumbnail: "/images/events/miami/thumbnail-miami.jpg",
            link: "https://www.worldstrategicforum.com/",
            header: {
                content: "The World Strategic Forum was created in 2011 and is held annually in Miami, Florida, where it welcomes attendees from all over the world. The WSF brings together decision makers from all spheres of society to tackle the most pressing issues of our time."
            },
            bullets: {
                bullet1: {
                    number: "12th",
                    label: "Edition"
                },
                bullet2: {
                    number: "1 000+",
                    label: "In-Person Participants"
                },
                bullet3: {
                    number: "70+",
                    label: "Speakers"
                },
                bullet4: {
                    number: "35+",
                    label: "Represented Countries"
                }
            },
            about: {
                title: "Our Purpose",
                content: "The mission of the World Strategic Forum is to address today’s major corporate and governance challenges, while fostering a better understanding of the opportunities and challenges at stake for the Americas within the Global market. The central themes of the WSF revolve around the Global Economy, Finance, Tech, Trade, Energy, Infrastructure, Investment and Legacy Planning."
            },
            next: {
                title: "Mastering The New Economy",
                content: "The world is changing at pace, resulting in a number of emerging trends and breakthroughs, as well as many challenges. This year’s edition of the WSF will examine the ways in which we can innovate, adapt and succeed within the new global economy. Join us for insightful discussion, thought-provoking luncheons and invaluable networking receptions from November 6th-7th as we convene international thought leaders and decision makers to discuss 'Mastering the New Economy'."
            },
            gallery: {
                title: "Photo gallery",
                index: [{
                    title: "11th edition — Investing in Trust",
                    images: ["/images/events/miami/gallery/11th-miami-001.jpg", "/images/events/miami/gallery/11th-miami-002.jpg", "/images/events/miami/gallery/11th-miami-003.jpg", "/images/events/miami/gallery/11th-miami-004.jpg", "/images/events/miami/gallery/11th-miami-005.jpg", "/images/events/miami/gallery/11th-miami-006.jpg", "/images/events/miami/gallery/11th-miami-007.jpg", "/images/events/miami/gallery/11th-miami-008.jpg", "/images/events/miami/gallery/11th-miami-009.jpg", "/images/events/miami/gallery/11th-miami-010.jpg", "/images/events/miami/gallery/11th-miami-011.jpg", "/images/events/miami/gallery/11th-miami-012.jpg", "/images/events/miami/gallery/11th-miami-013.jpg", "/images/events/miami/gallery/11th-miami-014.jpg", "/images/events/miami/gallery/11th-miami-015.jpg", "/images/events/miami/gallery/11th-miami-016.jpg", "/images/events/miami/gallery/11th-miami-017.jpg", "/images/events/miami/gallery/11th-miami-018.jpg", "/images/events/miami/gallery/11th-miami-019.jpg", "/images/events/miami/gallery/11th-miami-020.jpg", "/images/events/miami/gallery/11th-miami-021.jpg"]
                }]
            }
        }
          , eo = {
            name: "Conference of Paris",
            shortName: "Paris",
            description: "Launched in 2017, the Conference of Paris gathers decision makers across the worlds of business, government and civil society in order to promote the exchange of ideas and perspectives surrounding the major issues of our time.",
            thumbnail: "/images/events/paris/thumbnail-paris.jpg",
            link: "https://www.conferencedeparis.com/",
            header: {
                content: "Launched in 2017, the Conference of Paris gathers decision makers across the worlds of business, government and civil society in order to promote the exchange of ideas and perspectives surrounding the major issues of our time."
            },
            bullets: {
                bullet1: {
                    number: "13th",
                    label: "Edition"
                },
                bullet2: {
                    number: "1,400+",
                    label: "In-Person Participants"
                },
                bullet3: {
                    number: "70+",
                    label: "Speakers"
                },
                bullet4: {
                    number: "75+",
                    label: "Represented Countries"
                }
            },
            about: {
                title: "Our Purpose",
                content: "The multi-day event encourages leaders to share their knowledge and understanding of global economic, social and environmental issues as a way to collaborate and collectively overcome these challenges. As the IEFA’s main annual European event, the Conference of Paris aims to nurture international trade between Europe and the Americas, while fostering wider global relationships which can lead to positive change."
            },
            next: {
                title: "Bridging The Divide",
                content: "This year’s edition will convene global leaders and decision makers to explore the ways in which coordinated, global action can reshape the current system to develop a new agenda for trade, growth and investment. Held at the OECD in Paris on November 28-29th, 2023, keynote talks and panel discussions will coincide with various networking opportunities such as luncheons and cocktail receptions, all designed to encourage connection and collaboration amongst participants."
            },
            gallery: {
                title: "Photo gallery",
                index: [{
                    title: "12th edition",
                    images: ["/images/events/paris/gallery/12th-paris-001.jpg", "/images/events/paris/gallery/12th-paris-002.jpg", "/images/events/paris/gallery/12th-paris-003.jpg", "/images/events/paris/gallery/12th-paris-004.jpg", "/images/events/paris/gallery/12th-paris-005.jpg", "/images/events/paris/gallery/12th-paris-006.jpg", "/images/events/paris/gallery/12th-paris-007.jpg", "/images/events/paris/gallery/12th-paris-008.jpg", "/images/events/paris/gallery/12th-paris-009.jpg"]
                }]
            },
            board: {
                uptitle: "About",
                title: "Board of Governors & Advisory Board",
                content: "The Conference of Paris leadership team works closely with a select group of individuals who form our Board of Governors and Advisory Board. All board members have been carefully selected for their in-depth knowledge and experience within their respective fields."
            },
            governorsIndex: {
                title: "Board of Governors",
                chairmens: {
                    title: "Co-Chairmen",
                    index: [{
                        name: "Paul Desmarais Jr.",
                        info: "Chairman, Power Corporation of Canada (PCC)",
                        image: "/images/boards/paris/paul_desmarais_jr.png"
                    }, {
                        name: "Jean-Pierre Clamadieu",
                        info: "Chairman, ENGIE",
                        image: "/images/boards/paris/Clamadieu-Jean-Pierre.jpg"
                    }]
                },
                members: {
                    title: "Governors",
                    index: [{
                        name: "Gil Rémillard ",
                        info: "Founding Chairman, International Economic Forum of the Americas (IEFA)",
                        image: "/images/boards/paris/Gil_Remillard.jpg"
                    }, {
                        name: "Darius Adamczyk",
                        info: "Chairman and Chief Executive Officer, Honeywell",
                        image: "/images/boards/paris/Darius-Adamczyk.jpg"
                    }, {
                        name: "Jean-Paul Agon",
                        info: "Chairman, L'Oréal",
                        image: "/images/boards/paris/Agon-Jean-Paul.jpg"
                    }, {
                        name: "Hélène Desmarais",
                        info: "Executive Chairman, IVADO and Chair of the Board HEC Montréal",
                        image: "/images/boards/paris/desmarais-helene.jpg"
                    }, {
                        name: "Kristina M. Johnson",
                        info: "President, The Ohio State University",
                        image: "/images/boards/paris/Johnson-Kristina.jpg"
                    }, {
                        name: "Jean Lemierre",
                        info: "Chairman, BNP Paribas",
                        image: "/images/boards/paris/Jean-Lemierre.jpg"
                    }, {
                        name: "Shunichi Miyanaga",
                        info: "Chairman, Mitsubishi Heavy Industries",
                        image: "/images/boards/paris/Miyanaga-Shunichi.jpg"
                    }, {
                        name: "Laurence Parisot",
                        info: "Chairman, Citigroup",
                        image: "/images/boards/paris/Parisot-Laurence.jpg"
                    }, {
                        name: "Muriel Pénicaud",
                        info: "Ambassador, Permanent Representative of France to the OECD",
                        image: "/images/boards/paris/Penicaud-Muriel.jpg"
                    }, {
                        name: "Patrick Pouyanné",
                        info: "Chairman and Chief Executive Officer, TotalEnergies",
                        image: "/images/boards/paris/Pouyanne-Patrick.jpg"
                    }, {
                        name: "Ian Gallienne",
                        info: "Chief Executive Officer, GBL",
                        image: "/images/boards/paris/Gallienne-Ian.jpg"
                    }, {
                        name: "Alain Fuchs",
                        info: "President, PSL University",
                        image: "/images/boards/paris/Fuchs-Alain.jpg"
                    }, {
                        name: "Mathias Cormann",
                        info: "Secretary-General, Organisation for Economic Co-operation and Development (OECD)",
                        image: "/images/boards/paris/Cormann-Mathias.jpg"
                    }, {
                        name: "James P. Gorman",
                        info: "Chairman and Chief Executive Officer, Morgan Stanley",
                        image: "/images/boards/paris/James-Gorman.jpg"
                    }, {
                        name: "Amélie de Montchalin",
                        info: "Permanent Representative of France to the OECD",
                        image: "/images/boards/paris/amelie.jpg"
                    }]
                },
                secretaries: {
                    title: "Secretaries",
                    index: [{
                        name: "Bernard Spitz",
                        info: "President of European & International Affairs, MEDEF",
                        image: "/images/boards/paris/Spitz-Bernard.jpg"
                    }]
                }
            },
            advisoryIndex: {
                title: "Advisory Board",
                chairmen: {
                    title: "Chairwoman",
                    index: [{
                        name: "Gwenaelle Avice-Huet",
                        info: "Chief Strategy & Sustainability Officer, Schneider Electric",
                        image: "/images/boards/paris/Avice-Huet-Gwenaelle-cropped.jpg"
                    }]
                },
                members: {
                    title: "Members",
                    index: [{
                        name: "Nicolas Blain",
                        info: "Head of the International relations and European affairs Unit, RATP Group",
                        image: "/images/boards/paris/blain-nicolas.png"
                    }, {
                        name: "Didier Le Bret",
                        info: "Diplomat and Associate, ESL",
                        image: "/images/boards/paris/Le-Bret-Didier.png"
                    }, {
                        name: "Eric Meyer",
                        info: "Head of France, RBC Capital Markets",
                        image: "/images/boards/paris/meyer-eric.png"
                    }, {
                        name: "Dorothée Pineau",
                        info: "Advisor to the President, Mouvement des entreprises de France (MEDEF)",
                        image: "/images/team/DorothéePineau.jpg"
                    }, {
                        name: "Bertrand Richard",
                        info: "Senior Advisor, Spencer Stuart",
                        image: "/images/boards/paris/richard.jpg"
                    }]
                }
            }
        }
          , to = {
            name: "Conference of Montreal",
            shortName: "Montreal",
            description: "The Conference of Montreal (CDM) was launched in 1994 and brings together decision makers from all spheres of society to address the most pressing issues of our time.",
            thumbnail: "/images/events/montreal/thumbnail-montreal.jpg",
            link: "https://www.laconferencedemontreal.com/",
            header: {
                content: "The Conference of Montreal (CDM) was launched in 1994 and brings together decision makers from all spheres of society to address the most pressing issues of our time."
            },
            bullets: {
                bullet1: {
                    number: "30th",
                    label: "Edition"
                },
                bullet2: {
                    number: "2 100+",
                    label: "In-Person Participants"
                },
                bullet3: {
                    number: "130+",
                    label: "Speakers"
                },
                bullet4: {
                    number: "40+",
                    label: "Represented Countries"
                }
            },
            about: {
                title: "Our Purpose",
                content: "Over the past three decades, CDM has evolved to become an internationally recognised multi-day event attended by world leaders and decision makers from the worlds of government, business and academia, who convene to discuss topics ranging from the economy and global leadership to sustainability, energy and innovation. The event’s geographic location in the heart of French Canada offers audiences a rare sociopolitical economic insight which spans both a North American and European perspective, while also examining best practice worldwide."
            },
            next: {
                title: "",
                content: ""
            },
            gallery: {
                title: "Photo gallery",
                edition29: {
                    title: "29th edition — Thriving in a world in transition",
                    index: [{
                        image: "/images/events/toronto/gallery/16th-toronto-001.jpg"
                    }]
                }
            },
            board: {
                uptitle: "About",
                title: "Board of Governors",
                content: "The Conference of Montreal leadership team works closely with a select group of individuals who form our Board of Governors. All members of the Conference of Montreal Board of Governors have been carefully selected for their in-depth knowledge and experience within their respective fields."
            },
            boardIndex: {
                chairmen: {
                    title: "Co-Chairmen",
                    index: [{
                        name: "Paul Desmarais Jr.",
                        info: "Chairman, Power Corporation of Canada (PCC)",
                        image: "/images/boards/montreal/paul_desmarais_jr.png"
                    }, {
                        name: "Gil Rémillard",
                        info: "Founding Chairman, International Economic Forum of the Americas",
                        image: "/images/boards/montreal/Gil_Remillard-2292_HR.jpg"
                    }]
                },
                members: {
                    title: "Members",
                    index: [{
                        name: "Luis Almagro Lemes",
                        info: "Secretary General, Organization of American States (OAS)",
                        image: "/images/boards/montreal/almagro-luis.jpg"
                    }, {
                        name: "Joseph J. Andrew",
                        info: "Global Chair, Dentons",
                        image: "/images/boards/montreal/joseph-j-andrew.jpg"
                    }, {
                        name: "Audrey Azoulay",
                        info: "Director General, United Nations Educational, Scientific and Cultural Organization (UNESCO)",
                        image: "/images/boards/montreal/audrey-azoulay.png"
                    }, {
                        name: "Perrin Beatty",
                        info: "President and Chief Executive Officer, The Canadian Chamber of Commerce",
                        image: "/images/boards/montreal/perrin-beatty.png"
                    }, {
                        name: "David M. Cote",
                        info: "Executive Chairman, Vertiv Holdings",
                        image: "/images/boards/montreal/david-m-cote.jpg"
                    }, {
                        name: "Hélène Desmarais",
                        info: "Executive Chairman, IVADO Labs and Chair of the Board HEC Montréal",
                        image: "/images/boards/montreal/desmarais-helene.jpg"
                    }, {
                        name: "Jacques Delors",
                        info: "Founding President, Notre Europe, Former President European Commission",
                        image: "/images/boards/montreal/jacques-delors.jpg"
                    }, {
                        name: "Orit Gadiesh",
                        info: "Chairwoman, Bain & Company",
                        image: "/images/boards/montreal/orit-gadiesh.png"
                    }, {
                        name: "Glenn Hutchins",
                        info: "Co-Chairman The Brookings Institution; Chairman, North Island; and Co-founder, Silver Lake",
                        image: "/images/boards/montreal/glenn-hutchins.png"
                    }, {
                        name: "Odile Renaud-Basso",
                        info: "President, European Bank for Reconstruction and Development (EBRD)",
                        image: "/images/boards/montreal/odile-renaud-basso.jpg"
                    }, {
                        name: "Jean-Claude Trichet",
                        info: "Honorary Governor, Bank of France, Former President, European Central Bank, Chairman, Group of Thirty, and Chairman of European Group of the Trilateral Commission Show",
                        image: "/images/boards/montreal/jean-claude trichet.jpg"
                    }]
                }
            },
            archive: {
                title: "Archives"
            },
            events: [{
                edition: "29th edition",
                title: "Thriving in a world in transition",
                link: "https://www.laconferencedemontreal.com/",
                image: "/images/events/montreal/montreal-29th-en.png"
            }]
        }
          , no = {
            name: "IEFA LatAm Forum",
            shortName: "Buenos Aires",
            description: "The IEFA LatAm Forum held its first edition in 2022, and is an annual international conference focused on the opportunities that Latin America presents within today’s global economy.",
            thumbnail: "/images/events/buenosAires/thumbnail-buenosAires.jpg",
            link: "https://www.latamforum.com/",
            header: {
                content: "The IEFA LatAm Forum held its first edition in 2022, and is an annual international conference focused on the opportunities that Latin America presents within today’s global economy."
            },
            bullets: {
                bullet1: {
                    number: "2nd",
                    label: "Edition"
                },
                bullet2: {
                    number: "400+",
                    label: "In-Person Participants"
                },
                bullet3: {
                    number: "30+",
                    label: "Speakers"
                },
                bullet4: {
                    number: "20+",
                    label: "Represented Countries"
                }
            },
            about: {
                title: "Our Purpose",
                content: "The private, by invitation only event was created as a platform to discuss Latin America’s increasingly important role in the global economy. As the world seeks a more sustainable and resilient future, the IEFA LatAm Forum identifies the Latin American organizations and institutions which are helping to realize this objective, both within the region and worldwide."
            },
            next: {
                title: "2nd edition",
                content: "The 2024 edition will convene international thought leaders and decision makers to examine the various opportunities throughout the Americas which can enable the global transition. Held at the Four Seasons Hotel in Buenos Aires, Argentina, the conference will feature two days of keynote speeches, panel discussions, private luncheons, dinners and cocktail receptions, providing numerous occasions for participants to network and connect.",
                link: "https://www.worldstrategicforum.com/"
            },
            gallery: {
                title: "Photo gallery",
                edition11: {
                    title: "11th edition — Investing in Trust",
                    index: [{
                        image: "/images/events/miami/gallery/12th-miami-001.jpg"
                    }]
                }
            }
        }
          , ao = {
            name: "Phoenix Global Forum",
            shortName: "Phoenix",
            description: "The Phoenix Global Forum is hosted by the IEFA and Phoenix Sister Cities. As the fastest growing city in the US, Phoenix is quickly emerging as a hub for the biosciences, technology, sustainability and defense sectors, which is attracting major outside investment to the region and creating a burgeoning business ecosystem.",
            thumbnail: "/images/events/phoenix/thumbnail-phoenix.jpg",
            link: "https://www.phoenixglobalforum.com/",
            header: {
                content: "The Phoenix Global Forum is hosted by the IEFA and Phoenix Sister Cities. As the fastest growing city in the US, Phoenix is quickly emerging as a hub for the biosciences, technology, sustainability and defense sectors, which is attracting major outside investment to the region and creating a burgeoning business ecosystem."
            },
            bullets: {
                bullet1: {
                    number: "1",
                    label: "Edition"
                },
                bullet2: {
                    number: "0",
                    label: "In-Person Participants"
                },
                bullet3: {
                    number: "0",
                    label: "Speakers"
                },
                bullet4: {
                    number: "0",
                    label: "Represented Countries"
                }
            },
            about: {
                title: "Our Purpose",
                content: "The Phoenix Global Forum will act as a platform where decision makers, thought leaders and experts in their respective fields convene to discuss society’s evolving needs amidst ongoing global challenges. The forum will examine solutions already in development, both in Phoenix and worldwide, while also fostering future innovation through connection and collaboration."
            },
            next: {
                title: "Forging The Future",
                content: "The first edition of the Phoenix Global Forum will examine the international cooperation and strategic innovation needed to address emerging global challenges. Decision makers and leaders from the worlds of business, government and academia will convene to discuss these challenges and the subsequent opportunities which can ensure sustained growth and competitiveness. The Phoenix Global Forum will take place on May 2nd, 2024 at the Arizona Biltmore Hotel. "
            },
            gallery: {
                title: "Photo gallery",
                edition11: {
                    title: "11th edition — Investing in Trust",
                    index: [{
                        image: "/images/events/miami/gallery/12th-miami-001.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-002.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-003.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-004.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-005.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-006.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-007.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-008.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-009.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-010.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-011.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-012.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-013.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-014.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-015.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-016.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-017.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-018.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-019.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-020.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-021.jpg"
                    }]
                }
            }
        }
          , io = {
            home: Ws,
            common: Vs,
            events: Js,
            team: Qs,
            privacy: Ks,
            terms: Ys,
            toronto: Xs,
            miami: Zs,
            paris: eo,
            montreal: to,
            buenosAires: no,
            phoenix: ao
        }
          , so = {
            meta: {
                titleTemplate: "%s | FEIA"
            },
            brand: " Forum économique international des Amériques",
            brandSmall: "FEIA",
            nextEvent: "Prochain événement",
            banner: "Regardez le Toronto Global Forum en direct",
            navigation: {
                home: "Accueil",
                events: "Événements",
                allEvents: "Tous les événements",
                eventNext: "Voir le prochain événement",
                eventsNext: "Prochains événements",
                eventsAnnual: "Conférences",
                about: "À propos",
                aboutUs: "À propos",
                services: "Services",
                team: "Notre équipe",
                teamShort: "Équipe",
                partner: "Partenaire",
                becomePartner: "Devenir partenaire",
                terms: "Conditions d'utilisation",
                privacy: "Politique de confidentialité",
                consulting: "Services de conseil",
                seeMore: "Voir plus",
                gallery: "Galerie de photos",
                galleryShort: "Galerie",
                close: "Fermer"
            },
            cta: {
                learnMore: "En savoir plus",
                contact: "Nous contacter",
                tickets: "Billetterie",
                registerNow: "S'enregistrer maintenant"
            },
            city: {
                montreal: "Montréal",
                toronto: "Toronto",
                paris: "Paris",
                miami: "Miami",
                buenosAires: "Buenos Aires",
                phoenix: "Phoenix"
            },
            form: {
                name: "Nom",
                email: "Courriel",
                company: "Entreprise",
                phone: "Téléphone",
                subject: "Sujet",
                getTouch: "Prendre contact",
                partner: "Devenir un partenaire",
                message: "Message",
                button: "Envoyer",
                tollFree: "Sans frais"
            },
            copyright: "Forum économique international des Amériques",
            cretedBy: "Site web créé par",
            languages: {
                title: "Langues",
                french: "Français",
                english: "Anglais",
                spanish: "Espagnol"
            },
            buyTickets: "Acheter des billets",
            logo: "/images/brand/logo-fr-white.png",
            logoSmall: "/images/brand/logo-small-fr-white.png",
            boardOfGovernors: "Conseil des Gouverneurs",
            advisoryBoard: "Comité aviseur",
            archives: "Archives",
            ourPurpose: "Notre objectif",
            pastEvents: "Événements passés"
        }
          , oo = {
            meta: {
                title: "Forum économique international des Amériques",
                description: "Le Forum économique international des Amériques (FEIA) encourage la connexion, la collaboration et l'innovation afin de relever les grands défis mondiaux."
            },
            header: {
                message: "Connecter les dirigeants du monde pour relever les grands",
                span: "défis internationaux"
            },
            graphic: "/images/brand/graphic-fr.png",
            bullets: [{
                number: "23 200",
                label: "Participants"
            }, {
                number: "563",
                label: "Conférenciers"
            }, {
                number: "105",
                label: "Pays\nreprésentés"
            }, {
                number: "2 602",
                label: "Rencontres\nbilatérales"
            }],
            about: {
                title: "Notre mission",
                content: "Le Forum économique international des Amériques (FEIA) a été créé en 1994 dans le but de promouvoir la coopération, la collaboration et l'innovation afin de relever les plus grands défis mondiaux. L'organisation s'appuie sur son vaste réseau pour organiser une série d'événements annuels dans le monde entier, au cours desquels des chefs d'État et de gouvernement, des membres du secteur privé et de la société civile, des dirigeants syndicaux et des académiques - tous experts dans leur domaine respectif - peuvent se réunir et discuter de leurs objectifs communs et des moyens de les atteindre."
            },
            testimonies: {
                title: "Quelques extraits de nos conférences",
                slides: [{
                    content: "La guerre, qui est absolument dramatique, a vraiment mis la notion de sécurité énergétique au premier plan.",
                    name: "Odile Renaud-Basso - Présidente, Banque européenne pour la reconstruction et le développement (BERD)",
                    image: "/images/testimonials/OdileRenaud-Basso.jpg"
                }, {
                    content: "Je regarde les prochains 10-20 ans au Québec, je pense qu'il y a deux catalyses de création de valeur et de richesse au Québec : le premier c'est l'innovation, et le deuxième c'est comment on utilise nos ressources d'énergies renouvelables.",
                    name: "Pierre Fitzgibbon - Ministre de l'Économie, de l'Innovation et de l'Énergie, Québec",
                    image: "/images/testimonials/PierreFitzgibbon.jpg"
                }, {
                    content: "Nous sommes à une étape charnière de l'histoire en économie et en histoire géopolitique.",
                    name: "Mark Carney - Vice-président du conseil et chef de l'investissement en matière d'environnement chez Brookfield Asset Management, et envoyé spécial des Nations Unies pour le financement de l'action climatique",
                    image: "/images/testimonials/MarkCarney.jpg"
                }, {
                    content: "La crise et le défi de la transition énergétique sont très clairs : il faudra que le gouvernement, les industries, et les consommateurs travaillent tous ensemble pour réussir ce changement, mais nous ne pouvons pas nous attendre les uns les autres.",
                    name: "Ivan Vella - Chef de la direction, Rio Tinto Aluminium",
                    image: "/images/testimonials/IvanVella.jpg"
                }, {
                    content: "Lorsque nous pensons à l'engagement social, lorsque nous pensons aux médias sociaux, la capacité à comprendre les problèmes et à s'organiser collectivement autour d'eux s'accélère",
                    name: "Jean-Pierre Clamadieu - Président, ENGIE",
                    image: "/images/testimonials/Jean-PierreClamadieu.jpg"
                }]
            },
            boards: {
                upTitle: "Événements annuel",
                title: "Les comités",
                content: "Depuis sa fondation en 1994, le FEIA s'est entouré de dirigeants du monde des affaires, d'organisations internationales et d'autres leaders qui continuent d'appuyer sa mission au sein de différents comités et conseils. Consultez les différents comités pour en savoir plus sur ces personnes qui soutiennent notre mission."
            },
            partner: {
                title: "Devenir",
                content: "Au cours des trois dernières décennies, le FEIA a bâti un réseau de leaders influents de classe internationale, issus des milieux gouvernementaux, économiques et universitaires. La capacité de l'organisation à favoriser la connexion et la collaboration fait du FEIA une plateforme unique pour ses partenaires.",
                content2: "Les partenaires et les sponsors jouent un rôle clé dans le développement et le succès continu du FEIA. En devenant un sponsor officiel, les partenaires peuvent rejoindre un réseau stratégique où les décideurs peuvent échanger et se connecter, ce qui permet des dialogues productifs et des relations de travail à long terme. Le FEIA s'engage à offrir une expérience enrichissante et inégalée à ses parties prenantes - un objectif qui s'est traduit par la création de nombreux partenariats d'année en année."
            },
            services: {
                title: "Services-conseils du FEIA",
                content: "En plus de ses conférences phares, le Forum économique international des Amériques offre une variété de services pour les clients qui souhaitent étendre leur réseau stratégique ou produire leurs propres événements.",
                entries: [{
                    title: "Production d’événements",
                    content: "<p>Le Forum a évolué et s'est développé au cours des trois dernières décennies pour rassembler chaque année plus de 23 000 participants et 560 intervenants dans le cadre de cinq conférences : la Conférence de Montréal, le Toronto Global Forum, le World Strategic Forum, la Conférence de Paris et l'IEFA LatAm Forum.</p><p>Tirant parti de cette expertise et de son vaste réseau, le FEIA organise et gère régulièrement des événements externes dans le monde entier. Le FEIA peut gérer, coordonner et fournir un ensemble d'événements de classe mondiale spécifiquement adaptés aux besoins du client. De la sélection des intervenants et du contenu jusqu’à la conception, la production et la stratégie de l’événement, le FEIA a pour objectif de fournir un service qui a un impact significatif pour ses clients.</p>"
                }, {
                    title: "Réalisation de tables rondes",
                    content: "<p>Le FEIA produit un programme de tables rondes aussi bien privées que virtuelles qui dure toute l’année et qui est indépendant de ses conférences annuelles.</p><p>Ces réunions se composent généralement d’environ 25 personnes et comprennent principalement des dirigeants d’entreprises et gouvernementaux du monde entier. Le format exact des tables rondes est adapté à chaque besoin du client.</p>"
                }, {
                    title: "Conseils en réseautage exécutif",
                    content: "<p>Le FEIA a passé les trois dernières décennies à construire un vaste réseau de leaders influents comprenant des dirigeants mondiaux, des cadres de haut niveau et des universitaires dans un large éventail de domaines. L'organisation est connue pour sa capacité à favoriser la connexion et la collaboration afin de relever les défis les plus pressants du monde, en adaptant spécifiquement ses audiences pour atteindre cet objectif. En fonction des objectifs du client, le FEIA peut faciliter une série de réunions privées individuelles et de présentations conçues pour créer un impact maximal.</p>"
                }]
            },
            contact: {
                title: "Nous contacter",
                content: "Pour communiquer avec nous, veuillez remplir le formulaire. Quelqu'un vous répondra dans les plus brefs délais.",
                content2: ""
            },
            newsletter: "Inscrivez-vous à notre infolettre"
        }
          , ro = {
            header: "Le Forum a évolué et s'est développé au fil du temps pour réunir plus de 23 000 participants et 560 conférenciers dans le cadre de cinq conférences annuelles : la Conférence de Montréal, le Toronto Global Forum, le World Strategic Forum, la Conférence de Paris et l’IEFA LatAm Forum, organisés en association avec Integra Capital, et le Phoenix Global Forum, organisé en association avec Phoenix Sister Cities.",
            home: {
                toronto: {
                    title: "Fostering economic resilience",
                    date: "11 au 13 octobre 2023",
                    content: "<p>Le Toronto Global Forum (TGF) est organisé par le Forum économique international des Amériques (FEIA). La conférence accueille chaque année plus de 170 conférenciers et plusieurs milliers de participants du monde entier.</p>\n        <p>Créé en 2006, le TGF rassemble des décideurs de toutes les sphères de la société pour encourager le dialogue et trouver des solutions aux questions nationales et mondiales. En moins de dix ans, le Toronto Global Forum s'est imposé comme l'une des principales plateformes d'Amérique du Nord pour les chefs d'État, les gouverneurs de banques centrales, les ministres, les entrepreneurs et les décideurs économiques mondiaux.</p>\n        <p>La 17e édition du Toronto Global Forum se tiendra à l'hôtel Fairmont Royal York du 11 au 13 octobre 2023.</p>",
                    links: {
                        learnMore: "page:toronto",
                        tickets: "https://www.torontoglobalforum.com/#/tickets?affl=MAINWEBSITETGF2023BUYTICKET"
                    }
                },
                miami: {
                    title: "Mastering the new economy",
                    date: "6 et 7 novembre 2023",
                    content: "<p>Le World Strategic Forum (WSF) est une conférence mondiale organisée par le Forum économique international des Amériques (FEIA). Depuis sa création en 2011, le WSF accueille chaque année plus de 100 conférenciers et plus de 3 000 participants du monde entier.</p>\n        <p>Les thèmes principaux du World Strategic Forum portent sur l'économie mondiale, la finance, le commerce,l'énergie et l’infrastructure, avec comme mission de relever les défis et les opportunités auxquels sont confrontées les Amériques sur le marché économique mondial.</p>\n        <p>La 12e édition du World Strategic Forum aura lieu au Miami Biltmore Hotel, les 6 et 7 novembre 2023.</p>",
                    links: {
                        learnMore: "page:miami",
                        tickets: "https://www.worldstrategicforum.com/WORLDSTRATEGICFORUM2023-MIAMI-MASTERINGDISRUPTION#/tickets?lang=en"
                    }
                },
                paris: {
                    title: "La Conférence de Paris",
                    date: "28 et 29 novembre 2023",
                    content: "<p>La Conférence de Paris (CDP) est une conférence mondiale organisée par le Forum économique international des Amériques (FEIA). Cet événement annuel sert de plateforme pour rassembler des acteurs majeurs du monde entier afin de discuter du rôle de l'Europe dans l'économie mondiale, dans le but de créer une société plus inclusive, plus équilibrée et plus responsable.</p>\n        <p>La 7e édition de la Conférence de Paris se tiendra à Paris, à l'OCDE, les 28 et 29 novembre 2023.</p>",
                    links: {
                        learnMore: "page:paris"
                    }
                },
                buenosAires: {
                    title: "IEFA LatAm Forum",
                    date: "26 et 27 mars 2024",
                    content: "<p>Le IEFA LatAm Forum est une conférence mondiale annuelle organisée par le Forum économique international des Amériques (IEFA) en collaboration avec Integra Capital.</p>\n        <p>L’IEFA LatAm Forum a été créé en 2022, avec un intérêt particulier pour le rôle toujours plus important que joue l'Amérique latine dans l'économie mondiale d'aujourd'hui, alors que le monde est à la recherche d'un avenir plus durable et plus résilient.</p>\n        <p>La 2e edition de l’IEFA LatAm Forum se tiendra à Buenos Aires, à l’hôtel Four Seasons, les 26 et 27 mars 2024.</p>",
                    links: {
                        learnMore: "page:buenos-aires"
                    }
                },
                phoenix: {
                    title: "Forging the Future",
                    date: "2 mai 2024",
                    content: "<p>Le Phoenix Global Forum est organisé par le FEIA et Phoenix Sister Cities, et sera lancé au printemps 2024. En tant que ville à la croissance la plus rapide des États-Unis depuis cinq ans, la région émerge rapidement comme une plaque tournante pour les organisations dans les secteurs des biosciences, de la technologie, de la durabilité et de la défense. Par conséquent, les investissements extérieurs dirigés vers Phoenix contribuent à créer un écosystème florissant de chefs d'entreprise, d'entrepreneurs, d'investisseurs et d'universitaires.</p>\n        <p>Le Phoenix Global Forum servira de plateforme où les décideurs, les leaders d'opinion et les experts dans leurs domaines respectifs se réuniront pour discuter de l'évolution des besoins de la société dans le contexte des défis mondiaux actuels. La conférence mettra en lumière les solutions en cours de développement, tant à Phoenix que dans le monde entier, tout en encourageant l'innovation future par le biais de la connexion et de la collaboration.</p>",
                    links: {
                        learnMore: "page:phoenix"
                    }
                },
                montreal: {
                    title: "Conférence de Montréal",
                    date: "10 au 12 juin 2024",
                    content: "<p>La Conférence de Montréal (CDM) est une conférence international organisée par le Forum économique international des Amériques (FEIA). Elle réunit des centaines de conférenciers et des milliers de participants de partout à travers le monde.</p>\n        <p>Lancée en 1994, la Conférence de Montréal (CDM) réunit des décideurs de toutes les sphères de la société pour aborder les plus gros enjeux actuels. Au fil des années, la Conférence de Montréal est devenue un événement international de plusieurs jours, auquel participent des dirigeants mondiaux et des décideurs du monde gouvernemental, des affaires et du milieu universitaire, qui se réunissent pour discuter de sujets allant de l’économie au leadership mondial en passant par le développement durable, l’énergie et l’innovation. La situation géographique de l’événement, au cœur du Canada francophone, offre au public un rare aperçu sociopolitique et économique qui couvre à la fois une perspective nord-américaine et européenne.</p>\n        <p>La 30e édition de la Conférence de Montréal aura lieu à Montréal, Québec, du 10 au 12 juin 2024.</p>",
                    links: {
                        learnMore: "page:montreal"
                    }
                }
            },
            nextEvents: {
                index: [{
                    title: "Fostering economic resilience [EN]",
                    conference: "Toronto Global Forum",
                    date: "11 au 13 octobre 2023",
                    link: "https://events.forum-americas.org/TORONTOGLOBALFORUM2023-FOSTERINGECONOMICRESILIENCE",
                    image: "/images/events/toronto/toronto-17th-en.png"
                }, {
                    title: "Mastering the new economy [EN]",
                    conference: "World strategic forum | Miami",
                    date: "6 et 7 novembre 2023",
                    link: "https://events.forum-americas.org/WORLDSTRATEGICFORUM2023-MIAMI-MASTERINGDISRUPTION",
                    image: "/images/events/miami/miami-12th-en.png"
                }, {
                    title: "Bridging the divide",
                    conference: "La Conférence de Paris",
                    date: "28 et 29 novembre 2023",
                    link: "https://events.forum-americas.org/LACONFERENCEDEPARIS2023#/?lang=fr",
                    image: "/images/events/paris/paris-13th-en.png"
                }, {
                    title: "2ème édition",
                    conference: "IEFA LatAm Forum | Buenos Aires",
                    date: "Mars 2024",
                    link: "https://events.forum-americas.org/LATAMFORUM2023-BUENOSAIRES",
                    image: "/images/events/buenosAires/thumbnail-buenosaires.jpg"
                }, {
                    title: "1ère édition",
                    conference: "Phoenix Global Forum",
                    date: "2 mai 2024",
                    link: "https://www.phoenixglobalforum.com/",
                    image: "/images/events/phoenix/thumbnail-phoenix.jpg"
                }, {
                    title: "30ème édition",
                    conference: "La Conférence de Montréal",
                    date: "10 au 12 juin 2024",
                    image: "/images/events/montreal/thumbnail-montreal.jpg"
                }]
            },
            specialEvents: {
                title: "Événements spéciaux",
                content: ""
            },
            pastEvents: {
                title: "Événements passés",
                index: [{
                    title: "Réussir dans un monde en transition",
                    conference: "La Conférence de Montréal",
                    date: "12 au 14 juin 2023",
                    link: "https://events.forum-americas.org/TheConferenceofMontreal2023-ThrivinginaWorldinTransition-Development#/?lang=fr",
                    image: "/images/events/montreal/montreal-29th-fr.png"
                }, {
                    title: "Engagement social des entreprises pour l'égalité des genres",
                    conference: "FEIA & The Canadian Women’s Foundation",
                    image: "/images/events/Corporate citizenship for gender equality.png",
                    link: "https://events.forum-americas.org/CorporateCitizenshipforGenderEquality#/?lang=fr",
                    date: "8 mars 2023"
                }, {
                    title: "Faire face aux perturbations",
                    conference: "La Conférence de Paris",
                    image: "/images/events/paris/Tackling Growing Disruption.png",
                    link: "https://events.forum-americas.org/TheConferenceofParis2022-MasteringanewworldRedefiningdialogue",
                    date: "15-15 décembre 2022"
                }, {
                    title: "MasterClass ENGIE 2.0",
                    conference: "La Conférence de Paris",
                    image: "/images/events/paris/master-class=2022.png",
                    link: "https://events.forum-americas.org/LaConfrencedeParis2022-MasterClassENGIE-20",
                    date: "15-15 décembre 2022"
                }, {
                    title: "Cooperation for a sustainable world",
                    conference: "IEFA LatAm forum | Buenos aires",
                    image: "/images/events/buenosAires/thumbnail-buenosaires.jpg",
                    link: "https://events.forum-americas.org/LATAMFORUMofBuenosAires2022",
                    date: "15-15 novembre 2023"
                }, {
                    title: "Investing in trust",
                    conference: "World Strategic Forum | Miami",
                    image: "/images/events/miami/Investing in trust.png",
                    link: "https://events.forum-americas.org/WORLDSTRATEGICFORUM2022-MIAMI",
                    date: "31 octobre - 1 novemvre 2022"
                }, {
                    title: "Charting a new economy",
                    conference: "Toronto Global Forum",
                    image: "/images/events/toronto/Charting a new economy.png",
                    link: "https://events.forum-americas.org/TorontoGlobalForum2022",
                    date: "17-19 octobre 2022"
                }]
            }
        }
          , lo = {
            meta: {
                title: "Notre équipe",
                description: "Le FEIA a veillé à constituer une équipe internationale et expérimentée, regroupant le monde des affaires, le secteur public et le milieu académique"
            },
            header: {
                title: "Notre équipe",
                content: "La FEIA s'est attachée à constituer une équipe internationale et dynamique, forte d'une expérience acquise dans le monde des affaires, gouvernemental et académique."
            },
            cta: {
                title: "Faites partie de l'équipe",
                content: "L'organisation se développe rapidement et nous invitons les candidats intéressés à envoyer leur CV.",
                button: "Envoyer mon CV"
            },
            members: [{
                name: "Nicholas Rémillard",
                title: "Chef de la direction",
                info: "Forum économique international des Amériques",
                image: "/images/team/Nicholas_Remillard-2636_HR.jpg"
            }, {
                name: "Gil Rémillard",
                title: "Président-fondateur",
                info: "Forum économique international des Amériques",
                image: "/images/team/Gil_Remillard-2292_HR.jpg"
            }, {
                name: "Marie DuPont",
                title: "Première conseillère financière",
                info: "Forum économique international des Amériques",
                image: "/images/team/thumbnail-1.png"
            }, {
                name: "Thaïs Pinto",
                title: "Présidente et cheffe des affaires juridiques",
                info: "Forum économique international des Amériques",
                image: "/images/team/ThaisPinto.png"
            }, {
                name: "Mathieu Rondeau",
                title: "Chef de la direction financière",
                info: "Forum économique international des Amériques",
                image: "/images/team/MathieuRondeau.png"
            }, {
                name: "Alain Dufour",
                title: "Vice-Président, Production et Expérience",
                info: "Forum Économique International des Amériques",
                image: "/images/team/AlainDufour.jpg"
            }, {
                name: "Francisca Insulza",
                title: "Vice-présidente, relation avec les partenaires et croissance stratégique",
                info: "Forum économique international des Amériques",
                image: "/images/team/FranciscaInsulza.jpg"
            }, {
                name: "Cédric Muller",
                title: "Vice-président, contenu et affaires externes",
                info: "Forum économique international des Amériques",
                image: "/images/team/CedrickMuller.jpg"
            }, {
                name: "Francesco Biondi-Morra di Belforte",
                title: "Directeur, contenu et programmation",
                info: "Forum Économique International des Amériques",
                image: "/images/team/Francesco Biondi-Morra di Belforte.png"
            }, {
                name: "Éric Buchlin",
                title: "Directeur Sureté",
                info: "Forum Économique International des Amériques",
                image: "/images/team/ericBuchlin.jpg"
            }, {
                name: "Rebecca Durnin",
                title: "Directrice, Communication et Marketing",
                info: "Forum économique international des Amériques",
                image: "/images/team/RebeccaDurnin.jpg"
            }, {
                name: "Rafael Moya Herrero",
                title: "Conseiller principal, contenu et programmation",
                info: "Forum Économique International des Amériques",
                image: "/images/team/rafael-moya-herrero.jpg"
            }, {
                name: "Benjamin Booth",
                title: "Conseiller exécutif ",
                info: "Forum Économique International des Amériques",
                image: "/images/team/benjamin-booth.JPG"
            }, {
                name: "Laure Duque",
                title: "Chargée de projet participation et développement de communautés d’intérêt",
                info: "Forum Économique International des Amériques",
                image: "/images/team/LaureDuque.jpg"
            }, {
                name: "Myriam Tannous",
                title: "Chargée de projet, communication et marketing",
                info: "Forum Économique International des Amériques",
                image: "/images/team/myriam-tannous.jpg"
            }, {
                name: "Noémie Baillarguet",
                title: "Conseillère, marketing et communication",
                info: "Forum Économique International des Amériques",
                image: "/images/team/Noémie Baillarguet.jpg"
            }, {
                name: "Lyonel Millien",
                title: "Contrôleur adjoint",
                info: "Forum Économique International des Amériques",
                image: "/images/team/lyonel-millien.jpg"
            }, {
                name: "Aurore Saccagi",
                title: "Conseillère, contenu et programmation",
                info: "Forum Économique International des Amériques",
                image: "/images/team/aurore-saccagi.jpg"
            }, {
                name: "Virgile Sylvain",
                title: "Conseiller, Relations avec les partenaires",
                info: "Forum Économique International des Amériques",
                image: "/images/team/Virgile Sylvain.png"
            }, {
                name: "Joseph Clark",
                title: "Président",
                info: "Toronto Global Forum",
                image: "/images/team/JosephClark.jpg"
            }, {
                name: "Ali Ponte",
                title: "Directeur exécutif",
                info: "Toronto Global Forum",
                image: "/images/team/AliPonte.jpg"
            }, {
                name: "Bill Johnson",
                title: "Président",
                info: "World Strategic Forum",
                image: "/images/team/BillJohnson.png"
            }, {
                name: "Julia Bernstein",
                title: "Directrice exécutive",
                info: "World Strategic Forum",
                image: "/images/team/julia-bernstein.jpeg"
            }, {
                name: "Céline Boyard",
                title: "Directrice exécutive",
                info: "La Conférence de Paris",
                image: "/images/team/CelineBoyard.png"
            }, {
                name: "Dorothée Pineau",
                title: "Conseillère pour les entreprises",
                info: "La Conférence de Paris",
                image: "/images/team/DorothéePineau.jpg"
            }]
        }
          , co = {
            title: "Termes & Conditions",
            update: "Dernière mise à jour effectuée le 15 mai 2023.",
            meta: {
                title: "Conditions d'utilisation"
            },
            wp: "false",
            content_static: ["Veuillez lire attentivement les Conditions d’utilisation (ci-après les « <strong>Conditions d’utilisation</strong> ») ci-dessous de Forum économique international des Amériques Inc., société dont le siège social est situé au 620-606 rue Cathcart (H3B1K9), dans la ville de Montréal, province du Québec, au Canada (ci-après « <strong>FEIA</strong> »).", "FEIA opère le présent site web (ci-après « <strong>Plateforme</strong> ») et les pages de média social, compte, site internet, réseau ou toute application contenue dans ceux-ci conçues et gérées par le FEIA (ci-après le « <strong>Média social</strong> » ou les « <strong>Médias sociaux</strong> »).", "En décidant d’utiliser la Plateforme et les services du FEIA, l’utilisateur, entendu comme l’utilisateur final ou l’organisation que vous représentez ou pour laquelle vous travaillez (ci-après l’« <strong>Utilisateur</strong> » ou les « <strong>Utilisateurs</strong> ») accepte toutes les Conditions d’utilisation indiquées ci-dessous qui régissent le contenu et l’utilisation de la Plateforme, ainsi que la politique de protection des renseignements personnels figurant à la suite des Conditions d’utilisation du FEIA. ", "Ces Conditions d’utilisation ont pour effet de lier juridiquement l’Utilisateur et le FEIA (ci-après les « <strong>Parties</strong> »). Les Parties sont en droit d’invoquer les présentes Conditions d’utilisation et de prendre toutes les mesures utiles et nécessaires pour les faire respecter.", "Si l’Utilisateur n’accepte pas les présentes Conditions d’utilisation ou, selon le cas, les Conditions d’utilisation telles que modifiées de temps à autres, il ne doit pas, ou ne doit plus, utiliser la Plateforme. ", "Les termes définis dans les présentes Conditions d’utilisation sont utilisés dans la politique de protection des renseignements personnels et les conditions générales de vente (les Conditions d’utilisation, la politique de protection des renseignements personnels et les conditions générales de vente sont ci-après désignées les « <strong>Mentions légales</strong> ») du FEIA. Nous vous recommandons d’en prendre connaissance.", {
                type: "title",
                text: "ACCÈS ET UTILISATION DE LA PLATEFORME"
            }, "Si vous naviguez sur la Plateforme, cela signifie que vous avez lu, compris et accepté les Conditions d’utilisation.", "La Plateforme est accessible depuis n’importe quel outil informatique (ordinateur, cellulaire intelligent, tablette, etc.) et sur tous les navigateurs.", "Pour une utilisation optimale, nous préconisons l’utilisation des navigateurs suivants : Google Chrome, Firefox, Safari, Microsoft Edge.", "La Plateforme est destinée à un public professionnel. La Plateforme n’est pas destinée à un public de consommateurs. En acceptant les Conditions d’utilisation, vous déclarez et garantissez que vous le faites à titre de professionnel ou commercial. En utilisant la Plateforme, vous garantissez que vous le faites à titre professionnel ou commercial plutôt qu’à titre de consommateur ou pour des fins personnelles.", {
                type: "title",
                text: "LE SERVICE"
            }, "La Plateforme est accessible en tout temps. Il peut arriver que la Plateforme soit temporairement indisponible en cas de mises à jour ou de problèmes techniques. Le FEIA n’est pas responsable en cas d’interruption de service ou de mise à jour. Le FEIA essaie d’effectuer les mises à jour lorsque l’affluence des visites sur la Plateforme est à son plus bas.", "Le FEIA ne garantit pas que la Plateforme, ou toute partie de celle-ci, fonctionnera sur du matériel informatique ou des périphériques particuliers. Par ailleurs, la Plateforme peut être sujette à des dysfonctionnements et à des retards inhérents à l’utilisation d’Internet et des communications électroniques.", "Le FEIA se réserve le droit d’ajouter, de supprimer et de modifier tout le contenu, ou une partie de celui-ci, sur la Plateforme, à l’exception du contenu propre à l’Utilisateur. FEIA ne peut pas être tenue responsable des fautes, des erreurs typographiques et des bogues. Chaque Utilisateur créé dans le système est propriétaire du contenu de son compte. Le FEIA ne supprime rien à moins qu’un Utilisateur n’en fasse la demande.", "Chaque Utilisateur de la Plateforme s’engage, non limitativement, à ne pas : ", {
                type: "list",
                items: ["Utiliser la Plateforme d`une façon qui pourrait endommager, mettre hors service, surcharger ou compromettre la Plateforme ;", "Perturber la sécurité ou autrement abuser de la Plateforme, ni d`aucun service, ressource des systèmes, serveurs ou réseaux reliés à la Plateforme ou à des sites affiliés ou reliés ou accessibles à travers eux ;", "Déranger ou perturber l'utilisation ou la jouissance de la Plateforme par d`autres services ou des sites affiliés ou reliés ;", "Télécharger, afficher ou autrement transmettre sur la Plateforme un virus ou autre fichier ou programme informatique nuisible, dérangeant ou destructeur ;", "Utiliser un robot, araignée ou autre dispositif automatique ou procédé manuel afin de contrôler ou copier les pages de la Plateforme ou son contenu ;", "Transmettre à travers la Plateforme des courriels, des chaînes de lettres, des messages pourriels ou autres types de courriels de masse non sollicités ; et/ou", "Tenter d'obtenir un accès non autorisé à la Plateforme ou à certaines portions de celle-ci auxquels l`accès est limité. De plus, l’Utilisateur convient qu’il est le seul responsable pour toutes actions et communications entreprises ou transmises à ou pour son compte, et il convient de respecter toutes les lois applicables quant à son utilisation ou ses activités sur la Plateforme."]
            }, {
                type: "title",
                text: "PROPRIÉTÉ INTELLECTUELLE"
            }, "À moins d’indication contraire, tous les droits de propriété intellectuelle (marque de commerce, droit d’auteur, etc.) (ci-après la « <strong>Propriété intellectuelle</strong> ») liés à la Plateforme sont la propriété exclusive du FEIA. Vous ne pouvez ni copier ni utiliser le matériel, la structure, le menu, l’apparence ou les caractères qui apparaissent sur la Plateforme sans le consentement explicite du FEIA.", "Certains noms, mots, titres, expressions, logos, icônes, graphiques, dessins, noms de domaine ou autre, contenus sur la Plateforme ou les Médias sociaux peuvent entre autres être des marques de commerce ou des appellations commerciales, déposées ou non déposées (aux fins de ces Conditions d’utilisation, elles sont toutes désignées par le terme « <strong>Marques de commerce</strong> »). Ces Marques de commerce sont protégées par les lois canadiennes et étrangères applicables aux marques de commerce et sont, selon le cas, la propriété exclusive du FEIA.", "Sans en limiter la portée, les éléments de Propriété intellectuelle appartenant au FEIA incluent, non exhaustivement, les éléments suivants : ", {
                type: "list",
                items: ["Tous les logos, dessins, graphismes, photos, vidéos, marques (déposées ou non), symboles, textes, expressions, mots ainsi que tout le contenu général de la Plateforme ou les Médias sociaux n’étant pas déjà soumis à des droits de Propriété intellectuelle ;", "Tout le contenu proposé par la Plateforme ou les Médias sociaux en libre téléchargement."]
            }, "À moins d’indication contraire, tous les renseignements fournis sur la Plateforme ou les Médias sociaux appartiennent au FEIA, et sont protégés par les lois applicables en l’espèce. De plus, l'information ne peut autrement être copiée, affichée, distribuée, téléchargée, exploitée sans licence, modifiée, publiée, reproduite, réutilisée, vendue, transmise ou utilisée à des fins d'œuvres dérivées, publiques ou commerciales sans une autorisation écrite et expresse de FEIA. L'information est protégée en vertu de la législation sur le droit d'auteur et les marques de commerce du Canada et des pays qui hébergent la Plateforme ou les Médias sociaux.", "Vous pouvez utiliser l'information exclusivement à des fins personnelles sans modification, sous réserve que vous référenciez sur les copies les mentions concernant les droits d'auteur, les avis et attributions de marques de commerce respectifs. Les présentes Conditions d’utilisation vous accordent une autorisation en ce qui a trait à la consultation et à l’affichage sur votre ordinateur, et ce, uniquement à des fins non commerciales, personnelles et éducatives. Cette autorisation n’appartient qu’à vous ; elle ne peut être attribuée ou transférée à une autre personne, ou faire l’objet d’une sous-licence.", "Vous n’êtes pas autorisé à télécharger, copier, enregistrer ou imprimer le contenu de la Plateforme ou des Médias Sociaux. Pour obtenir de plus amples renseignements concernant l’autorisation d’utiliser, de reproduire ou de publier à nouveau toute information présentée sur la Plateforme ou sur les Médias sociaux, l’Utilisateur peut nous contacter à admin@forum-americas.org. Les images ou le texte contenus sur la Plateforme ou les Médias sociaux qui sont téléchargés, copiés, enregistrés ou imprimés sont encore soumis à ces Conditions d’utilisation. L’Utilisateur doit assurer que tous les avis concernant les droits d’auteur et les marques y figurent toujours quelconque contenu présenté sur la Plateforme ou les Médias sociaux.", "Tout téléchargement, retransmission, copie ou modification non autorisés de la Propriété Intellectuelle ou des données contenues sur la Plateforme ou les Médias sociaux peut contrevenir aux lois incluant celles relatives aux marques de commerce ou aux droits d'auteur, et pourrait exposer l'Utilisateur à des poursuites judiciaires.", "Le contenu de la Plateforme ou les Médias sociaux peut être modifié en tout temps sans préavis. Pour obtenir de plus amples renseignements concernant l’interdiction d’utiliser, de reproduire ou de publier à nouveau toute information présentée sur la Plateforme, veuillez nous contacter à admin@forum-americas.org.", "Nulle disposition des présentes ne doit être interprétée comme conférant une licence ou un droit quelconque à l’Utilisateur en vertu des lois concernant les droits d'auteur ou les marques de commerce.", "Sous réserve des lois applicables, l’importation, la création, la soumission ou le stockage de contenu par l’Utilisateur confère à FEIA une licence non-exclusive gratuite, cessible, sous-licenciable, et ce dans le monde entier. Cette licence autorise FEIA à héberger, utiliser, modifier, reproduire, publier, représenter publiquement, créer des œuvres dérivées, ou encore distribuer votre contenu. En vertu de cette licence, FEIA ne peut utiliser votre contenu que dans le cadre de l’exploitation, de la promotion ou de l’amélioration de ses services. Si vous souhaitez mettre fin à cette licence, il vous suffit de supprimer votre compte. Le contenu que vous avez partagé sera cependant toujours visible pour les autres Utilisateurs : vous pouvez en demander la suppression, sous certaines réserves, auprès de la personne ressource, que vous pouvez contacter à admin@forum-americas.org.", {
                type: "title",
                text: "LIENS EXTERNES"
            }, "Il se peut qu'en utilisant un hyperlien, l’Utilisateur quitte la Plateforme ou les Médias sociaux pour accéder à du contenu externe (ci-après les « Sites Internet Externes »). Le FEIA met à disposition des Utilisateurs, en plus de ses propres contenus, des liens vers des Sites Internet Externes uniquement pour raison de convivialité et à titre d’information pour l’Utilisateur. FEIA n’exerce aucun contrôle sur le contenu de ces Sites Internet Externes et n’assume aucune responsabilité quant à leur exactitude, précision, exhaustivité, authenticité, actualité ou adéquation. Toute responsabilité du FEIA est exclue, en particulier concernant les dommages directs ou indirects ou les conséquences liées à l’utilisation des contenus de ces Sites Internet Externes. FEIA n’exerce aucune influence sur les contenus des Sites Internet Externes auxquels renvoient les liens et s’affranchit de toute responsabilité quant à sa sélection rigoureuse, aux contenus des liens externes, en particulier à ceux qui ont été modifiés après la mise en place du lien. FEIA n’exige pas la transmission des informations, ne sélectionne pas les destinataires des informations transmises ni les informations elles-mêmes, et ne les modifie pas. En outre, aucune sauvegarde intermédiaire automatique à court terme de ces liens externes n’est effectuée par FEIA en vertu de la méthode de création et de consultation des liens en vigueur. Par conséquent, la responsabilité du contenu des Sites Internet Externes accessibles via des liens externes incombe exclusivement à leurs exploitants.", "En outre, FEIA ne peut nullement garantir l’absence de violation de quelconque loi, incluant l’absence de violation des droits d’auteur ou des marques de commerce ou des droits de tiers par ces Sites Internet Externes ou leur contenu, ni l’absence de virus ou d’autres composantes nuisibles.", "Aucune garantie n’est apportée quant à l’authenticité des documents disponibles sur Internet.", {
                type: "title",
                text: "MÉDIAS SOCIAUX "
            }, "Les conditions suivantes s’appliquent lorsque vous accédez à une page de Média social.", {
                type: "subtitle",
                text: "Déclaration générale"
            }, "En utilisant les pages des Médias sociaux et en soumettant un commentaire, une photo, une vidéo ou tout autre élément, vous (ainsi que votre parent/tuteur légal si vous n’avez pas atteint l’âge de majorité dans la province ou le territoire où vous résidez) acceptez d’être lié par les Mentions légales du FEIA ainsi que les Conditions d’utilisation des fournisseurs tiers des Médias sociaux, et de vous y conformer. Vous consentez également à ce que FEIA copie, édite, publie, traduise et distribue votre commentaire, photo, vidéo ou autre élément publiés sur un Média social, et ce, sans contrepartie.", {
                type: "subtitle",
                text: "Conditions d’utilisation des Médias sociaux"
            }, "Certains des commentaires et d’autres éléments affichés sur les pages de Médias sociaux pourraient ne pas représenter les opinions de FEIA. Ainsi, vous acceptez de ne pas publier ou soumettre de renseignements, de publications, de liens ou tout autre élément de toutes sortes sur les pages de Médias sociaux qui entrent dans l’une des catégories décrites ci-dessous, et ce, en regard de FEIA :", {
                type: "list",
                items: ["Tout contenu diffamatoire, injurieux, contrefait, obscène, trompeur, illégal ;", "Tout contenu qui viole de toute autre façon les droits (y compris ceux liés à la protection des renseignements personnels) d’autrui ;", "Tout contenu comportant de la publicité ;", "Des documents promotionnels ou toute forme de sollicitations indésirables ;", "Tout contenu dont l’origine ou la source est falsifiée ;", "Tout renseignement financier ou personnel, à propos de vous ou d’une autre personne ; et", "Toute information que FEIA jugerait en contravention avec les Mentions légales."]
            }, "Tout renseignement, message, lien ou élément que FEIA considère comme appartenant à l’une des catégories ci-dessus sera supprimé immédiatement, et ce sans responsabilité envers FEIA.", "Par ailleurs, FEIA n’assume pas la responsabilité de filtrer les messages publiés sur les Médias sociaux.", "FEIA décline toute responsabilité en ce qui a trait aux entités qui détiennent ou exploitent des Médias sociaux, notamment pour toute perte ou tout dommage direct ou indirect découlant de toute mesure ou décision prise par vous ou par une autre personne relativement à l’utilisation de sites web de Médias sociaux.", {
                type: "title",
                text: "AVIS DE NON-RESPONSABILITÉ, EXCLUSION DE GARANTIE ET INDEMNISATION"
            }, "FEIA ne garantit pas l’exactitude, l’intégralité, la qualité, la pertinence ni le contenu de l’information présente sur sa Plateforme. Cette information est fournie « telle quelle », sans garantie ni condition que ce soit, expresse ou implicite, y compris, entre autres, les conditions et garanties implicites à l’égard de la valeur commerciale et de la pertinence pour un but donné, sauf dans les territoires qui n’autorisent pas l’exclusion de garanties.", "FEIA n’est pas responsable du contenu déposé sur la Plateforme par les Utilisateurs et des dommages pouvant en résulter. Chaque Utilisateur est responsable du contenu qu’il échange sur la Plateforme et ne peut utiliser la Plateforme à des fins contraires aux lois applicables au Québec et au Canada.", "Sous réserve des lois applicables, FEIA ne pourra être tenue responsable de tous dommages directs, indirects, spéciaux, accessoires et consécutifs, ou de tout autre dommage quel qu’il soit, entre autres les pertes de revenus, de profits ou d’avantages économiques anticipés découlant de l’utilisation ou de l’impossibilité d’utiliser la Plateforme, les renseignements, documents et logiciels qui s’y trouvent, avec leur contenu, même si FEIA a été prévenu de la possibilité de tels dommages ou même si ces dommages peuvent être prévus de façon raisonnable.", "À titre d'Utilisateur, vous indemniserez FEIA, et, le cas échéant, ses administrateurs, ses dirigeants, actionnaires, associés, employés, agents, consultants et autres intervenants de FEIA, et les dégagez de toute responsabilité pour l`ensemble des réclamations, responsabilités, pertes et frais (y compris les frais juridiques) attribuables à l’utilisation de la Plateforme et/ou à la violation de ces Conditions d’utilisation, que cette infraction soit de vous ou d’un quelconque tiers utilisateur de votre compte.", "Vous ne pouvez pas utiliser ou exporter l'information, ni aucune copie ou adaptation de l'information en contravention des lois ou des règlements applicables.", {
                type: "title",
                text: "MODIFICATION DE CES CONDITIONS "
            }, "Nous mettons occasionnellement à jour ces Conditions d’utilisation. L’utilisation continue de la Plateforme constitue l’accord de l’Utilisateur quant à ces Conditions d’Utilisation ainsi qu’à ses mises à jour.", {
                type: "title",
                text: "INTERPRÉTATION"
            }, "Les intitulés des articles qui précèdent sont insérés à titre de référence seulement et n’affecteront pas la construction ou l’interprétation des dispositions des présentes Conditions d’utilisation.", "Chaque fois que le contexte l’exige, tout mot écrit au singulier comprend aussi le pluriel et vice-versa ; tout mot écrit au genre masculin comprend aussi le genre féminin et vice-versa.", {
                type: "title",
                text: "PERSONNE RESSOURCE"
            }, "Si vous avez des questions ou commentaires concernant tout contenu de la Plateforme, veuillez nous contacter à admin@forum-americas.org."]
        }
          , uo = {
            title: "PROTECTION DES RENSEIGNEMENTS PERSONNELS",
            update: "Dernière mise à jour effectuée le 15 mai 2023.",
            meta: {
                title: "Politique de confidentialité"
            },
            wp: "false",
            content_static: [{
                type: "title",
                text: "INTRODUCTION"
            }, "Face aux nouveaux enjeux et dangers relatifs à la préservation de la sécurité des renseignements personnels découlant des affaires en ligne, il est nécessaire de porter une attention particulière à la protection de la vie privée. C’est pourquoi le Forum économique international des Amériques (ci-après « FEIA ») se préoccupe sérieusement du caractère privé de vos renseignements personnels et nous nous engageons à respecter la confidentialité des informations que nous collectons. ", "FEIA s’engage à respecter, conformément la présente politique de protection des renseignements personnels (ci-après la « <strong>Politique</strong> ») et les lois applicables et en vigueur au Canada et au Québec, les obligations concernant la collecte et le traitement de vos informations personnelles et confidentielles obtenues dans le cadre de l’exploitation de son entreprise, afin que chacun puisse bénéficier du respect de sa vie privée.", "Dans ce cadre, FEIA souhaite s’assurer de l’exactitude, de la sécurité et de la confidentialité de vos renseignements personnels, et à ne pas recueillir, utiliser ou communiquer vos renseignements personnels autrement qu’en conformité avec cette Politique et ces lois applicables.", "La Politique décrit les renseignements que FEIA peut recueillir dans le cadre de ses activités, auprès de ses Utilisateurs.", "La Politique décrit aussi, entre autres, la façon dont FEIA collecte, traite, conserve vos informations, les fins auxquelles elles sont recueillies, l’utilisation qui en est faite et les circonstances dans lesquelles elles peuvent être transmises à des tiers, le cas échéant. La Politique vous explique vos droits en matière de collecte, d’utilisation et de communication de vos informations personnelles. ", {
                type: "title",
                text: "PORTÉE DE LA POLITIQUE "
            }, "Nous récoltons vos renseignements personnels dans le cadre de notre mission, qui consiste à organiser des événements au cours desquels des chefs d’État et de gouvernement, des membres du secteur privé et de la société civile, des dirigeants syndicaux et académiques afin de discuter des grands enjeux économiques internationaux. Nous mettons à votre disposition sur notre Plateforme l’information et les contenus relatifs aux événements.", "Lorsque l’Utilisateur navigue sur la Plateforme ou s’abonne à nos publications par courriel, il accepte les modalités et conditions de la présente Politique. ", "Vous acceptez que vos renseignements personnels recueillis lors de remplissage de tout formulaire en ligne afin, notamment, de prendre contact, de télécharger du contenu sur la Plateforme, ou de rendre d’autres services liés aux produits, soient transmis au personnel concerné et autorisé du FEIA. Cette dernière ne communiquera qu’aux tiers dont la participation est strictement nécessaire à la livraison des Produits et/ou à l’entretien de notre relation commerciale avec vous, le cas échéant, que les renseignements nécessaires à ces fins (les tiers susmentionnés pouvant être ci-après collectivement désignés les « <strong>Prestataires tiers</strong> »).", "En fournissant à FEIA vos renseignements personnels, vous l’autorisez à les utiliser et à les communiquer aux Prestataires tiers, le cas échéant, dans le cadre de la livraison des produits, de la gestion de notre relation contractuelle, de notre relation commerciale avec vous, et cela conformément à la présente Politique et tel qu’autorisé ou requis par la loi, ainsi qu’implicitement, si cela est indiqué par les circonstances.", "Par ailleurs, FEIA sollicitera votre autorisation avant d’utiliser vos renseignements personnels à des fins autres que celles visées par votre consentement initial donné en vertu de la Politique.", "Enfin, vous pouvez retirer votre consentement à tout moment, sous réserve de restrictions juridiques et contractuelles et d’un préavis raisonnable. Sachez cependant que sans votre consentement, FEIA pourrait ne plus être en mesure de vous fournir ou de pouvoir continuer à vous fournir certains des services ou renseignements qui pourraient vous être utiles.", "Si vous fournissez à FEIA ou à ses Prestataires tiers des renseignements personnels concernant une autre personne physique ou morale, vous vous engagez à détenir l’autorisation nécessaire pour le faire et/ou que vous avez obtenu tous les consentements nécessaires de la part de ce tiers afin de nous permettre de recueillir, d’utiliser et de communiquer ses renseignements personnels aux fins établies dans la présente Politique.", "Pour retirer votre consentement ou ne plus recevoir de communication électronique de notre part, veuillez écrire à l’adresse courriel suivante : admin@forum-americas.org.", {
                type: "title",
                text: "COLLECTE DES RENSEIGNEMENTS PERSONNELS"
            }, "Un renseignement personnel est une information associée spécifiquement à une personne physique et qui peut servir à l’identifier, soit en tant que telle, soit en l’agençant avec d’autres renseignements détenus par FEIA pourrait avoir accès. Une information rendue anonyme ou ayant été agencée pour ne plus pouvoir être utilisée pour identifier un individu en particulier ne constitue pas un renseignement personnel. Par exemple, l’adresse postale du bureau d’un individu n’est pas un renseignement personnel en soi, sauf lorsqu’il est mentionné avec un autre renseignement à son sujet, ou lorsque sa seule mention révélerait un renseignement personnel le concernant.", "FEIA peut obtenir auprès de l’Utilisateur des renseignements personnels lorsqu’il sauvegarde des renseignements personnels sur la Plateforme ou, le cas échéant, en transmettant autrement des renseignements personnels, notamment en créant un compte d’Utilisateur et en choisissant un mot de passe, en ouvrant une session en tant qu’Utilisateur inscrit à la Plateforme, en lançant une recherche de produit, en demandant un service, en fournissant des renseignements dans son compte, en communiquant avec nous par téléphone, par courriel ou autrement, ou encore en remplissant un formulaire pour participer à un concours, à une demande d’inventaire, à une promotion ou à un sondage. En remplissant un tel formulaire, vous nous autorisez à recueillir vos renseignements personnels.", "Nous collectons les renseignements suivants auprès de l’Utilisateur, lors de son inscription : ", {
                type: "list",
                items: ["Les noms et prénoms ;", "Le numéro de téléphone ;", "L'adresse personnelle ;", "L'adresse courriel ;", "Le nom de l'entreprise ; et", "Le titre au sein de l'entreprise."]
            }, "De façon générale, nous sommes également susceptibles de connaître votre localisation, votre adresse IP et des données concernant votre utilisation de la Plateforme et tout autre renseignement permettant de vous fournir nos produits de la façon la plus adéquate qui soit.", "Les renseignements de l’Utilisateur sont également collectés par le biais de l’interaction pouvant s’établir entre l’Utilisateur et la Plateforme et peuvent être utilisés pour les finalités suivantes :", {
                type: "list",
                items: ["Comprendre l'utilisation de la Plateforme par l'Utilisateur ;", "Améliorer la Plateforme ;", "Fournir des services à l'Utilisateur ;", "Gérer les comptes clients ;", "Gérer les relations avec les clients et les relations commerciales ;", "Fournir les renseignements personnels à des partenaires commerciaux ;", "Respecter les lois et réglementations en matière de conformité ;", "Envoyer des infos-lettres ; et", "Envoyer des promotions adaptées aux besoins de l'Utilisateur."]
            }, "Les renseignements personnels de l’Utilisateur ne seront pas conservés au-delà des raisons pour lesquelles ils ont été recueillis. FEIA respecte la période de conservation établie par la Présente politique, laquelle est conforme à la Loi sur la protection des renseignements personnels. La suppression des données a lieu lorsque l’Utilisateur supprime son compte. L’Utilisateur aura alors trente (30) jours pour récupérer ses données, à défaut de quoi FEIA les supprimera définitivement. ", "FEIA peut également compiler sous forme de listes vos noms et adresses de correspondance à des fins philanthropiques, statistiques anonymisées ou d’étude de marché. Si vous ne désirez pas que vos noms et adresses de correspondance soient compilés à ces fins, veuillez communiquer avec nous en écrivant à l’adresse courriel suivante : admin@forum-americas.org.", "La suppression des renseignements personnels a lieu lorsque l’Utilisateur en fait la demande écrite à l’adresse susmentionnée. FEIA se réserve le droit de refuser la demande d’un Utilisateur lorsque ce dernier continue d’utiliser, d’une quelconque façon, les services de FEIA respecte la période de conservation établie par la présente politique, laquelle est conforme à la Loi sur la protection des renseignements personnels dans le secteur privé. Par conséquent, et sauf si le cadre réglementaire en dispose autrement, la suppression des données sera effective trente (30) jours après le traitement de la demande de suppression des renseignements personnels par le responsable de la protection des renseignements personnels.", "La Plateforme est conçue pour une utilisation par des adultes seulement tel qu'entendu dans la province de Québec. FEIA ne collecte pas sciemment des renseignements personnels de la part de personnes de moins de dix-huit (18) ans. La Plateforme n’est pas conçue pour des personnes de moins de dix-huit (18) ans.", "Pour de plus amples renseignements sur la protection de vos renseignements personnels et vos droits afférents, vous pouvez communiquer avec le Commissariat à la protection de la vie privée du Canada ou la Commission d’accès à l’information du Québec.", {
                type: "list",
                items: ["Commissariat à la protection de la vie privée du Canada www.privcom.gc.ca", "Commission d’accès à l’information du Québec www.cai.gouv.qc.ca"]
            }, {
                type: "title",
                text: "FORMULAIRES ET INTERACTIONS"
            }, "FEIA recueille vos renseignements personnels en respectant les exigences légales. Dans la mesure du possible et s’il y a lieu, nous recueillons vos renseignements personnels directement auprès de vous ou auprès des personnes que vous avez choisies pour nous fournir vos renseignements personnels.", "Les renseignements personnels de l’Utilisateur peuvent être collectés par le biais de formulaires, à savoir :", {
                type: "list",
                items: ["Formulaire d'inscription à la Plateforme ;", "Formulaire de commande ;", "Formulaire de mise à jour du profil utilisateur ;", "Autorisation d'accès de l'utilisateur à ses informations ;", "Formulaire de contact ; et", "Formulaire d'assistance."]
            }, "Vos renseignements personnels de base, tels que vos courriel, nom, prénom, et numéro de téléphone, peuvent aussi être recueillis sur notre Plateforme, notamment par courriel.", {
                type: "title",
                text: "INFORMATION PUBLICITAIRE"
            }, "FEIA communiquera avec vous uniquement si vous le souhaitez. ", "Si l’Utilisateur n’est pas abonné à notre infolettre, n’a pas de relation commerciale avec FEIA ni n’a jamais participé à l’un de nos événements, il ne recevra aucun courriel de la part de FEIA, sans y avoir préalablement consenti.", "Si vous préférez ne pas recevoir d’information publicitaire de notre part ou si vous ne souhaitez pas que nous utilisions vos renseignements personnels pour rehausser votre expérience en tant qu’Utilisateur, veuillez-nous le faire savoir en communiquant avec nous au contact indiqué à la section 'Droit d’opposition et de retrait' ci-dessous.", "N’oubliez pas d’indiquer votre nom au complet et l’adresse électronique que vous avez utilisés lorsque vous vous êtes inscrit ou lorsque vous avez fait un achat auprès de nous. Il se peut qu’il puisse y avoir un délai de traitement pour une demande envoyée par courriel ou par la poste et que vous continuiez entre-temps à recevoir des communications de la part du FEIA. ", {
                type: "title",
                text: "LOIS ANTI-POURRIEL"
            }, "FEIA se conforme aux exigences de la Loi canadienne Anti-Pourriel (LCAP).", "L’Utilisateur comprend qu’il peut consentir expressément ou tacitement à recevoir des messages de la part de FEIA.", "Le consentement expresse est le consentement demandé à l’Utilisateur, consentement qui doit être énoncé en termes simples et clairs, et doit inclure les fins auxquels le consentement est sollicité, les renseignements réglementaires permettant d’identifier la personne qui sollicite le consentement et, s’il est sollicité au nom d’une autre personne, les renseignements réglementaires permettant d’identifier celle-ci ; ainsi que tout autre renseignement précisé par les règlements pris en vertu de cette loi.", "L’Utilisateur comprend qu’il donne son consentement tacite lors des relations d’affaires en cours ou des relations privées en cours ; lorsque l’Utilisateur publie son adresse électronique sans mentionner qu’il ne désire pas recevoir de messages électroniques commerciaux non-sollicités ; ou lorsque le message est envoyé dans les autres circonstances prévues par les règlements pris en vertu de cette loi.", {
                type: "list",
                items: ["Pour les fins de cette Politique, relations d’affaires en cours réfère aux relations commerciales établies entre deux personnes telles qu’un achat ou un la participation à l’un des événements organisés par le FEIA au cours de deux ans précédant la date d’envoi du message ; un investissement ou le troc d’une chose ou d’un service; tout contrat en vigueur ou venu à échéance au cours de cette période ; ou une demande au cours des six mois précédant la date d’envoi du message.", "Pour les fins de cette Politique, relation privée en cours s’entend des relations entre deux personnes autres que les relations d’affaires, telles qu’un don ou un cadeau, un travail effectué à titre de bénévole ; et d’une adhésion, au sens de règlements ; le tout au cours des deux précédant la date d’envoi du message."]
            }, "Pour vous désinscrire de notre liste d’envoi de communications électroniques, il vous suffit de nous contacter à admin@forum-americas.org.", {
                type: "title",
                text: "PROTECTION CONTRE LA FRAUDE ET LE VOL DE VOS RENSEIGNEMENTS PERSONNELS"
            }, "FEIA s’engage en tout temps à respecter les lois et règlements applicables à son activité et à prendre toutes les mesures utiles et nécessaires afin de détecter et prévenir la négligence, la fraude et le vol de vos informations personnelles. Toutefois, bien que FEIA prenne des précautions, FEIA ne peut garantir qu’aucun cas de fraude ou de vol de vos renseignements personnels ne peut avoir lieu.", "FEIA tient un registre des incidents de confidentialité à jour et prendra contact avec tout Utilisateur dont les renseignements personnels seraient l’objet d’un tel incident et présentant un risque de préjudice sérieux.", {
                type: "title",
                text: "PUBLICITÉ TIERCE AFFICHÉE SUR NOTRE PLATEFORME"
            }, "Vous pouvez éventuellement trouver de la publicité tierce affichée sur notre Plateforme. Nous n’autorisons pas des tiers à recueillir vos renseignements personnels sur notre Plateforme sans votre consentement.", "FEIA interdit et n’est pas responsable de la revente ou de l’utilisation par des tiers des « opt-in » obtenus à travers la Plateforme par ces tiers. Si vous avez accepté de partager vos coordonnées à des organisations partenaires, alors, nous les leur partagerons.", "Nous ne vendons ni ne louons vos renseignements personnels sans votre consentement.", {
                type: "title",
                text: "SERVICES TIERS "
            }, "FEIA pourra utiliser, dans le cadre de sa prestation de service et/ou la gestion de son activité et de sa Plateforme, des services tiers. En aucun cas FEIA n’est responsable de tout préjudice pouvant provenir de ces services tiers. ", "Pour connaitre les conditions d’utilisation de ces services, nous invitons l’Utilisateur à consulter leur site web respectif. ", {
                type: "title",
                text: "DONNÉES ÉCHANGÉES AUTOMATIQUEMENT"
            }, "Grâce aux fichiers témoins (ci-après les « <strong>Cookies</strong> »), nous recueillons certaines informations lors d’échanges entre votre ordinateur et notre serveur. Les Cookies sont des fichiers créés par un site Web qui permettent d’enregistrer des informations relatives à la navigation de votre ordinateur sur le site. Ils sont stockés automatiquement sur vos appareils électroniques, vous permettent de vous connecter à la Plateforme lors d’utilisations ultérieures et permettent à FEIA de personnaliser la Plateforme.", "Il s’agit principalement des informations suivantes : ", {
                type: "list",
                items: ["Nom de domaine ;", "Adresse IP ;", "Historique de navigation ;", "Langue de l'Utilisateur ; et", "Emplacement de l'Utilisateur."]
            }, "La plupart des informations transmises automatiquement ne permettent pas de connaître l’identité de l’Utilisateur. Elles ne sont recueillies qu’en raison d’exigences technologiques inhérentes à la navigation sur Internet. La plupart des navigateurs acceptent automatiquement les Cookies, mais il est généralement possible de modifier ce comportement. Cependant, si l’Utilisateur choisit de refuser les Cookies, il ne pourra peut-être pas s’identifier, ni utiliser certaines fonctions de la Plateforme.", "Le recours à de telles informations nous permet d’améliorer le service, de personnaliser l’expérience de l’Utilisateur et de faire un meilleur suivi de votre utilisation antérieure.", "Outre les méthodes décrites ci-dessus, nous pouvons aussi recueillir des renseignements au moyen de Cookies ou de technologies similaires notamment lors de vos visites sur notre Plateforme. Ces méthodes nous permettent de recueillir divers types de renseignements, y compris les pages que vous visitez, les courriels que vous lisez ainsi que d’autres renseignements.", "Ces informations servent également à :", {
                type: "list",
                items: ["Identifier l'Utilisateur ;", "Inscrire l'Utilisateur, notamment à un évènement ;", "Traiter les demandes et les commandes de l'Utilisateur et répondre à ses questions ;", "Rester en contact avec l'Utilisateur et lui fournir en permanence un service personnalisé ;", "Communiquer avec l'Utilisateur (par courriel, par la poste ou autrement) et lui faire parvenir du matériel publicitaire ou de l'information supplémentaire sur les événements, services, sondages, concours, promotions et offres spéciales ;", "En savoir plus sur les préférences d'achat de l'Utilisateur ;", "Développer de nouveaux produits et services ; et", "Effectuer des études de marché et des recherches sur le rendement afin d'évaluer le service à la clientèle, de mesurer le rendement, de rehausser l'expérience procurée à l'Utilisateur et améliorer les produits."]
            }, "Ces Cookies sont multiples, certains expirent lorsque l’Utilisateur ferme son navigateur et n’ont plus d’effet alors que d’autres peuvent être conservés. En tout temps, l’Utilisateur peut désactiver les Cookies. Dans cette éventualité, FEIA ne garantit pas un fonctionnement optimal de la Plateforme.", "Il est aussi possible d’interdire l’enregistrement de Cookies en configurant votre logiciel de navigation Internet. Toutefois, si vous choisissez cette dernière option, il se peut que vous ne soyez pas en mesure de profiter de l’ensemble de la Plateforme.", {
                type: "title",
                text: "COMMUNICATIONS INTERNATIONALES"
            }, "Dans certaines situations il se pourrait que les renseignements personnels de l’Utilisateur transitent par des serveurs à l’extérieur du Canada.", "Il se peut aussi que FEIA communique vos renseignements personnels à des tierces parties situées à l’extérieur du Québec, notamment dans l’Union Européenne, et détenus par des sociétés situées dans les territoires mentionnés ci-avant et soumises à leur législation. ", "L’Utilisateur reconnaît et dégage le FEIA de toute responsabilité des conséquences d’un tel transfert. ", "FEIA s’engage à ne pas communiquer vos renseignements personnels avec des tiers situés dans des juridictions qui n’offrent pas un niveau de protection des renseignements personnels similaire à celui du Québec.", {
                type: "title",
                text: "PARTAGE DES RENSEIGNEMENTS PERSONNELS"
            }, "FEIA peut partager dans certaines circonstances les renseignements personnels collectés de l’Utilisateur. Les situations où les renseignements personnels peuvent être partagés sont le partage aux partenaires de l'entreprise, le partage aux commanditaires et/ou annonceurs et l'application de la loi ou de demandes légales.", "L’Utilisateur comprend que FEIA peut en tout temps partager ses renseignements personnels lors d’une cession partielle ou totale de l’activité à un tiers. Dans un tel cas, les renseignements cédés en tant qu’actifs de FEIA seront soumis aux mêmes garanties que celles de la présente Politique. ", "FEIA peut également re-publier ou re-partager publiquement des renseignements permettant de vous identifier lorsque vous publiez du contenu en relation avec FEIA sur des Médias sociaux. De plus, il se peut qu’en cliquant sur un lien externe situé sur la Plateforme, vous accédiez à des sites internet externes qui possèdent leur propre politique de protection des renseignements personnels. Il est donc avisé que vous les consultiez, car vous y serez soumis.", "Si l’Utilisateur ne souhaite pas que ses renseignements personnels soient communiqués à des tiers ou des partenaires, il lui est possible de s’y opposer à tout moment, comme mentionné dans la section 'Droit d’opposition et de retrait' suivante.", "FEIA peut, dans les cas suivants, communiquer exceptionnellement les renseignements personnels de l’Utilisateur sans son consentement :", {
                type: "list",
                items: ["En cas d’obligation légale, notamment lorsqu’une ordonnance d’un Tribunal oblige FEIA à communiquer les renseignements personnels de l’Utilisateur.", "Lorsqu’il est impossible d’obtenir le consentement de l’Utilisateur et que les lois sur la protection de la vie privée permettent à FEIA de communiquer ces renseignements personnels. C’est notamment le cas lorsque la protection de l’intérêt public l’exige. "]
            }, {
                type: "title",
                text: "DROIT D’OPPOSITION ET DE RETRAIT"
            }, "Nous nous engageons à offrir à l’Utilisateur un droit d’opposition et de retrait quant à ses renseignements personnels. ", "Le droit d’opposition s’entend comme étant la possibilité offerte aux internautes de refuser que leurs renseignements personnels soient utilisés à certaines fins mentionnées lors de la collecte. ", "Le droit de retrait s’entend comme étant la possibilité offerte aux internautes de demander à ce que leurs renseignements personnels ne figurent plus, par exemple, dans une liste de diffusion. ", "Conformément à la section suivante, l’Utilisateur est également en droit de demander d’avoir accès aux renseignements personnels que nous avons recueillis à son sujet et de les corriger au besoin, ainsi que d’exercer son droit d’opposition ou son droit de retrait, en s’adressant au responsable de la protection des renseignements personnels, dont il trouvera les coordonnées à la section 'Personne-ressource' ci-dessous.", {
                type: "title",
                text: "ACCÈS À VOS RENSEIGNEMENTS PERSONNELS "
            }, "Outre les cas de partages mentionnés dans cette Politique, vos renseignements personnels recueillis par FEIA en vertu des présentes seront accessibles seulement par les employés autorisés et concernés de FEIA. ", "FEIA, sous réserve de certaines exceptions, pourra vous informer des renseignements personnels qui vous concernent, de l’utilisation qui en est faite et du fait qu’ils ont été communiqués à des Prestataires tiers. Vous pourrez également avoir accès à ces renseignements pour toute modification ou suppression.", "Votre demande d’accès doit être faite par écrit et envoyée selon la procédure prévue dans la présente section et dans la section 'Personne ressource' ci-dessous.", "FEIA accusera réception de votre demande par écrit et pourra vous demander de lui confirmer votre identité avant de vous fournir ces renseignements. En principe, l’accès à ces renseignements sera fourni gratuitement, mais, si vous demandez une copie ou une transmission de vos renseignements, nous pourrions exiger des frais raisonnables. FEIA vous informera du montant à l’avance et vous donnera la possibilité de retirer votre demande. FEIA vous donnera accès à vos renseignements dans les trente (30) jours suivant la réception de votre demande ou vous fournira un avis écrit pour vous aviser qu’un délai supplémentaire est nécessaire pour répondre à votre demande.", "Dans certains cas, nous pourrions être incapables de vous donner accès aux renseignements vous concernant, en totalité ou en partie. Si nous en sommes incapables ou si la loi ne nous le permet pas, nous vous fournirons une explication et indiquerons les autres mesures qui sont à votre disposition.", {
                type: "title",
                text: "SÉCURITÉ"
            }, "Les renseignements personnels que FEIA collecte sont conservés dans un environnement sécurisé. FEIA a adopté des mesures appropriées afin de préserver la confidentialité des renseignements personnels et de les protéger contre la perte ou le vol, ainsi que l’accès, la communication, la reproduction, l’utilisation ou la modification non autorisés, en tenant compte, notamment, de leur sensibilité et des fins auxquelles ils sont employés. De plus, FEIA exige que chaque employé, mandataire ou représentant de FEIA respecte la présente Politique.", "Pour assurer la sécurité des renseignements personnels de l’Utilisateur, FEIA a recours, entre autres, aux mesures suivantes :", {
                type: "list",
                items: ["Protocole SSL (Secure Sockets Layers) ;", "Accès sécurisé aux locaux ;", "Accès protégé aux serveurs et aux ordinateurs ;", "Pare-feu ;", "Utilisation de réseaux de données protégés avec mot de passe ;", "Ententes de confidentialité avec les employés ;", "Politiques de protection des renseignements personnels à l'interne ;", "Procédures de protection des données personnelles ;", "Mise à jour courante des mesures de sécurité ; et", "Communications électroniques cryptées et sécurisées."]
            }, "FEIA s’engage ainsi à maintenir un haut degré de sécurité en intégrant les dernières innovations technologiques permettant d’assurer la confidentialité des transactions de l’Utilisateur afin d’assurer la protection de ses données personnelles et éviter qu’elles ne soient consultées, utilisées ou divulguées sans autorisation. FEIA s’engage à tenir un registre des incidents de confidentialité.", "Toutefois, comme aucun mécanisme n’offre une sécurité maximale, une part de risque est toujours présente lorsqu’on utilise Internet pour transmettre des renseignements personnels. Si un mot de passe est utilisé pour protéger le compte de l’Utilisateur et ses informations personnelles, il est de sa responsabilité de faire en sorte qu’il reste confidentiel. ", "En cas d’incident de confidentialité impliquant les renseignements personnels d’un Utilisateur détenus par FEIA, FEIA avisera l’Utilisateur concerné et la Commission d’accès à l’information du Québec de tout incident de confidentialité présentant un risque de préjudice sérieux.", {
                type: "title",
                text: "LANGUE FRANÇAISE ET ANGLAISE"
            }, "En cas de problème de définition ou d’interprétation entre les versions française et anglaise de ces Conditions d’utilisation, la version française prévaudra.", {
                type: "title",
                text: "DROIT APPLICABLE ET TRIBUNAUX COMPÉTENTS"
            }, "La Plateforme et son contenu sont gérés par FEIA à partir de ses bureaux situés dans la province de Québec au Canada. La Plateforme, les Médias sociaux et leur contenu, les présentes Mentions légales et l’utilisation qu’en fait l’Utilisateur sont tous régis par les lois du Québec et du Canada qui sont applicables, sans donner effet à quelque principe que ce soit relatif au conflit de lois. ", "Vous acceptez que l'ensemble des questions et des litiges concernant la Plateforme les Médias sociaux et l’utilisation de ceux-ci soient d’abord portés devant un médiateur et, en l’absence de compromis, tranchés par les tribunaux de Montréal.", {
                type: "title",
                text: "PERSONNE-RESSOURCE"
            }, "Pour toute question au sujet du traitement ou à la mise à jour de vos renseignements personnels ou pour nous faire part de toute préoccupation à cet égard, veuillez communiquer avec nous par le biais de l’adresse courriel suivante : admin@forum-americas.org. La responsable de la protection des renseignements personnels prendra contact avec vous dans les trente (30) jours suivant la réception de votre courriel.", {
                type: "title",
                text: "INTERPRÉTATION"
            }, "La Présente Politique est régie par les lois québécoises et canadiennes applicables, incluant la Loi sur la protection des renseignements personnels dans le secteur privé du Canada. Ces lois s’appliquent sans donner effet à quelque principe que ce soit relatif au conflit de lois. ", "Chaque fois que le contexte l’exige, tout mot écrit au singulier comprend aussi le pluriel et vice-versa ; tout mot écrit au genre masculin comprend aussi le genre féminin et vice-versa.", {
                type: "title",
                text: "DIVISIBILITÉ"
            }, "Chaque disposition de la présente Politique forme un tout distinct de sorte que toute décision d’un tribunal à l’effet que l’une des dispositions de la présente Politique est nulle ou non exécutoire n’affecte aucunement la validité des autres dispositions de la présente Politique ou encore leur caractère exécutoire.  ", {
                type: "title",
                text: "MODIFICATION DE CETTE POLITIQUE "
            }, "Nous mettons occasionnellement à jour cette Politique. L’utilisation continue de la Plateforme constitue l’accord de l’Utilisateur quant à cette Politique de confidentialité ainsi qu’à ses mises à jour. ", "Nous tenterons, dans la mesure du possible, d’informer les Utilisateurs de tout changement apporté à la Politique. Il incombe cependant à l’Utilisateur de l’examiner régulièrement afin d’être informé des changements qui y sont apportés. "]
        }
          , mo = {
            name: "Toronto Global Forum",
            shortName: "Toronto",
            description: "Le Toronto Global Forum a été lancé en 2006 et rassemble des leaders d’opinion internationaux issus du monde des affaires, du gouvernement et de la société civile pour discuter des principaux défis, et des opportunités qui en découlent, auxquels l’économie mondiale est actuellement confrontée.",
            thumbnail: "/images/events/toronto/thumbnail-toronto.jpg",
            link: "https://www.torontoglobalforum.com/",
            header: {
                content: "Le Toronto Global Forum (TGF) a été lancé en 2006 et rassemble des leaders d’opinion internationaux issus du monde des affaires, du gouvernement et de la société civile pour discuter des principaux défis, et des opportunités qui en découlent, auxquels l’économie mondiale est actuellement confrontée."
            },
            bullets: {
                bullet1: {
                    number: "17ème",
                    label: "Édition"
                },
                bullet2: {
                    number: "2 500+",
                    label: "Participants"
                },
                bullet3: {
                    number: "140+",
                    label: "Conférenciers"
                },
                bullet4: {
                    number: "65+",
                    label: "Pays Représentés"
                }
            },
            about: {
                title: "Notre objectif",
                content: "Le Toronto Global Forum sert de plateforme où les organisations et les institutions peuvent se rencontrer en se concentrant sur les partenariats potentiels, les opportunités d’investissement et les collaborations futures. Alors que les pays et les industries cherchent des moyens d’améliorer la résilience économique et environnementale et de favoriser le développement sociétal, la conférence vise à explorer ces sujets dans une optique internationale."
            },
            next: {
                title: "Fostering Economic Resilience",
                content: "En cette période de grande incertitude dans le monde entier, la conférence examinera comment nous pouvons nous adapter afin d'encourager l'innovation et la résilience au vu des actualités mondiales et du climat économique actuel. Rejoignez des dirigeants et des décideurs du monde entier pour trois jours de discussions dynamiques sur les sujets clés de notre époque, tout en profitant d’une variété d’opportunités de réseautage, y compris de déjeuners et de réceptions."
            },
            gallery: {
                title: "Galerie de photos",
                index: [{
                    title: "16ème édition — Charting a new economy",
                    images: ["/images/events/toronto/gallery/16th-toronto-001.jpg", "/images/events/toronto/gallery/16th-toronto-002.jpg", "/images/events/toronto/gallery/16th-toronto-003.jpg", "/images/events/toronto/gallery/16th-toronto-004.jpg", "/images/events/toronto/gallery/16th-toronto-005.jpg", "/images/events/toronto/gallery/16th-toronto-006.jpg", "/images/events/toronto/gallery/16th-toronto-007.jpg", "/images/events/toronto/gallery/16th-toronto-008.jpg", "/images/events/toronto/gallery/16th-toronto-009.jpg"]
                }]
            },
            board: {
                uptitle: "À propos",
                title: "Conseil aviseur",
                content: "Les membres de la direction du Toronto Global Forum travaillent en étroite collaboration avec un groupe d’individus rigoureusement sélectionnés qui forment notre comité aviseur. Tous les membres du comité aviseur du Toronto Global Forum ont été soigneusement désignés pour leurs connaissances approfondies et leur expérience dans leurs domaines respectifs."
            },
            boardIndex: {
                chairmens: {
                    title: "Président",
                    index: [{
                        name: "John M. Beck",
                        title: "",
                        info: "Founder and Chairman at Aecon & and Chairman of the Advisory Board at the Toronto Global Forum",
                        image: "/images/boards/toronto/John-M-Beck.png"
                    }]
                },
                members: {
                    title: "Membres",
                    index: [{
                        name: "Bertrand Badré",
                        info: "Chief Executive Officer and Founder, Blue Orange Capital",
                        image: "/images/boards/toronto/Bertrand-Badre.jpg"
                    }, {
                        name: "Dan Barclay",
                        info: "Chief Executive Officer & Group Head, BMO Capital Markets",
                        image: "/images/boards/toronto/Barclay-Dan.png"
                    }, {
                        name: "Christiane Bergevin",
                        info: "President, Bergevin Capital and Past Chair of the Board, Canadian Chamber of Commerce",
                        image: "/images/boards/toronto/Christiane-Bergevin.png"
                    }, {
                        name: "Stefanie Crosby",
                        info: "President and Chief Visionary Officer, Triumspear International",
                        image: "/images/boards/toronto/Crosby-Stefanie.png"
                    }, {
                        name: "Janet De Silva",
                        info: "President and Chief Executive Officer, Toronto Region Board of Trade",
                        image: "/images/boards/toronto/Janet-De-Silva.jpg"
                    }, {
                        name: "Craig D'Souza",
                        info: "Vice President of Global Security, Intelligence, Protective Intelligence, Investigations & Protective Services, Facebook",
                        image: "/images/boards/toronto/Craig-DSouza.png"
                    }, {
                        name: "Mairead Lavery",
                        info: "President and Chief Executive Officer, Export Development Canada (EDC)",
                        image: "/images/boards/toronto/Lavery-Mairead.png"
                    }, {
                        name: "Joseph S. Mancinelli",
                        info: "International Vice President and Regional Manager of Central and Eastern Canada, Labourers International Union of North America (LiUNA)",
                        image: "/images/boards/toronto/Joseph-S-Mancinelli.jpg"
                    }, {
                        name: "Allan O'Dette",
                        info: "Canadian Business Leader and former Chief Executive Officer, Ontario Medical Association",
                        image: "/images/boards/toronto/odette-allan-2016.png"
                    }, {
                        name: "Benoit Parent",
                        info: "Vice-President, Power Generation Business and Nuclear Operations, Cummins Sales and Service",
                        image: "/images/boards/toronto/benoit-parent.jpg"
                    }, {
                        name: "Neil Pakey",
                        info: "President & CEO, Nieuport Aviation",
                        image: "/images/boards/toronto/Neil_Packey.jpg"
                    }, {
                        name: "Lisa Raitt",
                        info: "Vice-Chair, Global Investment Banking, CIBC Capital Markets",
                        image: "/images/boards/toronto/Raitt-Lisa.jpg"
                    }, {
                        name: "Nicholas Rémillard",
                        info: "Chief Executive Officer, International Economic Forum of the Americas (IEFA)",
                        image: "/images/boards/toronto/Nicholas-Rémillard.jpg"
                    }, {
                        name: "Dimitri Soudas",
                        info: "Chairman, Letho Resources; Vice-President, Groupe Selection, Co-Founder Kids Inc",
                        image: "/images/boards/toronto/Dimitri-Soudas.png"
                    }, {
                        name: "Jeffrey Steiner",
                        info: "Founder and Owner, New Franchise Media",
                        image: "/images/boards/toronto/Jeffrey-Steiner.jpg"
                    }, {
                        name: "Kenneth Tanenbaum",
                        info: "Chairman, Kilmer Developments; and Vice-Chairman, Kilmer Van Nostrand (KVN)",
                        image: "/images/boards/toronto/tanenbaum-ken.jpg"
                    }, {
                        name: "Douglas E. Turnbull",
                        info: "Vice-Chairman and Country Head, Canada",
                        image: "/images/boards/toronto/turnbull-douglas-2016.jpg"
                    }, {
                        name: "Sonja Volpe",
                        info: "President and Chief Executive Officer, BNP Paribas Canada",
                        image: "/images/boards/toronto/Volpe-Sonja.png"
                    }, {
                        name: "Geoffrey A. Wilson",
                        info: "Canadian Business Leader and former President and Chief Executive Officer, PortsToronto",
                        image: "/images/boards/toronto/wilson-geoff.jpg"
                    }, {
                        name: "Paul Zed",
                        info: "National Counsel, McCarthy Tetrault",
                        image: "/images/boards/toronto/zed-paul.png"
                    }]
                }
            }
        }
          , po = {
            name: "World Strategic Forum",
            shortName: "Toronto",
            description: "Le World Strategic Forum a été créé en 2011 et se tient chaque année à Miami, accueillant des participants du monde entier. Le WSF rassemble des décideurs de toutes les sphères de la société pour discuter des problèmes les plus urgents de notre époque.",
            thumbnail: "/images/events/miami/thumbnail-miami.jpg",
            link: "https://www.worldstrategicforum.com/",
            header: {
                content: "Le World Strategic Forum a été créé en 2011 et se tient chaque année à Miami, accueillant des participants du monde entier. Le WSF rassemble des décideurs de toutes les sphères de la société pour discuter des problèmes les plus urgents de notre époque."
            },
            bullets: {
                bullet1: {
                    number: "12ème",
                    label: "Édition"
                },
                bullet2: {
                    number: "1 000+",
                    label: "Participants"
                },
                bullet3: {
                    number: "70+",
                    label: "Conférenciers"
                },
                bullet4: {
                    number: "35+",
                    label: "Pays Représentés"
                }
            },
            about: {
                title: "Notre objectif",
                content: "La mission du WSF est de relever les principaux défis actuels en matière d’entreprise et de gouvernance, tout en favorisant une meilleure compréhension des opportunités et des défis en jeu pour les Amériques au sein du marché mondial. Les thèmes centraux du WSF tournent autour de l’économie mondiale, de la finance, de la technologie, du commerce, de l’énergie, de l’infrastructure, de l’investissement et de la planification de la succession d’entreprise."
            },
            next: {
                title: "Mastering The New Economy",
                content: "Le monde évolue à grande vitesse, entraînant de nouvelles tendances et avancées émergentes, et de nombreux défis. L'édition 2023 du WSF examinera les façons dont nous pouvons innover, nous adapter et réussir au sein de la nouvelle économie mondiale. Rejoignez-nous pour des discussions enrichissantes et des opportunités de réseautage uniques les 6 et 7 novembre, lorsque nous réunirons des décideurs et des leaders internationaux autour du thème : « Mastering the New Economy »."
            },
            gallery: {
                title: "Galerie de photos",
                index: [{
                    title: "11ème édition — Investing in Trust",
                    images: ["/images/events/miami/gallery/11th-miami-001.jpg", "/images/events/miami/gallery/11th-miami-002.jpg", "/images/events/miami/gallery/11th-miami-003.jpg", "/images/events/miami/gallery/11th-miami-004.jpg", "/images/events/miami/gallery/11th-miami-005.jpg", "/images/events/miami/gallery/11th-miami-006.jpg", "/images/events/miami/gallery/11th-miami-007.jpg", "/images/events/miami/gallery/11th-miami-008.jpg", "/images/events/miami/gallery/11th-miami-009.jpg", "/images/events/miami/gallery/11th-miami-010.jpg", "/images/events/miami/gallery/11th-miami-011.jpg", "/images/events/miami/gallery/11th-miami-012.jpg", "/images/events/miami/gallery/11th-miami-013.jpg", "/images/events/miami/gallery/11th-miami-014.jpg", "/images/events/miami/gallery/11th-miami-015.jpg", "/images/events/miami/gallery/11th-miami-016.jpg", "/images/events/miami/gallery/11th-miami-017.jpg", "/images/events/miami/gallery/11th-miami-018.jpg", "/images/events/miami/gallery/11th-miami-019.jpg", "/images/events/miami/gallery/11th-miami-020.jpg", "/images/events/miami/gallery/11th-miami-021.jpg"]
                }]
            }
        }
          , go = {
            name: "Conférence de Paris",
            shortName: "Paris",
            description: "Lancée en 2017, la Conférence de Paris rassemble des décideurs du monde des affaires, des gouvernements et de la société civile afin de promouvoir l’échange d’idées et de perspectives autour des grands enjeux actuels.",
            thumbnail: "/images/events/paris/thumbnail-paris.jpg",
            link: "https://www.conferencedeparis.com/",
            header: {
                content: "Lancée en 2017, la Conférence de Paris rassemble des décideurs du monde des affaires, des gouvernements et de la société civile afin de promouvoir l’échange d’idées et de perspectives autour des grands enjeux actuels."
            },
            bullets: {
                bullet1: {
                    number: "13ème",
                    label: "Édition"
                },
                bullet2: {
                    number: "1 400+",
                    label: "Participants"
                },
                bullet3: {
                    number: "70+",
                    label: "Conférenciers"
                },
                bullet4: {
                    number: "75+",
                    label: "Pays Représentés"
                }
            },
            about: {
                title: "Notre objectif",
                content: "Cet événement de plusieurs jours encourage les dirigeants à partager leurs connaissances et leur compréhension des questions économiques, sociales et environnementales mondiales afin de collaborer et de relever collectivement ces défis. Principal événement européen annuel du FEIA, la Conférence de Paris vise à favoriser le commerce international entre l’Europe et les Amériques, tout en encourageant des relations mondiales plus vastes qui mèneraient à des changements positifs."
            },
            next: {
                title: "Bridging The Divide",
                content: "L'édition de cette année réunira des dirigeants internationaux pour se concerter et redéfinir l'ordre mondial actuel et développer de nouveaux objectifs en termes de commerce et d'investissement. La conférence, qui se tiendra à l'OCDE à Paris les 28 et 29 novembre 2023, comprendra des panels de discussion, ainsi que diverses opportunités de réseautage, telles que des déjeuners et des réceptions, afin d'encourager la mise en relation et la collaboration entre les participants."
            },
            gallery: {
                title: "Galerie de photos",
                index: [{
                    title: "12ème édition",
                    images: ["/images/events/paris/gallery/12th-paris-001.jpg", "/images/events/paris/gallery/12th-paris-002.jpg", "/images/events/paris/gallery/12th-paris-003.jpg", "/images/events/paris/gallery/12th-paris-004.jpg", "/images/events/paris/gallery/12th-paris-005.jpg", "/images/events/paris/gallery/12th-paris-006.jpg", "/images/events/paris/gallery/12th-paris-007.jpg", "/images/events/paris/gallery/12th-paris-008.jpg", "/images/events/paris/gallery/12th-paris-009.jpg"]
                }]
            },
            board: {
                uptitle: "À propos",
                title: "Bureau des gouverneurs et Comité aviseur",
                content: "Les membres de la direction de la Conférence de Paris travaillent en étroite collaboration avec un groupe d'individus rigoureusement sélectionnés qui forment notre bureau des gouverneurs et notre comité aviseur. Tous les membres ont été soigneusement désignés pour leurs connaissances approfondies et leur expérience dans leurs domaines respectifs.",
                buttonGovernors: "Bureau des gouverneurs",
                buttonAdvisory: "Comité aviseur"
            },
            governorsIndex: {
                title: "Bureau des gouverneurs",
                chairmens: {
                    title: "Coprésidents",
                    index: [{
                        name: "Paul Desmarais Jr.",
                        info: "Président, Power Corporation of Canada (PCC)",
                        image: "/images/boards/paris/paul_desmarais_jr.png"
                    }, {
                        name: "Jean-Pierre Clamadieu",
                        info: "Président, ENGIE",
                        image: "/images/boards/paris/Clamadieu-Jean-Pierre.jpg"
                    }]
                },
                members: {
                    title: "Gouverneurs",
                    index: [{
                        name: "Gil Rémillard ",
                        info: "Président-fondateur, Forum économique international des Amériques (FEIA)",
                        image: "/images/boards/paris/Gil_Remillard.jpg"
                    }, {
                        name: "Darius Adamczyk",
                        info: "Président-directeur général, Honeywell",
                        image: "/images/boards/paris/Darius-Adamczyk.jpg"
                    }, {
                        name: "Jean-Paul Agon",
                        info: "Président, L'Oréal",
                        image: "/images/boards/paris/Agon-Jean-Paul.jpg"
                    }, {
                        name: "Hélène Desmarais",
                        info: "Présidente exécutive, IVADO and Chair of the Board HEC Montréal",
                        image: "/images/boards/paris/desmarais-helene.jpg"
                    }, {
                        name: "Kristina M. Johnson",
                        info: "Présidente, The Ohio State University",
                        image: "/images/boards/paris/Johnson-Kristina.jpg"
                    }, {
                        name: "Jean Lemierre",
                        info: "Président, BNP Paribas",
                        image: "/images/boards/paris/Jean-Lemierre.jpg"
                    }, {
                        name: "Shunichi Miyanaga",
                        info: "Président, Mitsubishi Heavy Industries",
                        image: "/images/boards/paris/Miyanaga-Shunichi.jpg"
                    }, {
                        name: "Laurence Parisot",
                        info: "Présidente, Citigroup",
                        image: "/images/boards/paris/Parisot-Laurence.jpg"
                    }, {
                        name: "Muriel Pénicaud",
                        info: "Ambassadrice, Représentante permanente de la France auprès de l’OCDE",
                        image: "/images/boards/paris/Penicaud-Muriel.jpg"
                    }, {
                        name: "Patrick Pouyanné",
                        info: "Président-directeur général, TotalEnergies",
                        image: "/images/boards/paris/Pouyanne-Patrick.jpg"
                    }, {
                        name: "Ian Gallienne",
                        info: "Directeur général, GBL",
                        image: "/images/boards/paris/Gallienne-Ian.jpg"
                    }, {
                        name: "Alain Fuchs",
                        info: "Président, PSL University",
                        image: "/images/boards/paris/Fuchs-Alain.jpg"
                    }, {
                        name: "Mathias Cormann",
                        info: "Secrétaire général, Organisation de coopération et de développement économiques (OCDE)",
                        image: "/images/boards/paris/Cormann-Mathias.jpg"
                    }, {
                        name: "James P. Gorman",
                        info: "Président-directeur général, Morgan Stanley",
                        image: "/images/boards/paris/James-Gorman.jpg"
                    }, {
                        name: "Amélie de Montchalin",
                        info: "Représentante permanente de la France auprès de l’OCDE",
                        image: "/images/boards/paris/amelie.jpg"
                    }]
                },
                secretaries: {
                    title: "Secrétaire",
                    index: [{
                        name: "Bernard Spitz",
                        info: "Président du Pôle International et Europe, MEDEF",
                        image: "/images/boards/paris/Spitz-Bernard.jpg"
                    }]
                }
            },
            advisoryIndex: {
                title: "Comité aviseur",
                chairmen: {
                    title: "Présidente",
                    index: [{
                        name: "Gwenaelle Avice-Huet",
                        info: "Directrice générale, Stratégie et Développement durable, Schneider Electric",
                        image: "/images/boards/paris/Avice-Huet-Gwenaelle-cropped.jpg"
                    }]
                },
                members: {
                    title: "Membres",
                    index: [{
                        name: "Nicolas Blain",
                        info: "Chef du Pôle Relations Internationales et Affaires européennes, Groupe RATP",
                        image: "/images/boards/paris/blain-nicolas.png"
                    }, {
                        name: "Didier Le Bret",
                        info: "Diplomate et associé, ESL",
                        image: "/images/boards/paris/Le-Bret-Didier.png"
                    }, {
                        name: "Eric Meyer",
                        info: "Directeur, France, RBC Marchés des Capitaux",
                        image: "/images/boards/paris/meyer-eric.png"
                    }, {
                        name: "Dorothée Pineau",
                        info: "Conseillère du Président, Mouvement des entreprises de France (MEDEF)",
                        image: "/images/team/DorothéePineau.jpg"
                    }, {
                        name: "Bertrand Richard",
                        info: "Conseiller principal, Spencer Stuart",
                        image: "/images/boards/paris/richard.jpg"
                    }]
                }
            }
        }
          , ho = {
            name: "Conférence de Montréal",
            shortName: "Montréal",
            description: "La Conférence de Montréal (CDM) a été lancée par le FEIA en 1994 et réunit des décideurs de toutes les sphères de la société pour aborder les plus grands enjeux actuels.",
            thumbnail: "/images/events/montreal/thumbnail-montreal.jpg",
            link: "https://www.laconferencedemontreal.com/",
            header: {
                content: "La Conférence de Montréal (CDM) a été lancée par le FEIA en 1994 et réunit des décideurs de toutes les sphères de la société pour aborder les plus grands enjeux actuels."
            },
            bullets: {
                bullet1: {
                    number: "30ème",
                    label: "Édition"
                },
                bullet2: {
                    number: "2 100+",
                    label: "Participants"
                },
                bullet3: {
                    number: "130+",
                    label: "Conférenciers"
                },
                bullet4: {
                    number: "40+",
                    label: "Pays Représentés"
                }
            },
            about: {
                title: "Notre objectif",
                content: "Au cours des trois dernières décennies, la CDM a évolué pour devenir un événement de renommée internationale, auquel participent des décideurs des mondes gouvernemental et économique, qui se réunissent afin de discuter de divers sujets tels que l’économie, le leadership mondial et l’innovation. La localisation de l’événement, au cœur du Canada francophone, offre au public un rare aperçu socio-politique et économique qui couvre à la fois une perspective nord-américaine et européenne, tout en mettant en avant les meilleures pratiques du monde entier."
            },
            next: {
                title: "",
                content: ""
            },
            gallery: {
                title: "Galerie de photos",
                edition29: {
                    title: "29ème édition — Réussir dans un monde en transition",
                    index: [{
                        image: "/images/events/toronto/gallery/16th-toronto-001.jpg"
                    }]
                }
            },
            board: {
                uptitle: "À propos",
                title: "Bureau des gouverneurs",
                content: "Les membres de la direction de la Conférence de Montréal travaillent en étroite collaboration avec un groupe d’individus rigoureusement sélectionnés qui forment notre bureau des gouverneurs. Tous les membres ont été soigneusement désignés pour leurs connaissances approfondies et leur expérience dans leurs domaines respectifs."
            },
            boardIndex: {
                chairmen: {
                    title: "Présidents",
                    index: [{
                        name: "Paul Desmarais Jr.",
                        title: "Président du conseil, Power Corporation of Canada (PCC)",
                        image: "/images/boards/montreal/paul_desmarais_jr.png"
                    }, {
                        name: "Gil Rémillard",
                        title: "Président fondateur, International Economic Forum of the Americas",
                        image: "/images/boards/montreal/Gil_Remillard-2292_HR.jpg"
                    }]
                },
                members: {
                    title: "Membres",
                    index: [{
                        name: "Luis Almagro Lemes",
                        info: "Secrétaire général, Organization of American States (OAS)",
                        image: "/images/boards/montreal/almagro-luis.jpg"
                    }, {
                        name: "Joseph J. Andrew",
                        info: "Président mondial, Dentons",
                        image: "/images/boards/montreal/joseph-j-andrew.jpg"
                    }, {
                        name: "Audrey Azoulay",
                        info: "Directrice générale, Organisation des Nations unies pour l'éducation, la science et la culture (UNESCO)",
                        image: "/images/boards/montreal/audrey-azoulay.png"
                    }, {
                        name: "Perrin Beatty",
                        info: "Président et chef de la direction, La Chambre de commerce du Canada",
                        image: "/images/boards/montreal/perrin-beatty.png"
                    }, {
                        name: "David M. Cote",
                        info: "Président exécutif, Vertiv Holdings",
                        image: "/images/boards/montreal/david-m-cote.jpg"
                    }, {
                        name: "Hélène Desmarais",
                        info: "Présidente exécutive, IVADO Labs et présidente du conseil, HEC Montréal",
                        image: "/images/boards/montreal/desmarais-helene.jpg"
                    }, {
                        name: "Jacques Delors",
                        info: "Président fondateur, Notre Europe et Ancien président, Commission européenne",
                        image: "/images/boards/montreal/jacques-delors.jpg"
                    }, {
                        name: "Orit Gadiesh",
                        info: "Présidente, Bain & Company",
                        image: "/images/boards/montreal/orit-gadiesh.png"
                    }, {
                        name: "Glenn Hutchins",
                        info: "Coprésident du conseil, The Brookings Institution; président du conseil, North Island; et cofondateur, Silver Lake",
                        image: "/images/boards/montreal/glenn-hutchins.png"
                    }, {
                        name: "Odile Renaud-Basso",
                        info: "Présidente, Banque européenne pour la reconstruction et le développement (BERD)",
                        image: "/images/boards/montreal/odile-renaud-basso.jpg"
                    }, {
                        name: "Jean-Claude Trichet",
                        info: "Honorary Governor, Bank of France, Former President, European Central Bank, Chairman, Group of Thirty, and Chairman of European Group of the Trilateral Commission Show",
                        image: "/images/boards/montreal/jean-claude trichet.jpg"
                    }]
                }
            },
            archive: {
                title: "Archives"
            },
            events: [{
                edition: "29ème édition",
                title: "Réussir dans un monde en transition",
                link: "https://www.laconferencedemontreal.com/",
                image: "/images/events/montreal/montreal-29th-fr.png"
            }]
        }
          , fo = {
            name: "IEFA LatAm Forum",
            shortName: "Buenos Aires",
            description: "L’IEFA LatAm Forum a tenu sa première édition en 2022. Il s’agit d’une conférence internationale annuelle axée sur le rôle et les opportunités que présente l’Amérique latine dans l’économie mondiale d’aujourd’hui.",
            thumbnail: "/images/events/buenosAires/thumbnail-buenosAires.jpg",
            link: "https://www.latamforum.com/",
            header: {
                content: "L’IEFA LatAm Forum a tenu sa première édition en 2022. Il s’agit d’une conférence internationale annuelle axée sur le rôle et les opportunités que présente l’Amérique latine dans l’économie mondiale d’aujourd’hui."
            },
            bullets: {
                bullet1: {
                    number: "2ème",
                    label: "Édition"
                },
                bullet2: {
                    number: "400+",
                    label: "Participants"
                },
                bullet3: {
                    number: "30+",
                    label: "Conférenciers"
                },
                bullet4: {
                    number: "20+",
                    label: "Pays Représentés"
                }
            },
            about: {
                title: "Notre objectif",
                content: "Cet événement privé, sur invitation uniquement, a été créé comme une plateforme pour discuter du rôle de plus en plus important de l’Amérique latine dans l’économie mondiale d’aujourd’hui. Alors que le monde est à la recherche d’un avenir plus durable et plus résistant, l’IEFA LatAm Forum identifie les organisations est les institutions latino-américaines qui contribuent à la réalisation de cet objectif, à la fois dans la région et dans le monde entier."
            },
            next: {
                title: "2ème édition",
                content: "L'édition 2024 réunira des leaders d'opinion et des décideurs internationaux pour étudier les diverses possibilités qui s'offrent aux Amériques et qui peuvent favoriser la transition mondiale. La conférence, qui se tiendra à l'hôtel Four Seasons de Buenos Aires, en Argentine, comprendra deux jours de panels, de tables rondes, et de réceptions privées, qui offriront aux participants de nombreuses occasions de se rencontrer et d'échanger."
            },
            gallery: {
                title: "Galerie de photos",
                edition11: {
                    title: "11ème édition — Investing in Trust",
                    index: [{
                        image: "/images/events/miami/gallery/12th-miami-001.jpg"
                    }]
                }
            }
        }
          , vo = {
            name: "Phoenix Global Forum",
            shortName: "Phoenix",
            description: "Le Phoenix Global Forum est organisé par le FEIA en association avec Phoenix Sister Cities. En tant que ville à la croissance la plus rapide des États-Unis depuis cinq ans, la région émerge rapidement comme une plaque tournante pour les organisations des secteurs des biosciences, de la technologie, de la durabilité et de la défense ; attirant d'importants investissements extérieurs dans la région et créant un écosystème d'entreprises prometteur.",
            thumbnail: "/images/events/phoenix/thumbnail-phoenix.jpg",
            link: "https://www.phoenixglobalforum.com/",
            header: {
                content: "Le Phoenix Global Forum est organisé par le FEIA en association avec Phoenix Sister Cities. En tant que ville à la croissance la plus rapide des États-Unis depuis cinq ans, la région émerge rapidement comme une plaque tournante pour les organisations des secteurs des biosciences, de la technologie, de la durabilité et de la défense ; attirant d'importants investissements extérieurs dans la région et créant un écosystème d'entreprises prometteur."
            },
            bullets: {
                bullet1: {
                    number: "1",
                    label: "Édition"
                },
                bullet2: {
                    number: "0",
                    label: "Participants"
                },
                bullet3: {
                    number: "0",
                    label: "Conférenciers"
                },
                bullet4: {
                    number: "0",
                    label: "Pays Représentés"
                }
            },
            about: {
                title: "Notre objectif",
                content: "Le Phoenix Global Forum servira de plateforme où les décideurs, les leaders d’opinion et les experts dans leurs domaines respectifs se réuniront pour discuter de l’évolution des besoins de la société dans le contexte des défis mondiaux actuels. Le forum examinera les solutions déjà en cours de développement, tant à Phoenix que dans le monde entier, tout en encourageant l’innovation future par le biais de la connexion et de la collaboration. "
            },
            next: {
                title: "Forging The Future",
                content: "La première édition du Phoenix Global Forum se penchera sur la coopération internationale et l'innovation stratégique nécessaires pour relever les nouveaux défis mondiaux. Des dirigeants du monde des affaires, du gouvernement et du secteur académique se réuniront pour discuter de ces défis et des opportunités qui en découlent et qui peuvent assurer une croissance et une compétitivité continues. Le Phoenix Global Forum aura lieu le 2 mai 2024 à l'hôtel Arizona Biltmore."
            },
            gallery: {
                title: "Galerie de photos",
                edition11: {
                    title: "11ème édition — Investing in Trust",
                    index: [{
                        image: "/images/events/miami/gallery/12th-miami-001.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-002.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-003.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-004.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-005.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-006.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-007.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-008.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-009.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-010.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-011.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-012.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-013.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-014.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-015.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-016.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-017.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-018.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-019.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-020.jpg"
                    }, {
                        image: "/images/events/miami/gallery/12th-miami-021.jpg"
                    }]
                }
            }
        }
          , bo = {
            home: oo,
            common: so,
            events: ro,
            team: lo,
            terms: co,
            privacy: uo,
            toronto: mo,
            miami: po,
            paris: go,
            montreal: ho,
            buenosAires: fo,
            phoenix: vo
        }
          , yo = {
            en: io,
            fr: bo
        }
          , _o = Object.keys(yo)
          , Co = Intl.DateTimeFormat().resolvedOptions().locale.split("-")
          , wo = Object(w["a"])(Co, 1)
          , Eo = wo[0]
          , xo = /forum-ameriques\.org/.test(window.location.host) || /^\/fr\//.test(window.location.pathname)
          , Ao = xo ? "fr" : null
          , Io = _o.includes(Eo) ? Eo : "en"
          , Po = Ao || localStorage.getItem("feia-lang") || Io;
        m["a"].use(Gs["a"]);
        var jo = new Gs["a"]({
            locale: Po,
            messages: yo
        })
          , Fo = function(e) {
            return Object.values(e).reduce((function(e, t) {
                var n = t.id
                  , a = t.slug
                  , i = t.data;
                return Object(h["a"])(Object(h["a"])({}, e), {}, Object(Jt["a"])({}, a, Object(h["a"])(Object(h["a"])({}, i), {}, {
                    id: n
                })))
            }
            ), {})
        }
          , qo = function(e, t, n) {
            return jo.setLocaleMessage(e, Hs()(yo[e], Object(h["a"])(Object(h["a"])({}, Fo(t)), {}, {
                conferences: Fo(n)
            }), (function(e, t) {
                if (Array.isArray(e))
                    return t || e
            }
            )))
        };
        Promise.all([fetch("https://api.forum-americas.org/?rest_route=/wcd/v1/pages").then((function(e) {
            return e.json()
        }
        )), fetch("https://api.forum-americas.org/?rest_route=/wcd/v1/pages&lang=fr").then((function(e) {
            return e.json()
        }
        )), fetch("https://api.forum-americas.org/?rest_route=/wcd/v1/data/conference").then((function(e) {
            return e.json()
        }
        )), fetch("https://api.forum-americas.org/?rest_route=/wcd/v1/data/conference&lang=fr").then((function(e) {
            return e.json()
        }
        ))]).then((function(e) {
            var t = Object(w["a"])(e, 4)
              , n = t[0]
              , a = t[1]
              , i = t[2]
              , s = t[3];
            return qo("en", n, i),
            qo("fr", a, s),
            v.contentLoaded = !0,
            new Gs["a"]({
                locale: Po,
                messages: yo
            })
        }
        ));
        var To = jo;
        m["a"].config.productionTip = !1,
        m["a"].use(Rs),
        m["a"].use(Ts),
        m["a"].use(Ds, {
            scrollEventTarget: window
        }),
        m["a"].use(Bs),
        m["a"].use(g.a, {
            laptop: "min-width: 1200px",
            tablet: "min-width: 765px",
            tabletH: "min-width: 950px"
        }),
        m["a"].use(d["a"]),
        m["a"].use(y),
        new m["a"]({
            render: function(e) {
                return e("RouterView")
            },
            router: As,
            i18n: To
        }).$mount("#app")
    },
    "82bf": function(e, t, n) {
        "use strict";
        var a = n("c60b")
          , i = n.n(a);
        i.a
    },
    "983a": function(e, t, n) {
        "use strict";
        var a = n("446a")
          , i = n.n(a);
        i.a
    },
    c60b: function(e, t, n) {}
});
//# sourceMappingURL=app.c75a952e.js.map

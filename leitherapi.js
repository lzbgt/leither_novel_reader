eval(function(n) {
    "use strict";

    function r(n) {
        var r = [];
        return r[n - 1] = void 0, r
    }

    function u(n, r) {
        return f(n[0] + r[0], n[1] + r[1])
    }

    function t(n, r) {
        var u, t;
        return n[0] == r[0] && n[1] == r[1] ? 0 : (u = 0 > n[1], t = 0 > r[1], u && !t ? -1 : !u && t ? 1 : a(n, r)[1] < 0 ? -1 : 1)
    }

    function f(n, r) {
        var u, t;
        for (r %= 0x10000000000000000, n %= 0x10000000000000000, u = r % un, t = Math.floor(n / un) * un, r = r - u + t, n = n - t + u; 0 > n;) n += un, r -= un;
        for (; n > 4294967295;) n -= un, r += un;
        for (r %= 0x10000000000000000; r > 0x7fffffff00000000;) r -= 0x10000000000000000;
        for (; - 0x8000000000000000 > r;) r += 0x10000000000000000;
        return [n, r]
    }

    function i(n) {
        return n >= 0 ? [n, 0] : [n + un, -un]
    }

    function c(n) {
        return n[0] >= 2147483648 ? ~~Math.max(Math.min(n[0] - un, 2147483647), -2147483648) : ~~Math.max(Math.min(n[0], 2147483647), -2147483648)
    }

    function a(n, r) {
        return f(n[0] - r[0], n[1] - r[1])
    }

    function o(n, r) {
        return n.ab = r, n.cb = 0, n.O = r.length, n
    }

    function e(n) {
        return n.cb >= n.O ? -1 : 255 & n.ab[n.cb++]
    }

    function v(n) {
        return n.ab = r(32), n.O = 0, n
    }

    function s(n) {
        var r = n.ab;
        return r.length = n.O, r
    }

    function g(n, r, u, t) {
        l(r, u, n.ab, n.O, t), n.O += t
    }

    function l(n, r, u, t, f) {
        for (var i = 0; f > i; ++i) u[t + i] = n[r + i]
    }

    function C(n, r, u) {
        var t, f, c, a, o = "",
            v = [];
        for (f = 0; 5 > f; ++f) {
            if (c = e(r), -1 == c) throw Error("truncated input");
            v[f] = c << 24 >> 24
        }
        if (t = F({}), !V(t, v)) throw Error("corrupted input");
        for (f = 0; 64 > f; f += 8) {
            if (c = e(r), -1 == c) throw Error("truncated input");
            c = c.toString(16), 1 == c.length && (c = "0" + c), o = c + "" + o
        }
        /^0+$|^f+$/i.test(o) ? n.M = tn : (a = parseInt(o, 16), n.M = a > 4294967295 ? tn : i(a)), n.S = M(t, r, u, n.M)
    }

    function z(n, r) {
        return n.Y = v({}), C(n, o({}, r), n.Y), n
    }

    function p(n, r, u) {
        var t = n.y - r - 1;
        for (0 > t && (t += n.c); 0 != u; --u) t >= n.c && (t = 0), n.x[n.y++] = n.x[t++], n.y >= n.c && N(n)
    }

    function x(n, u) {
        (null == n.x || n.c != u) && (n.x = r(u)), n.c = u, n.y = 0, n.w = 0
    }

    function N(n) {
        var r = n.y - n.w;
        r && (g(n.T, n.x, n.w, r), n.y >= n.c && (n.y = 0), n.w = n.y)
    }

    function d(n, r) {
        var u = n.y - r - 1;
        return 0 > u && (u += n.c), n.x[u]
    }

    function J(n, r) {
        n.x[n.y++] = r, n.y >= n.c && N(n)
    }

    function L(n) {
        N(n), n.T = null
    }

    function j(n) {
        return n -= 2, 4 > n ? n : 3
    }

    function B(n) {
        return 4 > n ? 0 : 10 > n ? n - 3 : n - 6
    }

    function b(n, r) {
        return n.h = r, n.bb = null, n.V = 1, n
    }

    function k(n) {
        if (!n.V) throw Error("bad state");
        if (n.bb) throw Error("No encoding");
        return h(n), n.V
    }

    function h(n) {
        var r = U(n.h);
        if (-1 == r) throw Error("corrupted input");
        n.$ = tn, n.Z = n.h.d, (r || t(n.h.U, fn) >= 0 && t(n.h.d, n.h.U) >= 0) && (N(n.h.b), L(n.h.b), n.h.a.K = null, n.V = 0)
    }

    function M(n, r, u, t) {
        return n.a.K = r, L(n.b), n.b.T = u, A(n), n.f = 0, n.l = 0, n.Q = 0, n.R = 0, n._ = 0, n.U = t, n.d = fn, n.G = 0, b({}, n)
    }

    function U(n) {
        var r, f, a, o, e, v;
        if (v = c(n.d) & n.P, Q(n.a, n.t, (n.f << 4) + v)) {
            if (Q(n.a, n.E, n.f)) a = 0, Q(n.a, n.r, n.f) ? (Q(n.a, n.u, n.f) ? (Q(n.a, n.s, n.f) ? (f = n._, n._ = n.R) : f = n.R, n.R = n.Q) : f = n.Q, n.Q = n.l, n.l = f) : Q(n.a, n.o, (n.f << 4) + v) || (n.f = 7 > n.f ? 9 : 11, a = 1), a || (a = q(n.n, n.a, v) + 2, n.f = 7 > n.f ? 8 : 11);
            else if (n._ = n.R, n.R = n.Q, n.Q = n.l, a = 2 + q(n.D, n.a, v), n.f = 7 > n.f ? 7 : 10, e = S(n.k[j(a)], n.a), e >= 4) {
                if (o = (e >> 1) - 1, n.l = (2 | 1 & e) << o, 14 > e) n.l += X(n.J, n.l - e - 1, n.a, o);
                else if (n.l += T(n.a, o - 4) << 4, n.l += Y(n.q, n.a), 0 > n.l) return -1 == n.l ? 1 : -1
            } else n.l = e;
            if (t(i(n.l), n.d) >= 0 || n.l >= n.m) return -1;
            p(n.b, n.l, a), n.d = u(n.d, i(a)), n.G = d(n.b, 0)
        } else r = D(n.j, c(n.d), n.G), n.G = 7 > n.f ? E(r, n.a) : R(r, n.a, d(n.b, n.l)), J(n.b, n.G), n.f = B(n.f), n.d = u(n.d, cn);
        return 0
    }

    function F(n) {
        n.b = {}, n.a = {}, n.t = r(192), n.E = r(12), n.r = r(12), n.u = r(12), n.s = r(12), n.o = r(192), n.k = r(4), n.J = r(114), n.q = H({}, 4), n.D = m({}), n.n = m({}), n.j = {};
        for (var u = 0; 4 > u; ++u) n.k[u] = H({}, 6);
        return n
    }

    function A(n) {
        n.b.w = 0, n.b.y = 0, I(n.t), I(n.o), I(n.E), I(n.r), I(n.u), I(n.s), I(n.J), Z(n.j);
        for (var r = 0; 4 > r; ++r) I(n.k[r].z);
        w(n.D), w(n.n), I(n.q.z), K(n.a)
    }

    function V(n, r) {
        var u, t, f, i, c, a, o;
        if (5 > r.length) return 0;
        for (o = 255 & r[0], f = o % 9, a = ~~(o / 9), i = a % 5, c = ~~(a / 5), u = 0, t = 0; 4 > t; ++t) u += (255 & r[1 + t]) << 8 * t;
        return u > 99999999 || !W(n, f, i, c) ? 0 : G(n, u)
    }

    function G(n, r) {
        return 0 > r ? 0 : (n.A != r && (n.A = r, n.m = Math.max(n.A, 1), x(n.b, Math.max(n.m, 4096))), 1)
    }

    function W(n, r, u, t) {
        if (r > 8 || u > 4 || t > 4) return 0;
        P(n.j, u, r);
        var f = 1 << t;
        return O(n.D, f), O(n.n, f), n.P = f - 1, 1
    }

    function O(n, r) {
        for (; r > n.e; ++n.e) n.I[n.e] = H({}, 3), n.H[n.e] = H({}, 3)
    }

    function q(n, r, u) {
        if (!Q(r, n.N, 0)) return S(n.I[u], r);
        var t = 8;
        return t += Q(r, n.N, 1) ? 8 + S(n.L, r) : S(n.H[u], r)
    }

    function m(n) {
        return n.N = r(2), n.I = r(16), n.H = r(16), n.L = H({}, 8), n.e = 0, n
    }

    function w(n) {
        I(n.N);
        for (var r = 0; n.e > r; ++r) I(n.I[r].z), I(n.H[r].z);
        I(n.L.z)
    }

    function P(n, u, t) {
        var f, i;
        if (null == n.F || n.g != t || n.B != u)
            for (n.B = u, n.X = (1 << u) - 1, n.g = t, i = 1 << n.g + n.B, n.F = r(i), f = 0; i > f; ++f) n.F[f] = y({})
    }

    function D(n, r, u) {
        return n.F[((r & n.X) << n.g) + ((255 & u) >>> 8 - n.g)]
    }

    function Z(n) {
        var r, u;
        for (u = 1 << n.g + n.B, r = 0; u > r; ++r) I(n.F[r].v)
    }

    function E(n, r) {
        var u = 1;
        do u = u << 1 | Q(r, n.v, u); while (256 > u);
        return u << 24 >> 24
    }

    function R(n, r, u) {
        var t, f, i = 1;
        do
            if (f = u >> 7 & 1, u <<= 1, t = Q(r, n.v, (1 + f << 8) + i), i = i << 1 | t, f != t) {
                for (; 256 > i;) i = i << 1 | Q(r, n.v, i);
                break
            }
        while (256 > i);
        return i << 24 >> 24
    }

    function y(n) {
        return n.v = r(768), n
    }

    function H(n, u) {
        return n.C = u, n.z = r(1 << u), n
    }

    function S(n, r) {
        var u, t = 1;
        for (u = n.C; 0 != u; --u) t = (t << 1) + Q(r, n.z, t);
        return t - (1 << n.C)
    }

    function Y(n, r) {
        var u, t, f = 1,
            i = 0;
        for (t = 0; n.C > t; ++t) u = Q(r, n.z, f), f <<= 1, f += u, i |= u << t;
        return i
    }

    function X(n, r, u, t) {
        var f, i, c = 1,
            a = 0;
        for (i = 0; t > i; ++i) f = Q(u, n, r + c), c <<= 1, c += f, a |= f << i;
        return a
    }

    function Q(n, r, u) {
        var t, f = r[u];
        return t = (n.i >>> 11) * f, (-2147483648 ^ t) > (-2147483648 ^ n.p) ? (n.i = t, r[u] = f + (2048 - f >>> 5) << 16 >> 16, -16777216 & n.i || (n.p = n.p << 8 | e(n.K), n.i <<= 8), 0) : (n.i -= t, n.p -= t, r[u] = f - (f >>> 5) << 16 >> 16, -16777216 & n.i || (n.p = n.p << 8 | e(n.K), n.i <<= 8), 1)
    }

    function T(n, r) {
        var u, t, f = 0;
        for (u = r; 0 != u; --u) n.i >>>= 1, t = n.p - n.i >>> 31, n.p -= n.i & t - 1, f = f << 1 | 1 - t, -16777216 & n.i || (n.p = n.p << 8 | e(n.K), n.i <<= 8);
        return f
    }

    function K(n) {
        n.p = 0, n.i = -1;
        for (var r = 0; 5 > r; ++r) n.p = n.p << 8 | e(n.K)
    }

    function I(n) {
        for (var r = n.length - 1; r >= 0; --r) n[r] = 1024
    }

    function _(n) {
        for (var r, u, t, f = 0, i = 0, c = n.length, a = [], o = Array(65536); c > f; ++f, ++i) {
            if (r = 255 & n[f], 128 & r)
                if (192 == (224 & r)) {
                    if (f + 1 >= n.length) return n;
                    if (u = 255 & n[++f], 128 != (192 & u)) return n;
                    o[i] = (31 & r) << 6 | 63 & u
                } else {
                    if (224 != (240 & r)) return n;
                    if (f + 2 >= n.length) return n;
                    if (u = 255 & n[++f], 128 != (192 & u)) return n;
                    if (t = 255 & n[++f], 128 != (192 & t)) return n;
                    o[i] = (15 & r) << 12 | (63 & u) << 6 | 63 & t
                } else {
                if (!r) return n;
                o[i] = r
            }
            65535 == i && (a.push(String.fromCharCode.apply(String, o)), i = -1)
        }
        return i > 0 && (o.length = i, a.push(String.fromCharCode.apply(String, o))), a.join("")
    }

    function $(n) {
        return n > 64 && 91 > n ? n - 65 : n > 96 && 123 > n ? n - 71 : n > 47 && 58 > n ? n + 4 : 43 === n ? 62 : 47 === n ? 63 : 0
    }

    function nn(r) {
        for (var u, t, f = r.length, i = 3 * f + 1 >>> 2, c = ("Uint8Array" in n ? new n.Uint8Array(i) : new Array(i)), a = 0, o = 0, e = 0; f > e; e++)
            if (t = 3 & e, a |= $(r.charCodeAt(e)) << 18 - 6 * t, 3 === t || f - e === 1) {
                for (u = 0; 3 > u && i > o; u++, o++) c[o] = a >>> (16 >>> u & 24) & 255;
                a = 0
            }
        return c
    }

    function rn(n) {
        n = nn(n);
        var r = {};
        for (r.d = z({}, n); k(r.d.S););
        return _(s(r.d.Y))
    }
    var un = 4294967296,
        tn = [4294967295, -un],
        fn = [0, 0],
        cn = [1, 0];
    return rn
}(this)("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"));
var api = (function() {
    return function(ip) {
        if (ip.substr(0, 7) == "http://") {
            ip = ip.substr(7);
            i = ip.indexOf("/");
            if (i > 0) {
                ip = ip.substr(0, i);
            }
        }
        return hprose.Client.create("ws://" + ip + "/ws/", ["login", "register",
            "getvar", "act", "setdata", "set", "get", "del", "hmclear", "hset", "hget", "hlen", "hkeys",
            "hgetall", "hmset", "hmget", "exit", "restart", "lpush", "lpop", "rpush", "rpop", "lrange", "zadd", "zrange",
            "sadd", "scard", "sclear", "sdiff", "sinter", "smclear", "smembers", "srem", "sunion",
            "sendmsg", "readmsg", "pullmsg", "invite", "accept", "test", "veni", "sethostip", "proxyget",
            "createinvcode", "getinvcodeinfo", "updateinvcode", "deleteinvcode",
            "setinvtemplate", "getinvtemplate", "getappdownloadkey", "getresbyname"
        ]);
    };
}());

function setLog(isShow) {
    if (isShow) {
        window.debug = {
            log: window.console.log.bind(window.console),
            error: window.console.error.bind(window.console),
            info: window.console.info.bind(window.console),
            warn: window.console.warn.bind(window.console)
        };
    } else {
        var __no_op = function() {};
        window.debug = {
            log: __no_op,
            error: __no_op,
            warn: __no_op,
            info: __no_op
        }
    }
};

function processError(name, err) {
    debug.error(name, err);
}

function PE(name) {
    pe = G.ayFE[name];
    //debug.log("PE:", name, "f:", pe);
    if (pe) {
        debug.log("PE: seted");
        return pe;
    }
    //debug.log("pe return");
    return function(e) {
        debug.log("PE:default mark");
        if (G.ayFE[name]) {
            return G.ayFE[name](e);
        }
        G.ayErr[name] = e; //LeitherErr(e)
        debug.error(name + ":" + e);
    }
}

function errReply() {
    for (var i in G.ayErr) {
        f = G.ayFE[i];
        err = G.ayErr[i];
        if (err != null && f != null) {
            G.ayErr[i] = null;
            debug.log("errReply err:", err);
            f(err);
        }
    }
}

function LeitherErr(err) {
    str = err.toString();
    debug.log(str);
    this.ID = "-1";
    this.Info = str;
    if (str.indexOf("Error: ") != 0) {
        return;
    }
    str = str.substring(6);
    id = str.indexOf(':');
    if (id >= 0) {
        this.ID = str.substring(0, id);
        this.Info = str.substring(id + 1);
    }
    debug.log("id=[", this.ID, "] info=[", this.Info, "]");
}

function setErrFunc(name, f) {
    debug.log("setErrFunc ", name, "f:", f);
    G.ayFE[name] = f;
}

var G = {
    //bidPath : window.location.pathname+"/appID/userID/",
    ayFE: {
        //"login": function (e) {console.error(e);} 
    },
    ayErr: {},
    IPList: [],
    InitFunc: []
}

function PushInitFunc(f) {
    G.InitFunc.push(f);
}

function RunInitFunc() {
    for (i = 0; i < G.InitFunc.length; i++) {
        G.InitFunc[i]();
    }
}

function LeitherIsOK() {
    return G.api != null;
}

function getErr() {}

function setMain() {
    if (G.Running) {
        debug.warn("setMain: app running");
        return;
    }
    if (typeof(InitErrFunc) == "function") {
        InitErrFunc();
    }
    if (typeof(main) == "undefined") {
        console.log("no main funciton")
        return;
    }
    debug.log("main function ok run it")
    G.Main = main;

    if (LeitherIsOK() && G.sid != null) {
        G.Running = true;
        RunInitFunc();
        main();
    } else {
        debug.log("errReply()");
        errReply();
    }
}

function readCacheVar(key, def) {
    //debug.log("readCacheVar k:", key, "def:", def)
    v = localStorage[key];
    if (v) {
        //debug.log("readCacheVar v:", v)
        return JSON.parse(v);
    }
    //debug.log("readCacheVar def:", def)
    if (typeof(def) != "undefined") {
        localStorage[key] = JSON.stringify(def);
    }
    return def;
}

function saveLoginInfo(uid, ppt) {
    debug.log("saveLoginInfo uid:", uid, "ppt:", ppt);
    if (typeof(uid) != "string") {
        uid = "";
    }
    if (typeof(ppt) != "string") {
        ppt = "";
    }
    localStorage[window.location.pathname + "/" + G.AppBid + "/uid"] = JSON.stringify(uid);
    localStorage[window.location.pathname + "/" + G.AppBid + "/ppt"] = JSON.stringify(ppt);
    debug.log("saveLoginInfo end uid:", localStorage[window.location.pathname + "/" + G.AppBid + "/uid"]);
    G.uid = uid;
    G.userppt = ppt;
}

function InitCfg(I) {
    debug.log("InitCfg");
    G.Local = I.Local;
    G.SystemBid = I.SystemBid;
    G.AppBid = I.AppBid;
    G.IPList = readCacheVar(G.AppBid + "/iplist", I.IPList);
    //debug.log(G.IPList)
    G.userppt = readCacheVar(window.location.pathname + "/" + G.AppBid + "/ppt", I.userppt);
    G.AppName = readCacheVar(G.AppBid + "/appname", I.AppName);
    G.uid = readCacheVar(window.location.pathname + "/" + G.AppBid + "/uid", I.userid);
    //debug.log("InitCfg end， uid=", G.uid)
    return true;
}

function InitDb() {
    debug.log("InitDb");
    var future = new hprose.Future();
    var version = version || 2;
    var request = window.indexedDB.open("LeitherApi", version);
    G.ApptbName = G.appBid + "_" + G.AppName;
    debug.log(G.ApptbName);
    request.onerror = function(e) {
        debug.error(e.currentTarget.error.message);
        future.reject(e);
    };
    request.onsuccess = function(e) {
        debug.log("InitDb ok");
        var db = e.target.result;
        G.LeitherDb = db;
        future.resolve(db);
    };
    request.onupgradeneeded = function(e) {
        var db = e.target.result;
        //debug.log(db.objectStoreNames)
        if (!db.objectStoreNames.contains('res')) {
            var store = db.createObjectStore('res', {
                keyPath: "id"
            });
        }
        if (db.objectStoreNames.contains(G.ApptbName)) {
            db.deleteObjectStore(G.ApptbName);
            //var store = db.createObjectStore(G.ApptbName, { keyPath: "id" }); //必须放对象
        }
        debug.log('DB version changed to ' + version);
    };
    return future;
}

function GetDbData(key) {
    var tr = G.LeitherDb.transaction("res", 'readwrite');
    var store = tr.objectStore("res");
    var future = new hprose.Future();
    debug.log('getdbdata ')
    request = store.get(key)
    request.onerror = function(e) {
        future.reject(e)
    };
    request.onsuccess = function(e) {
        future.resolve(e.target.result)
        debug.log('getdbdata2 ', e.target.result)
    };
    return future;
}

function SetDbData(value) {
    var tr = G.LeitherDb.transaction("res", 'readwrite');
    var store = tr.objectStore("res");
    debug.log('setdbdata ')
    var future = new hprose.Future();
    request = store.add(value);
    request.onerror = function(e) {
        debug.log('setdbdata err', e)
        future.reject(e)
    };
    request.onsuccess = function(e) {
        future.resolve(e.target.result)
        debug.log('getdata2 ', e.target.result)
    };
    return future;
}

function RunApp(I, ipnum) {
    setLog(I.Log);
    G.I = I;
    G.appBid = I.AppBid;
    G.Running = false;
    if (I.AppVer) {
        G.AppVer = I.AppVer;
    } else {
        G.AppVer = "last";
    }

    debug.log("RunApp");
    //debug.log("LeitherIsOK:", LeitherIsOK())
    if (ipnum == 0 && !InitCfg(I)) { //读取配置
        return;
    }
    if (G.IPList.length <= ipnum) {
        //后续可改为利用错误机制 tbd
        console.error("iplist.length [", G.IPList.length, "]<ipnum[", ipnum, "]");
        return
    }
    ip = G.IPList[ipnum];
    //debug.log("ip:", G.IPList)
    RunAppByIP(ip);
}

function processManifest(data) {
    debug.log("hget manifest ", data);
    m = JSON.parse(data);
    getList = function(res, ver) {
            if (ver == "last" || ver == "release") {
                ver = res[ver];
            }
            return res.ResFile[ver];
        }
        //debug.log(m[G.AppVer])
    list = getList(m, G.AppVer); //m.ResFile[m.LastVer]
    getFs = function(i) {
        debug.log("getFs", i);
        fs = [];
        for (; i < list.length; i++) {
            Key = list[i];
            debug.log("lookup list", Key);
            if (Key == "") {
                i++;
                break;
            }
            debug.log("push");
            fs.push(LoadJs(Key)
                /*
                (function (key) {
                    var future = new hprose.Future();
                    debug.log("future", key);
                    LoadJsByKey(G.AppBid, key, function () {
                        debug.log("res load ", key);
                        future.resolve(key);
                    }, function () {
                        debug.log("reject ", key);
                        future.reject(key);
                    })
                    return future;
                })(Key)*/
            );
            debug.log("push end");
        }
        debug.log("all");
        var Future = hprose.Future;
        Future.all(fs).then(function(values) {
            debug.log("all promise", values);
            setMain();
            if (i < list.length) {
                getFs(i);
            }
        }, function(e) {
            debug.log(e);
        });
        debug.log("all end");
    }
    getFs(0);
}

function InitApp(stub) {
    debug.log("InitApp");
    var future = new hprose.Future();
    if (G.Local) {
        debug.log("use local file");
        setMain();
        future.resolve();
        return future;
    }

    GetDbData(G.AppName)
        .then(function(manifest) {
            debug.log('getdbdata data = ', manifest)
            if (manifest) {
                debug.log("manifest local");
                processManifest(manifest.data);
                future.resolve();
            } else {
                debug.log("manifest hget", G.AppBid, ",appname:", G.AppName);
                stub.hget("", G.AppBid, "applist", G.AppName)
                    .then(function(data) {
                        debug.log("manifest hget ok");
                        SetDbData({
                            id: G.AppName,
                            data: data,
                            tbname: G.ApptbName
                        })
                        processManifest(data);
                        future.resolve();
                    })
            }
        }, function(e) {
            debug.error(e);
        })
        /*
            manifest = localStorage[G.AppName];
            if (manifest) {
                debug.log("manifest local");
                processManifest(manifest);
                future.resolve();
            } else {
                debug.log("manifest hget", G.AppBid, ",appname:", G.AppName);
                stub.hget("", G.AppBid, "applist", G.AppName)
                .then(function (data) {
                    debug.log("manifest hget ok");
                    localStorage[G.AppName] = data;
                    processManifest(data);
                    future.resolve();
                })
            }*/
    return future;
}

function RunAppByIP(ip) {
    //读取本地配置文件
    //
    if (ip.length > 0) {
        G.currentIP = ip;
    } else {
        ip = G.currentIP;
    }
    G.api = api(ip);
    InitDb()
        .then(function(db) {
            debug.log("hprose ready", db)
            G.api.ready(function(stub) {
                debug.log("hprose ready ok")
                debug.log("G.uid=", G.uid)
                InitApp(stub)
                    .then(function() {
                        debug.log("login")
                        errfunc = PE("login");
                        stub.login(G.uid, G.userppt) //如果没有用户信息，应该进入代码的登录或初始化函数
                            .then(function(reply) {
                                debug.log("login ok")
                                G.sid = reply.sid;
                                G.user = reply.user;
                                if (reply.user != null) {
                                    G.bid = reply.user.id; //for weibo	
                                } else {
                                    G.bid = G.uid;
                                }
                                G.leClient = G.api; //for weibo
                                G.swarm = reply.swarm;
                                debug.log("LeitherIsOK:", LeitherIsOK());
                                debug.log("login ok sid=", reply.sid);
                                debug.log("user= ", reply.user);
                                debug.log("swarm=", reply.swarm);
                                debug.log("appName=", G.AppName);
                                setMain();
                                //同步检查最新版的hprose
                                stub.getresbyname(G.sid, G.SystemBid, "LeitherApi", G.AppVer)
                                    .then(function(data) {
                                        var r = new FileReader();
                                        r.onload = function(e) {
                                            debug.log("leitherApi re get ok");
                                            //                 SetDbData({
                                            //           id:"leitherApi",
                                            //         data:e.target.result
                                            //      })
                                            localStorage["leitherApi"] = e.target.result;
                                        };
                                        r.readAsText(new Blob([data]));
                                    })
                                stub.hget(G.sid, G.AppBid, "applist", G.AppName)
                                    .then(function(data) {
                                        debug.log("manifest re hget ok");
                                        SetDbData({
                                                id: G.AppName,
                                                data: data,
                                                tbname: G.ApptbName
                                            })
                                            //localStorage[G.AppName] = data;
                                    })
                            }, errfunc);
                    });
            }, PE("api.ready"))
        }, PE("InitDb"));
}

function LoadJs(key) {
    var future = new hprose.Future();
    debug.log("load js ", key);
    var script = document.createElement("script");
    script.type = "text/javascript";
    GetDbData(key).then(function(d) {
            if (d) {
                script.textContent = d.data;
                document.getElementsByTagName("head")[0].appendChild(script);
                future.resolve(key);
            } else {
                debug.log("check leither");
                if ((typeof(LeitherIsOK) == "function") && LeitherIsOK()) {
                    debug.log("check leither ok");
                    ff = function(reason) {
                        debug.error(reason);
                        future.reject(key);
                    };
                    G.api.ready(function(stub) {
                        debug.log(" G.api.ready");
                        stub.get("", G.AppBid, key, function(data) {
                            debug.log("get ok  ", data);
                            if (data) {
                                debug.log(" if (data) {");
                                var r = new FileReader();
                                r.onload = function(e) {
                                    //localStorage[key] = e.target.result;
                                    debug.log(" SetDbData");
                                    SetDbData({
                                        id: key,
                                        data: e.target.result,
                                        tbname: G.ApptbName
                                    })
                                    script.textContent = e.target.result;
                                    document.getElementsByTagName("head")[0].appendChild(script);
                                    future.resolve(key);
                                };
                            };
                            r.readAsText(new Blob([data]));
                        }, ff);
                    }, ff);
                } else {
                    debug.error("leither is not ok");
                    future.reject(key);
                }
            }

        }, function(e) {

        })
        /*
        if (localStorage[key]) {      
            script.textContent = localStorage[key];
            document.getElementsByTagName("head")[0].appendChild(script);
            future.resolve(key);
        } else {
            debug.log("check leither");
            if ((typeof (LeitherIsOK) == "function") && LeitherIsOK()) {
                debug.log("check leither ok");
                ff = function (reason) {
                    debug.error(reason);
                    future.reject(key);
                };
                G.api.ready(function (stub) {
                 //debug.log(" G.api.ready");
                    stub.get("", G.AppBid, key, function (data) {
                   // debug.log("get ok  ", key);
                        if (data) {
                            var r = new FileReader();
                            r.onload = function (e) {
                                localStorage[key] = e.target.result;
                                script.textContent = e.target.result;
                                document.getElementsByTagName("head")[0].appendChild(script);
                               future.resolve(key);
                            };
                        };
                        r.readAsText(new Blob([data]));
                    }, ff);
                },ff);
            } else {
                debug.error("leither is not ok");
                future.reject(key);
            }
        }  */
    return future
}
/*
function LoadJsByKey(bid, key, fs, ff) {
    //console.log("loadjsbykey");
    if (localStorage[key]) {
        //console.log("loadjsbykey localStorage key", key);
        var script = document.createElement("script");
        //debug.info(v);
        script.type = "text/javascript";
        script.textContent = localStorage[key];
        document.getElementsByTagName("head")[0].appendChild(script);
        fs();
    } else {
        //console.log("loadjsbykey stub");
        var script = document.createElement("script");
        if ((typeof (LeitherIsOK) == "function") && LeitherIsOK()) {
            G.api.ready(function (stub) {
                stub.get("", bid, key, function (data) {
                    if (data) {
                        var r = new FileReader();
                        r.onload = function (e) {
                            localStorage[key] = e.target.result;
                            script.type = "text/javascript";
                            script.textContent = e.target.result;
                            document.getElementsByTagName("head")[0].appendChild(script);
                            //console.log(script);
                            fs();
                        };
                    };
                    r.readAsText(new Blob([data]));
                }, ff);
            }, function (reason) {
                ff(reason);
                debug.error(reason);
            });
        } else {
            debug.error("leither is not ok");
            ff("leither is not ok");
        }
    }
};
*/
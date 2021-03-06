! function(t, e) {
    "object" == typeof module && module.exports ? (module.exports = e(), module.exports.default = module.exports) : t.timeago = e()
}("undefined" != typeof window ? window : this, function() {
    function t(t) {
        return t instanceof Date ? t : isNaN(t) ? /^\d+$/.test(t) ? new Date(e(t)) : (t = (t || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(t)) : new Date(e(t))
    }

    function e(t) {
        return parseInt(t)
    }

    function n(t, n, r) {
        n = l[n] ? n : l[r] ? r : "en";
        for (var o = 0, i = t < 0 ? 1 : 0, a = t = Math.abs(t); t >= p[o] && o < h; o++) t /= p[o];
        return t = e(t), o *= 2, t > (0 === o ? 9 : 1) && (o += 1), l[n](t, o, a)[i].replace("%s", t)
    }

    function r(e, n) {
        return ((n = n ? t(n) : new Date) - t(e)) / 1e3
    }

    function o(t) {
        for (var e = 1, n = 0, r = Math.abs(t); t >= p[n] && n < h; n++) t /= p[n], e *= p[n];
        return r %= e, r = r ? e - r : e, Math.ceil(r)
    }

    function i(t) {
        return a(t, "data-timeago") || a(t, "datetime")
    }

    function a(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t.attr ? t.attr(e) : void 0
    }

    function u(t, e) {
        return t.setAttribute ? t.setAttribute(m, e) : t.attr ? t.attr(m, e) : void 0
    }

    function c(t, e) {
        this.nowDate = t, this.defaultLocale = e || "en"
    }

    function d(t, e) {
        return new c(t, e)
    }
    var f = "second_minute_hour_day_week_month_year".split("_"),
        s = "秒_分钟_小时_天_周_月_年".split("_"),
        l = {
            en: function(t, e) {
                if (0 === e) return ["just now", "right now"];
                var n = f[parseInt(e / 2)];
                return t > 1 && (n += "s"), [t + " " + n + " ago", "in " + t + " " + n]
            },
            zh_CN: function(t, e) {
                if (0 === e) return ["刚刚", "片刻后"];
                var n = s[parseInt(e / 2)];
                return [t + n + "前", t + n + "后"]
            }
        },
        p = [60, 60, 24, 7, 365 / 7 / 12, 12],
        h = 6,
        m = "data-tid",
        w = {};
    return c.prototype.doRender = function(t, e, i) {
        var a, c = r(e, this.nowDate),
            d = this;
        t.innerHTML = n(c, i, this.defaultLocale), w[a = setTimeout(function() {
            d.doRender(t, e, i), delete w[a]
        }, Math.min(1e3 * o(c), 2147483647))] = 0, u(t, a)
    }, c.prototype.format = function(t, e) {
        return n(r(t, this.nowDate), e, this.defaultLocale)
    }, c.prototype.render = function(t, e) {
        void 0 === t.length && (t = [t]);
        for (var n = 0, r = t.length; n < r; n++) this.doRender(t[n], i(t[n]), e)
    }, c.prototype.setLocale = function(t) {
        this.defaultLocale = t
    }, d.register = function(t, e) {
        l[t] = e
    }, d.cancel = function(t) {
        var e;
        if (t)(e = a(t, m)) && (clearTimeout(e), delete w[e]);
        else {
            for (e in w) clearTimeout(e);
            w = {}
        }
    }, d
});
! function(s) {
    function n(a) {
        if (e[a]) return e[a].exports;
        var t = e[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return s[a].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
    }
    var e = {};
    return n.m = s, n.c = e, n.p = "", n(0)
}([function(s, n, e) {
    for (var a = e(1), t = null, u = a.length - 1; u >= 0; u--) t = a[u], "en" != t && "zh_CN" != t && timeago.register(t, e(2)("./" + t))
}, function(s, n) {
    s.exports = ["ar", "be", "bg", "ca", "da", "de", "el", "en", "en_short", "es", "eu", "fa", "fi", "fr", "he", "hu", "in_BG", "in_HI", "in_ID", "it", "ja", "ko", "ml", "my", "nb_NO", "nl", "nn_NO", "pl", "pt_BR", "ro", "ru", "sv", "ta", "th", "tr", "uk", "vi", "zh_CN", "zh_TW"]
}, function(s, n, e) {
    function a(s) {
        return e(t(s))
    }

    function t(s) {
        return u[s] || function() {
            throw new Error("Cannot find module '" + s + "'.")
        }()
    }
    var u = {
        "./ar": 3,
        "./ar.js": 3,
        "./be": 4,
        "./be.js": 4,
        "./bg": 5,
        "./bg.js": 5,
        "./ca": 6,
        "./ca.js": 6,
        "./da": 7,
        "./da.js": 7,
        "./de": 8,
        "./de.js": 8,
        "./el": 9,
        "./el.js": 9,
        "./en": 10,
        "./en.js": 10,
        "./en_short": 11,
        "./en_short.js": 11,
        "./es": 12,
        "./es.js": 12,
        "./eu": 13,
        "./eu.js": 13,
        "./fa": 14,
        "./fa.js": 14,
        "./fi": 15,
        "./fi.js": 15,
        "./fr": 16,
        "./fr.js": 16,
        "./he": 17,
        "./he.js": 17,
        "./hu": 18,
        "./hu.js": 18,
        "./in_BG": 19,
        "./in_BG.js": 19,
        "./in_HI": 20,
        "./in_HI.js": 20,
        "./in_ID": 21,
        "./in_ID.js": 21,
        "./it": 22,
        "./it.js": 22,
        "./ja": 23,
        "./ja.js": 23,
        "./ko": 24,
        "./ko.js": 24,
        "./locales": 1,
        "./locales.js": 1,
        "./ml": 25,
        "./ml.js": 25,
        "./my": 26,
        "./my.js": 26,
        "./nb_NO": 27,
        "./nb_NO.js": 27,
        "./nl": 28,
        "./nl.js": 28,
        "./nn_NO": 29,
        "./nn_NO.js": 29,
        "./pl": 30,
        "./pl.js": 30,
        "./pt_BR": 31,
        "./pt_BR.js": 31,
        "./ro": 32,
        "./ro.js": 32,
        "./ru": 33,
        "./ru.js": 33,
        "./sv": 34,
        "./sv.js": 34,
        "./ta": 35,
        "./ta.js": 35,
        "./th": 36,
        "./th.js": 36,
        "./tr": 37,
        "./tr.js": 37,
        "./uk": 38,
        "./uk.js": 38,
        "./vi": 39,
        "./vi.js": 39,
        "./zh_CN": 40,
        "./zh_CN.js": 40,
        "./zh_TW": 41,
        "./zh_TW.js": 41
    };
    a.keys = function() {
        return Object.keys(u)
    }, a.resolve = t, s.exports = a, a.id = 2
}, function(s, n) {
    function e(s, n) {
        return n < 3 ? a[s][n - 1] : n >= 3 && n <= 10 ? a[s][2] : a[s][3]
    }
    s.exports = function(s, n) {
        if (0 === n) return ["منذ لحظات", "بعد لحظات"];
        var a = e(Math.floor(n / 2), s);
        return ["منذ " + a, "بعد " + a]
    };
    var a = [
        ["ثانية", "ثانيتين", "%s ثوان", "%s ثانية"],
        ["دقيقة", "دقيقتين", "%s دقائق", "%s دقيقة"],
        ["ساعة", "ساعتين", "%s ساعات", "%s ساعة"],
        ["يوم", "يومين", "%s أيام", "%s يوماً"],
        ["أسبوع", "أسبوعين", "%s أسابيع", "%s أسبوعاً"],
        ["شهر", "شهرين", "%s أشهر", "%s شهراً"],
        ["عام", "عامين", "%s أعوام", "%s عاماً"]
    ]
}, function(s, n) {
    function e(s, n, e, a, t) {
        var u = t % 10,
            i = a;
        return 1 === t ? i = s : 1 === u && t > 20 ? i = n : u > 1 && u < 5 && (t > 20 || t < 10) && (i = e), i
    }
    var a = e.bind(null, "секунду", "%s секунду", "%s секунды", "%s секунд"),
        t = e.bind(null, "хвіліну", "%s хвіліну", "%s хвіліны", "%s хвілін"),
        u = e.bind(null, "гадзіну", "%s гадзіну", "%s гадзіны", "%s гадзін"),
        i = e.bind(null, "дзень", "%s дзень", "%s дні", "%s дзён"),
        r = e.bind(null, "тыдзень", "%s тыдзень", "%s тыдні", "%s тыдняў"),
        o = e.bind(null, "месяц", "%s месяц", "%s месяцы", "%s месяцаў"),
        m = e.bind(null, "год", "%s год", "%s гады", "%s гадоў");
    s.exports = function(s, n) {
        switch (n) {
            case 0:
                return ["толькі што", "праз некалькі секунд"];
            case 1:
                return [a(s) + " таму", "праз " + a(s)];
            case 2:
            case 3:
                return [t(s) + " таму", "праз " + t(s)];
            case 4:
            case 5:
                return [u(s) + " таму", "праз " + u(s)];
            case 6:
            case 7:
                return [i(s) + " таму", "праз " + i(s)];
            case 8:
            case 9:
                return [r(s) + " таму", "праз " + r(s)];
            case 10:
            case 11:
                return [o(s) + " таму", "праз " + o(s)];
            case 12:
            case 13:
                return [m(s) + " таму", "праз " + m(s)];
            default:
                return ["", ""]
        }
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["току що", "съвсем скоро"],
            ["преди %s секунди", "след %s секунди"],
            ["преди 1 минута", "след 1 минута"],
            ["преди %s минути", "след %s минути"],
            ["преди 1 час", "след 1 час"],
            ["преди %s часа", "след %s часа"],
            ["преди 1 ден", "след 1 ден"],
            ["преди %s дни", "след %s дни"],
            ["преди 1 седмица", "след 1 седмица"],
            ["преди %s седмици", "след %s седмици"],
            ["преди 1 месец", "след 1 месец"],
            ["преди %s месеца", "след %s месеца"],
            ["преди 1 година", "след 1 година"],
            ["преди %s години", "след %s години"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["fa un moment", "d'aquí un moment"],
            ["fa %s segons", "d'aquí %s segons"],
            ["fa 1 minut", "d'aquí 1 minut"],
            ["fa %s minuts", "d'aquí %s minuts"],
            ["fa 1 hora", "d'aquí 1 hora"],
            ["fa %s hores", "d'aquí %s hores"],
            ["fa 1 dia", "d'aquí 1 dia"],
            ["fa %s dies", "d'aquí %s dies"],
            ["fa 1 setmana", "d'aquí 1 setmana"],
            ["fa %s setmanes", "d'aquí %s setmanes"],
            ["fa 1 mes", "d'aquí 1 mes"],
            ["fa %s mesos", "d'aquí %s mesos"],
            ["fa 1 any", "d'aquí 1 any"],
            ["fa %s anys", "d'aquí %s anys"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["for et øjeblik siden", "om et øjeblik"],
            ["for %s sekunder siden", "om %s sekunder"],
            ["for 1 minut siden", "om 1 minut"],
            ["for %s minutter siden", "om %s minutter"],
            ["for 1 time siden", "om 1 time"],
            ["for %s timer siden", "om %s timer"],
            ["for 1 dag siden", "om 1 dag"],
            ["for %s dage siden", "om %s dage"],
            ["for 1 uge siden", "om 1 uge"],
            ["for %s uger siden", "om %s uger"],
            ["for 1 måned siden", "om 1 måned"],
            ["for %s måneder siden", "om %s måneder"],
            ["for 1 år siden", "om 1 år"],
            ["for %s år siden", "om %s år"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["gerade eben", "vor einer Weile"],
            ["vor %s Sekunden", "in %s Sekunden"],
            ["vor 1 Minute", "in 1 Minute"],
            ["vor %s Minuten", "in %s Minuten"],
            ["vor 1 Stunde", "in 1 Stunde"],
            ["vor %s Stunden", "in %s Stunden"],
            ["vor 1 Tag", "in 1 Tag"],
            ["vor %s Tagen", "in %s Tagen"],
            ["vor 1 Woche", "in 1 Woche"],
            ["vor %s Wochen", "in %s Wochen"],
            ["vor 1 Monat", "in 1 Monat"],
            ["vor %s Monaten", "in %s Monaten"],
            ["vor 1 Jahr", "in 1 Jahr"],
            ["vor %s Jahren", "in %s Jahren"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["μόλις τώρα", "σε λίγο"],
            ["%s δευτερόλεπτα πριν", "σε %s δευτερόλεπτα"],
            ["1 λεπτό πριν", "σε 1 λεπτό"],
            ["%s λεπτά πριν", "σε %s λεπτά"],
            ["1 ώρα πριν", "σε 1 ώρα"],
            ["%s ώρες πριν", "σε %s ώρες"],
            ["1 μέρα πριν", "σε 1 μέρα"],
            ["%s μέρες πριν", "σε %s μέρες"],
            ["1 εβδομάδα πριν", "σε 1 εβδομάδα"],
            ["%s εβδομάδες πριν", "σε %s εβδομάδες"],
            ["1 μήνα πριν", "σε 1 μήνα"],
            ["%s μήνες πριν", "σε %s μήνες"],
            ["1 χρόνο πριν", "σε 1 χρόνο"],
            ["%s χρόνια πριν", "σε %s χρόνια"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["just now", "right now"],
            ["%s seconds ago", "in %s seconds"],
            ["1 minute ago", "in 1 minute"],
            ["%s minutes ago", "in %s minutes"],
            ["1 hour ago", "in 1 hour"],
            ["%s hours ago", "in %s hours"],
            ["1 day ago", "in 1 day"],
            ["%s days ago", "in %s days"],
            ["1 week ago", "in 1 week"],
            ["%s weeks ago", "in %s weeks"],
            ["1 month ago", "in 1 month"],
            ["%s months ago", "in %s months"],
            ["1 year ago", "in 1 year"],
            ["%s years ago", "in %s years"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["just now", "right now"],
            ["%ss ago", "in %ss"],
            ["1m ago", "in 1m"],
            ["%sm ago", "in %sm"],
            ["1h ago", "in 1h"],
            ["%sh ago", "in %sh"],
            ["1d ago", "in 1d"],
            ["%sd ago", "in %sd"],
            ["1w ago", "in 1w"],
            ["%sw ago", "in %sw"],
            ["1mo ago", "in 1mo"],
            ["%smo ago", "in %smo"],
            ["1yr ago", "in 1yr"],
            ["%syr ago", "in %syr"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["justo ahora", "en un rato"],
            ["hace %s segundos", "en %s segundos"],
            ["hace 1 minuto", "en 1 minuto"],
            ["hace %s minutos", "en %s minutos"],
            ["hace 1 hora", "en 1 hora"],
            ["hace %s horas", "en %s horas"],
            ["hace 1 día", "en 1 día"],
            ["hace %s días", "en %s días"],
            ["hace 1 semana", "en 1 semana"],
            ["hace %s semanas", "en %s semanas"],
            ["hace 1 mes", "en 1 mes"],
            ["hace %s meses", "en %s meses"],
            ["hace 1 año", "en 1 año"],
            ["hace %s años", "en %s años"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["orain", "denbora bat barru"],
            ["duela %s segundu", "%s segundu barru"],
            ["duela minutu 1", "minutu 1 barru"],
            ["duela %s minutu", "%s minutu barru"],
            ["duela ordu 1", "ordu 1 barru"],
            ["duela %s ordu", "%s ordu barru"],
            ["duela egun 1", "egun 1 barru"],
            ["duela %s egun", "%s egun barru"],
            ["duela aste 1", "aste 1 barru"],
            ["duela %s aste", "%s aste barru"],
            ["duela hillabete 1", "hillabete 1 barru"],
            ["duela %s hillabete", "%s hillabete barru"],
            ["duela urte 1", "urte 1 barru"],
            ["duela %s urte", "%s urte barru"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["همین الآن", "لحظاتی پیش"],
            ["%s ثانیه پیش", "حدود %s ثانیه پیش"],
            ["1 دقیقه پیش", "حدود 1 دقیقه پیش"],
            ["%s دقیقه پیش", "حدود %s دقیقه پیش"],
            ["1 ساعت پیش", "حدود 1 ساعت پیش"],
            ["%s ساعت پیش", "حدود %s ساعت پیش"],
            ["1 روز پیش", "حدود 1 روز پیش"],
            ["%s روز پیش", "حدود %s روز پیش"],
            ["1 هفته پیش", "حدود 1 هفته پیش"],
            ["%s هفته پیش", "حدود %s هفته پیش"],
            ["1 ماه پیش", "حدود 1 ماه پیش"],
            ["%s ماه پیش", "حدود %s ماه پیش"],
            ["1 سال پیش", "حدود 1 سال پیش"],
            ["%s سال پیش", "حدود %s سال پیش"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["juuri äsken", "juuri nyt"],
            ["%s sekuntia sitten", "%s sekunnin päästä"],
            ["minuutti sitten", "minuutin päästä"],
            ["%s minuuttia sitten", "%s minuutin päästä"],
            ["tunti sitten", "tunnin päästä"],
            ["%s tuntia sitten", "%s tunnin päästä"],
            ["päivä sitten", "päivän päästä"],
            ["%s päivää sitten", "%s päivän päästä"],
            ["viikko sitten", "viikon päästä"],
            ["%s viikkoa sitten", "%s viikon päästä"],
            ["kuukausi sitten", "kuukauden päästä"],
            ["%s kuukautta sitten", "%s kuukauden päästä"],
            ["vuosi sitten", "vuoden päästä"],
            ["%s vuotta sitten", "%s vuoden päästä"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["à l'instant", "dans un instant"],
            ["il y a %s secondes", "dans %s secondes"],
            ["il y a 1 minute", "dans 1 minute"],
            ["il y a %s minutes", "dans %s minutes"],
            ["il y a 1 heure", "dans 1 heure"],
            ["il y a %s heures", "dans %s heures"],
            ["il y a 1 jour", "dans 1 jour"],
            ["il y a %s jours", "dans %s jours"],
            ["il y a 1 semaine", "dans 1 semaine"],
            ["il y a %s semaines", "dans %s semaines"],
            ["il y a 1 mois", "dans 1 mois"],
            ["il y a %s mois", "dans %s mois"],
            ["il y a 1 an", "dans 1 an"],
            ["il y a %s ans", "dans %s ans"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["זה עתה", "עכשיו"],
            ["לפני %s שניות", "בעוד %s שניות"],
            ["לפני דקה", "בעוד דקה"],
            ["לפני %s דקות", "בעוד %s דקות"],
            ["לפני שעה", "בעוד שעה"],
            ["לפני %s שעות", "בעוד %s שעות"],
            ["אתמול", "מחר"],
            ["לפני %s ימים", "בעוד %s ימים"],
            ["לפני שבוע", "בעוד שבוע"],
            ["לפני %s שבועות", "בעוד %s שבועות"],
            ["לפני חודש", "בעוד חודש"],
            ["לפני %s חודשים", "בעוד %s חודשים"],
            ["לפני שנה", "בעוד שנה"],
            ["לפני %s שנים", "בעוד %s שנים"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["éppen most", "éppen most"],
            ["%s másodperce", "%s másodpercen belül"],
            ["1 perce", "1 percen belül"],
            ["%s perce", "%s percen belül"],
            ["1 órája", "1 órán belül"],
            ["%s órája", "%s órán belül"],
            ["1 napja", "1 napon belül"],
            ["%s napja", "%s napon belül"],
            ["1 hete", "1 héten belül"],
            ["%s hete", "%s héten belül"],
            ["1 hónapja", "1 hónapon belül"],
            ["%s hónapja", "%s hónapon belül"],
            ["1 éve", "1 éven belül"],
            ["%s éve", "%s éven belül"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["এইমাত্র", "একটা সময়"],
            ["%s সেকেন্ড আগে", "%s এর সেকেন্ডের মধ্যে"],
            ["1 মিনিট আগে", "1 মিনিটে"],
            ["%s এর মিনিট আগে", "%s এর মিনিটের মধ্যে"],
            ["1 ঘন্টা আগে", "1 ঘন্টা"],
            ["%s ঘণ্টা আগে", "%s এর ঘন্টার মধ্যে"],
            ["1 দিন আগে", "1 দিনের মধ্যে"],
            ["%s এর দিন আগে", "%s এর দিন"],
            ["1 সপ্তাহ আগে", "1 সপ্তাহের মধ্যে"],
            ["%s এর সপ্তাহ আগে", "%s সপ্তাহের মধ্যে"],
            ["1 মাস আগে", "1 মাসে"],
            ["%s মাস আগে", "%s মাসে"],
            ["1 বছর আগে", "1 বছরের মধ্যে"],
            ["%s বছর আগে", "%s বছরে"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["अभी", "कुछ समय"],
            ["%s सेकंड पहले", "%s सेकंड में"],
            ["1 मिनट पहले", "1 मिनट में"],
            ["%s मिनट पहले", "%s मिनट में"],
            ["1 घंटे पहले", "1 घंटे में"],
            ["%s घंटे पहले", "%s घंटे में"],
            ["1 दिन पहले", "1 दिन में"],
            ["%s दिन पहले", "%s दिनों में"],
            ["1 सप्ताह पहले", "1 सप्ताह में"],
            ["%s हफ्ते पहले", "%s हफ्तों में"],
            ["1 महीने पहले", "1 महीने में"],
            ["%s महीने पहले", "%s महीनों में"],
            ["1 साल पहले", "1 साल में"],
            ["%s साल पहले", "%s साल में"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["baru saja", "sebentar"],
            ["%s detik yang lalu", "dalam %s detik"],
            ["1 menit yang lalu", "dalam 1 menit"],
            ["%s menit yang lalu", "dalam %s menit"],
            ["1 jam yang lalu", "dalam 1 jam"],
            ["%s jam yang lalu", "dalam %s jam"],
            ["1 hari yang lalu", "dalam 1 hari"],
            ["%s hari yang lalu", "dalam %s hari"],
            ["1 minggu yang lalu", "dalam 1 minggu"],
            ["%s minggu yang lalu", "dalam %s minggu"],
            ["1 bulan yang lalu", "dalam 1 bulan"],
            ["%s bulan yang lalu", "dalam %s bulan"],
            ["1 tahun yang lalu", "dalam 1 tahun"],
            ["%s tahun yang lalu", "dalam %s tahun"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["poco fa", "tra poco"],
            ["%s secondi fa", "%s secondi da ora"],
            ["un minuto fa", "un minuto da ora"],
            ["%s minuti fa", "%s minuti da ora"],
            ["un'ora fa", "un'ora da ora"],
            ["%s ore fa", "%s ore da ora"],
            ["un giorno fa", "un giorno da ora"],
            ["%s giorni fa", "%s giorni da ora"],
            ["una settimana fa", "una settimana da ora"],
            ["%s settimane fa", "%s settimane da ora"],
            ["un mese fa", "un mese da ora"],
            ["%s mesi fa", "%s mesi da ora"],
            ["un anno fa", "un anno da ora"],
            ["%s anni fa", "%s anni da ora"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["すこし前", "すぐに"],
            ["%s秒前", "%s秒以内"],
            ["1分前", "1分以内"],
            ["%s分前", "%s分以内"],
            ["1時間前", "1時間以内"],
            ["%s時間前", "%s時間以内"],
            ["1日前", "1日以内"],
            ["%s日前", "%s日以内"],
            ["1週間前", "1週間以内"],
            ["%s週間前", "%s週間以内"],
            ["1ヶ月前", "1ヶ月以内"],
            ["%sヶ月前", "%sヶ月以内"],
            ["1年前", "1年以内"],
            ["%s年前", "%s年以内"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["방금", "곧"],
            ["%s초 전", "%s초 후"],
            ["1분 전", "1분 후"],
            ["%s분 전", "%s분 후"],
            ["1시간 전", "1시간 후"],
            ["%s시간 전", "%s시간 후"],
            ["1일 전", "1일 후"],
            ["%s일 전", "%s일 후"],
            ["1주일 전", "1주일 후"],
            ["%s주일 전", "%s주일 후"],
            ["1개월 전", "1개월 후"],
            ["%s개월 전", "%s개월 후"],
            ["1년 전", "1년 후"],
            ["%s년 전", "%s년 후"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["ഇപ്പോള്‍", "കുറച്ചു മുന്‍പ്"],
            ["%s സെക്കന്റ്‌കള്‍ക്ക് മുന്‍പ്", "%s സെക്കന്റില്‍"],
            ["1 മിനിറ്റിനു മുന്‍പ്", "1 മിനിറ്റില്‍"],
            ["%s മിനിറ്റുകള്‍ക്ക് മുന്‍പ", "%s മിനിറ്റില്‍"],
            ["1 മണിക്കൂറിനു മുന്‍പ്", "1 മണിക്കൂറില്‍"],
            ["%s മണിക്കൂറുകള്‍ക്കു മുന്‍പ്", "%s മണിക്കൂറില്‍"],
            ["1 ഒരു ദിവസം മുന്‍പ്", "1 ദിവസത്തില്‍"],
            ["%s ദിവസങ്ങള്‍ക് മുന്‍പ്", "%s ദിവസങ്ങള്‍ക്കുള്ളില്‍"],
            ["1 ആഴ്ച മുന്‍പ്", "1 ആഴ്ചയില്‍"],
            ["%s ആഴ്ചകള്‍ക്ക് മുന്‍പ്", "%s ആഴ്ചകള്‍ക്കുള്ളില്‍"],
            ["1 മാസത്തിനു മുന്‍പ്", "1 മാസത്തിനുള്ളില്‍"],
            ["%s മാസങ്ങള്‍ക്ക് മുന്‍പ്", "%s മാസങ്ങള്‍ക്കുള്ളില്‍"],
            ["1 വര്‍ഷത്തിനു  മുന്‍പ്", "1 വര്‍ഷത്തിനുള്ളില്‍"],
            ["%s വര്‍ഷങ്ങള്‍ക്കു മുന്‍പ്", "%s വര്‍ഷങ്ങള്‍ക്കുല്ല്ളില്‍"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["ယခုအတွင်း", "ယခု"],
            ["%s စက္ကန့် အကြာက", "%s စက္ကန့်အတွင်း"],
            ["1 မိနစ် အကြာက", "1 မိနစ်အတွင်း"],
            ["%s မိနစ် အကြာက", "%s မိနစ်အတွင်း"],
            ["1 နာရီ အကြာက", "1 နာရီအတွင်း"],
            ["%s နာရီ အကြာက", "%s နာရီအတွင်း"],
            ["1 ရက် အကြာက", "1 ရက်အတွင်း"],
            ["%s ရက် အကြာက", "%s ရက်အတွင်း"],
            ["1 ပတ် အကြာက", "1 ပတ်အတွင်း"],
            ["%s ပတ် အကြာက", "%s ပတ်အတွင်း"],
            ["1 လ အကြာက", "1 လအတွင်း"],
            ["%s လ အကြာက", "%s လအတွင်း"],
            ["1 နှစ် အကြာက", "1 နှစ်အတွင်း"],
            ["%s နှစ် အကြာက", "%s နှစ်အတွင်း"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["akkurat nå", "om litt"],
            ["%s sekunder siden", "om %s sekunder"],
            ["1 minutt siden", "om 1 minutt"],
            ["%s minutter siden", "om %s minutter"],
            ["1 time siden", "om 1 time"],
            ["%s timer siden", "om %s timer"],
            ["1 dag siden", "om 1 dag"],
            ["%s dager siden", "om %s dager"],
            ["1 uke siden", "om 1 uke"],
            ["%s uker siden", "om %s uker"],
            ["1 måned siden", "om 1 måned"],
            ["%s måneder siden", "om %s måneder"],
            ["1 år siden", "om 1 år"],
            ["%s år siden", "om %s år"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["recent", "binnenkort"],
            ["%s seconden geleden", "binnen %s seconden"],
            ["1 minuut geleden", "binnen 1 minuut"],
            ["%s minuten geleden", "binnen %s minuten"],
            ["1 uur geleden", "binnen 1 uur"],
            ["%s uren geleden", "binnen %s uren"],
            ["1 dag geleden", "binnen 1 dag"],
            ["%s dagen geleden", "binnen %s dagen"],
            ["1 week geleden", "binnen 1 week"],
            ["%s weken geleden", "binnen %s weken"],
            ["1 maand geleden", "binnen 1 maand"],
            ["%s maanden geleden", "binnen %s maanden"],
            ["1 jaar geleden", "binnen 1 jaar"],
            ["%s jaren geleden", "binnen %s jaren"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["nett no", "om litt"],
            ["%s sekund sidan", "om %s sekund"],
            ["1 minutt sidan", "om 1 minutt"],
            ["%s minutt sidan", "om %s minutt"],
            ["1 time sidan", "om 1 time"],
            ["%s timar sidan", "om %s timar"],
            ["1 dag sidan", "om 1 dag"],
            ["%s dagar sidan", "om %s dagar"],
            ["1 veke sidan", "om 1 veke"],
            ["%s veker sidan", "om %s veker"],
            ["1 månad sidan", "om 1 månad"],
            ["%s månadar sidan", "om %s månadar"],
            ["1 år sidan", "om 1 år"],
            ["%s år sidan", "om %s år"]
        ][n]
    }
}, function(s, n) {
    var e = [
        ["w tej chwili", "za chwilę"],
        ["%s sekund temu", "za %s sekund"],
        ["1 minutę temu", "za 1 minutę"],
        ["%s minut temu", "za %s minut"],
        ["1 godzinę temu", "za 1 godzinę"],
        ["%s godzin temu", "za %s godzin"],
        ["1 dzień temu", "za 1 dzień"],
        ["%s dni temu", "za %s dni"],
        ["1 tydzień temu", "za 1 tydzień"],
        ["%s tygodni temu", "za %s tygodni"],
        ["1 miesiąc temu", "za 1 miesiąc"],
        ["%s miesięcy temu", "za %s miesięcy"],
        ["1 rok temu", "za 1 rok"],
        ["%s lat temu", "za %s lat"],
        ["%s sekundy temu", "za %s sekundy"],
        ["%s minuty temu", "za %s minuty"],
        ["%s godziny temu", "za %s godziny"],
        ["%s dni temu", "za %s dni"],
        ["%s tygodnie temu", "za %s tygodnie"],
        ["%s miesiące temu", "za %s miesiące"],
        ["%s lata temu", "za %s lata"]
    ];
    s.exports = function(s, n) {
        return e[1 & n ? s % 10 > 4 || s % 10 < 2 || 1 === ~~(s / 10) % 10 ? n : ++n / 2 + 13 : n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["agora mesmo", "daqui um pouco"],
            ["há %s segundos", "em %s segundos"],
            ["há um minuto", "em um minuto"],
            ["há %s minutos", "em %s minutos"],
            ["há uma hora", "em uma hora"],
            ["há %s horas", "em %s horas"],
            ["há um dia", "em um dia"],
            ["há %s dias", "em %s dias"],
            ["há uma semana", "em uma semana"],
            ["há %s semanas", "em %s semanas"],
            ["há um mês", "em um mês"],
            ["há %s meses", "em %s meses"],
            ["há um ano", "em um ano"],
            ["há %s anos", "em %s anos"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        var e = [
            ["chiar acum", "chiar acum"],
            ["acum %s secunde", "peste %s secunde"],
            ["acum un minut", "peste un minut"],
            ["acum %s minute", "peste %s minute"],
            ["acum o oră", "peste o oră"],
            ["acum %s ore", "peste %s ore"],
            ["acum o zi", "peste o zi"],
            ["acum %s zile", "peste %s zile"],
            ["acum o săptămână", "peste o săptămână"],
            ["acum %s săptămâni", "peste %s săptămâni"],
            ["acum o lună", "peste o lună"],
            ["acum %s luni", "peste %s luni"],
            ["acum un an", "peste un an"],
            ["acum %s ani", "peste %s ani"]
        ];
        return s < 20 ? e[n] : [e[n][0].replace("%s", "%s de"), e[n][1].replace("%s", "%s de")]
    }
}, function(s, n) {
    function e(s, n, e, a, t) {
        var u = t % 10,
            i = a;
        return 1 === t ? i = s : 1 === u && t > 20 ? i = n : u > 1 && u < 5 && (t > 20 || t < 10) && (i = e), i
    }
    var a = e.bind(null, "секунду", "%s секунду", "%s секунды", "%s секунд"),
        t = e.bind(null, "минуту", "%s минуту", "%s минуты", "%s минут"),
        u = e.bind(null, "час", "%s час", "%s часа", "%s часов"),
        i = e.bind(null, "день", "%s день", "%s дня", "%s дней"),
        r = e.bind(null, "неделю", "%s неделю", "%s недели", "%s недель"),
        o = e.bind(null, "месяц", "%s месяц", "%s месяца", "%s месяцев"),
        m = e.bind(null, "год", "%s год", "%s года", "%s лет");
    s.exports = function(s, n) {
        switch (n) {
            case 0:
                return ["только что", "через несколько секунд"];
            case 1:
                return [a(s) + " назад", "через " + a(s)];
            case 2:
            case 3:
                return [t(s) + " назад", "через " + t(s)];
            case 4:
            case 5:
                return [u(s) + " назад", "через " + u(s)];
            case 6:
                return ["вчера", "завтра"];
            case 7:
                return [i(s) + " назад", "через " + i(s)];
            case 8:
            case 9:
                return [r(s) + " назад", "через " + r(s)];
            case 10:
            case 11:
                return [o(s) + " назад", "через " + o(s)];
            case 12:
            case 13:
                return [m(s) + " назад", "через " + m(s)];
            default:
                return ["", ""]
        }
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["just nu", "om en stund"],
            ["%s sekunder sedan", "om %s seconder"],
            ["1 minut sedan", "om 1 minut"],
            ["%s minuter sedan", "om %s minuter"],
            ["1 timme sedan", "om 1 timme"],
            ["%s timmar sedan", "om %s timmar"],
            ["1 dag sedan", "om 1 dag"],
            ["%s dagar sedan", "om %s dagar"],
            ["1 vecka sedan", "om 1 vecka"],
            ["%s veckor sedan", "om %s veckor"],
            ["1 månad sedan", "om 1 månad"],
            ["%s månader sedan", "om %s månader"],
            ["1 år sedan", "om 1 år"],
            ["%s år sedan", "om %s år"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["இப்போது", "சற்று நேரம் முன்பு"],
            ["%s நொடிக்கு முன்", "%s நொடிகளில்"],
            ["1 நிமிடத்திற்க்கு முன்", "1 நிமிடத்தில்"],
            ["%s நிமிடத்திற்க்கு முன்", "%s நிமிடங்களில்"],
            ["1 மணி நேரத்திற்கு முன்", "1 மணி நேரத்திற்குள்"],
            ["%s மணி நேரத்திற்கு முன்", "%s மணி நேரத்திற்குள்"],
            ["1 நாளுக்கு முன்", "1 நாளில்"],
            ["%s நாட்களுக்கு முன்", "%s நாட்களில்"],
            ["1 வாரத்திற்கு முன்", "1 வாரத்தில்"],
            ["%s வாரங்களுக்கு முன்", "%s வாரங்களில்"],
            ["1 மாதத்திற்கு முன்", "1 மாதத்தில்"],
            ["%s மாதங்களுக்கு முன்", "%s மாதங்களில்"],
            ["1 வருடத்திற்கு முன்", "1 வருடத்தில்"],
            ["%s வருடங்களுக்கு முன்", "%s வருடங்களில்"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["เมื่อสักครู่นี้", "อีกสักครู่"],
            ["%s วินาทีที่แล้ว", "ใน %s วินาที"],
            ["1 นาทีที่แล้ว", "ใน 1 นาที"],
            ["%s นาทีที่แล้ว", "ใน %s นาที"],
            ["1 ชั่วโมงที่แล้ว", "ใน 1 ชั่วโมง"],
            ["%s ชั่วโมงที่แล้ว", "ใน %s ชั่วโมง"],
            ["1 วันที่แล้ว", "ใน 1 วัน"],
            ["%s วันที่แล้ว", "ใน %s วัน"],
            ["1 อาทิตย์ที่แล้ว", "ใน 1 อาทิตย์"],
            ["%s อาทิตย์ที่แล้ว", "ใน %s อาทิตย์"],
            ["1 เดือนที่แล้ว", "ใน 1 เดือน"],
            ["%s เดือนที่แล้ว", "ใน %s เดือน"],
            ["1 ปีที่แล้ว", "ใน 1 ปี"],
            ["%s ปีที่แล้ว", "ใน %s ปี"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["az önce", "şimdi"],
            ["%s saniye önce", "%s saniye içinde"],
            ["1 dakika önce", "1 dakika içinde"],
            ["%s dakika önce", "%s dakika içinde"],
            ["1 saat önce", "1 saat içinde"],
            ["%s saat önce", "%s saat içinde"],
            ["1 gün önce", "1 gün içinde"],
            ["%s gün önce", "%s gün içinde"],
            ["1 hafta önce", "1 hafta içinde"],
            ["%s hafta önce", "%s hafta içinde"],
            ["1 ay önce", "1 ay içinde"],
            ["%s ay önce", "%s ay içinde"],
            ["1 yıl önce", "1 yıl içinde"],
            ["%s yıl önce", "%s yıl içinde"]
        ][n]
    }
}, function(s, n) {
    function e(s, n, e, a, t) {
        var u = t % 10,
            i = a;
        return 1 === t ? i = s : 1 === u && t > 20 ? i = n : u > 1 && u < 5 && (t > 20 || t < 10) && (i = e), i
    }
    var a = e.bind(null, "секунду", "%s секунду", "%s секунди", "%s секунд"),
        t = e.bind(null, "хвилину", "%s хвилину", "%s хвилини", "%s хвилин"),
        u = e.bind(null, "годину", "%s годину", "%s години", "%s годин"),
        i = e.bind(null, "день", "%s день", "%s дні", "%s днів"),
        r = e.bind(null, "тиждень", "%s тиждень", "%s тиждні", "%s тижднів"),
        o = e.bind(null, "місяць", "%s місяць", "%s місяці", "%s місяців"),
        m = e.bind(null, "рік", "%s рік", "%s роки", "%s років");
    s.exports = function(s, n) {
        switch (n) {
            case 0:
                return ["щойно", "через декілька секунд"];
            case 1:
                return [a(s) + " тому", "через " + a(s)];
            case 2:
            case 3:
                return [t(s) + " тому", "через " + t(s)];
            case 4:
            case 5:
                return [u(s) + " тому", "через " + u(s)];
            case 6:
            case 7:
                return [i(s) + " тому", "через " + i(s)];
            case 8:
            case 9:
                return [r(s) + " тому", "через " + r(s)];
            case 10:
            case 11:
                return [o(s) + " тому", "через " + o(s)];
            case 12:
            case 13:
                return [m(s) + " тому", "через " + m(s)];
            default:
                return ["", ""]
        }
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["vừa xong", "một lúc"],
            ["%s giây trước", "trong %s giây"],
            ["1 phút trước", "trong 1 phút"],
            ["%s phút trước", "trong %s phút"],
            ["1 giờ trước", "trong 1 giờ"],
            ["%s giờ trước", "trong %s giờ"],
            ["1 ngày trước", "trong 1 ngày"],
            ["%s ngày trước", "trong %s ngày"],
            ["1 tuần trước", "trong 1 tuần"],
            ["%s tuần trước", "trong %s tuần"],
            ["1 tháng trước", "trong 1 tháng"],
            ["%s tháng trước", "trong %s tháng"],
            ["1 năm trước", "trong 1 năm"],
            ["%s năm trước", "trong %s năm"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["刚刚", "片刻后"],
            ["%s秒前", "%s秒后"],
            ["1分钟前", "1分钟后"],
            ["%s分钟前", "%s分钟后"],
            ["1小时前", "1小时后"],
            ["%s小时前", "%s小时后"],
            ["1天前", "1天后"],
            ["%s天前", "%s天后"],
            ["1周前", "1周后"],
            ["%s周前", "%s周后"],
            ["1月前", "1月后"],
            ["%s月前", "%s月后"],
            ["1年前", "1年后"],
            ["%s年前", "%s年后"]
        ][n]
    }
}, function(s, n) {
    s.exports = function(s, n) {
        return [
            ["剛剛", "片刻後"],
            ["%s秒前", "%s秒後"],
            ["1分鐘前", "1分鐘後"],
            ["%s分鐘前", "%s分鐘後"],
            ["1小時前", "1小時後"],
            ["%s小時前", "%s小時後"],
            ["1天前", "1天後"],
            ["%s天前", "%s天後"],
            ["1周前", "1周後"],
            ["%s周前", "%s周後"],
            ["1月前", "1月後"],
            ["%s月前", "%s月後"],
            ["1年前", "1年後"],
            ["%s年前", "%s年後"]
        ][n]
    }
}]);
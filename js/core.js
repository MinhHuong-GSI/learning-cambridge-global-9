/* Learning Cambridge Global 9 — core: content registry, state, sound, speech, helpers */
(function () {
  "use strict";

  var UNITS = [
    { n: 1, title: "Views and voices", vi: "Quan điểm & tiếng nói", icon: "🗣️", color: "#2f9e44" },
    { n: 2, title: "Well-being", vi: "Sức khoẻ & hạnh phúc", icon: "🥗", color: "#e8590c" },
    { n: 3, title: "Tourism", vi: "Du lịch", icon: "🧳", color: "#1c7ed6" },
    { n: 4, title: "Science", vi: "Khoa học", icon: "🔬", color: "#7048e8" },
    { n: 5, title: "Technology", vi: "Công nghệ", icon: "💻", color: "#0c8599" },
    { n: 6, title: "Rules and laws", vi: "Nội quy & luật pháp", icon: "⚖️", color: "#c2255c" },
    { n: 7, title: "Competition", vi: "Thi đấu & cạnh tranh", icon: "🏆", color: "#f08c00" },
    { n: 8, title: "The environment", vi: "Môi trường", icon: "🌍", color: "#2b8a3e" }
  ];

  var CG9 = window.CG9 = {
    UNITS: UNITS,
    lessons: [], lessonById: {},
    exams: {}, skills: {},
    addLesson: function (l) {
      if (CG9.lessonById[l.id]) return;
      var m = /Unit\s+\d\.(\d)\s+(.*)$/.exec(l.game.subtitle || "");
      l.num = l.type === "lesson" ? parseInt(l.id.split("-")[1], 10) : null;
      l.title = l.type === "lesson" ? (m ? m[2] : l.game.brand) :
        l.type === "review" ? "Tổng ôn tập Unit " + l.unit : "Kết nối & Nâng cao Unit " + l.unit;
      CG9.lessons.push(l); CG9.lessonById[l.id] = l;
    },
    addExam: function (e) { CG9.exams[e.unit] = e; },
    addSkillPack: function (p) { CG9.skills[p.unit] = p; }
  };

  CG9.unit = function (n) { return UNITS[n - 1]; };
  CG9.lessonsOf = function (unit, type) {
    var order = { lesson: 0, connect: 1, review: 2 };
    return CG9.lessons.filter(function (l) { return l.unit === unit && (!type || l.type === type); })
      .sort(function (a, b) { return (order[a.type] - order[b.type]) || ((a.num || 0) - (b.num || 0)); });
  };
  CG9.vocabOf = function (unit) {
    var seen = {}, out = [];
    CG9.lessonsOf(unit, "lesson").forEach(function (l) {
      (l.game.vocab || []).forEach(function (v) {
        var k = v.term.toLowerCase();
        if (!seen[k]) { seen[k] = 1; out.push({ term: v.term, vi: v.vi, ex: v.ex || "", lesson: l.id }); }
      });
    });
    return out;
  };

  /* ---------------- helpers ---------------- */
  CG9.el = function (tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined && html !== null) e.innerHTML = html;
    return e;
  };
  CG9.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  CG9.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  CG9.sample = function (arr, n) { return CG9.shuffle(arr).slice(0, n); };
  CG9.stripTags = function (s) { return String(s || "").replace(/<[^>]+>/g, ""); };
  CG9.norm = function (s) {
    return CG9.stripTags(s).toLowerCase()
      .replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"')
      .replace(/[.,!?;:"]/g, "").replace(/\s+/g, " ").trim();
  };
  CG9.today = function () {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  };
  CG9.hash = function (s) {
    var h = 5381; s = String(s);
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  };

  /* ---------------- state ---------------- */
  var KEY = "cg9-app-v1";
  function fresh() {
    return {
      v: 1, profile: { name: "", avatar: "🐰", theme: "meadow" },
      carrots: 0, xp: 0, sound: true,
      streak: { last: "", count: 0, best: 0 },
      daily: {},           // "YYYY-MM-DD": {xp, acts}
      levels: {},          // "lessonId:levelId": {stars, pct, ts}
      acts: {},            // activity key -> {best, count, ts}
      history: [],         // [{ts, key, title, unit, correct, total, pct, xp}]
      tags: {},            // tag -> {c, t}
      mistakes: {},        // hash -> {item, src, ts, wrong, right}
      vocab: {},           // term -> box (0..5)
      badges: {},          // id -> ts
      owned: { avatars: ["🐰"], themes: ["meadow"] },
      stories: [],         // story summaries (images in IndexedDB)
      settings: { apiKey: "", textModel: "gpt-5.4-mini", imageModel: "gpt-image-1-mini", imageQuality: "low", images: true, voice: "" },
      migrated: false
    };
  }
  function deepMerge(base, add) {
    Object.keys(add || {}).forEach(function (k) {
      if (add[k] && typeof add[k] === "object" && !Array.isArray(add[k]) && base[k] && typeof base[k] === "object" && !Array.isArray(base[k])) deepMerge(base[k], add[k]);
      else base[k] = add[k];
    });
    return base;
  }
  CG9.load = function () {
    var s = fresh();
    try { var raw = localStorage.getItem(KEY); if (raw) deepMerge(s, JSON.parse(raw)); } catch (e) { /* storage blocked */ }
    CG9.state = s;
    return s;
  };
  CG9.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(CG9.state)); }
    catch (e) { CG9.toast("⚠️ Không lưu được tiến độ (bộ nhớ trình duyệt đầy hoặc bị chặn)."); }
  };
  CG9.exportState = function () { return JSON.stringify(CG9.state, null, 1); };
  CG9.importState = function (json) {
    var s = deepMerge(fresh(), JSON.parse(json));
    CG9.state = s; CG9.save();
  };
  CG9.resetState = function () {
    var keep = CG9.state.settings;
    CG9.state = fresh(); CG9.state.settings = keep; CG9.state.migrated = true; CG9.save();
  };

  /* Import stars from the old standalone "Thỏ Quest" pages (same browser, file:// origin). */
  CG9.migrateOld = function () {
    var s = CG9.state; if (s.migrated) return 0;
    var n = 0;
    CG9.lessons.forEach(function (l) {
      try {
        var raw = localStorage.getItem(l.game.storageKey); if (!raw) return;
        var old = JSON.parse(raw);
        Object.keys(old.levels || {}).forEach(function (lv) {
          var o = old.levels[lv]; if (!o || !o.done) return;
          var k = l.id + ":" + lv, cur = s.levels[k];
          if (!cur || (cur.stars || 0) < (o.stars || 0)) { s.levels[k] = { stars: o.stars || 0, pct: null, ts: Date.now() }; n++; }
        });
        s.carrots += Math.min(old.carrots || 0, 2000);
      } catch (e) { /* ignore broken old data */ }
    });
    s.migrated = true; CG9.save();
    return n;
  };

  /* ---------------- sound ---------------- */
  var actx = null;
  function ctx() {
    if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { actx = null; } }
    return actx;
  }
  function beep(freq, dur, type, delay) {
    if (!CG9.state || !CG9.state.sound) return;
    var c = ctx(); if (!c) return;
    var t0 = c.currentTime + (delay || 0), o = c.createOscillator(), g = c.createGain();
    o.type = type || "sine"; o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.16, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(c.destination); o.start(t0); o.stop(t0 + dur + 0.03);
  }
  CG9.sfx = {
    ok: function () { beep(660, .12, "sine", 0); beep(880, .16, "sine", .1); },
    bad: function () { beep(190, .22, "sawtooth", 0); },
    click: function () { beep(440, .05, "square", 0); },
    win: function () { [523, 659, 784, 1047].forEach(function (f, i) { beep(f, .16, "triangle", i * .12); }); },
    badge: function () { [784, 988, 1175, 1568].forEach(function (f, i) { beep(f, .2, "sine", i * .1); }); }
  };

  /* ---------------- speech (TTS + recognition) ---------------- */
  var voices = [];
  function loadVoices() { try { voices = speechSynthesis.getVoices(); } catch (e) { voices = []; } }
  if ("speechSynthesis" in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  CG9.englishVoices = function () { return voices.filter(function (v) { return /^en[-_]/i.test(v.lang); }); };
  CG9.speak = function (text, rate) {
    if (!("speechSynthesis" in window)) { CG9.toast("Trình duyệt không hỗ trợ đọc phát âm."); return; }
    var t = CG9.stripTags(text); if (!t) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(t);
    var pref = CG9.state && CG9.state.settings.voice;
    var en = CG9.englishVoices();
    var v = en.filter(function (x) { return x.name === pref; })[0] ||
      en.filter(function (x) { return /en-GB/i.test(x.lang); })[0] || en[0];
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-GB";
    u.rate = rate || 0.92;
    speechSynthesis.speak(u);
  };
  CG9.canListen = function () { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); };
  CG9.listen = function (onText, onEnd) {
    var R = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!R) { CG9.toast("Trình duyệt này chưa hỗ trợ nhận giọng nói (hãy dùng Chrome/Edge)."); return null; }
    var r = new R(); r.lang = "en-GB"; r.interimResults = true; r.maxAlternatives = 1;
    r.onresult = function (e) {
      var txt = ""; for (var i = 0; i < e.results.length; i++) txt += e.results[i][0].transcript;
      onText(txt, e.results[e.results.length - 1].isFinal);
    };
    r.onerror = function (e) { CG9.toast("Micro: " + (e.error === "not-allowed" ? "chưa được cấp quyền" : e.error)); };
    r.onend = function () { if (onEnd) onEnd(); };
    try { r.start(); } catch (e) { return null; }
    return r;
  };
  CG9.speakBtn = function (text, label) {
    var b = CG9.el("button", "speakbtn", label || "🔊");
    b.type = "button"; b.title = "Nghe phát âm";
    b.addEventListener("click", function (e) { e.stopPropagation(); CG9.speak(text); });
    return b;
  };

  /* cleanup callbacks run when the router leaves the current page (timers etc.) */
  var leaveFns = [];
  CG9.onLeave = function (fn) { leaveFns.push(fn); };
  CG9.leavePage = function () {
    var fns = leaveFns; leaveFns = [];
    fns.forEach(function (f) { try { f(); } catch (e) { /* ignore */ } });
    document.querySelectorAll(".modal-bg").forEach(function (m) { m.remove(); });
  };

  /* ---------------- UI bits ---------------- */
  CG9.toast = function (msg, ms) {
    var t = CG9.el("div", "toast", msg);
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add("show"); }, 20);
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 400); }, ms || 2600);
  };
  CG9.confetti = function (emojis) {
    emojis = emojis || ["🥕", "🎉", "⭐", "🎊", "🌟", "🐰", "🏅"];
    for (var i = 0; i < 28; i++) {
      var s = CG9.el("span", "confetti", emojis[i % emojis.length]);
      s.style.left = (Math.random() * 100) + "vw";
      s.style.animationDuration = (1.6 + Math.random() * 1.6) + "s";
      s.style.fontSize = (1 + Math.random() * 1.4) + "rem";
      document.body.appendChild(s);
      setTimeout(function (x) { return function () { x.remove(); }; }(s), 3400);
    }
  };
  CG9.modal = function (html, opts) {
    opts = opts || {};
    var bg = CG9.el("div", "modal-bg");
    var box = CG9.el("div", "modal" + (opts.wide ? " wide" : ""));
    box.innerHTML = html;
    bg.appendChild(box); document.body.appendChild(bg);
    setTimeout(function () { bg.classList.add("show"); }, 20);
    function close() { bg.classList.remove("show"); setTimeout(function () { bg.remove(); }, 250); if (opts.onClose) opts.onClose(); }
    bg.addEventListener("click", function (e) { if (e.target === bg && !opts.sticky) close(); });
    box.querySelectorAll("[data-close]").forEach(function (b) { b.addEventListener("click", close); });
    return { box: box, close: close };
  };
  CG9.starsHtml = function (n, max) {
    var s = ""; for (var i = 0; i < (max || 3); i++) s += "<span class='" + (i < n ? "st-on" : "st-off") + "'>★</span>";
    return "<span class='stars'>" + s + "</span>";
  };
  CG9.bar = function (pct, color) {
    return "<div class='bar'><i style='width:" + Math.max(0, Math.min(100, pct)) + "%" + (color ? ";background:" + color : "") + "'></i></div>";
  };

  /* ---------------- IndexedDB (story images) ---------------- */
  var dbp = null;
  function db() {
    if (dbp) return dbp;
    dbp = new Promise(function (res, rej) {
      if (!window.indexedDB) return rej(new Error("no idb"));
      var r = indexedDB.open("cg9-app", 1);
      r.onupgradeneeded = function () { r.result.createObjectStore("blobs"); };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
    return dbp;
  }
  CG9.idbSet = function (k, v) {
    return db().then(function (d) {
      return new Promise(function (res, rej) {
        var tx = d.transaction("blobs", "readwrite"); tx.objectStore("blobs").put(v, k);
        tx.oncomplete = function () { res(); }; tx.onerror = function () { rej(tx.error); };
      });
    }).catch(function () { /* images are optional */ });
  };
  CG9.idbGet = function (k) {
    return db().then(function (d) {
      return new Promise(function (res) {
        var r = d.transaction("blobs").objectStore("blobs").get(k);
        r.onsuccess = function () { res(r.result); }; r.onerror = function () { res(null); };
      });
    }).catch(function () { return null; });
  };
  CG9.idbDel = function (k) {
    return db().then(function (d) { d.transaction("blobs", "readwrite").objectStore("blobs").delete(k); }).catch(function () {});
  };
})();

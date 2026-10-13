/* Learning Cambridge Global 9 — progress tracking, XP/levels, streaks, badges, shop, certificates */
(function () {
  "use strict";
  var el = CG9.el;

  var RANKS = [
    { xp: 0, name: "Thỏ Tập Sự", icon: "🐣" },
    { xp: 150, name: "Thỏ Chăm Chỉ", icon: "🐰" },
    { xp: 500, name: "Thỏ Ham Học", icon: "📚" },
    { xp: 1200, name: "Thỏ Thông Thái", icon: "🦉" },
    { xp: 2500, name: "Thỏ Siêu Sao", icon: "🌟" },
    { xp: 4500, name: "Thỏ Vô Địch", icon: "🏆" },
    { xp: 7500, name: "Thỏ Huyền Thoại", icon: "👑" }
  ];
  var DAILY_GOAL = 60; // XP per day

  var P = CG9.Progress = {
    RANKS: RANKS, DAILY_GOAL: DAILY_GOAL,
    rank: function (xp) {
      var r = RANKS[0], next = null;
      for (var i = 0; i < RANKS.length; i++) { if (xp >= RANKS[i].xp) { r = RANKS[i]; next = RANKS[i + 1] || null; } }
      return { cur: r, next: next, pct: next ? Math.round((xp - r.xp) / (next.xp - r.xp) * 100) : 100 };
    },
    addCarrots: function (n) {
      CG9.state.carrots += n; CG9.save();
      if (CG9.updateHud) CG9.updateHud();
    },
    tagStat: function (tag, ok) {
      var t = CG9.state.tags[tag] || (CG9.state.tags[tag] = { c: 0, t: 0 });
      t.t++; if (ok) t.c++;
    },
    mistake: function (item, src) {
      if (!item || !CG9.isScored(item)) return;
      var k = CG9.hash(JSON.stringify(item));
      var m = CG9.state.mistakes[k] || { item: item, src: src || "", wrong: 0, right: 0 };
      m.wrong++; m.right = 0; m.ts = Date.now();
      CG9.state.mistakes[k] = m;
      var keys = Object.keys(CG9.state.mistakes);
      if (keys.length > 300) {
        keys.sort(function (a, b) { return CG9.state.mistakes[a].ts - CG9.state.mistakes[b].ts; });
        delete CG9.state.mistakes[keys[0]];
      }
    },
    mistakeRight: function (item) {
      var k = CG9.hash(JSON.stringify(item)), m = CG9.state.mistakes[k];
      if (!m) return;
      m.right++;
      if (m.right >= 2) { delete CG9.state.mistakes[k]; CG9.state.counters = CG9.state.counters || {}; CG9.state.counters.fixed = (CG9.state.counters.fixed || 0) + 1; }
    },
    count: function (name, n) {
      var c = CG9.state.counters || (CG9.state.counters = {});
      c[name] = (c[name] || 0) + (n || 1);
    },
    levelKey: function (lessonId, levelId) { return lessonId + ":" + levelId; },

    /* called by Activity.finish and by other modes (flashcards, story...) */
    finishActivity: function (a) {
      var s = CG9.state, before = P.rank(s.xp).cur.name;
      var pct = a.total ? a.correct / a.total : 1;
      var stars = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.4 ? 1 : 0;
      if (!a.total) stars = 3;
      var xp = Math.round(8 + a.correct * 2 + (stars === 3 && a.total >= 5 ? 10 : 0) + (a.kind === "exam" ? 20 : 0) + (a.bonusXp || 0));
      s.xp += xp;
      // streak + daily
      var today = CG9.today(), streakUp = false;
      if (s.streak.last !== today) {
        var y = new Date(); y.setDate(y.getDate() - 1);
        var yk = y.getFullYear() + "-" + String(y.getMonth() + 1).padStart(2, "0") + "-" + String(y.getDate()).padStart(2, "0");
        s.streak.count = s.streak.last === yk ? s.streak.count + 1 : 1;
        s.streak.last = today; s.streak.best = Math.max(s.streak.best || 0, s.streak.count);
        streakUp = true;
      }
      var d = s.daily[today] || (s.daily[today] = { xp: 0, acts: 0, min: 0 });
      var goalBefore = d.xp >= DAILY_GOAL;
      d.xp += xp; d.acts++; d.min += Math.round((a.seconds || 0) / 60);
      var bonusCarrots = 0;
      if (!goalBefore && d.xp >= DAILY_GOAL) { bonusCarrots = 10; s.carrots += 10; CG9.toast("🎯 Hoàn thành mục tiêu hôm nay! +10 🥕", 3500); }
      // activity bests
      if (a.key) {
        var r = s.acts[a.key] || (s.acts[a.key] = { best: 0, count: 0 });
        r.count++; r.best = Math.max(r.best, Math.round(pct * 100)); r.ts = Date.now(); r.stars = Math.max(r.stars || 0, stars);
      }
      s.history.unshift({ ts: Date.now(), key: a.key, title: a.title, unit: a.unit || 0, kind: a.kind, correct: a.correct, total: a.total, pct: Math.round(pct * 100), xp: xp });
      if (s.history.length > 400) s.history.length = 400;
      if (a.kind === "exam" && pct === 1) P.count("perfectExam");
      if (pct === 1 && a.total >= 5) P.count("perfect");
      var res = { correct: a.correct, total: a.total, stars: stars, xp: xp, carrots: (a.carrots || 0) + bonusCarrots, streakUp: streakUp && s.streak.count > 1, pct: pct };
      if (a.onSave) a.onSave(res);
      res.newBadges = CG9.Awards.check();
      var after = P.rank(s.xp).cur;
      if (after.name !== before) { res.levelUp = after.icon + " " + after.name; s.carrots += 20; res.carrots += 20; }
      res.certificate = CG9.Awards.certificateFor(a);
      CG9.save(); CG9.updateHud && CG9.updateHud();
      return res;
    },

    /* ---- per-unit progress ---- */
    lessonStats: function (lesson) {
      var lv = lesson.game.levels || [], done = 0, stars = 0;
      lv.forEach(function (l) { var r = CG9.state.levels[P.levelKey(lesson.id, l.id)]; if (r) { done++; stars += r.stars || 0; } });
      return { total: lv.length, done: done, stars: stars, maxStars: lv.length * 3 };
    },
    unitStats: function (unit) {
      var total = 0, done = 0, stars = 0, maxStars = 0;
      CG9.lessonsOf(unit).forEach(function (l) { var s = P.lessonStats(l); total += s.total; done += s.done; stars += s.stars; maxStars += s.maxStars; });
      var extra = ["exam-" + unit, "skill-" + unit + "-pron", "skill-" + unit + "-wordform", "skill-" + unit + "-sentences", "skill-" + unit + "-reading-0", "skill-" + unit + "-reading-1", "vocab-" + unit + "-quiz"];
      extra.forEach(function (k) { total++; if (CG9.state.acts[k]) done++; });
      return { total: total, done: done, pct: total ? Math.round(done / total * 100) : 0, stars: stars, maxStars: maxStars, exam: CG9.state.acts["exam-" + unit] };
    }
  };

  /* ===================== badges ===================== */
  function unitsWith(fn) { return CG9.UNITS.filter(function (u) { return fn(u.n); }).length; }
  var BADGES = [
    { id: "first", icon: "🌱", name: "Khởi đầu", desc: "Hoàn thành hoạt động đầu tiên", test: function (s) { return s.history.length >= 1; } },
    { id: "ten", icon: "📗", name: "Chăm chỉ", desc: "Hoàn thành 10 hoạt động", test: function (s) { return s.history.length >= 10; } },
    { id: "fifty", icon: "📚", name: "Mọt sách", desc: "Hoàn thành 50 hoạt động", test: function (s) { return s.history.length >= 50; } },
    { id: "hundred", icon: "🎓", name: "Học giả", desc: "Hoàn thành 100 hoạt động", test: function (s) { return s.history.length >= 100; } },
    { id: "perfect", icon: "💯", name: "Tuyệt đối", desc: "Đạt 100% một bài từ 5 câu trở lên", test: function (s) { return (s.counters || {}).perfect >= 1; } },
    { id: "perfect10", icon: "🎯", name: "Thiện xạ", desc: "Đạt 100% 10 lần", test: function (s) { return (s.counters || {}).perfect >= 10; } },
    { id: "streak3", icon: "🔥", name: "Lửa nhỏ", desc: "Học 3 ngày liên tiếp", test: function (s) { return s.streak.best >= 3; } },
    { id: "streak7", icon: "☄️", name: "Lửa bừng", desc: "Học 7 ngày liên tiếp", test: function (s) { return s.streak.best >= 7; } },
    { id: "streak30", icon: "🌋", name: "Ngọn lửa bất diệt", desc: "Học 30 ngày liên tiếp", test: function (s) { return s.streak.best >= 30; } },
    { id: "carrot500", icon: "🥕", name: "Vựa cà rốt", desc: "Sở hữu 500 cà rốt", test: function (s) { return s.carrots >= 500; } },
    { id: "exam1", icon: "📝", name: "Dũng cảm thi", desc: "Làm bài kiểm tra tổng hợp đầu tiên", test: function (s) { return unitsWith(function (n) { return s.acts["exam-" + n]; }) >= 1; } },
    { id: "exam80", icon: "🏅", name: "Bài thi xuất sắc", desc: "Đạt từ 80% bài kiểm tra tổng hợp", test: function (s) { return unitsWith(function (n) { var a = s.acts["exam-" + n]; return a && a.best >= 80; }) >= 1; } },
    { id: "examall", icon: "🏆", name: "Chinh phục 8 Unit", desc: "Đạt từ 80% cả 8 bài kiểm tra", test: function (s) { return unitsWith(function (n) { var a = s.acts["exam-" + n]; return a && a.best >= 80; }) >= 8; } },
    { id: "mixed", icon: "🔀", name: "Bậc thầy ôn tập", desc: "Đạt từ 80% một bài ôn tập mix 2 unit", test: function (s) { return [1, 3, 5, 7].some(function (n) { var a = s.acts["mixed-" + n]; return a && a.best >= 80; }); } },
    { id: "pron", icon: "🗣️", name: "Phát âm chuẩn", desc: "Đạt từ 80% một bài phát âm", test: function (s) { return unitsWith(function (n) { var a = s.acts["skill-" + n + "-pron"]; return a && a.best >= 80; }) >= 1; } },
    { id: "wordform", icon: "🧩", name: "Phù thuỷ từ loại", desc: "Đạt từ 80% một bài word form", test: function (s) { return unitsWith(function (n) { var a = s.acts["skill-" + n + "-wordform"]; return a && a.best >= 80; }) >= 1; } },
    { id: "reader", icon: "📖", name: "Người đọc giỏi", desc: "Hoàn thành 5 bài đọc hiểu", test: function (s) { return Object.keys(s.acts).filter(function (k) { return /reading|aireading/.test(k); }).length >= 5; } },
    { id: "writer", icon: "✍️", name: "Cây bút nhỏ", desc: "Nhận AI chấm 3 bài viết", test: function (s) { return (s.counters || {}).aiWriting >= 3; } },
    { id: "story", icon: "📕", name: "Người kể chuyện", desc: "Tạo một câu chuyện phiêu lưu", test: function (s) { return (s.counters || {}).stories >= 1; } },
    { id: "story5", icon: "🐉", name: "Nhà phiêu lưu", desc: "Đi qua 15 cảnh truyện", test: function (s) { return (s.counters || {}).scenes >= 15; } },
    { id: "fixer", icon: "🩹", name: "Sửa sai siêu đẳng", desc: "Sửa được 20 lỗi sai trong Sổ lỗi sai", test: function (s) { return (s.counters || {}).fixed >= 20; } },
    { id: "vocab50", icon: "🧠", name: "Kho từ vựng", desc: "Thuộc 50 từ (flashcard)", test: function (s) { return Object.keys(s.vocab).filter(function (k) { return s.vocab[k] >= 3; }).length >= 50; } },
    { id: "unit1", icon: "🥉", name: "Hoàn thành 1 Unit", desc: "Hoàn thành 80% nội dung một Unit", test: function () { return unitsWith(function (n) { return P.unitStats(n).pct >= 80; }) >= 1; } },
    { id: "unit4", icon: "🥈", name: "Nửa chặng đường", desc: "Hoàn thành 80% nội dung 4 Unit", test: function () { return unitsWith(function (n) { return P.unitStats(n).pct >= 80; }) >= 4; } },
    { id: "unit8", icon: "🥇", name: "Về đích", desc: "Hoàn thành 80% nội dung cả 8 Unit", test: function () { return unitsWith(function (n) { return P.unitStats(n).pct >= 80; }) >= 8; } }
  ];

  /* ===================== shop ===================== */
  var SHOP = {
    avatars: [
      { id: "🐰", price: 0 }, { id: "🐱", price: 40 }, { id: "🐶", price: 40 }, { id: "🐼", price: 60 }, { id: "🦊", price: 60 },
      { id: "🐨", price: 80 }, { id: "🐯", price: 100 }, { id: "🦁", price: 120 }, { id: "🐸", price: 80 }, { id: "🐧", price: 100 },
      { id: "🦄", price: 200 }, { id: "🐲", price: 300 }, { id: "🦖", price: 250 }, { id: "🤖", price: 200 }, { id: "👩‍🚀", price: 350 }
    ],
    themes: [
      { id: "meadow", name: "Đồng cỏ", price: 0, c: "#2f9e44" },
      { id: "ocean", name: "Đại dương", price: 120, c: "#1c7ed6" },
      { id: "sunset", name: "Hoàng hôn", price: 120, c: "#e8590c" },
      { id: "berry", name: "Dâu tây", price: 150, c: "#c2255c" },
      { id: "galaxy", name: "Thiên hà", price: 250, c: "#7048e8" }
    ]
  };

  var A = CG9.Awards = {
    BADGES: BADGES, SHOP: SHOP,
    check: function () {
      var s = CG9.state, out = [];
      BADGES.forEach(function (b) {
        if (s.badges[b.id]) return;
        var ok = false; try { ok = b.test(s); } catch (e) { ok = false; }
        if (ok) { s.badges[b.id] = Date.now(); s.carrots += 15; out.push(b); }
      });
      return out;
    },
    checkAndToast: function () {
      var nb = A.check();
      nb.forEach(function (b, i) { setTimeout(function () { CG9.sfx.badge(); CG9.toast("🏅 Huy hiệu mới: " + b.icon + " " + b.name + " (+15 🥕)", 3500); }, i * 900); });
      if (nb.length) CG9.save();
    },
    buy: function (type, id) {
      var item = SHOP[type].filter(function (x) { return x.id === id; })[0], s = CG9.state;
      var owned = s.owned[type];
      if (owned.indexOf(id) >= 0) return true;
      if (s.carrots < item.price) { CG9.toast("Chưa đủ cà rốt! Cần " + item.price + " 🥕"); return false; }
      s.carrots -= item.price; owned.push(id); CG9.save(); CG9.sfx.win(); CG9.confetti(["🥕", "🛍️", "✨"]);
      return true;
    },
    applyTheme: function () {
      var t = SHOP.themes.filter(function (x) { return x.id === CG9.state.profile.theme; })[0] || SHOP.themes[0];
      document.documentElement.dataset.theme = t.id;
    },
    certificateFor: function (a) {
      if (a.kind === "exam" && a.total && a.correct / a.total >= 0.8) return { title: "Bài kiểm tra tổng hợp Unit " + a.unit, unit: a.unit, pct: Math.round(a.correct / a.total * 100) };
      if (a.kind === "mixed" && a.total && a.correct / a.total >= 0.8) return { title: a.title, unit: a.unit, pct: Math.round(a.correct / a.total * 100) };
      return null;
    },
    certificate: function (c) {
      var u = CG9.unit(c.unit) || { title: "", icon: "🏆" };
      var name = CG9.esc(CG9.state.profile.name || "Bạn nhỏ chăm chỉ");
      var d = new Date();
      var html = "<div class='cert' id='certBox'>" +
        "<div class='cert-in'><div class='cert-top'>🏆 GIẤY KHEN 🏆</div>" +
        "<div class='cert-sub'>Learning Cambridge Global 9</div>" +
        "<p>Trao tặng</p><div class='cert-name'>" + CG9.state.profile.avatar + " " + name + "</div>" +
        "<p>đã hoàn thành xuất sắc</p><div class='cert-what'>" + CG9.esc(c.title) + "</div>" +
        "<p>với kết quả <b>" + c.pct + "%</b> " + CG9.starsHtml(c.pct >= 90 ? 3 : 2) + "</p>" +
        "<div class='cert-foot'><span>Ngày " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "</span><span>🐰 Thỏ Quest</span></div></div></div>" +
        "<div class='mrow-btns noprint'><button class='btn ghost' data-close>Đóng</button><button class='btn primary' data-print>🖨️ In / Lưu PDF</button></div>";
      var m = CG9.modal(html, { wide: true });
      m.box.querySelector("[data-print]").addEventListener("click", function () { document.body.classList.add("printing-cert"); window.print(); setTimeout(function () { document.body.classList.remove("printing-cert"); }, 500); });
      CG9.confetti(["🏆", "🎉", "⭐"]);
    }
  };
})();

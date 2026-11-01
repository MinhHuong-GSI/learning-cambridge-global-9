/* Learning Cambridge Global 9 — router + screens */
(function () {
  "use strict";
  var el = CG9.el, esc = CG9.esc, P = CG9.Progress;
  var main;

  /* ===================== HUD / nav ===================== */
  CG9.updateHud = function () {
    var s = CG9.state, r = P.rank(s.xp);
    var h = document.getElementById("hud"); if (!h) return;
    h.innerHTML = "<span title='Chuỗi ngày học'>🔥 " + s.streak.count + "</span><span title='Cà rốt'>🥕 " + s.carrots + "</span>" +
      "<a href='#/awards' class='hudrank' title='" + r.cur.name + " · " + s.xp + " XP'>" + s.profile.avatar + "<b>" + r.cur.icon + "</b></a>";
  };
  function setNav(name) {
    document.querySelectorAll("[data-nav]").forEach(function (a) { a.classList.toggle("on", a.dataset.nav === name); });
  }

  /* ===================== router ===================== */
  function route() {
    var h = location.hash.replace(/^#\/?/, "").split("?")[0];
    var p = h.split("/").filter(Boolean);
    try { speechSynthesis.cancel(); } catch (e) {}
    CG9.leavePage();
    main.innerHTML = ""; main.className = "";
    var nav = "home";
    switch (p[0] || "") {
      case "": home(); break;
      case "units": nav = "learn"; units(); break;
      case "unit": nav = "learn"; unitPage(+p[1], p[2] || "lessons"); break;
      case "lesson": nav = "learn"; lessonPage(CG9.lessonById[p[1]]); break;
      case "play": nav = "learn"; CG9.playLevel(main, CG9.lessonById[p[1]], p[2]); break;
      case "vocab": nav = "learn"; CG9.playVocab(main, p[1], p[2]); break;
      case "skill": nav = "learn"; CG9.playSkill(main, +p[1], p[2], +(p[3] || 0)); break;
      case "aireading": nav = "learn"; CG9.playAIReading(main, +p[1]); break;
      case "practice": nav = "learn"; CG9.playPractice(main, +p[1], p[2]); break;
      case "exam": nav = "review"; CG9.playExam(main, +p[1]); break;
      case "quiz": nav = "review"; CG9.quickQuiz(main, +p[1]); break;
      case "mixed": nav = "review"; CG9.mixedReview(main, +p[1]); break;
      case "mistakes": nav = "review"; CG9.mistakeReview(main); break;
      case "review": nav = "review"; reviewHub(); break;
      case "story": nav = "story"; CG9.AI.renderStoryPage(main); break;
      case "progress": nav = "me"; progressPage(); break;
      case "awards": nav = "me"; awardsPage(); break;
      case "settings": nav = "me"; settingsPage(); break;
      default: home();
    }
    setNav(nav);
    CG9.updateHud();
    if (!/^(play|vocab|skill|practice|exam|quiz|mixed|mistakes)$/.test(p[0] || "")) window.scrollTo(0, 0);
  }

  /* ===================== HOME ===================== */
  function home() {
    var s = CG9.state, r = P.rank(s.xp), d = s.daily[CG9.today()] || { xp: 0, acts: 0 };
    var goalPct = Math.min(100, Math.round(d.xp / P.DAILY_GOAL * 100));
    var hr = new Date().getHours();
    var hello = hr < 11 ? "Chào buổi sáng" : hr < 18 ? "Chào buổi chiều" : "Chào buổi tối";
    var hero = el("section", "hero card");
    hero.innerHTML =
      "<div class='hero-l'><div class='avatar big'>" + s.profile.avatar + "</div><div><h1>" + hello + ", " + esc(s.profile.name || "bạn") + "! 👋</h1>" +
      "<p class='rank'>" + r.cur.icon + " <b>" + r.cur.name + "</b> · " + s.xp + " XP" + (r.next ? " · còn " + (r.next.xp - s.xp) + " XP lên <b>" + r.next.name + "</b>" : "") + "</p>" +
      CG9.bar(r.pct) + "</div></div>" +
      "<div class='hero-r'><div class='ring' style='--p:" + goalPct + "'><div><b>" + d.xp + "</b><small>/" + P.DAILY_GOAL + " XP</small></div></div><small>Mục tiêu hôm nay</small></div>";
    main.appendChild(hero);

    var stats = el("section", "statrow");
    [["🔥", s.streak.count, "ngày liên tiếp"], ["🥕", s.carrots, "cà rốt"], ["🏅", Object.keys(s.badges).length + "/" + CG9.Awards.BADGES.length, "huy hiệu"], ["📝", s.history.length, "bài đã làm"]].forEach(function (x) {
      stats.appendChild(el("div", "stat card", "<span>" + x[0] + "</span><b>" + x[1] + "</b><small>" + x[2] + "</small>"));
    });
    main.appendChild(stats);

    // continue
    var last = s.history.filter(function (h) { return h.unit; })[0];
    var cu = s.lastUnit || (last && last.unit) || 1;
    var cont = el("section", "card continue");
    var next = nextLevel(cu);
    cont.innerHTML = "<div><small>Tiếp tục học</small><h3>" + CG9.unit(cu).icon + " Unit " + cu + ": " + CG9.unit(cu).title + "</h3>" +
      (next ? "<p>Tiếp theo: <b>" + esc(next.lesson.type === "lesson" ? cu + "." + next.lesson.num + " " + next.lesson.title : next.lesson.title) + "</b> — " + esc(next.level.vn) + "</p>" : "<p>Em đã làm hết các màn của Unit này! Thử bài kiểm tra nhé 📝</p>") + "</div>";
    var go = el("a", "btn primary big", next ? "▶ Học tiếp" : "📝 Làm bài kiểm tra");
    go.href = next ? "#/play/" + next.lesson.id + "/" + next.level.id : "#/exam/" + cu;
    cont.appendChild(go);
    main.appendChild(cont);

    // quick actions
    var qa = el("section", "quick");
    [["#/story", "📕", "Truyện phiêu lưu AI", "Nhân vật + bối cảnh → truyện có tranh"],
     ["#/unit/" + cu + "/vocab", "🃏", "Ôn từ vựng", "Thẻ ghi nhớ, nghe, chính tả, lật hình"],
     ["#/quiz/" + cu, "⚡", "Quiz nhanh", "20 câu ngẫu nhiên Unit " + cu],
     ["#/mistakes", "🩹", "Sổ lỗi sai", Object.keys(s.mistakes).length + " câu cần ôn"]].forEach(function (x) {
      var a = el("a", "qa card", "<span>" + x[1] + "</span><b>" + x[2] + "</b><small>" + x[3] + "</small>"); a.href = x[0]; qa.appendChild(a);
    });
    main.appendChild(qa);

    main.appendChild(el("h2", "sect", "📚 8 Unit của sách"));
    main.appendChild(unitGrid());
  }
  function nextLevel(unit) {
    var ls = CG9.lessonsOf(unit);
    for (var i = 0; i < ls.length; i++) {
      var lv = ls[i].game.levels || [];
      for (var j = 0; j < lv.length; j++) if (!CG9.state.levels[P.levelKey(ls[i].id, lv[j].id)]) return { lesson: ls[i], level: lv[j] };
    }
    return null;
  }
  function unitGrid() {
    var g = el("div", "unitgrid");
    CG9.UNITS.forEach(function (u) {
      var st = P.unitStats(u.n);
      var a = el("a", "unitcard card");
      a.href = "#/unit/" + u.n; a.style.setProperty("--uc", u.color);
      a.innerHTML = "<div class='uicon'>" + u.icon + "</div><div class='uinfo'><small>Unit " + u.n + "</small><b>" + u.title + "</b><span>" + u.vi + "</span>" +
        CG9.bar(st.pct, u.color) + "<small>" + st.pct + "% · ★ " + st.stars + "/" + st.maxStars + (st.exam ? " · 📝 " + st.exam.best + "%" : "") + "</small></div>";
      g.appendChild(a);
    });
    return g;
  }
  function units() {
    main.appendChild(el("div", "pagehead", "<h1>📚 Các Unit</h1><p>Cambridge Global English 9 — chọn Unit để học bài, ôn từ vựng, luyện kỹ năng và làm bài kiểm tra.</p>"));
    main.appendChild(unitGrid());
  }

  /* ===================== UNIT PAGE ===================== */
  function unitPage(n, tab) {
    var u = CG9.unit(n); if (!u) return home();
    CG9.state.lastUnit = n; CG9.save();
    var st = P.unitStats(n);
    var head = el("div", "unithead card");
    head.style.setProperty("--uc", u.color);
    head.innerHTML = "<a class='back' href='#/units'>⬅ Các Unit</a><div class='uh'><span class='uicon'>" + u.icon + "</span><div><small>Unit " + n + "</small><h1>" + u.title + "</h1><p>" + u.vi + "</p></div></div>" +
      CG9.bar(st.pct, u.color) + "<small>Hoàn thành " + st.pct + "% · ★ " + st.stars + "/" + st.maxStars + "</small>";
    main.appendChild(head);
    var tabs = el("div", "tabs");
    [["lessons", "📖 Bài học"], ["vocab", "🃏 Từ vựng"], ["skills", "🎯 Kỹ năng"], ["review", "🏁 Ôn tập & Kiểm tra"]].forEach(function (t) {
      var a = el("a", "tab" + (t[0] === tab ? " on" : ""), t[1]); a.href = "#/unit/" + n + "/" + t[0]; tabs.appendChild(a);
    });
    main.appendChild(tabs);
    var body = el("div", "tabbody"); main.appendChild(body);
    if (tab === "lessons") {
      var list = el("div", "lessonlist");
      CG9.lessonsOf(n).forEach(function (l) {
        var ls = P.lessonStats(l);
        var a = el("a", "lessoncard card" + (ls.done === ls.total ? " done" : ""));
        a.href = "#/lesson/" + l.id;
        var label = l.type === "lesson" ? n + "." + l.num : l.type === "review" ? "🏁" : "🔗";
        a.innerHTML = "<div class='lnum'>" + label + "</div><div class='linfo'><b>" + esc(l.title) + "</b><small>" + esc(l.game.brand || "") + " · " + ls.total + " màn</small>" +
          CG9.bar(ls.total ? ls.done / ls.total * 100 : 0, u.color) + "</div><div class='lstars'>" + ls.stars + "<span>★</span></div>";
        list.appendChild(a);
      });
      body.appendChild(list);
    } else if (tab === "vocab") {
      var vocab = CG9.vocabOf(n);
      var modes = el("div", "modegrid");
      Object.keys(CG9.VOCAB_MODES).forEach(function (k) {
        var m = CG9.VOCAB_MODES[k], a = el("a", "mode card", "<span>" + m.icon + "</span><b>" + m.name + "</b><small>" + m.desc + "</small>");
        var best = CG9.state.acts["vocab-" + n + "-" + k]; if (best) a.innerHTML += "<em>" + best.best + "%</em>";
        a.href = "#/vocab/" + n + "/" + k; modes.appendChild(a);
      });
      body.appendChild(modes);
      body.appendChild(vocabTable(vocab, "📒 Từ vựng Unit " + n + " (" + vocab.length + " từ)"));
    } else if (tab === "skills") {
      var sp = CG9.skills[n];
      var grid = el("div", "modegrid");
      function card(href, icon, name, desc, key) {
        var a = el("a", "mode card", "<span>" + icon + "</span><b>" + name + "</b><small>" + desc + "</small>");
        var b = key && CG9.state.acts[key]; if (b) a.innerHTML += "<em>" + b.best + "%</em>";
        a.href = href; grid.appendChild(a);
      }
      if (sp) {
        card("#/skill/" + n + "/pron", "🔊", "Phát âm", "Âm, trọng âm — có nghe mẫu", "skill-" + n + "-pron");
        card("#/skill/" + n + "/wordform", "🧩", "Word form", "Họ từ & điền dạng đúng", "skill-" + n + "-wordform");
        card("#/skill/" + n + "/sentences", "🧱", "Cấu trúc câu", "Sắp xếp câu, viết lại câu", "skill-" + n + "-sentences");
        (sp.reading || []).forEach(function (r, i) { card("#/skill/" + n + "/reading/" + i, "📖", "Đọc hiểu " + (i + 1), esc(r.title), "skill-" + n + "-reading-" + i); });
        if (sp.writing && sp.writing.length) card("#/skill/" + n + "/writing", "✍️", "Viết đoạn văn", sp.writing.length + " đề · AI chấm bài", "skill-" + n + "-writing");
      } else body.appendChild(el("p", "muted", "Nội dung kỹ năng của Unit này đang được cập nhật."));
      if (CG9.practice[n]) {
        CG9.PRACTICE_PARTS.forEach(function (k) {
          var m = CG9.PRACTICE_NAMES[k];
          if (CG9.practice[n][k]) card("#/practice/" + n + "/" + k, m.icon, m.name, m.desc, "prac-" + n + "-" + k);
        });
      }
      card("#/aireading/" + n, "🤖", "Bài đọc mới (AI)", "AI soạn bài đọc cùng chủ đề + câu hỏi", null);
      card("#/story", "📕", "Truyện phiêu lưu AI", "Đọc truyện có tranh dùng từ vựng Unit " + n, null);
      body.appendChild(grid);
    } else if (tab === "review") {
      var g2 = el("div", "modegrid");
      var rv = CG9.lessonsOf(n, "review")[0], cn = CG9.lessonsOf(n, "connect")[0];
      function c2(href, icon, name, desc, key) {
        var a = el("a", "mode card", "<span>" + icon + "</span><b>" + name + "</b><small>" + desc + "</small>");
        var b = key && CG9.state.acts[key]; if (b) a.innerHTML += "<em>" + b.best + "%</em>";
        a.href = href; g2.appendChild(a);
      }
      if (CG9.exams[n]) c2("#/exam/" + n, "📝", "Bài kiểm tra tổng hợp", "Đề đầy đủ có hẹn giờ · Giấy khen khi đạt 80%", "exam-" + n);
      c2("#/quiz/" + n, "⚡", "Quiz nhanh", "20 câu ngẫu nhiên, mỗi lần một đề mới", "quiz-" + n);
      if (rv) c2("#/lesson/" + rv.id, "🏁", "Tổng ôn tập Unit " + n, "Các màn ôn tập theo chủ điểm", null);
      if (cn) c2("#/lesson/" + cn.id, "🔗", "Kết nối & Nâng cao", "Liên kết câu, ngữ pháp nâng cao, dịch", null);
      var first = n % 2 ? n : n - 1;
      c2("#/mixed/" + first, "🔀", "Ôn tập mix Unit " + first + " & " + (first + 1), "Đề trộn 2 unit, hẹn giờ 30 phút", "mixed-" + first);
      c2("#/mistakes", "🩹", "Sổ lỗi sai", "Làm lại những câu em đã sai", null);
      body.appendChild(g2);
    }
  }

  function vocabTable(vocab, title) {
    var box = el("section", "card");
    box.appendChild(el("h3", "", title));
    var search = el("input", "search"); search.placeholder = "🔎 Tìm từ…"; box.appendChild(search);
    var list = el("div", "vlist"); box.appendChild(list);
    function draw(q) {
      list.innerHTML = "";
      vocab.filter(function (v) { return !q || (v.term + " " + v.vi).toLowerCase().indexOf(q) >= 0; }).forEach(function (v) {
        var box2 = CG9.state.vocab[v.term] || 0;
        var row = el("div", "vrow", "<div><b>" + esc(v.term) + "</b> <span class='mastery'>" + (box2 >= 3 ? "✅" : box2 ? "🌱" : "") + "</span><div class='vi'>" + esc(v.vi) + "</div>" + (v.ex ? "<div class='ex'>" + esc(v.ex) + "</div>" : "") + "</div>");
        row.appendChild(CG9.speakBtn(v.term.replace(/\(.*?\)/g, "")));
        list.appendChild(row);
      });
    }
    search.addEventListener("input", function () { draw(search.value.trim().toLowerCase()); });
    draw("");
    return box;
  }

  /* ===================== LESSON PAGE ===================== */
  function lessonPage(l) {
    if (!l) return home();
    var u = CG9.unit(l.unit), g = l.game;
    CG9.state.lastUnit = l.unit;
    var head = el("div", "unithead card"); head.style.setProperty("--uc", u.color);
    head.innerHTML = "<a class='back' href='#/unit/" + l.unit + (l.type === "lesson" ? "" : "/review") + "'>⬅ Unit " + l.unit + "</a>" +
      "<div class='uh'><span class='uicon'>" + (l.type === "lesson" ? "📖" : l.type === "review" ? "🏁" : "🔗") + "</span><div><small>" + esc(g.brand || "") + "</small><h1>" + (l.type === "lesson" ? l.unit + "." + l.num + " " : "") + esc(l.title) + "</h1><p>" + (g.mapIntro || "") + "</p></div></div>";
    main.appendChild(head);
    var map = el("div", "levelmap");
    (g.levels || []).forEach(function (lv, i) {
      var r = CG9.state.levels[P.levelKey(l.id, lv.id)];
      var a = el("a", "level card" + (r ? " done" : ""));
      a.href = "#/play/" + l.id + "/" + lv.id;
      a.innerHTML = "<div class='lvn'>" + (i + 1) + "</div><div class='lvi'>" + lv.icon + "</div><b>" + esc(lv.vn) + "</b><small>" + esc(lv.en) + "</small>" + CG9.starsHtml(r ? r.stars : 0);
      map.appendChild(a);
    });
    main.appendChild(map);
    if (g.vocab && g.vocab.length) {
      var vm = el("div", "chips center");
      ["cards", "meaning", "listen", "spell", "memory"].forEach(function (k) {
        var m = CG9.VOCAB_MODES[k], a = el("a", "chip big", m.icon + " " + m.name); a.href = "#/vocab/" + l.id + "/" + k; vm.appendChild(a);
      });
      main.appendChild(el("h2", "sect", "🃏 Luyện từ vựng của bài"));
      main.appendChild(vm);
      main.appendChild(vocabTable(g.vocab, "📒 " + (g.notebookTitle || "Sổ tay từ vựng")));
    }
    if (g.grammarNotes && g.grammarNotes.length) {
      var gn = el("section", "card");
      gn.innerHTML = "<h3>⚙️ Ghi nhớ ngữ pháp</h3>" + g.grammarNotes.map(function (n) { return "<div class='theory'><h4>" + n.title + "</h4>" + String(n.body).replace(/\n/g, "<br>") + "</div>"; }).join("");
      main.appendChild(gn);
    }
  }

  /* ===================== REVIEW HUB ===================== */
  function reviewHub() {
    main.appendChild(el("div", "pagehead", "<h1>🏁 Ôn tập & Kiểm tra</h1><p>Ôn tập mix sau mỗi 2 Unit, bài kiểm tra tổng hợp từng Unit và sổ lỗi sai.</p>"));
    main.appendChild(el("h2", "sect", "🔀 Ôn tập mix (mỗi 2 Unit)"));
    var g = el("div", "modegrid");
    [1, 3, 5, 7].forEach(function (f) {
      var b = CG9.state.acts["mixed-" + f];
      var ready = P.unitStats(f).pct + P.unitStats(f + 1).pct;
      var a = el("a", "mode card wide", "<span>" + CG9.unit(f).icon + CG9.unit(f + 1).icon + "</span><b>Unit " + f + " & " + (f + 1) + "</b><small>" + CG9.unit(f).title + " + " + CG9.unit(f + 1).title + (ready < 60 ? " · 💡 nên học xong 2 unit trước" : "") + "</small>" + (b ? "<em>" + b.best + "%</em>" : ""));
      a.href = "#/mixed/" + f; g.appendChild(a);
    });
    main.appendChild(g);
    main.appendChild(el("h2", "sect", "📝 Kiểm tra tổng hợp từng Unit"));
    var g2 = el("div", "modegrid");
    CG9.UNITS.forEach(function (u) {
      var b = CG9.state.acts["exam-" + u.n];
      var a = el("a", "mode card", "<span>" + u.icon + "</span><b>Unit " + u.n + "</b><small>" + u.title + "</small>" + (b ? "<em>" + b.best + "%</em>" : ""));
      a.href = "#/exam/" + u.n; g2.appendChild(a);
    });
    main.appendChild(g2);
    main.appendChild(el("h2", "sect", "🩹 Khác"));
    var g3 = el("div", "modegrid");
    var m = el("a", "mode card", "<span>🩹</span><b>Sổ lỗi sai</b><small>" + Object.keys(CG9.state.mistakes).length + " câu đang chờ ôn lại</small>"); m.href = "#/mistakes"; g3.appendChild(m);
    CG9.UNITS.forEach(function (u) { var a = el("a", "mode card", "<span>⚡</span><b>Quiz nhanh Unit " + u.n + "</b><small>20 câu ngẫu nhiên</small>"); a.href = "#/quiz/" + u.n; g3.appendChild(a); });
    main.appendChild(g3);
  }

  /* ===================== PROGRESS ===================== */
  function progressPage() {
    var s = CG9.state;
    main.appendChild(el("div", "pagehead", "<h1>📈 Tiến độ học tập</h1><p>Mọi kết quả được lưu trên trình duyệt này. Dùng <b>Sao lưu</b> để chuyển sang máy khác.</p>"));
    // 14-day chart
    var days = [];
    for (var i = 13; i >= 0; i--) {
      var d = new Date(); d.setDate(d.getDate() - i);
      var k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      days.push({ k: k, label: d.getDate() + "/" + (d.getMonth() + 1), xp: (s.daily[k] || {}).xp || 0, acts: (s.daily[k] || {}).acts || 0 });
    }
    var max = Math.max(P.DAILY_GOAL, Math.max.apply(null, days.map(function (x) { return x.xp; })));
    var W = 560, H = 170, bw = W / 14;
    var svg = "<svg viewBox='0 0 " + W + " " + (H + 24) + "' class='chart' role='img' aria-label='XP 14 ngày gần nhất'>" +
      "<line x1='0' x2='" + W + "' y1='" + (H - P.DAILY_GOAL / max * H) + "' y2='" + (H - P.DAILY_GOAL / max * H) + "' class='goal'/>" +
      days.map(function (x, i) {
        var h = x.xp / max * H;
        return "<g><title>" + x.label + ": " + x.xp + " XP, " + x.acts + " bài</title><rect x='" + (i * bw + 5) + "' y='" + (H - h) + "' width='" + (bw - 10) + "' height='" + Math.max(h, 1) + "' rx='5' class='" + (x.xp >= P.DAILY_GOAL ? "hit" : "") + "'/>" +
          (x.xp ? "<text x='" + (i * bw + bw / 2) + "' y='" + (H - h - 4) + "' class='v'>" + x.xp + "</text>" : "") +
          "<text x='" + (i * bw + bw / 2) + "' y='" + (H + 16) + "' class='l'>" + x.label + "</text></g>";
      }).join("") + "</svg>";
    var c = el("section", "card", "<h3>⚡ XP 14 ngày gần nhất <small class='muted'>(đường kẻ = mục tiêu " + P.DAILY_GOAL + " XP/ngày)</small></h3>" + svg);
    main.appendChild(c);

    var totals = s.history.reduce(function (a, h) { a.c += h.correct; a.t += h.total; a.min += 0; return a; }, { c: 0, t: 0, min: 0 });
    var mins = Object.keys(s.daily).reduce(function (a, k) { return a + (s.daily[k].min || 0); }, 0);
    var sr = el("section", "statrow");
    [["📝", s.history.length, "bài đã làm"], ["✅", totals.t ? Math.round(totals.c / totals.t * 100) + "%" : "–", "tỉ lệ đúng"], ["⏱️", mins, "phút học"], ["🔥", s.streak.best, "chuỗi dài nhất"]].forEach(function (x) {
      sr.appendChild(el("div", "stat card", "<span>" + x[0] + "</span><b>" + x[1] + "</b><small>" + x[2] + "</small>"));
    });
    main.appendChild(sr);

    var two = el("div", "twocol");
    var units = el("section", "card", "<h3>📚 Theo Unit</h3>");
    CG9.UNITS.forEach(function (u) {
      var st = P.unitStats(u.n);
      units.innerHTML += "<div class='prow'><span>" + u.icon + " Unit " + u.n + "</span>" + CG9.bar(st.pct, u.color) + "<b>" + st.pct + "%</b>" + (st.exam ? "<small>📝" + st.exam.best + "%</small>" : "<small></small>") + "</div>";
    });
    two.appendChild(units);
    var skills = el("section", "card", "<h3>🎯 Theo kỹ năng <small class='muted'>(tỉ lệ đúng)</small></h3>");
    Object.keys(CG9.TAG_NAMES).forEach(function (t) {
      var x = s.tags[t]; if (!x || !x.t) { skills.innerHTML += "<div class='prow'><span>" + CG9.TAG_NAMES[t] + "</span>" + CG9.bar(0) + "<b>–</b><small></small></div>"; return; }
      var p = Math.round(x.c / x.t * 100);
      skills.innerHTML += "<div class='prow'><span>" + CG9.TAG_NAMES[t] + "</span>" + CG9.bar(p, p >= 80 ? "#2f9e44" : p >= 60 ? "#f59f00" : "#e03131") + "<b>" + p + "%</b><small>" + x.t + " câu</small></div>";
    });
    var weak = Object.keys(s.tags).filter(function (t) { return s.tags[t].t >= 10 && s.tags[t].c / s.tags[t].t < 0.7; });
    if (weak.length) skills.innerHTML += "<p class='tip'>💡 Nên luyện thêm: <b>" + weak.map(function (t) { return CG9.TAG_NAMES[t] || t; }).join(", ") + "</b></p>";
    two.appendChild(skills);
    main.appendChild(two);

    var hist = el("section", "card", "<h3>🗂️ Lịch sử làm bài</h3>");
    if (!s.history.length) hist.innerHTML += "<p class='muted'>Chưa có bài nào.</p>";
    else {
      var tbl = "<div class='tablewrap'><table class='hist'><tr><th>Thời gian</th><th>Bài</th><th>Kết quả</th><th>XP</th></tr>" +
        s.history.slice(0, 60).map(function (h) {
          var d = new Date(h.ts);
          return "<tr><td>" + d.toLocaleDateString("vi-VN") + " " + d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) + "</td><td>" + esc(h.title) + (h.unit ? " <small class='muted'>U" + h.unit + "</small>" : "") + "</td><td>" + (h.total ? h.correct + "/" + h.total + " <b class='" + (h.pct >= 80 ? "good" : h.pct >= 50 ? "mid" : "low") + "'>" + h.pct + "%</b>" : "✓") + "</td><td>+" + h.xp + "</td></tr>";
        }).join("") + "</table></div>";
      hist.innerHTML += tbl;
    }
    main.appendChild(hist);
    main.appendChild(backupCard());
  }

  function backupCard() {
    var b = el("section", "card", "<h3>💾 Sao lưu & khôi phục</h3><p class='muted'>Tiến độ chỉ lưu trên trình duyệt này. Tải file sao lưu để giữ an toàn hoặc chuyển sang máy/điện thoại khác. (File sao lưu có chứa API key nếu đã nhập.)</p>");
    var row = el("div", "mrow-btns");
    var ex = el("button", "btn", "⬇️ Tải file sao lưu");
    ex.addEventListener("click", function () {
      var blob = new Blob([CG9.exportState()], { type: "application/json" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob);
      a.download = "cg9-tien-do-" + CG9.today() + ".json"; a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    });
    var im = el("label", "btn ghost", "⬆️ Khôi phục từ file<input type='file' accept='.json,application/json' hidden>");
    im.querySelector("input").addEventListener("change", function (e) {
      var f = e.target.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try { CG9.importState(r.result); CG9.toast("✅ Đã khôi phục tiến độ!"); route(); }
        catch (err) { CG9.toast("⚠️ File không hợp lệ."); }
      };
      r.readAsText(f);
    });
    row.appendChild(ex); row.appendChild(im);
    b.appendChild(row);
    return b;
  }

  /* ===================== AWARDS & SHOP ===================== */
  function awardsPage() {
    var s = CG9.state, r = P.rank(s.xp);
    main.appendChild(el("div", "pagehead", "<h1>🏆 Thành tích & Phần thưởng</h1><p>Học mỗi ngày để nhận XP, cà rốt 🥕, huy hiệu và đổi quà trong cửa hàng!</p>"));
    var ranks = el("section", "card", "<h3>⬆️ Cấp bậc</h3>");
    var rl = el("div", "ranks");
    P.RANKS.forEach(function (x) {
      rl.appendChild(el("div", "rankitem" + (s.xp >= x.xp ? " got" : "") + (x === r.cur ? " cur" : ""), "<span>" + x.icon + "</span><b>" + x.name + "</b><small>" + x.xp + " XP</small>"));
    });
    ranks.appendChild(rl);
    ranks.appendChild(el("div", "", CG9.bar(r.pct) + "<small>" + s.xp + " XP" + (r.next ? " · còn " + (r.next.xp - s.xp) + " XP để lên " + r.next.icon + " " + r.next.name : " · Cấp cao nhất!") + "</small>"));
    main.appendChild(ranks);

    var bd = el("section", "card", "<h3>🏅 Huy hiệu (" + Object.keys(s.badges).length + "/" + CG9.Awards.BADGES.length + ")</h3>");
    var bg = el("div", "badgegrid");
    CG9.Awards.BADGES.forEach(function (b) {
      var got = s.badges[b.id];
      bg.appendChild(el("div", "badge" + (got ? " got" : ""), "<span>" + (got ? b.icon : "🔒") + "</span><b>" + b.name + "</b><small>" + b.desc + "</small>" + (got ? "<em>" + new Date(got).toLocaleDateString("vi-VN") + "</em>" : "")));
    });
    bd.appendChild(bg); main.appendChild(bd);

    var certs = [];
    CG9.UNITS.forEach(function (u) { var a = s.acts["exam-" + u.n]; if (a && a.best >= 80) certs.push({ title: "Bài kiểm tra tổng hợp Unit " + u.n + ": " + u.title, unit: u.n, pct: a.best }); });
    [1, 3, 5, 7].forEach(function (f) { var a = s.acts["mixed-" + f]; if (a && a.best >= 80) certs.push({ title: "Ôn tập tổng hợp Unit " + f + " & " + (f + 1), unit: f, pct: a.best }); });
    var cc = el("section", "card", "<h3>📜 Giấy khen</h3>");
    if (!certs.length) cc.innerHTML += "<p class='muted'>Đạt từ 80% bài kiểm tra tổng hợp hoặc bài ôn tập mix để nhận giấy khen.</p>";
    certs.forEach(function (c) { var b = el("button", "chip big", "📜 " + esc(c.title) + " · " + c.pct + "%"); b.addEventListener("click", function () { CG9.Awards.certificate(c); }); cc.appendChild(b); });
    main.appendChild(cc);

    var shop = el("section", "card", "<h3>🛍️ Cửa hàng cà rốt <span class='pill'>🥕 " + s.carrots + "</span></h3><h4>Nhân vật đại diện</h4>");
    var ag = el("div", "shopgrid");
    CG9.Awards.SHOP.avatars.forEach(function (a) {
      var own = s.owned.avatars.indexOf(a.id) >= 0, cur = s.profile.avatar === a.id;
      var b = el("button", "shopitem" + (cur ? " cur" : "") + (own ? " own" : ""), "<span>" + a.id + "</span><small>" + (cur ? "Đang dùng" : own ? "Dùng" : "🥕 " + a.price) + "</small>");
      b.addEventListener("click", function () { if (CG9.Awards.buy("avatars", a.id)) { s.profile.avatar = a.id; CG9.save(); route(); } });
      ag.appendChild(b);
    });
    shop.appendChild(ag);
    shop.appendChild(el("h4", "", "Màu giao diện"));
    var tg = el("div", "shopgrid");
    CG9.Awards.SHOP.themes.forEach(function (t) {
      var own = s.owned.themes.indexOf(t.id) >= 0, cur = s.profile.theme === t.id;
      var b = el("button", "shopitem theme" + (cur ? " cur" : "") + (own ? " own" : ""), "<span style='background:" + t.c + "'></span><b>" + t.name + "</b><small>" + (cur ? "Đang dùng" : own ? "Dùng" : "🥕 " + t.price) + "</small>");
      b.addEventListener("click", function () { if (CG9.Awards.buy("themes", t.id)) { s.profile.theme = t.id; CG9.save(); CG9.Awards.applyTheme(); route(); } });
      tg.appendChild(b);
    });
    shop.appendChild(tg);
    main.appendChild(shop);
  }

  /* ===================== SETTINGS ===================== */
  function settingsPage() {
    var s = CG9.state, st = s.settings;
    main.appendChild(el("div", "pagehead", "<h1>⚙️ Cài đặt</h1>"));
    var prof = el("section", "card form", "<h3>👤 Hồ sơ</h3><label>Tên của em<input id='sName' maxlength='30'></label>" +
      "<label class='row'><input type='checkbox' id='sSound'> Âm thanh hiệu ứng</label>");
    prof.querySelector("#sName").value = s.profile.name;
    prof.querySelector("#sSound").checked = s.sound;
    prof.querySelector("#sName").addEventListener("change", function (e) { s.profile.name = e.target.value.trim(); CG9.save(); CG9.toast("Đã lưu tên ✅"); });
    prof.querySelector("#sSound").addEventListener("change", function (e) { s.sound = e.target.checked; CG9.save(); });
    var voices = CG9.englishVoices();
    if (voices.length) {
      var vl = el("label", "", "Giọng đọc tiếng Anh");
      var sel = el("select"); sel.innerHTML = "<option value=''>Tự động (ưu tiên giọng Anh-Anh)</option>" + voices.map(function (v) { return "<option" + (v.name === st.voice ? " selected" : "") + ">" + esc(v.name) + "</option>"; }).join("");
      sel.addEventListener("change", function () { st.voice = sel.value; CG9.save(); CG9.speak("Hello! Let's learn English together."); });
      vl.appendChild(sel); prof.appendChild(vl);
    }
    main.appendChild(prof);

    var ai = el("section", "card form");
    ai.innerHTML = "<h3>🤖 OpenAI (Responses API)</h3>" +
      "<p class='muted'>Dùng cho: truyện phiêu lưu có tranh, AI chấm bài viết, tạo bài đọc mới. Các bài tập khác hoạt động không cần AI. " +
      "API key chỉ lưu trên trình duyệt này và được gửi thẳng tới api.openai.com — đừng nhập trên máy dùng chung. Tạo key tại platform.openai.com → API keys.</p>" +
      "<label>API key<input id='aKey' type='password' autocomplete='off' placeholder='sk-...'></label>" +
      "<label>Model văn bản<input id='aModel' list='modelList'></label>" +
      "<datalist id='modelList'><option>gpt-5.4-mini</option><option>gpt-5.4-nano</option><option>gpt-5.5</option><option>gpt-5</option><option>gpt-4.1-mini</option></datalist>" +
      "<label class='row'><input type='checkbox' id='aImg'> Vẽ tranh minh hoạ cho truyện</label>" +
      "<label>Model vẽ tranh<input id='aImgModel' list='imgList'></label>" +
      "<datalist id='imgList'><option>gpt-image-1-mini</option><option>gpt-image-1.5</option><option>gpt-image-2</option></datalist>" +
      "<label>Chất lượng tranh<select id='aQ'><option value='low'>Thấp (nhanh, rẻ)</option><option value='medium'>Vừa</option><option value='high'>Cao</option></select></label>" +
      "<div class='mrow-btns'><button class='btn primary' id='aSave'>💾 Lưu</button><button class='btn ghost' id='aTest'>🔌 Kiểm tra kết nối</button></div><div id='aOut'></div>";
    ai.querySelector("#aKey").value = st.apiKey;
    ai.querySelector("#aModel").value = st.textModel;
    ai.querySelector("#aImg").checked = st.images;
    ai.querySelector("#aImgModel").value = st.imageModel;
    ai.querySelector("#aQ").value = st.imageQuality;
    function saveAI() {
      st.apiKey = ai.querySelector("#aKey").value.trim();
      st.textModel = ai.querySelector("#aModel").value.trim() || "gpt-5.4-mini";
      st.images = ai.querySelector("#aImg").checked;
      st.imageModel = ai.querySelector("#aImgModel").value.trim();
      st.imageQuality = ai.querySelector("#aQ").value;
      CG9.save();
    }
    ai.querySelector("#aSave").addEventListener("click", function () { saveAI(); CG9.toast("Đã lưu cài đặt AI ✅"); });
    ai.querySelector("#aTest").addEventListener("click", function () {
      saveAI(); var out = ai.querySelector("#aOut");
      if (!st.apiKey) { out.innerHTML = "<p class='err'>Chưa nhập API key.</p>"; return; }
      out.innerHTML = "<div class='spinner'></div>";
      CG9.AI.test().then(function (t) { out.innerHTML = "<p class='good'>✅ Kết nối thành công (" + esc(st.textModel) + "): " + esc(t) + "</p>"; })
        .catch(function (e) { out.innerHTML = "<p class='err'>⚠️ " + esc(e.message) + "</p>"; });
    });
    main.appendChild(ai);
    main.appendChild(backupCard());
    var danger = el("section", "card", "<h3>🧹 Làm lại từ đầu</h3><p class='muted'>Xoá toàn bộ tiến độ, cà rốt, huy hiệu (giữ cài đặt AI).</p>");
    var rb = el("button", "btn danger", "Xoá tiến độ");
    rb.addEventListener("click", function () { if (confirm("Xoá TOÀN BỘ tiến độ học tập? Không thể hoàn tác!")) { CG9.resetState(); CG9.Awards.applyTheme(); CG9.toast("Đã xoá tiến độ."); location.hash = "#/"; } });
    danger.appendChild(rb); main.appendChild(danger);
    main.appendChild(el("p", "muted center", "Learning Cambridge Global 9 · " + CG9.lessons.length + " bài học · " + Object.keys(CG9.exams).length + " đề kiểm tra · " + Object.keys(CG9.skills).length + " gói kỹ năng · " + Object.keys(CG9.practice).length + " gói luyện thêm"));
  }

  /* ===================== boot ===================== */
  function welcome() {
    var m = CG9.modal("<div class='center'><div class='big-emoji'>🐰</div><h2>Chào mừng đến với Learning Cambridge Global 9!</h2><p>Học từ vựng, ngữ pháp, phát âm, word form, đọc hiểu và viết theo từng Unit của sách. Làm bài để nhận ⭐, 🥕 và huy hiệu!</p>" +
      "<label>Tên của em là gì?<input id='wName' maxlength='30' placeholder='VD: Thỏ'></label><button class='btn primary big' id='wGo'>Bắt đầu học 🚀</button></div>", { sticky: true });
    var inp = m.box.querySelector("#wName");
    function go() { CG9.state.profile.name = inp.value.trim() || "Thỏ"; CG9.save(); m.close(); route(); }
    m.box.querySelector("#wGo").addEventListener("click", go);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    setTimeout(function () { inp.focus(); }, 300);
  }

  document.addEventListener("DOMContentLoaded", function () {
    CG9.load();
    main = document.getElementById("main");
    CG9.Awards.applyTheme();
    var migrated = CG9.migrateOld();
    window.addEventListener("hashchange", route);
    route();
    if (!CG9.state.profile.name) welcome();
    if (migrated) CG9.toast("📥 Đã nhập " + migrated + " màn đã hoàn thành từ các file Thỏ Quest cũ!", 4000);
  });
})();

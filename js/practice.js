/* Learning Cambridge Global 9 — lesson player (GAME format adapter), item pools,
   reviews (unit quick quiz, mixed review every 2 units, mistakes), exams, vocabulary games */
(function () {
  "use strict";
  var el = CG9.el, esc = CG9.esc;

  /* ============ GAME block -> normalized items ============ */
  function levelTag(lv) {
    var s = (lv.vn + " " + lv.en).toLowerCase();
    if (/word form|từ loại|wordform/.test(s)) return "wordform";
    if (/grammar|ngữ pháp/.test(s)) return "grammar";
    if (/read|đọc/.test(s)) return "reading";
    if (/listen|nghe/.test(s)) return "listening";
    if (/writ|viết|email|câu/.test(s)) return "writing";
    if (/speak|nói/.test(s)) return "speaking";
    if (/dịch|translat|liên kết|connect/.test(s)) return "sentence";
    return "vocab";
  }
  function bossItem(it, tag) {
    switch (it.kind) {
      case "mcq": return { kind: "mcq", q: it.q, opts: it.opts, a: it.a, tag: tag };
      case "gapfill": return { kind: "gap", s: it.s, answers: [].concat(it.a), tag: tag };
      case "anagram": return { kind: "anagram", clue: it.clue, scrambled: it.scrambled, answer: it.answer, tag: "vocab" };
      case "classify": return { kind: "classify", word: it.word, ctx: it.ctx, cats: it.cats, cat: it.cat, tag: tag };
      case "transform": return { kind: "gap", s: it.s.replace(/_{3,}/, "___"), hint: it.root, answers: [].concat(it.a), tag: tag };
      case "choice2": return { kind: "choice2", s: it.s, options: it.options, a: it.a, explain: it.note, tag: tag };
    }
    return null;
  }
  CG9.blockItems = function (b, tag) {
    var out = [];
    switch (b.kind) {
      case "theory": out.push({ kind: "theory", html: b.html }); break;
      case "passage": out.push({ kind: "passage", text: b.text }); break;
      case "match":
        // split long lists into even groups of at most 8 pairs (never a 1-pair leftover)
        var groups = Math.ceil(b.pairs.length / 8), size = Math.ceil(b.pairs.length / groups);
        for (var i = 0; i < b.pairs.length; i += size) out.push({ kind: "match", pairs: b.pairs.slice(i, i + size), tag: tag === "grammar" ? "grammar" : "vocab" });
        break;
      case "mcq": (b.questions || []).forEach(function (q) { out.push({ kind: "mcq", q: q.q, opts: q.opts, a: q.a, tag: tag }); }); break;
      case "tf": (b.items || []).forEach(function (q) { out.push({ kind: "tf", s: q.s, a: q.a, tag: tag }); }); break;
      case "gapfill": (b.items || []).forEach(function (q) { out.push({ kind: "gap", s: (q.pre || "") + " ___ " + (q.post || ""), answers: q.answers, tag: tag }); }); break;
      case "anagram": (b.items || []).forEach(function (q) { if (!q.example) out.push({ kind: "anagram", clue: q.clue, scrambled: q.scrambled, answer: q.answer, tag: "vocab" }); }); break;
      case "classify": (b.items || []).forEach(function (q) { out.push({ kind: "classify", word: q.word, ctx: q.ctx, cats: b.cats, cat: q.cat, tag: tag }); }); break;
      case "transform": (b.items || []).forEach(function (q) { out.push({ kind: "gap", s: q.s.replace(/_{3,}/, "___"), hint: q.root, answers: [].concat(q.a), tag: tag === "vocab" ? "wordform" : tag }); }); break;
      case "choice2": (b.items || []).forEach(function (q) { out.push({ kind: "choice2", s: q.s, options: q.options, a: q.a, explain: q.note, tag: tag }); }); break;
      case "writing": (b.tasks || []).forEach(function (t) { out.push({ kind: "writing", prompt: t.prompt, sample: t.sample }); }); break;
      case "speaking": (b.cards || []).forEach(function (c) { out.push({ kind: "speaking", q: c.q, vi: c.vi, sample: c.sample }); }); break;
      case "boss": (b.items || []).forEach(function (q) { var x = bossItem(q, q.kind === "anagram" ? "vocab" : tag); if (x) out.push(x); }); break;
    }
    return out;
  };

  /* ============ item pools ============ */
  var poolCache = {};
  CG9.poolOf = function (unit) {
    if (poolCache[unit]) return poolCache[unit];
    var pool = [];
    CG9.lessonsOf(unit).forEach(function (l) {
      (l.game.levels || []).forEach(function (lv) {
        var hasPassage = lv.blocks.some(function (b) { return b.kind === "passage"; });
        var tag = levelTag(lv);
        lv.blocks.forEach(function (b) {
          if (hasPassage && b.kind !== "boss" && b.kind !== "match" && b.kind !== "anagram") return; // questions need the passage
          CG9.blockItems(b, tag).forEach(function (it) {
            if (CG9.isScored(it)) { it.src = l.id; pool.push(it); }
          });
        });
      });
    });
    var sp = CG9.skills[unit];
    if (sp) ["pron", "wordform", "sentences"].forEach(function (k) { ((sp[k] || {}).items || []).forEach(function (it) { pool.push(it); }); });
    var pp = CG9.practice[unit];
    if (pp) PRACTICE_PARTS.forEach(function (k) {
      (pp[k] || []).forEach(function (sec) { sec.items.forEach(function (it) { if (CG9.isScored(it)) pool.push(it); }); });
    });
    // de-duplicate identical questions
    var seen = {};
    pool = pool.filter(function (it) { var h = CG9.hash(JSON.stringify([it.kind, it.q, it.s, it.word, it.clue, it.answer])); if (seen[h]) return false; seen[h] = 1; return true; });
    poolCache[unit] = pool;
    return pool;
  };

  /* balanced sample: mix kinds/tags, cap matches */
  CG9.balancedSample = function (pool, n) {
    var byTag = {};
    CG9.shuffle(pool).forEach(function (it) { var t = CG9.tagOf(it); (byTag[t] = byTag[t] || []).push(it); });
    var tags = Object.keys(byTag), out = [], i = 0, big = {};
    while (out.length < n && tags.some(function (t) { return byTag[t].length; })) {
      var t = tags[i++ % tags.length], it = byTag[t].shift();
      if (!it) continue;
      // long items (matching, cloze texts, headings) at most once each per quiz
      if (/^(match|cloze|headings)$/.test(it.kind)) { if (big[it.kind]) continue; big[it.kind] = 1; }
      if (it.kind === "match") it = { kind: "match", pairs: CG9.sample(it.pairs, Math.min(5, it.pairs.length)), tag: it.tag };
      out.push(it);
    }
    return CG9.shuffle(out);
  };

  /* ============ generic runner ============ */
  /* cfg: {title, subtitle, back, key, unit, kind, mode, minutes, sections:[{title, instr, items}], header?, onFinish?, retry?} */
  CG9.runSet = function (root, cfg) {
    root.innerHTML = "";
    var head = el("div", "runhead");
    head.innerHTML = "<a class='back' href='" + (cfg.back || "#/") + "'>⬅ Quay lại</a><h1>" + cfg.title + "</h1>" + (cfg.subtitle ? "<p>" + cfg.subtitle + "</p>" : "");
    root.appendChild(head);
    var act = new CG9.Activity({ key: cfg.key, title: CG9.stripTags(cfg.title), unit: cfg.unit, mode: cfg.mode || "practice", kind: cfg.kind, mistakeMode: cfg.mistakeMode, onFinish: cfg.onFinish, retry: cfg.retry, onClose: cfg.onClose });
    if (cfg.minutes) { var tb = el("div", "timerbar"); head.appendChild(tb); act.mountTimer(tb, cfg.minutes); }
    if (cfg.mode === "exam") head.appendChild(el("div", "examnote", "📝 Chế độ kiểm tra: làm hết các câu rồi bấm <b>Nộp bài</b> để xem kết quả và đáp án."));
    if (cfg.header) cfg.header(root, act);
    var n = 0;
    cfg.sections.forEach(function (sec) {
      var box = el("section", "card block");
      if (sec.title) box.appendChild(el("h3", "", sec.title));
      if (sec.instr) box.appendChild(el("p", "instr", sec.instr));
      if (sec.wordbank) { var wb = el("div", "wordbank"); sec.wordbank.forEach(function (w) { wb.appendChild(el("span", "", w)); }); box.appendChild(wb); }
      if (sec.theoryHtml) box.appendChild(el("div", "theory", sec.theoryHtml));
      sec.items.forEach(function (it) {
        if (sec.tag && !it.tag && CG9.isScored(it)) it.tag = sec.tag;
        if (CG9.isScored(it)) act.add(box, it, ++n); else act.add(box, it);
      });
      root.appendChild(box);
    });
    act.mountFinish(root);
    window.scrollTo(0, 0);
    return act;
  };

  /* ============ lesson level ============ */
  CG9.playLevel = function (root, lesson, levelId) {
    var lv = lesson.game.levels.filter(function (l) { return String(l.id) === String(levelId); })[0];
    if (!lv) { root.innerHTML = "<p>Không tìm thấy màn chơi.</p>"; return; }
    var tag = levelTag(lv);
    var idx = lesson.game.levels.indexOf(lv), next = lesson.game.levels[idx + 1];
    var key = CG9.Progress.levelKey(lesson.id, lv.id);
    CG9.runSet(root, {
      title: lv.icon + " " + lv.vn,
      subtitle: "<i>" + lv.en + "</i> · " + (lesson.type === "lesson" ? "Unit " + lesson.unit + "." + lesson.num + " " + esc(lesson.title) : esc(lesson.title)),
      back: "#/lesson/" + lesson.id, key: "lv-" + key, unit: lesson.unit, kind: lv.blocks.some(function (b) { return b.kind === "boss"; }) ? "boss" : "lesson",
      sections: lv.blocks.map(function (b) { return { title: b.title, instr: b.instr, wordbank: b.wordbank, theoryHtml: b.theoryHtml, items: CG9.blockItems(b, tag) }; }),
      onFinish: function (res) {
        var r = CG9.state.levels[key];
        CG9.state.levels[key] = { stars: Math.max(res.stars, r ? r.stars || 0 : 0), pct: Math.round(res.pct * 100), ts: Date.now() };
        CG9.Awards.checkAndToast(); CG9.save();
      },
      retry: function () { CG9.playLevel(root, lesson, levelId); },
      onClose: function () { location.hash = next ? "#/play/" + lesson.id + "/" + next.id : "#/lesson/" + lesson.id; }
    });
    var nb = root.querySelector(".finishbar");
    if (next) nb.appendChild(el("a", "btn ghost", "Màn tiếp theo ➜")).setAttribute("href", "#/play/" + lesson.id + "/" + next.id);
  };

  /* ============ reviews ============ */
  CG9.quickQuiz = function (root, unit) {
    var items = CG9.balancedSample(CG9.poolOf(unit), 20);
    CG9.runSet(root, {
      title: "⚡ Quiz nhanh Unit " + unit, subtitle: "20 câu ngẫu nhiên từ toàn bộ Unit " + unit + " — mỗi lần làm là một đề mới!",
      back: "#/unit/" + unit, key: "quiz-" + unit, unit: unit, kind: "quiz",
      sections: [{ items: items }], retry: function () { CG9.quickQuiz(root, unit); }
    });
  };
  CG9.mixedReview = function (root, first) {
    var u1 = first, u2 = first + 1;
    var pool = CG9.balancedSample(CG9.poolOf(u1), 16).concat(CG9.balancedSample(CG9.poolOf(u2), 16));
    var bykind = { choice: [], typed: [], build: [] };
    pool.forEach(function (it) {
      if (/^(mcq|choice2|tf|classify|pron|stress|match|multi|tapword)$/.test(it.kind)) bykind.choice.push(it);
      else if (/^(order|rewrite|seqorder)$/.test(it.kind)) bykind.build.push(it);
      else bykind.typed.push(it);
    });
    var sections = [
      { title: "Phần 1 — Trắc nghiệm & tìm từ (Unit " + u1 + " + " + u2 + ")", items: bykind.choice },
      { title: "Phần 2 — Điền từ, đọc điền khuyết, word form", items: bykind.typed },
      { title: "Phần 3 — Xây dựng & viết lại câu", items: bykind.build }
    ].filter(function (s) { return s.items.length; });
    var sp1 = CG9.skills[u1], sp2 = CG9.skills[u2];
    var readings = [].concat(sp1 && sp1.reading || [], sp2 && sp2.reading || []);
    if (readings.length) {
      var r = readings[Math.floor(Math.random() * readings.length)];
      sections.push({ title: "Phần 4 — Đọc hiểu: " + r.title, items: [{ kind: "passage", text: r.text }].concat(r.items) });
    }
    CG9.runSet(root, {
      title: "🔀 Ôn tập tổng hợp Unit " + u1 + " & " + u2,
      subtitle: CG9.unit(u1).title + " + " + CG9.unit(u2).title + " · Đề trộn ngẫu nhiên, có hẹn giờ 30 phút. Đạt từ 80% để nhận giấy khen!",
      back: "#/review", key: "mixed-" + u1, unit: u1, kind: "mixed", minutes: 30, mode: "exam",
      sections: sections, retry: function () { CG9.mixedReview(root, first); }
    });
  };
  CG9.mistakeReview = function (root) {
    var all = Object.keys(CG9.state.mistakes).map(function (k) { return CG9.state.mistakes[k]; });
    if (!all.length) {
      root.innerHTML = "<div class='runhead'><a class='back' href='#/review'>⬅ Quay lại</a><h1>🩹 Sổ lỗi sai</h1></div><div class='card empty'><div class='big-emoji'>🎉</div><p>Không có lỗi sai nào cần ôn. Giỏi quá!</p></div>";
      return;
    }
    all.sort(function (a, b) { return b.wrong - a.wrong || b.ts - a.ts; });
    var items = all.slice(0, 15).map(function (m) { return m.item; });
    CG9.runSet(root, {
      title: "🩹 Ôn lại lỗi sai", subtitle: "Mỗi câu làm đúng 2 lần liên tiếp sẽ được xoá khỏi sổ. Còn " + all.length + " câu trong sổ.",
      back: "#/review", key: "mistakes", unit: 0, kind: "mistakes", mistakeMode: true,
      sections: [{ items: items }], retry: function () { CG9.mistakeReview(root); }
    });
  };

  /* ============ practice packs ("Luyện thêm") ============ */
  var PRACTICE_PARTS = ["reading", "vocab", "grammar", "writing"];
  CG9.PRACTICE_PARTS = PRACTICE_PARTS;
  CG9.PRACTICE_NAMES = {
    reading: { icon: "📖", name: "Đọc hiểu nâng cao", desc: "Điền khuyết, chọn tiêu đề, sắp xếp sự việc, tìm từ" },
    vocab: { icon: "🔤", name: "Từ vựng mở rộng", desc: "Kết hợp từ, đồng/trái nghĩa, từ khác nhóm, ngữ cảnh" },
    grammar: { icon: "⚙️", name: "Ngữ pháp nâng cao", desc: "Tìm & sửa lỗi, viết lại câu với từ khoá, chia động từ" },
    writing: { icon: "✍️", name: "Viết đoạn ngắn", desc: "Nối câu, cấu trúc đoạn, sắp xếp đoạn, viết có hướng dẫn" }
  };
  CG9.playPractice = function (root, unit, part) {
    var pp = CG9.practice[unit], meta = CG9.PRACTICE_NAMES[part];
    if (!pp || !pp[part] || !meta) { root.innerHTML = "<p>Nội dung đang được cập nhật.</p>"; return; }
    CG9.runSet(root, {
      title: meta.icon + " " + meta.name + " — Unit " + unit, subtitle: CG9.unit(unit).title + " · " + meta.desc,
      back: "#/unit/" + unit + "/skills", key: "prac-" + unit + "-" + part, unit: unit, kind: "practice-" + part,
      sections: pp[part], retry: function () { CG9.playPractice(root, unit, part); }
    });
  };

  /* ============ unit exam ============ */
  CG9.playExam = function (root, unit) {
    var ex = CG9.exams[unit];
    if (!ex) { root.innerHTML = "<p>Chưa có bài kiểm tra cho Unit này.</p>"; return; }
    var startBox = el("div", "card examstart");
    var scored = 0; ex.sections.forEach(function (s) { s.items.forEach(function (it) { scored += CG9.pointsOf(it); }); });
    var best = CG9.state.acts["exam-" + unit];
    root.innerHTML = "";
    startBox.innerHTML = "<a class='back' href='#/unit/" + unit + "'>⬅ Quay lại</a><div class='big-emoji'>📝</div><h1>" + esc(ex.title) + "</h1>" +
      "<p>" + ex.sections.length + " phần · " + scored + " điểm · ⏱️ " + ex.minutes + " phút</p>" +
      (best ? "<p>Kết quả tốt nhất: <b>" + best.best + "%</b> (" + best.count + " lần làm)</p>" : "") +
      "<p class='muted'>Đạt từ 80% để nhận <b>Giấy khen</b> 📜. Bài viết cuối đề không tính điểm tự động — em có thể nhờ AI chấm.</p>";
    var opts = el("div", "mrow-btns");
    var practice = el("button", "btn ghost", "🧘 Luyện tập (không giờ, xem đáp án ngay)");
    var exam = el("button", "btn primary big", "⏱️ Làm bài thi");
    opts.appendChild(practice); opts.appendChild(exam); startBox.appendChild(opts);
    root.appendChild(startBox);
    function go(mode) {
      CG9.runSet(root, {
        title: "📝 " + esc(ex.title), back: "#/unit/" + unit, key: mode === "exam" ? "exam-" + unit : "exampractice-" + unit, unit: unit,
        kind: mode === "exam" ? "exam" : "practice", mode: mode, minutes: mode === "exam" ? ex.minutes : 0,
        sections: ex.sections, retry: function () { CG9.playExam(root, unit); }
      });
    }
    practice.addEventListener("click", function () { go("practice"); });
    exam.addEventListener("click", function () { go("exam"); });
  };

  /* ============ skill packs ============ */
  CG9.playSkill = function (root, unit, part, idx) {
    var sp = CG9.skills[unit];
    if (!sp) { root.innerHTML = "<p>Đang cập nhật nội dung.</p>"; return; }
    var back = "#/unit/" + unit + "/skills";
    var names = { pron: "🔊 Phát âm", wordform: "🧩 Word form", sentences: "🧱 Cấu trúc & viết câu" };
    if (part === "reading") {
      var r = sp.reading[idx];
      var gl = (r.glossary || []).map(function (g) { return "<span><b>" + esc(g.term) + "</b> " + esc(g.vi) + "</span>"; }).join("");
      CG9.runSet(root, {
        title: "📖 " + esc(r.title), subtitle: "Đọc hiểu Unit " + unit + " · " + CG9.unit(unit).title, back: back,
        key: "skill-" + unit + "-reading-" + idx, unit: unit, kind: "reading",
        sections: [{ items: [{ kind: "passage", text: r.text }], theoryHtml: gl ? "<div class='gloss'>📒 " + gl + "</div>" : "" }, { title: "Câu hỏi", items: r.items }]
      });
      return;
    }
    if (part === "writing") {
      CG9.runSet(root, {
        title: "✍️ Viết đoạn văn — Unit " + unit, subtitle: "Viết bài, xem bài mẫu và nhờ AI chấm điểm, sửa lỗi.", back: back,
        key: "skill-" + unit + "-writing", unit: unit, kind: "writing",
        sections: [{ items: (sp.writing || []).map(function (w) { return { kind: "writing", prompt: w.prompt, sample: w.sample, criteria: w.criteria }; }) }]
      });
      return;
    }
    var p = sp[part];
    var notes = (p.notes || []).map(function (n) { return "<h4>" + n.title + "</h4>" + n.html; }).join("");
    var sections = [];
    if (part === "wordform" && p.table && p.table.length) {
      var th = "<div class='tablewrap'><table class='wf'><tr><th>Noun</th><th>Verb</th><th>Adjective</th><th>Adverb</th><th>Nghĩa</th></tr>" +
        p.table.map(function (r) { return "<tr><td>" + (r.noun || "–") + "</td><td>" + (r.verb || "–") + "</td><td>" + (r.adj || "–") + "</td><td>" + (r.adv || "–") + "</td><td>" + (r.vi || "") + "</td></tr>"; }).join("") + "</table></div>";
      notes += "<h4>📋 Bảng họ từ</h4>" + th;
    }
    sections.push({ title: "📒 Ghi nhớ", items: [{ kind: "theory", html: notes }] });
    if (part === "sentences") {
      var ord = p.items.filter(function (i) { return i.kind === "order"; }), rw = p.items.filter(function (i) { return i.kind !== "order"; });
      if (ord.length) sections.push({ title: "🧱 Sắp xếp câu", instr: "Chạm vào các thẻ từ theo đúng thứ tự.", items: ord });
      if (rw.length) sections.push({ title: "🔁 Viết lại câu", instr: "Viết lại câu sao cho nghĩa không đổi.", items: rw });
    } else if (part === "pron") {
      var snd = p.items.filter(function (i) { return i.kind === "pron"; }), st = p.items.filter(function (i) { return i.kind === "stress"; });
      if (snd.length) sections.push({ title: "👂 Phát âm & trọng âm", instr: "Bấm 🔊 cạnh mỗi từ để nghe, rồi chọn đáp án.", items: snd });
      if (st.length) sections.push({ title: "🎯 Tìm âm tiết được nhấn", items: st });
    } else sections.push({ title: "✏️ Bài tập", instr: "Điền dạng đúng của từ in hoa.", items: p.items });
    CG9.runSet(root, {
      title: names[part] + " — Unit " + unit, subtitle: CG9.unit(unit).title, back: back,
      key: "skill-" + unit + "-" + part, unit: unit, kind: part, sections: sections,
      retry: function () { CG9.playSkill(root, unit, part); }
    });
  };

  CG9.playAIReading = function (root, unit) {
    root.innerHTML = "<div class='runhead'><a class='back' href='#/unit/" + unit + "/skills'>⬅ Quay lại</a><h1>🤖 Bài đọc mới do AI tạo</h1><p>Unit " + unit + " · " + CG9.unit(unit).title + "</p></div>";
    if (!CG9.AI.requireKey()) return;
    var pick = el("div", "card", "<p>Chọn dạng bài đọc:</p>");
    var kinds = { article: "📰 Bài báo", blog: "💻 Blog", interview: "🎤 Phỏng vấn", story: "📖 Truyện ngắn", email: "✉️ Email" };
    var row = el("div", "chips");
    Object.keys(kinds).forEach(function (k) {
      var b = el("button", "chip big", kinds[k]);
      b.addEventListener("click", function () {
        pick.innerHTML = "<div class='spinner'></div><p>AI đang soạn bài đọc theo chủ đề Unit " + unit + "…</p>";
        CG9.AI.makeReading(unit, k).then(function (r) {
          var gl = (r.glossary || []).map(function (g) { return "<span><b>" + esc(g.term) + "</b> " + esc(g.vi) + "</span>"; }).join("");
          CG9.runSet(root, {
            title: "🤖 " + esc(r.title), subtitle: "Bài đọc AI · Unit " + unit, back: "#/unit/" + unit + "/skills",
            key: "aireading-" + unit + "-" + Date.now().toString(36), unit: unit, kind: "reading",
            sections: [{ items: [{ kind: "passage", text: r.text }], theoryHtml: gl ? "<div class='gloss'>📒 " + gl + "</div>" : "" }, { title: "Câu hỏi", items: r.items }],
            retry: function () { CG9.playAIReading(root, unit); }
          });
        }).catch(function (e) { pick.innerHTML = "<p class='err'>⚠️ " + esc(e.message) + "</p>"; });
      });
      row.appendChild(b);
    });
    pick.appendChild(row); root.appendChild(pick);
  };

  /* ============ vocabulary games ============ */
  function vocabList(scope) {
    if (/^u\d-/.test(scope)) { var l = CG9.lessonById[scope]; return (l.game.vocab || []).map(function (v) { return { term: v.term, vi: v.vi, ex: v.ex || "" }; }); }
    return CG9.vocabOf(+scope);
  }
  function scopeName(scope) { return /^u\d-/.test(scope) ? CG9.lessonById[scope].title : "Unit " + scope; }
  function speakable(t) { return t.replace(/\(.*?\)/g, "").replace(/\bsb\b/g, "somebody").replace(/\bsth\b/g, "something").replace(/\//g, " or "); }
  function blankEx(v) {
    var core = v.term.replace(/\(.*?\)/g, "").split("/")[0].trim();
    if (!v.ex || core.length < 3) return null;
    var re = new RegExp("\\b" + core.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
    return re.test(v.ex) ? v.ex.replace(re, "___") : null;
  }

  CG9.VOCAB_MODES = {
    cards: { icon: "🃏", name: "Thẻ ghi nhớ", desc: "Lật thẻ, nghe phát âm, tự đánh giá thuộc/chưa thuộc" },
    meaning: { icon: "🎯", name: "Chọn nghĩa", desc: "Trắc nghiệm nghĩa tiếng Việt" },
    reverse: { icon: "🔁", name: "Tìm từ tiếng Anh", desc: "Đọc nghĩa Việt, chọn từ tiếng Anh" },
    context: { icon: "🧩", name: "Điền từ vào câu", desc: "Chọn từ đúng cho câu ví dụ" },
    listen: { icon: "🎧", name: "Nghe & chọn", desc: "Nghe phát âm rồi chọn nghĩa" },
    spell: { icon: "✍️", name: "Chính tả", desc: "Nghe và gõ lại từ" },
    memory: { icon: "🧠", name: "Lật hình ghép cặp", desc: "Trò chơi trí nhớ: ghép từ với nghĩa" }
  };

  CG9.playVocab = function (root, scope, mode) {
    var list = vocabList(scope);
    var back = /^u\d-/.test(scope) ? "#/lesson/" + scope : "#/unit/" + scope + "/vocab";
    var unit = /^u\d-/.test(scope) ? CG9.lessonById[scope].unit : +scope;
    var title = CG9.VOCAB_MODES[mode].icon + " " + CG9.VOCAB_MODES[mode].name + " — " + esc(scopeName(scope));
    if (list.length < 4) { root.innerHTML = "<p>Chưa đủ từ vựng.</p>"; return; }
    if (mode === "cards") return flashcards(root, list, title, back, unit, scope);
    if (mode === "memory") return memory(root, list, title, back, unit, scope);
    var picks = CG9.sample(list, Math.min(12, list.length)), items = [];
    picks.forEach(function (v) {
      var others = CG9.sample(list.filter(function (x) { return x !== v; }), 3);
      if (mode === "meaning" || mode === "listen") {
        var opts = CG9.shuffle([v].concat(others));
        items.push({ kind: "mcq", q: mode === "listen" ? "🎧 Nghe và chọn nghĩa đúng:" : "<b class='term'>" + esc(v.term) + "</b> nghĩa là gì?", opts: opts.map(function (o) { return o.vi; }), a: opts.indexOf(v), tag: mode === "listen" ? "listening" : "vocab", _speak: v.term });
      } else if (mode === "reverse") {
        var o2 = CG9.shuffle([v].concat(others));
        items.push({ kind: "mcq", q: "Từ tiếng Anh nào có nghĩa <b>“" + esc(v.vi) + "”</b>?", opts: o2.map(function (o) { return o.term; }), a: o2.indexOf(v), tag: "vocab" });
      } else if (mode === "context") {
        var s = blankEx(v); if (!s) return;
        var o3 = CG9.shuffle([v].concat(others));
        items.push({ kind: "mcq", q: s.replace("___", "<b class='gap'>_____</b>"), opts: o3.map(function (o) { return o.term; }), a: o3.indexOf(v), tag: "vocab", explain: esc(v.term) + " = " + esc(v.vi) });
      } else if (mode === "spell") {
        items.push({ kind: "dictation", text: speakable(v.term).trim(), vi: v.vi, tag: "listening" });
      }
    });
    if (!items.length) { root.innerHTML = "<p>Không đủ câu ví dụ cho chế độ này, hãy chọn chế độ khác.</p>"; return; }
    var act = CG9.runSet(root, {
      title: title, back: back, key: "vocab-" + scope + "-" + mode, unit: unit, kind: "vocab",
      sections: [{ items: items }], retry: function () { CG9.playVocab(root, scope, mode); }
    });
    // speaker buttons for listening mcqs, auto-play first
    act.handles.forEach(function (h) {
      if (h.item._speak) {
        var q = h.wrap.querySelector(".qtext");
        q.appendChild(CG9.speakBtn(speakable(h.item._speak), mode === "listen" ? "🔊 Nghe" : "🔊"));
      }
    });
    if (mode === "listen" && act.handles[0]) setTimeout(function () { CG9.speak(speakable(act.handles[0].item._speak)); }, 400);
    if (/^\d$/.test(String(scope)) && mode === "meaning") act.opts.key = "vocab-" + unit + "-quiz";
  };

  function flashcards(root, list, title, back, unit, scope) {
    var deck = CG9.shuffle(list).sort(function (a, b) { return (CG9.state.vocab[a.term] || 0) - (CG9.state.vocab[b.term] || 0); }).slice(0, 15);
    var i = 0, known = 0;
    root.innerHTML = "<div class='runhead'><a class='back' href='" + back + "'>⬅ Quay lại</a><h1>" + title + "</h1><p>Chạm thẻ để lật. Từ nào chưa thuộc sẽ xuất hiện lại nhiều hơn.</p></div>";
    var stage = el("div", "fcstage"); root.appendChild(stage);
    function show() {
      if (i >= deck.length) {
        var res = CG9.Progress.finishActivity({ key: "vocab-" + scope + "-cards", title: "🃏 Thẻ từ " + scopeName(scope), unit: unit, correct: known, total: deck.length, carrots: known, kind: "vocab" });
        CG9.state.carrots += known; CG9.save();
        CG9.showResult(res, { retry: function () { flashcards(root, list, title, back, unit, scope); }, onClose: function () { location.hash = back; } });
        return;
      }
      var v = deck[i], box = CG9.state.vocab[v.term] || 0;
      stage.innerHTML = "<div class='fcount'>" + (i + 1) + " / " + deck.length + " · " + "🧠".repeat(Math.min(box, 5)) + "</div>";
      var card = el("div", "flash");
      card.innerHTML = "<div class='face front'><div class='fterm'>" + esc(v.term) + "</div><small>Chạm để xem nghĩa</small></div>" +
        "<div class='face back'><div class='fvi'>" + esc(v.vi) + "</div>" + (v.ex ? "<div class='fex'>" + esc(v.ex) + "</div>" : "") + "</div>";
      card.addEventListener("click", function () { card.classList.toggle("flipped"); });
      stage.appendChild(card);
      var row = el("div", "fcbtns");
      row.appendChild(CG9.speakBtn(speakable(v.term), "🔊 Nghe từ"));
      if (v.ex) row.appendChild(CG9.speakBtn(v.ex, "🔊 Nghe câu"));
      stage.appendChild(row);
      var rate = el("div", "fcbtns");
      var no = el("button", "btn ghost", "😅 Chưa thuộc"), yes = el("button", "btn primary", "😎 Đã thuộc");
      no.addEventListener("click", function () { CG9.state.vocab[v.term] = Math.max(0, box - 1); deck.push(v); if (deck.length > 30) deck.length = 30; i++; CG9.save(); show(); });
      yes.addEventListener("click", function () { CG9.state.vocab[v.term] = Math.min(5, box + 1); known++; CG9.sfx.ok(); i++; CG9.save(); show(); });
      rate.appendChild(no); rate.appendChild(yes); stage.appendChild(rate);
      setTimeout(function () { CG9.speak(speakable(v.term)); }, 250);
    }
    show();
  }

  function memory(root, list, title, back, unit, scope) {
    var picks = CG9.sample(list, 6), cards = [];
    picks.forEach(function (v, k) { cards.push({ k: k, t: v.term, en: true }); cards.push({ k: k, t: v.vi, en: false }); });
    cards = CG9.shuffle(cards);
    root.innerHTML = "<div class='runhead'><a class='back' href='" + back + "'>⬅ Quay lại</a><h1>" + title + "</h1><p>Lật 2 thẻ: một từ tiếng Anh và nghĩa tiếng Việt của nó. Ghép hết 6 cặp với ít lượt nhất!</p></div>";
    var info = el("div", "meminfo", "Lượt: 0"); root.appendChild(info);
    var grid = el("div", "memgrid"); root.appendChild(grid);
    var open = [], moves = 0, found = 0, lock = false, start = Date.now();
    cards.forEach(function (c) {
      var d = el("button", "mem", "<span class='mb'>🐰</span><span class='mf'>" + esc(c.t) + "</span>");
      d.addEventListener("click", function () {
        if (lock || d.classList.contains("open") || d.classList.contains("done")) return;
        d.classList.add("open"); if (c.en) CG9.speak(speakable(c.t));
        open.push({ d: d, c: c });
        if (open.length === 2) {
          moves++; info.textContent = "Lượt: " + moves;
          var a = open[0], b = open[1];
          if (a.c.k === b.c.k) { a.d.classList.add("done"); b.d.classList.add("done"); open = []; found++; CG9.sfx.ok(); if (found === 6) end(); }
          else { lock = true; CG9.sfx.bad(); setTimeout(function () { a.d.classList.remove("open"); b.d.classList.remove("open"); open = []; lock = false; }, 800); }
        }
      });
      grid.appendChild(d);
    });
    function end() {
      // 6 moves is a perfect game; score drops as the learner needs more turns
      var correct = moves <= 8 ? 6 : moves <= 11 ? 5 : moves <= 14 ? 4 : 3;
      var res = CG9.Progress.finishActivity({ key: "vocab-" + scope + "-memory", title: "🧠 Lật hình " + scopeName(scope), unit: unit, correct: correct, total: 6, carrots: correct, kind: "vocab", seconds: Math.round((Date.now() - start) / 1000) });
      CG9.state.carrots += correct; CG9.save();
      setTimeout(function () { CG9.showResult(res, { retry: function () { memory(root, list, title, back, unit, scope); }, onClose: function () { location.hash = back; } }); }, 500);
    }
  }
})();

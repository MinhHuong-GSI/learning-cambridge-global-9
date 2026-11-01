/* Learning Cambridge Global 9 — interactive item renderers + Activity (scoring session)
   Item formats: see docs/DATA-FORMAT.md. Modes: "practice" (instant feedback, 2 tries) and
   "exam" (answer everything, then submit and grade). */
(function () {
  "use strict";
  var el = CG9.el, norm = CG9.norm, esc = CG9.esc;

  var TAG_BY_KIND = { pron: "pron", stress: "pron", wordform: "wordform", order: "sentence", rewrite: "sentence", dictation: "listening", anagram: "vocab", match: "vocab" };
  CG9.tagOf = function (item) { return item.tag || TAG_BY_KIND[item.kind] || "vocab"; };
  CG9.TAG_NAMES = { vocab: "Từ vựng", grammar: "Ngữ pháp", reading: "Đọc hiểu", listening: "Nghe", writing: "Viết", speaking: "Nói", wordform: "Word form", pron: "Phát âm", sentence: "Cấu trúc câu" };

  /* ===================== Activity ===================== */
  function Activity(opts) {
    this.opts = opts; this.mode = opts.mode || "practice";
    this.correct = 0; this.total = 0; this.resolvedUnits = 0; this.units = 0;
    this.handles = []; this.carrots = 0; this.started = Date.now(); this.finished = false;
  }
  CG9.Activity = Activity;

  CG9.pointsOf = function (item) {
    if (item.kind === "match") return item.pairs.length;
    if (item.kind === "cloze") return item.gaps.length;
    if (item.kind === "headings") return item.paras.length;
    return CG9.isScored(item) ? 1 : 0;
  };
  Activity.prototype.points = function (item) { return CG9.pointsOf(item); };

  Activity.prototype.add = function (parent, item, num) {
    var r = RENDER[item.kind];
    if (!r) { if (NONSCORED[item.kind]) { NONSCORED[item.kind](parent, item, this); } return null; }
    var wrap = el("div", "q q-" + item.kind);
    if (num) wrap.dataset.num = num;
    parent.appendChild(wrap);
    var h = r(wrap, item, this, num);
    h.item = item; h.wrap = wrap;
    this.handles.push(h);
    this.units += this.points(item);
    this.updateBtn();
    return h;
  };

  /* practice: an item (or a pair of a match) finished */
  Activity.prototype.resolve = function (item, ok, tries, wrap) {
    this.resolvedUnits++; this.total++;
    var tag = CG9.tagOf(item);
    CG9.Progress.tagStat(tag, ok);
    if (ok) {
      this.correct++;
      var c = tries <= 1 ? 2 : 1; this.carrots += c;
      CG9.Progress.addCarrots(c, true);
      CG9.sfx.ok();
      if (this.opts.mistakeMode) CG9.Progress.mistakeRight(item);
    } else {
      CG9.sfx.bad();
      CG9.Progress.mistake(item, this.opts.title);
    }
    if (wrap && item.explain) showExplain(wrap, item.explain, ok);
    this.updateBtn();
    if (this.opts.onProgress) this.opts.onProgress(this);
  };

  Activity.prototype.participate = function () {
    this.resolvedUnits++; this.carrots += 1; CG9.Progress.addCarrots(1, true); CG9.sfx.ok(); this.updateBtn();
  };

  Activity.prototype.mountFinish = function (parent) {
    var self = this;
    var bar = el("div", "finishbar");
    var btn = el("button", "btn big primary");
    bar.appendChild(btn); parent.appendChild(bar);
    this.btn = btn;
    btn.addEventListener("click", function () { self.finish(); });
    this.updateBtn();
    return bar;
  };

  Activity.prototype.updateBtn = function () {
    var b = this.btn; if (!b) return;
    if (this.finished) { b.disabled = true; b.textContent = "✅ Đã hoàn thành"; return; }
    if (this.mode === "exam") { b.disabled = false; b.textContent = "📝 Nộp bài"; return; }
    var left = this.units - this.resolvedUnits;
    b.disabled = left > 0;
    b.textContent = left > 0 ? "Còn " + left + " câu nữa nhé! (" + this.resolvedUnits + "/" + this.units + ")" : "🏁 Hoàn thành";
  };

  Activity.prototype.finish = function () {
    var self = this;
    if (this.finished) return;
    if (this.mode === "exam") {
      var unanswered = this.handles.filter(function (h) { return !h.answered(); }).length;
      if (unanswered && !confirm("Còn " + unanswered + " câu chưa làm. Vẫn nộp bài?")) return;
      this.correct = 0; this.total = 0;
      this.handles.forEach(function (h) {
        var g = h.grade();
        self.correct += g.c; self.total += g.t;
        var tag = CG9.tagOf(h.item);
        for (var i = 0; i < g.t; i++) CG9.Progress.tagStat(tag, i < g.c);
        if (g.c < g.t) CG9.Progress.mistake(h.item, self.opts.title);
        h.reveal();
      });
      this.carrots = this.correct;
      CG9.Progress.addCarrots(this.carrots, true);
    }
    this.finished = true;
    if (this.timerStop) this.timerStop();
    this.updateBtn();
    var res = CG9.Progress.finishActivity({
      key: this.opts.key, title: this.opts.title, unit: this.opts.unit,
      correct: this.correct, total: this.total, carrots: this.carrots,
      kind: this.opts.kind || "practice", seconds: Math.round((Date.now() - this.started) / 1000)
    });
    if (this.opts.onFinish) this.opts.onFinish(res, this);
    CG9.showResult(res, this.opts);
  };

  /* countdown for exams / timed reviews */
  Activity.prototype.mountTimer = function (parent, minutes) {
    var self = this, end = Date.now() + minutes * 60000;
    var t = el("div", "timer"); parent.appendChild(t);
    function tick() {
      var left = Math.max(0, end - Date.now());
      var m = Math.floor(left / 60000), s = Math.floor(left % 60000 / 1000);
      t.textContent = "⏱️ " + m + ":" + String(s).padStart(2, "0");
      t.classList.toggle("warn", left < 60000);
      if (left <= 0) { clearInterval(iv); CG9.toast("⏰ Hết giờ! Bài được nộp tự động."); self.finish(); }
    }
    var iv = setInterval(tick, 1000); tick();
    this.timerStop = function () { clearInterval(iv); t.classList.add("done"); };
    CG9.onLeave(function () { clearInterval(iv); });
    return t;
  };

  function showExplain(wrap, text, ok) {
    if (wrap.querySelector(".explain")) return;
    wrap.appendChild(el("div", "explain " + (ok ? "ok" : "bad"), "💡 " + text));
  }
  function fb(wrap) { var f = wrap.querySelector(".fb"); if (!f) { f = el("div", "fb"); wrap.appendChild(f); } return f; }
  function numLabel(num) { return num ? "<span class='qnum'>" + num + "</span>" : ""; }
  /* One input per item: some source sentences split a multi-word answer over several blanks
     ("___ ___ (use)", "___ never ______ (play)"), so everything from the first to the last blank
     becomes a single slot. */
  function blankify(s) { return String(s).replace(/_{3,}(?:.*_{3,})?/, "<span class='blank-slot'></span>"); }

  /* ============ choice-type items (mcq, choice2, tf, classify, pron) ============ */
  function choiceItem(wrap, act, item, qHtml, options, correctIdx, opt) {
    opt = opt || {};
    wrap.innerHTML = "<div class='qtext'>" + qHtml + "</div>";
    var box = el("div", "opts" + (opt.cls ? " " + opt.cls : ""));
    wrap.appendChild(box);
    var order = opt.noShuffle ? options.map(function (o, i) { return i; }) : CG9.shuffle(options.map(function (o, i) { return i; }));
    var btns = [], tries = 0, done = false, picked = null;
    order.forEach(function (i) {
      var b = el("button", "opt", options[i].html);
      b.type = "button"; b.dataset.i = i;
      if (options[i].speak) {
        var sp = CG9.speakBtn(options[i].speak); sp.classList.add("mini"); b.appendChild(sp);
      }
      b.addEventListener("click", function () {
        if (done) return;
        if (act.mode === "exam") {
          btns.forEach(function (x) { x.classList.remove("picked"); });
          b.classList.add("picked"); picked = i; return;
        }
        tries++;
        if (i === correctIdx) {
          done = true; b.classList.add("correct"); lock();
          act.resolve(item, true, tries, wrap);
        } else {
          b.classList.add("wrong", "disabled");
          if (tries >= 2 || options.length <= 2) { done = true; reveal(); lock(); act.resolve(item, false, tries, wrap); }
          else CG9.sfx.bad();
        }
      });
      btns.push(b); box.appendChild(b);
    });
    function lock() { btns.forEach(function (x) { x.classList.add("disabled"); }); }
    function reveal() { btns.forEach(function (x) { if (+x.dataset.i === correctIdx) x.classList.add("correct"); }); }
    return {
      answered: function () { return picked !== null; },
      grade: function () { return { c: picked === correctIdx ? 1 : 0, t: 1 }; },
      reveal: function () {
        done = true; lock(); reveal();
        btns.forEach(function (x) { if (+x.dataset.i === picked && picked !== correctIdx) x.classList.add("wrong"); });
        if (item.explain) showExplain(wrap, item.explain, picked === correctIdx);
      }
    };
  }

  /* ============ typed-answer items (gap, wordform, anagram, dictation, rewrite) ============ */
  function inputItem(wrap, act, item, html, answers, opt) {
    opt = opt || {};
    wrap.innerHTML = html;
    var inp = opt.long ? el("textarea", "ans long") : el("input", "ans");
    if (!opt.long) { inp.type = "text"; inp.autocomplete = "off"; inp.autocapitalize = "off"; inp.spellcheck = false; }
    inp.placeholder = opt.placeholder || "Nhập đáp án…";
    if (opt.prefill) inp.value = opt.prefill;
    var slot = wrap.querySelector(".blank-slot");
    if (slot && !opt.long) slot.replaceWith(inp);
    else { var row = el("div", "ansrow"); row.appendChild(inp); wrap.appendChild(row); }
    var btn = el("button", "btn small check", "Kiểm tra");
    btn.type = "button";
    var host = inp.parentNode.classList && inp.parentNode.classList.contains("ansrow") ? inp.parentNode : wrap;
    if (act.mode !== "exam") host.appendChild(btn);
    var f = fb(wrap), tries = 0, done = false;
    function isRight(v) {
      var n = norm(v);
      if (!n) return false;
      return answers.some(function (a) { return norm(a) === n; });
    }
    function check() {
      if (done || !inp.value.trim()) return;
      tries++;
      if (isRight(inp.value)) {
        done = true; inp.classList.add("correct"); inp.disabled = true; btn.remove();
        f.className = "fb ok"; f.textContent = tries === 1 ? "Chính xác! 🎉" : "Đúng rồi! 👍";
        act.resolve(item, true, tries, wrap);
      } else if (tries >= 2) {
        done = true; inp.classList.add("wrong"); inp.disabled = true; btn.remove();
        f.className = "fb bad"; f.innerHTML = "Đáp án: <b>" + esc(answers[0]) + "</b>";
        act.resolve(item, false, tries, wrap);
      } else {
        inp.classList.add("wrong"); CG9.sfx.bad();
        f.className = "fb bad"; f.textContent = "Chưa đúng, thử lại nhé!";
        setTimeout(function () { inp.classList.remove("wrong"); }, 600);
      }
    }
    btn.addEventListener("click", check);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter" && !opt.long && act.mode !== "exam") check(); });
    return {
      input: inp,
      answered: function () { return inp.value.trim() !== "" && inp.value !== opt.prefill; },
      grade: function () { return { c: isRight(inp.value) ? 1 : 0, t: 1 }; },
      reveal: function () {
        done = true; inp.disabled = true;
        var ok = isRight(inp.value);
        inp.classList.add(ok ? "correct" : "wrong");
        if (!ok) { f.className = "fb bad"; f.innerHTML = "Đáp án: <b>" + esc(answers[0]) + "</b>"; }
        if (item.explain) showExplain(wrap, item.explain, ok);
      }
    };
  }

  /* use the given scramble only if it has exactly the answer's letters (some source data doesn't) */
  function scrambleOf(it) {
    var letters = function (x) { return String(x).replace(/[^a-z]/gi, "").toUpperCase().split("").sort().join(""); };
    if (letters(it.scrambled) === letters(it.answer)) return String(it.scrambled).replace(/\s+/g, "");
    var ch = String(it.answer).replace(/[^a-z]/gi, "").toUpperCase().split(""), out;
    do { out = CG9.shuffle(ch).join(""); } while (ch.length > 2 && out === ch.join(""));
    return out;
  }

  var RENDER = {
    mcq: function (w, it, act, n) {
      return choiceItem(w, act, it, numLabel(n) + it.q, it.opts.map(function (o) { return { html: o }; }), it.a);
    },
    choice2: function (w, it, act, n) {
      var opts = it.options.map(function (o) { return { html: o === "-" ? "— (không cần)" : o }; });
      return choiceItem(w, act, it, numLabel(n) + it.s.replace("___", "<b class='gap'>___</b>"), opts, it.options.indexOf(it.a));
    },
    tf: function (w, it, act, n) {
      return choiceItem(w, act, it, numLabel(n) + (it.s || it.q), [{ html: "✔️ True (Đúng)" }, { html: "✖️ False (Sai)" }], it.a ? 0 : 1, { noShuffle: true, cls: "tf" });
    },
    classify: function (w, it, act, n) {
      var q = numLabel(n) + "<b>" + it.word + "</b>" + (it.ctx ? " <span class='ctx'>— " + it.ctx + "</span>" : "");
      return choiceItem(w, act, it, q, it.cats.map(function (c) { return { html: c }; }), it.cat, { noShuffle: true, cls: "cats" });
    },
    pron: function (w, it, act, n) {
      var opts = it.opts.map(function (o, i) { return { html: o, speak: (it.speak && it.speak[i]) || CG9.stripTags(o) }; });
      return choiceItem(w, act, it, numLabel(n) + (it.q || (it.mode === "stress" ? "Chọn từ có trọng âm khác các từ còn lại." : "Chọn từ có phần gạch chân phát âm khác các từ còn lại.")), opts, it.a, { cls: "pronopts" });
    },
    stress: function (w, it, act, n) {
      var opts = it.syllables.map(function (s) { return { html: s }; });
      var h = choiceItem(w, act, it, numLabel(n) + "Trọng âm của từ <b>" + it.word + "</b> rơi vào âm tiết nào?", opts, it.a, { noShuffle: true, cls: "syll" });
      w.querySelector(".qtext").appendChild(CG9.speakBtn(it.word));
      return h;
    },
    gap: function (w, it, act, n) {
      var html = "<div class='qtext'>" + numLabel(n) + blankify(it.s) + (it.hint ? " <span class='hint'>(" + it.hint + ")</span>" : "") + "</div>";
      return inputItem(w, act, it, html, it.answers || [it.a]);
    },
    wordform: function (w, it, act, n) {
      var html = "<div class='qtext'>" + numLabel(n) + blankify(it.s) + " <span class='base'>" + it.base + "</span></div>";
      return inputItem(w, act, it, html, it.answers);
    },
    anagram: function (w, it, act, n) {
      var html = "<div class='qtext'>" + numLabel(n) + it.clue + "</div><div class='scrambled'>" +
        scrambleOf(it).split("").map(function (c) { return "<span>" + esc(c) + "</span>"; }).join("") + "</div>";
      return inputItem(w, act, it, html, [it.answer], { placeholder: "Sắp xếp lại thành từ…" });
    },
    dictation: function (w, it, act, n) {
      var html = "<div class='qtext'>" + numLabel(n) + "Nghe và viết lại" + (it.vi ? " <span class='ctx'>(" + it.vi + ")</span>" : "") + "</div>";
      var h = inputItem(w, act, it, html, [it.text], { placeholder: "Gõ những gì em nghe được…" });
      var q = w.querySelector(".qtext");
      q.appendChild(CG9.speakBtn(it.text, "🔊 Nghe"));
      var slow = el("button", "speakbtn", "🐢 Chậm"); slow.type = "button";
      slow.addEventListener("click", function () { CG9.speak(it.text, 0.6); });
      q.appendChild(slow);
      return h;
    },
    rewrite: function (w, it, act, n) {
      var html = "<div class='qtext'>" + numLabel(n) + it.s + (it.key ? " <span class='keyword' title='Bắt buộc dùng từ này'>" + esc(it.key) + "</span>" : "") +
        "</div><div class='rw-prompt'>→ " + esc(it.prompt) + "</div>";
      var prefill = String(it.prompt).split(/_{3,}|\.\.\.|…/)[0].trim();
      return inputItem(w, act, it, html, it.answers, { long: true, prefill: prefill ? prefill + " " : "", placeholder: "Viết lại cả câu…" });
    },
    order: function (w, it, act, n) { return orderItem(w, it, act, n); },
    match: function (w, it, act, n) { return act.mode === "exam" ? matchExam(w, it, act, n) : matchPractice(w, it, act, n); }
  };
  CG9.RENDERABLE = RENDER;
  CG9._ui = { choiceItem: choiceItem, inputItem: inputItem, fb: fb, showExplain: showExplain, numLabel: numLabel };

  /* ============ sentence building (tap tiles) ============ */
  function orderItem(w, it, act, n) {
    w.innerHTML = "<div class='qtext'>" + numLabel(n) + "Sắp xếp thành câu đúng" + (it.vi ? ": <span class='ctx'>" + it.vi + "</span>" : "") + "</div>";
    var line = el("div", "tiles line"), pool = el("div", "tiles pool");
    w.appendChild(line); w.appendChild(pool);
    var words = it.answer.trim().split(/\s+/);
    var tries = 0, done = false;
    var shuffled = CG9.shuffle(words.map(function (t, i) { return { t: t, i: i }; }));
    if (words.length > 2 && shuffled.every(function (x, k) { return x.i === k; })) shuffled.reverse();
    shuffled.forEach(function (wd) {
      var t = el("button", "tile", esc(wd.t)); t.type = "button";
      t.addEventListener("click", function () {
        if (done) return;
        (t.parentNode === pool ? line : pool).appendChild(t);
        CG9.sfx.click();
      });
      pool.appendChild(t);
    });
    var row = el("div", "ansrow");
    var reset = el("button", "btn small ghost", "↺ Làm lại"); reset.type = "button";
    reset.addEventListener("click", function () { if (!done) Array.prototype.slice.call(line.children).forEach(function (t) { pool.appendChild(t); }); });
    row.appendChild(reset);
    var btn = el("button", "btn small check", "Kiểm tra"); btn.type = "button";
    if (act.mode !== "exam") row.appendChild(btn);
    w.appendChild(row);
    var f = fb(w);
    function current() { return Array.prototype.map.call(line.children, function (t) { return t.textContent; }).join(" "); }
    function right() { var c = norm(current()); return [it.answer].concat(it.alts || []).some(function (a) { return norm(a) === c; }); }
    btn.addEventListener("click", function () {
      if (done || pool.children.length) { if (pool.children.length) { f.className = "fb bad"; f.textContent = "Hãy dùng hết các thẻ từ nhé!"; } return; }
      tries++;
      if (right()) { done = true; line.classList.add("correct"); btn.remove(); reset.remove(); f.className = "fb ok"; f.textContent = "Tuyệt vời! 🎉"; act.resolve(it, true, tries, w); }
      else if (tries >= 2) { done = true; line.classList.add("wrong"); btn.remove(); reset.remove(); f.className = "fb bad"; f.innerHTML = "Câu đúng: <b>" + esc(it.answer) + "</b>"; act.resolve(it, false, tries, w); }
      else { CG9.sfx.bad(); f.className = "fb bad"; f.textContent = "Chưa đúng thứ tự, thử lại nhé!"; }
    });
    return {
      answered: function () { return line.children.length > 0; },
      grade: function () { return { c: right() ? 1 : 0, t: 1 }; },
      reveal: function () {
        done = true; reset.remove(); var ok = right();
        line.classList.add(ok ? "correct" : "wrong");
        if (!ok) { f.className = "fb bad"; f.innerHTML = "Câu đúng: <b>" + esc(it.answer) + "</b>"; }
      }
    };
  }

  /* ============ matching ============ */
  function matchPractice(w, it, act, n) {
    w.innerHTML = "<div class='qtext'>" + numLabel(n) + (it.q || "Nối mỗi mục bên trái với mục đúng bên phải.") + "</div>";
    var wrap = el("div", "match"), L = el("div", "mcol"), R = el("div", "mcol");
    wrap.appendChild(L); wrap.appendChild(R); w.appendChild(wrap);
    var selL = null, selR = null, triesBy = {};
    function mk(text, idx, col, left) {
      var d = el("button", "mitem", text); d.type = "button"; d.dataset.idx = idx;
      d.addEventListener("click", function () {
        if (d.classList.contains("matched")) return;
        if (left) { if (selL) selL.classList.remove("sel"); selL = d; } else { if (selR) selR.classList.remove("sel"); selR = d; }
        d.classList.add("sel");
        if (selL && selR) {
          var li = +selL.dataset.idx, ri = +selR.dataset.idx;
          triesBy[li] = (triesBy[li] || 0) + 1;
          if (li === ri) {
            selL.classList.remove("sel"); selR.classList.remove("sel");
            selL.classList.add("matched"); selR.classList.add("matched");
            act.resolve(it, true, triesBy[li], null);
          } else {
            var a = selL, b = selR; a.classList.add("flash"); b.classList.add("flash"); CG9.sfx.bad();
            setTimeout(function () { a.classList.remove("flash", "sel"); b.classList.remove("flash", "sel"); }, 450);
          }
          selL = selR = null;
        }
      });
      col.appendChild(d);
    }
    CG9.shuffle(it.pairs.map(function (p, i) { return i; })).forEach(function (i) { mk(it.pairs[i].left, i, L, true); });
    CG9.shuffle(it.pairs.map(function (p, i) { return i; })).forEach(function (i) { mk(it.pairs[i].right, i, R, false); });
    return { answered: function () { return true; }, grade: function () { return { c: 0, t: 0 }; }, reveal: function () {} };
  }
  function matchExam(w, it, act, n) {
    w.innerHTML = "<div class='qtext'>" + numLabel(n) + (it.q || "Chọn nghĩa đúng cho mỗi mục.") + "</div>";
    var rights = CG9.shuffle(it.pairs.map(function (p, i) { return i; }));
    var sels = [];
    var tbl = el("div", "mexam");
    it.pairs.forEach(function (p, i) {
      var row = el("div", "mrow");
      row.appendChild(el("div", "ml", p.left));
      var s = el("select");
      s.innerHTML = "<option value=''>— chọn —</option>" + rights.map(function (r) { return "<option value='" + r + "'>" + esc(CG9.stripTags(it.pairs[r].right)) + "</option>"; }).join("");
      row.appendChild(s); tbl.appendChild(row); sels.push(s);
    });
    w.appendChild(tbl);
    return {
      answered: function () { return sels.every(function (s) { return s.value !== ""; }); },
      grade: function () { return { c: sels.filter(function (s, i) { return s.value === String(i); }).length, t: sels.length }; },
      reveal: function () {
        sels.forEach(function (s, i) {
          s.disabled = true; var ok = s.value === String(i);
          s.classList.add(ok ? "correct" : "wrong");
          if (!ok) s.parentNode.appendChild(el("div", "fb bad", "→ " + it.pairs[i].right));
        });
      }
    };
  }

  /* ============ non-scored blocks ============ */
  var NONSCORED = {
    passage: function (parent, it) {
      var b = el("div", "passage");
      if (it.title) b.appendChild(el("h4", "", it.title));
      var paras = String(it.text).split(/\n\n+/);
      paras.forEach(function (p) { b.appendChild(el("p", "", p.replace(/\n/g, "<br>"))); });
      var tools = el("div", "ptools");
      tools.appendChild(CG9.speakBtn(CG9.stripTags(it.text), "🔊 Nghe đoạn văn"));
      var stop = el("button", "speakbtn", "⏹"); stop.type = "button";
      stop.addEventListener("click", function () { try { speechSynthesis.cancel(); } catch (e) {} });
      tools.appendChild(stop);
      b.insertBefore(tools, b.firstChild.nextSibling || null);
      parent.appendChild(b);
    },
    theory: function (parent, it) {
      var b = el("div", "theory", (it.title ? "<h4>" + it.title + "</h4>" : "") + it.html);
      parent.appendChild(b);
    },
    writing: function (parent, it, act) { CG9.writingTask(parent, it, act); },
    speaking: function (parent, it, act) { CG9.speakingCard(parent, it, act); }
  };
  CG9.NONSCORED = NONSCORED;
  CG9.isScored = function (it) { return !!RENDER[it.kind]; };

  /* writing task: textarea + model answer + (optional) AI feedback */
  CG9.writingTask = function (parent, t, act) {
    var q = el("div", "q q-writing");
    q.innerHTML = "<div class='qtext'>✍️ " + t.prompt + "</div>" + (t.criteria ? "<div class='criteria'>📋 " + t.criteria + "</div>" : "");
    var draftKey = "cg9-draft-" + CG9.hash(t.prompt);
    var ta = el("textarea", "writebox"); ta.placeholder = "Viết bài của em ở đây (bằng tiếng Anh)…";
    try { ta.value = localStorage.getItem(draftKey) || ""; } catch (e) {}
    var wc = el("div", "wc");
    function count() { var n = (ta.value.trim().match(/\S+/g) || []).length; wc.textContent = n + " từ"; }
    ta.addEventListener("input", function () { count(); try { localStorage.setItem(draftKey, ta.value); } catch (e) {} });
    count();
    q.appendChild(ta); q.appendChild(wc);
    var row = el("div", "ansrow");
    var sampleBtn = el("button", "btn small ghost", "👀 Bài mẫu"); sampleBtn.type = "button";
    var sample = el("div", "sample", (t.sample || "").replace(/\n/g, "<br>"));
    sampleBtn.addEventListener("click", function () { sample.classList.toggle("show"); });
    row.appendChild(sampleBtn);
    var aiBtn = el("button", "btn small ai", "🤖 AI chấm bài"); aiBtn.type = "button";
    row.appendChild(aiBtn);
    var doneBtn = el("button", "btn small check", "✅ Em viết xong"); doneBtn.type = "button";
    var resolved = false;
    if (act) { act.units++; act.updateBtn(); }
    function markDone() {
      if (resolved) return; resolved = true; doneBtn.disabled = true; doneBtn.textContent = "✅ Đã xong";
      if (act) act.participate(); CG9.Progress.tagStat("writing", true);
    }
    doneBtn.addEventListener("click", function () {
      if ((ta.value.trim().match(/\S+/g) || []).length < 3) { CG9.toast("Em hãy viết ít nhất một câu nhé ✍️"); return; }
      markDone();
    });
    row.appendChild(doneBtn);
    q.appendChild(row); q.appendChild(sample);
    var aiOut = el("div", "aiout"); q.appendChild(aiOut);
    aiBtn.addEventListener("click", function () {
      if ((ta.value.trim().match(/\S+/g) || []).length < 5) { CG9.toast("Viết thêm một chút rồi nhờ AI chấm nhé!"); return; }
      CG9.AI.gradeWriting(t, ta.value, aiOut, aiBtn).then(function (ok) { if (ok) markDone(); });
    });
    parent.appendChild(q);
  };

  /* speaking card: question, record (speech recognition) or self-rate */
  CG9.speakingCard = function (parent, c, act) {
    var q = el("div", "q q-speaking");
    q.innerHTML = "<div class='qtext'>🗨️ " + c.q + (c.vi ? "<div class='ctx'>" + c.vi + "</div>" : "") + "</div>";
    var row = el("div", "ansrow");
    row.appendChild(CG9.speakBtn(c.q, "🔊 Nghe câu hỏi"));
    var rec = el("button", "btn small", "🎙️ Nói thử"); rec.type = "button";
    var said = el("div", "said");
    var r = null;
    rec.addEventListener("click", function () {
      if (r) { r.stop(); return; }
      r = CG9.listen(function (txt) { said.innerHTML = "🗣️ <i>" + esc(txt) + "</i>"; }, function () { r = null; rec.textContent = "🎙️ Nói thử"; rec.classList.remove("rec"); });
      if (r) { rec.textContent = "⏹ Dừng"; rec.classList.add("rec"); }
    });
    if (CG9.canListen()) row.appendChild(rec);
    var hint = el("button", "btn small ghost", "💡 Gợi ý"); hint.type = "button";
    var sample = el("div", "sample", c.sample || "");
    hint.addEventListener("click", function () { sample.classList.toggle("show"); });
    row.appendChild(hint);
    q.appendChild(row); q.appendChild(said); q.appendChild(sample);
    var rate = el("div", "rate", "<span>Em tự đánh giá:</span>");
    var resolved = false;
    if (act) { act.units++; act.updateBtn(); }
    ["😐 Còn ngập ngừng", "🙂 Khá ổn", "🤩 Rất tự tin"].forEach(function (f) {
      var b = el("button", "chip", f); b.type = "button";
      b.addEventListener("click", function () {
        rate.querySelectorAll(".chip").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        if (!resolved) { resolved = true; if (act) act.participate(); CG9.Progress.tagStat("speaking", true); }
      });
      rate.appendChild(b);
    });
    q.appendChild(rate);
    parent.appendChild(q);
  };

  /* ============ result modal ============ */
  CG9.showResult = function (res, opts) {
    var pct = res.total ? Math.round(res.correct / res.total * 100) : 100;
    var msg = pct >= 90 ? "Xuất sắc! Em là ngôi sao! 🌟" : pct >= 70 ? "Giỏi lắm! Tiếp tục phát huy nhé! 💪" : pct >= 40 ? "Khá rồi! Ôn lại phần sai để tiến bộ hơn nhé! 📚" : "Không sao cả! Thử lại lần nữa, em sẽ làm tốt hơn! 🐰";
    var badges = (res.newBadges || []).map(function (b) { return "<div class='newbadge'><span>" + b.icon + "</span><b>" + b.name + "</b><small>" + b.desc + "</small></div>"; }).join("");
    var html = "<div class='result'>" +
      "<div class='big-emoji'>" + (pct >= 90 ? "🏆" : pct >= 70 ? "🥇" : pct >= 40 ? "🐰" : "🌱") + "</div>" +
      "<h2>" + msg + "</h2>" + CG9.starsHtml(res.stars) +
      (res.total ? "<p class='score'>Đúng <b>" + res.correct + "/" + res.total + "</b> (" + pct + "%)</p>" : "<p class='score'>Em đã hoàn thành hoạt động!</p>") +
      "<div class='gains'><span>🥕 +" + res.carrots + "</span><span>⚡ +" + res.xp + " XP</span>" + (res.streakUp ? "<span>🔥 " + CG9.state.streak.count + " ngày liên tiếp</span>" : "") + "</div>" +
      (res.levelUp ? "<div class='levelup'>⬆️ Lên cấp: <b>" + res.levelUp + "</b></div>" : "") +
      (badges ? "<h3>Huy hiệu mới!</h3><div class='newbadges'>" + badges + "</div>" : "") +
      (res.certificate ? "<button class='btn' data-cert>📜 Xem giấy khen</button>" : "") +
      "<div class='mrow-btns'>" + (opts.retry ? "<button class='btn ghost' data-retry>↺ Làm lại</button>" : "") +
      "<button class='btn primary' data-close>" + (opts.nextLabel || "Tiếp tục") + "</button></div></div>";
    var skipClose = false;
    var m = CG9.modal(html, { onClose: function () { if (!skipClose && opts.onClose) opts.onClose(); } });
    if (pct >= 70) CG9.confetti();
    if (res.newBadges && res.newBadges.length) CG9.sfx.badge(); else CG9.sfx.win();
    var r = m.box.querySelector("[data-retry]");
    if (r) r.addEventListener("click", function () { skipClose = true; m.close(); opts.retry(); });
    var c = m.box.querySelector("[data-cert]");
    if (c) c.addEventListener("click", function () { skipClose = true; m.close(); CG9.Awards.certificate(res.certificate); });
  };
})();

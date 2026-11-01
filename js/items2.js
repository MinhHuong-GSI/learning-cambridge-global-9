/* Learning Cambridge Global 9 — extra item kinds:
   cloze (multiple-choice / open), headings, seqorder, tapword (find word / find & fix error),
   multi (choose all that apply), guided writing (non-scored). Formats: docs/DATA-FORMAT.md */
(function () {
  "use strict";
  var el = CG9.el, esc = CG9.esc, norm = CG9.norm;
  var R = CG9.RENDERABLE, U = CG9._ui;

  function lockAll(list) { list.forEach(function (x) { x.disabled = true; }); }

  /* ---------- multi-slot engine (cloze gaps, heading selects) ----------
     slots: [{ctl, right(): bool, key: string, filled(): bool}] */
  function slotItem(w, act, item, slots) {
    var tries = slots.map(function () { return 0; }), done = slots.map(function () { return false; });
    var f = U.fb(w);
    var btn = el("button", "btn small check", "Kiểm tra"); btn.type = "button";
    if (act.mode !== "exam") { var row = el("div", "ansrow"); row.appendChild(btn); w.insertBefore(row, f); }
    function showKey(s) {
      if (s.ctl.parentNode.querySelector(".slotkey")) return;
      s.ctl.insertAdjacentElement("afterend", el("span", "slotkey", "→ " + esc(s.key)));
    }
    btn.addEventListener("click", function () {
      var empty = slots.filter(function (s, i) { return !done[i] && !s.filled(); }).length;
      if (empty) { f.className = "fb bad"; f.textContent = "Còn " + empty + " chỗ trống chưa làm nhé!"; return; }
      var wrongNow = 0;
      slots.forEach(function (s, i) {
        if (done[i]) return;
        tries[i]++;
        s.ctl.classList.remove("wrong");
        if (s.right()) { done[i] = true; s.ctl.classList.add("correct"); s.ctl.disabled = true; act.resolve(item, true, tries[i], null); }
        else if (tries[i] >= 2) { done[i] = true; s.ctl.classList.add("wrong"); s.ctl.disabled = true; showKey(s); act.resolve(item, false, tries[i], null); }
        else { s.ctl.classList.add("wrong"); wrongNow++; }
      });
      if (wrongNow) { CG9.sfx.bad(); f.className = "fb bad"; f.textContent = "Có " + wrongNow + " chỗ chưa đúng (ô đỏ) — sửa lại rồi bấm Kiểm tra lần nữa!"; }
      if (done.every(Boolean)) {
        btn.remove();
        var c = slots.filter(function (s) { return s.ctl.classList.contains("correct"); }).length;
        f.className = "fb " + (c === slots.length ? "ok" : "bad"); f.textContent = "Đúng " + c + "/" + slots.length + (c === slots.length ? " 🎉" : "");
        if (item.explain) U.showExplain(w, item.explain, c === slots.length);
      }
    });
    return {
      answered: function () { return slots.every(function (s) { return s.filled(); }); },
      grade: function () { return { c: slots.filter(function (s) { return s.right(); }).length, t: slots.length }; },
      reveal: function () {
        slots.forEach(function (s) { s.ctl.disabled = true; var ok = s.right(); s.ctl.classList.add(ok ? "correct" : "wrong"); if (!ok) showKey(s); });
        if (item.explain) U.showExplain(w, item.explain, true);
      }
    };
  }

  function selectCtl(options, placeholder) {
    var s = el("select", "slot");
    s.innerHTML = "<option value=''>" + (placeholder || "— chọn —") + "</option>" +
      options.map(function (o) { return "<option value='" + o.v + "'>" + esc(CG9.stripTags(o.t)) + "</option>"; }).join("");
    return s;
  }

  /* ---------- cloze ---------- */
  R.cloze = function (w, it, act, n) {
    w.innerHTML = (it.title ? "<div class='qtext'>" + U.numLabel(n) + "<b>" + it.title + "</b></div>" : "") ;
    var box = el("div", "cloze");
    box.innerHTML = String(it.text).split(/\n\n+/).map(function (p) {
      return "<p>" + p.replace(/\{(\d+)\}/g, "<span class='cz' data-n='$1'></span>") + "</p>";
    }).join("");
    w.appendChild(box);
    var slots = [];
    box.querySelectorAll(".cz").forEach(function (sp) {
      var k = +sp.dataset.n, g = it.gaps[k - 1];
      if (!g) return;
      var ctl;
      if (g.opts) {
        var ord = CG9.shuffle(g.opts.map(function (o, i) { return { t: o, v: i }; }));
        ctl = selectCtl(ord, "(" + k + ") …");
        slots.push({ ctl: ctl, key: g.opts[g.a], filled: function () { return ctl.value !== ""; }, right: function () { return ctl.value === String(g.a); } });
      } else {
        ctl = el("input", "slot ans"); ctl.type = "text"; ctl.autocomplete = "off"; ctl.autocapitalize = "off"; ctl.spellcheck = false;
        ctl.placeholder = "(" + k + ")";
        var answers = g.answers || [];
        slots.push({ ctl: ctl, key: answers[0], filled: function () { return ctl.value.trim() !== ""; }, right: function () { var v = norm(ctl.value); return answers.some(function (a) { return norm(a) === v; }); } });
      }
      var wrap = el("span", "czw", "<sup>" + k + "</sup>");
      wrap.appendChild(ctl);
      sp.replaceWith(wrap);
    });
    var tools = el("div", "ptools");
    tools.appendChild(CG9.speakBtn(CG9.stripTags(String(it.text).replace(/\{\d+\}/g, "…")), "🔊 Nghe đoạn văn"));
    w.insertBefore(tools, box);
    return slotItem(w, act, it, slots);
  };

  /* ---------- headings ---------- */
  R.headings = function (w, it, act, n) {
    w.innerHTML = "<div class='qtext'>" + U.numLabel(n) + (it.q || "Chọn tiêu đề phù hợp cho mỗi đoạn văn (có 1 tiêu đề thừa).") + "</div>";
    var ord = CG9.shuffle(it.headings.map(function (h, i) { return { t: h, v: i }; }));
    var bank = el("div", "hbank", ord.map(function (o, i) { return "<span><b>" + "ABCDEFG"[i] + "</b> " + o.t + "</span>"; }).join(""));
    w.appendChild(bank);
    var slots = [];
    it.paras.forEach(function (p, i) {
      var box = el("div", "hpara");
      var top = el("div", "htop", "<b>Đoạn " + (i + 1) + "</b>");
      var ctl = selectCtl(ord.map(function (o, k) { return { t: "ABCDEFG"[k] + ". " + o.t, v: o.v }; }), "— chọn tiêu đề —");
      top.appendChild(ctl); box.appendChild(top);
      box.appendChild(el("p", "", p));
      w.appendChild(box);
      slots.push({ ctl: ctl, key: it.headings[it.a[i]], filled: function () { return ctl.value !== ""; }, right: function () { return ctl.value === String(it.a[i]); } });
    });
    return slotItem(w, act, it, slots);
  };

  /* ---------- seqorder: tap sentences into order ---------- */
  R.seqorder = function (w, it, act, n) {
    w.innerHTML = "<div class='qtext'>" + U.numLabel(n) + (it.q || "Chạm vào các câu theo đúng thứ tự.") + (it.vi ? " <span class='ctx'>" + it.vi + "</span>" : "") + "</div>";
    var line = el("ol", "seq line"), pool = el("div", "seq pool");
    w.appendChild(line); w.appendChild(pool);
    var order = CG9.shuffle(it.items.map(function (s, i) { return i; }));
    if (order.every(function (x, k) { return x === k; })) order.reverse();
    var tries = 0, done = false;
    order.forEach(function (i) {
      var c = el("button", "scard", it.items[i]); c.type = "button"; c.dataset.i = i;
      c.addEventListener("click", function () {
        if (done) return;
        if (c.parentNode === pool) { var li = el("li"); li.appendChild(c); line.appendChild(li); }
        else { var li2 = c.parentNode; pool.appendChild(c); li2.remove(); }
        CG9.sfx.click();
      });
      pool.appendChild(c);
    });
    var row = el("div", "ansrow");
    var reset = el("button", "btn small ghost", "↺ Làm lại"); reset.type = "button";
    reset.addEventListener("click", function () { if (done) return; Array.prototype.slice.call(line.querySelectorAll(".scard")).forEach(function (c) { pool.appendChild(c); }); line.innerHTML = ""; });
    row.appendChild(reset);
    var btn = el("button", "btn small check", "Kiểm tra"); btn.type = "button";
    if (act.mode !== "exam") row.appendChild(btn);
    w.appendChild(row);
    var f = U.fb(w);
    function cur() { return Array.prototype.map.call(line.querySelectorAll(".scard"), function (c) { return +c.dataset.i; }); }
    function right() { var o = cur(); return o.length === it.items.length && o.every(function (x, k) { return x === k; }); }
    function showKey() {
      var k = el("ol", "seqkey"); it.items.forEach(function (s) { k.appendChild(el("li", "", s)); });
      f.className = "fb bad"; f.innerHTML = "Thứ tự đúng:"; f.appendChild(k);
    }
    btn.addEventListener("click", function () {
      if (done) return;
      if (pool.children.length) { f.className = "fb bad"; f.textContent = "Hãy xếp hết tất cả các câu nhé!"; return; }
      tries++;
      if (right()) { done = true; line.classList.add("correct"); btn.remove(); reset.remove(); f.className = "fb ok"; f.textContent = "Chính xác! 🎉"; act.resolve(it, true, tries, w); }
      else if (tries >= 2) { done = true; line.classList.add("wrong"); btn.remove(); reset.remove(); showKey(); act.resolve(it, false, tries, w); }
      else {
        CG9.sfx.bad();
        var firstBad = cur().findIndex(function (x, k) { return x !== k; });
        f.className = "fb bad"; f.textContent = "Chưa đúng — các câu 1–" + firstBad + " đã đúng vị trí, hãy xem lại từ câu " + (firstBad + 1) + ".";
        if (firstBad === 0) f.textContent = "Chưa đúng — xem lại câu mở đầu nhé!";
      }
    });
    return {
      answered: function () { return pool.children.length === 0; },
      grade: function () { return { c: right() ? 1 : 0, t: 1 }; },
      reveal: function () { done = true; reset.remove(); var ok = right(); line.classList.add(ok ? "correct" : "wrong"); if (!ok) showKey(); }
    };
  };

  /* ---------- tapword: find a word (optionally correct it) ---------- */
  function core(tok) { return tok.replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "").toLowerCase(); }
  R.tapword = function (w, it, act, n) {
    w.innerHTML = "<div class='qtext'>" + U.numLabel(n) + it.q + "</div>";
    var box = el("div", "tapbox"); w.appendChild(box);
    var target = core(it.answer), toks = [], tries = 0, done = false, picked = null;
    String(it.text).split(/(\s+)/).forEach(function (t) {
      if (/^\s+$/.test(t) || !t) { box.appendChild(document.createTextNode(t)); return; }
      var b = el("button", "tok", esc(t)); b.type = "button"; b.dataset.c = core(t);
      if (!b.dataset.c) { box.appendChild(document.createTextNode(t)); return; }
      toks.push(b); box.appendChild(b);
      b.addEventListener("click", function () { tap(b); });
    });
    var f = U.fb(w), fixRow = null, fixInp = null, fixTries = 0;
    function isTarget(b) { return b && b.dataset.c === target; }
    function fixRight() { if (!it.fix) return true; var v = norm(fixInp ? fixInp.value : ""); return it.fix.some(function (a) { return norm(a) === v; }); }
    function askFix(b) {
      if (!it.fix || fixRow) return;
      fixRow = el("div", "ansrow", "<span>Sửa <b>" + esc(b.textContent) + "</b> thành:</span>");
      fixInp = el("input", "ans"); fixInp.type = "text"; fixInp.autocomplete = "off"; fixInp.autocapitalize = "off"; fixInp.spellcheck = false; fixInp.placeholder = "Từ đúng…";
      fixRow.appendChild(fixInp);
      if (act.mode !== "exam") {
        var cb = el("button", "btn small check", "Kiểm tra"); cb.type = "button";
        var checkFix = function () {
          if (done || !fixInp.value.trim()) return;
          fixTries++;
          if (fixRight()) { done = true; fixInp.classList.add("correct"); fixInp.disabled = true; cb.remove(); f.className = "fb ok"; f.textContent = "Chính xác! 🎉"; act.resolve(it, true, Math.max(tries, fixTries), w); }
          else if (fixTries >= 2) { done = true; fixInp.classList.add("wrong"); fixInp.disabled = true; cb.remove(); f.className = "fb bad"; f.innerHTML = "Sửa đúng: <b>" + esc(it.fix[0]) + "</b>"; act.resolve(it, false, 2, w); }
          else { CG9.sfx.bad(); fixInp.classList.add("wrong"); f.className = "fb bad"; f.textContent = "Chưa đúng, thử lại nhé!"; setTimeout(function () { fixInp.classList.remove("wrong"); }, 600); }
        };
        cb.addEventListener("click", checkFix);
        fixInp.addEventListener("keydown", function (e) { if (e.key === "Enter") checkFix(); });
        fixRow.appendChild(cb);
      }
      w.insertBefore(fixRow, f);
      setTimeout(function () { fixInp.focus(); }, 50);
    }
    function tap(b) {
      if (done) return;
      if (act.mode === "exam") {
        if (fixRow && picked !== b) { fixRow.remove(); fixRow = null; }
        toks.forEach(function (x) { x.classList.remove("picked"); });
        b.classList.add("picked"); picked = b; askFix(b); return;
      }
      if (picked && isTarget(picked)) return; // waiting for the correction
      tries++;
      if (isTarget(b)) {
        picked = b; b.classList.add("correct");
        if (it.fix) { f.className = "fb ok"; f.textContent = "Đúng từ sai rồi! Giờ hãy sửa lại 👇"; askFix(b); }
        else { done = true; f.className = "fb ok"; f.textContent = "Chính xác! 🎉"; act.resolve(it, true, tries, w); }
      } else if (tries >= 2) {
        done = true; b.classList.add("wrong");
        toks.forEach(function (x) { if (isTarget(x)) x.classList.add("correct"); });
        f.className = "fb bad"; f.innerHTML = "Đáp án: <b>" + esc(it.answer) + "</b>" + (it.fix ? " → <b>" + esc(it.fix[0]) + "</b>" : "");
        act.resolve(it, false, tries, w);
      } else { b.classList.add("wrong"); CG9.sfx.bad(); f.className = "fb bad"; f.textContent = "Chưa đúng, thử từ khác nhé!"; }
    }
    return {
      answered: function () { return !!picked && (!it.fix || (fixInp && fixInp.value.trim() !== "")); },
      grade: function () { return { c: isTarget(picked) && fixRight() ? 1 : 0, t: 1 }; },
      reveal: function () {
        done = true; var ok = isTarget(picked) && fixRight();
        toks.forEach(function (x) { if (isTarget(x)) x.classList.add("correct"); else if (x === picked) x.classList.add("wrong"); });
        if (fixInp) { fixInp.disabled = true; fixInp.classList.add(fixRight() ? "correct" : "wrong"); }
        if (!ok) { f.className = "fb bad"; f.innerHTML = "Đáp án: <b>" + esc(it.answer) + "</b>" + (it.fix ? " → <b>" + esc(it.fix[0]) + "</b>" : ""); }
        if (it.explain) U.showExplain(w, it.explain, ok);
      }
    };
  };

  /* ---------- multi: choose all that apply ---------- */
  R.multi = function (w, it, act, n) {
    w.innerHTML = "<div class='qtext'>" + U.numLabel(n) + it.q + " <span class='hint'>(chọn tất cả đáp án đúng)</span></div>";
    var box = el("div", "opts multi"); w.appendChild(box);
    var on = {}, btns = [], tries = 0, done = false;
    var correct = it.a.slice().sort().join(",");
    CG9.shuffle(it.opts.map(function (o, i) { return i; })).forEach(function (i) {
      var b = el("button", "opt", "<span class='box'></span>" + it.opts[i]); b.type = "button"; b.dataset.i = i;
      b.addEventListener("click", function () {
        if (done) return;
        on[i] = !on[i]; b.classList.toggle("picked", on[i]);
        b.classList.remove("wrong");
      });
      btns.push(b); box.appendChild(b);
    });
    var row = el("div", "ansrow"), btn = el("button", "btn small check", "Kiểm tra"); btn.type = "button";
    if (act.mode !== "exam") { row.appendChild(btn); w.appendChild(row); }
    var f = U.fb(w);
    function sel() { return Object.keys(on).filter(function (k) { return on[k]; }).map(Number).sort().join(","); }
    function reveal(final) {
      btns.forEach(function (b) {
        var i = +b.dataset.i, should = it.a.indexOf(i) >= 0;
        b.classList.add("disabled");
        if (should) b.classList.add("correct"); else if (on[i]) b.classList.add("wrong");
      });
      if (final && it.explain) U.showExplain(w, it.explain, sel() === correct);
    }
    btn.addEventListener("click", function () {
      if (done) return;
      if (!sel()) { f.className = "fb bad"; f.textContent = "Hãy chọn ít nhất một đáp án!"; return; }
      tries++;
      if (sel() === correct) { done = true; btn.remove(); reveal(false); f.className = "fb ok"; f.textContent = "Chính xác! 🎉"; act.resolve(it, true, tries, w); }
      else if (tries >= 2) { done = true; btn.remove(); reveal(false); f.className = "fb bad"; f.textContent = "Các đáp án đúng được tô xanh."; act.resolve(it, false, tries, w); }
      else {
        CG9.sfx.bad();
        btns.forEach(function (b) { var i = +b.dataset.i; if (on[i] && it.a.indexOf(i) < 0) b.classList.add("wrong"); });
        f.className = "fb bad"; f.textContent = "Chưa đúng — có " + it.a.length + " đáp án đúng. Bỏ chọn ô đỏ và thử lại!";
      }
    });
    return {
      answered: function () { return sel() !== ""; },
      grade: function () { return { c: sel() === correct ? 1 : 0, t: 1 }; },
      reveal: function () { done = true; reveal(true); }
    };
  };

  /* ---------- guided writing (non-scored) ---------- */
  CG9.NONSCORED.guided = function (parent, t, act) {
    var q = el("div", "q q-writing guided");
    q.innerHTML = "<div class='qtext'>✍️ " + t.prompt + "</div>";
    if (t.outline && t.outline.length) q.appendChild(el("ol", "outline", t.outline.map(function (s) { return "<li>" + s + "</li>"; }).join("")));
    var chips = el("div", "usewords");
    var words = (t.useWords || []).map(function (wd) {
      var c = el("span", "uw", "⬜ " + esc(wd)); chips.appendChild(c); return { w: wd, el: c };
    });
    if (words.length) { q.appendChild(el("div", "label", "Dùng các từ/cụm từ sau:")); q.appendChild(chips); }
    var draftKey = "cg9-draft-" + CG9.hash(t.prompt);
    var ta = el("textarea", "writebox"); ta.placeholder = "Viết đoạn văn của em ở đây (bằng tiếng Anh)…";
    try { ta.value = localStorage.getItem(draftKey) || ""; } catch (e) {}
    var min = t.minWords || 60;
    var meter = el("div", "meter", "<div class='bar'><i></i></div><small></small>");
    q.appendChild(ta); q.appendChild(meter);
    var row = el("div", "ansrow");
    var sampleBtn = el("button", "btn small ghost", "👀 Bài mẫu"); sampleBtn.type = "button";
    var sample = el("div", "sample", String(t.sample || "").replace(/\n/g, "<br>"));
    sampleBtn.addEventListener("click", function () { sample.classList.toggle("show"); });
    var aiBtn = el("button", "btn small ai", "🤖 AI chấm bài"); aiBtn.type = "button";
    var doneBtn = el("button", "btn small check", "✅ Em viết xong"); doneBtn.type = "button";
    row.appendChild(sampleBtn); row.appendChild(aiBtn); row.appendChild(doneBtn);
    q.appendChild(row);
    if (t.criteria) q.appendChild(el("div", "criteria", "📋 " + t.criteria));
    q.appendChild(sample);
    var aiOut = el("div", "aiout"); q.appendChild(aiOut);
    var resolved = false;
    if (act) { act.units++; act.updateBtn(); }
    function update() {
      var text = ta.value, n = (text.trim().match(/\S+/g) || []).length;
      var toks = text.toLowerCase().match(/[a-z']+/g) || [];
      meter.querySelector("i").style.width = Math.min(100, n / min * 100) + "%";
      meter.querySelector("small").textContent = n + " / " + min + " từ" + (n >= min ? " ✅" : "");
      var used = 0;
      words.forEach(function (x) {
        // every word of the phrase must appear; long words may carry an ending (-s, -ed, -ing)
        var parts = x.w.toLowerCase().replace(/\(.*?\)/g, "").split("/")[0].match(/[a-z']+/g) || [];
        var ok = parts.length > 0 && parts.every(function (p) {
          var stem = p.length > 4 ? p.slice(0, Math.max(4, p.length - 2)) : p;
          return toks.some(function (t) { return p.length > 4 ? t.indexOf(stem) === 0 : t === p || t.indexOf(p) === 0 && t.length <= p.length + 3; });
        });
        x.el.classList.toggle("on", ok); x.el.textContent = (ok ? "✅ " : "⬜ ") + x.w;
        if (ok) used++;
      });
      doneBtn.disabled = resolved || n < min;
      return { n: n, used: used };
    }
    ta.addEventListener("input", function () { update(); try { localStorage.setItem(draftKey, ta.value); } catch (e) {} });
    update();
    function markDone() {
      if (resolved) return; resolved = true; doneBtn.disabled = true; doneBtn.textContent = "✅ Đã xong";
      if (act) act.participate(); CG9.Progress.tagStat("writing", true);
    }
    doneBtn.addEventListener("click", function () {
      var s = update();
      if (s.used < words.length && !confirm("Em mới dùng " + s.used + "/" + words.length + " từ gợi ý. Vẫn nộp bài?")) return;
      markDone();
    });
    aiBtn.addEventListener("click", function () {
      if (update().n < 10) { CG9.toast("Viết thêm một chút rồi nhờ AI chấm nhé!"); return; }
      var crit = (t.criteria || "") + (words.length ? " Required words/phrases: " + t.useWords.join(", ") + "." : "") + " Minimum " + min + " words.";
      CG9.AI.gradeWriting({ prompt: t.prompt, criteria: crit }, ta.value, aiOut, aiBtn).then(function (ok) { if (ok && update().n >= min) markDone(); });
    });
    parent.appendChild(q);
  };
})();

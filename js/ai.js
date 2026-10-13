/* Learning Cambridge Global 9 — OpenAI Responses API features:
   - Story Adventure: character + setting -> illustrated opening scene + 3 choices (continues with previous_response_id)
   - AI writing feedback
   - AI reading passage generator (same unit topic) */
(function () {
  "use strict";
  var el = CG9.el, esc = CG9.esc;
  var API = "https://api.openai.com/v1/responses";

  function settings() { return CG9.state.settings; }
  function isReasoning(m) { return /^(gpt-5|gpt-6|o\d)/i.test(m || ""); }

  var AI = CG9.AI = {
    ready: function () { return !!settings().apiKey; },
    requireKey: function () {
      if (AI.ready()) return true;
      var m = CG9.modal("<h2>🔑 Cần OpenAI API key</h2><p>Tính năng AI (truyện phiêu lưu có tranh, chấm bài viết, tạo bài đọc) dùng <b>OpenAI Responses API</b>. Hãy nhờ bố mẹ nhập API key trong phần <b>Cài đặt</b>.</p><div class='mrow-btns'><button class='btn ghost' data-close>Để sau</button><button class='btn primary' data-go>⚙️ Mở Cài đặt</button></div>");
      m.box.querySelector("[data-go]").addEventListener("click", function () { m.close(); location.hash = "#/settings"; });
      return false;
    },

    /* POST /v1/responses */
    call: function (body) {
      var s = settings();
      body.model = body.model || s.textModel || "gpt-5.4-mini";
      if (isReasoning(body.model) && !body.reasoning) body.reasoning = { effort: "low" };
      return fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + s.apiKey },
        body: JSON.stringify(body)
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (!r.ok || j.error) {
            var msg = (j.error && j.error.message) || ("HTTP " + r.status);
            if (r.status === 401) msg = "API key không hợp lệ (401). Kiểm tra lại trong Cài đặt.";
            if (r.status === 429) msg = "Hết hạn mức hoặc gửi quá nhanh (429). " + msg;
            throw new Error(msg);
          }
          return j;
        });
      });
    },
    text: function (resp) {
      var out = "";
      (resp.output || []).forEach(function (it) {
        if (it.type === "message") (it.content || []).forEach(function (c) {
          if (c.type === "output_text") out += c.text;
          if (c.type === "refusal") throw new Error("AI từ chối yêu cầu: " + c.refusal);
        });
      });
      if (!out && resp.status === "incomplete") throw new Error("Phản hồi bị cắt ngang (" + ((resp.incomplete_details || {}).reason || "incomplete") + ").");
      return out;
    },
    json: function (body, name, schema) {
      body.text = { format: { type: "json_schema", name: name, schema: schema, strict: true } };
      return AI.call(body).then(function (resp) {
        var data = JSON.parse(AI.text(resp));
        return { data: data, id: resp.id };
      });
    },
    image: function (prompt) {
      var s = settings();
      var tool = { type: "image_generation", size: "1536x1024", quality: s.imageQuality || "low", output_format: "jpeg", output_compression: 72 };
      if (s.imageModel) tool.model = s.imageModel;
      return AI.call({
        input: "Create a warm, colourful children's storybook illustration for teenagers learning English. Absolutely no text, letters, captions or speech bubbles in the image. Scene: " + prompt,
        tools: [tool], tool_choice: { type: "image_generation" }, store: false
      }).then(function (resp) {
        var img = (resp.output || []).filter(function (o) { return o.type === "image_generation_call" && o.result; })[0];
        if (!img) throw new Error("Không nhận được ảnh từ AI.");
        return "data:image/jpeg;base64," + img.result;
      });
    },
    test: function () {
      return AI.call({ input: "Reply with exactly: OK", store: false }).then(function (r) { return AI.text(r); });
    }
  };

  /* -------- unit context for prompts -------- */
  function unitContext(n, nVocab) {
    var u = CG9.unit(n);
    var vocab = CG9.sample(CG9.vocabOf(n), nVocab || 14);
    var grammar = [];
    CG9.lessonsOf(n, "lesson").forEach(function (l) { (l.game.grammarNotes || []).forEach(function (g) { grammar.push(CG9.stripTags(g.title)); }); });
    return {
      u: u, vocab: vocab,
      grammar: CG9.sample(grammar, 5),
      text: "Cambridge Global English 9 (Grade 9, CEFR B1), Unit " + n + " \"" + u.title + "\".\n" +
        "Target vocabulary (term = Vietnamese): " + vocab.map(function (v) { return v.term + " = " + v.vi; }).join("; ") + ".\n" +
        "Grammar points of this unit: " + CG9.sample(grammar, 5).join("; ") + "."
    };
  }
  AI.unitContext = unitContext;

  var S = function (props, req) { return { type: "object", additionalProperties: false, required: req || Object.keys(props), properties: props }; };
  var STR = { type: "string" }, INT = { type: "integer" }, BOOL = { type: "boolean" };
  var TERM = S({ term: STR, vi: STR });

  /* ===================== STORY ADVENTURE ===================== */
  var STORY_SCHEMA = S({
    title: STR,
    scene: STR,
    summary_vi: STR,
    image_prompt: STR,
    vocab_used: { type: "array", items: TERM },
    question: S({ q: STR, opts: { type: "array", items: STR }, a: INT, explain_vi: STR }),
    choices: { type: "array", items: S({ text: STR, hint_vi: STR }) },
    learner_feedback_vi: STR,
    is_ending: BOOL
  });
  var MAX_SCENES = 6;

  function storyInstructions(st) {
    var c = unitContext(st.unit, 16);
    st.targets = c.vocab.map(function (v) { return v.term; });
    return "You are a warm, imaginative storyteller writing an interactive 'choose your own adventure' story for a Vietnamese 14-year-old learning English with " + c.text + "\n\n" +
      "Rules for every scene:\n" +
      "- 'scene': 110–160 words of clear, natural English at CEFR B1 (short paragraphs, separated by a blank line). Age-appropriate, kind, exciting but never scary or violent.\n" +
      "- Use 4–6 of the target vocabulary items naturally and wrap each used item in double asterisks exactly like **item**. Also use at least one of the unit's grammar points.\n" +
      "- 'vocab_used': each wrapped item with its Vietnamese meaning.\n" +
      "- 'summary_vi': 1–2 sentences summarising the scene in Vietnamese.\n" +
      "- 'question': one reading-comprehension multiple-choice question about this scene (English, 3 options, 'a' = index of the correct option, 'explain_vi' in Vietnamese).\n" +
      "- 'choices': exactly 3 short options in English (max 12 words each) for what the main character does next, each with a Vietnamese 'hint_vi'. Make them clearly different (e.g. brave / clever / kind).\n" +
      "- 'image_prompt': a vivid visual description of this exact moment for an illustrator, always repeating the main character's consistent appearance, the setting, lighting and mood. No text in the image.\n" +
      "- 'learner_feedback_vi': if the learner wrote their own action in English, gently correct it in Vietnamese (quote the corrected English sentence and praise what was good); otherwise an empty string.\n" +
      "- The story lasts at most " + MAX_SCENES + " scenes. On scene " + MAX_SCENES + " (or if the story reaches a natural happy ending) set 'is_ending' true, give a satisfying ending and return an empty 'choices' array. Otherwise 'is_ending' is false.\n" +
      "- 'title': a short catchy English title for the whole story (keep the same title in later scenes).";
  }

  function newStory(character, setting, unit) {
    return { id: "s" + Date.now().toString(36), character: character, setting: setting, unit: unit, ts: Date.now(), scenes: [], respId: null, correct: 0, answered: 0, done: false };
  }

  AI.storyStart = function (st) {
    st.instructions = storyInstructions(st);
    return AI.json({
      instructions: st.instructions,
      input: "Scene 1 (opening scene). Main character: " + st.character + ". Setting: " + st.setting + ". Introduce the character and the setting, and end with a situation that needs a decision.",
      store: true
    }, "story_scene", STORY_SCHEMA).then(function (r) { st.respId = r.id; return r.data; });
  };
  AI.storyNext = function (st, choice, custom) {
    var n = st.scenes.length + 1;
    var input = custom ?
      "The learner wrote their own action in English: \"" + choice + "\". Give learner_feedback_vi on their English, then write scene " + n + " following that action." :
      "The reader chose: \"" + choice + "\". Write scene " + n + ".";
    if (n >= MAX_SCENES) input += " This is the final scene: end the story happily (is_ending = true, no choices).";
    return AI.json({ instructions: st.instructions, input: input, previous_response_id: st.respId, store: true }, "story_scene", STORY_SCHEMA)
      .then(function (r) { st.respId = r.id; return r.data; });
  };

  function sceneHtml(text) {
    return esc(text).replace(/\*\*(.+?)\*\*/g, "<mark class='vw'>$1</mark>").split(/\n\n+/).map(function (p) { return "<p>" + p.replace(/\n/g, "<br>") + "</p>"; }).join("");
  }

  /* ---- Story page ---- */
  AI.renderStoryPage = function (root) {
    root.innerHTML = "";
    var head = el("div", "pagehead", "<h1>📕 Truyện phiêu lưu AI</h1><p>Em chọn <b>nhân vật</b> và <b>bối cảnh</b> — AI sẽ vẽ tranh và kể cảnh mở đầu bằng tiếng Anh, dùng từ vựng của Unit em đang học. Em chọn 1 trong 3 hướng đi tiếp (hoặc tự viết bằng tiếng Anh!).</p>");
    root.appendChild(head);
    var form = el("div", "card storyform");
    var unitOpts = CG9.UNITS.map(function (u) { return "<option value='" + u.n + "'" + (u.n === (CG9.state.lastUnit || 1) ? " selected" : "") + ">Unit " + u.n + " · " + u.title + "</option>"; }).join("");
    form.innerHTML =
      "<label>🧑‍🚀 Nhân vật (tiếng Anh hoặc tiếng Việt)<input id='stChar' maxlength='120' placeholder='VD: Mai, a curious 14-year-old girl who loves robots'></label>" +
      "<div class='chips' id='chChips'></div>" +
      "<label>🏞️ Bối cảnh<input id='stSet' maxlength='140' placeholder='VD: a floating eco-city in the year 2080'></label>" +
      "<div class='chips' id='setChips'></div>" +
      "<label>📘 Từ vựng & ngữ pháp theo<select id='stUnit'>" + unitOpts + "</select></label>" +
      "<button class='btn big primary' id='stGo'>✨ Bắt đầu câu chuyện</button>";
    root.appendChild(form);
    var chars = ["a brave rabbit detective called Tho", "Minh, a shy student who can talk to animals", "a robot who wants to become a chef", "twins who run a school newspaper", "a young scientist with a magic microscope"];
    var sets = ["a mysterious island hotel", "a school on the Moon", "Ha Long Bay during a storm", "an ancient Roman city", "a rainforest research station", "a futuristic smart home"];
    function chips(id, arr, inp) {
      var c = form.querySelector(id);
      arr.forEach(function (t) { var b = el("button", "chip", t); b.type = "button"; b.addEventListener("click", function () { form.querySelector(inp).value = t; }); c.appendChild(b); });
    }
    chips("#chChips", chars, "#stChar"); chips("#setChips", sets, "#stSet");
    var stage = el("div", "storystage"); root.appendChild(stage);

    form.querySelector("#stGo").addEventListener("click", function () {
      if (!AI.requireKey()) return;
      var ch = form.querySelector("#stChar").value.trim(), se = form.querySelector("#stSet").value.trim();
      if (!ch || !se) { CG9.toast("Em hãy nhập cả nhân vật và bối cảnh nhé!"); return; }
      var unit = +form.querySelector("#stUnit").value;
      CG9.state.lastUnit = unit;
      var st = newStory(ch, se, unit);
      form.classList.add("collapsed");
      runStory(stage, st, null);
    });

    // library
    var lib = el("div", "card");
    var list = CG9.state.stories || [];
    lib.innerHTML = "<h3>📚 Tủ truyện của em</h3>" + (list.length ? "" : "<p class='muted'>Chưa có truyện nào. Hãy tạo truyện đầu tiên!</p>");
    list.slice().reverse().forEach(function (s) {
      var row = el("div", "librow", "<div><b>" + esc(s.title || "Untitled") + "</b><small>Unit " + s.unit + " · " + s.scenes.length + " cảnh · " + new Date(s.ts).toLocaleDateString("vi-VN") + "</small></div>");
      var open = el("button", "btn small", "📖 Đọc lại"); open.addEventListener("click", function () { readStory(stage, s); window.scrollTo({ top: stage.offsetTop - 70, behavior: "smooth" }); });
      var del = el("button", "btn small ghost", "🗑️");
      del.addEventListener("click", function () {
        if (!confirm("Xoá truyện này?")) return;
        CG9.state.stories = CG9.state.stories.filter(function (x) { return x.id !== s.id; });
        s.scenes.forEach(function (sc, i) { CG9.idbDel(s.id + "-" + i); });
        CG9.save(); AI.renderStoryPage(root);
      });
      row.appendChild(open); row.appendChild(del); lib.appendChild(row);
    });
    root.appendChild(lib);
  };

  function persist(st) {
    var list = CG9.state.stories || (CG9.state.stories = []);
    var slim = { id: st.id, title: st.title, character: st.character, setting: st.setting, unit: st.unit, ts: st.ts, done: st.done,
      scenes: st.scenes.map(function (s) { return { title: s.title, scene: s.scene, summary_vi: s.summary_vi, vocab_used: s.vocab_used, question: s.question, choices: s.choices, chosen: s.chosen, learner_feedback_vi: s.learner_feedback_vi, is_ending: s.is_ending }; }) };
    var i = list.map(function (x) { return x.id; }).indexOf(st.id);
    if (i >= 0) list[i] = slim; else list.push(slim);
    while (list.length > 25) { var old = list.shift(); old.scenes.forEach(function (sc, k) { CG9.idbDel(old.id + "-" + k); }); }
    CG9.save();
  }

  function loading(stage, msg) {
    var l = el("div", "card loadingcard", "<div class='spinner'></div><p>" + msg + "</p>");
    stage.appendChild(l); return l;
  }

  function runStory(stage, st, choice, custom) {
    var isFirst = !st.scenes.length;
    if (isFirst) stage.innerHTML = "";
    var ld = loading(stage, isFirst ? "🪄 AI đang viết cảnh mở đầu…" : "🪄 AI đang viết cảnh tiếp theo…");
    ld.scrollIntoView({ behavior: "smooth", block: "center" });
    var p = isFirst ? AI.storyStart(st) : AI.storyNext(st, choice, custom);
    p.then(function (data) {
      ld.remove();
      if (!isFirst) st.scenes[st.scenes.length - 1].chosen = choice;
      st.title = st.title || data.title;
      st.scenes.push(data);
      if (data.is_ending || st.scenes.length >= MAX_SCENES) { data.is_ending = true; data.choices = []; }
      CG9.Progress.count("scenes");
      if (isFirst) CG9.Progress.count("stories");
      persist(st);
      renderScene(stage, st, st.scenes.length - 1, true);
      CG9.Awards.checkAndToast(); CG9.save();
    }).catch(function (e) {
      ld.innerHTML = "<p class='err'>⚠️ " + esc(e.message) + "</p>";
      var again = el("button", "btn", "↺ Thử lại"); again.addEventListener("click", function () { ld.remove(); runStory(stage, st, choice, custom); });
      ld.appendChild(again);
    });
  }

  function renderScene(stage, st, idx, live) {
    var sc = st.scenes[idx];
    var card = el("div", "card scene");
    card.innerHTML = (idx === 0 ? "<h2 class='storytitle'>📕 " + esc(st.title) + "</h2><p class='muted'>🧑 " + esc(st.character) + " · 🏞️ " + esc(st.setting) + " · Unit " + st.unit + "</p>" : "") +
      "<div class='scene-n'>Cảnh " + (idx + 1) + "</div>";
    var pic = el("div", "pic");
    card.appendChild(pic);
    var key = st.id + "-" + idx;
    CG9.idbGet(key).then(function (img) {
      if (img) { pic.innerHTML = "<img alt='Tranh minh hoạ cảnh " + (idx + 1) + "' src='" + img + "'>"; return; }
      if (!live || !settings().images) { pic.innerHTML = "<div class='pic-ph'>🎨</div>"; pic.classList.add("noimg"); return; }
      pic.innerHTML = "<div class='pic-ph'><div class='spinner'></div><span>Đang vẽ tranh…</span></div>";
      AI.image(sc.image_prompt).then(function (src) {
        pic.innerHTML = "<img alt='Tranh minh hoạ cảnh " + (idx + 1) + "' src='" + src + "'>";
        CG9.idbSet(key, src);
      }).catch(function (e) {
        pic.innerHTML = "<div class='pic-ph small'>🎨 Không vẽ được tranh: " + esc(e.message) + "</div>";
      });
    });
    if (sc.learner_feedback_vi) card.appendChild(el("div", "aifeedback", "🧑‍🏫 " + esc(sc.learner_feedback_vi)));
    var txt = el("div", "scenetext", sceneHtml(sc.scene));
    card.appendChild(txt);
    var tools = el("div", "ptools");
    tools.appendChild(CG9.speakBtn(sc.scene.replace(/\*\*/g, ""), "🔊 Nghe đọc"));
    var vi = el("button", "speakbtn", "🇻🇳 Tóm tắt"); var viBox = el("div", "sample", esc(sc.summary_vi));
    vi.addEventListener("click", function () { viBox.classList.toggle("show"); });
    tools.appendChild(vi); card.appendChild(tools); card.appendChild(viBox);
    // vocabulary chips
    if (sc.vocab_used && sc.vocab_used.length) {
      var vb = el("div", "vocabchips");
      sc.vocab_used.forEach(function (v) {
        var c = el("button", "chip", "<b>" + esc(v.term) + "</b> · " + esc(v.vi)); c.type = "button";
        c.addEventListener("click", function () { CG9.speak(v.term); });
        vb.appendChild(c);
      });
      card.appendChild(vb);
    }
    stage.appendChild(card);
    // comprehension question
    var qbox = el("div", "storyq");
    card.appendChild(qbox);
    var mini = new CG9.Activity({ key: null, title: "Story question", unit: st.unit, mode: live ? "practice" : "practice", onProgress: function (a) {
      st.answered++; if (a.correct) st.correct++;
      if (live) showChoices();
    } });
    qbox.appendChild(el("div", "label", "❓ Câu hỏi đọc hiểu"));
    var qa = sc.question || { q: "", opts: [], a: 0 };
    if (qa.opts && qa.opts.length) mini.add(qbox, { kind: "mcq", q: qa.q, opts: qa.opts, a: Math.min(qa.a, qa.opts.length - 1), explain: qa.explain_vi, tag: "reading" });
    var chBox = el("div", "choices"); card.appendChild(chBox);
    if (!live) {
      if (sc.chosen) chBox.innerHTML = "<div class='chosen'>➡️ Em đã chọn: <b>" + esc(sc.chosen) + "</b></div>";
      if (sc.is_ending) chBox.innerHTML = "<div class='theend'>🌈 THE END</div>";
      return;
    }
    chBox.innerHTML = "<p class='muted'>Trả lời câu hỏi để mở khoá lựa chọn tiếp theo 🔒</p>";
    var shown = false;
    function showChoices() {
      if (shown) return; shown = true;
      chBox.innerHTML = "";
      if (sc.is_ending) { finishStory(chBox, st); return; }
      chBox.appendChild(el("div", "label", "🧭 Điều gì xảy ra tiếp theo?"));
      (sc.choices || []).slice(0, 3).forEach(function (c, i) {
        var b = el("button", "choice", "<span class='cn'>" + "ABC"[i] + "</span><span><b>" + esc(c.text) + "</b><small>" + esc(c.hint_vi) + "</small></span>");
        b.addEventListener("click", function () { lockChoices(); b.classList.add("on"); runStory(stage, st, c.text, false); });
        chBox.appendChild(b);
      });
      var own = el("div", "ownchoice", "<label>✍️ Hoặc tự viết hành động của nhân vật bằng tiếng Anh (AI sẽ sửa lỗi cho em):</label>");
      var inp = el("input"); inp.placeholder = "e.g. She decides to ask the old fisherman for help."; inp.maxLength = 200;
      var go = el("button", "btn small primary", "Gửi ➜");
      go.addEventListener("click", function () {
        var v = inp.value.trim(); if (v.split(/\s+/).length < 3) { CG9.toast("Viết một câu tiếng Anh đầy đủ nhé!"); return; }
        lockChoices(); runStory(stage, st, v, true);
      });
      own.appendChild(inp); own.appendChild(go); chBox.appendChild(own);
      function lockChoices() { chBox.querySelectorAll("button,input").forEach(function (x) { x.disabled = true; }); }
    }
  }

  function finishStory(box, st) {
    st.done = true; persist(st);
    box.innerHTML = "<div class='theend'>🌈 THE END — Hết truyện!</div>";
    var res = CG9.Progress.finishActivity({ key: "story-" + st.id, title: "📕 " + (st.title || "Story"), unit: st.unit, correct: st.correct, total: st.answered, carrots: 10, kind: "story", bonusXp: 15 });
    CG9.state.carrots += 10; CG9.save();
    CG9.showResult(res, { nextLabel: "Tuyệt!" });
    var again = el("button", "btn primary", "✨ Viết truyện mới"); again.addEventListener("click", function () { location.hash = "#/story?" + Date.now(); });
    box.appendChild(again);
  }

  function readStory(stage, saved) {
    stage.innerHTML = "";
    saved.scenes.forEach(function (s, i) { renderScene(stage, { id: saved.id, title: saved.title, character: saved.character, setting: saved.setting, unit: saved.unit, scenes: saved.scenes, correct: 0, answered: 0 }, i, false); });
  }

  /* ===================== WRITING FEEDBACK ===================== */
  var WRITING_SCHEMA = S({
    score: INT,
    level_vi: STR,
    praise_vi: STR,
    corrections: { type: "array", items: S({ original: STR, corrected: STR, explain_vi: STR }) },
    improved: STR,
    tips_vi: { type: "array", items: STR }
  });
  AI.gradeWriting = function (task, text, out, btn) {
    if (!AI.requireKey()) return Promise.resolve(false);
    btn.disabled = true; var old = btn.textContent; btn.textContent = "🤖 Đang chấm…";
    out.innerHTML = "<div class='spinner'></div>";
    return AI.json({
      instructions: "You are a kind, encouraging English teacher for a Vietnamese Grade 9 student (CEFR B1, Cambridge Global English 9). Mark the student's writing for the task below. Give all explanations in Vietnamese, but keep quoted English as English. 'score' is 0–10 (task achievement, organisation, vocabulary, grammar). 'corrections': up to 8 of the most important mistakes (original fragment, corrected fragment, short Vietnamese explanation); empty if none. 'improved': the student's text rewritten at a slightly higher level while keeping their ideas. 'tips_vi': 2–3 concrete tips. Be specific and positive.",
      input: "TASK: " + CG9.stripTags(task.prompt) + (task.criteria ? "\nCRITERIA: " + CG9.stripTags(task.criteria) : "") + "\n\nSTUDENT'S TEXT:\n" + text,
      store: false
    }, "writing_feedback", WRITING_SCHEMA).then(function (r) {
      var d = r.data;
      out.innerHTML = "<div class='aibox'><div class='aiscore'><b>" + d.score + "</b>/10 <span>" + esc(d.level_vi) + "</span></div>" +
        "<p>🌟 " + esc(d.praise_vi) + "</p>" +
        (d.corrections.length ? "<h4>✏️ Sửa lỗi</h4><ul class='corr'>" + d.corrections.map(function (c) { return "<li><s>" + esc(c.original) + "</s> → <b>" + esc(c.corrected) + "</b><small>" + esc(c.explain_vi) + "</small></li>"; }).join("") + "</ul>" : "<p>✅ Không có lỗi đáng kể!</p>") +
        "<h4>📝 Bài viết nâng cấp</h4><div class='improved'>" + esc(d.improved).replace(/\n/g, "<br>") + "</div>" +
        "<h4>💡 Lời khuyên</h4><ul>" + d.tips_vi.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div>";
      CG9.Progress.count("aiWriting");
      var bonus = Math.max(1, Math.round(d.score / 2)); CG9.Progress.addCarrots(bonus);
      CG9.toast("🥕 +" + bonus + " cà rốt cho bài viết!");
      CG9.Awards.checkAndToast(); CG9.save();
      return true;
    }).catch(function (e) {
      out.innerHTML = "<p class='err'>⚠️ " + esc(e.message) + "</p>"; return false;
    }).then(function (ok) { btn.disabled = false; btn.textContent = old; return ok; });
  };

  /* ===================== READING GENERATOR ===================== */
  var READING_SCHEMA = S({
    title: STR, text: STR,
    glossary: { type: "array", items: TERM },
    questions: { type: "array", items: S({ type: { type: "string", enum: ["mcq", "tf"] }, q: STR, opts: { type: "array", items: STR }, a: INT, explain_vi: STR }) }
  });
  AI.makeReading = function (unit, kind) {
    var c = unitContext(unit, 10);
    var kinds = { article: "a magazine article", blog: "a teenager's blog post", interview: "an interview", story: "a short story", email: "an informal email" };
    return AI.json({
      instructions: "You write reading-comprehension practice for a Vietnamese Grade 9 student using " + c.text + " Write original texts (never copy the coursebook).",
      input: "Write " + (kinds[kind] || kinds.article) + " of 200–260 words on the unit topic, CEFR B1, using at least 6 target vocabulary items. Paragraphs separated by a blank line. Then give a glossary of 5 useful words (Vietnamese meanings) and 7 questions: 4 'mcq' (4 options, 'a' = correct index) testing gist, detail, vocabulary in context and inference, then 3 'tf' (opts must be [\"True\",\"False\"], 'a' 0 = True, 1 = False). 'explain_vi' briefly explains each answer in Vietnamese, quoting the text.",
      store: false
    }, "reading_practice", READING_SCHEMA).then(function (r) {
      var d = r.data;
      return {
        title: d.title, text: d.text, glossary: d.glossary,
        items: d.questions.map(function (q) {
          return q.type === "tf" ? { kind: "tf", s: q.q, a: q.a === 0, explain: q.explain_vi, tag: "reading" } :
            { kind: "mcq", q: q.q, opts: q.opts, a: Math.max(0, Math.min(q.a, q.opts.length - 1)), explain: q.explain_vi, tag: "reading" };
        })
      };
    });
  };
})();

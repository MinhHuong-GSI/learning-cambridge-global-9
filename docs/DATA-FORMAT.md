# Learning Cambridge Global 9 — data formats

All data files are plain JavaScript loaded with `<script>` tags (the app must work from `file://`,
so no `fetch` of JSON). Every file calls a registration function on the global `CG9` object.
Files are UTF-8. Vietnamese text uses full diacritics. HTML is allowed in text fields
(`<b>`, `<i>`, `<u>`, `<br>`); never use backticks or `${}` inside strings.

## 1. Question items (shared by exams, skill packs, reviews)

Every scored item is an object with a `kind`. Optional on every item: `explain` (short Vietnamese
explanation shown after answering), `tag` (one of `vocab`, `grammar`, `reading`, `writing`,
`wordform`, `pron`, `sentence`, `listening`) — used for the progress breakdown.

| kind | fields | notes |
|---|---|---|
| `mcq` | `q`, `opts:[...]`, `a` (index, 0-based) | 3–4 options. The app shuffles options. |
| `choice2` | `s` (contains `___`), `options:[o1,o2]`, `a` (the correct option string) | `"-"` = "no word needed" |
| `tf` | `s`, `a` (true/false) | True/False/statement |
| `gap` | `s` (contains `___` exactly once), `answers:[...]`, `hint?` | first answer is shown as the key; add accepted variants (contractions etc.) |
| `wordform` | `s` (contains `___`), `base` (the word in CAPITALS shown in brackets, e.g. `"SUCCEED"`), `answers:[...]` | word-formation |
| `anagram` | `clue`, `scrambled` (UPPERCASE letters), `answer` | |
| `classify` | `word`, `ctx`, `cats:[...]`, `cat` (index) | |
| `match` | `pairs:[{left,right}, ...]` (4–10 pairs) | scored as one point per pair |
| `order` | `answer` (the full correct sentence), `vi?` (Vietnamese meaning), `alts?:[...]` (other accepted orders) | the app splits `answer` into word tiles and shuffles them |
| `rewrite` | `s` (original sentence), `prompt` (beginning of the new sentence, e.g. `"The car ___"` or `"I wish ..."`), `answers:[...]` (full rewritten sentences) | sentence transformation; comparison ignores case, punctuation and extra spaces |
| `pron` | `mode` (`"sound"` or `"stress"`), `q`, `opts:[...]`, `a` (index), `speak?:[...]` (plain words for text-to-speech, same order as opts) | in `opts` mark the underlined part with `<u>…</u>` for `sound`; for `stress` write the plain word |
| `stress` | `word`, `syllables:[...]`, `a` (index of the stressed syllable) | learner taps the stressed syllable |
| `dictation` | `text` (word/phrase/sentence read by TTS), `vi?` | learner types what they hear |
| `cloze` | `title?`, `text` with numbered gaps written `{1}`, `{2}`, … (in order, each exactly once), `gaps:[...]` (same order). Each gap is either `{opts:[4 options], a:index}` (multiple-choice → dropdown) or `{answers:[...]}` (typed). Optional `hint` per gap (e.g. the verb in brackets is usually written in `text` itself: `"She {1} (live) here"`). | one point per gap; paragraphs separated by `\n\n` |
| `headings` | `paras:[...]` (3–5 paragraphs, in order), `headings:[...]` (one more than paras = 1 distractor), `a:[...]` (for each paragraph, the index into `headings`) | match a heading to each paragraph; one point per paragraph |
| `seqorder` | `q?`, `items:[...]` (sentences in the CORRECT order, 4–7) , `vi?` | learner taps the sentences into order (story events, process steps, sentences of a paragraph); 1 point |
| `tapword` | `q` (instruction, e.g. "Tìm từ có nghĩa là 'bảo vệ'" or "Tìm từ SAI trong câu"), `text` (1–3 sentences), `answer` (the exact word to tap, as written in `text`; must occur once), `fix?:[...]` (for error-correction items: accepted corrections of that word) | learner taps a word; if `fix` is given they then type the correction. 1 point |
| `multi` | `q`, `opts:[...]` (4–6), `a:[...]` (indices of ALL correct options, 1 or more) | "choose all that apply": collocations, all correct sentences…; 1 point for the exact set |

`rewrite` may also have `key` (a word in CAPITALS that MUST be used, Cambridge key-word transformation
style, e.g. `key:"UNLESS"`); every accepted answer must contain that word.

Non-scored blocks that may appear inside sections: `{kind:"passage", title?, text}` (paragraphs
separated by `\n\n`), `{kind:"theory", title?, html}`, `{kind:"writing", prompt, sample, criteria?}`,
`{kind:"speaking", q, vi, sample}`, and guided writing:
`{kind:"guided", prompt, outline:["Câu chủ đề: …", "Ý 1: …", …], useWords:["…", …], minWords, sample, criteria}`
(the app shows the outline, ticks each `useWords` item when the learner uses it, and counts words).

## 2. Unit tests — `data/exams/u<N>.js`

```js
CG9.addExam({
  id: "exam-u3", unit: 3,
  title: "Bài kiểm tra tổng hợp Unit 3: Tourism",
  minutes: 60,
  sections: [
    { title: "Phần A — Trắc nghiệm từ vựng", instr: "Chọn đáp án đúng nhất.", tag: "vocab",
      items: [ {kind:"mcq", q:"...", opts:["...","...","..."], a:0}, ... ] },
    { title: "Phần H — Đọc hiểu", tag: "reading",
      items: [ {kind:"passage", text:"..."}, {kind:"mcq", ...}, {kind:"tf", ...} ] },
    { title: "Phần J — Viết", tag: "writing",
      items: [ {kind:"writing", prompt:"...", sample:"...", criteria:"..."} ] }
  ]
});
```

## 3. Skill packs — `data/skills/u<N>.js`

One per unit: pronunciation, word form, sentence building, and extra reading on the unit topic.

```js
CG9.addSkillPack({
  unit: 3,
  pron: {
    notes: [ {title:"...", html:"..."} ],         // short Vietnamese explanations (IPA welcome)
    items: [ /* pron + stress items, 15–20 */ ]
  },
  wordform: {
    notes: [ {title:"...", html:"..."} ],          // suffix rules relevant to the unit
    table: [ {noun:"conservation", verb:"conserve", adj:"conservative", adv:"", vi:"bảo tồn"} ],  // 10–14 word families from the unit
    items: [ /* wordform items, 12–15 */ ]
  },
  sentences: {
    notes: [ {title:"...", html:"..."} ],          // the unit's key sentence structures
    items: [ /* order items (8–10) + rewrite items (6–8) */ ]
  },
  reading: [                                       // 2 passages, 180–260 words each, CEFR B1, same topic as the unit
    { title:"...", text:"...", glossary:[{term:"...", vi:"..."}],
      items: [ /* 5–7 items: mcq / tf / gap about the passage */ ] }
  ],
  writing: [                                       // 2–3 paragraph-writing tasks on the unit topic
    { prompt:"...", sample:"...", criteria:"..." }
  ]
});
```

## 4. Lessons — `data/lessons.bundle.js` (generated)

Generated by `tools/build-content.ps1` from the "Thỏ Quest" HTML files in the parent folder
(`CG9.addLesson({id, unit, type, src, game})`, `game` = the original `GAME` object). Lessons in
another format can be added as `data/extra-lessons/*.js` containing a single
`CG9.addLesson({...})` call with a `game` object in the GAME format (see the quest files);
the build script appends them to the bundle.

## 5. Practice packs — `data/practice/u<N>.js`

Extra exercise types per unit ("Luyện thêm"), four parts, each a list of sections like an exam:

```js
CG9.addPracticePack({
  unit: 3,
  reading: [ { title: "Đọc & chọn từ đúng", instr: "…", tag: "reading", items: [ {kind:"cloze", …} ] }, … ],
  vocab:   [ { title: "Kết hợp từ (collocations)", instr: "…", tag: "vocab", wordbank?: ["…"], items: [ … ] }, … ],
  grammar: [ … ],
  writing: [ … ]
});
```

A section may have `wordbank:[...]` (shown as chips above its items).

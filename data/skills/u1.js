// Skill pack - Unit 1 Views and voices (pronunciation, word form, sentence building, extra reading & writing)
CG9.addSkillPack({
  unit: 1,
  pron: {
    notes: [
      {title: "Đuôi -ed: /ɪd/, /t/ hay /d/?", html: "<b>/ɪd/</b> khi động từ tận cùng bằng âm /t/ hoặc /d/: interrupt<b>ed</b>, distract<b>ed</b>, concentrat<b>ed</b>.<br><b>/t/</b> khi tận cùng bằng âm vô thanh /p, k, s, ʃ, tʃ, f/: rehears<b>ed</b> /rɪˈhɜːst/, discuss<b>ed</b>, watch<b>ed</b>.<br><b>/d/</b> với các âm còn lại: shar<b>ed</b>, compar<b>ed</b>, encourag<b>ed</b> /ɪnˈkʌrɪdʒd/.<br>Lưu ý: xét <i>âm</i> cuối chứ không xét <i>chữ</i> cuối — rehearse kết thúc bằng chữ e nhưng âm cuối là /s/."},
      {title: "Trọng âm với hậu tố -tion, -ity, -ial, -ious", html: "Trọng âm thường rơi vào âm tiết <b>ngay trước</b> các hậu tố này:<br>communi<b>CA</b>tion, am<b>BI</b>tion, pe<b>TI</b>tion, crea<b>TIV</b>ity, ce<b>LEB</b>rity, influ<b>EN</b>tial, re<b>BEL</b>lious.<br>Tiền tố <b>dis-, un-, re-</b> thường không nhận trọng âm chính: disre<b>SPECT</b>ful, un<b>CAR</b>ing, re<b>HEARSE</b>."},
      {title: "Một số cách đọc dễ nhầm trong Unit 1", html: "<b>ch</b> = /k/ trong psy<b>ch</b>ology /saɪˈkɒlədʒi/ (chữ p câm), nhưng = /tʃ/ trong <b>ch</b>at, tea<b>ch</b>er.<br><b>c</b> = /s/ trước e, i, y: <b>c</b>elebrity /səˈlebrəti/; = /k/ trước a, o, u và phụ âm: <b>c</b>ommunication, <b>c</b>reativity.<br><b>-tion</b> thường là /ʃən/ (ambition), nhưng ques<b>tion</b> là /ˈkwestʃən/.<br><b>ss</b> = /ʃ/ trong impre<b>ss</b>ion, discu<b>ss</b>ion."}
    ],
    items: [
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["psy<u>ch</u>ology", "<u>ch</u>at", "<u>ch</u>oose", "tea<u>ch</u>er"], a: 0, speak: ["psychology", "chat", "choose", "teacher"], explain: "psychology /saɪˈkɒlədʒi/: ch đọc /k/; chat, choose, teacher: ch đọc /tʃ/.", tag: "pron"},
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["interrupt<u>ed</u>", "distract<u>ed</u>", "encourag<u>ed</u>", "concentrat<u>ed</u>"], a: 2, speak: ["interrupted", "distracted", "encouraged", "concentrated"], explain: "encouraged /ɪnˈkʌrɪdʒd/: -ed đọc /d/; ba từ kia tận cùng bằng âm /t/ nên -ed đọc /ɪd/.", tag: "pron"},
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["shar<u>ed</u>", "rehears<u>ed</u>", "compar<u>ed</u>", "summaris<u>ed</u>"], a: 1, speak: ["shared", "rehearsed", "compared", "summarised"], explain: "rehearsed /rɪˈhɜːst/: sau âm vô thanh /s/, -ed đọc /t/; shared, compared, summarised: -ed đọc /d/.", tag: "pron"},
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["d<u>i</u>stract", "scr<u>i</u>pt", "f<u>i</u>nish", "sl<u>i</u>de"], a: 3, speak: ["distract", "script", "finish", "slide"], explain: "slide /slaɪd/: i đọc /aɪ/; distract /dɪˈstrækt/, script /skrɪpt/, finish /ˈfɪnɪʃ/: i đọc /ɪ/.", tag: "pron"},
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["reh<u>ear</u>se", "h<u>ear</u>", "l<u>ear</u>n", "<u>ear</u>ly"], a: 1, speak: ["rehearse", "hear", "learn", "early"], explain: "hear /hɪə/: ear đọc /ɪə/; rehearse /rɪˈhɜːs/, learn /lɜːn/, early /ˈɜːli/: ear đọc /ɜː/.", tag: "pron"},
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["<u>c</u>oncentrate", "<u>c</u>reativity", "<u>c</u>elebrity", "<u>c</u>ommunication"], a: 2, speak: ["concentrate", "creativity", "celebrity", "communication"], explain: "celebrity /səˈlebrəti/: c đứng trước e đọc /s/; ba từ kia c đọc /k/.", tag: "pron"},
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["impre<u>ss</u>ion", "discu<u>ss</u>ion", "cla<u>ss</u>room", "expre<u>ss</u>ion"], a: 2, speak: ["impression", "discussion", "classroom", "expression"], explain: "classroom /ˈklɑːsruːm/: ss đọc /s/; impression, discussion, expression: ss đọc /ʃ/.", tag: "pron"},
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["communica<u>tion</u>", "ques<u>tion</u>", "ambi<u>tion</u>", "peti<u>tion</u>"], a: 1, speak: ["communication", "question", "ambition", "petition"], explain: "question /ˈkwestʃən/: -tion đọc /tʃən/; communication, ambition, petition: -tion đọc /ʃən/.", tag: "pron"},
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["str<u>u</u>cture", "p<u>u</u>nctuation", "r<u>u</u>de", "s<u>u</u>mmarise"], a: 2, speak: ["structure", "punctuation", "rude", "summarise"], explain: "rude /ruːd/: u đọc /uː/; structure /ˈstrʌktʃə/, punctuation /ˌpʌŋktʃuˈeɪʃn/, summarise /ˈsʌməraɪz/: u đọc /ʌ/.", tag: "pron"},
      {kind: "pron", mode: "sound", q: "Chọn từ có phần gạch chân phát âm khác các từ còn lại.", opts: ["f<u>a</u>vour", "<u>a</u>ttitude", "pl<u>a</u>card", "<u>a</u>mbition"], a: 0, speak: ["favour", "attitude", "placard", "ambition"], explain: "favour /ˈfeɪvə/: a đọc /eɪ/; attitude /ˈætɪtjuːd/, placard /ˈplækɑːd/, ambition /æmˈbɪʃn/: a đọc /æ/.", tag: "pron"},
      {kind: "pron", mode: "stress", q: "Chọn từ có trọng âm rơi vào vị trí khác các từ còn lại.", opts: ["compare", "focus", "distract", "rehearse"], a: 1, speak: ["compare", "focus", "distract", "rehearse"], explain: "focus /ˈfəʊkəs/ nhấn âm 1; compare /kəmˈpeə/, distract /dɪˈstrækt/, rehearse /rɪˈhɜːs/ nhấn âm 2.", tag: "pron"},
      {kind: "pron", mode: "stress", q: "Chọn từ có trọng âm rơi vào vị trí khác các từ còn lại.", opts: ["attitude", "audience", "ambition", "visual"], a: 2, speak: ["attitude", "audience", "ambition", "visual"], explain: "ambition /æmˈbɪʃn/ nhấn âm 2; attitude /ˈætɪtjuːd/, audience /ˈɔːdiəns/, visual /ˈvɪʒuəl/ nhấn âm 1.", tag: "pron"},
      {kind: "pron", mode: "stress", q: "Chọn từ có trọng âm rơi vào vị trí khác các từ còn lại.", opts: ["exhibition", "celebrity", "psychology", "appreciate"], a: 0, speak: ["exhibition", "celebrity", "psychology", "appreciate"], explain: "exhibition /ˌeksɪˈbɪʃn/ nhấn âm 3; celebrity /səˈlebrəti/, psychology /saɪˈkɒlədʒi/, appreciate /əˈpriːʃieɪt/ nhấn âm 2.", tag: "pron"},
      {kind: "pron", mode: "stress", q: "Chọn từ có trọng âm rơi vào vị trí khác các từ còn lại.", opts: ["considerate", "responsible", "appreciative", "influential"], a: 3, speak: ["considerate", "responsible", "appreciative", "influential"], explain: "influential /ˌɪnfluˈenʃl/ nhấn âm 3; considerate /kənˈsɪdərət/, responsible /rɪˈspɒnsəbl/, appreciative /əˈpriːʃətɪv/ nhấn âm 2.", tag: "pron"},
      {kind: "stress", word: "communication", syllables: ["com", "mu", "ni", "ca", "tion"], a: 3, explain: "communication /kəˌmjuːnɪˈkeɪʃn/: trọng âm ngay trước -tion.", tag: "pron"},
      {kind: "stress", word: "creativity", syllables: ["cre", "a", "tiv", "i", "ty"], a: 2, explain: "creativity /ˌkriːeɪˈtɪvəti/: trọng âm ngay trước -ity.", tag: "pron"},
      {kind: "stress", word: "disrespectful", syllables: ["dis", "re", "spect", "ful"], a: 2, explain: "disrespectful /ˌdɪsrɪˈspektfl/: tiền tố dis- và hậu tố -ful không nhận trọng âm chính.", tag: "pron"},
      {kind: "stress", word: "encourage", syllables: ["en", "cour", "age"], a: 1, explain: "encourage /ɪnˈkʌrɪdʒ/: nhấn âm tiết thứ 2.", tag: "pron"},
      {kind: "stress", word: "stereotype", syllables: ["ste", "re", "o", "type"], a: 0, explain: "stereotype /ˈsteriətaɪp/: nhấn âm tiết đầu.", tag: "pron"},
      {kind: "stress", word: "petition", syllables: ["pe", "ti", "tion"], a: 1, explain: "petition /pəˈtɪʃn/: trọng âm ngay trước -tion.", tag: "pron"}
    ]
  },
  wordform: {
    notes: [
      {title: "Tính từ miêu tả tính cách & tiền tố phủ định", html: "Hậu tố tạo tính từ: <b>-ful</b> (respectful), <b>-ive</b> (creative, appreciative), <b>-ous</b> (rebellious, ambitious), <b>-ant/-ent</b> (defiant, obedient), <b>-ible</b> (responsible), <b>-ate</b> (considerate), <b>-ial</b> (influential), <b>-ing</b> (caring).<br>Tiền tố mang nghĩa phủ định: <b>dis-</b> (disrespectful, disobedient), <b>un-</b> (uncaring), <b>im-</b> trước p (impolite), <b>in-</b> (inconsiderate), <b>ir-</b> trước r (irresponsible).<br>Mẹo: dùng từ điển để tìm cả <i>họ từ</i> (word family) — ví dụ obey (v) → obedient (adj) → obedience (n) → disobedient (adj)."},
      {title: "Hậu tố tạo danh từ", html: "<b>-tion/-sion</b>: communicate → communication, distract → distraction, impress → impression, conclude → conclusion.<br><b>-ment</b>: encourage → encouragement.<br><b>-ity</b>: creative → creativity, responsible → responsibility.<br><b>-ance/-ence</b>: defiant → defiance, obedient → obedience.<br><b>-ison</b>: compare → comparison. Chú ý biến đổi chính tả: ambitious → <b>ambition</b>, rebel → <b>rebellion</b>."}
    ],
    table: [
      {noun: "communication", verb: "communicate", adj: "communicative", adv: "", vi: "giao tiếp"},
      {noun: "creativity", verb: "create", adj: "creative", adv: "creatively", vi: "sáng tạo"},
      {noun: "encouragement", verb: "encourage", adj: "encouraging", adv: "encouragingly", vi: "khuyến khích"},
      {noun: "distraction", verb: "distract", adj: "distracting", adv: "", vi: "làm xao nhãng"},
      {noun: "comparison", verb: "compare", adj: "comparative", adv: "comparatively", vi: "so sánh"},
      {noun: "respect", verb: "respect", adj: "respectful / disrespectful", adv: "respectfully", vi: "tôn trọng"},
      {noun: "responsibility", verb: "", adj: "responsible / irresponsible", adv: "responsibly", vi: "trách nhiệm"},
      {noun: "rebellion", verb: "rebel", adj: "rebellious", adv: "rebelliously", vi: "nổi loạn"},
      {noun: "defiance", verb: "defy", adj: "defiant", adv: "defiantly", vi: "thách thức, ngang bướng"},
      {noun: "obedience", verb: "obey / disobey", adj: "obedient / disobedient", adv: "obediently", vi: "vâng lời"},
      {noun: "appreciation", verb: "appreciate", adj: "appreciative", adv: "appreciatively", vi: "trân trọng, biết ơn"},
      {noun: "consideration", verb: "consider", adj: "considerate / inconsiderate", adv: "considerately", vi: "chu đáo, quan tâm"},
      {noun: "influence", verb: "influence", adj: "influential", adv: "", vi: "ảnh hưởng"},
      {noun: "impression", verb: "impress", adj: "impressive", adv: "impressively", vi: "ấn tượng"}
    ],
    items: [
      {kind: "wordform", s: "Good ___ between teachers and students helps everyone to learn.", base: "COMMUNICATE", answers: ["communication"], explain: "Sau tính từ Good cần danh từ: communicate → communication.", tag: "wordform"},
      {kind: "wordform", s: "Brain scans show that teenagers have amazing powers of ___ and problem-solving.", base: "CREATE", answers: ["creativity"], explain: "Sau of cần danh từ; creative → creativity (sự sáng tạo).", tag: "wordform"},
      {kind: "wordform", s: "My mum's ___ gave me the confidence to enter the competition.", base: "ENCOURAGE", answers: ["encouragement"], explain: "Sau sở hữu cách my mum's cần danh từ: encourage + -ment.", tag: "wordform"},
      {kind: "wordform", s: "A phone on your desk can be a big ___ during lessons.", base: "DISTRACT", answers: ["distraction"], explain: "Sau a big cần danh từ đếm được: distract → distraction.", tag: "wordform"},
      {kind: "wordform", s: "It is very ___ to look at your phone while your grandmother is talking to you.", base: "RESPECT", answers: ["disrespectful"], explain: "Cần tính từ mang nghĩa tiêu cực: dis- + respect + -ful = disrespectful.", tag: "wordform"},
      {kind: "wordform", s: "Leaving your little brother alone in the park was totally ___.", base: "RESPONSIBLE", answers: ["irresponsible"], explain: "Nghĩa phủ định của responsible là irresponsible (ir- trước r).", tag: "wordform"},
      {kind: "wordform", s: "Marley Dias is one of the most ___ young people in the world of books.", base: "INFLUENCE", answers: ["influential"], explain: "Sau the most cần tính từ: influence → influential (có ảnh hưởng).", tag: "wordform"},
      {kind: "wordform", s: "Not all teenagers are ___; most of them follow the rules at school.", base: "REBEL", answers: ["rebellious"], explain: "Sau are cần tính từ: rebel → rebellious (nổi loạn).", tag: "wordform"},
      {kind: "wordform", s: "He refused to say sorry and answered in a ___ voice.", base: "DEFY", answers: ["defiant"], explain: "Trước danh từ voice cần tính từ: defy → defiant.", tag: "wordform"},
      {kind: "wordform", s: "Children who never do what they are told are often called ___.", base: "OBEY", answers: ["disobedient"], explain: "Cần tính từ nghĩa tiêu cực: obey → obedient → disobedient.", tag: "wordform"},
      {kind: "wordform", s: "Our class was very ___ of the help the volunteers gave us.", base: "APPRECIATE", answers: ["appreciative"], explain: "Cấu trúc be appreciative of (biết ơn điều gì): appreciate → appreciative.", tag: "wordform"},
      {kind: "wordform", s: "It was really ___ of you to save me a seat on the bus.", base: "CONSIDER", answers: ["considerate"], explain: "It is + tính từ + of you: consider → considerate (chu đáo).", tag: "wordform"},
      {kind: "wordform", s: "The newspaper report gave a negative ___ of the teenagers' march.", base: "IMPRESS", answers: ["impression"], explain: "Sau a negative cần danh từ: impress → impression.", tag: "wordform"},
      {kind: "wordform", s: "In group work, we should listen to each other ___.", base: "POLITE", answers: ["politely"], explain: "Bổ nghĩa cho động từ listen cần trạng từ: polite → politely.", tag: "wordform"},
      {kind: "wordform", s: "Her ___ is to become a journalist and write about young people's issues.", base: "AMBITIOUS", answers: ["ambition"], explain: "Sau tính từ sở hữu Her cần danh từ: ambitious → ambition.", tag: "wordform"}
    ]
  },
  sentences: {
    notes: [
      {title: "-ing form & thì hiện tại đơn / hiện tại tiếp diễn", html: "<b>-ing form</b> dùng: sau enjoy, mind, stop, finish (<i>Our teachers don't mind us talking quietly.</i>); sau giới từ (<i>I got into trouble <b>for chatting</b>.</i>); làm chủ ngữ (<i><b>Sharing</b> ideas helps me to learn.</i>).<br><b>Hiện tại đơn</b>: thói quen, sự thật. <b>Hiện tại tiếp diễn</b>: việc đang xảy ra, tạm thời, kế hoạch cố định (<i>She's going to a tennis camp this summer.</i>) và <b>always + V-ing</b> = việc xảy ra nhiều hơn bình thường (<i>He's always helping other people.</i>)."},
      {title: "Bị động hiện tại đơn, modal + bị động, bị động hiện tại tiếp diễn", html: "<b>am/is/are + V3</b>: <i>We <b>are told</b> that we behave worse than younger children.</i><br><b>can/should/must + be + V3</b>: <i>Young people <b>should be given</b> more freedom.</i><br><b>am/is/are + being + V3</b> (đang được làm): <i>The art room <b>is being used</b> for an exhibition.</i><br>Dùng bị động khi không biết hoặc không quan trọng <i>ai</i> làm việc đó."}
    ],
    items: [
      {kind: "order", answer: "Sharing ideas with my classmates helps me to learn better.", vi: "Chia sẻ ý tưởng với các bạn cùng lớp giúp mình học tốt hơn.", tag: "sentence"},
      {kind: "order", answer: "Our teachers don't mind us talking quietly in group work.", vi: "Thầy cô không phiền khi chúng mình nói chuyện nhỏ trong giờ làm việc nhóm.", tag: "sentence"},
      {kind: "order", answer: "I sometimes get into trouble for chatting with my friends.", vi: "Thỉnh thoảng mình bị phạt vì nói chuyện riêng với bạn.", tag: "sentence"},
      {kind: "order", answer: "Concentrating on one task at a time is the best way to study.", vi: "Tập trung vào từng việc một là cách học tốt nhất.", tag: "sentence"},
      {kind: "order", answer: "My cousin is always helping other people in our neighbourhood.", vi: "Anh họ mình lúc nào cũng giúp đỡ mọi người trong khu phố.", tag: "sentence"},
      {kind: "order", answer: "We are often told that teenagers are lazy and rude.", vi: "Chúng mình thường bị cho là tuổi teen lười biếng và thô lỗ.", tag: "sentence"},
      {kind: "order", answer: "Young people should be given more freedom to make decisions.", vi: "Người trẻ nên được trao nhiều tự do hơn để tự đưa ra quyết định.", tag: "sentence"},
      {kind: "order", answer: "A new drama studio is being built next to the library.", vi: "Một phòng tập kịch mới đang được xây cạnh thư viện.", tag: "sentence"},
      {kind: "order", answer: "Some students are being interviewed by a TV journalist today.", vi: "Hôm nay một số học sinh đang được một phóng viên truyền hình phỏng vấn.", tag: "sentence"},
      {kind: "rewrite", s: "People tell us that we spend too much time online.", prompt: "We ___", answers: ["We are told that we spend too much time online.", "We're told that we spend too much time online."], explain: "Bị động hiện tại đơn: People tell us → We are told.", tag: "grammar"},
      {kind: "rewrite", s: "Someone is using the art room for an exhibition.", prompt: "The art room ___", answers: ["The art room is being used for an exhibition."], explain: "Bị động hiện tại tiếp diễn: is + being + V3.", tag: "grammar"},
      {kind: "rewrite", s: "Parents should give teenagers more responsibility.", prompt: "Teenagers ___", answers: ["Teenagers should be given more responsibility.", "Teenagers should be given more responsibility by parents.", "Teenagers should be given more responsibility by their parents."], explain: "Modal + bị động: should + be + V3.", tag: "grammar"},
      {kind: "rewrite", s: "Students are painting the classroom walls this week.", prompt: "The classroom walls ___", answers: ["The classroom walls are being painted this week.", "The classroom walls are being painted by students this week.", "The classroom walls are being painted by the students this week."], explain: "Bị động hiện tại tiếp diễn: are + being + painted.", tag: "grammar"},
      {kind: "rewrite", s: "It's fine with me if my friends talk quietly during group work.", prompt: "I don't mind ___", answers: ["I don't mind my friends talking quietly during group work.", "I do not mind my friends talking quietly during group work."], explain: "don't mind + (tân ngữ) + V-ing.", tag: "grammar"},
      {kind: "rewrite", s: "If you share ideas, it helps you to learn.", prompt: "Sharing ___", answers: ["Sharing ideas helps you to learn.", "Sharing ideas helps you learn."], explain: "Dùng V-ing làm chủ ngữ của câu.", tag: "grammar"},
      {kind: "rewrite", s: "The teacher told him off because he was late.", prompt: "He got into trouble ___", answers: ["He got into trouble for being late."], explain: "Sau giới từ for dùng V-ing: for being late.", tag: "grammar"},
      {kind: "rewrite", s: "My sister helps other people all the time, more than most people do.", prompt: "My sister is always ___", answers: ["My sister is always helping other people.", "My sister's always helping other people."], explain: "always + hiện tại tiếp diễn: việc xảy ra nhiều hơn bình thường.", tag: "grammar"}
    ]
  },
  reading: [
    {
      title: "Inside the teenage brain",
      text: "Many adults complain that teenagers are lazy, rude or rebellious. But scientists who study the brain now have a different view. Using brain scans, they have found that the teenage brain is not broken or unfinished. It is changing very quickly, and this gives young people some special strengths.\n\nBetween the ages of about 12 and 20, the brain removes connections that it does not use and makes the important ones stronger. This is why teenagers are often very good at learning new skills, such as a language, a sport or a musical instrument. Many of them also show great creativity and are excellent at problem-solving.\n\nHowever, the part of the brain that controls planning and self-control develops more slowly. As a result, teenagers sometimes take risks or find it hard to concentrate on boring tasks. Being tired makes this worse. Most teenagers need between eight and ten hours of sleep a night, but many get much less.\n\nPsychologists say that adults should not see these years as a problem. Instead, they should give teenagers more responsibility and encourage them to share their ideas. When young people are treated with respect, they usually become more considerate and responsible. In the end, the second decade of life is not something to survive. It is a time to grow.",
      glossary: [
        {term: "brain scan", vi: "ảnh chụp/quét não"},
        {term: "connection", vi: "sự kết nối"},
        {term: "self-control", vi: "khả năng tự kiềm chế"},
        {term: "take risks", vi: "liều lĩnh, mạo hiểm"},
        {term: "decade", vi: "thập kỷ (10 năm)"}
      ],
      items: [
        {kind: "mcq", q: "What have brain scans shown about the teenage brain?", opts: ["It is changing quickly and has special strengths.", "It is unfinished and does not work well.", "It stops developing at the age of 12.", "It is exactly the same as an adult's brain."], a: 0, tag: "reading"},
        {kind: "tf", s: "Teenagers are often good at learning a new language or sport.", a: true, tag: "reading"},
        {kind: "tf", s: "The part of the brain that controls self-control develops faster than the rest.", a: false, tag: "reading"},
        {kind: "gap", s: "Most teenagers need between eight and ___ hours of sleep a night.", answers: ["ten", "10"], tag: "reading"},
        {kind: "mcq", q: "What do psychologists advise adults to do?", opts: ["Give teenagers more responsibility.", "Make teenagers sleep less.", "Stop teenagers from sharing ideas.", "Treat teenagers as a problem."], a: 0, tag: "reading"},
        {kind: "gap", s: "When young people are treated with ___, they usually become more responsible.", answers: ["respect"], tag: "reading"}
      ]
    },
    {
      title: "Linh's petition",
      text: "Last year, 15-year-old Linh noticed something that made her angry. Every day, hundreds of plastic bottles were thrown away at her school in Đà Nẵng. 'We are always told to look after the environment,' she says, 'but nobody was doing anything about it.'\n\nInstead of just complaining, Linh decided to act. With three friends, she started a petition asking the school to put in free water fountains. They made colourful placards, talked to students in every class and shared the petition online. In just two weeks, more than 600 students and parents had signed it.\n\nThe next step was the hardest. The group had to give a presentation to the head teacher and the parents' committee. They rehearsed it many times, checked the spelling on every slide and practised their timing. 'I was really nervous,' Linh admits, 'but the audience asked lots of questions, so I knew they were interested.'\n\nThe school agreed to the plan. At the moment, four new fountains are being installed, and students are being encouraged to bring their own bottles.\n\nA local newspaper wrote about the project under the headline 'Teenagers teach adults a lesson'. Linh's teachers say that she has become a role model for younger students. 'Sharing an idea is easy,' Linh says. 'Working together to make it happen is what really matters.'",
      glossary: [
        {term: "petition", vi: "bản kiến nghị"},
        {term: "placard", vi: "tấm biển cầm tay"},
        {term: "sign", vi: "ký tên"},
        {term: "install", vi: "lắp đặt"},
        {term: "headline", vi: "tiêu đề bài báo"}
      ],
      items: [
        {kind: "mcq", q: "Why did Linh start the petition?", opts: ["Too many plastic bottles were thrown away at school.", "She wanted a new art room.", "Students were not allowed to drink water in class.", "The head teacher asked her to."], a: 0, tag: "reading"},
        {kind: "gap", s: "More than ___ students and parents signed the petition in two weeks.", answers: ["600", "six hundred"], tag: "reading"},
        {kind: "tf", s: "Linh did the whole project on her own.", a: false, tag: "reading"},
        {kind: "tf", s: "The group practised their presentation several times.", a: true, tag: "reading"},
        {kind: "mcq", q: "What is happening at the school now?", opts: ["New water fountains are being installed.", "Plastic bottles are being sold.", "A new petition is being written.", "The placards are being thrown away."], a: 0, tag: "reading"},
        {kind: "gap", s: "Linh's teachers say she has become a role ___ for younger students.", answers: ["model"], tag: "reading"}
      ]
    }
  ],
  writing: [
    {
      prompt: "Viết một <b>email thân mật</b> (80–120 từ) gửi bạn qua thư (penfriend) ở nước khác để nhờ bạn giúp dự án về cuộc sống tuổi teen. Email cần có: lời chào và hỏi thăm, lý do viết thư, 2–3 câu hỏi (về định kiến với tuổi teen, mạng xã hội/báo chí, hình mẫu), lời cảm ơn trước và câu kết.",
      sample: "Dear Sam,<br>I hope you and your family are well. It's been a long time since we've been in touch! I'm busy with exams at the moment, but I'm still enjoying my art classes.<br>Anyway, the reason I'm writing is to ask for your help with a school project on teenage life. I wonder if you could answer a few questions. What do adults in your country think about teenagers? Are young people given much freedom there? Who are the most popular role models for teenagers?<br>I'd really appreciate your help, so thank you in advance!<br>Looking forward to hearing from you.<br>Best wishes,<br>Minh",
      criteria: "Đủ 5 phần: chào – lý do viết – câu hỏi – cảm ơn – kết thư; giọng văn thân mật; dùng được các cụm It's been a long time since..., The reason I'm writing is..., I wonder if you could..., Thank you in advance; dùng đúng thì hiện tại đơn/tiếp diễn; 80–120 từ."
    },
    {
      prompt: "Viết <b>đoạn văn</b> (80–120 từ) giới thiệu một <b>hình mẫu (role model)</b> của em. Nêu người đó là ai, làm gì, hiện đang làm gì, vì sao em ngưỡng mộ. Dùng cả thì hiện tại đơn, hiện tại tiếp diễn và ít nhất một câu với always + V-ing.",
      sample: "My role model is my aunt Lan, who is a nurse in a big hospital in Hà Nội. She works long hours, but she never complains. At the moment, she is studying for a master's degree in the evenings, so she is learning something new every week. What I admire most is that she is always helping other people, even when she is tired. She also encourages me to concentrate on my studies and to believe in myself. I look up to her because she is kind, responsible and hard-working. I hope I can be like her one day.",
      criteria: "Có câu chủ đề rõ ràng; giới thiệu người đó và lý do ngưỡng mộ có ví dụ; phân biệt đúng hiện tại đơn và hiện tại tiếp diễn; có always + V-ing; dùng từ vựng Unit 1 (role model, look up to, encourage, responsible...); 80–120 từ."
    },
    {
      prompt: "Viết <b>đoạn văn nêu quan điểm</b> (80–120 từ): <i>Có nên cho học sinh nói chuyện trong giờ học không?</i> Nêu ít nhất một lợi ích và một bất lợi, rồi kết luận bằng ý kiến của em. Dùng ít nhất 3 cấu trúc với -ing form.",
      sample: "In my opinion, talking in class can be very useful, but only at the right time. Sharing ideas with classmates helps me to understand difficult topics, and explaining something to a friend is a great way of checking that I really know it. Working in groups also improves our communication skills. However, chatting about other things can distract other students, and some people get into trouble for talking while the teacher is explaining something. I think teachers should let us talk quietly during group work, but we are supposed to listen carefully when someone else is speaking.",
      criteria: "Nêu rõ quan điểm ở câu đầu và câu cuối; có cả mặt lợi và hại; dùng từ nối (However, also, In my opinion); dùng -ing form làm chủ ngữ, sau giới từ và sau động từ; dùng từ vựng Unit 1 (distract, get into trouble, be supposed to...); 80–120 từ."
    }
  ]
});

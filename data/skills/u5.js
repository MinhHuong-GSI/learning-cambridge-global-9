CG9.addSkillPack({
  unit: 5,
  pron: {
    notes: [
      {title:"Trọng âm với hậu tố -ology, -ic(s), -ion, -ity, -ial", html:"Với các hậu tố này, trọng âm chính thường rơi vào <b>âm tiết ngay trước hậu tố</b>:<br>tech<b>NO</b>logy /tekˈnɒlədʒi/ — archae<b>O</b>logist /ˌɑːkiˈɒlədʒɪst/ — ro<b>BO</b>tics /rəʊˈbɒtɪks/<br>pre<b>DIC</b>tion /prɪˈdɪkʃn/ — arti<b>FI</b>cial /ˌɑːtɪˈfɪʃl/ — automa<b>TI</b>cally /ˌɔːtəˈmætɪkli/<br>Mẹo: khi thêm hậu tố, trọng âm có thể <b>dịch chuyển</b>: <b>TECH</b>nical → tech<b>NO</b>logy."},
      {title:"Chữ 'ch' đọc /k/ hay /tʃ/?", html:"Trong nhiều từ gốc Hy Lạp/Latin (hay gặp trong khoa học, công nghệ), <b>ch = /k/</b>: <i>technology, archaeologist, mechanic, character, technique</i>.<br>Trong từ tiếng Anh thông thường, <b>ch = /tʃ/</b>: <i>chat, change, choose, cheap</i>.<br>Chữ <b>c</b> đứng trước <b>e, i, y</b> đọc /s/ (<i>civilisation, cyber</i>); trước <b>a, o, u</b> đọc /k/ (<i>cargo, capsule, cosmopolitan</i>)."},
      {title:"Đuôi -ed và danh từ ghép", html:"Đuôi <b>-ed</b> (gặp nhiều trong câu bị động tương lai <i>will be collected / delivered</i>):<br>• /ɪd/ sau âm /t/, /d/: <i>collected, invented, demonstrated</i><br>• /t/ sau âm vô thanh /p, k, f, s, ʃ, tʃ/: <i>asked, watched</i><br>• /d/ sau các âm còn lại: <i>delivered, cleaned, powered</i><br>Danh từ ghép thường nhấn vào <b>từ đầu</b>: <b>HASH</b>tag, <b>SOFT</b>ware, <b>SCREEN</b> time, <b>TIME</b>line, <b>SHIP</b>wreck."}
    ],
    items: [
      {kind:"pron", mode:"sound", q:"Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.", opts:["te<u>ch</u>nology","ar<u>ch</u>aeologist","<u>ch</u>at","me<u>ch</u>anic"], a:2, speak:["technology","archaeologist","chat","mechanic"], explain:"chat /tʃæt/ có 'ch' đọc /tʃ/; technology, archaeologist, mechanic có 'ch' đọc /k/.", tag:"pron"},
      {kind:"pron", mode:"sound", q:"Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.", opts:["dr<u>o</u>ne","p<u>o</u>st","r<u>o</u>bot","c<u>o</u>py"], a:3, speak:["drone","post","robot","copy"], explain:"copy /ˈkɒpi/ có 'o' đọc /ɒ/; drone /drəʊn/, post /pəʊst/, robot /ˈrəʊbɒt/ đọc /əʊ/.", tag:"pron"},
      {kind:"pron", mode:"sound", q:"Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.", opts:["collect<u>ed</u>","deliver<u>ed</u>","analys<u>ed</u>","clean<u>ed</u>"], a:0, speak:["collected","delivered","analysed","cleaned"], explain:"collected /kəˈlektɪd/: sau âm /t/ nên -ed đọc /ɪd/; delivered, analysed, cleaned có -ed đọc /d/.", tag:"pron"},
      {kind:"pron", mode:"sound", q:"Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.", opts:["invent<u>ed</u>","demonstrat<u>ed</u>","power<u>ed</u>","illustrat<u>ed</u>"], a:2, speak:["invented","demonstrated","powered","illustrated"], explain:"powered /ˈpaʊəd/ có -ed đọc /d/; invented, demonstrated, illustrated kết thúc bằng /t/ nên -ed đọc /ɪd/.", tag:"pron"},
      {kind:"pron", mode:"sound", q:"Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.", opts:["s<u>e</u>lfie","m<u>e</u>me","s<u>e</u>nsor","t<u>e</u>xt"], a:1, speak:["selfie","meme","sensor","text"], explain:"meme /miːm/ có 'e' đọc /iː/; selfie, sensor, text đọc /e/.", tag:"pron"},
      {kind:"pron", mode:"sound", q:"Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.", opts:["h<u>a</u>shtag","sp<u>a</u>m","d<u>a</u>ta","pl<u>a</u>tform"], a:2, speak:["hashtag","spam","data","platform"], explain:"data /ˈdeɪtə/ có 'a' đọc /eɪ/; hashtag, spam, platform đọc /æ/.", tag:"pron"},
      {kind:"pron", mode:"sound", q:"Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.", opts:["d<u>i</u>gital","l<u>i</u>ke","v<u>i</u>deo","l<u>i</u>nk"], a:1, speak:["digital","like","video","link"], explain:"like /laɪk/ có 'i' đọc /aɪ/; digital, video, link đọc /ɪ/.", tag:"pron"},
      {kind:"pron", mode:"sound", q:"Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.", opts:["<u>c</u>argo","<u>c</u>apsule","<u>c</u>osmopolitan","<u>c</u>ivilisation"], a:3, speak:["cargo","capsule","cosmopolitan","civilisation"], explain:"civilisation /ˌsɪvəlaɪˈzeɪʃn/: 'c' trước 'i' đọc /s/; cargo, capsule, cosmopolitan có 'c' đọc /k/.", tag:"pron"},
      {kind:"pron", mode:"sound", q:"Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.", opts:["<u>th</u>ings","toge<u>th</u>er","<u>th</u>ink","ma<u>th</u>s"], a:1, speak:["things","together","think","maths"], explain:"together /təˈɡeðə/ có 'th' đọc /ð/; things, think, maths đọc /θ/.", tag:"pron"},
      {kind:"pron", mode:"stress", q:"Chọn từ có trọng âm chính rơi vào vị trí khác với các từ còn lại.", opts:["platform","hashtag","emoji","selfie"], a:2, speak:["platform","hashtag","emoji","selfie"], explain:"emoji /ɪˈməʊdʒi/ nhấn âm tiết 2; platform, hashtag, selfie nhấn âm tiết 1.", tag:"pron"},
      {kind:"pron", mode:"stress", q:"Chọn từ có trọng âm chính rơi vào vị trí khác với các từ còn lại.", opts:["addiction","robotics","prediction","evidence"], a:3, speak:["addiction","robotics","prediction","evidence"], explain:"evidence /ˈevɪdəns/ nhấn âm tiết 1; addiction, robotics, prediction nhấn âm tiết 2 (trước -ion, -ics).", tag:"pron"},
      {kind:"pron", mode:"stress", q:"Chọn từ có trọng âm chính rơi vào vị trí khác với các từ còn lại.", opts:["artefact","maritime","interact","digital"], a:2, speak:["artefact","maritime","interact","digital"], explain:"interact /ˌɪntərˈækt/ nhấn âm tiết 3; artefact, maritime, digital nhấn âm tiết 1.", tag:"pron"},
      {kind:"pron", mode:"stress", q:"Chọn từ có trọng âm chính rơi vào vị trí khác với các từ còn lại.", opts:["recognition","technology","intelligence","impression"], a:0, speak:["recognition","technology","intelligence","impression"], explain:"recognition /ˌrekəɡˈnɪʃn/ nhấn âm tiết 3; technology, intelligence, impression nhấn âm tiết 2.", tag:"pron"},
      {kind:"stress", word:"technology", syllables:["tech","no","lo","gy"], a:1, explain:"technology /tekˈnɒlədʒi/ — nhấn âm tiết ngay trước -logy.", tag:"pron"},
      {kind:"stress", word:"archaeologist", syllables:["ar","chae","ol","o","gist"], a:2, explain:"archaeologist /ˌɑːkiˈɒlədʒɪst/ — nhấn 'ol', giống technology.", tag:"pron"},
      {kind:"stress", word:"automatically", syllables:["au","to","mat","i","cal","ly"], a:2, explain:"automatically /ˌɔːtəˈmætɪkli/ — nhấn âm tiết trước -ic(ally).", tag:"pron"},
      {kind:"stress", word:"cosmopolitan", syllables:["cos","mo","pol","i","tan"], a:2, explain:"cosmopolitan /ˌkɒzməˈpɒlɪtən/ — nhấn 'pol'.", tag:"pron"},
      {kind:"stress", word:"evidence", syllables:["ev","i","dence"], a:0, explain:"evidence /ˈevɪdəns/ — nhấn âm tiết đầu.", tag:"pron"},
      {kind:"stress", word:"intelligence", syllables:["in","tel","li","gence"], a:1, explain:"intelligence /ɪnˈtelɪdʒəns/ — nhấn 'tel'.", tag:"pron"}
    ]
  },
  wordform: {
    notes: [
      {title:"Hậu tố tạo danh từ", html:"<b>-tion / -sion / -ion</b>: invent → invent<b>ion</b>, predict → predict<b>ion</b>, interact → interact<b>ion</b>, impress → impress<b>ion</b><br><b>-ment</b>: develop → develop<b>ment</b><br><b>-ence</b>: evident → evid<b>ence</b><br>Danh từ chỉ <b>người</b>: <b>-or / -er / -ist</b>: invent<b>or</b>, develop<b>er</b>, archaeolog<b>ist</b><br>Tiếng Anh còn tạo từ mới bằng cách <b>ghép/trộn</b> hai từ: <i>vlogging = video + blogging</i> (SB tr.100)."},
      {title:"Hậu tố tạo tính từ và trạng từ", html:"<b>-al</b>: digit → digit<b>al</b>, technology → technologic<b>al</b>, archaeology → archaeologic<b>al</b><br><b>-ive</b>: addict → addict<b>ive</b>, interact → interact<b>ive</b>, impress → impress<b>ive</b><br><b>-able / -ible</b>: predict → predict<b>able</b>, recognise → recognis<b>able</b><br><b>-ed / -ing</b>: distract<b>ed</b> (người bị xao nhãng) / distract<b>ing</b> (gây xao nhãng)<br>Trạng từ thêm <b>-ly</b>; tính từ tận cùng <b>-ic</b> thêm <b>-ally</b>: automatic → automatic<b>ally</b>."}
    ],
    table: [
      {noun:"invention / inventor", verb:"invent", adj:"inventive", adv:"", vi:"phát minh / nhà phát minh"},
      {noun:"prediction", verb:"predict", adj:"predictable", adv:"predictably", vi:"dự đoán"},
      {noun:"addiction / addict", verb:"", adj:"addictive / addicted", adv:"", vi:"sự nghiện / người nghiện"},
      {noun:"automation", verb:"automate", adj:"automatic", adv:"automatically", vi:"tự động hoá / tự động"},
      {noun:"development / developer", verb:"develop", adj:"developed", adv:"", vi:"sự phát triển"},
      {noun:"interaction", verb:"interact", adj:"interactive", adv:"interactively", vi:"tương tác"},
      {noun:"distraction", verb:"distract", adj:"distracted / distracting", adv:"", vi:"sự xao nhãng"},
      {noun:"evidence", verb:"", adj:"evident", adv:"evidently", vi:"bằng chứng / hiển nhiên"},
      {noun:"impression", verb:"impress", adj:"impressive", adv:"impressively", vi:"ấn tượng"},
      {noun:"recognition", verb:"recognise", adj:"recognisable", adv:"", vi:"sự nhận ra, nhận diện"},
      {noun:"archaeology / archaeologist", verb:"", adj:"archaeological", adv:"", vi:"khảo cổ học / nhà khảo cổ"},
      {noun:"technology", verb:"", adj:"technological", adv:"technologically", vi:"công nghệ"},
      {noun:"society", verb:"socialise", adj:"social / sociable", adv:"socially", vi:"xã hội / giao lưu"},
      {noun:"person", verb:"personalise", adj:"personal / personalised", adv:"personally", vi:"cá nhân / cá nhân hoá"}
    ],
    items: [
      {kind:"wordform", s:"The ___ of the telephone changed the way people communicate.", base:"INVENT", answers:["invention"], explain:"Sau 'The' và trước 'of' cần danh từ chỉ sự việc: invention.", tag:"wordform"},
      {kind:"wordform", s:"Garrett Morgan was the ___ of an early traffic signal.", base:"INVENT", answers:["inventor"], explain:"Cần danh từ chỉ người: invent + -or = inventor.", tag:"wordform"},
      {kind:"wordform", s:"Scientists have made several ___ about what homes will be like in 2050.", base:"PREDICT", answers:["predictions"], explain:"Sau 'several' cần danh từ số nhiều: predictions.", tag:"wordform"},
      {kind:"wordform", s:"In a smart home, the lights turn on ___ when you walk into a room.", base:"AUTOMATIC", answers:["automatically"], explain:"Bổ nghĩa cho động từ 'turn on' cần trạng từ; -ic → -ically.", tag:"wordform"},
      {kind:"wordform", s:"Many teenagers find online games so ___ that they cannot stop playing.", base:"ADDICT", answers:["addictive"], explain:"Sau 'so' cần tính từ mô tả trò chơi (gây nghiện): addictive.", tag:"wordform"},
      {kind:"wordform", s:"Some doctors worry that screen ___ is becoming a serious problem for young people.", base:"ADDICT", answers:["addiction"], explain:"Cụm danh từ 'screen addiction' (chứng nghiện màn hình) làm chủ ngữ.", tag:"wordform"},
      {kind:"wordform", s:"Our classroom has an ___ whiteboard that students can touch and write on.", base:"INTERACT", answers:["interactive"], explain:"Trước danh từ 'whiteboard' cần tính từ: interact + -ive.", tag:"wordform"},
      {kind:"wordform", s:"It's easy to get ___ when your phone is next to you during homework.", base:"DISTRACT", answers:["distracted"], explain:"'get + tính từ -ed' chỉ cảm giác của người: get distracted.", tag:"wordform"},
      {kind:"wordform", s:"There is no clear ___ that video games make children more violent.", base:"EVIDENT", answers:["evidence"], explain:"Sau 'no clear' cần danh từ: evidence (không đếm được).", tag:"wordform"},
      {kind:"wordform", s:"The shipwreck was one of the most ___ discoveries ever made in the Mediterranean.", base:"IMPRESS", answers:["impressive"], explain:"Sau 'the most' và trước danh từ cần tính từ: impressive.", tag:"wordform"},
      {kind:"wordform", s:"Voice ___ software lets you write a text message just by speaking.", base:"RECOGNISE", answers:["recognition"], explain:"Cụm danh từ 'voice recognition' (nhận diện giọng nói).", tag:"wordform"},
      {kind:"wordform", s:"Underwater robots have changed ___ research on ancient shipwrecks.", base:"ARCHAEOLOGY", answers:["archaeological"], explain:"Trước danh từ 'research' cần tính từ: archaeology → archaeological.", tag:"wordform"},
      {kind:"wordform", s:"Recent ___ in robotics will give us machines that help with housework.", base:"DEVELOP", answers:["developments"], explain:"Sau 'Recent' cần danh từ; động từ 'will give' và nghĩa 'những bước phát triển' → số nhiều developments.", tag:"wordform"},
      {kind:"wordform", s:"Young people still need to ___ face to face with their friends.", base:"SOCIAL", answers:["socialise","socialize"], explain:"Sau 'need to' cần động từ nguyên mẫu: social → socialise.", tag:"wordform"},
      {kind:"wordform", s:"For my birthday, I got a ___ mug with a photo of my family on it.", base:"PERSONAL", answers:["personalised","personalized"], explain:"Tính từ -ed 'được cá nhân hoá' đứng trước danh từ 'mug'.", tag:"wordform"}
    ]
  },
  sentences: {
    notes: [
      {title:"Mệnh đề quan hệ với 'which'", html:"• <b>Defining</b> (thông tin cần thiết, không dấu phẩy): <i>There's a platform <b>which/that</b> is good for sharing messages.</i><br>• <b>Non-defining</b> (thông tin thêm, có dấu phẩy, không dùng that): <i>My computer, <b>which</b> is very old now, still works.</i><br>• <b>which</b> thay cho <b>cả mệnh đề</b> phía trước: <i>I wouldn't be without social media, <b>which</b> surprises my friends.</i>"},
      {title:"Tương lai bị động, tương lai tiếp diễn, have something done, do/does nhấn mạnh", html:"• Bị động tương lai: <b>will be + P.P.</b> — <i>Your data <b>will be collected</b>.</i> (thêm <b>by</b> nếu cần nói ai làm)<br>• Tương lai tiếp diễn: <b>will be + V-ing</b> — <i>This time tomorrow, I<b>'ll be having</b> a maths lesson.</i><br>• Nhờ người khác làm: <b>have + tân ngữ + P.P.</b> — <i>I <b>had</b> my name <b>printed</b> on a T-shirt.</i><br>• Nhấn mạnh: <b>do/does + V</b> — <i>Parents <b>do need</b> to be stricter.</i>"}
    ],
    items: [
      {kind:"order", answer:"Your data will be collected and analysed by the smart home.", vi:"Dữ liệu của bạn sẽ được ngôi nhà thông minh thu thập và phân tích.", tag:"sentence"},
      {kind:"order", answer:"I wouldn't be without social media, which surprises my friends.", vi:"Tôi không thể sống thiếu mạng xã hội, điều này làm bạn bè tôi ngạc nhiên.", tag:"sentence"},
      {kind:"order", answer:"This time tomorrow, I'll be having a maths lesson.", vi:"Giờ này ngày mai, tôi sẽ đang học tiết toán.", tag:"sentence"},
      {kind:"order", answer:"I had my name printed on a new phone cover.", vi:"Tôi đã nhờ in tên mình lên một chiếc ốp điện thoại mới.", tag:"sentence"},
      {kind:"order", answer:"The food will be delivered to your door by drone.", vi:"Thức ăn sẽ được máy bay không người lái giao tới tận cửa nhà bạn.", tag:"sentence"},
      {kind:"order", answer:"Parents do need to think about their children's screen time.", vi:"Cha mẹ thực sự cần quan tâm đến thời gian dùng màn hình của con.", tag:"sentence"},
      {kind:"order", answer:"In ten years' time, we will all be using electric vehicles.", vi:"Mười năm nữa, tất cả chúng ta sẽ đang dùng xe điện.", tag:"sentence"},
      {kind:"order", answer:"The archaeologists used robots to explore the shipwreck under the sea.", vi:"Các nhà khảo cổ đã dùng robot để khám phá xác tàu đắm dưới biển.", tag:"sentence"},
      {kind:"order", answer:"My computer, which is very old now, still works quite well.", vi:"Máy tính của tôi, giờ đã rất cũ, vẫn chạy khá tốt.", tag:"sentence"},
      {kind:"rewrite", s:"A robotic arm will clean the cupboards.", prompt:"The cupboards ___", answers:["The cupboards will be cleaned by a robotic arm."], explain:"Bị động tương lai: will be + P.P. (cleaned), người/vật thực hiện đứng sau 'by'.", tag:"grammar"},
      {kind:"rewrite", s:"They will deliver the new laptop tomorrow.", prompt:"The new laptop ___", answers:["The new laptop will be delivered tomorrow."], explain:"Chủ ngữ 'They' chung chung nên bỏ đi; will be + delivered.", tag:"grammar"},
      {kind:"rewrite", s:"Some students only read books on their phones. This surprises many teachers.", prompt:"Some students only read books on their phones, which ___", answers:["Some students only read books on their phones, which surprises many teachers."], explain:"'which' (có dấu phẩy) thay cho cả mệnh đề phía trước; động từ chia số ít: surprises.", tag:"grammar"},
      {kind:"rewrite", s:"A shop printed my favourite photo on a mug for me.", prompt:"I had ___", answers:["I had my favourite photo printed on a mug.","I had my favourite photo printed on a mug by a shop."], explain:"have + tân ngữ + P.P.: had + my favourite photo + printed.", tag:"grammar"},
      {kind:"rewrite", s:"My phone screen is broken. A shop is going to repair it next week.", prompt:"I'm going to have ___", answers:["I'm going to have my phone screen repaired next week.","I'm going to have my phone screen repaired by a shop next week.","I am going to have my phone screen repaired next week."], explain:"have something done ở tương lai: going to have + my phone screen + repaired.", tag:"grammar"},
      {kind:"rewrite", s:"I really understand parents who want to limit screen time.", prompt:"I do ___", answers:["I do understand parents who want to limit screen time."], explain:"Dùng do + động từ nguyên mẫu để nhấn mạnh thay cho 'really'.", tag:"grammar"},
      {kind:"rewrite", s:"Don't phone me at 8 tonight. I'll be in the middle of my homework then.", prompt:"At 8 tonight, I ___", answers:["At 8 tonight, I'll be doing my homework.","At 8 tonight, I will be doing my homework."], explain:"Hành động đang diễn ra tại một thời điểm trong tương lai → will be + V-ing.", tag:"grammar"}
    ]
  },
  reading: [
    {
      title: "Our digital detox week",
      text: "Last month, our class did an experiment. For one week, all 28 of us agreed to stay off social media completely. No posts, no likes, no selfies and no memes. Our teacher, Ms Lan, called it a 'digital detox'.\n\nThe first two days were the hardest. Many of us kept picking up our phones automatically, even though we had deleted the apps. Minh, who usually spends about five hours a day online, said he felt bored and a little anxious. 'I didn't know what my friends were doing, which was strange,' he admitted.\n\nBy the middle of the week, however, things started to change. We chatted more at break time and played football after school instead of scrolling through videos. Several students said they got distracted less often while doing their homework, and three people told us they were sleeping better.\n\nAt the end of the week, we discussed what we had learned. Nobody wanted to give up social media for ever – it is still a useful platform for keeping in touch with family and sharing ideas. But most of us agreed that screen time can easily turn into a kind of addiction. Now our class has a new rule: phones stay in our bags during lunch, so that we can socialise face to face.",
      glossary: [
        {term:"digital detox", vi:"thời gian tạm ngừng dùng thiết bị số / mạng xã hội"},
        {term:"experiment", vi:"cuộc thử nghiệm"},
        {term:"anxious", vi:"lo lắng, bồn chồn"},
        {term:"scroll through", vi:"lướt (màn hình)"},
        {term:"keep in touch", vi:"giữ liên lạc"}
      ],
      items: [
        {kind:"mcq", q:"What was the 'digital detox'?", opts:["A week without using social media","A week without any homework","A competition to get the most likes","A lesson about making videos"], a:0, tag:"reading"},
        {kind:"tf", s:"Minh found the first days of the experiment easy.", a:false, tag:"reading"},
        {kind:"mcq", q:"What happened by the middle of the week?", opts:["The students downloaded the apps again","The students talked and played together more","The teacher stopped the experiment","The students spent more time watching videos"], a:1, tag:"reading"},
        {kind:"tf", s:"Some students said they were sleeping better during the week.", a:true, tag:"reading"},
        {kind:"gap", s:"Most students agreed that screen time can easily turn into a kind of ___.", answers:["addiction"], tag:"reading"},
        {kind:"mcq", q:"What is the class's new rule?", opts:["Social media is only allowed at weekends","Phones are banned at home","Phones stay in bags during lunch","Students must post one photo a day"], a:2, tag:"reading"}
      ]
    },
    {
      title: "Robots under the sea",
      text: "For centuries, the bottom of the ocean was almost impossible to explore. It is dark, cold and very deep, and divers can only stay down for a short time. Today, however, cutting-edge technology is helping archaeologists to discover shipwrecks that were lost hundreds of years ago.\n\nOne of the most useful tools is the underwater robot, sometimes called an ROV (remotely operated vehicle). It is connected to a ship by a long cable and is controlled by a pilot on the surface. The robot has powerful lights, cameras and sensors, which send data back to the ship in real time. Some robots even have soft 'hands' that can pick up fragile artefacts, such as old cups or plates, without breaking them.\n\nScientists also use sonar, a system that sends sound waves through the water, to make 3D maps of the sea floor. These maps show where a wreck is lying before anyone goes near it.\n\nEach discovery is like opening a time capsule. The cargo of a ship can tell us what people ate, what they traded and which countries they visited. In the future, archaeologists predict that artificial intelligence will be used to study the images automatically, so that even more ground-breaking discoveries will be made.",
      glossary: [
        {term:"explore", vi:"thám hiểm, khám phá"},
        {term:"cable", vi:"dây cáp"},
        {term:"in real time", vi:"theo thời gian thực (ngay lập tức)"},
        {term:"fragile", vi:"dễ vỡ"},
        {term:"sonar", vi:"hệ thống định vị bằng sóng âm"},
        {term:"sea floor", vi:"đáy biển"}
      ],
      items: [
        {kind:"mcq", q:"Why was the bottom of the ocean so difficult to explore in the past?", opts:["There were no ships","It is dark, cold and very deep","It was against the law","Archaeologists were not interested"], a:1, tag:"reading"},
        {kind:"tf", s:"An ROV is controlled by a pilot who stays on the surface.", a:true, tag:"reading"},
        {kind:"gap", s:"The robot's lights, cameras and ___ send data back to the ship.", answers:["sensors"], tag:"reading"},
        {kind:"tf", s:"The robots' soft 'hands' often break old cups and plates.", a:false, tag:"reading"},
        {kind:"mcq", q:"What is sonar used for?", opts:["To clean artefacts","To communicate with divers","To make 3D maps of the sea floor","To power the robot"], a:2, tag:"reading"},
        {kind:"mcq", q:"According to the text, what will artificial intelligence do in the future?", opts:["Study the images automatically","Replace all archaeologists","Sell the artefacts","Drive the ships"], a:0, tag:"reading"}
      ]
    }
  ],
  writing: [
    {
      prompt: "Viết một đoạn <b>báo cáo ngắn</b> (80–120 từ) về công nghệ ở trường em gửi thầy/cô hiệu trưởng. Nêu: công nghệ trường đang có, ít nhất một ví dụ (dùng <i>For example,</i>), một hạn chế (dùng <i>However,</i>) và điều em muốn có trong tương lai.",
      sample: "Technology at our school\nOur report is divided into two parts: the technology we have now and what we would like in the future. At present, every classroom has a projector, and two rooms have interactive whiteboards. For example, our English teacher uses online games to help us practise vocabulary, which makes lessons more fun. However, there are only twenty computers for more than 800 students, so we cannot always use them. In the future, we would like a digital teaching assistant that can answer our questions after class. We also hope that the school Wi-Fi will be improved, because it is often too slow.",
      criteria: "Có câu mở đầu nói báo cáo gồm những phần nào; nêu công nghệ hiện có và điều mong muốn; dùng đúng 'For example,' và 'However,' (có dấu phẩy); có ít nhất 1 câu bị động; 80–120 từ."
    },
    {
      prompt: "Viết một đoạn văn <b>dự đoán</b> (80–120 từ): <i>My home in 2040</i>. Dùng <i>will + V</i>, bị động tương lai (<i>will be + P.P.</i>) và ít nhất một câu tương lai tiếp diễn (<i>will be + V-ing</i>). Nhắc tới ít nhất 3 thiết bị/công nghệ thông minh.",
      sample: "In 2040, my home will be much smarter than it is today. When I wake up, the curtains will open automatically and my digital assistant will read me the news. My breakfast will be prepared by a robot while I'm getting dressed. Sensors in the bathroom will check my health and send the data to my doctor. At 8 o'clock, I'll be travelling to school in a self-driving car, so I'll be able to read or relax on the way. In the evening, our food will be delivered by drone. I think life will be easier, but I hope people will still cook and talk to each other.",
      criteria: "Có ít nhất 3 thiết bị thông minh; dùng đúng will + V, will be + P.P. và will be + V-ing; có câu kết nêu cảm nghĩ; dùng từ vựng bài 5.2 (sensor, drone, digital assistant, automatically...); 80–120 từ."
    },
    {
      prompt: "Viết một đoạn văn <b>nêu quan điểm</b> (80–120 từ): <i>Is social media good or bad for teenagers?</i> Nêu 2 lợi ích, 2 tác hại và ý kiến của em. Dùng ít nhất một câu có <i>which</i> chỉ cả mệnh đề và một câu nhấn mạnh với <i>do/does</i>.",
      sample: "Social media can be very useful for teenagers. First, it helps us stay in touch with friends and family who live far away. Second, we can find information and share ideas quickly, which is great for school projects. However, I do think there are some serious problems. Many young people spend too much time scrolling through posts, which can affect their sleep and concentration. Some also feel unhappy when they compare their lives with other people's perfect photos. In my opinion, social media is not good or bad in itself. It does depend on how we use it, so we need to set limits on our screen time.",
      criteria: "Có câu chủ đề; nêu đủ 2 lợi ích và 2 tác hại; có từ nối (First, Second, However, In my opinion); dùng đúng 'which' chỉ cả mệnh đề và 'do/does' nhấn mạnh; 80–120 từ."
    }
  ]
});

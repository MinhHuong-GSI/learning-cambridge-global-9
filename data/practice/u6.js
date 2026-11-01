CG9.addPracticePack({
  unit: 6,
  reading: [
    { title: "Đọc & chọn từ đúng (Multiple-choice cloze)", instr: "Đọc đoạn văn và chọn từ đúng nhất cho mỗi chỗ trống.", tag: "reading",
      items: [
        {kind:"cloze", title:"Our school's new phone rule", text:"At the start of this school year, our head teacher introduced a new rule: students are not {1} to use mobile phones during the school day. Phones must be switched off and left in a locker before the first lesson. Anyone who {2} the rule has their phone taken away until the end of the day, and if it happens three times, they get a {3} and have to stay behind after school.\n\nAt first, many students were unhappy. Some said the school was far too {4}, and a few parents complained that they could not contact their children. The head teacher explained that parents could always phone the school office {5} there was an emergency.\n\nThree months later, most of us agree that the ban has worked. Teachers say that students concentrate better and show more {6} to each other. At break time, people actually talk and play games instead of staring at screens. My friend Nam said, 'If the school {7} the ban, I would never {8} the chess club!'", gaps:[
          {opts:["allowed","let","made","banned"], a:0},
          {opts:["breaks","makes","does","follows"], a:0},
          {opts:["detention","trouble","permission","respect"], a:0},
          {opts:["strict","polite","generous","respectful"], a:0},
          {opts:["if","unless","although","so"], a:0},
          {opts:["respect","behaviour","trouble","rules"], a:0},
          {opts:["hadn't introduced","didn't introduce","wouldn't introduce","hasn't introduced"], a:0},
          {opts:["have joined","joined","join","had joined"], a:0}
        ], explain:"(1) be (not) allowed to + V. (2) break the rule = vi phạm nội quy. (3) get a detention = bị phạt ở lại trường. (4) strict = nghiêm khắc. (5) if = nếu. (6) show respect to sb = tôn trọng ai. (7)–(8) câu điều kiện loại 3: If + had + P.P., would have + P.P.", tag:"reading"}
      ] },
    { title: "Đọc & điền từ (Open cloze)", instr: "Đọc đoạn văn và điền MỘT từ thích hợp vào mỗi chỗ trống.", tag: "reading",
      items: [
        {kind:"cloze", title:"Unusual laws around the world", text:"Every country has its own laws, and some of {1} can seem very strange to visitors. In Singapore, for example, it has been illegal to sell chewing gum {2} 1992. The government introduced the ban because people were leaving used gum on pavements and even in the doors of trains, {3} stopped the doors from working properly.\n\nIn Venice, tourists are not allowed {4} feed the pigeons in St Mark's Square. The birds damage the old buildings, and cleaning up after them costs the city a lot of money. Visitors who ignore the signs can {5} fined.\n\nIn Barcelona, you are not supposed to walk around the city streets in your swimsuit. Some tourists think this rule is unnecessary, {6} local people feel strongly that swimwear belongs on the beach, not in shops or cafés.\n\nSo what should you do before you travel? It is a good idea to read about the local rules in {7} to avoid getting into trouble. After {8}, nobody wants to pay a fine on holiday!", gaps:[
          {answers:["them","these"]},
          {answers:["since"]},
          {answers:["which"]},
          {answers:["to"]},
          {answers:["be","get"]},
          {answers:["but","yet","while","whereas"]},
          {answers:["order"]},
          {answers:["all"]}
        ], explain:"(1) some of them. (2) since + mốc thời gian với hiện tại hoàn thành. (3) ', which' chỉ cả sự việc phía trước. (4) be allowed to + V. (5) can be fined (bị động với động từ khuyết thiếu). (6) but nối hai ý tương phản. (7) in order to = để. (8) After all = dù sao thì, suy cho cùng.", tag:"reading"}
      ] },
    { title: "Chọn tiêu đề cho đoạn văn", instr: "Chọn tiêu đề phù hợp cho mỗi đoạn. Có MỘT tiêu đề thừa.", tag: "reading",
      items: [
        {kind:"headings", paras:[
          "In many countries, teenagers are allowed to work part-time from the age of 14 or 15, but the law protects them carefully. They are not allowed to work during school hours, and the number of hours they can work on a school day is limited. Dangerous jobs, such as working with heavy machines, are completely banned for young workers.",
          "Many teenagers who have a part-time job say it has taught them a lot. They learn how to manage money, how to talk politely to customers and how to arrive on time. Some even say that their job helped them to decide what they wanted to study at university. Employers also like young people who already have some work experience.",
          "However, working too much can cause problems. Students who work late in the evening often feel tired the next day and find it hard to concentrate in class. Their marks may fall, and they may have less time for friends, sport and family. Teachers warn that schoolwork must always come first.",
          "So how can a teenager find the right balance? Experts suggest choosing a job at the weekend rather than on school nights and agreeing a clear schedule with the employer. It is also important to ask permission from your parents and, in some places, from your school before you start. That way, everyone knows what you are doing."
        ], headings:[
          "When work gets in the way of study",
          "How much money teenagers earn",
          "What the law says",
          "Getting the balance right",
          "Lessons you can't learn in the classroom"
        ], a:[2,4,0,3], explain:"Đoạn 1: luật quy định về việc làm thêm. Đoạn 2: những bài học từ công việc. Đoạn 3: tác hại khi làm quá nhiều (However…). Đoạn 4: lời khuyên để cân bằng. Tiêu đề về số tiền kiếm được là tiêu đề thừa.", tag:"reading"}
      ] },
    { title: "Sắp xếp sự việc", instr: "Sắp xếp các câu theo đúng trình tự.", tag: "reading",
      items: [
        {kind:"seqorder", q:"The lost wallet", items:[
          "On Saturday morning, Huy was buying a drink at the café near his house.",
          "While he was waiting, he noticed a wallet on the floor under the next table.",
          "He opened it and found a lot of money and an ID card with a photo of an old man.",
          "For a moment, he thought about keeping the money for himself.",
          "However, he decided to give the wallet to the café manager, who phoned the owner.",
          "An hour later, the old man arrived and thanked Huy for being so honest."
        ], vi:"Câu chuyện về chiếc ví bị đánh rơi — một tình huống khó xử về đạo đức.", explain:"Đang mua đồ uống → nhìn thấy ví → mở ví → phân vân → quyết định trả lại → người chủ đến cảm ơn.", tag:"reading"},
        {kind:"seqorder", q:"Doing jury service in the UK", items:[
          "First, you receive a letter telling you the date when you must go to court.",
          "On your first day, you watch a short film that explains what jurors have to do.",
          "Then you are chosen, together with eleven other people, to listen to a case.",
          "During the trial, you listen carefully to the evidence from both sides.",
          "After that, the jury goes to a private room to discuss the case.",
          "Finally, the jury tells the judge its decision: guilty or not guilty."
        ], vi:"Các bước khi tham gia bồi thẩm đoàn ở Anh.", explain:"Chú ý các từ chỉ trình tự: First → On your first day → Then → During the trial → After that → Finally.", tag:"reading"}
      ] },
    { title: "Tìm từ trong đoạn văn", instr: "Đọc đoạn trích và chạm vào từ đúng.", tag: "reading",
      items: [
        {kind:"tapword", q:"Find the word that means 'a set of rules or a plan of action decided by an organisation'.", text:"The museum has a zero tolerance policy on touching the paintings. Even a small child who touches one will be asked to leave.", answer:"policy", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'nghiêm khắc'.", text:"My parents are quite strict: I have to be home by six o'clock, and I'm not allowed to use my phone after nine.", answer:"strict", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'tình huống khó xử'.", text:"She was in a moral dilemma. If she told the teacher, her friend would be angry; if she said nothing, the bullying would continue.", answer:"dilemma", tag:"reading"},
        {kind:"tapword", q:"Find the word that means 'the amount of work that a person has to do'.", text:"Since the family started using a weekly schedule, nobody complains about having an unfair workload any more.", answer:"workload", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'không bị thương'.", text:"The bus slid off the icy road into a field, but amazingly every passenger was unhurt.", answer:"unhurt", tag:"reading"}
      ] }
  ],
  vocab: [
    { title: "Kết hợp từ (Collocations)", instr: "Chọn TẤT CẢ các từ có thể kết hợp đúng.", tag: "vocab",
      items: [
        {kind:"multi", q:"Which words can follow 'get' to make a common phrase?", opts:["married","into trouble","a detention","blood","jury service"], a:[0,1,2], explain:"get married (kết hôn), get into trouble (gặp rắc rối), get a detention (bị phạt ở lại trường). Ta nói give blood, do jury service.", tag:"vocab"},
        {kind:"multi", q:"Which words can follow 'do'?", opts:["jury service","the washing-up","a bank account","the army","married"], a:[0,1], explain:"do jury service, do the washing-up. Ta nói open a bank account, join the army, get married.", tag:"vocab"},
        {kind:"multi", q:"Which verbs can go with 'the rules'?", opts:["break","follow","obey","win","do"], a:[0,1,2], explain:"break the rules (vi phạm), follow/obey the rules (tuân theo).", tag:"vocab"},
        {kind:"multi", q:"Which verbs can go with 'blood' (meaning 'hiến máu')?", opts:["give","donate","open","vote","join"], a:[0,1], explain:"give blood = donate blood = hiến máu.", tag:"vocab"},
        {kind:"multi", q:"Which words can follow 'join'?", opts:["the army","a club","home","married","a detention"], a:[0,1], explain:"join the army (gia nhập quân đội), join a club (tham gia câu lạc bộ). Ta nói leave home, get married, get a detention.", tag:"vocab"},
        {kind:"multi", q:"Which verbs can go before 'permission'?", opts:["ask","give","make","do","break"], a:[0,1], explain:"ask (for) permission (xin phép), give permission (cho phép).", tag:"vocab"}
      ] },
    { title: "Từ không cùng nhóm", instr: "Chọn từ KHÔNG cùng nhóm với các từ còn lại.", tag: "vocab",
      items: [
        {kind:"mcq", q:"Which phrase is the odd one out?", opts:["vote","get married","do jury service","make your bed"], a:3, explain:"make your bed là việc nhà hằng ngày; ba cụm còn lại là quyền/nghĩa vụ khi đủ 18 tuổi ở Anh.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["wing mirror","handlebars","steering wheel","selfie stick"], a:3, explain:"selfie stick (gậy tự sướng) không phải bộ phận của xe; ba từ còn lại là bộ phận của xe.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["efficiency","productivity","workload","detention"], a:3, explain:"detention là hình phạt ở trường; ba từ còn lại liên quan đến công việc, năng suất.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["allowed","permitted","forbidden","encouraged"], a:2, explain:"forbidden (bị cấm) mang nghĩa không được làm; ba từ còn lại đều có nghĩa là được phép/được khuyến khích làm.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["judge","jury","court","waitress"], a:3, explain:"waitress (nữ phục vụ) không thuộc chủ đề toà án; ba từ còn lại thuộc chủ đề luật pháp.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["employee","executive","manager","schedule"], a:3, explain:"schedule (lịch trình) là vật/kế hoạch; ba từ còn lại chỉ người.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["upset","angry","worried","respect"], a:3, explain:"respect là danh từ/động từ; upset, angry, worried là tính từ chỉ cảm xúc.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["persuade","notice","punish","attitude"], a:3, explain:"attitude (thái độ) là danh từ; ba từ còn lại là động từ.", tag:"vocab"}
      ] },
    { title: "Từ đồng nghĩa / trái nghĩa", instr: "Chọn từ/cụm từ đồng nghĩa hoặc trái nghĩa theo yêu cầu.", tag: "vocab",
      items: [
        {kind:"mcq", q:"Choose the word CLOSEST in meaning to 'strict'.", opts:["firm","lazy","kind","relaxed"], a:0, explain:"strict = firm (nghiêm khắc, cứng rắn).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word OPPOSITE in meaning to 'allowed'.", opts:["permitted","banned","expected","encouraged"], a:1, explain:"allowed (được phép) >< banned (bị cấm).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word CLOSEST in meaning to 'persuade'.", opts:["force","forget","convince","refuse"], a:2, explain:"persuade = convince (thuyết phục).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word OPPOSITE in meaning to 'upset'.", opts:["angry","worried","nervous","happy"], a:3, explain:"upset (buồn, khó chịu) >< happy (vui vẻ).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word CLOSEST in meaning to 'notice'.", opts:["spot","ignore","forget","hide"], a:0, explain:"notice = spot (nhận ra, để ý thấy).", tag:"vocab"},
        {kind:"mcq", q:"Choose the phrase OPPOSITE in meaning to 'break the rules'.", opts:["make the rules","obey the rules","change the rules","ignore the rules"], a:1, explain:"break the rules (vi phạm) >< obey the rules (tuân theo).", tag:"vocab"},
        {kind:"mcq", q:"Choose the meaning CLOSEST to 'chronological order'.", opts:["alphabetical order","order of importance","the order in which events happened","random order"], a:2, explain:"chronological order = theo trình tự thời gian các sự việc xảy ra.", tag:"vocab"},
        {kind:"mcq", q:"Choose the word OPPOSITE in meaning to 'guilty'.", opts:["responsible","honest","unhurt","innocent"], a:3, explain:"guilty (có tội) >< innocent (vô tội).", tag:"vocab"}
      ] },
    { title: "Đoán nghĩa từ ngữ cảnh", instr: "Đọc câu, đoán nghĩa từ ngữ cảnh và chạm vào từ đúng.", tag: "vocab",
      items: [
        {kind:"tapword", q:"Tìm từ có nghĩa là 'cố ý'.", text:"The referee showed him a red card because he had deliberately kicked another player.", answer:"deliberately", tag:"vocab"},
        {kind:"tapword", q:"Find the word that means 'made to pay money as a punishment'.", text:"Shops that sell cigarettes to children can be fined thousands of dollars.", answer:"fined", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'nhân chứng'.", text:"Before the trial, the witness gave a statement to the police about what she had seen.", answer:"witness", tag:"vocab"},
        {kind:"tapword", q:"Find the word that means 'officially does not allow'.", text:"The new law prohibits smoking in all parks and playgrounds, so you cannot even smoke near the swings.", answer:"prohibits", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'chu đáo, biết nghĩ cho người khác'.", text:"Our neighbours are very considerate: they always keep their music quiet after ten o'clock so that we can sleep.", answer:"considerate", tag:"vocab"}
      ] },
    { title: "Hoàn thành câu với từ cho sẵn", instr: "Chọn từ trong khung để hoàn thành câu. Có 2 từ thừa.", tag: "vocab",
      wordbank: ["detention","respect","workload","schedule","permission","ban","statement","strict","handlebars","jury"],
      items: [
        {kind:"gap", s:"You must ask your parents' ___ before you go on the school trip.", answers:["permission"], tag:"vocab"},
        {kind:"gap", s:"Hùng was late four times this week, so he got a ___ and had to stay behind after school.", answers:["detention"], tag:"vocab"},
        {kind:"gap", s:"There is a ___ on phones at our dinner table, so we talk to each other instead.", answers:["ban"], tag:"vocab"},
        {kind:"gap", s:"Our maths teacher is very ___ – she never accepts homework that is late.", answers:["strict"], tag:"vocab"},
        {kind:"gap", s:"Since my brother started university, I have to do all the chores, so my ___ has doubled.", answers:["workload"], tag:"vocab"},
        {kind:"gap", s:"Mum put a weekly ___ on the fridge, so everyone knows which chores to do on which day.", answers:["schedule"], tag:"vocab"},
        {kind:"gap", s:"Good students show ___ to their teachers by listening carefully when they speak.", answers:["respect"], tag:"vocab"},
        {kind:"gap", s:"After the accident, the police asked me to write a ___ describing exactly what I had seen.", answers:["statement"], tag:"vocab"}
      ] }
  ],
  grammar: [
    { title: "Tìm và sửa lỗi sai", instr: "Mỗi câu có MỘT từ sai. Chạm vào từ sai rồi gõ từ đúng.", tag: "grammar",
      items: [
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"We are not allowed wearing jewellery at school.", answer:"wearing", fix:["to wear"], explain:"be (not) allowed + to V → to wear.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"You are suppose to switch off your phone in the library.", answer:"suppose", fix:["supposed"], explain:"be supposed to + V (dạng bị động, cần quá khứ phân từ supposed).", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"There is a lot of washing to be do before the weekend.", answer:"do", fix:["done"], explain:"Bị động nguyên thể: to be + P.P. → to be done.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"When I got home, Mum asked me if I am hungry.", answer:"am", fix:["was"], explain:"Câu hỏi tường thuật lùi thì: am → was.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"The teacher said us to stay behind after school.", answer:"said", fix:["told"], explain:"Mệnh lệnh tường thuật: tell + người nghe + to V; 'say' không có tân ngữ chỉ người.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"He asked me that I had finished my homework.", answer:"that", fix:["if","whether"], explain:"Câu hỏi Yes/No tường thuật dùng if/whether, không dùng 'that'.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"If I had known about the test, I would have study harder.", answer:"study", fix:["studied"], explain:"Câu điều kiện loại 3: would have + P.P. → studied.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"If only I have told the truth to my parents!", answer:"have", fix:["had"], explain:"If only + quá khứ hoàn thành (had + P.P.) để diễn tả sự tiếc nuối về quá khứ.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"I was cycling to school when a dog suddenly runs into the road.", answer:"runs", fix:["ran"], explain:"Hành động xen vào (bất ngờ) một hành động đang diễn ra trong quá khứ dùng quá khứ đơn: ran.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"He had his arm out because he were going to turn left.", answer:"were", fix:["was"], explain:"Chủ ngữ 'he' → was going to (dự định trong quá khứ).", tag:"grammar"}
      ] },
    { title: "Viết lại câu với từ khoá", instr: "Viết lại câu sao cho nghĩa không đổi, BẮT BUỘC dùng từ in hoa.", tag: "grammar",
      items: [
        {kind:"rewrite", s:"The rules say we can't use phones in class.", key:"ALLOWED", prompt:"We ___", answers:["We are not allowed to use phones in class.","We aren't allowed to use phones in class.","We're not allowed to use phones in class."], explain:"be not allowed to + V = không được phép.", tag:"grammar"},
        {kind:"rewrite", s:"Somebody needs to clean the classroom before the parents arrive.", key:"BE", prompt:"The classroom needs ___", answers:["The classroom needs to be cleaned before the parents arrive."], explain:"Bị động nguyên thể: need to be + P.P.", tag:"grammar"},
        {kind:"rewrite", s:"'Can I stay out until ten?' Lan asked her dad.", key:"IF", prompt:"Lan asked her dad ___", answers:["Lan asked her dad if she could stay out until ten.","Lan asked her dad if she could stay out until 10."], explain:"Câu hỏi Yes/No tường thuật: ask + if + S + V (lùi thì: can → could).", tag:"grammar"},
        {kind:"rewrite", s:"'Turn off the TV!' Mum said to me.", key:"TOLD", prompt:"Mum ___", answers:["Mum told me to turn off the TV.","Mum told me to turn the TV off."], explain:"Mệnh lệnh tường thuật: tell + người nghe + to V.", tag:"grammar"},
        {kind:"rewrite", s:"I didn't study, so I failed the test.", key:"HAD", prompt:"If I ___", answers:["If I had studied, I wouldn't have failed the test.","If I had studied, I would not have failed the test.","If I had studied, I would have passed the test."], explain:"Câu điều kiện loại 3: If + had + P.P., would (not) have + P.P.", tag:"grammar"},
        {kind:"rewrite", s:"I regret not telling the teacher about the problem.", key:"ONLY", prompt:"If ___", answers:["If only I had told the teacher about the problem.","If only I'd told the teacher about the problem."], explain:"If only + had + P.P. = giá như (tiếc nuối về quá khứ).", tag:"grammar"},
        {kind:"rewrite", s:"The school rules say that students should wear a uniform on Mondays.", key:"EXPECTED", prompt:"Students ___", answers:["Students are expected to wear a uniform on Mondays."], explain:"be expected to + V = được yêu cầu, phải (theo nội quy).", tag:"grammar"},
        {kind:"rewrite", s:"I intended to call you, but I forgot.", key:"GOING", prompt:"I was ___", answers:["I was going to call you, but I forgot."], explain:"was/were going to + V: định làm gì trong quá khứ (nhưng đã không làm).", tag:"grammar"}
      ] },
    { title: "Chọn TẤT CẢ câu đúng", instr: "Chọn TẤT CẢ các câu đúng ngữ pháp (có thể có 1, 2 hoặc 3 câu đúng).", tag: "grammar",
      items: [
        {kind:"multi", q:"Which sentences are correct? (passive + infinitive)", opts:["We are not allowed to run in the corridors.","Students are supposed bring their own pens.","Are we expected to stand up when the teacher comes in?","We are encouraged to taking part in sports."], a:[0,2], explain:"be allowed/expected/supposed/encouraged + to + V nguyên mẫu. Câu 2 thiếu 'to'; câu 4 phải là 'to take'.", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (reported speech)", opts:["She asked me where I lived.","He asked me what time was it.","My dad told me to be home by nine.","Tom said that he would help us."], a:[0,2,3], explain:"Câu hỏi tường thuật giữ trật tự câu khẳng định: what time it was (không đảo 'was it').", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (third conditional)", opts:["If you had asked me, I would have helped you.","If she had left earlier, she wouldn't miss the bus.","We would have won if we had played better.","If I would have known, I had told you."], a:[0,2], explain:"If + had + P.P., would have + P.P. Câu 2 phải là 'wouldn't have missed'; câu 4 đảo ngược hai vế.", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (have to / mustn't / don't have to)", opts:["You mustn't to use your phone during the exam.","We don't have to wear a uniform on Fridays, but we can if we want.","She has to tidy her room every Saturday.","He doesn't has to come to the meeting."], a:[1,2], explain:"mustn't + V (không có 'to'); doesn't have to (không phải 'has').", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (past continuous / was going to / to be + P.P.)", opts:["I was waiting for the bus when it started to rain.","They was going to visit us, but their car broke down.","There are still a lot of dishes to be wash.","When the accident happened, I was cross the road."], a:[0], explain:"They were going to…; to be washed; I was crossing the road.", tag:"grammar"}
      ] },
    { title: "Chia động từ trong đoạn văn", instr: "Chia động từ trong ngoặc ở dạng đúng.", tag: "grammar",
      items: [
        {kind:"cloze", title:"Trouble at the lake", text:"Last Sunday, I {1} (walk) my dog in the park when I saw two boys near the lake. One of them {2} (hold) a mobile phone and filming his friend, who was climbing over the fence. The sign on the fence clearly said that visitors {3} (not / allow) to go near the water.\n\nSuddenly, the boy on the fence lost his balance and fell in. Luckily, the water wasn't deep, and a park keeper quickly {4} (pull) him out. Afterwards, the park keeper asked the boys why they {5} (ignore) the sign. The boy who had fallen in said that he {6} (go) to post the video online. The park keeper told them {7} (read) the rules more carefully next time. If they {8} (follow) the rules, nobody would have got wet!", gaps:[
          {answers:["was walking"]},
          {answers:["was holding"]},
          {answers:["were not allowed","weren't allowed","are not allowed","aren't allowed"]},
          {answers:["pulled"]},
          {answers:["had ignored","ignored"]},
          {answers:["was going"]},
          {answers:["to read"]},
          {answers:["had followed"]}
        ], explain:"(1)(2) quá khứ tiếp diễn làm bối cảnh. (3) bị động + to V, lùi thì trong câu tường thuật. (4) quá khứ đơn. (5) câu hỏi tường thuật lùi thì: had ignored. (6) was going to: dự định trong quá khứ. (7) tell sb to V. (8) câu điều kiện loại 3: If + had + P.P.", tag:"grammar"}
      ] }
  ],
  writing: [
    { title: "Nối câu với từ nối", instr: "Nối hai câu thành một (hoặc viết lại) dùng từ/cụm từ in hoa.", tag: "writing",
      items: [
        {kind:"rewrite", s:"Our school rules are strict. Most students think they are fair.", key:"ALTHOUGH", prompt:"Although ___", answers:["Although our school rules are strict, most students think they are fair."], explain:"Although + mệnh đề, + mệnh đề (chỉ sự tương phản).", tag:"writing"},
        {kind:"rewrite", s:"Phones are banned at dinner. My brother still hides his under the table.", key:"HOWEVER", prompt:"Phones are banned at dinner. ___", answers:["Phones are banned at dinner. However, my brother still hides his under the table."], explain:"However đứng đầu câu thứ hai, theo sau là dấu phẩy.", tag:"writing"},
        {kind:"rewrite", s:"He apologised. The teacher still gave him a detention.", key:"DESPITE", prompt:"Despite ___", answers:["Despite his apology, the teacher still gave him a detention.","Despite the fact that he apologised, the teacher still gave him a detention.","Despite him apologising, the teacher still gave him a detention.","Despite his apology, the teacher gave him a detention."], explain:"Despite + danh từ (his apology) / the fact that + mệnh đề.", tag:"writing"},
        {kind:"rewrite", s:"The woman saw the accident. She gave a statement to the police.", key:"WHO", prompt:"The woman ___", answers:["The woman who saw the accident gave a statement to the police."], explain:"Mệnh đề quan hệ xác định với who (chỉ người).", tag:"writing"},
        {kind:"rewrite", s:"Mum made a weekly schedule. She wanted everyone to share the housework.", key:"SO THAT", prompt:"Mum made a weekly schedule ___", answers:["Mum made a weekly schedule so that everyone would share the housework.","Mum made a weekly schedule so that everyone could share the housework."], explain:"so that + S + would/could + V: để mà (chỉ mục đích).", tag:"writing"},
        {kind:"rewrite", s:"My sister got a part-time job. She wanted to save money for university.", key:"IN ORDER TO", prompt:"My sister got a part-time job ___", answers:["My sister got a part-time job in order to save money for university."], explain:"in order to + V nguyên mẫu: để (chỉ mục đích).", tag:"writing"},
        {kind:"rewrite", s:"Nobody followed the rules in the library. The library was closed for a week.", key:"AS A RESULT", prompt:"Nobody followed the rules in the library. ___", answers:["Nobody followed the rules in the library. As a result, the library was closed for a week.","Nobody followed the rules in the library. As a result, it was closed for a week."], explain:"As a result, + kết quả.", tag:"writing"},
        {kind:"rewrite", s:"The school introduced a new rule. It bans phones in the classroom.", key:"WHICH", prompt:"The school introduced a new rule ___", answers:["The school introduced a new rule which bans phones in the classroom."], explain:"which thay cho vật (a new rule) và làm chủ ngữ trong mệnh đề quan hệ.", tag:"writing"}
      ] },
    { title: "Cấu trúc đoạn văn", instr: "Chọn đáp án đúng nhất về cấu trúc đoạn văn.", tag: "writing",
      items: [
        {kind:"mcq", q:"Choose the best TOPIC SENTENCE for this paragraph: '___ For example, we must make our beds every morning. We also have to ask permission before we invite friends round. Finally, there is a ban on phones during meals.'", opts:["My best friend lives next door.","Phones are very expensive these days.","My family has several rules that everyone has to follow.","I usually go to bed at ten."], a:2, explain:"Câu chủ đề phải khái quát được các ý phía sau: các nội quy trong gia đình.", tag:"writing"},
        {kind:"mcq", q:"You are writing a witness STATEMENT. Which sentence should you NOT include?", opts:["At about 4.15 p.m., I was standing at the bus stop.","A red car turned left without stopping at the lights.","I think the driver was a terrible and selfish person.","The cyclist fell off his bike onto the road."], a:2, explain:"Bản tường trình chỉ nêu sự thật (facts), không nêu ý kiến cá nhân (opinions).", tag:"writing"},
        {kind:"mcq", q:"Choose the best CONCLUDING SENTENCE for this email paragraph: 'We are expected to arrive by 7.15 a.m., and we are not supposed to wear jewellery. We don't have to bring lunch because there is a canteen. ___'", opts:["Secondly, we have to wear a uniform.","Overall, I think that our rules are strict but quite reasonable.","Dear Sam, thank you for your email.","For example, my school has 900 students."], a:1, explain:"Câu kết nêu ý kiến tổng quát, mở đầu bằng 'Overall, I think that…'.", tag:"writing"},
        {kind:"mcq", q:"The topic of a paragraph is 'A part-time job teaches teenagers to be responsible.' Which sentence does NOT belong?", opts:["They learn to arrive at work on time.","They have to deal politely with customers.","They learn how to manage the money they earn.","Some teenagers prefer playing football at the weekend."], a:3, explain:"Việc thích chơi bóng đá không liên quan đến tinh thần trách nhiệm khi đi làm.", tag:"writing"},
        {kind:"mcq", q:"Choose the best SUPPORTING EXAMPLE for this sentence: 'Small changes can make a family run more efficiently.'", opts:["For example, my uncle works for a large company.","For example, some families are bigger than others.","For example, Kaizen is a Japanese word.","For example, my family saves twenty minutes every morning by packing our school bags the night before."], a:3, explain:"Ví dụ phải cho thấy một thay đổi nhỏ giúp gia đình làm việc hiệu quả hơn.", tag:"writing"}
      ] },
    { title: "Sắp xếp thành đoạn văn", instr: "Sắp xếp các câu thành một đoạn văn hoàn chỉnh: câu chủ đề → ý hỗ trợ → câu kết.", tag: "writing",
      items: [
        {kind:"seqorder", q:"A phone-free dinner table", items:[
          "I believe that every family should have a phone-free dinner table.",
          "Firstly, meals are often the only time when the whole family is together.",
          "If everyone is looking at a screen, nobody talks about their day.",
          "Secondly, eating without distractions is better for our health, because we notice when we are full.",
          "Some teenagers may complain at first; however, most of them soon get used to the rule.",
          "In conclusion, a simple ban on phones at mealtimes can bring families closer together."
        ], vi:"Đoạn văn nêu quan điểm về việc không dùng điện thoại trong bữa ăn.", explain:"Câu chủ đề (I believe…) → Firstly → giải thích → Secondly → phản biện (however) → In conclusion.", tag:"writing"},
        {kind:"seqorder", q:"Kaizen in our home", items:[
          "Last year, my family decided to try the Kaizen method at home.",
          "First, we wrote down all the chores that needed to be done every week.",
          "Then we made a schedule so that the workload was shared fairly.",
          "After a month, we met again to discuss what was working and what was not.",
          "Now the house is much tidier, and nobody argues about the washing-up any more.",
          "Overall, small changes have made a big difference to our family life."
        ], vi:"Đoạn văn kể về việc áp dụng phương pháp Kaizen trong gia đình.", explain:"Câu chủ đề → First → Then → After a month → Now (kết quả) → Overall (kết luận).", tag:"writing"}
      ] },
    { title: "Viết đoạn văn có hướng dẫn", instr: "Viết theo dàn ý gợi ý và dùng đủ các từ/cụm từ cho sẵn.", tag: "writing",
      items: [
        {kind:"guided", prompt:"Viết một <b>báo cáo khảo sát ngắn</b> (khoảng 80–100 từ) với tiêu đề <i>House rules in our class</i>. Em đã hỏi một số bạn trong lớp về nội quy ở nhà các bạn. Dùng <b>câu tường thuật</b> (asked if/whether…, said that…, told me that…) để báo cáo câu trả lời.", outline:[
          "Câu mở đầu: em đã hỏi bao nhiêu bạn, về chủ đề gì",
          "Ý 1: Câu hỏi về điện thoại trong bữa ăn (I asked whether …) và câu trả lời (… said that …)",
          "Ý 2: Câu hỏi về thời gian dùng màn hình (I asked how much …)",
          "Ý 3: Một nội quy mà hầu hết các bạn đều có (ask permission …)",
          "Kết luận: Overall, I think that …"
        ], useWords:["asked","told","said that","a ban on","ask permission","screen time"], minWords:80, sample:"House rules in our class\nLast week, I asked five classmates about the rules in their homes. First, I asked whether they had a ban on phones at the dinner table. Four of them said that they did, and Hoa told me that her dining room was a phone-free zone. Next, I asked how much screen time they were allowed every day. Most of them said that they could use screens for about two hours. Finally, everyone agreed that they had to ask permission before going out with friends. Overall, I think that our parents' rules are quite similar and generally fair.", criteria:"Có câu mở đầu giới thiệu cuộc khảo sát; dùng đúng câu hỏi tường thuật (asked whether/if…, asked how much…) và câu tường thuật (said that…, told me that…) có lùi thì; dùng đủ các từ cho sẵn; có câu kết nêu ý kiến; khoảng 80–100 từ.", tag:"writing"},
        {kind:"guided", prompt:"Viết một <b>đoạn văn mô tả</b> (khoảng 80–100 từ) với tiêu đề <i>Our family's Kaizen plan</i>: kể về một kế hoạch chia việc nhà theo phương pháp Kaizen mà gia đình em đã (hoặc sẽ) áp dụng, và kết quả của nó.", outline:[
          "Câu chủ đề: tình trạng nhà cửa trước đây (… to be done)",
          "Ý 1: Gia đình em đã làm lịch trình (schedule) như thế nào (so that …)",
          "Ý 2: Khối lượng công việc được chia ra sao (workload)",
          "Ý 3: Cả nhà đặt mục tiêu mỗi tuần (set goals)",
          "Kết luận: kết quả (As a result, … efficiency …)"
        ], useWords:["to be done","schedule","so that","workload","set goals","efficiency"], minWords:80, sample:"Our family's Kaizen plan\nOur house used to be in chaos, with piles of washing to be done and dishes to be washed every evening. So last month, we decided to try Kaizen. First, we made a two-week schedule and stuck it on the fridge so that everyone knows what to do each day. Then we shared the workload fairly: my brother cleans the bathroom, I do the washing-up and Dad cooks dinner. Every Sunday, we meet to set goals for the next week. As a result, our efficiency has improved, and nobody argues about chores any more.", criteria:"Có câu chủ đề nêu vấn đề ban đầu; dùng đúng bị động nguyên thể (to be + P.P.); dùng 'so that' chỉ mục đích; có từ nối trình tự (First, Then, As a result); dùng đủ các từ cho sẵn; khoảng 80–100 từ.", tag:"writing"}
      ] }
  ]
});

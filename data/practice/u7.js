CG9.addPracticePack({
  unit: 7,
  reading: [
    { title: "Đọc & chọn từ đúng (Multiple-choice cloze)", instr: "Đọc đoạn văn và chọn từ đúng nhất cho mỗi chỗ trống.", tag: "reading",
      items: [
        {kind:"cloze", title:"Dragon boat racing", tag:"reading",
         text:"When Thu joined her school's dragon boat team last year, she had never {1} a paddle before. Her older cousin had been racing for years, and he persuaded her to {2} the sport. At first, Thu found the training hard. Each boat has twenty paddlers, a drummer and a steerer, and everyone has to move at exactly the same time. 'You can't win on your own,' her coach told her. 'A team is only {3} strong as its weakest paddler.'\n\nAfter three months, Thu's team entered a regional competition. More than thirty boats {4} for the title. In the {5} round, Thu's team finished second, which meant they could go through to the quarter-final. By then, they had been training together {6} so long that they hardly needed to speak.\n\nIn the final, the {7} team was a group of older students who had won the year before. Thu's team lost by less than a second, but nobody felt disappointed. 'Racing has given me so much {8},' says Thu. 'I've learnt that I can do things I thought were impossible.'",
         gaps:[
           {opts:["held","hold","holding","holds"], a:0},
           {opts:["take up","give up","put off","turn off"], a:0},
           {opts:["as","too","than","more"], a:0},
           {opts:["competed","defended","attacked","scored"], a:0},
           {opts:["qualifying","final","opposing","champion"], a:0},
           {opts:["for","since","during","while"], a:0},
           {opts:["opposing","supporting","following","waiting"], a:0},
           {opts:["confidence","stress","evidence","inconsistency"], a:0}
         ],
         explain:"(1) had never + V3 → held. (2) take up = bắt đầu tập một môn. (3) as … as: so sánh bằng. (4) compete for the title = tranh chức vô địch. (5) qualifying round = vòng loại (trước tứ kết). (6) for + khoảng thời gian (for so long). (7) the opposing team = đội đối phương. (8) confidence = sự tự tin."}
      ] },
    { title: "Đọc & điền từ (Open cloze)", instr: "Điền MỘT từ thích hợp vào mỗi chỗ trống.", tag: "reading",
      items: [
        {kind:"cloze", title:"Our first robotics competition", tag:"reading",
         text:"Last spring, our school took part {1} a national robotics competition for the first time. Each team had to build a robot {2} could carry small boxes across a table without dropping them. We had only six weeks to prepare, so we met every day after school.\n\nAt first, nothing worked. Our robot kept falling over, and some of us wanted to give {3}. However, our teacher reminded us that every team had problems at the beginning, {4} we kept trying. Slowly, the robot started to move more smoothly.\n\nOn the day of the competition, we were nervous because the other robots looked much {5} professional than ours. In the first round, our robot dropped one box, but it still scored enough points. We didn't win the final, {6} we came third out of forty teams.\n\nThe judges said our design was one of the simplest they {7} ever seen. 'Simple is often better,' one of them told us. We are already planning {8} next robot.",
         gaps:[
           {answers:["in"]},
           {answers:["that","which"]},
           {answers:["up"]},
           {answers:["so","and"]},
           {answers:["more"]},
           {answers:["but","yet"]},
           {answers:["had"]},
           {answers:["our","the"]}
         ],
         explain:"(1) take part in. (2) đại từ quan hệ that/which thay cho 'a robot'. (3) give up = bỏ cuộc. (4) so: nối kết quả. (5) much more + tính từ dài + than. (6) but: ý trái ngược. (7) the simplest they had ever seen: quá khứ hoàn thành. (8) planning our next robot."}
      ] },
    { title: "Chọn tiêu đề cho đoạn văn", instr: "Chọn tiêu đề phù hợp cho mỗi đoạn. Có 1 tiêu đề thừa.", tag: "reading",
      items: [
        {kind:"headings", tag:"reading",
         paras:[
           "Everyone who takes part in competitions loses sometimes. It can feel terrible, especially if you had been training for months and your family had come to watch. You may feel embarrassed or angry, and you might even want to give up the sport completely. These feelings are normal, and they usually show how much the competition meant to you.",
           "The first thing to do is to talk to someone you trust, such as a coach, a teammate or a parent. Keeping your disappointment inside often makes it grow. When you explain how you feel, other people can remind you of what you did well. They may also tell you about times when they lost and how they got over it.",
           "When you feel calmer, think carefully about what happened. Were you as well prepared as your opponents? Did you make the same mistake more than once? Write down two or three things that went wrong and one thing that went right. In this way, a defeat becomes useful information rather than just a bad memory.",
           "Finally, pick yourself up and decide what you want to achieve next. Your new goal should be realistic, for example improving your personal best or getting through the qualifying round next season. Having a clear target gives you a reason to keep training, and you will soon find that losing has made you a stronger competitor."
         ],
         headings:["Why losing feels so bad","Share your feelings","Look back and learn","Set yourself a new target","Why you should stop competing"],
         a:[0,1,2,3],
         explain:"Đoạn 1 nói về cảm giác khi thua; đoạn 2: nói chuyện với người mình tin tưởng; đoạn 3: xem lại lỗi để rút kinh nghiệm; đoạn 4: đặt mục tiêu mới. Tiêu đề 'Why you should stop competing' là tiêu đề thừa — bài khuyên KHÔNG bỏ cuộc."}
      ] },
    { title: "Sắp xếp sự việc", instr: "Chạm vào các câu theo đúng thứ tự xảy ra.", tag: "reading",
      items: [
        {kind:"seqorder", q:"Sắp xếp câu chuyện về cuộc thi nấu ăn của Mai theo đúng thứ tự.", tag:"reading",
         items:[
           "Mai had always been into cooking, so when she saw an advert for a junior cooking contest, she decided to apply.",
           "A few weeks later, she received an email saying that she had been chosen for the qualifying round.",
           "In the qualifying round, she had to make a dessert in just forty-five minutes.",
           "The judges loved her mango cake, and she went through to the final.",
           "In the final, she was so nervous that she burnt her first batch of pancakes.",
           "However, she picked herself up, started again and finished just in time.",
           "Although she came second, she said the contest had given her a lot of confidence."
         ],
         explain:"Trình tự: thấy quảng cáo và nộp đơn → được chọn vào vòng loại → làm món tráng miệng ở vòng loại → vào chung kết → bị cháy bánh → làm lại kịp giờ → về nhì nhưng tự tin hơn."},
        {kind:"seqorder", q:"Sắp xếp các bước tổ chức một giải đấu ở trường theo đúng thứ tự.", tag:"reading",
         items:[
           "First, the sports club decided which sport the tournament would be for and set a date.",
           "Next, they put up posters so that every class knew about the event.",
           "Then each class chose a team of five players and sent its list of names to the club.",
           "When all the lists had been received, the club made a timetable of matches.",
           "On the day, the teams played in groups, and the two best teams from each group went through to the semi-finals.",
           "Finally, the winning team was given a trophy at the end of the day."
         ],
         explain:"Chú ý từ chỉ thứ tự: First → Next → Then → When all the lists had been received → On the day → Finally."}
      ] },
    { title: "Tìm từ trong đoạn văn", instr: "Chạm vào từ có nghĩa được cho.", tag: "reading",
      items: [
        {kind:"tapword", q:"Tìm từ có nghĩa là 'bằng điểm, ngang nhau'.", text:"The two teams had been level for most of the match, but in the last minute our captain scored the winning goal.", answer:"level", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'bình tĩnh'.", text:"Before the race, every athlete looked nervous. Only the champion from last year seemed completely calm.", answer:"calm", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'khen ngợi'.", text:"The coach praised the players for their effort, even though they had lost the game.", answer:"praised", tag:"reading"},
        {kind:"tapword", q:"Tìm từ chỉ người 'trọng tài' trong trận đấu.", text:"The referee blew the whistle and sent off one of the defenders for a dangerous tackle.", answer:"referee", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'chiếc cúp (giải thưởng)'.", text:"After the final whistle, the captain lifted the trophy above her head while her teammates celebrated.", answer:"trophy", tag:"reading"}
      ] }
  ],
  vocab: [
    { title: "Kết hợp từ (Collocations)", instr: "Chọn TẤT CẢ các từ/cụm từ đi được với từ cho sẵn.", tag: "vocab",
      items: [
        {kind:"multi", q:"Which can go with <b>take</b>?", opts:["up a sport","part in a competition","a photo","a goal","a champion"], a:[0,1,2], explain:"take up a sport (bắt đầu tập), take part in (tham gia), take a photo (chụp ảnh). Ta nói 'score a goal', không nói 'take a goal'.", tag:"vocab"},
        {kind:"multi", q:"Which can go with <b>score</b>?", opts:["a goal","points","a match","a photo","a title"], a:[0,1], explain:"score a goal / score points. Với 'match' và 'title' ta dùng 'win'.", tag:"vocab"},
        {kind:"multi", q:"Which nouns can follow <b>win</b>?", opts:["a medal","a match","a title","an opponent","a competitor"], a:[0,1,2], explain:"win a medal / a match / a title. Với người (opponent, competitor) ta dùng 'beat': beat an opponent.", tag:"vocab"},
        {kind:"multi", q:"Which words can come before <b>sport</b>?", opts:["contact","competitive","individual","opposing","qualifying"], a:[0,1,2], explain:"contact sport, competitive sport, individual sport. 'opposing' đi với team, 'qualifying' đi với round.", tag:"vocab"},
        {kind:"multi", q:"Which words can come before <b>round</b> in a competition?", opts:["qualifying","first","final","opposing","champion"], a:[0,1,2], explain:"the qualifying round, the first round, the final round.", tag:"vocab"},
        {kind:"multi", q:"Which can go with <b>build</b>?", opts:["confidence","stronger relationships","a human tower","a goal","a match"], a:[0,1,2], explain:"build confidence, build stronger relationships, build a human tower. Ta nói 'score a goal', 'play/win a match'.", tag:"vocab"}
      ] },
    { title: "Từ không cùng nhóm", instr: "Chọn từ KHÔNG cùng nhóm với các từ còn lại.", tag: "vocab",
      items: [
        {kind:"mcq", q:"Which word is the odd one out?", opts:["competitor","contestant","challenger","tripod"], a:3, explain:"tripod (chân máy ảnh) là đồ vật; các từ còn lại chỉ người tham gia thi đấu.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["tripod","zoom lens","flash","referee"], a:3, explain:"referee (trọng tài) là người; các từ còn lại là thiết bị chụp ảnh.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["rugby","kabaddi","football","swimming"], a:3, explain:"swimming là môn thể thao cá nhân, không va chạm; rugby, kabaddi, football là môn đồng đội có va chạm.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["quarter-final","semi-final","qualifying round","silhouette"], a:3, explain:"silhouette (hình bóng) thuộc nhiếp ảnh; các từ còn lại là các vòng của một cuộc thi.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["confidence","patience","strength","champion"], a:3, explain:"champion (nhà vô địch) chỉ người; các từ còn lại là phẩm chất.", tag:"vocab"},
        {kind:"mcq", q:"Which is the odd one out?", opts:["so that","in order to","so as to","although"], a:3, explain:"although chỉ sự tương phản; so that, in order to, so as to đều chỉ mục đích.", tag:"vocab"},
        {kind:"mcq", q:"Which is the odd one out?", opts:["take up","join in","be into","give up"], a:3, explain:"give up = từ bỏ; các cụm còn lại đều mang nghĩa bắt đầu/tham gia/yêu thích một hoạt động.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["biased","unfair","one-sided","patient"], a:3, explain:"patient (kiên nhẫn) là phẩm chất tích cực; biased, unfair, one-sided đều chỉ sự thiên vị, không công bằng.", tag:"vocab"}
      ] },
    { title: "Từ đồng nghĩa / trái nghĩa", instr: "Chọn từ có nghĩa giống hoặc trái ngược với từ in đậm.", tag: "vocab",
      items: [
        {kind:"mcq", q:"Choose the word closest in meaning to <b>contestant</b>.", opts:["competitor","judge","coach","spectator"], a:0, explain:"contestant = competitor: người dự thi.", tag:"vocab"},
        {kind:"mcq", q:"Choose the OPPOSITE of <b>attack</b>.", opts:["defend","score","compete","capture"], a:0, explain:"attack (tấn công) ≠ defend (phòng thủ).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word closest in meaning to <b>take up</b> (a sport).", opts:["start","stop","watch","win"], a:0, explain:"take up a sport = start doing a sport.", tag:"vocab"},
        {kind:"mcq", q:"Choose the OPPOSITE of <b>give up</b> (a hobby).", opts:["continue","quit","stop","leave"], a:0, explain:"give up = quit/stop; trái nghĩa là continue (tiếp tục).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word closest in meaning to <b>biased</b>.", opts:["unfair","honest","confident","patient"], a:0, explain:"biased = thiên vị, không công bằng (unfair).", tag:"vocab"},
        {kind:"mcq", q:"Choose the OPPOSITE of <b>out of focus</b> (in a photo).", opts:["sharp","blurred","dark","bright"], a:0, explain:"out of focus = mờ, không nét (blurred); trái nghĩa là sharp (rõ nét).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word closest in meaning to <b>champion</b>.", opts:["winner","loser","beginner","referee"], a:0, explain:"champion = người thắng cuộc, nhà vô địch (winner).", tag:"vocab"},
        {kind:"mcq", q:"Choose the OPPOSITE of <b>confident</b>.", opts:["nervous","brave","calm","proud"], a:0, explain:"confident (tự tin) ≠ nervous (lo lắng, thiếu tự tin).", tag:"vocab"}
      ] },
    { title: "Đoán nghĩa từ ngữ cảnh", instr: "Đọc câu và chạm vào từ có nghĩa được cho.", tag: "vocab",
      items: [
        {kind:"tapword", q:"Tìm từ có nghĩa là 'quyết tâm, kiên định'.", text:"Despite the heavy rain, the determined runners refused to stop until they reached the finish.", answer:"determined", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'bị hoãn lại'.", text:"The match was postponed because the pitch was flooded. It will now take place next Saturday.", answer:"postponed", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'giành quyền tham dự, đủ điều kiện vào'.", text:"Only the top four teams in the league qualify for the national championship.", answer:"qualify", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'khán giả (người xem trực tiếp)'.", text:"Spectators filled the stadium hours before the final began.", answer:"Spectators", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'bị loại (vì phạm luật)'.", text:"She was disqualified from the race because she started before the signal.", answer:"disqualified", tag:"vocab"}
      ] },
    { title: "Hoàn thành câu với từ cho sẵn", instr: "Chọn từ trong khung để điền vào chỗ trống. Có 2 từ thừa.", tag: "vocab",
      wordbank: ["confidence","patience","opposing","qualifying","tripod","champion","biased","defend","silhouette","contestants"],
      items: [
        {kind:"gap", s:"Learning to play chess well takes a lot of ___, because one game can last for hours.", answers:["patience"], tag:"vocab"},
        {kind:"gap", s:"The goalkeeper's main job is to ___ the goal.", answers:["defend"], tag:"vocab"},
        {kind:"gap", s:"People said the referee was ___ because he always gave decisions to the home team.", answers:["biased"], tag:"vocab"},
        {kind:"gap", s:"Only twelve of the sixty runners got through the ___ round.", answers:["qualifying"], tag:"vocab"},
        {kind:"gap", s:"Keep the camera steady by putting it on a ___.", answers:["tripod"], tag:"vocab"},
        {kind:"gap", s:"She has won the national title three years in a row, so she is the current ___.", answers:["champion"], tag:"vocab"},
        {kind:"gap", s:"In kabaddi, the attacking player runs into the ___ team's half of the court.", answers:["opposing"], tag:"vocab"},
        {kind:"gap", s:"All the ___ on the TV quiz show had to answer questions about sport.", answers:["contestants"], tag:"vocab"}
      ] }
  ],
  grammar: [
    { title: "Tìm và sửa lỗi sai", instr: "Mỗi câu có MỘT từ sai. Chạm vào từ sai rồi gõ từ đúng.", tag: "grammar",
      items: [
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"By the time we arrived, the match has already started.", answer:"has", fix:["had"], explain:"By the time + quá khứ đơn → hành động xảy ra trước dùng quá khứ hoàn thành: had already started.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"She had been train for two hours when it started to rain.", answer:"train", fix:["training"], explain:"Quá khứ hoàn thành tiếp diễn: had been + V-ing → had been training.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Rugby is more dangerous as football.", answer:"as", fix:["than"], explain:"So sánh hơn: more + tính từ dài + than.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"This is the less stressful sport I have ever tried.", answer:"less", fix:["least"], explain:"Sau 'the' và có 'I have ever tried' → so sánh nhất: the least (ít … nhất).", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"The winner had been choose before the results were announced.", answer:"choose", fix:["chosen"], explain:"Bị động quá khứ hoàn thành: had been + V3 → had been chosen.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Swimming is gooder for your back than running.", answer:"gooder", fix:["better"], explain:"good là tính từ bất quy tắc: good → better → best.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Before the competition, the players had been helping by a famous coach.", answer:"helping", fix:["helped"], explain:"Các cầu thủ ĐƯỢC giúp (có 'by a famous coach') → bị động: had been helped.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"She trained every evening last year so that she can win the title.", answer:"can", fix:["could","would"], explain:"Câu ở quá khứ (trained, last year) → so that + could/would.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"You can join the team provide that you come to every practice.", answer:"provide", fix:["provided","providing"], explain:"Cụm từ nối: provided (that) = miễn là, với điều kiện là.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Our team played badly than the other team, so we lost.", answer:"badly", fix:["worse"], explain:"Có 'than' → cần so sánh hơn của badly: badly → worse → worst.", tag:"grammar"}
      ] },
    { title: "Viết lại câu với từ khoá", instr: "Viết lại câu sao cho nghĩa không đổi, BẮT BUỘC dùng từ in hoa.", tag: "grammar",
      items: [
        {kind:"rewrite", key:"FASTEST", s:"Nobody in the team is as fast as Lan.", prompt:"Lan ___", answers:["Lan is the fastest in the team.","Lan is the fastest player in the team.","Lan is the fastest person in the team.","Lan is the fastest member of the team.","Lan is the fastest in her team.","Lan is the fastest player in her team."], explain:"Không ai nhanh bằng Lan = Lan nhanh nhất: the fastest.", tag:"grammar"},
        {kind:"rewrite", key:"LESS", s:"Judo is more tiring than yoga.", prompt:"Yoga ___", answers:["Yoga is less tiring than judo."], explain:"more … than ↔ less … than (đảo hai đối tượng).", tag:"grammar"},
        {kind:"rewrite", key:"AS", s:"Tennis is easier than golf.", prompt:"Golf ___", answers:["Golf is not as easy as tennis.","Golf isn't as easy as tennis."], explain:"A dễ hơn B = B không dễ bằng A: not as … as.", tag:"grammar"},
        {kind:"rewrite", key:"BEEN", s:"Someone had stolen the trophy before the final.", prompt:"The trophy ___", answers:["The trophy had been stolen before the final."], explain:"Bị động quá khứ hoàn thành: had been + V3 (stolen).", tag:"grammar"},
        {kind:"rewrite", key:"FOR", s:"They started training at 7 o'clock. At 9 o'clock it began to snow. They were still training.", prompt:"They had ___", answers:["They had been training for two hours when it began to snow.","They had been training for two hours when it started to snow.","They had been training for two hours before it began to snow.","They had been training for two hours before it started to snow.","They had been training for 2 hours when it began to snow.","They had been training for 2 hours when it started to snow."], explain:"Hành động kéo dài tới một mốc quá khứ: had been + V-ing + for + khoảng thời gian.", tag:"grammar"},
        {kind:"rewrite", key:"UP", s:"I started playing badminton two years ago.", prompt:"I ___", answers:["I took up badminton two years ago.","I took badminton up two years ago.","I took up playing badminton two years ago."], explain:"take up = bắt đầu tập (một môn).", tag:"grammar"},
        {kind:"rewrite", key:"GAVE", s:"Lam stopped going to judo classes last year.", prompt:"Lam ___", answers:["Lam gave up judo last year.","Lam gave up going to judo classes last year.","Lam gave up judo classes last year.","Lam gave up his judo classes last year.","Lam gave judo up last year."], explain:"give up (+ V-ing / danh từ) = từ bỏ.", tag:"grammar"},
        {kind:"rewrite", key:"ALREADY", s:"First the match finished. Then we arrived.", prompt:"When we arrived, ___", answers:["When we arrived, the match had already finished.","When we arrived the match had already finished."], explain:"Việc xảy ra trước dùng quá khứ hoàn thành: had already finished.", tag:"grammar"}
      ] },
    { title: "Chọn TẤT CẢ câu đúng", instr: "Mỗi câu hỏi có từ 1 đến 3 câu đúng. Chọn tất cả.", tag: "grammar",
      items: [
        {kind:"multi", q:"Which sentences are correct? (past perfect)", opts:["When I got to the stadium, the race had already started.","She had been waiting for an hour when the bus finally came.","He had saw the film before, so he didn't want to watch it again.","By the time the coach arrived, we have finished our warm-up."], a:[0,1], explain:"Câu 3 sai: had seen (không phải had saw). Câu 4 sai: phải là had finished.", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (comparatives and superlatives)", opts:["Swimming is less dangerous than rugby.","My brother is more taller than me.","This is the most exciting match I've ever seen.","Linh plays chess better than anyone in our class."], a:[0,2,3], explain:"Câu 2 sai: taller (tính từ ngắn không dùng thêm 'more').", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (as … as)", opts:["I can't jump as high as my sister.","This test was not as difficult than the last one.","Our team is as good as theirs.","He runs as faster as his coach."], a:[0,2], explain:"Câu 2 sai: not as difficult AS. Câu 4 sai: as fast as (dùng dạng nguyên, không dùng so sánh hơn).", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (past perfect passive)", opts:["All the tickets had been sold before we arrived.","The champion had been gave a medal by the president.","The rules had been explain to the players.","The pitch had been repaired before the new season began."], a:[0,3], explain:"Câu 2 sai: had been given. Câu 3 sai: had been explained.", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (connectives)", opts:["She trained hard so that she could win a place in the team.","He went to the gym early in order to warm up.","Although he was injured, but he kept playing.","You can play provided that you wear the right shoes."], a:[0,1,3], explain:"Câu 3 sai: không dùng 'although' và 'but' cùng nhau — bỏ 'but'.", tag:"grammar"}
      ] },
    { title: "Chia động từ trong đoạn văn", instr: "Chia động từ trong ngoặc ở dạng đúng (quá khứ đơn, quá khứ hoàn thành, bị động, so sánh…).", tag: "grammar",
      items: [
        {kind:"cloze", title:"Hoa's first half-marathon", tag:"grammar",
         text:"Last Sunday, my sister Hoa ran her first half-marathon. She {1} (train) for it since January, and before that she {2} (never / run) more than ten kilometres. When we arrived at the start, hundreds of runners {3} (already / arrive).\n\nThe weather was hot, and after fifteen kilometres Hoa {4} (feel) exhausted. She told us later that she {5} (think) about stopping for several minutes, but then she saw us cheering by the road. She {6} (finish) the race in just under two hours.\n\nThe next day, we found out that her time {7} (record) wrongly by the organisers, and she had actually been three minutes faster! Next year, she wants to run even {8} (fast).",
         gaps:[
           {answers:["had been training","'d been training","had trained"]},
           {answers:["had never run","'d never run"]},
           {answers:["had already arrived"]},
           {answers:["felt","was feeling"]},
           {answers:["had been thinking","'d been thinking","had thought"]},
           {answers:["finished"]},
           {answers:["had been recorded","was recorded"]},
           {answers:["faster"]}
         ],
         explain:"(1) kéo dài từ tháng 1 tới Chủ nhật → had been training. (2) had never run. (3) had already arrived (xảy ra trước khi chúng tôi tới). (4) felt: quá khứ đơn. (5) had been thinking: kéo dài trước khi thấy gia đình. (6) finished. (7) bị động quá khứ hoàn thành: had been recorded. (8) so sánh hơn: faster."}
      ] }
  ],
  writing: [
    { title: "Nối câu với từ nối", instr: "Nối hai câu thành một (hoặc viết lại), BẮT BUỘC dùng từ/cụm từ in hoa.", tag: "writing",
      items: [
        {kind:"rewrite", key:"ALTHOUGH", s:"The weather was terrible. The match went ahead.", prompt:"Although ___", answers:["Although the weather was terrible, the match went ahead.","The match went ahead although the weather was terrible."], explain:"Although + mệnh đề 1, mệnh đề 2 (không dùng thêm 'but').", tag:"writing"},
        {kind:"rewrite", key:"HOWEVER", s:"Kabaddi looks simple. It requires a lot of skill.", prompt:"Kabaddi looks simple. ___", answers:["Kabaddi looks simple. However, it requires a lot of skill.","Kabaddi looks simple; however, it requires a lot of skill."], explain:"However đứng đầu câu thứ hai, sau nó có dấu phẩy.", tag:"writing"},
        {kind:"rewrite", key:"DESPITE", s:"It was raining heavily. They continued the race.", prompt:"Despite ___", answers:["Despite the heavy rain, they continued the race.","Despite the rain, they continued the race.","Despite it raining heavily, they continued the race.","Despite the fact that it was raining heavily, they continued the race."], explain:"Despite + danh từ / V-ing / the fact that + mệnh đề.", tag:"writing"},
        {kind:"rewrite", key:"WHO", s:"Linh is our captain. She has played for the school for four years.", prompt:"Linh, ___", answers:["Linh, who has played for the school for four years, is our captain.","Linh, who is our captain, has played for the school for four years."], explain:"Mệnh đề quan hệ không xác định với 'who' (chỉ người), đặt giữa hai dấu phẩy.", tag:"writing"},
        {kind:"rewrite", key:"SO THAT", s:"We trained every morning. We wanted to be ready for the final.", prompt:"We trained every morning ___", answers:["We trained every morning so that we would be ready for the final.","We trained every morning so that we could be ready for the final.","We trained every morning so that we were ready for the final."], explain:"so that + S + would/could + V: chỉ mục đích (câu ở quá khứ).", tag:"writing"},
        {kind:"rewrite", key:"IN ORDER TO", s:"She got up early. She wanted to catch the first bus to the stadium.", prompt:"She got up early ___", answers:["She got up early in order to catch the first bus to the stadium."], explain:"in order to + V nguyên mẫu: để (làm gì).", tag:"writing"},
        {kind:"rewrite", key:"AS A RESULT", s:"The team didn't practise enough. They lost every match.", prompt:"The team didn't practise enough. ___", answers:["The team didn't practise enough. As a result, they lost every match.","The team did not practise enough. As a result, they lost every match.","The team didn't practice enough. As a result, they lost every match."], explain:"As a result, … : giới thiệu kết quả, đứng đầu câu thứ hai.", tag:"writing"},
        {kind:"rewrite", key:"WHICH", s:"The stadium was built in 1990. It can hold 40,000 people.", prompt:"The stadium, ___", answers:["The stadium, which was built in 1990, can hold 40,000 people.","The stadium, which can hold 40,000 people, was built in 1990."], explain:"Mệnh đề quan hệ không xác định với 'which' (chỉ vật).", tag:"writing"}
      ] },
    { title: "Cấu trúc đoạn văn", instr: "Chọn đáp án đúng nhất về cách viết đoạn văn.", tag: "writing",
      items: [
        {kind:"mcq", q:"Which is the best topic sentence for a paragraph about the benefits of team sports?", opts:["Team sports offer young people many important benefits.","My friend plays basketball on Saturdays.","Football was invented a long time ago.","Some people prefer watching sport on TV."], a:0, explain:"Câu chủ đề phải nêu ý chính của cả đoạn (lợi ích của thể thao đồng đội).", tag:"writing"},
        {kind:"mcq", q:"'Taking part in competitions can teach teenagers valuable lessons. First, they learn how to deal with pressure. Second, they discover that hard work brings results. ___' Choose the best concluding sentence.", opts:["In conclusion, competitions help young people prepare for adult life.","Second, competitions are often held at weekends.","My cousin won a chess competition last year.","Some competitions are very expensive to enter."], a:0, explain:"Câu kết luận tóm lại ý chính, thường bắt đầu bằng In conclusion / For these reasons.", tag:"writing"},
        {kind:"mcq", q:"Which sentence does NOT belong in a paragraph about how to prepare for a race?", opts:["Get plenty of sleep the night before.","Eat a light meal a few hours before the start.","Warm up for at least ten minutes.","The first modern Olympic Games were held in 1896."], a:3, explain:"Câu về lịch sử Thế vận hội không liên quan đến cách chuẩn bị cho cuộc đua.", tag:"writing"},
        {kind:"mcq", q:"Which is the best supporting example for this sentence: 'Sport can help shy students build confidence.'?", opts:["When Nam joined the volleyball team, he started speaking up more in class.","Volleyball was invented in the USA in 1895.","Many sports need expensive equipment.","Some sports are played indoors."], a:0, explain:"Ví dụ về Nam cho thấy thể thao giúp một bạn nhút nhát tự tin hơn.", tag:"writing"},
        {kind:"mcq", q:"In a 'for and against' essay, where do you usually sum up both sides and give your final opinion?", opts:["In the conclusion","In the first sentence of the introduction","In the middle of the arguments for","You never give an opinion"], a:0, explain:"Theo cấu trúc bài luận: Introduction → arguments for → arguments against → Conclusion (tóm tắt và nêu ý kiến cuối cùng).", tag:"writing"}
      ] },
    { title: "Sắp xếp thành đoạn văn", instr: "Chạm vào các câu theo thứ tự: câu chủ đề → các ý hỗ trợ → câu kết luận.", tag: "writing",
      items: [
        {kind:"seqorder", q:"Sắp xếp thành đoạn văn hoàn chỉnh về thể thao cá nhân.", tag:"writing",
         items:[
           "Individual sports have several advantages for teenagers.",
           "First, you can train whenever you want, because you do not have to wait for teammates.",
           "Second, you are responsible for your own results, which teaches you discipline.",
           "In addition, you can measure your progress clearly, for example by improving your personal best.",
           "For these reasons, individual sports are a great choice for many young people."
         ],
         explain:"Câu chủ đề → First → Second → In addition → For these reasons (kết luận)."},
        {kind:"seqorder", q:"Sắp xếp thành đoạn văn 'for and against' về ngày hội thể thao.", tag:"writing",
         items:[
           "Many schools hold an annual sports day, but not everyone thinks it is a good idea.",
           "On the one hand, sports day encourages students to be active and to support their classmates.",
           "It also gives talented athletes a chance to show their skills.",
           "On the other hand, students who are not sporty can feel embarrassed when they finish last.",
           "In conclusion, sports day is valuable, provided that every student can take part in an activity they enjoy."
         ],
         explain:"Giới thiệu vấn đề → On the one hand (ủng hộ) → It also (bổ sung ý ủng hộ) → On the other hand (phản đối) → In conclusion."}
      ] },
    { title: "Viết đoạn văn có hướng dẫn", instr: "Làm theo dàn ý, dùng các từ gợi ý và viết đủ số từ.", tag: "writing",
      items: [
        {kind:"guided", tag:"writing",
         prompt:"Viết một đoạn văn <b>for and against</b> (khoảng 90–120 từ) trả lời câu hỏi: <i>Should students be allowed to miss lessons to take part in sports competitions?</i>",
         outline:[
           "Câu chủ đề: giới thiệu vấn đề — nhiều học sinh thi đấu thể thao; có nên cho phép nghỉ học để đi thi không?",
           "Ý ủng hộ: On the one hand, … (cơ hội hiếm có, đại diện cho trường, xây dựng sự tự tin)",
           "Bổ sung: In addition, … (học được kỷ luật, tinh thần đồng đội)",
           "Ý phản đối: On the other hand, … (bỏ lỡ bài học, khó theo kịp, vẫn phải thi cử)",
           "Kết luận: In conclusion, although …, I believe … (có thể thêm điều kiện với 'provided that')"
         ],
         useWords:["on the one hand","on the other hand","in addition","although","competitor","confidence"],
         minWords:90,
         sample:"Many talented students take part in sports competitions, but should they be allowed to miss lessons to do so? On the one hand, a national competition is a rare opportunity, and competing for your school can give you a lot of confidence. In addition, young athletes learn discipline and teamwork, which are useful in every part of life. On the other hand, students who miss lessons often find it hard to catch up, and every competitor still has exams to pass. In conclusion, although schoolwork is very important, I believe students should be allowed to miss a few lessons, provided that they catch up on the work they have missed.",
         criteria:"Có câu chủ đề nêu rõ vấn đề; ít nhất 1 ý ủng hộ và 1 ý phản đối, có lý do/ví dụ; dùng đúng On the one hand / On the other hand / In addition / although; kết luận nêu ý kiến riêng; dùng đủ các từ gợi ý; khoảng 90–120 từ."},
        {kind:"guided", tag:"writing",
         prompt:"Viết một đoạn văn <b>kể chuyện</b> (khoảng 80–120 từ) về một lần em (hoặc một người em biết) thua trong một cuộc thi nhưng không bỏ cuộc.",
         outline:[
           "Mở đầu: cuộc thi gì, khi nào; em đã chuẩn bị ra sao (We had been training …)",
           "Diễn biến 1: vòng loại (qualifying round) diễn ra thế nào",
           "Diễn biến 2: trận/vòng quyết định — đội đối phương (the opposing team) mạnh ra sao, kết quả",
           "Cảm xúc: em có muốn bỏ cuộc (give up) không? However, … ai/điều gì giúp em",
           "Kết thúc: em đã làm gì sau đó (As soon as …) và học được gì"
         ],
         useWords:["had been training","qualifying round","opposing","give up","however","as soon as"],
         minWords:80,
         sample:"Last year, my volleyball team entered the city schools' tournament. We had been training three times a week since September, so we felt ready. We won all our matches in the qualifying round and reached the semi-final. Unfortunately, the opposing team was much taller than us, and they won easily. After the match, I felt so disappointed that I wanted to give up volleyball. However, our coach told us that losing is a fact of life and that every champion has lost many times. As soon as we got back to school, we started training again. This year, we came second in the tournament, and I am very proud of my team.",
         criteria:"Kể theo đúng trình tự thời gian; dùng quá khứ đơn và ít nhất 1 câu quá khứ hoàn thành (tiếp diễn); có từ vựng thi đấu (qualifying round, opposing team, semi-final…); dùng từ nối However, As soon as; nêu cảm xúc và bài học; dùng đủ các từ gợi ý; khoảng 80–120 từ."}
      ] }
  ]
});

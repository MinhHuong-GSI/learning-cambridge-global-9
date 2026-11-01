CG9.addPracticePack({
  unit: 5,
  reading: [
    { title: "Đọc & chọn từ đúng (Multiple-choice cloze)", instr: "Đọc đoạn văn và chọn từ đúng nhất cho mỗi chỗ trống.", tag: "reading",
      items: [
        {kind:"cloze", title:"Grandma's digital assistant", text:"Last year, my grandmother, who lives on her own, was given a digital assistant for her birthday. At first she was not sure about it. 'I don't need a machine to tell me what to do,' she said. However, she soon changed her {1}. The device is connected to the lights, the heating and the front door, {2} means she no longer has to walk around the house to switch things on and off. It also reminds her {3} her medicine every morning.\n\nLast month, my uncle had some extra sensors {4} in her kitchen. If she falls, a message {5} to his phone automatically. My grandmother says she {6} feel safer now, even though she still prefers talking to real people.\n\nOf course, not everything is perfect. The assistant sometimes misunderstands her accent, and she worries that her personal {7} might be collected and sold to other companies. Our family thinks the benefits are greater than the risks. Next year, we will be {8} a video screen so that she can chat with her grandchildren face to face every evening.", gaps:[
          {opts:["mind","head","brain","memory"], a:0},
          {opts:["which","that","what","who"], a:0},
          {opts:["to take","taking","take","taken"], a:0},
          {opts:["fitted","fit","fitting","to fit"], a:0},
          {opts:["will be sent","will send","is sending","has sent"], a:0},
          {opts:["does","is","has","do"], a:0},
          {opts:["data","evidence","cargo","fuel"], a:0},
          {opts:["adding","add","added","to add"], a:0}
        ], explain:"(1) change your mind = đổi ý. (2) ', which' chỉ cả mệnh đề trước, không dùng 'that' sau dấu phẩy. (3) remind sb to do sth. (4) have something done: had + sensors + fitted. (5) bị động tương lai will be + P.P. (6) does nhấn mạnh + V nguyên mẫu. (7) personal data = dữ liệu cá nhân. (8) tương lai tiếp diễn will be + V-ing.", tag:"reading"}
      ] },
    { title: "Đọc & điền từ (Open cloze)", instr: "Đọc đoạn văn và điền MỘT từ thích hợp vào mỗi chỗ trống.", tag: "reading",
      items: [
        {kind:"cloze", title:"The story of the emoji", text:"Today, millions of emojis are sent every minute, but the very first set {1} created in 1999 by a Japanese designer called Shigetaka Kurita. He was working for a mobile phone company {2} wanted to make its messages more fun. Text messages at that time were very short, so it was difficult {3} show feelings with words alone. Kurita designed 176 tiny pictures, {4} only twelve pixels wide and twelve pixels high.\n\nThe idea quickly became popular in Japan, but it took more than ten years {5} emojis to spread around the world. When smartphone companies started to include them on {6} keyboards, people everywhere began using them. In 2015, the 'face with tears of joy' emoji was even chosen as the Word of the Year by a famous English dictionary.\n\nSome people think emojis are making us lazy writers. {7}, others believe they help us to show emotions that are hard to put into words. Kurita's original designs are now kept at the Museum of Modern Art in New York, {8} visitors can see them on display.", gaps:[
          {answers:["was"]},
          {answers:["which","that"]},
          {answers:["to"]},
          {answers:["each","all"]},
          {answers:["for"]},
          {answers:["their","the"]},
          {answers:["However","Nevertheless"]},
          {answers:["where"]}
        ], explain:"(1) bị động quá khứ: was created. (2) đại từ quan hệ chỉ vật: which/that. (3) it is difficult to + V. (4) each = mỗi cái. (5) it takes + thời gian + for sb/sth + to V. (6) tính từ sở hữu their. (7) từ nối chỉ sự đối lập đầu câu: However. (8) where thay cho nơi chốn (museum).", tag:"reading"}
      ] },
    { title: "Chọn tiêu đề cho đoạn văn", instr: "Chọn tiêu đề phù hợp cho mỗi đoạn. Có MỘT tiêu đề thừa.", tag: "reading",
      items: [
        {kind:"headings", paras:[
          "A self-driving car uses cameras, radar and sensors to 'see' the road around it. A powerful computer, which works like a brain, processes all this data in a fraction of a second. It then decides when to speed up, slow down or turn. Most of these vehicles are electric, so they are also quieter and cleaner than ordinary cars.",
          "Supporters say that self-driving cars will save thousands of lives. Most road accidents are caused by human mistakes: drivers get tired, look at their phones or drive too fast. A computer never gets distracted. Elderly people and people with disabilities will also be able to travel on their own, which will make them much more independent.",
          "However, the technology is not perfect yet. Heavy rain and snow can confuse the sensors, and some test cars have crashed into objects that they did not recognise. There are also difficult questions. For example, if a self-driving car has an accident, who is responsible: the passenger, the owner or the company that made it?",
          "So what will our roads look like in twenty years' time? Many experts think we will be travelling in shared self-driving taxis instead of owning cars. Car parks will be turned into gardens and homes, and traffic jams may become a thing of the past. Others are less optimistic and believe that people will always want to drive themselves."
        ], headings:[
          "Problems still to be solved",
          "How the car 'sees' and thinks",
          "Why self-driving cars cost less",
          "Different views of the future",
          "A safer way to travel for everyone"
        ], a:[1,4,0,3], explain:"Đoạn 1: cách xe 'nhìn' và xử lý dữ liệu. Đoạn 2: lợi ích về an toàn và sự độc lập. Đoạn 3: vấn đề còn tồn tại (However…). Đoạn 4: các ý kiến khác nhau về tương lai. Tiêu đề về giá tiền là tiêu đề thừa.", tag:"reading"}
      ] },
    { title: "Sắp xếp sự việc", instr: "Sắp xếp các câu theo đúng trình tự.", tag: "reading",
      items: [
        {kind:"seqorder", q:"How a drone delivers your parcel", items:[
          "First, you order a new pair of headphones on a shopping app.",
          "Within minutes, a worker at the warehouse puts the headphones in a light box.",
          "Next, the box is attached to the bottom of a delivery drone.",
          "The drone then flies to your address, using GPS to find the way.",
          "When it arrives above your garden, it slowly lowers the box on a cable.",
          "Finally, the drone flies back to the warehouse, ready for its next delivery."
        ], vi:"Quy trình giao hàng bằng máy bay không người lái.", explain:"Chú ý các từ chỉ trình tự: First → Within minutes → Next → then → When it arrives → Finally.", tag:"reading"},
        {kind:"seqorder", q:"Lan's first vlog", items:[
          "Lan had always wanted to start her own vlog about cooking.",
          "One weekend, she borrowed her brother's camera and filmed herself making spring rolls.",
          "After that, she spent the whole evening editing the video and adding music.",
          "Before going to bed, she posted it on a video platform with the hashtag #easyvietnamesefood.",
          "The next morning, she was amazed to see that it already had more than 500 likes.",
          "Since then, she has posted a new video every Saturday."
        ], vi:"Câu chuyện về video blog đầu tiên của Lan.", explain:"Quay video → chỉnh sửa → đăng → sáng hôm sau có lượt thích → từ đó đến nay (Since then).", tag:"reading"}
      ] },
    { title: "Tìm từ trong đoạn văn", instr: "Đọc đoạn trích và chạm vào từ đúng.", tag: "reading",
      items: [
        {kind:"tapword", q:"Tìm từ có nghĩa là 'hàng hoá chở trên tàu'.", text:"Archaeologists used a remote-controlled robot to explore the wreck. Among the cargo, they found jars, coins and other objects that were more than 2,000 years old.", answer:"cargo", tag:"reading"},
        {kind:"tapword", q:"Find the word that means 'a need to do something regularly without being able to stop'.", text:"My cousin spends hours watching videos every night. He says he can stop whenever he wants, but I think it has become an addiction.", answer:"addiction", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'làm xao nhãng'.", text:"Many teenagers find it hard to concentrate on homework when their phone keeps buzzing. Even a short message can distract them for several minutes.", answer:"distract", tag:"reading"},
        {kind:"tapword", q:"Find the word that means 'including people from many different countries and cultures'.", text:"The ancient port was very cosmopolitan: traders from Greece, Egypt, India and China all lived and worked there side by side.", answer:"cosmopolitan", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'nền tảng (mạng xã hội)'.", text:"Before you post a photo of your friends, ask them first. Some people do not want their pictures to be shared on a public platform.", answer:"platform", tag:"reading"}
      ] }
  ],
  vocab: [
    { title: "Kết hợp từ (Collocations)", instr: "Chọn TẤT CẢ các từ có thể kết hợp đúng.", tag: "vocab",
      items: [
        {kind:"multi", q:"Which words can go with 'time' to make a common phrase? (… time)", opts:["screen","save","waste","build","say"], a:[0,1,2], explain:"screen time (thời gian dùng màn hình), save time (tiết kiệm thời gian), waste time (lãng phí thời gian).", tag:"vocab"},
        {kind:"multi", q:"Which verbs can go with 'a selfie'?", opts:["take","post","play","do","send"], a:[0,1,4], explain:"take a selfie (chụp), post a selfie (đăng), send a selfie (gửi). Không nói 'play/do a selfie'.", tag:"vocab"},
        {kind:"multi", q:"Which words can go before 'technology'?", opts:["smart","cutting-edge","digital","heavy","tall"], a:[0,1,2], explain:"smart technology, cutting-edge technology, digital technology đều là cụm phổ biến.", tag:"vocab"},
        {kind:"multi", q:"Which verbs can go with 'data'?", opts:["collect","analyse","wear","cook","grow"], a:[0,1], explain:"collect data (thu thập dữ liệu), analyse data (phân tích dữ liệu).", tag:"vocab"},
        {kind:"multi", q:"Which words can follow 'get' (meaning 'become')?", opts:["distracted","bored","addiction","empathy","evidence"], a:[0,1], explain:"get + tính từ: get distracted (bị xao nhãng), get bored (thấy chán). addiction, empathy, evidence là danh từ.", tag:"vocab"},
        {kind:"multi", q:"Which nouns can follow 'make a …'?", opts:["prediction","discovery","selfie","research","homework"], a:[0,1], explain:"make a prediction (đưa ra dự đoán), make a discovery (có phát hiện). Ta nói take a selfie, do research, do homework.", tag:"vocab"}
      ] },
    { title: "Từ không cùng nhóm", instr: "Chọn từ KHÔNG cùng nhóm với các từ còn lại.", tag: "vocab",
      items: [
        {kind:"mcq", q:"Which word is the odd one out?", opts:["hashtag","meme","selfie","shipwreck"], a:3, explain:"shipwreck (xác tàu đắm) thuộc chủ đề khảo cổ; ba từ còn lại là thuật ngữ mạng xã hội.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["sensor","drone","robot","empathy"], a:3, explain:"empathy (sự đồng cảm) là cảm xúc; ba từ còn lại là thiết bị/máy móc.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["archaeologist","artefact","shipwreck","emoji"], a:3, explain:"emoji thuộc chủ đề mạng xã hội; ba từ còn lại thuộc chủ đề khảo cổ học.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["electric vehicle","self-driving car","drone","cargo"], a:3, explain:"cargo là hàng hoá được chở; ba từ còn lại là phương tiện có thể di chuyển.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["socialise","chat","interact","scan"], a:3, explain:"scan (quét) là việc máy móc làm; socialise, chat, interact đều là giao tiếp với người khác.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["hardware","software","platform","fuel"], a:3, explain:"fuel (nhiên liệu) dùng cho xe cộ; ba từ còn lại liên quan đến máy tính.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["invent","demonstrate","illustrate","evidence"], a:3, explain:"evidence là danh từ; invent, demonstrate, illustrate là động từ.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["automatically","properly","quickly","friendly"], a:3, explain:"friendly là tính từ (dù có đuôi -ly); ba từ còn lại là trạng từ.", tag:"vocab"}
      ] },
    { title: "Từ đồng nghĩa / trái nghĩa", instr: "Chọn từ/cụm từ đồng nghĩa hoặc trái nghĩa theo yêu cầu.", tag: "vocab",
      items: [
        {kind:"mcq", q:"Choose the meaning CLOSEST to 'cutting-edge'.", opts:["very modern","very old","very cheap","very dangerous"], a:0, explain:"cutting-edge = hiện đại, tân tiến nhất.", tag:"vocab"},
        {kind:"mcq", q:"Choose the meaning CLOSEST to 'ground-breaking'.", opts:["easily broken","completely new and important","very boring","found under the ground"], a:1, explain:"ground-breaking = đột phá, hoàn toàn mới và quan trọng.", tag:"vocab"},
        {kind:"mcq", q:"Choose the word OPPOSITE in meaning to 'automatically'.", opts:["quickly","digitally","manually","properly"], a:2, explain:"automatically (tự động) >< manually (bằng tay, thủ công).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word CLOSEST in meaning to 'evidence'.", opts:["opinion","prediction","rumour","proof"], a:3, explain:"evidence = proof (bằng chứng).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word OPPOSITE in meaning to 'ancient'.", opts:["modern","historic","old","traditional"], a:0, explain:"ancient (cổ xưa) >< modern (hiện đại).", tag:"vocab"},
        {kind:"mcq", q:"Choose the meaning CLOSEST to 'socialise'.", opts:["stay at home alone","spend time with other people","work very hard","sell things online"], a:1, explain:"socialise = dành thời gian vui vẻ cùng người khác.", tag:"vocab"},
        {kind:"mcq", q:"Choose the word OPPOSITE in meaning to 'reveal'.", opts:["show","discover","hide","explain"], a:2, explain:"reveal (tiết lộ, cho thấy) >< hide (che giấu).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word CLOSEST in meaning to 'predict'.", opts:["remember","invent","repair","forecast"], a:3, explain:"predict = forecast (dự đoán, dự báo).", tag:"vocab"}
      ] },
    { title: "Đoán nghĩa từ ngữ cảnh", instr: "Đọc câu, đoán nghĩa từ ngữ cảnh và chạm vào từ đúng.", tag: "vocab",
      items: [
        {kind:"tapword", q:"Tìm từ có nghĩa là 'dễ vỡ'.", text:"The museum used 3D printers to make perfect copies of the fragile vases, so visitors could touch them without breaking anything.", answer:"fragile", tag:"vocab"},
        {kind:"tapword", q:"Find the word that means 'a line showing events in the order in which they happened'.", text:"Our teacher asked us to design a timeline showing the most important inventions of the last hundred years.", answer:"timeline", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'chạy bằng, được cung cấp năng lượng bởi'.", text:"This little radio is powered by the sun, so you never need to buy batteries for it.", answer:"powered", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'tràn ngập, gửi đến ồ ạt'.", text:"Thousands of fans flooded the singer's account with messages after she posted a selfie from the concert.", answer:"flooded", tag:"vocab"},
        {kind:"tapword", q:"Find the word that means 'the ability to understand how another person feels'.", text:"Without empathy, it is difficult to understand why a friend feels sad or angry.", answer:"empathy", tag:"vocab"}
      ] },
    { title: "Hoàn thành câu với từ cho sẵn", instr: "Chọn từ trong khung để hoàn thành câu. Có 2 từ thừa.", tag: "vocab",
      wordbank: ["evidence","spam","drone","timeline","engraved","distracted","voice recognition","era","prediction","socialise"],
      items: [
        {kind:"gap", s:"Please delete those emails from people you don't know – they are probably ___.", answers:["spam"], tag:"vocab"},
        {kind:"gap", s:"The parcel arrived in less than an hour because it was delivered by ___.", answers:["drone"], tag:"vocab"},
        {kind:"gap", s:"Scientists have found no clear ___ that this app improves your memory.", answers:["evidence"], tag:"vocab"},
        {kind:"gap", s:"Her grandfather had her name ___ onto a silver ring for her birthday.", answers:["engraved"], tag:"vocab"},
        {kind:"gap", s:"I can't do my homework with the TV on – I get ___ too easily.", answers:["distracted"], tag:"vocab"},
        {kind:"gap", s:"My grandfather can't see the keyboard very well, so he uses ___ to send messages.", answers:["voice recognition"], tag:"vocab"},
        {kind:"gap", s:"These coins come from the Roman ___, about 2,000 years ago.", answers:["era"], tag:"vocab"},
        {kind:"gap", s:"At the weekend, I prefer to ___ with my friends in the park rather than chat online.", answers:["socialise","socialize"], tag:"vocab"}
      ] }
  ],
  grammar: [
    { title: "Tìm và sửa lỗi sai", instr: "Mỗi câu có MỘT từ sai. Chạm vào từ sai rồi gõ từ đúng.", tag: "grammar",
      items: [
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"My new phone, that I bought last month, already has a cracked screen.", answer:"that", fix:["which"], explain:"Mệnh đề không xác định (có dấu phẩy) không dùng 'that' → which.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"In the future, most housework will be do by robots.", answer:"do", fix:["done"], explain:"Bị động tương lai: will be + quá khứ phân từ → done.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"I had my bike repair at the shop near our school.", answer:"repair", fix:["repaired"], explain:"have something done: had + my bike + P.P. → repaired.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"She does wants to help, but she doesn't know how.", answer:"wants", fix:["want"], explain:"Sau 'does' nhấn mạnh, động từ ở dạng nguyên mẫu → want.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"This time next week, we will be fly to Da Nang for our holiday.", answer:"fly", fix:["flying"], explain:"Tương lai tiếp diễn: will be + V-ing → flying.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"There are too much apps on my phone, so it keeps running out of memory.", answer:"much", fix:["many"], explain:"'apps' là danh từ đếm được số nhiều → too many.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"He spends too many time playing online games.", answer:"many", fix:["much"], explain:"'time' là danh từ không đếm được → too much.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"My sister is getting married next month, what is wonderful news.", answer:"what", fix:["which"], explain:"Dùng ', which' để chỉ cả mệnh đề phía trước, không dùng 'what'.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Your shopping will be delivering by drone tomorrow morning.", answer:"delivering", fix:["delivered"], explain:"Bị động tương lai: will be + P.P. → delivered.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Television was first demonstrate by John Logie Baird in 1926.", answer:"demonstrate", fix:["demonstrated"], explain:"Bị động quá khứ: was + P.P. → demonstrated.", tag:"grammar"}
      ] },
    { title: "Viết lại câu với từ khoá", instr: "Viết lại câu sao cho nghĩa không đổi, BẮT BUỘC dùng từ in hoa.", tag: "grammar",
      items: [
        {kind:"rewrite", s:"A professional photographer took our family photo.", key:"HAD", prompt:"We ___", answers:["We had our family photo taken by a professional photographer.","We had our family photo taken."], explain:"have something done: had + tân ngữ + P.P. (taken).", tag:"grammar"},
        {kind:"rewrite", s:"Robots will clean the streets of our city in 2050.", key:"BE", prompt:"The streets of our city ___", answers:["The streets of our city will be cleaned by robots in 2050.","The streets of our city will be cleaned in 2050 by robots."], explain:"Bị động tương lai: will be + P.P.", tag:"grammar"},
        {kind:"rewrite", s:"I really believe that technology makes life easier.", key:"DO", prompt:"I ___", answers:["I do believe that technology makes life easier.","I do believe technology makes life easier."], explain:"Dùng do + V nguyên mẫu để nhấn mạnh thay cho 'really'.", tag:"grammar"},
        {kind:"rewrite", s:"My laptop is very old. It still works perfectly.", key:"WHICH", prompt:"My laptop, ___", answers:["My laptop, which is very old, still works perfectly."], explain:"Mệnh đề quan hệ không xác định, đặt giữa hai dấu phẩy.", tag:"grammar"},
        {kind:"rewrite", s:"Don't call me at 9 p.m. tomorrow – I'm going to watch the football match then.", key:"WATCHING", prompt:"At 9 p.m. tomorrow, I ___", answers:["At 9 p.m. tomorrow, I'll be watching the football match.","At 9 p.m. tomorrow, I will be watching the football match."], explain:"Hành động đang diễn ra tại một thời điểm trong tương lai: will be + V-ing.", tag:"grammar"},
        {kind:"rewrite", s:"The phone is so expensive that I can't buy it.", key:"TOO", prompt:"The phone is ___", answers:["The phone is too expensive for me to buy.","The phone is too expensive to buy.","The phone is too expensive for me."], explain:"too + tính từ + (for sb) + to V.", tag:"grammar"},
        {kind:"rewrite", s:"There is more homework than I can finish tonight.", key:"MUCH", prompt:"I have ___", answers:["I have too much homework to finish tonight.","I have too much homework to do tonight.","I have too much homework tonight."], explain:"'homework' không đếm được → too much homework.", tag:"grammar"},
        {kind:"rewrite", s:"We have arranged to meet our friends at the cinema on Saturday.", key:"MEETING", prompt:"We ___", answers:["We are meeting our friends at the cinema on Saturday.","We're meeting our friends at the cinema on Saturday.","We are meeting our friends on Saturday at the cinema.","We're meeting our friends on Saturday at the cinema."], explain:"Hiện tại tiếp diễn diễn tả kế hoạch cá nhân đã sắp xếp trong tương lai.", tag:"grammar"}
      ] },
    { title: "Chọn TẤT CẢ câu đúng", instr: "Chọn TẤT CẢ các câu đúng ngữ pháp (có thể có 1, 2 hoặc 3 câu đúng).", tag: "grammar",
      items: [
        {kind:"multi", q:"Which sentences are correct? (which)", opts:["My phone, which I bought in 2020, is still fast.","My phone, that I bought in 2020, is still fast.","She posted a funny meme, which made everyone laugh.","This is the app what I told you about."], a:[0,2], explain:"Sau dấu phẩy dùng which, không dùng that. 'what' không dùng làm đại từ quan hệ sau danh từ (the app which/that).", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (future passive)", opts:["The new library will be opened next September.","Our parcel will deliver tomorrow.","All the data will be analysed by computers.","The robots will be control by a single app."], a:[0,2], explain:"Bị động tương lai: will be + P.P. (opened, analysed). Câu 2 thiếu 'be delivered'; câu 4 phải là 'controlled'.", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (have something done)", opts:["I had my hair cut yesterday.","We're having our kitchen painted next week.","She had her phone repair last month.","He has his car washed every Sunday."], a:[0,1,3], explain:"have + tân ngữ + P.P. Câu 3 phải là 'repaired'.", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (too / too much / too many)", opts:["There are too much adverts on this platform.","I spend too much time on my phone.","This game is too much difficult for me.","There is too many spam in my inbox."], a:[1], explain:"too much + danh từ không đếm được (time); too many + danh từ đếm được (adverts); too + tính từ (too difficult); spam không đếm được → too much spam.", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (future continuous / emphatic do)", opts:["This time tomorrow, I'll be sitting my science exam.","In ten years' time, people will be using voice recognition everywhere.","Will you be use the laptop this evening?","He does knows a lot about computers."], a:[0,1], explain:"will be + V-ing (using, không phải use). Sau does nhấn mạnh dùng V nguyên mẫu (know).", tag:"grammar"}
      ] },
    { title: "Chia động từ trong đoạn văn", instr: "Chia động từ trong ngoặc ở dạng đúng.", tag: "grammar",
      items: [
        {kind:"cloze", title:"Our school Technology Fair", text:"Our school's first Technology Fair {1} (take) place next Friday, and everyone is very excited. The fair {2} (open) by the head teacher at 9 a.m.\n\nSince September, our class {3} (work) on a robot that can sort rubbish for recycling. Last week, we {4} (have) its body printed on a 3D printer at the local library, and yesterday we finally {5} (test) it. Unfortunately, it {6} (not / recognise) plastic bottles very well, so we need to improve the software.\n\nThis time next Friday, I {7} (stand) next to our robot and answering visitors' questions. If everything goes well, the best projects {8} (send) to a national competition in Hà Nội next spring.", gaps:[
          {answers:["takes","is taking","will take"]},
          {answers:["will be opened","is going to be opened"]},
          {answers:["has been working","has worked"]},
          {answers:["had"]},
          {answers:["tested"]},
          {answers:["doesn't recognise","does not recognise","doesn't recognize","does not recognize","didn't recognise","did not recognise","didn't recognize","did not recognize"]},
          {answers:["will be standing"]},
          {answers:["will be sent"]}
        ], explain:"(1) sự kiện theo lịch: takes. (2) bị động tương lai: will be opened. (3) since → hiện tại hoàn thành (tiếp diễn). (4) had its body printed (have something done). (5) yesterday → quá khứ đơn. (6) hiện tại đơn phủ định. (7) This time next Friday → tương lai tiếp diễn. (8) bị động tương lai: will be sent.", tag:"grammar"}
      ] }
  ],
  writing: [
    { title: "Nối câu với từ nối", instr: "Nối hai câu thành một (hoặc viết lại) dùng từ/cụm từ in hoa.", tag: "writing",
      items: [
        {kind:"rewrite", s:"The app is free. Very few people download it.", key:"ALTHOUGH", prompt:"Although ___", answers:["Although the app is free, very few people download it."], explain:"Although + mệnh đề, + mệnh đề (chỉ sự tương phản).", tag:"writing"},
        {kind:"rewrite", s:"Self-driving cars are safer. Many people are still afraid of them.", key:"HOWEVER", prompt:"Self-driving cars are safer. ___", answers:["Self-driving cars are safer. However, many people are still afraid of them."], explain:"However đứng đầu câu thứ hai, theo sau là dấu phẩy.", tag:"writing"},
        {kind:"rewrite", s:"It was raining heavily. The drone delivered the parcel on time.", key:"DESPITE", prompt:"Despite ___", answers:["Despite the heavy rain, the drone delivered the parcel on time.","Despite heavy rain, the drone delivered the parcel on time.","Despite the fact that it was raining heavily, the drone delivered the parcel on time.","Despite it raining heavily, the drone delivered the parcel on time."], explain:"Despite + danh từ / V-ing / the fact that + mệnh đề.", tag:"writing"},
        {kind:"rewrite", s:"My aunt is a software engineer. She designs apps for hospitals.", key:"WHO", prompt:"My aunt, ___", answers:["My aunt, who is a software engineer, designs apps for hospitals.","My aunt, who designs apps for hospitals, is a software engineer."], explain:"who thay cho người; mệnh đề không xác định đặt giữa hai dấu phẩy.", tag:"writing"},
        {kind:"rewrite", s:"We put sensors in the garden. We wanted to know when the plants needed water.", key:"SO THAT", prompt:"We put sensors in the garden ___", answers:["We put sensors in the garden so that we would know when the plants needed water.","We put sensors in the garden so that we could know when the plants needed water.","We put sensors in the garden so that we could find out when the plants needed water."], explain:"so that + S + could/would + V: để mà (chỉ mục đích).", tag:"writing"},
        {kind:"rewrite", s:"She bought a smart watch. She wanted to check her heart rate.", key:"IN ORDER TO", prompt:"She bought a smart watch ___", answers:["She bought a smart watch in order to check her heart rate."], explain:"in order to + V nguyên mẫu: để (chỉ mục đích).", tag:"writing"},
        {kind:"rewrite", s:"He spent all night playing online games. He fell asleep in class the next day.", key:"AS A RESULT", prompt:"He spent all night playing online games. ___", answers:["He spent all night playing online games. As a result, he fell asleep in class the next day."], explain:"As a result, + kết quả.", tag:"writing"},
        {kind:"rewrite", s:"The museum has a robot guide. It can speak five languages.", key:"WHICH", prompt:"The museum has a robot guide ___", answers:["The museum has a robot guide which can speak five languages."], explain:"which thay cho vật (robot guide) và làm chủ ngữ trong mệnh đề quan hệ.", tag:"writing"}
      ] },
    { title: "Cấu trúc đoạn văn", instr: "Chọn đáp án đúng nhất về cấu trúc đoạn văn.", tag: "writing",
      items: [
        {kind:"mcq", q:"Choose the best TOPIC SENTENCE for this paragraph: '___ First, students can find information quickly online. Second, apps make practising vocabulary more fun. Finally, teachers can share videos that explain difficult ideas.'", opts:["My brother has a new laptop.","Technology can help students learn in several ways.","Some apps are very expensive.","I first used a computer when I was six."], a:1, explain:"Câu chủ đề phải khái quát được cả 3 ý phía sau: công nghệ giúp học sinh học tập.", tag:"writing"},
        {kind:"mcq", q:"The topic of a paragraph is 'Smart homes help elderly people to live safely on their own.' Which sentence does NOT belong?", opts:["Sensors can notice if someone falls and call for help.","Digital assistants can remind people to take their medicine.","Smart speakers come in many different colours.","Lights can switch on automatically when someone walks into a room at night."], a:2, explain:"Màu sắc của loa thông minh không liên quan đến sự an toàn của người cao tuổi.", tag:"writing"},
        {kind:"mcq", q:"Choose the best CONCLUDING SENTENCE: 'Social media has changed how teenagers make friends. They can chat with people from other countries and share their hobbies online. However, some teenagers spend so much time online that they rarely meet friends face to face. ___'", opts:["For example, I have 300 followers.","Secondly, many people play video games.","In conclusion, social media can bring people together, but it should not replace real-life friendships.","Social media was invented a long time ago."], a:2, explain:"Câu kết luận tóm tắt cả mặt tốt và mặt chưa tốt đã nêu, mở đầu bằng 'In conclusion'.", tag:"writing"},
        {kind:"mcq", q:"Choose the best SUPPORTING EXAMPLE for this sentence: 'Technology has made archaeology much easier.'", opts:["For example, many people enjoy visiting museums at the weekend.","For example, my grandfather collects old coins.","For example, archaeologists usually work in teams.","For example, underwater robots can now explore shipwrecks that divers cannot reach."], a:3, explain:"Ví dụ phải cho thấy công nghệ (robot) giúp công việc khảo cổ.", tag:"writing"},
        {kind:"mcq", q:"Which sentence is the best OPENING for a report about technology at your school?", opts:["This report is divided into three sections: the technology we have, its problems and our suggestions.","I love technology and I think it is the best thing ever!","However, there are no interactive whiteboards.","Finally, we would like more laptops."], a:0, explain:"Báo cáo nên mở đầu bằng việc nói rõ báo cáo được tổ chức như thế nào.", tag:"writing"}
      ] },
    { title: "Sắp xếp thành đoạn văn", instr: "Sắp xếp các câu thành một đoạn văn hoàn chỉnh: câu chủ đề → ý hỗ trợ → câu kết.", tag: "writing",
      items: [
        {kind:"seqorder", q:"A useful technology", items:[
          "Voice recognition is one of the most useful technologies in my daily life.",
          "First, I use it to send messages to my parents when my hands are busy.",
          "For example, I can reply to my mum while I am cooking dinner.",
          "Second, it helps my grandfather, who cannot see the small letters on his phone very well.",
          "However, it does not always understand people with strong accents.",
          "Overall, I think it makes life easier, although it still needs to be improved."
        ], vi:"Đoạn văn về công nghệ nhận diện giọng nói.", explain:"Câu chủ đề → First → For example → Second → However (hạn chế) → Overall (kết luận).", tag:"writing"},
        {kind:"seqorder", q:"Personalised gifts", items:[
          "Personalised gifts have become very popular among teenagers.",
          "One reason is that they are easy to order online.",
          "You simply upload a photo or type a name, and the shop does the rest.",
          "Another reason is that they show you have thought carefully about the person.",
          "For instance, last year I had my best friend's name printed on a phone cover, and she loved it.",
          "In short, a personalised gift is a simple way to make someone feel special."
        ], vi:"Đoạn văn về quà tặng cá nhân hoá.", explain:"Câu chủ đề → One reason → giải thích → Another reason → For instance → In short.", tag:"writing"}
      ] },
    { title: "Viết đoạn văn có hướng dẫn", instr: "Viết theo dàn ý gợi ý và dùng đủ các từ/cụm từ cho sẵn.", tag: "writing",
      items: [
        {kind:"guided", prompt:"Viết một <b>bài blog</b> (khoảng 80–100 từ) với tiêu đề <i>The invention I couldn't live without</i>. Giới thiệu phát minh, nó được phát minh khi nào và chạy bằng gì, em dùng nó như thế nào, một hạn chế của nó và kết luận.", outline:[
          "Câu chủ đề: giới thiệu phát minh em không thể sống thiếu (… , which …)",
          "Ý 1: Nó được phát minh khi nào / chạy bằng gì (was invented in …, is powered by …)",
          "Ý 2: Em/gia đình em dùng nó như thế nào (For example, …)",
          "Ý 3: Một hạn chế (However, …)",
          "Kết luận: ý kiến của em (Overall, I do think …)"
        ], useWords:["invented","powered by","which","For example","However","save time"], minWords:80, sample:"The invention I couldn't live without is the washing machine, which saves my family a lot of work every week. The first electric washing machines were invented in the early twentieth century. Today they are powered by electricity and controlled by a small computer. For example, my mum can start the machine with an app before she leaves work, so the clothes are clean when she gets home. However, washing machines use a lot of water and energy. Overall, I do think it is one of the most useful inventions in our home, because it helps us to save time for more important things.", criteria:"Có câu chủ đề rõ ràng; nêu được lịch sử/nguồn năng lượng, cách sử dụng, một hạn chế và kết luận; dùng đúng mệnh đề 'which', bị động (was invented, are powered by); dùng 'For example,' và 'However,' có dấu phẩy; khoảng 80–100 từ.", tag:"writing"},
        {kind:"guided", prompt:"Viết một <b>email</b> (khoảng 80–100 từ) gửi bạn thân, kể về một <b>món quà cá nhân hoá</b> em đã đặt làm cho người thân (dùng <i>have something done</i>) và gợi ý bạn nên tặng gì cho sinh nhật mẹ bạn.", outline:[
          "Mở đầu: Hi + tên, hỏi thăm ngắn",
          "Ý 1: Món quà em đã đặt làm (I had … printed / engraved …)",
          "Ý 2: Người nhận cảm thấy thế nào (…, which …)",
          "Ý 3: Lời khuyên cho bạn (You could have … delivered …) và điều nên tránh (too expensive)",
          "Kết thư: Write back soon! / Best wishes, + tên"
        ], useWords:["personalised","printed","engraved","delivered","too expensive","which"], minWords:80, sample:"Hi Mai,\nHow are you? Last month I wanted to give my grandmother something special for her seventieth birthday, so I had a photo of our whole family printed on a soft cushion. I also had her initials engraved onto a small silver key ring. She was so happy that she cried, which made me cry too! For your mum's birthday, you could order a personalised mug and have it delivered to her office. Don't choose a necklace, though – they are usually too expensive for students like us. Write back soon and tell me what you decide!\nBest wishes,\nLan", criteria:"Đúng hình thức email thân mật (lời chào, lời kết); dùng đúng cấu trúc have + tân ngữ + P.P. ít nhất 2 lần; có 'which' chỉ cả mệnh đề; có lời khuyên cho bạn; dùng đủ các từ cho sẵn; khoảng 80–100 từ.", tag:"writing"}
      ] }
  ]
});

CG9.addPracticePack({
  unit: 4,
  reading: [
    { title: "Đọc & chọn từ đúng (Multiple-choice cloze)", instr: "Đọc bài viết về khám phá ra penicillin. Chọn từ đúng nhất cho mỗi chỗ trống.", tag: "reading",
      items: [
        {kind:"cloze", tag:"reading", title:"A lucky discovery",
          text:"In September 1928, the Scottish scientist Alexander Fleming returned to his laboratory in London after a holiday. {1} sorting through some old dishes, he noticed something strange. A blue-green mould was growing on one of them, and the bacteria around it {2} been killed.\n\nFleming realised that the mould produced a substance that could stop bacteria from growing. He called it penicillin. It was the world's first true {3}. However, at first very few people were interested {4} his discovery, and it was difficult to produce penicillin in large amounts.\n\nAbout ten years later, two scientists in Oxford, Howard Florey and Ernst Chain, found a way to make the medicine on a large scale. During the Second World War, penicillin {5} used to treat thousands of injured soldiers. In 1945, Fleming, Florey and Chain {6} awarded the Nobel Prize for their work.\n\nSince then, antibiotics have saved millions of lives. They are used to treat many serious infections, such as {7}. Today, however, some bacteria have become resistant to antibiotics. For this {8}, scientists have been searching for new medicines for many years.",
          gaps:[
            {opts:["While","During","Because","Unless"], a:0, explain:"While + V-ing khi hai mệnh đề cùng chủ ngữ (he). During + danh từ, không đi với V-ing ở đây."},
            {opts:["had","have","was","were"], a:0, explain:"Kể chuyện quá khứ, việc xảy ra trước đó → had been killed (bị động quá khứ hoàn thành). 'was/were been' sai ngữ pháp."},
            {opts:["antibiotic","vaccine","pandemic","quarantine"], a:0, explain:"Penicillin là thuốc kháng sinh (antibiotic) đầu tiên — nó diệt vi khuẩn."},
            {opts:["in","on","of","with"], a:0, explain:"be interested in = quan tâm đến."},
            {opts:["was","were","has","is"], a:0, explain:"Quá khứ đơn bị động, chủ ngữ số ít (penicillin) → was used."},
            {opts:["were","was","have","had"], a:0, explain:"Họ được trao giải → bị động quá khứ đơn, chủ ngữ số nhiều → were awarded."},
            {opts:["tuberculosis","flu","smallpox","colour-blindness"], a:0, explain:"Kháng sinh chữa bệnh do vi khuẩn như bệnh lao (TB). Cúm và đậu mùa do virus gây ra; mù màu không phải bệnh nhiễm trùng."},
            {opts:["reason","result","cause","example"], a:0, explain:"For this reason = Vì lý do này."}
          ]}
      ] },
    { title: "Đọc & điền từ (Open cloze)", instr: "Điền MỘT từ thích hợp vào mỗi chỗ trống (giới từ, đại từ, trợ động từ, từ nối…).", tag: "reading",
      items: [
        {kind:"cloze", tag:"reading", title:"How do we see colours?",
          text:"Have you ever wondered how we see colours? The answer lies in the retina, {1} is at the back of the eye. The retina contains millions of cells called cones. Most people have three types of cone, and each type reacts {2} a different kind of light: red, green or blue. Because of this, scientists say that humans are trichromatic.\n\nHowever, not everyone sees colours in the same way. About one {3} twelve men and one in two hundred women are colour-blind. Most colour-blind people can see colours, {4} they find it difficult to tell red from green. This condition is usually passed from parents to children through their genes.\n\nSome animals see the world very differently. Many birds have four types of cone, so they can see colours that humans {5} see. Dogs, on the other {6}, have only two types, so the world probably looks less colourful to {7}.\n\nScientists {8} been studying colour vision for more than a hundred years, and they are still making new discoveries.",
          gaps:[
            {answers:["which"], explain:"Mệnh đề quan hệ không xác định (sau dấu phẩy) cho vật → which (không dùng that)."},
            {answers:["to"], explain:"react to = phản ứng với."},
            {answers:["in"], explain:"one in twelve = cứ 12 người thì có 1."},
            {answers:["but","yet"], explain:"Nối hai ý trái ngược: but/yet."},
            {answers:["cannot","can't"], explain:"colours that humans cannot see = những màu mà con người không thể nhìn thấy (cannot viết liền một từ)."},
            {answers:["hand"], explain:"on the other hand = mặt khác."},
            {answers:["them"], explain:"Đại từ tân ngữ thay cho dogs → them."},
            {answers:["have"], explain:"Hiện tại hoàn thành tiếp diễn: have been + V-ing (chủ ngữ số nhiều)."}
          ]}
      ] },
    { title: "Chọn tiêu đề cho đoạn văn", instr: "Đọc bài viết về loài ong. Chọn tiêu đề phù hợp cho mỗi đoạn. Có MỘT tiêu đề thừa.", tag: "reading",
      items: [
        {kind:"headings", tag:"reading",
          paras:[
            "Bees are some of the most important animals on our planet. As they fly from flower to flower collecting food, they carry pollen from one plant to another. This helps plants to produce fruit and seeds. In fact, about one third of the food we eat depends on pollinators such as bees.",
            "Sadly, bee numbers have been falling in many parts of the world, and scientists believe there are several reasons for this. Large areas of wild flowers have been destroyed to build roads and houses, so bees have lost their habitat. In addition, some of the chemicals that farmers use to kill insects are harmful to bees.",
            "If bees continue to disappear, the effects could be serious. Plants and animals are interdependent, so when one species is in trouble, others suffer too. Without bees, many plants would not be pollinated, and the birds and animals that feed on those plants would struggle to find enough food.",
            "The good news is that everyone can help. You can plant flowers in your garden or on your balcony, and you can avoid using chemicals that kill insects. Some schools have even built 'bee hotels' – small wooden boxes where wild bees can rest and lay their eggs. Small actions like these really make a difference."
          ],
          headings:[
            "How you can help",
            "How honey is made",
            "A worrying decline",
            "Why we need bees",
            "What could happen next"
          ],
          a:[3,2,4,0],
          explain:"Đoạn 1: vai trò thụ phấn của ong. Đoạn 2: số lượng ong giảm và nguyên nhân. Đoạn 3: hậu quả nếu ong biến mất. Đoạn 4: việc mỗi người có thể làm. Bài không nói cách làm mật ong."}
      ] },
    { title: "Sắp xếp sự việc", instr: "Sắp xếp các câu theo đúng thứ tự. Chú ý các từ chỉ thời gian và trình tự.", tag: "reading",
      items: [
        {kind:"seqorder", tag:"reading", q:"Sắp xếp các bước giải thích vắc-xin bảo vệ cơ thể như thế nào.",
          items:[
            "First, scientists make a vaccine from a weak or dead form of a virus.",
            "Then the vaccine is injected into a person's arm.",
            "After receiving the vaccine, the body starts to produce antibodies to fight the virus.",
            "These antibodies stay in the body for a long time.",
            "Later, if the real virus enters the body, the antibodies recognise it and destroy it quickly.",
            "As a result, the person does not become seriously ill."
          ],
          vi:"Làm vắc-xin → tiêm → cơ thể tạo kháng thể → kháng thể tồn tại lâu → virus thật xâm nhập thì bị tiêu diệt → không bị bệnh nặng."},
        {kind:"seqorder", tag:"reading", q:"Sắp xếp câu chuyện về thí nghiệm dấu vân tay của lớp Lan.",
          items:[
            "Last Monday, our science teacher asked us to find out whether fingerprints are really unique.",
            "Before starting the experiment, we washed and dried our hands carefully.",
            "Then each of us pressed our fingers onto an ink pad and onto a sheet of white paper.",
            "After collecting thirty sets of prints, we compared them under a magnifying glass.",
            "We found that no two sets of fingerprints were the same, not even those of the twins in our class.",
            "Our teacher was so impressed that she asked us to present our results to the whole school."
          ],
          vi:"Cô giao nhiệm vụ → rửa tay trước khi làm → in dấu vân tay → so sánh → kết quả → cô yêu cầu trình bày."}
      ] },
    { title: "Tìm từ trong đoạn văn", instr: "Đọc đoạn trích và bấm vào từ phù hợp với nghĩa được cho.", tag: "reading",
      items: [
        {kind:"tapword", tag:"reading", q:"Tìm từ có nghĩa là 'võng mạc'.",
          text:"Light enters the eye and reaches the retina, where special cells send messages to the brain.",
          answer:"retina", explain:"retina = võng mạc, nơi có các tế bào cảm nhận ánh sáng."},
        {kind:"tapword", tag:"reading", q:"Find the word that means 'a period when people or animals are kept apart so that a disease does not spread'.",
          text:"During the plague, some ports in Europe made ships wait for forty days before the sailors were allowed to come on land. This early form of quarantine helped to slow the disease.",
          answer:"quarantine", explain:"quarantine = sự cách ly."},
        {kind:"tapword", tag:"reading", q:"Tìm từ có nghĩa là 'động vật ăn thịt, kẻ săn mồi'.",
          text:"Lions and cheetahs are predators, so herders build strong fences to protect their cows and goats at night.",
          answer:"predators", explain:"predator = kẻ săn mồi; herder = người chăn gia súc."},
        {kind:"tapword", tag:"reading", q:"Find the word that means 'animals that eat only plants'.",
          text:"Pandas eat almost nothing but bamboo, which makes them herbivores.",
          answer:"herbivores", explain:"herbivore = động vật ăn cỏ/thực vật."},
        {kind:"tapword", tag:"reading", q:"Tìm từ có nghĩa là 'gen — đơn vị di truyền quyết định một đặc điểm'.",
          text:"The DNA in every cell of your body contains the genes that decide the colour of your eyes and hair.",
          answer:"genes", explain:"gene = gen; DNA = ADN."}
      ] }
  ],
  vocab: [
    { title: "Kết hợp từ (Collocations)", instr: "Chọn TẤT CẢ các từ có thể kết hợp đúng.", tag: "vocab",
      items: [
        {kind:"multi", tag:"vocab", q:"Which words can follow 'suffer from'?", opts:["stress","a disease","boredom","an invention","a fingerprint"], a:[0,1,2], explain:"suffer from stress / a disease / boredom = chịu đựng, mắc phải. Không ai 'suffer from' một phát minh hay dấu vân tay."},
        {kind:"multi", tag:"vocab", q:"Which words can go before 'energy'?", opts:["solar","wind","genetic","captive","herbivore"], a:[0,1], explain:"solar energy (năng lượng mặt trời), wind energy (năng lượng gió)."},
        {kind:"multi", tag:"vocab", q:"Which words can go before 'species' in a correct phrase?", opts:["endangered","extinct","solar","medical","retina"], a:[0,1], explain:"endangered species (loài nguy cấp), extinct species (loài đã tuyệt chủng)."},
        {kind:"multi", tag:"vocab", q:"Which verbs can go with 'a discovery'?", opts:["make","do","announce","take","lose"], a:[0,2], explain:"make a discovery (có một khám phá), announce a discovery (công bố khám phá). Không nói 'do/take a discovery'."},
        {kind:"multi", tag:"vocab", q:"Which nouns can follow 'genetic'?", opts:["diversity","information","disease","prey","keeper"], a:[0,1,2], explain:"genetic diversity (đa dạng di truyền), genetic information (thông tin di truyền), genetic disease (bệnh di truyền)."},
        {kind:"multi", tag:"vocab", q:"Which verbs are followed by the preposition 'on'?", opts:["depend","rely","concentrate","suffer","approve"], a:[0,1,2], explain:"depend on, rely on, concentrate on. Nhưng: suffer from, approve of."}
      ] },
    { title: "Từ không cùng nhóm", instr: "Chọn từ KHÔNG cùng nhóm với các từ còn lại.", tag: "vocab",
      items: [
        {kind:"mcq", tag:"vocab", q:"Which is the odd one out?", opts:["smallpox","cholera","antibiotic","typhoid"], a:2, explain:"antibiotic là thuốc kháng sinh; các từ còn lại là tên bệnh."},
        {kind:"mcq", tag:"vocab", q:"Which is the odd one out?", opts:["lion","cheetah","zebra","leopard"], a:2, explain:"zebra là động vật ăn cỏ (herbivore); các con còn lại là kẻ săn mồi (predators)."},
        {kind:"mcq", tag:"vocab", q:"Which is the odd one out?", opts:["retina","gene","cone","receptor"], a:1, explain:"gene (gen) không phải bộ phận của mắt; retina, cone, receptor liên quan đến thị giác."},
        {kind:"mcq", tag:"vocab", q:"Which is the odd one out?", opts:["herder","keeper","livestock","poacher"], a:2, explain:"livestock (gia súc) là động vật; các từ còn lại chỉ người."},
        {kind:"mcq", tag:"vocab", q:"Which is the odd one out?", opts:["vaccination","quarantine","sanitation","pandemic"], a:3, explain:"pandemic (đại dịch) là vấn đề; các từ còn lại là cách ngăn chặn bệnh lây lan."},
        {kind:"mcq", tag:"vocab", q:"Which is the odd one out?", opts:["However","Although","Furthermore","Whereas"], a:2, explain:"Furthermore dùng để bổ sung ý; các từ còn lại nối hai ý trái ngược."},
        {kind:"mcq", tag:"vocab", q:"Which is the odd one out?", opts:["enclosure","instinct","cage","wildlife park"], a:1, explain:"instinct (bản năng) không phải là nơi nuôi nhốt động vật."},
        {kind:"mcq", tag:"vocab", q:"Which is the odd one out?", opts:["objective","factual","biased","fair"], a:2, explain:"biased (thiên vị) mang nghĩa tiêu cực, trái ngược với các từ còn lại (khách quan, dựa trên sự thật, công bằng)."}
      ] },
    { title: "Từ đồng nghĩa / trái nghĩa", instr: "Chọn đáp án đúng nhất.", tag: "vocab",
      items: [
        {kind:"mcq", tag:"vocab", q:"Which is closest in meaning to 'unique' in 'Everyone's fingerprints are unique'?", opts:["one of a kind","very common","very old","easy to copy"], a:0, explain:"unique = độc nhất, không có cái thứ hai (one of a kind)."},
        {kind:"mcq", tag:"vocab", q:"Which is OPPOSITE in meaning to 'extinct'?", opts:["still existing","disappeared","dangerous","dead"], a:0, explain:"extinct (đã tuyệt chủng) ≠ still existing (vẫn còn tồn tại)."},
        {kind:"mcq", tag:"vocab", q:"Which word is OPPOSITE in meaning to 'objective'?", opts:["biased","fair","factual","neutral"], a:0, explain:"objective (khách quan) ≠ biased (thiên vị)."},
        {kind:"mcq", tag:"vocab", q:"Which is closest in meaning to 'breed' in 'Some zoos breed giant pandas'?", opts:["help to produce young","hunt","release","feed"], a:0, explain:"breed = nhân giống, cho sinh sản."},
        {kind:"mcq", tag:"vocab", q:"Which is closest in meaning to 'release' in 'They released the turtles into the sea'?", opts:["set free","capture","keep","sell"], a:0, explain:"release = thả ra, trả tự do (set free)."},
        {kind:"mcq", tag:"vocab", q:"Which is OPPOSITE in meaning to 'in captivity'?", opts:["in the wild","in a cage","in a zoo","in an enclosure"], a:0, explain:"in captivity (bị nuôi nhốt) ≠ in the wild (trong tự nhiên)."},
        {kind:"mcq", tag:"vocab", q:"Which word is closest in meaning to 'achievement'?", opts:["accomplishment","failure","mistake","problem"], a:0, explain:"achievement = accomplishment (thành tựu)."},
        {kind:"mcq", tag:"vocab", q:"Which word is OPPOSITE in meaning to 'predator'?", opts:["prey","hunter","killer","poacher"], a:0, explain:"predator (kẻ săn mồi) ≠ prey (con mồi)."}
      ] },
    { title: "Đoán nghĩa từ ngữ cảnh", instr: "Đọc câu, dựa vào ngữ cảnh để tìm và bấm vào từ có nghĩa được cho.", tag: "vocab",
      items: [
        {kind:"tapword", tag:"vocab", q:"Find the word that means 'farm animals such as cows, goats and sheep'.",
          text:"The farmers lost three cows last month, so they decided to build a stronger fence to keep their livestock safe from lions.",
          answer:"livestock", explain:"livestock = gia súc (danh từ không đếm được)."},
        {kind:"tapword", tag:"vocab", q:"Tìm từ có nghĩa là 'những kẻ săn trộm'.",
          text:"Poachers are a serious problem in the national park because they kill rhinos illegally and sell their horns.",
          answer:"Poachers", explain:"poacher = kẻ săn trộm; 'kill … illegally' là manh mối."},
        {kind:"tapword", tag:"vocab", q:"Find the word that means 'a natural way of behaving that an animal does not need to learn'.",
          text:"Baby turtles find their way to the sea by instinct; nobody has to teach them.",
          answer:"instinct", explain:"instinct = bản năng; 'nobody has to teach them' là manh mối."},
        {kind:"tapword", tag:"vocab", q:"Tìm từ có nghĩa là 'hệ thống vệ sinh (nước sạch, cống thoát nước)'.",
          text:"Before clean water systems were built, diseases spread quickly. Good sanitation has saved millions of lives since then.",
          answer:"sanitation", explain:"sanitation = hệ thống vệ sinh công cộng."},
        {kind:"tapword", tag:"vocab", q:"Find the word that means 'depending on each other'.",
          text:"In a healthy forest, plants and animals are interdependent: the trees give the animals food, and the animals spread the trees' seeds.",
          answer:"interdependent", explain:"interdependent = phụ thuộc lẫn nhau (inter- = lẫn nhau)."}
      ] },
    { title: "Hoàn thành câu với từ cho sẵn", instr: "Điền một từ trong khung vào mỗi câu. Có 2 từ thừa.", tag: "vocab",
      wordbank: ["habitat","vaccinated","antibiotics","pandemic","extinct","enclosure","colour-blind","fingerprints","predators","invention"],
      items: [
        {kind:"gap", tag:"vocab", s:"The dodo became ___ in the seventeenth century, and no one has seen one since.", answers:["extinct"], explain:"extinct = tuyệt chủng."},
        {kind:"gap", tag:"vocab", s:"My uncle is ___, so he can't tell the difference between red and green.", answers:["colour-blind"], explain:"colour-blind = mù màu."},
        {kind:"gap", tag:"vocab", s:"The police found the thief's ___ on the window.", answers:["fingerprints"], explain:"fingerprints = dấu vân tay."},
        {kind:"gap", tag:"vocab", s:"Most children are ___ against measles when they are babies.", answers:["vaccinated"], explain:"be vaccinated against = được tiêm phòng (bệnh gì)."},
        {kind:"gap", tag:"vocab", s:"The doctor gave me some ___ to treat my chest infection.", answers:["antibiotics"], explain:"antibiotics = thuốc kháng sinh."},
        {kind:"gap", tag:"vocab", s:"When forests are cut down, many animals lose their natural ___.", answers:["habitat"], explain:"habitat = môi trường sống."},
        {kind:"gap", tag:"vocab", s:"The elephants at the wildlife park live in a huge ___ with its own lake.", answers:["enclosure"], explain:"enclosure = khu nuôi có rào bao quanh."},
        {kind:"gap", tag:"vocab", s:"COVID-19 became a global ___ in 2020.", answers:["pandemic"], explain:"pandemic = đại dịch toàn cầu."}
      ] }
  ],
  grammar: [
    { title: "Tìm và sửa lỗi sai", instr: "Mỗi câu có MỘT từ sai. Bấm vào từ sai rồi gõ từ đúng.", tag: "grammar",
      items: [
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"Most babies in Vietnam are vaccinate against tuberculosis soon after birth.", answer:"vaccinate", fix:["vaccinated"], explain:"Bị động hiện tại đơn: are + V3 → are vaccinated."},
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"Millions of people were kill by the plague in the fourteenth century.", answer:"kill", fix:["killed"], explain:"Bị động quá khứ đơn: were + V3 → were killed."},
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"We have been learn about genetics since September.", answer:"learn", fix:["learning"], explain:"Hiện tại hoàn thành tiếp diễn: have been + V-ing."},
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"Many lions have been killing by farmers in the last few years.", answer:"killing", fix:["killed"], explain:"Có 'by farmers' → bị động hiện tại hoàn thành: have been + V3."},
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"Richard's invention have helped many farmers to protect their cows.", answer:"have", fix:["has"], explain:"Chủ ngữ số ít (Richard's invention) → has + V3."},
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"After finish the experiment, the students wrote a report.", answer:"finish", fix:["finishing"], explain:"Cùng chủ ngữ → After + V-ing: After finishing…"},
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"Scientists has been searching for a cure for many years.", answer:"has", fix:["have"], explain:"Chủ ngữ số nhiều (Scientists) → have been + V-ing."},
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"Many animals in small cages suffer of stress and boredom.", answer:"of", fix:["from"], explain:"suffer from = chịu đựng, mắc phải."},
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"I don't agree to people who keep wild animals as pets.", answer:"to", fix:["with"], explain:"agree with + người = đồng ý với ai."},
        {kind:"tapword", tag:"grammar", q:"Tìm từ SAI trong câu và sửa lại.", text:"The survival of many species depends in protecting their habitats.", answer:"in", fix:["on","upon"], explain:"depend on = phụ thuộc vào."}
      ] },
    { title: "Viết lại câu với từ khoá", instr: "Viết lại câu sao cho nghĩa không đổi, BẮT BUỘC dùng từ in HOA.", tag: "grammar",
      items: [
        {kind:"rewrite", tag:"grammar", key:"USED", s:"People use solar energy to power the lights.", prompt:"Solar energy ___", answers:["Solar energy is used to power the lights.","Solar energy is used by people to power the lights."], explain:"Bị động hiện tại đơn: is + V3."},
        {kind:"rewrite", tag:"grammar", key:"BEEN", s:"Volunteers have planted thousands of trees in the national park.", prompt:"Thousands of trees ___", answers:["Thousands of trees have been planted in the national park.","Thousands of trees have been planted in the national park by volunteers.","Thousands of trees have been planted by volunteers in the national park."], explain:"Bị động hiện tại hoàn thành: have been + V3."},
        {kind:"rewrite", tag:"grammar", key:"FOR", s:"Lan started reading about genetics two hours ago, and she is still reading.", prompt:"Lan ___", answers:["Lan has been reading about genetics for two hours.","Lan's been reading about genetics for two hours."], explain:"Hiện tại hoàn thành tiếp diễn + for + khoảng thời gian."},
        {kind:"rewrite", tag:"grammar", key:"SINCE", s:"The researchers started studying the disease in 2019, and they are still studying it.", prompt:"The researchers ___", answers:["The researchers have been studying the disease since 2019.","The researchers have been studying it since 2019."], explain:"Hiện tại hoàn thành tiếp diễn + since + mốc thời gian."},
        {kind:"rewrite", tag:"grammar", key:"WALKING", s:"While he was walking in the forest, he saw a rare bird.", prompt:"While ___", answers:["While walking in the forest, he saw a rare bird."], explain:"Cùng chủ ngữ (he) → While + V-ing."},
        {kind:"rewrite", tag:"grammar", key:"WRITING", s:"She checked the results before she wrote the report.", prompt:"Before ___", answers:["Before writing the report, she checked the results.","She checked the results before writing the report."], explain:"Cùng chủ ngữ (she) → Before + V-ing."},
        {kind:"rewrite", tag:"grammar", key:"APPROVE", s:"My grandfather thinks keeping wild animals in cages is wrong.", prompt:"My grandfather doesn't ___", answers:["My grandfather doesn't approve of keeping wild animals in cages.","My grandfather does not approve of keeping wild animals in cages."], explain:"approve of + V-ing = tán thành việc gì."},
        {kind:"rewrite", tag:"grammar", key:"SPECIALISES", s:"This zoo mainly focuses on breeding rare birds.", prompt:"This zoo ___", answers:["This zoo specialises in breeding rare birds."], explain:"specialise in + V-ing = chuyên về."}
      ] },
    { title: "Chọn TẤT CẢ câu đúng", instr: "Chọn tất cả các câu đúng ngữ pháp (có thể có 1, 2 hoặc 3 câu đúng).", tag: "grammar",
      items: [
        {kind:"multi", tag:"grammar", q:"Which sentences use the passive correctly?", opts:["Smallpox was finally wiped out in 1980.","Antibiotics are use to treat bacterial infections.","The first vaccine was invent by a British doctor.","Cholera is spreading by dirty water."], a:[0], explain:"Bị động: be + V3. Sửa: are used, was invented, is spread."},
        {kind:"multi", tag:"grammar", q:"Which sentences use the present perfect continuous correctly?", opts:["I've been waiting for the bus for twenty minutes.","She has been knowing the answer for a long time.","They've been working on the project since March.","We have been visit the museum twice."], a:[0,2], explain:"'know' là động từ chỉ trạng thái, không dùng thì tiếp diễn (has known). 'twice' chỉ số lần → have visited."},
        {kind:"multi", tag:"grammar", q:"Which sentences use a conjunction + -ing correctly?", opts:["After reading the article, I changed my mind about zoos.","When crossing the road, the car hit a dog.","Before leaving the lab, wash your hands.","While cook dinner, she listened to a podcast."], a:[0,2], explain:"Chỉ rút gọn khi hai mệnh đề cùng chủ ngữ: câu 2 sai (chiếc xe không 'cross the road'). Câu 4 phải là While cooking."},
        {kind:"multi", tag:"grammar", q:"Which sentences use the correct preposition after the verb?", opts:["This animal belongs to a rare species.","Many people died of the plague.","Can you concentrate in your homework?","We listened to a talk about vaccines."], a:[0,1,3], explain:"belong to, die of, listen to đúng. Sửa: concentrate on."},
        {kind:"multi", tag:"grammar", q:"Which sentences use the present perfect (active or passive) correctly?", opts:["A new type of solar light has been developed by students at our school.","The number of tigers in the wild has risen in recent years.","Hundreds of trees have cut down this year.","The keeper has fed the animals yesterday."], a:[0,1], explain:"Câu 3 cần bị động: have been cut down. Câu 4 có 'yesterday' → quá khứ đơn: fed."}
      ] },
    { title: "Chia động từ trong đoạn văn", instr: "Chia động từ trong ngoặc ở thì đúng (quá khứ đơn, hiện tại hoàn thành, hiện tại hoàn thành tiếp diễn, chủ động hoặc bị động).", tag: "grammar",
      items: [
        {kind:"cloze", tag:"grammar", title:"Our school science club",
          text:"Our school science club {1} (start) three years ago. Since then, we {2} (complete) more than fifteen projects. This term, we {3} (study) the bees that live in our school garden for about two months, and we are still learning a lot.\n\nLast week, a bee hotel {4} (build) by the Year 7 students, and on Monday it {5} (put) next to the flower beds. So far, more than twenty wild bees {6} (see) near it.\n\nOur teacher, Ms Hà, is very pleased. 'You {7} (work) so hard recently!' she told us yesterday. Every year, the best projects {8} (present) at the city science fair, so we hope ours will be one of them.",
          gaps:[
            {answers:["started"], explain:"three years ago → quá khứ đơn."},
            {answers:["have completed","'ve completed"], explain:"Since then + số lượng đã hoàn thành → hiện tại hoàn thành: have completed."},
            {answers:["have been studying","'ve been studying"], hint:"hiện tại hoàn thành tiếp diễn", explain:"Bắt đầu 2 tháng trước, vẫn đang tiếp diễn → have been studying."},
            {answers:["was built"], explain:"Last week + by the Year 7 students → quá khứ đơn bị động: was built."},
            {answers:["was put"], explain:"on Monday → quá khứ đơn bị động: was put."},
            {answers:["have been seen"], explain:"So far + bị động → hiện tại hoàn thành bị động: have been seen."},
            {answers:["have been working","'ve been working"], hint:"hiện tại hoàn thành tiếp diễn", explain:"recently, nhấn mạnh quá trình làm việc chăm chỉ → have been working."},
            {answers:["are presented"], explain:"Every year (thói quen) + bị động → hiện tại đơn bị động: are presented."}
          ]}
      ] }
  ],
  writing: [
    { title: "Nối câu với từ nối", instr: "Nối hai câu thành một (hoặc viết lại) theo gợi ý, BẮT BUỘC dùng từ nối in HOA.", tag: "writing",
      items: [
        {kind:"rewrite", tag:"writing", key:"ALTHOUGH", s:"Zoos protect endangered species. Many animals are unhappy in cages.", prompt:"Although ___", answers:["Although zoos protect endangered species, many animals are unhappy in cages."], explain:"Although + mệnh đề, mệnh đề (hai ý trái ngược)."},
        {kind:"rewrite", tag:"writing", key:"HOWEVER", s:"Antibiotics are very useful, but some bacteria are now resistant to them.", prompt:"Antibiotics are very useful. ___", answers:["Antibiotics are very useful. However, some bacteria are now resistant to them."], explain:"However, + mệnh đề (đứng đầu câu thứ hai)."},
        {kind:"rewrite", tag:"writing", key:"DESPITE", s:"The medicine was expensive. Many families bought it.", prompt:"Despite ___", answers:["Despite the high price, many families bought the medicine.","Despite its high price, many families bought the medicine.","Despite the medicine being expensive, many families bought it.","Despite the fact that the medicine was expensive, many families bought it.","Despite being expensive, the medicine was bought by many families."], explain:"Despite + danh từ / V-ing / the fact that + mệnh đề."},
        {kind:"rewrite", tag:"writing", key:"WHICH", s:"Bees carry pollen from flower to flower. This helps plants produce fruit.", prompt:"Bees carry pollen from flower to flower, ___", answers:["Bees carry pollen from flower to flower, which helps plants produce fruit.","Bees carry pollen from flower to flower, which helps plants to produce fruit."], explain:", which … có thể thay cho cả mệnh đề phía trước."},
        {kind:"rewrite", tag:"writing", key:"WHO", s:"Marie Curie won two Nobel Prizes. She was born in Poland.", prompt:"Marie Curie, ___", answers:["Marie Curie, who was born in Poland, won two Nobel Prizes.","Marie Curie, who won two Nobel Prizes, was born in Poland."], explain:"Mệnh đề quan hệ không xác định cho người: , who … ,"},
        {kind:"rewrite", tag:"writing", key:"SO THAT", s:"Herders put up lights around their farms. They want to keep lions away.", prompt:"Herders put up lights around their farms ___", answers:["Herders put up lights around their farms so that they can keep lions away.","Herders put up lights around their farms so that they can keep the lions away.","Herders put up lights around their farms so that lions stay away.","Herders put up lights around their farms so that lions will stay away.","Herders put up lights around their farms so that lions keep away.","Herders put up lights around their farms so that they keep lions away."], explain:"so that + mệnh đề (thường có can/will) = để mà."},
        {kind:"rewrite", tag:"writing", key:"IN ORDER TO", s:"Scientists study the human genome. They want to understand genetic diseases.", prompt:"Scientists study the human genome ___", answers:["Scientists study the human genome in order to understand genetic diseases."], explain:"in order to + V nguyên mẫu (chỉ mục đích)."},
        {kind:"rewrite", tag:"writing", key:"AS A RESULT", s:"Large areas of forest have been cut down. Many species have lost their habitat.", prompt:"Large areas of forest have been cut down. ___", answers:["Large areas of forest have been cut down. As a result, many species have lost their habitat.","Large areas of forest have been cut down. As a result, many species have lost their habitats."], explain:"As a result, … = Kết quả là …"}
      ] },
    { title: "Cấu trúc đoạn văn", instr: "Chọn đáp án đúng nhất về cách viết đoạn văn.", tag: "writing",
      items: [
        {kind:"mcq", tag:"writing", q:"Choose the best TOPIC SENTENCE for a paragraph about why vaccination is important.", opts:["Vaccination is one of the most effective ways to protect people from serious diseases.","I had an injection when I was six.","Smallpox was a terrible disease.","Some people are afraid of needles."], a:0, explain:"Câu chủ đề nêu ý chính bao quát cả đoạn."},
        {kind:"mcq", tag:"writing", q:"Which sentence is OBJECTIVE rather than biased?", opts:["According to the WWF, tiger numbers in the wild have increased in recent years.","Anyone who visits a zoo is cruel and selfish.","Scientists who disagree with me are just stupid.","Zoos are obviously the worst idea in the world."], a:0, explain:"Câu khách quan có nguồn dẫn (According to…) và không dùng từ ngữ cảm xúc mạnh."},
        {kind:"mcq", tag:"writing", q:"Which sentence does NOT belong in a paragraph about the dangers of habitat loss?", opts:["My brother's favourite animal is the penguin.","When forests are cut down, animals lose their homes and food.","Many species cannot survive in a new environment.","Habitat loss is one of the main causes of extinction."], a:0, explain:"Câu về con vật yêu thích của em trai không liên quan đến chủ đề mất môi trường sống."},
        {kind:"mcq", tag:"writing", q:"Choose the best CONCLUDING SENTENCE for an essay arguing that zoos should be improved.", opts:["In conclusion, zoos can do important work, but they must give animals more space and a more natural life.","First, many zoos keep animals in small cages.","For example, the giant panda has been bred in zoos.","Some people visit zoos at the weekend."], a:0, explain:"Câu kết bắt đầu bằng In conclusion, tóm tắt và nêu rõ quan điểm."},
        {kind:"mcq", tag:"writing", q:"Which connective best completes the text? 'Some zoos breed endangered species. ___, they release some of these animals back into the wild.'", opts:["Furthermore","However","For example","In conclusion"], a:0, explain:"Câu thứ hai bổ sung thêm một việc tốt của sở thú → Furthermore (thêm vào đó)."}
      ] },
    { title: "Sắp xếp thành đoạn văn", instr: "Sắp xếp các câu thành một đoạn văn hoàn chỉnh: câu chủ đề → các ý hỗ trợ → câu kết.", tag: "writing",
      items: [
        {kind:"seqorder", tag:"writing", q:"Sắp xếp đoạn văn về công dụng của dấu vân tay.",
          items:[
            "Fingerprints are useful in many different areas of modern life.",
            "First, the police use them to solve crimes, because no two people have the same fingerprints.",
            "In addition, many smartphones can now be unlocked with a fingerprint instead of a password.",
            "Finally, some countries collect the fingerprints of travellers when they enter the country.",
            "In conclusion, this small pattern on our fingertips has become an important tool for keeping us safe."
          ],
          vi:"Câu chủ đề → First → In addition → Finally → In conclusion."},
        {kind:"seqorder", tag:"writing", q:"Sắp xếp đoạn văn thông tin về loài sao la.",
          items:[
            "The saola is one of the rarest and most mysterious mammals in the world.",
            "It was first discovered by scientists in 1992 in the forests on the border between Vietnam and Laos.",
            "Because it is so shy, it has hardly ever been seen in the wild.",
            "However, even though it is rarely seen, scientists know that its biggest threat is the wire traps that hunters set in the forest.",
            "For these reasons, it is listed as critically endangered.",
            "Conservation groups are now removing traps and protecting its habitat, in the hope that this 'Asian unicorn' can be saved."
          ],
          vi:"Câu chủ đề → được phát hiện năm 1992 → hiếm khi được nhìn thấy → mối đe doạ (However, even though it is rarely seen…) → For these reasons → giải pháp bảo tồn."}
      ] },
    { title: "Viết đoạn văn có hướng dẫn", instr: "Viết đoạn văn theo dàn ý. Cố gắng dùng hết các từ/cụm từ gợi ý.", tag: "writing",
      items: [
        {kind:"guided", tag:"writing",
          prompt:"Viết <b>một đoạn văn thông tin</b> (90–130 từ) giới thiệu một phát minh hoặc khám phá khoa học đã thay đổi thế giới (ví dụ: tia X, thuốc kháng sinh, bóng đèn điện, vắc-xin). Dùng câu bị động và thì hiện tại hoàn thành.",
          outline:[
            "Câu chủ đề: Giới thiệu phát minh/khám phá em chọn (One discovery that has changed the world is…).",
            "Ý 1: Ai phát minh/khám phá ra, khi nào? — bị động quá khứ (was/were discovered/invented by…).",
            "Ý 2: Từ đó đến nay nó được dùng như thế nào? — hiện tại hoàn thành bị động (have/has been used…).",
            "Ý 3: Một hạn chế hoặc vấn đề — bắt đầu bằng However, …",
            "Kết luận: Vì sao nó quan trọng — In conclusion, …"
          ],
          useWords:["discovery","has changed","were discovered","have been used","However","In conclusion"],
          minWords:90,
          sample:"One discovery that has changed the world is the X-ray. X-rays were discovered by the German scientist Wilhelm Röntgen in 1895, and he won the first Nobel Prize in Physics for his work. Since then, X-rays have been used in hospitals all over the world to find broken bones and other health problems. They are also used at airports to check passengers' bags. However, X-rays can be harmful if people are exposed to them too often, so doctors use them carefully. In conclusion, Röntgen's discovery has helped millions of people, and it is still very important in medicine today.",
          criteria:"Có câu chủ đề và câu kết luận rõ ràng; dùng đúng ít nhất 2 câu bị động (quá khứ đơn, hiện tại hoàn thành); thông tin khách quan (năm, tên người, công dụng), không dùng từ ngữ cảm xúc quá mức; dùng đủ các từ gợi ý; 90–130 từ."},
        {kind:"guided", tag:"writing",
          prompt:"Viết <b>một đoạn văn nêu quan điểm</b> (90–130 từ) trả lời câu hỏi: <i>Should people be allowed to keep wild animals as pets?</i>",
          outline:[
            "Câu mở đầu: Đặt lại câu hỏi và nêu rõ quan điểm của em (In my opinion, …).",
            "Lý do 1: Bản năng của động vật hoang dã — bắt đầu bằng First, …",
            "Lý do 2: Ảnh hưởng đến các loài nguy cấp / nạn buôn bán động vật — bắt đầu bằng In addition, …",
            "Ý kiến trái chiều và phản bác: Some people say … However, …",
            "Kết luận: Nhắc lại quan điểm — In conclusion, …"
          ],
          useWords:["in captivity","instinct","suffer from","First","In addition","In conclusion"],
          minWords:90,
          sample:"Should people be allowed to keep wild animals as pets? In my opinion, the answer is no. First, wild animals such as monkeys and parrots have a strong instinct to climb, fly and live in groups. When they are kept in captivity, they cannot follow this instinct, so many of them suffer from stress and boredom. In addition, the pet trade is a major threat to many endangered species, because animals are often taken from the wild illegally. Some people say that their pets are well looked after. However, even a kind owner cannot give a wild animal the life it needs. In conclusion, wild animals belong in the wild, not in our homes.",
          criteria:"Nêu quan điểm rõ ràng ngay từ đầu; có ít nhất 2 lý do kèm giải thích hoặc ví dụ; dùng từ nối (First, In addition, However, In conclusion) đúng chỗ; dùng đúng giới từ sau động từ (suffer from…); dùng đủ các từ gợi ý; 90–130 từ."}
      ] }
  ]
});

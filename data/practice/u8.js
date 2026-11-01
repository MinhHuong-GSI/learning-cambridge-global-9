CG9.addPracticePack({
  unit: 8,
  reading: [
    { title: "Đọc & chọn từ đúng (Multiple-choice cloze)", instr: "Đọc đoạn văn và chọn từ đúng nhất cho mỗi chỗ trống.", tag: "reading",
      items: [
        {kind:"cloze", title:"Mangroves: the coast's best friend", tag:"reading",
         text:"Along the coast of the Mekong Delta, mangrove forests grow where the land meets the sea. These trees protect the coast in an amazing way. Their thick roots slow down the waves and hold the soil in place, so {1} cause less damage when a typhoon arrives.\n\nUnfortunately, in the past, large areas of mangroves were {2} down to make space for shrimp farms. Without the trees, the sea began to wash the land away. Storms also seem to be happening {3} frequently than before, because warmer oceans give them more energy.\n\nNow, local communities are trying to {4} after the remaining forests. Volunteers plant thousands of young trees every year, and some farmers have stopped {5} new ponds. Scientists say that mangroves also help to fight global warming. They take carbon dioxide out of the {6} and store it in their roots and in the mud.\n\nPlanting mangroves is not easy. Many young trees are {7} out by strong waves before their roots grow deep enough. However, the projects are slowly working. If we keep {8} new trees, the forests will protect both people and wildlife for many years.",
         gaps:[
           {opts:["floods","droughts","heatwaves","mist"], a:0},
           {opts:["cut","wiped","run","called"], a:0},
           {opts:["more","most","many","the most"], a:0},
           {opts:["look","take","care","keep"], a:0},
           {opts:["digging","to dig","dig","dug"], a:0},
           {opts:["atmosphere","drought","moisture","rays"], a:0},
           {opts:["wiped","cut","run","called"], a:0},
           {opts:["planting","to plant","plant","planted"], a:0}
         ],
         explain:"(1) floods: bão gây lũ ven biển. (2) cut down = chặt hạ. (3) more frequently than: so sánh hơn của trạng từ tần suất. (4) look after = chăm sóc, bảo vệ. (5) stop + V-ing = ngừng làm gì. (6) the atmosphere = khí quyển. (7) wipe out = xoá sổ, tiêu diệt. (8) keep + V-ing = tiếp tục làm gì."}
      ] },
    { title: "Đọc & điền từ (Open cloze)", instr: "Điền MỘT từ thích hợp vào mỗi chỗ trống.", tag: "reading",
      items: [
        {kind:"cloze", title:"The repair café", tag:"reading",
         text:"Once a month, a small community centre in our town turns {1} a 'repair café'. Local people bring broken things, such as toasters, lamps and clothes, and volunteers help them fix them for free. The idea started in the Netherlands in 2009, and there are now thousands of repair cafés {2} over the world.\n\nThe organisers say that we throw {3} far too many things that could easily be repaired. {4} we mend a lamp instead of buying a new one, we save money and we also cut down {5} waste. Buying fewer new products also means that factories use up fewer resources.\n\nMy grandfather volunteers there every month. He has been repairing radios {6} he was a teenager, so he knows exactly what to do. Last time, he spent an hour fixing a little girl's music box.\n\nVisitors are encouraged to watch and learn, so that next time they can do the repair {7}. As my grandfather says, 'The best way to look after the planet is to look after {8} things you already own.'",
         gaps:[
           {answers:["into"]},
           {answers:["all"]},
           {answers:["away"]},
           {answers:["If","When"]},
           {answers:["on"]},
           {answers:["since"]},
           {answers:["themselves","alone"]},
           {answers:["the"]}
         ],
         explain:"(1) turn into = biến thành. (2) all over the world. (3) throw away = vứt bỏ. (4) If/When + mệnh đề điều kiện. (5) cut down on = cắt giảm. (6) since + mốc thời gian (hiện tại hoàn thành tiếp diễn). (7) do something themselves = tự làm. (8) the things (that) you already own."}
      ] },
    { title: "Chọn tiêu đề cho đoạn văn", instr: "Chọn tiêu đề phù hợp cho mỗi đoạn. Có 1 tiêu đề thừa.", tag: "reading",
      items: [
        {kind:"headings", tag:"reading",
         paras:[
           "Typhoons are huge, rotating storms that form over warm ocean water. When the surface of the sea is hotter than about 26°C, large amounts of water evaporate and rise into the sky. As the moist air cools, it forms tall clouds, and the storm begins to spin. The same kind of storm is called a hurricane in the Atlantic.",
           "The strong winds of a typhoon can reach more than 200 kilometres an hour. They can blow down trees, power lines and even houses. However, the greatest danger often comes from water. Heavy rain causes rivers to flood, and the wind pushes the sea onto the land, so coastal towns can be under water within a few hours.",
           "Because forecasts are now very accurate, people usually have a few days to prepare. Families are advised to store drinking water and food, charge their phones and tie down anything that could be blown away. In areas near the sea, people may be asked to leave their homes and stay in schools or other safe buildings.",
           "Scientists believe that global warming is changing typhoons. As the oceans get warmer, storms can collect more energy and moisture. This means that, although typhoons may not happen more often, the strongest ones are likely to become more powerful and bring heavier rain. Cutting down on greenhouse gases is therefore important for coastal communities."
         ],
         headings:["How a typhoon is born","Wind and water","Getting ready for the storm","Stronger storms ahead?","Why weather forecasts are often wrong"],
         a:[0,1,2,3],
         explain:"Đoạn 1: bão hình thành thế nào; đoạn 2: gió và nước gây nguy hiểm; đoạn 3: chuẩn bị trước bão; đoạn 4: bão mạnh hơn trong tương lai do nóng lên toàn cầu. Tiêu đề 'Why weather forecasts are often wrong' là thừa — đoạn 3 nói dự báo rất chính xác."}
      ] },
    { title: "Sắp xếp sự việc", instr: "Chạm vào các câu theo đúng thứ tự.", tag: "reading",
      items: [
        {kind:"seqorder", q:"Sắp xếp các bước làm phân ủ (compost) theo đúng thứ tự.", tag:"reading",
         items:[
           "First, choose a shady place in your garden for your compost bin.",
           "Then put a layer of twigs and dry leaves at the bottom of the bin so that air can move through it.",
           "Next, add your green waste, such as fruit peelings, vegetable scraps and coffee grounds.",
           "After each layer of green waste, cover it with some dry material like torn cardboard or paper.",
           "Every few weeks, mix everything with a garden fork to help it break down faster.",
           "After about six months, the waste will have turned into dark, rich compost for your plants."
         ],
         explain:"Chú ý: First → Then (lớp dưới đáy) → Next → After each layer → Every few weeks → After about six months."},
        {kind:"seqorder", q:"Sắp xếp câu chuyện về trận lũ ở làng của Lan theo đúng thứ tự.", tag:"reading",
         items:[
           "It had been raining heavily for three days when the river near Lan's village began to rise.",
           "On the fourth morning, the local radio warned that the river would flood that night.",
           "Lan's family quickly moved their rice, furniture and animals to the upper floor of the house.",
           "By midnight, the water had reached their front door.",
           "The next day, the whole village was under water, but everyone was safe.",
           "When the water finally went down a week later, neighbours worked together to clean the houses and the school."
         ],
         explain:"Trình tự thời gian: mưa ba ngày → buổi sáng thứ tư có cảnh báo → chuyển đồ lên tầng → nửa đêm nước tới cửa → hôm sau cả làng ngập → một tuần sau nước rút, cùng dọn dẹp."}
      ] },
    { title: "Tìm từ trong đoạn văn", instr: "Chạm vào từ có nghĩa được cho.", tag: "reading",
      items: [
        {kind:"tapword", q:"Tìm từ có nghĩa là 'làm ô nhiễm'.", text:"The factory was closed after inspectors found that it was polluting the river with chemicals.", answer:"polluting", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'môi trường sống (của động vật)'.", text:"Many species of frog are now in danger because their habitats are being destroyed.", answer:"habitats", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'héo úa'.", text:"After weeks without rain, the farmers watched their crops wither in the fields.", answer:"wither", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'tạo ra, sản xuất (điện)'.", text:"The solar panels on the roof generate enough electricity for the whole school.", answer:"generate", tag:"reading"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'được tái chế'.", text:"Glass bottles can be recycled again and again without losing their quality.", answer:"recycled", tag:"reading"}
      ] }
  ],
  vocab: [
    { title: "Kết hợp từ (Collocations)", instr: "Chọn TẤT CẢ các từ/cụm từ đi được với từ cho sẵn.", tag: "vocab",
      items: [
        {kind:"multi", q:"Which words can go with <b>heavy</b>?", opts:["rain","frost","traffic","breeze","sunshine"], a:[0,1,2], explain:"heavy rain, heavy frost, heavy traffic. Ta nói 'a light breeze', 'bright/strong sunshine'.", tag:"vocab"},
        {kind:"multi", q:"Which words can go with <b>strong</b>?", opts:["winds","coffee","rain","showers","drought"], a:[0,1], explain:"strong winds, strong coffee. Ta nói heavy rain, light/heavy showers, a severe/long drought.", tag:"vocab"},
        {kind:"multi", q:"Which words can follow <b>single-use</b>?", opts:["plastic","bags","cups","compost","nutrients"], a:[0,1,2], explain:"single-use plastic / bags / cups = đồ dùng một lần.", tag:"vocab"},
        {kind:"multi", q:"Which can follow <b>cut down on</b>?", opts:["waste","sugar","car journeys","the planet","the atmosphere"], a:[0,1,2], explain:"cut down on = giảm bớt (lượng thứ gì): waste, sugar, car journeys. Không thể 'giảm bớt' hành tinh hay khí quyển.", tag:"vocab"},
        {kind:"multi", q:"Which words can go with <b>renewable</b>?", opts:["energy","resources","plastic","rubbish","drought"], a:[0,1], explain:"renewable energy (năng lượng tái tạo), renewable resources (tài nguyên tái tạo).", tag:"vocab"},
        {kind:"multi", q:"Which words can follow <b>air</b>?", opts:["quality","pollution","conditioning","rays","drought"], a:[0,1,2], explain:"air quality, air pollution, air conditioning. Ta nói 'the Sun's rays'.", tag:"vocab"}
      ] },
    { title: "Từ không cùng nhóm", instr: "Chọn từ KHÔNG cùng nhóm với các từ còn lại.", tag: "vocab",
      items: [
        {kind:"mcq", q:"Which word is the odd one out?", opts:["drought","flood","heatwave","compost"], a:3, explain:"compost (phân ủ) không phải hiện tượng thời tiết cực đoan.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["hurricane","typhoon","cyclone","mist"], a:3, explain:"mist (sương mù) không phải là bão xoáy; hurricane, typhoon, cyclone là tên gọi của cùng một loại bão.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["reusable","biodegradable","recyclable","single-use"], a:3, explain:"single-use (dùng một lần) gây hại cho môi trường; ba từ kia chỉ đồ thân thiện với môi trường.", tag:"vocab"},
        {kind:"mcq", q:"Which verb is the odd one out?", opts:["avoid","consider","suggest","decide"], a:3, explain:"decide + to V; avoid, consider, suggest + V-ing.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["hydroponics","vertical farming","nutrient","tornado"], a:3, explain:"tornado (lốc xoáy) là thời tiết; các từ kia thuộc nông nghiệp đô thị.", tag:"vocab"},
        {kind:"mcq", q:"Which is the odd one out?", opts:["electric vehicle","cycle route","low-emissions zone","coal power station"], a:3, explain:"coal power station (nhà máy nhiệt điện than) gây ô nhiễm; ba thứ kia giúp không khí sạch hơn.", tag:"vocab"},
        {kind:"mcq", q:"Which is the odd one out?", opts:["headline","caption","quote","compost bin"], a:3, explain:"compost bin (thùng ủ phân) không phải một phần của bản báo cáo.", tag:"vocab"},
        {kind:"mcq", q:"Which word is the odd one out?", opts:["never","hardly ever","occasionally","yesterday"], a:3, explain:"yesterday là trạng từ chỉ thời gian; ba từ kia là trạng từ chỉ tần suất.", tag:"vocab"}
      ] },
    { title: "Từ đồng nghĩa / trái nghĩa", instr: "Chọn từ có nghĩa giống hoặc trái ngược với từ in đậm.", tag: "vocab",
      items: [
        {kind:"mcq", q:"Choose the meaning closest to <b>wipe out</b>.", opts:["destroy completely","protect","clean carefully","grow quickly"], a:0, explain:"wipe out = xoá sổ, tiêu diệt hoàn toàn.", tag:"vocab"},
        {kind:"mcq", q:"Which is the OPPOSITE of <b>drought</b> (too little water)?", opts:["flood","heatwave","wildfire","desert"], a:0, explain:"drought = quá ít nước; flood = quá nhiều nước.", tag:"vocab"},
        {kind:"mcq", q:"Choose the meaning closest to <b>reusable</b>.", opts:["can be used again","can only be used once","breaks down naturally","made of bamboo"], a:0, explain:"reusable = có thể dùng lại nhiều lần.", tag:"vocab"},
        {kind:"mcq", q:"Choose the OPPOSITE of <b>disused</b> (a disused factory).", opts:["in use","empty","abandoned","old"], a:0, explain:"disused = bỏ hoang, không còn dùng ≠ in use (đang được sử dụng).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word closest in meaning to <b>cut down on</b>.", opts:["reduce","increase","throw away","run out of"], a:0, explain:"cut down on = reduce (giảm bớt).", tag:"vocab"},
        {kind:"mcq", q:"Choose the OPPOSITE of <b>hardly ever</b>.", opts:["frequently","rarely","seldom","occasionally"], a:0, explain:"hardly ever = rarely/seldom (hiếm khi) ≠ frequently (thường xuyên).", tag:"vocab"},
        {kind:"mcq", q:"Choose the word closest in meaning to <b>consumer</b>.", opts:["buyer","farmer","producer","seller"], a:0, explain:"consumer = người tiêu dùng, người mua (buyer).", tag:"vocab"},
        {kind:"mcq", q:"Choose the OPPOSITE of <b>cool down</b>.", opts:["warm up","calm down","slow down","run out"], a:0, explain:"cool down (làm mát, hạ nhiệt) ≠ warm up (làm ấm lên).", tag:"vocab"}
      ] },
    { title: "Đoán nghĩa từ ngữ cảnh", instr: "Đọc câu và chạm vào từ có nghĩa được cho.", tag: "vocab",
      items: [
        {kind:"tapword", q:"Tìm từ có nghĩa là 'cấm'.", text:"The council has banned plastic straws, so cafés now offer paper ones instead.", answer:"banned", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'khói, khí thải độc hại'.", text:"Fumes from thousands of cars make the air in the city centre unhealthy to breathe.", answer:"Fumes", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'cảnh báo'.", text:"Scientists warn that sea levels could rise by up to one metre by 2100.", answer:"warn", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'được chuyển đổi, cải tạo thành'.", text:"The old warehouse has been converted into a library with a green roof.", answer:"converted", tag:"vocab"},
        {kind:"tapword", q:"Tìm từ có nghĩa là 'rác vứt bừa bãi'.", text:"Litter left on the beach is often carried into the sea by the tide.", answer:"Litter", tag:"vocab"}
      ] },
    { title: "Hoàn thành câu với từ cho sẵn", instr: "Chọn từ trong khung để điền vào chỗ trống. Có 2 từ thừa.", tag: "vocab",
      wordbank: ["drought","flood","compost","biodegradable","reusable","evaporates","nutrients","consumers","run out of","call for"],
      items: [
        {kind:"gap", s:"Banana leaves are ___, so they break down naturally in a few weeks.", answers:["biodegradable"], tag:"vocab"},
        {kind:"gap", s:"When the sun heats the sea, water ___ and rises into the air.", answers:["evaporates"], tag:"vocab"},
        {kind:"gap", s:"The ___ lasted for two years, and many farmers lost their crops because there was no rain.", answers:["drought"], tag:"vocab"},
        {kind:"gap", s:"Instead of buying a new plastic bottle every day, use a ___ one that you can fill again and again.", answers:["reusable"], tag:"vocab"},
        {kind:"gap", s:"If we don't save energy now, we may ___ fossil fuels sooner than we think.", answers:["run out of"], tag:"vocab"},
        {kind:"gap", s:"In hydroponics, plants get all the ___ they need from water instead of soil.", answers:["nutrients"], tag:"vocab"},
        {kind:"gap", s:"Environmental groups ___ stronger laws to protect the rainforest.", answers:["call for"], tag:"vocab"},
        {kind:"gap", s:"Vegetable peelings and coffee grounds can be turned into ___ for the garden.", answers:["compost"], tag:"vocab"}
      ] }
  ],
  grammar: [
    { title: "Tìm và sửa lỗi sai", instr: "Mỗi câu có MỘT từ sai. Chạm vào từ sai rồi gõ từ đúng.", tag: "grammar",
      items: [
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"We should avoid buy food in plastic packaging.", answer:"buy", fix:["buying"], explain:"avoid + V-ing → avoid buying.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"My parents are considering install solar panels on our roof.", answer:"install", fix:["installing"], explain:"consider + V-ing → considering installing.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Heatwaves happen more frequent than they did fifty years ago.", answer:"frequent", fix:["frequently","often"], explain:"Bổ nghĩa cho động từ 'happen' cần trạng từ: more frequently (hoặc more often).", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Floods happen most often in October, when the rain is the heavy.", answer:"heavy", fix:["heaviest"], explain:"Sau 'the' (so sánh nhất của tính từ ngắn): the heaviest.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Some villages are running out from clean water.", answer:"from", fix:["of"], explain:"Cụm động từ: run out of = cạn kiệt, hết.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Trees help to cool up the city in summer.", answer:"up", fix:["down"], explain:"cool down = làm mát, hạ nhiệt (không có 'cool up').", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"The number of electric cars in our city are growing every year.", answer:"are", fix:["is"], explain:"Danh từ chính là 'The number' (số ít) → động từ số ít: is growing.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Renewable energy from solar panels help to reduce pollution.", answer:"help", fix:["helps"], explain:"Danh từ chính là 'energy' (không đếm được, số ít) → helps.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Climate change could wipe off many species of coral.", answer:"off", fix:["out"], explain:"wipe out = xoá sổ, tiêu diệt; 'wipe off' nghĩa là lau sạch.", tag:"grammar"},
        {kind:"tapword", q:"Tìm từ SAI trong câu và sửa lại.", text:"Thank you for help us clean the park last weekend.", answer:"help", fix:["helping"], explain:"Sau giới từ (for) động từ phải ở dạng V-ing: for helping.", tag:"grammar"}
      ] },
    { title: "Viết lại câu với từ khoá", instr: "Viết lại câu sao cho nghĩa không đổi, BẮT BUỘC dùng từ in hoa.", tag: "grammar",
      items: [
        {kind:"rewrite", key:"HARDLY", s:"It doesn't rain very often in this region in summer.", prompt:"It ___", answers:["It hardly ever rains in this region in summer.","It hardly ever rains in summer in this region."], explain:"hardly ever = hiếm khi; đứng trước động từ thường (rains).", tag:"grammar"},
        {kind:"rewrite", key:"MORE", s:"In the past, floods were less common than they are now.", prompt:"Floods ___", answers:["Floods happen more often now than in the past.","Floods happen more frequently now than in the past.","Floods are more common now than in the past.","Floods are more common now than they were in the past.","Floods happen more often than in the past.","Floods happen more frequently than in the past."], explain:"less common in the past = more often/more frequently now.", tag:"grammar"},
        {kind:"rewrite", key:"CUT", s:"My family is trying to use less electricity.", prompt:"My family is trying to ___", answers:["My family is trying to cut down on electricity.","My family is trying to cut down on the electricity we use.","My family is trying to cut down on the amount of electricity we use.","My family is trying to cut down on using electricity.","My family is trying to cut down on electricity use."], explain:"cut down on = giảm bớt.", tag:"grammar"},
        {kind:"rewrite", key:"RUN", s:"There is no petrol left in the car.", prompt:"The car has ___", answers:["The car has run out of petrol."], explain:"run out of = hết sạch; hiện tại hoàn thành: has run out of.", tag:"grammar"},
        {kind:"rewrite", key:"SUGGESTED", s:"'Let's plant some trees in the playground,' said our teacher.", prompt:"Our teacher ___", answers:["Our teacher suggested planting some trees in the playground.","Our teacher suggested planting trees in the playground.","Our teacher suggested that we plant some trees in the playground.","Our teacher suggested that we should plant some trees in the playground.","Our teacher suggested we plant some trees in the playground.","Our teacher suggested we should plant some trees in the playground."], explain:"suggest + V-ing (hoặc suggest that + S + (should) V).", tag:"grammar"},
        {kind:"rewrite", key:"FEEL", s:"I'd rather not go out in this heavy rain.", prompt:"I don't ___", answers:["I don't feel like going out in this heavy rain.","I do not feel like going out in this heavy rain."], explain:"feel like + V-ing = muốn làm gì.", tag:"grammar"},
        {kind:"rewrite", key:"GAVE", s:"Ben stopped eating meat last year.", prompt:"Ben ___", answers:["Ben gave up eating meat last year.","Ben gave up meat last year."], explain:"give up + V-ing = từ bỏ (thói quen).", tag:"grammar"},
        {kind:"rewrite", key:"KEPT", s:"We continued recycling even after the campaign ended.", prompt:"We ___", answers:["We kept recycling even after the campaign ended.","We kept on recycling even after the campaign ended."], explain:"keep (on) + V-ing = tiếp tục làm gì.", tag:"grammar"}
      ] },
    { title: "Chọn TẤT CẢ câu đúng", instr: "Mỗi câu hỏi có từ 1 đến 3 câu đúng. Chọn tất cả.", tag: "grammar",
      items: [
        {kind:"multi", q:"Which sentences are correct? (verbs + -ing)", opts:["We should avoid using plastic straws.","Have you considered to buy a reusable bag?","My brother suggested taking the bus.","I don't mind walk to school."], a:[0,2], explain:"Câu 2 sai: considered buying. Câu 4 sai: mind walking.", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (adverbs of frequency)", opts:["It hardly ever snows here.","We have often floods in October.","Heatwaves are happening more frequently than before.","In this region, tornadoes happen most frequently in spring."], a:[0,2,3], explain:"Câu 2 sai: We often have floods in October (trạng từ tần suất đứng trước động từ thường).", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (multi-word verbs)", opts:["We need to cut down on plastic.","The world is running out of fresh water.","Please look after of the plants while I'm away.","Don't throw away food that you can still eat."], a:[0,1,3], explain:"Câu 3 sai: look after the plants (không có 'of').", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (complex noun phrases)", opts:["The bags made from bamboo are biodegradable.","The problem with plastic bottles are serious.","A row of solar panels covers the roof.","The trees in the park keeps the area cool."], a:[0,2], explain:"Câu 2 sai: danh từ chính 'problem' số ít → is. Câu 4 sai: danh từ chính 'trees' số nhiều → keep.", tag:"grammar"},
        {kind:"multi", q:"Which sentences are correct? (frequency and comparison)", opts:["This year it rained more often than last year.","Floods happen the most frequent in autumn.","It rarely rains in the desert.","In our city, it rains frequentlier in July."], a:[0,2], explain:"Câu 2 sai: most frequently (trạng từ). Câu 4 sai: more frequently (không có 'frequentlier').", tag:"grammar"}
      ] },
    { title: "Chia động từ trong đoạn văn", instr: "Chia động từ trong ngoặc ở dạng đúng (V-ing, hiện tại hoàn thành, bị động…).", tag: "grammar",
      items: [
        {kind:"cloze", title:"Our green challenge", tag:"grammar",
         text:"Our class has decided to start a 'green challenge'. For one month, everyone will try to avoid {1} (use) single-use plastic. Last week, our teacher suggested {2} (bring) our lunch in reusable boxes, and most of us agreed. Linh {3} (already / give up) bottled water, and she now carries a metal bottle everywhere.\n\nWe also discussed {4} (start) a small vegetable garden behind the school. Some students don't feel like {5} (work) outside in the heat, but others are excited. Imagine {6} (eat) tomatoes that you have grown yourself!\n\nSo far, we have collected 300 plastic bottles. Next Friday, the bottles {7} (take) to a recycling centre by our teacher. We hope that, by the end of the month, every class in the school {8} (join) the challenge.",
         gaps:[
           {answers:["using"]},
           {answers:["bringing"]},
           {answers:["has already given up","'s already given up"]},
           {answers:["starting"]},
           {answers:["working"]},
           {answers:["eating"]},
           {answers:["will be taken","are going to be taken","are being taken"]},
           {answers:["will have joined","will join","has joined"]}
         ],
         explain:"(1) avoid + V-ing. (2) suggest + V-ing. (3) hiện tại hoàn thành với already: has already given up. (4) discuss + V-ing. (5) feel like + V-ing. (6) imagine + V-ing. (7) bị động tương lai (có 'by our teacher', 'Next Friday'): will be taken. (8) by the end of the month → will have joined."}
      ] }
  ],
  writing: [
    { title: "Nối câu với từ nối", instr: "Nối hai câu thành một (hoặc viết lại), BẮT BUỘC dùng từ/cụm từ in hoa.", tag: "writing",
      items: [
        {kind:"rewrite", key:"ALTHOUGH", s:"Electric cars are expensive. More and more people are buying them.", prompt:"Although ___", answers:["Although electric cars are expensive, more and more people are buying them.","More and more people are buying electric cars although they are expensive."], explain:"Although + mệnh đề 1, mệnh đề 2: nối hai ý trái ngược.", tag:"writing"},
        {kind:"rewrite", key:"HOWEVER", s:"Vertical farms use very little water. They need a lot of electricity.", prompt:"Vertical farms use very little water. ___", answers:["Vertical farms use very little water. However, they need a lot of electricity.","Vertical farms use very little water; however, they need a lot of electricity."], explain:"However, … mở đầu câu thứ hai để nêu ý trái ngược.", tag:"writing"},
        {kind:"rewrite", key:"DESPITE", s:"There was a heatwave. The music festival went ahead.", prompt:"Despite ___", answers:["Despite the heatwave, the music festival went ahead.","Despite the fact that there was a heatwave, the music festival went ahead.","Despite there being a heatwave, the music festival went ahead."], explain:"Despite + danh từ (the heatwave) / the fact that + mệnh đề.", tag:"writing"},
        {kind:"rewrite", key:"WHO", s:"Mr Hung is our science teacher. He started the school's recycling club.", prompt:"Mr Hung, ___", answers:["Mr Hung, who is our science teacher, started the school's recycling club.","Mr Hung, who started the school's recycling club, is our science teacher."], explain:"who thay cho người (Mr Hung), mệnh đề đặt giữa hai dấu phẩy.", tag:"writing"},
        {kind:"rewrite", key:"SO THAT", s:"We planted trees along the road. We wanted the street to be cooler in summer.", prompt:"We planted trees along the road ___", answers:["We planted trees along the road so that the street would be cooler in summer.","We planted trees along the road so that the street could be cooler in summer.","We planted trees along the road so that the street would be cooler in the summer."], explain:"so that + S + would/could + V: chỉ mục đích (câu ở quá khứ).", tag:"writing"},
        {kind:"rewrite", key:"IN ORDER TO", s:"Many cities have built cycle routes. They want to reduce traffic.", prompt:"Many cities have built cycle routes ___", answers:["Many cities have built cycle routes in order to reduce traffic."], explain:"in order to + V nguyên mẫu: để (làm gì).", tag:"writing"},
        {kind:"rewrite", key:"AS A RESULT", s:"The river was full of rubbish. Many fish died.", prompt:"The river was full of rubbish. ___", answers:["The river was full of rubbish. As a result, many fish died."], explain:"As a result, … : nêu kết quả của câu trước.", tag:"writing"},
        {kind:"rewrite", key:"WHICH", s:"Our school has a compost bin. It turns food waste into soil for the garden.", prompt:"Our school has a compost bin ___", answers:["Our school has a compost bin which turns food waste into soil for the garden.","Our school has a compost bin, which turns food waste into soil for the garden."], explain:"which thay cho vật (a compost bin).", tag:"writing"}
      ] },
    { title: "Cấu trúc đoạn văn", instr: "Chọn đáp án đúng nhất về cách viết đoạn văn / báo cáo.", tag: "writing",
      items: [
        {kind:"mcq", q:"Which is the best topic sentence for a paragraph about reducing plastic waste at home?", opts:["There are several simple ways to reduce plastic waste at home.","Plastic was invented more than a hundred years ago.","My sister has a blue water bottle.","Some supermarkets open at seven o'clock."], a:0, explain:"Câu chủ đề nêu ý chính của cả đoạn: các cách giảm rác nhựa ở nhà.", tag:"writing"},
        {kind:"mcq", q:"Which sentence does NOT belong in a paragraph about the causes of air pollution in cities?", opts:["Cars and motorbikes produce harmful fumes.","Factories release smoke into the air.","Burning rubbish also makes the air dirty.","Many people enjoy picnics in the park at weekends."], a:3, explain:"Câu về đi dã ngoại không nói về nguyên nhân ô nhiễm không khí.", tag:"writing"},
        {kind:"mcq", q:"'Urban forests bring many benefits to cities. They provide shade and cool the air in summer. They also absorb pollution and give wildlife a home. ___' Choose the best concluding sentence.", opts:["For all these reasons, every city should plant more trees.","Trees need a lot of water.","First, trees are very tall.","My favourite tree is the mango tree."], a:0, explain:"Câu kết luận tóm lại các lợi ích và đưa ra ý kiến cuối cùng.", tag:"writing"},
        {kind:"mcq", q:"Which would make the best headline for a report about a flood?", opts:["Record Rainfall Floods Hundreds of Homes","It rained a lot and I was sad","In conclusion, floods are bad","Here is some information"], a:0, explain:"Headline ngắn, thu hút, nêu sự kiện chính — không mang cảm xúc cá nhân.", tag:"writing"},
        {kind:"mcq", q:"Which is the best supporting example for: 'Small changes at home can save a lot of energy.'?", opts:["Turning off lights and unplugging chargers can reduce your electricity bill every month.","Energy comes from many different sources.","Some houses are bigger than others.","Solar panels were invented in the 1950s."], a:0, explain:"Ví dụ cụ thể về một thay đổi nhỏ giúp tiết kiệm năng lượng.", tag:"writing"}
      ] },
    { title: "Sắp xếp thành đoạn văn", instr: "Chạm vào các câu theo thứ tự đúng để tạo thành đoạn văn hoàn chỉnh.", tag: "writing",
      items: [
        {kind:"seqorder", q:"Sắp xếp thành đoạn văn về nông nghiệp đô thị (câu chủ đề → ý hỗ trợ → kết luận).", tag:"writing",
         items:[
           "Urban farming is becoming more popular in big cities around the world.",
           "One reason is that space is limited, so farmers are using rooftops and old warehouses to grow food.",
           "In addition, food grown in the city does not need to travel far, which means a simpler supply chain and fresher produce.",
           "Finally, many of these farms use hydroponics, so they need much less water than traditional farms.",
           "For these reasons, urban farms could help cities feed their growing populations in the future."
         ],
         explain:"Câu chủ đề → One reason → In addition → Finally → For these reasons (kết luận)."},
        {kind:"seqorder", q:"Sắp xếp thành một bản tin ngắn (report): giới thiệu → số liệu → chi tiết → trích dẫn → kết luận.", tag:"writing",
         items:[
           "Last Saturday, more than 200 volunteers took part in a clean-up of Cua Lo beach.",
           "In just four hours, they collected over two tonnes of rubbish.",
           "Most of it was single-use plastic, such as bottles, bags and straws.",
           "'I had no idea there was so much plastic on our beach,' said one volunteer, 15-year-old Minh.",
           "The organisers hope that the event will encourage local people to cut down on plastic and keep the beach clean."
         ],
         explain:"Cấu trúc báo cáo: Introduction → Facts and figures (200 người, 2 tấn rác) → Detail (phần lớn là nhựa) → Quote (lời của Minh) → Conclusion."}
      ] },
    { title: "Viết đoạn văn có hướng dẫn", instr: "Làm theo dàn ý, dùng các từ gợi ý và viết đủ số từ.", tag: "writing",
      items: [
        {kind:"guided", tag:"writing",
         prompt:"Viết một <b>bài đăng blog</b> (blog post, khoảng 90–120 từ) kể về một thói quen sống xanh mà gia đình em đã bắt đầu, và khuyên người đọc thử làm theo.",
         outline:[
           "Câu chủ đề: gia đình em đã quyết định thay đổi thói quen gì để bảo vệ môi trường",
           "Ý 1: trước đây gia đình em làm thế nào (single-use plastic, hardly ever …)",
           "Ý 2: bây giờ gia đình em làm gì (cut down on, reusable, avoid + V-ing …)",
           "Ý 3: kết quả / lợi ích của sự thay đổi (ít rác hơn, tiết kiệm tiền …)",
           "Kết luận: lời khuyên cho người đọc (consider + V-ing …)"
         ],
         useWords:["cut down on","single-use plastic","reusable","hardly ever","avoid","consider"],
         minWords:90,
         sample:"This year, my family decided to cut down on plastic waste. In the past, we bought a lot of single-use plastic, such as water bottles, bags and food boxes, and we hardly ever thought about where it went. Now, we take reusable bags to the market, and my mother keeps a metal bottle for each of us in the fridge. We also avoid buying fruit and vegetables in plastic packaging. After three months, our rubbish bin is only half as full as it used to be, and we are saving money too. If you want to help the planet, consider making one small change like ours. You will be surprised how easy it is!",
         criteria:"Có câu chủ đề rõ ràng; so sánh trước và sau khi thay đổi; dùng đúng động từ + V-ing (avoid, consider…) và cụm động từ (cut down on); có lời khuyên ở cuối; dùng đủ các từ gợi ý; khoảng 90–120 từ."},
        {kind:"guided", tag:"writing",
         prompt:"Viết một đoạn văn <b>nguyên nhân – kết quả</b> (cause and effect, khoảng 90–120 từ) giải thích vì sao hiện tượng nóng lên toàn cầu làm thời tiết cực đoan xảy ra nhiều hơn ở Việt Nam.",
         outline:[
           "Câu chủ đề: nóng lên toàn cầu đang làm thời tiết cực đoan xảy ra thường xuyên hơn (more frequently)",
           "Nguyên nhân: con người đốt than, dầu, khí → CO2 đi vào khí quyển (the atmosphere) và giữ nhiệt",
           "Kết quả 1: As a result, biển ấm hơn → nước bốc hơi (evaporate) nhiều hơn → mưa lớn, bão, lũ (flood)",
           "Kết quả 2: vùng khô càng khô hơn → hạn hán (drought), thiếu nước",
           "Kết luận: chúng ta cần làm gì (cut down on, call for …)"
         ],
         useWords:["the atmosphere","evaporate","flood","drought","more frequently","as a result"],
         minWords:90,
         sample:"Global warming is making extreme weather happen more frequently in Viet Nam. When people burn coal, oil and gas, carbon dioxide goes into the atmosphere and traps more of the Sun's heat. As a result, the air and the sea are getting warmer. Warmer seas make more water evaporate, so typhoons bring heavier rain, and a flood can destroy homes and crops in a few hours. At the same time, dry areas such as the Central Highlands are becoming drier, and a long drought can leave farmers without water for months. To protect our future, we must cut down on fossil fuels and call for cleaner energy now.",
         criteria:"Có câu chủ đề nêu mối quan hệ nguyên nhân – kết quả; giải thích nguyên nhân rõ ràng; ít nhất 2 kết quả có ví dụ ở Việt Nam; dùng từ nối chỉ kết quả (As a result, so); có câu kết luận; dùng đủ các từ gợi ý; khoảng 90–120 từ."}
      ] }
  ]
});

window.GUIDE_EXTRAS = {
  quickinfo: {
    title: "行前快速資訊",
    flights: [
      {
        team: "A隊（前鋒隊）",
        go: "樂桃 MM930｜12/17（四）18:20 桃園起飛 → 20:50 那霸抵達",
        back: "樂桃 MM929｜12/22（二）16:50 那霸起飛 → 17:35 桃園抵達",
        note: "A隊回程比B隊早約 3.5 小時，Day5 需分開抓時間。樂桃 Minimum 票種不含託運行李：官網／App 先買約 ¥3,600／件，機場櫃檯約 ¥5,000／件；手提 2 件合計 ≤7kg。"
      },
      {
        team: "B隊",
        go: "長榮 BR112｜12/18（五）06:55 桃園T2起飛 → 09:15 那霸T1抵達",
        back: "長榮 BR185｜12/22（二）20:10 那霸T1起飛 → 20:55 桃園T2抵達",
        note: "回程那霸T1起飛、桃園T2抵達。"
      }
    ],
    lodging: [
      { day: "Day0", name: "Y's Inn 那覇小祿駅前", address: "那覇市金城5-9-1", note: "停車僅 14 格・機械式・先到先得" },
      { day: "Day1–2", name: "阿拉馬海納（Ala MAHAINA）", address: "1421-1 Yamagawa, Motobu", note: "已訂 3 間房・朝食付" },
      { day: "Day3", name: "La'gent Hotel Okinawa Chatan", address: "北谷町美浜25-3", note: "已訂 3 間房・8 位・現場支付 ¥43,596" },
      { day: "Day4–5", name: "HOTEL ANTEROOM NAHA", address: "那覇市前島3-27-11", note: "已訂 3 間房・停車 52 格・1,500円／晚" }
    ],
    rentalCars: [
      { car: "車輛①", bookingNo: "OTS1504557", memberNo: "OTSP0725062", note: "取車時出示 QR 碼（截圖或列印皆可）" },
      { car: "車輛②", bookingNo: "OTS1501685", memberNo: "OTSP0723248", note: "取車時出示 QR 碼（截圖或列印皆可）" },
      {
        car: "共通",
        bookingNo: "OTS 臨空豐崎（豐見城市豐崎3-37，098-856-8877）",
        memberNo: "營業 08:00–19:00",
        note: "取車 Day1 11:40｜還車 Day5 08:00–09:00。兩台車分別辦理，QR 碼截圖各自存好。"
      }
    ],
    drivingDocs: [
      { doc: "中華民國護照正本", note: "效期建議 6 個月以上。" },
      { doc: "台灣駕照正本", note: "須在有效期限內。" },
      { doc: "駕照日文譯本正本", note: "向監理所／監理站臨櫃或線上申請，規費 NT$100；建議出發前至少 2 週辦理。" },
      { doc: "信用卡", note: "租車擔保／付款用。" }
    ],
    drivingDocsAlert: "台灣旅客無法使用 IDP。2 台車若安排 2 位駕駛，每人都要完整一套文件。",
    checklist: [
      { when: "出發前一個月", item: "JUNGLIA 門票", note: "官網事先網購（每日限量）；大人 ¥6,930／小孩 ¥4,950／3歲以下免費", warn: true },
      { when: "出發前一個月", item: "樂桃託運行李加購", note: "Minimum 不含託運；官網／App 先買約 ¥3,600／件，機場約 ¥5,000／件；手提 2 件合計 ≤7kg", warn: true },
      { when: "出發前一個月", item: "OTS 預約加註", note: "加註 ETC卡＋兒童安全座椅（6 歲以下依法須乘坐）", warn: true },
      { when: "出發前兩週", item: "A Happy Pancake", note: "全店不接受訂位，現場排隊（Day1 午餐）", warn: true },
      { when: "出發前兩週", item: "兩位駕駛的駕照日文譯本", note: "各自申請，建議出發前至少 2 週辦理；台灣國際駕照不適用", warn: true },
      { when: "出發前兩週", item: "沖縄料理と島どうふ TO-PU", note: "訂位政策未查證，先電話確認（Day2 晚餐）；確認湯頭無鰹だし；僅收現金" },
      { when: "出發前兩週", item: "L LOTA／Day3 晚餐三家", note: "能先訂位的先訂，降低撲空風險；Tamatebako、海邦丸晚餐不接受訂位，現場排隊請提早" },
      { when: "出發前一週", item: "JUNGLIA 12/20 營業時間", note: "10 月底公布確定版；出發前再確認 junglia.jp", warn: true },
      { when: "出發前一週", item: "美國村聖誕點燈期間", note: "11 月底公布後確認；Depot Island 全年有燈飾" },
      { when: "出發前一週", item: "兒童王國／oHacorté／DMM 臨時休業", note: "官網／SNS 出發前看一眼，確認沒有臨時公休" },
      { when: "出發前一天", item: "DMM 水族館購票", note: "B隊 12/21 晚上先用手機買 12/22 的票，官網前一天購票約 9 折" },
      { when: "出發前（可選）", item: "Day5 iias→機場叫車", note: "3 台一般計程車（3／2／3 人分乘）；現場排班或 APP 叫車" },
      { when: "出發前", item: "OTS 延長租車一天", note: "還車改 Day5 08:00–09:00，需確認加收費用（2 台皆須）", warn: true },
      { when: "出發前", item: "旅遊保險", note: "8 人含幼兒，建議保足醫療＋行李" },
      { when: "出發前", item: "雨具＋防風外套", note: "12 月均溫 18°C、海風強；厚防風外套比厚毛衣實用" }
    ],
    budget: [
      { item: "美麗海水族館（Day2，全員）", price: "¥2,180／¥710(小中學生)／6 歲以下免費", note: "全員合計約 ¥13,790（¥2,180×6＋¥710×1＋¥0）" },
      { item: "Neo Park Okinawa（Day3，去的隊員）", price: "¥1,600／¥800(4歲–小學)／3 歲以下免費", note: "依實際去 Neo Park 的人數計算" },
      { item: "JUNGLIA（Day3，去的隊員）", price: "¥6,930／¥4,950(4–11歲)／3 歲以下免費", note: "若 6 大＋1 中（9歲）都去約 ¥46,530；請事先網購" },
      { item: "沖繩兒童王國（Day4，全員）", price: "¥1,000／15 歲以下免費", note: "全員合計約 ¥6,000（¥1,000×6＋¥0＋¥0）" },
      { item: "DMM かりゆし水族館（Day5，去的隊員）", price: "¥2,800／¥2,200(13–17歲)／¥1,700(4–12歲)", note: "官網前一天購票約 9 折；依實際去 DMM 的人數計算" },
      { item: "E58 許田－那霸過路費", price: "現金約 ¥2,550／ETC 約 ¥1,640", note: "ETC 卡每台車每趟可省約 ¥900" }
    ],
    budgetNote: "試算基準：6 大人＋1 位 9 歲＋1 位 3 歲。Day3、Day5 為分組行程，僅實際前往者付費。"
  },
  booking: {
    title: "訂位優先清單",
    priority: [
      "Day4 晚餐 Tamatebako（★4.7 純素）：不接受訂位，只能現場候位；小店 14 席一人經營，建議開店 17:00 就到，避開 19:30 後人潮。",
      "Day1 午餐 A Happy Pancake：全店不接受訂位（含室內），只能現場排隊；早到或改 SEE THE SEA（免預約）。",
      "Day2 午餐 L LOTA：務必訂位——TableCheck 線上可訂或電話 0980-51-5031；14:00 抵達距 L.O. 僅 30 分鐘，註明素食＋爭取提早入座。",
      "Day1 晚餐 海邦丸：晚餐不接受訂位，現場排隊請提早到；只有午餐部分時段可電話預約（0980-48-3343）。",
      "Day2 晚餐 TO-PU：訂位政策未能查證，電話 050-1039-1527 也未能驗證，出發前請電話確認；點餐確認湯頭無鰹だし；僅收現金。",
      "Day3 晚餐三家可訂位：Bollywood Dreams（官網或 098-926-0977；週四公休）、Esparza's Tacos（098-926-1888，Retty 標示可訂位）、Calif Kitchen（098-926-1010，座位限時 90 分）。午餐三家（アイタル食堂／ナカラマサラ／楽家）訂位方式未能查證，建議 IG DM 直接詢問。",
      "喜菜ハウス瀬底（Day1／Day2 備案）：營業狀態未能查證；僅在行前電話確認有營業後才列入。",
      "出發前 1–2 週用 Google Maps 實查所有店家的最新評分與營業時間。"
    ]
  },
  appendix: {
    title: "附錄",
    facilities: [
      { name: "美麗海水族館", info: "通常期 08:30–18:30；至 2027/3/31 無公休日；大人 ¥2,180／高校生 ¥1,440／小中學生 ¥710", link: "oki-churaumi.jp" },
      { name: "黑潮之海給餌解說", info: "每日 9:30、15:00、17:00", link: "churaumi.okinawa" },
      { name: "Neo Park Okinawa", info: "全年無休 9:30–17:30（入園截止 17:00）；大人 ¥1,600／小孩 ¥800；輕便鐵道首班 10:30", link: "neopark.co.jp" },
      { name: "JUNGLIA", info: "營業時間請依官方行事曆 junglia.jp/calendar（10 月底公布確定版）；大人 ¥6,930／小孩 ¥4,950，建議官網事先網購", link: "junglia.jp/calendar" },
      { name: "道の駅許田", info: "08:30–19:00 全年無休", link: "yanbaru-b.co.jp" },
      { name: "萬座毛", info: "11–2月 08:00–19:00；觀覽費 100 日圓", link: "" },
      { name: "沖繩兒童王國", info: "9:30–17:30（16:30 停止入園）；週二休園（12/21 一正常開園）；大人 ¥1,000／高校生 ¥500／15 歲以下免費", link: "okzm.jp" },
      { name: "AEON Rycom", info: "專門店 10:00–22:00", link: "okinawarycom.aeonmall.jp" },
      { name: "oHacorté 港川本店", info: "11:30–19:00，現為不定休", link: "ohacorte.com" },
      { name: "iias 沖繩豐崎", info: "店舖 10:00–21:00；與 OTS 臨空豐崎營業所相鄰", link: "toyosaki.iias.jp" },
      { name: "DMM Kariyushi Aquarium", info: "9:00–19:00，位於 iias 內；大人 ¥2,800／中人 ¥2,200／小人 ¥1,700，官網前一天購票約 9 折", link: "kariyushi-aquarium.com" },
      { name: "波上宮", info: "境內 24hr 免費；授與所約 09:00–16:30；免費停車約 20 格；本次 Day4 下午 16:00 前往", link: "naminouegu.jp" },
      { name: "Y's Inn 那覇小祿駅前", info: "Check-in 16:00–翌 02:00／Check-out 10:00；停車 14 格機械式", link: "ys-inn.jp" },
      { name: "HOTEL ANTEROOM NAHA", info: "Check-in 15:00／Check-out 11:00；停車 52 格、1,500円／晚", link: "uds-hotels.com/anteroom/naha" }
    ],
    rentalCars: [
      { car: "車輛①", bookingNo: "OTS1504557", memberNo: "OTSP0725062", note: "取車時出示 QR 碼（截圖或列印皆可）" },
      { car: "車輛②", bookingNo: "OTS1501685", memberNo: "OTSP0723248", note: "取車時出示 QR 碼（截圖或列印皆可）" },
      { car: "營業所", bookingNo: "OTS 臨空豐崎（豐見城市豐崎3-37，098-856-8877）", memberNo: "營業 08:00–19:00", note: "取車 Day1 11:40｜還車 Day5 08:00–09:00；還車受理至 18:30" }
    ],
    drivingDocs: [
      { doc: "中華民國護照正本", note: "效期建議 6 個月以上。" },
      { doc: "台灣駕照正本", note: "須在有效期限內；已過期者須先於監理站換發新照。" },
      { doc: "駕照日文譯本正本", note: "向監理所／監理站臨櫃或線上申請，規費 NT$100；建議出發前至少 2 週辦理。" },
      { doc: "台灣國際駕照", note: "在日本不適用，無法取代日文譯本；租車與臨檢只認「台灣駕照正本＋日文譯本」。", warn: true },
      { doc: "信用卡", note: "租車擔保／付款用。" }
    ],
    lodgingList: [
      { day: "Day0", name: "Y's Inn 那覇小祿駅前", address: "那覇市金城5-9-1", status: "已預訂；需寄放行李請先詢問櫃台" },
      { day: "Day1–2", name: "阿拉馬海納", address: "1421-1 Yamagawa, Motobu", status: "已訂 3 間房，朝食付" },
      { day: "Day3", name: "La'gent Hotel Okinawa Chatan", address: "北谷町美浜25-3", status: "已訂 3 間房・8 位，現場支付，共 ¥43,596" },
      { day: "Day4–5", name: "HOTEL ANTEROOM NAHA", address: "那覇市前島3-27-11", status: "已訂 3 間房" }
    ]
  },
  appendixRain: {
    title: "附錄｜雨天備案",
    sections: [
      { heading: "說明", body: "12 月那霸月雨量約 100mm，6 天行程遇到 1–2 天下雨很正常；以下為各日室內替代方案。" },
      { heading: "各日雨天替代方案", body: "Day1 萬座毛 → 沖繩縣立博物館・美術館（那霸市內），或跳過提早北上。\nDay2 水族館本身室內不受影響；古宇利島戶外改古宇利海洋塔（室內展望台），或提早回飯店。\nDay3 Neo Park／JUNGLIA 多為戶外，下雨照常營業但體驗打折（特定設施依現場公告）；美國村改 Depot Island 室內逛街用餐。\nDay4 兒童王國 Wonder Museum（室內）為主力；Rycom 本來就是室內；港川縮短戶外步行，多留時間在 oHacorté 室內。\nDay5 波上宮雨大就純參拜不逗留；iias、DMM 皆室內不受影響。" },
      { heading: "必備裝備", body: "折疊傘或輕便雨衣，8 人份先在台灣買好帶去。" }
    ]
  },
  appendixLingerie: {
    title: "附錄｜日系內衣品牌採購指南",
    sections: [
      { heading: "品牌與門市", body: "PEACH JOHN｜浦添 PARCO CITY 2F（沖繩唯一門市，需專程前往）\naimerfeel｜那覇メインプレイス 1F／浦添 PARCO CITY 3F（官網可查各店：shop.aimerfeel.jp）\nAMPHI｜沖繩無實體門市，建議官網購買（amphi.jp）\nSalute（Wacoal）｜沖繩無取扱店，建議官網購買\nAMO'S STYLE by Triumph｜那覇メインプレイス 1F／あしびなー outlet（豐崎，Day5 還車後順路約 5 分）" }
    ]
  },
  appendixPlush: {
    title: "附錄｜吉祥物玩偶抽抽樂",
    sections: [
      { heading: "抽抽樂地點（10 處）", body: "沖繩獅｜沖繩世界文化王國（南城市，不在路線上）｜1,000–1,100円\n沖繩獅、鳳梨｜古宇利島の駅ソラハシ（Day2 會經過）｜1,000円\n沖繩獅、阿古豬、鯨鯊｜那覇國際通「おきなわ屋」（Day4 會經過）｜1,000円\n鯨鯊（美麗海官方）｜美麗海水族館 美ら海プラザ（Day2 行程內，免購票）｜1,000円\n鯨鯊（美麗海官方）｜那覇國際通「うみちゅらら」（Day4，わしたショップ 2F）｜1,000円\n鯨鯊（美麗海官方）｜那覇機場國內線航廈 2F（Day5）｜1,000円\n樹懶、水獺、海豚、企鵝｜DMM Kariyushi 水族館／iias（Day5）｜1,000–1,500円\n鳳梨寶貝｜名護鳳梨園（不在路線上，需購票入園）｜1,000円\n水豚、樹懶、松鼠猴｜東南植物樂園（沖縄市，不在路線上）｜1,000円\n水豚等｜Neo Park（Day3 B隊行程內，需購票入園）｜1,000円" }
    ]
  }
};

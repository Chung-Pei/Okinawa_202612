window.TRIP_DATA = {
  meta: {
    title: "沖繩家族旅遊",
    subtitle: "領隊版 PWA",
    dates: "2026-12-17/2026-12-22",
    timezone: "Asia/Tokyo",
    sourceFile: "沖繩家族旅遊_領隊版.pdf",
    importedSource: "沖繩家族旅遊_領隊版.pdf（2026-08-11 最新上傳版）",
    sourceSha256: "74CAB3CE4E49B266748FBC0F3F01AE88E71F2C40F8B8C982EB9680A8C114E662",
    importedAt: "2026-08-11T00:00:00+09:00",
    note: "已逐頁人工核對最新 13 頁 PDF；來源涵蓋 Day 0-Day 5。PDF 內的航班、營業時間、預約與 JUNGLIA 時段仍須於出發前依官方／訂位資料重查。"
  },
  lodging: {
    day0: {
      name: "メルキュール沖縄那覇",
      english: "Mercure Okinawa Naha",
      address: "〒900-0025 沖繩縣那霸市壺川 3-3-19",
      phone: "+81-98-855-7111",
      email: "H8725-RE@accor.com",
      map: { query: "メルキュール沖縄那覇, 沖縄県那覇市壺川3-3-19" },
      website: "https://www.mercureokinawanaha.jp/en/",
      source: "PDF Day 0；官方聯絡頁查核 2026-08-11",
      note: "A 隊 MM930 20:50 抵達後入住。"
    },
    alaMahaina: {
      name: "阿拉馬海納",
      english: "Ala MAHAINA CONDO HOTEL",
      address: "〒905-0205 沖繩縣國頭郡本部町山川 1421-1",
      phone: "+81-980-51-7800",
      map: { query: "Ala MAHAINA CONDO HOTEL, Okinawa Motobu Yamagawa 1421-1" },
      website: "https://www.ala-mahaina.com/en/",
      source: "PDF Day 1-2；官方網站查核 2026-08-11",
      note: "Day 1-2 住宿基地。"
    },
    lagent: {
      name: "La'gent Hotel Okinawa Chatan（北谷柔婕閣）",
      english: "La'gent Hotel Okinawa Chatan",
      address: "〒904-0115 沖繩縣中頭郡北谷町美浜 25-3",
      phone: "+81-98-926-0210",
      email: "okinawa-chatan@lagent.jp",
      map: { query: "La'gent Hotel Okinawa Chatan, Okinawa Chatan Mihama 25-3" },
      website: "https://lagent.jp/chatan/contact",
      source: "PDF Day 3；官方聯絡頁查核 2026-08-11",
      note: "Day 3 住宿基地。"
    },
    ysInn: {
      name: "Y's Inn 那覇小祿駅前",
      english: "Y's INN NAHA OROKU EKIMAE",
      address: "〒901-0155 沖繩縣那霸市金城 5-9-1",
      phone: "+81-98-859-7029",
      email: "info@ys-inn.jp",
      map: { query: "ワイズイン那覇小禄駅前, 沖縄県那覇市金城5丁目9番地1" },
      website: "https://ys-inn.jp/",
      source: "PDF Day 4-5；Y's Inn 官方網站查核 2026-08-11",
      note: "Day 4-5 住宿；Check-in 16:00、Check-out 10:00。停車僅 14 格、1,000 円／晚、不可預約；客滿時依飯店指示處理。"
    }
  },
  days: [
    {
      id: "day0",
      label: "Day 0",
      date: "2026-12-17",
      dateLabel: "12/17 Thu",
      title: "前鋒隊抵達那霸",
      intro: "A 隊搭乘樂桃 MM930，18:20 自桃園起飛、20:50 抵達那霸；完成入境與領行李後，入住壺川的メルキュール沖縄那覇。",
      mode: "arrival",
      lodgingKey: "day0",
      weather: { label: "那霸市區", lat: 26.2124, lng: 127.6809 },
      schedule: [
        { time: "18:20", title: "A 隊：樂桃 MM930 桃園起飛", detail: "回程為 MM929，12/22 16:50 那霸起飛、17:35 桃園抵達；航班以訂位紀錄最終確認。", tag: "A 隊／航班待重查", type: "conditional" },
        { time: "20:50", title: "MM930 抵達那霸", detail: "A 隊抵達後完成入境、領行李，再前往壺川住宿。", tag: "A 隊／抵達", type: "source" },
        { time: "抵達後", title: "入住メルキュール沖縄那覇", detail: "地址：那霸市壺川 3-3-19；先確認櫃檯、房卡與隔日取車文件。", tag: "A 隊／住宿", type: "source" }
      ],
      notes: [
        { title: "晚到入住流程", detail: "先完成入境與領行李，再前往壺川；把飯店地址存成日文／英文兩種版本。" },
        { title: "A／B 航班分開確認", detail: "B 隊 BR0112 於 12/18 06:55-09:15 抵達；A 隊回程比 B 隊早約 3.5 小時，Day 5 必須分開抓時間。" },
        { title: "隔日取車文件", detail: "將護照、駕照、日文譯本或國際駕照、租車訂單集中放在同一個文件袋。" }
      ]
    },
    {
      id: "day1",
      label: "Day 1",
      date: "2026-12-18",
      dateLabel: "12/18 Fri",
      title: "抵達、取車、北上入住",
      intro: "全程距離最長的一天，重點是保障入境、取車與日落前抵達北部。PDF 路線總計 112 公里、約 2 小時 31 分。",
      mode: "driving",
      lodgingKey: "alaMahaina",
      weather: { label: "本部町（住宿基地）", lat: 26.693591, lng: 127.877974 },
      schedule: [
        { time: "06:55-09:15", title: "B 隊：BR0112 抵達那霸領行李", detail: "航班以訂位紀錄為準；A 隊已於 Day 0 晚間先抵達。", tag: "航班待重查", type: "conditional" },
        { time: "09:15-10:20", title: "入境、全隊會合", detail: "保留排隊緩衝，確認全隊與行李到齊。", tag: "集合", type: "source" },
        { time: "10:20-11:40", title: "接駁前往 OTS 豐崎租車", detail: "接駁車程約 15-20 分鐘；11:40 完成租車手續，核對駕照、譯本、護照並錄影車況內外。", tag: "租車", type: "source" },
        { time: "12:00-13:30", title: "瀨長島午餐", detail: "幸福鬆餅店 A Happy Pancake（需二週前預約）或 Flooding Burger（漢堡）；備案：JEF Tomigusuku（有素堡）或 baby face planet's（蛋包飯、義大利麵）。", tag: "午餐／需預約", type: "conditional" },
        { time: "13:40-14:10", title: "業務超市小祿店（可跳過）", detail: "營業 09:30-20:00；行程緊湊可直接跳過，不影響後段。", tag: "彈性停靠", type: "conditional" },
        { time: "15:10-15:50", title: "萬座毛（優先保留）", detail: "11-2 月開放 08:00-19:00，現場酌收 100 日圓；今日主要景點。", tag: "主要景點", type: "source" },
        { time: "16:30-17:30", title: "許田休息站", detail: "營業 08:30-19:00、全年無休；買土產、水果、美麗海水族館優惠票，也可作晚餐地點。", tag: "休息／採買", type: "source" },
        { time: "17:45-18:20", title: "Starbucks 名護 21 世紀之森", detail: "營業 07:30-21:00；戶外海灘與溜滑梯，適合小孩放電。PDF 附錄另標示店名為「Starbucks あけみおてらす店」，出發前請以官方店舖頁確認。", tag: "次優先／店名待重查", type: "conditional" },
        { time: "18:50-19:00", title: "抵達阿拉馬海納，check in", detail: "地址：1421-1 Yamagawa, Motobu。", tag: "住宿", type: "source" },
        { time: "19:30-21:00", title: "晚餐（若許田未用餐）", detail: "樓下共構商場 Hanasaki Marche（花咲市場）。", tag: "晚餐／彈性", type: "source" }
      ],
      route: {
        source: "來源 PDF 路線總計：112 公里／約 2 小時 31 分；道路摘要以 PDF 為準",
        stops: [
          { id: "ots", label: "OTS 豐崎", query: "OTSレンタカー 豊崎営業所 沖縄", lat: 26.159864, lng: 127.660141 },
          { id: "umikaji", label: "瀨長島", query: "瀬長島ウミカジテラス 沖縄", lat: 26.177979, lng: 127.644370 },
          { id: "gyomu", label: "業務超市小祿店", query: "業務スーパー 小禄店 沖縄", lat: 26.1954, lng: 127.6684 },
          { id: "manzamo", label: "萬座毛", query: "万座毛 沖縄", lat: 26.503440, lng: 127.851110 },
          { id: "kyoda", label: "許田休息站", query: "道の駅許田 やんばる物産センター 沖縄", lat: 26.602209, lng: 127.953060 },
          { id: "starbucks-nago", label: "Starbucks 名護 21 世紀之森", query: "Starbucks 名護21世紀の森 沖縄", lat: 26.5926, lng: 127.9770 },
          { id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.693591, lng: 127.877974 }
        ],
        legs: [
          { id: "L1", name: "OTS 豐崎 → 瀨長島", distanceKm: null, minutes: "7", roads: "縣道249 → 國道331 → 瀨長島海中道路", note: "取車後前往瀨長島。" },
          { id: "L2", name: "瀨長島 → 業務超市小祿店", distanceKm: null, minutes: "10 內", roads: "同區彈性繞行", note: "離開瀨長島時若已 delay 45 分鐘以上，跳過此站。" },
          { id: "L3", name: "業務超市小祿店 → 萬座毛", distanceKm: null, minutes: "61", roads: "國道331 → E58 沖繩自動車道 → 國道58", note: "萬座毛優先保留。" },
          { id: "L4", name: "萬座毛 → 許田休息站", distanceKm: null, minutes: "38", roads: "國道58", note: "許田可買土產、水果與美麗海水族館優惠票。" },
          { id: "L5", name: "許田 → Starbucks／阿拉馬海納", distanceKm: null, minutes: "33", roads: "國道58 → 449 → 縣道114", note: "PDF 將 Starbucks／阿拉馬海納合併估算；若天色已暗或家人疲勞，跳過 Starbucks。" },
          { id: "L6", name: "Starbucks → 阿拉馬海納", distanceKm: null, minutes: null, roads: "同一路段短程", note: "PDF 未另列分段時間；以 18:50-19:00 入住為目標。" }
        ]
      }
    },
    {
      id: "day2",
      label: "Day 2",
      date: "2026-12-19",
      dateLabel: "12/19 Sat",
      title: "美麗海水族館＋古宇利島",
      intro: "上午把水族館主線走完，下午才去古宇利島，避免當日折返。PDF 路線總計 47.9 公里、約 1 小時 23 分。",
      mode: "driving",
      lodgingKey: "alaMahaina",
      weather: { label: "本部町／古宇利島", lat: 26.693591, lng: 127.877974 },
      schedule: [
        { time: "07:30", title: "飯店早餐", detail: "確認票券、兒童用品與雨具。", tag: "集合", type: "source" },
        { time: "08:30", title: "抵達美麗海水族館", detail: "入館從 4F 開始；通常期開館 08:30-18:30。", tag: "水族館", type: "source" },
        { time: "08:30-09:20", title: "觸摸池、珊瑚礁之海、熱帶魚之海", detail: "依 4F→3F 順序。", tag: "主線", type: "source" },
        { time: "08:30-09:40", title: "〔平行〕抽 Ocean Blue 景觀席", detail: "兩位代表操作機器抽取二張號碼牌；未抽到仍可一般候位。", tag: "分工", type: "source" },
        { time: "09:30-09:40", title: "黑潮之海給餌解說", detail: "官方每日 9:30 場次（鬼蝠魟＋鯨鯊），此時剛好逛到 2F 黑潮之海；節目仍須出發前重查。", tag: "節目待重查", type: "conditional" },
        { time: "09:40", title: "黑潮探險（電梯至上方俯瞰）", detail: "開放至 11:00，入場截止 10:45。", tag: "水族館", type: "source" },
        { time: "10:00-10:15", title: "往出口移動", detail: "務必蓋「再入館」手章，接著步行前往戶外劇場卡位。", tag: "再入館", type: "source" },
        { time: "10:30-10:50", title: "Oki-chan 海豚秀劇場", detail: "節目約 20 分鐘。", tag: "節目待重查", type: "conditional" },
        { time: "11:00-11:30", title: "海龜館與海牛館", detail: "依現場動線調整。", tag: "水族館", type: "source" },
        { time: "11:30-12:20", title: "午餐（Ocean Blue）", detail: "憑手章再入館，黑潮之海大水槽旁用餐；離峰營業 08:30-18:00。", tag: "午餐", type: "source" },
        { time: "13:00-13:40", title: "開車前往古宇利島", detail: "車程約 30-40 分鐘。", tag: "自駕", type: "source" },
        { time: "14:00-15:30", title: "A/B 分組活動", detail: "A 組透明玻璃船餵魚；B 組 Ocean Tower＋蝦蝦飯，建議先點餐再逛。", tag: "A/B 分組", type: "source" },
        { time: "15:30-16:00", title: "合體下午茶", detail: "方案一「なんくるKITCHEN」水果碗，或方案二「モリンガの木」。", tag: "彈性", type: "source" },
        { time: "16:30", title: "啟程返回飯店", detail: "休息半小時。備案：16:00 提早離開→16:40 回水族館→17:00 看鯨鯊垂直餵食秀→18:00 離開；僅在孩子精神好、非常想看時啟動。", tag: "備案／條件式", type: "conditional" },
        { time: "18:00", title: "晚餐「OKINAWA SHABU-SHABU」本部店", detail: "需提前訂位，鄰近今晚住宿。", tag: "晚餐／需訂位", type: "conditional" }
      ],
      route: {
        source: "來源 PDF 路線總計：47.9 公里／約 1 小時 23 分；返程原路回本部",
        stops: [
          { id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.693591, lng: 127.877974 },
          { id: "churaumi", label: "海洋博公園／美麗海水族館", query: "沖縄美ら海水族館", lat: 26.691024, lng: 127.879967 },
          { id: "kouri", label: "古宇利島", query: "古宇利島 沖縄", lat: 26.704151, lng: 128.014158 },
          { id: "ala-return", label: "回本部住宿", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.693591, lng: 127.877974 }
        ],
        legs: [
          { id: "L1", name: "阿拉馬海納 → 海洋博公園", distanceKm: null, minutes: null, roads: "縣道114號", note: "早上短程前往水族館。" },
          { id: "L2", name: "美麗海 → 古宇利島", distanceKm: null, minutes: "30-40", roads: "縣道114 → 505 → 248 → 110 → 247號", note: "依風況、兒童狀態與古宇利島現場狀況調整。" },
          { id: "L3", name: "古宇利島 → 回本部", distanceKm: null, minutes: null, roads: "返程原路回本部", note: "備案二須把回水族館時間設為共同集合點。" }
        ]
      }
    },
    {
      id: "day3",
      label: "Day 3",
      date: "2026-12-20",
      dateLabel: "12/20 Sun",
      title: "A/B 分組體驗、名護會合、美國村",
      intro: "兩組不同時結束，統一在 AEON Nago 會合；JUNGLIA 含午餐，B 組不需另外安排用餐。PDF 路線總計 76.5 公里、約 1 小時 42 分。",
      mode: "driving",
      lodgingKey: "lagent",
      weather: { label: "北谷町（住宿基地）", lat: 26.317017, lng: 127.755064 },
      schedule: [
        { time: "07:00", title: "早餐、行李放大廳", detail: "確認兩組聯絡方式。", tag: "分隊準備", type: "source" },
        { time: "08:00-08:40", title: "海洋博公園短散步", detail: "戶外開放空間，不影響 09:30／10:00 入場。", tag: "彈性", type: "source" },
        { time: "08:40", title: "出發前往兩大園區", detail: "A、B 兩組分別前往 Neo Park 與 JUNGLIA。", tag: "A/B 分隊", type: "source" },
        { time: "09:30-12:00", title: "A：Neo Park", detail: "全年無休，09:30-17:30，入園截止 17:00。", tag: "A 隊", type: "source" },
        { time: "10:00-14:30", title: "B：JUNGLIA（含午餐）", detail: "山原森林冒險、熱氣球、叢林越野車；票券與營業時間須於 T-7～T-1 向官方行事曆 junglia.jp/calendar 再次確認。", tag: "B 隊／必查", type: "conditional" },
        { time: "12:00", title: "A 組出發名護市區", detail: "A 組離開 Neo Park 前往名護市區。", tag: "A 隊", type: "source" },
        { time: "12:30", title: "A 組名護市區午餐", detail: "午餐地點待排，依隊伍狀況調整。", tag: "A 隊", type: "source" },
        { time: "13:30", title: "A 組逛「名護 AEON」", detail: "在 AEON Nago 等待 B 組。", tag: "A 隊／會合點", type: "source" },
        { time: "14:30", title: "B 組出發名護市區", detail: "JUNGLIA 結束後前往名護市區。", tag: "B 隊", type: "source" },
        { time: "15:00", title: "AB 隊 AEON Nago 會合", detail: "逾時以電話／訊息確認，直接前往美國村。", tag: "共同集合", type: "source" },
        { time: "15:15-15:50", title: "名護點心站（彈性）", detail: "暖暮拉麵或 Blue Seal 冰淇淋（名護店），兩店相距約 700 公尺；時間不足可跳過。", tag: "彈性", type: "conditional" },
        { time: "15:50", title: "前往美國村", detail: "車程約 50 分鐘。", tag: "自駕", type: "source" },
        { time: "17:00", title: "美國村 American Village 逛街", detail: "依現場人流與停車狀況調整。", tag: "景點", type: "source" },
        { time: "17:30", title: "海邊日落＋12 月聖誕點燈", detail: "點燈日期需出發前確認。", tag: "日期待重查", type: "conditional" },
        { time: "18:30", title: "美國村晚餐（待排）＋自由逛街", detail: "晚餐餐廳依現場狀況安排。", tag: "晚餐／彈性", type: "source" },
        { time: "20:30", title: "入住 La'gent Hotel Okinawa Chatan", detail: "北谷柔婕閣。", tag: "住宿", type: "source" }
      ],
      route: {
        source: "來源 PDF 路線總計：76.5 公里／約 1 小時 42 分；A/B 分支與會合路線分開看",
        hideOverviewNavigation: true,
        stops: [
          { id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.693591, lng: 127.877974 },
          { id: "neopark", label: "Neo Park", query: "ネオパークオキナワ", lat: 26.602009, lng: 127.977071 },
          { id: "junglia", label: "JUNGLIA", query: "JUNGLIA OKINAWA", lat: 26.669779, lng: 128.000568 },
          { id: "aeon-nago", label: "AEON Nago", query: "イオン名護店", lat: 26.595018, lng: 127.976914 },
          { id: "nago-snack", label: "名護點心站", query: "暖暮 名護店 沖縄", lat: 26.5905, lng: 127.9770 },
          { id: "american-village", label: "美國村", query: "American Village Okinawa", lat: 26.3166, lng: 127.7574 },
          { id: "lagent", label: "La'gent Hotel Okinawa Chatan", query: "La'gent Hotel Okinawa Chatan", lat: 26.317017, lng: 127.755064 }
        ],
        legs: [
          { id: "A1", name: "A 組：阿拉馬海納 → Neo Park", from: "阿拉馬海納", to: "Neo Park", stopIds: ["ala", "neopark"], distanceKm: null, minutes: null, roads: "縣道114 → 449號", note: "A 組分支；非 B 組接續路線。" },
          { id: "B1", name: "B 組：阿拉馬海納 → JUNGLIA", from: "阿拉馬海納", to: "JUNGLIA", stopIds: ["ala", "junglia"], distanceKm: null, minutes: null, roads: "449 → 58 → 縣道84號", note: "B 組分支；JUNGLIA 時段與票務必於 T-7～T-1 重查。" },
          { id: "A2", name: "A 組：Neo Park → AEON Nago", from: "Neo Park", to: "AEON Nago", stopIds: ["neopark", "aeon-nago"], distanceKm: null, minutes: null, roads: "縣道110 → 58 → 449號", note: "A 組 12:00 出發、13:30 逛名護 AEON。" },
          { id: "B2", name: "B 組：JUNGLIA → AEON Nago", from: "JUNGLIA", to: "AEON Nago", stopIds: ["junglia", "aeon-nago"], distanceKm: null, minutes: null, roads: "依 PDF 路線摘要前往名護市區", note: "B 組 14:30 出發，15:00 以 AEON Nago 會合為目標。" },
          { id: "C1", name: "會合：AEON Nago → 名護點心站", from: "AEON Nago", to: "名護點心站", stopIds: ["aeon-nago", "nago-snack"], distanceKm: null, minutes: null, roads: "國道58一帶短程彈性繞行", note: "時間不足可跳過。" },
          { id: "C2", name: "名護點心站 → 美國村", from: "名護點心站", to: "美國村", stopIds: ["nago-snack", "american-village"], distanceKm: null, minutes: "50", roads: "58 → E58 沖繩自動車道 → 縣道85／國道23號", note: "夕陽與聖誕點燈時段請預留緩衝。" },
          { id: "C3", name: "美國村 → La'gent Hotel", from: "美國村", to: "La'gent Hotel Okinawa Chatan", stopIds: ["american-village", "lagent"], distanceKm: null, minutes: null, roads: "北谷市區短程", note: "20:30 入住。" }
        ]
      },
      notes: [
        { title: "JUNGLIA 必查", detail: "官方每月底公布未來 4 個月，其中僅未來 2 個月屬確定資訊；12/20 時段最快 2026 年 10 月底才會正式公告。" },
        { title: "A/B 會合規則", detail: "統一在 AEON Nago 會合；B 組離開 JUNGLIA 後前往名護市區，逾時先電話／訊息確認。" },
        { title: "共同南下", detail: "會合後依名護點心站彈性、車流與日落時間決定是否停留，再前往美國村。" }
      ]
    },
    {
      id: "day4",
      label: "Day 4",
      date: "2026-12-21",
      dateLabel: "12/21 Mon",
      title: "兒童王國、Rycom、港川、還車、國際通",
      intro: "今天的重點是還車與晚間集合，住宿為 Y's Inn 那覇小祿駅前。PDF 路線 38.2 公里、約 1 小時 39 分，不含 Chatan→兒童王國段。",
      mode: "driving",
      lodgingKey: "ysInn",
      weather: { label: "那霸市區／小祿", lat: 26.1953, lng: 127.6667 },
      schedule: [
        { time: "07:30", title: "早餐", detail: "確認 La'gent 退房與行李寄放規則。", tag: "集合", type: "source" },
        { time: "09:30-11:30", title: "沖繩兒童王國", detail: "平日 09:30-17:30；固定休園日為每週二，12/21（一）正常開園。", tag: "親子", type: "source" },
        { time: "12:00", title: "永旺夢樂城（AEON Rycom）＋午餐", detail: "專門店營業 10:00-22:00。", tag: "購物", type: "source" },
        { time: "14:30", title: "結束購物", detail: "依購物與午餐狀況調整。", tag: "轉場", type: "source" },
        { time: "15:00", title: "港川外人住宅：oHacorté", detail: "營業 11:30-19:00，定休日為週二；12/21（一）不受影響。候選水果塔或黑糖可麗露。", tag: "下午茶", type: "source" },
        { time: "15:40", title: "結束下午茶，出發小祿", detail: "前往 Y's Inn 那覇小祿駅前。", tag: "自駕", type: "source" },
        { time: "16:10", title: "抵達 Y's Inn 那覇小祿駅前，check in／放行李", detail: "車程約 30 分鐘。停車僅 14 格、1,000 円／晚；現場候位不可預約，若客滿先卸行李由一人看車，再移車。", tag: "住宿／停車待確認", type: "conditional" },
        { time: "16:40", title: "出發豐崎加油＋還車", detail: "由代表前往 OTS 豐崎營業所完成加油與還車。", tag: "還車", type: "source" },
        { time: "17:30", title: "豐崎 OTS 營業所還車", detail: "加油、驗車、還車手續；PDF 載明受理至 18:30。", tag: "還車待重查", type: "conditional" },
        { time: "18:10", title: "搭 taxi 回小祿站與家人會合", detail: "還車代表回 Y's Inn／小祿站與家人會合。", tag: "計程車", type: "source" },
        { time: "18:40", title: "晚餐「波照間沖繩地方料理」", detail: "需先訂位；全家搭 taxi／Yui Rail 前往國際通方向，小祿駅→美栄橋／牧志駅約 15-18 分鐘。", tag: "晚餐／需訂位", type: "conditional" },
        { time: "20:00", title: "繼續逛國際通", detail: "依全家體力與回程交通調整。", tag: "逛街", type: "source" },
        { time: "21:00", title: "回飯店休息、整理行李", detail: "搭 taxi／Yui Rail 返回小祿駅，步行約 3 分鐘回飯店。", tag: "住宿", type: "source" }
      ],
      route: {
        source: "來源 PDF 路線總計：38.2 公里／約 1 小時 39 分，不含 Chatan→兒童王國段；國際通往返為非自駕路段",
        stops: [
          { id: "lagent", label: "La'gent Hotel Chatan", query: "La'gent Hotel Okinawa Chatan", lat: 26.317017, lng: 127.755064 },
          { id: "childrens-kingdom", label: "沖繩兒童王國", query: "沖縄こどもの国", lat: 26.319003, lng: 127.804769 },
          { id: "rycom", label: "AEON Rycom", query: "イオンモール沖縄ライカム", lat: 26.316002, lng: 127.794521 },
          { id: "minatogawa", label: "港川 oHacorté", query: "oHacorté 港川本店 沖縄", lat: 26.259064, lng: 127.722056 },
          { id: "ys-inn", label: "Y's Inn 那覇小祿駅前", query: "ワイズイン那覇小禄駅前", lat: 26.1953, lng: 127.6667 },
          { id: "ots-return", label: "OTS 豐崎還車", query: "OTSレンタカー 豊崎営業所 沖縄", lat: 26.159862, lng: 127.665036 }
        ],
        legs: [
          { id: "L1", name: "Chatan → 兒童王國", distanceKm: null, minutes: null, roads: "58 → 330 → 85 → 22號", note: "PDF 總計不含本段；出發時以導航確認。" },
          { id: "L2", name: "兒童王國 → Rycom", distanceKm: null, minutes: null, roads: "22 → 85號", note: "短程轉場，午餐與購物一起處理。" },
          { id: "L3", name: "Rycom → 港川", distanceKm: null, minutes: null, roads: "330 → 58號", note: "下午茶停留時間要配合還車時限。" },
          { id: "L4", name: "港川 → 小祿 Y's Inn", distanceKm: null, minutes: "30", roads: "國道58號南下經那霸市區，接縣道7號／222號方向", note: "全家同車先到 Y's Inn 卸行李。" },
          { id: "L5", name: "小祿 Y's Inn → OTS 豐崎", distanceKm: null, minutes: "10-12", roads: "縣道7號／222號 → 國道331號", note: "由代表就近往返 OTS 還車；還車完成後改搭 Yui Rail 或計程車前往國際通。" }
        ]
      },
      notes: [
        { title: "還車策略", detail: "全家同車直接南下至小祿卸行李，代表再就近往返 OTS 還車，車程遠短於留在國際通、獨自往返豐崎。" },
        { title: "Y's Inn 停車", detail: "停車僅 14 格、1,000 円／晚、不可預約；客滿時先卸行李，再依飯店指示移車。" },
        { title: "國際通交通", detail: "還車完成後全家搭 Yui Rail 或計程車前往國際通用餐，晚點再一起搭車回小祿留宿；此段非自駕。" }
      ]
    },
    {
      id: "day5",
      label: "Day 5",
      date: "2026-12-22",
      dateLabel: "12/22 Tue",
      title: "波上宮、iias／DMM、機場",
      intro: "回程保守留白日，出發點為 Y's Inn 小祿；飯店到 iias／DMM 依 PDF 使用計程車，不是單軌。PDF 路線總計約 20.2 公里／50 分鐘。",
      mode: "mixed",
      transportLabel: "全程計程車；iias→機場可選計程車或 Yui Rail",
      lodgingKey: "ysInn",
      weather: { label: "那霸市區／機場", lat: 26.1953, lng: 127.6667 },
      schedule: [
        { time: "07:00", title: "早餐自理、行李寄放大廳", detail: "—", tag: "集合", type: "source" },
        { time: "07:50", title: "Taxi 出發前往波上宮", detail: "車程估計 12-15 分鐘。", tag: "計程車", type: "source" },
        { time: "08:05-08:45", title: "波上宮", detail: "境內參拜 24 小時免費開放；授與所（御守／御朱印）09:00 才開放，此時段僅能參拜、拍照。", tag: "參拜", type: "source" },
        { time: "09:00", title: "回 Y's Inn 取行李", detail: "確認護照、充電器、購物袋；Check-out 10:00。", tag: "取行李", type: "source" },
        { time: "09:20", title: "搭 taxi 前往 iias 豐崎", detail: "車程估計 10-12 分鐘；抵達後先寄放行李。此段明確使用計程車，非單軌。", tag: "計程車／非單軌", type: "source" },
        { time: "10:00-12:00", title: "A 組 iias 購物中心／B 組 DMM 水族館", detail: "iias 店舖 10:00-21:00；DMM 9:00-19:00，位於 iias 商場內，兩組同一地點分頭活動。", tag: "A/B 分組", type: "source" },
        { time: "12:00", title: "午餐（iias 內餐廳，待排）", detail: "依現場候位與隊伍需求安排。", tag: "午餐", type: "source" },
        { time: "13:00-13:30", title: "A 隊分開前往那霸機場", detail: "A 隊 MM929 16:50 那霸起飛，建議 iias／DMM 行程提前於 13:00 前結束，13:00-13:30 出發。", tag: "A 隊／分開行動", type: "conditional" },
        { time: "13:30", title: "iias 採購、自由逛、西松屋", detail: "B 隊依原時間表繼續活動。", tag: "B 隊", type: "source" },
        { time: "16:30", title: "前往那霸機場", detail: "B 隊原時間表；交通可搭計程車或 Yui Rail，依行李與即時狀況決定。", tag: "B 隊／機場", type: "source" },
        { time: "17:00", title: "抵達那霸機場", detail: "小祿至機場車程實際僅約 5-10 分鐘，此區塊留有充裕安全緩衝。", tag: "機場", type: "source" },
        { time: "16:50", title: "A 隊：樂桃 MM929 回程", detail: "16:50 那霸起飛、17:35 桃園抵達；出發前以航空公司與訂位紀錄最終確認。", tag: "A 隊／航班待重查", type: "conditional" },
        { time: "20:10-20:55", title: "B 隊：BR0185 回程航班", detail: "20:10 那霸出發、20:55 抵達；航班以航空公司與訂位紀錄最終確認。", tag: "B 隊／航班待重查", type: "conditional" }
      ],
      route: {
        source: "來源 PDF 路線總計：約 20.2 公里／約 50 分鐘；全程不再自駕，Y's Inn→iias 為計程車",
        routeType: "mixed",
        navigationMode: "driving",
        hideOverviewNavigation: true,
        stops: [
          { id: "ys-inn", label: "Y's Inn 小祿", query: "ワイズイン那覇小禄駅前", lat: 26.1953, lng: 127.6667 },
          { id: "naminoue", label: "波上宮", query: "波上宮 沖縄", lat: 26.217881, lng: 127.674769 },
          { id: "ys-inn-return", label: "回 Y's Inn 取行李", query: "ワイズイン那覇小禄駅前", lat: 26.1953, lng: 127.6667 },
          { id: "iias", label: "iias／DMM 豐崎", query: "iias 沖縄豊崎", lat: 26.159862, lng: 127.665036 },
          { id: "airport", label: "那霸機場", query: "那覇空港", lat: 26.194913, lng: 127.644790 }
        ],
        legs: [
          { id: "L1", name: "Y's Inn → 波上宮", from: "Y's Inn 小祿", to: "波上宮", stopIds: ["ys-inn", "naminoue"], distanceKm: null, minutes: "12-15", roads: "計程車", openLabel: "開啟 Google Maps 路線參考", note: "07:50 出發；不是自駕。" },
          { id: "L2", name: "波上宮 → Y's Inn", from: "波上宮", to: "Y's Inn 小祿", stopIds: ["naminoue", "ys-inn-return"], distanceKm: null, minutes: null, roads: "計程車", openLabel: "開啟 Google Maps 路線參考", note: "09:00 回飯店取行李。" },
          { id: "L3", name: "Y's Inn → iias／DMM", from: "Y's Inn 小祿", to: "iias／DMM 豐崎", stopIds: ["ys-inn-return", "iias"], distanceKm: null, minutes: "10-12", roads: "計程車（非單軌）", openLabel: "開啟 Google Maps 路線參考", note: "抵達後先寄放行李；PDF 明確未安排此段單軌。" },
          { id: "L4", name: "iias／DMM → 那霸機場", from: "iias／DMM 豐崎", to: "那霸機場", stopIds: ["iias", "airport"], distanceKm: null, minutes: "5-10", roads: "計程車或 Yui Rail 2 站", openLabel: "開啟 Google Maps 路線參考", note: "依兩隊航班、行李與即時交通分開安排。" }
        ]
      },
      notes: [
        { title: "兩隊分開抓時間", detail: "A 隊 MM929 16:50 起飛，建議 iias／DMM 13:00 前結束、13:00-13:30 出發；B 隊維持 16:30 出發即可。" },
        { title: "飯店到 iias 交通", detail: "Y's Inn → 波上宮 → 小祿 → iias／DMM 全部依 PDF 搭計程車；飯店到 iias 不是單軌。" },
        { title: "iias 到機場", detail: "iias → 機場才是計程車或 Yui Rail 2 站的選擇；全程不再自駕，車已於 Day 4 歸還。" }
      ]
    }
  ]
};

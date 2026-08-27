window.TRIP_DATA = {
  meta: {
    title: "沖繩家族旅遊",
    subtitle: "領隊版 PWA",
    dates: "2026-12-17/2026-12-22",
    timezone: "Asia/Tokyo",
    sourceFile: "沖繩家族旅遊_領隊版_v4.pdf",
    importedSource: "沖繩家族旅遊_領隊版_v4.pdf（2026-08-24 整合版）",
    sourceSha256: "BE75EECA26EB08CE9F89679C032C100F9788FF521F51C57AF459DB080A2AA2BB",
    importedAt: "2026-08-27T00:00:00+09:00",
    note: "已逐頁人工核對 v4 PDF 14 頁；來源涵蓋 Day 0-Day 5。航班、營業時間、預約與 JUNGLIA 時段仍須於出發前依官方／訂位資料重查。"
  },
  map: {
    provider: "Leaflet + OpenStreetMap",
    tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    coordinateSource: "OpenStreetMap Nominatim／OSM 圖徵固定錨點",
    coordinateCheckedAt: "2026-08-27",
    coordinateNote: "座標於建置時覆核並寫入資料；網站不在執行時呼叫地理編碼。新設施若尚未有 OSM 圖徵，標記採同址公園／設施區錨點並在備註揭露。"
  },
  lodging: {
    alaMahaina: {
      name: "阿拉馬海納",
      english: "Ala MAHAINA CONDO HOTEL",
      address: "〒905-0205 沖繩縣國頭郡本部町山川 1421-1",
      phone: "+81-980-51-7800",
      map: { query: "Ala MAHAINA CONDO HOTEL, Okinawa Motobu Yamagawa 1421-1" },
      website: "https://www.ala-mahaina.com/en/",
      source: "PDF v4 Day 1-2；官方網站查核 2026-08-27",
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
      source: "PDF v4 Day 3；官方聯絡頁查核 2026-08-27",
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
      source: "PDF v4 Day 0；Y's Inn 官方網站查核 2026-08-27",
      note: "Day 0 A 隊住宿；Check-in 16:00-02:00、Check-out 10:00。停車僅 14 格機械式、1,000 円／晚、先到先得不可預約；晚到前先電話確認。"
    },
    anteroom: {
      name: "HOTEL ANTEROOM NAHA",
      english: "HOTEL ANTEROOM NAHA",
      address: "〒900-0016 沖繩縣那霸市前島 3-27-11",
      phone: "+81-98-860-5151",
      email: "info@anteroom-naha.com",
      map: { query: "HOTEL ANTEROOM NAHA, 沖縄県那覇市前島3丁目27番地11" },
      website: "https://www.uds-hotels.com/anteroom/naha/",
      source: "PDF v4 Day 4-5；官方網站查核 2026-08-27",
      note: "Day 4-5 住宿；Check-in 15:00、Check-out 11:00。停車 52 格、先到先得、1,500 円／晚。"
    }
  },
  days: [
    {
      id: "day0",
      label: "Day 0",
      date: "2026-12-17",
      dateLabel: "12/17 Thu",
      title: "前鋒隊抵達那霸",
      intro: "A 隊搭乘樂桃 MM930，18:20 自桃園起飛、20:50 抵達那霸；完成入境與領行李後，入住小祿的 Y's Inn 那覇小祿駅前。",
      mode: "arrival",
      lodgingKey: "ysInn",
      weather: { label: "那霸市區／小祿", lat: 26.1977684, lng: 127.6657587 },
      schedule: [
        { time: "18:20", title: "A 隊：樂桃 MM930 桃園起飛", detail: "12/17 桃園起飛；航班與座位以航空公司／訂位紀錄最終確認。", tag: "A 隊／航班待重查", type: "conditional" },
        { time: "20:50", title: "MM930 抵達那霸", detail: "A 隊抵達後完成入境、領行李；今晚不取租車。", tag: "A 隊／抵達", type: "source" },
        { time: "抵達後", title: "入住 Y's Inn 那覇小祿駅前", detail: "地址：那霸市金城 5-9-1；可搭 Yui Rail 約 2 站、4-5 分鐘至小祿再步行約 3 分鐘，或搭計程車約 5-10 分鐘。", tag: "A 隊／住宿", type: "source" }
      ],
      route: {
        source: "來源 PDF v4：那霸機場 → 小祿住宿；開車／計程車約 5-10 分鐘，亦可搭 Yui Rail 約 2 站",
        routeType: "mixed",
        navigationMode: "driving",
        stops: [
          { id: "airport", label: "那霸機場國內線航廈", query: "那覇空港 国内線旅客ターミナル", lat: 26.2062776, lng: 127.6508031 },
          { id: "ys-inn", label: "Y's Inn 那覇小祿駅前", query: "Y's INN Naha Oroku Ekimae, 沖縄県那覇市金城5-9-1", lat: 26.1977684, lng: 127.6657587 }
        ],
        legs: [
          { id: "L1", name: "那霸機場 → Y's Inn", from: "那霸機場", to: "Y's Inn 那覇小祿駅前", stopIds: ["airport", "ys-inn"], distanceKm: null, minutes: "5-10", roads: "計程車／Yui Rail＋步行", openLabel: "開啟 Google Maps 路線參考", note: "PDF 提供交通方式；今晚尚未取租車，地圖線為方向示意。" }
        ]
      },
      notes: [
        { title: "晚到入住流程", detail: "先完成入境與領行李，再前往小祿；把 Y's Inn 地址存成日文／英文兩種版本，晚到前先電話確認。" },
        { title: "A／B 航班分開確認", detail: "B 隊 BR112 於 12/18 06:55-09:15 抵達；A 隊回程比 B 隊早，Day 5 必須分開抓時間。" },
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
      weather: { label: "本部町（住宿基地）", lat: 26.6826085, lng: 127.8834902 },
      schedule: [
        { time: "06:55-09:15", title: "B 隊：BR0112 抵達那霸領行李", detail: "航班以訂位紀錄為準；A 隊已於 Day 0 晚間先抵達。", tag: "航班待重查", type: "conditional" },
        { time: "09:15-10:20", title: "入境、全隊會合", detail: "保留排隊緩衝，確認全隊與行李到齊。", tag: "集合", type: "source" },
        { time: "10:20-11:40", title: "接駁前往 OTS 豐崎租車", detail: "接駁車程約 15-20 分鐘；11:40 完成租車手續，核對駕照、譯本、護照並錄影車況內外。", tag: "租車", type: "source" },
        { time: "12:00-13:30", title: "瀨長島午餐", detail: "幸福鬆餅店 A Happy Pancake（需二週前預約）或 Flooding Burger（漢堡）；備案：JEF Tomigusuku（有素堡）或 baby face planet's（蛋包飯、義大利麵）。", tag: "午餐／需預約", type: "conditional" },
        { time: "13:40-14:10", title: "業務超市小祿店（可跳過）", detail: "營業 09:30-20:00；行程緊湊可直接跳過，不影響後段。", tag: "彈性停靠", type: "conditional" },
        { time: "15:10-15:50", title: "萬座毛（優先保留）", detail: "11-2 月開放 08:00-19:00，現場酌收 100 日圓；今日主要景點。", tag: "主要景點", type: "source" },
        { time: "16:30-17:30", title: "許田休息站", detail: "營業 08:30-19:00、全年無休；買土產、水果、美麗海水族館優惠票，也可作晚餐地點。", tag: "休息／採買", type: "source" },
        { time: "17:45-18:20", title: "Starbucks 名護21世紀の森公園あけみおてらす店", detail: "官方地址：名護市宮里2-2 海の棟2；營業 07:30-21:00。店舖位於 21 世紀之森公園海邊，OSM 尚未建立店舖圖徵，地圖採公園區域錨點；出發前仍請以官方店舖頁確認。", tag: "次優先／地址級錨點", type: "conditional" },
        { time: "18:50-19:00", title: "抵達阿拉馬海納，check in", detail: "地址：1421-1 Yamagawa, Motobu。", tag: "住宿", type: "source" },
        { time: "19:30-21:00", title: "晚餐（若許田未用餐）", detail: "樓下共構商場 Hanasaki Marche（花咲市場）。", tag: "晚餐／彈性", type: "source" }
      ],
      route: {
        source: "來源 PDF v4 路線總計：112 公里／約 2 小時 31 分；道路摘要以 PDF 為準",
        stops: [
          { id: "ots", label: "OTS 豐崎", query: "OTSレンタカー 豊崎営業所 沖縄", lat: 26.1588693, lng: 127.6544462 },
          { id: "umikaji", label: "瀨長島ウミカジテラス", query: "瀬長島ウミカジテラス 沖縄", lat: 26.1763883, lng: 127.6404055 },
          { id: "gyomu", label: "業務超市小祿店", query: "業務スーパー 小禄店 沖縄県那覇市具志875", lat: 26.179921, lng: 127.6540684 },
          { id: "manzamo", label: "萬座毛", query: "万座毛 沖縄", lat: 26.5050087, lng: 127.8502564 },
          { id: "kyoda", label: "許田休息站", query: "道の駅許田 やんばる物産センター 沖縄", lat: 26.5521328, lng: 127.9695154 },
          { id: "starbucks-nago", label: "Starbucks 名護21世紀の森", query: "スターバックス 名護21世紀の森公園あけみおてらす店 沖縄県名護市宮里2-2", lat: 26.5907178, lng: 127.9692548, coordinateNote: "OSM 21世紀の森公園區域錨點；店舖圖徵尚未建立" },
          { id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902 }
        ],
        legs: [
          { id: "L1", name: "OTS 豐崎 → 瀨長島", stopIds: ["ots", "umikaji"], distanceKm: null, minutes: "7", roads: "縣道249 → 國道331 → 瀨長島海中道路", note: "取車後前往瀨長島。" },
          { id: "L2", name: "瀨長島 → 業務超市小祿店", stopIds: ["umikaji", "gyomu"], distanceKm: null, minutes: "約 10", roads: "同區彈性繞行", note: "離開瀨長島時若已 delay 45 分鐘以上，跳過此站。" },
          { id: "L3", name: "業務超市小祿店 → 萬座毛", stopIds: ["gyomu", "manzamo"], distanceKm: null, minutes: "61", roads: "國道331 → E58 沖繩自動車道 → 國道58", note: "萬座毛優先保留。" },
          { id: "L4", name: "萬座毛 → 許田休息站", stopIds: ["manzamo", "kyoda"], distanceKm: null, minutes: "38", roads: "國道58", note: "許田可買土產、水果與美麗海水族館優惠票。" },
          { id: "L5", name: "許田 → Starbucks／阿拉馬海納", stopIds: ["kyoda", "starbucks-nago"], distanceKm: null, minutes: "33", roads: "國道58 → 449 → 縣道114", note: "PDF 將 Starbucks／阿拉馬海納合併估算；若天色已暗或家人疲勞，跳過 Starbucks。" },
          { id: "L6", name: "Starbucks → 阿拉馬海納", stopIds: ["starbucks-nago", "ala"], distanceKm: null, minutes: null, roads: "同一路段短程", note: "PDF 未另列分段時間；以 18:50-19:00 入住為目標。" }
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
      weather: { label: "本部町／古宇利島", lat: 26.6826085, lng: 127.8834902 },
      schedule: [
        { time: "07:30", title: "飯店早餐", detail: "確認票券、兒童用品與雨具。", tag: "集合", type: "source" },
        { time: "08:15", title: "抵達停車場、整理嬰兒車", detail: "提早到場，從 4F 入口準備第一場入館。", tag: "水族館", type: "source" },
        { time: "08:30", title: "美麗海水族館開館入場", detail: "通常期開館 08:30-18:30；依 4F→3F→2F 順序走主線。", tag: "水族館", type: "source" },
        { time: "08:30-09:20", title: "Ocean Blue 水槽旁付費席（S）", detail: "現場先到先得、不接受預約；9 位、S 席每 50 分鐘 1,000 日圓，安排 2 位代表抽取。抽不到仍照一般動線。", tag: "S／先到先得", type: "source" },
        { time: "09:30", title: "黑潮之海給餌解說（S）", detail: "官方每日 09:30；可看鬼蝠魟與鯨鯊。", tag: "S／節目", type: "source" },
        { time: "10:00", title: "海豚餵食體驗（S）", detail: "現場先到先得、名額有限，每組 1,000 日圓；其他場次 11:00／13:30／15:30，12:00 暫停。", tag: "S／名額有限", type: "conditional" },
        { time: "10:30-10:45", title: "Oki-chan 海豚秀（S）", detail: "演出約 10-15 分鐘；其他場次 11:30／13:00／15:00／17:00。", tag: "S／節目", type: "source" },
        { time: "11:00-11:20", title: "海龜餵食（A）", detail: "11:00-12:00 或 14:00-15:00 現場先到先得，無法事前預約，可能提早售罄。", tag: "A／先到先得", type: "conditional" },
        { time: "11:20-11:50", title: "海龜館、海牛館", detail: "依現場動線完成親子主線。", tag: "水族館", type: "source" },
        { time: "11:50-12:20", title: "核心展區快逛", detail: "保留給孩子與拍照；不再安排水族館內完整午餐。", tag: "主線", type: "source" },
        { time: "12:20-12:35", title: "黑潮之海最後巡覽", detail: "完成最後拍照與出口前確認。", tag: "水族館", type: "source" },
        { time: "12:35-13:00", title: "離館緩衝，13:00 準時出發", detail: "今天不安排二次入館；午餐改到古宇利島處理。", tag: "硬時間點", type: "source" },
        { time: "13:00-13:40", title: "開車前往古宇利島", detail: "車程約 30-40 分鐘，依路況與孩童狀態調整。", tag: "自駕", type: "source" },
        { time: "14:00-15:30", title: "A/B 分組活動＋午餐", detail: "A 組古宇利透明玻璃船餵魚；B 組古宇利海洋塔＋蝦蝦飯，午餐不留在水族館。", tag: "A/B 分組", type: "source" },
        { time: "15:30-16:00", title: "合體下午茶", detail: "方案一「なんくるKITCHEN」水果碗，或方案二「モリンガの木」。", tag: "彈性", type: "source" },
        { time: "16:30", title: "返回飯店、休息 30 分鐘", detail: "回阿拉馬海納後先讓孩子休息，再準備晚餐。", tag: "住宿", type: "source" },
        { time: "18:00", title: "晚餐「OKINAWA SHABU-SHABU」本部店", detail: "需提前訂位，鄰近今晚住宿。", tag: "晚餐／需訂位", type: "conditional" }
      ],
      route: {
        source: "來源 PDF v4 路線總計：47.9 公里／約 1 小時 23 分；13:00 離開水族館，返程原路回本部",
        stops: [
          { id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902 },
          { id: "churaumi", label: "海洋博公園／美麗海水族館", query: "沖縄美ら海水族館", lat: 26.6943689, lng: 127.8780380 },
          { id: "kouri", label: "古宇利島", query: "古宇利島 沖縄", lat: 26.7042510, lng: 128.0180847 },
          { id: "ala-return", label: "回本部住宿", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902 }
        ],
        legs: [
          { id: "L1", name: "阿拉馬海納 → 海洋博公園", stopIds: ["ala", "churaumi"], distanceKm: null, minutes: null, roads: "縣道114號", note: "早上短程前往水族館。" },
          { id: "L2", name: "美麗海 → 古宇利島", stopIds: ["churaumi", "kouri"], distanceKm: null, minutes: "30-40", roads: "縣道114 → 505 → 248 → 110 → 247號", note: "依風況、兒童狀態與古宇利島現場狀況調整。" },
          { id: "L3", name: "古宇利島 → 回本部", stopIds: ["kouri", "ala-return"], distanceKm: null, minutes: null, roads: "返程原路回本部", note: "備案二須把回水族館時間設為共同集合點。" }
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
      weather: { label: "北谷町（住宿基地）", lat: 26.3210666, lng: 127.7552524 },
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
        source: "來源 PDF v4 路線總計：76.5 公里／約 1 小時 42 分；A/B 分支與會合路線分開看",
        hideOverviewNavigation: true,
        stops: [
          { id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902 },
          { id: "neopark", label: "Neo Park", query: "ネオパークオキナワ", lat: 26.6117963, lng: 127.9910131 },
          { id: "junglia", label: "JUNGLIA", query: "JUNGLIA OKINAWA", lat: 26.6415215, lng: 127.9704904 },
          { id: "aeon-nago", label: "AEON Nago", query: "イオン名護店 沖縄県名護市字名護見取川原4472", lat: 26.6099151, lng: 127.9846748 },
          { id: "nago-snack", label: "名護點心站：暖暮", query: "ラーメン 暖暮 名護店 沖縄県名護市東江5-10-36", lat: 26.5823768, lng: 127.9846780 },
          { id: "american-village", label: "美國村", query: "American Village Okinawa", lat: 26.3165214, lng: 127.7573637 },
          { id: "lagent", label: "La'gent Hotel Okinawa Chatan", query: "La'gent Hotel Okinawa Chatan", lat: 26.3210666, lng: 127.7552524 }
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
      title: "兒童王國、Rycom、港川、國際通",
      intro: "今天先從北谷往南移動，住宿改為 HOTEL ANTEROOM NAHA（前島）；還車移至 Day 5，今晚車留在飯店，步行前往國際通。PDF 路線 30.6 公里、約 1 小時 26 分。",
      mode: "mixed",
      transportLabel: "白天自駕；晚間步行",
      lodgingKey: "anteroom",
      weather: { label: "那霸市區／前島", lat: 26.2255762, lng: 127.6792215 },
      schedule: [
        { time: "07:30", title: "早餐、La'gent 退房／行李上車", detail: "早餐後完成 La'gent 退房，行李上車；出發前確認飯店退房與行李寄放規則。", tag: "集合／退房", type: "source" },
        { time: "09:30-11:30", title: "沖繩兒童王國", detail: "平日 09:30-17:30；固定休園日為每週二，12/21（一）正常開園。", tag: "親子", type: "source" },
        { time: "12:00", title: "永旺夢樂城（AEON Rycom）＋午餐", detail: "專門店營業 10:00-22:00。", tag: "購物", type: "source" },
        { time: "14:30", title: "結束購物", detail: "依購物與午餐狀況調整。", tag: "轉場", type: "source" },
        { time: "15:00", title: "港川外人住宅：oHacorté", detail: "地址：浦添市港川2丁目17-1 #18；水果塔 11:30 起販售，官方營業 10:30-19:00（內用 11:30 起）。", tag: "下午茶", type: "source" },
        { time: "15:40", title: "結束下午茶，出發前島", detail: "前往 HOTEL ANTEROOM NAHA；此段車程約 20-25 分鐘，尚未以當日導航覆核。", tag: "自駕／估算", type: "conditional" },
        { time: "16:05", title: "入住 HOTEL ANTEROOM，放行李", detail: "地址：那霸市前島3-27-11；Check-in 15:00。停車 52 格、1,500 円／晚、先到先得；先處理行李與房間。", tag: "住宿／停車", type: "source" },
        { time: "16:05-18:00", title: "飯店休息、整理隔日行李", detail: "車留在 HOTEL ANTEROOM；租車延至 Day 5 早上才到 OTS 還車。", tag: "不還車", type: "source" },
        { time: "18:00", title: "步行前往國際通", detail: "飯店官方資訊：至美栄橋站步行約 12 分鐘；今晚不開車，預留親子步行時間。", tag: "步行", type: "source" },
        { time: "18:40", title: "晚餐「波照間沖繩地方料理」", detail: "需先訂位；全家步行前往國際通方向。", tag: "晚餐／需訂位", type: "conditional" },
        { time: "20:00", title: "繼續逛國際通", detail: "依全家體力與回程交通調整。", tag: "逛街", type: "source" },
        { time: "21:00", title: "步行回 HOTEL ANTEROOM 休息", detail: "車留在飯店；整理 Day 5 07:30 退房、波上宮與還車文件。", tag: "住宿", type: "source" }
      ],
      route: {
        source: "來源 PDF v4 路線總計：30.6 公里／約 1 小時 26 分；國際通往返為步行段，今晚不還車",
        routeType: "mixed",
        navigationMode: "driving",
        overviewStops: ["lagent", "childrens-kingdom", "rycom", "minatogawa", "anteroom"],
        overviewNavigationLabel: "開啟今日自駕路線",
        stops: [
          { id: "lagent", label: "La'gent Hotel Chatan", query: "La'gent Hotel Okinawa Chatan", lat: 26.3210666, lng: 127.7552524 },
          { id: "childrens-kingdom", label: "沖繩兒童王國", query: "沖縄こどもの国", lat: 26.3276961, lng: 127.8035022 },
          { id: "rycom", label: "AEON Rycom", query: "イオンモール沖縄ライカム", lat: 26.3142262, lng: 127.7959208 },
          { id: "minatogawa", label: "港川 oHacorté", query: "oHacorte 沖縄県浦添市港川2丁目17-1", lat: 26.2624960, lng: 127.7153399 },
          { id: "anteroom", label: "HOTEL ANTEROOM NAHA", query: "HOTEL ANTEROOM NAHA, 沖縄県那覇市前島3丁目27番地11", lat: 26.2255762, lng: 127.6792215 },
          { id: "kokusai", label: "國際通", query: "国際通り 那覇市", lat: 26.2161948, lng: 127.6879299 }
        ],
        legs: [
          { id: "L1", name: "La'gent → 兒童王國", from: "La'gent Hotel Chatan", to: "沖繩兒童王國", stopIds: ["lagent", "childrens-kingdom"], distanceKm: null, minutes: null, roads: "58 → 330 → 85 → 22號", note: "PDF 總計不含本段；出發時以導航確認。" },
          { id: "L2", name: "兒童王國 → Rycom", from: "沖繩兒童王國", to: "AEON Rycom", stopIds: ["childrens-kingdom", "rycom"], distanceKm: null, minutes: null, roads: "22 → 85號", note: "短程轉場，午餐與購物一起處理。" },
          { id: "L3", name: "Rycom → 港川", from: "AEON Rycom", to: "港川 oHacorté", stopIds: ["rycom", "minatogawa"], distanceKm: null, minutes: null, roads: "330 → 58號", note: "下午茶停留時間要配合 15:40 出發前島的排程。" },
          { id: "L4", name: "港川 → HOTEL ANTEROOM", from: "港川 oHacorté", to: "HOTEL ANTEROOM NAHA", stopIds: ["minatogawa", "anteroom"], distanceKm: null, minutes: "20-25", roads: "國道58號北上經那霸市區方向", note: "車程為 PDF 排程估算，尚未以導航覆核；抵達後全家先辦理入住與放行李。" },
          { id: "L5", name: "HOTEL ANTEROOM → 國際通", from: "HOTEL ANTEROOM NAHA", to: "國際通", stopIds: ["anteroom", "kokusai"], distanceKm: null, minutes: "15-20", roads: "步行；非自駕", navigation: false, mapLine: false, mode: "walking", openLabel: "步行段（不開啟導航）", note: "今晚車留在飯店；以美栄橋／國際通方向步行。" }
        ]
      },
      notes: [
        { title: "還車策略", detail: "今天不還車；全家入住 HOTEL ANTEROOM 後將車留在飯店，Day 5 07:30 退房、經波上宮後到 OTS 08:20-09:00 還車。" },
        { title: "HOTEL ANTEROOM 停車", detail: "停車 52 格、1,500 円／晚、先到先得；抵達後先處理行李，再確認車位與隔日出車動線。" },
        { title: "國際通交通", detail: "飯店官方提供美栄橋站步行約 12 分鐘；今晚從前島步行前往國際通，避免再開車找停車位。" }
      ]
    },
    {
      id: "day5",
      label: "Day 5",
      date: "2026-12-22",
      dateLabel: "12/22 Tue",
      title: "波上宮、還車、iias／DMM、機場",
      intro: "從 HOTEL ANTEROOM 退房後先到波上宮，再於 08:20-09:00 回 OTS 豐崎還車；還車後步行至相鄰的 iias／DMM，下午依 A/B 航班分開前往機場。PDF 路線約 18 公里／48 分鐘。",
      mode: "mixed",
      transportLabel: "上午自駕至還車；還車後步行／計程車",
      lodgingKey: "anteroom",
      weather: { label: "那霸市區／前島／機場", lat: 26.2255762, lng: 127.6792215 },
      schedule: [
        { time: "07:00", title: "早餐自理", detail: "整理行李與退房文件。", tag: "集合", type: "source" },
        { time: "07:30", title: "退房、行李上車出發", detail: "HOTEL ANTEROOM 不提供今日行李寄放安排；退房規則為 11:00 前，今天提前出發。", tag: "退房", type: "source" },
        { time: "07:40-08:00", title: "波上宮", detail: "境內 24 小時免費開放；授與所約 09:00 才開放，此段僅安排參拜與拍照。免費停車約 20 格，客滿改用附近付費停車。", tag: "參拜", type: "source" },
        { time: "08:00-08:20", title: "前往 OTS 豐崎還車", detail: "依當日導航確認；PDF 行程預留 20 分鐘，完整路線約 18 公里／48 分鐘。", tag: "自駕／估算", type: "conditional" },
        { time: "08:20-09:00", title: "OTS 豐崎營業所還車", detail: "加油、驗車、交車；租車延長至 Day 5，OTS 營業 08:00-19:00，預計在受理時段內完成。", tag: "還車", type: "source" },
        { time: "09:00-09:20", title: "還車後步行至 iias", detail: "OTS 官方資料標示與 iias 相鄰；步行約 1-3 分鐘，先處理行李，不搭單軌。", tag: "步行／非單軌", type: "source" },
        { time: "09:30-12:30", title: "A 組 iias 購物／B 組 DMM 水族館", detail: "iias 店舖 10:00-21:00；DMM 09:00-19:00，位於 iias 2F，兩組同一地點分頭活動。", tag: "A/B 分組", type: "source" },
        { time: "12:30", title: "午餐（iias 內餐廳）", detail: "依現場候位與隊伍需求安排。", tag: "午餐", type: "source" },
        { time: "13:30", title: "A/B 行程分流", detail: "A 組依航班提早離開；B 組可繼續購物、自由活動或前往西松屋。", tag: "A/B 分流", type: "source" },
        { time: "14:30", title: "A 組前往那霸機場", detail: "A 隊 MM929 16:50 那霸起飛；PDF 排程 14:50 抵達機場，交通依當日計程車／公共交通狀況決定。", tag: "A 隊／機場", type: "conditional" },
        { time: "14:50", title: "A 組抵達機場", detail: "預留報到與安檢緩衝。", tag: "A 隊", type: "source" },
        { time: "16:30", title: "B 組前往那霸機場", detail: "B 隊 BR185 20:10 那霸起飛；PDF 排程 17:00 抵達機場。", tag: "B 隊／機場", type: "conditional" },
        { time: "16:50-17:35", title: "A 隊：樂桃 MM929 回程", detail: "16:50 那霸起飛、17:35 桃園抵達；航班與訂位紀錄出發前最終確認。", tag: "A 隊／航班待重查", type: "conditional" },
        { time: "17:00", title: "B 組抵達機場", detail: "預留報到、安檢與晚餐緩衝。", tag: "B 隊", type: "source" },
        { time: "20:10-20:55", title: "B 隊：BR185 回程航班", detail: "20:10 那霸起飛、20:55 桃園抵達；航班與訂位紀錄出發前最終確認。", tag: "B 隊／航班待重查", type: "conditional" }
      ],
      route: {
        source: "來源 PDF v4：HOTEL ANTEROOM → 波上宮 → OTS → iias 約 18 公里／48 分鐘；還車後 OTS→iias 為步行",
        routeType: "mixed",
        navigationMode: "driving",
        overviewStops: ["anteroom", "naminoue", "ots-return", "iias"],
        overviewNavigationLabel: "開啟上午自駕路線",
        stops: [
          { id: "anteroom", label: "HOTEL ANTEROOM NAHA", query: "HOTEL ANTEROOM NAHA, 沖縄県那覇市前島3丁目27番地11", lat: 26.2255762, lng: 127.6792215 },
          { id: "naminoue", label: "波上宮", query: "波上宮 沖縄", lat: 26.2205598, lng: 127.6711359 },
          { id: "ots-return", label: "OTS 豐崎還車", query: "OTSレンタカー 豊崎営業所 沖縄", lat: 26.1588693, lng: 127.6544462 },
          { id: "iias", label: "iias／DMM 豐崎", query: "iias 沖縄豊崎", lat: 26.1574666, lng: 127.6505955 },
          { id: "airport", label: "那霸機場國內線航廈", query: "那覇空港 国内線旅客ターミナル", lat: 26.2062776, lng: 127.6508031 }
        ],
        legs: [
          { id: "L1", name: "HOTEL ANTEROOM → 波上宮", from: "HOTEL ANTEROOM NAHA", to: "波上宮", stopIds: ["anteroom", "naminoue"], distanceKm: null, minutes: null, roads: "依當日導航；市區道路", openLabel: "開啟 Google Maps 路線參考", note: "07:30 退房後出發；PDF 只提供整段總時間，不把此段單獨視為已覆核車程。" },
          { id: "L2", name: "波上宮 → OTS 豐崎", from: "波上宮", to: "OTS 豐崎還車", stopIds: ["naminoue", "ots-return"], distanceKm: null, minutes: "20", roads: "依當日導航；道路編號待查核", openLabel: "開啟 Google Maps 路線參考", note: "08:00-08:20 行程排程；抵達後完成加油、驗車與還車。" },
          { id: "L3", name: "OTS → iias／DMM", from: "OTS 豐崎還車", to: "iias／DMM 豐崎", stopIds: ["ots-return", "iias"], distanceKm: null, minutes: "1-3", roads: "步行；OTS 與 iias 相鄰", navigation: false, mapLine: false, mode: "walking", openLabel: "步行段（不開啟導航）", note: "還車後步行，不搭單軌；先處理行李再進商場。" },
          { id: "L4", name: "iias／DMM → 那霸機場", from: "iias／DMM 豐崎", to: "那霸機場", stopIds: ["iias", "airport"], distanceKm: null, minutes: null, roads: "計程車／公共交通；依 A/B 航班分流", navigation: true, mapLine: true, mode: "transit", openLabel: "開啟 Google Maps 路線參考", note: "13:30 後分流；地圖虛線只表示機場移動方向，不是即時交通路線。" }
        ]
      },
      notes: [
        { title: "兩隊分開抓時間", detail: "A 隊 MM929 16:50 起飛，iias／DMM 13:00 後分流、14:30 前往機場；B 隊 16:30 出發、17:00 抵達機場。" },
        { title: "還車後到 iias", detail: "OTS 豐崎與 iias 相鄰，還車完成後步行約 1-3 分鐘；此段不是單軌，也不是從飯店直接改搭單軌。" },
        { title: "iias 到機場", detail: "iias → 機場依 A/B 航班搭計程車或公共交通；此段行程在地圖以虛線表示，請於當日確認交通。" }
      ]
    }
  ]
};

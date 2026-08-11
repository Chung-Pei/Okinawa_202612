window.TRIP_DATA = {
  meta: {
    title: "沖繩家族旅遊",
    subtitle: "領隊版 PWA",
    dates: "2026-12-17/2026-12-22",
    timezone: "Asia/Tokyo",
    sourceFile: "沖繩家族旅遊_領隊版.pdf",
    importedSource: "沖繩家族旅遊行程 Day1-5.docx（工作區同內容轉檔版）",
    sourceSha256: "BC2FFAD2218A6C0539414471D60913A41FB5D513600B63492C99D2FAB8888ECB",
    importedAt: "2026-08-11T00:00:00+09:00",
    note: "來源檔標題寫 Day1-3，但內文包含 Day0-Day5；來源行程、現場即時資料與估算路線在介面上分開標示。"
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
      source: "使用者補充・官方聯絡頁查核 2026-08-11",
      note: "Day 0 A 隊住宿；官方頁列聯絡電話 098-855-7111 與 Email。"
    },
    alaMahaina: {
      name: "阿拉馬海納公寓式酒店",
      english: "Ala MAHAINA CONDO HOTEL",
      address: "〒905-0205 沖繩縣國頭郡本部町山川 1421-1",
      phone: "+81-980-51-7800",
      map: { lat: 26.693591, lng: 127.877974 },
      website: "https://www.ala-mahaina.com/en/",
      source: "官方網站・查核 2026-08-11",
      note: "Day 1-2 住宿基地；官方頁列有停車場與本部町交通資訊。"
    },
    lagent: {
      name: "北谷柔嫚閣酒店",
      english: "La'gent Hotel Okinawa Chatan",
      address: "〒904-0115 沖繩縣中頭郡北谷町美浜 25-3",
      phone: "+81-98-926-0210",
      email: "okinawa-chatan@lagent.jp",
      map: { lat: 26.317017, lng: 127.755064 },
      website: "https://lagent.jp/chatan/contact",
      source: "官方聯絡頁・查核 2026-08-11",
      note: "Day 3 住宿基地；車輛與美國村夜間活動請分開安排。"
    },
    monterey: {
      name: "蒙特利拉蘇瑞那霸酒店",
      english: "Hotel Monterey La Soeur Naha",
      address: "〒900-0014 沖繩縣那霸市松尾 1-1-2",
      phone: "+81-98-869-7111",
      map: { lat: 26.214116, lng: 127.687939 },
      website: "https://www.hotelmonterey.co.jp/en/lasoeur_naha/access/",
      source: "官方交通頁・查核 2026-08-11",
      note: "Day 4-5 住宿基地；Day 5 早上先寄放行李，再前往波上宮。"
    }
  },
  days: [
    {
      id: "day0",
      label: "Day 0",
      date: "2026-12-17",
      dateLabel: "12/17 Thu",
      title: "前鋒隊抵達那霸",
      intro: "A 隊前鋒隊搭乘 MM930，20:50 抵達那霸後入住壺川的メルキュール沖縄那覇。先完成入境、取行李與夜間入住流程。",
      mode: "arrival",
      lodgingKey: "day0",
      weather: { label: "那霸市區", lat: 26.2124, lng: 127.6809 },
      schedule: [
        { time: "20:50", title: "MM930 抵達那霸機場", detail: "A 隊抵達後完成入境、領行李，再前往壺川住宿。航班編號與時間為使用者補充，出發前請以航空公司訂位／航班公告重查。", tag: "A 隊／航班待重查", type: "conditional" },
        { time: "抵達後", title: "入住メルキュール沖縄那覇", detail: "地址：沖繩縣那霸市壺川 3-3-19；先確認櫃檯、房卡與隔日取車文件。", tag: "A 隊／住宿", type: "source" }
      ],
      notes: [
        { title: "晚到入住流程", detail: "MM930 抵達後先完成入境與領行李，再前往壺川；把飯店地址存成日文／英文兩種版本。" },
        { title: "住宿聯絡", detail: "メルキュール沖縄那覇：098-855-7111；Email：H8725-RE@accor.com。" },
        { title: "隔日取車文件", detail: "將護照、駕照、日文譯本或國際駕照、租車訂單集中放在同一個文件袋。" }
      ]
    },
    {
      id: "day1",
      label: "Day 1",
      date: "2026-12-18",
      dateLabel: "12/18 Fri",
      title: "取車上路：瀨長島、萬座毛與本部",
      intro: "從那霸機場取車後一路北上，先安排瀨長島用餐與採買，再經萬座毛、許田休息站與名護市區，入住本部的 Ala MAHAINA。",
      mode: "driving",
      lodgingKey: "alaMahaina",
      weather: { label: "本部町（住宿基地）", lat: 26.693591, lng: 127.877974 },
      schedule: [
        { time: "06:55-09:15", title: "BR112 長榮班機抵達那霸機場", detail: "抵達後領行李；來源行程另列 10:20 出發前往租車。", tag: "航班待重查", type: "conditional" },
        { time: "10:20-11:40", title: "OTS 臨空豐崎營業所取車", detail: "搭接駁車前往 OTS；完成租車、文件核對與車況全程錄影。官方頁標示機場免費接駁約 15 分鐘。", tag: "租車", type: "source" },
        { time: "12:00-13:30", title: "瀨長島 Umikaji Terrace 午餐", detail: "Flooding Burger；A Happy Pancake 為備選，來源註記需提前約兩週預約。", tag: "用餐", type: "source" },
        { time: "13:40-14:10", title: "業務超市／小禮店採買", detail: "午餐備案：JEF Tomigusuku Branch、baby face planet’s。", tag: "採買", type: "source" },
        { time: "15:10-15:50", title: "萬座毛", detail: "海岸景觀停留；停車與入場規則請依現場公告。", tag: "景點", type: "source" },
        { time: "16:30-17:30", title: "許田休息站", detail: "購買土產、水果、美麗海水族館票券與晚餐；來源行程列營業時間 08:30-19:00，出發前再核對。", tag: "時間待重查", type: "conditional" },
        { time: "17:45-18:20", title: "星巴克名護 21 世紀之森公園店", detail: "短暫休息後前往住宿。", tag: "休息", type: "source" },
        { time: "18:50-19:00", title: "Ala MAHAINA 辦理入住", detail: "確認停車、房卡、早餐與隔日美麗海水族館出發動線。", tag: "住宿", type: "source" },
        { time: "19:30-21:00", title: "Hanasaki Marche 宵夜", detail: "住宿樓下共構商場，餐廳依當日營業狀況選擇。", tag: "彈性", type: "source" }
      ],
      route: {
        source: "OSRM 路線快照（2026-08-08）＋ Google Maps 即時導航",
        stops: [
          { id: "ots", label: "OTS 臨空豐崎", short: "取車", lat: 26.159864, lng: 127.660141, kind: "start" },
          { id: "umikaji", label: "瀨長島 Umikaji Terrace", short: "午餐", lat: 26.177979, lng: 127.644370, kind: "stop" },
          { id: "manzamo", label: "萬座毛", short: "海岸", lat: 26.503440, lng: 127.851110, kind: "stop" },
          { id: "nago", label: "許田／名護 21 世紀之森", short: "休息", lat: 26.602209, lng: 127.953060, kind: "stop" },
          { id: "ala", label: "Ala MAHAINA", short: "住宿", lat: 26.693591, lng: 127.877974, kind: "end" }
        ],
        legs: [
          { id: "L1", name: "OTS → 瀨長島", distanceKm: 4.0, minutes: 7, roads: "R249 → R331", note: "機場接駁完成後取車，再前往 Umikaji Terrace。" },
          { id: "L2", name: "瀨長島 → 萬座毛", distanceKm: 53.9, minutes: 61, roads: "R331 → E58 → R58", note: "長距離北上；出發時間要預留租車取車與午餐排隊。" },
          { id: "L3", name: "萬座毛 → 許田／名護", distanceKm: 25.7, minutes: 38, roads: "R58 → R449", note: "依來源行程安排許田休息站與名護市區咖啡休息。" },
          { id: "L4", name: "名護 → Ala MAHAINA", distanceKm: 19.6, minutes: 33, roads: "R449 → R114", note: "入住後可直接在 Hanasaki Marche 用餐。" }
        ]
      }
    },
    {
      id: "day2",
      label: "Day 2",
      date: "2026-12-19",
      dateLabel: "12/19 Sat",
      title: "美麗海水族館＋古宇利島分組行動",
      intro: "上午把美麗海水族館的重點節目排在前段，午後前往古宇利島分組，傍晚依體力選擇回飯店或回水族館看垂直餵食秀。",
      mode: "driving",
      lodgingKey: "alaMahaina",
      weather: { label: "本部町／古宇利島", lat: 26.693591, lng: 127.877974 },
      schedule: [
        { time: "07:30", title: "飯店早餐", detail: "早餐後整理入館物品與再入館手章策略。", tag: "集合", type: "source" },
        { time: "08:30-09:20", title: "美麗海水族館重點展區", detail: "從 3F 開始：觸摸池、珊瑚礁之海、熱帶魚之海，再依現場動線往黑潮之海。", tag: "水族館", type: "source" },
        { time: "09:30-09:40", title: "鬼蝠魟餵食秀", detail: "來源行程註記此時段剛好走到 2F 黑潮之海，請以當日節目表為準。", tag: "節目待重查", type: "conditional" },
        { time: "09:40", title: "黑潮探險＋ Ocean Blue", detail: "搭電梯至上方俯瞰鯨鯊；兩位代表操作機器抽取 Ocean Blue 指定景觀席號碼牌。", tag: "分工", type: "source" },
        { time: "10:00-12:20", title: "出館、蓋再入館手章、海豚秀與戶外餵食", detail: "10:30 Oki-chan Theater；11:00 海龜館與海牛館；11:30-12:20 回 Ocean Blue 用餐。", tag: "再入館", type: "source" },
        { time: "13:00-13:40", title: "開車前往古宇利島", detail: "來源行程估算車程約 30-40 分鐘，出發前以導航現況為準。", tag: "自駕", type: "source" },
        { time: "14:00-15:30", title: "古宇利島 A/B 分組", detail: "A 組透明玻璃船餵魚；B 組古宇利 Ocean Tower＋蝦蝦飯，兩處步行約 8 分鐘。", tag: "A/B 分組", type: "source" },
        { time: "15:30-16:10", title: "兩隊合體吃甜點、拍照休息", detail: "視天氣與體力調整停留時間。", tag: "彈性", type: "source" },
        { time: "16:30-17:30", title: "傍晚二選一", detail: "路線一：16:30 回飯店休息；路線二：16:00 提早離開古宇利島，16:40 回水族館，17:00 看垂直餵食秀，17:30 離開。", tag: "備案", type: "conditional" },
        { time: "18:00", title: "OKINAWA SHABU-SHABU 火鍋", detail: "晚餐時間依預約與路況彈性調整。", tag: "用餐", type: "source" }
      ],
      route: {
        source: "OSRM 路線快照（2026-08-08）＋ Google Maps 即時導航",
        stops: [
          { id: "ala", label: "Ala MAHAINA", short: "住宿", lat: 26.693591, lng: 127.877974, kind: "start" },
          { id: "churaumi", label: "美麗海水族館", short: "水族館", lat: 26.691024, lng: 127.879967, kind: "stop" },
          { id: "kouri", label: "古宇利 Ocean Tower", short: "分組", lat: 26.704151, lng: 128.014158, kind: "stop" },
          { id: "ala-return", label: "Ala MAHAINA", short: "回飯店", lat: 26.693591, lng: 127.877974, kind: "end" }
        ],
        legs: [
          { id: "L1", name: "Ala MAHAINA → 美麗海", distanceKm: 2.2, minutes: 7, roads: "R114", note: "短程移動；入館前先確認停車與團體集合點。" },
          { id: "L2", name: "美麗海 → 古宇利島", distanceKm: 21.5, minutes: 39, roads: "R505 → R248 → R110 → R247", note: "古宇利大橋前後依導航與風況調整。" },
          { id: "L3", name: "古宇利島 → Ala MAHAINA", distanceKm: 22.4, minutes: 44, roads: "R247 → R110 → R248 → R505 → R114", note: "如果走備案二，請先把回水族館時間設為共同集合點。" }
        ]
      }
    },
    {
      id: "day3",
      label: "Day 3",
      date: "2026-12-20",
      dateLabel: "12/20 Sun",
      title: "Neopark／JUNGLIA 分隊，夜宿北谷",
      intro: "早上退房與分隊後，A 隊去 Neopark、B 隊去 JUNGLIA；下午在名護 AEON 會合，再一路南下美國村看夕陽與聖誕燈。",
      mode: "driving",
      lodgingKey: "lagent",
      weather: { label: "北谷町（住宿基地）", lat: 26.317017, lng: 127.755064 },
      schedule: [
        { time: "07:00-08:40", title: "早餐、行李放大廳、海洋博公園散步", detail: "08:40 兩大隊分開出發；先確認當日集合與通訊方式。", tag: "分隊", type: "source" },
        { time: "09:30", title: "A 隊：Neopark 動植物園", detail: "來源行程安排 A 隊早上進場，實際開園與入場規則請再查官方公告。", tag: "A 隊", type: "source" },
        { time: "10:00", title: "B 隊：JUNGLIA 叢林樂園", detail: "山原森林冒險、熱氣球、沉浸式叢林越野車；Reservation Pass 與 2026/12/20 時段屬行前必查項目。", tag: "B 隊／必查", type: "conditional" },
        { time: "12:00-14:30", title: "A/B 分別前往名護市區", detail: "A 隊 12:30 午餐、13:30 逛 AEON；B 隊來源行程列 14:30 離開 JUNGLIA。", tag: "分隊", type: "source" },
        { time: "15:00", title: "名護 AEON 會合", detail: "集合後前往美國村；請在出發前確認雙方都已回到車上。", tag: "共同集合", type: "source" },
        { time: "15:15-15:50", title: "暖暮拉麵／Blue Seal 名護店", detail: "來源註記拉麵與冰淇淋距離約 700 公尺；依排隊時間二選一。", tag: "彈性", type: "source" },
        { time: "15:50-17:30", title: "前往美國村與海邊日落", detail: "來源行程估算約 50 分鐘；17:00 逛街，17:30 看海邊日落與 12 月聖誕燈。", tag: "自駕", type: "source" },
        { time: "18:30-20:30", title: "美國村晚餐、逛街", detail: "20:30 辦理入住北谷柔嫚閣酒店。", tag: "夜間", type: "source" }
      ],
      route: {
        source: "OSRM 路線快照（2026-08-08）＋ Google Maps 即時導航",
        stops: [
          { id: "ala", label: "Ala MAHAINA", short: "退房", lat: 26.693591, lng: 127.877974, kind: "start" },
          { id: "neopark", label: "Neopark Okinawa", short: "A 隊", lat: 26.602009, lng: 127.977071, kind: "stop" },
          { id: "junglia", label: "JUNGLIA OKINAWA", short: "B 隊", lat: 26.669779, lng: 128.000568, kind: "stop" },
          { id: "aeon-nago", label: "AEON Nago", short: "會合", lat: 26.595018, lng: 127.976914, kind: "stop" },
          { id: "lagent", label: "La'gent Hotel Chatan", short: "入住", lat: 26.317017, lng: 127.755064, kind: "end" }
        ],
        legs: [
          { id: "L1", name: "Ala MAHAINA → Neopark", distanceKm: 22.5, minutes: 37, roads: "R114 → R449", note: "A 隊路線；B 隊前往 JUNGLIA 的時間與預約條件不同。" },
          { id: "L2", name: "Neopark → JUNGLIA", distanceKm: 14.1, minutes: 20, roads: "R449 → R58 → R110", note: "此段是 B 隊活動區域附近的轉場估算。" },
          { id: "L3", name: "JUNGLIA → AEON Nago", distanceKm: 15.2, minutes: 21, roads: "R110 → R58 → R449", note: "AEON 會合後再進行共同南下。" },
          { id: "L4", name: "AEON Nago → 美國村／北谷", distanceKm: 51.7, minutes: 57, roads: "R449 → R58 → E58 → R23", note: "夕陽與聖誕燈時段容易受車流影響，請預留緩衝。" }
        ]
      }
    },
    {
      id: "day4",
      label: "Day 4",
      date: "2026-12-21",
      dateLabel: "12/21 Mon",
      title: "兒童王國、Rycom、還車與國際通",
      intro: "上午親子景點，午餐與購物放在 Rycom；下午兵分兩路完成還車，再回那霸吃飯、逛國際通與入住。",
      mode: "driving",
      lodgingKey: "monterey",
      weather: { label: "那霸市區（住宿基地）", lat: 26.214116, lng: 127.687939 },
      schedule: [
        { time: "07:30", title: "早餐", detail: "早餐後確認退房、行李與還車代表。", tag: "集合", type: "source" },
        { time: "09:30-11:30", title: "兒童王國 Okinawa Zoo & Museum", detail: "地址：5 Chome-7-1 Goya, Okinawa 904-0021；入場與停車依現場公告。", tag: "親子", type: "source" },
        { time: "12:00-15:00", title: "永旺夢樂城 Okinawa Rycom＋午餐", detail: "地址：1 Raikamu, Kitanakagusuku 901-2306；15:00 結束購物。", tag: "購物", type: "source" },
        { time: "15:30-16:30", title: "浦添港川外人住宅街", detail: "地址：2 Chome-18-3 Minatogawa, Urasoe 901-2134；下午茶可選 oHacorté 水果塔或沖繩黑糖可麗露。", tag: "下午茶", type: "source" },
        { time: "17:00", title: "國際通＋同步還車", detail: "第一牧志公設市場與逛街；派代表順路加油，前往 OTS 臨空豐崎營業所還車。官方頁目前列 08:00-19:00，仍需按訂單確認。", tag: "還車待重查", type: "conditional" },
        { time: "18:30-20:00", title: "牧志附近沖繩地方料理", detail: "來源地址：1 Chome-2-30 Makishi, Naha 900-0013；餐廳名稱與預約需要再核對。", tag: "餐廳待重查", type: "conditional" },
        { time: "21:00", title: "Hotel Monterey La Soeur Naha 入住", detail: "地址：1-1-2 Matsuo；入住後整理 Day 5 行李。", tag: "住宿", type: "source" }
      ],
      route: {
        source: "OSRM 路線快照（2026-08-08）＋ Google Maps 即時導航",
        stops: [
          { id: "lagent", label: "La'gent Hotel Chatan", short: "出發", lat: 26.317017, lng: 127.755064, kind: "start" },
          { id: "childrens-kingdom", label: "兒童王國", short: "親子", lat: 26.319003, lng: 127.804769, kind: "stop" },
          { id: "rycom", label: "AEON Mall Okinawa Rycom", short: "購物", lat: 26.316002, lng: 127.794521, kind: "stop" },
          { id: "minatogawa", label: "港川外人住宅街", short: "下午茶", lat: 26.259064, lng: 127.722056, kind: "stop" },
          { id: "ots-return", label: "OTS 臨空豐崎還車", short: "還車", lat: 26.159862, lng: 127.665036, kind: "stop" },
          { id: "monterey", label: "Hotel Monterey La Soeur Naha", short: "入住", lat: 26.214116, lng: 127.687939, kind: "end" }
        ],
        legs: [
          { id: "L1", name: "北谷 → 兒童王國", distanceKm: 6.6, minutes: 12, roads: "R58 → R130 → R330 → R85 → R22", note: "上午親子行程；請先確認團體集合與停車位置。" },
          { id: "L2", name: "兒童王國 → Rycom", distanceKm: 1.6, minutes: 4, roads: "R22 → R85", note: "短程轉場，午餐與購物一起處理。" },
          { id: "L3", name: "Rycom → 港川外人住宅街", distanceKm: 12.3, minutes: 21, roads: "R330 → R130 → R58", note: "下午茶停留時間要配合還車時限。" },
          { id: "L4", name: "港川 → OTS 還車", distanceKm: 8.1, minutes: 16, roads: "R153 → R38 → R330", note: "順路加油，確認車況、油量與遺失物。" },
          { id: "L5", name: "OTS → Monterey Naha", distanceKm: 9.0, minutes: 16, roads: "R331 → R249", note: "還車後改搭計程車／大眾運輸進那霸市區。" }
        ]
      }
    },
    {
      id: "day5",
      label: "Day 5",
      date: "2026-12-22",
      dateLabel: "12/22 Tue",
      title: "波上宮、iias／DMM 與返台",
      intro: "早上先完成波上宮，再回飯店取行李，搭輕軌到 iias 寄放行李；A/B 隊分組後，在傍晚前往那霸機場。",
      mode: "mixed",
      lodgingKey: "monterey",
      weather: { label: "那霸市區／機場", lat: 26.1958, lng: 127.6464 },
      schedule: [
        { time: "07:00", title: "早餐自理、行李寄放大廳", detail: "先把登機與托運物品分開，避免回飯店取行李時混亂。", tag: "集合", type: "source" },
        { time: "07:50-08:45", title: "計程車前往波上宮", detail: "來源行程列 07:50 出發、08:05-08:45 參拜。", tag: "計程車", type: "source" },
        { time: "09:00-09:20", title: "回飯店取行李，搭輕軌前往 iias", detail: "抵達 iias 後先寄放行李，再開始 A/B 分組。", tag: "Yui Rail", type: "source" },
        { time: "10:00-12:00", title: "A 隊 iias 購物／B 隊 DMM 水族館", detail: "兩隊以 iias 為共同基地；B 隊須確認 DMM 入館與回集合點時間。", tag: "A/B 分組", type: "source" },
        { time: "12:00-13:30", title: "iias 內用餐與採購", detail: "來源行程列 13:30 繼續採購；請預留取行李與前往機場時間。", tag: "購物", type: "source" },
        { time: "16:30-17:00", title: "前往那霸機場", detail: "來源行程列 17:00 抵達機場；實際出發時間依行李、交通與航廈動線調整。", tag: "機場", type: "conditional" },
        { time: "20:10-20:55", title: "BR0185 返台", detail: "航班編號與時間屬來源行程，出發前請以長榮訂位/航班公告重查。", tag: "航班待重查", type: "conditional" }
      ],
      route: {
        source: "OSRM 路線快照（2026-08-08）＋ Google Maps 導航連結；iias 段以 Yui Rail／步行為主",
        stops: [
          { id: "monterey", label: "Hotel Monterey La Soeur Naha", short: "出發", lat: 26.214116, lng: 127.687939, kind: "start" },
          { id: "naminoue", label: "波上宮", short: "參拜", lat: 26.217881, lng: 127.674769, kind: "stop" },
          { id: "monterey-return", label: "回飯店取行李", short: "取行李", lat: 26.214116, lng: 127.687939, kind: "stop" },
          { id: "iias", label: "iias Okinawa Toyosaki", short: "分組", lat: 26.159862, lng: 127.665036, kind: "stop" },
          { id: "airport", label: "那霸機場", short: "返台", lat: 26.194913, lng: 127.644790, kind: "end" }
        ],
        legs: [
          { id: "L1", name: "Monterey → 波上宮", distanceKm: 1.8, minutes: 4, roads: "浮島通り → R39 → R58", note: "來源指定計程車；不要把此段當成租車導航。" },
          { id: "L2", name: "波上宮 → 飯店", distanceKm: 2.0, minutes: 5, roads: "R43 → 松山通り → R39", note: "回飯店取行李後再進入 Yui Rail 行程。" },
          { id: "L3", name: "飯店 → iias", distanceKm: 9.3, minutes: 17, roads: "R221 → R331", note: "網站提供 Google Maps 連結作為道路參考；來源行程安排輕軌。" },
          { id: "L4", name: "iias → 那霸機場", distanceKm: 5.6, minutes: 14, roads: "R331 → R249", note: "最後一段請依行李、航廈與機場即時狀況安排。" }
        ]
      }
    }
  ]
};

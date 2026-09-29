window.TRIP_DATA = {
meta: {
title: "沖繩家族旅遊",
subtitle: "領隊版 PWA",
dates: "2026-12-17/2026-12-22",
timezone: "Asia/Tokyo",
sourceFile: "沖繩家族旅遊_領隊版_v16.pdf",
importedSource: "沖繩家族旅遊_領隊版_v16.pdf（2026-09-28 核對版）",
sourceSha256: "7d98924c60db129a6ba82b338c09fe21979486cd94f48160e9cfc53d948d7cfd",
importedAt: "2026-09-28T00:00:00+09:00",
note: "行程、餐廳與附錄以本頁為主；航班、景點營業時間請依官方最新資訊。"
},
map: {
provider: "Leaflet + OpenStreetMap",
tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
coordinateSource: "OpenStreetMap Nominatim／OSM 圖徵固定錨點",
coordinateCheckedAt: "2026-08-27",
coordinateNote: "座標已寫入資料；導航請以 Google Maps 現場為準。"
},
lodging: {
alaMahaina: {
name: "阿拉馬海納",
english: "Ala MAHAINA CONDO HOTEL",
address: "〒905-0205 沖繩縣國頭郡本部町山川 1421-1",
phone: "+81-980-51-7800",
map: { query: "Ala MAHAINA CONDO HOTEL, Okinawa Motobu Yamagawa 1421-1"},
website: "https://www.ala-mahaina.com/en/",
source: "v16 手冊",
note: "Day 1-2 住宿基地。"
},
lagent: {
name: "La'gent Hotel Okinawa Chatan（北谷柔婕閣）",
english: "La'gent Hotel Okinawa Chatan",
address: "〒904-0115 沖繩縣中頭郡北谷町美浜 25-3",
phone: "+81-98-926-0210",
email: "okinawa-chatan@lagent.jp",
map: { query: "La'gent Hotel Okinawa Chatan, Okinawa Chatan Mihama 25-3"},
website: "https://lagent.jp/chatan/contact",
source: "v16 手冊",
note: "Day 3 住宿；已訂 3 間房、8 位，現場支付 ¥43,596。"
},
ysInn: {
name: "Y's Inn 那覇小祿駅前",
english: "Y's INN NAHA OROKU EKIMAE",
address: "〒901-0155 沖繩縣那霸市金城 5-9-1",
phone: "+81-98-859-7029",
email: "info@ys-inn.jp",
map: { query: "ワイズイン那覇小禄駅前, 沖縄県那覇市金城5丁目9番地1"},
website: "https://ys-inn.jp/",
source: "v16 手冊",
note: "Day 0 A 隊住宿；Check-in 16:00–02:00、Check-out 10:00。停車 14 格機械式、1,000 円／晚，先到先得；晚到前先電話確認。"
},
anteroom: {
name: "HOTEL ANTEROOM NAHA",
english: "HOTEL ANTEROOM NAHA",
address: "〒900-0016 沖繩縣那霸市前島 3-27-11",
phone: "+81-98-860-5151",
email: "info@anteroom-naha.com",
map: { query: "HOTEL ANTEROOM NAHA, 沖縄県那覇市前島3丁目27番地11"},
website: "https://www.uds-hotels.com/anteroom/naha/",
source: "v16 手冊",
note: "Day 4-5 住宿；已訂 3 間房；Check-in 15:00、Check-out 11:00。停車 52 格、1,500 円／晚，先到先得。"
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
weather: { label: "那霸市區／小祿", lat: 26.1977684, lng: 127.6657587},
schedule: [
{ time: "18:20", title: "A 隊：樂桃 MM930 桃園起飛", detail: "12/17 樂桃 MM930，桃園 18:20 起飛。", tag: "A 隊／航班", type: "source"},
{ time: "20:50", title: "MM930 抵達那霸", detail: "A 隊抵達後完成入境、領行李；今晚不取租車。B 隊 BR112 於 12/18 06:55–09:15 抵達。", tag: "A 隊／抵達", type: "source"},
{ time: "抵達後", title: "入住 Y's Inn 那覇小祿駅前", detail: "那霸市金城 5-9-1；Yui Rail 小祿站步行約 3 分，或計程車約 5–10 分。地址另存日文／英文兩版備用。", tag: "A 隊／住宿", type: "source"}
],
route: {
source: "v16 路線：那霸機場 → 小祿住宿（計程車約 5–10 分，或 Yui Rail 2 站）",
routeType: "mixed",
navigationMode: "driving",
stops: [
{ id: "airport", label: "那霸機場國內線航廈", query: "那覇空港 国内線旅客ターミナル", lat: 26.2062776, lng: 127.6508031},
{ id: "ys-inn", label: "Y's Inn 那覇小祿駅前", query: "Y's INN Naha Oroku Ekimae, 沖縄県那覇市金城5-9-1", lat: 26.1977684, lng: 127.6657587}
],
legs: [
{ id: "L1", name: "那霸機場 → Y's Inn", from: "那霸機場", to: "Y's Inn 那覇小祿駅前", stopIds: ["airport", "ys-inn"], distanceKm: null, minutes: "5-10", roads: "計程車／Yui Rail＋步行", openLabel: "開啟 Google Maps 路線參考", note: "PDF 提供交通方式；今晚尚未取租車，地圖線為方向示意。"}
]
},
},
{
id: "day1",
label: "Day 1",
date: "2026-12-18",
dateLabel: "12/18 Fri",
title: "抵達、取車、北上入住",
intro: "全程最長的一天：入境、取車後北上，重點是日落前抵達北部。許田後直達阿拉馬海納。",
mode: "driving",
lodgingKey: "alaMahaina",
weather: { label: "本部町（住宿基地）", lat: 26.6826085, lng: 127.8834902},
schedule: [
{ time: "06:55-09:15", title: "B 隊：BR112 抵達那霸", detail: "長榮 BR112：桃園 T2 起飛 → 那霸 T1 抵達。", tag: "航班", type: "source"},
{ time: "09:00", title: "A 隊退房", detail: "09:15 自小祿駅搭單軌（2 站約 5 分／¥250）往那霸機場。", tag: "A 隊", type: "source"},
{ time: "09:15-10:20", title: "入境、全隊會合", detail: "國際線到達大廳會合；保留排隊緩衝。", tag: "集合", type: "source"},
{ time: "10:20-11:40", title: "接駁前往 OTS 豐崎租車", detail: "接駁約 15–20 分；兩台車分別辦手續（OTS1504557／OTS1501685），駕駛出示護照＋台灣駕照正本＋日文譯本；全程錄影車況。文件放同一文件袋，QR 碼截圖各自存好。", tag: "租車", type: "source"},
{ time: "12:00-13:30", title: "瀨長島午餐", detail: "SEE THE SEA（免預約）＞ A Happy Pancake（不接受訂位，現場排隊）＞ POSILLIPO。", tag: "午餐", type: "conditional"},
{ time: "13:40-14:10", title: "業務超市小祿店（可跳過）", detail: "09:30–20:00；行程緊可直接跳過。若 13:30 離開瀨長島已 delay 30 分鐘以上，直接跳過，保證 18:30 前到飯店。", tag: "彈性停靠", type: "conditional"},
{ time: "15:10-15:50", title: "萬座毛（優先保留）", detail: "11–2 月 08:00–19:00；現場酌收 100 日圓。", tag: "主要景點", type: "source"},
{ time: "16:30-17:30", title: "許田休息站", detail: "08:30–19:00 全年無休；買土產、水果、美麗海水族館優惠票。", tag: "休息／採買", type: "source"},
{ time: "17:55-18:00", title: "抵達阿拉馬海納，check in", detail: "1421-1 Yamagawa, Motobu；許田直達約 25 分。", tag: "住宿", type: "source"},
{ time: "19:30-21:00", title: "晚餐（若許田未用餐）", detail: "海邦丸（晚餐不接受訂位，現場排隊請提早到；素食靠客製，點餐時說明需求）為主；喜菜ハウス瀬底為備案（先確認營業時間）。", tag: "晚餐", type: "conditional"}
],
route: {
source: "v16 路線：OTS 豐崎 → 瀨長島 → 業務超市 → 萬座毛 → 許田 → 阿拉馬海納",
stops: [
{ id: "ots", label: "OTS 豐崎", query: "OTSレンタカー 豊崎営業所 沖縄", lat: 26.1588693, lng: 127.6544462},
{ id: "umikaji", label: "瀨長島ウミカジテラス", query: "瀬長島ウミカジテラス 沖縄", lat: 26.1763883, lng: 127.6404055},
{ id: "gyomu", label: "業務超市小祿店", query: "業務スーパー 小禄店 沖縄県那覇市具志875", lat: 26.179921, lng: 127.6540684},
{ id: "manzamo", label: "萬座毛", query: "万座毛 沖縄", lat: 26.5050087, lng: 127.8502564},
{ id: "kyoda", label: "許田休息站", query: "道の駅許田 やんばる物産センター 沖縄", lat: 26.5521328, lng: 127.9695154},
{ id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902}
],
legs: [
{ id: "L1", name: "OTS 豐崎 → 瀨長島", stopIds: ["ots", "umikaji"], distanceKm: null, minutes: "7", roads: "縣道249 → 國道331 → 瀨長島海中道路", note: "取車後前往瀨長島。"},
{ id: "L2", name: "瀨長島 → 業務超市小祿店", stopIds: ["umikaji", "gyomu"], distanceKm: null, minutes: "約 10", roads: "同區彈性繞行", note: "已 delay 45 分鐘以上就跳過此站。"},
{ id: "L3", name: "業務超市小祿店 → 萬座毛", stopIds: ["gyomu", "manzamo"], distanceKm: null, minutes: "61", roads: "國道331 → E58 沖繩自動車道 → 國道58", note: "萬座毛優先保留。"},
{ id: "L4", name: "萬座毛 → 許田休息站", stopIds: ["manzamo", "kyoda"], distanceKm: null, minutes: "38", roads: "國道58", note: "買土產、水果與水族館優惠票。"},
{ id: "L5", name: "許田 → 阿拉馬海納", stopIds: ["kyoda", "ala"], distanceKm: null, minutes: "25", roads: "國道58 → 449 → 縣道114", note: "許田後直達；以 17:55–18:00 入住為目標。"}
]
},
},
{
id: "day2",
label: "Day 2",
date: "2026-12-19",
dateLabel: "12/19 Sat",
title: "美麗海水族館＋古宇利島",
intro: "上午走完水族館主線，下午去古宇利島，避免當日折返。總計 47.9 公里、約 1 小時 23 分。",
mode: "driving",
lodgingKey: "alaMahaina",
weather: { label: "本部町／古宇利島", lat: 26.6826085, lng: 127.8834902},
schedule: [
{ time: "07:30", title: "飯店早餐", detail: "確認票券、兒童用品與雨具。", tag: "集合", type: "source"},
{ time: "08:15", title: "抵達停車場、整理嬰兒車", detail: "從 4F 入口準備第一場入館。", tag: "水族館", type: "source"},
{ time: "08:30", title: "美麗海水族館開館入場", detail: "通常期 08:30–18:30；4F→3F→2F 走主線。", tag: "水族館", type: "source"},
{ time: "08:30-09:20", title: "Ocean Blue 水槽旁付費席（S）", detail: "現場先到先得；S 席每 50 分鐘 1,000 日圓，派 2 位代表抽取。", tag: "S／先到先得", type: "conditional"},
{ time: "09:30", title: "黑潮之海給餌解說（S）", detail: "官方每日 09:30；可看鬼蝠魟與鯨鯊。", tag: "S／節目", type: "source"},
{ time: "10:00", title: "海豚餵食體驗（S）", detail: "現場先到先得，每組 1,000 日圓；其他場次 11:00／13:30／15:30。", tag: "S／名額有限", type: "conditional"},
{ time: "10:30-10:45", title: "Oki-chan 海豚秀（S）", detail: "約 10–15 分鐘；其他場次 11:30／13:00／15:00／17:00。", tag: "S／節目", type: "source"},
{ time: "11:00-11:20", title: "海龜餵食（A）", detail: "11:00–12:00 或 14:00–15:00，現場先到先得。", tag: "A／先到先得", type: "conditional"},
{ time: "11:20-11:50", title: "海龜館、海牛館", detail: "依現場動線完成親子主線。", tag: "水族館", type: "source"},
{ time: "11:50-12:20", title: "核心展區快逛", detail: "保留給孩子與拍照；不安排館內完整午餐。", tag: "主線", type: "source"},
{ time: "12:20-12:35", title: "黑潮之海最後巡覽", detail: "完成最後拍照與出口前確認。", tag: "水族館", type: "source"},
{ time: "12:35-13:00", title: "離館緩衝，13:00 準時出發", detail: "不二次入館；午餐到古宇利島處理。", tag: "硬時間點", type: "source"},
{ time: "13:00-13:40", title: "開車前往古宇利島", detail: "車程約 30–40 分。", tag: "自駕", type: "source"},
{ time: "14:00-15:30", title: "A/B 分組活動＋古宇利島午餐", detail: "L LOTA 首選（務必訂位 0980-51-5031，14:00 抵達距 L.O. 僅 30 分）；Earthful Burger、アイタル食堂備援。", tag: "A/B 分組", type: "conditional"},
{ time: "15:30-16:00", title: "合體下午茶", detail: "モリンガの木，或依現場狀況彈性安排。", tag: "彈性", type: "conditional"},
{ time: "16:30", title: "返回飯店、休息 30 分鐘", detail: "回阿拉馬海納休息，再準備晚餐。", tag: "住宿", type: "source"},
{ time: "18:00", title: "晚餐「沖縄料理と島どうふ TO-PU」", detail: "主方案；もとぶ美ら海店涮涮鍋為備援。預約指定昆布／蔬菜鍋底、獨立鍋具，不用魚介高湯；TO-PU 僅收現金。", tag: "晚餐", type: "conditional"}
],
route: {
source: "v16 路線：阿拉馬海納 → 美麗海 → 古宇利島 → 阿拉馬海納（總計 47.9 公里／約 1 小時 23 分）",
stops: [
{ id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902},
{ id: "churaumi", label: "海洋博公園／美麗海水族館", query: "沖縄美ら海水族館", lat: 26.6943689, lng: 127.8780380},
{ id: "kouri", label: "古宇利島", query: "古宇利島 沖縄", lat: 26.7042510, lng: 128.0180847},
{ id: "ala-return", label: "回本部住宿", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902}
],
legs: [
{ id: "L1", name: "阿拉馬海納 → 海洋博公園", stopIds: ["ala", "churaumi"], distanceKm: null, minutes: null, roads: "縣道114號", note: "早上短程前往水族館。"},
{ id: "L2", name: "美麗海 → 古宇利島", stopIds: ["churaumi", "kouri"], distanceKm: null, minutes: "30-40", roads: "縣道114 → 505 → 248 → 110 → 247號", note: "車程 30–40 分。"},
{ id: "L3", name: "古宇利島 → 回本部", stopIds: ["kouri", "ala-return"], distanceKm: null, minutes: null, roads: "返程原路回本部", note: "返程原路回本部。"}
]
}
},
{
id: "day3",
label: "Day 3",
date: "2026-12-20",
dateLabel: "12/20 Sun",
title: "A/B 分組體驗、名護會合、美國村",
intro: "A 隊＝Day 0 前鋒隊 → JUNGLIA（含午餐）；B 隊＝Day 1 抵達隊 → Neo Park。15:00 在 AEON Nago 會合。",
mode: "driving",
lodgingKey: "lagent",
weather: { label: "北谷町（住宿基地）", lat: 26.3210666, lng: 127.7552524},
schedule: [
{ time: "07:00", title: "早餐、行李放大廳", detail: "確認兩組聯絡方式。A 隊＝Day 0 前鋒隊 → JUNGLIA；B 隊＝Day 1 抵達隊 → Neo Park。", tag: "分隊準備", type: "source"},
{ time: "08:00-08:40", title: "海洋博公園短散步", detail: "戶外開放空間，不影響 09:30／10:00 入場。", tag: "彈性", type: "source"},
{ time: "08:40", title: "出發前往兩大園區", detail: "A、B 兩組分別前往 JUNGLIA 與 Neo Park。", tag: "A/B 分隊", type: "source"},
{ time: "09:30-12:00", title: "B 隊：Neo Park", detail: "09:30–17:30（入園截止 17:00）；大人 ¥1,600／小孩 ¥800／3 歲以下免費。輕便鐵道首班 10:30，建議先逛步道再搭車。", tag: "B 隊", type: "source"},
{ time: "10:00-14:30", title: "A 隊：JUNGLIA（含午餐）", detail: "大人 ¥6,930／小孩 ¥4,950／3 歲以下免費，建議官網事先網購。開閉園與票種請依官方行事曆 junglia.jp/calendar；12/20 時段以 10 月底公告的官方版本為準。園內約 4.5 小時，先排好必玩 2–3 項。", tag: "A 隊", type: "conditional"},
{ time: "12:00", title: "B 隊出發名護市區", detail: "B 隊離開 Neo Park 前往名護市區。", tag: "B 隊", type: "source"},
{ time: "12:30", title: "B 隊名護市區午餐", detail: "アイタル食堂首選；ナカラマサラ、農家の台所 楽家備援。", tag: "B 隊", type: "conditional"},
{ time: "13:30", title: "B 隊逛「名護 AEON」", detail: "在 AEON Nago 等待 A 隊。", tag: "B 隊／會合點", type: "source"},
{ time: "14:30", title: "A 隊出發名護市區", detail: "JUNGLIA 結束後前往名護市區。", tag: "A 隊", type: "source"},
{ time: "15:00", title: "A、B 隊 AEON Nago 會合", detail: "逾時以電話／訊息確認，直接前往美國村。", tag: "共同集合", type: "source"},
{ time: "15:15-15:50", title: "名護點心站（彈性）", detail: "暖暮拉麵、Blue Seal，或 Starbucks 名護 21 世紀之森；時間不足可跳過。", tag: "彈性", type: "conditional"},
{ time: "15:50", title: "前往美國村", detail: "車程約 50 分鐘。會合後依點心站、車流與日落時間決定是否停留。", tag: "自駕", type: "source"},
{ time: "17:00", title: "美國村 American Village 逛街", detail: "依現場人流與停車狀況調整。", tag: "景點", type: "source"},
{ time: "17:30", title: "海邊日落＋12 月聖誕點燈", detail: "點燈期間 11 月底後查北谷町／Depot Island 公告；Depot Island 全年有燈飾。北谷每週六 20:00 花火，Day3（週日）看不到。", tag: "景點", type: "source"},
{ time: "18:30", title: "美國村晚餐＋自由逛街", detail: "Bollywood Dreams 首選（建議官網提前訂位）；Esparza's、The Calif Kitchen 備援。", tag: "晚餐", type: "conditional"},
{ time: "20:30", title: "入住 La'gent Hotel Okinawa Chatan", detail: "已訂 3 間房、8 位，現場支付。", tag: "住宿", type: "source"}
],
route: {
source: "v16 路線：本部 → 名護 → 美國村 → La'gent（總計 76.5 公里／約 1 小時 42 分）",
hideOverviewNavigation: true,
stops: [
{ id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902},
{ id: "neopark", label: "Neo Park", query: "ネオパークオキナワ", lat: 26.6117963, lng: 127.9910131},
{ id: "junglia", label: "JUNGLIA", query: "JUNGLIA OKINAWA", lat: 26.6415215, lng: 127.9704904},
{ id: "aeon-nago", label: "AEON Nago", query: "イオン名護店 沖縄県名護市字名護見取川原4472", lat: 26.6099151, lng: 127.9846748},
{ id: "nago-snack", label: "名護點心站：暖暮", query: "ラーメン 暖暮 名護店 沖縄県名護市東江5-10-36", lat: 26.5823768, lng: 127.9846780},
{ id: "american-village", label: "美國村", query: "American Village Okinawa", lat: 26.3165214, lng: 127.7573637},
{ id: "lagent", label: "La'gent Hotel Okinawa Chatan", query: "La'gent Hotel Okinawa Chatan", lat: 26.3210666, lng: 127.7552524}
],
legs: [
{ id: "A1", name: "A 組：阿拉馬海納 → JUNGLIA", from: "阿拉馬海納", to: "JUNGLIA", stopIds: ["ala", "junglia"], distanceKm: null, minutes: null, roads: "449 → 58 → 縣道84號", note: "A 組分支。"},
{ id: "B1", name: "B 組：阿拉馬海納 → Neo Park", from: "阿拉馬海納", to: "Neo Park", stopIds: ["ala", "neopark"], distanceKm: null, minutes: null, roads: "縣道114 → 449號", note: "B 組分支。"},
{ id: "A2", name: "A 組：JUNGLIA → AEON Nago", from: "JUNGLIA", to: "AEON Nago", stopIds: ["junglia", "aeon-nago"], distanceKm: null, minutes: null, roads: "依 PDF 路線摘要前往名護市區", note: "A 組 14:30 出發，15:00 會合。"},
{ id: "B2", name: "B 組：Neo Park → AEON Nago", from: "Neo Park", to: "AEON Nago", stopIds: ["neopark", "aeon-nago"], distanceKm: null, minutes: null, roads: "縣道110 → 58 → 449號", note: "B 組 12:00 出發、13:30 逛名護 AEON。"},
{ id: "C1", name: "會合：AEON Nago → 名護點心站", from: "AEON Nago", to: "名護點心站", stopIds: ["aeon-nago", "nago-snack"], distanceKm: null, minutes: null, roads: "國道58一帶短程彈性繞行", note: "時間不足可跳過。"},
{ id: "C2", name: "名護點心站 → 美國村", from: "名護點心站", to: "美國村", stopIds: ["nago-snack", "american-village"], distanceKm: null, minutes: "50", roads: "58 → E58 沖繩自動車道 → 縣道85／國道23號", note: "預留夕陽與點燈緩衝。"},
{ id: "C3", name: "美國村 → La'gent Hotel", from: "美國村", to: "La'gent Hotel Okinawa Chatan", stopIds: ["american-village", "lagent"], distanceKm: null, minutes: null, roads: "北谷市區短程", note: "20:30 入住。"}
]
},
},
{
id: "day4",
label: "Day 4",
date: "2026-12-21",
dateLabel: "12/21 Mon",
title: "兒童王國、Rycom、港川、波上宮、國際通",
intro: "北谷往南移動：兒童王國 → Rycom → 港川 → 波上宮參拜 → 入住 HOTEL ANTEROOM。車留飯店，晚上步行去國際通。",
mode: "mixed",
transportLabel: "白天自駕；晚間步行",
lodgingKey: "anteroom",
weather: { label: "那霸市區／前島", lat: 26.2255762, lng: 127.6792215},
schedule: [
{ time: "07:30", title: "早餐、La'gent 退房／行李上車", detail: "確認退房與行李寄放規則。", tag: "集合／退房", type: "source"},
{ time: "09:30-11:30", title: "沖繩兒童王國", detail: "平日 09:30–17:30（16:30 停止入園）；12/21（一）正常開園。大人 ¥1,000／高校生 ¥500／15 歲以下免費。", tag: "親子", type: "source"},
{ time: "12:00", title: "永旺夢樂城（AEON Rycom）＋午餐", detail: "Core Curry（館內 3F）最務實；專門店 10:00–22:00。", tag: "購物", type: "conditional"},
{ time: "14:30", title: "結束購物", detail: "依購物與午餐狀況調整。", tag: "轉場", type: "source"},
{ time: "15:00", title: "港川外人住宅：oHacorté", detail: "11:30–19:00，現為不定休；建議外帶，不堂食久候。", tag: "下午茶", type: "conditional"},
{ time: "15:40-16:00", title: "出發前島，順道波上宮", detail: "港川 → 波上宮約 20 分，順路不繞路。", tag: "自駕", type: "conditional"},
{ time: "16:00-16:20", title: "波上宮參拜＋買御守／御朱印", detail: "境內 24 小時免費開放；授與所約 09:00–16:30；免費停車約 20 格。把握今天參拜＋買御守；Day5 清晨授與所未開，只能拍照。", tag: "參拜／御守", type: "source"},
{ time: "16:20-16:35", title: "前往 HOTEL ANTEROOM NAHA", detail: "波上宮 → 前島約 10–15 分。", tag: "自駕", type: "conditional"},
{ time: "16:35", title: "抵達 HOTEL ANTEROOM NAHA，check in", detail: "已訂 3 間房，Check-in 15:00 起。停車 52 格、1,500 円／晚，先到先得；先處理行李再確認車位。", tag: "住宿／停車", type: "source"},
{ time: "16:35-18:00", title: "飯店休息、整理隔日行李", detail: "車留飯店；Day 5 早上到 OTS 還車。", tag: "休息", type: "source"},
{ time: "18:00", title: "步行前往國際通", detail: "前島步行至國際通約 15–20 分；今晚不開車。", tag: "步行", type: "source"},
{ time: "18:40", title: "晚餐「Tamatebako」", detail: "純素、★4.7；小店一人經營，不接受訂位，建議開店 17:00 就到現場候位。", tag: "晚餐", type: "conditional"},
{ time: "20:00", title: "繼續逛國際通", detail: "依全家體力與回程交通調整。", tag: "逛街", type: "source"},
{ time: "21:00", title: "步行回 HOTEL ANTEROOM 休息", detail: "今天不還車；整理 Day 5 07:30 退房與還車文件。回程備案：美榮橋駅步行約 12 分（末班車 23:30），或叫計程車（約 ¥1,000、5 分）。", tag: "住宿", type: "source"}
],
route: {
source: "v16 路線：北谷 → 兒童王國 → Rycom → 港川 → 波上宮 → HOTEL ANTEROOM；國際通往返步行，今晚不還車",
routeType: "mixed",
navigationMode: "driving",
overviewStops: ["lagent", "childrens-kingdom", "rycom", "minatogawa", "naminoue", "anteroom"],
overviewNavigationLabel: "開啟今日自駕路線",
stops: [
{ id: "lagent", label: "La'gent Hotel Chatan", query: "La'gent Hotel Okinawa Chatan", lat: 26.3210666, lng: 127.7552524},
{ id: "childrens-kingdom", label: "沖繩兒童王國", query: "沖縄こどもの国", lat: 26.3276961, lng: 127.8035022},
{ id: "rycom", label: "AEON Rycom", query: "イオンモール沖縄ライカム", lat: 26.3142262, lng: 127.7959208},
{ id: "minatogawa", label: "港川 oHacorté", query: "oHacorte 沖縄県浦添市港川2丁目17-1", lat: 26.2624960, lng: 127.7153399},
{ id: "naminoue", label: "波上宮", query: "波上宮 沖縄", lat: 26.2205598, lng: 127.6711359},
{ id: "anteroom", label: "HOTEL ANTEROOM NAHA", query: "HOTEL ANTEROOM NAHA, 沖縄県那覇市前島3丁目27番地11", lat: 26.2255762, lng: 127.6792215},
{ id: "kokusai", label: "國際通", query: "国際通り 那覇市", lat: 26.2161948, lng: 127.6879299}
],
legs: [
{ id: "L1", name: "La'gent → 兒童王國", from: "La'gent Hotel Chatan", to: "沖繩兒童王國", stopIds: ["lagent", "childrens-kingdom"], distanceKm: null, minutes: null, roads: "58 → 330 → 85 → 22號", note: "出發時以導航確認。"},
{ id: "L2", name: "兒童王國 → Rycom", from: "沖繩兒童王國", to: "AEON Rycom", stopIds: ["childrens-kingdom", "rycom"], distanceKm: null, minutes: null, roads: "22 → 85號", note: "短程轉場，午餐與購物一起處理。"},
{ id: "L3", name: "Rycom → 港川", from: "AEON Rycom", to: "港川 oHacorté", stopIds: ["rycom", "minatogawa"], distanceKm: null, minutes: null, roads: "330 → 58號", note: "配合 15:40 出發前島。"},
{ id: "L4", name: "港川 → 波上宮", from: "港川 oHacorté", to: "波上宮", stopIds: ["minatogawa", "naminoue"], distanceKm: null, minutes: "約 20", roads: "順路，不算繞路", note: "車程約 20 分；授與所約 09:00–16:30。"},
{ id: "L5", name: "波上宮 → HOTEL ANTEROOM", from: "波上宮", to: "HOTEL ANTEROOM NAHA", stopIds: ["naminoue", "anteroom"], distanceKm: null, minutes: "10-15", roads: "那霸市區道路", note: "先辦入住放行李；停車 52 格、1,500 円／晚。"},
{ id: "L6", name: "HOTEL ANTEROOM → 國際通", from: "HOTEL ANTEROOM NAHA", to: "國際通", stopIds: ["anteroom", "kokusai"], distanceKm: null, minutes: "15-20", roads: "步行；非自駕", navigation: false, mapLine: false, mode: "walking", openLabel: "步行段（不開啟導航）", note: "車留飯店；往美栄橋／國際通方向步行。"}
]
},
},
{
id: "day5",
label: "Day 5",
date: "2026-12-22",
dateLabel: "12/22 Tue",
title: "還車、iias／DMM、機場",
intro: "退房後直達 OTS 豐崎還車（波上宮已在 Day4 參拜過，不繞路）；還車後步行至 iias／DMM，下午依航班分流。",
mode: "mixed",
transportLabel: "上午自駕至還車；還車後步行／計程車",
lodgingKey: "anteroom",
weather: { label: "那霸市區／前島／機場", lat: 26.2255762, lng: 127.6792215},
schedule: [
{ time: "07:00", title: "早餐自理", detail: "整理行李與退房文件。", tag: "集合", type: "source"},
{ time: "07:30", title: "退房、行李上車，飯店出發", detail: "行李直接上車；不繞波上宮，直開 OTS。", tag: "退房", type: "source"},
{ time: "07:30-08:00", title: "自駕前往 OTS 豐崎", detail: "車程約 30 分；08:00 OTS 一開門就報到。", tag: "自駕", type: "conditional"},
{ time: "08:00-09:00", title: "OTS 豐崎還車", detail: "加油、驗車、還車；兩台車皆須辦理（OTS1504557／OTS1501685）。營業 08:00–19:00。", tag: "還車", type: "source"},
{ time: "09:00-09:20", title: "步行前往 iias、寄放行李", detail: "OTS 與 iias 相鄰，步行約 1–3 分。", tag: "步行", type: "source"},
{ time: "09:30-12:30", title: "A 隊 iias 購物中心／B 隊 DMM 水族館", detail: "iias 店舖 10:00–21:00；DMM 9:00–19:00，位於 iias 內。", tag: "A/B 分組", type: "source"},
{ time: "12:30", title: "午餐（iias 內餐廳）", detail: "Crazy Spice 首選；Tacorice Cafe きじむなぁ、Eggs'n Things 備案；還車後不再移車。", tag: "午餐", type: "conditional"},
{ time: "13:30", title: "iias 採購、自由逛、西松屋", detail: "之後 A、B 隊分開前往機場。", tag: "A/B 分流", type: "source"},
{ time: "14:30", title: "前往那霸機場", detail: "改叫一般計程車；各家庭分開叫車（3／2／3 人），現場排班或用 APP（GO／DiDi／Uber）。", tag: "A 隊／機場", type: "conditional"},
{ time: "14:50", title: "抵達那霸機場", detail: "距 16:50 起飛約 2 小時緩衝。", tag: "A 隊", type: "source"},
{ time: "16:50-17:35", title: "MM929 回程航班", detail: "樂桃 MM929：那霸 16:50 起飛 → 桃園 17:35 抵達。A 隊回程比 B 隊早約 3.5 小時；A 隊 13:00 後分流、14:30 往機場。", tag: "A 隊／航班", type: "source"},
{ time: "16:00-16:30", title: "iias 提前晚餐（建議）", detail: "先在 iias 吃完晚餐再去機場。", tag: "B 組", type: "conditional"},
{ time: "16:30", title: "前往那霸機場", detail: "比照 A 隊分開叫一般計程車。", tag: "B 隊／機場", type: "conditional"},
{ time: "17:00", title: "抵達那霸機場", detail: "距 20:10 起飛約 3 小時，可在機場用晚餐、免稅購物。", tag: "B 隊", type: "source"},
{ time: "20:10-20:55", title: "BR185 回程航班", detail: "長榮 BR185：那霸 T1 20:10 起飛 → 桃園 T2 20:55 抵達。B 隊 16:30 出發、17:00 到機場。", tag: "B 隊／航班", type: "source"}
],
route: {
source: "v16：HOTEL ANTEROOM → OTS → iias（不繞波上宮）；還車後 OTS→iias 步行",
routeType: "mixed",
navigationMode: "driving",
overviewStops: ["anteroom", "ots-return", "iias"],
overviewNavigationLabel: "開啟上午自駕路線",
stops: [
{ id: "anteroom", label: "HOTEL ANTEROOM NAHA", query: "HOTEL ANTEROOM NAHA, 沖縄県那覇市前島3丁目27番地11", lat: 26.2255762, lng: 127.6792215},
{ id: "ots-return", label: "OTS 豐崎還車", query: "OTSレンタカー 豊崎営業所 沖縄", lat: 26.1588693, lng: 127.6544462},
{ id: "iias", label: "iias／DMM 豐崎", query: "iias 沖縄豊崎", lat: 26.1574666, lng: 127.6505955},
{ id: "airport", label: "那霸機場國內線航廈", query: "那覇空港 国内線旅客ターミナル", lat: 26.2062776, lng: 127.6508031}
],
legs: [
{ id: "L1", name: "HOTEL ANTEROOM → OTS 豐崎", from: "HOTEL ANTEROOM NAHA", to: "OTS 豐崎還車", stopIds: ["anteroom", "ots-return"], distanceKm: null, minutes: "約 30", roads: "依當日導航；市區道路", openLabel: "開啟 Google Maps 路線參考", note: "07:30 退房出發，不繞波上宮；加油、驗車、還車。"},
{ id: "L2", name: "OTS → iias／DMM", from: "OTS 豐崎還車", to: "iias／DMM 豐崎", stopIds: ["ots-return", "iias"], distanceKm: null, minutes: "1-3", roads: "步行；OTS 與 iias 相鄰", navigation: false, mapLine: false, mode: "walking", openLabel: "步行段（不開啟導航）", note: "還車後步行；先寄放行李再進商場。"},
{ id: "L3", name: "iias／DMM → 那霸機場", from: "iias／DMM 豐崎", to: "那霸機場", stopIds: ["iias", "airport"], distanceKm: null, minutes: null, roads: "計程車／公共交通；依 A/B 航班分流", navigation: true, mapLine: true, mode: "transit", openLabel: "開啟 Google Maps 路線參考", note: "依 A/B 航班搭計程車或公共交通；虛線僅表示移動方向。"}
]
},
}
]
};

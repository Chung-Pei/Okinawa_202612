window.TRIP_DATA = {
meta: {
title: "沖繩家族旅遊",
subtitle: "領隊版 PWA",
dates: "2026-12-17/2026-12-22",
timezone: "Asia/Tokyo",
sourceFile: "沖繩家族旅遊_領隊版_v16.pdf",
importedSource: "沖繩家族旅遊_領隊版_v16.pdf（2026-09-28 核對版）＋素食餐廳調查報告 Day1-5.md（2026/9）",
sourceSha256: "7d98924c60db129a6ba82b338c09fe21979486cd94f48160e9cfc53d948d7cfd",
importedAt: "2026-09-28T00:00:00+09:00",
note: "v16（26 頁）：行程、營業時間與訂位狀態以 v16 PDF 為主；Day1–5 餐廳排名、地址、電話、營業時間與訂位提醒由 Day1-5.md 素食調查報告整合。航班、餐廳預約、JUNGLIA 時段與景點公告仍須於出發前重查。"
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
map: { query: "Ala MAHAINA CONDO HOTEL, Okinawa Motobu Yamagawa 1421-1"},
website: "https://www.ala-mahaina.com/en/",
source: "PDF v16 Day 1-2；官方網站查核 2026-08-27",
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
source: "PDF v16 Day 3；官方聯絡頁查核 2026-08-27",
note: "Day 3 住宿基地；已訂房確認、3 間房、8 位，現場支付 ¥43,596。"
},
ysInn: {
name: "Y's Inn 那覇小祿駅前",
english: "Y's INN NAHA OROKU EKIMAE",
address: "〒901-0155 沖繩縣那霸市金城 5-9-1",
phone: "+81-98-859-7029",
email: "info@ys-inn.jp",
map: { query: "ワイズイン那覇小禄駅前, 沖縄県那覇市金城5丁目9番地1"},
website: "https://ys-inn.jp/",
source: "PDF v16 Day 0；Y's Inn 官方網站查核 2026-08-27",
note: "Day 0 A 隊住宿；Check-in 16:00-02:00、Check-out 10:00。停車僅 14 格機械式、1,000 円／晚、先到先得不可預約；晚到前先電話確認。"
},
anteroom: {
name: "HOTEL ANTEROOM NAHA",
english: "HOTEL ANTEROOM NAHA",
address: "〒900-0016 沖繩縣那霸市前島 3-27-11",
phone: "+81-98-860-5151",
email: "info@anteroom-naha.com",
map: { query: "HOTEL ANTEROOM NAHA, 沖縄県那覇市前島3丁目27番地11"},
website: "https://www.uds-hotels.com/anteroom/naha/",
source: "PDF v16 Day 4-5；官方網站查核 2026-08-27",
note: "Day 4-5 住宿；已確認 3 間房；Check-in 15:00、Check-out 11:00。停車 52 格、先到先得、1,500 円／晚。"
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
{ time: "18:20", title: "A 隊：樂桃 MM930 桃園起飛", detail: "12/17 桃園起飛；航班與座位以航空公司／訂位紀錄最終確認。", tag: "A 隊／航班待重查", type: "conditional"},
{ time: "20:50", title: "MM930 抵達那霸", detail: "A 隊抵達後完成入境、領行李；今晚不取租車。", tag: "A 隊／抵達", type: "source"},
{ time: "抵達後", title: "入住 Y's Inn 那覇小祿駅前", detail: "地址：那霸市金城 5-9-1；可搭 Yui Rail 約 2 站、4-5 分鐘至小祿再步行約 3 分鐘，或搭計程車約 5-10 分鐘。", tag: "A 隊／住宿", type: "source"}
],
route: {
source: "來源 PDF v16：那霸機場 → 小祿住宿；開車／計程車約 5-10 分鐘，亦可搭 Yui Rail 約 2 站",
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
notes: [
{ title: "A 隊晚餐（21:20 後）", detail: "A 隊約 21:20–21:30 才到小祿，這時間附近餐廳大多已打烊。方案一：那霸機場國內線航廈 2F 出發大廳，趁還沒搭單軌前先買便當／飯糰；方案二：抵達小祿駅後，駅前有 Lawson／FamilyMart 等超商，直接解決。看當下體力和行李多寡現場選。"},
{ title: "晚到入住流程", detail: "先完成入境與領行李，再前往小祿；把 Y's Inn 地址存成日文／英文兩種版本，晚到前先電話確認。"},
{ title: "A／B 航班分開確認", detail: "B 隊 BR112 於 12/18 06:55-09:15 抵達；A 隊回程比 B 隊早約 3.5 小時，Day 5 必須分開抓時間。"},
{ title: "隔日取車文件", detail: "將護照、駕照、日文譯本、租車訂單集中放在同一個文件袋。兩台車需分別辦理取車／還車手續（OTS1504557／OTS1501685），出發前請確認由哪兩位駕駛，QR 碼截圖各自存好手機。"}
]
},
{
id: "day1",
label: "Day 1",
date: "2026-12-18",
dateLabel: "12/18 Fri",
title: "抵達、取車、北上入住",
intro: "全程距離最長的一天，重點是保障入境、取車與日落前抵達北部。Starbucks 名護 21 世紀之森已刪除（12 月 17:38 天黑），許田後直達阿拉馬海納，改移至 Day 3 下午名護點心站的彈性選項。",
mode: "driving",
lodgingKey: "alaMahaina",
weather: { label: "本部町（住宿基地）", lat: 26.6826085, lng: 127.8834902},
schedule: [
{ time: "06:55-09:15", title: "B 隊：BR112 抵達那霸", detail: "桃園 T2 起飛 → 那霸 T1 抵達；A 隊已於 Day 0 晚間先抵達。", tag: "航班待重查", type: "conditional"},
{ time: "09:00", title: "A 隊退房", detail: "行李隨身，09:15 自小祿駅搭單軌（2 站約 5 分／¥250）前往那霸機場，09:30 前抵達國際線到達大廳。", tag: "A 隊", type: "source"},
{ time: "09:15-10:20", title: "入境、全隊會合", detail: "B 隊入境，A 隊由小祿抵達，09:30 前在國際線到達大廳會合；保留排隊緩衝。", tag: "集合", type: "source"},
{ time: "10:20-11:40", title: "接駁前往 OTS 豐崎租車", detail: "接駁車程約 15-20 分鐘；11:40 完成兩台車租車手續（OTS1504557／OTS1501685），兩位駕駛各自出示護照＋台灣駕照正本＋日文譯本；全程錄影車況內外。", tag: "租車", type: "source"},
{ time: "12:00-13:30", title: "瀨長島午餐", detail: "見今日餐廳推薦：SEE THE SEA（免預約）＞ A Happy Pancake（需兩週前預約）＞ POSILLIPO。", tag: "午餐／PDF v16 餐廳排序", type: "conditional"},
{ time: "13:40-14:10", title: "業務超市小祿店（可跳過）", detail: "營業 09:30-20:00；行程緊湊可直接跳過，不影響後段。", tag: "彈性停靠", type: "conditional"},
{ time: "15:10-15:50", title: "萬座毛（優先保留）", detail: "11-2 月開放 08:00-19:00，現場酌收 100 日圓；今日主要景點。", tag: "主要景點", type: "source"},
{ time: "16:30-17:30", title: "許田休息站", detail: "營業 08:30-19:00、全年無休；買土產、水果、美麗海水族館優惠票（官方稱「割引チケット／とくとく5パス」）；官方偶有設備維護臨時休業，出發前看一眼官網新著情報。", tag: "休息／採買", type: "source"},
{ time: "17:55-18:00", title: "抵達阿拉馬海納，check in", detail: "地址：1421-1 Yamagawa, Motobu；不再繞經名護 21 世紀之森，車程約 25 分鐘直達。", tag: "住宿", type: "source"},
{ time: "19:30-21:00", title: "晚餐（若許田未用餐）", detail: "見今日餐廳推薦：海邦丸（提前預約客製）為主線，喜菜ハウス瀬底為理想備案（需先確認營業時間）。", tag: "晚餐／PDF v16 餐廳排序", type: "conditional"}
],
route: {
source: "來源 PDF v16 路線：OTS 豐崎 → 瀨長島 → 業務超市 → 萬座毛 → 許田 → 阿拉馬海納；不再前往名護 21 世紀之森",
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
{ id: "L2", name: "瀨長島 → 業務超市小祿店", stopIds: ["umikaji", "gyomu"], distanceKm: null, minutes: "約 10", roads: "同區彈性繞行", note: "離開瀨長島時若已 delay 45 分鐘以上，跳過此站。"},
{ id: "L3", name: "業務超市小祿店 → 萬座毛", stopIds: ["gyomu", "manzamo"], distanceKm: null, minutes: "61", roads: "國道331 → E58 沖繩自動車道 → 國道58", note: "萬座毛優先保留。"},
{ id: "L4", name: "萬座毛 → 許田休息站", stopIds: ["manzamo", "kyoda"], distanceKm: null, minutes: "38", roads: "國道58", note: "許田可買土產、水果與美麗海水族館優惠票。"},
{ id: "L5", name: "許田 → 阿拉馬海納", stopIds: ["kyoda", "ala"], distanceKm: null, minutes: "25", roads: "國道58 → 449 → 縣道114", note: "許田後直達，不再繞經名護 21 世紀之森；以 17:55-18:00 入住為目標。"}
]
},
notes: [
{ title: "Starbucks 已刪除", detail: "原規劃在許田後去的 Starbucks 名護 21 世紀之森已刪除——12 月 18 日那霸日落約 17:38，17:45 抵達時海灘與溜滑梯都已經天黑；時間改還給許田與提早入住休息，這一站改移到 Day 3 午後路過名護時當彈性選項。"},
{ title: "彈性檢查點", detail: "離開瀨長島時（約 13:30）若已 delay 30 分鐘以上，就直接放掉業務超市，保證 18:30 前到飯店。"},
{ title: "晚餐策略", detail: "最務實策略是「海邦丸提前預約客製」為主線，喜菜ハウス瀬底為理想備案（需先確認營業時間）。"}
]
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
weather: { label: "本部町／古宇利島", lat: 26.6826085, lng: 127.8834902},
schedule: [
{ time: "07:30", title: "飯店早餐", detail: "確認票券、兒童用品與雨具。", tag: "集合", type: "source"},
{ time: "08:15", title: "抵達停車場、整理嬰兒車", detail: "提早到場，從 4F 入口準備第一場入館。", tag: "水族館", type: "source"},
{ time: "08:30", title: "美麗海水族館開館入場", detail: "通常期開館 08:30-18:30；依 4F→3F→2F 順序走主線。", tag: "水族館", type: "source"},
{ time: "08:30-09:20", title: "Ocean Blue 水槽旁付費席（S）", detail: "現場先到先得、不接受預約；9 位、S 席每 50 分鐘 1,000 日圓，安排 2 位代表抽取。抽不到仍照一般動線。", tag: "S／先到先得", type: "source"},
{ time: "09:30", title: "黑潮之海給餌解說（S）", detail: "官方每日 09:30；可看鬼蝠魟與鯨鯊。", tag: "S／節目", type: "source"},
{ time: "10:00", title: "海豚餵食體驗（S）", detail: "現場先到先得、名額有限，每組 1,000 日圓；其他場次 11:00／13:30／15:30，12:00 暫停。", tag: "S／名額有限", type: "conditional"},
{ time: "10:30-10:45", title: "Oki-chan 海豚秀（S）", detail: "演出約 10-15 分鐘；其他場次 11:30／13:00／15:00／17:00。", tag: "S／節目", type: "source"},
{ time: "11:00-11:20", title: "海龜餵食（A）", detail: "11:00-12:00 或 14:00-15:00 現場先到先得，無法事前預約，可能提早售罄。", tag: "A／先到先得", type: "conditional"},
{ time: "11:20-11:50", title: "海龜館、海牛館", detail: "依現場動線完成親子主線。", tag: "水族館", type: "source"},
{ time: "11:50-12:20", title: "核心展區快逛", detail: "保留給孩子與拍照；不再安排水族館內完整午餐。", tag: "主線", type: "source"},
{ time: "12:20-12:35", title: "黑潮之海最後巡覽", detail: "完成最後拍照與出口前確認。", tag: "水族館", type: "source"},
{ time: "12:35-13:00", title: "離館緩衝，13:00 準時出發", detail: "今天不安排二次入館；午餐改到古宇利島處理。", tag: "硬時間點", type: "source"},
{ time: "13:00-13:40", title: "開車前往古宇利島", detail: "車程約 30-40 分鐘，依路況與孩童狀態調整。", tag: "自駕", type: "source"},
{ time: "14:00-15:30", title: "A/B 分組活動＋古宇利島午餐", detail: "Restaurant L LOTA 為完整午餐首選（務必訂位 0980-51-5031，14:00 抵達距 L.O. 僅 30 分鐘）；Earthful Burger、アイタル食堂為備援。", tag: "A/B 分組／餐廳需確認", type: "source"},
{ time: "15:30-16:00", title: "合體下午茶", detail: "方案一「なんくるKITCHEN」水果碗，或方案二「モリンガの木」。", tag: "彈性", type: "source"},
{ time: "16:30", title: "返回飯店、休息 30 分鐘", detail: "回阿拉馬海納後先讓孩子休息，再準備晚餐。", tag: "住宿", type: "source"},
{ time: "18:00", title: "晚餐「沖縄料理と島どうふ TO-PU」", detail: "主方案；沖縄しゃぶしゃぶ もとぶ美ら海店為備援。預約時指定昆布／蔬菜鍋底、獨立鍋具，不使用魚介高湯；TO-PU 僅收現金。", tag: "晚餐／需訂位與確認湯底", type: "conditional"}
],
route: {
source: "來源 PDF v16 路線總計：47.9 公里／約 1 小時 23 分；13:00 離開水族館，返程原路回本部",
stops: [
{ id: "ala", label: "阿拉馬海納", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902},
{ id: "churaumi", label: "海洋博公園／美麗海水族館", query: "沖縄美ら海水族館", lat: 26.6943689, lng: 127.8780380},
{ id: "kouri", label: "古宇利島", query: "古宇利島 沖縄", lat: 26.7042510, lng: 128.0180847},
{ id: "ala-return", label: "回本部住宿", query: "Ala MAHAINA CONDO HOTEL 沖縄", lat: 26.6826085, lng: 127.8834902}
],
legs: [
{ id: "L1", name: "阿拉馬海納 → 海洋博公園", stopIds: ["ala", "churaumi"], distanceKm: null, minutes: null, roads: "縣道114號", note: "早上短程前往水族館。"},
{ id: "L2", name: "美麗海 → 古宇利島", stopIds: ["churaumi", "kouri"], distanceKm: null, minutes: "30-40", roads: "縣道114 → 505 → 248 → 110 → 247號", note: "依風況、兒童狀態與古宇利島現場狀況調整。"},
{ id: "L3", name: "古宇利島 → 回本部", stopIds: ["kouri", "ala-return"], distanceKm: null, minutes: null, roads: "返程原路回本部", note: "備案二須把回水族館時間設為共同集合點。"}
]
}
},
{
id: "day3",
label: "Day 3",
date: "2026-12-20",
dateLabel: "12/20 Sun",
title: "A/B 分組體驗、名護會合、美國村",
intro: "固定分組：A 隊＝Day 0 前鋒隊→JUNGLIA（含午餐），B 隊＝Day 1 抵達隊→Neo Park。兩隊不同時結束，統一在 AEON Nago 會合。",
mode: "driving",
lodgingKey: "lagent",
weather: { label: "北谷町（住宿基地）", lat: 26.3210666, lng: 127.7552524},
schedule: [
{ time: "07:00", title: "早餐、行李放大廳", detail: "確認兩組聯絡方式。", tag: "分隊準備", type: "source"},
{ time: "08:00-08:40", title: "海洋博公園短散步", detail: "戶外開放空間，不影響 09:30／10:00 入場。", tag: "彈性", type: "source"},
{ time: "08:40", title: "出發前往兩大園區", detail: "A、B 兩組分別前往 JUNGLIA 與 Neo Park。", tag: "A/B 分隊", type: "source"},
{ time: "09:30-12:00", title: "B 隊：Neo Park", detail: "全年無休，09:30-17:30，入園截止 17:00；門票大人 ¥1,600／小孩（4歲–小學）¥800／3 歲以下免費。園內輕便鐵道首班 10:30，建議 09:30 先逛步道區域，10:30 再搭車，剛好接上 12:00 離園。", tag: "B 隊", type: "source"},
{ time: "10:00-14:30", title: "A 隊：JUNGLIA（含午餐）", detail: "票券與營業時間須於 T-7～T-1 向官方行事曆 junglia.jp/calendar 再次確認；門票大人 ¥6,930／小孩（4–11歲）¥4,950／3 歲以下免費，建議事先官網網購。園內只有約 4.5 小時，行前先排好「必玩 2–3 項」優先順序。", tag: "A 隊／必查", type: "conditional"},
{ time: "12:00", title: "B 隊出發名護市區", detail: "B 隊離開 Neo Park 前往名護市區。", tag: "B 隊", type: "source"},
{ time: "12:30", title: "B 隊名護市區午餐", detail: "アイタル食堂首選；ナカラマサラ與農家の台所 楽家為備援，均需依座位與高湯狀況確認；くまキッチン週日公休已淘汰。", tag: "B 隊／餐廳排序", type: "source"},
{ time: "13:30", title: "B 隊逛「名護 AEON」", detail: "在 AEON Nago 等待 A 隊。", tag: "B 隊／會合點", type: "source"},
{ time: "14:30", title: "A 隊出發名護市區", detail: "JUNGLIA 結束後前往名護市區。", tag: "A 隊", type: "source"},
{ time: "15:00", title: "A、B 隊 AEON Nago 會合", detail: "逾時以電話／訊息確認，直接前往美國村。", tag: "共同集合", type: "source"},
{ time: "15:15-15:50", title: "名護點心站（彈性）", detail: "暖暮拉麵、Blue Seal 冰淇淋，或改去 Starbucks 名護 21 世紀之森（戶外海灘＋溜滑梯；此時段仍有日光，比 Day1 傍晚更適合——Day1 同一站已因 12 月 17:38 天黑刪除，移來這裡）。兩店相距約 700 公尺；時間不足可跳過。", tag: "彈性", type: "conditional"},
{ time: "15:50", title: "前往美國村", detail: "車程約 50 分鐘。", tag: "自駕", type: "source"},
{ time: "17:00", title: "美國村 American Village 逛街", detail: "依現場人流與停車狀況調整。", tag: "景點", type: "source"},
{ time: "17:30", title: "海邊日落＋12 月聖誕點燈", detail: "2026–27 年正式期間尚未公布（前年度 11/28–1/12），11 月底後查北谷町／Depot Island 公告；Depot Island 是全年燈飾，12/20 晚上一定有夜景可看。北谷每週六 20:00 花火，Day3 是週日看不到。", tag: "日期待重查", type: "conditional"},
{ time: "18:30", title: "美國村晚餐＋自由逛街", detail: "Bollywood Dreams 首選（建議官網提前訂位，12 月旺季）；Esparza's、The Calif Kitchen 為順路備援。", tag: "晚餐／建議訂位", type: "conditional"},
{ time: "20:30", title: "入住 La'gent Hotel Okinawa Chatan", detail: "已訂房確認、3 間房、8 位，現場支付。", tag: "住宿", type: "source"}
],
route: {
source: "來源 PDF v16 路線總計：76.5 公里／約 1 小時 42 分；A/B 分支與會合路線分開看",
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
{ id: "A1", name: "A 組：阿拉馬海納 → JUNGLIA", from: "阿拉馬海納", to: "JUNGLIA", stopIds: ["ala", "junglia"], distanceKm: null, minutes: null, roads: "449 → 58 → 縣道84號", note: "A 組分支；JUNGLIA 時段與票務必於 T-7～T-1 重查。"},
{ id: "B1", name: "B 組：阿拉馬海納 → Neo Park", from: "阿拉馬海納", to: "Neo Park", stopIds: ["ala", "neopark"], distanceKm: null, minutes: null, roads: "縣道114 → 449號", note: "B 組分支；非 A 組接續路線。"},
{ id: "A2", name: "A 組：JUNGLIA → AEON Nago", from: "JUNGLIA", to: "AEON Nago", stopIds: ["junglia", "aeon-nago"], distanceKm: null, minutes: null, roads: "依 PDF 路線摘要前往名護市區", note: "A 組 14:30 出發，15:00 以 AEON Nago 會合為目標。"},
{ id: "B2", name: "B 組：Neo Park → AEON Nago", from: "Neo Park", to: "AEON Nago", stopIds: ["neopark", "aeon-nago"], distanceKm: null, minutes: null, roads: "縣道110 → 58 → 449號", note: "B 組 12:00 出發、13:30 逛名護 AEON。"},
{ id: "C1", name: "會合：AEON Nago → 名護點心站", from: "AEON Nago", to: "名護點心站", stopIds: ["aeon-nago", "nago-snack"], distanceKm: null, minutes: null, roads: "國道58一帶短程彈性繞行", note: "時間不足可跳過。"},
{ id: "C2", name: "名護點心站 → 美國村", from: "名護點心站", to: "美國村", stopIds: ["nago-snack", "american-village"], distanceKm: null, minutes: "50", roads: "58 → E58 沖繩自動車道 → 縣道85／國道23號", note: "夕陽與聖誕點燈時段請預留緩衝。"},
{ id: "C3", name: "美國村 → La'gent Hotel", from: "美國村", to: "La'gent Hotel Okinawa Chatan", stopIds: ["american-village", "lagent"], distanceKm: null, minutes: null, roads: "北谷市區短程", note: "20:30 入住。"}
]
},
notes: [
{ title: "固定分組", detail: "A 隊＝Day 0 先抵達的前鋒隊 → 去 JUNGLIA；B 隊＝Day 1 抵達隊 → 去 Neo Park，與其他天的 A 隊／B 隊編號一致。原「B 組無幼兒」已確認兩隊都不需要彈性換組，維持固定分組。"},
{ title: "JUNGLIA 必查", detail: "官方每月月底公布未來 4 個月營業時間，其中僅未來 2 個月屬「確定」版本；3–4 個月後的時段只會延長、不會縮短。12/20 屬 2026 年 8 月底公告範圍內的「初步」時段，須待 10 月底正式確定後、並於出發前 T-7～T-1 再次確認開閉園、Reservation Pass 與停車規則。"},
{ title: "A/B 會合規則", detail: "統一在 AEON Nago 會合；A 組離開 JUNGLIA 後前往名護市區，逾時先電話／訊息確認。"},
{ title: "共同南下", detail: "會合後依名護點心站彈性、車流與日落時間決定是否停留，再前往美國村。"}
]
},
{
id: "day4",
label: "Day 4",
date: "2026-12-21",
dateLabel: "12/21 Mon",
title: "兒童王國、Rycom、港川、波上宮、國際通",
intro: "今天先從北谷往南移動，下午港川回程順道波上宮參拜（16:00 授與所仍開），再入住 HOTEL ANTEROOM NAHA；還車移至 Day 5，今晚車留在飯店，步行前往國際通。",
mode: "mixed",
transportLabel: "白天自駕；晚間步行",
lodgingKey: "anteroom",
weather: { label: "那霸市區／前島", lat: 26.2255762, lng: 127.6792215},
schedule: [
{ time: "07:30", title: "早餐、La'gent 退房／行李上車", detail: "早餐後完成 La'gent 退房，行李上車；出發前確認飯店退房與行李寄放規則。", tag: "集合／退房", type: "source"},
{ time: "09:30-11:30", title: "沖繩兒童王國", detail: "平日 09:30-17:30（16:30 停止入園）；固定休園日為每週二，12/21（一）正常開園；門票大人 ¥1,000／高校生 ¥500／15 歲以下免費（新制）。", tag: "親子", type: "source"},
{ time: "12:00", title: "永旺夢樂城（AEON Rycom）＋午餐", detail: "見今日餐廳推薦：Core Curry（館內 3F）最務實；專門店營業 10:00-22:00。", tag: "購物／餐廳逐店確認", type: "source"},
{ time: "14:30", title: "結束購物", detail: "依購物與午餐狀況調整。", tag: "轉場", type: "source"},
{ time: "15:00", title: "港川外人住宅：oHacorté", detail: "營業 11:30–19:00，現為不定休（非固定週二休）；40 分鐘較緊湊，建議外帶邊走邊吃，不堂食久候。", tag: "下午茶", type: "source"},
{ time: "15:40-16:00", title: "出發前島，順道波上宮", detail: "港川 → 波上宮車程約 20 分鐘，順路不繞路。", tag: "自駕／估算", type: "conditional"},
{ time: "16:00-16:20", title: "波上宮參拜＋買御守／御朱印", detail: "原規劃 Day5 清晨 07:40 去，但授與所 09:00 才開只能拍照；改到今天下午順路辦好，也避開授與所 16:30 左右打烊的風險。境內 24 小時免費開放；免費停車約 20 格。", tag: "參拜／御守", type: "source"},
{ time: "16:20-16:35", title: "前往 HOTEL ANTEROOM NAHA", detail: "波上宮 → 前島車程約 10–15 分鐘。", tag: "自駕／估算", type: "conditional"},
{ time: "16:35", title: "抵達 HOTEL ANTEROOM NAHA，check in，放行李", detail: "已訂房確認、3 間房，標準 Check-in 15:00 起。停車 52 格、1,500 円／晚、先到先得；先處理行李與房間。", tag: "住宿／停車", type: "source"},
{ time: "16:35-18:00", title: "飯店休息、整理隔日行李", detail: "車留在 HOTEL ANTEROOM；租車延至 Day 5 早上才到 OTS 還車。", tag: "不還車", type: "source"},
{ time: "18:00", title: "步行前往國際通", detail: "前島步行至國際通約 15–20 分鐘；今晚不開車，預留親子步行時間。", tag: "步行", type: "source"},
{ time: "18:40", title: "晚餐「Tamatebako」（建議候選）", detail: "見今日餐廳推薦：Tamatebako 為三家中唯一「純素＋4.7 星＋週一晚間營業」；店面小、一人經營，8 人團體務必提前預約。", tag: "晚餐／尚未訂位", type: "conditional"},
{ time: "20:00", title: "繼續逛國際通", detail: "依全家體力與回程交通調整。", tag: "逛街", type: "source"},
{ time: "21:00", title: "步行回 HOTEL ANTEROOM 休息", detail: "車留在飯店；整理 Day 5 07:30 退房與還車文件。回程備案：美榮橋駅步行約 12 分（末班車 23:30），或在國際通叫計程車回飯店（約 ¥1,000、5 分鐘），帶幼兒建議優先叫車。", tag: "住宿", type: "source"}
],
route: {
source: "來源 PDF v16 路線：北谷 → 兒童王國 → Rycom → 港川 → 波上宮 → HOTEL ANTEROOM NAHA；國際通往返為步行段，今晚不還車",
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
{ id: "L1", name: "La'gent → 兒童王國", from: "La'gent Hotel Chatan", to: "沖繩兒童王國", stopIds: ["lagent", "childrens-kingdom"], distanceKm: null, minutes: null, roads: "58 → 330 → 85 → 22號", note: "PDF 總計不含本段；出發時以導航確認。"},
{ id: "L2", name: "兒童王國 → Rycom", from: "沖繩兒童王國", to: "AEON Rycom", stopIds: ["childrens-kingdom", "rycom"], distanceKm: null, minutes: null, roads: "22 → 85號", note: "短程轉場，午餐與購物一起處理。"},
{ id: "L3", name: "Rycom → 港川", from: "AEON Rycom", to: "港川 oHacorté", stopIds: ["rycom", "minatogawa"], distanceKm: null, minutes: null, roads: "330 → 58號", note: "下午茶停留時間要配合 15:40 出發前島的排程。"},
{ id: "L4", name: "港川 → 波上宮", from: "港川 oHacorté", to: "波上宮", stopIds: ["minatogawa", "naminoue"], distanceKm: null, minutes: "約 20", roads: "順路，不算繞路", note: "車程約 20 分鐘；參拜＋買御守／御朱印（授與所約 09:00–16:30）。"},
{ id: "L5", name: "波上宮 → HOTEL ANTEROOM", from: "波上宮", to: "HOTEL ANTEROOM NAHA", stopIds: ["naminoue", "anteroom"], distanceKm: null, minutes: "10-15", roads: "那霸市區道路", note: "抵達後全家先辦理入住與放行李；停車 52 格、1,500 円／晚、先到先得。"},
{ id: "L6", name: "HOTEL ANTEROOM → 國際通", from: "HOTEL ANTEROOM NAHA", to: "國際通", stopIds: ["anteroom", "kokusai"], distanceKm: null, minutes: "15-20", roads: "步行；非自駕", navigation: false, mapLine: false, mode: "walking", openLabel: "步行段（不開啟導航）", note: "今晚車留在飯店；以美栄橋／國際通方向步行。"}
]
},
notes: [
{ title: "波上宮改到今天下午", detail: "原規劃 Day5 清晨去，但授與所 09:00 才開只能拍照，已改到今天下午港川回程路上順路參拜＋買御守／御朱印（16:00 授與所仍開）。"},
{ title: "還車策略", detail: "今天不還車；全家入住 HOTEL ANTEROOM 後將車留在飯店，Day 5 07:30 退房後直接到 OTS 08:00–09:00 還車。"},
{ title: "HOTEL ANTEROOM 停車", detail: "停車 52 格、1,500 円／晚、先到先得；抵達後先處理行李，再確認車位與隔日出車動線。"},
{ title: "國際通交通", detail: "飯店官方提供美栄橋站步行約 12 分鐘；今晚從前島步行前往國際通，避免再開車找停車位。"}
]
},
{
id: "day5",
label: "Day 5",
date: "2026-12-22",
dateLabel: "12/22 Tue",
title: "還車、iias／DMM、機場",
intro: "從 HOTEL ANTEROOM 退房後直達 OTS 豐崎還車（波上宮已在 Day4 下午參拜過，不繞路）；還車後步行至相鄰的 iias／DMM，下午依 A/B 航班分開前往機場。",
mode: "mixed",
transportLabel: "上午自駕至還車；還車後步行／計程車",
lodgingKey: "anteroom",
weather: { label: "那霸市區／前島／機場", lat: 26.2255762, lng: 127.6792215},
schedule: [
{ time: "07:00", title: "早餐自理", detail: "整理行李與退房文件。", tag: "集合", type: "source"},
{ time: "07:30", title: "退房、行李上車，飯店出發", detail: "行李直接上車，今天不寄放飯店；波上宮已在 Day4 下午參拜過，今天不繞路，直接開往 OTS。", tag: "退房", type: "source"},
{ time: "07:30-08:00", title: "自駕前往 OTS 豐崎", detail: "車程約 30 分鐘，不再繞經波上宮；08:00 OTS 一開門就能報到。", tag: "自駕／估算", type: "conditional"},
{ time: "08:00-09:00", title: "OTS 豐崎還車", detail: "加油、驗車、還車手續；兩台車皆須辦理（OTS1504557／OTS1501685），租車已延長至 Day5，營業 08:00–19:00。", tag: "還車", type: "source"},
{ time: "09:00-09:20", title: "步行前往 iias、寄放行李", detail: "OTS 官方資料顯示與 iias 相鄰、步行約 1–3 分鐘；此區段含辦理行李寄放作業時間。", tag: "步行／非單軌", type: "source"},
{ time: "09:30-12:30", title: "A 隊 iias 購物中心／B 隊 DMM 水族館", detail: "iias 店舖 10:00–21:00；DMM 9:00–19:00，位於 iias 商場內。今天時間較寬裕（3 小時）。", tag: "A/B 分組", type: "source"},
{ time: "12:30", title: "午餐（iias 內餐廳）", detail: "Crazy Spice iias 首選；Tacorice Cafe きじむなぁ、Eggs'n Things 為備案；還車後不再移車。", tag: "午餐／同場分流", type: "source"},
{ time: "13:30", title: "iias 採購、自由逛、西松屋", detail: "A隊、B隊在此之後分開前往機場。", tag: "A/B 分流", type: "source"},
{ time: "14:30", title: "前往那霸機場", detail: "已還車，改叫一般計程車；當批同行的家庭各叫一台（3／2／3 人視當批人數），現場排班或用 APP（GO／DiDi／Uber）即可，不需要大型 9 人座車。", tag: "A 隊／機場", type: "conditional"},
{ time: "14:50", title: "抵達那霸機場", detail: "距 16:50 起飛尚有約 2 小時緩衝。", tag: "A 隊", type: "source"},
{ time: "16:50-17:35", title: "MM929 回程航班", detail: "那霸起飛 → 桃園抵達；航班與訂位紀錄出發前最終確認。", tag: "A 隊／航班待重查", type: "conditional"},
{ time: "16:00-16:30", title: "iias 提前晚餐（建議）", detail: "建議先在 iias 吃完整晚餐，再前往機場；比 17:00 到機場後為了湊評分門檻更穩定。", tag: "B 組／建議提前用餐", type: "conditional"},
{ time: "16:30", title: "前往那霸機場", detail: "比照 A隊，當批家庭分別叫一般計程車即可，不需要大型 9 人座車。", tag: "B 隊／機場", type: "conditional"},
{ time: "17:00", title: "抵達那霸機場", detail: "距 20:10 起飛尚有約 3 小時，可於機場內用晚餐、免稅購物。", tag: "B 隊", type: "source"},
{ time: "20:10-20:55", title: "BR185 回程航班", detail: "那霸 T1 起飛 → 桃園 T2 抵達；航班與訂位紀錄出發前最終確認。", tag: "B 隊／航班待重查", type: "conditional"}
],
route: {
source: "來源 PDF v16：HOTEL ANTEROOM → OTS → iias，不再繞經波上宮（已改 Day4 下午參拜）；還車後 OTS→iias 為步行",
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
{ id: "L1", name: "HOTEL ANTEROOM → OTS 豐崎", from: "HOTEL ANTEROOM NAHA", to: "OTS 豐崎還車", stopIds: ["anteroom", "ots-return"], distanceKm: null, minutes: "約 30", roads: "依當日導航；市區道路", openLabel: "開啟 Google Maps 路線參考", note: "07:30 退房後出發，不再繞經波上宮；抵達後完成加油、驗車與還車。"},
{ id: "L2", name: "OTS → iias／DMM", from: "OTS 豐崎還車", to: "iias／DMM 豐崎", stopIds: ["ots-return", "iias"], distanceKm: null, minutes: "1-3", roads: "步行；OTS 與 iias 相鄰", navigation: false, mapLine: false, mode: "walking", openLabel: "步行段（不開啟導航）", note: "還車後步行，不搭單軌；先處理行李再進商場。"},
{ id: "L3", name: "iias／DMM → 那霸機場", from: "iias／DMM 豐崎", to: "那霸機場", stopIds: ["iias", "airport"], distanceKm: null, minutes: null, roads: "計程車／公共交通；依 A/B 航班分流", navigation: true, mapLine: true, mode: "transit", openLabel: "開啟 Google Maps 路線參考", note: "改叫一般計程車：iias → 機場改為 8 人分 3 台（依家庭 3／2／3 人分乘）；地圖虛線只表示機場移動方向，不是即時交通路線。"}
]
},
notes: [
{ title: "兩隊分開抓時間", detail: "A 隊 MM929 16:50 起飛，iias／DMM 13:00 後分流、14:30 前往機場；B 隊 16:30 出發、17:00 抵達機場。"},
{ title: "還車後到 iias", detail: "OTS 豐崎與 iias 相鄰，還車完成後步行約 1-3 分鐘；此段不是單軌，也不是從飯店直接改搭單軌。"},
{ title: "iias 到機場", detail: "iias → 機場依 A/B 航班搭計程車或公共交通；此段行程在地圖以虛線表示，請於當日確認交通。"}
]
}
]
};

# 沖繩家族旅遊｜領隊版 PWA

這個資料夾就是可直接部署到 GitHub Pages 的靜態 PWA。網站不需要後端，旅程資料、介面與離線快取都包含在 `site/` 內。

## GitHub Pages 部署

1. 將整個專案推送到 GitHub 的 `main` 分支。
2. 在 GitHub repository 的 **Settings → Pages → Source** 選擇 **GitHub Actions**。
3. `.github/workflows/pages.yml` 會把 `site/` 發佈到 Pages。
4. 第一次部署完成後，用 Android Chrome 或 iOS Safari 開啟 Pages 網址即可加入主畫面。

## 互動地圖（無 API Key）

本版使用 Leaflet＋公開 OpenStreetMap 底圖，在 PWA 頁面內呈現類似參考截圖的互動介面：

1. 日期分頁切換每日地圖。
2. 地圖以編號圖釘標出當日景點，並依 PDF 的停靠／分支順序畫出規劃線。
3. 右側（手機版為下方）景點卡片可點選地圖標記；每一站都有 Google Maps 外部搜尋連結。
4. 每日上方與各路段仍保留 Google Maps 導航交接，出發時由 Google Maps 處理即時交通與轉彎指示。

這個地圖不需要 Google Maps API Key，也不會在 repository 放置金鑰。OpenStreetMap 底圖與 Leaflet CDN 需要網路；若底圖載入失敗，景點順序卡片與外部連結仍會保留。路線線段是行程順序／分支示意，不是即時路況或保證的道路幾何。

## 天氣與日期行為

天氣卡片會在旅遊日期進入 Open-Meteo 的 16 日預報範圍後，由瀏覽器即時查詢；查詢結果會短暫快取供離線查看。超出預報範圍時會清楚顯示「尚未進入 16 日預報範圍」，不會以歷史或猜測資料冒充預報。

## Android / iOS 操作

- 版面以手機單手操作為優先，日期分頁、路線按鈕與電話按鈕都有足夠觸控尺寸。
- iOS 透過 Safari 的「分享 → 加入主畫面」安裝；Android Chrome 可使用瀏覽器的「安裝應用程式」或網站內的安裝說明。
- PWA service worker 會快取旅程內容，沒有網路時仍可查看行程、住宿資料與路線估算；Leaflet 的外部底圖、Google Maps 導航與即時天氣需要網路。
- 網站中的「導航」按鈕會把單段路線交給 Google Maps，讓使用者可選擇目前所在位置、避開收費道路等即時選項。

## 內容來源與維護

最新行程來源為使用者於 2026-08-11 上傳的 13 頁 PDF，SHA-256 為 `74CAB3CE4E49B266748FBC0F3F01AE88E71F2C40F8B8C982EB9680A8C114E662`。已逐頁人工核對 Day 0-Day 5，再同步到 `site/data/trip-data.js`；匯入對照與差異記錄放在 `site/data/import-ledger.json`、`site/data/import-findings.json`、`site/data/travel.draft.json`。

行程資料集中在 `site/data/trip-data.js`，日後只需更新該檔案即可調整行程、住宿、路線與聯絡資訊。官方來源連結也列在網站底部，適合出發前重新確認航班、景點公告、住宿政策與租車資訊。

本版保留未來日期與尚未公告資訊的條件式提示：JUNGLIA 開園／票務、航班、餐廳預約、景點營業時間、Day 1 Starbucks 店名與 Y's Inn 停車都應在出發前再確認。Day 5 的 Y's Inn→iias／DMM 明確採計程車；iias→機場才可視情況選計程車或 Yui Rail。

## 本機預覽

在專案根目錄執行任一個靜態伺服器，再以瀏覽器開啟 `site/`。例如：

```powershell
python -m http.server 8765 --directory site
```

直接以 `file:///` 開啟會阻擋 service worker 與部分 API，因此不建議用檔案雙擊方式測試。

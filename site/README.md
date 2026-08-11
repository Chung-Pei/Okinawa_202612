# 沖繩家族旅遊｜領隊版 PWA

這個資料夾就是可直接部署到 GitHub Pages 的靜態 PWA。網站不需要後端，旅程資料、介面與離線快取都包含在 `site/` 內。

## GitHub Pages 部署

1. 將整個專案推送到 GitHub 的 `main` 分支。
2. 在 GitHub repository 的 **Settings → Pages → Source** 選擇 **GitHub Actions**。
3. `.github/workflows/pages.yml` 會把 `site/` 發佈到 Pages。
4. 第一次部署完成後，用 Android Chrome 或 iOS Safari 開啟 Pages 網址即可加入主畫面。

## Google My Maps 設定

本版使用公開 Google My Maps iframe，不需要在 repository 放 Google Maps API Key：

1. 在 Google My Maps 建立每日地圖，加入停靠點、路線與備註。
2. 將地圖分享權限設為公開，或至少讓知道連結的人可以查看。
3. 在 My Maps 選擇 **分享 → 嵌入我的網站**，複製 `https://www.google.com/maps/d/embed?...` 網址。
4. 將網址填入 `site/config.js` 對應的 `myMapsEmbedUrls.day0` 至 `day5`。
5. 推送更新後，日期分頁會切換到各日的 iframe；使用者也可按「開啟本日 My Maps」在 Google Maps 中查看。

尚未填入網址的日期會顯示清楚的設定提示，不會假裝已載入地圖。下方的路段公里數、預估時間、道路摘要與 Google Maps 導航連結仍會照常顯示。

## 天氣與日期行為

天氣卡片會在旅遊日期進入 Open-Meteo 的 16 日預報範圍後，由瀏覽器即時查詢；查詢結果會短暫快取供離線查看。超出預報範圍時會清楚顯示「尚未進入 16 日預報範圍」，不會以歷史或猜測資料冒充預報。

## Android / iOS 操作

- 版面以手機單手操作為優先，日期分頁、路線按鈕與電話按鈕都有足夠觸控尺寸。
- iOS 透過 Safari 的「分享 → 加入主畫面」安裝；Android Chrome 可使用瀏覽器的「安裝應用程式」或網站內的安裝說明。
- PWA service worker 會快取旅程內容，沒有網路時仍可查看行程、住宿資料與路線估算；公開 My Maps iframe 與即時天氣需要網路。
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

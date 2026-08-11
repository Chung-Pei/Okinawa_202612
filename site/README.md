# 沖繩家族旅遊｜領隊版 PWA

這個資料夾就是可直接部署到 GitHub Pages 的靜態 PWA。網站不需要後端，旅程資料、介面與離線快取都包含在 `site/` 內。

## GitHub Pages 部署

1. 將整個專案推送到 GitHub 的 `main` 分支。
2. 在 GitHub repository 的 **Settings → Pages → Source** 選擇 **GitHub Actions**。
3. `.github/workflows/pages.yml` 會把 `site/` 發佈到 Pages。
4. 第一次部署完成後，用 Android Chrome 或 iOS Safari 開啟 Pages 網址即可加入主畫面。

## Google Maps 設定

Google Maps 底圖與路線需要瀏覽器可用的 API key：

1. 複製 `site/config.example.js` 為 `site/config.js`。
2. 在 `site/config.js` 填入 `googleMapsApiKey`。
3. Google Cloud 啟用 **Maps JavaScript API** 與 **Routes API**。
4. 將 key 限制為 GitHub Pages 網域的 HTTP referrer，例如：
   `https://YOUR-USER.github.io/YOUR-REPOSITORY/*`
5. 將 `site/config.js` 一併提交後重新部署。

未設定 key 時，網站仍會顯示每日路線的離線示意圖、停靠點、公里數、預估時間與「在 Google Maps 開啟」按鈕；這可避免尚未設定金鑰時整個行程頁失效。

## 天氣與日期行為

天氣卡片會在旅遊日期進入 Open-Meteo 的 16 日預報範圍後，由瀏覽器即時查詢；查詢結果會短暫快取供離線查看。超出預報範圍時會清楚顯示「尚未進入 16 日預報範圍」，不會以歷史或猜測資料冒充預報。

## Android / iOS 操作

- 版面以手機單手操作為優先，日期分頁、路線按鈕與電話按鈕都有足夠觸控尺寸。
- iOS 透過 Safari 的「分享 → 加入主畫面」安裝；Android Chrome 可使用瀏覽器的「安裝應用程式」或網站內的安裝說明。
- PWA service worker 會快取旅程內容，沒有網路時仍可查看行程、住宿資料與路線估算；Google Maps 與即時天氣仍需要網路。
- 網站中的「導航」按鈕會把單段路線交給 Google Maps，讓使用者可選擇目前所在位置、避開收費道路等即時選項。

## 內容來源與維護

行程資料集中在 `site/data/trip-data.js`，日後只需更新該檔案即可調整行程、住宿、路線與聯絡資訊。官方來源連結也列在網站底部，適合出發前重新確認航班、景點公告、住宿政策與租車資訊。

本版保留未來日期與尚未公告資訊的條件式提示：JUNGLIA 開園/票務、航班與景點營業時間都應在出發前再確認。

## 本機預覽

在專案根目錄執行任一個靜態伺服器，再以瀏覽器開啟 `site/`。例如：

```powershell
python -m http.server 8765 --directory site
```

直接以 `file:///` 開啟會阻擋 service worker 與部分 API，因此不建議用檔案雙擊方式測試。

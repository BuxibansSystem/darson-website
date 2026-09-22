# 專案規則與架構

## 架構

- 使用 JavaScript 與 Vue SFC，維持現有語言，不轉換 TypeScript。
- `src/main.js` 載入 `src/app/` 的路由、全站 CSS 與 `App.vue`；`App.vue` 組合共用頁首、頁尾、LINE 浮動連結與 `RouterView`。
- 依功能分類於 `src/features/`：`home`、`about`、`branches`、`courses`、`news`、`students`、`achievements`、`contact`。頁面及功能專屬元件、資料與工具放在所屬 feature；文案與資料目前主要放在各頁的 `<script setup>`，需要時再拆出。
- 跨功能共用元件放在 `src/shared/components/`，圖片工具與清單放在 `src/shared/images.js`；僅單一 feature 使用的程式不放 shared。
- 以 `src/app/router.js` 為實際頁面入口依據：消息頁使用 `features/news/NewsCategoryPage.vue`，學生專欄使用 `features/students/ColumnCategoryPage.vue`；同目錄中的 `NewsPage.vue`、`StudentsPage.vue` 未掛入路由。
- 全站樣式集中在 `src/app/style.css`；修改共用選擇器時需檢查其他使用頁面。

## 修改規則

- 新增或變更分校、課程、分類 ID 時，同步核對頁面資料、`src/shared/components/SiteHeader.vue` 選單與路由預設轉址。課程活動頁由 `src/features/courses/CampaignCoursePage.vue` 處理，入口 ID 映射在同目錄的 `CoursePage.vue`。
- 圖片直接使用 Cloudflare R2 公開網址，`src/shared/images.js` 管理 `baseUrl`、`imagePaths`、`assetUrl` 與 `imageModules`，不依賴本機 `src/assets/`。R2 目錄名称參與資料匹配：課程為 `assets/專業課程/<學段>/<課程>/`，分校為 `assets/分校資訊/<分校>/教室環境/`。新增或改名須同步清單、folder 映射及兩個課程頁中的指定圖片檔名。
- `public/_redirects` 的 SPA fallback `/* /index.html 200` 必須放最後；避免 `/contact` 自我轉址。
- 保留 `functions/courses05.js` 對已停業內湖分校的 HTTP 410 與 `X-Robots-Tag: noindex`，不要改成一般分校轉址。

## 驗證

- 環境與啟動指令見 `README.md`；使用 npm 與 `package-lock.json`。
- 目前沒有 test、lint、typecheck 腳本；前端變更執行 `npm run build`。不需進行瀏覽器或 Playwright 驗證，也不要為此查找或安裝瀏覽器工具，除非使用者明確要求。局部格式檢查可用 `npx prettier --check <檔案>`。
- 圖片檢查使用 `node --test src/shared/images.test.js`，需能連線至 R2；若本機仍有 `src/assets/`，也會核對清單與遠端內容。
- Vite dev／preview 不執行 Pages Functions 或 `_redirects`，建置也不驗證該函式；部署層狀態碼與轉址需另外驗證。
- 不用幫我部署到 cloudflare page

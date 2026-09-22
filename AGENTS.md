# 專案規則與架構

## 架構

- `src/main.js` 載入 Vue Router 與全站 CSS；`src/App.vue` 組合共用頁首、頁尾、LINE 浮動連結與 `RouterView`。頁面文案與資料主要放在各頁的 `<script setup>`。
- 以 `src/router/index.js` 為實際頁面入口依據：消息頁使用 `NewsCategoryPage.vue`，學生專欄使用 `ColumnCategoryPage.vue`；`NewsPage.vue`、`StudentsPage.vue` 未掛入路由。
- 全站樣式集中在 `src/style.css`；修改共用選擇器時需檢查其他使用頁面。

## 修改規則

- 新增或變更分校、課程、分類 ID 時，同步核對頁面資料、`src/components/SiteHeader.vue` 選單與路由預設轉址。課程活動頁由 `CampaignCoursePage.vue` 處理，入口 ID 映射在 `CoursePage.vue`。
- 圖片透過 eager `import.meta.glob` 載入，目錄名稱參與資料匹配：課程為 `src/assets/專業課程/<學段>/<課程>/`，分校為 `src/assets/分校資訊/<分校>/教室環境/`，支援 `jpg,jpeg,png,webp`。改名須同步 folder 映射及兩個課程頁中的指定圖片檔名。
- `public/_redirects` 的 SPA fallback `/* /index.html 200` 必須放最後；避免 `/contact` 自我轉址。
- 保留 `functions/courses05.js` 對已停業內湖分校的 HTTP 410 與 `X-Robots-Tag: noindex`，不要改成一般分校轉址。

## 驗證

- 環境與啟動指令見 `README.md`；使用 npm 與 `package-lock.json`。
- 目前沒有 test、lint、typecheck 腳本；前端變更執行 `npm run build`，再用瀏覽器驗證受影響路由與互動。局部格式檢查可用 `npx prettier --check <檔案>`。
- Vite dev／preview 不執行 Pages Functions 或 `_redirects`，建置也不驗證該函式；部署層狀態碼與轉址需另外驗證。

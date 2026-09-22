# 大昇補習班官網

這是使用 Vue 3 + Vite + JavaScript 建立的大昇補習班官網，使用 Vue Router 提供首頁、分校、課程、最新消息等頁面。程式依 feature（功能）分類，文案與資料主要定義於各頁面的 `<script setup>`。

## 開發指令

Node.js 版本須符合 `^20.19.0 || >=22.12.0`。

```bash
npm ci
npm run dev
```

## 建置指令

```bash
npm run build
```

建置結果位於 `dist/`，建置後可用 `npm run preview` 預覽。

## 圖片（Cloudflare R2）

開發與正式網站皆直接讀取 `darson-official-website-image` bucket 的公開圖片，不需要本機 `src/assets/`。

- 公開網址及圖片清單集中在 `src/shared/images.js`，R2 object key 以 `assets/` 開頭。
- 新增圖片：上傳至 R2 的對應目錄，並更新 `imagePaths`；頁面使用 `assetUrl("共用/logo.png")` 取得網址。
- 課程目錄維持 `assets/專業課程/<學段>/<課程>/`，分校維持 `assets/分校資訊/<分校>/教室環境/`。改名時同步頁面 folder 映射與課程指定檔名。
- 目前使用 `r2.dev` 開發網址（有流量限制）；正式營運請為 bucket 綁定自訂網域，再修改 `src/shared/images.js` 的 `baseUrl`，保留 `/assets` 路徑。
- 執行 `node --test src/shared/images.test.js` 可驗證所有圖片連結（需連線至 R2）；本機 `src/assets/` 仍存在時也會核對清單及遠端檔案內容。

## 專案架構

```text
src/
├── main.js                 # 應用程式入口
├── app/
│   ├── App.vue             # 頁首、頁尾、LINE 連結與 RouterView
│   ├── router.js           # 路由與預設轉址
│   └── style.css           # 全站樣式與響應式版型
├── features/
│   ├── home/               # 首頁
│   ├── about/              # 關於大昇
│   ├── branches/           # 分校資訊
│   ├── courses/            # 專業課程與課程活動頁
│   ├── news/               # 最新消息
│   ├── students/           # 學生專欄
│   ├── achievements/       # 教學成果
│   └── contact/            # 聯絡資訊
└── shared/
    ├── components/         # SiteHeader.vue、SiteFooter.vue
    ├── images.js           # R2 圖片網址工具與清單
    └── images.test.js      # 圖片清單與遠端連結檢查
```

- 新增頁面及功能專屬元件、資料、工具時放在對應 `features/<功能>/`，並於 `src/app/router.js` 掛入路由。
- 跨功能共用的程式放在 `shared/`；資料目前與頁面放在一起，有拆分需求時再移至同 feature 的檔案。
- 最新消息實際使用 `features/news/NewsCategoryPage.vue`，學生專欄使用 `features/students/ColumnCategoryPage.vue`；`NewsPage.vue`、`StudentsPage.vue` 為尚未掛入路由的頁面。
- 修改全站樣式或共用元件時，需一併檢查其他使用頁面。

## 驗證與部署相關檔案

- 前端修改後執行 `npm run build`；依專案規則，不需進行瀏覽器或 Playwright 驗證，除非使用者明確要求。
- 目前沒有 test、lint、typecheck npm 腳本；圖片測試使用上述 Node.js 指令，格式可用 `npx prettier --check <檔案>` 檢查。
- `index.html`：網站標題與 SEO 描述
- `public/_redirects`：Cloudflare Pages 舊站轉址與 SPA fallback
- `functions/courses05.js`：已停業內湖分校的 HTTP 410 回應

Vite 的開發與預覽伺服器不執行 Cloudflare Pages Functions 或 `_redirects` 規則。

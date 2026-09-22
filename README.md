# 大昇補習班官網

這是使用 Vue 3 + Vite 建立的大昇補習班官網，使用 Vue Router 提供首頁、分校、課程、最新消息等頁面。文案與資料主要定義於各頁面的 `<script setup>`。

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

- 公開網址及圖片清單集中在 `src/images.js`，R2 object key 以 `assets/` 開頭。
- 新增圖片：上傳至 R2 的對應目錄，並更新 `imagePaths`；頁面使用 `assetUrl("共用/logo.png")` 取得網址。
- 課程目錄維持 `assets/專業課程/<學段>/<課程>/`，分校維持 `assets/分校資訊/<分校>/教室環境/`。改名時同步頁面 folder 映射與課程指定檔名。
- 目前使用 `r2.dev` 開發網址（有流量限制）；正式營運請為 bucket 綁定自訂網域，再修改 `src/images.js` 的 `baseUrl`，保留 `/assets` 路徑。
- 執行 `node --test src/images.test.js` 可驗證所有圖片連結；本機圖片仍存在時也會核對清單及遠端檔案內容。

## 專案重點

- `src/main.js`：應用程式入口，載入路由與全站樣式
- `src/router/index.js`：頁面路由與預設轉址
- `src/App.vue`：共用頁首、頁尾、LINE 浮動連結與路由頁面容器
- `src/pages/HomePage.vue`：首頁內容與資料陣列；其他頁面位於 `src/pages/`
- `src/style.css`：全站視覺樣式與響應式版型
- `index.html`：網站標題與 SEO 描述
- `public/_redirects`：Cloudflare Pages 舊站轉址與 SPA fallback
- `functions/courses05.js`：已停業內湖分校的 HTTP 410 回應

Vite 的開發與預覽伺服器不執行 Cloudflare Pages Functions 或 `_redirects` 規則。

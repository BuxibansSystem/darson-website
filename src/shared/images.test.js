import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { assetUrl, imagePaths, imageModules } from "./images.js";

test("R2 圖片清單完整、網址可讀取，移除本機檔案前核對內容", async () => {
  assert.equal(new Set(imagePaths).size, imagePaths.length);
  assert.equal(Object.keys(imageModules).length, imagePaths.length);
  const localDirectory = new URL("../assets/", import.meta.url);
  const hasLocalImages = existsSync(localDirectory);
  if (hasLocalImages) {
    const files = (await readdir(localDirectory, { recursive: true })).filter(
      (path) => /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(path),
    );
    assert.deepEqual([...files].sort(), [...imagePaths].sort());
  }
  for (const path of imagePaths) {
    const url = assetUrl(path);
    assert.equal(decodeURIComponent(new URL(url).pathname), `/assets/${path}`);
    const response = await fetch(url, {
      method: hasLocalImages ? "GET" : "HEAD",
      signal: AbortSignal.timeout(30000),
    });
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") ?? "", /^image\//, path);
    if (hasLocalImages) {
      const local = await readFile(new URL(path, localDirectory));
      const remote = Buffer.from(await response.arrayBuffer());
      assert.ok(local.equals(remote), `R2 圖片內容與本機不同：${path}`);
    }
  }
});

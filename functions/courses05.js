export function onRequest() {
  return new Response(
    '<!doctype html><html lang="zh-Hant"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>內湖分校已停業｜大昇文理補習班</title><main><h1>內湖分校已停業</h1><p>此分校頁面已永久移除。如需課程或其他分校資訊，請<a href="/contact">聯絡我們</a>。</p></main></html>',
    {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex",
      },
    },
  );
}

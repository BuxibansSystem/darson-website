<script setup>
const newsGroups = [
  {
    id: "elementary",
    title: "國小專區",
    description: "最新國小班招生資訊、課程異動、開班通知，以及各年級學習活動。",
    //["國小秋季班招生開跑", "升私中數學班說明會", "資優數學班開班通知"],
  },
  {
    id: "junior-high",
    title: "國中專區",
    description: "最新國中班招生資訊、段考複習班公告、會考相關資訊與升學動態。",
    //["六升七暑期先修班招生中", "九年級會考 A++ 必勝班說明", "段考複習課程公告"],
  },
  {
    id: "senior-high",
    title: "高中專區",
    description: "最新高中班招生資訊、學測衝刺規劃與各科課程異動。",
    //[
      //"高中學測衝刺班招生中",
      //"高中英文閱讀寫作加強班",
      //"數學、物理、化學專班開課",
    //],
  },
];
</script>
<template>
  <main class="news-page">
    <section class="section news-page-hero">
      <p>LATEST NEWS</p>
      <h1>最新消息——<br />掌握大昇最新動態</h1>
      <strong>最新招生、課程異動與升學資訊，都在這裡。</strong>
    </section>
    <section class="section news-directory">
      <article
        v-for="(group, index) in newsGroups"
        :id="group.id"
        :key="group.id"
        class="news-directory-card"
      >
        <div>
          <span>0{{ index + 1 }}</span>
          <h2>{{ group.title }}</h2>
          <p>{{ group.description }}</p>
        </div>
        <ul v-if="group.items">
          <li v-for="item in group.items" :key="item">
            <a href="#news">{{ item }} <b>→</b></a>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

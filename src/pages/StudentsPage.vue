<script setup>
const columns = [
  {
    id: "learning-methods",
    title: "學習方法",
    description:
      "讀書不是時間堆砌的遊戲，方法對了，事半功倍。收錄教師團隊分享的學習技巧與讀書策略，幫助學生找到最適合自己的學習方式。",
  },
  {
    id: "admissions-strategy",
    title: "升學策略",
    description:
      "面對升學選擇，資訊與策略同樣重要。從會考、學測到志願選填，陪家長與孩子一步步做好準備。",
  },
  {
    id: "parent-education",
    title: "親子教育",
    description:
      "孩子成長的每一段路，都需要理解與陪伴。一起建立更自在的親子溝通，讓學習成為共同前進的旅程。",
  },
];
</script>
<template>
  <main class="column-page">
    <section class="section column-hero">
      <p>DARSON COLUMN</p>
      <h1>大昇專欄</h1>
      <strong>和家長、孩子一起，找到更好的學習方法與方向。</strong>
    </section>
    <section class="section column-grid">
      <article
        v-for="(column, index) in columns"
        :id="column.id"
        :key="column.id"
        class="column-card"
      >
        <span>0{{ index + 1 }}</span>
        <h2>{{ column.title }}</h2>
        <p>{{ column.description }}</p>
        <ul v-if="column.items">
          <li v-for="item in column.items" :key="item">
            <a href="#column">{{ item }} <b>→</b></a>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const columnCategories = {
  "learning-methods": {
    label: "LEARNING METHODS",
    title: "學習方法",
    description:
      "讀書不是時間堆砌的遊戲，方法對了，事半功倍。收錄教師團隊分享的學習技巧與讀書策略，幫助學生找到最適合自己的學習方式。",
    topics: ["建立有效讀書節奏", "錯題整理與複習方法", "考前複習規劃"],
  },
  "admissions-strategy": {
    label: "ADMISSIONS STRATEGY",
    title: "升學策略",
    description:
      "面對升學選擇，資訊與策略同樣重要。從會考、學測到志願選填，陪家長與孩子一步步做好準備。",
    topics: ["會考準備方向", "學測讀書安排", "志願選填重點"],
  },
  "parent-education": {
    label: "PARENT EDUCATION",
    title: "親子教育",
    description:
      "孩子成長的每一段路，都需要理解與陪伴。一起建立更自在的親子溝通，讓學習成為共同前進的旅程。",
    topics: ["陪伴孩子建立學習習慣", "親子溝通練習", "一起面對學習壓力"],
  },
};

const category = computed(() => columnCategories[route.params.columnId]);
</script>

<template>
  <main v-if="category" class="column-page column-category-page">
    <section class="section column-hero">
      <p>{{ category.label }}</p>
      <h1>{{ category.title }}</h1>
      <strong>{{ category.description }}</strong>
    </section>
    <section class="section column-grid column-category-grid">
      <article class="column-card">
        <span>專欄主題</span>
        <h2>{{ category.title }}</h2>
        <p>{{ category.description }}</p>
        <ul>
          <li v-for="topic in category.topics" :key="topic">
            <span>{{ topic }}</span>
            <b aria-hidden="true">→</b>
          </li>
        </ul>
        <RouterLink to="/">返回首頁</RouterLink>
      </article>
    </section>
  </main>
  <main v-else class="column-page column-category-page">
    <section class="section column-hero">
      <h1>找不到這個專欄分類</h1>
      <RouterLink to="/">返回首頁</RouterLink>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const newsCategories = {
  elementary: {
    label: "ELEMENTARY NEWS",
    title: "國小專區",
    description: "最新國小班招生資訊、課程異動、開班通知，以及各年級學習活動。",
    topics: [
      // 每則消息可編輯 title、description 與 image。
      { title: "國小班招生資訊", description: "", image: "" },
      { title: "升私中數學班說明會", description: "", image: "" },
      { title: "資優數學班開班通知", description: "", image: "" },
    ],
  },
  "junior-high": {
    label: "JUNIOR HIGH NEWS",
    title: "國中專區",
    description: "最新國中班招生資訊、段考複習班公告、會考相關資訊與升學動態。",
    topics: [
      { title: "六升七暑期先修班招生中", description: "", image: "" },
      { title: "九年級會考 A++ 必勝班說明", description: "", image: "" },
      { title: "段考複習課程公告", description: "", image: "" },
    ],
  },
  "senior-high": {
    label: "SENIOR HIGH NEWS",
    title: "高中專區",
    description: "最新高中班招生資訊、學測衝刺規劃與各科課程異動。",
    topics: [
      { title: "高中學測衝刺班招生中", description: "", image: "" },
      { title: "高中英文閱讀寫作加強班", description: "", image: "" },
      { title: "數學、物理、化學專班開課", description: "", image: "" },
    ],
  },
};

const category = computed(() => newsCategories[route.params.sectionId]);
</script>

<template>
  <main v-if="category" class="news-page news-category-page">
    <section class="section news-page-hero">
      <p>{{ category.label }}</p>
      <h1>{{ category.title }}</h1>
      <strong>{{ category.description }}</strong>
    </section>
    <section class="section news-directory news-category-directory">
      <article class="news-directory-card">
        <span>NEWS 01</span>
        <h2>最新消息與課程動態</h2>
        <p>{{ category.description }}</p>
        <ul>
          <li v-for="topic in category.topics" :key="topic.title">
            <div class="news-topic-copy">
              <span>{{ topic.title }}</span>
              <p v-if="topic.description">{{ topic.description }}</p>
            </div>
            <img
              v-if="topic.image"
              class="news-topic-image"
              :src="topic.image"
              :alt="topic.title"
            />
            <b aria-hidden="true">→</b>
          </li>
        </ul>
        <RouterLink to="/">返回首頁</RouterLink>
      </article>
    </section>
  </main>
  <main v-else class="news-page news-category-page">
    <section class="section news-page-hero">
      <h1>找不到這個消息分類</h1>
      <RouterLink to="/">返回首頁</RouterLink>
    </section>
  </main>
</template>

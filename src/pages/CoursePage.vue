<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const campaignIds = {
  "升私中數學班": "private-math",
  "資優數學班": "talent-math",
  "六升七暑期先修班": "six-to-seven",
  "九年級會考A++必勝班": "a-plus-plus",
};

const createCourseDetails = (courses, level) =>
  courses.map((name) => ({
    name,
    campaignId: campaignIds[name] ?? null,
    description: `以${name}為核心，透過系統化教學、分層練習與定期追蹤，幫助孩子建立穩固觀念，逐步提升學習表現。`,
    audience: `希望強化${name}能力的${level}學生`,
    features: "觀念講解 × 分層練習 × 定期追蹤",
  }));

const courseDefinitions = {
  elementary: {
    name: "國小課程",
    label: "ELEMENTARY",
    folder: "國小",
    color: "green",
    titleSuffix: "——打好基礎，從現在開始",
    intro:
      "學習的黃金期，就在國小這幾年。大昇國小課程以「建立正確觀念、養成良好習慣」為核心，運用螞蟻式與情境式教學，讓孩子在循序漸進的課堂中扎實成長，為未來的學習競爭預先佈局。",
    scheduleNote: "各班別課表安排依各分校而定，歡迎來電或加入LINE洽詢。",
    details: [
      {
        name: "升私中數學班",
        campaignId: campaignIds["升私中數學班"],
        description:
          "針對升私中所需的數學能力與題型，系統整理關鍵觀念，搭配循序練習與解題策略，幫助孩子建立面對私中入學考的信心。",
        audience: "準備升讀私立國中的國小高年級學生",
        features: "重點觀念 × 題型整理 × 升私中策略",
      },
      {
        name: "資優數學班",
        campaignId: campaignIds["資優數學班"],
        description:
          "從數感、邏輯與多元解題切入，引導孩子挑戰更高層次的數學問題，在扎實基礎上培養靈活思考與解題能力。",
        audience: "喜歡挑戰數學、希望培養高階思維的國小生",
        features: "數感培養 × 邏輯推理 × 高階題型挑戰",
      },
      {
        name: "數學班",
        description:
          "數學不是死記公式，而是訓練邏輯思考的最好工具。大昇國小數學班採用系統化教學架構，從數感培養出發，循序漸進引導學生理解四則運算、分數、幾何等核心概念，搭配超前學習策略，讓孩子在學校數學課永遠從容應對。",
        audience: "數學觀念需要加強、或希望超前學習的國小生",
        features: "概念講解 × 分層練習 × 定期測驗追蹤",
      },
      {
        name: "英文班",
        description:
          "英語學習的最佳時期就是現在。大昇國小英文班從聽說讀寫全面切入，以豐富的教材與互動教學，幫助學生建立扎實的英文基礎。無論孩子是英文初學者或已有基礎，我們都能依程度安排最合適的班級。",
        audience: "英文基礎待建立、或希望強化閱讀與寫作的國小生",
        features: "全方位聽說讀寫 × 分級分班 × 趣味教學法",
      },
    ],
  },
  "junior-high": {
    name: "國中課程",
    label: "JUNIOR HIGH",
    folder: "國中",
    color: "blue",
    titleSuffix: "——全科鞏固，衝刺理想高中",
    intro:
      "國中三年是孩子學習生涯最關鍵的衝刺期。從基礎到資優、從全科到單科，幫助每一位學生在會考中穩定展現真實實力。",
    scheduleNote: "各班別課表安排依各分校而定，歡迎來電或加入LINE洽詢。",
    details: createCourseDetails(
      [
        "六升七暑期先修班",
        "九年級會考A++必勝班",
        "數資班",
        "數A班",
        "數私校班",
        "英資班",
        "英A班",
        "國文班",
        "生物班",
        "理化班",
      ],
      "國中生",
    ),
  },
  "senior-high": {
    name: "高中課程",
    label: "SENIOR HIGH",
    folder: "高中",
    color: "orange",
    titleSuffix: "——衝刺學測、鞏固成績、不走冤枉路",
    intro:
      "高中課業難度倍增，每一分的差距都可能改變志願序。由資深教師主導，針對學測核心考點進行深度訓練。",
    scheduleNote: "各班別課表安排依各分校而定，歡迎來電或加入LINE洽詢。",
    details: createCourseDetails(
      ["數學班", "英文班", "物理班", "化學班"],
      "高中生",
    ),
  },
};

const imageModules = import.meta.glob(
  "../assets/專業課程/*/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const course = computed(() => courseDefinitions[route.params.stageId]);

const courseImages = computed(() => {
  if (!course.value) {
    return [];
  }

  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/專業課程/${course.value.folder}/`))
    .map(([, source]) => source)
    .slice(0, 4);
});
</script>

<template>
  <main v-if="course" class="course-detail-page">
    <section
      class="section course-detail-hero"
      :class="`is-${course.color}`"
      aria-labelledby="course-detail-title"
    >
      <p>COURSE PROGRAMS</p>
      <div class="course-detail-banner">
        <span>{{ course.label }}</span>
        <h1 id="course-detail-title">
          <strong>{{ course.name }}</strong>
          <small>{{ course.titleSuffix }}</small>
        </h1>
      </div>
    </section>

    <section class="section course-detail-section" aria-label="課程介紹">
      <div class="course-detail-layout">
        <div class="course-detail-copy">
          <p class="course-detail-eyebrow">COURSE INFORMATION</p>
          <h2>陪伴每個學習里程碑</h2>
          <p>{{ course.intro }}</p>
        </div>

        <div
          v-if="courseImages.length"
          class="course-detail-gallery"
          :aria-label="`${course.name}課堂照片`"
        >
          <figure v-for="(image, index) in courseImages" :key="image">
            <img :src="image" :alt="`${course.name}課堂照片 ${index + 1}`" />
          </figure>
        </div>
      </div>

      <div class="course-detail-list">
        <p>COURSE CATEGORIES</p>
        <h2>
          {{ course.name }}班別
          <span class="course-title-stars" aria-hidden="true">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </span>
        </h2>
        <p class="course-schedule-note">📅 {{ course.scheduleNote }}</p>
        <div class="course-class-grid">
          <article
            v-for="detail in course.details"
            :key="detail.name"
            :class="{ 'is-linked': detail.campaignId }"
            class="course-class-card"
          >
            <h3 v-if="detail.campaignId">
              <RouterLink
                :to="`/courses/${route.params.stageId}/${detail.campaignId}`"
                >{{ detail.name }}</RouterLink
              >
            </h3>
            <h3 v-else>{{ detail.name }}</h3>
            <p class="course-class-label">班別介紹</p>
            <p>{{ detail.description }}</p>
            <dl>
              <div>
                <dt>適合對象</dt>
                <dd>{{ detail.audience }}</dd>
              </div>
              <div>
                <dt>課程特色</dt>
                <dd>{{ detail.features }}</dd>
              </div>
            </dl>
            <div class="course-class-actions">
              <a
                class="course-class-action course-class-contact"
                href="https://lin.ee/5TCGxoS"
                target="_blank"
                rel="noopener noreferrer"
                >預約免費試聽 <span aria-hidden="true">→</span></a
              >
              <RouterLink
                v-if="detail.campaignId"
                class="course-class-action course-class-page-link"
                :to="`/courses/${route.params.stageId}/${detail.campaignId}`"
              >
                查看課程專頁 <span aria-hidden="true">→</span>
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <main v-else class="course-detail-page course-detail-not-found">
    <section class="section">
      <h1>找不到這個課程頁面</h1>
      <RouterLink to="/courses/elementary">返回專業課程</RouterLink>
    </section>
  </main>
</template>

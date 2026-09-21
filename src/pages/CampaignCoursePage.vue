<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const campaignDefinitions = {
  "private-math": {
    stage: "國小課程",
    stageFolder: "國小",
    folder: "升私中數學",
    label: "ELEMENTARY SPECIAL PROGRAM",
    color: "green",
    name: "升私中數學班",
    headline: "衝刺私立國中入學考，數學是決勝關鍵",
    paragraphs: [
      "私立國中入學考試競爭激烈，數學往往是拉開差距的核心科目。光靠學校教的遠遠不夠——私中考題靈活、題型多變，需要系統性的專項訓練才能在考場上穩定發揮。",
      "大昇升私中數學班深度研析北部各大私中歷屆試題，精準掌握每所學校的出題習慣與難度分布，從基礎觀念到進階應用題系統訓練，讓孩子在考場上看到題目時，第一反應是胸有成竹、從容應對。",
    ],
    highlights: [
      "歷屆私中真題精析，命題方向與出題規律一把抓",
      "應用題解題思路系統訓練，讀懂題意、找對方向",
      "模擬考實戰演練，提前適應考試節奏與時間壓力",
      "定期成績追蹤，備考策略即時調整",
    ],
    audience: "有意報考私立國中的五、六年級學生",
    urgency: "名額有限，立即預約免費諮詢！",
  },
  "talent-math": {
    stage: "國小課程",
    stageFolder: "國小",
    folder: "資優數學",
    label: "ELEMENTARY SPECIAL PROGRAM",
    color: "blue",
    name: "資優數學班",
    headline: "孩子的數學天賦，值得被認真對待",
    paragraphs: [
      "有些孩子天生對數學敏感，思考速度快、解題直覺強——但若長期處於未被挑戰的學習環境，這份天賦很可能悄悄被磨平。",
      "大昇資優數學班，為數學能力超前的孩子特別設計。我們提供超越一般課綱的進階數學內容，從邏輯推理到競賽題型全面訓練，在同質程度的同儕氛圍中，讓孩子的數學潛力被真正看見，並為未來國中數資班的學習提前鋪路。",
    ],
    highlights: [
      "超越課綱的進階數學內容，挑戰真正有深度",
      "數學競賽題型訓練，啟發創意解題與邏輯推理",
      "啟發式教學，培養獨立思考與問題分析能力",
      "同質程度同儕環境，激發持續向上的學習動機",
    ],
    audience: "數學能力優異、有意深化數學素養的國小中高年級生",
    urgency: "為孩子的數學天賦找到對的舞台，立即諮詢！",
  },
  "six-to-seven": {
    stage: "國中課程",
    stageFolder: "國中",
    folder: "六升七先修",
    label: "JUNIOR HIGH SPECIAL PROGRAM",
    color: "blue",
    name: "六升七暑期全科先修班",
    headline: "升國中前的這個暑假，決定孩子國中三年的起跑姿態",
    paragraphs: [
      "國小與國中之間有一道看不見的高牆。許多孩子在國小表現不錯，升上國一後卻發現難度驟升、進度飛快，等到意識到跟不上，往往已落後一大截。",
      "大昇六升七暑期全科先修班，讓孩子在暑假就跑在前面。我們針對國中數學、英文、國文、生物進行系統性預習，讓孩子在開學第一天就對國中學習胸有成竹，以從容自信的姿態面對全新挑戰，而不是手忙腳亂地追趕。",
    ],
    highlights: [
      "國中數學、英文、國文、生物重點觀念提前掌握",
      "精準診斷國小到國中的學習銜接落差",
      "建立良好筆記與自學方法，受用整個國中三年",
      "超前學習策略，讓開學後的每一堂課都更從容",
    ],
    audience: "即將升上國一、希望提前適應國中學習節奏的六年級生",
    urgency: "暑假名額有限，現在預約才搶得到！",
  },
  "a-plus-plus": {
    stage: "國中課程",
    stageFolder: "國中",
    folder: "九年級會考班",
    label: "JUNIOR HIGH SPECIAL PROGRAM",
    color: "green",
    name: "九年級會考A++必勝班",
    headline: "九年級整學年，把國一到國三全部掌握——會考A++必勝班",
    paragraphs: [
      "很多人以為會考拼到最後才需要準備，但頂尖成績靠的從來不是最後幾個月的臨時衝刺，而是一整個九年級學年的系統性積累。",
      "大昇九年級會考A++必勝班，以整學年完整規劃為設計核心。上學期全力推進各科進度，系統性複習國一到國三的全科重點，確保觀念無死角；下學期在持續全科進度與複習課程的同時，加入每週密集模擬考訓練，完整還原學校模擬考的節奏與情境，讓學生在知識與實戰雙軌並行的精實備考下，走進考場時帶的是紮實的實力，而不是運氣。",
    ],
    sections: [
      {
        title: "【上學期】全科系統複習，從國一學到國三一次紮穩",
        body: "以地毯式掃描方式，依序整合國一到國三各科核心考點，建立完整且無缺漏的知識架構。每週搭配周考追蹤個人學習狀況，針對薄弱環節即時補強，確保進入下學期時已全面準備就緒。",
      },
      {
        title: "【下學期】全科進度複習＋每週模擬考，雙軌並行衝刺到底",
        body: "下學期持續推進各科進度與複習課程，學習步伐不停歇；同時從九年級下學期起，每週舉行仿照學校模擬考規格的密集測驗，完整模擬考試題型、時間分配與作答節奏。每次模考後進行詳細成績分析，精準找出尚待強化的弱項，帶著學生一題一題突破盲點，直到走進會考考場那天為止。",
      },
    ],
    highlights: [
      "整學年完整規劃，全科進度貫穿上下學期，不中斷",
      "國一到國三全科考點系統整合，不遺漏任何一個單元",
      "每週周考追蹤，個人弱點即時掌握與補強",
      "下學期全科複習課程與每週密集模擬考雙軌並行",
      "模考後詳細解析，每次都是真實的進步機會",
      "老師定期致電家長，讓備考過程透明、家長放心",
    ],
    audience: "目標會考五科A++、希望用整個九年級學年全力衝刺的國中生",
    urgency: "立即預約，了解完整學年課程規劃！",
  },
};

const imageModules = import.meta.glob(
  "../assets/專業課程/*/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const campaign = computed(() => campaignDefinitions[route.params.courseId]);

const campaignImages = computed(() => {
  if (!campaign.value) return [];

  return Object.entries(imageModules)
    .filter(([path]) =>
      path.includes(
        `/專業課程/${campaign.value.stageFolder}/${campaign.value.folder}/`,
      ),
    )
    .map(([, source]) => source)
    .slice(0, 3);
});
</script>

<template>
  <main v-if="campaign" class="campaign-page">
    <section
      class="section campaign-hero"
      :class="`is-${campaign.color}`"
      aria-labelledby="campaign-title"
    >
      <div class="campaign-hero-inner">
        <div>
          <p class="campaign-eyebrow">{{ campaign.label }}</p>
          <p class="campaign-stage">{{ campaign.stage }}</p>
          <h1 id="campaign-title">{{ campaign.headline }}</h1>
          <strong>{{ campaign.name }}</strong>
        </div>
        <div v-if="campaignImages.length" class="campaign-hero-gallery">
          <figure v-for="image in campaignImages" :key="image">
            <img :src="image" :alt="`${campaign.name}課程照片`" />
          </figure>
        </div>
      </div>
    </section>

    <section class="section campaign-content">
      <div class="campaign-copy">
        <p class="campaign-section-label">COURSE STORY</p>
        <p v-for="paragraph in campaign.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div v-if="campaign.sections" class="campaign-plans">
        <article v-for="section in campaign.sections" :key="section.title">
          <h2>{{ section.title }}</h2>
          <p>{{ section.body }}</p>
        </article>
      </div>

      <div class="campaign-highlights">
        <p class="campaign-section-label">COURSE HIGHLIGHTS</p>
        <ul>
          <li v-for="highlight in campaign.highlights" :key="highlight">
            <span>✓</span>{{ highlight }}
          </li>
        </ul>
      </div>

      <div class="campaign-audience">
        <div>
          <p class="campaign-section-label">WHO IS IT FOR?</p>
          <strong>{{ campaign.audience }}</strong>
        </div>
        <div class="campaign-cta-box">
          <strong>{{ campaign.urgency }}</strong>
          <a
            href="https://lin.ee/5TCGxoS"
            target="_blank"
            rel="noopener noreferrer"
            >立即預約 <span>→</span></a
          >
          <small>或加入官方 LINE：@darson</small>
        </div>
      </div>

      <RouterLink class="campaign-back" :to="`/courses/${campaign.stageFolder === '國小' ? 'elementary' : 'junior-high'}`">
        ← 返回{{ campaign.stage }}
      </RouterLink>
    </section>
  </main>

  <main v-else class="campaign-page campaign-not-found">
    <section class="section">
      <h1>找不到這個課程頁面</h1>
      <RouterLink to="/courses/elementary">返回專業課程</RouterLink>
    </section>
  </main>
</template>

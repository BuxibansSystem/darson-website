<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const reviews = [
  [
    "劉洋睿",
    "孩子在大昇高中部上英文、數學、理化後，成績進步非常明顯！英文從不敢開口到能掌握文法與閱讀技巧；數學老師講解清楚，題型整理很有系統；理化則把觀念講到懂，搭配大量練習，段考與模考分數都穩定提升。老師們負責又會主動回報學習狀況，家長很放心，真心推薦！",
  ],
  [
    "黃秉宥",
    "在這樣優秀的補習班，我的孩子真的進步很大，原本不是很好的成績，現在已是班排前3。",
  ],
  [
    "黃O誠媽媽",
    "幫孩子找了一輪，最後選大昇，補了這陣子真心覺得值得給五顆星。環境乾淨明亮，櫃檯老師也都客氣，孩子說上課不會想睡，這點很難得。這次段考進步了快二十分，雖然不是榜首，但他自己願意唸書了，光這點就夠了。謝謝老師的耐心。",
  ],
  [
    "許育維",
    "以前小學大概前三名，送去大昇以後在附中考了三次第一名了，問孩子怎麼進步那麼多，他說大昇抓題很準！讚！",
  ],
  [
    "Wen Hung Huang",
    "孩子小六上大昇補數學才半年，就考上全台北錄取率最低的靜心國中部（龍年錄取率比平時更低）。最後去唸公立國中，數學第一次段考還是滿分。老師也很認真幫助孩子！",
  ],
  [
    "Pedro Gardea",
    "一開始補數學英文而已，結果孩子每天吵著要去念書，做媽媽的被嚇到了，讀書風氣很不錯。",
  ],
  [
    "Rebecca Shen",
    "謝謝主任耐心教導我女兒的數學，孩子很喜歡主任的講課方式。還有，女兒說生物老師的上課也很活潑很有趣。真心推薦大昇！！",
  ],
  [
    "Peggy WU",
    "孩子升上小六後到大昇專科加強數學，老師教學認真又有耐心，讓孩子逐漸培養出對數學的興趣。這段時間不僅成績穩定進步，也更願意主動學習、分享解題思路，基礎打得更扎實，對未來升國中的銜接幫助很大，真心推薦大昇！",
  ],
  [
    "嫺",
    "老師用心關心孩子，無論是課業上、生活習慣，更重要還有青春期孩子的心態，值得信賴。",
  ],
];

const sections = {
  honors: {
    eyebrow: "HONOR BOARD",
    title: "每一個名字，都是一段努力的故事",
    description:
      "這裡記錄了大昇歷屆學生的傑出成就：考上理想學校、在競賽中脫穎而出、或是突破自我最高紀錄的每一個時刻。我們為每一位大昇的孩子感到驕傲，也希望這些榮耀成為後來者的鼓勵與動力。",
    cards: [
      ["01", "理想學校", "每一份錄取通知，都是長期累積與堅持的成果。"],
      ["02", "競賽突破", "在一次次挑戰裡，孩子看見自己的潛力與可能。"],
      ["03", "超越自己", "不只追求名次，更珍惜每一次比昨天更好的進步。"],
    ],
  },
  "student-stories": {
    eyebrow: "STUDENT STORIES",
    title: "從迷茫到確定，他們的轉變你看見了嗎？",
    description:
      "每個孩子的學習旅程都不一樣。有人從不及格到班上前幾名，有人從討厭數學到愛上解題，有人在大昇找到了方向，也找到了自信。這些故事不是炫耀，而是真實發生在大昇課室裡的改變。",
    cards: [
      [
        "01",
        "從不及格到穩定進步",
        "找到方法、建立習慣，孩子開始相信努力真的會留下痕跡。",
      ],
      [
        "02",
        "從害怕數學到喜歡解題",
        "當觀念被真正理解，學習就不再只是壓力，而是成就感。",
      ],
      [
        "03",
        "在迷惘裡找到方向",
        "老師與家長一起陪伴，讓孩子一步步確認自己的目標。",
      ],
    ],
  },
  "teacher-stories": {
    eyebrow: "TEACHER STORIES",
    title: "站在講台上，我看見了什麼",
    description:
      "大昇的老師不只教書，也在觀察、學習與反思。導師經驗談欄目，由各科教師分享教學現場的真實心得，包括如何引導不同個性的學生、如何處理學習瓶頸，以及那些讓他們深受感動的師生時刻。",
    cards: [
      [
        "01",
        "每個孩子都有自己的節奏",
        "先理解孩子，再找到適合他的引導方式，學習才會真正發生。",
      ],
      [
        "02",
        "錯題裡藏著進步的線索",
        "老師陪學生看懂錯誤，從觀念盲點找出下一步努力的方向。",
      ],
      [
        "03",
        "看見孩子願意再試一次",
        "課堂裡最珍貴的時刻，是孩子從害怕失敗走向願意挑戰。",
      ],
    ],
  },
  "parent-reviews": {
    eyebrow: "PARENT REVIEWS",
    title: "他們說的，比我們說的更真實",
    description:
      "大昇最珍貴的口碑，來自每一位真實家長的親身經歷。以下均為 Google 地圖真實評論，未經修改。",
    reviews,
  },
};

const section = computed(() => sections[route.params.achievementId]);
</script>

<template>
  <main v-if="section" class="achievements-page achievement-subpage">
    <section
      class="section achievements-hero"
      aria-labelledby="achievement-title"
    >
      <p>{{ section.eyebrow }}</p>
      <h1 id="achievement-title">{{ section.title }}</h1>
      <strong>{{ section.description }}</strong>
    </section>

    <section v-if="section.cards" class="section achievement-subpage-content">
      <div class="achievement-content-grid">
        <article
          v-for="card in section.cards"
          :key="card[0]"
          class="achievement-content-card"
        >
          <span>{{ card[0] }}</span>
          <h2>{{ card[1] }}</h2>
          <p>{{ card[2] }}</p>
        </article>
      </div>
    </section>

    <section v-else class="section achievement-testimonials">
      <div class="achievement-page-heading">
        <p>REAL FAMILY REVIEWS</p>
        <h2>每一份肯定，都是我們持續陪伴孩子前進的力量。</h2>
      </div>
      <div class="achievement-review-grid">
        <article
          v-for="review in section.reviews"
          :key="review[0]"
          class="achievement-review-card"
        >
          <div class="testimonial-stars">★★★★★</div>
          <blockquote>{{ review[1] }}</blockquote>
          <footer>{{ review[0] }}</footer>
        </article>
      </div>
    </section>
  </main>

  <main v-else class="achievements-page achievement-not-found">
    <section class="section">
      <h1>找不到這個成果見證頁面</h1>
      <RouterLink to="/achievements/honors">返回成果見證</RouterLink>
    </section>
  </main>
</template>

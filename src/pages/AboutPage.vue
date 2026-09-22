<script setup>
import { assetUrl } from "../images.js";
const foundingImageOne = assetUrl("關於大昇/創辦理念/S__34603031_0.jpg");
const foundingImageTwo = assetUrl("關於大昇/創辦理念/S__34603083_0.jpg");
const teamImageTwo = assetUrl("關於大昇/團隊教學風格/S__34603055_0 (1).jpg");
const teamImageThree = assetUrl("關於大昇/團隊教學風格/S__34603071_0 (1).jpg");
const teamImageFour = assetUrl("關於大昇/團隊教學風格/S__34652247_0 (1).jpg");

const beliefs = [
  "學習是一場長跑，方法對了，每個孩子都能跑得更遠。",
  "品行教育與課業教育並重，成績好不如品學兼優。",
  "最重要的青少年時期，孩子需要的不只是老師，更是陪伴者。",
  "家長是我們的夥伴，開放透明的溝通是我們對每個家庭的承諾。",
];

const teachingStyles = [
  [
    "啟發引導，而非填鴨灌輸",
    "課堂中，老師善用提問、討論與生活實例，引導學生主動推理，讓知識真正內化為能力，而非只是應付考試的短期記憶。",
  ],
  [
    "錯題分析，找出真正的弱點",
    "不只是訂正答案，更要看懂「為什麼錯」。老師針對每位學生的錯誤模式進行系統性分析，從根本解決觀念盲點。",
  ],
  [
    "鼓勵文化，建立學習自信",
    "我們不用負面語言評價學生。課堂氛圍溫暖安全，讓孩子敢於發問、勇於嘗試，在不怕犯錯的環境中快速成長。",
  ],
  [
    "超前學習，課堂從容有餘裕",
    "大昇的進度習慣超前學校課程，讓學生在學校課堂時已有紮實基礎，面對考試時不再慌亂，而是從容地運用所學靈活解題。",
  ],
  [
    "品行教育，全人培育不缺席",
    "我們重視孩子的品格發展，課堂中引導謹言慎行、尊重他人，讓孩子在課業之外也成長為品學兼優的人。",
  ],
  [
    "與家長緊密合作",
    "大昇每週提供周考成績單，讓家長即時掌握孩子的學習狀況；同時定期由老師或主任主動致電，與家長溝通孩子的進步情形與後續學習建議。我們相信，家長與補習班之間的信任與協作，是孩子進步最強大的後盾。",
  ],
];

const foundingImages = [
  { src: foundingImageOne, alt: "老師與學生分享學習成果" },
  { src: foundingImageTwo, alt: "大昇課堂中的師生互動" },
];

const teamImages = [
  { src: teamImageFour, alt: "課堂中的教學引導" },
  { src: teamImageTwo, alt: "學生專注完成課堂練習" },
  { src: teamImageThree, alt: "老師與學生一起討論題目" },
];
</script>

<template>
  <main class="about-page">
    <section class="section about-hero" aria-labelledby="about-title">
      <div class="about-hero-layout">
        <figure class="about-hero-photo about-hero-photo-left">
          <img :src="foundingImages[0].src" :alt="foundingImages[0].alt" />
        </figure>
        <div class="about-hero-copy">
          <p>ABOUT DARSON</p>
          <h1 id="about-title">從一個信念出發——<br />大昇的誕生與使命</h1>
          <strong>每一個孩子，都值得被認真對待。</strong>
        </div>
        <figure class="about-hero-photo about-hero-photo-right">
          <img :src="foundingImages[1].src" :alt="foundingImages[1].alt" />
        </figure>
      </div>
    </section>

    <section class="section belief-section" aria-labelledby="belief-title">
      <div class="about-copy">
        <p class="about-eyebrow">OUR BEGINNING</p>
        <h2 id="belief-title">教育，不只是幫助孩子考高分</h2>
        <p>
          大昇補習班的創立，源於創辦人對台灣補教現場的深刻反思。我們始終相信，教育的意義不只是幫助孩子考高分，而是在孩子最重要的成長階段，給予方向、陪伴與支持。
        </p>
        <blockquote>
          「大昇」二字，承載著我們最深的心願——大家有目共睹，祝千百學子步步高昇。
        </blockquote>
        <p>
          三十年來，大昇陪伴了無數孩子走過學習的高峰與低谷，見證他們從迷惘走向自信，從掙扎走向成就。我們深知這份責任不輕，也正因如此，我們持續進步、持續精進。
        </p>
      </div>
      <div class="about-side">
        <div class="belief-panel">
          <p>OUR CORE BELIEFS</p>
          <h3>我們的核心信念</h3>
          <ol>
            <li v-for="(belief, index) in beliefs" :key="belief">
              <span>{{ String(index + 1).padStart(2, "0") }}</span
              >{{ belief }}
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="section team-section" aria-labelledby="team-title">
      <div class="team-heading">
        <p>OUR TEACHING TEAM</p>
        <h2 id="team-title">認識我們的師資團隊——<br />專業、用心、有溫度</h2>
        <strong
          >大昇的老師，不只是老師，更是孩子學習路上最信賴的陪跑者。</strong
        >
        <span
          >我們的師資團隊由各科資深教師組成，熟悉各階段課綱變化與升學考試趨勢，並長期接受系統性教學培訓，將六大教學特色落實於每一堂課之中。</span
        >
      </div>
      <div class="teaching-style-grid">
        <article
          v-for="(style, index) in teachingStyles"
          :key="style[0]"
          class="teaching-style-card"
        >
          <figure
            v-if="teamImages[index]"
            class="teaching-style-photo"
          >
            <img
              :src="teamImages[index].src"
              :alt="teamImages[index].alt"
            />
          </figure>
          <span>{{ String(index + 1).padStart(2, "0") }}</span>
          <h3>{{ style[0] }}</h3>
          <p>{{ style[1] }}</p>
        </article>
      </div>
    </section>
    <div class="about-grid-spacer" aria-hidden="true"></div>
  </main>
</template>

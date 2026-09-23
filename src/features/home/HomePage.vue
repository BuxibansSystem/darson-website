<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { assetUrl } from "../../shared/images.js";
const carousel0 = assetUrl("首頁/carousel_0.png");
const carousel1 = assetUrl("首頁/carousel_1.jpg");
const carousel2 = assetUrl("首頁/carousel_2.jpg");
const carousel3 = assetUrl("首頁/carousel_3.jpg");
const carousel4 = assetUrl("首頁/carousel_4.jpg");
const carousel5 = assetUrl("首頁/carousel_5.jpg");
const educationStoryImage = assetUrl("首頁/education-story.jpg");
const introductionImage = assetUrl("關於大昇/dason-introduction.jpg");

const heroSlides = [
  { title: "大昇升學榮譽榜", image: carousel0 },
  { title: "課堂實況", image: carousel1 },
  { title: "大昇學習日常", image: carousel2 },
  { title: "校園活動", image: carousel3 },
  { title: "教學現場", image: carousel4 },
  { title: "專注學習", image: carousel5 },
];
const teachingMethods = [
  [
    "螞蟻式教學",
    "一步一腳印，絕不罷休。學習沒有捷徑，大昇老師陪著每位學生紮紮實實地把每個觀念走過一遍，確保基礎穩固，再逐步提升。",
  ],
  [
    "情境式教學",
    "配合生活，融入教學。將抽象的學科知識與實際生活經驗連結，讓學生在理解「為什麼要學」的過程中，自然記住「怎麼學」。",
  ],
  [
    "啟發式教學",
    "摒棄填鴨，因材施教。大昇課堂以引導代替灌輸，根據每位學生的程度與特質，啟發其主動思考，讓理解真正發生。",
  ],
  [
    "宏觀式教學",
    "廣彙考題，宏觀視野。大昇老師持續研析各類考題，幫助學生跳脫單題思維，培養從全局角度看待考試的能力與自信。",
  ],
  [
    "地毯式教學",
    "精編教材，應戰會考。以系統化自編教材為核心，地毯式掃描各單元考點，確保學生在考前不留死角、全面備戰。",
  ],
  [
    "超前式教學",
    "進度超前，靈活解題。比學校進度提前一步，讓學生在課堂上已對內容有所掌握，從容應對，在考試中靈活運用所學。",
  ],
];
const testimonials = [
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
    "幫孩子找了一輪，最後選大昇，補了這陣子真心覺得值得給五顆星。環境乾淨明亮，孩子說上課不會想睡。這次段考進步了快二十分，他自己願意唸書了，光這點就夠了。謝謝老師的耐心。",
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
const courseStages = [
  [
    "ELEMENTARY",
    "國小階段",
    "為孩子建立學科基礎概念，培養良好學習習慣，從小奠定競爭優勢。",
    ["數學班", "英文班", "升私中數學班", "資優數學班"],
  ],
  [
    "JUNIOR HIGH",
    "國中階段",
    "掌握會考關鍵得分策略，全科穩固提升，助攻理想高中。",
    [
      "六升七暑期先修班",
      "數資班",
      "數A班",
      "數私校班",
      "英資班",
      "英A班",
      "國文班",
      "生物班",
      "理化班",
      "九年級會考A++必勝班",
    ],
  ],
  [
    "SENIOR HIGH",
    "高中階段",
    "精準對接學測核心考點，強化邏輯思維與解題能力。",
    ["數學班", "英文班", "物理班", "化學班"],
  ],
];
const campaignCourseIds = {
  "升私中數學班": "elementary/private-math",
  "資優數學班": "elementary/talent-math",
  "六升七暑期先修班": "junior-high/six-to-seven",
  "九年級會考A++必勝班": "junior-high/a-plus-plus",
};
const branches = [
  [
    "明湖分校",
    "國小、國中、高中",
    "02-2631-0572",
    "臺北市內湖區康寧路三段189巷11弄1號2樓",
  ],
  [
    "信義分校",
    "國小、國中、高中",
    "02-6613-0888",
    "臺北市大安區信義路三段202號6樓",
  ],
  ["東湖分校", "國小、國中、高中", "02-7709-5599", "臺北市內湖區東湖路15號2樓"],
  [
    "新莊分校",
    "國小、國中、高中",
    "02-2992-0107",
    "新北市新莊區中正路164號4樓",
  ],
  ["永和分校", "國小、國中、高中", "02-2921-1586", "新北市永和區竹林路64號2樓"],
];
const activeSlide = ref(0);
const testimonialScroller = ref(null);
let carouselTimer;
let isDraggingTestimonials = false;
let testimonialStartX = 0;
let testimonialStartScrollLeft = 0;
const goToSlide = (index) => {
  activeSlide.value = index;
};
function startTestimonialDrag(event) {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  isDraggingTestimonials = true;
  testimonialStartX = event.clientX;
  testimonialStartScrollLeft = event.currentTarget.scrollLeft;
  event.currentTarget.setPointerCapture(event.pointerId);
  event.currentTarget.classList.add("is-dragging");
}
function dragTestimonials(event) {
  if (!isDraggingTestimonials) return;
  event.currentTarget.scrollLeft =
    testimonialStartScrollLeft - (event.clientX - testimonialStartX);
}
function stopTestimonialDrag(event) {
  if (!isDraggingTestimonials) return;
  isDraggingTestimonials = false;
  event.currentTarget.classList.remove("is-dragging");
  if (event.currentTarget.hasPointerCapture(event.pointerId))
    event.currentTarget.releasePointerCapture(event.pointerId);
}
onMounted(() => {
  carouselTimer = window.setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % heroSlides.length;
  }, 5000);
});
onBeforeUnmount(() => window.clearInterval(carouselTimer));
</script>

<template>
  <main id="top" class="home-page">
    <section class="photo-rail" aria-label="大昇校園照片">
      <article
        v-for="(slide, index) in heroSlides"
        :key="slide.title"
        class="photo-card"
        :class="{
          'is-active': index === activeSlide,
          'photo-card-ranking': index === 0,
        }"
      >
        <img :src="slide.image" :alt="slide.title" />
      </article>
      <div class="photo-rail-sparkles" aria-hidden="true">
        <span
          class="photo-star photo-star-six-point photo-star-left-main"
        ></span>
        <span
          class="photo-star photo-star-five-point photo-star-left-small photo-star-left-small-one"
        ></span>
        <span
          class="photo-star photo-star-six-point photo-star-left-small photo-star-left-small-two"
        ></span>
        <span
          class="photo-star photo-star-five-point photo-star-right-main"
        ></span>
        <span
          class="photo-star photo-star-six-point photo-star-right-small"
        ></span>
        <span class="photo-rail-streak photo-rail-streak-accent"></span>
      </div>
      <div class="slider-dots" aria-label="校園照片輪播">
        <button
          v-for="(slide, index) in heroSlides"
          :key="slide.title"
          type="button"
          :class="{ active: index === activeSlide }"
          :aria-label="`顯示第 ${index + 1} 張照片`"
          @click="goToSlide(index)"
        ></button>
      </div>
    </section>
    <section class="achievement-wall">
      <div class="achievement-heading">
        <p>THE DARSON DIFFERENCE</p>
        <h2>三十年深耕，數字見證信任</h2>
      </div>
      <div class="achievement-grid">
        <article class="achievement-card">
          <p class="achievement-value">30＋</p>
          <h3>年</h3>
          <p>深耕雙北，持續精進</p>
        </article>
        <article class="achievement-card">
          <p class="achievement-value">5</p>
          <h3>大分校</h3>
          <p>就近服務，交通便利</p>
        </article>
        <article class="achievement-card">
          <p class="achievement-value is-text">國小・國中・高中</p>
          <h3>全階段教育</h3>
          <p>陪伴每個關鍵學習階段</p>
        </article>
        <article class="achievement-card">
          <p class="achievement-value">千百</p>
          <h3>學子信賴</h3>
          <p>用專業與陪伴成就未來</p>
        </article>
      </div>
    </section>
    <section class="section story-section">
      <div class="story-layout">
        <div class="story-media">
          <img :src="educationStoryImage" alt="老師在課堂中陪伴學生學習" /><span
            class="story-play"
          ></span
          ><span class="story-media-label">DARSON EDUCATION STORY</span>
        </div>
        <div class="story-content">
          <p class="story-eyebrow">OUR EDUCATION STORY</p>
          <h2>看見孩子的可能——<br />大昇的教育故事</h2>
          <p>
            三十年來，大昇始終秉持「做教育」的精神。我們相信每一個孩子都有無限潛力，也相信真正的教育，是在課業之外還能陪伴孩子成為更好的人。這支影片，帶你走進大昇的日常。
          </p>
          <span class="story-rule"></span>
        </div>
      </div>
    </section>
    <section
      class="section introduction-section"
      aria-labelledby="introduction-title"
    >
      <div class="introduction-layout">
        <div class="introduction-content">
          <p class="introduction-eyebrow">ABOUT DARSON</p>
          <h2 id="introduction-title">
            培養孩子的生涯素養，<br />讓孩子擁有有力的翅膀
          </h2>
          <p>
            現代社會競爭激烈——高學歷普及、人工智慧崛起、產業快速變動，孩子的生涯發展面臨比以往更大的挑戰。父母時時擔心：我是否為孩子做得夠多？
          </p>
          <p>
            大昇補習班自創立以來，培育了無數學生考上心目中的理想學校。我們始終相信，真正的教育不只在於成績，更在於幫助孩子從小建立三個面向的生涯素養：
          </p>
          <div class="literacy-grid">
            <article>
              <strong>知識</strong><span>拓展生活經驗，讓孩子知己知彼</span>
            </article>
            <article>
              <strong>技能</strong
              ><span>在日常抉擇與問題解決中培養生涯發展能力</span>
            </article>
            <article>
              <strong>態度</strong
              ><span>啟發孩子關注生涯、擁有追求目標的自信</span>
            </article>
          </div>
          <p>
            在大昇，您可以看到一群充滿教育熱忱且認真負責的老師。我們不只在課業上給予最專業有效的幫助，更注重品行教育，在孩子最重要的青少年時期，給予最多的陪伴、支持與關懷——不只讓孩子在課業上獲得成就感，更讓家長在孩子成長過程中多了一份安全感。
          </p>
        </div>
        <figure class="introduction-image">
          <img :src="introductionImage" alt="大昇老師與學生合照" />
          <figcaption>在大昇，陪伴孩子自信成長。</figcaption>
        </figure>
      </div>
    </section>
    <section class="section news-section">
      <div class="section-heading compact">
        <h2>大昇六大教學特色</h2>
        <p>Teaching features</p>
      </div>
      <div class="news-scroller">
        <article
          v-for="(item, index) in teachingMethods"
          :key="item[0]"
          class="news-card teaching-card"
        >
          <span class="teaching-number">{{
            String(index + 1).padStart(2, "0")
          }}</span>
          <div class="news-body">
            <h3>{{ item[0] }}</h3>
            <p>{{ item[1] }}</p>
          </div>
        </article>
      </div>
    </section>
    <section class="testimonials-section section">
      <div class="section-heading testimonials-heading">
        <p>FAMILY TESTIMONIALS</p>
        <h2>他們說的，比我們說的更真實</h2>
        <strong>每一份肯定，都是我們持續陪伴孩子前進的力量。</strong>
      </div>
      <div
        ref="testimonialScroller"
        class="testimonials-grid"
        aria-label="家長真實推薦，可按住左右拖曳"
        @pointerdown="startTestimonialDrag"
        @pointermove="dragTestimonials"
        @pointerup="stopTestimonialDrag"
        @pointercancel="stopTestimonialDrag"
        @dragstart.prevent
      >
        <article
          v-for="item in testimonials"
          :key="item[0]"
          class="testimonial-card"
        >
          <span class="quote-mark">“</span>
          <div class="testimonial-stars">★★★★★</div>
          <blockquote>{{ item[1] }}</blockquote>
          <footer>{{ item[0] }}</footer>
        </article>
      </div>
    </section>
    <section class="section courses-section">
      <div class="section-heading courses-heading">
        <p>COURSE PROGRAMS</p>
        <h2>全階段專業課程，陪伴每個學習里程碑</h2>
      </div>
      <div class="course-stage-grid">
        <article
          v-for="stage in courseStages"
          :key="stage[1]"
          class="course-stage-card"
        >
          <p>{{ stage[0] }}</p>
          <h3>{{ stage[1] }}</h3>
          <span class="course-divider"></span>
          <p class="course-description">{{ stage[2] }}</p>
          <ul>
            <li v-for="course in stage[3]" :key="course">
              <RouterLink
                v-if="campaignCourseIds[course]"
                :to="`/courses/${campaignCourseIds[course]}`"
                >{{ course }}</RouterLink
              >
              <span v-else>{{ course }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
    <section class="section branches-section">
      <div class="section-heading compact lined">
        <h2>分校資訊</h2>
        <p>就近找到你的大昇</p>
        <strong
          >大昇在雙北設有五所分校，交通便利、環境優質。無論您在哪，都有一間大昇在您身旁。</strong
        >
      </div>
      <div class="branch-grid">
        <article
          v-for="branch in branches"
          :key="branch[0]"
          class="branch-card"
        >
          <div class="branch-content">
            <h3>{{ branch[0] }}</h3>
            <ul>
              <li><span>●</span>{{ branch[1] }}</li>
              <li><span>●</span>{{ branch[2] }}</li>
              <li><span>●</span>{{ branch[3] }}</li>
            </ul>
          </div>
          <a
            href="https://lin.ee/5TCGxoS"
            target="_blank"
            rel="noopener noreferrer"
            >立即聯絡 <span>→</span></a
          >
        </article>
      </div>
    </section>
  </main>
  <a class="top-button" href="#top">TOP</a>
</template>

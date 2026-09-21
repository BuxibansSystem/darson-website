<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const branchDefinitions = {
  minghu: {
    name: "明湖分校",
    titleSuffix: "——大昇的起點，孩子的信任基地",
    folder: "明湖",
    area: "內湖",
    phone: "02-2631-0572",
    address: "臺北市內湖區康寧路三段189巷11弄1號2樓",
    color: "blue",
    description:
      "明湖分校陪伴內湖地區的孩子穩定累積基礎，從國小學習習慣到國高中升學準備，提供清楚、有節奏的學習支持。",
    messageTitle: "大昇的起點，孩子的信任基地",
    directorQuote:
      "明湖是大昇三十餘年來最初紮根的地方，承載著我們最初的夢想與堅持。這裡的每一位老師，都把學生當成自己的孩子一樣用心照顧。我們看著許多孩子從剛入學時的迷茫，到後來自信地站上考場，這些時刻讓我們深深相信，教育的力量是真實存在的。歡迎您帶著孩子來明湖坐坐，讓我們一起為孩子的未來好好規劃。",
    director: "明湖分校 主任",
  },
  xinyi: {
    name: "信義分校",
    titleSuffix: "——在信義，陪伴孩子穩健前進",
    folder: "信義",
    area: "大安",
    phone: "02-6613-0888",
    address: "臺北市大安區信義路三段202號6樓",
    color: "green",
    description:
      "信義分校位於交通便利的大安區，老師以扎實教學與個別關注，陪伴孩子找到適合自己的讀書方法。",
    messageTitle: "在信義，看見孩子一步一步變得更好",
    directorQuote:
      "每個孩子都有自己的節奏與亮點，信義分校的老師會從理解孩子開始，陪他找出適合自己的學習方法。我們重視課堂上的扎實練習，也重視孩子願不願意開口、願不願意再試一次。謝謝每個家庭把孩子交給我們，讓我們一起陪孩子累積實力與自信。",
    director: "信義分校 主任",
  },
  donghu: {
    name: "東湖分校",
    titleSuffix: "——扎實學習，陪孩子走得更遠",
    folder: "東湖",
    area: "內湖",
    phone: "02-7709-5599",
    address: "臺北市內湖區東湖路15號2樓",
    color: "orange",
    description:
      "東湖分校重視孩子的學習節奏與成長信心，透過課堂引導、課後輔導與家長溝通，讓每一步都走得更穩。",
    messageTitle: "陪孩子把每一個觀念學懂、走穩",
    directorQuote:
      "東湖分校一直相信，學習不只是把答案寫對，更是讓孩子在一次次練習中感受到自己做得到。老師會細心觀察每個孩子的狀態，適時給予提醒與鼓勵，也和家長保持清楚的溝通。期待在這裡，陪孩子把基礎打穩，勇敢迎接下一個挑戰。",
    director: "東湖分校 主任",
  },
  xinzhuang: {
    name: "新莊分校",
    titleSuffix: "——在地扎根，陪伴新莊孩子成長",
    folder: "新莊",
    area: "新北",
    phone: "02-2992-0107",
    address: "新北市新莊區中正路164號4樓",
    color: "blue",
    description:
      "新莊分校提供完整的國小、國中與高中課程，陪伴孩子建立觀念、累積實力，從容面對每個升學階段。",
    messageTitle: "從基礎出發，陪孩子累積升學實力",
    directorQuote:
      "新莊分校的每一天，都從關心孩子今天學會了什麼開始。我們用清楚的教學、循序的練習和持續的陪伴，幫助孩子把不熟悉的觀念變成真正的能力。無論是準備段考、會考，或是面對新的學習階段，我們都會和家長一起，為孩子找出最適合的方向。",
    director: "新莊分校 主任",
  },
  yonghe: {
    name: "永和分校",
    titleSuffix: "——在陪伴中，讓孩子看見自己的可能",
    folder: "永和",
    area: "新北",
    phone: "02-2921-1586",
    address: "新北市永和區竹林路64號2樓",
    color: "green",
    description:
      "永和分校以溫暖、穩定的學習環境，陪伴孩子在課業之外培養自律與自信，和家長一起看見進步。",
    messageTitle: "在溫暖的陪伴裡，讓孩子相信自己",
    directorQuote:
      "永和分校希望成為孩子願意走進來、也能安心學習的地方。老師除了教導課本內容，也會留意孩子的情緒與學習習慣，在需要的時候多一點耐心、多一次引導。當孩子開始願意主動學習、願意為目標努力，就是我們最珍惜的成長時刻。",
    director: "永和分校 主任",
  },
};

const imageModules = import.meta.glob(
  "../assets/分校資訊/*/教室環境/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const branch = computed(() => branchDefinitions[route.params.branchId]);

const mapEmbedUrl = computed(() => {
  if (!branch.value) {
    return "";
  }

  return `https://www.google.com/maps?q=${encodeURIComponent(branch.value.address)}&output=embed`;
});

const branchImages = computed(() => {
  if (!branch.value) {
    return [];
  }

  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/分校資訊/${branch.value.folder}/`))
    .map(([, source]) => source);
});
</script>

<template>
  <main v-if="branch" class="branch-detail-page">
    <section
      class="section branch-detail-hero"
      :class="`is-${branch.color}`"
      aria-labelledby="branch-detail-title"
    >
      <p>OUR BRANCH</p>
      <div class="branch-detail-hero-banner">
        <h1 id="branch-detail-title">
          <span>{{ branch.name }}</span>
          <small v-if="branch.titleSuffix">{{ branch.titleSuffix }}</small>
        </h1>
      </div>
    </section>

    <section
      v-if="branch.directorQuote"
      class="section branch-message-section"
      aria-labelledby="branch-message-title"
    >
      <div class="branch-message-sparkles" aria-hidden="true"></div>
      <div class="branch-message-heading">
        <h2 id="branch-message-title">主任的話</h2>
        <p>— {{ branch.messageTitle }}</p>
      </div>
      <blockquote class="branch-message-quote">
        <p>{{ branch.directorQuote }}</p>
        <footer>—— {{ branch.director }}</footer>
      </blockquote>
    </section>

    <section class="section branch-detail-section" aria-label="分校資訊">
      <div class="branch-detail-layout">
        <div class="branch-detail-copy">
          <p class="branch-detail-eyebrow">BRANCH INFORMATION</p>
          <p class="branch-detail-location">
            在{{ branch.area }}，就近找到陪伴孩子成長的大昇。
          </p>
          <p>{{ branch.description }}</p>
          <dl class="branch-detail-info">
            <div>
              <dt>電話</dt>
              <dd>
                <a :href="`tel:${branch.phone.replaceAll('-', '')}`">{{
                  branch.phone
                }}</a>
              </dd>
            </div>
            <div>
              <dt>地址</dt>
              <dd>{{ branch.address }}</dd>
            </div>
            <div>
              <dt>FB粉專</dt>
              <dd>
                <a
                  :href="`https://www.facebook.com/search/pages/?q=${encodeURIComponent(branch.name)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  >前往{{ branch.name }}粉絲專頁</a
                >
              </dd>
            </div>
          </dl>
          <div class="branch-detail-map">
            <iframe
              :src="mapEmbedUrl"
              :title="`${branch.name} Google 地圖`"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            class="branch-detail-contact"
            href="https://lin.ee/5TCGxoS"
            target="_blank"
            rel="noopener noreferrer"
            >立即聯絡 <span>→</span></a
          >
        </div>

        <div
          v-if="branchImages.length"
          class="branch-detail-gallery"
          :aria-label="`${branch.name}教室環境照片`"
        >
          <figure v-for="(image, index) in branchImages" :key="image">
            <img :src="image" :alt="`${branch.name}教室環境 ${index + 1}`" />
          </figure>
        </div>
      </div>
    </section>
  </main>

  <main v-else class="branch-detail-page branch-detail-not-found">
    <section class="section">
      <h1>找不到這所分校</h1>
      <RouterLink to="/branches/minghu">返回分校資訊</RouterLink>
    </section>
  </main>
</template>

<script setup>
const questions = [
  [
    "如何安排試聽？",
    "填寫上方表單或加入LINE後，顧問將根據您的時間安排試聽。試聽完全免費，無任何隱形費用。",
  ],
  [
    "試聽當天會怎麼進行？",
    "試聽流程簡單輕鬆，大致如下：①填寫報名表單或加入LINE留下聯繫方式 → ②顧問致電與您確認孩子的年級、程度與上課需求 → ③安排適合的試聽日期與班別 → ④孩子實際體驗一堂課 → ⑤課後老師給予學習評估建議，顧問同步與家長說明課程規劃。整個過程沒有任何壓力，歡迎家長全程陪同。",
  ],
  [
    "孩子程度較差，適合來大昇嗎？",
    "當然適合！我們會根據孩子的現有程度安排最合適的班級，從基礎重整開始，每一步都走得紮實。",
  ],
  [
    "請假或補課如何處理？",
    "各分校皆有補課機制，請直接洽詢所屬分校主任，我們將盡量安排讓孩子不漏課。",
  ],
  [
    "費用如何計算？",
    "費用依班別、科目與授課時數不同，請來電或填單諮詢，顧問將提供完整的費用說明。",
  ],
  [
    "孩子在大昇上課後沒有進步怎麼辦？",
    "大昇每週提供周考成績單，讓家長第一時間掌握孩子的學習動態；老師或主任也會定期主動致電，與家長一起討論孩子的狀況。若發現進步不如預期，我們會主動安排面談，與家長共同分析原因、調整學習計畫。孩子的進步，是我們最重要的責任。",
  ],
  [
    "大昇和其他補習班有什麼不同？",
    "大昇深耕雙北逾三十年，以六大教學特色為核心，從螞蟻式紮實學習到超前式策略備考，同時重視品行教育，讓孩子不只成績進步，更成為品學兼優的人。這是我們三十年來始終堅持的初衷。",
  ],
];
</script>
<template>
  <main class="contact-page">
    <section class="section contact-hero">
      <p>BOOK A CONSULTATION</p>
      <h1>讓我們好好聊聊，一起為孩子找方向</h1>
      <strong
        >不知道孩子適合哪個班別？想了解課程細節？歡迎填寫下方表單或透過LINE聯繫我們。招生顧問將在收到訊息後24小時內與您聯繫，為您的孩子安排最合適的免費試聽或諮詢服務。</strong
      >
    </section>

    <section
      class="section consultation-form-section"
      aria-labelledby="form-title"
    >
      <div class="consultation-form-intro">
        <p>GOOGLE FORM</p>
        <h2 id="form-title">留下需求，讓我們主動與您聯繫</h2>
        <p>
          請填寫以下資訊，讓我們在最短時間內與您取得聯繫。所有資料僅供安排諮詢使用，我們尊重您的個人隱私。
        </p>
        <div class="consultation-steps">
          <span>01 填寫需求</span>
          <span>02 顧問聯繫</span>
          <span>03 安排試聽</span>
        </div>
      </div>
      <div class="google-form-embed" aria-label="Google 表單嵌入區">
        <div class="google-form-placeholder">
          <span>GOOGLE FORM</span>
          <p>Google 表單將顯示於此</p>
        </div>
      </div>
    </section>

    <section
      id="line"
      class="section consultation-line-section"
      aria-labelledby="line-title"
    >
      <div>
        <p>OFFICIAL LINE</p>
        <h2 id="line-title">
          喜歡即時聯繫？加入大昇官方LINE，直接與我們對話！
        </h2>
        <strong>招生顧問線上即時回覆，讓諮詢更便利。</strong>
      </div>
      <a href="https://lin.ee/5TCGxoS" target="_blank" rel="noopener noreferrer"
        >加入官方LINE @darson <span>→</span></a
      >
    </section>

    <section class="section faq-section">
      <div>
        <p>FAQ</p>
        <h2>常見問題</h2>
      </div>
      <dl>
        <template v-for="question in questions" :key="question[0]"
          ><dt>{{ question[0] }}</dt>
          <dd>{{ question[1] }}</dd></template
        >
      </dl>
    </section>
  </main>
</template>

<script setup>
import { assetUrl } from "../images.js";
const logo = assetUrl("共用/logo.png");

const branches = [
  ["明湖分校", "02-2631-0572", "臺北市內湖區康寧路三段189巷11弄1號2樓"],
  ["信義分校", "02-6613-0888", "臺北市大安區信義路三段202號6樓"],
  ["東湖分校", "02-7709-5599", "臺北市內湖區東湖路15號2樓"],
  ["新莊分校", "02-2992-0107", "新北市新莊區中正路164號4樓"],
  ["永和分校", "02-2921-1586", "新北市永和區竹林路64號2樓"],
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/darson.donghu/",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCl2S84V8-T9ys9s7dIjFV-w",
  },
];
</script>

<template>
  <footer id="contact" class="site-footer">
    <div class="footer-brand">
      <img class="brand-logo" :src="logo" alt="" /><strong
        >大昇文理補習班</strong
      >
    </div>
    <div class="footer-branches">
      <div v-for="branch in branches" :key="branch[0]">
        <strong>{{ branch[0] }}</strong
        ><span>{{ branch[1] }}</span
        ><small>{{ branch[2] }}</small>
      </div>
    </div>
    <nav class="footer-social" aria-label="大昇官方社群">
      <a
        v-for="social in socialLinks"
        :key="social.name"
        class="footer-social-link"
        :href="social.href"
        :aria-label="`前往大昇官方${social.name}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          v-if="social.name === 'Instagram'"
          class="instagram-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.25" />
          <circle class="footer-social-dot" cx="17.4" cy="6.6" r="1.1" />
        </svg>
        <svg
          v-else
          class="youtube-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z"
          />
          <path class="footer-social-play" d="m10 8.6 6 3.4-6 3.4V8.6Z" />
        </svg>
        <span>{{ social.name }}</span>
      </a>
    </nav>
    <p>大昇文理補習班 copyright © 2024 All rights reserved.</p>
  </footer>
</template>

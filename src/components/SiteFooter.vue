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
    <p>大昇文理補習班 copyright © 2024 All rights reserved.</p>
  </footer>
</template>

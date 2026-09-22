<script setup>
import SiteHeader from "../shared/components/SiteHeader.vue";
import SiteFooter from "../shared/components/SiteFooter.vue";
</script>

<template>
  <SiteHeader />
  <RouterView />
  <a
    class="line-float"
    href="https://lin.ee/5TCGxoS"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="加入大昇官方 LINE @darson"
  >
    <span>LINE</span><small>官方帳號</small>
  </a>
  <SiteFooter />
</template>

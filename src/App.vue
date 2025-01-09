<template>
  <div class="animate__animated animate-fadeIn">
    <HeaderUi />
    <RouterView />
    <FooterUi />
  </div>
</template>
<script setup>
import HeaderUi from '@/components/ui/HeaderUi.vue'
import FooterUi from './components/ui/FooterUi.vue'
import 'animate.css'
</script>

<style scoped></style>

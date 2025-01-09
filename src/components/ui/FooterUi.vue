<template>
  <div class="bg-text text-bgColor pt-4">
    <div class="container flex flex-col justify-center items-center text-[12px] text-white">
      <a href="#" class="font-[700]">PRIVACY POLICY</a>
      <a href="#" class="font-[700] mt-2">AYO@AYOMAIROESE.COM</a>
      <div class="flex justify-center items-center gap-x-2 my-2">
        <YouTubeIcon />
        <TwitterIcon />
        <InstagramIcon />
        <FaceBookIcon />
      </div>
      <div class="text-[13px]">© {{ currentDate.getFullYear() }} by AYO MAIRO-ESE.</div>
    </div>
  </div>
</template>

<script setup>
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import FaceBookIcon from '@/components/icons/FaceBookIcon.vue'
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style scoped></style>

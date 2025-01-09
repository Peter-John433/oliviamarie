<template>
  <div class="bg-text text-bgColor pt-4 mb-[4px]">
    <div class="container flex flex-col justify-center items-center text-[12px] text-white">
      <a href="#" class="font-[700]">PRIVACY POLICY</a>
      <a href="#" class="font-[700] mt-2">AYO@AYOMAIROESE.COM</a>
      <div class="flex justify-center items-center gap-x-2 my-2">
        <YouTubeIcon
          width="18"
          height="18"
          color="fill: rgba(0, 0, 0, 1)"
          class="bg-white rounded-full p-[3px]"
        />
        <TwitterIcon
          width="18"
          height="18"
          color="fill: rgba(0, 0, 0, 1)"
          class="bg-white rounded-full p-[3px]"
        />
        <InstagramIcon
          width="18"
          height="18"
          color="fill: rgba(0, 0, 0, 1)"
          class="bg-white rounded-full p-[3px]"
        />
        <FaceBookIcon
          width="18"
          height="18"
          color="fill: rgba(0, 0, 0, 1)"
          class="bg-white rounded-full p-[3px]"
        />
      </div>
      <div class="text-[13px] pb-[4px]">© {{ currentDate.getFullYear() }} by AYO MAIRO-ESE.</div>
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

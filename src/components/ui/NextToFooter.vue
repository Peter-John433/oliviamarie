<template>
  <div>
    <div class="bg-[#D8D8D8] py-10 mb-2">
      <div class="flex justify-center items-center md:gap-x-[10rem]">
        <FaceBookIcon
          width="80"
          height="80"
          color="fill: rgba(0, 0, 0, .2)"
          class="bg-white rounded-full p-[14px]"
        />

        <InstagramIcon
          width="80"
          height="80"
          color="fill: rgba(0, 0, 0, .2)"
          class="bg-white rounded-full p-[14px]"
        />

        <TwitterIcon
          width="80"
          height="80"
          color="fill: rgba(0, 0, 0, .2)"
          class="bg-white rounded-full p-[14px]"
        />

        <YouTubeIcon
          width="80"
          height="80"
          color="fill: rgba(0, 0, 0, .2)"
          class="bg-white rounded-full p-[14px]"
        />
      </div>
      <div
        class="relative md:-bottom-[84%] md:left-0 flex justify-center items-start md:gap-x-[5rem] text-lg text-text text-center font-extralight"
      >
        <div>
          Takes you back to my youth! <br class="hidden md:block" />
          My best and most classic <br class="hidden md:block" />
          content.
        </div>
        <div>
          My biggest platform and <br class="hidden md:block" />
          most resent updates
        </div>
        <div>A direct way to reach me.</div>
        <div>
          My video blog. Come learn <br class="hidden md:block" />
          more!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import FaceBookIcon from '@/components/icons/FaceBookIcon.vue'
</script>

<style scoped></style>

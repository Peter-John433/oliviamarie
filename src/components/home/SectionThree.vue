<template>
  <div>
    <div class="container py-14">
      <div class="text-center text-[50px] text-[#D8D8D8] font-semibold">
        PROFESSIONALISM, CLASS & EXCELLENCE <br />
        THATS WHAT I STAND FOR!
      </div>

      <div class="flex justify-center items-center gap-x-6 gap-y-14 mt-16 flex-wrap">
        <div class="relative">
          <img src="@/assets/imgs/ayorose1.png" class="overflow-hidden" alt="" />
          <div
            class="absolute inset-x-0 bottom-[0%] h-[250px] bg-[#000000] bg-opacity-[0.7] text-white text-[30px] font-semibold flex flex-col gap-y-6 justify-center items-center text-center"
          >
            <div>
              MEDIA <br />
              PERSONALITY
            </div>
            <ButtonUi />
          </div>
        </div>
        <div class="relative">
          <img src="@/assets/imgs/ayorose2.jpg" class="overflow-hidden" alt="" />
          <div
            class="absolute inset-x-0 bottom-[0%] h-[250px] bg-[#000000] bg-opacity-[0.7] text-white text-[30px] font-semibold flex flex-col gap-y-6 justify-center items-center text-center"
          >
            <div>PUBLIC SPEAKING & COMPERE</div>
            <ButtonUi />
          </div>
        </div>
        <div class="relative">
          <img src="@/assets/imgs/ayorose3.png" class="overflow-hidden" alt="" />
          <div
            class="absolute inset-x-0 bottom-[0%] h-[250px] bg-[#000000] bg-opacity-[0.7] text-white text-[30px] font-semibold flex flex-col gap-y-8 justify-center items-center text-center"
          >
            <div>MENTORSHIP</div>
            <ButtonUi />
          </div>
        </div>
        <div class="relative">
          <img src="@/assets/imgs/ayoproj.png" class="overflow-hidden" alt="" />
          <div
            class="absolute inset-x-0 bottom-[0%] h-[250px] bg-[#000000] bg-opacity-[0.7] text-white text-[30px] font-semibold flex flex-col gap-y-8 justify-center items-center text-center"
          >
            <div>AWARDS & EVENTS CATALOGUE</div>
            <ButtonUi />
          </div>
        </div>
        <div class="relative">
          <img src="@/assets/imgs/ayoblog.png" class="overflow-hidden" alt="" />
          <div
            class="absolute inset-x-0 bottom-[0%] h-[250px] bg-[#000000] bg-opacity-[0.7] text-white text-[30px] font-semibold flex flex-col gap-y-8 justify-center items-center text-center"
          >
            <div>BLOG</div>
            <ButtonUi />
          </div>
        </div>
        <div class="relative">
          <img src="@/assets/imgs/ayoaward.png" class="overflow-hidden" alt="" />
          <div
            class="absolute inset-x-0 bottom-[0%] h-[250px] bg-[#000000] bg-opacity-[0.7] text-white text-[30px] font-semibold flex flex-col gap-y-8 justify-center items-center text-center"
          >
            <div>PROJECTS</div>
            <ButtonUi />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonUi from '../buttons/ButtonUi.vue'
</script>

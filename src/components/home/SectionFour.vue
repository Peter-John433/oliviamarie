<template>
  <div>
    <div class="container">
      <div class="text-center text-[50px] text-[#D8D8D8] font-semibold">UPCOMING EVENTS</div>

      <div class="container grid grid-cols-2 mt-2">
        <div class="flex flex-col justify-center items-center gap-y-4 bg-text text-bgColor">
          <a href="#" class="text-[20px] leading-[30px] font-[500]">Public Speaking Open Evening</a>
          <div class="text-bgColor text-[24px] font-[400] leading-[38px] mt-4">
            16 May 2022, 20:00 Online Event
          </div>
          <div class="mt-20">
            <button
              class="text-[16px] leading-[28px] py-2 px-10 font-medium text-text bg-[#E3AAFF]"
            >
              Details
            </button>
          </div>
          <div class="flex justify-center items-center gap-x-6 mt-3">
            <FaceBookIconTwo color="fill: rgba(255, 255, 255, 1)" />
            <TwitterTwo />
            <LinkedinIcon color="fill: rgba(255, 255, 255, 1)" />
          </div>
        </div>
        <div><img src="@/assets/imgs/event.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import FaceBookIconTwo from '../icons/FaceBookIconTwo.vue'
import TwitterTwo from '../icons/TwitterTwo.vue'
</script>

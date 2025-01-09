<template>
  <div class="relative z-30 w-full">
    <div class="container">
      <div class="md:w-[80%] mx-auto relative z-30 md:pb-[16rem]">
        <form class="md:w-[495px] md:h-[572px] bg-bgColor p-10 text-[#000000]">
          <input
            type="text"
            placeholder="First Name"
            class="outline outline-black outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-black text-[15px] h-[60px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-[#000000] bg-[#fcf9f8] hover:bg-white tracking-[1px] md:mb-[18px]"
          />
          <input
            type="text"
            placeholder="Last Name"
            class="outline outline-black outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-black text-[15px] h-[60px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-[#000000] bg-[#fcf9f8] hover:bg-white tracking-[1px] md:mb-[18px]"
          />
          <div class="flex justify-center items-center md:mb-[18px] md:gap-x-[18px]">
            <input
              type="email"
              placeholder="Email"
              class="outline outline-black outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-black text-[15px] h-[60px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-[#000000] bg-[#fcf9f8] hover:bg-white tracking-[1px]"
            />
            <input
              type="text"
              placeholder="Phone"
              class="outline outline-black outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-black text-[15px] h-[60px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-[#000000] bg-[#fcf9f8] hover:bg-white tracking-[1px]"
            />
          </div>
          <textarea
            placeholder="Message"
            class="outline outline-black outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-black text-[15px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-[#000000] bg-[#fcf9f8] hover:bg-[#fc9592] tracking-[1px] resize-none h-[120px] md:mb-[40px]"
          ></textarea>

          <div
            class="text-black text-[15px] leading-[15px] flex justify-start items-center gap-x-5"
          >
            <input type="checkbox" class="w-5 h-5 border-black" />
            <span class="w-[60%]">
              I accept your Privacy Policy
              <a href="#" class="underline">View Privacy Policy.</a></span
            >
          </div>

          <FormButton />
        </form>
        <div
          class="text-[15px] text-text tracking-[1px] font-extralight md:absolute md:bottom-[47%] md:left-[57%]"
        >
          Email :<br />
          <a href="#"> ayo@ayomairoese.com</a>
        </div>
      </div>
    </div>
    <div class="md:h-[538px] w-full bg-[#D8D8D8] inset-x-0 bottom-0 absolute mb-2">
      <div
        class="flex justify-center items-center gap-x-[10rem] my-2 md:absolute md:bottom-[18%] md:transform md:translate-x-1/2 md:left-1/2 md:right-1/2"
      >
        <FaceBookIcon
          width="80"
          height="80"
          color="fill: rgba(0, 0, 0, .2)"
          class="bg-white rounded-full p-[14px]"
        />

        <!-- <span>Takes you back to my youth! My best and most classic content.</span> -->

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
    </div>
  </div>
</template>

<script setup>
import FormButton from '@/components/buttons/FormButton.vue'
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import FaceBookIcon from '@/components/icons/FaceBookIcon.vue'
</script>

<style scoped></style>

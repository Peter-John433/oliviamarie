<template>
  <div>
    <div class="container">
      <div class="container text-center text-[40px] pt-20 text-[#d8d8d8] font-semibold pb-10">
        Event Hosting Catalogue
      </div>
      <div
        class="text-[15px] text-bgColor w-[70%] flex flex-col justify-center items-center mx-auto"
      >
        I love to compere and engage my audience, putting my heart and soul into each project that I
        work on and always striving to build and diversify my portfolio. My artistic outputs result
        from a combination of my experiences, training, and a great deal of preparation. Take a look
        at some of the events I have had the privilege to host. You can contact me to host your
        event using the form below.
        <div>
          <button
            class="text-[15px] mt-10 leading-[21px] py-2 px-8 font-extralight text-text bg-bgColor"
          >
            LET AYO HOST YOUR EVENT
          </button>
        </div>
        <div v-for="item in items" :key="item.id" class="border-b border-white pb-4 mt-20">
          <div class="text-[20px] leading-[28px] font-medium">{{ item.name }}</div>
          <div class="text-[17px] leading-[23.8px] font-extralight">{{ item.date }}</div>
        </div>
      </div>
      <div>
        <div class="container text-center text-[30px] pt-20 text-white font-semibold pb-10">
          LET AYO HOST YOUR EVENT!

          <div
            class="md:w-[80%] mx-auto relative z-30 mb-10 flex flex-col justify-end items-end mt-20"
          >
            <form class="md:w-[412px] text-[#000000]">
              <input
                type="text"
                placeholder="First Name"
                class="outline outline-white outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-white text-[15px] h-[60px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-white text-white bg-[black] hover:bg-[#fc9592] tracking-[1px] md:mb-[18px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                class="outline outline-white outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-white text-[15px] h-[60px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-white text-white bg-[black] hover:bg-[#fc9592] tracking-[1px] md:mb-[18px]"
              />
              <div class="flex justify-center items-center md:mb-[18px] md:gap-x-[18px]">
                <input
                  type="email"
                  placeholder="Email"
                  class="outline outline-white outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-white text-[15px] h-[60px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-white text-white bg-[black] hover:bg-[#fc9592] tracking-[1px] md:mb-[18px]"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  class="outline outline-white outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-white text-[15px] h-[60px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-white text-white bg-[black] hover:bg-[#fc9592] tracking-[1px] md:mb-[18px]"
                />
              </div>
              <textarea
                placeholder="Message"
                class="outline outline-white outline-2 hover:outline-none hover:border-b-[2px] hover:border-b-white text-[15px] h-[60px] block w-full md:py-3 md:px-5 md:leading-[21px] placeholder:text-white text-white bg-[black] hover:bg-[#fc9592] tracking-[1px] md:mb-[18px]"
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

              <button
                class="w-full text-[15px] py-3 text-center text-black bg-white shadow-shadow mt-[40px] tracking-[1px] transition-all duration-500 ease-in-out hover:text-[#fc9592] font-bold"
              >
                Enquire Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 1,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 2,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 3,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 4,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 5,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 6,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 7,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 8,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 9,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 10,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 11,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 12,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 13,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 14,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 15,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 16,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 17,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 18,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 19,
  },
  {
    name: "Host, Nigeria Sovereign Investment Authority's Prize for Innovation DEMO DAY,",
    date: '2023',
    id: 20,
  },
])
</script>

<style scoped></style>

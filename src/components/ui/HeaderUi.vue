<template>
  <div class="bg-bgColor flex justify-start items-center gap-x-10">
    <router-link
      :to="{ name: 'get-in-touch' }"
      class="text-lg bg-text text-bgColor py-5 px-10 text-center flex justify-center items-center leading-[21px] whitespace-nowrap"
    >
      GET INTOUCH
    </router-link>
    <nav>
      <ul
        class="xs:text-[16px] lg:text-[10px] text-text flex justify-center items-center font-[400] leading-[50px] gap-x-[28px] whitespace-nowrap"
      >
        <router-link :to="{ name: 'home' }">HOME</router-link>
        <router-link :to="{ name: 'about' }">ABOUT</router-link>
        <router-link :to="{ name: 'awards' }">AWARDS</router-link>
        <router-link :to="{ name: 'compere-and-public' }">COMPERE AND PUBLIC SPEAKING</router-link>
        <a href="#">MEDIA PERSONALITY</a>
        <a href="#">MENTORSHIP</a>
        <a href="#">PROJECTS</a>
        <a href="#">1+ AND ONE</a>
        <a href="#">MEDIA KIT</a>
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped></style>

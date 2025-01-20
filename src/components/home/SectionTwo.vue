<template>
  <div class="relative h-screen bg-gray-900 text-white overflow-y-auto">
    <!-- Dynamic Fixed Background -->
    <div
      class="fixe inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})`, backgroundPositionY }"
    ></div>

    <!-- Scrolling Foreground Content -->
    <div class="relative z-10">
      <section class="h-screen flex items-center justify-center">
        <h1 class="text-6xl font-bold">Welcome to Parallax</h1>
      </section>

      <section class="h-[100%] flex items-center justify-center">
        <p class="text-xl text-center px-8">
          Parallax scrolling allows you to create a beautiful effect where foreground content
          scrolls over a fixed background. This effect engages users and makes your website visually
          dynamic.
        </p>
      </section>

      <section class="h-screen flex items-center justify-center">
        <h2 class="text-4xl">Keep scrolling for more!</h2>
      </section>
    </div>
  </div>
</template>

<script setup>
import img from '@/assets/imgs/office-lady.jpg'
import { ref, onMounted, onUnmounted } from 'vue'

const backgroundPositionY = ref('50%') // Initial background position
const backgroundImage = img // Replace with your image path

const handleScroll = () => {
  const scrollTop = window.scrollY
  backgroundPositionY.value = `${50 + scrollTop * 0.1}%` // Adjust parallax intensity
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<script setup lang="ts">
const currentSlideIdx = useState<number>('currentSlideIdx')
</script>

<template>
  <div class="relative overflow-hidden w-screen h-screen">
    <transition
      name="fade"
      mode="out-in"
    >
      <AudienceLogin v-if="loginSlide.includes(currentSlideIdx)" />
      <AudienceImagesTindern v-else-if="imageTinderSlide.includes(currentSlideIdx)" />
      <GifVoteSelector v-else-if="voteSlides.includes(currentSlideIdx)" />
      <div v-else class="p-8 w-full h-full flex flex-col gap-4 justify-center items-center">
        <p class="text-lg leading-8 text-center">
          Auf dieser Folie gibt es keine Interaktion.
        </p>
        <p class="text-lg leading-8 text-center">
          Lehn' Dich zurück, lerne 🤓, staune 🌟 und lass Dich inspirieren 💡.
        </p>
      </div>
    </transition>
    <div class="absolute bottom-2 right-2">
      {{ currentSlideIdx + 1 }}
    </div>
  </div>
</template>

<style scoped>

</style>

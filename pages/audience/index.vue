<script setup lang="ts">
const currentSlideIdx = useState<number>('currentSlideIdx')
</script>

<template>
  <div class="relative overflow-hidden w-screen h-screen">
    <transition
      name="fade"
      mode="out-in"
    >
      <AudienceLogin v-if="currentSlideIdx === 7" />
      <AudienceImagesTindern v-else-if="currentSlideIdx === 14" />
      <div v-else-if="noInteractionSlides.includes(currentSlideIdx)" class="p-8 w-full h-full flex flex-col gap-4 justify-center items-center">
        <p class="text-lg leading-8 text-center">
          Auf dieser Folie gibt es keine Interaktion.
        </p>
        <p class="text-lg leading-8 text-center">
          Lehn' Dich zurück, lerne 🤓, staune 🌟 und lass Dich inspirieren 💡.
        </p>
      </div>
      <GifVoteSelector v-else />
    </transition>
    <div class="absolute bottom-2 right-2">
      {{ currentSlideIdx + 1 }}
    </div>
  </div>
</template>

<style scoped>

</style>

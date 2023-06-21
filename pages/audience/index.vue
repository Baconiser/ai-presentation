<script setup lang="ts">
import { noInteractionSlides } from '~/utils/slides'
import TriviaComponent from '~/components/audience/TriviaComponent.vue'

const currentSlideIdx = useState<number>('currentSlideIdx')

definePageMeta({ layout: 'audience' })
</script>

<template>
  <div class="relative overflow-hidden w-screen h-screen bg-stone-900">
    <transition
      name="fade"
      mode="out-in"
    >
      <AudienceLogin v-if="currentSlideIdx === 9" />
      <AudienceImagesTindern v-else-if="currentSlideIdx === 19" />
      <TriviaComponent v-else-if="currentSlideIdx === 36" />
      <div v-else-if="noInteractionSlides.includes(currentSlideIdx)" class="p-8 w-full h-full flex flex-col gap-4 justify-center items-center text-white">
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

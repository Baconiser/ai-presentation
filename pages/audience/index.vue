<script setup lang="ts">
import { coverSlides } from '~/utils/slides'
import CoverStart from '~/components/slides/CoverStart.vue'

const currentSlideIdx = useState<number>('currentSlideIdx')
</script>

<template>
  <div class="relative overflow-hidden w-screen h-screen">
    <transition
      name="fade"
      mode="out-in"
    >
      <AudienceLogin v-if="currentSlideIdx === 0" />
      <CoverStart v-else-if="coverSlides.includes(currentSlideIdx)" />
      <AudienceImagesTindern v-else-if="currentSlideIdx === 9" />
      <GifVoteSelector v-else-if="!coverSlides.includes(currentSlideIdx)" />
      <div v-else>
        Loading...
      </div>
    </transition>
    <div class="absolute bottom-2 right-2">
      {{ currentSlideIdx + 1 }}
    </div>
  </div>
</template>

<style scoped>

</style>

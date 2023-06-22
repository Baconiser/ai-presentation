<script lang="ts" setup>
import { onKeyStroke } from '@vueuse/core'

const steps = ref(-2)
const showPointer = ref(false)
onKeyStroke('q', () => {
  showPointer.value = !showPointer.value
})
</script>

<template>
  <boring-slide>
    <template #content>
      <div
        :class="{'grid-cols-4': showPointer}"
        class="grid grid-cols-3 items-center h-full relative w-full"
        @click="steps < 3 ? steps += 1 : steps === 3"
      >
        <template v-if="showPointer">
          <video src="@/assets/videos/jesus.mp4" loading="lazy" controls />
        </template>
        <template v-if="steps < 3">
          <div class="w-full h-full flex items-center">
            <img v-show="steps > 0" src="@/assets/images/news/papst.jpg">
          </div>
          <div v-if="steps >= 0" class="w-full h-full flex items-center">
            <img class="scale-110 " src="@/assets/images/news/time.jpeg">
          </div>
          <div v-if="steps === -2" class="w-full flex flex-col">
            <audio controls loop>
              <source src="@/assets/audios/epic.mp3">
            </audio>
            <p class="hint">
              Epic intro music with guitar solo by <a href="https://huggingface.co/spaces/facebook/MusicGen" target="_blank">MusicGen</a>
            </p>
          </div>
          <div v-if="steps === -1" class="w-full h-full flex items-center">
            <video src="@/assets/videos/jesusbaby.mp4" loading="lazy" controls />
          </div>
          <div class="w-full h-full flex items-center">
            <img v-show="steps === 2" src="@/assets/images/news/trump.jpeg">
          </div>
        </template>

        <transition name="fade">
          <div v-if="steps === 3" class="col-span-3 w-full h-full flex items-center min-h-0">
            <img src="@/assets/images/news/morph.jpg" class="max-h-full mx-auto">
          </div>
        </transition>
      </div>
    </template>
  </boring-slide>
</template>

<style scoped>

</style>

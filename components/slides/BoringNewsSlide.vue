<script lang="ts" setup>
const steps = ref(-2)
</script>

<template>
  <boring-slide>
    <template #content>
      <div class="grid grid-cols-3 items-center h-full relative w-full" @click="steps < 3 ? steps += 1 : steps === 3">
        <template v-if="steps < 3">
          <div class="w-full h-full flex items-center">
            <img v-show="steps > 0" src="@/assets/images/news/papst.jpg">
          </div>
          <div v-if="steps >= 0" class="w-full h-full flex items-center">
            <img class="scale-110 " src="@/assets/images/news/time.jpeg">
          </div>
          <audio v-if="steps === -2" controls loop class="w-full">
            <source src="@/assets/audios/epic.mp3">
          </audio>
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

<script lang="ts" setup>
const left = ref(false)
const right = ref(false)
</script>

<template>
  <boring-slide>
    <template #content>
      <div class="grid grid-cols-3 items-center h-full relative">
        <div class="w-full h-full flex items-center" @click="left = !left">
          <img v-show="left" src="@/assets/images/news/papst.jpg">
        </div>
        <div class="w-full h-full flex items-center">
          <img class="scale-110 " src="@/assets/images/news/time.jpeg">
        </div>
        <div class="w-full h-full flex items-center" @click="right = !right">
          <img v-show="right" src="@/assets/images/news/trump.jpeg">
        </div>
      </div>
    </template>
  </boring-slide>
</template>

<style scoped>

</style>

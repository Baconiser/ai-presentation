<script setup lang="ts">
const currentSlideIdx = useState('currentSlideIdx')
</script>

<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <AudienceImagesTindern v-if="currentSlideIdx === 8" />
    <GifVoteSelector v-else />
  </transition>
</template>

<style scoped>

</style>

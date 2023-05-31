<script setup lang="ts">
const currentSlideIdx = useState<number>('currentSlideIdx')
</script>

<template>
  <div class="relative">
    <transition
      name="fade"
      mode="out-in"
    >
      <AudienceImagesTindern v-if="currentSlideIdx === 8" />
      <GifVoteSelector v-else />
    </transition>
    <div class="absolute bottom-2 right-2">
      {{ currentSlideIdx + 1 }}
    </div>
  </div>
</template>

<style scoped>

</style>

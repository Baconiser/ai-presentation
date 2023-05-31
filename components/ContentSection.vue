<script setup lang="ts">
const props = defineProps<{
  headline: string,
}>()
</script>

<template>
  <section class="flex flex-col items-center w-full p-8 gap-8">
    <h1
      class="text-2xl font-extrabold md:text-5xl lg:text-6xl shrink-0 flex justify-center items-center"
    >
      {{ headline }}
    </h1>
    <div class="flex flex-col items-center justify-center grow gap-2 w-full content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.content {
  flex: 1 1 auto;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>

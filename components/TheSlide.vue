<script lang="ts" setup>
const props = defineProps({
  isCover: {
    type: Boolean,
    required: false,
    default () {
      return false
    }
  }
})
</script>

<template>
  <div :class="[{'p-8': !isCover}]" class="slide overflow-hidden w-screen h-screen flex justify-center items-center relative">
    <slot />
  </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-12 items-center gap-4 w-11/12 content">
    <div class="col-span-6 poem space-y-8">
      <slot name="poem" />
    </div>
    <div class="col-span-6">
      <slot name="img" />
    </div>
  </div>
</template>

<style scoped>
.poem {
  text-align: left;
  @apply text-3xl;
}
</style>

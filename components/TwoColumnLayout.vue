<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-2 items-center gap-4 w-11/12 content">
    <slot name="left" />
    <slot name="right" />
  </div>
</template>

<style scoped>
.content {
  font-size: 34px;
}
</style>

<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-12 items-center gap-4 w-11/12 content">
    <div class="col-span-9 poem space-y-8">
      <slot name="poem" />
    </div>
    <div class="col-span-3">
      <slot name="img" />
    </div>
  </div>
</template>

<style scoped>
.poem {
  color: #fff;
  font-weight: 100;
  font-size: 40px;
  font-family: operator mono,Courier New,monospace;
  line-height: 1.5;
  text-shadow: 4px 3px 0 rgba(0,0,0,.3);
}
</style>

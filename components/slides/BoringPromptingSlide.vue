<script lang="ts" setup>
import handout from '@/assets/images/boring/handout.jpg'
</script>

<template>
  <BoringSlide
    title="Prompting"
    :src="handout"
  >
    <template #content>
      <div class="space-y-4">
        <p>Good prompting</p>
        <p>Bad prompting</p>
        <p>Expert prompting</p>
      </div>
    </template>
  </BoringSlide>
</template>

<style scoped>

</style>

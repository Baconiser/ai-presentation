<script setup lang="ts">
import bg from '@/assets/images/bg/start.jpeg'
</script>

<template>
  <CoverLayout
    :img="bg"
    headline="Die <div class='hl'>Magie</div> der KI"
  >
    <template #text>
      <img class="w-60 mt-10" loading="lazy" src="@/assets/qrcode.jpg">
    </template>
  </CoverLayout>
</template>

<style scoped></style>

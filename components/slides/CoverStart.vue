<script setup lang="ts">
import bg from '@/assets/images/bg/start.jpeg'
</script>

<template>
  <CoverLayout
    :img="bg"
    headline="Die <div class='hl'>Magie</div> der KI"
  >
    <template #text>
      <div class="flex gap-x-8 mt-10">
        <img class="w-60" loading="lazy" src="@/assets/images/qrcodes/q1.png">
        <img class="w-60" loading="lazy" src="@/assets/images/qrcodes/q2.png">
        <img class="w-60" loading="lazy" src="@/assets/images/qrcodes/q3.png">
        <img class="w-60" loading="lazy" src="@/assets/images/qrcodes/q4.png">
      </div>
    </template>
  </CoverLayout>
</template>

<style scoped></style>

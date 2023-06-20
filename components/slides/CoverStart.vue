<script setup lang="ts">
import bg from '@/assets/images/bg/start.jpeg'

const flip = ref(true)
</script>

<template>
  <CoverLayout
    :img="bg"
    headline="Die <span class='hl'>Magie</span><br>der<br><span class='hl'>generativen</span> KI"
  >
    <template #text>
      <div class="flex gap-x-8 mt-10 items-center" @click="flip = !flip">
        <template v-if="flip">
          <img class="w-96 shrink-0 aspect-square" loading="lazy" src="@/assets/images/qrcodes/q2.png">
          <img class="w-60 shrink-0 aspect-square" loading="lazy" src="@/assets/images/qrcodes/q3.png">
          <img class="w-96 shrink-0 aspect-square" loading="lazy" src="@/assets/images/qrcodes/q4.png">
        </template>
        <template v-else>
          <img class="w-96 shrink-0 aspect-square" loading="lazy" src="@/assets/images/qrcodes/download_qr.png">
        </template>
      </div>
    </template>Î
  </CoverLayout>
</template>

<style scoped></style>

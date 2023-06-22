<script lang="ts" setup>
import machinelearning from '@/assets/images/machinelearning.jpg'
import neuralNetworks from '@/assets/images/img.png'
import meme1 from '@/assets/images/meme1.webp'
import meme2 from '@/assets/images/meme2.jpg'

const idx = ref(0)

function increaseIndex () {
  idx.value = (idx.value +1) % 4
}

</script>
<template>
  <BoringSlide
      title="Neuronale Netze - Beispiel"
  >
    <template #content>
      <div @click="increaseIndex">
        <img :src="machinelearning" alt="" v-if="idx == 0">
        <img :src="neuralNetworks" alt="" v-if="idx == 1">
        <img class="h-full" :src="meme1" alt="" v-if="idx == 2">
        <img :src="meme2" alt="" v-if="idx == 3">
      </div>
    </template>
  </BoringSlide>
</template>

<style scoped>

</style>

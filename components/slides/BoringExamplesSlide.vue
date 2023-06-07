<script lang="ts" setup>
import handout from '@/assets/images/boring/handout.jpg'
const flip = ref(false)
</script>

<template>
  <BoringSlide
    title="Beispiele"
    :src="handout"
  >
    <template #content>
      <template v-if="!flip">
        <div class="space-y-4" @click="flip = !flip">
          <ul>
            <li><p>Siehe Handout</p></li>
          </ul>
        </div>
      </template>
      <template v-else>
        <div class="space-y-4">
          <ul>
            <li><a href="https://vcai.mpi-inf.mpg.de/projects/DragGAN/" target="_blank">https://vcai.mpi-inf.mpg.de/projects/DragGAN/</a></li>
          </ul>
        </div>
      </template>
    </template>
  </BoringSlide>
</template>

<style scoped>

</style>

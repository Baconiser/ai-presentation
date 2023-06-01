<script setup lang="ts">
import { GifIds } from '@/server/store'
import IdUtil from '~/utils/IdUtil'
import ParticleEffect from '~/components/ParticleEffect.vue'

function voteForGif (gifId: string) {
  const userId = IdUtil.getId()
  fetch('/api/vote_gif/', {
    body: JSON.stringify({ userId, gifId }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

const buttonColors = [
  'blue', 'cyan', 'red', 'purple'
]

</script>
<template>
  <div
    class="overflow-hidden w-screen h-screen landscape:grid landscape:grid-cols-2 landscape:grid-rows-2 portrait:flex flex-col p-8 lg:p-12 gap-x-8 gap-y-4 lg:gap-8 relative align-center"
  >
    <template v-for="(key, value, idx) in GifIds" :key="key">
      <button type="button" :class="`card shadow-lg shadow-${buttonColors[idx]}-800/80 active:ring-${buttonColors[idx]}-800 relative`" @click="voteForGif(key)">
        <ParticleEffect />
        <img class="image" :src="`/${key}.webp`">
      </button>
    </template>
  </div>
</template>

<style scoped>
.card {
  @apply max-w-full aspect-[16/11] h-full m-auto overflow-hidden relative rounded-lg focus:outline-none active:ring select-none;
}

.image {
  @apply object-cover object-center h-full w-full;
}
</style>

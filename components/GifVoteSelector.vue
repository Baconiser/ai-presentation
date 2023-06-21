<script setup lang="ts">
import { GifIds } from '@/server/store'
import IdUtil from '~/utils/IdUtil'
import ParticleEffect from '~/components/ParticleEffect.vue'

function voteForGif (gifId: string) {
  const userId = IdUtil.getId()

  useFetch('/api/vote_gif/', {
    body: JSON.stringify({ userId, gifId }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

const idUsernameMap = useState<Record<string, string>>('idUsernameMap')

onMounted(() => {
  const userId = IdUtil.getId()
  const username = idUsernameMap.value[userId]
  if (!username) {
    navigateTo('/audience/login')
  }
})
</script>

<template>
  <div
    class="bg-stone-900 overflow-hidden w-screen h-screen landscape:grid landscape:grid-cols-2 landscape:grid-rows-2 portrait:flex flex-col p-8 lg:p-12 gap-x-8 gap-y-4 lg:gap-8 relative align-center"
  >
    <button type="button" class="card shadow-lg shadow-blue-800/80 active:ring-blue-800 relative" @click="voteForGif(GifIds.boo)">
      <ParticleEffect />
      <img class="image" :src="`/${GifIds.boo}.webp`">
    </button>
    <button type="button" class="card shadow-lg shadow-cyan-800/80 active:ring-cyan-800 relative" @click="voteForGif(GifIds.mindblow)">
      <ParticleEffect />
      <img class="image" :src="`/${GifIds.mindblow}.webp`">
    </button>
    <button type="button" class="card shadow-lg shadow-red-800/80 active:ring-red-800 relative" @click="voteForGif(GifIds.huh)">
      <ParticleEffect />
      <img class="image" :src="`/${GifIds.huh}.webp`">
    </button>
    <button type="button" class="card shadow-lg shadow-purple-800/80 active:ring-purple-800 relative" @click="voteForGif(GifIds.nice)">
      <ParticleEffect />
      <img class="image" :src="`/${GifIds.nice}.webp`">
    </button>
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

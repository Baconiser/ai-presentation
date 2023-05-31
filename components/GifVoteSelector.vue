<script setup lang="ts">
import { GifIds } from '@/server/store'
import IdUtil from '~/utils/IdUtil'
import ParticleEffect from "~/components/ParticleEffect.vue"


function voteForGif(gifId: string) {
  const userId = IdUtil.getId()
  fetch('/api/vote_gif/', {
    body: JSON.stringify({ userId, gifId }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

</script>
<template>
  <div
      class="slide overflow-hidden w-screen
      h-screen flex flex-col relative align-center"
  >
    <div class="w-full grow-1 flex flex-col overflow-hidden">
      <div class="w-full relative">
        <ParticleEffect/>
        <img class="w-full" :src="`/${GifIds.boo}.webp`" @click="voteForGif(GifIds.boo)">
      </div>
      <div class="w-full relative">
        <ParticleEffect/>
        <img class="w-full" :src="`/${GifIds.mindblow}.webp`" @click="voteForGif(GifIds.mindblow)">
      </div>

    </div>
    <div class="w-full flex flex-row overflow-hidden">
      <div class="w-full">
        <ParticleEffect/>
        <img class="h-full max-w-1/2" :src="`/${GifIds.huh}.webp`" @click="voteForGif(GifIds.huh)">
      </div>
      <div class="w-full">
        <ParticleEffect/>
        <img class="h-full max-w-1/2" :src="`/${GifIds.nice}.webp`" @click="voteForGif(GifIds.nice)">
      </div>
    </div>
  </div>
</template>

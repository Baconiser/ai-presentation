<script setup lang="ts">
import { GifIds } from '@/server/store'
import IdUtil from '~/utils/IdUtil'
import ParticleEffect from "~/components/ParticleEffect.vue"


function voteForGif(gifId: string) {
  console.log(gifId, "GIF ID")
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
      <div class="w-full relative" @click="voteForGif(GifIds.boo)">
        <ParticleEffect/>
        <img class="w-full  relative" :src="`/${GifIds.boo}.webp`" >
      </div>
      <div class="w-full relative"  @click="voteForGif(GifIds.mindblow)">
        <ParticleEffect/>
        <img class="w-full  relative" :src="`/${GifIds.mindblow}.webp`">
      </div>
    </div>
    <div class="w-full flex flex-row overflow-hidden">
      <div class="w-full  relative" @click="voteForGif(GifIds.huh)">
        <ParticleEffect/>
        <img class="h-full max-w-1/2" :src="`/${GifIds.huh}.webp`" >
      </div>
      <div class="w-full relative"  @click="voteForGif(GifIds.nice)">
        <ParticleEffect/>
        <img class="h-full max-w-1/2" :src="`/${GifIds.nice}.webp`">
      </div>
    </div>
  </div>
</template>

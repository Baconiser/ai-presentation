<script lang="ts" setup>
import { GifVote } from '~/server/store'

const votedGifs:Ref<GifVote[]> = useState('votedGifs')

const currentSlideIdx:Ref<number> = useState('currentSlideIdx')
const votedGifIds = computed(() => {
  return new Set(votedGifs.value.filter(e => e.slideId === currentSlideIdx.value).map((gifVote: any) => {
    return gifVote.gifId
  }))
})

function getGifVoteCount (gifId: string) {
  return votedGifs.value.filter(e => e.slideId === currentSlideIdx.value).filter((gifVote: any) => {
    return gifVote.gifId === gifId
  }).length
}
</script>

<template>
  <article
    class="slide overflow-hidden w-screen h-screen flex flex-col justify-center items-center relative"
  >
    <div class="grow flex min-h-0 w-full">
      <slot />
    </div>
    <footer v-if="voteSlides.includes(currentSlideIdx)" class="shrink-0 w-[66vw] h-[100px] z-10 mb-4 flex justify-around">
      <div v-for="(gif, index) in votedGifIds" :key="index" class="gif relative flex align-center justify-center rounded-lg overflow-hidden aspect-[16/11]">
        <span
          class="jello-horizontal counter absolute top-0 left-0
        z-10 drop-shadow text-5xl flex items-center justify-center w-full h-full"
        >{{ getGifVoteCount(gif) }}x</span>
        <img :key="getGifVoteCount(gif)" :src="`/${gif}.webp`" class="jello-horizontal object-cover object-center w-full h-full">
      </div>
    </footer>

    <div class="absolute bottom-2 right-2">
      {{ currentSlideIdx + 1 }}
    </div>
  </article>
</template>

<style scoped>

.counter {
  text-shadow: 5px 5px 0 rgba(0,0,0,0.3);
  -webkit-text-stroke: 2px rgba(0, 0, 0, 0.29);
  background: -webkit-linear-gradient(rgba(255,59,101,.3),transparent);
  -webkit-background-clip: text;
}

.jello-horizontal {
  animation: jello-horizontal 0.9s ease-out both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

</style>

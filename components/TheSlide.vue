<script lang="ts" setup>
const votedGifs = useState<string[]>('votedGifs')
const votedGifIds = computed(() => {
  return new Set(votedGifs.value.map((gifVote: any) => {
    return gifVote.gifId
  }))
})

function getGifVoteCount (gifId: string) {
  return votedGifs.value.filter((gifVote: any) => {
    return gifVote.gifId === gifId
  }).length
}

</script>

<template>
  <div
    class="slide overflow-hidden w-screen h-screen flex flex-col justify-center items-center relative"
  >
    <slot />
    <div class="fixed bottom-0 w-[66vw] h-[150px] z-10 grid grid-cols-4">
      <div v-for="(gif, index) in 4" :key="index" class="flex flex-col items-center justify-center">
        <span>{{ getGifVoteCount(gif) }}x</span>
        <img :src="`/${gif}.webp`">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

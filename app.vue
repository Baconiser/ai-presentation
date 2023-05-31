<script setup lang="ts">
const data = reactive({ votes: [], gif_votes: [], currentSlideIdx: 0 })
const currentSlideIdx = useState('currentSlideIdx', () => data.currentSlideIdx)
const votedGifs = useState('votedGifs', () => [])
onMounted(() => {
  if (process.client) {
    const event = new EventSource('/api/connect')

    event.addEventListener('message', (e) => {
      const parsedData = JSON.parse(e.data)
      data.gif_votes = parsedData.gif_votes
      data.votes = parsedData.votes
      data.currentSlideIdx = parsedData.currentSlideIdx
      currentSlideIdx.value = data.currentSlideIdx
      votedGifs.value = data.gif_votes
    })
  }
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
</style>

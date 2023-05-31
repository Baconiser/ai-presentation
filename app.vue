<script setup lang="ts">
const data = reactive({
  votes: [],
  gif_votes: [],
  currentSlideIdx: 0
})
const currentSlideIdx = useState('currentSlideIdx', () => data.currentSlideIdx)
const votedGifs = useState('votedGifs', () => [])
const tinderVotes = useState('tinderVotes', () => [])

const { data: state } = await useFetch<{ votes: [], gif_votes: [], currentSlideIdx: 0 }>('/api/get_state/')
if (state.value) {
  updateState(state.value)
}

onMounted(() => {
  if (process.client) {
    console.log('Connecting to event source')
    const event = new EventSource('/api/connect')

    event.addEventListener('message', (e) => {
      const parsedData = JSON.parse(e.data)
      updateState(parsedData)
    })
  }
})

function updateState (state: any) {
  data.gif_votes = state.gif_votes
  data.votes = state.votes
  data.currentSlideIdx = state.currentSlideIdx
  currentSlideIdx.value = state.currentSlideIdx
  votedGifs.value = state.gif_votes
  tinderVotes.value = state.votes
}

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

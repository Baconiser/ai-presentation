<script setup lang="ts">
import { User } from '~/server/store'

const data = reactive({
  votes: [],
  gif_votes: [],
  currentSlideIdx: 0
})
const currentSlideIdx = useState('currentSlideIdx', () => data.currentSlideIdx)
const votedGifs = useState('votedGifs', () => [])
const tinderVotes = useState('tinderVotes', () => [])
const triviaAnswers = useState('triviaAnswers', () => [])
const idUsernameMap = useState<Record<string, string>>('idUsernameMap', () => ({}))
const poemName = useState<string|null>('poemName', () => null)
const poemText = useState<string|null>('poemText', () => null)

const { data: state } = await useFetch<{ votes: [], gif_votes: [], currentSlideIdx: 0 }>('/api/get_state/')
if (state.value) {
  updateState(state.value)
}

onMounted(() => {
  if (process.client) {
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
  triviaAnswers.value = state.triviaAnswers
  poemName.value = state.poemName
  poemText.value = state.poemText

  const idMap: Record<string, string> = {}
  state.users.forEach(({
    id,
    name
  }: User) => {
    idMap[id] = name
  })
  idUsernameMap.value = idMap
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
.page-enter-from,
.page-leave-to {
  filter: blur(12px);
}
</style>

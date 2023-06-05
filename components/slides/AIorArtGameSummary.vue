<script setup lang="ts">
import { Vote } from '~/server/store'
import ai1 from '@/assets/images/quiz/ai/Bild1.png'
import ai2 from '@/assets/images/quiz/ai/Bild3.png'
import ai3 from '@/assets/images/quiz/ai/Bild5.png'

import ar1 from '@/assets/images/quiz/artist/1.jpg'
import ar2 from '@/assets/images/quiz/artist/Bild2.jpg'
import ar3 from '@/assets/images/quiz/artist/Bild4.jpg'
import ar4 from '@/assets/images/quiz/artist/Bild6.jpg'

const images = [ai1, ar1, ar2, ai2, ai3, ar3, ar4]
const aiList = [
  { id: ai1, ai: true },
  { id: ar1, ai: false },
  { id: ar2, ai: false },
  { id: ai2, ai: true },
  { id: ai3, ai: true },
  { id: ar3, ai: false },
  { id: ar4, ai: false }
]

const tinderVotes = useState<Vote[]>('tinderVotes')

const isAI = (id: string) => {
  return aiList.find(item => item.id === id)?.ai
}

const constVotesForId = (id: string) => {
  return tinderVotes.value.filter(vote => vote.id === id)
}

const countAiVotes = (votes: any[]) => {
  return votes.filter((vote: any) => vote.vote === 'AI')
}

const countArtistVotes = (votes: any[]) => {
  return votes.filter((vote: any) => vote.vote === 'Artist')
}

const aiPercentage = (id: string):number => {
  const votes = constVotesForId(id)
  const aiVotes = countAiVotes(votes)
  return Math.round(((aiVotes.length / votes.length) || 0) * 100)
}

const artistPercentage = (id: string): number => {
  const votes = constVotesForId(id)
  const artistVotes = countArtistVotes(votes)
  return Math.round(((artistVotes.length / votes.length) || 0) * 100)
}

const data = computed(() => {
  return tinderVotes.value
})

function calculateCorrect (votes, aiList) {
  let correctCount = 0

  votes.forEach((vote) => {
    const aiInfo = aiList.find(ai => ai.id === vote.id)

    if (aiInfo && ((vote.vote === 'AI' && aiInfo.ai) || (vote.vote === 'Artist' && !aiInfo.ai))) {
      console.log(vote, aiInfo)
      correctCount++
    }
  })

  return ((correctCount / votes.length) * 100).toFixed(2)
}

function calculateFailure (votes, aiList) {
  let aiFailureCount = 0
  let artistFailureCount = 0

  votes.forEach((vote) => {
    const aiInfo = aiList.find(ai => ai.id === vote.id)

    if (aiInfo && ((vote.vote === 'AI' && !aiInfo.ai) || (vote.vote === 'Artist' && aiInfo.ai))) {
      if (aiInfo.ai) {
        artistFailureCount++
      } else {
        aiFailureCount++
      }
    }
  })

  return `${aiFailureCount > artistFailureCount ? '🤖 AI' : '🎨 Artist'} geklickt, obwohl es ein Bild von ${aiFailureCount < artistFailureCount ? '🤖 AI' : '🎨 Artist'} war`
}

function calculateMostAndLeastCorrectImages (votes, aiList) {
  if (votes.length === 0 || aiList.length === 0) {
    return
  }
  const correctCountMap = {}
  const incorrectCountMap = {}

  votes.forEach((vote) => {
    const aiInfo = aiList.find(ai => ai.id === vote.id)

    if (aiInfo) {
      if ((vote.vote === 'AI' && aiInfo.ai) || (vote.vote === 'Artist' && !aiInfo.ai)) {
        correctCountMap[vote.id] = (correctCountMap[vote.id] || 0) + 1
      } else {
        incorrectCountMap[vote.id] = (incorrectCountMap[vote.id] || 0) + 1
      }
    }
  })

  const mostCorrectImage = Object.keys(correctCountMap).reduce((a, b) => correctCountMap[a] > correctCountMap[b] ? a : b)
  const leastCorrectImage = Object.keys(incorrectCountMap).reduce((a, b) => incorrectCountMap[a] > incorrectCountMap[b] ? a : b)

  return { mostCorrectImage, leastCorrectImage }
}

</script>

<template>
  <section class="p-8 w-full">
    <div class="">
      <p class="text-2xl">
        Insgesamt richtig abgestimmt bei: {{ calculateCorrect(tinderVotes, aiList) }}
      </p>
      <p class="text-2xl">
        Öfter {{ calculateFailure(tinderVotes,aiList) }}
      </p>
      <p class="text-2xl">
        {{ calculateMostAndLeastCorrectImages(tinderVotes,aiList) }}
      </p>
    </div>
    <div class="grid grid-cols-6 gap-6">
      <div v-for="content in images" :key="content" class="flex flex-col gap-4 items-center">
        <p class="text-2xl">
          {{ isAI(content) ? "🤖" :"🎨" }}
        </p>
        <img :src="content" alt="Content" class="w-60 aspect-[1/1] object-cover">
        <pie-chart :ai="aiPercentage(content)" :artist="artistPercentage(content)" :is-ai="isAI(content)" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>

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
</script>

<template>
  <section class="p-8 w-full">
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

<script setup lang="ts">
import { Vote } from '~/server/store'
import { images, AiOrArt } from '~/utils/aiOrArt'

const tinderVotes = useState<Vote[]>('tinderVotes')

const isAI = (img: AiOrArt) => {
  return img.type === 'AI'
}

const constVotesForId = (id: string) => {
  return tinderVotes.value.filter(vote => vote.id === id)
}

const countAiVotes = (votes: Vote[]) => {
  return votes.filter((vote: Vote) => vote.vote === 'AI')
}

const countArtistVotes = (votes: Vote[]) => {
  return votes.filter((vote: Vote) => vote.vote === 'Artist')
}

const aiPercentage = (id: AiOrArt): number => {
  const votes = constVotesForId(id.image)
  const aiVotes = countAiVotes(votes)
  return Math.round(((aiVotes.length / votes.length) || 0) * 100)
}

const artistPercentage = (id: AiOrArt): number => {
  const votes = constVotesForId(id.image)
  const artistVotes = countArtistVotes(votes)
  return Math.round(((artistVotes.length / votes.length) || 0) * 100)
}
</script>

<template>
  <section class="p-8 w-full">
    <div class="grid grid-cols-6 gap-6">
      <div v-for="content in images" :key="content.image" class="flex flex-col gap-4 items-center">
        <p class="text-2xl">
          {{ isAI(content) ? '🤖' : '🎨' }}
        </p>
        <img :src="content.image" alt="Content" class="w-60 aspect-[1/1] object-cover">
        <pie-chart :ai="aiPercentage(content)" :artist="artistPercentage(content)" :is-ai="isAI(content)"/>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

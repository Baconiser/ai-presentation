<script setup lang="ts">
import { Vote } from '~/server/store'
import { images, AiOrArt } from '~/utils/aiOrArt'

const tinderVotes = useState<Vote[]>('tinderVotes')

const constVotesForId = (id: string) => {
  return tinderVotes.value.filter(vote => vote.id === id)
}

const countAiVotes = (votes: Vote[]) => {
  return votes.filter((vote: Vote) => vote.vote === 'AI')
}

const countArtistVotes = (votes: Vote[]) => {
  return votes.filter((vote: Vote) => vote.vote === 'Artist')
}

const aiPercentage = (id: string): number => {
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
  <boring-slide>
    <template #content>
      <div class="grid grid-cols-6 gap-6">
        <div v-for="content in images" :key="content.image" class="flex flex-col gap-4 items-center">
          <p class="text-2xl">
            {{ content.type === 'AI' ? '🤖' : '🎨' }}
          </p>
          <img :src="content.image" alt="Content" class="w-60 aspect-[1/1] object-cover">
          <pie-chart :ai="aiPercentage(content.image)" :artist="artistPercentage(content.image)" :is-ai="content.type === 'AI'" />
        </div>
      </div>
    </template>
  </boring-slide>
</template>

<style scoped></style>

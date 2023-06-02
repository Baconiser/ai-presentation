<script setup lang="ts">
import { Vote } from '~/server/store'
import AIDali from '@/assets/images/ai-dali.jpeg'
import Dali from '@/assets/images/dali.jpg'

const tinderVotes = useState<Vote[]>('tinderVotes')

const aiVotes = computed(() => {
  return tinderVotes.value.filter((vote: any) => vote.vote === 'AI')
})

const artistVotes = computed(() => {
  return tinderVotes.value.filter((vote: any) => vote.vote === 'Artist')
})

const aiPercentage = computed(() => {
  return Math.round(((aiVotes.value.length / tinderVotes.value.length) || 0) * 100)
})

const artistPercentage = computed(() => {
  return Math.round(((artistVotes.value.length / tinderVotes.value.length) || 0) * 100)
})

</script>

<template>
  <div class="split__container absolute w-full h-full t-0 l-0 flex justify-evenly">
    <div class="side grow-1 w-full relative">
      <h1
        class="text-2xl font-extrabold md:text-5xl lg:text-6xl shrink-0 flex justify-center "
      >
        🤖 <span class="text-red-800">AI</span>rtist
      </h1>
      <div
        class="progress origin-bottom-left transition-all absolute bg-center bg-no-repeat bg-cover bottom-0 left-0 w-full h-full"
        :style="{maxHeight: `${aiPercentage}vh`, backgroundImage: `url(${AIDali}`}"
      />
    </div>
    <div class="divider w-2 bg-white" />
    <div class="side grow-1 w-full relative">
      <h1
        class="text-2xl font-extrabold md:text-5xl lg:text-6xl shrink-0 flex justify-center "
      >
        🎨 Artist
      </h1>
      <div
        class="progress origin-bottom-left
      transition-all absolute
      bg-center
      bg-no-repeat
      bg-cover
      bottom-0 left-0 w-full h-full"
        :style="{maxHeight: `${artistPercentage}vh`, backgroundImage: `url(${Dali}`}"
      />
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { Vote } from '~/server/store'

const tinderVotes = useState<Vote[]>('tinderVotes')

const aiVotes = computed(()=>{
  return tinderVotes.value.filter((vote: any) => vote.vote === 'AI')
})

const artistVotes = computed(()=>{
  return tinderVotes.value.filter((vote: any) => vote.vote === 'Artist')
})

const aiPercentage = computed(()=>{
  return Math.round(((aiVotes.value.length / tinderVotes.value.length)||0) * 100)
})

const artistPercentage = computed(()=>{
  return Math.round(((artistVotes.value.length / tinderVotes.value.length)||0) * 100)
})

</script>

<template>
  <div class="split__container absolute w-full h-full t-0 l-0 flex justify-evenly">
    <div class="side grow-1 w-full  relative">
      AIrtist
      <div class="progress origin-bottom-left
      transition-all absolute
      bg-center
      bg-no-repeat
      bg-cover
      bg-center
      bottom-0 left-0 w-full h-full"
           style="background-image: url('/ai.png')"
           :style="{maxHeight: `${aiPercentage}vh`}"></div>
    </div>
    <div class="divider w-2 bg-white" />
    <div class="side grow-1 w-full relative">
      Artist
      <div class="progress origin-bottom-left
      transition-all absolute
      bg-center
      bg-no-repeat
      bg-cover
      bg-center
      bottom-0 left-0 w-full h-full"
           style="background-image: url('/dali.jpg')"
           :style="{maxHeight: `${artistPercentage}vh`}"></div>
    </div>
  </div>
</template>

<style scoped></style>

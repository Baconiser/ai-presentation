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

const energetic = ref<HTMLAudioElement | null>(null)
const bach = ref<HTMLAudioElement | null>(null)

watch([artistPercentage, aiPercentage], () => {
  if (!bach.value || !energetic.value) { return }
  if (aiPercentage.value >= artistPercentage.value) {
    bach.value.pause()
    energetic.value.play()
  } else {
    bach.value.play()
    energetic.value.pause()
  }
})
</script>

<template>
  <boring-slide>
    <template #content>
      <div class="split__container absolute -mx-16 -my-12 w-full h-full t-0 l-0 flex justify-evenly">
        <div class="side flex-1 w-full relative">
          <h1
            class="text-2xl text-black font-extrabold md:text-5xl lg:text-6xl shrink-0 flex justify-center "
          >
            🤖 <span class="text-red-800">AI</span>rtist
          </h1>
          <audio ref="energetic" controls loop class="w-full">
            <source src="@/assets/audios/loop-energetic.mp3">
          </audio>
          <div
            class="progress origin-bottom-left transition-all absolute bg-center bg-no-repeat bg-cover bottom-0 left-0 w-full h-full"
            :style="{maxHeight: `${aiPercentage}vh`, backgroundImage: `url(${AIDali})`}"
          />
        </div>
        <div class="divider w-2 bg-white" />
        <div class="side flex-1 w-full relative">
          <h1
            class="text-2xl text-black font-extrabold md:text-5xl lg:text-6xl shrink-0 flex justify-center "
          >
            🎨 Artist
          </h1>
          <audio ref="bach" controls loop class="w-full">
            <source src="@/assets/audios/loop-bach.mp3">
          </audio>
          <div
            class="progress origin-bottom-left
      transition-all absolute
      bg-center
      bg-no-repeat
      bg-cover
      bottom-0 left-0 w-full h-full"
            :style="{maxHeight: `${artistPercentage}vh`, backgroundImage: `url(${Dali})`}"
          />
        </div>
      </div>
    </template>
  </boring-slide>
</template>

<style scoped></style>

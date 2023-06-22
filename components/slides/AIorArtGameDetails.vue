<script setup lang="ts">
import { Vote } from '~/server/store'

const tinderVotes = useState<Vote[]>('tinderVotes')
const idUsernameMap = useState<Record<string, string>>('idUsernameMap', () => ({}))

const correctVotes = computed(() => {
  const correctVotes = tinderVotes.value.filter(e => e.correct)
  const correctCount = correctVotes.length
  const votes = tinderVotes.value.length

  return {
    correctCount,
    votes,
    percentage: ((correctCount / votes) * 100).toFixed(2)
  }
})

const incorrectVotes = computed(() => {
  const correctAi = tinderVotes.value.filter(e => e.correct && e.vote == 'AI')
  const correctArtist = tinderVotes.value.filter(e => e.correct && e.vote == 'Artist')

  const correctAiLength = correctAi.length
  const correctArtistLength = correctArtist.length

  if (correctAiLength === correctArtistLength) {
    return 'Es steht unentschieden. Die KI hat gewonnen. '
  }

  return `Öfter ${correctArtistLength > correctAiLength ? '🤖 AI' : '🎨 Artist'} geklickt, obwohl es ein Bild von ${correctAiLength > correctArtistLength ? '🤖 AI' : '🎨 Artist'} war`
})

const userRanking = computed(() => {
  const userRanking: Record<string, {correct: number, incorrect: number}> = {}

  tinderVotes.value.forEach((vote) => {
    if (!userRanking[vote.userId]) {
      userRanking[vote.userId] = {
        correct: 0,
        incorrect: 0
      }
    }

    if (vote.correct) {
      userRanking[vote.userId].correct++
    } else {
      userRanking[vote.userId].incorrect++
    }
  })

  return Object.keys(userRanking)
    .map(userId => ({ userId, ...userRanking[userId] }))
    .sort((a, b) => b.correct - a.correct)
})

const mostAndLeastCorrectImages = computed(() => {
  const imageRanking: Record<string, {correct: number, incorrect: number}> = {}
  tinderVotes.value.forEach((vote) => {
    if (!imageRanking[vote.id]) {
      imageRanking[vote.id] = {
        correct: 0,
        incorrect: 0
      }
    }

    if (vote.correct) {
      imageRanking[vote.id].correct++
    } else {
      imageRanking[vote.id].incorrect++
    }
  })

  const [mostCorrectImage] = Object.keys(imageRanking)
    .map(imageId => ({ imageId, ...imageRanking[imageId] }))
    .sort((a, b) => b.correct - a.correct)
  const [leastCorrectImage] = Object.keys(imageRanking)
    .map(imageId => ({ imageId, ...imageRanking[imageId] }))
    .sort((a, b) => b.incorrect - a.incorrect)

  return {
    mostCorrectImage,
    leastCorrectImage
  }
}
)
</script>

<template>
  <boring-slide>
    <template #content>
      <TwoColumnLayout>
        <template #left>
          <div class="h-full">
            <table class="table text-gray-500">
              <thead class="text-xs uppercase text-gray-700">
                <tr>
                  <th class="text-xl px-8">
                    Name
                  </th>
                  <th class="text-xl px-8">
                    Richtig
                  </th>
                  <th class="text-xl px-8">
                    Falsch
                  </th>
                </tr>
              </thead>
              <tbody>
                <transition-group name="shift">
                  <tr v-for="user in userRanking" :key="user.userId" class="border-b">
                    <td class="text-center text-2xl px-6 py-4 font-medium whitespace-nowrap text-gray-900">
                      {{ idUsernameMap[user.userId] }}
                    </td>
                    <td class="text-center text-2xl text-gray-900 px-6 py-4">
                      {{ user.correct }}
                    </td>
                    <td class="text-center text-2xl text-gray-900 px-6 py-4">
                      {{ user.incorrect }}
                    </td>
                  </tr>
                </transition-group>
              </tbody>
            </table>
          </div>
        </template>

        <template #right>
          <div class="space-y-16">
            <p class="text-2xl">
              Insgesamt richtig abgegebene Stimmen {{ correctVotes.correctCount }} / {{ correctVotes.votes }}
              ({{ correctVotes.percentage }}%)
            </p>
            <p class="text-2xl">
              {{ incorrectVotes }}
            </p>
            <div class="flex justify-between gap-8 items-center">
              <p v-if="mostAndLeastCorrectImages.mostCorrectImage" class="text-2xl text-center">
                Masterpiece
                <img
                  :src="mostAndLeastCorrectImages.mostCorrectImage.imageId"
                  alt="Content"
                  class="w-80 aspect-[1/1] object-cover rounded-lg mt-4"
                >
              </p>
              <p v-if="mostAndLeastCorrectImages.leastCorrectImage" class="text-2xl text-center">
                Die beste Fälschung
                <img
                  :src="mostAndLeastCorrectImages.leastCorrectImage.imageId"
                  alt="Content"
                  class="w-80 aspect-[1/1] object-cover rounded-lg mt-4"
                >
              </p>
            </div>
          </div>
        </template>
      </TwoColumnLayout>
    </template>
  </boring-slide>
</template>

<style scoped></style>

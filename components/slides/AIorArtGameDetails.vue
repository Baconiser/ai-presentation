<script setup lang="ts">
import { Vote } from '~/server/store'
import ai1 from '@/assets/images/quiz/ai/Bild1.png'
import ai2 from '@/assets/images/quiz/ai/Bild3.png'
import ai3 from '@/assets/images/quiz/ai/Bild5.png'

import ar1 from '@/assets/images/quiz/artist/1.jpg'
import ar2 from '@/assets/images/quiz/artist/Bild2.jpg'
import ar3 from '@/assets/images/quiz/artist/Bild4.jpg'
import ar4 from '@/assets/images/quiz/artist/Bild6.jpg'

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

function calculateCorrect (votes, aiList) {
  let correctCount = 0

  votes.forEach((vote) => {
    const aiInfo = aiList.find(ai => ai.id === vote.id)

    if (aiInfo && ((vote.vote === 'AI' && aiInfo.ai) || (vote.vote === 'Artist' && !aiInfo.ai))) {
      console.log(vote, aiInfo)
      correctCount++
    }
  })

  return { correctCount, votes: votes.length, percentage: ((correctCount / votes.length) * 100).toFixed(2) }
}

function createUserRanking (votes, aiList) {
  const userRanking = {}

  votes.forEach((vote) => {
    const aiInfo = aiList.find(ai => ai.id === vote.id)

    if (!userRanking[vote.userId]) {
      userRanking[vote.userId] = { correct: 0, incorrect: 0 }
    }

    if (aiInfo) {
      if ((vote.vote === 'AI' && aiInfo.ai) || (vote.vote === 'Artist' && !aiInfo.ai)) {
        userRanking[vote.userId].correct++
      } else {
        userRanking[vote.userId].incorrect++
      }
    }
  })

  return Object.keys(userRanking)
    .map(userId => ({ userId, ...userRanking[userId] }))
    .sort((a, b) => b.correct - a.correct)
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
    <TwoColumnLayout>
      <template #left>
        <div class="h-full">
          <h2>Ranking</h2>
          <table class="table table-striped table-bordered">
            <thead>
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
              <tr v-for="user in createUserRanking(tinderVotes,aiList)" :key="user.userId">
                <td class="text-center text-xl">
                  {{ user.userId }}
                </td>
                <td class="text-center text-xl">
                  {{ user.correct }}
                </td>
                <td class="text-center text-xl">
                  {{ user.incorrect }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template #right>
        <div class="space-y-16">
          <p class="text-2xl">
            Insgesamt richtig abgegebene Stimmen  {{ calculateCorrect(tinderVotes, aiList).correctCount }} / {{ calculateCorrect(tinderVotes, aiList).votes }} ({{ calculateCorrect(tinderVotes, aiList).percentage }}%)
          </p>
          <p class="text-2xl">
            Öfter {{ calculateFailure(tinderVotes,aiList) }}
          </p>
          <div class="flex justify-between gap-8 items-center">
            <p class="text-2xl">
              Masterpiece (Korrektestes Bild)
              <img :src="calculateMostAndLeastCorrectImages(tinderVotes,aiList)?.mostCorrectImage " alt="Content" class="w-60 aspect-[1/1] object-cover rounded-tr-[6rem] rounded-bl-[6rem]">
            </p>
            <p class="text-2xl">
              Die beste Fälschung (Am wenigsten korrektes Bild)
              <img :src="calculateMostAndLeastCorrectImages(tinderVotes,aiList)?.leastCorrectImage " alt="Content" class="w-60 aspect-[1/1] object-cover rounded-tl-[6rem] rounded-br-[6rem]">
            </p>
          </div>
        </div>
      </template>
    </TwoColumnLayout>
  </section>
</template>

<style scoped></style>

<script setup lang="ts">
import { Vote } from '~/server/store'

const tinderVotes = useState<Vote[]>('tinderVotes')

const correctVotes = computed(() => {
  let correctVotes = tinderVotes.value.filter(e => e.correct)
  const correctCount = correctVotes.length
  const votes = tinderVotes.value.length

  return {
    correctCount,
    votes,
    percentage: ((correctCount / votes) * 100).toFixed(2)
  }
})

const incorrectVotes = computed(() => {
  let correctAi = tinderVotes.value.filter(e => e.correct && e.vote == 'AI')
  let correctArtist = tinderVotes.value.filter(e => e.correct && e.vote == 'Artist')

  let correctAiLength = correctAi.length
  let correctArtistLength = correctArtist.length

  if(correctAiLength == correctArtistLength) {
    return 'Es steht unentschieden. Die KI hat gewonnen. ';
  }

  return `Öfter ${correctArtistLength > correctAiLength ? '🤖 AI' : '🎨 Artist'} geklickt, obwohl es ein Bild von ${correctAiLength > correctArtistLength ? '🤖 AI' : '🎨 Artist'} war`
})

const userRanking = computed(()=> {
  const userRanking: Record<string, {correct: number, incorrect: number}> = {};

  tinderVotes.value.forEach(vote => {
    if(!userRanking[vote.userId]) {
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
  });

  return Object.keys(userRanking)
      .map(userId => ({ userId, ...userRanking[userId] }))
      .sort((a, b) => b.correct - a.correct)
})


const  mostAndLeastCorrectImages = computed( () => {
  const imageRanking: Record<string, {correct: number, incorrect: number}> = {};
  tinderVotes.value.forEach((vote) => {
    if(!imageRanking[vote.id]) {
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

  const [mostCorrectImage] =  Object.keys(imageRanking)
      .map(imageId => ({ imageId, ...imageRanking[imageId] }))
      .sort((a, b) => b.correct - a.correct)
  const [leastCorrectImage] =  Object.keys(imageRanking)
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
            <tr v-for="user in userRanking" :key="user.userId">
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
            Insgesamt richtig abgegebene Stimmen {{ correctVotes.correctCount }} / {{ correctVotes.votes }}
            ({{ correctVotes.percentage }}%)
          </p>
          <p class="text-2xl">
            {{ incorrectVotes }}
          </p>
          <div class="flex justify-between gap-8 items-center">
            <p class="text-2xl">
              Masterpiece (Korrektestes Bild)
              <img :src="mostAndLeastCorrectImages.mostCorrectImage.imageId" alt="Content"
                   class="w-60 aspect-[1/1] object-cover rounded-tr-[6rem] rounded-bl-[6rem]"
              >
            </p>
            <p class="text-2xl">
              Die beste Fälschung (Am wenigsten korrektes Bild)
              <img :src="mostAndLeastCorrectImages.leastCorrectImage.imageId" alt="Content"
                   class="w-60 aspect-[1/1] object-cover rounded-tl-[6rem] rounded-br-[6rem]"
              >
            </p>
          </div>
        </div>
      </template>
    </TwoColumnLayout>
  </section>
</template>

<style scoped></style>

<script setup lang="ts">

import { TriviaAnswer } from '~/server/store'

const triviaAnswers = useState<TriviaAnswer[]>('triviaAnswers')
const idUsernameMap = useState<Record<string, string>>('idUsernameMap', () => ({}))

const userRanking = computed(() => {
  const userRanking: Record<string, {correct: number, incorrect: number}> = {}

  triviaAnswers.value.forEach((vote) => {
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
</script>

<template>
  <boring-slide>
    <template #content>
      <TwoColumnLayout>
        <template #left>
          {{ triviaAnswers }}
          <div
            class="flex py-12 px-16 gap-8 flex-col justify-center items-center min-h-screen w-full relative"
          >
            <h1 class="z-10 mx-auto font-bold max-w-screen-xl text-center">
              Trivia Time
            </h1>
            <div class="z-10 mt-12 flex flex-col justify-between items-center gap-12 text-black">
              <h2 class="text-2xl sm:text-4xl md:text-5xl text-center">
                Wer hat aufgepasst?
              </h2>
            </div>
            <audio controls loop class="w-full mt-12">
              <source src="@/assets/audios/jeopardy.mp3">
            </audio>
          </div>
        </template>
        <template #right>
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
<!--                <transition-group name="shift">-->
<!--                  <tr v-for="user in userRanking" :key="user.userId" class="border-b">-->
<!--                    <td class="text-center text-2xl px-6 py-4 font-medium whitespace-nowrap text-gray-900">-->
<!--                      {{ idUsernameMap[user.userId] }}-->
<!--                    </td>-->
<!--                    <td class="text-center text-2xl text-gray-900 px-6 py-4">-->
<!--                      {{ user.correct }}-->
<!--                    </td>-->
<!--                    <td class="text-center text-2xl text-gray-900 px-6 py-4">-->
<!--                      {{ user.incorrect }}-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                </transition-group>-->
              </tbody>
            </table>
          </div>
        </template>
      </TwoColumnLayout>
    </template>
  </boring-slide>
</template>

<style scoped>
h1 {
  letter-spacing: 1px;
  color: transparent;
  -webkit-text-stroke: 2px #ff3b65;
  background: -webkit-linear-gradient(rgba(255,59,101,.3),transparent);
  -webkit-background-clip: text;
  @apply text-8xl 2xl:text-9xl;
}

h1.small {
  @apply text-7xl lg:text-8xl 2xl:text-8xl
}

/* 1. declare transition */
.shift-move,
.shift-enter-active,
.shift-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.shift-enter-from,
.shift-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.shift-leave-active {
  position: absolute;
}
</style>

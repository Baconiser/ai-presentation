<script setup lang="ts">
import questionsData from '~/utils/TriviaQuestions'
import { TriviaAnswer } from '~/server/store'

const activeQuestionIdx = ref(0)
const questions = reactive(questionsData())
const currentQuestion = computed(() => questions[activeQuestionIdx.value])

function answerQuestion (answer: number) {
  currentQuestion.value.selectedAnswer = answer
  setTimeout(() => {
    activeQuestionIdx.value++
  }, 600)
}

</script>

<template>
  <transition name="page" mode="out-in">
    <div v-if="!currentQuestion" class="text-4xl font-bold text-center w-full h-full flex items-center justify-center text-white">
      Danke für die Teilnahme!
    </div>

    <div
        :key="currentQuestion.question"
        class="bg-black min-h-screen min-w-screen flex flex-col justify-center items-center"
        v-else
    >
      <div class="w-full h-1/2 flex flex-col items-center justify-center grow p-2">
        <h1 class="text-2xl text-white mb-2 mt-4 text-center p-4 bg-white bg-opacity-10 rounded-xl">
          {{ currentQuestion.question }}
        </h1>
        <h2 class="text-xl text-white mb-8">
          {{ currentQuestion.theme }}
        </h2>
      </div>
      <div class="w-full h-1/2 flex items-center justify-evenly grow">
        <div class="grid grid-cols-2 gap-4 w-full">
          <div
              v-for="(answer, idx) in currentQuestion.answers"
              :key="answer"
              class="flex m-2"
          >

            <button
                @click="answerQuestion(idx as number)"
                class="relative bg-white w-full h-full py-2 rounded-lg shadow text-gray-800 text-xl block text-center transition-colors"
                :class="{'bg-green-500': idx == currentQuestion.selectedAnswer && currentQuestion.selectedAnswer === currentQuestion.correctAnswer, 'bg-red-500': idx == currentQuestion.selectedAnswer && currentQuestion.selectedAnswer !== currentQuestion.correctAnswer }"
            >
              <ParticleEffect/>
              {{ answer }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

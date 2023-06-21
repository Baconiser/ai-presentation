<script setup lang="ts">
import questionsData from '~/utils/TriviaQuestions'

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
      v-else
      :key="currentQuestion.question"
      class="bg-stone-900 min-h-screen min-w-screen flex flex-col justify-center items-center"
    >
      <div class="w-full h-1/2 flex flex-col items-center justify-center gap-2 grow p-2">
        <h2 class="text-md text-white">
          {{ currentQuestion.theme }}
        </h2>
        <h1 class="lg:text-2xl text-white text-center p-4 bg-white bg-opacity-10 rounded-xl">
          {{ currentQuestion.question }}
        </h1>
      </div>
      <div class="w-full h-1/2 flex items-center justify-evenly grow p-2">
        <div class="grid sm:grid-cols-2 gap-4 w-full">
          <div
            v-for="(answer, idx) in currentQuestion.answers"
            :key="answer"
            class="flex"
          >
            <button
              class="relative w-full h-full py-2 text-gray-800 text-xl block text-center transition-colors"
              :class="{
                'bg-white': currentQuestion.selectedAnswer !== idx || currentQuestion.selectedAnswer === null,
                'bg-green-500': idx === currentQuestion.selectedAnswer && currentQuestion.selectedAnswer === currentQuestion.correctAnswer,
                'bg-red-500': idx == currentQuestion.selectedAnswer && currentQuestion.selectedAnswer !== currentQuestion.correctAnswer
              }"
              @click="answerQuestion(idx as number)"
            >
              <ParticleEffect />
              {{ answer }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

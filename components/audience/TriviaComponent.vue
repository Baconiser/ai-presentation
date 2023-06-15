<script setup lang="ts">
import questions from '~/utils/TriviaQuestions'
import { TriviaAnswer } from '~/server/store'

const activeQuestionIdx = ref(0)

const currentQuestion = computed(() => questions[activeQuestionIdx.value])

function answerQuestion (answer: number) {
  if (answer === currentQuestion.value.correctAnswer) {
    activeQuestionIdx.value++
  }
}

</script>

<template>
  <transition name="page" mode="out-in">
    <div :key="currentQuestion.question"
         class="bg-blue-500 min-h-screen min-w-screen flex flex-col justify-center items-center"
    >
      <h1 class="text-2xl text-white mb-8 mt-4 text-center">{{ currentQuestion.question }}</h1>
      <div v-for="(answer, idx) in currentQuestion.answers" :key="answer"
           class="w-full sm:w-5/6 md:w-3/4 lg:w-1/2 mb-4"
      >
        <button @click="answerQuestion(idx)"
                class="bg-white w-full py-2 rounded-lg shadow text-gray-800 text-xl block text-center"
        >{{ answer }}
        </button>
      </div>
    </div>
  </transition>
</template>

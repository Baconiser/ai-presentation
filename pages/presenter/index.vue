<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'

function worth () {
  localStorage.setItem('is-worthy', 'true')
  navigateTo('/presenter/0')
}

onKeyStroke('w', () => {
  worth()
})
</script>

<template>
  <div class="h-screen bg-stone-900 text-white">
    <div class="relative isolate px-6 lg:px-8 h-full">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 h-full flex-col flex items-center">
        <div class="mb-4 sm:mb-8 flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-white/10"
          >
            w.e.b. Alpen Code Retreat
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
            <span @click="worth">W</span>illkommen auf der exklusiven Präsentationsseite!
          </h1>
          <p class="mt-6 text-lg leading-8">
            Aber halt, bevor Sie weitergehen: Sind Sie bereit, Ihre Kreativität und Ihre Expertise in der faszinierenden Welt der Künstlichen Intelligenz zu präsentieren? Haben Sie das Zeug dazu, Ihre Zuhörer auf eine unvergessliche Reise durch die Geschichte, Anwendung und Zukunft der KI mitzunehmen? Wenn Ihre Antwort "Ja" lautet, dann treten Sie ein und entfesseln Sie Ihr Potenzial. Aber denken Sie daran, diese Seite ist nicht für die Schwachen. Sie erfordert Mut, Wissen und vor allem Leidenschaft. Also, sind Sie es wert? Dann beweisen Sie es!"
          </p>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

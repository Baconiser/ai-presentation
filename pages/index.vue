<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-stone-900">
    <div class="relative isolate min-h-screen px-6 lg:px-8 h-full">
      <div class="max-w-2xl pt-12 pb-12 mx-auto min-h-screen h-full flex-col flex items-center justify-center">
        <div class="mb-4 sm:mb-8 flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 hover:ring-gray-900/20 ring-white/10 text-white"
          >
            w.e.b. Alpen Code Retreat
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-white">
            Eure Reise beginnt
          </h1>
          <p class="mt-6 text-lg leading-8 text-white">
            Taucht ein in die faszinierende Welt der Künstlichen Intelligenz! Begleitet uns auf einer spannenden Reise
            durch die Geschichte und die unglaublichen Anwendungsfälle von KI in verschiedenen Branchen. Erweitert Euer
            Wissen und lasst Euch von den Möglichkeiten begeistern.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink
              to="/audience"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Jetzt mitmachen
            </NuxtLink>
          </div>
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

<script setup lang="ts">
import ParticleEffect from '~/components/ParticleEffect.vue'

const joined = ref(false)
const name = useLocalStorage('USER_NAME', '')
const joining = ref(false)

async function login () {
  joining.value = true
  const userId = IdUtil.getId()
  await useFetch('/api/login', {
    method: 'POST',
    body: {
      name: name.value,
      userId
    }
  })
  setTimeout(() => {
    joined.value = true
  }, 500)
}
</script>

<template>
  <div class="min-h-screen">
    <div class="relative isolate h-screen py-8 overflow-auto px-6 lg:px-8 h-full">
      <div class="flex min-h-full flex-col justify-center items-center px-6 lg:px-8">
        <div class="mb-4 sm:mb-8 flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white/10"
          >
            w.e.b. Alpen Code Retreat
          </div>
        </div>

        <div class="sm:mx-auto max-w-2xl text-center">
          <h1 v-if="!joined" class="text-4xl font-bold tracking-tight sm:text-6xl select-none">
            Bereit für Dein KI-Abenteuer?
          </h1>
          <h2
            v-else
            class="text-4xl font-bold tracking-tight select-none"
          >
            Willkommen
            an Board, <span style="color: #ffc600">{{ name }}</span>!
          </h2>
          <p v-if="!joined" class="mt-6 text-lg leading-8 select-none">
            Gib Deinen Namen ein und starte Deine interaktive Reise! Entdecke die Geheimnisse und Potentiale der
            Künstlichen Intelligenz und nutze die Möglichkeit, aktiv mitzuwirken.
          </p>
          <p v-else class="mt-6 text-lg leading-8 select-none">
            Du hast Dich erfolgreich eingeloggt. Wir bitten Dich um
            ein wenig Geduld. Nutze diese Zeit, um Dich zu
            entspannen und Dich auf die bevorstehenden Erkenntnisse und Interaktionen vorzubereiten.
          </p>
          <form class="space-y-6 mt-8" action="#" @submit.prevent="login">
            <div>
              <div class="">
                <transition name="fade">
                  <input
                    v-if="!joined"
                    id="name"
                    v-model="name"
                    name="name"
                    autocomplete="name"
                    placeholder="Namen eingeben..."
                    required
                    class="block w-full rounded-md border-0 p-1.5 text-center shadow-sm ring-1
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                      focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                </transition>
              </div>
            </div>

            <div class="relative">
              <transition name="fade">
                <button
                  v-if="!joined"
                  :disabled="name.length === 0 || joining"
                  type="submit"
                  class="button"
                >
                  Starte jetzt Deine KI-Reise!
                  <ParticleEffect v-if="!(name.length === 0 || joining)" />
                </button>
              </transition>
            </div>
          </form>
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
  </div>
</template>

<style scoped>
.button {
  @apply rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;
}
</style>

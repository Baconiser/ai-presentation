<script setup lang="ts">
import ParticleEffect from '~/components/ParticleEffect.vue'
import IdUtil from '~/utils/IdUtil'

definePageMeta({ layout: 'audience' })

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
}
const userId = ref('')
const idUsernameMap = useState<Record<string, string>>('idUsernameMap')

const isLoggedIn = computed(() => {
  return !!idUsernameMap.value[userId.value]
})

onMounted(() => {
  userId.value = IdUtil.getId()
})

watch(isLoggedIn, () => {
  console.log('isLoggedIn', isLoggedIn.value, idUsernameMap.value)
  if (isLoggedIn.value) {
    navigateTo('/audience')
  }
}, { immediate: true })

</script>

<template>
  <div class="min-h-screen bg-stone-900 text-white">
    <div class="relative isolate h-screen py-8 overflow-auto px-6 lg:px-8 h-full">
      <div class="flex min-h-full flex-col justify-center items-center px-6 lg:px-8">
        <div class="mb-4 sm:mb-8 flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-white/10"
          >
            w.e.b. Alpen Code Retreat
          </div>
        </div>

        <div class="sm:mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-6xl select-none">
            Bereit für Dein KI-Abenteuer?
          </h1>
          <p class="mt-6 text-lg leading-8 select-none">
            Gib Deinen Namen ein und starte Deine interaktive Reise! Entdecke die Geheimnisse und Potentiale der
            Künstlichen Intelligenz und nutze die Möglichkeit, aktiv mitzuwirken.
          </p>

          <div class="space-y-6 mt-8">
            <div>
              <div class="">
                <transition name="fade">
                  <input
                    id="name"
                    v-model="name"
                    name="name"
                    autocomplete="name"
                    placeholder="Namen eingeben..."
                    required
                    class="block w-full rounded-md border-0 p-1.5 text-center shadow-sm ring-1
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                      focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                  >
                </transition>
              </div>
            </div>

            <div class="relative">
              <transition name="fade">
                <button
                  :disabled="name.length === 0 || joining"
                  type="submit"
                  class="button"
                  @click="login"
                >
                  Starte jetzt Deine KI-Reise!
                  <ParticleEffect v-if="!(name.length === 0 || joining)" />
                </button>
              </transition>
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
  </div>
</template>

<style scoped>
.button {
  @apply rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;
}
</style>

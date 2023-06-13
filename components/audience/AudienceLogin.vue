<script setup lang="ts">
import IdUtil from '~/utils/IdUtil'
const name = ref('')

const idUsernameMap = useState<Record<string, string>>('idUsernameMap')
onMounted(() => {
  const userId = IdUtil.getId()
  let username = idUsernameMap.value[userId];

  if (!username) {
    navigateTo('/audience/login')
  } else {
    name.value = username
  }
})
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
          <h2
            class="text-4xl font-bold tracking-tight select-none"
          >
            Willkommen
            an Board, <span style="color: #ffc600">{{ name }}</span>!
          </h2>

          <p class="mt-6 text-lg leading-8 select-none">
            Du hast Dich erfolgreich eingeloggt. Wir bitten Dich um
            ein wenig Geduld. Nutze diese Zeit, um Dich zu
            entspannen und Dich auf die bevorstehenden Erkenntnisse und Interaktionen vorzubereiten.
          </p>
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

<style scoped></style>

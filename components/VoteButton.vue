<script setup lang="ts">
import IdUtil from '~/utils/IdUtil'

async function vote () {
  const userId = IdUtil.getId()
  await useFetch('/api/send_vote', {
    method: 'POST',
    body: { userId, vote: 'left', correct: Math.random() > 0.5, id: '1' }
  })
}
</script>

<template>
  <button
    type="button"
    class="flex-1 whitespace-nowrap text-white bg-black hover:bg-[#050708]/90 focus:outline-none font-medium  text-xl sm:text-2xl px-5 py-2 sm:py-2.5 text-center"
    @click="vote"
  >
    <slot />
  </button>
</template>

<style scoped></style>

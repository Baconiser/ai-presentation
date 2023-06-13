<script setup lang="ts">

import { GifIds, GifVote } from '~/server/store'

const gifVotes = useState<GifVote[]>('votedGifs', () => [])
const idUsernameMap = useState<Record<string, string>>('idUsernameMap', () => ({}))

const mostVotedGif = computed(() => {
  let gifCountMap: Record<string, number> = {}
  gifVotes.value.forEach(({ gifId }) => {
    gifCountMap[gifId] = gifCountMap[gifId] ? gifCountMap[gifId] + 1 : 1
  })
  return Object.fromEntries(Object.entries(gifCountMap).sort((a, b) => b[1] - a[1]));
})

const userVotes = computed(() => {
  let userVotes: Record<string, number> = {}
  gifVotes.value.forEach(({ userId }) => {
    userVotes[userId] = userVotes[userId] ? userVotes[userId] + 1 : 1
  })
  return Object.fromEntries(Object.entries(userVotes).sort((a, b) => b[1] - a[1]));
})

</script>

<template>
  <section class="p-8 w-full">
    <div>
      <h1 class="text-4xl font-bold">Gif ranking</h1>
      <div class="flex justify-around">
        <transition-group>
          <div v-for="(count, gifId) in mostVotedGif" :key="gifId" class="flex flex-col ">
            <img :src="`/${gifId}.webp`" alt="">
            <span>{{ count }}</span>
          </div>
        </transition-group>
      </div>
<table>
  <tr>
    <th>username</th>
    <th>
      <img src="/boo.webp" alt="">
      <span>boo</span>
      <span></span>
    </th>
  </tr>



</table>


    </div>
  </section>
</template>

<style scoped></style>

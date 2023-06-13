<script setup lang="ts">

import { GifIds, GifVote } from '~/server/store'

const gifVotes = useState<GifVote[]>('votedGifs', () => [])
const idUsernameMap = useState<Record<string, string>>('idUsernameMap', () => ({}))

const mostVotedGif = computed(() => {
  const gifCountMap: Record<string, number> = {}
  gifVotes.value.forEach(({ gifId }) => {
    gifCountMap[gifId] = gifCountMap[gifId] ? gifCountMap[gifId] + 1 : 1
  })
  return Object.fromEntries(Object.entries(gifCountMap).sort((a, b) => b[1] - a[1]))
})

const userVotes = computed(() => {
  const userVotes: Record<string, number> = {}
  gifVotes.value.forEach(({ userId }) => {
    userVotes[userId] = userVotes[userId] ? userVotes[userId] + 1 : 1
  })
  return Object.fromEntries(Object.entries(userVotes).sort((a, b) => b[1] - a[1]))
})

</script>

<template>
  <TwoColumnLayout>
    <template #left>
      <div class="h-full">
        <h2>Gifs/User Ranking</h2>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-xl px-8">
                Name
              </th>
              <th class="text-xl px-8">
                Richtig
              </th>
              <th class="text-xl px-8">
                Falsch
              </th>
            </tr>
          </thead>
          <tbody>
            <!--            <tr v-for="user in userRanking" :key="user.userId">-->
            <!--              <td class="text-center text-xl">-->
            <!--                {{ user.userId }}-->
            <!--              </td>-->
            <!--              <td class="text-center text-xl">-->
            <!--                {{ user.correct }}-->
            <!--              </td>-->
            <!--              <td class="text-center text-xl">-->
            <!--                {{ user.incorrect }}-->
            <!--              </td>-->
            <!--            </tr>-->
          </tbody>
        </table>
      </div>
    </template>

    <template #right>
      <div class="h-full">
        <h2>Gifs Ranking</h2>
        <transition-group name="shift">
          <div v-for="(count, gifId) in mostVotedGif" :key="gifId" class="flex flex-col ">
            <img :src="`/${gifId}.webp`" alt="">
            <span>{{ count }}</span>
          </div>
        </transition-group>
      </div>
    </template>
  </TwoColumnLayout>
</template>

<style scoped>
/* 1. declare transition */
.shift-move,
.shift-enter-active,
.shift-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.shift-enter-from,
.shift-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.shift-leave-active {
  position: absolute;
}
</style>

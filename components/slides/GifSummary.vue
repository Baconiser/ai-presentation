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
  const voteCounts: Record<string, { total: number, byGifId: any }> = {}

  gifVotes.value.forEach((vote) => {
    if (!voteCounts[vote.userId]) {
      voteCounts[vote.userId] = { total: 0, byGifId: {} }
    }
    voteCounts[vote.userId].total++
    voteCounts[vote.userId].byGifId[vote.gifId] = (voteCounts[vote.userId].byGifId[vote.gifId] || 0) + 1
  })
  return Object.fromEntries(Object.entries(voteCounts).sort((a, b) => b[1].total - a[1].total))
})

</script>

<template>
  <boring-slide>
    <template #content>
      <div class="flex gap-x-8 w-full h-full">
        <div class="h-full grow">
          <table class="table text-gray-500">
            <thead class="text-xs uppercase text-gray-700">
              <tr>
                <th class="text-xl px-8">
                  Name
                </th>
                <th class="text-xl px-8">
                  Insgesamt
                </th>
                <th class="w-[120px]">
                  <img class="image" :src="`/${GifIds.mindblow}.webp`">
                </th>
                <th class="w-[120px]">
                  <img class="image" :src="`/${GifIds.nice}.webp`">
                </th>
                <th class="w-[120px]">
                  <img class="image" :src="`/${GifIds.huh}.webp`">
                </th>
                <th class="w-[120px]">
                  <img class="image" :src="`/${GifIds.boo}.webp`">
                </th>
              </tr>
            </thead>
            <tbody>
              <transition-group name="shift">
                <tr v-for="(item, key) in userVotes" :key="key" class="border-b">
                  <td class="text-center text-2xl px-6 py-4 font-medium whitespace-nowrap text-gray-900">
                    {{ idUsernameMap[key] }}
                  </td>
                  <td class="text-center text-2xl text-gray-900 px-6 py-4">
                    {{ item.total }}
                  </td>
                  <td class="text-center text-2xl text-gray-900 px-6 py-4">
                    {{ item.byGifId[GifIds.mindblow] }}
                  </td>
                  <td class="text-center text-2xl text-gray-900 px-6 py-4">
                    {{ item.byGifId[GifIds.nice] }}
                  </td>
                  <td class="text-center text-2xl text-gray-900 px-6 py-4">
                    {{ item.byGifId[GifIds.huh] }}
                  </td>
                  <td class="text-center text-2xl text-gray-900 px-6 py-4">
                    {{ item.byGifId[GifIds.boo] }}
                  </td>
                </tr>
              </transition-group>
            </tbody>
          </table>
        </div>

        <div class="h-full shrink-0">
          <div class="space-y-4">
            <transition-group name="shift">
              <div v-for="(count, gifId) in mostVotedGif" :key="gifId" class="shrink-0 gif h-[200px] relative flex align-center justify-center rounded-lg overflow-hidden aspect-[16/11] ">
                <img :src="`/${gifId}.webp`" class="jello-horizontal object-cover object-center w-full h-full">
                <span
                  class="jello-horizontal counter absolute top-0 left-0
        z-10 drop-shadow text-5xl flex items-center justify-center w-full h-full text-white"
                >{{ count }}x</span>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </template>
  </boring-slide>
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

.counter {
  text-shadow: 5px 5px 0 rgba(0,0,0,0.3);
  -webkit-text-stroke: 2px rgba(0, 0, 0, 0.29);
  background: -webkit-linear-gradient(rgba(255,59,101,.3),transparent);
  -webkit-background-clip: text;
}

.jello-horizontal {
  animation: jello-horizontal 0.9s ease-out both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

.image {
  @apply object-cover object-center ;
  width: 100px;
  aspect-ratio: 16 / 11;
  margin: auto;
}
</style>

<script setup lang="ts">
let data = reactive({ votes: [], gif_votes: [], currentSlideIdx: 0 });
onMounted(() => {
  if (process.client) {
    const event = new EventSource('/api/connect')

    event.addEventListener('message', (e) => {
      const parsedData = JSON.parse(e.data);
      data.gif_votes = parsedData.gif_votes;
      data.votes = parsedData.votes;
      data.currentSlideIdx = parsedData.currentSlideIdx
    })

  }
})

const votedGifs = computed(() => {
  return new Set(data.gif_votes.map((gifVote: any) => {
    return gifVote.gifId;
  }));
});

function getGifVoteCount(gifId: string) {
  return data.gif_votes.filter((gifVote: any) => {
    return gifVote.gifId === gifId;
  }).length;
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <div class="gifs">
      <div> Slide: {{ data.currentSlideIdx }}</div>
      <div class="gif" v-for="(gif, index) in votedGifs" :key="index">
        <span>{{ getGifVoteCount(gif) }}x</span>
        <img :src="`/${gif}.webp`"/>
      </div>
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
</style>

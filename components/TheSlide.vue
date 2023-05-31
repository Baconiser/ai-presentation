<script lang="ts" setup>
const votedGifs:Ref<string[]> = useState("votedGifs");
import ParticleEffect from '@/components/ParticleEffect.vue';
const currentSlideIdx:Ref<number> = useState("currentSlideIdx");
const votedGifIds = computed(() => {
  return new Set(votedGifs.value.map((gifVote: any) => {
    return gifVote.gifId;
  }));
});

function getGifVoteCount(gifId: string) {
  return votedGifs.value.filter((gifVote: any) => {
    return gifVote.gifId === gifId;
  }).length;
}

</script>

<template>
  <div
    class="slide overflow-hidden w-screen h-screen flex justify-center items-center relative"
  >
    <slot />
    <div class="gifs">
      <ParticleEffect></ParticleEffect>

      <div> Slide: {{ currentSlideIdx }}</div>
      <div class="gif" v-for="(gif, index) in votedGifIds" :key="index">
        <span>{{ getGifVoteCount(gif) }}x</span>
        <img :src="`/${gif}.webp`"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

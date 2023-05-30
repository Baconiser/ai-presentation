<script setup lang="ts">
import ai1 from '@/assets/images/quiz/ai/Bild1.png'
import ai2 from '@/assets/images/quiz/ai/Bild3.png'
import ai3 from '@/assets/images/quiz/ai/Bild5.png'

import ar1 from '@/assets/images/quiz/artist/1.jpg'
import ar2 from '@/assets/images/quiz/artist/Bild2.jpg'
import ar3 from '@/assets/images/quiz/artist/Bild4.jpg'
import ar4 from '@/assets/images/quiz/artist/Bild6.jpg'

const images = [ai1, ar1, ar2, ai2, ai3, ar3, ar4]
import TinderMatcher from "~/components/TinderMatcher.vue";

const currentSlideIdx = useState("currentSlideIdx");
import GifVoteSelector from "~/components/GifVoteSelector.vue";
</script>

<template>
  <transition
      name="fade" mode="out-in">
    <TinderMatcher v-if="currentSlideIdx == 8" :images="images"/>
    <GifVoteSelector v-else/>
  </transition>
</template>


<style scoped>

</style>

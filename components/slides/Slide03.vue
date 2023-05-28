<script setup lang="ts">
import TinderMatcher from "~/components/TinderMatcher.vue";
import ai1 from '@/assets/images/quiz/ai/Bild1.png'
import ai2 from '@/assets/images/quiz/ai/Bild3.png'
import ai3 from '@/assets/images/quiz/ai/Bild5.png'

import ar1 from '@/assets/images/quiz/artist/1.jpg'
import ar2 from '@/assets/images/quiz/artist/Bild2.jpg'
import ar3 from '@/assets/images/quiz/artist/Bild4.jpg'
import ar4 from '@/assets/images/quiz/artist/Bild6.jpg'

const images = [ai1, ar1, ar2, ai2, ai3, ar3, ar4];
</script>

<template>
  <div class="split__container absolute w-full h-full t-0 l-0 flex justify-evenly	">
    <div class="side grow-1">AIRtist</div>
    <div class="divider w-2 bg-white"></div>
    <div class="side grow-1">ARtist</div>
  </div>

  <TinderMatcher :images="images"/>
</template>

<style scoped></style>

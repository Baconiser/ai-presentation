<script setup lang="ts">
import ai1 from '@/assets/images/quiz/ai/Bild1.png'
import ai2 from '@/assets/images/quiz/ai/Bild3.png'
import ai3 from '@/assets/images/quiz/ai/Bild5.png'

import ar1 from '@/assets/images/quiz/artist/1.jpg'
import ar2 from '@/assets/images/quiz/artist/Bild2.jpg'
import ar3 from '@/assets/images/quiz/artist/Bild4.jpg'
import ar4 from '@/assets/images/quiz/artist/Bild6.jpg'
import IdUtil from '~/utils/IdUtil'

const images = [ai1, ar1, ar2, ai2, ai3, ar3, ar4]

onMounted(() => {
  // TODO Michael LoginFlow: Wenn User noch kein User dann weiter auf Loginseite
  const userId = IdUtil.checkForId()
  if (!userId) {
    navigateTo('/audience/login')
  }
})
</script>

<template>
  <TinderMatcher :contents="images" type="image" />
</template>

<style scoped></style>

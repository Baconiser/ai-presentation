<script setup lang="ts">
import eggLeft from '@/assets/images/quiz/egg-left.jpg'
import eggRight from '@/assets/images/quiz/e.png'

const options = [
  { image: eggLeft },
  { image: eggRight }
]
</script>

<template>
  <vote-screen :options="options" />
</template>

<style scoped></style>

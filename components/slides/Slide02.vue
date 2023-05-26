<script setup lang="ts">
import dogLeft from '@/assets/images/quiz/dog-left.jpg'
import dogRight from '@/assets/images/quiz/h.png'

const options = [
  { image: dogLeft },
  { image: dogRight }
]
</script>

<template>
  <vote-screen :options="options" />
</template>

<style scoped></style>

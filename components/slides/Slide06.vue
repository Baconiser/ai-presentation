<script setup lang="ts">
import sunLeft from '@/assets/images/quiz/sun-left.jpg'
import sunRight from '@/assets/images/quiz/sun-right.jpg'

const options = [
  { image: sunLeft },
  { image: sunRight }
]
</script>

<template>
  <vote-screen :options="options" />
</template>

<style scoped></style>

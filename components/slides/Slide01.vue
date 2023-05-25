<script setup lang="ts">
const options = [
  { image: '~/images/quiz/sun-left.jpg' },
  { image: '~/images/quiz/sun-right.jpg' }
]
</script>

<template>
  <vote-screen :options="options" />
</template>

<style scoped></style>

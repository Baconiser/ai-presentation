<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  statements: {
    type: Array as PropType<string[]>,
    required: true,
  },
})


</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full">
    <h1 class="text-8xl font-semibold mb-6 " >{{ title }}</h1>
    <ul class="space-y-4 text-5xl text-white list-disc grow flex justify-start items-center flex-col">
      <li v-for="(statement, index) in statements" :key="'statement-' + index" class="grow-0">
        {{ statement }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  statements: {
    type: Array as PropType<string[]>,
    required: true
  },
  src: {
    type: String,
    required: false
  }
})

</script>

<template>
  <div class="flex py-12 px-16 flex-col min-h-screen w-full relative">
    <div class="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
      <img
        alt=""
        class="absolute right-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:right-[-80%] sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
        src="@/assets/images/background.6c3571e0.jpg"
        loading="lazy"
        width="918"
        height="1495"
      >
      <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
    <h1 class="text-8xl font-bold mb-12 z-10 text-black">
      {{ title }}
    </h1>
    <div class="z-10 flex justify-between gap-12">
      <ul class="space-y-4 text-5xl list-disc list-outside pl-[40px] list-image-[url(boo.webp)]">
        <li v-for="(statement, index) in statements" :key="'statement-' + index" class="text-black">
          {{ statement }}
        </li>
      </ul>
      <img v-if="src" :src="src" class="max-w-screen-sm rounded-lg">
    </div>
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: 1px;
  color: transparent;
  -webkit-text-stroke: 2px #ff3b65;
  background: -webkit-linear-gradient(rgba(255,59,101,.3),transparent);
  -webkit-background-clip: text;
}
</style>

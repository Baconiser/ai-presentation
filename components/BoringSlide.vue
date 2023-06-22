<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  statements: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => []
  },
  src: {
    type: String,
    required: false,
    default: ''
  }
})

const slots = useSlots()
const showContent = () => {
  return !!slots.content
}
</script>

<template>
  <div class="flex py-12 px-16 flex-col min-h-screen w-full relative boring">
    <div class="stylish absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
      <img
        alt=""
        class="stylish absolute right-[-150px] top-0 h-[1200px] w-[600px] -scale-x-100"
        src="@/assets/images/background.6c3571e0.jpg"
        loading="lazy"
        width="918"
        height="1495"
      >
      <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
    <h1 v-if="title" class="text-5xl 2xl:text-8xl font-bold mb-12 z-10 text-black">
      {{ title }}
    </h1>
    <div class="z-10 flex justify-between gap-12 h-full">
      <slot v-if="showContent" name="content" />
      <ul v-if="statements.length > 0" class="space-y-4 list-disc list-outside pl-[40px]">
        <li v-for="(statement, index) in statements" :key="'statement-' + index" class="text-black" v-html="statement" />
      </ul>
      <img v-if="src" :src="src" class="max-w-lg 2xl:max-w-xl shrink-0 rounded-lg object-contain">
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

li {
  list-style-type: "🤖";
  padding-inline-start: 1ch;
}
</style>

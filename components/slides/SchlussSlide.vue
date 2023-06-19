<script setup lang="ts">
const currentSlideIdx = useState<number>('currentSlideIdx')
let generating = false
const audioName = useState<string | null>('poemName', () => null)
const allowPoem = useState('allowPoem', () => false)
const poemText = useState<string | null>('poemText', () => null)

watch(currentSlideIdx, async (newVal) => {
  if (generating) {
    return
  }
  if (newVal > 9) {
    if (!allowPoem.value) {
      return
    }
    generating = true
    await useFetch('/api/create_poem')
  }
})

</script>

<template>
  <boring-slide>
    <template #content>
      <div class="flex py-12 px-16 flex-col justify-center items-center min-h-screen w-full relative">
        <p>
          {{ poemText }}
        </p>
        <audio v-if="audioName" controls :src="`/${audioName}`" />
      </div>
    </template>
  </boring-slide>
</template>

<style scoped>
h1 {
  letter-spacing: 1px;
  color: transparent;
  -webkit-text-stroke: 2px #ff3b65;
  background: -webkit-linear-gradient(rgba(255, 59, 101, .3), transparent);
  -webkit-background-clip: text;
  @apply text-8xl 2xl:text-9xl;
}
</style>

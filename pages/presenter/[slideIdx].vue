<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const slideIdx = ref(Number(route.params.slideIdx))

function preventDrag (e: DragEvent) {
  e.preventDefault()
  return false
}

// switch slideIdx based on keypress
function switchSlide (e: KeyboardEvent) {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    slideIdx.value++
  } else if (e.key === 'ArrowLeft') {
    slideIdx.value--
  }
}

// watch slideIdx and update route params
watch(slideIdx, (newVal) => {
  router.push(`/presenter/${newVal}`)
})

onMounted(() => {
  window.addEventListener('keydown', switchSlide)
  // add event listener for keypress
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', switchSlide)
  // remove event listener for keypress
})

</script>

<template>
  <div class="slider flex justify-start items-center h-full w-full select-none overflow-hidden" @drag="preventDrag">
    <div class="slide__scroller h-full relative flex transition-transform ease-linear duration-500" :style="{transform: `translateX(${-100 * slideIdx}vw)`}">
      <TheSlide>
        <slides-slide01 @drag="preventDrag" />
      </TheSlide>
      <TheSlide>
        <slides-slide02 />
      </TheSlide>
      <the-slide>
        <slides-slide03 />
      </the-slide>
      <the-slide>
        <slides-slide04 />
      </the-slide>
      <the-slide>
        <slides-slide05 />
      </the-slide>
    </div>
  </div>
</template>

<style scoped></style>

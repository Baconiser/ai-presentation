<script setup lang="ts">
import Slide01 from '~/components/slides/Slide01.vue'
import Slide02 from '~/components/slides/Slide02.vue'
import Slide03 from '~/components/slides/Slide03.vue'
import Slide04 from '~/components/slides/Slide04.vue'
import Slide05 from '~/components/slides/Slide05.vue'

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
    slideIdx.value += 1
    slideIdx.value = Math.min(slideIdx.value, options.length - 1)
  } else if (e.key === 'ArrowLeft') {
    slideIdx.value -= 1
    slideIdx.value = Math.max(slideIdx.value, 0)
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

const options = [
  {
    type: Slide01
  },
  {
    type: Slide02
  },
  {
    type: Slide03
  },
  {
    type: Slide04
  },
  {
    type: Slide05
  }
]
</script>

<template>
  <div class="slider flex justify-start items-center h-full w-full select-none overflow-hidden" @drag="preventDrag">
    <div
      class="slide__scroller h-full relative flex transition-transform ease-linear duration-500"
      :style="{transform: `translateX(${-100 * slideIdx}vw)`}"
    >
      <template v-for="option in options" :key="option.type">
        <div class="slide overflow-hidden w-screen h-screen flex justify-center items-center relative">
          <component :is="option.type" @drag="preventDrag" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>

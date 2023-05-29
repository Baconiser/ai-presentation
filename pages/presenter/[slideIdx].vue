<script setup lang="ts">
import Slide01 from '~/components/slides/Slide01.vue'
import Slide02 from '~/components/slides/Slide02.vue'
import Slide03 from '~/components/slides/Slide03.vue'
import Slide04 from '~/components/slides/Slide04.vue'
import Slide05 from '~/components/slides/Slide05.vue'
import Slide07 from '~/components/slides/Slide07.vue'
import Slide06 from '~/components/slides/Slide06.vue'
import Slide08 from '~/components/slides/Slide08.vue'
import Slide09 from '~/components/slides/Slide09.vue'
import Slide10 from "~/components/slides/Slide10.vue";
import Slide11 from "~/components/slides/Slide11.vue";
import Slide12 from "~/components/slides/Slide12.vue";
import Slide13 from "~/components/slides/Slide13.vue";

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

onMounted(async () => {
  window.addEventListener('keydown', switchSlide)
  // add event listener for keypress
  // const jwt = localStorage.getItem('is-worthy')
  // if (!jwt) {
  //   await navigateTo('/')
  // }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', switchSlide)
  // remove event listener for keypress
})

const options = [
  {
    type: Slide07
  },
  {
    type: Slide10
  },
  {
    type: Slide09
  },
  {
    type: Slide11
  },
  {
    type: Slide12
  },
  {
    type: Slide13
  },
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
  },
  {
    type: Slide06
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
        <TheSlide>
          <component :is="option.type" @drag="preventDrag" />
        </TheSlide>
      </template>
    </div>
  </div>
</template>

<style scoped></style>

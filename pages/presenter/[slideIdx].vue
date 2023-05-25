<template>
  <div class="slider" @drag="preventDrag">
    <div class="slide__scroller" :style="{transform: `translateX(${-100 * slideIdx}vw)`}">
      <Slide>
        <img @drag="preventDrag" src="/wilhelm%20lenz.png" alt="Picture of Wilhelm Lenz">
      </Slide>
      <Slide>
        Das ist ein zweiter slide
      </Slide>
    </div>
  </div>
</template>

<script setup lang="ts">
import Slide from "~/components/Slide.vue";
import { destroy } from "unenv/runtime/node/stream";


const route = useRoute()
const router = useRouter()
let slideIdx = ref(Number(route.params.slideIdx));

// get slideIdx from route params

let isMouseDown = false;

function preventDrag(e: DragEvent) {
  e.preventDefault();
  return false;
}


function switchSlide(e: KeyboardEvent) {
  if (e.key === "ArrowRight" || e.key === " ") {
    slideIdx.value++;
  } else if (e.key === "ArrowLeft") {
    slideIdx.value--;
  }
  // switch slideIdx based on keypress
}


// watch slideIdx and update route params
watch(slideIdx, (newVal) => {
  router.push(`/presenter/${ newVal }`);
});


// enable switching slides with the swipe of two fingers on a touchpad

function touchStart(e: TouchEvent) {
  // if two fingers are touching the touchpad, set touchStart to true
}

onMounted(() => {
  window.addEventListener("keydown", switchSlide);
  // add event listener for keypress
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", switchSlide);
  // remove event listener for keypress
});


</script>

<style scoped lang="less">


.slider {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  user-select: none;

  .slide__scroller {
    height: 100%;
    transition: .45s ease transform;
    position: relative;
    display: flex;
  }
}
</style>

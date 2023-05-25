<script setup lang="ts">
const x = ref(0)
const y = ref(0)

function movePointer (e: MouseEvent) {
  x.value = e.clientX
  y.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', movePointer)
})

</script>

<template>
  <div class="laser-pointer" :style="{transform: `translate3d(${x}px, ${y}px,0)`}" />
</template>

<style scoped>
.laser-pointer {
  z-index: 1111;
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: red 0 0 14px 7px;
  pointer-events: none;
}
</style>

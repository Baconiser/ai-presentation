<template>
  <div class="laser-pointer" :style="{transform: `translate3d(${x}px, ${y}px,0)`}">
  </div>
</template>

<script setup lang="ts">
let x = ref(0);
let y = ref(0);

function movePointer(e: MouseEvent) {
  x.value = e.clientX;
  y.value = e.clientY;
}

onMounted(() => {
  window.addEventListener("mousemove", movePointer);
});

</script>

<style scoped lang="less">
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
}
</style>

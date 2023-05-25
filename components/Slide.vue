<template>
  <div class="slide">
    <div class="slide__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">
.slide {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>

<script setup lang="ts">

</script>

<template>
  <div class="layout">
    <!--    <laser-pointer />-->
    <transition name="fade">
      <slot />
    </transition>
  </div>
</template>

<style>
.layout {
  cursor: url('@/assets/images/laser-pointer.png'), auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 10.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">

</script>

<template>
  <main class="layout">
    <transition name="fade">
      <slot :key="$route.fullPath" />
    </transition>
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">

import { onKeyStroke } from '@vueuse/core'

const showPointer = ref(false)
onKeyStroke('l', () => {
  showPointer.value = !showPointer.value
})
</script>

<template>
  <main class="layout" :class="{'no-cursor': showPointer}">
    <laser-pointer v-if="showPointer" />
    <slot :key="$route.fullPath" />
  </main>
</template>

<style>
.no-cursor {
  cursor: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">

import { onKeyStroke, useFullscreen } from '@vueuse/core'

const showPointer = ref(false)
onKeyStroke('l', () => {
  showPointer.value = !showPointer.value
})

const slideRef = ref(null)

const {
  toggle
} = useFullscreen(slideRef)

onKeyStroke(['f'], () => {
  toggle()
})
</script>

<template>
  <main ref="slideRef" class="layout" :class="{'no-cursor': showPointer}">
    <laser-pointer v-if="showPointer" />
    <transition name="fade">
      <slot :key="$route.fullPath" />
    </transition>
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

<script setup lang="ts">

import { onKeyStroke } from '@vueuse/core'

let showPointer = ref(false);
onKeyStroke('l', (e) => {
  showPointer.value = !showPointer.value
})

</script>

<template>
  <div class="layout" :class="{'no-cursor': showPointer}">
    <laser-pointer v-if="showPointer"/>
    <transition name="fade">
      <slot :key="$route.fullPath"/>
    </transition>
  </div>
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

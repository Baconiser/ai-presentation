<script setup lang="ts">
const showLaserpointer = ref<boolean>(false)

function toggleShortcuts (e: KeyboardEvent) {
  if (e.key === 'l') {
    showLaserpointer.value = !showLaserpointer.value
  }
}

onMounted(() => {
  window.addEventListener('keydown', toggleShortcuts)
  // add event listener for keypress
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', toggleShortcuts)
  // remove event listener for keypress
})
</script>

<template>
  <div class="layout" :class="{'no-cursor': showLaserpointer}">
    <laser-pointer v-if="showLaserpointer" />
    <transition name="fade">
      <slot />
    </transition>
  </div>
</template>

<style>
.no-cursor {
  cursor: none;
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

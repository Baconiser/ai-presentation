<script setup lang="ts">


onMounted(() => {

  if (process.client) {
    const event = new EventSource('/api/connect');

    event.addEventListener('message', (e) => {
      console.log(e.data);
      //todo update state

    });
  }
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
</style>

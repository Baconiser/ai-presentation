<template>
  <button @click="emitMessage">Test</button>
</template>

<script setup lang="ts">
let socket = reactive({});
onMounted(() => {
  socket = this.$nuxtSocket({
    // nuxt-socket-io opts:
    name: 'home', // Use socket "home"
    channel: '/index', // connect to '/index'

    // socket.io-client opts:
    reconnection: false
  })
})

async function emitMessage() {
  let messageRxd = await socket.emitP('getMessage', { id: 'abc123' })
  console.log(messageRxd);
}

</script>

<style scoped>

</style>

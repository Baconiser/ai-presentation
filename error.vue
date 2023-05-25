<script setup lang="ts">
import { Ref } from 'vue'

const pageTitle: Ref<string> = ref('')
const error: any = useError()
pageTitle.value = `Fehler: ${error.value?.statusCode}`

useHead({ title: pageTitle.value })
</script>

<template>
  <nuxt-layout>
    <main class="main">
      <button class="btn-full back-btn" @click="clearError({redirect: '/'})">
        Zurück zur Startseite
      </button>
    </main>
  </nuxt-layout>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-btn {
  max-width: 300px;
  margin: auto;
}
</style>

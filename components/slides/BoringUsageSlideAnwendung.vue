<script lang="ts" setup>
import tesla from '@/assets/images/boring/tesla.jpeg'
</script>

<template>
  <BoringSlide
    title="Anwendungsgebiete"
    :src="tesla"
  >
    <template #content>
      <div class="space-y-4">
        <h2>Steuerung</h2>
        <p>Tesla: Autopilot</p>
        <p>KI gesteuerte Ampeln</p>
        <p>Drohnen Schwärme fürs Militär</p>
        <p>Apple VisionPro</p>

        <h2>Verarbeitung</h2>
        <p>Kundenservice: Chatbot</p>
        <p>Marketing: Optimale Produkte vorschlagen </p>
        <p>Apple VisionPro</p>
        <p>Google: Google Suche</p>
      </div>
    </template>
  </BoringSlide>
</template>

<style scoped>
h2 {
  @apply text-2xl
}
</style>

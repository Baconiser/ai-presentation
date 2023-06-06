<script lang="ts" setup>
import tesla from '@/assets/images/boring/tesla.jpeg'
</script>

<template>
  <BoringSlide
    title="Anwendungsgebiete"
    :statements="[
      'Amazon: Alexa, Amazon Go',
      'Tesla: Autopilot',
      'Google: Google Suche',
      'FinTech: Betrugsbekämpfung',
      'Medizin: Analysieren von Patientendaten',
      'Marketing: Optimale Produkte vorschlagen ',
      'Kundenservice: Chatbot',
      'Apple: Siri / VisionPro'
    ]"
    :src="tesla"
  />
</template>

<style scoped>

</style>

<script lang="ts" setup>
import segment from '@/assets/images/boring/segment.png'
</script>

<template>
  <BoringSlide
    title="Anwendungsgebiete"
    :src="segment"
  >
    <template #content>
      <div class="space-y-4">
        <h2>Erkennung</h2>
        <p>Amazon: Alexa, Amazon Go</p>
        <p>FinTech: Betrugsbekämpfung</p>
        <p>Google Photos: Gesicht Erkennung und Klassifizierung</p>
        <p>Medizin: Analysieren von Patientendaten, Frühzeitige Diagnose, neue Medikamente & präzisere Therapien</p>
        <p>Medizin: Erkennung von Krankheiten (z.B. Krebsrisiko bei Muttermalen)</p>
        <p><a href="\'https://segment-anything.com/demo\'" target="\'_blank\'">Meta: Segment AI</a></p>
        <p>Landwirtschaft: <a href="\'https://www.instagram.com/reel/CoFnbOkp6G6/\'" target="\'_blank\'">Erkennung von Pflanzen und Krankheiten pro Pflanze</a></p>
      </div>
    </template>
  </BoringSlide>
</template>

<style scoped>
h2 {
  @apply text-2xl
}
</style>

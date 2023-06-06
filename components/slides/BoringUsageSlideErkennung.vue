<script lang="ts" setup>
import segment from '@/assets/images/boring/segment.png'
</script>

<template>
  <BoringSlide
    title="Anwendungsgebiete"
    :statements="[
      'Google Photos: Gesicht Erkennung und Klassifizierung',
      'Landwirtschaft: <a href=\'https://www.instagram.com/reel/CoFnbOkp6G6/\' target=\'_blank\'>Erkennung von Pflanzen und Krankheiten pro Pflanze</a>',
      'Medizin: Erkennung von Krankheiten (z.B. Krebsrisiko bei Muttermalen)',
      '<a href=\'https://segment-anything.com/demo\' target=\'_blank\'>Meta: Segment AI</a>'
    ]"
    :src="segment"
  />
</template>

<style scoped>

</style>

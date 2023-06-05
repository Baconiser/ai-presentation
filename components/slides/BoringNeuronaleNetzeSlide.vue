<script lang="ts" setup>
import neuralnet from '@/assets/images/boring/neuralnet.jpeg'
</script>

<template>
  <BoringSlide
    title="Neuronale Netze"
    :src="neuralnet"
    :statements="[
      'Inspiriert durch das menschliche Gehirn, bestehend aus verbundenen \'Neuronen\' in verschiedenen Schichten.',
      'Eingangsschicht: Nimmt Daten auf, ähnlich wie Webseitenelemente',
      'Versteckte Schichten: Verarbeiten Daten und testen verschiedene Layouts, basierend auf den \'Gewichten\' der Verbindungen zwischen den Neuronen.',
      'Ausgangsschicht: Liefert das beste Ergebnis, ähnlich wie das endgültige Layout und Design einer Webseite.',
      'Lernprozess: Durch Backpropagation und Gradientenabstieg, Anpassung der Neuronengewichte basierend auf Feedback und schrittweise Fehlerminimierung.'
    ]"
  />
</template>

<style scoped>

</style>

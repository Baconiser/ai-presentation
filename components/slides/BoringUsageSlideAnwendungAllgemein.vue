<script lang="ts" setup>
import classification from '@/assets/images/boring/classification.jpg'
</script>

<template>
  <BoringSlide
    title="Anwendungsgebiete - Allgemein"
    :src="classification"
  >
    <template #content>
      <div class="space-y-4">
        <div>
          <h2>Erkennung</h2>
          <p>
            AI erkennt und klassifiziert Muster, Objekte oder Informationen in Daten.<br> Das umfasst Anwendungen wie
            Bilderkennung, Spracherkennung, Texterkennung und Anomalieerkennung.
          </p>
        </div>
        <div>
          <h2>Verarbeitung</h2>
          <p>
            AI verarbeitet und analysiert Daten, um Erkenntnisse zu gewinnen oder Aufgaben zu automatisieren.<br> Das
            umfasst Anwendungen wie Datenanalyse, natürliche Sprachverarbeitung, maschinelles Lernen und Predictive
            Analytics.
          </p>
        </div>
        <div>
          <h2>Steuerung</h2>
          <p>
            AI steuert und optimiert Prozesse, Systeme oder Entscheidungen.<br> Das umfasst Anwendungen wie autonome
            Fahrzeuge, Entscheidungsunterstützungssysteme, Robotik und Prozessautomatisierung.
          </p>
        </div>
        <div>
          <h2>Generierung</h2>
          <p>
            AI generiert neue Inhalte wie Bilder, Texte oder Videos. <br>
            Das umfasst Anwendungen wie Bildgenerierung, Textgenerierung, musikalische Komposition und Videoproduktion.
          </p>
        </div>
      </div>
    </template>
  </BoringSlide>
</template>

<style scoped>
h2 {
  @apply text-2xl
}
</style>

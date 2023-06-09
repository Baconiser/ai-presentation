<script setup lang="ts">
</script>

<template>
  <boring-slide title="Alarmstufe Rot">
    <template #content>
      <poem-section>
        <template #poem>
          <p>
            Experten warnen mit kritischem Blick,<br>
            KI bringt Gefahren, wie Krieg und Pandemik.
          </p>
          <p>
            Unterzeichner bekannt, Sam Altman und Hassabis dabei,<br>
            Sie stellen die Frage: Ist KI wirklich einerlei?
          </p>
          <p>
            Global Prioritäten setzen, das Risiko minimieren,<br>
            Sonst könnten wir unsere Auslöschung riskieren.
          </p>
          <p>
            Eine Pause, ein Halt, so die Führer der KI,<br>
            Damit Sicherheit und Kontrolle nicht bleiben Fantasie.
          </p>
        </template>
        <template #img>
          <div class="flex flex-col justify-center items-center gap-4">
            <video src="@/assets/videos/alarmstufe-rot.mp4" loading="lazy" controls />
            <p class="hint">
              Video von Lalamu
            </p>
            <p class="hint">
              Audio von ElevenLabs
            </p>
          </div>
        </template>
      </poem-section>
    </template>
  </boring-slide>
</template>

<style scoped></style>

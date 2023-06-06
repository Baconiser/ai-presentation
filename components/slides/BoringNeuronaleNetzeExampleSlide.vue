<script lang="ts" setup>
const summoned = ref(false)
const loading = ref(false)
const prompt = ref(`
persona:
  profession: Experte für KI-Präsentationen und Java-Programmierung
  tone: einfach, klar und ansprechend
  focus: Optimierung von Präsentationstexten über Künstliche Intelligenz
instructions:
  main: Optimiere den gegebenen Präsentationstext über KI für die Anzeige auf
    einem Präsentationsslide.
  sub:
  - Halte die Sprache einfach und verständlich, als ob Sie es einem Fünfjährigen
    erklären würden.
---
strukturiere mehrere absätze mit <p>absatz</p> <p>absatz</p>
markiere viele wichtige wörter im text mit <span class="hl">wichtiges wort</span>
beispiel: <p>...<span class="hl">wort</span></p> <p><span class="hl">wichtig</span>...</p>
Text als HTML formatiert, so wie das beispiel, hier ist mein Text:
---
-Inspiriert durch das menschliche Gehirn, bestehend aus verbundenen 'Neuronen' in verschiedenen Schichten.
-Eingangsschicht: Nimmt Daten auf, ähnlich wie Webseitenelemente
-Versteckte Schichten: Verarbeiten Daten und testen verschiedene Layouts, basierend auf den 'Gewichten' der Verbindungen zwischen den Neuronen.
-Ausgangsschicht: Liefert das beste Ergebnis, ähnlich wie das endgültige Layout und Design einer Webseite.
-Lernprozess: Durch Backpropagation und Gradientenabstieg, Anpassung der Neuronengewichte basierend auf Feedback und schrittweise Fehlerminimierung.'`)

const data = {
  apiKey: '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',
  model: 'text-davinci-003',
  prompt: prompt.value,
  temperature: 0.7,
  maxTokens: 1500,
  frequencyPenalty: 0
}

const getFromOpenAI = () => {
  loading.value = true
  return $fetch('https://openai-proxy-ls.deno.dev/api/complete', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

const json = ref({})
const text = computed(() => {
  if (summoned) {
    return json.value.choices[0].text
  } else {
    return ''
  }
})

async function summon () {
  const data = await getFromOpenAI()
  loading.value = false
  console.log(data)
  if (data) {
    summoned.value = true
    json.value = data as {}
  }
}
</script>

<template>
  <BoringSlide
    title="Neuronale Netze - Beispiel"
  >
    <template #content>
      <button v-if="!summoned" :disabled="loading" class="button" type="button" @click="summon">
        <span v-if="loading">Waiting for OpenAI</span>
        <span v-else>Summon OpenAI</span>
      </button>
      <div
        v-if="summoned"
        class="space-y-4"
        v-html="text"
      />
    </template>
  </BoringSlide>
</template>

<style scoped>

</style>

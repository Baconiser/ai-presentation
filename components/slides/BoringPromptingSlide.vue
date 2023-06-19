<script lang="ts" setup>
</script>

<template>
  <BoringSlide
    title="Prompting"
  >
    <template #content>
      <div class="space-y-4">
        <p>
          Es ist wichtig, die Aufgabe für die KI <span class="hl">besonders konkret</span> zu formulieren.
        </p>
        <p><span class="hl">Ausprobieren</span> kann helfen, die Interaktion zu verbessern.</p>
        <p>Es ist wichtig <span class="hl">sensibel mit Daten</span> umzugehen.</p>
        <p>Es sollte beachtet werden, dass die KI tatsächlich falsche Informationen produzieren kann und wird, sowie Fakten und Handlungen <span class="hl">halluzinieren kann</span>.</p>
        <p>Zero Shot Prompting</p>
        <pre class="text-sm">
Complete the sentence: Die Hauptstadt von Deutschland ist
        </pre>
        <p>Few Shot Prompting</p>
        <pre class="text-sm">
The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.
A: The answer is False.

The odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.
A: The answer is True.

The odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.
A: The answer is True.

The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1.
A: </pre>
      </div>
      <div class="space-y-4">
        <p>
          Beginne mit <span class="hl">"I want you to act as..."</span> (personal trainer/copywriter/comedian/etc.)
        </p>
        <p>
          Dann <span class="hl">"I will..."</span>
          Welche Informationen wirst du genau zur Verfügung stellen?
        </p>
        <p>
          Dann <span class="hl">"You will..."</span>
          Du kannst so spezifisch sein, wie du möchtest.
          Welche Punkte sollte es zurückgeben? Wie ist der Stil? Tonfall?
        </p>
        <p>
          Dann formuliere deine spezifische Anfrage.
        </p>

        <p>Negative Prompting</p>
      </div>
    </template>
  </BoringSlide>
</template>

<style scoped>

</style>

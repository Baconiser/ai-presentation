<script setup lang="ts">
import LLMJourney from '@/assets/images/boring/llm-journey.png'
import LLMGrowth from '@/assets/images/boring/llm-growth.png'
</script>

<template>
  <boring-slide title="Large language model (LLM)">
    <template #content>
      <div class="grid grid-cols-2 gap-x-8 w-full">
        <div class="space-y-4">
          <p>GPT: Generative Pretrained Transformer</p>
          <p>GPT-3 ist ein 175-Milliarden-Parameter-Sprachmodell. Es hat auf 570 GB Text Daten trainiert in 355 Jahre Rechenleistung</p>
          <p>Google PaLM 2 ist ein 340-Milliarden-Parameter-Sprachmodell trainiert auf 3,6 Billionen Tokens</p>
          <p>GPT-4 geschätzt 1 Billionen Parameter und 825 TB Daten</p>
          <p>Microsoft Orca 13 Milliarden Parameter</p>
          <div>
            <p>
              <strong>Transformer</strong><br>
              Lernen und verstehen Beziehungen zwischen Wörtern und semantischen Komponenten
            </p>
          </div>
          <div>
            <p>
              <strong>Generative Adversarial Networks (GANs)</strong><br>
              Besteht aus einem generierenden und einem beurteilenden Algorithmus
            </p>
          </div>
          <p>Alignment: Reinforcement learning from human feedback</p>
        </div>
        <div class="flex flex-col gap-8">
          <div class="flex gap-4 flex-col">
            <img loading="lazy" class="w-full max-h-[300px] object-contain" :src="LLMJourney">
            <img loading="lazy" class="w-full max-h-[400px] object-contain" :src="LLMGrowth">
          </div>
        </div>
      </div>
    </template>
  </boring-slide>
</template>

<!--
1. **Grundidee hinter GPT-Modellen:** GPT-Modelle (Generative Pretrained Transformer) generieren Text, indem sie versuchen, das wahrscheinlichste nächste Wort in einer gegebenen Sequenz von Wörtern vorherzusagen. Sie arbeiten Wort für Wort und haben keinen vorgefertigten Plan oder Endpunkt für die generierte Antwort.

2. **Unterschied zum menschlichen Sprachverständnis:** Menschen haben in der Regel eine grobe Idee von dem, was sie sagen oder schreiben wollen, bevor sie es tun. GPT-Modelle dagegen generieren Text Wort für Wort, ohne vorher zu wissen, wie die gesamte Antwort aussehen wird.

3. **Generierung sinnvoller Sätze:** Durch das Anreihen von Wörtern auf Basis von Wahrscheinlichkeiten kann GPT in der Regel sinnvolle Sätze bilden.

4. **Einsatz von semantischen Räumen:** Jedes Wort wird in einem semantischen Raum durch einen hochdimensionalen Vektor repräsentiert, der seine semantische Bedeutung widerspiegelt. Ähnliche Wörter sind in diesem Raum nahe beieinander. Dies ermöglicht es dem Modell, den Kontext und die Bedeutung von Sätzen zu verstehen und sinnvolle Vorhersagen zu treffen.

5. **Limitationen:** Obwohl GPT-Modelle in der Lage sind, überzeugenden Text zu generieren, haben sie kein tiefes Verständnis von Sprache oder Bedeutung. Sie können nicht wirklich "verstehen" im menschlichen Sinne und sind nicht in der Lage, über den Text nachzudenken oder auf Wissen zurückzugreifen, das nicht in ihren Trainingsdaten enthalten ist.

6. **Die Rolle von Training und Daten:** Die Leistung dieser Modelle wird durch Training mit großen Datenmengen verbessert. Die Modelle lernen aus den Mustern in den Daten und verwenden diese, um zukünftige Vorhersagen zu treffen.

7. **Auswirkungen auf den Dialog:** GPT-Modelle können gelegentlich redundante oder eintönige Antworten generieren, da sie nicht die Fähigkeit haben, ihre Ausgaben auf höherer Ebene zu planen oder zu kontrollieren.

8. **Verwendung von Kontext:** GPT-Modelle nutzen den Kontext eines gegebenen Textes, um Vorhersagen zu treffen. Sie nutzen Kontextvektoren, um mögliche Nachfolgerwörter zu bestimmen.

9. **Komplexität der Sprache:** Die Sprache ist komplex und die Einbettung in den semantischen Raum kann nur eine grobe Annäherung an echtes Sprachverständnis sein.
-->
<style scoped></style>

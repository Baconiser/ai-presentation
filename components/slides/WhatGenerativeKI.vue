<script setup lang="ts">
import generativeAI from '@/assets/images/boring/generative-ai.png'
import ChatGrowth from '@/assets/images/boring/chat-growth.jpeg'
</script>

<template>
  <boring-slide title="Was ist generative AI?">
    <template #content>
      <div class="grid grid-cols-2 gap-x-8 w-full">
        <div class="space-y-4">
          <div>
            <p><strong>Discriminative AI</strong> will die Frage "Ist das eine Zeichnung von einem Kaninchen oder einem Löwen?" beantworten.</p>
            <p>
              <strong>Generative AI</strong> reagiert auf einen Input wie "Zeichne mir ein Bild von einem Löwen, der neben einem Kaninchen sitzt".
              sie auf Grundlage historischer Daten etwas bisher nicht Dagewesenes erzeugt
            </p>
          </div>
          <div>
            <p>Generative KI nutzt maschinelles Lernen zur Verarbeitung großer Datenmengen</p>
            <p>Beispiele: Textgenerierung in Chatbots (ChatGPT), Bildgenerierung (DALL-E)</p>
          </div>
          <p>Generiert Vorhersagen oder Erzeugnisse basierend auf den analysierten Daten</p>
          <p>Alles was generiert/vorhersagt ist intelligent</p>
          <div>
            <p>
              Im Gegensatz zu klassischer Software und KI der Vergangenheit:
              <strong>Allgemeine Intelligenz hat keine Obergrenze!</strong>
            </p>
          </div>
          <p>
            Nach Angaben von Github haben mehr als eine Million Entwickler Copilot verwendet, wobei die Nutzer inzwischen mehr als 40 % ihres Codes mit dem Tool erstellen.
          </p>
        </div>
        <div class="flex flex-col gap-8">
          <div class="flex gap-4 flex-col">
            <img loading="lazy" class="w-full max-h-[300px] object-contain" :src="generativeAI">
            <img loading="lazy" class="w-full max-h-[400px] object-contain" :src="ChatGrowth">
          </div>
        </div>
      </div>
    </template>
  </boring-slide>
</template>

<style scoped></style>

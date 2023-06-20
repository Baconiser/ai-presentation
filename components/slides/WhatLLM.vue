<script setup lang="ts">
import LLMJourney from '@/assets/images/boring/llm-journey.png'
import LLMGrowth from '@/assets/images/boring/llm-growth.png'
</script>

<template>
  <boring-slide title="Large language model (LLM)">
    <template #content>
      <div class="grid grid-cols-2 gap-x-8 w-full">
        <div class="space-y-4">
          <p>GPT: Generative Pre trained Transformer</p>
          <p>GPT-3 hat auf 570 GB Text Daten trainiert </p>
          <p>300 Jahre Rechenleistung und 170 Milliarden Verbindungen im neuronalen Netzwerk</p>
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
          <p>Alignmenent: Reinforcement learning from human feedback</p>
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

<style scoped></style>

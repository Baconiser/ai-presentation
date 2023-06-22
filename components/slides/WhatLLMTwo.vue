<script setup lang="ts">
import WordCloud from '@/assets/images/boring/wordcloud.jpeg'

const flip = ref(false)
const zeit = ref(false)
const berlin = ref(false)
</script>

<template>
  <boring-slide title="Large language model (LLM)">
    <template #content>
      <div class="grid grid-cols-2 gap-x-8 w-full">
        <div class="space-y-4">
          <p>Text Input (Prompt) -> LLM (+Random Temperature) -> Text Output</p>
          <p>Jedes Wort hat eine Nummer einen Token</p>
          <p>In 12288 Dimensionen gemappt</p>
          <p>96 Layers pro Wort werden durchgegangen</p>
          <p>Diese ML-Systeme denken nicht wirklich. Alles, was sie tun, ist Mustererkennung</p>
          <p>Es sollte beachtet werden, dass die KI tatsächlich falsche Informationen produzieren kann und wird, sowie Fakten und Handlungen <span class="hl">halluzinieren kann</span>.</p>
          <div>
            <p>Es war einmal vor langer langer <span v-if="!zeit" @click="zeit = true">___</span><span v-else class="hl">100% Zeit</span></p>
            <p>Die Hauptstadt von Deutschland ist
              <span v-if="!berlin" @click="berlin = true">___</span>
              <span v-else class="block hl">80% Berlin, 4% nicht, 3 % die</span></p>
          </div>
          <pre @click="flip = true">
Annahme: 3 x 3 macht 6
Was ist 4x4?</pre>
          <pre v-if="flip">
3 - 3 = 0 + 6
4 - 4 = 0 + 6</pre>
        </div>
        <div class="flex flex-col gap-8">
          <div class="flex gap-4 flex-col">
            <img loading="lazy" class="w-full max-h-[500px] object-contain" :src="WordCloud">
          </div>
        </div>
      </div>
    </template>
  </boring-slide>
</template>

<style scoped></style>

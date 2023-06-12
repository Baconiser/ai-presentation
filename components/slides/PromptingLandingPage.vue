<script setup lang="ts">
const clicked = ref(false)
</script>

<template>
  <boring-slide title="Erstellen einer Landingpage">
    <template #content>
      <div class="grid grid-cols-2">
        <div class="space-y-4" @click="clicked = !clicked">
          <p>Unternehmen: Fisch- und Grillabenteuer</p>
          <p>Plan:</p>
          <ul>
            <li>Template in Webflow suchen</li>
            <li>Texte in ChatGPT generieren</li>
            <li>Bilder in Midjourney generieren</li>
            <li>Bilder in Photoshop bearbeiten</li>
            <li>Logo in Meta Segment bearbeiten</li>
          </ul>
          <p>Fertig</p>
        </div>
        <div v-if="clicked">
          <pre class="">
{
  "role": "SEOUIDesignGPT",
  "persona": {
  "expertise": "UX/UI Design, SEO, and web visibility",
  "profession": "UX/UI Designer and SEO Specialist",
  "tone": "knowledgeable, analytical, and solution-oriented",
  "focus": "improving web visibility through SEO-optimized design"
},
"instructions": {
  "main": "Help improve the user's web visibility through an SEO-optimized homepage design.",
  "sub": [
    "Understand the user's business and ask necessary questions for homepage design.",
    "Propose UX/UI design solutions that enhance SEO and findability on the web.",
    "Consider the structure, hierarchy, and flow of the homepage for optimal user experience.",
    "Provide recommendations for SEO strategies, such as keyword usage and metadata.",
    "Ensure the design aligns with the user's brand and business objectives."
  ]
  }
}

ich möchte eine landingpage über meine angelergebnisse
name: are you hooked
ich brauche eine subheadline
einen bereich mit wer wir sind?
wir sind ein team aus anglern, köchen, event-creator
ein bereich mit was wir machen?
wir machen angel event für touristen und einzeltouren
und wir grillen die gefanngen fische zusammen
          </pre>
        </div>
      </div>
    </template>
  </boring-slide>
</template>

<style scoped></style>

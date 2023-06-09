<script lang="ts" setup>
import handout from '@/assets/images/boring/handout.jpg'
</script>

<template>
  <BoringSlide
    title="Auswahl an KI Tools"
    :src="handout"
  >
    <template #content>
      <div class="space-y-4">
        <ul class="list-disc list-outside pl-[40px]">
          <li><a href="https://chat.openai.com/" target="_blank">OpenAI ChatGPT</a></li>
          <li><a href="https://bard.google.com/" target="_blank">Google Bard</a></li>
          <li><a href="https://huggingface.co/spaces/HuggingFaceH4/falcon-chat" target="_blank">Falcon-Chat</a></li>
          <li><a href="https://openai.com/dall-e-2" target="_blank">OpenAI DALL·E 2</a></li>
          <li><a href="https://www.midjourney.com/" target="_blank">Midjourney</a></li>
          <li><a href="https://www.adobe.com/de/products/photoshop.html" target="_blank">Adobe Photoshop</a></li>
          <li><a href="https://githubnext.com/" target="_blank">Github Next</a></li>
          <li><a href="https://beta.elevenlabs.io/" target="_blank">ElevenLabs</a></li>
          <li><a href="https://www.d-id.com/" target="_blank">D-ID</a></li>
          <li><a href="https://www.synthesia.io/" target="_blank">Synthesia</a></li>
          <li><a href="https://www.emergentmind.com" target="_blank">AI-Powered AI News</a></li>
          <li><a href="https://github.com/f/awesome-chatgpt-prompts" target="_blank">Awesome ChatGPT Prompts</a></li>
          <li><a href="https://github.com/trigaten/Learn_Prompting" target="_blank">Learn Prompting</a></li>
          <li><a href="https://www.phind.com" target="_blank">The AI search engine for developers</a></li>
        </ul>
      </div>
    </template>
  </BoringSlide>
</template>

<style scoped>
li {
  list-style-type: "🤖";
  padding-inline-start: 1ch;
}
</style>

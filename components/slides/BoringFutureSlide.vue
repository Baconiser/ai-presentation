<script lang="ts" setup>
import future from '@/assets/images/boring/future.jpg'
</script>

<template>
  <BoringSlide
    title="Ausblick"
    :src="future"
  >
    <template #content>
      <div class="space-y-4">
        <div>Over 2k new Al tools have launched in the past 30 days</div>
        <p>Die Rolle des Menschen: wir werden zum Orchestrator des Wissen, damit kommt eine neue Verantwortung</p>
        <p>Big Players to watch:</p>
        <ul>
          <li>Microsoft/Google/Apple/Meta</li>
          <li>OpenAI</li>
          <li>Adobe</li>
          <li>Nvidia</li>
          <li>Hugging Face</li>
        </ul>
      </div>
    </template>
  </BoringSlide>
</template>

<style scoped>

</style>

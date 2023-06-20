<script lang="ts" setup>
import microsoft from '@/assets/images/boring/hello-microsoft.jpg'

const flip = ref(false)
</script>

<template>
  <BoringSlide
    title="Automatisierung"
    :src="microsoft"
  >
    <template #content>
      <div class="w-full h-full" @click="flip = !flip">
        <iframe v-if="flip" src="https://tmpfiles.web-dienstleister.de/ai-presentation/ppt/index.html" class="w-full h-full pb-2" />
        <div v-else class="w-full h-full">
          <video class="w-full" src="@/assets/videos/tome.mp4" controls />
          <p class="hint">
            <a href="https://tome.app/nuggets/die-geschichte-der-ki-und-ihre-reise-bis-hierhin-clj31x10q04too6t8nedkspyy" target="\'_blank\'">Tome Presentation</a>
          </p>
        </div>
      </div>
    </template>
  </BoringSlide>
</template>

<style scoped>

</style>

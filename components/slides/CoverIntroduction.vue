<script setup lang="ts">
import bg from '@/assets/images/bg/lock.jpeg'
</script>

<template>
  <CoverLayout
    :img="bg"
  >
    <template #text>
      <p>
        Ein Abenteuer startet nun,<br>
        mit KI, es gibt viel zu tun.<br>
        Steigt ein in die Expedition,<br>
        es beginnt die KI-Mission.
      </p>
      <video src="@/assets/videos/ki-mission.mp4" controls />
    </template>
  </CoverLayout>
</template>

<style scoped></style>

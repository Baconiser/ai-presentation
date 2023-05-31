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
      </p>
      <p>
        Steigt ein in die Expedition,<br>
        es beginnt die KI-Mission.
      </p>
    </template>
  </CoverLayout>
</template>

<style scoped>
p {
  color: #fff;
  font-weight: 100;
  font-size: 50px;
  font-family: operator mono,Courier New,monospace;
  line-height: 1.5;
  text-shadow: 4px 3px 0 rgba(0,0,0,.3);
  text-align: center;
  margin: 80px 5% 40px;
}
</style>

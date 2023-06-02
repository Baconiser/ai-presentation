<script setup lang="ts">
</script>

<template>
  <content-section headline="Geschichte der Künstlichen Intelligenz">
    <poem-section>
      <template #poem>
        <p>
          Es begann im Jahr 1956,<br>
          ein neuer Begriff war fix.<br>
          John McCarthy hat's gedacht,<br>
          'Künstliche Intelligenz' war gebracht.
        </p>
        <p>
          <span class="hl">Schachprogramme</span> kamen dann dazu,<br>
          lösten Probleme im Nu. <br>
          In den 50ern und 60ern aufgewacht,<br>
          hat die KI uns Freude gebracht.
        </p>
      </template>
      <template #img>
        <img loading="lazy" class="w-full aspect-[16/9] object-cover object-center" src="@/assets/images/poem/chessboard.jpeg" alt="">
        <p class="hint">
          Gedicht: OpenAI ChatGPT
        </p>
        <p class="hint">
          Bild: Stable Diffusion XL
        </p>
      </template>
    </poem-section>
  </content-section>
</template>

<style scoped>

</style>

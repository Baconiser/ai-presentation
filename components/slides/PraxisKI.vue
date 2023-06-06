<script setup lang="ts">
</script>

<template>
  <content-section headline="Praxisbeispiele von KI-Anwendungen">
    <poem-section>
      <template #poem>
        <p>
          DeepMind, ein Star in der Medizin,<br> LearningSlides im Bildungsbereich kein Spinn.<br>
          Mit KI kann man <span class="hl">Wunder sehen</span>,<br> lasst uns nicht durchdrehen.
        </p>
        <p>
          Amazon und Netflix sind schlau,<br> nutzen KI und machen Personalabbau. 🥲<br>
          Mit KI's Hilfe, ganz ungeniert,<br> wird unser Leben revolutioniert.
        </p>
      </template>
      <template #img>
        <img loading="lazy" class="w-full" src="https://mind-video.com/static/media/test304.ad1271acf065ab55c5ef.gif">
        <p class="hint">
          <a href="https://mind-video.com/" target="_blank">Mind-Video</a>
        </p>
        <audio controls class="w-full mt-10">
          <source src="@/assets/audios/praxis.mp3">
        </audio>
      </template>
    </poem-section>
  </content-section>
</template>

<style scoped></style>

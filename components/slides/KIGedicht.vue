<script setup lang="ts">
</script>

<template>
  <boring-slide title="Gedicht">
    <template #content>
      <div class="grid grid-cols-2 gap-x-8 w-full">
        <div class="space-y-4">
          <p>
            Die KI, sie flüstert leise,<br>
            In Zahlen spricht sie ihre Weise.<br>
            Mit KI kann man <span class="hl">Wunder sehen</span>,<br>
            lasst uns nicht durchdrehen.
          </p>
          <p>
            Sie lernt aus Fehlern, nimmt ihren Lauf,<br>
            Künstliche Neuronen bauen sich auf.<br>
            Sie siebt, sie ordnet, sie verknüpft,<br>
            Bis am Ende Wissen schlüpft.
          </p>
          <p>
            Amazon und Netflix sind schlau,<br>
            Nutzen KI und machen Personalabbau. 🥲<br>
            Mit KI's Hilfe, ganz ungeniert,<br>
            Wird unser Leben revolutioniert.
          </p>
          <p>
            Roses are red, violets are blue,<br>
            AI's magic is real, and it's here for you.
          </p>
        </div>
        <div>
          <img loading="lazy" class="w-full" src="https://mind-video.com/static/media/test304.ad1271acf065ab55c5ef.gif">
          <p class="hint">
            <a href="https://mind-video.com/" target="_blank">Mind-Video</a>
          </p>
          <audio controls class="w-full mt-10">
            <source src="@/assets/audios/gedicht.mp3">
          </audio>
        </div>
      </div>
    </template>
  </boring-slide>
</template>

<style scoped></style>

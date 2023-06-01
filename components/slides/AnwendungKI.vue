<script setup lang="ts"></script>

<template>
  <content-section headline="Anwendungsbereiche von KI">
    <poem-section>
      <template #poem>
        <p>
          KI in Gesundheit und Bildung am Start,<br> sie hilft uns allen - und jetzt Abfahrt.<br>
          Frühzeitige Diagnose, Lernen maßgeschneidert,<br> KI hat unser Wissen erweitert.
        </p>
        <p>
          Wirtschaft und Unterhaltung gehen voran,<br> KI hilft uns, macht uns zum Fachmann.<br>
          Kundenerlebnis, Betriebsabläufe optimiert,<br> KI hat sich hier etabliert.
        </p>
      </template>
      <template #img>
        <video src="@/assets/videos/ki-anwendung.mp4" loading="lazy" controls />
        <p class="text-sm text-center mt-4">
          Video von Quelle
        </p>
      </template>
    </poem-section>
  </content-section>
</template>

<style scoped></style>

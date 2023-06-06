<script lang="ts" setup>
const backend = ref(false)
</script>

<template>
  <BoringSlide
    title="Machine Learning - Beispiel"
  >
    <template #content>
      <template v-if="!backend">
        <div class="space-y-4">
          <p>
            Stellt euch vor, ihr seid <span class="hl">Frontend-Entwickler</span> und arbeitet an einer <span
              class="hl"
            >Website</span>, die auf die Bedürfnisse eurer Nutzer abgestimmt werden soll. Ein Aspekt, den
            ihr vielleicht optimieren wollt, ist die Platzierung von Call-to-Action-Buttons, um die Klickrate zu
            erhöhen.
          </p>
          <p>
            Hier kommt <span class="hl">Machine Learning</span> ins Spiel. Mit den richtigen Daten könntet ihr ein
            maschinelles Lernmodell trainieren, um Muster und Trends zu erkennen, die zu höheren Klickraten führen.
            Diese Daten könnten von früheren Benutzerinteraktionen auf der Website stammen, einschließlich wo sie
            geklickt haben, wie lange sie auf verschiedenen Seiten verbracht haben, welche Seiten sie besucht haben,
            bevor sie auf den Button geklickt haben und so weiter.
          </p>
          <p>
            Euer <span class="hl">Machine Learning Modell</span> würde diese Daten verwenden, um zu 'lernen', welche
            Faktoren zu höheren Klickraten führen. Es könnte dann Vorhersagen machen, wo auf zukünftigen Seiten
            Call-to-Action-Buttons platziert werden sollten, um optimale Ergebnisse zu erzielen.
          </p>
          <p>
            Aber wie sieht es mit komplexeren Aufgaben aus, wie dem Erkennen von Bildern oder dem Verstehen von
            Sprache?
          </p>
        </div>
      </template>
      <template v-else>
        <div class="space-y-4">
          <p>
            Also, stellt euch <span class="hl">Maschinelles Lernen</span> als den heimlichen Superhelden vor, der im
            Hintergrund eurer Java-Anwendungen und Datenbanken arbeitet. Es ist ein ganz wichtiger Teil der <span
              class="hl"
            >Künstlichen Intelligenz</span>, und sein Superhelden-Kraft besteht darin, dass es
            Computerprogrammen ermöglicht, neue Dinge zu lernen, indem es Muster in den Daten erkennt, mit denen es
            arbeitet - und das alles ohne, dass es jemand explizit dafür programmiert hat.
          </p>
          <p>
            Lasst uns das mit einem einfachen Beispiel aus eurem Backend-Alltag erklären: Stellt euch vor, ihr habt
            eine große Datenbank mit vielen, vielen E-Mails (ihr könnt euch das vorstellen wie eine riesige Schatztruhe
            voller Briefe). Einige dieser E-Mails sind gut (das sind die Schätze), aber andere sind Spam (das sind die
            unerwünschten Dinge in der Truhe). Als Backend-Entwickler wollt ihr natürlich sicherstellen, dass eure
            Nutzer nur die guten E-Mails sehen und der Spam herausgefiltert wird.
          </p>
          <p>
            Jetzt kommt das <span class="hl">Maschinenlernen</span> ins Spiel! Es ist wie ein kleiner, fleißiger
            Helfer, der lernt, welche E-Mails Spam sind und welche nicht, indem er nach Mustern und Ähnlichkeiten in den
            Daten sucht. Mit der Zeit wird dieser kleine Helfer immer besser darin, Spam zu erkennen und zu entfernen,
            sodass die Nutzer nur die guten E-Mails in ihrem Posteingang sehen. Und das Tolle ist: Der kleine Helfer
            macht das alles automatisch im Hintergrund, während ihr euch auf andere Aufgaben konzentrieren könnt.
          </p>
        </div>
      </template>
    </template>
  </BoringSlide>
</template>

<style scoped>
.button {
  @apply rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;
}
</style>

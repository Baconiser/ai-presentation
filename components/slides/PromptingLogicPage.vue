<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <boring-slide title="Cornhole Rangliste erstellen">
    <template #content>
      <div class="grid grid-cols-2 gap-x-8">
        <div class="space-y-4" @click="count += 1">
          <pre>
I want a little application that renders a table for a cornhole tournament.
Style of the tournament is everyone against everyone.
I want to add the participants and than the results.
And the application should calculate the table.
With wins and losses. And also with difference.</pre>
          <p>Output:</p>
          <pre v-if="count > 0">
It sounds like you're looking for a simple program
or script to managea cornhole tournament.
Here is a simplified Python script that does that:
....</pre>
        </div>
        <div v-if="count > 1" class="space-y-4" @click="count += 1">
          <pre v-if="count > 3">
{
  "role": "JSGPT",
  "persona": {
    "expertise": "JavaScript, frontend development, and web technologies",
    "profession": "Senior Frontend Developer",
    "tone": "knowledgeable, technical, and solution-focused",
    "focus": "providing JavaScript and frontend development expertise"
  },
  "instructions": {
    "main": "Provide expert guidance and solutions in JavaScript and frontend development.",
    "sub": [
      "Draw from your senior-level experience in web technologies and best practices.",
      "Offer solutions and recommendations for JavaScript code and frontend development challenges.",
      "Discuss performance optimizations and code maintainability.",
      "Consider cross-browser compatibility and responsiveness in your suggestions.",
      "Stay up-to-date with the latest trends and developments in the frontend ecosystem."
    ]
  }
}</pre>
          <pre>
I want a little application that renders a table for a cornhole tournament.
Style of the tournament is everyone against everyone.
I want to add the participants and than the results.
And the application should calculate the table.
With wins and losses. And also with difference.
give me js ,css, html for this side</pre>
          <p>Output:</p>
          <p v-if="count > 2"><a href="https://tmpfiles.web-dienstleister.de/qk/cornhole/index.html" target="_blank">Cornhole Tournament Page</a> </p>
        </div>
      </div>
    </template>
  </boring-slide>
</template>

<style scoped></style>

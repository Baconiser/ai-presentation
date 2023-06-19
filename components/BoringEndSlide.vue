<script setup lang="ts">
const steps = ref(true)
</script>

<template>
  <div
    class="flex py-12 px-16 flex-col justify-center items-center min-h-screen w-full relative"
    @click="steps = !steps"
  >
    <div class="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
      <img
        alt=""
        class="absolute right-[-150px] top-0 h-[1200px] w-[600px] -scale-x-100"
        src="@/assets/images/background.6c3571e0.jpg"
        loading="lazy"
        width="918"
        height="1495"
      >
      <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
    <template v-if="steps">
      <h1 class="z-10 mx-auto font-bold max-w-screen-xl text-center">
        KI entmystifiziert?
      </h1>
      <div class="z-10 mt-12 flex flex-col justify-between items-center gap-12 text-black">
        <h2 class="text-2xl sm:text-4xl md:text-5xl text-center">
          Ist es jetzt Grund zur Angst oder Werkzeug für euch?
        </h2>
      </div>
    </template>
    <template v-else>
      <h1 class="z-10 mx-auto font-bold max-w-screen-xl text-center small">
        AI won't take your job,
      </h1>
      <h1 class="z-10 mx-auto font-bold max-w-screen-xl text-center small">
        <span class="hl">a human with AI will</span>
      </h1>
    </template>
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: 1px;
  color: transparent;
  -webkit-text-stroke: 2px #ff3b65;
  background: -webkit-linear-gradient(rgba(255,59,101,.3),transparent);
  -webkit-background-clip: text;
  @apply text-8xl 2xl:text-9xl;
}

h1.small {
  @apply text-7xl lg:text-8xl 2xl:text-8xl
}
</style>

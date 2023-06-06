<script setup lang="ts">
</script>

<template>
  <div class="flex py-12 px-16 flex-col justify-center items-center min-h-screen w-full relative">
    <div class="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
      <img
        alt=""
        class="absolute right-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:right-[-80%] sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
        src="@/assets/images/background.6c3571e0.jpg"
        loading="lazy"
        width="918"
        height="1495"
      >
      <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
    <div class="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden">
      <img
        alt=""
        class="absolute right-0 top-0 -scale-x-100 sm:translate-x-[-98%] sm:translate-y-[10%] lg:translate-x-[-36%]"
        src="@/assets/images/blobanimation.svg"
        loading="lazy"
        width="1495"
        height="1495"
      >
    </div>
    <h1 class="z-10 mx-auto font-bold max-w-screen-xl text-center">
      <span class="hl">One</span> more thing...
    </h1>
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: 1px;
  color: transparent;
  -webkit-text-stroke: 2px #ff3b65;
  background: -webkit-linear-gradient(rgba(255,59,101,.3),transparent);
  -webkit-background-clip: text;
  font-size: 150px;
}
</style>

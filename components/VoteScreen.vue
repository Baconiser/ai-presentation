<script setup lang="ts">
defineProps({
  options: {
    type: Array,
    default () {
      return []
    }
  }
})
</script>

<template>
  <div class="flex flex-col m-0 items-center min-h-screen">
    <div class="flex flex-col items-center justify-center grow gap-2">
      <h1
        class="text-2xl font-extrabold md:text-5xl lg:text-6xl shrink-0 h-12 md:h-20 flex justify-center items-center"
      >
        🤖 <span class="text-red-800">AI</span>rtist or 🎨 Artist
      </h1>
      <div class="gap-x-8 gap-y-2 flex justify-center items-center img-container">
        <div v-for="option in options" :key="option.image" class="flex flex-col max-h-full justify-center">
          <nuxt-img
            alt=""
            format="webp"
            loading="lazy"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw"
            :src="option.image"
            class="max-w-full"
          />
          <div class="flex justify-center shrink-0">
            <vote-button>
              🤖
            </vote-button>
            <div class="w-1 bg-white" />
            <vote-button>
              🎨
            </vote-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
  min-height: 0;
}

.img-container {
  height: calc(100vh - 5rem - 0.5rem - 4rem);
  width: 90vw;
  flex-direction: row;
}

@media screen and (orientation: portrait) {
  .img-container {
    height: calc(100vh - 0.5rem - 4rem);
    width: 90vw;
    flex-direction: column;
  }

  img {
    height: calc(100vh / 2 - 4rem - 0.5rem - 44px) !important;
  }

  @media (min-width: 640px) {
    .img-container {
      height: calc(100vh - 0.5rem - 5rem);
    }

    img {
      height: calc(100vh / 2 - 5rem - 0.5rem - 64px) !important;
    }
  }
}
</style>

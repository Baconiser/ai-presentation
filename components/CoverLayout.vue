<script setup lang="ts">
const props = defineProps<{
  img?: string,
  headline?: string,
  text?: string,
}>()

const randomClass = computed(() => {
  if (props.img) {
    return ''
  }
  const randomIndex = Math.floor(Math.random() * 2)
  return ['a', 'b'][randomIndex]
})
</script>

<template>
  <div
    class="cover w-full h-full bg-no-repeat bg-center bg-cover"
    :style="`background-image: url(${img})`"
    :class="[{gradient: !img}, randomClass]"
  >
    <div class="isolate m-auto w-full h-full flex flex-col justify-center items-center">
      <template v-if="headline">
        <h1 class="font-bold max-w-screen-xl text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-center" v-html="headline" />
      </template>
      <p v-if="text">
        {{ text }}
      </p>
      <slot name="text" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  transform: skew(0, -8deg) rotateY(20deg);
  letter-spacing: 1px;
  line-height: 1;
  color: transparent;
  text-shadow: 5px 5px 0 rgba(0,0,0,0.3);
  -webkit-text-stroke: 2px #ff3b65;
  background: -webkit-linear-gradient(rgba(255,59,101,.3),transparent);
  -webkit-background-clip: text;
}

.cover::before {
  z-index: 0;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  background-image: linear-gradient(360deg, #000 0%, #000 100%);
}

.cover.gradient::after {
  opacity: 0.3;
}

.cover.gradient.a::after {
  background-image: linear-gradient(360deg, #14e839 0%, #3456fd 100%);
}

.cover.gradient.b::after {
  background-image: linear-gradient(105deg, #ae5ceb 0%, #6aa4e1 100%);
}

.cover :deep(p) {
  font-size: 50px;
  text-align: center;
  margin: 80px 5% 40px;
}
</style>

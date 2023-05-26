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
    :style="`background-image: url(${img});`"
    :class="[{gradient: !img}, randomClass]"
  >
    <div class="m-auto w-full h-full flex flex-col justify-center items-center">
      <template v-if="headline">
        <h1 class="font-bold max-w-screen-xl text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-center" v-html="headline" />
      </template>
      <p>{{ text }}</p>
    </div>
    <slot name="text" />
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

h1:deep(.hl) {
  color: #ffc600;
}

.cover::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  filter: grayscale(100%) contrast(160%);
  top: 0;
  left: 0;
  z-index: -2;
}

.cover::after {
  z-index: -1;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.cover.gradient.a::after {
  background-image: -webkit-linear-gradient(90deg, #14e839 0%, #3456fd 100%);
  background-image: linear-gradient(360deg, #14e839 0%, #3456fd 100%);
}

.cover.gradient.b::after {
  background-image: -webkit-linear-gradient(345deg, #ae5ceb 0%, #6aa4e1 100%);
  background-image: linear-gradient(105deg, #ae5ceb 0%, #6aa4e1 100%);
}

p {
  color: #fff;
  font-weight: 100;
  font-size: 50px;
  font-family: operator mono,Courier New,monospace;
  line-height: 1.5;
  text-shadow: 4px 3px 0 rgba(0,0,0,.3);
  text-align: center;
  margin: 40px 5%;
}
</style>

<script setup lang="ts">
const props = defineProps({
  ai: Number,
  artist: Number,
  isAi: Boolean
})

const strokeWidth = 20
const radius = 40
const circumference = 2 * Math.PI * radius

const calculateStrokeOffset = (ai, artist) => {
  const total = ai + artist
  const percentage = ((artist / total) * circumference)
  return circumference - percentage
}

const aiColor = computed(() => {
  if (props.isAi && props.ai >= props.artist) {
    return 'green'
  } else {
    return 'red'
  }
})

const artistColor = computed(() => {
  if (!props.isAi && props.artist >= props.ai) {
    return 'green'
  } else {
    return 'red'
  }
})
</script>

<template>
  <div class="flex justify-between items-center gap-4">
    <svg :width="radius * 2 + strokeWidth * 2" :height="radius * 2 + strokeWidth * 2" class="piechart">
      <!-- Artist -->
      <circle
        :cx="radius + strokeWidth"
        :cy="radius + strokeWidth"
        :r="radius"
        :style="{ strokeDasharray: circumference + ' ' + circumference, strokeDashoffset: '0' }"
        :stroke="aiColor"
        :stroke-width="strokeWidth"
        fill="none"
      />
      <!-- AI-->
      <circle
        :cx="radius + strokeWidth"
        :cy="radius + strokeWidth"
        :r="radius"
        :style="{ strokeDasharray: circumference + ' ' + circumference, strokeDashoffset: calculateStrokeOffset(ai, artist) + '' }"
        :stroke="artistColor"
        :stroke-width="strokeWidth"
        fill="none"
      />
    </svg>
    <div>
      <p class="text-2xl">
        🤖: {{ (ai / (ai + artist) * 100).toFixed(0) }}%
      </p>
      <p class="text-2xl">
        🎨: {{ (artist / (ai + artist) * 100).toFixed(0) }}%
      </p>
    </div>
  </div>
</template>

<style scoped>
.piechart {
  transform: rotate(-90deg);
}
</style>

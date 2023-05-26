<script setup lang="ts">
const options = {
  '🤖': 30,
  '🎨': 70
}

function getPercentage (value:number) {
  const total = Object.values(options).reduce((sum, val) => sum + val, 0)
  return ((value / total) * 100).toFixed(2)
}
</script>

<template>
  <div v-for="(value, key) in options" :key="key" class="bar-container">
    <div class="bar-label">
      {{ key }}
    </div>
    <div class="bar" :style="{ width: getPercentage(value) + '%' }" />
    <div class="bar-percentage">
      {{ getPercentage(value) }}%
    </div>
  </div>
</template>

<style scoped>
.bar-container {
  display: flex;
  align-items: center;
}
.bar-label {
  width: 100px;
}
.bar {
  height: 20px;
  background-color: #4CAF50;
  margin-right: 10px;
  flex-grow: 1;
}
.bar-percentage {
  width: 50px;
}
</style>

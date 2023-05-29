<script setup lang="ts">
onMounted(async () => {
  const jwt = localStorage.getItem('is-worthy')
  if (jwt) {
    await navigateTo('/presenter/0')
  } else {
    await navigateTo('/')
  }
})
</script>

<style scoped>

</style>

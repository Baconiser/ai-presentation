<script setup lang="ts">
onMounted(async () => {
  const jwt = localStorage.getItem('is-worty')
  console.log(jwt);
  if (jwt) {
    await navigateTo('/presenter/0')
  } else {
    await navigateTo('/')
  }
})
</script>

<style scoped>

</style>

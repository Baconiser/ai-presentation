<template>
  <div class="image-stack relative w-full h-[100vh] overflow-hidden">
    <div
      class="image-stack__cards absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-200px pb-[45%] max-w-520px"
    >
      <Card
          v-for="(image, index) in images"
          :id="image"
          :key="index"
          :index="images.length - index"
          :handledState="getHandledState(image)"
          @like="likeImage(index)"
          @dislike="dislikeImage(index)"
          :ref="`card-${index}`"
      >
        <img :src="image" alt="Content" class="w-full h-full object-cover">
      </Card>
    </div>
    <div class="image-stack__buttons">
      <button @click="handleDislike(currentIndex)">
        Dislike
      </button>
      <button @click="handleLike(currentIndex)">
        Like
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  images: { type: Array, default: [] }
})

const handledImages: Ref<{image:string, liked:boolean}[]> = ref([])

const currentIndex = computed(() => {
  return Math.max(0, (props.images.length -1) - handledImages.value.length)
})

const availableImages = computed(() => {
  return props.images.filter((image: any) => {
    return !handledImages.value.find(e => e.image == image)
  })
})

const likeImage = (index: number) => {
  console.log(`Liked image at index ${ index }`)

  handledImages.value.push({ image: props.images[index], liked: true })
  nextImage()
}

const dislikeImage = (index: number) => {
  console.log(`Disliked image at index ${ index }`)
  handledImages.value.push({ image: props.images[index], liked: false })
  nextImage()
}

const nextImage = () => {
  currentIndex.value++
  if (currentIndex.value === props.images.length) {
    currentIndex.value = 0
  }
}

const handleLike = (index: number) => {
  likeImage(index)
}

const handleDislike = (index: number) => {
  dislikeImage(index)
}

function getHandledState(image: string) {
  const handledImage = handledImages.value.find(e => e.image == image)
  if (handledImage) {
    return handledImage.liked ? 'liked' : 'disliked'
  }
  return 'none'
}

onMounted(() => {

})
</script>

<style>

</style>

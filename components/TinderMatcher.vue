<script setup lang="ts">
const props = defineProps({
  contents: { type: Array, default: () => [] },
  type: { type: String, default: '' }
})

const handledContents = ref<{content:string, liked:boolean}[]>([])

const currentIndex = computed(() => {
  return Math.max(0, (props.contents.length - 1) - handledContents.value.length)
})

// const availableContents = computed(() => {
//   return props.content.filter((content: any) => {
//     return !handledContents.value.find(e => e.content === content)
//   })
// })

const likeContent = (index: number) => {
  console.log(`Liked content at index ${index}`)

  handledContents.value.push({ content: props.contents[index], liked: true })
  nextContent()
}

const dislikeContent = (index: number) => {
  console.log(`Disliked content at index ${index}`)
  handledContents.value.push({ content: props.contents[index], liked: false })
  nextContent()
}

const nextContent = () => {
  currentIndex.value++
  if (currentIndex.value === props.contents.length) {
    currentIndex.value = 0
  }
}

const handleLike = (index: number) => {
  likeContent(index)
}

const handleDislike = (index: number) => {
  dislikeContent(index)
}

function getHandledState (content: string) {
  const handledContent = handledContents.value.find(e => e.content === content)
  if (handledContent) {
    return handledContent.liked ? 'liked' : 'disliked'
  }
  return 'none'
}

onMounted(() => {

})
</script>

<template>
  <div class="content-stack relative w-full h-[100vh] overflow-hidden">
    <div
      class="content-stack__cards absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-200px pb-[45%] max-w-520px"
    >
      <Card
        v-for="(content, index) in contents"
        :id="content"
        :key="index"
        :index="contents.length - index"
        :handled-state="getHandledState(content)"
        @like="likeContent(index)"
        @dislike="dislikeContent(index)"
      >
        <img v-if="type === 'image'" :src="content" alt="Content" class="w-full h-full object-cover">
      </Card>
    </div>
    <div class="content-stack__buttons">
      <button @click="handleDislike(currentIndex)">
        Dislike
      </button>
      <button @click="handleLike(currentIndex)">
        Like
      </button>
    </div>
  </div>
</template>

<style scoped></style>

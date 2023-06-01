<script setup lang="ts">
const props = defineProps({
  contents: {
    type: Array as PropType<string[]>,
    default: (): string[] => []
  },
  type: {
    type: String,
    default: ''
  }
})

const handledContents = ref<{ content: string, liked: boolean }[]>([])

const currentIndex = computed(() => {
  return Math.max(0, (props.contents.length - 1) - handledContents.value.length)
})

const likeContent = (index: number) => {
  console.log(`Liked content at index ${index}`)
  vote(props.contents[index], true)
}

function vote (content: string, liked: boolean) {
  handledContents.value.push({
    content,
    liked
  })

  useFetch('/api/send_vote/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: content,
      vote: liked ? 'Artist' : 'AI',
      content
    })
  })
}

const dislikeContent = (index: number) => {
  vote(props.contents[index], false)
}

function getHandledState (content: string) {
  const handledContent = handledContents.value.find(e => e.content === content)
  if (handledContent) {
    return handledContent.liked ? 'liked' : 'disliked'
  }
  return 'none'
}
</script>

<template>
  <div class="content-stack relative w-full h-screen overflow-hidden">
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
      <button @click="dislikeContent(currentIndex)">
        AI
      </button>
      <button @click="likeContent(currentIndex)">
        Artist
      </button>
    </div>
  </div>
</template>

<style scoped></style>

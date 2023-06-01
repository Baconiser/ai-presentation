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
  <div class="content-stack relative w-full h-screen overflow-hidden flex flex-col max-h-full justify-center items-center gap-8">
    <div
      class="content-stack__cards w-80 max-w-80  mx-auto relative aspect-[1/1]"
      :style="`left: ${Math.floor(contents.length) / 2 * 6}px; margin-top: ${contents.length * 6}px; margin-bottom: ${contents.length * 6}px`"
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
      <div
        v-if="currentIndex === 0"
        class="w-full h-full flex justify-center items-center"
        :style="`margin-left: -${Math.floor(contents.length) / 2 * 6}px;`"
      >
        Fertig!
      </div>
    </div>
    <div v-if="currentIndex !== 0" class="flex justify-center shrink-0 space-x-2">
      <VoteButton @click="dislikeContent(currentIndex)">
        🤖 <span class="text-red-800">AI</span>rtist
      </VoteButton>
      <VoteButton @click="likeContent(currentIndex)">
        🎨 Artist
      </VoteButton>
    </div>
  </div>
</template>

<style scoped>
@media (max-height: 500px) {
  .content-stack__cards {
    width: 12em;
  }
}
</style>

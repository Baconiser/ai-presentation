<template>
  <div
    class="card bg-white rounded-lg shadow-md flex flex-col overflow-hidden w-full md:w-[340px] aspect-[1/1] absolute top-0 left-0"
    :style="{background: backgroundColor, left: offsetLeft, top: offsetTop, transform, transition}"
    @mousedown="startSwipe(index, $event)"
    @touchstart="startSwipe(index, $event)"
    @mousemove="moveSwipe"
    @touchmove="moveSwipe"
    @mouseup="endSwipe"
    @touchend="endSwipe"
  >
    <div class="card__content flex-1 p-2 pb-8">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['like', 'dislike'])

const props = defineProps({
  handledState: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

function generatePastelColor () {
  const hue = Math.floor(Math.random() * 360)
  const pastel = 'hsl(' + hue + ', 100%, 87.5%)'
  return pastel
}

const backgroundColor = generatePastelColor()

const getEventClientX = (event: MouseEvent | TouchEvent) =>
  'touches' in event ? event.touches[0].clientX : event.clientX

const getEventClientY = (event: MouseEvent | TouchEvent) => 'touches' in event ? event.touches[0].clientY : event.clientY

const position: { x: number | string, y: number | string } = reactive({ x: 0, y: 0 })
const rotation = ref(0)
const startPosition = reactive({ x: 0, y: 0 })
const isSwiping = ref(false)
const isTransitioning = ref(false)
const currentIndex = ref(0)
const done = ref(false)

const offsetLeft = computed(() => {
  return `${props.index * -6}px`
})

const offsetTop = computed(() => {
  return `${props.index * -6}px`
})

watch(() => props.handledState, (nv: string) => {
  if (nv) {
    isTransitioning.value = true
    done.value = true

    if (nv === 'liked') {
      position.x = window.innerWidth * 1.5
    } else if (nv === 'disliked') {
      position.x = -window.innerWidth * 1.5
    }
  }
})

const startSwipe = (index: number, event: MouseEvent | TouchEvent) => {
  event.preventDefault()
  currentIndex.value = index
  isSwiping.value = true
  startPosition.x = getEventClientX(event)
  startPosition.y = getEventClientY(event)
}

const moveSwipe = (event: MouseEvent | TouchEvent) => {
  if (done.value) { return }
  if (!isSwiping.value) { return }

  const currentPosition = getEventClientX(event)
  const deltaX = currentPosition - startPosition.x
  const deltaY = getEventClientY(event) - startPosition.y

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    event.preventDefault()
    position.x = deltaX
    position.y = deltaY
    rotation.value = deltaX * 0.1
  }
}
const endSwipe = () => {
  if (done.value) { return }
  if (!isSwiping.value) { return }

  isSwiping.value = false
  isTransitioning.value = true

  if (Math.abs(position.x as number) > 100) {
    done.value = true
    isSwiping.value = false
    isTransitioning.value = true
    if (position.x > 0) {
      position.x = window.innerWidth * 1.5
    } else {
      position.x = -window.innerWidth * 1.5
    }

    setTimeout(() => {
      if (position.x > 0) {
        emit('like', props.id)
      } else {
        emit('dislike', props.id)
      }
    }, 300)

    return
  }

  // Reset position after transition
  setTimeout(() => {
    position.x = 0
    position.y = 0
    rotation.value = 0
    isTransitioning.value = false
  }, 300)
}

const transition = computed(() => {
  if (isTransitioning.value) {
    return 'transform 300ms ease-out'
  } else {
    return 'none'
  }
})

const transform = computed(() => {
  if (isSwiping.value || done.value) {
    return `translate3d(${position.x}px,${position.y}px , 0) rotate(${rotation.value}deg)`
  } else {
    return 'translate3d(0, 0, 0) rotate(0deg)'
  }
})

</script>

<style scoped>
@media (max-height: 500px) {
  .card {
    width: 12rem;
  }
}
</style>

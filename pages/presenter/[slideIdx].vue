<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import store from '~/server/store'

import CoverStart from '~/components/slides/CoverStart.vue'
import RisikenKI from '~/components/slides/RisikenKI.vue'
import CoverAIorArt from '~/components/slides/CoverAIorArt.vue'
import AIorArtGame from '~/components/slides/AIorArtGame.vue'
import BoringHistorySlide from '~/components/slides/BoringHistorySlide.vue'
import BoringUsageSlideErkennung from '~/components/slides/BoringUsageSlideErkennung.vue'
import BoringUsageSlideAnwendung from '~/components/slides/BoringUsageSlideAnwendung.vue'
import BoringCover from '~/components/BoringCover.vue'
import BoringChaptersSlide from '~/components/slides/BoringChaptersSlide.vue'
import CoverLiveCoding from '~/components/slides/CoverLiveCoding.vue'
import AIorArtGameSummary from '~/components/slides/AIorArtGameSummary.vue'
import BoringNewsSlide from '~/components/slides/BoringNewsSlide.vue'
import BoringMLSlide from '~/components/slides/BoringMLSlide.vue'
import BoringNeuronaleNetzeSlide from '~/components/slides/BoringNeuronaleNetzeSlide.vue'
import AIorArtGameDetails from '~/components/slides/AIorArtGameDetails.vue'
import BoringNeuronaleNetzeExampleSlide from '~/components/slides/BoringNeuronaleNetzeExampleSlide.vue'
import BoringMLExampleSlide from '~/components/slides/BoringMLExampleSlide.vue'
import BoringEndSlide from '~/components/BoringEndSlide.vue'
import BoringEthikSlide from '~/components/slides/BoringEthikSlide.vue'
import BoringFutureSlide from '~/components/slides/BoringFutureSlide.vue'
import BoringExamplesSlide from '~/components/slides/BoringExamplesSlide.vue'
import PromptingLandingPage from '~/components/slides/PromptingLandingPage.vue'
import PromptingLogicPage from '~/components/slides/PromptingLogicPage.vue'
import BoringPromptingSlide from '~/components/slides/BoringPromptingSlide.vue'
import PromptingLandingPageDone from '~/components/slides/PromptingLandingPageDone.vue'
import FutureTools from '~/components/slides/FutureTools.vue'
import FunnyUses from '~/components/slides/FunnyUses.vue'
import OneMoreThing from '~/components/OneMoreThing.vue'
import KIGedicht from '~/components/slides/KIGedicht.vue'
import GifSummary from '~/components/slides/GifSummary.vue'
import SchlussSlide from '~/components/slides/SchlussSlide.vue'
import BoringUsageSlideAnwendungAllgemein from '~/components/slides/BoringUsageSlideAnwendungAllgemein.vue'

const route = useRoute()
const router = useRouter()
const slideIdx = ref(Number(route.params.slideIdx))

if (process.server) {
  store.setCurrentSlideIdx(slideIdx.value)
}

function preventDrag (e: DragEvent) {
  e.preventDefault()
  return false
}

onKeyStroke(['ArrowRight', ' '], () => {
  slideIdx.value += 1
  slideIdx.value = Math.min(slideIdx.value, options.length - 1)
})

onKeyStroke(['ArrowLeft'], () => {
  slideIdx.value -= 1
  slideIdx.value = Math.max(slideIdx.value, 0)
})

// watch slideIdx and update route params
watch(slideIdx, (newVal) => {
  router.push(`/presenter/${newVal}`)
})

onMounted(async () => {
  useFetch('/api/set_slide_idx', {
    method: 'POST',
    body: JSON.stringify({ slideIdx: slideIdx.value }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const jwt = localStorage.getItem('is-worthy')
  if (!jwt) {
    await navigateTo('/presenter')
  }
})

onKeyStroke(['r'], () => {
  const confirmation = confirm('Reset - Are you sure?')
  if (confirmation) {
    useFetch('/api/reset_store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
})

const options = [
  {
    type: BoringNewsSlide
  },
  {
    type: BoringCover
  },
  {
    type: BoringChaptersSlide
  },
  {
    type: BoringHistorySlide
  },
  {
    type: BoringMLSlide
  },
  {
    type: BoringMLExampleSlide
  },
  {
    type: BoringNeuronaleNetzeSlide
  },
  {
    type: CoverStart
  },
  {
    type: BoringNeuronaleNetzeExampleSlide
  },
  {
    type: BoringUsageSlideAnwendungAllgemein
  },
  {
    type: BoringUsageSlideAnwendung
  },
  {
    type: BoringUsageSlideErkennung
  },
  {
    type: BoringExamplesSlide
  },
  {
    type: KIGedicht
  },
  {
    type: CoverAIorArt
  },
  {
    type: AIorArtGame
  },
  {
    type: AIorArtGameDetails
  },
  {
    type: AIorArtGameSummary
  },

  {
    type: CoverLiveCoding
  },
  {
    type: PromptingLandingPage
  },
  {
    type: PromptingLandingPageDone
  },
  {
    type: PromptingLogicPage
  },
  {
    type: BoringPromptingSlide
  },
  {
    type: FutureTools
  },
  {
    type: FunnyUses
  },
  {
    type: RisikenKI
  },
  {
    type: BoringEthikSlide
  },
  {
    type: BoringFutureSlide
  },
  {
    type: BoringEndSlide
  },
  {
    type: OneMoreThing
  },
  {
    type: GifSummary
  },
  {
    type: SchlussSlide
  }
]
</script>

<template>
  <div class="slider flex justify-start items-center h-full w-full select-none overflow-hidden" @drag="preventDrag">
    <div
        class="slide__scroller h-full relative flex transition-transform ease-linear duration-500"
        :style="{transform: `translateX(${-100 * slideIdx}vw)`}"
    >
      <template v-for="option in options" :key="option.type">
        <TheSlide>
          <component :is="option.type" @drag="preventDrag"/>
        </TheSlide>
      </template>
    </div>
  </div>
</template>

<style scoped></style>

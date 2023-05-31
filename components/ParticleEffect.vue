<template>
  <div class="particle__container" @click="handleClick($event)">
    <div class="particle__emitter" :style="{top: `${clickedTop}px`, left: `${clickedLeft}px`}">
      <div
        v-for="particle in particles"
        class="particle"
        :style="{transform: `translate(${particle.coords.x}px, ${particle.coords.y}px) scale(${particle.scale})`,
                 opacity: particle.animation.animating ? particle.opacity : 0,
                 background: `rgb(${particle.color.r}, ${particle.color.g}, ${particle.color.b})`,
                 boxShadow: `0 0 3px 2px rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.4)`}"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Coords {
  x: number;
  y: number;
}

interface Particle {
  id: string,
  color: { r: number, g: number, b: number },
  coords: Coords,
  animation: Animation,
  opacity: number,
  scale: number
}

const EasingFunctions = {
  linear: (t: number): number => t,

  easeInQuad: (t: number): number => t * t,
  easeOutQuad: (t: number): number => t * (2 - t),
  easeInOutQuad: (t: number): number => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,

  easeInCubic: (t: number): number => t * t * t,
  easeOutCubic: (t: number): number => (--t) * t * t + 1,
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,

  easeInQuart: (t: number): number => t * t * t * t,
  easeOutQuart: (t: number): number => 1 - (--t) * t * t * t,
  easeInOutQuart: (t: number): number => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,

  easeInQuint: (t: number): number => t * t * t * t * t,
  easeOutQuint: (t: number): number => 1 + (--t) * t * t * t * t,
  easeInOutQuint: (t: number): number => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,

  easeInSine: (t: number): number => -1 * Math.cos(t * (Math.PI / 2)) + 1,
  easeOutSine: (t: number): number => Math.sin(t * (Math.PI / 2)),
  easeInOutSine: (t: number): number => -0.5 * (Math.cos(Math.PI * t) - 1),

  easeInExpo: (t: number): number => 1 * Math.pow(2, 10 * (t - 1)),
  easeOutExpo: (t: number): number => 1 * (-Math.pow(2, -10 * t) + 1),
  easeInOutExpo: (t: number): number => {
    t /= 0.5
    if (t < 1) { return 0.5 * Math.pow(2, 10 * (t - 1)) }
    t--
    return 0.5 * (-Math.pow(2, -10 * t) + 2)
  },

  easeInCirc: (t: number): number => -1 * (Math.sqrt(1 - t * t) - 1),
  easeOutCirc: (t: number): number => 1 * Math.sqrt(1 - (--t) * t),
  easeInOutCirc: (t: number): number => {
    t /= 0.5
    if (t < 1) { return -0.5 * (Math.sqrt(1 - t * t) - 1) }
    t -= 2
    return 0.5 * (Math.sqrt(1 - t * t) + 1)
  }
}

class Animation {
  from: Coords = { x: 0, y: 0 }
  to: Coords = { x: 0, y: 0 }
  animating = false
  duration = 0
  onUpdate: (coords: Coords, progress: number) => void
  onFinished: () => void

  constructor (to: Coords, duration: number, onUpdate: (coords: Coords, progress: number) => void, onFinished: () => void) {
    this.to = to
    this.duration = duration
    this.onFinished = onFinished
    this.onUpdate = onUpdate
  }

  animate () {
    this.animating = true
    const startTime = Date.now()
    const duration = this.duration
    const from = this.from
    const to = this.to
    const distance = {
      x: to.x - from.x,
      y: to.y - from.y
    }

    const step = () => {
      if (!this.animating) { return }
      const elapsed = Date.now() - startTime
      let progress = elapsed / duration

      // Apply ease-out easing function
      progress = EasingFunctions.easeOutCubic(progress)
      const coords = {
        x: from.x + distance.x * (progress),
        y: from.y + distance.y * (progress)
      }
      progress = Math.min(progress, 1)

      this.onUpdate(coords, progress)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        this.animating = false
        this.onFinished()
      }
    }

    window.requestAnimationFrame(step)
  }
}

const particles: Ref<Particle[]> = ref([])

const clickedTop = ref(0)
const clickedLeft = ref(0)

function handleClick (e: PointerEvent) {
  console.log(e);
  if (particles.value.length > 0) { return }

  // get the x,y on the current element
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  clickedTop.value = y
  clickedLeft.value = x
  generateParticle()
}

async function generateParticle () {
  const randomParticleCount = rand(25, 35)
  for (let i = 0; i < randomParticleCount; i++) {
    const x =
        (0) +
        rand(80, 150) *
        Math.cos((2 * Math.PI * i) / rand(randomParticleCount - 10, randomParticleCount + 10))
    const y =
        (0) +
        rand(80, 150) *
        Math.sin((2 * Math.PI * i) / rand(randomParticleCount - 10, randomParticleCount + 10))
    const color = { r: rand(0, 255), g: rand(0, 255), b: rand(0, 255) }
    const id = `particle_${i}`
    const particleData: Particle = {
      id,
      scale: rand(0.7, 1),
      coords: { x: 0, y: 0 },
      opacity: 1,
      color,
      animation: new Animation({ x, y }, 420,
        (coords: Coords, progress: number) => {
          const particle = particles.value.find(p => p.id === id)
          if (particle) {
            particle.coords = coords
            particle.opacity = EasingFunctions.easeOutCubic(1 - progress)
          }
        },
        () => {
          particles.value = particles.value.filter(p => p.id !== id)
        })
    }
    particles.value.push(particleData)
  }
  await nextTick()
  particles.value.forEach((p, i) => {
    setTimeout(() => {
      p.animation.animate()
    }, rand(0, i * rand(2, 5)))
  })
}

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1)) + min
}
</script>

<style scoped>
.particle__container {
  background: transparent !important;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.particle__emitter {
  position: absolute;
  top: 0;
  left: 0;
}

.particle {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
}

html, body {
  height: 100%;
  background: #000;
}
</style>

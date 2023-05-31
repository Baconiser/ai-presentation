<template>
  <div class="particle__container" @click="handleClick">
    <h2>Click anywhere on this container</h2>
  </div>
</template>

<script lang="ts" setup>

function handleClick (e: MouseEvent) {
  explode(e.pageX, e.pageY)
}

const explode = (x: number, y: number) => {
  console.log('exploding')
  const particles = 15
  const explosion = document.createElement('div')
  explosion.className = 'explosion'
  document.body.appendChild(explosion)
  explosion.style.left = `${x - explosion.clientWidth / 2}px`
  explosion.style.top = `${y - explosion.clientHeight / 2}px`

  for (let i = 0; i < particles; i++) {
    const x =
        (explosion.clientWidth / 2) +
        rand(80, 150) *
        Math.cos((2 * Math.PI * i) / rand(particles - 10, particles + 10))
    const y =
        (explosion.clientHeight / 2) +
        rand(80, 150) *
        Math.sin((2 * Math.PI * i) / rand(particles - 10, particles + 10))
    const color = `${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}`
    const elm = document.createElement('div')
    elm.className = 'particle'
    elm.style.backgroundColor = `rgb(${color})`
    elm.style.top = `${y}px`
    elm.style.left = `${x}px`

    if (i === 0) {
      elm.addEventListener('animationend', () => {
        explosion.remove()
      })
    }
    explosion.appendChild(elm)
  }
}

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1)) + min
}
</script>

<style scoped>
.particle__container {
  background: transparent !important;
  width: 100%;
  min-height: 450px;
  color: #fff;
  text-align: center;
  padding: 25px;
}
.explosion {
  position: absolute;
  width: 600px;
  height: 600px;
  pointer-events: none;
}
.explosion .particle {
  position:absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: pop 1s reverse forwards;
}

@keyframes pop {
  from {
    opacity: 0;
  }
  to {
    top: 50%;
    left: 50%;
    opacity: 1;
  }
}
html, body {
  height: 100%;
  background: #000;
}
</style>

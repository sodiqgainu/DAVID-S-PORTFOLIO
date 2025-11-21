<template>
  <div ref="container" class="relative h-[320px] md:h-[420px] overflow-hidden">
    <div ref="track" class="will-change-transform ">
      <div ref="set1" class="img-cont">
        <div class="mb-[1em]" v-for="(image, index) in images" :key="`a-${index}`">
          <img :src="image.src" alt=""  class="">
        </div>
      </div>
      <div class="img-cont">
        <div class="mb-[1em]" v-for="(image, index) in images" :key="`b-${index}`">
          <img :src="image.src" alt="" >
        </div>
      </div>
    </div>
    <div class="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/70 to-transparent"></div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'

const container = ref(null)
const track = ref(null)
const set1 = ref(null)

const props = defineProps({
  speed: { type: Number, default: 50 },
  direction: { type: String, default: 'up' },
  pauseOnHover: { type: Boolean, default: false }
})

const images = ref([
  { id: 1, src: '/images/image 1.png' },
  { id: 2, src: '/images/Frame 21.png' },
  { id: 3, src: '/images/Frame 22.png' },
  { id: 4, src: '/images/image 2.png' },
  { id: 5, src: '/images/Frame 24.png' },
  { id: 6, src: '/images/image 6.png' },
])

let tween
let onEnter
let onLeave

onMounted(() => {
  const update = () => {
    if (!track.value || !set1.value) return
    const half = set1.value.offsetHeight
    if (tween) tween.kill()
    const fromY = props.direction === 'up' ? 0 : -half
    const toY = props.direction === 'up' ? -half : 0
    const duration = Math.max(0.0001, half / props.speed)
    tween = gsap.fromTo(track.value, { y: fromY }, { y: toY, duration, ease: 'none', repeat: -1 })
  }
  update()
  const ro = new ResizeObserver(update)
  ro.observe(track.value)
  ro.observe(set1.value)

  if (props.pauseOnHover && container.value) {
    onEnter = () => { if (tween) tween.pause() }
    onLeave = () => { if (tween) tween.play() }
    container.value.addEventListener('mouseenter', onEnter)
    container.value.addEventListener('mouseleave', onLeave)
  }
})

watch(() => [props.speed, props.direction], () => {
  if (!track.value || !set1.value) return
  const half = set1.value.offsetHeight
  if (tween) tween.kill()
  const fromY = props.direction === 'up' ? 0 : -half
  const toY = props.direction === 'up' ? -half : 0
  const duration = Math.max(0.0001, half / props.speed)
  tween = gsap.fromTo(track.value, { y: fromY }, { y: toY, duration, ease: 'none', repeat: -1 })
})

onUnmounted(() => {
  if (tween) tween.kill()
  if (onEnter && container.value) container.value.removeEventListener('mouseenter', onEnter)
  if (onLeave && container.value) container.value.removeEventListener('mouseleave', onLeave)
})
</script>

<style scoped>
  .img-cont{ column-count: 2; }
  
</style>
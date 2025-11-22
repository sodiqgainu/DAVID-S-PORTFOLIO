<template>
  <button type="button" class="px-4 bg-none border rounded-full inline-block font-robo-reg py-1 relative overflow-hidden" @mouseover="animate" @mouseleave="animateReverse" :class="props.borderClass">
    <div class="absolute inset-0 w-full h-full translate-y-[100%] scale-y-0" :class="props.overlayCol" ref="animBtn"></div>
    <h2 class="relative z-10" ref="textElement" :style="{ color: props.prevTextColor }">{{ props.text }}</h2>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  text: { type: String, default: 'Hire me' },
  overlayCol: { type: String, default: 'bg-black' },
  textColor: { type: String, default: 'white' },
  prevTextColor: { type: String, default: 'black' },
  borderClass: { type: String, default: 'border-primary' }
})

const animBtn = ref(null)
const textElement = ref(null)

const animate = () => {
  if (!animBtn.value || !textElement.value) return
  const tl = gsap.timeline()
  tl.to(animBtn.value, { y: 0, scaleY: 1, duration: 0.25, ease: 'power2.out' })
    .to(textElement.value, { color: props.textColor }, 0)
}

const animateReverse = () => {
  if (!animBtn.value || !textElement.value) return
  const tl = gsap.timeline()
  tl.to(animBtn.value, { y: '100%', scaleY: 0, duration: 0.25, ease: 'power2.in' })
    .to(textElement.value, { color: props.prevTextColor }, 0)
}
</script>

<style scoped>
button { will-change: transform, color; }
</style>
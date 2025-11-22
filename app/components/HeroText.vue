<template>
  <div class="">
    <div>
      <h1 ref="heroHeading" class="font-han hero-text uppercase" data-cursor="-grow">hi, i'm david</h1>
      <p ref="heroPara" class="font-robo-reg my-3">I craft digital experiences that transform complex ideas into clean, powerful interfaces. My work tells stories through pixels and precision.</p>
    </div>
    <div ref="ctaGroup" class="flex space-x-3 md:mt-[5rem] mt-[2.5rem] items-center justify-start">
      <AnimButton :textColor="'black'" class="text-white" :prevTextColor="'white'" :overlayCol="'bg-white'" :text="'Hire me'" />
      <Magnetic :strength="'20'">
        <Button class="font-robo-reg px-4 py-1 text-white">View work</Button>
      </Magnetic>
    </div>
  </div>
</template>

<script setup>
import Magnetic from '~/Effects/Magnetic.vue'
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'

const heroHeading = ref(null)
const heroPara = ref(null)
const ctaGroup = ref(null)

onMounted(async () => {
  await nextTick()
  const h = heroHeading.value
  if (!h) return
  const text = h.textContent || ''
  h.innerHTML = text.split('').map(ch => ch === ' ' ? '<span class="char inline-block">&nbsp;</span>' : `<span class="char inline-block">${ch}</span>`).join('')
  const chars = h.querySelectorAll('.char')
  gsap.set(chars, { opacity: 0, y: 50 })
  gsap.set(heroPara.value, { opacity: 0, y: 40 })
  gsap.set(ctaGroup.value, { opacity: 0, y: 40 })
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
  tl.to(chars, { opacity: 1, y: 0, duration: 0.6, stagger: 0.03 })
    .to(heroPara.value, { opacity: 1, y: 0, duration: 0.6 }, '-=0.25')
    .to(ctaGroup.value, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
})
</script>

<style scoped>
  .hero-text { font-size: clamp(3rem, 6vw, 5rem); }
  .char { will-change: transform, opacity; }
</style>
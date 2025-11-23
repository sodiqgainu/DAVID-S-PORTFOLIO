<template>
  <section id="skills" class="bg-black text-white relative">
    <div class="max-w-[1200px] w-[90%] mx-auto">
      <div ref="pinSection" class="relative overflow-hidden">
        <!-- Anchor for ScrollTrigger -->
        <div class="st-anchor absolute top-0 left-0 w-px h-px pointer-events-none"></div>

        <!-- Feature cards stacked -->
        <div class="feature-card z-10">
          <FeatureComp
            index="01"
            title="Feature 1"
            section="Services"
            headline="Precision Tools For Digital Transformation"
            description="I deliver solutions that are not just functional, but extraordinary. My approach combines technical skill with creative vision."
            imageSrc="/images/image 8.png"
          />
        </div>

        <div class="feature-card z-20">
          <FeatureComp
            index="02"
            title="Feature 2"
            section="Tagline"
            headline="Web Design"
            description="I design responsive, user-focused websites that blend aesthetic clarity with fast performance, accessibility, and conversion-driven layouts."
            imageSrc="/images/image 10.png"
          />
        </div>

        <div class="feature-card z-30">
          <FeatureComp
            index="03"
            title="Feature 3"
            section="Tagline"
            headline="Figma Prototyping"
            description="I create interactive, high-fidelity Figma prototypes that validate user flows and accelerate development."
            imageSrc="/images/image 22.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureComp from './FeatureComp.vue'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pinSection = ref(null)
let scrollTimeline
let cards = []

const updateHeight = () => {
  if (!pinSection.value || !cards.length) return
  // height = number of cards * viewport height
  pinSection.value.style.height = `${cards.length * window.innerHeight / 3}px`
  ScrollTrigger.refresh()
}

onMounted(async () => {
  await nextTick()
  cards = pinSection.value.querySelectorAll('.feature-card')
  if (!cards.length) return

  // Wait for images to load
  const images = pinSection.value.querySelectorAll('img')
  await Promise.all(
    Array.from(images).map(img => img.complete ? Promise.resolve() : new Promise(r => { img.onload = r; img.onerror = r }))
  )

  // First card visible
  gsap.set(cards[0], { yPercent: 0, autoAlpha: 1 })
  // Other cards start below and hidden
  cards.forEach((c, i) => { if (i > 0) gsap.set(c, { yPercent: 100, autoAlpha: 0, scale: 0.97 }) })

  // Set container height
  updateHeight()

  // Scroll timeline
  scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection.value,
      start: 'top top',
      end: () => `+=${(cards.length - 1) * window.innerHeight}`,
      pin: true,
      pinSpacing: true, // must be true so pinned section has space
      scrub: true,
      invalidateOnRefresh: true
    }
  })

  // Animate stacked cards
  cards.forEach((card, i) => {
    if (i === 0) return
    scrollTimeline.to(
      card,
      { yPercent: 0, autoAlpha: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
      i - 1
    )
  })

  window.addEventListener('resize', updateHeight)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight)
  if (scrollTimeline) scrollTimeline.kill()
  ScrollTrigger.getAll().forEach(st => st.kill())
})
</script>

<style scoped>
.feature-card {
  position: absolute;
  inset: 0;
  background-color: black;
  overflow: hidden;
  will-change: transform;
}
#skills {
  position: relative;
  min-height: 100vh;
}
</style>

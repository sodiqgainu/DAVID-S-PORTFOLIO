<template>
    <section id="work" class="bg-black ">
         <div class="max-w-[1200px] w-[90%] mx-auto">
          <div ref="pinSection" class="relative  h-[100svh]">
             <div class="st-anchor absolute top-0 left-0 w-px h-px pointer-events-none"></div>
             <div class="absolute feature-card  inset-0">
                <FeatureComp
                  index="01"
                  title="Feature 1"
                  section="Services"
                  headline="Precision Tools For Digital Transformation"
                  description="I deliver solutions that are not just functional, but extraordinary. My approach combines technical skill with creative vision."
                  imageSrc="/images/image 8.png"
                />
              </div>

              <div class="feature-card absolute  inset-0">
                <FeatureComp
                  index="02"
                  title="Feature 2"
                  section="Tagline"
                  headline="Web Design"
                  description="I design responsive, user-focused websites that blend aesthetic clarity with fast performance, accessibility, and conversion-driven layouts."
                  imageSrc="/images/image 10.png"
                />
                />
              </div>

              <div class="feature-card absolute  inset-0">
                <FeatureComp
                  index="03"
                  title="Feature 3"
                  section="Tagline"
                  headline="Figma Prototyping"
                    description="I create interactive, high-fidelity Figma prototypes that validate user flows and accelerate development. Clickable screens, component systems, and micro-interactions for fast user testing and handoff."
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
import { useGsapCardScroll } from '../composables/useGsapCardScroll'

const pinSection = ref(null)
const { init: initCards, destroy } = useGsapCardScroll()

onMounted(async () => {
  await nextTick()
  const el = pinSection.value
  if (!el) return
  await initCards(el, { start: 'top 12%',endMode: 'cardsHeight' })
})

onUnmounted(() => {
  destroy()
})

</script>

<style scoped>
  .feature-card { will-change: transform; overflow: hidden; }
</style>
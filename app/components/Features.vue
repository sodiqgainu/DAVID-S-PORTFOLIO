<template>
    <section id="skills" class="bg-black ">
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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pinSection = ref(null)
let resizeObs = null
let tl = null

function setupCards(el){
  const cards = gsap.utils.toArray(el.querySelectorAll('.feature-card'))
  if(!cards.length) return
  // initial hidden state above
  gsap.set(cards, { autoAlpha: 0, y: -80 })
  // stacking order – later cards on top
  cards.forEach((card,i)=> {
    gsap.set(card,{ zIndex: i + 1 })
    card.classList.add('feature-opaque')
  })
  // make first visible initially for smooth start
  gsap.set(cards[0], { autoAlpha:1, y:0 })

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      pin: true,
      pinSpacing: true,
      scrub: true,
      start: 'top top',
      end: () => `+=${cards.length * (window.innerHeight * 0.7)}`,
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  })

  cards.forEach((card,i)=>{
    if(i === 0) return // first already shown
    // reveal current and fade previous simultaneously
    tl.to(card,{ autoAlpha:1, y:0, duration:0.6, ease:'power2.out' }, i)
      .to(cards[i-1], { autoAlpha:0, duration:0.5, ease:'power1.inOut' }, i) 
  })
}

onMounted(async () => {
  await nextTick()
  const el = pinSection.value
  if(!el) return
  setupCards(el)
  // resize observer to refresh dynamically
  resizeObs = new ResizeObserver(()=> ScrollTrigger.refresh())
  resizeObs.observe(el)
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once:true })
})

onUnmounted(() => {
  if (resizeObs) resizeObs.disconnect()
  if (tl) tl.scrollTrigger && tl.scrollTrigger.kill()
  tl = null
})

</script>

<style scoped>
  .feature-card { will-change: transform, opacity; overflow: hidden; }
  #skills { min-height: 100svh; will-change: height; }
  .feature-opaque { background:#000; }
</style>
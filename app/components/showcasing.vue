<template>
    <div class="flex flex-col  items-center md:items-center gap-[5rem] md:flex-row md:gap-5" ref="showcaseRoot">
        <div class="w-[100%] md:w-[50%] max-w-[1200px] mx-auto overflow-hidden" ref="imageWrap">
            <img src="/images/image 7.png" class="w-full h-auto object-cover" loading="lazy" alt="" ref="showImg">
        </div>


        <div class="w-[100%] md:w-[50%] md:px-9 mx-auto md:order-1 mt-[2rem] md:mt-0 order-[-1]" ref="textColumn">
            <h3 class="font-robo-reg text-md mb-2 reveal-item">Showcase</h3>
            <h1 class="font-han showcase-text reveal-item">
                Transforming Concepts Into Digital Masterpieces
            </h1>
            <p class="font-robo-reg mt-7 reveal-item">Each project is a journey from raw concept to polished experience. I don't just design websites, I create digital ecosystems.</p>
 
            <div class="mt-12 space-y-4 ">

                <div class="flex space-x-3 items-center reveal-item">
                     <span><img src="/images/icons/icon1.png" alt=""></span>
                     <span>Responsive-design</span>
                </div>

                <div class="flex space-x-3 items-center reveal-item">
                     <span><img src="/images/icons/icon2.png" alt=""></span>
                     <span>User-centered approach</span>
                </div>

                <div class="flex space-x-3 items-center reveal-item">
                     <span><img src="/images/icons/icon3.png" alt=""></span>
                     <span>Performance optimization</span>
                </div>
              
                
            </div>

            <!-- buttons -->

          <div class="mt-[2rem] flex space-x-4 reveal-item" ref="buttonsGroup">
            <Magnetic>
                <Button class="font-robo-reg px-3 py-1 text-white">
                    Explore
                </Button>
            </Magnetic>

            <div class="flex gap-4 items-center font-robo-reg px-3 py-1 text-white">
                <h3>Details</h3>
                <img src="/images/icons/icon4.png" alt="">
            </div>
          </div>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Magnetic from '~/Effects/Magnetic.vue'
import Button from './Button.vue'

gsap.registerPlugin(ScrollTrigger)

const showcaseRoot = ref(null)
const imageWrap = ref(null)
const showImg = ref(null)
const textColumn = ref(null)
const buttonsGroup = ref(null)
let ctx

onMounted(async () => {
  await nextTick()
  const root = showcaseRoot.value
  if (!root) return
  ctx = gsap.context(() => {
    // Initial states
    gsap.set(showImg.value, { clipPath: 'inset(0 0 100% 0)', scale: 1.05 })
    const items = root.querySelectorAll('.reveal-item')
    gsap.set(items, { opacity: 0, y: 50 })

    // Timeline
    gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        refreshPriority: 1
      }
    })
      .to(showImg.value, { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.8, ease:'power3.inOut' })
      .to(items, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }, '-=1')
    gsap.delayedCall(0.25, () => ScrollTrigger.refresh())
  }, root)
})

onUnmounted(() => { if (ctx) ctx.revert() })
</script>

<style scoped>
  .showcase-text{ font-size: clamp(2rem, 5vw, 2.6rem); }
  .reveal-item { will-change: transform, opacity; }
  img[ref="showImg"] { will-change: clip-path, transform; }
</style>
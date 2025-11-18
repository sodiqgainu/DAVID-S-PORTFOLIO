// composables/useGsap.js
import { onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsap(setupFn) {
  let ctx

  onMounted(async () => {
    await nextTick()

    // Create a GSAP context to scope animations per component
    ctx = gsap.context(() => {
      setupFn(gsap, ScrollTrigger)
    })

    // Refresh ScrollTrigger after everything (fonts/images) is ready
    window.addEventListener('load', () => {
      ScrollTrigger.refresh()
    })
  })

  onUnmounted(() => {
    // Cleanup context (kills all animations and triggers safely)
    ctx && ctx.revert()
    ScrollTrigger.getAll().forEach(t => t.kill())
    window.removeEventListener('load', ScrollTrigger.refresh)
  })
}

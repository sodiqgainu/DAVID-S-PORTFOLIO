<template>
  <footer id="contact" ref="footerRoot" class="bg-white text-black py-12">
    <div class="max-w-[1200px] w-[90%] mx-auto flex flex-col items-center space-y-8">
      <!-- Logo -->
       <div class="flex justify-between items-center w-full">
      <button @click="scrollToSection('home')" aria-label="Go to home" class="focus:outline-none hover:scale-[1.2] transition duration-200">
        <img src="/images/navLogo.png" alt="Logo" class="w-[25px] h-auto" />
      </button>

      <div class="flex space-x-6 font-robo-reg font-bold">
        <button @click="scrollToSection('skills')" @mouseover="hoverSkill" @mouseleave="leaveSkill" class="relative overflow-hidden">
          <span ref="skillSpan1" class="block absolute">Skills</span>
          <span ref="skillSpan2" class="block translate-y-[100%]">Skills</span>
        </button>
        <button @click="scrollToSection('projects')" @mouseover="hoverProject" @mouseleave="leaveProject" class="relative overflow-hidden">
          <span ref="projectSpan1" class="block absolute">Projects</span>
          <span ref="projectSpan2" class="block translate-y-[100%]">Projects</span>
        </button>
      </div>

      <div class="flex space-x-3">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="inline-block cursor-pointer">
          <img src="/images/icons/twitter.png" alt="Twitter">
        </a>
        <a href="https://www.instagram.com/david_krispy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="inline-block cursor-pointer">
          <img src="/images/icons/insta.png" alt="Instagram">
        </a>
      </div>
     
       </div>
    

      <!-- Animated Line -->
      <div class="w-full">
        <div ref="animatedLine" class="h-[1px] bg-black"></div>
      </div>

      <!-- Added descriptive footer content -->
      <div class="max-w-[800px] mx-auto text-center space-y-4 font-robo-reg">
        <p class="text-sm md:text-base leading-relaxed">
          Crafting fast, accessible & visually engaging web interfaces. From prototypes to production builds, I focus on clarity, animation detail and performance.
        </p>
        <p class="text-sm md:text-base leading-relaxed">
          Open to freelance, product collaborations & technical consulting. Say hello:
          <a href="mailto:dravonbrand@gmail.com" class="underline underline-offset-4 transition">dravonbrand@gmail.com</a>
          <span class="block mt-2">Or chat me up on WhatsApp: <span class="font-bold">+2349164744446</span></span>
        </p>
        <div class="flex flex-wrap justify-center gap-3 text-[11px] md:text-xs tracking-wide uppercase">
          <span class="px-3 py-1 bg-black text-white rounded-full">UI / UX</span>
          <span class="px-3 py-1 bg-black text-white rounded-full">Prototyping</span>
          <span class="px-3 py-1 bg-black text-white rounded-full">Performance</span>
          <span class="px-3 py-1 bg-black text-white rounded-full">Animations</span>
        </div>
      </div>
      <p class="font-robo-reg text-xs md:text-sm pt-4 opacity-75">&copy; 2025 David Cripsy. All rights reserved. Built with Nuxt & GSAP.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNuxtApp } from '#app'

gsap.registerPlugin(ScrollTrigger)

const footerRoot = ref(null)
const animatedLine = ref(null)
const nuxtApp = useNuxtApp()
const navOffset = 80

// span refs
const skillSpan1 = ref(null)
const skillSpan2 = ref(null)
const projectSpan1 = ref(null)
const projectSpan2 = ref(null)

// scroll helper
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const target = el.getBoundingClientRect().top + window.scrollY - navOffset
  if (nuxtApp.$lenis) {
    nuxtApp.$lenis.scrollTo(target, { duration: 1, easing: t => Math.min(1,1.001-Math.pow(2,-10*t)) })
  } else {
    window.scrollTo({ top: target, behavior: 'smooth' })
  }
}

// hover animations (mirroring nav)
const hoverSkill = () => {
  const tl = gsap.timeline()
  tl.to(skillSpan1.value, { y: '-100%', duration: 0.3 })
  tl.to(skillSpan2.value, { y: '0%', duration: 0.3 }, '0')
}
const leaveSkill = () => {
  const tl = gsap.timeline()
  tl.to(skillSpan1.value, { y: '0%', duration: 0.3 })
  tl.to(skillSpan2.value, { y: '100%', duration: 0.3 }, '0')
}
const hoverProject = () => {
  const tl = gsap.timeline()
  tl.to(projectSpan1.value, { y: '-100%', duration: 0.3 })
  tl.to(projectSpan2.value, { y: '0%', duration: 0.3 }, '0')
}
const leaveProject = () => {
  const tl = gsap.timeline()
  tl.to(projectSpan1.value, { y: '0%', duration: 0.3 })
  tl.to(projectSpan2.value, { y: '100%', duration: 0.3 }, '0')
}

onMounted(async () => {
  await nextTick()
  if (skillSpan1.value) gsap.set(skillSpan1.value, { y: 0 })
  if (projectSpan1.value) gsap.set(projectSpan1.value, { y: 0 })
  if (!footerRoot.value || !animatedLine.value) return
  gsap.set(animatedLine.value, { scaleX: 0, transformOrigin: 'left center' })
  gsap.to(animatedLine.value, {
    scaleX: 1,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: footerRoot.value,
      start: 'top 70%',
      once: true
    }
  })
})
</script>

<style scoped>
footer { will-change: transform, opacity; }
</style>
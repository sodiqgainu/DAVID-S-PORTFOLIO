<template>
  <footer ref="footerRoot" class="bg-white text-black py-12">
    <div class="max-w-[1200px] w-[90%] mx-auto flex flex-col items-center space-y-8">
      <!-- Logo -->
       <div class="flex justify-between items-center w-full">
      <button @click="scrollToSection('home')" aria-label="Go to home" class="focus:outline-none">
        <img src="/images/navLogo.png" alt="Logo" class="w-[42px] h-auto" />
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
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="group">
          <img src="/images/icons/twitter.png" alt="">
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="group">
          <img src="/images/icons/insta.png" alt="">
        </a>
      </div>
     
       </div>
    

      <!-- Animated Line -->
      <div class="w-full">
        <div ref="animatedLine" class="h-[1px] bg-black"></div>
      </div>

      <!-- Social Icons -->
      

      <!-- Copyright -->
      <p class="font-robo-reg text-sm">&copy; 2025 David Cripsy. All rights reserved.</p>
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

// animation span refs
const skillSpan1 = ref(null); const skillSpan2 = ref(null);
const projectSpan1 = ref(null); const projectSpan2 = ref(null);

// hover handlers
const hoverSkill = () => { const tl = gsap.timeline(); tl.to(skillSpan1.value,{ y:'-100%', duration:0.3 }); tl.to(skillSpan2.value,{ y:'0%', duration:0.3 },'0'); }
const leaveSkill = () => { const tl = gsap.timeline(); tl.to(skillSpan1.value,{ y:'0%', duration:0.3 }); tl.to(skillSpan2.value,{ y:'100%', duration:0.3 },'0'); }
const hoverProject = () => { const tl = gsap.timeline(); tl.to(projectSpan1.value,{ y:'-100%', duration:0.3 }); tl.to(projectSpan2.value,{ y:'0%', duration:0.3 },'0'); }
const leaveProject = () => { const tl = gsap.timeline(); tl.to(projectSpan1.value,{ y:'0%', duration:0.3 }); tl.to(projectSpan2.value,{ y:'100%', duration:0.3 },'0'); }

const scrollToSection = (id) => { const el = document.getElementById(id); if(!el) return; const target = el.getBoundingClientRect().top + window.scrollY - navOffset; if (nuxtApp.$lenis) { nuxtApp.$lenis.scrollTo(target,{ duration:1, easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t)) }) } else { window.scrollTo({ top:target, behavior:'smooth' }) } }

const goHome = () => {
  const home = document.getElementById('home')
  if (home) home.scrollIntoView({ behavior: 'smooth' })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(async () => {
  await nextTick()
  if(skillSpan1.value) gsap.set(skillSpan1.value,{ y:0 });
  if(projectSpan1.value) gsap.set(projectSpan1.value,{ y:0 });
  if (!footerRoot.value || !animatedLine.value) return
  gsap.set(animatedLine.value, { scaleX: 0, transformOrigin: 'left center' })
  gsap.to(animatedLine.value, {
    scaleX: 1,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: footerRoot.value,
      start: 'top 85%',
      once: true
    }
  })
})
</script>

<style scoped>
footer { will-change: transform, opacity; }
</style>
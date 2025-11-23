<template>
  <div class="pt-[4rem] masonry-gallery" ref="galleryRoot">
    <div class="masonry-item"><img src="/images/gallery/image 5.png" alt="" /></div>
    <div class="masonry-item"><img src="/images/gallery/image 13.png" alt="" /></div>
    <div class="masonry-item"><img src="/images/gallery/image 12.png" alt="" /></div>
    <div class="masonry-item"><img src="/images/gallery/Frame 31.png" alt="" /></div>
    <div class="masonry-item"><img src="/images/gallery/image 4.png" alt="" /></div>
    <div class="masonry-item"><img src="/images/gallery/image 1.png" alt="" /></div>
    <div class="masonry-item"><img src="/images/gallery/image 2.png" alt="" /></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryRoot = ref(null)
let ctx

onMounted(async () => {
  await nextTick()
  const root = galleryRoot.value
  if (!root) return
  ctx = gsap.context(() => {
    const items = gsap.utils.toArray(root.querySelectorAll('.masonry-item'))
    if(!items.length) return
    gsap.set(items, { opacity:0 })
    gsap.to(items, {
      opacity:1,
      duration:0.8,
      stagger:0.15,
      ease:'power2.out',
      scrollTrigger:{
        trigger: root,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    })
  }, galleryRoot)
})

onUnmounted(() => { if (ctx) ctx.revert() })
</script>

<style scoped>
.masonry-gallery { column-count: 3; column-gap: 1.25rem; }
.masonry-item { break-inside: avoid; margin-bottom: 1.25rem; will-change: opacity, transform; transition: transform .35s ease, opacity .4s; }
.masonry-item img { width: 100%; height: auto; display: block; object-fit: contain; border-radius: 6px; transition: transform .6s cubic-bezier(.25,.8,.25,1); }
.masonry-item:hover { transform: translateY(-6px); }
.masonry-item:hover img { transform: scale(1.05); }

@media (max-width: 640px) { .masonry-gallery { column-count: 1; } }
</style>
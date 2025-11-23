<template>
  <section
    class="py-[4rem] relative md:pt-[10rem] pt-[6rem] bg-black"
    id="projects"
    data-cursor="-exclusion"
  >
    <div class="max-w-[1200px] w-[90%] mx-auto flex flex-col items-center gap-4 relative z-10">
      <div class="text-center space-y-5"> 
        <h2 class="font-han text-white project-heading">Project gallery</h2>
        <p class="text-white font-robo-reg md:my-8 my-auto">
          A visual journey through digital landscapes I've crafted
        </p>
      </div>

      <div class="gallery-wrap w-full lg:top-[-5rem] sm:top-[-1rem] relative">
        <Gallery/>
      </div>
    </div>

    <!-- FULL WIDTH WORD -->
    <div
      class="absolute inset-x-0 bottom-4 md:bottom-6 z-0 flex justify-center select-none pointer-events-none"
      aria-hidden="true"
    >
      <h2 ref="projectWord" class="project-word">PROJECTS</h2>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Gallery from './Gallery.vue'

const projectWord = ref(null)
let resizeObserver

onMounted(() => {
  const el = projectWord.value
  const parent = el.parentElement

  const resizeText = () => {
    const parentWidth = parent.offsetWidth
    const textWidth = el.scrollWidth

    if (textWidth === 0) return
h
    const scale = parentWidth / textWidth
    el.style.transform = `scaleX(${scale})`
  }

  resizeObserver = new ResizeObserver(() => {
    resizeText()
  })

  resizeObserver.observe(parent)

  // Run once immediately
  resizeText()
})

onBeforeUnmount(() => {
  if (resizeObserver) resizeObserver.disconnect()
})
</script>

<style scoped>
.project-heading {
  font-size: clamp(2rem, 6vw, 3rem);
}

/* FULL WIDTH PRO TEXT */
.project-word {
  font-family: var(--font-han, sans-serif);
  font-weight: 700;
  line-height: 0.9;
  white-space: nowrap;
  display: inline-block;

  font-size: clamp(3rem, 18vw, 12rem);

  letter-spacing: 0.08em;
  text-align: center;
  transform-origin: center;

  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.18) 28%,
    #ffffff 60%,
    #ffffff 100%
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  user-select: none;
  pointer-events: none;
}

#projects {
  overflow-x: hidden;
}

.gallery-wrap {
  position: relative;
  overflow: hidden;
}
</style>
<template>
    <section class="py-[4rem] relative md:pt-[0rem] pt-[6rem] bg-black" id="projects" data-cursor="-exclusion">
       <div class="max-w-[1200px] w-[90%] mx-auto flex flex-col items-center gap-4 relative z-10">
          <div class="text-center space-y-5"> 
               <h2 class="font-han text-white project-heading">Project gallery</h2>
               <p class="text-white font-robo-reg">A visual journey through digital landscapes I've crafted</p>
          </div>

          <div class="gallery-wrap w-full  relative">
            <Gallery/>
          </div>
        
       </div>

       <div class="absolute inset-x-0 bottom-0 overflow-hidden z-0 flex justify-center select-none pointer-events-none" aria-hidden="true">
         <h2 class="project-word  w-full ">PROJECTS</h2>
       </div>
    </section>
</template>

<script setup>
import Gallery from './Gallery.vue';


</script>

<style scoped>
.project-heading {
    font-size: clamp(2rem, 9vw, 3rem);
}
.project-word {
  font-family: var(--font-han, sans-serif);
  font-size: clamp(2.2rem, 14vw, 12rem); /* ensure visibility */
  font-weight: 700;
  line-height: 0.85;
  overflow: visible;
  letter-spacing: 0.045em;
  background: linear-gradient(to bottom,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.08) 20%,
    rgba(255,255,255,0.25) 35%,
    #ffffff 55%,
    #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 6px 18px rgba(255,255,255,0.05));
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;

  box-sizing: border-box;
  overflow: visible;
  transform: none;
  white-space: normal; /* allow wrapping */
  word-break: break-word;
  padding: 0 4vw;
}
#projects { overflow-x: hidden; }
.gallery-wrap {
  position: relative;
  overflow:hidden
}


@media (min-width: 1024px) {
  .project-word { font-size: clamp(4rem, 19vw, 12rem); white-space: nowrap; }
}
</style>
<template>
  <nav
    class="shadow-md py-4 fixed z-50 bg-white inset-x-0 px-5 md:px-[4rem] justify-between items-center flex"
  >
    <div class="flex items-center space-x-8">
      <img
        src="/images/navLogo.png"
        class="w-[30px] md:w-[35px] hover:scale-[1.2] transition-all duration-200 cursor-pointer"
        alt=""
        @click="scrollTo('home')"
      />

      <!-- desktop menu -->

      <div class="font-robo-reg space-x-10  md:block hidden"> 
       
        <button
          @click.stop="scrollTo('skills')"
          class="overflow-hidden relative"
          @mouseleave="leave2"
          @mouseover="hovered2"
        >
          <span class="block absolute" ref="span3">Skills</span>
          <span class="block translate-y-[100%]" ref="span4">Skills</span>
        </button>
        <button
          @click.stop="scrollTo('testimonials')"
          @mouseover="hovered3"
          @mouseleave="leave3"
          class="overflow-hidden relative"
        >
          <span class="block absolute" ref="span5">Testimonials</span>
          <span class="block translate-y-[100%]" ref="span6">Testimonials</span>
        </button>
        <button
          @click.stop="scrollTo('projects')"
          class="overflow-hidden relative"
          @mouseleave="leave4"
          @mouseover="hovered4"
        >
          <span class="block absolute" ref="span7">Projects</span>
          <span class="block translate-y-[100%]" ref="span8">Projects</span>
        </button>
      
      </div>
    </div>

    <!-- mobile menu -->
    <div
      @click="toggleMenu"
      class="p-2 transition-colors duration-200 md:hidden block  rounded-md relative w-8 h-8"
      :aria-label="isActive ? 'Close menu' : 'Open menu'"
    >
      <img
        src="/images/closeMenu.png"
        class="absolute w-[22px] h-[22px] transition-all duration-300"
        :class="isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'"
        alt="Close menu"
      />
      <img
        src="/images/openMenu.png"
        class="absolute w-[22px] h-[22px] transition-all duration-300"
        :class="!isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'"
        alt="Open menu"
      />
    </div>

    <!-- mobileMenuContent -->

    <div
      class="fixed top-[50px] bg-white inset-x-0 shadow-md rounded-md transition-all duration-300 px-5 py-7 md:hidden block"
      :class="
        isActive
          ? 'opacity-100 scale-100 py-4'
          : 'opacity-0 scale-0 h-0 overflow-hidden'
      "
    >
      <div class="font-robo-reg flex flex-col space-y-6 items-start py-7">
       
        <button
          @click="scrollTo('skills')"
          class="block w-full text-left hover:bg-black shadow-md px-3 border-l-4 border-black rounded-xl hover:text-white transition-colors duration-200 py-3"
        >
          Skills
        </button>
        <button
          @click="scrollTo('testimonials')"
          class="block w-full text-left shadow-md hover:bg-black px-3 hover:text-white transition-colors duration-200 py-3 border-l-4 border-black rounded-xl"
        >
          Testimonials
        </button>
        <button
          @click="scrollTo('projects')"
          class="block w-full text-left hover:bg-black px-3 shadow-md hover:text-white transition-colors duration-200 py-3 border-l-4 border-black rounded-xl"
        >
          Projects
        </button>
      
      </div>

      <div class="my-6">
        <div class="px-6">
          <h2>Want to build something great?</h2>
          <p class="underline">Start a conversation</p>
        </div>

        <div class="flex flex-col my-5 space-y-4">
          <button class="border block p-3">Hire</button>
          <button class="border block p-3 bg-dark text-light"     @click="scrollTo('contact')">Contact</button>
          
        </div>
      </div>
    </div>
    <!-- end of mobileMenuContent -->

    <!-- desktop button -->

    <div class="space-x-6 md:flex hidden items-center">
        <AnimButton  :text="'Hire me'" :overlayCol="'bg-black'" :textColor="'white'" :prevTextColor="'black'" class="inline-block"/>
        <Magnetic :strength="20">
          <Button  @click.stop="scrollTo('contact')" class="border px-6 py-2 bg-dark font-robo-reg text-light hidden md:inline-block">
            Contact
          </Button>
        </Magnetic>
       
    </div>
  </nav>
</template>

<script setup>
import gsap from 'gsap';
import Magnetic from '~/Effects/Magnetic.vue';
import { useNuxtApp } from '#app';

const isActive = ref(false);

const toggleMenu = () => {https://gsap.com/community/forums/topic/36755-gsap-markers-on-page-refresh-start-in-different-position/
  isActive.value = !isActive.value;
};

const navOffset = 80;
const nuxtApp = useNuxtApp();

const scrollTo = (sectionId) => {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const target = el.getBoundingClientRect().top + window.scrollY - navOffset;
  if (nuxtApp.$lenis) {
    nuxtApp.$lenis.scrollTo(target, { duration: 1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  } else {
    window.scrollTo({ top: target, behavior: 'smooth' });
  }
  isActive.value = false;
};

const span1 = ref(null);
const span2 = ref(null);

gsap.set(span1.value, { y: 0 });
gsap.set(span2.value, { y: '100%' });

const span3 = ref(null);
const span4 = ref(null);

gsap.set(span3.value, { y: 0 });

const hovered2 = () => {
  const tl = gsap.timeline();

  tl.to(span3.value, {
    y: '-100%',
    duration: 0.3,
  });

  tl.to(
    span4.value,
    {
      y: '0%',
      duration: 0.3,
    },
    '0'
  );
};

const leave2 = () => {
  const tl = gsap.timeline();

  tl.to(span3.value, {
    y: '0%',
    duration: 0.3,
  });

  tl.to(
    span4.value,
    {
      y: '100%',
      duration: 0.3,
    },
    '0'
  );
};

const span5 = ref(null);
const span6 = ref(null);

gsap.set(span5.value, { y: 0 });

const hovered3 = () => {
  const tl = gsap.timeline();

  tl.to(span5.value, {
    y: '-100%',
    duration: 0.3,
  });

  tl.to(
    span6.value,
    {
      y: '0%',
      duration: 0.3,
    },
    '0'
  );
};

const leave3 = () => {
  const tl = gsap.timeline();

  tl.to(span5.value, {
    y: '0%',
    duration: 0.3,
  });

  tl.to(
    span6.value,
    {
      y: '100%',
      duration: 0.3,
    },
    '0'
  );
};

const span7 = ref(null);
const span8 = ref(null);

gsap.set(span7.value, { y: 0 });

const hovered4 = () => {
  const tl = gsap.timeline();

  tl.to(span7.value, {
    y: '-100%',
    duration: 0.3,
  });

  tl.to(
    span8.value,
    {
      y: '0%',
      duration: 0.3,
    },
    '0'
  );
};

const leave4 = () => {
  const tl = gsap.timeline();

  tl.to(span7.value, {
    y: '0%',
    duration: 0.3,
  });

  tl.to(
    span8.value,
    {
      y: '100%',
      duration: 0.3,
    },
    '0'
  );
};

const span9 = ref(null);
const span10 = ref(null);

if (span9.value) gsap.set(span9.value, { y: 0 });

const hovered5 = () => {
  const tl = gsap.timeline();

  tl.to(span9.value, {
    y: '-100%',
    duration: 0.3,
  });

  tl.to(
    span10.value,
    {
      y: '0%',
      duration: 0.3,
    },
    '0'
  );
};

const leave5 = () => {
  const tl = gsap.timeline();

  tl.to(span9.value, {
    y: '0%',
    duration: 0.3,
  });

  tl.to(
    span10.value,
    {
      y: '100%',
      duration: 0.3,
    },
    '0'
  );
};



</script>

<style scoped></style>

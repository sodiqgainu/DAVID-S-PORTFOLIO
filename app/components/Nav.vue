<template>
  <nav
    class="shadow-md py-4 fixed z-50 bg-white inset-x-0 px-5 md:px-[4rem] justify-between items-center flex"
  >
    <div class="flex items-center space-x-8">
      <img
        src="/images/navLogo.png"
        class="w-[30px] md:w-[35px] hover:scale-[1.2] transition-all duration-200"
        alt=""
      />

      <!-- desktop menu -->

      <div class="font-robo-reg space-x-10  md:block hidden"> 
        <button
          @click="scrollTo('work')"
          @mouseover="hovered1"
          @mouseleave="leave1"
          class="relative overflow-hidden"
        >
          <span class="block absolute" ref="span1">Work</span>
          <span class="block translate-y-[100%]" ref="span2">Work</span>
        </button>
        <button
          @click="scrollTo('skills')"
          class="overflow-hidden relative"
          @mouseleave="leave2"
          @mouseover="hovered2"
        >
          <span class="block absolute" ref="span3">Skills</span>
          <span class="block translate-y-[100%]" ref="span4">Skills</span>
        </button>
        <button
          @click="scrollTo('about')"
          @mouseover="hovered3"
          @mouseleave="leave3"
          class="overflow-hidden relative"
        >
          <span class="block absolute" ref="span5">About</span>
          <span class="block translate-y-[100%]" ref="span6">About</span>
        </button>
        <button
          @click="scrollTo('projects')"
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
          @click="scrollTo('work')"
          class="block hover:bg-black shadow-md hover:text-white transition-colors duration-200 py-3 px-3 border-l-4 border-black rounded-xl text-left w-full"
        >
          Work
        </button>
        <button
          @click="scrollTo('skills')"
          class="block w-full text-left hover:bg-black shadow-md px-3 border-l-4 border-black rounded-xl hover:text-white transition-colors duration-200 py-3"
        >
          Skills
        </button>
        <button
          @click="scrollTo('about')"
          class="block w-full text-left shadow-md hover:bg-black px-3 hover:text-white transition-colors duration-200 py-3 border-l-4 border-black rounded-xl"
        >
          About
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
          <button class="border block p-3 bg-dark text-light">Contact</button>
        </div>
      </div>
    </div>
    <!-- end of mobileMenuContent -->

    <!-- desktop button -->

    <div class="space-x-6 md:flex hidden items-center">
        <AnimButton  :text="'Hire me'" :overlayCol="'bg-black'" :textColor="'white'" :prevTextColor="'black'" class="inline-block"/>
        <Magnetic :strength="20">
          <Button class="border px-6 py-2 bg-dark font-robo-reg text-light hidden md:inline-block">
            Contact
          </Button>
        </Magnetic>
       
    </div>
  </nav>
</template>

<script setup>
import gsap from 'gsap';
import Magnetic from '~/Effects/Magnetic.vue';

const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
};

const scrollTo = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    isActive.value = false; // Close the menu after clicking
  }
};

const span1 = ref(null);
const span2 = ref(null);

gsap.set(span1.value, { y: 0 });

const hovered1 = () => {
  const tl = gsap.timeline();

  tl.to(span1.value, {
    y: '-100%',
    duration: 0.3,
  });

  tl.to(
    span2.value,
    {
      y: '0%',
      duration: 0.3,
    },
    '0'
  );
};

const leave1 = () => {
  const tl = gsap.timeline();

  tl.to(span1.value, {
    y: '0%',
    duration: 0.3,
  });

  tl.to(
    span2.value,
    {
      y: '100%',
      duration: 0.3,
    },
    '0'
  );
};

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



</script>

<style scoped></style>

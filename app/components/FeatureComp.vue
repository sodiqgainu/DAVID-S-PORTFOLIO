<template>
  <div class="w-full h-full">
    <div class="bg-white font-black font-robo-reg text-md p-2 flex space-x-5 items-center">
      <h2>{{ index }}</h2>
      <h1>{{ title }}</h1>
    </div>

    <div :class="['flex min-h-[100svh] md:min-h-[100vh] md:mt-auto mt-[3rem] items-center gap-8', reverse ? 'md:flex-row-reverse' : 'md:flex-row', 'flex-col']">
      <div class="text-white md:w-[50%] w-full">
        <h2 class="font-robo-reg">{{ section }}</h2>
        <h1 class="feature-text font-han my-3">{{ headline }}</h1>
        <p class="font-robo-reg">{{ description }}</p>


       
          <div class="mt-[3rem] flex space-x-4">
            <Magnetic :strength="10">
                <Button class="font-robo-reg px-3 py-1 text-white">
                   Learn more
                </Button>
            </Magnetic>

            <div class="flex gap-4 items-center font-robo-reg px-3 py-1 text-white">
                <h3>Details</h3>
                <img src="/images/icons/icon4.png" alt="">
            </div>
          </div>
       
      </div>

      <div class="md:w-[50%] w-full">
        <img :src="imageSrc" :alt="imageAlt" class="w-full object-cover h-auto md:max-h-none max-h-[50svh]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Magnetic from '~/Effects/Magnetic.vue';

const props = defineProps({
  index: { type: [String, Number], required: true },
  title: { type: String, required: true },
  section: { type: String, required: true },
  headline: { type: String, required: true },
  description: { type: String, required: true },
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, default: '' },
  reverse: { type: Boolean, default: false }
})
</script>

<style scoped>
  .feature-text { font-size: clamp(1rem, 5vw, 3rem); }
</style>
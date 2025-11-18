<template>
    <div class="">
      <div>
        <h1 class="font-han hero-text uppercase" data-cursor="-grow">hi, i'm david</h1>
        <p class="font-robo-reg my-3">I craft digital experiences that transform complex ideas into clean, powerful interfaces. My work tells stories through pixels and precision.</p>
    </div>

    <div class="flex space-x-3 md:mt-[5rem] mt-[2.5rem] items-center  justify-start">
        <AnimButton :textColor="'black'" class="text-white" :prevTextColor="'white'" :overlayCol="'bg-white'" :text="'Hire me'"/>
        
        <Magnetic :strength="'20'">
            <Button class="font-robo-reg px-4 py-1 text-white">View work</Button>
        </Magnetic>
   
    </div>
    </div>
    
</template>

<script setup>
import Magnetic from '~/Effects/Magnetic.vue';


</script>

<style scoped>
   .hero-text{
    font-size: clamp(2.5rem, 8vw, 6rem);
   }
</style>
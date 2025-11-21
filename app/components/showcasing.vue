<template>
    <div class="flex flex-col  items-center md:items-center gap-[5rem] md:flex-row md:gap-5">
        <div class="w-[100%] md:w-[50%] max-w-[1200px] mx-auto">
            <img src="/images/image 7.png" class="w-full h-auto object-cover" loading="lazy" alt="">
        </div>


        <div class="w-[100%] md:w-[50%] md:px-9 mx-auto md:order-1 mt-[2rem] md:mt-0 order-[-1]">
            <h3 class="font-robo-reg text-md mb-2">Showcase</h3>
            <h1 class="font-han showcase-text  ">
                Transforming Concepts Into Digital Masterpieces
            </h1>
            <p class="font-robo-reg mt-7">Each project is a journey from raw concept to polished experience. I don't just design websites, I create digital ecosystems.</p>
 
            <div class="mt-12 space-y-4 ">

                <div class="flex space-x-3 items-center">
                     <span><img src="/images/icons/icon1.png" alt=""></span>
                     <span>Responsive-design</span>
                </div>

                <div class="flex space-x-3 items-center">
                     <span><img src="/images/icons/icon2.png" alt=""></span>
                     <span>User-centered approach</span>
                </div>

                <div class="flex space-x-3 items-center">
                     <span><img src="/images/icons/icon3.png" alt=""></span>
                     <span>Performance optimization</span>
                </div>
              
                
            </div>

            <!-- buttons -->

          <div class="mt-[2rem] flex space-x-4">
            <Magnetic>
                <Button class="font-robo-reg px-3 py-1 text-white">
                    Explore
                </Button>
            </Magnetic>

            <div class="flex gap-4 items-center font-robo-reg px-3 py-1 text-white">
                <h3>Details</h3>
                <img src="/images/icons/icon4.png" alt="">
            </div>
          </div>

        </div>

    </div>
</template>

<script setup>
import Magnetic from '~/Effects/Magnetic.vue';
import Button from './Button.vue';


</script>

<style scoped>
  .showcase-text{
    font-size: clamp(2rem, 5vw, 2.6rem);
  }
</style>
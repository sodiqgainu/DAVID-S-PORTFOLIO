<template>
    <section id="work"  class="bg-black py-4 border">
         <div class="max-w-[1200px] w-[90%] mx-auto border ">
            <!-- feature 1 -->
            <div class="w-full">
                <div class="bg-white font-black font-robo-reg text-md p-2 flex  space-x-5 items-center">
                    <h2>01</h2>
                    <h1>Feature 1</h1>
                </div>

                <div class="flex gap-4 md:flex-row flex-col mt-[8rem] items-center ">
                    <div class='text-white md:w-[50%] w-full'>
                        <h2 class="font-robo-reg">Services</h2>
                        <h1 class="feature-text font-han">Precision Tools For Digital Transformation</h1>
                        <p>I deliver solutions that are not just functional, but extraordinary. My approach combines technical skill with creative vision.</p>
                    </div>

                    <div class=" md:w-[50%] w-full">
                        <img src="/images/image 8.png" class="w-full object-cover border h-full" alt="">
                    </div>
                </div>
            </div>
         </div>
    </section>
</template>

<script setup>

</script>

<style  scoped>
   .feature-text{
    font-size: clamp(1rem, 5vw, 3rem);
   }
</style>
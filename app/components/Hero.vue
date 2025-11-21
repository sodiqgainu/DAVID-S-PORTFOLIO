<template>
    <section id="home" class=" bg-black text-light md:pt-[5rem]  pt-[10rem] md:pb-[6rem] pb-[4rem]" data-cursor="-exclusion ">
        <div class="flex flex-col md:flex-row justify-center items-center md:items-center max-w-[1200px] gap-10 md:gap-[3rem] mx-auto w-[90%]">
            <div class="w-full md:w-1/2">
                <HeroText/>
            </div>
            <div class="w-full md:w-1/2 ">
                <HeroMarqueeImages :pauseOnHover="true"/>
            </div>
        </div>

        <div class="max-w-[1200px] w-[90%] mx-auto mt-[5rem] md:mt-[7rem]">
            <Showcasing/>
        </div>
     
    </section>
</template>

<script setup>
import Showcasing from './showcasing.vue';


</script>

<style lang="scss" scoped>

</style>
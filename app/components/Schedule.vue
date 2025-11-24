<template>
    <Section >
        <div ref="scheduleRoot" class="text-white max-w-[768px] w-[90%] space-y-7  flex mx-auto justify-center items-center flex-col py-[5rem] text-center">
            <h1 ref="scheduleHeading" class="font-han schedule-text">Lets Create Something Remarkable</h1>
            <p ref="schedulePara" class="font-robo-reg text-sm">Ready to transform your digital vision into a powerful, engaging reality? I'm here to listen and deliver.</p>

            <div ref="ctaWrap" class="flex space-x-4 md:space-x-6">
               <Magnetic :strength="20">
                <Button class="font-robo-reg px-4 py-1 text-white">
                    Start project
                </Button>
               </Magnetic>

                   <AnimButton :textColor="'black'" class="text-white" :prevTextColor="'white'" :overlayCol="'bg-white'" :text="'Schedule Call'" />
            </div>

        </div>
    </Section>
</template>

<script setup>
import Magnetic from '~/Effects/Magnetic.vue';
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scheduleRoot = ref(null);
const scheduleHeading = ref(null);
const schedulePara = ref(null);
const ctaWrap = ref(null);

onMounted(async () => {
    await nextTick();
    const root = scheduleRoot.value;
    if (!root) return;
    const items = [scheduleHeading.value, schedulePara.value, ctaWrap.value].filter(Boolean);
    gsap.set(items, { opacity: 0, y: 40 });
    gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
            trigger: root,
            start: 'top 50%',
            once: true
        }
    });
});
</script>

<style  scoped>
    .schedule-text {
        font-size: clamp(1.5rem, 5vw, 2.5rem);
    }
</style>
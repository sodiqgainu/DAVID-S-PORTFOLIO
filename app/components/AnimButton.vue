<template>
    <button  class="px-4 bg-none border-1 rounded-full border-primary block font-robo-reg py-1 text-primary relative overflow-hidden" @mouseover="animate" @mouseleave="animateReverse">
         <div class="w-full inset-0 absolute scale-y-0 translate-y-[100%]" :class='props.overlayCol' ref="animBtn"/>
          <h2 class=" relative z-index-1" ref="textElement">{{ props.text }}</h2>
    </button>
</template>

<script setup>
import gsap from 'gsap'
 const props = defineProps({
  
    text: String,
    overlayCol:String,
    textColor:String,
    prevTextColor:String
    
})

const animBtn = ref(null)

const textElement = ref(null)

const animate = () => {
     if (!animBtn.value || !textElement.value) return
  const tl = gsap.timeline()
  tl.to(animBtn.value,{
    y:0,
    scale:1,
    duration:0.2,
    ease:'sine.inOut'
  })
  tl.to(textElement.value,{
    color:`${props.textColor}`,
 
  },'0')
}

const animateReverse = () => {

    if (!animBtn.value || !textElement.value) return

  const tl = gsap.timeline()
 tl.to(animBtn.value,{
  y:'100%',
  scaleY:0,
  duration:0.2,
  ease:'sine.inOut'
 })

 tl.to(textElement.value,{
  color:`${props.prevTextColor}`,
 },'<')
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <section class="bg-white text-dark" id="testimonials">
    <div class="max-w-[1200px] w-[90%] mx-auto md:py-[5rem] py-[3rem]">
      <div>
        <h1 class="font-bold font-han testimonial-text">Client Voices</h1>
        <p class="font-robo-reg text-6 my-3">Real stories from brands that trusted the process</p>
      </div>
    </div>

    <!-- Carousel -->
    <div class="max-w-[1200px] w-[90%] mx-auto pb-[2.5rem] relative">
      <transition-group name="fade" tag="div" class="relative">
        <div
          v-for="(t,i) in testimonials"
          :key="t.id"
          v-show="i === current"
          class="testimonial-item"
        >
          <div class="flex items-center space-x-1 mb-4" :aria-label="t.stars + ' star rating'">
            <svg v-for="n in t.stars" :key="t.id + '-star-' + n" width="24" height="24" viewBox="0 0 24 24" fill="#F9D44A" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2.75l2.93 5.94 6.56.95-4.75 4.63 1.12 6.53L12 17.98l-5.86 3.82 1.12-6.53-4.75-4.63 6.56-.95L12 2.75z" />
            </svg>
          </div>
          <p class="font-robo-reg text-[15px] leading-relaxed max-w-[60ch]">
            {{ t.text }}
          </p>
          <div class="flex items-center mt-4">
            <svg :aria-label="t.company + ' logo'" role="img" width="40" height="40" viewBox="0 0 40 40" class="w-10 h-10 rounded-full mr-3">
              <defs>
                <linearGradient :id="'grad-' + t.id" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" :stop-color="t.logoGradient[0]" />
                  <stop offset="100%" :stop-color="t.logoGradient[1]" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="20" :fill="'url(#grad-' + t.id + ')'" />
              <text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle" font-size="12" font-family="Arial, sans-serif" font-weight="700" fill="#fff" letter-spacing=".5">{{ t.logoText }}</text>
            </svg>
            <div>
              <p class="font-semibold">{{ t.name }}</p>
              <p class="text-sm text-gray-500">{{ t.role }}, {{ t.company }}</p>
            </div>
          </div>
        </div>
      </transition-group>

      <!-- Nav buttons -->
      <div class="flex items-center justify-between mt-8 sm:mt-10">
        <button @click="prev" aria-label="Previous testimonial" class="nav-btn px-4 py-2 border rounded-full text-sm font-robo-reg">Prev</button>
        <div class="flex space-x-2">
          <button
            v-for="(t,i) in testimonials"
            :key="'dot-' + t.id"
            @click="go(i)"
            :aria-label="'Go to testimonial ' + (i+1)"
            class="w-3 h-3 rounded-full transition-colors"
            :class="i === current ? 'bg-dark' : 'bg-gray-300'"
          ></button>
        </div>
        <button @click="next" aria-label="Next testimonial" class="nav-btn px-4 py-2 border rounded-full text-sm font-robo-reg">Next</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 't1',
    stars: 5,
    text: 'David translated our scattered ideas into a clear, engaging digital presence. Communication was fast, revisions were thoughtful, and the final delivery improved our lead conversions within the first week.',
    name: 'Sarah Johnson',
    role: 'Marketing Lead',
    company: 'Acme Corp',
    logoText: 'AC',
    logoGradient: ['#2563eb', '#1e3a8a']
  },
  {
    id: 't2',
    stars: 5,
    text: 'David didn’t just ship a redesign—he solved structural UX issues we ignored for months and lifted trial sign‑ups by 42%. Pixel precision & strategic input made the process effortless.',
    name: 'Michael Adeyemi',
    role: 'Product Manager',
    company: 'Nova Systems',
    logoText: 'NS',
    logoGradient: ['#9333EA', '#4C1D95']
  },
  {
    id: 't3',
    stars: 5,
    text: 'From initial discovery to deployment, David brought clarity and momentum. Our performance metrics improved across the board and stakeholders finally “got it”.',
    name: 'Elena Martins',
    role: 'Operations Director',
    company: 'FlowSuite',
    logoText: 'FS',
    logoGradient: ['#10b981', '#047857']
  }
])

const current = ref(0)
const next = () => { current.value = (current.value + 1) % testimonials.value.length }
const prev = () => { current.value = (current.value - 1 + testimonials.value.length) % testimonials.value.length }
const go = (i) => { current.value = i }
</script>

<style scoped>
.testimonial-text { font-size: clamp(2rem, 2.6vw, 9rem); margin-bottom: .5rem; }
.fade-enter-active, .fade-leave-active { transition: opacity .45s ease, transform .45s ease; }
.fade-enter-from, .fade-leave-to { opacity:0; transform: translateY(20px); }
.testimonial-item { min-height: 220px; }
.nav-btn { background:#fff; color:#111; transition: background .3s ease, color .3s ease; }
.nav-btn:hover { background:#111; color:#fff; }
</style>
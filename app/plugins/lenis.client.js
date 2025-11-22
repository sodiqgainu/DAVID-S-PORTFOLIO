import { defineNuxtPlugin } from '#app';
import Lenis from 'lenis'; // <-- Official lenis import
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.normalizeScroll(true);
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (document && 'fonts' in document) {
    // Refresh after fonts resolve to avoid metric shifts
    document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
  }

  const lenis = new Lenis({
    smooth: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  // Keep ScrollTrigger in sync
  lenis.on('scroll', ScrollTrigger.update);

  // Use GSAP's ticker to drive Lenis
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  if (document) {
    const imgs = Array.from(document.querySelectorAll('img'));
    const pending = imgs.filter((i) => !i.complete);
    if (pending.length) {
      let remaining = pending.length;
      pending.forEach((img) => {
        img.addEventListener(
          'load',
          () => {
            remaining--;
            if (remaining === 0) ScrollTrigger.refresh();
          },
          { once: true }
        );
        img.addEventListener(
          'error',
          () => {
            remaining--;
            if (remaining === 0) ScrollTrigger.refresh();
          },
          { once: true }
        );
      });
    }
    const debounce = (fn, d = 150) => {
      let t = null;
      return () => {
        if (t) clearTimeout(t);
        t = window.setTimeout(fn, d);
      };
    };
    const safeRefresh = debounce(() => ScrollTrigger.refresh(), 120);
    const mo = new MutationObserver(() => {
      safeRefresh();
    });
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('beforeunload', () => mo.disconnect());
  }

  nuxtApp.hook('page:finish', () => ScrollTrigger.refresh());

  return {
    provide: {
      lenis,
    },
  };
});

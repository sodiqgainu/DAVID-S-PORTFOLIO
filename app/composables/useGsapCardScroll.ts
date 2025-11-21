import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function waitForImages(container: HTMLElement): Promise<any> {
  const imgs = Array.from(container.querySelectorAll('img')) as HTMLImageElement[]
  if (!imgs.length) return Promise.resolve()
  return Promise.allSettled(imgs.map(img => {
    if (img.complete) return Promise.resolve(null)
    return new Promise(res => {
      img.addEventListener('load', res, { once: true })
      img.addEventListener('error', res, { once: true })
    })
  }))
}

export interface CardScrollOptions {
  cardSelector?: string
  start?: string
  markers?: boolean
  endMode?: 'cardsHeight' | 'viewportPerCard'
  anticipatePin?: number
}

export function useGsapCardScroll() {
  let tl: gsap.core.Timeline | null = null
  let ctx: gsap.Context | null = null

  function setup(el: HTMLElement, options: CardScrollOptions = {}): gsap.core.Timeline | null {
    const {
      cardSelector = '.feature-card',
      start = 'top 12%',
      markers = false,
      endMode = 'cardsHeight',
      anticipatePin = 1
    } = options

    const cards = gsap.utils.toArray<HTMLElement>(el.querySelectorAll(cardSelector))
    if (!cards.length) return null

    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: cards.length - i,
        autoAlpha: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 0.8
      })
    })

    const dynamicEnd = () => {
      if (endMode === 'viewportPerCard') {
        return `+=${cards.length * window.innerHeight}`
      }
      return `+=${cards.length * el.offsetHeight}`
    }

    const localTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        pin: el,
        start,
        end: dynamicEnd,
        scrub: 1,
        pinSpacing: true,
        anticipatePin: anticipatePin,
       
        invalidateOnRefresh: true,
        onRefresh: () => {
          cards.forEach((card, i) => {
            gsap.set(card, {
              zIndex: cards.length - i,
              autoAlpha: i === 0 ? 1 : 0,
              scale: i === 0 ? 1 : 0.8
            })
          })
        }
      }
    })

    for (let i = 1; i < cards.length; i++) {
      const prev = cards[i - 1] as HTMLElement | undefined
      const card = cards[i] as HTMLElement | undefined
      if (!prev || !card) continue
      localTl.to(prev as HTMLElement, { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: 'power2.inOut' }, i)
      localTl.to(card as HTMLElement, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power2.inOut' }, i)
    }

    tl = localTl
    return localTl
  }

  async function init(el: HTMLElement, options?: CardScrollOptions) {
    if (!el) return null
    ctx = gsap.context(() => {}, el)
    await waitForImages(el)
    const timeline = setup(el, options)
    ScrollTrigger.refresh()
    return timeline
  }

  function destroy() {
    if (ctx) {
      ctx.revert()
      ctx = null
    }
    if (tl && tl.scrollTrigger) {
      tl.scrollTrigger.kill()
    }
    tl = null
  }

  return { init, destroy, waitForImages }
}

## Goal

Create a smooth, infinite vertical marquee for the hero image list, with soft fades at the top and bottom.

## Key Fixes

* Correct image paths in `app/components/HeroMarqueeImages.vue:12–20` from `./images/...` to `/images/...` (served from `public/images`).

* Fix filename casing to match the actual files: change `'frame 24.png'` to `'Frame 24.png'`.

## Structure

* Wrap the images in a fixed-height container with `overflow-hidden`.

* Use a vertical track that contains the images duplicated once to enable seamless looping.

## Animation (GSAP)

* Measure half the track height (since the list is duplicated) and translate the track from `y: 0` to `y: -halfHeight`.

* Use `repeat: -1` and `ease: 'none'` for a continuous, uniform scroll.

* Recompute on resize with `ResizeObserver` to keep the loop gapless.

## Fades

* Add two overlay elements (top and bottom) inside the container:

  * Top: `bg-gradient-to-b from-black/70 to-transparent`.

  * Bottom: `bg-gradient-to-t from-black/70 to-transparent`.

* Alternatively, use a mask for cross-content backgrounds:

  * `mask-image: linear-gradient(to bottom, transparent, black 80px, black calc(100% - 80px), transparent)` plus `-webkit-mask-image`.

## Implementation Steps

1. Update image sources and casing in `HeroMarqueeImages.vue`.
2. Template:

   * Outer: `relative h-[420px] overflow-hidden`.

   * Track: `ref="track"` with `will-change: transform`.

   * Render `loopImages = [...images, ...images]`.
3. Script:

   * `const container = ref(null); const track = ref(null);`

   * On mounted: compute `half = track.scrollHeight / 2`; create GSAP tween:

```
const tl = gsap.fromTo(track.value, { y: 0 }, { y: -half, duration: 20, ease: 'none', repeat: -1 });
```

* Observe resize and update `half` and `tl`.

1. Style:

   * Ensure images have consistent width and margin.

   * Add absolute top/bottom gradient overlays with `pointer-events-none`.

## Verification

* Start dev server, confirm continuous vertical scroll with no jump when looping.

* Verify all images load (paths and casing fixed).

* Inspect performance (60fps, low CPU)


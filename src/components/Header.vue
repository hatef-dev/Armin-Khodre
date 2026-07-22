<template>
  <section ref="pinSection" class="hero-image-swap">
    <div ref="imageFrame" class="relative w-full h-[820px] overflow-hidden">
      <img
        v-for="(img, i) in images"
        :key="img.src"
        :ref="setImageRef(i)"
        :src="img.src"
        :alt="img.alt"
        class="frame-img w-full"
      />
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import car from '@/assets/car.jpg'
import car2 from '@/assets/car2.jpg'
import car3 from '@/assets/car3.jpg'
import car4 from '@/assets/car4.jpg'

export default {
  name: 'HeroImageSwap',
  data() {
    return {
      images: [
        { src: car, alt: '...' },
        { src: car2, alt: '...' },
        { src: car3, alt: '...' },
        { src: car4, alt: '...' },
      ],
      imageEls: [],
      currentIndex: 0,
      isAnimating: false,
    }
  },
  mounted() {
    this.initImages()
    // passive:false لازمه چون می‌خوایم preventDefault کار کنه
    this.$refs.imageFrame.addEventListener('wheel', this.onWheel, { passive: false })
  },
  beforeUnmount() {
    this.$refs.imageFrame?.removeEventListener('wheel', this.onWheel)
  },
  methods: {
    setImageRef(i) {
      return (el) => {
        if (el) this.imageEls[i] = el
      }
    },
    initImages() {
      const els = this.imageEls
      gsap.set(els, { autoAlpha: 0, scale: 1.15 })
      gsap.set(els[0], { autoAlpha: 1, scale: 1 })
    },
    onWheel(e) {
      const goingDown = e.deltaY > 0
      const atLastImage = this.currentIndex === this.images.length - 1
      const atFirstImage = this.currentIndex === 0

      // اگه رسیدیم به لبه‌ی گالری (اولین/آخرین عکس)، اجازه بده صفحه عادی اسکرول کنه
      if ((goingDown && atLastImage) || (!goingDown && atFirstImage)) {
        return // preventDefault نمی‌زنیم -> اسکرول عادی صفحه انجام میشه
      }

      e.preventDefault()

      if (this.isAnimating) return // تا انیمیشن تموم نشه، ورودی جدید رو نادیده بگیر

      const nextIndex = goingDown ? this.currentIndex + 1 : this.currentIndex - 1
      this.goToImage(nextIndex)
    },
    goToImage(nextIndex) {
      const els = this.imageEls
      const current = els[this.currentIndex]
      const next = els[nextIndex]
      const goingDown = nextIndex > this.currentIndex

      this.isAnimating = true

      gsap.to(current, {
        autoAlpha: 0,
        scale: goingDown ? 0.92 : 1.15,
        duration: 0.6,
        ease: 'power2.out',
      })
      gsap.fromTo(
        next,
        { autoAlpha: 0, scale: goingDown ? 1.15 : 0.92 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            this.isAnimating = false
          },
        }
      )

      this.currentIndex = nextIndex
    },
  },
}
</script>

<style scoped>

.frame-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
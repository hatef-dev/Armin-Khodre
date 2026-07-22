<template>
  <section ref="pinSection" class="hero-image-swap h-[820px] group">
    <div ref="imageFrame" class="relative w-full h-full overflow-hidden">
      <img
        v-for="(img, i) in images"
        :key="img.src"
        :ref="setImageRef(i)"
        :src="img.src"
        :alt="img.alt"
        class="frame-img w-full"
      />
      <div
        class="bg-black/20 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-0 flex justify-center items-center"
      >
        <span class="scroll-icon">
          <span class="scroll-icon__wheel-outer">
            <span class="scroll-icon__wheel-inner"></span>
          </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import car from "@/assets/car.jpg";
import car2 from "@/assets/car2.jpg";
import car3 from "@/assets/car3.jpg";
import car4 from "@/assets/car4.jpg";

export default {
  name: "HeroImageSwap",
  data() {
    return {
      images: [
        { src: car, alt: "..." },
        { src: car2, alt: "..." },
        { src: car3, alt: "..." },
        { src: car4, alt: "..." },
      ],
      imageEls: [],
      currentIndex: 0,
      isAnimating: false,
    };
  },
  mounted() {
    this.initImages();
    // passive:false لازمه چون می‌خوایم preventDefault کار کنه
    this.$refs.imageFrame.addEventListener("wheel", this.onWheel, { passive: false });
  },
  beforeUnmount() {
    this.$refs.imageFrame?.removeEventListener("wheel", this.onWheel);
  },
  methods: {
    setImageRef(i) {
      return (el) => {
        if (el) this.imageEls[i] = el;
      };
    },
    initImages() {
      const els = this.imageEls;
      gsap.set(els, { autoAlpha: 0, scale: 1.15 });
      gsap.set(els[0], { autoAlpha: 1, scale: 1 });
    },
    onWheel(e) {
      const goingDown = e.deltaY > 0;
      const atLastImage = this.currentIndex === this.images.length - 1;
      const atFirstImage = this.currentIndex === 0;

      // اگه رسیدیم به لبه‌ی گالری (اولین/آخرین عکس)، اجازه بده صفحه عادی اسکرول کنه
      if ((goingDown && atLastImage) || (!goingDown && atFirstImage)) {
        return; // preventDefault نمی‌زنیم -> اسکرول عادی صفحه انجام میشه
      }

      e.preventDefault();

      if (this.isAnimating) return; // تا انیمیشن تموم نشه، ورودی جدید رو نادیده بگیر

      const nextIndex = goingDown ? this.currentIndex + 1 : this.currentIndex - 1;
      this.goToImage(nextIndex);
    },
    goToImage(nextIndex) {
      const els = this.imageEls;
      const current = els[this.currentIndex];
      const next = els[nextIndex];
      const goingDown = nextIndex > this.currentIndex;

      this.isAnimating = true;

      gsap.to(current, {
        autoAlpha: 0,
        scale: goingDown ? 0.92 : 1.15,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.fromTo(
        next,
        { autoAlpha: 0, scale: goingDown ? 1.15 : 0.92 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            this.isAnimating = false;
          },
        },
      );

      this.currentIndex = nextIndex;
    },
  },
};
</script>

<style scoped>
.frame-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes scroll_1 {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-0.6em);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(0.6em);
  }
  100% {
    transform: translateY(0);
  }
}

.example--1 {
  background: tomato;
}

.scroll-icon__wheel-outer {
  display: block;
  position: relative;
  left: 50%;
  top: 0.6em;
  height: 1em;
  width: 0.4em;
  margin-left: -0.2em;
  border-radius: 0.4em;
  overflow: hidden;
}

.scroll-icon__wheel-inner {
  display: block;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  background: #fff;
  animation: scroll_1 2.75s ease-in-out infinite;
}
.scroll-icon {
  display: block;
  position: relative;
  height: 3.5em;
  width: 2.5em;
  border: 0.25em solid #fff;
  border-radius: 1em;
}
</style>

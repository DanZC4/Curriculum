<template>
  <div>
    <div class="relative z-10 bg-gray-400">
      <div class="flex justify-center">
        <div class="px-0 sm:px-24 md:px-36 lg:px-48 w-200 max-w-12xl">
          <div class="mb-16 duration-300 text-gray-100">
            <div class="mb-20">
              <div class="mb-4 flex justify-start pt-12 p-4">
                <h2 class="text-3xl font-bold mr-4">About Me</h2>
                <div class="flex">
                  <div class="bg-blue-500 bathtub ml-0.5 -translate-y-1.5 w-[2.20rem] h-5"></div>
                  <img src="~/static/img/bathtub.svg" alt="" class="absolute" width="40" height="40">
                </div>
              </div>
              <div class="text-xl px-4 pb-8">
                <div class="mt-10 mb-12">
                  <div class="flex flex-wrap justify-between  gap-12">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    darkmode: Boolean
  },
  data() {
    return {
      blink: false,
    }
  },
  methods: {
    toBlink() {
      this.blink = true;
      setTimeout(() => {
        this.blink = false;
      }, 100);
    },
  },
  created() {
    setInterval(() => {
      this.toBlink()
    }, 9000)
  }
}
</script>

<style>
@keyframes example {

  0%,
  100% {
    clip-path: polygon(0 100%, 0 56%, 11% 50%, 25% 44%, 36% 45%, 48% 50%, 57% 54%, 67% 54%, 77% 51%, 83% 50%, 91% 52%, 100% 59%, 100% 100%);
  }

  50% {
    clip-path: polygon(0 100%, 0 64%, 8% 57%, 18% 54%, 28% 52%, 40% 53%, 48% 59%, 63% 50%, 71% 46%, 81% 45%, 91% 48%, 100% 54%, 100% 100%);
  }
}

/* The element to apply the animation to */
.bathtub {
  position: relative;
  animation: example 3s ease-in-out infinite;
}






.torso {
  clip-path: polygon(25% 0%, 75% 0%, 100% 11%, 86% 100%, 14% 100%, 0 11%);
}

.hand {
  clip-path: polygon(50% 0%, 100% 26%, 84% 100%, 14% 100%, 0 17%);
}

.rotate-Y {
  transform: rotateY(180deg);
  translate: 1.4rem 0px;
}

.rotate-Y-pierna {
  transform: rotateY(180deg);
}

.levitato {
  animation: levitar 3s ease-in-out infinite;
}

@keyframes levitar {

  0%,
  100% {
    transform: translateY(0rem);
  }

  50% {
    transform: translateY(1rem);
  }
}

.shadow-size {
  animation: shadow 3s ease-in-out infinite;
}

@keyframes shadow {

  0%,
  100% {
    transform: scale(0.8, 0.8) rotateX(-0.2turn);
  }

  50% {
    transform: scale(1, 1) rotateX(-0.2turn);
  }
}

.flag {
  animation: flag 3s ease-in-out infinite;
}

@keyframes flag {

  0%,
  100% {
    transform: rotate(42deg) translate(8rem, 3.2rem) skewY(12deg);
  }

  50% {
    transform: rotate(42deg) translate(8rem, 3.2rem) skewY(6deg);
  }
}


.banda {
  animation: banda 3s ease-in-out infinite;
}

@keyframes banda {

  0%,
  100% {
    transform: skewY(25deg) rotate(-25deg);
  }

  50% {
    transform: skewY(26deg) rotate(-25deg);
    ;
  }
}

.arm {
  animation: arm 3s ease-in-out infinite;
}

@keyframes arm {

  0%,
  100% {
    transform: rotate(0deg) translateY(0rem);
  }

  50% {
    transform: rotate(5deg) translateY(0.12rem);
    ;
  }
}
</style>

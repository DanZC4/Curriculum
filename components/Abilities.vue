
<template>
  <div :class="darkmode ? 'bg-blue-800' : 'bg-gradient-to-t from-gray-50  to-blue-400'" ref="sky">
    <!-- sky -->
    <div class="w-full">
      <div class="w-60 absolute right-96 transfrom translate-y-24">
        <div :class="darkmode ? 'hidden' : 'block'">
          <div class="w-12 h-12 bg-orange-50 rounded-full shadow-yellow-300 shadow-2xl"></div>

          <div class="flex justify-end opacity-0 1xl:opacity-100">
            <div class="w-14 h-14 bg-orange-400 rounded-full shadow-orange-300 shadow-2xl"></div>
          </div>
        </div>
        <div :class="darkmode ? 'block' : 'hidden'">
          <div class="w-16 h-16 bg-blue-100 rounded-full  shadow-2xl ">
            <div class="w-12 h-12 bg-blue-800 rounded-full"></div>
          </div>
          <!-- STARS -->
          <div v-for="star in stars" :key="" class="w-1 h-1 bg-blue-50 rounded-full  shadow-2xl "
            :class="star.position"></div>

        </div>
      </div>
    </div>
    <!-- abilidades -->
    <div class="w-full h-[18rem] sm:h-[28rem]">
      <!-- stars -->

      <div class="flex justify-center overflow-hidden">
        <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-24 ant:pt-36 max-w-12xl 1xl:min-w-[100rem]">

          <h2 class="text-3xl sm:text-4xl -mt-6 sm:mt-0 text-black font-bold">S<span
              class="text-yellow-600">k</span>i<span class="text-gray-500">l</span><span
              class="text-yellow-600">l</span>s</h2>
          <div class="hidden sm:flex sm:w-[28rem]">
            <component :is="darkmode ? 'DarthVaderSable' : 'ObiWanSable'" :light_saber="light_saber"
              @sablerOn="light_saber = !light_saber"></component>
          </div>
        </div>
      </div>
    </div>

    <!-- suelo -->
    <div class="w-full">
      <div class="w-full h-[2rem] -mb-10 montanas " :class="darkmode ? ' bg-sky-700' : 'bg-orange-200'"></div>
      <div class="w-full h-[4rem] -mb-2 arena" :class="darkmode ? ' bg-sky-500' : 'bg-yellow-100'"></div>

      <!-- tegnologies -->
      <div class="flex justify-center absolute w-full">
        <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-20 max-w-12xl">
          <div class="p-4 mb-16 duration-300  text-gray-800">
            <div class="mb-20">
              <div class="mb-4 flex justify-start  pt-12 p-4">
                <div class="flex">
                  <!-- vue -->
                  <div class="force_vue">
                    <div class="-translate-y-[16rem] sm:-translate-x-[4rem]">
                      <svg class="logo sm:w-16 sm:h-16 w-10 h-10 rotate-[0deg]" viewBox="0 0 128 128"
                        data-v-e0ef77de="">
                        <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                          data-v-e0ef77de=""></path>
                        <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-e0ef77de="">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <!-- tailwind -->
                  <div
                    class="sm:-translate-x-[12rem] -translate-x-[4rem] translate-y-[5rem] sm:-translate-y-[3rem] flex flex-col items-center">
                    <div class=" opacity-40 w-20 h-20 sm:w-24 sm:h-24 bg-gray-800 rounded-full"
                      style=" transform: rotateX(-0.2turn);">
                    </div>
                    <div
                      class=" sm:w-16 sm:h-16 w-10 h-10 bg-blue-100 rounded-lg -translate-y-[4.8rem] sm:-translate-y-[7rem]">
                      <svg class=" sm:w-16 sm:h-16 w-10 h-10 -rotate-[30deg]" id="Layer_1" data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 73.29">
                        <defs>
                          <style>
                            .cls-1 {
                              fill: #06b6d4;
                              fill-rule: evenodd;
                            }
                          </style>
                        </defs>
                        <path class="cls-1"
                          d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z" />
                      </svg>
                    </div>

                  </div>
                  <!-- BOOSTRAP -->
                  <div
                    class=" sm:translate-x-[12rem] translate-x-[4rem] translate-y-[5rem] sm:-translate-y-[3rem] flex flex-col items-center">
                    <div class=" opacity-40 w-20 h-20 sm:w-24 sm:h-24 bg-gray-800 rounded-full"
                      style=" transform: rotateX(-0.2turn);">
                    </div>
                    <div
                      class=" sm:w-16 sm:h-16 w-10 h-10 bg-purple-800 rounded-lg flex justify-center items-center font-bold text-white sm:text-5xl text-2xl -translate-y-[4.8rem] sm:-translate-y-[7rem]">
                      B
                    </div>

                  </div>
                </div>
                <!-- laravel -->
                <div class="force_laravel">
                  <div class="-translate-y-[16rem] sm:translate-x-[4rem]">
                    <svg class=" sm:w-16 sm:h-16 w-10 h-10 -translate-y-[0rem] translate-x-[0rem]"
                      viewBox="0 -.11376601 49.74245785 51.31690859" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z"
                        fill="#ff2d20" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- jedie -->
    <Exodya :darkmode="darkmode"></Exodya>
    <div class="w-full h-[24rem]  " :class="darkmode ? ' bg-sky-500' : 'bg-yellow-100'"></div>
  </div>


</template>

<script>

import ObiWanSable from './Sables/ObiWanSable.vue';
import DarthVaderSable from './Sables/DarthVaderSable.vue'
import Exodya from './Monitos/Exodya.vue'

export default {
  data() {
    return {
      light_saber: false,
      stars: [
        { position: 'translate-y-[-8rem] translate-x-[28rem]' },
        { position: '-translate-y-[7rem] -translate-x-[30rem]' },
        { position: 'translate-y-[10rem] translate-x-[10rem]' },
        { position: '-translate-y-[2rem] translate-x-[18rem]' },
        { position: '-translate-y-[5rem] translate-x-[25rem]' },
        { position: 'translate-y-[6rem] -translate-x-[20rem]' },
        { position: '-translate-y-[4rem] -translate-x-[50rem]' },
        { position: 'translate-y-[0rem] -translate-x-[60rem]' },
        { position: '-translate-y-[8rem] -translate-x-[64rem]' },
        { position: 'translate-y-[12rem] -translate-x-[54rem]' },
        { position: 'translate-y-[6rem] -translate-x-[57rem]' },
        { position: 'translate-y-[3rem] -translate-x-[26rem]' },
        { position: 'translate-y-[9rem] -translate-x-[35rem]' },
        { position: '-translate-y-[4rem] -translate-x-[15rem]' },
      ]
    }
  },
  components: {
    ObiWanSable,
    Exodya,
    DarthVaderSable
  },

  props: {
    darkmode: Boolean,
    tecnologies: Array,
  },
  methods: {
    turnOn() {
      // esto es el tope de la pagina
      let topScroll = document.documentElement.scrollTop;

      let altura = this.$refs.sky.offsetTop;

      if (altura - 200 < topScroll) {
        return this.light_saber = true
      }
    }
  },
  created() {
    let width;
    if (typeof window !== "undefined") {
      width = window.addEventListener('scroll', this.turnOn);
    }
    /* window.addEventListener('scroll', this.turnOn); */
    console.log(width)
  },
  destroyed() {
    let width;
    if (typeof window !== "undefined") {
      width = window.removeEventListener('scroll', this.turnOn);
    }
    /*  window.removeEventListener('scroll', this.turnOn); */
  },
};
</script>

<style>
.arena {
  clip-path: polygon(0 100%, 0% 51%, 8% 47%, 16% 43%, 21% 43%, 27% 47%, 34% 50%, 40% 54%, 51% 50%, 56% 47%, 61% 43%, 68% 41%, 77% 44%, 83% 45%, 86% 48%, 91% 49%, 93% 54%, 96% 58%, 100% 59%, 100% 100%);
}

.montanas {
  clip-path: polygon(0% 10%, 8% 11%, 11% 21%, 22% 19%, 29% 17%, 34% 7%, 45% 3%, 48% 11%, 52% 14%, 55% 24%, 63% 24%, 67% 24%, 74% 20%, 77% 16%, 83% 13%, 89% 14%, 93% 21%, 100% 29%, 100% 100%, 0 100%);
}



.force_vue {
  animation: force_vue 3s ease-in infinite;
}

@keyframes force_vue {

  0%,
  100% {
    transform: translate(0rem, 0rem);
  }

  50% {
    transform: translate(1rem, 1rem);
  }
}

.force_laravel {
  animation: force 3s ease-in infinite;
}

@keyframes force {

  0%,
  100% {
    transform: translate(0rem, 0rem);
  }

  50% {
    transform: translate(-1rem, 1rem);
  }
}
</style>

<template>
  <div :class="darkmode ? 'bg-blue-800' : 'bg-gradient-to-t from-gray-50  to-blue-400'" class="overflow-hidden"
    ref="sky">
    <!-- sky -->
    <div class="w-full">
      <div class="w-60 absolute right-96 transfrom translate-y-24">
        <!-- suns -->
        <div :class="darkmode ? 'hidden' : 'block'">
          <div class="w-12 h-12 bg-orange-50 rounded-full shadow-yellow-300 shadow-2xl"></div>

          <div class="flex justify-end opacity-0 1xl:opacity-100">
            <div class="w-14 h-14 bg-orange-400 rounded-full shadow-orange-300 shadow-2xl"></div>
          </div>
        </div>
        <!-- moon -->
        <div :class="darkmode ? 'block' : 'hidden'">
          <div class="w-16 h-16 -translate-y-4 bg-blue-100 rounded-full  shadow-2xl ">
            <div class="w-12 h-12 bg-blue-800 rounded-full"></div>
          </div>
          <!-- STARS -->
          <div v-for="star in stars" :key="" class="w-1 h-1 bg-blue-50 rounded-full  shadow-2xl "
            :class="star.position"></div>

        </div>
      </div>
    </div>

    <Title :darkmode="darkmode" :light_saber="light_saber">
      <template v-slot>
        <component :is="darkmode ? 'DarthVaderSable' : 'ObiWanSable'" :light_saber="light_saber"
          @sablerOn="light_saber = !light_saber"></component>
      </template>
    </Title>

    <!-- suelo -->
    <div class="w-full ">
      <div class="w-full h-[5rem] -mb-[2rem] montana1 " :class="darkmode ? ' bg-sky-800' : 'bg-orange-300'"></div>
      <div class="w-full h-[3rem] -mb-10 montanas " :class="darkmode ? ' bg-sky-700' : 'bg-orange-200'"></div>
      <div class="w-full h-[4rem] -mb-2 arena" :class="darkmode ? ' bg-sky-500' : 'bg-yellow-100'"></div>

      <!-- tegnologies -->
      <Tegnologies></Tegnologies>


    </div>

    <!-- jedie -->
    <Exodya :darkmode="darkmode"></Exodya>
    <div class="w-full h-[24rem]  " :class="darkmode ? ' bg-sky-500' : 'bg-yellow-100'"></div>
  </div>


</template>

<script>


import Exodya from './Abilities/Monitos/Exodya.vue'
import Title from './Abilities/Title.vue'
import Tegnologies from './Abilities/Tegnologies.vue';
import ObiWanSable from './Abilities/Sables/ObiWanSable.vue';
import DarthVaderSable from './Abilities/Sables/DarthVaderSable.vue'

export default {
  data() {
    return {
      light_saber: false,
      stars: [
        { position: 'translate-y-[13rem] translate-x-[28rem]' },
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
    Exodya,
    Title,
    Tegnologies,
    ObiWanSable,
    DarthVaderSable,
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

.montana1 {
  clip-path: polygon(0 100%, 0 46%, 7% 32%, 11% 25%, 17% 15%, 22% 6%, 29% 3%, 35% 3%, 40% 6%, 47% 14%, 51% 23%, 53% 33%, 55% 42%, 58% 51%, 60% 66%, 67% 74%, 74% 77%, 81% 79%, 92% 81%, 100% 87%, 100% 100%);
}
</style>
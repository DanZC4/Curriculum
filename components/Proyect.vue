<template>
  <div class="relative z-10 bg-gray-800">
    <div class="flex justify-center">
      <div class="px-0 sm:px-24 md:px-36 lg:px-48 w-200 max-w-12xl">
        <div class="mb-16 duration-300 text-gray-100">
          <div class="mb-20">
            <div class="mb-4 flex justify-start pt-12 p-4">
              <h2 class="text-3xl font-bold mr-4">Ninja Missions</h2>
              <div class="flex">
                <div class="bg-blue-500 bathtub ml-0.5 -translate-y-1.5 w-[2.20rem] h-5"></div>
                <img src="~/static/img/bathtub.svg" alt="" class="absolute" width="40" height="40">
              </div>
            </div>
            <div class="text-xl px-4 pb-8">
              <div class="mt-10 mb-12">
                <div class="flex flex-wrap justify-between  gap-12">
                  <div v-for="page in pages" :key="page.id" v-on:mouseover="ligths = page.id" v-on:mouseleave="ligths = null" class="
                      w-72
                      ant:w-80
                      h-auto
                      text-center
                      duration-300
                      bg-gray-900 text-gray-100
                    ">
                    <div>
                      <a :href="page.link">
                        <div class="space-y-2 pt-2">
                          <div class="flex justify-between items-center">
                            <img src="~/static/img/paper-lantern.svg" 
                            class="rounded-full  duration-200"
                            :class="ligths == page.id ? 'bg-opacity-40 bg-yellow-300 shadow-yellow-300 shadow' : ''" alt="" width="36" height="36">
                            <h3 class="font-bold text-2xl">{{ page.name }}</h3>
                            <img src="~/static/img/paper-lantern.svg" 
                            class="rounded-full  duration-200"
                            :class="ligths == page.id ? 'bg-opacity-40 bg-yellow-300 shadow-yellow-300 shadow' : ''" alt="" width="36" height="36">
                          </div>
                          <div class="h-auto border-t-2 border-orange-700">
                            <img :src="'/img/' + page.image" alt="" class="w-full h-full " />
                          </div>
                        </div>
                      </a>
                    </div>
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
  data(){
    return{
      ligths: null
    }
  },
  props: {
    darkmode: Boolean,
    pages: Array,
  },
};
</script>

<style>
@keyframes example {
  0%, 100% {
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
</style>

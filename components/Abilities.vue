<template>
  <div class="bg-gradient-to-t from-gray-50  to-blue-400">
    <!-- sky -->
    <div class="w-full">
      <div class="w-60 absolute right-96 transfrom translate-y-24">

        <div class="w-12 h-12 bg-orange-50 rounded-full shadow-yellow-300 shadow-2xl"></div>

        <div class="flex justify-end">
          <div class="w-14 h-14 bg-orange-400 rounded-full shadow-orange-300 shadow-2xl"></div>
        </div>
      </div>

    </div>
    <!-- abilidades -->
    <div class="flex justify-center">
      <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-20 max-w-12xl">
        <div class="p-4 mb-16 duration-300  text-gray-800">
          <div class="mb-20">
            <div class="mb-4 flex justify-start  pt-12 p-4">
              <div class="">
                <h2 class="text-3xl font-bold">My Abilities</h2>
                <!-- obi wan -->
                <div class="h-6 flex items-center absolute -m-32">
                  <!-- 18 +  -->

                  <div class="h-3.5 w-0.5 bg-gray-900  "></div>

                  <div class="h-4 w-3 bg-gray-400 rounded-[1px] flex justify-between flex-col items-center">
                    <div class="h-1.5 w-1.5 bg-gray-500 rounded-[1px] -mt-0.5"></div>
                    <div class="h-1.5 w-1.5 bg-gray-500 rounded-[1px]"></div>
                    <div class="h-1.5 w-1.5 bg-gray-500 rounded-[1px] -mb-0.5"></div>
                  </div>

                  <div class="h-3.5 w-0.5 bg-gray-900  "></div>

                  <div class="h-4 w-3.5 bg-gray-800 flex flex-col justify-between">
                    <div class="h-0.5 w-full bg-gray-900"></div>
                    <div class="h-0.5 w-full bg-gray-900"></div>
                    <div class="h-0.5 w-full bg-gray-900"></div>
                    <div class="h-0.5 w-full bg-gray-900"></div>
                    <div class="h-0.5 w-full bg-gray-900"></div>
                  </div>

                  <div class="h-4 w-5 bg-gray-400 ">
                    <button @click="light_saber_obi_wan = !light_saber_obi_wan" class="h-2 w-5 bg-gray-500 -mb-0.5">
                      <div class="h-1 w-4 bg-amber-400"></div>
                    </button>
                  </div>

                  <div class="h-4 w-0.5 bg-gray-400 "></div>
                  <div class="h-4 w-1 bg-gray-900 rounded-t-[1px]"></div>

                  <div class="h-3 w-0.5 bg-gray-800"></div>
                  <div class="h-4 w-1 bg-gray-900 rounded-[1px]"></div>

                  <div class="h-3 w-0.5 bg-gray-800"></div>

                  <div class="h-4 w-1 bg-gray-900 rounded-[1px]"></div>

                  <div class="h-3 w-0.5 bg-gray-800"></div>

                  <div class="h-4 w-1 bg-gray-900 rounded-[1px]"></div>

                  <div class="h-3 w-0.5 bg-gray-800"></div>

                  <div class="h-4 w-1 bg-gray-900 rounded-t-lg"></div>

                  <div class="h-2 w-2 bg-amber-400"></div>

                  <div class="h-4 w-1.5 bg-amber-400 rounded-[1px]"></div>

                  <div class="h-2 w-2 bg-yellow-600"></div>

                  <div class="h-3 w-1.5 bg-gray-400"></div>

                  <div class="h-4 w-2 bg-gray-400"></div>

                  <div class="h-5 w-1 bg-gray-400"></div>

                  <div class="h-6 w-1 bg-gray-400 rounded-lg"></div>

                  <div
                    class=" rounded-r-full h-2.5 bg-gradient-to-t from-blue-500 via-gray-50 to-blue-500 duration-200 shadow-blue-400 shadow "
                    :class="light_saber_obi_wan ? 'w-80' : 'w-0 opacity-0'"></div>

                </div>
                <!-- darth vader -->
                <div class="h-6 flex items-center absolute">
                  <!-- 18 +  -->
                  <div class="h-3.5 w-1 bg-gray-400  "></div>
                  <div class="h-4 w-10 bg-gray-400  flex justify-between flex-col">
                    <div class="h-1 w-10 bg-gray-900 rounded-[1px] -mt-0.5"></div>
                    <div class="h-1 w-10 bg-gray-900 rounded-[1px]"></div>
                    <div class="h-1 w-10 bg-gray-900 rounded-[1px] -mb-0.5"></div>
                  </div>
                  <div class="h-4 w-4.5 bg-gray-900 rounded-[1px]">
                    <button @click="light_saber_darth_vader = !light_saber_darth_vader"
                      class="h-2 w-5 bg-black -mb-0.5">
                      <div class="h-1 w-4 bg-gray-400 m-auto"></div>
                    </button>
                  </div>
                  <div class="h-3.5 w-6 bg-gray-400 z-10">
                    <div class="h-1 w-3 bg-gray-900 rounded-bl flex justify-end -mt-[1px] float-right">
                      <div class="w-1 h-0.5 bg-gray-400  rounded-t-[2px] -mt-0.5"></div>
                    </div>
                  </div>
                  <div class="z-10 h-4 w-1 bg-gray-900 rounded-bl-[1px]"></div>
                  <div
                    class="z-10 h-0 w-0 border-l-8 border-l-gray-900 border-t-8 border-t-gray-900 border-b-8 border-b-transparent border-r-8 border-r-transparent ">
                    <div class="w-1 h-0.5 bg-yellow-600  rounded-t-[2px] -translate-y-2.5 -ml-2"></div>
                  </div>
                  <div
                    class="-translate-x-5 z-0 rounded-r-full h-2.5 bg-gradient-to-t from-red-500 via-gray-50 to-red-500 shadow-red-400 shadow  duration-200"
                    :class="light_saber_darth_vader ? 'w-80' : 'w-0 opacity-0'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- jedies -->
    <div class="w-full">
      <div class="">
        <!-- Dart Vader -->
        <div class=" w-52 h-auto mx-auto">
          <!-- head -->
          <div class="flex flex-col items-center ">
            <div class="translate-y-5 z-20">
              <div class="translate-y-[2.15rem] translate-x-[3.825rem]">
                <div class="flex z-10">
                  <!-- <div class="w-0.5 h-4 bg-red-600"></div> -->
                  <div class="w-0.5 h-4 bg-red-600 rotate-[12deg] translate-x-1"></div>
                  <div class="w-0.5 h-4 bg-red-600 -rotate-[16deg] "></div>
                  <div class="w-0.5 h-4 bg-red-600 rotate-[18deg] translate-x-[0.10rem]"></div>
                  <div class="w-0.5 h-4 bg-red-600 -rotate-[10deg] -translate-x-[0.35rem]"></div>
                  <div class="w-0.5 h-4 bg-red-600 -rotate-[20deg] -translate-x-[0.65rem]"></div>
                </div>

                <div class="w-1.5 h-auto  z-20 -translate-y-[0.05rem]">
                  <div class="w-full h-0.5 bg-gray-600"></div>
                  <div class="w-full h-0.5 bg-gray-400"></div>
                  <div class="w-full h-0.5 bg-gray-600"></div>
                  <div class="w-full h-0.5 bg-gray-400"></div>
                  <div class="w-full h-0.5 bg-gray-900"></div>
                </div>
              </div>
              <div
                class="w-0 h-0 border-t-[2rem] border-t-transparent border-x-[4rem] border-x-transparent border-b-[2rem] border-b-gray-700">
              </div>
              <div class="w-full h-1.5 bg-gray-900 -translate-y-0.5 rounded-xl"></div>
            </div>
            <div class="w-12 h-14 rounded-full bg-gray-400 flex items-center border-b-2  border-gray-800 z-10">
              <div class="w-[3.25rem] h-2 bg-gray-800 -mt-1 absolute rounded-sm -ml-0.5 z-20 ">
                <div class="flex space-x-1 -mt-0.5 ml-1">
                  <div
                    class="w-5 h-3.5 bg-gray-50 border-2 border-gray-900 rounded-tl rounded-br rounded-tr-lg rounded-bl-lg ">
                  </div>
                  <div
                    class="w-5 h-3.5 bg-gray-50 border-2 border-gray-900 rounded-tr rounded-bl rounded-tl-lg rounded-br-lg ">
                  </div>
                </div>

              </div>
              <div
                class="w-3 h-1.5 rounded-t-xl transform translate-y-[1.55rem] translate-x-[1.15rem] bg-gray-800 absolute">
                <!-- <div class="absolute w-6 h-1 bg-gray-800"></div> -->
                <div
                  class="absolute w-[1.40rem] h-1 bg-gray-800 translate-x-[0.55rem] -translate-y-[0.20rem] transform rotate-[150deg] ">
                  <div class="absolute w-1 h-[1.40rem] bg-gray-800 rotate-[30deg] -translate-x-[0.40rem]"></div>
                </div>

                <div
                  class="absolute w-[1.40rem] h-1 bg-gray-800 -translate-x-[1.25rem] -translate-y-[0.20rem] transform -rotate-[150deg]">
                  <div class="absolute w-1 h-[1.40rem] bg-gray-800 -rotate-[30deg] translate-x-[1.55rem]"></div>
                </div>
              </div>
              <div class="w-5 h-full border-x border-dashed border-gray-800 translate-x-3.5 z-10"></div>
            </div>


          </div>
          <!-- neck -->
          <div class="flex flex-col items-center ">
            <div class="w-8 h-1 bg-gray-500 -translate-y-2 z-0"></div>
            <div class="w-[2.25rem] h-2 bg-green-800 -translate-y-2 z-0 rounded-t-[2px]"></div>
            <div class="w-[2.50rem] h-2 bg-green-800 -translate-y-2 z-0 rounded-t-[2px]">

            </div>
            <div class="w-[3rem] absolute h-1 bg-green-800 translate-y-2.5 z-30 rounded-t-full"></div>
          </div>
          <!-- torso -->
          <div class="flex flex-col items-center ">
            <div>
              <!-- arm -->
              <div class="absolute">
                <div
                  class="h-[1.2rem] w-[0.8rem] translate-y-[1.8rem] -rotate-[65deg] -translate-x-[0.8rem] absolute z-20 bg-gray-900 ">
                </div>
                <div
                  class="w-[4rem] h-[1.2rem]  translate-y-[1.6rem] -rotate-[65deg] -translate-x-[2.3rem] rounded-l-full bg-gray-400">
                </div>
                <!-- hand -->
                <div class="">
                  <div
                    class="h-[1.8rem] w-[1.4rem] translate-y-[0.30rem]  hand -rotate-[45deg] -translate-x-[4.5rem] absolute z-20 bg-gray-600 ">
                  </div>
                  <div
                    class="h-[1rem] w-[0.4rem] translate-y-[0.50rem]   -rotate-[25deg] -translate-x-[3.3rem] absolute z-20 bg-gray-600 border-l border-gray-800">
                  </div>
                  <div
                    class="h-[0.2rem] w-[1.2rem] translate-y-[1.75rem]   -rotate-[45deg] -translate-x-[3.7rem] absolute z-20 bg-gray-800 ">
                  </div>
                </div>

                <div
                  class="w-[3rem] h-[1rem]  translate-y-[1.8rem] rotate-[20deg] rounded-br-full -translate-x-[3.4rem]  bg-gray-400">
                </div>

              </div>
              <!-- arm -->
              <div class="absolute rotate-Y ">
                <div
                  class="h-[1.2rem] w-[0.8rem] translate-y-[1.8rem] -rotate-[65deg] -translate-x-[0.8rem] absolute z-20 bg-gray-900 ">
                </div>
                <div
                  class="w-[4rem] h-[1.2rem]  translate-y-[1.6rem] -rotate-[65deg] -translate-x-[2.3rem] rounded-l-full bg-gray-400">
                </div>
                <!-- hand -->
                <div class="">
                  <div
                    class="h-[1.8rem] w-[1.4rem] translate-y-[0.30rem]  hand -rotate-[45deg] -translate-x-[4.5rem] absolute z-20 bg-gray-600 ">
                  </div>
                  <div
                    class="h-[1rem] w-[0.4rem] translate-y-[0.50rem]   -rotate-[25deg] -translate-x-[3.3rem] absolute z-20 bg-gray-600 border-l border-gray-800">
                  </div>
                  <div
                    class="h-[0.2rem] w-[1.2rem] translate-y-[1.75rem]   -rotate-[45deg] -translate-x-[3.7rem] absolute z-20 bg-gray-800 ">
                  </div>
                </div>

                <div
                  class="w-[3rem] h-[1rem]  translate-y-[1.8rem] rotate-[20deg] rounded-br-full -translate-x-[3.4rem]  bg-gray-400">
                </div>

              </div>
              <div>
                <div
                  class="w-[1.5rem] h-5 rounded-b-full bg-gray-800 absolute -rotate-[25deg] z-10 -translate-y-[0.2rem] translate-x-[0.2rem] flex justify-center items-center">
                  <div class="w-[0.4rem] h-[0.4rem] bg-gray-500 rounded-full border border-gray-900"></div>
                </div>
                <div
                  class="w-[1.5rem] h-5 rounded-b-full bg-gray-800 absolute rotate-[25deg] z-10 -translate-y-[0.22rem] translate-x-[3.65rem] flex justify-center items-center">
                  <div class="w-[0.4rem] h-[0.4rem] bg-gray-500 rounded-full border border-gray-900"></div>
                </div>
                <div class="w-[5.4rem] h-[6rem] bg-gray-600 -translate-y-2 torso"></div>
                <div
                  class="w-[5.9rem] h-0.5 bg-gray-800 absolute rotate-90 -translate-y-[3.5rem] -translate-x-[0.25rem]">
                </div>
              </div>



            </div>


          </div>
        </div>
      </div>
    </div>


    <!-- earth -->
    <div class="w-full">
      <div class="w-full h-[2rem] -mb-12 montanas bg-orange-200"></div>
      <div class="w-full h-[4rem] -mb-2 arena bg-yellow-100"></div>
      <div class="w-full h-[16rem]  bg-yellow-100">
        <!-- mounts -->

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      light_saber_obi_wan: false,
      light_saber_darth_vader: false,
    }
  },
  props: {
    darkmode: Boolean,
    tecnologies: Array,
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
</style>
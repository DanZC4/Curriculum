
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
                <div class="h-6 flex items-center absolute -mt-32">
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


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- suelo -->
    <div class="w-full">
      <div class="w-full h-[2rem] -mb-10 montanas bg-orange-200"></div>
      <div class="w-full h-[4rem] -mb-2 arena bg-yellow-100"></div>

      <!-- tegnologies -->
      <div class="flex justify-center absolute w-full">
        <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-20 max-w-12xl">
          <div class="p-4 mb-16 duration-300  text-gray-800">
            <div class="mb-20">
              <div class="mb-4 flex justify-start  pt-12 p-4">
                <div class="flex">
                  <!-- vue -->
                  <div class="force_vue">
                    <div class="-translate-y-[16rem] -translate-x-[4rem]">
                      <svg class="logo w-16 h-16 rotate-[0deg]" viewBox="0 0 128 128" data-v-e0ef77de="">
                        <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                          data-v-e0ef77de=""></path>
                        <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-e0ef77de="">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <!-- tailwind -->
                  <div class="-translate-x-[12rem] -translate-y-[3rem] flex flex-col items-center">
                    <div class=" opacity-40 w-24 h-24 bg-gray-800 rounded-full" style=" transform: rotateX(-0.2turn);">
                    </div>
                    <div class=" w-16 h-16 bg-blue-100 rounded-lg -translate-y-[7rem]">
                      <svg class=" w-16 h-16 -rotate-[30deg]" id="Layer_1" data-name="Layer 1"
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
                  <div class="translate-x-[12rem] -translate-y-[3rem] flex flex-col items-center">
                    <div class=" opacity-40 w-24 h-24 bg-gray-800 rounded-full" style=" transform: rotateX(-0.2turn);">
                    </div>
                    <div
                      class=" w-16 h-16 bg-purple-800 rounded-lg flex justify-center items-center font-bold text-white text-5xl -translate-y-[7rem]">
                      B
                    </div>

                  </div>
                </div>
                <!-- laravel -->
                <div class="force_laravel">
                  <div class="-translate-y-[16rem] translate-x-[4rem]">
                    <svg class=" w-16 h-16 -translate-y-[0rem] translate-x-[0rem]"
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
    <div class="w-full absolute -translate-y-[14rem] overflow-x-hidden">
      <div class=" ">
        <div class=" w-52 h-auto mx-auto">
          <!-- head -->
          <div class="levitato">
            <div class="flex flex-col items-center ">
              <!-- hat -->
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
              <!-- face -->
              <div class="w-12 h-14 rounded-full bg-gray-400 flex items-center border-b-2  border-gray-800 z-10"
                @click="toBlink">
                <div class="w-[3.25rem] h-2 bg-gray-800 -mt-1 absolute rounded-sm -ml-0.5 z-20 ">
                  <!-- bandas detras de la cabesa -->
                  <div class="translate-x-[3rem] absolute rotate-[25deg] translate-y-4 translate-x-[2.8rem]">
                    <div class="w-12 h-2 bg-gray-800 skew-x-[25deg] "></div>
                    <div class="w-12 h-2 bg-gray-800 skew-x-[25deg] rotate-12"></div>
                  </div>
                  <!-- Glases -->
                  <div class="flex space-x-1 -mt-0.5 ml-1">
                    <div class="w-5 h-3.5  border-2  rounded-tl rounded-br rounded-tr-lg rounded-bl-lg "
                      :class="blink ? 'bg-gray-800 border-gray-800' : 'bg-gray-50 border-gray-900'">
                    </div>
                    <div class="w-5 h-3.5  border-2  rounded-tr rounded-bl rounded-tl-lg rounded-br-lg "
                      :class="blink ? 'bg-gray-800 border-gray-800' : 'bg-gray-50 border-gray-900'">
                    </div>
                  </div>


                </div>
                <!-- barbilla -->
                <div
                  class="w-3 h-1.5 rounded-t-xl transform translate-y-[1.55rem] translate-x-[1.15rem] bg-gray-800 absolute">
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
            <!-- flag -->
            <div class="absolute flex  h-[3rem] flag">
              <div class="w-[5rem] h-full bg-green-800 ">
              </div>
              <div class="w-[6rem] h-full bg-gray-50 flex justify-center items-center">
                <div class="w-8 h-8 rounded-full bg-orange-900"></div>
              </div>
              <div class="w-[6rem] h-full bg-red-800 ">
              </div>
            </div>


            <!-- neck -->
            <div class="flex flex-col items-center ">
              <div class="w-8 h-1 bg-gray-500 -translate-y-2 z-0"></div>
              <div class="w-[2.25rem] h-2 bg-green-800 -translate-y-2 z-0 rounded-t-[2px]">
              </div>
              <div class="w-[2.50rem] h-2 bg-green-800 -translate-y-2 z-0 rounded-t-[2px]">

              </div>
              <div class="w-[3rem] absolute h-1 bg-green-800 translate-y-2.5 z-30 rounded-t-full"></div>
            </div>
            <!-- torso -->
            <div class="flex flex-col items-center ">
              <div>
                <!-- arm -->
                <div class="absolute arm">
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
                  <div class="arm">
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
                </div>
                <!--tronco-->
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
                <!--cinto-->
                <div class="bg-gray-800 h-2 w-[4rem] -mt-[0.6rem] translate-x-[0.68rem]">
                </div>

                <div class="bg-gray-500 h-[2.1rem] w-[4rem]  translate-x-[0.68rem] flex">
                  <!--pierna -->
                  <div
                    class="bg-gray-500 h-[2.2rem] w-[4rem] -translate-y-[0.45rem] -translate-x-[3.8rem] rounded-l-full skew-y-[8deg] rotate-[5deg]">
                    <div
                      class="bg-gray-400 h-[2rem] w-[6rem] translate-y-[0.58rem] translate-x-[0rem] rounded-l-full  rotate-[12deg] border-r-4 border-gray-800 flex justify-end">
                      <div class="flex translate-x-[2rem] ">
                        <!--bota -->
                        <div class="w-[3rem] h-[2rem] bg-gray-600 rounded-r-full flex justify-end">
                          <div class="w-[0.25rem] h-[2rem] bg-gray-700"></div>
                          <div class="flex flex-col justify-around">
                            <div class="w-[2rem] h-0.5 bg-gray-700 rotate-6"></div>
                            <div class="w-[2rem] h-0.5 bg-gray-700 -rotate-6"></div>
                          </div>
                          <div class="h-full w-[1.5rem] bg-gray-700 rounded-r-full  "></div>

                        </div>

                      </div>
                    </div>
                  </div>
                  <!--pierna -->
                  <div class="rotate-Y-pierna">
                    <div
                      class="bg-gray-500 h-[2.2rem] w-[4rem] -translate-y-[0.45rem] translate-x-[0.5rem] rounded-l-full skew-y-[8deg] rotate-[5deg] ">
                      <div
                        class="bg-gray-400 h-[2rem] w-[6rem] translate-y-[0.58rem] translate-x-[0rem] rounded-l-full  rotate-[12deg] border-r-4 border-gray-800 flex justify-end">
                        <div class="flex translate-x-[2rem] ">
                          <!--bota -->
                          <div class="w-[3rem] h-[2rem] bg-gray-600 rounded-r-full flex justify-end">
                            <div class="w-[0.25rem] h-[2rem] bg-gray-700"></div>
                            <div class="flex flex-col justify-around">
                              <div class="w-[2rem] h-0.5 bg-gray-700 rotate-6"></div>
                              <div class="w-[2rem] h-0.5 bg-gray-700 -rotate-6"></div>
                            </div>
                            <div class="h-full w-[1.5rem] bg-gray-700 rounded-r-full  "></div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>


            </div>
          </div>

          <div class="w-52 h-52 bg-gray-900 rounded-full mx-auto shadow-size -mt-6 opacity-40" style=""></div>
        </div>


      </div>
    </div>
    <div class="w-full h-[20rem]  bg-yellow-100">
      <!-- mounts -->
    </div>
  </div>

  <!-- jedies -->



  <!-- earth -->


  </div>
</template>

<script>


export default {
  data() {
    return {
      light_saber_obi_wan: false,
      light_saber_darth_vader: false,
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
  props: {
    darkmode: Boolean,
    tecnologies: Array,
  },
  created() {
    setInterval(() => {
      this.toBlink()
    }, 9000)
  }

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
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(5deg);
    ;
  }
}
</style>
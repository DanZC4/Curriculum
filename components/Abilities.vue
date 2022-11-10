<template>
  <div class="flex justify-center">
    <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-20 max-w-12xl">
      <div class="p-4 mb-16 duration-300  text-gray-800">
        <div class="mb-20">
          <div class="mb-4 flex justify-start  pt-12 p-4">
            <div class="">
              <h2 class="text-3xl font-bold">My Abilities</h2>
              <!-- obi wan -->
              <div class="h-6 flex items-center">
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

              <div class="h-6 flex items-center">
                <!-- 18 +  -->

                <div class="h-3.5 w-1 bg-gray-400  "></div>

                <div class="h-4 w-10 bg-gray-400  flex justify-between flex-col">
                  <div class="h-1 w-10 bg-gray-900 rounded-[1px] -mt-0.5"></div>
                  <div class="h-1 w-10 bg-gray-900 rounded-[1px]"></div>
                  <div class="h-1 w-10 bg-gray-900 rounded-[1px] -mb-0.5"></div>
                </div>
                <div class="h-4 w-4.5 bg-gray-900 rounded-[1px]">
                  <button @click="light_saber_darth_vader = !light_saber_darth_vader" class="h-2 w-5 bg-black -mb-0.5">
                    <div class="h-1 w-4 bg-gray-400 m-auto"></div>
                  </button>
                </div>




                <div class="h-3.5 w-6 bg-gray-400">
                  <div class="h-1 w-3 bg-gray-900 rounded-bl flex justify-end -mt-[1px] float-right">
                    <div class="w-1 h-0.5 bg-gray-400  rounded-t-[2px] -mt-0.5"></div>

                  </div>
                </div>

                <div class="h-4 w-1 bg-gray-900 rounded-bl-[1px]"></div>

                <div
                  class="h-0 w-0 border-l-8 border-l-gray-900 border-t-8 border-t-gray-900 border-b-8 border-b-transparent border-r-8 border-r-transparent ">
                  <div class="w-1 h-0.5 bg-yellow-600  rounded-t-[2px] -translate-y-2.5 -ml-2"></div>
                </div>
                <div
                  class="-translate-x-5 -z-10 rounded-r-full h-2.5 bg-gradient-to-t from-red-500 via-gray-50 to-red-500 shadow-red-400 shadow  duration-200"
                  :class="light_saber_darth_vader ? 'w-80' : 'w-0 opacity-0'"></div>

              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div class="flex flex-wrap justify-center">
                  <div v-for="tecnology in tecnologies" :key="tecnology.id" class="m-6 ant:m-10 ">
                    <div :class="tecnology.color" class="
                        w-24
                        h-24
                        ant:w-32
                        ant:h-32
                        flex
                        justify-center
                        items-center
                        rounded-lg
                        text-2xl
                        font-bold
                        transform
                        duration-300
                        hover:rotate-6
                      ">
                      {{ tecnology.name }}
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
  created() {
    console.log('pvto')
  }
};
</script>

<style>

</style>
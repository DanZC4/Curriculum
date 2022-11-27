<template>
     <div class="h-6 flex items-center ">
                  <!-- 18 +  -->
                  <div class="h-3.5 w-1 bg-gray-400  "></div>
                  <div class="h-4 w-10 bg-gray-400  flex justify-between flex-col">
                    <div class="h-1 w-10 bg-gray-900 rounded-[1px] -mt-0.5"></div>
                    <div class="h-1 w-10 bg-gray-900 rounded-[1px]"></div>
                    <div class="h-1 w-10 bg-gray-900 rounded-[1px] -mb-0.5"></div>
                  </div>
                  <div class="h-4 w-4.5 bg-gray-900 rounded-[1px]">
                    <button @click="$emit('sablerOn')"
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
                    class="-translate-x-5 z-0 rounded-r-full h-2.5 border-y-4 border-r-4 duration-150 border-red-500 bg-red-200 shadow-red-400 shadow "
                    :class="light_saber ? 'w-80' : 'w-0 opacity-0'"></div>
                </div>
</template>

<script>
export default {
  props : {
        light_saber: Boolean,
    }
}
</script>
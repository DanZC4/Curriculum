<template>
  <div class="shadow fixed w-full z-20">
    <div>
      <div class="  flex bg-gray-900 justify-center">
        <div class="px-0 sm:px-24 md:px-36 lg:px-48 w-full  max-w-12xl m-auto flex justify-between items-center">
          <div>
            <h1 class=" hidden ant:flex text-gray-100 font-bold text-2xl  py-2">
              DANIEL ZAMBRANO 
            </h1>
            <h1 class="ant:hidden text-gray-100 font-bold text-2xl px-6 py-2">
              DZC
            </h1>
          </div>
          <div>

            <button class="top-0  w-16 -rotate-[20deg]  flex" @click="$emit('darkmode')">
              <div class="h-3 w-1 border-x-2 border-t-2 border-orange-900 m-auto bg-orange-900 rounded-t"></div>
              <div class="h-6 w-full border  flex items-center rounded-sm" :class="darkmode ? 'border-gray-700 bg-gray-700' : 'border-gray-100 bg-gray-100'">
                <div :class="darkmode ? 'text-gray-900 border-gray-900 mx-auto bg-gray-100' : 'text-gray-100 border-gray-100 mx-auto bg-gray-800'"
                  class="h-6 w-5 border-y  font-bold text-center text-sm rotate-90">
                  {{ darkmode ? '輝' : '暗'}}
                </div>
              </div>
              <div class="h-3 w-1 border-x-2 border-b-2 border-orange-900 m-auto bg-orange-900 rounded-b"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    darkmode: Boolean,
  }
}
</script>
